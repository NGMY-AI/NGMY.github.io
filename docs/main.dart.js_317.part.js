((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,A3,A4,A5,A6,T,U,A7,A8,M,A9,H,Aa,Ab,V,W,X,Ac,Ad,Y,Ae,Af,Ag,Z,Ah,Ai,K,Aj,A_,A0,O,P,L,Q,C={
bD1(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bD1=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vp(null,""),$async$bD1)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n7(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cT(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qT(t,a1,B.hG,"book",E.Fs),$async$bD1)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Qp(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.L5(l)?y.l:y.i)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cy
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a2l(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD1,v)},
agW(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agW=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vp(null,""),$async$agW)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n7(b6)
s=x.S
r=A.d9(c1,0,A.dG(4,"count",s),A.S(c1).c)
q=F.a28(new A.M(r,new C.fDt(),r.$ti.k("M<ak.E,m>")).aG(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fDs(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agW)
case 6:l=c5
k=F.Qp(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.aob(s,D.dri,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.V("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agW)
case 10:l=c5
k=l==null?null:F.Qp(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.u(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.u(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.db(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.l2(a5,a2.k("l2<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
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
p=A.cD(new A.bc(h,s),new C.fDu(),s.k("J.E"),p)
p=F.a28(A.pj(p,3,A.a3(p).k("J.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a2l(s,b9),$async$agW)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aob(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agW,v)},
hst(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fMI(e,f),d,null,!0,!0,x.g2)},
aob:function aob(d,e,f){this.a=d
this.b=e
this.c=f},
fDt:function fDt(){},
fDs:function fDs(d){this.a=d},
fDu:function fDu(){},
fMI:function fMI(d,e){this.a=d
this.b=e},
bAT(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAT=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b4(b1,new C.frJ())){u=null
w=1
break}t=B.d.d7(b1,new C.frK())
s=$.W()
r=new A.qn()
q=A.Ba(r,D.aNe)
p=A.N()
p.r=B.c.gp(0)
q.aV(D.aNe,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bT
o.e=B.fG
n=new C.frP(t)
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bD(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bD(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aR(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bD(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bD(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aR(a3,o)}w=4
return A.b(r.ot().zn(520,160),$async$bAT)
case 4:w=3
return A.b(b3.hx(B.h1),$async$bAT)
case 3:b0=b3
u=b0==null?null:J.eX(B.dD.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAT,v)},
fB9(d){return C.i62(d)},
i62(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fB9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bgx()
n=d.x!=null&&d.z3(null).length===0
if(d.x!=null)t=n?D.zx:D.Iu
else t=d.gTK()?D.Iu:D.aIg
w=3
return A.b(C.bAT(d.ax),$async$fB9)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amT(s)
r=A.a4j(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aIg}else{p.c=C.wS(q,!0)
p.b=n?D.zx:D.Iu}r.a31(A.fWX(new C.fBb(p,d,new C.fBc(),t,n,o),null,D.bxG,B.wr))
u=r.ke(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fB9,v)},
fHN(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fHN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fB9(d),$async$fHN)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.GF(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHN,v)},
frJ:function frJ(){},
frK:function frK(){},
frP:function frP(d){this.a=d},
fBc:function fBc(){},
fBb:function fBb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBa:function fBa(){},
fN9(d,e){var w=0,v=A.j(x.H)
var $async$fN9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fNd(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fN9)
case 2:return A.h(null,v)}})
return A.i($async$fN9,v)},
bDu(d,e,f,g){return C.idv(d,e,f,g)},
idv(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bDu=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.f20)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fN5(g,r,f),d,null,!0,!0,x.H),$async$bDu)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bDu,v)},
fNe(d,e){var w=0,v=A.j(x.H)
var $async$fNe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fNh(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fNe)
case 2:return A.h(null,v)}})
return A.i($async$fNe,v)},
aYz:function aYz(d,e){this.c=d
this.a=e},
c3b:function c3b(){},
baH:function baH(d,e){this.b=d
this.a=e},
fNd:function fNd(d,e){this.a=d
this.b=e},
fNa:function fNa(d){this.a=d},
fNb:function fNb(d,e,f){this.a=d
this.b=e
this.c=f},
fNc:function fNc(d,e){this.a=d
this.b=e},
fN5:function fN5(d,e,f){this.a=d
this.b=e
this.c=f},
fN3:function fN3(d){this.a=d},
fN4:function fN4(d,e,f){this.a=d
this.b=e
this.c=f},
fNh:function fNh(d,e){this.a=d
this.b=e},
fNf:function fNf(d){this.a=d},
fNg:function fNg(d,e,f){this.a=d
this.b=e
this.c=f},
fvU(d,e){var w=0,v=A.j(x.y),u,t
var $async$fvU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1U(d),$async$fvU)
case 3:t=g
J.nv(t,new C.fvV(e))
u=A.ahA(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvU,v)},
fvV:function fvV(d){this.a=d},
aon:function aon(d,e,f){this.c=d
this.d=e
this.a=f},
aCD:function aCD(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dHx:function dHx(d,e){this.a=d
this.b=e},
dHi:function dHi(d,e){this.a=d
this.b=e},
dHl:function dHl(d,e,f){this.a=d
this.b=e
this.c=f},
dHk:function dHk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHj:function dHj(d,e){this.a=d
this.b=e},
dHm:function dHm(d,e){this.a=d
this.b=e},
dHg:function dHg(){},
dHh:function dHh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dHf:function dHf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dH0:function dH0(d){this.a=d},
dH1:function dH1(d,e,f){this.a=d
this.b=e
this.c=f},
dH2:function dH2(d,e){this.a=d
this.b=e},
dH_:function dH_(d){this.a=d},
dH7:function dH7(d,e){this.a=d
this.b=e},
dGZ:function dGZ(d){this.a=d},
dH8:function dH8(d,e,f){this.a=d
this.b=e
this.c=f},
dH9:function dH9(d,e,f){this.a=d
this.b=e
this.c=f},
dGY:function dGY(d,e){this.a=d
this.b=e},
dHa:function dHa(d,e,f){this.a=d
this.b=e
this.c=f},
dGX:function dGX(d,e){this.a=d
this.b=e},
dHb:function dHb(d,e){this.a=d
this.b=e},
dGW:function dGW(d){this.a=d},
dHc:function dHc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGU:function dGU(){},
dGO:function dGO(d){this.a=d},
dGP:function dGP(d){this.a=d},
dGV:function dGV(d,e){this.a=d
this.b=e},
dHd:function dHd(d,e){this.a=d
this.b=e},
dGT:function dGT(d){this.a=d},
dHe:function dHe(d){this.a=d},
dGS:function dGS(){},
dH3:function dH3(d,e){this.a=d
this.b=e},
dGR:function dGR(d){this.a=d},
dH4:function dH4(d,e,f){this.a=d
this.b=e
this.c=f},
dGQ:function dGQ(d,e){this.a=d
this.b=e},
dGN:function dGN(d,e){this.a=d
this.b=e},
dH5:function dH5(d){this.a=d},
dH6:function dH6(d,e,f){this.a=d
this.b=e
this.c=f},
dHA:function dHA(){},
dHB:function dHB(d,e){this.a=d
this.b=e},
dHy:function dHy(d){this.a=d},
dHz:function dHz(d){this.a=d},
dHu:function dHu(d,e){this.a=d
this.b=e},
dHv:function dHv(d){this.a=d},
dHn:function dHn(d,e,f){this.a=d
this.b=e
this.c=f},
dHo:function dHo(d,e,f){this.a=d
this.b=e
this.c=f},
dHp:function dHp(d,e,f){this.a=d
this.b=e
this.c=f},
dHq:function dHq(d,e,f){this.a=d
this.b=e
this.c=f},
dHr:function dHr(d,e,f){this.a=d
this.b=e
this.c=f},
dHs:function dHs(d,e,f){this.a=d
this.b=e
this.c=f},
dHt:function dHt(d,e,f){this.a=d
this.b=e
this.c=f},
dHC:function dHC(){},
dHD:function dHD(){},
dHE:function dHE(){},
dHF:function dHF(d){this.a=d},
dHw:function dHw(d,e){this.a=d
this.b=e},
hoB(d){return B.d.dN(D.a2i,new C.fwy(d),new C.fwz())},
ul:function ul(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fwy:function fwy(d){this.a=d},
fwz:function fwz(){},
akC:function akC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aUk:function aUk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SF:function SF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bej:function bej(){this.d=$
this.c=this.a=null},
d7l:function d7l(d,e){this.a=d
this.b=e},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7k:function d7k(){},
d7m:function d7m(d,e){this.a=d
this.b=e},
h9j(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.ng(t,w,v,u==null?new A.T(Date.now(),0,!1):u)},
KR(d,e){return C.i4G(d,e)},
i4G(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$KR)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.S.aL(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.db(p,x.f)
o=A.cD(o,new C.fyN(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fyO(),n),n.k("J.E"))
B.d.b_(o,new C.fyP())
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
return A.i($async$KR,v)},
B_(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$B_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$B_)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fLO(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$B_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$B_,v)},
aQq(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KR(d,e),$async$aQq)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.fTY(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.B_(d,e,u),$async$aQq)
case 3:return A.h(null,v)}})
return A.i($async$aQq,v)},
bBk(d,e,f){var w=0,v=A.j(x.H),u
var $async$bBk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KR(d,e),$async$bBk)
case 2:u=h
J.nv(u,new C.fvM(f))
w=3
return A.b(C.B_(d,e,u),$async$bBk)
case 3:return A.h(null,v)}})
return A.i($async$bBk,v)},
bBy(d,e){return C.i4F(d,e)},
i4F(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bBy=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bBy)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.N3
w=1
break}p=B.S.aL(0,q,null)
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
if(D.CI.ai(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3V,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a3i,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a3d,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cVX,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.HE(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.N3
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.N3
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBy,v)},
Rt(d,e,f){return C.id1(d,e,f)},
id1(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rt=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Rt)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ag(),null)),$async$Rt)
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
return A.i($async$Rt,v)},
QX(d,e){return C.i4H(d,e)},
i4H(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$QX)
case 7:r=g
q=r.tg("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KR(d,e),$async$QX)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lt(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QX)
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
return A.i($async$QX,v)},
agg(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QX(d,e),$async$agg)
case 3:s=g
r=J.a4(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.ay(),$async$agg)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agg)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agg,v)},
a2x(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2x=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QX(d,e),$async$a2x)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.ay(),$async$a2x)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2x)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2x)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2x)
case 6:return A.h(null,v)}})
return A.i($async$a2x,v)},
ng:function ng(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyN:function fyN(){},
fyO:function fyO(){},
fyP:function fyP(){},
fLO:function fLO(){},
fTY:function fTY(d){this.a=d},
fvM:function fvM(d){this.a=d},
HE:function HE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bOb:function bOb(d){this.a=d},
idk(d,e,f,g,h,i,j){return A.a5(d,!1).cm(A.ea(new C.fMm(j,i,f,e,h,g),!0,null,x.H))},
QU(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QU=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QX(h,g),$async$QU)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aPm)
u=!1
w=1
break}w=4
return A.b(C.hst(d,f,e),$async$QU)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agg(h,g),$async$QU)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.ng(""+(q+n),l,B.a.i(m.b),new A.T(Date.now(),0,!1)))}w=6
return A.b(C.B_(h,r,p),$async$QU)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rt(h,r,new C.HE("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QU)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QU,v)},
fMm:function fMm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zi:function Zi(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azH:function azH(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d80:function d80(d){this.a=d},
d8_:function d8_(d,e){this.a=d
this.b=e},
d7P:function d7P(d,e){this.a=d
this.b=e},
d7M:function d7M(d,e){this.a=d
this.b=e},
d7n:function d7n(d){this.a=d},
d7o:function d7o(d,e){this.a=d
this.b=e},
d7Q:function d7Q(d){this.a=d},
d7w:function d7w(d){this.a=d},
d7u:function d7u(d){this.a=d},
d7v:function d7v(d){this.a=d},
d7x:function d7x(d){this.a=d},
d7N:function d7N(d){this.a=d},
d7O:function d7O(){},
d7s:function d7s(d){this.a=d},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7y:function d7y(d){this.a=d},
d7z:function d7z(d,e){this.a=d
this.b=e},
d7Z:function d7Z(d){this.a=d},
d7Y:function d7Y(d,e){this.a=d
this.b=e},
d7X:function d7X(d){this.a=d},
d7J:function d7J(d){this.a=d},
d7I:function d7I(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7p:function d7p(d,e){this.a=d
this.b=e},
d7L:function d7L(d,e){this.a=d
this.b=e},
d7C:function d7C(d){this.a=d},
d7D:function d7D(d){this.a=d},
d7B:function d7B(){},
d7E:function d7E(d){this.a=d},
d7F:function d7F(d){this.a=d},
d7G:function d7G(d,e){this.a=d
this.b=e},
d7H:function d7H(d,e,f){this.a=d
this.b=e
this.c=f},
d7A:function d7A(d,e){this.a=d
this.b=e},
d7S:function d7S(d){this.a=d},
d7R:function d7R(){},
d7T:function d7T(d){this.a=d},
d7U:function d7U(d){this.a=d},
d7V:function d7V(d){this.a=d},
d7W:function d7W(d,e){this.a=d
this.b=e},
d7q:function d7q(d){this.a=d},
d7r:function d7r(d){this.a=d},
Zm:function Zm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beE:function beE(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d9L:function d9L(d){this.a=d},
d9M:function d9M(d){this.a=d},
d9K:function d9K(d){this.a=d},
d9N:function d9N(d){this.a=d},
d9J:function d9J(d){this.a=d},
d9O:function d9O(d){this.a=d},
d9I:function d9I(d){this.a=d},
d9P:function d9P(d,e){this.a=d
this.b=e},
d9H:function d9H(d,e){this.a=d
this.b=e},
d9Q:function d9Q(d,e){this.a=d
this.b=e},
Zk:function Zk(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeI:function aeI(d,e,f){this.a=d
this.b=e
this.c=f},
azI:function azI(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d8f:function d8f(d,e){this.a=d
this.b=e},
d8e:function d8e(d,e){this.a=d
this.b=e},
d8j:function d8j(d){this.a=d},
d8i:function d8i(d,e){this.a=d
this.b=e},
d8g:function d8g(d){this.a=d},
d8h:function d8h(d){this.a=d},
d8k:function d8k(d){this.a=d},
d8l:function d8l(d){this.a=d},
d8d:function d8d(d,e){this.a=d
this.b=e},
d8c:function d8c(d,e){this.a=d
this.b=e},
JX:function JX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YB:function YB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cGQ:function cGQ(d){this.a=d},
cGR:function cGR(){},
cGS:function cGS(d){this.a=d},
bbU:function bbU(d,e,f){this.b=d
this.c=e
this.a=f},
bbL:function bbL(d,e){this.b=d
this.a=e},
um:function um(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YT:function YT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbS:function bbS(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d_h:function d_h(d,e,f){this.a=d
this.b=e
this.c=f},
d_g:function d_g(d,e){this.a=d
this.b=e},
d_G:function d_G(d){this.a=d},
d_t:function d_t(){},
d_H:function d_H(d){this.a=d},
d_s:function d_s(){},
d_I:function d_I(d,e){this.a=d
this.b=e},
d_r:function d_r(d,e){this.a=d
this.b=e},
d_J:function d_J(d,e){this.a=d
this.b=e},
d_q:function d_q(d,e){this.a=d
this.b=e},
d_K:function d_K(d){this.a=d},
d_p:function d_p(){},
d_L:function d_L(d,e){this.a=d
this.b=e},
d_o:function d_o(d,e){this.a=d
this.b=e},
d_M:function d_M(d){this.a=d},
d_B:function d_B(d,e){this.a=d
this.b=e},
d_N:function d_N(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_Q:function d_Q(d){this.a=d},
d_R:function d_R(d){this.a=d},
d_A:function d_A(d,e){this.a=d
this.b=e},
d_S:function d_S(d,e){this.a=d
this.b=e},
aGH:function aGH(d){this.a=d},
bh7:function bh7(d){this.a=d},
ba5:function ba5(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i3E(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahN(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.T(Date.now(),0,!1))
s=new C.fwC(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.S(a4),p=q.k("a_<1>"),q=q.k("cP<1,m>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.y6)m.push(l===D.a_k?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.k5(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k5(h,a2,a2)-A.k5(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cP(new A.a_(a4,new C.fwA(u,f),p),new C.fwB(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i3F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahN(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fwH(v,e)
q=new C.fwF(v)
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
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f2(l,new C.fwG(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hQd(d,e,f,g){var w,v,u=C.i3G(d,e)
if(u<=0||f.length<=u)return new A.aei(!1,D.Cv,f)
if(g.t(0,e.a))return new A.aei(!1,D.Cv,f)
w=A.S(f).c
v=A.d9(f,0,A.dG(u,"count",x.S),w).dJ(0)
return new A.aei(!0,A.d9(f,u,null,w).dJ(0),v)},
hQe(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahN(d3),d2=d1.length
if(d2===0)return D.h4S
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.ca(0,t.a,new C.d8s(t))}s=new C.d8J(v)
d2=x.h
r=A.U(w,d2)
q=new C.d8B(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d8A(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.ca(0,k,new C.d8t()),o)}h=new C.d8z(s)
g=new C.d8y(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d8u(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.gR
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.d8H(new C.d8D(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gakA(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.rh(J.dJ(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.cc)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d8r(a2,new C.d8I(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cu<1>")
d2=A.C(new A.cu(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.FN(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.K4(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bM(0,new C.d8v(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f2(j,new C.d8w(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d8x())
c6.push(new C.aIN(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.beo(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
ho4(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hio(d,e,f,g,h,i,j,k,l,m,n){return new C.ZW(k,f,j,e,l,n,m,d,g,h,i,null)},
aBE(d,e,f,g,h,i,j){return new C.bi3(i,d,e,f,j,h,g,null)},
apv:function apv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDd:function aDd(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dVx:function dVx(d){this.a=d},
dVw:function dVw(d){this.a=d},
dVz:function dVz(d,e){this.a=d
this.b=e},
dVA:function dVA(d,e){this.a=d
this.b=e},
dVB:function dVB(d){this.a=d},
dVv:function dVv(d,e){this.a=d
this.b=e},
dVy:function dVy(d){this.a=d},
dVD:function dVD(d){this.a=d},
dVC:function dVC(d,e){this.a=d
this.b=e},
app:function app(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDa:function aDa(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dUY:function dUY(d){this.a=d},
dUW:function dUW(d){this.a=d},
dUX:function dUX(d){this.a=d},
dUZ:function dUZ(d,e){this.a=d
this.b=e},
dUT:function dUT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUr:function dUr(d){this.a=d},
dUs:function dUs(d,e){this.a=d
this.b=e},
dUG:function dUG(d){this.a=d},
dUE:function dUE(d){this.a=d},
dUF:function dUF(d,e){this.a=d
this.b=e},
dUH:function dUH(d){this.a=d},
dUI:function dUI(d,e){this.a=d
this.b=e},
dUS:function dUS(d,e){this.a=d
this.b=e},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUL:function dUL(d,e){this.a=d
this.b=e},
dUK:function dUK(d){this.a=d},
dUM:function dUM(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d){this.a=d},
dUN:function dUN(d){this.a=d},
dUO:function dUO(d){this.a=d},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUf:function dUf(d,e){this.a=d
this.b=e},
dUg:function dUg(d,e){this.a=d
this.b=e},
dV0:function dV0(d,e,f){this.a=d
this.b=e
this.c=f},
dUV:function dUV(d,e,f){this.a=d
this.b=e
this.c=f},
dUU:function dUU(d){this.a=d},
dUh:function dUh(d){this.a=d},
dUi:function dUi(d){this.a=d},
dUj:function dUj(){},
dUk:function dUk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUo:function dUo(d,e){this.a=d
this.b=e},
dUn:function dUn(d,e){this.a=d
this.b=e},
dUm:function dUm(d){this.a=d},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUl:function dUl(d){this.a=d},
dV_:function dV_(d){this.a=d},
dUB:function dUB(){},
dUC:function dUC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUA:function dUA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUw:function dUw(d,e,f){this.a=d
this.b=e
this.c=f},
dUv:function dUv(d,e,f){this.a=d
this.b=e
this.c=f},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUx:function dUx(d){this.a=d},
dUy:function dUy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUz:function dUz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUD:function dUD(d,e){this.a=d
this.b=e},
dV7:function dV7(){},
dV8:function dV8(d,e){this.a=d
this.b=e},
dV9:function dV9(d){this.a=d},
dVa:function dVa(d,e){this.a=d
this.b=e},
dV3:function dV3(d){this.a=d},
dV1:function dV1(d,e){this.a=d
this.b=e},
dV4:function dV4(d,e){this.a=d
this.b=e},
dV5:function dV5(d,e){this.a=d
this.b=e},
dV6:function dV6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dVb:function dVb(d){this.a=d},
dV2:function dV2(d){this.a=d},
dUq:function dUq(d){this.a=d},
bem:function bem(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d8p:function d8p(d){this.a=d},
d8o:function d8o(d,e){this.a=d
this.b=e},
d8q:function d8q(d){this.a=d},
d8n:function d8n(d,e){this.a=d
this.b=e},
fwC:function fwC(d,e){this.a=d
this.b=e},
fwD:function fwD(d){this.a=d},
fwE:function fwE(){},
fwA:function fwA(d,e){this.a=d
this.b=e},
fwB:function fwB(){},
fwH:function fwH(d,e){this.a=d
this.b=e},
fwI:function fwI(d){this.a=d},
fwJ:function fwJ(){},
fwF:function fwF(d){this.a=d},
fwG:function fwG(d,e){this.a=d
this.b=e},
K4:function K4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FN:function FN(d,e){this.a=d
this.b=e},
beo:function beo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d8s:function d8s(d){this.a=d},
d8J:function d8J(d){this.a=d},
d8B:function d8B(d){this.a=d},
d8C:function d8C(){},
d8A:function d8A(d){this.a=d},
d8t:function d8t(){},
d8z:function d8z(d){this.a=d},
d8y:function d8y(d,e){this.a=d
this.b=e},
d8u:function d8u(d){this.a=d},
d8D:function d8D(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d8E:function d8E(d){this.a=d},
d8F:function d8F(d){this.a=d},
d8G:function d8G(){},
d8H:function d8H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d8I:function d8I(){},
d8r:function d8r(d,e,f,g,h,i,j,k,l,m){var _=this
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
d8v:function d8v(d,e){this.a=d
this.b=e},
d8w:function d8w(d){this.a=d},
d8x:function d8x(){},
aIN:function aIN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bep:function bep(d,e){this.b=d
this.a=e},
d8K:function d8K(){},
d8L:function d8L(d){this.a=d},
d8M:function d8M(d){this.a=d},
d8N:function d8N(){},
bi4:function bi4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdt:function bdt(d,e){this.b=d
this.a=e},
bvQ:function bvQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fdA:function fdA(d){this.a=d},
blq:function blq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ePr:function ePr(d){this.a=d},
ePq:function ePq(d,e){this.a=d
this.b=e},
ZW:function ZW(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBC:function aBC(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
doD:function doD(d,e){this.a=d
this.b=e},
doC:function doC(d){this.a=d},
doA:function doA(d){this.a=d},
doB:function doB(d){this.a=d},
doM:function doM(d){this.a=d},
doN:function doN(d){this.a=d},
doL:function doL(d,e){this.a=d
this.b=e},
doO:function doO(){},
doR:function doR(d){this.a=d},
doK:function doK(d,e){this.a=d
this.b=e},
doQ:function doQ(){},
doS:function doS(d){this.a=d},
doJ:function doJ(d,e){this.a=d
this.b=e},
doT:function doT(d){this.a=d},
doI:function doI(d){this.a=d},
doU:function doU(d){this.a=d},
doH:function doH(d){this.a=d},
doV:function doV(d){this.a=d},
doG:function doG(d){this.a=d},
doW:function doW(d){this.a=d},
doF:function doF(d){this.a=d},
doX:function doX(d){this.a=d},
doE:function doE(d,e){this.a=d
this.b=e},
doP:function doP(d){this.a=d},
ad8:function ad8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bi3:function bi3(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ad7:function ad7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bi2:function bi2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
doY:function doY(d){this.a=d},
doZ:function doZ(d,e){this.a=d
this.b=e},
aBD:function aBD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHP:function aHP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ad9:function ad9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dp7:function dp7(d){this.a=d},
JT:function JT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hdf(d){var w=d.T,v=x.N
return w.jb(w,new C.c9J(),v,v)},
hHL(d){var w=d.bz
if(w>=0)return w
return 5},
hdh(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hdf(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hdg(d,e){var w=C.hdh(d,e)
if(w!=null&&w.cd(new A.T(Date.now(),0,!1)))return!0
return!1},
hHM(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hdf(d),w,w)
u=C.hdh(d,e)
t=u!=null&&u.cd(new A.T(Date.now(),0,!1))?u:new A.T(Date.now(),0,!1)
v.n(0,s,t.bS(A.dE(30,0,0,0,0,0).a).a6().ac())
d.T=v},
b_0(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b_0=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lj(t,B.Ih),$async$b_0)
case 3:if(l){u=!0
w=1
break}u=A.kX(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ih,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_0,v)},
c9J:function c9J(){},
hHJ(){var w,v=$.pz(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.h3(u)},
Iy(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Iy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Iy)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Iy)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
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
p=A.ab(m)
$.am.$1("[family tree sync codes] load: "+A.u(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Iy,v)},
a77(d){return C.hHK(d)},
hHK(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a77=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a77)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cI,null),$async$a77)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[family tree sync codes] save: "+A.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a77,v)},
c9I(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c9I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Iy(),$async$c9I)
case 3:t=m.jz(f),t=t.gae(t),s=x.f
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
return A.i($async$c9I,v)},
Nt(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Nt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c9I(d),$async$Nt)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Iy(),$async$Nt)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dQ(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.T(Date.now(),0,!1).a6().ac())
r.n(s,t,o)
w=9
return A.b(C.a77(s),$async$Nt)
case 9:case 8:u=t
w=1
break
case 5:n=C.hHJ()
w=10
return A.b(C.Iy(),$async$Nt)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a77(s),$async$Nt)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Nt,v)},
b__(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b__=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Iy(),$async$b__)
case 3:t=f
for(s=J.dl(t),r=s.gdM(t),r=r.dJ(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a77(t),$async$b__)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b__,v)},
a78(d,e,f){var w=0,v=A.j(x.H),u
var $async$a78=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apu(d,e),$async$a78)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Nt(d),$async$a78)
case 7:w=4
break
case 5:w=8
return A.b(C.b__(d),$async$a78)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a78,v)},
apo(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apo=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apu(f,e),$async$apo)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$apo)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Iy(),$async$apo)
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
return A.i($async$apo,v)},
aZZ(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZZ)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Iy(),$async$aZZ)
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
return A.i($async$aZZ,v)},
hHN(){var w,v=$.pz(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.h3(u)},
apr(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$apr)
case 3:if(!g){u=null
w=1
break}t=C.hHN()
w=4
return A.b(A.V3(),$async$apr)
case 4:s=g
r=B.dK.aK(B.S.ao(d.eS(),null))
r=B.cL.gct().aK(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a79(s),$async$apr)
case 5:p=e?999:2
u=new A.a07("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apr,v)},
apq(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$apq=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.V3(),$async$apq)
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
return A.b(C.aZZ(J.k(l==null?"":l),j),$async$apq)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cB(0,B.cG.aK(t))
s=C.hdi(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.u(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dQ(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=5
return A.b(A.a79(p),$async$apq)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apq,v)},
hdi(d){var w,v,u,t,s=null
try{w=B.S.aL(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hHP(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fY0(d){var w=0,v=A.j(x.m),u,t,s
var $async$fY0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.apq(t[1])
w=1
break}u=null
w=1
break}u=C.hdi(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fY0,v)},
hHP(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.db(v,x.f)
u=A.cD(u,new C.c9L(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c9M(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.T(Date.now(),0,!1)
q=A.U(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jz(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.db(l,u)
n=A.cD(n,new C.c9N(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c9O(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aps(h,w,s,r,q)},
apu(d,e){var w=0,v=A.j(x.y),u,t
var $async$apu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Nk(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AP(d),$async$apu)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apu,v)},
c9U(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c9U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AP(d),$async$c9U)
case 3:t=s.b6(f,new C.c9V(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.c9W())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9U,v)},
V4(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$V4=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apu(e,d),$async$V4)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Nt(e),$async$V4)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AP(e),$async$V4)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.c9S(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gan(r)){u=null
w=1
break}t=t.dA(r,new C.c9T(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KR(e,o),$async$V4)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aps(s,B.a.i(e.toLowerCase()),r,new A.T(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V4,v)},
b_3(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b_3=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.V4(d,e,f,g),$async$b_3)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gv(A.K0(q.eS(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_3,v)},
b_2(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b_2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.V4(d,e,f,g),$async$b_2)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.apr(r,f),$async$b_2)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFQ(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_2,v)},
V5(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$V5=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fY0(a0),$async$V5)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apo(g.a,d,e,f,s,r),$async$V5)
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
return A.b(C.bBa(e,j),$async$V5)
case 12:case 11:w=13
return A.b(C.ahy(e,j,s),$async$V5)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.B_(e,i,h),$async$V5)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bp0(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V5,v)},
aps:function aps(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c9Q:function c9Q(){},
c9R:function c9R(){},
c9P:function c9P(){},
c9L:function c9L(){},
c9M:function c9M(){},
c9N:function c9N(){},
c9O:function c9O(){},
c9V:function c9V(){},
c9W:function c9W(){},
c9S:function c9S(d){this.a=d},
c9T:function c9T(d){this.a=d},
h5v(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hE(d,new C.apt(w,e,g,i,f,h,null),!0,null,x.H)},
d8m(d,e,f,g,h,i,j,k){return new C.bel(i,e,k,j,g,f,h,d,null)},
apt:function apt(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDc:function aDc(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dVk:function dVk(d){this.a=d},
dVl:function dVl(d,e,f){this.a=d
this.b=e
this.c=f},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVq:function dVq(d){this.a=d},
dVh:function dVh(d){this.a=d},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVj:function dVj(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVm:function dVm(){},
dVs:function dVs(d){this.a=d},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVr:function dVr(d,e){this.a=d
this.b=e},
d8O:function d8O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ben:function ben(d,e,f){this.d=d
this.e=e
this.a=f},
acp:function acp(d,e,f){this.c=d
this.d=e
this.a=f},
bel:function bel(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
beq:function beq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_g:function a_g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDb:function aDb(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dVc:function dVc(d,e){this.a=d
this.b=e},
dVd:function dVd(d){this.a=d},
dVe:function dVe(d){this.a=d},
dVf:function dVf(d){this.a=d},
dVg:function dVg(d){this.a=d},
a_h:function a_h(d){this.a=d},
bjx:function bjx(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dVu:function dVu(d,e){this.a=d
this.b=e},
aYy(d,e){return new C.aYx(d,e,null)},
aYx:function aYx(d,e,f){this.c=d
this.d=e
this.a=f},
i67(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b6(d,11)},
idu(d){return A.bR(B.K,null,new C.fMP(new C.tU(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hfb(d,e){return new C.asn(e,d,null)},
aQ7(d,e,f,g,h,i,j){var w=C.i67(i)
if(w!=null)return A.by(e,new A.a7(j,f,new C.a6c(w,!0,null),null),B.aq)
return I.aPu(e,B.bX,f,g,h,i,j)},
lC:function lC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6c:function a6c(d,e,f){this.c=d
this.d=e
this.a=f},
bjd:function bjd(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b5$=e
_.c=_.a=null},
dGF:function dGF(d){this.a=d},
dGG:function dGG(){},
dGH:function dGH(d,e){this.a=d
this.b=e},
bjc:function bjc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fMP:function fMP(d){this.a=d},
fMO:function fMO(d,e){this.a=d
this.b=e},
fMN:function fMN(d,e){this.a=d
this.b=e},
fMM:function fMM(d,e){this.a=d
this.b=e},
asn:function asn(d,e,f){this.c=d
this.d=e
this.a=f},
cho:function cho(d,e){this.a=d
this.b=e},
aL8:function aL8(){},
idf(d){var w=null
return A.ca(w,w,!0,w,new C.fMb(),d,w,!0,!0,x.e2)},
iep(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fTF(h,g,f,e),d,w,!0,!0,x.N)},
idh(d,e){var w=null
return A.ca(w,w,!0,w,new C.fMg(e),d,w,!0,!0,x.dY)},
idg(d){var w=null
return A.ca(w,w,!0,w,new C.fMf(),d,w,!0,!0,x.c5)},
aT6:function aT6(d,e){this.a=d
this.b=e},
aT5:function aT5(d){this.a=d},
aR3:function aR3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMb:function fMb(){},
fTF:function fTF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMg:function fMg(d){this.a=d},
fMf:function fMf(){},
YV:function YV(d,e){this.c=d
this.a=e},
ays:function ays(){var _=this
_.d=$
_.c=_.a=_.e=null},
d03:function d03(d){this.a=d},
d04:function d04(d){this.a=d},
d02:function d02(d,e){this.a=d
this.b=e},
d05:function d05(d){this.a=d},
d06:function d06(d){this.a=d},
YU:function YU(d){this.a=d},
ayr:function ayr(){this.d=$
this.c=this.a=null},
d0_:function d0_(d){this.a=d},
d00:function d00(d){this.a=d},
d01:function d01(d){this.a=d},
Ys:function Ys(d){this.a=d},
axb:function axb(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cyC:function cyC(){},
cyI:function cyI(d){this.a=d},
cyJ:function cyJ(d){this.a=d},
cyK:function cyK(d){this.a=d},
cyH:function cyH(){},
cyL:function cyL(d){this.a=d},
cyM:function cyM(d){this.a=d},
cyG:function cyG(){},
cyN:function cyN(d,e){this.a=d
this.b=e},
cyF:function cyF(d,e){this.a=d
this.b=e},
cyD:function cyD(d,e){this.a=d
this.b=e},
cyO:function cyO(d){this.a=d},
cyE:function cyE(){},
cyP:function cyP(d){this.a=d},
a11:function a11(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvH:function bvH(){this.d=$
this.c=this.a=null},
fd1:function fd1(d,e){this.a=d
this.b=e},
fd2:function fd2(d){this.a=d},
fd3:function fd3(d,e){this.a=d
this.b=e},
abs:function abs(d,e){this.a=d
this.b=e},
FA:function FA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bvF:function bvF(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fd_:function fd_(d,e){this.a=d
this.b=e},
ax4:function ax4(d,e){this.c=d
this.a=e},
bvG:function bvG(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fd0:function fd0(d){this.a=d},
bvE:function bvE(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aNj:function aNj(){},
aNk:function aNk(){},
bD6(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bl(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oM(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fKO(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cZ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cZ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cZ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aY(B.o.u(s),2,"0")
n.push(A.cZ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XS(A.cZ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPK(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().kV(85,1280,B.eG),$async$aPK)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fe(),$async$aPK)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hfa()
w=9
return A.b(C.chn(q,r),$async$aPK)
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
return A.i($async$aPK,v)},
aQ5(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aQ5=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.chk(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cG.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().LD(p,!0,null,i).d8(0,B.fN),$async$aQ5)
case 9:n=a1
w=10
return A.b(n.lI(),$async$aQ5)
case 10:m=a1
w=11
return A.b(J.a2K(m).hx(B.h1),$async$aQ5)
case 11:l=a1
J.a2K(m).q()
if(l==null){w=8
break}i=J.eX(B.dD.gaP(l))
k="data:image/png;base64,"+B.cL.gct().aK(i)
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
return A.i($async$aQ5,v)},
fKO:function fKO(){},
tU:function tU(d){this.a=d},
asm:function asm(d,e,f){this.c=d
this.d=e
this.a=f},
aEI:function aEI(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eMB:function eMB(d,e){this.a=d
this.b=e},
eMs:function eMs(d){this.a=d},
eMt:function eMt(d){this.a=d},
eMz:function eMz(d,e){this.a=d
this.b=e},
eMy:function eMy(d,e){this.a=d
this.b=e},
eMv:function eMv(d,e){this.a=d
this.b=e},
eMu:function eMu(d,e){this.a=d
this.b=e},
eMw:function eMw(d){this.a=d},
eMx:function eMx(d,e){this.a=d
this.b=e},
eMA:function eMA(d,e){this.a=d
this.b=e},
eMn:function eMn(d,e){this.a=d
this.b=e},
eMr:function eMr(d){this.a=d},
eMq:function eMq(d,e){this.a=d
this.b=e},
eMp:function eMp(d){this.a=d},
eMC:function eMC(d,e){this.a=d
this.b=e},
eMD:function eMD(d,e){this.a=d
this.b=e},
eMo:function eMo(d,e){this.a=d
this.b=e},
hrV(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.T(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fKP(d,e,f){var w=0,v=A.j(x.N),u
var $async$fKP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hrV(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKP,v)},
bD8(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bD8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fKP(!0,d,e),$async$bD8)
case 4:w=3
return A.b(r.ask(g,d,e.a),$async$bD8)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aK(B.S.ao(C.hrV(d,e,null),null))
u="NGMY_WS:"+B.kn.gct().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD8,v)},
hjL(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h5a(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d1(s,"NGMYWSSYNC2|"))return!0
if(J.d1(s,"NGMY_WS:"))return!0
if(J.f4(s,t))return!0
if(J.d1(s,"{"))try{w=B.S.aL(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iba(d){var w,v,u,t=C.hjL(d)
if(t==null)return null
if(C.h5a(t))return t
w=B.a.cH(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b6(t,w))
if(C.h5a(v))return v}u=B.a.cH(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b6(t,u))
if(C.h5a(v))return v}return null},
h59(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d1(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d1(q,"NGMY_WS:")){v=B.ch.cB(0,B.cG.aK(J.mJ(q,8)))
w=t.a(B.S.aL(0,v,r))}else w=t.a(B.S.aL(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.h_B(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bD7(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bD7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asj(t[1]),$async$bD7)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h59(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h59(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD7,v)},
h58(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lm(w,v,d.c,d.d,new A.T(Date.now(),0,!1))},
bCF(){var w=0,v=A.j(x.o),u,t
var $async$bCF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GG(),$async$bCF)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h59(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCF,v)},
hsQ(d,e,f,g){return A.bR(B.K,null,new C.fTv(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fTv:function fTv(d,e,f){this.a=d
this.b=e
this.c=f},
adu:function adu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eMF:function eMF(d,e){this.a=d
this.b=e},
eMG:function eMG(d,e){this.a=d
this.b=e},
eMH:function eMH(d,e){this.a=d
this.b=e},
eMI:function eMI(d,e){this.a=d
this.b=e},
eME:function eME(d){this.a=d},
asg:function asg(d,e,f){this.c=d
this.d=e
this.a=f},
bkU:function bkU(){var _=this
_.c=_.a=_.e=_.d=null},
eMi:function eMi(d,e){this.a=d
this.b=e},
eMj:function eMj(d){this.a=d},
eMk:function eMk(d){this.a=d},
asl:function asl(d){this.a=d},
aEH:function aEH(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eMm:function eMm(d){this.a=d},
eMl:function eMl(d){this.a=d},
hL0(d,e,f,g,h){return new C.O5(h,g,d,e,f,null)},
aJu:function aJu(d,e){this.a=d
this.b=e},
O5:function O5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEJ:function aEJ(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eN4:function eN4(){},
eN0:function eN0(d,e){this.a=d
this.b=e},
eN1:function eN1(d){this.a=d},
eMM:function eMM(d){this.a=d},
eMK:function eMK(d){this.a=d},
eML:function eML(d){this.a=d},
eMV:function eMV(d,e){this.a=d
this.b=e},
eMS:function eMS(d,e){this.a=d
this.b=e},
eMT:function eMT(d,e){this.a=d
this.b=e},
eMU:function eMU(d,e,f){this.a=d
this.b=e
this.c=f},
eMQ:function eMQ(d,e,f){this.a=d
this.b=e
this.c=f},
eMO:function eMO(d){this.a=d},
eMP:function eMP(d){this.a=d},
eMR:function eMR(d){this.a=d},
eN7:function eN7(d){this.a=d},
eN6:function eN6(d){this.a=d},
eN8:function eN8(d){this.a=d},
eN5:function eN5(d){this.a=d},
eMJ:function eMJ(d){this.a=d},
eMN:function eMN(d,e){this.a=d
this.b=e},
eN3:function eN3(d,e){this.a=d
this.b=e},
eN2:function eN2(d,e){this.a=d
this.b=e},
eMY:function eMY(d){this.a=d},
eMZ:function eMZ(d){this.a=d},
eN_:function eN_(d,e){this.a=d
this.b=e},
eMX:function eMX(d,e){this.a=d
this.b=e},
eMW:function eMW(d,e,f){this.a=d
this.b=e
this.c=f},
bxt:function bxt(){},
AG(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
ag_(d,e,f){return C.i_E(d,e,f)},
i_E(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ag_=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$ag_)
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
return A.i($async$ag_,v)},
afZ(d,e){return C.i_D(d,e)},
i_D(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afZ=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afZ)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ab(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.u(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$afZ,v)},
hZp(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.SK(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bAa(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bAa=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b2f(q),$async$bAa)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aQ5(q,!1),$async$bAa)
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
return A.i($async$bAa,v)},
hyL(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r0(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r0(p,J.k(u==null?"":u),1,o,q)},
h_B(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.db(s,x.f)
w=A.cD(w,new C.cy_(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cy0(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lm(w,v,u,r,t==null?new A.T(Date.now(),0,!1):t)},
i3A(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.a_k
case"female":case"f":return D.akb
default:return D.y6}},
hoC(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h9k(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i3A(v==null?j:J.k(v))
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
return new C.i2(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i3C(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.N4
case"viewer":return D.ky
default:return D.tX}},
i3D(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gw(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bBr(d,e){return B.a.i(e.toLowerCase())===C.Gw(d,e)&&d.y!==D.ky},
u5(d,e){var w,v=d.y
if(v===D.ky)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gw(d,e))return!0
if(v===D.N4)return!0
v=d.e
return new A.M(v,A.h5f(),A.S(v).k("M<1,m>")).t(0,w)},
i31(d){return J.dJ(d,new C.fvC()).gM(0)},
fU4(d){var w=0,v=A.j(x.y),u,t
var $async$fU4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AP(d),$async$fU4)
case 3:u=t.qX(f,new C.fU5(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fU4,v)},
bBa(d,e){var w=0,v=A.j(x.H),u,t
var $async$bBa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AP(d),$async$bBa)
case 3:t=g
if(J.qX(t,new C.ftw(e))){w=1
break}if(C.i31(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bBa,v)},
akE(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.db(n,x.f)
w=A.cD(w,new C.bOc(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bOd(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bOe(),x.N)
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
if(r==null)r=new A.T(Date.now(),0,!1)
q=A.aJ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kG(l,w,v,!s,t,m,r,q,p,C.i3C(o==null?null:J.k(o)))},
hoL(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CW(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rq(d),$async$CW)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$CW)
case 4:t=f
w=5
return A.b(t.a65(0),$async$CW)
case 5:w=6
return A.b(C.fkB(t,l),$async$CW)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hkm(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oL(l,n),$async$CW)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hkm(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oL(l,n),$async$CW)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CW,v)},
fkB(d,e){return C.hWS(d,e)},
hWS(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fkB=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AG(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aL(0,a5,null)
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AG(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aL(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h_B(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AG(a9)+"_"+n))
i=C.hZp(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b2f(h),$async$fkB)
case 17:g=b1
if(g!=null){i=i.SK(g)
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
case 8:J.RB(q,new C.fkC())
if(p&&J.ad(q)!==0)C.oL(a9,q)
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
return A.i($async$fkB,v)},
bBB(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bBB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rq(d),$async$bBB)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CW(r),$async$bBB)
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
return A.i($async$bBB,v)},
hkm(d){var w,v,u,t
try{w=B.S.aL(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.db(w,x.f)
v=A.cD(v,new C.fgi(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fgj(),u),u.k("J.E"))
B.d.b_(v,new C.fgk())
return v}catch(t){v=A.a([],x.D)
return v}},
oL(d,e){return C.id5(d,e)},
id5(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oL=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rq(b2),$async$oL)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$oL)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AG(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aL(0,p,null)),new C.fM2(),a2).fP(0)
a2=J.b6(b3,new C.fM3(),a2).c0(0,new C.fM4())
n=A.dd(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ec(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f4(n,m)?17:18
break
case 17:a5=C.AG(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8r(l),$async$oL)
case 19:t=21
a5=C.AG(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aL(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8r(a5==null?null:J.k(a5)),$async$oL)
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
return A.b(C.afZ(r,"ngmy_worksheet_item_v3_"+C.AG(a8)+"_"+m),$async$oL)
case 29:w=30
return A.b(C.afZ(r,"ngmy_worksheet_thumb_v3_"+C.AG(a8)+"_"+m),$async$oL)
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
return A.b(C.bAa(h),$async$oL)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ag_(r,"ngmy_worksheet_thumb_v3_"+C.AG(a8)+"_"+a4,f),$async$oL)
case 40:g=i.SK(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afZ(r,"ngmy_worksheet_thumb_v3_"+C.AG(a8)+"_"+a4),$async$oL)
case 41:g=i.SK(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afZ(r,"ngmy_worksheet_thumb_v3_"+C.AG(a8)+"_"+a4),$async$oL)
case 42:case 34:a4=i.a
w=43
return A.b(C.ag_(r,"ngmy_worksheet_item_v3_"+C.AG(a8)+"_"+a4,B.S.ao(g.ag(),null)),$async$oL)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ag_(r,"ngmy_worksheets_index_v3_"+C.AG(a8),B.S.ao(q,null)),$async$oL)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eQ(b3,new C.fM5(q))
a4=a3.$ti.k("cP<1,a6<m,@>>")
a7=A.C(new A.cP(a3,new C.fM6(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.ag_(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oL)
case 45:w=46
return A.b(J.hxR(r),$async$oL)
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
a1=A.ab(b1)
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
return A.i($async$oL,v)},
Lh(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Lh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CW(d),$async$Lh)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.fU3(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.oL(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lh,v)},
bBo(d,e){var w=0,v=A.j(x.H),u
var $async$bBo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CW(d),$async$bBo)
case 2:u=g
J.nv(u,new C.fw5(e))
w=3
return A.b(C.oL(d,u),$async$bBo)
case 3:return A.h(null,v)}})
return A.i($async$bBo,v)},
Gy(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Gy)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aL(0,i,null)
if(x.j.b(t)){j=J.db(t,x.f)
j=A.cD(j,new C.fyT(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fyU(),s),s.k("J.E"))
B.d.b_(r,new C.fyV())
k=r}}catch(h){}w=4
return A.b(C.fh2(d),$async$Gy)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hXe(k,p,d)
j=A.S(o)
s=j.k("M<1,a6<m,@>>")
s=A.C(new A.M(o,new C.fyW(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.QD(d,o),$async$Gy)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fyX(d),j),j.k("J.E"))
if(m.length!==0)C.aOC(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gy,v)},
fLP(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fLP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QD(d,e),$async$fLP)
case 3:t=J.dJ(e,new C.fLQ(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOC(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLP,v)},
a2D(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2D=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a2D)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aL(0,l,null)
if(x.j.b(u)){m=J.db(u,x.f)
m=A.cD(m,new C.fTZ(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fU_(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qk(o,new C.fU0(e))
if(B.a.i(e.x).length===0&&C.u5(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDX(e.y===D.ky?D.ky:D.tX,m)}else p=e
if(q===-1)J.pC(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.QD(d,o),$async$a2D)
case 3:w=C.u5(p,d)?4:5
break
case 4:w=6
return A.b(C.aOB(C.Gw(p,d),p),$async$a2D)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2D,v)},
aON(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aON=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gy(d),$async$aON)
case 2:u=g
t=J.cF(u)
s=A.rh(t.eQ(u,new C.fvN(e)))
t.br(u,new C.fvO(e))
w=3
return A.b(C.QD(d,u),$async$aON)
case 3:w=s!=null&&C.bBr(s,d)?4:5
break
case 4:w=6
return A.b(C.fgm(e),$async$aON)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aON,v)},
ahN(d){var w=d.f,v=A.S(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fU9(),v),v.k("J.E"))
return w},
h2N(d,e){var w,v=d.f,u=A.rh(new A.a_(v,new C.fvh(e),A.S(v).k("a_<1>")))
v=C.ahN(d)
w=A.S(v).k("a_<1>")
v=A.C(new A.a_(v,new C.fvi(e,u),w),w.k("J.E"))
B.d.b_(v,new C.fvj())
return v},
i3G(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hsU(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h2N(d,u),new C.fTG(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i5c(d,e){var w
if(e==null||e.length===0)return 1
w=C.h2N(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fzG(),A.S(w).k("M<1,G>")).ff(0,B.x9)+1},
icZ(d){var w,v=C.ahN(d)
if(v.length===0)return null
w=new A.a_(v,new C.fLJ(),A.S(v).k("a_<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
i3B(d){return A.F(["id",d.a,"name",d.b,"gender",C.hoC(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i57(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
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
n=n!==D.y6?n:q.c
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
d=q.aDS(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cKk(a1,w,a3.d,a2.y,s,a0,v)},
AP(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$AP)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aL(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.db(t,x.f)
p=A.cD(p,new C.fyQ(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fyR(),s),s.k("J.E"))
B.d.b_(p,new C.fyS())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AP,v)},
ahy(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahy=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tX:D.ky
a7=C.Gw(b2,b3)
w=2
return A.b(C.AP(b1),$async$ahy)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fLE(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bBa(b1,b2),$async$ahy)
case 5:case 4:if(b0===-1){u=b2.aDX(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.y6?i:l.c
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
s.n(0,m,l.aDS(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tX:D.ky
u=t.yG(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.QD(b1,a8),$async$ahy)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOB(B.a.i(b3.toLowerCase()),u),$async$ahy)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahy,v)},
hkK(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.T(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.S(m).k("M<1,a6<m,@>>"),k=A.C(new A.M(m,C.hs3(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hkL(d,e){var w=new A.T(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.S(u).k("M<1,a6<m,@>>")
u=A.C(new A.M(u,C.hs3(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hUQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akE(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h5f(),A.S(j).k("M<1,m>")).c0(0,new C.fgQ())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tX
else s=B.d.t(t,u)?D.N4:D.ky
return w.aDX(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akE(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.db(q,h)
h=A.cD(h,new C.fgR(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.fgS(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fgT(),x.N).c0(0,new C.fgU())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tX
else s=B.d.t(t,u)?D.N4:D.ky
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.T(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kG(h,r,p,!m,t,o,l,j,v,s)},
fh2(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fh2=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fh6()
h=x.N
g=x.z
w=7
return A.b(A.iP(A.a([A.ls("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.ls("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.ls("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.U),$async$fh2)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h6(l,o)
J.h6(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.fh3(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.fh4(),l),l.k("J.E"))
B.d.b_(l,new C.fh5())
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
return A.i($async$fh2,v)},
hXe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dA(e,new C.flh(),v).c0(0,new C.fli())
t=A.dd(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gw(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ky){m=q.e
m=!new A.M(m,A.h5f(),A.S(m).k("M<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i57(l,v)
o=C.Gw(k,w)
p=v.d
s.n(0,u,o===w?k.bc9(p,D.tX):k.bc9(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.b_(j,new C.flj())
return j},
QD(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$QD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$QD)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fo_(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$QD)
case 3:return A.h(null,v)}})
return A.i($async$QD,v)},
aOB(d,e){return C.i1o(d,e)},
i1o(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lU("family_trees",A.a([C.hkK(e,d)],p),null,B.cI),$async$aOB)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lU("family_trees",A.a([C.hkL(e,d)],p),null,B.cI),$async$aOB)
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
return A.i($async$aOB,v)},
aOC(d,e){return C.i1p(d,e)},
i1p(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOC=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.S(e).k("M<1,a6<m,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fsQ(d),n),m)
r=l
w=7
return A.b(A.lU("family_trees",r,null,B.cI),$async$aOC)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fsR(d),n),m)
p=k
w=8
return A.b(A.lU("family_trees",p,null,B.cI),$async$aOC)
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
return A.i($async$aOC,v)},
fgm(d){return C.hUa(d)},
hUa(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fgm=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.R0("family_trees",A.F(["id",d],x.N,x.z),null,B.cI),$async$fgm)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ab(p)
$.am.$1("[family_trees] delete error: "+A.u(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fgm,v)},
r0:function r0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lm:function lm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cy2:function cy2(){},
cy1:function cy1(){},
cy_:function cy_(){},
cy0:function cy0(){},
HF:function HF(d,e){this.a=d
this.b=e},
i2:function i2(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
akD:function akD(d,e){this.a=d
this.b=e},
fvC:function fvC(){},
fU5:function fU5(d){this.a=d},
ftw:function ftw(d){this.a=d},
kG:function kG(d,e,f,g,h,i,j,k,l,m){var _=this
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
bOg:function bOg(){},
bOf:function bOf(){},
bOc:function bOc(){},
bOd:function bOd(){},
bOe:function bOe(){},
fkC:function fkC(){},
fgi:function fgi(){},
fgj:function fgj(){},
fgk:function fgk(){},
fM2:function fM2(){},
fM3:function fM3(){},
fM4:function fM4(){},
fM5:function fM5(d){this.a=d},
fM6:function fM6(){},
fU3:function fU3(d){this.a=d},
fw5:function fw5(d){this.a=d},
fyT:function fyT(){},
fyU:function fyU(){},
fyV:function fyV(){},
fyW:function fyW(){},
fyX:function fyX(d){this.a=d},
fLQ:function fLQ(d){this.a=d},
fTZ:function fTZ(){},
fU_:function fU_(){},
fU0:function fU0(d){this.a=d},
fvN:function fvN(d){this.a=d},
fvO:function fvO(d){this.a=d},
fU9:function fU9(){},
fvh:function fvh(d){this.a=d},
fvi:function fvi(d,e){this.a=d
this.b=e},
fvj:function fvj(){},
fTG:function fTG(d){this.a=d},
fzG:function fzG(){},
fLJ:function fLJ(){},
fyQ:function fyQ(){},
fyR:function fyR(){},
fyS:function fyS(){},
fLE:function fLE(d){this.a=d},
fgQ:function fgQ(){},
fgR:function fgR(){},
fgS:function fgS(){},
fgT:function fgT(){},
fgU:function fgU(){},
fh6:function fh6(){},
fh7:function fh7(d){this.a=d},
fh3:function fh3(d){this.a=d},
fh4:function fh4(){},
fh5:function fh5(){},
flh:function flh(){},
fli:function fli(){},
flj:function flj(){},
fo_:function fo_(){},
fsQ:function fsQ(d){this.a=d},
fsR:function fsR(d){this.a=d},
cy3:function cy3(d,e){this.a=d
this.b=e},
cy4:function cy4(d,e){this.a=d
this.b=e},
aGM:function aGM(d,e,f){this.a=d
this.b=e
this.c=f},
b8y:function b8y(){this.b=this.a=0},
b8x:function b8x(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bvI:function bvI(){},
wS(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcw()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aY(B.o.u(w.gng()),2,"0")+":"+B.a.aY(B.o.u(w.gGg()),2,"0")},
hKY(){var w,v=$.pz(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.h3(u)},
ash(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$ash=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ash)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$ash)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
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
p=A.ab(m)
$.am.$1("[worksheet qr stash] load: "+A.u(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ash,v)},
asi(d){return C.hKZ(d)},
hKZ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$asi=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$asi)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cI,null),$async$asi)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[worksheet qr stash] save: "+A.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$asi,v)},
ask(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ask=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ask)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hKY()
w=4
return A.b(C.ash(),$async$ask)
case 4:r=h
q=B.a.i(e)
p=B.dK.aK(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cL.gct().aK(p),"usesRemaining",25,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.asi(r),$async$ask)
case 5:u=new A.a07("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ask,v)},
asj(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$asj)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.ash(),$async$asj)
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
try{s=B.ch.cB(0,B.cG.aK(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.u(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dQ(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a6().ac())
p.n(q,i,m)}w=5
return A.b(C.asi(q),$async$asj)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asj,v)},
hfa(){var w=new A.T(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cH.av(999999)},
hL_(d){var w,v,u,t,s,r,q
try{w=A.ago(d)
if(w==null)return d
v=w
if(J.Ln(v)>960||J.Lm(v)>960){s=v
r=J.Ln(v)>=J.Lm(v)?960:null
v=A.agn(s,J.Lm(v)>J.Ln(v)?960:null,B.Oq,r)}s=v
u=A.am0(82).T6(s,B.yP)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cg(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
chn(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$chn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hL_(e)
$.chj.n(0,s,t)
u=C.bDa(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chn,v)},
b2f(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b2f=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d1(l,"data:image")){u=null
w=1
break}t=4
r=J.f4(l,",")?B.d.gal(J.lu(l,",")):l
q=B.cG.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hfa()
w=7
return A.b(C.chn(p,q),$async$b2f)
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
return A.i($async$b2f,v)},
chk(d){var w=0,v=A.j(x.T),u,t,s
var $async$chk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.chm(s),$async$chk)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cL.gct().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chk,v)},
a8r(d){var w=0,v=A.j(x.H),u,t
var $async$a8r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hrW(d)
if(t==null){w=1
break}$.chj.W(0,t)
w=3
return A.b(C.bD9(t),$async$a8r)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8r,v)},
bDa(d,e){return C.ibd(d,e)},
ibd(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bDa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNw
w=7
return A.b(n==null?$.aNw=I.h1K():n,$async$bDa)
case 7:r=g
q=new Uint8Array(A.cg(e))
p=J.mK(r,"thumbs","readwrite")
B.iP.mm(J.mI(p,"thumbs"),q,l)
w=8
return A.b(J.pB(p),$async$bDa)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ab(k)
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
return A.i($async$bDa,v)},
bD9(d){return C.ibb(d)},
ibb(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bD9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNw
w=7
return A.b(o==null?$.aNw=I.h1K():o,$async$bD9)
case 7:r=f
q=J.mK(r,"thumbs","readwrite")
B.iP.FN(J.mI(q,"thumbs"),m)
w=8
return A.b(J.pB(q),$async$bD9)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb delete] "+A.u(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bD9,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[234]
S=c[150]
A2=c[218]
G=c[199]
F=c[31]
E=c[209]
A3=c[113]
A4=c[220]
A5=c[109]
A6=c[187]
T=c[100]
U=c[110]
A7=c[217]
A8=c[37]
M=c[216]
A9=c[80]
H=c[88]
Aa=c[157]
Ab=c[118]
V=c[159]
W=c[230]
X=c[188]
Ac=c[179]
Ad=c[191]
Y=c[186]
Ae=c[65]
Af=c[71]
Ag=c[235]
Z=c[203]
Ah=c[30]
Ai=c[111]
K=c[181]
Aj=c[192]
A_=c[233]
A0=c[226]
O=c[102]
P=c[99]
L=c[136]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[229]
Ak=c[70]
Al=c[197]
R=c[232]
Am=c[231]
An=c[56]
I=c[54]
C.aob.prototype={}
C.aYz.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bgx(),f=h.x!=null&&h.z3(i).length===0
if(h.x!=null)w=f?B.b0:B.bz
else w=h.gTK()?B.bz:B.dS
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.I(D.bh9,B.q,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.eS2,B.f,i,i,new A.o(B.b0.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h9,i,i,i),B.R,D.fl6,B.au,A.d(C.wS(new A.T(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fh_,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b1d,i,i,i,i,B.Zj,i,i,i)
q=A.n(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.b0.j(0.28),B.q,1)
n=A.h3O(h.d)
o=A.p(B.A,C.aYy(A.fC0(h.e,n),30),B.f,i,i,new A.o(B.lQ,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fcn,B.L,i,i)
m=A.n(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bC,D.flo,B.ac,A.p(i,A.x(A.a([D.fAU,B.bC,A.d(A.AR(h.c),i,i,i,i,i,i,D.f7l,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fa,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.aih,i,i,i)
p=A.n(16)
m=A.I(B.aL,B.q,1)
l=j.aQD("Original due",C.wS(h.r,!1))
n=j.aQD("Current due",C.wS(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.O,n,B.R,A.p(i,A.d(h.gaKM(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Bf,i,i,1/0),B.R,j.cfC(),B.O,j.c32(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fmk,B.au,A.d(q,i,i,i,i,i,i,D.fbF,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaFy()){q=A.n(14)
o=A.I(B.cs,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fCd,B.O,A.by(A.n(12),A.en(new A.a7(1/0,88,A.b3(i,i,i,new A.VX(h.ax,B.M,D.eWg,!0,3.5,i),B.ax),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fy,i,i,i)],s))}p.push(B.aB)
p.push(D.ful)
return A.p(i,A.x(A.a([r,new A.D(B.aik,A.x(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQD(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a8K,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f8l,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cfC(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9j(B.dS,u,"Not paid yet")
w=t.z3(null).length
v=w===0?B.b0:B.bz
return this.a9j(v,u,C.wS(t.x,!0))},
c32(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9j(B.b0,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9j(B.b0,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a8K,u,u,u)
v=A.S(d).k("M<1,he>")
v=A.C(new A.M(d,new C.c3b(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bS(B.bA,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a9j(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a8K,w,w,w),1),new A.dq(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dO,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.baH.prototype={
a3(d,e){new A.VX(this.b,B.M,e,!0,3.5,null).a3(d,e)},
au(d){return d.b!==this.b}}
C.aon.prototype={
S(){return new C.aCD(A.a([],x.bp))},
ge2(){return this.c}}
C.aCD.prototype={
Z(){this.a1()
this.IK()},
IK(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1U(t.a.c),$async$IK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dHx(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IK,v)},
aSB(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bs:B.bn).j(0.22)
w=A.n(10)
return A.bs(v,new A.b4(4,r,new A.az(u,1,B.q,-1)),v,B.bl,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bs:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.n(10),D.aZR),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aSA(d){return this.aSB(d,null)},
Pq(d){return this.cjd(d)},
cjd(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pq=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GP:B.eG
w=7
return A.b(new A.hT().C6(72,900,900,n),$async$Pq)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fe(),$async$Pq)
case 8:p=f
n=B.cL.gct().aK(p)
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
if(n!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.u(o),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pq,v)},
b0k(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.n(10),n=A.I((q?B.bs:B.bn).j(0.18),B.q,1)
if(d)q=B.cT
else q=s.a.d.a?B.bs:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cT
else u=s.a.d.a?B.bs:B.bn
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fz(r,r,r,r,r,r,r,r,r,r,r,B.cT,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cB,s.a.d.a?B.bs:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jI,D.bti,r,r,r)},
D5(d){return this.bzV(d)},
bzU(){return this.D5(null)},
bzV(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D5=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b4,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jd(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ab(p,2)}o=new A.as(new A.bb(a4,B.b4,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b4,B.aN),s)
if(a3){a4=new A.T(Date.now(),0,!1).bS(6048e8)
m=A.c1(a4.gcj(),a4.gcf(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gcf(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.h3O(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wk?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",a4,new C.dHg(),new C.dHh(a2,t,a5,r,new C.dHi(a2,t),o,n,j),B.eJ,!0,x.y),$async$D5)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d6(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.f1H)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.f0m)
w=1
break}a1=A.fC0(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wk?"male":"female"
w=7
return A.b(A.ahM(a3,A.hbT(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D5)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wk?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gcf(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gcf(),a4.gcw(),0,0,0,0,0)))a5.cMu(a2.a)
w=8
return A.b(A.ahM(t.a.c,a5),$async$D5)
case 8:case 5:w=9
return A.b(t.IK(),$async$D5)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D5,v)},
aTf(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cT.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cT
else s=(this.a.d.a?B.bs:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aYy(d,18)
if(g)q=B.cT
else q=this.a.d.a?B.aQ:B.aw
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
S6(d){return this.cB1(d)},
cB1(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$S6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",s,new C.dHA(),new C.dHB(t,d),B.hB,!0,x.y),$async$S6)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.T(s,0,!1)
case 4:w=7
return A.b(A.ahM(t.a.c,d),$async$S6)
case 7:w=8
return A.b(t.IK(),$async$S6)
case 8:case 1:return A.h(u,v)}})
return A.i($async$S6,v)},
O3(d,e){return this.bKO(0,e)},
bKO(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$O3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l7(s,"Cancel","Delete",e.b+" \xb7 "+A.AR(e.c)+" will be removed from this device.","Delete this debt?"),$async$O3)
case 3:if(!g){w=1
break}w=4
return A.b(C.fvU(t.a.c,e.a),$async$O3)
case 4:w=5
return A.b(t.IK(),$async$O3)
case 5:case 1:return A.h(u,v)}})
return A.i($async$O3,v)},
aeT(d){return this.cd3(d)},
cd3(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bR(B.K,null,new C.dHu(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeT)
case 2:return A.h(null,v)}})
return A.i($async$aeT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.edA
w=J.dJ(m.d,new C.dHC())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dHD())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cJ(v,0,new C.dHE())
w=A.n(18)
s=m.a.d.a
r=s?D.crn:D.ayJ
q=A.I(s?B.cT.j(0.35):B.cT.j(0.18),B.q,1)
s=A.p(l,D.bTy,B.f,l,l,new A.o(B.cT.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.n(12),A.aL(!1,A.n(12),!0,D.ecY,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dHF(m),l,l,l,l,l,l,l),B.f,B.cT,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cx8("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AR(t)
r=A.a([A.p(l,A.x(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b6v(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.az,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.aie,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e0:B.c
q=A.n(18)
o=A.I((w?B.bs:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bOr,B.f,l,l,new A.o(B.cT.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bvJ,l,l,1/0))}else{w=m.gciu()
s=A.C(new A.M(v,w,A.S(v).k("M<1,t>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bxp,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.S(u).k("M<1,t>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ai,l,B.e,B.j,0,B.p)},
b6v(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.I((v.a.d.a?B.bs:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cT
else w=v.a.d.a?B.aQ:B.aw
return A.p(u,A.x(A.a([q,B.bC,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ek,u,u,u)},
cx8(d,e){return this.b6v(!1,d,e)},
civ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z3(j).length,h=d.bfK()
if(d.x!=null){w=d.z3(j).length
v=w===0?B.cT:B.bz}else if(d.gTK())v=B.bz
else{if(h)w=B.cT
else w=k.a.d.a?B.bs:B.bn
v=w}if(d.x!=null){w=d.z3(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wS(u,!1)}else{u.toString
t="Paid "+C.wS(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wS(w,!1)+" \xb7 "+i+" missed":"Due "+C.wS(w,!1)}w=k.a.d.a?B.e0:B.c
u=A.n(18)
if(d.gTK()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bs:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bm:B.lQ
o=A.I(d.gTK()&&d.x==null?B.bz.j(0.45):B.cT.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h3O(d.d)
o=A.p(B.A,A.de(C.aYy(A.fC0(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.aw
m=x.p
n=A.a([new A.dq(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFy())B.d.v(n,A.a([B.eg,A.X(B.Nv,B.cT.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cV,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AR(d.c)
l=k.a.d.a?B.aQ:B.aw
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(W.ai_,A.B(A.a([o,B.be,p,B.ab,A.x(A.a([n,B.bC,A.X(B.eA,(k.a.d.a?B.bs:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dHw(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.ul.prototype={}
C.akC.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bi
u=v?B.F:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cC,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a5))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.io,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.av3,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FQ,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eQ(m,A.B(l,B.m,a0,B.e,B.N,0,a0,a0),B.f,B.e_)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bsv,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.eX4)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vC,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lq,A.x(a2,B.m,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hp,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.az,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.btJ,a0,a0,a0,a0)}}
C.aUk.prototype={
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
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cV,n],m)
if(p.z)o.push(new A.D(B.vz,n,q))
return new A.D(B.d9,A.x(o,B.m,q,B.e,B.N,0,B.p),q)}}
C.SF.prototype={
S(){return new C.bej()}}
C.bej.prototype={
gbZ2(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.edv,D.edB],l)
for(w=0;w<8;++w){v=D.a2i[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.GA:B.C0
q=t===s
r=A.X(r,q?B.eD:B.bV,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bg,new A.y(v.c,n,A1.DB,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aS(24,24)
p=new A.az(B.eD,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bn(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eE,A.x(A.a([new A.D(B.mw,new A.ci(B.aP,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DX(!0,new C.akC(v,q.d,q.e,new C.d7k(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d7l(o,v),n,n,n,n,n,n,!1,B.a5))}k.push(new A.D(D.bu1,A.bG(D.fHA,new C.d7m(o,d),A.bo(B.b6,n,n,n,n,B.oo,n,n,new A.b7(A.n(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.byg,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.ng.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bcl(d,e,f){return new C.ng(this.a,e,d,f)}}
C.HE.prototype={
wn(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HE(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDM(d){var w=null
return this.wn(w,w,w,w,w,d,w,w,w,w,w,w)},
cIi(d){var w=null
return this.wn(w,w,w,w,d,w,w,w,w,w,w,w)},
bcj(d,e,f){var w=null
return this.wn(d,w,w,w,w,w,w,w,e,w,f,w)},
cIX(d){var w=null
return this.wn(w,w,w,w,w,w,d,w,w,w,w,w)},
cJ5(d){var w=null
return this.wn(w,w,w,w,w,w,w,w,w,d,w,w)},
cIg(d){var w=null
return this.wn(w,w,w,d,w,w,w,w,w,w,w,w)},
cJ7(d){var w=null
return this.wn(w,w,w,w,w,w,w,w,w,w,w,d)},
cId(d){var w=null
return this.wn(w,w,d,w,w,w,w,w,w,w,w,w)},
cI8(d){var w=null
return this.wn(w,d,w,w,w,w,w,w,w,w,w,w)},
FF(d){var w=null
return this.wn(w,w,w,w,w,w,w,d,w,w,w,w)},
cJf(d,e,f,g,h,i,j,k,l,m,n){return this.wn(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cFV(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bOb(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CI.geg(D.CI))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3V)
q=l.$2("frame",D.a3i)
l=l.$2("texture",D.a3d)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cJf(p,u,t,q,r,A.qR(d.h(0,"ribbon"))?A.G7(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Zi.prototype={
S(){return new C.azH(A.a([],x.I),D.N3)},
ge2(){return this.c}}
C.azH.prototype={
Z(){var w,v=this
v.a1()
v.f=A.zI(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.l1()
w=v.a
C.bBy(w.c,w.d).bB(new C.d80(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.T$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.T$=w
u.P$=0
v.a2()},
l1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KR(s.c,s.d),$async$l1)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d7P(t,r))
t.avy()
case 1:return A.h(u,v)}})
return A.i($async$l1,v)},
gas8(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avy(){var w,v,u=this.gas8(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saW(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saW(0,w==null?"":w)},
cbu(d){this.m(new C.d7M(this,d))
this.avy()},
Np(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Np=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.ng(B.o.u(1000*Date.now()),"Untitled page","",new A.T(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQq(r.c,r.d,s),$async$Np)
case 3:w=4
return A.b(t.l1(),$async$Np)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qk(t.d,new C.d7n(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d7o(t,p))
t.avy()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B8(p+1,B.cu,B.kV),$async$Np)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
AO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gas8()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQq(o.c,o.d,new C.ng(s,r,q,new A.T(p,0,!1))),$async$AO)
case 3:w=4
return A.b(t.l1(),$async$AO)
case 4:if(t.c==null){w=1
break}t.m(new C.d7Q(t))
case 1:return A.h(u,v)}})
return A.i($async$AO,v)},
O4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gas8()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d7w(r),s,null,!0,!0,x.y),$async$O4)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bBk(s.c,s.d,r.a),$async$O4)
case 4:t.m(new C.d7x(t))
w=5
return A.b(t.l1(),$async$O4)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TN(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$O4,v)},
yq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AO(),$async$yq)
case 5:case 4:if(t.c==null){w=1
break}w=J.cJ(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.QU(s,r.r,o,p,q),$async$yq)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hst(s,r.x,r.r),$async$yq)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KR(s.c,s.d),$async$yq)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.ng(""+(m+k),q,B.a.i(j.b),new A.T(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.B_(r.c,r.d,l),$async$yq)
case 11:w=12
return A.b(t.l1(),$async$yq)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yq,v)},
a0q(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AO(),$async$a0q)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyo(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dN(D.yY,new C.d7N(t),new C.d7O())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mu("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new F.mu(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h5r(o,new F.rm(s,r,"",p,new F.uD(q.d,null,null,null,null,"","","")),null),$async$a0q)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0q,v)},
NN(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AO(),$async$NN)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bR(D.adB,null,new C.d7s(t),s,!0,!0,!0,P.a6W,!1,!1,x.N),$async$NN)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cIi(r)
t.m(new C.d7t(t,q))
s=t.a
w=7
return A.b(C.Rt(s.c,s.d,q),$async$NN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
WX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(D.adB,null,new C.d7y(t),r,!0,!0,!0,P.a6W,!1,!1,x.e),$async$WX)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d7z(t,s))
r=t.a
w=4
return A.b(C.Rt(r.c,r.d,s),$async$WX)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B8(0,B.dV,B.nf)
case 1:return A.h(u,v)}})
return A.i($async$WX,v)},
bQc(d){var w=d.bU(),v=B.a.aY(B.o.u(w.gcf()),2,"0"),u=B.a.aY(B.o.u(w.gcw()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gyo(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bYh()
if(r.e)w=D.acp
else if(J.cn(r.d)){w=r.y
v=r.gyo(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f6N,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.ajf,new C.YB(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kr.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.eRQ,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dP.j(0.45),B.J,18)],x.V),E.w8,B.n),q,q,q,q,B.Zt,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcF2(),q,q,q,q,q,q,!1,B.a5))
w.push(B.R)
w.push(A.hn(D.bKF,D.fH2,r.gaMv(),q))
B.d.v(u,w)}w=A.av(A.cc(A.x(u,B.m,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.ez,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kr.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dT:B.Ap
u=A.x(A.a([new A.D(D.bv2,w,q),A.E(A.IY(v,new C.d7Z(r),J.ad(r.d)+1,q,r.gcbt(),u,B.aP),1),r.bCO()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c6(q,D.af_,new A.an(B.W,q,B.b2,B.r,A.a([D.aLU,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bYh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JX(B.dY,"AI",h.gbAH(),!0))
if(h.a.f)f.push(new C.JX(B.no,"Cover",h.gbLn(),!1))
if(h.a.f)f.push(new C.JX(B.yA,"Header",h.gbGk(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JX(B.uc,"Print",h.gckx(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hq:B.js
t=v?"Save":"Edit"
f.push(new C.JX(u,t,v?h.gcqR():new C.d7J(h),!1))}if(h.a.f)f.push(new C.JX(B.hE,"Add page",h.gaMv(),!1))
v=C.hoB(h.y.Q)
u=h.gyo(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.du7
else{k=new A.aS(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jZ.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kr,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bn(k,k,k,k),g,new A.a9(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kr.j(0.85)
p.push(new A.bB(1,B.bg,A.aB(B.c7,A.x(A.a([k,B.bC,new A.y(l.b,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a5),g))}return new C.akC(v,u,t+" \xb7 "+s+" "+r,new C.d7K(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AO(),$async$zR)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a28(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d7p(t,p),s,null,!0,!0,x.N),$async$zR)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yq(),$async$zR)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DI(),$async$zR)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fh("Swahili (Kiswahili)",!0),$async$zR)
case 18:w=16
break
case 17:w=19
return A.b(t.cBH(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zR)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zR,v)},
YR(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.I(E.jZ.j(0.3),B.q,1),r=x.p
return new A.D(B.cv,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.w8,B.a6),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A9.TX,w,w,w),A.d(g,w,w,w,w,w,w,A3.TR,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7L(d,h),w,w,w,w,w,w,w),w)},
DI(){return this.bPH()},
bPH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DI=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d7C(r),a7,null,!0,!0,x.ei),$async$DI)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d7D(o),a7,null,!0,!0,x.H).fj(new C.d7E(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.cf(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yY[a1]
J.cf(j,i.a)}w=8
return A.b(C.agW(a0,a7,new C.d7F(o),d,l,e,j),$async$DI)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ab(a8)
n=A.u(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a5(l,!0).eF()
l=o
l.si4($.aw())
J.aQS(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bcl(m.b.h(0,a4).b,a7,new A.T(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.B_(j.c,j.d,l),$async$DI)
case 11:w=12
return A.b(r.l1(),$async$DI)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yY[a1].a)
a5=l.cFV(j,12,a7)
l=r.a
w=15
return A.b(C.Rt(l.c,l.d,a5),$async$DI)
case 15:if(r.c!=null)r.m(new C.d7G(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B8(0,B.dV,B.nf)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cst("Undo",new C.d7H(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DI,v)},
Fh(d,e){return this.cBI(d,e)},
cBH(d){return this.Fh(d,!1)},
cBI(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fh=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d7S(a0),k,null,!0,!0,x.H).fj(new C.d7T(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cf(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a2l(m,new C.d7U(a0)),$async$Fh)
case 10:w=8
break
case 9:w=11
return A.b(C.bD1(new C.d7V(a0),m,a2),$async$Fh)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ab(a1)
q=A.u(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a5(o,!0).eF()
o=a0
o.si4($.aw())
J.aQS(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bcl(J.q(p,g).b,j.a,new A.T(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.B_(k.c,k.d,o),$async$Fh)
case 12:w=13
return A.b(r.l1(),$async$Fh)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cst("Undo",new C.d7W(r,d),null),null,null,null,null,B.r,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fh,v)},
bCO(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d7q(v):u
r=A.aH(u,u,u,u,A.X(D.bGl,s?D.kr:B.b_,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hn(A.X(B.vO,B.Fc,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Fc,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbKX(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kr.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d7r(v):u
return A.bm(!0,new A.D(D.buR,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eA,t<J.ad(v.d)?D.kr:B.b_,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Zm.prototype={
S(){return new C.beE(new A.as(B.as,$.aw()))}}
C.beE.prototype={
ga1y(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbOo(){var w,v=this.ga1y()
A:{if("cover"===v){w=D.cXO
break A}if("book"===v){w=D.cTx
break A}w=D.dmf
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.jZ.j(0.5),n=x.p,m=A.B(A.a([D.du8,B.at,D.bAh,A.aH(q,q,q,q,B.lw,q,q,q,new C.d9L(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j9(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d9M(r),r.ga1y()==="page",q,q,q,q))
if(r.a.d)l.push(A.j9(q,q,q,D.fBJ,q,new C.d9N(r),r.ga1y()==="book",q,q,q,q))
l.push(A.j9(q,q,q,D.foY,q,new C.d9O(r),r.ga1y()==="cover",q,q,q,q))
l=A.bS(B.bA,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.U,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.n(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kK,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dg,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbOo(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mL(q,B.c.j(0.08),new A.y(s,q,B.Jl,q,q,q,q,q,q,q,q,q),B.hJ,new C.d9P(r,s),q,q,q,q))}return A.eL(q,E.AV,A.cc(A.x(A.a([m,B.R,D.fEY,B.am,l,B.ac,k,B.O,A.bS(B.bA,w,B.bq,6,6),B.aB,A.dn(D.bKC,D.fFL,new C.d9Q(r,d),A.bo(B.b6,q,q,q,q,B.oo,q,q,new A.b7(A.n(16),B.Y),q,q,q)),B.au,D.fzZ],n),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.fD,q,q,B.ag),q,q,q,D.aiY,B.d1,q,new A.b7(p,new A.az(o,1.4,B.q,-1)),q)}}
C.Zk.prototype={
S(){return new C.azI(A.a([],x.Y))},
ge2(){return this.c}}
C.aeI.prototype={}
C.azI.prototype={
Z(){this.a1()
this.l1()},
l1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QX(p.c,p.d),$async$l1)
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
return A.b(C.bBy(r.c,q),$async$l1)
case 6:j=e
i=J
w=7
return A.b(C.KR(t.a.c,q),$async$l1)
case 7:m.push(new l.aeI(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d8f(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l1,v)},
b7I(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Q6(d,e){return this.cd1(0,e)},
cd1(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).cm(A.ea(new C.d8e(u,e),!0,null,x.y)),$async$Q6)
case 2:t=g
w=3
return A.b(u.l1(),$async$Q6)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aPq)
return A.h(null,v)}})
return A.i($async$Q6,v)},
Fk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aPm)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agg(s.c,s.d),$async$Fk)
case 5:q=e
w=6
return A.b(t.l1(),$async$Fk)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Q6(0,B.d.h1(t.d,new C.d8j(q))),$async$Fk)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QU(p,s.f,r,n,o),$async$Fk)
case 10:m=e
w=11
return A.b(t.l1(),$async$Fk)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aPq)
case 1:return A.h(u,v)}})
return A.i($async$Fk,v)},
PB(d,e){return this.cow(0,e)},
cow(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d8i(t,e),s,null,!0,!0,x.y),$async$PB)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2x(s.c,s.d,e.a),$async$PB)
case 4:w=5
return A.b(t.l1(),$async$PB)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PB,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bCR(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.I(E.jZ.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fM(0.7142857142857143,A.p(n,A.x(A.a([D.du9,B.ac,D.ecD,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kr.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcEZ(),n,n,n,n,n,n,!1,B.a5))}w=A.n(22)
v=A.I(E.jZ.j(0.85),B.q,1.6)
s=A.aB(n,A.p(n,D.bSm,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jZ.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d8k(d),n,n,n,n,n,n,!1,B.a5)
r=A.n(14)
q=B.w.j(0.3)
p=A.I(E.jZ.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.be,D.bAF,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f5R,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h9,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bYc,B.n),n,n,n,Am.My,D.bsY,n,n,n)
if(o.e)k=D.acp
else k=k.length===0?D.b6f:A.cq(new C.d8l(k))
return A.c6(n,D.af_,new A.an(B.W,n,B.b2,B.r,A.a([D.aLU,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bCR(d){var w,v,u=this,t=null,s=u.b7I(d),r=d.c,q=x.p,p=A.a([A.bU(0,A.eQ(B.A,new A.a7(300,420,new C.YB(d.b,s,r,t),t),B.f,B.dw),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bRF,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b_,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d8c(u,d),t,t,t,t,t,t,!1,B.a5),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f5r,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fM(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kr.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d8d(u,d),t,t,t,t,t,t,!1,B.a5)}}
C.JX.prototype={}
C.YB.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dN(D.yY,new C.cGQ(m),new C.cGR()),j=m.c,i=D.CI.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m3:B.b9
v=new C.cGS(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e9X,28)],x.V)
u=x.p
t=A.a([A.bU(0,A.b3(l,l,l,new C.bbU(j.x,h,l),B.ax),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aS(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bn(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ajg,8,0.85,2.2),v.$4(D.bxI,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ajg,8,0.85,2.4))
else if(r==="corners")t.push(A.bU(0,new A.D(D.bxE,A.b3(l,l,l,new C.bbL(h,l),B.ax),l),0,0,0))
r=A.X(D.axJ[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.av3,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bU(0,new A.D(D.by8,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGH(l),D.eW9),l,l,l,46,0,l))
return A.p(l,A.by(D.ab4,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.ab4,i,new A.a9(B.az,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbU.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eE()
f.du(11)
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
k=h.gbK().a.snapshot()
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
C.bbL.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bT
for(w=e.a,v=e.b,v=[D.eMR,new A.cx([w,0,-1,1]),new A.cx([0,v,1,-1]),new A.cx([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbK().a.snapshot()
w.drawPath((n.e=new A.cC(s)).a,m)
m.delete()
s=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
au(d){return!d.b.A(0,this.b)}}
C.um.prototype={}
C.YT.prototype={
S(){return new C.bbS()}}
C.bbS.prototype={
go7(){var w=this.d
return w===$?this.d=this.a.c:w},
gyo(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b4,B.aN),$.aw())}return v},
gaAZ(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b4,B.aN),$.aw())}return v},
gaqG(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b4,B.aN),$.aw())}return v},
q(){var w=this,v=w.gyo(0),u=v.T$=$.aw()
v.P$=0
v=w.gaAZ()
v.T$=u
v.P$=0
v=w.gaqG()
v.T$=u
v.P$=0
w.a2()},
arj(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j9(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d_h(this,f,u),e===u,s,s,s,s))}return A.bS(B.bA,r,B.bq,6,8)},
ax1(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.n(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kJ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go7(),a0=f.gyo(0),a1=a0.a.a,a2=f.gaAZ(),a3=a2.a.a,a4=f.gaqG(),a5=d.bcj(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.eQ(B.A,new A.a7(270,370,new C.YB(a5,d,f.a.e,e),e),B.f,B.dw),e),e,e,e)
a0=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.ax1("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d_G(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.ax1("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d_H(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yY[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b_
q=r.a===q
o=new A.az(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a9(B.az,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aB(e,A.x(A.a([p,B.cV,new A.y(t.b,e,new A.H(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d_I(f,t),e,e,e,e,e,e,!1,B.a5))}v=A.bS(B.bA,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aS(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.eD:B.K,2,B.q,-1)
q.push(A.aB(e,A.p(e,A.X(D.axJ[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bn(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d_J(f,n),e,e,e,e,e,e,!1,B.a5))}q=A.bS(B.bA,q,B.bq,8,8)
a4=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.ax1("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d_K(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mR,e,e,e)
m=A.a([],w)
for(l=D.CI.gdM(D.CI),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eD:B.b_
g=r.e===i
o=new A.az(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aB(e,A.x(A.a([j,B.bC,new A.y(i,e,new A.H(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d_L(f,k),e,e,e,e,e,e,!1,B.a5))}m=A.bS(B.bA,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mR,e,e,e)
k=f.go7()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fzs,B.ac,d,B.aR,a0,B.R,a2,B.aB,D.fFx,B.O,v,B.aB,D.fzB,B.O,q,B.aB,a4,B.aB,p,B.O,m,B.aB,l,A.l1(e,9,""+B.k.V(f.go7().f),36,18,new C.d_M(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mR,e,e,e),B.am,f.arj(D.a3V,f.go7().r,new C.d_N(f),D.dpu),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mR,e,e,e),B.am,f.arj(D.a3i,f.go7().w,new C.d_O(f),D.dpz),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mR,e,e,e),B.am,f.arj(D.a3d,f.go7().x,new C.d_Q(f),D.dr6),B.am,A.iI(e,B.b6,e,B.af,e,new C.d_R(f),e,e,e,D.ftT,f.go7().z),B.by,A.bG(D.fyg,new C.d_S(f,a6),A.bo(B.b6,e,e,e,e,B.oo,e,e,new A.b7(A.n(16),B.Y),e,e,e))],w),e,R.aiO,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGH.prototype={
a3(d,e){var w,v,u,t=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
t.F(new A.b5(0,0))
w=e.a
t.F(new A.ap(w,0))
v=e.b
t.F(new A.ap(w,v))
t.F(new A.ap(w/2,v-12))
t.F(new A.ap(0,v))
t.F(new A.bE())
u=A.N()
u.sar(D.bYS.aw(0,new A.a8(0,0,0+w,0+v)))
d.aR(t,u)},
au(d){return!1}}
C.bh7.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.sar(D.bXT.aw(0,new A.a8(0,0,a3,a4)))
a5.aV(new A.a8(0,0,a3,a4),w)
v=B.k.dj(a2/112)
u=new A.eE()
u.du(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cXN[u.av(9)]
j=u.av(14)
J.bx(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a8(n,j,n+m,j+l)
h=A.bw(i,B.hf)
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sar(new A.a9(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.er(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jZ.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c_(new A.a8(h,j,g,j+2)),d)
d.delete()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jZ.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c_(new A.a8(h,q,g,p)),d)
d.delete()
w.restore()
j=u.av(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.sar(D.bXf.aw(0,new A.a8(0,r,a3,q)))
d=p.H()
w.drawRect(A.c_(new A.a8(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jw
d=p.H()
w.drawRect(A.c_(new A.a8(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b9J.j(0.72).gp(0)
a5.aV(new A.a8(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sar(new A.bV(B.A,0.5,B.x,a0,0,A.a([D.bgL.j(0.22),B.K],t),a0,a0).aw(0,A.bW(new A.v(w,a2),a1)))
a5.af(new A.v(w,a2),a1,a4)},
au(d){return!1}}
C.ba5.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kS(new A.o(A.aq(D.kr,D.blg,w/4),o,new A.bO(B.Y,new A.az(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.Kx,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aHy,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aS(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jZ.j(0.6),o,o,new A.bn(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qh,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aZA,u,D.bYQ,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGH(o),D.eW4),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aUk(p.y,r,G.iF,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iF.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fjj,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iF.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iF.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fap,!0,B.a4,B.zN,B.an,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fjb,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iF.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.F0.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.F0.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.F0.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iF.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XS(A.cZ(A.a([A.cZ(o,o,o,o,o,o,o,o,o,D.fdw,B.a.ap(k,0,1)),A.cZ(o,o,o,o,o,o,o,o,o,o,B.a.b6(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iF.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.x(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.i6,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iF.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.by(B.Kx,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.bxa,A.x(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a9(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Kx,v,D.bZm,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.apv.prototype={
S(){return new C.aDd(A.a([],x._))},
bs(){return this.r.$0()},
pU(){return this.w.$0()},
ge2(){return this.c}}
C.aDd.prototype={
Z(){var w,v
this.a1()
this.vU()
w=this.a
v=w.c
if(v.length!==0)C.a78(v,w.e,w.d.w)},
vJ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h5v(r,t.e,!1,s.w,new C.dVx(u),null,s),$async$vJ)
case 2:w=3
return A.b(u.vU(),$async$vJ)
case 3:return A.h(null,v)}})
return A.i($async$vJ,v)},
a_A(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h5v(r,t.e,!0,s.w,new C.dVw(u),null,s),$async$a_A)
case 2:w=3
return A.b(u.vU(),$async$a_A)
case 3:return A.h(null,v)}})
return A.i($async$a_A,v)},
vU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AP(q.a.c),$async$vU)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.dVz(q,p))
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
return A.b(C.Gy(q.a.c).d8(0,B.pU),$async$vU)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dVA(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dVB(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vU,v)},
Oz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Oz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.eZK)
w=3
return A.b(C.Gy(t.a.c),$async$Oz)
case 3:r=e
w=4
return A.b(C.fLP(t.a.c,r),$async$Oz)
case 4:q=e
w=5
return A.b(C.Gy(t.a.c),$async$Oz)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dVv(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dA:B.cU,null,B.r,null,s,null,B.ms,null,null,null,null,null,null,null,null,null,null))
t.a.pU()
case 1:return A.h(u,v)}})
return A.i($async$Oz,v)},
HW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.idg(l),$async$HW)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hHL(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b_0(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HW)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hoL(r)
o=Date.now()
n=t.a.c
m=new C.kG(l,r.toUpperCase(),p,!0,B.U,D.Cv,new A.T(o,0,!1),0,n,D.tX)
w=5
return A.b(C.a2D(n,m),$async$HW)
case 5:w=6
return A.b(t.vU(),$async$HW)
case 6:t.a.bs()
t.a.pU()
if(t.c==null){w=1
break}t.Eu(m)
case 1:return A.h(u,v)}})
return A.i($async$HW,v)},
Eu(d){return this.cf3(d)},
cf3(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Eu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AP(u.a.c),$async$Eu)
case 2:n=l.rh(k.dJ(f,new C.dVy(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.app(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Eu)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2D(u.a.c,o),$async$Eu)
case 6:case 5:w=7
return A.b(u.vU(),$async$Eu)
case 7:u.a.pU()
return A.h(null,v)}})
return A.i($async$Eu,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tU(p)
if(r.e)return A.av(A.mM(q,p?B.bs:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e0:B.c
v=A.n(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bLH,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gce7(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FA(A.p(q,A.x(A.a([u,B.aR,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dZ,A.bG(D.fGO,r.gaQz(),A.bo(B.bS,q,q,q,q,q,Al.Zw,q,new A.b7(A.n(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bx6,q,q,1/0),15,B.af,1.05,D.a9K,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b8],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yG,B.aV,q,q,q,q),q,q,q,new C.dVD(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yy,B.aV,q,q,q,q),q,q,q,r.gafy(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.aom,D.fmK,r.gaQz(),A.bo(B.bS,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.FA(r.cBN(J.q(r.d,s),o),14,B.af,1,D.a9K,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cBN(d,e){var w=null,v=e.a,u=v?B.e0:B.c,t=A.n(14),s=A.I((v?B.e2:B.bN).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.en,10)],x.V),q=A.n(14),p=A.p(w,D.bKL,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaox(),m=d.d?"":" \xb7 Public",l=d.y===D.ky?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.be,l,A.X(B.Nf,v?B.bs:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dVC(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.app.prototype={
S(){return new C.aDa(A.a([],x._),A.aX(x.N),A.b7I())},
bs(){return this.r.$0()},
ge2(){return this.c}}
C.aDa.prototype={
Z(){var w,v,u=this
u.a1()
u.d=u.a.w
u.acr()
w=u.a
v=w.c
if(v.length!==0)C.a78(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a2x(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xQ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dUY(r),s,null,!0,!0,x.y),$async$a2x)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jt()
t.m(new C.dUZ(t,r))
w=4
return A.b(t.vL(),$async$a2x)
case 4:t.a.bs()
t.xQ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2x,v)},
crv(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dUT(w,f,d,e))},
aSQ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jR(q,q,1,1)
this.w.sp(0,u)},
b9Z(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eI(new Float64Array(16))
q.e3(r)
w=q.CB()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e9(r,u,0,1)
t.jR(v,v,1,1)
t.e9(-r,-u,0,1)
t.iL(0,q)
s.sp(0,t)},
acr(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AP(u.a.c),$async$acr)
case 2:t=s.rh(r.dJ(e,new C.dUr(u)))
if(t!=null&&u.c!=null)u.m(new C.dUs(u,t))
return A.h(null,v)}})
return A.i($async$acr,v)},
xQ(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
vJ(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h5v(o,t,!1,r,new C.dUG(u),q.a,s),$async$vJ)
case 2:n=A
m=J
w=3
return A.b(C.Gy(u.a.c),$async$vJ)
case 3:p=n.rh(m.dJ(e,new C.dUH(u)))
if(p!=null&&u.c!=null)u.m(new C.dUI(u,p))
return A.h(null,v)}})
return A.i($async$vJ,v)},
Jt(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vL(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2D(t,s),$async$vL)
case 2:return A.h(null,v)}})
return A.i($async$vL,v)},
a15(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a15=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u5(q,t.a.c)){t.xQ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iep(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a15)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jt()
t.m(new C.dUS(t,r))
w=4
return A.b(t.vL(),$async$a15)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
a_O(){return this.cf5()},
cf5(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.u5(q,t.a.c)){t.xQ("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dUQ(r,new C.tU(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_O)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jt()
t.m(new C.dUR(r,t))
w=4
return A.b(t.vL(),$async$a_O)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_O,v)},
VN(d){return this.bzS(d)},
bzS(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u5(r,t.a.c)){t.xQ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dUf(t,d),r,null,!0,!0,x.P),$async$VN)
case 3:s=f
if(s==null){w=1
break}t.Jt()
t.m(new C.dUg(t,s))
w=4
return A.b(t.vL(),$async$VN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VN,v)},
a2T(d){return this.cDY(d)},
cDY(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dV0(u,d,new C.tU(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2T)
case 2:return A.h(null,v)}})
return A.i($async$a2T,v)},
cbo(d){var w=this,v=w.d
v===$&&A.c()
if(C.u5(v,w.a.c))w.Oe(d)
else w.a2T(d)},
ai1(d,e){return this.cvv(d,e)},
cvv(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ai1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dUV(new C.tU(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ai1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ai1,v)},
I0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$I0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ky?3:5
break
case 3:w=6
return A.b(C.fU4(t.a.c),$async$I0)
case 6:s=e
o=t.a
r=C.hdg(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ai1(!s,!r),$async$I0)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bBr(o,t.a.c)){t.xQ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l7(o,"Cancel","Remove",q.y===D.ky?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$I0)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aON(t.a.c,t.d.a),$async$I0)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iR(o,null)
case 1:return A.h(u,v)}})
return A.i($async$I0,v)},
a9X(d){return this.bL4(d)},
bL4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u5(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b4(s,new C.dUh(p))){o=A.S(s)
p.a=A.rh(new A.cP(new A.a_(s,new C.dUi(d),o.k("a_<1>")),new C.dUj(),o.k("cP<1,m>")))}q=p.a
if(q==null)q=d.d
t.Jt()
t.m(new C.dUk(t,s,d,q))
w=3
return A.b(t.vL(),$async$a9X)
case 3:t.xQ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9X,v)},
Oe(d){return this.bNe(d)},
bNe(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u5(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2T(d),$async$Oe)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dUo(t,d),r,null,!0,!0,x.P),$async$Oe)
case 6:s=f
if(s==null){w=1
break}t.Jt()
t.m(new C.dUp(t,s))
w=7
return A.b(t.vL(),$async$Oe)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oe,v)},
cCb(){var w=this,v=w.d
v===$&&A.c()
if(!C.u5(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dV_(w))
w.vL()},
YD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bBr(n,t.a.c)){t.xQ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bp(new A.M(q,t.gc9T(),A.S(q).k("M<1,m>")).c0(0,new C.dUB()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dUC(t,new C.tU(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$YD)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jt()
t.m(new C.dUD(t,p))
w=4
return A.b(t.vL(),$async$YD)
case 4:t.xQ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$YD,v)},
c9U(d){return B.a.i(d.toLowerCase())},
cdT(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u5(v,w)
t=r.d
s=C.i3F(t)
C.idk(q,t.b,u,C.i3E(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tU(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dV7(),A.S(l).k("a_<1>")).gM(0)
l=n?B.c_:B.iE
v=A.X(B.a_I,n?B.bs:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bj,A.aL(!1,o,!0,new A.D(B.hC,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dV8(p,d),o,o,o,o,o,o,o),o),new A.D(B.nk,p.bYi(m),o)],u)
if(p.d.y===D.ky){t=B.rB.j(0.15)
s=A.n(12)
r=A.I(B.rB.j(0.45),B.q,1)
q=C.Gw(p.d,p.a.c)
v.push(new A.D(B.xT,A.p(o,A.B(A.a([D.bQ0,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.i7,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b8],u)
if(C.u5(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JT("Undo",B.rn,p.gcCa(),m,o,o))
u.push(new C.JT("Family Book",D.bFr,p.gcdS(),m,B.tr,o))
if(C.u5(p.d,p.a.c))u.push(new C.JT("Display settings",B.C7,p.gcf4(),m,B.b0,o))
u.push(new C.JT("Sync",B.yy,p.gafy(),m,o,o))
t=p.d
if(t.y===D.ky||C.bBr(t,p.a.c)){t=p.d.y===D.ky?"Remove shared tree":"Delete tree"
u.push(new C.JT(t,B.e9,p.gbLe(),m,B.h3,o))}if(C.u5(p.d,p.a.c))u.push(new C.JT("Add member",B.vZ,new C.dV9(p),m,B.bS,o))
v.push(new A.D(R.air,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaox()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dVa(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_M:Y.Ng,o,o,o,o,o)
v.push(A.av(A.hn(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dVb(p),o),o,o,o))}return A.c6(o,l,A.bm(!0,A.x(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bYi(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fy.j(0.35),B.dp,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.yr,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bT6,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafy(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f8K,m,m,m)
r=r.gaox()
p=n.d.gaox()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bC,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.u5(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bQc,m,m,m,n.gcoR(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jt:B.mB
r=r?"Private":"Public"
r=A.E(n.auV(q,"Privacy",r,n.a.d.w?n.gcB5():m),1)
q=A.E(n.auV(B.yz,"Tree code",n.d.c,new C.dUq(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.auV(D.bHa,"Collaborators",p,n.gc1S()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ky){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aF(!1,B.a1,!0,A.n(999),A.aL(!1,A.n(999),!0,new A.D(B.fO,A.B(A.a([A.X(B.p0,B.c,m,m,m,14),B.eg,A.d("View only",m,m,m,m,m,m,B.aQE,m,m,m)],o),B.m,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.by(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.FC,A.x(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bXk,B.n),m,m,m,m,m,m,m,1/0)},
auV(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.n(14),A.aL(!1,A.n(14),!0,new A.D(L.ajz,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uS,A.d(f,w,1,B.a2,w,w,w,O.zR,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.bem.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bep(s,t),new A.ar(w,v))],x.p)
r=r.gdM(r)
B.d.v(u,r.dA(r,new C.d8p(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d8q(this),A.S(r).k("M<1,t>")))
return new A.D(B.tT,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.K4.prototype={}
C.FN.prototype={}
C.beo.prototype={
gbiu(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIN.prototype={}
C.bep.prototype={
bMT(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bT
d.bE(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ao,null,null,A.a([],x.v))
q=w+5.5
t.F(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.F(new A.pH(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.F(new A.pH(u+4.95,r,u+9.9,s,u,q))
t.F(new A.bE())
q=A.N()
q.r=B.c.gp(0)
d.af(new A.v(u,w),9,q)
q=A.N()
q.r=B.bE.gp(0)
d.aR(t,q)},
bMR(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d8K())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b4(a0,new C.d8L(f))
t=new A.M(a0,new C.d8M(f),A.S(a0).k("M<1,K>")).c0(0,new C.d8N()).cJ(0,1/0,B.vc)
w=f.a
d.bE(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lX(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aO(l.r,B.ao,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cW(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cW(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbK().a.snapshot()
r.drawPath((g.e=new A.cC(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bS.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bT
w.e=B.fG
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bMR(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bMT(d,w,q.a,q.b)}},
au(d){return d.b!==this.b}}
C.bi4.prototype={
gc7I(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dme
switch(w.c.a){case 0:return D.cPl
case 1:return D.d_E
case 2:return D.dgr}},
gc7L(){var w=this.c,v=C.ho4(w.w),u=C.ho4(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc7I(),p=t.c,o=I.bCk(p.f),n=t.gc7L(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aw:B.c,j=A.I(r?B.aw:B.c,B.q,2)
if(o!=null)w=A.tj(B.A,s,B.cg,B.bX,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.i_(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.az,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.FT,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.I(r?B.aw:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fiO,s,s,s),B.f,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.byZ,s,s,s),s,s,s,-6,-4,s))}k=r?B.cp:B.c
j=A.n(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cp,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a7(84,112,A.x(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,D.b0t,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bz9,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a5)}}
C.bdt.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bct
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
au(d){return d.b!==this.b}}
C.bvQ.prototype={
B(d){var w=this,v=null,u=new C.fdA(w),t=w.c,s=t?B.cp:B.c,r=A.n(12),q=u.$3(B.hE,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bD:B.fe,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yw,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bD:B.fe,v,v,v,1,v,v,v,v,v,22),u.$3(B.alY,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dr,v,v,v,B.ah)}}
C.blq.prototype={
B(d){var w=this,v=null,u=B.bS.j(0.15),t=A.I(B.bS,B.q,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?K.a_M:Y.Ng,B.bS,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.ff8,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a5)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fd5,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.ePr(w),A.S(s).k("M<1,t>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZW.prototype={
S(){return new C.aBC()},
bs(){return this.Q.$0()},
ge2(){return this.w}}
C.aBC.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.c
r.y=t==null?D.y6:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i5c(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.aw()
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
v.a2()},
PC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hdg(p.y,p.w)
w=3
return A.b(A.lj(t.a.w,B.Ih),$async$PC)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b_0(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PC)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hHM(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(An.GH(78,800),$async$PC)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.doD(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PC,v)},
c7K(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i2(B.o.u(1000*Date.now()),w,D.y6,null,null,null,"","","","","",1,!1,0)
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
s=v.aDS(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
a9x(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.doC(r),s,null,!0,!0,x.y),$async$a9x)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9x,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tU(j),h=l.a.e,g=A.S(h).k("a_<1>"),f=A.C(new A.a_(h,new C.doM(l),g),g.k("J.E"))
h=j?B.e0:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bxt,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hx(A.aL(!1,k,!0,new A.D(B.lW,A.X(B.e9,B.oP,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbHT(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jE:B.j_
t=I.bCk(l.as)
if(l.as==null)s=A.X(B.oT,j?B.bs:B.bn,k,k,k,40)
else s=k
s=A.av(A.aB(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h7(u,t,s,k,42),A.ao(0,A.h7(B.bS,k,D.bJP,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc7H(),k,k,k,k,k,k,!1,B.a5),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBE(t,"Full name",B.mx,1,1,i,B.m9)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.R,new C.bi2(i,u,new C.doN(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.br2],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.doO(),A.S(o).k("M<1,eG<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.br4],q)
B.d.v(q,new A.M(f,new C.doQ(),A.S(f).k("M<1,eG<m?>>")))
o=A.x(A.a([t,B.am,new C.ad7(i,r,"Who is their parent?",p,new C.doR(l),k,o),B.aB,n,B.am,new C.ad7(i,m,"Who is their spouse / partner?",q,new C.doS(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBE(q,"Birth date",D.al0,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBE(m,"Birth place",B.a00,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBE(n,"Date of death (if deceased)",D.ane,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBE(p,"Occupation",B.a11,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.ad8(i,"Identity",u,k),B.ac,new C.ad8(i,"Family links",o,k),B.ac,new C.ad8(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBE(r,"Notes",B.l1,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBD(i,"Child order",l.cfj(l.at),new C.doT(l),new C.doU(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h2N(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.doV(l):k
B.d.v(r,A.a([B.R,new C.aBD(i,"Visible in tree",u,w,new C.doW(l),k)],v))}r.push(B.R)
w=j?B.jE:B.j_
u=A.n(14)
t=A.I(j?B.e2:B.bN,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bS,k,B.af,k,new C.doX(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ai3,k,k,k))
r.push(B.by)
w=j?B.aQ:B.aw
j=j?B.e2:B.bN
r.push(A.B(A.a([A.E(A.dW(B.nG,new C.doP(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b7(A.n(14),B.Y),new A.az(j,1,B.q,-1),k,k,k,k)),1),B.be,A.E(A.bG(D.eS_,l.gc7J(),A.bo(B.aV,k,k,0,B.c,k,B.cm,k,new A.b7(A.n(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.em(B.hd,k,B.af,h,new A.a7(420,k,A.cc(A.x(r,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),k),D.aiU,k,B.aii,new A.b7(g,B.Y),k,k)},
cfj(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ad8.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jE:B.j_,s=A.n(16)
return A.x(A.a([new A.D(D.ajj,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e2:B.bN,B.q,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bi3.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e0:B.c,r=A.n(12),q=A.I((t?B.e2:B.bN).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.U,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eB,u,B.vE,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cx,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bS,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ad7.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e0:B.c,s=A.n(12),r=A.I((u?B.e2:B.bN).j(0.85),B.q,1),q=A.X(B.rh,u?B.bs:B.bn,v,v,v,v),p=A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e0:B.c
return A.p(v,new A.DD(A.Sw(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cx,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kY,v,v,v)}}
C.bi2.prototype={
B(d){var w=new C.doY(this)
return A.B(A.a([w.$3(D.a_k,"Male",B.O_),B.ab,w.$3(D.akb,"Female",B.NN),B.ab,w.$3(D.y6,"Other",B.np)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBD.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jE:B.j_,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHP(u,B.yw,w.f,v),B.bp,new C.aHP(u,B.hE,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ek,v,v,v)}}
C.aHP.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bS.j(0.12)
else w=s.c.a?B.e0:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bS
else t=(s.c.a?B.bs:B.bn).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.ad9.prototype={
bQP(d){switch(d.a){case 0:return B.bS
case 1:return B.bE
case 2:return B.cX}},
bQQ(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aXc(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ac(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e0:B.c
u=A.n(12)
t=A.I((w?B.e2:B.bN).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bS,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cv,B.xQ,p,p,1/0)},
ae3(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jE:B.j_,s=A.n(16),r=A.I(v?B.e2:B.bN,B.q,1)
return A.x(A.a([new A.D(D.ajj,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hsU(r,q),o=q.c,n=t.bQP(o),m=I.bCk(q.f),l=t.e.a,k=l?B.e0:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ky?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h7(u,m,m==null?A.X(B.oT,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.el,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bQQ(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mu,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ac("Full name",i,B.mx)],u)
if(p>0)i.push(t.Ac("Child order","#"+p,B.NT))
r=A.a([h,B.au,r,B.aR,l,B.R,v,B.by,t.ae3("Identity",i),B.ac,t.ae3("Life details",A.a([t.Ac("Birth date",q.w,D.al0),t.Ac("Birth place",q.x,B.a00),t.Ac("Date of death",q.y,D.ane),t.Ac("Occupation",q.z,B.a11)],u)),B.ac,t.ae3("Family links",A.a([t.Ac("1. Parent",t.aXc(q.d),B.G6),t.Ac("2. Spouse",t.aXc(q.e),B.NM)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ae3("Notes",A.a([t.Ac("Notes",q,B.l1)],u))],u))
r.push(B.by)
r.push(A.bG(B.JE,new C.dp7(d),A.bo(B.aV,s,s,s,s,s,B.cm,s,new A.b7(A.n(14),B.Y),s,s,s)))
return A.eL(s,k,new A.cS(B.lK,A.cc(A.x(r,B.ai,s,B.e,B.N,0,B.p),B.r,s,B.y,s,B.xW,s,s,B.ag),s),s,s,s,B.FF,B.d1,s,new A.b7(j,B.Y),s)}}
C.JT.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xZ,A.hx(A.aF(!1,B.a1,!0,A.n(8),A.aL(!1,A.n(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.aps.prototype={
eS(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.S(w).k("M<1,a6<m,@>>")
w=A.C(new A.M(w,new C.c9Q(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jb(w,new C.c9R(),t,x.U))
return s}}
C.apt.prototype={
S(){return new C.aDc(A.a([],x.bF))},
gde(){return this.c}}
C.aDc.prototype={
Z(){this.a1()
this.JA()},
JA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c9U(t.a.c),$async$JA)
case 3:r=e
w=4
return A.b(C.AP(t.a.c),$async$JA)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qX(q,new C.dVk(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dVl(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JA,v)},
yp(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Kk(d,e){return this.cEz(d,e)},
cEz(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Kk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dVp(q,e))
t=3
w=6
return A.b(d.$0(),$async$Kk)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dVq(q))
$.eU.mt()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kk,v)},
Xr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pb(r,s.c,s.e),$async$Xr)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kk(new C.dVh(t),"Preparing download\u2026"),$async$Xr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xr,v)},
Xv(d){return this.bON(d)},
bON(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pb(r,s.c,s.e),$async$Xv)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Kk(new C.dVi(t,d),"Preparing file\u2026"),$async$Xv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xv,v)},
afV(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xi.c7().M6(B.QV,B.tY,!0),$async$afV)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.js(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync pick] file_picker: "+A.u(p))
w=6
break
case 3:w=2
break
case 6:u=A.GG()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afV,v)},
Y6(d){return this.bZc(d)},
bZc(d){var w=0,v=A.j(x.H),u=this
var $async$Y6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Kk(new C.dVj(u,d),"Restoring family trees\u2026"),$async$Y6)
case 2:return A.h(null,v)}})
return A.i($async$Y6,v)},
Y5(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afV(),$async$Y5)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Y6(s),$async$Y5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y5,v)},
a1W(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pb(r,s.c,s.e),$async$a1W)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kk(new C.dVo(t),"Creating QR code\u2026"),$async$a1W)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1W,v)},
a1x(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CX()){t.yp("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).cm(A.ea(new C.dVm(),!0,null,x.N)),$async$a1x)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Y6(r),$async$a1x)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1x,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AK:B.iE,m=o?D.agA:B.aQ,l=o?B.aJ:B.bN,k=o?B.aQ:B.aw,j=new C.d8O(n,m,l,k,o?B.bK:B.bn)
l=A.aH(p,p,p,p,A.X(B.eF,k,p,p,p,20),p,p,p,new C.dVs(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d8m(!0,B.jv,B.aO,B.aO,q.r?p:q.gcvj(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcrq()
t.push(A.E(C.d8m(!s,B.j5,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d8m(!1,B.hF,B.aV,B.bS,q.r?p:q.gbOG(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d8m(!1,M.yC,B.aF,B.aM,q.r?p:q.gbZ9(),j,s,"Upload backup file"),1))
l=A.a([new C.ben(v,l,p),B.kH,new C.acp(j,"QR restore",p),B.R,t,B.d8,new C.acp(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kH,new C.acp(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dVt(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.Zs,p,p,B.ag,!1)],u)
if(q.r){v=A.n(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([K.aP4,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Bp,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d8O.prototype={}
C.ben.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.ke,28)],x.V)
t=A.ao(p,A.X(B.ug,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bSE,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.op,A.E(A.x(A.a([D.fnJ,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c_x,B.n),p,p,p,p,p,p,p,p)}}
C.acp.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bel.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aO.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aO.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eH(A.de(new A.D(E.Z5,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rd,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cx,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.beq.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eH(new A.D(B.eR,A.B(A.a([A.p(v,D.bRR,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.rd,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hF,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.a_g.prototype={
S(){return new C.aDb()},
gde(){return this.c}}
C.aDb.prototype={
Z(){this.a1()
this.a93()},
a93(){var w=0,v=A.j(x.H),u=this,t
var $async$a93=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b1E(u.a.c,B.D7),$async$a93)
case 2:t=e
if(u.c!=null)u.m(new C.dVc(u,t))
return A.h(null,v)}})
return A.i($async$a93,v)},
ahi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dVd(q))
t=4
p=A.heW(q.a.d,B.D7)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arG(n.e,m,l,B.D7,p,n.f),$async$ahi)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dVe(q))
q.c.K(x.q).f.U(D.f_V)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ei(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dVf(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahi,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jj:B.pM,n=p?B.ih:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fDy,q,q,q,1,q,!0)
w=A.n(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pT(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.by,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.br,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcr8()
if(u)u=B.J8
else u=A.X(r.e===!0?B.hq:B.al_,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.et(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fS,q,q,q,new A.az(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i6,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zY,new C.dVg(d),A.bo(B.aV,q,q,q,q,B.fS,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_h.prototype={
S(){return new C.bjx(A.zm(B.xF,B.nN,B.un))}}
C.bjx.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c6(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fvB,w,w,w,1,w,!0),B.w,A.zl(this.d,B.bX,new C.dVu(this,d)),w,!1,!1,w,w)}}
C.aYx.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Qo,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lC.prototype={}
C.a6c.prototype={
S(){return new C.bjd(null,null)}}
C.bjd.prototype={
Z(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tN,v,1,v,w)
w.e=A.bj(v,B.pT,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bv(d){var w,v,u=this
u.bG(d)
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
this.bvb()},
B(d){var w,v,u=this,t=B.d.dN(D.a3L,new C.dGF(u),new C.dGG())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cvj(A.c7(new A.hb(A.a([w,v],x.dS)),new C.dGH(u,t),null),!0)}}
C.bjc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0B(d,e)
break
case"house":p.m6(d,e,D.d4o)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gds()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mb(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AV(d,e,12)
p.y_(d,e,B.li,5,14)
break
case"grocery":p.cg2(d,e)
break
case"calculator":p.cfK(d,e)
break
case"lumber":p.cga(d,e)
break
case"kitchen":p.cg5(d,e)
break
case"landscape":p.m6(d,e,D.d4W)
s=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.F(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.F(new A.cW(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.F(new A.cW(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.F(new A.ap(t,w))
s.F(new A.ap(0,w))
s.F(new A.bE())
w=A.N()
w.r=B.ew.j(0.85).gp(0)
d.aR(s,w)
p.AV(d,e,8)
p.y_(d,e,B.j2,4,18)
break
case"plumbing":p.cgj(d,e)
break
case"electrical":p.m6(d,e,D.dfI)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.aV(new A.a8(0,0,0+e.a,0+e.b),u)
p.mb(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mb(d,e,B.ll.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AV(d,e,10)
break
case"store":p.cgt(d,e)
break
case"paint_remodel":p.cge(d,e)
break
case"roofing":p.cgl(d,e)
break
case"warehouse":p.cgA(d,e)
break
case"vehicles":p.cgy(d,e)
break
case"farm":p.cfX(d,e)
break
case"restaurant":p.cgk(d,e)
break
case"tools":p.cgw(d,e)
break
case"wallet":p.cgz(d,e)
break
case"concrete":p.cfQ(d,e)
break
case"blueprint":p.cfI(d,e)
break
default:p.b0B(d,e)}},
m6(d,e,f){var w,v=new A.a8(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.sar(new A.a9(B.az,B.aC,B.x,f,null,null).aw(0,v))
d.aV(v,w)},
mb(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gds()/2-h
$.W()
w=A.N()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bW(q,p)
r=w.H()
v.drawArc.apply(v,[A.c_(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
y_(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gds()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AV(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b0B(d,e){var w,v=this
v.m6(d,e,D.de9)
w=v.c
v.mb(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mb(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bMN(d,e,B.i3,w)
v.y_(d,e,B.c.j(0.7),6,8)},
bMN(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c_(new A.a8(16,q,t,q+3)),p)
p.delete()}},
cg2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.cl4)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.am(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d2H[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mb(d,e,B.c.j(0.35),w,16)
j.y_(d,e,B.j2,5,12)},
cfK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m6(d,e,D.clb)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gds()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fU(g,g,g,g,g,B.a4,B.c4,g,B.dM,B.c3)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d6x[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saW(0,new A.eu(r,g,g,B.cP,g,g,g,g,g,g,new A.H(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.v(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.am(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cld[o]
l=B.kp.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saW(0,new A.eu(m,g,g,B.cP,g,g,g,g,g,g,new A.H(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.v(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.am(o,3)*0.38)+Math.sin(n)*6))}h.mb(d,e,B.c.j(0.35),w*1.5,14)
h.mb(d,e,B.eD.j(0.55),-v*3.141592653589793*2,8)
h.mb(d,e,B.AL.j(0.4),r*2.8,22)
h.y_(d,e,B.pC,8,10)
h.AV(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cga(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,A_.awD)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bw(new A.a8(20,q,u,q+10),B.hI)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fK,B.oH,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.mb(d,e,B.fK.j(0.35),w,15)
m.AV(d,e,8)},
cg5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.d3b)
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
k.delete()}j.mb(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
j.y_(d,e,B.qR,4,14)},
cgj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m6(d,e,D.cTa)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.y_(d,e,B.oN,6,12)
l.mb(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cgt(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m6(d,e,D.cyG)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bw(new A.a8(q,14,q+u,22),B.ix)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fc,B.bM,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.mb(d,e,B.c.j(0.3),w,16)
n.AV(d,e,8)
n.y_(d,e,B.vi,5,13)},
cge(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.cZ1)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bw(new A.a8(q,p,q+8,p+(18+r*22)),B.hg)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.iC,B.ds,B.bM,B.et][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.mb(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cgl(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.cWz)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.y_(d,e,B.cs,7,11)},
cgA(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.cBn)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bw(new A.a8(p,o,p+(t-r*8),o+16),B.hI)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cs,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}this.mb(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cgy(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.djD)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bw(new A.a8(r,q,r+28,q+8),B.hI)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AV(d,e,6)},
cfX(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d1O)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.ll.j(0.75).gp(0)
d.af(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hm.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mb(d,e,B.ll.j(0.35),w,14)},
cgk(d,e){var w,v,u,t,s,r,q,p,o=this
o.m6(d,e,D.d4d)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ce(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c_(r),p)
p.delete()}o.y_(d,e,B.qR,5,16)
o.AV(d,e,7)},
cgw(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dhc)
w=m.c
v=w*3.141592653589793
m.mb(d,e,B.oH.j(0.55),v*3,10)
m.mb(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oH.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cgz(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dkf)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bw(new A.a8(p,o,p+36,o+22),B.ix)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.j2,B.ll,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AV(d,e,9)
m.mb(d,e,B.c.j(0.4),w*2.2,12)},
cfQ(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d9h)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.v(v,u),34)
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
o.r=B.bN.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cfI(d,e){var w,v,u,t,s,r,q,p
this.m6(d,e,D.d5e)
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
d.aV(new A.a8(0,p,0+v,p+6),u)
this.mb(d,e,B.li.j(0.45),-t*3.141592653589793*2,11)},
au(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.asn.prototype={
a_c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPK(),$async$a_c)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8r(s),$async$a_c)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_c,v)},
afW(d){return this.ciQ(d)},
ciQ(d){var w=0,v=A.j(x.H),u=this,t
var $async$afW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.idu(d),$async$afW)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afW,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jE:B.j_
w=x.p
v=A.a([C.aQ7(!0,B.qJ,1/0,B.q1,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b1,t,t,new A.D(B.vy,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.axz,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b1,B.b5,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bLA,D.fk6,new C.cho(this,d),A.bo(B.aV,t,t,t,B.c,t,B.jH,t,t,t,t,B.ce)),1),B.ab,A.E(A.et(D.bTS,D.fyG,this.gc9R(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jH,t,t,D.b_0,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fM(1.7777777777777777,A.aF(!1,B.a1,!0,B.qJ,new A.an(B.W,t,B.b2,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aL8.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.aT6.prototype={}
C.aT5.prototype={}
C.aR3.prototype={}
C.YV.prototype={
S(){return new C.ays()}}
C.ays.prototype={
Z(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b4,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
Ka(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.f0p)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aT6(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e0:B.c,k=A.n(20),j=A.p(n,D.bTx,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.be,i,A.aH(n,n,n,n,A.X(B.cB,m?B.bs:B.bn,n,n,n,n),n,n,n,new C.d03(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cx,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hfb(new C.d04(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jE:B.j_
r=A.n(12)
q=A.n(12)
p=m?B.e2:B.bN
t=A.aM(n,B.U,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dj),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d05(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.Jf,n,n,n,n)
u=m?B.aQ:B.aw
m=m?B.e2:B.bN
return A.eL(n,l,new A.cS(B.lK,A.cc(A.x(A.a([j,B.aR,i,B.au,w,B.O,v,B.aR,t,B.by,A.B(A.a([A.E(A.dW(B.dh,new C.d06(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b7(A.n(12),B.Y),new A.az(m,1,B.q,-1),n,n,n,n)),1),B.at,A.E(A.bG(D.fyV,o.ga2h(),A.bo(B.aV,n,n,n,B.c,n,B.cm,n,new A.b7(A.n(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.N,0,B.p),B.r,n,B.y,n,B.Bq,n,n,B.ag),n),n,n,n,X.Br,B.d1,n,new A.b7(k,B.Y),n)}}
C.YU.prototype={
S(){return new C.ayr()}}
C.ayr.prototype={
Z(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
Ka(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.eZ4)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aT5(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e0:B.c,n=A.n(20),m=A.p(q,D.bQ5,B.f,q,q,new A.o(B.bS.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.be,l,A.aH(q,q,q,q,A.X(B.cB,p?B.bs:B.bn,q,q,q,q),q,q,q,new C.d0_(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.akM,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jE:B.j_
t=A.n(12)
s=A.n(12)
r=p?B.e2:B.bN
v=A.aM(q,B.U,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dj),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d00(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kI,q,q,q,q)
w=p?B.aQ:B.aw
p=p?B.e2:B.bN
return A.eL(q,o,new A.cS(B.lK,A.cc(A.x(A.a([m,B.aR,l,B.aB,v,B.by,A.B(A.a([A.E(A.dW(B.dh,new C.d01(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b7(A.n(12),B.Y),new A.az(p,1,B.q,-1),q,q,q,q)),1),B.at,A.E(A.bG(D.fFO,this.ga2h(),A.bo(B.bS,q,q,q,B.c,q,B.cm,q,new A.b7(A.n(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.Bq,q,q,B.ag),q),q,q,q,X.Br,B.d1,q,new A.b7(n,B.Y),q)}}
C.Ys.prototype={
S(){return new C.axb()}}
C.axb.prototype={
Z(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.as(B.as,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b4,B.aN),w)
v.f!==$&&A.aP()
v.f=new A.as(B.as,w)
v.r!==$&&A.aP()
v.r=new A.as(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.aw()
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
v.a2()},
gJv(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaj8(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb3v(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aOf(d){var w,v=B.k.D(this.gJv()+d,0.25,999999),u=B.k.jd(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saW(0,u)
this.m(new C.cyC())},
axC(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jE:B.j_,s=A.n(14),r=A.n(14)
u=u?B.e2:B.bN
return A.bs(w,new A.b4(4,s,B.dj),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.n(14),B.aba),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c9S(d,e,f){return this.axC(d,e,f,null)},
Ka(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaj8()<=0){s.c.K(x.q).f.U(D.f2h)
return}r=s.c
r.toString
v=s.gJv()
u=s.gaj8()
t=s.gb3v()
A.a5(r,!1).O(new C.aR3(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tU(n),l=n?B.e0:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bS.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bJx,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a9(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cx,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.be,h,A.aH(o,o,o,o,A.X(B.cB,n?B.bs:B.bn,o,o,o,o),o,o,o,new C.cyI(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.U,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axC(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NZ),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.Jf,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jE:B.j_
t=A.n(14)
s=A.I(n?B.e2:B.bN,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yw,n?B.aQ:B.aw,o,o,o,20),o,o,o,new C.cyJ(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bVp,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cyK(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hE,n?B.aQ:B.aw,o,o,o,20),o,o,o,new C.cyL(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axC(m,"Amount","0.00",B.hT),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cyM(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cZv,new C.cyN(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.O,s,B.ac,A.bS(B.bA,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c9S(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cyO(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kI,o,o,o,o)],w))}i.push(B.aR)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bS.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJv()===B.k.jd(p.gJv())?B.k.N(p.gJv()):p.gJv()
s=p.gb3v()
r=A.AR(p.gaj8())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bD6(p.gJv()*p.gaj8(),B.b0,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jq,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.e2:B.bN
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b7(j,B.Y),new A.az(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dW(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cyP(d),h),1),B.at,A.E(A.dn(D.aof,D.fBM,p.ga2h(),A.bo(B.aV,o,o,0,B.c,o,B.cm,o,new A.b7(A.n(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eL(o,l,new A.cS(W.abz,A.cc(A.x(i,B.ai,o,B.e,B.N,0,B.p),B.r,o,B.y,o,Ad.rb,o,o,B.ag),o),o,o,o,B.MH,B.d1,o,new A.b7(k,B.Y),o)}}
C.a11.prototype={
S(){return new C.bvH()}}
C.bvH.prototype={
Z(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b4,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e0:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jE:B.j_
v=A.aM(s,B.U,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.n(12),B.dj),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fd1(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dW(B.dh,new C.fd2(d),s),1)
r=A.bo(B.bS,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eL(s,q,new A.D(B.Bq,A.x(A.a([o,B.aB,v,B.aR,A.B(A.a([u,B.at,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fd3(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.N,0,B.p),s),s,s,s,s,B.d1,s,new A.b7(p,B.Y),s)}}
C.abs.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.FA.prototype={
S(){return new C.bvF(null,null)}}
C.bvF.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,D.brC,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bxz()},
gbz2(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bS,B.b0],x.O)
case 2:return A.a([B.bv,B.aV,B.b0],x.O)
case 3:return A.a([B.aO,B.cb,B.k_],x.O)
case 4:return A.a([B.ho,B.bS,B.fd],x.O)
case 0:return A.a([B.aV,B.bS,B.b0],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ey(A.c7(v,new C.fd_(this,new C.tU(w.ax.a===B.I)),null),null)}}
C.ax4.prototype={
S(){return new C.bvG(null,null)}}
C.bvG.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,B.nc,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bxA()},
B(d){var w=this.d
w===$&&A.c()
return A.c7(w,new C.fd0(this),null)}}
C.bvE.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bw(new A.a8(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aS(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iN(v))
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
w=A.xg(u)
t=A.a([],x.f5)
w=new A.vH(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.k0('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hu(w,r)
w.jB()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRI(d,q,r,o,0,0.2,4.2,0.92)
p.aRI(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRI(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hAX(e.a.a,e,t,t+f*i,!0),r=A.bBu(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bT
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a9(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Hj,null).aw(0,r))
d.aR(s,w)},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aNj.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.aNk.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.tU.prototype={}
C.asm.prototype={
S(){return new C.aEI()},
ge2(){return this.c}}
C.aEI.prototype={
Z(){var w=this
w.a1()
w.d=w.a.d
w.agN()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Lh(w,v)
this.a2()},
agN(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bBB(t.c,t.d.a),$async$agN)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eMB(u,s))
return A.h(null,v)}})
return A.i($async$agN,v)},
Q1(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eMs(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Lh(t,s),$async$Q1)
case 2:if(u.c!=null)u.m(new C.eMt(u))
return A.h(null,v)}})
return A.i($async$Q1,v)},
Qx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eMz(t,new C.tU(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qx)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8r(q),$async$Qx)
case 6:case 5:t.m(new C.eMA(t,r))
w=7
return A.b(t.Q1(),$async$Qx)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qx,v)},
VH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.idf(r),$async$VH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eMn(t,new C.r0(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Q1(),$async$VH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VH,v)},
ceU(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hsQ(t,new C.eMr(u),w,v)},
aaT(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.az(v,2.5,B.q,-1),B.Y,B.Y,new A.az(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aZN,w,w,B.n),w,22,w,w,w,w,w,22)},
a9W(d){return this.bL1(d)},
bL1(d){var w=0,v=A.j(x.H),u=this
var $async$a9W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eMq(u,d))
w=2
return A.b(u.Q1(),$async$a9W)
case 2:return A.h(null,v)}})
return A.i($async$a9W,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c_:B.iE,d=A.n(8),a0=A.X(Q.a_J,f?B.bs:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.FM,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eMC(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b2,B.r,A.a([A.by(A.n(22),C.aQ7(!0,A.n(22),1/0,B.q1,g,d,1/0),B.aq),A.ao(10,A.dn(D.bO7,D.fE4,h.gb1n(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bS.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.by(s,new A.an(B.W,g,B.b2,B.r,A.a([C.aQ7(!0,A.n(16),1/0,B.Nr,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a9(B.b1,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.aaT(!0),g,g,8,g,8,g),A.ao(g,A.cw3(h.aaT(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cw3(h.aaT(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cw3(h.aaT(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bK6,D.fxF,h.gb1n(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bX4,B.n),g,g,g,g,B.lW,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.b9g,B.nW,B.fX],u):A.a([B.b0,B.aV,B.bS],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.jK,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h9,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bD6(h.d.gx_(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cx,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.I(B.fW.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aO.j(0.28),B.cJ,14)],t)
j=B.aO.j(0.22)
i=A.n(10)
u=A.p(g,A.by(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bwe,A.B(A.a([o,B.at,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eH(new A.D(Ai.Bl,A.x(A.a([A.p(g,D.anQ,B.f,g,g,new A.o(j,g,A.I(B.aO.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fF,D.fmO],a1),B.m,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gceT(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.az,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fM(1.7777777777777777,d,g),B.aR,w,B.O,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b8,A.dn(Ak.a1o,D.fkI,h.gbzv(),A.bo(B.aV,g,g,g,B.c,g,B.i7,g,new A.b7(A.n(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e0:B.c
v=A.n(14)
u=A.I(f?B.e2:B.bN,B.q,1)
t=A.X(B.a03,f?B.bs:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rc,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eMD(h,new C.tU(f)),A.S(w).k("M<1,t>")))
if(h.e)d.push(new A.D(B.Be,A.av(A.mM(g,f?B.bs:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bm(!0,A.x(A.a([new A.D(B.Bj,a0,g),A.E(A.cc(A.x(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xX,g,g,B.ag),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bD9(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e0:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b1y,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.hU:B.hc,B.b0,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcUF()
v=A.AR(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.F,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bS.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bD6(d.c*d.d,B.b0,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.ha,u,u,u)
w=x.p
return A.p(u,A.by(n,new A.E1(A.B(A.a([m,A.E(new A.D(B.ahX,A.B(A.a([l,B.be,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.bs:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eMo(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b0p,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.adu.prototype={
Ep(d){return this.bMp(d)},
bMp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ep=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pb(d,o,!1),$async$Ep)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bM(Ac.Bc,null,x.H),$async$Ep)
case 4:s=t.d
w=5
return A.b(C.fKP(!0,o,s),$async$Ep)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gv(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Ep)
case 6:p=f
w=7
return A.b(A.pa(o,!1),$async$Ep)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ep,v)},
a_d(d){return this.cvk(d)},
cvk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pb(d,s,!1),$async$a_d)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hE(d,new C.asg(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pa(s,!1),$async$a_d)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_d,v)},
Q2(d){return this.crl(d)},
crl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Q2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aH1,!0,"NgmyWorksheetProjectScan",x.N),$async$Q2)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bD7(s),$async$Q2)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.f1p)
w=1
break}q=C.h58(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$Q2)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
a_e(d){return this.cDt(d)},
cDt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bCF(),$async$a_e)
case 3:s=f
if(s==null){w=1
break}r=C.h58(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a_e)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_e,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tU(u),s=w.d.d.length,r=u?B.e0:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.ke,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vF,A.p(v,A.x(A.a([w.ctU(d,t,s),new A.D(D.bvD,A.x(A.a([w.b4q(t,"QR restore"),B.R,A.B(A.a([w.b_k(t,!0,B.jv,B.aO,B.aO,new C.eMF(w,d),"Show to scan","QR code"),B.at,w.axD(t,B.j5,B.b6,B.bu,new C.eMG(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d8,w.b4q(t,"Backup files"),B.R,A.B(A.a([w.axD(t,B.hF,B.aV,B.bS,new C.eMH(w,d),"Full copy","Backup file"),B.at,w.axD(t,M.yC,B.aF,B.aM,new C.eMI(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
ctU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f2,B.cT,B.fy],k):A.a([B.b0,B.aV,B.bS],k)
w=A.ao(l,A.X(B.ug,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kW,l,l,l,36),l,l,l)
u=A.n(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aQ7(!0,A.n(13),64,D.bFk,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aRC,l,l,l)
r=C.bD6(r.gx_(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bw1,A.x(A.a([v,A.B(A.a([s,B.ep,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fE,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eME(d),l,l,l,A.nE(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aOU,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.az,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b4q(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_k(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.agA:B.aQ
if(e)w=B.aO.j(o?0.45:0.35)
else{w=o?B.e2:B.bN
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aO.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eH(new A.D(E.Z5,A.x(A.a([t,B.ac,u,B.bC,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cx,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
axD(d,e,f,g,h,i,j){return this.b_k(d,!1,e,f,g,h,i,j)}}
C.asg.prototype={
S(){return new C.bkU()}}
C.bkU.prototype={
Z(){this.a1()
this.aeG()},
aeG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aeG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bD8(p.c,p.d),$async$aeG)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eMi(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eMj(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AK:B.iE,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eF,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eMk(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zL],u),B.m,h,B.e,B.j,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f2,B.cT,B.fy],s):A.a([B.b0,B.aV,B.bS],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.L,h,h)
p=C.bD6(p.gx_(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fE,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.az,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Zr,h,h,1/0)
t=g?D.biN:B.c
q=A.n(24)
p=A.I(w?B.aO.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a89,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ecZ)
else{m=A.n(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pT(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bP,h,h,h))}}o.push(B.aR)
n=w?B.aO:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.I((w?B.aO:B.aV).j(0.35),B.q,1)
k=w?B.NJ:B.Of
k=A.X(k,w?B.aO:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.i7,h,h,h))
return A.c6(h,f,A.bm(!0,A.x(A.a([new A.D(A7.MT,e,h),A.E(A.cc(A.x(A.a([s,B.aR,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tV,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aj4,h,h,B.ag),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.asl.prototype={
S(){return new C.aEH(A.zm(B.M9,B.nN,B.un))}}
C.aEH.prototype={
q(){this.d.q()
this.a2()},
aMg(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iR(w,d)},
caJ(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.iba(t)
if(s!=null){this.aMg(s)
return}r=C.hjL(t)
if(r!=null)q=A.cT(r,p,0)
else q=!1
if(q){this.aMg(B.a.i(B.a.b6(r,B.a.cH(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.X(u.f?B.ri:A2.NP,t,t,t,t,t),t,t,t,new C.eMm(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AK,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fxy,t,t,t,1,t,!0),q=A.zl(u.d,B.bX,u.gcaI()),p=A.n(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c6(r,B.w,new A.an(B.W,t,B.b2,B.r,A.a([q,p,A.ao(32,A.p(t,D.fwl,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jq,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJu.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.O5.prototype={
S(){return new C.aEJ(D.aar,A.a([],x.D))},
bs(){return this.r.$0()},
ge2(){return this.c}}
C.aEJ.prototype={
gcBl(){return J.bEh(this.e,0,new C.eN4())},
Z(){this.a1()
$.aW.bY$.push(this)
this.vI()},
q(){$.aW.hP(this)
this.a2()},
j8(d){if(d===B.fw)this.vI()},
vI(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CW(q.a.c).d8(0,B.k4),$async$vI)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eN0(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eN1(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vI,v)},
HV(d){return this.bJa(d)},
bJ9(){return this.HV(null)},
bJa(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.idh(l,d),$async$HV)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lm(l,r,q,D.d9u,new A.T(Date.now(),0,!1))
w=4
return A.b(C.Lh(t.a.c,p),$async$HV)
case 4:o=f
w=5
return A.b(t.vI(),$async$HV)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.eZy)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.f0j)
else n.K(q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Et(m)
case 1:return A.h(u,v)}})
return A.i($async$HV,v)},
Et(d){return this.ceF(d)},
ceF(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Et=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.asm(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Et)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Lh(u.a.c,t),$async$Et)
case 5:case 4:w=6
return A.b(u.vI(),$async$Et)
case 6:return A.h(null,v)}})
return A.i($async$Et,v)},
vu(d){return this.bZe(d)},
bZe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bCF(),$async$vu)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aH1,!0,"NgmyWorksheetProjectScan",x.N),$async$vu)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bD7(q),$async$vu)
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
r.U(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h58(s)
w=15
return A.b(C.Lh(t.a.c,p),$async$vu)
case 15:o=f
w=16
return A.b(t.vI(),$async$vu)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.f0o)
w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Et(p)
case 1:return A.h(u,v)}})
return A.i($async$vu,v)},
NR(d){return this.bHQ(d)},
bHQ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eMM(d),s,null,!0,!0,x.y),$async$NR)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oL(t.a.c,A.a([],x.D)),$async$NR)
case 6:w=7
return A.b(t.vI(),$async$NR)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.eZD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
ceS(d){var w=this.c
w.toString
A.bR(B.K,null,new C.eMV(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b51(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jE
else w=B.c
v=A.n(16)
u=A.I(p?B.e2:B.bN,B.q,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.x(A.a([s,B.ac,t,B.bC,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vE,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_J(d,e){return this.ceG(d,e)},
ceG(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_J=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(B.K,null,new C.eMQ(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_J)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hsQ(r,new C.eMR(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NT(d,e),$async$a_J)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_J,v)},
b1Z(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.av
else t=h.a?B.aQ:B.aw
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.Bp,A.B(A.a([s,B.be,t,A.X(B.eA,w?B.bs:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
clz(d,e,f,g,h,i){return this.b1Z(!1,d,e,f,g,h,i)},
NT(d,e){return this.bI_(d,e)},
bI_(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l7(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NT)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bBo(t.a.c,d.a),$async$NT)
case 6:w=7
return A.b(t.vI(),$async$NT)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NT,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tU(o),m=o?B.c_:B.iE
if(q.f)o=D.b78
else{w=q.bCi(n)
v=q.bYj(n)
u=q.gbzp()
if(o)t=B.jE
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ac,v,B.aR,new C.FA(A.p(p,A.B(A.a([q.aBa(N.Nq,"Projects",n,D.aar),q.aBa(B.vQ,"Cashier",n,D.aWK),q.aBa(B.G6,"Family Tree",n,D.hcN)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.el,0.95,u,p),B.by],r)
w=q.d
if(w===D.aar){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.aw,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b8,new C.ax4(q.gaQt(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.clB(n)],r))}else{o=q.a
if(w===D.aWK)u.push(new C.aon(o.c,n,p))
else{w=q.r
u.push(new C.apv(o.c,o.d,o.e,o.f,new C.eN7(q),new C.eN8(q),new A.cy(w,x.b4)))}}o=A.cc(A.x(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.MN,p,p,B.ag)}return A.c6(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bCi(d){var w=null,v=A.n(8),u=d.a,t=A.X(Q.a_J,u?B.bs:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kX,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMJ(this),w,w,w,w,w,w,w)},
gbzp(){switch(this.d.a){case 0:return D.a9J
case 1:return D.h2Z
case 2:return D.a9K}},
bYj(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cC,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bPW,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bAn,A.aF(!1,B.a1,!0,w,A.aL(!1,A.n(12),!0,A.p(w,D.bNq,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMN(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.F,w,B.e,B.j,0,w,w),r=B.b0.j(0.55),q=A.n(12)
return new C.FA(A.p(w,A.x(A.a([new A.D(E.Zb,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AR(this.gcBl()),w,w,w,w,w,w,D.fh7,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vD,B.jq,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.h2Y,w)},
aBa(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.K,q=A.n(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bn
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.eg,new A.dq(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iI,u,u,u,B.FN,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eN3(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
clB(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e0:B.c
u=A.n(15)
t=A.p(p,D.bNw,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bZx,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FA(A.p(p,A.x(A.a([t,B.d8,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dZ,A.B(A.a([A.E(q.aS3(B.j5,"Scan QR",new C.eMY(q),d),1),B.at,A.E(q.aS3(M.yC,"Upload file",new C.eMZ(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fHH,q.gaQt(),A.bo(B.aV,p,p,p,B.c,B.fS,p,p,new A.b7(A.n(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bx5,1.05,D.a9J,p)}w=J.b6(q.e,new C.eN_(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FA(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a9J,p)},
aS3(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b0,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.ffy,B.L,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ahP,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
clA(d,e){var w,v,u=null,t=e.a,s=t?B.e0:B.c,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.en,10)],x.V),o=A.n(14),n=t?B.bs:B.bn
n=A.by(B.VF,new A.fM(1.7777777777777777,C.aQ7(!0,B.fx,1/0,N.Nq,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AR(d.gx_()),u,u,u,u,u,u,D.fdF,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.x(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Af.O1,t?B.bs:B.bn,u,u,u,u),u,u,u,new C.eMW(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eMX(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e7,u,u,u,1/0)}}
C.bxt.prototype={}
C.r0.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcUF(){var w,v,u,t,s=this.c
if(s===B.k.jd(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lm.prototype={
gx_(){return B.d.cJ(this.d,0,new C.cy2())},
ag(){var w=this,v=w.d,u=A.S(v).k("M<1,a6<m,@>>")
v=A.C(new A.M(v,new C.cy1(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bca(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lm(w.a,w.b,v,u,w.e)},
bbS(d){return this.bca(d,null)},
SK(d){return this.bca(null,d)}}
C.HF.prototype={
a5(){return"FamilyGender."+this.b}}
C.i2.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hoC(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDS(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i2(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akD.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kG.prototype={
gaox(){var w=this.f
return new A.a_(w,new C.bOg(),A.S(w).k("a_<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.S(v).k("M<1,a6<m,@>>")
v=A.C(new A.M(v,new C.bOf(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i3D(w.y)],x.N,x.z)},
yG(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kG(w.a,v,u,t,s,r,w.r,q,p,o)},
bc9(d,e){var w=null
return this.yG(w,w,d,e,w,w,w,w)},
cKk(d,e,f,g,h,i,j){return this.yG(d,e,f,g,h,i,j,null)},
aDX(d,e){var w=null
return this.yG(w,w,w,d,w,w,e,w)},
cIP(d){var w=null
return this.yG(w,w,w,w,w,w,d,w)},
cJc(d){var w=null
return this.yG(w,w,w,w,w,w,w,d)},
aDJ(d){var w=null
return this.yG(w,w,w,w,d,w,w,w)},
cJR(d,e,f){var w=null
return this.yG(w,d,w,e,w,w,f,w)},
cIC(d){var w=null
return this.yG(w,w,d,w,w,w,w,w)},
cJp(d,e){var w=null
return this.yG(d,w,w,w,w,e,w,w)}}
C.cy3.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cy4.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGM.prototype={}
C.b8y.prototype={
bD(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b8y()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b8x.prototype={
gwh(){return!0},
gG0(){return this.z.b<this.b.length},
aTI(d){switch(0){case 0:return d.a.c}},
aTp(d){switch(0){case 0:return d.a.d}},
bRJ(d,e){switch(0){case 0:return new A.hO(d,e)}},
bR6(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h9(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iG(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ho(b4)
switch(0){case 0:v=b5.b
u=new A.kD(0,v,0,1/0)
t=w===B.TH
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fQ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h9(b4,u,!0)
f=b1.aTI(g)
f.toString
e=b1.aTp(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGM(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGM(k,j,i))}d=s.length
switch(0){case 0:q=b5.cz(new A.hO(m,l))
a0=q.a
a1=q.b
b1.a=new A.iG(0,0,a0,a1)
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
for(q=B.d.fQ(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aTI(g)
e=b1.aTp(g)
e.toString
a9=b1.bR6(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bRJ(a6,a3+a9)
b0=g.a
g.a=new A.iG(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h4(d){var w,v,u,t,s,r=this
r.ln(d)
w=d.b
w.ie()
v=A.dp()
u=r.a
v.e9(u.a,u.b,0,1)
w.oY(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h4(d)
w.nl(0)},
Gw(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ie(){return this.z}}
C.bvI.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i2)","Q(kG)","~()","Q(ng)","a6<m,@>(kG)","G(kG,kG)","m(i2)","kG(a6<@,@>)","Q(lm)","Q(um)","ng(a6<@,@>)","um()","G(lm,lm)","i2(a6<@,@>)","a6<m,@>(i2)","Q(r0)","aA<~>(lm)","eG<m?>(i2)","G(i2,i2)","m?(i2)","a6<m,@>(ng)","ZW(Y)","m(m)","ad9(Y)","t(ol)","G(ng,ng)","i2(i2)","cL(bv<m,FN>)","cL(K4)","~(i2)","G?(i2)","i2()","ai<i2>()","Q(ul)","Q(K4)","D(i2)","~(HF)","Q(aeI)","t(HF,m,a0)","Zk(Y)","bv<m,ai<a6<m,@>>>(m,ai<ng>)","~(G)","+count,id,name(G,m,m)(kG)","kG(kG)","a_g(Y)","a_h(Y)","Q(lC)","lC()","m(kG)","a11(Y)","YV(Y)","YU(Y)","Zi(Y)","Zm(Y)","t(r0)","adu(Y)","~(m0)","aA<~>([m?])","K(K,lm)","t(lm)","K(K,r0)","a6<m,@>(r0)","r0(a6<@,@>)","YT(Y)","SF(Y)","cr(HE)","lm(a6<@,@>)","ul()","m(lm)","a6<m,@>(lm)","m(T)","G(i2)","kG(a6<m,@>)","Ys(Y)"])
C.fDt.prototype={
$1(d){return d.a+" "+d.b},
$S:121}
C.fDs.prototype={
bll(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qT(s,d,B.hG,"book",E.Fs),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.L5(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bll(d)},
$S:304}
C.fDu.prototype={
$1(d){return d.b},
$S:121}
C.fMI.prototype={
$1(d){var w=null
return A.eL(w,B.K,new F.Pr(this.a,this.b,w),w,w,0,B.Z6,B.d1,w,w,w)},
$S:48}
C.frJ.prototype={
$1(d){return d!=null},
$S:209}
C.frK.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:209}
C.frP.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:173}
C.fBc.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.rK,w,w,w,w,w,w,w,B.du,w,w,10.5,w,B.em,w,!0,w,w,w,w),w),u=f?B.em:B.vK
return new A.nP(D.bsG,A.a9I(A.a([new A.fT(130,w,v),new A.z3(1,B.G_,A.fc(e,w,w,w,A.ha(w,g==null?D.efh:g,w,w,w,w,w,w,w,B.du,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xB,B.lz))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1931}
C.fBb.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vy(999)
f=A.x8(A.lx(h,A.fc("Cashier",h,h,h,A.ha(h,D.zx,h,h,h,h,h,h,h,B.du,h,h,10,h,B.em,h,!0,h,h,h,h),h),h,new A.kE(D.ef8,h,f,B.hL,h),h,h,D.bt9,h))
w=A.x8(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.du,h,h,22,h,B.em,h,!0,h,h,h,h),h))
v=A.x8(A.fc(C.wS(new A.T(Date.now(),0,!1),!0),h,h,h,D.a8g,h))
u=A.vy(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.du,h,h,14,h,B.em,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a8g,h)
q=A.vy(10)
p=x.C
u=A.lx(h,A.yX(A.a([s,new A.fT(h,2,h),r,new A.fT(h,10,h),A.lx(h,A.yX(A.a([A.fc("Amount owed",h,h,h,D.a8g,h),new A.fT(h,2,h),A.fc(A.AR(t.c),h,h,h,A.ha(h,D.zx,h,h,h,h,h,h,h,B.du,h,h,20,h,B.em,h,!0,h,h,h,h),h)],p),B.r4,B.lz),h,new A.kE(B.pd,h,q,B.hL,h),h,h,D.bsm,1/0)],p),B.r4,B.lz),h,new A.kE(E.aIh,h,u,B.hL,h),h,h,D.buc,1/0)
q=new A.nx(D.efb,0.9,B.kO)
r=A.vy(12)
s=i.c
o=s.$2("Original due",C.wS(t.r,!1))
n=s.$2("Current due",C.wS(t.f,!1))
m=i.d
l=new A.nx(m,1.1,B.kO)
k=A.vy(8)
j=i.a
k=A.a([o,n,new A.fT(h,6,h),A.lx(h,A.x8(A.fc(t.gaKM(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.du,h,h,11,h,B.em,h,!0,0.5,h,h,h),h)),h,new A.kE(h,new A.pD(l,l,l,l),k,B.hL,h),h,h,D.bth,1/0),new A.fT(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zx))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zx))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.rK,h,h,h,h,h,h,h,B.du,h,h,10.5,h,B.em,h,!0,h,h,h,h),h)
m=A.S(o).k("M<1,Sd>")
o=A.C(new A.M(o,new C.fBa(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fT(h,4,h),n,new A.fT(h,6,h),new C.b8x(5,5,new C.b8y(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fT(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fT(h,8,h),w,new A.fT(h,3,h),v,new A.fT(h,16,h),u,new A.fT(h,10,h),A.lx(h,A.yX(k,B.xB,B.lz),h,new A.kE(h,new A.pD(q,q,q,q),r,B.hL,h),h,h,B.ai0,1/0)],p)
w=j.a
if(w!=null){v=new A.nx(B.It,1,B.kO)
B.d.v(f,A.a([new A.fT(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.rK,h,h,h,h,h,h,h,B.du,h,h,10,h,B.em,h,!0,h,h,h,h),h),new A.fT(h,6,h),A.lx(h,new A.HV(w,B.VP,h,h),h,new A.kE(h,new A.pD(v,v,v,v),A.vy(6),B.hL,h),82,h,B.MR,1/0)],p))}f.push(new A.fT(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.f6v,h))
f.push(new A.fT(h,18,h))
f.push(A.x8(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.zx,h,h,h,h,h,h,h,B.du,h,h,14,h,B.em,h,!0,1.8,h,h,h),h)))
return f},
$S:394}
C.fBa.prototype={
$1(d){var w=null,v=new A.nx(D.Iu,0.7,B.kO),u=A.vy(999)
return A.lx(w,A.fc(C.wS(d,!1),w,w,w,A.ha(w,D.Iu,w,w,w,w,w,w,w,B.du,w,w,9.5,w,B.em,w,!0,w,w,w,w),w),w,new A.kE(w,new A.pD(v,v,v,v),u,B.hL,w),w,w,D.bys,w)},
$S:1932}
C.c3b.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wS(d,!1),w,w,w,w,w,w,D.fd9,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
$S:1933}
C.fNd.prototype={
$1(d){var w=null,v=A.aI(d,B.bY,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bQQ,w,w,w,new C.fNa(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eL(w,B.K,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.YW,A.x(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.co,A.cc(A.x(A.a([new A.ey(new C.aYz(r,w),s),B.R,A.B(A.a([A.E(A.et(B.yM,D.fE0,new C.fNb(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fa,w,new A.b7(A.n(14),B.Y),new A.az(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a1e,D.fAw,new C.fNc(r,d),A.bo(B.b0,w,w,w,B.c,w,B.fa,w,new A.b7(A.n(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.N,0,B.p),B.r,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.N,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ah),w),w,w,0,Aj.Zk,B.d1,w,w,w)},
$S:48}
C.fNa.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fNb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m3(2.5),$async$$0)
case 4:w=3
return A.b(e.hx(B.h1),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eX(B.dD.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.t0(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fNc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fHN(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fN5.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eL(w,B.aw,A.x(A.a([new A.D(D.bu0,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.mQ,w,w,w),1),A.aH(w,w,w,w,B.lw,w,w,w,new C.fN3(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.co,new A.D(B.fZ,A.by(A.n(14),A.fQ(t,B.A,w,w,B.cg,B.dw,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Mw,new A.a7(1/0,w,A.dn(B.p3,D.aS3,new C.fN4(t,this.c,d),A.bo(B.b0,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.N,0,B.p),w,w,w,B.MI,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fN3.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fN4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t0(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fNh.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eL(w,B.aw,new A.D(D.bu8,A.x(A.a([A.B(A.a([D.bzu,A.aH(w,w,w,w,B.lw,w,w,w,new C.fNf(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ey(A.by(A.n(14),A.p(w,A.b3(w,w,w,new C.baH(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.p3,D.aS3,new C.fNg(t,s,d),A.bo(B.b0,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fNf.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fNg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m3(2.5),$async$$0)
case 4:w=3
return A.b(e.hx(B.h1),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eX(B.dD.gaP(s))
w=5
return A.b(A.t0(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fvV.prototype={
$1(d){return d.a===this.a},
$S:246}
C.dHx.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dHi.prototype={
bkA(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e0:B.c
s=u.a
w=2
return A.b(A.bR(t,null,new C.dHl(s,q,e),p,!0,!0,!1,B.IK,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dHm(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bkA(d,e)},
$S:1934}
C.dHl.prototype={
$1(d){var w,v=null,u=this.c===B.wk,t=u?D.dfX:D.dbP
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.aiz,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.im(!0,v,v,B.y,L.aPb,new C.dHk(this.a,w,t,d),t.length,v,B.dT,B.ag,!0)],x.p),B.ai,v,B.e,B.N,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:25}
C.dHk.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cT.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.n(14)
if(q)u=B.cT
else u=(t.b.a.d.a?B.bs:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aYy(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dHj(t.d,r),s,s,s,s,s,s,s)},
$S:183}
C.dHj.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dHm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dHg.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dHh.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cu,e,v)
return new A.d0(e,!1,A.is(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e_(new C.dHf(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:32}
C.dHf.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e0:B.c,f=A.n(14),e=A.I((h?B.bs:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.el,A.X(B.cB,i.a.d.a?B.bs:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dH0(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aSA("Name")
r=l.a
q=r.d==null?k:new C.dH1(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bm:B.lQ
n=A.I(B.cT.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.U,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bc2(new A.D(B.fC,A.aL(!1,p,!0,A.p(B.A,C.aYy(m==null?"\ud83d\udc64":A.fC0(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kI,k,B.a80,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aTf("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dH2(r,a0),r.d===B.wk),1),B.ab,A.E(i.aTf("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dH7(r,a0),r.d===B.a4U),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bI(B.a3,k,k,A.hn(D.bPa,D.fCm,new C.dH8(r,l.e,a0),A.fz(k,k,k,k,k,k,k,k,k,k,k,B.cT,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.up(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aSB("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.I((t?B.bs:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wS(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bC,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bM0],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dH9(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aSA("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b0k(r.b.length!==0,B.mx,new C.dHa(r,i,a0),new C.dHb(r,a0),"Upload from gallery","ID photo"))
v.push(i.b0k(r.c.length!==0,D.bFi,new C.dHc(r,i,d,a0),new C.dHd(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ah.a7w("Signature (optional)",t,new C.dHe(a0),new C.dH3(a0,t),new C.dH4(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bn
s=(i?B.bs:B.bn).j(0.28)
s=A.E(A.dW(E.aRX,new C.dH5(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tQ,k,new A.b7(A.n(10),B.Y),new A.az(s,1,B.q,-1),k,k,k,k)),1)
t=A.bo(B.cT,k,k,k,B.c,k,B.tQ,k,new A.b7(A.n(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uV,k,k,k),new C.dH6(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cc(A.x(v,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vH,B.jq,k,k,360)},
$S:163}
C.dH0.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dH1.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dH2.prototype={
$0(){return this.b.$1(new C.dH_(this.a))},
$S:0}
C.dH_.prototype={
$0(){var w=this.a
w.d=B.wk
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dH7.prototype={
$0(){return this.b.$1(new C.dGZ(this.a))},
$S:0}
C.dGZ.prototype={
$0(){var w=this.a
w.d=B.a4U
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dH8.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dH9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wW(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dGY(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGY.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gcf(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dHa.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pq(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dGX(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGX.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dHb.prototype={
$0(){return this.b.$1(new C.dGW(this.a))},
$S:0}
C.dGW.prototype={
$0(){return this.a.b=""},
$S:0}
C.dHc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e0:B.c
w=3
return A.b(A.bR(q,null,new C.dGU(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pq(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dGV(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGU.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anH,w,w,w,w,new C.dGO(d),!1,w,w,w,w,w,w,w,D.fsM,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anF,w,w,w,w,new C.dGP(d),!1,w,w,w,w,w,w,w,D.fzy,w,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),!0,!1,B.af,!0,!0)},
$S:25}
C.dGO.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dGP.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dGV.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dHd.prototype={
$0(){return this.b.$1(new C.dGT(this.a))},
$S:0}
C.dGT.prototype={
$0(){return this.a.c=""},
$S:0}
C.dHe.prototype={
$0(){return this.a.$1(new C.dGS())},
$S:0}
C.dGS.prototype={
$0(){},
$S:0}
C.dH3.prototype={
$0(){return this.a.$1(new C.dGR(this.b))},
$S:0}
C.dGR.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dH4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahF(u.a,null,null,new C.dGQ(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGQ.prototype={
$4(d,e,f,g){this.a.$1(new C.dGN(this.b,d))},
$S:452}
C.dGN.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dH5.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dH6.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.f2g)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.f_a)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dHA.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dHB.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AR(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z3(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z3(r).length>0?B.bz:B.cT,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bn
t=(q?B.bs:B.bn).j(0.28)
s=x.p
return new A.d0(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aB,A.B(A.a([A.E(A.dW(B.nG,new C.dHy(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jH,r,new A.b7(A.n(10),B.Y),new A.az(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fzX,new C.dHz(d),A.bo(B.cT,r,r,r,B.c,r,B.jH,r,new A.b7(A.n(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bs,E.Zb,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:32}
C.dHy.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dHz.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dHu.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dHv(r),p=r.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AR(l.c),s,s,s,s,s,s,D.feF,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iC((r.a.d.a?B.bs:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a03,"View receipt",new C.dHn(r,d,l))
u=l.x!=null
t=u?B.rn:B.q4
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bu5,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dHo(r,d,l)),q.$3$icon$label$onTap(B.BJ,"Edit",new C.dHp(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mx,"View / download ID",new C.dHq(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bFh,"View / download selfie",new C.dHr(r,d,l)))
if(l.gaFy())p.push(q.$3$icon$label$onTap(A6.a14,"View / download signature",new C.dHs(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e9,"Delete",new C.dHt(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.vD,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:25}
C.dHv.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.aw
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1935}
C.dHn.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fN9(w,this.c)},
$S:0}
C.dHo.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.S6(this.c)},
$S:0}
C.dHp.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.D5(this.c)},
$S:0}
C.dHq.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDu(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dHr.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDu(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dHs.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fNe(w,this.c)},
$S:0}
C.dHt.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.O3(0,this.c)},
$S:0}
C.dHC.prototype={
$1(d){return d.x==null},
$S:246}
C.dHD.prototype={
$1(d){return d.x!=null},
$S:246}
C.dHE.prototype={
$2(d,e){return d+e.c},
$S:1936}
C.dHF.prototype={
$0(){return this.a.bzU()},
$S:0}
C.dHw.prototype={
$0(){return this.a.aeT(this.b)},
$S:0}
C.fwy.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fwz.prototype={
$0(){return B.d.gI(D.a2i)},
$S:z+68}
C.d7l.prototype={
$0(){var w=this.a
return w.m(new C.d7j(w,this.b))},
$S:0}
C.d7j.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d7k.prototype={
$0(){},
$S:0}
C.d7m.prototype={
$0(){var w=this.a.gbZ2()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fyN.prototype={
$1(d){return C.h9j(A.a2(d,x.N,x.z))},
$S:z+11}
C.fyO.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fyP.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aM(w,v)
return d.d.aM(0,e.d)},
$S:z+26}
C.fLO.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fTY.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fvM.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bOb.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f4(e,v)?v:null},
$S:1937}
C.fMm.prototype={
$1(d){var w=this
return new C.Zk(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d80.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8_(w,d))},
$S:z+66}
C.d8_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7P.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d7M.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d7n.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d7o.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d7Q.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d7w.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e0:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.d7u(d),w,w),A.bG(B.wH,new C.d7v(d),A.bo(B.n_,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:21}
C.d7u.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d7v.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d7x.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d7N.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d7O.prototype={
$0(){return B.d.gI(D.yY)},
$S:z+12}
C.d7s.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyo(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.SF(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d7t.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7y.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YT(v,u,J.ad(w.d),null)},
$S:z+64}
C.d7z.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7Z.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.YB(r.y,r.gyo(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d7X(r),s,s,s,s,s,s,!1,B.a5)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.ba5(v,e,w,u,t,r.gbQb(),C.hoB(r.y.Q),r.gyo(0),s)
w=t}return A.c7(q,new C.d7Y(r,e),new A.D(B.Zc,w,s))},
$S:1938}
C.d7Y.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd0(t).ay){t=this.b
u=x.cy.a(B.d.gd0(u.f.f)).guN(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fF(v*3.141592653589793*0.5)
return A.fw(B.a3,A.de(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.d7X.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGG(B.pR,B.iJ)},
$S:0}
C.d7J.prototype={
$0(){var w=this.a
return w.m(new C.d7I(w))},
$S:0}
C.d7I.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d7K.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.d7p.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.jZ.j(0.5),r=x.p,q=A.a([D.fro,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.YR(d,B.dY,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YR(d,L.alA,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cv,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kr.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cv,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kr.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YR(d,A0.amJ,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YR(d,B.qa,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YR(d,B.qa,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eL(u,E.AV,A.bm(!0,new A.D(A5.xU,A.x(q,B.F,u,B.e,B.N,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aiY,B.d1,u,new A.b7(t,new A.az(s,1.4,B.q,-1)),u)},
$S:48}
C.d7L.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.d7C.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.Zm(v,J.cJ(w.d),w.r+1,null)},
$S:z+54}
C.d7D.prototype={
$1(d){var w=null
return A.os(!1,A.em(w,w,w,E.AV,new A.jN(this.a,new C.d7B(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:325}
C.d7B.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7H,B.op,A.E(A.d(e,w,w,w,w,w,w,B.iS,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:742}
C.d7E.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d7F.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.d7G.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7H.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.B_(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rt(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d7A(s,t))
w=4
return A.b(s.l1(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7A.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7S.prototype={
$1(d){var w=null
return A.os(!1,A.em(w,w,w,E.AV,new A.jN(this.a,new C.d7R(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:325}
C.d7R.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7H,B.op,A.E(A.d(e,w,w,w,w,w,w,B.iS,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:742}
C.d7T.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d7U.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.d7V.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.d7W.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.B_(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l1(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7q.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bhC(B.pR,V.Mi)},
$S:0}
C.d7r.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGG(B.pR,V.Mi)},
$S:0}
C.d9L.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d9M.prototype={
$1(d){var w=this.a
return w.m(new C.d9K(w))},
$S:9}
C.d9K.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d9N.prototype={
$1(d){var w=this.a
return w.m(new C.d9J(w))},
$S:9}
C.d9J.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d9O.prototype={
$1(d){var w=this.a
return w.m(new C.d9I(w))},
$S:9}
C.d9I.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d9P.prototype={
$0(){var w=this.a
return w.m(new C.d9H(w,this.b))},
$S:0}
C.d9H.prototype={
$0(){var w=this.b
this.a.d.saW(0,w)
return w},
$S:0}
C.d9Q.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1y()
A.a5(this.b,!1).O(new A.boI(w,v))},
$S:0}
C.d8f.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d8e.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Zi(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d8j.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d8i.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7I(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hJ,v,v,v)
return A.em(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.d8g(d),v,v),A.bG(B.wH,new C.d8h(d),A.bo(B.n_,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AV,w,v,v,v,v,D.fqf,v)},
$S:21}
C.d8g.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d8h.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d8k.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d8l.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cc(A.bS(B.bA,r,B.bq,18,14),B.r,t,B.y,t,D.bv0,t,t,B.ag)},
$S:312}
C.d8d.prototype={
$0(){return this.a.Q6(0,this.b)},
$S:0}
C.d8c.prototype={
$0(){return this.a.PB(0,this.b)},
$S:0}
C.cGQ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cGR.prototype={
$0(){return B.d.gI(D.yY)},
$S:z+12}
C.cGS.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bU(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1940}
C.d_h.prototype={
$1(d){return this.a.m(new C.d_g(this.b,this.c))},
$S:9}
C.d_g.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d_G.prototype={
$1(d){return this.a.m(new C.d_t())},
$S:2}
C.d_t.prototype={
$0(){},
$S:0}
C.d_H.prototype={
$1(d){return this.a.m(new C.d_s())},
$S:2}
C.d_s.prototype={
$0(){},
$S:0}
C.d_I.prototype={
$0(){var w=this.a
return w.m(new C.d_r(w,this.b))},
$S:0}
C.d_r.prototype={
$0(){var w=this.a
return w.d=w.go7().FF(this.b.a)},
$S:0}
C.d_J.prototype={
$0(){var w=this.a
return w.m(new C.d_q(w,this.b))},
$S:0}
C.d_q.prototype={
$0(){var w=this.a
return w.d=w.go7().cI8(this.b)},
$S:0}
C.d_K.prototype={
$1(d){return this.a.m(new C.d_p())},
$S:2}
C.d_p.prototype={
$0(){},
$S:0}
C.d_L.prototype={
$0(){var w=this.a
return w.m(new C.d_o(w,this.b))},
$S:0}
C.d_o.prototype={
$0(){var w=this.a
return w.d=w.go7().cId(this.b.a)},
$S:0}
C.d_M.prototype={
$1(d){var w=this.a
return w.m(new C.d_B(w,d))},
$S:6}
C.d_B.prototype={
$0(){var w=this.a
return w.d=w.go7().cJ7(this.b)},
$S:0}
C.d_N.prototype={
$1(d){var w=this.a
return w.d=w.go7().aDM(d)},
$S:2}
C.d_O.prototype={
$1(d){var w=this.a
return w.d=w.go7().cIg(d)},
$S:2}
C.d_Q.prototype={
$1(d){var w=this.a
return w.d=w.go7().cJ5(d)},
$S:2}
C.d_R.prototype={
$1(d){var w=this.a
return w.m(new C.d_A(w,d))},
$S:9}
C.d_A.prototype={
$0(){var w=this.a
return w.d=w.go7().cIX(this.b)},
$S:0}
C.d_S.prototype={
$0(){var w=this.a,v=w.go7(),u=B.a.i(w.gyo(0).a.a),t=B.a.i(w.gaAZ().a.a)
u=v.bcj(B.a.i(w.gaqG().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.dVx.prototype={
$0(){var w=this.a
w.vU()
w.a.bs()
w.a.pU()},
$S:0}
C.dVw.prototype={
$0(){var w=this.a
w.vU()
w.a.bs()
w.a.pU()},
$S:0}
C.dVz.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dVA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVB.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dVv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dVy.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dVD.prototype={
$0(){this.a.Oz()
return null},
$S:0}
C.dVC.prototype={
$0(){return this.a.Eu(this.b)},
$S:0}
C.dUY.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dh,w,w,!0,w,w,new C.dUW(d),w,w),r=A.bo(B.bS,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dUX(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:21}
C.dUW.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dUX.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dUZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cIC(this.b)},
$S:0}
C.dUT.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSQ(w.b,w.c,w.d)},
$S:8}
C.dUr.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dUs.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gy(t.a.c),$async$$0)
case 2:s=r.rh(q.dJ(e,new C.dUE(t)))
if(s!=null&&t.c!=null)t.m(new C.dUF(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUE.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dUF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUH.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dUI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUS.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cJp(C.hoL(w),w)},
$S:0}
C.dUQ.prototype={
$1(d){return new A.e_(new C.dUP(this.a,this.b),null)},
$S:20}
C.dUP.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e0:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.anl,v,v,v,p>0?new C.dUL(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.x(A.a([r,B.aR,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.anT,v,v,v,new C.dUM(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.N,0,B.p)
return A.em(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.dUN(d),v,v),A.bG(B.pp,new C.dUO(d),A.bo(B.bS,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:166}
C.dUL.prototype={
$0(){return this.b.$1(new C.dUK(this.a))},
$S:0}
C.dUK.prototype={
$0(){return--this.a.a},
$S:0}
C.dUM.prototype={
$0(){return this.b.$1(new C.dUJ(this.a))},
$S:0}
C.dUJ.prototype={
$0(){return++this.a.a},
$S:0}
C.dUN.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dUO.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dUR.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cJc(this.a.a)
w.r.a8(0)},
$S:0}
C.dUf.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahN(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hio(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dUg.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDJ(w)},
$S:0}
C.dV0.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ad9(this.b,w,this.c,null)},
$S:z+24}
C.dUV.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e0:B.c,t=A.n(20),s=A.X(B.lt,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bG(D.fB8,new C.dUU(d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:21}
C.dUU.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dUh.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dUi.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dUj.prototype={
$1(d){return d.a},
$S:z+7}
C.dUk.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i2(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDJ(w)},
$S:0}
C.dUo.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahN(q)
w=A.S(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dUm(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hio(v.e,null,r,v.f,v.r,new C.dUn(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dUn.prototype={
$0(){return this.a.a9X(this.b)},
$S:0}
C.dUm.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dUp.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.S(w).k("M<1,i2>")
w=A.C(new A.M(w,new C.dUl(this.b),v),v.k("ak.E"))
u.d=t.aDJ(w)},
$S:0}
C.dUl.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dV_.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dUB.prototype={
$1(d){return d.length!==0},
$S:3}
C.dUC.prototype={
$1(d){var w=this
return new A.e_(new C.dUA(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dUA.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e0:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dUw(u,e,o),A.S(o).k("M<1,t>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.U,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(12),B.dj),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.ma,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ai,v,B.e,B.N,0,B.p)
t=w.a
return A.em(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.dUx(d),v,v),A.bG(B.JG,new C.dUy(t,u,o,e),A.bo(B.bS,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fol,new C.dUz(t,u,o,d),A.bo(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:166}
C.dUw.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bSN,w,w,w,new C.dUv(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1941}
C.dUv.prototype={
$0(){return this.a.$1(new C.dUt(this.b,this.c))},
$S:0}
C.dUt.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dUx.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dUy.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dUu(w.c,u))
v.bP(0,B.c9)}},
$S:0}
C.dUu.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dUz.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dUD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJR(this.b,D.tX,C.Gw(v,w.a.c))},
$S:0}
C.dV7.prototype={
$1(d){return d.as},
$S:z+1}
C.dV8.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.dV9.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.icZ(v)
return w.VN(v==null?null:v.a)},
$S:0}
C.dVa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hQe(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.crv(new A.ar(u,t),v.gbiu(),new A.ar(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cRF:D.cQ0
q=A.I(s?B.dn:D.bcM,B.q,1)
p=A.n(22)
o=A.bU(0,A.b3(m,m,m,new C.bdt(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.by(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bU(0,A.uy(new A.R(n,n,n,n),new A.a7(u,t,new C.bem(l.d,v,l.f,w,new C.dV3(l),l.gcbn(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvQ(s,new C.dV4(l,e),new C.dV5(l,e),new C.dV6(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b1,B.b5,B.x,r,m,m),B.n),m,m,m,R.ai4,m,m,m,m)},
$S:204}
C.dV3.prototype={
$1(d){var w=this.a
w.m(new C.dV1(w,d))},
$S:2}
C.dV1.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dV4.prototype={
$0(){var w=this.b
return this.a.b9Z(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dV5.prototype={
$0(){var w=this.b
return this.a.b9Z(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dV6.prototype={
$0(){var w=this,v=w.b
return w.a.aSQ(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbiu())},
$S:0}
C.dVb.prototype={
$0(){var w=this.a
return w.m(new C.dV2(w))},
$S:0}
C.dV2.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dUq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fO(new A.fF(s.c)),$async$$0)
case 2:t.xQ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d8p.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bi4(u,C.hsU(v.c,u),new C.d8o(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d8o.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d8q.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.blq(d.d,d.c,u.f.t(0,d.a),new C.d8n(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d8n.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fwC.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.rh(new A.cP(new A.a_(v,new C.fwD(d),w.k("a_<1>")),new C.fwE(),w.k("cP<1,m>")))},
$S:z+20}
C.fwD.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fwE.prototype={
$1(d){return d.a},
$S:z+7}
C.fwA.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fwB.prototype={
$1(d){return d.b},
$S:z+7}
C.fwH.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.rh(new A.cP(new A.a_(v,new C.fwI(d),w.k("a_<1>")),new C.fwJ(),w.k("cP<1,m>")))},
$S:z+20}
C.fwI.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fwJ.prototype={
$1(d){return d.a},
$S:z+7}
C.fwF.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fwG.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d8s.prototype={
$0(){return this.a},
$S:z+32}
C.d8J.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:236}
C.d8B.prototype={
$2(d,e){var w=this.a.ca(0,d,new C.d8C()),v=J.a4(w)
if(!v.t(w,e))v.L(w,e)},
$S:114}
C.d8C.prototype={
$0(){return A.a([],x.s)},
$S:743}
C.d8A.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f4(w,e)
return w===!0},
$S:284}
C.d8t.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d8z.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d8y.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Cv:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.U:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Cv:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1943}
C.d8u.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d8D.prototype={
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
t=J.aV(t==null?D.Cv:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b4(w,new C.d8E(r)))w.push(r)}}B.d.br(w,new C.d8F(a8))
B.d.b_(w,new C.d8G())
q=C.hQd(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eDV],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gI(k)+B.d.gal(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bos(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1944}
C.d8E.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d8F.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d8G.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.d8H.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cJ(0,0,B.pw)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:653}
C.d8I.prototype={
$1(d){return 16+d*156},
$S:252}
C.d8r.prototype={
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
t.n(0,d,new C.FN(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FN(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FN(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.K4(d,new A.v(e+t,w),s,s.length))}},
$S:180}
C.d8v.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIN(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:114}
C.d8w.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d8x.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:744}
C.d8K.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:744}
C.d8L.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:470}
C.d8M.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:191}
C.d8N.prototype={
$1(d){return d>=0.5},
$S:111}
C.fdA.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hx(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cp,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1946}
C.ePr.prototype={
$1(d){var w=null,v=A.n(8),u=B.bS.j(0.12),t=A.n(8)
return new A.D(B.nh,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fal,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.MQ,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ePq(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.ePq.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.doD.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.doC.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nE,B.L,w,w)
return A.em(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.doA(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.ml,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.doB(d),w,w)],x.p),B.b9,B.Bh,w,u,D.bwg,w,D.byd,new A.b7(v,B.Y),w,w)},
$S:21}
C.doA.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.doB.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.doM.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.doN.prototype={
$1(d){var w=this.a
return w.m(new C.doL(w,d))},
$S:z+37}
C.doL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.doO.prototype={
$1(d){var w=null
return A.qp(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.doR.prototype={
$1(d){var w=this.a
return w.m(new C.doK(w,d))},
$S:34}
C.doK.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.doQ.prototype={
$1(d){var w=null
return A.qp(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.doS.prototype={
$1(d){var w=this.a
return w.m(new C.doJ(w,d))},
$S:34}
C.doJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.doT.prototype={
$0(){var w=this.a
return w.m(new C.doI(w))},
$S:0}
C.doI.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.doU.prototype={
$0(){var w=this.a
return w.m(new C.doH(w))},
$S:0}
C.doH.prototype={
$0(){return++this.a.at},
$S:0}
C.doV.prototype={
$0(){var w=this.a
return w.m(new C.doG(w))},
$S:0}
C.doG.prototype={
$0(){return--this.a.ax},
$S:0}
C.doW.prototype={
$0(){var w=this.a
return w.m(new C.doF(w))},
$S:0}
C.doF.prototype={
$0(){return++this.a.ax},
$S:0}
C.doX.prototype={
$1(d){var w=this.a
return w.m(new C.doE(w,d))},
$S:9}
C.doE.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.doP.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.doY.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bS.j(0.18)
else w=q.c.a?B.e0:B.c
v=A.n(12)
if(p)u=B.bS
else u=(q.c.a?B.e2:B.bN).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bS
else t=q.c.a?B.bs:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bS
else s=q.c.a?B.bs:B.bn
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bd,new A.o(w,r,u,v,r,r,B.n),B.eJ,r,r,r,B.jH,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.doZ(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+39}
C.doZ.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dp7.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.c9J.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.c9Q.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c9R.prototype={
$2(d,e){var w=J.b6(e,new C.c9P(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c9P.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c9L.prototype={
$1(d){return C.akE(A.a2(d,x.N,x.z))},
$S:z+8}
C.c9M.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c9N.prototype={
$1(d){return C.h9j(A.a2(d,x.N,x.z))},
$S:z+11}
C.c9O.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c9V.prototype={
$1(d){return new A.aFS(d.f.length,d.a,d.b)},
$S:z+43}
C.c9W.prototype={
$2(d,e){return B.a.aM(d.c,e.c)},
$S:564}
C.c9S.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c9T.prototype={
$1(d){return d.cIP(C.Gw(d,this.a))},
$S:z+44}
C.dVk.prototype={
$1(d){return C.u5(d,this.a.a.c)},
$S:z+2}
C.dVl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dVp.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dVq.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dVh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_3(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yp("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pa(r.c,r.e),$async$$0)
case 4:s.yp(p)
w=5
return A.b(s.JA(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_3(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yp("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pa(r.c,r.e),$async$$0)
case 4:s.yp(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVj.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.V5(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yp("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yp("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yp("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JA(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yp(B.a.ei(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dVo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_2(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yp("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).cm(A.ea(new C.dVn(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pa(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVn.prototype={
$1(d){var w=this.b
return new C.a_g(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dVm.prototype={
$1(d){return D.h7y},
$S:z+46}
C.dVs.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dVt.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dVr(w,d)
return new A.D(B.d9,new C.beq(this.b,d.c,d.a,w,null),null)},
$S:1947}
C.dVr.prototype={
$0(){return this.a.Xv(this.b.b)},
$S:0}
C.dVc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dVd.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dVe.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dVf.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dVg.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dVu.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cT(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).O(s)
return}},
$S:177}
C.dGF.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dGG.prototype={
$0(){return B.d.gI(D.a3L)},
$S:z+48}
C.dGH.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cXX,44),w,w,w),w,w,new C.bjc(u,t,v,w),B.ax)},
$S:71}
C.fMP.prototype={
$1(d){return A.oW(new C.fMO(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:143}
C.fMO.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e0:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rJ,24)],x.V),o=r?B.e2:B.bN
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bS.j(0.18)],x.O)
w=A.p(t,D.bNf,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.aj2,A.B(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.eYm,new C.fMN(this.b,s),20,B.aiD,t,B.ag,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kN,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:116}
C.fMN.prototype={
$2(d,e){var w=null,v=D.a3L[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.I(s?B.e2:B.bN,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.en,8)],x.V),p=A.n(15),o=A.E(new C.a6c(v.a,!0,w),1),n=s?B.jE:B.j_,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eH(A.by(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l_,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fMM(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:77}
C.fMM.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cho.prototype={
$0(){return this.a.afW(this.b)},
$S:0}
C.fMb.prototype={
$1(d){return D.h3m},
$S:z+74}
C.fTF.prototype={
$1(d){var w=this
return new C.a11(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fMg.prototype={
$1(d){return new C.YV(this.a,null)},
$S:z+51}
C.fMf.prototype={
$1(d){return D.h4l},
$S:z+52}
C.d03.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d04.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d02(w,d))},
$S:34}
C.d02.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d05.prototype={
$1(d){return this.a.Ka()},
$S:2}
C.d06.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d0_.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d00.prototype={
$1(d){return this.a.Ka()},
$S:2}
C.d01.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cyC.prototype={
$0(){},
$S:0}
C.cyI.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cyJ.prototype={
$0(){return this.a.aOf(-1)},
$S:0}
C.cyK.prototype={
$1(d){return this.a.m(new C.cyH())},
$S:2}
C.cyH.prototype={
$0(){},
$S:0}
C.cyL.prototype={
$0(){return this.a.aOf(1)},
$S:0}
C.cyM.prototype={
$1(d){return this.a.m(new C.cyG())},
$S:2}
C.cyG.prototype={
$0(){},
$S:0}
C.cyN.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e2:B.bN
return A.uo(u,u,B.b0,r,u,new C.cyF(t,d),B.Bt,s,w,u,new A.az(v,1,B.q,-1),B.ce)},
$S:1948}
C.cyF.prototype={
$1(d){var w=this.a
return w.m(new C.cyD(w,this.b))},
$S:9}
C.cyD.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cyO.prototype={
$1(d){return this.a.m(new C.cyE())},
$S:2}
C.cyE.prototype={
$0(){},
$S:0}
C.cyP.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fd1.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.fd2.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fd3.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fd_.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbz2()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b3(new A.D(D.byc,new A.ey(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bvE(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:71}
C.fd0.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.az(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.aq(B.aV,B.bS,w)
s.toString
s=A.a([B.b0,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eH(D.eda,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a9(new A.dc(-1.2+t,-0.5),new A.dc(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:132}
C.fKO.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:69}
C.eMB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eMs.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eMt.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eMz.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e_(new C.eMy(w,this.b),null)},
$S:20}
C.eMy.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e0:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eL(w,u,new A.D(B.aiW,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hfb(new C.eMv(r,e),r.a),B.aB,A.B(A.a([A.E(A.dW(B.dh,new C.eMw(d),w),1),B.at,A.E(A.bG(B.Uk,new C.eMx(r,d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(t,B.Y),w)},
$S:99}
C.eMv.prototype={
$1(d){return this.b.$1(new C.eMu(this.a,d))},
$S:34}
C.eMu.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eMw.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eMx.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eMA.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.SK(this.b)},
$S:0}
C.eMn.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbS(w)},
$S:0}
C.eMr.prototype={
$1(d){return this.bl2(d)},
bl2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lh(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iR(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eMq.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.S(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eMp(this.b),v),v.k("J.E"))
u.d=t.bbS(w)},
$S:0}
C.eMp.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eMC.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.eMD.prototype={
$1(d){return this.a.bD9(d,this.b)},
$S:z+55}
C.eMo.prototype={
$0(){return this.a.a9W(this.b)},
$S:0}
C.fTv.prototype={
$1(d){return new C.adu(this.a,this.b,this.c,null)},
$S:z+56}
C.eMF.prototype={
$0(){return this.a.a_d(this.b)},
$S:0}
C.eMG.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.eMH.prototype={
$0(){return this.a.Ep(this.b)},
$S:0}
C.eMI.prototype={
$0(){return this.a.a_e(this.b)},
$S:0}
C.eME.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eMi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eMj.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eMk.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eMm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.q_(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eMl(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMl.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eN4.prototype={
$2(d,e){return d+e.gx_()},
$S:z+59}
C.eN0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eN1.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eMM.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e0:B.c,s=A.n(24),r=A.p(v,D.bNG,B.f,v,v,new A.o(B.av.j(u?0.18:0.08),v,A.I(B.av.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.aw
u=u?B.e2:B.bN
w=x.p
return A.eL(v,t,new A.D(B.xY,A.x(A.a([r,B.aR,q,B.O,p,B.d8,A.B(A.a([A.E(A.dW(B.nG,new C.eMK(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.fa,v,new A.b7(A.n(14),B.Y),new A.az(u,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fEV,new C.eML(d),A.bo(B.av,v,v,v,v,v,B.fa,v,new A.b7(A.n(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.N,0,B.p),v),v,v,v,v,B.d1,v,new A.b7(s,B.Y),v)},
$S:48}
C.eMK.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eML.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eMV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e0:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fR,28)],x.V),g=k?D.d3G:B.a36,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eS3,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cx,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.az,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aj_,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b51(B.b6,B.j5,new C.eMS(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b51(B.cA,M.yC,new C.eMT(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.av.j(k?0.14:0.06)
q=A.n(16)
p=A.I(B.av.j(0.28),B.q,1)
o=A.p(m,D.bN3,B.f,m,m,new A.o(B.av.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vF,A.p(m,A.x(A.a([g,new A.D(B.aiX,A.x(A.a([w,B.R,u,B.by,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.be,n,A.X(B.eA,k?B.bs:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eMU(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:25}
C.eMS.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vu("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMT.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vu("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMU.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.NR(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMQ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e0:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e2:B.bN
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bs:B.bn
u=A.by(w,new A.a7(48,48,C.aQ7(!0,A.n(12),48,N.Nq,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AR(v.gx_())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vF,A.p(q,A.x(A.a([B.R,k,new A.D(D.aiU,A.B(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.B7,r.clz(B.ug,B.aV,new C.eMO(d),p,"QR code or backup file","Transfer project"),r.b1Z(!0,B.e9,B.av,new C.eMP(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:25}
C.eMO.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eMP.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eMR.prototype={
$1(d){return this.bl3(d)},
bl3(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Lh(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vI(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eN7.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eN6(w))},
$S:0}
C.eN6.prototype={
$0(){return this.a.r++},
$S:0}
C.eN8.prototype={
$0(){var w=this.a
return w.m(new C.eN5(w))},
$S:0}
C.eN5.prototype={
$0(){return this.a.r++},
$S:0}
C.eMJ.prototype={
$0(){var w=this.a.c
w.toString
return A.iR(w,null)},
$S:0}
C.eMN.prototype={
$0(){return this.a.ceS(this.b)},
$S:0}
C.eN3.prototype={
$0(){var w=this.a
return w.m(new C.eN2(w,this.b))},
$S:0}
C.eN2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eMY.prototype={
$0(){return this.a.vu("scan")},
$S:0}
C.eMZ.prototype={
$0(){return this.a.vu("file")},
$S:0}
C.eN_.prototype={
$1(d){return this.a.clA(d,this.b)},
$S:z+60}
C.eMX.prototype={
$0(){return this.a.Et(this.b)},
$S:0}
C.eMW.prototype={
$0(){return this.a.a_J(this.b,this.c)},
$S:0}
C.cy2.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cy1.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cy_.prototype={
$1(d){return C.hyL(A.a2(d,x.N,x.z))},
$S:z+63}
C.cy0.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fvC.prototype={
$1(d){return d.y===D.ky},
$S:z+2}
C.fU5.prototype={
$1(d){return C.bBr(d,this.a)},
$S:z+2}
C.ftw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bOg.prototype={
$1(d){return!d.as},
$S:z+1}
C.bOf.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bOc.prototype={
$1(d){return C.h9k(A.a2(d,x.N,x.z))},
$S:z+14}
C.bOd.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bOe.prototype={
$1(d){return J.k(d)},
$S:17}
C.fkC.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fgi.prototype={
$1(d){return C.h_B(A.a2(d,x.N,x.z))},
$S:z+67}
C.fgj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fgk.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fM2.prototype={
$1(d){return J.k(d)},
$S:17}
C.fM3.prototype={
$1(d){return d.a},
$S:z+69}
C.fM4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fM5.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fM6.prototype={
$1(d){return d.SK(null).ag()},
$S:z+70}
C.fU3.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fw5.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fyT.prototype={
$1(d){return C.akE(A.a2(d,x.N,x.z))},
$S:z+8}
C.fyU.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fyV.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fyW.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fyX.prototype={
$1(d){return C.u5(d,this.a)},
$S:z+2}
C.fLQ.prototype={
$1(d){return C.u5(d,this.a)},
$S:z+2}
C.fTZ.prototype={
$1(d){return C.akE(A.a2(d,x.N,x.z))},
$S:z+8}
C.fU_.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fU0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fvN.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fvO.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fU9.prototype={
$1(d){return!d.as},
$S:z+1}
C.fvh.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fvi.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fvj.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.fTG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fzG.prototype={
$1(d){return d.Q},
$S:z+72}
C.fLJ.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fyQ.prototype={
$1(d){return C.akE(A.a2(d,x.N,x.z))},
$S:z+8}
C.fyR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fyS.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fLE.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fgQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgR.prototype={
$1(d){return C.h9k(A.a2(d,x.N,x.z))},
$S:z+14}
C.fgS.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fgT.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fgU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fh6.prototype={
$2(d,e){return d.eR(new C.fh7(e))},
$S:1949}
C.fh7.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.ca},
$S:1950}
C.fh3.prototype={
$1(d){return C.hUQ(d,this.a)},
$S:z+73}
C.fh4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fh5.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.flh.prototype={
$1(d){return d.a},
$S:z+49}
C.fli.prototype={
$1(d){return d.length!==0},
$S:3}
C.flj.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fo_.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fsQ.prototype={
$1(d){return C.hkK(d,C.Gw(d,this.a))},
$S:z+5}
C.fsR.prototype={
$1(d){return C.hkL(d,C.Gw(d,this.a))},
$S:z+5};(function aliases(){var w=C.aL8.prototype
w.bvb=w.q
w=C.aNj.prototype
w.bxz=w.q
w=C.aNk.prototype
w.bxA=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCD.prototype,"gciu","civ",25)
var s
w(s=C.azH.prototype,"gcbt","cbu",42)
v(s,"gaMv","Np",0)
v(s,"gcqR","AO",0)
v(s,"gbKX","O4",0)
v(s,"gcF2","yq",0)
v(s,"gckx","a0q",0)
v(s,"gbGk","NN",0)
v(s,"gbLn","WX",0)
w(s,"gbQb","bQc",71)
v(s,"gbAH","zR",0)
v(C.azI.prototype,"gcEZ","Fk",0)
v(s=C.aDd.prototype,"gafy","vJ",0)
v(s,"gce7","a_A",0)
v(s,"gaQz","HW",0)
v(s=C.aDa.prototype,"gcB5","a2x",0)
v(s,"gafy","vJ",0)
v(s,"gcoR","a15",0)
v(s,"gcf4","a_O",0)
w(s,"gcbn","cbo",30)
v(s,"gbLe","I0",0)
v(s,"gcCa","cCb",3)
v(s,"gc1S","YD",0)
w(s,"gc9T","c9U",23)
v(s,"gcdS","cdT",3)
v(s=C.aBC.prototype,"gc7H","PC",0)
v(s,"gc7J","c7K",3)
v(s,"gbHT","a9x",0)
v(s=C.aDc.prototype,"gbOG","Xr",0)
v(s,"gbZ9","Y5",0)
v(s,"gcvj","a1W",0)
v(s,"gcrq","a1x",0)
v(C.aDb.prototype,"gcr8","ahi",0)
v(C.asn.prototype,"gc9R","a_c",0)
v(C.ays.prototype,"ga2h","Ka",3)
v(C.ayr.prototype,"ga2h","Ka",3)
v(C.axb.prototype,"ga2h","Ka",3)
v(s=C.aEI.prototype,"gb1n","Qx",0)
v(s,"gbzv","VH",0)
v(s,"gceT","ceU",3)
w(C.aEH.prototype,"gcaI","caJ",57)
u(C.aEJ.prototype,"gaQt",0,0,null,["$1","$0"],["HV","bJ9"],58,0,0)
t(C,"hs3","i3B",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aob,C.ul,C.ng,C.HE,C.aeI,C.JX,C.um,C.K4,C.FN,C.beo,C.aIN,C.aps,C.d8O,C.lC,C.aT6,C.aT5,C.aR3,C.tU,C.r0,C.lm,C.i2,C.kG,C.aGM])
u(A.i0,[C.fDt,C.fDs,C.fDu,C.fMI,C.frJ,C.frK,C.frP,C.fBc,C.fBb,C.fBa,C.c3b,C.fNd,C.fN5,C.fNh,C.fvV,C.dHl,C.dHg,C.dHh,C.dGU,C.dGQ,C.dHA,C.dHB,C.dHu,C.dHv,C.dHC,C.dHD,C.fwy,C.fyN,C.fyO,C.fLO,C.fTY,C.fvM,C.fMm,C.d80,C.d7n,C.d7w,C.d7N,C.d7s,C.d7y,C.d7p,C.d7C,C.d7D,C.d7B,C.d7S,C.d7R,C.d9M,C.d9N,C.d9O,C.d8e,C.d8j,C.d8i,C.cGQ,C.cGS,C.d_h,C.d_G,C.d_H,C.d_K,C.d_M,C.d_N,C.d_O,C.d_Q,C.d_R,C.dVy,C.dUY,C.dUT,C.dUr,C.dUE,C.dUH,C.dUQ,C.dUf,C.dV0,C.dUV,C.dUh,C.dUi,C.dUj,C.dUo,C.dUm,C.dUl,C.dUB,C.dUC,C.dUw,C.dV7,C.dV3,C.d8p,C.d8q,C.fwC,C.fwD,C.fwE,C.fwA,C.fwB,C.fwH,C.fwI,C.fwJ,C.fwF,C.fwG,C.d8J,C.d8z,C.d8u,C.d8E,C.d8F,C.d8I,C.d8w,C.d8L,C.d8M,C.d8N,C.fdA,C.ePr,C.doC,C.doM,C.doN,C.doO,C.doR,C.doQ,C.doS,C.doX,C.doY,C.c9Q,C.c9P,C.c9L,C.c9M,C.c9N,C.c9O,C.c9V,C.c9S,C.c9T,C.dVk,C.dVn,C.dVm,C.dVt,C.dVu,C.dGF,C.fMP,C.fMb,C.fTF,C.fMg,C.fMf,C.d04,C.d05,C.d00,C.cyK,C.cyM,C.cyN,C.cyF,C.cyO,C.fd1,C.fKO,C.eMz,C.eMv,C.eMr,C.eMp,C.eMD,C.fTv,C.eMM,C.eMV,C.eMQ,C.eMR,C.eN_,C.cy1,C.cy_,C.cy0,C.fvC,C.fU5,C.ftw,C.bOg,C.bOf,C.bOc,C.bOd,C.bOe,C.fgi,C.fgj,C.fM2,C.fM3,C.fM4,C.fM5,C.fM6,C.fU3,C.fw5,C.fyT,C.fyU,C.fyW,C.fyX,C.fLQ,C.fTZ,C.fU_,C.fU0,C.fvN,C.fvO,C.fU9,C.fvh,C.fvi,C.fTG,C.fzG,C.fLJ,C.fyQ,C.fyR,C.fLE,C.fgQ,C.fgR,C.fgS,C.fgT,C.fgU,C.fh7,C.fh3,C.fh4,C.flh,C.fli,C.fo_,C.fsQ,C.fsR])
u(A.au,[C.aYz,C.akC,C.aUk,C.YB,C.ba5,C.bem,C.bi4,C.bvQ,C.blq,C.ad8,C.bi3,C.ad7,C.bi2,C.aBD,C.aHP,C.ad9,C.JT,C.ben,C.acp,C.bel,C.beq,C.aYx,C.asn,C.adu])
u(A.mP,[C.baH,C.bbU,C.bbL,C.aGH,C.bh7,C.bep,C.bdt,C.bjc,C.bvE])
u(A.ja,[C.fNa,C.fNb,C.fNc,C.fN3,C.fN4,C.fNf,C.fNg,C.dHx,C.dHj,C.dHm,C.dH0,C.dH1,C.dH2,C.dH_,C.dH7,C.dGZ,C.dH8,C.dH9,C.dGY,C.dHa,C.dGX,C.dHb,C.dGW,C.dHc,C.dGO,C.dGP,C.dGV,C.dHd,C.dGT,C.dHe,C.dGS,C.dH3,C.dGR,C.dH4,C.dGN,C.dH5,C.dH6,C.dHy,C.dHz,C.dHn,C.dHo,C.dHp,C.dHq,C.dHr,C.dHs,C.dHt,C.dHF,C.dHw,C.fwz,C.d7l,C.d7j,C.d7k,C.d7m,C.d8_,C.d7P,C.d7M,C.d7o,C.d7Q,C.d7u,C.d7v,C.d7x,C.d7O,C.d7t,C.d7z,C.d7X,C.d7J,C.d7I,C.d7K,C.d7L,C.d7E,C.d7G,C.d7H,C.d7A,C.d7T,C.d7W,C.d7q,C.d7r,C.d9L,C.d9K,C.d9J,C.d9I,C.d9P,C.d9H,C.d9Q,C.d8f,C.d8g,C.d8h,C.d8k,C.d8d,C.d8c,C.cGR,C.d_g,C.d_t,C.d_s,C.d_I,C.d_r,C.d_J,C.d_q,C.d_p,C.d_L,C.d_o,C.d_B,C.d_A,C.d_S,C.dVx,C.dVw,C.dVz,C.dVA,C.dVB,C.dVv,C.dVD,C.dVC,C.dUW,C.dUX,C.dUZ,C.dUs,C.dUG,C.dUF,C.dUI,C.dUS,C.dUL,C.dUK,C.dUM,C.dUJ,C.dUN,C.dUO,C.dUR,C.dUg,C.dUU,C.dUk,C.dUn,C.dUp,C.dV_,C.dUv,C.dUt,C.dUx,C.dUy,C.dUu,C.dUz,C.dUD,C.dV8,C.dV9,C.dV1,C.dV4,C.dV5,C.dV6,C.dVb,C.dV2,C.dUq,C.d8o,C.d8n,C.d8s,C.d8C,C.d8t,C.ePq,C.doD,C.doA,C.doB,C.doL,C.doK,C.doJ,C.doT,C.doI,C.doU,C.doH,C.doV,C.doG,C.doW,C.doF,C.doE,C.doP,C.doZ,C.dp7,C.dVl,C.dVp,C.dVq,C.dVh,C.dVi,C.dVj,C.dVo,C.dVs,C.dVr,C.dVc,C.dVd,C.dVe,C.dVf,C.dVg,C.dGG,C.fMM,C.cho,C.d03,C.d02,C.d06,C.d0_,C.d01,C.cyC,C.cyI,C.cyJ,C.cyH,C.cyL,C.cyG,C.cyD,C.cyE,C.cyP,C.fd2,C.fd3,C.eMB,C.eMs,C.eMt,C.eMu,C.eMw,C.eMx,C.eMA,C.eMn,C.eMq,C.eMC,C.eMo,C.eMF,C.eMG,C.eMH,C.eMI,C.eME,C.eMi,C.eMj,C.eMk,C.eMm,C.eMl,C.eN0,C.eN1,C.eMK,C.eML,C.eMS,C.eMT,C.eMU,C.eMO,C.eMP,C.eN7,C.eN6,C.eN8,C.eN5,C.eMJ,C.eMN,C.eN3,C.eN2,C.eMY,C.eMZ,C.eMX,C.eMW])
u(A.ag,[C.aon,C.SF,C.Zi,C.Zm,C.Zk,C.YT,C.apv,C.app,C.ZW,C.apt,C.a_g,C.a_h,C.a6c,C.YV,C.YU,C.Ys,C.a11,C.FA,C.ax4,C.asm,C.asg,C.asl,C.O5])
u(A.ah,[C.aCD,C.bej,C.azH,C.beE,C.azI,C.bbS,C.aDd,C.aDa,C.aBC,C.aDc,C.aDb,C.bjx,C.aL8,C.ays,C.ayr,C.axb,C.bvH,C.aNj,C.aNk,C.aEI,C.bkU,C.aEH,C.bxt])
u(A.ko,[C.dHi,C.dHk,C.dHf,C.dHE,C.fyP,C.bOb,C.d7Z,C.d7Y,C.d7F,C.d7U,C.d7V,C.d8l,C.dUP,C.dUA,C.dVa,C.d8B,C.d8A,C.d8y,C.d8D,C.d8G,C.d8H,C.d8r,C.d8v,C.d8x,C.d8K,C.c9J,C.c9R,C.c9W,C.dGH,C.fMO,C.fMN,C.fd_,C.fd0,C.eMy,C.eN4,C.cy2,C.fkC,C.fgk,C.fyV,C.fvj,C.fyS,C.fh6,C.fh5,C.flj])
t(C.bjd,C.aL8)
u(A.md,[C.abs,C.aJu,C.HF,C.akD,C.cy3,C.cy4])
t(C.bvF,C.aNj)
t(C.bvG,C.aNk)
t(C.aEJ,C.bxt)
t(C.b8y,A.b8m)
t(C.bvI,A.a5S)
t(C.b8x,C.bvI)
w(C.aL8,A.eW)
w(C.aNj,A.c9)
w(C.aNk,A.c9)
v(C.bxt,A.eB)
v(C.bvI,A.j4)})()
A.k3(b.typeUniverse,JSON.parse('{"aYz":{"au":[],"t":[]},"baH":{"aC":[]},"aon":{"ag":[],"t":[]},"aCD":{"ah":["aon"]},"SF":{"ag":[],"t":[]},"akC":{"au":[],"t":[]},"aUk":{"au":[],"t":[]},"bej":{"ah":["SF"]},"Zi":{"ag":[],"t":[]},"Zm":{"ag":[],"t":[]},"Zk":{"ag":[],"t":[]},"YT":{"ag":[],"t":[]},"azH":{"ah":["Zi"]},"beE":{"ah":["Zm"]},"azI":{"ah":["Zk"]},"YB":{"au":[],"t":[]},"bbU":{"aC":[]},"bbL":{"aC":[]},"bbS":{"ah":["YT"]},"aGH":{"aC":[]},"bh7":{"aC":[]},"ba5":{"au":[],"t":[]},"apv":{"ag":[],"t":[]},"app":{"ag":[],"t":[]},"ZW":{"ag":[],"t":[]},"ad9":{"au":[],"t":[]},"aDd":{"ah":["apv"]},"aDa":{"ah":["app"]},"bem":{"au":[],"t":[]},"bep":{"aC":[]},"bi4":{"au":[],"t":[]},"bdt":{"aC":[]},"bvQ":{"au":[],"t":[]},"blq":{"au":[],"t":[]},"aBC":{"ah":["ZW"]},"ad8":{"au":[],"t":[]},"bi3":{"au":[],"t":[]},"ad7":{"au":[],"t":[]},"bi2":{"au":[],"t":[]},"aBD":{"au":[],"t":[]},"aHP":{"au":[],"t":[]},"JT":{"au":[],"t":[]},"apt":{"ag":[],"t":[]},"a_g":{"ag":[],"t":[]},"a_h":{"ag":[],"t":[]},"aDc":{"ah":["apt"]},"ben":{"au":[],"t":[]},"acp":{"au":[],"t":[]},"bel":{"au":[],"t":[]},"beq":{"au":[],"t":[]},"aDb":{"ah":["a_g"]},"bjx":{"ah":["a_h"]},"aYx":{"au":[],"t":[]},"a6c":{"ag":[],"t":[]},"bjd":{"ah":["a6c"]},"bjc":{"aC":[]},"asn":{"au":[],"t":[]},"YV":{"ag":[],"t":[]},"YU":{"ag":[],"t":[]},"Ys":{"ag":[],"t":[]},"a11":{"ag":[],"t":[]},"ays":{"ah":["YV"]},"ayr":{"ah":["YU"]},"axb":{"ah":["Ys"]},"bvH":{"ah":["a11"]},"FA":{"ag":[],"t":[]},"ax4":{"ag":[],"t":[]},"bvF":{"ah":["FA"]},"bvG":{"ah":["ax4"]},"bvE":{"aC":[]},"asm":{"ag":[],"t":[]},"aEI":{"ah":["asm"]},"adu":{"au":[],"t":[]},"asg":{"ag":[],"t":[]},"asl":{"ag":[],"t":[]},"bkU":{"ah":["asg"]},"aEH":{"ah":["asl"]},"O5":{"ag":[],"t":[]},"aEJ":{"ah":["O5"],"eB":[]},"b8x":{"j4":[],"fg":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aR3"),Q:w("r0"),n:w("bk<m,m>"),c5:w("aT5"),dY:w("aT6"),d:w("eG<m?>"),e:w("HE"),B:w("ng"),P:w("i2"),k:w("kG"),x:w("aA<~>"),f5:w("O<a30>"),V:w("O<ac>"),t:w("O<r0>"),O:w("O<w>"),ac:w("O<eG<m?>>"),I:w("O<ng>"),u:w("O<i2>"),_:w("O<kG>"),cl:w("O<aA<ai<a6<m,@>>>>"),R:w("O<ni>"),cq:w("O<ai<+(K,K)>>"),ez:w("O<a6<m,aD>>"),gE:w("O<a6<m,m>>"),c7:w("O<a6<m,@>>"),fD:w("O<mu>"),bp:w("O<ol>"),g:w("O<v>"),v:w("O<hv>"),L:w("O<+(m,m)>"),G:w("O<+(K,K)>"),bF:w("O<+count,id,name(G,m,m)>"),A:w("O<cR>"),s:w("O<m>"),aS:w("O<iU>"),p:w("O<t>"),C:w("O<fg>"),D:w("O<lm>"),fp:w("O<JX>"),M:w("O<K4>"),gZ:w("O<aGM>"),Y:w("O<aeI>"),E:w("O<aIN>"),F:w("O<K>"),dC:w("O<G>"),dS:w("O<aC?>"),d4:w("O<m?>"),J:w("cs<ah<ag>>"),b:w("ai<ng>"),do:w("ai<i2>"),r:w("ai<kG>"),U:w("ai<a6<m,@>>"),gk:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),h:w("ai<m>"),c:w("ai<lm>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a6<m,@>>>"),a:w("a6<m,@>"),f:w("a6<@,@>"),gv:w("M<m,HG>"),w:w("iE"),g2:w("rm"),bV:w("aob"),fL:w("cr"),K:w("aD"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),d9:w("+dx,hidden(K,ai<i2>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),e7:w("bq<K>"),gc:w("dL"),b4:w("cy<G>"),W:w("jN<m>"),l:w("t"),cM:w("fg"),i:w("lm"),cc:w("FN"),bw:w("ad7<m?>"),cy:w("K6"),q:w("n2"),y:w("Q"),gR:w("K"),z:w("@"),S:w("G"),eK:w("ai<kG>?"),m:w("aps?"),cT:w("v?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),X:w("+qrPayload,token,usesRemaining(m,m,G)?"),gF:w("+members,trees,viewOnly(G,G,Q)?"),Z:w("q0?"),T:w("m?"),aD:w("dL?"),o:w("lm?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZA=new A.bn(B.hh,B.bG,B.hh,B.bG)
D.ab4=new A.bn(B.hh,B.iw,B.hh,B.iw)
D.aZN=new A.bn(B.ix,B.bG,B.bG,B.bG)
D.aZR=new A.az(B.cT,1.4,B.q,-1)
D.b_0=new A.az(B.ad,1,B.q,-1)
D.b0p=new A.aY(0,1/0,64,1/0)
D.b0t=new A.aY(0,84,0,1/0)
D.ayJ=w([B.lQ,B.r1,B.c],x.O)
D.bYF=new A.a9(B.az,B.aC,B.x,D.ayJ,null,null)
D.b1d=new A.o(null,null,null,null,null,D.bYF,B.n)
D.d3a=w([B.aV,B.bS],x.O)
D.c_M=new A.a9(B.b1,B.b5,B.x,D.d3a,null,null)
D.b1y=new A.o(null,null,null,null,null,D.c_M,B.n)
D.b7M=new A.fk(null,null,null,null,null,E.jZ,null,null,null,null)
D.acp=new A.cp(B.A,null,null,D.b7M,null)
D.kr=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f8i=new A.H(!0,D.kr,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.y("No books on the shelf yet.",null,D.f8i,null,null,null,null,null,null,null,null,null)
D.edb=new A.D(B.o6,D.frD,null)
D.b6f=new A.cp(B.A,null,null,D.edb,null)
D.b78=new A.cp(B.A,null,null,Z.Wb,null)
D.b9g=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b9J=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.adB=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bct=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bcM=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.af_=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bgL=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bh9=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.F0=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.biN=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.blg=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.agA=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fm2=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.br2=new A.eG(null,D.fm2,B.f_,null,x.d)
D.fuO=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.br4=new A.eG(null,D.fuO,B.f_,null,x.d)
D.brC=new A.ba(38e5)
D.bsm=new A.ij(0,10,0,10)
D.bsv=new A.R(0,1,0,0)
D.bsG=new A.ij(0,4,0,4)
D.bsY=new A.R(10,10,14,10)
D.bt9=new A.ij(10,4,10,4)
D.bth=new A.ij(10,8,10,8)
D.bti=new A.R(10,8,8,8)
D.btJ=new A.R(12,6,12,2)
D.bu0=new A.R(14,10,6,6)
D.bu1=new A.R(14,12,14,0)
D.bu5=new A.R(14,12,14,8)
D.bu8=new A.R(14,12,8,14)
D.buc=new A.ij(14,14,14,14)
D.buR=new A.R(16,2,16,10)
D.bv0=new A.R(16,6,16,30)
D.bv2=new A.R(16,6,16,8)
D.aiU=new A.R(18,16,18,8)
D.bvD=new A.R(18,20,18,22)
D.aiY=new A.R(18,24,18,24)
D.bvJ=new A.R(18,30,18,30)
D.bw1=new A.R(20,10,12,20)
D.bwe=new A.R(20,18,16,18)
D.bwg=new A.R(20,18,20,6)
D.bx5=new A.R(24,32,24,28)
D.bx6=new A.R(24,36,24,32)
D.bxa=new A.R(26,26,24,14)
D.bxp=new A.R(2,4,2,8)
D.bxt=new A.R(30,0,30,0)
D.bxE=new A.R(38,22,22,22)
D.ajg=new A.R(40,24,24,24)
D.bxG=new A.ij(40,40,40,40)
D.bxI=new A.R(46,30,30,30)
D.ajj=new A.R(4,0,0,8)
D.by8=new A.R(56,40,40,40)
D.byc=new A.R(1.25,1.25,1.25,1.25)
D.byd=new A.R(60,0,60,0)
D.byg=new A.R(6,14,6,16)
D.bys=new A.ij(7,3,7,3)
D.byZ=new A.R(5,1.5,5,1.5)
D.bz9=new A.R(6,2.5,6,2.5)
D.fGU=new A.y("Signature",null,B.mQ,null,null,null,null,null,null,null,null,null)
D.bzu=new A.bB(1,B.bg,D.fGU,null)
D.fE2=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bAh=new A.bB(1,B.bg,D.fE2,null)
D.ffF=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG0=new A.y("Worksheets",null,D.ffF,null,null,null,null,null,null,null,null,null)
D.ffO=new A.H(!0,E.ad9,null,null,null,null,13,B.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fET=new A.y("Track your project spending",null,D.ffO,null,null,null,null,null,null,null,null,null)
D.cW6=w([D.fG0,B.au,D.fET],x.p)
D.bod=new A.fn(B.ag,B.e,B.j,B.F,null,B.p,null,0,D.cW6,null)
D.bAn=new A.bB(1,B.bg,D.bod,null)
D.faU=new A.H(!0,E.jZ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flf=new A.y("FAMILY LIBRARY",null,D.faU,null,null,null,null,null,null,null,null,null)
D.bAF=new A.bB(1,B.bg,D.flf,null)
D.N3=new C.HE("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.a_k=new C.HF(0,"male")
D.akb=new C.HF(1,"female")
D.y6=new C.HF(2,"unknown")
D.tX=new C.akD(0,"owner")
D.N4=new C.akD(1,"editor")
D.ky=new C.akD(2,"viewer")
D.al0=new A.a0(61199,"MaterialIcons",!1)
D.bFh=new A.a0(61504,"MaterialIcons",!1)
D.bFi=new A.a0(61505,"MaterialIcons",!1)
D.bFk=new A.a0(61587,"MaterialIcons",!1)
D.bFr=new A.a0(61890,"MaterialIcons",!1)
D.bGl=new A.a0(63034,"MaterialIcons",!0)
D.bHa=new A.a0(63429,"MaterialIcons",!1)
D.ane=new A.a0(984520,"MaterialIcons",!1)
D.bFR=new A.a0(62776,"MaterialIcons",!1)
D.bJx=new A.ae(D.bFR,26,B.b0,null,null,null)
D.bEf=new A.a0(57648,"MaterialIcons",!1)
D.bJP=new A.ae(D.bEf,14,B.c,null,null,null)
D.bK6=new A.ae(B.G8,17,null,null,null,null)
D.bKC=new A.ae(E.a0d,null,null,null,null,null)
D.bKF=new A.ae(B.js,18,E.jZ,null,null,null)
D.a0_=new A.a0(62044,"MaterialIcons",!1)
D.bKL=new A.ae(D.a0_,null,B.aV,null,null,null)
D.bLA=new A.ae(B.dY,16,null,null,null,null)
D.bLH=new A.ae(D.a0_,32,B.aV,null,null,null)
D.bM0=new A.ae(E.al1,18,B.cT,null,null,null)
D.bN3=new A.ae(B.Gi,22,B.av,null,null,null)
D.bNf=new A.ae(B.dY,22,B.b0,null,null,null)
D.bNq=new A.ae(Q.a04,22,B.c,null,null,null)
D.bNw=new A.ae(B.u7,52,B.c,null,null,null)
D.bNG=new A.ae(B.Gi,30,B.av,null,null,null)
D.anQ=new A.ae(B.ug,22,B.c,null,null,null)
D.bO7=new A.ae(B.dY,17,null,null,null,null)
D.bOr=new A.ae(B.vZ,26,B.cT,null,null,null)
D.bPa=new A.ae(B.a0o,16,null,null,null,null)
D.bPW=new A.ae(B.u7,24,B.c,null,null,null)
D.bQ0=new A.ae(B.Nw,20,B.rB,null,null,null)
D.bQ5=new A.ae(B.G6,null,B.bS,null,null,null)
D.bQc=new A.ae(B.js,18,B.c,null,null,null)
D.bQQ=new A.ae(B.cB,22,B.ad,null,null,null)
D.bRF=new A.ae(B.e9,16,B.ad,null,null,null)
D.bRR=new A.ae(D.a0_,20,B.aV,null,null,null)
D.aof=new A.ae(B.hq,20,null,null,null,null)
D.bSm=new A.ae(B.cB,18,D.kr,null,null,null)
D.bSE=new A.ae(B.yr,28,B.c,null,null,null)
D.bSN=new A.ae(B.Nm,null,B.h3,null,null,null)
D.bT6=new A.ae(B.yr,24,B.c,null,null,null)
D.bTx=new A.ae(B.u7,null,B.aV,null,null,null)
D.bTy=new A.ae(B.jK,20,B.cT,null,null,null)
D.bTS=new A.ae(B.G8,16,null,null,null,null)
D.bVp=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eB,!0,null,null,null,null)
D.daA=w([B.bv,B.aV,B.fd,B.b0],x.O)
D.bX4=new A.a9(B.az,B.aC,B.x,D.daA,null,null)
D.bhG=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bnd=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cSV=w([D.bhG,D.bnd],x.O)
D.bXf=new A.a9(B.b1,B.b5,B.x,D.cSV,null,null)
D.d4Z=w([B.f2,B.fy,B.fd],x.O)
D.bXk=new A.a9(B.az,B.aC,B.x,D.d4Z,null,null)
D.afB=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b9K=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cUT=w([D.afB,D.b9K],x.O)
D.bXT=new A.a9(B.b1,B.b5,B.x,D.cUT,null,null)
D.bcZ=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.ay2=w([D.bcZ,D.afB],x.O)
D.bYc=new A.a9(B.az,B.aC,B.x,D.ay2,null,null)
D.aey=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bfd=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d47=w([D.aey,D.bfd],x.O)
D.bYQ=new A.a9(B.a3,B.a8,B.x,D.d47,null,null)
D.dhb=w([B.bz,B.n5],x.O)
D.bYS=new A.a9(B.b1,B.b5,B.x,D.dhb,null,null)
D.bhB=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.di1=w([D.bhB,D.kr,D.kr,P.Xw],x.O)
D.dkp=w([0,0.07,0.9,1],x.F)
D.bZm=new A.a9(B.a3,B.a8,B.x,D.di1,D.dkp,null)
D.bZx=new A.a9(B.az,B.aC,B.x,B.R6,null,null)
D.dgM=w([B.b0,B.aV,B.bS],x.O)
D.c_x=new A.a9(B.az,B.aC,B.x,D.dgM,null,null)
D.cl4=w([B.bv,B.b0,B.f2],x.O)
D.clb=w([B.bu,B.aE,B.jg],x.O)
D.cld=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bgg=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.crn=w([D.bgg,E.afi],x.O)
D.e8Z=new A.v(1,2)
D.eUw=new A.cR(B.aW,D.e8Z,3)
D.av3=w([D.eUw],x.A)
D.cyG=w([B.h5,B.cb,B.fc],x.O)
D.cBn=w([B.bK,B.br,B.bm],x.O)
D.bB7=new C.ul("classic","Classic leather","Gold-edged brown leather",D.ay2,E.jZ,E.jZ,"\u2766",B.L,!0,!1,!1,!1)
D.b93=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bm7=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cXI=w([D.b93,D.bm7],x.O)
D.afm=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bB2=new C.ul("ornate","Ornate gold","Double gold border and flourishes",D.cXI,D.afm,D.afm,"\u2726",B.L,!0,!0,!0,!1)
D.bcC=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bip=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cPP=w([D.bcC,D.bip],x.O)
D.bB1=new C.ul("parchment","Parchment","Old paper with dark ink",D.cPP,D.F0,G.iF,"\u2767",B.L,!0,!1,!1,!0)
D.acR=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bkw=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.df5=w([D.acR,D.bkw],x.O)
D.bfQ=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bjS=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bB4=new C.ul("minimal","Clean paper","Plain and elegant, like a printed book",D.df5,D.bfQ,D.bjS,"",B.L,!0,!0,!1,!0)
D.bB6=new C.ul("midnight","Midnight","Deep blue with silver stars",L.ayl,B.cs,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bB0=new C.ul("emerald","Emerald library","Green cloth, title on the left",A_.avr,E.jZ,B.fK,"\u25c6",B.bi,!0,!1,!1,!1)
D.bkX=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.dde=w([B.es,D.bkX],x.O)
D.bgT=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bhZ=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bB5=new C.ul("rose","Rose vintage","Burgundy with rose-gold lettering",D.dde,D.bgT,D.bhZ,"\u2740",B.L,!0,!1,!0,!1)
D.dhG=w([B.cp,O.mn],x.O)
D.bB3=new C.ul("modern","Modern","Dark, bold, left-aligned",D.dhG,B.aO,B.c,"",B.bi,!1,!0,!1,!1)
D.a2i=w([D.bB7,D.bB2,D.bB1,D.bB4,D.bB6,D.bB0,D.bB5,D.bB3],A.ax("O<ul>"))
D.cPl=w([B.bS,B.bj],x.O)
D.bhr=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cQ0=w([D.acR,D.bhr],x.O)
D.bcy=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cRF=w([D.bcy,B.db],x.O)
D.cTa=w([B.b7,B.iW,B.oI],x.O)
D.cTx=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b9G=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bew=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dkl=w([D.aey,D.b9G,D.bew],x.O)
D.bB8=new C.um("leather","Leather",D.dkl,"vintage")
D.d_I=w([B.d5,B.Lk,A4.WJ],x.O)
D.bBf=new C.um("midnight","Midnight",D.d_I,"starry")
D.cTb=w([B.ew,B.dX,B.lk],x.O)
D.bBe=new C.um("forest","Forest",D.cTb,"story")
D.dmj=w([B.eC,B.es,B.ku],x.O)
D.bBb=new C.um("burgundy","Burgundy",D.dmj,"royal")
D.cAX=w([B.aE,B.oK,B.nO],x.O)
D.bBc=new C.um("royal","Royal",D.cAX,"royal")
D.cVx=w([B.br,B.cp,O.mn],x.O)
D.bB9=new C.um("charcoal","Charcoal",D.cVx,"geo")
D.dkt=w([B.cc,B.dP,B.xr],x.O)
D.bBd=new C.um("sunset","Sunset",D.dkt,"sunset")
D.dl9=w([B.iW,B.F1,B.WM],x.O)
D.bBa=new C.um("ocean","Ocean",D.dl9,"band")
D.yY=w([D.bB8,D.bBf,D.bBe,D.bBb,D.bBc,D.bB9,D.bBd,D.bBa],A.ax("O<um>"))
D.cVX=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cWz=w([B.ak,B.aJ,B.M],x.O)
D.cXN=w([B.es,B.dX,B.d5,B.fA,B.xu,B.cT,B.k1,B.ee,B.d6],x.O)
D.cXO=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eUx=new A.cR(B.dr,B.dE,8)
D.cXX=w([D.eUx],x.A)
D.cZ1=w([B.bU,B.dP,B.ks],x.O)
D.cZv=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d_E=w([B.bU,B.hk],x.O)
D.d1O=w([B.aM,B.vm,B.xi],x.O)
D.d2H=w([B.bM,B.c8,B.ds,B.aM],x.O)
D.d3b=w([B.iX,B.cc,B.ts],x.O)
D.d3G=w([B.f2,B.cT],x.O)
D.d4d=w([B.ct,B.fl,B.hn],x.O)
D.d4o=w([B.aO,B.bj,B.d5],x.O)
D.d4W=w([B.et,B.cS,B.dX],x.O)
D.d5e=w([B.dN,B.d5,B.Lk],x.O)
D.d6x=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a3d=w(["leather","linen","plain","stars","rays"],x.s)
D.bJd=new A.a0(985219,"MaterialIcons",!1)
D.bIM=new A.a0(983781,"MaterialIcons",!1)
D.axJ=w([B.alq,B.i8,B.lX,B.i9,D.bJd,B.Gs,B.q3,D.bIM,L.an1,B.yt,B.q5,B.mz],A.ax("O<a0>"))
D.a3i=w(["double","single","corners","none"],x.s)
D.d9h=w([B.dt,B.bn,B.ee],x.O)
D.d9u=w([],x.t)
D.Cv=w([],x.u)
D.dbP=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.de9=w([B.aF,B.fl,B.fA],x.O)
D.dfI=w([B.bH,B.n0,B.XH],x.O)
D.dfX=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dzz=new C.lC("construction","Construction","Jobsite & builds",B.yj)
D.dzG=new C.lC("house","Home Build","Houses & rooms",B.vU)
D.dzw=new C.lC("grocery","Grocery","Store & pantry",B.a0U)
D.dzv=new C.lC("calculator","Calculations","Math & estimates",B.NH)
D.dzE=new C.lC("lumber","Materials","Lumber & supplies",B.NX)
D.dzs=new C.lC("kitchen","Kitchen","Remodel & meals",Aa.ame)
D.bIJ=new A.a0(983756,"MaterialIcons",!1)
D.dzx=new C.lC("landscape","Landscaping","Yard & garden",D.bIJ)
D.dzr=new C.lC("plumbing","Plumbing","Pipes & water",B.qd)
D.dzH=new C.lC("electrical","Electrical","Wiring & power",B.hb)
D.dzp=new C.lC("store","Retail Shop","Daily business",B.l3)
D.dzq=new C.lC("paint_remodel","Paint & Remodel","Colors & walls",Ab.a0u)
D.bI7=new A.a0(983311,"MaterialIcons",!1)
D.dzD=new C.lC("roofing","Roofing","Roofs & exteriors",D.bI7)
D.bIW=new A.a0(983986,"MaterialIcons",!1)
D.dzo=new C.lC("warehouse","Warehouse","Storage & stock",D.bIW)
D.dzB=new C.lC("vehicles","Vehicles","Fleet & transport",B.Gt)
D.bFT=new A.a0(62785,"MaterialIcons",!1)
D.dzu=new C.lC("farm","Farm","Crops & livestock",D.bFT)
D.dzt=new C.lC("restaurant","Restaurant","Food & catering",B.ue)
D.dzA=new C.lC("tools","Tools","Workshop gear",B.Gp)
D.dzF=new C.lC("wallet","Cash & Wallet","Quick spending",B.jK)
D.bH5=new A.a0(63395,"MaterialIcons",!1)
D.dzC=new C.lC("concrete","Concrete","Foundation work",D.bH5)
D.dzy=new C.lC("blueprint","Blueprint","Plans & design",Ag.alw)
D.a3L=w([D.dzz,D.dzG,D.dzw,D.dzv,D.dzE,D.dzs,D.dzx,D.dzr,D.dzH,D.dzp,D.dzq,D.dzD,D.dzo,D.dzB,D.dzu,D.dzt,D.dzA,D.dzF,D.dzC,D.dzy],A.ax("O<lC>"))
D.dgr=w([B.bs,B.bn],x.O)
D.dhc=w([B.ig,B.nV,B.dH],x.O)
D.a3V=w(["top","middle","bottom"],x.s)
D.djD=w([B.cl,B.bj,B.d5],x.O)
D.dkf=w([B.aZ,B.cS,B.dX],x.O)
D.dme=w([B.bK,B.ak],x.O)
D.dmf=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e6b={top:0,middle:1,bottom:2}
D.dpu=new A.bk(D.e6b,["Top","Middle","Bottom"],x.n)
D.e5Q={double:0,single:1,corners:2,none:3}
D.dpz=new A.bk(D.e5Q,["Double line","One line","Corners","None"],x.n)
D.e72={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dr6=new A.bk(D.e72,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dri=new A.bk(B.hZ,[],A.ax("bk<G,+(m,m)>"))
D.e64={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CI=new A.bk(D.e64,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<m,G>"))
D.du7=new F.MZ(32,null)
D.du8=new F.MZ(40,null)
D.du9=new F.MZ(46,null)
D.aH1=new C.asl(null)
D.e9X=new A.v(8,14)
D.fsf=new A.y("Write a new book",null,B.hK,null,B.L,null,null,null,null,null,null,null)
D.ecD=new A.D(B.kY,D.fsf,null)
D.anr=new A.ae(B.hE,18,B.c,null,null,null)
D.flB=new A.y("Add",null,B.lE,null,null,null,null,null,null,null,null,null)
D.d2W=w([D.anr,B.qv,D.flB],x.p)
D.eSa=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d2W,null)
D.ecY=new A.D(B.nj,D.eSa,null)
D.ecZ=new A.D(E.ahL,Z.Wb,null)
D.ffA=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foE=new A.y("New Project",null,D.ffA,null,null,null,null,null,null,null,null,null)
D.d6U=w([D.anr,B.ab,D.foE],x.p)
D.eSd=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d6U,null)
D.eda=new A.D(B.i7,D.eSd,null)
D.fr2=new A.y("Choose your header",null,U.rW,null,null,null,null,null,null,null,null,null)
D.edv=new A.D(B.hS,D.fr2,null)
D.b80=new A.fk(2.2,null,null,null,null,B.cT,null,null,null,null)
D.eXo=new A.a7(22,22,D.b80,null)
D.b6b=new A.cp(B.A,null,null,D.eXo,null)
D.edA=new A.D(B.YQ,D.b6b,null)
D.bul=new A.R(14,2,14,6)
D.fEC=new A.y("The top of your book. Tap a design to see it.",null,T.uU,null,null,null,null,null,null,null,null,null)
D.edB=new A.D(D.bul,D.fEC,null)
D.ef8=new A.iS(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.efb=new A.iS(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aIg=new A.iS(1,0.9607843137254902,0.48627450980392156,0)
D.Iu=new A.iS(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zx=new A.iS(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.efh=new A.iS(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.h6U=new C.bh7(null)
D.bpm=new A.mm(D.h6U,null,B.ax,null,null)
D.aLU=new A.cL(0,0,0,0,null,null,D.bpm,null)
D.eDV=new A.z(-42,42)
D.eMR=new A.cx([0,0,1,1])
D.aNe=new A.a8(0,0,520,160)
D.fEa=new A.y("Let the AI write it from your tree",null,B.ki,null,B.L,null,null,null,null,null,null,null)
D.bBM=new A.dq(1,B.co,D.fEa,null)
D.d_D=w([E.a1m,B.ab,D.bBM],x.p)
D.eRQ=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d_D,null)
D.flg=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.deu=w([D.aof,B.ab,D.flg],x.p)
D.eS_=new A.ci(B.aP,B.b9,B.j,B.m,null,B.p,null,0,D.deu,null)
D.bNk=new A.ae(B.hU,14,B.b0,null,null,null)
D.f9x=new A.H(!0,B.b0,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp3=new A.y("Cashier",null,D.f9x,null,null,null,null,null,null,null,null,null)
D.d7q=w([D.bNk,B.bp,D.fp3],x.p)
D.eS2=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d7q,null)
D.flh=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bA7=new A.bB(1,B.bg,D.flh,null)
D.cSE=w([D.anQ,B.at,D.bA7],x.p)
D.eS3=new A.ci(B.aP,B.e,B.j,B.m,null,B.p,null,0,D.cSE,null)
D.eW4=new A.ar(16,40)
D.eW9=new A.ar(22,64)
D.eWg=new A.ar(280,88)
D.eX4=new A.a7(30,null,null,null)
D.eYm=new A.hQ(2,12,12,1.05,null)
D.foK=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ4=new A.b1(D.foK,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.foZ=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aPm=new A.b1(D.foZ,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fx5=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZy=new A.b1(D.fx5,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fHt=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eZD=new A.b1(D.fHt,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fr0=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eZK=new A.b1(D.fr0,null,null,null,null,null,null,null,null,null,null,null,null,B.fN,!1,null,null,null,B.r,null)
D.fEP=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aPq=new A.b1(D.fEP,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.flS=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f_a=new A.b1(D.flS,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fIc=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.f_V=new A.b1(D.fIc,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fD5=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f0j=new A.b1(D.fD5,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fHx=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f0m=new A.b1(D.fHx,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fyF=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f0o=new A.b1(D.fyF,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsQ=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f0p=new A.b1(D.fsQ,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsR=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f1p=new A.b1(D.fsR,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.foM=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new A.b1(D.foM,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fqF=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f20=new A.b1(D.fqF,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fya=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f2g=new A.b1(D.fya,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.ftE=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f2h=new A.b1(D.ftE,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.f5r=new A.H(!0,D.kr,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5R=new A.H(!0,D.kr,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6v=new A.rI(!0,B.rK,null,null,null,null,B.du,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6N=new A.H(!0,D.kr,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7l=new A.H(!0,B.b0,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8g=new A.rI(!0,B.Su,null,null,null,null,B.du,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8l=new A.H(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8K=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fal=new A.H(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fap=new A.H(!0,G.iF,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbF=new A.H(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcn=new A.H(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd5=new A.H(!0,B.bS,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd9=new A.H(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdw=new A.H(!0,D.F0,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdF=new A.H(!0,B.b0,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feF=new A.H(!0,B.cT,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new A.H(!0,B.bS,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffy=new A.H(!0,B.b0,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh_=new A.H(!0,B.ak,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh7=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRC=new A.H(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8K=new A.H(!0,B.ak,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiO=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjb=new A.H(!0,G.iF,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjj=new A.H(!0,G.iF,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk6=new A.y("Themes",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fkI=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fa4=new A.H(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl6=new A.y("Debt receipt",null,D.fa4,null,B.L,null,null,null,null,null,null,null)
D.aRx=new A.H(!0,B.ak,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flo=new A.y("Person who owes",null,D.aRx,null,null,null,null,null,null,null,null,null)
D.fmk=new A.y("Notes",null,B.a8p,null,null,null,null,null,null,null,null,null)
D.fmK=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f91=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new A.y("Share",null,D.f91,null,null,null,null,null,null,null,null,null)
D.fnJ=new A.y("Move your family trees",null,D.aRC,null,null,null,null,null,null,null,null,null)
D.fol=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.foY=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fqf=new A.y("Remove this book?",null,B.hw,null,null,null,null,null,null,null,null,null)
D.aS3=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fro=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fsM=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.ftT=new A.y("Ribbon bookmark",null,B.iS,null,null,null,null,null,null,null,null,null)
D.fgU=new A.H(!0,B.b0,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ful=new A.y("NGMY.ORG",null,D.fgU,null,B.L,null,null,null,null,null,null,null)
D.fvB=new A.y("Scan family tree QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fdo=new A.H(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwl=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fdo,null,B.L,null,null,null,null,null,null,null)
D.fxy=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxF=new A.y("Thumbnail",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fyg=new A.y("Save the cover",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fyG=new A.y("Your photos",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fyV=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fzs=new A.y("Design your cover",null,U.rW,null,null,null,null,null,null,null,null,null)
D.fzy=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fzB=new A.y("PICTURE",null,H.mR,null,null,null,null,null,null,null,null,null)
D.fzX=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fzZ=new A.y("You can undo it right after.",null,T.Jp,null,null,null,null,null,null,null,null,null)
D.fAw=new A.y("Print",null,B.uV,null,null,null,null,null,null,null,null,null)
D.fAU=new A.y("Amount owed",null,D.aRx,null,null,null,null,null,null,null,null,null)
D.fB8=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fBJ=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fBM=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fCd=new A.y("Debtor signature",null,B.a8p,null,null,null,null,null,null,null,null,null)
D.fCm=new A.y("Change icon",null,E.aQP,null,null,null,null,null,null,null,null,null)
D.fDy=new A.y("Family tree QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fE0=new A.y("Download",null,B.uV,null,null,null,null,null,null,null,null,null)
D.fE4=new A.y("Change",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fEV=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fEY=new A.y("WHAT SHOULD IT CHANGE?",null,H.mR,null,null,null,null,null,null,null,null,null)
D.fFx=new A.y("COLOUR",null,H.mR,null,null,null,null,null,null,null,null,null)
D.fFL=new A.y("Do it",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fFO=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fGO=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f4p=new A.H(!0,E.jZ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH2=new A.y("Write the first page myself",null,D.f4p,null,null,null,null,null,null,null,null,null)
D.fHA=new A.y("Use this header",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fHH=new A.y("Create Project",null,E.aRg,null,null,null,null,null,null,null,null,null)
D.h2Y=new C.abs(1,"header")
D.a9J=new C.abs(2,"projects")
D.h2Z=new C.abs(3,"cashier")
D.a9K=new C.abs(4,"familyTree")
D.hf6=new C.cy3(0,"start")
D.hf7=new C.cy4(0,"start")
D.h3m=new C.Ys(null)
D.h4l=new C.YU(null)
D.drf=new A.bk(B.hZ,[],A.ax("bk<m,FN>"))
D.d9S=w([],x.E)
D.d9T=w([],x.M)
D.h4S=new C.beo(D.drf,D.d9S,D.d9T,0,0,null,null)
D.h7y=new C.a_h(null)
D.aar=new C.aJu(0,"projects")
D.aWK=new C.aJu(1,"cashier")
D.hcN=new C.aJu(2,"familyTree")})()};
(a=>{a["MhZ4TDq/mExLut9PKjnYoeI32TY="]=a.current})($__dart_deferred_initializers__);