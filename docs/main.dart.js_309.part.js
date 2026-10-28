((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,R,A0,G,F,E,A1,A2,A3,A4,S,T,A5,A6,M,A7,H,A8,A9,U,V,W,Aa,Ab,X,Ac,Ad,Ae,Y,Af,Ag,K,Ah,Z,A_,O,Ai,L,P,C={
bAY(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bAY=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v2(null,""),$async$bAY)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.U(y.j)
t=A.mX(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dn(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.ds(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qB(t,a1,B.hj,E.EB),$async$bAY)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PA(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ac(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.U(l!=null&&A.Kk(l)?y.l:y.i)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1l(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAY,v)},
afH(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afH=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v2(null,""),$async$afH)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.U(y.j)
t=A.mX(b6)
s=x.S
r=A.db(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a18(new A.J(r,new C.fsh(),r.$ti.k("J<aj.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fsg(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afH)
case 6:l=c5
k=F.PA(l==null?"":l)
if(k==null)throw A.U("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.amR(s,D.dge,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afH)
case 10:l=c5
k=l==null?null:F.PA(l)
if(k==null)throw A.U(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d7(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kS(a5,a2.k("kS<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
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
p=A.cD(new A.bc(h,s),new C.fsi(),s.k("H.E"),p)
p=F.a18(A.p1(p,3,A.a3(p).k("H.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cy<1>")
b4=A.B(new A.cy(h,s),s.k("H.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1l(s,b9),$async$afH)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.amR(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afH,v)},
hg5(d,e,f){return A.c9(null,B.w.j(0.65),!1,null,new C.fBn(e,f),d,null,!0,!0,x.g2)},
amR:function amR(d,e,f){this.a=d
this.b=e
this.c=f},
fsh:function fsh(){},
fsg:function fsg(d){this.a=d},
fsi:function fsi(){},
fBn:function fBn(d,e){this.a=d
this.b=e},
byO(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$byO=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.fhD())){u=null
w=1
break}t=B.d.d9(b1,new C.fhE())
s=$.X()
r=new A.rP()
q=A.Gw(r,D.aKl)
p=A.M()
p.r=B.c.gp(0)
q.aY(D.aKl,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fA
n=new C.fhJ(t)
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
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
return A.b(r.qc().yY(520,160),$async$byO)
case 4:w=3
return A.b(b3.hm(B.fS),$async$byO)
case 3:b0=b3
u=b0==null?null:J.fa(B.dF.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byO,v)},
fpY(d){return C.hUg(d)},
hUg(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fpY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bdE()
n=d.x!=null&&d.yE(null).length===0
if(d.x!=null)t=n?D.yQ:D.HD
else t=d.gST()?D.HD:D.aFq
w=3
return A.b(C.byO(d.ax),$async$fpY)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alA(s)
r=A.a3f(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aFq}else{p.c=C.wo(q,!0)
p.b=n?D.yQ:D.HD}r.a1Y(A.fLh(new C.fq_(p,d,new C.fq0(),t,n,o),null,D.brB,B.vK))
u=r.jP(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fpY,v)},
fwB(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fwB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fpY(d),$async$fwB)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A6.G_(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwB,v)},
fhD:function fhD(){},
fhE:function fhE(){},
fhJ:function fhJ(d){this.a=d},
fq0:function fq0(){},
fq_:function fq_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fpZ:function fpZ(){},
fBP(d,e){var w=0,v=A.j(x.H)
var $async$fBP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,B.w.j(0.55),!0,null,new C.fBT(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fBP)
case 2:return A.h(null,v)}})
return A.i($async$fBP,v)},
bBr(d,e,f,g){return C.i0D(d,e,f,g)},
i0D(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBr=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gam(e.split(",")):e
r=B.cB.aI(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eN2)
w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.fBL(g,r,f),d,null,!0,!0,x.H),$async$bBr)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBr,v)},
fBU(d,e){var w=0,v=A.j(x.H)
var $async$fBU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,null,!0,null,new C.fBX(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fBU)
case 2:return A.h(null,v)}})
return A.i($async$fBU,v)},
aWT:function aWT(d,e){this.c=d
this.a=e},
c_j:function c_j(){},
b8U:function b8U(d,e){this.b=d
this.a=e},
fBT:function fBT(d,e){this.a=d
this.b=e},
fBQ:function fBQ(d){this.a=d},
fBR:function fBR(d,e,f){this.a=d
this.b=e
this.c=f},
fBS:function fBS(d,e){this.a=d
this.b=e},
fBL:function fBL(d,e,f){this.a=d
this.b=e
this.c=f},
fBJ:function fBJ(d){this.a=d},
fBK:function fBK(d,e,f){this.a=d
this.b=e
this.c=f},
fBX:function fBX(d,e){this.a=d
this.b=e},
fBV:function fBV(d){this.a=d},
fBW:function fBW(d,e,f){this.a=d
this.b=e
this.c=f},
fl3(d,e){var w=0,v=A.j(x.y),u,t
var $async$fl3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0U(d),$async$fl3)
case 3:t=g
J.ng(t,new C.fl4(e))
u=A.agk(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fl3,v)},
fl4:function fl4(d){this.a=d},
amY:function amY(d,e,f){this.c=d
this.d=e
this.a=f},
aBc:function aBc(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dCM:function dCM(d,e){this.a=d
this.b=e},
dCx:function dCx(d,e){this.a=d
this.b=e},
dCA:function dCA(d,e,f){this.a=d
this.b=e
this.c=f},
dCz:function dCz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dCy:function dCy(d,e){this.a=d
this.b=e},
dCB:function dCB(d,e){this.a=d
this.b=e},
dCv:function dCv(){},
dCw:function dCw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCu:function dCu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCf:function dCf(d){this.a=d},
dCg:function dCg(d,e,f){this.a=d
this.b=e
this.c=f},
dCh:function dCh(d,e){this.a=d
this.b=e},
dCe:function dCe(d){this.a=d},
dCm:function dCm(d,e){this.a=d
this.b=e},
dCd:function dCd(d){this.a=d},
dCn:function dCn(d,e,f){this.a=d
this.b=e
this.c=f},
dCo:function dCo(d,e,f){this.a=d
this.b=e
this.c=f},
dCc:function dCc(d,e){this.a=d
this.b=e},
dCp:function dCp(d,e,f){this.a=d
this.b=e
this.c=f},
dCb:function dCb(d,e){this.a=d
this.b=e},
dCq:function dCq(d,e){this.a=d
this.b=e},
dCa:function dCa(d){this.a=d},
dCr:function dCr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dC8:function dC8(){},
dC2:function dC2(d){this.a=d},
dC3:function dC3(d){this.a=d},
dC9:function dC9(d,e){this.a=d
this.b=e},
dCs:function dCs(d,e){this.a=d
this.b=e},
dC7:function dC7(d){this.a=d},
dCt:function dCt(d){this.a=d},
dC6:function dC6(){},
dCi:function dCi(d,e){this.a=d
this.b=e},
dC5:function dC5(d){this.a=d},
dCj:function dCj(d,e,f){this.a=d
this.b=e
this.c=f},
dC4:function dC4(d,e){this.a=d
this.b=e},
dC1:function dC1(d,e){this.a=d
this.b=e},
dCk:function dCk(d){this.a=d},
dCl:function dCl(d,e,f){this.a=d
this.b=e
this.c=f},
dCP:function dCP(){},
dCQ:function dCQ(d,e){this.a=d
this.b=e},
dCN:function dCN(d){this.a=d},
dCO:function dCO(d){this.a=d},
dCJ:function dCJ(d,e){this.a=d
this.b=e},
dCK:function dCK(d){this.a=d},
dCC:function dCC(d,e,f){this.a=d
this.b=e
this.c=f},
dCD:function dCD(d,e,f){this.a=d
this.b=e
this.c=f},
dCE:function dCE(d,e,f){this.a=d
this.b=e
this.c=f},
dCF:function dCF(d,e,f){this.a=d
this.b=e
this.c=f},
dCG:function dCG(d,e,f){this.a=d
this.b=e
this.c=f},
dCH:function dCH(d,e,f){this.a=d
this.b=e
this.c=f},
dCI:function dCI(d,e,f){this.a=d
this.b=e
this.c=f},
dCR:function dCR(){},
dCS:function dCS(){},
dCT:function dCT(){},
dCU:function dCU(d){this.a=d},
dCL:function dCL(d,e){this.a=d
this.b=e},
hci(d){return B.d.dM(D.a0G,new C.flz(d),new C.flA())},
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
flz:function flz(d){this.a=d},
flA:function flA(){},
ajj:function ajj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSG:function aSG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RO:function RO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcs:function bcs(){this.d=$
this.c=this.a=null},
d2E:function d2E(d,e){this.a=d
this.b=e},
d2C:function d2C(d,e){this.a=d
this.b=e},
d2D:function d2D(){},
d2F:function d2F(d,e){this.a=d
this.b=e},
fYg(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n2(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
K5(d,e){return C.hSU(d,e)},
hSU(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$K5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$K5)
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
o=A.cD(o,new C.fny(),o.$ti.k("H.E"),x.B)
n=A.a3(o).k("a2<H.E>")
o=A.B(new A.a2(o,new C.fnz(),n),n.k("H.E"))
B.d.b1(o,new C.fnA())
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
return A.i($async$K5,v)},
Ao(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Ao=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$Ao)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fAt(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Ao)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ao,v)},
aOT(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aOT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K5(d,e),$async$aOT)
case 2:u=h
t=J.cE(u)
s=t.bd(u,new C.fIx(f))
if(s===-1)t.cn(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ao(d,e,u),$async$aOT)
case 3:return A.h(null,v)}})
return A.i($async$aOT,v)},
bzf(d,e,f){var w=0,v=A.j(x.H),u
var $async$bzf=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K5(d,e),$async$bzf)
case 2:u=h
J.ng(u,new C.fkW(f))
w=3
return A.b(C.Ao(d,e,u),$async$bzf)
case 3:return A.h(null,v)}})
return A.i($async$bzf,v)},
bzu(d,e){return C.hST(d,e)},
hST(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzu=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bzu)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.LV
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
if(D.BQ.ah(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a29,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a1D,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1y,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cN6,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.GX(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.LV
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.LV
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzu,v)},
QE(d,e,f){return C.i09(d,e,f)},
i09(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QE=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$QE)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ad(),null)),$async$QE)
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
return A.i($async$QE,v)},
Q8(d,e){return C.hSV(d,e)},
hSV(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Q8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Q8)
case 7:r=g
q=r.rP("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.K5(d,e),$async$Q8)
case 8:if(!j.cw(g)){n=B.a.i(d.toLowerCase())
m=J.lj(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Q8)
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
return A.i($async$Q8,v)},
af_(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$af_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q8(d,e),$async$af_)
case 3:s=g
r=J.a8(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.aA(),$async$af_)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$af_)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$af_,v)},
a1y(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1y=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Q8(d,e),$async$a1y)
case 2:s=h
J.hJ(s,f)
w=3
return A.b(A.aA(),$async$a1y)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1y)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1y)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1y)
case 6:return A.h(null,v)}})
return A.i($async$a1y,v)},
n2:function n2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fny:function fny(){},
fnz:function fnz(){},
fnA:function fnA(){},
fAt:function fAt(){},
fIx:function fIx(d){this.a=d},
fkW:function fkW(d){this.a=d},
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
bLr:function bLr(d){this.a=d},
i0s(d,e,f,g,h,i,j){return A.a5(d,!1).ce(A.ej(new C.fB1(j,i,f,e,h,g),!0,null,x.H))},
Q4(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Q4=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q8(h,g),$async$Q4)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ac(k)>=6){d.I(x.q).f.R(D.aMn)
u=!1
w=1
break}w=4
return A.b(C.hg5(d,f,e),$async$Q4)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.af_(h,g),$async$Q4)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n2(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.Ao(h,r,p),$async$Q4)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QE(h,r,new C.GX("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Q4)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
fB1:function fB1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ym:function Ym(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayf:function ayf(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d3j:function d3j(d){this.a=d},
d3i:function d3i(d,e){this.a=d
this.b=e},
d37:function d37(d,e){this.a=d
this.b=e},
d34:function d34(d,e){this.a=d
this.b=e},
d2G:function d2G(d){this.a=d},
d2H:function d2H(d,e){this.a=d
this.b=e},
d38:function d38(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2O:function d2O(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
d35:function d35(d){this.a=d},
d36:function d36(){},
d2L:function d2L(d){this.a=d},
d2M:function d2M(d,e){this.a=d
this.b=e},
d2R:function d2R(d){this.a=d},
d2S:function d2S(d,e){this.a=d
this.b=e},
d3h:function d3h(d){this.a=d},
d3g:function d3g(d,e){this.a=d
this.b=e},
d3f:function d3f(d){this.a=d},
d31:function d31(d){this.a=d},
d30:function d30(d){this.a=d},
d32:function d32(d){this.a=d},
d2I:function d2I(d,e){this.a=d
this.b=e},
d33:function d33(d,e){this.a=d
this.b=e},
d2V:function d2V(d){this.a=d},
d2W:function d2W(d){this.a=d},
d2U:function d2U(){},
d2X:function d2X(d){this.a=d},
d2Y:function d2Y(d){this.a=d},
d2Z:function d2Z(d,e){this.a=d
this.b=e},
d3_:function d3_(d,e,f){this.a=d
this.b=e
this.c=f},
d2T:function d2T(d,e){this.a=d
this.b=e},
d3a:function d3a(d){this.a=d},
d39:function d39(){},
d3b:function d3b(d){this.a=d},
d3c:function d3c(d){this.a=d},
d3d:function d3d(d){this.a=d},
d3e:function d3e(d,e){this.a=d
this.b=e},
d2J:function d2J(d){this.a=d},
d2K:function d2K(d){this.a=d},
Yq:function Yq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcN:function bcN(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d53:function d53(d){this.a=d},
d54:function d54(d){this.a=d},
d52:function d52(d){this.a=d},
d55:function d55(d){this.a=d},
d51:function d51(d){this.a=d},
d56:function d56(d){this.a=d},
d50:function d50(d){this.a=d},
d57:function d57(d,e){this.a=d
this.b=e},
d5_:function d5_(d,e){this.a=d
this.b=e},
d58:function d58(d,e){this.a=d
this.b=e},
Yo:function Yo(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adu:function adu(d,e,f){this.a=d
this.b=e
this.c=f},
ayg:function ayg(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d3y:function d3y(d,e){this.a=d
this.b=e},
d3x:function d3x(d,e){this.a=d
this.b=e},
d3C:function d3C(d){this.a=d},
d3B:function d3B(d,e){this.a=d
this.b=e},
d3z:function d3z(d){this.a=d},
d3A:function d3A(d){this.a=d},
d3D:function d3D(d){this.a=d},
d3E:function d3E(d){this.a=d},
d3w:function d3w(d,e){this.a=d
this.b=e},
d3v:function d3v(d,e){this.a=d
this.b=e},
Jd:function Jd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XF:function XF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cCB:function cCB(d){this.a=d},
cCC:function cCC(){},
cCD:function cCD(d){this.a=d},
ba4:function ba4(d,e,f){this.b=d
this.c=e
this.a=f},
b9W:function b9W(d,e){this.b=d
this.a=e},
tY:function tY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XX:function XX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba2:function ba2(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cW2:function cW2(d,e,f){this.a=d
this.b=e
this.c=f},
cW1:function cW1(d,e){this.a=d
this.b=e},
cWr:function cWr(d){this.a=d},
cWe:function cWe(){},
cWs:function cWs(d){this.a=d},
cWd:function cWd(){},
cWt:function cWt(d,e){this.a=d
this.b=e},
cWc:function cWc(d,e){this.a=d
this.b=e},
cWu:function cWu(d,e){this.a=d
this.b=e},
cWb:function cWb(d,e){this.a=d
this.b=e},
cWv:function cWv(d){this.a=d},
cWa:function cWa(){},
cWw:function cWw(d,e){this.a=d
this.b=e},
cW9:function cW9(d,e){this.a=d
this.b=e},
cWx:function cWx(d){this.a=d},
cWm:function cWm(d,e){this.a=d
this.b=e},
cWy:function cWy(d){this.a=d},
cWz:function cWz(d){this.a=d},
cWB:function cWB(d){this.a=d},
cWC:function cWC(d){this.a=d},
cWl:function cWl(d,e){this.a=d
this.b=e},
cWD:function cWD(d,e){this.a=d
this.b=e},
aFf:function aFf(d){this.a=d},
bff:function bff(d){this.a=d},
b8i:function b8i(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hRS(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agw(a6),a5=a4.length
if(a5===0)return""
w=A.V(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bx(new A.S(Date.now(),0,!1))
s=new C.flD(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("H.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xq)m.push(l===D.YH?"male":"female")
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
if(e!=null&&w.ah(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.flB(u,f),p),new C.flC(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hRT(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agw(a0),d=e.length
if(d===0)return""
w=x.N
v=A.V(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.flI(v,e)
q=new C.flG(v)
p=A.V(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ah(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ah(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.d9(new A.bc(p,d),d.k("H.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.fG(l,new C.flH(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ah(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hDD(d,e,f,g){var w,v,u=C.hRU(d,e)
if(u<=0||f.length<=u)return new A.ad4(!1,D.BF,f)
if(g.t(0,e.a))return new A.ad4(!1,D.BF,f)
w=A.T(f).c
v=A.db(f,0,A.dJ(u,"count",x.S),w).dE(0)
return new A.ad4(!0,A.db(f,u,null,w).dE(0),v)},
hDE(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agw(d3),d2=d1.length
if(d2===0)return D.fFd
w=x.N
v=A.V(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ci(0,t.a,new C.d3L(t))}s=new C.d41(v)
d2=x.h
r=A.V(w,d2)
q=new C.d3U(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d3T(r)
l=A.V(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.ci(0,k,new C.d3M()),o)}h=new C.d3S(s)
g=new C.d3R(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<H.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d3N(h),o),o.k("H.E"))
e=f.length===0?new A.bc(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
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
a9=new C.d4_(new C.d3W(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.V(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajb(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.ah(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qZ(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.V(w,x.cc)
b5=A.a([],x.M)
b6=A.V(w,d2)
b7=new C.d3K(a2,new C.d40(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cy<1>")
d2=A.B(new A.cy(b4,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.F8(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jl(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cy<1>")
d2=A.B(new A.cy(b6,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bH(0,new C.d3O(c6,b4))
for(d2=new A.cJ(a4,a4.$ti.k("cJ<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gU(j)
if(b6.ah(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.fG(j,new C.d3P(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b1(o,new C.d3Q())
c6.push(new C.aHk(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcx(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hbQ(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
h6f(d,e,f,g,h,i,j,k,l,m,n){return new C.Z_(k,f,j,e,l,n,m,d,g,h,i,null)},
aAd(d,e,f,g,h,i,j){return new C.bgb(i,d,e,f,j,h,g,null)},
ao3:function ao3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBN:function aBN(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQn:function dQn(d){this.a=d},
dQm:function dQm(d){this.a=d},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQr:function dQr(d){this.a=d},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQo:function dQo(d){this.a=d},
dQt:function dQt(d){this.a=d},
dQs:function dQs(d,e){this.a=d
this.b=e},
anY:function anY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBK:function aBK(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dPO:function dPO(d){this.a=d},
dPM:function dPM(d){this.a=d},
dPN:function dPN(d){this.a=d},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPJ:function dPJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPh:function dPh(d){this.a=d},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPw:function dPw(d){this.a=d},
dPu:function dPu(d){this.a=d},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPx:function dPx(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPA:function dPA(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPz:function dPz(d){this.a=d},
dPD:function dPD(d){this.a=d},
dPE:function dPE(d){this.a=d},
dPH:function dPH(d,e){this.a=d
this.b=e},
dP5:function dP5(d,e){this.a=d
this.b=e},
dP6:function dP6(d,e){this.a=d
this.b=e},
dPR:function dPR(d,e,f){this.a=d
this.b=e
this.c=f},
dPL:function dPL(d,e,f){this.a=d
this.b=e
this.c=f},
dPK:function dPK(d){this.a=d},
dP7:function dP7(d){this.a=d},
dP8:function dP8(d){this.a=d},
dP9:function dP9(){},
dPa:function dPa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPd:function dPd(d,e){this.a=d
this.b=e},
dPc:function dPc(d){this.a=d},
dPf:function dPf(d,e){this.a=d
this.b=e},
dPb:function dPb(d){this.a=d},
dPQ:function dPQ(d){this.a=d},
dPr:function dPr(){},
dPs:function dPs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPq:function dPq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPm:function dPm(d,e,f){this.a=d
this.b=e
this.c=f},
dPl:function dPl(d,e,f){this.a=d
this.b=e
this.c=f},
dPj:function dPj(d,e){this.a=d
this.b=e},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPp:function dPp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPY:function dPY(){},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d){this.a=d},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dPU:function dPU(d){this.a=d},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPW:function dPW(d,e){this.a=d
this.b=e},
dPX:function dPX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dQ1:function dQ1(d){this.a=d},
dPT:function dPT(d){this.a=d},
dPg:function dPg(d){this.a=d},
bcv:function bcv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d3I:function d3I(d){this.a=d},
d3H:function d3H(d,e){this.a=d
this.b=e},
d3J:function d3J(d){this.a=d},
d3G:function d3G(d,e){this.a=d
this.b=e},
flD:function flD(d,e){this.a=d
this.b=e},
flE:function flE(d){this.a=d},
flF:function flF(){},
flB:function flB(d,e){this.a=d
this.b=e},
flC:function flC(){},
flI:function flI(d,e){this.a=d
this.b=e},
flJ:function flJ(d){this.a=d},
flK:function flK(){},
flG:function flG(d){this.a=d},
flH:function flH(d,e){this.a=d
this.b=e},
Jl:function Jl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F8:function F8(d,e){this.a=d
this.b=e},
bcx:function bcx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d3L:function d3L(d){this.a=d},
d41:function d41(d){this.a=d},
d3U:function d3U(d){this.a=d},
d3V:function d3V(){},
d3T:function d3T(d){this.a=d},
d3M:function d3M(){},
d3S:function d3S(d){this.a=d},
d3R:function d3R(d,e){this.a=d
this.b=e},
d3N:function d3N(d){this.a=d},
d3W:function d3W(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d3X:function d3X(d){this.a=d},
d3Y:function d3Y(d){this.a=d},
d3Z:function d3Z(){},
d4_:function d4_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d40:function d40(){},
d3K:function d3K(d,e,f,g,h,i,j,k,l,m){var _=this
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
d3O:function d3O(d,e){this.a=d
this.b=e},
d3P:function d3P(d){this.a=d},
d3Q:function d3Q(){},
aHk:function aHk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcy:function bcy(d,e){this.b=d
this.a=e},
d42:function d42(){},
d43:function d43(d){this.a=d},
d44:function d44(d){this.a=d},
d45:function d45(){},
bgc:function bgc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbD:function bbD(d,e){this.b=d
this.a=e},
btK:function btK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f4r:function f4r(d){this.a=d},
bjx:function bjx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eGL:function eGL(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
Z_:function Z_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAb:function aAb(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
djT:function djT(d,e){this.a=d
this.b=e},
djS:function djS(d){this.a=d},
djQ:function djQ(d){this.a=d},
djR:function djR(d){this.a=d},
dk1:function dk1(d){this.a=d},
dk2:function dk2(d){this.a=d},
dk0:function dk0(d,e){this.a=d
this.b=e},
dk3:function dk3(){},
dk6:function dk6(d){this.a=d},
dk_:function dk_(d,e){this.a=d
this.b=e},
dk5:function dk5(){},
dk7:function dk7(d){this.a=d},
djZ:function djZ(d,e){this.a=d
this.b=e},
dk8:function dk8(d){this.a=d},
djY:function djY(d){this.a=d},
dk9:function dk9(d){this.a=d},
djX:function djX(d){this.a=d},
dka:function dka(d){this.a=d},
djW:function djW(d){this.a=d},
dkb:function dkb(d){this.a=d},
djV:function djV(d){this.a=d},
dkc:function dkc(d){this.a=d},
djU:function djU(d,e){this.a=d
this.b=e},
dk4:function dk4(d){this.a=d},
abX:function abX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgb:function bgb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
abW:function abW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bga:function bga(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkd:function dkd(d){this.a=d},
dke:function dke(d,e){this.a=d
this.b=e},
aAc:function aAc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGn:function aGn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abY:function abY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkn:function dkn(d){this.a=d},
J9:function J9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h1a(d){var w=d.S,v=x.N
return w.iP(w,new C.c5R(),v,v)},
hvb(d){var w=d.bC
if(w>=0)return w
return 5},
h1c(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h1a(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h1b(d,e){var w=C.h1c(d,e)
if(w!=null&&w.ca(new A.S(Date.now(),0,!1)))return!0
return!1},
hvc(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h1a(d),w,w)
u=C.h1c(d,e)
t=u!=null&&u.ca(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a5().ac())
d.S=v},
aYi(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYi=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l8(t,B.Hq),$async$aYi)
case 3:if(l){u=!0
w=1
break}u=A.kL(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Hq,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYi,v)},
c5R:function c5R(){},
hv9(){var w,v=$.pf(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fU(u)},
HO(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$HO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$HO)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$HO)
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
return A.i($async$HO,v)},
a67(d){return C.hva(d)},
hva(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a67=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$a67)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hA("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$a67)
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
return A.i($async$a67,v)},
c5Q(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c5Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.HO(),$async$c5Q)
case 3:t=m.jq(f),t=t.gag(t),s=x.f
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
return A.i($async$c5Q,v)},
MG(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c5Q(d),$async$MG)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.HO(),$async$MG)
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
return A.b(C.a67(s),$async$MG)
case 9:case 8:u=t
w=1
break
case 5:n=C.hv9()
w=10
return A.b(C.HO(),$async$MG)
case 10:s=f
J.aG(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a67(s),$async$MG)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MG,v)},
aYh(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.HO(),$async$aYh)
case 3:t=f
for(s=J.dj(t),r=s.gdL(t),r=r.dE(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a67(t),$async$aYh)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYh,v)},
a68(d,e,f){var w=0,v=A.j(x.H),u
var $async$a68=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ao2(d,e),$async$a68)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MG(d),$async$a68)
case 7:w=4
break
case 5:w=8
return A.b(C.aYh(d),$async$a68)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a68,v)},
anX(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$anX=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ao2(f,e),$async$anX)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c1(),$async$anX)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.HO(),$async$anX)
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
return A.i($async$anX,v)},
aYg(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c1(),$async$aYg)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.HO(),$async$aYg)
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
return A.i($async$aYg,v)},
hvd(){var w,v=$.pf(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fU(u)},
ao_(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ao_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$ao_)
case 3:if(!g){u=null
w=1
break}t=C.hvd()
w=4
return A.b(A.U7(),$async$ao_)
case 4:s=g
r=B.dH.aI(B.R.ao(d.eJ(),null))
r=B.cS.gcu().aI(r)
q=e?999:2
J.aG(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a69(s),$async$ao_)
case 5:p=e?999:2
u=new A.a_9("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao_,v)},
anZ(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$anZ=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.U7(),$async$anZ)
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
return A.b(C.aYg(J.k(l==null?"":l),j),$async$anZ)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ac(t)===0){u=null
w=1
break}s=null
try{r=B.c4.c8(0,B.cB.aI(t))
s=C.h1d(r)}catch(f){q=A.a9(f)
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
return A.b(A.a69(p),$async$anZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anZ,v)},
h1d(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hvf(A.a1(w,x.N,x.z))
return u}catch(t){v=A.a9(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fMk(d){var w=0,v=A.j(x.m),u,t,s
var $async$fMk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.anZ(t[1])
w=1
break}u=null
w=1
break}u=C.h1d(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fMk,v)},
hvf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d7(v,x.f)
u=A.cD(u,new C.c5T(),u.$ti.k("H.E"),x.k)
t=A.a3(u).k("a2<H.E>")
s=A.B(new A.a2(u,new C.c5U(),t),t.k("H.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.V(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jq(p),t=t.gag(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d7(l,u)
n=A.cD(n,new C.c5V(),n.$ti.k("H.E"),o)
k=A.a3(n).k("a2<H.E>")
j=A.B(new A.a2(n,new C.c5W(),k),k.k("H.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ao0(h,w,s,r,q)},
ao2(d,e){var w=0,v=A.j(x.y),u,t
var $async$ao2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Mx(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Ad(d),$async$ao2)
case 3:u=t.cw(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao2,v)},
c61(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c61=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Ad(d),$async$c61)
case 3:t=s.b6(f,new C.c62(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b1(t,new C.c63())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c61,v)},
U8(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$U8=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ao2(e,d),$async$U8)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MG(e),$async$U8)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Ad(e),$async$U8)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c6_(g))
r=A.B(t,t.$ti.k("H.E"))}t=J.a8(r)
if(t.gal(r)){u=null
w=1
break}t=t.dt(r,new C.c60(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.V(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.K5(e,o),$async$U8)
case 14:n=i
if(J.cw(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.ao0(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$U8,v)},
aYl(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYl=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U8(d,e,f,g),$async$aYl)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.FQ(A.Jh(q.eJ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYl,v)},
aYk(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYk=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U8(d,e,f,g),$async$aYk)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ao_(r,f),$async$aYk)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEo(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYk,v)},
U9(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$U9=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fMk(a0),$async$U9)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.anX(g.a,d,e,f,s,r),$async$U9)
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
return A.b(C.bz5(e,j),$async$U9)
case 12:case 11:w=13
return A.b(C.agi(e,j,s),$async$U9)
case 13:h=n.h(0,i)
w=h!=null&&J.cw(h)?14:15
break
case 14:w=16
return A.b(C.Ao(e,i,h),$async$U9)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bn2(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$U9,v)},
ao0:function ao0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c5Y:function c5Y(){},
c5Z:function c5Z(){},
c5X:function c5X(){},
c5T:function c5T(){},
c5U:function c5U(){},
c5V:function c5V(){},
c5W:function c5W(){},
c62:function c62(){},
c63:function c63(){},
c6_:function c6_(d){this.a=d},
c60:function c60(d){this.a=d},
fUz(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fe(null,x.H)
return A.hu(d,new C.ao1(w,e,g,i,f,h,null),!0,null,x.H)},
d3F(d,e,f,g,h,i,j,k){return new C.bcu(i,e,k,j,g,f,h,d,null)},
ao1:function ao1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBM:function aBM(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dQa:function dQa(d){this.a=d},
dQb:function dQb(d,e,f){this.a=d
this.b=e
this.c=f},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQg:function dQg(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQe:function dQe(d){this.a=d},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQc:function dQc(){},
dQi:function dQi(d){this.a=d},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQh:function dQh(d,e){this.a=d
this.b=e},
d46:function d46(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcw:function bcw(d,e,f){this.d=d
this.e=e
this.a=f},
abe:function abe(d,e,f){this.c=d
this.d=e
this.a=f},
bcu:function bcu(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcz:function bcz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zk:function Zk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBL:function aBL(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
Zl:function Zl(d){this.a=d},
bhE:function bhE(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dQk:function dQk(d,e){this.a=d
this.b=e},
aWS(d,e){return new C.aWR(d,e,null)},
aWR:function aWR(d,e,f){this.c=d
this.d=e
this.a=f},
hUl(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b_(d,11)},
i0C(d){return A.bV(B.K,null,new C.fBu(new C.tt(A.N(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
h34(d,e){return new C.aqY(e,d,null)},
aOz(d,e,f,g,h,i,j){var w=C.hUl(i)
if(w!=null)return A.bv(e,new A.a6(j,f,new C.a5a(w,!0,null),null),B.aq)
return I.aNV(e,B.bQ,f,g,h,i,j)},
ls:function ls(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5a:function a5a(d,e,f){this.c=d
this.d=e
this.a=f},
bhl:function bhl(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dBU:function dBU(d){this.a=d},
dBV:function dBV(){},
dBW:function dBW(d,e){this.a=d
this.b=e},
bhk:function bhk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fBu:function fBu(d){this.a=d},
fBt:function fBt(d,e){this.a=d
this.b=e},
fBs:function fBs(d,e){this.a=d
this.b=e},
fBr:function fBr(d,e){this.a=d
this.b=e},
aqY:function aqY(d,e,f){this.c=d
this.d=e
this.a=f},
cdv:function cdv(d,e){this.a=d
this.b=e},
aJG:function aJG(){},
i0n(d){var w=null
return A.c9(w,w,!0,w,new C.fAR(),d,w,!0,!0,x.e2)},
i1x(d,e,f,g,h){var w=null
return A.c9(w,w,!0,w,new C.fIj(h,g,f,e),d,w,!0,!0,x.N)},
i0p(d,e){var w=null
return A.c9(w,w,!0,w,new C.fAW(e),d,w,!0,!0,x.dY)},
i0o(d){var w=null
return A.c9(w,w,!0,w,new C.fAV(),d,w,!0,!0,x.c5)},
aRr:function aRr(d,e){this.a=d
this.b=e},
aRq:function aRq(d){this.a=d},
aPw:function aPw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAR:function fAR(){},
fIj:function fIj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAW:function fAW(d){this.a=d},
fAV:function fAV(){},
XZ:function XZ(d,e){this.c=d
this.a=e},
ax1:function ax1(){var _=this
_.d=$
_.c=_.a=_.e=null},
cWP:function cWP(d){this.a=d},
cWQ:function cWQ(d){this.a=d},
cWO:function cWO(d,e){this.a=d
this.b=e},
cWR:function cWR(d){this.a=d},
cWS:function cWS(d){this.a=d},
XY:function XY(d){this.a=d},
ax0:function ax0(){this.d=$
this.c=this.a=null},
cWL:function cWL(d){this.a=d},
cWM:function cWM(d){this.a=d},
cWN:function cWN(d){this.a=d},
Xw:function Xw(d){this.a=d},
avL:function avL(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cuo:function cuo(){},
cuu:function cuu(d){this.a=d},
cuv:function cuv(d){this.a=d},
cuw:function cuw(d){this.a=d},
cut:function cut(){},
cux:function cux(d){this.a=d},
cuy:function cuy(d){this.a=d},
cus:function cus(){},
cuz:function cuz(d,e){this.a=d
this.b=e},
cur:function cur(d,e){this.a=d
this.b=e},
cup:function cup(d,e){this.a=d
this.b=e},
cuA:function cuA(d){this.a=d},
cuq:function cuq(){},
cuB:function cuB(d){this.a=d},
a02:function a02(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
btC:function btC(){this.d=$
this.c=this.a=null},
f3U:function f3U(d,e){this.a=d
this.b=e},
f3V:function f3V(d){this.a=d},
f3W:function f3W(d,e){this.a=d
this.b=e},
aai:function aai(d,e){this.a=d
this.b=e},
EW:function EW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
btA:function btA(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f3S:function f3S(d,e){this.a=d
this.b=e},
avE:function avE(d,e){this.c=d
this.a=e},
btB:function btB(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f3T:function f3T(d){this.a=d},
btz:function btz(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aLP:function aLP(){},
aLQ:function aLQ(){},
bB2(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.ou(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fzC(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.WV(A.dq(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOb(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().kV(85,1280,B.eG),$async$aOb)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fd(),$async$aOb)
case 8:r=e
if(J.ac(r)===0){u=null
w=1
break}q=C.h33()
w=9
return A.b(C.cdu(q,r),$async$aOb)
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
return A.i($async$aOb,v)},
aOx(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOx=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cdr(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gam(g.split(",")):g
p=B.cB.aI(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.X().KW(p,!0,null,i).cN(0,B.fP),$async$aOx)
case 9:n=a1
w=10
return A.b(n.m9(),$async$aOx)
case 10:m=a1
w=11
return A.b(J.aPh(m).hm(B.fS),$async$aOx)
case 11:l=a1
J.aPh(m).q()
if(l==null){w=8
break}i=J.fa(B.dF.gaP(l))
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
return A.i($async$aOx,v)},
fzC:function fzC(){},
tt:function tt(d){this.a=d},
aqX:function aqX(d,e,f){this.c=d
this.d=e
this.a=f},
aDh:function aDh(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDM:function eDM(d){this.a=d},
eDN:function eDN(d){this.a=d},
eDT:function eDT(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDO:function eDO(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d){this.a=d},
eDR:function eDR(d,e){this.a=d
this.b=e},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDL:function eDL(d){this.a=d},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d){this.a=d},
eDW:function eDW(d,e){this.a=d
this.b=e},
eDX:function eDX(d,e){this.a=d
this.b=e},
eDI:function eDI(d,e){this.a=d
this.b=e},
hfC(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fzD(d,e,f){var w=0,v=A.j(x.N),u
var $async$fzD=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hfC(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzD,v)},
bB4(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bB4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fzD(!0,d,e),$async$bB4)
case 4:w=3
return A.b(r.aqV(g,d,e.a),$async$bB4)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dH.aI(B.R.ao(C.hfC(d,e,null),null))
u="NGMY_WS:"+B.k2.gcu().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB4,v)},
h7A(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fUg(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ac(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eY(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hZo(d){var w,v,u,t=C.h7A(d)
if(t==null)return null
if(C.fUg(t))return t
w=B.a.cI(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b_(t,w))
if(C.fUg(v))return v}u=B.a.cI(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b_(t,u))
if(C.fUg(v))return v}return null},
fUf(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ac(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.c8(0,B.cB.aI(J.mu(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fOU(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bB3(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bB3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aqU(t[1]),$async$bB3)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fUf(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fUf(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB3,v)},
fUe(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lb(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bAB(){var w=0,v=A.j(x.o),u,t
var $async$bAB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.G0(),$async$bAB)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fUf(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAB,v)},
hgt(d,e,f,g){return A.bV(B.K,null,new C.fIb(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fIb:function fIb(d,e,f){this.a=d
this.b=e
this.c=f},
aci:function aci(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eDZ:function eDZ(d,e){this.a=d
this.b=e},
eE_:function eE_(d,e){this.a=d
this.b=e},
eE0:function eE0(d,e){this.a=d
this.b=e},
eE1:function eE1(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
aqR:function aqR(d,e,f){this.c=d
this.d=e
this.a=f},
bj0:function bj0(){var _=this
_.c=_.a=_.e=_.d=null},
eDC:function eDC(d,e){this.a=d
this.b=e},
eDD:function eDD(d){this.a=d},
eDE:function eDE(d){this.a=d},
aqW:function aqW(d){this.a=d},
aDg:function aDg(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eDG:function eDG(d){this.a=d},
eDF:function eDF(d){this.a=d},
hys(d,e,f,g,h){return new C.Nh(h,g,d,e,f,null)},
aI1:function aI1(d,e){this.a=d
this.b=e},
Nh:function Nh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDi:function aDi(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eEo:function eEo(){},
eEk:function eEk(d,e){this.a=d
this.b=e},
eEl:function eEl(d){this.a=d},
eE5:function eE5(d){this.a=d},
eE3:function eE3(d){this.a=d},
eE4:function eE4(d){this.a=d},
eEe:function eEe(d,e){this.a=d
this.b=e},
eEb:function eEb(d,e){this.a=d
this.b=e},
eEc:function eEc(d,e){this.a=d
this.b=e},
eEd:function eEd(d,e,f){this.a=d
this.b=e
this.c=f},
eE9:function eE9(d,e,f){this.a=d
this.b=e
this.c=f},
eE7:function eE7(d){this.a=d},
eE8:function eE8(d){this.a=d},
eEa:function eEa(d){this.a=d},
eEr:function eEr(d){this.a=d},
eEq:function eEq(d){this.a=d},
eEs:function eEs(d){this.a=d},
eEp:function eEp(d){this.a=d},
eE2:function eE2(d){this.a=d},
eE6:function eE6(d,e){this.a=d
this.b=e},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEh:function eEh(d){this.a=d},
eEi:function eEi(d){this.a=d},
eEj:function eEj(d,e){this.a=d
this.b=e},
eEg:function eEg(d,e){this.a=d
this.b=e},
eEf:function eEf(d,e,f){this.a=d
this.b=e
this.c=f},
bvn:function bvn(){},
A4(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
aeJ(d,e,f){return C.hNY(d,e,f)},
hNY(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aeJ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$aeJ)
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
return A.i($async$aeJ,v)},
aeI(d,e){return C.hNX(d,e)},
hNX(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aeI=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aeI)
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
return A.i($async$aeI,v)},
hMK(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.RU(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
by6(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$by6=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0x(q),$async$by6)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOx(q,!1),$async$by6)
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
return A.i($async$by6,v)},
hmj(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qJ(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qJ(p,J.k(u==null?"":u),1,o,q)},
fOU(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d7(s,x.f)
w=A.cD(w,new C.ctN(),w.$ti.k("H.E"),x.Q)
v=A.a3(w).k("a2<H.E>")
r=A.B(new A.a2(w,new C.ctO(),v),v.k("H.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lb(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hRO(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.YH
case"female":case"f":return D.ahF
default:return D.xq}},
hcj(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fYh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hRO(v==null?j:J.k(v))
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
hRQ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.LW
case"viewer":return D.kd
default:return D.tn}},
hRR(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FR(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzm(d,e){return B.a.i(e.toLowerCase())===C.FR(d,e)&&d.y!==D.kd},
tF(d,e){var w,v=d.y
if(v===D.kd)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FR(d,e))return!0
if(v===D.LW)return!0
v=d.e
return new A.J(v,A.fUk(),A.T(v).k("J<1,n>")).t(0,w)},
hRg(d){return J.dH(d,new C.fkO()).gM(0)},
fIE(d){var w=0,v=A.j(x.y),u,t
var $async$fIE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Ad(d),$async$fIE)
case 3:u=t.qF(f,new C.fIF(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIE,v)},
bz5(d,e){var w=0,v=A.j(x.H),u,t
var $async$bz5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ad(d),$async$bz5)
case 3:t=g
if(J.qF(t,new C.fjn(e))){w=1
break}if(C.hRg(t)>=2)throw A.U(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bz5,v)},
ajl(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d7(n,x.f)
w=A.cD(w,new C.bLs(),w.$ti.k("H.E"),x.P)
v=A.a3(w).k("a2<H.E>")
m=A.B(new A.a2(w,new C.bLt(),v),v.k("H.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bLu(),x.N)
t=A.B(l,l.$ti.k("aj.E"))}else t=A.a([],x.s)
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
return new C.ku(l,w,v,!s,t,m,r,q,p,C.hRQ(o==null?null:J.k(o)))},
hcs(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cm(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QC(d),$async$Cm)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$Cm)
case 4:t=f
w=5
return A.b(t.a4W(0),$async$Cm)
case 5:w=6
return A.b(C.fbp(t,l),$async$Cm)
case 6:s=f
if(J.cw(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.h89(o)
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
case 12:n=C.h89(m)
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
fbp(d,e){return C.hKe(d,e)},
hKe(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fbp=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ac(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.A4(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fOU(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.A4(a9)+"_"+n))
i=C.hMK(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0x(h),$async$fbp)
case 17:g=b1
if(g!=null){i=i.RU(g)
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
case 8:J.QM(q,new C.fbq())
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
return A.i($async$fbp,v)},
bzx(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QC(d),$async$bzx)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cm(r),$async$bzx)
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
return A.i($async$bzx,v)},
h89(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d7(w,x.f)
v=A.cD(v,new C.f78(),v.$ti.k("H.E"),x.i)
u=A.a3(v).k("a2<H.E>")
v=A.B(new A.a2(v,new C.f79(),u),u.k("H.E"))
B.d.b1(v,new C.f7a())
return v}catch(t){v=A.a([],x.D)
return v}},
ot(d,e){return C.i0d(d,e)},
i0d(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ot=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.QC(b2),$async$ot)
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
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fAI(),a2).fG(0)
a2=J.b6(b3,new C.fAJ(),a2).bZ(0,new C.fAK())
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
return A.b(C.a7p(l),$async$ot)
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
return A.b(C.a7p(a5==null?null:J.k(a5)),$async$ot)
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
return A.b(C.aeI(r,"ngmy_worksheet_item_v3_"+C.A4(a8)+"_"+m),$async$ot)
case 29:w=30
return A.b(C.aeI(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+m),$async$ot)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.by6(h),$async$ot)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aeJ(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4,f),$async$ot)
case 40:g=i.RU(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aeI(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4),$async$ot)
case 41:g=i.RU(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aeI(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4),$async$ot)
case 42:case 34:a4=i.a
w=43
return A.b(C.aeJ(r,"ngmy_worksheet_item_v3_"+C.A4(a8)+"_"+a4,B.R.ao(g.ad(),null)),$async$ot)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aeJ(r,"ngmy_worksheets_index_v3_"+C.A4(a8),B.R.ao(q,null)),$async$ot)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eI(b3,new C.fAL(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fAM(),a4),a4.k("H.E"))
a0=a7
w=45
return A.b(C.aeJ(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$ot)
case 45:w=46
return A.b(J.hlq(r),$async$ot)
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
Kx(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Kx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cm(d),$async$Kx)
case 3:t=g
s=J.cE(t)
r=s.bd(t,new C.fID(e))
if(r===-1)s.cn(t,0,e)
else s.n(t,r,e)
u=C.ot(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Kx,v)},
bzj(d,e){var w=0,v=A.j(x.H),u
var $async$bzj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cm(d),$async$bzj)
case 2:u=g
J.ng(u,new C.flf(e))
w=3
return A.b(C.ot(d,u),$async$bzj)
case 3:return A.h(null,v)}})
return A.i($async$bzj,v)},
FT(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$FT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$FT)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d7(t,x.f)
j=A.cD(j,new C.fnE(),j.$ti.k("H.E"),x.k)
s=A.a3(j).k("a2<H.E>")
r=A.B(new A.a2(j,new C.fnF(),s),s.k("H.E"))
B.d.b1(r,new C.fnG())
k=r}}catch(h){}w=4
return A.b(C.f7S(d),$async$FT)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hKB(k,p,d)
j=A.T(o)
s=j.k("J<1,a4<n,@>>")
s=A.B(new A.J(o,new C.fnH(),s),s.k("aj.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.PO(d,o),$async$FT)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fnI(d),j),j.k("H.E"))
if(m.length!==0)C.aN6(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$FT,v)},
fAu(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fAu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PO(d,e),$async$fAu)
case 3:t=J.dH(e,new C.fAv(d))
s=A.B(t,t.$ti.k("H.E"))
if(s.length===0){u=!0
w=1
break}u=C.aN6(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAu,v)},
a1F(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1F=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a1F)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d7(u,x.f)
m=A.cD(m,new C.fIy(),m.$ti.k("H.E"),x.k)
t=A.a3(m).k("a2<H.E>")
s=A.B(new A.a2(m,new C.fIz(),t),t.k("H.E"))
o=s}}catch(k){}q=J.q0(o,new C.fIA(e))
if(B.a.i(e.x).length===0&&C.tF(e,d)){m=B.a.i(d.toLowerCase())
p=e.aC8(e.y===D.kd?D.kd:D.tn,m)}else p=e
if(q===-1)J.pj(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.PO(d,o),$async$a1F)
case 3:w=C.tF(p,d)?4:5
break
case 4:w=6
return A.b(C.aN5(C.FR(p,d),p),$async$a1F)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1F,v)},
aNg(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.FT(d),$async$aNg)
case 2:u=g
t=J.cE(u)
s=A.qZ(t.eI(u,new C.fkX(e)))
t.bn(u,new C.fkY(e))
w=3
return A.b(C.PO(d,u),$async$aNg)
case 3:w=s!=null&&C.bzm(s,d)?4:5
break
case 4:w=6
return A.b(C.f7c(e),$async$aNg)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNg,v)},
agw(d){var w=d.f,v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fIJ(),v),v.k("H.E"))
return w},
fS_(d,e){var w,v=d.f,u=A.qZ(new A.a2(v,new C.fkx(e),A.T(v).k("a2<1>")))
v=C.agw(d)
w=A.T(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fky(e,u),w),w.k("H.E"))
B.d.b1(v,new C.fkz())
return v},
hRU(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hgw(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bd(C.fS_(d,u),new C.fIk(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hTq(d,e){var w
if(e==null||e.length===0)return 1
w=C.fS_(d,e)
if(w.length===0)return 1
return new A.J(w,new C.foq(),A.T(w).k("J<1,G>")).fD(0,B.zH)+1},
i06(d){var w,v=C.agw(d)
if(v.length===0)return null
w=new A.a2(v,new C.fAr(),A.T(v).k("a2<1>"))
if(!w.gal(0))return w.gL(0)
return B.d.gL(v)},
hRP(d){return A.E(["id",d.a,"name",d.b,"gender",C.hcj(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hTl(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.V(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xq?n:q.c
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
d=q.aC3(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cEP(a1,w,a3.d,a2.y,s,a0,v)},
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
p=A.cD(p,new C.fnB(),p.$ti.k("H.E"),x.k)
s=A.a3(p).k("a2<H.E>")
p=A.B(new A.a2(p,new C.fnC(),s),s.k("H.E"))
B.d.b1(p,new C.fnD())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Ad,v)},
agi(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agi=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tn:D.kd
a7=C.FR(b2,b3)
w=2
return A.b(C.Ad(b1),$async$agi)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bd(a8,new C.fAn(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bz5(b1,b2),$async$agi)
case 5:case 4:if(b0===-1){u=b2.aC8(a6,a7)
a9.cn(a8,0,u)}else{t=a9.h(a8,b0)
s=A.V(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.xq?i:l.c
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
s.n(0,m,l.aC3(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("H.E"))
k=a5?D.tn:D.kd
u=t.ye(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.PO(b1,a8),$async$agi)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aN5(B.a.i(b3.toLowerCase()),u),$async$agi)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agi,v)},
h8w(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a4<n,@>>"),k=A.B(new A.J(m,C.hfK(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
h8x(d,e){var w=new A.S(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a4<n,@>>")
u=A.B(new A.J(u,C.hfK(),t),t.k("aj.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hIe(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajl(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fUk(),A.T(j).k("J<1,n>")).bZ(0,new C.f7F())
t=A.B(j,j.$ti.k("H.E"))
if(u===v)s=D.tn
else s=B.d.t(t,u)?D.LW:D.kd
return w.aC8(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajl(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d7(q,h)
h=A.cD(h,new C.f7G(),h.$ti.k("H.E"),x.P)
p=A.a3(h).k("a2<H.E>")
o=A.B(new A.a2(h,new C.f7H(),p),p.k("H.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f7I(),x.N).bZ(0,new C.f7J())
t=A.B(h,h.$ti.k("H.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tn
else s=B.d.t(t,u)?D.LW:D.kd
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
f7S(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f7S=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ac(a0)===0){u=null
w=1
break}t=4
r=new C.f7W()
h=x.N
g=x.z
w=7
return A.b(A.iI(A.a([A.li("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.li("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.li("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f7S)
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
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ac(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.f7T(a0),h.k("H.E"),x.k)
l=A.a3(h).k("a2<H.E>")
l=A.B(new A.a2(h,new C.f7U(),l),l.k("H.E"))
B.d.b1(l,new C.f7V())
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
return A.i($async$f7S,v)},
hKB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gal(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fc4(),v).bZ(0,new C.fc5())
t=A.d9(u,u.$ti.k("H.E"))
s=A.V(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FR(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kd){m=q.e
m=!new A.J(m,A.fUk(),A.T(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gag(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hTl(l,v)
o=C.FR(k,w)
p=v.d
s.n(0,u,o===w?k.b9m(p,D.tn):k.b9m(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("H.E"))
B.d.b1(j,new C.fc6())
return j},
PO(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$PO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$PO)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fe8(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$PO)
case 3:return A.h(null,v)}})
return A.i($async$PO,v)},
aN5(d,e){return C.hPF(d,e)},
hPF(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aN5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lI("family_trees",A.a([C.h8w(e,d)],p),null,B.cF),$async$aN5)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lI("family_trees",A.a([C.h8x(e,d)],p),null,B.cF),$async$aN5)
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
return A.i($async$aN5,v)},
aN6(d,e){return C.hPG(d,e)},
hPG(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aN6=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a4<n,@>>")
m=n.k("aj.E")
l=A.B(new A.J(e,new C.fiH(d),n),m)
r=l
w=7
return A.b(A.lI("family_trees",r,null,B.cF),$async$aN6)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.J(e,new C.fiI(d),n),m)
p=k
w=8
return A.b(A.lI("family_trees",p,null,B.cF),$async$aN6)
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
return A.i($async$aN6,v)},
f7c(d){return C.hHA(d)},
hHA(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f7c=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Qc("family_trees",A.E(["id",d],x.N,x.z),null,B.cF),$async$f7c)
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
return A.i($async$f7c,v)},
qJ:function qJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lb:function lb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctQ:function ctQ(){},
ctP:function ctP(){},
ctN:function ctN(){},
ctO:function ctO(){},
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
ajk:function ajk(d,e){this.a=d
this.b=e},
fkO:function fkO(){},
fIF:function fIF(d){this.a=d},
fjn:function fjn(d){this.a=d},
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
bLw:function bLw(){},
bLv:function bLv(){},
bLs:function bLs(){},
bLt:function bLt(){},
bLu:function bLu(){},
fbq:function fbq(){},
f78:function f78(){},
f79:function f79(){},
f7a:function f7a(){},
fAI:function fAI(){},
fAJ:function fAJ(){},
fAK:function fAK(){},
fAL:function fAL(d){this.a=d},
fAM:function fAM(){},
fID:function fID(d){this.a=d},
flf:function flf(d){this.a=d},
fnE:function fnE(){},
fnF:function fnF(){},
fnG:function fnG(){},
fnH:function fnH(){},
fnI:function fnI(d){this.a=d},
fAv:function fAv(d){this.a=d},
fIy:function fIy(){},
fIz:function fIz(){},
fIA:function fIA(d){this.a=d},
fkX:function fkX(d){this.a=d},
fkY:function fkY(d){this.a=d},
fIJ:function fIJ(){},
fkx:function fkx(d){this.a=d},
fky:function fky(d,e){this.a=d
this.b=e},
fkz:function fkz(){},
fIk:function fIk(d){this.a=d},
foq:function foq(){},
fAr:function fAr(){},
fnB:function fnB(){},
fnC:function fnC(){},
fnD:function fnD(){},
fAn:function fAn(d){this.a=d},
f7F:function f7F(){},
f7G:function f7G(){},
f7H:function f7H(){},
f7I:function f7I(){},
f7J:function f7J(){},
f7W:function f7W(){},
f7X:function f7X(d){this.a=d},
f7T:function f7T(d){this.a=d},
f7U:function f7U(){},
f7V:function f7V(){},
fc4:function fc4(){},
fc5:function fc5(){},
fc6:function fc6(){},
fe8:function fe8(){},
fiH:function fiH(d){this.a=d},
fiI:function fiI(d){this.a=d},
ctR:function ctR(d,e){this.a=d
this.b=e},
ctS:function ctS(d,e){this.a=d
this.b=e},
aFk:function aFk(d,e,f){this.a=d
this.b=e
this.c=f},
b6L:function b6L(){this.b=this.a=0},
b6K:function b6K(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
btD:function btD(){},
wo(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcc()+"/"+w.gcs()+"/"+w.gcg()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmX()),2,"0")+":"+B.a.aT(B.o.u(w.gFI()),2,"0")},
hyp(){var w,v=$.pf(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fU(u)},
aqS(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aqS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqS)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$aqS)
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
return A.i($async$aqS,v)},
aqT(d){return C.hyq(d)},
hyq(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aqT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqT)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hA("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$aqT)
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
return A.i($async$aqT,v)},
aqV(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aqV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqV)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hyp()
w=4
return A.b(C.aqS(),$async$aqV)
case 4:r=h
q=B.a.i(e)
p=B.dH.aI(t)
J.aG(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cS.gcu().aI(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.aqT(r),$async$aqV)
case 5:u=new A.a_9("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqV,v)},
aqU(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aqU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c1(),$async$aqU)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aqS(),$async$aqU)
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
return A.b(C.aqT(q),$async$aqU)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqU,v)},
h33(){var w=new A.S(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hyr(d){var w,v,u,t,s,r,q
try{w=A.af7(d)
if(w==null)return d
v=w
if(J.KD(v)>960||J.KC(v)>960){s=v
r=J.KD(v)>=J.KC(v)?960:null
v=A.af6(s,J.KC(v)>J.KD(v)?960:null,B.Ng,r)}s=v
u=A.akJ(82).Sf(s,B.yb)
if(J.ac(u)===0)return d
s=new Uint8Array(A.cp(u))
return s}catch(q){t=A.a9(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cdu(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cdu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hyr(e)
$.cdq.n(0,s,t)
u=C.bB6(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdu,v)},
b0x(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0x=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eY(l,",")?B.d.gam(J.lk(l,",")):l
q=B.cB.aI(r)
if(J.ac(q)===0){u=null
w=1
break}p=C.h33()
w=7
return A.b(C.cdu(p,q),$async$b0x)
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
return A.i($async$b0x,v)},
cdr(d){var w=0,v=A.j(x.T),u,t,s
var $async$cdr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cdt(s),$async$cdr)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcu().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdr,v)},
a7p(d){var w=0,v=A.j(x.H),u,t
var $async$a7p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hfD(d)
if(t==null){w=1
break}$.cdq.W(0,t)
w=3
return A.b(C.bB5(t),$async$a7p)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7p,v)},
bB6(d,e){return C.hZr(d,e)},
hZr(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bB6=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aM1
w=7
return A.b(n==null?$.aM1=I.fR0():n,$async$bB6)
case 7:r=g
q=new Uint8Array(A.cp(e))
p=J.mv(r,"thumbs","readwrite")
B.iz.m2(J.mt(p,"thumbs"),q,l)
w=8
return A.b(J.pi(p),$async$bB6)
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
return A.i($async$bB6,v)},
bB5(d){return C.hZp(d)},
hZp(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bB5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aM1
w=7
return A.b(o==null?$.aM1=I.fR0():o,$async$bB5)
case 7:r=f
q=J.mv(r,"thumbs","readwrite")
B.iz.Fe(J.mt(q,"thumbs"),m)
w=8
return A.b(J.pi(q),$async$bB5)
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
return A.i($async$bB5,v)}},D,Aj,Ak,Q,Al,Am,I,An
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
Ad=c[71]
Ae=c[230]
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
C.amR.prototype={}
C.aWT.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bdE(),f=h.x!=null&&h.yE(i).length===0
if(h.x!=null)w=f?B.aZ:B.bL
else w=h.gST()?B.bL:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bc2,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eCG,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h1,i,i,i),B.S,D.f4A,B.at,A.d(C.wo(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f0B,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aXP,i,i,i,i,B.XH,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.r,1)
o=A.I(B.aZ.j(0.28),B.r,1)
n=A.fSV(h.d)
o=A.p(B.A,C.aWS(A.fqP(h.e,n),30),B.f,i,i,new A.o(B.lw,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eX2,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bz,D.f4R,B.ac,A.p(i,A.v(A.a([D.fjO,B.bz,A.d(A.Af(h.c),i,i,i,i,i,i,D.eS7,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f3,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.afM,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.r,1)
l=j.aOF("Original due",C.wo(h.r,!1))
n=j.aOF("Current due",C.wo(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaIT(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Av,i,i,1/0),B.S,j.cb6(),B.P,j.bZW(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f5O,B.at,A.d(q,i,i,i,i,i,i,D.eWl,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaDL()){q=A.m(14)
o=A.I(B.cm,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fl2,B.P,A.bv(A.m(12),A.ei(new A.a6(1/0,88,A.b3(i,i,i,new A.V0(h.ax,B.M,D.eGp,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EI,i,i,i)],s))}p.push(B.az)
p.push(D.fdv)
return A.p(i,A.v(A.a([r,new A.C(B.afP,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aOF(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a6R,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eT6,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cb6(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a84(B.dT,u,"Not paid yet")
w=t.yE(null).length
v=w===0?B.aZ:B.bL
return this.a84(v,u,C.wo(t.x,!0))},
bZW(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a84(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a84(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a6R,u,u,u)
v=A.T(d).k("J<1,hh>")
v=A.B(new A.J(d,new C.c_j(),v),v.k("aj.E"))
return A.v(A.a([w,B.ao,A.c_(B.bD,v,B.bt,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a84(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a6R,w,w,w),1),new A.dm(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b8U.prototype={
a6(d,e){new A.V0(this.b,B.M,e,!0,3.5,null).a6(d,e)},
aq(d){return d.b!==this.b}}
C.amY.prototype={
T(){return new C.aBc(A.a([],x.bp))},
gdX(){return this.c}}
C.aBc.prototype={
a_(){this.a1()
this.I7()},
I7(){var w=0,v=A.j(x.H),u,t=this,s
var $async$I7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0U(t.a.c),$async$I7)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dCM(t,s))
case 1:return A.h(u,v)}})
return A.i($async$I7,v)},
aQw(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bo).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.az(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bq:B.bo).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aVr),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aQv(d){return this.aQw(d,null)},
OC(d){return this.ceF(d)},
ceF(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.FZ:B.eG
w=7
return A.b(new A.hV().BF(72,900,900,n),$async$OC)
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
aYR(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bo).j(0.18),B.r,1)
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
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kc,D.bnd,r,r,r)},
CC(d){return this.bwH(d)},
bwG(){return this.CC(null)},
bwH(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CC=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b2,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jL(a4)
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
i=a3?null:A.fSV(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vD?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",a4,new C.dCv(),new C.dCw(a2,t,a5,r,new C.dCx(a2,t),o,n,j),B.eE,!0,x.y),$async$CC)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eMK)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eLp)
w=1
break}a1=A.fqP(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vD?"male":"female"
w=7
return A.b(A.agv(a3,A.h_O(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CC)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vD?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c0(a3.gcg(),a3.gcc(),a3.gcs(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gcg(),a4.gcc(),a4.gcs(),0,0,0,0,0)))a5.cGY(a2.a)
w=8
return A.b(A.agv(t.a.c,a5),$async$CC)
case 8:case 5:w=9
return A.b(t.I7(),$async$CC)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CC,v)},
aR8(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bo).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aWS(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.aA
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.ba,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.af)},
Rf(d){return this.cvT(d)},
cvT(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",s,new C.dCP(),new C.dCQ(t,d),B.hV,!0,x.y),$async$Rf)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.agv(t.a.c,d),$async$Rf)
case 7:w=8
return A.b(t.I7(),$async$Rf)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Rf,v)},
Nh(d,e){return this.bHn(0,e)},
bHn(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kW(s,"Cancel","Delete",e.b+" \xb7 "+A.Af(e.c)+" will be removed from this device.","Delete this debt?"),$async$Nh)
case 3:if(!g){w=1
break}w=4
return A.b(C.fl3(t.a.c,e.a),$async$Nh)
case 4:w=5
return A.b(t.I7(),$async$Nh)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Nh,v)},
adv(d){return this.c8A(d)},
c8A(d){var w=0,v=A.j(x.H),u=this,t
var $async$adv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.K,null,new C.dCJ(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adv)
case 2:return A.h(null,v)}})
return A.i($async$adv,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e1i
w=J.dH(m.d,new C.dCR())
v=A.B(w,w.$ti.k("H.E"))
w=J.dH(m.d,new C.dCS())
u=A.B(w,w.$ti.k("H.E"))
t=B.d.cH(v,0,new C.dCT())
w=A.m(18)
s=m.a.d.a
r=s?D.cj4:D.avY
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bLV,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.e0I,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dCU(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.af)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cs6("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Af(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b3Q(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ax,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.afJ,l,l,l),B.az],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dW:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bo).j(0.12),B.r,1)
n=A.p(l,D.bGU,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bo,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bpF,l,l,1/0))}else{w=m.gcdY()
s=A.B(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ao,new A.C(D.brk,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bo,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b3Q(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bo).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bo,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aA
return A.p(u,A.v(A.a([q,B.bz,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eh,u,u,u)},
cs6(d,e){return this.b3Q(!1,d,e)},
cdZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yE(j).length,h=d.bcQ()
if(d.x!=null){w=d.yE(j).length
v=w===0?B.cY:B.bL}else if(d.gST())v=B.bL
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bo
v=w}if(d.x!=null){w=d.yE(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wo(u,!1)}else{u.toString
t="Paid "+C.wo(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wo(w,!1)+" \xb7 "+i+" missed":"Due "+C.wo(w,!1)}w=k.a.d.a?B.dW:B.c
u=A.m(18)
if(d.gST()&&d.x==null)s=B.bL.j(0.35)
else s=(k.a.d.a?B.bq:B.bo).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ad(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lw
o=A.I(d.gST()&&d.x==null?B.bL.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fSV(d.d)
o=A.p(B.A,A.dc(C.aWS(A.fqP(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aA
m=x.p
n=A.a([new A.dm(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaDL())B.d.v(n,A.a([B.ea,A.W(B.Mm,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.d0,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Af(d.c)
l=k.a.d.a?B.aP:B.aA
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(V.aft,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bz,A.W(B.eo,(k.a.d.a?B.bq:B.bo).j(0.5),j,j,j,18)],m),B.dD,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dCL(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.af),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.tX.prototype={}
C.ajj.prototype={
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
if(j&&!v)l.push(new A.C(B.j5,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.asw,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.F_,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f1(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bms,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eH9)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uW,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l6,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hg,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ax,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bnF,a0,a0,a0,a0)}}
C.aSG.prototype={
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
if(p.z)o.push(new A.C(B.uT,n,q))
return new A.C(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.RO.prototype={
T(){return new C.bcs()}}
C.bcs.prototype={
gbV2(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e1d,D.e1j],l)
for(w=0;w<8;++w){v=D.a0G[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FJ:B.Bc
q=t===s
r=A.W(r,q?B.ez:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bE(1,B.bi,new A.x(v.c,n,An.CK,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aV(24,24)
p=new A.az(B.ez,2,B.r,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.ma,new A.co(B.aQ,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Dp(!0,new C.ajj(v,q.d,q.e,new C.d2D(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d2E(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bnY,A.bJ(D.fqe,new C.d2F(o,d),A.bk(B.b4,n,n,n,n,B.nY,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cU(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.bsa,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.n2.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
b9y(d,e,f){return new C.n2(this.a,e,d,f)}}
C.GX.prototype={
w0(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.GX(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aBY(d){var w=null
return this.w0(w,w,w,w,w,d,w,w,w,w,w,w)},
cCN(d){var w=null
return this.w0(w,w,w,w,d,w,w,w,w,w,w,w)},
b9w(d,e,f){var w=null
return this.w0(d,w,w,w,w,w,w,w,e,w,f,w)},
cDr(d){var w=null
return this.w0(w,w,w,w,w,w,d,w,w,w,w,w)},
cDA(d){var w=null
return this.w0(w,w,w,w,w,w,w,w,w,d,w,w)},
cCL(d){var w=null
return this.w0(w,w,w,d,w,w,w,w,w,w,w,w)},
cDC(d){var w=null
return this.w0(w,w,w,w,w,w,w,w,w,w,w,d)},
cCI(d){var w=null
return this.w0(w,w,d,w,w,w,w,w,w,w,w,w)},
cCD(d){var w=null
return this.w0(w,d,w,w,w,w,w,w,w,w,w,w)},
F7(d){var w=null
return this.w0(w,w,w,w,w,w,w,d,w,w,w,w)},
cDK(d,e,f,g,h,i,j,k,l,m,n){return this.w0(d,e,f,g,null,h,i,j,k,l,m,n)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cAy(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bLr(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.BQ.geh(D.BQ))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a29)
q=l.$2("frame",D.a1D)
l=l.$2("texture",D.a1y)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cDK(p,u,t,q,r,A.tC(d.h(0,"ribbon"))?A.Fs(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Ym.prototype={
T(){return new C.ayf(A.a([],x.I),D.LV)},
gdX(){return this.c}}
C.ayf.prototype={
a_(){var w,v=this
v.a1()
v.f=A.z7(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kI()
w=v.a
C.bzu(w.c,w.d).bz(new C.d3j(v),x.fL)},
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
kI(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.K5(s.c,s.d),$async$kI)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d37(t,r))
t.atX()
case 1:return A.h(u,v)}})
return A.i($async$kI,v)},
gaqB(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ac(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
atX(){var w,v,u=this.gaqB(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c70(d){this.m(new C.d34(this,d))
this.atX()},
MD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n2(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aOT(r.c,r.d,s),$async$MD)
case 3:w=4
return A.b(t.kI(),$async$MD)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.q0(t.d,new C.d2G(s))
p=q>=0?q:J.ac(t.d)-1
t.m(new C.d2H(t,p))
t.atX()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AH(p+1,B.cq,B.kB),$async$MD)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MD,v)},
An(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$An=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaqB()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aOT(o.c,o.d,new C.n2(s,r,q,new A.S(p,0,!1))),$async$An)
case 3:w=4
return A.b(t.kI(),$async$An)
case 4:if(t.c==null){w=1
break}t.m(new C.d38(t))
case 1:return A.h(u,v)}})
return A.i($async$An,v)},
Ni(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ni=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaqB()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2P(r),s,null,!0,!0,x.y),$async$Ni)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bzf(s.c,s.d,r.a),$async$Ni)
case 4:t.m(new C.d2Q(t))
w=5
return A.b(t.kI(),$async$Ni)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.SW(B.o.D(t.r+1,0,J.ac(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Ni,v)},
xW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.An(),$async$xW)
case 5:case 4:if(t.c==null){w=1
break}w=J.cw(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Q4(s,r.r,o,p,q),$async$xW)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hg5(s,r.x,r.r),$async$xW)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.K5(s.c,s.d),$async$xW)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.n2(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ao(r.c,r.d,l),$async$xW)
case 11:w=12
return A.b(t.kI(),$async$xW)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xW,v)},
a_p(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.An(),$async$a_p)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxU(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yi,new C.d35(t),new C.d36())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mh("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gU(o)
p.push(new F.mh(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fUw(o,new F.r2(s,r,"",p,new F.ui(q.d,null,null,null,null,"","","")),null),$async$a_p)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_p,v)},
N0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$N0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.An(),$async$N0)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.abl,null,new C.d2L(t),s,!0,!0,!0,D.aKy,!1,!1,x.N),$async$N0)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cCN(r)
t.m(new C.d2M(t,q))
s=t.a
w=7
return A.b(C.QE(s.c,s.d,q),$async$N0)
case 7:case 1:return A.h(u,v)}})
return A.i($async$N0,v)},
W1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.abl,null,new C.d2R(t),r,!0,!0,!0,D.aKy,!1,!1,x.e),$async$W1)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d2S(t,s))
r=t.a
w=4
return A.b(C.QE(r.c,r.d,s),$async$W1)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AH(0,B.dX,B.om)
case 1:return A.h(u,v)}})
return A.i($async$W1,v)},
bMq(d){var w=d.bQ(),v=B.a.aT(B.o.u(w.gcc()),2,"0"),u=B.a.aT(B.o.u(w.gcs()),2,"0")
return""+w.gcg()+"-"+v+"-"+u},
gxU(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bUj()
if(r.e)w=D.aai
else if(J.ck(r.d)){w=r.y
v=r.gxU(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eRB,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.C(A_.agJ,new C.XF(w,v,0,q),q),q),B.bv,t,B.ao,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k6.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eCw,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ad(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vr,B.n),q,q,q,q,B.XR,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gczH(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hc(D.bDb,D.fpJ,r.gaKB(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ac(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k6.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zE
u=A.v(A.a([new A.C(D.boZ,w,q),A.D(A.Id(v,new C.d3h(r),J.ac(r.d)+1,q,r.gc7_(),u,B.aQ),1),r.bzA()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cb(q,D.acx,new A.an(B.W,q,B.b_,B.q,A.a([D.aJ3,A.bm(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bUj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cw(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jd(B.dV,"AI",h.gbxu(),!0))
if(h.a.f)f.push(new C.Jd(B.mZ,"Cover",h.gbHX(),!1))
if(h.a.f)f.push(new C.Jd(B.xW,"Header",h.gbCZ(),!1))
if(J.cw(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jd(B.tB,"Print",h.gcfY(),!1))
if(h.a.f&&J.cw(h.d)&&h.r>=0){v=h.w
u=v?B.hw:B.j8
t=v?"Save":"Edit"
f.push(new C.Jd(u,t,v?h.gcm1():new C.d31(h),!1))}if(h.a.f)f.push(new C.Jd(B.hv,"Add page",h.gaKB(),!1))
v=C.hci(h.y.Q)
u=h.gxU(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ac(h.d)
r=J.ac(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.div
else{k=new A.aV(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jG.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.k6,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bp(k,k,k,k),g,new A.a7(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k6.j(0.85)
p.push(new A.bE(1,B.bi,A.aE(B.c5,A.v(A.a([k,B.bz,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ajj(v,u,t+" \xb7 "+s+" "+r,new C.d32(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.An(),$async$zq)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a18(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.d2I(t,p),s,null,!0,!0,x.N),$async$zq)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xW(),$async$zq)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Db(),$async$zq)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.EM("Swahili (Kiswahili)",!0),$async$zq)
case 18:w=16
break
case 17:w=19
return A.b(t.cwu(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zq)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zq,v)},
XU(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jG.j(0.3),B.r,1),r=x.p
return new A.C(B.cG,A.aK(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vr,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A7.SB,w,w,w),A.d(g,w,w,w,w,w,w,A1.Su,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d33(d,h),w,w,w,w,w,w,w),w)},
Db(){return this.bLV()},
bLV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Db=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2V(r),a7,null,!0,!0,x.ei),$async$Db)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.c9(null,null,!1,null,new C.d2W(o),a7,null,!0,!0,x.H).f9(new C.d2X(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cf(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yi[a1]
J.cf(j,i.a)}w=8
return A.b(C.afH(a0,a7,new C.d2Y(o),d,l,e,j),$async$Db)
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
J.aPk(l,0)
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
for(a4=0;a4<J.ac(p);++a4){if(m.b.ah(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b9y(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ao(j.c,j.d,l),$async$Db)
case 11:w=12
return A.b(r.kI(),$async$Db)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yi[a1].a)
a5=l.cAy(j,12,a7)
l=r.a
w=15
return A.b(C.QE(l.c,l.d,a5),$async$Db)
case 15:if(r.c!=null)r.m(new C.d2Z(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AH(0,B.dX,B.om)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.cos("Undo",new C.d3_(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Db,v)},
EM(d,e){return this.cwv(d,e)},
cwu(d){return this.EM(d,!1)},
cwv(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EM=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.c9(null,null,!1,null,new C.d3a(a0),k,null,!0,!0,x.H).f9(new C.d3b(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cf(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1l(m,new C.d3c(a0)),$async$EM)
case 10:w=8
break
case 9:w=11
return A.b(C.bAY(new C.d3d(a0),m,a2),$async$EM)
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
J.aPk(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ac(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b9y(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ao(k.c,k.d,o),$async$EM)
case 12:w=13
return A.b(r.kI(),$async$EM)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.cos("Undo",new C.d3e(r,d),null),null,null,null,null,B.q,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EM,v)},
bzA(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d2J(v):u
r=A.aH(u,u,u,u,A.W(D.byU,s?D.k6:B.b5,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cw(v.d)&&!v.w&&v.r>=0)s=A.hc(A.W(B.v6,B.Ek,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Ek,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbHw(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k6.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ac(v.d)?new C.d2K(v):u
return A.bm(!0,new A.C(D.boN,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eo,t<J.ac(v.d)?D.k6:B.b5,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.Yq.prototype={
T(){return new C.bcN(new A.ar(B.as,$.aw()))}}
C.bcN.prototype={
ga0x(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbKH(){var w,v=this.ga0x()
A:{if("cover"===v){w=D.cOP
break A}if("book"===v){w=D.cKP
break A}w=D.dbp
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jG.j(0.5),n=x.p,m=A.A(A.a([D.diw,B.aw,D.bu5,A.aH(q,q,q,q,B.ld,q,q,q,new C.d53(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jG(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d54(r),r.ga0x()==="page",q,q,q,q))
if(r.a.d)l.push(A.jG(q,q,q,D.fkA,q,new C.d55(r),r.ga0x()==="book",q,q,q,q))
l.push(A.jG(q,q,q,D.f8n,q,new C.d56(r),r.ga0x()==="cover",q,q,q,q))
l=A.c_(B.bD,l,B.bt,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.T,!1,q,!0,B.q,q,A.aM(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kr,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dk,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbKH(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mw(q,B.c.j(0.08),new A.x(s,q,B.Im,q,q,q,q,q,q,q,q,q),B.hz,new C.d57(r,s),q,q,q,q))}return A.eE(q,E.Ab,A.cd(A.v(A.a([m,B.S,D.fnG,B.ao,l,B.ac,k,B.P,A.c_(B.bD,w,B.bt,6,6),B.az,A.dp(D.bD8,D.fos,new C.d58(r,d),A.bk(B.b4,q,q,q,q,B.nY,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fiY],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.fz,q,q,B.ah),q,q,q,D.agt,B.d_,q,new A.b7(p,new A.az(o,1.4,B.r,-1)),q)}}
C.Yo.prototype={
T(){return new C.ayg(A.a([],x.Y))},
gdX(){return this.c}}
C.adu.prototype={}
C.ayg.prototype={
a_(){this.a1()
this.kI()},
kI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Q8(p.c,p.d),$async$kI)
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
return A.b(C.bzu(r.c,q),$async$kI)
case 6:j=e
i=J
w=7
return A.b(C.K5(t.a.c,q),$async$kI)
case 7:m.push(new l.adu(k,j,i.ac(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d3y(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kI,v)},
b4Z(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Pg(d,e){return this.c8y(0,e)},
c8y(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).ce(A.ej(new C.d3x(u,e),!0,null,x.y)),$async$Pg)
case 2:t=g
w=3
return A.b(u.kI(),$async$Pg)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aMr)
return A.h(null,v)}})
return A.i($async$Pg,v)},
EP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$EP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aMn)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.af_(s.c,s.d),$async$EP)
case 5:q=e
w=6
return A.b(t.kI(),$async$EP)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Pg(0,B.d.ix(t.d,new C.d3C(q))),$async$EP)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Q4(p,s.f,r,n,o),$async$EP)
case 10:m=e
w=11
return A.b(t.kI(),$async$EP)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aMr)
case 1:return A.h(u,v)}})
return A.i($async$EP,v)},
OL(d,e){return this.cjN(0,e)},
cjN(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d3B(t,e),s,null,!0,!0,x.y),$async$OL)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1y(s.c,s.d,e.a),$async$OL)
case 4:w=5
return A.b(t.kI(),$async$OL)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OL,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bzD(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jG.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fF(0.7142857142857143,A.p(n,A.v(A.a([D.dix,B.ac,D.e0o,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k6.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.ba,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gczD(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jG.j(0.85),B.r,1.6)
s=A.aE(n,A.p(n,D.bKK,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jG.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3D(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jG.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bur,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eQI,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h1,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bQe,B.n),n,n,n,Al.Lo,D.bmU,n,n,n)
if(o.e)k=D.aai
else k=k.length===0?D.b1O:A.cm(new C.d3E(k))
return A.cb(n,D.acx,new A.an(B.W,n,B.b_,B.q,A.a([D.aJ3,A.bm(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bzD(d){var w,v,u=this,t=null,s=u.b4Z(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f1(B.A,new A.a6(300,420,new C.XF(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bK3,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b5,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3v(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eQh,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fF(0.7142857142857143,new A.an(B.W,t,B.aa,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k6.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3w(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jd.prototype={}
C.XF.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yi,new C.cCB(m),new C.cCC()),j=m.c,i=D.BQ.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lJ:B.ba
v=new C.cCD(h)
i=A.a([new A.ad(0,B.G,B.w.j(0.6),D.dYI,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.ba4(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aV(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.agK,8,0.85,2.2),v.$4(D.brD,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.agK,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.brz,A.b3(l,l,l,new C.b9W(h,l),B.au),l),0,0,0))
r=A.W(D.av7[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.asw,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.az,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.bs2,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFf(l),D.eGi),l,l,l,46,0,l))
return A.p(l,A.bv(D.a9_,new A.an(B.W,l,B.aa,B.q,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9_,i,new A.a7(B.ax,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.ba4.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eT()
f.dH(11)
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
C.b9W.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.exP,new A.cK([w,0,-1,1]),new A.cK([0,v,1,-1]),new A.cK([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
C.XX.prototype={
T(){return new C.ba2()}}
C.ba2.prototype={
gnL(){var w=this.d
return w===$?this.d=this.a.c:w},
gxU(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b2,B.aN),$.aw())}return v},
gaze(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b2,B.aN),$.aw())}return v},
gapb(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b2,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxU(0),u=v.S$=$.aw()
v.P$=0
v=w.gaze()
v.S$=u
v.P$=0
v=w.gapb()
v.S$=u
v.P$=0
w.a2()},
apN(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jG(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cW2(this,f,u),e===u,s,s,s,s))}return A.c_(B.bD,r,B.bt,6,8)},
avo(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lk,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnL(),a0=f.gxU(0),a1=a0.a.a,a2=f.gaze(),a3=a2.a.a,a4=f.gapb(),a5=d.b9w(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a6(190,260,A.f1(B.A,new A.a6(270,370,new C.XF(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a0,e,e,e,e,e,2,f.avo("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWr(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a2,e,e,e,e,e,2,f.avo("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWs(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yi[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b5
q=r.a===q
o=new A.az(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bP(o,o,o,o),e,e,new A.a7(B.ax,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.ay
v.push(A.aE(e,A.v(A.a([p,B.d0,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWt(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.c_(B.bD,v,B.bt,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b4.j(0.35):B.c.j(0.07)
m=new A.aV(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.r,-1)
q.push(A.aE(e,A.p(e,A.W(D.av7[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWu(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.c_(B.bD,q,B.bt,8,8)
a4=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a4,e,e,e,e,e,2,f.avo("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWv(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mu,e,e,e)
m=A.a([],w)
for(l=D.BQ.gdL(D.BQ),l=l.gag(l);l.C();){k=l.gU(l)
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
m.push(A.aE(e,A.v(A.a([j,B.bz,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWw(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.c_(B.bD,m,B.bt,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mu,e,e,e)
k=f.gnL()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cU(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fir,B.ac,d,B.aO,a0,B.S,a2,B.az,D.fof,B.P,v,B.az,D.fiA,B.P,q,B.az,a4,B.az,p,B.P,m,B.az,l,A.kR(e,9,""+B.k.V(f.gnL().f),36,18,new C.cWx(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mu,e,e,e),B.ao,f.apN(D.a29,f.gnL().r,new C.cWy(f),D.deA),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mu,e,e,e),B.ao,f.apN(D.a1D,f.gnL().w,new C.cWz(f),D.deF),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mu,e,e,e),B.ao,f.apN(D.a1y,f.gnL().x,new C.cWB(f),D.dg2),B.ao,A.iC(e,B.b4,e,B.ag,e,new C.cWC(f),e,e,e,D.fd2,f.gnL().z),B.bv,A.bJ(D.fhl,new C.cWD(f,a6),A.bk(B.b4,e,e,e,e,B.nY,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,Q.agi,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aFf.prototype={
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
u.sau(D.bQR.aw(0,new A.aa(0,0,0+w,0+v)))
d.aO(t,u)},
aq(d){return!1}}
C.bff.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.M()
w.sau(D.bPV.aw(0,new A.aa(0,0,a3,a4)))
a5.aY(new A.aa(0,0,a3,a4),w)
v=B.k.dJ(a2/112)
u=new A.eT()
u.dH(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cOO[u.aB(9)]
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
e.r=E.jG.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c4(new A.aa(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jG.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c4(new A.aa(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.sau(D.bPi.aw(0,new A.aa(0,r,a3,q)))
d=p.H()
w.drawRect(A.c4(new A.aa(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jc
d=p.H()
w.drawRect(A.c4(new A.aa(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b56.j(0.72).gp(0)
a5.aY(new A.aa(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.sau(new A.bR(B.A,0.5,B.x,a0,0,A.a([D.bbG.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.ai(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b8i.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kG(new A.o(A.aq(D.k6,D.bfO,w/4),o,new A.bP(B.Y,new A.az(B.w.j(0.12),1,B.r,-1),B.Y,B.Y),B.Jv,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ad(0,B.G,B.w.j(0.35),B.aEI,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aV(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jG.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pI,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aVb,u,D.bQP,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ad(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFf(o),D.eGd),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSG(p.y,r,G.im,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.r,o,o,o,o,o,2,A.br(o,B.ex,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.im.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f2S,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.im.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.w,o,o,o,o,o,2,A.br(o,B.ex,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.im.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.eV6,!0,B.a5,B.z5,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f2L,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.im.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.E7.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.E7.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.E7.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.az],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.im.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.WV(A.dq(A.a([A.dq(o,o,o,o,o,o,o,o,o,D.eYa,B.a.ap(k,0,1)),A.dq(o,o,o,o,o,o,o,o,o,o,B.a.b_(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.im.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.y,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.i6,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.im.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bv(B.Jv,new A.an(B.W,o,B.aa,B.q,A.a([t,new A.C(D.br6,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.bY(o,new A.o(o,o,o,o,o,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Jv,v,D.bRk,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.q,l,o)}}
C.ao3.prototype={
T(){return new C.aBN(A.a([],x._))},
bp(){return this.r.$0()},
pt(){return this.w.$0()},
gdX(){return this.c}}
C.aBN.prototype={
a_(){var w,v
this.a1()
this.vx()
w=this.a
v=w.c
if(v.length!==0)C.a68(v,w.e,w.d.w)},
vm(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fUz(r,t.e,!1,s.w,new C.dQn(u),null,s),$async$vm)
case 2:w=3
return A.b(u.vx(),$async$vm)
case 3:return A.h(null,v)}})
return A.i($async$vm,v)},
Zz(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Zz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fUz(r,t.e,!0,s.w,new C.dQm(u),null,s),$async$Zz)
case 2:w=3
return A.b(u.vx(),$async$Zz)
case 3:return A.h(null,v)}})
return A.i($async$Zz,v)},
vx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ad(q.a.c),$async$vx)
case 7:p=e
if(q.c!=null)n=q.e||J.cw(p)
else n=!1
if(n)q.m(new C.dQp(q,p))
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
return A.b(C.FT(q.a.c).cN(0,B.pk),$async$vx)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dQq(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dQr(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vx,v)},
NN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eJP)
w=3
return A.b(C.FT(t.a.c),$async$NN)
case 3:r=e
w=4
return A.b(C.fAu(t.a.c,r),$async$NN)
case 4:q=e
w=5
return A.b(C.FT(t.a.c),$async$NN)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dQl(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ac(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dw:B.cR,null,B.q,null,s,null,B.m6,null,null,null,null,null,null,null,null,null,null))
t.a.pt()
case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
Hn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i0o(l),$async$Hn)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hvb(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYi(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hn)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hcs(r)
o=Date.now()
n=t.a.c
m=new C.ku(l,r.toUpperCase(),p,!0,B.T,D.BF,new A.S(o,0,!1),0,n,D.tn)
w=5
return A.b(C.a1F(n,m),$async$Hn)
case 5:w=6
return A.b(t.vx(),$async$Hn)
case 6:t.a.bp()
t.a.pt()
if(t.c==null){w=1
break}t.DZ(m)
case 1:return A.h(u,v)}})
return A.i($async$Hn,v)},
DZ(d){return this.caA(d)},
caA(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$DZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Ad(u.a.c),$async$DZ)
case 2:n=l.qZ(k.dH(f,new C.dQo(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hu(m,new C.anY(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$DZ)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1F(u.a.c,o),$async$DZ)
case 6:case 5:w=7
return A.b(u.vx(),$async$DZ)
case 7:u.a.pt()
return A.h(null,v)}})
return A.i($async$DZ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.N(d).ax.a===B.H,o=new C.tt(p)
if(r.e)return A.av(A.mz(q,p?B.bq:B.bo,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dW:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bEd,B.f,q,q,new A.o(B.aU.j(0.12),q,A.I(B.aU,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc9E(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.EW(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bo,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e0,A.bJ(D.fpt,r.gaOB(),A.bk(B.bT,q,q,q,q,q,Ak.XU,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.br2,q,q,1/0),15,B.ag,1.05,D.a7G,q)}w=J.ac(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.W(B.y2,B.aU,q,q,q,q),q,q,q,new C.dQt(r),q,q,q,q,"Sync family trees with database",q))
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.W(B.xU,B.aU,q,q,q,q),q,q,q,r.gaea(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.alS,D.f6d,r.gaOB(),A.bk(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ac(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.EW(r.cwz(J.q(r.d,s),o),14,B.ag,1,D.a7G,q))
B.d.v(w,u)}return A.v(A.a([p,B.az,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cwz(d,e){var w=null,v=e.a,u=v?B.dW:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bX).j(0.55),B.r,1),r=A.a([new A.ad(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bDh,B.f,w,w,new A.o(B.aU.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gan4(),m=d.d?"":" \xb7 Public",l=d.y===D.kd?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bz,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.bB,A.A(A.a([p,B.bf,l,A.W(B.M6,v?B.bq:B.bo,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dQs(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.anY.prototype={
T(){return new C.aBK(A.a([],x._),A.aX(x.N),A.b5X())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aBK.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.ab5()
w=u.a
v=w.c
if(v.length!==0)C.a68(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a1t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xo("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPO(r),s,null,!0,!0,x.y),$async$a1t)
case 3:if(e!==!0||t.c==null){w=1
break}t.IQ()
t.m(new C.dPP(t,r))
w=4
return A.b(t.vo(),$async$a1t)
case 4:t.a.bp()
t.xo(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
cmH(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dPJ(w,f,d,e))},
aQL(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dl()
u.e2(w,v,0,1)
u.ju(q,q,1,1)
this.w.sp(0,u)},
b7d(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.dY(r)
w=q.C9()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dl()
t.e2(r,u,0,1)
t.ju(v,v,1,1)
t.e2(-r,-u,0,1)
t.io(0,q)
s.sp(0,t)},
ab5(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ab5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Ad(u.a.c),$async$ab5)
case 2:t=s.qZ(r.dH(e,new C.dPh(u)))
if(t!=null&&u.c!=null)u.m(new C.dPi(u,t))
return A.h(null,v)}})
return A.i($async$ab5,v)},
xo(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vm(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fUz(o,t,!1,r,new C.dPw(u),q.a,s),$async$vm)
case 2:n=A
m=J
w=3
return A.b(C.FT(u.a.c),$async$vm)
case 3:p=n.qZ(m.dH(e,new C.dPx(u)))
if(p!=null&&u.c!=null)u.m(new C.dPy(u,p))
return A.h(null,v)}})
return A.i($async$vm,v)},
IQ(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
vo(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1F(t,s),$async$vo)
case 2:return A.h(null,v)}})
return A.i($async$vo,v)},
a04(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a04=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tF(q,t.a.c)){t.xo("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i1x(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a04)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IQ()
t.m(new C.dPI(t,r))
w=4
return A.b(t.vo(),$async$a04)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a04,v)},
ZN(){return this.caC()},
caC(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tF(q,t.a.c)){t.xo("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.N(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPG(r,new C.tt(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$ZN)
case 3:if(e!==!0||t.c==null){w=1
break}t.IQ()
t.m(new C.dPH(r,t))
w=4
return A.b(t.vo(),$async$ZN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZN,v)},
UT(d){return this.bwE(d)},
bwE(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tF(r,t.a.c)){t.xo("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dP5(t,d),r,null,!0,!0,x.P),$async$UT)
case 3:s=f
if(s==null){w=1
break}t.IQ()
t.m(new C.dP6(t,s))
w=4
return A.b(t.vo(),$async$UT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UT,v)},
a1P(d){return this.cyG(d)},
cyG(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a1P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.N(s)
t=u.c
t.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dPR(u,d,new C.tt(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a1P)
case 2:return A.h(null,v)}})
return A.i($async$a1P,v)},
c6V(d){var w=this,v=w.d
v===$&&A.c()
if(C.tF(v,w.a.c))w.Ns(d)
else w.a1P(d)},
agD(d,e){return this.cqw(d,e)},
cqw(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.N(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dPL(new C.tt(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$agD)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agD,v)},
Hs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Hs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kd?3:5
break
case 3:w=6
return A.b(C.fIE(t.a.c),$async$Hs)
case 6:s=e
o=t.a
r=C.h1b(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.agD(!s,!r),$async$Hs)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bzm(o,t.a.c)){t.xo("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kW(o,"Cancel","Remove",q.y===D.kd?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Hs)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNg(t.a.c,t.d.a),$async$Hs)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iK(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Hs,v)},
a8H(d){return this.bHE(d)},
bHE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tF(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dP7(p))){o=A.T(s)
p.a=A.qZ(new A.cQ(new A.a2(s,new C.dP8(d),o.k("a2<1>")),new C.dP9(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IQ()
t.m(new C.dPa(t,s,d,q))
w=3
return A.b(t.vo(),$async$a8H)
case 3:t.xo(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a8H,v)},
Ns(d){return this.bJE(d)},
bJE(d){var w=0,v=A.j(x.H),u,t=this,s,r
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
return A.b(A.c9(null,null,!0,null,new C.dPe(t,d),r,null,!0,!0,x.P),$async$Ns)
case 6:s=f
if(s==null){w=1
break}t.IQ()
t.m(new C.dPf(t,s))
w=7
return A.b(t.vo(),$async$Ns)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ns,v)},
cwV(){var w=this,v=w.d
v===$&&A.c()
if(!C.tF(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dPQ(w))
w.vo()},
XG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bzm(n,t.a.c)){t.xo("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.N(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.J(q,t.gc5q(),A.T(q).k("J<1,n>")).bZ(0,new C.dPr()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPs(t,new C.tt(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$XG)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IQ()
t.m(new C.dPt(t,p))
w=4
return A.b(t.vo(),$async$XG)
case 4:t.xo("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XG,v)},
c5r(d){return B.a.i(d.toLowerCase())},
c9p(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tF(v,w)
t=r.d
s=C.hRT(t)
C.i0s(q,t.b,u,C.hRS(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=new C.tt(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dPY(),A.T(l).k("a2<1>")).gM(0)
l=n?B.bW:B.iH
v=A.W(B.Z3,n?B.bq:B.bo,o,o,o,18)
u=x.p
v=A.a([new A.C(B.Ay,A.aK(!1,o,!0,new A.C(B.hG,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dPZ(p,d),o,o,o,o,o,o,o),o),new A.C(B.mU,p.bUk(m),o)],u)
if(p.d.y===D.kd){t=B.r0.j(0.15)
s=A.m(12)
r=A.I(B.r0.j(0.45),B.r,1)
q=C.FR(p.d,p.a.c)
v.push(new A.C(B.xc,A.p(o,A.A(A.a([D.bIr,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iN,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.tF(p.d,p.a.c)&&p.e.length!==0)u.push(new C.J9("Undo",B.qQ,p.gcwU(),m,o,o))
u.push(new C.J9("Family Book",D.by0,p.gc9o(),m,B.rQ,o))
if(C.tF(p.d,p.a.c))u.push(new C.J9("Display settings",B.Bh,p.gcaB(),m,B.aZ,o))
u.push(new C.J9("Sync",B.xU,p.gaea(),m,o,o))
t=p.d
if(t.y===D.kd||C.bzm(t,p.a.c)){t=p.d.y===D.kd?"Remove shared tree":"Delete tree"
u.push(new C.J9(t,B.e4,p.gbHO(),m,B.fU,o))}if(C.tF(p.d,p.a.c))u.push(new C.J9("Add member",B.vi,new C.dQ_(p),m,B.bT,o))
v.push(new A.C(Q.afW,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gan4()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.dQ0(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?K.Z7:X.M7,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dQ1(p),o),o,o,o))}return A.cb(o,l,A.bm(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bUk(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ad(0,B.G,B.fu.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xM,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bLt,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaea(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eTu,m,m,m)
r=r.gan4()
p=n.d.gan4()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bz,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tF(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bID,m,m,m,n.gck7(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j9:B.me
r=r?"Private":"Public"
r=A.D(n.atm(q,"Privacy",r,n.a.d.w?n.gcvX():m),1)
q=A.D(n.atm(B.xV,"Tree code",n.d.c,new C.dPg(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.atm(D.bzJ,"Collaborators",p,n.gbYL()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kd){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fG,A.A(A.a([A.W(B.ow,B.c,m,m,m,14),B.ea,A.d("View only",m,m,m,m,m,m,B.aNC,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.af)],o))}return A.p(m,A.bv(u,new A.an(B.W,m,B.aa,B.q,A.a([t,new A.C(B.EN,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bPm,B.n),m,m,m,m,m,m,m,1/0)},
atm(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(L.ah2,A.v(A.a([A.W(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ue,A.d(f,w,1,B.a2,w,w,w,O.z9,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)}}
C.bcv.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gal(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcy(s,t),new A.at(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dt(r,new C.d3I(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d3J(this),A.T(r).k("J<1,r>")))
return new A.C(B.tj,new A.a6(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jl.prototype={}
C.F8.prototype={}
C.bcx.prototype={
gbfy(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHk.prototype={}
C.bcy.prototype={
bJm(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
t.E(new A.po(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.po(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.ai(new A.u(u,w),9,q)
q=A.M()
q.r=B.bA.gp(0)
d.aO(t,q)},
bJk(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b1(a0,new C.d42())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b8(a0,new C.d43(f))
t=new A.J(a0,new C.d44(f),A.T(a0).k("J<1,O>")).bZ(0,new C.d45()).cH(0,1/0,B.ws)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lM(m)
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
w.e=B.fA
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bJk(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bJm(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.bgc.prototype={
gc3g(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dbo
switch(w.c.a){case 0:return D.cGP
case 1:return D.cRA
case 2:return D.d6_}},
gc3j(){var w=this.c,v=C.hbQ(w.w),u=C.hbQ(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.N(d).ax.a===B.H,q=t.gc3g(),p=t.c,o=I.bAg(p.f),n=t.gc3j(),m=x.V,l=A.a([new A.ad(0,B.G,B.d.gam(q).j(0.35),B.cJ,10)],m),k=r?B.aA:B.c,j=A.I(r?B.aA:B.c,B.r,2)
if(o!=null)w=A.rU(B.A,s,B.cn,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gam(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gam(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hR(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ax,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.F2,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aA:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f2n,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.bsS,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ad(0,B.G,B.w.j(r?0.3:0.06),B.dA,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bo,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a6(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aX4,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bt2,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bbD.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.X()
w=A.M()
v=this.b
u=v?B.c:D.b7F
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.btK.prototype={
B(d){var w=this,v=null,u=new C.f4r(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hv,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xR,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),u.$3(B.ajn,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.af)}}
C.bjx.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.r,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?K.Z7:X.M7,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eZL,v,v,v)],r),B.m,v,B.ba,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.ao,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eXL,B.L,v,v)],r)
if(s){t=A.a([B.ao],r)
s=w.d
B.d.v(t,new A.J(s,new C.eGL(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a6(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Z_.prototype={
T(){return new C.aAb()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aAb.prototype={
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
r.y=t==null?D.xq:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hTq(w.r,w.f)
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
OM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h1b(p.y,p.w)
w=3
return A.b(A.l8(t.a.w,B.Hq),$async$OM)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYi(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$OM)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hvc(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Am.G1(78,800),$async$OM)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.djT(t,q))
case 1:return A.h(u,v)}})
return A.i($async$OM,v)},
c3i(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.xq,null,null,null,"","","","","",1,!1,0)
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
s=v.aC3(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).N(s)},
a8i(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.djS(r),s,null,!0,!0,x.y),$async$a8i)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8i,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.N(d).ax.a===B.H,i=new C.tt(j),h=l.a.e,g=A.T(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dk1(l),g),g.k("H.E"))
h=j?B.dW:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bro,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ho(A.aK(!1,k,!0,new A.C(B.lB,A.W(B.e4,B.oj,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbEu(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jl:B.iK
t=I.bAg(l.as)
if(l.as==null)s=A.W(B.op,j?B.bq:B.bo,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.q,A.a([A.hp(u,t,s,k,42),A.ao(0,A.hp(B.bT,k,D.bCm,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc3f(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAd(t,"Full name",B.mb,1,1,i,B.lQ)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bga(i,u,new C.dk2(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bkZ],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dk3(),A.T(o).k("J<1,eO<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bl0],q)
B.d.v(q,new A.J(f,new C.dk5(),A.T(f).k("J<1,eO<n?>>")))
o=A.v(A.a([t,B.ao,new C.abW(i,r,"Who is their parent?",p,new C.dk6(l),k,o),B.az,n,B.ao,new C.abW(i,m,"Who is their spouse / partner?",q,new C.dk7(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAd(q,"Birth date",D.air,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAd(m,"Birth place",B.Zm,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAd(n,"Date of death (if deceased)",D.akI,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAd(p,"Occupation",B.a_q,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.q,w,k),B.az,s,B.bv,new C.abX(i,"Identity",u,k),B.ac,new C.abX(i,"Family links",o,k),B.ac,new C.abX(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAd(r,"Notes",B.kH,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAc(i,"Child order",l.caP(l.at),new C.dk8(l),new C.dk9(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fS_(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dka(l):k
B.d.v(r,A.a([B.S,new C.aAc(i,"Visible in tree",u,w,new C.dkb(l),k)],v))}r.push(B.S)
w=j?B.jl:B.iK
u=A.m(14)
t=A.I(j?B.dZ:B.bX,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iC(k,B.bT,k,B.ag,k,new C.dkc(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.afx,k,k,k))
r.push(B.bv)
w=j?B.aP:B.aA
j=j?B.dZ:B.bX
r.push(A.A(A.a([A.D(A.dT(B.nf,new C.dk4(d),A.de(k,k,k,k,k,k,k,k,k,w,k,k,B.cf,k,new A.b7(A.m(14),B.Y),new A.az(j,1,B.r,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eCE,l.gc3h(),A.bk(B.aU,k,k,0,B.c,k,B.cf,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.eh(B.h6,k,B.ag,h,new A.a6(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ah),k),D.agp,k,B.afN,new A.b7(g,B.Y),k,k)},
caP(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.abX.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jl:B.iK,s=A.m(16)
return A.v(A.a([new A.C(D.agN,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bX,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bgb.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dW:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bX).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.T,!1,u,!0,B.q,u,A.aM(),v.d,u,u,u,u,u,2,A.br(u,B.ex,u,B.uY,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bo,u,u,u,u,u,u,u,u,u,u,u,B.cs,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.abW.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dW:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bX).j(0.85),B.r,1),q=A.W(B.qK,u?B.bq:B.bo,v,v,v,v),p=A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dW:B.c
return A.p(v,new A.D6(A.a3i(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,v,v,v,B.cs,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l4,v,v,v)}}
C.bga.prototype={
B(d){var w=new C.dkd(this)
return A.A(A.a([w.$3(D.YH,"Male",B.MT),B.ab,w.$3(D.ahF,"Female",B.ME),B.ab,w.$3(D.xq,"Other",B.n_)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAc.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jl:B.iK,r=A.m(14),q=A.I(t?B.dZ:B.bX,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGn(u,B.xR,w.f,v),B.bp,new C.aGn(u,B.hv,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eh,v,v,v)}}
C.aGn.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dW:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bq:B.bo).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.af)}}
C.abY.prototype={
bN_(d){switch(d.a){case 0:return B.bT
case 1:return B.bA
case 2:return B.cU}},
bN0(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aUX(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zL(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dW:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bX).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bT,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bo,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cG,B.x9,p,p,1/0)},
acF(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jl:B.iK,s=A.m(16),r=A.I(v?B.dZ:B.bX,B.r,1)
return A.v(A.a([new A.C(D.agN,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hgw(r,q),o=q.c,n=t.bN_(o),m=I.bAg(q.f),l=t.e.a,k=l?B.dW:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kd?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bo,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ad(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hp(u,m,m==null?A.W(B.op,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.av(A.p(s,A.d(t.bN0(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.m9,s,s,s),s,s,s)
u=x.p
i=A.a([t.zL("Full name",i,B.mb)],u)
if(p>0)i.push(t.zL("Child order","#"+p,B.ML))
r=A.a([h,B.at,r,B.aO,l,B.S,v,B.bv,t.acF("Identity",i),B.ac,t.acF("Life details",A.a([t.zL("Birth date",q.w,D.air),t.zL("Birth place",q.x,B.Zm),t.zL("Date of death",q.y,D.akI),t.zL("Occupation",q.z,B.a_q)],u)),B.ac,t.acF("Family links",A.a([t.zL("1. Parent",t.aUX(q.d),B.Fg),t.zL("2. Spouse",t.aUX(q.e),B.MD)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.acF("Notes",A.a([t.zL("Notes",q,B.kH)],u))],u))
r.push(B.bv)
r.push(A.bJ(B.IF,new C.dkn(d),A.bk(B.aU,s,s,s,s,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eE(s,k,new A.cU(B.lq,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,B.xe,s,s,B.ah),s),s,s,s,B.EQ,B.d_,s,new A.b7(j,B.Y),s)}}
C.J9.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bo
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xi,A.ho(A.aF(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.af),u,v.c,u,u),u)}}
C.ao0.prototype={
eJ(){var w,v,u=this,t=x.N,s=A.V(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.T(w).k("J<1,a4<n,@>>")
w=A.B(new A.J(w,new C.c5Y(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iP(w,new C.c5Z(),t,x.U))
return s}}
C.ao1.prototype={
T(){return new C.aBM(A.a([],x.bF))},
gdc(){return this.c}}
C.aBM.prototype={
a_(){this.a1()
this.IX()},
IX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$IX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c61(t.a.c),$async$IX)
case 3:r=e
w=4
return A.b(C.Ad(t.a.c),$async$IX)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qF(q,new C.dQa(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dQb(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$IX,v)},
xV(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JF(d,e){return this.czd(d,e)},
czd(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JF=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dQf(q,e))
t=3
w=6
return A.b(d.$0(),$async$JF)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dQg(q))
$.eQ.mb()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JF,v)},
Ww(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ww=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oU(r,s.c,s.e),$async$Ww)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JF(new C.dQ7(t),"Preparing download\u2026"),$async$Ww)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ww,v)},
WA(d){return this.bL3(d)},
bL3(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oU(r,s.c,s.e),$async$WA)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JF(new C.dQ8(t,d),"Preparing file\u2026"),$async$WA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WA,v)},
aex(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aex=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wN.c4().Lo(B.PI,B.to,!0),$async$aex)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gal(o)}else o=!1
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
case 6:u=A.G0()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aex,v)},
Xa(d){return this.bVc(d)},
bVc(d){var w=0,v=A.j(x.H),u=this
var $async$Xa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JF(new C.dQ9(u,d),"Restoring family trees\u2026"),$async$Xa)
case 2:return A.h(null,v)}})
return A.i($async$Xa,v)},
X9(){var w=0,v=A.j(x.H),u,t=this,s
var $async$X9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aex(),$async$X9)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Xa(s),$async$X9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X9,v)},
a0V(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oU(r,s.c,s.e),$async$a0V)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JF(new C.dQe(t),"Creating QR code\u2026"),$async$a0V)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0V,v)},
a0w(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cn()){t.xV("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ce(A.ej(new C.dQc(),!0,null,x.N)),$async$a0w)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Xa(r),$async$a0w)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0w,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.N(d).ax.a===B.H,n=o?B.A_:B.iH,m=o?D.ae7:B.aP,l=o?B.aK:B.bX,k=o?B.aP:B.aA,j=new C.d46(n,m,l,k,o?B.bI:B.bo)
l=A.aH(p,p,p,p,A.W(B.eB,k,p,p,p,20),p,p,p,new C.dQi(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d3F(!0,B.jb,B.aW,B.aW,q.r?p:q.gcqk(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gcmC()
t.push(A.D(C.d3F(!s,B.iP,B.b4,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d3F(!1,B.hx,B.aU,B.bT,q.r?p:q.gbKX(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d3F(!1,M.xY,B.aJ,B.aM,q.r?p:q.gbV9(),j,s,"Upload backup file"),1))
l=A.a([new C.bcw(v,l,p),B.ko,new C.abe(j,"QR restore",p),B.S,t,B.d5,new C.abe(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ac(q.d)>1&&q.a.f==null){v=A.a([B.ko,new C.abe(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dQj(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.XQ,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aU.j(0.35),B.r,1)
s=A.a([new A.ad(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.A(A.a([K.aM5,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AE,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cb(w,n,new A.an(B.W,p,B.aa,B.q,l,p),p,!1,!1,p,p)}}
C.d46.prototype={}
C.bcw.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ad(0,B.G,B.aU.j(0.32),B.jW,28)],x.V)
t=A.ao(p,A.W(B.tF,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.q,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bL1,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nZ,A.D(A.v(A.a([D.f7b,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bSv,B.n),p,p,p,p,p,p,p,p)}}
C.abe.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcu.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aW.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ad(0,B.G,B.aW.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ex(A.dc(new A.C(E.Xu,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qF,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bz,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cs,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)}}
C.bcz.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aU.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ex(new A.C(B.eP,A.A(A.a([A.p(v,D.bKf,B.f,v,v,new A.o(q,v,A.I(B.aU.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qF,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hx,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.Zk.prototype={
T(){return new C.aBL()},
gdc(){return this.c}}
C.aBL.prototype={
a_(){this.a1()
this.a7P()},
a7P(){var w=0,v=A.j(x.H),u=this,t
var $async$a7P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b_W(u.a.c,B.Cf),$async$a7P)
case 2:t=e
if(u.c!=null)u.m(new C.dQ2(u,t))
return A.h(null,v)}})
return A.i($async$a7P,v)},
afU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$afU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dQ3(q))
t=4
p=A.h2P(q.a.d,B.Cf)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.U(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqg(n.e,m,l,B.Cf,p,n.f),$async$afU)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dQ4(q))
q.c.I(x.q).f.R(D.eKY)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a9(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(B.a.e8(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dQ5(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afU,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.N(d).ax.a===B.H,o=p?B.j0:B.pe,n=p?B.i3:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fmj,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.pz(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aU,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bv,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.ba,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcmj()
if(u)u=B.Id
else u=A.W(r.e===!0?B.hw:B.aiq,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a6(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.de(q,q,q,q,q,q,q,q,q,B.aU,q,B.fL,q,q,q,new A.az(B.aU.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.i6,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.ay:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bJ(B.zd,new C.dQ6(d),A.bk(B.aU,q,q,q,q,B.fL,q,q,q,q,q,q)),q))
return A.cb(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Zl.prototype={
T(){return new C.bhE(A.yM(B.x_,B.nm,B.tK))}}
C.bhE.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cb(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.feL,w,w,w,1,w,!0),B.w,A.yL(this.d,B.bQ,new C.dQk(this,d)),w,!1,!1,w,w)}}
C.aWR.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Pc,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ls.prototype={}
C.a5a.prototype={
T(){return new C.bhl(null,null)}}
C.bhl.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.td,v,1,v,w)
w.e=A.bj(v,B.pj,v,1,v,w)
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
this.bs4()},
B(d){var w,v,u=this,t=B.d.dM(D.a21,new C.dBU(u),new C.dBV())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.crb(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dBW(u,t),null),!0)}}
C.bhk.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aZ7(d,e)
break
case"house":p.lM(d,e,D.cW0)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gee()
$.X()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ai(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lS(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Au(d,e,12)
p.xy(d,e,B.kY,5,14)
break
case"grocery":p.cbx(d,e)
break
case"calculator":p.cbe(d,e)
break
case"lumber":p.cbF(d,e)
break
case"kitchen":p.cbA(d,e)
break
case"landscape":p.lM(d,e,D.cWw)
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
p.Au(d,e,8)
p.xy(d,e,B.iM,4,18)
break
case"plumbing":p.cbO(d,e)
break
case"electrical":p.lM(d,e,D.d5k)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aY(new A.aa(0,0,0+e.a,0+e.b),u)
p.lS(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lS(d,e,B.lu.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Au(d,e,10)
break
case"store":p.cbX(d,e)
break
case"paint_remodel":p.cbJ(d,e)
break
case"roofing":p.cbQ(d,e)
break
case"warehouse":p.cc3(d,e)
break
case"vehicles":p.cc1(d,e)
break
case"farm":p.cbr(d,e)
break
case"restaurant":p.cbP(d,e)
break
case"tools":p.cc_(d,e)
break
case"wallet":p.cc2(d,e)
break
case"concrete":p.cbk(d,e)
break
case"blueprint":p.cbc(d,e)
break
default:p.aZ7(d,e)}},
lM(d,e,f){var w,v=new A.aa(0,0,0+e.a,0+e.b)
$.X()
w=A.M()
w.sau(new A.a7(B.ax,B.aD,B.x,f,null,null).aw(0,v))
d.aY(v,w)},
lS(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gee()/2-h
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
xy(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gee()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Au(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aZ7(d,e){var w,v=this
v.lM(d,e,D.d47)
w=v.c
v.lS(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lS(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bJg(d,e,B.hS,w)
v.xy(d,e,B.c.j(0.7),6,8)},
bJg(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c4(new A.aa(16,q,t,q+3)),p)
p.delete()}},
cbx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lM(d,e,D.ccS)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cUm[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lS(d,e,B.c.j(0.35),w,16)
j.xy(d,e,B.iM,5,12)},
cbe(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lM(d,e,D.ccZ)
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
r=D.cY1[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.eo(r,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cd0[o]
l=B.k4.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.eo(m,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.lS(d,e,B.c.j(0.35),w*1.5,14)
h.lS(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.lS(d,e,B.A0.j(0.4),r*2.8,22)
h.xy(d,e,B.p5,8,10)
h.Au(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cbF(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lM(d,e,Z.au3)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bz(new A.aa(20,q,u,q+10),B.hy)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fZ,B.oa,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.ep(p),n)
n.delete()}m.lS(d,e,B.fZ.j(0.35),w,15)
m.Au(d,e,8)},
cbA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lM(d,e,D.cUR)
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
k.delete()}j.lS(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.xy(d,e,B.qk,4,14)},
cbO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lM(d,e,D.cKs)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.X()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xy(d,e,B.oh,6,12)
l.lS(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cbX(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lM(d,e,D.cqi)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bz(new A.aa(q,14,q+u,22),B.id)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f5,B.bJ,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}n.lS(d,e,B.c.j(0.3),w,16)
n.Au(d,e,8)
n.xy(d,e,B.uD,5,13)},
cbJ(d,e){var w,v,u,t,s,r,q,p,o
this.lM(d,e,D.cQ1)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bz(new A.aa(q,p,q+8,p+(18+r*22)),B.h9)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.ij,B.dy,B.bJ,B.ey][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.ep(p),o)
o.delete()}this.lS(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cbQ(d,e){var w,v,u,t,s,r,q,p,o
this.lM(d,e,D.cNC)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xy(d,e,B.cm,7,11)},
cc3(d,e){var w,v,u,t,s,r,q,p,o,n
this.lM(d,e,D.csW)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bz(new A.aa(p,o,p+(t-r*8),o+16),B.hy)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cm,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}this.lS(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cc1(d,e){var w,v,u,t,s,r,q,p,o
this.lM(d,e,D.d91)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bz(new A.aa(r,q,r+28,q+8),B.hy)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}this.Au(d,e,6)},
cbr(d,e){var w,v,u,t,s,r,q,p,o,n
this.lM(d,e,D.cTw)
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
n.delete()}this.lS(d,e,B.lu.j(0.35),w,14)},
cbP(d,e){var w,v,u,t,s,r,q,p,o=this
o.lM(d,e,D.cVP)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cu(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c4(r),p)
p.delete()}o.xy(d,e,B.qk,5,16)
o.Au(d,e,7)},
cc_(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lM(d,e,D.d6I)
w=m.c
v=w*3.141592653589793
m.lS(d,e,B.oa.j(0.55),v*3,10)
m.lS(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oa.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cc2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lM(d,e,D.d9y)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bz(new A.aa(p,o,p+36,o+22),B.id)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iM,B.lu,q).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}m.Au(d,e,9)
m.lS(d,e,B.c.j(0.4),w*2.2,12)},
cbk(d,e){var w,v,u,t,s,r,q,p,o,n
this.lM(d,e,D.d_E)
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
o.r=B.bX.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cbc(d,e){var w,v,u,t,s,r,q,p
this.lM(d,e,D.cWN)
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
this.lS(d,e,B.kY.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aqY.prototype={
Zb(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aOb(),$async$Zb)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7p(s),$async$Zb)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Zb,v)},
aey(d){return this.cei(d)},
cei(d){var w=0,v=A.j(x.H),u=this,t
var $async$aey=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i0C(d),$async$aey)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aey,v)},
B(d){var w,v,u,t=null,s=A.N(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jl:B.iK
w=x.p
v=A.a([C.aOz(!0,B.qc,1/0,B.pr,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bY(new A.bI(B.b1,t,t,new A.C(B.uR,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.auY,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a7(B.b1,B.b6,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dp(D.bE6,D.f3C,new C.cdv(this,d),A.bk(B.aU,t,t,t,B.c,t,B.jp,t,t,t,t,B.c7)),1),B.ab,A.D(A.ez(D.bMe,D.fhL,this.gc5o(),A.de(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jp,t,t,D.aVB,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aF(!1,B.a1,!0,B.qc,new A.an(B.W,t,B.b_,B.q,v,t),B.aq,s,0,t,t,t,t,t,B.af),t)}}
C.aJG.prototype={
aQ(){this.aX()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.aRr.prototype={}
C.aRq.prototype={}
C.aPw.prototype={}
C.XZ.prototype={
T(){return new C.ax1()}}
C.ax1.prototype={
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
if(w.length===0){u.c.I(x.q).f.R(D.eLs)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).N(new C.aRr(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.N(d).ax.a===B.H,l=m?B.dW:B.c,k=A.m(20),j=A.p(n,D.bLU,B.f,n,n,new A.o(B.aU.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bz,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cx,m?B.bq:B.bo,n,n,n,n),n,n,n,new C.cWP(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,11,n,n,B.cs,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h34(new C.cWQ(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jl:B.iK
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bX
t=A.aL(n,B.T,!0,n,!0,B.q,n,A.aM(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.df),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cWR(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,R.Ih,n,n,n,n)
u=m?B.aP:B.aA
m=m?B.dZ:B.bX
return A.eE(n,l,new A.cU(B.lq,A.cd(A.v(A.a([j,B.aO,i,B.at,w,B.P,v,B.aO,t,B.bv,A.A(A.a([A.D(A.dT(B.dd,new C.cWS(d),A.de(n,n,n,n,n,n,n,n,n,u,n,n,B.cf,n,new A.b7(A.m(12),B.Y),new A.az(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bJ(D.fi_,o.ga1d(),A.bk(B.aU,n,n,n,B.c,n,B.cf,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.y,n,B.AF,n,n,B.ah),n),n,n,n,W.AG,B.d_,n,new A.b7(k,B.Y),n)}}
C.XY.prototype={
T(){return new C.ax0()}}
C.ax0.prototype={
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
if(w.length===0){this.c.I(x.q).f.R(D.eJ9)
return}v=this.c
v.toString
A.a5(v,!1).N(new C.aRq(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.N(d).ax.a===B.H,o=p?B.dW:B.c,n=A.m(20),m=A.p(q,D.bIw,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bz,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bo,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cx,p?B.bq:B.bo,q,q,q,q),q,q,q,new C.cWL(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aU.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aU.j(0.25),B.r,1)
u=A.W(B.aic,B.aU.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jl:B.iK
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bX
v=A.aL(q,B.T,!0,q,!0,B.q,q,A.aM(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.df),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cWM(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kp,q,q,q,q)
w=p?B.aP:B.aA
p=p?B.dZ:B.bX
return A.eE(q,o,new A.cU(B.lq,A.cd(A.v(A.a([m,B.aO,l,B.az,v,B.bv,A.A(A.a([A.D(A.dT(B.dd,new C.cWN(d),A.de(q,q,q,q,q,q,q,q,q,w,q,q,B.cf,q,new A.b7(A.m(12),B.Y),new A.az(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bJ(D.fov,this.ga1d(),A.bk(B.bT,q,q,q,B.c,q,B.cf,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.AF,q,q,B.ah),q),q,q,q,W.AG,B.d_,q,new A.b7(n,B.Y),q)}}
C.Xw.prototype={
T(){return new C.avL()}}
C.avL.prototype={
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
gahH(){var w=this.f
w===$&&A.c()
w=A.d3(B.a.i(w.a.a))
return w==null?0:w},
gb0X(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aMk(d){var w,v=B.k.D(this.gIS()+d,0.25,999999),u=B.k.jL(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saV(0,u)
this.m(new C.cuo())},
avZ(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aU,w,w,w,20):w,u=d.a,t=u?B.jl:B.iK,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bX
return A.br(w,new A.b4(4,s,B.df),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a95),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c5p(d,e,f){return this.avZ(d,e,f,null)},
Jw(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gahH()<=0){s.c.I(x.q).f.R(D.eNj)
return}r=s.c
r.toString
v=s.gIS()
u=s.gahH()
t=s.gb0X()
A.a5(r,!1).N(new C.aPw(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=new C.tt(n),l=n?B.dW:B.c,k=A.m(24),j=x.O,i=A.a([B.aU.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bC3,B.f,o,o,new A.o(o,o,A.I(B.aU.j(0.35),B.r,1),h,o,new A.a7(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bz,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.cs,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cx,n?B.bq:B.bo,o,o,o,o),o,o,o,new C.cuu(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.T,!0,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.avZ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.MR),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,R.Ih,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jl:B.iK
t=A.m(14)
s=A.I(n?B.dZ:B.bX,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xR,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cuv(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),q,o,o,o,o,o,2,D.bNL,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cuw(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aH(o,o,o,o,A.W(B.hv,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cux(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.aw,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),t,o,o,o,o,o,2,p.avZ(m,"Amount","0.00",B.hW),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cuy(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.J(D.cQt,new C.cuz(p,m),t),t.k("aj.E"))
i=A.a([i,B.bv,v,B.az,h,B.P,s,B.ac,A.c_(B.bD,u,B.bt,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.c5p(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cuA(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kp,o,o,o,o)],w))}i.push(B.aO)
h=B.aU.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIS()===B.k.jL(p.gIS())?B.k.O(p.gIS()):p.gIS()
s=p.gb0X()
r=A.Af(p.gahH())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bB2(p.gIS()*p.gahH(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.j6,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.dZ:B.bX
h=A.de(o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o,new A.b7(j,B.Y),new A.az(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cuB(d),h),1),B.aw,A.D(A.dp(D.alL,D.fkD,p.ga1d(),A.bk(B.aU,o,o,0,B.c,o,B.cf,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eE(o,l,new A.cU(V.a9s,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.q,o,B.y,o,Ab.qE,o,o,B.ah),o),o,o,o,B.Lx,B.d_,o,new A.b7(k,B.Y),o)}}
C.a02.prototype={
T(){return new C.btC()}}
C.btC.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.N(d).ax.a===B.H,q=r?B.dW:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jl:B.iK
v=A.aL(s,B.T,!0,s,!0,B.q,s,A.aM(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.df),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f3U(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dT(B.dd,new C.f3V(d),s),1)
r=A.bk(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.C(B.AF,A.v(A.a([o,B.az,v,B.aO,A.A(A.a([u,B.aw,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f3W(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d_,s,new A.b7(p,B.Y),s)}}
C.aai.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.EW.prototype={
T(){return new C.btA(null,null)}}
C.btA.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bly,null,1,null,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bup()},
gbvP(){switch(this.a.r.a){case 1:return A.a([B.aU,B.bT,B.aZ],x.O)
case 2:return A.a([B.bs,B.aU,B.aZ],x.O)
case 3:return A.a([B.aW,B.c8,B.jH],x.O)
case 4:return A.a([B.ht,B.bT,B.f6],x.O)
case 0:return A.a([B.aU,B.bT,B.aZ],x.O)}},
B(d){var w=A.N(d),v=this.d
v===$&&A.c()
return new A.et(A.c6(v,new C.f3S(this,new C.tt(w.ax.a===B.H)),null),null)}}
C.avE.prototype={
T(){return new C.btB(null,null)}}
C.btB.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mQ,null,1,null,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.buq()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f3T(this),null)}}
C.btz.prototype={
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
w.jf()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aPE(d,q,r,o,0,0.2,4.2,0.92)
p.aPE(d,q,r,s,0.52,0.11,3.2,0.58)}},
aPE(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hor(e.a.a,e,t,t+f*i,!0),r=A.bzp(s.gbI().a.getBounds())
$.X()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a7(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Gt,null).aw(0,r))
d.aO(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aLP.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aLQ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.tt.prototype={}
C.aqX.prototype={
T(){return new C.aDh()},
gdX(){return this.c}}
C.aDh.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afo()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Kx(w,v)
this.a2()},
afo(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzx(t.c,t.d.a),$async$afo)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eDV(u,s))
return A.h(null,v)}})
return A.i($async$afo,v)},
Pb(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eDM(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Kx(t,s),$async$Pb)
case 2:if(u.c!=null)u.m(new C.eDN(u))
return A.h(null,v)}})
return A.i($async$Pb,v)},
PH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.N(p)
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.eDT(t,new C.tt(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$PH)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7p(q),$async$PH)
case 6:case 5:t.m(new C.eDU(t,r))
w=7
return A.b(t.Pb(),$async$PH)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PH,v)},
UN(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i0n(r),$async$UN)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eDH(t,new C.qJ(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pb(),$async$UN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UN,v)},
caq(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hgt(t,new C.eDL(u),w,v)},
a9A(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.az(v,2.5,B.r,-1),B.Y,B.Y,new A.az(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aVn,w,w,B.n),w,22,w,w,w,w,w,22)},
a8G(d){return this.bHB(d)},
bHB(d){var w=0,v=A.j(x.H),u=this
var $async$a8G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eDK(u,d))
w=2
return A.b(u.Pb(),$async$a8G)
case 2:return A.h(null,v)}})
return A.i($async$a8G,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.N(a2).ax.a===B.H,e=f?B.bW:B.iH,d=A.m(8),a0=A.W(P.Z4,f?B.bq:B.bo,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.EX,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bo,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eDW(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.q,A.a([A.bv(A.m(22),C.aOz(!0,A.m(22),1/0,B.pr,g,d,1/0),B.aq),A.ao(10,A.dp(D.bGB,D.fmN,h.gaZU(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h3,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ad(0,B.G,B.aU.j(f?0.5:0.38),B.eT,22),new A.ad(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ad(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.W,g,B.b_,B.q,A.a([C.aOz(!0,A.m(16),1/0,B.Mi,g,r.c,1/0),A.bY(g,new A.o(g,g,g,g,g,new A.a7(B.b1,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9A(!0),g,g,8,g,8,g),A.ao(g,A.crW(h.a9A(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.crW(h.a9A(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.crW(h.a9A(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bCD,D.fgM,h.gaZU(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h3,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bP7,B.n),g,g,g,g,B.lB,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b4E,B.ns,B.h0],u):A.a([B.aZ,B.aU,B.bT],u)
t=x.V
s=A.a([new A.ad(0,B.G,B.aU.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jt,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h1,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.az,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ao,C.bB2(h.d.gwB(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cs,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.he.j(0.75),B.r,1.6)
t=A.a([new A.ad(0,B.G,B.aW.j(0.28),B.cJ,14)],t)
j=B.aW.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.an(B.W,g,B.aa,B.q,A.a([p,new A.C(D.bqa,A.A(A.a([o,B.aw,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ex(new A.C(Ag.EJ,A.v(A.a([A.p(g,D.alk,B.f,g,g,new A.o(j,g,A.I(B.aW.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cj,g,g,g),B.fV,D.f6h],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcap(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.af)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ax,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bv,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dp(Aj.a_M,D.f4d,h.gbwh(),A.bk(B.aU,g,g,g,B.c,g,B.iN,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dW:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bX,B.r,1)
t=A.W(B.Zp,f?B.bq:B.bo,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.ao,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bo,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tm,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eDX(h,new C.tt(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.Au,A.av(A.mz(g,f?B.bq:B.bo,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cb(g,e,A.bm(!0,A.v(A.a([new A.C(B.Ay,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.y,g,E.xg,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bzU(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dW:B.c,p=A.m(16),o=A.a([new A.ad(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aY8,u,u,u,u,u,u,u,5),l=B.aU.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hI:B.h5,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcP0()
v=A.Af(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.ba,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aU.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bB2(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h3,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.Du(A.A(A.a([m,A.D(new A.C(B.afq,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cx,(r?B.bq:B.bo).j(0.75),u,u,u,20),u,u,u,new C.eDI(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aX0,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.aci.prototype={
DU(d){return this.bIT(d)},
bIT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oU(d,o,!1),$async$DU)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
w=4
return A.b(A.bN(Aa.As,null,x.H),$async$DU)
case 4:s=t.d
w=5
return A.b(C.fzD(!0,o,s),$async$DU)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FQ(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$DU)
case 6:p=f
w=7
return A.b(A.oT(o,!1),$async$DU)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DU,v)},
Zc(d){return this.cql(d)},
cql(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oU(d,s,!1),$async$Zc)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
A.hu(d,new C.aqR(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oT(s,!1),$async$Zc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zc,v)},
Pc(d){return this.cmx(d)},
cmx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(A.hu(d,D.aEc,!0,"NgmyWorksheetProjectScan",x.N),$async$Pc)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bB3(s),$async$Pc)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eMs)
w=1
break}q=C.fUe(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$Pc)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Pc,v)},
Zd(d){return this.cyb(d)},
cyb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(C.bAB(),$async$Zd)
case 3:s=f
if(s==null){w=1
break}r=C.fUe(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$Zd)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zd,v)},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=new C.tt(u),s=w.d.d.length,r=u?B.dW:B.c,q=A.m(28),p=A.a([new A.ad(0,B.G,B.w.j(u?0.35:0.08),B.jW,36)],x.V),o=x.p
return A.bm(!0,new A.C(B.uZ,A.p(v,A.v(A.a([w.coY(d,t,s),new A.C(D.bpz,A.v(A.a([w.b1R(t,"QR restore"),B.S,A.A(A.a([w.aXS(t,!0,B.jb,B.aW,B.aW,new C.eDZ(w,d),"Show to scan","QR code"),B.aw,w.aw_(t,B.iP,B.b4,B.by,new C.eE_(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b1R(t,"Backup files"),B.S,A.A(A.a([w.aw_(t,B.hx,B.aU,B.bT,new C.eE0(w,d),"Full copy","Backup file"),B.aw,w.aw_(t,M.xY,B.aJ,B.aM,new C.eE1(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
coY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cY,B.fu],k):A.a([B.aZ,B.aU,B.bT],k)
w=A.ao(l,A.W(B.tF,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kD,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ad(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOz(!0,A.m(13),64,D.bxV,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aOA,l,l,l)
r=C.bB2(r.gwB(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.q,A.a([w,new A.C(D.bpX,A.v(A.a([v,A.A(A.a([s,B.ew,A.D(A.v(A.a([u,B.at,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fI,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eDY(d),l,l,l,A.no(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aLV,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ax,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b1R(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bo,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aXS(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ae7:B.aP
if(e)w=B.aW.j(o?0.45:0.35)
else{w=o?B.dZ:B.bX
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ad(0,B.G,B.aW.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qF,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ex(new A.C(E.Xu,A.v(A.a([t,B.ac,u,B.bz,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bo,r,r,r,r,r,r,r,r,11,r,r,B.cs,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
aw_(d,e,f,g,h,i,j){return this.aXS(d,!1,e,f,g,h,i,j)}}
C.aqR.prototype={
T(){return new C.bj0()}}
C.bj0.prototype={
a_(){this.a1()
this.adi()},
adi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bB4(p.c,p.d),$async$adi)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eDC(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eDD(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adi,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.N(d).ax.a===B.H,f=g?B.A_:B.iH,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eB,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eDE(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.z2],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cY,B.fu],s):A.a([B.aZ,B.aU,B.bT],s)
r=x.V
q=A.a([new A.ad(0,B.G,B.aU.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.du,B.L,h,h)
p=C.bB2(p.gwB(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ao,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fI,h,h,h)],u),B.m,h,B.ba,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ax,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.XP,h,h,1/0)
t=g?D.bdA:B.c
q=A.m(24)
p=A.I(w?B.aW.j(0.4):B.aU.j(0.3),B.r,1)
r=A.a([new A.ad(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6h,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e0J)
else{m=A.m(20)
l=A.I(B.aL,B.r,1)
o.push(A.p(h,A.pz(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bU,h,h,h))}}o.push(B.aO)
n=w?B.aW:B.aU
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aW:B.aU).j(0.35),B.r,1)
k=w?B.MA:B.N5
k=A.W(k,w?B.aW:B.aU,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iN,h,h,h))
return A.cb(h,f,A.bm(!0,A.v(A.a([new A.C(A5.LK,e,h),A.D(A.cd(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tl,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.y,h,E.agz,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aqW.prototype={
T(){return new C.aDg(A.yM(B.L1,B.nm,B.tK))}}
C.aDg.prototype={
q(){this.d.q()
this.a2()},
aKm(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iK(w,d)},
c6f(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hZo(t)
if(s!=null){this.aKm(s)
return}r=C.h7A(t)
if(r!=null)q=A.ds(r,p,0)
else q=!1
if(q){this.aKm(B.a.i(B.a.b_(r,B.a.cI(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aH(t,t,t,t,A.W(u.f?B.qL:A0.MG,t,t,t,t,t),t,t,t,new C.eDG(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.A_,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fgF,t,t,t,1,t,!0),q=A.yL(u.d,B.bQ,u.gc6e()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aU,B.r,3),p,A.a([new A.ad(2,B.G,B.aU.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cb(r,B.w,new A.an(B.W,t,B.b_,B.q,A.a([q,p,A.ao(32,A.p(t,D.ffu,B.f,t,t,new A.o(w,t,A.I(B.aU.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.j6,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aI1.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nh.prototype={
T(){return new C.aDi(D.a8n,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDi.prototype={
gcwc(){return J.bCd(this.e,0,new C.eEo())},
a_(){this.a1()
$.aT.c1$.push(this)
this.vl()},
q(){$.aT.hB(this)
this.a2()},
iM(d){if(d===B.fs)this.vl()},
vl(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Cm(q.a.c).cN(0,B.jN),$async$vl)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eEk(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eEl(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vl,v)},
Hm(d){return this.bFM(d)},
bFL(){return this.Hm(null)},
bFM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i0p(l,d),$async$Hm)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lb(l,r,q,D.d_R,new A.S(Date.now(),0,!1))
w=4
return A.b(C.Kx(t.a.c,p),$async$Hm)
case 4:o=f
w=5
return A.b(t.vl(),$async$Hm)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eJD)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eLm)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DY(m)
case 1:return A.h(u,v)}})
return A.i($async$Hm,v)},
DY(d){return this.cab(d)},
cab(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$DY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hu(s,new C.aqX(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$DY)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Kx(u.a.c,t),$async$DY)
case 5:case 4:w=6
return A.b(u.vl(),$async$DY)
case 6:return A.h(null,v)}})
return A.i($async$DY,v)},
v7(d){return this.bVe(d)},
bVe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$v7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bAB(),$async$v7)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hu(r,D.aEc,!0,"NgmyWorksheetProjectScan",x.N),$async$v7)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bB3(q),$async$v7)
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
break}p=C.fUe(s)
w=15
return A.b(C.Kx(t.a.c,p),$async$v7)
case 15:o=f
w=16
return A.b(t.vl(),$async$v7)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eLr)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DY(p)
case 1:return A.h(u,v)}})
return A.i($async$v7,v)},
N4(d){return this.bEr(d)},
bEr(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$N4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.c9(null,null,!0,null,new C.eE5(d),s,null,!0,!0,x.y),$async$N4)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ot(t.a.c,A.a([],x.D)),$async$N4)
case 6:w=7
return A.b(t.vl(),$async$N4)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eJI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$N4,v)},
cao(d){var w=this.c
w.toString
A.bV(B.K,null,new C.eEe(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b2s(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jl
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bX,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bz,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bo,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uY,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
ZI(d,e){return this.cac(d,e)},
cac(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.K,null,new C.eE9(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$ZI)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hgt(r,new C.eEa(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.N6(d,e),$async$ZI)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZI,v)},
b_w(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aC
else t=h.a?B.aP:B.aA
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bo,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.AE,A.A(A.a([s,B.bf,t,A.W(B.eo,w?B.bq:B.bo,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af)},
ch_(d,e,f,g,h,i){return this.b_w(!1,d,e,f,g,h,i)},
N6(d,e){return this.bEB(d,e)},
bEB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$N6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kW(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$N6)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzj(t.a.c,d.a),$async$N6)
case 6:w=7
return A.b(t.vl(),$async$N6)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$N6,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.N(d).ax.a===B.H,n=new C.tt(o),m=o?B.bW:B.iH
if(q.f)o=D.b2G
else{w=q.bz5(n)
v=q.bUl(n)
u=q.gbwb()
if(o)t=B.jl
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aO,new C.EW(A.p(p,A.A(A.a([q.azq(N.Mh,"Projects",n,D.a8n),q.azq(B.v8,"Cashier",n,D.aSQ),q.azq(B.Fg,"Family Tree",n,D.fME)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bv],r)
w=q.d
if(w===D.a8n){w=J.ac(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aA,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.avE(q.gaOv(),p)],r),B.m,p,B.e,B.j,0,p,p),B.az,q.ch1(n)],r))}else{o=q.a
if(w===D.aSQ)u.push(new C.amY(o.c,n,p))
else{w=q.r
u.push(new C.ao3(o.c,o.d,o.e,o.f,new C.eEr(q),new C.eEs(q),new A.cz(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.y,p,Ac.LD,p,p,B.ah)}return A.cb(p,m,A.bm(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bz5(d){var w=null,v=A.m(8),u=d.a,t=A.W(P.Z4,u?B.bq:B.bo,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kE,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bo,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eE2(this),w,w,w,w,w,w,w)},
gbwb(){switch(this.d.a){case 0:return D.a7F
case 1:return D.fDr
case 2:return D.a7G}},
bUl(d){var w=null,v=A.m(15),u=A.a([new A.ad(0,B.G,B.aU.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bIm,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bua,A.aF(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bFV,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eE6(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.EW(A.p(w,A.v(A.a([new A.C(E.XA,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Af(this.gcwc()),w,w,w,w,w,w,D.f0J,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uX,B.j6,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aU,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.fDq,w)},
azq(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aU:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ad(0.5,B.G,B.aU.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bo
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bo
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.dg(u,A.A(A.a([w,B.ea,new A.dm(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.ba,B.j,0,u,u),u,u,B.cq,new A.o(r,u,p,q,o,u,B.n),B.ir,u,u,u,B.LG,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eEn(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),1)},
ch1(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dW:B.c
u=A.m(15)
t=A.p(p,D.bG_,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ad(2,B.G,B.aU.j(0.5),B.eT,28)],x.V),D.bRv,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.EW(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bo,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e0,A.A(A.a([A.D(q.aPZ(B.iP,"Scan QR",new C.eEh(q),d),1),B.aw,A.D(q.aPZ(M.xY,"Upload file",new C.eEi(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.az,A.bJ(D.fqk,q.gaOv(),A.bk(B.aU,p,p,p,B.c,B.fL,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.br1,1.05,D.a7F,p)}w=J.b6(q.e,new C.eEj(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.EW(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a7F,p)},
aPZ(d,e,f,g){var w=null,v=B.aU.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aU.j(0.45),B.r,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.f_a,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.afk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)},
ch0(d,e){var w,v,u=null,t=e.a,s=t?B.dW:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bX,B.r,1),p=A.a([new A.ad(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bo
n=A.bv(B.Uk,new A.fF(1.7777777777777777,C.aOz(!0,B.ft,1/0,N.Mh,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Af(d.gwB()),u,u,u,u,u,u,D.eYj,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.bB,A.A(A.a([v,A.aH(u,u,u,u,A.W(Ad.MU,t?B.bq:B.bo,u,u,u,u),u,u,u,new C.eEf(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eEg(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvn.prototype={}
C.qJ.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcP0(){var w,v,u,t,s=this.c
if(s===B.k.jL(s))w=B.o.u(B.k.O(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lb.prototype={
gwB(){return B.d.cH(this.d,0,new C.ctQ())},
ad(){var w=this,v=w.d,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.ctP(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
b9n(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lb(w.a,w.b,v,u,w.e)},
b94(d){return this.b9n(d,null)},
RU(d){return this.b9n(null,d)}}
C.GY.prototype={
a4(){return"FamilyGender."+this.b}}
C.hU.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.hcj(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aC3(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajk.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.ku.prototype={
gan4(){var w=this.f
return new A.a2(w,new C.bLw(),A.T(w).k("a2<1>")).gM(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.bLv(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hRR(w.y)],x.N,x.z)},
ye(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.ku(w.a,v,u,t,s,r,w.r,q,p,o)},
b9m(d,e){var w=null
return this.ye(w,w,d,e,w,w,w,w)},
cEP(d,e,f,g,h,i,j){return this.ye(d,e,f,g,h,i,j,null)},
aC8(d,e){var w=null
return this.ye(w,w,w,d,w,w,e,w)},
cDj(d){var w=null
return this.ye(w,w,w,w,w,w,d,w)},
cDH(d){var w=null
return this.ye(w,w,w,w,w,w,w,d)},
aBV(d){var w=null
return this.ye(w,w,w,w,d,w,w,w)},
cEl(d,e,f){var w=null
return this.ye(w,d,w,e,w,w,f,w)},
cD6(d){var w=null
return this.ye(w,w,d,w,w,w,w,w)},
cDU(d,e){var w=null
return this.ye(d,w,w,w,w,e,w,w)}}
C.ctR.prototype={
a4(){return"WrapAlignment."+this.b}}
C.ctS.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFk.prototype={}
C.b6L.prototype={
bx(d){this.a=d.a
this.b=d.b},
dr(d){var w=new C.b6L()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b6K.prototype={
gvV(){return!0},
gFr(){return this.z.b<this.b.length},
aRB(d){switch(0){case 0:return d.a.c}},
aRi(d){switch(0){case 0:return d.a.d}},
bNT(d,e){switch(0){case 0:return new A.hF(d,e)}},
bNh(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fY(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iA(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GI(b4)
switch(0){case 0:v=b5.b
u=new A.kr(0,v,0,1/0)
t=w===B.Sk
break}s=A.a([],x.gZ)
r=A.V(x.cM,x.S)
for(b3=b1.z,q=B.d.fH(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fY(b4,u,!0)
f=b1.aRB(g)
f.toString
e=b1.aRi(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFk(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFk(k,j,i))}d=s.length
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
for(q=B.d.fH(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aRB(g)
e=b1.aRi(g)
e.toString
a9=b1.bNh(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bNT(a6,a3+a9)
b0=g.a
g.a=new A.iA(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.l3(d)
w=d.b
w.hX()
v=A.dl()
u=r.a
v.e2(u.a,u.b,0,1)
w.oA(0,v)
for(u=r.z,u=B.d.dn(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fV(d)
w.n1(0)},
FX(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hX(){return this.z}}
C.btD.prototype={}
var z=a.updateTypes(["ay<~>()","R(hU)","R(ku)","~()","R(n2)","a4<n,@>(ku)","G(ku,ku)","n(hU)","ku(a4<@,@>)","R(lb)","R(tY)","n2(a4<@,@>)","tY()","G(lb,lb)","hU(a4<@,@>)","a4<n,@>(hU)","R(qJ)","ay<~>(lb)","eO<n?>(hU)","G(hU,hU)","n?(hU)","a4<n,@>(n2)","Z_(Y)","n(n)","abY(Y)","r(o4)","G(n2,n2)","hU(hU)","cL(bu<n,F8>)","cL(Jl)","~(hU)","G?(hU)","hU()","ak<hU>()","R(tX)","R(Jl)","C(hU)","~(GY)","R(adu)","r(GY,n,a0)","Yo(Y)","bu<n,ak<a4<n,@>>>(n,ak<n2>)","~(G)","+count,id,name(G,n,n)(ku)","ku(ku)","Zk(Y)","Zl(Y)","R(ls)","ls()","n(ku)","a02(Y)","XZ(Y)","XY(Y)","Ym(Y)","Yq(Y)","r(qJ)","aci(Y)","~(lP)","ay<~>([n?])","O(O,lb)","r(lb)","O(O,qJ)","a4<n,@>(qJ)","qJ(a4<@,@>)","XX(Y)","RO(Y)","cn(GX)","lb(a4<@,@>)","tX()","n(lb)","a4<n,@>(lb)","n(S)","G(hU)","ku(a4<n,@>)","Xw(Y)"])
C.fsh.prototype={
$1(d){return d.a+" "+d.b},
$S:120}
C.fsg.prototype={
bil(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qB(s,d,B.hj,E.EB),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.U(r!=null&&A.Kk(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bil(d)},
$S:287}
C.fsi.prototype={
$1(d){return d.b},
$S:120}
C.fBn.prototype={
$1(d){var w=null
return A.eE(w,B.K,new F.OB(this.a,this.b,w),w,w,0,B.Xv,B.d_,w,w,w)},
$S:47}
C.fhD.prototype={
$1(d){return d!=null},
$S:218}
C.fhE.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:218}
C.fhJ.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:169}
C.fq0.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f7(d,w,w,w,A.h2(w,B.r9,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.v3
return new A.nz(D.bmC,A.a8B(A.a([new A.fO(130,w,v),new A.yu(1,B.F9,A.f7(e,w,w,w,A.h2(w,g==null?D.e3_:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wW,B.lf))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1891}
C.fq_.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.v9(999)
f=A.wE(A.ln(h,A.f7("Cashier",h,h,h,A.h2(h,D.yQ,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.ks(D.e2R,h,f,B.hA,h),h,h,D.bn4,h))
w=A.wE(A.f7("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wE(A.f7(C.wo(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6p,h))
u=A.v9(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f7(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.f7("Person who owes",h,h,h,D.a6p,h)
q=A.v9(10)
p=x.C
u=A.ln(h,A.yp(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.ln(h,A.yp(A.a([A.f7("Amount owed",h,h,h,D.a6p,h),new A.fO(h,2,h),A.f7(A.Af(t.c),h,h,h,A.h2(h,D.yQ,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qy,B.lf),h,new A.ks(B.oI,h,q,B.hA,h),h,h,D.bmi,1/0)],p),B.qy,B.lf),h,new A.ks(E.aFr,h,u,B.hA,h),h,h,D.bo8,1/0)
q=new A.ni(D.e2U,0.9,B.kv)
r=A.v9(12)
s=i.c
o=s.$2("Original due",C.wo(t.r,!1))
n=s.$2("Current due",C.wo(t.f,!1))
m=i.d
l=new A.ni(m,1.1,B.kv)
k=A.v9(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.ln(h,A.wE(A.f7(t.gaIT(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.ks(h,new A.pk(l,l,l,l),k,B.hA,h),h,h,D.bnc,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yQ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yQ))
else{n=A.f7("Missed days ("+n+")",h,h,h,A.h2(h,B.r9,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Rn>")
o=A.B(new A.J(o,new C.fpZ(),m),m.k("aj.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b6K(5,5,new C.b6L(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.ln(h,A.yp(k,B.wW,B.lf),h,new A.ks(h,new A.pk(q,q,q,q),r,B.hA,h),h,h,B.afu,1/0)],p)
w=j.a
if(w!=null){v=new A.ni(B.HC,1,B.kv)
B.d.v(f,A.a([new A.fO(h,16,h),A.f7("Debtor signature",h,h,h,A.h2(h,B.r9,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.ln(h,new A.Hb(w,B.Uu,h,h),h,new A.ks(h,new A.pk(v,v,v,v),A.v9(6),B.hA,h),82,h,B.LI,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f7(w,h,h,h,D.eRl,h))
f.push(new A.fO(h,18,h))
f.push(A.wE(A.f7("NGMY.ORG",h,h,h,A.h2(h,D.yQ,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:449}
C.fpZ.prototype={
$1(d){var w=null,v=new A.ni(D.HD,0.7,B.kv),u=A.v9(999)
return A.ln(w,A.f7(C.wo(d,!1),w,w,w,A.h2(w,D.HD,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.ks(w,new A.pk(v,v,v,v),u,B.hA,w),w,w,D.bsm,w)},
$S:1892}
C.c_j.prototype={
$1(d){var w=null,v=B.bL.j(0.08),u=A.m(999),t=A.I(B.bL.j(0.28),B.r,1)
return A.p(w,A.d(C.wo(d,!1),w,w,w,w,w,w,D.eXP,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1893}
C.fBT.prototype={
$1(d){var w=null,v=A.aI(d,B.bS,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bJe,w,w,w,new C.fBQ(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.K,new A.cU(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.C(B.Xk,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dm(1,B.ci,A.cd(A.v(A.a([new A.et(new C.aWT(r,w),s),B.S,A.A(A.a([A.D(A.ez(B.y8,D.fmJ,new C.fBR(s,r,d),A.de(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f3,w,new A.b7(A.m(14),B.Y),new A.az(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dp(B.a_C,D.fjs,new C.fBS(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.f3,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aA,0,w,w,w,w,w,B.af),w),w,w,0,Ah.XI,B.d_,w,w,w)},
$S:47}
C.fBQ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fBR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hm(B.fS),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dF.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rD(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fBS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fwB(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fBL.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eE(w,B.aA,A.v(A.a([new A.C(D.bnX,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.ne,w,w,w),1),A.aH(w,w,w,w,B.ld,w,w,w,new C.fBJ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.ci,new A.C(B.h2,A.bv(A.m(14),A.fL(t,B.A,w,w,B.cn,B.dt,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Lm,new A.a6(1/0,w,A.dp(B.oz,D.aP_,new C.fBK(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.Ly,B.d_,w,new A.b7(v,B.Y),w)},
$S:47}
C.fBJ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fBK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rD(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fBX.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.aA,new A.C(D.bo4,A.v(A.a([A.A(A.a([D.btn,A.aH(w,w,w,w,B.ld,w,w,w,new C.fBV(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.et(A.bv(A.m(14),A.p(w,A.b3(w,w,w,new C.b8U(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a6(1/0,w,A.dp(B.oz,D.aP_,new C.fBW(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d_,w,new A.b7(v,B.Y),w)},
$S:47}
C.fBV.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fBW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hm(B.fS),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fa(B.dF.gaP(s))
w=5
return A.b(A.rD(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fl4.prototype={
$1(d){return d.a===this.a},
$S:256}
C.dCM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dCx.prototype={
bhy(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dW:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dCA(s,q,e),p,!0,!0,!1,B.HS,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dCB(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bhy(d,e)},
$S:1894}
C.dCA.prototype={
$1(d){var w,v=null,u=this.c===B.vD,t=u?D.d5x:D.d1Y
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aA,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.C(K.ag3,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ib(!0,v,v,B.y,L.aMc,new C.dCz(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:29}
C.dCz.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bo).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aWS(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dCy(t.d,r),s,s,s,s,s,s,s)},
$S:198}
C.dCy.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.dCB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dCv.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:96}
C.dCw.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.cq,e,v)
return new A.cX(e,!1,A.ig(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e1(new C.dCu(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.af),v,v,v),v,new A.bf(t,new A.bn(0.96,1,u),u.k("bf<bH.T>"))),v)},
$S:30}
C.dCu.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bS,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dW:B.c,f=A.m(14),e=A.I((h?B.bq:B.bo).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aK(!1,v,!0,new A.C(B.en,A.W(B.cx,i.a.d.a?B.bq:B.bo,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCf(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aQv("Name")
r=l.a
q=r.d==null?k:new C.dCg(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lw
n=A.I(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.T,h,k,!0,B.q,k,A.aM(),w,k,k,k,k,k,2,s.b9f(new A.C(B.fy,A.aK(!1,p,!0,A.p(B.A,C.aWS(m==null?"\ud83d\udc64":A.fqP(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cj,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kp,k,B.a68,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ao,A.A(A.a([A.D(i.aR8("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dCh(r,a0),r.d===B.vD),1),B.ab,A.D(i.aR8("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dCm(r,a0),r.d===B.a36),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hc(D.bHD,D.fla,new C.dCn(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u0(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.f,k,k,k,k,k,2,i.aQw("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bo).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wo(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bz,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bEv],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCo(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.af))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.r,k,k,k,k,k,2,i.aQv("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aYR(r.b.length!==0,B.mb,new C.dCp(r,i,a0),new C.dCq(r,a0),"Upload from gallery","ID photo"))
v.push(i.aYR(r.c.length!==0,D.bxT,new C.dCr(r,i,d,a0),new C.dCs(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Af.a6w("Signature (optional)",t,new C.dCt(a0),new C.dCi(a0,t),new C.dCj(d,t,a0),k))
v.push(B.az)
i=i.a.d.a
t=i?B.bq:B.bo
s=(i?B.bq:B.bo).j(0.28)
s=A.D(A.dT(E.aOT,new C.dCk(d),A.de(k,k,k,k,k,k,k,k,k,t,k,k,B.uS,k,new A.b7(A.m(10),B.Y),new A.az(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.uS,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ug,k,k,k),new C.dCl(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.v0,B.j6,k,k,360)},
$S:199}
C.dCf.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCg.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCh.prototype={
$0(){return this.b.$1(new C.dCe(this.a))},
$S:0}
C.dCe.prototype={
$0(){var w=this.a
w.d=B.vD
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCm.prototype={
$0(){return this.b.$1(new C.dCd(this.a))},
$S:0}
C.dCd.prototype={
$0(){var w=this.a
w.d=B.a36
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCn.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.ws(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dCc(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCc.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gcg(),w.gcc(),w.gcs(),0,0,0,0,0)},
$S:0}
C.dCp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OC(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dCb(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCb.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dCq.prototype={
$0(){return this.b.$1(new C.dCa(this.a))},
$S:0}
C.dCa.prototype={
$0(){return this.a.b=""},
$S:0}
C.dCr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dW:B.c
w=3
return A.b(A.bV(q,null,new C.dC8(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OC(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dC9(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dC8.prototype={
$1(d){var w=null
return A.bm(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alb,w,w,w,w,new C.dC2(d),!1,w,w,w,w,w,w,w,D.fbZ,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.al9,w,w,w,w,new C.dC3(d),!1,w,w,w,w,w,w,w,D.fix,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:29}
C.dC2.prototype={
$0(){A.a5(this.a,!1).N("camera")
return null},
$S:0}
C.dC3.prototype={
$0(){A.a5(this.a,!1).N("gallery")
return null},
$S:0}
C.dC9.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dCs.prototype={
$0(){return this.b.$1(new C.dC7(this.a))},
$S:0}
C.dC7.prototype={
$0(){return this.a.c=""},
$S:0}
C.dCt.prototype={
$0(){return this.a.$1(new C.dC6())},
$S:0}
C.dC6.prototype={
$0(){},
$S:0}
C.dCi.prototype={
$0(){return this.a.$1(new C.dC5(this.b))},
$S:0}
C.dC5.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dCj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agp(u.a,null,null,new C.dC4(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dC4.prototype={
$4(d,e,f,g){this.a.$1(new C.dC1(this.b,d))},
$S:410}
C.dC1.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dCk.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCl.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eNi)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eKe)
return}A.a5(w.c,!1).N(!0)},
$S:0}
C.dCP.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:96}
C.dCQ.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dW:B.c,n=A.m(14),m=A.I((p?B.bq:B.bo).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Af(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bo,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yE(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yE(r).length>0?B.bL:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bo
t=(q?B.bq:B.bo).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.az,A.A(A.a([A.D(A.dT(B.nf,new C.dCN(d),A.de(r,r,r,r,r,r,r,r,r,w,r,r,B.jp,r,new A.b7(A.m(10),B.Y),new A.az(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fiW,new C.dCO(d),A.bk(B.cY,r,r,r,B.c,r,B.jp,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AH,E.XA,r,r,300),B.f,B.K,0,r,r,r,r,r,B.af),r,r,r),r)},
$S:30}
C.dCN.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCO.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dCJ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dCK(r),p=r.a.d.a,o=p?B.dW:B.c,n=A.m(14),m=A.I((p?B.bq:B.bo).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aA,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Af(l.c),s,s,s,s,s,s,D.eZh,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iw((r.a.d.a?B.bq:B.bo).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Zp,"View receipt",new C.dCC(r,d,l))
u=l.x!=null
t=u?B.qQ:B.pu
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bo1,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dCD(r,d,l)),q.$3$icon$label$onTap(B.AY,"Edit",new C.dCE(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mb,"View / download ID",new C.dCF(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bxS,"View / download selfie",new C.dCG(r,d,l)))
if(l.gaDL())p.push(q.$3$icon$label$onTap(A4.a_t,"View / download signature",new C.dCH(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bL,B.e4,"Delete",new C.dCI(r,d,l)))
p.push(B.at)
return A.bm(!0,new A.C(B.uX,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:29}
C.dCK.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aA
else w=d
return A.aK(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1895}
C.dCC.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fBP(w,this.c)},
$S:0}
C.dCD.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Rf(this.c)},
$S:0}
C.dCE.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.CC(this.c)},
$S:0}
C.dCF.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBr(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dCG.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBr(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dCH.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fBU(w,this.c)},
$S:0}
C.dCI.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Nh(0,this.c)},
$S:0}
C.dCR.prototype={
$1(d){return d.x==null},
$S:256}
C.dCS.prototype={
$1(d){return d.x!=null},
$S:256}
C.dCT.prototype={
$2(d,e){return d+e.c},
$S:1896}
C.dCU.prototype={
$0(){return this.a.bwG()},
$S:0}
C.dCL.prototype={
$0(){return this.a.adv(this.b)},
$S:0}
C.flz.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.flA.prototype={
$0(){return B.d.gL(D.a0G)},
$S:z+68}
C.d2E.prototype={
$0(){var w=this.a
return w.m(new C.d2C(w,this.b))},
$S:0}
C.d2C.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d2D.prototype={
$0(){},
$S:0}
C.d2F.prototype={
$0(){var w=this.a.gbV2()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.fny.prototype={
$1(d){return C.fYg(A.a1(d,x.N,x.z))},
$S:z+11}
C.fnz.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fnA.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fAt.prototype={
$1(d){return d.ad()},
$S:z+21}
C.fIx.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fkW.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bLr.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eY(e,v)?v:null},
$S:1897}
C.fB1.prototype={
$1(d){var w=this
return new C.Yo(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d3j.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d3i(w,d))},
$S:z+66}
C.d3i.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d37.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cw(u)?v.r>=J.ac(v.d):w)v.r=J.ac(v.d)-1},
$S:0}
C.d34.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d2G.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d2H.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d38.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d2P.prototype={
$1(d){var w=null,v=A.N(d).ax.a===B.H,u=v?B.dW:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.d2N(d),w,w),A.bJ(B.w_,new C.d2O(d),A.bk(B.mE,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d2N.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d2O.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d2Q.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d35.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d36.prototype={
$0(){return B.d.gL(D.yi)},
$S:z+12}
C.d2L.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxU(0),t=J.ac(w.d)
w=J.ac(w.d)===1?"page":"pages"
return new C.RO(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d2M.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2R.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.XX(v,u,J.ac(w.d),null)},
$S:z+64}
C.d2S.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3h.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.XF(r.y,r.gxU(0),J.ac(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d3f(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ac(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8i(v,e,w,u,t,r.gbMp(),C.hci(r.y.Q),r.gxU(0),s)
w=t}return A.c6(q,new C.d3g(r,e),new A.C(B.XB,w,s))},
$S:1898}
C.d3g.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcZ(t).ay){t=this.b
u=x.cy.a(B.d.gcZ(u.f.f)).guq(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dl()
t=u.a
t.$flags&2&&A.ai(t)
t[11]=0.0013
u.fu(v*3.141592653589793*0.5)
return A.fr(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d3f.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aEP(B.pi,B.is)},
$S:0}
C.d31.prototype={
$0(){var w=this.a
return w.m(new C.d30(w))},
$S:0}
C.d30.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d32.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).N(null)
return null},
$S:0}
C.d2I.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jG.j(0.5),r=x.p,q=A.a([D.faD,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.XU(d,B.dV,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.XU(d,L.aj0,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cw(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cG,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cG,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.XU(d,A_.akb,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.XU(d,B.pB,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.XU(d,B.pB,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eE(u,E.Ab,A.bm(!0,new A.C(A3.AC,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.agt,B.d_,u,new A.b7(t,new A.az(s,1.4,B.r,-1)),u)},
$S:47}
C.d33.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.d2V.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cw(w.d)
return new C.Yq(v,J.cw(w.d),w.r+1,null)},
$S:z+54}
C.d2W.prototype={
$1(d){var w=null
return A.oa(!1,A.eh(w,w,w,E.Ab,new A.k9(this.a,new C.d2U(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:331}
C.d2U.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5P,B.nZ,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:735}
C.d2X.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d2Y.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.d2Z.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ao(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QE(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d2T(s,t))
w=4
return A.b(s.kI(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2T.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3a.prototype={
$1(d){var w=null
return A.oa(!1,A.eh(w,w,w,E.Ab,new A.k9(this.a,new C.d39(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:331}
C.d39.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5P,B.nZ,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:735}
C.d3b.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d3c.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.d3d.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.d3e.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Ao(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kI(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2J.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.beI(B.pi,U.La)},
$S:0}
C.d2K.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aEP(B.pi,U.La)},
$S:0}
C.d53.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d54.prototype={
$1(d){var w=this.a
return w.m(new C.d52(w))},
$S:9}
C.d52.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d55.prototype={
$1(d){var w=this.a
return w.m(new C.d51(w))},
$S:9}
C.d51.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d56.prototype={
$1(d){var w=this.a
return w.m(new C.d50(w))},
$S:9}
C.d50.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d57.prototype={
$0(){var w=this.a
return w.m(new C.d5_(w,this.b))},
$S:0}
C.d5_.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d58.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0x()
A.a5(this.b,!1).N(new A.bmK(w,v))},
$S:0}
C.d3y.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d3x.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Ym(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d3C.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d3B.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b4Z(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hz,v,v,v)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.d3z(d),v,v),A.bJ(B.w_,new C.d3A(d),A.bk(B.mE,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Ab,w,v,v,v,v,D.f9y,v)},
$S:19}
C.d3z.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d3A.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d3D.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d3E.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cd(A.c_(B.bD,r,B.bt,18,14),B.q,t,B.y,t,D.boX,t,t,B.ah)},
$S:329}
C.d3w.prototype={
$0(){return this.a.Pg(0,this.b)},
$S:0}
C.d3v.prototype={
$0(){return this.a.OL(0,this.b)},
$S:0}
C.cCB.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cCC.prototype={
$0(){return B.d.gL(D.yi)},
$S:z+12}
C.cCD.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.bY(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1900}
C.cW2.prototype={
$1(d){return this.a.m(new C.cW1(this.b,this.c))},
$S:9}
C.cW1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cWr.prototype={
$1(d){return this.a.m(new C.cWe())},
$S:2}
C.cWe.prototype={
$0(){},
$S:0}
C.cWs.prototype={
$1(d){return this.a.m(new C.cWd())},
$S:2}
C.cWd.prototype={
$0(){},
$S:0}
C.cWt.prototype={
$0(){var w=this.a
return w.m(new C.cWc(w,this.b))},
$S:0}
C.cWc.prototype={
$0(){var w=this.a
return w.d=w.gnL().F7(this.b.a)},
$S:0}
C.cWu.prototype={
$0(){var w=this.a
return w.m(new C.cWb(w,this.b))},
$S:0}
C.cWb.prototype={
$0(){var w=this.a
return w.d=w.gnL().cCD(this.b)},
$S:0}
C.cWv.prototype={
$1(d){return this.a.m(new C.cWa())},
$S:2}
C.cWa.prototype={
$0(){},
$S:0}
C.cWw.prototype={
$0(){var w=this.a
return w.m(new C.cW9(w,this.b))},
$S:0}
C.cW9.prototype={
$0(){var w=this.a
return w.d=w.gnL().cCI(this.b.a)},
$S:0}
C.cWx.prototype={
$1(d){var w=this.a
return w.m(new C.cWm(w,d))},
$S:6}
C.cWm.prototype={
$0(){var w=this.a
return w.d=w.gnL().cDC(this.b)},
$S:0}
C.cWy.prototype={
$1(d){var w=this.a
return w.d=w.gnL().aBY(d)},
$S:2}
C.cWz.prototype={
$1(d){var w=this.a
return w.d=w.gnL().cCL(d)},
$S:2}
C.cWB.prototype={
$1(d){var w=this.a
return w.d=w.gnL().cDA(d)},
$S:2}
C.cWC.prototype={
$1(d){var w=this.a
return w.m(new C.cWl(w,d))},
$S:9}
C.cWl.prototype={
$0(){var w=this.a
return w.d=w.gnL().cDr(this.b)},
$S:0}
C.cWD.prototype={
$0(){var w=this.a,v=w.gnL(),u=B.a.i(w.gxU(0).a.a),t=B.a.i(w.gaze().a.a)
u=v.b9w(B.a.i(w.gapb().a.a),t,u)
A.a5(this.b,!1).N(u)
return null},
$S:0}
C.dQn.prototype={
$0(){var w=this.a
w.vx()
w.a.bp()
w.a.pt()},
$S:0}
C.dQm.prototype={
$0(){var w=this.a
w.vx()
w.a.bp()
w.a.pt()},
$S:0}
C.dQp.prototype={
$0(){var w=this,v=w.b
if(J.cw(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dQq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQr.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dQl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQo.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dQt.prototype={
$0(){this.a.NN()
return null},
$S:0}
C.dQs.prototype={
$0(){return this.a.DZ(this.b)},
$S:0}
C.dPO.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dd,w,w,!0,w,w,new C.dPM(d),w,w),r=A.bk(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dPN(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dPM.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPN.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPP.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cD6(this.b)},
$S:0}
C.dPJ.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aQL(w.b,w.c,w.d)},
$S:8}
C.dPh.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dPi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.FT(t.a.c),$async$$0)
case 2:s=r.qZ(q.dH(e,new C.dPu(t)))
if(s!=null&&t.c!=null)t.m(new C.dPv(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPu.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPx.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPI.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cDU(C.hcs(w),w)},
$S:0}
C.dPG.prototype={
$1(d){return new A.e1(new C.dPF(this.a,this.b),null)},
$S:20}
C.dPF.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dW:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.akP,v,v,v,p>0?new C.dPB(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.alo,v,v,v,new C.dPC(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dPD(d),v,v),A.bJ(B.oU,new C.dPE(d),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:159}
C.dPB.prototype={
$0(){return this.b.$1(new C.dPA(this.a))},
$S:0}
C.dPA.prototype={
$0(){return--this.a.a},
$S:0}
C.dPC.prototype={
$0(){return this.b.$1(new C.dPz(this.a))},
$S:0}
C.dPz.prototype={
$0(){return++this.a.a},
$S:0}
C.dPD.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPE.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPH.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cDH(this.a.a)
w.r.a8(0)},
$S:0}
C.dP5.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agw(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h6f(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dP6.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aBV(w)},
$S:0}
C.dPR.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.abY(this.b,w,this.c,null)},
$S:z+24}
C.dPL.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dW:B.c,t=A.m(20),s=A.W(B.l9,B.aU,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(D.fk0,new C.dPK(d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dPK.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dP7.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dP8.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dP9.prototype={
$1(d){return d.a},
$S:z+7}
C.dPa.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aBV(w)},
$S:0}
C.dPe.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agw(q)
w=A.T(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dPc(r),w),w.k("H.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h6f(v.e,null,r,v.f,v.r,new C.dPd(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dPd.prototype={
$0(){return this.a.a8H(this.b)},
$S:0}
C.dPc.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dPf.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hU>")
w=A.B(new A.J(w,new C.dPb(this.b),v),v.k("aj.E"))
u.d=t.aBV(w)},
$S:0}
C.dPb.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dPQ.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dPr.prototype={
$1(d){return d.length!==0},
$S:3}
C.dPs.prototype={
$1(d){var w=this
return new A.e1(new C.dPq(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dPq.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dW:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dPm(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.T,!1,v,!0,B.q,v,A.aM(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.df),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lR,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dPn(d),v,v),A.bJ(B.IH,new C.dPo(t,u,o,e),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.f7M,new C.dPp(t,u,o,d),A.bk(B.aU,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:159}
C.dPm.prototype={
$1(d){var w=null
return A.dN(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bL9,w,w,w,new C.dPl(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1901}
C.dPl.prototype={
$0(){return this.a.$1(new C.dPj(this.b,this.c))},
$S:0}
C.dPj.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dPn.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPo.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dPk(w.c,u))
v.bM(0,B.c3)}},
$S:0}
C.dPk.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dPp.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).N(!0)},
$S:0}
C.dPt.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cEl(this.b,D.tn,C.FR(v,w.a.c))},
$S:0}
C.dPY.prototype={
$1(d){return d.as},
$S:z+1}
C.dPZ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.dQ_.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i06(v)
return w.UT(v==null?null:v.a)},
$S:0}
C.dQ0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hDE(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aP(1/0,e.a,e.b)
s=A.aP(1/0,e.c,e.d)
l.cmH(new A.at(u,t),v.gbfy(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cJ1:D.cHu
q=A.I(s?B.dq:D.b7W,B.r,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bbD(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.W,m,B.aa,B.q,A.a([o,A.bZ(0,A.ua(new A.Q(n,n,n,n),new A.a6(u,t,new C.bcv(l.d,v,l.f,w,new C.dPU(l),l.gc6U(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.btK(s,new C.dPV(l,e),new C.dPW(l,e),new C.dPX(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.b1,B.b6,B.x,r,m,m),B.n),m,m,m,Q.afy,m,m,m,m)},
$S:203}
C.dPU.prototype={
$1(d){var w=this.a
w.m(new C.dPS(w,d))},
$S:2}
C.dPS.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dPV.prototype={
$0(){var w=this.b
return this.a.b7d(1.25,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dPW.prototype={
$0(){var w=this.b
return this.a.b7d(0.8,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dPX.prototype={
$0(){var w=this,v=w.b
return w.a.aQL(new A.at(A.aP(1/0,v.a,v.b),A.aP(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbfy())},
$S:0}
C.dQ1.prototype={
$0(){var w=this.a
return w.m(new C.dPT(w))},
$S:0}
C.dPT.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dPg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fA(s.c)),$async$$0)
case 2:t.xo("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3I.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bgc(u,C.hgw(v.c,u),new C.d3H(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d3H.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d3J.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjx(d.d,d.c,u.f.t(0,d.a),new C.d3G(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d3G.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.flD.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.T(v)
return A.qZ(new A.cQ(new A.a2(v,new C.flE(d),w.k("a2<1>")),new C.flF(),w.k("cQ<1,n>")))},
$S:z+20}
C.flE.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.flF.prototype={
$1(d){return d.a},
$S:z+7}
C.flB.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.flC.prototype={
$1(d){return d.b},
$S:z+7}
C.flI.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.T(v)
return A.qZ(new A.cQ(new A.a2(v,new C.flJ(d),w.k("a2<1>")),new C.flK(),w.k("cQ<1,n>")))},
$S:z+20}
C.flJ.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.flK.prototype={
$1(d){return d.a},
$S:z+7}
C.flG.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ah(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.flH.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d3L.prototype={
$0(){return this.a},
$S:z+32}
C.d41.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ah(0,d)},
$S:266}
C.d3U.prototype={
$2(d,e){var w=this.a.ci(0,d,new C.d3V()),v=J.a8(w)
if(!v.t(w,e))v.J(w,e)},
$S:125}
C.d3V.prototype={
$0(){return A.a([],x.s)},
$S:736}
C.d3T.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eY(w,e)
return w===!0},
$S:305}
C.d3M.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d3S.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d3R.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.BF:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.BF:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1903}
C.d3N.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d3W.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
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
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.BF:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b8(w,new C.d3X(r)))w.push(r)}}B.d.bn(w,new C.d3Y(a8))
B.d.b1(w,new C.d3Z())
q=C.hDD(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.epE],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.F
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.K)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gL(k)+B.d.gam(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bmu(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1904}
C.d3X.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d3Y.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d3Z.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d4_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cH(0,0,B.qe)+88-w.gL(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:653}
C.d40.prototype={
$1(d){return 16+d*156},
$S:252}
C.d3K.prototype={
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
t.n(0,d,new C.F8(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.F8(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.F8(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jl(d,new A.u(e+t,w),s,s.length))}},
$S:197}
C.d3O.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHk(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:125}
C.d3P.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d3Q.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:737}
C.d42.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:737}
C.d43.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:379}
C.d44.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:179}
C.d45.prototype={
$1(d){return d>=0.5},
$S:121}
C.f4r.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.ho(A.aK(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1906}
C.eGL.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.C(B.nG,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eV2,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LH,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGK(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eGK.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.djT.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.djS.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nc,B.L,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.djQ(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m2,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.djR(d),w,w)],x.p),B.ba,B.EH,w,u,D.bqc,w,D.bs7,new A.b7(v,B.Y),w,w)},
$S:19}
C.djQ.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.djR.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dk1.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dk2.prototype={
$1(d){var w=this.a
return w.m(new C.dk0(w,d))},
$S:z+37}
C.dk0.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dk3.prototype={
$1(d){var w=null
return A.q4(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dk6.prototype={
$1(d){var w=this.a
return w.m(new C.dk_(w,d))},
$S:32}
C.dk_.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dk5.prototype={
$1(d){var w=null
return A.q4(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dk7.prototype={
$1(d){var w=this.a
return w.m(new C.djZ(w,d))},
$S:32}
C.djZ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dk8.prototype={
$0(){var w=this.a
return w.m(new C.djY(w))},
$S:0}
C.djY.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dk9.prototype={
$0(){var w=this.a
return w.m(new C.djX(w))},
$S:0}
C.djX.prototype={
$0(){return++this.a.at},
$S:0}
C.dka.prototype={
$0(){var w=this.a
return w.m(new C.djW(w))},
$S:0}
C.djW.prototype={
$0(){return--this.a.ax},
$S:0}
C.dkb.prototype={
$0(){var w=this.a
return w.m(new C.djV(w))},
$S:0}
C.djV.prototype={
$0(){return++this.a.ax},
$S:0}
C.dkc.prototype={
$1(d){var w=this.a
return w.m(new C.djU(w,d))},
$S:9}
C.djU.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dk4.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dkd.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dW:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.dZ:B.bX).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bq:B.bo
t=A.W(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bq:B.bo
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.dg(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jp,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dke(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
$S:z+39}
C.dke.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dkn.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.c5R.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:94}
C.c5Y.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c5Z.prototype={
$2(d,e){var w=J.b6(e,new C.c5X(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c5X.prototype={
$1(d){return d.ad()},
$S:z+21}
C.c5T.prototype={
$1(d){return C.ajl(A.a1(d,x.N,x.z))},
$S:z+8}
C.c5U.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c5V.prototype={
$1(d){return C.fYg(A.a1(d,x.N,x.z))},
$S:z+11}
C.c5W.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c62.prototype={
$1(d){return new A.aEq(d.f.length,d.a,d.b)},
$S:z+43}
C.c63.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:564}
C.c6_.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c60.prototype={
$1(d){return d.cDj(C.FR(d,this.a))},
$S:z+44}
C.dQa.prototype={
$1(d){return C.tF(d,this.a.a.c)},
$S:z+2}
C.dQb.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dQf.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dQg.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dQ7.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYl(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xV("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oT(r.c,r.e),$async$$0)
case 4:s.xV(p)
w=5
return A.b(s.IX(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYl(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xV("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oT(r.c,r.e),$async$$0)
case 4:s.xV(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.U9(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xV("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xV("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xV("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.IX(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a9(j)
o=r.a
if(o.c==null){w=1
break}o.xV(B.a.e8(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dQe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYk(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xV("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).ce(A.ej(new C.dQd(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oT(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQd.prototype={
$1(d){var w=this.b
return new C.Zk(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dQc.prototype={
$1(d){return D.fHq},
$S:z+46}
C.dQi.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQj.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dQh(w,d)
return new A.C(B.db,new C.bcz(this.b,d.c,d.a,w,null),null)},
$S:1907}
C.dQh.prototype={
$0(){return this.a.WA(this.b.b)},
$S:0}
C.dQ2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQ3.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dQ4.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dQ5.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dQ6.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQk.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.ds(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:180}
C.dBU.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dBV.prototype={
$0(){return B.d.gL(D.a21)},
$S:z+48}
C.dBW.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cP_,44),w,w,w),w,w,new C.bhk(u,t,v,w),B.au)},
$S:67}
C.fBu.prototype={
$1(d){return A.oD(new C.fBt(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:137}
C.fBt.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dW:B.c,p=A.a([new A.ad(0,B.G,B.w.j(r?0.35:0.08),B.r8,24)],x.V),o=r?B.dZ:B.bX
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aU.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bFK,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a7(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aA,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.agx,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bo,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ib(!0,t,e,B.y,D.eIr,new C.fBs(this.b,s),20,B.ag7,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.ku,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:109}
C.fBs.prototype={
$2(d,e){var w=null,v=D.a21[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bX,B.r,1),q=A.a([new A.ad(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a5a(v.a,!0,w),1),n=s?B.jl:B.iK,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aA,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ex(A.bv(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l5,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fBr(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)},
$S:78}
C.fBr.prototype={
$0(){A.a5(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cdv.prototype={
$0(){return this.a.aey(this.b)},
$S:0}
C.fAR.prototype={
$1(d){return D.fDI},
$S:z+74}
C.fIj.prototype={
$1(d){var w=this
return new C.a02(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fAW.prototype={
$1(d){return new C.XZ(this.a,null)},
$S:z+51}
C.fAV.prototype={
$1(d){return D.fEH},
$S:z+52}
C.cWP.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cWO(w,d))},
$S:32}
C.cWO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWR.prototype={
$1(d){return this.a.Jw()},
$S:2}
C.cWS.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWL.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWM.prototype={
$1(d){return this.a.Jw()},
$S:2}
C.cWN.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuo.prototype={
$0(){},
$S:0}
C.cuu.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuv.prototype={
$0(){return this.a.aMk(-1)},
$S:0}
C.cuw.prototype={
$1(d){return this.a.m(new C.cut())},
$S:2}
C.cut.prototype={
$0(){},
$S:0}
C.cux.prototype={
$0(){return this.a.aMk(1)},
$S:0}
C.cuy.prototype={
$1(d){return this.a.m(new C.cus())},
$S:2}
C.cus.prototype={
$0(){},
$S:0}
C.cuz.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aU.j(0.2)
if(s)v=B.aU
else v=this.b.a?B.dZ:B.bX
return A.u_(u,u,B.aZ,r,u,new C.cur(t,d),B.AI,s,w,u,new A.az(v,1,B.r,-1),B.c7)},
$S:1908}
C.cur.prototype={
$1(d){var w=this.a
return w.m(new C.cup(w,this.b))},
$S:9}
C.cup.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cuA.prototype={
$1(d){return this.a.m(new C.cuq())},
$S:2}
C.cuq.prototype={
$0(){},
$S:0}
C.cuB.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f3U.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).N(w)},
$S:2}
C.f3V.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f3W.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).N(w)},
$S:0}
C.f3S.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbvP()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.bs6,new A.et(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btz(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f3T.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dI.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aU,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aU],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ex(D.e0T,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d8(-1.2+t,-0.5),new A.d8(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
$S:138}
C.fzC.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eDV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDM.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eDN.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eDT.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e1(new C.eDS(w,this.b),null)},
$S:20}
C.eDS.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dW:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.C(B.agr,A.v(A.a([s,B.ao,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h34(new C.eDP(r,e),r.a),B.az,A.A(A.a([A.D(A.dT(B.dd,new C.eDQ(d),w),1),B.aw,A.D(A.bJ(B.T1,new C.eDR(r,d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d_,w,new A.b7(t,B.Y),w)},
$S:97}
C.eDP.prototype={
$1(d){return this.b.$1(new C.eDO(this.a,d))},
$S:32}
C.eDO.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eDQ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eDR.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.eDU.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.RU(this.b)},
$S:0}
C.eDH.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b94(w)},
$S:0}
C.eDL.prototype={
$1(d){return this.bi0(d)},
bi0(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Kx(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iK(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eDK.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eDJ(this.b),v),v.k("H.E"))
u.d=t.b94(w)},
$S:0}
C.eDJ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eDW.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.eDX.prototype={
$1(d){return this.a.bzU(d,this.b)},
$S:z+55}
C.eDI.prototype={
$0(){return this.a.a8G(this.b)},
$S:0}
C.fIb.prototype={
$1(d){return new C.aci(this.a,this.b,this.c,null)},
$S:z+56}
C.eDZ.prototype={
$0(){return this.a.Zc(this.b)},
$S:0}
C.eE_.prototype={
$0(){return this.a.Pc(this.b)},
$S:0}
C.eE0.prototype={
$0(){return this.a.DU(this.b)},
$S:0}
C.eE1.prototype={
$0(){return this.a.Zd(this.b)},
$S:0}
C.eDY.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eDC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDD.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eDE.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eDG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eDF(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eDF.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eEo.prototype={
$2(d,e){return d+e.gwB()},
$S:z+59}
C.eEk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eE5.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dW:B.c,s=A.m(24),r=A.p(v,D.bG9,B.f,v,v,new A.o(B.aC.j(u?0.18:0.08),v,A.I(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aA
u=u?B.dZ:B.bX
w=x.p
return A.eE(v,t,new A.C(B.xh,A.v(A.a([r,B.aO,q,B.P,p,B.d5,A.A(A.a([A.D(A.dT(B.nf,new C.eE3(d),A.de(v,v,v,v,v,v,v,v,v,o,v,v,B.f3,v,new A.b7(A.m(14),B.Y),new A.az(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.fnD,new C.eE4(d),A.bk(B.aC,v,v,v,v,v,B.f3,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d_,v,new A.b7(s,B.Y),v)},
$S:47}
C.eE3.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eE4.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eEe.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dW:B.c,i=A.m(28),h=A.a([new A.ad(0,B.G,B.w.j(k?0.35:0.08),B.fK,28)],x.V),g=k?D.cVj:B.a1s,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.az,D.eCH,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cs,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ax,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.agu,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b2s(B.b4,B.iP,new C.eEb(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b2s(B.cv,M.xY,new C.eEc(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aC.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aC.j(0.28),B.r,1)
o=A.p(m,D.bFy,B.f,m,m,new A.o(B.aC.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aA,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.C(B.uZ,A.p(m,A.v(A.a([g,new A.C(B.ags,A.v(A.a([w,B.S,u,B.bv,t,B.S,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.eo,k?B.bq:B.bo,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eEd(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:29}
C.eEb.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v7("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEc.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v7("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEd.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.N4(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eE9.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dW:B.c,m=A.m(24),l=A.a([new A.ad(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bX
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bo
u=A.bv(w,new A.a6(48,48,C.aOz(!0,A.m(12),48,N.Mh,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Af(v.gwB())
s=x.p
r=this.a
return A.bm(!0,new A.C(B.uZ,A.p(q,A.v(A.a([B.S,k,new A.C(D.agp,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bo,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Ao,r.ch_(B.tF,B.aU,new C.eE7(d),p,"QR code or backup file","Transfer project"),r.b_w(!0,B.e4,B.aC,new C.eE8(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:29}
C.eE7.prototype={
$0(){A.a5(this.a,!1).N("transfer")
return null},
$S:0}
C.eE8.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
C.eEa.prototype={
$1(d){return this.bi1(d)},
bi1(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Kx(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vl(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eEr.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eEq(w))},
$S:0}
C.eEq.prototype={
$0(){return this.a.r++},
$S:0}
C.eEs.prototype={
$0(){var w=this.a
return w.m(new C.eEp(w))},
$S:0}
C.eEp.prototype={
$0(){return this.a.r++},
$S:0}
C.eE2.prototype={
$0(){var w=this.a.c
w.toString
return A.iK(w,null)},
$S:0}
C.eE6.prototype={
$0(){return this.a.cao(this.b)},
$S:0}
C.eEn.prototype={
$0(){var w=this.a
return w.m(new C.eEm(w,this.b))},
$S:0}
C.eEm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eEh.prototype={
$0(){return this.a.v7("scan")},
$S:0}
C.eEi.prototype={
$0(){return this.a.v7("file")},
$S:0}
C.eEj.prototype={
$1(d){return this.a.ch0(d,this.b)},
$S:z+60}
C.eEg.prototype={
$0(){return this.a.DY(this.b)},
$S:0}
C.eEf.prototype={
$0(){return this.a.ZI(this.b,this.c)},
$S:0}
C.ctQ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.ctP.prototype={
$1(d){return d.ad()},
$S:z+62}
C.ctN.prototype={
$1(d){return C.hmj(A.a1(d,x.N,x.z))},
$S:z+63}
C.ctO.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fkO.prototype={
$1(d){return d.y===D.kd},
$S:z+2}
C.fIF.prototype={
$1(d){return C.bzm(d,this.a)},
$S:z+2}
C.fjn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bLw.prototype={
$1(d){return!d.as},
$S:z+1}
C.bLv.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bLs.prototype={
$1(d){return C.fYh(A.a1(d,x.N,x.z))},
$S:z+14}
C.bLt.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bLu.prototype={
$1(d){return J.k(d)},
$S:17}
C.fbq.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f78.prototype={
$1(d){return C.fOU(A.a1(d,x.N,x.z))},
$S:z+67}
C.f79.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f7a.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fAI.prototype={
$1(d){return J.k(d)},
$S:17}
C.fAJ.prototype={
$1(d){return d.a},
$S:z+69}
C.fAK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAL.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fAM.prototype={
$1(d){return d.RU(null).ad()},
$S:z+70}
C.fID.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.flf.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fnE.prototype={
$1(d){return C.ajl(A.a1(d,x.N,x.z))},
$S:z+8}
C.fnF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fnG.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fnH.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fnI.prototype={
$1(d){return C.tF(d,this.a)},
$S:z+2}
C.fAv.prototype={
$1(d){return C.tF(d,this.a)},
$S:z+2}
C.fIy.prototype={
$1(d){return C.ajl(A.a1(d,x.N,x.z))},
$S:z+8}
C.fIz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fIA.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fkX.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fkY.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fIJ.prototype={
$1(d){return!d.as},
$S:z+1}
C.fkx.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fky.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fkz.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fIk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.foq.prototype={
$1(d){return d.Q},
$S:z+72}
C.fAr.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fnB.prototype={
$1(d){return C.ajl(A.a1(d,x.N,x.z))},
$S:z+8}
C.fnC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fnD.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fAn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f7F.prototype={
$1(d){return d.length!==0},
$S:3}
C.f7G.prototype={
$1(d){return C.fYh(A.a1(d,x.N,x.z))},
$S:z+14}
C.f7H.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f7I.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f7J.prototype={
$1(d){return d.length!==0},
$S:3}
C.f7W.prototype={
$2(d,e){return d.eT(new C.f7X(e))},
$S:1909}
C.f7X.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1910}
C.f7T.prototype={
$1(d){return C.hIe(d,this.a)},
$S:z+73}
C.f7U.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f7V.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fc4.prototype={
$1(d){return d.a},
$S:z+49}
C.fc5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fc6.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fe8.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fiH.prototype={
$1(d){return C.h8w(d,C.FR(d,this.a))},
$S:z+5}
C.fiI.prototype={
$1(d){return C.h8x(d,C.FR(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJG.prototype
w.bs4=w.q
w=C.aLP.prototype
w.bup=w.q
w=C.aLQ.prototype
w.buq=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBc.prototype,"gcdY","cdZ",25)
var s
w(s=C.ayf.prototype,"gc7_","c70",42)
v(s,"gaKB","MD",0)
v(s,"gcm1","An",0)
v(s,"gbHw","Ni",0)
v(s,"gczH","xW",0)
v(s,"gcfY","a_p",0)
v(s,"gbCZ","N0",0)
v(s,"gbHX","W1",0)
w(s,"gbMp","bMq",71)
v(s,"gbxu","zq",0)
v(C.ayg.prototype,"gczD","EP",0)
v(s=C.aBN.prototype,"gaea","vm",0)
v(s,"gc9E","Zz",0)
v(s,"gaOB","Hn",0)
v(s=C.aBK.prototype,"gcvX","a1t",0)
v(s,"gaea","vm",0)
v(s,"gck7","a04",0)
v(s,"gcaB","ZN",0)
w(s,"gc6U","c6V",30)
v(s,"gbHO","Hs",0)
v(s,"gcwU","cwV",3)
v(s,"gbYL","XG",0)
w(s,"gc5q","c5r",23)
v(s,"gc9o","c9p",3)
v(s=C.aAb.prototype,"gc3f","OM",0)
v(s,"gc3h","c3i",3)
v(s,"gbEu","a8i",0)
v(s=C.aBM.prototype,"gbKX","Ww",0)
v(s,"gbV9","X9",0)
v(s,"gcqk","a0V",0)
v(s,"gcmC","a0w",0)
v(C.aBL.prototype,"gcmj","afU",0)
v(C.aqY.prototype,"gc5o","Zb",0)
v(C.ax1.prototype,"ga1d","Jw",3)
v(C.ax0.prototype,"ga1d","Jw",3)
v(C.avL.prototype,"ga1d","Jw",3)
v(s=C.aDh.prototype,"gaZU","PH",0)
v(s,"gbwh","UN",0)
v(s,"gcap","caq",3)
w(C.aDg.prototype,"gc6e","c6f",57)
u(C.aDi.prototype,"gaOv",0,0,null,["$1","$0"],["Hm","bFL"],58,0,0)
t(C,"hfK","hRP",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.amR,C.tX,C.n2,C.GX,C.adu,C.Jd,C.tY,C.Jl,C.F8,C.bcx,C.aHk,C.ao0,C.d46,C.ls,C.aRr,C.aRq,C.aPw,C.tt,C.qJ,C.lb,C.hU,C.ku,C.aFk])
u(A.hS,[C.fsh,C.fsg,C.fsi,C.fBn,C.fhD,C.fhE,C.fhJ,C.fq0,C.fq_,C.fpZ,C.c_j,C.fBT,C.fBL,C.fBX,C.fl4,C.dCA,C.dCv,C.dCw,C.dC8,C.dC4,C.dCP,C.dCQ,C.dCJ,C.dCK,C.dCR,C.dCS,C.flz,C.fny,C.fnz,C.fAt,C.fIx,C.fkW,C.fB1,C.d3j,C.d2G,C.d2P,C.d35,C.d2L,C.d2R,C.d2I,C.d2V,C.d2W,C.d2U,C.d3a,C.d39,C.d54,C.d55,C.d56,C.d3x,C.d3C,C.d3B,C.cCB,C.cCD,C.cW2,C.cWr,C.cWs,C.cWv,C.cWx,C.cWy,C.cWz,C.cWB,C.cWC,C.dQo,C.dPO,C.dPJ,C.dPh,C.dPu,C.dPx,C.dPG,C.dP5,C.dPR,C.dPL,C.dP7,C.dP8,C.dP9,C.dPe,C.dPc,C.dPb,C.dPr,C.dPs,C.dPm,C.dPY,C.dPU,C.d3I,C.d3J,C.flD,C.flE,C.flF,C.flB,C.flC,C.flI,C.flJ,C.flK,C.flG,C.flH,C.d41,C.d3S,C.d3N,C.d3X,C.d3Y,C.d40,C.d3P,C.d43,C.d44,C.d45,C.f4r,C.eGL,C.djS,C.dk1,C.dk2,C.dk3,C.dk6,C.dk5,C.dk7,C.dkc,C.dkd,C.c5Y,C.c5X,C.c5T,C.c5U,C.c5V,C.c5W,C.c62,C.c6_,C.c60,C.dQa,C.dQd,C.dQc,C.dQj,C.dQk,C.dBU,C.fBu,C.fAR,C.fIj,C.fAW,C.fAV,C.cWQ,C.cWR,C.cWM,C.cuw,C.cuy,C.cuz,C.cur,C.cuA,C.f3U,C.fzC,C.eDT,C.eDP,C.eDL,C.eDJ,C.eDX,C.fIb,C.eE5,C.eEe,C.eE9,C.eEa,C.eEj,C.ctP,C.ctN,C.ctO,C.fkO,C.fIF,C.fjn,C.bLw,C.bLv,C.bLs,C.bLt,C.bLu,C.f78,C.f79,C.fAI,C.fAJ,C.fAK,C.fAL,C.fAM,C.fID,C.flf,C.fnE,C.fnF,C.fnH,C.fnI,C.fAv,C.fIy,C.fIz,C.fIA,C.fkX,C.fkY,C.fIJ,C.fkx,C.fky,C.fIk,C.foq,C.fAr,C.fnB,C.fnC,C.fAn,C.f7F,C.f7G,C.f7H,C.f7I,C.f7J,C.f7X,C.f7T,C.f7U,C.fc4,C.fc5,C.fe8,C.fiH,C.fiI])
u(A.au,[C.aWT,C.ajj,C.aSG,C.XF,C.b8i,C.bcv,C.bgc,C.btK,C.bjx,C.abX,C.bgb,C.abW,C.bga,C.aAc,C.aGn,C.abY,C.J9,C.bcw,C.abe,C.bcu,C.bcz,C.aWR,C.aqY,C.aci])
u(A.mC,[C.b8U,C.ba4,C.b9W,C.aFf,C.bff,C.bcy,C.bbD,C.bhk,C.btz])
u(A.j2,[C.fBQ,C.fBR,C.fBS,C.fBJ,C.fBK,C.fBV,C.fBW,C.dCM,C.dCy,C.dCB,C.dCf,C.dCg,C.dCh,C.dCe,C.dCm,C.dCd,C.dCn,C.dCo,C.dCc,C.dCp,C.dCb,C.dCq,C.dCa,C.dCr,C.dC2,C.dC3,C.dC9,C.dCs,C.dC7,C.dCt,C.dC6,C.dCi,C.dC5,C.dCj,C.dC1,C.dCk,C.dCl,C.dCN,C.dCO,C.dCC,C.dCD,C.dCE,C.dCF,C.dCG,C.dCH,C.dCI,C.dCU,C.dCL,C.flA,C.d2E,C.d2C,C.d2D,C.d2F,C.d3i,C.d37,C.d34,C.d2H,C.d38,C.d2N,C.d2O,C.d2Q,C.d36,C.d2M,C.d2S,C.d3f,C.d31,C.d30,C.d32,C.d33,C.d2X,C.d2Z,C.d3_,C.d2T,C.d3b,C.d3e,C.d2J,C.d2K,C.d53,C.d52,C.d51,C.d50,C.d57,C.d5_,C.d58,C.d3y,C.d3z,C.d3A,C.d3D,C.d3w,C.d3v,C.cCC,C.cW1,C.cWe,C.cWd,C.cWt,C.cWc,C.cWu,C.cWb,C.cWa,C.cWw,C.cW9,C.cWm,C.cWl,C.cWD,C.dQn,C.dQm,C.dQp,C.dQq,C.dQr,C.dQl,C.dQt,C.dQs,C.dPM,C.dPN,C.dPP,C.dPi,C.dPw,C.dPv,C.dPy,C.dPI,C.dPB,C.dPA,C.dPC,C.dPz,C.dPD,C.dPE,C.dPH,C.dP6,C.dPK,C.dPa,C.dPd,C.dPf,C.dPQ,C.dPl,C.dPj,C.dPn,C.dPo,C.dPk,C.dPp,C.dPt,C.dPZ,C.dQ_,C.dPS,C.dPV,C.dPW,C.dPX,C.dQ1,C.dPT,C.dPg,C.d3H,C.d3G,C.d3L,C.d3V,C.d3M,C.eGK,C.djT,C.djQ,C.djR,C.dk0,C.dk_,C.djZ,C.dk8,C.djY,C.dk9,C.djX,C.dka,C.djW,C.dkb,C.djV,C.djU,C.dk4,C.dke,C.dkn,C.dQb,C.dQf,C.dQg,C.dQ7,C.dQ8,C.dQ9,C.dQe,C.dQi,C.dQh,C.dQ2,C.dQ3,C.dQ4,C.dQ5,C.dQ6,C.dBV,C.fBr,C.cdv,C.cWP,C.cWO,C.cWS,C.cWL,C.cWN,C.cuo,C.cuu,C.cuv,C.cut,C.cux,C.cus,C.cup,C.cuq,C.cuB,C.f3V,C.f3W,C.eDV,C.eDM,C.eDN,C.eDO,C.eDQ,C.eDR,C.eDU,C.eDH,C.eDK,C.eDW,C.eDI,C.eDZ,C.eE_,C.eE0,C.eE1,C.eDY,C.eDC,C.eDD,C.eDE,C.eDG,C.eDF,C.eEk,C.eEl,C.eE3,C.eE4,C.eEb,C.eEc,C.eEd,C.eE7,C.eE8,C.eEr,C.eEq,C.eEs,C.eEp,C.eE2,C.eE6,C.eEn,C.eEm,C.eEh,C.eEi,C.eEg,C.eEf])
u(A.ag,[C.amY,C.RO,C.Ym,C.Yq,C.Yo,C.XX,C.ao3,C.anY,C.Z_,C.ao1,C.Zk,C.Zl,C.a5a,C.XZ,C.XY,C.Xw,C.a02,C.EW,C.avE,C.aqX,C.aqR,C.aqW,C.Nh])
u(A.ah,[C.aBc,C.bcs,C.ayf,C.bcN,C.ayg,C.ba2,C.aBN,C.aBK,C.aAb,C.aBM,C.aBL,C.bhE,C.aJG,C.ax1,C.ax0,C.avL,C.btC,C.aLP,C.aLQ,C.aDh,C.bj0,C.aDg,C.bvn])
u(A.kc,[C.dCx,C.dCz,C.dCu,C.dCT,C.fnA,C.bLr,C.d3h,C.d3g,C.d2Y,C.d3c,C.d3d,C.d3E,C.dPF,C.dPq,C.dQ0,C.d3U,C.d3T,C.d3R,C.d3W,C.d3Z,C.d4_,C.d3K,C.d3O,C.d3Q,C.d42,C.c5R,C.c5Z,C.c63,C.dBW,C.fBt,C.fBs,C.f3S,C.f3T,C.eDS,C.eEo,C.ctQ,C.fbq,C.f7a,C.fnG,C.fkz,C.fnD,C.f7W,C.f7V,C.fc6])
t(C.bhl,C.aJG)
u(A.m_,[C.aai,C.aI1,C.GY,C.ajk,C.ctR,C.ctS])
t(C.btA,C.aLP)
t(C.btB,C.aLQ)
t(C.aDi,C.bvn)
t(C.b6L,A.b6A)
t(C.btD,A.a4Q)
t(C.b6K,C.btD)
w(C.aJG,A.eR)
w(C.aLP,A.c8)
w(C.aLQ,A.c8)
v(C.bvn,A.eu)
v(C.btD,A.iY)})()
A.jR(b.typeUniverse,JSON.parse('{"aWT":{"au":[],"r":[]},"b8U":{"aB":[]},"amY":{"ag":[],"r":[]},"aBc":{"ah":["amY"]},"RO":{"ag":[],"r":[]},"ajj":{"au":[],"r":[]},"aSG":{"au":[],"r":[]},"bcs":{"ah":["RO"]},"Ym":{"ag":[],"r":[]},"Yq":{"ag":[],"r":[]},"Yo":{"ag":[],"r":[]},"XX":{"ag":[],"r":[]},"ayf":{"ah":["Ym"]},"bcN":{"ah":["Yq"]},"ayg":{"ah":["Yo"]},"XF":{"au":[],"r":[]},"ba4":{"aB":[]},"b9W":{"aB":[]},"ba2":{"ah":["XX"]},"aFf":{"aB":[]},"bff":{"aB":[]},"b8i":{"au":[],"r":[]},"ao3":{"ag":[],"r":[]},"anY":{"ag":[],"r":[]},"Z_":{"ag":[],"r":[]},"abY":{"au":[],"r":[]},"aBN":{"ah":["ao3"]},"aBK":{"ah":["anY"]},"bcv":{"au":[],"r":[]},"bcy":{"aB":[]},"bgc":{"au":[],"r":[]},"bbD":{"aB":[]},"btK":{"au":[],"r":[]},"bjx":{"au":[],"r":[]},"aAb":{"ah":["Z_"]},"abX":{"au":[],"r":[]},"bgb":{"au":[],"r":[]},"abW":{"au":[],"r":[]},"bga":{"au":[],"r":[]},"aAc":{"au":[],"r":[]},"aGn":{"au":[],"r":[]},"J9":{"au":[],"r":[]},"ao1":{"ag":[],"r":[]},"Zk":{"ag":[],"r":[]},"Zl":{"ag":[],"r":[]},"aBM":{"ah":["ao1"]},"bcw":{"au":[],"r":[]},"abe":{"au":[],"r":[]},"bcu":{"au":[],"r":[]},"bcz":{"au":[],"r":[]},"aBL":{"ah":["Zk"]},"bhE":{"ah":["Zl"]},"aWR":{"au":[],"r":[]},"a5a":{"ag":[],"r":[]},"bhl":{"ah":["a5a"]},"bhk":{"aB":[]},"aqY":{"au":[],"r":[]},"XZ":{"ag":[],"r":[]},"XY":{"ag":[],"r":[]},"Xw":{"ag":[],"r":[]},"a02":{"ag":[],"r":[]},"ax1":{"ah":["XZ"]},"ax0":{"ah":["XY"]},"avL":{"ah":["Xw"]},"btC":{"ah":["a02"]},"EW":{"ag":[],"r":[]},"avE":{"ag":[],"r":[]},"btA":{"ah":["EW"]},"btB":{"ah":["avE"]},"btz":{"aB":[]},"aqX":{"ag":[],"r":[]},"aDh":{"ah":["aqX"]},"aci":{"au":[],"r":[]},"aqR":{"ag":[],"r":[]},"aqW":{"ag":[],"r":[]},"bj0":{"ah":["aqR"]},"aDg":{"ah":["aqW"]},"Nh":{"ag":[],"r":[]},"aDi":{"ah":["Nh"],"eu":[]},"b6K":{"iY":[],"fd":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPw"),Q:w("qJ"),n:w("bq<n,n>"),c5:w("aRq"),dY:w("aRr"),d:w("eO<n?>"),e:w("GX"),B:w("n2"),P:w("hU"),k:w("ku"),x:w("ay<~>"),f5:w("P<a22>"),V:w("P<ad>"),t:w("P<qJ>"),O:w("P<w>"),ac:w("P<eO<n?>>"),I:w("P<n2>"),u:w("P<hU>"),_:w("P<ku>"),cl:w("P<ay<ak<a4<n,@>>>>"),R:w("P<n4>"),cq:w("P<ak<+(O,O)>>"),ez:w("P<a4<n,aC>>"),gE:w("P<a4<n,n>>"),c7:w("P<a4<n,@>>"),fD:w("P<mh>"),bp:w("P<o4>"),g:w("P<u>"),v:w("P<hm>"),L:w("P<+(n,n)>"),G:w("P<+(O,O)>"),bF:w("P<+count,id,name(G,n,n)>"),A:w("P<cP>"),s:w("P<n>"),aS:w("P<iN>"),p:w("P<r>"),C:w("P<fd>"),D:w("P<lb>"),fp:w("P<Jd>"),M:w("P<Jl>"),gZ:w("P<aFk>"),Y:w("P<adu>"),E:w("P<aHk>"),F:w("P<O>"),dC:w("P<G>"),dS:w("P<aB?>"),d4:w("P<n?>"),J:w("cs<ah<ag>>"),b:w("ak<n2>"),do:w("ak<hU>"),r:w("ak<ku>"),U:w("ak<a4<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(G,n,n)>"),h:w("ak<n>"),c:w("ak<lb>"),j:w("ak<@>"),fK:w("bu<n,n>"),d2:w("bu<n,ak<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("J<n,GZ>"),w:w("iy"),g2:w("r2"),bV:w("amR"),fL:w("cn"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(O,ak<hU>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bn<O>"),gc:w("dD"),b4:w("cz<G>"),W:w("k9<n>"),l:w("r"),cM:w("fd"),i:w("lb"),cc:w("F8"),bw:w("abW<n?>"),cy:w("Jn"),q:w("mR"),y:w("R"),gR:w("O"),z:w("@"),S:w("G"),eK:w("ak<ku>?"),m:w("ao0?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("ql?"),T:w("n?"),aD:w("dD?"),o:w("lb?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVb=new A.bp(B.ha,B.bE,B.ha,B.bE)
D.a9_=new A.bp(B.ha,B.jY,B.ha,B.jY)
D.aVn=new A.bp(B.id,B.bE,B.bE,B.bE)
D.aVr=new A.az(B.cY,1.4,B.r,-1)
D.aVB=new A.az(B.ad,1,B.r,-1)
D.aX0=new A.aY(0,1/0,64,1/0)
D.aX4=new A.aY(0,84,0,1/0)
D.avY=w([B.lw,B.qw,B.c],x.O)
D.bQE=new A.a7(B.ax,B.aD,B.x,D.avY,null,null)
D.aXP=new A.o(null,null,null,null,null,D.bQE,B.n)
D.cUQ=w([B.aU,B.bT],x.O)
D.bSJ=new A.a7(B.b1,B.b6,B.x,D.cUQ,null,null)
D.aY8=new A.o(null,null,null,null,null,D.bSJ,B.n)
D.b3e=new A.fh(null,null,null,null,null,E.jG,null,null,null,null)
D.aai=new A.cq(B.A,null,null,D.b3e,null)
D.k6=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eT3=new A.F(!0,D.k6,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faQ=new A.x("No books on the shelf yet.",null,D.eT3,null,null,null,null,null,null,null,null,null)
D.e0U=new A.C(B.nH,D.faQ,null)
D.b1O=new A.cq(B.A,null,null,D.e0U,null)
D.b2G=new A.cq(B.A,null,null,Y.UR,null)
D.b4E=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b56=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abl=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b7F=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b7W=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.acx=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bbG=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bc2=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.E7=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bdA=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bfO=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.ae7=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f5w=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bkZ=new A.eO(null,D.f5w,B.f0,null,x.d)
D.fdY=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bl0=new A.eO(null,D.fdY,B.f0,null,x.d)
D.bly=new A.b9(38e5)
D.bmi=new A.i8(0,10,0,10)
D.bms=new A.Q(0,1,0,0)
D.bmC=new A.i8(0,4,0,4)
D.bmU=new A.Q(10,10,14,10)
D.bn4=new A.i8(10,4,10,4)
D.bnc=new A.i8(10,8,10,8)
D.bnd=new A.Q(10,8,8,8)
D.bnF=new A.Q(12,6,12,2)
D.bnX=new A.Q(14,10,6,6)
D.bnY=new A.Q(14,12,14,0)
D.bo1=new A.Q(14,12,14,8)
D.bo4=new A.Q(14,12,8,14)
D.bo8=new A.i8(14,14,14,14)
D.boN=new A.Q(16,2,16,10)
D.boX=new A.Q(16,6,16,30)
D.boZ=new A.Q(16,6,16,8)
D.agp=new A.Q(18,16,18,8)
D.bpz=new A.Q(18,20,18,22)
D.agt=new A.Q(18,24,18,24)
D.bpF=new A.Q(18,30,18,30)
D.bpX=new A.Q(20,10,12,20)
D.bqa=new A.Q(20,18,16,18)
D.bqc=new A.Q(20,18,20,6)
D.br1=new A.Q(24,32,24,28)
D.br2=new A.Q(24,36,24,32)
D.br6=new A.Q(26,26,24,14)
D.brk=new A.Q(2,4,2,8)
D.bro=new A.Q(30,0,30,0)
D.brz=new A.Q(38,22,22,22)
D.agK=new A.Q(40,24,24,24)
D.brB=new A.i8(40,40,40,40)
D.brD=new A.Q(46,30,30,30)
D.agN=new A.Q(4,0,0,8)
D.bs2=new A.Q(56,40,40,40)
D.bs6=new A.Q(1.25,1.25,1.25,1.25)
D.bs7=new A.Q(60,0,60,0)
D.bsa=new A.Q(6,14,6,16)
D.bsm=new A.i8(7,3,7,3)
D.bsS=new A.Q(5,1.5,5,1.5)
D.bt2=new A.Q(6,2.5,6,2.5)
D.fpz=new A.x("Signature",null,B.ne,null,null,null,null,null,null,null,null,null)
D.btn=new A.bE(1,B.bi,D.fpz,null)
D.fmL=new A.x("Tell the AI what to fix",null,B.du,null,null,null,null,null,null,null,null,null)
D.bu5=new A.bE(1,B.bi,D.fmL,null)
D.f_g=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foH=new A.x("Worksheets",null,D.f_g,null,null,null,null,null,null,null,null,null)
D.f_o=new A.F(!0,E.aaX,null,null,null,null,13,B.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnB=new A.x("Track your project spending",null,D.f_o,null,null,null,null,null,null,null,null,null)
D.cNc=w([D.foH,B.at,D.fnB],x.p)
D.biw=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cNc,null)
D.bua=new A.bE(1,B.bi,D.biw,null)
D.eVB=new A.F(!0,E.jG,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4J=new A.x("FAMILY LIBRARY",null,D.eVB,null,null,null,null,null,null,null,null,null)
D.bur=new A.bE(1,B.bi,D.f4J,null)
D.LV=new C.GX("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.YH=new C.GY(0,"male")
D.ahF=new C.GY(1,"female")
D.xq=new C.GY(2,"unknown")
D.tn=new C.ajk(0,"owner")
D.LW=new C.ajk(1,"editor")
D.kd=new C.ajk(2,"viewer")
D.air=new A.a0(61199,"MaterialIcons",!1)
D.bxS=new A.a0(61504,"MaterialIcons",!1)
D.bxT=new A.a0(61505,"MaterialIcons",!1)
D.bxV=new A.a0(61587,"MaterialIcons",!1)
D.by0=new A.a0(61890,"MaterialIcons",!1)
D.byU=new A.a0(63034,"MaterialIcons",!0)
D.bzJ=new A.a0(63429,"MaterialIcons",!1)
D.akI=new A.a0(984520,"MaterialIcons",!1)
D.byq=new A.a0(62776,"MaterialIcons",!1)
D.bC3=new A.ae(D.byq,26,B.aZ,null,null,null)
D.bwR=new A.a0(57648,"MaterialIcons",!1)
D.bCm=new A.ae(D.bwR,14,B.c,null,null,null)
D.bCD=new A.ae(B.Fi,17,null,null,null,null)
D.bD8=new A.ae(E.Zz,null,null,null,null,null)
D.bDb=new A.ae(B.j8,18,E.jG,null,null,null)
D.Zl=new A.a0(62044,"MaterialIcons",!1)
D.bDh=new A.ae(D.Zl,null,B.aU,null,null,null)
D.bE6=new A.ae(B.dV,16,null,null,null,null)
D.bEd=new A.ae(D.Zl,32,B.aU,null,null,null)
D.bEv=new A.ae(E.ais,18,B.cY,null,null,null)
D.bFy=new A.ae(B.Fs,22,B.aC,null,null,null)
D.bFK=new A.ae(B.dV,22,B.aZ,null,null,null)
D.bFV=new A.ae(P.Zq,22,B.c,null,null,null)
D.bG_=new A.ae(B.tw,52,B.c,null,null,null)
D.bG9=new A.ae(B.Fs,30,B.aC,null,null,null)
D.alk=new A.ae(B.tF,22,B.c,null,null,null)
D.bGB=new A.ae(B.dV,17,null,null,null,null)
D.bGU=new A.ae(B.vi,26,B.cY,null,null,null)
D.bHD=new A.ae(B.ZL,16,null,null,null,null)
D.bIm=new A.ae(B.tw,24,B.c,null,null,null)
D.bIr=new A.ae(B.Mn,20,B.r0,null,null,null)
D.bIw=new A.ae(B.Fg,null,B.bT,null,null,null)
D.bID=new A.ae(B.j8,18,B.c,null,null,null)
D.bJe=new A.ae(B.cx,22,B.ad,null,null,null)
D.bK3=new A.ae(B.e4,16,B.ad,null,null,null)
D.bKf=new A.ae(D.Zl,20,B.aU,null,null,null)
D.alL=new A.ae(B.hw,20,null,null,null,null)
D.bKK=new A.ae(B.cx,18,D.k6,null,null,null)
D.bL1=new A.ae(B.xM,28,B.c,null,null,null)
D.bL9=new A.ae(B.Md,null,B.fU,null,null,null)
D.bLt=new A.ae(B.xM,24,B.c,null,null,null)
D.bLU=new A.ae(B.tw,null,B.aU,null,null,null)
D.bLV=new A.ae(B.jt,20,B.cY,null,null,null)
D.bMe=new A.ae(B.Fi,16,null,null,null,null)
D.bNL=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ex,!0,null,null,null,null)
D.d0R=w([B.bs,B.aU,B.f6,B.aZ],x.O)
D.bP7=new A.a7(B.ax,B.aD,B.x,D.d0R,null,null)
D.bcy=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bhB=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cKe=w([D.bcy,D.bhB],x.O)
D.bPi=new A.a7(B.b1,B.b6,B.x,D.cKe,null,null)
D.cWz=w([B.eX,B.fu,B.f6],x.O)
D.bPm=new A.a7(B.ax,B.aD,B.x,D.cWz,null,null)
D.ad8=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b57=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cM8=w([D.ad8,D.b57],x.O)
D.bPV=new A.a7(B.b1,B.b6,B.x,D.cM8,null,null)
D.b86=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.avm=w([D.b86,D.ad8],x.O)
D.bQe=new A.a7(B.ax,B.aD,B.x,D.avm,null,null)
D.ac9=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.ba7=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cVK=w([D.ac9,D.ba7],x.O)
D.bQP=new A.a7(B.a3,B.a7,B.x,D.cVK,null,null)
D.d6H=w([B.bL,B.mJ],x.O)
D.bQR=new A.a7(B.b1,B.b6,B.x,D.d6H,null,null)
D.bcu=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d7z=w([D.bcu,D.k6,D.k6,Ai.W8],x.O)
D.d9H=w([0,0.07,0.9,1],x.F)
D.bRk=new A.a7(B.a3,B.a7,B.x,D.d7z,D.d9H,null)
D.bRv=new A.a7(B.ax,B.aD,B.x,B.PS,null,null)
D.d6i=w([B.aZ,B.aU,B.bT],x.O)
D.bSv=new A.a7(B.ax,B.aD,B.x,D.d6i,null,null)
D.ccS=w([B.bs,B.aZ,B.eX],x.O)
D.ccZ=w([B.by,B.aE,B.jj],x.O)
D.cd0=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bbb=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cj4=w([D.bbb,E.acQ],x.O)
D.dXL=new A.u(1,2)
D.eEQ=new A.cP(B.aX,D.dXL,3)
D.asw=w([D.eEQ],x.A)
D.cqi=w([B.fY,B.c8,B.f5],x.O)
D.csW=w([B.bI,B.bw,B.bm],x.O)
D.buU=new C.tX("classic","Classic leather","Gold-edged brown leather",D.avm,E.jG,E.jG,"\u2766",B.L,!0,!1,!1,!1)
D.b4r=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bgC=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cOJ=w([D.b4r,D.bgC],x.O)
D.acT=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.buP=new C.tX("ornate","Ornate gold","Double gold border and flourishes",D.cOJ,D.acT,D.acT,"\u2726",B.L,!0,!0,!0,!1)
D.b7N=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bde=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cHi=w([D.b7N,D.bde],x.O)
D.buO=new C.tX("parchment","Parchment","Old paper with dark ink",D.cHi,D.E7,G.im,"\u2767",B.L,!0,!1,!1,!0)
D.aaG=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bf9=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d4K=w([D.aaG,D.bf9],x.O)
D.baK=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bey=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.buR=new C.tX("minimal","Clean paper","Plain and elegant, like a printed book",D.d4K,D.baK,D.bey,"",B.L,!0,!0,!1,!0)
D.buT=new C.tX("midnight","Midnight","Deep blue with silver stars",L.avE,B.cm,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.buN=new C.tX("emerald","Emerald library","Green cloth, title on the left",Z.asV,E.jG,B.fZ,"\u25c6",B.bg,!0,!1,!1,!1)
D.bfw=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d3f=w([B.es,D.bfw],x.O)
D.bbO=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bcR=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.buS=new C.tX("rose","Rose vintage","Burgundy with rose-gold lettering",D.d3f,D.bbO,D.bcR,"\u2740",B.L,!0,!1,!0,!1)
D.d7c=w([B.cC,O.mK],x.O)
D.buQ=new C.tX("modern","Modern","Dark, bold, left-aligned",D.d7c,B.aW,B.c,"",B.bg,!1,!0,!1,!1)
D.a0G=w([D.buU,D.buP,D.buO,D.buR,D.buT,D.buN,D.buS,D.buQ],A.ax("P<tX>"))
D.cGP=w([B.bT,B.bj],x.O)
D.bck=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cHu=w([D.aaG,D.bck],x.O)
D.b7K=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cJ1=w([D.b7K,B.da],x.O)
D.cKs=w([B.b7,B.iG,B.ob],x.O)
D.cKP=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b53=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b9t=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d9D=w([D.ac9,D.b53,D.b9t],x.O)
D.buV=new C.tY("leather","Leather",D.d9D,"vintage")
D.cRE=w([B.dp,B.Kh,A2.Vl],x.O)
D.bv1=new C.tY("midnight","Midnight",D.cRE,"starry")
D.cKt=w([B.fm,B.ec,B.l_],x.O)
D.bv0=new C.tY("forest","Forest",D.cKt,"story")
D.dbt=w([B.eM,B.es,B.k7],x.O)
D.buY=new C.tY("burgundy","Burgundy",D.dbt,"royal")
D.csw=w([B.aE,B.p8,B.nn],x.O)
D.buZ=new C.tY("royal","Royal",D.csw,"royal")
D.cMJ=w([B.bw,B.cC,O.mK],x.O)
D.buW=new C.tY("charcoal","Charcoal",D.cMJ,"geo")
D.d9L=w([B.cb,B.dO,B.wK],x.O)
D.bv_=new C.tY("sunset","Sunset",D.d9L,"sunset")
D.dao=w([B.iG,B.E8,B.Vp],x.O)
D.buX=new C.tY("ocean","Ocean",D.dao,"band")
D.yi=w([D.buV,D.bv1,D.bv0,D.buY,D.buZ,D.buW,D.bv_,D.buX],A.ax("P<tY>"))
D.cN6=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cNC=w([B.ak,B.aK,B.M],x.O)
D.cOO=w([B.es,B.ec,B.dp,B.fv,B.wN,B.cY,B.jJ,B.eu,B.dj],x.O)
D.cOP=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eER=new A.cP(B.dm,B.dA,8)
D.cP_=w([D.eER],x.A)
D.cQ1=w([B.bZ,B.dO,B.kA],x.O)
D.cQt=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cRA=w([B.bZ,B.hc],x.O)
D.cTw=w([B.aM,B.A7,B.wC],x.O)
D.cUm=w([B.bJ,B.cr,B.dy,B.aM],x.O)
D.cUR=w([B.iZ,B.cb,B.rR],x.O)
D.cVj=w([B.eX,B.cY],x.O)
D.cVP=w([B.cw,B.fD,B.hs],x.O)
D.cW0=w([B.aW,B.bj,B.dp],x.O)
D.cWw=w([B.ey,B.cZ,B.ec],x.O)
D.cWN=w([B.dS,B.dp,B.Kh],x.O)
D.cY1=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1y=w(["leather","linen","plain","stars","rays"],x.s)
D.bBK=new A.a0(985219,"MaterialIcons",!1)
D.bBi=new A.a0(983781,"MaterialIcons",!1)
D.av7=w([B.aiR,B.hX,B.lC,B.hY,D.bBK,B.FC,B.pt,D.bBi,L.akv,B.xO,B.pv,B.md],A.ax("P<a0>"))
D.a1D=w(["double","single","corners","none"],x.s)
D.d_E=w([B.dL,B.bo,B.eu],x.O)
D.d_R=w([],x.t)
D.BF=w([],x.u)
D.d1Y=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d47=w([B.aJ,B.fD,B.fv],x.O)
D.d5k=w([B.cp,B.od,B.Wi],x.O)
D.d5x=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dnW=new C.ls("construction","Construction","Jobsite & builds",B.xD)
D.do2=new C.ls("house","Home Build","Houses & rooms",B.vd)
D.dnT=new C.ls("grocery","Grocery","Store & pantry",B.a_h)
D.dnS=new C.ls("calculator","Calculations","Math & estimates",B.My)
D.do0=new C.ls("lumber","Materials","Lumber & supplies",B.MP)
D.dnP=new C.ls("kitchen","Kitchen","Remodel & meals",A8.ajF)
D.bBf=new A.a0(983756,"MaterialIcons",!1)
D.dnU=new C.ls("landscape","Landscaping","Yard & garden",D.bBf)
D.dnO=new C.ls("plumbing","Plumbing","Pipes & water",B.pE)
D.do3=new C.ls("electrical","Electrical","Wiring & power",B.h4)
D.dnM=new C.ls("store","Retail Shop","Daily business",B.kI)
D.dnN=new C.ls("paint_remodel","Paint & Remodel","Colors & walls",A9.ZR)
D.bAF=new A.a0(983311,"MaterialIcons",!1)
D.do_=new C.ls("roofing","Roofing","Roofs & exteriors",D.bAF)
D.bBs=new A.a0(983986,"MaterialIcons",!1)
D.dnL=new C.ls("warehouse","Warehouse","Storage & stock",D.bBs)
D.dnY=new C.ls("vehicles","Vehicles","Fleet & transport",B.FD)
D.bys=new A.a0(62785,"MaterialIcons",!1)
D.dnR=new C.ls("farm","Farm","Crops & livestock",D.bys)
D.dnQ=new C.ls("restaurant","Restaurant","Food & catering",B.tD)
D.dnX=new C.ls("tools","Tools","Workshop gear",B.Fz)
D.do1=new C.ls("wallet","Cash & Wallet","Quick spending",B.jt)
D.bzE=new A.a0(63395,"MaterialIcons",!1)
D.dnZ=new C.ls("concrete","Concrete","Foundation work",D.bzE)
D.dnV=new C.ls("blueprint","Blueprint","Plans & design",Ae.aiX)
D.a21=w([D.dnW,D.do2,D.dnT,D.dnS,D.do0,D.dnP,D.dnU,D.dnO,D.do3,D.dnM,D.dnN,D.do_,D.dnL,D.dnY,D.dnR,D.dnQ,D.dnX,D.do1,D.dnZ,D.dnV],A.ax("P<ls>"))
D.d6_=w([B.bq,B.bo],x.O)
D.d6I=w([B.i2,B.nr,B.dC],x.O)
D.a29=w(["top","middle","bottom"],x.s)
D.d91=w([B.ct,B.bj,B.dp],x.O)
D.d9y=w([B.bc,B.cZ,B.ec],x.O)
D.dbo=w([B.bI,B.ak],x.O)
D.dbp=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dVr={top:0,middle:1,bottom:2}
D.deA=new A.bq(D.dVr,["Top","Middle","Bottom"],x.n)
D.dV6={double:0,single:1,corners:2,none:3}
D.deF=new A.bq(D.dV6,["Double line","One line","Corners","None"],x.n)
D.dWd={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dg2=new A.bq(D.dWd,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dge=new A.bq(B.ia,[],A.ax("bq<G,+(n,n)>"))
D.dVj={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.BQ=new A.bq(D.dVj,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bq<n,G>"))
D.div=new F.Mb(32,null)
D.diw=new F.Mb(40,null)
D.dix=new F.Mb(46,null)
D.aEc=new C.aqW(null)
D.dYI=new A.u(8,14)
D.fbs=new A.x("Write a new book",null,B.jf,null,B.L,null,null,null,null,null,null,null)
D.e0o=new A.C(B.l4,D.fbs,null)
D.akW=new A.ae(B.hv,18,B.c,null,null,null)
D.f53=new A.x("Add",null,B.mt,null,null,null,null,null,null,null,null,null)
D.cUB=w([D.akW,B.pW,D.f53],x.p)
D.eCO=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cUB,null)
D.e0I=new A.C(B.on,D.eCO,null)
D.e0J=new A.C(E.afg,Y.UR,null)
D.f_c=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f83=new A.x("New Project",null,D.f_c,null,null,null,null,null,null,null,null,null)
D.cYn=w([D.akW,B.ab,D.f83],x.p)
D.eCR=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cYn,null)
D.e0T=new A.C(B.iN,D.eCR,null)
D.fah=new A.x("Choose your header",null,T.vU,null,null,null,null,null,null,null,null,null)
D.e1d=new A.C(B.hH,D.fah,null)
D.b3t=new A.fh(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eHt=new A.a6(22,22,D.b3t,null)
D.b1K=new A.cq(B.A,null,null,D.eHt,null)
D.e1i=new A.C(B.Xe,D.b1K,null)
D.boh=new A.Q(14,2,14,6)
D.fnk=new A.x("The top of your book. Tap a design to see it.",null,S.Sw,null,null,null,null,null,null,null,null,null)
D.e1j=new A.C(D.boh,D.fnk,null)
D.e2R=new A.iL(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e2U=new A.iL(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aFq=new A.iL(1,0.9607843137254902,0.48627450980392156,0)
D.HD=new A.iL(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yQ=new A.iL(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e3_=new A.iL(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fGM=new C.bff(null)
D.bjq=new A.m7(D.fGM,null,B.au,null,null)
D.aJ3=new A.cL(0,0,0,0,null,null,D.bjq,null)
D.epE=new A.z(-42,42)
D.exP=new A.cK([0,0,1,1])
D.aKl=new A.aa(0,0,520,160)
D.aKy=new A.b7(B.ry,B.Y)
D.fmT=new A.x("Let the AI write it from your tree",null,B.kq,null,B.L,null,null,null,null,null,null,null)
D.bvy=new A.dm(1,B.ci,D.fmT,null)
D.cRz=w([E.a_K,B.ab,D.bvy],x.p)
D.eCw=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cRz,null)
D.f4K=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d4n=w([D.alL,B.ab,D.f4K],x.p)
D.eCE=new A.co(B.aQ,B.ba,B.j,B.m,null,B.p,null,0,D.d4n,null)
D.bFP=new A.ae(B.hI,14,B.aZ,null,null,null)
D.eUg=new A.F(!0,B.aZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8t=new A.x("Cashier",null,D.eUg,null,null,null,null,null,null,null,null,null)
D.cYT=w([D.bFP,B.bp,D.f8t],x.p)
D.eCG=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cYT,null)
D.f4L=new A.x("Transfer & settings",null,B.du,null,null,null,null,null,null,null,null,null)
D.btX=new A.bE(1,B.bi,D.f4L,null)
D.cJY=w([D.alk,B.aw,D.btX],x.p)
D.eCH=new A.co(B.aQ,B.e,B.j,B.m,null,B.p,null,0,D.cJY,null)
D.eGd=new A.at(16,40)
D.eGi=new A.at(22,64)
D.eGp=new A.at(280,88)
D.eH9=new A.a6(30,null,null,null)
D.eIr=new A.hH(2,12,12,1.05,null)
D.f89=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eJ9=new A.b1(D.f89,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f8o=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aMn=new A.b1(D.f8o,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fgd=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eJD=new A.b1(D.fgd,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fq7=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eJI=new A.b1(D.fq7,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.faf=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eJP=new A.b1(D.faf,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.q,null)
D.fnx=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aMr=new A.b1(D.fnx,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f5l=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eKe=new A.b1(D.f5l,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fqM=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eKY=new A.b1(D.fqM,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.flS=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eLm=new A.b1(D.flS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fqb=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eLp=new A.b1(D.fqb,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fhK=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eLr=new A.b1(D.fhK,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fc2=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eLs=new A.b1(D.fc2,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fc3=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eMs=new A.b1(D.fc3,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f8b=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eMK=new A.b1(D.f8b,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f9Y=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eN2=new A.b1(D.f9Y,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fhf=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eNi=new A.b1(D.fhf,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fcO=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eNj=new A.b1(D.fcO,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.eQh=new A.F(!0,D.k6,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQI=new A.F(!0,D.k6,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRl=new A.rl(!0,B.r9,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRB=new A.F(!0,D.k6,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS7=new A.F(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6p=new A.rl(!0,B.Rd,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT6=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTu=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV2=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV6=new A.F(!0,G.im,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWl=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX2=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXL=new A.F(!0,B.bT,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXP=new A.F(!0,B.bL,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYa=new A.F(!0,D.E7,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYj=new A.F(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZh=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZL=new A.F(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_a=new A.F(!0,B.aZ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0B=new A.F(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0J=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOA=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6R=new A.F(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2n=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2L=new A.F(!0,G.im,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2S=new A.F(!0,G.im,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3C=new A.x("Themes",null,B.oO,null,null,null,null,null,null,null,null,null)
D.f4d=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eUM=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4A=new A.x("Debt receipt",null,D.eUM,null,B.L,null,null,null,null,null,null,null)
D.aOv=new A.F(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4R=new A.x("Person who owes",null,D.aOv,null,null,null,null,null,null,null,null,null)
D.f5O=new A.x("Notes",null,B.a6w,null,null,null,null,null,null,null,null,null)
D.f6d=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eTM=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6h=new A.x("Share",null,D.eTM,null,null,null,null,null,null,null,null,null)
D.f7b=new A.x("Move your family trees",null,D.aOA,null,null,null,null,null,null,null,null,null)
D.f7M=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.f9y=new A.x("Remove this book?",null,B.hm,null,null,null,null,null,null,null,null,null)
D.aP_=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.faD=new A.x("What should the AI do?",null,B.du,null,null,null,null,null,null,null,null,null)
D.fbZ=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fd2=new A.x("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.f0v=new A.F(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdv=new A.x("NGMY.ORG",null,D.f0v,null,B.L,null,null,null,null,null,null,null)
D.feL=new A.x("Scan family tree QR",null,B.cu,null,null,null,null,null,null,null,null,null)
D.eY2=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffu=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eY2,null,B.L,null,null,null,null,null,null,null)
D.fgF=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fgM=new A.x("Thumbnail",null,B.oO,null,null,null,null,null,null,null,null,null)
D.fhl=new A.x("Save the cover",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fhL=new A.x("Your photos",null,B.oO,null,null,null,null,null,null,null,null,null)
D.fi_=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fir=new A.x("Design your cover",null,T.vU,null,null,null,null,null,null,null,null,null)
D.fix=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fiA=new A.x("PICTURE",null,H.mu,null,null,null,null,null,null,null,null,null)
D.fiW=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fiY=new A.x("You can undo it right after.",null,S.SE,null,null,null,null,null,null,null,null,null)
D.fjs=new A.x("Print",null,B.ug,null,null,null,null,null,null,null,null,null)
D.fjO=new A.x("Amount owed",null,D.aOv,null,null,null,null,null,null,null,null,null)
D.fk0=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fkA=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fl2=new A.x("Debtor signature",null,B.a6w,null,null,null,null,null,null,null,null,null)
D.fla=new A.x("Change icon",null,E.aNO,null,null,null,null,null,null,null,null,null)
D.fmj=new A.x("Family tree QR",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fmJ=new A.x("Download",null,B.ug,null,null,null,null,null,null,null,null,null)
D.fmN=new A.x("Change",null,B.oO,null,null,null,null,null,null,null,null,null)
D.fnD=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fnG=new A.x("WHAT SHOULD IT CHANGE?",null,H.mu,null,null,null,null,null,null,null,null,null)
D.fof=new A.x("COLOUR",null,H.mu,null,null,null,null,null,null,null,null,null)
D.fos=new A.x("Do it",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fov=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fpt=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.ePg=new A.F(!0,E.jG,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new A.x("Write the first page myself",null,D.ePg,null,null,null,null,null,null,null,null,null)
D.fqe=new A.x("Use this header",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fqk=new A.x("Create Project",null,E.aOf,null,null,null,null,null,null,null,null,null)
D.fDq=new C.aai(1,"header")
D.a7F=new C.aai(2,"projects")
D.fDr=new C.aai(3,"cashier")
D.a7G=new C.aai(4,"familyTree")
D.fOH=new C.ctR(0,"start")
D.fOI=new C.ctS(0,"start")
D.fDI=new C.Xw(null)
D.fEH=new C.XY(null)
D.dgb=new A.bq(B.ia,[],A.ax("bq<n,F8>"))
D.d0b=w([],x.E)
D.d0c=w([],x.M)
D.fFd=new C.bcx(D.dgb,D.d0b,D.d0c,0,0,null,null)
D.fHq=new C.Zl(null)
D.a8n=new C.aI1(0,"projects")
D.aSQ=new C.aI1(1,"cashier")
D.fME=new C.aI1(2,"familyTree")})()};
(a=>{a["iia6h4JODYZQtGyuB6PkK+K0Cek="]=a.current})($__dart_deferred_initializers__);