((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,G,F,E,N,A1,A2,R,A3,A4,M,A5,H,S,T,U,V,A6,A7,W,A8,A9,X,Aa,Ab,Ac,L,Ad,Y,Z,I,O,C={
bA6(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bA6=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uP(null,""),$async$bA6)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.S(y.j)
t=A.mP(b1)
s=A.c0(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dj(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dr(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.an(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qr(t,a1,B.hg,E.E7),$async$bA6)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.P5(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ab(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.S(l!=null&&A.JS(l)?y.l:y.i)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a_(r.a(j.h(a2,a7)),q,p):B.cy
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a0J(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bA6,v)},
af4(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$af4=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uP(null,""),$async$af4)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.S(y.j)
t=A.mP(b6)
s=x.S
r=A.d9(c1,0,A.dI(4,"count",s),A.U(c1).c)
q=F.a0w(new A.J(r,new C.fma(),r.$ti.k("J<ai.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.ae("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fm9(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.an(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$af4)
case 6:l=c5
k=F.P5(l==null?"":l)
if(k==null)throw A.S("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.amf(s,D.d9z,r.b(k.h(0,"cover"))?A.a_(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.S("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dj(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.an(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$af4)
case 10:l=c5
k=l==null?null:F.P5(l)
if(k==null)throw A.S(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d7(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kQ(a5,a2.k("kQ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a8(a9)
b1=A.aN(b0.h(a9,"index"))
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
p=A.cC(new A.bc(h,s),new C.fmb(),s.k("G.E"),p)
p=F.a0w(A.oS(p,3,A.a2(p).k("G.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cy<1>")
b4=A.B(new A.cy(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a0J(s,b9),$async$af4)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.amf(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$af4,v)},
h9D(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fv9(e,f),d,null,!0,!0,x.g2)},
amf:function amf(d,e,f){this.a=d
this.b=e
this.c=f},
fma:function fma(){},
fm9:function fm9(d){this.a=d},
fmb:function fmb(){},
fv9:function fv9(d,e){this.a=d
this.b=e},
bxY(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bxY=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.ba(b1,new C.fc8())){u=null
w=1
break}t=B.d.e2(b1,new C.fc9())
s=$.V()
r=new A.rD()
q=A.G2(r,D.aIn)
p=A.L()
p.r=B.c.gp(0)
q.aW(D.aIn,p)
o=A.L()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fw
n=new C.fce(t)
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
s=$.V()
p=A.a([],x.v)
a3=new A.aP(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aM(a3,o)}else{p=A.a([],x.v)
a3=new A.aP(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aM(a3,o)}w=4
return A.b(r.pY().yD(520,160),$async$bxY)
case 4:w=3
return A.b(b3.hg(B.fQ),$async$bxY)
case 3:b0=b3
u=b0==null?null:J.f8(B.dD.gaO(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxY,v)},
fjR(d){return C.hNE(d)},
hNE(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fjR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bbU()
n=d.x!=null&&d.yk(null).length===0
if(d.x!=null)t=n?D.yo:D.H5
else t=d.gSh()?D.H5:D.aDt
w=3
return A.b(C.bxY(d.ax),$async$fjR)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akZ(s)
r=A.a2E(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aDt}else{p.c=C.w7(q,!0)
p.b=n?D.yo:D.H5}r.a1e(A.fEZ(new C.fjT(p,d,new C.fjU(),t,n,o),null,D.bno,B.vn))
u=r.jE(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fjR,v)},
fqv(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fqv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fjR(d),$async$fqv)
case 3:t=f
s=B.a.i(d.b)
r=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ao(q,0,40)
u=A4.Fz(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqv,v)},
fc8:function fc8(){},
fc9:function fc9(){},
fce:function fce(d){this.a=d},
fjU:function fjU(){},
fjT:function fjT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fjS:function fjS(){},
fvB(d,e){var w=0,v=A.j(x.H)
var $async$fvB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fvF(new A.cq(null,x.J),e),d,null,!0,!0,x.H),$async$fvB)
case 2:return A.h(null,v)}})
return A.i($async$fvB,v)},
bAz(d,e,f,g){return C.hUZ(d,e,f,g)},
hUZ(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bAz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cA.aG(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.P(D.eFj)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fvx(g,r,f),d,null,!0,!0,x.H),$async$bAz)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bAz,v)},
fvG(d,e){var w=0,v=A.j(x.H)
var $async$fvG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fvJ(new A.cq(null,x.J),e),d,null,!0,!0,x.H),$async$fvG)
case 2:return A.h(null,v)}})
return A.i($async$fvG,v)},
aW7:function aW7(d,e){this.c=d
this.a=e},
bZf:function bZf(){},
b86:function b86(d,e){this.b=d
this.a=e},
fvF:function fvF(d,e){this.a=d
this.b=e},
fvC:function fvC(d){this.a=d},
fvD:function fvD(d,e,f){this.a=d
this.b=e
this.c=f},
fvE:function fvE(d,e){this.a=d
this.b=e},
fvx:function fvx(d,e,f){this.a=d
this.b=e
this.c=f},
fvv:function fvv(d){this.a=d},
fvw:function fvw(d,e,f){this.a=d
this.b=e
this.c=f},
fvJ:function fvJ(d,e){this.a=d
this.b=e},
fvH:function fvH(d){this.a=d},
fvI:function fvI(d,e,f){this.a=d
this.b=e
this.c=f},
ff6(d,e){var w=0,v=A.j(x.y),u,t
var $async$ff6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0h(d),$async$ff6)
case 3:t=g
J.n7(t,new C.ff7(e))
u=A.afI(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ff6,v)},
ff7:function ff7(d){this.a=d},
amm:function amm(d,e,f){this.c=d
this.d=e
this.a=f},
aAy:function aAy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dB8:function dB8(d,e){this.a=d
this.b=e},
dAU:function dAU(d,e){this.a=d
this.b=e},
dAX:function dAX(d,e,f){this.a=d
this.b=e
this.c=f},
dAW:function dAW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dAV:function dAV(d,e){this.a=d
this.b=e},
dAY:function dAY(d,e){this.a=d
this.b=e},
dAS:function dAS(){},
dAT:function dAT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dAR:function dAR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dAC:function dAC(d){this.a=d},
dAD:function dAD(d,e,f){this.a=d
this.b=e
this.c=f},
dAE:function dAE(d,e){this.a=d
this.b=e},
dAB:function dAB(d){this.a=d},
dAJ:function dAJ(d,e){this.a=d
this.b=e},
dAA:function dAA(d){this.a=d},
dAK:function dAK(d,e,f){this.a=d
this.b=e
this.c=f},
dAL:function dAL(d,e,f){this.a=d
this.b=e
this.c=f},
dAz:function dAz(d,e){this.a=d
this.b=e},
dAM:function dAM(d,e,f){this.a=d
this.b=e
this.c=f},
dAy:function dAy(d,e){this.a=d
this.b=e},
dAN:function dAN(d,e){this.a=d
this.b=e},
dAx:function dAx(d){this.a=d},
dAO:function dAO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dAv:function dAv(){},
dAp:function dAp(d){this.a=d},
dAq:function dAq(d){this.a=d},
dAw:function dAw(d,e){this.a=d
this.b=e},
dAP:function dAP(d,e){this.a=d
this.b=e},
dAu:function dAu(d){this.a=d},
dAQ:function dAQ(d){this.a=d},
dAt:function dAt(){},
dAF:function dAF(d,e){this.a=d
this.b=e},
dAs:function dAs(d){this.a=d},
dAG:function dAG(d,e,f){this.a=d
this.b=e
this.c=f},
dAr:function dAr(d,e){this.a=d
this.b=e},
dAo:function dAo(d,e){this.a=d
this.b=e},
dAH:function dAH(d){this.a=d},
dAI:function dAI(d,e,f){this.a=d
this.b=e
this.c=f},
dBb:function dBb(){},
dBc:function dBc(d,e){this.a=d
this.b=e},
dB9:function dB9(d){this.a=d},
dBa:function dBa(d){this.a=d},
dB5:function dB5(d,e){this.a=d
this.b=e},
dB6:function dB6(d){this.a=d},
dAZ:function dAZ(d,e,f){this.a=d
this.b=e
this.c=f},
dB_:function dB_(d,e,f){this.a=d
this.b=e
this.c=f},
dB0:function dB0(d,e,f){this.a=d
this.b=e
this.c=f},
dB1:function dB1(d,e,f){this.a=d
this.b=e
this.c=f},
dB2:function dB2(d,e,f){this.a=d
this.b=e
this.c=f},
dB3:function dB3(d,e,f){this.a=d
this.b=e
this.c=f},
dB4:function dB4(d,e,f){this.a=d
this.b=e
this.c=f},
dBd:function dBd(){},
dBe:function dBe(){},
dBf:function dBf(){},
dBg:function dBg(d){this.a=d},
dB7:function dB7(d,e){this.a=d
this.b=e},
h5P(d){return B.d.dH(D.a_j,new C.ffw(d),new C.ffx())},
tL:function tL(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ffw:function ffw(d){this.a=d},
ffx:function ffx(){},
aiI:function aiI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRX:function aRX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rh:function Rh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbF:function bbF(){this.d=$
this.c=this.a=null},
d10:function d10(d,e){this.a=d
this.b=e},
d0Z:function d0Z(d,e){this.a=d
this.b=e},
d1_:function d1_(){},
d11:function d11(d,e){this.a=d
this.b=e},
fRV(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.mV(t,w,v,u==null?new A.Q(Date.now(),0,!1):u)},
JD(d,e){return C.hMh(d,e)},
hMh(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$JD=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$JD)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aF(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d7(p,x.f)
o=A.cC(o,new C.fhs(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a3<G.E>")
o=A.B(new A.a3(o,new C.fht(),n),n.k("G.E"))
B.d.b0(o,new C.fhu())
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
return A.i($async$JD,v)},
A4(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$A4=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$A4)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fui(),x.a)
r=A.B(r,r.$ti.k("ai.E"))
w=4
return A.b(t.ap("String","ngmy_family_book_v1_"+s+"_"+e,B.R.an(r,null)),$async$A4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$A4,v)},
aOb(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aOb=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.JD(d,e),$async$aOb)
case 2:u=h
t=J.cD(u)
s=t.bi(u,new C.fCe(f))
if(s===-1)t.cl(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.A4(d,e,u),$async$aOb)
case 3:return A.h(null,v)}})
return A.i($async$aOb,v)},
byp(d,e,f){var w=0,v=A.j(x.H),u
var $async$byp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.JD(d,e),$async$byp)
case 2:u=h
J.n7(u,new C.feZ(f))
w=3
return A.b(C.A4(d,e,u),$async$byp)
case 3:return A.h(null,v)}})
return A.i($async$byp,v)},
byD(d,e){return C.hMg(d,e)},
hMg(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$byD=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$byD)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.L9
w=1
break}p=B.R.aF(0,q,null)
if(x.f.b(p)){o=A.a_(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aN(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Bq.al(0,o.h(0,"foil")))j=A.cN(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a0M,o.h(0,"position"))?A.cN(o.h(0,"position")):"middle"
g=B.d.t(D.a0f,o.h(0,"frame"))?A.cN(o.h(0,"frame")):"double"
f=B.d.t(D.a0a,o.h(0,"texture"))?A.cN(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cH9,o.h(0,"header"))?A.cN(o.h(0,"header")):"classic"
o=new C.Gs(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.L9
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.L9
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byD,v)},
Q8(d,e,f){return C.hUv(d,e,f)},
hUv(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Q8=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Q8)
case 7:r=h
w=8
return A.b(r.ap("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.an(f.ac(),null)),$async$Q8)
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
return A.i($async$Q8,v)},
PD(d,e){return C.hMi(d,e)},
hMi(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$PD=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$PD)
case 7:r=g
q=r.rA("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.JD(d,e),$async$PD)
case 8:if(!j.cu(g)){n=B.a.i(d.toLowerCase())
m=J.le(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$PD)
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
return A.i($async$PD,v)},
aeo(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aeo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PD(d,e),$async$aeo)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.L(s,t)
w=5
return A.b(A.ay(),$async$aeo)
case 5:w=4
return A.b(g.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aeo)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeo,v)},
a0W(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0W=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.PD(d,e),$async$a0W)
case 2:s=h
J.hG(s,f)
w=3
return A.b(A.ay(),$async$a0W)
case 3:u=h
w=4
return A.b(u.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0W)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0W)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0W)
case 6:return A.h(null,v)}})
return A.i($async$a0W,v)},
mV:function mV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhs:function fhs(){},
fht:function fht(){},
fhu:function fhu(){},
fui:function fui(){},
fCe:function fCe(d){this.a=d},
feZ:function feZ(d){this.a=d},
Gs:function Gs(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bKy:function bKy(d){this.a=d},
hUO(d,e,f,g,h,i,j){return A.a6(d,!1).ck(A.eu(new C.fuO(j,i,f,e,h,g),!0,null,x.H))},
PA(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$PA=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PD(h,g),$async$PA)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ab(k)>=6){d.I(x.q).f.P(D.aKq)
u=!1
w=1
break}w=4
return A.b(C.h9D(d,f,e),$async$PA)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aeo(h,g),$async$PA)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mV(""+(q+n),l,B.a.i(m.b),new A.Q(Date.now(),0,!1)))}w=6
return A.b(C.A4(h,r,p),$async$PA)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Q8(h,r,new C.Gs("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$PA)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$PA,v)},
fuO:function fuO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
XJ:function XJ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axA:function axA(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d1G:function d1G(d){this.a=d},
d1F:function d1F(d,e){this.a=d
this.b=e},
d1u:function d1u(d,e){this.a=d
this.b=e},
d1r:function d1r(d,e){this.a=d
this.b=e},
d12:function d12(d){this.a=d},
d13:function d13(d,e){this.a=d
this.b=e},
d1v:function d1v(d){this.a=d},
d1b:function d1b(d){this.a=d},
d19:function d19(d){this.a=d},
d1a:function d1a(d){this.a=d},
d1c:function d1c(d){this.a=d},
d1s:function d1s(d){this.a=d},
d1t:function d1t(){},
d17:function d17(d){this.a=d},
d18:function d18(d,e){this.a=d
this.b=e},
d1d:function d1d(d){this.a=d},
d1e:function d1e(d,e){this.a=d
this.b=e},
d1E:function d1E(d){this.a=d},
d1D:function d1D(d,e){this.a=d
this.b=e},
d1C:function d1C(d){this.a=d},
d1o:function d1o(d){this.a=d},
d1n:function d1n(d){this.a=d},
d1p:function d1p(d){this.a=d},
d14:function d14(d,e){this.a=d
this.b=e},
d1q:function d1q(d,e){this.a=d
this.b=e},
d1h:function d1h(d){this.a=d},
d1i:function d1i(d){this.a=d},
d1g:function d1g(){},
d1j:function d1j(d){this.a=d},
d1k:function d1k(d){this.a=d},
d1l:function d1l(d,e){this.a=d
this.b=e},
d1m:function d1m(d,e,f){this.a=d
this.b=e
this.c=f},
d1f:function d1f(d,e){this.a=d
this.b=e},
d1x:function d1x(d){this.a=d},
d1w:function d1w(){},
d1y:function d1y(d){this.a=d},
d1z:function d1z(d){this.a=d},
d1A:function d1A(d){this.a=d},
d1B:function d1B(d,e){this.a=d
this.b=e},
d15:function d15(d){this.a=d},
d16:function d16(d){this.a=d},
XN:function XN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bc_:function bc_(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d3q:function d3q(d){this.a=d},
d3r:function d3r(d){this.a=d},
d3p:function d3p(d){this.a=d},
d3s:function d3s(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3t:function d3t(d){this.a=d},
d3n:function d3n(d){this.a=d},
d3u:function d3u(d,e){this.a=d
this.b=e},
d3m:function d3m(d,e){this.a=d
this.b=e},
d3v:function d3v(d,e){this.a=d
this.b=e},
XL:function XL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acT:function acT(d,e,f){this.a=d
this.b=e
this.c=f},
axB:function axB(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d1V:function d1V(d,e){this.a=d
this.b=e},
d1U:function d1U(d,e){this.a=d
this.b=e},
d1Z:function d1Z(d){this.a=d},
d1Y:function d1Y(d,e){this.a=d
this.b=e},
d1W:function d1W(d){this.a=d},
d1X:function d1X(d){this.a=d},
d2_:function d2_(d){this.a=d},
d20:function d20(d){this.a=d},
d1T:function d1T(d,e){this.a=d
this.b=e},
d1S:function d1S(d,e){this.a=d
this.b=e},
IL:function IL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X1:function X1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cAZ:function cAZ(d){this.a=d},
cB_:function cB_(){},
cB0:function cB0(d){this.a=d},
b9h:function b9h(d,e,f){this.b=d
this.c=e
this.a=f},
b98:function b98(d,e){this.b=d
this.a=e},
tM:function tM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xj:function Xj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9f:function b9f(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cUq:function cUq(d,e,f){this.a=d
this.b=e
this.c=f},
cUp:function cUp(d,e){this.a=d
this.b=e},
cUP:function cUP(d){this.a=d},
cUC:function cUC(){},
cUQ:function cUQ(d){this.a=d},
cUB:function cUB(){},
cUR:function cUR(d,e){this.a=d
this.b=e},
cUA:function cUA(d,e){this.a=d
this.b=e},
cUS:function cUS(d,e){this.a=d
this.b=e},
cUz:function cUz(d,e){this.a=d
this.b=e},
cUT:function cUT(d){this.a=d},
cUy:function cUy(){},
cUU:function cUU(d,e){this.a=d
this.b=e},
cUx:function cUx(d,e){this.a=d
this.b=e},
cUV:function cUV(d){this.a=d},
cUK:function cUK(d,e){this.a=d
this.b=e},
cUW:function cUW(d){this.a=d},
cUX:function cUX(d){this.a=d},
cUZ:function cUZ(d){this.a=d},
cV_:function cV_(d){this.a=d},
cUJ:function cUJ(d,e){this.a=d
this.b=e},
cV0:function cV0(d,e){this.a=d
this.b=e},
aEy:function aEy(d){this.a=d},
bes:function bes(d){this.a=d},
b7v:function b7v(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hLf(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.afT(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bx(new A.Q(Date.now(),0,!1))
s=new C.ffA(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a3<1>"),q=q.k("cW<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.x_)m.push(l===D.Xs?"male":"female")
l=u.w
k=A.ae(a3,!0,!1,!1,!1).cA(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ae(a3,!0,!1,!1,!1).cA(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jQ(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jQ(h,a2,a2)-A.jQ(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.al(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cW(new A.a3(a4,new C.ffy(u,f),p),new C.ffz(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ao(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hLg(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.afT(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.ffF(v,e)
q=new C.ffD(v)
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
if(d!=null&&v.al(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.al(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.d8(new A.bc(p,d),d.k("G.E"))
n=A.B(d,A.a2(d).k("cn.E"))
B.d.fn(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gai(e),k=new A.hE(l,new C.ffE(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hx6(d,e,f,g){var w,v,u=C.hLh(d,e)
if(u<=0||f.length<=u)return new A.act(!1,D.Bf,f)
if(g.t(0,e.a))return new A.act(!1,D.Bf,f)
w=A.U(f).c
v=A.d9(f,0,A.dI(u,"count",x.S),w).dA(0)
return new A.act(!0,A.d9(f,u,null,w).dA(0),v)},
hx7(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.afT(d3),d2=d1.length
if(d2===0)return D.fs6
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ce(0,t.a,new C.d27(t))}s=new C.d2o(v)
d2=x.h
r=A.T(w,d2)
q=new C.d2g(r)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d2f(r)
l=A.T(w,x.do)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cd(l.ce(0,k,new C.d28()),o)}h=new C.d2e(s)
g=new C.d2d(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a3<G.E>")
f=A.B(new A.a3(new A.bc(v,p),new C.d29(h),o),o.k("G.E"))
e=f.length===0?new A.bc(v,p).gK(0):B.d.gK(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.b0(w))
if(a0>d){d=a0
e=t}}a1=A.b0(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.gR
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.d2m(new C.d2i(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dw(v,v.r,v.e),j=a2.gaii(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eM([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.al(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qN(J.dG(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d26(a2,new C.d2n(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dw(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cy<1>")
d2=A.B(new A.cy(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.EJ(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.IT(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cy<1>")
d2=A.B(new A.cy(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bG(0,new C.d2a(c6,b4))
for(d2=new A.cP(a4,a4.$ti.k("cP<1,2>")).gai(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gT(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gai(b5),i=new A.hE(j,new C.d2b(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d2c())
c6.push(new C.aGD(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bbK(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h5n(d){var w=A.ae("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cA(d)
return w==null?null:w.b[1]},
h_R(d,e,f,g,h,i,j,k,l,m,n){return new C.Yn(k,f,j,e,l,n,m,d,g,h,i,null)},
azz(d,e,f,g,h,i,j){return new C.bfn(i,d,e,f,j,h,g,null)},
ans:function ans(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aB8:function aB8(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dOv:function dOv(d){this.a=d},
dOu:function dOu(d){this.a=d},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOy:function dOy(d,e){this.a=d
this.b=e},
dOz:function dOz(d){this.a=d},
dOt:function dOt(d,e){this.a=d
this.b=e},
dOw:function dOw(d){this.a=d},
dOB:function dOB(d){this.a=d},
dOA:function dOA(d,e){this.a=d
this.b=e},
anm:function anm(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aB5:function aB5(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dNW:function dNW(d){this.a=d},
dNU:function dNU(d){this.a=d},
dNV:function dNV(d){this.a=d},
dNX:function dNX(d,e){this.a=d
this.b=e},
dNR:function dNR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNp:function dNp(d){this.a=d},
dNq:function dNq(d,e){this.a=d
this.b=e},
dNE:function dNE(d){this.a=d},
dNC:function dNC(d){this.a=d},
dND:function dND(d,e){this.a=d
this.b=e},
dNF:function dNF(d){this.a=d},
dNG:function dNG(d,e){this.a=d
this.b=e},
dNQ:function dNQ(d,e){this.a=d
this.b=e},
dNO:function dNO(d,e){this.a=d
this.b=e},
dNN:function dNN(d,e){this.a=d
this.b=e},
dNJ:function dNJ(d,e){this.a=d
this.b=e},
dNI:function dNI(d){this.a=d},
dNK:function dNK(d,e){this.a=d
this.b=e},
dNH:function dNH(d){this.a=d},
dNL:function dNL(d){this.a=d},
dNM:function dNM(d){this.a=d},
dNP:function dNP(d,e){this.a=d
this.b=e},
dNd:function dNd(d,e){this.a=d
this.b=e},
dNe:function dNe(d,e){this.a=d
this.b=e},
dNZ:function dNZ(d,e,f){this.a=d
this.b=e
this.c=f},
dNT:function dNT(d,e,f){this.a=d
this.b=e
this.c=f},
dNS:function dNS(d){this.a=d},
dNf:function dNf(d){this.a=d},
dNg:function dNg(d){this.a=d},
dNh:function dNh(){},
dNi:function dNi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNm:function dNm(d,e){this.a=d
this.b=e},
dNl:function dNl(d,e){this.a=d
this.b=e},
dNk:function dNk(d){this.a=d},
dNn:function dNn(d,e){this.a=d
this.b=e},
dNj:function dNj(d){this.a=d},
dNY:function dNY(d){this.a=d},
dNz:function dNz(){},
dNA:function dNA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNy:function dNy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNu:function dNu(d,e,f){this.a=d
this.b=e
this.c=f},
dNt:function dNt(d,e,f){this.a=d
this.b=e
this.c=f},
dNr:function dNr(d,e){this.a=d
this.b=e},
dNv:function dNv(d){this.a=d},
dNw:function dNw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNs:function dNs(d,e){this.a=d
this.b=e},
dNx:function dNx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNB:function dNB(d,e){this.a=d
this.b=e},
dO5:function dO5(){},
dO6:function dO6(d,e){this.a=d
this.b=e},
dO7:function dO7(d){this.a=d},
dO8:function dO8(d,e){this.a=d
this.b=e},
dO1:function dO1(d){this.a=d},
dO_:function dO_(d,e){this.a=d
this.b=e},
dO2:function dO2(d,e){this.a=d
this.b=e},
dO3:function dO3(d,e){this.a=d
this.b=e},
dO4:function dO4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dO9:function dO9(d){this.a=d},
dO0:function dO0(d){this.a=d},
dNo:function dNo(d){this.a=d},
bbI:function bbI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d24:function d24(d){this.a=d},
d23:function d23(d,e){this.a=d
this.b=e},
d25:function d25(d){this.a=d},
d22:function d22(d,e){this.a=d
this.b=e},
ffA:function ffA(d,e){this.a=d
this.b=e},
ffB:function ffB(d){this.a=d},
ffC:function ffC(){},
ffy:function ffy(d,e){this.a=d
this.b=e},
ffz:function ffz(){},
ffF:function ffF(d,e){this.a=d
this.b=e},
ffG:function ffG(d){this.a=d},
ffH:function ffH(){},
ffD:function ffD(d){this.a=d},
ffE:function ffE(d,e){this.a=d
this.b=e},
IT:function IT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
EJ:function EJ(d,e){this.a=d
this.b=e},
bbK:function bbK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d27:function d27(d){this.a=d},
d2o:function d2o(d){this.a=d},
d2g:function d2g(d){this.a=d},
d2h:function d2h(){},
d2f:function d2f(d){this.a=d},
d28:function d28(){},
d2e:function d2e(d){this.a=d},
d2d:function d2d(d,e){this.a=d
this.b=e},
d29:function d29(d){this.a=d},
d2i:function d2i(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d2j:function d2j(d){this.a=d},
d2k:function d2k(d){this.a=d},
d2l:function d2l(){},
d2m:function d2m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d2n:function d2n(){},
d26:function d26(d,e,f,g,h,i,j,k,l,m){var _=this
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
d2a:function d2a(d,e){this.a=d
this.b=e},
d2b:function d2b(d){this.a=d},
d2c:function d2c(){},
aGD:function aGD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbL:function bbL(d,e){this.b=d
this.a=e},
d2p:function d2p(){},
d2q:function d2q(d){this.a=d},
d2r:function d2r(d){this.a=d},
d2s:function d2s(){},
bfo:function bfo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baQ:function baQ(d,e){this.b=d
this.a=e},
bsV:function bsV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eZV:function eZV(d){this.a=d},
biG:function biG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eB9:function eB9(d){this.a=d},
eB8:function eB8(d,e){this.a=d
this.b=e},
Yn:function Yn(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
azx:function azx(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dig:function dig(d,e){this.a=d
this.b=e},
dif:function dif(d){this.a=d},
did:function did(d){this.a=d},
die:function die(d){this.a=d},
dip:function dip(d){this.a=d},
diq:function diq(d){this.a=d},
dio:function dio(d,e){this.a=d
this.b=e},
dir:function dir(){},
diu:function diu(d){this.a=d},
din:function din(d,e){this.a=d
this.b=e},
dit:function dit(){},
div:function div(d){this.a=d},
dim:function dim(d,e){this.a=d
this.b=e},
diw:function diw(d){this.a=d},
dil:function dil(d){this.a=d},
dix:function dix(d){this.a=d},
dik:function dik(d){this.a=d},
diy:function diy(d){this.a=d},
dij:function dij(d){this.a=d},
diz:function diz(d){this.a=d},
dii:function dii(d){this.a=d},
diA:function diA(d){this.a=d},
dih:function dih(d,e){this.a=d
this.b=e},
dis:function dis(d){this.a=d},
abl:function abl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfn:function bfn(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
abk:function abk(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bfm:function bfm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
diB:function diB(d){this.a=d},
diC:function diC(d,e){this.a=d
this.b=e},
azy:function azy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFG:function aFG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abm:function abm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
diL:function diL(d){this.a=d},
IH:function IH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fVN(d){var w=d.R,v=x.N
return w.iI(w,new C.c4Q(),v,v)},
hoG(d){var w=d.bB
if(w>=0)return w
return 5},
fVP(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fVN(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
fVO(d,e){var w=C.fVP(d,e)
if(w!=null&&w.c8(new A.Q(Date.now(),0,!1)))return!0
return!1},
hoH(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a_(C.fVN(d),w,w)
u=C.fVP(d,e)
t=u!=null&&u.c8(new A.Q(Date.now(),0,!1))?u:new A.Q(Date.now(),0,!1)
v.n(0,s,t.bM(A.dA(30,0,0,0,0,0).a).a4().ab())
d.R=v},
aXx(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aXx=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l4(t,B.GT),$async$aXx)
case 3:if(l){u=!0
w=1
break}u=A.kJ(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.GT,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXx,v)},
c4Q:function c4Q(){},
hoE(){var w,v=$.p5(),u=J.e1(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"FT"+B.d.fO(u)},
Hm(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Hm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c_(),$async$Hm)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eY("ngmy_family_tree_backup_codes_v1",null,!1,B.bE),$async$Hm)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a_(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a7(m)
$.al.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hm,v)},
a5v(d){return C.hoF(d)},
hoF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a5v=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c_(),$async$a5v)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hx("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,B.cE,null),$async$a5v)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a7(p)
$.al.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a5v,v)},
c4P(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c4P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Hm(),$async$c4P)
case 3:t=m.jn(f),t=t.gai(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
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
return A.i($async$c4P,v)},
Ma(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ma=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c4P(d),$async$Ma)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Hm(),$async$Ma)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dU(A.a_(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.Q(Date.now(),0,!1).a4().ab())
r.n(s,t,o)
w=9
return A.b(C.a5v(s),$async$Ma)
case 9:case 8:u=t
w=1
break
case 5:n=C.hoE()
w=10
return A.b(C.Hm(),$async$Ma)
case 10:s=f
J.aF(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=11
return A.b(C.a5v(s),$async$Ma)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ma,v)},
aXw(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aXw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Hm(),$async$aXw)
case 3:t=f
for(s=J.dg(t),r=s.gdL(t),r=r.dA(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a5v(t),$async$aXw)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aXw,v)},
a5w(d,e,f){var w=0,v=A.j(x.H),u
var $async$a5w=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.anr(d,e),$async$a5w)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ma(d),$async$a5w)
case 7:w=4
break
case 5:w=8
return A.b(C.aXw(d),$async$a5w)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a5w,v)},
anl(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$anl=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.anr(f,e),$async$anl)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c_(),$async$anl)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Hm(),$async$anl)
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
return A.i($async$anl,v)},
aXv(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aXv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c_(),$async$aXv)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Hm(),$async$aXv)
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
return A.i($async$aXv,v)},
hoI(){var w,v=$.p5(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"FT"+B.d.fO(u)},
ano(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ano=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c_(),$async$ano)
case 3:if(!g){u=null
w=1
break}t=C.hoI()
w=4
return A.b(A.TA(),$async$ano)
case 4:s=g
r=B.dF.aG(B.R.an(d.eF(),null))
r=B.cS.gcs().aG(r)
q=e?999:2
J.aF(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=5
return A.b(A.a5x(s),$async$ano)
case 5:p=e?999:2
u=new A.Zx("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ano,v)},
ann(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ann=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.TA(),$async$ann)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aN(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aXv(J.k(l==null?"":l),j),$async$ann)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{r=B.c4.c6(0,B.cA.aG(t))
s=C.fVQ(r)}catch(f){q=A.a7(f)
$.al.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dU(A.a_(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
o.n(p,g,l)}w=5
return A.b(A.a5x(p),$async$ann)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ann,v)},
fVQ(d){var w,v,u,t,s=null
try{w=B.R.aF(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hoK(A.a_(w,x.N,x.z))
return u}catch(t){v=A.a7(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fG1(d){var w=0,v=A.j(x.m),u,t,s
var $async$fG1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ann(t[1])
w=1
break}u=null
w=1
break}u=C.fVQ(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fG1,v)},
hoK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d7(v,x.f)
u=A.cC(u,new C.c4S(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a3<G.E>")
s=A.B(new A.a3(u,new C.c4T(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jn(p),t=t.gai(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d7(l,u)
n=A.cC(n,new C.c4U(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a3<G.E>")
j=A.B(new A.a3(n,new C.c4V(),k),k.k("G.E"))
if(j.length!==0)q.n(0,m,j)}return new C.anp(h,w,s,r,q)},
anr(d,e){var w=0,v=A.j(x.y),u,t
var $async$anr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.M1(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zU(d),$async$anr)
case 3:u=t.cu(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anr,v)},
c50(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c50=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zU(d),$async$c50)
case 3:t=s.b6(f,new C.c51(),x.cs)
t=A.B(t,t.$ti.k("ai.E"))
B.d.b0(t,new C.c52())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c50,v)},
TB(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$TB=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.anr(e,d),$async$TB)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Ma(e),$async$TB)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zU(e),$async$TB)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dG(r,new C.c4Z(g))
r=A.B(t,t.$ti.k("G.E"))}t=J.a8(r)
if(t.gaj(r)){u=null
w=1
break}t=t.dn(r,new C.c5_(e),x.k)
r=A.B(t,t.$ti.k("ai.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.JD(e,o),$async$TB)
case 14:n=i
if(J.cu(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.anp(s,B.a.i(e.toLowerCase()),r,new A.Q(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$TB,v)},
aXA(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aXA=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.TB(d,e,f,g),$async$aXA)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gK(q.c).b:"all-family-trees"
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.Fp(A.IP(q.eF(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXA,v)},
aXz(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aXz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.TB(d,e,f,g),$async$aXz)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ano(r,f),$async$aXz)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aDH(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXz,v)},
TC(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TC=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fG1(a0),$async$TC)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.anl(g.a,d,e,f,s,r),$async$TC)
case 6:if(!a2){if(r)throw A.S(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.S(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.byf(e,j),$async$TC)
case 12:case 11:w=13
return A.b(C.afG(e,j,s),$async$TC)
case 13:h=n.h(0,i)
w=h!=null&&J.cu(h)?14:15
break
case 14:w=16
return A.b(C.A4(e,i,h),$async$TC)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bmb(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$TC,v)},
anp:function anp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c4X:function c4X(){},
c4Y:function c4Y(){},
c4W:function c4W(){},
c4S:function c4S(){},
c4T:function c4T(){},
c4U:function c4U(){},
c4V:function c4V(){},
c51:function c51(){},
c52:function c52(){},
c4Z:function c4Z(d){this.a=d},
c5_:function c5_(d){this.a=d},
fOd(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fc(null,x.H)
return A.hr(d,new C.anq(w,e,g,i,f,h,null),!0,null,x.H)},
d21(d,e,f,g,h,i,j,k){return new C.bbH(i,e,k,j,g,f,h,d,null)},
anq:function anq(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aB7:function aB7(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dOi:function dOi(d){this.a=d},
dOj:function dOj(d,e,f){this.a=d
this.b=e
this.c=f},
dOn:function dOn(d,e){this.a=d
this.b=e},
dOo:function dOo(d){this.a=d},
dOf:function dOf(d){this.a=d},
dOg:function dOg(d,e){this.a=d
this.b=e},
dOh:function dOh(d,e){this.a=d
this.b=e},
dOm:function dOm(d){this.a=d},
dOl:function dOl(d,e){this.a=d
this.b=e},
dOk:function dOk(){},
dOq:function dOq(d){this.a=d},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOp:function dOp(d,e){this.a=d
this.b=e},
d2t:function d2t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bbJ:function bbJ(d,e,f){this.d=d
this.e=e
this.a=f},
aaD:function aaD(d,e,f){this.c=d
this.d=e
this.a=f},
bbH:function bbH(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bbM:function bbM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
YI:function YI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB6:function aB6(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dOa:function dOa(d,e){this.a=d
this.b=e},
dOb:function dOb(d){this.a=d},
dOc:function dOc(d){this.a=d},
dOd:function dOd(d){this.a=d},
dOe:function dOe(d){this.a=d},
YJ:function YJ(d){this.a=d},
bgO:function bgO(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dOs:function dOs(d,e){this.a=d
this.b=e},
aW6(d,e){return new C.aW5(d,e,null)},
aW5:function aW5(d,e,f){this.c=d
this.d=e
this.a=f},
hNJ(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
hUY(d){return A.c2(B.K,null,new C.fvg(new C.tg(A.M(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fXH(d,e){return new C.aqj(e,d,null)},
aNT(d,e,f,g,h,i,j){var w=C.hNJ(i)
if(w!=null)return A.bu(e,new A.a4(j,f,new C.a4z(w,!0,null),null),B.ao)
return K.aNe(e,B.bQ,f,g,h,i,j)},
ln:function ln(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4z:function a4z(d,e,f){this.c=d
this.d=e
this.a=f},
bgw:function bgw(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b1$=e
_.c=_.a=null},
dAg:function dAg(d){this.a=d},
dAh:function dAh(){},
dAi:function dAi(d,e){this.a=d
this.b=e},
bgv:function bgv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fvg:function fvg(d){this.a=d},
fvf:function fvf(d,e){this.a=d
this.b=e},
fve:function fve(d,e){this.a=d
this.b=e},
fvd:function fvd(d,e){this.a=d
this.b=e},
aqj:function aqj(d,e,f){this.c=d
this.d=e
this.a=f},
ccu:function ccu(d,e){this.a=d
this.b=e},
aIZ:function aIZ(){},
hUJ(d){var w=null
return A.cg(w,w,!0,w,new C.fuG(),d,w,!0,!0,x.e2)},
hVU(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.fC4(h,g,f,e),d,w,!0,!0,x.N)},
hUL(d,e){var w=null
return A.cg(w,w,!0,w,new C.fuI(e),d,w,!0,!0,x.dY)},
hUK(d){var w=null
return A.cg(w,w,!0,w,new C.fuH(),d,w,!0,!0,x.c5)},
aQK:function aQK(d,e){this.a=d
this.b=e},
aQJ:function aQJ(d){this.a=d},
aOP:function aOP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuG:function fuG(){},
fC4:function fC4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuI:function fuI(d){this.a=d},
fuH:function fuH(){},
Xl:function Xl(d,e){this.c=d
this.a=e},
awm:function awm(){var _=this
_.d=$
_.c=_.a=_.e=null},
cVc:function cVc(d){this.a=d},
cVd:function cVd(d){this.a=d},
cVb:function cVb(d,e){this.a=d
this.b=e},
cVe:function cVe(d){this.a=d},
cVf:function cVf(d){this.a=d},
Xk:function Xk(d){this.a=d},
awl:function awl(){this.d=$
this.c=this.a=null},
cV8:function cV8(d){this.a=d},
cV9:function cV9(d){this.a=d},
cVa:function cVa(d){this.a=d},
WT:function WT(d){this.a=d},
av5:function av5(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
csM:function csM(){},
csS:function csS(d){this.a=d},
csT:function csT(d){this.a=d},
csU:function csU(d){this.a=d},
csR:function csR(){},
csV:function csV(d){this.a=d},
csW:function csW(d){this.a=d},
csQ:function csQ(){},
csX:function csX(d,e){this.a=d
this.b=e},
csP:function csP(d,e){this.a=d
this.b=e},
csN:function csN(d,e){this.a=d
this.b=e},
csY:function csY(d){this.a=d},
csO:function csO(){},
csZ:function csZ(d){this.a=d},
a_q:function a_q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bsN:function bsN(){this.d=$
this.c=this.a=null},
eZn:function eZn(d,e){this.a=d
this.b=e},
eZo:function eZo(d){this.a=d},
eZp:function eZp(d,e){this.a=d
this.b=e},
a9G:function a9G(d,e){this.a=d
this.b=e},
Ew:function Ew(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bsL:function bsL(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eZl:function eZl(d,e){this.a=d
this.b=e},
auZ:function auZ(d,e){this.c=d
this.a=e},
bsM:function bsM(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eZm:function eZm(d){this.a=d},
bsK:function bsK(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aL7:function aL7(){},
aL8:function aL8(){},
bAb(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bv(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.ol(B.o.u(t),A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.ftw(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aU(B.o.u(s),2,"0")
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Wi(A.dn(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aNv(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aNv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().kL(85,1280,B.eE),$async$aNv)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aNv)
case 8:r=e
if(J.ab(r)===0){u=null
w=1
break}q=C.fXG()
w=9
return A.b(C.cct(q,r),$async$aNv)
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
o=A.a7(l)
$.al.$1("[worksheets] pick photo failed: "+A.t(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aNv,v)},
aNR(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aNR=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.ccq(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cA.aG(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.V().Kq(p,!0,null,i).cK(0,B.fL),$async$aNR)
case 9:n=a1
w=10
return A.b(n.lX(),$async$aNR)
case 10:m=a1
w=11
return A.b(J.aOA(m).hg(B.fQ),$async$aNR)
case 11:l=a1
J.aOA(m).q()
if(l==null){w=8
break}i=J.f8(B.dD.gaO(l))
k="data:image/png;base64,"+B.cS.gcs().aG(i)
if(J.ab(k)<=r){u=k
w=1
break}o=B.k.U(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a7(f)
$.al.$1("[worksheets] thumbnail shrink failed: "+A.t(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aNR,v)},
ftw:function ftw(){},
tg:function tg(d){this.a=d},
aqi:function aqi(d,e,f){this.c=d
this.d=e
this.a=f},
aCz:function aCz(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eyj:function eyj(d,e){this.a=d
this.b=e},
eya:function eya(d){this.a=d},
eyb:function eyb(d){this.a=d},
eyh:function eyh(d,e){this.a=d
this.b=e},
eyg:function eyg(d,e){this.a=d
this.b=e},
eyd:function eyd(d,e){this.a=d
this.b=e},
eyc:function eyc(d,e){this.a=d
this.b=e},
eye:function eye(d){this.a=d},
eyf:function eyf(d,e){this.a=d
this.b=e},
eyi:function eyi(d,e){this.a=d
this.b=e},
ey5:function ey5(d,e){this.a=d
this.b=e},
ey9:function ey9(d){this.a=d},
ey8:function ey8(d,e){this.a=d
this.b=e},
ey7:function ey7(d){this.a=d},
eyk:function eyk(d,e){this.a=d
this.b=e},
eyl:function eyl(d,e){this.a=d
this.b=e},
ey6:function ey6(d,e){this.a=d
this.b=e},
h97(d,e,f){var w="thumbnailPath",v=e.ac()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.Q(Date.now(),0,!1).a4().ab(),"project",v],x.N,x.z)},
ftx(d,e,f){var w=0,v=A.j(x.N),u
var $async$ftx=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.an(C.h97(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ftx,v)},
bAd(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bAd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.ftx(!0,d,e),$async$bAd)
case 4:w=3
return A.b(r.aqg(g,d,e.a),$async$bAd)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dF.aG(B.R.an(C.h97(d,e,null),null))
u="NGMY_WS:"+B.jZ.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAd,v)},
h1b(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fNV(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ab(s)===0)return!1
if(J.cY(s,"NGMYWSSYNC2|"))return!0
if(J.cY(s,"NGMY_WS:"))return!0
if(J.eV(s,t))return!0
if(J.cY(s,"{"))try{w=B.R.aF(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hSM(d){var w,v,u,t=C.h1b(d)
if(t==null)return null
if(C.fNV(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.fNV(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.fNV(v))return v}return null},
fNU(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ab(q)===0)return r
if(J.cY(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cY(q,"NGMY_WS:")){v=B.c4.c6(0,B.cA.aG(J.mp(q,8)))
w=t.a(B.R.aF(0,v,r))}else w=t.a(B.R.aF(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fIy(A.a_(u,x.N,x.z))
return t}catch(s){return r}},
bAc(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bAc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aqf(t[1]),$async$bAc)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fNU(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fNU(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAc,v)},
fNT(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l7(w,v,d.c,d.d,new A.Q(Date.now(),0,!1))},
bzK(){var w=0,v=A.j(x.o),u,t
var $async$bzK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.FA(),$async$bzK)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fNU(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzK,v)},
ha0(d,e,f,g){return A.c2(B.K,null,new C.fBX(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fBX:function fBX(d,e,f){this.a=d
this.b=e
this.c=f},
abH:function abH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eyn:function eyn(d,e){this.a=d
this.b=e},
eyo:function eyo(d,e){this.a=d
this.b=e},
eyp:function eyp(d,e){this.a=d
this.b=e},
eyq:function eyq(d,e){this.a=d
this.b=e},
eym:function eym(d){this.a=d},
aqc:function aqc(d,e,f){this.c=d
this.d=e
this.a=f},
bi9:function bi9(){var _=this
_.c=_.a=_.e=_.d=null},
ey0:function ey0(d,e){this.a=d
this.b=e},
ey1:function ey1(d){this.a=d},
ey2:function ey2(d){this.a=d},
aqh:function aqh(d){this.a=d},
aCy:function aCy(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ey4:function ey4(d){this.a=d},
ey3:function ey3(d){this.a=d},
hrX(d,e,f,g,h){return new C.MM(h,g,d,e,f,null)},
aHk:function aHk(d,e){this.a=d
this.b=e},
MM:function MM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCA:function aCA(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eyN:function eyN(){},
eyJ:function eyJ(d,e){this.a=d
this.b=e},
eyK:function eyK(d){this.a=d},
eyu:function eyu(d){this.a=d},
eys:function eys(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyD:function eyD(d,e){this.a=d
this.b=e},
eyA:function eyA(d,e){this.a=d
this.b=e},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyC:function eyC(d,e,f){this.a=d
this.b=e
this.c=f},
eyy:function eyy(d,e,f){this.a=d
this.b=e
this.c=f},
eyw:function eyw(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyQ:function eyQ(d){this.a=d},
eyP:function eyP(d){this.a=d},
eyR:function eyR(d){this.a=d},
eyO:function eyO(d){this.a=d},
eyr:function eyr(d){this.a=d},
eyv:function eyv(d,e){this.a=d
this.b=e},
eyM:function eyM(d,e){this.a=d
this.b=e},
eyL:function eyL(d,e){this.a=d
this.b=e},
eyG:function eyG(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyI:function eyI(d,e){this.a=d
this.b=e},
eyF:function eyF(d,e){this.a=d
this.b=e},
eyE:function eyE(d,e,f){this.a=d
this.b=e
this.c=f},
buy:function buy(){},
zK(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ae("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
ae7(d,e,f){return C.hHl(d,e,f)},
hHl(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ae7=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ap("String",e,f),$async$ae7)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a7(o)
$.al.$1("[worksheets] setString failed for "+e+": "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ae7,v)},
ae6(d,e){return C.hHk(d,e)},
hHk(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ae6=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ae6)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a7(q)
$.al.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ae6,v)},
hG7(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Rj(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bxg(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bxg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.a_(q,"ngmy:thumb:")
if(!t)t=B.a.a_(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.a_(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b_L(q),$async$bxg)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aNR(q,!1),$async$bxg)
case 6:r=f
if(r!=null&&B.a.a_(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxg,v)},
hfQ(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qy(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qy(p,J.k(u==null?"":u),1,o,q)},
fIy(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d7(s,x.f)
w=A.cC(w,new C.csa(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a3<G.E>")
r=A.B(new A.a3(w,new C.csb(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.l7(w,v,u,r,t==null?new A.Q(Date.now(),0,!1):t)},
hLb(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Xs
case"female":case"f":return D.ag4
default:return D.x_}},
h5Q(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fRW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hLb(v==null?j:J.k(v))
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
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aN(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hS(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hLd(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.La
case"viewer":return D.k8
default:return D.t0}},
hLe(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Fq(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
byw(d,e){return B.a.i(e.toLowerCase())===C.Fq(d,e)&&d.y!==D.k8},
tt(d,e){var w,v=d.y
if(v===D.k8)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Fq(d,e))return!0
if(v===D.La)return!0
v=d.e
return new A.J(v,A.fNZ(),A.U(v).k("J<1,n>")).t(0,w)},
hKE(d){return J.dG(d,new C.feR()).gJ(0)},
fCl(d){var w=0,v=A.j(x.y),u,t
var $async$fCl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zU(d),$async$fCl)
case 3:u=t.qu(f,new C.fCm(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCl,v)},
byf(d,e){var w=0,v=A.j(x.H),u,t
var $async$byf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zU(d),$async$byf)
case 3:t=g
if(J.qu(t,new C.fdQ(e))){w=1
break}if(C.hKE(t)>=2)throw A.S(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$byf,v)},
aiK(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d7(n,x.f)
w=A.cC(w,new C.bKz(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a3<G.E>")
m=A.B(new A.a3(w,new C.bKA(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bKB(),x.N)
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
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kq(l,w,v,!s,t,m,r,q,p,C.hLd(o==null?null:J.k(o)))},
h5Z(d){var w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ao(v,0,8)},
BZ(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Q6(d),$async$BZ)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$BZ)
case 4:t=f
w=5
return A.b(t.a4b(0),$async$BZ)
case 5:w=6
return A.b(C.f5V(t,l),$async$BZ)
case 6:s=f
if(J.cu(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.h1K(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ok(l,n),$async$BZ)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.h1K(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ok(l,n),$async$BZ)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BZ,v)},
f5V(d,e){return C.hDF(d,e)},
hDF(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f5V=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zK(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aF(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.ab(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zK(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aF(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fIy(A.a_(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zK(a9)+"_"+n))
i=C.hG7(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b_L(h),$async$f5V)
case 17:g=b1
if(g!=null){i=i.Rj(g)
p=!0}case 16:J.cd(q,i)
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
case 8:J.Qg(q,new C.f5W())
if(p&&J.ab(q)!==0)C.ok(a9,q)
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
return A.i($async$f5V,v)},
byG(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$byG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Q6(d),$async$byG)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BZ(r),$async$byG)
case 4:t=p.aV(g)
case 5:if(!t.C()){w=6
break}s=t.gT(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byG,v)},
h1K(d){var w,v,u,t
try{w=B.R.aF(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d7(w,x.f)
v=A.cC(v,new C.f1C(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a3<G.E>")
v=A.B(new A.a3(v,new C.f1D(),u),u.k("G.E"))
B.d.b0(v,new C.f1E())
return v}catch(t){v=A.a([],x.D)
return v}},
ok(d,e){return C.hUz(d,e)},
hUz(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ok=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Q6(b2),$async$ok)
case 3:a8=b5
if(J.ab(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$ok)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zK(a8)
p=A.aT(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aF(0,p,null)),new C.fux(),a2).fA(0)
a2=J.b6(b3,new C.fuy(),a2).bX(0,new C.fuz())
n=A.d8(a2,a2.$ti.k("G.E"))
a2=o,a2=A.eh(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eV(n,m)?17:18
break
case 17:a5=C.zK(a8)
l=A.aT(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a6N(l),$async$ok)
case 19:t=21
a5=C.zK(a8)
k=A.aT(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aF(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a6N(a5==null?null:J.k(a5)),$async$ok)
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
return A.b(C.ae6(r,"ngmy_worksheet_item_v3_"+C.zK(a8)+"_"+m),$async$ok)
case 29:w=30
return A.b(C.ae6(r,"ngmy_worksheet_thumb_v3_"+C.zK(a8)+"_"+m),$async$ok)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gai(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bxg(h),$async$ok)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ae7(r,"ngmy_worksheet_thumb_v3_"+C.zK(a8)+"_"+a4,f),$async$ok)
case 40:g=i.Rj(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ae6(r,"ngmy_worksheet_thumb_v3_"+C.zK(a8)+"_"+a4),$async$ok)
case 41:g=i.Rj(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ae6(r,"ngmy_worksheet_thumb_v3_"+C.zK(a8)+"_"+a4),$async$ok)
case 42:case 34:a4=i.a
w=43
return A.b(C.ae7(r,"ngmy_worksheet_item_v3_"+C.zK(a8)+"_"+a4,B.R.an(g.ac(),null)),$async$ok)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cd(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ae7(r,"ngmy_worksheets_index_v3_"+C.zK(a8),B.R.an(q,null)),$async$ok)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eE(b3,new C.fuA(q))
a4=a3.$ti.k("cW<1,a1<n,@>>")
a7=A.B(new A.cW(a3,new C.fuB(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.ae7(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.R.an(a0,null)),$async$ok)
case 45:w=46
return A.b(J.heX(r),$async$ok)
case 46:if(a2.gci(b3)&&J.ab(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a7(b1)
$.al.$1("[worksheets] saveWorksheetProjects error: "+A.t(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ok,v)},
K4(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$K4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BZ(d),$async$K4)
case 3:t=g
s=J.cD(t)
r=s.bi(t,new C.fCk(e))
if(r===-1)s.cl(t,0,e)
else s.n(t,r,e)
u=C.ok(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$K4,v)},
byt(d,e){var w=0,v=A.j(x.H),u
var $async$byt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BZ(d),$async$byt)
case 2:u=g
J.n7(u,new C.ffi(e))
w=3
return A.b(C.ok(d,u),$async$byt)
case 3:return A.h(null,v)}})
return A.i($async$byt,v)},
Fs(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Fs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Fs)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aT(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aF(0,i,null)
if(x.j.b(t)){j=J.d7(t,x.f)
j=A.cC(j,new C.fhy(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a3<G.E>")
r=A.B(new A.a3(j,new C.fhz(),s),s.k("G.E"))
B.d.b0(r,new C.fhA())
k=r}}catch(h){}w=4
return A.b(C.f2l(d),$async$Fs)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hE1(k,p,d)
j=A.U(o)
s=j.k("J<1,a1<n,@>>")
s=A.B(new A.J(o,new C.fhB(),s),s.k("ai.E"))
n=B.R.an(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Pj(d,o),$async$Fs)
case 7:case 6:j=j.k("a3<1>")
m=A.B(new A.a3(o,new C.fhC(d),j),j.k("G.E"))
if(m.length!==0)C.aMq(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Fs,v)},
fuj(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fuj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pj(d,e),$async$fuj)
case 3:t=J.dG(e,new C.fuk(d))
s=A.B(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aMq(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fuj,v)},
a12(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a12=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a12)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aT(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aF(0,l,null)
if(x.j.b(u)){m=J.d7(u,x.f)
m=A.cC(m,new C.fCf(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a3<G.E>")
s=A.B(new A.a3(m,new C.fCg(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pR(o,new C.fCh(e))
if(B.a.i(e.x).length===0&&C.tt(e,d)){m=B.a.i(d.toLowerCase())
p=e.aAW(e.y===D.k8?D.k8:D.t0,m)}else p=e
if(q===-1)J.p9(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Pj(d,o),$async$a12)
case 3:w=C.tt(p,d)?4:5
break
case 4:w=6
return A.b(C.aMp(C.Fq(p,d),p),$async$a12)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a12,v)},
aMA(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aMA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Fs(d),$async$aMA)
case 2:u=g
t=J.cD(u)
s=A.qN(t.eE(u,new C.ff_(e)))
t.bm(u,new C.ff0(e))
w=3
return A.b(C.Pj(d,u),$async$aMA)
case 3:w=s!=null&&C.byw(s,d)?4:5
break
case 4:w=6
return A.b(C.f1G(e),$async$aMA)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aMA,v)},
afT(d){var w=d.f,v=A.U(w).k("a3<1>")
w=A.B(new A.a3(w,new C.fCq(),v),v.k("G.E"))
return w},
fLC(d,e){var w,v=d.f,u=A.qN(new A.a3(v,new C.feB(e),A.U(v).k("a3<1>")))
v=C.afT(d)
w=A.U(v).k("a3<1>")
v=A.B(new A.a3(v,new C.feC(e,u),w),w.k("G.E"))
B.d.b0(v,new C.feD())
return v},
hLh(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
ha3(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bi(C.fLC(d,u),new C.fC5(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hMO(d,e){var w
if(e==null||e.length===0)return 1
w=C.fLC(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fik(),A.U(w).k("J<1,H>")).fv(0,B.ze)+1},
hUs(d){var w,v=C.afT(d)
if(v.length===0)return null
w=new A.a3(v,new C.fug(),A.U(v).k("a3<1>"))
if(!w.gaj(0))return w.gK(0)
return B.d.gK(v)},
hLc(d){return A.E(["id",d.a,"name",d.b,"gender",C.h5Q(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hMJ(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.b0(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.L(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.x_?n:q.c
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
d=q.aAR(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cBJ(a1,w,a3.d,a2.y,s,a0,v)},
zU(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$zU)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aT(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aF(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d7(t,x.f)
p=A.cC(p,new C.fhv(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a3<G.E>")
p=A.B(new A.a3(p,new C.fhw(),s),s.k("G.E"))
B.d.b0(p,new C.fhx())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zU,v)},
afG(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$afG=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.t0:D.k8
a7=C.Fq(b2,b3)
w=2
return A.b(C.zU(b1),$async$afG)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bi(a8,new C.fue(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.byf(b1,b2),$async$afG)
case 5:case 4:if(b0===-1){u=b2.aAW(a6,a7)
a9.cl(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.x_?i:l.c
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
s.n(0,m,l.aAR(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("G.E"))
k=a5?D.t0:D.k8
u=t.xV(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Pj(b1,a8),$async$afG)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aMp(B.a.i(b3.toLowerCase()),u),$async$afG)
case 9:case 8:return A.h(null,v)}})
return A.i($async$afG,v)},
h25(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.Q(Date.now(),0,!1).a4().ab(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("J<1,a1<n,@>>"),k=A.B(new A.J(m,C.h9f(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().ab(),"updatedAt",o],r,x.K),"createdAt",s.a4().ab(),"updatedAt",o],r,x.z)},
h26(d,e){var w=new A.Q(Date.now(),0,!1).a4().ab(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("J<1,a1<n,@>>")
u=A.B(new A.J(u,C.h9f(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().ab(),"updatedAt",w],x.N,x.z)},
hBF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aiK(A.a_(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fNZ(),A.U(j).k("J<1,n>")).bX(0,new C.f28())
t=A.B(j,j.$ti.k("G.E"))
if(u===v)s=D.t0
else s=B.d.t(t,u)?D.La:D.k8
return w.aAW(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aiK(A.a_(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d7(q,h)
h=A.cC(h,new C.f29(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a3<G.E>")
o=A.B(new A.a3(h,new C.f2a(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f2b(),x.N).bX(0,new C.f2c())
t=A.B(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.t0
else s=B.d.t(t,u)?D.La:D.k8
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.Q(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kq(h,r,p,!m,t,o,l,j,v,s)},
f2l(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f2l=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ab(a0)===0){u=null
w=1
break}t=4
r=new C.f2p()
h=x.N
g=x.z
w=7
return A.b(A.iG(A.a([A.ld("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bE),r.$2(A.ld("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bE),"collaborator"),r.$2(A.ld("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bE),"public")],x.cl),x.U),$async$f2l)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.B(p,g)
l=h
J.fW(l,o)
J.fW(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ab(j)!==0)J.aF(m,j,k)}l=m
h=A.a2(l).k("bc<2>")
h=A.cC(new A.bc(l,h),new C.f2m(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a3<G.E>")
l=A.B(new A.a3(h,new C.f2n(),l),l.k("G.E"))
B.d.b0(l,new C.f2o())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a7(a1)
d=J.k(i)
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
h=$.al
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
return A.i($async$f2l,v)},
hE1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gaj(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dn(e,new C.f6A(),v).bX(0,new C.f6B())
t=A.d8(u,u.$ti.k("G.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Fq(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.k8){m=q.e
m=!new A.J(m,A.fNZ(),A.U(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gai(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hMJ(l,v)
o=C.Fq(k,w)
p=v.d
s.n(0,u,o===w?k.b7D(p,D.t0):k.b7D(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("G.E"))
B.d.b0(j,new C.f6C())
return j},
Pj(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Pj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$Pj)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.f8C(),x.a)
s=A.B(s,s.$ti.k("ai.E"))
w=3
return A.b(u.ap("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.an(s,null)),$async$Pj)
case 3:return A.h(null,v)}})
return A.i($async$Pj,v)},
aMp(d,e){return C.hJ2(d,e)},
hJ2(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aMp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lE("family_trees",A.a([C.h25(e,d)],p),null,B.cE),$async$aMp)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lE("family_trees",A.a([C.h26(e,d)],p),null,B.cE),$async$aMp)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a7(n)
$.al.$1("[family_trees] upsert error: "+A.t(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMp,v)},
aMq(d,e){return C.hJ3(d,e)},
hJ3(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aMq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("J<1,a1<n,@>>")
m=n.k("ai.E")
l=A.B(new A.J(e,new C.fdc(d),n),m)
r=l
w=7
return A.b(A.lE("family_trees",r,null,B.cE),$async$aMq)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.J(e,new C.fdd(d),n),m)
p=k
w=8
return A.b(A.lE("family_trees",p,null,B.cE),$async$aMq)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a7(i)
$.al.$1("[family_trees] bulk upsert error: "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMq,v)},
f1G(d){return C.hB2(d)},
hB2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f1G=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.PH("family_trees",A.E(["id",d],x.N,x.z),null,B.cE),$async$f1G)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a7(p)
$.al.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f1G,v)},
qy:function qy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l7:function l7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
csd:function csd(){},
csc:function csc(){},
csa:function csa(){},
csb:function csb(){},
Gt:function Gt(d,e){this.a=d
this.b=e},
hS:function hS(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aiJ:function aiJ(d,e){this.a=d
this.b=e},
feR:function feR(){},
fCm:function fCm(d){this.a=d},
fdQ:function fdQ(d){this.a=d},
kq:function kq(d,e,f,g,h,i,j,k,l,m){var _=this
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
bKD:function bKD(){},
bKC:function bKC(){},
bKz:function bKz(){},
bKA:function bKA(){},
bKB:function bKB(){},
f5W:function f5W(){},
f1C:function f1C(){},
f1D:function f1D(){},
f1E:function f1E(){},
fux:function fux(){},
fuy:function fuy(){},
fuz:function fuz(){},
fuA:function fuA(d){this.a=d},
fuB:function fuB(){},
fCk:function fCk(d){this.a=d},
ffi:function ffi(d){this.a=d},
fhy:function fhy(){},
fhz:function fhz(){},
fhA:function fhA(){},
fhB:function fhB(){},
fhC:function fhC(d){this.a=d},
fuk:function fuk(d){this.a=d},
fCf:function fCf(){},
fCg:function fCg(){},
fCh:function fCh(d){this.a=d},
ff_:function ff_(d){this.a=d},
ff0:function ff0(d){this.a=d},
fCq:function fCq(){},
feB:function feB(d){this.a=d},
feC:function feC(d,e){this.a=d
this.b=e},
feD:function feD(){},
fC5:function fC5(d){this.a=d},
fik:function fik(){},
fug:function fug(){},
fhv:function fhv(){},
fhw:function fhw(){},
fhx:function fhx(){},
fue:function fue(d){this.a=d},
f28:function f28(){},
f29:function f29(){},
f2a:function f2a(){},
f2b:function f2b(){},
f2c:function f2c(){},
f2p:function f2p(){},
f2q:function f2q(d){this.a=d},
f2m:function f2m(d){this.a=d},
f2n:function f2n(){},
f2o:function f2o(){},
f6A:function f6A(){},
f6B:function f6B(){},
f6C:function f6C(){},
f8C:function f8C(){},
fdc:function fdc(d){this.a=d},
fdd:function fdd(d){this.a=d},
cse:function cse(d,e){this.a=d
this.b=e},
csf:function csf(d,e){this.a=d
this.b=e},
aED:function aED(d,e,f){this.a=d
this.b=e
this.c=f},
b5Y:function b5Y(){this.b=this.a=0},
b5X:function b5X(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bsO:function bsO(){},
w7(d,e){var w,v
if(d==null)return""
w=d.bP()
v=""+w.gca()+"/"+w.gcq()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aU(B.o.u(w.gmK()),2,"0")+":"+B.a.aU(B.o.u(w.gFg()),2,"0")},
hrU(){var w,v=$.p5(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"WS"+B.d.fO(u)},
aqd(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aqd=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c_(),$async$aqd)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eY("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bE),$async$aqd)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a_(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a7(m)
$.al.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqd,v)},
aqe(d){return C.hrV(d)},
hrV(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aqe=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c_(),$async$aqe)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hx("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,B.cE,null),$async$aqe)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a7(p)
$.al.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqe,v)},
aqg(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aqg=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c_(),$async$aqg)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hrU()
w=4
return A.b(C.aqd(),$async$aqg)
case 4:r=h
q=B.a.i(e)
p=B.dF.aG(t)
J.aF(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cS.gcs().aG(p),"usesRemaining",25,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=5
return A.b(C.aqe(r),$async$aqg)
case 5:u=new A.Zx("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqg,v)},
aqf(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aqf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c_(),$async$aqf)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aqd(),$async$aqf)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aN(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{s=B.c4.c6(0,B.cA.aG(t))}catch(h){r=A.a7(h)
$.al.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dU(A.a_(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
p.n(q,i,m)}w=5
return A.b(C.aqe(q),$async$aqf)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqf,v)},
fXG(){var w=new A.Q(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cG.aD(999999)},
hrW(d){var w,v,u,t,s,r,q
try{w=A.aew(d)
if(w==null)return d
v=w
if(J.Ka(v)>960||J.K9(v)>960){s=v
r=J.Ka(v)>=J.K9(v)?960:null
v=A.aev(s,J.K9(v)>J.Ka(v)?960:null,B.Ms,r)}s=v
u=A.ak7(82).RE(s,B.xL)
if(J.ab(u)===0)return d
s=new Uint8Array(A.co(u))
return s}catch(q){t=A.a7(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cct(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cct=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hrW(e)
$.ccp.n(0,s,t)
u=C.bAf(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cct,v)},
b_L(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_L=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cY(l,"data:image")){u=null
w=1
break}t=4
r=J.eV(l,",")?B.d.gak(J.lf(l,",")):l
q=B.cA.aG(r)
if(J.ab(q)===0){u=null
w=1
break}p=C.fXG()
w=7
return A.b(C.cct(p,q),$async$b_L)
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
n=A.a7(k)
$.al.$1("[worksheet-thumb] persistDataUrl failed: "+A.t(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b_L,v)},
ccq(d){var w=0,v=A.j(x.T),u,t,s
var $async$ccq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(K.ccs(s),$async$ccq)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ccq,v)},
a6N(d){var w=0,v=A.j(x.H),u,t
var $async$a6N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=K.h98(d)
if(t==null){w=1
break}$.ccp.W(0,t)
w=3
return A.b(C.bAe(t),$async$a6N)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a6N,v)},
bAf(d,e){return C.hSP(d,e)},
hSP(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bAf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aLk
w=7
return A.b(n==null?$.aLk=K.fKE():n,$async$bAf)
case 7:r=g
q=new Uint8Array(A.co(e))
p=J.mq(r,"thumbs","readwrite")
B.iy.lQ(J.mo(p,"thumbs"),q,l)
w=8
return A.b(J.p8(p),$async$bAf)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a7(k)
$.al.$1("[worksheet-thumb idb put] "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAf,v)},
bAe(d){return C.hSN(d)},
hSN(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAe=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aLk
w=7
return A.b(o==null?$.aLk=K.fKE():o,$async$bAe)
case 7:r=f
q=J.mq(r,"thumbs","readwrite")
B.iy.EN(J.mo(q,"thumbs"),m)
w=8
return A.b(J.p8(q),$async$bAe)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a7(l)
$.al.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAe,v)}},D,Ae,Af,P,Ag,Ah,K,Ai,Q,A_
J=c[1]
A=c[0]
B=c[2]
A0=c[193]
G=c[173]
F=c[30]
E=c[183]
N=c[109]
A1=c[111]
A2=c[161]
R=c[114]
A3=c[192]
A4=c[36]
M=c[191]
A5=c[78]
H=c[84]
S=c[130]
T=c[133]
U=c[204]
V=c[162]
A6=c[153]
A7=c[165]
W=c[160]
A8=c[63]
A9=c[69]
X=c[177]
Aa=c[209]
Ab=c[29]
Ac=c[142]
L=c[155]
Ad=c[166]
Y=c[207]
Z=c[200]
I=c[99]
O=c[67]
C=a.updateHolder(c[6],C)
D=c[203]
Ae=c[68]
Af=c[171]
P=c[206]
Ag=c[205]
Ah=c[55]
K=c[53]
Ai=c[75]
Q=c[208]
A_=c[123]
C.amf.prototype={}
C.aW7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bbU(),f=h.x!=null&&h.yk(i).length===0
if(h.x!=null)w=f?B.aZ:B.bM
else w=h.gSh()?B.bM:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.b8c,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.euX,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h1,i,i,i),B.S,D.eXA,B.av,A.d(C.w7(new A.Q(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eTG,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aUD,i,i,i,i,B.Wr,i,i,i)
q=A.m(16)
p=A.I(B.aK,B.r,1)
o=A.I(B.aZ.j(0.28),B.r,1)
n=A.fMz(h.d)
o=A.p(B.A,C.aW6(A.fkI(h.e,n),30),B.f,i,i,new A.o(B.ls,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.ePa,B.L,i,i)
m=A.m(14)
l=A.I(B.aK,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bB,D.eXR,B.aa,A.p(i,A.v(A.a([D.fbm,B.bB,A.d(A.zW(h.c),i,i,i,i,i,i,D.eKk,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f2,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aO,i,p,q,i,i,B.n),i,i,i,i,L.aee,i,i,i)
p=A.m(16)
m=A.I(B.aK,B.r,1)
l=j.aNg("Original due",C.w7(h.r,!1))
n=j.aNg("Current due",C.w7(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaHv(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.A3,i,i,1/0),B.S,j.c8n(),B.P,j.bXI(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aK,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.eYN,B.av,A.d(q,i,i,i,i,i,i,D.eOv,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aO,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaCv()){q=A.m(14)
o=A.I(B.cl,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fcy,B.P,A.bu(A.m(12),A.ef(new A.a4(1/0,88,A.b3(i,i,i,new A.Ur(h.ax,B.M,D.eyF,!0,3.5,i),B.at),i),B.c,!0),B.ao)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.A5,i,i,i)],s))}p.push(B.ay)
p.push(D.f5f)
return A.p(i,A.v(A.a([r,new A.C(B.aeh,A.v(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.Q,0,B.p),B.ao,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aNg(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a5A,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eLk,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c8n(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a7k(B.e1,u,"Not paid yet")
w=t.yk(null).length
v=w===0?B.aZ:B.bM
return this.a7k(v,u,C.w7(t.x,!0))},
bXI(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a7k(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a7k(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a5A,u,u,u)
v=A.U(d).k("J<1,hf>")
v=A.B(new A.J(d,new C.bZf(),v),v.k("ai.E"))
return A.v(A.a([w,B.aq,A.c6(B.bF,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a7k(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a5A,w,w,w),1),new A.dl(1,B.ch,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dJ,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b86.prototype={
a5(d,e){new A.Ur(this.b,B.M,e,!0,3.5,null).a5(d,e)},
aq(d){return d.b!==this.b}}
C.amm.prototype={
S(){return new C.aAy(A.a([],x.bp))},
gdS(){return this.c}}
C.aAy.prototype={
Z(){this.a0()
this.HG()},
HG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$HG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0h(t.a.c),$async$HG)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dB8(t,s))
case 1:return A.h(u,v)}})
return A.i($async$HG,v)},
aP7(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aO,s=A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bn).j(0.22)
w=A.m(10)
return A.bo(v,new A.b4(4,r,new A.az(u,1,B.r,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bq:B.bn).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aSj),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aP6(d){return this.aP7(d,null)},
O5(d){return this.cbW(d)},
cbW(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Ft:B.eE
w=7
return A.b(new A.hT().Bh(72,900,900,n),$async$O5)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$O5)
case 8:p=f
n=B.cS.gcs().aG(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a7(l)
n=r.c
if(n!=null)n.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$O5,v)},
aXd(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aO,o=A.m(10),n=A.I((q?B.bq:B.bn).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bq:B.bn
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aO:B.az,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bq:B.bn
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.ft(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bJ(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.W(B.cu,s.a.d.a?B.bq:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kB,D.bj_,r,r,r)},
Cd(d){return this.buI(d)},
buH(){return this.Cd(null)},
buI(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cd=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.av()
r=new A.ap(new A.bb(a4,B.b0,B.aM),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jB(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.a9(p,2)}o=new A.ap(new A.bb(a4,B.b0,B.aM),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ap(new A.bb(a4,B.b0,B.aM),s)
if(a3){a4=new A.Q(Date.now(),0,!1).bM(6048e8)
m=A.bX(a4.gcd(),a4.gca(),a4.gcq(),0,0,0,0,0)}else{a4=a5.f
m=A.bX(a4.gcd(),a4.gca(),a4.gcq(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fMz(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vg?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hP(B.w.j(0.55),!0,"Dismiss",a4,new C.dAS(),new C.dAT(a2,t,a5,r,new C.dAU(a2,t),o,n,j),B.eL,!0,x.y),$async$Cd)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d3(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.P(D.eF0)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.P(D.eDG)
w=1
break}a1=A.fkI(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vg?"male":"female"
w=7
return A.b(A.afS(a3,A.fUq(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Cd)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vg?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bX(a3.gcd(),a3.gca(),a3.gcq(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bX(a4.gcd(),a4.gca(),a4.gcq(),0,0,0,0,0)))a5.cDP(a2.a)
w=8
return A.b(A.afS(t.a.c,a5),$async$Cd)
case 8:case 5:w=9
return A.b(t.HG(),$async$Cd)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Cd,v)},
aPH(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aO
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bn).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aW6(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aO:B.az
return A.aE(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b7,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ad)},
QF(d){return this.csV(d)},
csV(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$QF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hP(B.w.j(0.55),!0,"Dismiss",s,new C.dBb(),new C.dBc(t,d),B.hU,!0,x.y),$async$QF)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.Q(s,0,!1)
case 4:w=7
return A.b(A.afS(t.a.c,d),$async$QF)
case 7:w=8
return A.b(t.HG(),$async$QF)
case 8:case 1:return A.h(u,v)}})
return A.i($async$QF,v)},
MM(d,e){return this.bFh(0,e)},
bFh(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$MM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kT(s,"Cancel","Delete",e.b+" \xb7 "+A.zW(e.c)+" will be removed from this device.","Delete this debt?"),$async$MM)
case 3:if(!g){w=1
break}w=4
return A.b(C.ff6(t.a.c,e.a),$async$MM)
case 4:w=5
return A.b(t.HG(),$async$MM)
case 5:case 1:return A.h(u,v)}})
return A.i($async$MM,v)},
acG(d){return this.c5W(d)},
c5W(d){var w=0,v=A.j(x.H),u=this,t
var $async$acG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c2(B.K,null,new C.dB5(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$acG)
case 2:return A.h(null,v)}})
return A.i($async$acG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dVj
w=J.dG(m.d,new C.dBd())
v=A.B(w,w.$ti.k("G.E"))
w=J.dG(m.d,new C.dBe())
u=A.B(w,w.$ti.k("G.E"))
t=B.d.cG(v,0,new C.dBf())
w=A.m(18)
s=m.a.d.a
r=s?D.cdf:D.au8
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bGL,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.az,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aE(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.dUJ,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dBg(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ad)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cpd("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zW(t)
r=A.a([A.p(l,A.v(A.a([s,B.aa,A.A(A.a([o,B.ab,A.D(m.b26(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a5(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.aeb,l,l,l),B.ay],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dT:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bn).j(0.12),B.r,1)
n=A.p(l,D.bBN,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.az,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.aa,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bls,l,l,1/0))}else{w=m.gcbe()
s=A.B(new A.J(v,w,A.U(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.aq,new A.C(D.bn7,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.U(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.ai,l,B.e,B.j,0,B.p)},
b26(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bn).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aO:B.az
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eu,u,u,u)},
cpd(d,e){return this.b26(!1,d,e)},
cbf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yk(j).length,h=d.bb6()
if(d.x!=null){w=d.yk(j).length
v=w===0?B.cY:B.bM}else if(d.gSh())v=B.bM
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bn
v=w}if(d.x!=null){w=d.yk(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.w7(u,!1)}else{u.toString
t="Paid "+C.w7(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.w7(w,!1)+" \xb7 "+i+" missed":"Due "+C.w7(w,!1)}w=k.a.d.a?B.dT:B.c
u=A.m(18)
if(d.gSh()&&d.x==null)s=B.bM.j(0.35)
else s=(k.a.d.a?B.bq:B.bn).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.ls
o=A.I(d.gSh()&&d.x==null?B.bM.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fMz(d.d)
o=A.p(B.A,A.db(C.aW6(A.fkI(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aO:B.az
m=x.p
n=A.a([new A.dl(1,B.ch,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaCv())B.d.v(n,A.a([B.e9,A.W(B.Lz,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.d5,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zW(d.c)
l=k.a.d.a?B.aO:B.az
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aE(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(U.adW,A.A(A.a([o,B.be,p,B.ab,A.v(A.a([n,B.bB,A.W(B.en,(k.a.d.a?B.bq:B.bn).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dB7(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ad),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.tL.prototype={}
C.aiI.prototype={
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
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aH(a0,A.p(a0,A.W(B.cu,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.ac))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.jm,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aqL,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Eu,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f1(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.ec)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bic,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cC:B.bi,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fl,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.ezp)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uz,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a5(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.kD,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hd,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a5(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bjr,a0,a0,a0,a0)}}
C.aRX.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bi:B.cC,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.d5,n],m)
if(p.z)o.push(new A.C(B.A1,n,q))
return new A.C(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.Rh.prototype={
S(){return new C.bbF()}}
C.bbF.prototype={
gbSU(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.dVe,D.dVk],l)
for(w=0;w<8;++w){v=D.a_j[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Fb:B.AP
q=t===s
r=A.W(r,q?B.ex:B.bZ,n,n,n,17)
q=q?B.c:B.af
r=A.a([r,B.bp,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bH(1,B.bo,new A.x(v.c,n,Ai.Cj,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aZ(24,24)
p=new A.az(B.ex,2,B.r,-1)
s=new A.o(n,n,new A.bY(p,p,p,p),new A.bv(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aH(n,new A.C(B.eD,A.v(A.a([new A.C(B.m4,new A.cx(B.aX,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.D_(!0,new C.aiI(v,q.d,q.e,new C.d1_(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d10(o,v),n,n,n,n,n,n,!1,B.ac))}k.push(new A.C(D.bjK,A.bM(D.fhx,new C.d11(o,d),A.bk(B.b2,n,n,n,n,B.nM,n,n,new A.b7(A.m(16),B.Z),n,n,n)),n))
return A.bq(!0,new A.cZ(new A.aX(0,1/0,0,m.a.b*0.9),A.cL(k,n,D.bo_,n,n,B.aj,!0),n),!0,!1,B.ah,!0,!0)}}
C.mV.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().ab()],x.N,x.z)},
b7P(d,e,f){return new C.mV(this.a,e,d,f)}}
C.Gs.prototype={
vI(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Gs(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aAL(d){var w=null
return this.vI(w,w,w,w,w,d,w,w,w,w,w,w)},
czH(d){var w=null
return this.vI(w,w,w,w,d,w,w,w,w,w,w,w)},
b7N(d,e,f){var w=null
return this.vI(d,w,w,w,w,w,w,w,e,w,f,w)},
cAl(d){var w=null
return this.vI(w,w,w,w,w,w,d,w,w,w,w,w)},
cAu(d){var w=null
return this.vI(w,w,w,w,w,w,w,w,w,d,w,w)},
czF(d){var w=null
return this.vI(w,w,w,d,w,w,w,w,w,w,w,w)},
cAw(d){var w=null
return this.vI(w,w,w,w,w,w,w,w,w,w,w,d)},
czC(d){var w=null
return this.vI(w,w,d,w,w,w,w,w,w,w,w,w)},
czx(d){var w=null
return this.vI(w,d,w,w,w,w,w,w,w,w,w,w)},
EG(d){var w=null
return this.vI(w,w,w,w,w,w,w,d,w,w,w,w)},
cAE(d,e,f,g,h,i,j,k,l,m,n){return this.vI(d,e,f,g,null,h,i,j,k,l,m,n)},
ac(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cxv(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bKy(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cN(d.h(0,n))).length!==0?B.a.i(A.cN(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cN(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Bq.gec(D.Bq))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a0M)
q=l.$2("frame",D.a0f)
l=l.$2("texture",D.a0a)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cN(d.h(0,"author"))):o
return this.cAE(p,u,t,q,r,A.tq(d.h(0,"ribbon"))?A.F1(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.XJ.prototype={
S(){return new C.axA(A.a([],x.I),D.L9)},
gdS(){return this.c}}
C.axA.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yO(0,1)
w=$.av()
v.z=new A.ap(B.as,w)
v.Q=new A.ap(B.as,w)
v.kx()
w=v.a
C.byD(w.c,w.d).by(new C.d1G(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.av()
u.R$=w
u.O$=0
u=v.Q
u===$&&A.c()
u.R$=w
u.O$=0
v.a1()},
kx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.JD(s.c,s.d),$async$kx)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d1u(t,r))
t.at1()
case 1:return A.h(u,v)}})
return A.i($async$kx,v)},
gapG(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ab(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
at1(){var w,v,u=this.gapG(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saT(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saT(0,w==null?"":w)},
c4m(d){this.m(new C.d1r(this,d))
this.at1()},
M7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$M7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mV(B.o.u(1000*Date.now()),"Untitled page","",new A.Q(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aOb(r.c,r.d,s),$async$M7)
case 3:w=4
return A.b(t.kx(),$async$M7)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.pR(t.d,new C.d12(s))
p=q>=0?q:J.ab(t.d)-1
t.m(new C.d13(t,p))
t.at1()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Ak(p+1,B.cp,B.kx),$async$M7)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$M7,v)},
A0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$A0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gapG()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aOb(o.c,o.d,new C.mV(s,r,q,new A.Q(p,0,!1))),$async$A0)
case 3:w=4
return A.b(t.kx(),$async$A0)
case 4:if(t.c==null){w=1
break}t.m(new C.d1v(t))
case 1:return A.h(u,v)}})
return A.i($async$A0,v)},
MN(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$MN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gapG()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.d1b(r),s,null,!0,!0,x.y),$async$MN)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.byp(s.c,s.d,r.a),$async$MN)
case 4:t.m(new C.d1c(t))
w=5
return A.b(t.kx(),$async$MN)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Sk(B.o.D(t.r+1,0,J.ab(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$MN,v)},
xD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A0(),$async$xD)
case 5:case 4:if(t.c==null){w=1
break}w=J.cu(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.PA(s,r.r,o,p,q),$async$xD)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).M(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h9D(s,r.x,r.r),$async$xD)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.JD(s.c,s.d),$async$xD)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.mV(""+(m+k),q,B.a.i(j.b),new A.Q(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.A4(r.c,r.d,l),$async$xD)
case 11:w=12
return A.b(t.kx(),$async$xD)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xD,v)},
ZI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A0(),$async$ZI)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxB(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dH(D.xS,new C.d1s(t),new C.d1t())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.ma("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gT(o)
p.push(new F.ma(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fOa(o,new F.qR(s,r,"",p,new F.u3(q.d,null,null,null,null,"","","")),null),$async$ZI)
case 6:case 1:return A.h(u,v)}})
return A.i($async$ZI,v)},
Mv(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Mv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A0(),$async$Mv)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c2(D.a9X,null,new C.d17(t),s,!0,!0,!0,D.aIA,!1,!1,x.N),$async$Mv)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.czH(r)
t.m(new C.d18(t,q))
s=t.a
w=7
return A.b(C.Q8(s.c,s.d,q),$async$Mv)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mv,v)},
Vp(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c2(D.a9X,null,new C.d1d(t),r,!0,!0,!0,D.aIA,!1,!1,x.e),$async$Vp)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d1e(t,s))
r=t.a
w=4
return A.b(C.Q8(r.c,r.d,s),$async$Vp)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Ak(0,B.dU,B.oa)
case 1:return A.h(u,v)}})
return A.i($async$Vp,v)},
bKj(d){var w=d.bP(),v=B.a.aU(B.o.u(w.gca()),2,"0"),u=B.a.aU(B.o.u(w.gcq()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gxB(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bSb()
if(r.e)w=D.a8Z
else if(J.ck(r.d)){w=r.y
v=r.gxB(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eJO,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.C(Z.afa,new C.X1(w,v,0,q),q),q),B.bu,t,B.aq,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k2.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aH(q,A.p(q,D.euN,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dM.j(0.45),B.J,18)],x.V),E.v5,B.n),q,q,q,q,B.WB,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcwG(),q,q,q,q,q,q,!1,B.ac))
w.push(B.S)
w.push(A.ha(D.by5,D.fh2,r.gaJc(),q))
B.d.v(u,w)}w=A.au(A.ci(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.ey,q,q,B.aj),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ab(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k2.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dO:B.zc
u=A.v(A.a([new A.C(D.bkM,w,q),A.D(A.HM(v,new C.d1E(r),J.ab(r.d)+1,q,r.gc4l(),u,B.aX),1),r.bxw()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cb(q,D.ab8,new A.am(B.X,q,B.b_,B.q,A.a([D.aH6,A.bq(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],v),q),q,!1,!1,q,q)},
bSb(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cu(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.IL(B.dS,"AI",h.gbvt(),!0))
if(h.a.f)f.push(new C.IL(B.nz,"Cover",h.gbFR(),!1))
if(h.a.f)f.push(new C.IL(B.xv,"Header",h.gbAU(),!1))
if(J.cu(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.IL(B.tg,"Print",h.gcdd(),!1))
if(h.a.f&&J.cu(h.d)&&h.r>=0){v=h.w
u=v?B.ht:B.j6
t=v?"Save":"Edit"
f.push(new C.IL(u,t,v?h.gcjc():new C.d1o(h),!1))}if(h.a.f)f.push(new C.IL(B.hs,"Add page",h.gaJc(),!1))
v=C.h5P(h.y.Q)
u=h.gxB(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ab(h.d)
r=J.ab(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dbQ
else{k=new A.aZ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jD.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.k2,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bY(i,i,i,i),new A.bv(k,k,k,k),g,new A.a5(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k2.j(0.85)
p.push(new A.bH(1,B.bo,A.aH(B.c5,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ac),g))}return new C.aiI(v,u,t+" \xb7 "+s+" "+r,new C.d1p(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
z5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$z5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A0(),$async$z5)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a0w(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.d14(t,p),s,null,!0,!0,x.N),$async$z5)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xD(),$async$z5)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.CM(),$async$z5)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.El("Swahili (Kiswahili)",!0),$async$z5)
case 18:w=16
break
case 17:w=19
return A.b(t.ctw(o==="sw"?"Swahili (Kiswahili)":"English"),$async$z5)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$z5,v)},
Xh(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jD.j(0.3),B.r,1),r=x.p
return new A.C(B.cM,A.aK(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.v5,B.a6),w,42,w,w,w,w,w,42),B.be,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A5.RH,w,w,w),A.d(g,w,w,w,w,w,w,E.a51,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d1q(d,h),w,w,w,w,w,w,w),w)},
CM(){return this.bJO()},
bJO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$CM=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.d1h(r),a7,null,!0,!0,x.ei),$async$CM)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eI("Working on it\u2026",$.av())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.d1i(o),a7,null,!0,!0,x.H).f4(new C.d1j(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cd(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ac()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xS[a1]
J.cd(j,i.a)}w=8
return A.b(C.af4(a0,a7,new C.d1k(o),d,l,e,j),$async$CM)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a7(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).eD()
l=o
l.shJ($.av())
J.aOD(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.P(A.b2(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gci(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ab(p);++a4){if(m.b.al(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b7P(m.b.h(0,a4).b,a7,new A.Q(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.A4(j.c,j.d,l),$async$CM)
case 11:w=12
return A.b(r.kx(),$async$CM)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xS[a1].a)
a5=l.cxv(j,12,a7)
l=r.a
w=15
return A.b(C.Q8(l.c,l.d,a5),$async$CM)
case 15:if(r.c!=null)r.m(new C.d1l(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Ak(0,B.dU,B.oa)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b2(a3?A.cmS("Undo",new C.d1m(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$CM,v)},
El(d,e){return this.ctx(d,e)},
ctw(d){return this.El(d,!1)},
ctx(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$El=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eI("Starting\u2026",$.av())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.d1x(a0),k,null,!0,!0,x.H).f4(new C.d1y(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cd(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a0J(m,new C.d1z(a0)),$async$El)
case 10:w=8
break
case 9:w=11
return A.b(C.bA6(new C.d1A(a0),m,a2),$async$El)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a7(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).eD()
o=a0
o.shJ($.av())
J.aOD(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.P(A.b2(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ab(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b7P(J.q(p,g).b,j.a,new A.Q(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.A4(k.c,k.d,o),$async$El)
case 12:w=13
return A.b(r.kx(),$async$El)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b2(A.cmS("Undo",new C.d1B(r,d),null),null,null,null,null,B.q,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$El,v)},
bxw(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d15(v):u
r=A.aG(u,u,u,u,A.W(D.btO,s?D.k2:B.b9,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cu(v.d)&&!v.w&&v.r>=0)s=A.ha(A.W(B.uK,B.DS,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.DS,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbFq(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k2.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.au(s,u,u,u),1)
w=t<J.ab(v.d)?new C.d16(v):u
return A.bq(!0,new A.C(D.bkA,A.A(A.a([r,s,A.aG(u,u,u,u,A.W(B.en,t<J.ab(v.d)?D.k2:B.b9,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ah,!0,!1)}}
C.XN.prototype={
S(){return new C.bc_(new A.ap(B.as,$.av()))}}
C.bc_.prototype={
ga_Q(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a1()},
gbIB(){var w,v=this.ga_Q()
A:{if("cover"===v){w=D.cIQ
break A}if("book"===v){w=D.cES
break A}w=D.d4L
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jD.j(0.5),n=x.p,m=A.A(A.a([D.dbR,B.aw,D.bpR,A.aG(q,q,q,q,B.l9,q,q,q,new C.d3q(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jE(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d3r(r),r.ga_Q()==="page",q,q,q,q))
if(r.a.d)l.push(A.jE(q,q,q,D.fc6,q,new C.d3s(r),r.ga_Q()==="book",q,q,q,q))
l.push(A.jE(q,q,q,D.f0g,q,new C.d3t(r),r.ga_Q()==="cover",q,q,q,q))
l=A.c6(B.bF,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.U,!1,q,!0,B.q,q,A.aM(),r.d,q,q,q,q,q,2,A.bo(q,new A.b4(4,A.m(16),B.Z),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.km,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ag,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.dj,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbIB(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mr(q,B.c.j(0.08),new A.x(s,q,B.HP,q,q,q,q,q,q,q,q,q),B.hv,new C.d3u(r,s),q,q,q,q))}return A.eB(q,E.zH,A.ci(A.v(A.a([m,B.S,D.ff3,B.aq,l,B.aa,k,B.P,A.c6(B.bF,w,B.bx,6,6),B.ay,A.dp(D.by2,D.ffP,new C.d3v(r,d),A.bk(B.b2,q,q,q,q,B.nM,q,q,new A.b7(A.m(16),B.Z),q,q,q)),B.av,D.faz],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.fv,q,q,B.aj),q,q,q,D.aeV,B.cZ,q,new A.b7(p,new A.az(o,1.4,B.r,-1)),q)}}
C.XL.prototype={
S(){return new C.axB(A.a([],x.Y))},
gdS(){return this.c}}
C.acT.prototype={}
C.axB.prototype={
Z(){this.a0()
this.kx()},
kx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.PD(p.c,p.d),$async$kx)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.byD(r.c,q),$async$kx)
case 6:j=e
i=J
w=7
return A.b(C.JD(t.a.c,q),$async$kx)
case 7:m.push(new l.acT(k,j,i.ab(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d1V(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kx,v)},
b3f(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
OI(d,e){return this.c5U(0,e)},
c5U(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$OI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ck(A.eu(new C.d1U(u,e),!0,null,x.y)),$async$OI)
case 2:t=g
w=3
return A.b(u.kx(),$async$OI)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.P(D.aKu)
return A.h(null,v)}})
return A.i($async$OI,v)},
Eo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Eo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.P(D.aKq)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aeo(s.c,s.d),$async$Eo)
case 5:q=e
w=6
return A.b(t.kx(),$async$Eo)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.OI(0,B.d.kF(t.d,new C.d1Z(q))),$async$Eo)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.PA(p,s.f,r,n,o),$async$Eo)
case 10:m=e
w=11
return A.b(t.kx(),$async$Eo)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.P(D.aKu)
case 1:return A.h(u,v)}})
return A.i($async$Eo,v)},
Oc(d,e){return this.ch_(0,e)},
ch_(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.d1Y(t,e),s,null,!0,!0,x.y),$async$Oc)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0W(s.c,s.d,e.a),$async$Oc)
case 4:w=5
return A.b(t.kx(),$async$Oc)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bxz(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jD.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aH(n,new A.fE(0.7142857142857143,A.p(n,A.v(A.a([D.dbS,B.aa,D.dUp,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k2.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcwC(),n,n,n,n,n,n,!1,B.ac))}w=A.m(22)
v=A.I(E.jD.j(0.85),B.r,1.6)
s=A.aH(n,A.p(n,D.bFA,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jD.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d2_(d),n,n,n,n,n,n,!1,B.ac)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jD.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.be,D.bqc,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eIW,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h1,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bKv,B.n),n,n,n,Ag.W9,D.biE,n,n,n)
if(o.e)k=D.a8Z
else k=k.length===0?D.aZp:A.cl(new C.d20(k))
return A.cb(n,D.ab8,new A.am(B.X,n,B.b_,B.q,A.a([D.aH6,A.bq(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],l),n),n,!1,!1,n,n)},
bxz(d){var w,v,u=this,t=null,s=u.b3f(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f1(B.A,new A.a4(300,420,new C.X1(d.b,s,r,t),t),B.f,B.ds),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aH(t,A.p(t,D.bEW,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b9,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d1S(u,d),t,t,t,t,t,t,!1,B.ac),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eIw,t,t,t)
v=r===1?"page":"pages"
return A.aH(t,A.v(A.a([new A.fE(0.7142857142857143,new A.am(B.X,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k2.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d1T(u,d),t,t,t,t,t,t,!1,B.ac)}}
C.IL.prototype={}
C.X1.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dH(D.xS,new C.cAZ(m),new C.cB_()),j=m.c,i=D.Bq.h(0,j.e),h=A.b_(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mg:B.b7
v=new C.cB0(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.dRP,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.b9h(j.x,h,l),B.at),0,0,0),A.an(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a5(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aZ(3,3)
t.push(new A.cI(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bv(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.afb,8,0.85,2.2),v.$4(D.bnq,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.afb,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.bnm,A.b3(l,l,l,new C.b98(h,l),B.at),l),0,0,0))
r=A.W(D.atk[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aqL,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.aa,p,B.aa,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cC,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.bnS,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b3(l,l,l,new C.aEy(l),D.eyy),l,l,l,46,0,l))
return A.p(l,A.bu(D.a7E,new A.am(B.X,l,B.a9,B.q,t,l),B.ao),B.f,l,l,new A.o(l,l,l,D.a7E,i,new A.a5(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b9h.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f5()
f.dU(11)
switch(this.b){case"plain":return
case"linen":$.V()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.V()
q=A.L()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ag()
l=f.ag()
k=f.ag()
$.V()
j=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
j.r=t.j(0.25+f.ag()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.V()
j=A.a([],l)
h=new A.aP(k.r,B.ap,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbH().a.snapshot()
o.drawPath((h.e=new A.cE(k)).a,r)
r.delete()}break
default:$.V()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.V()
g=A.L()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aq(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b98.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.V(),k=A.L(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eqa,new A.cJ([w,0,-1,1]),new A.cJ([0,v,1,-1]),new A.cJ([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aP(l,B.ap,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ao(r,q))
s.push(new A.ao(r,q+o*34))
m=k.H()
s=n.gbH().a.snapshot()
w.drawPath((n.e=new A.cE(s)).a,m)
m.delete()
s=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.tM.prototype={}
C.Xj.prototype={
S(){return new C.b9f()}}
C.b9f.prototype={
gnz(){var w=this.d
return w===$?this.d=this.a.c:w},
gxB(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ap(new A.bb(w.b,B.b0,B.aM),$.av())}return v},
gay8(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ap(new A.bb(w.c,B.b0,B.aM),$.av())}return v},
gaog(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ap(new A.bb(w.y,B.b0,B.aM),$.av())}return v},
q(){var w=this,v=w.gxB(0),u=v.R$=$.av()
v.O$=0
v=w.gay8()
v.R$=u
v.O$=0
v=w.gaog()
v.R$=u
v.O$=0
w.a1()},
aoS(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jE(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cUq(this,f,u),e===u,s,s,s,s))}return A.c6(B.bF,r,B.bx,6,8)},
auj(d){var w=null,v=B.c.j(0.07)
return A.bo(w,new A.b4(4,A.m(14),B.Z),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lg,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnz(),a0=f.gxB(0),a1=a0.a.a,a2=f.gay8(),a3=a2.a.a,a4=f.gaog(),a5=d.b7N(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a4(190,260,A.f1(B.A,new A.a4(270,370,new C.X1(a5,d,f.a.e,e),e),B.f,B.ds),e),e,e,e)
a0=A.aL(e,B.U,!1,e,!0,B.q,e,A.aM(),a0,e,e,e,e,e,2,f.auj("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cUP(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.U,!1,e,!0,B.q,e,A.aM(),a2,e,e,e,e,e,2,f.auj("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cUQ(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xS[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b9
q=r.a===q
o=new A.az(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bY(o,o,o,o),e,e,new A.a5(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aH(e,A.v(A.a([p,B.d5,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cUR(f,t),e,e,e,e,e,e,!1,B.ac))}v=A.c6(B.bF,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aZ(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.ex:B.K,2,B.r,-1)
q.push(A.aH(e,A.p(e,A.W(D.atk[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bY(o,o,o,o),new A.bv(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cUS(f,n),e,e,e,e,e,e,!1,B.ac))}q=A.c6(B.bF,q,B.bx,8,8)
a4=A.aL(e,B.U,!1,e,!0,B.q,e,A.aM(),a4,e,e,e,e,e,2,f.auj("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cUT(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mp,e,e,e)
m=A.a([],w)
for(l=D.Bq.gdL(D.Bq),l=l.gai(l);l.C();){k=l.gT(l)
j=A.b_(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ex:B.b9
g=r.e===i
o=new A.az(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bY(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aH(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cUU(f,k),e,e,e,e,e,e,!1,B.ac))}m=A.c6(B.bF,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mp,e,e,e)
k=f.gnz()
return new A.C(new A.N(0,0,0,a3.f.d),A.bq(!0,new A.cZ(new A.aX(0,1/0,0,a1.a.b*0.92),A.cL(A.a([D.fa2,B.aa,d,B.aN,a0,B.S,a2,B.ay,D.ffD,B.P,v,B.ay,D.fab,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.kP(e,9,""+B.k.U(f.gnz().f),36,18,new C.cUV(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mp,e,e,e),B.aq,f.aoS(D.a0M,f.gnz().r,new C.cUW(f),D.d7W),B.aa,A.d("BORDER",e,e,e,e,e,e,H.mp,e,e,e),B.aq,f.aoS(D.a0f,f.gnz().w,new C.cUX(f),D.d80),B.aa,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mp,e,e,e),B.aq,f.aoS(D.a0a,f.gnz().x,new C.cUZ(f),D.d9o),B.aq,A.iA(e,B.b2,e,B.ah,e,new C.cV_(f),e,e,e,D.f4P,f.gnz().z),B.bu,A.bM(D.f8Y,new C.cV0(f,a6),A.bk(B.b2,e,e,e,e,B.nM,e,e,new A.b7(A.m(16),B.Z),e,e,e))],w),e,P.aeK,e,e,B.aj,!0),e),!0,!1,B.ah,!0,!0),e)}}
C.aEy.prototype={
a5(d,e){var w,v,u,t=new A.aP($.V().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ao(w,0))
v=e.b
t.E(new A.ao(w,v))
t.E(new A.ao(w/2,v-12))
t.E(new A.ao(0,v))
t.E(new A.bE())
u=A.L()
u.sar(D.bL6.av(0,new A.a9(0,0,0+w,0+v)))
d.aM(t,u)},
aq(d){return!1}}
C.bes.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.V()
w=A.L()
w.sar(D.bKb.av(0,new A.a9(0,0,a3,a4)))
a5.aW(new A.a9(0,0,a3,a4),w)
v=B.k.dE(a2/112)
u=new A.f5()
u.dU(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ag()*20
l=56+u.ag()*40
k=D.cIP[u.aD(9)]
j=u.aD(14)
J.bA(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.by(i,B.h7)
g=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sar(new A.a5(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).av(0,i))
d=g.H()
w.drawRRect(A.et(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
e.r=E.jD.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c4(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
j.r=E.jD.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c4(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aD(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
p.sar(D.bJz.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c4(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
p.r=B.w.j(0.5).gp(0)
p.z=B.ja
d=p.H()
w.drawRect(A.c4(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b1x.j(0.72).gp(0)
a5.aW(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sar(new A.bS(B.A,0.5,B.x,a0,0,A.a([D.b7Q.j(0.22),B.K],t),a0,a0).av(0,A.bT(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b7v.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ae("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cI(14,w*2,v*2.2,v*2,o,o,new A.kE(new A.o(A.ar(D.k2,D.bbN,w/4),o,new A.bY(B.Z,new A.az(B.w.j(0.12),1,B.r,-1),B.Z,B.Z),B.IW,o,o,B.n),B.bc,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aCT,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aZ(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jD.j(0.6),o,o,new A.bv(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.py,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aS3,u,D.bL4,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.an(o,A.b3(o,o,o,new C.aEy(o),D.eyt),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aRX(p.y,r,G.ij,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.U,!1,o,!0,B.q,o,A.aM(),p.r,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ij.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eVV,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ij.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.U,!1,o,!0,B.q,o,A.aM(),p.w,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ij.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,o,B.ag,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eNh,!0,B.a5,B.yE,B.am,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.eVO,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ij.j(0.5),o,o,o,o,o,o,o,o,11,B.cC,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.DD.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fl,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.DD.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.DD.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ij.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Wi(A.dn(A.a([A.dn(o,o,o,o,o,o,o,o,o,D.eQi,B.a.ao(k,0,1)),A.dn(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ij.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ci(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.z,o,o,o,o,B.aj)}s.push(A.D(n,1))
s.push(new A.C(B.ir,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ij.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bu(B.IW,new A.am(B.X,o,B.a9,B.q,A.a([t,new A.C(D.bmU,A.v(s,B.ai,o,B.e,B.j,0,B.p),o),A.an(0,A.bW(o,new A.o(o,o,o,o,o,new A.a5(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bc),o,o,0,o,0,22)],m),o),B.ao),B.f,o,o,new A.o(o,o,o,B.IW,v,D.bLA,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.am(B.X,o,B.a9,B.q,l,o)}}
C.ans.prototype={
S(){return new C.aB8(A.a([],x._))},
bo(){return this.r.$0()},
pe(){return this.w.$0()},
gdS(){return this.c}}
C.aB8.prototype={
Z(){var w,v
this.a0()
this.ve()
w=this.a
v=w.c
if(v.length!==0)C.a5w(v,w.e,w.d.w)},
v3(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$v3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fOd(r,t.e,!1,s.w,new C.dOv(u),null,s),$async$v3)
case 2:w=3
return A.b(u.ve(),$async$v3)
case 3:return A.h(null,v)}})
return A.i($async$v3,v)},
YU(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$YU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fOd(r,t.e,!0,s.w,new C.dOu(u),null,s),$async$YU)
case 2:w=3
return A.b(u.ve(),$async$YU)
case 3:return A.h(null,v)}})
return A.i($async$YU,v)},
ve(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$ve=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zU(q.a.c),$async$ve)
case 7:p=e
if(q.c!=null)n=q.e||J.cu(p)
else n=!1
if(n)q.m(new C.dOx(q,p))
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
return A.b(C.Fs(q.a.c).cK(0,B.pa),$async$ve)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dOy(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dOz(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ve,v)},
Nh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Nh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.P(D.eC5)
w=3
return A.b(C.Fs(t.a.c),$async$Nh)
case 3:r=e
w=4
return A.b(C.fuj(t.a.c,r),$async$Nh)
case 4:q=e
w=5
return A.b(C.Fs(t.a.c),$async$Nh)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dOt(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ab(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b2(null,null,null,q?B.dv:B.cR,null,B.q,null,s,null,B.m_,null,null,null,null,null,null,null,null,null,null))
t.a.pe()
case 1:return A.h(u,v)}})
return A.i($async$Nh,v)},
GV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hUK(l),$async$GV)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hoG(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aXx(q,p.e,l,"Each family tree costs $"+B.k.a9(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$GV)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h5Z(r)
o=Date.now()
n=t.a.c
m=new C.kq(l,r.toUpperCase(),p,!0,B.U,D.Bf,new A.Q(o,0,!1),0,n,D.t0)
w=5
return A.b(C.a12(n,m),$async$GV)
case 5:w=6
return A.b(t.ve(),$async$GV)
case 6:t.a.bo()
t.a.pe()
if(t.c==null){w=1
break}t.Dy(m)
case 1:return A.h(u,v)}})
return A.i($async$GV,v)},
Dy(d){return this.c7U(d)},
c7U(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Dy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zU(u.a.c),$async$Dy)
case 2:n=l.qN(k.dG(f,new C.dOw(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hr(m,new C.anm(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Dy)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a12(u.a.c,o),$async$Dy)
case 6:case 5:w=7
return A.b(u.ve(),$async$Dy)
case 7:u.a.pe()
return A.h(null,v)}})
return A.i($async$Dy,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=new C.tg(p)
if(r.e)return A.au(A.mu(q,p?B.bq:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dT:B.c
v=A.m(15)
u=A.aE(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bz7,B.f,q,q,new A.o(B.aT.j(0.12),q,A.I(B.aT,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cJ,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc6Z(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ad)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.az,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Ew(A.p(q,A.v(A.a([u,B.aN,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e_,A.bM(D.fgO,r.gaNc(),A.bk(B.bS,q,q,q,q,q,Af.WE,q,new A.b7(A.m(12),B.Z),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bmQ,q,q,1/0),15,B.ah,1.05,D.a6n,q)}w=J.ab(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.az,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cu(r.d))w.push(A.aG(q,q,q,q,A.W(B.xC,B.aT,q,q,q,q),q,q,q,new C.dOB(r),q,q,q,q,"Sync family trees with database",q))
if(J.cu(r.d))w.push(A.aG(q,q,q,q,A.W(B.xt,B.aT,q,q,q,q),q,q,q,r.gadm(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.ak6,D.eZb,r.gaNc(),A.bk(B.bS,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ab(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.aa)
u.push(new C.Ew(r.ctB(J.q(r.d,s),o),14,B.ah,1,D.a6n,q))
B.d.v(w,u)}return A.v(A.a([p,B.ay,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
ctB(d,e){var w=null,v=e.a,u=v?B.dT:B.c,t=A.m(14),s=A.I((v?B.dY:B.bX).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ei,10)],x.V),q=A.m(14),p=A.p(w,D.byb,B.f,w,w,new A.o(B.aT.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aO:B.az,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gamd(),m=d.d?"":" \xb7 Public",l=d.y===D.k8?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aE(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.bA,A.A(A.a([p,B.be,l,A.W(B.Lj,v?B.bq:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dOA(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ad),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.anm.prototype={
S(){return new C.aB5(A.a([],x._),A.b0(x.N),A.b58())},
bo(){return this.r.$0()},
gdS(){return this.c}}
C.aB5.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.aal()
w=u.a
v=w.c
if(v.length!==0)C.a5w(v,w.e,w.d.w)},
q(){var w=this.w
w.R$=$.av()
w.O$=0
this.a1()},
a0K(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.x5("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dNW(r),s,null,!0,!0,x.y),$async$a0K)
case 3:if(e!==!0||t.c==null){w=1
break}t.Im()
t.m(new C.dNX(t,r))
w=4
return A.b(t.v5(),$async$a0K)
case 4:t.a.bo()
t.x5(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0K,v)},
cjR(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.dNR(w,f,d,e))},
aPm(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dj()
u.dZ(w,v,0,1)
u.jj(q,q,1,1)
this.w.sp(0,u)},
b5t(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eC(new Float64Array(16))
q.dT(r)
w=q.BM()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dj()
t.dZ(r,u,0,1)
t.jj(v,v,1,1)
t.dZ(-r,-u,0,1)
t.ii(0,q)
s.sp(0,t)},
aal(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aal=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zU(u.a.c),$async$aal)
case 2:t=s.qN(r.dG(e,new C.dNp(u)))
if(t!=null&&u.c!=null)u.m(new C.dNq(u,t))
return A.h(null,v)}})
return A.i($async$aal,v)},
x5(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
v3(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$v3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fOd(o,t,!1,r,new C.dNE(u),q.a,s),$async$v3)
case 2:n=A
m=J
w=3
return A.b(C.Fs(u.a.c),$async$v3)
case 3:p=n.qN(m.dG(e,new C.dNF(u)))
if(p!=null&&u.c!=null)u.m(new C.dNG(u,p))
return A.h(null,v)}})
return A.i($async$v3,v)},
Im(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cv(w,0)},
v5(){var w=0,v=A.j(x.H),u=this,t,s
var $async$v5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a12(t,s),$async$v5)
case 2:return A.h(null,v)}})
return A.i($async$v5,v)},
a_n(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tt(q,t.a.c)){t.x5("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hVU(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a_n)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Im()
t.m(new C.dNQ(t,r))
w=4
return A.b(t.v5(),$async$a_n)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_n,v)},
Z6(){return this.c7W()},
c7W(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Z6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tt(q,t.a.c)){t.x5("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.M(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dNO(r,new C.tg(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Z6)
case 3:if(e!==!0||t.c==null){w=1
break}t.Im()
t.m(new C.dNP(r,t))
w=4
return A.b(t.v5(),$async$Z6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z6,v)},
Ug(d){return this.buF(d)},
buF(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ug=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tt(r,t.a.c)){t.x5("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dNd(t,d),r,null,!0,!0,x.P),$async$Ug)
case 3:s=f
if(s==null){w=1
break}t.Im()
t.m(new C.dNe(t,s))
w=4
return A.b(t.v5(),$async$Ug)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ug,v)},
a15(d){return this.cvG(d)},
cvG(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a15=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.M(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dNZ(u,d,new C.tg(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a15)
case 2:return A.h(null,v)}})
return A.i($async$a15,v)},
c4g(d){var w=this,v=w.d
v===$&&A.c()
if(C.tt(v,w.a.c))w.MX(d)
else w.a15(d)},
afP(d,e){return this.cnH(d,e)},
cnH(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$afP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.M(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.dNT(new C.tg(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$afP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$afP,v)},
H_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$H_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.k8?3:5
break
case 3:w=6
return A.b(C.fCl(t.a.c),$async$H_)
case 6:s=e
o=t.a
r=C.fVO(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.afP(!s,!r),$async$H_)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.byw(o,t.a.c)){t.x5("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kT(o,"Cancel","Remove",q.y===D.k8?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$H_)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aMA(t.a.c,t.d.a),$async$H_)
case 11:t.a.bo()
o=t.c
if(o==null){w=1
break}A.iJ(o,null)
case 1:return A.h(u,v)}})
return A.i($async$H_,v)},
a7X(d){return this.bFy(d)},
bFy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tt(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.ba(s,new C.dNf(p))){o=A.U(s)
p.a=A.qN(new A.cW(new A.a3(s,new C.dNg(d),o.k("a3<1>")),new C.dNh(),o.k("cW<1,n>")))}q=p.a
if(q==null)q=d.d
t.Im()
t.m(new C.dNi(t,s,d,q))
w=3
return A.b(t.v5(),$async$a7X)
case 3:t.x5(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7X,v)},
MX(d){return this.bHy(d)},
bHy(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$MX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tt(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a15(d),$async$MX)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dNm(t,d),r,null,!0,!0,x.P),$async$MX)
case 6:s=f
if(s==null){w=1
break}t.Im()
t.m(new C.dNn(t,s))
w=7
return A.b(t.v5(),$async$MX)
case 7:case 1:return A.h(u,v)}})
return A.i($async$MX,v)},
ctV(){var w=this,v=w.d
v===$&&A.c()
if(!C.tt(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dNY(w))
w.v5()},
X3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$X3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.byw(n,t.a.c)){t.x5("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.M(n)
s=$.av()
r=new A.ap(B.as,s)
q=t.d.e
p=A.bl(new A.J(q,t.gc2M(),A.U(q).k("J<1,n>")).bX(0,new C.dNz()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dNA(t,new C.tg(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$X3)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.Im()
t.m(new C.dNB(t,p))
w=4
return A.b(t.v5(),$async$X3)
case 4:t.x5("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$X3,v)},
c2N(d){return B.a.i(d.toLowerCase())},
c6K(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tt(v,w)
t=r.d
s=C.hLg(t)
C.hUO(q,t.b,u,C.hLf(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tg(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a3(l,new C.dO5(),A.U(l).k("a3<1>")).gJ(0)
l=n?B.bW:B.iH
v=A.W(B.XG,n?B.bq:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.A8,A.aK(!1,o,!0,new A.C(B.hD,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dO6(p,d),o,o,o,o,o,o,o),o),new A.C(B.mM,p.bSc(m),o)],u)
if(p.d.y===D.k8){t=B.qJ.j(0.15)
s=A.m(12)
r=A.I(B.qJ.j(0.45),B.r,1)
q=C.Fq(p.d,p.a.c)
v.push(new A.C(B.wN,A.p(o,A.A(A.a([D.bDk,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.az,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.j4,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.az,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.tt(p.d,p.a.c)&&p.e.length!==0)u.push(new C.IH("Undo",B.tl,p.gctU(),m,o,o))
u.push(new C.IH("Family Book",D.bsV,p.gc6J(),m,B.rv,o))
if(C.tt(p.d,p.a.c))u.push(new C.IH("Display settings",B.AT,p.gc7V(),m,B.aZ,o))
u.push(new C.IH("Sync",B.xt,p.gadm(),m,o,o))
t=p.d
if(t.y===D.k8||C.byw(t,p.a.c)){t=p.d.y===D.k8?"Remove shared tree":"Delete tree"
u.push(new C.IH(t,B.e8,p.gbFI(),m,B.fS,o))}if(C.tt(p.d,p.a.c))u.push(new C.IH("Add member",B.uX,new C.dO7(p),m,B.bS,o))
v.push(new A.C(P.aen,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gamd()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cl(new C.dO8(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?L.XK:W.Lk,o,o,o,o,o)
v.push(A.au(A.ha(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dO9(p),o),o,o,o))}return A.cb(o,l,A.bq(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)},
bSc(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fr.j(0.35),B.dp,18)],x.V)
u=A.m(22)
t=A.an(-26,A.W(B.xl,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aE(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bGj,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cJ,!0,m,m,m,m,m,m,m,m,m,m,m,n.gadm(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ad)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eLI,m,m,m)
r=r.gamd()
p=n.d.gamd()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.D(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tt(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bDw,m,m,m,n.gchk(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j7:B.m9
r=r?"Private":"Public"
r=A.D(n.asr(q,"Privacy",r,n.a.d.w?n.gcsZ():m),1)
q=A.D(n.asr(B.xu,"Tree code",n.d.c,new C.dNo(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.aa,A.A(A.a([r,B.ab,q,B.ab,A.D(n.asr(D.buD,"Collaborators",p,n.gbWx()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.k8){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aE(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fN,A.A(A.a([A.W(B.ol,B.c,m,m,m,14),B.e9,A.d("View only",m,m,m,m,m,m,B.aLD,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ad)],o))}return A.p(m,A.bu(u,new A.am(B.X,m,B.a9,B.q,A.a([t,new A.C(B.Ei,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ao),B.f,m,m,new A.o(m,m,m,w,v,D.bJD,B.n),m,m,m,m,m,m,m,1/0)},
asr(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aE(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(I.afs,A.v(A.a([A.W(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.tU,A.d(f,w,1,B.a2,w,w,w,I.a5_,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ad)}}
C.bbI.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gaj(r)&&s.c.length===0)return B.bG
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bbL(s,t),new A.as(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dn(r,new C.d24(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d25(this),A.U(r).k("J<1,r>")))
return new A.C(B.rX,new A.a4(w,v,new A.am(B.X,t,B.a9,B.f,u,t),t),t)}}
C.IT.prototype={}
C.EJ.prototype={}
C.bbK.prototype={
gbdK(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aGD.prototype={}
C.bbL.prototype={
bHg(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.V()
v=A.L()
v.r=B.by.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bz(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aP(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pf(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pf(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bE())
q=A.L()
q.r=B.c.gp(0)
d.ae(new A.u(u,w),9,q)
q=A.L()
q.r=B.by.gp(0)
d.aM(t,q)},
bHe(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.d2p())
w=f.b
v=w+(B.d.gK(a0).b-w)/2
u=B.d.ba(a0,new C.d2q(f))
t=new A.J(a0,new C.d2r(f),A.U(a0).k("J<1,O>")).bX(0,new C.d2s()).cG(0,1/0,B.w3)
w=f.a
d.bz(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lI(m)
i=Math.min(10,l/2)
l=$.V()
h=A.a([],q)
g=new A.aP(l.r,B.ap,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cR(w,v,w+l,v))
h.push(new A.ao(n-l,v))
h.push(new A.cR(n,v,n,v+i))
h.push(new A.ao(n,o.b))
k=e.H()
n=g.gbH().a.snapshot()
r.drawPath((g.e=new A.cE(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.V()
w=A.L()
w.r=B.bS.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fw
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bHe(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bHg(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.bfo.prototype={
gc0C(){var w=this.c
if(B.a.i(w.y).length!==0)return D.d4K
switch(w.c.a){case 0:return D.cAX
case 1:return D.cLz
case 2:return D.d_E}},
gc0F(){var w=this.c,v=C.h5n(w.w),u=C.h5n(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=t.gc0C(),p=t.c,o=K.bzp(p.f),n=t.gc0F(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.az:B.c,j=A.I(r?B.az:B.c,B.r,2)
if(o!=null)w=A.rI(B.A,s,B.cn,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gK(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a5(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hQ(w,B.ao),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a5(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Ey,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.az:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eVq,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.boH,s,s,s),s,s,s,-6,-4,s))}k=r?B.cB:B.c
j=A.m(8)
w=A.I(B.d.gK(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dz,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cB,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aP:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aH(s,new A.a4(84,112,A.v(A.a([new A.am(B.X,s,B.a9,B.f,l,s),B.av,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aTT,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.boS,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ac)}}
C.baQ.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.V()
w=A.L()
v=this.b
u=v?B.c:D.b41
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.bsV.prototype={
B(d){var w=this,v=null,u=new C.eZV(w),t=w.c,s=t?B.cB:B.c,r=A.m(12),q=u.$3(B.hs,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bH:B.f6,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xq,"Zoom out",w.e)
return A.aE(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bH:B.f6,v,v,v,1,v,v,v,v,v,22),u.$3(B.ahJ,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dl,v,v,v,B.ad)}}
C.biG.prototype={
B(d){var w=this,v=null,u=B.bS.j(0.15),t=A.I(B.bS,B.r,2),s=w.e,r=x.p
t=A.aH(v,A.p(v,A.v(A.a([A.W(s?L.XK:W.Lk,B.bS,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eRR,v,v,v)],r),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ac)
u=A.a([t,B.aq,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.ePR,B.L,v,v)],r)
if(s){t=A.a([B.aq],r)
s=w.d
B.d.v(t,new A.J(s,new C.eB9(w),A.U(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a4(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Yn.prototype={
S(){return new C.azx()},
bo(){return this.Q.$0()},
gdS(){return this.w}}
C.azx.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.av()
r.d!==$&&A.aR()
r.d=new A.ap(new A.bb(t,B.b0,B.aM),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aR()
r.e=new A.ap(new A.bb(t,B.b0,B.aM),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aR()
r.f=new A.ap(new A.bb(t,B.b0,B.aM),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aR()
r.r=new A.ap(new A.bb(t,B.b0,B.aM),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aR()
r.w=new A.ap(new A.bb(t,B.b0,B.aM),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aR()
r.x=new A.ap(new A.bb(t,B.b0,B.aM),s)
t=u?q:v.c
r.y=t==null?D.x_:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hMO(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.av()
u.O$=0
u=v.e
u===$&&A.c()
u.R$=w
u.O$=0
u=v.f
u===$&&A.c()
u.R$=w
u.O$=0
u=v.r
u===$&&A.c()
u.R$=w
u.O$=0
u=v.w
u===$&&A.c()
u.R$=w
u.O$=0
u=v.x
u===$&&A.c()
u.R$=w
u.O$=0
v.a1()},
Od(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Od=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fVO(p.y,p.w)
w=3
return A.b(A.l4(t.a.w,B.GT),$async$Od)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aXx(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Od)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hoH(p.y,p.w)
t.a.bo()
case 5:w=7
return A.b(Ah.FB(78,800),$async$Od)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dig(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Od,v)},
c0E(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hS(B.o.u(1000*Date.now()),w,D.x_,null,null,null,"","","","","",1,!1,0)
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
s=v.aAR(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).M(s)},
a7y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a7y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dif(r),s,null,!0,!0,x.y),$async$a7y)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).M(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a7y,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H,i=new C.tg(j),h=l.a.e,g=A.U(h).k("a3<1>"),f=A.B(new A.a3(h,new C.dip(l),g),g.k("G.E"))
h=j?B.dT:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bnb,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aO:B.az,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hl(A.aK(!1,k,!0,new A.C(B.m3,A.W(B.e8,B.o7,k,k,k,17),k),B.cJ,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbCp(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jj:B.iK
t=K.bzp(l.as)
if(l.as==null)s=A.W(B.oe,j?B.bq:B.bn,k,k,k,40)
else s=k
s=A.au(A.aH(k,new A.am(B.X,k,B.a9,B.q,A.a([A.hm(u,t,s,k,42),A.an(0,A.hm(B.bS,k,D.bxf,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc0B(),k,k,k,k,k,k,!1,B.ac),k,k,k)
t=l.d
t===$&&A.c()
t=C.azz(t,"Full name",B.m5,1,1,i,B.lJ)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bfm(i,u,new C.diq(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bgJ],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dir(),A.U(o).k("J<1,eK<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bgL],q)
B.d.v(q,new A.J(f,new C.dit(),A.U(f).k("J<1,eK<n?>>")))
o=A.v(A.a([t,B.aq,new C.abk(i,r,"Who is their parent?",p,new C.diu(l),k,o),B.ay,n,B.aq,new C.abk(i,m,"Who is their spouse / partner?",q,new C.div(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.azz(q,"Birth date",D.agP,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.azz(m,"Birth place",B.XZ,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.azz(n,"Date of death (if deceased)",D.aiY,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.azz(p,"Occupation",B.Z4,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.A,k,B.a9,B.q,w,k),B.ay,s,B.bu,new C.abl(i,"Identity",u,k),B.aa,new C.abl(i,"Family links",o,k),B.aa,new C.abl(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.azz(r,"Notes",B.kG,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.aa,new C.azy(i,"Child order",l.c86(l.at),new C.diw(l),new C.dix(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fLC(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.diy(l):k
B.d.v(r,A.a([B.S,new C.azy(i,"Visible in tree",u,w,new C.diz(l),k)],v))}r.push(B.S)
w=j?B.jj:B.iK
u=A.m(14)
t=A.I(j?B.dY:B.bX,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aO:B.az,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iA(k,B.bS,k,B.ah,k,new C.diA(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.ae_,k,k,k))
r.push(B.bu)
w=j?B.aO:B.az
j=j?B.dY:B.bX
r.push(A.A(A.a([A.D(A.dX(B.n5,new C.dis(d),A.dd(k,k,k,k,k,k,k,k,k,w,k,k,B.ce,k,new A.b7(A.m(14),B.Z),new A.az(j,1,B.r,-1),k,k,k,k)),1),B.be,A.D(A.bM(D.euV,l.gc0D(),A.bk(B.aT,k,k,0,B.c,k,B.ce,k,new A.b7(A.m(14),B.Z),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.eq(B.h5,k,B.ah,h,new A.a4(420,k,A.ci(A.v(r,B.ai,k,B.e,B.Q,0,B.p),B.q,k,B.z,k,k,k,k,B.aj),k),D.aeR,k,B.aef,new A.b7(g,B.Z),k,k)},
c86(d){var w=B.o.G(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.G(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.abl.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jj:B.iK,s=A.m(16)
return A.v(A.a([new A.C(D.afe,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dY:B.bX,B.r,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bfn.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dT:B.c,r=A.m(12),q=A.I((t?B.dY:B.bX).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aO:B.az,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.U,!1,u,!0,B.q,u,A.aM(),v.d,u,u,u,u,u,2,A.bo(u,B.ev,u,B.uB,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cq,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bS,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ag,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.abk.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dT:B.c,s=A.m(12),r=A.I((u?B.dY:B.bX).j(0.85),B.r,1),q=A.W(B.qv,u?B.bq:B.bn,v,v,v,v),p=A.l(v,v,u?B.aO:B.az,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dT:B.c
return A.p(v,new A.CI(A.a2H(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cq,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lv,v,v,v)}}
C.bfm.prototype={
B(d){var w=new C.diB(this)
return A.A(A.a([w.$3(D.Xs,"Male",B.M5),B.ab,w.$3(D.ag4,"Female",B.LS),B.ab,w.$3(D.x_,"Other",B.mQ)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.azy.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jj:B.iK,r=A.m(14),q=A.I(t?B.dY:B.bX,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aO:B.az,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aFG(u,B.xq,w.f,v),B.bp,new C.aFG(u,B.hs,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eu,v,v,v)}}
C.aFG.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bS.j(0.12)
else w=s.c.a?B.dT:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bS
else t=(s.c.a?B.bq:B.bn).j(0.4)
return A.aE(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a4(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ad)}}
C.abm.prototype={
bKS(d){switch(d.a){case 0:return B.bS
case 1:return B.by
case 2:return B.cU}},
bKT(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aTu(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zq(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dT:B.c
u=A.m(12)
t=A.I((w?B.dY:B.bX).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bS,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aO:B.az,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cM,B.A6,p,p,1/0)},
abR(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jj:B.iK,s=A.m(16),r=A.I(v?B.dY:B.bX,B.r,1)
return A.v(A.a([new A.C(D.afe,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.ha3(r,q),o=q.c,n=t.bKS(o),m=K.bzp(q.f),l=t.e.a,k=l?B.dT:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aO:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.k8?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.hm(u,m,m==null?A.W(B.oe,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.em,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.au(A.p(s,A.d(t.bKT(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.m2,s,s,s),s,s,s)
u=x.p
i=A.a([t.zq("Full name",i,B.m5)],u)
if(p>0)i.push(t.zq("Child order","#"+p,B.LZ))
r=A.a([h,B.av,r,B.aN,l,B.S,v,B.bu,t.abR("Identity",i),B.aa,t.abR("Life details",A.a([t.zq("Birth date",q.w,D.agP),t.zq("Birth place",q.x,B.XZ),t.zq("Date of death",q.y,D.aiY),t.zq("Occupation",q.z,B.Z4)],u)),B.aa,t.abR("Family links",A.a([t.zq("1. Parent",t.aTu(q.d),B.EM),t.zq("2. Spouse",t.aTu(q.e),B.LR)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.aa,t.abR("Notes",A.a([t.zq("Notes",q,B.kG)],u))],u))
r.push(B.bu)
r.push(A.bM(B.I5,new C.diL(d),A.bk(B.aT,s,s,s,s,s,B.ce,s,new A.b7(A.m(14),B.Z),s,s,s)))
return A.eB(s,k,new A.cZ(B.lm,A.ci(A.v(r,B.ai,s,B.e,B.Q,0,B.p),B.q,s,B.z,s,B.wP,s,s,B.aj),s),s,s,s,B.El,B.cZ,s,new A.b7(j,B.Z),s)}}
C.IH.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.wT,A.hl(A.aE(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a4(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ad),u,v.c,u,u),u)}}
C.anp.prototype={
eF(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a4().ab())
w=u.c
v=A.U(w).k("J<1,a1<n,@>>")
w=A.B(new A.J(w,new C.c4X(),v),v.k("ai.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iI(w,new C.c4Y(),t,x.U))
return s}}
C.anq.prototype={
S(){return new C.aB7(A.a([],x.bF))},
gd6(){return this.c}}
C.aB7.prototype={
Z(){this.a0()
this.It()},
It(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$It=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c50(t.a.c),$async$It)
case 3:r=e
w=4
return A.b(C.zU(t.a.c),$async$It)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qu(q,new C.dOi(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dOj(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$It,v)},
xC(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Jb(d,e){return this.cwc(d,e)},
cwc(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Jb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dOn(q,e))
t=3
w=6
return A.b(d.$0(),$async$Jb)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dOo(q))
$.eN.lZ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jb,v)},
VU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oK(r,s.c,s.e),$async$VU)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Jb(new C.dOf(t),"Preparing download\u2026"),$async$VU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VU,v)},
VY(d){return this.bIY(d)},
bIY(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oK(r,s.c,s.e),$async$VY)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Jb(new C.dOg(t,d),"Preparing file\u2026"),$async$VY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VY,v)},
adJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$adJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wx.c2().KT(B.OS,B.t1,!0),$async$adJ)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gaj(o)}else o=!1
if(o){o=q.c
o.toString
o=A.ji(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a7(m)
$.al.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.FA()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adJ,v)},
Wy(d){return this.bT3(d)},
bT3(d){var w=0,v=A.j(x.H),u=this
var $async$Wy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Jb(new C.dOh(u,d),"Restoring family trees\u2026"),$async$Wy)
case 2:return A.h(null,v)}})
return A.i($async$Wy,v)},
Wx(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Wx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.adJ(),$async$Wx)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Wy(s),$async$Wx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
a0c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oK(r,s.c,s.e),$async$a0c)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Jb(new C.dOm(t),"Creating QR code\u2026"),$async$a0c)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0c,v)},
a_P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.C_()){t.xC("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ck(A.eu(new C.dOk(),!0,null,x.N)),$async$a_P)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Wy(r),$async$a_P)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_P,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=o?B.zx:B.iH,m=o?D.acz:B.aO,l=o?B.aJ:B.bX,k=o?B.aO:B.az,j=new C.d2t(n,m,l,k,o?B.bI:B.bn)
l=A.aG(p,p,p,p,A.W(B.ez,k,p,p,p,20),p,p,p,new C.dOq(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eA(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d21(!0,B.j9,B.aY,B.aY,q.r?p:q.gcnv(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gcjM()
t.push(A.D(C.d21(!s,B.iO,B.b2,B.bz,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d21(!1,B.hu,B.aT,B.bS,q.r?p:q.gbIR(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d21(!1,M.xx,B.aR,B.aL,q.r?p:q.gbT0(),j,s,"Upload backup file"),1))
l=A.a([new C.bbJ(v,l,p),B.kj,new C.aaD(j,"QR restore",p),B.S,t,B.d4,new C.aaD(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ab(q.d)>1&&q.a.f==null){v=A.a([B.kj,new C.aaD(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dOr(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cL(l,p,B.WA,p,p,B.aj,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aT.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.bq(!0,A.p(p,A.A(A.a([L.aK8,B.be,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Ae,p,p,p),!0,!1,B.ah,!0,!1),p,p,20,20,p,p))}return A.cb(w,n,new A.am(B.X,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d2t.prototype={}
C.bbJ.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aT.j(0.32),B.jR,28)],x.V)
t=A.an(p,A.W(B.tk,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.X,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.A(A.a([A.p(p,D.bFS,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nN,A.D(A.v(A.a([D.f_6,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bMJ,B.n),p,p,p,p,p,p,p,p)}}
C.aaD.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aT,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bbH.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aY.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aY.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aE(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ev(A.db(new A.C(E.We,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qs,q,q,q),B.aa,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cq,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ad)}}
C.bbM.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aT.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aE(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ev(new A.C(B.eN,A.A(A.a([A.p(v,D.bF6,B.f,v,v,new A.o(q,v,A.I(B.aT.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qs,v,v,v),B.be,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hu,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ad)}}
C.YI.prototype={
S(){return new C.aB6()},
gd6(){return this.c}}
C.aB6.prototype={
Z(){this.a0()
this.a74()},
a74(){var w=0,v=A.j(x.H),u=this,t
var $async$a74=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b_9(u.a.c,B.BQ),$async$a74)
case 2:t=e
if(u.c!=null)u.m(new C.dOa(u,t))
return A.h(null,v)}})
return A.i($async$a74,v)},
af5(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$af5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dOb(q))
t=4
p=A.fXr(q.a.d,B.BQ)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.S(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.apD(n.e,m,l,B.BQ,p,n.f),$async$af5)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dOc(q))
q.c.I(x.q).f.P(D.eDe)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a7(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d(B.a.e4(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dOd(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$af5,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=p?B.j_:B.p4,n=p?B.i3:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eA(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fdJ,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aT.j(0.35),B.r,1)
u=A.pq(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aT,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bu,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b7,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.af:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcju()
if(u)u=B.HE
else u=A.W(r.e===!0?B.ht:B.agO,q,q,q,q,q)
w=A.a([w,B.aa,v,B.aa,new A.a4(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cb,q,q,q),t,A.dd(q,q,q,q,q,q,q,q,q,B.aT,q,B.fH,q,q,q,new A.az(B.aT.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.ir,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a4(1/0,q,A.bM(B.yM,new C.dOe(d),A.bk(B.aT,q,q,q,q,B.fH,q,q,q,q,q,q)),q))
return A.cb(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.YJ.prototype={
S(){return new C.bgO(A.ys(B.wC,B.nc,B.tp))}}
C.bgO.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.cb(A.eA(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f6s,w,w,w,1,w,!0),B.w,A.yr(this.d,B.bQ,new C.dOs(this,d)),w,!1,!1,w,w)}}
C.aW5.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Oo,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ln.prototype={}
C.a4z.prototype={
S(){return new C.bgw(null,null)}}
C.bgw.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bj(v,B.rR,v,1,v,w)
w.e=A.bj(v,B.p9,v,1,v,w)
w.a.toString
w.d.cE(0)
w.e.cE(0)},
bq(d){var w,v,u=this
u.bD(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cE(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cE(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.bqb()},
B(d){var w,v,u=this,t=B.d.dH(D.a0G,new C.dAg(u),new C.dAh())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cpz(A.c5(new A.h1(A.a([w,v],x.dS)),new C.dAi(u,t),null),!0)}}
C.bgv.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aXu(d,e)
break
case"house":p.lB(d,e,D.cPX)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.ge9()
$.V()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lG(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.A7(d,e,12)
p.xe(d,e,B.kX,5,14)
break
case"grocery":p.c8O(d,e)
break
case"calculator":p.c8v(d,e)
break
case"lumber":p.c8W(d,e)
break
case"kitchen":p.c8R(d,e)
break
case"landscape":p.lB(d,e,D.cQo)
s=new A.aP($.V().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cR(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cR(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ao(t,w))
s.E(new A.ao(0,w))
s.E(new A.bE())
w=A.L()
w.r=B.ft.j(0.85).gp(0)
d.aM(s,w)
p.A7(d,e,8)
p.xe(d,e,B.iM,4,18)
break
case"plumbing":p.c94(d,e)
break
case"electrical":p.lB(d,e,D.cZY)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.V()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aW(new A.a9(0,0,0+e.a,0+e.b),u)
p.lG(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lG(d,e,B.lq.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.A7(d,e,10)
break
case"store":p.c9d(d,e)
break
case"paint_remodel":p.c9_(d,e)
break
case"roofing":p.c96(d,e)
break
case"warehouse":p.c9k(d,e)
break
case"vehicles":p.c9i(d,e)
break
case"farm":p.c8I(d,e)
break
case"restaurant":p.c95(d,e)
break
case"tools":p.c9g(d,e)
break
case"wallet":p.c9j(d,e)
break
case"concrete":p.c8B(d,e)
break
case"blueprint":p.c8t(d,e)
break
default:p.aXu(d,e)}},
lB(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.V()
w=A.L()
w.sar(new A.a5(B.ax,B.aC,B.x,f,null,null).av(0,v))
d.aW(v,w)},
lG(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.ge9()/2-h
$.V()
w=A.L()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bT(q,p)
r=w.H()
v.drawArc.apply(v,[A.c4(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xe(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.ge9()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.V()
q=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
A7(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.G(s*0.17,0.9)
p=B.k.G(s*0.23,0.85)
$.V()
o=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aXu(d,e){var w,v=this
v.lB(d,e,D.cYO)
w=v.c
v.lG(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lG(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bHa(d,e,B.hQ,w)
v.xe(d,e,B.c.j(0.7),6,8)},
bHa(d,e,f,g){var w,v,u,t,s,r,q,p
$.V()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c4(new A.a9(16,q,t,q+3)),p)
p.delete()}},
c8O(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lB(d,e,D.c72)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.G(s,3)
p=Math.sin(r)
o=B.o.am(s,3)
n=Math.cos(r*0.8)
m=B.o.G(s,2)
$.V()
l=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
l.r=D.cOj[B.o.G(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lG(d,e,B.c.j(0.35),w,16)
j.xe(d,e,B.iM,5,12)},
c8v(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lB(d,e,D.c79)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.ge9()
$.V()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ae(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ig(g,g,g,g,g,B.a5,B.ci,g,B.eq,B.cg)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cRR[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.G(o,2)
p.saT(0,new A.ep(r,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a5(d,new A.u(t*(0.08+B.o.G(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.am(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c7b[o]
l=B.k0.j(0.28+0.3*Math.sin(n))
k=B.o.G(o,2)
p.saT(0,new A.ep(m,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a5(d,new A.u(t*(0.55+B.o.G(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.am(o,3)*0.38)+Math.sin(n)*6))}h.lG(d,e,B.c.j(0.35),w*1.5,14)
h.lG(d,e,B.ex.j(0.55),-v*3.141592653589793*2,8)
h.lG(d,e,B.zy.j(0.4),r*2.8,22)
h.xe(d,e,B.oX,8,10)
h.A7(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.G(w+o*0.22,0.9)
$.V()
r=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c8W(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lB(d,e,Y.ash)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.by(new A.a9(20,q,u,q+10),B.i0)
$.V()
o=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
o.r=A.ar(B.fW,B.nY,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.et(p),n)
n.delete()}m.lG(d,e,B.fW.j(0.35),w,15)
m.A7(d,e,8)},
c8R(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lB(d,e,D.cOO)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.G(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.G(r*0.13,0.7)
$.V()
l=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lG(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.xe(d,e,B.q8,4,14)},
c94(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lB(d,e,D.cEv)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.G(s,0.12)
$.V()
n=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xe(d,e,B.o5,6,12)
l.lG(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c9d(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lB(d,e,D.ckt)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.by(new A.a9(q,14,q+u,22),B.hL)
$.V()
p=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.f4,B.bJ,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}n.lG(d,e,B.c.j(0.3),w,16)
n.A7(d,e,8)
n.xe(d,e,B.ui,5,13)},
c9_(d,e){var w,v,u,t,s,r,q,p,o
this.lB(d,e,D.cK0)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.G(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.by(new A.a9(q,p,q+8,p+(18+r*22)),B.h8)
$.V()
q=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
q.r=[B.ig,B.dy,B.bJ,B.ew][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.et(p),o)
o.delete()}this.lG(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c96(d,e){var w,v,u,t,s,r,q,p,o
this.lB(d,e,D.cHF)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.G(v+s*0.12,0.75))
q=B.o.G(s,4)*0.22
$.V()
p=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xe(d,e,B.cl,7,11)},
c9k(d,e){var w,v,u,t,s,r,q,p,o,n
this.lB(d,e,D.cn6)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.by(new A.a9(p,o,p+(t-r*8),o+16),B.i0)
$.V()
p=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.cl,B.aO,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}this.lG(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c9i(d,e){var w,v,u,t,s,r,q,p,o
this.lB(d,e,D.d2z)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.G(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.G(s,2)*0.08)
q=A.by(new A.a9(r,q,r+28,q+8),B.i0)
$.V()
p=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}this.A7(d,e,6)},
c8I(d,e){var w,v,u,t,s,r,q,p,o,n
this.lB(d,e,D.cNt)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.V()
s=A.L()
s.r=B.lq.j(0.75).gp(0)
d.ae(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
o.r=B.fX.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lG(d,e,B.lq.j(0.35),w,14)},
c95(d,e){var w,v,u,t,s,r,q,p,o=this
o.lB(d,e,D.cPM)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cr(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.V()
q=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c4(r),p)
p.delete()}o.xe(d,e,B.q8,5,16)
o.A7(d,e,7)},
c9g(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lB(d,e,D.d0m)
w=m.c
v=w*3.141592653589793
m.lG(d,e,B.nY.j(0.55),v*3,10)
m.lG(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.V()
o=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
o.r=B.nY.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c9j(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lB(d,e,D.d33)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.by(new A.a9(p,o,p+36,o+22),B.hL)
$.V()
p=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.iM,B.lq,q).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}m.A7(d,e,9)
m.lG(d,e,B.c.j(0.4),w*2.2,12)},
c8B(d,e){var w,v,u,t,s,r,q,p,o,n
this.lB(d,e,D.cUp)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bT(new A.u(v,u),34)
$.V()
s=A.L()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.fa(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
o.r=B.bX.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c8t(d,e){var w,v,u,t,s,r,q,p
this.lB(d,e,D.cQE)
$.V()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.G(t*0.85,1)
$.V()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aW(new A.a9(0,p,0+v,p+6),u)
this.lG(d,e,B.kX.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aqj.prototype={
Yw(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aNv(),$async$Yw)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a6N(s),$async$Yw)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Yw,v)},
adK(d){return this.cbz(d)},
cbz(d){var w=0,v=A.j(x.H),u=this,t
var $async$adK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hUY(d),$async$adK)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$adK,v)},
B(d){var w,v,u,t=null,s=A.M(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jj:B.iK
w=x.p
v=A.a([C.aNT(!0,B.q0,1/0,B.pi,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bW(new A.bI(B.b1,t,t,new A.C(B.uv,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ata,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a5(B.b1,B.b3,B.x,u,t,t),B.n),B.bc))}v.push(A.an(8,A.A(A.a([A.D(A.dp(D.bz0,D.eWF,new C.ccu(this,d),A.bk(B.aT,t,t,t,B.c,t,B.jK,t,t,t,t,B.c7)),1),B.ab,A.D(A.ex(D.bH4,D.f9m,this.gc2K(),A.dd(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jK,t,t,D.aSt,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fE(1.7777777777777777,A.aE(!1,B.a1,!0,B.q0,new A.am(B.X,t,B.b_,B.q,v,t),B.ao,s,0,t,t,t,t,t,B.ad),t)}}
C.aIZ.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b1$
if(v!=null)v.a2(0,w.gdB())
w.b1$=null
w.a1()}}
C.aQK.prototype={}
C.aQJ.prototype={}
C.aOP.prototype={}
C.Xl.prototype={
S(){return new C.awm()}}
C.awm.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bb("",B.b0,B.aM)
v=$.av()
u.d!==$&&A.aR()
u.d=new A.ap(w,v)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a1()},
J2(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.P(D.eDJ)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).M(new C.aQK(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=m?B.dT:B.c,k=A.m(20),j=A.p(n,D.bGK,B.f,n,n,new A.o(B.aT.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.az,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.be,i,A.aG(n,n,n,n,A.W(B.cu,m?B.bq:B.bn,n,n,n,n),n,n,n,new C.cVc(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cq,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fXH(new C.cVd(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aO:B.az,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jj:B.iK
r=A.m(12)
q=A.m(12)
p=m?B.dY:B.bX
t=A.aL(n,B.U,!0,n,!0,B.q,n,A.aM(),u,n,n,n,n,n,2,A.bo(n,new A.b4(4,r,B.df),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cVe(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.HI,n,n,n,n)
u=m?B.aO:B.az
m=m?B.dY:B.bX
return A.eB(n,l,new A.cZ(B.lm,A.ci(A.v(A.a([j,B.aN,i,B.av,w,B.P,v,B.aN,t,B.bu,A.A(A.a([A.D(A.dX(B.dd,new C.cVf(d),A.dd(n,n,n,n,n,n,n,n,n,u,n,n,B.ce,n,new A.b7(A.m(12),B.Z),new A.az(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bM(D.f9B,o.ga0u(),A.bk(B.aT,n,n,n,B.c,n,B.ce,n,new A.b7(A.m(12),B.Z),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.z,n,B.Af,n,n,B.aj),n),n,n,n,V.Ag,B.cZ,n,new A.b7(k,B.Z),n)}}
C.Xk.prototype={
S(){return new C.awl()}}
C.awl.prototype={
Z(){this.a0()
var w=$.av()
this.d!==$&&A.aR()
this.d=new A.ap(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a1()},
J2(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.P(D.eBq)
return}v=this.c
v.toString
A.a6(v,!1).M(new C.aQJ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.M(d).ax.a===B.H,o=p?B.dT:B.c,n=A.m(20),m=A.p(q,D.bDp,B.f,q,q,new A.o(B.bS.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.az,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.be,l,A.aG(q,q,q,q,A.W(B.cu,p?B.bq:B.bn,q,q,q,q),q,q,q,new C.cV8(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aT.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aT.j(0.25),B.r,1)
u=A.W(B.agA,B.aT.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.az,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bA,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aO:B.az,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jj:B.iK
t=A.m(12)
s=A.m(12)
r=p?B.dY:B.bX
v=A.aL(q,B.U,!0,q,!0,B.q,q,A.aM(),w,q,q,q,q,q,2,A.bo(q,new A.b4(4,t,B.df),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ag,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cV9(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kk,q,q,q,q)
w=p?B.aO:B.az
p=p?B.dY:B.bX
return A.eB(q,o,new A.cZ(B.lm,A.ci(A.v(A.a([m,B.aN,l,B.ay,v,B.bu,A.A(A.a([A.D(A.dX(B.dd,new C.cVa(d),A.dd(q,q,q,q,q,q,q,q,q,w,q,q,B.ce,q,new A.b7(A.m(12),B.Z),new A.az(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bM(D.ffS,this.ga0u(),A.bk(B.bS,q,q,q,B.c,q,B.ce,q,new A.b7(A.m(12),B.Z),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.Af,q,q,B.aj),q),q,q,q,V.Ag,B.cZ,q,new A.b7(n,B.Z),q)}}
C.WT.prototype={
S(){return new C.av5()}}
C.av5.prototype={
Z(){var w,v=this
v.a0()
w=$.av()
v.d!==$&&A.aR()
v.d=new A.ap(B.as,w)
v.e!==$&&A.aR()
v.e=new A.ap(new A.bb("1",B.b0,B.aM),w)
v.f!==$&&A.aR()
v.f=new A.ap(B.as,w)
v.r!==$&&A.aR()
v.r=new A.ap(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.av()
u.O$=0
u=v.e
u===$&&A.c()
u.R$=w
u.O$=0
u=v.f
u===$&&A.c()
u.R$=w
u.O$=0
u=v.r
u===$&&A.c()
u.R$=w
u.O$=0
v.a1()},
gIo(){var w,v=this.e
v===$&&A.c()
w=A.d3(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gagS(){var w=this.f
w===$&&A.c()
w=A.d3(B.a.i(w.a.a))
return w==null?0:w},
gb_f(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aKW(d){var w,v=B.k.D(this.gIo()+d,0.25,999999),u=B.k.jB(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.a9(v,2)
w=A.ae("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saT(0,u)
this.m(new C.csM())},
auU(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aT,w,w,w,20):w,u=d.a,t=u?B.jj:B.iK,s=A.m(14),r=A.m(14)
u=u?B.dY:B.bX
return A.bo(w,new A.b4(4,s,B.df),w,B.bA,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a7L),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c2L(d,e,f){return this.auU(d,e,f,null)},
J2(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gagS()<=0){s.c.I(x.q).f.P(D.eFA)
return}r=s.c
r.toString
v=s.gIo()
u=s.gagS()
t=s.gb_f()
A.a6(r,!1).M(new C.aOP(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tg(n),l=n?B.dT:B.c,k=A.m(24),j=x.O,i=A.a([B.aT.j(0.22),B.bS.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bwY,B.f,o,o,new A.o(o,o,A.I(B.aT.j(0.35),B.r,1),h,o,new A.a5(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.az,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cq,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.be,h,A.aG(o,o,o,o,A.W(B.cu,n?B.bq:B.bn,o,o,o,o),o,o,o,new C.csS(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.az,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.U,!0,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.auU(m,"Item name (optional)","Lumber, paint, labor\u2026",B.M4),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.HI,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jj:B.iK
t=A.m(14)
s=A.I(n?B.dY:B.bX,B.r,1)
r=A.aG(o,o,o,o,A.W(B.xq,n?B.aO:B.az,o,o,o,20),o,o,o,new C.csT(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.U,!1,o,!0,B.q,o,A.aM(),q,o,o,o,o,o,2,D.bIB,B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dR,o,o,o,1,o,o,!1,"\u2022",o,new C.csU(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aO:B.az,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aG(o,o,o,o,A.W(B.hs,n?B.aO:B.az,o,o,o,20),o,o,o,new C.csV(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aO:B.az,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.aw,A.D(A.aL(o,B.U,!1,o,!0,B.q,o,A.aM(),t,o,o,o,o,o,2,p.auU(m,"Amount","0.00",B.hV),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dR,o,o,o,1,o,o,!1,"\u2022",o,new C.csW(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.J(D.cKs,new C.csX(p,m),t),t.k("ai.E"))
i=A.a([i,B.bu,v,B.ay,h,B.P,s,B.aa,A.c6(B.bF,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.az,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.U,!1,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.c2L(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.csY(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kk,o,o,o,o)],w))}i.push(B.aN)
h=B.aT.j(n?0.18:0.1)
j=A.a([h,B.bS.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aT.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIo()===B.k.jB(p.gIo())?B.k.N(p.gIo()):p.gIo()
s=p.gb_f()
r=A.zW(p.gagS())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.av,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bAb(p.gIo()*p.gagS(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a5(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.j5,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.dY:B.bX
h=A.dd(o,o,o,o,o,o,o,o,o,o,o,o,B.ce,o,new A.b7(j,B.Z),new A.az(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dX(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.az,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.csZ(d),h),1),B.aw,A.D(A.dp(D.ak_,D.fc9,p.ga0u(),A.bk(B.aT,o,o,0,B.c,o,B.ce,o,new A.b7(A.m(14),B.Z),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eB(o,l,new A.cZ(U.a88,A.ci(A.v(i,B.ai,o,B.e,B.Q,0,B.p),B.q,o,B.z,o,A7.qr,o,o,B.aj),o),o,o,o,B.KM,B.cZ,o,new A.b7(k,B.Z),o)}}
C.a_q.prototype={
S(){return new C.bsN()}}
C.bsN.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.av()
u.d!==$&&A.aR()
u.d=new A.ap(new A.bb(w,B.b0,B.aM),v)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?B.dT:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aO:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aO:B.az,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jj:B.iK
v=A.aL(s,B.U,!0,s,!0,B.q,s,A.aM(),w,s,s,s,s,s,2,A.bo(s,new A.b4(4,A.m(12),B.df),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eZn(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dX(B.dd,new C.eZo(d),s),1)
r=A.bk(B.bS,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eB(s,q,new A.C(B.Af,A.v(A.a([o,B.ay,v,B.aN,A.A(A.a([u,B.aw,A.D(A.bM(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eZp(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.cZ,s,new A.b7(p,B.Z),s)}}
C.a9G.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.Ew.prototype={
S(){return new C.bsL(null,null)}}
C.bsL.prototype={
Z(){var w,v=this
v.a0()
w=A.bj(null,D.bhi,null,1,null,v)
w.cE(0)
v.d!==$&&A.aR()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bsw()},
gbtS(){switch(this.a.r.a){case 1:return A.a([B.aT,B.bS,B.aZ],x.O)
case 2:return A.a([B.bs,B.aT,B.aZ],x.O)
case 3:return A.a([B.aY,B.c8,B.jE],x.O)
case 4:return A.a([B.hq,B.bS,B.f5],x.O)
case 0:return A.a([B.aT,B.bS,B.aZ],x.O)}},
B(d){var w=A.M(d),v=this.d
v===$&&A.c()
return new A.en(A.c5(v,new C.eZl(this,new C.tg(w.ax.a===B.H)),null),null)}}
C.auZ.prototype={
S(){return new C.bsM(null,null)}}
C.bsM.prototype={
Z(){var w,v=this
v.a0()
w=A.bj(null,B.mJ,null,1,null,v)
w.cE(0)
v.d!==$&&A.aR()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bsx()},
B(d){var w=this.d
w===$&&A.c()
return A.c5(w,new C.eZm(this),null)}}
C.bsK.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aZ(w,w))
u=new A.aP($.V().r,B.ap,null,null,A.a([],x.v))
u.E(new A.iR(v))
w=A.L()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aA(v,w)
w=A.L()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aM(u,w)
w=A.wv(u)
t=A.a([],x.f5)
w=new A.v2(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jN('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Gk(w,r)
w.j3()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aOf(d,q,r,o,0,0.2,4.2,0.92)
p.aOf(d,q,r,s,0.52,0.11,3.2,0.58)}},
aOf(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.G(g+h,1)*f,s=A.hhY(e.a.a,e,t,t+f*i,!0),r=A.byz(s.gbH().a.getBounds())
$.V()
w=A.L()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a5(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.FY,null).av(0,r))
d.aM(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aL7.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aL8.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.tg.prototype={}
C.aqi.prototype={
S(){return new C.aCz()},
gdS(){return this.c}}
C.aCz.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.aeA()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.K4(w,v)
this.a1()},
aeA(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aeA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.byG(t.c,t.d.a),$async$aeA)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eyj(u,s))
return A.h(null,v)}})
return A.i($async$aeA,v)},
OD(){var w=0,v=A.j(x.H),u=this,t,s
var $async$OD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eya(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.K4(t,s),$async$OD)
case 2:if(u.c!=null)u.m(new C.eyb(u))
return A.h(null,v)}})
return A.i($async$OD,v)},
P8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$P8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.M(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eyh(t,new C.tg(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$P8)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a6N(q),$async$P8)
case 6:case 5:t.m(new C.eyi(t,r))
w=7
return A.b(t.OD(),$async$P8)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
Ua(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ua=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hUJ(r),$async$Ua)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.ey5(t,new C.qy(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.OD(),$async$Ua)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ua,v)},
c7K(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.ha0(t,new C.ey9(u),w,v)},
a8Q(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bY(new A.az(v,2.5,B.r,-1),B.Z,B.Z,new A.az(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aSf,w,w,B.n),w,22,w,w,w,w,w,22)},
a7W(d){return this.bFv(d)},
bFv(d){var w=0,v=A.j(x.H),u=this
var $async$a7W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.ey8(u,d))
w=2
return A.b(u.OD(),$async$a7W)
case 2:return A.h(null,v)}})
return A.i($async$a7W,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.M(a2).ax.a===B.H,e=f?B.bW:B.iH,d=A.m(8),a0=A.W(O.XH,f?B.bq:B.bn,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.Er,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eyk(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.X,g,B.b_,B.q,A.a([A.bu(A.m(22),C.aNT(!0,A.m(22),1/0,B.pi,g,d,1/0),B.ao),A.an(10,A.dp(D.bBu,D.fec,h.gaYd(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h2,g,new A.b7(A.m(12),B.Z),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aT.j(f?0.5:0.38),B.eQ,22),new A.ac(-4,B.G,B.bS.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.am(B.X,g,B.b_,B.q,A.a([C.aNT(!0,A.m(16),1/0,B.Lv,g,r.c,1/0),A.bW(g,new A.o(g,g,g,g,g,new A.a5(B.b1,B.b3,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bc),A.an(g,h.a8Q(!0),g,g,8,g,8,g),A.an(g,A.cqj(h.a8Q(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.cqj(h.a8Q(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.cqj(h.a8Q(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dp(D.bxx,D.f8o,h.gaYd(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h2,g,new A.b7(A.m(12),B.Z),g,g,g)),g,g,g,10,g,g)],a1),g),B.ao),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bJo,B.n),g,g,g,g,B.m3,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aO:B.az,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b18,B.ni,B.h_],u):A.a([B.aZ,B.aT,B.bS],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aT.j(f?0.45:0.35),B.eQ,24)],t)
r=A.m(22)
p=A.an(g,A.W(B.jq,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h1,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aq,C.bAb(h.d.gwh(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cq,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fZ.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aY.j(0.28),B.cH,14)],t)
j=B.aY.j(0.22)
i=A.m(10)
u=A.p(g,A.bu(r,new A.am(B.X,g,B.a9,B.q,A.a([p,new A.C(D.blY,A.A(A.a([o,B.aw,A.aE(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ev(new A.C(Ac.Wd,A.v(A.a([A.p(g,D.ajz,B.f,g,g,new A.o(j,g,A.I(B.aY.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.ha,D.eZf],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc7J(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ad)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ao),B.f,g,g,new A.o(g,g,g,v,s,new A.a5(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fE(1.7777777777777777,d,g),B.aN,w,B.P,u,B.bu,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.az,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dp(Ae.Zq,D.eXf,h.gbuk(),A.bk(B.aT,g,g,g,B.c,g,B.j4,g,new A.b7(A.m(12),B.Z),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.aa],a1)
w=h.d.d
if(w.length===0){w=f?B.dT:B.c
v=A.m(14)
u=A.I(f?B.dY:B.bX,B.r,1)
t=A.W(B.Y1,f?B.bq:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.az,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.aq,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.t_,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eyl(h,new C.tg(f)),A.U(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.A0,A.au(A.mu(g,f?B.bq:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cb(g,e,A.bq(!0,A.v(A.a([new A.C(B.A8,a0,g),A.D(A.ci(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wR,g,g,B.aj),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),g,!1,!1,g,g)},
bxP(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dT:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aUV,u,u,u,u,u,u,u,5),l=B.aT.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hF:B.h4,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bG
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aO:B.az,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcLF()
v=A.zW(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b7,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aT.j(0.14),B.bS.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bAb(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a5(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h2,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.GN(A.A(A.a([m,A.D(new A.C(B.adT,A.A(A.a([l,B.be,t,B.ab,k,A.aG(u,u,u,u,A.W(B.cu,(r?B.bq:B.bn).j(0.75),u,u,u,20),u,u,u,new C.ey6(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.ao),B.f,u,D.aTP,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.abH.prototype={
Dt(d){return this.bGN(d)},
bGN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Dt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oK(d,o,!1),$async$Dt)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).M(null)
w=4
return A.b(A.bO(A6.zZ,null,x.H),$async$Dt)
case 4:s=t.d
w=5
return A.b(C.ftx(!0,o,s),$async$Dt)
case 5:r=f
q=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Fp(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$Dt)
case 6:p=f
w=7
return A.b(A.oJ(o,!1),$async$Dt)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Dt,v)},
Yx(d){return this.cnw(d)},
cnw(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oK(d,s,!1),$async$Yx)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).M(null)
A.hr(d,new C.aqc(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oJ(s,!1),$async$Yx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yx,v)},
OE(d){return this.cjH(d)},
cjH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).M(null)
w=3
return A.b(A.hr(d,D.aCo,!0,"NgmyWorksheetProjectScan",x.N),$async$OE)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bAc(s),$async$OE)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.P(D.eEJ)
w=1
break}q=C.fNT(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$OE)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
Yy(d){return this.cvb(d)},
cvb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).M(null)
w=3
return A.b(C.bzK(),$async$Yy)
case 3:s=f
if(s==null){w=1
break}r=C.fNT(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Yy)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Yy,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=new C.tg(u),s=w.d.d.length,r=u?B.dT:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.jR,36)],x.V),o=x.p
return A.bq(!0,new A.C(B.uC,A.p(v,A.v(A.a([w.cm7(d,t,s),new A.C(D.blm,A.v(A.a([w.b08(t,"QR restore"),B.S,A.A(A.a([w.aWe(t,!0,B.j9,B.aY,B.aY,new C.eyn(w,d),"Show to scan","QR code"),B.aw,w.auV(t,B.iO,B.b2,B.bz,new C.eyo(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d4,w.b08(t,"Backup files"),B.S,A.A(A.a([w.auV(t,B.hu,B.aT,B.bS,new C.eyp(w,d),"Full copy","Backup file"),B.aw,w.auV(t,M.xx,B.aR,B.aL,new C.eyq(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.ao,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ah,!0,!0)},
cm7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eV,B.cY,B.fr],k):A.a([B.aZ,B.aT,B.bS],k)
w=A.an(l,A.W(B.tk,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kz,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aNT(!0,A.m(13),64,D.bsP,l,r.c,64),B.ao,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aMz,l,l,l)
r=C.bAb(r.gwh(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.X,l,B.a9,B.q,A.a([w,new A.C(D.blK,A.v(A.a([v,A.A(A.a([s,B.eA,A.D(A.v(A.a([u,B.av,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fD,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aG(l,l,l,l,A.W(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.eym(d),l,l,l,A.ng(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aJY,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a5(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b08(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aT,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aWe(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.acz:B.aO
if(e)w=B.aY.j(o?0.45:0.35)
else{w=o?B.dY:B.bX
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aY.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qs,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aO:B.az,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aE(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ev(new A.C(E.We,A.v(A.a([t,B.aa,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cq,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ad),1)},
auV(d,e,f,g,h,i,j){return this.aWe(d,!1,e,f,g,h,i,j)}}
C.aqc.prototype={
S(){return new C.bi9()}}
C.bi9.prototype={
Z(){this.a0()
this.act()},
act(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$act=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bAd(p.c,p.d),$async$act)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.ey0(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.ey1(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$act,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=g?B.zx:B.iH,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.W(B.ez,g?B.af:B.ak,h,h,h,18),h,h,h,new C.ey2(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.yB],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eV,B.cY,B.fr],s):A.a([B.aZ,B.aT,B.bS],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aT.j(g?0.4:0.3),B.eQ,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.bAb(p.gwh(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.aq,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fD,h,h,h)],u),B.m,h,B.b7,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a5(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Wz,h,h,1/0)
t=g?D.b9F:B.c
q=A.m(24)
p=A.I(w?B.aY.j(0.4):B.aT.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a4W,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dUK)
else{m=A.m(20)
l=A.I(B.aK,B.r,1)
o.push(A.p(h,A.pq(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c2,h,h,h))}}o.push(B.aN)
n=w?B.aY:B.aT
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aY:B.aT).j(0.35),B.r,1)
k=w?B.LN:B.Mh
k=A.W(k,w?B.aY:B.aT,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.af:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.j4,h,h,h))
return A.cb(h,f,A.bq(!0,A.v(A.a([new A.C(A3.KZ,e,h),A.D(A.ci(A.v(A.a([s,B.aN,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rZ,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.af0,h,h,B.aj),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),h,!1,!1,h,h)}}
C.aqh.prototype={
S(){return new C.aCy(A.ys(B.Kk,B.nc,B.tp))}}
C.aCy.prototype={
q(){this.d.q()
this.a1()},
aIY(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iJ(w,d)},
c3B(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hSM(t)
if(s!=null){this.aIY(s)
return}r=C.h1b(t)
if(r!=null)q=A.dr(r,p,0)
else q=!1
if(q){this.aIY(B.a.i(B.a.aY(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eA(A.a([A.aG(t,t,t,t,A.W(u.f?B.ta:A0.LU,t,t,t,t,t),t,t,t,new C.ey4(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.zx,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.f8i,t,t,t,1,t,!0),q=A.yr(u.d,B.bQ,u.gc3A()),p=A.m(28)
p=A.au(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aT,B.r,3),p,A.a([new A.ac(2,B.G,B.aT.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cb(r,B.w,new A.am(B.X,t,B.b_,B.q,A.a([q,p,A.an(32,A.p(t,D.f7a,B.f,t,t,new A.o(w,t,A.I(B.aT.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.j5,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aHk.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.MM.prototype={
S(){return new C.aCA(D.a73,A.a([],x.D))},
bo(){return this.r.$0()},
gdS(){return this.c}}
C.aCA.prototype={
gcte(){return J.bBk(this.e,0,new C.eyN())},
Z(){this.a0()
$.aU.c_$.push(this)
this.v2()},
q(){$.aU.hw(this)
this.a1()},
iF(d){if(d===B.fp)this.v2()},
v2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$v2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BZ(q.a.c).cK(0,B.jJ),$async$v2)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eyJ(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eyK(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v2,v)},
GU(d){return this.bDG(d)},
bDF(){return this.GU(null)},
bDG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hUL(l,d),$async$GU)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l7(l,r,q,D.cUC,new A.Q(Date.now(),0,!1))
w=4
return A.b(C.K4(t.a.c,p),$async$GU)
case 4:o=f
w=5
return A.b(t.v2(),$async$GU)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.P(D.eBU)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.P(D.eDD)
else n.I(q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Dx(m)
case 1:return A.h(u,v)}})
return A.i($async$GU,v)},
Dx(d){return this.c7v(d)},
c7v(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Dx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hr(s,new C.aqi(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Dx)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.K4(u.a.c,t),$async$Dx)
case 5:case 4:w=6
return A.b(u.v2(),$async$Dx)
case 6:return A.h(null,v)}})
return A.i($async$Dx,v)},
uQ(d){return this.bT5(d)},
bT5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bzK(),$async$uQ)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hr(r,D.aCo,!0,"NgmyWorksheetProjectScan",x.N),$async$uQ)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bAc(q),$async$uQ)
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
r.P(A.b2(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fNT(s)
w=15
return A.b(C.K4(t.a.c,p),$async$uQ)
case 15:o=f
w=16
return A.b(t.v2(),$async$uQ)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.P(D.eDI)
w=1
break}r.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Dx(p)
case 1:return A.h(u,v)}})
return A.i($async$uQ,v)},
Mz(d){return this.bCm(d)},
bCm(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eyu(d),s,null,!0,!0,x.y),$async$Mz)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ok(t.a.c,A.a([],x.D)),$async$Mz)
case 6:w=7
return A.b(t.v2(),$async$Mz)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.eBZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Mz,v)},
c7I(d){var w=this.c
w.toString
A.c2(B.K,null,new C.eyD(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b0K(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jj
else w=B.c
v=A.m(16)
u=A.I(p?B.dY:B.bX,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aO:B.az,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aE(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.aa,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uB,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ad)},
Z1(d,e){return this.c7w(d,e)},
c7w(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c2(B.K,null,new C.eyy(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Z1)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.ha0(r,new C.eyz(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.MB(d,e),$async$Z1)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Z1,v)},
aYP(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aE
else t=h.a?B.aO:B.az
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aE(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.Ae,A.A(A.a([s,B.be,t,A.W(B.en,w?B.bq:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ad)},
cee(d,e,f,g,h,i){return this.aYP(!1,d,e,f,g,h,i)},
MB(d,e){return this.bCw(d,e)},
bCw(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$MB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kT(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$MB)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.byt(t.a.c,d.a),$async$MB)
case 6:w=7
return A.b(t.v2(),$async$MB)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$MB,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=new C.tg(o),m=o?B.bW:B.iH
if(q.f)o=D.b_f
else{w=q.bx4(n)
v=q.bSd(n)
u=q.gbue()
if(o)t=B.jj
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.aa,v,B.aN,new C.Ew(A.p(p,A.A(A.a([q.ayj(Q.Lu,"Projects",n,D.a73),q.ayj(B.uM,"Cashier",n,D.aQk),q.ayj(B.EM,"Family Tree",n,D.fz7)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.em,0.95,u,p),B.bu],r)
w=q.d
if(w===D.a73){w=J.ab(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aO:B.az,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.auZ(q.gaN6(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.ceg(n)],r))}else{o=q.a
if(w===D.aQk)u.push(new C.amm(o.c,n,p))
else{w=q.r
u.push(new C.ans(o.c,o.d,o.e,o.f,new C.eyQ(q),new C.eyR(q),new A.cz(w,x.b4)))}}o=A.ci(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A8.KT,p,p,B.aj)}return A.cb(p,m,A.bq(!0,o,!0,!1,B.ah,!0,!0),p,!1,!1,p,p)},
bx4(d){var w=null,v=A.m(8),u=d.a,t=A.W(O.XH,u?B.bq:B.bn,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kA,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyr(this),w,w,w,w,w,w,w)},
gbue(){switch(this.d.a){case 0:return D.a6m
case 1:return D.fqj
case 2:return D.a6n}},
bSd(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aT.j(0.35),B.cv,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bDf,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bpW,A.aE(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bAO,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyv(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ad)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Ew(A.p(w,A.v(A.a([new A.C(E.Wk,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.zW(this.gcte()),w,w,w,w,w,w,D.eTO,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uA,B.j5,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aT,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ah,1,D.fqi,w)},
ayj(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aT:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aT.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bn
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bn
return A.D(A.aE(!1,B.a1,!0,u,A.aK(!1,s,!0,A.dh(u,A.A(A.a([w,B.e9,new A.dl(1,B.ch,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b7,B.j,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.n),B.io,u,u,u,B.KW,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eyM(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ad),1)},
ceg(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dT:B.c
u=A.m(15)
t=A.p(p,D.bAT,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aT.j(0.5),B.eQ,28)],x.V),D.bLL,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aO:B.az,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Ew(A.p(p,A.v(A.a([t,B.d4,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e_,A.A(A.a([A.D(q.aOA(B.iO,"Scan QR",new C.eyG(q),d),1),B.aw,A.D(q.aOA(M.xx,"Upload file",new C.eyH(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bM(D.fhD,q.gaN6(),A.bk(B.aT,p,p,p,B.c,B.fH,p,p,new A.b7(A.m(12),B.Z),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bmP,1.05,D.a6m,p)}w=J.b6(q.e,new C.eyI(q,d),x.l)
w=A.B(w,w.$ti.k("ai.E"))
return new C.Ew(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a6m,p)},
aOA(d,e,f,g){var w=null,v=B.aT.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aT.j(0.45),B.r,1)
return A.aE(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eSg,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.adN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ad)},
cef(d,e){var w,v,u=null,t=e.a,s=t?B.dT:B.c,r=A.m(14),q=A.I(t?B.dY:B.bX,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ei,10)],x.V),o=A.m(14),n=t?B.bq:B.bn
n=A.bu(B.a7H,new A.fE(1.7777777777777777,C.aNT(!0,B.fq,1/0,Q.Lu,n,d.c,1/0),u),B.ao)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aO:B.az,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.zW(d.gwh()),u,u,u,u,u,u,D.eQr,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aE(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.bA,A.A(A.a([v,A.aG(u,u,u,u,A.W(A9.M6,t?B.bq:B.bn,u,u,u,u),u,u,u,new C.eyE(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eyF(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ad),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.buy.prototype={}
C.qy.prototype={
ac(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcLF(){var w,v,u,t,s=this.c
if(s===B.k.jB(s))w=B.o.u(B.k.N(s))
else{v=B.k.a9(s,2)
u=A.ae("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l7.prototype={
gwh(){return B.d.cG(this.d,0,new C.csd())},
ac(){var w=this,v=w.d,u=A.U(v).k("J<1,a1<n,@>>")
v=A.B(new A.J(v,new C.csc(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ab()],x.N,x.z)},
b7E(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l7(w.a,w.b,v,u,w.e)},
b7l(d){return this.b7E(d,null)},
Rj(d){return this.b7E(null,d)}}
C.Gt.prototype={
a3(){return"FamilyGender."+this.b}}
C.hS.prototype={
ac(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h5Q(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aAR(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hS(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aiJ.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kq.prototype={
gamd(){var w=this.f
return new A.a3(w,new C.bKD(),A.U(w).k("a3<1>")).gJ(0)},
ac(){var w=this,v=w.f,u=A.U(v).k("J<1,a1<n,@>>")
v=A.B(new A.J(v,new C.bKC(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ab(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hLe(w.y)],x.N,x.z)},
xV(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kq(w.a,v,u,t,s,r,w.r,q,p,o)},
b7D(d,e){var w=null
return this.xV(w,w,d,e,w,w,w,w)},
cBJ(d,e,f,g,h,i,j){return this.xV(d,e,f,g,h,i,j,null)},
aAW(d,e){var w=null
return this.xV(w,w,w,d,w,w,e,w)},
cAd(d){var w=null
return this.xV(w,w,w,w,w,w,d,w)},
cAB(d){var w=null
return this.xV(w,w,w,w,w,w,w,d)},
aAI(d){var w=null
return this.xV(w,w,w,w,d,w,w,w)},
cBf(d,e,f){var w=null
return this.xV(w,d,w,e,w,w,f,w)},
cA0(d){var w=null
return this.xV(w,w,d,w,w,w,w,w)},
cAO(d,e){var w=null
return this.xV(d,w,w,w,w,e,w,w)}}
C.cse.prototype={
a3(){return"WrapAlignment."+this.b}}
C.csf.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aED.prototype={}
C.b5Y.prototype={
bw(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b5Y()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aY(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b5X.prototype={
gvC(){return!0},
gF_(){return this.z.b<this.b.length},
aQ9(d){switch(0){case 0:return d.a.c}},
aPR(d){switch(0){case 0:return d.a.d}},
bLL(d,e){switch(0){case 0:return new A.hC(d,e)}},
bL9(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fS(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iy(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ge(b4)
switch(0){case 0:v=b5.b
u=new A.kn(0,v,0,1/0)
t=w===B.Rs
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fC(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fS(b4,u,!0)
f=b1.aQ9(g)
f.toString
e=b1.aPR(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aED(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aED(k,j,i))}d=s.length
switch(0){case 0:q=b5.cr(new A.hC(m,l))
a0=q.a
a1=q.b
b1.a=new A.iy(0,0,a0,a1)
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
for(q=B.d.fC(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aQ9(g)
e=b1.aPR(g)
e.toString
a9=b1.bL9(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bLL(a6,a3+a9)
b0=g.a
g.a=new A.iy(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fP(d){var w,v,u,t,s,r=this
r.kU(d)
w=d.b
w.hS()
v=A.dj()
u=r.a
v.dZ(u.a,u.b,0,1)
w.on(0,v)
for(u=r.z,u=B.d.dj(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fP(d)
w.mP(0)},
Fv(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hS(){return this.z}}
C.bsO.prototype={}
var z=a.updateTypes(["ax<~>()","R(hS)","R(kq)","~()","R(mV)","a1<n,@>(kq)","H(kq,kq)","n(hS)","kq(a1<@,@>)","R(l7)","R(tM)","mV(a1<@,@>)","tM()","H(l7,l7)","hS(a1<@,@>)","a1<n,@>(hS)","R(qy)","ax<~>(l7)","eK<n?>(hS)","H(hS,hS)","n?(hS)","a1<n,@>(mV)","Yn(Y)","n(n)","abm(Y)","r(nX)","H(mV,mV)","hS(hS)","cI(bt<n,EJ>)","cI(IT)","~(hS)","H?(hS)","hS()","ak<hS>()","R(tL)","R(IT)","C(hS)","~(Gt)","R(acT)","r(Gt,n,a0)","XL(Y)","bt<n,ak<a1<n,@>>>(n,ak<mV>)","~(H)","+count,id,name(H,n,n)(kq)","kq(kq)","YI(Y)","YJ(Y)","R(ln)","ln()","n(kq)","a_q(Y)","Xl(Y)","Xk(Y)","XJ(Y)","XN(Y)","r(qy)","abH(Y)","~(lL)","ax<~>([n?])","O(O,l7)","r(l7)","O(O,qy)","a1<n,@>(qy)","qy(a1<@,@>)","Xj(Y)","Rh(Y)","cm(Gs)","l7(a1<@,@>)","tL()","n(l7)","a1<n,@>(l7)","n(Q)","H(hS)","kq(a1<n,@>)","WT(Y)"])
C.fma.prototype={
$1(d){return d.a+" "+d.b},
$S:119}
C.fm9.prototype={
bgv(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qr(s,d,B.hg,E.E7),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.S(r!=null&&A.JS(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bgv(d)},
$S:297}
C.fmb.prototype={
$1(d){return d.b},
$S:119}
C.fv9.prototype={
$1(d){var w=null
return A.eB(w,B.K,new F.O5(this.a,this.b,w),w,w,0,B.Wf,B.cZ,w,w,w)},
$S:46}
C.fc8.prototype={
$1(d){return d!=null},
$S:233}
C.fc9.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:233}
C.fce.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:170}
C.fjU.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f4(d,w,w,w,A.h0(w,B.qS,w,w,w,w,w,w,w,B.dq,w,w,10.5,w,B.eg,w,!0,w,w,w,w),w),u=f?B.eg:B.uH
return new A.nr(D.bim,A.a7Y(A.a([new A.fL(130,w,v),new A.yb(1,B.EF,A.f4(e,w,w,w,A.h0(w,g==null?D.dX_:g,w,w,w,w,w,w,w,B.dq,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wy,B.lb))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1886}
C.fjT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uV(999)
f=A.wo(A.li(h,A.f4("Cashier",h,h,h,A.h0(h,D.yo,h,h,h,h,h,h,h,B.dq,h,h,10,h,B.eg,h,!0,h,h,h,h),h),h,new A.ko(D.dWR,h,f,B.hw,h),h,h,D.biP,h))
w=A.wo(A.f4("Debt receipt",h,h,h,A.h0(h,h,h,h,h,h,h,h,h,B.dq,h,h,22,h,B.eg,h,!0,h,h,h,h),h))
v=A.wo(A.f4(C.w7(new A.Q(Date.now(),0,!1),!0),h,h,h,D.a55,h))
u=A.uV(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f4(s,h,h,h,A.h0(h,h,h,h,h,h,h,h,h,B.dq,h,h,14,h,B.eg,h,!0,h,h,h,h),h)
r=A.f4("Person who owes",h,h,h,D.a55,h)
q=A.uV(10)
p=x.C
u=A.li(h,A.y6(A.a([s,new A.fL(h,2,h),r,new A.fL(h,10,h),A.li(h,A.y6(A.a([A.f4("Amount owed",h,h,h,D.a55,h),new A.fL(h,2,h),A.f4(A.zW(t.c),h,h,h,A.h0(h,D.yo,h,h,h,h,h,h,h,B.dq,h,h,20,h,B.eg,h,!0,h,h,h,h),h)],p),B.qm,B.lb),h,new A.ko(B.oy,h,q,B.hw,h),h,h,D.bi2,1/0)],p),B.qm,B.lb),h,new A.ko(E.aDu,h,u,B.hw,h),h,h,D.bjV,1/0)
q=new A.n9(D.dWU,0.9,B.kq)
r=A.uV(12)
s=i.c
o=s.$2("Original due",C.w7(t.r,!1))
n=s.$2("Current due",C.w7(t.f,!1))
m=i.d
l=new A.n9(m,1.1,B.kq)
k=A.uV(8)
j=i.a
k=A.a([o,n,new A.fL(h,6,h),A.li(h,A.wo(A.f4(t.gaHv(),h,h,h,A.h0(h,m,h,h,h,h,h,h,h,B.dq,h,h,11,h,B.eg,h,!0,0.5,h,h,h),h)),h,new A.ko(h,new A.pa(l,l,l,l),k,B.hw,h),h,h,D.biZ,1/0),new A.fL(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yo))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yo))
else{n=A.f4("Missed days ("+n+")",h,h,h,A.h0(h,B.qS,h,h,h,h,h,h,h,B.dq,h,h,10.5,h,B.eg,h,!0,h,h,h,h),h)
m=A.U(o).k("J<1,QR>")
o=A.B(new A.J(o,new C.fjS(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fL(h,4,h),n,new A.fL(h,6,h),new C.b5X(5,5,new C.b5Y(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fL(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fL(h,8,h),w,new A.fL(h,3,h),v,new A.fL(h,16,h),u,new A.fL(h,10,h),A.li(h,A.y6(k,B.wy,B.lb),h,new A.ko(h,new A.pa(q,q,q,q),r,B.hw,h),h,h,B.adX,1/0)],p)
w=j.a
if(w!=null){v=new A.n9(B.H4,1,B.kq)
B.d.v(f,A.a([new A.fL(h,16,h),A.f4("Debtor signature",h,h,h,A.h0(h,B.qS,h,h,h,h,h,h,h,B.dq,h,h,10,h,B.eg,h,!0,h,h,h,h),h),new A.fL(h,6,h),A.li(h,new A.GH(w,B.Tr,h,h),h,new A.ko(h,new A.pa(v,v,v,v),A.uV(6),B.hw,h),82,h,B.KY,1/0)],p))}f.push(new A.fL(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f4(w,h,h,h,D.eJy,h))
f.push(new A.fL(h,18,h))
f.push(A.wo(A.f4("NGMY.ORG",h,h,h,A.h0(h,D.yo,h,h,h,h,h,h,h,B.dq,h,h,14,h,B.eg,h,!0,1.8,h,h,h),h)))
return f},
$S:430}
C.fjS.prototype={
$1(d){var w=null,v=new A.n9(D.H5,0.7,B.kq),u=A.uV(999)
return A.li(w,A.f4(C.w7(d,!1),w,w,w,A.h0(w,D.H5,w,w,w,w,w,w,w,B.dq,w,w,9.5,w,B.eg,w,!0,w,w,w,w),w),w,new A.ko(w,new A.pa(v,v,v,v),u,B.hw,w),w,w,D.bob,w)},
$S:1887}
C.bZf.prototype={
$1(d){var w=null,v=B.bM.j(0.08),u=A.m(999),t=A.I(B.bM.j(0.28),B.r,1)
return A.p(w,A.d(C.w7(d,!1),w,w,w,w,w,w,D.ePW,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eD,w,w,w)},
$S:1888}
C.fvF.prototype={
$1(d){var w=null,v=A.aI(d,B.bR,x.w).w,u=A.m(26),t=A.aG(w,w,w,w,D.bE7,w,w,w,new C.fvC(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eB(w,B.K,new A.cZ(new A.aX(0,380,0,v.a.b*0.9),A.aE(!1,B.a1,!0,u,new A.C(B.W4,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dl(1,B.ch,A.ci(A.v(A.a([new A.en(new C.aW7(r,w),s),B.S,A.A(A.a([A.D(A.ex(B.xI,D.fe8,new C.fvD(s,r,d),A.dd(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f2,w,new A.b7(A.m(14),B.Z),new A.az(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dp(B.Zg,D.fb1,new C.fvE(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.f2,w,new A.b7(A.m(14),B.Z),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.z,w,w,w,w,B.aj),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.az,0,w,w,w,w,w,B.ad),w),w,w,0,Ad.Ws,B.cZ,w,w,w)},
$S:46}
C.fvC.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.fvD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ah$.x.h(0,t.a)
m=m==null?null:m.gb6()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lU(2.5),$async$$0)
case 4:w=3
return A.b(e.hg(B.fQ),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f8(B.dD.gaO(s))
m=t.b
q=B.a.i(m.b)
p=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ao(o,0,32)
w=5
return A.b(A.rq(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fvE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fqv(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.P(A.b2(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fvx.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eB(w,B.az,A.v(A.a([new A.C(D.bjJ,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.n3,w,w,w),1),A.aG(w,w,w,w,B.l9,w,w,w,new C.fvv(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dl(1,B.ch,new A.C(B.is,A.bu(A.m(14),A.fI(t,B.A,w,w,B.cn,B.ds,!1,w,!1,w,w),B.ao),w),w),new A.C(B.KC,new A.a4(1/0,w,A.dp(B.oo,D.aMZ,new C.fvw(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Z),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.KN,B.cZ,w,new A.b7(v,B.Z),w)},
$S:46}
C.fvv.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.fvw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rq(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fvJ.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eB(w,B.az,new A.C(D.bjR,A.v(A.a([A.A(A.a([D.bpa,A.aG(w,w,w,w,B.l9,w,w,w,new C.fvH(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.en(A.bu(A.m(14),A.p(w,A.b3(w,w,w,new C.b86(s.ax,w),B.at),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ao),t),B.aa,new A.a4(1/0,w,A.dp(B.oo,D.aMZ,new C.fvI(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Z),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b7(v,B.Z),w)},
$S:46}
C.fvH.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.fvI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ah$.x.h(0,t.a)
n=n==null?null:n.gb6()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lU(2.5),$async$$0)
case 4:w=3
return A.b(e.hg(B.fQ),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ao(p,0,32)
r=J.f8(B.dD.gaO(s))
w=5
return A.b(A.rq(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ff7.prototype={
$1(d){return d.a===this.a},
$S:235}
C.dB8.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dAU.prototype={
bfJ(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dT:B.c
s=u.a
w=2
return A.b(A.c2(t,null,new C.dAX(s,q,e),p,!0,!0,!1,B.Hk,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dAY(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bfJ(d,e)},
$S:1889}
C.dAX.prototype={
$1(d){var w,v=null,u=this.c===B.vg,t=u?D.d_b:D.cWI
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aO:B.az,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bq(!0,new A.C(L.aev,A.v(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa,A.ia(!0,v,v,B.z,I.aKf,new C.dAW(this.a,w,t,d),t.length,v,B.dO,B.aj,!0)],x.p),B.ai,v,B.e,B.Q,0,B.p),v),!0,!1,B.ah,!0,!0)},
$S:33}
C.dAW.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aO
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bn).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aW6(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dAV(t.d,r),s,s,s,s,s,s,s)},
$S:186}
C.dAV.prototype={
$0(){A.a6(this.a,!1).M(this.b)
return null},
$S:0}
C.dAY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dAS.prototype={
$3(d,e,f){return B.bG},
$C:"$3",
$R:3,
$S:89}
C.dAT.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cp,e,v)
return new A.cV(e,!1,A.ie(B.A,A.au(A.aE(!1,B.a1,!0,v,new A.e7(new C.dAR(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ad),v,v,v),v,new A.bf(t,new A.bm(0.96,1,u),u.k("bf<bG.T>"))),v)},
$S:30}
C.dAR.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bR,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dT:B.c,f=A.m(14),e=A.I((h?B.bq:B.bn).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.az,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aK(!1,v,!0,new A.C(B.em,A.W(B.cu,i.a.d.a?B.bq:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dAC(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aO:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aP6("Name")
r=l.a
q=r.d==null?k:new C.dAD(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.ls
n=A.I(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.U,h,k,!0,B.q,k,A.aM(),w,k,k,k,k,k,2,s.b7w(new A.C(B.fM,A.aK(!1,p,!0,A.p(B.A,C.aW6(m==null?"\ud83d\udc64":A.fkI(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ag,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kk,k,B.a4N,k,k)
v=A.a([v,B.aa,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aq,A.A(A.a([A.D(i.aPH("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dAE(r,a0),r.d===B.vg),1),B.ab,A.D(i.aPH("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dAJ(r,a0),r.d===B.a1J),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.ha(D.bCw,D.fcG,new C.dAK(r,l.e,a0),A.ft(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aO:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tO(A.ae("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.U,!1,k,!0,B.q,k,A.aM(),l.f,k,k,k,k,k,2,i.aP7("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ag,k,k,s,k,k,B.dR,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aO
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bn).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.w7(r.a,!1)
v.push(A.aE(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.az,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bzp],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dAL(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ad))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aO:B.az,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.U,!1,k,!0,B.q,k,A.aM(),l.r,k,k,k,k,k,2,i.aP6("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ag,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.aa)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.az,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aXd(r.b.length!==0,B.m5,new C.dAM(r,i,a0),new C.dAN(r,a0),"Upload from gallery","ID photo"))
v.push(i.aXd(r.c.length!==0,D.bsN,new C.dAO(r,i,d,a0),new C.dAP(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a5U("Signature (optional)",t,new C.dAQ(a0),new C.dAF(a0,t),new C.dAG(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bq:B.bn
s=(i?B.bq:B.bn).j(0.28)
s=A.D(A.dX(E.aMS,new C.dAH(d),A.dd(k,k,k,k,k,k,k,k,k,t,k,k,B.uw,k,new A.b7(A.m(10),B.Z),new A.az(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.uw,k,new A.b7(A.m(10),B.Z),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bM(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tW,k,k,k),new C.dAI(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ci(A.v(v,B.ai,k,B.e,B.Q,0,B.p),B.q,k,B.z,k,k,k,k,B.aj),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uE,B.j5,k,k,360)},
$S:184}
C.dAC.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.dAD.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dAE.prototype={
$0(){return this.b.$1(new C.dAB(this.a))},
$S:0}
C.dAB.prototype={
$0(){var w=this.a
w.d=B.vg
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dAJ.prototype={
$0(){return this.b.$1(new C.dAA(this.a))},
$S:0}
C.dAA.prototype={
$0(){var w=this.a
w.d=B.a1J
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dAK.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dAL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wb(null,u.b,A.bX(2020,1,1,0,0,0,0,0),null,s,A.bX(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dAz(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dAz.prototype={
$0(){var w=this.b
return this.a.a=A.bX(w.gcd(),w.gca(),w.gcq(),0,0,0,0,0)},
$S:0}
C.dAM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.O5(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dAy(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dAy.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dAN.prototype={
$0(){return this.b.$1(new C.dAx(this.a))},
$S:0}
C.dAx.prototype={
$0(){return this.a.b=""},
$S:0}
C.dAO.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dT:B.c
w=3
return A.b(A.c2(q,null,new C.dAv(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.O5(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dAw(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dAv.prototype={
$1(d){var w=null
return A.bq(!0,A.v(A.a([A.dM(!1,w,w,w,!0,w,w,w,!0,w,B.ajq,w,w,w,w,new C.dAp(d),!1,w,w,w,w,w,w,w,D.f3P,w,w,w),A.dM(!1,w,w,w,!0,w,w,w,!0,w,B.ajo,w,w,w,w,new C.dAq(d),!1,w,w,w,w,w,w,w,D.fa8,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ah,!0,!0)},
$S:33}
C.dAp.prototype={
$0(){A.a6(this.a,!1).M("camera")
return null},
$S:0}
C.dAq.prototype={
$0(){A.a6(this.a,!1).M("gallery")
return null},
$S:0}
C.dAw.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dAP.prototype={
$0(){return this.b.$1(new C.dAu(this.a))},
$S:0}
C.dAu.prototype={
$0(){return this.a.c=""},
$S:0}
C.dAQ.prototype={
$0(){return this.a.$1(new C.dAt())},
$S:0}
C.dAt.prototype={
$0(){},
$S:0}
C.dAF.prototype={
$0(){return this.a.$1(new C.dAs(this.b))},
$S:0}
C.dAs.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dAG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.afN(u.a,null,null,new C.dAr(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dAr.prototype={
$4(d,e,f,g){this.a.$1(new C.dAo(this.b,d))},
$S:394}
C.dAo.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.v(w,this.b)},
$S:0}
C.dAH.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.dAI.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.P(D.eFz)
return}if(w.a.d==null){w.c.I(x.q).f.P(D.eCv)
return}A.a6(w.c,!1).M(!0)},
$S:0}
C.dBb.prototype={
$3(d,e,f){return B.bG},
$C:"$3",
$R:3,
$S:89}
C.dBc.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dT:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aO:B.az,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zW(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yk(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yk(r).length>0?B.bM:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bn
t=(q?B.bq:B.bn).j(0.28)
s=x.p
return new A.cV(e,!1,A.au(A.aE(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.ay,A.A(A.a([A.D(A.dX(B.n5,new C.dB9(d),A.dd(r,r,r,r,r,r,r,r,r,w,r,r,B.jK,r,new A.b7(A.m(10),B.Z),new A.az(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bM(D.fax,new C.dBa(d),A.bk(B.cY,r,r,r,B.c,r,B.jK,r,new A.b7(A.m(10),B.Z),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Ah,E.Wk,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ad),r,r,r),r)},
$S:30}
C.dB9.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.dBa.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.dB5.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dB6(r),p=r.a.d.a,o=p?B.dT:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aO:B.az,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zW(l.c),s,s,s,s,s,s,D.eRo,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iv((r.a.d.a?B.bq:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Y1,"View receipt",new C.dAZ(r,d,l))
u=l.x!=null
t=u?B.tl:B.pk
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bjO,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dB_(r,d,l)),q.$3$icon$label$onTap(B.Ay,"Edit",new C.dB0(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.m5,"View / download ID",new C.dB1(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bsM,"View / download selfie",new C.dB2(r,d,l)))
if(l.gaCv())p.push(q.$3$icon$label$onTap(A2.Z7,"View / download signature",new C.dB3(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bM,B.e8,"Delete",new C.dB4(r,d,l)))
p.push(B.av)
return A.bq(!0,new A.C(B.uA,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ah,!0,!0)},
$S:33}
C.dB6.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aO:B.az
else w=d
return A.aK(!1,v,!0,new A.C(B.eN,A.A(A.a([A.W(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1890}
C.dAZ.prototype={
$0(){A.a6(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fvB(w,this.c)},
$S:0}
C.dB_.prototype={
$0(){A.a6(this.b,!1).M(null)
this.a.QF(this.c)},
$S:0}
C.dB0.prototype={
$0(){A.a6(this.b,!1).M(null)
this.a.Cd(this.c)},
$S:0}
C.dB1.prototype={
$0(){var w,v,u
A.a6(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bAz(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dB2.prototype={
$0(){var w,v,u
A.a6(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bAz(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dB3.prototype={
$0(){A.a6(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fvG(w,this.c)},
$S:0}
C.dB4.prototype={
$0(){A.a6(this.b,!1).M(null)
this.a.MM(0,this.c)},
$S:0}
C.dBd.prototype={
$1(d){return d.x==null},
$S:235}
C.dBe.prototype={
$1(d){return d.x!=null},
$S:235}
C.dBf.prototype={
$2(d,e){return d+e.c},
$S:1891}
C.dBg.prototype={
$0(){return this.a.buH()},
$S:0}
C.dB7.prototype={
$0(){return this.a.acG(this.b)},
$S:0}
C.ffw.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.ffx.prototype={
$0(){return B.d.gK(D.a_j)},
$S:z+68}
C.d10.prototype={
$0(){var w=this.a
return w.m(new C.d0Z(w,this.b))},
$S:0}
C.d0Z.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d1_.prototype={
$0(){},
$S:0}
C.d11.prototype={
$0(){var w=this.a.gbSU()
A.a6(this.b,!1).M(w)
return null},
$S:0}
C.fhs.prototype={
$1(d){return C.fRV(A.a_(d,x.N,x.z))},
$S:z+11}
C.fht.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fhu.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aK(w,v)
return d.d.aK(0,e.d)},
$S:z+26}
C.fui.prototype={
$1(d){return d.ac()},
$S:z+21}
C.fCe.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.feZ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bKy.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eV(e,v)?v:null},
$S:1892}
C.fuO.prototype={
$1(d){var w=this
return new C.XL(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d1G.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d1F(w,d))},
$S:z+66}
C.d1F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d1u.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cu(u)?v.r>=J.ab(v.d):w)v.r=J.ab(v.d)-1},
$S:0}
C.d1r.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d12.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d13.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d1v.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d1b.prototype={
$1(d){var w=null,v=A.M(d).ax.a===B.H,u=v?B.dT:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.az,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eq(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.d19(d),w,w),A.bM(B.vC,new C.d1a(d),A.bk(B.my,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d19.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.d1a.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.d1c.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d1s.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d1t.prototype={
$0(){return B.d.gK(D.xS)},
$S:z+12}
C.d17.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxB(0),t=J.ab(w.d)
w=J.ab(w.d)===1?"page":"pages"
return new C.Rh(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d18.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d1d.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Xj(v,u,J.ab(w.d),null)},
$S:z+64}
C.d1e.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d1E.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aH(s,new C.X1(r.y,r.gxB(0),J.ab(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d1C(r),s,s,s,s,s,s,!1,B.ac)
else{w=e-1
v=J.q(r.d,w)
J.ab(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b7v(v,e,w,u,t,r.gbKi(),C.h5P(r.y.Q),r.gxB(0),s)
w=t}return A.c5(q,new C.d1D(r,e),new A.C(B.Wl,w,s))},
$S:1893}
C.d1D.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcW(t).ay){t=this.b
u=x.cy.a(B.d.gcW(u.f.f)).gu7(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dj()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fm(v*3.141592653589793*0.5)
return A.fq(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.d1C.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aDz(B.p8,B.ip)},
$S:0}
C.d1o.prototype={
$0(){var w=this.a
return w.m(new C.d1n(w))},
$S:0}
C.d1n.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d1p.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).M(null)
return null},
$S:0}
C.d14.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jD.j(0.5),r=x.p,q=A.a([D.f2v,B.aa],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.Xh(d,B.dS,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Xh(d,I.aho,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cu(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cM,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k2.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cM,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k2.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Xh(d,Z.aiu,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Xh(d,B.pr,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Xh(d,B.pr,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eB(u,E.zH,A.bq(!0,new A.C(A1.Ac,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ah,!0,!0),u,u,u,D.aeV,B.cZ,u,new A.b7(t,new A.az(s,1.4,B.r,-1)),u)},
$S:46}
C.d1q.prototype={
$0(){A.a6(this.a,!1).M(this.b)
return null},
$S:0}
C.d1h.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cu(w.d)
return new C.XN(v,J.cu(w.d),w.r+1,null)},
$S:z+54}
C.d1i.prototype={
$1(d){var w=null
return A.o2(!1,A.eq(w,w,w,E.zH,new A.k6(this.a,new C.d1g(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:326}
C.d1g.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a4t,B.nN,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:543}
C.d1j.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d1k.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:182}
C.d1l.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d1m.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.A4(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Q8(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d1f(s,t))
w=4
return A.b(s.kx(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d1f.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d1x.prototype={
$1(d){var w=null
return A.o2(!1,A.eq(w,w,w,E.zH,new A.k6(this.a,new C.d1w(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:326}
C.d1w.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a4t,B.nN,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:543}
C.d1y.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d1z.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:182}
C.d1A.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:182}
C.d1B.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.A4(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kx(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d15.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bcW(B.p8,T.Kt)},
$S:0}
C.d16.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aDz(B.p8,T.Kt)},
$S:0}
C.d3q.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.d3r.prototype={
$1(d){var w=this.a
return w.m(new C.d3p(w))},
$S:9}
C.d3p.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d3s.prototype={
$1(d){var w=this.a
return w.m(new C.d3o(w))},
$S:9}
C.d3o.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d3t.prototype={
$1(d){var w=this.a
return w.m(new C.d3n(w))},
$S:9}
C.d3n.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d3u.prototype={
$0(){var w=this.a
return w.m(new C.d3m(w,this.b))},
$S:0}
C.d3m.prototype={
$0(){var w=this.b
this.a.d.saT(0,w)
return w},
$S:0}
C.d3v.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_Q()
A.a6(this.b,!1).M(new A.blT(w,v))},
$S:0}
C.d1V.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d1U.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.XJ(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d1Z.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d1Y.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b3f(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hv,v,v,v)
return A.eq(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.d1W(d),v,v),A.bM(B.vC,new C.d1X(d),A.bk(B.my,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zH,w,v,v,v,v,D.f1q,v)},
$S:19}
C.d1W.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.d1X.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.d2_.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.d20.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.ci(A.c6(B.bF,r,B.bx,18,14),B.q,t,B.z,t,D.bkK,t,t,B.aj)},
$S:277}
C.d1T.prototype={
$0(){return this.a.OI(0,this.b)},
$S:0}
C.d1S.prototype={
$0(){return this.a.Oc(0,this.b)},
$S:0}
C.cAZ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cB_.prototype={
$0(){return B.d.gK(D.xS)},
$S:z+12}
C.cB0.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.bW(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.bc),w),0,0,0)},
$S:1895}
C.cUq.prototype={
$1(d){return this.a.m(new C.cUp(this.b,this.c))},
$S:9}
C.cUp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cUP.prototype={
$1(d){return this.a.m(new C.cUC())},
$S:2}
C.cUC.prototype={
$0(){},
$S:0}
C.cUQ.prototype={
$1(d){return this.a.m(new C.cUB())},
$S:2}
C.cUB.prototype={
$0(){},
$S:0}
C.cUR.prototype={
$0(){var w=this.a
return w.m(new C.cUA(w,this.b))},
$S:0}
C.cUA.prototype={
$0(){var w=this.a
return w.d=w.gnz().EG(this.b.a)},
$S:0}
C.cUS.prototype={
$0(){var w=this.a
return w.m(new C.cUz(w,this.b))},
$S:0}
C.cUz.prototype={
$0(){var w=this.a
return w.d=w.gnz().czx(this.b)},
$S:0}
C.cUT.prototype={
$1(d){return this.a.m(new C.cUy())},
$S:2}
C.cUy.prototype={
$0(){},
$S:0}
C.cUU.prototype={
$0(){var w=this.a
return w.m(new C.cUx(w,this.b))},
$S:0}
C.cUx.prototype={
$0(){var w=this.a
return w.d=w.gnz().czC(this.b.a)},
$S:0}
C.cUV.prototype={
$1(d){var w=this.a
return w.m(new C.cUK(w,d))},
$S:6}
C.cUK.prototype={
$0(){var w=this.a
return w.d=w.gnz().cAw(this.b)},
$S:0}
C.cUW.prototype={
$1(d){var w=this.a
return w.d=w.gnz().aAL(d)},
$S:2}
C.cUX.prototype={
$1(d){var w=this.a
return w.d=w.gnz().czF(d)},
$S:2}
C.cUZ.prototype={
$1(d){var w=this.a
return w.d=w.gnz().cAu(d)},
$S:2}
C.cV_.prototype={
$1(d){var w=this.a
return w.m(new C.cUJ(w,d))},
$S:9}
C.cUJ.prototype={
$0(){var w=this.a
return w.d=w.gnz().cAl(this.b)},
$S:0}
C.cV0.prototype={
$0(){var w=this.a,v=w.gnz(),u=B.a.i(w.gxB(0).a.a),t=B.a.i(w.gay8().a.a)
u=v.b7N(B.a.i(w.gaog().a.a),t,u)
A.a6(this.b,!1).M(u)
return null},
$S:0}
C.dOv.prototype={
$0(){var w=this.a
w.ve()
w.a.bo()
w.a.pe()},
$S:0}
C.dOu.prototype={
$0(){var w=this.a
w.ve()
w.a.bo()
w.a.pe()},
$S:0}
C.dOx.prototype={
$0(){var w=this,v=w.b
if(J.cu(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dOy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dOz.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dOt.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dOw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dOB.prototype={
$0(){this.a.Nh()
return null},
$S:0}
C.dOA.prototype={
$0(){return this.a.Dy(this.b)},
$S:0}
C.dNW.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bJ(!1,B.dd,w,w,!0,w,w,new C.dNU(d),w,w),r=A.bk(B.bS,w,w,w,w,w,w,w,w,w,w,w)
return A.eq(A.a([s,A.bM(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dNV(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dNU.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.dNV.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.dNX.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cA0(this.b)},
$S:0}
C.dNR.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aPm(w.b,w.c,w.d)},
$S:8}
C.dNp.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dNq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dNE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Fs(t.a.c),$async$$0)
case 2:s=r.qN(q.dG(e,new C.dNC(t)))
if(s!=null&&t.c!=null)t.m(new C.dND(t,s))
t.a.bo()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dNC.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dND.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dNF.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dNG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dNQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cAO(C.h5Z(w),w)},
$S:0}
C.dNO.prototype={
$1(d){return new A.e7(new C.dNN(this.a,this.b),null)},
$S:21}
C.dNN.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dT:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.az,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aG(v,v,v,v,B.aj4,v,v,v,p>0?new C.dNJ(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aN,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.az,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aG(v,v,v,v,B.ajD,v,v,v,new C.dNK(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eq(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.dNL(d),v,v),A.bM(B.oL,new C.dNM(d),A.bk(B.bS,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:154}
C.dNJ.prototype={
$0(){return this.b.$1(new C.dNI(this.a))},
$S:0}
C.dNI.prototype={
$0(){return--this.a.a},
$S:0}
C.dNK.prototype={
$0(){return this.b.$1(new C.dNH(this.a))},
$S:0}
C.dNH.prototype={
$0(){return++this.a.a},
$S:0}
C.dNL.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.dNM.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.dNP.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cAB(this.a.a)
w.r.a7(0)},
$S:0}
C.dNd.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.afT(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h_R(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dNe.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aAI(w)},
$S:0}
C.dNZ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.abm(this.b,w,this.c,null)},
$S:z+24}
C.dNT.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dT:B.c,t=A.m(20),s=A.W(B.l5,B.aT,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.az,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.aa,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eq(A.a([A.bM(D.fbz,new C.dNS(d),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w))],o),B.b7,w,u,v,w,s,w,new A.b7(t,B.Z),r,w)},
$S:19}
C.dNS.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.dNf.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dNg.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dNh.prototype={
$1(d){return d.a},
$S:z+7}
C.dNi.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hS(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aAI(w)},
$S:0}
C.dNm.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.afT(q)
w=A.U(q).k("a3<1>")
q=A.B(new A.a3(q,new C.dNk(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h_R(v.e,null,r,v.f,v.r,new C.dNl(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dNl.prototype={
$0(){return this.a.a7X(this.b)},
$S:0}
C.dNk.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dNn.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("J<1,hS>")
w=A.B(new A.J(w,new C.dNj(this.b),v),v.k("ai.E"))
u.d=t.aAI(w)},
$S:0}
C.dNj.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dNY.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dNz.prototype={
$1(d){return d.length!==0},
$S:3}
C.dNA.prototype={
$1(d){var w=this
return new A.e7(new C.dNy(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dNy.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dT:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aO:B.az,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dNu(u,e,o),A.U(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.U,!1,v,!0,B.q,v,A.aM(),u,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(12),B.df),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ag,v,v,v,v,v,B.lK,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.ai,v,B.e,B.Q,0,B.p)
t=w.a
return A.eq(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.dNv(d),v,v),A.bM(B.I7,new C.dNw(t,u,o,e),A.bk(B.bS,v,v,v,v,v,v,v,v,v,v,v)),A.bM(D.f_F,new C.dNx(t,u,o,d),A.bk(B.aT,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:154}
C.dNu.prototype={
$1(d){var w=null
return A.dM(!1,B.ah,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aO:B.az,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.bG_,w,w,w,new C.dNt(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1896}
C.dNt.prototype={
$0(){return this.a.$1(new C.dNr(this.b,this.c))},
$S:0}
C.dNr.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dNv.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.dNw.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dNs(w.c,u))
v.bL(0,B.c3)}},
$S:0}
C.dNs.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dNx.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).M(!0)},
$S:0}
C.dNB.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cBf(this.b,D.t0,C.Fq(v,w.a.c))},
$S:0}
C.dO5.prototype={
$1(d){return d.as},
$S:z+1}
C.dO6.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iJ(this.b,w)},
$S:0}
C.dO7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hUs(v)
return w.Ug(v==null?null:v.a)},
$S:0}
C.dO8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hx7(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gci(k)){k=A.aO(1/0,e.a,e.b)
s=A.aO(1/0,e.c,e.d)
l.cjR(new A.as(u,t),v.gbdK(),new A.as(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cD6:D.cBC
q=A.I(s?B.du:D.b4h,B.r,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.baQ(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.am(B.X,m,B.a9,B.q,A.a([o,A.bZ(0,A.tX(new A.N(n,n,n,n),new A.a4(u,t,new C.bbI(l.d,v,l.f,w,new C.dO1(l),l.gc4f(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.bsV(s,new C.dO2(l,e),new C.dO3(l,e),new C.dO4(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ao),B.f,m,m,new A.o(m,m,q,k,m,new A.a5(B.b1,B.b3,B.x,r,m,m),B.n),m,m,m,P.ae0,m,m,m,m)},
$S:209}
C.dO1.prototype={
$1(d){var w=this.a
w.m(new C.dO_(w,d))},
$S:2}
C.dO_.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dO2.prototype={
$0(){var w=this.b
return this.a.b5t(1.25,new A.as(A.aO(1/0,w.a,w.b),A.aO(1/0,w.c,w.d)))},
$S:0}
C.dO3.prototype={
$0(){var w=this.b
return this.a.b5t(0.8,new A.as(A.aO(1/0,w.a,w.b),A.aO(1/0,w.c,w.d)))},
$S:0}
C.dO4.prototype={
$0(){var w=this,v=w.b
return w.a.aPm(new A.as(A.aO(1/0,v.a,v.b),A.aO(1/0,v.c,v.d)),new A.as(w.c,w.d),w.e.gbdK())},
$S:0}
C.dO9.prototype={
$0(){var w=this.a
return w.m(new C.dO0(w))},
$S:0}
C.dO0.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dNo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fG(new A.fz(s.c)),$async$$0)
case 2:t.x5("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d24.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.bfo(u,C.ha3(v.c,u),new C.d23(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d23.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d25.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.biG(d.d,d.c,u.f.t(0,d.a),new C.d22(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d22.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.ffA.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.qN(new A.cW(new A.a3(v,new C.ffB(d),w.k("a3<1>")),new C.ffC(),w.k("cW<1,n>")))},
$S:z+20}
C.ffB.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.ffC.prototype={
$1(d){return d.a},
$S:z+7}
C.ffy.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.ffz.prototype={
$1(d){return d.b},
$S:z+7}
C.ffF.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.qN(new A.cW(new A.a3(v,new C.ffG(d),w.k("a3<1>")),new C.ffH(),w.k("cW<1,n>")))},
$S:z+20}
C.ffG.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.ffH.prototype={
$1(d){return d.a},
$S:z+7}
C.ffD.prototype={
$1(d){var w,v=A.eM([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.ffE.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d27.prototype={
$0(){return this.a},
$S:z+32}
C.d2o.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:264}
C.d2g.prototype={
$2(d,e){var w=this.a.ce(0,d,new C.d2h()),v=J.a8(w)
if(!v.t(w,e))v.L(w,e)},
$S:122}
C.d2h.prototype={
$0(){return A.a([],x.s)},
$S:556}
C.d2f.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eV(w,e)
return w===!0},
$S:322}
C.d28.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d2e.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d2d.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Bf:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Bf:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1898}
C.d29.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d2i.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.L(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.L(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.Bf:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.ba(w,new C.d2j(r)))w.push(r)}}B.d.bm(w,new C.d2k(a8))
B.d.b0(w,new C.d2l())
q=C.hx6(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.ei8],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gK(k)+B.d.gak(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.blD(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1899}
C.d2j.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d2k.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d2l.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+19}
C.d2m.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a2(v).k("bc<2>")).cG(0,0,B.q2)+88-w.gK(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:671}
C.d2n.prototype={
$1(d){return 16+d*156},
$S:259}
C.d26.prototype={
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
t.n(0,d,new C.EJ(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.EJ(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.EJ(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.IT(d,new A.u(e+t,w),s,s.length))}},
$S:182}
C.d2a.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aGD(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:122}
C.d2b.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d2c.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:585}
C.d2p.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:585}
C.d2q.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:461}
C.d2r.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:191}
C.d2s.prototype={
$1(d){return d>=0.5},
$S:140}
C.eZV.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hl(A.aK(!1,v,!0,new A.a4(38,38,A.W(d,this.a.c?B.c:B.cB,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1901}
C.eB9.prototype={
$1(d){var w=null,v=A.m(8),u=B.bS.j(0.12),t=A.m(8)
return new A.C(B.ob,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eNd,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.KX,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eB8(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eB8.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dig.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dif.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.n2,B.L,w,w)
return A.eq(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.did(d),w,w),A.bJ(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lW,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.die(d),w,w)],x.p),B.b7,B.Ee,w,u,D.bm_,w,D.bnX,new A.b7(v,B.Z),w,w)},
$S:19}
C.did.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.die.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.dip.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.diq.prototype={
$1(d){var w=this.a
return w.m(new C.dio(w,d))},
$S:z+37}
C.dio.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dir.prototype={
$1(d){var w=null
return A.pV(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.diu.prototype={
$1(d){var w=this.a
return w.m(new C.din(w,d))},
$S:32}
C.din.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dit.prototype={
$1(d){var w=null
return A.pV(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.div.prototype={
$1(d){var w=this.a
return w.m(new C.dim(w,d))},
$S:32}
C.dim.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.diw.prototype={
$0(){var w=this.a
return w.m(new C.dil(w))},
$S:0}
C.dil.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dix.prototype={
$0(){var w=this.a
return w.m(new C.dik(w))},
$S:0}
C.dik.prototype={
$0(){return++this.a.at},
$S:0}
C.diy.prototype={
$0(){var w=this.a
return w.m(new C.dij(w))},
$S:0}
C.dij.prototype={
$0(){return--this.a.ax},
$S:0}
C.diz.prototype={
$0(){var w=this.a
return w.m(new C.dii(w))},
$S:0}
C.dii.prototype={
$0(){return++this.a.ax},
$S:0}
C.diA.prototype={
$1(d){var w=this.a
return w.m(new C.dih(w,d))},
$S:9}
C.dih.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dis.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.diB.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bS.j(0.18)
else w=q.c.a?B.dT:B.c
v=A.m(12)
if(p)u=B.bS
else u=(q.c.a?B.dY:B.bX).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bS
else t=q.c.a?B.bq:B.bn
t=A.W(f,t,r,r,r,18)
if(p)s=B.bS
else s=q.c.a?B.bq:B.bn
return A.D(A.aE(!1,B.a1,!0,r,A.aK(!1,o,!0,A.dh(r,A.v(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eL,r,r,r,B.jK,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.diC(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ad),1)},
$S:z+39}
C.diC.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.diL.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.c4Q.prototype={
$2(d,e){return new A.bt(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:90}
C.c4X.prototype={
$1(d){return d.ac()},
$S:z+5}
C.c4Y.prototype={
$2(d,e){var w=J.b6(e,new C.c4W(),x.a)
w=A.B(w,w.$ti.k("ai.E"))
return new A.bt(d,w,x.d2)},
$S:z+41}
C.c4W.prototype={
$1(d){return d.ac()},
$S:z+21}
C.c4S.prototype={
$1(d){return C.aiK(A.a_(d,x.N,x.z))},
$S:z+8}
C.c4T.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c4U.prototype={
$1(d){return C.fRV(A.a_(d,x.N,x.z))},
$S:z+11}
C.c4V.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c51.prototype={
$1(d){return new A.aDJ(d.f.length,d.a,d.b)},
$S:z+43}
C.c52.prototype={
$2(d,e){return B.a.aK(d.c,e.c)},
$S:480}
C.c4Z.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c5_.prototype={
$1(d){return d.cAd(C.Fq(d,this.a))},
$S:z+44}
C.dOi.prototype={
$1(d){return C.tt(d,this.a.a.c)},
$S:z+2}
C.dOj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dOn.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dOo.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dOf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aXA(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xC("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oJ(r.c,r.e),$async$$0)
case 4:s.xC(p)
w=5
return A.b(s.It(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aXA(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xC("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oJ(r.c,r.e),$async$$0)
case 4:s.xC(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.TC(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xC("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xC("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xC("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.It(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a7(j)
o=r.a
if(o.c==null){w=1
break}o.xC(B.a.e4(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dOm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aXz(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xC("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ck(A.eu(new C.dOl(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oJ(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOl.prototype={
$1(d){var w=this.b
return new C.YI(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dOk.prototype={
$1(d){return D.ftU},
$S:z+46}
C.dOq.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.dOr.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dOp(w,d)
return new A.C(B.db,new C.bbM(this.b,d.c,d.a,w,null),null)},
$S:1902}
C.dOp.prototype={
$0(){return this.a.VY(this.b.b)},
$S:0}
C.dOa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dOb.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dOc.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dOd.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dOe.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.dOs.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dr(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).M(s)
return}},
$S:187}
C.dAg.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dAh.prototype={
$0(){return B.d.gK(D.a0G)},
$S:z+48}
C.dAi.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.au(A.W(this.b.d,B.c.j(0.95),w,w,D.cIZ,44),w,w,w),w,w,new C.bgv(u,t,v,w),B.at)},
$S:68}
C.fvg.prototype={
$1(d){return A.ot(new C.fvf(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:126}
C.fvf.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dT:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.qR,24)],x.V),o=r?B.dY:B.bX
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aT.j(0.25),B.bS.j(0.18)],x.O)
w=A.p(t,D.bAD,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a5(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aO:B.az,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.aeZ,A.A(A.a([w,B.be,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ia(!0,t,e,B.z,D.eAG,new C.fve(this.b,s),20,B.aez,t,B.aj,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kp,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fve.prototype={
$2(d,e){var w=null,v=D.a0G[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dY:B.bX,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ei,8)],x.V),p=A.m(15),o=A.D(new C.a4z(v.a,!0,w),1),n=s?B.jj:B.iK,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aO:B.az,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aE(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ev(A.bu(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l2,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.ao),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fvd(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ad)},
$S:74}
C.fvd.prototype={
$0(){A.a6(this.a,!1).M("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ccu.prototype={
$0(){return this.a.adK(this.b)},
$S:0}
C.fuG.prototype={
$1(d){return D.fqB},
$S:z+74}
C.fC4.prototype={
$1(d){var w=this
return new C.a_q(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fuI.prototype={
$1(d){return new C.Xl(this.a,null)},
$S:z+51}
C.fuH.prototype={
$1(d){return D.frA},
$S:z+52}
C.cVc.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.cVd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cVb(w,d))},
$S:32}
C.cVb.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cVe.prototype={
$1(d){return this.a.J2()},
$S:2}
C.cVf.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.cV8.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.cV9.prototype={
$1(d){return this.a.J2()},
$S:2}
C.cVa.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.csM.prototype={
$0(){},
$S:0}
C.csS.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.csT.prototype={
$0(){return this.a.aKW(-1)},
$S:0}
C.csU.prototype={
$1(d){return this.a.m(new C.csR())},
$S:2}
C.csR.prototype={
$0(){},
$S:0}
C.csV.prototype={
$0(){return this.a.aKW(1)},
$S:0}
C.csW.prototype={
$1(d){return this.a.m(new C.csQ())},
$S:2}
C.csQ.prototype={
$0(){},
$S:0}
C.csX.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aT.j(0.2)
if(s)v=B.aT
else v=this.b.a?B.dY:B.bX
return A.tN(u,u,B.aZ,r,u,new C.csP(t,d),B.Ai,s,w,u,new A.az(v,1,B.r,-1),B.c7)},
$S:1903}
C.csP.prototype={
$1(d){var w=this.a
return w.m(new C.csN(w,this.b))},
$S:9}
C.csN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.csY.prototype={
$1(d){return this.a.m(new C.csO())},
$S:2}
C.csO.prototype={
$0(){},
$S:0}
C.csZ.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.eZn.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).M(w)},
$S:2}
C.eZo.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.eZp.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).M(w)},
$S:0}
C.eZl.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbtS()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.bnW,new A.en(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bsK(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:68}
C.eZm.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dH.au(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aT,B.bS,w)
s.toString
s=A.a([B.aZ,s,B.aT],x.O)
return A.aE(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ev(D.dUU,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a5(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ad)},
$S:130}
C.ftw.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.eyj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eya.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eyb.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eyh.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e7(new C.eyg(w,this.b),null)},
$S:21}
C.eyg.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dT:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.az,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eB(w,u,new A.C(B.aeT,A.v(A.a([s,B.aq,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aa,C.fXH(new C.eyd(r,e),r.a),B.ay,A.A(A.a([A.D(A.dX(B.dd,new C.eye(d),w),1),B.aw,A.D(A.bM(B.S4,new C.eyf(r,d),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b7(t,B.Z),w)},
$S:97}
C.eyd.prototype={
$1(d){return this.b.$1(new C.eyc(this.a,d))},
$S:32}
C.eyc.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eye.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.eyf.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).M(w)
return null},
$S:0}
C.eyi.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Rj(this.b)},
$S:0}
C.ey5.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b7l(w)},
$S:0}
C.ey9.prototype={
$1(d){return this.bgb(d)},
bgb(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.K4(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iJ(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.ey8.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a3<1>")
w=A.B(new A.a3(w,new C.ey7(this.b),v),v.k("G.E"))
u.d=t.b7l(w)},
$S:0}
C.ey7.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eyk.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iJ(this.b,w)},
$S:0}
C.eyl.prototype={
$1(d){return this.a.bxP(d,this.b)},
$S:z+55}
C.ey6.prototype={
$0(){return this.a.a7W(this.b)},
$S:0}
C.fBX.prototype={
$1(d){return new C.abH(this.a,this.b,this.c,null)},
$S:z+56}
C.eyn.prototype={
$0(){return this.a.Yx(this.b)},
$S:0}
C.eyo.prototype={
$0(){return this.a.OE(this.b)},
$S:0}
C.eyp.prototype={
$0(){return this.a.Dt(this.b)},
$S:0}
C.eyq.prototype={
$0(){return this.a.Yy(this.b)},
$S:0}
C.eym.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.ey0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ey1.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.ey2.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.ey4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pk(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ey3(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ey3.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eyN.prototype={
$2(d,e){return d+e.gwh()},
$S:z+59}
C.eyJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eyK.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eyu.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dT:B.c,s=A.m(24),r=A.p(v,D.bB2,B.f,v,v,new A.o(B.aE.j(u?0.18:0.08),v,A.I(B.aE.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.az,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aO:B.az
u=u?B.dY:B.bX
w=x.p
return A.eB(v,t,new A.C(B.wS,A.v(A.a([r,B.aN,q,B.P,p,B.d4,A.A(A.a([A.D(A.dX(B.n5,new C.eys(d),A.dd(v,v,v,v,v,v,v,v,v,o,v,v,B.f2,v,new A.b7(A.m(14),B.Z),new A.az(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bM(D.ff0,new C.eyt(d),A.bk(B.aE,v,v,v,v,v,B.f2,v,new A.b7(A.m(14),B.Z),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.cZ,v,new A.b7(s,B.Z),v)},
$S:46}
C.eys.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.eyt.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.eyD.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dT:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fG,28)],x.V),g=k?D.cPg:B.a04,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.euY,B.av,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cq,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a5(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aeW,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b0K(B.b2,B.iO,new C.eyA(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b0K(B.ct,M.xx,new C.eyB(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aE.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aE.j(0.28),B.r,1)
o=A.p(m,D.bAs,B.f,m,m,new A.o(B.aE.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aO:B.az,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bq(!0,new A.C(B.uC,A.p(m,A.v(A.a([g,new A.C(B.aeU,A.v(A.a([w,B.S,u,B.bu,t,B.S,A.aE(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.A(A.a([o,B.be,n,A.W(B.en,k?B.bq:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bA,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eyC(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ad)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.ao,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ah,!0,!0)},
$S:33}
C.eyA.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).M(null)
w=2
return A.b(u.a.uQ("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eyB.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).M(null)
w=2
return A.b(u.a.uQ("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eyC.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).M(null)
w=2
return A.b(u.a.Mz(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eyy.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dT:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eQ,24)],x.V),k=o?B.dY:B.bX
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bn
u=A.bu(w,new A.a4(48,48,C.aNT(!0,A.m(12),48,Q.Lu,u,v.c,48),q),B.ao)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aO:B.az,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zW(v.gwh())
s=x.p
r=this.a
return A.bq(!0,new A.C(B.uC,A.p(q,A.v(A.a([B.S,k,new A.C(D.aeR,A.A(A.a([u,B.be,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zV,r.cee(B.tk,B.aT,new C.eyw(d),p,"QR code or backup file","Transfer project"),r.aYP(!0,B.e8,B.aE,new C.eyx(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ah,!0,!0)},
$S:33}
C.eyw.prototype={
$0(){A.a6(this.a,!1).M("transfer")
return null},
$S:0}
C.eyx.prototype={
$0(){A.a6(this.a,!1).M("delete")
return null},
$S:0}
C.eyz.prototype={
$1(d){return this.bgc(d)},
bgc(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.K4(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.v2(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eyQ.prototype={
$0(){var w=this.a
w.a.bo()
w.m(new C.eyP(w))},
$S:0}
C.eyP.prototype={
$0(){return this.a.r++},
$S:0}
C.eyR.prototype={
$0(){var w=this.a
return w.m(new C.eyO(w))},
$S:0}
C.eyO.prototype={
$0(){return this.a.r++},
$S:0}
C.eyr.prototype={
$0(){var w=this.a.c
w.toString
return A.iJ(w,null)},
$S:0}
C.eyv.prototype={
$0(){return this.a.c7I(this.b)},
$S:0}
C.eyM.prototype={
$0(){var w=this.a
return w.m(new C.eyL(w,this.b))},
$S:0}
C.eyL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eyG.prototype={
$0(){return this.a.uQ("scan")},
$S:0}
C.eyH.prototype={
$0(){return this.a.uQ("file")},
$S:0}
C.eyI.prototype={
$1(d){return this.a.cef(d,this.b)},
$S:z+60}
C.eyF.prototype={
$0(){return this.a.Dx(this.b)},
$S:0}
C.eyE.prototype={
$0(){return this.a.Z1(this.b,this.c)},
$S:0}
C.csd.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.csc.prototype={
$1(d){return d.ac()},
$S:z+62}
C.csa.prototype={
$1(d){return C.hfQ(A.a_(d,x.N,x.z))},
$S:z+63}
C.csb.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.feR.prototype={
$1(d){return d.y===D.k8},
$S:z+2}
C.fCm.prototype={
$1(d){return C.byw(d,this.a)},
$S:z+2}
C.fdQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bKD.prototype={
$1(d){return!d.as},
$S:z+1}
C.bKC.prototype={
$1(d){return d.ac()},
$S:z+15}
C.bKz.prototype={
$1(d){return C.fRW(A.a_(d,x.N,x.z))},
$S:z+14}
C.bKA.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bKB.prototype={
$1(d){return J.k(d)},
$S:17}
C.f5W.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+13}
C.f1C.prototype={
$1(d){return C.fIy(A.a_(d,x.N,x.z))},
$S:z+67}
C.f1D.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f1E.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+13}
C.fux.prototype={
$1(d){return J.k(d)},
$S:17}
C.fuy.prototype={
$1(d){return d.a},
$S:z+69}
C.fuz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuA.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fuB.prototype={
$1(d){return d.Rj(null).ac()},
$S:z+70}
C.fCk.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.ffi.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fhy.prototype={
$1(d){return C.aiK(A.a_(d,x.N,x.z))},
$S:z+8}
C.fhz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fhA.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fhB.prototype={
$1(d){return d.ac()},
$S:z+5}
C.fhC.prototype={
$1(d){return C.tt(d,this.a)},
$S:z+2}
C.fuk.prototype={
$1(d){return C.tt(d,this.a)},
$S:z+2}
C.fCf.prototype={
$1(d){return C.aiK(A.a_(d,x.N,x.z))},
$S:z+8}
C.fCg.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fCh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ff_.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.ff0.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fCq.prototype={
$1(d){return!d.as},
$S:z+1}
C.feB.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.feC.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.feD.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+19}
C.fC5.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fik.prototype={
$1(d){return d.Q},
$S:z+72}
C.fug.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fhv.prototype={
$1(d){return C.aiK(A.a_(d,x.N,x.z))},
$S:z+8}
C.fhw.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fhx.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fue.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f28.prototype={
$1(d){return d.length!==0},
$S:3}
C.f29.prototype={
$1(d){return C.fRW(A.a_(d,x.N,x.z))},
$S:z+14}
C.f2a.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f2b.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f2c.prototype={
$1(d){return d.length!==0},
$S:3}
C.f2p.prototype={
$2(d,e){return d.eN(new C.f2q(e))},
$S:1904}
C.f2q.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1905}
C.f2m.prototype={
$1(d){return C.hBF(d,this.a)},
$S:z+73}
C.f2n.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f2o.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.f6A.prototype={
$1(d){return d.a},
$S:z+49}
C.f6B.prototype={
$1(d){return d.length!==0},
$S:3}
C.f6C.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.f8C.prototype={
$1(d){return d.ac()},
$S:z+5}
C.fdc.prototype={
$1(d){return C.h25(d,C.Fq(d,this.a))},
$S:z+5}
C.fdd.prototype={
$1(d){return C.h26(d,C.Fq(d,this.a))},
$S:z+5};(function aliases(){var w=C.aIZ.prototype
w.bqb=w.q
w=C.aL7.prototype
w.bsw=w.q
w=C.aL8.prototype
w.bsx=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aAy.prototype,"gcbe","cbf",25)
var s
w(s=C.axA.prototype,"gc4l","c4m",42)
v(s,"gaJc","M7",0)
v(s,"gcjc","A0",0)
v(s,"gbFq","MN",0)
v(s,"gcwG","xD",0)
v(s,"gcdd","ZI",0)
v(s,"gbAU","Mv",0)
v(s,"gbFR","Vp",0)
w(s,"gbKi","bKj",71)
v(s,"gbvt","z5",0)
v(C.axB.prototype,"gcwC","Eo",0)
v(s=C.aB8.prototype,"gadm","v3",0)
v(s,"gc6Z","YU",0)
v(s,"gaNc","GV",0)
v(s=C.aB5.prototype,"gcsZ","a0K",0)
v(s,"gadm","v3",0)
v(s,"gchk","a_n",0)
v(s,"gc7V","Z6",0)
w(s,"gc4f","c4g",30)
v(s,"gbFI","H_",0)
v(s,"gctU","ctV",3)
v(s,"gbWx","X3",0)
w(s,"gc2M","c2N",23)
v(s,"gc6J","c6K",3)
v(s=C.azx.prototype,"gc0B","Od",0)
v(s,"gc0D","c0E",3)
v(s,"gbCp","a7y",0)
v(s=C.aB7.prototype,"gbIR","VU",0)
v(s,"gbT0","Wx",0)
v(s,"gcnv","a0c",0)
v(s,"gcjM","a_P",0)
v(C.aB6.prototype,"gcju","af5",0)
v(C.aqj.prototype,"gc2K","Yw",0)
v(C.awm.prototype,"ga0u","J2",3)
v(C.awl.prototype,"ga0u","J2",3)
v(C.av5.prototype,"ga0u","J2",3)
v(s=C.aCz.prototype,"gaYd","P8",0)
v(s,"gbuk","Ua",0)
v(s,"gc7J","c7K",3)
w(C.aCy.prototype,"gc3A","c3B",57)
u(C.aCA.prototype,"gaN6",0,0,null,["$1","$0"],["GU","bDF"],58,0,0)
t(C,"h9f","hLc",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.amf,C.tL,C.mV,C.Gs,C.acT,C.IL,C.tM,C.IT,C.EJ,C.bbK,C.aGD,C.anp,C.d2t,C.ln,C.aQK,C.aQJ,C.aOP,C.tg,C.qy,C.l7,C.hS,C.kq,C.aED])
u(A.i6,[C.fma,C.fm9,C.fmb,C.fv9,C.fc8,C.fc9,C.fce,C.fjU,C.fjT,C.fjS,C.bZf,C.fvF,C.fvx,C.fvJ,C.ff7,C.dAX,C.dAS,C.dAT,C.dAv,C.dAr,C.dBb,C.dBc,C.dB5,C.dB6,C.dBd,C.dBe,C.ffw,C.fhs,C.fht,C.fui,C.fCe,C.feZ,C.fuO,C.d1G,C.d12,C.d1b,C.d1s,C.d17,C.d1d,C.d14,C.d1h,C.d1i,C.d1g,C.d1x,C.d1w,C.d3r,C.d3s,C.d3t,C.d1U,C.d1Z,C.d1Y,C.cAZ,C.cB0,C.cUq,C.cUP,C.cUQ,C.cUT,C.cUV,C.cUW,C.cUX,C.cUZ,C.cV_,C.dOw,C.dNW,C.dNR,C.dNp,C.dNC,C.dNF,C.dNO,C.dNd,C.dNZ,C.dNT,C.dNf,C.dNg,C.dNh,C.dNm,C.dNk,C.dNj,C.dNz,C.dNA,C.dNu,C.dO5,C.dO1,C.d24,C.d25,C.ffA,C.ffB,C.ffC,C.ffy,C.ffz,C.ffF,C.ffG,C.ffH,C.ffD,C.ffE,C.d2o,C.d2e,C.d29,C.d2j,C.d2k,C.d2n,C.d2b,C.d2q,C.d2r,C.d2s,C.eZV,C.eB9,C.dif,C.dip,C.diq,C.dir,C.diu,C.dit,C.div,C.diA,C.diB,C.c4X,C.c4W,C.c4S,C.c4T,C.c4U,C.c4V,C.c51,C.c4Z,C.c5_,C.dOi,C.dOl,C.dOk,C.dOr,C.dOs,C.dAg,C.fvg,C.fuG,C.fC4,C.fuI,C.fuH,C.cVd,C.cVe,C.cV9,C.csU,C.csW,C.csX,C.csP,C.csY,C.eZn,C.ftw,C.eyh,C.eyd,C.ey9,C.ey7,C.eyl,C.fBX,C.eyu,C.eyD,C.eyy,C.eyz,C.eyI,C.csc,C.csa,C.csb,C.feR,C.fCm,C.fdQ,C.bKD,C.bKC,C.bKz,C.bKA,C.bKB,C.f1C,C.f1D,C.fux,C.fuy,C.fuz,C.fuA,C.fuB,C.fCk,C.ffi,C.fhy,C.fhz,C.fhB,C.fhC,C.fuk,C.fCf,C.fCg,C.fCh,C.ff_,C.ff0,C.fCq,C.feB,C.feC,C.fC5,C.fik,C.fug,C.fhv,C.fhw,C.fue,C.f28,C.f29,C.f2a,C.f2b,C.f2c,C.f2q,C.f2m,C.f2n,C.f6A,C.f6B,C.f8C,C.fdc,C.fdd])
u(A.at,[C.aW7,C.aiI,C.aRX,C.X1,C.b7v,C.bbI,C.bfo,C.bsV,C.biG,C.abl,C.bfn,C.abk,C.bfm,C.azy,C.aFG,C.abm,C.IH,C.bbJ,C.aaD,C.bbH,C.bbM,C.aW5,C.aqj,C.abH])
u(A.nc,[C.b86,C.b9h,C.b98,C.aEy,C.bes,C.bbL,C.baQ,C.bgv,C.bsK])
u(A.jp,[C.fvC,C.fvD,C.fvE,C.fvv,C.fvw,C.fvH,C.fvI,C.dB8,C.dAV,C.dAY,C.dAC,C.dAD,C.dAE,C.dAB,C.dAJ,C.dAA,C.dAK,C.dAL,C.dAz,C.dAM,C.dAy,C.dAN,C.dAx,C.dAO,C.dAp,C.dAq,C.dAw,C.dAP,C.dAu,C.dAQ,C.dAt,C.dAF,C.dAs,C.dAG,C.dAo,C.dAH,C.dAI,C.dB9,C.dBa,C.dAZ,C.dB_,C.dB0,C.dB1,C.dB2,C.dB3,C.dB4,C.dBg,C.dB7,C.ffx,C.d10,C.d0Z,C.d1_,C.d11,C.d1F,C.d1u,C.d1r,C.d13,C.d1v,C.d19,C.d1a,C.d1c,C.d1t,C.d18,C.d1e,C.d1C,C.d1o,C.d1n,C.d1p,C.d1q,C.d1j,C.d1l,C.d1m,C.d1f,C.d1y,C.d1B,C.d15,C.d16,C.d3q,C.d3p,C.d3o,C.d3n,C.d3u,C.d3m,C.d3v,C.d1V,C.d1W,C.d1X,C.d2_,C.d1T,C.d1S,C.cB_,C.cUp,C.cUC,C.cUB,C.cUR,C.cUA,C.cUS,C.cUz,C.cUy,C.cUU,C.cUx,C.cUK,C.cUJ,C.cV0,C.dOv,C.dOu,C.dOx,C.dOy,C.dOz,C.dOt,C.dOB,C.dOA,C.dNU,C.dNV,C.dNX,C.dNq,C.dNE,C.dND,C.dNG,C.dNQ,C.dNJ,C.dNI,C.dNK,C.dNH,C.dNL,C.dNM,C.dNP,C.dNe,C.dNS,C.dNi,C.dNl,C.dNn,C.dNY,C.dNt,C.dNr,C.dNv,C.dNw,C.dNs,C.dNx,C.dNB,C.dO6,C.dO7,C.dO_,C.dO2,C.dO3,C.dO4,C.dO9,C.dO0,C.dNo,C.d23,C.d22,C.d27,C.d2h,C.d28,C.eB8,C.dig,C.did,C.die,C.dio,C.din,C.dim,C.diw,C.dil,C.dix,C.dik,C.diy,C.dij,C.diz,C.dii,C.dih,C.dis,C.diC,C.diL,C.dOj,C.dOn,C.dOo,C.dOf,C.dOg,C.dOh,C.dOm,C.dOq,C.dOp,C.dOa,C.dOb,C.dOc,C.dOd,C.dOe,C.dAh,C.fvd,C.ccu,C.cVc,C.cVb,C.cVf,C.cV8,C.cVa,C.csM,C.csS,C.csT,C.csR,C.csV,C.csQ,C.csN,C.csO,C.csZ,C.eZo,C.eZp,C.eyj,C.eya,C.eyb,C.eyc,C.eye,C.eyf,C.eyi,C.ey5,C.ey8,C.eyk,C.ey6,C.eyn,C.eyo,C.eyp,C.eyq,C.eym,C.ey0,C.ey1,C.ey2,C.ey4,C.ey3,C.eyJ,C.eyK,C.eys,C.eyt,C.eyA,C.eyB,C.eyC,C.eyw,C.eyx,C.eyQ,C.eyP,C.eyR,C.eyO,C.eyr,C.eyv,C.eyM,C.eyL,C.eyG,C.eyH,C.eyF,C.eyE])
u(A.af,[C.amm,C.Rh,C.XJ,C.XN,C.XL,C.Xj,C.ans,C.anm,C.Yn,C.anq,C.YI,C.YJ,C.a4z,C.Xl,C.Xk,C.WT,C.a_q,C.Ew,C.auZ,C.aqi,C.aqc,C.aqh,C.MM])
u(A.ag,[C.aAy,C.bbF,C.axA,C.bc_,C.axB,C.b9f,C.aB8,C.aB5,C.azx,C.aB7,C.aB6,C.bgO,C.aIZ,C.awm,C.awl,C.av5,C.bsN,C.aL7,C.aL8,C.aCz,C.bi9,C.aCy,C.buy])
u(A.kC,[C.dAU,C.dAW,C.dAR,C.dBf,C.fhu,C.bKy,C.d1E,C.d1D,C.d1k,C.d1z,C.d1A,C.d20,C.dNN,C.dNy,C.dO8,C.d2g,C.d2f,C.d2d,C.d2i,C.d2l,C.d2m,C.d26,C.d2a,C.d2c,C.d2p,C.c4Q,C.c4Y,C.c52,C.dAi,C.fvf,C.fve,C.eZl,C.eZm,C.eyg,C.eyN,C.csd,C.f5W,C.f1E,C.fhA,C.feD,C.fhx,C.f2p,C.f2o,C.f6C])
t(C.bgw,C.aIZ)
u(A.ml,[C.a9G,C.aHk,C.Gt,C.aiJ,C.cse,C.csf])
t(C.bsL,C.aL7)
t(C.bsM,C.aL8)
t(C.aCA,C.buy)
t(C.b5Y,A.b5M)
t(C.bsO,A.a4e)
t(C.b5X,C.bsO)
w(C.aIZ,A.eO)
w(C.aL7,A.c8)
w(C.aL8,A.c8)
v(C.buy,A.er)
v(C.bsO,A.iX)})()
A.ki(b.typeUniverse,JSON.parse('{"aW7":{"at":[],"r":[]},"b86":{"aB":[]},"amm":{"af":[],"r":[]},"aAy":{"ag":["amm"]},"Rh":{"af":[],"r":[]},"aiI":{"at":[],"r":[]},"aRX":{"at":[],"r":[]},"bbF":{"ag":["Rh"]},"XJ":{"af":[],"r":[]},"XN":{"af":[],"r":[]},"XL":{"af":[],"r":[]},"Xj":{"af":[],"r":[]},"axA":{"ag":["XJ"]},"bc_":{"ag":["XN"]},"axB":{"ag":["XL"]},"X1":{"at":[],"r":[]},"b9h":{"aB":[]},"b98":{"aB":[]},"b9f":{"ag":["Xj"]},"aEy":{"aB":[]},"bes":{"aB":[]},"b7v":{"at":[],"r":[]},"ans":{"af":[],"r":[]},"anm":{"af":[],"r":[]},"Yn":{"af":[],"r":[]},"abm":{"at":[],"r":[]},"aB8":{"ag":["ans"]},"aB5":{"ag":["anm"]},"bbI":{"at":[],"r":[]},"bbL":{"aB":[]},"bfo":{"at":[],"r":[]},"baQ":{"aB":[]},"bsV":{"at":[],"r":[]},"biG":{"at":[],"r":[]},"azx":{"ag":["Yn"]},"abl":{"at":[],"r":[]},"bfn":{"at":[],"r":[]},"abk":{"at":[],"r":[]},"bfm":{"at":[],"r":[]},"azy":{"at":[],"r":[]},"aFG":{"at":[],"r":[]},"IH":{"at":[],"r":[]},"anq":{"af":[],"r":[]},"YI":{"af":[],"r":[]},"YJ":{"af":[],"r":[]},"aB7":{"ag":["anq"]},"bbJ":{"at":[],"r":[]},"aaD":{"at":[],"r":[]},"bbH":{"at":[],"r":[]},"bbM":{"at":[],"r":[]},"aB6":{"ag":["YI"]},"bgO":{"ag":["YJ"]},"aW5":{"at":[],"r":[]},"a4z":{"af":[],"r":[]},"bgw":{"ag":["a4z"]},"bgv":{"aB":[]},"aqj":{"at":[],"r":[]},"Xl":{"af":[],"r":[]},"Xk":{"af":[],"r":[]},"WT":{"af":[],"r":[]},"a_q":{"af":[],"r":[]},"awm":{"ag":["Xl"]},"awl":{"ag":["Xk"]},"av5":{"ag":["WT"]},"bsN":{"ag":["a_q"]},"Ew":{"af":[],"r":[]},"auZ":{"af":[],"r":[]},"bsL":{"ag":["Ew"]},"bsM":{"ag":["auZ"]},"bsK":{"aB":[]},"aqi":{"af":[],"r":[]},"aCz":{"ag":["aqi"]},"abH":{"at":[],"r":[]},"aqc":{"af":[],"r":[]},"aqh":{"af":[],"r":[]},"bi9":{"ag":["aqc"]},"aCy":{"ag":["aqh"]},"MM":{"af":[],"r":[]},"aCA":{"ag":["MM"],"er":[]},"b5X":{"iX":[],"fb":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aA
return{e2:w("aOP"),Q:w("qy"),n:w("bs<n,n>"),c5:w("aQJ"),dY:w("aQK"),d:w("eK<n?>"),e:w("Gs"),B:w("mV"),P:w("hS"),k:w("kq"),x:w("ax<~>"),f5:w("P<agD>"),V:w("P<ac>"),t:w("P<qy>"),O:w("P<w>"),ac:w("P<eK<n?>>"),I:w("P<mV>"),u:w("P<hS>"),_:w("P<kq>"),cl:w("P<ax<ak<a1<n,@>>>>"),R:w("P<mX>"),cq:w("P<ak<+(O,O)>>"),ez:w("P<a1<n,aC>>"),gE:w("P<a1<n,n>>"),c7:w("P<a1<n,@>>"),fD:w("P<ma>"),bp:w("P<nX>"),g:w("P<u>"),v:w("P<hB>"),L:w("P<+(n,n)>"),G:w("P<+(O,O)>"),bF:w("P<+count,id,name(H,n,n)>"),A:w("P<cO>"),s:w("P<n>"),aS:w("P<iM>"),p:w("P<r>"),C:w("P<fb>"),D:w("P<l7>"),fp:w("P<IL>"),M:w("P<IT>"),gZ:w("P<aED>"),Y:w("P<acT>"),E:w("P<aGD>"),F:w("P<O>"),dC:w("P<H>"),dS:w("P<aB?>"),d4:w("P<n?>"),J:w("cq<ag<af>>"),b:w("ak<mV>"),do:w("ak<hS>"),r:w("ak<kq>"),U:w("ak<a1<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(H,n,n)>"),h:w("ak<n>"),c:w("ak<l7>"),j:w("ak<@>"),fK:w("bt<n,n>"),d2:w("bt<n,ak<a1<n,@>>>"),a:w("a1<n,@>"),f:w("a1<@,@>"),gv:w("J<n,Gu>"),w:w("iH"),g2:w("qR"),bV:w("amf"),fL:w("cm"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(O,ak<hS>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bm<O>"),gc:w("dB"),b4:w("cz<H>"),W:w("k6<n>"),l:w("r"),cM:w("fb"),i:w("l7"),cc:w("EJ"),bw:w("abk<n?>"),cy:w("IV"),q:w("mK"),y:w("R"),gR:w("O"),z:w("@"),S:w("H"),eK:w("ak<kq>?"),m:w("anp?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("qa?"),T:w("n?"),aD:w("dB?"),o:w("l7?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aS3=new A.bv(B.h9,B.bD,B.h9,B.bD)
D.a7E=new A.bv(B.h9,B.jT,B.h9,B.jT)
D.aSf=new A.bv(B.hL,B.bD,B.bD,B.bD)
D.aSj=new A.az(B.cY,1.4,B.r,-1)
D.aSt=new A.az(B.af,1,B.r,-1)
D.aTP=new A.aX(0,1/0,64,1/0)
D.aTT=new A.aX(0,84,0,1/0)
D.au8=w([B.ls,B.qj,B.c],x.O)
D.bKU=new A.a5(B.ax,B.aC,B.x,D.au8,null,null)
D.aUD=new A.o(null,null,null,null,null,D.bKU,B.n)
D.cON=w([B.aT,B.bS],x.O)
D.bMX=new A.a5(B.b1,B.b3,B.x,D.cON,null,null)
D.aUV=new A.o(null,null,null,null,null,D.bMX,B.n)
D.b_O=new A.fg(null,null,null,null,null,E.jD,null,null,null,null)
D.a8Z=new A.cv(B.A,null,null,D.b_O,null)
D.k2=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eLh=new A.F(!0,D.k2,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2H=new A.x("No books on the shelf yet.",null,D.eLh,null,null,null,null,null,null,null,null,null)
D.dUV=new A.C(B.nu,D.f2H,null)
D.aZp=new A.cv(B.A,null,null,D.dUV,null)
D.b_f=new A.cv(B.A,null,null,X.TO,null)
D.b18=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b1x=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.a9X=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b41=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b4h=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ab8=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b7Q=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b8c=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.DD=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b9F=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bbN=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.acz=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eYw=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bgJ=new A.eK(null,D.eYw,B.eZ,null,x.d)
D.f5H=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bgL=new A.eK(null,D.f5H,B.eZ,null,x.d)
D.bhi=new A.b9(38e5)
D.bi2=new A.i7(0,10,0,10)
D.bic=new A.N(0,1,0,0)
D.bim=new A.i7(0,4,0,4)
D.biE=new A.N(10,10,14,10)
D.biP=new A.i7(10,4,10,4)
D.biZ=new A.i7(10,8,10,8)
D.bj_=new A.N(10,8,8,8)
D.bjr=new A.N(12,6,12,2)
D.bjJ=new A.N(14,10,6,6)
D.bjK=new A.N(14,12,14,0)
D.bjO=new A.N(14,12,14,8)
D.bjR=new A.N(14,12,8,14)
D.bjV=new A.i7(14,14,14,14)
D.bkA=new A.N(16,2,16,10)
D.bkK=new A.N(16,6,16,30)
D.bkM=new A.N(16,6,16,8)
D.aeR=new A.N(18,16,18,8)
D.blm=new A.N(18,20,18,22)
D.aeV=new A.N(18,24,18,24)
D.bls=new A.N(18,30,18,30)
D.blK=new A.N(20,10,12,20)
D.blY=new A.N(20,18,16,18)
D.bm_=new A.N(20,18,20,6)
D.bmP=new A.N(24,32,24,28)
D.bmQ=new A.N(24,36,24,32)
D.bmU=new A.N(26,26,24,14)
D.bn7=new A.N(2,4,2,8)
D.bnb=new A.N(30,0,30,0)
D.bnm=new A.N(38,22,22,22)
D.afb=new A.N(40,24,24,24)
D.bno=new A.i7(40,40,40,40)
D.bnq=new A.N(46,30,30,30)
D.afe=new A.N(4,0,0,8)
D.bnS=new A.N(56,40,40,40)
D.bnW=new A.N(1.25,1.25,1.25,1.25)
D.bnX=new A.N(60,0,60,0)
D.bo_=new A.N(6,14,6,16)
D.bob=new A.i7(7,3,7,3)
D.boH=new A.N(5,1.5,5,1.5)
D.boS=new A.N(6,2.5,6,2.5)
D.fgU=new A.x("Signature",null,B.n3,null,null,null,null,null,null,null,null,null)
D.bpa=new A.bH(1,B.bo,D.fgU,null)
D.fea=new A.x("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bpR=new A.bH(1,B.bo,D.fea,null)
D.eSm=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg3=new A.x("Worksheets",null,D.eSm,null,null,null,null,null,null,null,null,null)
D.eSu=new A.F(!0,E.a9A,null,null,null,null,13,B.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feZ=new A.x("Track your project spending",null,D.eSu,null,null,null,null,null,null,null,null,null)
D.cHf=w([D.fg3,B.av,D.feZ],x.p)
D.beh=new A.fo(B.aj,B.e,B.j,B.F,null,B.p,null,0,D.cHf,null)
D.bpW=new A.bH(1,B.bo,D.beh,null)
D.eNM=new A.F(!0,E.jD,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXJ=new A.x("FAMILY LIBRARY",null,D.eNM,null,null,null,null,null,null,null,null,null)
D.bqc=new A.bH(1,B.bo,D.eXJ,null)
D.L9=new C.Gs("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Xs=new C.Gt(0,"male")
D.ag4=new C.Gt(1,"female")
D.x_=new C.Gt(2,"unknown")
D.t0=new C.aiJ(0,"owner")
D.La=new C.aiJ(1,"editor")
D.k8=new C.aiJ(2,"viewer")
D.agP=new A.a0(61199,"MaterialIcons",!1)
D.bsM=new A.a0(61504,"MaterialIcons",!1)
D.bsN=new A.a0(61505,"MaterialIcons",!1)
D.bsP=new A.a0(61587,"MaterialIcons",!1)
D.bsV=new A.a0(61890,"MaterialIcons",!1)
D.btO=new A.a0(63034,"MaterialIcons",!0)
D.buD=new A.a0(63429,"MaterialIcons",!1)
D.aiY=new A.a0(984520,"MaterialIcons",!1)
D.btk=new A.a0(62776,"MaterialIcons",!1)
D.bwY=new A.ad(D.btk,26,B.aZ,null,null,null)
D.brL=new A.a0(57648,"MaterialIcons",!1)
D.bxf=new A.ad(D.brL,14,B.c,null,null,null)
D.bxx=new A.ad(B.EO,17,null,null,null,null)
D.by2=new A.ad(E.Yc,null,null,null,null,null)
D.by5=new A.ad(B.j6,18,E.jD,null,null,null)
D.XY=new A.a0(62044,"MaterialIcons",!1)
D.byb=new A.ad(D.XY,null,B.aT,null,null,null)
D.bz0=new A.ad(B.dS,16,null,null,null,null)
D.bz7=new A.ad(D.XY,32,B.aT,null,null,null)
D.bzp=new A.ad(E.agQ,18,B.cY,null,null,null)
D.bAs=new A.ad(B.EW,22,B.aE,null,null,null)
D.bAD=new A.ad(B.dS,22,B.aZ,null,null,null)
D.bAO=new A.ad(O.Y2,22,B.c,null,null,null)
D.bAT=new A.ad(B.tb,52,B.c,null,null,null)
D.bB2=new A.ad(B.EW,30,B.aE,null,null,null)
D.ajz=new A.ad(B.tk,22,B.c,null,null,null)
D.bBu=new A.ad(B.dS,17,null,null,null,null)
D.bBN=new A.ad(B.uX,26,B.cY,null,null,null)
D.bCw=new A.ad(B.Yo,16,null,null,null,null)
D.bDf=new A.ad(B.tb,24,B.c,null,null,null)
D.bDk=new A.ad(B.LA,20,B.qJ,null,null,null)
D.bDp=new A.ad(B.EM,null,B.bS,null,null,null)
D.bDw=new A.ad(B.j6,18,B.c,null,null,null)
D.bE7=new A.ad(B.cu,22,B.af,null,null,null)
D.bEW=new A.ad(B.e8,16,B.af,null,null,null)
D.bF6=new A.ad(D.XY,20,B.aT,null,null,null)
D.ak_=new A.ad(B.ht,20,null,null,null,null)
D.bFA=new A.ad(B.cu,18,D.k2,null,null,null)
D.bFS=new A.ad(B.xl,28,B.c,null,null,null)
D.bG_=new A.ad(B.Lq,null,B.fS,null,null,null)
D.bGj=new A.ad(B.xl,24,B.c,null,null,null)
D.bGK=new A.ad(B.tb,null,B.aT,null,null,null)
D.bGL=new A.ad(B.jq,20,B.cY,null,null,null)
D.bH4=new A.ad(B.EO,16,null,null,null,null)
D.bIB=new A.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ev,!0,null,null,null,null)
D.cVB=w([B.bs,B.aT,B.f5,B.aZ],x.O)
D.bJo=new A.a5(B.ax,B.aC,B.x,D.cVB,null,null)
D.b8H=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bds=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cEh=w([D.b8H,D.bds],x.O)
D.bJz=new A.a5(B.b1,B.b3,B.x,D.cEh,null,null)
D.cQr=w([B.eV,B.fr,B.f5],x.O)
D.bJD=new A.a5(B.ax,B.aC,B.x,D.cQr,null,null)
D.abE=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b1y=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cGa=w([D.abE,D.b1y],x.O)
D.bKb=new A.a5(B.b1,B.b3,B.x,D.cGa,null,null)
D.b4q=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.atz=w([D.b4q,D.abE],x.O)
D.bKv=new A.a5(B.ax,B.aC,B.x,D.atz,null,null)
D.aaM=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b6l=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cPH=w([D.aaM,D.b6l],x.O)
D.bL4=new A.a5(B.a3,B.a7,B.x,D.cPH,null,null)
D.d0l=w([B.bM,B.mD],x.O)
D.bL6=new A.a5(B.b1,B.b3,B.x,D.d0l,null,null)
D.b8D=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.ba8=new A.w(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.d1a=w([D.b8D,D.k2,D.k2,D.ba8],x.O)
D.d3b=w([0,0.07,0.9,1],x.F)
D.bLA=new A.a5(B.a3,B.a7,B.x,D.d1a,D.d3b,null)
D.bLL=new A.a5(B.ax,B.aC,B.x,B.P1,null,null)
D.d_X=w([B.aZ,B.aT,B.bS],x.O)
D.bMJ=new A.a5(B.ax,B.aC,B.x,D.d_X,null,null)
D.c72=w([B.bs,B.aZ,B.eV],x.O)
D.c79=w([B.bz,B.aD,B.jg],x.O)
D.c7b=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b7n=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cdf=w([D.b7n,E.abm],x.O)
D.dQS=new A.u(1,2)
D.ex6=new A.cO(B.aV,D.dQS,3)
D.aqL=w([D.ex6],x.A)
D.ckt=w([B.fV,B.c8,B.f4],x.O)
D.cn6=w([B.bI,B.bv,B.bj],x.O)
D.bqF=new C.tL("classic","Classic leather","Gold-edged brown leather",D.atz,E.jD,E.jD,"\u2766",B.L,!0,!1,!1,!1)
D.b0X=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bcu=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cIK=w([D.b0X,D.bcu],x.O)
D.abp=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bqA=new C.tL("ornate","Ornate gold","Double gold border and flourishes",D.cIK,D.abp,D.abp,"\u2726",B.L,!0,!0,!0,!1)
D.b48=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.b9j=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cBq=w([D.b48,D.b9j],x.O)
D.bqz=new C.tL("parchment","Parchment","Old paper with dark ink",D.cBq,D.DD,G.ij,"\u2767",B.L,!0,!1,!1,!0)
D.a9m=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bbc=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.cZn=w([D.a9m,D.bbc],x.O)
D.b6Y=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.baC=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bqC=new C.tL("minimal","Clean paper","Plain and elegant, like a printed book",D.cZn,D.b6Y,D.baC,"",B.L,!0,!0,!1,!0)
D.bqE=new C.tL("midnight","Midnight","Deep blue with silver stars",I.atR,B.cl,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.bqy=new C.tL("emerald","Emerald library","Green cloth, title on the left",Y.ar8,E.jD,B.fW,"\u25c6",B.bg,!0,!1,!1,!1)
D.bbx=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.cXX=w([B.eK,D.bbx],x.O)
D.b7Y=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.b8X=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bqD=new C.tL("rose","Rose vintage","Burgundy with rose-gold lettering",D.cXX,D.b7Y,D.b8X,"\u2740",B.L,!0,!1,!0,!1)
D.d0Q=w([B.cB,I.o4],x.O)
D.bqB=new C.tL("modern","Modern","Dark, bold, left-aligned",D.d0Q,B.aY,B.c,"",B.bg,!1,!0,!1,!1)
D.a_j=w([D.bqF,D.bqA,D.bqz,D.bqC,D.bqE,D.bqy,D.bqD,D.bqB],A.aA("P<tL>"))
D.cAX=w([B.bS,B.bk],x.O)
D.b8t=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cBC=w([D.a9m,D.b8t],x.O)
D.b45=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cD6=w([D.b45,B.da],x.O)
D.cEv=w([B.b8,B.iG,B.nZ],x.O)
D.cES=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b1u=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b5I=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d38=w([D.aaM,D.b1u,D.b5I],x.O)
D.bqG=new C.tM("leather","Leather",D.d38,"vintage")
D.cLD=w([B.dm,B.JF,N.Uh],x.O)
D.bqN=new C.tM("midnight","Midnight",D.cLD,"starry")
D.cEw=w([B.ft,B.ee,B.kZ],x.O)
D.bqM=new C.tM("forest","Forest",D.cEw,"story")
D.d4Q=w([B.f0,B.eK,B.k3],x.O)
D.bqJ=new C.tM("burgundy","Burgundy",D.d4Q,"royal")
D.cmH=w([B.aD,B.p_,B.nd],x.O)
D.bqK=new C.tM("royal","Royal",D.cmH,"royal")
D.cGM=w([B.bv,B.cB,I.o4],x.O)
D.bqH=new C.tM("charcoal","Charcoal",D.cGM,"geo")
D.d3e=w([B.cd,B.dM,B.wn],x.O)
D.bqL=new C.tM("sunset","Sunset",D.d3e,"sunset")
D.d3O=w([B.iG,B.DE,B.Ui],x.O)
D.bqI=new C.tM("ocean","Ocean",D.d3O,"band")
D.xS=w([D.bqG,D.bqN,D.bqM,D.bqJ,D.bqK,D.bqH,D.bqL,D.bqI],A.aA("P<tM>"))
D.cH9=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cHF=w([B.ak,B.aJ,B.M],x.O)
D.cIP=w([B.eK,B.ee,B.dm,B.fj,B.wr,B.cY,B.k5,B.es,B.dn],x.O)
D.cIQ=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ex7=new A.cO(B.dl,B.dz,8)
D.cIZ=w([D.ex7],x.A)
D.cK0=w([B.bY,B.dM,B.ku],x.O)
D.cKs=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cLz=w([B.bY,B.hy],x.O)
D.cNt=w([B.aL,B.zD,B.wc],x.O)
D.cOj=w([B.bJ,B.cx,B.dy,B.aL],x.O)
D.cOO=w([B.ji,B.cd,B.rw],x.O)
D.cPg=w([B.eV,B.cY],x.O)
D.cPM=w([B.cL,B.fz,B.hp],x.O)
D.cPX=w([B.aY,B.bk,B.dm],x.O)
D.cQo=w([B.ew,B.d1,B.ee],x.O)
D.cQE=w([B.dW,B.dm,B.JF],x.O)
D.cRR=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a0a=w(["leather","linen","plain","stars","rays"],x.s)
D.bwE=new A.a0(985219,"MaterialIcons",!1)
D.bwc=new A.a0(983781,"MaterialIcons",!1)
D.atk=w([B.ahe,B.hW,B.m8,B.hX,D.bwE,B.F4,B.pj,D.bwc,I.aiN,B.xn,B.pl,B.m7],A.aA("P<a0>"))
D.a0f=w(["double","single","corners","none"],x.s)
D.cUp=w([B.dX,B.bn,B.es],x.O)
D.cUC=w([],x.t)
D.Bf=w([],x.u)
D.cWI=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cYO=w([B.aR,B.fz,B.fj],x.O)
D.cZY=w([B.cr,B.o0,B.V4],x.O)
D.d_b=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dhh=new C.ln("construction","Construction","Jobsite & builds",B.xc)
D.dho=new C.ln("house","Home Build","Houses & rooms",B.tc)
D.dhe=new C.ln("grocery","Grocery","Store & pantry",B.YW)
D.dhd=new C.ln("calculator","Calculations","Math & estimates",B.LK)
D.dhm=new C.ln("lumber","Materials","Lumber & supplies",B.M2)
D.dha=new C.ln("kitchen","Kitchen","Remodel & meals",S.ai_)
D.bwa=new A.a0(983756,"MaterialIcons",!1)
D.dhf=new C.ln("landscape","Landscaping","Yard & garden",D.bwa)
D.dh9=new C.ln("plumbing","Plumbing","Pipes & water",B.pu)
D.dhp=new C.ln("electrical","Electrical","Wiring & power",B.h3)
D.dh7=new C.ln("store","Retail Shop","Daily business",B.kH)
D.dh8=new C.ln("paint_remodel","Paint & Remodel","Colors & walls",S.ahO)
D.bvz=new A.a0(983311,"MaterialIcons",!1)
D.dhl=new C.ln("roofing","Roofing","Roofs & exteriors",D.bvz)
D.bwo=new A.a0(983986,"MaterialIcons",!1)
D.dh6=new C.ln("warehouse","Warehouse","Storage & stock",D.bwo)
D.dhj=new C.ln("vehicles","Vehicles","Fleet & transport",B.F5)
D.btm=new A.a0(62785,"MaterialIcons",!1)
D.dhc=new C.ln("farm","Farm","Crops & livestock",D.btm)
D.dhb=new C.ln("restaurant","Restaurant","Food & catering",B.ti)
D.dhi=new C.ln("tools","Tools","Workshop gear",B.F2)
D.dhn=new C.ln("wallet","Cash & Wallet","Quick spending",B.jq)
D.buy=new A.a0(63395,"MaterialIcons",!1)
D.dhk=new C.ln("concrete","Concrete","Foundation work",D.buy)
D.dhg=new C.ln("blueprint","Blueprint","Plans & design",Aa.ahk)
D.a0G=w([D.dhh,D.dho,D.dhe,D.dhd,D.dhm,D.dha,D.dhf,D.dh9,D.dhp,D.dh7,D.dh8,D.dhl,D.dh6,D.dhj,D.dhc,D.dhb,D.dhi,D.dhn,D.dhk,D.dhg],A.aA("P<ln>"))
D.d_E=w([B.bq,B.bn],x.O)
D.d0m=w([B.i2,B.nh,B.dB],x.O)
D.a0M=w(["top","middle","bottom"],x.s)
D.d2z=w([B.cw,B.bk,B.dm],x.O)
D.d33=w([B.bf,B.d1,B.ee],x.O)
D.d4K=w([B.bI,B.ak],x.O)
D.d4L=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dOA={top:0,middle:1,bottom:2}
D.d7W=new A.bs(D.dOA,["Top","Middle","Bottom"],x.n)
D.dOf={double:0,single:1,corners:2,none:3}
D.d80=new A.bs(D.dOf,["Double line","One line","Corners","None"],x.n)
D.dPl={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d9o=new A.bs(D.dPl,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.d9z=new A.bs(B.iz,[],A.aA("bs<H,+(n,n)>"))
D.dOs={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Bq=new A.bs(D.dOs,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aA("bs<n,H>"))
D.dbQ=new F.LG(32,null)
D.dbR=new F.LG(40,null)
D.dbS=new F.LG(46,null)
D.aCo=new C.aqh(null)
D.dRP=new A.u(8,14)
D.f3k=new A.x("Write a new book",null,B.iU,null,B.L,null,null,null,null,null,null,null)
D.dUp=new A.C(B.lv,D.f3k,null)
D.aja=new A.ad(B.hs,18,B.c,null,null,null)
D.eY3=new A.x("Add",null,B.n4,null,null,null,null,null,null,null,null,null)
D.cOy=w([D.aja,B.tS,D.eY3],x.p)
D.ev4=new A.cx(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cOy,null)
D.dUJ=new A.C(B.oc,D.ev4,null)
D.dUK=new A.C(E.adJ,X.TO,null)
D.eSi=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_X=new A.x("New Project",null,D.eSi,null,null,null,null,null,null,null,null,null)
D.cSc=w([D.aja,B.ab,D.f_X],x.p)
D.ev7=new A.cx(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cSc,null)
D.dUU=new A.C(B.j4,D.ev7,null)
D.f29=new A.x("Choose your header",null,R.yI,null,null,null,null,null,null,null,null,null)
D.dVe=new A.C(B.hE,D.f29,null)
D.b02=new A.fg(2.2,null,null,null,null,B.cY,null,null,null,null)
D.ezJ=new A.a4(22,22,D.b02,null)
D.aZl=new A.cv(B.A,null,null,D.ezJ,null)
D.dVj=new A.C(B.VZ,D.aZl,null)
D.bk3=new A.N(14,2,14,6)
D.feJ=new A.x("The top of your book. Tap a design to see it.",null,N.a54,null,null,null,null,null,null,null,null,null)
D.dVk=new A.C(D.bk3,D.feJ,null)
D.dWR=new A.iK(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dWU=new A.iK(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aDt=new A.iK(1,0.9607843137254902,0.48627450980392156,0)
D.H5=new A.iK(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yo=new A.iK(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dX_=new A.iK(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.ftf=new C.bes(null)
D.bfa=new A.m1(D.ftf,null,B.at,null,null)
D.aH6=new A.cI(0,0,0,0,null,null,D.bfa,null)
D.ei8=new A.z(-42,42)
D.eqa=new A.cJ([0,0,1,1])
D.aIn=new A.a9(0,0,520,160)
D.aIA=new A.b7(B.rg,B.Z)
D.fei=new A.x("Let the AI write it from your tree",null,B.kl,null,B.L,null,null,null,null,null,null,null)
D.br6=new A.dl(1,B.ch,D.fei,null)
D.cLy=w([E.Zo,B.ab,D.br6],x.p)
D.euN=new A.cx(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cLy,null)
D.eXK=new A.x("Save member",null,B.cb,null,null,null,null,null,null,null,null,null)
D.cZ2=w([D.ak_,B.ab,D.eXK],x.p)
D.euV=new A.cx(B.aX,B.b7,B.j,B.m,null,B.p,null,0,D.cZ2,null)
D.bAI=new A.ad(B.hF,14,B.aZ,null,null,null)
D.eMs=new A.F(!0,B.aZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0m=new A.x("Cashier",null,D.eMs,null,null,null,null,null,null,null,null,null)
D.cSG=w([D.bAI,B.bp,D.f0m],x.p)
D.euX=new A.cx(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cSG,null)
D.eXL=new A.x("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bpI=new A.bH(1,B.bo,D.eXL,null)
D.cE0=w([D.ajz,B.aw,D.bpI],x.p)
D.euY=new A.cx(B.aX,B.e,B.j,B.m,null,B.p,null,0,D.cE0,null)
D.eyt=new A.as(16,40)
D.eyy=new A.as(22,64)
D.eyF=new A.as(280,88)
D.ezp=new A.a4(30,null,null,null)
D.eAG=new A.hM(2,12,12,1.05,null)
D.f02=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eBq=new A.b1(D.f02,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f0h=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aKq=new A.b1(D.f0h,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f7S=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eBU=new A.b1(D.f7S,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.fhq=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eBZ=new A.b1(D.fhq,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f27=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eC5=new A.b1(D.f27,null,null,null,null,null,null,null,null,null,null,null,null,B.fL,!1,null,null,null,B.q,null)
D.feV=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aKu=new A.b1(D.feV,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eYk=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eCv=new A.b1(D.eYk,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.fi3=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eDe=new A.b1(D.fi3,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.fdj=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eDD=new A.b1(D.fdj,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.fhu=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eDG=new A.b1(D.fhu,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f9l=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eDI=new A.b1(D.f9l,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f3T=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eDJ=new A.b1(D.f3T,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f3U=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eEJ=new A.b1(D.f3U,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f04=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eF0=new A.b1(D.f04,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f1Q=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eFj=new A.b1(D.f1Q,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f8S=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eFz=new A.b1(D.f8S,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f4B=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eFA=new A.b1(D.f4B,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eIw=new A.F(!0,D.k2,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIW=new A.F(!0,D.k2,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJy=new A.r9(!0,B.qS,null,null,null,null,B.dq,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJO=new A.F(!0,D.k2,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKk=new A.F(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a55=new A.r9(!0,B.Qm,null,null,null,null,B.dq,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLk=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLI=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNd=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNh=new A.F(!0,G.ij,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOv=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePa=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePR=new A.F(!0,B.bS,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePW=new A.F(!0,B.bM,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQi=new A.F(!0,D.DD,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQr=new A.F(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRo=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRR=new A.F(!0,B.bS,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSg=new A.F(!0,B.aZ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTG=new A.F(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTO=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMz=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a5A=new A.F(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVq=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVO=new A.F(!0,G.ij,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVV=new A.F(!0,G.ij,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWF=new A.x("Themes",null,B.oE,null,null,null,null,null,null,null,null,null)
D.eXf=new A.x("Add Item",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eMX=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXA=new A.x("Debt receipt",null,D.eMX,null,B.L,null,null,null,null,null,null,null)
D.aMu=new A.F(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXR=new A.x("Person who owes",null,D.aMu,null,null,null,null,null,null,null,null,null)
D.eYN=new A.x("Notes",null,B.a5b,null,null,null,null,null,null,null,null,null)
D.eZb=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eM_=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZf=new A.x("Share",null,D.eM_,null,null,null,null,null,null,null,null,null)
D.f_6=new A.x("Move your family trees",null,D.aMz,null,null,null,null,null,null,null,null,null)
D.f_F=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.f0g=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.f1q=new A.x("Remove this book?",null,B.hj,null,null,null,null,null,null,null,null,null)
D.aMZ=new A.x("Download",null,B.cb,null,null,null,null,null,null,null,null,null)
D.f2v=new A.x("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.f3P=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.f4P=new A.x("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.eTA=new A.F(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5f=new A.x("NGMY.ORG",null,D.eTA,null,B.L,null,null,null,null,null,null,null)
D.f6s=new A.x("Scan family tree QR",null,B.cs,null,null,null,null,null,null,null,null,null)
D.eQa=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7a=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eQa,null,B.L,null,null,null,null,null,null,null)
D.f8i=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.f8o=new A.x("Thumbnail",null,B.oE,null,null,null,null,null,null,null,null,null)
D.f8Y=new A.x("Save the cover",null,B.cs,null,null,null,null,null,null,null,null,null)
D.f9m=new A.x("Your photos",null,B.oE,null,null,null,null,null,null,null,null,null)
D.f9B=new A.x("Create Project",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fa2=new A.x("Design your cover",null,R.yI,null,null,null,null,null,null,null,null,null)
D.fa8=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fab=new A.x("PICTURE",null,H.mp,null,null,null,null,null,null,null,null,null)
D.fax=new A.x("Paid",null,B.cb,null,null,null,null,null,null,null,null,null)
D.faz=new A.x("You can undo it right after.",null,N.a5i,null,null,null,null,null,null,null,null,null)
D.fb1=new A.x("Print",null,B.tW,null,null,null,null,null,null,null,null,null)
D.fbm=new A.x("Amount owed",null,D.aMu,null,null,null,null,null,null,null,null,null)
D.fbz=new A.x("Got it",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fc6=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fc9=new A.x("Add to budget",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fcy=new A.x("Debtor signature",null,B.a5b,null,null,null,null,null,null,null,null,null)
D.fcG=new A.x("Change icon",null,E.aLP,null,null,null,null,null,null,null,null,null)
D.fdJ=new A.x("Family tree QR",null,B.cs,null,null,null,null,null,null,null,null,null)
D.fe8=new A.x("Download",null,B.tW,null,null,null,null,null,null,null,null,null)
D.fec=new A.x("Change",null,B.oE,null,null,null,null,null,null,null,null,null)
D.ff0=new A.x("Clear all",null,B.cb,null,null,null,null,null,null,null,null,null)
D.ff3=new A.x("WHAT SHOULD IT CHANGE?",null,H.mp,null,null,null,null,null,null,null,null,null)
D.ffD=new A.x("COLOUR",null,H.mp,null,null,null,null,null,null,null,null,null)
D.ffP=new A.x("Do it",null,B.cs,null,null,null,null,null,null,null,null,null)
D.ffS=new A.x("Create Tree",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fgO=new A.x("Create Family Tree",null,B.eT,null,null,null,null,null,null,null,null,null)
D.eHx=new A.F(!0,E.jD,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh2=new A.x("Write the first page myself",null,D.eHx,null,null,null,null,null,null,null,null,null)
D.fhx=new A.x("Use this header",null,B.cs,null,null,null,null,null,null,null,null,null)
D.fhD=new A.x("Create Project",null,E.aMf,null,null,null,null,null,null,null,null,null)
D.fqi=new C.a9G(1,"header")
D.a6m=new C.a9G(2,"projects")
D.fqj=new C.a9G(3,"cashier")
D.a6n=new C.a9G(4,"familyTree")
D.fBa=new C.cse(0,"start")
D.fBb=new C.csf(0,"start")
D.fqB=new C.WT(null)
D.frA=new C.Xk(null)
D.d9w=new A.bs(B.iz,[],A.aA("bs<n,EJ>"))
D.cUX=w([],x.E)
D.cUY=w([],x.M)
D.fs6=new C.bbK(D.d9w,D.cUX,D.cUY,0,0,null,null)
D.ftU=new C.YJ(null)
D.a73=new C.aHk(0,"projects")
D.aQk=new C.aHk(1,"cashier")
D.fz7=new C.aHk(2,"familyTree")})()};
(a=>{a["FNtE2aiFUfVE84ad6YDtTYiGrG8="]=a.current})($__dart_deferred_initializers__);