((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,P,A0,S,Aa,K,H,E,T,Ab,Q,Ac,U,Ad,Ae,A1,Af,Ag,R,M,A2,A3,Ah,A4,A5,A6,Ai,Aj,A7,Ak,Al,A8,Am,G,An,Ao,Ap,A9,Aq,V,O,Ar,As,W,At,X,Y,F,Au,L,I,Z,C={
bEG(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bEG=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vD(null,""),$async$bEG)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nh(b1)
s=A.bZ(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.H(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aq(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r8(t,a1,B.hS,"book",E.Ga),$async$bEG)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.QV(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Lp(l)?y.k:y.y)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cA
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2R(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEG,v)},
ahn(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahn=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vD(null,""),$async$ahn)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nh(b6)
s=x.S
r=A.d_(c1,0,A.dB(4,"count",s),A.T(c1).c)
q=H.a2E(new A.N(r,new C.fJk(),r.$ti.k("N<ak.E,m>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fJj(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aq(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahn)
case 6:l=c5
k=H.QV(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoV(s,D.dzH,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aq(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahn)
case 10:l=c5
k=l==null?null:H.QV(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.ld(a5,a2.k("ld<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
b0=J.a6(a9)
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
case 9:if(h.a!==0){s=h.$ti.k("bd<2>")
p=A.cF(new A.bd(h,s),new C.fJl(),s.k("M.E"),p)
p=H.a2E(A.pv(p,3,A.a7(p).k("M.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2R(s,b9),$async$ahn)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoV(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahn,v)},
hzb(d,e,f){return A.ck(null,B.w.j(0.65),!1,null,new C.fSO(e,f),d,null,!0,!0,x.g2)},
aoV:function aoV(d,e,f){this.a=d
this.b=e
this.c=f},
fJk:function fJk(){},
fJj:function fJj(d){this.a=d},
fJl:function fJl(){},
fSO:function fSO(d,e){this.a=d
this.b=e},
bCv(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bCv=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.fxf())){u=null
w=1
break}t=B.d.d0(b1,new C.fxg())
s=$.S()
r=new A.p2()
q=A.z8(r,D.aQ0)
p=A.I()
p.r=B.c.gp(0)
q.aP(D.aQ0,p)
o=A.I()
o.r=B.N.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bB
o.e=B.dQ
n=new C.fxl(t)
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aY(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aH(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aY(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aH(a3,o)}w=4
return A.b(r.nj().xc(520,160),$async$bCv)
case 4:w=3
return A.b(b3.hw(B.h9),$async$bCv)
case 3:b0=b3
u=b0==null?null:J.eS(B.dK.gaR(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCv,v)},
fH0(d){return C.idg(d)},
idg(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fH0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bhP()
n=d.x!=null&&d.zf(null).length===0
if(d.x!=null)t=n?D.zZ:D.Jl
else t=d.gUc()?D.Jl:D.aKW
w=3
return A.b(C.bCv(d.ax),$async$fH0)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anB(s)
r=A.a4N(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aKW}else{p.c=C.x2(q,!0)
p.b=n?D.zZ:D.Jl}r.a3H(A.h2d(new C.fH2(p,d,new C.fH3(),t,n,o),null,D.bDa,B.wP))
u=r.jB(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fH0,v)},
fNF(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fNF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fH0(d),$async$fNF)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.ar(q,0,40)
u=Ag.H0(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNF,v)},
fxf:function fxf(){},
fxg:function fxg(){},
fxl:function fxl(d){this.a=d},
fH3:function fH3(){},
fH2:function fH2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fH1:function fH1(){},
fTg(d,e){var w=0,v=A.j(x.H)
var $async$fTg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,B.w.j(0.55),!0,null,new C.fTk(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fTg)
case 2:return A.h(null,v)}})
return A.i($async$fTg,v)},
bF8(d,e,f,g){return C.ikR(d,e,f,g)},
ikR(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bF8=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aO(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.fej)
w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.fTc(g,r,f),d,null,!0,!0,x.H),$async$bF8)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bF8,v)},
fTl(d,e){var w=0,v=A.j(x.H)
var $async$fTl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,null,!0,null,new C.fTo(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fTl)
case 2:return A.h(null,v)}})
return A.i($async$fTl,v)},
aZR:function aZR(d,e){this.c=d
this.a=e},
c6y:function c6y(){},
bc4:function bc4(d,e){this.b=d
this.a=e},
fTk:function fTk(d,e){this.a=d
this.b=e},
fTh:function fTh(d){this.a=d},
fTi:function fTi(d,e,f){this.a=d
this.b=e
this.c=f},
fTj:function fTj(d,e){this.a=d
this.b=e},
fTc:function fTc(d,e,f){this.a=d
this.b=e
this.c=f},
fTa:function fTa(d){this.a=d},
fTb:function fTb(d,e,f){this.a=d
this.b=e
this.c=f},
fTo:function fTo(d,e){this.a=d
this.b=e},
fTm:function fTm(d){this.a=d},
fTn:function fTn(d,e,f){this.a=d
this.b=e
this.c=f},
fBz(d,e){var w=0,v=A.j(x.y),u,t
var $async$fBz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2p(d),$async$fBz)
case 3:t=g
J.nG(t,new C.fBA(e))
u=A.ai1(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBz,v)},
fBA:function fBA(d){this.a=d},
ap6:function ap6(d,e,f){this.c=d
this.d=e
this.a=f},
aDP:function aDP(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMA:function dMA(d,e){this.a=d
this.b=e},
dMl:function dMl(d,e){this.a=d
this.b=e},
dMo:function dMo(d,e,f){this.a=d
this.b=e
this.c=f},
dMn:function dMn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMm:function dMm(d,e){this.a=d
this.b=e},
dMp:function dMp(d,e){this.a=d
this.b=e},
dMj:function dMj(){},
dMk:function dMk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dMi:function dMi(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dM3:function dM3(d){this.a=d},
dM4:function dM4(d,e,f){this.a=d
this.b=e
this.c=f},
dM5:function dM5(d,e){this.a=d
this.b=e},
dM2:function dM2(d){this.a=d},
dMa:function dMa(d,e){this.a=d
this.b=e},
dM1:function dM1(d){this.a=d},
dMb:function dMb(d,e,f){this.a=d
this.b=e
this.c=f},
dMc:function dMc(d,e,f){this.a=d
this.b=e
this.c=f},
dM0:function dM0(d,e){this.a=d
this.b=e},
dMd:function dMd(d,e,f){this.a=d
this.b=e
this.c=f},
dM_:function dM_(d,e){this.a=d
this.b=e},
dMe:function dMe(d,e){this.a=d
this.b=e},
dLZ:function dLZ(d){this.a=d},
dMf:function dMf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLX:function dLX(){},
dLR:function dLR(d){this.a=d},
dLS:function dLS(d){this.a=d},
dLY:function dLY(d,e){this.a=d
this.b=e},
dMg:function dMg(d,e){this.a=d
this.b=e},
dLW:function dLW(d){this.a=d},
dMh:function dMh(d){this.a=d},
dLV:function dLV(){},
dM6:function dM6(d,e){this.a=d
this.b=e},
dLU:function dLU(d){this.a=d},
dM7:function dM7(d,e,f){this.a=d
this.b=e
this.c=f},
dLT:function dLT(d,e){this.a=d
this.b=e},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
dM8:function dM8(d){this.a=d},
dM9:function dM9(d,e,f){this.a=d
this.b=e
this.c=f},
dMD:function dMD(){},
dME:function dME(d,e){this.a=d
this.b=e},
dMB:function dMB(d){this.a=d},
dMC:function dMC(d){this.a=d},
dMx:function dMx(d,e){this.a=d
this.b=e},
dMy:function dMy(d){this.a=d},
dMq:function dMq(d,e,f){this.a=d
this.b=e
this.c=f},
dMr:function dMr(d,e,f){this.a=d
this.b=e
this.c=f},
dMs:function dMs(d,e,f){this.a=d
this.b=e
this.c=f},
dMt:function dMt(d,e,f){this.a=d
this.b=e
this.c=f},
dMu:function dMu(d,e,f){this.a=d
this.b=e
this.c=f},
dMv:function dMv(d,e,f){this.a=d
this.b=e
this.c=f},
dMw:function dMw(d,e,f){this.a=d
this.b=e
this.c=f},
dMF:function dMF(){},
dMG:function dMG(){},
dMH:function dMH(){},
dMI:function dMI(d){this.a=d},
dMz:function dMz(d,e){this.a=d
this.b=e},
hvd(d){return B.d.dL(D.a3J,new C.fCd(d),new C.fCe())},
uC:function uC(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fCd:function fCd(d){this.a=d},
fCe:function fCe(){},
al8:function al8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVC:function aVC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ta:function Ta(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfH:function bfH(){this.d=$
this.c=this.a=null},
dcq:function dcq(d,e){this.a=d
this.b=e},
dco:function dco(d,e){this.a=d
this.b=e},
dcp:function dcp(){},
dcr:function dcr(d,e){this.a=d
this.b=e},
hfM(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bk(J.k(u==null?"":u))
return new C.nq(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lb(d,e){return C.ibT(d,e)},
ibT(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lb)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aM(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fEB(),o.$ti.k("M.E"),x.B)
n=A.a7(o).k("Z<M.E>")
o=A.C(new A.Z(o,new C.fEC(),n),n.k("M.E"))
B.d.aZ(o,new C.fED())
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
return A.i($async$Lb,v)},
Ba(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Ba=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Ba)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fRU(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aq(r,null)),$async$Ba)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ba,v)},
aRG(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aRG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$aRG)
case 2:u=h
t=J.cD(u)
s=t.bh(u,new C.h_f(f))
if(s===-1)t.c6(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ba(d,e,u),$async$aRG)
case 3:return A.h(null,v)}})
return A.i($async$aRG,v)},
bCZ(d,e,f){var w=0,v=A.j(x.H),u
var $async$bCZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$bCZ)
case 2:u=h
J.nG(u,new C.fBr(f))
w=3
return A.b(C.Ba(d,e,u),$async$bCZ)
case 3:return A.h(null,v)}})
return A.i($async$bCZ,v)},
bDc(d,e){return C.ibS(d,e)},
ibS(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bDc=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bDc)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.NW
w=1
break}p=B.X.aM(0,q,null)
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
if(D.Dg.aj(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a5q,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a4L,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a4H,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d1W,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.HY(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.NW
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.NW
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bDc,v)},
S_(d,e,f){return C.ikn(d,e,f)},
ikn(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$S_=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$S_)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aq(f.ah(),null)),$async$S_)
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
return A.i($async$S_,v)},
Rs(d,e){return C.ibU(d,e)},
ibU(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rs=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rs)
case 7:r=g
q=r.tA("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lb(d,e),$async$Rs)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lE(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rs)
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
return A.i($async$Rs,v)},
agI(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rs(d,e),$async$agI)
case 3:s=g
r=J.a6(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agI)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agI)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agI,v)},
a32(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a32=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rs(d,e),$async$a32)
case 2:s=h
J.hu(s,f)
w=3
return A.b(A.az(),$async$a32)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a32)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a32)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a32)
case 6:return A.h(null,v)}})
return A.i($async$a32,v)},
nq:function nq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEB:function fEB(){},
fEC:function fEC(){},
fED:function fED(){},
fRU:function fRU(){},
h_f:function h_f(d){this.a=d},
fBr:function fBr(d){this.a=d},
HY:function HY(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bQ1:function bQ1(d){this.a=d},
ikG(d,e,f,g,h,i,j){return A.a4(d,!1).cc(A.eh(new C.fSs(j,i,f,e,h,g),!0,null,x.H))},
Rp(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Rp=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rs(h,g),$async$Rp)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aS7)
u=!1
w=1
break}w=4
return A.b(C.hzb(d,f,e),$async$Rp)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agI(h,g),$async$Rp)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nq(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Ba(h,r,p),$async$Rp)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.S_(h,r,new C.HY("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Rp)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Rp,v)},
fSs:function fSs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ZM:function ZM(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAP:function aAP(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dd5:function dd5(d){this.a=d},
dd4:function dd4(d,e){this.a=d
this.b=e},
dcU:function dcU(d,e){this.a=d
this.b=e},
dcR:function dcR(d,e){this.a=d
this.b=e},
dcs:function dcs(d){this.a=d},
dct:function dct(d,e){this.a=d
this.b=e},
dcV:function dcV(d){this.a=d},
dcB:function dcB(d){this.a=d},
dcz:function dcz(d){this.a=d},
dcA:function dcA(d){this.a=d},
dcC:function dcC(d){this.a=d},
dcS:function dcS(d){this.a=d},
dcT:function dcT(){},
dcx:function dcx(d){this.a=d},
dcy:function dcy(d,e){this.a=d
this.b=e},
dcD:function dcD(d){this.a=d},
dcE:function dcE(d,e){this.a=d
this.b=e},
dd3:function dd3(d){this.a=d},
dd2:function dd2(d,e){this.a=d
this.b=e},
dd1:function dd1(d){this.a=d},
dcO:function dcO(d){this.a=d},
dcN:function dcN(d){this.a=d},
dcP:function dcP(d){this.a=d},
dcu:function dcu(d,e){this.a=d
this.b=e},
dcQ:function dcQ(d,e){this.a=d
this.b=e},
dcH:function dcH(d){this.a=d},
dcI:function dcI(d){this.a=d},
dcG:function dcG(){},
dcJ:function dcJ(d){this.a=d},
dcK:function dcK(d){this.a=d},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e,f){this.a=d
this.b=e
this.c=f},
dcF:function dcF(d,e){this.a=d
this.b=e},
dcX:function dcX(d){this.a=d},
dcW:function dcW(){},
dcY:function dcY(d){this.a=d},
dcZ:function dcZ(d){this.a=d},
dd_:function dd_(d){this.a=d},
dd0:function dd0(d,e){this.a=d
this.b=e},
dcv:function dcv(d){this.a=d},
dcw:function dcw(d){this.a=d},
ZQ:function ZQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg5:function bg5(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
deQ:function deQ(d){this.a=d},
deR:function deR(d){this.a=d},
deP:function deP(d){this.a=d},
deS:function deS(d){this.a=d},
deO:function deO(d){this.a=d},
deT:function deT(d){this.a=d},
deN:function deN(d){this.a=d},
deU:function deU(d,e){this.a=d
this.b=e},
deM:function deM(d,e){this.a=d
this.b=e},
deV:function deV(d,e){this.a=d
this.b=e},
ZO:function ZO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
af4:function af4(d,e,f){this.a=d
this.b=e
this.c=f},
aAS:function aAS(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ddk:function ddk(d,e){this.a=d
this.b=e},
ddj:function ddj(d,e){this.a=d
this.b=e},
ddo:function ddo(d){this.a=d},
ddn:function ddn(d,e){this.a=d
this.b=e},
ddl:function ddl(d){this.a=d},
ddm:function ddm(d){this.a=d},
ddp:function ddp(d){this.a=d},
ddq:function ddq(d){this.a=d},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddh:function ddh(d,e){this.a=d
this.b=e},
Kh:function Kh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Z3:function Z3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cLN:function cLN(d){this.a=d},
cLO:function cLO(){},
cLP:function cLP(d){this.a=d},
bdh:function bdh(d,e,f){this.b=d
this.c=e
this.a=f},
bd8:function bd8(d,e){this.b=d
this.a=e},
uD:function uD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zm:function Zm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdf:function bdf(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d4m:function d4m(d,e,f){this.a=d
this.b=e
this.c=f},
d4l:function d4l(d,e){this.a=d
this.b=e},
d4L:function d4L(d){this.a=d},
d4y:function d4y(){},
d4M:function d4M(d){this.a=d},
d4x:function d4x(){},
d4N:function d4N(d,e){this.a=d
this.b=e},
d4w:function d4w(d,e){this.a=d
this.b=e},
d4O:function d4O(d,e){this.a=d
this.b=e},
d4v:function d4v(d,e){this.a=d
this.b=e},
d4P:function d4P(d){this.a=d},
d4u:function d4u(){},
d4Q:function d4Q(d,e){this.a=d
this.b=e},
d4t:function d4t(d,e){this.a=d
this.b=e},
d4R:function d4R(d){this.a=d},
d4G:function d4G(d,e){this.a=d
this.b=e},
d4S:function d4S(d){this.a=d},
d4T:function d4T(d){this.a=d},
d4V:function d4V(d){this.a=d},
d4W:function d4W(d){this.a=d},
d4F:function d4F(d,e){this.a=d
this.b=e},
d4X:function d4X(d,e){this.a=d
this.b=e},
aHR:function aHR(d){this.a=d},
biE:function biE(d){this.a=d},
bbs:function bbs(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
al9:function al9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a13:function a13(d,e){this.a=d
this.b=e},
ala:function ala(d,e,f,g,h,i){var _=this
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
_.bx$=h
_.a9$=i
_.c=_.a=null},
bQb:function bQb(d){this.a=d},
bQ5:function bQ5(d){this.a=d},
bQ4:function bQ4(d,e){this.a=d
this.b=e},
bQe:function bQe(d){this.a=d},
bQ6:function bQ6(d){this.a=d},
bQ7:function bQ7(d){this.a=d},
bQa:function bQa(d){this.a=d},
bQ9:function bQ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQc:function bQc(d,e){this.a=d
this.b=e},
bQd:function bQd(){},
bQ8:function bQ8(d){this.a=d},
bQ2:function bQ2(d,e){this.a=d
this.b=e},
bQ3:function bQ3(d){this.a=d},
boc:function boc(d,e){this.b=d
this.a=e},
aAQ:function aAQ(){},
iw(d,e){var w
$.S()
w=A.I()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bB
w.e=B.dQ
return w},
bCx(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bl(j.save())
j.translate(e.a,e.b)
d.p9(0,a0?-f:f,f)
w=A.bK(B.ic,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dO(w,t)
w=a1===D.Wp
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.ekR,new A.t(-4+v,-2),C.iw(q,5))
d.bo(D.eir,new A.t(4-v,-2),C.iw(q,5))}else{t=A.bK(B.Jb,14,40)
p=A.I()
p.r=v.gp(0)
d.dO(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ag,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c4(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c4(15,-40,11,t))
o.D(new A.bt())
t=A.I()
t.r=w.gp(0)
d.aH(o,t)
u=new A.aF(v,B.ag,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bt())
v=A.I()
v.r=h.c.gp(0)
d.aH(u,v)
A:{if(D.abO===a1){w=Math.sin(g*3.4)
break A}if(D.abP===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.abO){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.iw(F.Fn,3.4))
d.bo(D.el7,new A.t(9,n),C.iw(q,4))
d.bo(D.eiR,new A.t(10,n),C.iw(q,4))}else if(a1===D.abP){d.bo(D.ejX,new A.t(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.bo(D.egV,new A.t(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.bo(D.ek0,new A.t(-12-w,v),C.iw(q,4))
d.bo(D.aJZ,new A.t(12+w,v),C.iw(q,4))}w=A.I()
w.r=q.gp(0)
d.aP(D.f1O,w)
m=new A.t(0,-77-r)
w=A.bK(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dO(w,v)
w=h.y
if(w!=null){v=A.bK(m.a7(0,I.v5),15,24)
u=A.I()
u.r=w.gp(0)
d.dO(v,u)
u=m.a7(0,D.egQ)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bK(m.a7(0,B.t_),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e3(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a7(0,D.el5),m.a7(0,D.ejV),C.iw(v,2.2))
d.bo(m.a7(0,D.eiQ),m.a7(0,D.egN),C.iw(v,2.2))}if(w===4){w=m.a7(0,D.el9)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a7(0,D.eiS)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a7(0,D.ejI)
v=A.I()
v.r=B.i2.gp(0)
d.ad(w,0.9,v)
v=m.a7(0,D.ejw)
w=A.I()
w.r=B.i2.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a7(0,I.a7l)
w=A.bK(l,21,22)
v=A.I()
v.r=D.lw.gp(0)
d.dO(w,v)
v=A.bK(l.a7(0,I.aJW),5,12)
w=A.I()
w.r=D.bdf.gp(0)
d.dO(v,w)
d.bo(l.a7(0,D.el1),l.a7(0,I.aKi),C.iw(B.cI,1.4))
d.bo(D.aJZ,new A.t(15,-88-r),C.iw(q,3.6))}j.restore()},
htW(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bl(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bK(B.dC,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dO(v,t)
t=A.bK(B.dC,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dO(t,u)
d.lq(D.aQ4,A.I())
C.i0m(d,g,h,i,j)
s=(k==null?D.a7q:k).a-w>=0?1:-1
w=A.I()
w.a=B.Lj
w.sam(A.jx(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.agY.j(0.5),D.agY.j(0.12),D.bkr.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aP(D.aQ4,w)
r.restore()
r.restore()},
i0m(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
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
s=A.bs(D.f1P,B.t3)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.bs(D.f1K,B.hD)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.bs(D.f1Y,B.hD)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.f1R,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.f0A,s)
s=a2.a
J.bl(s.save())
s.translate(a4.w,0)
J.bl(s.save())
a2.p9(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ag,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c4(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c4(m+3,-62,m-2,-58))
l.D(new A.c4(0,-70,k,-58))
l.D(new A.bt())
k=A.I()
k.r=v.gp(0)
a2.aH(l,k)
J.bl(s.save())
a2.mK(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d8z[j]
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bB
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bB
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bB
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.ekw,D.ehy,C.iw(a3.c.j(0.9),3))}a2.bo(D.el2,D.ek2,C.iw(B.w.j(0.18),1.6))
a2.bo(D.egU,I.aK0,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aP(D.f0w,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aP(D.f0K,i)
n=new A.aF(k.r,B.ag,d,d,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c4(0,-57,9,-66))
n.D(new A.c4(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aH(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e3(D.f0T,0.1,2.941592653589793,!1,C.iw(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a7u
n=25*q
k=23*q
i=9*q
C.hq9(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.DJ:o
C.hq9(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.eij,D.eif,C.iw(D.ahQ,4))
a2.bo(D.eih,D.eid,C.iw(D.FN.j(0.7),1.4))
u=A.I()
u.r=B.cI.gp(0)
a2.ad(D.eig,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bl(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.ii(0,a4.f)
a2.bW(0,r)
C.i0j(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hq9(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aE(0,e),r=s.gcC(),q=r===0?B.ic:s.eV(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a7(0,q.aI(0,n)).a7(0,v.aI(0,m))
t=e.a7(0,q.aI(0,p))
d.bo(e,u,C.iw(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.bo(e,u,C.iw(o,l*0.35))
d.bo(u,t,C.iw(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.bo(u,t,C.iw(o,l*0.22))
$.S()
o=A.I()
o.r=j.gp(0)
d.ad(u,l*0.55,o)
o=A.bK(t,l*1.15,l)
w=A.I()
w.r=k.gp(0)
d.dO(o,w)
w=-l
w=t.a7(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
i0j(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bK(B.v4,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dO(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ekc,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.eh8,9.5,w)}w=A.bK(D.elp,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dO(w,u)
u=A.bK(D.ejF,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dO(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ag,c0,c0,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.l0(13,-20,17,-9,16,2))
t.D(new A.l0(15,13,8,20,0,20))
t.D(new A.l0(-8,20,-15,13,-16,2))
t.D(new A.l0(-17,-9,-13,-20,0,-20))
t.D(new A.bt())
u=A.I()
u.sam(A.tt(D.ekT,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aH(t,u)
u=c4.r
if(u){s=C.iw(c9.j(0.5),0.8)
c3.e3(D.f2_,3.455751918948773,2.5132741228718345,!1,s)
c3.e3(D.f0D,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.ek9,D.ejY,s)
c3.bo(D.eh4,D.egX,s)
c3.e3(D.f0S,2.2,1.4,!1,s)
c3.e3(D.f0B,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e3(D.f15,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-15,-11))
r.D(new A.c4(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c4(0,-12,-13,-6))
r.D(new A.bt())
o=A.I()
o.r=c4.c.gp(0)
c3.aH(r,o)
c3.bo(D.ejZ,D.egY,C.iw(G.n9,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.ekf,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.eh9,3,o)
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c4(-12,22,0,26))
o.D(new A.c4(12,22,13,6))
o.D(new A.c4(8,13,0,12))
o.D(new A.c4(-8,13,-13,6))
o.D(new A.bt())
r=A.I()
r.r=B.iy.gp(0)
c3.aH(o,r)
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-7,8))
r.D(new A.c4(0,6,7,8))
r.D(new A.c4(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aH(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-17,-4))
r.D(new A.c4(-20,-27,0,-29))
r.D(new A.c4(20,-27,17,-4))
r.D(new A.c4(0,-14,-17,-4))
r.D(new A.bt())
o=A.I()
o.r=k.gp(0)
c3.aH(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e3(D.f1c,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e3(D.f1_,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c4(27,-34,25,-19))
o.D(new A.c4(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aH(o,n)
n=new A.aF(v,B.ag,c0,c0,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c4(24,-12,27,-26))
n.D(new A.c4(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aH(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.egZ,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f19,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=0.9
n.r=o.gp(0)
n.d=B.bB
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dmx[j]
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=4.5
n.r=c1.gp(0)
n.d=B.bB
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f18,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(I.a7l,I.a7k,C.iw(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f0E,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bK(D.elb,5,8)
o=D.aep.j(g)
n=A.I()
n.r=o.gp(0)
c3.dO(r,n)
n=A.bK(D.ejR,5,8)
r=D.aep.j(g)
o=A.I()
o.r=r.gp(0)
c3.dO(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(f-0.6,-2))
o.D(new A.c4(f-3.4,6,f-2.6,7.4))
o.D(new A.c4(f,8.8,f+2.6,7.4))
c3.aH(o,C.iw(c9.j(0.75),1.1))
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
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=F.ho[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bK(new A.t(a6,-3),a4,7)
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bG(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bl(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ag,c0,c0,a5)
a5.push(new A.jL(A.bK(new A.t(a6,-3),a4,7)))
a4=a7.gbv().a.snapshot()
a4=a7.e=new A.cf(a4)
r.clipPath(a4.a,$.nF(),!0)
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=D.bgX.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Yk:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b0.b=B.a9
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bB
b0.e=B.dQ
a4=o?0.8:0
a4=A.bK(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.G()
r.drawArc.apply(r,[A.bG(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e2
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.b=B.a9
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bB
b3.e=B.dQ
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bqF
else{u=A.ar(c9,D.bkt,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ag,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aY(w,11.5))
b9.D(new A.c4(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c4(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bt())
v=A.I()
v.r=D.bjO.gp(0)
c3.aH(b9,v)
J.bl(r.save())
c3.mK(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aP(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bK(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.bqK.gp(0)
c3.dO(u,w)
r.restore()
c3.aH(b9,C.iw(b5,1.1))}else{u=new A.aF(v,B.ag,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aY(-5.2,r))
u.D(new A.c4(0,13.1+b6*2.8,5.2,r))
c3.aH(u,C.iw(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ag,c0,c0,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c4(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c4(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aH(w,u)}}if(c5.b>0.2){c3.e3(D.f0R,-1.2,2.2,!1,C.iw(c9.j(0.5),0.8))
c3.e3(D.f0G,2.141592653589793,2.2,!1,C.iw(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.ejy,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eju,1.7,w)}},
i5L(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.p2(),d=A.z8(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.jx(B.I,new A.t(0,a1*0.46),D.d5p,D.cY4,B.x,g))
d.aP(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bl(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e4()
w.cY(8)
for(v=0;v<120;++v){a0=w.af()
a1=w.af()
u=w.af()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.2+w.af()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bl(a3.save())
a3.translate(200,120)
d.ii(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.tt(B.I,230,A.a([D.bfK,B.L],a1),g,B.x,g,g,0))
d.dO(D.f1m,a0)
a3.restore()
a0=A.I()
a0.sam(A.tt(D.a7t,58,A.a([D.biT,B.L],a1),g,B.x,g,g,0))
d.ad(D.a7t,58,a0)
a0=A.I()
a0.r=D.bes.gp(0)
d.ad(D.a7t,24,a0)
a0=A.I()
a0.r=D.YH.gp(0)
d.ad(D.ehT,5,a0)
a0=A.I()
a0.r=D.YH.gp(0)
d.ad(D.ehX,3.4,a0)
a0=A.I()
a0.r=D.YH.gp(0)
d.ad(D.ehW,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ag,g,g,u)
u.push(new A.aY(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.bw(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.bw(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.bw(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bt()
u.push(f)
u=q.f
if(u!=null)f.bw(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bd4,D.bf1,D.bkM][r]
u=$.S()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.cf(q.gbv().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.cs7[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.b=B.a9
u.c=2.4
u.r=D.YX.gp(0)
u.d=B.bB
u.e=B.dQ
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bK(new A.t(f,j-27),11,46)
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.r=D.YX.gp(0)
s=u.G()
a3.drawOval(A.bG(f),s)
s.delete()
a0=A.bK(new A.t(n-12,a0),8,24)
f=new A.ao(B.Q,B.M,B.S,B.T,B.R)
f.r=D.YX.gp(0)
s=f.G()
a3.drawOval(A.bG(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.r=D.bev.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.jx(D.egw,D.egy,D.cZY,B.D2,B.x,g))
d.aP(new A.a3(-200,412,650,1300),f)
i=new A.e4()
i.cY(21)
for(v=0;v<260;++v){f=i.af()
j=420+i.af()*480
a0=i.af()
u=j/900+0.4
u=A.bK(new A.t(f*450,j),1+i.af()*2*u,1.5+a0*4*u)
f=i.h5()?B.c:B.w
a0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a0.r=f.j(0.06+i.af()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bG(u),s)
s.delete()}J.bl(a3.save())
a3.translate(225,590)
d.p9(0,1,0.34)
f=A.I()
f.sam(A.tt(B.I,250,A.a([D.blE,D.bfn,D.bnu],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.af()*450
j=640+i.af()*260
f=i.af()
a0=A.ar(D.agE,D.be_,i.af())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bB
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hZD(d)
for(k=0;k<3;++k)C.i1O(d,D.ayD[k])
C.i1D(d,D.ehN)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=2.4
a1.r=D.YT.gp(0)
a1.d=B.bB
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.egW,D.ehd,C.iw(D.beJ,1.6))
a3.restore()
return e.nj()},
hZD(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ag,g,g,A.a([],e))
d.D(new A.aY(358,462))
d.D(new A.l0(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.l0(416,382,432,422,428,462))
d.D(new A.bt())
w=A.I()
w.sam(A.jx(new A.t(354,0),new A.t(430,0),D.dsD,U.zp,B.x,g))
a0.aH(d,w)
v=new A.e4()
v.cY(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.af()*56
s=462-v.af()*126
r=v.af()
q=v.af()
p=B.w.j(0.18)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.b=B.a9
o.c=1.1
o.r=p.gp(0)
o.d=B.bB
o.e=B.dQ
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d9W[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aF(f,B.ag,g,g,j)
j.push(new A.aY(q,336))
j.push(new A.c4(o,k,r,p))
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=8
q.r=D.af5.gp(0)
q.d=B.bB
q.e=B.dQ
n=q.G()
q=i.gbv().a.snapshot()
w.drawPath((i.e=new A.cf(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.af()
o=v.af()
k=v.af()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=A.ar(D.beB,D.bkL,v.af()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=1.2
q.r=D.YT.gp(0)
q.d=B.bB
q.e=B.dQ
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bK(new A.t(r,p+28),13,7)
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.r=D.blW.gp(0)
n=r.G()
w.drawOval(A.bG(p),n)
n.delete()}},
i1O(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bK(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dO(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ag,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aY(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c4(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bt())
u=A.I()
u.sam(A.jx(new A.t(a9,0),new A.t(v,0),D.da1,U.zp,B.x,a3))
b3.aH(w,u)
t=new A.e4()
t.cY(B.o.V(a4*7))
v=b3.a
J.bl(v.save())
b3.mK(0,w)
for(s=0;s<40;++s){r=a9+t.af()*a6*2
q=b0+t.af()*a7
u=t.af()
p=t.af()
o=B.w.j(0.14)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bB
n.e=B.dQ
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.agA.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aP(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bf(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ag,a3,a3,i)
i.push(new A.aY(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bt())
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=D.lw.j(0.85).gp(0)
m=i.G()
i=h.gbv().a.snapshot()
v.drawPath((h.e=new A.cf(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ag,a3,a3,u)
b1=a5-8
g.D(new A.aY(a9,b1))
for(p/=6,k=0;k<=B.k.bf(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.bw(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aH(g,C.iw(D.agA.j(0.7),1.6))
v.restore()
a9=$.S().r
b1=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.aY(n,l))
i=a5-a7*0.55
b1.D(new A.aq(n,i))
o=p+o
b1.D(new A.c4(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bt())
l=A.I()
l.r=D.agL.gp(0)
b3.aH(b1,l)
l=A.I()
l.r=D.agL.gp(0)
b3.ad(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
f.D(new A.aY(o,i))
n=b0-l*0.55
f.D(new A.c4(a4-a8,n,a4,u))
f.D(new A.c4(a4+a8,n,p,i))
f.D(new A.c4(a4,b0+a6*0.34,o,i))
f.D(new A.bt())
b0=A.I()
n=a6*1.4
b0.sam(A.jx(new A.t(a4-n,0),new A.t(a4+n,0),D.ddr,U.zp,B.x,a3))
b3.aH(f,b0)
J.bl(v.save())
b3.mK(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.af()
n=(t.h5()?B.w:D.be8).j(0.16)
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.b=B.a9
h.c=0.9
h.r=n.gp(0)
h.d=B.bB
h.e=B.dQ
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ag,a3,a3,b0)
n=d+2
b0.push(new A.aY(a4-a0,n))
b0.push(new A.c4(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1.2
n.r=b0.gp(0)
n.d=B.bB
n.e=B.dQ
m=n.G()
b0=p.gbv().a.snapshot()
v.drawPath((p.e=new A.cf(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.af()
b1=t.af()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=1.1
p.r=D.bl7.gp(0)
p.d=B.bB
p.e=B.dQ
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aY(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bt())
a9=A.I()
a9.r=D.bhr.gp(0)
b3.aH(a8,a9)},
i1D(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dmu[r]
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=3
p.r=D.YT.gp(0)
p.d=B.bB
p.e=B.dQ
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bK(e.a7(0,I.aJV),24,36)
t=$.S()
s=A.I()
s.r=D.bpW.gp(0)
d.dO(u,s)
t=new A.aF(t.r,B.ag,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aY(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c4(w,v-24,s,u))
t.D(new A.bt())
u=A.I()
u.r=D.afI.gp(0)
d.aH(t,u)},
i0Y(d){switch(B.o.F(d,8)){case 0:return D.aZ3
case 1:return D.aZ1
case 2:return D.aZ0
case 3:return D.aZ_
case 4:return D.aZ2
case 5:return D.aZ4
case 6:return D.hng
default:return D.hnf}},
RX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bod()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a7u:j
w.as=k==null?D.DJ:k
C.htW(d,e,p,C.i0Y(m),w,s,m,l)},
hvi(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bRQ:function bRQ(){var _=this
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
t2:function t2(d,e,f,g,h,i,j,k,l,m){var _=this
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
bod:function bod(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
als:function als(){this.b=this.a=null},
aVH:function aVH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bRI:function bRI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRJ:function bRJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRK:function bRK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRL:function bRL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRM:function bRM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRN:function bRN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRO:function bRO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRP:function bRP(){},
bRH:function bRH(d){this.a=d},
afd:function afd(d,e){this.a=d
this.b=e},
adb:function adb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mv(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bQr(s)
s.bzB(d)
return s},
GA(d,e,f,g,h,i,j){var w,v=A.T(g).k("Z<1>")
v=A.df(new A.Z(g,new C.fq9(f),v),v.k("M.E"))
w=A.C(v,A.a7(v).k("cs.E"))
B.d.dZ(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d_(w,0,A.dB(3,"count",x.S),A.T(w).c))
B.d.dZ(v,d)
return new C.ln(e,v,B.d.cu(v,f),h,i,"tree",j)},
ime(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.h_6(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.k5(c4,c0)
t=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.k5(c4,c0)
r=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.k5(c4,c0)
q=A.C(c4,A.a7(c4).k("cs.E"))
for(c4=w.length,v=A.T(t).k("Z<1>"),s=v.k("M.E"),p=A.T(w).k("Z<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.L)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wa)g="father"
else g=h===D.of?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.h_8(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GA(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.h_9(i,m),p),o)
B.d.dZ(d,c6)
c2.$2(b4,new C.ln("True or false: "+h+" is the "+g+" of "+l+".",D.azF,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ln("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.azF,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FQ(m)
h=a0.length
if(h!==0){a1=a0[c6.ap(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.h_a(l,a0,c5),v),s)
e=a1.c
if(e===D.wa)e="son"
else e=e===D.of?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.GA(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eE([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mr(a5,a5.r,f.k("mr<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.GA(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("je<1>"),a3=new A.je(a0,1,b3,a2),a3.od(a0,1,b3,e.c),a3=new A.bS(a3,a3.gL(0),a2.k("bS<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.GA(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqt(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.h_b(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.GA(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.h_c(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wa
if(e)a2=b7
else a2=f===D.of?b8:b9
if(e)f=b7
else f=f===D.of?b8:b9
c2.$2("grand",C.GA(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aLM(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.ap(k)].b)
j=A.C(new A.Z(t,new C.h_d(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GA(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cKJ)
h=l+" was born in "+k
c2.$2("place",C.GA(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d0_)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GA(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.L)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GA(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jK(b1,b3,b3)
c2.$2("year",C.GA(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bD8(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Mv(d),l=new A.e4()
l.cY(f)
w=C.ime(m,l,g)
for(v=new A.du(w,w.r,w.e);v.C();)J.hdV(v.d,l)
v=A.a7(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.dZ(u,l)
t=A.a([],x.J)
s=A.aX(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fCL(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.L)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.r(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.r(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.axE,x.df)
B.d.dZ(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hu2(o,l))}}else if(!g&&v>3){o=C.hu2(D.axE[l.ap(14)],l)
t[t.length-1-l.ap(3)]=o}return t},
hu2(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.dZ(w,e)
return new C.ln(d.a,w,B.d.cu(w,v),d.d,d.e,d.f,d.r)},
hyK(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Mv(a2),a1=new A.e4()
a1.cY(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a0.FQ(q).length>=2)u.push(q)}B.d.dZ(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){n=u[r]
m=a0.FQ(n)
l=A.T(m)
k=new A.je(m,0,5,l.k("je<1>"))
k.od(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fQW(),A.T(j).k("N<1,G>")).fJ(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.L)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.L)(j),++i)g.push(C.aRr(a0,j[i]))
w.push(new C.atr("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
J.ca(e.c3(0,a0.alU(q),new C.fQX()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.d_(d,0,A.dB(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bS(u,u.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.dZ(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.L)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r)s.push(C.aRr(a0,v[r]))
w.push(new C.atr("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aPV(d){return B.d.anh(D.aA8,new C.fzb(d))},
icp(d){return A.pV(new A.Z(D.aA8,new C.fFw(d),x.av))},
bRf(d){return C.hI5(d)},
hI5(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRf=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRf)
case 7:r=f
q=B.a.i(d)
q=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bRf,v)},
Bu(d,e){return C.hI2(d,e)},
hI2(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bu)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.au("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bu)
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
return A.i($async$Bu,v)},
bRe(d,e,f){return C.hI3(d,e,f)},
hI3(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRe=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRe)
case 7:r=h
q=B.a.i(d)
q=A.ev(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bRe,v)},
Bv(d,e,f,g){return C.hI4(d,e,f,g)},
hI4(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Bv=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bv)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.au("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Bv)
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
return A.i($async$Bv,v)},
bFp(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h16(d,e,f,g){return new C.ak7(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hGb(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cv)
while(u.C())w.push(J.k(u.gS(u)))
u=x.N
w=A.d_(w,0,A.dB(4,"count",x.S),u).dm(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.h16(w,v,B.o.E(u==null?20:u,5,60),t)},
heZ(d){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aW(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cv)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gS(q)
if(u.b(r))v.push(C.hGb(A.a2(r,t,s)))}return new C.Mf(p,w,v)},
h9o(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.heZ(w.gS(w)))
return v},
aRr(d,e){var w=e.c===D.of
if(d.alU(e)===0&&d.FQ(e).length!==0)return w?0:1
if(d.FQ(e).length!==0||d.aqt(e)!=null)return w?2:3
return w?4:5},
hzQ(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mv(a4),a3=new A.e4()
a3.cY(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.dZ(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.L)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.L)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FQ(m)
g=a2.aqt(m)
f=a2.aLM(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wa)k="father"
else k=k===D.of?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.wa)k="father"
else k=k===D.of?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dZ(l,a3)
B.d.aZ(l,new C.h_w())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.h_x(d),o),n)
B.d.dZ(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.je(a0,0,3,i.k("je<1>"))
a1.od(a0,0,3,i.c)
B.d.v(k,a1)
B.d.dZ(k,a3)
a1=C.aRr(a2,m)
i=new A.je(l,0,4,p)
i.od(l,0,4,r)
w.push(new C.b9J(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hrC(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
hyW(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mv(a4),a3=new A.e4()
a3.cY(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a2.FQ(q).length>=2)u.push(q)}B.d.dZ(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){l=u[r]
k=a2.FQ(l)
j=A.T(k)
i=new A.je(k,0,4,j.k("je<1>"))
i.od(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.L)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b3(h,new C.fRr(q))&&q.d!==j)i.push(q)}B.d.dZ(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.je(i,0,k,m)
j.od(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aRr(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.L)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.L)(h),++g)e.push(C.aRr(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.L)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.L)(f),++g)a0.push(C.aRr(a2,f[g]))
w.push(new C.a9k(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ln:function ln(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bQr:function bQr(d){this.b=d
this.c=$},
bQs:function bQs(){},
bQt:function bQt(d){this.a=d},
fq9:function fq9(d){this.a=d},
h_6:function h_6(d){this.a=d},
h_7:function h_7(){},
h_8:function h_8(d){this.a=d},
h_9:function h_9(d,e){this.a=d
this.b=e},
h_a:function h_a(d,e,f){this.a=d
this.b=e
this.c=f},
h_5:function h_5(d,e){this.a=d
this.b=e},
h_b:function h_b(d){this.a=d},
h_c:function h_c(d){this.a=d},
h_d:function h_d(d,e,f){this.a=d
this.b=e
this.c=f},
h_4:function h_4(d,e){this.a=d
this.b=e},
fCL:function fCL(d,e){this.a=d
this.b=e},
atr:function atr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fQW:function fQW(){},
fQX:function fQX(){},
zg:function zg(d,e,f){this.a=d
this.b=e
this.c=f},
fzb:function fzb(d){this.a=d},
fFw:function fFw(d){this.a=d},
ak7:function ak7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLr:function bLr(){},
Mf:function Mf(d,e,f){this.a=d
this.b=e
this.c=f},
b9J:function b9J(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h_w:function h_w(){},
h_x:function h_x(d){this.a=d},
a9k:function a9k(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fRr:function fRr(d){this.a=d},
bgX:function bgX(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afb:function afb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajm:function ajm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajn:function ajn(d,e,f,g,h){var _=this
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
_.bx$=g
_.a9$=h
_.c=_.a=null},
bJE:function bJE(d){this.a=d},
bJz:function bJz(){},
bJF:function bJF(){},
bJx:function bJx(){},
bJy:function bJy(){},
bJD:function bJD(d){this.a=d},
bJA:function bJA(d,e){this.a=d
this.b=e},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJB:function bJB(d,e){this.a=d
this.b=e},
bJw:function bJw(d){this.a=d},
bc5:function bc5(d,e){this.b=d
this.a=e},
Q8:function Q8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAO:function aAO(d,e,f){this.b=d
this.c=e
this.a=f},
aze:function aze(d,e,f){this.a=d
this.b=e
this.c=f},
au2:function au2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
au3:function au3(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b7$=f
_.c=_.a=null},
cnt:function cnt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnu:function cnu(d){this.a=d},
cns:function cns(d){this.a=d},
cnv:function cnv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cnw:function cnw(){},
cnx:function cnx(d,e){this.a=d
this.b=e},
cny:function cny(){},
cnz:function cnz(d){this.a=d},
cnp:function cnp(d){this.a=d},
cnq:function cnq(d,e){this.a=d
this.b=e},
cnr:function cnr(d,e,f){this.a=d
this.b=e
this.c=f},
cnk:function cnk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnm:function cnm(d,e){this.a=d
this.b=e},
cnn:function cnn(d,e){this.a=d
this.b=e},
cnl:function cnl(d,e){this.a=d
this.b=e},
cnj:function cnj(){},
cno:function cno(){},
bbB:function bbB(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cMR:function cMR(){},
axZ:function axZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ay_:function ay_(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cCo:function cCo(d){this.a=d},
cCn:function cCn(d){this.a=d},
cCw:function cCw(d,e){this.a=d
this.b=e},
cCx:function cCx(d,e){this.a=d
this.b=e},
cCy:function cCy(d){this.a=d},
cCv:function cCv(d){this.a=d},
cCz:function cCz(d){this.a=d},
cCA:function cCA(d,e){this.a=d
this.b=e},
cCB:function cCB(){},
cCC:function cCC(d){this.a=d},
cCq:function cCq(d){this.a=d},
cCr:function cCr(d,e){this.a=d
this.b=e},
cCp:function cCp(d,e){this.a=d
this.b=e},
cCs:function cCs(){},
cCt:function cCt(){},
cCu:function cCu(d,e){this.a=d
this.b=e},
az_:function az_(){},
aGe:function aGe(){},
h7g(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqv((w-450*u)/2,(v-900*u)/2,u)},
af_:function af_(){},
f2U:function f2U(d){this.a=d},
aK2:function aK2(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fd_:function fd_(d){this.a=d},
ali:function ali(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alj:function alj(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pZ$=f
_.LG$=g
_.amq$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bRd:function bRd(d){this.a=d},
bRc:function bRc(){},
bRa:function bRa(d){this.a=d},
bR8:function bR8(){},
bR9:function bR9(d){this.a=d},
bR5:function bR5(d,e){this.a=d
this.b=e},
bR6:function bR6(){},
bR7:function bR7(d){this.a=d},
bRb:function bRb(d,e){this.a=d
this.b=e},
bR4:function bR4(d){this.a=d},
bsb:function bsb(d,e){this.b=d
this.a=e},
f2V:function f2V(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f2W:function f2W(d,e,f){this.a=d
this.b=e
this.c=f},
f2X:function f2X(d,e,f){this.a=d
this.b=e
this.c=f},
f2Y:function f2Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2Z:function f2Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f3_:function f3_(){},
alg:function alg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alh:function alh(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pZ$=f
_.LG$=g
_.amq$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bQR:function bQR(){},
bR1:function bR1(d,e){this.a=d
this.b=e},
bR2:function bR2(d){this.a=d},
bR3:function bR3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQY:function bQY(){},
bQX:function bQX(d,e){this.a=d
this.b=e},
bQZ:function bQZ(d,e){this.a=d
this.b=e},
bR_:function bR_(){},
bR0:function bR0(d){this.a=d},
bQT:function bQT(d){this.a=d},
bQU:function bQU(d){this.a=d},
bQV:function bQV(d){this.a=d},
bQS:function bQS(d,e){this.a=d
this.b=e},
bQW:function bQW(d){this.a=d},
biM:function biM(d,e){this.b=d
this.a=e},
dnY:function dnY(){},
a1m:function a1m(d,e){this.a=d
this.b=e},
alc:function alc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ald:function ald(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pZ$=e
_.LG$=f
_.amq$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bQD:function bQD(d){this.a=d},
bQC:function bQC(){},
bQB:function bQB(){},
bQv:function bQv(){},
bQw:function bQw(){},
bQA:function bQA(d,e,f){this.a=d
this.b=e
this.c=f},
bQz:function bQz(d){this.a=d},
bQx:function bQx(d,e){this.a=d
this.b=e},
bQy:function bQy(d){this.a=d},
bib:function bib(d,e){this.b=d
this.a=e},
aAR:function aAR(){},
bfJ:function bfJ(){},
aAT:function aAT(){},
bfK:function bfK(){},
aAU:function aAU(){},
bfL:function bfL(){},
uk(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j2,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ad],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.B(v,B.m,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.NF,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a3)},
hfN(d,e,f,g,h,i,j){return new C.ale(i,h,d,j,e,f,g,null)},
a5R:function a5R(d,e){this.c=d
this.a=e},
bij:function bij(d){this.a=d},
tr:function tr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bQu:function bQu(d){this.a=d},
I_:function I_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Vx:function Vx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl4:function bl4(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYM:function dYM(d){this.a=d},
dYN:function dYN(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d){this.a=d},
dYK:function dYK(d){this.a=d},
dYI:function dYI(d){this.a=d},
dYG:function dYG(d){this.a=d},
dYH:function dYH(d){this.a=d},
dYF:function dYF(d,e){this.a=d
this.b=e},
dYO:function dYO(d){this.a=d},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d,e){this.a=d
this.b=e},
dYR:function dYR(d,e){this.a=d
this.b=e},
dYU:function dYU(d,e){this.a=d
this.b=e},
dYV:function dYV(d,e){this.a=d
this.b=e},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYY:function dYY(d,e){this.a=d
this.b=e},
dYZ:function dYZ(d,e,f){this.a=d
this.b=e
this.c=f},
dZ_:function dZ_(d,e){this.a=d
this.b=e},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dYS:function dYS(d){this.a=d},
dYT:function dYT(d){this.a=d},
a_d:function a_d(d,e){this.a=d
this.b=e},
ale:function ale(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alf:function alf(d){var _=this
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
bQP:function bQP(d){this.a=d},
bQQ:function bQQ(d){this.a=d},
bQO:function bQO(d){this.a=d},
bQF:function bQF(d){this.a=d},
bQG:function bQG(d){this.a=d},
bQE:function bQE(d){this.a=d},
bQL:function bQL(d,e,f){this.a=d
this.b=e
this.c=f},
bQM:function bQM(d){this.a=d},
bQI:function bQI(d,e){this.a=d
this.b=e},
bQJ:function bQJ(d,e,f){this.a=d
this.b=e
this.c=f},
bQN:function bQN(){},
bQK:function bQK(d,e){this.a=d
this.b=e},
bQH:function bQH(d){this.a=d},
Tb:function Tb(d,e){this.c=d
this.a=e},
alb:function alb(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bQf:function bQf(d){this.a=d},
bQg:function bQg(d){this.a=d},
bQq:function bQq(){},
bQp:function bQp(d,e,f){this.a=d
this.b=e
this.c=f},
bQk:function bQk(d,e){this.a=d
this.b=e},
bQj:function bQj(d,e){this.a=d
this.b=e},
bQl:function bQl(d){this.a=d},
bQm:function bQm(d,e){this.a=d
this.b=e},
bQn:function bQn(d,e){this.a=d
this.b=e},
bQi:function bQi(d,e){this.a=d
this.b=e},
bQo:function bQo(d,e,f){this.a=d
this.b=e
this.c=f},
bQh:function bQh(d,e){this.a=d
this.b=e},
iaR(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aie(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fCh(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Z<1>"),q=q.k("cQ<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yC)m.push(l===D.wa?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cD(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cD(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jK(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jK(h,a2,a2)-A.jK(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Z(a4,new C.fCf(u,f),p),new C.fCg(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ar(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iaS(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aie(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fCm(v,e)
q=new C.fCk(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.L)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.L)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.L)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.aj(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.aj(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bd<2>")
d=A.df(new A.bd(p,d),d.k("M.E"))
n=A.C(d,A.a7(d).k("cs.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.f2(l,new C.fCl(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hX4(d,e,f,g){var w,v,u=C.iaT(d,e)
if(u<=0||f.length<=u)return new A.aeD(!1,D.D3,f)
if(g.t(0,e.a))return new A.aeD(!1,D.D3,f)
w=A.T(f).c
v=A.d_(f,0,A.dB(u,"count",x.S),w).dm(0)
return new A.aeD(!0,A.d_(f,u,null,w).dm(0),v)},
hX5(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aie(d3),d2=d1.length
if(d2===0)return D.hkp
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.ddx(t))}s=new C.ddO(v)
d2=x.dy
r=A.U(w,d2)
q=new C.ddG(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.ddF(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ca(l.c3(0,k,new C.ddy()),o)}h=new C.ddE(s)
g=new C.ddD(l,r)
p=v.$ti.k("bd<2>")
o=p.k("Z<M.E>")
f=A.C(new A.Z(new A.bd(v,p),new C.ddz(h),o),o.k("M.E"))
e=f.length===0?new A.bd(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.i
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.ddM(new C.ddI(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.galm(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eE([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pV(J.dI(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.ddw(a2,new C.ddN(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cx<1>")
d2=A.C(new A.cx(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.G9(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Kp(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.ddA(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gS(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.f2(j,new C.ddB(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.ddC())
c6.push(new C.aJY(new A.t(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bfP(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
huH(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
hoS(d,e,f,g,h,i,j,k,l,m,n){return new C.a_q(k,f,j,e,l,n,m,d,g,h,i,null)},
aCQ(d,e,f,g,h,i,j){return new C.bjC(i,d,e,f,j,h,g,null)},
aqf:function aqf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEn:function aEn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e_q:function e_q(d){this.a=d},
e_p:function e_p(d){this.a=d},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_t:function e_t(d,e){this.a=d
this.b=e},
e_u:function e_u(d){this.a=d},
e_o:function e_o(d,e){this.a=d
this.b=e},
e_r:function e_r(d){this.a=d},
e_w:function e_w(d){this.a=d},
e_v:function e_v(d,e){this.a=d
this.b=e},
aq9:function aq9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEk:function aEk(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dZR:function dZR(d){this.a=d},
dZP:function dZP(d){this.a=d},
dZQ:function dZQ(d){this.a=d},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZM:function dZM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZd:function dZd(d){this.a=d},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZv:function dZv(d){this.a=d},
dZt:function dZt(d){this.a=d},
dZu:function dZu(d,e){this.a=d
this.b=e},
dZw:function dZw(d){this.a=d},
dZx:function dZx(d,e){this.a=d
this.b=e},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZs:function dZs(d){this.a=d},
dZr:function dZr(d){this.a=d},
dZq:function dZq(d,e){this.a=d
this.b=e},
dZI:function dZI(){},
dZJ:function dZJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZH:function dZH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZB:function dZB(d){this.a=d},
dZC:function dZC(d,e,f){this.a=d
this.b=e
this.c=f},
dZA:function dZA(d,e){this.a=d
this.b=e},
dZD:function dZD(d,e){this.a=d
this.b=e},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZz:function dZz(){},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZF:function dZF(d){this.a=d},
dZG:function dZG(d,e){this.a=d
this.b=e},
dZK:function dZK(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZU:function dZU(d,e,f){this.a=d
this.b=e
this.c=f},
dZO:function dZO(d,e,f){this.a=d
this.b=e
this.c=f},
dZN:function dZN(d){this.a=d},
dZ3:function dZ3(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dZ5:function dZ5(){},
dZ6:function dZ6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZa:function dZa(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
dZ8:function dZ8(d){this.a=d},
dZb:function dZb(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d){this.a=d},
dZT:function dZT(d){this.a=d},
dZn:function dZn(){},
dZo:function dZo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZm:function dZm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZi:function dZi(d,e,f){this.a=d
this.b=e
this.c=f},
dZh:function dZh(d,e,f){this.a=d
this.b=e
this.c=f},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZj:function dZj(d){this.a=d},
dZk:function dZk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZl:function dZl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZp:function dZp(d,e){this.a=d
this.b=e},
e_0:function e_0(){},
e_1:function e_1(d,e){this.a=d
this.b=e},
e_2:function e_2(d){this.a=d},
e_3:function e_3(d,e){this.a=d
this.b=e},
dZX:function dZX(d){this.a=d},
dZV:function dZV(d,e){this.a=d
this.b=e},
dZY:function dZY(d,e){this.a=d
this.b=e},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e__:function e__(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_4:function e_4(d){this.a=d},
dZW:function dZW(d){this.a=d},
dZc:function dZc(d){this.a=d},
bfN:function bfN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ddu:function ddu(d){this.a=d},
ddt:function ddt(d,e){this.a=d
this.b=e},
ddv:function ddv(d){this.a=d},
dds:function dds(d,e){this.a=d
this.b=e},
fCh:function fCh(d,e){this.a=d
this.b=e},
fCi:function fCi(d){this.a=d},
fCj:function fCj(){},
fCf:function fCf(d,e){this.a=d
this.b=e},
fCg:function fCg(){},
fCm:function fCm(d,e){this.a=d
this.b=e},
fCn:function fCn(d){this.a=d},
fCo:function fCo(){},
fCk:function fCk(d){this.a=d},
fCl:function fCl(d,e){this.a=d
this.b=e},
Kp:function Kp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
G9:function G9(d,e){this.a=d
this.b=e},
bfP:function bfP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ddx:function ddx(d){this.a=d},
ddO:function ddO(d){this.a=d},
ddG:function ddG(d){this.a=d},
ddH:function ddH(){},
ddF:function ddF(d){this.a=d},
ddy:function ddy(){},
ddE:function ddE(d){this.a=d},
ddD:function ddD(d,e){this.a=d
this.b=e},
ddz:function ddz(d){this.a=d},
ddI:function ddI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddJ:function ddJ(d){this.a=d},
ddK:function ddK(d){this.a=d},
ddL:function ddL(){},
ddM:function ddM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ddN:function ddN(){},
ddw:function ddw(d,e,f,g,h,i,j,k,l,m){var _=this
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
ddA:function ddA(d,e){this.a=d
this.b=e},
ddB:function ddB(d){this.a=d},
ddC:function ddC(){},
aJY:function aJY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfQ:function bfQ(d,e){this.b=d
this.a=e},
ddP:function ddP(){},
ddQ:function ddQ(d){this.a=d},
ddR:function ddR(d){this.a=d},
ddS:function ddS(){},
bjD:function bjD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beS:function beS(d,e){this.b=d
this.a=e},
bxw:function bxw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fiN:function fiN(d){this.a=d},
bmW:function bmW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eTJ:function eTJ(d){this.a=d},
eTI:function eTI(d,e){this.a=d
this.b=e},
a_q:function a_q(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCO:function aCO(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dtD:function dtD(d,e){this.a=d
this.b=e},
dtC:function dtC(d){this.a=d},
dtA:function dtA(d){this.a=d},
dtB:function dtB(d){this.a=d},
dtM:function dtM(d){this.a=d},
dtN:function dtN(d){this.a=d},
dtL:function dtL(d,e){this.a=d
this.b=e},
dtO:function dtO(){},
dtR:function dtR(d){this.a=d},
dtK:function dtK(d,e){this.a=d
this.b=e},
dtQ:function dtQ(){},
dtS:function dtS(d){this.a=d},
dtJ:function dtJ(d,e){this.a=d
this.b=e},
dtT:function dtT(d){this.a=d},
dtI:function dtI(d){this.a=d},
dtU:function dtU(d){this.a=d},
dtH:function dtH(d){this.a=d},
dtV:function dtV(d){this.a=d},
dtG:function dtG(d){this.a=d},
dtW:function dtW(d){this.a=d},
dtF:function dtF(d){this.a=d},
dtX:function dtX(d){this.a=d},
dtE:function dtE(d,e){this.a=d
this.b=e},
dtP:function dtP(d){this.a=d},
adx:function adx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjC:function bjC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adw:function adw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bjB:function bjB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dtY:function dtY(d){this.a=d},
dtZ:function dtZ(d,e){this.a=d
this.b=e},
aCP:function aCP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJ_:function aJ_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ady:function ady(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
du7:function du7(d){this.a=d},
G5:function G5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hjL(d){var w=d.T,v=x.N
return w.jk(w,new C.cd5(),v,v)},
hOA(d){var w=d.bD
if(w>=0)return w
return 5},
hjN(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hjL(d).h(0,v)
if(w==null||w.length===0)return null
return A.bk(w)},
hjM(d,e){var w=C.hjN(d,e)
if(w!=null&&w.ce(new A.V(Date.now(),0,!1)))return!0
return!1},
hOB(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hjL(d),w,w)
u=C.hjN(d,e)
t=u!=null&&u.ce(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dx(30,0,0,0,0,0).a).a8().ae())
d.T=v},
b0i(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0i=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lu(t,B.J5),$async$b0i)
case 3:if(l){u=!0
w=1
break}u=A.l7(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.J5,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0i,v)},
cd5:function cd5(){},
hOy(){var w,v=$.oh(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hm(u)},
IT(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$IT)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IT)
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
return A.i($async$IT,v)},
a7z(d){return C.hOz(d)},
hOz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7z=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7z)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7z)
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
return A.i($async$a7z,v)},
cd4(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cd4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IT(),$async$cd4)
case 3:t=m.k0(f),t=t.gag(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gS(t)
q=r.b
if(s.b(q)){p=J.a6(q)
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
return A.i($async$cd4,v)},
NQ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cd4(d),$async$NQ)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IT(),$async$NQ)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a8().ae())
r.n(s,t,o)
w=9
return A.b(C.a7z(s),$async$NQ)
case 9:case 8:u=t
w=1
break
case 5:n=C.hOy()
w=10
return A.b(C.IT(),$async$NQ)
case 10:s=f
J.aJ(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=11
return A.b(C.a7z(s),$async$NQ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NQ,v)},
b0h(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IT(),$async$b0h)
case 3:t=f
for(s=J.dn(t),r=s.gdV(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7z(t),$async$b0h)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0h,v)},
a7A(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7A=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqe(d,e),$async$a7A)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NQ(d),$async$a7A)
case 7:w=4
break
case 5:w=8
return A.b(C.b0h(d),$async$a7A)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7A,v)},
aq8(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aq8=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqe(f,e),$async$aq8)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aq8)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IT(),$async$aq8)
case 7:q=o.r(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a6(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq8,v)},
b0g(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0g=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b0g)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IT(),$async$b0g)
case 4:t=q.r(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a6(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0g,v)},
hOC(){var w,v=$.oh(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hm(u)},
aqb(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aqb)
case 3:if(!g){u=null
w=1
break}t=C.hOC()
w=4
return A.b(A.Vy(),$async$aqb)
case 4:s=g
r=B.dO.aO(B.X.aq(d.f_(),null))
r=B.cJ.gct().aO(r)
q=e?999:2
J.aJ(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=5
return A.b(A.a7B(s),$async$aqb)
case 5:p=e?999:2
u=new A.a0C("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqb,v)},
aqa(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqa=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Vy(),$async$aqa)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b0g(J.k(l==null?"":l),j),$async$aqa)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cB(0,B.cF.aO(t))
s=C.hjO(r)}catch(f){q=A.ab(f)
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
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
o.n(p,g,l)}w=5
return A.b(A.a7B(p),$async$aqa)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqa,v)},
hjO(d){var w,v,u,t,s=null
try{w=B.X.aM(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hOE(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h3h(d){var w=0,v=A.j(x.m),u,t,s
var $async$h3h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqa(t[1])
w=1
break}u=null
w=1
break}u=C.hjO(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h3h,v)},
hOE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cd7(),u.$ti.k("M.E"),x.k)
t=A.a7(u).k("Z<M.E>")
s=A.C(new A.Z(u,new C.cd8(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bk(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.k0(p),t=t.gag(t),o=x.B;t.C();){n=t.gS(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cd9(),n.$ti.k("M.E"),o)
k=A.a7(n).k("Z<M.E>")
j=A.C(new A.Z(n,new C.cda(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqc(h,w,s,r,q)},
aqe(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NH(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.B_(d),$async$aqe)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqe,v)},
cdg(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cdg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.B_(d),$async$cdg)
case 3:t=s.b6(f,new C.cdh(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cdi())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdg,v)},
Vz(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Vz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqe(e,d),$async$Vz)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NQ(e),$async$Vz)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.B_(e),$async$Vz)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cde(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a6(r)
if(t.gan(r)){u=null
w=1
break}t=t.dG(r,new C.cdf(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lb(e,o),$async$Vz)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aqc(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vz,v)},
b0l(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0l=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vz(d,e,f,g),$async$b0l)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.GQ(A.Kl(q.f_(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0l,v)},
b0k(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0k=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vz(d,e,f,g),$async$b0k)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqb(r,f),$async$b0k)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aH_(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0k,v)},
VA(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VA=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h3h(a0),$async$VA)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aq8(g.a,d,e,f,s,r),$async$VA)
case 6:if(!a2){if(r)throw A.W(A.be("This backup expired or the sender's tree is no longer available."))
throw A.W(A.be("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bCP(e,j),$async$VA)
case 12:case 11:w=13
return A.b(C.ai_(e,j,s),$async$VA)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.Ba(e,i,h),$async$VA)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bqB(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
aqc:function aqc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cdc:function cdc(){},
cdd:function cdd(){},
cdb:function cdb(){},
cd7:function cd7(){},
cd8:function cd8(){},
cd9:function cd9(){},
cda:function cda(){},
cdh:function cdh(){},
cdi:function cdi(){},
cde:function cde(d){this.a=d},
cdf:function cdf(d){this.a=d},
hbU(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hH(d,new C.aqd(w,e,g,i,f,h,null),!0,null,x.H)},
ddr(d,e,f,g,h,i,j,k){return new C.bfM(i,e,k,j,g,f,h,d,null)},
aqd:function aqd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEm:function aEm(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e_d:function e_d(d){this.a=d},
e_e:function e_e(d,e,f){this.a=d
this.b=e
this.c=f},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_j:function e_j(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_c:function e_c(d,e){this.a=d
this.b=e},
e_h:function e_h(d){this.a=d},
e_g:function e_g(d,e){this.a=d
this.b=e},
e_f:function e_f(){},
e_l:function e_l(d){this.a=d},
e_m:function e_m(d,e){this.a=d
this.b=e},
e_k:function e_k(d,e){this.a=d
this.b=e},
ddT:function ddT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfO:function bfO(d,e,f){this.d=d
this.e=e
this.a=f},
acO:function acO(d,e,f){this.c=d
this.d=e
this.a=f},
bfM:function bfM(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfR:function bfR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_L:function a_L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEl:function aEl(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e_5:function e_5(d,e){this.a=d
this.b=e},
e_6:function e_6(d){this.a=d},
e_7:function e_7(d){this.a=d},
e_8:function e_8(d){this.a=d},
e_9:function e_9(d){this.a=d},
a_M:function a_M(d){this.a=d},
bl5:function bl5(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e_n:function e_n(d,e){this.a=d
this.b=e},
aZQ(d,e){return new C.aZP(d,e,null)},
aZP:function aZP(d,e,f){this.c=d
this.d=e
this.a=f},
idl(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
ikQ(d){return A.bV(B.L,null,new C.fSV(new C.u7(A.P(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hlI(d,e){return new C.atf(e,d,null)},
aRl(d,e,f,g,h,i,j){var w=C.idl(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a6F(w,!0,null),null),B.ap)
return N.aQH(e,B.bX,f,g,h,i,j)},
lP:function lP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6F:function a6F(d,e,f){this.c=d
this.d=e
this.a=f},
bkM:function bkM(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b7$=e
_.c=_.a=null},
dLI:function dLI(d){this.a=d},
dLJ:function dLJ(){},
dLK:function dLK(d,e){this.a=d
this.b=e},
bkL:function bkL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fSV:function fSV(d){this.a=d},
fSU:function fSU(d,e){this.a=d
this.b=e},
fST:function fST(d,e){this.a=d
this.b=e},
fSS:function fSS(d,e){this.a=d
this.b=e},
atf:function atf(d,e,f){this.c=d
this.d=e
this.a=f},
clL:function clL(d,e){this.a=d
this.b=e},
aMp:function aMp(){},
ikB(d){var w=null
return A.ck(w,w,!0,w,new C.fSh(),d,w,!0,!0,x.e2)},
ilM(d,e,f,g,h){var w=null
return A.ck(w,w,!0,w,new C.fZN(h,g,f,e),d,w,!0,!0,x.N)},
ikD(d,e){var w=null
return A.ck(w,w,!0,w,new C.fSm(e),d,w,!0,!0,x.dY)},
ikC(d){var w=null
return A.ck(w,w,!0,w,new C.fSl(),d,w,!0,!0,x.c5)},
aUm:function aUm(d,e){this.a=d
this.b=e},
aUl:function aUl(d){this.a=d},
aSj:function aSj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSh:function fSh(){},
fZN:function fZN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSm:function fSm(d){this.a=d},
fSl:function fSl(){},
Zo:function Zo(d,e){this.c=d
this.a=e},
azy:function azy(){var _=this
_.d=$
_.c=_.a=_.e=null},
d58:function d58(d){this.a=d},
d59:function d59(d){this.a=d},
d57:function d57(d,e){this.a=d
this.b=e},
d5a:function d5a(d){this.a=d},
d5b:function d5b(d){this.a=d},
Zn:function Zn(d){this.a=d},
azx:function azx(){this.d=$
this.c=this.a=null},
d54:function d54(d){this.a=d},
d55:function d55(d){this.a=d},
d56:function d56(d){this.a=d},
YV:function YV(d){this.a=d},
ayd:function ayd(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cDz:function cDz(){},
cDF:function cDF(d){this.a=d},
cDG:function cDG(d){this.a=d},
cDH:function cDH(d){this.a=d},
cDE:function cDE(){},
cDI:function cDI(d){this.a=d},
cDJ:function cDJ(d){this.a=d},
cDD:function cDD(){},
cDK:function cDK(d,e){this.a=d
this.b=e},
cDC:function cDC(d,e){this.a=d
this.b=e},
cDA:function cDA(d,e){this.a=d
this.b=e},
cDL:function cDL(d){this.a=d},
cDB:function cDB(){},
cDM:function cDM(d){this.a=d},
a1y:function a1y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxm:function bxm(){this.d=$
this.c=this.a=null},
fi6:function fi6(d,e){this.a=d
this.b=e},
fi7:function fi7(d){this.a=d},
fi8:function fi8(d,e){this.a=d
this.b=e},
abS:function abS(d,e){this.a=d
this.b=e},
FV:function FV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxk:function bxk(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fi4:function fi4(d,e){this.a=d
this.b=e},
ay6:function ay6(d,e){this.c=d
this.a=e},
bxl:function bxl(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fi5:function fi5(d){this.a=d},
bxj:function bxj(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOv:function aOv(){},
aOw:function aOw(){},
bEM(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bf(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oV(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fQJ(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aX(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yg(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aQX(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aQX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l2(85,1280,B.eK),$async$aQX)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fl(),$async$aQX)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hlH()
w=9
return A.b(C.clK(q,r),$async$aQX)
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
return A.i($async$aQX,v)},
aRj(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRj=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.clH(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aO(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().LY(p,!0,null,i).da(0,B.fY),$async$aRj)
case 9:n=a1
w=10
return A.b(n.lM(),$async$aRj)
case 10:m=a1
w=11
return A.b(J.a3f(m).hw(B.h9),$async$aRj)
case 11:l=a1
J.a3f(m).q()
if(l==null){w=8
break}i=J.eS(B.dK.gaR(l))
k="data:image/png;base64,"+B.cJ.gct().aO(i)
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
return A.i($async$aRj,v)},
fQJ:function fQJ(){},
u7:function u7(d){this.a=d},
ate:function ate(d,e,f){this.c=d
this.d=e
this.a=f},
aFQ:function aFQ(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eQT:function eQT(d,e){this.a=d
this.b=e},
eQK:function eQK(d){this.a=d},
eQL:function eQL(d){this.a=d},
eQR:function eQR(d,e){this.a=d
this.b=e},
eQQ:function eQQ(d,e){this.a=d
this.b=e},
eQN:function eQN(d,e){this.a=d
this.b=e},
eQM:function eQM(d,e){this.a=d
this.b=e},
eQO:function eQO(d){this.a=d},
eQP:function eQP(d,e){this.a=d
this.b=e},
eQS:function eQS(d,e){this.a=d
this.b=e},
eQF:function eQF(d,e){this.a=d
this.b=e},
eQJ:function eQJ(d){this.a=d},
eQI:function eQI(d,e){this.a=d
this.b=e},
eQH:function eQH(d){this.a=d},
eQU:function eQU(d,e){this.a=d
this.b=e},
eQV:function eQV(d,e){this.a=d
this.b=e},
eQG:function eQG(d,e){this.a=d
this.b=e},
hyy(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a8().ae(),"project",v],x.N,x.z)},
fQK(d,e,f){var w=0,v=A.j(x.N),u
var $async$fQK=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aq(C.hyy(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQK,v)},
bEO(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bEO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fQK(!0,d,e),$async$bEO)
case 4:w=3
return A.b(r.atc(g,d,e.a),$async$bEO)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dO.aO(B.X.aq(C.hyy(d,e,null),null))
u="NGMY_WS:"+B.kA.gct().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEO,v)},
hqf(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hbz(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d2(s,"{"))try{w=B.X.aM(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iit(d){var w,v,u,t=C.hqf(d)
if(t==null)return null
if(C.hbz(t))return t
w=B.a.cu(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.hbz(v))return v}u=B.a.cu(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.hbz(v))return v}return null},
hby(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.ch.cB(0,B.cF.aO(J.nk(q,8)))
w=t.a(B.X.aM(0,v,r))}else w=t.a(B.X.aM(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.h5W(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bEN(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bEN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atb(t[1]),$async$bEN)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hby(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hby(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEN,v)},
hbx(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.ly(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bEj(){var w=0,v=A.j(x.o),u,t
var $async$bEj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.H1(),$async$bEj)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hby(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEj,v)},
hzz(d,e,f,g){return A.bV(B.L,null,new C.fZD(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fZD:function fZD(d,e,f){this.a=d
this.b=e
this.c=f},
adT:function adT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eQX:function eQX(d,e){this.a=d
this.b=e},
eQY:function eQY(d,e){this.a=d
this.b=e},
eQZ:function eQZ(d,e){this.a=d
this.b=e},
eR_:function eR_(d,e){this.a=d
this.b=e},
eQW:function eQW(d){this.a=d},
at8:function at8(d,e,f){this.c=d
this.d=e
this.a=f},
bmr:function bmr(){var _=this
_.c=_.a=_.e=_.d=null},
eQA:function eQA(d,e){this.a=d
this.b=e},
eQB:function eQB(d){this.a=d},
eQC:function eQC(d){this.a=d},
atd:function atd(d){this.a=d},
aFP:function aFP(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eQE:function eQE(d){this.a=d},
eQD:function eQD(d){this.a=d},
hRS(d,e,f,g,h){return new C.Ou(h,g,d,e,f,null)},
aKL:function aKL(d,e){this.a=d
this.b=e},
Ou:function Ou(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFR:function aFR(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eRm:function eRm(){},
eRi:function eRi(d,e){this.a=d
this.b=e},
eRj:function eRj(d){this.a=d},
eR3:function eR3(d){this.a=d},
eR1:function eR1(d){this.a=d},
eR2:function eR2(d){this.a=d},
eRc:function eRc(d,e){this.a=d
this.b=e},
eR9:function eR9(d,e){this.a=d
this.b=e},
eRa:function eRa(d,e){this.a=d
this.b=e},
eRb:function eRb(d,e,f){this.a=d
this.b=e
this.c=f},
eR7:function eR7(d,e,f){this.a=d
this.b=e
this.c=f},
eR5:function eR5(d){this.a=d},
eR6:function eR6(d){this.a=d},
eR8:function eR8(d){this.a=d},
eRp:function eRp(d){this.a=d},
eRo:function eRo(d){this.a=d},
eRq:function eRq(d){this.a=d},
eRn:function eRn(d){this.a=d},
eR0:function eR0(d){this.a=d},
eR4:function eR4(d,e){this.a=d
this.b=e},
eRl:function eRl(d,e){this.a=d
this.b=e},
eRk:function eRk(d,e){this.a=d
this.b=e},
eRf:function eRf(d){this.a=d},
eRg:function eRg(d){this.a=d},
eRh:function eRh(d,e){this.a=d
this.b=e},
eRe:function eRe(d,e){this.a=d
this.b=e},
eRd:function eRd(d,e,f){this.a=d
this.b=e
this.c=f},
bz7:function bz7(){},
AP(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
agq(d,e,f){return C.i6L(d,e,f)},
i6L(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$agq=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$agq)
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
return A.i($async$agq,v)},
agp(d,e){return C.i6K(d,e)},
i6K(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agp=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agp)
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
return A.i($async$agp,v)},
i5v(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tc(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bBO(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bBO=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b3y(q),$async$bBO)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRj(q,!1),$async$bBO)
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
return A.i($async$bBO,v)},
hFv(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rg(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rg(p,J.k(u==null?"":u),1,o,q)},
h5W(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cCW(),w.$ti.k("M.E"),x.Q)
v=A.a7(w).k("Z<M.E>")
r=A.C(new A.Z(w,new C.cCX(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bk(J.k(t==null?"":t))
return new C.ly(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
iaN(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wa
case"female":case"f":return D.of
default:return D.yC}},
hve(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hfO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iaN(v==null?j:J.k(v))
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
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
iaP(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.NX
case"viewer":return D.kL
default:return D.ug}},
iaQ(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GR(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQ3(d,e){return B.a.i(e.toLowerCase())===C.GR(d,e)&&d.y!==D.kL},
ul(d,e){var w,v=d.y
if(v===D.kL)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GR(d,e))return!0
if(v===D.NX)return!0
v=d.e
return new A.N(v,A.hbE(),A.T(v).k("N<1,m>")).t(0,w)},
iaf(d){return J.dI(d,new C.fBh()).gL(0)},
h_m(d){var w=0,v=A.j(x.y),u,t
var $async$h_m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.B_(d),$async$h_m)
case 3:u=t.rb(f,new C.h_n(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_m,v)},
bCP(d,e){var w=0,v=A.j(x.H),u,t
var $async$bCP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.B_(d),$async$bCP)
case 3:t=g
if(J.rb(t,new C.fza(e))){w=1
break}if(C.iaf(t)>=2)throw A.W(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bCP,v)},
all(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bRg(),w.$ti.k("M.E"),x.P)
v=A.a7(w).k("Z<M.E>")
g=A.C(new A.Z(w,new C.bRh(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bRi(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bk(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.N(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.iaP(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cv)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gS(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kO(w,v,s,!r,t,g,q,p,o,n,m)},
hvo(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ar(v,0,8)},
Db(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Db=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RW(d),$async$Db)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Db)
case 4:t=f
w=5
return A.b(t.a6P(0),$async$Db)
case 5:w=6
return A.b(C.fpL(t,l),$async$Db)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hqQ(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oU(l,n),$async$Db)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hqQ(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oU(l,n),$async$Db)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Db,v)},
fpL(d,e){return C.i2W(d,e)},
i2W(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fpL=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AP(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aM(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gS(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AP(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aM(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h5W(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AP(a9)+"_"+n))
i=C.i5v(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b3y(h),$async$fpL)
case 17:g=b1
if(g!=null){i=i.Tc(g)
p=!0}case 16:J.ca(q,i)
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
case 8:J.S7(q,new C.fpM())
if(p&&J.ad(q)!==0)C.oU(a9,q)
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
return A.i($async$fpL,v)},
bDf(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bDf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RW(d),$async$bDf)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Db(r),$async$bDf)
case 4:t=p.aW(g)
case 5:if(!t.C()){w=6
break}s=t.gS(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDf,v)},
hqQ(d){var w,v,u,t
try{w=B.X.aM(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.flB(),v.$ti.k("M.E"),x.fA)
u=A.a7(v).k("Z<M.E>")
v=A.C(new A.Z(v,new C.flC(),u),u.k("M.E"))
B.d.aZ(v,new C.flD())
return v}catch(t){v=A.a([],x.D)
return v}},
oU(d,e){return C.ikr(d,e)},
ikr(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oU=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.RW(b2),$async$oU)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oU)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AP(a8)
p=A.aT(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aM(0,p,null)),new C.fS8(),a2).fJ(0)
a2=J.b6(b3,new C.fS9(),a2).c_(0,new C.fSa())
n=A.df(a2,a2.$ti.k("M.E"))
a2=o,a2=A.en(a2,a2.r,A.a7(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.AP(a8)
l=A.aT(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8S(l),$async$oU)
case 19:t=21
a5=C.AP(a8)
k=A.aT(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aM(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8S(a5==null?null:J.k(a5)),$async$oU)
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
return A.b(C.agp(r,"ngmy_worksheet_item_v3_"+C.AP(a8)+"_"+m),$async$oU)
case 29:w=30
return A.b(C.agp(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+m),$async$oU)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gS(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bBO(h),$async$oU)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.agq(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4,f),$async$oU)
case 40:g=i.Tc(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agp(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4),$async$oU)
case 41:g=i.Tc(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agp(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4),$async$oU)
case 42:case 34:a4=i.a
w=43
return A.b(C.agq(r,"ngmy_worksheet_item_v3_"+C.AP(a8)+"_"+a4,B.X.aq(g.ah(),null)),$async$oU)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.ca(q,i.a)
w=31
break
case 32:w=44
return A.b(C.agq(r,"ngmy_worksheets_index_v3_"+C.AP(a8),B.X.aq(q,null)),$async$oU)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eN(b3,new C.fSb(q))
a4=a3.$ti.k("cQ<1,a8<m,@>>")
a7=A.C(new A.cQ(a3,new C.fSc(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.agq(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aq(a0,null)),$async$oU)
case 45:w=46
return A.b(J.hEB(r),$async$oU)
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
return A.i($async$oU,v)},
LB(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Db(d),$async$LB)
case 3:t=g
s=J.cD(t)
r=s.bh(t,new C.h_l(e))
if(r===-1)s.c6(t,0,e)
else s.n(t,r,e)
u=C.oU(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LB,v)},
bD2(d,e){var w=0,v=A.j(x.H),u
var $async$bD2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Db(d),$async$bD2)
case 2:u=g
J.nG(u,new C.fBL(e))
w=3
return A.b(C.oU(d,u),$async$bD2)
case 3:return A.h(null,v)}})
return A.i($async$bD2,v)},
GT(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GT)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aM(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fEH(),j.$ti.k("M.E"),x.k)
s=A.a7(j).k("Z<M.E>")
r=A.C(new A.Z(j,new C.fEI(),s),s.k("M.E"))
B.d.aZ(r,new C.fEJ())
k=r}}catch(h){}w=4
return A.b(C.fml(d),$async$GT)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i3i(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<m,@>>")
s=A.C(new A.N(o,new C.fEK(),s),s.k("ak.E"))
n=B.X.aq(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.R8(d,o),$async$GT)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fEL(d),j),j.k("M.E"))
if(m.length!==0)C.aPO(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GT,v)},
fRV(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fRV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R8(d,e),$async$fRV)
case 3:t=J.dI(e,new C.fRW(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aPO(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRV,v)},
a38(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a38=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a38)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aM(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h_g(),m.$ti.k("M.E"),x.k)
t=A.a7(m).k("Z<M.E>")
s=A.C(new A.Z(m,new C.h_h(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qx(o,new C.h_i(e))
if(B.a.i(e.x).length===0&&C.ul(e,d)){m=B.a.i(d.toLowerCase())
p=e.aF3(e.y===D.kL?D.kL:D.ug,m)}else p=e
if(q===-1)J.pM(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.R8(d,o),$async$a38)
case 3:w=C.ul(p,d)?4:5
break
case 4:w=6
return A.b(C.aPN(C.GR(p,d),p),$async$a38)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a38,v)},
aQ_(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQ_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GT(d),$async$aQ_)
case 2:u=g
t=J.cD(u)
s=A.pV(t.eN(u,new C.fBs(e)))
t.bs(u,new C.fBt(e))
w=3
return A.b(C.R8(d,u),$async$aQ_)
case 3:w=s!=null&&C.aQ3(s,d)?4:5
break
case 4:w=6
return A.b(C.flF(e),$async$aQ_)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQ_,v)},
aie(d){var w=d.f,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.h_r(),v),v.k("M.E"))
return w},
h9c(d,e){var w,v=d.f,u=A.pV(new A.Z(v,new C.fAX(e),A.T(v).k("Z<1>")))
v=C.aie(d)
w=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fAY(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fAZ())
return v},
iaT(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hzD(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bh(C.h9c(d,u),new C.fZO(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
icq(d,e){var w
if(e==null||e.length===0)return 1
w=C.h9c(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fFx(),A.T(w).k("N<1,G>")).f4(0,B.xA)+1},
ikk(d){var w,v=C.aie(d)
if(v.length===0)return null
w=new A.Z(v,new C.fRP(),A.T(v).k("Z<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
iaO(d){return A.H(["id",d.a,"name",d.b,"gender",C.hve(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
icl(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yC?n:q.c
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
d=q.aEZ(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cMF(a1,w,a3.d,a2.y,s,a0,v)},
B_(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$B_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$B_)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aM(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fEE(),p.$ti.k("M.E"),x.k)
s=A.a7(p).k("Z<M.E>")
p=A.C(new A.Z(p,new C.fEF(),s),s.k("M.E"))
B.d.aZ(p,new C.fEG())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$B_,v)},
ai_(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ai_=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.ug:D.kL
a7=C.GR(b2,b3)
w=2
return A.b(C.B_(b1),$async$ai_)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bh(a8,new C.fRK(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bCP(b1,b2),$async$ai_)
case 5:case 4:if(b0===-1){u=b2.aF3(a6,a7)
a9.c6(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
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
i=i!==D.yC?i:l.c
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
s.n(0,m,l.aEZ(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bd<2>")
s=A.C(new A.bd(s,k),k.k("M.E"))
k=a5?D.ug:D.kL
u=t.cMH(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.R8(b1,a8),$async$ai_)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aPN(B.a.i(b3.toLowerCase()),u),$async$ai_)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ai_,v)},
hre(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a8().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<m,@>>"),k=A.C(new A.N(m,C.hyH(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a8().ae(),"updatedAt",o],r,x.K),"createdAt",s.a8().ae(),"updatedAt",o],r,x.z)},
hrf(d,e){var w=new A.V(Date.now(),0,!1).a8().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<m,@>>")
u=A.C(new A.N(u,C.hyH(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a8().ae(),"updatedAt",w],x.N,x.z)},
i0O(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.all(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hbE(),A.T(j).k("N<1,m>")).c_(0,new C.fm8())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.ug
else s=B.d.t(t,u)?D.NX:D.kL
return w.aF3(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.all(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.fm9(),h.$ti.k("M.E"),x.P)
p=A.a7(h).k("Z<M.E>")
o=A.C(new A.Z(h,new C.fma(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fmb(),x.N).c_(0,new C.fmc())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ug
else s=B.d.t(t,u)?D.NX:D.kL
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bk(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kO(h,r,p,!m,t,o,l,j,v,s,B.ca)},
fml(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fml=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fmp()
h=x.N
g=x.z
w=7
return A.b(A.iW(A.a([A.lD("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lD("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lD("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fml)
case 7:q=a4
p=J.r(q,0)
o=J.r(q,1)
n=J.r(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h9(l,o)
J.h9(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.r(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a7(l).k("bd<2>")
h=A.cF(new A.bd(l,h),new C.fmm(a0),h.k("M.E"),x.k)
l=A.a7(h).k("Z<M.E>")
l=A.C(new A.Z(h,new C.fmn(),l),l.k("M.E"))
B.d.aZ(l,new C.fmo())
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
return A.i($async$fml,v)},
i3i(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dG(e,new C.fqs(),v).c_(0,new C.fqt())
t=A.df(u,u.$ti.k("M.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GR(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kL){m=q.e
m=!new A.N(m,A.hbE(),A.T(m).k("N<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gag(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.icl(l,v)
o=C.GR(k,w)
p=v.d
s.n(0,u,o===w?k.bdy(p,D.ug):k.bdy(p,v.y))}j=s.$ti.k("bd<2>")
j=A.C(new A.bd(s,j),j.k("M.E"))
B.d.aZ(j,new C.fqu())
return j},
R8(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$R8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$R8)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fth(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aq(s,null)),$async$R8)
case 3:return A.h(null,v)}})
return A.i($async$R8,v)},
aPN(d,e){return C.i8z(d,e)},
i8z(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aPN=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m7("family_trees",A.a([C.hre(e,d)],p),null,B.cG),$async$aPN)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m7("family_trees",A.a([C.hrf(e,d)],p),null,B.cG),$async$aPN)
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
return A.i($async$aPN,v)},
aPO(d,e){return C.i8A(d,e)},
i8A(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aPO=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fyu(d),n),m)
r=l
w=7
return A.b(A.m7("family_trees",r,null,B.cG),$async$aPO)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fyv(d),n),m)
p=k
w=8
return A.b(A.m7("family_trees",p,null,B.cG),$async$aPO)
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
return A.i($async$aPO,v)},
flF(d){return C.i06(d)},
i06(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$flF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Rw("family_trees",A.H(["id",d],x.N,x.z),null,B.cG),$async$flF)
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
return A.i($async$flF,v)},
rg:function rg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ly:function ly(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCZ:function cCZ(){},
cCY:function cCY(){},
cCW:function cCW(){},
cCX:function cCX(){},
HZ:function HZ(d,e){this.a=d
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
alk:function alk(d,e){this.a=d
this.b=e},
fBh:function fBh(){},
h_n:function h_n(d){this.a=d},
fza:function fza(d){this.a=d},
kO:function kO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bRk:function bRk(){},
bRj:function bRj(){},
bRg:function bRg(){},
bRh:function bRh(){},
bRi:function bRi(){},
fpM:function fpM(){},
flB:function flB(){},
flC:function flC(){},
flD:function flD(){},
fS8:function fS8(){},
fS9:function fS9(){},
fSa:function fSa(){},
fSb:function fSb(d){this.a=d},
fSc:function fSc(){},
h_l:function h_l(d){this.a=d},
fBL:function fBL(d){this.a=d},
fEH:function fEH(){},
fEI:function fEI(){},
fEJ:function fEJ(){},
fEK:function fEK(){},
fEL:function fEL(d){this.a=d},
fRW:function fRW(d){this.a=d},
h_g:function h_g(){},
h_h:function h_h(){},
h_i:function h_i(d){this.a=d},
fBs:function fBs(d){this.a=d},
fBt:function fBt(d){this.a=d},
h_r:function h_r(){},
fAX:function fAX(d){this.a=d},
fAY:function fAY(d,e){this.a=d
this.b=e},
fAZ:function fAZ(){},
fZO:function fZO(d){this.a=d},
fFx:function fFx(){},
fRP:function fRP(){},
fEE:function fEE(){},
fEF:function fEF(){},
fEG:function fEG(){},
fRK:function fRK(d){this.a=d},
fm8:function fm8(){},
fm9:function fm9(){},
fma:function fma(){},
fmb:function fmb(){},
fmc:function fmc(){},
fmp:function fmp(){},
fmq:function fmq(d){this.a=d},
fmm:function fmm(d){this.a=d},
fmn:function fmn(){},
fmo:function fmo(){},
fqs:function fqs(){},
fqt:function fqt(){},
fqu:function fqu(){},
fth:function fth(){},
fyu:function fyu(d){this.a=d},
fyv:function fyv(d){this.a=d},
cD_:function cD_(d,e){this.a=d
this.b=e},
cD0:function cD0(d,e){this.a=d
this.b=e},
aHW:function aHW(d,e,f){this.a=d
this.b=e
this.c=f},
b9W:function b9W(){this.b=this.a=0},
b9V:function b9V(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bxn:function bxn(){},
x2(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aX(B.o.u(w.gno()),2,"0")+":"+B.a.aX(B.o.u(w.gGv()),2,"0")},
hRP(){var w,v=$.oh(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"WS"+B.d.hm(u)},
at9(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$at9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at9)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$at9)
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
return A.i($async$at9,v)},
ata(d){return C.hRQ(d)},
hRQ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ata=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$ata)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,B.cG,null),$async$ata)
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
return A.i($async$ata,v)},
atc(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$atc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atc)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hRP()
w=4
return A.b(C.at9(),$async$atc)
case 4:r=h
q=B.a.i(e)
p=B.dO.aO(t)
J.aJ(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aO(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=5
return A.b(C.ata(r),$async$atc)
case 5:u=new A.a0C("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atc,v)},
atb(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$atb)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.at9(),$async$atb)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
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
try{s=B.ch.cB(0,B.cF.aO(t))}catch(h){r=A.ab(h)
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
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
p.n(q,i,m)}w=5
return A.b(C.ata(q),$async$atb)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atb,v)},
hlH(){var w=new A.V(Date.now(),0,!1).a8()
return"wst_"+(1000*w.a+w.b)+"_"+B.cK.ap(999999)},
hRR(d){var w,v,u,t,s,r,q
try{w=A.agQ(d)
if(w==null)return d
v=w
if(J.LG(v)>960||J.LF(v)>960){s=v
r=J.LG(v)>=J.LF(v)?960:null
v=A.agP(s,J.LF(v)>J.LG(v)?960:null,B.Ph,r)}s=v
u=A.amJ(82).Tz(s,B.zf)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cn(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
clK(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$clK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hRR(e)
$.clG.n(0,s,t)
u=C.bEQ(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clK,v)},
b3y(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b3y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gak(J.lG(l,",")):l
q=B.cF.aO(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hlH()
w=7
return A.b(C.clK(p,q),$async$b3y)
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
return A.i($async$b3y,v)},
clH(d){var w=0,v=A.j(x.T),u,t,s
var $async$clH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.clJ(s),$async$clH)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clH,v)},
a8S(d){var w=0,v=A.j(x.H),u,t
var $async$a8S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hyz(d)
if(t==null){w=1
break}$.clG.W(0,t)
w=3
return A.b(C.bEP(t),$async$a8S)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8S,v)},
bEQ(d,e){return C.iiw(d,e)},
iiw(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bEQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aOI
w=7
return A.b(n==null?$.aOI=N.h88():n,$async$bEQ)
case 7:r=g
q=new Uint8Array(A.cn(e))
p=J.mX(r,"thumbs","readwrite")
B.j1.mr(J.mW(p,"thumbs"),q,l)
w=8
return A.b(J.pL(p),$async$bEQ)
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
return A.i($async$bEQ,v)},
bEP(d){return C.iiu(d)},
iiu(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEP=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aOI
w=7
return A.b(o==null?$.aOI=N.h88():o,$async$bEP)
case 7:r=f
q=J.mX(r,"thumbs","readwrite")
B.j1.G2(J.mW(q,"thumbs"),m)
w=8
return A.b(J.pL(q),$async$bEP)
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
return A.i($async$bEP,v)}},D,Av,Aw,A_,Ax,Ay
J=c[1]
A=c[0]
B=c[2]
N=c[61]
P=c[256]
A0=c[161]
S=c[60]
Aa=c[231]
K=c[211]
H=c[35]
E=c[221]
T=c[121]
Ab=c[234]
Q=c[106]
Ac=c[134]
U=c[227]
Ad=c[116]
Ae=c[197]
A1=c[118]
Af=c[230]
Ag=c[43]
R=c[229]
M=c[91]
A2=c[87]
A3=c[167]
Ah=c[129]
A4=c[170]
A5=c[250]
A6=c[198]
Ai=c[189]
Aj=c[201]
A7=c[196]
Ak=c[253]
Al=c[73]
A8=c[255]
Am=c[79]
G=c[254]
An=c[133]
Ao=c[258]
Ap=c[120]
A9=c[215]
Aq=c[34]
V=c[119]
O=c[191]
Ar=c[202]
As=c[125]
W=c[257]
At=c[153]
X=c[243]
Y=c[42]
F=c[97]
Au=c[33]
L=c[105]
I=c[137]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[249]
Av=c[78]
Aw=c[209]
A_=c[252]
Ax=c[251]
Ay=c[64]
C.aoV.prototype={}
C.aZR.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bhP(),f=h.x!=null&&h.zf(i).length===0
if(h.x!=null)w=f?B.b1:B.bz
else w=h.gUc()?B.bz:B.dZ
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.blX,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f3f,B.f,i,i,new A.o(B.b1.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h4,i,i,i),B.W,D.fym,B.au,A.d(C.x2(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fu2,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b4v,i,i,i,i,B.a_w,i,i,i)
q=A.n(16)
p=A.K(B.aN,B.r,1)
o=A.K(B.b1.j(0.28),B.r,1)
n=A.hac(h.d)
o=A.p(B.A,C.aZQ(A.fHS(h.e,n),30),B.f,i,i,new A.o(B.m3,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fp8,B.K,i,i)
m=A.n(14)
l=A.K(B.aN,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bF,D.fyF,B.ae,A.p(i,A.x(A.a([D.fOF,B.bF,A.d(A.B1(h.c),i,i,i,i,i,i,D.fjS,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.ff,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.akn,i,i,i)
p=A.n(16)
m=A.K(B.aN,B.r,1)
l=j.aRQ("Original due",C.x2(h.r,!1))
n=j.aRQ("Current due",C.x2(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.P,n,B.W,A.p(i,A.d(h.gaLX(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BL,i,i,1/0),B.W,j.chN(),B.P,j.c51(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.aN,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fzD,B.au,A.d(q,i,i,i,i,i,i,D.fom,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaGI()){q=A.n(14)
o=A.K(B.cq,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fQ_,B.P,A.bx(A.n(12),A.ec(new A.a5(1/0,88,A.b4(i,i,i,new A.Wk(h.ax,B.N,D.f7v,!0,3.5,i),B.aw),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Gi,i,i,i)],s))}p.push(B.aA)
p.push(D.fHV)
return A.p(i,A.x(A.a([r,new A.D(B.a_k,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.O,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRQ(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aae,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fkV,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
chN(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aa_(B.dZ,u,"Not paid yet")
w=t.zf(null).length
v=w===0?B.b1:B.bz
return this.aa_(v,u,C.x2(t.x,!0))},
c51(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aa_(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aa_(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aae,u,u,u)
v=A.T(d).k("N<1,h3>")
v=A.C(new A.N(d,new C.c6y(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bG,v,B.bq,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aa_(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aae,w,w,w),1),new A.ds(1,B.cp,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dV,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bc4.prototype={
a3(d,e){new A.Wk(this.b,B.N,e,!0,3.5,null).a3(d,e)},
av(d){return d.b!==this.b}}
C.ap6.prototype={
R(){return new C.aDP(A.a([],x.bp))},
ge1(){return this.c}}
C.aDP.prototype={
Z(){this.a2()
this.J0()},
J0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2p(t.a.c),$async$J0)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dMA(t,s))
case 1:return A.h(u,v)}})
return A.i($async$J0,v)},
aTN(d,e){var w,v=null,u=this.a.d.a,t=u?B.N:B.aP,s=A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bt:B.bm).j(0.22)
w=A.n(10)
return A.br(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bt:B.bm).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.n(10),D.b29),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aTM(d){return this.aTN(d,null)},
PN(d){return this.clp(d)},
clp(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PN=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HB:B.eK
w=7
return A.b(new A.hW().Cj(72,900,900,n),$async$PN)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fl(),$async$PN)
case 8:p=f
n=B.cJ.gct().aO(p)
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
return A.i($async$PN,v)},
b1I(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.N:B.aP,o=A.n(10),n=A.K((q?B.bt:B.bm).j(0.18),B.r,1)
if(d)q=B.cQ
else q=s.a.d.a?B.bt:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cQ
else u=s.a.d.a?B.bt:B.bm
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fw(r,r,r,r,r,r,r,r,r,r,r,B.cQ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ad,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cx,s.a.d.a?B.bt:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jy,D.byF,r,r,r)},
Dk(d){return this.bBG(d)},
bBF(){return this.Dk(null)},
bBG(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dk=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.ba(a4,B.b4,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jl(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.au(new A.ba(a4,B.b4,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b4,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c6(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c6(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hac(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wK?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i1(B.w.j(0.55),!0,"Dismiss",a4,new C.dMj(),new C.dMk(a2,t,a5,r,new C.dMl(a2,t),o,n,j),B.eO,!0,x.y),$async$Dk)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d4(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fe_)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.fcF)
w=1
break}a1=A.fHS(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wK?"male":"female"
w=7
return A.b(A.aid(a3,A.hio(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dk)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wK?"male":"female"
a5.e=a1
a3=a5.ax
B.d.aa(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c6(a3.gck(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c6(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cOX(a2.a)
w=8
return A.b(A.aid(t.a.c,a5),$async$Dk)
case 8:case 5:w=9
return A.b(t.J0(),$async$Dk)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dk,v)},
aUq(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cQ.j(0.14)
else w=this.a.d.a?B.N:B.aP
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cQ
else s=(this.a.d.a?B.bt:B.bm).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.aZQ(d,18)
if(g)q=B.cQ
else q=this.a.d.a?B.aP:B.av
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Sx(d){return this.cDb(d)},
cDb(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Sx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i1(B.w.j(0.55),!0,"Dismiss",s,new C.dMD(),new C.dME(t,d),B.hu,!0,x.y),$async$Sx)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aid(t.a.c,d),$async$Sx)
case 7:w=8
return A.b(t.J0(),$async$Sx)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Sx,v)},
PM(d,e){return this.bMw(0,e)},
bMw(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.li(s,"Cancel","Delete",e.b+" \xb7 "+A.B1(e.c)+" will be removed from this device.","Delete this debt?"),$async$PM)
case 3:if(!g){w=1
break}w=4
return A.b(C.fBz(t.a.c,e.a),$async$PM)
case 4:w=5
return A.b(t.J0(),$async$PM)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
afH(d){return this.cfd(d)},
cfd(d){var w=0,v=A.j(x.H),u=this,t
var $async$afH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dMx(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afH)
case 2:return A.h(null,v)}})
return A.i($async$afH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.en1
w=J.dI(m.d,new C.dMF())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dMG())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cI(v,0,new C.dMH())
w=A.n(18)
s=m.a.d.a
r=s?D.cxE:D.aB7
q=A.K(s?B.cQ.j(0.35):B.cQ.j(0.18),B.r,1)
s=A.p(l,D.bZz,B.f,l,l,new A.o(B.cQ.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a2,!0,A.n(12),A.aO(!1,A.n(12),!0,D.emn,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dMI(m),l,l,l,l,l,l,l),B.f,B.cQ,0,l,l,l,l,l,B.ai)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.czm("Open",""+v.length),1)
n=v.length===0?"$0.00":A.B1(t)
r=A.a([A.p(l,A.x(A.a([s,B.ae,A.B(A.a([o,B.ad,A.E(m.b7P(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.akk,l,l,l),B.aA],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.e4:B.c
q=A.n(18)
o=A.K((w?B.bt:B.bm).j(0.12),B.r,1)
n=A.p(l,D.bUn,B.f,l,l,new A.o(B.cQ.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.ae,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bt:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bBd,l,l,1/0))}else{w=m.gckG()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bCU,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bt:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b7P(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bt:B.bm).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bt:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cQ
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eB,u,u,u)},
czm(d,e){return this.b7P(!1,d,e)},
ckH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zf(j).length,h=d.bh2()
if(d.x!=null){w=d.zf(j).length
v=w===0?B.cQ:B.bz}else if(d.gUc())v=B.bz
else{if(h)w=B.cQ
else w=k.a.d.a?B.bt:B.bm
v=w}if(d.x!=null){w=d.zf(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.x2(u,!1)}else{u.toString
t="Paid "+C.x2(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.x2(w,!1)+" \xb7 "+i+" missed":"Due "+C.x2(w,!1)}w=k.a.d.a?B.e4:B.c
u=A.n(18)
if(d.gUc()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bt:B.bm).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bo:B.m3
o=A.K(d.gUc()&&d.x==null?B.bz.j(0.45):B.cQ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hac(d.d)
o=A.p(B.A,A.db(C.aZQ(A.fHS(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.ds(1,B.cp,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaGI())B.d.v(n,A.a([B.eg,A.X(B.Oo,B.cQ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.B1(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aI(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A5.ak7,A.B(A.a([o,B.bb,p,B.ad,A.x(A.a([n,B.bF,A.X(B.eE,(k.a.d.a?B.bt:B.bm).j(0.5),j,j,j,18)],m),B.dI,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dMz(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d0,j,j,j,j)}}
C.uC.prototype={}
C.al8.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bj
u=v?B.E:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.X(B.cx,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a3))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iE,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.axk,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Gz,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eO(m,A.B(l,B.m,a0,B.e,B.O,0,a0,a0),B.f,B.e3)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bxR,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.f8j)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.w0,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lG,A.x(a2,B.m,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hk,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bz7,a0,a0,a0,a0)}}
C.aVC.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bj?B.bj:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cD,q,B.U,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.u8,n,q))
return new A.D(B.d0,A.x(o,B.m,q,B.e,B.O,0,B.p),q)}}
C.Ta.prototype={
R(){return new C.bfH()}}
C.bfH.prototype={
gc_X(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.emX,D.en2],l)
for(w=0;w<8;++w){v=D.a3J[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Hn:B.Cr
q=t===s
r=A.X(r,q?B.eG:B.bU,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bn,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ad,new A.bA(1,B.bd,new A.y(v.c,n,B.Al,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bH(p,p,p,p),new A.bh(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eI,A.x(A.a([new A.D(B.mJ,new A.cd(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.BE(!0,new C.al8(v,q.d,q.e,new C.dcp(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dcq(o,v),n,n,n,n,n,n,!1,B.a3))}k.push(new A.D(D.bzs,A.bI(D.fVw,n,new C.dcr(o,d),A.bo(B.b6,n,n,n,n,B.oG,n,n,new A.b8(A.n(16),B.a0),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aZ(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bDM,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.nq.prototype={
ah(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a8().ae()],x.N,x.z)},
bdK(d,e,f){return new C.nq(this.a,e,d,f)}}
C.HY.prototype={
wy(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HY(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aES(d){var w=null
return this.wy(w,w,w,w,w,d,w,w,w,w,w,w)},
cKD(d){var w=null
return this.wy(w,w,w,w,d,w,w,w,w,w,w,w)},
bdI(d,e,f){var w=null
return this.wy(d,w,w,w,w,w,w,w,e,w,f,w)},
cLh(d){var w=null
return this.wy(w,w,w,w,w,w,d,w,w,w,w,w)},
cLq(d){var w=null
return this.wy(w,w,w,w,w,w,w,w,w,d,w,w)},
cKB(d){var w=null
return this.wy(w,w,w,d,w,w,w,w,w,w,w,w)},
cLs(d){var w=null
return this.wy(w,w,w,w,w,w,w,w,w,w,w,d)},
cKy(d){var w=null
return this.wy(w,w,d,w,w,w,w,w,w,w,w,w)},
cKt(d){var w=null
return this.wy(w,d,w,w,w,w,w,w,w,w,w,w)},
FV(d){var w=null
return this.wy(w,w,w,w,w,w,w,d,w,w,w,w)},
cLA(d,e,f,g,h,i,j,k,l,m,n){return this.wy(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cIa(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bQ1(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Dg.gew(D.Dg))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a5q)
q=l.$2("frame",D.a4L)
l=l.$2("texture",D.a4H)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cLA(p,u,t,q,r,A.r5(d.h(0,"ribbon"))?A.Gt(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.ZM.prototype={
R(){return new C.aAP(A.a([],x.I),D.NW)},
ge1(){return this.c}}
C.aAP.prototype={
Z(){var w,v=this
v.a2()
v.f=A.zV(0,1)
w=$.ax()
v.z=new A.au(B.at,w)
v.Q=new A.au(B.at,w)
v.la()
w=v.a
C.bDc(w.c,w.d).bK(new C.dd5(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.ax()
u.T$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.T$=w
u.P$=0
v.a1()},
la(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$la=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lb(s.c,s.d),$async$la)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dcU(t,r))
t.awA()
case 1:return A.h(u,v)}})
return A.i($async$la,v)},
gata(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awA(){var w,v,u=this.gata(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saY(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saY(0,w==null?"":w)},
cdE(d){this.m(new C.dcR(this,d))
this.awA()},
NJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nq(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aRG(r.c,r.d,s),$async$NJ)
case 3:w=4
return A.b(t.la(),$async$NJ)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.qx(t.d,new C.dcs(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dct(t,p))
t.awA()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bg(p+1,B.ct,B.kI),$async$NJ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NJ,v)},
AX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gata()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aRG(o.c,o.d,new C.nq(s,r,q,new A.V(p,0,!1))),$async$AX)
case 3:w=4
return A.b(t.la(),$async$AX)
case 4:if(t.c==null){w=1
break}t.m(new C.dcV(t))
case 1:return A.h(u,v)}})
return A.i($async$AX,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gata()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dcB(r),s,null,!0,!0,x.y),$async$On)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bCZ(s.c,s.d,r.a),$async$On)
case 4:t.m(new C.dcC(t))
w=5
return A.b(t.la(),$async$On)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Uf(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$On,v)},
yD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$yD)
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
return A.b(C.Rp(s,r.r,o,p,q),$async$yD)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hzb(s,r.x,r.r),$async$yD)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lb(s.c,s.d),$async$yD)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nq(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ba(r.c,r.d,l),$async$yD)
case 11:w=12
return A.b(t.la(),$async$yD)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yD,v)},
a14(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a14=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$a14)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyB(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.zo,new C.dcS(t),new C.dcT())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mK("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gS(o)
p.push(new H.mK(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hbQ(o,new H.rA(s,r,"",p,new H.uS(q.d,null,null,null,null,"","","")),null),$async$a14)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a14,v)},
O6(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$O6)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.afj,null,new C.dcx(t),s,!0,!0,!0,L.a8u,!1,!1,x.N),$async$O6)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cKD(r)
t.m(new C.dcy(t,q))
s=t.a
w=7
return A.b(C.S_(s.c,s.d,q),$async$O6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O6,v)},
Xy(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.afj,null,new C.dcD(t),r,!0,!0,!0,L.a8u,!1,!1,x.e),$async$Xy)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dcE(t,s))
r=t.a
w=4
return A.b(C.S_(r.c,r.d,s),$async$Xy)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bg(0,B.dU,B.no)
case 1:return A.h(u,v)}})
return A.i($async$Xy,v)},
bS4(d){var w=d.bU(),v=B.a.aX(B.o.u(w.gcg()),2,"0"),u=B.a.aX(B.o.u(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyB(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c_a()
if(r.e)w=D.ae4
else if(J.ct(r.d)){w=r.y
v=r.gyB(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fje,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.aln,new C.Z3(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kE.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.f32,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dH.j(0.45),B.I,18)],x.V),E.wA,B.n),q,q,q,q,B.NF,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcHd(),q,q,q,q,q,q,!1,B.a3))
w.push(B.W)
w.push(A.hs(D.bQx,D.fUY,r.gaNG(),q))
B.d.v(u,w)}w=A.as(A.ch(A.x(u,B.m,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.eu,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kE.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.AT
u=A.x(A.a([new A.D(D.bAu,w,q),A.E(A.Jj(v,new C.dd3(r),J.ad(r.d)+1,q,r.gcdD(),u,B.aM),1),r.bEz()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c5(q,D.Yk,new A.an(B.a_,q,B.b3,B.t,A.a([D.aOz,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
c_a(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Kh(B.e5,"AI",h.gbCs(),!0))
if(h.a.f)f.push(new C.Kh(B.mb,"Cover",h.gbN5(),!1))
if(h.a.f)f.push(new C.Kh(B.wv,"Header",h.gbI5(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Kh(B.uz,"Print",h.gcmJ(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hy:B.iY
t=v?"Save":"Edit"
f.push(new C.Kh(u,t,v?h.gct_():new C.dcO(h),!1))}if(h.a.f)f.push(new C.Kh(B.hQ,"Add page",h.gaNG(),!1))
v=C.hvd(h.y.Q)
u=h.gyB(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dCd
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kc.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kE,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bH(i,i,i,i),new A.bh(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kE.j(0.85)
p.push(new A.bA(1,B.bd,A.aA(B.c5,A.x(A.a([k,B.bF,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a3),g))}return new C.al8(v,u,t+" \xb7 "+s+" "+r,new C.dcP(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
zZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$zZ)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=H.a2E(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dcu(t,p),s,null,!0,!0,x.N),$async$zZ)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yD(),$async$zZ)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DX(),$async$zZ)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fx("Swahili (Kiswahili)",!0),$async$zZ)
case 18:w=16
break
case 17:w=19
return A.b(t.cDN(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zZ)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zZ,v)},
Zs(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kc.j(0.3),B.r,1),r=x.p
return new A.D(B.cu,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wA,B.a6),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.Kb,w,w,w),A.d(g,w,w,w,w,w,w,B.Am,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dcQ(d,h),w,w,w,w,w,w,w),w)},
DX(){return this.bRz()},
bRz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DX=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dcH(r),a7,null,!0,!0,x.ei),$async$DX)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eD("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.ck(null,null,!1,null,new C.dcI(o),a7,null,!0,!0,x.H).fp(new C.dcJ(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ca(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zo[a1]
J.ca(j,i.a)}w=8
return A.b(C.ahn(a0,a7,new C.dcK(o),d,l,e,j),$async$DX)
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
l.si6($.ax())
J.aS7(l,0)
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
a7=j.bdK(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ba(j.c,j.d,l),$async$DX)
case 11:w=12
return A.b(r.la(),$async$DX)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zo[a1].a)
a5=l.cIa(j,12,a7)
l=r.a
w=15
return A.b(C.S_(l.c,l.d,a5),$async$DX)
case 15:if(r.c!=null)r.m(new C.dcL(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bg(0,B.dU,B.no)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cxb("Undo",new C.dcM(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DX,v)},
Fx(d,e){return this.cDO(d,e)},
cDN(d){return this.Fx(d,!1)},
cDO(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fx=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eD("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.ck(null,null,!1,null,new C.dcX(a0),k,null,!0,!0,x.H).fp(new C.dcY(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ca(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2R(m,new C.dcZ(a0)),$async$Fx)
case 10:w=8
break
case 9:w=11
return A.b(C.bEG(new C.dd_(a0),m,a2),$async$Fx)
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
o.si6($.ax())
J.aS7(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bdK(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ba(k.c,k.d,o),$async$Fx)
case 12:w=13
return A.b(r.la(),$async$Fx)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cxb("Undo",new C.dd0(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fx,v)},
bEz(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dcv(v):u
r=A.aH(u,u,u,u,A.X(D.bMc,s?D.kE:B.aX,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hs(A.X(B.wf,B.FW,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.FW,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbMG(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kE.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dcw(v):u
return A.bm(!0,new A.D(D.bAi,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kE:B.aX,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZQ.prototype={
R(){return new C.bg5(new A.au(B.at,$.ax()))}}
C.bg5.prototype={
ga2d(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
gbQc(){var w,v=this.ga2d()
A:{if("cover"===v){w=D.d3U
break A}if("book"===v){w=D.d_h
break A}w=D.duH
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.kc.j(0.5),n=x.p,m=A.B(A.a([D.dCe,B.as,D.bFT,A.aH(q,q,q,q,B.lf,q,q,q,new C.deQ(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.iU(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.deR(r),r.ga2d()==="page",q,q,q,q))
if(r.a.d)l.push(A.iU(q,q,q,D.fPv,q,new C.deS(r),r.ga2d()==="book",q,q,q,q))
l.push(A.iU(q,q,q,D.fCk,q,new C.deT(r),r.ga2d()==="cover",q,q,q,q))
l=A.bX(B.bG,l,B.bq,q,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.Y,!1,q,!0,B.t,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b5(4,A.n(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kw,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbQc(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mY(q,B.c.j(0.08),new A.y(s,q,B.K8,q,q,q,q,q,q,q,q,q),B.hb,new C.deU(r,s),q,q,q,q))}return A.eT(q,E.Bp,A.ch(A.x(A.a([m,B.W,D.fSO,B.am,l,B.ae,k,B.P,A.bX(B.bG,w,B.bq,q,6,6),B.aA,A.dl(D.bQu,D.fTB,new C.deV(r,d),A.bo(B.b6,q,q,q,q,B.oG,q,q,new A.b8(A.n(16),B.a0),q,q,q)),B.au,D.fNK],n),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.fl,q,q,B.ah),q,q,q,D.al4,B.d8,q,new A.b8(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZO.prototype={
R(){return new C.aAS(A.a([],x.gA))},
ge1(){return this.c}}
C.af4.prototype={}
C.aAS.prototype={
Z(){this.a2()
this.la()},
la(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$la=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rs(p.c,p.d),$async$la)
case 3:o=e
n=A.a([],x.gA)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gS(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bDc(r.c,q),$async$la)
case 6:j=e
i=J
w=7
return A.b(C.Lb(t.a.c,q),$async$la)
case 7:m.push(new l.af4(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.ddk(t,n))
case 1:return A.h(u,v)}})
return A.i($async$la,v)},
b95(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qx(d,e){return this.cfb(0,e)},
cfb(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cc(A.eh(new C.ddj(u,e),!0,null,x.y)),$async$Qx)
case 2:t=g
w=3
return A.b(u.la(),$async$Qx)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aSb)
return A.h(null,v)}})
return A.i($async$Qx,v)},
FA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aS7)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agI(s.c,s.d),$async$FA)
case 5:q=e
w=6
return A.b(t.la(),$async$FA)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qx(0,B.d.fY(t.d,new C.ddo(q))),$async$FA)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Rp(p,s.f,r,n,o),$async$FA)
case 10:m=e
w=11
return A.b(t.la(),$async$FA)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aSb)
case 1:return A.h(u,v)}})
return A.i($async$FA,v)},
Q_(d,e){return this.cqH(0,e)},
cqH(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.ddn(t,e),s,null,!0,!0,x.y),$async$Q_)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a32(s.c,s.d,e.a),$async$Q_)
case 4:w=5
return A.b(t.la(),$async$Q_)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q_,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bEC(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kc.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fH(0.7142857142857143,A.p(n,A.x(A.a([D.dCf,B.ae,D.elZ,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kE.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcH9(),n,n,n,n,n,n,!1,B.a3))}w=A.n(22)
v=A.K(E.kc.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.bYm,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.kc.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ddp(d),n,n,n,n,n,n,!1,B.a3)
r=A.n(14)
q=B.w.j(0.3)
p=A.K(E.kc.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bb,D.bGf,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fie,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h4,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c3i,B.n),n,n,n,Ax.Np,D.byk,n,n,n)
if(o.e)k=D.ae4
else k=k.length===0?D.b9G:A.cv(new C.ddq(k))
return A.c5(n,D.Yk,new A.an(B.a_,n,B.b3,B.t,A.a([D.aOz,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bEC(d){var w,v,u=this,t=null,s=u.b95(d),r=d.c,q=x.p,p=A.a([A.bT(0,A.eO(B.A,new A.a5(300,420,new C.Z3(d.b,s,r,t),t),B.f,B.dz),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.p(t,D.bXG,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aX,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddh(u,d),t,t,t,t,t,t,!1,B.a3),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.fhP,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a_,t,B.ab,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kE.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddi(u,d),t,t,t,t,t,t,!1,B.a3)}}
C.Kh.prototype={}
C.Z3.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.zo,new C.cLN(m),new C.cLO()),j=m.c,i=D.Dg.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mi:B.b9
v=new C.cLP(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.eiH,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bdh(j.x,h,l),B.aw),0,0,0),A.ap(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bh(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.alo,8,0.85,2.2),v.$4(D.bDc,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.alo,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.D(D.bD8,A.b4(l,l,l,new C.bd8(h,l),B.aw),l),0,0,0))
r=A.X(D.aA6[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.axk,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bT(0,new A.D(D.bDD,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aHR(l),D.f7o),l,l,l,46,0,l))
return A.p(l,A.bx(D.acG,new A.an(B.a_,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.acG,i,new A.a9(B.ay,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdh.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e4()
f.cY(11)
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
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.af()
l=f.af()
k=f.af()
$.S()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=t.j(0.25+f.af()*0.5).gp(0)
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
j.push(new A.aY(v,t))
k=i-0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bt())
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbv().a.snapshot()
o.drawPath((h.e=new A.cf(k)).a,r)
r.delete()}break
default:$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.af()
m=f.af()
l=f.af()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.I()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.af()
m=f.af()
l=f.af()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bd8.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.a9
k.c=2.4
k.d=B.bB
for(w=e.a,v=e.b,v=[D.eYC,new A.cy([w,0,-1,1]),new A.cy([0,v,1,-1]),new A.cy([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(l,B.ag,null,null,s)
s.push(new A.aY(r+p*34,q))
s.push(new A.aq(r,q))
s.push(new A.aq(r,q+o*34))
m=k.G()
s=n.gbv().a.snapshot()
w.drawPath((n.e=new A.cf(s)).a,m)
m.delete()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uD.prototype={}
C.Zm.prototype={
R(){return new C.bdf()}}
C.bdf.prototype={
gof(){var w=this.d
return w===$?this.d=this.a.c:w},
gyB(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b4,B.aO),$.ax())}return v},
gaC0(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b4,B.aO),$.ax())}return v},
garJ(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b4,B.aO),$.ax())}return v},
q(){var w=this,v=w.gyB(0),u=v.T$=$.ax()
v.P$=0
v=w.gaC0()
v.T$=u
v.P$=0
v=w.garJ()
v.T$=u
v.P$=0
w.a1()},
asm(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iU(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d4m(this,f,u),e===u,s,s,s,s))}return A.bX(B.bG,r,B.bq,s,6,8)},
ay3(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b5(4,A.n(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lR,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gof(),a0=f.gyB(0),a1=a0.a.a,a2=f.gaC0(),a3=a2.a.a,a4=f.garJ(),a5=d.bdI(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,A.eO(B.A,new A.a5(270,370,new C.Z3(a5,d,f.a.e,e),e),B.f,B.dz),e),e,e,e)
a0=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.ay3("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4L(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.ay3("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4M(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zo[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aX
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bH(o,o,o,o),e,e,new A.a9(B.ay,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aC
v.push(A.aA(e,A.x(A.a([p,B.cS,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4N(f,t),e,e,e,e,e,e,!1,B.a3))}v=A.bX(B.bG,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eG:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.X(D.aA6[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bH(o,o,o,o),new A.bh(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4O(f,n),e,e,e,e,e,e,!1,B.a3))}q=A.bX(B.bG,q,B.bq,e,8,8)
a4=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.ay3("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4P(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vo,e,e,e)
m=A.a([],w)
for(l=D.Dg.gdV(D.Dg),l=l.gag(l);l.C();){k=l.gS(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aX
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aC
m.push(A.aA(e,A.x(A.a([j,B.bF,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4Q(f,k),e,e,e,e,e,e,!1,B.a3))}m=A.bX(B.bG,m,B.bq,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vo,e,e,e)
k=f.gof()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fNc,B.ae,d,B.aQ,a0,B.W,a2,B.aA,D.fTn,B.P,v,B.aA,D.fNl,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.kQ(e,9,""+B.k.V(f.gof().f),36,18,new C.d4R(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vo,e,e,e),B.am,f.asm(D.a5q,f.gof().r,new C.d4S(f),D.dxU),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vo,e,e,e),B.am,f.asm(D.a4L,f.gof().w,new C.d4T(f),D.dy_),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vo,e,e,e),B.am,f.asm(D.a4H,f.gof().x,new C.d4V(f),D.dzu),B.am,A.iM(e,B.b6,e,B.af,e,new C.d4W(f),e,e,e,D.fHr,f.gof().z),B.bx,A.bI(D.fLV,e,new C.d4X(f,a6),A.bo(B.b6,e,e,e,e,B.oG,e,e,new A.b8(A.n(16),B.a0),e,e,e))],w),e,e,A_.akV,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHR.prototype={
a3(d,e){var w,v,u,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bt())
u=A.I()
u.sam(D.c3Z.aA(0,new A.a3(0,0,0+w,0+v)))
d.aH(t,u)},
av(d){return!1}}
C.biE.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c2Z.aA(0,new A.a3(0,0,a3,a4)))
a5.aP(new A.a3(0,0,a3,a4),w)
v=B.k.dd(a2/112)
u=new A.e4()
u.cY(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.d3T[u.ap(9)]
j=u.ap(14)
J.bl(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bs(i,B.hp)
g=new A.ao(B.Q,B.M,B.S,B.T,B.R)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a5,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.G()
w.drawRRect(A.e6(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=E.kc.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bG(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=E.kc.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bG(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.ap(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.sam(D.c2k.aA(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bG(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.w.j(0.5).gp(0)
p.z=B.kP
d=p.G()
w.drawRect(A.bG(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.bdo.j(0.72).gp(0)
a5.aP(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c2(B.A,0.5,B.x,a0,0,A.a([D.bls.j(0.22),B.L],t),a0,a0).aA(0,A.bY(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
av(d){return!1}}
C.bbs.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.l1(new A.o(A.ar(D.kE,D.bqp,w/4),o,new A.bH(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.Ll,o,o,B.n),B.bh,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aKa,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kc.j(0.6),o,o,new A.bh(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qC,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b1T,u,D.c3X,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dr,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aHR(o),D.f7j),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aVC(p.y,r,K.iS,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,K.iS.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fwr,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,K.iS.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,K.iS.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fn6,!0,B.a4,B.Af,B.an,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fwj,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,K.iS.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.E(A.p(o,o,B.f,D.FG.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.FG.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.FG.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,K.iS.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yg(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fqi,B.a.ar(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,K.iS.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ch(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,K.iS.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.Ll,new A.an(B.a_,o,B.ab,B.t,A.a([t,new A.D(D.bCF,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ap(0,A.c3(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bh),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.Ll,v,D.c4u,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.ab,B.t,l,o)}}
C.al9.prototype={
R(){return new C.ala(new A.eD(0,$.ax()),new C.bRQ(),new C.als(),D.hrt,null,null)},
gd_(){return this.d}}
C.a13.prototype={
a6(){return"_Step."+this.b}}
C.ala.prototype={
gC5(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD8(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh9(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTy(){var w=this.gh9(0)
return w.gyV()==null?"Babu":B.a.i(w.gyV().b)},
Z(){var w,v=this
v.a2()
w=v.gh9(0).gyV()
w=w==null?null:w.c
v.r.b=w===D.of
w=v.pS(new C.bQb(v))
w.h7(0)
v.x!==$&&A.aQ()
v.x=w
v.a2a("Come closer, my children. I am "+v.gTy()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
q(){var w=this,v=w.x
v===$&&A.c()
v.q()
v=w.y
if(v!=null)v.a4(0)
v=w.z
if(v!=null)v.a4(0)
w.w.q()
v=w.f
v.T$=$.ax()
v.P$=0
w.bu8()},
a2a(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(D.ajx,new C.bQ5(w))},
bqz(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bQe(v))},
adq(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bqs(){return this.b8D()},
b8D(){var w=this,v=w.gC5()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bQ6(w))
w.a2a(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cG(B.m5,new C.bQ7(w))},
cIh(){var w=this
w.m(new C.bQa(w))
w.a2a(w.gC5()[w.as].a)},
KJ(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.abQ)return
w=p.gC5()
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
t.r=s.a+1.5}q=new A.e4()
q.cY(v*7+d)
p.m(new C.bQ9(p,d,u,q))
p.a2a(u?D.djh[q.ap(4)]+" "+w[p.as].d:D.dfY[q.ap(3)]+" "+w[p.as].d)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC5()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFp(t.at,t.ay,p)
t.m(new C.bQc(t,s))
t.a2a(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Bv(r.d,r.c.a,"fire",t.at*10),$async$kF)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bQd())
w=1
break
case 4:++t.as
t.b8D()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Xt,new A.an(B.a_,v,B.ab,B.t,A.a([A.bT(0,new A.er(A.b4(v,v,v,new C.aVH(u,w.r,w.w,u),B.aw),v),0,0,0),A.bm(!0,A.x(A.a([w.c9B(0),B.b2,w.bPo()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c9B(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.Pe,s,s,s,new C.bQ8(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC5().length;++w){v=t.as
if(w<v||t.Q===D.aZv)v=B.cI
else v=w===v?B.c:B.aX
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bh(u,u,u,u),s,s,B.n),s,7,s,D.by4,s,s,s,22))}p=A.E(A.x(A.a([D.fEc,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.K(B.fr,B.r,1)
return new A.D(D.bDQ,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iu,s,s,s),B.f,s,s,new A.o(B.aS,s,u,v,s,s,B.n),s,s,s,s,B.h4,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bPo(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gh9(0).gyV()
if(h==null)w=1
else w=h.c===D.of?0:1
v=j.dx
u=j.db
t=D.q4.j(0.96)
s=A.n(22)
r=A.K(B.cI,B.r,3)
q=A.b4(i,i,i,new C.boc(w,i),B.aw)
p=A.d(j.Q===D.abQ?j.gTy()+" asks":"Elder "+j.gTy(),i,i,i,i,i,i,D.aTm,i,i,i)
o=j.db
o=B.a.ar(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c5,A.B(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aTB,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbqy(),i,i,i,i,i,i,!1,B.a3)
switch(j.Q.a){case 0:v=A.as(j.a9z("Sit down by the fire",j.gbqr()),i,i,i)
break
case 1:v=A.as(j.a9z("Ask me, Elder",j.gcIg()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC5()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lw,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,new A.y(u[m],i,D.aTx,i,B.K,i,i,i,i,i,i,i),B.f,i,D.adi,new A.o(D.aiw,i,new A.bH(l,l,l,l),new A.bh(q,q,q,q),i,i,B.n),i,i,i,i,V.w3,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bQ2(j,m),i,i,i,i,i,i,!1,B.a3))}v=A.bX(B.bG,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.km:Ak.aoo
u=A.X(u,v?B.ej:D.lw,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ej:D.lw,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC5().length?"Finish":"Next story"
v=A.B(A.a([u,B.ad,q,j.a9z(v,j.gq9(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC5().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aTQ,i,i,i)],n)
u=j.cx
if(u>0){u=C.aPV(u)
q=C.aPV(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aag,i,i,i))}v.push(B.P)
v.push(j.a9z("Back to the games",new C.bQ3(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aBA,i,B.n),i,i,i,B.BM,B.bg,i,i,i)},
a9z(d,e){var w=null,v=A.n(16),u=A.K(B.cI,B.r,2)
return A.aA(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.Kb,w,w,w),B.f,w,w,new A.o(D.lw,w,u,v,w,w,B.n),w,w,w,w,D.bBy,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a3)}}
C.boc.prototype={
a3(d,e){Y.fR3(d,e.ei(B.I),e.gdC()*0.45,this.b,0,0.4)},
av(d){return d.b!==this.b}}
C.aAQ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bRQ.prototype={}
C.t2.prototype={}
C.bod.prototype={}
C.als.prototype={
Mg(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i5L(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aVH.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Mg(e).b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
j.drawPicture(i)
i=e.a
w=e.b
v=Math.min(i/450,w/900)
J.bl(j.save())
j.translate((i-450*v)/2,(w-900*v)/2)
d.bW(0,v)
n.cy_(d,l)
n.bO_(d,l)
n.cG5(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bl(j.save())
j.translate(225,580)
d.p9(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.tt(B.I,t,A.a([D.bpf.j(0.55*u),F.MJ.j(0.2*u),B.L],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bRI(n,d,l,k)),new A.z(540,new C.bRJ(n,d,l,k)),new A.z(546,new C.bRK(n,d,l,k)),new A.z(574,new C.bRL(n,d,l,k)),new A.z(612,new C.bRM(n,d,l,k)),new A.z(650,new C.bRN(n,d,l,k)),new A.z(656,new C.bRO(n,d,l,k))],x.E)
B.d.aZ(p,new C.bRP())
for(o=0;o<7;++o)p[o].b.$0()
n.bEV(d,l,k)
n.bRx(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.tt(new A.t(i/2,w*0.6),e.ganq()*0.75,A.a([B.L,D.bdi],r),A.a([0.55,1],q),B.x,m,m,0))
d.aP(new A.a3(0,0,0+i,0+w),j)},
av(d){return d.c!==this.c||d.d!==this.d},
cy_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e4()
g.cY(3)
for(w=d.a,v=0;v<36;++v){u=g.af()
t=g.af()
s=Math.sin(e*(1.5+g.af()*2)+v)
r=g.af()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.bo(n,n.aE(0,D.eie),C.iw(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ag,null,null,i)
k=q+k*4
i.push(new A.aY(r-6,k))
h=q-3
i.push(new A.c4(r-2,h,r,q))
i.push(new A.c4(r+2,h,r+6,k))
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.b=B.a9
r.c=1.6
r.r=D.bg_.gp(0)
r.d=B.bB
r.e=B.dQ
p=r.G()
r=j.gbv().a.snapshot()
w.drawPath((j.e=new A.cf(r)).a,p)
p.delete()}},
bO_(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.ayD[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bK(new A.t(o,l),m*0.74,p*0.5)
j=Ac.MC.j(u)
$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bG(k),h)
h.delete()
p=A.bK(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=Q.xJ.j(t).gp(0)
h=l.G()
v.drawOval(A.bG(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=D.ag1.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cG5(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bCx(d,D.eia,0.9,a0,D.hni,!1,!1,D.abO,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ag,e,e,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bt())
t=A.I()
t.r=D.ahQ.gp(0)
d.aH(u,t)
C.bCx(d,D.eic,0.95,a0,D.hnd,!1,!1,D.abP,1,!0)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c4(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c4(431,553,421,548))
t.D(new A.bt())
u=A.I()
u.r=F.Fn.gp(0)
d.aH(t,u)
u=A.bK(D.eib,8,28)
t=A.I()
t.r=D.bru.gp(0)
d.dO(u,t)
C.bCx(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hnj,!0,!1,D.Wp,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dO(A.bK(new A.t(s+q*16,r-6),16,11),C.iw(D.ahH,1.8))
u=q<0
C.bCx(d,new A.t(s-q*6,r),0.62,a0,D.hnl,!1,u,D.Wp,2.2,!1)
C.bCx(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hnh,!1,u,D.Wp,2.2,!1)
this.bUd(d,D.ehQ,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bK(new A.t(n,m),8,11)
j=o===1
i=j?D.ahD:D.aid
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bG(k),g)
g.delete()
k=j?D.ahD:D.aid
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aB.gp(0)
j.d=B.bB
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aB.gp(0)
j.d=B.bB
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bK(D.a7o,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.agn.gp(0)
d.dO(u,t)
u=A.bK(D.a7o.a7(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.bi1.gp(0)
d.dO(u,t)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bt())
u=A.I()
u.r=D.bib.gp(0)
d.aH(t,u)
u=D.a7o.a7(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.i2.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ag,e,e,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(a0*8)
v.D(new A.c4(180,588+w*(f?6:0),178,595))
d.aH(v,C.iw(D.agn,3.5))},
bUd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a7(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=2
m.r=D.XE.gp(0)
m.d=B.bB
m.e=B.dQ
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bK(j,17,32)
s=$.S()
r=A.I()
r.r=D.Fl.gp(0)
d.dO(w,r)
r=A.bK(j.a7(0,D.ehg),7,26)
w=A.ar(D.Fl,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dO(r,q)
s=new A.aF(s.r,B.ag,null,null,A.a([],x.v))
s.D(new A.aY(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bt())
t=A.I()
t.r=D.Fl.gp(0)
d.aH(s,t)
t=A.bK(j.a7(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.Fl.gp(0)
d.dO(t,s)
s=-11+k
d.bo(j.a7(0,new A.t(22,s)),j.a7(0,new A.t(21,-17+k)),C.iw(D.XE,1.6))
d.bo(j.a7(0,new A.t(26,s)),j.a7(0,new A.t(28,-16+k)),C.iw(D.XE,1.6))
s=j.a7(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a7(0,new A.t(26,-3+k)),j.a7(0,new A.t(26,1+k)),C.iw(D.bkP,1.4))
d.bo(j.a7(0,D.ekd),j.a7(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.iw(D.Fl,2.4))},
bRv(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bK(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.bqb.gp(0)
r=s.G()
w.drawOval(A.bG(t),r)
r.delete()}}t=A.bK(D.a7q.a7(0,B.cy),17,52)
$.S()
s=A.I()
s.r=D.bcU.gp(0)
a5.dO(t,s)
s=A.bK(D.a7q.a7(0,B.cy),12,44)
t=D.bgn.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dO(s,q)
for(p=0;p<3;++p){u=D.dfr[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=7
m.r=D.Fz.gp(0)
m.d=B.bB
m.e=B.dQ
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.B6.j(0.6)
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.b=B.a9
l.c=2
l.r=m.gp(0)
l.d=B.bB
l.e=B.dQ
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eV5,D.eVC,D.eWD,D.eWV,D.eWB]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bnE,D.bkb,D.bpE][i]
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
e.push(new A.aY(a1-a2,578))
l=a1+a0*0.6
e.push(new A.l0(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.l0(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bt())
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbv().a.snapshot()
w.drawPath((a3.e=new A.cf(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=G.aib.j((1-a4)*0.9)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.ag1.j(0.1*(1-a4))
$.S()
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bRx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.brC.j(0.18*o)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=D.blx.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c3b(d,e){switch(d){case 0:return e.b?D.hne:D.aZ3
case 1:return e.b?D.hnk:D.aZ1
case 2:return D.aZ0
case 3:return D.aZ_
case 4:return D.aZ2
default:return D.aZ4}},
aCe(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QQ(d,e,f,g){var w,v=this,u=D.a4T[e],t=v.c3b(e,g),s=new C.bod(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a4T[e],l=e===0
m=B.k.E(((l?D.aK3:D.aK8).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a7u
s.as=D.DJ
if(l){s.a=o?v.aCe(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.DJ
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eho
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eiL
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
s.Q=D.el8
s.as=D.aKl}if(e===2&&g.x!=null&&f<g.y){s.a=v.aCe(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aCe(f,e*3)
s.b=0.5
s.c=0.4}}C.htW(d,u.a,u.b*1.2,t,s,f,e,null)},
bEV(d,e,f){var w=new C.bRH(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.afd.prototype={
a6(){return"_Stand."+this.b}}
C.adb.prototype={}
C.ln.prototype={}
C.bQr.prototype={
bzB(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
FQ(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bQs())
return r},
aqt(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aLM(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
alU(d){var w,v,u=A.aX(x.N),t=d,s=0
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
gyV(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bQt(this))
return B.d.gI(w)}}
C.atr.prototype={}
C.zg.prototype={}
C.ak7.prototype={
gaEx(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bLr(),A.T(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ah(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mf.prototype={
gaoB(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(t.gaEx(0))s.push(t)}return s},
ah(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
cZf(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaoB(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.L)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ln(B.a.i(s.a),p,B.d.cu(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b9J.prototype={}
C.a9k.prototype={}
C.bgX.prototype={}
C.afb.prototype={}
C.ajm.prototype={
R(){return new C.ajn(B.bA,A.a([],x.cC),A.a([],x.e4),null,null)},
gd_(){return this.d}}
C.ajn.prototype={
gMz(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD8(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gb8Z(){var w,v=this,u=v.e
if(u===$){w=v.pS(v.gc9D())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a2()
this.gb8Z().h7(0)},
q(){this.gb8Z().q()
this.bu3()},
h7(d){this.m(new C.bJE(this))},
c9E(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fw(0,v)
if(w.c!=null)w.m(new C.bJz())},
b7k(){var w,v,u,t=this,s=t.r
B.d.aa(s)
w=t.gMz()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bgX(u,(u+0.5)/v,w[t.x].b[u]))},
fw(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bJF())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c60()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMz()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.arV(v,0.8,B.cI)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.arV(m.cy,0.8,G.n9)
m.aY5("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.arV(q,0.88,D.lw)
p=m.gMz()[m.x]
n=p.c
if(u===n){m.aY5("The right gourd fell! It was "+p.b[n]+".")
return}}}},
arV(d,e,f){var w,v,u,t=new A.e4()
t.cY(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.af()*3.141592653589793*2
w.push(new C.afb(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aY5(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Q0()}},
c60(){var w=this
if(w.x+1>=w.gMz().length){w.Q0()
return}++w.x
w.b7k()},
Q0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Q0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMz().length
r=C.bFp(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bJx())
w=2
return A.b(C.Bu(u.a.d,r),$async$Q0)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Bv(t.d,t.c.a,"catch",u.z),$async$Q0)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bJy())
return A.h(null,v)}})
return A.i($async$Q0,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c9C()
else w=v.ch?v.c9F():A.as(new A.D(B.eu,A.x(A.a([D.aUM,B.P,D.fFR,B.W,D.fM_,B.dT,C.uk("Play",v.geX(v),B.cI,B.hl,D.fq)],x.p),B.m,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tr("Calabash Catch",w,B.f1,u)},
c9F(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hz:B.H6
p.push(A.X(u,v?B.ax:B.bU,r,r,r,22))}p.push(B.b2)
v=s.x
u=s.gMz()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aTk,r,r,r))
p.push(B.bb)
v=A.n(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iu,r,r,r),B.f,r,r,new A.o(B.bC,r,r,v,r,r,B.n),r,r,r,r,B.Gj,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.K(B.cI,B.r,3)
return A.x(A.a([new A.D(D.bzn,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fqa,B.K,r,r),B.f,r,r,new A.o(D.q4,r,t,v,r,r,B.n),r,r,r,B.eZ,B.bg,r,r,1/0),B.am,A.E(A.cv(new C.bJD(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
c9C(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pG,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMz().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.UQ,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bao,u,t,B.aQ,new C.I_(s,r,w.cx,v),B.aQ,A.as(C.uk("Back to the games",new C.bJw(w),B.cI,B.kl,D.fq),v,v,v)],x.p),v,v,B.aa,v,v,B.ah,!1)}}
C.bc5.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.jx(B.I,new A.t(0,a1),D.cYV,G.ayV,B.x,d))
a5.aP(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=G.MM.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ag,d,d,w)
a3=a1*0.7
v.D(new A.aY(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.bw(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bhg.gp(0)
a5.aH(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ag,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aY(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c4(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c4(r+14,t,r+26,w))
a3.D(new A.bt())
w=A.I()
w.r=D.af8.gp(0)
a5.aH(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.cjO[q]
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.af8.gp(0)
o.c=7
o.d=B.bB
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.aev.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.bi9.gp(0)
a5.aP(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.agE.gp(0)
s.c=2
n=s.G()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.L)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bK(new A.t(u,s),12,54)
$.S()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.lw.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bl(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.afL.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.bmI.gp(0)
o.c=4
o.d=B.bB
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.sam(A.tt(D.ejW,46,D.d6h,B.D0,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bK(D.ek1,8,12)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
j=new A.iN(new A.eu(l.c,d,d,B.cN,d,d,d,d,d,d,D.fo1),B.K,B.bY,new A.js(1),d,d,3,d,B.bW,d)
j.o0(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.bs(A.bK(B.cH,o.gbb(o)+8,k),B.fE)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.q4.gp(0)
n=k.G()
t.drawRRect(A.e6(i),n)
n.delete()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.lw.gp(0)
k.b=B.a9
k.c=1.5
n=k.G()
t.drawRRect(A.e6(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a3(a5,new A.t(-o/2,4-k.gbb(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
Y.AX(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dH,F.mD,!1,(w+1)/2)
g=A.bK(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ag,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aY(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c4(g.gbL().a,o+8,w+8,o))
a4.D(new A.bt())
k=A.I()
k.r=D.Yp.gp(0)
a5.aH(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.B6.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=G.n9.gp(0)
a5.aP(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bhl.gp(0)
a5.dO(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.L)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fx(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cI.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,L.CV,d,d),"+"+a3),B.a4,B.bY,d,B.dA,B.bW)
j.ek()
j.a3(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
av(d){return!0}}
C.Q8.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAO(w.c,w.f,v),B.aw),s=A.n(10),r=A.K(B.bD,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cS,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.fgJ,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mK,v,v,v)],x.p),B.m,v,B.e,B.O,0,B.p),v)},
gY(d){return this.e}}
C.aAO.prototype={
a3(d,e){var w=e.ei(B.I),v=e.gdC(),u=this.c?0.8:0
return Y.fR3(d,w,v*0.44,this.b,0,u)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.aze.prototype={}
C.au2.prototype={
R(){return new C.au3(A.U(x.S,x.cq),null,null)},
gd_(){return this.d}}
C.au3.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hyW(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaEk(){var w=this.z
return w===$?this.z=this.X1(0):w},
giW(){var w,v=this.Q
if(v===$){w=this.gkL()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
X1(d){var w,v,u,t,s=this.gkL()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aze(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aze(v[t],u[t],-1))
v=new A.e4()
v.cY(this.a.e*31+d)
B.d.dZ(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.du(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eJ$
u.b=!1
B.d.aa(u.a)
u=u.gon()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dS$.a.aa(0)
v.qp()}this.buw()},
cOi(d,e){var w,v,u,t,s,r=this
if(d>=r.giW().length||r.giW()[d]!==-1||B.d.t(r.giW(),e))return
w=r.gaEk()[e]
v=r.gkL()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cnt(r,e,w,v))
A.cG(B.lD,new C.cnu(r))
return}++r.r
u=A.bn(null,B.hv,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.cnv(r,d,e,w,v))
u.cp(0)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkL()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.cnw())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cnx(t,r))
w=5
return A.b(C.Bu(t.a.d,r),$async$kF)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Bv(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cny())
w=1
break
case 4:for(o=t.as,n=new A.du(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eJ$
p.b=!1
B.d.aa(p.a)
p=p.gon()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dS$.a.aa(0)
q.qp()}o.aa(0)
t.m(new C.cnz(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pG,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.UQ,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tr(q,A.cl(A.a([D.ae2,w,v,B.aQ,new C.I_(u,t,r.ch,p),B.aQ,A.as(C.uk("Back to the games",new C.cnp(d),B.cI,B.kl,D.fq),p,p,p)],x.p),p,p,B.aa,p,p,B.ah,!1),B.f1,p)}w=r.gkL()
v=r.e
s=w[v]
return new C.tr(q,new A.D(B.ub,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aTf,B.K,p,p),A.E(A.cv(new C.cnq(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f1,p)}}
C.bbB.prototype={
a3(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cMR(),A.T(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.a7(0,B.Ja)
$.S()
w=A.I()
w.r=D.lx.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a7(0,D.egv)
u=A.I()
u.r=B.o8.j(0.5).gp(0)
u.c=10
u.d=B.bB
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dU.aw(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ag,b1,b1,j)
j.push(new A.aY(u,b5))
j.push(new A.c4((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ag,b1,b1,A.bq(j,!0,r)),m=A.a([],q),h=new A.tq(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b9(A.jD(b2));--g
f=new A.Bs(h,g)
e=0
for(;;){h.io()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.io()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cy([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a0.r=B.aX.gp(0)
a0.b=B.a9
a0.c=3
a1=a0.G()
a0=d.gbv().a.snapshot()
p.drawPath((d.e=new A.cf(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bq(j,!0,r)),m=A.a([],q),j=new A.tq(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b9(A.jD(b2));--a2
j.io()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cy([new A.Bs(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=D.FN.gp(0)
a4.b=B.a9
a4.c=g
a4.d=B.bB
a1=a4.G()
a4=a3.gbv().a.snapshot()
p.drawPath((a3.e=new A.cf(a4)).a,a1)
a1.delete()
j.io()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.io()
a5=m[a2].Hc(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bK(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a8.r=B.bf.gp(0)
a1=a8.G()
p.drawOval(A.bG(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.iN(D.fgc,B.a4,B.bY,new A.js(1),b1,b1,b1,b1,B.bW,b1)
a9.ek()
a9.a3(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
av(d){return!0}}
C.axZ.prototype={
R(){return new C.ay_(A.aX(x.S))},
gd_(){return this.d}}
C.ay_.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hzQ(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a2()
this.b7t()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a1()},
b7t(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.dh(B.rt,new C.cCo(this))},
boe(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkL()[v.e]
if(w.e[d]===w.b)v.m(new C.cCw(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cCx(v,d))
A.cG(B.iW,new C.cCy(v))}},
cTM(){var w=this
if(!w.as&&w.f<w.gkL()[w.e].d.length)w.m(new C.cCz(w))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkL()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a4(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cCA(t,s))
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Bv(q.d,q.c.a,"who",t.r),$async$kF)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cCB())
w=1
break
case 4:t.m(new C.cCC(t))
t.b7t()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkL().length+" guessed",a2,a2,a2,a2,a2,a2,B.pG,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.UQ,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tr(a1,A.cl(A.a([D.baA,w,v,B.aQ,new C.I_(u,t,a0.ax,a2),B.aQ,A.as(C.uk("Back to the games",new C.cCq(a3),B.cI,B.kl,D.fq),a2,a2,a2)],x.p),a2,a2,B.aa,a2,a2,B.ah,!1),B.f1,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkL()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Kj,B.K,a2,a2),B.W,A.as(A.lx(new C.cCr(a0,r),a2,B.b7,B.hv,a2,a2,new A.bp(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cI,2,B.r,-1)
k=o+1
w.push(new A.qX(new A.bp(0,1,u),new C.cCs(),A.p(a2,new A.cd(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qz(new A.y(""+k,a2,B.nK,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lw,a2,12,a2),B.as,new A.bA(1,B.bd,new A.y(v[n].d[o],a2,D.fsL,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.q4,a2,new A.bH(l,l,l,l),new A.bh(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cu,B.bg,a2,a2,a2),B.b7,B.iW,a2,new A.bR("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bN(!1,D.fTN,a2,a2,!0,a2,a2,a2,a0.gcTL(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lx.j(0.2)
q=A.n(16)
p=A.K(D.lx,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fw,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.uk(v,a0.gq9(a0),B.cI,B.jA,D.fq)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bE,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.dq:B.cI.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.t(0,o)?B.fa:B.cI,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bU:B.c
d=n.t(0,o)?B.wY:a2
t.push(new A.qX(new A.bp(0,i,u),new C.cCt(),A.aA(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.K,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.ada,new A.o(h,a2,new A.bH(l,l,l,l),new A.bh(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jh,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cCu(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a3),B.b7,B.mF,a2,new A.bR("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fI,t,B.bq,a2,10,10))}return new C.tr(a1,A.cl(w,a2,a2,B.akw,a2,a2,B.ah,!1),B.f1,a2)}}
C.az_.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.aGe.prototype={
aU(){this.b1()
this.b0()
this.dI()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.af_.prototype={
aq5(d){},
aqx(){var w=this,v=w.pS(new C.f2U(w))
v.h7(0)
w.LG$!==$&&A.aQ()
w.LG$=v}}
C.aK2.prototype={
gbkG(d){var w=this.c
return B.a.ar(w,0,Math.min(this.d,w.length))},
VA(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.dh(D.ajx,new C.fd_(w))},
bqx(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.ali.prototype={
R(){return new C.alj(new C.als(),A.a([],x.t),new A.eD(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alj.prototype={
gMx(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD8(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh9(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqg(){var w=this.r
return w===$?this.r=new C.aK2(new C.bRd(this)):w},
gaoT(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMx()[v].c)u.push(1)
return u.length},
gbjZ(){var w=this.gh9(0)
return w.gyV()==null?"Elder":B.a.i(w.gyV().b)},
Z(){this.a2()
this.aqx()},
q(){var w,v=this
v.gqg().q()
v.f.q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.bub()},
cIr(){var w=this
w.m(new C.bRa(w))
w.gqg().VA(w.gMx()[w.x].a)},
KJ(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqg()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pZ$.a
v.ax=u
v.ay=u+1
v.m(new C.bR8())
A.cG(B.hv,new C.bR9(v))},
boa(){var w=this.gaoT(0)/this.gMx().length*100
if(w>=90)return D.eS4
if(w>=75)return D.eQ6
if(w>=60)return D.eGQ
if(w>=45)return D.eKe
return D.eBf},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cra()
w=A.bT(0,new A.er(A.b4(m,m,m,new C.bsb(n,n.pZ$),B.aw),m),0,0,0)
if(!n.Q){v=D.q4.j(0.96)
u=A.n(20)
t=A.K(B.cI,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbjZ()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aU9,B.K,m,m),B.W,C.uk("Start the test",n.gBq(),B.cI,B.iY,D.fq)],x.p),B.m,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bE,m,m,m)
v=u}else{v=n.x
u=n.gMx()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aUb,m,m,m)
if(n.Q){t=n.gqg()
t=t.d<t.c.length}else t=!1
if(t)u=D.f8I
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.B6,4,B.r,-1)
s.push(A.aA(m,A.p(m,new A.y(q[r],m,D.fjV,m,B.K,m,m,m,m,m,m,m),B.f,m,D.ada,new A.o(D.bdn,m,new A.bH(o,o,o,o),new A.bh(p,p,p,p),m,m,B.n),m,m,m,m,B.Nw,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bRb(n,r),m,m,m,m,m,m,!1,B.a3))}u=A.bX(B.fI,s,B.bq,new A.bR("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.p_(u,B.mE,A.qr(),B.b7,B.b7,A.L7())],x.p),B.m,m,B.e,B.O,0,B.p)
v=u}return new C.tr("Village School",new A.an(B.a_,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f1,m)},
cra(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.boa(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMx()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.cI,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fok,B.K,i,i)
r=A.d("Signed by Elder "+j.gbjZ(),i,i,i,i,i,i,D.fmZ,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fs5,i,i,i),D.eta],q)
o=A.d(h.b,i,i,i,i,i,i,D.ftX,i,i,i)
n=j.gaoT(0)
m=j.gMx()
u=A.p(i,A.x(A.a([D.fF9,B.au,s,r,B.W,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.aag,i,i,i),B.P,D.arf],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.q4,i,t,u,i,i,B.n),i,i,i,i,B.fl,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.I_(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.fUS,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.L)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bC,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fS,i,i,i,i,i,i,i,i,i),B.au,new A.y("You said: "+p.b[w[v]],i,D.fpu,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.frI,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dq,i,new A.bH(k,k,k,k),new A.bh(r,r,r,r),i,i,B.n),i,i,i,B.cu,B.bg,i,i,i))}B.d.v(s,u)}s.push(B.aA)
s.push(A.as(C.uk("Back to the games",new C.bR4(j),B.cI,B.kl,D.fq),i,i,i))
return new C.tr("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f1,i)}}
C.bsb.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pZ$.a,d=a1.a,a0=f.f.Mg(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h7g(a2)
J.bl(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqg()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cTe[u]-6
$.S()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.Fz.gp(0)
s=t.G()
d.drawRect(A.bG(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.bs(D.a8n.cq(10),B.hU)
$.S()
t=A.I()
t.r=D.B6.gp(0)
a1.az(a0,t)
t=A.bs(D.a8n,B.hF)
a0=A.I()
a0.sam(A.jx(new A.t(30,96),new A.t(420,346),D.dbx,g,B.x,g))
a1.az(t,a0)
r=new A.e4()
r.cY(2)
for(q=0;q<18;++q){a0=r.af()
t=r.af()
p=r.af()
p=A.bK(new A.t(30+a0*390,96+t*250),8+r.af()*14,30+p*60)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bG(p),s)
s.delete()}a0=A.I()
a0.r=L.ahp.gp(0)
a1.aP(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aP(D.f0F,a0)
a0=A.I()
a0.r=B.bL.gp(0)
a1.aP(D.f0J,a0)
a0=A.bs(D.f0z,B.hE)
t=A.I()
t.r=D.Yp.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqg().gbkG(0)
n=A.fx(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.fwb,a0+(v?"|":"")),B.a4,B.bY,g,B.dA,B.bW)
n.o0(346)
J.bl(d.save())
a0=A.bG(D.a8n)
t=$.my()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bG(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a3(a1,new A.t(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.bs(new A.a3(a0,t,a0+40,t+90),B.fE)
a0=A.I()
a0.r=D.bsq.gp(0)
a1.az(t,a0)}}else{n=A.fx(g,g,g,g,D.fgs,B.K,B.bY,g,B.dA,B.bW)
n.o0(340)
n.a3(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqg().d*9,310)
l=Math.sin(q+t)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gh9(0).gyV()
j=(a0==null?g:a0.c)===D.of?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f2V(e,a1,j,v,i,D.ehA)),new A.z(520,new C.f2W(a1,e,v)),new A.z(575,new C.f2X(a1,e,v)),new A.z(585,new C.f2Y(this,a1,e,v)),new A.z(615,new C.f2Z(this,v,a1,e,i))],x.E)
B.d.aZ(h,new C.f3_())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c9G(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ag,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bt())
return n},
av(d){return!1}}
C.alg.prototype={
R(){return new C.alh(new C.als(),A.U(x.S,x.i),new A.eD(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alh.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hyK(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
giW(){var w=this.z
return w===$?this.z=this.Fn(0):w},
gaKo(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fn(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cu(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fn(0):r).length);++v}s.Q=w
r=w}return r},
Fn(d){var w,v,u,t,s=this.gkL()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e_(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.cY(this.a.e+d*7)
B.d.dZ(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f4(u,new C.bQR())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a2()
this.aqx()},
q(){var w,v=this
v.e.q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.bua()},
aq5(d){var w,v,u,t,s,r=this,q=r.giW().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cu(u===$?r.z=r.Fn(0):u,v)
s=r.gaKo()
s[v]=s[v]+(450*(t+0.5)/q-r.gaKo()[v])*Math.min(1,w)}},
cYW(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giW().length)return
w=v.y
if(w===-1){v.m(new C.bR1(v,d))
return}if(w===d){v.m(new C.bR2(v))
return}v.m(new C.bR3(v,B.d.cu(v.giW(),v.y),d,B.d.cu(v.giW(),d)))},
cJ6(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fn(0):u).length))break
t=s.gkL()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fn(0):u)[v]]===v);++v}s.m(new C.bQX(s,B.d.d0(w,new C.bQY())))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkL().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bQZ(t,s))
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Bv(q.d,q.c.a,"lineup",t.r*10),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bR_())
w=1
break
case 4:t.m(new C.bR0(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkL().length+" lines right",k,k,k,k,k,k,B.pG,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tr("Line Up",A.cl(A.a([D.ae2,w,B.aQ,new C.I_(v,u,l.ch,k),B.aQ,A.as(C.uk("Back to the games",new C.bQT(d),B.cI,B.kl,D.fq),k,k,k)],x.p),k,k,B.aa,k,k,B.ah,!1),B.f1,k)}w=A.a([],x.t)
for(t=0;v=l.gkL(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bQU(l))
u=A.bT(0,A.cv(new C.bQV(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aUb,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.foL,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fqX,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lx:G.n9,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bQW(l),x.cM).aG(0,", then ")+".",k,k,k,k,k,k,D.ft6,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d0,B.bg,k,k,1/0))}if(!l.at)r.push(C.uk("That is my line!",l.gcJ5(l),B.cI,B.hy,D.fq))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uk(w,l.gq9(l),B.cI,B.jA,D.fq))}return new C.tr("Line Up",new A.an(B.a_,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.f1,k)}}
C.biM.prototype={
a3(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pZ$.a,c6=c8.a,c7=c4.e.Mg(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h7g(c9)
J.bl(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giW().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ag,c3,c3,A.a([],u))
t.D(new A.aY(10,470))
t.D(new A.c4(225,500,440,470))
s=A.I()
s.r=D.Yp.gp(0)
s.b=B.a9
s.c=4
c8.aH(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aF(c7,B.ag,c3,c3,n)
n.push(new A.aY(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.bt())
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.n9,D.lx,B.aJ][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbv().a.snapshot()
c6.drawPath((m.e=new A.cf(o)).a,l)
l.delete()}this.b_G(c8,"OLDEST",D.eiA,B.cI)
this.b_G(c8,"YOUNGEST",D.ei1,B.bf)
c7=A.bs(D.f0t,B.fE)
u=A.I()
u.r=D.Fz.gp(0)
c8.az(c7,u)
u=A.bs(D.f0s,B.hF)
c7=A.I()
c7.r=D.B6.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aZ(c7,new C.dnY())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.L)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cu(a0===$?c4.z=c4.Fn(0):a0,h)
q=c4.gaKo()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkL()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkL()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a8.r=B.cI.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.dff[B.o.F(a9,6)]
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
else b8=a2?D.ekG:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aKl
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.RX(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.Jc,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.iN(new A.eu(a7,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fmv),B.a4,B.bY,new A.js(1),"\u2026",c3,1,c3,B.bW,c3)
c0.o0(s)
c1=A.bs(A.bK(new A.t(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
if(a5)a8=B.io
else a8=a6?B.ro:D.q4
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.e6(c1),l)
l.delete()
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
if(a5)a8=D.lx
else a8=a6?G.n9:D.lw
a7.r=a8.gp(0)
a7.b=B.a9
a7.c=2
l=a7.G()
c6.drawRRect(A.e6(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a3(c8,new A.t(q-a8/2,650-a7.gbb(a7)/2))
c2=new A.iN(new A.eu(""+(a1+1),c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fmO),B.a4,B.bY,new A.js(1),c3,c3,c3,c3,B.bW,c3)
c2.ek()
c2.a3(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bl(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bK(B.I,4,8)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.n9,D.lx,B.aJ,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bG(s),l)
l.delete()
c6.restore()}c6.restore()},
b_G(d,e,f,g){var w,v,u=null,t=A.fx(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,L.CV,u,u),e),B.a4,B.bY,u,B.dA,B.bW)
t.ek()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aE(0,new A.t(v/2,w.gbb(w)/2)))},
av(d){return!1}}
C.a1m.prototype={
a6(){return"_Trip."+this.b}}
C.alc.prototype={
R(){return new C.ald(D.Wu,new A.eD(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.ald.prototype={
gD6(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD8(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh9(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqg(){var w=this.f
return w===$?this.f=new C.aK2(new C.bQD(this)):w},
gTy(){var w=this.gh9(0)
return w.gyV()==null?"Grandma":B.a.i(w.gyV().b)},
Z(){this.a2()
this.aqx()},
q(){var w,v=this
v.gqg().q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.bu9()},
aq5(d){var w,v,u,t=this
if(t.r!==D.ac_)return
w=B.dw.aw(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD6()
if(v+1>=u.length){t.r=D.ac0
t.Wx()}else{++t.w
t.ay=!1
t.r=D.Wv
t.gqg().VA(u[t.w].a)}if(t.c!=null)t.m(new C.bQB())}},
Wx(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Wx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqg().VA("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD6().length
r=C.bFp(t,u.z,s)
u.as=r
w=2
return A.b(C.Bu(u.a.d,r),$async$Wx)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Bv(s.d,s.c.a,"journey",u.x*10),$async$Wx)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bQv())
return A.h(null,v)}})
return A.i($async$Wx,v)},
bpr(){this.aSX()},
aSX(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ac_
if(w.c!=null)w.m(new C.bQw())},
KJ(d){var w,v,u,t,s=this
if(s.r!==D.Wv)return
w=s.gD6()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bQA(s,d,v))
u=s.gqg()
t=s.w
u.VA(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cOh(){if(this.r!==D.AF)return
this.aSX()},
B(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.er(A.b4(s,s,s,new C.bib(t,t.pZ$),B.aw),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD6().length;++w){v=t.w
if(w<v||t.r===D.ac0)v=B.cI
else v=w===v?B.c:B.aX
u=new A.aP(4,4)
p.push(new A.bA(1,B.bd,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bh(u,u,u,u),s,s,B.n),s,7,s,B.yt,s,s,s,s),s))}p.push(B.bn)
p.push(D.fGK)
return new C.tr("Safari Journey",new A.an(B.a_,s,B.ab,B.t,A.a([r,A.ap(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.ciS(),s,s,10,10,s,s)],q),s),B.f1,s)},
ciS(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bQz(o),l=D.q4.j(0.96),k=A.n(22),j=A.K(B.cI,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTy()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aU9,B.K,n,n),B.W,C.uk("Start the journey",o.gbpq(),B.cI,D.bMu,D.fq)],x.p),B.m,n,B.e,B.O,0,B.p)
break
case 3:w=D.ba8
break
case 1:w=o.w
v=o.gD6()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lw,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,new A.y(r[s],n,D.aTx,n,B.K,n,n,n,n,n,n,n),B.f,n,D.adi,new A.o(D.aiw,n,new A.bH(p,p,p,p),new A.bh(q,q,q,q),n,n,B.n),n,n,n,n,V.w3,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bQx(o,s),n,n,n,n,n,n,!1,B.a3))}w=A.x(A.a([w,B.P,A.bX(B.bG,t,B.bq,n,8,8)],u),B.E,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD6().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bM(B.a8,n,n,C.uk(v,o.gcOg(),B.cI,B.jA,D.fq),n)],x.p),B.E,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTy()),B.P,A.d(""+o.x+" of "+o.gD6().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aTQ,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aPV(v)
u=C.aPV(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.aag,n,n,n))}w.push(B.P)
w.push(A.as(C.uk("Back to the games",new C.bQy(o),B.cI,B.kl,D.fq),n,n,n))
w=A.x(w,B.E,n,B.e,B.O,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aBA,n,B.n),n,n,n,n,B.bg,n,n,n)}}
C.bib.prototype={
a3(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pZ$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD6(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.ac_,d4=c9*0.5
d0=A.ar(D.beP,D.boX,d2)
d0.toString
w=A.ar(D.XG,G.agh,d2)
w.toString
v=A.ar(B.tJ,D.bnq,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.jx(B.I,new A.t(0,d4),A.a([d0,w,v],t),G.a3m,B.x,c5))
d5.aP(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.tt(s,60,A.a([D.bnN,B.L],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.XS.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dui[o]
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=B.c.j(0.75).gp(0)
l=m.G()
d0.drawCircle(q+n.a,p+n.b,18,l)
l.delete()}}for(v=d2*0.7,u=d4+4,m=d4-16,k=x.v,j=0;j<2;++j){i=$.S()
h=A.a([],k)
g=new A.aF(i.r,B.ag,c5,c5,h)
h.push(new A.aY(0,u))
for(i=m-j*12,f=0.12+j*0.1,e=70+j*30,d=14-j*3,q=0;q<=c8;q+=6){a0=new A.aq(q,i+Math.sin((q+c6.CW*f)/e)*d)
h.push(a0)
a1=g.f
if(a1!=null)a0.bw(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.bw(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=A.ar(j===0?D.bdp:D.brQ,D.big,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.cf(g.gbv().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c9H(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.ahH,D.FN,d2)
u.toString
v.sam(A.jx(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bnP],t),c5,B.x,c5))
d5.aP(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bhz.gp(0)
d5.aP(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.brw.gp(0)
d5.aP(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=L.M6.gp(0)
l=t.G()
d0.drawRect(A.bG(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b4.r=D.bd6.gp(0)
l=b4.G()
d0.drawRect(A.bG(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ag,c5,c5,b2)
b2.push(new A.aY(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bt())
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.bpN.gp(0)
l=b2.G()
b2=b3.gbv().a.snapshot()
d0.drawPath((b3.e=new A.cf(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.r=D.fq.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.r=D.Fz.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.bs(new A.a3(b2,a6,b2+60,a7),B.id)
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.bsU.gp(0)
l=b2.G()
d0.drawRRect(A.e6(b6),l)
l.delete()
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.B6.gp(0)
b2.b=B.a9
b2.c=2
l=b2.G()
d0.drawRRect(A.e6(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.iN(new A.eu(b7,c5,c5,B.cN,c5,c5,c5,c5,c5,c5,D.fl_),B.a4,B.bY,new A.js(1),c5,c5,c5,c5,B.bW,c5)
b8.ek()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a3(d5,new A.t(b5-b3/2,a4-b2.gbb(b2)/2))
if(a9)b9=c6.r===D.ac0
else if(r===c6.w){b2=c6.r
b2=b2===D.Wv||b2===D.AF
b9=b2}else b9=!1
if(a9){b2=c6.gh9(0).gyV()
c0=(b2==null?c5:b2.c)===D.of?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqg()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.AF
b2=c1?C.hvi(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.Wv?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.RX(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bGi(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=D.br1.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.Wu)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.AF&&c6.ax){b8=A.fx(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cI,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A8.I7,c5,c5),"BEEP BEEP!"),B.a4,B.bY,c5,B.dA,B.bW)
b8.ek()
b8.a3(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c9H(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.bnk,D.bgT,g)
m.toString
if(f){w=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c4(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c4(v+9,t,v+16,u))
w.D(new A.bt())
t=A.I()
t.r=D.YQ.gp(0)
d.aH(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cXc[q]
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.YQ.gp(0)
o.c=4
o.d=B.bB
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a7(0,D.ekD)
$.S()
v=A.I()
v.r=D.bd8.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bK(e.a7(0,D.ekE),16,60)
w=A.I()
w.r=m.gp(0)
d.dO(v,w)}},
bGi(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.Wu?0.045:0,a2=a3.a
J.bl(a2.save())
a2.translate(a4.a,a4.b+d)
a3.ii(0,a1)
for(w=0;w<2;++w){v=D.dmO[w]
u=a0.ay&&a0.r!==D.Wu&&v>0
J.bl(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.brI.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.bkh.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.bm.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.tQ(D.f0Q,B.fE,B.fE,B.it,B.hD)
$.S()
t=A.I()
t.sam(A.jx(D.egJ,B.a7j,D.dcS,G.a3m,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.d71[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bG(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.AF&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bl(a2.save())
a2.clipRRect(A.e6(A.bs(k,B.mW)),$.nF(),!0)
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=D.XG.gp(0)
r=j.G()
a2.drawRect(A.bG(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.AF?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.RX(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aKc,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.bs(k,B.mW)
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.r=D.aiy.gp(0)
h.b=B.a9
h.c=2
r=h.G()
a2.drawRRect(A.e6(i),r)
r.delete()}a0=A.bs(D.TN,B.mW)
t=A.I()
t.r=D.XG.gp(0)
a3.az(a0,t)
J.bl(a2.save())
a2.clipRRect(A.e6(A.bs(D.TN,B.mW)),$.nF(),!0)
C.RX(a3,new A.t(D.TN.gbL().a,-10),0,0,0.7,-0.1,e,e,D.aKc,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.bs(D.TN,B.mW)
a0=A.I()
a0.r=D.aiy.gp(0)
a0.b=B.a9
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=An.FO.gp(0)
a3.ad(D.eiO,4,a0)
a0=A.I()
a0.r=D.Fz.gp(0)
a3.aP(D.f1Z,a0)
for(w=0;w<3;++w){v=D.dmQ[w]
a0=A.bs(new A.a3(v,-96,v+28,-79),B.id)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.FN.gp(0)
r=t.G()
a2.drawRRect(A.e6(a0),r)
r.delete()}a2.restore()},
av(d){return!1}}
C.aAR.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfJ.prototype={}
C.aAT.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfK.prototype={}
C.aAU.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfL.prototype={}
C.a5R.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bij(w),B.aw),w)}}
C.bij.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dkL[B.o.F(m,6)]
j=$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=k.gp(0)
h=i.G()
t.drawRect(A.bG(new A.a3(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aF(j.r,B.ag,null,null,i)
j=l+q
i.push(new A.aY(j,f))
i.push(new A.aq(l+o,r))
i.push(new A.aq(j,p))
i.push(new A.aq(l+s,r))
i.push(new A.bt())
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbv().a.snapshot()
t.drawPath((g.e=new A.cf(j)).a,h)
h.delete()}++m}},
av(d){return!1}}
C.tr.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.Pe,w,w,w,new C.bQu(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fii,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c5(w,D.Xt,A.p(w,A.bm(!0,A.x(A.a([D.c0Z,new A.D(D.bDU,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b5A,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.I_.prototype={
B(d){var w=null,v=this.d,u=C.aPV(v),t=C.icp(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.cI.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fkL,w,w,w)],x.p)
if(this.e)p.push(D.en3)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fS,w,w,w))
if(t!=null)p.push(new A.D(B.u9,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Am,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bE,w,w,w)}}
C.Vx.prototype={
R(){return new C.bl4(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cV9(d){return this.f.$1(d)},
ge1(){return this.d}}
C.bl4.prototype={
gSy(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a2()
this.Pe()},
Pe(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bRf(u.a.d),$async$Pe)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.daX[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bRe(p,(o===$?u.d=q.c:o).a,r),$async$Pe)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dYL(u,n))
return A.h(null,v)}})
return A.i($async$Pe,v)},
ua(d){return this.clT(d)},
clT(d){var w=0,v=A.j(x.H),u=this,t
var $async$ua=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a4(t,!1).cc(A.eh(new C.dYM(d),!1,null,x.H)),$async$ua)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pe()
return A.h(null,v)}})
return A.i($async$ua,v)},
gb4U(){var w,v,u,t=C.Mv(this.gSy()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)s.push(B.a.i(w[u].b))
return s},
a23(d){return this.ct4(d)},
ct4(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a23=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.L)(d),++s)r.push(d[s].ah())
w=2
return A.b(u.a.cV9(r),$async$a23)
case 2:if(u.c!=null)u.m(new C.dYN(u,r))
return A.h(null,v)}})
return A.i($async$a23,v)},
Ox(d){return this.bOV(d)},
bOV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ox=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h9o(t.gSy())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mf("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a4(s,!1).cc(A.eh(new C.dYJ(q),!1,null,r)),$async$Ox)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.L)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bh(j,new C.dYK(p))
o=s.length
B.d.c6(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a23(A.d_(s,0,A.dB(2,"count",x.S),r).dm(0)),$async$Ox)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ox,v)},
Xt(d,e){return this.bMx(0,e)},
bMx(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ck(null,null,!0,null,new C.dYI(e),o,null,!0,!0,x.y),$async$Xt)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h9o(u.gSy()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.L)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a23(o),$async$Xt)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xt,v)},
a9H(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dYF(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aX,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.UK,p,p,p),B.b2],s)
q=A.n(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fjb,p,p,p),B.f,p,p,new A.o(B.hN,p,p,q,p,p,B.n),p,p,p,p,B.BY,p,p,p))
return A.aA(p,A.db(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b2,A.d(e,p,2,p,p,p,p,D.fqR,p,p,p),B.cS,A.d(f,p,3,B.a1,p,p,p,D.fjT,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yl,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a3)},
WX(d,e,f,g,h,i){return this.a9H(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Mv(s.gSy()),p=s.gSy(),o=C.aPV(s.e),n=C.h9o(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dYO(s),k=C.hyK(p,1).length,j=C.hyW(p,1).length,i=C.hzQ(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.cI.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aa6,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fon,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bb,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.aa2,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pG,r,r,r),D.fMZ],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bE,r,r,r)
f=s.WX("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.dYP(s,p),l.$1("kahoot"))
h=s.WX("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lw,new C.dYQ(s,p),l.$1("fire"))
a0=s.WX("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.Bu,new C.dYR(s,p),l.$1("catch"))
j=j!==0?new C.dYU(s,p):r
j=s.a9H("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hf,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dYV(s,p):r
i=s.a9H("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l1,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.WX("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eN,new C.dYW(s,p),l.$1("journey"))
k=k!==0?new C.dYX(s,p):r
k=A.a([g,B.aQ,D.fQX,B.P,A.kP(0.98,A.a([f,h,a0,j,i,e,s.a9H("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ej,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.WX("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d2,new C.dYY(s,p),l.$1("school"))],a1),2,12,12,r,B.dS,!0),B.d4,A.B(A.a([D.bFC,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fjf,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.L)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aX,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fxM,B.bb,new A.bA(1,B.bd,A.x(A.a([new A.y(g,r,B.hr,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaoB(0).length+" questions \xb7 Kahoot style",r,B.Am,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaoB(0).length>=2){f=D.lx.j(0.2)
t=new A.ay(D.lx,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.X(B.hl,D.lx,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYZ(s,v,p),r,r,r,r,r,r,!1,B.a3))}if(s.a.e){f=B.cI.j(0.2)
t=new A.ay(B.cI,1,B.r,-1)
f=A.aA(r,A.p(r,A.X(B.iY,B.cI,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dZ_(s,v),r,r,r,r,r,r,!1,B.a3)
e=B.fa.j(0.2)
t=new A.ay(B.fa,1,B.r,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.aA(r,A.p(r,A.X(B.e9,B.fa,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dZ0(s,v),r,r,r,r,r,r,!1,B.a3)],a1))}k.push(A.p(r,new A.cd(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bH(u,u,u,u),new A.bh(h,h,h,h),r,r,B.n),r,r,r,B.d0,B.bg,r,r,r))}if(s.a.e){j=m?new C.dYS(s):new C.dYT(a2)
i=A.n(18)
h=A.K(m?B.cI:B.aX,B.r,2)
g=m?B.cI.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.as(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cI:B.aC,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Nk,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a3))}else if(i===0)k.push(D.fRS)
k.push(B.aA)
k.push(D.arf)
return new C.tr("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bzW,r,r,B.ah,!1),B.f1,r)}}
C.a_d.prototype={
a6(){return"_KPhase."+this.b}}
C.ale.prototype={
R(){return new C.alf(D.aYV)},
gd_(){return this.e}}
C.alf.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a1()},
h7(d){var w,v=this
v.m(new C.bQP(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dh(B.fB,new C.bQQ(v))},
aOB(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bQF(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dh(B.ft,new C.bQG(w))},
KJ(d){var w
if(this.d!==D.abu)return
w=this.at
if(w!=null)w.a4(0)
this.b4Q(d)},
b4Q(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bQL(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cG(B.rt,v.gkw(v))},
cHN(d){var w=this
if(w.d!==D.W2)return
if(w.e+1>=w.a.w.length)w.Yd()
else{w.m(new C.bQM(w))
w.aOB()}},
Yd(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bFp(p,u.w,t)
u.m(new C.bQI(u,s))
w=2
return A.b(C.Bu(u.a.e,s),$async$Yd)
case 2:r=e
t=u.a
w=3
return A.b(C.Bv(t.e,t.f,t.r,u.f),$async$Yd)
case 3:q=e
if(u.c!=null)u.m(new C.bQJ(u,r,q))
return A.h(null,v)}})
return A.i($async$Yd,v)},
cIz(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b7("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.dZ(r,q)
for(r=A.d_(r,0,A.dB(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bS(r,r.gL(0),u.k("bS<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b7(t,B.k.V(w*(0.35+q.af()*0.5)),!1))}B.d.aZ(v,new C.bQN())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aYV===r){w=A.a([D.fNn,B.W,A.d(s,t,t,t,t,t,t,B.Km,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fjn,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.x4,B.K,t,t))
w.push(B.dT)
w.push(C.uk("Play",u.geX(u),B.cI,B.hl,D.fq))
w=A.as(new A.D(B.eu,A.x(w,B.m,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.aYW===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.frm,t,t,t),t,t,t)
break A}if(D.abu===r||D.W2===r){w=u.cou()
break A}if(D.aYX===r){w=u.c9I()
break A}w=t}return new C.tr(s,w,B.f1,t)},
cou(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.W2,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aTk,j,j,j),B.b2],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Kj,j,j,j))
g.push(B.as)
f=A.n(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iu,j,j,j),B.f,j,j,new A.o(B.bC,j,j,f,j,j,B.n),j,j,j,j,B.Gj,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kx(B.bC,j,k.as<5?B.fa:B.cI,9,j,w,j),B.ap)
w=A.n(22)
v=A.K(B.cI,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lx:G.n9,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fir,B.K,j,j)],h),B.m,j,B.e,B.O,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.ftu,B.K,j,j)
w=A.E(A.p(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.q4,j,v,w,j,j,B.n),j,j,j,j,B.fl,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkw(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bQK(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aBf[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([new A.y(D.aBx[o],j,D.fkm,j,j,j,j,j,j,j,j,j),B.as,new A.bA(1,B.bd,new A.y(r[t],j,D.fjk,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.apM)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bTS)
v.push(A.aA(j,new A.Se(A.p(j,new A.cd(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bH(l,l,l,l),new A.bh(m,m,m,m),W.azH,j,B.n),j,j,j,j,B.eZ,j,j,j),p,B.b7,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a3))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.kP(1.45,v,2,10,10,j,B.dS,!1),4)],h)
if(i)h.push(D.emk)
return new A.D(B.a_k,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
c9I(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cIz(),m=x.p,l=A.a([D.b9q,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pG,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.UQ,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cI.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cI:B.bC,1,B.r,-1)
q=w<3?D.dd8[w]:""+(w+1)
s=s?B.u:B.U
l.push(A.p(o,new A.cd(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a5(34,o,new A.y(q,o,B.n0,o,o,o,o,o,o,o,o,o),o),new A.bA(1,B.bd,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iu,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bH(r,r,r,r),new A.bh(u,u,u,u),o,o,B.n),o,o,o,B.cu,B.eS,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.I_(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.as(C.uk("Back to the games",new C.bQH(p),B.cI,B.kl,D.fq),o,o,o))
return A.cl(l,o,o,B.fl,o,o,B.ah,!1)}}
C.Tb.prototype={
R(){return new C.alb(A.U(x.de,x.er))}}
C.alb.prototype={
gCK(){var w,v=this,u=v.d
if(u===$){w=C.heZ(v.a.c.ah())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gl3(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCK().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.ba(w,B.b4,B.aO),v)}return t},
ccl(d){return this.f.c3(0,d,new C.bQf(d))},
Z(){this.a2()
var w=this.gCK().c
if(w.length===0)w.push(C.h16(null,0,20,""))},
q(){var w,v,u=this.gl3(0)
u.T$=$.ax()
u.P$=0
for(u=this.f,u=new A.du(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gS(w)
v.T$=$.ax()
v.P$=0}this.a1()},
cHD(){if(this.gCK().c.length>=12)return
this.m(new C.bQg(this))},
jB(d){var w,v,u=this,t=u.gCK()
t.b=B.a.i(u.gl3(0).a.a)
w=t.gaoB(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.fbq)
return}v=t.c
B.d.aa(v)
B.d.v(v,w)
v=u.c
v.toString
A.a4(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bQq(),r=x.p,q=A.a([A.bN(!1,D.fCI,t,t,!0,t,t,t,u.gbok(u),t,t)],r),p=A.a([D.fRt,B.ae,A.aM(t,B.Y,!1,t,!0,B.t,t,A.aN(),u.gl3(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.aa,t,t,t,t,t,t,t,t,t,t,t,B.fS,!0,B.a4,t,B.an,t,t,t,t),B.aA],r)
for(w=0;v=u.gCK().c.length,w<v;++w)B.d.v(p,A.a([new A.fe(new C.bQp(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uk("\uff0b Add a question",u.gcHC(),B.aX,t,B.c),t,t,t))
return new C.tr("Make your game",A.cl(p,t,t,D.bzT,t,t,B.ah,!1),q,t)}}
C.aqf.prototype={
R(){return new C.aEn(A.a([],x._))},
bu(){return this.r.$0()},
qa(){return this.w.$0()},
ge1(){return this.c}}
C.aEn.prototype={
Z(){var w,v
this.a2()
this.w6()
w=this.a
v=w.c
if(v.length!==0)C.a7A(v,w.e,w.d.w)},
vX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hbU(r,t.e,!1,s.w,new C.e_q(u),null,s),$async$vX)
case 2:w=3
return A.b(u.w6(),$async$vX)
case 3:return A.h(null,v)}})
return A.i($async$vX,v)},
a0d(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hbU(r,t.e,!0,s.w,new C.e_p(u),null,s),$async$a0d)
case 2:w=3
return A.b(u.w6(),$async$a0d)
case 3:return A.h(null,v)}})
return A.i($async$a0d,v)},
w6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.B_(q.a.c),$async$w6)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.m(new C.e_s(q,p))
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
return A.b(C.GT(q.a.c).da(0,B.qd),$async$w6)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e_t(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e_u(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w6,v)},
OT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.fb0)
w=3
return A.b(C.GT(t.a.c),$async$OT)
case 3:r=e
w=4
return A.b(C.fRV(t.a.c,r),$async$OT)
case 4:q=e
w=5
return A.b(C.GT(t.a.c),$async$OT)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e_o(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dE:B.cW,null,B.t,null,s,null,B.mH,null,null,null,null,null,null,null,null,null,null))
t.a.qa()
case 1:return A.h(u,v)}})
return A.i($async$OT,v)},
Ic(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ic=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ikC(l),$async$Ic)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hOA(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0i(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ic)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hvo(r)
o=Date.now()
n=t.a.c
m=new C.kO(l,r.toUpperCase(),p,!0,B.Y,D.D3,new A.V(o,0,!1),0,n,D.ug,B.ca)
w=5
return A.b(C.a38(n,m),$async$Ic)
case 5:w=6
return A.b(t.w6(),$async$Ic)
case 6:t.a.bu()
t.a.qa()
if(t.c==null){w=1
break}t.EJ(m)
case 1:return A.h(u,v)}})
return A.i($async$Ic,v)},
EJ(d){return this.che(d)},
che(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.B_(u.a.c),$async$EJ)
case 2:n=l.pV(k.dI(f,new C.e_r(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hH(m,new C.aq9(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EJ)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a38(u.a.c,o),$async$EJ)
case 6:case 5:w=7
return A.b(u.w6(),$async$EJ)
case 7:u.a.qa()
return A.h(null,v)}})
return A.i($async$EJ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=new C.u7(p)
if(r.e)return A.as(A.n_(q,p?B.bt:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.e4:B.c
v=A.n(15)
u=A.aI(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bRy,B.f,q,q,new A.o(B.aW.j(0.12),q,A.K(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cO,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcgi(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FV(A.p(q,A.x(A.a([u,B.aQ,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bt:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dT,A.bI(D.fUI,q,r.gaRM(),A.bo(B.bP,q,q,q,q,q,Aw.a_J,q,new A.b8(A.n(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bCB,q,q,1/0),15,B.af,1.05,D.abg,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b2],v)
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.X(B.z7,B.aW,q,q,q,q),q,q,q,new C.e_w(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.X(B.z2,B.aW,q,q,q,q),q,q,q,r.gagm(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dl(E.aqG,D.fA3,r.gaRM(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.FV(r.cDU(J.r(r.d,s),o),14,B.af,1,D.abg,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cDU(d,e){var w=null,v=e.a,u=v?B.e4:B.c,t=A.n(14),s=A.K((v?B.e8:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.en,10)],x.V),q=A.n(14),p=A.p(w,D.bQC,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gapw(),m=d.d?"":" \xb7 Public",l=d.y===D.kL?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aI(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bE,A.B(A.a([p,B.bb,l,A.X(B.O8,v?B.bt:B.bm,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_v(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aq9.prototype={
R(){return new C.aEk(A.a([],x._),A.aX(x.N),A.b93())},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aEk.prototype={
Z(){var w,v,u=this
u.a2()
u.d=u.a.w
u.ad6()
w=u.a
v=w.c
if(v.length!==0)C.a7A(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.ax()
w.P$=0
this.a1()},
a3d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.y4("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZR(r),s,null,!0,!0,x.y),$async$a3d)
case 3:if(e!==!0||t.c==null){w=1
break}t.JK()
t.m(new C.dZS(t,r))
w=4
return A.b(t.u6(),$async$a3d)
case 4:t.a.bu()
t.y4(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3d,v)},
ctG(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dZM(w,f,d,e))},
aU1(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ef(w,v,0,1)
u.jX(q,q,1,1)
this.w.sp(0,u)},
bbp(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eL(new Float64Array(16))
q.e6(r)
w=q.CP()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ef(r,u,0,1)
t.jX(v,v,1,1)
t.ef(-r,-u,0,1)
t.iR(0,q)
s.sp(0,t)},
ad6(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ad6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.B_(u.a.c),$async$ad6)
case 2:t=s.pV(r.dI(e,new C.dZd(u)))
if(t!=null&&u.c!=null)u.m(new C.dZe(u,t))
return A.h(null,v)}})
return A.i($async$ad6,v)},
y4(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
vX(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hbU(o,t,!1,r,new C.dZv(u),q.a,s),$async$vX)
case 2:n=A
m=J
w=3
return A.b(C.GT(u.a.c),$async$vX)
case 3:p=n.pV(m.dI(e,new C.dZw(u)))
if(p!=null&&u.c!=null)u.m(new C.dZx(u,p))
return A.h(null,v)}})
return A.i($async$vX,v)},
JK(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
u6(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a38(t,s),$async$u6)
case 2:return A.h(null,v)}})
return A.i($async$u6,v)},
a1J(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ul(q,t.a.c)){t.y4("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ilM(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1J)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JK()
t.m(new C.dZL(t,r))
w=4
return A.b(t.u6(),$async$a1J)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1J,v)},
b1y(){var w=this.c
w.toString
A.a4(w,!1).cc(A.eh(new C.dZs(this),!1,null,x.H))},
a0r(){return this.chg()},
chg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.ul(m,t.a.c)){t.y4("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dZI(),A.T(s).k("Z<1>")).gL(0)
s=A.eE([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cs.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.dZJ(n,t,new C.u7(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0r)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JK()
t.m(new C.dZK(t,o))
w=6
return A.b(t.u6(),$async$a0r)
case 6:case 5:if(o.a&&t.c!=null)t.b1y()
case 1:return A.h(u,v)}})
return A.i($async$a0r,v)},
Wk(d){return this.bBD(d)},
bBD(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ul(r,t.a.c)){t.y4("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZ1(t,d),r,null,!0,!0,x.P),$async$Wk)
case 3:s=f
if(s==null){w=1
break}t.JK()
t.m(new C.dZ2(t,s))
w=4
return A.b(t.u6(),$async$Wk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wk,v)},
a3z(d){return this.cG3(d)},
cG3(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ck(null,null,!0,null,new C.dZU(u,d,new C.u7(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3z)
case 2:return A.h(null,v)}})
return A.i($async$a3z,v)},
cdy(d){var w=this,v=w.d
v===$&&A.c()
if(C.ul(v,w.a.c))w.Oy(d)
else w.a3z(d)},
aiP(d,e){return this.cxE(d,e)},
cxE(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.dZO(new C.u7(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aiP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiP,v)},
Ih(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ih=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kL?3:5
break
case 3:w=6
return A.b(C.h_m(t.a.c),$async$Ih)
case 6:s=e
o=t.a
r=C.hjM(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiP(!s,!r),$async$Ih)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQ3(o,t.a.c)){t.y4("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.li(o,"Cancel","Remove",q.y===D.kL?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ih)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQ_(t.a.c,t.d.a),$async$Ih)
case 11:t.a.bu()
o=t.c
if(o==null){w=1
break}A.iY(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ih,v)},
aaC(d){return this.bMO(d)},
bMO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ul(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dZ3(p))){o=A.T(s)
p.a=A.pV(new A.cQ(new A.Z(s,new C.dZ4(d),o.k("Z<1>")),new C.dZ5(),o.k("cQ<1,m>")))}q=p.a
if(q==null)q=d.d
t.JK()
t.m(new C.dZ6(t,s,d,q))
w=3
return A.b(t.u6(),$async$aaC)
case 3:t.y4(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaC,v)},
Oy(d){return this.bOZ(d)},
bOZ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ul(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3z(d),$async$Oy)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dZa(t,d),r,null,!0,!0,x.P),$async$Oy)
case 6:s=f
if(s==null){w=1
break}t.JK()
t.m(new C.dZb(t,s))
w=7
return A.b(t.u6(),$async$Oy)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
cEi(){var w=this,v=w.d
v===$&&A.c()
if(!C.ul(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dZT(w))
w.u6()},
Ze(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ze=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQ3(n,t.a.c)){t.y4("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.at,s)
q=t.d.e
p=A.bq(new A.N(q,t.gcc0(),A.T(q).k("N<1,m>")).c_(0,new C.dZn()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZo(t,new C.u7(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Ze)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JK()
t.m(new C.dZp(t,p))
w=4
return A.b(t.u6(),$async$Ze)
case 4:t.y4("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Ze,v)},
cc1(d){return B.a.i(d.toLowerCase())},
cg2(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ul(v,w)
t=r.d
s=C.iaS(t)
C.ikG(q,t.b,u,C.iaR(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u7(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.e_0(),A.T(l).k("Z<1>")).gL(0)
l=n?B.c1:B.iy
v=A.X(B.a0V,n?B.bt:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BO,A.aO(!1,o,!0,new A.D(B.hw,A.B(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e_1(p,d),o,o,o,o,o,o,o),o),new A.D(B.ns,p.c_b(m),o)],u)
if(p.d.y===D.kL){t=B.rS.j(0.15)
s=A.n(12)
r=A.K(B.rS.j(0.45),B.r,1)
q=C.GR(p.d,p.a.c)
v.push(new A.D(B.yo,A.p(o,A.B(A.a([D.bVZ,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iq,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b2],u)
if(C.ul(p.d,p.a.c)&&p.e.length!==0)u.push(new C.G5("Undo",B.pi,p.gcEh(),m,o,o))
u.push(new C.G5("Family Book",D.bLl,p.gcg1(),m,B.tK,o))
u.push(new C.G5("Family games",B.om,p.gcgd(),m,B.aD,o))
if(C.ul(p.d,p.a.c))u.push(new C.G5("Display settings",B.Cz,p.gchf(),m,B.b1,o))
u.push(new C.G5("Sync",B.z2,p.gagm(),m,o,o))
t=p.d
if(t.y===D.kL||C.aQ3(t,p.a.c)){t=p.d.y===D.kL?"Remove shared tree":"Delete tree"
u.push(new C.G5(t,B.e9,p.gbMY(),m,B.fa,o))}if(C.ul(p.d,p.a.c))u.push(new C.G5("Add member",B.wq,new C.e_2(p),m,B.bP,o))
v.push(new A.D(A_.akx,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gapw()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cv(new C.e_3(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a0Z:A7.O9,o,o,o,o,o)
v.push(A.as(A.hs(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e_4(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
c_b(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fM.j(0.35),B.dr,18)],x.V)
u=A.n(22)
t=A.ap(-26,A.X(B.yX,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.bZ6,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cO,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagm(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fln,m,m,m)
r=r.gapw()
p=n.d.gapw()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.ul(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bWb,m,m,m,n.gcr_(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jB:B.mO
r=r?"Private":"Public"
r=A.E(n.avY(q,"Privacy",r,n.a.d.w?n.gcDf():m),1)
q=A.E(n.avY(B.z3,"Tree code",n.d.c,new C.dZc(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.B(A.a([r,B.ad,q,B.ad,A.E(n.avY(D.bN_,"Collaborators",p,n.gc3R()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kL){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aI(!1,B.a2,!0,A.n(999),A.aO(!1,A.n(999),!0,new A.D(B.h5,A.B(A.a([A.X(B.pj,B.c,m,m,m,14),B.eg,A.d("View only",m,m,m,m,m,m,B.aTq,m,m,m)],o),B.m,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.ab,B.t,A.a([t,new A.D(B.Gm,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c2q,B.n),m,m,m,m,m,m,m,1/0)},
avY(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a2,!0,A.n(14),A.aO(!1,A.n(14),!0,new A.D(I.alH,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vi,A.d(f,w,1,B.a1,w,w,w,Ap.Aj,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bfN.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bfQ(s,t),new A.av(w,v))],x.p)
r=r.gdV(r)
B.d.v(u,r.dG(r,new C.ddu(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.ddv(this),A.T(r).k("N<1,v>")))
return new A.D(B.ud,new A.a5(w,v,new A.an(B.a_,t,B.ab,B.f,u,t),t),t)}}
C.Kp.prototype={}
C.G9.prototype={}
C.bfP.prototype={
gbjM(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aJY.prototype={}
C.bfQ.prototype={
bOC(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bB
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ag,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.l0(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.l0(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bt())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bD.gp(0)
d.aH(t,q)},
bOA(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.ddP())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b3(a0,new C.ddQ(f))
t=new A.N(a0,new C.ddR(f),A.T(a0).k("N<1,J>")).c_(0,new C.ddS()).cI(0,1/0,B.vG)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mV(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ag,null,null,h)
h.push(new A.aY(w,v-i))
l=j*i
h.push(new A.c4(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c4(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbv().a.snapshot()
r.drawPath((g.e=new A.cf(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bB
w.e=B.dQ
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bOA(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bOC(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bjD.prototype={
gc9K(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aBN
switch(w.c.a){case 0:return D.cVV
case 1:return D.d6W
case 2:return D.doC}},
gc9N(){var w=this.c,v=C.huH(w.w),u=C.huH(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=t.gc9K(),p=t.c,o=N.bDZ(p.f),n=t.gc9N(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tv(B.A,s,B.ci,B.bX,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hU(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.GC,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ap(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fvU,s,s,s),B.f,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bEz,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.n(8)
w=A.K(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dC,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.x(A.a([new A.an(B.a_,s,B.ab,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,D.b3M,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bEK,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a3)}}
C.beS.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bgw
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.bxw.prototype={
B(d){var w=this,v=null,u=new C.fiN(w),t=w.c,s=t?B.cr:B.c,r=A.n(12),q=u.$3(B.hQ,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bC:B.fi,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.z_,"Zoom out",w.e)
return A.aI(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bC:B.fi,v,v,v,1,v,v,v,v,v,22),u.$3(B.aoc,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.ai)}}
C.bmW.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.K(B.bP,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.X(s?O.a0Z:A7.O9,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fs1,v,v,v)],r),B.m,v,B.b9,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a3)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fpS,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eTJ(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_q.prototype={
R(){return new C.aCO()},
bu(){return this.Q.$0()},
ge1(){return this.w}}
C.aCO.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yC:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.icq(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.ax()
u.P$=0
u=v.e
u===$&&A.c()
u.T$=w
u.P$=0
u=v.f
u===$&&A.c()
u.T$=w
u.P$=0
u=v.r
u===$&&A.c()
u.T$=w
u.P$=0
u=v.w
u===$&&A.c()
u.T$=w
u.P$=0
u=v.x
u===$&&A.c()
u.T$=w
u.P$=0
v.a1()},
Q1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hjM(p.y,p.w)
w=3
return A.b(A.lu(t.a.w,B.J5),$async$Q1)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0i(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Q1)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hOB(p.y,p.w)
t.a.bu()
case 5:w=7
return A.b(Ay.H2(78,800),$async$Q1)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dtD(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Q1,v)},
c9M(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.yC,null,null,null,"","","","","",1,!1,0)
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
s=v.aEZ(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
aad(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aad=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dtC(r),s,null,!0,!0,x.y),$async$aad)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aad,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.J,i=new C.u7(j),h=l.a.e,g=A.T(h).k("Z<1>"),f=A.C(new A.Z(h,new C.dtM(l),g),g.k("M.E"))
h=j?B.e4:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bCY,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.he(A.aO(!1,k,!0,new A.D(B.m9,A.X(B.e9,B.p5,k,k,k,17),k),B.cO,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbJA(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jK:B.jd
t=N.bDZ(l.as)
if(l.as==null)s=A.X(B.pb,j?B.bt:B.bm,k,k,k,40)
else s=k
s=A.as(A.aA(k,new A.an(B.a_,k,B.ab,B.t,A.a([A.ha(u,t,s,k,42),A.ap(0,A.ha(B.bP,k,D.bPG,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc9J(),k,k,k,k,k,k,!1,B.a3),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCQ(t,"Full name",B.mL,1,1,i,B.mo)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bjB(i,u,new C.dtN(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bwo],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dtO(),A.T(o).k("N<1,ez<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bwq],q)
B.d.v(q,new A.N(f,new C.dtQ(),A.T(f).k("N<1,ez<m?>>")))
o=A.x(A.a([t,B.am,new C.adw(i,r,"Who is their parent?",p,new C.dtR(l),k,o),B.aA,n,B.am,new C.adw(i,m,"Who is their spouse / partner?",q,new C.dtS(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCQ(q,"Birth date",D.and,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCQ(m,"Birth place",B.a1d,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCQ(n,"Date of death (if deceased)",D.apt,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCQ(p,"Occupation",B.a2k,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aA,s,B.bx,new C.adx(i,"Identity",u,k),B.ae,new C.adx(i,"Family links",o,k),B.ae,new C.adx(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCQ(r,"Notes",B.lb,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ae,new C.aCP(i,"Child order",l.chu(l.at),new C.dtT(l),new C.dtU(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h9c(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dtV(l):k
B.d.v(r,A.a([B.W,new C.aCP(i,"Visible in tree",u,w,new C.dtW(l),k)],v))}r.push(B.W)
w=j?B.jK:B.jd
u=A.n(14)
t=A.K(j?B.e8:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iM(k,B.bP,k,B.af,k,new C.dtX(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.akb,k,k,k))
r.push(B.bx)
w=j?B.aP:B.av
j=j?B.e8:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nL,new C.dtP(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b8(A.n(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bI(D.f3c,k,l.gc9L(),A.bo(B.aW,k,k,0,B.c,k,B.cm,k,new A.b8(A.n(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.au)
return A.ep(B.f1,k,B.af,h,new A.a5(420,k,A.ch(A.x(r,B.ak,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.al0,k,B.ako,new A.b8(g,B.a0),k,k)},
chu(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adx.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jd,s=A.n(16)
return A.x(A.a([new A.D(D.alr,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.e8:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bg,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bjC.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e4:B.c,r=A.n(12),q=A.K((t?B.e8:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Y,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.eF,u,B.w1,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bt:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cz,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.aa,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adw.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e4:B.c,s=A.n(12),r=A.K((u?B.e8:B.bO).j(0.85),B.r,1),q=A.X(B.rC,u?B.bt:B.bm,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e4:B.c
return A.p(v,new A.DX(A.T2(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cz,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kj,v,v,v)}}
C.bjB.prototype={
B(d){var w=new C.dtY(this)
return A.B(A.a([w.$3(D.wa,"Male",B.OR),B.ad,w.$3(D.of,"Female",B.OD),B.ad,w.$3(D.yC,"Other",B.nw)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aCP.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jK:B.jd,r=A.n(14),q=A.K(t?B.e8:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJ_(u,B.z_,w.f,v),B.bn,new C.aJ_(u,B.hQ,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eB,v,v,v)}}
C.aJ_.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e4:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bP
else t=(s.c.a?B.bt:B.bm).j(0.4)
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.ady.prototype={
bSH(d){switch(d.a){case 0:return B.bP
case 1:return B.bD
case 2:return B.cY}},
bSI(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aYu(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ak(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e4:B.c
u=A.n(12)
t=A.K((w?B.e8:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bt:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.yk,p,p,1/0)},
aeN(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jd,s=A.n(16),r=A.K(v?B.e8:B.bO,B.r,1)
return A.x(A.a([new A.D(D.alr,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hzD(r,q),o=q.c,n=t.bSH(o),m=N.bDZ(q.f),l=t.e.a,k=l?B.e4:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kL?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bt:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.ha(u,m,m==null?A.X(B.pb,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bSI(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mI,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ak("Full name",i,B.mL)],u)
if(p>0)i.push(t.Ak("Child order","#"+p,B.OJ))
r=A.a([h,B.au,r,B.aQ,l,B.W,v,B.bx,t.aeN("Identity",i),B.ae,t.aeN("Life details",A.a([t.Ak("Birth date",q.w,D.and),t.Ak("Birth place",q.x,B.a1d),t.Ak("Date of death",q.y,D.apt),t.Ak("Occupation",q.z,B.a2k)],u)),B.ae,t.aeN("Family links",A.a([t.Ak("1. Parent",t.aYu(q.d),B.GQ),t.Ak("2. Spouse",t.aYu(q.e),B.H6)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ae,t.aeN("Notes",A.a([t.Ak("Notes",q,B.lb)],u))],u))
r.push(B.bx)
r.push(A.bI(B.Ks,s,new C.du7(d),A.bo(B.aW,s,s,s,s,s,B.cm,s,new A.b8(A.n(14),B.a0),s,s,s)))
return A.eT(s,k,new A.cT(B.lX,A.ch(A.x(r,B.ak,s,B.e,B.O,0,B.p),B.t,s,B.y,s,B.w5,s,s,B.ah),s),s,s,s,B.Gp,B.d8,s,new A.b8(j,B.a0),s)}}
C.G5.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bt:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.w8,A.he(A.aI(!1,B.a2,!0,A.n(8),A.aO(!1,A.n(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.aqc.prototype={
f_(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a8().ae())
w=u.c
v=A.T(w).k("N<1,a8<m,@>>")
w=A.C(new A.N(w,new C.cdc(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jk(w,new C.cdd(),t,x.fO))
return s}}
C.aqd.prototype={
R(){return new C.aEm(A.a([],x.bF))},
gd_(){return this.c}}
C.aEm.prototype={
Z(){this.a2()
this.JR()},
JR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cdg(t.a.c),$async$JR)
case 3:r=e
w=4
return A.b(C.B_(t.a.c),$async$JR)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rb(q,new C.e_d(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e_e(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JR,v)},
yC(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
KB(d,e){return this.cGJ(d,e)},
cGJ(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e_i(q,e))
t=3
w=6
return A.b(d.$0(),$async$KB)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e_j(q))
$.eX.mx()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KB,v)},
Y1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pm(r,s.c,s.e),$async$Y1)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_a(t),"Preparing download\u2026"),$async$Y1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y1,v)},
Y5(d){return this.bQC(d)},
bQC(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pm(r,s.c,s.e),$async$Y5)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_b(t,d),"Preparing file\u2026"),$async$Y5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y5,v)},
agJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xv.ca().Ms(B.RN,B.uh,!0),$async$agJ)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jF(o,0,null)
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
case 6:u=A.H1()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agJ,v)},
YI(d){return this.c06(d)},
c06(d){var w=0,v=A.j(x.H),u=this
var $async$YI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KB(new C.e_c(u,d),"Restoring family trees\u2026"),$async$YI)
case 2:return A.h(null,v)}})
return A.i($async$YI,v)},
YH(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agJ(),$async$YH)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YI(s),$async$YH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YH,v)},
a2B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pm(r,s.c,s.e),$async$a2B)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_h(t),"Creating QR code\u2026"),$async$a2B)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2B,v)},
a2c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dc()){t.yC("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cc(A.eh(new C.e_f(),!0,null,x.N)),$async$a2c)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YI(r),$async$a2c)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2c,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=o?B.Bd:B.iy,m=o?D.aiD:B.aP,l=o?B.aK:B.bO,k=o?B.aP:B.av,j=new C.ddT(n,m,l,k,o?B.bM:B.bm)
l=A.aH(p,p,p,p,A.X(B.eJ,k,p,p,p,20),p,p,p,new C.e_l(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eJ(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.ddr(!0,B.jD,B.aJ,B.aJ,q.r?p:q.gcxs(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gctB()
t.push(A.E(C.ddr(!s,B.ji,B.b6,B.br,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.ddr(!1,B.hR,B.aW,B.bP,q.r?p:q.gbQv(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.ddr(!1,R.z4,B.aB,B.aT,q.r?p:q.gc03(),j,s,"Upload backup file"),1))
l=A.a([new C.bfO(v,l,p),B.kU,new C.acO(j,"QR restore",p),B.W,t,B.d4,new C.acO(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kU,new C.acO(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.e_m(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a_G,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dr,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.p(p,A.B(A.a([O.aRS,B.bb,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BU,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a_,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.ddT.prototype={}
C.bfO.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.ks,28)],x.V)
t=A.ap(p,A.X(B.uD,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.ab,B.t,A.a([t,new A.D(B.aa,A.B(A.a([A.p(p,D.bYD,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oH,A.E(A.x(A.a([D.fB3,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c5F,B.n),p,p,p,p,p,p,p,p)}}
C.acO.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ad,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bfM.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aJ.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aJ.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aI(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eK(A.db(new A.D(E.a_i,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rz,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cz,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bfR.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aW.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eK(new A.D(B.eS,A.B(A.a([A.p(v,D.bXS,B.f,v,v,new A.o(q,v,A.K(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rz,v,v,v),B.bb,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hR,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a_L.prototype={
R(){return new C.aEl()},
gd_(){return this.c}}
C.aEl.prototype={
Z(){this.a2()
this.a9L()},
a9L(){var w=0,v=A.j(x.H),u=this,t
var $async$a9L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b2X(u.a.c,B.DG),$async$a9L)
case 2:t=e
if(u.c!=null)u.m(new C.e_5(u,t))
return A.h(null,v)}})
return A.i($async$a9L,v)},
ai6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ai6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e_6(q))
t=4
p=A.hls(q.a.d,B.DG)
if(p==null){n=A.be("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asw(n.e,m,l,B.DG,p,n.f),$async$ai6)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e_7(q))
q.c.K(x.q).f.U(D.fcd)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e_8(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ai6,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=p?B.ju:B.q5,n=p?B.ix:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eJ(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fRn,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.q2(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.b9,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.aa,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bs,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcti()
if(u)u=B.JX
else u=A.X(r.e===!0?B.hy:B.anc,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a5(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aW,q,B.h0,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aC:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a5(1/0,q,A.bI(B.Aq,q,new C.e_9(d),A.bo(B.aW,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.aa,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a_M.prototype={
R(){return new C.bl5(A.zz(B.y9,B.nR,B.uL))}}
C.bl5.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c5(A.eJ(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fJe,w,w,w,1,w,!0),B.w,A.zy(this.d,B.bX,new C.e_n(this,d)),w,!1,!1,w,w)}}
C.aZP.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Rg,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lP.prototype={}
C.a6F.prototype={
R(){return new C.bkM(null,null)}}
C.bkM.prototype={
Z(){var w=this,v=null
w.a2()
w.d=A.bn(v,B.rt,v,1,v,w)
w.e=A.bn(v,B.qc,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bz(d){var w,v,u=this
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
this.bx_()},
B(d){var w,v,u=this,t=B.d.dL(D.a5e,new C.dLI(u),new C.dLJ())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cA_(A.cb(new A.h8(A.a([w,v],x.dS)),new C.dLK(u,t),null),!0)}}
C.bkL.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b1Z(d,e)
break
case"house":p.m9(d,e,D.dbT)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdC()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.me(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B3(d,e,12)
p.ye(d,e,B.l3,5,14)
break
case"grocery":p.cid(d,e)
break
case"calculator":p.chV(d,e)
break
case"lumber":p.cil(d,e)
break
case"kitchen":p.cig(d,e)
break
case"landscape":p.m9(d,e,D.dct)
s=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c4(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c4(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bt())
w=A.I()
w.r=B.ej.j(0.85).gp(0)
d.aH(s,w)
p.B3(d,e,8)
p.ye(d,e,B.io,4,18)
break
case"plumbing":p.ciu(d,e)
break
case"electrical":p.m9(d,e,D.dnR)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aP(new A.a3(0,0,0+e.a,0+e.b),u)
p.me(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.me(d,e,B.m1.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B3(d,e,10)
break
case"store":p.ciE(d,e)
break
case"paint_remodel":p.cip(d,e)
break
case"roofing":p.ciw(d,e)
break
case"warehouse":p.ciL(d,e)
break
case"vehicles":p.ciJ(d,e)
break
case"farm":p.ci7(d,e)
break
case"restaurant":p.civ(d,e)
break
case"tools":p.ciH(d,e)
break
case"wallet":p.ciK(d,e)
break
case"concrete":p.ci0(d,e)
break
case"blueprint":p.chT(d,e)
break
default:p.b1Z(d,e)}},
m9(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.ay,B.aE,B.x,f,null,null).aA(0,v))
d.aP(v,w)},
me(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdC()/2-h
$.S()
w=A.I()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bY(q,p)
r=w.G()
v.drawArc.apply(v,[A.bG(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
ye(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdC()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B3(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b1Z(d,e){var w,v=this
v.m9(d,e,D.dmc)
w=v.c
v.me(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.me(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bOw(d,e,B.i_,w)
v.ye(d,e,B.c.j(0.7),6,8)},
bOw(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bG(new A.a3(16,q,t,q+3)),p)
p.delete()}},
cid(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m9(d,e,D.crh)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=D.da5[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.me(d,e,B.c.j(0.35),w,16)
j.ye(d,e,B.io,5,12)},
chV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m9(d,e,D.crp)
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
p=A.fx(g,g,g,g,g,B.a4,B.bY,g,B.dA,B.bW)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dec[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saY(0,new A.eu(r,g,g,B.cN,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ek()
p.a3(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.crr[o]
l=B.kC.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saY(0,new A.eu(m,g,g,B.cN,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ek()
p.a3(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.me(d,e,B.c.j(0.35),w*1.5,14)
h.me(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
h.me(d,e,B.xU.j(0.4),r*2.8,22)
h.ye(d,e,B.pV,8,10)
h.B3(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cil(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,W.ayZ)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bs(new A.a3(20,q,u,q+10),B.hE)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=A.ar(B.fU,B.oY,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.e6(p),n)
n.delete()}m.me(d,e,B.fU.j(0.35),w,15)
m.B3(d,e,8)},
cig(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m9(d,e,D.daA)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.me(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.ye(d,e,B.pS,4,14)},
ciu(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m9(d,e,D.cZT)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.ye(d,e,B.p3,6,12)
l.me(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ciE(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m9(d,e,D.cF2)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bs(new A.a3(q,14,q+u,22),B.id)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.fd,B.bL,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.e6(q),o)
o.delete()}n.me(d,e,B.c.j(0.3),w,16)
n.B3(d,e,8)
n.ye(d,e,B.vM,5,13)},
cip(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.d5a)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bs(new A.a3(q,p,q+8,p+(18+r*22)),B.hF)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=[B.ik,B.du,B.bL,B.es][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.e6(p),o)
o.delete()}this.me(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ciw(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.d2x)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.ye(d,e,B.cq,7,11)},
ciL(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.cHM)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bs(new A.a3(p,o,p+(t-r*8),o+16),B.hE)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.e6(o),n)
n.delete()}this.me(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ciJ(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.drY)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bs(new A.a3(r,q,r+28,q+8),B.hE)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.e6(q),o)
o.delete()}this.B3(d,e,6)},
ci7(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.d98)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.m1.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.hf.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.me(d,e,B.m1.j(0.35),w,14)},
civ(d,e){var w,v,u,t,s,r,q,p,o=this
o.m9(d,e,D.dbI)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bK(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bG(r),p)
p.delete()}o.ye(d,e,B.pS,5,16)
o.B3(d,e,7)},
ciH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,D.dpn)
w=m.c
v=w*3.141592653589793
m.me(d,e,B.oY.j(0.55),v*3,10)
m.me(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.oY.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ciK(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,D.dsE)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bs(new A.a3(p,o,p+36,o+22),B.id)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.io,B.m1,q).gp(0)
n=p.G()
s.drawRRect(A.e6(o),n)
n.delete()}m.B3(d,e,9)
m.me(d,e,B.c.j(0.4),w*2.2,12)},
ci0(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.dh4)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e3(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
chT(d,e){var w,v,u,t,s,r,q,p
this.m9(d,e,D.dcO)
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
u.r=B.du.j(0.45).gp(0)
d.aP(new A.a3(0,p,0+v,p+6),u)
this.me(d,e,B.l3.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.atf.prototype={
a_P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aQX(),$async$a_P)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8S(s),$async$a_P)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_P,v)},
agK(d){return this.cl1(d)},
cl1(d){var w=0,v=A.j(x.H),u=this,t
var $async$agK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ikQ(d),$async$agK)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agK,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jK:B.jd
w=x.p
v=A.a([C.aRl(!0,B.r4,1/0,B.qp,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bM(B.b0,t,t,new A.D(B.vY,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.U,t,t,!0,t,t,t,t,t,B.azX,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b0,B.b5,B.x,u,t,t),B.n),B.bh))}v.push(A.ap(8,A.B(A.a([A.E(A.dl(D.bRr,D.fxh,new C.clL(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jR,t,t,t,t,B.cc)),1),B.ad,A.E(A.ex(D.bZT,D.fMn,this.gcbZ(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jR,t,t,D.b2j,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fH(1.7777777777777777,A.aI(!1,B.a2,!0,B.r4,new A.an(B.a_,t,B.b3,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.ai),t)}}
C.aMp.prototype={
aU(){this.b1()
this.b0()
this.dI()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.aUm.prototype={}
C.aUl.prototype={}
C.aSj.prototype={}
C.Zo.prototype={
R(){return new C.azy()}}
C.azy.prototype={
Z(){var w,v,u=this
u.a2()
u.a.toString
w=new A.ba("",B.b4,B.aO)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kr(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.fcI)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aUm(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.J,l=m?B.e4:B.c,k=A.n(20),j=A.p(n,D.bZy,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bb,i,A.aH(n,n,n,n,A.X(B.cx,m?B.bt:B.bm,n,n,n,n),n,n,n,new C.d58(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cz,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hlI(new C.d59(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jK:B.jd
r=A.n(12)
q=A.n(12)
p=m?B.e8:B.bO
t=A.aM(n,B.Y,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d5a(o),n,!1,n,n,!1,n,!0,n,B.aa,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,A0.K3,n,n,n,n)
u=m?B.aP:B.av
m=m?B.e8:B.bO
return A.eT(n,l,new A.cT(B.lX,A.ch(A.x(A.a([j,B.aQ,i,B.au,w,B.P,v,B.aQ,t,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d5b(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b8(A.n(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bI(D.fMC,n,o.ga2X(),A.bo(B.aW,n,n,n,B.c,n,B.cm,n,new A.b8(A.n(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.O,0,B.p),B.t,n,B.y,n,B.BV,n,n,B.ah),n),n,n,n,A6.BW,B.d8,n,new A.b8(k,B.a0),n)}}
C.Zn.prototype={
R(){return new C.azx()}}
C.azx.prototype={
Z(){this.a2()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.at,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kr(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.fal)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aUl(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.J,o=p?B.e4:B.c,n=A.n(20),m=A.p(q,D.bW3,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bt:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bb,l,A.aH(q,q,q,q,A.X(B.cx,p?B.bt:B.bm,q,q,q,q),q,q,q,new C.d54(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aW.j(0.25),B.r,1)
u=A.X(B.amZ,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jK:B.jd
t=A.n(12)
s=A.n(12)
r=p?B.e8:B.bO
v=A.aM(q,B.Y,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d55(this),q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kV,q,q,q,q)
w=p?B.aP:B.av
p=p?B.e8:B.bO
return A.eT(q,o,new A.cT(B.lX,A.ch(A.x(A.a([m,B.aQ,l,B.aA,v,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d56(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b8(A.n(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bI(D.fTE,q,this.ga2X(),A.bo(B.bP,q,q,q,B.c,q,B.cm,q,new A.b8(A.n(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.BV,q,q,B.ah),q),q,q,q,A6.BW,B.d8,q,new A.b8(n,B.a0),q)}}
C.YV.prototype={
R(){return new C.ayd()}}
C.ayd.prototype={
Z(){var w,v=this
v.a2()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.at,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b4,B.aO),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.at,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.at,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.ax()
u.P$=0
u=v.e
u===$&&A.c()
u.T$=w
u.P$=0
u=v.f
u===$&&A.c()
u.T$=w
u.P$=0
u=v.r
u===$&&A.c()
u.T$=w
u.P$=0
v.a1()},
gJM(){var w,v=this.e
v===$&&A.c()
w=A.d4(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gajT(){var w=this.f
w===$&&A.c()
w=A.d4(B.a.i(w.a.a))
return w==null?0:w},
gb4L(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aPs(d){var w,v=B.k.E(this.gJM()+d,0.25,999999),u=B.k.jl(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saY(0,u)
this.m(new C.cDz())},
ayE(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jK:B.jd,s=A.n(14),r=A.n(14)
u=u?B.e8:B.bO
return A.br(w,new A.b5(4,s,B.dk),w,B.bE,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.n(14),B.acM),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cc_(d,e,f){return this.ayE(d,e,f,null)},
Kr(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajT()<=0){s.c.K(x.q).f.U(D.feA)
return}r=s.c
r.toString
v=s.gJM()
u=s.gajT()
t=s.gb4L()
A.a4(r,!1).O(new C.aSj(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u7(n),l=n?B.e4:B.c,k=A.n(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bPm,B.f,o,o,new A.o(o,o,A.K(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cz,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bb,h,A.aH(o,o,o,o,A.X(B.cx,n?B.bt:B.bm,o,o,o,o),o,o,o,new C.cDF(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Y,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ayE(m,"Item name (optional)","Lumber, paint, labor\u2026",B.OQ),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,A0.K3,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jK:B.jd
t=A.n(14)
s=A.K(n?B.e8:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.z_,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDG(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c0s,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDH(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.X(B.hQ,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDI(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.ayE(m,"Amount","0.00",B.i5),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDJ(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d5F,new C.cDK(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.ae,A.bX(B.bG,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.cc_(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cDL(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kV,o,o,o,o)],w))}i.push(B.aQ)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJM()===B.k.jl(p.gJM())?B.k.N(p.gJM()):p.gJM()
s=p.gb4L()
r=A.B1(p.gajT())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bEM(p.gJM()*p.gajT(),B.b1,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jh,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.e8:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b8(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cDM(d),h),1),B.as,A.E(A.dl(D.aqy,D.fPy,p.ga2X(),A.bo(B.aW,o,o,0,B.c,o,B.cm,o,new A.b8(A.n(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eT(o,l,new A.cT(A5.adb,A.ch(A.x(i,B.ak,o,B.e,B.O,0,B.p),B.t,o,B.y,o,Aj.ry,o,o,B.ah),o),o,o,o,B.Nz,B.d8,o,new A.b8(k,B.a0),o)}}
C.a1y.prototype={
R(){return new C.bxm()}}
C.bxm.prototype={
Z(){var w,v,u=this
u.a2()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b4,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=r?B.e4:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jK:B.jd
v=A.aM(s,B.Y,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b5(4,A.n(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fi6(t,d),s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.di,new C.fi7(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eT(s,q,new A.D(B.BV,A.x(A.a([o,B.aA,v,B.aQ,A.B(A.a([u,B.as,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fi8(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.O,0,B.p),s),s,s,s,s,B.d8,s,new A.b8(p,B.a0),s)}}
C.abS.prototype={
a6(){return"WorksheetFrameStyle."+this.b}}
C.FV.prototype={
R(){return new C.bxk(null,null)}}
C.bxk.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,D.bwY,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bzi()},
gbAO(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b1],x.O)
case 2:return A.a([B.bv,B.aW,B.b1],x.O)
case 3:return A.a([B.aJ,B.cf,B.kd],x.O)
case 4:return A.a([B.hg,B.bP,B.fh],x.O)
case 0:return A.a([B.aW,B.bP,B.b1],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.er(A.cb(v,new C.fi4(this,new C.u7(w.ax.a===B.J)),null),null)}}
C.ay6.prototype={
R(){return new C.bxl(null,null)}}
C.bxl.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,B.nm,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bzj()},
B(d){var w=this.d
w===$&&A.c()
return A.cb(w,new C.fi5(this),null)}}
C.bxj.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bs(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
u.D(new A.iT(v))
w=A.I()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.az(v,w)
w=A.I()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aH(u,w)
w=A.xt(u)
t=A.a([],x.U)
w=new A.tq(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jD(y.B));--r
q=new A.Bs(w,r)
w.io()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aSU(d,q,r,o,0,0.2,4.2,0.92)
p.aSU(d,q,r,s,0.52,0.11,3.2,0.58)}},
aSU(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hHJ(e.a.a,e,t,t+f*i,!0),r=A.bD7(s.gbv().a.getBounds())
$.S()
w=A.I()
w.b=B.a9
w.c=j
w.d=B.bB
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.I3,null).aA(0,r))
d.aH(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aOv.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.aOw.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.u7.prototype={}
C.ate.prototype={
R(){return new C.aFQ()},
ge1(){return this.c}}
C.aFQ.prototype={
Z(){var w=this
w.a2()
w.d=w.a.d
w.ahA()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LB(w,v)
this.a1()},
ahA(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bDf(t.c,t.d.a),$async$ahA)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eQT(u,s))
return A.h(null,v)}})
return A.i($async$ahA,v)},
Qs(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eQK(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LB(t,s),$async$Qs)
case 2:if(u.c!=null)u.m(new C.eQL(u))
return A.h(null,v)}})
return A.i($async$Qs,v)},
QZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.eQR(t,new C.u7(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$QZ)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8S(q),$async$QZ)
case 6:case 5:t.m(new C.eQS(t,r))
w=7
return A.b(t.Qs(),$async$QZ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QZ,v)},
We(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$We=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ikB(r),$async$We)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eQF(t,new C.rg(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Qs(),$async$We)
case 4:case 1:return A.h(u,v)}})
return A.i($async$We,v)},
ch4(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hzz(t,new C.eQJ(u),w,v)},
abx(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b25,w,w,B.n),w,22,w,w,w,w,w,22)},
aaB(d){return this.bML(d)},
bML(d){var w=0,v=A.j(x.H),u=this
var $async$aaB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eQI(u,d))
w=2
return A.b(u.Qs(),$async$aaB)
case 2:return A.h(null,v)}})
return A.i($async$aaB,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.J,e=f?B.c1:B.iy,d=A.n(8),a0=A.X(Z.a0W,f?B.bt:B.bm,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.Gw,A.B(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bt:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eQU(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b3,B.t,A.a([A.bx(A.n(22),C.aRl(!0,A.n(22),1/0,B.qp,g,d,1/0),B.ap),A.ap(10,A.dl(D.bU0,D.fRW,h.gb2H(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b8(A.n(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.eU,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b3,B.t,A.a([C.aRl(!0,A.n(16),1/0,B.Ok,g,r.c,1/0),A.c3(g,new A.o(g,g,g,g,g,new A.a9(B.b0,B.b5,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bh),A.ap(g,h.abx(!0),g,g,8,g,8,g),A.ap(g,A.cAK(h.abx(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cAK(h.abx(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cAK(h.abx(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dl(D.bPX,D.fLj,h.gb2H(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b8(A.n(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c29,B.n),g,g,g,g,B.m9,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bcP,B.o_,B.h3],u):A.a([B.b1,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.eU,24)],t)
r=A.n(22)
p=A.ap(g,A.X(B.jU,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h4,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bEM(h.d.gxe(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cz,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hi.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aJ.j(0.28),B.cH,14)],t)
j=B.aJ.j(0.22)
i=A.n(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.ab,B.t,A.a([p,new A.D(D.bBJ,A.B(A.a([o,B.as,A.aI(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eK(new A.D(V.w3,A.x(A.a([A.p(g,D.aq8,B.f,g,g,new A.o(j,g,A.K(B.aJ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.fG,D.fA6],a1),B.m,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gch3(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aQ,w,B.P,u,B.bx,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b2,A.dl(Av.a2I,D.fxX,h.gbBg(),A.bo(B.aW,g,g,g,B.c,g,B.iq,g,new A.b8(A.n(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.e4:B.c
v=A.n(14)
u=A.K(f?B.e8:B.bO,B.r,1)
t=A.X(B.a1g,f?B.bt:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bt:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qk,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eQV(h,new C.u7(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BK,A.as(A.n_(g,f?B.bt:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.BO,a0,g),A.E(A.ch(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yr,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bEW(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e4:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b4Q,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.i6:B.hm,B.b1,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcXd()
v=A.B1(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bt:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bEM(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.El(A.B(A.a([m,A.E(new A.D(B.ak4,A.B(A.a([l,B.bb,t,B.ad,k,A.aH(u,u,u,u,A.X(B.cx,(r?B.bt:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eQG(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b3I,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d0,u,u,u,u)}}
C.adT.prototype={
EE(d){return this.bO8(d)},
bO8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pm(d,o,!1),$async$EE)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bP(Ai.BI,null,x.H),$async$EE)
case 4:s=t.d
w=5
return A.b(C.fQK(!0,o,s),$async$EE)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GQ(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EE)
case 6:p=f
w=7
return A.b(A.pl(o,!1),$async$EE)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EE,v)},
a_R(d){return this.cxt(d)},
cxt(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pm(d,s,!1),$async$a_R)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hH(d,new C.at8(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pl(s,!1),$async$a_R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_R,v)},
Qt(d){return this.ctw(d)},
ctw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hH(d,D.aJC,!0,"NgmyWorksheetProjectScan",x.N),$async$Qt)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bEN(s),$async$Qt)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fdI)
w=1
break}q=C.hbx(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dV(p,x.H),$async$Qt)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qt,v)},
a_S(d){return this.cFA(d)},
cFA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bEj(),$async$a_S)
case 3:s=f
if(s==null){w=1
break}r=C.hbx(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dV(q,x.H),$async$a_S)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.J,t=new C.u7(u),s=w.d.d.length,r=u?B.e4:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.ks,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.w2,A.p(v,A.x(A.a([w.cw2(d,t,s),new A.D(D.bB7,A.x(A.a([w.b5H(t,"QR restore"),B.W,A.B(A.a([w.b0H(t,!0,B.jD,B.aJ,B.aJ,new C.eQX(w,d),"Show to scan","QR code"),B.as,w.ayF(t,B.ji,B.b6,B.br,new C.eQY(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b5H(t,"Backup files"),B.W,A.B(A.a([w.ayF(t,B.hR,B.aW,B.bP,new C.eQZ(w,d),"Full copy","Backup file"),B.as,w.ayF(t,R.z4,B.aB,B.aT,new C.eR_(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.O,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cw2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f7,B.cQ,B.fM],k):A.a([B.b1,B.aW,B.bP],k)
w=A.ap(l,A.X(B.uD,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kJ,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aRl(!0,A.n(13),64,D.bLe,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,D.aUt,l,l,l)
r=C.bEM(r.gxe(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.ab,B.t,A.a([w,new A.D(D.bBv,A.x(A.a([v,A.B(A.a([s,B.er,A.E(A.x(A.a([u,B.au,t,B.P,A.B(A.a([r,B.ad,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fP,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eQW(d),l,l,l,A.nO(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aRG,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b5H(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ad,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bt:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b0H(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.aiD:B.aP
if(e)w=B.aJ.j(o?0.45:0.35)
else{w=o?B.e8:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aJ.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rz,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eK(new A.D(E.a_i,A.x(A.a([t,B.ae,u,B.bF,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bt:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cz,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
ayF(d,e,f,g,h,i,j){return this.b0H(d,!1,e,f,g,h,i,j)}}
C.at8.prototype={
R(){return new C.bmr()}}
C.bmr.prototype={
Z(){this.a2()
this.afu()},
afu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bEO(p.c,p.d),$async$afu)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eQA(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eQB(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.J,f=g?B.Bd:B.iy,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eJ,g?B.ac:B.al,h,h,h,18),h,h,h,new C.eQC(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.N,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.Ad],u),B.m,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f7,B.cQ,B.fM],s):A.a([B.b1,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dd,B.K,h,h)
p=C.bEM(p.gxe(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ad,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fP,h,h,h)],u),B.m,h,B.b9,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a_F,h,h,1/0)
t=g?D.bnI:B.c
q=A.n(24)
p=A.K(w?B.aJ.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dr,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.UI,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.emo)
else{m=A.n(20)
l=A.K(B.aN,B.r,1)
o.push(A.p(h,A.q2(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aJ:B.aW
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aJ:B.aW).j(0.35),B.r,1)
k=w?B.Oy:B.P4
k=A.X(k,w?B.aJ:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iq,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(Af.NL,e,h),A.E(A.ch(A.x(A.a([s,B.aQ,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uf,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.alc,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.atd.prototype={
R(){return new C.aFP(A.zz(B.N2,B.nR,B.uL))}}
C.aFP.prototype={
q(){this.d.q()
this.a1()},
aNr(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iY(w,d)},
ccT(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.iit(t)
if(s!=null){this.aNr(s)
return}r=C.hqf(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aNr(B.a.i(B.a.b5(r,B.a.cu(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eJ(A.a([A.aH(t,t,t,t,A.X(u.f?B.ur:Aa.OF,t,t,t,t,t),t,t,t,new C.eQE(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Bd,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fLc,t,t,t,1,t,!0),q=A.zy(u.d,B.bX,u.gccS()),p=A.n(28)
p=A.as(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c5(r,B.w,new A.an(B.a_,t,B.b3,B.t,A.a([q,p,A.ap(32,A.p(t,D.fJZ,B.f,t,t,new A.o(w,t,A.K(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jh,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aKL.prototype={
a6(){return"_WorksheetTab."+this.b}}
C.Ou.prototype={
R(){return new C.aFR(D.ac3,A.a([],x.D))},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aFR.prototype={
gcDr(){return J.bFW(this.e,0,new C.eRm())},
Z(){this.a2()
$.aV.bZ$.push(this)
this.vW()},
q(){$.aV.hR(this)
this.a1()},
jg(d){if(d===B.fK)this.vW()},
vW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Db(q.a.c).da(0,B.ki),$async$vW)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eRi(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eRj(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vW,v)},
Ib(d){return this.bKT(d)},
bKS(){return this.Ib(null)},
bKT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ib=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ikD(l,d),$async$Ib)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.ly(l,r,q,D.dhi,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LB(t.a.c,p),$async$Ib)
case 4:o=f
w=5
return A.b(t.vW(),$async$Ib)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.faP)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.fcC)
else n.K(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EI(m)
case 1:return A.h(u,v)}})
return A.i($async$Ib,v)},
EI(d){return this.cgQ(d)},
cgQ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hH(s,new C.ate(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EI)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LB(u.a.c,t),$async$EI)
case 5:case 4:w=6
return A.b(u.vW(),$async$EI)
case 6:return A.h(null,v)}})
return A.i($async$EI,v)},
vJ(d){return this.c08(d)},
c08(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bEj(),$async$vJ)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hH(r,D.aJC,!0,"NgmyWorksheetProjectScan",x.N),$async$vJ)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bEN(q),$async$vJ)
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
break}p=C.hbx(s)
w=15
return A.b(C.LB(t.a.c,p),$async$vJ)
case 15:o=f
w=16
return A.b(t.vW(),$async$vJ)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.fcH)
w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EI(p)
case 1:return A.h(u,v)}})
return A.i($async$vJ,v)},
Oa(d){return this.bJx(d)},
bJx(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ck(null,null,!0,null,new C.eR3(d),s,null,!0,!0,x.y),$async$Oa)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oU(t.a.c,A.a([],x.D)),$async$Oa)
case 6:w=7
return A.b(t.vW(),$async$Oa)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.faU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
ch2(d){var w=this.c
w.toString
A.bV(B.L,null,new C.eRc(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b6i(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jK
else w=B.c
v=A.n(16)
u=A.K(p?B.e8:B.bO,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ae,t,B.bF,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bt:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.w1,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a0m(d,e){return this.cgR(d,e)},
cgR(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.eR7(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0m)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hzz(r,new C.eR8(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Oc(d,e),$async$a0m)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0m,v)},
b3j(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ax
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bt:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.BU,A.B(A.a([s,B.bb,t,A.X(B.eE,w?B.bt:B.bm,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cnL(d,e,f,g,h,i){return this.b3j(!1,d,e,f,g,h,i)},
Oc(d,e){return this.bJH(d,e)},
bJH(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.li(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Oc)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bD2(t.a.c,d.a),$async$Oc)
case 6:w=7
return A.b(t.vW(),$async$Oc)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=new C.u7(o),m=o?B.c1:B.iy
if(q.f)o=D.baD
else{w=q.bE3(n)
v=q.c_c(n)
u=q.gbBa()
if(o)t=B.jK
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ae,v,B.aQ,new C.FV(A.p(p,A.B(A.a([q.aCc(P.Oj,"Projects",n,D.ac3),q.aCc(B.wh,"Cashier",n,D.aZT),q.aCc(B.GQ,"Family Tree",n,D.htw)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bx],r)
w=q.d
if(w===D.ac3){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b2,new C.ay6(q.gaRG(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aA,q.cnN(n)],r))}else{o=q.a
if(w===D.aZT)u.push(new C.ap6(o.c,n,p))
else{w=q.r
u.push(new C.aqf(o.c,o.d,o.e,o.f,new C.eRp(q),new C.eRq(q),new A.bR(w,x.b4)))}}o=A.ch(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Al.NE,p,p,B.ah)}return A.c5(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bE3(d){var w=null,v=A.n(8),u=d.a,t=A.X(Z.a0W,u?B.bt:B.bm,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kK,A.B(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bt:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eR0(this),w,w,w,w,w,w,w)},
gbBa(){switch(this.d.a){case 0:return D.abf
case 1:return D.hiw
case 2:return D.abg}},
c_c(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cy,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bVU,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bb,D.bFZ,A.aI(!1,B.a2,!0,w,A.aO(!1,A.n(12),!0,A.p(w,D.bTj,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eR4(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b1.j(0.55),q=A.n(12)
return new C.FV(A.p(w,A.x(A.a([new A.D(E.a_o,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.B1(this.gcDr()),w,w,w,w,w,w,D.fub,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.ub,B.jh,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hiv,w)},
aCc(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aW:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bt:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bt:B.bm
return A.E(A.aI(!1,B.a2,!0,u,A.aO(!1,s,!0,A.da(u,A.B(A.a([w,B.eg,new A.ds(1,B.cp,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.i,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iC,u,u,u,u,B.Gx,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eRl(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cnN(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.e4:B.c
u=A.n(15)
t=A.p(p,D.bTp,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.eU,28)],x.V),D.c4E,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FV(A.p(p,A.x(A.a([t,B.d4,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bt:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dT,A.B(A.a([A.E(q.aTf(B.ji,"Scan QR",new C.eRf(q),d),1),B.as,A.E(q.aTf(R.z4,"Upload file",new C.eRg(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aA,A.bI(D.fVD,p,q.gaRG(),A.bo(B.aW,p,p,p,B.c,B.h0,p,p,new A.b8(A.n(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bCA,1.05,D.abf,p)}w=J.b6(q.e,new C.eRh(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FV(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bT,1,D.abf,p)},
aTf(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aW.j(0.45),B.r,1)
return A.aI(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fsu,B.K,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ajY,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cnM(d,e){var w,v,u=null,t=e.a,s=t?B.e4:B.c,r=A.n(14),q=A.K(t?B.e8:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.en,10)],x.V),o=A.n(14),n=t?B.bt:B.bm
n=A.bx(B.WM,new A.fH(1.7777777777777777,C.aRl(!0,B.fL,1/0,P.Oj,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.B1(d.gxe()),u,u,u,u,u,u,D.fqr,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aI(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bE,A.B(A.a([v,A.aH(u,u,u,u,A.X(Am.a1V,t?B.bt:B.bm,u,u,u,u),u,u,u,new C.eRd(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eRe(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ec,u,u,u,1/0)}}
C.bz7.prototype={}
C.rg.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcXd(){var w,v,u,t,s=this.c
if(s===B.k.jl(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.ly.prototype={
gxe(){return B.d.cI(this.d,0,new C.cCZ())},
ah(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.cCY(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bdz(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.ly(w.a,w.b,v,u,w.e)},
bdh(d){return this.bdz(d,null)},
Tc(d){return this.bdz(null,d)}}
C.HZ.prototype={
a6(){return"FamilyGender."+this.b}}
C.hV.prototype={
ah(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.hve(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aEZ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alk.prototype={
a6(){return"FamilyTreeAccessRole."+this.b}}
C.kO.prototype={
gapw(){var w=this.f
return new A.Z(w,new C.bRk(),A.T(w).k("Z<1>")).gL(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.bRj(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iaQ(w.y),"games",w.z],x.N,x.z)},
wA(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kO(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bdy(d,e){var w=null
return this.wA(w,w,w,d,e,w,w,w,w)},
cMF(d,e,f,g,h,i,j){return this.wA(d,e,null,f,g,h,i,j,null)},
aF3(d,e){var w=null
return this.wA(w,w,w,w,d,w,w,e,w)},
cMH(d,e,f,g,h,i,j,k){return this.wA(d,e,null,f,g,h,i,j,k)},
cL9(d){var w=null
return this.wA(w,w,w,w,w,w,w,d,w)},
cLx(d){var w=null
return this.wA(w,w,w,w,w,w,w,w,d)},
bdb(d){var w=null
return this.wA(w,w,d,w,w,w,w,w,w)},
aEP(d){var w=null
return this.wA(w,w,w,w,w,d,w,w,w)},
cMb(d,e,f){var w=null
return this.wA(w,d,w,w,e,w,w,f,w)},
cKX(d){var w=null
return this.wA(w,w,w,d,w,w,w,w,w)},
cLK(d,e){var w=null
return this.wA(d,w,w,w,w,w,e,w,w)}}
C.cD_.prototype={
a6(){return"WrapAlignment."+this.b}}
C.cD0.prototype={
a6(){return"WrapCrossAlignment."+this.b}}
C.aHW.prototype={}
C.b9W.prototype={
bw(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b9W()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b9V.prototype={
gws(){return!0},
gGg(){return this.z.b<this.b.length},
aUT(d){switch(0){case 0:return d.a.c}},
aUA(d){switch(0){case 0:return d.a.d}},
bTB(d,e){switch(0){case 0:return new A.hR(d,e)}},
bSZ(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hc(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iK(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HK(b4)
switch(0){case 0:v=b5.b
u=new A.kL(0,v,0,1/0)
t=w===B.Uz
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fL(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.hc(b4,u,!0)
f=b1.aUT(g)
f.toString
e=b1.aUA(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHW(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHW(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hR(m,l))
a0=q.a
a1=q.b
b1.a=new A.iK(0,0,a0,a1)
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
for(q=B.d.fL(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aUT(g)
e=b1.aUA(g)
e.toString
a9=b1.bSZ(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bTB(a6,a3+a9)
b0=g.a
g.a=new A.iK(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h6(d){var w,v,u,t,s,r=this
r.lt(d)
w=d.b
w.ij()
v=A.dr()
u=r.a
v.ef(u.a,u.b,0,1)
w.pc(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h6(d)
w.nt(0)},
GJ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ij(){return this.z}}
C.bxn.prototype={}
var z=a.updateTypes(["aB<~>()","R(hV)","~()","R(kO)","R(nq)","a8<m,@>(kO)","G(kO,kO)","G(hV,hV)","m(hV)","kO(a8<@,@>)","R(ly)","nq(a8<@,@>)","a8<m,@>(nq)","R(uD)","uD()","G(hV)","ai<hV>()","R(zg)","a_q(Y)","m?(hV)","ez<m?>(hV)","aB<~>(ly)","R(rg)","a8<m,@>(hV)","hV(a8<@,@>)","G(ly,ly)","R(afb)","~(bb)","v(ow)","G(G,a9k)","R(qB<G>)","~(qB<G>)","Tb(Y)","R(Mf)","R(uC)","~(hV)","m(m)","Vx(Y)","Ta(Y)","ady(Y)","Zm(Y)","hV(hV)","cN(bz<m,G9>)","cN(Kp)","ZQ(Y)","G?(hV)","hV()","R(Kp)","D(hV)","~(HZ)","ZM(Y)","v(HZ,m,a0)","R(af4)","bz<m,ai<a8<m,@>>>(m,ai<nq>)","ZO(Y)","+count,id,name(G,m,m)(kO)","m(kO)","a_L(Y)","a_M(Y)","R(lP)","lP()","YV(Y)","a1y(Y)","Zo(Y)","Zn(Y)","~(G)","~(m,ln?)","v(rg)","adT(Y)","~(md)","aB<~>([m?])","J(J,ly)","v(ly)","J(J,rg)","a8<m,@>(rg)","rg(a8<@,@>)","ai<ln>()","uC()","m(V)","ly(a8<@,@>)","cu(HY)","m(ly)","a8<m,@>(ly)","G(nq,nq)","kO(a8<m,@>)","kO(kO)"])
C.fJk.prototype={
$1(d){return d.a+" "+d.b},
$S:122}
C.fJj.prototype={
bmI(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r8(s,d,B.hS,"book",E.Ga),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.Lp(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bmI(d)},
$S:316}
C.fJl.prototype={
$1(d){return d.b},
$S:122}
C.fSO.prototype={
$1(d){var w=null
return A.eT(w,B.L,new H.PS(this.a,this.b,w),w,w,0,B.a_j,B.d8,w,w,w)},
$S:49}
C.fxf.prototype={
$1(d){return d!=null},
$S:220}
C.fxg.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:220}
C.fxl.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:175}
C.fH3.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fd(d,w,w,w,A.hd(w,B.t1,w,w,w,w,w,w,w,B.dx,w,w,10.5,w,B.ew,w,!0,w,w,w,w),w),u=f?B.ew:B.wb
return new A.nZ(D.by1,A.aa8(A.a([new A.fW(130,w,v),new A.zf(1,B.GJ,A.fd(e,w,w,w,A.hd(w,g==null?D.eoM:g,w,w,w,w,w,w,w,B.dx,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.y5,B.lN))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1937}
C.fH2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vM(999)
f=A.xk(A.lK(h,A.fd("Cashier",h,h,h,A.hd(h,D.zZ,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),h,new A.kM(D.eoD,h,f,B.hV,h),h,h,D.byw,h))
w=A.xk(A.fd("Debt receipt",h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,22,h,B.ew,h,!0,h,h,h,h),h))
v=A.xk(A.fd(C.x2(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9L,h))
u=A.vM(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fd(s,h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,h,h,h,h),h)
r=A.fd("Person who owes",h,h,h,D.a9L,h)
q=A.vM(10)
p=x.Z
u=A.lK(h,A.z9(A.a([s,new A.fW(h,2,h),r,new A.fW(h,10,h),A.lK(h,A.z9(A.a([A.fd("Amount owed",h,h,h,D.a9L,h),new A.fW(h,2,h),A.fd(A.B1(t.c),h,h,h,A.hd(h,D.zZ,h,h,h,h,h,h,h,B.dx,h,h,20,h,B.ew,h,!0,h,h,h,h),h)],p),B.rq,B.lN),h,new A.kM(B.pv,h,q,B.hV,h),h,h,D.bxI,1/0)],p),B.rq,B.lN),h,new A.kM(E.aKX,h,u,B.hV,h),h,h,D.bzD,1/0)
q=new A.nI(D.eoG,0.9,B.kZ)
r=A.vM(12)
s=i.c
o=s.$2("Original due",C.x2(t.r,!1))
n=s.$2("Current due",C.x2(t.f,!1))
m=i.d
l=new A.nI(m,1.1,B.kZ)
k=A.vM(8)
j=i.a
k=A.a([o,n,new A.fW(h,6,h),A.lK(h,A.xk(A.fd(t.gaLX(),h,h,h,A.hd(h,m,h,h,h,h,h,h,h,B.dx,h,h,11,h,B.ew,h,!0,0.5,h,h,h),h)),h,new A.kM(h,new A.pN(l,l,l,l),k,B.hV,h),h,h,D.byE,1/0),new A.fW(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zZ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zZ))
else{n=A.fd("Missed days ("+n+")",h,h,h,A.hd(h,B.t1,h,h,h,h,h,h,h,B.dx,h,h,10.5,h,B.ew,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SK>")
o=A.C(new A.N(o,new C.fH1(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fW(h,4,h),n,new A.fW(h,6,h),new C.b9V(5,5,new C.b9W(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fW(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fW(h,8,h),w,new A.fW(h,3,h),v,new A.fW(h,16,h),u,new A.fW(h,10,h),A.lK(h,A.z9(k,B.y5,B.lN),h,new A.kM(h,new A.pN(q,q,q,q),r,B.hV,h),h,h,B.ak8,1/0)],p)
w=j.a
if(w!=null){v=new A.nI(B.Jk,1,B.kZ)
B.d.v(f,A.a([new A.fW(h,16,h),A.fd("Debtor signature",h,h,h,A.hd(h,B.t1,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),new A.fW(h,6,h),A.lK(h,new A.Ig(w,B.WW,h,h),h,new A.kM(h,new A.pN(v,v,v,v),A.vM(6),B.hV,h),82,h,B.NJ,1/0)],p))}f.push(new A.fW(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fd(w,h,h,h,D.fiW,h))
f.push(new A.fW(h,18,h))
f.push(A.xk(A.fd("NGMY.ORG",h,h,h,A.hd(h,D.zZ,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,1.8,h,h,h),h)))
return f},
$S:426}
C.fH1.prototype={
$1(d){var w=null,v=new A.nI(D.Jl,0.7,B.kZ),u=A.vM(999)
return A.lK(w,A.fd(C.x2(d,!1),w,w,w,A.hd(w,D.Jl,w,w,w,w,w,w,w,B.dx,w,w,9.5,w,B.ew,w,!0,w,w,w,w),w),w,new A.kM(w,new A.pN(v,v,v,v),u,B.hV,w),w,w,D.bE0,w)},
$S:1938}
C.c6y.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.K(B.bz.j(0.28),B.r,1)
return A.p(w,A.d(C.x2(d,!1),w,w,w,w,w,w,D.fpW,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1939}
C.fTk.prototype={
$1(d){var w=null,v=A.aG(d,B.bZ,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bWQ,w,w,w,new C.fTh(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eT(w,B.L,new A.cT(new A.aZ(0,380,0,v.a.b*0.9),A.aI(!1,B.a2,!0,u,new A.D(B.a_7,A.x(A.a([new A.bM(B.a8,w,w,t,w),new A.ds(1,B.cp,A.ch(A.x(A.a([new A.er(new C.aZR(r,w),s),B.W,A.B(A.a([A.E(A.ex(B.zc,D.fRR,new C.fTi(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.ff,w,new A.b8(A.n(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ad,A.E(A.dl(B.a2y,D.fOg,new C.fTj(r,d),A.bo(B.b1,w,w,w,B.c,w,B.ff,w,new A.b8(A.n(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.O,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Ar.a_x,B.d8,w,w,w)},
$S:49}
C.fTh.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fTi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eS(B.dK.gaR(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.ar(o,0,32)
w=5
return A.b(A.ta(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fNF(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTc.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eT(w,B.av,A.x(A.a([new A.D(D.bzr,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n1,w,w,w),1),A.aH(w,w,w,w,B.lf,w,w,w,new C.fTa(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.ds(1,B.cp,new A.D(B.eZ,A.bx(A.n(14),A.fT(t,B.A,w,w,B.ci,B.dz,!1,w,!1,w,w),B.ap),w),w),new A.D(B.Nn,new A.a5(1/0,w,A.dl(B.oq,D.aUV,new C.fTb(t,this.c,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b8(A.n(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.O,0,B.p),w,w,w,B.NA,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fTa.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fTb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ta(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTo.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eT(w,B.av,new A.D(D.bzz,A.x(A.a([A.B(A.a([D.bF4,A.aH(w,w,w,w,B.lf,w,w,w,new C.fTm(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.P,new A.er(A.bx(A.n(14),A.p(w,A.b4(w,w,w,new C.bc4(s.ax,w),B.aw),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a5(1/0,w,A.dl(B.oq,D.aUV,new C.fTn(t,s,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b8(A.n(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.O,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fTm.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fTn.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.ar(p,0,32)
r=J.eS(B.dK.gaR(s))
w=5
return A.b(A.ta(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fBA.prototype={
$1(d){return d.a===this.a},
$S:248}
C.dMA.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dMl.prototype={
blW(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e4:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dMo(s,q,e),p,!0,!0,!1,B.JB,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dMp(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.blW(d,e)},
$S:1940}
C.dMo.prototype={
$1(d){var w,v=null,u=this.c===B.wK,t=u?D.do6:D.djI
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.akF,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bt:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.io(!0,v,v,B.y,D.f9v,new C.dMn(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ak,v,B.e,B.O,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:27}
C.dMn.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cQ.j(0.14)
else w=t.b.a.d.a?B.N:B.aP
v=A.n(14)
if(q)u=B.cQ
else u=(t.b.a.d.a?B.bt:B.bm).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.aZQ(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dMm(t.d,r),s,s,s,s,s,s,s)},
$S:197}
C.dMm.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dMp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dMj.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:93}
C.dMk.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cK(B.ct,e,v)
return new A.d1(e,!1,A.iu(B.A,A.as(A.aI(!1,B.a2,!0,v,new A.e0(new C.dMi(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bg(t,new A.bp(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:33}
C.dMi.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e4:B.c,f=A.n(14),e=A.K((h?B.bt:B.bm).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.ev,A.X(B.cx,i.a.d.a?B.bt:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dM3(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aTM("Name")
r=l.a
q=r.d==null?k:new C.dM4(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bo:B.m3
n=A.K(B.cQ.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Y,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.bdr(new A.D(B.fu,A.aO(!1,p,!0,A.p(B.A,C.aZQ(m==null?"\ud83d\udc64":A.fHS(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kV,k,B.a9A,k,k)
v=A.a([v,B.ae,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aUq("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dM5(r,a0),r.d===B.wK),1),B.ad,A.E(i.aUq("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dMa(r,a0),r.d===B.a6p),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bM(B.a5,k,k,A.hs(D.bV8,D.fQ9,new C.dMb(r,l.e,a0),A.fw(k,k,k,k,k,k,k,k,k,k,k,B.cQ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uG(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aTN("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.N:B.aP
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bt:B.bm).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.x2(r.a,!1)
v.push(A.aI(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bRR],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dMc(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aTM("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b1I(r.b.length!==0,B.mL,new C.dMd(r,i,a0),new C.dMe(r,a0),"Upload from gallery","ID photo"))
v.push(i.b1I(r.c.length!==0,D.bLc,new C.dMf(r,i,d,a0),new C.dMg(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Aq.a7Y("Signature (optional)",t,new C.dMh(a0),new C.dM6(a0,t),new C.dM7(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bt:B.bm
s=(i?B.bt:B.bm).j(0.28)
s=A.E(A.dT(E.aUO,new C.dM8(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.u7,k,new A.b8(A.n(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cQ,k,k,k,B.c,k,B.u7,k,new A.b8(A.n(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ad,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vl,k,k,k),k,new C.dM9(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.ch(A.x(v,B.ak,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rx,B.jh,k,k,360)},
$S:162}
C.dM3.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dM4.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dM5.prototype={
$0(){return this.b.$1(new C.dM2(this.a))},
$S:0}
C.dM2.prototype={
$0(){var w=this.a
w.d=B.wK
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dMa.prototype={
$0(){return this.b.$1(new C.dM1(this.a))},
$S:0}
C.dM1.prototype={
$0(){var w=this.a
w.d=B.a6p
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dMb.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dMc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.x6(null,u.b,A.c6(2020,1,1,0,0,0,0,0),null,s,A.c6(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dM0(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dM0.prototype={
$0(){var w=this.b
return this.a.a=A.c6(w.gck(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dMd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PN(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dM_(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dM_.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dMe.prototype={
$0(){return this.b.$1(new C.dLZ(this.a))},
$S:0}
C.dLZ.prototype={
$0(){return this.a.b=""},
$S:0}
C.dMf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e4:B.c
w=3
return A.b(A.bV(q,null,new C.dLX(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PN(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dLY(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLX.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aq_,w,w,w,w,new C.dLR(d),!1,w,w,w,w,w,w,w,D.fGj,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.apY,w,w,w,w,new C.dLS(d),!1,w,w,w,w,w,w,w,D.fNi,w,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),!0,!1,B.af,!0,!0)},
$S:27}
C.dLR.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dLS.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dLY.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dMg.prototype={
$0(){return this.b.$1(new C.dLW(this.a))},
$S:0}
C.dLW.prototype={
$0(){return this.a.c=""},
$S:0}
C.dMh.prototype={
$0(){return this.a.$1(new C.dLV())},
$S:0}
C.dLV.prototype={
$0(){},
$S:0}
C.dM6.prototype={
$0(){return this.a.$1(new C.dLU(this.b))},
$S:0}
C.dLU.prototype={
$0(){return B.d.aa(this.a)},
$S:0}
C.dM7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ai6(u.a,null,null,new C.dLT(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLT.prototype={
$4(d,e,f,g){this.a.$1(new C.dLQ(this.b,d))},
$S:435}
C.dLQ.prototype={
$0(){var w=this.a
B.d.aa(w)
B.d.v(w,this.b)},
$S:0}
C.dM8.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dM9.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.fez)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.fbs)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dMD.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:93}
C.dME.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e4:B.c,n=A.n(14),m=A.K((p?B.bt:B.bm).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.B1(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bt:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zf(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zf(r).length>0?B.bz:B.cQ,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bt:B.bm
t=(q?B.bt:B.bm).j(0.28)
s=x.p
return new A.d1(e,!1,A.as(A.aI(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aA,A.B(A.a([A.E(A.dT(B.nL,new C.dMB(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jR,r,new A.b8(A.n(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ad,A.E(A.bI(D.fNI,r,new C.dMC(d),A.bo(B.cQ,r,r,r,B.c,r,B.jR,r,new A.b8(A.n(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.BX,E.a_o,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:33}
C.dMB.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dMC.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dMx.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dMy(r),p=r.a.d.a,o=p?B.e4:B.c,n=A.n(14),m=A.K((p?B.bt:B.bm).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.B1(l.c),s,s,s,s,s,s,D.frv,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iH((r.a.d.a?B.bt:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1g,"View receipt",new C.dMq(r,d,l))
u=l.x!=null
t=u?B.pi:B.qs
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bzw,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dMr(r,d,l)),q.$3$icon$label$onTap(B.C8,"Edit",new C.dMs(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mL,"View / download ID",new C.dMt(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bLb,"View / download selfie",new C.dMu(r,d,l)))
if(l.gaGI())p.push(q.$3$icon$label$onTap(Ae.a2o,"View / download signature",new C.dMv(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e9,"Delete",new C.dMw(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.ub,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:27}
C.dMy.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eS,A.B(A.a([A.X(e,w,v,v,v,20),B.bb,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1941}
C.dMq.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fTg(w,this.c)},
$S:0}
C.dMr.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Sx(this.c)},
$S:0}
C.dMs.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Dk(this.c)},
$S:0}
C.dMt.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bF8(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dMu.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bF8(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dMv.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fTl(w,this.c)},
$S:0}
C.dMw.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.PM(0,this.c)},
$S:0}
C.dMF.prototype={
$1(d){return d.x==null},
$S:248}
C.dMG.prototype={
$1(d){return d.x!=null},
$S:248}
C.dMH.prototype={
$2(d,e){return d+e.c},
$S:1942}
C.dMI.prototype={
$0(){return this.a.bBF()},
$S:0}
C.dMz.prototype={
$0(){return this.a.afH(this.b)},
$S:0}
C.fCd.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fCe.prototype={
$0(){return B.d.gI(D.a3J)},
$S:z+77}
C.dcq.prototype={
$0(){var w=this.a
return w.m(new C.dco(w,this.b))},
$S:0}
C.dco.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dcp.prototype={
$0(){},
$S:0}
C.dcr.prototype={
$0(){var w=this.a.gc_X()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fEB.prototype={
$1(d){return C.hfM(A.a2(d,x.N,x.z))},
$S:z+11}
C.fEC.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fED.prototype={
$2(d,e){var w=A.cc(d.a,null),v=A.cc(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+83}
C.fRU.prototype={
$1(d){return d.ah()},
$S:z+12}
C.h_f.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fBr.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bQ1.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1943}
C.fSs.prototype={
$1(d){var w=this
return new C.ZO(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dd5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dd4(w,d))},
$S:z+80}
C.dd4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcU.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dcR.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dcs.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dct.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dcV.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dcB.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.J,u=v?B.e4:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dcz(d),w,w),A.bI(B.x6,w,new C.dcA(d),A.bo(B.nb,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.dcz.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dcA.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dcC.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dcS.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dcT.prototype={
$0(){return B.d.gI(D.zo)},
$S:z+14}
C.dcx.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyB(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ta(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dcy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcD.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Zm(v,u,J.ad(w.d),null)},
$S:z+40}
C.dcE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dd3.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.Z3(r.y,r.gyB(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dd1(r),s,s,s,s,s,s,!1,B.a3)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbs(v,e,w,u,t,r.gbS3(),C.hvd(r.y.Q),r.gyB(0),s)
w=t}return A.cb(q,new C.dd2(r,e),new A.D(B.a_p,w,s))},
$S:1944}
C.dd2.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gv3(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fy(B.a5,A.db(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dd1.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHO(B.qa,B.iV)},
$S:0}
C.dcO.prototype={
$0(){var w=this.a
return w.m(new C.dcN(w))},
$S:0}
C.dcN.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dcP.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.dcu.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kc.j(0.5),r=x.p,q=A.a([D.fEU,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.Zs(d,B.e5,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Zs(d,I.anR,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kE.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kE.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Zs(d,X.aoZ,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Zs(d,B.qx,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Zs(d,B.qx,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eT(u,E.Bp,A.bm(!0,new A.D(Ad.yp,A.x(q,B.E,u,B.e,B.O,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.al4,B.d8,u,new A.b8(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dcQ.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dcH.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.ZQ(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dcI.prototype={
$1(d){var w=null
return A.oC(!1,A.ep(w,w,w,E.Bp,new A.jX(this.a,new C.dcG(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.dcG.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9f,B.oH,A.E(A.d(e,w,w,w,w,w,w,B.jo,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:746}
C.dcJ.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dcK.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.dcL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ba(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.S_(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dcF(s,t))
w=4
return A.b(s.la(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcX.prototype={
$1(d){var w=null
return A.oC(!1,A.ep(w,w,w,E.Bp,new A.jX(this.a,new C.dcW(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.dcW.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9f,B.oH,A.E(A.d(e,w,w,w,w,w,w,B.jo,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:746}
C.dcY.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dcZ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.dd_.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.dd0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Ba(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.la(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcv.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.biW(B.qa,A4.Nb)},
$S:0}
C.dcw.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHO(B.qa,A4.Nb)},
$S:0}
C.deQ.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.deR.prototype={
$1(d){var w=this.a
return w.m(new C.deP(w))},
$S:9}
C.deP.prototype={
$0(){return this.a.e="page"},
$S:0}
C.deS.prototype={
$1(d){var w=this.a
return w.m(new C.deO(w))},
$S:9}
C.deO.prototype={
$0(){return this.a.e="book"},
$S:0}
C.deT.prototype={
$1(d){var w=this.a
return w.m(new C.deN(w))},
$S:9}
C.deN.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.deU.prototype={
$0(){var w=this.a
return w.m(new C.deM(w,this.b))},
$S:0}
C.deM.prototype={
$0(){var w=this.b
this.a.d.saY(0,w)
return w},
$S:0}
C.deV.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2d()
A.a4(this.b,!1).O(new A.bqh(w,v))},
$S:0}
C.ddk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ddj.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.ZM(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.ddo.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.ddn.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b95(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hb,v,v,v)
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.ddl(d),v,v),A.bI(B.x6,v,new C.ddm(d),A.bo(B.nb,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Bp,w,v,v,v,v,D.fDF,v)},
$S:19}
C.ddl.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ddm.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ddp.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.ddq.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ch(A.bX(B.bG,r,B.bq,t,18,14),B.t,t,B.y,t,D.bAs,t,t,B.ah)},
$S:332}
C.ddi.prototype={
$0(){return this.a.Qx(0,this.b)},
$S:0}
C.ddh.prototype={
$0(){return this.a.Q_(0,this.b)},
$S:0}
C.cLN.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cLO.prototype={
$0(){return B.d.gI(D.zo)},
$S:z+14}
C.cLP.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bT(0,new A.D(d,A.c3(w,new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bh),w),0,0,0)},
$S:1946}
C.d4m.prototype={
$1(d){return this.a.m(new C.d4l(this.b,this.c))},
$S:9}
C.d4l.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d4L.prototype={
$1(d){return this.a.m(new C.d4y())},
$S:2}
C.d4y.prototype={
$0(){},
$S:0}
C.d4M.prototype={
$1(d){return this.a.m(new C.d4x())},
$S:2}
C.d4x.prototype={
$0(){},
$S:0}
C.d4N.prototype={
$0(){var w=this.a
return w.m(new C.d4w(w,this.b))},
$S:0}
C.d4w.prototype={
$0(){var w=this.a
return w.d=w.gof().FV(this.b.a)},
$S:0}
C.d4O.prototype={
$0(){var w=this.a
return w.m(new C.d4v(w,this.b))},
$S:0}
C.d4v.prototype={
$0(){var w=this.a
return w.d=w.gof().cKt(this.b)},
$S:0}
C.d4P.prototype={
$1(d){return this.a.m(new C.d4u())},
$S:2}
C.d4u.prototype={
$0(){},
$S:0}
C.d4Q.prototype={
$0(){var w=this.a
return w.m(new C.d4t(w,this.b))},
$S:0}
C.d4t.prototype={
$0(){var w=this.a
return w.d=w.gof().cKy(this.b.a)},
$S:0}
C.d4R.prototype={
$1(d){var w=this.a
return w.m(new C.d4G(w,d))},
$S:6}
C.d4G.prototype={
$0(){var w=this.a
return w.d=w.gof().cLs(this.b)},
$S:0}
C.d4S.prototype={
$1(d){var w=this.a
return w.d=w.gof().aES(d)},
$S:2}
C.d4T.prototype={
$1(d){var w=this.a
return w.d=w.gof().cKB(d)},
$S:2}
C.d4V.prototype={
$1(d){var w=this.a
return w.d=w.gof().cLq(d)},
$S:2}
C.d4W.prototype={
$1(d){var w=this.a
return w.m(new C.d4F(w,d))},
$S:9}
C.d4F.prototype={
$0(){var w=this.a
return w.d=w.gof().cLh(this.b)},
$S:0}
C.d4X.prototype={
$0(){var w=this.a,v=w.gof(),u=B.a.i(w.gyB(0).a.a),t=B.a.i(w.gaC0().a.a)
u=v.bdI(B.a.i(w.garJ().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.bQb.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:8}
C.bQ5.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQ4(w,d))},
$S:11}
C.bQ4.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bQe.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bQ6.prototype={
$0(){var w=this.a
w.Q=D.aZu
w.adq(1)
w.r.x=null},
$S:0}
C.bQ7.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aZu)return
w=new A.e4()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.ap(3)
v.z=D.d_r[w.ap(6)]
v.as=u.f.a+2.6},
$S:0}
C.bQa.prototype={
$0(){var w=this.a
w.Q=D.abQ
w.adq(2)
w.r.z=null},
$S:0}
C.bQ9.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hru
t.adq(3)
w=t.r
w.d=s
w.x="I say: "+t.gC5()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.ap(3)
w.z=s?D.d5Q[v.ap(4)]:D.dqy[v.ap(3)]
w.as=t.a+2.8},
$S:0}
C.bQc.prototype={
$0(){var w=this.a
w.Q=D.aZv
w.CW=this.b
w.cy=1
w.adq(4)
w.r.f=w.f.a+5},
$S:0}
C.bQd.prototype={
$0(){},
$S:0}
C.bQ8.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ih()},
$S:0}
C.bQ2.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQ3.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ih()},
$S:0}
C.bRI.prototype={
$0(){var w=this
return w.a.QQ(w.b,0,w.c,w.d)},
$S:0}
C.bRJ.prototype={
$0(){var w=this
return w.a.QQ(w.b,3,w.c,w.d)},
$S:0}
C.bRK.prototype={
$0(){var w=this
return w.a.QQ(w.b,1,w.c,w.d)},
$S:0}
C.bRL.prototype={
$0(){var w=this
return w.a.bRv(w.b,w.c,w.d)},
$S:0}
C.bRM.prototype={
$0(){var w=this
return w.a.QQ(w.b,4,w.c,w.d)},
$S:0}
C.bRN.prototype={
$0(){var w=this
return w.a.QQ(w.b,2,w.c,w.d)},
$S:0}
C.bRO.prototype={
$0(){var w=this
return w.a.QQ(w.b,5,w.c,w.d)},
$S:0}
C.bRP.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:747}
C.bRH.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a4T[d],p=q.a.a7(0,new A.t(0,-q.b*1.2*124)),o=A.fx(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fiC,e),B.a4,B.bY,r,B.dA,B.bW)
o.o0(130)
w=o.b.a.c
w=p.aE(0,new A.t(0,w.gbb(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bs(A.bK(w,v.gbb(v)+12,u+18),B.hU)
u=this.a
v=t.eO(B.dC)
w=$.S()
s=A.I()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.I()
s.r=D.q4.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ag,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bt())
v=A.I()
v.r=D.q4.gp(0)
u.aH(w,v)
o.a3(u,new A.t(t.a+9,t.b+6))},
$S:748}
C.bQs.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.bQt.prototype={
$2(d,e){var w=this.a,v=B.o.aL(w.alU(d),w.alU(e))
if(v!==0)return v
return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fq9.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h_6.prototype={
$2(d,e){if(e!=null)J.ca(this.a.c3(0,d,new C.h_7()),e)},
$S:z+66}
C.h_7.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h_8.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_9.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h_a.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.h_5(this.c,d))},
$S:3}
C.h_5.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h_b.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_c.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_d.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.h_4(this.c,d))},
$S:3}
C.h_4.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fCL.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fQW.prototype={
$1(d){return d.Q},
$S:z+15}
C.fQX.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fzb.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fFw.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bLr.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h_w.prototype={
$2(d,e){return B.o.aL(C.hrC(d),C.hrC(e))},
$S:210}
C.h_x.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bJE.prototype={
$0(){var w=this.a
w.ch=!0
w.b7k()},
$S:0}
C.bJz.prototype={
$0(){},
$S:0}
C.bJF.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bJx.prototype={
$0(){},
$S:0}
C.bJy.prototype={
$0(){},
$S:0}
C.bJD.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.bc5(t,u),B.aw),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.n(14)
s.push(A.ap(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fq7,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aA(B.c5,new A.an(B.a_,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bJA(t,e),u,u,u,u,u,u,u,new C.bJB(t,e),u,u,u,u,u,u,u,u,u,new C.bJC(t,e),u,u,u,u,!1,B.a3)},
$S:36}
C.bJA.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJC.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bJB.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJw.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ih()},
$S:0}
C.cnt.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cnu.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cns(w))},
$S:0}
C.cns.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cnv.prototype={
$0(){var w=this,v=w.a
v.giW()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cnw.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cnx.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cny.prototype={
$0(){},
$S:0}
C.cnz.prototype={
$0(){var w=this.a
w.z=w.X1(++w.e)
w.Q=A.bZ(w.gkL()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cnp.prototype={
$0(){return A.a4(this.a,!1).ih()},
$S:0}
C.cnq.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giW().length,e=i/2,d=new C.cnr(i,f,h),a0=g.as,a1=A.a7(a0).k("bd<2>")
a0=A.C(new A.bd(a0,a1),a1.k("M.E"))
a0=A.bT(0,A.cb(new A.h8(a0),new C.cnk(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giW().length!==0&&!B.d.t(g.giW(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.Q8(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mm(new C.cnl(g,u),new C.cnm(g,u),new C.cnn(g,u),j,j,new A.bR("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.fa:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.giW().length!==0&&!B.d.t(g.giW(),-1)){a0=g.e+1>=g.gkL().length?"See my result":"Next family"
g=A.as(C.uk(a0,g.gq9(g),B.cI,B.jA,D.fq),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.X1(0):s).length))break
if(!B.d.t(g.giW(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.X1(0)
o=s}else o=s
n=s[u]
n=A.ee(B.A,new C.Q8(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.X1(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qX(new A.bp(0,p,t),new C.cno(),new S.DW(u,j,new C.Q8(l.b,k,62,!1,j),new A.kB(0.25,new C.Q8(m.b,k,62,!1,j),j),new A.k6(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.hv8(),!0,!0,j,j,j,j,j,j,!1,B.iF,j,new A.bR("chip-"+r,a0),w),B.b7,B.iW,j,new A.bR("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fI,a1,B.bq,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.ab,B.t,e,j)},
$S:64}
C.cnr.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:735}
C.cnk.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giW().length!==0&&!B.d.t(t.giW(),-1)
return A.b4(p,p,p,new C.bbB(q.b,o,v,w,p),B.aw)},
$S:63}
C.cnm.prototype={
$1(d){return this.a.giW()[this.b]===-1},
$S:z+30}
C.cnn.prototype={
$1(d){return this.a.cOi(this.b,d.a)},
$S:z+31}
C.cnl.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giW()[t]!==-1,r=A.n(18),q=e.length!==0?B.cI.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cI:B.jN,B.r,2)
u=s?A.lx(new C.cnj(),A.as(new C.Q8(u.gaEk()[u.giW()[t]].b,u.gaEk()[u.giW()[t]].a,62,!1,v),v,v,v),B.lu,B.iW,v,v,new A.bp(0.3,1,x.X),x.i):D.b9f
return A.da(v,u,v,v,B.b7,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,v,88)},
$S:1949}
C.cnj.prototype={
$3(d,e,f){return A.ee(B.A,f,e,null,null)},
$S:110}
C.cno.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:110}
C.cMR.prototype={
$1(d){return d>=1},
$S:115}
C.cCo.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkL()[w.e].d.length)w.m(new C.cCn(w))},
$S:11}
C.cCn.prototype={
$0(){return this.a.f++},
$S:0}
C.cCw.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cCx.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cCy.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cCv(w))},
$S:0}
C.cCv.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cCz.prototype={
$0(){return this.a.f++},
$S:0}
C.cCA.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cCB.prototype={
$0(){},
$S:0}
C.cCC.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.aa(0)
w.as=!1
w.ay=0},
$S:0}
C.cCq.prototype={
$0(){return A.a4(this.a,!1).ih()},
$S:0}
C.cCr.prototype={
$3(d,e,f){var w=null
return A.lx(new C.cCp(this.a,e),w,B.b7,B.hv,w,w,new A.bp(w,this.b,x.X),x.i)},
$S:1950}
C.cCp.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cI.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TJ(v,v,B.Vq)
return A.p(u,A.hU(new A.Bk(new A.xs(w,B.Lj,u,B.Xp),H.bVW(A.b4(u,u,u,new C.aAO(t.gkL()[t.e].c,t.as,u),B.aw),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1951}
C.cCs.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,14*(1-e))),e)},
$S:101}
C.cCt.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:110}
C.cCu.prototype={
$0(){return this.a.boe(this.b)},
$S:0}
C.f2U.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amq$)
v.amq$=w
v.pZ$.sp(0,w)
v.aq5(u)},
$S:8}
C.fd_.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bRd.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRc())},
$S:0}
C.bRc.prototype={
$0(){},
$S:0}
C.bRa.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bR8.prototype={
$0(){},
$S:0}
C.bR9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMx()
w=s+1>=r.length?3:5
break
case 3:q=C.bFp(p.gaoT(0),0,r.length)
p.m(new C.bR5(p,q))
o=p
w=6
return A.b(C.Bu(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Bv(s.d,s.c.a,"school",p.gaoT(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bR6())
w=4
break
case 5:p.m(new C.bR7(p))
p.gqg().VA(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bR5.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bR6.prototype={
$0(){},
$S:0}
C.bR7.prototype={
$0(){return this.a.x++},
$S:0}
C.bRb.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bR4.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ih()},
$S:0}
C.f2V.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.hvi(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.DJ
C.RX(q,D.ei0,0,0.2,-0.6,-0.2,null,w,D.egM,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.FN.gp(0)
p.c=3
p.d=B.bB
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f2W.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.RX(this.a,D.eh5,0,u,0.7,-0.5,null,null,D.Jc,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f2X.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.RX(this.a,D.eiN,0,0,0.8,-0.5,null,null,D.Jc,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f2Y.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.RX(w.b,D.ehV,0,v,-0.8,-0.5,null,null,D.Jc,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f2Z.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.ehZ:D.DJ
C.RX(p,D.ehp,0,t,0,-0.6,null,v,D.Jc,3,0,s,1.3,u,0,w,0)
q=q.c9G(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cI.gp(0)
p.aH(q,w)},
$S:0}
C.f3_.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:747}
C.bQR.prototype={
$2(d,e){return d+e},
$S:67}
C.bR1.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bR2.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bR3.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giW()[u.b]=s
t.giW()[u.d]=t.y
w=t.as
v=t.pZ$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bQY.prototype={
$1(d){return d},
$S:116}
C.bQX.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pZ$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bQZ.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bR_.prototype={
$0(){},
$S:0}
C.bR0.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fn(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cu(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.aa(0)},
$S:0}
C.bQT.prototype={
$0(){return A.a4(this.a,!1).ih()},
$S:0}
C.bQU.prototype={
$2(d,e){var w=this.a
w=w.gkL()[w.f].e
return B.o.aL(w[d],w[e])},
$S:67}
C.bQV.prototype={
$2(d,e){var w=null,v=C.h7g(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aA(B.c5,new A.er(A.b4(w,w,w,new C.biM(u,u.pZ$),B.aw),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bQS(u,v),w,w,w,w,!1,B.a3)},
$S:36}
C.bQS.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giW().length
u=B.o.E(B.k.bf((t.a-s.a)/r/450*v),0,v-1)
w.cYW(w.giW()[u])}},
$S:22}
C.bQW.prototype={
$1(d){var w=this.a
return w.gkL()[w.f].d[d]},
$S:74}
C.dnY.prototype={
$2(d,e){return 0},
$S:67}
C.bQD.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQC())},
$S:0}
C.bQC.prototype={
$0(){},
$S:0}
C.bQB.prototype={
$0(){},
$S:0}
C.bQv.prototype={
$0(){},
$S:0}
C.bQw.prototype={
$0(){},
$S:0}
C.bQA.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.AF},
$S:0}
C.bQz.prototype={
$1(d){var w=null,v=this.a.gqg(),u=A.d(d,w,w,w,w,w,w,D.aTm,w,w,w),t=v.gbkG(0)
return A.aA(B.c5,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aTB,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbqw(v),w,w,w,w,w,w,!1,B.a3)},
$S:137}
C.bQx.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQy.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ih()},
$S:0}
C.bQu.prototype={
$0(){return A.a4(this.a,!1).ih()},
$S:0}
C.dYL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dYM.prototype={
$1(d){return this.a},
$S:39}
C.dYN.prototype={
$0(){var w=this.a
return w.d=w.gSy().bdb(this.b)},
$S:0}
C.dYJ.prototype={
$1(d){return new C.Tb(this.a,null)},
$S:z+32}
C.dYK.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dYI.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hb,w,w,w)
return A.ep(A.a([A.bN(!1,E.aUY,w,w,!0,w,w,w,new C.dYG(d),w,w),A.bN(!1,D.fLb,w,w,!0,w,w,w,new C.dYH(d),w,w)],x.p),w,w,D.fq,v,w,w,w,w,D.fxQ,w)},
$S:19}
C.dYG.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dYH.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dYF.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dYO.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dYP.prototype={
$0(){var w=this.a,v=this.b,u=C.bD8(v,10,w.r,!1)
return w.ua(C.hfN(w.a.d,"kahoot",u,w.gb4U(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dYQ.prototype={
$0(){var w=this.a
return w.ua(new C.al9(this.b,w.a.d,w.r,null))},
$S:0}
C.dYR.prototype={
$0(){var w=this.a
return w.ua(new C.ajm(this.b,w.a.d,w.r,null))},
$S:0}
C.dYU.prototype={
$0(){var w=this.a
return w.ua(new C.au2(this.b,w.a.d,w.r,null))},
$S:0}
C.dYV.prototype={
$0(){var w=this.a
return w.ua(new C.axZ(this.b,w.a.d,w.r,null))},
$S:0}
C.dYW.prototype={
$0(){var w=this.a
return w.ua(new C.alc(this.b,w.a.d,w.r,null))},
$S:0}
C.dYX.prototype={
$0(){var w=this.a
return w.ua(new C.alg(this.b,w.a.d,w.r,null))},
$S:0}
C.dYY.prototype={
$0(){var w=this.a
return w.ua(new C.ali(this.b,w.a.d,w.r,null))},
$S:0}
C.dYZ.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cZf()
return v.ua(C.hfN(v.a.d,"creator_"+u.a,w,v.gb4U(),"A game by the family",t,this.c.a))},
$S:0}
C.dZ_.prototype={
$0(){return this.a.Ox(this.b)},
$S:0}
C.dZ0.prototype={
$0(){return this.a.Xt(0,this.b)},
$S:0}
C.dYS.prototype={
$0(){return this.a.Ox(null)},
$S:0}
C.dYT.prototype={
$0(){return this.a.K(x.q).f.U(D.fby)},
$S:0}
C.bQP.prototype={
$0(){var w=this.a
w.d=D.aYW
w.z=3},
$S:0}
C.bQQ.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aOB()}else w.m(new C.bQO(w))},
$S:11}
C.bQO.prototype={
$0(){return this.a.z--},
$S:0}
C.bQF.prototype={
$0(){var w=this.a
w.d=D.abu
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bQG.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQE(w))
if(w.as<=0){d.a4(0)
w.b4Q(-1)}},
$S:11}
C.bQE.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bQL.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.W2},
$S:0}
C.bQM.prototype={
$0(){return this.a.e++},
$S:0}
C.bQI.prototype={
$0(){var w=this.a
w.d=D.aYX
w.ay=this.b},
$S:0}
C.bQJ.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bQN.prototype={
$2(d,e){return B.o.aL(e.b,d.b)},
$S:1952}
C.bQK.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQH.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ih()},
$S:0}
C.bQf.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b4,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.L)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b4,B.aO),r))}return s},
$S:1953}
C.bQg.prototype={
$0(){return this.a.gCK().c.push(C.h16(null,0,20,""))},
$S:0}
C.bQq.prototype={
$1(d){var w=null
return A.br(w,new A.b5(4,A.n(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.UZ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:250}
C.bQp.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCK().c,m=this.b,l=n[m],k=o.ccl(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aX,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Kj,p,p,p),B.b2],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.apL,p,p,p,new C.bQk(o,m),p,p,p,p,p,p))
n=J.a6(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQl(l),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aBx[v]
t=D.aBf[v]
s=v+1
f.push(new A.D(B.eH,new A.cd(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ad,new A.bA(1,B.bd,A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQm(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),p),new Au.OQ(v,l.c,new C.bQn(o,l),p,!1,D.lx,p,p,p,p,p,!1,!1,p,L.aZk,p,p,p,p,p,w)],g),p),p))}f.push(D.fDk)
f.push(B.am)
n=A.a([D.fwV,B.ad],g)
for(r=0;r<3;++r){q=D.c9T[r]
n.push(new A.D(B.fu,A.iU(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bQo(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kJ,B.bg,p,p,p)},
$S:151}
C.bQk.prototype={
$0(){var w=this.a
return w.m(new C.bQj(w,this.b))},
$S:0}
C.bQj.prototype={
$0(){return B.d.cz(this.a.gCK().c,this.b)},
$S:0}
C.bQl.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bQm.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bQn.prototype={
$1(d){return this.a.m(new C.bQi(this.b,d))},
$S:158}
C.bQi.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bQo.prototype={
$1(d){return this.a.m(new C.bQh(this.b,this.c))},
$S:9}
C.bQh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_q.prototype={
$0(){var w=this.a
w.w6()
w.a.bu()
w.a.qa()},
$S:0}
C.e_p.prototype={
$0(){var w=this.a
w.w6()
w.a.bu()
w.a.qa()},
$S:0}
C.e_s.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e_t.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_u.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e_o.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e_r.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e_w.prototype={
$0(){this.a.OT()
return null},
$S:0}
C.e_v.prototype={
$0(){return this.a.EJ(this.b)},
$S:0}
C.dZR.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.di,w,w,!0,w,w,w,new C.dZP(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.ep(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.dZQ(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dZP.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dZQ.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dZS.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cKX(this.b)},
$S:0}
C.dZM.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aU1(w.b,w.c,w.d)},
$S:8}
C.dZd.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dZe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GT(t.a.c),$async$$0)
case 2:s=r.pV(q.dI(e,new C.dZt(t)))
if(s!=null&&t.c!=null)t.m(new C.dZu(t,s))
t.a.bu()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZt.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZw.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZL.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cLK(C.hvo(w),w)},
$S:0}
C.dZs.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Vx(u,w,C.aQ3(u,w),new C.dZr(v),null)},
$S:z+37}
C.dZr.prototype={
$1(d){return this.bm2(d)},
bm2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dZq(s,d))
w=3
return A.b(s.u6(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:494}
C.dZq.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bdb(this.b)},
$S:0}
C.dZI.prototype={
$1(d){return d.as},
$S:z+1}
C.dZJ.prototype={
$1(d){var w=this
return new A.e0(new C.dZH(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.dZH.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e4:B.c,h=A.n(26),g=A.K(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bQ2,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bb,a0,A.aH(k,k,k,k,A.X(B.cx,j?B.bt:B.bm,k,k,k,k),k,k,k,new C.dZB(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.L)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aA(k,A.da(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b7,new A.o(q,k,new A.bH(n,n,n,n),new A.bh(p,p,p,p),k,k,B.n),B.hu,k,k,k,k,B.BQ,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZC(t,a2,r),k,k,k,k,k,k,!1,B.a3))}a0=A.bX(B.bG,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c0Y,new A.D(D.bAR,f,k),new A.D(D.bAI,e,k),new A.D(B.rx,a0,k),new A.D(X.al5,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A3.anz,j?B.bt:B.bm,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bAK,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8e(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dZD(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aA)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.j2,12)],x.V)
f.push(A.aA(k,A.p(k,A.B(A.a([D.fxg,B.bb,D.bF1,D.bQJ],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c4H,B.n),k,k,k,B.hO,B.bE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZE(t,a1),k,k,k,k,k,k,!1,B.a3))
f.push(new A.D(B.w5,A.B(A.a([A.E(A.dT(B.di,new C.dZF(a1),k),1),B.as,A.E(A.bI(M.aVn,k,new C.dZG(t,a1),A.bo(B.bP,k,k,k,k,k,B.cm,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.p(k,A.ch(A.x(f,B.E,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.BM,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:87}
C.dZB.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZC.prototype={
$0(){return this.b.$1(new C.dZA(this.a,this.c))},
$S:0}
C.dZA.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dZD.prototype={
$1(d){var w=this.a
w.m(new C.dZy(w,d))
this.b.$1(new C.dZz())},
$S:9}
C.dZy.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dZz.prototype={
$0(){},
$S:0}
C.dZE.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGQ(!0,w))
return null},
$S:0}
C.dZF.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZG.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGQ(!1,w))
return null},
$S:0}
C.dZK.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cLx(this.b.b)
w.r.aa(0)},
$S:0}
C.dZ1.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aie(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hoS(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dZ2.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEP(w)},
$S:0}
C.dZU.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ady(this.b,w,this.c,null)},
$S:z+39}
C.dZO.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e4:B.c,t=A.n(20),s=A.X(B.lJ,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.O,0,B.p)
return A.ep(A.a([A.bI(D.fOU,w,new C.dZN(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b8(t,B.a0),r,w)},
$S:19}
C.dZN.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZ3.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dZ4.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dZ5.prototype={
$1(d){return d.a},
$S:z+8}
C.dZ6.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEP(w)},
$S:0}
C.dZa.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aie(q)
w=A.T(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dZ8(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hoS(v.e,null,r,v.f,v.r,new C.dZ9(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dZ9.prototype={
$0(){return this.a.aaC(this.b)},
$S:0}
C.dZ8.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dZb.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hV>")
w=A.C(new A.N(w,new C.dZ7(this.b),v),v.k("ak.E"))
u.d=t.aEP(w)},
$S:0}
C.dZ7.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.dZT.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dZn.prototype={
$1(d){return d.length!==0},
$S:3}
C.dZo.prototype={
$1(d){var w=this
return new A.e0(new C.dZm(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dZm.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e4:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dZi(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aM(v,B.Y,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b5(4,A.n(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mp,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.O,0,B.p)
t=w.a
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.dZj(d),v,v),A.bI(B.Ku,v,new C.dZk(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fBI,v,new C.dZl(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:177}
C.dZi.prototype={
$1(d){var w=null
return A.dG(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bYN,w,w,w,new C.dZh(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1954}
C.dZh.prototype={
$0(){return this.a.$1(new C.dZf(this.b,this.c))},
$S:0}
C.dZf.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dZj.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dZk.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dZg(w.c,u))
v.bP(0,B.cb)}},
$S:0}
C.dZg.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dZl.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dZp.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cMb(this.b,D.ug,C.GR(v,w.a.c))},
$S:0}
C.e_0.prototype={
$1(d){return d.as},
$S:z+1}
C.e_1.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iY(this.b,w)},
$S:0}
C.e_2.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ikk(v)
return w.Wk(v==null?null:v.a)},
$S:0}
C.e_3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hX5(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.ctG(new A.av(u,t),v.gbjM(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cYm:D.cWz
q=A.K(s?B.dq:D.bgR,B.r,1)
p=A.n(22)
o=A.bT(0,A.b4(m,m,m,new C.beS(s,m),B.aw),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.ab,B.t,A.a([o,A.bT(0,A.uN(new A.Q(n,n,n,n),new A.a5(u,t,new C.bfN(l.d,v,l.f,w,new C.dZX(l),l.gcdx(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.bxw(s,new C.dZY(l,e),new C.dZZ(l,e),new C.e__(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b0,B.b5,B.x,r,m,m),B.n),m,m,m,A_.akc,m,m,m,m)},
$S:228}
C.dZX.prototype={
$1(d){var w=this.a
w.m(new C.dZV(w,d))},
$S:2}
C.dZV.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dZY.prototype={
$0(){var w=this.b
return this.a.bbp(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZZ.prototype={
$0(){var w=this.b
return this.a.bbp(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e__.prototype={
$0(){var w=this,v=w.b
return w.a.aU1(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbjM())},
$S:0}
C.e_4.prototype={
$0(){var w=this.a
return w.m(new C.dZW(w))},
$S:0}
C.dZW.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dZc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fC(s.c)),$async$$0)
case 2:t.y4("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ddu.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bjD(u,C.hzD(v.c,u),new C.ddt(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.ddt.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.ddv.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bmW(d.d,d.c,u.f.t(0,d.a),new C.dds(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dds.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fCh.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pV(new A.cQ(new A.Z(v,new C.fCi(d),w.k("Z<1>")),new C.fCj(),w.k("cQ<1,m>")))},
$S:z+19}
C.fCi.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fCj.prototype={
$1(d){return d.a},
$S:z+8}
C.fCf.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fCg.prototype={
$1(d){return d.b},
$S:z+8}
C.fCm.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pV(new A.cQ(new A.Z(v,new C.fCn(d),w.k("Z<1>")),new C.fCo(),w.k("cQ<1,m>")))},
$S:z+19}
C.fCn.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fCo.prototype={
$1(d){return d.a},
$S:z+8}
C.fCk.prototype={
$1(d){var w,v=A.eE([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fCl.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.ddx.prototype={
$0(){return this.a},
$S:z+46}
C.ddO.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:263}
C.ddG.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.ddH()),v=J.a6(w)
if(!v.t(w,e))v.M(w,e)},
$S:113}
C.ddH.prototype={
$0(){return A.a([],x.s)},
$S:749}
C.ddF.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:328}
C.ddy.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.ddE.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.ddD.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.D3:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.Y:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.D3:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1956}
C.ddz.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.ddI.prototype={
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
break}A:{s=u.gS(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.D3:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b3(w,new C.ddJ(r)))w.push(r)}}B.d.bs(w,new C.ddK(a8))
B.d.aZ(w,new C.ddL())
q=C.hX4(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eOM],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.L)(n),++m){i=n[m]
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
else a8.n(0,a9,new A.bq1(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1957}
C.ddJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ddK.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.ddL.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.ddM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bd(v,A.a7(v).k("bd<2>")).cI(0,0,B.pN)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:677}
C.ddN.prototype={
$1(d){return 16+d*156},
$S:266}
C.ddw.prototype={
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
t.n(0,d,new C.G9(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.G9(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.G9(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.Y:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Kp(d,new A.t(e+t,w),s,s.length))}},
$S:200}
C.ddA.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aJY(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:113}
C.ddB.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.ddC.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:750}
C.ddP.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:750}
C.ddQ.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:447}
C.ddR.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:196}
C.ddS.prototype={
$1(d){return d>=0.5},
$S:115}
C.fiN.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.he(A.aO(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1959}
C.eTJ.prototype={
$1(d){var w=null,v=A.n(8),u=B.bP.j(0.12),t=A.n(8)
return new A.D(B.np,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fn0,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.NI,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eTI(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eTI.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dtD.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dtC.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nI,B.K,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dtA(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mz,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dtB(d),w,w)],x.p),B.b9,B.BN,w,u,D.bBL,w,D.bDI,new A.b8(v,B.a0),w,w)},
$S:19}
C.dtA.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dtB.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dtM.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dtN.prototype={
$1(d){var w=this.a
return w.m(new C.dtL(w,d))},
$S:z+49}
C.dtL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dtO.prototype={
$1(d){var w=null
return A.qC(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dtR.prototype={
$1(d){var w=this.a
return w.m(new C.dtK(w,d))},
$S:35}
C.dtK.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dtQ.prototype={
$1(d){var w=null
return A.qC(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dtS.prototype={
$1(d){var w=this.a
return w.m(new C.dtJ(w,d))},
$S:35}
C.dtJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dtT.prototype={
$0(){var w=this.a
return w.m(new C.dtI(w))},
$S:0}
C.dtI.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dtU.prototype={
$0(){var w=this.a
return w.m(new C.dtH(w))},
$S:0}
C.dtH.prototype={
$0(){return++this.a.at},
$S:0}
C.dtV.prototype={
$0(){var w=this.a
return w.m(new C.dtG(w))},
$S:0}
C.dtG.prototype={
$0(){return--this.a.ax},
$S:0}
C.dtW.prototype={
$0(){var w=this.a
return w.m(new C.dtF(w))},
$S:0}
C.dtF.prototype={
$0(){return++this.a.ax},
$S:0}
C.dtX.prototype={
$1(d){var w=this.a
return w.m(new C.dtE(w,d))},
$S:9}
C.dtE.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dtP.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dtY.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e4:B.c
v=A.n(12)
if(p)u=B.bP
else u=(q.c.a?B.e8:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bt:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bt:B.bm
return A.E(A.aI(!1,B.a2,!0,r,A.aO(!1,o,!0,A.da(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b7,new A.o(w,r,u,v,r,r,B.n),B.eO,r,r,r,r,B.jR,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dtZ(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dtZ.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.du7.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cd5.prototype={
$2(d,e){return new A.bz(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.cdc.prototype={
$1(d){return d.ah()},
$S:z+5}
C.cdd.prototype={
$2(d,e){var w=J.b6(e,new C.cdb(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bz(d,w,x.d2)},
$S:z+53}
C.cdb.prototype={
$1(d){return d.ah()},
$S:z+12}
C.cd7.prototype={
$1(d){return C.all(A.a2(d,x.N,x.z))},
$S:z+9}
C.cd8.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cd9.prototype={
$1(d){return C.hfM(A.a2(d,x.N,x.z))},
$S:z+11}
C.cda.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cdh.prototype={
$1(d){return new A.aH1(d.f.length,d.a,d.b)},
$S:z+55}
C.cdi.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:608}
C.cde.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cdf.prototype={
$1(d){return d.cL9(C.GR(d,this.a))},
$S:z+85}
C.e_d.prototype={
$1(d){return C.ul(d,this.a.a.c)},
$S:z+3}
C.e_e.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e_i.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e_j.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e_a.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0l(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yC("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pl(r.c,r.e),$async$$0)
case 4:s.yC(p)
w=5
return A.b(s.JR(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_b.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0l(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yC("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pl(r.c,r.e),$async$$0)
case 4:s.yC(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_c.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.VA(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yC("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yC("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yC("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JR(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yC(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e_h.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0k(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yC("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cc(A.eh(new C.e_g(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pl(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_g.prototype={
$1(d){var w=this.b
return new C.a_L(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e_f.prototype={
$1(d){return D.hnZ},
$S:z+58}
C.e_l.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.e_m.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e_k(w,d)
return new A.D(B.d0,new C.bfR(this.b,d.c,d.a,w,null),null)},
$S:1960}
C.e_k.prototype={
$0(){return this.a.Y5(this.b.b)},
$S:0}
C.e_5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e_6.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e_7.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e_8.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e_9.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.e_n.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).O(s)
return}},
$S:201}
C.dLI.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dLJ.prototype={
$0(){return B.d.gI(D.a5e)},
$S:z+60}
C.dLK.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.d43,44),w,w,w),w,w,new C.bkL(u,t,v,w),B.aw)},
$S:63}
C.fSV.prototype={
$1(d){return A.p5(new C.fSU(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:143}
C.fSU.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e4:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.t0,24)],x.V),o=r?B.e8:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bT6,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.ala,A.B(A.a([w,B.bb,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bt:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.io(!0,t,e,B.y,D.f9D,new C.fST(this.b,s),20,B.akJ,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.kY,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:121}
C.fST.prototype={
$2(d,e){var w=null,v=D.a5e[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.e8:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.en,8)],x.V),p=A.n(15),o=A.E(new C.a6F(v.a,!0,w),1),n=s?B.jK:B.jd,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eK(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.l8,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fSS(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:81}
C.fSS.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.clL.prototype={
$0(){return this.a.agK(this.b)},
$S:0}
C.fSh.prototype={
$1(d){return D.hiU},
$S:z+61}
C.fZN.prototype={
$1(d){var w=this
return new C.a1y(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fSm.prototype={
$1(d){return new C.Zo(this.a,null)},
$S:z+63}
C.fSl.prototype={
$1(d){return D.hjT},
$S:z+64}
C.d58.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d59.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d57(w,d))},
$S:35}
C.d57.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d5a.prototype={
$1(d){return this.a.Kr()},
$S:2}
C.d5b.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d54.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d55.prototype={
$1(d){return this.a.Kr()},
$S:2}
C.d56.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDz.prototype={
$0(){},
$S:0}
C.cDF.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDG.prototype={
$0(){return this.a.aPs(-1)},
$S:0}
C.cDH.prototype={
$1(d){return this.a.m(new C.cDE())},
$S:2}
C.cDE.prototype={
$0(){},
$S:0}
C.cDI.prototype={
$0(){return this.a.aPs(1)},
$S:0}
C.cDJ.prototype={
$1(d){return this.a.m(new C.cDD())},
$S:2}
C.cDD.prototype={
$0(){},
$S:0}
C.cDK.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.e8:B.bO
return A.uF(u,u,B.b1,r,u,new C.cDC(t,d),B.yt,s,w,u,new A.ay(v,1,B.r,-1),B.cc)},
$S:1961}
C.cDC.prototype={
$1(d){var w=this.a
return w.m(new C.cDA(w,this.b))},
$S:9}
C.cDA.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cDL.prototype={
$1(d){return this.a.m(new C.cDB())},
$S:2}
C.cDB.prototype={
$0(){},
$S:0}
C.cDM.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fi6.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.fi7.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fi8.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.fi4.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbAO()
w=w.e
s=A.n(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bDH,new A.er(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxj(p,v,this.b.a,u,t,r),r,r,B.aw)},
$S:63}
C.fi5.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dw.aw(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b1,s,B.aW],x.O)
return A.aI(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eK(D.emC,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:132}
C.fQJ.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:72}
C.eQT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQK.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eQL.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eQR.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eQQ(w,this.b),null)},
$S:21}
C.eQQ.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e4:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eT(w,u,new A.D(B.al2,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hlI(new C.eQN(r,e),r.a),B.aA,A.B(A.a([A.E(A.dT(B.di,new C.eQO(d),w),1),B.as,A.E(A.bI(B.Vj,w,new C.eQP(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.O,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(t,B.a0),w)},
$S:100}
C.eQN.prototype={
$1(d){return this.b.$1(new C.eQM(this.a,d))},
$S:35}
C.eQM.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eQO.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQP.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eQS.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tc(this.b)},
$S:0}
C.eQF.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bdh(w)},
$S:0}
C.eQJ.prototype={
$1(d){return this.bmp(d)},
bmp(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LB(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iY(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eQI.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eQH(this.b),v),v.k("M.E"))
u.d=t.bdh(w)},
$S:0}
C.eQH.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eQU.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iY(this.b,w)},
$S:0}
C.eQV.prototype={
$1(d){return this.a.bEW(d,this.b)},
$S:z+67}
C.eQG.prototype={
$0(){return this.a.aaB(this.b)},
$S:0}
C.fZD.prototype={
$1(d){return new C.adT(this.a,this.b,this.c,null)},
$S:z+68}
C.eQX.prototype={
$0(){return this.a.a_R(this.b)},
$S:0}
C.eQY.prototype={
$0(){return this.a.Qt(this.b)},
$S:0}
C.eQZ.prototype={
$0(){return this.a.EE(this.b)},
$S:0}
C.eR_.prototype={
$0(){return this.a.a_S(this.b)},
$S:0}
C.eQW.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQB.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eQC.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qf(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eQD(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQD.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eRm.prototype={
$2(d,e){return d+e.gxe()},
$S:z+71}
C.eRi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eRj.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eR3.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e4:B.c,s=A.n(24),r=A.p(v,D.bTz,B.f,v,v,new A.o(B.ax.j(u?0.18:0.08),v,A.K(B.ax.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.av
u=u?B.e8:B.bO
w=x.p
return A.eT(v,t,new A.D(B.ys,A.x(A.a([r,B.aQ,q,B.P,p,B.d4,A.B(A.a([A.E(A.dT(B.nL,new C.eR1(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.ff,v,new A.b8(A.n(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bI(D.fSL,v,new C.eR2(d),A.bo(B.ax,v,v,v,v,v,B.ff,v,new A.b8(A.n(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.O,0,B.p),v),v,v,v,v,B.d8,v,new A.b8(s,B.a0),v)},
$S:49}
C.eR1.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eR2.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eRc.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e4:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h_,28)],x.V),g=k?D.db7:B.a4A,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.f3g,B.au,new A.bM(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cz,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.al7,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b6i(B.b6,B.ji,new C.eR9(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b6i(B.cw,R.z4,new C.eRa(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.ax.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.ax.j(0.28),B.r,1)
o=A.p(m,D.bSV,B.f,m,m,new A.o(B.ax.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.w2,A.p(m,A.x(A.a([g,new A.D(B.al3,A.x(A.a([w,B.W,u,B.bx,t,B.W,A.aI(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bb,n,A.X(B.eE,k?B.bt:B.bm,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eRb(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.O,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:27}
C.eR9.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vJ("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eRa.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vJ("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eRb.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.Oa(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eR7.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e4:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.e8:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bt:B.bm
u=A.bx(w,new A.a5(48,48,C.aRl(!0,A.n(12),48,P.Oj,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.B1(v.gxe())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.w2,A.p(q,A.x(A.a([B.W,k,new A.D(D.al0,A.B(A.a([u,B.bb,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bt:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BD,r.cnL(B.uD,B.aW,new C.eR5(d),p,"QR code or backup file","Transfer project"),r.b3j(!0,B.e9,B.ax,new C.eR6(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:27}
C.eR5.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eR6.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eR8.prototype={
$1(d){return this.bmq(d)},
bmq(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LB(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vW(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eRp.prototype={
$0(){var w=this.a
w.a.bu()
w.m(new C.eRo(w))},
$S:0}
C.eRo.prototype={
$0(){return this.a.r++},
$S:0}
C.eRq.prototype={
$0(){var w=this.a
return w.m(new C.eRn(w))},
$S:0}
C.eRn.prototype={
$0(){return this.a.r++},
$S:0}
C.eR0.prototype={
$0(){var w=this.a.c
w.toString
return A.iY(w,null)},
$S:0}
C.eR4.prototype={
$0(){return this.a.ch2(this.b)},
$S:0}
C.eRl.prototype={
$0(){var w=this.a
return w.m(new C.eRk(w,this.b))},
$S:0}
C.eRk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eRf.prototype={
$0(){return this.a.vJ("scan")},
$S:0}
C.eRg.prototype={
$0(){return this.a.vJ("file")},
$S:0}
C.eRh.prototype={
$1(d){return this.a.cnM(d,this.b)},
$S:z+72}
C.eRe.prototype={
$0(){return this.a.EI(this.b)},
$S:0}
C.eRd.prototype={
$0(){return this.a.a0m(this.b,this.c)},
$S:0}
C.cCZ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cCY.prototype={
$1(d){return d.ah()},
$S:z+74}
C.cCW.prototype={
$1(d){return C.hFv(A.a2(d,x.N,x.z))},
$S:z+75}
C.cCX.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fBh.prototype={
$1(d){return d.y===D.kL},
$S:z+3}
C.h_n.prototype={
$1(d){return C.aQ3(d,this.a)},
$S:z+3}
C.fza.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bRk.prototype={
$1(d){return!d.as},
$S:z+1}
C.bRj.prototype={
$1(d){return d.ah()},
$S:z+23}
C.bRg.prototype={
$1(d){return C.hfO(A.a2(d,x.N,x.z))},
$S:z+24}
C.bRh.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bRi.prototype={
$1(d){return J.k(d)},
$S:17}
C.fpM.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.flB.prototype={
$1(d){return C.h5W(A.a2(d,x.N,x.z))},
$S:z+79}
C.flC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.flD.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.fS8.prototype={
$1(d){return J.k(d)},
$S:17}
C.fS9.prototype={
$1(d){return d.a},
$S:z+81}
C.fSa.prototype={
$1(d){return d.length!==0},
$S:3}
C.fSb.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fSc.prototype={
$1(d){return d.Tc(null).ah()},
$S:z+82}
C.h_l.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fBL.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fEH.prototype={
$1(d){return C.all(A.a2(d,x.N,x.z))},
$S:z+9}
C.fEI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fEJ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fEK.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fEL.prototype={
$1(d){return C.ul(d,this.a)},
$S:z+3}
C.fRW.prototype={
$1(d){return C.ul(d,this.a)},
$S:z+3}
C.h_g.prototype={
$1(d){return C.all(A.a2(d,x.N,x.z))},
$S:z+9}
C.h_h.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h_i.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fBs.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fBt.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h_r.prototype={
$1(d){return!d.as},
$S:z+1}
C.fAX.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fAY.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fAZ.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fZO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fFx.prototype={
$1(d){return d.Q},
$S:z+15}
C.fRP.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fEE.prototype={
$1(d){return C.all(A.a2(d,x.N,x.z))},
$S:z+9}
C.fEF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fEG.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fRK.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fm8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fm9.prototype={
$1(d){return C.hfO(A.a2(d,x.N,x.z))},
$S:z+24}
C.fma.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fmb.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fmc.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmp.prototype={
$2(d,e){return d.eR(new C.fmq(e))},
$S:1962}
C.fmq.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1963}
C.fmm.prototype={
$1(d){return C.i0O(d,this.a)},
$S:z+84}
C.fmn.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fmo.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fqs.prototype={
$1(d){return d.a},
$S:z+56}
C.fqt.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqu.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fth.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fyu.prototype={
$1(d){return C.hre(d,C.GR(d,this.a))},
$S:z+5}
C.fyv.prototype={
$1(d){return C.hrf(d,C.GR(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAQ.prototype
w.bu8=w.q
w=C.az_.prototype
w.bu3=w.q
w=C.aGe.prototype
w.buw=w.q
w=C.aAR.prototype
w.bu9=w.q
w=C.aAT.prototype
w.bua=w.q
w=C.aAU.prototype
w.bub=w.q
w=C.aMp.prototype
w.bx_=w.q
w=C.aOv.prototype
w.bzi=w.q
w=C.aOw.prototype
w.bzj=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDP.prototype,"gckG","ckH",28)
var r
w(r=C.aAP.prototype,"gcdD","cdE",65)
v(r,"gaNG","NJ",0)
v(r,"gct_","AX",0)
v(r,"gbMG","On",0)
v(r,"gcHd","yD",0)
v(r,"gcmJ","a14",0)
v(r,"gbI5","O6",0)
v(r,"gbN5","Xy",0)
w(r,"gbS3","bS4",78)
v(r,"gbCs","zZ",0)
v(C.aAS.prototype,"gcH9","FA",0)
v(r=C.ala.prototype,"gbqy","bqz",2)
v(r,"gbqr","bqs",2)
v(r,"gcIg","cIh",2)
u(r,"gq9","kF",0)
u(r=C.ajn.prototype,"geX","h7",2)
w(r,"gc9D","c9E",27)
u(C.au3.prototype,"gq9","kF",0)
v(r=C.ay_.prototype,"gcTL","cTM",2)
u(r,"gq9","kF",0)
u(C.aK2.prototype,"gbqw","bqx",2)
v(C.alj.prototype,"gBq","cIr",2)
u(r=C.alh.prototype,"gcJ5","cJ6",2)
u(r,"gq9","kF",0)
v(r=C.ald.prototype,"gbpq","bpr",2)
v(r,"gcOg","cOh",2)
u(r=C.alf.prototype,"geX","h7",2)
u(r,"gkw","cHN",2)
v(r=C.alb.prototype,"gcHC","cHD",2)
u(r,"gbok","jB",2)
v(r=C.aEn.prototype,"gagm","vX",0)
v(r,"gcgi","a0d",0)
v(r,"gaRM","Ic",0)
v(r=C.aEk.prototype,"gcDf","a3d",0)
v(r,"gagm","vX",0)
v(r,"gcr_","a1J",0)
v(r,"gcgd","b1y",2)
v(r,"gchf","a0r",0)
w(r,"gcdx","cdy",35)
v(r,"gbMY","Ih",0)
v(r,"gcEh","cEi",2)
v(r,"gc3R","Ze",0)
w(r,"gcc0","cc1",36)
v(r,"gcg1","cg2",2)
v(r=C.aCO.prototype,"gc9J","Q1",0)
v(r,"gc9L","c9M",2)
v(r,"gbJA","aad",0)
v(r=C.aEm.prototype,"gbQv","Y1",0)
v(r,"gc03","YH",0)
v(r,"gcxs","a2B",0)
v(r,"gctB","a2c",0)
v(C.aEl.prototype,"gcti","ai6",0)
v(C.atf.prototype,"gcbZ","a_P",0)
v(C.azy.prototype,"ga2X","Kr",2)
v(C.azx.prototype,"ga2X","Kr",2)
v(C.ayd.prototype,"ga2X","Kr",2)
v(r=C.aFQ.prototype,"gb2H","QZ",0)
v(r,"gbBg","We",0)
v(r,"gch3","ch4",2)
w(C.aFP.prototype,"gccS","ccT",69)
t(C.aFR.prototype,"gaRG",0,0,null,["$1","$0"],["Ib","bKS"],70,0,0)
s(C,"hyH","iaO",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoV,C.uC,C.nq,C.HY,C.af4,C.Kh,C.uD,C.bRQ,C.t2,C.bod,C.als,C.adb,C.ln,C.bQr,C.atr,C.zg,C.ak7,C.Mf,C.b9J,C.a9k,C.bgX,C.afb,C.aze,C.af_,C.aK2,C.Kp,C.G9,C.bfP,C.aJY,C.aqc,C.ddT,C.lP,C.aUm,C.aUl,C.aSj,C.u7,C.rg,C.ly,C.hV,C.kO,C.aHW])
u(A.hy,[C.fJk,C.fJj,C.fJl,C.fSO,C.fxf,C.fxg,C.fxl,C.fH3,C.fH2,C.fH1,C.c6y,C.fTk,C.fTc,C.fTo,C.fBA,C.dMo,C.dMj,C.dMk,C.dLX,C.dLT,C.dMD,C.dME,C.dMx,C.dMy,C.dMF,C.dMG,C.fCd,C.fEB,C.fEC,C.fRU,C.h_f,C.fBr,C.fSs,C.dd5,C.dcs,C.dcB,C.dcS,C.dcx,C.dcD,C.dcu,C.dcH,C.dcI,C.dcG,C.dcX,C.dcW,C.deR,C.deS,C.deT,C.ddj,C.ddo,C.ddn,C.cLN,C.cLP,C.d4m,C.d4L,C.d4M,C.d4P,C.d4R,C.d4S,C.d4T,C.d4V,C.d4W,C.bQb,C.bQ5,C.fq9,C.h_8,C.h_9,C.h_a,C.h_5,C.h_b,C.h_c,C.h_d,C.h_4,C.fCL,C.fQW,C.fzb,C.fFw,C.bLr,C.h_x,C.fRr,C.bJF,C.bJA,C.bJC,C.bJB,C.cnr,C.cnm,C.cnn,C.cnl,C.cnj,C.cno,C.cMR,C.cCo,C.cCr,C.cCp,C.cCs,C.cCt,C.f2U,C.fd_,C.bQY,C.bQS,C.bQW,C.bQz,C.dYM,C.dYJ,C.dYK,C.dYI,C.dYO,C.bQQ,C.bQG,C.bQq,C.bQp,C.bQl,C.bQm,C.bQn,C.bQo,C.e_r,C.dZR,C.dZM,C.dZd,C.dZt,C.dZw,C.dZs,C.dZr,C.dZI,C.dZJ,C.dZD,C.dZ1,C.dZU,C.dZO,C.dZ3,C.dZ4,C.dZ5,C.dZa,C.dZ8,C.dZ7,C.dZn,C.dZo,C.dZi,C.e_0,C.dZX,C.ddu,C.ddv,C.fCh,C.fCi,C.fCj,C.fCf,C.fCg,C.fCm,C.fCn,C.fCo,C.fCk,C.fCl,C.ddO,C.ddE,C.ddz,C.ddJ,C.ddK,C.ddN,C.ddB,C.ddQ,C.ddR,C.ddS,C.fiN,C.eTJ,C.dtC,C.dtM,C.dtN,C.dtO,C.dtR,C.dtQ,C.dtS,C.dtX,C.dtY,C.cdc,C.cdb,C.cd7,C.cd8,C.cd9,C.cda,C.cdh,C.cde,C.cdf,C.e_d,C.e_g,C.e_f,C.e_m,C.e_n,C.dLI,C.fSV,C.fSh,C.fZN,C.fSm,C.fSl,C.d59,C.d5a,C.d55,C.cDH,C.cDJ,C.cDK,C.cDC,C.cDL,C.fi6,C.fQJ,C.eQR,C.eQN,C.eQJ,C.eQH,C.eQV,C.fZD,C.eR3,C.eRc,C.eR7,C.eR8,C.eRh,C.cCY,C.cCW,C.cCX,C.fBh,C.h_n,C.fza,C.bRk,C.bRj,C.bRg,C.bRh,C.bRi,C.flB,C.flC,C.fS8,C.fS9,C.fSa,C.fSb,C.fSc,C.h_l,C.fBL,C.fEH,C.fEI,C.fEK,C.fEL,C.fRW,C.h_g,C.h_h,C.h_i,C.fBs,C.fBt,C.h_r,C.fAX,C.fAY,C.fZO,C.fFx,C.fRP,C.fEE,C.fEF,C.fRK,C.fm8,C.fm9,C.fma,C.fmb,C.fmc,C.fmq,C.fmm,C.fmn,C.fqs,C.fqt,C.fth,C.fyu,C.fyv])
u(A.aw,[C.aZR,C.al8,C.aVC,C.Z3,C.bbs,C.Q8,C.a5R,C.tr,C.I_,C.bfN,C.bjD,C.bxw,C.bmW,C.adx,C.bjC,C.adw,C.bjB,C.aCP,C.aJ_,C.ady,C.G5,C.bfO,C.acO,C.bfM,C.bfR,C.aZP,C.atf,C.adT])
u(A.mf,[C.bc4,C.bdh,C.bd8,C.aHR,C.biE,C.boc,C.aVH,C.bc5,C.aAO,C.bbB,C.bsb,C.biM,C.bib,C.bij,C.bfQ,C.beS,C.bkL,C.bxj])
u(A.iG,[C.fTh,C.fTi,C.fTj,C.fTa,C.fTb,C.fTm,C.fTn,C.dMA,C.dMm,C.dMp,C.dM3,C.dM4,C.dM5,C.dM2,C.dMa,C.dM1,C.dMb,C.dMc,C.dM0,C.dMd,C.dM_,C.dMe,C.dLZ,C.dMf,C.dLR,C.dLS,C.dLY,C.dMg,C.dLW,C.dMh,C.dLV,C.dM6,C.dLU,C.dM7,C.dLQ,C.dM8,C.dM9,C.dMB,C.dMC,C.dMq,C.dMr,C.dMs,C.dMt,C.dMu,C.dMv,C.dMw,C.dMI,C.dMz,C.fCe,C.dcq,C.dco,C.dcp,C.dcr,C.dd4,C.dcU,C.dcR,C.dct,C.dcV,C.dcz,C.dcA,C.dcC,C.dcT,C.dcy,C.dcE,C.dd1,C.dcO,C.dcN,C.dcP,C.dcQ,C.dcJ,C.dcL,C.dcM,C.dcF,C.dcY,C.dd0,C.dcv,C.dcw,C.deQ,C.deP,C.deO,C.deN,C.deU,C.deM,C.deV,C.ddk,C.ddl,C.ddm,C.ddp,C.ddi,C.ddh,C.cLO,C.d4l,C.d4y,C.d4x,C.d4N,C.d4w,C.d4O,C.d4v,C.d4u,C.d4Q,C.d4t,C.d4G,C.d4F,C.d4X,C.bQ4,C.bQe,C.bQ6,C.bQ7,C.bQa,C.bQ9,C.bQc,C.bQd,C.bQ8,C.bQ2,C.bQ3,C.bRI,C.bRJ,C.bRK,C.bRL,C.bRM,C.bRN,C.bRO,C.h_7,C.fQX,C.bJE,C.bJz,C.bJx,C.bJy,C.bJw,C.cnt,C.cnu,C.cns,C.cnv,C.cnx,C.cny,C.cnz,C.cnp,C.cCn,C.cCw,C.cCx,C.cCy,C.cCv,C.cCz,C.cCA,C.cCB,C.cCC,C.cCq,C.cCu,C.bRd,C.bRc,C.bRa,C.bR8,C.bR9,C.bR5,C.bR6,C.bR7,C.bRb,C.bR4,C.f2V,C.f2W,C.f2X,C.f2Y,C.f2Z,C.bR1,C.bR2,C.bR3,C.bQX,C.bQZ,C.bR_,C.bR0,C.bQT,C.bQD,C.bQC,C.bQB,C.bQv,C.bQw,C.bQA,C.bQx,C.bQy,C.bQu,C.dYL,C.dYN,C.dYG,C.dYH,C.dYF,C.dYP,C.dYQ,C.dYR,C.dYU,C.dYV,C.dYW,C.dYX,C.dYY,C.dYZ,C.dZ_,C.dZ0,C.dYS,C.dYT,C.bQP,C.bQO,C.bQF,C.bQE,C.bQL,C.bQM,C.bQI,C.bQJ,C.bQK,C.bQH,C.bQf,C.bQg,C.bQk,C.bQj,C.bQi,C.bQh,C.e_q,C.e_p,C.e_s,C.e_t,C.e_u,C.e_o,C.e_w,C.e_v,C.dZP,C.dZQ,C.dZS,C.dZe,C.dZv,C.dZu,C.dZx,C.dZL,C.dZq,C.dZB,C.dZC,C.dZA,C.dZy,C.dZz,C.dZE,C.dZF,C.dZG,C.dZK,C.dZ2,C.dZN,C.dZ6,C.dZ9,C.dZb,C.dZT,C.dZh,C.dZf,C.dZj,C.dZk,C.dZg,C.dZl,C.dZp,C.e_1,C.e_2,C.dZV,C.dZY,C.dZZ,C.e__,C.e_4,C.dZW,C.dZc,C.ddt,C.dds,C.ddx,C.ddH,C.ddy,C.eTI,C.dtD,C.dtA,C.dtB,C.dtL,C.dtK,C.dtJ,C.dtT,C.dtI,C.dtU,C.dtH,C.dtV,C.dtG,C.dtW,C.dtF,C.dtE,C.dtP,C.dtZ,C.du7,C.e_e,C.e_i,C.e_j,C.e_a,C.e_b,C.e_c,C.e_h,C.e_l,C.e_k,C.e_5,C.e_6,C.e_7,C.e_8,C.e_9,C.dLJ,C.fSS,C.clL,C.d58,C.d57,C.d5b,C.d54,C.d56,C.cDz,C.cDF,C.cDG,C.cDE,C.cDI,C.cDD,C.cDA,C.cDB,C.cDM,C.fi7,C.fi8,C.eQT,C.eQK,C.eQL,C.eQM,C.eQO,C.eQP,C.eQS,C.eQF,C.eQI,C.eQU,C.eQG,C.eQX,C.eQY,C.eQZ,C.eR_,C.eQW,C.eQA,C.eQB,C.eQC,C.eQE,C.eQD,C.eRi,C.eRj,C.eR1,C.eR2,C.eR9,C.eRa,C.eRb,C.eR5,C.eR6,C.eRp,C.eRo,C.eRq,C.eRn,C.eR0,C.eR4,C.eRl,C.eRk,C.eRf,C.eRg,C.eRe,C.eRd])
u(A.af,[C.ap6,C.Ta,C.ZM,C.ZQ,C.ZO,C.Zm,C.al9,C.ajm,C.au2,C.axZ,C.ali,C.alg,C.alc,C.Vx,C.ale,C.Tb,C.aqf,C.aq9,C.a_q,C.aqd,C.a_L,C.a_M,C.a6F,C.Zo,C.Zn,C.YV,C.a1y,C.FV,C.ay6,C.ate,C.at8,C.atd,C.Ou])
u(A.ah,[C.aDP,C.bfH,C.aAP,C.bg5,C.aAS,C.bdf,C.aAQ,C.az_,C.aGe,C.ay_,C.aAU,C.aAT,C.aAR,C.bl4,C.alf,C.alb,C.aEn,C.aEk,C.aCO,C.aEm,C.aEl,C.bl5,C.aMp,C.azy,C.azx,C.ayd,C.bxm,C.aOv,C.aOw,C.aFQ,C.bmr,C.aFP,C.bz7])
u(A.jv,[C.dMl,C.dMn,C.dMi,C.dMH,C.fED,C.bQ1,C.dd3,C.dd2,C.dcK,C.dcZ,C.dd_,C.ddq,C.bRP,C.bRH,C.bQs,C.bQt,C.h_6,C.h_w,C.bJD,C.cnw,C.cnq,C.cnk,C.f3_,C.bQR,C.bQU,C.bQV,C.dnY,C.bQN,C.dZH,C.dZm,C.e_3,C.ddG,C.ddF,C.ddD,C.ddI,C.ddL,C.ddM,C.ddw,C.ddA,C.ddC,C.ddP,C.cd5,C.cdd,C.cdi,C.dLK,C.fSU,C.fST,C.fi4,C.fi5,C.eQQ,C.eRm,C.cCZ,C.fpM,C.flD,C.fEJ,C.fAZ,C.fEG,C.fmp,C.fmo,C.fqu])
u(A.lA,[C.a13,C.afd,C.a1m,C.a_d,C.abS,C.aKL,C.HZ,C.alk,C.cD_,C.cD0])
t(C.ala,C.aAQ)
t(C.ajn,C.az_)
t(C.au3,C.aGe)
t(C.bfL,C.aAU)
t(C.alj,C.bfL)
t(C.bfK,C.aAT)
t(C.alh,C.bfK)
t(C.bfJ,C.aAR)
t(C.ald,C.bfJ)
t(C.bkM,C.aMp)
t(C.bxk,C.aOv)
t(C.bxl,C.aOw)
t(C.aFR,C.bz7)
t(C.b9W,A.b9K)
t(C.bxn,A.a6k)
t(C.b9V,C.bxn)
w(C.aAQ,A.cg)
w(C.az_,A.cg)
w(C.aGe,A.eQ)
w(C.aAR,A.cg)
v(C.bfJ,C.af_)
w(C.aAT,A.cg)
v(C.bfK,C.af_)
w(C.aAU,A.cg)
v(C.bfL,C.af_)
w(C.aMp,A.eQ)
w(C.aOv,A.cg)
w(C.aOw,A.cg)
v(C.bz7,A.eF)
v(C.bxn,A.jd)})()
A.j1(b.typeUniverse,JSON.parse('{"aZR":{"aw":[],"v":[]},"bc4":{"aC":[]},"ap6":{"af":[],"v":[]},"aDP":{"ah":["ap6"]},"Ta":{"af":[],"v":[]},"al8":{"aw":[],"v":[]},"aVC":{"aw":[],"v":[]},"bfH":{"ah":["Ta"]},"ZM":{"af":[],"v":[]},"ZQ":{"af":[],"v":[]},"ZO":{"af":[],"v":[]},"Zm":{"af":[],"v":[]},"aAP":{"ah":["ZM"]},"bg5":{"ah":["ZQ"]},"aAS":{"ah":["ZO"]},"Z3":{"aw":[],"v":[]},"bdh":{"aC":[]},"bd8":{"aC":[]},"bdf":{"ah":["Zm"]},"aHR":{"aC":[]},"biE":{"aC":[]},"bbs":{"aw":[],"v":[]},"al9":{"af":[],"v":[]},"ala":{"ah":["al9"]},"boc":{"aC":[]},"aVH":{"aC":[]},"ajm":{"af":[],"v":[]},"au2":{"af":[],"v":[]},"axZ":{"af":[],"v":[]},"ajn":{"ah":["ajm"]},"bc5":{"aC":[]},"Q8":{"aw":[],"v":[]},"aAO":{"aC":[]},"au3":{"ah":["au2"]},"bbB":{"aC":[]},"ay_":{"ah":["axZ"]},"ali":{"af":[],"v":[]},"alg":{"af":[],"v":[]},"alc":{"af":[],"v":[]},"alj":{"ah":["ali"]},"bsb":{"aC":[]},"alh":{"ah":["alg"]},"biM":{"aC":[]},"ald":{"ah":["alc"]},"bib":{"aC":[]},"Vx":{"af":[],"v":[]},"ale":{"af":[],"v":[]},"Tb":{"af":[],"v":[]},"a5R":{"aw":[],"v":[]},"bij":{"aC":[]},"tr":{"aw":[],"v":[]},"I_":{"aw":[],"v":[]},"bl4":{"ah":["Vx"]},"alf":{"ah":["ale"]},"alb":{"ah":["Tb"]},"aqf":{"af":[],"v":[]},"aq9":{"af":[],"v":[]},"a_q":{"af":[],"v":[]},"ady":{"aw":[],"v":[]},"aEn":{"ah":["aqf"]},"aEk":{"ah":["aq9"]},"bfN":{"aw":[],"v":[]},"bfQ":{"aC":[]},"bjD":{"aw":[],"v":[]},"beS":{"aC":[]},"bxw":{"aw":[],"v":[]},"bmW":{"aw":[],"v":[]},"aCO":{"ah":["a_q"]},"adx":{"aw":[],"v":[]},"bjC":{"aw":[],"v":[]},"adw":{"aw":[],"v":[]},"bjB":{"aw":[],"v":[]},"aCP":{"aw":[],"v":[]},"aJ_":{"aw":[],"v":[]},"G5":{"aw":[],"v":[]},"aqd":{"af":[],"v":[]},"a_L":{"af":[],"v":[]},"a_M":{"af":[],"v":[]},"aEm":{"ah":["aqd"]},"bfO":{"aw":[],"v":[]},"acO":{"aw":[],"v":[]},"bfM":{"aw":[],"v":[]},"bfR":{"aw":[],"v":[]},"aEl":{"ah":["a_L"]},"bl5":{"ah":["a_M"]},"aZP":{"aw":[],"v":[]},"a6F":{"af":[],"v":[]},"bkM":{"ah":["a6F"]},"bkL":{"aC":[]},"atf":{"aw":[],"v":[]},"Zo":{"af":[],"v":[]},"Zn":{"af":[],"v":[]},"YV":{"af":[],"v":[]},"a1y":{"af":[],"v":[]},"azy":{"ah":["Zo"]},"azx":{"ah":["Zn"]},"ayd":{"ah":["YV"]},"bxm":{"ah":["a1y"]},"FV":{"af":[],"v":[]},"ay6":{"af":[],"v":[]},"bxk":{"ah":["FV"]},"bxl":{"ah":["ay6"]},"bxj":{"aC":[]},"ate":{"af":[],"v":[]},"aFQ":{"ah":["ate"]},"adT":{"aw":[],"v":[]},"at8":{"af":[],"v":[]},"atd":{"af":[],"v":[]},"bmr":{"ah":["at8"]},"aFP":{"ah":["atd"]},"Ou":{"af":[],"v":[]},"aFR":{"ah":["Ou"],"eF":[]},"b9V":{"jd":[],"fi":[]}}'))
A.CU(b.typeUniverse,JSON.parse('{"af_":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aSj"),cq:w("mb"),Q:w("rg"),r:w("bw<m,m>"),c5:w("aUl"),dY:w("aUm"),fH:w("Mf"),de:w("ak7"),dN:w("Mm<G>"),gc:w("DW<G>"),A:w("ez<m?>"),e:w("HY"),B:w("nq"),P:w("hV"),df:w("ln"),k:w("kO"),x:w("aB<~>"),U:w("O<a3v>"),V:w("O<ac>"),C:w("O<rg>"),O:w("O<u>"),c:w("O<Mf>"),b:w("O<ak7>"),ac:w("O<ez<m?>>"),I:w("O<nq>"),u:w("O<hV>"),J:w("O<ln>"),_:w("O<kO>"),cl:w("O<aB<ai<a8<m,@>>>>"),R:w("O<ns>"),eU:w("O<ai<+(J,J)>>"),ez:w("O<a8<m,aD>>"),gE:w("O<a8<m,m>>"),Y:w("O<a8<m,@>>"),fD:w("O<mK>"),bp:w("O<ow>"),g:w("O<t>"),ar:w("O<atr>"),v:w("O<h_>"),gy:w("O<a9k>"),L:w("O<+(m,m)>"),G:w("O<+(J,J)>"),E:w("O<+(J,~())>"),bd:w("O<+(m,G,R)>"),bF:w("O<+count,id,name(G,m,m)>"),F:w("O<cW>"),s:w("O<m>"),cF:w("O<au>"),aS:w("O<j0>"),dT:w("O<b9J>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<ly>"),h:w("O<aze>"),cC:w("O<bgX>"),fp:w("O<Kh>"),M:w("O<Kp>"),gZ:w("O<aHW>"),gA:w("O<af4>"),e4:w("O<afb>"),dE:w("O<aJY>"),f7:w("O<R>"),n:w("O<J>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cw<ah<af>>"),d:w("ai<nq>"),do:w("ai<hV>"),cg:w("ai<ln>"),ax:w("ai<kO>"),fO:w("ai<a8<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<ly>"),j:w("ai<@>"),fK:w("bz<m,m>"),d2:w("bz<m,ai<a8<m,@>>>"),a:w("a8<m,@>"),f:w("a8<@,@>"),gv:w("N<m,I0>"),cM:w("N<G,m>"),w:w("iB"),g2:w("rA"),bV:w("aoV"),fL:w("cu"),K:w("aD"),dc:w("h_"),fo:w("OQ<G>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(R,G)"),d9:w("+dx,hidden(J,ai<hV>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),fT:w("je<hV>"),ec:w("je<m>"),gW:w("qX<J>"),X:w("bp<J>"),bW:w("dK"),W:w("bR<m>"),b4:w("bR<G>"),cI:w("jX<m>"),av:w("Z<zg>"),cc:w("Z<m>"),l:w("v"),gF:w("fi"),fA:w("ly"),dO:w("G9"),bw:w("adw<m?>"),cy:w("Kr"),q:w("mt"),y:w("R"),i:w("J"),z:w("@"),S:w("G"),eK:w("ai<kO>?"),m:w("aqc?"),cT:w("t?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),he:w("+qrPayload,token,usesRemaining(m,m,G)?"),gG:w("+members,trees,viewOnly(G,G,R)?"),az:w("qa?"),T:w("m?"),aD:w("dK?"),o:w("ly?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1T=new A.bh(B.fE,B.bH,B.fE,B.bH)
D.acG=new A.bh(B.fE,B.it,B.fE,B.it)
D.b25=new A.bh(B.id,B.bH,B.bH,B.bH)
D.b29=new A.ay(B.cQ,1.4,B.r,-1)
D.b2j=new A.ay(B.ac,1,B.r,-1)
D.ada=new A.aZ(140,1/0,0,1/0)
D.b3I=new A.aZ(0,1/0,64,1/0)
D.b3M=new A.aZ(0,84,0,1/0)
D.adi=new A.aZ(130,1/0,0,1/0)
D.aB7=w([B.m3,B.rn,B.c],x.O)
D.c3M=new A.a9(B.ay,B.aE,B.x,D.aB7,null,null)
D.b4v=new A.o(null,null,null,null,null,D.c3M,B.n)
D.daz=w([B.aW,B.bP],x.O)
D.c5U=new A.a9(B.b0,B.b5,B.x,D.daz,null,null)
D.b4Q=new A.o(null,null,null,null,null,D.c5U,B.n)
D.Xt=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fq=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.der=w([B.dv,D.Xt,D.fq],x.O)
D.c2Y=new A.a9(B.b0,B.b5,B.x,D.der,null,null)
D.b5A=new A.o(null,null,null,null,null,D.c2Y,B.n)
D.fkj=new A.F(!0,B.bU,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVh=new A.y("?",null,D.fkj,null,null,null,null,null,null,null,null,null)
D.b9f=new A.ce(B.A,null,null,D.fVh,null)
D.Vb=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDr=new A.y("\ud83c\udf33",null,D.Vb,null,null,null,null,null,null,null,null,null)
D.ae2=new A.ce(B.A,null,null,D.fDr,null)
D.fG3=new A.y("\ud83c\udfc6",null,At.K9,null,null,null,null,null,null,null,null,null)
D.b9q=new A.ce(B.A,null,null,D.fG3,null)
D.bbh=new A.fk(null,null,null,null,null,E.kc,null,null,null,null)
D.ae4=new A.ce(B.A,null,null,D.bbh,null)
D.kE=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fkS=new A.F(!0,D.kE,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF8=new A.y("No books on the shelf yet.",null,D.fkS,null,null,null,null,null,null,null,null,null)
D.emD=new A.D(B.nu,D.fF8,null)
D.b9G=new A.ce(B.A,null,null,D.emD,null)
D.frO=new A.F(!0,D.fq,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWc=new A.y("\ud83d\ude8c  On the road\u2026",null,D.frO,null,null,null,null,null,null,null,null,null)
D.enc=new A.D(B.ck,D.fWc,null)
D.ba8=new A.ce(B.A,null,null,D.enc,null)
D.aUM=new A.y("\ud83e\uddfa",null,D.Vb,null,null,null,null,null,null,null,null,null)
D.bao=new A.ce(B.A,null,null,D.aUM,null)
D.fIw=new A.y("\ud83c\udfad",null,D.Vb,null,null,null,null,null,null,null,null,null)
D.baA=new A.ce(B.A,null,null,D.fIw,null)
D.baD=new A.ce(B.A,null,null,A9.Xj,null)
D.aep=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aev=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bcP=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bcU=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bd4=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bd6=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bd8=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bdf=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lw=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bdi=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bdn=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bdo=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bdp=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lx=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.be_=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.B6=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.be8=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bes=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bev=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.beB=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.beJ=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.af5=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.beP=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.XE=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.af8=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bf1=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.XG=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bfn=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.afj=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bfK=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bg_=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bgn=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bgw=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Fl=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bgR=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bgT=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bgX=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.afI=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bhg=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bhl=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bhr=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.afL=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bhz=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bi1=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bi9=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bib=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.big=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ag1=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.biT=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.agn=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bjO=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.agA=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bkb=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Fz=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bkh=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bkr=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bkt=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.agE=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bkL=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bkM=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bkP=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.agL=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Yk=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bl7=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bls=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.blx=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.agY=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.blE=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Yp=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.blW=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.blX=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.FG=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bmI=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bnk=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bnq=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bnu=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.q4=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bnE=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bnI=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bnN=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bnP=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ahD=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ahH=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.FN=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.YH=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ahQ=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.boX=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bpf=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bpE=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bpN=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.aid=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.YQ=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bpW=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bqb=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.YT=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bqp=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bqF=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.YX=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bqK=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.aiw=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.aiy=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.br1=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.aiD=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bru=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.brw=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.brC=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.brI=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.brQ=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bsq=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bsU=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fzl=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bwo=new A.ez(null,D.fzl,B.eY,null,x.A)
D.fIn=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bwq=new A.ez(null,D.fIn,B.eY,null,x.A)
D.ajx=new A.bb(3e4)
D.bwY=new A.bb(38e5)
D.bxI=new A.ik(0,10,0,10)
D.bxR=new A.Q(0,1,0,0)
D.by1=new A.ik(0,4,0,4)
D.by4=new A.Q(0,4,5,0)
D.byk=new A.Q(10,10,14,10)
D.byw=new A.ik(10,4,10,4)
D.byE=new A.ik(10,8,10,8)
D.byF=new A.Q(10,8,8,8)
D.bz7=new A.Q(12,6,12,2)
D.bzn=new A.Q(14,0,14,6)
D.bzr=new A.Q(14,10,6,6)
D.bzs=new A.Q(14,12,14,0)
D.bzw=new A.Q(14,12,14,8)
D.bzz=new A.Q(14,12,8,14)
D.bzD=new A.ik(14,14,14,14)
D.bzT=new A.Q(14,6,14,40)
D.bzW=new A.Q(14,8,14,30)
D.bAi=new A.Q(16,2,16,10)
D.bAs=new A.Q(16,6,16,30)
D.bAu=new A.Q(16,6,16,8)
D.bAI=new A.Q(18,10,18,4)
D.bAK=new A.Q(18,12,18,0)
D.bAR=new A.Q(18,14,12,4)
D.al0=new A.Q(18,16,18,8)
D.bB7=new A.Q(18,20,18,22)
D.al4=new A.Q(18,24,18,24)
D.bBd=new A.Q(18,30,18,30)
D.bBv=new A.Q(20,10,12,20)
D.bBy=new A.Q(20,11,20,11)
D.bBJ=new A.Q(20,18,16,18)
D.bBL=new A.Q(20,18,20,6)
D.bCA=new A.Q(24,32,24,28)
D.bCB=new A.Q(24,36,24,32)
D.bCF=new A.Q(26,26,24,14)
D.bCU=new A.Q(2,4,2,8)
D.bCY=new A.Q(30,0,30,0)
D.bD8=new A.Q(38,22,22,22)
D.alo=new A.Q(40,24,24,24)
D.bDa=new A.ik(40,40,40,40)
D.bDc=new A.Q(46,30,30,30)
D.alr=new A.Q(4,0,0,8)
D.bDD=new A.Q(56,40,40,40)
D.bDH=new A.Q(1.25,1.25,1.25,1.25)
D.bDI=new A.Q(60,0,60,0)
D.bDM=new A.Q(6,14,6,16)
D.bDQ=new A.Q(6,4,12,0)
D.bDU=new A.Q(6,6,10,2)
D.bE0=new A.ik(7,3,7,3)
D.bEz=new A.Q(5,1.5,5,1.5)
D.bEK=new A.Q(6,2.5,6,2.5)
D.fQs=new A.y("Family Games",null,B.k6,null,null,null,null,null,null,null,null,null)
D.fxY=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.aa2,null,null,null,null,null,null,null,null,null)
D.cEL=w([D.fQs,D.fxY],x.p)
D.btW=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cEL,null)
D.bF1=new A.bA(1,B.bd,D.btW,null)
D.fUO=new A.y("Signature",null,B.n1,null,null,null,null,null,null,null,null,null)
D.bF4=new A.bA(1,B.bd,D.fUO,null)
D.fN3=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.th,null,null,null,null,null,null,null,null,null)
D.bFC=new A.bA(1,B.bd,D.fN3,null)
D.fRU=new A.y("Tell the AI what to fix",null,B.dd,null,null,null,null,null,null,null,null,null)
D.bFT=new A.bA(1,B.bd,D.fRU,null)
D.fsB=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTS=new A.y("Worksheets",null,D.fsB,null,null,null,null,null,null,null,null,null)
D.fsM=new A.F(!0,E.aeR,null,null,null,null,13,B.cz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSJ=new A.y("Track your project spending",null,D.fsM,null,null,null,null,null,null,null,null,null)
D.d25=w([D.fTS,B.au,D.fSJ],x.p)
D.bty=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d25,null)
D.bFZ=new A.bA(1,B.bd,D.bty,null)
D.fnB=new A.F(!0,E.kc,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new A.y("FAMILY LIBRARY",null,D.fnB,null,null,null,null,null,null,null,null,null)
D.bGf=new A.bA(1,B.bd,D.fyw,null)
D.NW=new C.HY("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wa=new C.HZ(0,"male")
D.of=new C.HZ(1,"female")
D.yC=new C.HZ(2,"unknown")
D.ug=new C.alk(0,"owner")
D.NX=new C.alk(1,"editor")
D.kL=new C.alk(2,"viewer")
D.and=new A.a0(61199,"MaterialIcons",!1)
D.bLb=new A.a0(61504,"MaterialIcons",!1)
D.bLc=new A.a0(61505,"MaterialIcons",!1)
D.bLe=new A.a0(61587,"MaterialIcons",!1)
D.bLl=new A.a0(61890,"MaterialIcons",!1)
D.bMc=new A.a0(63034,"MaterialIcons",!0)
D.bMu=new A.a0(63153,"MaterialIcons",!1)
D.bN_=new A.a0(63429,"MaterialIcons",!1)
D.apt=new A.a0(984520,"MaterialIcons",!1)
D.bLK=new A.a0(62776,"MaterialIcons",!1)
D.bPm=new A.ae(D.bLK,26,B.b1,null,null,null)
D.bK9=new A.a0(57648,"MaterialIcons",!1)
D.bPG=new A.ae(D.bK9,14,B.c,null,null,null)
D.bPX=new A.ae(B.GS,17,null,null,null,null)
D.bQ2=new A.ae(B.a1m,null,B.bP,null,null,null)
D.bQu=new A.ae(E.a1r,null,null,null,null,null)
D.bQx=new A.ae(B.iY,18,E.kc,null,null,null)
D.a1c=new A.a0(62044,"MaterialIcons",!1)
D.bQC=new A.ae(D.a1c,null,B.aW,null,null,null)
D.bQJ=new A.ae(B.yP,18,B.c,null,null,null)
D.bRr=new A.ae(B.e5,16,null,null,null,null)
D.bRy=new A.ae(D.a1c,32,B.aW,null,null,null)
D.bRR=new A.ae(E.ane,18,B.cQ,null,null,null)
D.bSV=new A.ae(B.H4,22,B.ax,null,null,null)
D.bT6=new A.ae(B.e5,22,B.b1,null,null,null)
D.bTj=new A.ae(Z.a1h,22,B.c,null,null,null)
D.bTp=new A.ae(B.us,52,B.c,null,null,null)
D.bTz=new A.ae(B.H4,30,B.ax,null,null,null)
D.bTS=new A.ae(B.a1w,null,B.c,null,null,null)
D.aq8=new A.ae(B.uD,22,B.c,null,null,null)
D.bU0=new A.ae(B.e5,17,null,null,null,null)
D.bUn=new A.ae(B.wq,26,B.cQ,null,null,null)
D.bV8=new A.ae(B.a1D,16,null,null,null,null)
D.bVU=new A.ae(B.us,24,B.c,null,null,null)
D.bVZ=new A.ae(B.Op,20,B.rS,null,null,null)
D.bW3=new A.ae(B.GQ,null,B.bP,null,null,null)
D.bWb=new A.ae(B.iY,18,B.c,null,null,null)
D.bWQ=new A.ae(B.cx,22,B.ac,null,null,null)
D.bXG=new A.ae(B.e9,16,B.ac,null,null,null)
D.bXS=new A.ae(D.a1c,20,B.aW,null,null,null)
D.aqy=new A.ae(B.hy,20,null,null,null,null)
D.bYm=new A.ae(B.cx,18,D.kE,null,null,null)
D.bYD=new A.ae(B.yX,28,B.c,null,null,null)
D.bYN=new A.ae(B.Of,null,B.fa,null,null,null)
D.bZ6=new A.ae(B.yX,24,B.c,null,null,null)
D.bZy=new A.ae(B.us,null,B.aW,null,null,null)
D.bZz=new A.ae(B.jU,20,B.cQ,null,null,null)
D.bZT=new A.ae(B.GS,16,null,null,null,null)
D.c0s=new A.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eF,!0,null,null,null,null)
D.arf=new C.a5R(10,null)
D.c0Y=new C.a5R(12,null)
D.c0Z=new C.a5R(14,null)
D.diq=w([B.bv,B.aW,B.fh,B.b1],x.O)
D.c29=new A.a9(B.ay,B.aE,B.x,D.diq,null,null)
D.bmu=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bsw=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cZD=w([D.bmu,D.bsw],x.O)
D.c2k=new A.a9(B.b0,B.b5,B.x,D.cZD,null,null)
D.dcw=w([B.f7,B.fM,B.fh],x.O)
D.c2q=new A.a9(B.ay,B.aE,B.x,D.dcw,null,null)
D.ahs=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bdq=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d0O=w([D.ahs,D.bdq],x.O)
D.c2Z=new A.a9(B.b0,B.b5,B.x,D.d0O,null,null)
D.bh5=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aAr=w([D.bh5,D.ahs],x.O)
D.c3i=new A.a9(B.ay,B.aE,B.x,D.aAr,null,null)
D.agi=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bjF=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dbC=w([D.agi,D.bjF],x.O)
D.c3X=new A.a9(B.a5,B.a8,B.x,D.dbC,null,null)
D.dpm=w([B.bz,B.nf],x.O)
D.c3Z=new A.a9(B.b0,B.b5,B.x,D.dpm,null,null)
D.bmp=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dqi=w([D.bmp,D.kE,D.kE,L.YG],x.O)
D.dsO=w([0,0.07,0.9,1],x.n)
D.c4u=new A.a9(B.a5,B.a8,B.x,D.dqi,D.dsO,null)
D.c4E=new A.a9(B.ay,B.aE,B.x,B.RY,null,null)
D.cXt=w([B.aD,D.lw],x.O)
D.c4H=new A.a9(B.a5,B.a8,B.x,D.cXt,null,null)
D.doW=w([B.b1,B.aW,B.bP],x.O)
D.c5F=new A.a9(B.ay,B.aE,B.x,D.doW,null,null)
D.c9T=w([10,20,30],x.t)
D.cjO=w([-1,-0.4,0.3,1],x.n)
D.crh=w([B.bv,B.b1,B.f7],x.O)
D.crp=w([B.br,B.aD,B.js],x.O)
D.crr=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cs7=w([30,140,262,360],x.n)
D.bkV=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cxE=w([D.bkV,E.ah7],x.O)
D.ehe=new A.t(1,2)
D.f5L=new A.cW(B.aS,D.ehe,3)
D.axk=w([D.f5L],x.F)
D.cF2=w([B.he,B.cf,B.fd],x.O)
D.cHM=w([B.bM,B.bs,B.bo],x.O)
D.bGO=new C.uC("classic","Classic leather","Gold-edged brown leather",D.aAr,E.kc,E.kc,"\u2766",B.K,!0,!1,!1,!1)
D.bcz=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.brk=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d3O=w([D.bcz,D.brk],x.O)
D.ahb=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bGJ=new C.uC("ornate","Ornate gold","Double gold border and flourishes",D.d3O,D.ahb,D.ahb,"\u2726",B.K,!0,!0,!0,!1)
D.bgF=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bnf=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cWn=w([D.bgF,D.bnf],x.O)
D.bGI=new C.uC("parchment","Parchment","Old paper with dark ink",D.cWn,D.FG,K.iS,"\u2767",B.K,!0,!1,!1,!0)
D.aex=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bpA=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dnb=w([D.aex,D.bpA],x.O)
D.bko=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.boS=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bGL=new C.uC("minimal","Clean paper","Plain and elegant, like a printed book",D.dnb,D.bko,D.boS,"",B.K,!0,!0,!1,!0)
D.bGN=new C.uC("midnight","Midnight","Deep blue with silver stars",I.aAK,B.cq,B.bN,"\u2727",B.K,!0,!0,!1,!1)
D.bGH=new C.uC("emerald","Emerald library","Green cloth, title on the left",W.axJ,E.kc,B.fU,"\u25c6",B.bj,!0,!1,!1,!1)
D.bq3=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dlc=w([B.ek,D.bq3],x.O)
D.blD=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bmP=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bGM=new C.uC("rose","Rose vintage","Burgundy with rose-gold lettering",D.dlc,D.blD,D.bmP,"\u2740",B.K,!0,!1,!0,!1)
D.dpU=w([B.cr,F.ng],x.O)
D.bGK=new C.uC("modern","Modern","Dark, bold, left-aligned",D.dpU,B.aJ,B.c,"",B.bj,!1,!0,!1,!1)
D.a3J=w([D.bGO,D.bGJ,D.bGI,D.bGL,D.bGN,D.bGH,D.bGM,D.bGK],A.at("O<uC>"))
D.cKJ=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dpH=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bGZ=new C.ln('What does "Ubuntu" mean?',D.dpH,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cY8=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bH1=new C.ln("In Swahili, what do we call a grandmother?",D.cY8,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cY_=w(["Babu","Mama","Baba","Dada"],x.s)
D.bGX=new C.ln("In Swahili, what do we call a grandfather?",D.cY_,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cZe=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bH0=new C.ln("What is a sister called in Swahili?",D.cZe,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d3f=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bGY=new C.ln("What is a brother called in Swahili?",D.d3f,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cXZ=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bH8=new C.ln("Which word means father in Swahili?",D.cXZ,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dqP=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bH7=new C.ln('"Umoja ni nguvu" means...',D.dqP,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dnT=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bH9=new C.ln('"Haba na haba hujaza kibaba" teaches us...',D.dnT,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d0W=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bH6=new C.ln('The African saying "It takes a village to raise a child" means...',D.d0W,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dr8=w(["The elders","The market","The river","The drum"],x.s)
D.bH2=new C.ln("Who is the traditional keeper of the family stories?",D.dr8,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cOT=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bH_=new C.ln("Why do families sit round the fire at night?",D.cOT,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dpW=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bH4=new C.ln('What does "Harambee" mean?',D.dpW,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d6_=w(["An elder","A baby","A market","A cow"],x.s)
D.bH3=new C.ln('"Mzee" is a respectful word for...',D.d6_,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dl3=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bH5=new C.ln('What does "Shikamoo" show?',D.dl3,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.axE=w([D.bGZ,D.bH1,D.bGX,D.bH0,D.bGY,D.bH8,D.bH7,D.bH9,D.bH6,D.bH2,D.bH_,D.bH4,D.bH3,D.bH5],x.J)
D.cTe=w([90,360],x.n)
D.cVV=w([B.bP,B.bl],x.O)
D.bme=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cWz=w([D.aex,D.bme],x.O)
D.cXc=w([-1,-0.3,0.4,1],x.n)
D.cY4=w([0,0.45,0.72,0.92,1],x.n)
D.bgB=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cYm=w([D.bgB,B.de],x.O)
D.ben=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aiN=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cYV=w([B.dv,D.ben,D.aiN],x.O)
D.cZT=w([B.b8,B.ja,B.oZ],x.O)
D.bh7=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.boJ=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.be3=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cZY=w([D.bh7,D.boJ,D.be3],x.O)
D.d_h=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d_r=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hla=new C.adb(78,424,48,44,56)
D.hl8=new C.adb(214,396,34,34,42)
D.hl9=new C.adb(442,452,56,50,64)
D.ayD=w([D.hla,D.hl8,D.hl9],A.at("O<adb>"))
D.d0_=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bdk=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.biS=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dsK=w([D.agi,D.bdk,D.biS],x.O)
D.bGP=new C.uD("leather","Leather",D.dsK,"vintage")
D.d70=w([B.d7,B.Mc,Ab.XU],x.O)
D.bGW=new C.uD("midnight","Midnight",D.d70,"starry")
D.cZU=w([B.ej,B.dY,B.l5],x.O)
D.bGV=new C.uD("forest","Forest",D.cZU,"story")
D.duL=w([B.el,B.ek,B.jM],x.O)
D.bGS=new C.uD("burgundy","Burgundy",D.duL,"royal")
D.cHk=w([B.aD,B.o6,B.nS],x.O)
D.bGT=new C.uD("royal","Royal",D.cHk,"royal")
D.d1r=w([B.bs,B.cr,F.ng],x.O)
D.bGQ=new C.uD("charcoal","Charcoal",D.d1r,"geo")
D.dsT=w([B.cd,B.dH,B.xW],x.O)
D.bGU=new C.uD("sunset","Sunset",D.dsT,"sunset")
D.dtA=w([B.ja,B.FH,B.XX],x.O)
D.bGR=new C.uD("ocean","Ocean",D.dtA,"band")
D.zo=w([D.bGP,D.bGW,D.bGV,D.bGS,D.bGT,D.bGQ,D.bGU,D.bGR],A.at("O<uD>"))
D.d1W=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d2x=w([B.al,B.aK,B.N],x.O)
D.d3T=w([B.ek,B.dY,B.d7,B.fV,B.xY,B.cQ,B.kf,B.e7,B.d2],x.O)
D.d3U=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f5M=new A.cW(B.dm,B.dC,8)
D.d43=w([D.f5M],x.F)
D.d5a=w([B.c_,B.dH,B.kb],x.O)
D.bfg=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bj9=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bna=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d5p=w([D.bfg,G.ahA,D.bj9,D.bna,D.aiN],x.O)
D.d5F=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d5Q=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bcK=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.biw=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d6h=w([D.bcK,D.afL,D.biw],x.O)
D.d6W=w([B.c_,B.ht],x.O)
D.d71=w([G.n9,B.i2,G.aeI,B.cI],x.O)
D.d8z=w([B.cI,G.n9,B.i2,D.lx,B.cI],x.O)
D.d98=w([B.aT,B.vP,B.xK],x.O)
D.azF=w(["True","False"],x.s)
D.eEm=new A.z(-0.65,0.6)
D.eQY=new A.z(-0.2,0.95)
D.eS2=new A.z(0.25,0.95)
D.eHQ=new A.z(0.7,0.6)
D.eSC=new A.z(1,0.1)
D.d9W=w([As.TM,D.eEm,D.eQY,D.eS2,D.eHQ,D.eSC],x.G)
D.bl8=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.brc=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bge=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.da1=w([D.bl8,D.brc,D.bge],x.O)
D.da5=w([B.bL,B.c6,B.du,B.aT],x.O)
D.daA=w([B.hZ,B.cd,B.tL],x.O)
D.daX=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.db7=w([B.f7,B.cQ],x.O)
D.bmy=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dbx=w([D.bmy,D.aev],x.O)
D.dbI=w([B.cL,B.fr,B.hM],x.O)
D.dbT=w([B.aJ,B.bl,B.d7],x.O)
D.dct=w([B.es,B.cT,B.dY],x.O)
D.dcO=w([B.dF,B.d7,B.Mc],x.O)
D.dcS=w([B.bu,B.m0,B.d2],x.O)
D.dd8=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.blO=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bk7=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.ddr=w([D.blO,D.afI,D.bk7],x.O)
D.dec=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dff=w([1,0,7,6,3,2],x.t)
D.a4H=w(["leather","linen","plain","stars","rays"],x.s)
D.dfr=w([0.5,2,3.6],x.n)
D.dfY=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bP3=new A.a0(985219,"MaterialIcons",!1)
D.bOz=new A.a0(983781,"MaterialIcons",!1)
D.aA6=w([B.a1m,B.hz,B.lI,B.i7,D.bP3,B.Hf,B.qr,D.bOz,I.aph,B.Cq,B.qt,B.mM],A.at("O<a0>"))
D.a4L=w(["double","single","corners","none"],x.s)
D.bGE=new C.zg("Little Seed","\ud83c\udf31",0)
D.bGG=new C.zg("Young Listener","\ud83d\udc42",40)
D.bGF=new C.zg("Storyteller","\ud83e\ude98",120)
D.bGD=new C.zg("Village Pride","\ud83c\udfe1",300)
D.bGB=new C.zg("Keeper of Roots","\ud83c\udf33",700)
D.bGC=new C.zg("Elder of the Fire","\ud83d\udd25",1500)
D.aA8=w([D.bGE,D.bGG,D.bGF,D.bGD,D.bGB,D.bGC],A.at("O<zg>"))
D.dh4=w([B.dt,B.bm,B.e7],x.O)
D.dhi=w([],x.C)
D.D3=w([],x.u)
D.aK8=new A.t(225,528)
D.eG1=new A.z(D.aK8,1)
D.ei_=new A.t(350,548)
D.eMh=new A.z(D.ei_,0.95)
D.aK3=new A.t(158,656)
D.eMa=new A.z(D.aK3,1.12)
D.eiM=new A.t(92,544)
D.eBA=new A.z(D.eiM,0.93)
D.ei2=new A.t(398,614)
D.eIc=new A.z(D.ei2,1.04)
D.ehR=new A.t(318,662)
D.ex3=new A.z(D.ehR,1.1)
D.a4T=w([D.eG1,D.eMh,D.eMa,D.eBA,D.eIc,D.ex3],A.at("O<+(t,J)>"))
D.djh=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.djI=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dkL=w([B.cI,G.n9,B.i2,D.lx,B.cI,B.i2],x.O)
D.dmc=w([B.aB,B.fr,B.fV],x.O)
D.dmu=w([-12,12],x.n)
D.dmx=w([-17,17],x.n)
D.dmO=w([-70,58],x.n)
D.dmQ=w([-70,-30,20],x.n)
D.dnR=w([B.bu,B.m0,B.YR],x.O)
D.do6=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dHP=new C.lP("construction","Construction","Jobsite & builds",B.yR)
D.dHW=new C.lP("house","Home Build","Houses & rooms",B.wl)
D.dHM=new C.lP("grocery","Grocery","Store & pantry",B.a2b)
D.dHL=new C.lP("calculator","Calculations","Math & estimates",B.Ow)
D.dHU=new C.lP("lumber","Materials","Lumber & supplies",B.OP)
D.dHI=new C.lP("kitchen","Kitchen","Remodel & meals",A3.aot)
D.bOx=new A.a0(983756,"MaterialIcons",!1)
D.dHN=new C.lP("landscape","Landscaping","Yard & garden",D.bOx)
D.dHH=new C.lP("plumbing","Plumbing","Pipes & water",B.pm)
D.dHX=new C.lP("electrical","Electrical","Wiring & power",B.hx)
D.dHF=new C.lP("store","Retail Shop","Daily business",B.lc)
D.dHG=new C.lP("paint_remodel","Paint & Remodel","Colors & walls",Ah.a1K)
D.bNY=new A.a0(983311,"MaterialIcons",!1)
D.dHT=new C.lP("roofing","Roofing","Roofs & exteriors",D.bNY)
D.bOK=new A.a0(983986,"MaterialIcons",!1)
D.dHE=new C.lP("warehouse","Warehouse","Storage & stock",D.bOK)
D.dHR=new C.lP("vehicles","Vehicles","Fleet & transport",B.Hg)
D.bLM=new A.a0(62785,"MaterialIcons",!1)
D.dHK=new C.lP("farm","Farm","Crops & livestock",D.bLM)
D.dHJ=new C.lP("restaurant","Restaurant","Food & catering",B.wt)
D.dHQ=new C.lP("tools","Tools","Workshop gear",B.Hb)
D.dHV=new C.lP("wallet","Cash & Wallet","Quick spending",B.jU)
D.bMV=new A.a0(63395,"MaterialIcons",!1)
D.dHS=new C.lP("concrete","Concrete","Foundation work",D.bMV)
D.dHO=new C.lP("blueprint","Blueprint","Plans & design",Ao.anK)
D.a5e=w([D.dHP,D.dHW,D.dHM,D.dHL,D.dHU,D.dHI,D.dHN,D.dHH,D.dHX,D.dHF,D.dHG,D.dHT,D.dHE,D.dHR,D.dHK,D.dHJ,D.dHQ,D.dHV,D.dHS,D.dHO],A.at("O<lP>"))
D.doC=w([B.bt,B.bm],x.O)
D.dpn=w([B.iw,B.nZ,B.dP],x.O)
D.agu=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aho=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bks=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bch=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aBf=w([D.agu,D.aho,D.bks,D.bch],x.O)
D.dqy=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a5q=w(["top","middle","bottom"],x.s)
D.drY=w([B.co,B.bl,B.d7],x.O)
D.aBx=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b62=new A.ac(0,B.G,B.aS,B.I,14)
D.aBA=w([D.b62],x.V)
D.bjo=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dsD=w([D.af5,D.YQ,D.bjo],x.O)
D.dsE=w([B.bf,B.cT,B.dY],x.O)
D.ehz=new A.t(24,-8)
D.eii=new A.t(48,0)
D.ehv=new A.t(24,6)
D.dui=w([B.I,D.ehz,D.eii,D.ehv],x.g)
D.duH=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eek={top:0,middle:1,bottom:2}
D.dxU=new A.bw(D.eek,["Top","Middle","Bottom"],x.r)
D.edZ={double:0,single:1,corners:2,none:3}
D.dy_=new A.bw(D.edZ,["Double line","One line","Corners","None"],x.r)
D.ef3={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dzu=new A.bw(D.ef3,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dzH=new A.bw(B.hT,[],A.at("bw<G,+(m,m)>"))
D.eed={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Dg=new A.bw(D.eed,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bw<m,G>"))
D.dCd=new H.Nl(32,null)
D.dCe=new H.Nl(40,null)
D.dCf=new H.Nl(46,null)
D.aJC=new C.atd(null)
D.egv=new A.t(0,40)
D.egw=new A.t(0,412)
D.egy=new A.t(0,900)
D.egJ=new A.t(0,-74)
D.egM=new A.t(100,300)
D.egN=new A.t(10,14)
D.egQ=new A.t(10,-10)
D.egU=new A.t(10,-46)
D.egV=new A.t(10,-58)
D.egW=new A.t(116,442)
D.egX=new A.t(11,-1)
D.egY=new A.t(11,-10)
D.egZ=new A.t(11,-21)
D.aJZ=new A.t(11,-60)
D.eh4=new A.t(14,-2)
D.eh5=new A.t(150,520)
D.a7o=new A.t(150,592)
D.eh8=new A.t(15,-15)
D.eh9=new A.t(16,-1)
D.ehd=new A.t(190,444)
D.ehg=new A.t(1,5)
D.eho=new A.t(21,-78)
D.ehp=new A.t(222,615)
D.Jc=new A.t(225,300)
D.a7q=new A.t(225,574)
D.ehy=new A.t(24,-52)
D.ehA=new A.t(250,210)
D.aKc=new A.t(300,0)
D.ehN=new A.t(300,440)
D.ehQ=new A.t(318,476)
D.ehT=new A.t(324,144)
D.a7t=new A.t(332,150)
D.ehV=new A.t(335,585)
D.ehW=new A.t(338,140)
D.ehX=new A.t(340,158)
D.ehZ=new A.t(34,-60)
D.DJ=new A.t(36,-24)
D.ei0=new A.t(372,470)
D.ei1=new A.t(390,455)
D.eia=new A.t(42,468)
D.eib=new A.t(431,510)
D.eic=new A.t(431,520)
D.eid=new A.t(45,-92)
D.eie=new A.t(46,20)
D.eif=new A.t(46,-92)
D.eig=new A.t(46,-94)
D.eih=new A.t(47,-4)
D.eij=new A.t(48,-4)
D.eir=new A.t(4,-26)
D.eiA=new A.t(60,455)
D.eiH=new A.t(8,14)
D.eiL=new A.t(8,-76)
D.eiN=new A.t(95,575)
D.eiO=new A.t(98,-24)
D.eiQ=new A.t(9,-2)
D.eiR=new A.t(9,-58)
D.aKl=new A.t(9,-79)
D.eiS=new A.t(9,-9)
D.eju=new A.t(16.5,8)
D.ejw=new A.t(3.2,0)
D.ejy=new A.t(-16.5,8)
D.ejF=new A.t(16.5,2)
D.ejI=new A.t(-3.2,0)
D.ejR=new A.t(9.5,6)
D.ejV=new A.t(-10,14)
D.ejW=new A.t(-10,-12)
D.ejX=new A.t(-10,-58)
D.ejY=new A.t(-11,-1)
D.ejZ=new A.t(-11,-10)
D.ek0=new A.t(-11,-60)
D.ek1=new A.t(-12,-14)
D.ek2=new A.t(-12,-16)
D.ek9=new A.t(-14,-2)
D.ekc=new A.t(-15,-15)
D.ekd=new A.t(-15,-3)
D.ekf=new A.t(-16,-1)
D.ekw=new A.t(-24,-52)
D.ekD=new A.t(-2,-34)
D.ekE=new A.t(-2,-38)
D.ekG=new A.t(-30,-100)
D.a7u=new A.t(-36,-24)
D.ekR=new A.t(-4,-26)
D.ekT=new A.t(-4,-6)
D.el1=new A.t(-8,-3)
D.el2=new A.t(-8,-48)
D.el5=new A.t(-9,-2)
D.el7=new A.t(-9,-58)
D.el8=new A.t(-9,-79)
D.el9=new A.t(-9,-9)
D.elb=new A.t(-9.5,6)
D.elp=new A.t(-16.5,2)
D.fFL=new A.y("Write a new book",null,B.hr,null,B.K,null,null,null,null,null,null,null)
D.elZ=new A.D(B.kj,D.fFL,null)
D.fUl=new A.y("Tap to go on",null,B.vk,null,null,null,null,null,null,null,null,null)
D.emk=new A.D(B.l6,D.fUl,null)
D.apH=new A.ae(B.hQ,18,B.c,null,null,null)
D.fyS=new A.y("Add",null,B.lp,null,null,null,null,null,null,null,null,null)
D.daj=w([D.apH,B.qP,D.fyS],x.p)
D.f3n=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.daj,null)
D.emn=new A.D(B.nr,D.f3n,null)
D.emo=new A.D(E.ajU,A9.Xj,null)
D.fsw=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC0=new A.y("New Project",null,D.fsw,null,null,null,null,null,null,null,null,null)
D.dez=w([D.apH,B.ad,D.fC0],x.p)
D.f3q=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.dez,null)
D.emC=new A.D(B.iq,D.f3q,null)
D.fEx=new A.y("Choose your header",null,A1.te,null,null,null,null,null,null,null,null,null)
D.emX=new A.D(B.hO,D.fEx,null)
D.bbw=new A.fk(2.2,null,null,null,null,B.cQ,null,null,null,null)
D.f8C=new A.a5(22,22,D.bbw,null)
D.b9B=new A.ce(B.A,null,null,D.f8C,null)
D.en1=new A.D(B.a_3,D.b9B,null)
D.bzN=new A.Q(14,2,14,6)
D.fSs=new A.y("The top of your book. Tap a design to see it.",null,Q.tf,null,null,null,null,null,null,null,null,null)
D.en2=new A.D(D.bzN,D.fSs,null)
D.fDG=new A.y("\ud83c\udfc6 A new record!",null,B.fS,null,null,null,null,null,null,null,null,null)
D.en3=new A.D(B.l6,D.fDG,null)
D.eoD=new A.iZ(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eoG=new A.iZ(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aKW=new A.iZ(1,0.9607843137254902,0.48627450980392156,0)
D.Jl=new A.iZ(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zZ=new A.iZ(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eoM=new A.iZ(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hnb=new C.biE(null)
D.buI=new A.mA(D.hnb,null,B.aw,null,null)
D.aOz=new A.cN(0,0,0,0,null,null,D.buI,null)
D.fyU=new A.y("\ud83c\udfc5",null,B.a9G,null,null,null,null,null,null,null,null,null)
D.eta=new A.cN(null,0,-34,null,null,null,D.fyU,null)
D.eBf=new A.z("E","Sit by the fire again")
D.eGQ=new A.z("C","Good Learner")
D.eKe=new A.z("D","Still Growing")
D.eOM=new A.z(-42,42)
D.eQ6=new A.z("B","Faithful Listener")
D.eS4=new A.z("A","Keeper of the Family")
D.eV5=new A.b7(-17,0.7,0)
D.eVC=new A.b7(-8,0.95,1.3)
D.eWB=new A.b7(18,0.65,5.2)
D.eWD=new A.b7(0,1.15,2.6)
D.eWV=new A.b7(9,0.9,3.9)
D.eYC=new A.cy([0,0,1,1])
D.aQ0=new A.a3(0,0,520,160)
D.f0s=new A.a3(10,612,440,618)
D.f0t=new A.a3(10,612,440,628)
D.f0w=new A.a3(14,-64,34,-12)
D.f0z=new A.a3(300,336,350,348)
D.a8n=new A.a3(30,96,420,346)
D.f0A=new A.a3(30,-9,46,1)
D.f0B=new A.a3(4,2,11,14)
D.f0D=new A.a3(-8,-12.5,8,-7)
D.f0E=new A.a3(-16.5,-21,16.5,1)
D.f0F=new A.a3(60,342,88,348)
D.TN=new A.a3(66,-66,94,-36)
D.f0G=new A.a3(6,8,10,14)
D.f0J=new A.a3(95,343,115,348)
D.f0K=new A.a3(-6.5,-74,6.5,-58)
D.f0Q=new A.a3(-100,-74,100,-12)
D.f0R=new A.a3(-10,8,-6,14)
D.f0S=new A.a3(-11,2,-4,14)
D.f0T=new A.a3(-11,-70,11,-56)
D.f1_=new A.a3(-13,-24,13,-4)
D.f15=new A.a3(-15,-21,15,0)
D.f18=new A.a3(-16,-21,16,1)
D.f19=new A.a3(-16,-21,16,2)
D.f1c=new A.a3(-16,-26,16,-6)
D.f1m=new A.a3(-230,-26,230,26)
D.f1K=new A.a3(-38,-26,12,-6)
D.f1O=new A.a3(-3,-70,3,-63)
D.f1P=new A.a3(-44,-22,44,0)
D.f1R=new A.a3(-46,-9,-30,1)
D.aQ4=new A.a3(-80,-190,80,20)
D.f1Y=new A.a3(-8,-26,40,-6)
D.f1Z=new A.a3(-98,-80,92,-75)
D.f2_=new A.a3(-9,-15,9,-9)
D.fS0=new A.y("Let the AI write it from your tree",null,B.iu,null,B.K,null,null,null,null,null,null,null)
D.bHG=new A.ds(1,B.cp,D.fS0,null)
D.d6V=w([E.a2G,B.ad,D.bHG],x.p)
D.f32=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.d6V,null)
D.fyx=new A.y("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dmz=w([D.aqy,B.ad,D.fyx],x.p)
D.f3c=new A.cd(B.aM,B.b9,B.i,B.m,null,B.p,null,0,D.dmz,null)
D.bTc=new A.ae(B.i6,14,B.b1,null,null,null)
D.fma=new A.F(!0,B.b1,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCq=new A.y("Cashier",null,D.fma,null,null,null,null,null,null,null,null,null)
D.df5=w([D.bTc,B.bn,D.fCq],x.p)
D.f3f=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.df5,null)
D.fyy=new A.y("Transfer & settings",null,B.dd,null,null,null,null,null,null,null,null,null)
D.bFJ=new A.bA(1,B.bd,D.fyy,null)
D.cZn=w([D.aq8,B.as,D.bFJ],x.p)
D.f3g=new A.cd(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.cZn,null)
D.f7j=new A.av(16,40)
D.f7o=new A.av(22,64)
D.f7v=new A.av(280,88)
D.f8j=new A.a5(30,null,null,null)
D.fxE=new A.y("The teacher is writing\u2026",null,B.Ai,null,null,null,null,null,null,null,null,null)
D.baK=new A.ce(B.A,null,null,D.fxE,null)
D.hhh=new A.bR("w",x.W)
D.f8I=new A.a5(null,56,D.baK,D.hhh)
D.f9v=new A.hK(5,8,8,1,null)
D.f9D=new A.hK(2,12,12,1.05,null)
D.fC6=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fal=new A.b2(D.fC6,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCl=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aS7=new A.b2(D.fCl,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fKJ=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.faP=new A.b2(D.fKJ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fVp=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.faU=new A.b2(D.fVp,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEv=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fb0=new A.b2(D.fEv,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.fSF=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aSb=new A.b2(D.fSF,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEt=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fbq=new A.b2(D.fEt,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fza=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fbs=new A.b2(D.fza,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fIb=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fby=new A.b2(D.fIb,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fW9=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fcd=new A.b2(D.fW9,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fQW=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fcC=new A.b2(D.fQW,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fVt=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fcF=new A.b2(D.fVt,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fMm=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fcH=new A.b2(D.fMm,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fGn=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fcI=new A.b2(D.fGn,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fGo=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fdI=new A.b2(D.fGo,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fC8=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fe_=new A.b2(D.fC8,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fE7=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fej=new A.b2(D.fE7,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLP=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fez=new A.b2(D.fLP,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHc=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.feA=new A.b2(D.fHc,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.frc=new A.F(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgc=new A.eu("\u2665",null,null,B.cN,null,null,null,null,null,null,D.frc)
D.foq=new A.F(!0,B.aP,null,null,null,null,28,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgs=new A.eu("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.foq)
D.fgJ=new A.F(!0,B.pR,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new A.F(!0,D.kE,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fie=new A.F(!0,D.kE,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fii=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fir=new A.F(!0,D.fq,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiC=new A.F(!0,D.fq,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiW=new A.rV(!0,B.t1,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjb=new A.F(!0,B.cI,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fje=new A.F(!0,D.kE,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjf=new A.F(!0,B.cI,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjk=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjn=new A.F(!0,B.cI,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjS=new A.F(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjT=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjV=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkm=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTk=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTm=new A.F(!0,D.lw,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkL=new A.F(!0,B.cI,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9L=new A.rV(!0,B.Ti,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.UQ=new A.F(!0,B.cI,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkV=new A.F(!0,B.N,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl_=new A.F(!0,D.fq,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fln=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmv=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTx=new A.F(!0,D.fq,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmZ=new A.F(!0,D.fq,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn0=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn6=new A.F(!0,K.iS,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTB=new A.F(!0,D.fq,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fok=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fom=new A.F(!0,B.N,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fon=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foL=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.I7,null,null,null)
D.aTQ=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp8=new A.F(!0,B.N,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpu=new A.F(!0,B.fa,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpS=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpW=new A.F(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq7=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqa=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqi=new A.F(!0,D.FG,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqr=new A.F(!0,B.b1,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqR=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqX=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CV,null,null,null)
D.frm=new A.F(!0,B.cI,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frv=new A.F(!0,B.cQ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frI=new A.F(!0,D.lx,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU9=new A.F(!0,D.fq,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Kj=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUb=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CV,null,null,null)
D.fs1=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs5=new A.F(!0,G.n9,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsu=new A.F(!0,B.b1,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsL=new A.F(!0,D.fq,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftu=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftX=new A.F(!0,D.fq,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fub=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUt=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aae=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aag=new A.F(!0,D.lw,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvU=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwb=new A.F(!0,B.aP,null,null,null,null,27,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwj=new A.F(!0,K.iS,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwr=new A.F(!0,K.iS,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwV=new A.y("Time:",null,B.hb,null,null,null,null,null,null,null,null,null)
D.fxg=new A.y("\ud83c\udfae",null,I.aa6,null,null,null,null,null,null,null,null,null)
D.fxh=new A.y("Themes",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fxM=new A.y("\ud83c\udfb2",null,B.x2,null,null,null,null,null,null,null,null,null)
D.fxQ=new A.y("Delete this game?",null,B.iu,null,null,null,null,null,null,null,null,null)
D.fxX=new A.y("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fmJ=new A.F(!0,B.N,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fym=new A.y("Debt receipt",null,D.fmJ,null,B.K,null,null,null,null,null,null,null)
D.aUp=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyF=new A.y("Person who owes",null,D.aUp,null,null,null,null,null,null,null,null,null)
D.fzD=new A.y("Notes",null,B.a9U,null,null,null,null,null,null,null,null,null)
D.fA3=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.flE=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA6=new A.y("Share",null,D.flE,null,null,null,null,null,null,null,null,null)
D.fB3=new A.y("Move your family trees",null,D.aUt,null,null,null,null,null,null,null,null,null)
D.fBI=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fCk=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fCI=new A.y("SAVE",null,D.Kj,null,null,null,null,null,null,null,null,null)
D.fDk=new A.y("The round button is the right answer.",null,Q.Ef,null,null,null,null,null,null,null,null,null)
D.fDF=new A.y("Remove this book?",null,B.fS,null,null,null,null,null,null,null,null,null)
D.fsr=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CV,null,null,null)
D.fEc=new A.y("Fireside Stories",null,D.fsr,null,null,null,null,null,null,null,null,null)
D.aUV=new A.y("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fEU=new A.y("What should the AI do?",null,B.dd,null,null,null,null,null,null,null,null,null)
D.fli=new A.F(!0,D.lw,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF9=new A.y("REPORT CARD",null,D.fli,null,null,null,null,null,null,null,null,null)
D.fFR=new A.y("Calabash Catch",null,B.Km,null,null,null,null,null,null,null,null,null)
D.fGj=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fGK=new A.y("\ud83c\udfe1",null,B.Ee,null,null,null,null,null,null,null,null,null)
D.fHr=new A.y("Ribbon bookmark",null,B.jo,null,null,null,null,null,null,null,null,null)
D.ftW=new A.F(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHV=new A.y("NGMY.ORG",null,D.ftW,null,B.K,null,null,null,null,null,null,null)
D.fJe=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fqb=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJZ=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fqb,null,B.K,null,null,null,null,null,null,null)
D.fLb=new A.y("Delete",null,B.UI,null,null,null,null,null,null,null,null,null)
D.fLc=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fLj=new A.y("Thumbnail",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fLV=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fM_=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.x4,null,B.K,null,null,null,null,null,null,null)
D.fMn=new A.y("Your photos",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fMC=new A.y("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fMZ=new A.y("\u2b50 stars",null,B.UX,null,null,null,null,null,null,null,null,null)
D.fNc=new A.y("Design your cover",null,A1.te,null,null,null,null,null,null,null,null,null)
D.fNi=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fNl=new A.y("PICTURE",null,M.vo,null,null,null,null,null,null,null,null,null)
D.fNn=new A.y("\ud83c\udfaf",null,D.Vb,null,null,null,null,null,null,null,null,null)
D.fNI=new A.y("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fNK=new A.y("You can undo it right after.",null,Q.Ef,null,null,null,null,null,null,null,null,null)
D.fOg=new A.y("Print",null,B.vl,null,null,null,null,null,null,null,null,null)
D.fOF=new A.y("Amount owed",null,D.aUp,null,null,null,null,null,null,null,null,null)
D.fOU=new A.y("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fPv=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fPy=new A.y("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fQ_=new A.y("Debtor signature",null,B.a9U,null,null,null,null,null,null,null,null,null)
D.fQ9=new A.y("Change icon",null,B.a9T,null,null,null,null,null,null,null,null,null)
D.fQX=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.th,null,null,null,null,null,null,null,null,null)
D.fRn=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fRt=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Va,null,null,null,null,null,null,null,null,null)
D.fRR=new A.y("Download",null,B.vl,null,null,null,null,null,null,null,null,null)
D.fRS=new A.y("The person who planted this tree has not made a game yet.",null,B.vp,null,null,null,null,null,null,null,null,null)
D.fRW=new A.y("Change",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fSL=new A.y("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fSO=new A.y("WHAT SHOULD IT CHANGE?",null,M.vo,null,null,null,null,null,null,null,null,null)
D.fTn=new A.y("COLOUR",null,M.vo,null,null,null,null,null,null,null,null,null)
D.fTB=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fTE=new A.y("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fTN=new A.y("Give me another clue",null,D.Kj,null,null,null,null,null,null,null,null,null)
D.fUI=new A.y("Create Family Tree",null,B.f4,null,null,null,null,null,null,null,null,null)
D.fUS=new A.y("THE TEACHER EXPLAINS THESE",null,T.th,null,null,null,null,null,null,null,null,null)
D.fgI=new A.F(!0,E.kc,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUY=new A.y("Write the first page myself",null,D.fgI,null,null,null,null,null,null,null,null,null)
D.fVw=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fVD=new A.y("Create Project",null,E.aU6,null,null,null,null,null,null,null,null,null)
D.hiv=new C.abS(1,"header")
D.abf=new C.abS(2,"projects")
D.hiw=new C.abS(3,"cashier")
D.abg=new C.abS(4,"familyTree")
D.hvS=new C.cD_(0,"start")
D.hvT=new C.cD0(0,"start")
D.hiU=new C.YV(null)
D.hjT=new C.Zn(null)
D.dzE=new A.bw(B.hT,[],A.at("bw<m,G9>"))
D.dhG=w([],x.dE)
D.dhH=w([],x.M)
D.hkp=new C.bfP(D.dzE,D.dhG,D.dhH,0,0,null,null)
D.aYV=new C.a_d(0,"intro")
D.aYW=new C.a_d(1,"countdown")
D.abu=new C.a_d(2,"ask")
D.W2=new C.a_d(3,"reveal")
D.aYX=new C.a_d(4,"end")
D.hnd=new C.t2(F.FQ,D.lx,B.cI,F.ly,5,!1,!1,!1,0,null)
D.hne=new C.t2(F.FQ,B.el,B.cI,B.bO,2,!0,!0,!1,2,B.cI)
D.hnf=new C.t2(B.o8,B.cQ,B.cI,F.ly,2,!0,!1,!1,2,B.aB)
D.hng=new C.t2(F.FQ,B.dF,B.cI,F.ly,5,!1,!1,!1,1,null)
D.hnh=new C.t2(F.Z2,D.aho,B.cI,F.ly,4,!0,!1,!0,0,null)
D.aZ_=new C.t2(F.Z2,B.dH,B.cI,F.ly,3,!0,!1,!0,2,null)
D.aZ0=new C.t2(F.mD,D.lx,B.c,F.ly,0,!1,!1,!0,0,null)
D.aZ1=new C.t2(B.o8,B.aD,B.cI,B.bO,2,!0,!0,!1,2,B.dH)
D.aZ2=new C.t2(B.o8,G.n9,B.i2,F.ly,5,!1,!1,!0,3,null)
D.hni=new C.t2(B.o8,B.dH,B.cI,F.ly,0,!0,!1,!1,0,B.aD)
D.aZ3=new C.t2(F.FQ,B.el,B.cI,B.bO,1,!1,!0,!1,1,null)
D.aZ4=new C.t2(F.Fn,B.aB,B.aD,F.ly,4,!0,!1,!0,2,null)
D.hnj=new C.t2(F.mD,B.aB,B.el,F.ly,3,!0,!1,!1,0,null)
D.hnk=new C.t2(B.o8,B.dF,B.cI,B.bO,1,!1,!0,!1,1,null)
D.hnl=new C.t2(F.Fn,D.agu,B.c,F.ly,5,!1,!1,!0,0,null)
D.hnZ=new C.a_M(null)
D.hw0=new C.afd(0,"still")
D.Wp=new C.afd(1,"walk")
D.abO=new C.afd(2,"pound")
D.abP=new C.afd(3,"drum")
D.hrt=new C.a13(0,"greet")
D.aZu=new C.a13(1,"teach")
D.abQ=new C.a13(2,"ask")
D.hru=new C.a13(3,"feedback")
D.aZv=new C.a13(4,"end")
D.Wu=new C.a1m(0,"intro")
D.Wv=new C.a1m(1,"asking")
D.AF=new C.a1m(2,"reacting")
D.ac_=new C.a1m(3,"driving")
D.ac0=new C.a1m(4,"arrived")
D.ac3=new C.aKL(0,"projects")
D.aZT=new C.aKL(1,"cashier")
D.htw=new C.aKL(2,"familyTree")})()};
(a=>{a["CdHXk4kYTZCvV61EsgaOAvCWG44="]=a.current})($__dart_deferred_initializers__);