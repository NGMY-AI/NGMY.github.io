((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,R,A2,G,F,E,A3,A4,A5,A6,S,T,A7,A8,M,A9,H,Aa,Ab,U,V,W,Ac,Ad,X,Ae,Af,Ag,Y,Ah,Ai,K,Aj,Z,A_,O,P,L,Q,C={
bCo(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCo=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vh(null,""),$async$bCo)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n5(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dr(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cS(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qP(t,a1,B.hB,"book",E.Fc),$async$bCo)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Qc(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KS(l)?y.l:y.i)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cC
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a23(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCo,v)},
agA(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agA=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vh(null,""),$async$agA)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n5(b6)
s=x.S
r=A.db(c1,0,A.dG(4,"count",s),A.U(c1).c)
q=F.a1R(new A.M(r,new C.fAd(),r.$ti.k("M<ak.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fAc(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agA)
case 6:l=c5
k=F.Qc(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anP(s,D.dnB,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.V("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dr(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agA)
case 10:l=c5
k=l==null?null:F.Qc(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kZ(a5,a2.k("kZ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a4(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
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
p=A.cD(new A.bc(h,s),new C.fAe(),s.k("J.E"),p)
p=F.a1R(A.pd(p,3,A.a3(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a23(s,b9),$async$agA)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anP(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agA,v)},
hoR(d,e,f){return A.cb(null,B.w.j(0.65),!1,null,new C.fJq(e,f),d,null,!0,!0,x.g2)},
anP:function anP(d,e,f){this.a=d
this.b=e
this.c=f},
fAd:function fAd(){},
fAc:function fAc(d){this.a=d},
fAe:function fAe(){},
fJq:function fJq(d,e){this.a=d
this.b=e},
bAe(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAe=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b4(b1,new C.fp2())){u=null
w=1
break}t=B.d.d7(b1,new C.fp3())
s=$.W()
r=new A.qZ()
q=A.Df(r,D.aMq)
p=A.N()
p.r=B.c.gp(0)
q.aZ(D.aMq,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bS
o.e=B.fE
n=new C.fp8(t)
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
s=$.W()
p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bB(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bB(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aQ(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bB(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bB(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aQ(a3,o)}w=4
return A.b(r.pE().zj(520,160),$async$bAe)
case 4:w=3
return A.b(b3.hv(B.fZ),$async$bAe)
case 3:b0=b3
u=b0==null?null:J.eT(B.dD.gaN(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAe,v)},
fxU(d){return C.i2h(d)},
i2h(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fxU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bfN()
n=d.x!=null&&d.z_(null).length===0
if(d.x!=null)t=n?D.zi:D.If
else t=d.gTu()?D.If:D.aHs
w=3
return A.b(C.bAe(d.ax),$async$fxU)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amy(s)
r=A.a40(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aHs}else{p.c=C.wI(q,!0)
p.b=n?D.zi:D.If}r.a2K(A.fTB(new C.fxW(p,d,new C.fxX(),t,n,o),null,D.bvL,B.wd))
u=r.k9(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxU,v)},
fEx(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fEx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fxU(d),$async$fEx)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gu(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEx,v)},
fp2:function fp2(){},
fp3:function fp3(){},
fp8:function fp8(d){this.a=d},
fxX:function fxX(){},
fxW:function fxW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fxV:function fxV(){},
fJS(d,e){var w=0,v=A.j(x.H)
var $async$fJS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,B.w.j(0.55),!0,null,new C.fJW(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fJS)
case 2:return A.h(null,v)}})
return A.i($async$fJS,v)},
bCR(d,e,f,g){return C.i9L(d,e,f,g)},
i9L(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCR=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cI.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.J(x.q).f.U(D.eY0)
w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.fJO(g,r,f),d,null,!0,!0,x.H),$async$bCR)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCR,v)},
fJX(d,e){var w=0,v=A.j(x.H)
var $async$fJX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,null,!0,null,new C.fK_(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fJX)
case 2:return A.h(null,v)}})
return A.i($async$fJX,v)},
aY0:function aY0(d,e){this.c=d
this.a=e},
c1s:function c1s(){},
ba6:function ba6(d,e){this.b=d
this.a=e},
fJW:function fJW(d,e){this.a=d
this.b=e},
fJT:function fJT(d){this.a=d},
fJU:function fJU(d,e,f){this.a=d
this.b=e
this.c=f},
fJV:function fJV(d,e){this.a=d
this.b=e},
fJO:function fJO(d,e,f){this.a=d
this.b=e
this.c=f},
fJM:function fJM(d){this.a=d},
fJN:function fJN(d,e,f){this.a=d
this.b=e
this.c=f},
fK_:function fK_(d,e){this.a=d
this.b=e},
fJY:function fJY(d){this.a=d},
fJZ:function fJZ(d,e,f){this.a=d
this.b=e
this.c=f},
fsS(d,e){var w=0,v=A.j(x.y),u,t
var $async$fsS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1C(d),$async$fsS)
case 3:t=g
J.nr(t,new C.fsT(e))
u=A.ahe(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fsS,v)},
fsT:function fsT(d){this.a=d},
anW:function anW(d,e,f){this.c=d
this.d=e
this.a=f},
aCb:function aCb(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dFI:function dFI(d,e){this.a=d
this.b=e},
dFt:function dFt(d,e){this.a=d
this.b=e},
dFw:function dFw(d,e,f){this.a=d
this.b=e
this.c=f},
dFv:function dFv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFu:function dFu(d,e){this.a=d
this.b=e},
dFx:function dFx(d,e){this.a=d
this.b=e},
dFr:function dFr(){},
dFs:function dFs(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFq:function dFq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFb:function dFb(d){this.a=d},
dFc:function dFc(d,e,f){this.a=d
this.b=e
this.c=f},
dFd:function dFd(d,e){this.a=d
this.b=e},
dFa:function dFa(d){this.a=d},
dFi:function dFi(d,e){this.a=d
this.b=e},
dF9:function dF9(d){this.a=d},
dFj:function dFj(d,e,f){this.a=d
this.b=e
this.c=f},
dFk:function dFk(d,e,f){this.a=d
this.b=e
this.c=f},
dF8:function dF8(d,e){this.a=d
this.b=e},
dFl:function dFl(d,e,f){this.a=d
this.b=e
this.c=f},
dF7:function dF7(d,e){this.a=d
this.b=e},
dFm:function dFm(d,e){this.a=d
this.b=e},
dF6:function dF6(d){this.a=d},
dFn:function dFn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dF4:function dF4(){},
dEZ:function dEZ(d){this.a=d},
dF_:function dF_(d){this.a=d},
dF5:function dF5(d,e){this.a=d
this.b=e},
dFo:function dFo(d,e){this.a=d
this.b=e},
dF3:function dF3(d){this.a=d},
dFp:function dFp(d){this.a=d},
dF2:function dF2(){},
dFe:function dFe(d,e){this.a=d
this.b=e},
dF1:function dF1(d){this.a=d},
dFf:function dFf(d,e,f){this.a=d
this.b=e
this.c=f},
dF0:function dF0(d,e){this.a=d
this.b=e},
dEY:function dEY(d,e){this.a=d
this.b=e},
dFg:function dFg(d){this.a=d},
dFh:function dFh(d,e,f){this.a=d
this.b=e
this.c=f},
dFL:function dFL(){},
dFM:function dFM(d,e){this.a=d
this.b=e},
dFJ:function dFJ(d){this.a=d},
dFK:function dFK(d){this.a=d},
dFF:function dFF(d,e){this.a=d
this.b=e},
dFG:function dFG(d){this.a=d},
dFy:function dFy(d,e,f){this.a=d
this.b=e
this.c=f},
dFz:function dFz(d,e,f){this.a=d
this.b=e
this.c=f},
dFA:function dFA(d,e,f){this.a=d
this.b=e
this.c=f},
dFB:function dFB(d,e,f){this.a=d
this.b=e
this.c=f},
dFC:function dFC(d,e,f){this.a=d
this.b=e
this.c=f},
dFD:function dFD(d,e,f){this.a=d
this.b=e
this.c=f},
dFE:function dFE(d,e,f){this.a=d
this.b=e
this.c=f},
dFN:function dFN(){},
dFO:function dFO(){},
dFP:function dFP(){},
dFQ:function dFQ(d){this.a=d},
dFH:function dFH(d,e){this.a=d
this.b=e},
hl2(d){return B.d.dM(D.a1J,new C.ftu(d),new C.ftv())},
ub:function ub(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ftu:function ftu(d){this.a=d},
ftv:function ftv(){},
akh:function akh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTO:function aTO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
St:function St(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdJ:function bdJ(){this.d=$
this.c=this.a=null},
d5x:function d5x(d,e){this.a=d
this.b=e},
d5v:function d5v(d,e){this.a=d
this.b=e},
d5w:function d5w(){},
d5y:function d5y(d,e){this.a=d
this.b=e},
h5P(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nc(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KE(d,e){return C.i0V(d,e)},
i0V(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$KE)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.S.aI(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.da(p,x.f)
o=A.cD(o,new C.fvy(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fvz(),n),n.k("J.E"))
B.d.b0(o,new C.fvA())
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
return A.i($async$KE,v)},
AP(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$AP)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fIw(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AP,v)},
aPW(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KE(d,e),$async$aPW)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.fQG(f))
if(s===-1)t.cj(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AP(d,e,u),$async$aPW)
case 3:return A.h(null,v)}})
return A.i($async$aPW,v)},
bAG(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KE(d,e),$async$bAG)
case 2:u=h
J.nr(u,new C.fsK(f))
w=3
return A.b(C.AP(d,e,u),$async$bAG)
case 3:return A.h(null,v)}})
return A.i($async$bAG,v)},
bAV(d,e){return C.i0U(d,e)},
i0U(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAV=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bAV)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.MJ
w=1
break}p=B.S.aI(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Cr.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3m,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2J,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a2E,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cTd,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Hq(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.MJ
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.MJ
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAV,v)},
Rh(d,e,f){return C.i9h(d,e,f)},
i9h(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rh=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Rh)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ag(),null)),$async$Rh)
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
return A.i($async$Rh,v)},
QL(d,e){return C.i0W(d,e)},
i0W(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QL=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$QL)
case 7:r=g
q=r.ta("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KE(d,e),$async$QL)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lp(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QL)
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
return A.i($async$QL,v)},
afV(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QL(d,e),$async$afV)
case 3:s=g
r=J.a4(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.az(),$async$afV)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afV)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afV,v)},
a2g(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2g=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QL(d,e),$async$a2g)
case 2:s=h
J.hv(s,f)
w=3
return A.b(A.az(),$async$a2g)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2g)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2g)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2g)
case 6:return A.h(null,v)}})
return A.i($async$a2g,v)},
nc:function nc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvy:function fvy(){},
fvz:function fvz(){},
fvA:function fvA(){},
fIw:function fIw(){},
fQG:function fQG(d){this.a=d},
fsK:function fsK(d){this.a=d},
Hq:function Hq(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bNh:function bNh(d){this.a=d},
i9A(d,e,f,g,h,i,j){return A.a6(d,!1).ck(A.e8(new C.fJ4(j,i,f,e,h,g),!0,null,x.H))},
QH(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QH=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QL(h,g),$async$QH)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.J(x.q).f.U(D.aOu)
u=!1
w=1
break}w=4
return A.b(C.hoR(d,f,e),$async$QH)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afV(h,g),$async$QH)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nc(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AP(h,r,p),$async$QH)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rh(h,r,new C.Hq("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QH)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QH,v)},
fJ4:function fJ4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Z0:function Z0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azf:function azf(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d6c:function d6c(d){this.a=d},
d6b:function d6b(d,e){this.a=d
this.b=e},
d60:function d60(d,e){this.a=d
this.b=e},
d5Y:function d5Y(d,e){this.a=d
this.b=e},
d5z:function d5z(d){this.a=d},
d5A:function d5A(d,e){this.a=d
this.b=e},
d61:function d61(d){this.a=d},
d5I:function d5I(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5H:function d5H(d){this.a=d},
d5J:function d5J(d){this.a=d},
d5Z:function d5Z(d){this.a=d},
d6_:function d6_(){},
d5E:function d5E(d){this.a=d},
d5F:function d5F(d,e){this.a=d
this.b=e},
d5K:function d5K(d){this.a=d},
d5L:function d5L(d,e){this.a=d
this.b=e},
d6a:function d6a(d){this.a=d},
d69:function d69(d,e){this.a=d
this.b=e},
d68:function d68(d){this.a=d},
d5V:function d5V(d){this.a=d},
d5U:function d5U(d){this.a=d},
d5W:function d5W(d){this.a=d},
d5B:function d5B(d,e){this.a=d
this.b=e},
d5X:function d5X(d,e){this.a=d
this.b=e},
d5O:function d5O(d){this.a=d},
d5P:function d5P(d){this.a=d},
d5N:function d5N(){},
d5Q:function d5Q(d){this.a=d},
d5R:function d5R(d){this.a=d},
d5S:function d5S(d,e){this.a=d
this.b=e},
d5T:function d5T(d,e,f){this.a=d
this.b=e
this.c=f},
d5M:function d5M(d,e){this.a=d
this.b=e},
d63:function d63(d){this.a=d},
d62:function d62(){},
d64:function d64(d){this.a=d},
d65:function d65(d){this.a=d},
d66:function d66(d){this.a=d},
d67:function d67(d,e){this.a=d
this.b=e},
d5C:function d5C(d){this.a=d},
d5D:function d5D(d){this.a=d},
Z4:function Z4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be3:function be3(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d7X:function d7X(d){this.a=d},
d7Y:function d7Y(d){this.a=d},
d7W:function d7W(d){this.a=d},
d7Z:function d7Z(d){this.a=d},
d7V:function d7V(d){this.a=d},
d8_:function d8_(d){this.a=d},
d7U:function d7U(d){this.a=d},
d80:function d80(d,e){this.a=d
this.b=e},
d7T:function d7T(d,e){this.a=d
this.b=e},
d81:function d81(d,e){this.a=d
this.b=e},
Z2:function Z2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aen:function aen(d,e,f){this.a=d
this.b=e
this.c=f},
azg:function azg(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d6r:function d6r(d,e){this.a=d
this.b=e},
d6q:function d6q(d,e){this.a=d
this.b=e},
d6v:function d6v(d){this.a=d},
d6u:function d6u(d,e){this.a=d
this.b=e},
d6s:function d6s(d){this.a=d},
d6t:function d6t(d){this.a=d},
d6w:function d6w(d){this.a=d},
d6x:function d6x(d){this.a=d},
d6p:function d6p(d,e){this.a=d
this.b=e},
d6o:function d6o(d,e){this.a=d
this.b=e},
JK:function JK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yj:function Yj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cF1:function cF1(d){this.a=d},
cF2:function cF2(){},
cF3:function cF3(d){this.a=d},
bbj:function bbj(d,e,f){this.b=d
this.c=e
this.a=f},
bba:function bba(d,e){this.b=d
this.a=e},
uc:function uc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YB:function YB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbh:function bbh(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cYt:function cYt(d,e,f){this.a=d
this.b=e
this.c=f},
cYs:function cYs(d,e){this.a=d
this.b=e},
cYS:function cYS(d){this.a=d},
cYF:function cYF(){},
cYT:function cYT(d){this.a=d},
cYE:function cYE(){},
cYU:function cYU(d,e){this.a=d
this.b=e},
cYD:function cYD(d,e){this.a=d
this.b=e},
cYV:function cYV(d,e){this.a=d
this.b=e},
cYC:function cYC(d,e){this.a=d
this.b=e},
cYW:function cYW(d){this.a=d},
cYB:function cYB(){},
cYX:function cYX(d,e){this.a=d
this.b=e},
cYA:function cYA(d,e){this.a=d
this.b=e},
cYY:function cYY(d){this.a=d},
cYN:function cYN(d,e){this.a=d
this.b=e},
cYZ:function cYZ(d){this.a=d},
cZ_:function cZ_(d){this.a=d},
cZ1:function cZ1(d){this.a=d},
cZ2:function cZ2(d){this.a=d},
cYM:function cYM(d,e){this.a=d
this.b=e},
cZ3:function cZ3(d,e){this.a=d
this.b=e},
aGf:function aGf(d){this.a=d},
bgx:function bgx(d){this.a=d},
b9v:function b9v(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i_T(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahr(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fty(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a_<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xV)m.push(l===D.ZL?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.k_(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k_(h,a2,a2)-A.k_(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ai(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.a_(a4,new C.ftw(u,f),p),new C.ftx(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i_U(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahr(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.ftD(v,e)
q=new C.ftB(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ai(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ai(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.dd(new A.bc(p,d),d.k("J.E"))
n=A.C(d,A.a3(d).k("co.E"))
B.d.fo(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f_(l,new C.ftC(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hMx(d,e,f,g){var w,v,u=C.i_V(d,e)
if(u<=0||f.length<=u)return new A.adY(!1,D.Ce,f)
if(g.t(0,e.a))return new A.adY(!1,D.Ce,f)
w=A.U(f).c
v=A.db(f,0,A.dG(u,"count",x.S),w).dK(0)
return new A.adY(!0,A.db(f,u,null,w).dK(0),v)},
hMy(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahr(d3),d2=d1.length
if(d2===0)return D.fY5
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.c8(0,t.a,new C.d6E(t))}s=new C.d6V(v)
d2=x.h
r=A.T(w,d2)
q=new C.d6N(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d6M(r)
l=A.T(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.c8(0,k,new C.d6F()),o)}h=new C.d6L(s)
g=new C.d6K(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d6G(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.gR
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.d6T(new C.d6P(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gakb(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eu([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.re(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d6D(a2,new C.d6U(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.du(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cu<1>")
d2=A.C(new A.cu(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.FC(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.JS(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bK(0,new C.d6H(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f_(j,new C.d6I(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d6J())
c6.push(new C.aIl(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdO(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hkx(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
heT(d,e,f,g,h,i,j,k,l,m,n){return new C.ZE(k,f,j,e,l,n,m,d,g,h,i,null)},
aBc(d,e,f,g,h,i,j){return new C.bht(i,d,e,f,j,h,g,null)},
ap3:function ap3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCM:function aCM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTH:function dTH(d){this.a=d},
dTG:function dTG(d){this.a=d},
dTJ:function dTJ(d,e){this.a=d
this.b=e},
dTK:function dTK(d,e){this.a=d
this.b=e},
dTL:function dTL(d){this.a=d},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTI:function dTI(d){this.a=d},
dTN:function dTN(d){this.a=d},
dTM:function dTM(d,e){this.a=d
this.b=e},
aoY:function aoY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCJ:function aCJ(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dT7:function dT7(d){this.a=d},
dT5:function dT5(d){this.a=d},
dT6:function dT6(d){this.a=d},
dT8:function dT8(d,e){this.a=d
this.b=e},
dT2:function dT2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSB:function dSB(d){this.a=d},
dSC:function dSC(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d){this.a=d},
dSO:function dSO(d){this.a=d},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSR:function dSR(d){this.a=d},
dSS:function dSS(d,e){this.a=d
this.b=e},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT_:function dT_(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSU:function dSU(d){this.a=d},
dSW:function dSW(d,e){this.a=d
this.b=e},
dST:function dST(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSY:function dSY(d){this.a=d},
dT0:function dT0(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSq:function dSq(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e,f){this.a=d
this.b=e
this.c=f},
dT4:function dT4(d,e,f){this.a=d
this.b=e
this.c=f},
dT3:function dT3(d){this.a=d},
dSr:function dSr(d){this.a=d},
dSs:function dSs(d){this.a=d},
dSt:function dSt(){},
dSu:function dSu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSw:function dSw(d){this.a=d},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSv:function dSv(d){this.a=d},
dT9:function dT9(d){this.a=d},
dSL:function dSL(){},
dSM:function dSM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSK:function dSK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSG:function dSG(d,e,f){this.a=d
this.b=e
this.c=f},
dSF:function dSF(d,e,f){this.a=d
this.b=e
this.c=f},
dSD:function dSD(d,e){this.a=d
this.b=e},
dSH:function dSH(d){this.a=d},
dSI:function dSI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSE:function dSE(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSN:function dSN(d,e){this.a=d
this.b=e},
dTh:function dTh(){},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTk:function dTk(d,e){this.a=d
this.b=e},
dTd:function dTd(d){this.a=d},
dTb:function dTb(d,e){this.a=d
this.b=e},
dTe:function dTe(d,e){this.a=d
this.b=e},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTg:function dTg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dTl:function dTl(d){this.a=d},
dTc:function dTc(d){this.a=d},
dSA:function dSA(d){this.a=d},
bdM:function bdM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d6B:function d6B(d){this.a=d},
d6A:function d6A(d,e){this.a=d
this.b=e},
d6C:function d6C(d){this.a=d},
d6z:function d6z(d,e){this.a=d
this.b=e},
fty:function fty(d,e){this.a=d
this.b=e},
ftz:function ftz(d){this.a=d},
ftA:function ftA(){},
ftw:function ftw(d,e){this.a=d
this.b=e},
ftx:function ftx(){},
ftD:function ftD(d,e){this.a=d
this.b=e},
ftE:function ftE(d){this.a=d},
ftF:function ftF(){},
ftB:function ftB(d){this.a=d},
ftC:function ftC(d,e){this.a=d
this.b=e},
JS:function JS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FC:function FC(d,e){this.a=d
this.b=e},
bdO:function bdO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d6E:function d6E(d){this.a=d},
d6V:function d6V(d){this.a=d},
d6N:function d6N(d){this.a=d},
d6O:function d6O(){},
d6M:function d6M(d){this.a=d},
d6F:function d6F(){},
d6L:function d6L(d){this.a=d},
d6K:function d6K(d,e){this.a=d
this.b=e},
d6G:function d6G(d){this.a=d},
d6P:function d6P(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6Q:function d6Q(d){this.a=d},
d6R:function d6R(d){this.a=d},
d6S:function d6S(){},
d6T:function d6T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6U:function d6U(){},
d6D:function d6D(d,e,f,g,h,i,j,k,l,m){var _=this
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
d6H:function d6H(d,e){this.a=d
this.b=e},
d6I:function d6I(d){this.a=d},
d6J:function d6J(){},
aIl:function aIl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdP:function bdP(d,e){this.b=d
this.a=e},
d6W:function d6W(){},
d6X:function d6X(d){this.a=d},
d6Y:function d6Y(d){this.a=d},
d6Z:function d6Z(){},
bhu:function bhu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcT:function bcT(d,e){this.b=d
this.a=e},
bvb:function bvb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
faZ:function faZ(d){this.a=d},
bkQ:function bkQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eMT:function eMT(d){this.a=d},
eMS:function eMS(d,e){this.a=d
this.b=e},
ZE:function ZE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBa:function aBa(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dmO:function dmO(d,e){this.a=d
this.b=e},
dmN:function dmN(d){this.a=d},
dmL:function dmL(d){this.a=d},
dmM:function dmM(d){this.a=d},
dmX:function dmX(d){this.a=d},
dmY:function dmY(d){this.a=d},
dmW:function dmW(d,e){this.a=d
this.b=e},
dmZ:function dmZ(){},
dn1:function dn1(d){this.a=d},
dmV:function dmV(d,e){this.a=d
this.b=e},
dn0:function dn0(){},
dn2:function dn2(d){this.a=d},
dmU:function dmU(d,e){this.a=d
this.b=e},
dn3:function dn3(d){this.a=d},
dmT:function dmT(d){this.a=d},
dn4:function dn4(d){this.a=d},
dmS:function dmS(d){this.a=d},
dn5:function dn5(d){this.a=d},
dmR:function dmR(d){this.a=d},
dn6:function dn6(d){this.a=d},
dmQ:function dmQ(d){this.a=d},
dn7:function dn7(d){this.a=d},
dmP:function dmP(d,e){this.a=d
this.b=e},
dn_:function dn_(d){this.a=d},
acO:function acO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bht:function bht(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acN:function acN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhs:function bhs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dn8:function dn8(d){this.a=d},
dn9:function dn9(d,e){this.a=d
this.b=e},
aBb:function aBb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHn:function aHn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acP:function acP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dni:function dni(d){this.a=d},
JG:function JG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h9L(d){var w=d.S,v=x.N
return w.j3(w,new C.c8_(),v,v)},
hE2(d){var w=d.bC
if(w>=0)return w
return 5},
h9N(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h9L(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h9M(d,e){var w=C.h9N(d,e)
if(w!=null&&w.cb(new A.S(Date.now(),0,!1)))return!0
return!1},
hE3(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.h9L(d),w,w)
u=C.h9N(d,e)
t=u!=null&&u.cb(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bR(A.dC(30,0,0,0,0,0).a).a7().ac())
d.S=v},
aZq(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZq=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.le(t,B.I2),$async$aZq)
case 3:if(l){u=!0
w=1
break}u=A.kT(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.I2,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZq,v)},
c8_:function c8_(){},
hE0(){var w,v=$.pt(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.h_(u)},
Ik(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ik=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Ik)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bI),$async$Ik)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.aa(m)
$.am.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ik,v)},
a6P(d){return C.hE1(d)},
hE1(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6P=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6P)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hG("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a6P)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a6P,v)},
c7Z(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c7Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ik(),$async$c7Z)
case 3:t=m.jw(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a4(q)
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
return A.i($async$c7Z,v)},
Ng(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ng=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c7Z(d),$async$Ng)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ik(),$async$Ng)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a7().ac())
r.n(s,t,o)
w=9
return A.b(C.a6P(s),$async$Ng)
case 9:case 8:u=t
w=1
break
case 5:n=C.hE0()
w=10
return A.b(C.Ik(),$async$Ng)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=11
return A.b(C.a6P(s),$async$Ng)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ng,v)},
aZp(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ik(),$async$aZp)
case 3:t=f
for(s=J.dl(t),r=s.gdO(t),r=r.dK(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6P(t),$async$aZp)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZp,v)},
a6Q(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6Q=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ap2(d,e),$async$a6Q)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ng(d),$async$a6Q)
case 7:w=4
break
case 5:w=8
return A.b(C.aZp(d),$async$a6Q)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6Q,v)},
aoX(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoX=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ap2(f,e),$async$aoX)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoX)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ik(),$async$aoX)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a4(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoX,v)},
aZo(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZo)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ik(),$async$aZo)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a4(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZo,v)},
hE4(){var w,v=$.pt(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.h_(u)},
ap_(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ap_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ap_)
case 3:if(!g){u=null
w=1
break}t=C.hE4()
w=4
return A.b(A.UN(),$async$ap_)
case 4:s=g
r=B.dK.aJ(B.S.ao(d.eR(),null))
r=B.cT.gcA().aJ(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(A.a6R(s),$async$ap_)
case 5:p=e?999:2
u=new A.a_Q("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap_,v)},
aoZ(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoZ=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UN(),$async$aoZ)
case 3:p=a0
o=J.a4(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a4(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aZo(J.k(l==null?"":l),j),$async$aoZ)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cz(0,B.cI.aJ(t))
s=C.h9O(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dO(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=5
return A.b(A.a6R(p),$async$aoZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoZ,v)},
h9O(d){var w,v,u,t,s=null
try{w=B.S.aI(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hE6(A.a2(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fUE(d){var w=0,v=A.j(x.m),u,t,s
var $async$fUE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoZ(t[1])
w=1
break}u=null
w=1
break}u=C.h9O(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUE,v)},
hE6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cD(u,new C.c81(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c82(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jw(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.da(l,u)
n=A.cD(n,new C.c83(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c84(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ap0(h,w,s,r,q)},
ap2(d,e){var w=0,v=A.j(x.y),u,t
var $async$ap2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.N7(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AD(d),$async$ap2)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap2,v)},
c8a(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c8a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AD(d),$async$c8a)
case 3:t=s.b6(f,new C.c8b(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.c8c())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8a,v)},
UO(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UO=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ap2(e,d),$async$UO)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Ng(e),$async$UO)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AD(e),$async$UO)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c88(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gam(r)){u=null
w=1
break}t=t.du(r,new C.c89(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KE(e,o),$async$UO)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.ap0(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UO,v)},
aZt(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZt=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UO(d,e,f,g),$async$aZt)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gk(A.JO(q.eR(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZt,v)},
aZs(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZs=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UO(d,e,f,g),$async$aZs)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ap_(r,f),$async$aZs)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFo(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZs,v)},
UP(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UP=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fUE(a0),$async$UP)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoX(g.a,d,e,f,s,r),$async$UP)
case 6:if(!a2){if(r)throw A.V(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.V(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bAw(e,j),$async$UP)
case 12:case 11:w=13
return A.b(C.ahc(e,j,s),$async$UP)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.AP(e,i,h),$async$UP)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.boq(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UP,v)},
ap0:function ap0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c86:function c86(){},
c87:function c87(){},
c85:function c85(){},
c81:function c81(){},
c82:function c82(){},
c83:function c83(){},
c84:function c84(){},
c8b:function c8b(){},
c8c:function c8c(){},
c88:function c88(d){this.a=d},
c89:function c89(d){this.a=d},
h20(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hB(d,new C.ap1(w,e,g,i,f,h,null),!0,null,x.H)},
d6y(d,e,f,g,h,i,j,k){return new C.bdL(i,e,k,j,g,f,h,d,null)},
ap1:function ap1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCL:function aCL(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dTu:function dTu(d){this.a=d},
dTv:function dTv(d,e,f){this.a=d
this.b=e
this.c=f},
dTz:function dTz(d,e){this.a=d
this.b=e},
dTA:function dTA(d){this.a=d},
dTr:function dTr(d){this.a=d},
dTs:function dTs(d,e){this.a=d
this.b=e},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTy:function dTy(d){this.a=d},
dTx:function dTx(d,e){this.a=d
this.b=e},
dTw:function dTw(){},
dTC:function dTC(d){this.a=d},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTB:function dTB(d,e){this.a=d
this.b=e},
d7_:function d7_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdN:function bdN(d,e,f){this.d=d
this.e=e
this.a=f},
ac4:function ac4(d,e,f){this.c=d
this.d=e
this.a=f},
bdL:function bdL(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdQ:function bdQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZZ:function ZZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCK:function aCK(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dTm:function dTm(d,e){this.a=d
this.b=e},
dTn:function dTn(d){this.a=d},
dTo:function dTo(d){this.a=d},
dTp:function dTp(d){this.a=d},
dTq:function dTq(d){this.a=d},
a__:function a__(d){this.a=d},
biX:function biX(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dTE:function dTE(d,e){this.a=d
this.b=e},
aY_(d,e){return new C.aXZ(d,e,null)},
aXZ:function aXZ(d,e,f){this.c=d
this.d=e
this.a=f},
i2m(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b3(d,11)},
i9K(d){return A.bS(B.K,null,new C.fJx(new C.tL(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hbG(d,e){return new C.arX(e,d,null)},
aPD(d,e,f,g,h,i,j){var w=C.i2m(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5S(w,!0,null),null),B.aq)
return I.aP_(e,B.bU,f,g,h,i,j)},
ly:function ly(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5S:function a5S(d,e,f){this.c=d
this.d=e
this.a=f},
biD:function biD(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b2$=e
_.c=_.a=null},
dEQ:function dEQ(d){this.a=d},
dER:function dER(){},
dES:function dES(d,e){this.a=d
this.b=e},
biC:function biC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fJx:function fJx(d){this.a=d},
fJw:function fJw(d,e){this.a=d
this.b=e},
fJv:function fJv(d,e){this.a=d
this.b=e},
fJu:function fJu(d,e){this.a=d
this.b=e},
arX:function arX(d,e,f){this.c=d
this.d=e
this.a=f},
cfG:function cfG(d,e){this.a=d
this.b=e},
aKH:function aKH(){},
i9v(d){var w=null
return A.cb(w,w,!0,w,new C.fIU(),d,w,!0,!0,x.e2)},
iaF(d,e,f,g,h){var w=null
return A.cb(w,w,!0,w,new C.fQn(h,g,f,e),d,w,!0,!0,x.N)},
i9x(d,e){var w=null
return A.cb(w,w,!0,w,new C.fIZ(e),d,w,!0,!0,x.dY)},
i9w(d){var w=null
return A.cb(w,w,!0,w,new C.fIY(),d,w,!0,!0,x.c5)},
aSz:function aSz(d,e){this.a=d
this.b=e},
aSy:function aSy(d){this.a=d},
aQy:function aQy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIU:function fIU(){},
fQn:function fQn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIZ:function fIZ(d){this.a=d},
fIY:function fIY(){},
YD:function YD(d,e){this.c=d
this.a=e},
ay0:function ay0(){var _=this
_.d=$
_.c=_.a=_.e=null},
cZf:function cZf(d){this.a=d},
cZg:function cZg(d){this.a=d},
cZe:function cZe(d,e){this.a=d
this.b=e},
cZh:function cZh(d){this.a=d},
cZi:function cZi(d){this.a=d},
YC:function YC(d){this.a=d},
ay_:function ay_(){this.d=$
this.c=this.a=null},
cZb:function cZb(d){this.a=d},
cZc:function cZc(d){this.a=d},
cZd:function cZd(d){this.a=d},
Ya:function Ya(d){this.a=d},
awK:function awK(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cwP:function cwP(){},
cwV:function cwV(d){this.a=d},
cwW:function cwW(d){this.a=d},
cwX:function cwX(d){this.a=d},
cwU:function cwU(){},
cwY:function cwY(d){this.a=d},
cwZ:function cwZ(d){this.a=d},
cwT:function cwT(){},
cx_:function cx_(d,e){this.a=d
this.b=e},
cwS:function cwS(d,e){this.a=d
this.b=e},
cwQ:function cwQ(d,e){this.a=d
this.b=e},
cx0:function cx0(d){this.a=d},
cwR:function cwR(){},
cx1:function cx1(d){this.a=d},
a0K:function a0K(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bv3:function bv3(){this.d=$
this.c=this.a=null},
far:function far(d,e){this.a=d
this.b=e},
fas:function fas(d){this.a=d},
fat:function fat(d,e){this.a=d
this.b=e},
ab7:function ab7(d,e){this.a=d
this.b=e},
Fp:function Fp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bv1:function bv1(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fap:function fap(d,e){this.a=d
this.b=e},
awD:function awD(d,e){this.c=d
this.a=e},
bv2:function bv2(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
faq:function faq(d){this.a=d},
bv0:function bv0(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMS:function aMS(){},
aMT:function aMT(){},
bCt(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bn(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oE(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fHy(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aU(B.o.u(s),2,"0")
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XA(A.d3(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPf(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hZ().l7(85,1280,B.eJ),$async$aPf)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fl(),$async$aPf)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hbF()
w=9
return A.b(C.cfF(q,r),$async$aPf)
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
o=A.aa(l)
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
return A.i($async$aPf,v)},
aPB(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPB=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cfC(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cI.aJ(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().Lq(p,!0,null,i).d6(0,B.fK),$async$aPB)
case 9:n=a1
w=10
return A.b(n.m1(),$async$aPB)
case 10:m=a1
w=11
return A.b(J.ahC(m).hv(B.fZ),$async$aPB)
case 11:l=a1
J.ahC(m).q()
if(l==null){w=8
break}i=J.eT(B.dD.gaN(l))
k="data:image/png;base64,"+B.cT.gcA().aJ(i)
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
j=A.aa(f)
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
return A.i($async$aPB,v)},
fHy:function fHy(){},
tL:function tL(d){this.a=d},
arW:function arW(d,e,f){this.c=d
this.d=e
this.a=f},
aEg:function aEg(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eK2:function eK2(d,e){this.a=d
this.b=e},
eJU:function eJU(d){this.a=d},
eJV:function eJV(d){this.a=d},
eK0:function eK0(d,e){this.a=d
this.b=e},
eK_:function eK_(d,e){this.a=d
this.b=e},
eJX:function eJX(d,e){this.a=d
this.b=e},
eJW:function eJW(d,e){this.a=d
this.b=e},
eJY:function eJY(d){this.a=d},
eJZ:function eJZ(d,e){this.a=d
this.b=e},
eK1:function eK1(d,e){this.a=d
this.b=e},
eJP:function eJP(d,e){this.a=d
this.b=e},
eJT:function eJT(d){this.a=d},
eJS:function eJS(d,e){this.a=d
this.b=e},
eJR:function eJR(d){this.a=d},
eK3:function eK3(d,e){this.a=d
this.b=e},
eK4:function eK4(d,e){this.a=d
this.b=e},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
hom(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a7().ac(),"project",v],x.N,x.z)},
fHz(d,e,f){var w=0,v=A.j(x.N),u
var $async$fHz=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hom(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHz,v)},
bCv(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fHz(!0,d,e),$async$bCv)
case 4:w=3
return A.b(r.arU(g,d,e.a),$async$bCv)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aJ(B.S.ao(C.hom(d,e,null),null))
u="NGMY_WS:"+B.kk.gcA().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCv,v)},
hge(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h1I(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d0(s,"NGMYWSSYNC2|"))return!0
if(J.d0(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d0(s,"{"))try{w=B.S.aI(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i7p(d){var w,v,u,t=C.hge(d)
if(t==null)return null
if(C.h1I(t))return t
w=B.a.cH(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b3(t,w))
if(C.h1I(v))return v}u=B.a.cH(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b3(t,u))
if(C.h1I(v))return v}return null},
h1H(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d0(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d0(q,"NGMY_WS:")){v=B.cf.cz(0,B.cI.aJ(J.mG(q,8)))
w=t.a(B.S.aI(0,v,r))}else w=t.a(B.S.aI(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fXc(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCu(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arT(t[1]),$async$bCu)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h1H(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h1H(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCu,v)},
h1G(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lh(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bC1(){var w=0,v=A.j(x.o),u,t
var $async$bC1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gv(),$async$bC1)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h1H(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC1,v)},
hpe(d,e,f,g){return A.bS(B.K,null,new C.fQd(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fQd:function fQd(d,e,f){this.a=d
this.b=e
this.c=f},
ad9:function ad9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eK6:function eK6(d,e){this.a=d
this.b=e},
eK7:function eK7(d,e){this.a=d
this.b=e},
eK8:function eK8(d,e){this.a=d
this.b=e},
eK9:function eK9(d,e){this.a=d
this.b=e},
eK5:function eK5(d){this.a=d},
arQ:function arQ(d,e,f){this.c=d
this.d=e
this.a=f},
bkj:function bkj(){var _=this
_.c=_.a=_.e=_.d=null},
eJK:function eJK(d,e){this.a=d
this.b=e},
eJL:function eJL(d){this.a=d},
eJM:function eJM(d){this.a=d},
arV:function arV(d){this.a=d},
aEf:function aEf(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJO:function eJO(d){this.a=d},
eJN:function eJN(d){this.a=d},
hHk(d,e,f,g,h){return new C.NT(h,g,d,e,f,null)},
aJ2:function aJ2(d,e){this.a=d
this.b=e},
NT:function NT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEh:function aEh(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eKw:function eKw(){},
eKs:function eKs(d,e){this.a=d
this.b=e},
eKt:function eKt(d){this.a=d},
eKd:function eKd(d){this.a=d},
eKb:function eKb(d){this.a=d},
eKc:function eKc(d){this.a=d},
eKm:function eKm(d,e){this.a=d
this.b=e},
eKj:function eKj(d,e){this.a=d
this.b=e},
eKk:function eKk(d,e){this.a=d
this.b=e},
eKl:function eKl(d,e,f){this.a=d
this.b=e
this.c=f},
eKh:function eKh(d,e,f){this.a=d
this.b=e
this.c=f},
eKf:function eKf(d){this.a=d},
eKg:function eKg(d){this.a=d},
eKi:function eKi(d){this.a=d},
eKz:function eKz(d){this.a=d},
eKy:function eKy(d){this.a=d},
eKA:function eKA(d){this.a=d},
eKx:function eKx(d){this.a=d},
eKa:function eKa(d){this.a=d},
eKe:function eKe(d,e){this.a=d
this.b=e},
eKv:function eKv(d,e){this.a=d
this.b=e},
eKu:function eKu(d,e){this.a=d
this.b=e},
eKp:function eKp(d){this.a=d},
eKq:function eKq(d){this.a=d},
eKr:function eKr(d,e){this.a=d
this.b=e},
eKo:function eKo(d,e){this.a=d
this.b=e},
eKn:function eKn(d,e,f){this.a=d
this.b=e
this.c=f},
bwP:function bwP(){},
Au(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afE(d,e,f){return C.hWU(d,e,f)},
hWU(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afE=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$afE)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.aa(o)
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
return A.i($async$afE,v)},
afD(d,e){return C.hWT(d,e)},
hWT(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afD=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afD)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.aa(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$afD,v)},
hVF(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sv(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzx(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzx=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1F(q),$async$bzx)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPB(q,!1),$async$bzx)
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
return A.i($async$bzx,v)},
hv6(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qX(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qX(p,J.k(u==null?"":u),1,o,q)},
fXc(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cD(w,new C.cwd(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cwe(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lh(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
i_P(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.ZL
case"female":case"f":return D.ajr
default:return D.xV}},
hl3(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h5Q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i_P(v==null?j:J.k(v))
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
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hY(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i_R(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.MK
case"viewer":return D.kv
default:return D.tO}},
i_S(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gl(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAN(d,e){return B.a.i(e.toLowerCase())===C.Gl(d,e)&&d.y!==D.kv},
tW(d,e){var w,v=d.y
if(v===D.kv)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gl(d,e))return!0
if(v===D.MK)return!0
v=d.e
return new A.M(v,A.h1M(),A.U(v).k("M<1,n>")).t(0,w)},
i_h(d){return J.dH(d,new C.fsC()).gM(0)},
fQN(d){var w=0,v=A.j(x.y),u,t
var $async$fQN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AD(d),$async$fQN)
case 3:u=t.qT(f,new C.fQO(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQN,v)},
bAw(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AD(d),$async$bAw)
case 3:t=g
if(J.qT(t,new C.fqQ(e))){w=1
break}if(C.i_h(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAw,v)},
akj(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.da(n,x.f)
w=A.cD(w,new C.bNi(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bNj(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bNk(),x.N)
t=A.C(l,l.$ti.k("ak.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.A(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aJ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kB(l,w,v,!s,t,m,r,q,p,C.i_R(o==null?null:J.k(o)))},
hlc(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CL(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Re(d),$async$CL)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$CL)
case 4:t=f
w=5
return A.b(t.a5N(0),$async$CL)
case 5:w=6
return A.b(C.fhZ(t,l),$async$CL)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hgP(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oD(l,n),$async$CL)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hgP(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oD(l,n),$async$CL)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CL,v)},
fhZ(d,e){return C.hT8(d,e)},
hT8(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fhZ=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Au(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aI(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Au(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aI(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fXc(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Au(a9)+"_"+n))
i=C.hVF(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1F(h),$async$fhZ)
case 17:g=b1
if(g!=null){i=i.Sv(g)
p=!0}case 16:J.ci(q,i)
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
case 8:J.Rp(q,new C.fi_())
if(p&&J.ad(q)!==0)C.oD(a9,q)
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
return A.i($async$fhZ,v)},
bAY(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Re(d),$async$bAY)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CL(r),$async$bAY)
case 4:t=p.aV(g)
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
return A.i($async$bAY,v)},
hgP(d){var w,v,u,t
try{w=B.S.aI(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cD(v,new C.fdG(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fdH(),u),u.k("J.E"))
B.d.b0(v,new C.fdI())
return v}catch(t){v=A.a([],x.D)
return v}},
oD(d,e){return C.i9l(d,e)},
i9l(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oD=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Re(b2),$async$oD)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oD)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Au(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aI(0,p,null)),new C.fIL(),a2).fM(0)
a2=J.b6(b3,new C.fIM(),a2).c0(0,new C.fIN())
n=A.dd(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.Au(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a87(l),$async$oD)
case 19:t=21
a5=C.Au(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aI(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a87(a5==null?null:J.k(a5)),$async$oD)
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
return A.b(C.afD(r,"ngmy_worksheet_item_v3_"+C.Au(a8)+"_"+m),$async$oD)
case 29:w=30
return A.b(C.afD(r,"ngmy_worksheet_thumb_v3_"+C.Au(a8)+"_"+m),$async$oD)
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
case 14:case 10:a2=J.cF(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzx(h),$async$oD)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afE(r,"ngmy_worksheet_thumb_v3_"+C.Au(a8)+"_"+a4,f),$async$oD)
case 40:g=i.Sv(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afD(r,"ngmy_worksheet_thumb_v3_"+C.Au(a8)+"_"+a4),$async$oD)
case 41:g=i.Sv(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afD(r,"ngmy_worksheet_thumb_v3_"+C.Au(a8)+"_"+a4),$async$oD)
case 42:case 34:a4=i.a
w=43
return A.b(C.afE(r,"ngmy_worksheet_item_v3_"+C.Au(a8)+"_"+a4,B.S.ao(g.ag(),null)),$async$oD)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afE(r,"ngmy_worksheets_index_v3_"+C.Au(a8),B.S.ao(q,null)),$async$oD)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.fIO(q))
a4=a3.$ti.k("cQ<1,a5<n,@>>")
a7=A.C(new A.cQ(a3,new C.fIP(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afE(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oD)
case 45:w=46
return A.b(J.hud(r),$async$oD)
case 46:if(a2.gcl(b3)&&J.ad(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.aa(b1)
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
return A.i($async$oD,v)},
L3(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$L3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CL(d),$async$L3)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.fQM(e))
if(r===-1)s.cj(t,0,e)
else s.n(t,r,e)
u=C.oD(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$L3,v)},
bAK(d,e){var w=0,v=A.j(x.H),u
var $async$bAK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CL(d),$async$bAK)
case 2:u=g
J.nr(u,new C.ft3(e))
w=3
return A.b(C.oD(d,u),$async$bAK)
case 3:return A.h(null,v)}})
return A.i($async$bAK,v)},
Gn(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Gn)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aI(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cD(j,new C.fvE(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fvF(),s),s.k("J.E"))
B.d.b0(r,new C.fvG())
k=r}}catch(h){}w=4
return A.b(C.feq(d),$async$Gn)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hTv(k,p,d)
j=A.U(o)
s=j.k("M<1,a5<n,@>>")
s=A.C(new A.M(o,new C.fvH(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qq(d,o),$async$Gn)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fvI(d),j),j.k("J.E"))
if(m.length!==0)C.aO9(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gn,v)},
fIx(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fIx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qq(d,e),$async$fIx)
case 3:t=J.dH(e,new C.fIy(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aO9(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIx,v)},
a2m(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a2m)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aI(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cD(m,new C.fQH(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fQI(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qg(o,new C.fQJ(e))
if(B.a.i(e.x).length===0&&C.tW(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDq(e.y===D.kv?D.kv:D.tO,m)}else p=e
if(q===-1)J.px(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.Qq(d,o),$async$a2m)
case 3:w=C.tW(p,d)?4:5
break
case 4:w=6
return A.b(C.aO8(C.Gl(p,d),p),$async$a2m)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2m,v)},
aOk(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gn(d),$async$aOk)
case 2:u=g
t=J.cF(u)
s=A.re(t.eO(u,new C.fsL(e)))
t.bq(u,new C.fsM(e))
w=3
return A.b(C.Qq(d,u),$async$aOk)
case 3:w=s!=null&&C.bAN(s,d)?4:5
break
case 4:w=6
return A.b(C.fdK(e),$async$aOk)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOk,v)},
ahr(d){var w=d.f,v=A.U(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fQT(),v),v.k("J.E"))
return w},
h_m(d,e){var w,v=d.f,u=A.re(new A.a_(v,new C.fsh(e),A.U(v).k("a_<1>")))
v=C.ahr(d)
w=A.U(v).k("a_<1>")
v=A.C(new A.a_(v,new C.fsi(e,u),w),w.k("J.E"))
B.d.b0(v,new C.fsj())
return v},
i_V(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hpi(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h_m(d,u),new C.fQo(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i1r(d,e){var w
if(e==null||e.length===0)return 1
w=C.h_m(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fwq(),A.U(w).k("M<1,G>")).fd(0,B.Ad)+1},
i9e(d){var w,v=C.ahr(d)
if(v.length===0)return null
w=new A.a_(v,new C.fIr(),A.U(v).k("a_<1>"))
if(!w.gam(0))return w.gI(0)
return B.d.gI(v)},
i_Q(d){return A.F(["id",d.a,"name",d.b,"gender",C.hl3(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i1m(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.L(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xV?n:q.c
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
d=q.aDl(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cIV(a1,w,a3.d,a2.y,s,a0,v)},
AD(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$AD)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aI(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.da(t,x.f)
p=A.cD(p,new C.fvB(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fvC(),s),s.k("J.E"))
B.d.b0(p,new C.fvD())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AD,v)},
ahc(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahc=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tO:D.kv
a7=C.Gl(b2,b3)
w=2
return A.b(C.AD(b1),$async$ahc)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fIm(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAw(b1,b2),$async$ahc)
case 5:case 4:if(b0===-1){u=b2.aDq(a6,a7)
a9.cj(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
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
i=i!==D.xV?i:l.c
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
s.n(0,m,l.aDl(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tO:D.kv
u=t.yz(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qq(b1,a8),$async$ahc)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aO8(B.a.i(b3.toLowerCase()),u),$async$ahc)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahc,v)},
hhc(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a7().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("M<1,a5<n,@>>"),k=A.C(new A.M(m,C.hou(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ac(),"updatedAt",o],r,x.K),"createdAt",s.a7().ac(),"updatedAt",o],r,x.z)},
hhd(d,e){var w=new A.S(Date.now(),0,!1).a7().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("M<1,a5<n,@>>")
u=A.C(new A.M(u,C.hou(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ac(),"updatedAt",w],x.N,x.z)},
hR8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akj(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h1M(),A.U(j).k("M<1,n>")).c0(0,new C.fed())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tO
else s=B.d.t(t,u)?D.MK:D.kv
return w.aDq(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akj(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cD(h,new C.fee(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.fef(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.feg(),x.N).c0(0,new C.feh())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tO
else s=B.d.t(t,u)?D.MK:D.kv
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kB(h,r,p,!m,t,o,l,j,v,s)},
feq(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$feq=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.feu()
h=x.N
g=x.z
w=7
return A.b(A.iM(A.a([A.lo("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bI),r.$2(A.lo("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bI),"collaborator"),r.$2(A.lo("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bI),"public")],x.cl),x.U),$async$feq)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h3(l,o)
J.h3(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.fer(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.fes(),l),l.k("J.E"))
B.d.b0(l,new C.fet())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.aa(a1)
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
return A.i($async$feq,v)},
hTv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.du(e,new C.fiE(),v).c0(0,new C.fiF())
t=A.dd(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gl(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kv){m=q.e
m=!new A.M(m,A.h1M(),A.U(m).k("M<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i1m(l,v)
o=C.Gl(k,w)
p=v.d
s.n(0,u,o===w?k.bbq(p,D.tO):k.bbq(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.b0(j,new C.fiG())
return j},
Qq(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Qq)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.flj(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$Qq)
case 3:return A.h(null,v)}})
return A.i($async$Qq,v)},
aO8(d,e){return C.hYF(d,e)},
hYF(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aO8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lR("family_trees",A.a([C.hhc(e,d)],p),null,B.cH),$async$aO8)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lR("family_trees",A.a([C.hhd(e,d)],p),null,B.cH),$async$aO8)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.aa(n)
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
return A.i($async$aO8,v)},
aO9(d,e){return C.hYG(d,e)},
hYG(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aO9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("M<1,a5<n,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fq9(d),n),m)
r=l
w=7
return A.b(A.lR("family_trees",r,null,B.cH),$async$aO9)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fqa(d),n),m)
p=k
w=8
return A.b(A.lR("family_trees",p,null,B.cH),$async$aO9)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.aa(i)
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
return A.i($async$aO9,v)},
fdK(d){return C.hQt(d)},
hQt(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fdK=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QP("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fdK)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.aa(p)
$.am.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fdK,v)},
qX:function qX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lh:function lh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwg:function cwg(){},
cwf:function cwf(){},
cwd:function cwd(){},
cwe:function cwe(){},
Hr:function Hr(d,e){this.a=d
this.b=e},
hY:function hY(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aki:function aki(d,e){this.a=d
this.b=e},
fsC:function fsC(){},
fQO:function fQO(d){this.a=d},
fqQ:function fqQ(d){this.a=d},
kB:function kB(d,e,f,g,h,i,j,k,l,m){var _=this
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
bNm:function bNm(){},
bNl:function bNl(){},
bNi:function bNi(){},
bNj:function bNj(){},
bNk:function bNk(){},
fi_:function fi_(){},
fdG:function fdG(){},
fdH:function fdH(){},
fdI:function fdI(){},
fIL:function fIL(){},
fIM:function fIM(){},
fIN:function fIN(){},
fIO:function fIO(d){this.a=d},
fIP:function fIP(){},
fQM:function fQM(d){this.a=d},
ft3:function ft3(d){this.a=d},
fvE:function fvE(){},
fvF:function fvF(){},
fvG:function fvG(){},
fvH:function fvH(){},
fvI:function fvI(d){this.a=d},
fIy:function fIy(d){this.a=d},
fQH:function fQH(){},
fQI:function fQI(){},
fQJ:function fQJ(d){this.a=d},
fsL:function fsL(d){this.a=d},
fsM:function fsM(d){this.a=d},
fQT:function fQT(){},
fsh:function fsh(d){this.a=d},
fsi:function fsi(d,e){this.a=d
this.b=e},
fsj:function fsj(){},
fQo:function fQo(d){this.a=d},
fwq:function fwq(){},
fIr:function fIr(){},
fvB:function fvB(){},
fvC:function fvC(){},
fvD:function fvD(){},
fIm:function fIm(d){this.a=d},
fed:function fed(){},
fee:function fee(){},
fef:function fef(){},
feg:function feg(){},
feh:function feh(){},
feu:function feu(){},
fev:function fev(d){this.a=d},
fer:function fer(d){this.a=d},
fes:function fes(){},
fet:function fet(){},
fiE:function fiE(){},
fiF:function fiF(){},
fiG:function fiG(){},
flj:function flj(){},
fq9:function fq9(d){this.a=d},
fqa:function fqa(d){this.a=d},
cwh:function cwh(d,e){this.a=d
this.b=e},
cwi:function cwi(d,e){this.a=d
this.b=e},
aGk:function aGk(d,e,f){this.a=d
this.b=e
this.c=f},
b7Y:function b7Y(){this.b=this.a=0},
b7X:function b7X(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bv4:function bv4(){},
wI(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcd()+"/"+w.gct()+"/"+w.gcg()
if(!e)return v
return v+" "+B.a.aU(B.o.u(w.gnd()),2,"0")+":"+B.a.aU(B.o.u(w.gGc()),2,"0")},
hHh(){var w,v=$.pt(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"WS"+B.d.h_(u)},
arR(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arR)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bI),$async$arR)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.aa(m)
$.am.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$arR,v)},
arS(d){return C.hHi(d)},
hHi(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arS=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arS)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hG("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arS)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$arS,v)},
arU(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arU)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hHh()
w=4
return A.b(C.arR(),$async$arU)
case 4:r=h
q=B.a.i(e)
p=B.dK.aJ(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cT.gcA().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(C.arS(r),$async$arU)
case 5:u=new A.a_Q("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arU,v)},
arT(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arT)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arR(),$async$arT)
case 4:q=f
p=J.a4(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a4(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cf.cz(0,B.cI.aJ(t))}catch(h){r=A.aa(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dO(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
p.n(q,i,m)}w=5
return A.b(C.arS(q),$async$arT)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arT,v)},
hbF(){var w=new A.S(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cG.aA(999999)},
hHj(d){var w,v,u,t,s,r,q
try{w=A.ag2(d)
if(w==null)return d
v=w
if(J.L9(v)>960||J.L8(v)>960){s=v
r=J.L9(v)>=J.L8(v)?960:null
v=A.ag1(s,J.L8(v)>J.L9(v)?960:null,B.O5,r)}s=v
u=A.alG(82).SS(s,B.yE)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cfF(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cfF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hHj(e)
$.cfB.n(0,s,t)
u=C.bCx(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfF,v)},
b1F(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1F=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d0(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gal(J.lq(l,",")):l
q=B.cI.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hbF()
w=7
return A.b(C.cfF(p,q),$async$b1F)
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
n=A.aa(k)
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
return A.i($async$b1F,v)},
cfC(d){var w=0,v=A.j(x.T),u,t,s
var $async$cfC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cfE(s),$async$cfC)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cT.gcA().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfC,v)},
a87(d){var w=0,v=A.j(x.H),u,t
var $async$a87=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hon(d)
if(t==null){w=1
break}$.cfB.W(0,t)
w=3
return A.b(C.bCw(t),$async$a87)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a87,v)},
bCx(d,e){return C.i7s(d,e)},
i7s(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aN4
w=7
return A.b(n==null?$.aN4=I.fZl():n,$async$bCx)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mH(r,"thumbs","readwrite")
B.iL.ml(J.mF(p,"thumbs"),q,l)
w=8
return A.b(J.pw(p),$async$bCx)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.aa(k)
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
return A.i($async$bCx,v)},
bCw(d){return C.i7q(d)},
i7q(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCw=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aN4
w=7
return A.b(o==null?$.aN4=I.fZl():o,$async$bCw)
case 7:r=f
q=J.mH(r,"thumbs","readwrite")
B.iL.FI(J.mF(q,"thumbs"),m)
w=8
return A.b(J.pw(q),$async$bCw)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.aa(l)
$.am.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCw,v)}},D,Ak,Al,A0,Am,An,Ao,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[237]
R=c[152]
A2=c[221]
G=c[202]
F=c[31]
E=c[212]
A3=c[113]
A4=c[223]
A5=c[111]
A6=c[190]
S=c[99]
T=c[102]
A7=c[220]
A8=c[37]
M=c[219]
A9=c[80]
H=c[88]
Aa=c[159]
Ab=c[118]
U=c[162]
V=c[233]
W=c[191]
Ac=c[182]
Ad=c[194]
X=c[189]
Ae=c[65]
Af=c[238]
Ag=c[71]
Y=c[206]
Ah=c[30]
Ai=c[112]
K=c[184]
Aj=c[195]
Z=c[236]
A_=c[229]
O=c[104]
P=c[98]
L=c[136]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[232]
Ak=c[70]
Al=c[200]
A0=c[235]
Am=c[234]
An=c[103]
Ao=c[56]
I=c[54]
C.anP.prototype={}
C.aY0.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bfN(),f=h.x!=null&&h.z_(i).length===0
if(h.x!=null)w=f?B.aZ:B.bz
else w=h.gTu()?B.bz:B.dU
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bfp,B.q,1)
s=x.p
r=A.p(i,A.w(A.a([A.p(i,D.eNu,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h8,i,i,i),B.R,D.ffX,B.at,A.d(C.wI(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fbS,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b_D,i,i,i,i,B.YL,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h0l(h.d)
o=A.p(B.A,C.aY_(A.fyL(h.e,n),30),B.f,i,i,new A.o(B.lL,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f7h,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.w(A.a([o,B.N,n,B.bD,D.fge,B.ac,A.p(i,A.w(A.a([D.fvG,B.bD,A.d(A.AF(h.c),i,i,i,i,i,i,D.f2j,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f9,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.ahw,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aQ5("Original due",C.wI(h.r,!1))
n=j.aQ5("Current due",C.wI(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.R,A.p(i,A.w(A.a([l,B.N,n,B.R,A.p(i,A.d(h.gaKf(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.B_,i,i,1/0),B.R,j.ceu(),B.N,j.c1Z(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fha,B.at,A.d(q,i,i,i,i,i,i,D.f6z,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaF0()){q=A.m(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fwZ,B.N,A.bw(A.m(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.VF(h.ax,B.M,D.eRm,!0,3.5,i),B.av),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fj,i,i,i)],s))}p.push(B.aB)
p.push(D.fpa)
return A.p(i,A.w(A.a([r,new A.D(B.ahz,A.w(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.P,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQ5(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a84,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f3i,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ceu(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8Z(B.dU,u,"Not paid yet")
w=t.z_(null).length
v=w===0?B.aZ:B.bz
return this.a8Z(v,u,C.wI(t.x,!0))},
c1Z(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8Z(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8Z(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a84,u,u,u)
v=A.U(d).k("M<1,hb>")
v=A.C(new A.M(d,new C.c1s(),v),v.k("ak.E"))
return A.w(A.a([w,B.am,A.bW(B.bA,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8Z(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a84,w,w,w),1),new A.dq(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.ba6.prototype={
a4(d,e){new A.VF(this.b,B.M,e,!0,3.5,null).a4(d,e)},
av(d){return d.b!==this.b}}
C.anW.prototype={
T(){return new C.aCb(A.a([],x.bp))},
ge2(){return this.c}}
C.aCb.prototype={
a_(){this.a1()
this.Iz()},
Iz(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Iz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1C(t.a.c),$async$Iz)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dFI(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Iz,v)},
aS3(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bs:B.bl).j(0.22)
w=A.m(10)
return A.bs(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.bs:B.bl).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aYg),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aS2(d){return this.aS3(d,null)},
Pa(d){return this.ci3(d)},
ci3(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pa=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GC:B.eJ
w=7
return A.b(new A.hZ().C3(72,900,900,n),$async$Pa)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fl(),$async$Pa)
case 8:p=f
n=B.cT.gcA().aJ(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.aa(l)
n=r.c
if(n!=null)n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pa,v)},
b_E(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.m(10),n=A.I((q?B.bs:B.bl).j(0.18),B.q,1)
if(d)q=B.cY
else q=s.a.d.a?B.bs:B.bl
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.az,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bs:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cD,s.a.d.a?B.bs:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jG,D.brp,r,r,r)},
D2(d){return this.bz5(d)},
bz4(){return this.D2(null)},
bz5(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D2=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b5,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.k6(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ab(p,2)}o=new A.as(new A.bb(a4,B.b5,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b5,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcg(),a4.gcd(),a4.gct(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcg(),a4.gcd(),a4.gct(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h0l(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.w6?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hU(B.w.j(0.55),!0,"Dismiss",a4,new C.dFr(),new C.dFs(a2,t,a5,r,new C.dFt(a2,t),o,n,j),B.eH,!0,x.y),$async$D2)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d6(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.J(x.q).f.U(D.eXI)
w=1
break}a0=a2.d
if(a0==null){t.c.J(x.q).f.U(D.eWn)
w=1
break}a1=A.fyL(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.w6?"male":"female"
w=7
return A.b(A.ahq(a3,A.h8o(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D2)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.w6?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcg(),a3.gcd(),a3.gct(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcg(),a4.gcd(),a4.gct(),0,0,0,0,0)))a5.cL3(a2.a)
w=8
return A.b(A.ahq(t.a.c,a5),$async$D2)
case 8:case 5:w=9
return A.b(t.Iz(),$async$D2)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D2,v)},
aSG(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bs:B.bl).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aY_(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aQ:B.az
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
RR(d){return this.czH(d)},
czH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hU(B.w.j(0.55),!0,"Dismiss",s,new C.dFL(),new C.dFM(t,d),B.hx,!0,x.y),$async$RR)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahq(t.a.c,d),$async$RR)
case 7:w=8
return A.b(t.Iz(),$async$RR)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RR,v)},
NP(d,e){return this.bJU(0,e)},
bJU(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l2(s,"Cancel","Delete",e.b+" \xb7 "+A.AF(e.c)+" will be removed from this device.","Delete this debt?"),$async$NP)
case 3:if(!g){w=1
break}w=4
return A.b(C.fsS(t.a.c,e.a),$async$NP)
case 4:w=5
return A.b(t.Iz(),$async$NP)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NP,v)},
aeu(d){return this.cbW(d)},
cbW(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bS(B.K,null,new C.dFF(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeu)
case 2:return A.h(null,v)}})
return A.i($async$aeu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e9t
w=J.dH(m.d,new C.dFN())
v=A.C(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dFO())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cK(v,0,new C.dFP())
w=A.m(18)
s=m.a.d.a
r=s?D.coM:D.axU
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.q,1)
s=A.p(l,D.bR7,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.az,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e8S,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dFQ(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cvV("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AF(t)
r=A.a([A.p(l,A.w(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b5O(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.aht,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e_:B.c
q=A.m(18)
o=A.I((w?B.bs:B.bl).j(0.12),B.q,1)
n=A.p(l,D.bM3,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.az,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.w(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.btP,l,l,1/0))}else{w=m.gchm()
s=A.C(new A.M(v,w,A.U(v).k("M<1,r>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bvu,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.U(u).k("M<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.w(r,B.aj,l,B.e,B.j,0,B.p)},
b5O(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bs:B.bl).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aQ:B.az
return A.p(u,A.w(A.a([q,B.bD,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ej,u,u,u)},
cvV(d,e){return this.b5O(!1,d,e)},
chn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z_(j).length,h=d.bf_()
if(d.x!=null){w=d.z_(j).length
v=w===0?B.cY:B.bz}else if(d.gTu())v=B.bz
else{if(h)w=B.cY
else w=k.a.d.a?B.bs:B.bl
v=w}if(d.x!=null){w=d.z_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wI(u,!1)}else{u.toString
t="Paid "+C.wI(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wI(w,!1)+" \xb7 "+i+" missed":"Due "+C.wI(w,!1)}w=k.a.d.a?B.e_:B.c
u=A.m(18)
if(d.gTu()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bs:B.bl).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bo:B.lL
o=A.I(d.gTu()&&d.x==null?B.bz.j(0.45):B.cY.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h0l(d.d)
o=A.p(B.A,A.de(C.aY_(A.fyL(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.az
m=x.p
n=A.a([new A.dq(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaF0())B.d.v(n,A.a([B.ec,A.X(B.Na,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AF(d.c)
l=k.a.d.a?B.aQ:B.az
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(V.ahd,A.B(A.a([o,B.bd,p,B.ab,A.w(A.a([n,B.bD,A.X(B.ey,(k.a.d.a?B.bs:B.bl).j(0.5),j,j,j,18)],m),B.dA,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dFH(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d8,j,j,j,j)}}
C.ub.prototype={}
C.akh.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bh
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aC(a0,A.p(a0,A.X(B.cD,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iZ,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aui,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FB,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f6(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.ei)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bqD,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bn,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.eS7)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vo,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.ll,A.w(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hm,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.brP,a0,a0,a0,a0)}}
C.aTO.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bh?B.bh:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bn:B.cF,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.vl,n,q))
return new A.D(B.d8,A.w(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.St.prototype={
T(){return new C.bdJ()}}
C.bdJ.prototype={
gbY0(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e9o,D.e9u],l)
for(w=0;w<8;++w){v=D.a1J[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gn:B.BI
q=t===s
r=A.X(r,q?B.eB:B.c0,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bg,new A.y(v.c,n,A1.Dj,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eB,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aC(n,new A.D(B.eC,A.w(A.a([new A.D(B.mt,new A.cl(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DP(!0,new C.akh(v,q.d,q.e,new C.d5w(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d5x(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.bs7,A.bG(D.fCk,new C.d5y(o,d),A.bn(B.b6,n,n,n,n,B.oi,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.bwl,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.nc.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ac()],x.N,x.z)},
bbC(d,e,f){return new C.nc(this.a,e,d,f)}}
C.Hq.prototype={
wi(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hq(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDf(d){var w=null
return this.wi(w,w,w,w,w,d,w,w,w,w,w,w)},
cGS(d){var w=null
return this.wi(w,w,w,w,d,w,w,w,w,w,w,w)},
bbA(d,e,f){var w=null
return this.wi(d,w,w,w,w,w,w,w,e,w,f,w)},
cHw(d){var w=null
return this.wi(w,w,w,w,w,w,d,w,w,w,w,w)},
cHF(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,d,w,w)},
cGQ(d){var w=null
return this.wi(w,w,w,d,w,w,w,w,w,w,w,w)},
cHH(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,w,w,d)},
cGN(d){var w=null
return this.wi(w,w,d,w,w,w,w,w,w,w,w,w)},
cGI(d){var w=null
return this.wi(w,d,w,w,w,w,w,w,w,w,w,w)},
FA(d){var w=null
return this.wi(w,w,w,w,w,w,w,d,w,w,w,w)},
cHP(d,e,f,g,h,i,j,k,l,m,n){return this.wi(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cEu(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bNh(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Cr.gee(D.Cr))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3m)
q=l.$2("frame",D.a2J)
l=l.$2("texture",D.a2E)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cHP(p,u,t,q,r,A.qN(d.h(0,"ribbon"))?A.FX(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Z0.prototype={
T(){return new C.azf(A.a([],x.I),D.MJ)},
ge2(){return this.c}}
C.azf.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zu(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.kW()
w=v.a
C.bAV(w.c,w.d).bA(new C.d6c(v),x.fL)},
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
kW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KE(s.c,s.d),$async$kW)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d60(t,r))
t.av2()
case 1:return A.h(u,v)}})
return A.i($async$kW,v)},
garD(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
av2(){var w,v,u=this.garD(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saW(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saW(0,w==null?"":w)},
cam(d){this.m(new C.d5Y(this,d))
this.av2()},
Na(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Na=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nc(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPW(r.c,r.d,s),$async$Na)
case 3:w=4
return A.b(t.kW(),$async$Na)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qg(t.d,new C.d5z(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d5A(t,p))
t.av2()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B4(p+1,B.ct,B.kT),$async$Na)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Na,v)},
AK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.garD()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPW(o.c,o.d,new C.nc(s,r,q,new A.S(p,0,!1))),$async$AK)
case 3:w=4
return A.b(t.kW(),$async$AK)
case 4:if(t.c==null){w=1
break}t.m(new C.d61(t))
case 1:return A.h(u,v)}})
return A.i($async$AK,v)},
NQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garD()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d5I(r),s,null,!0,!0,x.y),$async$NQ)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAG(s.c,s.d,r.a),$async$NQ)
case 4:t.m(new C.d5J(t))
w=5
return A.b(t.kW(),$async$NQ)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Tx(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$NQ,v)},
yj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$yj)
case 5:case 4:if(t.c==null){w=1
break}w=J.cI(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.QH(s,r.r,o,p,q),$async$yj)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hoR(s,r.x,r.r),$async$yj)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KE(s.c,s.d),$async$yj)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.nc(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AP(r.c,r.d,l),$async$yj)
case 11:w=12
return A.b(t.kW(),$async$yj)
case 12:r=t.c
if(r==null){w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yj,v)},
a09(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a09=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$a09)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyh(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yL,new C.d5Z(t),new C.d6_())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.ms("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new F.ms(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h1Y(o,new F.ri(s,r,"",p,new F.uu(q.d,null,null,null,null,"","","")),null),$async$a09)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a09,v)},
Ny(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Ny=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$Ny)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bS(D.acN,null,new C.d5E(t),s,!0,!0,!0,P.a6i,!1,!1,x.N),$async$Ny)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cGS(r)
t.m(new C.d5F(t,q))
s=t.a
w=7
return A.b(C.Rh(s.c,s.d,q),$async$Ny)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ny,v)},
WG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(D.acN,null,new C.d5K(t),r,!0,!0,!0,P.a6i,!1,!1,x.e),$async$WG)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d5L(t,s))
r=t.a
w=4
return A.b(C.Rh(r.c,r.d,s),$async$WG)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B4(0,B.dV,B.oK)
case 1:return A.h(u,v)}})
return A.i($async$WG,v)},
bPa(d){var w=d.bT(),v=B.a.aU(B.o.u(w.gcd()),2,"0"),u=B.a.aU(B.o.u(w.gct()),2,"0")
return""+w.gcg()+"-"+v+"-"+u},
gyh(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bXf()
if(r.e)w=D.abD
else if(J.cn(r.d)){w=r.y
v=r.gyh(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f1M,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A_.aiu,new C.Yj(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ko.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aC(q,A.p(q,D.eNh,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dR.j(0.45),B.J,18)],x.V),E.vX,B.n),q,q,q,q,B.YV,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcDC(),q,q,q,q,q,q,!1,B.a7))
w.push(B.R)
w.push(A.hj(D.bIi,D.fBO,r.gaLZ(),q))
B.d.v(u,w)}w=A.av(A.c9(A.w(u,B.m,q,B.e,B.P,0,B.p),B.r,q,B.y,q,B.ex,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ko.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.Ab
u=A.w(A.a([new A.D(D.bt8,w,q),A.E(A.IL(v,new C.d6a(r),J.ad(r.d)+1,q,r.gcal(),u,B.aO),1),r.bBZ()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c7(q,D.ae9,new A.an(B.W,q,B.b1,B.r,A.a([D.aL5,A.bm(!0,A.w(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bXf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JK(B.dX,"AI",h.gbzS(),!0))
if(h.a.f)f.push(new C.JK(B.nk,"Cover",h.gbKt(),!1))
if(h.a.f)f.push(new C.JK(B.yo,"Header",h.gbFr(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JK(B.u2,"Print",h.gcjn(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jp
t=v?"Save":"Edit"
f.push(new C.JK(u,t,v?h.gcpF():new C.d5V(h),!1))}if(h.a.f)f.push(new C.JK(B.hz,"Add page",h.gaLZ(),!1))
v=C.hl2(h.y.Q)
u=h.gyh(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dqk
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jW.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.ko,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ko.j(0.85)
p.push(new A.bB(1,B.bg,A.aC(B.c7,A.w(A.a([k,B.bD,new A.y(l.b,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.akh(v,u,t+" \xb7 "+s+" "+r,new C.d5W(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$zM)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a1R(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.d5B(t,p),s,null,!0,!0,x.N),$async$zM)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yj(),$async$zM)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DE(),$async$zM)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fd("Swahili (Kiswahili)",!0),$async$zM)
case 18:w=16
break
case 17:w=19
return A.b(t.cAl(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zM)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zM,v)},
YB(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jW.j(0.3),B.q,1),r=x.p
return new A.D(B.cy,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vX,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.w(A.a([A.d(f,w,w,w,w,w,w,A9.TA,w,w,w),A.d(g,w,w,w,w,w,w,A3.Tu,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d5X(d,h),w,w,w,w,w,w,w),w)},
DE(){return this.bOF()},
bOF(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DE=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d5O(r),a7,null,!0,!0,x.ei),$async$DE)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eM("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cb(null,null,!1,null,new C.d5P(o),a7,null,!0,!0,x.H).fh(new C.d5Q(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.ci(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yL[a1]
J.ci(j,i.a)}w=8
return A.b(C.agA(a0,a7,new C.d5R(o),d,l,e,j),$async$DE)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.aa(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).eN()
l=o
l.si_($.aw())
J.aQm(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.J(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bbC(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AP(j.c,j.d,l),$async$DE)
case 11:w=12
return A.b(r.kW(),$async$DE)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yL[a1].a)
a5=l.cEu(j,12,a7)
l=r.a
w=15
return A.b(C.Rh(l.c,l.d,a5),$async$DE)
case 15:if(r.c!=null)r.m(new C.d5S(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B4(0,B.dV,B.oK)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.J(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cqK("Undo",new C.d5T(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DE,v)},
Fd(d,e){return this.cAm(d,e)},
cAl(d){return this.Fd(d,!1)},
cAm(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fd=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eM("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cb(null,null,!1,null,new C.d63(a0),k,null,!0,!0,x.H).fh(new C.d64(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ci(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a23(m,new C.d65(a0)),$async$Fd)
case 10:w=8
break
case 9:w=11
return A.b(C.bCo(new C.d66(a0),m,a2),$async$Fd)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.aa(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).eN()
o=a0
o.si_($.aw())
J.aQm(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.J(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bbC(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AP(k.c,k.d,o),$async$Fd)
case 12:w=13
return A.b(r.kW(),$async$Fd)
case 13:o=r.c
if(o==null){w=1
break}o=o.J(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cqK("Undo",new C.d67(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fd,v)},
bBZ(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d5C(v):u
r=A.aH(u,u,u,u,A.X(D.bDY,s?D.ko:B.b0,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.hj(A.X(B.vA,B.EX,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EX,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbK2(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ko.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d5D(v):u
return A.bm(!0,new A.D(D.bsX,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.ey,t<J.ad(v.d)?D.ko:B.b0,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Z4.prototype={
T(){return new C.be3(new A.as(B.as,$.aw()))}}
C.be3.prototype={
ga1h(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbNo(){var w,v=this.ga1h()
A:{if("cover"===v){w=D.cV1
break A}if("book"===v){w=D.cQR
break A}w=D.diI
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jW.j(0.5),n=x.p,m=A.B(A.a([D.dql,B.au,D.bym,A.aH(q,q,q,q,B.ls,q,q,q,new C.d7X(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j7(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d7Y(r),r.ga1h()==="page",q,q,q,q))
if(r.a.d)l.push(A.j7(q,q,q,D.fwv,q,new C.d7Z(r),r.ga1h()==="book",q,q,q,q))
l.push(A.j7(q,q,q,D.fjN,q,new C.d8_(r),r.ga1h()==="cover",q,q,q,q))
l=A.bW(B.bA,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kI,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dp,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbNo(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mI(q,B.c.j(0.08),new A.y(s,q,B.J3,q,q,q,q,q,q,q,q,q),B.hE,new C.d80(r,s),q,q,q,q))}return A.eK(q,E.AG,A.c9(A.w(A.a([m,B.R,D.fzJ,B.am,l,B.ac,k,B.N,A.bW(B.bA,w,B.bq,6,6),B.aB,A.dn(D.bIf,D.fAw,new C.d81(r,d),A.bn(B.b6,q,q,q,q,B.oi,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fuM],n),B.F,q,B.e,B.P,0,B.p),B.r,q,B.y,q,B.fC,q,q,B.ag),q,q,q,D.aic,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.Z2.prototype={
T(){return new C.azg(A.a([],x.Y))},
ge2(){return this.c}}
C.aen.prototype={}
C.azg.prototype={
a_(){this.a1()
this.kW()},
kW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QL(p.c,p.d),$async$kW)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bAV(r.c,q),$async$kW)
case 6:j=e
i=J
w=7
return A.b(C.KE(t.a.c,q),$async$kW)
case 7:m.push(new l.aen(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d6r(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kW,v)},
b6Z(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PR(d,e){return this.cbU(0,e)},
cbU(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ck(A.e8(new C.d6q(u,e),!0,null,x.y)),$async$PR)
case 2:t=g
w=3
return A.b(u.kW(),$async$PR)
case 3:if(t===!0&&u.c!=null)u.c.J(x.q).f.U(D.aOy)
return A.h(null,v)}})
return A.i($async$PR,v)},
Fg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.J(x.q).f.U(D.aOu)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afV(s.c,s.d),$async$Fg)
case 5:q=e
w=6
return A.b(t.kW(),$async$Fg)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PR(0,B.d.hn(t.d,new C.d6v(q))),$async$Fg)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QH(p,s.f,r,n,o),$async$Fg)
case 10:m=e
w=11
return A.b(t.kW(),$async$Fg)
case 11:if(m&&t.c!=null)t.c.J(x.q).f.U(D.aOy)
case 1:return A.h(u,v)}})
return A.i($async$Fg,v)},
Pl(d,e){return this.cnm(0,e)},
cnm(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d6u(t,e),s,null,!0,!0,x.y),$async$Pl)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2g(s.c,s.d,e.a),$async$Pl)
case 4:w=5
return A.b(t.kW(),$async$Pl)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pl,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bC1(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jW.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aC(n,new A.fI(0.7142857142857143,A.p(n,A.w(A.a([D.dqm,B.ac,D.e8x,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ko.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcDy(),n,n,n,n,n,n,!1,B.a7))}w=A.m(22)
v=A.I(E.jW.j(0.85),B.q,1.6)
s=A.aC(n,A.p(n,D.bPW,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jW.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6w(d),n,n,n,n,n,n,!1,B.a7)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jW.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bd,D.byJ,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f0Q,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h8,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bVH,B.n),n,n,n,Am.Mc,D.br4,n,n,n)
if(o.e)k=D.abD
else k=k.length===0?D.b4F:A.cq(new C.d6x(k))
return A.c7(n,D.ae9,new A.an(B.W,n,B.b1,B.r,A.a([D.aL5,A.bm(!0,A.w(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bC1(d){var w,v,u=this,t=null,s=u.b6Z(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f6(B.A,new A.a7(300,420,new C.Yj(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aC(t,A.p(t,D.bPe,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b0,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6o(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f0q,t,t,t)
v=r===1?"page":"pages"
return A.aC(t,A.w(A.a([new A.fI(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ko.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6p(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JK.prototype={}
C.Yj.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yL,new C.cF1(m),new C.cF2()),j=m.c,i=D.Cr.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m_:B.b9
v=new C.cF3(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e5R,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bbj(j.x,h,l),B.av),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aiv,8,0.85,2.2),v.$4(D.bvN,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aiv,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bvJ,A.b3(l,l,l,new C.bba(h,l),B.av),l),0,0,0))
r=A.X(D.awX[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aui,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.bwd,A.w(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGf(l),D.eRf),l,l,l,46,0,l))
return A.p(l,A.bw(D.aaj,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aaj,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbj.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eJ()
f.dw(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.N()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.W()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.aj()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.W()
j=A.a([],l)
h=new A.aO(k.r,B.ao,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbL().a.snapshot()
o.drawPath((h.e=new A.cC(k)).a,r)
r.delete()}break
default:$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.N()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bba.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bS
for(w=e.a,v=e.b,v=[D.eIi,new A.cA([w,0,-1,1]),new A.cA([0,v,1,-1]),new A.cA([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ao,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbL().a.snapshot()
w.drawPath((n.e=new A.cC(s)).a,m)
m.delete()
s=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uc.prototype={}
C.YB.prototype={
T(){return new C.bbh()}}
C.bbh.prototype={
go4(){var w=this.d
return w===$?this.d=this.a.c:w},
gyh(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b5,B.aN),$.aw())}return v},
gaAs(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b5,B.aN),$.aw())}return v},
gaqb(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b5,B.aN),$.aw())}return v},
q(){var w=this,v=w.gyh(0),u=v.S$=$.aw()
v.P$=0
v=w.gaAs()
v.S$=u
v.P$=0
v=w.gaqb()
v.S$=u
v.P$=0
w.a2()},
aqO(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j7(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cYt(this,f,u),e===u,s,s,s,s))}return A.bW(B.bA,r,B.bq,6,8)},
awv(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kH,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go4(),a0=f.gyh(0),a1=a0.a.a,a2=f.gaAs(),a3=a2.a.a,a4=f.gaqb(),a5=d.bbA(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f6(B.A,new A.a7(270,370,new C.Yj(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awv("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYS(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awv("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYT(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yL[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b0
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aC(e,A.w(A.a([p,B.cS,new A.y(t.b,e,new A.H(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYU(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bW(B.bA,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eB:B.K,2,B.q,-1)
q.push(A.aC(e,A.p(e,A.X(D.awX[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYV(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bW(B.bA,q,B.bq,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awv("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYW(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mP,e,e,e)
m=A.a([],w)
for(l=D.Cr.gdO(D.Cr),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eB:B.b0
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aC(e,A.w(A.a([j,B.bD,new A.y(i,e,new A.H(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYX(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bW(B.bA,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mP,e,e,e)
k=f.go4()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fuf,B.ac,d,B.aR,a0,B.R,a2,B.aB,D.fAi,B.N,v,B.aB,D.fuo,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.kY(e,9,""+B.k.V(f.go4().f),36,18,new C.cYY(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mP,e,e,e),B.am,f.aqO(D.a3m,f.go4().r,new C.cYZ(f),D.dlU),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mP,e,e,e),B.am,f.aqO(D.a2J,f.go4().w,new C.cZ_(f),D.dlZ),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mP,e,e,e),B.am,f.aqO(D.a2E,f.go4().x,new C.cZ1(f),D.dnp),B.am,A.iF(e,B.b6,e,B.af,e,new C.cZ2(f),e,e,e,D.foI,f.go4().z),B.by,A.bG(D.ft4,new C.cZ3(f,a6),A.bn(B.b6,e,e,e,e,B.oi,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,An.Mo,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGf.prototype={
a4(d,e){var w,v,u,t=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
t.F(new A.b5(0,0))
w=e.a
t.F(new A.ap(w,0))
v=e.b
t.F(new A.ap(w,v))
t.F(new A.ap(w/2,v-12))
t.F(new A.ap(0,v))
t.F(new A.bE())
u=A.N()
u.saq(D.bWm.aw(0,new A.a9(0,0,0+w,0+v)))
d.aQ(t,u)},
av(d){return!1}}
C.bgx.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.saq(D.bVn.aw(0,new A.a9(0,0,a3,a4)))
a5.aZ(new A.a9(0,0,a3,a4),w)
v=B.k.dA(a2/112)
u=new A.eJ()
u.dw(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cV0[u.aA(9)]
j=u.aA(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bx(i,B.he)
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.saq(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.es(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jW.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c_(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jW.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c_(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aA(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bUK.aw(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c_(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jt
d=p.H()
w.drawRect(A.c_(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b87.j(0.72).gp(0)
a5.aZ(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.saq(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bf_.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.af(new A.u(w,a2),a1,a4)},
av(d){return!1}}
C.b9v.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kO(new A.o(A.aq(D.ko,D.bjt,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.Kb,o,o,B.n),B.be,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aGK,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jW.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.w(t,B.m,o,B.qa,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aY_,u,D.bWk,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGf(o),D.eRa),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTO(p.y,r,G.iB,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iB.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fe9,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iB.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iB.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f5k,!0,B.a4,B.zy,B.an,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fe1,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iB.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.EL.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.EL.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.EL.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iB.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XA(A.d3(A.a([A.d3(o,o,o,o,o,o,o,o,o,D.f8q,B.a.ap(k,0,1)),A.d3(o,o,o,o,o,o,o,o,o,o,B.a.b3(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iB.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.c9(A.w(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.i1,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iB.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.Kb,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.bvf,A.w(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.be),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Kb,v,D.bWR,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.ap3.prototype={
T(){return new C.aCM(A.a([],x._))},
bs(){return this.r.$0()},
pR(){return this.w.$0()},
ge2(){return this.c}}
C.aCM.prototype={
a_(){var w,v
this.a1()
this.vP()
w=this.a
v=w.c
if(v.length!==0)C.a6Q(v,w.e,w.d.w)},
vE(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h20(r,t.e,!1,s.w,new C.dTH(u),null,s),$async$vE)
case 2:w=3
return A.b(u.vP(),$async$vE)
case 3:return A.h(null,v)}})
return A.i($async$vE,v)},
a_j(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h20(r,t.e,!0,s.w,new C.dTG(u),null,s),$async$a_j)
case 2:w=3
return A.b(u.vP(),$async$a_j)
case 3:return A.h(null,v)}})
return A.i($async$a_j,v)},
vP(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AD(q.a.c),$async$vP)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.dTJ(q,p))
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
return A.b(C.Gn(q.a.c).d6(0,B.pP),$async$vP)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTK(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTL(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vP,v)},
Ok(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ok=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.J(s).f.U(D.eUN)
w=3
return A.b(C.Gn(t.a.c),$async$Ok)
case 3:r=e
w=4
return A.b(C.fIx(t.a.c,r),$async$Ok)
case 4:q=e
w=5
return A.b(C.Gn(t.a.c),$async$Ok)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dTF(t,p))
o=t.c.J(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dz:B.cR,null,B.r,null,s,null,B.mq,null,null,null,null,null,null,null,null,null,null))
t.a.pR()
case 1:return A.h(u,v)}})
return A.i($async$Ok,v)},
HO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i9w(l),$async$HO)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hE2(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZq(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HO)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hlc(r)
o=Date.now()
n=t.a.c
m=new C.kB(l,r.toUpperCase(),p,!0,B.T,D.Ce,new A.S(o,0,!1),0,n,D.tO)
w=5
return A.b(C.a2m(n,m),$async$HO)
case 5:w=6
return A.b(t.vP(),$async$HO)
case 6:t.a.bs()
t.a.pR()
if(t.c==null){w=1
break}t.Eq(m)
case 1:return A.h(u,v)}})
return A.i($async$HO,v)},
Eq(d){return this.cdW(d)},
cdW(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Eq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AD(u.a.c),$async$Eq)
case 2:n=l.re(k.dH(f,new C.dTI(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hB(m,new C.aoY(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Eq)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2m(u.a.c,o),$async$Eq)
case 6:case 5:w=7
return A.b(u.vP(),$async$Eq)
case 7:u.a.pR()
return A.h(null,v)}})
return A.i($async$Eq,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tL(p)
if(r.e)return A.av(A.mJ(q,p?B.bs:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e_:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bJk,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcd_(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fp(A.p(q,A.w(A.a([u,B.aR,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fBz,r.gaQ0(),A.bn(B.bV,q,q,q,q,q,Al.YY,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bvb,q,q,1/0),15,B.af,1.05,D.a9_,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.cI(r.d))w.push(A.aH(q,q,q,q,A.X(B.yv,B.aV,q,q,q,q),q,q,q,new C.dTN(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aH(q,q,q,q,A.X(B.ym,B.aV,q,q,q,q),q,q,q,r.gaf9(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.anC,D.fhA,r.gaQ0(),A.bn(B.bV,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fp(r.cAr(J.q(r.d,s),o),14,B.af,1,D.a9_,q))
B.d.v(w,u)}return A.w(A.a([p,B.aB,A.w(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cAr(d,e){var w=null,v=e.a,u=v?B.e_:B.c,t=A.m(14),s=A.I((v?B.e1:B.bP).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.m(14),p=A.p(w,D.bIo,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gao5(),m=d.d?"":" \xb7 Public",l=d.y===D.kv?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bD,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.bd,l,A.X(B.MV,v?B.bs:B.bl,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTM(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoY.prototype={
T(){return new C.aCJ(A.a([],x._),A.aX(x.N),A.b78())},
bs(){return this.r.$0()},
ge2(){return this.c}}
C.aCJ.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.ac2()
w=u.a
v=w.c
if(v.length!==0)C.a6Q(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a2f(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xK("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dT7(r),s,null,!0,!0,x.y),$async$a2f)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ji()
t.m(new C.dT8(t,r))
w=4
return A.b(t.vG(),$async$a2f)
case 4:t.a.bs()
t.xK(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2f,v)},
cqj(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dT2(w,f,d,e))},
aSi(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.ea(w,v,0,1)
u.jL(q,q,1,1)
this.w.sp(0,u)},
b9e(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eG(new Float64Array(16))
q.e3(r)
w=q.Cy()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.ea(r,u,0,1)
t.jL(v,v,1,1)
t.ea(-r,-u,0,1)
t.iD(0,q)
s.sp(0,t)},
ac2(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ac2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AD(u.a.c),$async$ac2)
case 2:t=s.re(r.dH(e,new C.dSB(u)))
if(t!=null&&u.c!=null)u.m(new C.dSC(u,t))
return A.h(null,v)}})
return A.i($async$ac2,v)},
xK(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vE(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h20(o,t,!1,r,new C.dSQ(u),q.a,s),$async$vE)
case 2:n=A
m=J
w=3
return A.b(C.Gn(u.a.c),$async$vE)
case 3:p=n.re(m.dH(e,new C.dSR(u)))
if(p!=null&&u.c!=null)u.m(new C.dSS(u,p))
return A.h(null,v)}})
return A.i($async$vE,v)},
Ji(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cw(w,0)},
vG(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2m(t,s),$async$vG)
case 2:return A.h(null,v)}})
return A.i($async$vG,v)},
a0P(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tW(q,t.a.c)){t.xK("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iaF(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0P)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ji()
t.m(new C.dT1(t,r))
w=4
return A.b(t.vG(),$async$a0P)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0P,v)},
a_x(){return this.cdY()},
cdY(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tW(q,t.a.c)){t.xK("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dT_(r,new C.tL(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_x)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ji()
t.m(new C.dT0(r,t))
w=4
return A.b(t.vG(),$async$a_x)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_x,v)},
Vw(d){return this.bz2(d)},
bz2(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tW(r,t.a.c)){t.xK("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSp(t,d),r,null,!0,!0,x.P),$async$Vw)
case 3:s=f
if(s==null){w=1
break}t.Ji()
t.m(new C.dSq(t,s))
w=4
return A.b(t.vG(),$async$Vw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vw,v)},
a2B(d){return this.cCz(d)},
cCz(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dTa(u,d,new C.tL(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2B)
case 2:return A.h(null,v)}})
return A.i($async$a2B,v)},
cag(d){var w=this,v=w.d
v===$&&A.c()
if(C.tW(v,w.a.c))w.O_(d)
else w.a2B(d)},
ahD(d,e){return this.cuh(d,e)},
cuh(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.dT4(new C.tL(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahD)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahD,v)},
HT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kv?3:5
break
case 3:w=6
return A.b(C.fQN(t.a.c),$async$HT)
case 6:s=e
o=t.a
r=C.h9M(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahD(!s,!r),$async$HT)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAN(o,t.a.c)){t.xK("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l2(o,"Cancel","Remove",q.y===D.kv?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HT)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOk(t.a.c,t.d.a),$async$HT)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iO(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HT,v)},
a9B(d){return this.bKa(d)},
bKa(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tW(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b4(s,new C.dSr(p))){o=A.U(s)
p.a=A.re(new A.cQ(new A.a_(s,new C.dSs(d),o.k("a_<1>")),new C.dSt(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.Ji()
t.m(new C.dSu(t,s,d,q))
w=3
return A.b(t.vG(),$async$a9B)
case 3:t.xK(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9B,v)},
O_(d){return this.bMi(d)},
bMi(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tW(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2B(d),$async$O_)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.dSy(t,d),r,null,!0,!0,x.P),$async$O_)
case 6:s=f
if(s==null){w=1
break}t.Ji()
t.m(new C.dSz(t,s))
w=7
return A.b(t.vG(),$async$O_)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O_,v)},
cAN(){var w=this,v=w.d
v===$&&A.c()
if(!C.tW(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dT9(w))
w.vG()},
Yn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAN(n,t.a.c)){t.xK("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bo(new A.M(q,t.gc8L(),A.U(q).k("M<1,n>")).c0(0,new C.dSL()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSM(t,new C.tL(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yn)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Ji()
t.m(new C.dSN(t,p))
w=4
return A.b(t.vG(),$async$Yn)
case 4:t.xK("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
c8M(d){return B.a.i(d.toLowerCase())},
ccL(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tW(v,w)
t=r.d
s=C.i_U(t)
C.i9A(q,t.b,u,C.i_T(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tL(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dTh(),A.U(l).k("a_<1>")).gM(0)
l=n?B.bZ:B.iA
v=A.X(B.a_8,n?B.bs:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.D(B.B3,A.aL(!1,o,!0,new A.D(B.hN,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dTi(p,d),o,o,o,o,o,o,o),o),new A.D(B.nf,p.bXg(m),o)],u)
if(p.d.y===D.kv){t=B.rv.j(0.15)
s=A.m(12)
r=A.I(B.rv.j(0.45),B.q,1)
q=C.Gl(p.d,p.a.c)
v.push(new A.D(B.xH,A.p(o,A.B(A.a([D.bNC,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ii,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.tW(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JG("Undo",B.rj,p.gcAM(),m,o,o))
u.push(new C.JG("Family Book",D.bD3,p.gccK(),m,B.tj,o))
if(C.tW(p.d,p.a.c))u.push(new C.JG("Display settings",B.BO,p.gcdX(),m,B.aZ,o))
u.push(new C.JG("Sync",B.ym,p.gaf9(),m,o,o))
t=p.d
if(t.y===D.kv||C.bAN(t,p.a.c)){t=p.d.y===D.kv?"Remove shared tree":"Delete tree"
u.push(new C.JG(t,B.e6,p.gbKk(),m,B.h0,o))}if(C.tW(p.d,p.a.c))u.push(new C.JG("Add member",B.vM,new C.dTj(p),m,B.bV,o))
v.push(new A.D(A0.ahG,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gao5()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dTk(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_c:X.MW,o,o,o,o,o)
v.push(A.av(A.hj(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dTl(p),o),o,o,o))}return A.c7(o,l,A.bm(!0,A.w(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bXg(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fx.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yf,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bQG,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaf9(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f3H,m,m,m)
r=r.gao5()
p=n.d.gao5()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.w(A.a([q,B.bD,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tW(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bNO,m,m,m,n.gcnH(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jq:B.my
r=r?"Private":"Public"
r=A.E(n.aur(q,"Privacy",r,n.a.d.w?n.gczL():m),1)
q=A.E(n.aur(B.yn,"Tree code",n.d.c,new C.dSA(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.aur(D.bEN,"Collaborators",p,n.gc0O()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kv){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aF(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.D(B.fL,A.B(A.a([A.X(B.oU,B.c,m,m,m,14),B.ec,A.d("View only",m,m,m,m,m,m,B.aPM,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.Fn,A.w(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bUP,B.n),m,m,m,m,m,m,m,1/0)},
aur(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.D(L.aiP,A.w(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uI,A.d(f,w,1,B.a2,w,w,w,O.zC,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.bdM.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdP(s,t),new A.ar(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.du(r,new C.d6B(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d6C(this),A.U(r).k("M<1,r>")))
return new A.D(B.tL,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JS.prototype={}
C.FC.prototype={}
C.bdO.prototype={
gbhJ(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIl.prototype={}
C.bdP.prototype={
bLY(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bC.j(0.75).gp(0)
v.c=2
v.d=B.bS
d.bF(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ao,null,null,A.a([],x.v))
q=w+5.5
t.F(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.F(new A.pC(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.F(new A.pC(u+4.95,r,u+9.9,s,u,q))
t.F(new A.bE())
q=A.N()
q.r=B.c.gp(0)
d.af(new A.u(u,w),9,q)
q=A.N()
q.r=B.bC.gp(0)
d.aQ(t,q)},
bLW(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.d6W())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b4(a0,new C.d6X(f))
t=new A.M(a0,new C.d6Y(f),A.U(a0).k("M<1,L>")).c0(0,new C.d6Z()).cK(0,1/0,B.v1)
w=f.a
d.bF(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lV(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aO(l.r,B.ao,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cV(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cV(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbL().a.snapshot()
r.drawPath((g.e=new A.cC(n)).a,k)
k.delete()}},
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bV.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bS
w.e=B.fE
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bLW(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bLY(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bhu.prototype={
gc6A(){var w=this.c
if(B.a.i(w.y).length!==0)return D.diH
switch(w.c.a){case 0:return D.cMI
case 1:return D.cXQ
case 2:return D.dd4}},
gc6D(){var w=this.c,v=C.hkx(w.w),u=C.hkx(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc6A(),p=t.c,o=I.bBH(p.f),n=t.gc6D(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.az:B.c,j=A.I(r?B.az:B.c,B.q,2)
if(o!=null)w=A.ta(B.A,s,B.ci,B.bU,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hV(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.FE,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.az:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fdF,s,s,s),B.f,s,s,new A.o(B.ce,s,w,j,s,s,B.n),s,s,s,s,D.bx3,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.m(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aC(s,new A.a7(84,112,A.w(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.w(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.aZT,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bxe,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bcT.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.baR
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.bvb.prototype={
B(d){var w=this,v=null,u=new C.faZ(w),t=w.c,s=t?B.cu:B.c,r=A.m(12),q=u.$3(B.hz,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yk,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.w(A.a([q,p,o,A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),u.$3(B.ala,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dr,v,v,v,B.ah)}}
C.bkQ.prototype={
B(d){var w=this,v=null,u=B.bV.j(0.15),t=A.I(B.bV,B.q,2),s=w.e,r=x.p
t=A.aC(v,A.p(v,A.w(A.a([A.X(s?K.a_c:X.MW,B.bV,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fa1,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f8_,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.eMT(w),A.U(s).k("M<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.w(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZE.prototype={
T(){return new C.aBa()},
bs(){return this.Q.$0()},
ge2(){return this.w}}
C.aBa.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xV:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i1r(w.r,w.f)
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
Pm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Pm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h9M(p.y,p.w)
w=3
return A.b(A.le(t.a.w,B.I2),$async$Pm)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZq(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Pm)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hE3(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(Ao.Gw(78,800),$async$Pm)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dmO(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Pm,v)},
c6C(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hY(B.o.u(1000*Date.now()),w,D.xV,null,null,null,"","","","","",1,!1,0)
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
s=v.aDl(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a9c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dmN(r),s,null,!0,!0,x.y),$async$a9c)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9c,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tL(j),h=l.a.e,g=A.U(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dmX(l),g),g.k("J.E"))
h=j?B.e_:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bvy,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.az,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ht(A.aL(!1,k,!0,new A.D(B.lS,A.X(B.e6,B.oH,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbGZ(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jB:B.iV
t=I.bBH(l.as)
if(l.as==null)s=A.X(B.oM,j?B.bs:B.bl,k,k,k,40)
else s=k
s=A.av(A.aC(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h4(u,t,s,k,42),A.ao(0,A.h4(B.bV,k,D.bHs,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc6z(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBc(t,"Full name",B.mu,1,1,i,B.m5)
u=l.y
u===$&&A.c()
u=A.w(A.a([t,B.R,new C.bhs(i,u,new C.dmY(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bpa],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dmZ(),A.U(o).k("M<1,eE<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bpc],q)
B.d.v(q,new A.M(f,new C.dn0(),A.U(f).k("M<1,eE<n?>>")))
o=A.w(A.a([t,B.am,new C.acN(i,r,"Who is their parent?",p,new C.dn1(l),k,o),B.aB,n,B.am,new C.acN(i,m,"Who is their spouse / partner?",q,new C.dn2(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBc(q,"Birth date",D.akd,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBc(m,"Birth place",B.a_r,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBc(n,"Date of death (if deceased)",D.amr,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBc(p,"Occupation",B.a0u,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.acO(i,"Identity",u,k),B.ac,new C.acO(i,"Family links",o,k),B.ac,new C.acO(i,"Life details",A.w(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBc(r,"Notes",B.l_,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBb(i,"Child order",l.ceb(l.at),new C.dn3(l),new C.dn4(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h_m(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dn5(l):k
B.d.v(r,A.a([B.R,new C.aBb(i,"Visible in tree",u,w,new C.dn6(l),k)],v))}r.push(B.R)
w=j?B.jB:B.iV
u=A.m(14)
t=A.I(j?B.e1:B.bP,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iF(k,B.bV,k,B.af,k,new C.dn7(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ahh,k,k,k))
r.push(B.by)
w=j?B.aQ:B.az
j=j?B.e1:B.bP
r.push(A.B(A.a([A.E(A.dU(B.nB,new C.dn_(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bd,A.E(A.bG(D.eNr,l.gc6B(),A.bn(B.aV,k,k,0,B.c,k,B.cl,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ek(B.hc,k,B.af,h,new A.a7(420,k,A.c9(A.w(r,B.aj,k,B.e,B.P,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),k),D.ai8,k,B.ahx,new A.b7(g,B.Y),k,k)},
ceb(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acO.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jB:B.iV,s=A.m(16)
return A.w(A.a([new A.D(D.aiy,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e1:B.bP,B.q,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bht.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e_:B.c,r=A.m(12),q=A.I((t?B.e1:B.bP).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.az,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.ez,u,B.vq,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cw,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bV,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acN.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e_:B.c,s=A.m(12),r=A.I((u?B.e1:B.bP).j(0.85),B.q,1),q=A.X(B.rd,u?B.bs:B.bl,v,v,v,v),p=A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e_:B.c
return A.p(v,new A.Du(A.Sk(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cw,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bhs.prototype={
B(d){var w=new C.dn8(this)
return A.B(A.a([w.$3(D.ZL,"Male",B.NF),B.ab,w.$3(D.ajr,"Female",B.Ns),B.ab,w.$3(D.xV,"Other",B.nl)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBb.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jB:B.iV,r=A.m(14),q=A.I(t?B.e1:B.bP,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.az,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.w(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHn(u,B.yk,w.f,v),B.bp,new C.aHn(u,B.hz,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ej,v,v,v)}}
C.aHn.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bV.j(0.12)
else w=s.c.a?B.e_:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bV
else t=(s.c.a?B.bs:B.bl).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.acP.prototype={
bPN(d){switch(d.a){case 0:return B.bV
case 1:return B.bC
case 2:return B.cV}},
bPO(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWC(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A7(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e_:B.c
u=A.m(12)
t=A.I((w?B.e1:B.bP).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bV,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.az,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cy,B.xE,p,p,1/0)},
adF(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jB:B.iV,s=A.m(16),r=A.I(v?B.e1:B.bP,B.q,1)
return A.w(A.a([new A.D(D.aiy,u,w),A.p(w,A.w(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hpi(r,q),o=q.c,n=t.bPN(o),m=I.bBH(q.f),l=t.e.a,k=l?B.e_:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kv?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h4(u,m,m==null?A.X(B.oM,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ek,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bPO(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.ms,s,s,s),s,s,s)
u=x.p
i=A.a([t.A7("Full name",i,B.mu)],u)
if(p>0)i.push(t.A7("Child order","#"+p,B.Ny))
r=A.a([h,B.at,r,B.aR,l,B.R,v,B.by,t.adF("Identity",i),B.ac,t.adF("Life details",A.a([t.A7("Birth date",q.w,D.akd),t.A7("Birth place",q.x,B.a_r),t.A7("Date of death",q.y,D.amr),t.A7("Occupation",q.z,B.a0u)],u)),B.ac,t.adF("Family links",A.a([t.A7("1. Parent",t.aWC(q.d),B.FS),t.A7("2. Spouse",t.aWC(q.e),B.Nr)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adF("Notes",A.a([t.A7("Notes",q,B.l_)],u))],u))
r.push(B.by)
r.push(A.bG(B.Jj,new C.dni(d),A.bn(B.aV,s,s,s,s,s,B.cl,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eK(s,k,new A.cT(B.lE,A.c9(A.w(r,B.aj,s,B.e,B.P,0,B.p),B.r,s,B.y,s,B.xK,s,s,B.ag),s),s,s,s,B.Fq,B.d0,s,new A.b7(j,B.Y),s)}}
C.JG.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xN,A.ht(A.aF(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.ap0.prototype={
eR(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ac())
w=u.c
v=A.U(w).k("M<1,a5<n,@>>")
w=A.C(new A.M(w,new C.c86(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j3(w,new C.c87(),t,x.U))
return s}}
C.ap1.prototype={
T(){return new C.aCL(A.a([],x.bF))},
gde(){return this.c}}
C.aCL.prototype={
a_(){this.a1()
this.Jp()},
Jp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c8a(t.a.c),$async$Jp)
case 3:r=e
w=4
return A.b(C.AD(t.a.c),$async$Jp)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qT(q,new C.dTu(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dTv(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jp,v)},
yi(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
K7(d,e){return this.cD8(d,e)},
cD8(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$K7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dTz(q,e))
t=3
w=6
return A.b(d.$0(),$async$K7)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dTA(q))
$.eV.ms()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$K7,v)},
Xa(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p5(r,s.c,s.e),$async$Xa)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K7(new C.dTr(t),"Preparing download\u2026"),$async$Xa)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xa,v)},
Xe(d){return this.bNL(d)},
bNL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p5(r,s.c,s.e),$async$Xe)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.K7(new C.dTs(t,d),"Preparing file\u2026"),$async$Xe)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xe,v)},
afw(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afw=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.x5.c6().LU(B.Qz,B.tP,!0),$async$afw)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jq(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.aa(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.Gv()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afw,v)},
XR(d){return this.bYa(d)},
bYa(d){var w=0,v=A.j(x.H),u=this
var $async$XR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.K7(new C.dTt(u,d),"Restoring family trees\u2026"),$async$XR)
case 2:return A.h(null,v)}})
return A.i($async$XR,v)},
XQ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afw(),$async$XQ)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XR(s),$async$XQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XQ,v)},
a1F(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p5(r,s.c,s.e),$async$a1F)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K7(new C.dTy(t),"Creating QR code\u2026"),$async$a1F)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1F,v)},
a1g(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CM()){t.yi("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ck(A.e8(new C.dTw(),!0,null,x.N)),$async$a1g)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XR(r),$async$a1g)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1g,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.Aw:B.iA,m=o?D.afM:B.aQ,l=o?B.aK:B.bP,k=o?B.aQ:B.az,j=new C.d7_(n,m,l,k,o?B.bJ:B.bl)
l=A.aH(p,p,p,p,A.X(B.eD,k,p,p,p,20),p,p,p,new C.dTC(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d6y(!0,B.js,B.aP,B.aP,q.r?p:q.gcu5(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcqe()
t.push(A.E(C.d6y(!s,B.j0,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d6y(!1,B.hA,B.aV,B.bV,q.r?p:q.gbNE(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d6y(!1,M.yq,B.aF,B.aM,q.r?p:q.gbY7(),j,s,"Upload backup file"),1))
l=A.a([new C.bdN(v,l,p),B.kF,new C.ac4(j,"QR restore",p),B.R,t,B.d7,new C.ac4(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kF,new C.ac4(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dTD(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.YU,p,p,B.ag,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([K.aOc,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.B9,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d7_.prototype={}
C.bdN.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kb,28)],x.V)
t=A.ao(p,A.X(B.u6,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bQd,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oj,A.E(A.w(A.a([D.fiA,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bY1,B.n),p,p,p,p,p,p,p,p)}}
C.ac4.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdL.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aP.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aP.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eF(A.de(new A.D(E.Yy,A.w(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.r9,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bD,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cw,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.bdQ.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eF(new A.D(B.eR,A.B(A.a([A.p(v,D.bPq,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.r9,v,v,v),B.bd,A.E(A.w(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hA,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.ZZ.prototype={
T(){return new C.aCK()},
gde(){return this.c}}
C.aCK.prototype={
a_(){this.a1()
this.a8J()},
a8J(){var w=0,v=A.j(x.H),u=this,t
var $async$a8J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b13(u.a.c,B.CR),$async$a8J)
case 2:t=e
if(u.c!=null)u.m(new C.dTm(u,t))
return A.h(null,v)}})
return A.i($async$a8J,v)},
agU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dTn(q))
t=4
p=A.hbq(q.a.d,B.CR)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arf(n.e,m,l,B.CR,p,n.f),$async$agU)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dTo(q))
q.c.J(x.q).f.U(D.eVW)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.eg(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dTp(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agU,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jf:B.pI,n=p?B.ic:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fyj,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pN(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.w(A.a([B.N,u,B.by,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.br,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcpX()
if(u)u=B.IS
else u=A.X(r.e===!0?B.hn:B.akc,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eC(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.fP,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i1,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zK,new C.dTq(d),A.bn(B.aV,q,q,q,q,B.fP,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.a9,A.w(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a__.prototype={
T(){return new C.biX(A.z8(B.xt,B.nI,B.ub))}}
C.biX.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c7(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fqq,w,w,w,1,w,!0),B.w,A.z7(this.d,B.bU,new C.dTE(this,d)),w,!1,!1,w,w)}}
C.aXZ.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Q3,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ly.prototype={}
C.a5S.prototype={
T(){return new C.biD(null,null)}}
C.biD.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tE,v,1,v,w)
w.e=A.bj(v,B.pO,v,1,v,w)
w.a.toString
w.d.cI(0)
w.e.cI(0)},
bu(d){var w,v,u=this
u.bG(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cI(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cI(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.buo()},
B(d){var w,v,u=this,t=B.d.dM(D.a3d,new C.dEQ(u),new C.dER())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ctA(A.c6(new A.h8(A.a([w,v],x.dS)),new C.dES(u,t),null),!0)}}
C.biC.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_V(d,e)
break
case"house":p.m3(d,e,D.d1s)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdE()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m8(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AR(d,e,12)
p.xT(d,e,B.lf,5,14)
break
case"grocery":p.ceV(d,e)
break
case"calculator":p.ceC(d,e)
break
case"lumber":p.cf2(d,e)
break
case"kitchen":p.ceY(d,e)
break
case"landscape":p.m3(d,e,D.d1Y)
s=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.F(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.F(new A.cV(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.F(new A.cV(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.F(new A.ap(t,w))
s.F(new A.ap(0,w))
s.F(new A.bE())
w=A.N()
w.r=B.eA.j(0.85).gp(0)
d.aQ(s,w)
p.AR(d,e,8)
p.xT(d,e,B.iY,4,18)
break
case"plumbing":p.cfb(d,e)
break
case"electrical":p.m3(d,e,D.dcm)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.aZ(new A.a9(0,0,0+e.a,0+e.b),u)
p.m8(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m8(d,e,B.lJ.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AR(d,e,10)
break
case"store":p.cfl(d,e)
break
case"paint_remodel":p.cf6(d,e)
break
case"roofing":p.cfd(d,e)
break
case"warehouse":p.cfs(d,e)
break
case"vehicles":p.cfq(d,e)
break
case"farm":p.ceP(d,e)
break
case"restaurant":p.cfc(d,e)
break
case"tools":p.cfo(d,e)
break
case"wallet":p.cfr(d,e)
break
case"concrete":p.ceI(d,e)
break
case"blueprint":p.ceA(d,e)
break
default:p.b_V(d,e)}},
m3(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).aw(0,v))
d.aZ(v,w)},
m8(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gdE()/2-h
$.W()
w=A.N()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c_(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xT(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdE()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AR(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b_V(d,e){var w,v=this
v.m3(d,e,D.daW)
w=v.c
v.m8(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m8(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bLS(d,e,B.hY,w)
v.xT(d,e,B.c.j(0.7),6,8)},
bLS(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c_(new A.a9(16,q,t,q+3)),p)
p.delete()}},
ceV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.civ)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d_M[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m8(d,e,B.c.j(0.35),w,16)
j.xT(d,e,B.iY,5,12)},
ceC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m3(d,e,D.ciC)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdE()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h1(g,g,g,g,g,B.a4,B.c6,g,B.dP,B.c5)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d3x[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saW(0,new A.er(r,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a4(d,new A.u(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ciE[o]
l=B.km.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saW(0,new A.er(m,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a4(d,new A.u(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m8(d,e,B.c.j(0.35),w*1.5,14)
h.m8(d,e,B.eB.j(0.55),-v*3.141592653589793*2,8)
h.m8(d,e,B.Ax.j(0.4),r*2.8,22)
h.xT(d,e,B.px,8,10)
h.AR(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cf2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,Z.avQ)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hD)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h5,B.oz,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.es(p),n)
n.delete()}m.m8(d,e,B.h5.j(0.35),w,15)
m.AR(d,e,8)},
ceY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.d0g)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.E(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.E(r*0.13,0.7)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m8(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.xT(d,e,B.qM,4,14)},
cfb(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m3(d,e,D.cQu)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xT(d,e,B.oF,6,12)
l.m8(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cfl(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m3(d,e,D.cw3)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.ir)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fc,B.bL,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.es(q),o)
o.delete()}n.m8(d,e,B.c.j(0.3),w,16)
n.AR(d,e,8)
n.xT(d,e,B.v7,5,13)},
cf6(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.cWe)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.hf)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.ix,B.dv,B.bL,B.eu][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.es(p),o)
o.delete()}this.m8(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cfd(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.cTM)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xT(d,e,B.cr,7,11)},
cfs(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.cyL)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.hD)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cr,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.es(o),n)
n.delete()}this.m8(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cfq(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.dge)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hD)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.es(q),o)
o.delete()}this.AR(d,e,6)},
ceP(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.cZT)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lJ.j(0.75).gp(0)
d.af(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hk.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m8(d,e,B.lJ.j(0.35),w,14)},
cfc(d,e){var w,v,u,t,s,r,q,p,o=this
o.m3(d,e,D.d1h)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cg(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c_(r),p)
p.delete()}o.xT(d,e,B.qM,5,16)
o.AR(d,e,7)},
cfo(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.ddR)
w=m.c
v=w*3.141592653589793
m.m8(d,e,B.oz.j(0.55),v*3,10)
m.m8(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oz.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cfr(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.dgM)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.ir)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iY,B.lJ,q).gp(0)
n=p.H()
s.drawRRect(A.es(o),n)
n.delete()}m.AR(d,e,9)
m.m8(d,e,B.c.j(0.4),w*2.2,12)},
ceI(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.d6c)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.W()
s=A.N()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.f9(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bP.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
ceA(d,e){var w,v,u,t,s,r,q,p
this.m3(d,e,D.d2h)
$.W()
w=A.N()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.E(t*0.85,1)
$.W()
u=A.N()
u.r=B.dv.j(0.45).gp(0)
d.aZ(new A.a9(0,p,0+v,p+6),u)
this.m8(d,e,B.lf.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arX.prototype={
ZW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPf(),$async$ZW)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a87(s),$async$ZW)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZW,v)},
afx(d){return this.chH(d)},
chH(d){var w=0,v=A.j(x.H),u=this,t
var $async$afx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i9K(d),$async$afx)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afx,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jB:B.iV
w=x.p
v=A.a([C.aPD(!0,B.qE,1/0,B.pW,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b_,t,t,new A.D(B.vk,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.awN,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b_,B.b4,B.x,u,t,t),B.n),B.be))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bJd,D.feX,new C.cfG(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jF,t,t,t,t,B.cc)),1),B.ab,A.E(A.eC(D.bRr,D.ftu,this.gc8J(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jF,t,t,D.aYq,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fI(1.7777777777777777,A.aF(!1,B.a1,!0,B.qE,new A.an(B.W,t,B.b1,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aKH.prototype={
aT(){this.b_()
this.aY()
this.dL()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.aSz.prototype={}
C.aSy.prototype={}
C.aQy.prototype={}
C.YD.prototype={
T(){return new C.ay0()}}
C.ay0.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b5,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
JZ(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.J(x.q).f.U(D.eWq)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aSz(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e_:B.c,k=A.m(20),j=A.p(n,D.bR6,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.az,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bD,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cD,m?B.bs:B.bl,n,n,n,n),n,n,n,new C.cZf(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cw,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hbG(new C.cZg(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.az,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jB:B.iV
r=A.m(12)
q=A.m(12)
p=m?B.e1:B.bP
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cZh(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,R.IZ,n,n,n,n)
u=m?B.aQ:B.az
m=m?B.e1:B.bP
return A.eK(n,l,new A.cT(B.lE,A.c9(A.w(A.a([j,B.aR,i,B.at,w,B.N,v,B.aR,t,B.by,A.B(A.a([A.E(A.dU(B.de,new C.cZi(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.au,A.E(A.bG(D.ftJ,o.ga2_(),A.bn(B.aV,n,n,n,B.c,n,B.cl,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.P,0,B.p),B.r,n,B.y,n,B.Ba,n,n,B.ag),n),n,n,n,W.Bb,B.d0,n,new A.b7(k,B.Y),n)}}
C.YC.prototype={
T(){return new C.ay_()}}
C.ay_.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
JZ(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.J(x.q).f.U(D.eU7)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aSy(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e_:B.c,n=A.m(20),m=A.p(q,D.bNH,B.f,q,q,new A.o(B.bV.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bD,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cD,p?B.bs:B.bl,q,q,q,q),q,q,q,new C.cZb(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ajZ,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jB:B.iV
t=A.m(12)
s=A.m(12)
r=p?B.e1:B.bP
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cZc(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kG,q,q,q,q)
w=p?B.aQ:B.az
p=p?B.e1:B.bP
return A.eK(q,o,new A.cT(B.lE,A.c9(A.w(A.a([m,B.aR,l,B.aB,v,B.by,A.B(A.a([A.E(A.dU(B.de,new C.cZd(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.au,A.E(A.bG(D.fAz,this.ga2_(),A.bn(B.bV,q,q,q,B.c,q,B.cl,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.P,0,B.p),B.r,q,B.y,q,B.Ba,q,q,B.ag),q),q,q,q,W.Bb,B.d0,q,new A.b7(n,B.Y),q)}}
C.Ya.prototype={
T(){return new C.awK()}}
C.awK.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.as(B.as,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b5,B.aN),w)
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
v.a2()},
gJk(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiJ(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb2P(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNJ(d){var w,v=B.k.D(this.gJk()+d,0.25,999999),u=B.k.k6(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saW(0,u)
this.m(new C.cwP())},
ax5(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jB:B.iV,s=A.m(14),r=A.m(14)
u=u?B.e1:B.bP
return A.bs(w,new A.b4(4,s,B.dg),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.aap),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c8K(d,e,f){return this.ax5(d,e,f,null)},
JZ(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiJ()<=0){s.c.J(x.q).f.U(D.eYh)
return}r=s.c
r.toString
v=s.gJk()
u=s.gaiJ()
t=s.gb2P()
A.a6(r,!1).O(new C.aQy(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tL(n),l=n?B.e_:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bV.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bHa,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bD,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cw,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cD,n?B.bs:B.bl,o,o,o,o),o,o,o,new C.cwV(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.ax5(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NE),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,R.IZ,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jB:B.iV
t=A.m(14)
s=A.I(n?B.e1:B.bP,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yk,n?B.aQ:B.az,o,o,o,20),o,o,o,new C.cwW(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bSZ,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cwX(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hz,n?B.aQ:B.az,o,o,o,20),o,o,o,new C.cwY(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.au,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.ax5(m,"Amount","0.00",B.i2),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cwZ(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cWH,new C.cx_(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.N,s,B.ac,A.bW(B.bA,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c8K(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cx0(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kG,o,o,o,o)],w))}i.push(B.aR)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bV.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJk()===B.k.k6(p.gJk())?B.k.N(p.gJk()):p.gJk()
s=p.gb2P()
r=A.AF(p.gaiJ())
i.push(A.p(o,A.B(A.a([A.E(A.w(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCt(p.gJk()*p.gaiJ(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jm,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.e1:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cx1(d),h),1),B.au,A.E(A.dn(D.anv,D.fwy,p.ga2_(),A.bn(B.aV,o,o,0,B.c,o,B.cl,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eK(o,l,new A.cT(V.aaO,A.c9(A.w(i,B.aj,o,B.e,B.P,0,B.p),B.r,o,B.y,o,Ad.r7,o,o,B.ag),o),o,o,o,B.Ml,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0K.prototype={
T(){return new C.bv3()}}
C.bv3.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b5,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e_:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.az,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jB:B.iV
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.far(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dU(B.de,new C.fas(d),s),1)
r=A.bn(B.bV,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eK(s,q,new A.D(B.Ba,A.w(A.a([o,B.aB,v,B.aR,A.B(A.a([u,B.au,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fat(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.ab7.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Fp.prototype={
T(){return new C.bv1(null,null)}}
C.bv1.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bpK,null,1,null,v)
w.cI(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bwM()},
gbyd(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bV,B.aZ],x.O)
case 2:return A.a([B.bv,B.aV,B.aZ],x.O)
case 3:return A.a([B.aP,B.ce,B.jX],x.O)
case 4:return A.a([B.hw,B.bV,B.fd],x.O)
case 0:return A.a([B.aV,B.bV,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ew(A.c6(v,new C.fap(this,new C.tL(w.ax.a===B.I)),null),null)}}
C.awD.prototype={
T(){return new C.bv2(null,null)}}
C.bv2.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.na,null,1,null,v)
w.cI(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bwN()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.faq(this),null)}}
C.bv0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iK(v))
w=A.N()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.N()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aQ(u,w)
w=A.x3(u)
t=A.a([],x.f5)
w=new A.vy(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jV('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hh(w,r)
w.ju()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRa(d,q,r,o,0,0.2,4.2,0.92)
p.aRa(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRa(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hxg(e.a.a,e,t,t+f*i,!0),r=A.bAQ(s.gbL().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bS
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.H6,null).aw(0,r))
d.aQ(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aMS.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.aMT.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.tL.prototype={}
C.arW.prototype={
T(){return new C.aEg()},
ge2(){return this.c}}
C.aEg.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.ago()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.L3(w,v)
this.a2()},
ago(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ago=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAY(t.c,t.d.a),$async$ago)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eK2(u,s))
return A.h(null,v)}})
return A.i($async$ago,v)},
PM(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eJU(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.L3(t,s),$async$PM)
case 2:if(u.c!=null)u.m(new C.eJV(u))
return A.h(null,v)}})
return A.i($async$PM,v)},
Qh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.eK0(t,new C.tL(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qh)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a87(q),$async$Qh)
case 6:case 5:t.m(new C.eK1(t,r))
w=7
return A.b(t.PM(),$async$Qh)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qh,v)},
Vq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i9v(r),$async$Vq)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eJP(t,new C.qX(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PM(),$async$Vq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vq,v)},
cdM(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hpe(t,new C.eJT(u),w,v)},
aav(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aYc,w,w,B.n),w,22,w,w,w,w,w,22)},
a9A(d){return this.bK7(d)},
bK7(d){var w=0,v=A.j(x.H),u=this
var $async$a9A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eJS(u,d))
w=2
return A.b(u.PM(),$async$a9A)
case 2:return A.h(null,v)}})
return A.i($async$a9A,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bZ:B.iA,d=A.m(8),a0=A.X(Q.a_9,f?B.bs:B.bl,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.Fx,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eK3(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b1,B.r,A.a([A.bw(A.m(22),C.aPD(!0,A.m(22),1/0,B.pW,g,d,1/0),B.aq),A.ao(10,A.dn(D.bLK,D.fyQ,h.gb0H(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bV.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b1,B.r,A.a([C.aPD(!0,A.m(16),1/0,B.N6,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a8(B.b_,B.b4,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.be),A.ao(g,h.aav(!0),g,g,8,g,8,g),A.ao(g,A.cuk(h.aav(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cuk(h.aav(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cuk(h.aav(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bHK,D.fsu,h.gb0H(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bUz,B.n),g,g,g,g,B.lS,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b7F,B.nP,B.h7],u):A.a([B.aZ,B.aV,B.bV],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jI,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h8,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCt(h.d.gwU(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cw,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fU.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aP.j(0.28),B.cJ,14)],t)
j=B.aP.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.buj,A.B(A.a([o,B.au,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eF(new A.D(Ai.B5,A.w(A.a([A.p(g,D.an4,B.f,g,g,new A.o(j,g,A.I(B.aP.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.h1,D.fhE],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcdL(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fI(1.7777777777777777,d,g),B.aR,w,B.N,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ak.a0Q,D.ffy,h.gbyG(),A.bn(B.aV,g,g,g,B.c,g,B.ii,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e_:B.c
v=A.m(14)
u=A.I(f?B.e1:B.bP,B.q,1)
t=A.X(B.a_u,f?B.bs:B.bl,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.w(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.r8,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eK4(h,new C.tL(f)),A.U(w).k("M<1,r>")))
if(h.e)d.push(new A.D(B.AZ,A.av(A.mJ(g,f?B.bs:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bm(!0,A.w(A.a([new A.D(B.B3,a0,g),A.E(A.c9(A.w(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xL,g,g,B.ag),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bCi(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e_:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b_Y,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hP:B.hb,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcTd()
v=A.AF(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.F,u,B.b9,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bV.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCt(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h9,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DU(A.B(A.a([m,A.E(new A.D(B.aha,A.B(A.a([l,B.bd,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cD,(r?B.bs:B.bl).j(0.75),u,u,u,20),u,u,u,new C.eJQ(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aZP,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d8,u,u,u,u)}}
C.ad9.prototype={
El(d){return this.bLu(d)},
bLu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$El=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p5(d,o,!1),$async$El)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ac.AX,null,x.H),$async$El)
case 4:s=t.d
w=5
return A.b(C.fHz(!0,o,s),$async$El)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gk(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$El)
case 6:p=f
w=7
return A.b(A.p4(o,!1),$async$El)
case 7:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$El,v)},
ZX(d){return this.cu6(d)},
cu6(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p5(d,s,!1),$async$ZX)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hB(d,new C.arQ(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p4(s,!1),$async$ZX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZX,v)},
PN(d){return this.cq9(d)},
cq9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hB(d,D.aGd,!0,"NgmyWorksheetProjectScan",x.N),$async$PN)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCu(s),$async$PN)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.J(x.q).f.U(D.eXq)
w=1
break}q=C.h1G(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$PN)
case 5:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PN,v)},
ZY(d){return this.cC4(d)},
cC4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bC1(),$async$ZY)
case 3:s=f
if(s==null){w=1
break}r=C.h1G(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$ZY)
case 4:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZY,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tL(u),s=w.d.d.length,r=u?B.e_:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kb,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vr,A.p(v,A.w(A.a([w.csF(d,t,s),new A.D(D.btJ,A.w(A.a([w.b3K(t,"QR restore"),B.R,A.B(A.a([w.aZE(t,!0,B.js,B.aP,B.aP,new C.eK6(w,d),"Show to scan","QR code"),B.au,w.ax6(t,B.j0,B.b6,B.bu,new C.eK7(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b3K(t,"Backup files"),B.R,A.B(A.a([w.ax6(t,B.hA,B.aV,B.bV,new C.eK8(w,d),"Full copy","Backup file"),B.au,w.ax6(t,M.yq,B.aF,B.aM,new C.eK9(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
csF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f_,B.cY,B.fx],k):A.a([B.aZ,B.aV,B.bV],k)
w=A.ao(l,A.X(B.u6,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPD(!0,A.m(13),64,D.bCX,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aQL,l,l,l)
r=C.bCt(r.gwU(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bu6,A.w(A.a([v,A.B(A.a([s,B.er,A.E(A.w(A.a([u,B.at,t,B.N,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fD,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.eK5(d),l,l,l,A.nz(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aO1,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b3K(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZE(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.afM:B.aQ
if(e)w=B.aP.j(o?0.45:0.35)
else{w=o?B.e1:B.bP
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aP.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.r9,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.az,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eF(new A.D(E.Yy,A.w(A.a([t,B.ac,u,B.bD,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cw,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
ax6(d,e,f,g,h,i,j){return this.aZE(d,!1,e,f,g,h,i,j)}}
C.arQ.prototype={
T(){return new C.bkj()}}
C.bkj.prototype={
a_(){this.a1()
this.aeh()},
aeh(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aeh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCv(p.c,p.d),$async$aeh)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eJK(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJL(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeh,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.Aw:B.iA,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eD,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eJM(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zw],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f_,B.cY,B.fx],s):A.a([B.aZ,B.aV,B.bV],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dj,B.L,h,h)
p=C.bCt(p.gwU(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.w(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fD,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.YT,h,h,1/0)
t=g?D.bh0:B.c
q=A.m(24)
p=A.I(w?B.aP.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7v,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e8T)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pN(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aR)
n=w?B.aP:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aP:B.aV).j(0.35),B.q,1)
k=w?B.No:B.NV
k=A.X(k,w?B.aP:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ii,h,h,h))
return A.c7(h,f,A.bm(!0,A.w(A.a([new A.D(A7.My,e,h),A.E(A.c9(A.w(A.a([s,B.aR,A.p(h,A.w(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tN,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aij,h,h,B.ag),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arV.prototype={
T(){return new C.aEf(A.z8(B.LP,B.nI,B.ub))}}
C.aEf.prototype={
q(){this.d.q()
this.a2()},
aLK(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iO(w,d)},
c9B(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.i7p(t)
if(s!=null){this.aLK(s)
return}r=C.hge(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aLK(B.a.i(B.a.b3(r,B.a.cH(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aH(t,t,t,t,A.X(u.f?B.re:A2.Nu,t,t,t,t,t),t,t,t,new C.eJO(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Aw,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fsn,t,t,t,1,t,!0),q=A.z7(u.d,B.bU,u.gc9A()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c7(r,B.w,new A.an(B.W,t,B.b1,B.r,A.a([q,p,A.ao(32,A.p(t,D.fra,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jm,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJ2.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.NT.prototype={
T(){return new C.aEh(D.a9H,A.a([],x.D))},
bs(){return this.r.$0()},
ge2(){return this.c}}
C.aEh.prototype={
gcA0(){return J.bDD(this.e,0,new C.eKw())},
a_(){this.a1()
$.aW.c_$.push(this)
this.vD()},
q(){$.aW.hJ(this)
this.a2()},
j0(d){if(d===B.fv)this.vD()},
vD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CL(q.a.c).d6(0,B.k2),$async$vD)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eKs(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eKt(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vD,v)},
HN(d){return this.bIg(d)},
bIf(){return this.HN(null)},
bIg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i9x(l,d),$async$HN)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lh(l,r,q,D.d6p,new A.S(Date.now(),0,!1))
w=4
return A.b(C.L3(t.a.c,p),$async$HN)
case 4:o=f
w=5
return A.b(t.vD(),$async$HN)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.J(x.q).f.U(D.eUB)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.J(q).f.U(D.eWk)
else n.J(q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ep(m)
case 1:return A.h(u,v)}})
return A.i($async$HN,v)},
Ep(d){return this.cdx(d)},
cdx(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ep=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hB(s,new C.arW(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ep)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.L3(u.a.c,t),$async$Ep)
case 5:case 4:w=6
return A.b(u.vD(),$async$Ep)
case 6:return A.h(null,v)}})
return A.i($async$Ep,v)},
vp(d){return this.bYc(d)},
bYc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bC1(),$async$vp)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hB(r,D.aGd,!0,"NgmyWorksheetProjectScan",x.N),$async$vp)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCu(q),$async$vp)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.J(x.q).f
r.U(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h1G(s)
w=15
return A.b(C.L3(t.a.c,p),$async$vp)
case 15:o=f
w=16
return A.b(t.vD(),$async$vp)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.J(x.q).f.U(D.eWp)
w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ep(p)
case 1:return A.h(u,v)}})
return A.i($async$vp,v)},
NC(d){return this.bGW(d)},
bGW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cb(null,null,!0,null,new C.eKd(d),s,null,!0,!0,x.y),$async$NC)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oD(t.a.c,A.a([],x.D)),$async$NC)
case 6:w=7
return A.b(t.vD(),$async$NC)
case 7:s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eUG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NC,v)},
cdK(d){var w=this.c
w.toString
A.bS(B.K,null,new C.eKm(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4l(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jB
else w=B.c
v=A.m(16)
u=A.I(p?B.e1:B.bP,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.az,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.w(A.a([s,B.ac,t,B.bD,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vq,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_s(d,e){return this.cdy(d,e)},
cdy(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_s=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(B.K,null,new C.eKh(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_s)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hpe(r,new C.eKi(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NE(d,e),$async$a_s)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_s,v)},
b1i(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.ay
else t=h.a?B.aQ:B.az
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.B9,A.B(A.a([s,B.bd,t,A.X(B.ey,w?B.bs:B.bl,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
ckp(d,e,f,g,h,i){return this.b1i(!1,d,e,f,g,h,i)},
NE(d,e){return this.bH5(d,e)},
bH5(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l2(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NE)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAK(t.a.c,d.a),$async$NE)
case 6:w=7
return A.b(t.vD(),$async$NE)
case 7:r=t.c
if(r==null){w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NE,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tL(o),m=o?B.bZ:B.iA
if(q.f)o=D.b5y
else{w=q.bBt(n)
v=q.bXh(n)
u=q.gbyA()
if(o)t=B.jB
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aR,new C.Fp(A.p(p,A.B(A.a([q.aAE(N.N5,"Projects",n,D.a9H),q.aAE(B.vC,"Cashier",n,D.aVC),q.aAE(B.FS,"Family Tree",n,D.h4y)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ek,0.95,u,p),B.by],r)
w=q.d
if(w===D.a9H){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.az,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.awD(q.gaPV(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.ckr(n)],r))}else{o=q.a
if(w===D.aVC)u.push(new C.anW(o.c,n,p))
else{w=q.r
u.push(new C.ap3(o.c,o.d,o.e,o.f,new C.eKz(q),new C.eKA(q),new A.cx(w,x.b4)))}}o=A.c9(A.w(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.Ms,p,p,B.ag)}return A.c7(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bBt(d){var w=null,v=A.m(8),u=d.a,t=A.X(Q.a_9,u?B.bs:B.bl,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kV,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKa(this),w,w,w,w,w,w,w)},
gbyA(){switch(this.d.a){case 0:return D.a8Z
case 1:return D.fWc
case 2:return D.a9_}},
bXh(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bNx,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bys,A.aF(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bL3,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKe(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Fp(A.p(w,A.w(A.a([new A.D(E.YE,s,w),A.p(w,A.w(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.AF(this.gcA0()),w,w,w,w,w,w,D.fc_,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vp,B.jm,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fWb,w)},
aAE(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bl
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bl
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.ec,new A.dq(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iE,u,u,u,B.Fy,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eKv(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
ckr(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e_:B.c
u=A.m(15)
t=A.p(p,D.bL8,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bX1,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.az,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fp(A.p(p,A.w(A.a([t,B.d7,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRw(B.j0,"Scan QR",new C.eKp(q),d),1),B.au,A.E(q.aRw(M.yq,"Upload file",new C.eKq(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fCq,q.gaPV(),A.bn(B.aV,p,p,p,B.c,B.fP,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bva,1.05,D.a8Z,p)}w=J.b6(q.e,new C.eKr(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fp(A.w(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a8Z,p)},
aRw(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.w(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.far,B.L,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ah2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
ckq(d,e){var w,v,u=null,t=e.a,s=t?B.e_:B.c,r=A.m(14),q=A.I(t?B.e1:B.bP,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.m(14),n=t?B.bs:B.bl
n=A.bw(B.Vi,new A.fI(1.7777777777777777,C.aPD(!0,B.fw,1/0,N.N5,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.w(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.AF(d.gwU()),u,u,u,u,u,u,D.f8z,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.w(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Ag.NH,t?B.bs:B.bl,u,u,u,u),u,u,u,new C.eKn(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eKo(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e5,u,u,u,1/0)}}
C.bwP.prototype={}
C.qX.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcTd(){var w,v,u,t,s=this.c
if(s===B.k.k6(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lh.prototype={
gwU(){return B.d.cK(this.d,0,new C.cwg())},
ag(){var w=this,v=w.d,u=A.U(v).k("M<1,a5<n,@>>")
v=A.C(new A.M(v,new C.cwf(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bbr(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lh(w.a,w.b,v,u,w.e)},
bb8(d){return this.bbr(d,null)},
Sv(d){return this.bbr(null,d)}}
C.Hr.prototype={
a5(){return"FamilyGender."+this.b}}
C.hY.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hl3(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDl(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hY(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aki.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kB.prototype={
gao5(){var w=this.f
return new A.a_(w,new C.bNm(),A.U(w).k("a_<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("M<1,a5<n,@>>")
v=A.C(new A.M(v,new C.bNl(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i_S(w.y)],x.N,x.z)},
yz(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kB(w.a,v,u,t,s,r,w.r,q,p,o)},
bbq(d,e){var w=null
return this.yz(w,w,d,e,w,w,w,w)},
cIV(d,e,f,g,h,i,j){return this.yz(d,e,f,g,h,i,j,null)},
aDq(d,e){var w=null
return this.yz(w,w,w,d,w,w,e,w)},
cHo(d){var w=null
return this.yz(w,w,w,w,w,w,d,w)},
cHM(d){var w=null
return this.yz(w,w,w,w,w,w,w,d)},
aDc(d){var w=null
return this.yz(w,w,w,w,d,w,w,w)},
cIq(d,e,f){var w=null
return this.yz(w,d,w,e,w,w,f,w)},
cHb(d){var w=null
return this.yz(w,w,d,w,w,w,w,w)},
cHZ(d,e){var w=null
return this.yz(d,w,w,w,w,e,w,w)}}
C.cwh.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cwi.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGk.prototype={}
C.b7Y.prototype={
bB(d){this.a=d.a
this.b=d.b},
cU(d){var w=new C.b7Y()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7X.prototype={
gwc(){return!0},
gFW(){return this.z.b<this.b.length},
aT8(d){switch(0){case 0:return d.a.c}},
aSQ(d){switch(0){case 0:return d.a.d}},
bQH(d,e){switch(0){case 0:return new A.hL(d,e)}},
bQ4(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h4(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iD(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Hb(b4)
switch(0){case 0:v=b5.b
u=new A.ky(0,v,0,1/0)
t=w===B.Tj
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.h4(b4,u,!0)
f=b1.aT8(g)
f.toString
e=b1.aSQ(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGk(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGk(k,j,i))}d=s.length
switch(0){case 0:q=b5.cu(new A.hL(m,l))
a0=q.a
a1=q.b
b1.a=new A.iD(0,0,a0,a1)
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
for(q=B.d.fN(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aT8(g)
e=b1.aSQ(g)
e.toString
a9=b1.bQ4(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bQH(a6,a3+a9)
b0=g.a
g.a=new A.iD(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h0(d){var w,v,u,t,s,r=this
r.li(d)
w=d.b
w.i9()
v=A.dp()
u=r.a
v.ea(u.a,u.b,0,1)
w.oU(0,v)
for(u=r.z,u=B.d.dr(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].h0(d)
w.nh(0)},
Gr(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i9(){return this.z}}
C.bv4.prototype={}
var z=a.updateTypes(["aA<~>()","R(hY)","R(kB)","~()","R(nc)","a5<n,@>(kB)","G(kB,kB)","n(hY)","kB(a5<@,@>)","R(lh)","R(uc)","nc(a5<@,@>)","uc()","G(lh,lh)","hY(a5<@,@>)","a5<n,@>(hY)","R(qX)","aA<~>(lh)","eE<n?>(hY)","G(hY,hY)","n?(hY)","a5<n,@>(nc)","ZE(Y)","n(n)","acP(Y)","r(oe)","G(nc,nc)","hY(hY)","cL(bv<n,FC>)","cL(JS)","~(hY)","G?(hY)","hY()","ai<hY>()","R(ub)","R(JS)","D(hY)","~(Hr)","R(aen)","r(Hr,n,a0)","Z2(Y)","bv<n,ai<a5<n,@>>>(n,ai<nc>)","~(G)","+count,id,name(G,n,n)(kB)","kB(kB)","ZZ(Y)","a__(Y)","R(ly)","ly()","n(kB)","a0K(Y)","YD(Y)","YC(Y)","Z0(Y)","Z4(Y)","r(qX)","ad9(Y)","~(lZ)","aA<~>([n?])","L(L,lh)","r(lh)","L(L,qX)","a5<n,@>(qX)","qX(a5<@,@>)","YB(Y)","St(Y)","cr(Hq)","lh(a5<@,@>)","ub()","n(lh)","a5<n,@>(lh)","n(S)","G(hY)","kB(a5<n,@>)","Ya(Y)"])
C.fAd.prototype={
$1(d){return d.a+" "+d.b},
$S:123}
C.fAc.prototype={
bkC(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qP(s,d,B.hB,"book",E.Fc),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KS(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bkC(d)},
$S:332}
C.fAe.prototype={
$1(d){return d.b},
$S:123}
C.fJq.prototype={
$1(d){var w=null
return A.eK(w,B.K,new F.Pe(this.a,this.b,w),w,w,0,B.Yz,B.d0,w,w,w)},
$S:48}
C.fp2.prototype={
$1(d){return d!=null},
$S:206}
C.fp3.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:206}
C.fp8.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:168}
C.fxX.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.h7(w,B.rE,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.el,w,!0,w,w,w,w),w),u=f?B.el:B.vx
return new A.nK(D.bqN,A.a9n(A.a([new A.fR(130,w,v),new A.yQ(1,B.FL,A.fb(e,w,w,w,A.h7(w,g==null?D.eba:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xp,B.lu))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1918}
C.fxW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vq(999)
f=A.wX(A.lt(h,A.fb("Cashier",h,h,h,A.h7(h,D.zi,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.el,h,!0,h,h,h,h),h),h,new A.kz(D.eb1,h,f,B.hH,h),h,h,D.brg,h))
w=A.wX(A.fb("Debt receipt",h,h,h,A.h7(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.el,h,!0,h,h,h,h),h))
v=A.wX(A.fb(C.wI(new A.S(Date.now(),0,!1),!0),h,h,h,D.a7C,h))
u=A.vq(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.h7(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.el,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a7C,h)
q=A.vq(10)
p=x.C
u=A.lt(h,A.yJ(A.a([s,new A.fR(h,2,h),r,new A.fR(h,10,h),A.lt(h,A.yJ(A.a([A.fb("Amount owed",h,h,h,D.a7C,h),new A.fR(h,2,h),A.fb(A.AF(t.c),h,h,h,A.h7(h,D.zi,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.el,h,!0,h,h,h,h),h)],p),B.r0,B.lu),h,new A.kz(B.p6,h,q,B.hH,h),h,h,D.bqu,1/0)],p),B.r0,B.lu),h,new A.kz(E.aHt,h,u,B.hH,h),h,h,D.bsi,1/0)
q=new A.nt(D.eb4,0.9,B.kM)
r=A.vq(12)
s=i.c
o=s.$2("Original due",C.wI(t.r,!1))
n=s.$2("Current due",C.wI(t.f,!1))
m=i.d
l=new A.nt(m,1.1,B.kM)
k=A.vq(8)
j=i.a
k=A.a([o,n,new A.fR(h,6,h),A.lt(h,A.wX(A.fb(t.gaKf(),h,h,h,A.h7(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.el,h,!0,0.5,h,h,h),h)),h,new A.kz(h,new A.py(l,l,l,l),k,B.hH,h),h,h,D.bro,1/0),new A.fR(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zi))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zi))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.h7(h,B.rE,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.el,h,!0,h,h,h,h),h)
m=A.U(o).k("M<1,S1>")
o=A.C(new A.M(o,new C.fxV(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fR(h,4,h),n,new A.fR(h,6,h),new C.b7X(5,5,new C.b7Y(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fR(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fR(h,8,h),w,new A.fR(h,3,h),v,new A.fR(h,16,h),u,new A.fR(h,10,h),A.lt(h,A.yJ(k,B.xp,B.lu),h,new A.kz(h,new A.py(q,q,q,q),r,B.hH,h),h,h,B.ahe,1/0)],p)
w=j.a
if(w!=null){v=new A.nt(B.Ie,1,B.kM)
B.d.v(f,A.a([new A.fR(h,16,h),A.fb("Debtor signature",h,h,h,A.h7(h,B.rE,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.el,h,!0,h,h,h,h),h),new A.fR(h,6,h),A.lt(h,new A.HH(w,B.Vt,h,h),h,new A.kz(h,new A.py(v,v,v,v),A.vq(6),B.hH,h),82,h,B.Mw,1/0)],p))}f.push(new A.fR(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.f1u,h))
f.push(new A.fR(h,18,h))
f.push(A.wX(A.fb("NGMY.ORG",h,h,h,A.h7(h,D.zi,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.el,h,!0,1.8,h,h,h),h)))
return f},
$S:437}
C.fxV.prototype={
$1(d){var w=null,v=new A.nt(D.If,0.7,B.kM),u=A.vq(999)
return A.lt(w,A.fb(C.wI(d,!1),w,w,w,A.h7(w,D.If,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.el,w,!0,w,w,w,w),w),w,new A.kz(w,new A.py(v,v,v,v),u,B.hH,w),w,w,D.bwx,w)},
$S:1919}
C.c1s.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.m(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wI(d,!1),w,w,w,w,w,w,D.f83,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eC,w,w,w)},
$S:1920}
C.fJW.prototype={
$1(d){var w=null,v=A.aI(d,B.bW,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bOp,w,w,w,new C.fJT(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eK(w,B.K,new A.cT(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.Yp,A.w(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.co,A.c9(A.w(A.a([new A.ew(new C.aY0(r,w),s),B.R,A.B(A.a([A.E(A.eC(B.yB,D.fyM,new C.fJU(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f9,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a0G,D.fvj,new C.fJV(r,d),A.bn(B.aZ,w,w,w,B.c,w,B.f9,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.r,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.az,0,w,w,w,w,w,B.ah),w),w,w,0,Aj.YM,B.d0,w,w,w)},
$S:48}
C.fJT.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.fZ),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dD.gaN(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rU(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fEx(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.J(x.q).f
s.U(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJO.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eK(w,B.az,A.w(A.a([new A.D(D.bs6,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nA,w,w,w),1),A.aH(w,w,w,w,B.ls,w,w,w,new C.fJM(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.co,new A.D(B.fW,A.bw(A.m(14),A.fO(t,B.A,w,w,B.ci,B.du,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Ma,new A.a7(1/0,w,A.dn(B.oX,D.aRd,new C.fJN(t,this.c,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.Mm,B.d0,w,new A.b7(v,B.Y),w)},
$S:48}
C.fJM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rU(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fK_.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eK(w,B.az,new A.D(D.bse,A.w(A.a([A.B(A.a([D.bxz,A.aH(w,w,w,w,B.ls,w,w,w,new C.fJY(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.ew(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.ba6(s.ax,w),B.av),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.oX,D.aRd,new C.fJZ(t,s,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:48}
C.fJY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.fZ),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eT(B.dD.gaN(s))
w=5
return A.b(A.rU(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fsT.prototype={
$1(d){return d.a===this.a},
$S:263}
C.dFI.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dFt.prototype={
bjR(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e_:B.c
s=u.a
w=2
return A.b(A.bS(t,null,new C.dFw(s,q,e),p,!0,!0,!1,B.Iv,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dFx(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bjR(d,e)},
$S:1921}
C.dFw.prototype={
$1(d){var w,v=null,u=this.c===B.w6,t=u?D.dcB:D.d8F
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.az,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.ahO,A.w(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ij(!0,v,v,B.y,L.aOj,new C.dFv(this.a,w,t,d),t.length,v,B.dS,B.ag,!0)],x.p),B.aj,v,B.e,B.P,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dFv.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bs:B.bl).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aY_(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dFu(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dFu.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dFx.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dFr.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:95}
C.dFs.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.cZ(e,!1,A.iq(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e1(new C.dFq(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:31}
C.dFq.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e_:B.c,f=A.m(14),e=A.I((h?B.bs:B.bl).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.ek,A.X(B.cD,i.a.d.a?B.bs:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFb(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aS2("Name")
r=l.a
q=r.d==null?k:new C.dFc(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bo:B.lL
n=A.I(B.cY.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bbj(new A.D(B.fB,A.aL(!1,p,!0,A.p(B.A,C.aY_(m==null?"\ud83d\udc64":A.fyL(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kG,k,B.a7m,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aSG("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dFd(r,a0),r.d===B.w6),1),B.ab,A.E(i.aSG("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dFi(r,a0),r.d===B.a4l),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.hj(D.bMN,D.fx7,new C.dFj(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uf(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aS3("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bs:B.bl).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wI(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.w(A.a([t,B.bD,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bJE],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFk(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aS2("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b_E(r.b.length!==0,B.mu,new C.dFl(r,i,a0),new C.dFm(r,a0),"Upload from gallery","ID photo"))
v.push(i.b_E(r.c.length!==0,D.bCV,new C.dFn(r,i,d,a0),new C.dFo(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ah.a7d("Signature (optional)",t,new C.dFp(a0),new C.dFe(a0,t),new C.dFf(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bl
s=(i?B.bs:B.bl).j(0.28)
s=A.E(A.dU(E.aR6,new C.dFg(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.tH,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bn(B.cY,k,k,k,B.c,k,B.tH,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uK,k,k,k),new C.dFh(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.c9(A.w(v,B.aj,k,B.e,B.P,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vt,B.jm,k,k,360)},
$S:160}
C.dFb.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFc.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFd.prototype={
$0(){return this.b.$1(new C.dFa(this.a))},
$S:0}
C.dFa.prototype={
$0(){var w=this.a
w.d=B.w6
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFi.prototype={
$0(){return this.b.$1(new C.dF9(this.a))},
$S:0}
C.dF9.prototype={
$0(){var w=this.a
w.d=B.a4l
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFj.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wM(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dF8(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dF8.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcg(),w.gcd(),w.gct(),0,0,0,0,0)},
$S:0}
C.dFl.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pa(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dF7(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dF7.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dFm.prototype={
$0(){return this.b.$1(new C.dF6(this.a))},
$S:0}
C.dF6.prototype={
$0(){return this.a.b=""},
$S:0}
C.dFn.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e_:B.c
w=3
return A.b(A.bS(q,null,new C.dF4(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pa(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dF5(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dF4.prototype={
$1(d){var w=null
return A.bm(!0,A.w(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amW,w,w,w,w,new C.dEZ(d),!1,w,w,w,w,w,w,w,D.fnA,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amU,w,w,w,w,new C.dF_(d),!1,w,w,w,w,w,w,w,D.ful,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dEZ.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dF_.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dF5.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dFo.prototype={
$0(){return this.b.$1(new C.dF3(this.a))},
$S:0}
C.dF3.prototype={
$0(){return this.a.c=""},
$S:0}
C.dFp.prototype={
$0(){return this.a.$1(new C.dF2())},
$S:0}
C.dF2.prototype={
$0(){},
$S:0}
C.dFe.prototype={
$0(){return this.a.$1(new C.dF1(this.b))},
$S:0}
C.dF1.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dFf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahj(u.a,null,null,new C.dF0(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dF0.prototype={
$4(d,e,f,g){this.a.$1(new C.dEY(this.b,d))},
$S:357}
C.dEY.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dFg.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFh.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.J(x.q).f.U(D.eYg)
return}if(w.a.d==null){w.c.J(x.q).f.U(D.eVc)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dFL.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:95}
C.dFM.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e_:B.c,n=A.m(14),m=A.I((p?B.bs:B.bl).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.az,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AF(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z_(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z_(r).length>0?B.bz:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bl
t=(q?B.bs:B.bl).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.w(A.a([p,B.N,v,u,B.aB,A.B(A.a([A.E(A.dU(B.nB,new C.dFJ(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jF,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fuK,new C.dFK(d),A.bn(B.cY,r,r,r,B.c,r,B.jF,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bc,E.YE,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:31}
C.dFJ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFK.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dFF.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dFG(r),p=r.a.d.a,o=p?B.e_:B.c,n=A.m(14),m=A.I((p?B.bs:B.bl).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.az,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AF(l.c),s,s,s,s,s,s,D.f9y,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iz((r.a.d.a?B.bs:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_u,"View receipt",new C.dFy(r,d,l))
u=l.x!=null
t=u?B.rj:B.pZ
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bsb,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dFz(r,d,l)),q.$3$icon$label$onTap(B.Bt,"Edit",new C.dFA(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mu,"View / download ID",new C.dFB(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bCU,"View / download selfie",new C.dFC(r,d,l)))
if(l.gaF0())p.push(q.$3$icon$label$onTap(A6.a0x,"View / download signature",new C.dFD(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e6,"Delete",new C.dFE(r,d,l)))
p.push(B.at)
return A.bm(!0,new A.D(B.vp,A.p(s,A.w(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dFG.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.az
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1922}
C.dFy.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fJS(w,this.c)},
$S:0}
C.dFz.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.RR(this.c)},
$S:0}
C.dFA.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.D2(this.c)},
$S:0}
C.dFB.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCR(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dFC.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCR(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dFD.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fJX(w,this.c)},
$S:0}
C.dFE.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.NP(0,this.c)},
$S:0}
C.dFN.prototype={
$1(d){return d.x==null},
$S:263}
C.dFO.prototype={
$1(d){return d.x!=null},
$S:263}
C.dFP.prototype={
$2(d,e){return d+e.c},
$S:1923}
C.dFQ.prototype={
$0(){return this.a.bz4()},
$S:0}
C.dFH.prototype={
$0(){return this.a.aeu(this.b)},
$S:0}
C.ftu.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.ftv.prototype={
$0(){return B.d.gI(D.a1J)},
$S:z+68}
C.d5x.prototype={
$0(){var w=this.a
return w.m(new C.d5v(w,this.b))},
$S:0}
C.d5v.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d5w.prototype={
$0(){},
$S:0}
C.d5y.prototype={
$0(){var w=this.a.gbY0()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fvy.prototype={
$1(d){return C.h5P(A.a2(d,x.N,x.z))},
$S:z+11}
C.fvz.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fvA.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fIw.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fQG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fsK.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bNh.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1924}
C.fJ4.prototype={
$1(d){var w=this
return new C.Z2(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d6c.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d6b(w,d))},
$S:z+66}
C.d6b.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d60.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d5Y.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d5z.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d5A.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d61.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d5I.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e_:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d5G(d),w,w),A.bG(B.ws,new C.d5H(d),A.bn(B.mY,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d5G.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d5H.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d5J.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d5Z.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d6_.prototype={
$0(){return B.d.gI(D.yL)},
$S:z+12}
C.d5E.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyh(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.St(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d5F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5K.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YB(v,u,J.ad(w.d),null)},
$S:z+64}
C.d5L.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6a.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aC(s,new C.Yj(r.y,r.gyh(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d68(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9v(v,e,w,u,t,r.gbP9(),C.hl2(r.y.Q),r.gyh(0),s)
w=t}return A.c6(q,new C.d69(r,e),new A.D(B.YF,w,s))},
$S:1925}
C.d69.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcZ(t).ay){t=this.b
u=x.cy.a(B.d.gcZ(u.f.f)).guI(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fC(v*3.141592653589793*0.5)
return A.fu(B.a3,A.de(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.d68.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aG7(B.pM,B.iF)},
$S:0}
C.d5V.prototype={
$0(){var w=this.a
return w.m(new C.d5U(w))},
$S:0}
C.d5U.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5W.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d5B.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jW.j(0.5),r=x.p,q=A.a([D.fmc,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.YB(d,B.dX,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YB(d,L.akN,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ko.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ko.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YB(d,A_.alW,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YB(d,B.q4,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YB(d,B.q4,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eK(u,E.AG,A.bm(!0,new A.D(A5.xI,A.w(q,B.F,u,B.e,B.P,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aic,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:48}
C.d5X.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d5O.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.Z4(v,J.cI(w.d),w.r+1,null)},
$S:z+54}
C.d5P.prototype={
$1(d){var w=null
return A.ok(!1,A.ek(w,w,w,E.AG,new A.jJ(this.a,new C.d5N(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:316}
C.d5N.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a72,B.oj,A.E(A.d(e,w,w,w,w,w,w,B.iO,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:504}
C.d5Q.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d5R.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d5S.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5T.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AP(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rh(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d5M(s,t))
w=4
return A.b(s.kW(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5M.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d63.prototype={
$1(d){var w=null
return A.ok(!1,A.ek(w,w,w,E.AG,new A.jJ(this.a,new C.d62(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:316}
C.d62.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a72,B.oj,A.E(A.d(e,w,w,w,w,w,w,B.iO,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:504}
C.d64.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d65.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d66.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d67.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AP(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kW(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5C.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bgS(B.pM,U.LY)},
$S:0}
C.d5D.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aG7(B.pM,U.LY)},
$S:0}
C.d7X.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7Y.prototype={
$1(d){var w=this.a
return w.m(new C.d7W(w))},
$S:8}
C.d7W.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d7Z.prototype={
$1(d){var w=this.a
return w.m(new C.d7V(w))},
$S:8}
C.d7V.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d8_.prototype={
$1(d){var w=this.a
return w.m(new C.d7U(w))},
$S:8}
C.d7U.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d80.prototype={
$0(){var w=this.a
return w.m(new C.d7T(w,this.b))},
$S:0}
C.d7T.prototype={
$0(){var w=this.b
this.a.d.saW(0,w)
return w},
$S:0}
C.d81.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1h()
A.a6(this.b,!1).O(new A.bo7(w,v))},
$S:0}
C.d6r.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6q.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Z0(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d6v.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d6u.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6Z(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hE,v,v,v)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d6s(d),v,v),A.bG(B.ws,new C.d6t(d),A.bn(B.mY,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AG,w,v,v,v,v,D.fl3,v)},
$S:20}
C.d6s.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d6t.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6w.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d6x.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.c9(A.bW(B.bA,r,B.bq,18,14),B.r,t,B.y,t,D.bt6,t,t,B.ag)},
$S:278}
C.d6p.prototype={
$0(){return this.a.PR(0,this.b)},
$S:0}
C.d6o.prototype={
$0(){return this.a.Pl(0,this.b)},
$S:0}
C.cF1.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cF2.prototype={
$0(){return B.d.gI(D.yL)},
$S:z+12}
C.cF3.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.be),w),0,0,0)},
$S:1927}
C.cYt.prototype={
$1(d){return this.a.m(new C.cYs(this.b,this.c))},
$S:8}
C.cYs.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cYS.prototype={
$1(d){return this.a.m(new C.cYF())},
$S:2}
C.cYF.prototype={
$0(){},
$S:0}
C.cYT.prototype={
$1(d){return this.a.m(new C.cYE())},
$S:2}
C.cYE.prototype={
$0(){},
$S:0}
C.cYU.prototype={
$0(){var w=this.a
return w.m(new C.cYD(w,this.b))},
$S:0}
C.cYD.prototype={
$0(){var w=this.a
return w.d=w.go4().FA(this.b.a)},
$S:0}
C.cYV.prototype={
$0(){var w=this.a
return w.m(new C.cYC(w,this.b))},
$S:0}
C.cYC.prototype={
$0(){var w=this.a
return w.d=w.go4().cGI(this.b)},
$S:0}
C.cYW.prototype={
$1(d){return this.a.m(new C.cYB())},
$S:2}
C.cYB.prototype={
$0(){},
$S:0}
C.cYX.prototype={
$0(){var w=this.a
return w.m(new C.cYA(w,this.b))},
$S:0}
C.cYA.prototype={
$0(){var w=this.a
return w.d=w.go4().cGN(this.b.a)},
$S:0}
C.cYY.prototype={
$1(d){var w=this.a
return w.m(new C.cYN(w,d))},
$S:6}
C.cYN.prototype={
$0(){var w=this.a
return w.d=w.go4().cHH(this.b)},
$S:0}
C.cYZ.prototype={
$1(d){var w=this.a
return w.d=w.go4().aDf(d)},
$S:2}
C.cZ_.prototype={
$1(d){var w=this.a
return w.d=w.go4().cGQ(d)},
$S:2}
C.cZ1.prototype={
$1(d){var w=this.a
return w.d=w.go4().cHF(d)},
$S:2}
C.cZ2.prototype={
$1(d){var w=this.a
return w.m(new C.cYM(w,d))},
$S:8}
C.cYM.prototype={
$0(){var w=this.a
return w.d=w.go4().cHw(this.b)},
$S:0}
C.cZ3.prototype={
$0(){var w=this.a,v=w.go4(),u=B.a.i(w.gyh(0).a.a),t=B.a.i(w.gaAs().a.a)
u=v.bbA(B.a.i(w.gaqb().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dTH.prototype={
$0(){var w=this.a
w.vP()
w.a.bs()
w.a.pR()},
$S:0}
C.dTG.prototype={
$0(){var w=this.a
w.vP()
w.a.bs()
w.a.pR()},
$S:0}
C.dTJ.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTL.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTF.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTI.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTN.prototype={
$0(){this.a.Ok()
return null},
$S:0}
C.dTM.prototype={
$0(){return this.a.Eq(this.b)},
$S:0}
C.dT7.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dT5(d),w,w),r=A.bn(B.bV,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dT6(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dT5.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dT6.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dT8.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cHb(this.b)},
$S:0}
C.dT2.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSi(w.b,w.c,w.d)},
$S:9}
C.dSB.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dSC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gn(t.a.c),$async$$0)
case 2:s=r.re(q.dH(e,new C.dSO(t)))
if(s!=null&&t.c!=null)t.m(new C.dSP(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSO.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSR.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dT1.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cHZ(C.hlc(w),w)},
$S:0}
C.dT_.prototype={
$1(d){return new A.e1(new C.dSZ(this.a,this.b),null)},
$S:21}
C.dSZ.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e_:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.amz,v,v,v,p>0?new C.dSV(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.w(A.a([r,B.aR,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.an7,v,v,v,new C.dSW(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.P,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSX(d),v,v),A.bG(B.pk,new C.dSY(d),A.bn(B.bV,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:165}
C.dSV.prototype={
$0(){return this.b.$1(new C.dSU(this.a))},
$S:0}
C.dSU.prototype={
$0(){return--this.a.a},
$S:0}
C.dSW.prototype={
$0(){return this.b.$1(new C.dST(this.a))},
$S:0}
C.dST.prototype={
$0(){return++this.a.a},
$S:0}
C.dSX.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dSY.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dT0.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cHM(this.a.a)
w.r.a8(0)},
$S:0}
C.dSp.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahr(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.heT(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dSq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDc(w)},
$S:0}
C.dTa.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acP(this.b,w,this.c,null)},
$S:z+24}
C.dT4.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e_:B.c,t=A.m(20),s=A.X(B.lo,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.w(p,B.m,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bG(D.fvV,new C.dT3(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:20}
C.dT3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dSr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dSs.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dSt.prototype={
$1(d){return d.a},
$S:z+7}
C.dSu.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hY(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDc(w)},
$S:0}
C.dSy.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahr(q)
w=A.U(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dSw(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.heT(v.e,null,r,v.f,v.r,new C.dSx(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dSx.prototype={
$0(){return this.a.a9B(this.b)},
$S:0}
C.dSw.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dSz.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("M<1,hY>")
w=A.C(new A.M(w,new C.dSv(this.b),v),v.k("ak.E"))
u.d=t.aDc(w)},
$S:0}
C.dSv.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dT9.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSL.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSM.prototype={
$1(d){var w=this
return new A.e1(new C.dSK(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dSK.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e_:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dSG(u,e,o),A.U(o).k("M<1,r>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m6,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.w(p,B.aj,v,B.e,B.P,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSH(d),v,v),A.bG(B.Jl,new C.dSI(t,u,o,e),A.bn(B.bV,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fjb,new C.dSJ(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:165}
C.dSG.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bQm,w,w,w,new C.dSF(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1928}
C.dSF.prototype={
$0(){return this.a.$1(new C.dSD(this.b,this.c))},
$S:0}
C.dSD.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSH.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dSI.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dSE(w.c,u))
v.bO(0,B.c8)}},
$S:0}
C.dSE.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dSJ.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dSN.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cIq(this.b,D.tO,C.Gl(v,w.a.c))},
$S:0}
C.dTh.prototype={
$1(d){return d.as},
$S:z+1}
C.dTi.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iO(this.b,w)},
$S:0}
C.dTj.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i9e(v)
return w.Vw(v==null?null:v.a)},
$S:0}
C.dTk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hMy(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cqj(new A.ar(u,t),v.gbhJ(),new A.ar(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cOZ:D.cNn
q=A.I(s?B.dm:D.bb8,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcT(s,m),B.av),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.uo(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdM(l.d,v,l.f,w,new C.dTd(l),l.gcaf(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvb(s,new C.dTe(l,e),new C.dTf(l,e),new C.dTg(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b_,B.b4,B.x,r,m,m),B.n),m,m,m,A0.ahi,m,m,m,m)},
$S:222}
C.dTd.prototype={
$1(d){var w=this.a
w.m(new C.dTb(w,d))},
$S:2}
C.dTb.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dTe.prototype={
$0(){var w=this.b
return this.a.b9e(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dTf.prototype={
$0(){var w=this.b
return this.a.b9e(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dTg.prototype={
$0(){var w=this,v=w.b
return w.a.aSi(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbhJ())},
$S:0}
C.dTl.prototype={
$0(){var w=this.a
return w.m(new C.dTc(w))},
$S:0}
C.dTc.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dSA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fM(new A.fE(s.c)),$async$$0)
case 2:t.xK("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6B.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhu(u,C.hpi(v.c,u),new C.d6A(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d6A.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d6C.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkQ(d.d,d.c,u.f.t(0,d.a),new C.d6z(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d6z.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fty.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.re(new A.cQ(new A.a_(v,new C.ftz(d),w.k("a_<1>")),new C.ftA(),w.k("cQ<1,n>")))},
$S:z+20}
C.ftz.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.ftA.prototype={
$1(d){return d.a},
$S:z+7}
C.ftw.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.ftx.prototype={
$1(d){return d.b},
$S:z+7}
C.ftD.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.re(new A.cQ(new A.a_(v,new C.ftE(d),w.k("a_<1>")),new C.ftF(),w.k("cQ<1,n>")))},
$S:z+20}
C.ftE.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.ftF.prototype={
$1(d){return d.a},
$S:z+7}
C.ftB.prototype={
$1(d){var w,v=A.eu([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.ftC.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d6E.prototype={
$0(){return this.a},
$S:z+32}
C.d6V.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:270}
C.d6N.prototype={
$2(d,e){var w=this.a.c8(0,d,new C.d6O()),v=J.a4(w)
if(!v.t(w,e))v.L(w,e)},
$S:114}
C.d6O.prototype={
$0(){return A.a([],x.s)},
$S:511}
C.d6M.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:290}
C.d6F.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d6L.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d6K.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Ce:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Ce:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1930}
C.d6G.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d6P.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.L(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gR(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.L(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.Ce:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b4(w,new C.d6Q(r)))w.push(r)}}B.d.bq(w,new C.d6R(a8))
B.d.b0(w,new C.d6S())
q=C.hMx(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.ezq],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gI(k)+B.d.gal(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bnS(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1931}
C.d6Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6R.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d6S.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d6T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cK(0,0,B.pr)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:607}
C.d6U.prototype={
$1(d){return 16+d*156},
$S:252}
C.d6D.prototype={
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
t.n(0,d,new C.FC(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FC(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FC(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JS(d,new A.u(e+t,w),s,s.length))}},
$S:198}
C.d6H.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIl(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:114}
C.d6I.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d6J.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:554}
C.d6W.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:554}
C.d6X.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:442}
C.d6Y.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:192}
C.d6Z.prototype={
$1(d){return d>=0.5},
$S:125}
C.faZ.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.ht(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1933}
C.eMT.prototype={
$1(d){var w=null,v=A.m(8),u=B.bV.j(0.12),t=A.m(8)
return new A.D(B.nd,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f5g,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Mv,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMS(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eMS.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dmO.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dmN.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.ny,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dmL(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mi,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dmM(d),w,w)],x.p),B.b9,B.B1,w,u,D.bul,w,D.bwi,new A.b7(v,B.Y),w,w)},
$S:20}
C.dmL.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dmM.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dmX.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dmY.prototype={
$1(d){var w=this.a
return w.m(new C.dmW(w,d))},
$S:z+37}
C.dmW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmZ.prototype={
$1(d){var w=null
return A.qk(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dn1.prototype={
$1(d){var w=this.a
return w.m(new C.dmV(w,d))},
$S:32}
C.dmV.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dn0.prototype={
$1(d){var w=null
return A.qk(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dn2.prototype={
$1(d){var w=this.a
return w.m(new C.dmU(w,d))},
$S:32}
C.dmU.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dn3.prototype={
$0(){var w=this.a
return w.m(new C.dmT(w))},
$S:0}
C.dmT.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dn4.prototype={
$0(){var w=this.a
return w.m(new C.dmS(w))},
$S:0}
C.dmS.prototype={
$0(){return++this.a.at},
$S:0}
C.dn5.prototype={
$0(){var w=this.a
return w.m(new C.dmR(w))},
$S:0}
C.dmR.prototype={
$0(){return--this.a.ax},
$S:0}
C.dn6.prototype={
$0(){var w=this.a
return w.m(new C.dmQ(w))},
$S:0}
C.dmQ.prototype={
$0(){return++this.a.ax},
$S:0}
C.dn7.prototype={
$1(d){var w=this.a
return w.m(new C.dmP(w,d))},
$S:8}
C.dmP.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dn_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dn8.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bV.j(0.18)
else w=q.c.a?B.e_:B.c
v=A.m(12)
if(p)u=B.bV
else u=(q.c.a?B.e1:B.bP).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bV
else t=q.c.a?B.bs:B.bl
t=A.X(f,t,r,r,r,18)
if(p)s=B.bV
else s=q.c.a?B.bs:B.bl
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.w(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,B.jF,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dn9(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+39}
C.dn9.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dni.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c8_.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:97}
C.c86.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c87.prototype={
$2(d,e){var w=J.b6(e,new C.c85(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c85.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c81.prototype={
$1(d){return C.akj(A.a2(d,x.N,x.z))},
$S:z+8}
C.c82.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c83.prototype={
$1(d){return C.h5P(A.a2(d,x.N,x.z))},
$S:z+11}
C.c84.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c8b.prototype={
$1(d){return new A.aFq(d.f.length,d.a,d.b)},
$S:z+43}
C.c8c.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:528}
C.c88.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c89.prototype={
$1(d){return d.cHo(C.Gl(d,this.a))},
$S:z+44}
C.dTu.prototype={
$1(d){return C.tW(d,this.a.a.c)},
$S:z+2}
C.dTv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dTz.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dTA.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dTr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZt(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yi("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p4(r.c,r.e),$async$$0)
case 4:s.yi(p)
w=5
return A.b(s.Jp(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTs.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZt(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yi("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p4(r.c,r.e),$async$$0)
case 4:s.yi(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UP(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yi("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yi("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yi("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jp(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.yi(B.a.eg(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dTy.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZs(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yi("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ck(A.e8(new C.dTx(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p4(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTx.prototype={
$1(d){var w=this.b
return new C.ZZ(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dTw.prototype={
$1(d){return D.h_j},
$S:z+46}
C.dTC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTD.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dTB(w,d)
return new A.D(B.d8,new C.bdQ(this.b,d.c,d.a,w,null),null)},
$S:1934}
C.dTB.prototype={
$0(){return this.a.Xe(this.b.b)},
$S:0}
C.dTm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTn.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dTo.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dTp.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dTq.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTE.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:188}
C.dEQ.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dER.prototype={
$0(){return B.d.gI(D.a3d)},
$S:z+48}
C.dES.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cVa,44),w,w,w),w,w,new C.biC(u,t,v,w),B.av)},
$S:70}
C.fJx.prototype={
$1(d){return A.oO(new C.fJw(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:136}
C.fJw.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e_:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rD,24)],x.V),o=r?B.e1:B.bP
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bV.j(0.18)],x.O)
w=A.p(t,D.bKT,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.az,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.w(A.a([B.R,o,new A.D(E.aih,A.B(A.a([w,B.bd,A.E(A.w(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ij(!0,t,e,B.y,D.eTp,new C.fJv(this.b,s),20,B.ahS,t,B.ag,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kL,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:113}
C.fJv.prototype={
$2(d,e){var w=null,v=D.a3d[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.e1:B.bP,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.m(15),o=A.E(new C.a5S(v.a,!0,w),1),n=s?B.jB:B.iV,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.az,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eF(A.bw(p,A.w(A.a([o,A.p(w,A.w(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.kY,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fJu(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:76}
C.fJu.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfG.prototype={
$0(){return this.a.afx(this.b)},
$S:0}
C.fIU.prototype={
$1(d){return D.fWA},
$S:z+74}
C.fQn.prototype={
$1(d){var w=this
return new C.a0K(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fIZ.prototype={
$1(d){return new C.YD(this.a,null)},
$S:z+51}
C.fIY.prototype={
$1(d){return D.fXz},
$S:z+52}
C.cZf.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cZe(w,d))},
$S:32}
C.cZe.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cZh.prototype={
$1(d){return this.a.JZ()},
$S:2}
C.cZi.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZb.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZc.prototype={
$1(d){return this.a.JZ()},
$S:2}
C.cZd.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cwP.prototype={
$0(){},
$S:0}
C.cwV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cwW.prototype={
$0(){return this.a.aNJ(-1)},
$S:0}
C.cwX.prototype={
$1(d){return this.a.m(new C.cwU())},
$S:2}
C.cwU.prototype={
$0(){},
$S:0}
C.cwY.prototype={
$0(){return this.a.aNJ(1)},
$S:0}
C.cwZ.prototype={
$1(d){return this.a.m(new C.cwT())},
$S:2}
C.cwT.prototype={
$0(){},
$S:0}
C.cx_.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e1:B.bP
return A.ue(u,u,B.aZ,r,u,new C.cwS(t,d),B.Bd,s,w,u,new A.ay(v,1,B.q,-1),B.cc)},
$S:1935}
C.cwS.prototype={
$1(d){var w=this.a
return w.m(new C.cwQ(w,this.b))},
$S:8}
C.cwQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cx0.prototype={
$1(d){return this.a.m(new C.cwR())},
$S:2}
C.cwR.prototype={
$0(){},
$S:0}
C.cx1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.far.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fas.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fat.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fap.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyd()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bwh,new A.ew(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bv0(p,v,this.b.a,u,t,r),r,r,B.av)},
$S:70}
C.faq.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.az(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aV,B.bV,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eF(D.e93,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.dc(-1.2+t,-0.5),new A.dc(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:141}
C.fHy.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:71}
C.eK2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJU.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eJV.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eK0.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e1(new C.eK_(w,this.b),null)},
$S:21}
C.eK_.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e_:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eK(w,u,new A.D(B.aia,A.w(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hbG(new C.eJX(r,e),r.a),B.aB,A.B(A.a([A.E(A.dU(B.de,new C.eJY(d),w),1),B.au,A.E(A.bG(B.TZ,new C.eJZ(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:99}
C.eJX.prototype={
$1(d){return this.b.$1(new C.eJW(this.a,d))},
$S:32}
C.eJW.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eJY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJZ.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eK1.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sv(this.b)},
$S:0}
C.eJP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bb8(w)},
$S:0}
C.eJT.prototype={
$1(d){return this.bkj(d)},
bkj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L3(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iO(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eJS.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eJR(this.b),v),v.k("J.E"))
u.d=t.bb8(w)},
$S:0}
C.eJR.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eK3.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iO(this.b,w)},
$S:0}
C.eK4.prototype={
$1(d){return this.a.bCi(d,this.b)},
$S:z+55}
C.eJQ.prototype={
$0(){return this.a.a9A(this.b)},
$S:0}
C.fQd.prototype={
$1(d){return new C.ad9(this.a,this.b,this.c,null)},
$S:z+56}
C.eK6.prototype={
$0(){return this.a.ZX(this.b)},
$S:0}
C.eK7.prototype={
$0(){return this.a.PN(this.b)},
$S:0}
C.eK8.prototype={
$0(){return this.a.El(this.b)},
$S:0}
C.eK9.prototype={
$0(){return this.a.ZY(this.b)},
$S:0}
C.eK5.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJL.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eJM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJN(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJN.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eKw.prototype={
$2(d,e){return d+e.gwU()},
$S:z+59}
C.eKs.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eKt.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eKd.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e_:B.c,s=A.m(24),r=A.p(v,D.bLi,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.az
u=u?B.e1:B.bP
w=x.p
return A.eK(v,t,new A.D(B.xM,A.w(A.a([r,B.aR,q,B.N,p,B.d7,A.B(A.a([A.E(A.dU(B.nB,new C.eKb(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.f9,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.au,A.E(A.bG(D.fzG,new C.eKc(d),A.bn(B.ay,v,v,v,v,v,B.f9,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:48}
C.eKb.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eKc.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eKm.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e_:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fO,28)],x.V),g=k?D.d0L:B.a2x,f=x.p
g=A.p(m,A.w(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eNv,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cw,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aie,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4l(B.b6,B.j0,new C.eKj(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b4l(B.cB,M.yq,new C.eKk(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bKH,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.az,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vr,A.p(m,A.w(A.a([g,new A.D(B.aib,A.w(A.a([w,B.R,u,B.by,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.ey,k?B.bs:B.bl,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eKl(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eKj.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vp("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKk.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vp("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKl.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.NC(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKh.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e_:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e1:B.bP
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bs:B.bl
u=A.bw(w,new A.a7(48,48,C.aPD(!0,A.m(12),48,N.N5,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.az,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AF(v.gwU())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vr,A.p(q,A.w(A.a([B.R,k,new A.D(D.ai8,A.B(A.a([u,B.bd,A.E(A.w(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AT,r.ckp(B.u6,B.aV,new C.eKf(d),p,"QR code or backup file","Transfer project"),r.b1i(!0,B.e6,B.ay,new C.eKg(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eKf.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eKg.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eKi.prototype={
$1(d){return this.bkk(d)},
bkk(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.L3(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vD(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eKz.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eKy(w))},
$S:0}
C.eKy.prototype={
$0(){return this.a.r++},
$S:0}
C.eKA.prototype={
$0(){var w=this.a
return w.m(new C.eKx(w))},
$S:0}
C.eKx.prototype={
$0(){return this.a.r++},
$S:0}
C.eKa.prototype={
$0(){var w=this.a.c
w.toString
return A.iO(w,null)},
$S:0}
C.eKe.prototype={
$0(){return this.a.cdK(this.b)},
$S:0}
C.eKv.prototype={
$0(){var w=this.a
return w.m(new C.eKu(w,this.b))},
$S:0}
C.eKu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eKp.prototype={
$0(){return this.a.vp("scan")},
$S:0}
C.eKq.prototype={
$0(){return this.a.vp("file")},
$S:0}
C.eKr.prototype={
$1(d){return this.a.ckq(d,this.b)},
$S:z+60}
C.eKo.prototype={
$0(){return this.a.Ep(this.b)},
$S:0}
C.eKn.prototype={
$0(){return this.a.a_s(this.b,this.c)},
$S:0}
C.cwg.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cwf.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cwd.prototype={
$1(d){return C.hv6(A.a2(d,x.N,x.z))},
$S:z+63}
C.cwe.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fsC.prototype={
$1(d){return d.y===D.kv},
$S:z+2}
C.fQO.prototype={
$1(d){return C.bAN(d,this.a)},
$S:z+2}
C.fqQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bNm.prototype={
$1(d){return!d.as},
$S:z+1}
C.bNl.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bNi.prototype={
$1(d){return C.h5Q(A.a2(d,x.N,x.z))},
$S:z+14}
C.bNj.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bNk.prototype={
$1(d){return J.k(d)},
$S:17}
C.fi_.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fdG.prototype={
$1(d){return C.fXc(A.a2(d,x.N,x.z))},
$S:z+67}
C.fdH.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fdI.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fIL.prototype={
$1(d){return J.k(d)},
$S:17}
C.fIM.prototype={
$1(d){return d.a},
$S:z+69}
C.fIN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fIO.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fIP.prototype={
$1(d){return d.Sv(null).ag()},
$S:z+70}
C.fQM.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.ft3.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fvE.prototype={
$1(d){return C.akj(A.a2(d,x.N,x.z))},
$S:z+8}
C.fvF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fvG.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fvH.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fvI.prototype={
$1(d){return C.tW(d,this.a)},
$S:z+2}
C.fIy.prototype={
$1(d){return C.tW(d,this.a)},
$S:z+2}
C.fQH.prototype={
$1(d){return C.akj(A.a2(d,x.N,x.z))},
$S:z+8}
C.fQI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fQJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fsL.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fsM.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fQT.prototype={
$1(d){return!d.as},
$S:z+1}
C.fsh.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fsi.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fsj.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fQo.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fwq.prototype={
$1(d){return d.Q},
$S:z+72}
C.fIr.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fvB.prototype={
$1(d){return C.akj(A.a2(d,x.N,x.z))},
$S:z+8}
C.fvC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fvD.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fIm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fed.prototype={
$1(d){return d.length!==0},
$S:3}
C.fee.prototype={
$1(d){return C.h5Q(A.a2(d,x.N,x.z))},
$S:z+14}
C.fef.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.feg.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.feh.prototype={
$1(d){return d.length!==0},
$S:3}
C.feu.prototype={
$2(d,e){return d.eP(new C.fev(e))},
$S:1936}
C.fev.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.ca},
$S:1937}
C.fer.prototype={
$1(d){return C.hR8(d,this.a)},
$S:z+73}
C.fes.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fet.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fiE.prototype={
$1(d){return d.a},
$S:z+49}
C.fiF.prototype={
$1(d){return d.length!==0},
$S:3}
C.fiG.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.flj.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fq9.prototype={
$1(d){return C.hhc(d,C.Gl(d,this.a))},
$S:z+5}
C.fqa.prototype={
$1(d){return C.hhd(d,C.Gl(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKH.prototype
w.buo=w.q
w=C.aMS.prototype
w.bwM=w.q
w=C.aMT.prototype
w.bwN=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCb.prototype,"gchm","chn",25)
var s
w(s=C.azf.prototype,"gcal","cam",42)
v(s,"gaLZ","Na",0)
v(s,"gcpF","AK",0)
v(s,"gbK2","NQ",0)
v(s,"gcDC","yj",0)
v(s,"gcjn","a09",0)
v(s,"gbFr","Ny",0)
v(s,"gbKt","WG",0)
w(s,"gbP9","bPa",71)
v(s,"gbzS","zM",0)
v(C.azg.prototype,"gcDy","Fg",0)
v(s=C.aCM.prototype,"gaf9","vE",0)
v(s,"gcd_","a_j",0)
v(s,"gaQ0","HO",0)
v(s=C.aCJ.prototype,"gczL","a2f",0)
v(s,"gaf9","vE",0)
v(s,"gcnH","a0P",0)
v(s,"gcdX","a_x",0)
w(s,"gcaf","cag",30)
v(s,"gbKk","HT",0)
v(s,"gcAM","cAN",3)
v(s,"gc0O","Yn",0)
w(s,"gc8L","c8M",23)
v(s,"gccK","ccL",3)
v(s=C.aBa.prototype,"gc6z","Pm",0)
v(s,"gc6B","c6C",3)
v(s,"gbGZ","a9c",0)
v(s=C.aCL.prototype,"gbNE","Xa",0)
v(s,"gbY7","XQ",0)
v(s,"gcu5","a1F",0)
v(s,"gcqe","a1g",0)
v(C.aCK.prototype,"gcpX","agU",0)
v(C.arX.prototype,"gc8J","ZW",0)
v(C.ay0.prototype,"ga2_","JZ",3)
v(C.ay_.prototype,"ga2_","JZ",3)
v(C.awK.prototype,"ga2_","JZ",3)
v(s=C.aEg.prototype,"gb0H","Qh",0)
v(s,"gbyG","Vq",0)
v(s,"gcdL","cdM",3)
w(C.aEf.prototype,"gc9A","c9B",57)
u(C.aEh.prototype,"gaPV",0,0,null,["$1","$0"],["HN","bIf"],58,0,0)
t(C,"hou","i_Q",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.anP,C.ub,C.nc,C.Hq,C.aen,C.JK,C.uc,C.JS,C.FC,C.bdO,C.aIl,C.ap0,C.d7_,C.ly,C.aSz,C.aSy,C.aQy,C.tL,C.qX,C.lh,C.hY,C.kB,C.aGk])
u(A.hW,[C.fAd,C.fAc,C.fAe,C.fJq,C.fp2,C.fp3,C.fp8,C.fxX,C.fxW,C.fxV,C.c1s,C.fJW,C.fJO,C.fK_,C.fsT,C.dFw,C.dFr,C.dFs,C.dF4,C.dF0,C.dFL,C.dFM,C.dFF,C.dFG,C.dFN,C.dFO,C.ftu,C.fvy,C.fvz,C.fIw,C.fQG,C.fsK,C.fJ4,C.d6c,C.d5z,C.d5I,C.d5Z,C.d5E,C.d5K,C.d5B,C.d5O,C.d5P,C.d5N,C.d63,C.d62,C.d7Y,C.d7Z,C.d8_,C.d6q,C.d6v,C.d6u,C.cF1,C.cF3,C.cYt,C.cYS,C.cYT,C.cYW,C.cYY,C.cYZ,C.cZ_,C.cZ1,C.cZ2,C.dTI,C.dT7,C.dT2,C.dSB,C.dSO,C.dSR,C.dT_,C.dSp,C.dTa,C.dT4,C.dSr,C.dSs,C.dSt,C.dSy,C.dSw,C.dSv,C.dSL,C.dSM,C.dSG,C.dTh,C.dTd,C.d6B,C.d6C,C.fty,C.ftz,C.ftA,C.ftw,C.ftx,C.ftD,C.ftE,C.ftF,C.ftB,C.ftC,C.d6V,C.d6L,C.d6G,C.d6Q,C.d6R,C.d6U,C.d6I,C.d6X,C.d6Y,C.d6Z,C.faZ,C.eMT,C.dmN,C.dmX,C.dmY,C.dmZ,C.dn1,C.dn0,C.dn2,C.dn7,C.dn8,C.c86,C.c85,C.c81,C.c82,C.c83,C.c84,C.c8b,C.c88,C.c89,C.dTu,C.dTx,C.dTw,C.dTD,C.dTE,C.dEQ,C.fJx,C.fIU,C.fQn,C.fIZ,C.fIY,C.cZg,C.cZh,C.cZc,C.cwX,C.cwZ,C.cx_,C.cwS,C.cx0,C.far,C.fHy,C.eK0,C.eJX,C.eJT,C.eJR,C.eK4,C.fQd,C.eKd,C.eKm,C.eKh,C.eKi,C.eKr,C.cwf,C.cwd,C.cwe,C.fsC,C.fQO,C.fqQ,C.bNm,C.bNl,C.bNi,C.bNj,C.bNk,C.fdG,C.fdH,C.fIL,C.fIM,C.fIN,C.fIO,C.fIP,C.fQM,C.ft3,C.fvE,C.fvF,C.fvH,C.fvI,C.fIy,C.fQH,C.fQI,C.fQJ,C.fsL,C.fsM,C.fQT,C.fsh,C.fsi,C.fQo,C.fwq,C.fIr,C.fvB,C.fvC,C.fIm,C.fed,C.fee,C.fef,C.feg,C.feh,C.fev,C.fer,C.fes,C.fiE,C.fiF,C.flj,C.fq9,C.fqa])
u(A.au,[C.aY0,C.akh,C.aTO,C.Yj,C.b9v,C.bdM,C.bhu,C.bvb,C.bkQ,C.acO,C.bht,C.acN,C.bhs,C.aBb,C.aHn,C.acP,C.JG,C.bdN,C.ac4,C.bdL,C.bdQ,C.aXZ,C.arX,C.ad9])
u(A.mM,[C.ba6,C.bbj,C.bba,C.aGf,C.bgx,C.bdP,C.bcT,C.biC,C.bv0])
u(A.j8,[C.fJT,C.fJU,C.fJV,C.fJM,C.fJN,C.fJY,C.fJZ,C.dFI,C.dFu,C.dFx,C.dFb,C.dFc,C.dFd,C.dFa,C.dFi,C.dF9,C.dFj,C.dFk,C.dF8,C.dFl,C.dF7,C.dFm,C.dF6,C.dFn,C.dEZ,C.dF_,C.dF5,C.dFo,C.dF3,C.dFp,C.dF2,C.dFe,C.dF1,C.dFf,C.dEY,C.dFg,C.dFh,C.dFJ,C.dFK,C.dFy,C.dFz,C.dFA,C.dFB,C.dFC,C.dFD,C.dFE,C.dFQ,C.dFH,C.ftv,C.d5x,C.d5v,C.d5w,C.d5y,C.d6b,C.d60,C.d5Y,C.d5A,C.d61,C.d5G,C.d5H,C.d5J,C.d6_,C.d5F,C.d5L,C.d68,C.d5V,C.d5U,C.d5W,C.d5X,C.d5Q,C.d5S,C.d5T,C.d5M,C.d64,C.d67,C.d5C,C.d5D,C.d7X,C.d7W,C.d7V,C.d7U,C.d80,C.d7T,C.d81,C.d6r,C.d6s,C.d6t,C.d6w,C.d6p,C.d6o,C.cF2,C.cYs,C.cYF,C.cYE,C.cYU,C.cYD,C.cYV,C.cYC,C.cYB,C.cYX,C.cYA,C.cYN,C.cYM,C.cZ3,C.dTH,C.dTG,C.dTJ,C.dTK,C.dTL,C.dTF,C.dTN,C.dTM,C.dT5,C.dT6,C.dT8,C.dSC,C.dSQ,C.dSP,C.dSS,C.dT1,C.dSV,C.dSU,C.dSW,C.dST,C.dSX,C.dSY,C.dT0,C.dSq,C.dT3,C.dSu,C.dSx,C.dSz,C.dT9,C.dSF,C.dSD,C.dSH,C.dSI,C.dSE,C.dSJ,C.dSN,C.dTi,C.dTj,C.dTb,C.dTe,C.dTf,C.dTg,C.dTl,C.dTc,C.dSA,C.d6A,C.d6z,C.d6E,C.d6O,C.d6F,C.eMS,C.dmO,C.dmL,C.dmM,C.dmW,C.dmV,C.dmU,C.dn3,C.dmT,C.dn4,C.dmS,C.dn5,C.dmR,C.dn6,C.dmQ,C.dmP,C.dn_,C.dn9,C.dni,C.dTv,C.dTz,C.dTA,C.dTr,C.dTs,C.dTt,C.dTy,C.dTC,C.dTB,C.dTm,C.dTn,C.dTo,C.dTp,C.dTq,C.dER,C.fJu,C.cfG,C.cZf,C.cZe,C.cZi,C.cZb,C.cZd,C.cwP,C.cwV,C.cwW,C.cwU,C.cwY,C.cwT,C.cwQ,C.cwR,C.cx1,C.fas,C.fat,C.eK2,C.eJU,C.eJV,C.eJW,C.eJY,C.eJZ,C.eK1,C.eJP,C.eJS,C.eK3,C.eJQ,C.eK6,C.eK7,C.eK8,C.eK9,C.eK5,C.eJK,C.eJL,C.eJM,C.eJO,C.eJN,C.eKs,C.eKt,C.eKb,C.eKc,C.eKj,C.eKk,C.eKl,C.eKf,C.eKg,C.eKz,C.eKy,C.eKA,C.eKx,C.eKa,C.eKe,C.eKv,C.eKu,C.eKp,C.eKq,C.eKo,C.eKn])
u(A.ag,[C.anW,C.St,C.Z0,C.Z4,C.Z2,C.YB,C.ap3,C.aoY,C.ZE,C.ap1,C.ZZ,C.a__,C.a5S,C.YD,C.YC,C.Ya,C.a0K,C.Fp,C.awD,C.arW,C.arQ,C.arV,C.NT])
u(A.ah,[C.aCb,C.bdJ,C.azf,C.be3,C.azg,C.bbh,C.aCM,C.aCJ,C.aBa,C.aCL,C.aCK,C.biX,C.aKH,C.ay0,C.ay_,C.awK,C.bv3,C.aMS,C.aMT,C.aEg,C.bkj,C.aEf,C.bwP])
u(A.kj,[C.dFt,C.dFv,C.dFq,C.dFP,C.fvA,C.bNh,C.d6a,C.d69,C.d5R,C.d65,C.d66,C.d6x,C.dSZ,C.dSK,C.dTk,C.d6N,C.d6M,C.d6K,C.d6P,C.d6S,C.d6T,C.d6D,C.d6H,C.d6J,C.d6W,C.c8_,C.c87,C.c8c,C.dES,C.fJw,C.fJv,C.fap,C.faq,C.eK_,C.eKw,C.cwg,C.fi_,C.fdI,C.fvG,C.fsj,C.fvD,C.feu,C.fet,C.fiG])
t(C.biD,C.aKH)
u(A.ma,[C.ab7,C.aJ2,C.Hr,C.aki,C.cwh,C.cwi])
t(C.bv1,C.aMS)
t(C.bv2,C.aMT)
t(C.aEh,C.bwP)
t(C.b7Y,A.b7M)
t(C.bv4,A.a5y)
t(C.b7X,C.bv4)
w(C.aKH,A.eS)
w(C.aMS,A.ca)
w(C.aMT,A.ca)
v(C.bwP,A.ez)
v(C.bv4,A.j2)})()
A.jY(b.typeUniverse,JSON.parse('{"aY0":{"au":[],"r":[]},"ba6":{"aB":[]},"anW":{"ag":[],"r":[]},"aCb":{"ah":["anW"]},"St":{"ag":[],"r":[]},"akh":{"au":[],"r":[]},"aTO":{"au":[],"r":[]},"bdJ":{"ah":["St"]},"Z0":{"ag":[],"r":[]},"Z4":{"ag":[],"r":[]},"Z2":{"ag":[],"r":[]},"YB":{"ag":[],"r":[]},"azf":{"ah":["Z0"]},"be3":{"ah":["Z4"]},"azg":{"ah":["Z2"]},"Yj":{"au":[],"r":[]},"bbj":{"aB":[]},"bba":{"aB":[]},"bbh":{"ah":["YB"]},"aGf":{"aB":[]},"bgx":{"aB":[]},"b9v":{"au":[],"r":[]},"ap3":{"ag":[],"r":[]},"aoY":{"ag":[],"r":[]},"ZE":{"ag":[],"r":[]},"acP":{"au":[],"r":[]},"aCM":{"ah":["ap3"]},"aCJ":{"ah":["aoY"]},"bdM":{"au":[],"r":[]},"bdP":{"aB":[]},"bhu":{"au":[],"r":[]},"bcT":{"aB":[]},"bvb":{"au":[],"r":[]},"bkQ":{"au":[],"r":[]},"aBa":{"ah":["ZE"]},"acO":{"au":[],"r":[]},"bht":{"au":[],"r":[]},"acN":{"au":[],"r":[]},"bhs":{"au":[],"r":[]},"aBb":{"au":[],"r":[]},"aHn":{"au":[],"r":[]},"JG":{"au":[],"r":[]},"ap1":{"ag":[],"r":[]},"ZZ":{"ag":[],"r":[]},"a__":{"ag":[],"r":[]},"aCL":{"ah":["ap1"]},"bdN":{"au":[],"r":[]},"ac4":{"au":[],"r":[]},"bdL":{"au":[],"r":[]},"bdQ":{"au":[],"r":[]},"aCK":{"ah":["ZZ"]},"biX":{"ah":["a__"]},"aXZ":{"au":[],"r":[]},"a5S":{"ag":[],"r":[]},"biD":{"ah":["a5S"]},"biC":{"aB":[]},"arX":{"au":[],"r":[]},"YD":{"ag":[],"r":[]},"YC":{"ag":[],"r":[]},"Ya":{"ag":[],"r":[]},"a0K":{"ag":[],"r":[]},"ay0":{"ah":["YD"]},"ay_":{"ah":["YC"]},"awK":{"ah":["Ya"]},"bv3":{"ah":["a0K"]},"Fp":{"ag":[],"r":[]},"awD":{"ag":[],"r":[]},"bv1":{"ah":["Fp"]},"bv2":{"ah":["awD"]},"bv0":{"aB":[]},"arW":{"ag":[],"r":[]},"aEg":{"ah":["arW"]},"ad9":{"au":[],"r":[]},"arQ":{"ag":[],"r":[]},"arV":{"ag":[],"r":[]},"bkj":{"ah":["arQ"]},"aEf":{"ah":["arV"]},"NT":{"ag":[],"r":[]},"aEh":{"ah":["NT"],"ez":[]},"b7X":{"j2":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQy"),Q:w("qX"),n:w("bl<n,n>"),c5:w("aSy"),dY:w("aSz"),d:w("eE<n?>"),e:w("Hq"),B:w("nc"),P:w("hY"),k:w("kB"),x:w("aA<~>"),f5:w("O<a2J>"),V:w("O<ac>"),t:w("O<qX>"),O:w("O<v>"),ac:w("O<eE<n?>>"),I:w("O<nc>"),u:w("O<hY>"),_:w("O<kB>"),cl:w("O<aA<ai<a5<n,@>>>>"),R:w("O<ne>"),cq:w("O<ai<+(L,L)>>"),ez:w("O<a5<n,aD>>"),gE:w("O<a5<n,n>>"),c7:w("O<a5<n,@>>"),fD:w("O<ms>"),bp:w("O<oe>"),g:w("O<u>"),v:w("O<hr>"),L:w("O<+(n,n)>"),G:w("O<+(L,L)>"),bF:w("O<+count,id,name(G,n,n)>"),A:w("O<cR>"),s:w("O<n>"),aS:w("O<iR>"),p:w("O<r>"),C:w("O<ff>"),D:w("O<lh>"),fp:w("O<JK>"),M:w("O<JS>"),gZ:w("O<aGk>"),Y:w("O<aen>"),E:w("O<aIl>"),F:w("O<L>"),dC:w("O<G>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<nc>"),do:w("ai<hY>"),r:w("ai<kB>"),U:w("ai<a5<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),h:w("ai<n>"),c:w("ai<lh>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a5<n,@>>>"),a:w("a5<n,@>"),f:w("a5<@,@>"),gv:w("M<n,Hs>"),w:w("iB"),g2:w("ri"),bV:w("anP"),fL:w("cr"),K:w("aD"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(L,ai<hY>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bq<L>"),gc:w("dJ"),b4:w("cx<G>"),W:w("jJ<n>"),l:w("r"),cM:w("ff"),i:w("lh"),cc:w("FC"),bw:w("acN<n?>"),cy:w("JU"),q:w("n0"),y:w("R"),gR:w("L"),z:w("@"),S:w("G"),eK:w("ai<kB>?"),m:w("ap0?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("pW?"),T:w("n?"),aD:w("dJ?"),o:w("lh?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aY_=new A.bp(B.hg,B.bG,B.hg,B.bG)
D.aaj=new A.bp(B.hg,B.iq,B.hg,B.iq)
D.aYc=new A.bp(B.ir,B.bG,B.bG,B.bG)
D.aYg=new A.ay(B.cY,1.4,B.q,-1)
D.aYq=new A.ay(B.ad,1,B.q,-1)
D.aZP=new A.aY(0,1/0,64,1/0)
D.aZT=new A.aY(0,84,0,1/0)
D.axU=w([B.lL,B.qX,B.c],x.O)
D.bW9=new A.a8(B.ax,B.aC,B.x,D.axU,null,null)
D.b_D=new A.o(null,null,null,null,null,D.bW9,B.n)
D.d0f=w([B.aV,B.bV],x.O)
D.bYg=new A.a8(B.b_,B.b4,B.x,D.d0f,null,null)
D.b_Y=new A.o(null,null,null,null,null,D.bYg,B.n)
D.b6b=new A.fj(null,null,null,null,null,E.jW,null,null,null,null)
D.abD=new A.cp(B.A,null,null,D.b6b,null)
D.ko=new A.v(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f3f=new A.H(!0,D.ko,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmr=new A.y("No books on the shelf yet.",null,D.f3f,null,null,null,null,null,null,null,null,null)
D.e94=new A.D(B.o0,D.fmr,null)
D.b4F=new A.cp(B.A,null,null,D.e94,null)
D.b5y=new A.cp(B.A,null,null,Y.VQ,null)
D.b7F=new A.v(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b87=new A.v(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.acN=new A.v(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.baR=new A.v(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bb8=new A.v(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ae9=new A.v(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bf_=new A.v(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bfp=new A.v(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.EL=new A.v(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bh0=new A.v(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bjt=new A.v(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.afM=new A.v(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fgT=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bpa=new A.eE(null,D.fgT,B.eZ,null,x.d)
D.fpD=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bpc=new A.eE(null,D.fpD,B.eZ,null,x.d)
D.bpK=new A.ba(38e5)
D.bqu=new A.ig(0,10,0,10)
D.bqD=new A.Q(0,1,0,0)
D.bqN=new A.ig(0,4,0,4)
D.br4=new A.Q(10,10,14,10)
D.brg=new A.ig(10,4,10,4)
D.bro=new A.ig(10,8,10,8)
D.brp=new A.Q(10,8,8,8)
D.brP=new A.Q(12,6,12,2)
D.bs6=new A.Q(14,10,6,6)
D.bs7=new A.Q(14,12,14,0)
D.bsb=new A.Q(14,12,14,8)
D.bse=new A.Q(14,12,8,14)
D.bsi=new A.ig(14,14,14,14)
D.bsX=new A.Q(16,2,16,10)
D.bt6=new A.Q(16,6,16,30)
D.bt8=new A.Q(16,6,16,8)
D.ai8=new A.Q(18,16,18,8)
D.btJ=new A.Q(18,20,18,22)
D.aic=new A.Q(18,24,18,24)
D.btP=new A.Q(18,30,18,30)
D.bu6=new A.Q(20,10,12,20)
D.buj=new A.Q(20,18,16,18)
D.bul=new A.Q(20,18,20,6)
D.bva=new A.Q(24,32,24,28)
D.bvb=new A.Q(24,36,24,32)
D.bvf=new A.Q(26,26,24,14)
D.bvu=new A.Q(2,4,2,8)
D.bvy=new A.Q(30,0,30,0)
D.bvJ=new A.Q(38,22,22,22)
D.aiv=new A.Q(40,24,24,24)
D.bvL=new A.ig(40,40,40,40)
D.bvN=new A.Q(46,30,30,30)
D.aiy=new A.Q(4,0,0,8)
D.bwd=new A.Q(56,40,40,40)
D.bwh=new A.Q(1.25,1.25,1.25,1.25)
D.bwi=new A.Q(60,0,60,0)
D.bwl=new A.Q(6,14,6,16)
D.bwx=new A.ig(7,3,7,3)
D.bx3=new A.Q(5,1.5,5,1.5)
D.bxe=new A.Q(6,2.5,6,2.5)
D.fBF=new A.y("Signature",null,B.nA,null,null,null,null,null,null,null,null,null)
D.bxz=new A.bB(1,B.bg,D.fBF,null)
D.fyO=new A.y("Tell the AI what to fix",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bym=new A.bB(1,B.bg,D.fyO,null)
D.fay=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAM=new A.y("Worksheets",null,D.fay,null,null,null,null,null,null,null,null,null)
D.faG=new A.H(!0,E.acm,null,null,null,null,13,B.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzE=new A.y("Track your project spending",null,D.faG,null,null,null,null,null,null,null,null,null)
D.cTl=w([D.fAM,B.at,D.fzE],x.p)
D.bmm=new A.fl(B.ag,B.e,B.j,B.F,null,B.p,null,0,D.cTl,null)
D.bys=new A.bB(1,B.bg,D.bmm,null)
D.f5P=new A.H(!0,E.jW,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg5=new A.y("FAMILY LIBRARY",null,D.f5P,null,null,null,null,null,null,null,null,null)
D.byJ=new A.bB(1,B.bg,D.fg5,null)
D.MJ=new C.Hq("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.ZL=new C.Hr(0,"male")
D.ajr=new C.Hr(1,"female")
D.xV=new C.Hr(2,"unknown")
D.tO=new C.aki(0,"owner")
D.MK=new C.aki(1,"editor")
D.kv=new C.aki(2,"viewer")
D.akd=new A.a0(61199,"MaterialIcons",!1)
D.bCU=new A.a0(61504,"MaterialIcons",!1)
D.bCV=new A.a0(61505,"MaterialIcons",!1)
D.bCX=new A.a0(61587,"MaterialIcons",!1)
D.bD3=new A.a0(61890,"MaterialIcons",!1)
D.bDY=new A.a0(63034,"MaterialIcons",!0)
D.bEN=new A.a0(63429,"MaterialIcons",!1)
D.amr=new A.a0(984520,"MaterialIcons",!1)
D.bDt=new A.a0(62776,"MaterialIcons",!1)
D.bHa=new A.ae(D.bDt,26,B.aZ,null,null,null)
D.bBS=new A.a0(57648,"MaterialIcons",!1)
D.bHs=new A.ae(D.bBS,14,B.c,null,null,null)
D.bHK=new A.ae(B.FU,17,null,null,null,null)
D.bIf=new A.ae(E.a_E,null,null,null,null,null)
D.bIi=new A.ae(B.jp,18,E.jW,null,null,null)
D.a_q=new A.a0(62044,"MaterialIcons",!1)
D.bIo=new A.ae(D.a_q,null,B.aV,null,null,null)
D.bJd=new A.ae(B.dX,16,null,null,null,null)
D.bJk=new A.ae(D.a_q,32,B.aV,null,null,null)
D.bJE=new A.ae(E.ake,18,B.cY,null,null,null)
D.bKH=new A.ae(B.G3,22,B.ay,null,null,null)
D.bKT=new A.ae(B.dX,22,B.aZ,null,null,null)
D.bL3=new A.ae(Q.a_v,22,B.c,null,null,null)
D.bL8=new A.ae(B.tY,52,B.c,null,null,null)
D.bLi=new A.ae(B.G3,30,B.ay,null,null,null)
D.an4=new A.ae(B.u6,22,B.c,null,null,null)
D.bLK=new A.ae(B.dX,17,null,null,null,null)
D.bM3=new A.ae(B.vM,26,B.cY,null,null,null)
D.bMN=new A.ae(B.a_Q,16,null,null,null,null)
D.bNx=new A.ae(B.tY,24,B.c,null,null,null)
D.bNC=new A.ae(B.Nb,20,B.rv,null,null,null)
D.bNH=new A.ae(B.FS,null,B.bV,null,null,null)
D.bNO=new A.ae(B.jp,18,B.c,null,null,null)
D.bOp=new A.ae(B.cD,22,B.ad,null,null,null)
D.bPe=new A.ae(B.e6,16,B.ad,null,null,null)
D.bPq=new A.ae(D.a_q,20,B.aV,null,null,null)
D.anv=new A.ae(B.hn,20,null,null,null,null)
D.bPW=new A.ae(B.cD,18,D.ko,null,null,null)
D.bQd=new A.ae(B.yf,28,B.c,null,null,null)
D.bQm=new A.ae(B.N1,null,B.h0,null,null,null)
D.bQG=new A.ae(B.yf,24,B.c,null,null,null)
D.bR6=new A.ae(B.tY,null,B.aV,null,null,null)
D.bR7=new A.ae(B.jI,20,B.cY,null,null,null)
D.bRr=new A.ae(B.FU,16,null,null,null,null)
D.bSZ=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ez,!0,null,null,null,null)
D.d7s=w([B.bv,B.aV,B.fd,B.aZ],x.O)
D.bUz=new A.a8(B.ax,B.aC,B.x,D.d7s,null,null)
D.bfW=new A.v(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.blp=new A.v(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cQe=w([D.bfW,D.blp],x.O)
D.bUK=new A.a8(B.b_,B.b4,B.x,D.cQe,null,null)
D.d20=w([B.f_,B.fx,B.fd],x.O)
D.bUP=new A.a8(B.ax,B.aC,B.x,D.d20,null,null)
D.aeL=new A.v(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b88=new A.v(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cSb=w([D.aeL,D.b88],x.O)
D.bVn=new A.a8(B.b_,B.b4,B.x,D.cSb,null,null)
D.bbk=new A.v(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.axg=w([D.bbk,D.aeL],x.O)
D.bVH=new A.a8(B.ax,B.aC,B.x,D.axg,null,null)
D.adI=new A.v(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bdu=new A.v(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d1c=w([D.adI,D.bdu],x.O)
D.bWk=new A.a8(B.a3,B.a8,B.x,D.d1c,null,null)
D.ddQ=w([B.bz,B.n3],x.O)
D.bWm=new A.a8(B.b_,B.b4,B.x,D.ddQ,null,null)
D.bfR=new A.v(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.deG=w([D.bfR,D.ko,D.ko,P.Xa],x.O)
D.dgW=w([0,0.07,0.9,1],x.F)
D.bWR=new A.a8(B.a3,B.a8,B.x,D.deG,D.dgW,null)
D.bX1=new A.a8(B.ax,B.aC,B.x,B.QK,null,null)
D.ddq=w([B.aZ,B.aV,B.bV],x.O)
D.bY1=new A.a8(B.ax,B.aC,B.x,D.ddq,null,null)
D.civ=w([B.bv,B.aZ,B.f_],x.O)
D.ciC=w([B.bu,B.aE,B.jb],x.O)
D.ciE=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bev=new A.v(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.coM=w([D.bev,E.aes],x.O)
D.e4T=new A.u(1,2)
D.ePM=new A.cR(B.aW,D.e4T,3)
D.aui=w([D.ePM],x.A)
D.cw3=w([B.h4,B.ce,B.fc],x.O)
D.cyL=w([B.bJ,B.br,B.bo],x.O)
D.bzb=new C.ub("classic","Classic leather","Gold-edged brown leather",D.axg,E.jW,E.jW,"\u2766",B.L,!0,!1,!1,!1)
D.b7t=new A.v(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bkj=new A.v(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cUW=w([D.b7t,D.bkj],x.O)
D.aew=new A.v(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bz6=new C.ub("ornate","Ornate gold","Double gold border and flourishes",D.cUW,D.aew,D.aew,"\u2726",B.L,!0,!0,!0,!1)
D.bb_=new A.v(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bgD=new A.v(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cNb=w([D.bb_,D.bgD],x.O)
D.bz5=new C.ub("parchment","Parchment","Old paper with dark ink",D.cNb,D.EL,G.iB,"\u2767",B.L,!0,!1,!1,!0)
D.ac4=new A.v(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.biJ=new A.v(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.dbM=w([D.ac4,D.biJ],x.O)
D.be5=new A.v(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bi5=new A.v(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bz8=new C.ub("minimal","Clean paper","Plain and elegant, like a printed book",D.dbM,D.be5,D.bi5,"",B.L,!0,!0,!1,!0)
D.bza=new C.ub("midnight","Midnight","Deep blue with silver stars",L.axy,B.cr,B.bK,"\u2727",B.L,!0,!0,!1,!1)
D.bz4=new C.ub("emerald","Emerald library","Green cloth, title on the left",Z.auG,E.jW,B.h5,"\u25c6",B.bh,!0,!1,!1,!1)
D.bj9=new A.v(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.da2=w([B.eq,D.bj9],x.O)
D.bf8=new A.v(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bge=new A.v(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bz9=new C.ub("rose","Rose vintage","Burgundy with rose-gold lettering",D.da2,D.bf8,D.bge,"\u2740",B.L,!0,!1,!0,!1)
D.dek=w([B.cu,O.ml],x.O)
D.bz7=new C.ub("modern","Modern","Dark, bold, left-aligned",D.dek,B.aP,B.c,"",B.bh,!1,!0,!1,!1)
D.a1J=w([D.bzb,D.bz6,D.bz5,D.bz8,D.bza,D.bz4,D.bz9,D.bz7],A.ax("O<ub>"))
D.cMI=w([B.bV,B.bk],x.O)
D.bfH=new A.v(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cNn=w([D.ac4,D.bfH],x.O)
D.baW=new A.v(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cOZ=w([D.baW,B.da],x.O)
D.cQu=w([B.b8,B.iS,B.oA],x.O)
D.cQR=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b84=new A.v(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bcO=new A.v(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dgS=w([D.adI,D.b84,D.bcO],x.O)
D.bzc=new C.uc("leather","Leather",D.dgS,"vintage")
D.cXU=w([B.di,B.L0,A4.Wm],x.O)
D.bzj=new C.uc("midnight","Midnight",D.cXU,"starry")
D.cQv=w([B.eA,B.dZ,B.lh],x.O)
D.bzi=new C.uc("forest","Forest",D.cQv,"story")
D.diM=w([B.eQ,B.eq,B.kr],x.O)
D.bzf=new C.uc("burgundy","Burgundy",D.diM,"royal")
D.cyk=w([B.aE,B.pB,B.nJ],x.O)
D.bzg=new C.uc("royal","Royal",D.cyk,"royal")
D.cSO=w([B.br,B.cu,O.ml],x.O)
D.bzd=new C.uc("charcoal","Charcoal",D.cSO,"geo")
D.dh_=w([B.cg,B.dR,B.xc],x.O)
D.bzh=new C.uc("sunset","Sunset",D.dh_,"sunset")
D.dhG=w([B.iS,B.EM,B.Wp],x.O)
D.bze=new C.uc("ocean","Ocean",D.dhG,"band")
D.yL=w([D.bzc,D.bzj,D.bzi,D.bzf,D.bzg,D.bzd,D.bzh,D.bze],A.ax("O<uc>"))
D.cTd=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cTM=w([B.ak,B.aK,B.M],x.O)
D.cV0=w([B.eq,B.dZ,B.di,B.fz,B.xg,B.cY,B.k_,B.ee,B.d5],x.O)
D.cV1=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ePN=new A.cR(B.dr,B.dE,8)
D.cVa=w([D.ePN],x.A)
D.cWe=w([B.bX,B.dR,B.kp],x.O)
D.cWH=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cXQ=w([B.bX,B.hi],x.O)
D.cZT=w([B.aM,B.xd,B.x3],x.O)
D.d_M=w([B.bL,B.c9,B.dv,B.aM],x.O)
D.d0g=w([B.jd,B.cg,B.tk],x.O)
D.d0L=w([B.f_,B.cY],x.O)
D.d1h=w([B.cs,B.fl,B.hl],x.O)
D.d1s=w([B.aP,B.bk,B.di],x.O)
D.d1Y=w([B.eu,B.cZ,B.dZ],x.O)
D.d2h=w([B.dM,B.di,B.L0],x.O)
D.d3x=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a2E=w(["leather","linen","plain","stars","rays"],x.s)
D.bGR=new A.a0(985219,"MaterialIcons",!1)
D.bGp=new A.a0(983781,"MaterialIcons",!1)
D.awX=w([B.akD,B.i3,B.lT,B.i4,D.bGR,B.Gf,B.pY,D.bGp,L.ame,B.yh,B.q_,B.mw],A.ax("O<a0>"))
D.a2J=w(["double","single","corners","none"],x.s)
D.d6c=w([B.dy,B.bl,B.ee],x.O)
D.d6p=w([],x.t)
D.Ce=w([],x.u)
D.d8F=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.daW=w([B.aF,B.fl,B.fz],x.O)
D.dcm=w([B.bN,B.mZ,B.Xk],x.O)
D.dcB=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dvL=new C.ly("construction","Construction","Jobsite & builds",B.y7)
D.dvS=new C.ly("house","Home Build","Houses & rooms",B.vH)
D.dvI=new C.ly("grocery","Grocery","Store & pantry",B.a0l)
D.dvH=new C.ly("calculator","Calculations","Math & estimates",B.Nm)
D.dvQ=new C.ly("lumber","Materials","Lumber & supplies",B.NC)
D.dvE=new C.ly("kitchen","Kitchen","Remodel & meals",Aa.alr)
D.bGm=new A.a0(983756,"MaterialIcons",!1)
D.dvJ=new C.ly("landscape","Landscaping","Yard & garden",D.bGm)
D.dvD=new C.ly("plumbing","Plumbing","Pipes & water",B.q7)
D.dvT=new C.ly("electrical","Electrical","Wiring & power",B.ha)
D.dvB=new C.ly("store","Retail Shop","Daily business",B.l0)
D.dvC=new C.ly("paint_remodel","Paint & Remodel","Colors & walls",Ab.a_W)
D.bFL=new A.a0(983311,"MaterialIcons",!1)
D.dvP=new C.ly("roofing","Roofing","Roofs & exteriors",D.bFL)
D.bGz=new A.a0(983986,"MaterialIcons",!1)
D.dvA=new C.ly("warehouse","Warehouse","Storage & stock",D.bGz)
D.dvN=new C.ly("vehicles","Vehicles","Fleet & transport",B.Gg)
D.bDv=new A.a0(62785,"MaterialIcons",!1)
D.dvG=new C.ly("farm","Farm","Crops & livestock",D.bDv)
D.dvF=new C.ly("restaurant","Restaurant","Food & catering",B.u4)
D.dvM=new C.ly("tools","Tools","Workshop gear",B.Gb)
D.dvR=new C.ly("wallet","Cash & Wallet","Quick spending",B.jI)
D.bEI=new A.a0(63395,"MaterialIcons",!1)
D.dvO=new C.ly("concrete","Concrete","Foundation work",D.bEI)
D.dvK=new C.ly("blueprint","Blueprint","Plans & design",Af.akJ)
D.a3d=w([D.dvL,D.dvS,D.dvI,D.dvH,D.dvQ,D.dvE,D.dvJ,D.dvD,D.dvT,D.dvB,D.dvC,D.dvP,D.dvA,D.dvN,D.dvG,D.dvF,D.dvM,D.dvR,D.dvO,D.dvK],A.ax("O<ly>"))
D.dd4=w([B.bs,B.bl],x.O)
D.ddR=w([B.ib,B.nO,B.dH],x.O)
D.a3m=w(["top","middle","bottom"],x.s)
D.dge=w([B.cn,B.bk,B.di],x.O)
D.dgM=w([B.b2,B.cZ,B.dZ],x.O)
D.diH=w([B.bJ,B.ak],x.O)
D.diI=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e2n={top:0,middle:1,bottom:2}
D.dlU=new A.bl(D.e2n,["Top","Middle","Bottom"],x.n)
D.e20={double:0,single:1,corners:2,none:3}
D.dlZ=new A.bl(D.e20,["Double line","One line","Corners","None"],x.n)
D.e3c={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dnp=new A.bl(D.e3c,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dnB=new A.bl(B.i8,[],A.ax("bl<G,+(n,n)>"))
D.e2f={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Cr=new A.bl(D.e2f,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bl<n,G>"))
D.dqk=new F.MM(32,null)
D.dql=new F.MM(40,null)
D.dqm=new F.MM(46,null)
D.aGd=new C.arV(null)
D.e5R=new A.u(8,14)
D.fn3=new A.y("Write a new book",null,B.hF,null,B.L,null,null,null,null,null,null,null)
D.e8x=new A.D(B.kW,D.fn3,null)
D.amF=new A.ae(B.hz,18,B.c,null,null,null)
D.fgr=new A.y("Add",null,B.m7,null,null,null,null,null,null,null,null,null)
D.d00=w([D.amF,B.qo,D.fgr],x.p)
D.eNC=new A.cl(B.aO,B.e,B.P,B.m,null,B.p,null,0,D.d00,null)
D.e8S=new A.D(B.o_,D.eNC,null)
D.e8T=new A.D(E.agZ,Y.VQ,null)
D.fat=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjt=new A.y("New Project",null,D.fat,null,null,null,null,null,null,null,null,null)
D.d3U=w([D.amF,B.ab,D.fjt],x.p)
D.eNF=new A.cl(B.aO,B.e,B.P,B.m,null,B.p,null,0,D.d3U,null)
D.e93=new A.D(B.ii,D.eNF,null)
D.flR=new A.y("Choose your header",null,T.qs,null,null,null,null,null,null,null,null,null)
D.e9o=new A.D(B.hO,D.flR,null)
D.b6q=new A.fj(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eSr=new A.a7(22,22,D.b6q,null)
D.b4B=new A.cp(B.A,null,null,D.eSr,null)
D.e9t=new A.D(B.Yj,D.b4B,null)
D.bsr=new A.Q(14,2,14,6)
D.fzn=new A.y("The top of your book. Tap a design to see it.",null,S.zE,null,null,null,null,null,null,null,null,null)
D.e9u=new A.D(D.bsr,D.fzn,null)
D.eb1=new A.iP(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eb4=new A.iP(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aHs=new A.iP(1,0.9607843137254902,0.48627450980392156,0)
D.If=new A.iP(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zi=new A.iP(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eba=new A.iP(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fZF=new C.bgx(null)
D.bnu=new A.mj(D.fZF,null,B.av,null,null)
D.aL5=new A.cL(0,0,0,0,null,null,D.bnu,null)
D.ezq=new A.z(-42,42)
D.eIi=new A.cA([0,0,1,1])
D.aMq=new A.a9(0,0,520,160)
D.fyW=new A.y("Let the AI write it from your tree",null,B.kf,null,B.L,null,null,null,null,null,null,null)
D.bzQ=new A.dq(1,B.co,D.fyW,null)
D.cXP=w([E.a0O,B.ab,D.bzQ],x.p)
D.eNh=new A.cl(B.aO,B.e,B.P,B.m,null,B.p,null,0,D.cXP,null)
D.fg6=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.dbg=w([D.anv,B.ab,D.fg6],x.p)
D.eNr=new A.cl(B.aO,B.b9,B.j,B.m,null,B.p,null,0,D.dbg,null)
D.bKY=new A.ae(B.hP,14,B.aZ,null,null,null)
D.f4t=new A.H(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjT=new A.y("Cashier",null,D.f4t,null,null,null,null,null,null,null,null,null)
D.d4p=w([D.bKY,B.bp,D.fjT],x.p)
D.eNu=new A.cl(B.aO,B.e,B.P,B.m,null,B.p,null,0,D.d4p,null)
D.fg7=new A.y("Transfer & settings",null,B.dj,null,null,null,null,null,null,null,null,null)
D.byc=new A.bB(1,B.bg,D.fg7,null)
D.cPY=w([D.an4,B.au,D.byc],x.p)
D.eNv=new A.cl(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cPY,null)
D.eRa=new A.ar(16,40)
D.eRf=new A.ar(22,64)
D.eRm=new A.ar(280,88)
D.eS7=new A.a7(30,null,null,null)
D.eTp=new A.hN(2,12,12,1.05,null)
D.fjz=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eU7=new A.b1(D.fjz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fjO=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aOu=new A.b1(D.fjO,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.frV=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eUB=new A.b1(D.frV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fCd=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eUG=new A.b1(D.fCd,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flP=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eUN=new A.b1(D.flP,null,null,null,null,null,null,null,null,null,null,null,null,B.fK,!1,null,null,null,B.r,null)
D.fzA=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aOy=new A.b1(D.fzA,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgI=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eVc=new A.b1(D.fgI,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fCT=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eVW=new A.b1(D.fCT,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fxR=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eWk=new A.b1(D.fxR,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fCh=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eWn=new A.b1(D.fCh,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ftt=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eWp=new A.b1(D.ftt,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnE=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eWq=new A.b1(D.fnE,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnF=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eXq=new A.b1(D.fnF,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fjB=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eXI=new A.b1(D.fjB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flt=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eY0=new A.b1(D.flt,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fsZ=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new A.b1(D.fsZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fot=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eYh=new A.b1(D.fot,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f0q=new A.H(!0,D.ko,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Q=new A.H(!0,D.ko,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1u=new A.rC(!0,B.rE,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1M=new A.H(!0,D.ko,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2j=new A.H(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7C=new A.rC(!0,B.S5,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3i=new A.H(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3H=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5g=new A.H(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5k=new A.H(!0,G.iB,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6z=new A.H(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7h=new A.H(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8_=new A.H(!0,B.bV,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f83=new A.H(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new A.H(!0,D.EL,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8z=new A.H(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9y=new A.H(!0,B.cY,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa1=new A.H(!0,B.bV,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.far=new A.H(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbS=new A.H(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc_=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQL=new A.H(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a84=new A.H(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdF=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe1=new A.H(!0,G.iB,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe9=new A.H(!0,G.iB,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feX=new A.y("Themes",null,B.pb,null,null,null,null,null,null,null,null,null)
D.ffy=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f5_=new A.H(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffX=new A.y("Debt receipt",null,D.f5_,null,B.L,null,null,null,null,null,null,null)
D.aQG=new A.H(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fge=new A.y("Person who owes",null,D.aQG,null,null,null,null,null,null,null,null,null)
D.fha=new A.y("Notes",null,B.a7L,null,null,null,null,null,null,null,null,null)
D.fhA=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f3Z=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhE=new A.y("Share",null,D.f3Z,null,null,null,null,null,null,null,null,null)
D.fiA=new A.y("Move your family trees",null,D.aQL,null,null,null,null,null,null,null,null,null)
D.fjb=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fjN=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new A.y("Remove this book?",null,B.hs,null,null,null,null,null,null,null,null,null)
D.aRd=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fmc=new A.y("What should the AI do?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.fnA=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.foI=new A.y("Ribbon bookmark",null,B.iO,null,null,null,null,null,null,null,null,null)
D.fbM=new A.H(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpa=new A.y("NGMY.ORG",null,D.fbM,null,B.L,null,null,null,null,null,null,null)
D.fqq=new A.y("Scan family tree QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.f8i=new A.H(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fra=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f8i,null,B.L,null,null,null,null,null,null,null)
D.fsn=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fsu=new A.y("Thumbnail",null,B.pb,null,null,null,null,null,null,null,null,null)
D.ft4=new A.y("Save the cover",null,B.cA,null,null,null,null,null,null,null,null,null)
D.ftu=new A.y("Your photos",null,B.pb,null,null,null,null,null,null,null,null,null)
D.ftJ=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fuf=new A.y("Design your cover",null,T.qs,null,null,null,null,null,null,null,null,null)
D.ful=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fuo=new A.y("PICTURE",null,H.mP,null,null,null,null,null,null,null,null,null)
D.fuK=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fuM=new A.y("You can undo it right after.",null,S.zF,null,null,null,null,null,null,null,null,null)
D.fvj=new A.y("Print",null,B.uK,null,null,null,null,null,null,null,null,null)
D.fvG=new A.y("Amount owed",null,D.aQG,null,null,null,null,null,null,null,null,null)
D.fvV=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fwv=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fwy=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fwZ=new A.y("Debtor signature",null,B.a7L,null,null,null,null,null,null,null,null,null)
D.fx7=new A.y("Change icon",null,E.aPX,null,null,null,null,null,null,null,null,null)
D.fyj=new A.y("Family tree QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fyM=new A.y("Download",null,B.uK,null,null,null,null,null,null,null,null,null)
D.fyQ=new A.y("Change",null,B.pb,null,null,null,null,null,null,null,null,null)
D.fzG=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fzJ=new A.y("WHAT SHOULD IT CHANGE?",null,H.mP,null,null,null,null,null,null,null,null,null)
D.fAi=new A.y("COLOUR",null,H.mP,null,null,null,null,null,null,null,null,null)
D.fAw=new A.y("Do it",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fAz=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fBz=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f_p=new A.H(!0,E.jW,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBO=new A.y("Write the first page myself",null,D.f_p,null,null,null,null,null,null,null,null,null)
D.fCk=new A.y("Use this header",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fCq=new A.y("Create Project",null,E.aQp,null,null,null,null,null,null,null,null,null)
D.fWb=new C.ab7(1,"header")
D.a8Z=new C.ab7(2,"projects")
D.fWc=new C.ab7(3,"cashier")
D.a9_=new C.ab7(4,"familyTree")
D.h6R=new C.cwh(0,"start")
D.h6S=new C.cwi(0,"start")
D.fWA=new C.Ya(null)
D.fXz=new C.YC(null)
D.dny=new A.bl(B.i8,[],A.ax("bl<n,FC>"))
D.d6N=w([],x.E)
D.d6O=w([],x.M)
D.fY5=new C.bdO(D.dny,D.d6N,D.d6O,0,0,null,null)
D.h_j=new C.a__(null)
D.a9H=new C.aJ2(0,"projects")
D.aVC=new C.aJ2(1,"cashier")
D.h4y=new C.aJ2(2,"familyTree")})()};
(a=>{a["L3maLRRE23s5IsJVLFasxKn/4+s="]=a.current})($__dart_deferred_initializers__);