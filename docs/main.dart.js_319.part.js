((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,R,A2,G,F,E,A3,A4,A5,A6,S,T,A7,A8,M,A9,H,Aa,Ab,U,V,W,Ac,Ad,X,Ae,Af,Ag,Y,Ah,Ai,K,Aj,Z,A_,O,P,L,Q,C={
bCu(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCu=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vh(null,""),$async$bCu)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n6(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
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
return A.b(A.qP(t,a1,B.hD,"book",E.Fd),$async$bCu)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Qd(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KT(l)?y.l:y.i)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cC
g=a8.h(0,"title")
a9=B.a.i(A.u(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.u(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a25(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCu,v)},
agE(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agE=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vh(null,""),$async$agE)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n6(b6)
s=x.S
r=A.db(c1,0,A.dG(4,"count",s),A.U(c1).c)
q=F.a1T(new A.M(r,new C.fAS(),r.$ti.k("M<ak.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fAR(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agE)
case 6:l=c5
k=F.Qd(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.anT(s,D.doF,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agE)
case 10:l=c5
k=l==null?null:F.Qd(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.u(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.u(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kZ(a5,a2.k("kZ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a4(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.u(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.u(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cD(new A.bc(h,s),new C.fAT(),s.k("J.E"),p)
p=F.a1T(A.pe(p,3,A.a3(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a25(s,b9),$async$agE)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anT(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agE,v)},
hpA(d,e,f){return A.cb(null,B.w.j(0.65),!1,null,new C.fK4(e,f),d,null,!0,!0,x.g2)},
anT:function anT(d,e,f){this.a=d
this.b=e
this.c=f},
fAS:function fAS(){},
fAR:function fAR(d){this.a=d},
fAT:function fAT(){},
fK4:function fK4(d,e){this.a=d
this.b=e},
bAk(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAk=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b6(b1,new C.fpE())){u=null
w=1
break}t=B.d.d6(b1,new C.fpF())
s=$.W()
r=new A.qZ()
q=A.Dh(r,D.aMA)
p=A.N()
p.r=B.c.gp(0)
q.b_(D.aMA,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bS
o.e=B.fF
n=new C.fpK(t)
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
a3.e=null}}q.aR(a3,o)}else{p=A.a([],x.v)
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
a3.e=null}}q.aR(a3,o)}w=4
return A.b(r.pE().zj(520,160),$async$bAk)
case 4:w=3
return A.b(b3.hv(B.h_),$async$bAk)
case 3:b0=b3
u=b0==null?null:J.eU(B.dD.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAk,v)},
fyy(d){return C.i30(d)},
i30(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fyy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bg6()
n=d.x!=null&&d.z_(null).length===0
if(d.x!=null)t=n?D.zl:D.If
else t=d.gTw()?D.If:D.aHy
w=3
return A.b(C.bAk(d.ax),$async$fyy)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amC(s)
r=A.a43(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aHy}else{p.c=C.wI(q,!0)
p.b=n?D.zl:D.If}r.a2N(A.fUf(new C.fyA(p,d,new C.fyB(),t,n,o),null,D.bwo,B.wg))
u=r.kc(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyy,v)},
fFb(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fFb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fyy(d),$async$fFb)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gw(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFb,v)},
fpE:function fpE(){},
fpF:function fpF(){},
fpK:function fpK(d){this.a=d},
fyB:function fyB(){},
fyA:function fyA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyz:function fyz(){},
fKw(d,e){var w=0,v=A.j(x.H)
var $async$fKw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,B.w.j(0.55),!0,null,new C.fKA(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fKw)
case 2:return A.h(null,v)}})
return A.i($async$fKw,v)},
bCX(d,e,f,g){return C.iav(d,e,f,g)},
iav(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cI.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.J(x.q).f.U(D.eZA)
w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.fKs(g,r,f),d,null,!0,!0,x.H),$async$bCX)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCX,v)},
fKB(d,e){var w=0,v=A.j(x.H)
var $async$fKB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,null,!0,null,new C.fKE(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fKB)
case 2:return A.h(null,v)}})
return A.i($async$fKB,v)},
aY6:function aY6(d,e){this.c=d
this.a=e},
c1F:function c1F(){},
bac:function bac(d,e){this.b=d
this.a=e},
fKA:function fKA(d,e){this.a=d
this.b=e},
fKx:function fKx(d){this.a=d},
fKy:function fKy(d,e,f){this.a=d
this.b=e
this.c=f},
fKz:function fKz(d,e){this.a=d
this.b=e},
fKs:function fKs(d,e,f){this.a=d
this.b=e
this.c=f},
fKq:function fKq(d){this.a=d},
fKr:function fKr(d,e,f){this.a=d
this.b=e
this.c=f},
fKE:function fKE(d,e){this.a=d
this.b=e},
fKC:function fKC(d){this.a=d},
fKD:function fKD(d,e,f){this.a=d
this.b=e
this.c=f},
ftw(d,e){var w=0,v=A.j(x.y),u,t
var $async$ftw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1E(d),$async$ftw)
case 3:t=g
J.ns(t,new C.ftx(e))
u=A.ahi(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ftw,v)},
ftx:function ftx(d){this.a=d},
ao_:function ao_(d,e,f){this.c=d
this.d=e
this.a=f},
aCf:function aCf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dG_:function dG_(d,e){this.a=d
this.b=e},
dFL:function dFL(d,e){this.a=d
this.b=e},
dFO:function dFO(d,e,f){this.a=d
this.b=e
this.c=f},
dFN:function dFN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFM:function dFM(d,e){this.a=d
this.b=e},
dFP:function dFP(d,e){this.a=d
this.b=e},
dFJ:function dFJ(){},
dFK:function dFK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFI:function dFI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFt:function dFt(d){this.a=d},
dFu:function dFu(d,e,f){this.a=d
this.b=e
this.c=f},
dFv:function dFv(d,e){this.a=d
this.b=e},
dFs:function dFs(d){this.a=d},
dFA:function dFA(d,e){this.a=d
this.b=e},
dFr:function dFr(d){this.a=d},
dFB:function dFB(d,e,f){this.a=d
this.b=e
this.c=f},
dFC:function dFC(d,e,f){this.a=d
this.b=e
this.c=f},
dFq:function dFq(d,e){this.a=d
this.b=e},
dFD:function dFD(d,e,f){this.a=d
this.b=e
this.c=f},
dFp:function dFp(d,e){this.a=d
this.b=e},
dFE:function dFE(d,e){this.a=d
this.b=e},
dFo:function dFo(d){this.a=d},
dFF:function dFF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFm:function dFm(){},
dFg:function dFg(d){this.a=d},
dFh:function dFh(d){this.a=d},
dFn:function dFn(d,e){this.a=d
this.b=e},
dFG:function dFG(d,e){this.a=d
this.b=e},
dFl:function dFl(d){this.a=d},
dFH:function dFH(d){this.a=d},
dFk:function dFk(){},
dFw:function dFw(d,e){this.a=d
this.b=e},
dFj:function dFj(d){this.a=d},
dFx:function dFx(d,e,f){this.a=d
this.b=e
this.c=f},
dFi:function dFi(d,e){this.a=d
this.b=e},
dFf:function dFf(d,e){this.a=d
this.b=e},
dFy:function dFy(d){this.a=d},
dFz:function dFz(d,e,f){this.a=d
this.b=e
this.c=f},
dG2:function dG2(){},
dG3:function dG3(d,e){this.a=d
this.b=e},
dG0:function dG0(d){this.a=d},
dG1:function dG1(d){this.a=d},
dFX:function dFX(d,e){this.a=d
this.b=e},
dFY:function dFY(d){this.a=d},
dFQ:function dFQ(d,e,f){this.a=d
this.b=e
this.c=f},
dFR:function dFR(d,e,f){this.a=d
this.b=e
this.c=f},
dFS:function dFS(d,e,f){this.a=d
this.b=e
this.c=f},
dFT:function dFT(d,e,f){this.a=d
this.b=e
this.c=f},
dFU:function dFU(d,e,f){this.a=d
this.b=e
this.c=f},
dFV:function dFV(d,e,f){this.a=d
this.b=e
this.c=f},
dFW:function dFW(d,e,f){this.a=d
this.b=e
this.c=f},
dG4:function dG4(){},
dG5:function dG5(){},
dG6:function dG6(){},
dG7:function dG7(d){this.a=d},
dFZ:function dFZ(d,e){this.a=d
this.b=e},
hlL(d){return B.d.dL(D.a1O,new C.fu8(d),new C.fu9())},
uc:function uc(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fu8:function fu8(d){this.a=d},
fu9:function fu9(){},
akl:function akl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTS:function aTS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Su:function Su(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdP:function bdP(){this.d=$
this.c=this.a=null},
d5O:function d5O(d,e){this.a=d
this.b=e},
d5M:function d5M(d,e){this.a=d
this.b=e},
d5N:function d5N(){},
d5P:function d5P(d,e){this.a=d
this.b=e},
h6v(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nd(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KF(d,e){return C.i1E(d,e)},
i1E(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KF=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$KF)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.S.aJ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.da(p,x.f)
o=A.cD(o,new C.fwc(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fwd(),n),n.k("J.E"))
B.d.aY(o,new C.fwe())
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
return A.i($async$KF,v)},
AR(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$AR)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fJa(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AR,v)},
aQ_(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQ_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KF(d,e),$async$aQ_)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.fRk(f))
if(s===-1)t.ci(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AR(d,e,u),$async$aQ_)
case 3:return A.h(null,v)}})
return A.i($async$aQ_,v)},
bAM(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KF(d,e),$async$bAM)
case 2:u=h
J.ns(u,new C.fto(f))
w=3
return A.b(C.AR(d,e,u),$async$bAM)
case 3:return A.h(null,v)}})
return A.i($async$bAM,v)},
bB0(d,e){return C.i1D(d,e)},
i1D(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bB0=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bB0)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.MK
w=1
break}p=B.S.aJ(0,q,null)
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
if(D.Cu.ai(0,o.h(0,"foil")))j=A.cQ(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3q,o.h(0,"position"))?A.cQ(o.h(0,"position")):"middle"
g=B.d.t(D.a2O,o.h(0,"frame"))?A.cQ(o.h(0,"frame")):"double"
f=B.d.t(D.a2J,o.h(0,"texture"))?A.cQ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cU4,o.h(0,"header"))?A.cQ(o.h(0,"header")):"classic"
o=new C.Hs(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.MK
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.MK
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bB0,v)},
Ri(d,e,f){return C.ia1(d,e,f)},
ia1(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Ri=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Ri)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ah(),null)),$async$Ri)
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
return A.i($async$Ri,v)},
QM(d,e){return C.i1F(d,e)},
i1F(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$QM)
case 7:r=g
q=r.tb("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KF(d,e),$async$QM)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lp(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QM)
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
return A.i($async$QM,v)},
afZ(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QM(d,e),$async$afZ)
case 3:s=g
r=J.a4(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.az(),$async$afZ)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afZ)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afZ,v)},
a2i(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2i=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QM(d,e),$async$a2i)
case 2:s=h
J.hw(s,f)
w=3
return A.b(A.az(),$async$a2i)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2i)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2i)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2i)
case 6:return A.h(null,v)}})
return A.i($async$a2i,v)},
nd:function nd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwc:function fwc(){},
fwd:function fwd(){},
fwe:function fwe(){},
fJa:function fJa(){},
fRk:function fRk(d){this.a=d},
fto:function fto(d){this.a=d},
Hs:function Hs(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bNp:function bNp(d){this.a=d},
iak(d,e,f,g,h,i,j){return A.a6(d,!1).cl(A.e8(new C.fJJ(j,i,f,e,h,g),!0,null,x.H))},
QI(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QI=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QM(h,g),$async$QI)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.J(x.q).f.U(D.aOF)
u=!1
w=1
break}w=4
return A.b(C.hpA(d,f,e),$async$QI)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afZ(h,g),$async$QI)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nd(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AR(h,r,p),$async$QI)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Ri(h,r,new C.Hs("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QI)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QI,v)},
fJJ:function fJJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Z2:function Z2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azj:function azj(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d6t:function d6t(d){this.a=d},
d6s:function d6s(d,e){this.a=d
this.b=e},
d6h:function d6h(d,e){this.a=d
this.b=e},
d6e:function d6e(d,e){this.a=d
this.b=e},
d5Q:function d5Q(d){this.a=d},
d5R:function d5R(d,e){this.a=d
this.b=e},
d6i:function d6i(d){this.a=d},
d5Z:function d5Z(d){this.a=d},
d5X:function d5X(d){this.a=d},
d5Y:function d5Y(d){this.a=d},
d6_:function d6_(d){this.a=d},
d6f:function d6f(d){this.a=d},
d6g:function d6g(){},
d5V:function d5V(d){this.a=d},
d5W:function d5W(d,e){this.a=d
this.b=e},
d60:function d60(d){this.a=d},
d61:function d61(d,e){this.a=d
this.b=e},
d6r:function d6r(d){this.a=d},
d6q:function d6q(d,e){this.a=d
this.b=e},
d6p:function d6p(d){this.a=d},
d6b:function d6b(d){this.a=d},
d6a:function d6a(d){this.a=d},
d6c:function d6c(d){this.a=d},
d5S:function d5S(d,e){this.a=d
this.b=e},
d6d:function d6d(d,e){this.a=d
this.b=e},
d64:function d64(d){this.a=d},
d65:function d65(d){this.a=d},
d63:function d63(){},
d66:function d66(d){this.a=d},
d67:function d67(d){this.a=d},
d68:function d68(d,e){this.a=d
this.b=e},
d69:function d69(d,e,f){this.a=d
this.b=e
this.c=f},
d62:function d62(d,e){this.a=d
this.b=e},
d6k:function d6k(d){this.a=d},
d6j:function d6j(){},
d6l:function d6l(d){this.a=d},
d6m:function d6m(d){this.a=d},
d6n:function d6n(d){this.a=d},
d6o:function d6o(d,e){this.a=d
this.b=e},
d5T:function d5T(d){this.a=d},
d5U:function d5U(d){this.a=d},
Z6:function Z6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be9:function be9(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d8d:function d8d(d){this.a=d},
d8e:function d8e(d){this.a=d},
d8c:function d8c(d){this.a=d},
d8f:function d8f(d){this.a=d},
d8b:function d8b(d){this.a=d},
d8g:function d8g(d){this.a=d},
d8a:function d8a(d){this.a=d},
d8h:function d8h(d,e){this.a=d
this.b=e},
d89:function d89(d,e){this.a=d
this.b=e},
d8i:function d8i(d,e){this.a=d
this.b=e},
Z4:function Z4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aer:function aer(d,e,f){this.a=d
this.b=e
this.c=f},
azk:function azk(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d6I:function d6I(d,e){this.a=d
this.b=e},
d6H:function d6H(d,e){this.a=d
this.b=e},
d6M:function d6M(d){this.a=d},
d6L:function d6L(d,e){this.a=d
this.b=e},
d6J:function d6J(d){this.a=d},
d6K:function d6K(d){this.a=d},
d6N:function d6N(d){this.a=d},
d6O:function d6O(d){this.a=d},
d6G:function d6G(d,e){this.a=d
this.b=e},
d6F:function d6F(d,e){this.a=d
this.b=e},
JM:function JM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yl:function Yl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cFi:function cFi(d){this.a=d},
cFj:function cFj(){},
cFk:function cFk(d){this.a=d},
bbp:function bbp(d,e,f){this.b=d
this.c=e
this.a=f},
bbg:function bbg(d,e){this.b=d
this.a=e},
ud:function ud(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YD:function YD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbn:function bbn(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cYK:function cYK(d,e,f){this.a=d
this.b=e
this.c=f},
cYJ:function cYJ(d,e){this.a=d
this.b=e},
cZ8:function cZ8(d){this.a=d},
cYW:function cYW(){},
cZ9:function cZ9(d){this.a=d},
cYV:function cYV(){},
cZa:function cZa(d,e){this.a=d
this.b=e},
cYU:function cYU(d,e){this.a=d
this.b=e},
cZb:function cZb(d,e){this.a=d
this.b=e},
cYT:function cYT(d,e){this.a=d
this.b=e},
cZc:function cZc(d){this.a=d},
cYS:function cYS(){},
cZd:function cZd(d,e){this.a=d
this.b=e},
cYR:function cYR(d,e){this.a=d
this.b=e},
cZe:function cZe(d){this.a=d},
cZ3:function cZ3(d,e){this.a=d
this.b=e},
cZf:function cZf(d){this.a=d},
cZg:function cZg(d){this.a=d},
cZi:function cZi(d){this.a=d},
cZj:function cZj(d){this.a=d},
cZ2:function cZ2(d,e){this.a=d
this.b=e},
cZk:function cZk(d,e){this.a=d
this.b=e},
aGj:function aGj(d){this.a=d},
bgD:function bgD(d){this.a=d},
b9B:function b9B(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i0C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahv(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fuc(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a_<1>"),q=q.k("cO<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xX)m.push(l===D.ZQ?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cG(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cG(k)
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
m.push("child of "+l+k)}a0=A.C(new A.cO(new A.a_(a4,new C.fua(u,f),p),new C.fub(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i0D(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahv(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fuh(v,e)
q=new C.fuf(v)
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
B.d.fq(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f0(l,new C.fug(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hNh(d,e,f,g){var w,v,u=C.i0E(d,e)
if(u<=0||f.length<=u)return new A.ae1(!1,D.Ch,f)
if(g.t(0,e.a))return new A.ae1(!1,D.Ch,f)
w=A.U(f).c
v=A.db(f,0,A.dG(u,"count",x.S),w).dJ(0)
return new A.ae1(!0,A.db(f,u,null,w).dJ(0),v)},
hNi(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahv(d3),d2=d1.length
if(d2===0)return D.h_O
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.c8(0,t.a,new C.d6V(t))}s=new C.d7b(v)
d2=x.h
r=A.T(w,d2)
q=new C.d73(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d72(r)
l=A.T(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.c8(0,k,new C.d6W()),o)}h=new C.d71(s)
g=new C.d70(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d6X(h),o),o.k("J.E"))
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
a9=new C.d79(new C.d75(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gaki(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ev([i],w)
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
b7=new C.d6U(a2,new C.d7a(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.FD(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.JU(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bL(0,new C.d6Y(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f0(j,new C.d6Z(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aY(o,new C.d7_())
c6.push(new C.aIp(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdU(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hlf(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hfA(d,e,f,g,h,i,j,k,l,m,n){return new C.ZG(k,f,j,e,l,n,m,d,g,h,i,null)},
aBg(d,e,f,g,h,i,j){return new C.bhz(i,d,e,f,j,h,g,null)},
ap7:function ap7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCQ:function aCQ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTZ:function dTZ(d){this.a=d},
dTY:function dTY(d){this.a=d},
dU0:function dU0(d,e){this.a=d
this.b=e},
dU1:function dU1(d,e){this.a=d
this.b=e},
dU2:function dU2(d){this.a=d},
dTX:function dTX(d,e){this.a=d
this.b=e},
dU_:function dU_(d){this.a=d},
dU4:function dU4(d){this.a=d},
dU3:function dU3(d,e){this.a=d
this.b=e},
ap1:function ap1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCN:function aCN(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dTp:function dTp(d){this.a=d},
dTn:function dTn(d){this.a=d},
dTo:function dTo(d){this.a=d},
dTq:function dTq(d,e){this.a=d
this.b=e},
dTk:function dTk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dST:function dST(d){this.a=d},
dSU:function dSU(d,e){this.a=d
this.b=e},
dT7:function dT7(d){this.a=d},
dT5:function dT5(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT8:function dT8(d){this.a=d},
dT9:function dT9(d,e){this.a=d
this.b=e},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTg:function dTg(d,e){this.a=d
this.b=e},
dTc:function dTc(d,e){this.a=d
this.b=e},
dTb:function dTb(d){this.a=d},
dTd:function dTd(d,e){this.a=d
this.b=e},
dTa:function dTa(d){this.a=d},
dTe:function dTe(d){this.a=d},
dTf:function dTf(d){this.a=d},
dTi:function dTi(d,e){this.a=d
this.b=e},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSI:function dSI(d,e){this.a=d
this.b=e},
dTs:function dTs(d,e,f){this.a=d
this.b=e
this.c=f},
dTm:function dTm(d,e,f){this.a=d
this.b=e
this.c=f},
dTl:function dTl(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(d){this.a=d},
dSL:function dSL(){},
dSM:function dSM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSO:function dSO(d){this.a=d},
dSR:function dSR(d,e){this.a=d
this.b=e},
dSN:function dSN(d){this.a=d},
dTr:function dTr(d){this.a=d},
dT2:function dT2(){},
dT3:function dT3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT1:function dT1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSY:function dSY(d,e,f){this.a=d
this.b=e
this.c=f},
dSX:function dSX(d,e,f){this.a=d
this.b=e
this.c=f},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d){this.a=d},
dT_:function dT_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSW:function dSW(d,e){this.a=d
this.b=e},
dT0:function dT0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT4:function dT4(d,e){this.a=d
this.b=e},
dTz:function dTz(){},
dTA:function dTA(d,e){this.a=d
this.b=e},
dTB:function dTB(d){this.a=d},
dTC:function dTC(d,e){this.a=d
this.b=e},
dTv:function dTv(d){this.a=d},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTx:function dTx(d,e){this.a=d
this.b=e},
dTy:function dTy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dTD:function dTD(d){this.a=d},
dTu:function dTu(d){this.a=d},
dSS:function dSS(d){this.a=d},
bdS:function bdS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d6S:function d6S(d){this.a=d},
d6R:function d6R(d,e){this.a=d
this.b=e},
d6T:function d6T(d){this.a=d},
d6Q:function d6Q(d,e){this.a=d
this.b=e},
fuc:function fuc(d,e){this.a=d
this.b=e},
fud:function fud(d){this.a=d},
fue:function fue(){},
fua:function fua(d,e){this.a=d
this.b=e},
fub:function fub(){},
fuh:function fuh(d,e){this.a=d
this.b=e},
fui:function fui(d){this.a=d},
fuj:function fuj(){},
fuf:function fuf(d){this.a=d},
fug:function fug(d,e){this.a=d
this.b=e},
JU:function JU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FD:function FD(d,e){this.a=d
this.b=e},
bdU:function bdU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d6V:function d6V(d){this.a=d},
d7b:function d7b(d){this.a=d},
d73:function d73(d){this.a=d},
d74:function d74(){},
d72:function d72(d){this.a=d},
d6W:function d6W(){},
d71:function d71(d){this.a=d},
d70:function d70(d,e){this.a=d
this.b=e},
d6X:function d6X(d){this.a=d},
d75:function d75(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d76:function d76(d){this.a=d},
d77:function d77(d){this.a=d},
d78:function d78(){},
d79:function d79(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d7a:function d7a(){},
d6U:function d6U(d,e,f,g,h,i,j,k,l,m){var _=this
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
d6Y:function d6Y(d,e){this.a=d
this.b=e},
d6Z:function d6Z(d){this.a=d},
d7_:function d7_(){},
aIp:function aIp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdV:function bdV(d,e){this.b=d
this.a=e},
d7c:function d7c(){},
d7d:function d7d(d){this.a=d},
d7e:function d7e(d){this.a=d},
d7f:function d7f(){},
bhA:function bhA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcZ:function bcZ(d,e){this.b=d
this.a=e},
bvh:function bvh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fbA:function fbA(d){this.a=d},
bkW:function bkW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eNu:function eNu(d){this.a=d},
eNt:function eNt(d,e){this.a=d
this.b=e},
ZG:function ZG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBe:function aBe(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dn5:function dn5(d,e){this.a=d
this.b=e},
dn4:function dn4(d){this.a=d},
dn2:function dn2(d){this.a=d},
dn3:function dn3(d){this.a=d},
dne:function dne(d){this.a=d},
dnf:function dnf(d){this.a=d},
dnd:function dnd(d,e){this.a=d
this.b=e},
dng:function dng(){},
dnj:function dnj(d){this.a=d},
dnc:function dnc(d,e){this.a=d
this.b=e},
dni:function dni(){},
dnk:function dnk(d){this.a=d},
dnb:function dnb(d,e){this.a=d
this.b=e},
dnl:function dnl(d){this.a=d},
dna:function dna(d){this.a=d},
dnm:function dnm(d){this.a=d},
dn9:function dn9(d){this.a=d},
dnn:function dnn(d){this.a=d},
dn8:function dn8(d){this.a=d},
dno:function dno(d){this.a=d},
dn7:function dn7(d){this.a=d},
dnp:function dnp(d){this.a=d},
dn6:function dn6(d,e){this.a=d
this.b=e},
dnh:function dnh(d){this.a=d},
acS:function acS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhz:function bhz(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acR:function acR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhy:function bhy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnq:function dnq(d){this.a=d},
dnr:function dnr(d,e){this.a=d
this.b=e},
aBf:function aBf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHr:function aHr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acT:function acT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnA:function dnA(d){this.a=d},
JI:function JI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
has(d){var w=d.S,v=x.N
return w.j7(w,new C.c8c(),v,v)},
hEN(d){var w=d.bz
if(w>=0)return w
return 5},
hau(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.has(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hat(d,e){var w=C.hau(d,e)
if(w!=null&&w.cb(new A.S(Date.now(),0,!1)))return!0
return!1},
hEO(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.has(d),w,w)
u=C.hau(d,e)
t=u!=null&&u.cb(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bR(A.dC(30,0,0,0,0,0).a).a7().ac())
d.S=v},
aZw(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZw=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.le(t,B.I2),$async$aZw)
case 3:if(l){u=!0
w=1
break}u=A.kT(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.I2,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZw,v)},
c8c:function c8c(){},
hEL(){var w,v=$.pu(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.h1(u)},
Im(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Im=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Im)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Im)
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
$.am.$1("[family tree sync codes] load: "+A.u(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Im,v)},
a6T(d){return C.hEM(d)},
hEM(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6T=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6T)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hH("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a6T)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[family tree sync codes] save: "+A.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a6T,v)},
c8b(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c8b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Im(),$async$c8b)
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
return A.i($async$c8b,v)},
Nh(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Nh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c8b(d),$async$Nh)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Im(),$async$Nh)
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
return A.b(C.a6T(s),$async$Nh)
case 9:case 8:u=t
w=1
break
case 5:n=C.hEL()
w=10
return A.b(C.Im(),$async$Nh)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=11
return A.b(C.a6T(s),$async$Nh)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Nh,v)},
aZv(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Im(),$async$aZv)
case 3:t=f
for(s=J.dl(t),r=s.gdN(t),r=r.dJ(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6T(t),$async$aZv)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZv,v)},
a6U(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6U=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ap6(d,e),$async$a6U)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Nh(d),$async$a6U)
case 7:w=4
break
case 5:w=8
return A.b(C.aZv(d),$async$a6U)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6U,v)},
ap0(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ap0=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ap6(f,e),$async$ap0)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$ap0)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Im(),$async$ap0)
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
return A.i($async$ap0,v)},
aZu(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZu)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Im(),$async$aZu)
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
return A.i($async$aZu,v)},
hEP(){var w,v=$.pu(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.h1(u)},
ap3(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ap3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ap3)
case 3:if(!g){u=null
w=1
break}t=C.hEP()
w=4
return A.b(A.UP(),$async$ap3)
case 4:s=g
r=B.dK.aK(B.S.ao(d.eS(),null))
r=B.cV.gcB().aK(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(A.a6V(s),$async$ap3)
case 5:p=e?999:2
u=new A.a_S("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap3,v)},
ap2(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ap2=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UP(),$async$ap2)
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
return A.b(C.aZu(J.k(l==null?"":l),j),$async$ap2)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cA(0,B.cI.aK(t))
s=C.hav(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.u(q))
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
return A.b(A.a6V(p),$async$ap2)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap2,v)},
hav(d){var w,v,u,t,s=null
try{w=B.S.aJ(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hER(A.a2(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fVi(d){var w=0,v=A.j(x.m),u,t,s
var $async$fVi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ap2(t[1])
w=1
break}u=null
w=1
break}u=C.hav(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVi,v)},
hER(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cD(u,new C.c8e(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c8f(),t),t.k("J.E"))}else s=A.a([],x._)
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
n=A.cD(n,new C.c8g(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c8h(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ap4(h,w,s,r,q)},
ap6(d,e){var w=0,v=A.j(x.y),u,t
var $async$ap6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.N8(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AF(d),$async$ap6)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap6,v)},
c8n(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c8n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AF(d),$async$c8n)
case 3:t=s.b6(f,new C.c8o(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aY(t,new C.c8p())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8n,v)},
UQ(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UQ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ap6(e,d),$async$UQ)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Nh(e),$async$UQ)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AF(e),$async$UQ)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c8l(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gam(r)){u=null
w=1
break}t=t.dz(r,new C.c8m(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KF(e,o),$async$UQ)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.ap4(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UQ,v)},
aZz(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UQ(d,e,f,g),$async$aZz)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gm(A.JQ(q.eS(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZz,v)},
aZy(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZy=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UQ(d,e,f,g),$async$aZy)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ap3(r,f),$async$aZy)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFs(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZy,v)},
UR(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UR=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fVi(a0),$async$UR)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ap0(g.a,d,e,f,s,r),$async$UR)
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
return A.b(C.bAC(e,j),$async$UR)
case 12:case 11:w=13
return A.b(C.ahg(e,j,s),$async$UR)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.AR(e,i,h),$async$UR)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bow(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UR,v)},
ap4:function ap4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8j:function c8j(){},
c8k:function c8k(){},
c8i:function c8i(){},
c8e:function c8e(){},
c8f:function c8f(){},
c8g:function c8g(){},
c8h:function c8h(){},
c8o:function c8o(){},
c8p:function c8p(){},
c8l:function c8l(d){this.a=d},
c8m:function c8m(d){this.a=d},
h2G(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hC(d,new C.ap5(w,e,g,i,f,h,null),!0,null,x.H)},
d6P(d,e,f,g,h,i,j,k){return new C.bdR(i,e,k,j,g,f,h,d,null)},
ap5:function ap5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCP:function aCP(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dTM:function dTM(d){this.a=d},
dTN:function dTN(d,e,f){this.a=d
this.b=e
this.c=f},
dTR:function dTR(d,e){this.a=d
this.b=e},
dTS:function dTS(d){this.a=d},
dTJ:function dTJ(d){this.a=d},
dTK:function dTK(d,e){this.a=d
this.b=e},
dTL:function dTL(d,e){this.a=d
this.b=e},
dTQ:function dTQ(d){this.a=d},
dTP:function dTP(d,e){this.a=d
this.b=e},
dTO:function dTO(){},
dTU:function dTU(d){this.a=d},
dTV:function dTV(d,e){this.a=d
this.b=e},
dTT:function dTT(d,e){this.a=d
this.b=e},
d7g:function d7g(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdT:function bdT(d,e,f){this.d=d
this.e=e
this.a=f},
ac8:function ac8(d,e,f){this.c=d
this.d=e
this.a=f},
bdR:function bdR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdW:function bdW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_0:function a_0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCO:function aCO(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dTE:function dTE(d,e){this.a=d
this.b=e},
dTF:function dTF(d){this.a=d},
dTG:function dTG(d){this.a=d},
dTH:function dTH(d){this.a=d},
dTI:function dTI(d){this.a=d},
a_1:function a_1(d){this.a=d},
bj2:function bj2(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dTW:function dTW(d,e){this.a=d
this.b=e},
aY5(d,e){return new C.aY4(d,e,null)},
aY4:function aY4(d,e,f){this.c=d
this.d=e
this.a=f},
i35(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
iau(d){return A.bS(B.K,null,new C.fKb(new C.tM(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hcn(d,e){return new C.as0(e,d,null)},
aPH(d,e,f,g,h,i,j){var w=C.i35(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5W(w,!0,null),null),B.aq)
return I.aP3(e,B.bV,f,g,h,i,j)},
ly:function ly(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5W:function a5W(d,e,f){this.c=d
this.d=e
this.a=f},
biJ:function biJ(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b4$=e
_.c=_.a=null},
dF7:function dF7(d){this.a=d},
dF8:function dF8(){},
dF9:function dF9(d,e){this.a=d
this.b=e},
biI:function biI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fKb:function fKb(d){this.a=d},
fKa:function fKa(d,e){this.a=d
this.b=e},
fK9:function fK9(d,e){this.a=d
this.b=e},
fK8:function fK8(d,e){this.a=d
this.b=e},
as0:function as0(d,e,f){this.c=d
this.d=e
this.a=f},
cfT:function cfT(d,e){this.a=d
this.b=e},
aKL:function aKL(){},
iaf(d){var w=null
return A.cb(w,w,!0,w,new C.fJy(),d,w,!0,!0,x.e2)},
ibp(d,e,f,g,h){var w=null
return A.cb(w,w,!0,w,new C.fR1(h,g,f,e),d,w,!0,!0,x.N)},
iah(d,e){var w=null
return A.cb(w,w,!0,w,new C.fJD(e),d,w,!0,!0,x.dY)},
iag(d){var w=null
return A.cb(w,w,!0,w,new C.fJC(),d,w,!0,!0,x.c5)},
aSD:function aSD(d,e){this.a=d
this.b=e},
aSC:function aSC(d){this.a=d},
aQC:function aQC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJy:function fJy(){},
fR1:function fR1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJD:function fJD(d){this.a=d},
fJC:function fJC(){},
YF:function YF(d,e){this.c=d
this.a=e},
ay4:function ay4(){var _=this
_.d=$
_.c=_.a=_.e=null},
cZw:function cZw(d){this.a=d},
cZx:function cZx(d){this.a=d},
cZv:function cZv(d,e){this.a=d
this.b=e},
cZy:function cZy(d){this.a=d},
cZz:function cZz(d){this.a=d},
YE:function YE(d){this.a=d},
ay3:function ay3(){this.d=$
this.c=this.a=null},
cZs:function cZs(d){this.a=d},
cZt:function cZt(d){this.a=d},
cZu:function cZu(d){this.a=d},
Yc:function Yc(d){this.a=d},
awO:function awO(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cx5:function cx5(){},
cxb:function cxb(d){this.a=d},
cxc:function cxc(d){this.a=d},
cxd:function cxd(d){this.a=d},
cxa:function cxa(){},
cxe:function cxe(d){this.a=d},
cxf:function cxf(d){this.a=d},
cx9:function cx9(){},
cxg:function cxg(d,e){this.a=d
this.b=e},
cx8:function cx8(d,e){this.a=d
this.b=e},
cx6:function cx6(d,e){this.a=d
this.b=e},
cxh:function cxh(d){this.a=d},
cx7:function cx7(){},
cxi:function cxi(d){this.a=d},
a0M:function a0M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bv9:function bv9(){this.d=$
this.c=this.a=null},
fb2:function fb2(d,e){this.a=d
this.b=e},
fb3:function fb3(d){this.a=d},
fb4:function fb4(d,e){this.a=d
this.b=e},
abb:function abb(d,e){this.a=d
this.b=e},
Fq:function Fq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bv7:function bv7(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fb0:function fb0(d,e){this.a=d
this.b=e},
awH:function awH(d,e){this.c=d
this.a=e},
bv8:function bv8(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fb1:function fb1(d){this.a=d},
bv6:function bv6(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMW:function aMW(){},
aMX:function aMX(){},
bCz(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bn(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oG(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fIc(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aV(B.o.u(s),2,"0")
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XC(A.d3(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPj(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i_().l9(85,1280,B.eJ),$async$aPj)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fn(),$async$aPj)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hcm()
w=9
return A.b(C.cfS(q,r),$async$aPj)
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
$.am.$1("[worksheets] pick photo failed: "+A.u(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aPj,v)},
aPF(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPF=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cfP(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cI.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().Ls(p,!0,null,i).d7(0,B.fK),$async$aPF)
case 9:n=a1
w=10
return A.b(n.m3(),$async$aPF)
case 10:m=a1
w=11
return A.b(J.ahG(m).hv(B.h_),$async$aPF)
case 11:l=a1
J.ahG(m).q()
if(l==null){w=8
break}i=J.eU(B.dD.gaP(l))
k="data:image/png;base64,"+B.cV.gcB().aK(i)
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
$.am.$1("[worksheets] thumbnail shrink failed: "+A.u(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aPF,v)},
fIc:function fIc(){},
tM:function tM(d){this.a=d},
as_:function as_(d,e,f){this.c=d
this.d=e
this.a=f},
aEk:function aEk(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eKE:function eKE(d,e){this.a=d
this.b=e},
eKv:function eKv(d){this.a=d},
eKw:function eKw(d){this.a=d},
eKC:function eKC(d,e){this.a=d
this.b=e},
eKB:function eKB(d,e){this.a=d
this.b=e},
eKy:function eKy(d,e){this.a=d
this.b=e},
eKx:function eKx(d,e){this.a=d
this.b=e},
eKz:function eKz(d){this.a=d},
eKA:function eKA(d,e){this.a=d
this.b=e},
eKD:function eKD(d,e){this.a=d
this.b=e},
eKq:function eKq(d,e){this.a=d
this.b=e},
eKu:function eKu(d){this.a=d},
eKt:function eKt(d,e){this.a=d
this.b=e},
eKs:function eKs(d){this.a=d},
eKF:function eKF(d,e){this.a=d
this.b=e},
eKG:function eKG(d,e){this.a=d
this.b=e},
eKr:function eKr(d,e){this.a=d
this.b=e},
hp4(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a7().ac(),"project",v],x.N,x.z)},
fId(d,e,f){var w=0,v=A.j(x.N),u
var $async$fId=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hp4(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fId,v)},
bCB(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fId(!0,d,e),$async$bCB)
case 4:w=3
return A.b(r.arY(g,d,e.a),$async$bCB)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aK(B.S.ao(C.hp4(d,e,null),null))
u="NGMY_WS:"+B.kk.gcB().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCB,v)},
hgW(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h2n(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d0(s,"NGMYWSSYNC2|"))return!0
if(J.d0(s,"NGMY_WS:"))return!0
if(J.f2(s,t))return!0
if(J.d0(s,"{"))try{w=B.S.aJ(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i88(d){var w,v,u,t=C.hgW(d)
if(t==null)return null
if(C.h2n(t))return t
w=B.a.cK(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.h2n(v))return v}u=B.a.cK(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.h2n(v))return v}return null},
h2m(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d0(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d0(q,"NGMY_WS:")){v=B.cg.cA(0,B.cI.aK(J.mG(q,8)))
w=t.a(B.S.aJ(0,v,r))}else w=t.a(B.S.aJ(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fXR(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCA(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arX(t[1]),$async$bCA)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h2m(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h2m(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCA,v)},
h2l(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lh(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bC7(){var w=0,v=A.j(x.o),u,t
var $async$bC7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gx(),$async$bC7)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h2m(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC7,v)},
hpY(d,e,f,g){return A.bS(B.K,null,new C.fQS(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fQS:function fQS(d,e,f){this.a=d
this.b=e
this.c=f},
add:function add(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eKI:function eKI(d,e){this.a=d
this.b=e},
eKJ:function eKJ(d,e){this.a=d
this.b=e},
eKK:function eKK(d,e){this.a=d
this.b=e},
eKL:function eKL(d,e){this.a=d
this.b=e},
eKH:function eKH(d){this.a=d},
arU:function arU(d,e,f){this.c=d
this.d=e
this.a=f},
bkp:function bkp(){var _=this
_.c=_.a=_.e=_.d=null},
eKl:function eKl(d,e){this.a=d
this.b=e},
eKm:function eKm(d){this.a=d},
eKn:function eKn(d){this.a=d},
arZ:function arZ(d){this.a=d},
aEj:function aEj(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eKp:function eKp(d){this.a=d},
eKo:function eKo(d){this.a=d},
hI4(d,e,f,g,h){return new C.NU(h,g,d,e,f,null)},
aJ6:function aJ6(d,e){this.a=d
this.b=e},
NU:function NU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEl:function aEl(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eL7:function eL7(){},
eL3:function eL3(d,e){this.a=d
this.b=e},
eL4:function eL4(d){this.a=d},
eKP:function eKP(d){this.a=d},
eKN:function eKN(d){this.a=d},
eKO:function eKO(d){this.a=d},
eKY:function eKY(d,e){this.a=d
this.b=e},
eKV:function eKV(d,e){this.a=d
this.b=e},
eKW:function eKW(d,e){this.a=d
this.b=e},
eKX:function eKX(d,e,f){this.a=d
this.b=e
this.c=f},
eKT:function eKT(d,e,f){this.a=d
this.b=e
this.c=f},
eKR:function eKR(d){this.a=d},
eKS:function eKS(d){this.a=d},
eKU:function eKU(d){this.a=d},
eLa:function eLa(d){this.a=d},
eL9:function eL9(d){this.a=d},
eLb:function eLb(d){this.a=d},
eL8:function eL8(d){this.a=d},
eKM:function eKM(d){this.a=d},
eKQ:function eKQ(d,e){this.a=d
this.b=e},
eL6:function eL6(d,e){this.a=d
this.b=e},
eL5:function eL5(d,e){this.a=d
this.b=e},
eL0:function eL0(d){this.a=d},
eL1:function eL1(d){this.a=d},
eL2:function eL2(d,e){this.a=d
this.b=e},
eL_:function eL_(d,e){this.a=d
this.b=e},
eKZ:function eKZ(d,e,f){this.a=d
this.b=e
this.c=f},
bwV:function bwV(){},
Ax(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afI(d,e,f){return C.hXE(d,e,f)},
hXE(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afI=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$afI)
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
$.am.$1("[worksheets] setString failed for "+e+": "+A.u(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afI,v)},
afH(d,e){return C.hXD(d,e)},
hXD(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afH=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afH)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.aa(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.u(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$afH,v)},
hWp(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sx(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzD(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzD=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1L(q),$async$bzD)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPF(q,!1),$async$bzD)
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
return A.i($async$bzD,v)},
hvR(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
fXR(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cD(w,new C.cwu(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cwv(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lh(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
i0y(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.ZQ
case"female":case"f":return D.ajw
default:return D.xX}},
hlM(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h6w(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i0y(v==null?j:J.k(v))
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
return new C.hZ(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i0A(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.ML
case"viewer":return D.kv
default:return D.tP}},
i0B(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gn(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAT(d,e){return B.a.i(e.toLowerCase())===C.Gn(d,e)&&d.y!==D.kv},
tX(d,e){var w,v=d.y
if(v===D.kv)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gn(d,e))return!0
if(v===D.ML)return!0
v=d.e
return new A.M(v,A.h2r(),A.U(v).k("M<1,n>")).t(0,w)},
i00(d){return J.dH(d,new C.ftg()).gM(0)},
fRr(d){var w=0,v=A.j(x.y),u,t
var $async$fRr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AF(d),$async$fRr)
case 3:u=t.qT(f,new C.fRs(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRr,v)},
bAC(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AF(d),$async$bAC)
case 3:t=g
if(J.qT(t,new C.frr(e))){w=1
break}if(C.i00(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAC,v)},
akn(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.da(n,x.f)
w=A.cD(w,new C.bNq(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bNr(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bNs(),x.N)
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
return new C.kC(l,w,v,!s,t,m,r,q,p,C.i0A(o==null?null:J.k(o)))},
hlV(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CO(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rf(d),$async$CO)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$CO)
case 4:t=f
w=5
return A.b(t.a5Q(0),$async$CO)
case 5:w=6
return A.b(C.fiA(t,l),$async$CO)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hhw(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oF(l,n),$async$CO)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hhw(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oF(l,n),$async$CO)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CO,v)},
fiA(d,e){return C.hTT(d,e)},
hTT(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fiA=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Ax(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aJ(0,a5,null)
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Ax(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aJ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fXR(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Ax(a9)+"_"+n))
i=C.hWp(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1L(h),$async$fiA)
case 17:g=b1
if(g!=null){i=i.Sx(g)
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
case 8:J.Rq(q,new C.fiB())
if(p&&J.ad(q)!==0)C.oF(a9,q)
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
return A.i($async$fiA,v)},
bB3(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bB3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rf(d),$async$bB3)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CO(r),$async$bB3)
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
return A.i($async$bB3,v)},
hhw(d){var w,v,u,t
try{w=B.S.aJ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cD(v,new C.feh(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fei(),u),u.k("J.E"))
B.d.aY(v,new C.fej())
return v}catch(t){v=A.a([],x.D)
return v}},
oF(d,e){return C.ia5(d,e)},
ia5(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oF=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rf(b2),$async$oF)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oF)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Ax(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aJ(0,p,null)),new C.fJp(),a2).fO(0)
a2=J.b6(b3,new C.fJq(),a2).c0(0,new C.fJr())
n=A.dd(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f2(n,m)?17:18
break
case 17:a5=C.Ax(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8b(l),$async$oF)
case 19:t=21
a5=C.Ax(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aJ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8b(a5==null?null:J.k(a5)),$async$oF)
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
return A.b(C.afH(r,"ngmy_worksheet_item_v3_"+C.Ax(a8)+"_"+m),$async$oF)
case 29:w=30
return A.b(C.afH(r,"ngmy_worksheet_thumb_v3_"+C.Ax(a8)+"_"+m),$async$oF)
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
return A.b(C.bzD(h),$async$oF)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afI(r,"ngmy_worksheet_thumb_v3_"+C.Ax(a8)+"_"+a4,f),$async$oF)
case 40:g=i.Sx(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afH(r,"ngmy_worksheet_thumb_v3_"+C.Ax(a8)+"_"+a4),$async$oF)
case 41:g=i.Sx(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afH(r,"ngmy_worksheet_thumb_v3_"+C.Ax(a8)+"_"+a4),$async$oF)
case 42:case 34:a4=i.a
w=43
return A.b(C.afI(r,"ngmy_worksheet_item_v3_"+C.Ax(a8)+"_"+a4,B.S.ao(g.ah(),null)),$async$oF)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afI(r,"ngmy_worksheets_index_v3_"+C.Ax(a8),B.S.ao(q,null)),$async$oF)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eQ(b3,new C.fJs(q))
a4=a3.$ti.k("cO<1,a5<n,@>>")
a7=A.C(new A.cO(a3,new C.fJt(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afI(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oF)
case 45:w=46
return A.b(J.huY(r),$async$oF)
case 46:if(a2.gck(b3)&&J.ad(q)===0){u=!1
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
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.u(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$oF,v)},
L4(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$L4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CO(d),$async$L4)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.fRq(e))
if(r===-1)s.ci(t,0,e)
else s.n(t,r,e)
u=C.oF(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$L4,v)},
bAQ(d,e){var w=0,v=A.j(x.H),u
var $async$bAQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CO(d),$async$bAQ)
case 2:u=g
J.ns(u,new C.ftI(e))
w=3
return A.b(C.oF(d,u),$async$bAQ)
case 3:return A.h(null,v)}})
return A.i($async$bAQ,v)},
Gp(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Gp)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aJ(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cD(j,new C.fwi(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fwj(),s),s.k("J.E"))
B.d.aY(r,new C.fwk())
k=r}}catch(h){}w=4
return A.b(C.ff1(d),$async$Gp)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hUf(k,p,d)
j=A.U(o)
s=j.k("M<1,a5<n,@>>")
s=A.C(new A.M(o,new C.fwl(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qr(d,o),$async$Gp)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fwm(d),j),j.k("J.E"))
if(m.length!==0)C.aOd(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gp,v)},
fJb(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fJb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qr(d,e),$async$fJb)
case 3:t=J.dH(e,new C.fJc(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOd(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJb,v)},
a2o(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2o=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a2o)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aJ(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cD(m,new C.fRl(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fRm(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qh(o,new C.fRn(e))
if(B.a.i(e.x).length===0&&C.tX(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDA(e.y===D.kv?D.kv:D.tP,m)}else p=e
if(q===-1)J.py(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.Qr(d,o),$async$a2o)
case 3:w=C.tX(p,d)?4:5
break
case 4:w=6
return A.b(C.aOc(C.Gn(p,d),p),$async$a2o)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2o,v)},
aOo(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gp(d),$async$aOo)
case 2:u=g
t=J.cF(u)
s=A.re(t.eQ(u,new C.ftp(e)))
t.bq(u,new C.ftq(e))
w=3
return A.b(C.Qr(d,u),$async$aOo)
case 3:w=s!=null&&C.bAT(s,d)?4:5
break
case 4:w=6
return A.b(C.fel(e),$async$aOo)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOo,v)},
ahv(d){var w=d.f,v=A.U(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fRx(),v),v.k("J.E"))
return w},
h00(d,e){var w,v=d.f,u=A.re(new A.a_(v,new C.fsW(e),A.U(v).k("a_<1>")))
v=C.ahv(d)
w=A.U(v).k("a_<1>")
v=A.C(new A.a_(v,new C.fsX(e,u),w),w.k("J.E"))
B.d.aY(v,new C.fsY())
return v},
i0E(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hq1(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h00(d,u),new C.fR2(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i2a(d,e){var w
if(e==null||e.length===0)return 1
w=C.h00(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fx4(),A.U(w).k("M<1,G>")).ff(0,B.Ah)+1},
i9Z(d){var w,v=C.ahv(d)
if(v.length===0)return null
w=new A.a_(v,new C.fJ5(),A.U(v).k("a_<1>"))
if(!w.gam(0))return w.gI(0)
return B.d.gI(v)},
i0z(d){return A.F(["id",d.a,"name",d.b,"gender",C.hlM(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i25(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.xX?n:q.c
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
d=q.aDv(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cJo(a1,w,a3.d,a2.y,s,a0,v)},
AF(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$AF)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aJ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.da(t,x.f)
p=A.cD(p,new C.fwf(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fwg(),s),s.k("J.E"))
B.d.aY(p,new C.fwh())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AF,v)},
ahg(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahg=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tP:D.kv
a7=C.Gn(b2,b3)
w=2
return A.b(C.AF(b1),$async$ahg)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fJ0(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAC(b1,b2),$async$ahg)
case 5:case 4:if(b0===-1){u=b2.aDA(a6,a7)
a9.ci(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.xX?i:l.c
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
s.n(0,m,l.aDv(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tP:D.kv
u=t.yz(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qr(b1,a8),$async$ahg)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOc(B.a.i(b3.toLowerCase()),u),$async$ahg)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahg,v)},
hhU(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a7().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("M<1,a5<n,@>>"),k=A.C(new A.M(m,C.hpc(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ac(),"updatedAt",o],r,x.K),"createdAt",s.a7().ac(),"updatedAt",o],r,x.z)},
hhV(d,e){var w=new A.S(Date.now(),0,!1).a7().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("M<1,a5<n,@>>")
u=A.C(new A.M(u,C.hpc(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ac(),"updatedAt",w],x.N,x.z)},
hRT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akn(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h2r(),A.U(j).k("M<1,n>")).c0(0,new C.feP())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tP
else s=B.d.t(t,u)?D.ML:D.kv
return w.aDA(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akn(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cD(h,new C.feQ(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.feR(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.feS(),x.N).c0(0,new C.feT())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tP
else s=B.d.t(t,u)?D.ML:D.kv
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
return new C.kC(h,r,p,!m,t,o,l,j,v,s)},
ff1(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ff1=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.ff5()
h=x.N
g=x.z
w=7
return A.b(A.iN(A.a([A.lo("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.lo("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.lo("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.U),$async$ff1)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h4(l,o)
J.h4(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.ff2(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.ff3(),l),l.k("J.E"))
B.d.aY(l,new C.ff4())
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
else h.$1("[family_trees] fetch error: "+A.u(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ff1,v)},
hUf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dz(e,new C.fjf(),v).c0(0,new C.fjg())
t=A.dd(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gn(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kv){m=q.e
m=!new A.M(m,A.h2r(),A.U(m).k("M<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i25(l,v)
o=C.Gn(k,w)
p=v.d
s.n(0,u,o===w?k.bbM(p,D.tP):k.bbM(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aY(j,new C.fjh())
return j},
Qr(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Qr)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.flV(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$Qr)
case 3:return A.h(null,v)}})
return A.i($async$Qr,v)},
aOc(d,e){return C.hZo(d,e)},
hZo(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lR("family_trees",A.a([C.hhU(e,d)],p),null,B.cH),$async$aOc)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lR("family_trees",A.a([C.hhV(e,d)],p),null,B.cH),$async$aOc)
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
$.am.$1("[family_trees] upsert error: "+A.u(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aOc,v)},
aOd(d,e){return C.hZp(d,e)},
hZp(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("M<1,a5<n,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fqL(d),n),m)
r=l
w=7
return A.b(A.lR("family_trees",r,null,B.cH),$async$aOd)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fqM(d),n),m)
p=k
w=8
return A.b(A.lR("family_trees",p,null,B.cH),$async$aOd)
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
$.am.$1("[family_trees] bulk upsert error: "+A.u(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aOd,v)},
fel(d){return C.hRd(d)},
hRd(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fel=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QQ("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fel)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.aa(p)
$.am.$1("[family_trees] delete error: "+A.u(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fel,v)},
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
cwx:function cwx(){},
cww:function cww(){},
cwu:function cwu(){},
cwv:function cwv(){},
Ht:function Ht(d,e){this.a=d
this.b=e},
hZ:function hZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
akm:function akm(d,e){this.a=d
this.b=e},
ftg:function ftg(){},
fRs:function fRs(d){this.a=d},
frr:function frr(d){this.a=d},
kC:function kC(d,e,f,g,h,i,j,k,l,m){var _=this
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
bNu:function bNu(){},
bNt:function bNt(){},
bNq:function bNq(){},
bNr:function bNr(){},
bNs:function bNs(){},
fiB:function fiB(){},
feh:function feh(){},
fei:function fei(){},
fej:function fej(){},
fJp:function fJp(){},
fJq:function fJq(){},
fJr:function fJr(){},
fJs:function fJs(d){this.a=d},
fJt:function fJt(){},
fRq:function fRq(d){this.a=d},
ftI:function ftI(d){this.a=d},
fwi:function fwi(){},
fwj:function fwj(){},
fwk:function fwk(){},
fwl:function fwl(){},
fwm:function fwm(d){this.a=d},
fJc:function fJc(d){this.a=d},
fRl:function fRl(){},
fRm:function fRm(){},
fRn:function fRn(d){this.a=d},
ftp:function ftp(d){this.a=d},
ftq:function ftq(d){this.a=d},
fRx:function fRx(){},
fsW:function fsW(d){this.a=d},
fsX:function fsX(d,e){this.a=d
this.b=e},
fsY:function fsY(){},
fR2:function fR2(d){this.a=d},
fx4:function fx4(){},
fJ5:function fJ5(){},
fwf:function fwf(){},
fwg:function fwg(){},
fwh:function fwh(){},
fJ0:function fJ0(d){this.a=d},
feP:function feP(){},
feQ:function feQ(){},
feR:function feR(){},
feS:function feS(){},
feT:function feT(){},
ff5:function ff5(){},
ff6:function ff6(d){this.a=d},
ff2:function ff2(d){this.a=d},
ff3:function ff3(){},
ff4:function ff4(){},
fjf:function fjf(){},
fjg:function fjg(){},
fjh:function fjh(){},
flV:function flV(){},
fqL:function fqL(d){this.a=d},
fqM:function fqM(d){this.a=d},
cwy:function cwy(d,e){this.a=d
this.b=e},
cwz:function cwz(d,e){this.a=d
this.b=e},
aGo:function aGo(d,e,f){this.a=d
this.b=e
this.c=f},
b83:function b83(){this.b=this.a=0},
b82:function b82(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bva:function bva(){},
wI(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcd()+"/"+w.gcu()+"/"+w.gcg()
if(!e)return v
return v+" "+B.a.aV(B.o.u(w.gnd()),2,"0")+":"+B.a.aV(B.o.u(w.gGc()),2,"0")},
hI1(){var w,v=$.pu(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.h1(u)},
arV(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arV)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$arV)
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
$.am.$1("[worksheet qr stash] load: "+A.u(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$arV,v)},
arW(d){return C.hI2(d)},
hI2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arW)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hH("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arW)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[worksheet qr stash] save: "+A.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$arW,v)},
arY(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arY)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hI1()
w=4
return A.b(C.arV(),$async$arY)
case 4:r=h
q=B.a.i(e)
p=B.dK.aK(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cV.gcB().aK(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(C.arW(r),$async$arY)
case 5:u=new A.a_S("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arY,v)},
arX(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arX)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arV(),$async$arX)
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
try{s=B.cg.cA(0,B.cI.aK(t))}catch(h){r=A.aa(h)
$.am.$1("[worksheet qr stash] decode: "+A.u(r))
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
return A.b(C.arW(q),$async$arX)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arX,v)},
hcm(){var w=new A.S(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cG.aw(999999)},
hI3(d){var w,v,u,t,s,r,q
try{w=A.ag6(d)
if(w==null)return d
v=w
if(J.La(v)>960||J.L9(v)>960){s=v
r=J.La(v)>=J.L9(v)?960:null
v=A.ag5(s,J.L9(v)>J.La(v)?960:null,B.O6,r)}s=v
u=A.alK(82).SU(s,B.yG)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
cfS(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cfS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hI3(e)
$.cfO.n(0,s,t)
u=C.bCD(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfS,v)},
b1L(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1L=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d0(l,"data:image")){u=null
w=1
break}t=4
r=J.f2(l,",")?B.d.gal(J.lq(l,",")):l
q=B.cI.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hcm()
w=7
return A.b(C.cfS(p,q),$async$b1L)
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
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.u(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b1L,v)},
cfP(d){var w=0,v=A.j(x.T),u,t,s
var $async$cfP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cfR(s),$async$cfP)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cV.gcB().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfP,v)},
a8b(d){var w=0,v=A.j(x.H),u,t
var $async$a8b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hp5(d)
if(t==null){w=1
break}$.cfO.W(0,t)
w=3
return A.b(C.bCC(t),$async$a8b)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8b,v)},
bCD(d,e){return C.i8b(d,e)},
i8b(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCD=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aN8
w=7
return A.b(n==null?$.aN8=I.h__():n,$async$bCD)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mH(r,"thumbs","readwrite")
B.iM.mm(J.mF(p,"thumbs"),q,l)
w=8
return A.b(J.px(p),$async$bCD)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.aa(k)
$.am.$1("[worksheet-thumb idb put] "+A.u(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCD,v)},
bCC(d){return C.i89(d)},
i89(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aN8
w=7
return A.b(o==null?$.aN8=I.h__():o,$async$bCC)
case 7:r=f
q=J.mH(r,"thumbs","readwrite")
B.iM.FI(J.mF(q,"thumbs"),m)
w=8
return A.b(J.px(q),$async$bCC)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.aa(l)
$.am.$1("[worksheet-thumb idb delete] "+A.u(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCC,v)}},D,Ak,Al,A0,Am,An,Ao,I
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
A3=c[114]
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
Ab=c[119]
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
Ai=c[113]
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
C.anT.prototype={}
C.aY6.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bg6(),f=h.x!=null&&h.z_(i).length===0
if(h.x!=null)w=f?B.aZ:B.bz
else w=h.gTw()?B.bz:B.dU
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bg_,B.q,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.eOX,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h8,i,i,i),B.R,D.fhy,B.au,A.d(C.wI(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fdt,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b07,i,i,i,i,B.YP,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h10(h.d)
o=A.p(B.A,C.aY5(A.fzp(h.e,n),30),B.f,i,i,new A.o(B.lL,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f8S,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bD,D.fhQ,B.ac,A.p(i,A.x(A.a([D.fxi,B.bD,A.d(A.AH(h.c),i,i,i,i,i,i,D.f3T,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fa,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.ahC,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aQj("Original due",C.wI(h.r,!1))
n=j.aQj("Current due",C.wI(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.O,n,B.R,A.p(i,A.d(h.gaKr(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.B3,i,i,1/0),B.R,j.ceT(),B.O,j.c2m(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fiM,B.au,A.d(q,i,i,i,i,i,i,D.f89,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaFc()){q=A.m(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fyB,B.O,A.bw(A.m(12),A.em(new A.a7(1/0,88,A.b3(i,i,i,new A.VH(h.ax,B.M,D.eSW,!0,3.5,i),B.av),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fk,i,i,i)],s))}p.push(B.aB)
p.push(D.fqN)
return A.p(i,A.x(A.a([r,new A.D(B.ahF,A.x(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQj(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a88,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f4S,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ceT(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a94(B.dU,u,"Not paid yet")
w=t.z_(null).length
v=w===0?B.aZ:B.bz
return this.a94(v,u,C.wI(t.x,!0))},
c2m(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a94(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a94(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a88,u,u,u)
v=A.U(d).k("M<1,hc>")
v=A.C(new A.M(d,new C.c1F(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bW(B.bB,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a94(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a88,w,w,w),1),new A.dq(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.bac.prototype={
a4(d,e){new A.VH(this.b,B.M,e,!0,3.5,null).a4(d,e)},
au(d){return d.b!==this.b}}
C.ao_.prototype={
T(){return new C.aCf(A.a([],x.bp))},
ge1(){return this.c}}
C.aCf.prototype={
a_(){this.a1()
this.IA()},
IA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1E(t.a.c),$async$IA)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dG_(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
aSh(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bs:B.bl).j(0.22)
w=A.m(10)
return A.bs(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.bs:B.bl).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aYL),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aSg(d){return this.aSh(d,null)},
Pc(d){return this.cis(d)},
cis(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GC:B.eJ
w=7
return A.b(new A.i_().C3(72,900,900,n),$async$Pc)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fn(),$async$Pc)
case 8:p=f
n=B.cV.gcB().aK(p)
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
if(n!=null)n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.u(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pc,v)},
b_Z(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.m(10),n=A.I((q?B.bs:B.bl).j(0.18),B.q,1)
if(d)q=B.cS
else q=s.a.d.a?B.bs:B.bl
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.az,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cS
else u=s.a.d.a?B.bs:B.bl
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fy(r,r,r,r,r,r,r,r,r,r,r,B.cS,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cD,s.a.d.a?B.bs:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jH,D.bs1,r,r,r)},
D2(d){return this.bzo(d)},
bzn(){return this.D2(null)},
bzo(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D2=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b5,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.k9(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ab(p,2)}o=new A.as(new A.bb(a4,B.b5,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b5,B.aO),s)
if(a3){a4=new A.S(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcg(),a4.gcd(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcg(),a4.gcd(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h10(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.w9?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hV(B.w.j(0.55),!0,"Dismiss",a4,new C.dFJ(),new C.dFK(a2,t,a5,r,new C.dFL(a2,t),o,n,j),B.eH,!0,x.y),$async$D2)
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
break}if(f.length===0||e<=0){t.c.J(x.q).f.U(D.eZh)
w=1
break}a0=a2.d
if(a0==null){t.c.J(x.q).f.U(D.eXX)
w=1
break}a1=A.fzp(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.w9?"male":"female"
w=7
return A.b(A.ahu(a3,A.h95(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D2)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.w9?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcg(),a3.gcd(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcg(),a4.gcd(),a4.gcu(),0,0,0,0,0)))a5.cLy(a2.a)
w=8
return A.b(A.ahu(t.a.c,a5),$async$D2)
case 8:case 5:w=9
return A.b(t.IA(),$async$D2)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D2,v)},
aSV(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cS.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cS
else s=(this.a.d.a?B.bs:B.bl).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aY5(d,18)
if(g)q=B.cS
else q=this.a.d.a?B.aQ:B.az
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
RT(d){return this.cA7(d)},
cA7(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hV(B.w.j(0.55),!0,"Dismiss",s,new C.dG2(),new C.dG3(t,d),B.hz,!0,x.y),$async$RT)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahu(t.a.c,d),$async$RT)
case 7:w=8
return A.b(t.IA(),$async$RT)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RT,v)},
NR(d,e){return this.bKf(0,e)},
bKf(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l2(s,"Cancel","Delete",e.b+" \xb7 "+A.AH(e.c)+" will be removed from this device.","Delete this debt?"),$async$NR)
case 3:if(!g){w=1
break}w=4
return A.b(C.ftw(t.a.c,e.a),$async$NR)
case 4:w=5
return A.b(t.IA(),$async$NR)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
aeC(d){return this.cck(d)},
cck(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bS(B.K,null,new C.dFX(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeC)
case 2:return A.h(null,v)}})
return A.i($async$aeC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eaC
w=J.dH(m.d,new C.dG4())
v=A.C(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dG5())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cJ(v,0,new C.dG6())
w=A.m(18)
s=m.a.d.a
r=s?D.cpA:D.ay_
q=A.I(s?B.cS.j(0.35):B.cS.j(0.18),B.q,1)
s=A.p(l,D.bRP,B.f,l,l,new A.o(B.cS.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.az,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.ea0,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dG7(m),l,l,l,l,l,l,l),B.f,B.cS,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cwl("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AH(t)
r=A.a([A.p(l,A.x(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b68(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ahz,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e_:B.c
q=A.m(18)
o=A.I((w?B.bs:B.bl).j(0.12),B.q,1)
n=A.p(l,D.bMK,B.f,l,l,new A.o(B.cS.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.az,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bur,l,l,1/0))}else{w=m.gchL()
s=A.C(new A.M(v,w,A.U(v).k("M<1,r>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bw7,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.U(u).k("M<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ai,l,B.e,B.j,0,B.p)},
b68(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bs:B.bl).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cS
else w=v.a.d.a?B.aQ:B.az
return A.p(u,A.x(A.a([q,B.bD,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ej,u,u,u)},
cwl(d,e){return this.b68(!1,d,e)},
chM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z_(j).length,h=d.bfj()
if(d.x!=null){w=d.z_(j).length
v=w===0?B.cS:B.bz}else if(d.gTw())v=B.bz
else{if(h)w=B.cS
else w=k.a.d.a?B.bs:B.bl
v=w}if(d.x!=null){w=d.z_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wI(u,!1)}else{u.toString
t="Paid "+C.wI(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wI(w,!1)+" \xb7 "+i+" missed":"Due "+C.wI(w,!1)}w=k.a.d.a?B.e_:B.c
u=A.m(18)
if(d.gTw()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bs:B.bl).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bn:B.lL
o=A.I(d.gTw()&&d.x==null?B.bz.j(0.45):B.cS.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h10(d.d)
o=A.p(B.A,A.de(C.aY5(A.fzp(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.az
m=x.p
n=A.a([new A.dq(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFc())B.d.v(n,A.a([B.ed,A.X(B.Nb,B.cS.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AH(d.c)
l=k.a.d.a?B.aQ:B.az
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(V.ahj,A.B(A.a([o,B.bd,p,B.ab,A.x(A.a([n,B.bD,A.X(B.ey,(k.a.d.a?B.bs:B.bl).j(0.5),j,j,j,18)],m),B.dA,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dFZ(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d8,j,j,j,j)}}
C.uc.prototype={}
C.akl.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bi
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aC(a0,A.p(a0,A.X(B.cD,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iG,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aun,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FC,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f7(m,A.B(l,B.m,a0,B.e,B.N,0,a0,a0),B.f,B.ei)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.brg,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fs,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.eTH)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vr,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.ll,A.x(a2,B.m,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hm,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bsr,a0,a0,a0,a0)}}
C.aTS.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bi?B.bi:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cF,q,B.P,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cU,n],m)
if(p.z)o.push(new A.D(B.vo,n,q))
return new A.D(B.d8,A.x(o,B.m,q,B.e,B.N,0,B.p),q)}}
C.Su.prototype={
T(){return new C.bdP()}}
C.bdP.prototype={
gbYn(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.eax,D.eaD],l)
for(w=0;w<8;++w){v=D.a1O[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Go:B.BM
q=t===s
r=A.X(r,q?B.eC:B.bY,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bh,new A.y(v.c,n,A1.Dm,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eC,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aC(n,new A.D(B.eD,A.x(A.a([new A.D(B.mu,new A.cl(B.aP,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DQ(!0,new C.akl(v,q.d,q.e,new C.d5N(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d5O(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.bsK,A.bG(D.fDY,new C.d5P(o,d),A.bn(B.b6,n,n,n,n,B.oi,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.bwZ,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.nd.prototype={
ah(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ac()],x.N,x.z)},
bbY(d,e,f){return new C.nd(this.a,e,d,f)}}
C.Hs.prototype={
wi(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hs(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDp(d){var w=null
return this.wi(w,w,w,w,w,d,w,w,w,w,w,w)},
cHl(d){var w=null
return this.wi(w,w,w,w,d,w,w,w,w,w,w,w)},
bbW(d,e,f){var w=null
return this.wi(d,w,w,w,w,w,w,w,e,w,f,w)},
cI_(d){var w=null
return this.wi(w,w,w,w,w,w,d,w,w,w,w,w)},
cI8(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,d,w,w)},
cHj(d){var w=null
return this.wi(w,w,w,d,w,w,w,w,w,w,w,w)},
cIa(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,w,w,d)},
cHg(d){var w=null
return this.wi(w,w,d,w,w,w,w,w,w,w,w,w)},
cHb(d){var w=null
return this.wi(w,d,w,w,w,w,w,w,w,w,w,w)},
FA(d){var w=null
return this.wi(w,w,w,w,w,w,w,d,w,w,w,w)},
cIi(d,e,f,g,h,i,j,k,l,m,n){return this.wi(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cEY(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bNp(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cQ(d.h(0,n))).length!==0?B.a.i(A.cQ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cQ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Cu.gee(D.Cu))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3q)
q=l.$2("frame",D.a2O)
l=l.$2("texture",D.a2J)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cQ(d.h(0,"author"))):o
return this.cIi(p,u,t,q,r,A.qN(d.h(0,"ribbon"))?A.FZ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Z2.prototype={
T(){return new C.azj(A.a([],x.I),D.MK)},
ge1(){return this.c}}
C.azj.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zw(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.kX()
w=v.a
C.bB0(w.c,w.d).bA(new C.d6t(v),x.fL)},
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
kX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KF(s.c,s.d),$async$kX)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d6h(t,r))
t.avb()
case 1:return A.h(u,v)}})
return A.i($async$kX,v)},
garN(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avb(){var w,v,u=this.garN(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
caL(d){this.m(new C.d6e(this,d))
this.avb()},
Nc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Nc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nd(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQ_(r.c,r.d,s),$async$Nc)
case 3:w=4
return A.b(t.kX(),$async$Nc)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qh(t.d,new C.d5Q(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d5R(t,p))
t.avb()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B4(p+1,B.cu,B.kT),$async$Nc)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Nc,v)},
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
break}s=t.garN()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQ_(o.c,o.d,new C.nd(s,r,q,new A.S(p,0,!1))),$async$AK)
case 3:w=4
return A.b(t.kX(),$async$AK)
case 4:if(t.c==null){w=1
break}t.m(new C.d6i(t))
case 1:return A.h(u,v)}})
return A.i($async$AK,v)},
NS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garN()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d5Z(r),s,null,!0,!0,x.y),$async$NS)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAM(s.c,s.d,r.a),$async$NS)
case 4:t.m(new C.d6_(t))
w=5
return A.b(t.kX(),$async$NS)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Tz(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$NS,v)},
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
return A.b(C.QI(s,r.r,o,p,q),$async$yj)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hpA(s,r.x,r.r),$async$yj)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KF(s.c,s.d),$async$yj)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.nd(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AR(r.c,r.d,l),$async$yj)
case 11:w=12
return A.b(t.kX(),$async$yj)
case 12:r=t.c
if(r==null){w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yj,v)},
a0b(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$a0b)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyh(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.yO,new C.d6f(t),new C.d6g())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.ms("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new F.ms(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h2D(o,new F.ri(s,r,"",p,new F.uu(q.d,null,null,null,null,"","","")),null),$async$a0b)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0b,v)},
NA(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$NA)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bS(D.acR,null,new C.d5V(t),s,!0,!0,!0,P.a6m,!1,!1,x.N),$async$NA)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cHl(r)
t.m(new C.d5W(t,q))
s=t.a
w=7
return A.b(C.Ri(s.c,s.d,q),$async$NA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NA,v)},
WJ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(D.acR,null,new C.d60(t),r,!0,!0,!0,P.a6m,!1,!1,x.e),$async$WJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d61(t,s))
r=t.a
w=4
return A.b(C.Ri(r.c,r.d,s),$async$WJ)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B4(0,B.dV,B.oL)
case 1:return A.h(u,v)}})
return A.i($async$WJ,v)},
bPx(d){var w=d.bU(),v=B.a.aV(B.o.u(w.gcd()),2,"0"),u=B.a.aV(B.o.u(w.gcu()),2,"0")
return""+w.gcg()+"-"+v+"-"+u},
gyh(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bXC()
if(r.e)w=D.abH
else if(J.cn(r.d)){w=r.y
v=r.gyh(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f3k,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A_.aiA,new C.Yl(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ko.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aC(q,A.p(q,D.eOK,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dR.j(0.45),B.J,18)],x.V),E.vZ,B.n),q,q,q,q,B.YZ,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcE5(),q,q,q,q,q,q,!1,B.a7))
w.push(B.R)
w.push(A.hk(D.bIZ,D.fDq,r.gaMa(),q))
B.d.v(u,w)}w=A.av(A.c8(A.x(u,B.m,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.ex,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ko.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.Af
u=A.x(A.a([new A.D(D.btL,w,q),A.E(A.IN(v,new C.d6r(r),J.ad(r.d)+1,q,r.gcaK(),u,B.aP),1),r.bCh()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c7(q,D.aef,new A.an(B.W,q,B.b1,B.r,A.a([D.aLb,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bXC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JM(B.dX,"AI",h.gbAa(),!0))
if(h.a.f)f.push(new C.JM(B.nl,"Cover",h.gbKP(),!1))
if(h.a.f)f.push(new C.JM(B.yq,"Header",h.gbFM(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JM(B.u3,"Print",h.gcjM(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jp
t=v?"Save":"Edit"
f.push(new C.JM(u,t,v?h.gcq3():new C.d6b(h),!1))}if(h.a.f)f.push(new C.JM(B.hB,"Add page",h.gaMa(),!1))
v=C.hlL(h.y.Q)
u=h.gyh(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.drt
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jX.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.ko,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ko.j(0.85)
p.push(new A.bB(1,B.bh,A.aC(B.c7,A.x(A.a([k,B.bD,new A.y(l.b,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.akl(v,u,t+" \xb7 "+s+" "+r,new C.d6c(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$zM)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a1T(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.d5S(t,p),s,null,!0,!0,x.N),$async$zM)
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
return A.b(t.cAM(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zM)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zM,v)},
YD(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jX.j(0.3),B.q,1),r=x.p
return new A.D(B.cw,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vZ,B.a5),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A9.TD,w,w,w),A.d(g,w,w,w,w,w,w,A3.Tx,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d6d(d,h),w,w,w,w,w,w,w),w)},
DE(){return this.bP1()},
bP1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DE=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d64(r),a7,null,!0,!0,x.ei),$async$DE)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cb(null,null,!1,null,new C.d65(o),a7,null,!0,!0,x.H).fj(new C.d66(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.ci(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yO[a1]
J.ci(j,i.a)}w=8
return A.b(C.agE(a0,a7,new C.d67(o),d,l,e,j),$async$DE)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.aa(a8)
n=A.u(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).eF()
l=o
l.si0($.aw())
J.aQq(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.J(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gck(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bbY(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AR(j.c,j.d,l),$async$DE)
case 11:w=12
return A.b(r.kX(),$async$DE)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yO[a1].a)
a5=l.cEY(j,12,a7)
l=r.a
w=15
return A.b(C.Ri(l.c,l.d,a5),$async$DE)
case 15:if(r.c!=null)r.m(new C.d68(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B4(0,B.dV,B.oL)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.J(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cqX("Undo",new C.d69(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DE,v)},
Fd(d,e){return this.cAN(d,e)},
cAM(d){return this.Fd(d,!1)},
cAN(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fd=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cb(null,null,!1,null,new C.d6k(a0),k,null,!0,!0,x.H).fj(new C.d6l(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ci(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a25(m,new C.d6m(a0)),$async$Fd)
case 10:w=8
break
case 9:w=11
return A.b(C.bCu(new C.d6n(a0),m,a2),$async$Fd)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.aa(a1)
q=A.u(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).eF()
o=a0
o.si0($.aw())
J.aQq(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.J(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bbY(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AR(k.c,k.d,o),$async$Fd)
case 12:w=13
return A.b(r.kX(),$async$Fd)
case 13:o=r.c
if(o==null){w=1
break}o=o.J(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cqX("Undo",new C.d6o(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fd,v)},
bCh(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d5T(v):u
r=A.aH(u,u,u,u,A.X(D.bEE,s?D.ko:B.b_,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.hk(A.X(B.vD,B.EY,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EY,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbKo(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ko.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d5U(v):u
return A.bm(!0,new A.D(D.btz,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.ey,t<J.ad(v.d)?D.ko:B.b_,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Z6.prototype={
T(){return new C.be9(new A.as(B.as,$.aw()))}}
C.be9.prototype={
ga1j(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbNL(){var w,v=this.ga1j()
A:{if("cover"===v){w=D.cVT
break A}if("book"===v){w=D.cRH
break A}w=D.djM
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jX.j(0.5),n=x.p,m=A.B(A.a([D.dru,B.at,D.bz_,A.aH(q,q,q,q,B.ls,q,q,q,new C.d8d(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j7(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d8e(r),r.ga1j()==="page",q,q,q,q))
if(r.a.d)l.push(A.j7(q,q,q,D.fy7,q,new C.d8f(r),r.ga1j()==="book",q,q,q,q))
l.push(A.j7(q,q,q,D.flo,q,new C.d8g(r),r.ga1j()==="cover",q,q,q,q))
l=A.bW(B.bB,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kI,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dp,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbNL(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mI(q,B.c.j(0.08),new A.y(s,q,B.J3,q,q,q,q,q,q,q,q,q),B.hG,new C.d8h(r,s),q,q,q,q))}return A.eL(q,E.AK,A.c8(A.x(A.a([m,B.R,D.fBl,B.am,l,B.ac,k,B.O,A.bW(B.bB,w,B.br,6,6),B.aB,A.dn(D.bIW,D.fC8,new C.d8i(r,d),A.bn(B.b6,q,q,q,q,B.oi,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.au,D.fwo],n),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.fD,q,q,B.ag),q,q,q,D.aii,B.d1,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.Z4.prototype={
T(){return new C.azk(A.a([],x.Y))},
ge1(){return this.c}}
C.aer.prototype={}
C.azk.prototype={
a_(){this.a1()
this.kX()},
kX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QM(p.c,p.d),$async$kX)
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
return A.b(C.bB0(r.c,q),$async$kX)
case 6:j=e
i=J
w=7
return A.b(C.KF(t.a.c,q),$async$kX)
case 7:m.push(new l.aer(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d6I(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kX,v)},
b7k(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PT(d,e){return this.cci(0,e)},
cci(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cl(A.e8(new C.d6H(u,e),!0,null,x.y)),$async$PT)
case 2:t=g
w=3
return A.b(u.kX(),$async$PT)
case 3:if(t===!0&&u.c!=null)u.c.J(x.q).f.U(D.aOJ)
return A.h(null,v)}})
return A.i($async$PT,v)},
Fg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.J(x.q).f.U(D.aOF)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afZ(s.c,s.d),$async$Fg)
case 5:q=e
w=6
return A.b(t.kX(),$async$Fg)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PT(0,B.d.hn(t.d,new C.d6M(q))),$async$Fg)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QI(p,s.f,r,n,o),$async$Fg)
case 10:m=e
w=11
return A.b(t.kX(),$async$Fg)
case 11:if(m&&t.c!=null)t.c.J(x.q).f.U(D.aOJ)
case 1:return A.h(u,v)}})
return A.i($async$Fg,v)},
Pn(d,e){return this.cnL(0,e)},
cnL(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d6L(t,e),s,null,!0,!0,x.y),$async$Pn)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2i(s.c,s.d,e.a),$async$Pn)
case 4:w=5
return A.b(t.kX(),$async$Pn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pn,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bCk(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jX.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aC(n,new A.fI(0.7142857142857143,A.p(n,A.x(A.a([D.drv,B.ac,D.e9G,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ko.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcE1(),n,n,n,n,n,n,!1,B.a7))}w=A.m(22)
v=A.I(E.jX.j(0.85),B.q,1.6)
s=A.aC(n,A.p(n,D.bQD,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jX.j(0.6),B.q,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6N(d),n,n,n,n,n,n,!1,B.a7)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jX.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bzn,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f2p,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h8,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bWs,B.n),n,n,n,Am.Md,D.brH,n,n,n)
if(o.e)k=D.abH
else k=k.length===0?D.b59:A.cq(new C.d6O(k))
return A.c7(n,D.aef,new A.an(B.W,n,B.b1,B.r,A.a([D.aLb,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bCk(d){var w,v,u=this,t=null,s=u.b7k(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f7(B.A,new A.a7(300,420,new C.Yl(d.b,s,r,t),t),B.f,B.dv),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aC(t,A.p(t,D.bPW,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b_,B.q,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6F(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f2_,t,t,t)
v=r===1?"page":"pages"
return A.aC(t,A.x(A.a([new A.fI(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ko.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6G(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JM.prototype={}
C.Yl.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.yO,new C.cFi(m),new C.cFj()),j=m.c,i=D.Cu.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m_:B.b9
v=new C.cFk(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e7_,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bbp(j.x,h,l),B.av),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aiB,8,0.85,2.2),v.$4(D.bwq,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aiB,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bwm,A.b3(l,l,l,new C.bbg(h,l),B.av),l),0,0,0))
r=A.X(D.ax2[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aun,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.bwR,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGj(l),D.eSP),l,l,l,46,0,l))
return A.p(l,A.bw(D.aan,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aan,i,new A.a8(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbp.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eE()
f.dt(11)
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
k=h.gbM().a.snapshot()
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
au(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bbg.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bS
for(w=e.a,v=e.b,v=[D.eJL,new A.cA([w,0,-1,1]),new A.cA([0,v,1,-1]),new A.cA([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cC(s)).a,m)
m.delete()
s=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
au(d){return!d.b.A(0,this.b)}}
C.ud.prototype={}
C.YD.prototype={
T(){return new C.bbn()}}
C.bbn.prototype={
go4(){var w=this.d
return w===$?this.d=this.a.c:w},
gyh(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b5,B.aO),$.aw())}return v},
gaAA(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b5,B.aO),$.aw())}return v},
gaql(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b5,B.aO),$.aw())}return v},
q(){var w=this,v=w.gyh(0),u=v.S$=$.aw()
v.P$=0
v=w.gaAA()
v.S$=u
v.P$=0
v=w.gaql()
v.S$=u
v.P$=0
w.a2()},
aqY(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j7(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cYK(this,f,u),e===u,s,s,s,s))}return A.bW(B.bB,r,B.br,6,8)},
awD(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kH,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go4(),a0=f.gyh(0),a1=a0.a.a,a2=f.gaAA(),a3=a2.a.a,a4=f.gaql(),a5=d.bbW(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f7(B.A,new A.a7(270,370,new C.Yl(a5,d,f.a.e,e),e),B.f,B.dv),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awD("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZ8(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awD("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZ9(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yO[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b_
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ay,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aC(e,A.x(A.a([p,B.cU,new A.y(t.b,e,new A.H(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZa(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bW(B.bB,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eC:B.K,2,B.q,-1)
q.push(A.aC(e,A.p(e,A.X(D.ax2[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZb(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bW(B.bB,q,B.br,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awD("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZc(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mQ,e,e,e)
m=A.a([],w)
for(l=D.Cu.gdN(D.Cu),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eC:B.b_
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aC(e,A.x(A.a([j,B.bD,new A.y(i,e,new A.H(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZd(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bW(B.bB,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mQ,e,e,e)
k=f.go4()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fvS,B.ac,d,B.aR,a0,B.R,a2,B.aB,D.fBV,B.O,v,B.aB,D.fw0,B.O,q,B.aB,a4,B.aB,p,B.O,m,B.aB,l,A.kY(e,9,""+B.k.V(f.go4().f),36,18,new C.cZe(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.aqY(D.a3q,f.go4().r,new C.cZf(f),D.dmY),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.aqY(D.a2O,f.go4().w,new C.cZg(f),D.dn2),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.aqY(D.a2J,f.go4().x,new C.cZi(f),D.dot),B.am,A.iG(e,B.b6,e,B.af,e,new C.cZj(f),e,e,e,D.fqk,f.go4().z),B.by,A.bG(D.fuH,new C.cZk(f,a6),A.bn(B.b6,e,e,e,e,B.oi,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,An.Mp,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGj.prototype={
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
u.saq(D.bX7.av(0,new A.a9(0,0,0+w,0+v)))
d.aR(t,u)},
au(d){return!1}}
C.bgD.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.saq(D.bW8.av(0,new A.a9(0,0,a3,a4)))
a5.b_(new A.a9(0,0,a3,a4),w)
v=B.k.dk(a2/112)
u=new A.eE()
u.dt(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cVS[u.aw(9)]
j=u.aw(14)
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
g.saq(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).av(0,i))
d=g.H()
w.drawRRect(A.et(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jX.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c0(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jX.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c0(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bVv.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jt
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b8D.j(0.72).gp(0)
a5.b_(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.saq(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bfA.j(0.22),B.K],t),a0,a0).av(0,A.bU(new A.v(w,a2),a1)))
a5.af(new A.v(w,a2),a1,a4)},
au(d){return!1}}
C.b9B.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kO(new A.o(A.aq(D.ko,D.bk3,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.Kb,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aGQ,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jX.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qc,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aYu,u,D.bX5,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGj(o),D.eSK),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTS(p.y,r,G.iB,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iB.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.ffL,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iB.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iB.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f6V,!0,B.a4,B.zB,B.an,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.ffD,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iB.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.EM.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fs,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.EM.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.EM.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iB.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XC(A.d3(A.a([A.d3(o,o,o,o,o,o,o,o,o,D.fa0,B.a.ap(k,0,1)),A.d3(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iB.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.c8(A.x(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.i2,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iB.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.Kb,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.bvT,A.x(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Kb,v,D.bXC,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.ap7.prototype={
T(){return new C.aCQ(A.a([],x._))},
bs(){return this.r.$0()},
pR(){return this.w.$0()},
ge1(){return this.c}}
C.aCQ.prototype={
a_(){var w,v
this.a1()
this.vP()
w=this.a
v=w.c
if(v.length!==0)C.a6U(v,w.e,w.d.w)},
vE(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h2G(r,t.e,!1,s.w,new C.dTZ(u),null,s),$async$vE)
case 2:w=3
return A.b(u.vP(),$async$vE)
case 3:return A.h(null,v)}})
return A.i($async$vE,v)},
a_l(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h2G(r,t.e,!0,s.w,new C.dTY(u),null,s),$async$a_l)
case 2:w=3
return A.b(u.vP(),$async$a_l)
case 3:return A.h(null,v)}})
return A.i($async$a_l,v)},
vP(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AF(q.a.c),$async$vP)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.dU0(q,p))
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
return A.b(C.Gp(q.a.c).d7(0,B.pQ),$async$vP)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dU1(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dU2(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vP,v)},
Om(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Om=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.J(s).f.U(D.eWm)
w=3
return A.b(C.Gp(t.a.c),$async$Om)
case 3:r=e
w=4
return A.b(C.fJb(t.a.c,r),$async$Om)
case 4:q=e
w=5
return A.b(C.Gp(t.a.c),$async$Om)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dTX(t,p))
o=t.c.J(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dz:B.cT,null,B.r,null,s,null,B.mq,null,null,null,null,null,null,null,null,null,null))
t.a.pR()
case 1:return A.h(u,v)}})
return A.i($async$Om,v)},
HO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iag(l),$async$HO)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hEN(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZw(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HO)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hlV(r)
o=Date.now()
n=t.a.c
m=new C.kC(l,r.toUpperCase(),p,!0,B.T,D.Ch,new A.S(o,0,!1),0,n,D.tP)
w=5
return A.b(C.a2o(n,m),$async$HO)
case 5:w=6
return A.b(t.vP(),$async$HO)
case 6:t.a.bs()
t.a.pR()
if(t.c==null){w=1
break}t.Eq(m)
case 1:return A.h(u,v)}})
return A.i($async$HO,v)},
Eq(d){return this.cek(d)},
cek(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Eq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AF(u.a.c),$async$Eq)
case 2:n=l.re(k.dH(f,new C.dU_(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hC(m,new C.ap1(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Eq)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2o(u.a.c,o),$async$Eq)
case 6:case 5:w=7
return A.b(u.vP(),$async$Eq)
case 7:u.a.pR()
return A.h(null,v)}})
return A.i($async$Eq,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tM(p)
if(r.e)return A.av(A.mJ(q,p?B.bs:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e_:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bK0,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcdo(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fq(A.p(q,A.x(A.a([u,B.aR,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fDb,r.gaQe(),A.bn(B.bT,q,q,q,q,q,Al.Z1,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bvP,q,q,1/0),15,B.af,1.05,D.a93,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.cI(r.d))w.push(A.aH(q,q,q,q,A.X(B.yx,B.aV,q,q,q,q),q,q,q,new C.dU4(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aH(q,q,q,q,A.X(B.yo,B.aV,q,q,q,q),q,q,q,r.gafh(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.anH,D.fjb,r.gaQe(),A.bn(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fq(r.cAS(J.q(r.d,s),o),14,B.af,1,D.a93,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cAS(d,e){var w=null,v=e.a,u=v?B.e_:B.c,t=A.m(14),s=A.I((v?B.e1:B.bO).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.m(14),p=A.p(w,D.bJ4,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaoe(),m=d.d?"":" \xb7 Public",l=d.y===D.kv?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bD,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bA,A.B(A.a([p,B.bd,l,A.X(B.MW,v?B.bs:B.bl,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dU3(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ap1.prototype={
T(){return new C.aCN(A.a([],x._),A.aX(x.N),A.b7e())},
bs(){return this.r.$0()},
ge1(){return this.c}}
C.aCN.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.aca()
w=u.a
v=w.c
if(v.length!==0)C.a6U(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a2i(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xK("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dTp(r),s,null,!0,!0,x.y),$async$a2i)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jj()
t.m(new C.dTq(t,r))
w=4
return A.b(t.vG(),$async$a2i)
case 4:t.a.bs()
t.xK(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2i,v)},
cqI(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dTk(w,f,d,e))},
aSw(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jO(q,q,1,1)
this.w.sp(0,u)},
b9B(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eI(new Float64Array(16))
q.e2(r)
w=q.Cy()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e9(r,u,0,1)
t.jO(v,v,1,1)
t.e9(-r,-u,0,1)
t.iE(0,q)
s.sp(0,t)},
aca(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aca=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AF(u.a.c),$async$aca)
case 2:t=s.re(r.dH(e,new C.dST(u)))
if(t!=null&&u.c!=null)u.m(new C.dSU(u,t))
return A.h(null,v)}})
return A.i($async$aca,v)},
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
return A.b(C.h2G(o,t,!1,r,new C.dT7(u),q.a,s),$async$vE)
case 2:n=A
m=J
w=3
return A.b(C.Gp(u.a.c),$async$vE)
case 3:p=n.re(m.dH(e,new C.dT8(u)))
if(p!=null&&u.c!=null)u.m(new C.dT9(u,p))
return A.h(null,v)}})
return A.i($async$vE,v)},
Jj(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
vG(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2o(t,s),$async$vG)
case 2:return A.h(null,v)}})
return A.i($async$vG,v)},
a0R(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tX(q,t.a.c)){t.xK("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ibp(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0R)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jj()
t.m(new C.dTj(t,r))
w=4
return A.b(t.vG(),$async$a0R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0R,v)},
a_z(){return this.cem()},
cem(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tX(q,t.a.c)){t.xK("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dTh(r,new C.tM(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_z)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jj()
t.m(new C.dTi(r,t))
w=4
return A.b(t.vG(),$async$a_z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_z,v)},
Vz(d){return this.bzl(d)},
bzl(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tX(r,t.a.c)){t.xK("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSH(t,d),r,null,!0,!0,x.P),$async$Vz)
case 3:s=f
if(s==null){w=1
break}t.Jj()
t.m(new C.dSI(t,s))
w=4
return A.b(t.vG(),$async$Vz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vz,v)},
a2E(d){return this.cD2(d)},
cD2(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2E=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dTs(u,d,new C.tM(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2E)
case 2:return A.h(null,v)}})
return A.i($async$a2E,v)},
caF(d){var w=this,v=w.d
v===$&&A.c()
if(C.tX(v,w.a.c))w.O1(d)
else w.a2E(d)},
ahL(d,e){return this.cuI(d,e)},
cuI(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.dTm(new C.tM(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahL)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahL,v)},
HT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kv?3:5
break
case 3:w=6
return A.b(C.fRr(t.a.c),$async$HT)
case 6:s=e
o=t.a
r=C.hat(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahL(!s,!r),$async$HT)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAT(o,t.a.c)){t.xK("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l2(o,"Cancel","Remove",q.y===D.kv?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HT)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOo(t.a.c,t.d.a),$async$HT)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iP(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HT,v)},
a9H(d){return this.bKw(d)},
bKw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tX(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b6(s,new C.dSJ(p))){o=A.U(s)
p.a=A.re(new A.cO(new A.a_(s,new C.dSK(d),o.k("a_<1>")),new C.dSL(),o.k("cO<1,n>")))}q=p.a
if(q==null)q=d.d
t.Jj()
t.m(new C.dSM(t,s,d,q))
w=3
return A.b(t.vG(),$async$a9H)
case 3:t.xK(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9H,v)},
O1(d){return this.bMF(d)},
bMF(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tX(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2E(d),$async$O1)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.dSQ(t,d),r,null,!0,!0,x.P),$async$O1)
case 6:s=f
if(s==null){w=1
break}t.Jj()
t.m(new C.dSR(t,s))
w=7
return A.b(t.vG(),$async$O1)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O1,v)},
cBg(){var w=this,v=w.d
v===$&&A.c()
if(!C.tX(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dTr(w))
w.vG()},
Yp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAT(n,t.a.c)){t.xK("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bo(new A.M(q,t.gc99(),A.U(q).k("M<1,n>")).c0(0,new C.dT2()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dT3(t,new C.tM(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yp)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jj()
t.m(new C.dT4(t,p))
w=4
return A.b(t.vG(),$async$Yp)
case 4:t.xK("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yp,v)},
c9a(d){return B.a.i(d.toLowerCase())},
cd9(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tX(v,w)
t=r.d
s=C.i0D(t)
C.iak(q,t.b,u,C.i0C(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tM(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dTz(),A.U(l).k("a_<1>")).gM(0)
l=n?B.c_:B.iA
v=A.X(B.a_d,n?B.bs:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.D(B.B7,A.aL(!1,o,!0,new A.D(B.hP,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dTA(p,d),o,o,o,o,o,o,o),o),new A.D(B.nh,p.bXD(m),o)],u)
if(p.d.y===D.kv){t=B.rw.j(0.15)
s=A.m(12)
r=A.I(B.rw.j(0.45),B.q,1)
q=C.Gn(p.d,p.a.c)
v.push(new A.D(B.xJ,A.p(o,A.B(A.a([D.bOi,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ij,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.tX(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JI("Undo",B.rj,p.gcBf(),m,o,o))
u.push(new C.JI("Family Book",D.bDK,p.gcd8(),m,B.tk,o))
if(C.tX(p.d,p.a.c))u.push(new C.JI("Display settings",B.BT,p.gcel(),m,B.aZ,o))
u.push(new C.JI("Sync",B.yo,p.gafh(),m,o,o))
t=p.d
if(t.y===D.kv||C.bAT(t,p.a.c)){t=p.d.y===D.kv?"Remove shared tree":"Delete tree"
u.push(new C.JI(t,B.e6,p.gbKG(),m,B.h1,o))}if(C.tX(p.d,p.a.c))u.push(new C.JI("Add member",B.vP,new C.dTB(p),m,B.bT,o))
v.push(new A.D(A0.ahM,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaoe()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dTC(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_h:X.MX,o,o,o,o,o)
v.push(A.av(A.hk(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dTD(p),o),o,o,o))}return A.c7(o,l,A.bm(!0,A.x(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bXD(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fy.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yh,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bRn,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafh(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f5g,m,m,m)
r=r.gaoe()
p=n.d.gaoe()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bD,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a6,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tX(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bOu,m,m,m,n.gco5(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jq:B.mz
r=r?"Private":"Public"
r=A.E(n.auA(q,"Privacy",r,n.a.d.w?n.gcAb():m),1)
q=A.E(n.auA(B.yp,"Tree code",n.d.c,new C.dSS(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.auA(D.bFt,"Collaborators",p,n.gc1b()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kv){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aF(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.D(B.fL,A.B(A.a([A.X(B.oV,B.c,m,m,m,14),B.ed,A.d("View only",m,m,m,m,m,m,B.aPY,m,m,m)],o),B.m,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.Fo,A.x(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bVA,B.n),m,m,m,m,m,m,m,1/0)},
auA(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.D(L.aiU,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uJ,A.d(f,w,1,B.a2,w,w,w,O.zF,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.bdS.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdV(s,t),new A.ar(w,v))],x.p)
r=r.gdN(r)
B.d.v(u,r.dz(r,new C.d6S(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d6T(this),A.U(r).k("M<1,r>")))
return new A.D(B.tM,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JU.prototype={}
C.FD.prototype={}
C.bdU.prototype={
gbi2(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIp.prototype={}
C.bdV.prototype={
bMk(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bC.j(0.75).gp(0)
v.c=2
v.d=B.bS
d.bE(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ao,null,null,A.a([],x.v))
q=w+5.5
t.F(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.F(new A.pD(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.F(new A.pD(u+4.95,r,u+9.9,s,u,q))
t.F(new A.bE())
q=A.N()
q.r=B.c.gp(0)
d.af(new A.v(u,w),9,q)
q=A.N()
q.r=B.bC.gp(0)
d.aR(t,q)},
bMi(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.d7c())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b6(a0,new C.d7d(f))
t=new A.M(a0,new C.d7e(f),A.U(a0).k("M<1,L>")).c0(0,new C.d7f()).cJ(0,1/0,B.v2)
w=f.a
d.bE(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
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
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cC(n)).a,k)
k.delete()}},
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bS
w.e=B.fF
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bMi(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bMk(d,w,q.a,q.b)}},
au(d){return d.b!==this.b}}
C.bhA.prototype={
gc6Z(){var w=this.c
if(B.a.i(w.y).length!==0)return D.djL
switch(w.c.a){case 0:return D.cNw
case 1:return D.cYK
case 2:return D.de6}},
gc71(){var w=this.c,v=C.hlf(w.w),u=C.hlf(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc6Z(),p=t.c,o=I.bBN(p.f),n=t.gc71(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.az:B.c,j=A.I(r?B.az:B.c,B.q,2)
if(o!=null)w=A.tb(B.A,s,B.ci,B.bV,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hW(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ay,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.FF,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.az:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.ffg,s,s,s),B.f,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.bxH,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.m(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a6,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aC(s,new A.a7(84,112,A.x(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,D.b_n,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bxS,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bcZ.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bbn
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
au(d){return d.b!==this.b}}
C.bvh.prototype={
B(d){var w=this,v=null,u=new C.fbA(w),t=w.c,s=t?B.ct:B.c,r=A.m(12),q=u.$3(B.hB,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.ym,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),u.$3(B.alf,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dr,v,v,v,B.ah)}}
C.bkW.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.q,2),s=w.e,r=x.p
t=A.aC(v,A.p(v,A.x(A.a([A.X(s?K.a_h:X.MX,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fbD,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f9A,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.eNu(w),A.U(s).k("M<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZG.prototype={
T(){return new C.aBe()},
bs(){return this.Q.$0()},
ge1(){return this.w}}
C.aBe.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.c
r.y=t==null?D.xX:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i2a(w.r,w.f)
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
Po(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Po=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hat(p.y,p.w)
w=3
return A.b(A.le(t.a.w,B.I2),$async$Po)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZw(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Po)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hEO(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(Ao.Gy(78,800),$async$Po)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dn5(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Po,v)},
c70(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hZ(B.o.u(1000*Date.now()),w,D.xX,null,null,null,"","","","","",1,!1,0)
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
s=v.aDv(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a9i(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dn4(r),s,null,!0,!0,x.y),$async$a9i)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9i,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tM(j),h=l.a.e,g=A.U(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dne(l),g),g.k("J.E"))
h=j?B.e_:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bwb,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.az,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hv(A.aL(!1,k,!0,new A.D(B.lS,A.X(B.e6,B.oI,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbHk(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jB:B.iW
t=I.bBN(l.as)
if(l.as==null)s=A.X(B.oN,j?B.bs:B.bl,k,k,k,40)
else s=k
s=A.av(A.aC(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h5(u,t,s,k,42),A.ao(0,A.h5(B.bT,k,D.bI8,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc6Y(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBg(t,"Full name",B.mv,1,1,i,B.m5)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.R,new C.bhy(i,u,new C.dnf(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bpO],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dng(),A.U(o).k("M<1,eG<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bpQ],q)
B.d.v(q,new A.M(f,new C.dni(),A.U(f).k("M<1,eG<n?>>")))
o=A.x(A.a([t,B.am,new C.acR(i,r,"Who is their parent?",p,new C.dnj(l),k,o),B.aB,n,B.am,new C.acR(i,m,"Who is their spouse / partner?",q,new C.dnk(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBg(q,"Birth date",D.aki,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBg(m,"Birth place",B.a_w,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBg(n,"Date of death (if deceased)",D.amw,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBg(p,"Occupation",B.a0z,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.acS(i,"Identity",u,k),B.ac,new C.acS(i,"Family links",o,k),B.ac,new C.acS(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBg(r,"Notes",B.l_,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBf(i,"Child order",l.ceA(l.at),new C.dnl(l),new C.dnm(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h00(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dnn(l):k
B.d.v(r,A.a([B.R,new C.aBf(i,"Visible in tree",u,w,new C.dno(l),k)],v))}r.push(B.R)
w=j?B.jB:B.iW
u=A.m(14)
t=A.I(j?B.e1:B.bO,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iG(k,B.bT,k,B.af,k,new C.dnp(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ahn,k,k,k))
r.push(B.by)
w=j?B.aQ:B.az
j=j?B.e1:B.bO
r.push(A.B(A.a([A.E(A.dU(B.nC,new C.dnh(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bd,A.E(A.bG(D.eOU,l.gc7_(),A.bn(B.aV,k,k,0,B.c,k,B.cl,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.el(B.hc,k,B.af,h,new A.a7(420,k,A.c8(A.x(r,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),k),D.aie,k,B.ahD,new A.b7(g,B.Y),k,k)},
ceA(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acS.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jB:B.iW,s=A.m(16)
return A.x(A.a([new A.D(D.aiE,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e1:B.bO,B.q,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhz.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e_:B.c,r=A.m(12),q=A.I((t?B.e1:B.bO).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.az,u,u,u,u,u,u,u,u,14,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eA,u,B.vt,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cx,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acR.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e_:B.c,s=A.m(12),r=A.I((u?B.e1:B.bO).j(0.85),B.q,1),q=A.X(B.rd,u?B.bs:B.bl,v,v,v,v),p=A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,14,v,v,B.a6,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e_:B.c
return A.p(v,new A.Dw(A.Sl(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cx,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bhy.prototype={
B(d){var w=new C.dnq(this)
return A.B(A.a([w.$3(D.ZQ,"Male",B.NG),B.ab,w.$3(D.ajw,"Female",B.Nt),B.ab,w.$3(D.xX,"Other",B.nm)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBf.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jB:B.iW,r=A.m(14),q=A.I(t?B.e1:B.bO,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.az,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHr(u,B.ym,w.f,v),B.bp,new C.aHr(u,B.hB,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ej,v,v,v)}}
C.aHr.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.e_:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bs:B.bl).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.acT.prototype={
bQ9(d){switch(d.a){case 0:return B.bT
case 1:return B.bC
case 2:return B.cX}},
bQa(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWS(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A7(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e_:B.c
u=A.m(12)
t=A.I((w?B.e1:B.bO).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bT,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.az,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.xG,p,p,1/0)},
adN(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jB:B.iW,s=A.m(16),r=A.I(v?B.e1:B.bO,B.q,1)
return A.x(A.a([new A.D(D.aiE,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hq1(r,q),o=q.c,n=t.bQ9(o),m=I.bBN(q.f),l=t.e.a,k=l?B.e_:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kv?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a6,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h5(u,m,m==null?A.X(B.oN,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ek,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bQa(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.ms,s,s,s),s,s,s)
u=x.p
i=A.a([t.A7("Full name",i,B.mv)],u)
if(p>0)i.push(t.A7("Child order","#"+p,B.Nz))
r=A.a([h,B.au,r,B.aR,l,B.R,v,B.by,t.adN("Identity",i),B.ac,t.adN("Life details",A.a([t.A7("Birth date",q.w,D.aki),t.A7("Birth place",q.x,B.a_w),t.A7("Date of death",q.y,D.amw),t.A7("Occupation",q.z,B.a0z)],u)),B.ac,t.adN("Family links",A.a([t.A7("1. Parent",t.aWS(q.d),B.FT),t.A7("2. Spouse",t.aWS(q.e),B.Ns)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adN("Notes",A.a([t.A7("Notes",q,B.l_)],u))],u))
r.push(B.by)
r.push(A.bG(B.Jj,new C.dnA(d),A.bn(B.aV,s,s,s,s,s,B.cl,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eL(s,k,new A.cT(B.lE,A.c8(A.x(r,B.ai,s,B.e,B.N,0,B.p),B.r,s,B.y,s,B.xM,s,s,B.ag),s),s,s,s,B.Fr,B.d1,s,new A.b7(j,B.Y),s)}}
C.JI.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xP,A.hv(A.aF(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.ap4.prototype={
eS(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ac())
w=u.c
v=A.U(w).k("M<1,a5<n,@>>")
w=A.C(new A.M(w,new C.c8j(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j7(w,new C.c8k(),t,x.U))
return s}}
C.ap5.prototype={
T(){return new C.aCP(A.a([],x.bF))},
gde(){return this.c}}
C.aCP.prototype={
a_(){this.a1()
this.Jq()},
Jq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c8n(t.a.c),$async$Jq)
case 3:r=e
w=4
return A.b(C.AF(t.a.c),$async$Jq)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qT(q,new C.dTM(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dTN(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jq,v)},
yi(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
K9(d,e){return this.cDC(d,e)},
cDC(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$K9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dTR(q,e))
t=3
w=6
return A.b(d.$0(),$async$K9)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dTS(q))
$.eW.mt()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$K9,v)},
Xd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p6(r,s.c,s.e),$async$Xd)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K9(new C.dTJ(t),"Preparing download\u2026"),$async$Xd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xd,v)},
Xh(d){return this.bO7(d)},
bO7(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p6(r,s.c,s.e),$async$Xh)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.K9(new C.dTK(t,d),"Preparing file\u2026"),$async$Xh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xh,v)},
afE(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.x5.c6().LW(B.QB,B.tQ,!0),$async$afE)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
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
$.am.$1("[family tree sync pick] file_picker: "+A.u(p))
w=6
break
case 3:w=2
break
case 6:u=A.Gx()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afE,v)},
XT(d){return this.bYx(d)},
bYx(d){var w=0,v=A.j(x.H),u=this
var $async$XT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.K9(new C.dTL(u,d),"Restoring family trees\u2026"),$async$XT)
case 2:return A.h(null,v)}})
return A.i($async$XT,v)},
XS(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afE(),$async$XS)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XT(s),$async$XS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
a1H(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p6(r,s.c,s.e),$async$a1H)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K9(new C.dTQ(t),"Creating QR code\u2026"),$async$a1H)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1H,v)},
a1i(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CP()){t.yi("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cl(A.e8(new C.dTO(),!0,null,x.N)),$async$a1i)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XT(r),$async$a1i)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1i,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AA:B.iA,m=o?D.afS:B.aQ,l=o?B.aJ:B.bO,k=o?B.aQ:B.az,j=new C.d7g(n,m,l,k,o?B.bK:B.bl)
l=A.aH(p,p,p,p,A.X(B.eE,k,p,p,p,20),p,p,p,new C.dTU(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d6P(!0,B.js,B.aN,B.aN,q.r?p:q.gcuw(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcqD()
t.push(A.E(C.d6P(!s,B.j1,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d6P(!1,B.hC,B.aV,B.bT,q.r?p:q.gbO0(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d6P(!1,M.ys,B.aF,B.aM,q.r?p:q.gbYu(),j,s,"Upload backup file"),1))
l=A.a([new C.bdT(v,l,p),B.kF,new C.ac8(j,"QR restore",p),B.R,t,B.d7,new C.ac8(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kF,new C.ac8(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dTV(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.YY,p,p,B.ag,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([K.aOn,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Bd,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d7g.prototype={}
C.bdT.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kb,28)],x.V)
t=A.ao(p,A.X(B.u7,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bQV,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oj,A.E(A.x(A.a([D.fkb,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bYN,B.n),p,p,p,p,p,p,p,p)}}
C.ac8.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdR.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aN.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aN.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eH(A.de(new A.D(E.YC,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.r9,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bD,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cx,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.bdW.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eH(new A.D(B.eR,A.B(A.a([A.p(v,D.bQ7,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.r9,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hC,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.a_0.prototype={
T(){return new C.aCO()},
gde(){return this.c}}
C.aCO.prototype={
a_(){this.a1()
this.a8P()},
a8P(){var w=0,v=A.j(x.H),u=this,t
var $async$a8P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b19(u.a.c,B.CU),$async$a8P)
case 2:t=e
if(u.c!=null)u.m(new C.dTE(u,t))
return A.h(null,v)}})
return A.i($async$a8P,v)},
ah1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ah1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dTF(q))
t=4
p=A.hc7(q.a.d,B.CU)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arj(n.e,m,l,B.CU,p,n.f),$async$ah1)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dTG(q))
q.c.J(x.q).f.U(D.eXv)
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
if(q.c!=null)q.m(new C.dTH(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah1,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jg:B.pJ,n=p?B.id:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fzW,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pP(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.by,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bq,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcql()
if(u)u=B.IS
else u=A.X(r.e===!0?B.hn:B.akh,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eD(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.fP,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i2,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zO,new C.dTI(d),A.bn(B.aV,q,q,q,q,B.fP,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_1.prototype={
T(){return new C.bj2(A.za(B.xv,B.nJ,B.uc))}}
C.bj2.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c7(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fs2,w,w,w,1,w,!0),B.w,A.z9(this.d,B.bV,new C.dTW(this,d)),w,!1,!1,w,w)}}
C.aY4.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Q4,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ly.prototype={}
C.a5W.prototype={
T(){return new C.biJ(null,null)}}
C.biJ.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bk(v,B.tF,v,1,v,w)
w.e=A.bk(v,B.pP,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bv(d){var w,v,u=this
u.bG(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.buG()},
B(d){var w,v,u=this,t=B.d.dL(D.a3h,new C.dF7(u),new C.dF8())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ctN(A.c6(new A.h9(A.a([w,v],x.dS)),new C.dF9(u,t),null),!0)}}
C.biI.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0f(d,e)
break
case"house":p.m5(d,e,D.d2o)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdE()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.ma(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AR(d,e,12)
p.xT(d,e,B.lf,5,14)
break
case"grocery":p.cfj(d,e)
break
case"calculator":p.cf0(d,e)
break
case"lumber":p.cfr(d,e)
break
case"kitchen":p.cfm(d,e)
break
case"landscape":p.m5(d,e,D.d2U)
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
w.r=B.eB.j(0.85).gp(0)
d.aR(s,w)
p.AR(d,e,8)
p.xT(d,e,B.iZ,4,18)
break
case"plumbing":p.cfA(d,e)
break
case"electrical":p.m5(d,e,D.ddo)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.b_(new A.a9(0,0,0+e.a,0+e.b),u)
p.ma(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.ma(d,e,B.lJ.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AR(d,e,10)
break
case"store":p.cfK(d,e)
break
case"paint_remodel":p.cfv(d,e)
break
case"roofing":p.cfC(d,e)
break
case"warehouse":p.cfR(d,e)
break
case"vehicles":p.cfP(d,e)
break
case"farm":p.cfd(d,e)
break
case"restaurant":p.cfB(d,e)
break
case"tools":p.cfN(d,e)
break
case"wallet":p.cfQ(d,e)
break
case"concrete":p.cf6(d,e)
break
case"blueprint":p.ceZ(d,e)
break
default:p.b0f(d,e)}},
m5(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.saq(new A.a8(B.ay,B.aC,B.x,f,null,null).av(0,v))
d.b_(v,w)},
ma(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gdE()/2-h
$.W()
w=A.N()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c0(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
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
b0f(d,e){var w,v=this
v.m5(d,e,D.dbX)
w=v.c
v.ma(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.ma(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bMe(d,e,B.i_,w)
v.xT(d,e,B.c.j(0.7),6,8)},
bMe(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c0(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cfj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m5(d,e,D.cjj)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d0H[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.ma(d,e,B.c.j(0.35),w,16)
j.xT(d,e,B.iZ,5,12)},
cf0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m5(d,e,D.cjq)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdE()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h2(g,g,g,g,g,B.a4,B.c6,g,B.dP,B.c5)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d4t[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saX(0,new A.es(r,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.em()
p.a4(d,new A.v(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cjs[o]
l=B.km.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saX(0,new A.es(m,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.em()
p.a4(d,new A.v(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.ma(d,e,B.c.j(0.35),w*1.5,14)
h.ma(d,e,B.eC.j(0.55),-v*3.141592653589793*2,8)
h.ma(d,e,B.AB.j(0.4),r*2.8,22)
h.xT(d,e,B.py,8,10)
h.AR(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cfr(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,Z.avW)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hF)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fU,B.oA,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.et(p),n)
n.delete()}m.ma(d,e,B.fU.j(0.35),w,15)
m.AR(d,e,8)},
cfm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m5(d,e,D.d1b)
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
k.delete()}j.ma(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
j.xT(d,e,B.qN,4,14)},
cfA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m5(d,e,D.cRk)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xT(d,e,B.oG,6,12)
l.ma(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cfK(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m5(d,e,D.cwS)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.is)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fc,B.bM,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}n.ma(d,e,B.c.j(0.3),w,16)
n.AR(d,e,8)
n.xT(d,e,B.v8,5,13)},
cfv(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.cX6)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.hf)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.ix,B.ds,B.bM,B.er][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.et(p),o)
o.delete()}this.ma(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cfC(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.cUD)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xT(d,e,B.cr,7,11)},
cfR(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.czz)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.hF)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cr,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}this.ma(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cfP(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.dhe)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hF)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}this.AR(d,e,6)},
cfd(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.d_O)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lJ.j(0.75).gp(0)
d.af(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hk.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.ma(d,e,B.lJ.j(0.35),w,14)},
cfB(d,e){var w,v,u,t,s,r,q,p,o=this
o.m5(d,e,D.d2d)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cg(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xT(d,e,B.qN,5,16)
o.AR(d,e,7)},
cfN(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,D.deS)
w=m.c
v=w*3.141592653589793
m.ma(d,e,B.oA.j(0.55),v*3,10)
m.ma(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oA.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cfQ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,D.dhP)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.is)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iZ,B.lJ,q).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}m.AR(d,e,9)
m.ma(d,e,B.c.j(0.4),w*2.2,12)},
cf6(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.d78)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.v(v,u),34)
$.W()
s=A.N()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.fa(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bO.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
ceZ(d,e){var w,v,u,t,s,r,q,p
this.m5(d,e,D.d3c)
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
u.r=B.ds.j(0.45).gp(0)
d.b_(new A.a9(0,p,0+v,p+6),u)
this.ma(d,e,B.lf.j(0.45),-t*3.141592653589793*2,11)},
au(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.as0.prototype={
ZY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPj(),$async$ZY)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8b(s),$async$ZY)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZY,v)},
afF(d){return this.ci5(d)},
ci5(d){var w=0,v=A.j(x.H),u=this,t
var $async$afF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iau(d),$async$afF)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afF,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jB:B.iW
w=x.p
v=A.a([C.aPH(!0,B.qF,1/0,B.pY,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bI(B.b0,t,t,new A.D(B.vn,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.awT,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b4,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bJU,D.fgy,new C.cfT(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jG,t,t,t,t,B.ce)),1),B.ab,A.E(A.eD(D.bS8,D.fv6,this.gc97(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jG,t,t,D.aYV,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fI(1.7777777777777777,A.aF(!1,B.a1,!0,B.qF,new A.an(B.W,t,B.b1,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aKL.prototype={
aT(){this.b1()
this.aZ()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
C.aSD.prototype={}
C.aSC.prototype={}
C.aQC.prototype={}
C.YF.prototype={
T(){return new C.ay4()}}
C.ay4.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b5,B.aO)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
K_(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.J(x.q).f.U(D.eY_)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aSD(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e_:B.c,k=A.m(20),j=A.p(n,D.bRO,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.az,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bD,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cD,m?B.bs:B.bl,n,n,n,n),n,n,n,new C.cZw(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cx,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hcn(new C.cZx(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.az,n,n,n,n,n,n,n,n,n,n,n,B.a6,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jB:B.iW
r=A.m(12)
q=A.m(12)
p=m?B.e1:B.bO
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dh),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cZy(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,R.IZ,n,n,n,n)
u=m?B.aQ:B.az
m=m?B.e1:B.bO
return A.eL(n,l,new A.cT(B.lE,A.c8(A.x(A.a([j,B.aR,i,B.au,w,B.O,v,B.aR,t,B.by,A.B(A.a([A.E(A.dU(B.df,new C.cZz(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.at,A.E(A.bG(D.fvl,o.ga21(),A.bn(B.aV,n,n,n,B.c,n,B.cl,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.N,0,B.p),B.r,n,B.y,n,B.Be,n,n,B.ag),n),n,n,n,W.Bf,B.d1,n,new A.b7(k,B.Y),n)}}
C.YE.prototype={
T(){return new C.ay3()}}
C.ay3.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
K_(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.J(x.q).f.U(D.eVH)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aSC(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e_:B.c,n=A.m(20),m=A.p(q,D.bOn,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bD,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cD,p?B.bs:B.bl,q,q,q,q),q,q,q,new C.cZs(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ak3,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bA,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,q,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jB:B.iW
t=A.m(12)
s=A.m(12)
r=p?B.e1:B.bO
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dh),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cZt(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kG,q,q,q,q)
w=p?B.aQ:B.az
p=p?B.e1:B.bO
return A.eL(q,o,new A.cT(B.lE,A.c8(A.x(A.a([m,B.aR,l,B.aB,v,B.by,A.B(A.a([A.E(A.dU(B.df,new C.cZu(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.at,A.E(A.bG(D.fCb,this.ga21(),A.bn(B.bT,q,q,q,B.c,q,B.cl,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.Be,q,q,B.ag),q),q,q,q,W.Bf,B.d1,q,new A.b7(n,B.Y),q)}}
C.Yc.prototype={
T(){return new C.awO()}}
C.awO.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.as(B.as,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b5,B.aO),w)
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
gJl(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiR(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb39(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNV(d){var w,v=B.k.D(this.gJl()+d,0.25,999999),u=B.k.k9(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saX(0,u)
this.m(new C.cx5())},
axd(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jB:B.iW,s=A.m(14),r=A.m(14)
u=u?B.e1:B.bO
return A.bs(w,new A.b4(4,s,B.dh),w,B.bA,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.aat),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c98(d,e,f){return this.axd(d,e,f,null)},
K_(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiR()<=0){s.c.J(x.q).f.U(D.eZR)
return}r=s.c
r.toString
v=s.gJl()
u=s.gaiR()
t=s.gb39()
A.a6(r,!1).O(new C.aQC(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tM(n),l=n?B.e_:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bHR,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bD,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cx,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cD,n?B.bs:B.bl,o,o,o,o),o,o,o,new C.cxb(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axd(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NF),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,R.IZ,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jB:B.iW
t=A.m(14)
s=A.I(n?B.e1:B.bO,B.q,1)
r=A.aH(o,o,o,o,A.X(B.ym,n?B.aQ:B.az,o,o,o,20),o,o,o,new C.cxc(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bTG,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxd(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hB,n?B.aQ:B.az,o,o,o,20),o,o,o,new C.cxe(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axd(m,"Amount","0.00",B.i3),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxf(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cXA,new C.cxg(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.O,s,B.ac,A.bW(B.bB,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c98(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cxh(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kG,o,o,o,o)],w))}i.push(B.aR)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJl()===B.k.k9(p.gJl())?B.k.N(p.gJl()):p.gJl()
s=p.gb39()
r=A.AH(p.gaiR())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCz(p.gJl()*p.gaiR(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jm,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.e1:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cxi(d),h),1),B.at,A.E(A.dn(D.anA,D.fya,p.ga21(),A.bn(B.aV,o,o,0,B.c,o,B.cl,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eL(o,l,new A.cT(V.aaS,A.c8(A.x(i,B.ai,o,B.e,B.N,0,B.p),B.r,o,B.y,o,Ad.r7,o,o,B.ag),o),o,o,o,B.Mm,B.d1,o,new A.b7(k,B.Y),o)}}
C.a0M.prototype={
T(){return new C.bv9()}}
C.bv9.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b5,B.aO),v)},
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
r=r?B.jB:B.iW
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.m(12),B.dh),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fb2(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dU(B.df,new C.fb3(d),s),1)
r=A.bn(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eL(s,q,new A.D(B.Be,A.x(A.a([o,B.aB,v,B.aR,A.B(A.a([u,B.at,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fb4(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.N,0,B.p),s),s,s,s,s,B.d1,s,new A.b7(p,B.Y),s)}}
C.abb.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Fq.prototype={
T(){return new C.bv7(null,null)}}
C.bv7.prototype={
a_(){var w,v=this
v.a1()
w=A.bk(null,D.bqn,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bx3()},
gbyw(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bT,B.aZ],x.O)
case 2:return A.a([B.bv,B.aV,B.aZ],x.O)
case 3:return A.a([B.aN,B.cb,B.jY],x.O)
case 4:return A.a([B.hy,B.bT,B.fd],x.O)
case 0:return A.a([B.aV,B.bT,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ex(A.c6(v,new C.fb0(this,new C.tM(w.ax.a===B.I)),null),null)}}
C.awH.prototype={
T(){return new C.bv8(null,null)}}
C.bv8.prototype={
a_(){var w,v=this
v.a1()
w=A.bk(null,B.nb,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bx4()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fb1(this),null)}}
C.bv6.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iL(v))
w=A.N()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aE(v,w)
w=A.N()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aR(u,w)
w=A.x3(u)
t=A.a([],x.f5)
w=new A.vy(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jV('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hj(w,r)
w.jx()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRo(d,q,r,o,0,0.2,4.2,0.92)
p.aRo(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRo(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hy0(e.a.a,e,t,t+f*i,!0),r=A.bAW(s.gbM().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bS
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.H6,null).av(0,r))
d.aR(s,w)},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aMW.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.aMX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b1()
this.aZ()
this.by()}}
C.tM.prototype={}
C.as_.prototype={
T(){return new C.aEk()},
ge1(){return this.c}}
C.aEk.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.agw()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.L4(w,v)
this.a2()},
agw(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bB3(t.c,t.d.a),$async$agw)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eKE(u,s))
return A.h(null,v)}})
return A.i($async$agw,v)},
PO(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eKv(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.L4(t,s),$async$PO)
case 2:if(u.c!=null)u.m(new C.eKw(u))
return A.h(null,v)}})
return A.i($async$PO,v)},
Qj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.eKC(t,new C.tM(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qj)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8b(q),$async$Qj)
case 6:case 5:t.m(new C.eKD(t,r))
w=7
return A.b(t.PO(),$async$Qj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
Vt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iaf(r),$async$Vt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eKq(t,new C.qX(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PO(),$async$Vt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vt,v)},
cea(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hpY(t,new C.eKu(u),w,v)},
aaC(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aYH,w,w,B.n),w,22,w,w,w,w,w,22)},
a9G(d){return this.bKt(d)},
bKt(d){var w=0,v=A.j(x.H),u=this
var $async$a9G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eKt(u,d))
w=2
return A.b(u.PO(),$async$a9G)
case 2:return A.h(null,v)}})
return A.i($async$a9G,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c_:B.iA,d=A.m(8),a0=A.X(Q.a_e,f?B.bs:B.bl,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.Fy,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a6,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eKF(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b1,B.r,A.a([A.bw(A.m(22),C.aPH(!0,A.m(22),1/0,B.pY,g,d,1/0),B.aq),A.ao(10,A.dn(D.bMq,D.fAs,h.gb11(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b1,B.r,A.a([C.aPH(!0,A.m(16),1/0,B.N7,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b4,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.aaC(!0),g,g,8,g,8,g),A.ao(g,A.cux(h.aaC(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cux(h.aaC(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cux(h.aaC(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bIq,D.fu6,h.gb11(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bVk,B.n),g,g,g,g,B.lS,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b89,B.nQ,B.h7],u):A.a([B.aZ,B.aV,B.bT],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jJ,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h8,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCz(h.d.gwU(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cx,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fV.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aN.j(0.28),B.cJ,14)],t)
j=B.aN.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.buX,A.B(A.a([o,B.at,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eH(new A.D(Ai.B9,A.x(A.a([A.p(g,D.an9,B.f,g,g,new A.o(j,g,A.I(B.aN.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.h2,D.fjf],a1),B.m,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gce9(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fI(1.7777777777777777,d,g),B.aR,w,B.O,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ak.a0V,D.fh9,h.gbyZ(),A.bn(B.aV,g,g,g,B.c,g,B.ij,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e_:B.c
v=A.m(14)
u=A.I(f?B.e1:B.bO,B.q,1)
t=A.X(B.a_z,f?B.bs:B.bl,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.r8,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eKG(h,new C.tM(f)),A.U(w).k("M<1,r>")))
if(h.e)d.push(new A.D(B.B2,A.av(A.mJ(g,f?B.bs:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bm(!0,A.x(A.a([new A.D(B.B7,a0,g),A.E(A.c8(A.x(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xN,g,g,B.ag),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bCB(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e_:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b0s,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hR:B.hb,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcTH()
v=A.AH(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.F,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCz(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h9,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DV(A.B(A.a([m,A.E(new A.D(B.ahg,A.B(A.a([l,B.bd,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cD,(r?B.bs:B.bl).j(0.75),u,u,u,20),u,u,u,new C.eKr(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b_j,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d8,u,u,u,u)}}
C.add.prototype={
El(d){return this.bLR(d)},
bLR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$El=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p6(d,o,!1),$async$El)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ac.B0,null,x.H),$async$El)
case 4:s=t.d
w=5
return A.b(C.fId(!0,o,s),$async$El)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gm(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$El)
case 6:p=f
w=7
return A.b(A.p5(o,!1),$async$El)
case 7:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$El,v)},
ZZ(d){return this.cux(d)},
cux(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p6(d,s,!1),$async$ZZ)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hC(d,new C.arU(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p5(s,!1),$async$ZZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZZ,v)},
PP(d){return this.cqy(d)},
cqy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hC(d,D.aGj,!0,"NgmyWorksheetProjectScan",x.N),$async$PP)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCA(s),$async$PP)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.J(x.q).f.U(D.eZ_)
w=1
break}q=C.h2l(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$PP)
case 5:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PP,v)},
a__(d){return this.cCy(d)},
cCy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a__=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bC7(),$async$a__)
case 3:s=f
if(s==null){w=1
break}r=C.h2l(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$a__)
case 4:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a__,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tM(u),s=w.d.d.length,r=u?B.e_:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kb,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vu,A.p(v,A.x(A.a([w.ct4(d,t,s),new A.D(D.bul,A.x(A.a([w.b44(t,"QR restore"),B.R,A.B(A.a([w.aZZ(t,!0,B.js,B.aN,B.aN,new C.eKI(w,d),"Show to scan","QR code"),B.at,w.axe(t,B.j1,B.b6,B.bu,new C.eKJ(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b44(t,"Backup files"),B.R,A.B(A.a([w.axe(t,B.hC,B.aV,B.bT,new C.eKK(w,d),"Full copy","Backup file"),B.at,w.axe(t,M.ys,B.aF,B.aM,new C.eKL(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
ct4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f1,B.cS,B.fy],k):A.a([B.aZ,B.aV,B.bT],k)
w=A.ao(l,A.X(B.u7,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPH(!0,A.m(13),64,D.bDD,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aQX,l,l,l)
r=C.bCz(r.gwU(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.buK,A.x(A.a([v,A.B(A.a([s,B.es,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fE,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.eKH(d),l,l,l,A.nA(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aOc,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b44(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZZ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.afS:B.aQ
if(e)w=B.aN.j(o?0.45:0.35)
else{w=o?B.e1:B.bO
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aN.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.r9,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.az,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eH(new A.D(E.YC,A.x(A.a([t,B.ac,u,B.bD,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cx,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
axe(d,e,f,g,h,i,j){return this.aZZ(d,!1,e,f,g,h,i,j)}}
C.arU.prototype={
T(){return new C.bkp()}}
C.bkp.prototype={
a_(){this.a1()
this.aep()},
aep(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aep=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCB(p.c,p.d),$async$aep)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eKl(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eKm(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aep,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AA:B.iA,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eE,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eKn(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zz],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f1,B.cS,B.fy],s):A.a([B.aZ,B.aV,B.bT],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dj,B.L,h,h)
p=C.bCz(p.gwU(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fE,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.YX,h,h,1/0)
t=g?D.bhB:B.c
q=A.m(24)
p=A.I(w?B.aN.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7z,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ea1)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pP(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aR)
n=w?B.aN:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aN:B.aV).j(0.35),B.q,1)
k=w?B.Np:B.NW
k=A.X(k,w?B.aN:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a6,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ij,h,h,h))
return A.c7(h,f,A.bm(!0,A.x(A.a([new A.D(A7.Mz,e,h),A.E(A.c8(A.x(A.a([s,B.aR,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tO,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aip,h,h,B.ag),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arZ.prototype={
T(){return new C.aEj(A.za(B.LQ,B.nJ,B.uc))}}
C.aEj.prototype={
q(){this.d.q()
this.a2()},
aLW(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iP(w,d)},
ca_(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.i88(t)
if(s!=null){this.aLW(s)
return}r=C.hgW(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aLW(B.a.i(B.a.b5(r,B.a.cK(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.X(u.f?B.re:A2.Nv,t,t,t,t,t),t,t,t,new C.eKp(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AA,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fu_,t,t,t,1,t,!0),q=A.z9(u.d,B.bV,u.gc9Z()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c7(r,B.w,new A.an(B.W,t,B.b1,B.r,A.a([q,p,A.ao(32,A.p(t,D.fsN,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jm,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJ6.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.NU.prototype={
T(){return new C.aEl(D.a9L,A.a([],x.D))},
bs(){return this.r.$0()},
ge1(){return this.c}}
C.aEl.prototype={
gcAr(){return J.bDJ(this.e,0,new C.eL7())},
a_(){this.a1()
$.aW.bT$.push(this)
this.vD()},
q(){$.aW.hL(this)
this.a2()},
j4(d){if(d===B.fw)this.vD()},
vD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CO(q.a.c).d7(0,B.k2),$async$vD)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eL3(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eL4(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vD,v)},
HN(d){return this.bIC(d)},
bIB(){return this.HN(null)},
bIC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iah(l,d),$async$HN)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lh(l,r,q,D.d7l,new A.S(Date.now(),0,!1))
w=4
return A.b(C.L4(t.a.c,p),$async$HN)
case 4:o=f
w=5
return A.b(t.vD(),$async$HN)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.J(x.q).f.U(D.eWa)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.J(q).f.U(D.eXU)
else n.J(q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ep(m)
case 1:return A.h(u,v)}})
return A.i($async$HN,v)},
Ep(d){return this.cdW(d)},
cdW(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ep=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hC(s,new C.as_(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ep)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.L4(u.a.c,t),$async$Ep)
case 5:case 4:w=6
return A.b(u.vD(),$async$Ep)
case 6:return A.h(null,v)}})
return A.i($async$Ep,v)},
vp(d){return this.bYz(d)},
bYz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bC7(),$async$vp)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hC(r,D.aGj,!0,"NgmyWorksheetProjectScan",x.N),$async$vp)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCA(q),$async$vp)
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
break}p=C.h2l(s)
w=15
return A.b(C.L4(t.a.c,p),$async$vp)
case 15:o=f
w=16
return A.b(t.vD(),$async$vp)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.J(x.q).f.U(D.eXZ)
w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ep(p)
case 1:return A.h(u,v)}})
return A.i($async$vp,v)},
NE(d){return this.bHh(d)},
bHh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cb(null,null,!0,null,new C.eKP(d),s,null,!0,!0,x.y),$async$NE)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oF(t.a.c,A.a([],x.D)),$async$NE)
case 6:w=7
return A.b(t.vD(),$async$NE)
case 7:s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eWf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NE,v)},
ce8(d){var w=this.c
w.toString
A.bS(B.K,null,new C.eKY(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4G(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jB
else w=B.c
v=A.m(16)
u=A.I(p?B.e1:B.bO,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.az,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.x(A.a([s,B.ac,t,B.bD,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vt,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_u(d,e){return this.cdX(d,e)},
cdX(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_u=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(B.K,null,new C.eKT(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_u)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hpY(r,new C.eKU(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NG(d,e),$async$a_u)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_u,v)},
b1D(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aw
else t=h.a?B.aQ:B.az
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.Bd,A.B(A.a([s,B.bd,t,A.X(B.ey,w?B.bs:B.bl,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
ckO(d,e,f,g,h,i){return this.b1D(!1,d,e,f,g,h,i)},
NG(d,e){return this.bHr(d,e)},
bHr(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l2(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NG)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAQ(t.a.c,d.a),$async$NG)
case 6:w=7
return A.b(t.vD(),$async$NG)
case 7:r=t.c
if(r==null){w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NG,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tM(o),m=o?B.c_:B.iA
if(q.f)o=D.b62
else{w=q.bBM(n)
v=q.bXE(n)
u=q.gbyT()
if(o)t=B.jB
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aR,new C.Fq(A.p(p,A.B(A.a([q.aAM(N.N6,"Projects",n,D.a9L),q.aAM(B.vF,"Cashier",n,D.aW6),q.aAM(B.FT,"Family Tree",n,D.h7g)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ek,0.95,u,p),B.by],r)
w=q.d
if(w===D.a9L){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.az,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.awH(q.gaQ8(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.ckQ(n)],r))}else{o=q.a
if(w===D.aW6)u.push(new C.ao_(o.c,n,p))
else{w=q.r
u.push(new C.ap7(o.c,o.d,o.e,o.f,new C.eLa(q),new C.eLb(q),new A.cx(w,x.b4)))}}o=A.c8(A.x(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.Mt,p,p,B.ag)}return A.c7(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bBM(d){var w=null,v=A.m(8),u=d.a,t=A.X(Q.a_e,u?B.bs:B.bl,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kV,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKM(this),w,w,w,w,w,w,w)},
gbyT(){switch(this.d.a){case 0:return D.a92
case 1:return D.fYV
case 2:return D.a93}},
bXE(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cA,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bOd,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bz5,A.aF(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bLK,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKQ(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Fq(A.p(w,A.x(A.a([new A.D(E.YI,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AH(this.gcAr()),w,w,w,w,w,w,D.fdB,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vs,B.jm,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fYU,w)},
aAM(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bl
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bl
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.ed,new A.dq(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iE,u,u,u,B.Fz,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eL6(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
ckQ(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e_:B.c
u=A.m(15)
t=A.p(p,D.bLP,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bXN,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.az,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fq(A.p(p,A.x(A.a([t,B.d7,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRK(B.j1,"Scan QR",new C.eL0(q),d),1),B.at,A.E(q.aRK(M.ys,"Upload file",new C.eL1(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fE3,q.gaQ8(),A.bn(B.aV,p,p,p,B.c,B.fP,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bvO,1.05,D.a92,p)}w=J.b6(q.e,new C.eL2(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fq(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a92,p)},
aRK(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.aZ,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.fc2,B.L,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ah8,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
ckP(d,e){var w,v,u=null,t=e.a,s=t?B.e_:B.c,r=A.m(14),q=A.I(t?B.e1:B.bO,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.m(14),n=t?B.bs:B.bl
n=A.bw(B.Vm,new A.fI(1.7777777777777777,C.aPH(!0,B.fx,1/0,N.N6,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AH(d.gwU()),u,u,u,u,u,u,D.fa9,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.x(A.a([n,new A.D(B.bA,A.B(A.a([v,A.aH(u,u,u,u,A.X(Ag.NI,t?B.bs:B.bl,u,u,u,u),u,u,u,new C.eKZ(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eL_(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e5,u,u,u,1/0)}}
C.bwV.prototype={}
C.qX.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcTH(){var w,v,u,t,s=this.c
if(s===B.k.k9(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lh.prototype={
gwU(){return B.d.cJ(this.d,0,new C.cwx())},
ah(){var w=this,v=w.d,u=A.U(v).k("M<1,a5<n,@>>")
v=A.C(new A.M(v,new C.cww(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bbN(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lh(w.a,w.b,v,u,w.e)},
bbu(d){return this.bbN(d,null)},
Sx(d){return this.bbN(null,d)}}
C.Ht.prototype={
a5(){return"FamilyGender."+this.b}}
C.hZ.prototype={
ah(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hlM(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDv(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hZ(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akm.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kC.prototype={
gaoe(){var w=this.f
return new A.a_(w,new C.bNu(),A.U(w).k("a_<1>")).gM(0)},
ah(){var w=this,v=w.f,u=A.U(v).k("M<1,a5<n,@>>")
v=A.C(new A.M(v,new C.bNt(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i0B(w.y)],x.N,x.z)},
yz(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kC(w.a,v,u,t,s,r,w.r,q,p,o)},
bbM(d,e){var w=null
return this.yz(w,w,d,e,w,w,w,w)},
cJo(d,e,f,g,h,i,j){return this.yz(d,e,f,g,h,i,j,null)},
aDA(d,e){var w=null
return this.yz(w,w,w,d,w,w,e,w)},
cHS(d){var w=null
return this.yz(w,w,w,w,w,w,d,w)},
cIf(d){var w=null
return this.yz(w,w,w,w,w,w,w,d)},
aDm(d){var w=null
return this.yz(w,w,w,w,d,w,w,w)},
cIU(d,e,f){var w=null
return this.yz(w,d,w,e,w,w,f,w)},
cHF(d){var w=null
return this.yz(w,w,d,w,w,w,w,w)},
cIs(d,e){var w=null
return this.yz(d,w,w,w,w,e,w,w)}}
C.cwy.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cwz.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGo.prototype={}
C.b83.prototype={
bB(d){this.a=d.a
this.b=d.b},
cU(d){var w=new C.b83()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b82.prototype={
gwc(){return!0},
gFW(){return this.z.b<this.b.length},
aTn(d){switch(0){case 0:return d.a.c}},
aT4(d){switch(0){case 0:return d.a.d}},
bR3(d,e){switch(0){case 0:return new A.hM(d,e)}},
bQr(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h7(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iE(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Hd(b4)
switch(0){case 0:v=b5.b
u=new A.kz(0,v,0,1/0)
t=w===B.Tm
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.h7(b4,u,!0)
f=b1.aTn(g)
f.toString
e=b1.aT4(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGo(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGo(k,j,i))}d=s.length
switch(0){case 0:q=b5.cv(new A.hM(m,l))
a0=q.a
a1=q.b
b1.a=new A.iE(0,0,a0,a1)
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
for(q=B.d.fP(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aTn(g)
e=b1.aT4(g)
e.toString
a9=b1.bQr(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bR3(a6,a3+a9)
b0=g.a
g.a=new A.iE(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h2(d){var w,v,u,t,s,r=this
r.lk(d)
w=d.b
w.ia()
v=A.dp()
u=r.a
v.e9(u.a,u.b,0,1)
w.oU(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].h2(d)
w.nh(0)},
Gr(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ia(){return this.z}}
C.bva.prototype={}
var z=a.updateTypes(["aA<~>()","R(hZ)","R(kC)","~()","R(nd)","a5<n,@>(kC)","G(kC,kC)","n(hZ)","kC(a5<@,@>)","R(lh)","R(ud)","nd(a5<@,@>)","ud()","G(lh,lh)","hZ(a5<@,@>)","a5<n,@>(hZ)","R(qX)","aA<~>(lh)","eG<n?>(hZ)","G(hZ,hZ)","n?(hZ)","a5<n,@>(nd)","ZG(Y)","n(n)","acT(Y)","r(of)","G(nd,nd)","hZ(hZ)","cL(bv<n,FD>)","cL(JU)","~(hZ)","G?(hZ)","hZ()","ai<hZ>()","R(uc)","R(JU)","D(hZ)","~(Ht)","R(aer)","r(Ht,n,a0)","Z4(Y)","bv<n,ai<a5<n,@>>>(n,ai<nd>)","~(G)","+count,id,name(G,n,n)(kC)","kC(kC)","a_0(Y)","a_1(Y)","R(ly)","ly()","n(kC)","a0M(Y)","YF(Y)","YE(Y)","Z2(Y)","Z6(Y)","r(qX)","add(Y)","~(lZ)","aA<~>([n?])","L(L,lh)","r(lh)","L(L,qX)","a5<n,@>(qX)","qX(a5<@,@>)","YD(Y)","Su(Y)","cr(Hs)","lh(a5<@,@>)","uc()","n(lh)","a5<n,@>(lh)","n(S)","G(hZ)","kC(a5<n,@>)","Yc(Y)"])
C.fAS.prototype={
$1(d){return d.a+" "+d.b},
$S:120}
C.fAR.prototype={
bkU(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qP(s,d,B.hD,"book",E.Fd),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KT(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bkU(d)},
$S:304}
C.fAT.prototype={
$1(d){return d.b},
$S:120}
C.fK4.prototype={
$1(d){var w=null
return A.eL(w,B.K,new F.Pf(this.a,this.b,w),w,w,0,B.YD,B.d1,w,w,w)},
$S:48}
C.fpE.prototype={
$1(d){return d!=null},
$S:209}
C.fpF.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:209}
C.fpK.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:172}
C.fyB.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.h8(w,B.rF,w,w,w,w,w,w,w,B.dt,w,w,10.5,w,B.el,w,!0,w,w,w,w),w),u=f?B.el:B.vA
return new A.nL(D.brq,A.a9r(A.a([new A.fR(130,w,v),new A.yS(1,B.FM,A.fc(e,w,w,w,A.h8(w,g==null?D.ecj:g,w,w,w,w,w,w,w,B.dt,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xr,B.lu))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1919}
C.fyA.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vq(999)
f=A.wX(A.lt(h,A.fc("Cashier",h,h,h,A.h8(h,D.zl,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.el,h,!0,h,h,h,h),h),h,new A.kA(D.eca,h,f,B.hI,h),h,h,D.brT,h))
w=A.wX(A.fc("Debt receipt",h,h,h,A.h8(h,h,h,h,h,h,h,h,h,B.dt,h,h,22,h,B.el,h,!0,h,h,h,h),h))
v=A.wX(A.fc(C.wI(new A.S(Date.now(),0,!1),!0),h,h,h,D.a7G,h))
u=A.vq(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.h8(h,h,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.el,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a7G,h)
q=A.vq(10)
p=x.C
u=A.lt(h,A.yL(A.a([s,new A.fR(h,2,h),r,new A.fR(h,10,h),A.lt(h,A.yL(A.a([A.fc("Amount owed",h,h,h,D.a7G,h),new A.fR(h,2,h),A.fc(A.AH(t.c),h,h,h,A.h8(h,D.zl,h,h,h,h,h,h,h,B.dt,h,h,20,h,B.el,h,!0,h,h,h,h),h)],p),B.r1,B.lu),h,new A.kA(B.p7,h,q,B.hI,h),h,h,D.br7,1/0)],p),B.r1,B.lu),h,new A.kA(E.aHz,h,u,B.hI,h),h,h,D.bsV,1/0)
q=new A.nu(D.ecd,0.9,B.kM)
r=A.vq(12)
s=i.c
o=s.$2("Original due",C.wI(t.r,!1))
n=s.$2("Current due",C.wI(t.f,!1))
m=i.d
l=new A.nu(m,1.1,B.kM)
k=A.vq(8)
j=i.a
k=A.a([o,n,new A.fR(h,6,h),A.lt(h,A.wX(A.fc(t.gaKr(),h,h,h,A.h8(h,m,h,h,h,h,h,h,h,B.dt,h,h,11,h,B.el,h,!0,0.5,h,h,h),h)),h,new A.kA(h,new A.pz(l,l,l,l),k,B.hI,h),h,h,D.bs0,1/0),new A.fR(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zl))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zl))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.h8(h,B.rF,h,h,h,h,h,h,h,B.dt,h,h,10.5,h,B.el,h,!0,h,h,h,h),h)
m=A.U(o).k("M<1,S2>")
o=A.C(new A.M(o,new C.fyz(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fR(h,4,h),n,new A.fR(h,6,h),new C.b82(5,5,new C.b83(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fR(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fR(h,8,h),w,new A.fR(h,3,h),v,new A.fR(h,16,h),u,new A.fR(h,10,h),A.lt(h,A.yL(k,B.xr,B.lu),h,new A.kA(h,new A.pz(q,q,q,q),r,B.hI,h),h,h,B.ahk,1/0)],p)
w=j.a
if(w!=null){v=new A.nu(B.Ie,1,B.kM)
B.d.v(f,A.a([new A.fR(h,16,h),A.fc("Debtor signature",h,h,h,A.h8(h,B.rF,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.el,h,!0,h,h,h,h),h),new A.fR(h,6,h),A.lt(h,new A.HJ(w,B.Vx,h,h),h,new A.kA(h,new A.pz(v,v,v,v),A.vq(6),B.hI,h),82,h,B.Mx,1/0)],p))}f.push(new A.fR(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.f32,h))
f.push(new A.fR(h,18,h))
f.push(A.wX(A.fc("NGMY.ORG",h,h,h,A.h8(h,D.zl,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.el,h,!0,1.8,h,h,h),h)))
return f},
$S:392}
C.fyz.prototype={
$1(d){var w=null,v=new A.nu(D.If,0.7,B.kM),u=A.vq(999)
return A.lt(w,A.fc(C.wI(d,!1),w,w,w,A.h8(w,D.If,w,w,w,w,w,w,w,B.dt,w,w,9.5,w,B.el,w,!0,w,w,w,w),w),w,new A.kA(w,new A.pz(v,v,v,v),u,B.hI,w),w,w,D.bxa,w)},
$S:1920}
C.c1F.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.m(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wI(d,!1),w,w,w,w,w,w,D.f9E,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eD,w,w,w)},
$S:1921}
C.fKA.prototype={
$1(d){var w=null,v=A.aI(d,B.bW,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bP6,w,w,w,new C.fKx(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eL(w,B.K,new A.cT(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.Yt,A.x(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.co,A.c8(A.x(A.a([new A.ex(new C.aY6(r,w),s),B.R,A.B(A.a([A.E(A.eD(B.yD,D.fAo,new C.fKy(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fa,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a0L,D.fwW,new C.fKz(r,d),A.bn(B.aZ,w,w,w,B.c,w,B.fa,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.N,0,B.p),B.r,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.N,0,B.p),w),B.f,B.az,0,w,w,w,w,w,B.ah),w),w,w,0,Aj.YQ,B.d1,w,w,w)},
$S:48}
C.fKx.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fKy.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m1(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.h_),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dD.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rV(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fFb(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.J(x.q).f
s.U(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKs.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eL(w,B.az,A.x(A.a([new A.D(D.bsJ,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nB,w,w,w),1),A.aH(w,w,w,w,B.ls,w,w,w,new C.fKq(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.co,new A.D(B.fX,A.bw(A.m(14),A.fO(t,B.A,w,w,B.ci,B.dv,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Mb,new A.a7(1/0,w,A.dn(B.oY,D.aRp,new C.fKr(t,this.c,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.N,0,B.p),w,w,w,B.Mn,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fKq.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fKr.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rV(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKE.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eL(w,B.az,new A.D(D.bsR,A.x(A.a([A.B(A.a([D.byc,A.aH(w,w,w,w,B.ls,w,w,w,new C.fKC(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ex(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.bac(s.ax,w),B.av),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.oY,D.aRp,new C.fKD(t,s,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fKC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fKD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m1(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.h_),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eU(B.dD.gaP(s))
w=5
return A.b(A.rV(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ftx.prototype={
$1(d){return d.a===this.a},
$S:269}
C.dG_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dFL.prototype={
bk8(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e_:B.c
s=u.a
w=2
return A.b(A.bS(t,null,new C.dFO(s,q,e),p,!0,!0,!1,B.Iv,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dFP(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bk8(d,e)},
$S:1922}
C.dFO.prototype={
$1(d){var w,v=null,u=this.c===B.w9,t=u?D.ddD:D.d9E
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.az,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.ahU,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.il(!0,v,v,B.y,L.aOu,new C.dFN(this.a,w,t,d),t.length,v,B.dS,B.ag,!0)],x.p),B.ai,v,B.e,B.N,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dFN.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cS.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.m(14)
if(q)u=B.cS
else u=(t.b.a.d.a?B.bs:B.bl).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aY5(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dFM(t.d,r),s,s,s,s,s,s,s)},
$S:200}
C.dFM.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dFP.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dFJ.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:95}
C.dFK.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cu,e,v)
return new A.cZ(e,!1,A.ir(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e1(new C.dFI(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:31}
C.dFI.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e_:B.c,f=A.m(14),e=A.I((h?B.bs:B.bl).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.ek,A.X(B.cD,i.a.d.a?B.bs:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFt(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aSg("Name")
r=l.a
q=r.d==null?k:new C.dFu(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bn:B.lL
n=A.I(B.cS.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bbF(new A.D(B.fC,A.aL(!1,p,!0,A.p(B.A,C.aY5(m==null?"\ud83d\udc64":A.fzp(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kG,k,B.a7q,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aSV("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dFv(r,a0),r.d===B.w9),1),B.ab,A.E(i.aSV("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dFA(r,a0),r.d===B.a4p),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bI(B.a3,k,k,A.hk(D.bNt,D.fyK,new C.dFB(r,l.e,a0),A.fy(k,k,k,k,k,k,k,k,k,k,k,B.cS,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ug(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aSh("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bs:B.bl).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wI(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bD,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bKk],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFC(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aSg("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b_Z(r.b.length!==0,B.mv,new C.dFD(r,i,a0),new C.dFE(r,a0),"Upload from gallery","ID photo"))
v.push(i.b_Z(r.c.length!==0,D.bDB,new C.dFF(r,i,d,a0),new C.dFG(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ah.a7h("Signature (optional)",t,new C.dFH(a0),new C.dFw(a0,t),new C.dFx(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bl
s=(i?B.bs:B.bl).j(0.28)
s=A.E(A.dU(E.aRi,new C.dFy(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.tI,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bn(B.cS,k,k,k,B.c,k,B.tI,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uL,k,k,k),new C.dFz(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.c8(A.x(v,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vw,B.jm,k,k,360)},
$S:161}
C.dFt.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFu.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFv.prototype={
$0(){return this.b.$1(new C.dFs(this.a))},
$S:0}
C.dFs.prototype={
$0(){var w=this.a
w.d=B.w9
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFA.prototype={
$0(){return this.b.$1(new C.dFr(this.a))},
$S:0}
C.dFr.prototype={
$0(){var w=this.a
w.d=B.a4p
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFB.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wM(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dFq(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFq.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcg(),w.gcd(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dFD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pc(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dFp(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFp.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dFE.prototype={
$0(){return this.b.$1(new C.dFo(this.a))},
$S:0}
C.dFo.prototype={
$0(){return this.a.b=""},
$S:0}
C.dFF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e_:B.c
w=3
return A.b(A.bS(q,null,new C.dFm(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pc(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dFn(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFm.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.an0,w,w,w,w,new C.dFg(d),!1,w,w,w,w,w,w,w,D.fpd,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amZ,w,w,w,w,new C.dFh(d),!1,w,w,w,w,w,w,w,D.fvY,w,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dFg.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dFh.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dFn.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dFG.prototype={
$0(){return this.b.$1(new C.dFl(this.a))},
$S:0}
C.dFl.prototype={
$0(){return this.a.c=""},
$S:0}
C.dFH.prototype={
$0(){return this.a.$1(new C.dFk())},
$S:0}
C.dFk.prototype={
$0(){},
$S:0}
C.dFw.prototype={
$0(){return this.a.$1(new C.dFj(this.b))},
$S:0}
C.dFj.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dFx.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahn(u.a,null,null,new C.dFi(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFi.prototype={
$4(d,e,f,g){this.a.$1(new C.dFf(this.b,d))},
$S:451}
C.dFf.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dFy.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFz.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.J(x.q).f.U(D.eZQ)
return}if(w.a.d==null){w.c.J(x.q).f.U(D.eWM)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dG2.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:95}
C.dG3.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e_:B.c,n=A.m(14),m=A.I((p?B.bs:B.bl).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.az,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AH(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z_(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z_(r).length>0?B.bz:B.cS,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bl
t=(q?B.bs:B.bl).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aB,A.B(A.a([A.E(A.dU(B.nC,new C.dG0(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jG,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fwm,new C.dG1(d),A.bn(B.cS,r,r,r,B.c,r,B.jG,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bg,E.YI,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:31}
C.dG0.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dG1.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dFX.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dFY(r),p=r.a.d.a,o=p?B.e_:B.c,n=A.m(14),m=A.I((p?B.bs:B.bl).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.az,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AH(l.c),s,s,s,s,s,s,D.fb9,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iA((r.a.d.a?B.bs:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_z,"View receipt",new C.dFQ(r,d,l))
u=l.x!=null
t=u?B.rj:B.q0
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bsO,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dFR(r,d,l)),q.$3$icon$label$onTap(B.Bx,"Edit",new C.dFS(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mv,"View / download ID",new C.dFT(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bDA,"View / download selfie",new C.dFU(r,d,l)))
if(l.gaFc())p.push(q.$3$icon$label$onTap(A6.a0C,"View / download signature",new C.dFV(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e6,"Delete",new C.dFW(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.vs,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dFY.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.az
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1923}
C.dFQ.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fKw(w,this.c)},
$S:0}
C.dFR.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.RT(this.c)},
$S:0}
C.dFS.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.D2(this.c)},
$S:0}
C.dFT.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCX(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dFU.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCX(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dFV.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fKB(w,this.c)},
$S:0}
C.dFW.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.NR(0,this.c)},
$S:0}
C.dG4.prototype={
$1(d){return d.x==null},
$S:269}
C.dG5.prototype={
$1(d){return d.x!=null},
$S:269}
C.dG6.prototype={
$2(d,e){return d+e.c},
$S:1924}
C.dG7.prototype={
$0(){return this.a.bzn()},
$S:0}
C.dFZ.prototype={
$0(){return this.a.aeC(this.b)},
$S:0}
C.fu8.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fu9.prototype={
$0(){return B.d.gI(D.a1O)},
$S:z+68}
C.d5O.prototype={
$0(){var w=this.a
return w.m(new C.d5M(w,this.b))},
$S:0}
C.d5M.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d5N.prototype={
$0(){},
$S:0}
C.d5P.prototype={
$0(){var w=this.a.gbYn()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fwc.prototype={
$1(d){return C.h6v(A.a2(d,x.N,x.z))},
$S:z+11}
C.fwd.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fwe.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fJa.prototype={
$1(d){return d.ah()},
$S:z+21}
C.fRk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fto.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bNp.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f2(e,v)?v:null},
$S:1925}
C.fJJ.prototype={
$1(d){var w=this
return new C.Z4(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d6t.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d6s(w,d))},
$S:z+66}
C.d6s.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6h.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d6e.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d5Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d5R.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d6i.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d5Z.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e_:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.el(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.d5X(d),w,w),A.bG(B.ww,new C.d5Y(d),A.bn(B.mZ,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d5X.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d5Y.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6_.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d6f.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d6g.prototype={
$0(){return B.d.gI(D.yO)},
$S:z+12}
C.d5V.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyh(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Su(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d5W.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d60.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YD(v,u,J.ad(w.d),null)},
$S:z+64}
C.d61.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6r.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aC(s,new C.Yl(r.y,r.gyh(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d6p(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9B(v,e,w,u,t,r.gbPw(),C.hlL(r.y.Q),r.gyh(0),s)
w=t}return A.c6(q,new C.d6q(r,e),new A.D(B.YJ,w,s))},
$S:1926}
C.d6q.prototype={
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
u.fD(v*3.141592653589793*0.5)
return A.fv(B.a3,A.de(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.d6p.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGk(B.pN,B.iF)},
$S:0}
C.d6b.prototype={
$0(){var w=this.a
return w.m(new C.d6a(w))},
$S:0}
C.d6a.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6c.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d5S.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jX.j(0.5),r=x.p,q=A.a([D.fnP,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.YD(d,B.dX,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YD(d,L.akS,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ko.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ko.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YD(d,A_.am0,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YD(d,B.q6,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YD(d,B.q6,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eL(u,E.AK,A.bm(!0,new A.D(A5.xK,A.x(q,B.F,u,B.e,B.N,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aii,B.d1,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:48}
C.d6d.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d64.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.Z6(v,J.cI(w.d),w.r+1,null)},
$S:z+54}
C.d65.prototype={
$1(d){var w=null
return A.ol(!1,A.el(w,w,w,E.AK,new A.jJ(this.a,new C.d63(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:324}
C.d63.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a76,B.oj,A.E(A.d(e,w,w,w,w,w,w,B.iP,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d66.prototype={
$0(){return this.a.a=!1},
$S:52}
C.d67.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.d68.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d69.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AR(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Ri(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d62(s,t))
w=4
return A.b(s.kX(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d62.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6k.prototype={
$1(d){var w=null
return A.ol(!1,A.el(w,w,w,E.AK,new A.jJ(this.a,new C.d6j(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:324}
C.d6j.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a76,B.oj,A.E(A.d(e,w,w,w,w,w,w,B.iP,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d6l.prototype={
$0(){return this.a.a=!1},
$S:52}
C.d6m.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.d6n.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.d6o.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AR(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kX(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5T.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bhb(B.pN,U.LZ)},
$S:0}
C.d5U.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGk(B.pN,U.LZ)},
$S:0}
C.d8d.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8e.prototype={
$1(d){var w=this.a
return w.m(new C.d8c(w))},
$S:8}
C.d8c.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d8f.prototype={
$1(d){var w=this.a
return w.m(new C.d8b(w))},
$S:8}
C.d8b.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d8g.prototype={
$1(d){var w=this.a
return w.m(new C.d8a(w))},
$S:8}
C.d8a.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d8h.prototype={
$0(){var w=this.a
return w.m(new C.d89(w,this.b))},
$S:0}
C.d89.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.d8i.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1j()
A.a6(this.b,!1).O(new A.bod(w,v))},
$S:0}
C.d6I.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6H.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Z2(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d6M.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d6L.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7k(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hG,v,v,v)
return A.el(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.d6J(d),v,v),A.bG(B.ww,new C.d6K(d),A.bn(B.mZ,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AK,w,v,v,v,v,D.fmG,v)},
$S:20}
C.d6J.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d6K.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6N.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d6O.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.c8(A.bW(B.bB,r,B.br,18,14),B.r,t,B.y,t,D.btJ,t,t,B.ag)},
$S:312}
C.d6G.prototype={
$0(){return this.a.PT(0,this.b)},
$S:0}
C.d6F.prototype={
$0(){return this.a.Pn(0,this.b)},
$S:0}
C.cFi.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cFj.prototype={
$0(){return B.d.gI(D.yO)},
$S:z+12}
C.cFk.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.D(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1928}
C.cYK.prototype={
$1(d){return this.a.m(new C.cYJ(this.b,this.c))},
$S:8}
C.cYJ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cZ8.prototype={
$1(d){return this.a.m(new C.cYW())},
$S:2}
C.cYW.prototype={
$0(){},
$S:0}
C.cZ9.prototype={
$1(d){return this.a.m(new C.cYV())},
$S:2}
C.cYV.prototype={
$0(){},
$S:0}
C.cZa.prototype={
$0(){var w=this.a
return w.m(new C.cYU(w,this.b))},
$S:0}
C.cYU.prototype={
$0(){var w=this.a
return w.d=w.go4().FA(this.b.a)},
$S:0}
C.cZb.prototype={
$0(){var w=this.a
return w.m(new C.cYT(w,this.b))},
$S:0}
C.cYT.prototype={
$0(){var w=this.a
return w.d=w.go4().cHb(this.b)},
$S:0}
C.cZc.prototype={
$1(d){return this.a.m(new C.cYS())},
$S:2}
C.cYS.prototype={
$0(){},
$S:0}
C.cZd.prototype={
$0(){var w=this.a
return w.m(new C.cYR(w,this.b))},
$S:0}
C.cYR.prototype={
$0(){var w=this.a
return w.d=w.go4().cHg(this.b.a)},
$S:0}
C.cZe.prototype={
$1(d){var w=this.a
return w.m(new C.cZ3(w,d))},
$S:6}
C.cZ3.prototype={
$0(){var w=this.a
return w.d=w.go4().cIa(this.b)},
$S:0}
C.cZf.prototype={
$1(d){var w=this.a
return w.d=w.go4().aDp(d)},
$S:2}
C.cZg.prototype={
$1(d){var w=this.a
return w.d=w.go4().cHj(d)},
$S:2}
C.cZi.prototype={
$1(d){var w=this.a
return w.d=w.go4().cI8(d)},
$S:2}
C.cZj.prototype={
$1(d){var w=this.a
return w.m(new C.cZ2(w,d))},
$S:8}
C.cZ2.prototype={
$0(){var w=this.a
return w.d=w.go4().cI_(this.b)},
$S:0}
C.cZk.prototype={
$0(){var w=this.a,v=w.go4(),u=B.a.i(w.gyh(0).a.a),t=B.a.i(w.gaAA().a.a)
u=v.bbW(B.a.i(w.gaql().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dTZ.prototype={
$0(){var w=this.a
w.vP()
w.a.bs()
w.a.pR()},
$S:0}
C.dTY.prototype={
$0(){var w=this.a
w.vP()
w.a.bs()
w.a.pR()},
$S:0}
C.dU0.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dU1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dU2.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dU_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dU4.prototype={
$0(){this.a.Om()
return null},
$S:0}
C.dU3.prototype={
$0(){return this.a.Eq(this.b)},
$S:0}
C.dTp.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.df,w,w,!0,w,w,new C.dTn(d),w,w),r=A.bn(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.el(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dTo(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dTn.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTo.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dTq.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cHF(this.b)},
$S:0}
C.dTk.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSw(w.b,w.c,w.d)},
$S:9}
C.dST.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dSU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dT7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gp(t.a.c),$async$$0)
case 2:s=r.re(q.dH(e,new C.dT5(t)))
if(s!=null&&t.c!=null)t.m(new C.dT6(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dT5.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dT6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dT8.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dT9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTj.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cIs(C.hlV(w),w)},
$S:0}
C.dTh.prototype={
$1(d){return new A.e1(new C.dTg(this.a,this.b),null)},
$S:21}
C.dTg.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e_:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.amE,v,v,v,p>0?new C.dTc(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.x(A.a([r,B.aR,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.anc,v,v,v,new C.dTd(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.N,0,B.p)
return A.el(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dTe(d),v,v),A.bG(B.pl,new C.dTf(d),A.bn(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:165}
C.dTc.prototype={
$0(){return this.b.$1(new C.dTb(this.a))},
$S:0}
C.dTb.prototype={
$0(){return--this.a.a},
$S:0}
C.dTd.prototype={
$0(){return this.b.$1(new C.dTa(this.a))},
$S:0}
C.dTa.prototype={
$0(){return++this.a.a},
$S:0}
C.dTe.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTf.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dTi.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cIf(this.a.a)
w.r.a8(0)},
$S:0}
C.dSH.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahv(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hfA(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dSI.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDm(w)},
$S:0}
C.dTs.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acT(this.b,w,this.c,null)},
$S:z+24}
C.dTm.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e_:B.c,t=A.m(20),s=A.X(B.lo,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.N,0,B.p)
return A.el(A.a([A.bG(D.fxx,new C.dTl(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:20}
C.dTl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dSJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dSK.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dSL.prototype={
$1(d){return d.a},
$S:z+7}
C.dSM.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hZ(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDm(w)},
$S:0}
C.dSQ.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahv(q)
w=A.U(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dSO(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hfA(v.e,null,r,v.f,v.r,new C.dSP(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dSP.prototype={
$0(){return this.a.a9H(this.b)},
$S:0}
C.dSO.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dSR.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("M<1,hZ>")
w=A.C(new A.M(w,new C.dSN(this.b),v),v.k("ak.E"))
u.d=t.aDm(w)},
$S:0}
C.dSN.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dTr.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dT2.prototype={
$1(d){return d.length!==0},
$S:3}
C.dT3.prototype={
$1(d){var w=this
return new A.e1(new C.dT1(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dT1.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e_:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dSY(u,e,o),A.U(o).k("M<1,r>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(12),B.dh),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.m6,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ai,v,B.e,B.N,0,B.p)
t=w.a
return A.el(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dSZ(d),v,v),A.bG(B.Jl,new C.dT_(t,u,o,e),A.bn(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fkN,new C.dT0(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:165}
C.dSY.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bR3,w,w,w,new C.dSX(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1929}
C.dSX.prototype={
$0(){return this.a.$1(new C.dSV(this.b,this.c))},
$S:0}
C.dSV.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSZ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dT_.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dSW(w.c,u))
v.bP(0,B.c8)}},
$S:0}
C.dSW.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dT0.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dT4.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cIU(this.b,D.tP,C.Gn(v,w.a.c))},
$S:0}
C.dTz.prototype={
$1(d){return d.as},
$S:z+1}
C.dTA.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iP(this.b,w)},
$S:0}
C.dTB.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i9Z(v)
return w.Vz(v==null?null:v.a)},
$S:0}
C.dTC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hNi(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gck(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cqI(new A.ar(u,t),v.gbi2(),new A.ar(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cPP:D.cOb
q=A.I(s?B.dm:D.bbF,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcZ(s,m),B.av),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.up(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdS(l.d,v,l.f,w,new C.dTv(l),l.gcaE(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvh(s,new C.dTw(l,e),new C.dTx(l,e),new C.dTy(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b4,B.x,r,m,m),B.n),m,m,m,A0.aho,m,m,m,m)},
$S:204}
C.dTv.prototype={
$1(d){var w=this.a
w.m(new C.dTt(w,d))},
$S:2}
C.dTt.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dTw.prototype={
$0(){var w=this.b
return this.a.b9B(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dTx.prototype={
$0(){var w=this.b
return this.a.b9B(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dTy.prototype={
$0(){var w=this,v=w.b
return w.a.aSw(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbi2())},
$S:0}
C.dTD.prototype={
$0(){var w=this.a
return w.m(new C.dTu(w))},
$S:0}
C.dTu.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dSS.prototype={
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
C.d6S.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhA(u,C.hq1(v.c,u),new C.d6R(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d6R.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d6T.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkW(d.d,d.c,u.f.t(0,d.a),new C.d6Q(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d6Q.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fuc.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.re(new A.cO(new A.a_(v,new C.fud(d),w.k("a_<1>")),new C.fue(),w.k("cO<1,n>")))},
$S:z+20}
C.fud.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fue.prototype={
$1(d){return d.a},
$S:z+7}
C.fua.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fub.prototype={
$1(d){return d.b},
$S:z+7}
C.fuh.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.re(new A.cO(new A.a_(v,new C.fui(d),w.k("a_<1>")),new C.fuj(),w.k("cO<1,n>")))},
$S:z+20}
C.fui.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fuj.prototype={
$1(d){return d.a},
$S:z+7}
C.fuf.prototype={
$1(d){var w,v=A.ev([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fug.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d6V.prototype={
$0(){return this.a},
$S:z+32}
C.d7b.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:236}
C.d73.prototype={
$2(d,e){var w=this.a.c8(0,d,new C.d74()),v=J.a4(w)
if(!v.t(w,e))v.L(w,e)},
$S:113}
C.d74.prototype={
$0(){return A.a([],x.s)},
$S:742}
C.d72.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f2(w,e)
return w===!0},
$S:284}
C.d6W.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d71.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d70.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Ch:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Ch:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1931}
C.d6X.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d75.prototype={
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
t=J.aV(t==null?D.Ch:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b6(w,new C.d76(r)))w.push(r)}}B.d.bq(w,new C.d77(a8))
B.d.aY(w,new C.d78())
q=C.hNh(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eAP],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bnY(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1932}
C.d76.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d77.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d78.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d79.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cJ(0,0,B.ps)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:652}
C.d7a.prototype={
$1(d){return 16+d*156},
$S:252}
C.d6U.prototype={
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
t.n(0,d,new C.FD(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FD(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FD(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JU(d,new A.v(e+t,w),s,s.length))}},
$S:194}
C.d6Y.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIp(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:113}
C.d6Z.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d7_.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:743}
C.d7c.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:743}
C.d7d.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:469}
C.d7e.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d7f.prototype={
$1(d){return d>=0.5},
$S:122}
C.fbA.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hv(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1934}
C.eNu.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.D(B.ne,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f6R,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Mw,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eNt(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eNt.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dn5.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dn4.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nz,B.L,w,w)
return A.el(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.dn2(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mi,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dn3(d),w,w)],x.p),B.b9,B.B5,w,u,D.buZ,w,D.bwW,new A.b7(v,B.Y),w,w)},
$S:20}
C.dn2.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dn3.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dne.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dnf.prototype={
$1(d){var w=this.a
return w.m(new C.dnd(w,d))},
$S:z+37}
C.dnd.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dng.prototype={
$1(d){var w=null
return A.ql(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnj.prototype={
$1(d){var w=this.a
return w.m(new C.dnc(w,d))},
$S:32}
C.dnc.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dni.prototype={
$1(d){var w=null
return A.ql(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnk.prototype={
$1(d){var w=this.a
return w.m(new C.dnb(w,d))},
$S:32}
C.dnb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnl.prototype={
$0(){var w=this.a
return w.m(new C.dna(w))},
$S:0}
C.dna.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dnm.prototype={
$0(){var w=this.a
return w.m(new C.dn9(w))},
$S:0}
C.dn9.prototype={
$0(){return++this.a.at},
$S:0}
C.dnn.prototype={
$0(){var w=this.a
return w.m(new C.dn8(w))},
$S:0}
C.dn8.prototype={
$0(){return--this.a.ax},
$S:0}
C.dno.prototype={
$0(){var w=this.a
return w.m(new C.dn7(w))},
$S:0}
C.dn7.prototype={
$0(){return++this.a.ax},
$S:0}
C.dnp.prototype={
$1(d){var w=this.a
return w.m(new C.dn6(w,d))},
$S:8}
C.dn6.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dnh.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dnq.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.e_:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.e1:B.bO).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bs:B.bl
t=A.X(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bs:B.bl
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,B.jG,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dnr(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+39}
C.dnr.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dnA.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c8c.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.c8j.prototype={
$1(d){return d.ah()},
$S:z+5}
C.c8k.prototype={
$2(d,e){var w=J.b6(e,new C.c8i(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c8i.prototype={
$1(d){return d.ah()},
$S:z+21}
C.c8e.prototype={
$1(d){return C.akn(A.a2(d,x.N,x.z))},
$S:z+8}
C.c8f.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c8g.prototype={
$1(d){return C.h6v(A.a2(d,x.N,x.z))},
$S:z+11}
C.c8h.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c8o.prototype={
$1(d){return new A.aFu(d.f.length,d.a,d.b)},
$S:z+43}
C.c8p.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:563}
C.c8l.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c8m.prototype={
$1(d){return d.cHS(C.Gn(d,this.a))},
$S:z+44}
C.dTM.prototype={
$1(d){return C.tX(d,this.a.a.c)},
$S:z+2}
C.dTN.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dTR.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dTS.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dTJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZz(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yi("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p5(r.c,r.e),$async$$0)
case 4:s.yi(p)
w=5
return A.b(s.Jq(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZz(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yi("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p5(r.c,r.e),$async$$0)
case 4:s.yi(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UR(n.d,m,n.e,r.b),$async$$0)
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
return A.b(o.Jq(),$async$$0)
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
C.dTQ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZy(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yi("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cl(A.e8(new C.dTP(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p5(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTP.prototype={
$1(d){var w=this.b
return new C.a_0(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dTO.prototype={
$1(d){return D.h21},
$S:z+46}
C.dTU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTV.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dTT(w,d)
return new A.D(B.d8,new C.bdW(this.b,d.c,d.a,w,null),null)},
$S:1935}
C.dTT.prototype={
$0(){return this.a.Xh(this.b.b)},
$S:0}
C.dTE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTF.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dTG.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dTH.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dTI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTW.prototype={
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
$S:184}
C.dF7.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dF8.prototype={
$0(){return B.d.gI(D.a3h)},
$S:z+48}
C.dF9.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cW1,44),w,w,w),w,w,new C.biI(u,t,v,w),B.av)},
$S:71}
C.fKb.prototype={
$1(d){return A.oQ(new C.fKa(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:144}
C.fKa.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e_:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rE,24)],x.V),o=r?B.e1:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bLz,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.az,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.ain,A.B(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.il(!0,t,e,B.y,D.eUZ,new C.fK9(this.b,s),20,B.ahY,t,B.ag,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kL,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fK9.prototype={
$2(d,e){var w=null,v=D.a3h[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.e1:B.bO,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.m(15),o=A.E(new C.a5W(v.a,!0,w),1),n=s?B.jB:B.iW,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.az,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eH(A.bw(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.kY,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fK8(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:75}
C.fK8.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfT.prototype={
$0(){return this.a.afF(this.b)},
$S:0}
C.fJy.prototype={
$1(d){return D.fZi},
$S:z+74}
C.fR1.prototype={
$1(d){var w=this
return new C.a0M(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fJD.prototype={
$1(d){return new C.YF(this.a,null)},
$S:z+51}
C.fJC.prototype={
$1(d){return D.h_h},
$S:z+52}
C.cZw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cZv(w,d))},
$S:32}
C.cZv.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cZy.prototype={
$1(d){return this.a.K_()},
$S:2}
C.cZz.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZs.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZt.prototype={
$1(d){return this.a.K_()},
$S:2}
C.cZu.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cx5.prototype={
$0(){},
$S:0}
C.cxb.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cxc.prototype={
$0(){return this.a.aNV(-1)},
$S:0}
C.cxd.prototype={
$1(d){return this.a.m(new C.cxa())},
$S:2}
C.cxa.prototype={
$0(){},
$S:0}
C.cxe.prototype={
$0(){return this.a.aNV(1)},
$S:0}
C.cxf.prototype={
$1(d){return this.a.m(new C.cx9())},
$S:2}
C.cx9.prototype={
$0(){},
$S:0}
C.cxg.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e1:B.bO
return A.uf(u,u,B.aZ,r,u,new C.cx8(t,d),B.Bh,s,w,u,new A.ay(v,1,B.q,-1),B.ce)},
$S:1936}
C.cx8.prototype={
$1(d){var w=this.a
return w.m(new C.cx6(w,this.b))},
$S:8}
C.cx6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cxh.prototype={
$1(d){return this.a.m(new C.cx7())},
$S:2}
C.cx7.prototype={
$0(){},
$S:0}
C.cxi.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fb2.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fb3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fb4.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fb0.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyw()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bwV,new A.ex(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bv6(p,v,this.b.a,u,t,r),r,r,B.av)},
$S:71}
C.fb1.prototype={
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
s=A.aq(B.aV,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eH(D.eac,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.dc(-1.2+t,-0.5),new A.dc(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:129}
C.fIc.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:70}
C.eKE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eKv.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eKw.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eKC.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e1(new C.eKB(w,this.b),null)},
$S:21}
C.eKB.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e_:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eL(w,u,new A.D(B.aig,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hcn(new C.eKy(r,e),r.a),B.aB,A.B(A.a([A.E(A.dU(B.df,new C.eKz(d),w),1),B.at,A.E(A.bG(B.U1,new C.eKA(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(t,B.Y),w)},
$S:99}
C.eKy.prototype={
$1(d){return this.b.$1(new C.eKx(this.a,d))},
$S:32}
C.eKx.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eKz.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eKA.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eKD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sx(this.b)},
$S:0}
C.eKq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbu(w)},
$S:0}
C.eKu.prototype={
$1(d){return this.bkB(d)},
bkB(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L4(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iP(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eKt.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eKs(this.b),v),v.k("J.E"))
u.d=t.bbu(w)},
$S:0}
C.eKs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eKF.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iP(this.b,w)},
$S:0}
C.eKG.prototype={
$1(d){return this.a.bCB(d,this.b)},
$S:z+55}
C.eKr.prototype={
$0(){return this.a.a9G(this.b)},
$S:0}
C.fQS.prototype={
$1(d){return new C.add(this.a,this.b,this.c,null)},
$S:z+56}
C.eKI.prototype={
$0(){return this.a.ZZ(this.b)},
$S:0}
C.eKJ.prototype={
$0(){return this.a.PP(this.b)},
$S:0}
C.eKK.prototype={
$0(){return this.a.El(this.b)},
$S:0}
C.eKL.prototype={
$0(){return this.a.a__(this.b)},
$S:0}
C.eKH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eKl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eKm.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eKn.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eKp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eKo(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKo.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eL7.prototype={
$2(d,e){return d+e.gwU()},
$S:z+59}
C.eL3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eL4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eKP.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e_:B.c,s=A.m(24),r=A.p(v,D.bLZ,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.I(B.aw.j(0.28),B.q,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.az
u=u?B.e1:B.bO
w=x.p
return A.eL(v,t,new A.D(B.xO,A.x(A.a([r,B.aR,q,B.O,p,B.d7,A.B(A.a([A.E(A.dU(B.nC,new C.eKN(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fa,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fBi,new C.eKO(d),A.bn(B.aw,v,v,v,v,v,B.fa,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.N,0,B.p),v),v,v,v,v,B.d1,v,new A.b7(s,B.Y),v)},
$S:48}
C.eKN.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eKO.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eKY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e_:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fO,28)],x.V),g=k?D.d1G:B.a2C,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eOY,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cx,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aik,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4G(B.b6,B.j1,new C.eKV(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b4G(B.cz,M.ys,new C.eKW(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aw.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aw.j(0.28),B.q,1)
o=A.p(m,D.bLn,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.az,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vu,A.p(m,A.x(A.a([g,new A.D(B.aih,A.x(A.a([w,B.R,u,B.by,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.ey,k?B.bs:B.bl,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bA,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eKX(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eKV.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vp("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKW.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vp("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKX.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.NE(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKT.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e_:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e1:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bs:B.bl
u=A.bw(w,new A.a7(48,48,C.aPH(!0,A.m(12),48,N.N6,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.az,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AH(v.gwU())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vu,A.p(q,A.x(A.a([B.R,k,new A.D(D.aie,A.B(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AX,r.ckO(B.u7,B.aV,new C.eKR(d),p,"QR code or backup file","Transfer project"),r.b1D(!0,B.e6,B.aw,new C.eKS(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eKR.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eKS.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eKU.prototype={
$1(d){return this.bkC(d)},
bkC(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.L4(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vD(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eLa.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eL9(w))},
$S:0}
C.eL9.prototype={
$0(){return this.a.r++},
$S:0}
C.eLb.prototype={
$0(){var w=this.a
return w.m(new C.eL8(w))},
$S:0}
C.eL8.prototype={
$0(){return this.a.r++},
$S:0}
C.eKM.prototype={
$0(){var w=this.a.c
w.toString
return A.iP(w,null)},
$S:0}
C.eKQ.prototype={
$0(){return this.a.ce8(this.b)},
$S:0}
C.eL6.prototype={
$0(){var w=this.a
return w.m(new C.eL5(w,this.b))},
$S:0}
C.eL5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eL0.prototype={
$0(){return this.a.vp("scan")},
$S:0}
C.eL1.prototype={
$0(){return this.a.vp("file")},
$S:0}
C.eL2.prototype={
$1(d){return this.a.ckP(d,this.b)},
$S:z+60}
C.eL_.prototype={
$0(){return this.a.Ep(this.b)},
$S:0}
C.eKZ.prototype={
$0(){return this.a.a_u(this.b,this.c)},
$S:0}
C.cwx.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cww.prototype={
$1(d){return d.ah()},
$S:z+62}
C.cwu.prototype={
$1(d){return C.hvR(A.a2(d,x.N,x.z))},
$S:z+63}
C.cwv.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.ftg.prototype={
$1(d){return d.y===D.kv},
$S:z+2}
C.fRs.prototype={
$1(d){return C.bAT(d,this.a)},
$S:z+2}
C.frr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bNu.prototype={
$1(d){return!d.as},
$S:z+1}
C.bNt.prototype={
$1(d){return d.ah()},
$S:z+15}
C.bNq.prototype={
$1(d){return C.h6w(A.a2(d,x.N,x.z))},
$S:z+14}
C.bNr.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bNs.prototype={
$1(d){return J.k(d)},
$S:17}
C.fiB.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.feh.prototype={
$1(d){return C.fXR(A.a2(d,x.N,x.z))},
$S:z+67}
C.fei.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fej.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fJp.prototype={
$1(d){return J.k(d)},
$S:17}
C.fJq.prototype={
$1(d){return d.a},
$S:z+69}
C.fJr.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJs.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fJt.prototype={
$1(d){return d.Sx(null).ah()},
$S:z+70}
C.fRq.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.ftI.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fwi.prototype={
$1(d){return C.akn(A.a2(d,x.N,x.z))},
$S:z+8}
C.fwj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwk.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fwl.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fwm.prototype={
$1(d){return C.tX(d,this.a)},
$S:z+2}
C.fJc.prototype={
$1(d){return C.tX(d,this.a)},
$S:z+2}
C.fRl.prototype={
$1(d){return C.akn(A.a2(d,x.N,x.z))},
$S:z+8}
C.fRm.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fRn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ftp.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.ftq.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fRx.prototype={
$1(d){return!d.as},
$S:z+1}
C.fsW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fsX.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fsY.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fR2.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fx4.prototype={
$1(d){return d.Q},
$S:z+72}
C.fJ5.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fwf.prototype={
$1(d){return C.akn(A.a2(d,x.N,x.z))},
$S:z+8}
C.fwg.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwh.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fJ0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.feP.prototype={
$1(d){return d.length!==0},
$S:3}
C.feQ.prototype={
$1(d){return C.h6w(A.a2(d,x.N,x.z))},
$S:z+14}
C.feR.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.feS.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.feT.prototype={
$1(d){return d.length!==0},
$S:3}
C.ff5.prototype={
$2(d,e){return d.eR(new C.ff6(e))},
$S:1937}
C.ff6.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.ca},
$S:1938}
C.ff2.prototype={
$1(d){return C.hRT(d,this.a)},
$S:z+73}
C.ff3.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ff4.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fjf.prototype={
$1(d){return d.a},
$S:z+49}
C.fjg.prototype={
$1(d){return d.length!==0},
$S:3}
C.fjh.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.flV.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fqL.prototype={
$1(d){return C.hhU(d,C.Gn(d,this.a))},
$S:z+5}
C.fqM.prototype={
$1(d){return C.hhV(d,C.Gn(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKL.prototype
w.buG=w.q
w=C.aMW.prototype
w.bx3=w.q
w=C.aMX.prototype
w.bx4=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCf.prototype,"gchL","chM",25)
var s
w(s=C.azj.prototype,"gcaK","caL",42)
v(s,"gaMa","Nc",0)
v(s,"gcq3","AK",0)
v(s,"gbKo","NS",0)
v(s,"gcE5","yj",0)
v(s,"gcjM","a0b",0)
v(s,"gbFM","NA",0)
v(s,"gbKP","WJ",0)
w(s,"gbPw","bPx",71)
v(s,"gbAa","zM",0)
v(C.azk.prototype,"gcE1","Fg",0)
v(s=C.aCQ.prototype,"gafh","vE",0)
v(s,"gcdo","a_l",0)
v(s,"gaQe","HO",0)
v(s=C.aCN.prototype,"gcAb","a2i",0)
v(s,"gafh","vE",0)
v(s,"gco5","a0R",0)
v(s,"gcel","a_z",0)
w(s,"gcaE","caF",30)
v(s,"gbKG","HT",0)
v(s,"gcBf","cBg",3)
v(s,"gc1b","Yp",0)
w(s,"gc99","c9a",23)
v(s,"gcd8","cd9",3)
v(s=C.aBe.prototype,"gc6Y","Po",0)
v(s,"gc7_","c70",3)
v(s,"gbHk","a9i",0)
v(s=C.aCP.prototype,"gbO0","Xd",0)
v(s,"gbYu","XS",0)
v(s,"gcuw","a1H",0)
v(s,"gcqD","a1i",0)
v(C.aCO.prototype,"gcql","ah1",0)
v(C.as0.prototype,"gc97","ZY",0)
v(C.ay4.prototype,"ga21","K_",3)
v(C.ay3.prototype,"ga21","K_",3)
v(C.awO.prototype,"ga21","K_",3)
v(s=C.aEk.prototype,"gb11","Qj",0)
v(s,"gbyZ","Vt",0)
v(s,"gce9","cea",3)
w(C.aEj.prototype,"gc9Z","ca_",57)
u(C.aEl.prototype,"gaQ8",0,0,null,["$1","$0"],["HN","bIB"],58,0,0)
t(C,"hpc","i0z",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.anT,C.uc,C.nd,C.Hs,C.aer,C.JM,C.ud,C.JU,C.FD,C.bdU,C.aIp,C.ap4,C.d7g,C.ly,C.aSD,C.aSC,C.aQC,C.tM,C.qX,C.lh,C.hZ,C.kC,C.aGo])
u(A.hX,[C.fAS,C.fAR,C.fAT,C.fK4,C.fpE,C.fpF,C.fpK,C.fyB,C.fyA,C.fyz,C.c1F,C.fKA,C.fKs,C.fKE,C.ftx,C.dFO,C.dFJ,C.dFK,C.dFm,C.dFi,C.dG2,C.dG3,C.dFX,C.dFY,C.dG4,C.dG5,C.fu8,C.fwc,C.fwd,C.fJa,C.fRk,C.fto,C.fJJ,C.d6t,C.d5Q,C.d5Z,C.d6f,C.d5V,C.d60,C.d5S,C.d64,C.d65,C.d63,C.d6k,C.d6j,C.d8e,C.d8f,C.d8g,C.d6H,C.d6M,C.d6L,C.cFi,C.cFk,C.cYK,C.cZ8,C.cZ9,C.cZc,C.cZe,C.cZf,C.cZg,C.cZi,C.cZj,C.dU_,C.dTp,C.dTk,C.dST,C.dT5,C.dT8,C.dTh,C.dSH,C.dTs,C.dTm,C.dSJ,C.dSK,C.dSL,C.dSQ,C.dSO,C.dSN,C.dT2,C.dT3,C.dSY,C.dTz,C.dTv,C.d6S,C.d6T,C.fuc,C.fud,C.fue,C.fua,C.fub,C.fuh,C.fui,C.fuj,C.fuf,C.fug,C.d7b,C.d71,C.d6X,C.d76,C.d77,C.d7a,C.d6Z,C.d7d,C.d7e,C.d7f,C.fbA,C.eNu,C.dn4,C.dne,C.dnf,C.dng,C.dnj,C.dni,C.dnk,C.dnp,C.dnq,C.c8j,C.c8i,C.c8e,C.c8f,C.c8g,C.c8h,C.c8o,C.c8l,C.c8m,C.dTM,C.dTP,C.dTO,C.dTV,C.dTW,C.dF7,C.fKb,C.fJy,C.fR1,C.fJD,C.fJC,C.cZx,C.cZy,C.cZt,C.cxd,C.cxf,C.cxg,C.cx8,C.cxh,C.fb2,C.fIc,C.eKC,C.eKy,C.eKu,C.eKs,C.eKG,C.fQS,C.eKP,C.eKY,C.eKT,C.eKU,C.eL2,C.cww,C.cwu,C.cwv,C.ftg,C.fRs,C.frr,C.bNu,C.bNt,C.bNq,C.bNr,C.bNs,C.feh,C.fei,C.fJp,C.fJq,C.fJr,C.fJs,C.fJt,C.fRq,C.ftI,C.fwi,C.fwj,C.fwl,C.fwm,C.fJc,C.fRl,C.fRm,C.fRn,C.ftp,C.ftq,C.fRx,C.fsW,C.fsX,C.fR2,C.fx4,C.fJ5,C.fwf,C.fwg,C.fJ0,C.feP,C.feQ,C.feR,C.feS,C.feT,C.ff6,C.ff2,C.ff3,C.fjf,C.fjg,C.flV,C.fqL,C.fqM])
u(A.au,[C.aY6,C.akl,C.aTS,C.Yl,C.b9B,C.bdS,C.bhA,C.bvh,C.bkW,C.acS,C.bhz,C.acR,C.bhy,C.aBf,C.aHr,C.acT,C.JI,C.bdT,C.ac8,C.bdR,C.bdW,C.aY4,C.as0,C.add])
u(A.mM,[C.bac,C.bbp,C.bbg,C.aGj,C.bgD,C.bdV,C.bcZ,C.biI,C.bv6])
u(A.j8,[C.fKx,C.fKy,C.fKz,C.fKq,C.fKr,C.fKC,C.fKD,C.dG_,C.dFM,C.dFP,C.dFt,C.dFu,C.dFv,C.dFs,C.dFA,C.dFr,C.dFB,C.dFC,C.dFq,C.dFD,C.dFp,C.dFE,C.dFo,C.dFF,C.dFg,C.dFh,C.dFn,C.dFG,C.dFl,C.dFH,C.dFk,C.dFw,C.dFj,C.dFx,C.dFf,C.dFy,C.dFz,C.dG0,C.dG1,C.dFQ,C.dFR,C.dFS,C.dFT,C.dFU,C.dFV,C.dFW,C.dG7,C.dFZ,C.fu9,C.d5O,C.d5M,C.d5N,C.d5P,C.d6s,C.d6h,C.d6e,C.d5R,C.d6i,C.d5X,C.d5Y,C.d6_,C.d6g,C.d5W,C.d61,C.d6p,C.d6b,C.d6a,C.d6c,C.d6d,C.d66,C.d68,C.d69,C.d62,C.d6l,C.d6o,C.d5T,C.d5U,C.d8d,C.d8c,C.d8b,C.d8a,C.d8h,C.d89,C.d8i,C.d6I,C.d6J,C.d6K,C.d6N,C.d6G,C.d6F,C.cFj,C.cYJ,C.cYW,C.cYV,C.cZa,C.cYU,C.cZb,C.cYT,C.cYS,C.cZd,C.cYR,C.cZ3,C.cZ2,C.cZk,C.dTZ,C.dTY,C.dU0,C.dU1,C.dU2,C.dTX,C.dU4,C.dU3,C.dTn,C.dTo,C.dTq,C.dSU,C.dT7,C.dT6,C.dT9,C.dTj,C.dTc,C.dTb,C.dTd,C.dTa,C.dTe,C.dTf,C.dTi,C.dSI,C.dTl,C.dSM,C.dSP,C.dSR,C.dTr,C.dSX,C.dSV,C.dSZ,C.dT_,C.dSW,C.dT0,C.dT4,C.dTA,C.dTB,C.dTt,C.dTw,C.dTx,C.dTy,C.dTD,C.dTu,C.dSS,C.d6R,C.d6Q,C.d6V,C.d74,C.d6W,C.eNt,C.dn5,C.dn2,C.dn3,C.dnd,C.dnc,C.dnb,C.dnl,C.dna,C.dnm,C.dn9,C.dnn,C.dn8,C.dno,C.dn7,C.dn6,C.dnh,C.dnr,C.dnA,C.dTN,C.dTR,C.dTS,C.dTJ,C.dTK,C.dTL,C.dTQ,C.dTU,C.dTT,C.dTE,C.dTF,C.dTG,C.dTH,C.dTI,C.dF8,C.fK8,C.cfT,C.cZw,C.cZv,C.cZz,C.cZs,C.cZu,C.cx5,C.cxb,C.cxc,C.cxa,C.cxe,C.cx9,C.cx6,C.cx7,C.cxi,C.fb3,C.fb4,C.eKE,C.eKv,C.eKw,C.eKx,C.eKz,C.eKA,C.eKD,C.eKq,C.eKt,C.eKF,C.eKr,C.eKI,C.eKJ,C.eKK,C.eKL,C.eKH,C.eKl,C.eKm,C.eKn,C.eKp,C.eKo,C.eL3,C.eL4,C.eKN,C.eKO,C.eKV,C.eKW,C.eKX,C.eKR,C.eKS,C.eLa,C.eL9,C.eLb,C.eL8,C.eKM,C.eKQ,C.eL6,C.eL5,C.eL0,C.eL1,C.eL_,C.eKZ])
u(A.ag,[C.ao_,C.Su,C.Z2,C.Z6,C.Z4,C.YD,C.ap7,C.ap1,C.ZG,C.ap5,C.a_0,C.a_1,C.a5W,C.YF,C.YE,C.Yc,C.a0M,C.Fq,C.awH,C.as_,C.arU,C.arZ,C.NU])
u(A.ah,[C.aCf,C.bdP,C.azj,C.be9,C.azk,C.bbn,C.aCQ,C.aCN,C.aBe,C.aCP,C.aCO,C.bj2,C.aKL,C.ay4,C.ay3,C.awO,C.bv9,C.aMW,C.aMX,C.aEk,C.bkp,C.aEj,C.bwV])
u(A.kj,[C.dFL,C.dFN,C.dFI,C.dG6,C.fwe,C.bNp,C.d6r,C.d6q,C.d67,C.d6m,C.d6n,C.d6O,C.dTg,C.dT1,C.dTC,C.d73,C.d72,C.d70,C.d75,C.d78,C.d79,C.d6U,C.d6Y,C.d7_,C.d7c,C.c8c,C.c8k,C.c8p,C.dF9,C.fKa,C.fK9,C.fb0,C.fb1,C.eKB,C.eL7,C.cwx,C.fiB,C.fej,C.fwk,C.fsY,C.fwh,C.ff5,C.ff4,C.fjh])
t(C.biJ,C.aKL)
u(A.ma,[C.abb,C.aJ6,C.Ht,C.akm,C.cwy,C.cwz])
t(C.bv7,C.aMW)
t(C.bv8,C.aMX)
t(C.aEl,C.bwV)
t(C.b83,A.b7S)
t(C.bva,A.a5B)
t(C.b82,C.bva)
w(C.aKL,A.eT)
w(C.aMW,A.ca)
w(C.aMX,A.ca)
v(C.bwV,A.eA)
v(C.bva,A.j2)})()
A.jY(b.typeUniverse,JSON.parse('{"aY6":{"au":[],"r":[]},"bac":{"aB":[]},"ao_":{"ag":[],"r":[]},"aCf":{"ah":["ao_"]},"Su":{"ag":[],"r":[]},"akl":{"au":[],"r":[]},"aTS":{"au":[],"r":[]},"bdP":{"ah":["Su"]},"Z2":{"ag":[],"r":[]},"Z6":{"ag":[],"r":[]},"Z4":{"ag":[],"r":[]},"YD":{"ag":[],"r":[]},"azj":{"ah":["Z2"]},"be9":{"ah":["Z6"]},"azk":{"ah":["Z4"]},"Yl":{"au":[],"r":[]},"bbp":{"aB":[]},"bbg":{"aB":[]},"bbn":{"ah":["YD"]},"aGj":{"aB":[]},"bgD":{"aB":[]},"b9B":{"au":[],"r":[]},"ap7":{"ag":[],"r":[]},"ap1":{"ag":[],"r":[]},"ZG":{"ag":[],"r":[]},"acT":{"au":[],"r":[]},"aCQ":{"ah":["ap7"]},"aCN":{"ah":["ap1"]},"bdS":{"au":[],"r":[]},"bdV":{"aB":[]},"bhA":{"au":[],"r":[]},"bcZ":{"aB":[]},"bvh":{"au":[],"r":[]},"bkW":{"au":[],"r":[]},"aBe":{"ah":["ZG"]},"acS":{"au":[],"r":[]},"bhz":{"au":[],"r":[]},"acR":{"au":[],"r":[]},"bhy":{"au":[],"r":[]},"aBf":{"au":[],"r":[]},"aHr":{"au":[],"r":[]},"JI":{"au":[],"r":[]},"ap5":{"ag":[],"r":[]},"a_0":{"ag":[],"r":[]},"a_1":{"ag":[],"r":[]},"aCP":{"ah":["ap5"]},"bdT":{"au":[],"r":[]},"ac8":{"au":[],"r":[]},"bdR":{"au":[],"r":[]},"bdW":{"au":[],"r":[]},"aCO":{"ah":["a_0"]},"bj2":{"ah":["a_1"]},"aY4":{"au":[],"r":[]},"a5W":{"ag":[],"r":[]},"biJ":{"ah":["a5W"]},"biI":{"aB":[]},"as0":{"au":[],"r":[]},"YF":{"ag":[],"r":[]},"YE":{"ag":[],"r":[]},"Yc":{"ag":[],"r":[]},"a0M":{"ag":[],"r":[]},"ay4":{"ah":["YF"]},"ay3":{"ah":["YE"]},"awO":{"ah":["Yc"]},"bv9":{"ah":["a0M"]},"Fq":{"ag":[],"r":[]},"awH":{"ag":[],"r":[]},"bv7":{"ah":["Fq"]},"bv8":{"ah":["awH"]},"bv6":{"aB":[]},"as_":{"ag":[],"r":[]},"aEk":{"ah":["as_"]},"add":{"au":[],"r":[]},"arU":{"ag":[],"r":[]},"arZ":{"ag":[],"r":[]},"bkp":{"ah":["arU"]},"aEj":{"ah":["arZ"]},"NU":{"ag":[],"r":[]},"aEl":{"ah":["NU"],"eA":[]},"b82":{"j2":[],"fg":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQC"),Q:w("qX"),n:w("bl<n,n>"),c5:w("aSC"),dY:w("aSD"),d:w("eG<n?>"),e:w("Hs"),B:w("nd"),P:w("hZ"),k:w("kC"),x:w("aA<~>"),f5:w("O<a2L>"),V:w("O<ac>"),t:w("O<qX>"),O:w("O<w>"),ac:w("O<eG<n?>>"),I:w("O<nd>"),u:w("O<hZ>"),_:w("O<kC>"),cl:w("O<aA<ai<a5<n,@>>>>"),R:w("O<nf>"),cq:w("O<ai<+(L,L)>>"),ez:w("O<a5<n,aD>>"),gE:w("O<a5<n,n>>"),c7:w("O<a5<n,@>>"),fD:w("O<ms>"),bp:w("O<of>"),g:w("O<v>"),v:w("O<ht>"),L:w("O<+(n,n)>"),G:w("O<+(L,L)>"),bF:w("O<+count,id,name(G,n,n)>"),A:w("O<cR>"),s:w("O<n>"),aS:w("O<iS>"),p:w("O<r>"),C:w("O<fg>"),D:w("O<lh>"),fp:w("O<JM>"),M:w("O<JU>"),gZ:w("O<aGo>"),Y:w("O<aer>"),E:w("O<aIp>"),F:w("O<L>"),dC:w("O<G>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<nd>"),do:w("ai<hZ>"),r:w("ai<kC>"),U:w("ai<a5<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),h:w("ai<n>"),c:w("ai<lh>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a5<n,@>>>"),a:w("a5<n,@>"),f:w("a5<@,@>"),gv:w("M<n,Hu>"),w:w("iC"),g2:w("ri"),bV:w("anT"),fL:w("cr"),K:w("aD"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(L,ai<hZ>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bq<L>"),gc:w("dJ"),b4:w("cx<G>"),W:w("jJ<n>"),l:w("r"),cM:w("fg"),i:w("lh"),cc:w("FD"),bw:w("acR<n?>"),cy:w("JW"),q:w("n1"),y:w("R"),gR:w("L"),z:w("@"),S:w("G"),eK:w("ai<kC>?"),m:w("ap4?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("pY?"),T:w("n?"),aD:w("dJ?"),o:w("lh?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aYu=new A.bp(B.hg,B.bG,B.hg,B.bG)
D.aan=new A.bp(B.hg,B.ir,B.hg,B.ir)
D.aYH=new A.bp(B.is,B.bG,B.bG,B.bG)
D.aYL=new A.ay(B.cS,1.4,B.q,-1)
D.aYV=new A.ay(B.ad,1,B.q,-1)
D.b_j=new A.aY(0,1/0,64,1/0)
D.b_n=new A.aY(0,84,0,1/0)
D.ay_=w([B.lL,B.qY,B.c],x.O)
D.bWV=new A.a8(B.ay,B.aC,B.x,D.ay_,null,null)
D.b07=new A.o(null,null,null,null,null,D.bWV,B.n)
D.d1a=w([B.aV,B.bT],x.O)
D.bZ1=new A.a8(B.b0,B.b4,B.x,D.d1a,null,null)
D.b0s=new A.o(null,null,null,null,null,D.bZ1,B.n)
D.b6G=new A.fk(null,null,null,null,null,E.jX,null,null,null,null)
D.abH=new A.cp(B.A,null,null,D.b6G,null)
D.ko=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f4P=new A.H(!0,D.ko,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo3=new A.y("No books on the shelf yet.",null,D.f4P,null,null,null,null,null,null,null,null,null)
D.ead=new A.D(B.o0,D.fo3,null)
D.b59=new A.cp(B.A,null,null,D.ead,null)
D.b62=new A.cp(B.A,null,null,Y.VU,null)
D.b89=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b8D=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.acR=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bbn=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bbF=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aef=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bfA=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bg_=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.EM=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bhB=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bk3=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.afS=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fiu=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bpO=new A.eG(null,D.fiu,B.eZ,null,x.d)
D.frf=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bpQ=new A.eG(null,D.frf,B.eZ,null,x.d)
D.bqn=new A.ba(38e5)
D.br7=new A.ii(0,10,0,10)
D.brg=new A.Q(0,1,0,0)
D.brq=new A.ii(0,4,0,4)
D.brH=new A.Q(10,10,14,10)
D.brT=new A.ii(10,4,10,4)
D.bs0=new A.ii(10,8,10,8)
D.bs1=new A.Q(10,8,8,8)
D.bsr=new A.Q(12,6,12,2)
D.bsJ=new A.Q(14,10,6,6)
D.bsK=new A.Q(14,12,14,0)
D.bsO=new A.Q(14,12,14,8)
D.bsR=new A.Q(14,12,8,14)
D.bsV=new A.ii(14,14,14,14)
D.btz=new A.Q(16,2,16,10)
D.btJ=new A.Q(16,6,16,30)
D.btL=new A.Q(16,6,16,8)
D.aie=new A.Q(18,16,18,8)
D.bul=new A.Q(18,20,18,22)
D.aii=new A.Q(18,24,18,24)
D.bur=new A.Q(18,30,18,30)
D.buK=new A.Q(20,10,12,20)
D.buX=new A.Q(20,18,16,18)
D.buZ=new A.Q(20,18,20,6)
D.bvO=new A.Q(24,32,24,28)
D.bvP=new A.Q(24,36,24,32)
D.bvT=new A.Q(26,26,24,14)
D.bw7=new A.Q(2,4,2,8)
D.bwb=new A.Q(30,0,30,0)
D.bwm=new A.Q(38,22,22,22)
D.aiB=new A.Q(40,24,24,24)
D.bwo=new A.ii(40,40,40,40)
D.bwq=new A.Q(46,30,30,30)
D.aiE=new A.Q(4,0,0,8)
D.bwR=new A.Q(56,40,40,40)
D.bwV=new A.Q(1.25,1.25,1.25,1.25)
D.bwW=new A.Q(60,0,60,0)
D.bwZ=new A.Q(6,14,6,16)
D.bxa=new A.ii(7,3,7,3)
D.bxH=new A.Q(5,1.5,5,1.5)
D.bxS=new A.Q(6,2.5,6,2.5)
D.fDh=new A.y("Signature",null,B.nB,null,null,null,null,null,null,null,null,null)
D.byc=new A.bB(1,B.bh,D.fDh,null)
D.fAq=new A.y("Tell the AI what to fix",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bz_=new A.bB(1,B.bh,D.fAq,null)
D.fc9=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCo=new A.y("Worksheets",null,D.fc9,null,null,null,null,null,null,null,null,null)
D.fch=new A.H(!0,E.acq,null,null,null,null,13,B.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBg=new A.y("Track your project spending",null,D.fch,null,null,null,null,null,null,null,null,null)
D.cUc=w([D.fCo,B.au,D.fBg],x.p)
D.bn_=new A.fm(B.ag,B.e,B.j,B.F,null,B.p,null,0,D.cUc,null)
D.bz5=new A.bB(1,B.bh,D.bn_,null)
D.f7p=new A.H(!0,E.jX,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhH=new A.y("FAMILY LIBRARY",null,D.f7p,null,null,null,null,null,null,null,null,null)
D.bzn=new A.bB(1,B.bh,D.fhH,null)
D.MK=new C.Hs("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.ZQ=new C.Ht(0,"male")
D.ajw=new C.Ht(1,"female")
D.xX=new C.Ht(2,"unknown")
D.tP=new C.akm(0,"owner")
D.ML=new C.akm(1,"editor")
D.kv=new C.akm(2,"viewer")
D.aki=new A.a0(61199,"MaterialIcons",!1)
D.bDA=new A.a0(61504,"MaterialIcons",!1)
D.bDB=new A.a0(61505,"MaterialIcons",!1)
D.bDD=new A.a0(61587,"MaterialIcons",!1)
D.bDK=new A.a0(61890,"MaterialIcons",!1)
D.bEE=new A.a0(63034,"MaterialIcons",!0)
D.bFt=new A.a0(63429,"MaterialIcons",!1)
D.amw=new A.a0(984520,"MaterialIcons",!1)
D.bE9=new A.a0(62776,"MaterialIcons",!1)
D.bHR=new A.ae(D.bE9,26,B.aZ,null,null,null)
D.bCy=new A.a0(57648,"MaterialIcons",!1)
D.bI8=new A.ae(D.bCy,14,B.c,null,null,null)
D.bIq=new A.ae(B.FV,17,null,null,null,null)
D.bIW=new A.ae(E.a_J,null,null,null,null,null)
D.bIZ=new A.ae(B.jp,18,E.jX,null,null,null)
D.a_v=new A.a0(62044,"MaterialIcons",!1)
D.bJ4=new A.ae(D.a_v,null,B.aV,null,null,null)
D.bJU=new A.ae(B.dX,16,null,null,null,null)
D.bK0=new A.ae(D.a_v,32,B.aV,null,null,null)
D.bKk=new A.ae(E.akj,18,B.cS,null,null,null)
D.bLn=new A.ae(B.G4,22,B.aw,null,null,null)
D.bLz=new A.ae(B.dX,22,B.aZ,null,null,null)
D.bLK=new A.ae(Q.a_A,22,B.c,null,null,null)
D.bLP=new A.ae(B.tZ,52,B.c,null,null,null)
D.bLZ=new A.ae(B.G4,30,B.aw,null,null,null)
D.an9=new A.ae(B.u7,22,B.c,null,null,null)
D.bMq=new A.ae(B.dX,17,null,null,null,null)
D.bMK=new A.ae(B.vP,26,B.cS,null,null,null)
D.bNt=new A.ae(B.a_V,16,null,null,null,null)
D.bOd=new A.ae(B.tZ,24,B.c,null,null,null)
D.bOi=new A.ae(B.Nc,20,B.rw,null,null,null)
D.bOn=new A.ae(B.FT,null,B.bT,null,null,null)
D.bOu=new A.ae(B.jp,18,B.c,null,null,null)
D.bP6=new A.ae(B.cD,22,B.ad,null,null,null)
D.bPW=new A.ae(B.e6,16,B.ad,null,null,null)
D.bQ7=new A.ae(D.a_v,20,B.aV,null,null,null)
D.anA=new A.ae(B.hn,20,null,null,null,null)
D.bQD=new A.ae(B.cD,18,D.ko,null,null,null)
D.bQV=new A.ae(B.yh,28,B.c,null,null,null)
D.bR3=new A.ae(B.N2,null,B.h1,null,null,null)
D.bRn=new A.ae(B.yh,24,B.c,null,null,null)
D.bRO=new A.ae(B.tZ,null,B.aV,null,null,null)
D.bRP=new A.ae(B.jJ,20,B.cS,null,null,null)
D.bS8=new A.ae(B.FV,16,null,null,null,null)
D.bTG=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eA,!0,null,null,null,null)
D.d8q=w([B.bv,B.aV,B.fd,B.aZ],x.O)
D.bVk=new A.a8(B.ay,B.aC,B.x,D.d8q,null,null)
D.bgw=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bm_=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cR4=w([D.bgw,D.bm_],x.O)
D.bVv=new A.a8(B.b0,B.b4,B.x,D.cR4,null,null)
D.d2X=w([B.f1,B.fy,B.fd],x.O)
D.bVA=new A.a8(B.ay,B.aC,B.x,D.d2X,null,null)
D.aeR=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b8E=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cT1=w([D.aeR,D.b8E],x.O)
D.bW8=new A.a8(B.b0,B.b4,B.x,D.cT1,null,null)
D.bbS=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.axl=w([D.bbS,D.aeR],x.O)
D.bWs=new A.a8(B.ay,B.aC,B.x,D.axl,null,null)
D.adO=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.be3=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d27=w([D.adO,D.be3],x.O)
D.bX5=new A.a8(B.a3,B.a8,B.x,D.d27,null,null)
D.deR=w([B.bz,B.n4],x.O)
D.bX7=new A.a8(B.b0,B.b4,B.x,D.deR,null,null)
D.bgr=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dfH=w([D.bgr,D.ko,D.ko,P.Xd],x.O)
D.dhZ=w([0,0.07,0.9,1],x.F)
D.bXC=new A.a8(B.a3,B.a8,B.x,D.dfH,D.dhZ,null)
D.bXN=new A.a8(B.ay,B.aC,B.x,B.QN,null,null)
D.der=w([B.aZ,B.aV,B.bT],x.O)
D.bYN=new A.a8(B.ay,B.aC,B.x,D.der,null,null)
D.cjj=w([B.bv,B.aZ,B.f1],x.O)
D.cjq=w([B.bu,B.aE,B.jc],x.O)
D.cjs=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bf5=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cpA=w([D.bf5,E.aey],x.O)
D.e61=new A.v(1,2)
D.eRe=new A.cR(B.aW,D.e61,3)
D.aun=w([D.eRe],x.A)
D.cwS=w([B.h5,B.cb,B.fc],x.O)
D.czz=w([B.bK,B.bq,B.bn],x.O)
D.bzQ=new C.uc("classic","Classic leather","Gold-edged brown leather",D.axl,E.jX,E.jX,"\u2766",B.L,!0,!1,!1,!1)
D.b7Y=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bkU=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cVN=w([D.b7Y,D.bkU],x.O)
D.aeC=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bzL=new C.uc("ornate","Ornate gold","Double gold border and flourishes",D.cVN,D.aeC,D.aeC,"\u2726",B.L,!0,!0,!0,!1)
D.bbw=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bhd=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cO_=w([D.bbw,D.bhd],x.O)
D.bzK=new C.uc("parchment","Parchment","Old paper with dark ink",D.cO_,D.EM,G.iB,"\u2767",B.L,!0,!1,!1,!0)
D.ac8=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bjj=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.dcO=w([D.ac8,D.bjj],x.O)
D.beG=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.biG=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bzN=new C.uc("minimal","Clean paper","Plain and elegant, like a printed book",D.dcO,D.beG,D.biG,"",B.L,!0,!0,!1,!0)
D.bzP=new C.uc("midnight","Midnight","Deep blue with silver stars",L.axD,B.cr,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bzJ=new C.uc("emerald","Emerald library","Green cloth, title on the left",Z.auL,E.jX,B.fU,"\u25c6",B.bi,!0,!1,!1,!1)
D.bjK=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.db3=w([B.eq,D.bjK],x.O)
D.bfJ=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bgP=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bzO=new C.uc("rose","Rose vintage","Burgundy with rose-gold lettering",D.db3,D.bfJ,D.bgP,"\u2740",B.L,!0,!1,!0,!1)
D.dfl=w([B.ct,O.ml],x.O)
D.bzM=new C.uc("modern","Modern","Dark, bold, left-aligned",D.dfl,B.aN,B.c,"",B.bi,!1,!0,!1,!1)
D.a1O=w([D.bzQ,D.bzL,D.bzK,D.bzN,D.bzP,D.bzJ,D.bzO,D.bzM],A.ax("O<uc>"))
D.cNw=w([B.bT,B.bj],x.O)
D.bgh=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cOb=w([D.ac8,D.bgh],x.O)
D.bbs=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cPP=w([D.bbs,B.da],x.O)
D.cRk=w([B.b8,B.iT,B.oB],x.O)
D.cRH=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b8A=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bdm=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dhV=w([D.adO,D.b8A,D.bdm],x.O)
D.bzR=new C.ud("leather","Leather",D.dhV,"vintage")
D.cYO=w([B.dc,B.L0,A4.Wq],x.O)
D.bzY=new C.ud("midnight","Midnight",D.cYO,"starry")
D.cRl=w([B.eB,B.dZ,B.lh],x.O)
D.bzX=new C.ud("forest","Forest",D.cRl,"story")
D.djQ=w([B.eK,B.eq,B.kr],x.O)
D.bzU=new C.ud("burgundy","Burgundy",D.djQ,"royal")
D.cz8=w([B.aE,B.pC,B.nK],x.O)
D.bzV=new C.ud("royal","Royal",D.cz8,"royal")
D.cTF=w([B.bq,B.ct,O.ml],x.O)
D.bzS=new C.ud("charcoal","Charcoal",D.cTF,"geo")
D.di2=w([B.cc,B.dR,B.xg],x.O)
D.bzW=new C.ud("sunset","Sunset",D.di2,"sunset")
D.diJ=w([B.iT,B.EN,B.Wt],x.O)
D.bzT=new C.ud("ocean","Ocean",D.diJ,"band")
D.yO=w([D.bzR,D.bzY,D.bzX,D.bzU,D.bzV,D.bzS,D.bzW,D.bzT],A.ax("O<ud>"))
D.cU4=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cUD=w([B.ak,B.aJ,B.M],x.O)
D.cVS=w([B.eq,B.dZ,B.dc,B.fA,B.xj,B.cS,B.k_,B.eb,B.d5],x.O)
D.cVT=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eRf=new A.cR(B.dr,B.dE,8)
D.cW1=w([D.eRf],x.A)
D.cX6=w([B.bX,B.dR,B.kp],x.O)
D.cXA=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cYK=w([B.bX,B.hi],x.O)
D.d_O=w([B.aM,B.vc,B.x7],x.O)
D.d0H=w([B.bM,B.c9,B.ds,B.aM],x.O)
D.d1b=w([B.je,B.cc,B.tl],x.O)
D.d1G=w([B.f1,B.cS],x.O)
D.d2d=w([B.cs,B.fl,B.hl],x.O)
D.d2o=w([B.aN,B.bj,B.dc],x.O)
D.d2U=w([B.er,B.cR,B.dZ],x.O)
D.d3c=w([B.dM,B.dc,B.L0],x.O)
D.d4t=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a2J=w(["leather","linen","plain","stars","rays"],x.s)
D.bHx=new A.a0(985219,"MaterialIcons",!1)
D.bH5=new A.a0(983781,"MaterialIcons",!1)
D.ax2=w([B.akI,B.i4,B.lT,B.i5,D.bHx,B.Gg,B.q_,D.bH5,L.amj,B.yj,B.q1,B.mx],A.ax("O<a0>"))
D.a2O=w(["double","single","corners","none"],x.s)
D.d78=w([B.dy,B.bl,B.eb],x.O)
D.d7l=w([],x.t)
D.Ch=w([],x.u)
D.d9E=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dbX=w([B.aF,B.fl,B.fA],x.O)
D.ddo=w([B.bI,B.n_,B.Xn],x.O)
D.ddD=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dwU=new C.ly("construction","Construction","Jobsite & builds",B.y9)
D.dx0=new C.ly("house","Home Build","Houses & rooms",B.vK)
D.dwR=new C.ly("grocery","Grocery","Store & pantry",B.a0q)
D.dwQ=new C.ly("calculator","Calculations","Math & estimates",B.Nn)
D.dwZ=new C.ly("lumber","Materials","Lumber & supplies",B.ND)
D.dwN=new C.ly("kitchen","Kitchen","Remodel & meals",Aa.alw)
D.bH2=new A.a0(983756,"MaterialIcons",!1)
D.dwS=new C.ly("landscape","Landscaping","Yard & garden",D.bH2)
D.dwM=new C.ly("plumbing","Plumbing","Pipes & water",B.q9)
D.dx1=new C.ly("electrical","Electrical","Wiring & power",B.ha)
D.dwK=new C.ly("store","Retail Shop","Daily business",B.l0)
D.dwL=new C.ly("paint_remodel","Paint & Remodel","Colors & walls",Ab.a00)
D.bGr=new A.a0(983311,"MaterialIcons",!1)
D.dwY=new C.ly("roofing","Roofing","Roofs & exteriors",D.bGr)
D.bHf=new A.a0(983986,"MaterialIcons",!1)
D.dwJ=new C.ly("warehouse","Warehouse","Storage & stock",D.bHf)
D.dwW=new C.ly("vehicles","Vehicles","Fleet & transport",B.Gh)
D.bEb=new A.a0(62785,"MaterialIcons",!1)
D.dwP=new C.ly("farm","Farm","Crops & livestock",D.bEb)
D.dwO=new C.ly("restaurant","Restaurant","Food & catering",B.u5)
D.dwV=new C.ly("tools","Tools","Workshop gear",B.Gc)
D.dx_=new C.ly("wallet","Cash & Wallet","Quick spending",B.jJ)
D.bFo=new A.a0(63395,"MaterialIcons",!1)
D.dwX=new C.ly("concrete","Concrete","Foundation work",D.bFo)
D.dwT=new C.ly("blueprint","Blueprint","Plans & design",Af.akO)
D.a3h=w([D.dwU,D.dx0,D.dwR,D.dwQ,D.dwZ,D.dwN,D.dwS,D.dwM,D.dx1,D.dwK,D.dwL,D.dwY,D.dwJ,D.dwW,D.dwP,D.dwO,D.dwV,D.dx_,D.dwX,D.dwT],A.ax("O<ly>"))
D.de6=w([B.bs,B.bl],x.O)
D.deS=w([B.ic,B.nP,B.dH],x.O)
D.a3q=w(["top","middle","bottom"],x.s)
D.dhe=w([B.cn,B.bj,B.dc],x.O)
D.dhP=w([B.b2,B.cR,B.dZ],x.O)
D.djL=w([B.bK,B.ak],x.O)
D.djM=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e3v={top:0,middle:1,bottom:2}
D.dmY=new A.bl(D.e3v,["Top","Middle","Bottom"],x.n)
D.e38={double:0,single:1,corners:2,none:3}
D.dn2=new A.bl(D.e38,["Double line","One line","Corners","None"],x.n)
D.e4m={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dot=new A.bl(D.e4m,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.doF=new A.bl(B.i8,[],A.ax("bl<G,+(n,n)>"))
D.e3n={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Cu=new A.bl(D.e3n,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bl<n,G>"))
D.drt=new F.MN(32,null)
D.dru=new F.MN(40,null)
D.drv=new F.MN(46,null)
D.aGj=new C.arZ(null)
D.e7_=new A.v(8,14)
D.foH=new A.y("Write a new book",null,B.hH,null,B.L,null,null,null,null,null,null,null)
D.e9G=new A.D(B.kW,D.foH,null)
D.amK=new A.ae(B.hB,18,B.c,null,null,null)
D.fi2=new A.y("Add",null,B.m7,null,null,null,null,null,null,null,null,null)
D.d0W=w([D.amK,B.qq,D.fi2],x.p)
D.eP4=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d0W,null)
D.ea0=new A.D(B.ng,D.eP4,null)
D.ea1=new A.D(E.ah3,Y.VU,null)
D.fc4=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new A.y("New Project",null,D.fc4,null,null,null,null,null,null,null,null,null)
D.d4Q=w([D.amK,B.ab,D.fl4],x.p)
D.eP7=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d4Q,null)
D.eac=new A.D(B.ij,D.eP7,null)
D.fnt=new A.y("Choose your header",null,T.qu,null,null,null,null,null,null,null,null,null)
D.eax=new A.D(B.hQ,D.fnt,null)
D.b6V=new A.fk(2.2,null,null,null,null,B.cS,null,null,null,null)
D.eU0=new A.a7(22,22,D.b6V,null)
D.b55=new A.cp(B.A,null,null,D.eU0,null)
D.eaC=new A.D(B.Yn,D.b55,null)
D.bt3=new A.Q(14,2,14,6)
D.fB_=new A.y("The top of your book. Tap a design to see it.",null,S.zH,null,null,null,null,null,null,null,null,null)
D.eaD=new A.D(D.bt3,D.fB_,null)
D.eca=new A.iQ(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.ecd=new A.iQ(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aHy=new A.iQ(1,0.9607843137254902,0.48627450980392156,0)
D.If=new A.iQ(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zl=new A.iQ(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.ecj=new A.iQ(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.h1n=new C.bgD(null)
D.bo7=new A.mj(D.h1n,null,B.av,null,null)
D.aLb=new A.cL(0,0,0,0,null,null,D.bo7,null)
D.eAP=new A.z(-42,42)
D.eJL=new A.cA([0,0,1,1])
D.aMA=new A.a9(0,0,520,160)
D.fAy=new A.y("Let the AI write it from your tree",null,B.kf,null,B.L,null,null,null,null,null,null,null)
D.bAu=new A.dq(1,B.co,D.fAy,null)
D.cYJ=w([E.a0T,B.ab,D.bAu],x.p)
D.eOK=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.cYJ,null)
D.fhI=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.dch=w([D.anA,B.ab,D.fhI],x.p)
D.eOU=new A.cl(B.aP,B.b9,B.j,B.m,null,B.p,null,0,D.dch,null)
D.bLE=new A.ae(B.hR,14,B.aZ,null,null,null)
D.f63=new A.H(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flu=new A.y("Cashier",null,D.f63,null,null,null,null,null,null,null,null,null)
D.d5l=w([D.bLE,B.bp,D.flu],x.p)
D.eOX=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d5l,null)
D.fhJ=new A.y("Transfer & settings",null,B.dj,null,null,null,null,null,null,null,null,null)
D.byQ=new A.bB(1,B.bh,D.fhJ,null)
D.cQO=w([D.an9,B.at,D.byQ],x.p)
D.eOY=new A.cl(B.aP,B.e,B.j,B.m,null,B.p,null,0,D.cQO,null)
D.eSK=new A.ar(16,40)
D.eSP=new A.ar(22,64)
D.eSW=new A.ar(280,88)
D.eTH=new A.a7(30,null,null,null)
D.eUZ=new A.hO(2,12,12,1.05,null)
D.fla=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eVH=new A.b1(D.fla,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flp=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aOF=new A.b1(D.flp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ftx=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eWa=new A.b1(D.ftx,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fDR=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eWf=new A.b1(D.fDR,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnr=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eWm=new A.b1(D.fnr,null,null,null,null,null,null,null,null,null,null,null,null,B.fK,!1,null,null,null,B.r,null)
D.fBc=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aOJ=new A.b1(D.fBc,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fij=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eWM=new A.b1(D.fij,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fEw=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eXv=new A.b1(D.fEw,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fzt=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eXU=new A.b1(D.fzt,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fDV=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eXX=new A.b1(D.fDV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fv5=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eXZ=new A.b1(D.fv5,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fph=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eY_=new A.b1(D.fph,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpi=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ_=new A.b1(D.fpi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.flc=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eZh=new A.b1(D.flc,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fn5=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eZA=new A.b1(D.fn5,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fuB=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eZQ=new A.b1(D.fuB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fq5=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eZR=new A.b1(D.fq5,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f2_=new A.H(!0,D.ko,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2p=new A.H(!0,D.ko,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f32=new A.rD(!0,B.rF,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3k=new A.H(!0,D.ko,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3T=new A.H(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7G=new A.rD(!0,B.S8,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4S=new A.H(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5g=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6R=new A.H(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6V=new A.H(!0,G.iB,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f89=new A.H(!0,B.M,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8S=new A.H(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9A=new A.H(!0,B.bT,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9E=new A.H(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa0=new A.H(!0,D.EM,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa9=new A.H(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb9=new A.H(!0,B.cS,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbD=new A.H(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc2=new A.H(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdt=new A.H(!0,B.ak,null,null,null,null,11.5,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdB=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQX=new A.H(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a88=new A.H(!0,B.ak,null,null,null,null,12,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffg=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffD=new A.H(!0,G.iB,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffL=new A.H(!0,G.iB,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgy=new A.y("Themes",null,B.pc,null,null,null,null,null,null,null,null,null)
D.fh9=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f6A=new A.H(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhy=new A.y("Debt receipt",null,D.f6A,null,B.L,null,null,null,null,null,null,null)
D.aQS=new A.H(!0,B.ak,null,null,null,null,11,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhQ=new A.y("Person who owes",null,D.aQS,null,null,null,null,null,null,null,null,null)
D.fiM=new A.y("Notes",null,B.a7P,null,null,null,null,null,null,null,null,null)
D.fjb=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f5y=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjf=new A.y("Share",null,D.f5y,null,null,null,null,null,null,null,null,null)
D.fkb=new A.y("Move your family trees",null,D.aQX,null,null,null,null,null,null,null,null,null)
D.fkN=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.flo=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fmG=new A.y("Remove this book?",null,B.ht,null,null,null,null,null,null,null,null,null)
D.aRp=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fnP=new A.y("What should the AI do?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.fpd=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fqk=new A.y("Ribbon bookmark",null,B.iP,null,null,null,null,null,null,null,null,null)
D.fdn=new A.H(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqN=new A.y("NGMY.ORG",null,D.fdn,null,B.L,null,null,null,null,null,null,null)
D.fs2=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.f9T=new A.H(!0,B.c,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsN=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f9T,null,B.L,null,null,null,null,null,null,null)
D.fu_=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fu6=new A.y("Thumbnail",null,B.pc,null,null,null,null,null,null,null,null,null)
D.fuH=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fv6=new A.y("Your photos",null,B.pc,null,null,null,null,null,null,null,null,null)
D.fvl=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fvS=new A.y("Design your cover",null,T.qu,null,null,null,null,null,null,null,null,null)
D.fvY=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fw0=new A.y("PICTURE",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fwm=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fwo=new A.y("You can undo it right after.",null,S.zI,null,null,null,null,null,null,null,null,null)
D.fwW=new A.y("Print",null,B.uL,null,null,null,null,null,null,null,null,null)
D.fxi=new A.y("Amount owed",null,D.aQS,null,null,null,null,null,null,null,null,null)
D.fxx=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fy7=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fya=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fyB=new A.y("Debtor signature",null,B.a7P,null,null,null,null,null,null,null,null,null)
D.fyK=new A.y("Change icon",null,E.aQ8,null,null,null,null,null,null,null,null,null)
D.fzW=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fAo=new A.y("Download",null,B.uL,null,null,null,null,null,null,null,null,null)
D.fAs=new A.y("Change",null,B.pc,null,null,null,null,null,null,null,null,null)
D.fBi=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fBl=new A.y("WHAT SHOULD IT CHANGE?",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fBV=new A.y("COLOUR",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fC8=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fCb=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fDb=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f0Z=new A.H(!0,E.jX,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDq=new A.y("Write the first page myself",null,D.f0Z,null,null,null,null,null,null,null,null,null)
D.fDY=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fE3=new A.y("Create Project",null,E.aQB,null,null,null,null,null,null,null,null,null)
D.fYU=new C.abb(1,"header")
D.a92=new C.abb(2,"projects")
D.fYV=new C.abb(3,"cashier")
D.a93=new C.abb(4,"familyTree")
D.h9A=new C.cwy(0,"start")
D.h9B=new C.cwz(0,"start")
D.fZi=new C.Yc(null)
D.h_h=new C.YE(null)
D.doC=new A.bl(B.i8,[],A.ax("bl<n,FD>"))
D.d7K=w([],x.E)
D.d7L=w([],x.M)
D.h_O=new C.bdU(D.doC,D.d7K,D.d7L,0,0,null,null)
D.h21=new C.a_1(null)
D.a9L=new C.aJ6(0,"projects")
D.aW6=new C.aJ6(1,"cashier")
D.h7g=new C.aJ6(2,"familyTree")})()};
(a=>{a["aEQ2pZh/GRWuKlzLiI3p0a1f9GE="]=a.current})($__dart_deferred_initializers__);