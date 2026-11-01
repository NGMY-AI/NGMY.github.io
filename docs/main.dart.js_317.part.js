((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,A3,A4,A5,A6,T,U,A7,A8,M,A9,H,Aa,Ab,V,W,X,Ac,Ad,Y,Ae,Af,Ag,Z,Ah,Ai,K,Aj,A_,A0,O,P,L,Q,C={
bD_(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bD_=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vo(null,""),$async$bD_)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n7(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
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
return A.b(A.qT(t,a1,B.hG,"book",E.Fr),$async$bD_)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Qo(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.L4(l)?y.l:y.i)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a2k(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD_,v)},
agV(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agV=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vo(null,""),$async$agV)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n7(b6)
s=x.S
r=A.d9(c1,0,A.dG(4,"count",s),A.S(c1).c)
q=F.a27(new A.M(r,new C.fDj(),r.$ti.k("M<ak.E,m>")).aG(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fDi(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agV)
case 6:l=c5
k=F.Qo(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoa(s,D.dqX,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agV)
case 10:l=c5
k=l==null?null:F.Qo(l)
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
p=A.cD(new A.bc(h,s),new C.fDk(),s.k("J.E"),p)
p=F.a27(A.pj(p,3,A.a3(p).k("J.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a2k(s,b9),$async$agV)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoa(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agV,v)},
hsf(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fMx(e,f),d,null,!0,!0,x.g2)},
aoa:function aoa(d,e,f){this.a=d
this.b=e
this.c=f},
fDj:function fDj(){},
fDi:function fDi(d){this.a=d},
fDk:function fDk(){},
fMx:function fMx(d,e){this.a=d
this.b=e},
bAR(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAR=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b4(b1,new C.frH())){u=null
w=1
break}t=B.d.d7(b1,new C.frI())
s=$.W()
r=new A.qn()
q=A.B9(r,D.aNc)
p=A.N()
p.r=B.c.gp(0)
q.b_(D.aNc,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bT
o.e=B.fG
n=new C.frN(t)
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
return A.b(r.os().zm(520,160),$async$bAR)
case 4:w=3
return A.b(b3.hw(B.h1),$async$bAR)
case 3:b0=b3
u=b0==null?null:J.eX(B.dD.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAR,v)},
fB_(d){return C.i5O(d)},
i5O(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fB_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bgt()
n=d.x!=null&&d.z2(null).length===0
if(d.x!=null)t=n?D.zw:D.It
else t=d.gTJ()?D.It:D.aIe
w=3
return A.b(C.bAR(d.ax),$async$fB_)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amS(s)
r=A.a4i(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aIe}else{p.c=C.wQ(q,!0)
p.b=n?D.zw:D.It}r.a30(A.fWM(new C.fB1(p,d,new C.fB2(),t,n,o),null,D.bxq,B.wq))
u=r.ke(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fB_,v)},
fHD(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fHD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fB_(d),$async$fHD)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.GE(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHD,v)},
frH:function frH(){},
frI:function frI(){},
frN:function frN(d){this.a=d},
fB2:function fB2(){},
fB1:function fB1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fB0:function fB0(){},
fMZ(d,e){var w=0,v=A.j(x.H)
var $async$fMZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fN2(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fMZ)
case 2:return A.h(null,v)}})
return A.i($async$fMZ,v)},
bDs(d,e,f,g){return C.idi(d,e,f,g)},
idi(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bDs=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.f1F)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fMV(g,r,f),d,null,!0,!0,x.H),$async$bDs)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bDs,v)},
fN3(d,e){var w=0,v=A.j(x.H)
var $async$fN3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fN6(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fN3)
case 2:return A.h(null,v)}})
return A.i($async$fN3,v)},
aYy:function aYy(d,e){this.c=d
this.a=e},
c39:function c39(){},
baG:function baG(d,e){this.b=d
this.a=e},
fN2:function fN2(d,e){this.a=d
this.b=e},
fN_:function fN_(d){this.a=d},
fN0:function fN0(d,e,f){this.a=d
this.b=e
this.c=f},
fN1:function fN1(d,e){this.a=d
this.b=e},
fMV:function fMV(d,e,f){this.a=d
this.b=e
this.c=f},
fMT:function fMT(d){this.a=d},
fMU:function fMU(d,e,f){this.a=d
this.b=e
this.c=f},
fN6:function fN6(d,e){this.a=d
this.b=e},
fN4:function fN4(d){this.a=d},
fN5:function fN5(d,e,f){this.a=d
this.b=e
this.c=f},
fvK(d,e){var w=0,v=A.j(x.y),u,t
var $async$fvK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1T(d),$async$fvK)
case 3:t=g
J.nv(t,new C.fvL(e))
u=A.ahz(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvK,v)},
fvL:function fvL(d){this.a=d},
aom:function aom(d,e,f){this.c=d
this.d=e
this.a=f},
aCC:function aCC(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dHv:function dHv(d,e){this.a=d
this.b=e},
dHg:function dHg(d,e){this.a=d
this.b=e},
dHj:function dHj(d,e,f){this.a=d
this.b=e
this.c=f},
dHi:function dHi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHh:function dHh(d,e){this.a=d
this.b=e},
dHk:function dHk(d,e){this.a=d
this.b=e},
dHe:function dHe(){},
dHf:function dHf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dHd:function dHd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dGZ:function dGZ(d){this.a=d},
dH_:function dH_(d,e,f){this.a=d
this.b=e
this.c=f},
dH0:function dH0(d,e){this.a=d
this.b=e},
dGY:function dGY(d){this.a=d},
dH5:function dH5(d,e){this.a=d
this.b=e},
dGX:function dGX(d){this.a=d},
dH6:function dH6(d,e,f){this.a=d
this.b=e
this.c=f},
dH7:function dH7(d,e,f){this.a=d
this.b=e
this.c=f},
dGW:function dGW(d,e){this.a=d
this.b=e},
dH8:function dH8(d,e,f){this.a=d
this.b=e
this.c=f},
dGV:function dGV(d,e){this.a=d
this.b=e},
dH9:function dH9(d,e){this.a=d
this.b=e},
dGU:function dGU(d){this.a=d},
dHa:function dHa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGS:function dGS(){},
dGM:function dGM(d){this.a=d},
dGN:function dGN(d){this.a=d},
dGT:function dGT(d,e){this.a=d
this.b=e},
dHb:function dHb(d,e){this.a=d
this.b=e},
dGR:function dGR(d){this.a=d},
dHc:function dHc(d){this.a=d},
dGQ:function dGQ(){},
dH1:function dH1(d,e){this.a=d
this.b=e},
dGP:function dGP(d){this.a=d},
dH2:function dH2(d,e,f){this.a=d
this.b=e
this.c=f},
dGO:function dGO(d,e){this.a=d
this.b=e},
dGL:function dGL(d,e){this.a=d
this.b=e},
dH3:function dH3(d){this.a=d},
dH4:function dH4(d,e,f){this.a=d
this.b=e
this.c=f},
dHy:function dHy(){},
dHz:function dHz(d,e){this.a=d
this.b=e},
dHw:function dHw(d){this.a=d},
dHx:function dHx(d){this.a=d},
dHs:function dHs(d,e){this.a=d
this.b=e},
dHt:function dHt(d){this.a=d},
dHl:function dHl(d,e,f){this.a=d
this.b=e
this.c=f},
dHm:function dHm(d,e,f){this.a=d
this.b=e
this.c=f},
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
dHA:function dHA(){},
dHB:function dHB(){},
dHC:function dHC(){},
dHD:function dHD(d){this.a=d},
dHu:function dHu(d,e){this.a=d
this.b=e},
hop(d){return B.d.dN(D.a2g,new C.fwo(d),new C.fwp())},
uk:function uk(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fwo:function fwo(d){this.a=d},
fwp:function fwp(){},
akB:function akB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aUj:function aUj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SE:function SE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bei:function bei(){this.d=$
this.c=this.a=null},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7h:function d7h(d,e){this.a=d
this.b=e},
d7i:function d7i(){},
d7k:function d7k(d,e){this.a=d
this.b=e},
h98(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.ne(t,w,v,u==null?new A.T(Date.now(),0,!1):u)},
KQ(d,e){return C.i4r(d,e)},
i4r(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$KQ)
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
o=A.cD(o,new C.fyD(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fyE(),n),n.k("J.E"))
B.d.aZ(o,new C.fyF())
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
return A.i($async$KQ,v)},
AY(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$AY)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fLD(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AY,v)},
aQp(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KQ(d,e),$async$aQp)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.fTN(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AY(d,e,u),$async$aQp)
case 3:return A.h(null,v)}})
return A.i($async$aQp,v)},
bBi(d,e,f){var w=0,v=A.j(x.H),u
var $async$bBi=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KQ(d,e),$async$bBi)
case 2:u=h
J.nv(u,new C.fvC(f))
w=3
return A.b(C.AY(d,e,u),$async$bBi)
case 3:return A.h(null,v)}})
return A.i($async$bBi,v)},
bBw(d,e){return C.i4q(d,e)},
i4q(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bBw=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bBw)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.N2
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
if(D.CH.ai(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3U,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a3h,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a3c,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cVG,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.HD(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.N2
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.N2
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBw,v)},
Rs(d,e,f){return C.icP(d,e,f)},
icP(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rs=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Rs)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ag(),null)),$async$Rs)
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
return A.i($async$Rs,v)},
QW(d,e){return C.i4s(d,e)},
i4s(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$QW)
case 7:r=g
q=r.tg("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KQ(d,e),$async$QW)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lt(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QW)
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
return A.i($async$QW,v)},
agf(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QW(d,e),$async$agf)
case 3:s=g
r=J.a4(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.ay(),$async$agf)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agf)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agf,v)},
a2w(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2w=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QW(d,e),$async$a2w)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.ay(),$async$a2w)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2w)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2w)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2w)
case 6:return A.h(null,v)}})
return A.i($async$a2w,v)},
ne:function ne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyD:function fyD(){},
fyE:function fyE(){},
fyF:function fyF(){},
fLD:function fLD(){},
fTN:function fTN(d){this.a=d},
fvC:function fvC(d){this.a=d},
HD:function HD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bO9:function bO9(d){this.a=d},
id7(d,e,f,g,h,i,j){return A.a5(d,!1).cm(A.ea(new C.fMb(j,i,f,e,h,g),!0,null,x.H))},
QT(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QT=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QW(h,g),$async$QT)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aPk)
u=!1
w=1
break}w=4
return A.b(C.hsf(d,f,e),$async$QT)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agf(h,g),$async$QT)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.ne(""+(q+n),l,B.a.i(m.b),new A.T(Date.now(),0,!1)))}w=6
return A.b(C.AY(h,r,p),$async$QT)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rs(h,r,new C.HD("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QT)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QT,v)},
fMb:function fMb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zh:function Zh(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azG:function azG(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d7Z:function d7Z(d){this.a=d},
d7Y:function d7Y(d,e){this.a=d
this.b=e},
d7N:function d7N(d,e){this.a=d
this.b=e},
d7K:function d7K(d,e){this.a=d
this.b=e},
d7l:function d7l(d){this.a=d},
d7m:function d7m(d,e){this.a=d
this.b=e},
d7O:function d7O(d){this.a=d},
d7u:function d7u(d){this.a=d},
d7s:function d7s(d){this.a=d},
d7t:function d7t(d){this.a=d},
d7v:function d7v(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7M:function d7M(){},
d7q:function d7q(d){this.a=d},
d7r:function d7r(d,e){this.a=d
this.b=e},
d7w:function d7w(d){this.a=d},
d7x:function d7x(d,e){this.a=d
this.b=e},
d7X:function d7X(d){this.a=d},
d7W:function d7W(d,e){this.a=d
this.b=e},
d7V:function d7V(d){this.a=d},
d7H:function d7H(d){this.a=d},
d7G:function d7G(d){this.a=d},
d7I:function d7I(d){this.a=d},
d7n:function d7n(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e){this.a=d
this.b=e},
d7A:function d7A(d){this.a=d},
d7B:function d7B(d){this.a=d},
d7z:function d7z(){},
d7C:function d7C(d){this.a=d},
d7D:function d7D(d){this.a=d},
d7E:function d7E(d,e){this.a=d
this.b=e},
d7F:function d7F(d,e,f){this.a=d
this.b=e
this.c=f},
d7y:function d7y(d,e){this.a=d
this.b=e},
d7Q:function d7Q(d){this.a=d},
d7P:function d7P(){},
d7R:function d7R(d){this.a=d},
d7S:function d7S(d){this.a=d},
d7T:function d7T(d){this.a=d},
d7U:function d7U(d,e){this.a=d
this.b=e},
d7o:function d7o(d){this.a=d},
d7p:function d7p(d){this.a=d},
Zl:function Zl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beD:function beD(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d9J:function d9J(d){this.a=d},
d9K:function d9K(d){this.a=d},
d9I:function d9I(d){this.a=d},
d9L:function d9L(d){this.a=d},
d9H:function d9H(d){this.a=d},
d9M:function d9M(d){this.a=d},
d9G:function d9G(d){this.a=d},
d9N:function d9N(d,e){this.a=d
this.b=e},
d9F:function d9F(d,e){this.a=d
this.b=e},
d9O:function d9O(d,e){this.a=d
this.b=e},
Zj:function Zj(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeH:function aeH(d,e,f){this.a=d
this.b=e
this.c=f},
azH:function azH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d8d:function d8d(d,e){this.a=d
this.b=e},
d8c:function d8c(d,e){this.a=d
this.b=e},
d8h:function d8h(d){this.a=d},
d8g:function d8g(d,e){this.a=d
this.b=e},
d8e:function d8e(d){this.a=d},
d8f:function d8f(d){this.a=d},
d8i:function d8i(d){this.a=d},
d8j:function d8j(d){this.a=d},
d8b:function d8b(d,e){this.a=d
this.b=e},
d8a:function d8a(d,e){this.a=d
this.b=e},
JW:function JW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YA:function YA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cGO:function cGO(d){this.a=d},
cGP:function cGP(){},
cGQ:function cGQ(d){this.a=d},
bbT:function bbT(d,e,f){this.b=d
this.c=e
this.a=f},
bbK:function bbK(d,e){this.b=d
this.a=e},
ul:function ul(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YS:function YS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbR:function bbR(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d_f:function d_f(d,e,f){this.a=d
this.b=e
this.c=f},
d_e:function d_e(d,e){this.a=d
this.b=e},
d_E:function d_E(d){this.a=d},
d_r:function d_r(){},
d_F:function d_F(d){this.a=d},
d_q:function d_q(){},
d_G:function d_G(d,e){this.a=d
this.b=e},
d_p:function d_p(d,e){this.a=d
this.b=e},
d_H:function d_H(d,e){this.a=d
this.b=e},
d_o:function d_o(d,e){this.a=d
this.b=e},
d_I:function d_I(d){this.a=d},
d_n:function d_n(){},
d_J:function d_J(d,e){this.a=d
this.b=e},
d_m:function d_m(d,e){this.a=d
this.b=e},
d_K:function d_K(d){this.a=d},
d_z:function d_z(d,e){this.a=d
this.b=e},
d_L:function d_L(d){this.a=d},
d_M:function d_M(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_P:function d_P(d){this.a=d},
d_y:function d_y(d,e){this.a=d
this.b=e},
d_Q:function d_Q(d,e){this.a=d
this.b=e},
aGG:function aGG(d){this.a=d},
bh6:function bh6(d){this.a=d},
ba4:function ba4(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i3p(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahM(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.T(Date.now(),0,!1))
s=new C.fws(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.S(a4),p=q.k("a_<1>"),q=q.k("cP<1,m>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.y5)m.push(l===D.a_i?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.k4(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k4(h,a2,a2)-A.k4(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cP(new A.a_(a4,new C.fwq(u,f),p),new C.fwr(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i3q(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahM(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fwx(v,e)
q=new C.fwv(v)
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
for(l=B.d.gae(e),k=new A.f2(l,new C.fww(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hQ_(d,e,f,g){var w,v,u=C.i3r(d,e)
if(u<=0||f.length<=u)return new A.aeh(!1,D.Cu,f)
if(g.t(0,e.a))return new A.aeh(!1,D.Cu,f)
w=A.S(f).c
v=A.d9(f,0,A.dG(u,"count",x.S),w).dJ(0)
return new A.aeh(!0,A.d9(f,u,null,w).dJ(0),v)},
hQ0(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahM(d3),d2=d1.length
if(d2===0)return D.h4v
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.ca(0,t.a,new C.d8q(t))}s=new C.d8H(v)
d2=x.h
r=A.U(w,d2)
q=new C.d8z(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d8y(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.ca(0,k,new C.d8r()),o)}h=new C.d8x(s)
g=new C.d8w(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d8s(h),o),o.k("J.E"))
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
a9=new C.d8F(new C.d8B(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gaky(a2);o.C();){b0=o.d
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
b7=new C.d8p(a2,new C.d8G(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.FM(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.K3(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bM(0,new C.d8t(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f2(j,new C.d8u(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d8v())
c6.push(new C.aIM(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.ben(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hnU(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hid(d,e,f,g,h,i,j,k,l,m,n){return new C.ZV(k,f,j,e,l,n,m,d,g,h,i,null)},
aBD(d,e,f,g,h,i,j){return new C.bi2(i,d,e,f,j,h,g,null)},
apu:function apu(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDc:function aDc(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dVv:function dVv(d){this.a=d},
dVu:function dVu(d){this.a=d},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVz:function dVz(d){this.a=d},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVw:function dVw(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVA:function dVA(d,e){this.a=d
this.b=e},
apo:function apo(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aD9:function aD9(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dUW:function dUW(d){this.a=d},
dUU:function dUU(d){this.a=d},
dUV:function dUV(d){this.a=d},
dUX:function dUX(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUp:function dUp(d){this.a=d},
dUq:function dUq(d,e){this.a=d
this.b=e},
dUE:function dUE(d){this.a=d},
dUC:function dUC(d){this.a=d},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUF:function dUF(d){this.a=d},
dUG:function dUG(d,e){this.a=d
this.b=e},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
dUO:function dUO(d,e){this.a=d
this.b=e},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d,e){this.a=d
this.b=e},
dUI:function dUI(d){this.a=d},
dUK:function dUK(d,e){this.a=d
this.b=e},
dUH:function dUH(d){this.a=d},
dUL:function dUL(d){this.a=d},
dUM:function dUM(d){this.a=d},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUd:function dUd(d,e){this.a=d
this.b=e},
dUe:function dUe(d,e){this.a=d
this.b=e},
dUZ:function dUZ(d,e,f){this.a=d
this.b=e
this.c=f},
dUT:function dUT(d,e,f){this.a=d
this.b=e
this.c=f},
dUS:function dUS(d){this.a=d},
dUf:function dUf(d){this.a=d},
dUg:function dUg(d){this.a=d},
dUh:function dUh(){},
dUi:function dUi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUm:function dUm(d,e){this.a=d
this.b=e},
dUl:function dUl(d,e){this.a=d
this.b=e},
dUk:function dUk(d){this.a=d},
dUn:function dUn(d,e){this.a=d
this.b=e},
dUj:function dUj(d){this.a=d},
dUY:function dUY(d){this.a=d},
dUz:function dUz(){},
dUA:function dUA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUy:function dUy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUu:function dUu(d,e,f){this.a=d
this.b=e
this.c=f},
dUt:function dUt(d,e,f){this.a=d
this.b=e
this.c=f},
dUr:function dUr(d,e){this.a=d
this.b=e},
dUv:function dUv(d){this.a=d},
dUw:function dUw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUs:function dUs(d,e){this.a=d
this.b=e},
dUx:function dUx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUB:function dUB(d,e){this.a=d
this.b=e},
dV5:function dV5(){},
dV6:function dV6(d,e){this.a=d
this.b=e},
dV7:function dV7(d){this.a=d},
dV8:function dV8(d,e){this.a=d
this.b=e},
dV1:function dV1(d){this.a=d},
dV_:function dV_(d,e){this.a=d
this.b=e},
dV2:function dV2(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e){this.a=d
this.b=e},
dV4:function dV4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dV9:function dV9(d){this.a=d},
dV0:function dV0(d){this.a=d},
dUo:function dUo(d){this.a=d},
bel:function bel(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d8n:function d8n(d){this.a=d},
d8m:function d8m(d,e){this.a=d
this.b=e},
d8o:function d8o(d){this.a=d},
d8l:function d8l(d,e){this.a=d
this.b=e},
fws:function fws(d,e){this.a=d
this.b=e},
fwt:function fwt(d){this.a=d},
fwu:function fwu(){},
fwq:function fwq(d,e){this.a=d
this.b=e},
fwr:function fwr(){},
fwx:function fwx(d,e){this.a=d
this.b=e},
fwy:function fwy(d){this.a=d},
fwz:function fwz(){},
fwv:function fwv(d){this.a=d},
fww:function fww(d,e){this.a=d
this.b=e},
K3:function K3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FM:function FM(d,e){this.a=d
this.b=e},
ben:function ben(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d8q:function d8q(d){this.a=d},
d8H:function d8H(d){this.a=d},
d8z:function d8z(d){this.a=d},
d8A:function d8A(){},
d8y:function d8y(d){this.a=d},
d8r:function d8r(){},
d8x:function d8x(d){this.a=d},
d8w:function d8w(d,e){this.a=d
this.b=e},
d8s:function d8s(d){this.a=d},
d8B:function d8B(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d8C:function d8C(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8E:function d8E(){},
d8F:function d8F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d8G:function d8G(){},
d8p:function d8p(d,e,f,g,h,i,j,k,l,m){var _=this
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
d8t:function d8t(d,e){this.a=d
this.b=e},
d8u:function d8u(d){this.a=d},
d8v:function d8v(){},
aIM:function aIM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
beo:function beo(d,e){this.b=d
this.a=e},
d8I:function d8I(){},
d8J:function d8J(d){this.a=d},
d8K:function d8K(d){this.a=d},
d8L:function d8L(){},
bi3:function bi3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bds:function bds(d,e){this.b=d
this.a=e},
bvP:function bvP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fdy:function fdy(d){this.a=d},
blp:function blp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ePp:function ePp(d){this.a=d},
ePo:function ePo(d,e){this.a=d
this.b=e},
ZV:function ZV(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBB:function aBB(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
doB:function doB(d,e){this.a=d
this.b=e},
doA:function doA(d){this.a=d},
doy:function doy(d){this.a=d},
doz:function doz(d){this.a=d},
doK:function doK(d){this.a=d},
doL:function doL(d){this.a=d},
doJ:function doJ(d,e){this.a=d
this.b=e},
doM:function doM(){},
doP:function doP(d){this.a=d},
doI:function doI(d,e){this.a=d
this.b=e},
doO:function doO(){},
doQ:function doQ(d){this.a=d},
doH:function doH(d,e){this.a=d
this.b=e},
doR:function doR(d){this.a=d},
doG:function doG(d){this.a=d},
doS:function doS(d){this.a=d},
doF:function doF(d){this.a=d},
doT:function doT(d){this.a=d},
doE:function doE(d){this.a=d},
doU:function doU(d){this.a=d},
doD:function doD(d){this.a=d},
doV:function doV(d){this.a=d},
doC:function doC(d,e){this.a=d
this.b=e},
doN:function doN(d){this.a=d},
ad7:function ad7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bi2:function bi2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ad6:function ad6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bi1:function bi1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
doW:function doW(d){this.a=d},
doX:function doX(d,e){this.a=d
this.b=e},
aBC:function aBC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHO:function aHO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ad8:function ad8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dp5:function dp5(d){this.a=d},
JS:function JS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hd4(d){var w=d.T,v=x.N
return w.jb(w,new C.c9H(),v,v)},
hHx(d){var w=d.bz
if(w>=0)return w
return 5},
hd6(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hd4(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hd5(d,e){var w=C.hd6(d,e)
if(w!=null&&w.cd(new A.T(Date.now(),0,!1)))return!0
return!1},
hHy(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hd4(d),w,w)
u=C.hd6(d,e)
t=u!=null&&u.cd(new A.T(Date.now(),0,!1))?u:new A.T(Date.now(),0,!1)
v.n(0,s,t.bS(A.dE(30,0,0,0,0,0).a).a6().ac())
d.T=v},
b__(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b__=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lj(t,B.Ig),$async$b__)
case 3:if(l){u=!0
w=1
break}u=A.kX(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ig,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b__,v)},
c9H:function c9H(){},
hHv(){var w,v=$.pz(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.h3(u)},
Ix(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ix=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Ix)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Ix)
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
return A.i($async$Ix,v)},
a76(d){return C.hHw(d)},
hHw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a76=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a76)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cI,null),$async$a76)
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
return A.i($async$a76,v)},
c9G(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c9G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ix(),$async$c9G)
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
return A.i($async$c9G,v)},
Ns(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ns=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c9G(d),$async$Ns)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ix(),$async$Ns)
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
return A.b(C.a76(s),$async$Ns)
case 9:case 8:u=t
w=1
break
case 5:n=C.hHv()
w=10
return A.b(C.Ix(),$async$Ns)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a76(s),$async$Ns)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ns,v)},
aZZ(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ix(),$async$aZZ)
case 3:t=f
for(s=J.dl(t),r=s.gdM(t),r=r.dJ(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a76(t),$async$aZZ)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZZ,v)},
a77(d,e,f){var w=0,v=A.j(x.H),u
var $async$a77=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apt(d,e),$async$a77)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ns(d),$async$a77)
case 7:w=4
break
case 5:w=8
return A.b(C.aZZ(d),$async$a77)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a77,v)},
apn(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apn=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apt(f,e),$async$apn)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$apn)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ix(),$async$apn)
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
return A.i($async$apn,v)},
aZY(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZY)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ix(),$async$aZY)
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
return A.i($async$aZY,v)},
hHz(){var w,v=$.pz(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.h3(u)},
apq(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$apq)
case 3:if(!g){u=null
w=1
break}t=C.hHz()
w=4
return A.b(A.V2(),$async$apq)
case 4:s=g
r=B.dK.aK(B.S.ao(d.eS(),null))
r=B.cL.gct().aK(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a78(s),$async$apq)
case 5:p=e?999:2
u=new A.a06("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apq,v)},
app(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$app=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.V2(),$async$app)
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
return A.b(C.aZY(J.k(l==null?"":l),j),$async$app)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cB(0,B.cG.aK(t))
s=C.hd7(r)}catch(f){q=A.ab(f)
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
return A.b(A.a78(p),$async$app)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$app,v)},
hd7(d){var w,v,u,t,s=null
try{w=B.S.aL(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hHB(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fXQ(d){var w=0,v=A.j(x.m),u,t,s
var $async$fXQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.app(t[1])
w=1
break}u=null
w=1
break}u=C.hd7(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXQ,v)},
hHB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.db(v,x.f)
u=A.cD(u,new C.c9J(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c9K(),t),t.k("J.E"))}else s=A.a([],x._)
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
n=A.cD(n,new C.c9L(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c9M(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.apr(h,w,s,r,q)},
apt(d,e){var w=0,v=A.j(x.y),u,t
var $async$apt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Nj(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AM(d),$async$apt)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apt,v)},
c9S(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c9S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AM(d),$async$c9S)
case 3:t=s.b6(f,new C.c9T(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.c9U())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9S,v)},
V3(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$V3=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apt(e,d),$async$V3)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Ns(e),$async$V3)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AM(e),$async$V3)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.c9Q(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gan(r)){u=null
w=1
break}t=t.dz(r,new C.c9R(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KQ(e,o),$async$V3)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.apr(s,B.a.i(e.toLowerCase()),r,new A.T(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V3,v)},
b_2(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b_2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.V3(d,e,f,g),$async$b_2)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gu(A.K_(q.eS(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_2,v)},
b_1(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b_1=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.V3(d,e,f,g),$async$b_1)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.apq(r,f),$async$b_1)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFP(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_1,v)},
V4(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$V4=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fXQ(a0),$async$V4)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apn(g.a,d,e,f,s,r),$async$V4)
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
return A.b(C.bB8(e,j),$async$V4)
case 12:case 11:w=13
return A.b(C.ahx(e,j,s),$async$V4)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.AY(e,i,h),$async$V4)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bp_(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V4,v)},
apr:function apr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c9O:function c9O(){},
c9P:function c9P(){},
c9N:function c9N(){},
c9J:function c9J(){},
c9K:function c9K(){},
c9L:function c9L(){},
c9M:function c9M(){},
c9T:function c9T(){},
c9U:function c9U(){},
c9Q:function c9Q(d){this.a=d},
c9R:function c9R(d){this.a=d},
h5k(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hE(d,new C.aps(w,e,g,i,f,h,null),!0,null,x.H)},
d8k(d,e,f,g,h,i,j,k){return new C.bek(i,e,k,j,g,f,h,d,null)},
aps:function aps(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDb:function aDb(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dVi:function dVi(d){this.a=d},
dVj:function dVj(d,e,f){this.a=d
this.b=e
this.c=f},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVf:function dVf(d){this.a=d},
dVg:function dVg(d,e){this.a=d
this.b=e},
dVh:function dVh(d,e){this.a=d
this.b=e},
dVm:function dVm(d){this.a=d},
dVl:function dVl(d,e){this.a=d
this.b=e},
dVk:function dVk(){},
dVq:function dVq(d){this.a=d},
dVr:function dVr(d,e){this.a=d
this.b=e},
dVp:function dVp(d,e){this.a=d
this.b=e},
d8M:function d8M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bem:function bem(d,e,f){this.d=d
this.e=e
this.a=f},
aco:function aco(d,e,f){this.c=d
this.d=e
this.a=f},
bek:function bek(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bep:function bep(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_f:function a_f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDa:function aDa(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dVa:function dVa(d,e){this.a=d
this.b=e},
dVb:function dVb(d){this.a=d},
dVc:function dVc(d){this.a=d},
dVd:function dVd(d){this.a=d},
dVe:function dVe(d){this.a=d},
a_g:function a_g(d){this.a=d},
bjw:function bjw(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dVs:function dVs(d,e){this.a=d
this.b=e},
aYx(d,e){return new C.aYw(d,e,null)},
aYw:function aYw(d,e,f){this.c=d
this.d=e
this.a=f},
i5T(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b6(d,11)},
idh(d){return A.bR(B.K,null,new C.fME(new C.tS(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hf0(d,e){return new C.asm(e,d,null)},
aQ6(d,e,f,g,h,i,j){var w=C.i5T(i)
if(w!=null)return A.bx(e,new A.a7(j,f,new C.a6b(w,!0,null),null),B.aq)
return I.aPt(e,B.bX,f,g,h,i,j)},
lC:function lC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6b:function a6b(d,e,f){this.c=d
this.d=e
this.a=f},
bjc:function bjc(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b5$=e
_.c=_.a=null},
dGD:function dGD(d){this.a=d},
dGE:function dGE(){},
dGF:function dGF(d,e){this.a=d
this.b=e},
bjb:function bjb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fME:function fME(d){this.a=d},
fMD:function fMD(d,e){this.a=d
this.b=e},
fMC:function fMC(d,e){this.a=d
this.b=e},
fMB:function fMB(d,e){this.a=d
this.b=e},
asm:function asm(d,e,f){this.c=d
this.d=e
this.a=f},
chm:function chm(d,e){this.a=d
this.b=e},
aL7:function aL7(){},
id2(d){var w=null
return A.ca(w,w,!0,w,new C.fM0(),d,w,!0,!0,x.e2)},
iec(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fTu(h,g,f,e),d,w,!0,!0,x.N)},
id4(d,e){var w=null
return A.ca(w,w,!0,w,new C.fM5(e),d,w,!0,!0,x.dY)},
id3(d){var w=null
return A.ca(w,w,!0,w,new C.fM4(),d,w,!0,!0,x.c5)},
aT5:function aT5(d,e){this.a=d
this.b=e},
aT4:function aT4(d){this.a=d},
aR2:function aR2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fM0:function fM0(){},
fTu:function fTu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fM5:function fM5(d){this.a=d},
fM4:function fM4(){},
YU:function YU(d,e){this.c=d
this.a=e},
ayr:function ayr(){var _=this
_.d=$
_.c=_.a=_.e=null},
d01:function d01(d){this.a=d},
d02:function d02(d){this.a=d},
d00:function d00(d,e){this.a=d
this.b=e},
d03:function d03(d){this.a=d},
d04:function d04(d){this.a=d},
YT:function YT(d){this.a=d},
ayq:function ayq(){this.d=$
this.c=this.a=null},
d_Y:function d_Y(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d0_:function d0_(d){this.a=d},
Yr:function Yr(d){this.a=d},
axa:function axa(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cyA:function cyA(){},
cyG:function cyG(d){this.a=d},
cyH:function cyH(d){this.a=d},
cyI:function cyI(d){this.a=d},
cyF:function cyF(){},
cyJ:function cyJ(d){this.a=d},
cyK:function cyK(d){this.a=d},
cyE:function cyE(){},
cyL:function cyL(d,e){this.a=d
this.b=e},
cyD:function cyD(d,e){this.a=d
this.b=e},
cyB:function cyB(d,e){this.a=d
this.b=e},
cyM:function cyM(d){this.a=d},
cyC:function cyC(){},
cyN:function cyN(d){this.a=d},
a10:function a10(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvG:function bvG(){this.d=$
this.c=this.a=null},
fd_:function fd_(d,e){this.a=d
this.b=e},
fd0:function fd0(d){this.a=d},
fd1:function fd1(d,e){this.a=d
this.b=e},
abr:function abr(d,e){this.a=d
this.b=e},
Fz:function Fz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bvE:function bvE(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fcY:function fcY(d,e){this.a=d
this.b=e},
ax3:function ax3(d,e){this.c=d
this.a=e},
bvF:function bvF(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fcZ:function fcZ(d){this.a=d},
bvD:function bvD(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aNi:function aNi(){},
aNj:function aNj(){},
bD4(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bl(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oM(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fKE(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aX(B.o.u(s),2,"0")
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XR(A.d0(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().kV(85,1280,B.eG),$async$aPJ)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fe(),$async$aPJ)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hf_()
w=9
return A.b(C.chl(q,r),$async$aPJ)
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
return A.i($async$aPJ,v)},
aQ4(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aQ4=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.chi(g)
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
return A.b($.W().LC(p,!0,null,i).d8(0,B.fN),$async$aQ4)
case 9:n=a1
w=10
return A.b(n.lI(),$async$aQ4)
case 10:m=a1
w=11
return A.b(J.a2J(m).hw(B.h1),$async$aQ4)
case 11:l=a1
J.a2J(m).q()
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
return A.i($async$aQ4,v)},
fKE:function fKE(){},
tS:function tS(d){this.a=d},
asl:function asl(d,e,f){this.c=d
this.d=e
this.a=f},
aEH:function aEH(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eMz:function eMz(d,e){this.a=d
this.b=e},
eMq:function eMq(d){this.a=d},
eMr:function eMr(d){this.a=d},
eMx:function eMx(d,e){this.a=d
this.b=e},
eMw:function eMw(d,e){this.a=d
this.b=e},
eMt:function eMt(d,e){this.a=d
this.b=e},
eMs:function eMs(d,e){this.a=d
this.b=e},
eMu:function eMu(d){this.a=d},
eMv:function eMv(d,e){this.a=d
this.b=e},
eMy:function eMy(d,e){this.a=d
this.b=e},
eMl:function eMl(d,e){this.a=d
this.b=e},
eMp:function eMp(d){this.a=d},
eMo:function eMo(d,e){this.a=d
this.b=e},
eMn:function eMn(d){this.a=d},
eMA:function eMA(d,e){this.a=d
this.b=e},
eMB:function eMB(d,e){this.a=d
this.b=e},
eMm:function eMm(d,e){this.a=d
this.b=e},
hrJ(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.T(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fKF(d,e,f){var w=0,v=A.j(x.N),u
var $async$fKF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hrJ(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKF,v)},
bD6(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bD6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fKF(!0,d,e),$async$bD6)
case 4:w=3
return A.b(r.asj(g,d,e.a),$async$bD6)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aK(B.S.ao(C.hrJ(d,e,null),null))
u="NGMY_WS:"+B.kn.gct().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD6,v)},
hjA(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h50(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d1(s,"NGMYWSSYNC2|"))return!0
if(J.d1(s,"NGMY_WS:"))return!0
if(J.f4(s,t))return!0
if(J.d1(s,"{"))try{w=B.S.aL(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iaW(d){var w,v,u,t=C.hjA(d)
if(t==null)return null
if(C.h50(t))return t
w=B.a.cH(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b6(t,w))
if(C.h50(v))return v}u=B.a.cH(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b6(t,u))
if(C.h50(v))return v}return null},
h5_(d){var w,v,u,t,s,r=null,q=B.a.i(d)
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
t=C.h_q(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bD5(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bD5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asi(t[1]),$async$bD5)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h5_(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h5_(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD5,v)},
h4Z(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lm(w,v,d.c,d.d,new A.T(Date.now(),0,!1))},
bCD(){var w=0,v=A.j(x.o),u,t
var $async$bCD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GF(),$async$bCD)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h5_(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCD,v)},
hsC(d,e,f,g){return A.bR(B.K,null,new C.fTk(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fTk:function fTk(d,e,f){this.a=d
this.b=e
this.c=f},
adt:function adt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eMD:function eMD(d,e){this.a=d
this.b=e},
eME:function eME(d,e){this.a=d
this.b=e},
eMF:function eMF(d,e){this.a=d
this.b=e},
eMG:function eMG(d,e){this.a=d
this.b=e},
eMC:function eMC(d){this.a=d},
asf:function asf(d,e,f){this.c=d
this.d=e
this.a=f},
bkT:function bkT(){var _=this
_.c=_.a=_.e=_.d=null},
eMg:function eMg(d,e){this.a=d
this.b=e},
eMh:function eMh(d){this.a=d},
eMi:function eMi(d){this.a=d},
ask:function ask(d){this.a=d},
aEG:function aEG(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eMk:function eMk(d){this.a=d},
eMj:function eMj(d){this.a=d},
hKN(d,e,f,g,h){return new C.O4(h,g,d,e,f,null)},
aJt:function aJt(d,e){this.a=d
this.b=e},
O4:function O4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEI:function aEI(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eN2:function eN2(){},
eMZ:function eMZ(d,e){this.a=d
this.b=e},
eN_:function eN_(d){this.a=d},
eMK:function eMK(d){this.a=d},
eMI:function eMI(d){this.a=d},
eMJ:function eMJ(d){this.a=d},
eMT:function eMT(d,e){this.a=d
this.b=e},
eMQ:function eMQ(d,e){this.a=d
this.b=e},
eMR:function eMR(d,e){this.a=d
this.b=e},
eMS:function eMS(d,e,f){this.a=d
this.b=e
this.c=f},
eMO:function eMO(d,e,f){this.a=d
this.b=e
this.c=f},
eMM:function eMM(d){this.a=d},
eMN:function eMN(d){this.a=d},
eMP:function eMP(d){this.a=d},
eN5:function eN5(d){this.a=d},
eN4:function eN4(d){this.a=d},
eN6:function eN6(d){this.a=d},
eN3:function eN3(d){this.a=d},
eMH:function eMH(d){this.a=d},
eML:function eML(d,e){this.a=d
this.b=e},
eN1:function eN1(d,e){this.a=d
this.b=e},
eN0:function eN0(d,e){this.a=d
this.b=e},
eMW:function eMW(d){this.a=d},
eMX:function eMX(d){this.a=d},
eMY:function eMY(d,e){this.a=d
this.b=e},
eMV:function eMV(d,e){this.a=d
this.b=e},
eMU:function eMU(d,e,f){this.a=d
this.b=e
this.c=f},
bxs:function bxs(){},
AD(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afZ(d,e,f){return C.i_p(d,e,f)},
i_p(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afZ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$afZ)
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
return A.i($async$afZ,v)},
afY(d,e){return C.i_o(d,e)},
i_o(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afY=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afY)
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
return A.i($async$afY,v)},
hZa(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.SJ(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bA9(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bA9=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b2e(q),$async$bA9)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aQ4(q,!1),$async$bA9)
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
return A.i($async$bA9,v)},
hyx(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
h_q(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.db(s,x.f)
w=A.cD(w,new C.cxY(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cxZ(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lm(w,v,u,r,t==null?new A.T(Date.now(),0,!1):t)},
i3l(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.a_i
case"female":case"f":return D.ak9
default:return D.y5}},
hoq(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h99(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i3l(v==null?j:J.k(v))
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
i3n(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.N3
case"viewer":return D.ky
default:return D.tX}},
i3o(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gv(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bBp(d,e){return B.a.i(e.toLowerCase())===C.Gv(d,e)&&d.y!==D.ky},
u3(d,e){var w,v=d.y
if(v===D.ky)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gv(d,e))return!0
if(v===D.N3)return!0
v=d.e
return new A.M(v,A.h54(),A.S(v).k("M<1,m>")).t(0,w)},
i2N(d){return J.dJ(d,new C.fvs()).gM(0)},
fTU(d){var w=0,v=A.j(x.y),u,t
var $async$fTU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AM(d),$async$fTU)
case 3:u=t.qX(f,new C.fTV(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTU,v)},
bB8(d,e){var w=0,v=A.j(x.H),u,t
var $async$bB8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AM(d),$async$bB8)
case 3:t=g
if(J.qX(t,new C.ftu(e))){w=1
break}if(C.i2N(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bB8,v)},
akD(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.db(n,x.f)
w=A.cD(w,new C.bOa(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bOb(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bOc(),x.N)
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
return new C.kG(l,w,v,!s,t,m,r,q,p,C.i3n(o==null?null:J.k(o)))},
hoz(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CV(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rp(d),$async$CV)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$CV)
case 4:t=f
w=5
return A.b(t.a64(0),$async$CV)
case 5:w=6
return A.b(C.fkz(t,l),$async$CV)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hkb(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oL(l,n),$async$CV)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hkb(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oL(l,n),$async$CV)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CV,v)},
fkz(d,e){return C.hWE(d,e)},
hWE(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fkz=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AD(a9)))
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AD(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aL(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h_q(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AD(a9)+"_"+n))
i=C.hZa(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b2e(h),$async$fkz)
case 17:g=b1
if(g!=null){i=i.SJ(g)
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
case 8:J.RA(q,new C.fkA())
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
return A.i($async$fkz,v)},
bBz(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bBz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rp(d),$async$bBz)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CV(r),$async$bBz)
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
return A.i($async$bBz,v)},
hkb(d){var w,v,u,t
try{w=B.S.aL(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.db(w,x.f)
v=A.cD(v,new C.fgg(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fgh(),u),u.k("J.E"))
B.d.aZ(v,new C.fgi())
return v}catch(t){v=A.a([],x.D)
return v}},
oL(d,e){return C.icT(d,e)},
icT(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oL=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rp(b2),$async$oL)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$oL)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AD(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aL(0,p,null)),new C.fLS(),a2).fP(0)
a2=J.b6(b3,new C.fLT(),a2).c0(0,new C.fLU())
n=A.dd(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ec(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f4(n,m)?17:18
break
case 17:a5=C.AD(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8q(l),$async$oL)
case 19:t=21
a5=C.AD(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aL(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8q(a5==null?null:J.k(a5)),$async$oL)
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
return A.b(C.afY(r,"ngmy_worksheet_item_v3_"+C.AD(a8)+"_"+m),$async$oL)
case 29:w=30
return A.b(C.afY(r,"ngmy_worksheet_thumb_v3_"+C.AD(a8)+"_"+m),$async$oL)
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
return A.b(C.bA9(h),$async$oL)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afZ(r,"ngmy_worksheet_thumb_v3_"+C.AD(a8)+"_"+a4,f),$async$oL)
case 40:g=i.SJ(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afY(r,"ngmy_worksheet_thumb_v3_"+C.AD(a8)+"_"+a4),$async$oL)
case 41:g=i.SJ(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afY(r,"ngmy_worksheet_thumb_v3_"+C.AD(a8)+"_"+a4),$async$oL)
case 42:case 34:a4=i.a
w=43
return A.b(C.afZ(r,"ngmy_worksheet_item_v3_"+C.AD(a8)+"_"+a4,B.S.ao(g.ag(),null)),$async$oL)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afZ(r,"ngmy_worksheets_index_v3_"+C.AD(a8),B.S.ao(q,null)),$async$oL)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eQ(b3,new C.fLV(q))
a4=a3.$ti.k("cP<1,a6<m,@>>")
a7=A.C(new A.cP(a3,new C.fLW(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afZ(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oL)
case 45:w=46
return A.b(J.hxD(r),$async$oL)
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
Lg(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Lg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CV(d),$async$Lg)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.fTT(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.oL(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lg,v)},
bBm(d,e){var w=0,v=A.j(x.H),u
var $async$bBm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CV(d),$async$bBm)
case 2:u=g
J.nv(u,new C.fvW(e))
w=3
return A.b(C.oL(d,u),$async$bBm)
case 3:return A.h(null,v)}})
return A.i($async$bBm,v)},
Gx(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Gx)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aL(0,i,null)
if(x.j.b(t)){j=J.db(t,x.f)
j=A.cD(j,new C.fyJ(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fyK(),s),s.k("J.E"))
B.d.aZ(r,new C.fyL())
k=r}}catch(h){}w=4
return A.b(C.fh0(d),$async$Gx)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hX0(k,p,d)
j=A.S(o)
s=j.k("M<1,a6<m,@>>")
s=A.C(new A.M(o,new C.fyM(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.QC(d,o),$async$Gx)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fyN(d),j),j.k("J.E"))
if(m.length!==0)C.aOB(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gx,v)},
fLE(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fLE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QC(d,e),$async$fLE)
case 3:t=J.dJ(e,new C.fLF(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOB(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLE,v)},
a2C(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a2C)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aL(0,l,null)
if(x.j.b(u)){m=J.db(u,x.f)
m=A.cD(m,new C.fTO(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fTP(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qk(o,new C.fTQ(e))
if(B.a.i(e.x).length===0&&C.u3(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDV(e.y===D.ky?D.ky:D.tX,m)}else p=e
if(q===-1)J.pC(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.QC(d,o),$async$a2C)
case 3:w=C.u3(p,d)?4:5
break
case 4:w=6
return A.b(C.aOA(C.Gv(p,d),p),$async$a2C)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2C,v)},
aOM(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gx(d),$async$aOM)
case 2:u=g
t=J.cF(u)
s=A.rh(t.eQ(u,new C.fvD(e)))
t.br(u,new C.fvE(e))
w=3
return A.b(C.QC(d,u),$async$aOM)
case 3:w=s!=null&&C.bBp(s,d)?4:5
break
case 4:w=6
return A.b(C.fgk(e),$async$aOM)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOM,v)},
ahM(d){var w=d.f,v=A.S(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fTZ(),v),v.k("J.E"))
return w},
h2D(d,e){var w,v=d.f,u=A.rh(new A.a_(v,new C.fv7(e),A.S(v).k("a_<1>")))
v=C.ahM(d)
w=A.S(v).k("a_<1>")
v=A.C(new A.a_(v,new C.fv8(e,u),w),w.k("J.E"))
B.d.aZ(v,new C.fv9())
return v},
i3r(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hsG(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h2D(d,u),new C.fTv(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i4Y(d,e){var w
if(e==null||e.length===0)return 1
w=C.h2D(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fzw(),A.S(w).k("M<1,G>")).ff(0,B.x8)+1},
icM(d){var w,v=C.ahM(d)
if(v.length===0)return null
w=new A.a_(v,new C.fLy(),A.S(v).k("a_<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
i3m(d){return A.F(["id",d.a,"name",d.b,"gender",C.hoq(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i4T(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
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
n=n!==D.y5?n:q.c
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
d=q.aDQ(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cKg(a1,w,a3.d,a2.y,s,a0,v)},
AM(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$AM)
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
p=A.cD(p,new C.fyG(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fyH(),s),s.k("J.E"))
B.d.aZ(p,new C.fyI())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AM,v)},
ahx(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahx=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tX:D.ky
a7=C.Gv(b2,b3)
w=2
return A.b(C.AM(b1),$async$ahx)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fLt(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bB8(b1,b2),$async$ahx)
case 5:case 4:if(b0===-1){u=b2.aDV(a6,a7)
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
i=i!==D.y5?i:l.c
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
s.n(0,m,l.aDQ(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tX:D.ky
u=t.yF(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.QC(b1,a8),$async$ahx)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOA(B.a.i(b3.toLowerCase()),u),$async$ahx)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahx,v)},
hkz(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.T(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.S(m).k("M<1,a6<m,@>>"),k=A.C(new A.M(m,C.hrR(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hkA(d,e){var w=new A.T(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.S(u).k("M<1,a6<m,@>>")
u=A.C(new A.M(u,C.hrR(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hUC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akD(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h54(),A.S(j).k("M<1,m>")).c0(0,new C.fgO())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tX
else s=B.d.t(t,u)?D.N3:D.ky
return w.aDV(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akD(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.db(q,h)
h=A.cD(h,new C.fgP(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.fgQ(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fgR(),x.N).c0(0,new C.fgS())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tX
else s=B.d.t(t,u)?D.N3:D.ky
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
fh0(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fh0=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fh4()
h=x.N
g=x.z
w=7
return A.b(A.iP(A.a([A.ls("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.ls("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.ls("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.U),$async$fh0)
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
h=A.cD(new A.bc(l,h),new C.fh1(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.fh2(),l),l.k("J.E"))
B.d.aZ(l,new C.fh3())
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
return A.i($async$fh0,v)},
hX0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dz(e,new C.flf(),v).c0(0,new C.flg())
t=A.dd(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gv(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ky){m=q.e
m=!new A.M(m,A.h54(),A.S(m).k("M<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i4T(l,v)
o=C.Gv(k,w)
p=v.d
s.n(0,u,o===w?k.bc7(p,D.tX):k.bc7(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aZ(j,new C.flh())
return j},
QC(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$QC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$QC)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fnY(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$QC)
case 3:return A.h(null,v)}})
return A.i($async$QC,v)},
aOA(d,e){return C.i19(d,e)},
i19(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lU("family_trees",A.a([C.hkz(e,d)],p),null,B.cI),$async$aOA)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lU("family_trees",A.a([C.hkA(e,d)],p),null,B.cI),$async$aOA)
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
return A.i($async$aOA,v)},
aOB(d,e){return C.i1a(d,e)},
i1a(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.S(e).k("M<1,a6<m,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fsO(d),n),m)
r=l
w=7
return A.b(A.lU("family_trees",r,null,B.cI),$async$aOB)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fsP(d),n),m)
p=k
w=8
return A.b(A.lU("family_trees",p,null,B.cI),$async$aOB)
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
return A.i($async$aOB,v)},
fgk(d){return C.hTX(d)},
hTX(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fgk=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.R_("family_trees",A.F(["id",d],x.N,x.z),null,B.cI),$async$fgk)
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
return A.i($async$fgk,v)},
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
cy0:function cy0(){},
cy_:function cy_(){},
cxY:function cxY(){},
cxZ:function cxZ(){},
HE:function HE(d,e){this.a=d
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
akC:function akC(d,e){this.a=d
this.b=e},
fvs:function fvs(){},
fTV:function fTV(d){this.a=d},
ftu:function ftu(d){this.a=d},
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
bOe:function bOe(){},
bOd:function bOd(){},
bOa:function bOa(){},
bOb:function bOb(){},
bOc:function bOc(){},
fkA:function fkA(){},
fgg:function fgg(){},
fgh:function fgh(){},
fgi:function fgi(){},
fLS:function fLS(){},
fLT:function fLT(){},
fLU:function fLU(){},
fLV:function fLV(d){this.a=d},
fLW:function fLW(){},
fTT:function fTT(d){this.a=d},
fvW:function fvW(d){this.a=d},
fyJ:function fyJ(){},
fyK:function fyK(){},
fyL:function fyL(){},
fyM:function fyM(){},
fyN:function fyN(d){this.a=d},
fLF:function fLF(d){this.a=d},
fTO:function fTO(){},
fTP:function fTP(){},
fTQ:function fTQ(d){this.a=d},
fvD:function fvD(d){this.a=d},
fvE:function fvE(d){this.a=d},
fTZ:function fTZ(){},
fv7:function fv7(d){this.a=d},
fv8:function fv8(d,e){this.a=d
this.b=e},
fv9:function fv9(){},
fTv:function fTv(d){this.a=d},
fzw:function fzw(){},
fLy:function fLy(){},
fyG:function fyG(){},
fyH:function fyH(){},
fyI:function fyI(){},
fLt:function fLt(d){this.a=d},
fgO:function fgO(){},
fgP:function fgP(){},
fgQ:function fgQ(){},
fgR:function fgR(){},
fgS:function fgS(){},
fh4:function fh4(){},
fh5:function fh5(d){this.a=d},
fh1:function fh1(d){this.a=d},
fh2:function fh2(){},
fh3:function fh3(){},
flf:function flf(){},
flg:function flg(){},
flh:function flh(){},
fnY:function fnY(){},
fsO:function fsO(d){this.a=d},
fsP:function fsP(d){this.a=d},
cy1:function cy1(d,e){this.a=d
this.b=e},
cy2:function cy2(d,e){this.a=d
this.b=e},
aGL:function aGL(d,e,f){this.a=d
this.b=e
this.c=f},
b8x:function b8x(){this.b=this.a=0},
b8w:function b8w(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bvH:function bvH(){},
wQ(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcv()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aX(B.o.u(w.gnf()),2,"0")+":"+B.a.aX(B.o.u(w.gGf()),2,"0")},
hKK(){var w,v=$.pz(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.h3(u)},
asg(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$asg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$asg)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$asg)
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
return A.i($async$asg,v)},
ash(d){return C.hKL(d)},
hKL(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ash=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ash)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cI,null),$async$ash)
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
return A.i($async$ash,v)},
asj(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$asj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$asj)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hKK()
w=4
return A.b(C.asg(),$async$asj)
case 4:r=h
q=B.a.i(e)
p=B.dK.aK(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cL.gct().aK(p),"usesRemaining",25,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.ash(r),$async$asj)
case 5:u=new A.a06("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asj,v)},
asi(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$asi)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.asg(),$async$asi)
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
return A.b(C.ash(q),$async$asi)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asi,v)},
hf_(){var w=new A.T(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cH.av(999999)},
hKM(d){var w,v,u,t,s,r,q
try{w=A.agn(d)
if(w==null)return d
v=w
if(J.Lm(v)>960||J.Ll(v)>960){s=v
r=J.Lm(v)>=J.Ll(v)?960:null
v=A.agm(s,J.Ll(v)>J.Lm(v)?960:null,B.Op,r)}s=v
u=A.am_(82).T5(s,B.yO)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cg(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
chl(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$chl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hKM(e)
$.chh.n(0,s,t)
u=C.bD8(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chl,v)},
b2e(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b2e=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d1(l,"data:image")){u=null
w=1
break}t=4
r=J.f4(l,",")?B.d.gal(J.lu(l,",")):l
q=B.cG.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hf_()
w=7
return A.b(C.chl(p,q),$async$b2e)
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
return A.i($async$b2e,v)},
chi(d){var w=0,v=A.j(x.T),u,t,s
var $async$chi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.chk(s),$async$chi)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cL.gct().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chi,v)},
a8q(d){var w=0,v=A.j(x.H),u,t
var $async$a8q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hrK(d)
if(t==null){w=1
break}$.chh.W(0,t)
w=3
return A.b(C.bD7(t),$async$a8q)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8q,v)},
bD8(d,e){return C.iaZ(d,e)},
iaZ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bD8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNv
w=7
return A.b(n==null?$.aNv=I.h1z():n,$async$bD8)
case 7:r=g
q=new Uint8Array(A.cg(e))
p=J.mK(r,"thumbs","readwrite")
B.iP.mm(J.mI(p,"thumbs"),q,l)
w=8
return A.b(J.pB(p),$async$bD8)
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
return A.i($async$bD8,v)},
bD7(d){return C.iaX(d)},
iaX(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bD7=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNv
w=7
return A.b(o==null?$.aNv=I.h1z():o,$async$bD7)
case 7:r=f
q=J.mK(r,"thumbs","readwrite")
B.iP.FM(J.mI(q,"thumbs"),m)
w=8
return A.b(J.pB(q),$async$bD7)
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
return A.i($async$bD7,v)}},D,Ak,Al,R,Am,An,I
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
C.aoa.prototype={}
C.aYy.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bgt(),f=h.x!=null&&h.z2(i).length===0
if(h.x!=null)w=f?B.b0:B.bz
else w=h.gTJ()?B.bz:B.dS
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.I(D.bgV,B.q,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.eRH,B.f,i,i,new A.o(B.b0.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h8,i,i,i),B.R,D.fkL,B.au,A.d(C.wQ(new A.T(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fgE,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b1_,i,i,i,i,B.Zh,i,i,i)
q=A.n(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.b0.j(0.28),B.q,1)
n=A.h3E(h.d)
o=A.p(B.A,C.aYx(A.fBR(h.e,n),30),B.f,i,i,new A.o(B.lQ,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fc1,B.L,i,i)
m=A.n(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bC,D.fl2,B.ac,A.p(i,A.x(A.a([D.fAy,B.bC,A.d(A.AO(h.c),i,i,i,i,i,i,D.f7_,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fa,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.aif,i,i,i)
p=A.n(16)
m=A.I(B.aL,B.q,1)
l=j.aQB("Original due",C.wQ(h.r,!1))
n=j.aQB("Current due",C.wQ(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.O,n,B.R,A.p(i,A.d(h.gaKK(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Be,i,i,1/0),B.R,j.cfy(),B.O,j.c2Z(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.flZ,B.au,A.d(q,i,i,i,i,i,i,D.fbj,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaFw()){q=A.n(14)
o=A.I(B.cs,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fBS,B.O,A.bx(A.n(12),A.en(new A.a7(1/0,88,A.b3(i,i,i,new A.VW(h.ax,B.M,D.eVV,!0,3.5,i),B.ax),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fx,i,i,i)],s))}p.push(B.aB)
p.push(D.fu_)
return A.p(i,A.x(A.a([r,new A.D(B.aii,A.x(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQB(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a8I,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f8_,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cfy(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9h(B.dS,u,"Not paid yet")
w=t.z2(null).length
v=w===0?B.b0:B.bz
return this.a9h(v,u,C.wQ(t.x,!0))},
c2Z(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9h(B.b0,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9h(B.b0,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a8I,u,u,u)
v=A.S(d).k("M<1,he>")
v=A.C(new A.M(d,new C.c39(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bS(B.bA,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a9h(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a8I,w,w,w),1),new A.dq(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.baG.prototype={
a3(d,e){new A.VW(this.b,B.M,e,!0,3.5,null).a3(d,e)},
au(d){return d.b!==this.b}}
C.aom.prototype={
S(){return new C.aCC(A.a([],x.bp))},
ge2(){return this.c}}
C.aCC.prototype={
Z(){this.a1()
this.IJ()},
IJ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1T(t.a.c),$async$IJ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dHv(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IJ,v)},
aSz(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bs:B.bn).j(0.22)
w=A.n(10)
return A.bs(v,new A.b4(4,r,new A.az(u,1,B.q,-1)),v,B.bl,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bs:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.n(10),D.aZD),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aSy(d){return this.aSz(d,null)},
Po(d){return this.cj9(d)},
cj9(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Po=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GO:B.eG
w=7
return A.b(new A.hT().C5(72,900,900,n),$async$Po)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fe(),$async$Po)
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
return A.i($async$Po,v)},
b0i(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.n(10),n=A.I((q?B.bs:B.bn).j(0.18),B.q,1)
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
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jI,D.bt2,r,r,r)},
D5(d){return this.bzR(d)},
bzQ(){return this.D5(null)},
bzR(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D5=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b4,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jd(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ab(p,2)}o=new A.ar(new A.bb(a4,B.b4,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b4,B.aN),s)
if(a3){a4=new A.T(Date.now(),0,!1).bS(6048e8)
m=A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.h3E(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wj?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",a4,new C.dHe(),new C.dHf(a2,t,a5,r,new C.dHg(a2,t),o,n,j),B.eJ,!0,x.y),$async$D5)
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
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.f1l)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.f00)
w=1
break}a1=A.fBR(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wj?"male":"female"
w=7
return A.b(A.ahL(a3,A.hbI(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D5)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wj?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gcf(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)))a5.cMq(a2.a)
w=8
return A.b(A.ahL(t.a.c,a5),$async$D5)
case 8:case 5:w=9
return A.b(t.IJ(),$async$D5)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D5,v)},
aTd(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cT.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cT
else s=(this.a.d.a?B.bs:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aYx(d,18)
if(g)q=B.cT
else q=this.a.d.a?B.aQ:B.aw
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
S4(d){return this.cAY(d)},
cAY(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$S4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",s,new C.dHy(),new C.dHz(t,d),B.hB,!0,x.y),$async$S4)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.T(s,0,!1)
case 4:w=7
return A.b(A.ahL(t.a.c,d),$async$S4)
case 7:w=8
return A.b(t.IJ(),$async$S4)
case 8:case 1:return A.h(u,v)}})
return A.i($async$S4,v)},
O1(d,e){return this.bKK(0,e)},
bKK(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$O1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l7(s,"Cancel","Delete",e.b+" \xb7 "+A.AO(e.c)+" will be removed from this device.","Delete this debt?"),$async$O1)
case 3:if(!g){w=1
break}w=4
return A.b(C.fvK(t.a.c,e.a),$async$O1)
case 4:w=5
return A.b(t.IJ(),$async$O1)
case 5:case 1:return A.h(u,v)}})
return A.i($async$O1,v)},
aeR(d){return this.cd_(d)},
cd_(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bR(B.K,null,new C.dHs(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeR)
case 2:return A.h(null,v)}})
return A.i($async$aeR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ede
w=J.dJ(m.d,new C.dHA())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dHB())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cJ(v,0,new C.dHC())
w=A.n(18)
s=m.a.d.a
r=s?D.cr6:D.ayH
q=A.I(s?B.cT.j(0.35):B.cT.j(0.18),B.q,1)
s=A.p(l,D.bTi,B.f,l,l,new A.o(B.cT.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.n(12),A.aL(!1,A.n(12),!0,D.ecC,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dHD(m),l,l,l,l,l,l,l),B.f,B.cT,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cx4("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AO(t)
r=A.a([A.p(l,A.x(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b6t(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.az,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.aic,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e0:B.c
q=A.n(18)
o=A.I((w?B.bs:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bOb,B.f,l,l,new A.o(B.cT.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bvt,l,l,1/0))}else{w=m.gciq()
s=A.C(new A.M(v,w,A.S(v).k("M<1,t>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bx9,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.S(u).k("M<1,t>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ai,l,B.e,B.j,0,B.p)},
b6t(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.I((v.a.d.a?B.bs:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cT
else w=v.a.d.a?B.aQ:B.aw
return A.p(u,A.x(A.a([q,B.bC,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ek,u,u,u)},
cx4(d,e){return this.b6t(!1,d,e)},
cir(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z2(j).length,h=d.bfG()
if(d.x!=null){w=d.z2(j).length
v=w===0?B.cT:B.bz}else if(d.gTJ())v=B.bz
else{if(h)w=B.cT
else w=k.a.d.a?B.bs:B.bn
v=w}if(d.x!=null){w=d.z2(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wQ(u,!1)}else{u.toString
t="Paid "+C.wQ(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wQ(w,!1)+" \xb7 "+i+" missed":"Due "+C.wQ(w,!1)}w=k.a.d.a?B.e0:B.c
u=A.n(18)
if(d.gTJ()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bs:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bm:B.lQ
o=A.I(d.gTJ()&&d.x==null?B.bz.j(0.45):B.cT.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h3E(d.d)
o=A.p(B.A,A.de(C.aYx(A.fBR(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.aw
m=x.p
n=A.a([new A.dq(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFw())B.d.v(n,A.a([B.eg,A.X(B.Nu,B.cT.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cV,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AO(d.c)
l=k.a.d.a?B.aQ:B.aw
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(W.ahY,A.B(A.a([o,B.be,p,B.ab,A.x(A.a([n,B.bC,A.X(B.eA,(k.a.d.a?B.bs:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dHu(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.uk.prototype={}
C.akB.prototype={
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.av1,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FP,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eQ(m,A.B(l,B.m,a0,B.e,B.N,0,a0,a0),B.f,B.e_)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bsf,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.eWJ)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vC,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lq,A.x(a2,B.m,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hp,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.az,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.btt,a0,a0,a0,a0)}}
C.aUj.prototype={
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
C.SE.prototype={
S(){return new C.bei()}}
C.bei.prototype={
gbYZ(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.ed9,D.edf],l)
for(w=0;w<8;++w){v=D.a2g[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gz:B.C_
q=t===s
r=A.X(r,q?B.eD:B.bV,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bg,new A.y(v.c,n,A1.DA,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aS(24,24)
p=new A.az(B.eD,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bn(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eE,A.x(A.a([new A.D(B.mw,new A.ci(B.aP,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DW(!0,new C.akB(v,q.d,q.e,new C.d7i(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d7j(o,v),n,n,n,n,n,n,!1,B.a5))}k.push(new A.D(D.btM,A.bG(D.fHe,new C.d7k(o,d),A.bo(B.b6,n,n,n,n,B.oo,n,n,new A.b7(A.n(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.by0,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.ne.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bcj(d,e,f){return new C.ne(this.a,e,d,f)}}
C.HD.prototype={
wm(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HD(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDK(d){var w=null
return this.wm(w,w,w,w,w,d,w,w,w,w,w,w)},
cIe(d){var w=null
return this.wm(w,w,w,w,d,w,w,w,w,w,w,w)},
bch(d,e,f){var w=null
return this.wm(d,w,w,w,w,w,w,w,e,w,f,w)},
cIT(d){var w=null
return this.wm(w,w,w,w,w,w,d,w,w,w,w,w)},
cJ1(d){var w=null
return this.wm(w,w,w,w,w,w,w,w,w,d,w,w)},
cIc(d){var w=null
return this.wm(w,w,w,d,w,w,w,w,w,w,w,w)},
cJ3(d){var w=null
return this.wm(w,w,w,w,w,w,w,w,w,w,w,d)},
cI9(d){var w=null
return this.wm(w,w,d,w,w,w,w,w,w,w,w,w)},
cI4(d){var w=null
return this.wm(w,d,w,w,w,w,w,w,w,w,w,w)},
FE(d){var w=null
return this.wm(w,w,w,w,w,w,w,d,w,w,w,w)},
cJb(d,e,f,g,h,i,j,k,l,m,n){return this.wm(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cFR(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bO9(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CH.gef(D.CH))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3U)
q=l.$2("frame",D.a3h)
l=l.$2("texture",D.a3c)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cJb(p,u,t,q,r,A.qR(d.h(0,"ribbon"))?A.G6(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Zh.prototype={
S(){return new C.azG(A.a([],x.I),D.N2)},
ge2(){return this.c}}
C.azG.prototype={
Z(){var w,v=this
v.a1()
v.f=A.zF(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.l1()
w=v.a
C.bBw(w.c,w.d).bB(new C.d7Z(v),x.fL)},
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
return A.b(C.KQ(s.c,s.d),$async$l1)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d7N(t,r))
t.avw()
case 1:return A.h(u,v)}})
return A.i($async$l1,v)},
gas6(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avw(){var w,v,u=this.gas6(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saW(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saW(0,w==null?"":w)},
cbq(d){this.m(new C.d7K(this,d))
this.avw()},
Nn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Nn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.ne(B.o.u(1000*Date.now()),"Untitled page","",new A.T(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQp(r.c,r.d,s),$async$Nn)
case 3:w=4
return A.b(t.l1(),$async$Nn)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qk(t.d,new C.d7l(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d7m(t,p))
t.avw()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B7(p+1,B.cu,B.kU),$async$Nn)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Nn,v)},
AN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gas6()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQp(o.c,o.d,new C.ne(s,r,q,new A.T(p,0,!1))),$async$AN)
case 3:w=4
return A.b(t.l1(),$async$AN)
case 4:if(t.c==null){w=1
break}t.m(new C.d7O(t))
case 1:return A.h(u,v)}})
return A.i($async$AN,v)},
O2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gas6()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d7u(r),s,null,!0,!0,x.y),$async$O2)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bBi(s.c,s.d,r.a),$async$O2)
case 4:t.m(new C.d7v(t))
w=5
return A.b(t.l1(),$async$O2)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TM(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
yp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$yp)
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
return A.b(C.QT(s,r.r,o,p,q),$async$yp)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hsf(s,r.x,r.r),$async$yp)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KQ(s.c,s.d),$async$yp)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.ne(""+(m+k),q,B.a.i(j.b),new A.T(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AY(r.c,r.d,l),$async$yp)
case 11:w=12
return A.b(t.l1(),$async$yp)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yp,v)},
a0p(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$a0p)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyn(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dN(D.yX,new C.d7L(t),new C.d7M())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mu("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new F.mu(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h5g(o,new F.rm(s,r,"",p,new F.uC(q.d,null,null,null,null,"","","")),null),$async$a0p)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0p,v)},
NL(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$NL)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bR(D.ady,null,new C.d7q(t),s,!0,!0,!0,P.a6U,!1,!1,x.N),$async$NL)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cIe(r)
t.m(new C.d7r(t,q))
s=t.a
w=7
return A.b(C.Rs(s.c,s.d,q),$async$NL)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NL,v)},
WW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(D.ady,null,new C.d7w(t),r,!0,!0,!0,P.a6U,!1,!1,x.e),$async$WW)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d7x(t,s))
r=t.a
w=4
return A.b(C.Rs(r.c,r.d,s),$async$WW)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B7(0,B.dV,B.nf)
case 1:return A.h(u,v)}})
return A.i($async$WW,v)},
bQ8(d){var w=d.bU(),v=B.a.aX(B.o.u(w.gcf()),2,"0"),u=B.a.aX(B.o.u(w.gcv()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gyn(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bYd()
if(r.e)w=D.acm
else if(J.cn(r.d)){w=r.y
v=r.gyn(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f6r,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.ajd,new C.YA(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kr.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.eRu,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dP.j(0.45),B.J,18)],x.V),E.w8,B.n),q,q,q,q,B.Zr,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcEZ(),q,q,q,q,q,q,!1,B.a5))
w.push(B.R)
w.push(A.hn(D.bKp,D.fGH,r.gaMt(),q))
B.d.v(u,w)}w=A.av(A.cc(A.x(u,B.m,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.ez,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kr.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dT:B.Ao
u=A.x(A.a([new A.D(D.buN,w,q),A.E(A.IX(v,new C.d7X(r),J.ad(r.d)+1,q,r.gcbp(),u,B.aP),1),r.bCK()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c6(q,D.aeY,new A.an(B.W,q,B.b2,B.r,A.a([D.aLS,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bYd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JW(B.dY,"AI",h.gbAD(),!0))
if(h.a.f)f.push(new C.JW(B.no,"Cover",h.gbLj(),!1))
if(h.a.f)f.push(new C.JW(B.yz,"Header",h.gbGg(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JW(B.uc,"Print",h.gckt(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hq:B.js
t=v?"Save":"Edit"
f.push(new C.JW(u,t,v?h.gcqN():new C.d7H(h),!1))}if(h.a.f)f.push(new C.JW(B.hE,"Add page",h.gaMt(),!1))
v=C.hop(h.y.Q)
u=h.gyn(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dtM
else{k=new A.aS(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jZ.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kr,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bn(k,k,k,k),g,new A.a9(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kr.j(0.85)
p.push(new A.bB(1,B.bg,A.aB(B.c7,A.x(A.a([k,B.bC,new A.y(l.b,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a5),g))}return new C.akB(v,u,t+" \xb7 "+s+" "+r,new C.d7I(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$zQ)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a27(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d7n(t,p),s,null,!0,!0,x.N),$async$zQ)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yp(),$async$zQ)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DH(),$async$zQ)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fg("Swahili (Kiswahili)",!0),$async$zQ)
case 18:w=16
break
case 17:w=19
return A.b(t.cBD(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zQ)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zQ,v)},
YQ(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.I(E.jZ.j(0.3),B.q,1),r=x.p
return new A.D(B.cv,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.w8,B.a6),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A9.TW,w,w,w),A.d(g,w,w,w,w,w,w,A3.TQ,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7J(d,h),w,w,w,w,w,w,w),w)},
DH(){return this.bPD()},
bPD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DH=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d7A(r),a7,null,!0,!0,x.ei),$async$DH)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d7B(o),a7,null,!0,!0,x.H).fj(new C.d7C(a6))
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
for(a1=0;a1<8;++a1){i=D.yX[a1]
J.cf(j,i.a)}w=8
return A.b(C.agV(a0,a7,new C.d7D(o),d,l,e,j),$async$DH)
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
J.aQR(l,0)
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
a7=j.bcj(m.b.h(0,a4).b,a7,new A.T(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AY(j.c,j.d,l),$async$DH)
case 11:w=12
return A.b(r.l1(),$async$DH)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yX[a1].a)
a5=l.cFR(j,12,a7)
l=r.a
w=15
return A.b(C.Rs(l.c,l.d,a5),$async$DH)
case 15:if(r.c!=null)r.m(new C.d7E(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B7(0,B.dV,B.nf)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.csr("Undo",new C.d7F(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DH,v)},
Fg(d,e){return this.cBE(d,e)},
cBD(d){return this.Fg(d,!1)},
cBE(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fg=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d7Q(a0),k,null,!0,!0,x.H).fj(new C.d7R(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cf(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a2k(m,new C.d7S(a0)),$async$Fg)
case 10:w=8
break
case 9:w=11
return A.b(C.bD_(new C.d7T(a0),m,a2),$async$Fg)
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
J.aQR(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bcj(J.q(p,g).b,j.a,new A.T(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AY(k.c,k.d,o),$async$Fg)
case 12:w=13
return A.b(r.l1(),$async$Fg)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.csr("Undo",new C.d7U(r,d),null),null,null,null,null,B.r,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fg,v)},
bCK(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d7o(v):u
r=A.aH(u,u,u,u,A.X(D.bG5,s?D.kr:B.b_,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hn(A.X(B.vO,B.Fb,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Fb,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbKT(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kr.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d7p(v):u
return A.bm(!0,new A.D(D.buB,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eA,t<J.ad(v.d)?D.kr:B.b_,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Zl.prototype={
S(){return new C.beD(new A.ar(B.as,$.aw()))}}
C.beD.prototype={
ga1x(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbOk(){var w,v=this.ga1x()
A:{if("cover"===v){w=D.cXv
break A}if("book"===v){w=D.cTh
break A}w=D.dlU
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.jZ.j(0.5),n=x.p,m=A.B(A.a([D.dtN,B.at,D.bA1,A.aH(q,q,q,q,B.lw,q,q,q,new C.d9J(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j9(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d9K(r),r.ga1x()==="page",q,q,q,q))
if(r.a.d)l.push(A.j9(q,q,q,D.fBn,q,new C.d9L(r),r.ga1x()==="book",q,q,q,q))
l.push(A.j9(q,q,q,D.foC,q,new C.d9M(r),r.ga1x()==="cover",q,q,q,q))
l=A.bS(B.bA,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.U,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.n(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kK,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dg,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbOk(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mL(q,B.c.j(0.08),new A.y(s,q,B.Jk,q,q,q,q,q,q,q,q,q),B.hJ,new C.d9N(r,s),q,q,q,q))}return A.eL(q,E.AU,A.cc(A.x(A.a([m,B.R,D.fEC,B.am,l,B.ac,k,B.O,A.bS(B.bA,w,B.bq,6,6),B.aB,A.dn(D.bKm,D.fFp,new C.d9O(r,d),A.bo(B.b6,q,q,q,q,B.oo,q,q,new A.b7(A.n(16),B.Y),q,q,q)),B.au,D.fzD],n),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.fD,q,q,B.ag),q,q,q,D.aiW,B.d1,q,new A.b7(p,new A.az(o,1.4,B.q,-1)),q)}}
C.Zj.prototype={
S(){return new C.azH(A.a([],x.Y))},
ge2(){return this.c}}
C.aeH.prototype={}
C.azH.prototype={
Z(){this.a1()
this.l1()},
l1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QW(p.c,p.d),$async$l1)
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
return A.b(C.bBw(r.c,q),$async$l1)
case 6:j=e
i=J
w=7
return A.b(C.KQ(t.a.c,q),$async$l1)
case 7:m.push(new l.aeH(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d8d(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l1,v)},
b7G(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Q4(d,e){return this.ccY(0,e)},
ccY(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).cm(A.ea(new C.d8c(u,e),!0,null,x.y)),$async$Q4)
case 2:t=g
w=3
return A.b(u.l1(),$async$Q4)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aPo)
return A.h(null,v)}})
return A.i($async$Q4,v)},
Fj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aPk)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agf(s.c,s.d),$async$Fj)
case 5:q=e
w=6
return A.b(t.l1(),$async$Fj)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Q4(0,B.d.h1(t.d,new C.d8h(q))),$async$Fj)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QT(p,s.f,r,n,o),$async$Fj)
case 10:m=e
w=11
return A.b(t.l1(),$async$Fj)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aPo)
case 1:return A.h(u,v)}})
return A.i($async$Fj,v)},
Pz(d,e){return this.cos(0,e)},
cos(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d8g(t,e),s,null,!0,!0,x.y),$async$Pz)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2w(s.c,s.d,e.a),$async$Pz)
case 4:w=5
return A.b(t.l1(),$async$Pz)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pz,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bCN(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.I(E.jZ.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fL(0.7142857142857143,A.p(n,A.x(A.a([D.dtO,B.ac,D.ech,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kr.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcEV(),n,n,n,n,n,n,!1,B.a5))}w=A.n(22)
v=A.I(E.jZ.j(0.85),B.q,1.6)
s=A.aB(n,A.p(n,D.bS6,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jZ.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d8i(d),n,n,n,n,n,n,!1,B.a5)
r=A.n(14)
q=B.w.j(0.3)
p=A.I(E.jZ.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.be,D.bAp,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f5v,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h8,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bXX,B.n),n,n,n,Am.Mx,D.bsI,n,n,n)
if(o.e)k=D.acm
else k=k.length===0?D.b61:A.cq(new C.d8j(k))
return A.c6(n,D.aeY,new A.an(B.W,n,B.b2,B.r,A.a([D.aLS,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bCN(d){var w,v,u=this,t=null,s=u.b7G(d),r=d.c,q=x.p,p=A.a([A.bU(0,A.eQ(B.A,new A.a7(300,420,new C.YA(d.b,s,r,t),t),B.f,B.dw),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bRp,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b_,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d8a(u,d),t,t,t,t,t,t,!1,B.a5),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f55,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fL(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kr.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d8b(u,d),t,t,t,t,t,t,!1,B.a5)}}
C.JW.prototype={}
C.YA.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dN(D.yX,new C.cGO(m),new C.cGP()),j=m.c,i=D.CH.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m3:B.b9
v=new C.cGQ(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e9B,28)],x.V)
u=x.p
t=A.a([A.bU(0,A.b3(l,l,l,new C.bbT(j.x,h,l),B.ax),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aS(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bn(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aje,8,0.85,2.2),v.$4(D.bxs,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aje,8,0.85,2.4))
else if(r==="corners")t.push(A.bU(0,new A.D(D.bxo,A.b3(l,l,l,new C.bbK(h,l),B.ax),l),0,0,0))
r=A.X(D.axH[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.av1,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bU(0,new A.D(D.bxT,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGG(l),D.eVO),l,l,l,46,0,l))
return A.p(l,A.bx(D.ab1,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.ab1,i,new A.a9(B.az,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbT.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eE()
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
C.bbK.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bT
for(w=e.a,v=e.b,v=[D.eMv,new A.cz([w,0,-1,1]),new A.cz([0,v,1,-1]),new A.cz([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
C.ul.prototype={}
C.YS.prototype={
S(){return new C.bbR()}}
C.bbR.prototype={
go6(){var w=this.d
return w===$?this.d=this.a.c:w},
gyn(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b4,B.aN),$.aw())}return v},
gaAX(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b4,B.aN),$.aw())}return v},
gaqE(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b4,B.aN),$.aw())}return v},
q(){var w=this,v=w.gyn(0),u=v.T$=$.aw()
v.P$=0
v=w.gaAX()
v.T$=u
v.P$=0
v=w.gaqE()
v.T$=u
v.P$=0
w.a2()},
arh(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j9(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d_f(this,f,u),e===u,s,s,s,s))}return A.bS(B.bA,r,B.bq,6,8)},
ax_(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.n(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kJ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go6(),a0=f.gyn(0),a1=a0.a.a,a2=f.gaAX(),a3=a2.a.a,a4=f.gaqE(),a5=d.bch(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.eQ(B.A,new A.a7(270,370,new C.YA(a5,d,f.a.e,e),e),B.f,B.dw),e),e,e,e)
a0=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.ax_("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d_E(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.ax_("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d_F(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yX[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b_
q=r.a===q
o=new A.az(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a9(B.az,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aB(e,A.x(A.a([p,B.cV,new A.y(t.b,e,new A.H(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d_G(f,t),e,e,e,e,e,e,!1,B.a5))}v=A.bS(B.bA,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aS(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.eD:B.K,2,B.q,-1)
q.push(A.aB(e,A.p(e,A.X(D.axH[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bn(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d_H(f,n),e,e,e,e,e,e,!1,B.a5))}q=A.bS(B.bA,q,B.bq,8,8)
a4=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.ax_("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d_I(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mR,e,e,e)
m=A.a([],w)
for(l=D.CH.gdM(D.CH),l=l.gae(l);l.C();){k=l.gR(l)
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
m.push(A.aB(e,A.x(A.a([j,B.bC,new A.y(i,e,new A.H(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d_J(f,k),e,e,e,e,e,e,!1,B.a5))}m=A.bS(B.bA,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mR,e,e,e)
k=f.go6()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fz6,B.ac,d,B.aR,a0,B.R,a2,B.aB,D.fFb,B.O,v,B.aB,D.fzf,B.O,q,B.aB,a4,B.aB,p,B.O,m,B.aB,l,A.l1(e,9,""+B.k.V(f.go6().f),36,18,new C.d_K(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mR,e,e,e),B.am,f.arh(D.a3U,f.go6().r,new C.d_L(f),D.dp8),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mR,e,e,e),B.am,f.arh(D.a3h,f.go6().w,new C.d_M(f),D.dpd),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mR,e,e,e),B.am,f.arh(D.a3c,f.go6().x,new C.d_O(f),D.dqL),B.am,A.iI(e,B.b6,e,B.af,e,new C.d_P(f),e,e,e,D.ftx,f.go6().z),B.by,A.bG(D.fxV,new C.d_Q(f,a6),A.bo(B.b6,e,e,e,e,B.oo,e,e,new A.b7(A.n(16),B.Y),e,e,e))],w),e,R.aiM,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGG.prototype={
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
u.sar(D.bYC.aw(0,new A.a8(0,0,0+w,0+v)))
d.aR(t,u)},
au(d){return!1}}
C.bh6.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.sar(D.bXD.aw(0,new A.a8(0,0,a3,a4)))
a5.b_(new A.a8(0,0,a3,a4),w)
v=B.k.dj(a2/112)
u=new A.eE()
u.dt(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cXu[u.av(9)]
j=u.av(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a8(n,j,n+m,j+l)
h=A.bw(i,B.he)
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
p.sar(D.bX_.aw(0,new A.a8(0,r,a3,q)))
d=p.H()
w.drawRect(A.c_(new A.a8(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jw
d=p.H()
w.drawRect(A.c_(new A.a8(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b9v.j(0.72).gp(0)
a5.b_(new A.a8(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sar(new A.bV(B.A,0.5,B.x,a0,0,A.a([D.bgw.j(0.22),B.K],t),a0,a0).aw(0,A.bW(new A.v(w,a2),a1)))
a5.af(new A.v(w,a2),a1,a4)},
au(d){return!1}}
C.ba4.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kS(new A.o(A.aq(D.kr,D.bl0,w/4),o,new A.bO(B.Y,new A.az(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.Kw,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aHw,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aS(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jZ.j(0.6),o,o,new A.bn(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qh,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aZm,u,D.bYA,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGG(o),D.eVJ),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aUj(p.y,r,G.iF,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iF.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fiY,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iF.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iF.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fa3,!0,B.a4,B.zM,B.an,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fiQ,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iF.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.F_.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.F_.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.F_.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iF.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XR(A.d0(A.a([A.d0(o,o,o,o,o,o,o,o,o,D.fda,B.a.ap(k,0,1)),A.d0(o,o,o,o,o,o,o,o,o,o,B.a.b6(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iF.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.x(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.i6,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iF.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.Kw,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.bwV,A.x(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a9(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Kw,v,D.bZ6,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.apu.prototype={
S(){return new C.aDc(A.a([],x._))},
bs(){return this.r.$0()},
pU(){return this.w.$0()},
ge2(){return this.c}}
C.aDc.prototype={
Z(){var w,v
this.a1()
this.vU()
w=this.a
v=w.c
if(v.length!==0)C.a77(v,w.e,w.d.w)},
vJ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h5k(r,t.e,!1,s.w,new C.dVv(u),null,s),$async$vJ)
case 2:w=3
return A.b(u.vU(),$async$vJ)
case 3:return A.h(null,v)}})
return A.i($async$vJ,v)},
a_z(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h5k(r,t.e,!0,s.w,new C.dVu(u),null,s),$async$a_z)
case 2:w=3
return A.b(u.vU(),$async$a_z)
case 3:return A.h(null,v)}})
return A.i($async$a_z,v)},
vU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AM(q.a.c),$async$vU)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.dVx(q,p))
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
return A.b(C.Gx(q.a.c).d8(0,B.pU),$async$vU)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dVy(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dVz(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vU,v)},
Ox(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ox=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.eZo)
w=3
return A.b(C.Gx(t.a.c),$async$Ox)
case 3:r=e
w=4
return A.b(C.fLE(t.a.c,r),$async$Ox)
case 4:q=e
w=5
return A.b(C.Gx(t.a.c),$async$Ox)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dVt(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dA:B.cU,null,B.r,null,s,null,B.ms,null,null,null,null,null,null,null,null,null,null))
t.a.pU()
case 1:return A.h(u,v)}})
return A.i($async$Ox,v)},
HV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.id3(l),$async$HV)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hHx(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b__(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HV)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hoz(r)
o=Date.now()
n=t.a.c
m=new C.kG(l,r.toUpperCase(),p,!0,B.U,D.Cu,new A.T(o,0,!1),0,n,D.tX)
w=5
return A.b(C.a2C(n,m),$async$HV)
case 5:w=6
return A.b(t.vU(),$async$HV)
case 6:t.a.bs()
t.a.pU()
if(t.c==null){w=1
break}t.Et(m)
case 1:return A.h(u,v)}})
return A.i($async$HV,v)},
Et(d){return this.cf_(d)},
cf_(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Et=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AM(u.a.c),$async$Et)
case 2:n=l.rh(k.dJ(f,new C.dVw(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.apo(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Et)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2C(u.a.c,o),$async$Et)
case 6:case 5:w=7
return A.b(u.vU(),$async$Et)
case 7:u.a.pU()
return A.h(null,v)}})
return A.i($async$Et,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tS(p)
if(r.e)return A.av(A.mM(q,p?B.bs:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e0:B.c
v=A.n(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bLr,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gce3(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fz(A.p(q,A.x(A.a([u,B.aR,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dZ,A.bG(D.fGs,r.gaQx(),A.bo(B.bS,q,q,q,q,q,Al.Zu,q,new A.b7(A.n(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bwR,q,q,1/0),15,B.af,1.05,D.a9I,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yF,B.aV,q,q,q,q),q,q,q,new C.dVB(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yx,B.aV,q,q,q,q),q,q,q,r.gafw(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.aok,D.fmo,r.gaQx(),A.bo(B.bS,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fz(r.cBJ(J.q(r.d,s),o),14,B.af,1,D.a9I,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cBJ(d,e){var w=null,v=e.a,u=v?B.e0:B.c,t=A.n(14),s=A.I((v?B.e2:B.bN).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.en,10)],x.V),q=A.n(14),p=A.p(w,D.bKv,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaov(),m=d.d?"":" \xb7 Public",l=d.y===D.ky?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.be,l,A.X(B.Ne,v?B.bs:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dVA(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.apo.prototype={
S(){return new C.aD9(A.a([],x._),A.aX(x.N),A.b7H())},
bs(){return this.r.$0()},
ge2(){return this.c}}
C.aD9.prototype={
Z(){var w,v,u=this
u.a1()
u.d=u.a.w
u.acp()
w=u.a
v=w.c
if(v.length!==0)C.a77(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a2w(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xP("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dUW(r),s,null,!0,!0,x.y),$async$a2w)
case 3:if(e!==!0||t.c==null){w=1
break}t.Js()
t.m(new C.dUX(t,r))
w=4
return A.b(t.vL(),$async$a2w)
case 4:t.a.bs()
t.xP(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2w,v)},
crr(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dUR(w,f,d,e))},
aSO(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jR(q,q,1,1)
this.w.sp(0,u)},
b9X(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eI(new Float64Array(16))
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
acp(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AM(u.a.c),$async$acp)
case 2:t=s.rh(r.dJ(e,new C.dUp(u)))
if(t!=null&&u.c!=null)u.m(new C.dUq(u,t))
return A.h(null,v)}})
return A.i($async$acp,v)},
xP(d){var w=null,v=this.c
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
return A.b(C.h5k(o,t,!1,r,new C.dUE(u),q.a,s),$async$vJ)
case 2:n=A
m=J
w=3
return A.b(C.Gx(u.a.c),$async$vJ)
case 3:p=n.rh(m.dJ(e,new C.dUF(u)))
if(p!=null&&u.c!=null)u.m(new C.dUG(u,p))
return A.h(null,v)}})
return A.i($async$vJ,v)},
Js(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vL(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2C(t,s),$async$vL)
case 2:return A.h(null,v)}})
return A.i($async$vL,v)},
a14(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a14=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u3(q,t.a.c)){t.xP("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iec(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a14)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Js()
t.m(new C.dUQ(t,r))
w=4
return A.b(t.vL(),$async$a14)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a14,v)},
a_N(){return this.cf1()},
cf1(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.u3(q,t.a.c)){t.xP("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dUO(r,new C.tS(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_N)
case 3:if(e!==!0||t.c==null){w=1
break}t.Js()
t.m(new C.dUP(r,t))
w=4
return A.b(t.vL(),$async$a_N)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_N,v)},
VM(d){return this.bzO(d)},
bzO(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u3(r,t.a.c)){t.xP("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dUd(t,d),r,null,!0,!0,x.P),$async$VM)
case 3:s=f
if(s==null){w=1
break}t.Js()
t.m(new C.dUe(t,s))
w=4
return A.b(t.vL(),$async$VM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VM,v)},
a2S(d){return this.cDU(d)},
cDU(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dUZ(u,d,new C.tS(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2S)
case 2:return A.h(null,v)}})
return A.i($async$a2S,v)},
cbk(d){var w=this,v=w.d
v===$&&A.c()
if(C.u3(v,w.a.c))w.Oc(d)
else w.a2S(d)},
ai_(d,e){return this.cvr(d,e)},
cvr(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ai_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dUT(new C.tS(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ai_)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ai_,v)},
I_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$I_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ky?3:5
break
case 3:w=6
return A.b(C.fTU(t.a.c),$async$I_)
case 6:s=e
o=t.a
r=C.hd5(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ai_(!s,!r),$async$I_)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bBp(o,t.a.c)){t.xP("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l7(o,"Cancel","Remove",q.y===D.ky?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$I_)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOM(t.a.c,t.d.a),$async$I_)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iR(o,null)
case 1:return A.h(u,v)}})
return A.i($async$I_,v)},
a9V(d){return this.bL0(d)},
bL0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u3(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b4(s,new C.dUf(p))){o=A.S(s)
p.a=A.rh(new A.cP(new A.a_(s,new C.dUg(d),o.k("a_<1>")),new C.dUh(),o.k("cP<1,m>")))}q=p.a
if(q==null)q=d.d
t.Js()
t.m(new C.dUi(t,s,d,q))
w=3
return A.b(t.vL(),$async$a9V)
case 3:t.xP(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9V,v)},
Oc(d){return this.bNa(d)},
bNa(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u3(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2S(d),$async$Oc)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dUm(t,d),r,null,!0,!0,x.P),$async$Oc)
case 6:s=f
if(s==null){w=1
break}t.Js()
t.m(new C.dUn(t,s))
w=7
return A.b(t.vL(),$async$Oc)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
cC7(){var w=this,v=w.d
v===$&&A.c()
if(!C.u3(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dUY(w))
w.vL()},
YC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bBp(n,t.a.c)){t.xP("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bp(new A.M(q,t.gc9P(),A.S(q).k("M<1,m>")).c0(0,new C.dUz()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dUA(t,new C.tS(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$YC)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Js()
t.m(new C.dUB(t,p))
w=4
return A.b(t.vL(),$async$YC)
case 4:t.xP("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$YC,v)},
c9Q(d){return B.a.i(d.toLowerCase())},
cdP(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u3(v,w)
t=r.d
s=C.i3q(t)
C.id7(q,t.b,u,C.i3p(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tS(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dV5(),A.S(l).k("a_<1>")).gM(0)
l=n?B.c_:B.iE
v=A.X(B.a_G,n?B.bs:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bi,A.aL(!1,o,!0,new A.D(B.hC,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dV6(p,d),o,o,o,o,o,o,o),o),new A.D(B.nk,p.bYe(m),o)],u)
if(p.d.y===D.ky){t=B.rB.j(0.15)
s=A.n(12)
r=A.I(B.rB.j(0.45),B.q,1)
q=C.Gv(p.d,p.a.c)
v.push(new A.D(B.xS,A.p(o,A.B(A.a([D.bPL,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.i7,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.u3(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JS("Undo",B.rn,p.gcC6(),m,o,o))
u.push(new C.JS("Family Book",D.bFb,p.gcdO(),m,B.tr,o))
if(C.u3(p.d,p.a.c))u.push(new C.JS("Display settings",B.C6,p.gcf0(),m,B.b0,o))
u.push(new C.JS("Sync",B.yx,p.gafw(),m,o,o))
t=p.d
if(t.y===D.ky||C.bBp(t,p.a.c)){t=p.d.y===D.ky?"Remove shared tree":"Delete tree"
u.push(new C.JS(t,B.e9,p.gbLa(),m,B.h3,o))}if(C.u3(p.d,p.a.c))u.push(new C.JS("Add member",B.vZ,new C.dV7(p),m,B.bS,o))
v.push(new A.D(R.aip,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaov()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dV8(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_K:Y.Nf,o,o,o,o,o)
v.push(A.av(A.hn(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dV9(p),o),o,o,o))}return A.c6(o,l,A.bm(!0,A.x(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bYe(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fy.j(0.35),B.dq,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.yq,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bSR,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafw(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f8o,m,m,m)
r=r.gaov()
p=n.d.gaov()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bC,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.u3(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bPX,m,m,m,n.gcoN(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jt:B.mB
r=r?"Private":"Public"
r=A.E(n.auT(q,"Privacy",r,n.a.d.w?n.gcB1():m),1)
q=A.E(n.auT(B.yy,"Tree code",n.d.c,new C.dUo(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.auT(D.bGV,"Collaborators",p,n.gc1O()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ky){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aF(!1,B.a1,!0,A.n(999),A.aL(!1,A.n(999),!0,new A.D(B.fO,A.B(A.a([A.X(B.p0,B.c,m,m,m,14),B.eg,A.d("View only",m,m,m,m,m,m,B.aQC,m,m,m)],o),B.m,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.bx(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.FB,A.x(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bX4,B.n),m,m,m,m,m,m,m,1/0)},
auT(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.n(14),A.aL(!1,A.n(14),!0,new A.D(L.ajx,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uS,A.d(f,w,1,B.a2,w,w,w,O.zQ,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.bel.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.beo(s,t),new A.as(w,v))],x.p)
r=r.gdM(r)
B.d.v(u,r.dz(r,new C.d8n(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d8o(this),A.S(r).k("M<1,t>")))
return new A.D(B.tT,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.K3.prototype={}
C.FM.prototype={}
C.ben.prototype={
gbiq(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIM.prototype={}
C.beo.prototype={
bMP(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
bMN(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d8I())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b4(a0,new C.d8J(f))
t=new A.M(a0,new C.d8K(f),A.S(a0).k("M<1,K>")).c0(0,new C.d8L()).cJ(0,1/0,B.vc)
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
if(r!=null&&r.length!==0)this.bMN(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bMP(d,w,q.a,q.b)}},
au(d){return d.b!==this.b}}
C.bi3.prototype={
gc7E(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dlT
switch(w.c.a){case 0:return D.cP4
case 1:return D.d_l
case 2:return D.dg5}},
gc7H(){var w=this.c,v=C.hnU(w.w),u=C.hnU(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc7E(),p=t.c,o=I.bCi(p.f),n=t.gc7H(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aw:B.c,j=A.I(r?B.aw:B.c,B.q,2)
if(o!=null)w=A.th(B.A,s,B.cg,B.bX,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.i_(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.az,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.FS,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.I(r?B.aw:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fis,s,s,s),B.f,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.byJ,s,s,s),s,s,s,-6,-4,s))}k=r?B.cp:B.c
j=A.n(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cp,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a7(84,112,A.x(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,D.b0f,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.byU,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a5)}}
C.bds.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bcf
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
au(d){return d.b!==this.b}}
C.bvP.prototype={
B(d){var w=this,v=null,u=new C.fdy(w),t=w.c,s=t?B.cp:B.c,r=A.n(12),q=u.$3(B.hE,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bD:B.fe,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yv,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bD:B.fe,v,v,v,1,v,v,v,v,v,22),u.$3(B.alW,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.N,0,B.p),B.f,s,4,v,B.ds,v,v,v,B.ah)}}
C.blp.prototype={
B(d){var w=this,v=null,u=B.bS.j(0.15),t=A.I(B.bS,B.q,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?K.a_K:Y.Nf,B.bS,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.feN,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a5)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fcK,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.ePp(w),A.S(s).k("M<1,t>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZV.prototype={
S(){return new C.aBB()},
bs(){return this.Q.$0()},
ge2(){return this.w}}
C.aBB.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.ar(new A.bb(t,B.b4,B.aN),s)
t=u?q:v.c
r.y=t==null?D.y5:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i4Y(w.r,w.f)
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
PA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hd5(p.y,p.w)
w=3
return A.b(A.lj(t.a.w,B.Ig),$async$PA)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b__(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PA)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hHy(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(An.GG(78,800),$async$PA)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.doB(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PA,v)},
c7G(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i2(B.o.u(1000*Date.now()),w,D.y5,null,null,null,"","","","","",1,!1,0)
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
s=v.aDQ(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
a9v(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.doA(r),s,null,!0,!0,x.y),$async$a9v)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9v,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tS(j),h=l.a.e,g=A.S(h).k("a_<1>"),f=A.C(new A.a_(h,new C.doK(l),g),g.k("J.E"))
h=j?B.e0:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bxd,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hx(A.aL(!1,k,!0,new A.D(B.lW,A.X(B.e9,B.oP,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbHP(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jE:B.j_
t=I.bCi(l.as)
if(l.as==null)s=A.X(B.oT,j?B.bs:B.bn,k,k,k,40)
else s=k
s=A.av(A.aB(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h7(u,t,s,k,42),A.ao(0,A.h7(B.bS,k,D.bJz,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc7D(),k,k,k,k,k,k,!1,B.a5),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBD(t,"Full name",B.mx,1,1,i,B.m9)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.R,new C.bi1(i,u,new C.doL(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bqN],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.doM(),A.S(o).k("M<1,eG<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bqP],q)
B.d.v(q,new A.M(f,new C.doO(),A.S(f).k("M<1,eG<m?>>")))
o=A.x(A.a([t,B.am,new C.ad6(i,r,"Who is their parent?",p,new C.doP(l),k,o),B.aB,n,B.am,new C.ad6(i,m,"Who is their spouse / partner?",q,new C.doQ(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBD(q,"Birth date",D.akZ,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBD(m,"Birth place",B.a_Z,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBD(n,"Date of death (if deceased)",D.anc,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBD(p,"Occupation",B.a1_,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.ad7(i,"Identity",u,k),B.ac,new C.ad7(i,"Family links",o,k),B.ac,new C.ad7(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBD(r,"Notes",B.l0,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBC(i,"Child order",l.cff(l.at),new C.doR(l),new C.doS(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h2D(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.doT(l):k
B.d.v(r,A.a([B.R,new C.aBC(i,"Visible in tree",u,w,new C.doU(l),k)],v))}r.push(B.R)
w=j?B.jE:B.j_
u=A.n(14)
t=A.I(j?B.e2:B.bN,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bS,k,B.af,k,new C.doV(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ai1,k,k,k))
r.push(B.by)
w=j?B.aQ:B.aw
j=j?B.e2:B.bN
r.push(A.B(A.a([A.E(A.dW(B.nG,new C.doN(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b7(A.n(14),B.Y),new A.az(j,1,B.q,-1),k,k,k,k)),1),B.be,A.E(A.bG(D.eRE,l.gc7F(),A.bo(B.aV,k,k,0,B.c,k,B.cm,k,new A.b7(A.n(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.em(B.hc,k,B.af,h,new A.a7(420,k,A.cc(A.x(r,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),k),D.aiS,k,B.aig,new A.b7(g,B.Y),k,k)},
cff(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ad7.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jE:B.j_,s=A.n(16)
return A.x(A.a([new A.D(D.ajh,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e2:B.bN,B.q,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bi2.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e0:B.c,r=A.n(12),q=A.I((t?B.e2:B.bN).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.U,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eB,u,B.vE,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cx,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bS,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ad6.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e0:B.c,s=A.n(12),r=A.I((u?B.e2:B.bN).j(0.85),B.q,1),q=A.X(B.rh,u?B.bs:B.bn,v,v,v,v),p=A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e0:B.c
return A.p(v,new A.DC(A.Sv(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cx,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kX,v,v,v)}}
C.bi1.prototype={
B(d){var w=new C.doW(this)
return A.B(A.a([w.$3(D.a_i,"Male",B.NZ),B.ab,w.$3(D.ak9,"Female",B.NM),B.ab,w.$3(D.y5,"Other",B.np)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBC.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jE:B.j_,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHO(u,B.yv,w.f,v),B.bp,new C.aHO(u,B.hE,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ek,v,v,v)}}
C.aHO.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bS.j(0.12)
else w=s.c.a?B.e0:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bS
else t=(s.c.a?B.bs:B.bn).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.ad8.prototype={
bQL(d){switch(d.a){case 0:return B.bS
case 1:return B.bE
case 2:return B.cX}},
bQM(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aXa(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ab(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
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
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cv,B.xP,p,p,1/0)},
ae1(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jE:B.j_,s=A.n(16),r=A.I(v?B.e2:B.bN,B.q,1)
return A.x(A.a([new A.D(D.ajh,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hsG(r,q),o=q.c,n=t.bQL(o),m=I.bCi(q.f),l=t.e.a,k=l?B.e0:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ky?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h7(u,m,m==null?A.X(B.oT,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.el,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bQM(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mu,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ab("Full name",i,B.mx)],u)
if(p>0)i.push(t.Ab("Child order","#"+p,B.NS))
r=A.a([h,B.au,r,B.aR,l,B.R,v,B.by,t.ae1("Identity",i),B.ac,t.ae1("Life details",A.a([t.Ab("Birth date",q.w,D.akZ),t.Ab("Birth place",q.x,B.a_Z),t.Ab("Date of death",q.y,D.anc),t.Ab("Occupation",q.z,B.a1_)],u)),B.ac,t.ae1("Family links",A.a([t.Ab("1. Parent",t.aXa(q.d),B.G5),t.Ab("2. Spouse",t.aXa(q.e),B.NL)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ae1("Notes",A.a([t.Ab("Notes",q,B.l0)],u))],u))
r.push(B.by)
r.push(A.bG(B.JD,new C.dp5(d),A.bo(B.aV,s,s,s,s,s,B.cm,s,new A.b7(A.n(14),B.Y),s,s,s)))
return A.eL(s,k,new A.cS(B.lK,A.cc(A.x(r,B.ai,s,B.e,B.N,0,B.p),B.r,s,B.y,s,B.xV,s,s,B.ag),s),s,s,s,B.FE,B.d1,s,new A.b7(j,B.Y),s)}}
C.JS.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xY,A.hx(A.aF(!1,B.a1,!0,A.n(8),A.aL(!1,A.n(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.apr.prototype={
eS(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.S(w).k("M<1,a6<m,@>>")
w=A.C(new A.M(w,new C.c9O(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jb(w,new C.c9P(),t,x.U))
return s}}
C.aps.prototype={
S(){return new C.aDb(A.a([],x.bF))},
gde(){return this.c}}
C.aDb.prototype={
Z(){this.a1()
this.Jz()},
Jz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c9S(t.a.c),$async$Jz)
case 3:r=e
w=4
return A.b(C.AM(t.a.c),$async$Jz)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qX(q,new C.dVi(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dVj(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jz,v)},
yo(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Kj(d,e){return this.cEv(d,e)},
cEv(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Kj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dVn(q,e))
t=3
w=6
return A.b(d.$0(),$async$Kj)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dVo(q))
$.eU.mt()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kj,v)},
Xq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pb(r,s.c,s.e),$async$Xq)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kj(new C.dVf(t),"Preparing download\u2026"),$async$Xq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xq,v)},
Xu(d){return this.bOJ(d)},
bOJ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pb(r,s.c,s.e),$async$Xu)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Kj(new C.dVg(t,d),"Preparing file\u2026"),$async$Xu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xu,v)},
afT(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xf.c7().M5(B.QU,B.tY,!0),$async$afT)
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
case 6:u=A.GF()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afT,v)},
Y5(d){return this.bZ8(d)},
bZ8(d){var w=0,v=A.j(x.H),u=this
var $async$Y5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Kj(new C.dVh(u,d),"Restoring family trees\u2026"),$async$Y5)
case 2:return A.h(null,v)}})
return A.i($async$Y5,v)},
Y4(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afT(),$async$Y4)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Y5(s),$async$Y4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y4,v)},
a1V(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pb(r,s.c,s.e),$async$a1V)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kj(new C.dVm(t),"Creating QR code\u2026"),$async$a1V)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1V,v)},
a1w(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CW()){t.yo("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).cm(A.ea(new C.dVk(),!0,null,x.N)),$async$a1w)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Y5(r),$async$a1w)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1w,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AJ:B.iE,m=o?D.agy:B.aQ,l=o?B.aJ:B.bN,k=o?B.aQ:B.aw,j=new C.d8M(n,m,l,k,o?B.bK:B.bn)
l=A.aH(p,p,p,p,A.X(B.eF,k,p,p,p,20),p,p,p,new C.dVq(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d8k(!0,B.jv,B.aO,B.aO,q.r?p:q.gcvf(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcrm()
t.push(A.E(C.d8k(!s,B.j5,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d8k(!1,B.hF,B.aV,B.bS,q.r?p:q.gbOC(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d8k(!1,M.yB,B.aF,B.aM,q.r?p:q.gbZ5(),j,s,"Upload backup file"),1))
l=A.a([new C.bem(v,l,p),B.kH,new C.aco(j,"QR restore",p),B.R,t,B.d8,new C.aco(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kH,new C.aco(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dVr(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.Zq,p,p,B.ag,!1)],u)
if(q.r){v=A.n(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([K.aP2,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Bo,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d8M.prototype={}
C.bem.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.ke,28)],x.V)
t=A.ao(p,A.X(B.ug,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bSo,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.op,A.E(A.x(A.a([D.fnn,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c_h,B.n),p,p,p,p,p,p,p,p)}}
C.aco.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bek.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aO.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aO.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eH(A.de(new A.D(E.Z3,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rd,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cx,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.bep.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eH(new A.D(B.eR,A.B(A.a([A.p(v,D.bRB,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.rd,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hF,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.a_f.prototype={
S(){return new C.aDa()},
gde(){return this.c}}
C.aDa.prototype={
Z(){this.a1()
this.a91()},
a91(){var w=0,v=A.j(x.H),u=this,t
var $async$a91=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b1D(u.a.c,B.D6),$async$a91)
case 2:t=e
if(u.c!=null)u.m(new C.dVa(u,t))
return A.h(null,v)}})
return A.i($async$a91,v)},
ahg(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dVb(q))
t=4
p=A.heL(q.a.d,B.D6)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arF(n.e,m,l,B.D6,p,n.f),$async$ahg)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dVc(q))
q.c.K(x.q).f.U(D.f_z)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.eh(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dVd(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahg,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jj:B.pM,n=p?B.ih:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fDc,q,q,q,1,q,!0)
w=A.n(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pT(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.by,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.br,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcr4()
if(u)u=B.J7
else u=A.X(r.e===!0?B.hq:B.akY,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.et(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fS,q,q,q,new A.az(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i6,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zX,new C.dVe(d),A.bo(B.aV,q,q,q,q,B.fS,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_g.prototype={
S(){return new C.bjw(A.zj(B.xE,B.nN,B.un))}}
C.bjw.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c6(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fvf,w,w,w,1,w,!0),B.w,A.zi(this.d,B.bX,new C.dVs(this,d)),w,!1,!1,w,w)}}
C.aYw.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Qn,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lC.prototype={}
C.a6b.prototype={
S(){return new C.bjc(null,null)}}
C.bjc.prototype={
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
this.bv7()},
B(d){var w,v,u=this,t=B.d.dN(D.a3K,new C.dGD(u),new C.dGE())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cvh(A.c7(new A.hb(A.a([w,v],x.dS)),new C.dGF(u,t),null),!0)}}
C.bjb.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0z(d,e)
break
case"house":p.m6(d,e,D.d45)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdB()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mb(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AU(d,e,12)
p.xZ(d,e,B.lh,5,14)
break
case"grocery":p.cfZ(d,e)
break
case"calculator":p.cfG(d,e)
break
case"lumber":p.cg6(d,e)
break
case"kitchen":p.cg1(d,e)
break
case"landscape":p.m6(d,e,D.d4D)
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
p.AU(d,e,8)
p.xZ(d,e,B.j2,4,18)
break
case"plumbing":p.cgf(d,e)
break
case"electrical":p.m6(d,e,D.dfm)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.b_(new A.a8(0,0,0+e.a,0+e.b),u)
p.mb(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mb(d,e,B.lk.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AU(d,e,10)
break
case"store":p.cgp(d,e)
break
case"paint_remodel":p.cga(d,e)
break
case"roofing":p.cgh(d,e)
break
case"warehouse":p.cgw(d,e)
break
case"vehicles":p.cgu(d,e)
break
case"farm":p.cfT(d,e)
break
case"restaurant":p.cgg(d,e)
break
case"tools":p.cgs(d,e)
break
case"wallet":p.cgv(d,e)
break
case"concrete":p.cfM(d,e)
break
case"blueprint":p.cfE(d,e)
break
default:p.b0z(d,e)}},
m6(d,e,f){var w,v=new A.a8(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.sar(new A.a9(B.az,B.aC,B.x,f,null,null).aw(0,v))
d.b_(v,w)},
mb(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gdB()/2-h
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
xZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdB()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AU(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b0z(d,e){var w,v=this
v.m6(d,e,D.ddQ)
w=v.c
v.mb(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mb(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bMJ(d,e,B.i3,w)
v.xZ(d,e,B.c.j(0.7),6,8)},
bMJ(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c_(new A.a8(16,q,t,q+3)),p)
p.delete()}},
cfZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.ckN)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.am(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d2o[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mb(d,e,B.c.j(0.35),w,16)
j.xZ(d,e,B.j2,5,12)},
cfG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m6(d,e,D.ckU)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdB()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fZ(g,g,g,g,g,B.a4,B.c6,g,B.dO,B.c3)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d6e[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saW(0,new A.eu(r,g,g,B.cP,g,g,g,g,g,g,new A.H(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a3(d,new A.v(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.am(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ckW[o]
l=B.kp.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saW(0,new A.eu(m,g,g,B.cP,g,g,g,g,g,g,new A.H(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a3(d,new A.v(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.am(o,3)*0.38)+Math.sin(n)*6))}h.mb(d,e,B.c.j(0.35),w*1.5,14)
h.mb(d,e,B.eD.j(0.55),-v*3.141592653589793*2,8)
h.mb(d,e,B.AK.j(0.4),r*2.8,22)
h.xZ(d,e,B.pC,8,10)
h.AU(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cg6(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,A_.awB)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bw(new A.a8(20,q,u,q+10),B.hI)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fK,B.oH,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.mb(d,e,B.fK.j(0.35),w,15)
m.AU(d,e,8)},
cg1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.d2T)
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
j.xZ(d,e,B.qR,4,14)},
cgf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m6(d,e,D.cSV)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xZ(d,e,B.oN,6,12)
l.mb(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cgp(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m6(d,e,D.cyp)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bw(new A.a8(q,14,q+u,22),B.ix)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fc,B.bM,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.mb(d,e,B.c.j(0.3),w,16)
n.AU(d,e,8)
n.xZ(d,e,B.vi,5,13)},
cga(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.cYJ)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bw(new A.a8(q,p,q+8,p+(18+r*22)),B.hf)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.iC,B.dl,B.bM,B.et][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.mb(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cgh(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.cWg)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xZ(d,e,B.cs,7,11)},
cgw(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.cB6)
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
cgu(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.djh)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bw(new A.a8(r,q,r+28,q+8),B.hI)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AU(d,e,6)},
cfT(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d1v)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lk.j(0.75).gp(0)
d.af(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hl.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mb(d,e,B.lk.j(0.35),w,14)},
cgg(d,e){var w,v,u,t,s,r,q,p,o=this
o.m6(d,e,D.d3V)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ce(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c_(r),p)
p.delete()}o.xZ(d,e,B.qR,5,16)
o.AU(d,e,7)},
cgs(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dgR)
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
cgv(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.djU)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bw(new A.a8(p,o,p+36,o+22),B.ix)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.j2,B.lk,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AU(d,e,9)
m.mb(d,e,B.c.j(0.4),w*2.2,12)},
cfM(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d8Y)
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
cfE(d,e){var w,v,u,t,s,r,q,p
this.m6(d,e,D.d4W)
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
u.r=B.dl.j(0.45).gp(0)
d.b_(new A.a8(0,p,0+v,p+6),u)
this.mb(d,e,B.lh.j(0.45),-t*3.141592653589793*2,11)},
au(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.asm.prototype={
a_b(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPJ(),$async$a_b)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8q(s),$async$a_b)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_b,v)},
afU(d){return this.ciM(d)},
ciM(d){var w=0,v=A.j(x.H),u=this,t
var $async$afU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.idh(d),$async$afU)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afU,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jE:B.j_
w=x.p
v=A.a([C.aQ6(!0,B.qJ,1/0,B.q1,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b1,t,t,new A.D(B.vy,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.axx,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b1,B.b5,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bLk,D.fjL,new C.chm(this,d),A.bo(B.aV,t,t,t,B.c,t,B.jH,t,t,t,t,B.ce)),1),B.ab,A.E(A.et(D.bTC,D.fyk,this.gc9N(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jH,t,t,D.aZN,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fL(1.7777777777777777,A.aF(!1,B.a1,!0,B.qJ,new A.an(B.W,t,B.b2,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aL7.prototype={
aU(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.aT5.prototype={}
C.aT4.prototype={}
C.aR2.prototype={}
C.YU.prototype={
S(){return new C.ayr()}}
C.ayr.prototype={
Z(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b4,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
K9(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.f03)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aT5(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e0:B.c,k=A.n(20),j=A.p(n,D.bTh,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.be,i,A.aH(n,n,n,n,A.X(B.cB,m?B.bs:B.bn,n,n,n,n),n,n,n,new C.d01(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cx,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hf0(new C.d02(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jE:B.j_
r=A.n(12)
q=A.n(12)
p=m?B.e2:B.bN
t=A.aM(n,B.U,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dj),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d03(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.Je,n,n,n,n)
u=m?B.aQ:B.aw
m=m?B.e2:B.bN
return A.eL(n,l,new A.cS(B.lK,A.cc(A.x(A.a([j,B.aR,i,B.au,w,B.O,v,B.aR,t,B.by,A.B(A.a([A.E(A.dW(B.dh,new C.d04(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b7(A.n(12),B.Y),new A.az(m,1,B.q,-1),n,n,n,n)),1),B.at,A.E(A.bG(D.fyz,o.ga2g(),A.bo(B.aV,n,n,n,B.c,n,B.cm,n,new A.b7(A.n(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.N,0,B.p),B.r,n,B.y,n,B.Bp,n,n,B.ag),n),n,n,n,X.Bq,B.d1,n,new A.b7(k,B.Y),n)}}
C.YT.prototype={
S(){return new C.ayq()}}
C.ayq.prototype={
Z(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
K9(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.eYJ)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aT4(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e0:B.c,n=A.n(20),m=A.p(q,D.bPQ,B.f,q,q,new A.o(B.bS.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.be,l,A.aH(q,q,q,q,A.X(B.cB,p?B.bs:B.bn,q,q,q,q),q,q,q,new C.d_Y(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.akK,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jE:B.j_
t=A.n(12)
s=A.n(12)
r=p?B.e2:B.bN
v=A.aM(q,B.U,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dj),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d_Z(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kI,q,q,q,q)
w=p?B.aQ:B.aw
p=p?B.e2:B.bN
return A.eL(q,o,new A.cS(B.lK,A.cc(A.x(A.a([m,B.aR,l,B.aB,v,B.by,A.B(A.a([A.E(A.dW(B.dh,new C.d0_(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b7(A.n(12),B.Y),new A.az(p,1,B.q,-1),q,q,q,q)),1),B.at,A.E(A.bG(D.fFs,this.ga2g(),A.bo(B.bS,q,q,q,B.c,q,B.cm,q,new A.b7(A.n(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.Bp,q,q,B.ag),q),q,q,q,X.Bq,B.d1,q,new A.b7(n,B.Y),q)}}
C.Yr.prototype={
S(){return new C.axa()}}
C.axa.prototype={
Z(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aP()
v.e=new A.ar(new A.bb("1",B.b4,B.aN),w)
v.f!==$&&A.aP()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aP()
v.r=new A.ar(B.as,w)},
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
gJu(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaj6(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb3t(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aOd(d){var w,v=B.k.D(this.gJu()+d,0.25,999999),u=B.k.jd(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saW(0,u)
this.m(new C.cyA())},
axA(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jE:B.j_,s=A.n(14),r=A.n(14)
u=u?B.e2:B.bN
return A.bs(w,new A.b4(4,s,B.dj),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.n(14),B.ab7),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c9O(d,e,f){return this.axA(d,e,f,null)},
K9(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaj6()<=0){s.c.K(x.q).f.U(D.f1W)
return}r=s.c
r.toString
v=s.gJu()
u=s.gaj6()
t=s.gb3t()
A.a5(r,!1).O(new C.aR2(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tS(n),l=n?B.e0:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bS.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bJh,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a9(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cx,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.be,h,A.aH(o,o,o,o,A.X(B.cB,n?B.bs:B.bn,o,o,o,o),o,o,o,new C.cyG(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.U,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axA(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NY),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.Je,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jE:B.j_
t=A.n(14)
s=A.I(n?B.e2:B.bN,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yv,n?B.aQ:B.aw,o,o,o,20),o,o,o,new C.cyH(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bV9,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cyI(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hE,n?B.aQ:B.aw,o,o,o,20),o,o,o,new C.cyJ(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axA(m,"Amount","0.00",B.hT),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cyK(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cZc,new C.cyL(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.O,s,B.ac,A.bS(B.bA,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c9O(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cyM(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kI,o,o,o,o)],w))}i.push(B.aR)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bS.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJu()===B.k.jd(p.gJu())?B.k.N(p.gJu()):p.gJu()
s=p.gb3t()
r=A.AO(p.gaj6())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bD4(p.gJu()*p.gaj6(),B.b0,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jq,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.e2:B.bN
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b7(j,B.Y),new A.az(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dW(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cyN(d),h),1),B.at,A.E(A.dn(D.aod,D.fBq,p.ga2g(),A.bo(B.aV,o,o,0,B.c,o,B.cm,o,new A.b7(A.n(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eL(o,l,new A.cS(W.abw,A.cc(A.x(i,B.ai,o,B.e,B.N,0,B.p),B.r,o,B.y,o,Ad.rb,o,o,B.ag),o),o,o,o,B.MG,B.d1,o,new A.b7(k,B.Y),o)}}
C.a10.prototype={
S(){return new C.bvG()}}
C.bvG.prototype={
Z(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,B.b4,B.aN),v)},
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
v=A.aM(s,B.U,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.n(12),B.dj),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fd_(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dW(B.dh,new C.fd0(d),s),1)
r=A.bo(B.bS,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eL(s,q,new A.D(B.Bp,A.x(A.a([o,B.aB,v,B.aR,A.B(A.a([u,B.at,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fd1(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.N,0,B.p),s),s,s,s,s,B.d1,s,new A.b7(p,B.Y),s)}}
C.abr.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Fz.prototype={
S(){return new C.bvE(null,null)}}
C.bvE.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,D.brm,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bxv()},
gbyZ(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bS,B.b0],x.O)
case 2:return A.a([B.bv,B.aV,B.b0],x.O)
case 3:return A.a([B.aO,B.cb,B.k_],x.O)
case 4:return A.a([B.hn,B.bS,B.fd],x.O)
case 0:return A.a([B.aV,B.bS,B.b0],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ey(A.c7(v,new C.fcY(this,new C.tS(w.ax.a===B.I)),null),null)}}
C.ax3.prototype={
S(){return new C.bvF(null,null)}}
C.bvF.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,B.nc,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bxw()},
B(d){var w=this.d
w===$&&A.c()
return A.c7(w,new C.fcZ(this),null)}}
C.bvD.prototype={
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
w=A.xd(u)
t=A.a([],x.f5)
w=new A.vF(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.k_('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Ht(w,r)
w.jB()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRG(d,q,r,o,0,0.2,4.2,0.92)
p.aRG(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRG(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hAJ(e.a.a,e,t,t+f*i,!0),r=A.bBs(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bT
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a9(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Hi,null).aw(0,r))
d.aR(s,w)},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aNi.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
C.aNj.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aU(){this.b3()
this.b0()
this.by()}}
C.tS.prototype={}
C.asl.prototype={
S(){return new C.aEH()},
ge2(){return this.c}}
C.aEH.prototype={
Z(){var w=this
w.a1()
w.d=w.a.d
w.agL()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Lg(w,v)
this.a2()},
agL(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bBz(t.c,t.d.a),$async$agL)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eMz(u,s))
return A.h(null,v)}})
return A.i($async$agL,v)},
Q_(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eMq(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Lg(t,s),$async$Q_)
case 2:if(u.c!=null)u.m(new C.eMr(u))
return A.h(null,v)}})
return A.i($async$Q_,v)},
Qv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eMx(t,new C.tS(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qv)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8q(q),$async$Qv)
case 6:case 5:t.m(new C.eMy(t,r))
w=7
return A.b(t.Q_(),$async$Qv)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qv,v)},
VG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.id2(r),$async$VG)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eMl(t,new C.r0(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Q_(),$async$VG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VG,v)},
ceQ(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hsC(t,new C.eMp(u),w,v)},
aaR(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.az(v,2.5,B.q,-1),B.Y,B.Y,new A.az(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aZz,w,w,B.n),w,22,w,w,w,w,w,22)},
a9U(d){return this.bKY(d)},
bKY(d){var w=0,v=A.j(x.H),u=this
var $async$a9U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eMo(u,d))
w=2
return A.b(u.Q_(),$async$a9U)
case 2:return A.h(null,v)}})
return A.i($async$a9U,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c_:B.iE,d=A.n(8),a0=A.X(Q.a_H,f?B.bs:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.FL,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eMA(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b2,B.r,A.a([A.bx(A.n(22),C.aQ6(!0,A.n(22),1/0,B.q1,g,d,1/0),B.aq),A.ao(10,A.dn(D.bNS,D.fDJ,h.gb1l(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bS.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.W,g,B.b2,B.r,A.a([C.aQ6(!0,A.n(16),1/0,B.Nq,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a9(B.b1,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.aaR(!0),g,g,8,g,8,g),A.ao(g,A.cw1(h.aaR(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cw1(h.aaR(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cw1(h.aaR(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bJR,D.fxj,h.gb1l(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bWP,B.n),g,g,g,g,B.lW,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.b92,B.nW,B.fX],u):A.a([B.b0,B.aV,B.bS],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.jK,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h8,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bD4(h.d.gwZ(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cx,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.I(B.fW.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aO.j(0.28),B.cJ,14)],t)
j=B.aO.j(0.22)
i=A.n(10)
u=A.p(g,A.bx(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bvZ,A.B(A.a([o,B.at,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eH(new A.D(Ai.Bk,A.x(A.a([A.p(g,D.anO,B.f,g,g,new A.o(j,g,A.I(B.aO.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fF,D.fms],a1),B.m,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gceP(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.az,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fL(1.7777777777777777,d,g),B.aR,w,B.O,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ak.a1m,D.fkm,h.gbzr(),A.bo(B.aV,g,g,g,B.c,g,B.i7,g,new A.b7(A.n(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e0:B.c
v=A.n(14)
u=A.I(f?B.e2:B.bN,B.q,1)
t=A.X(B.a01,f?B.bs:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rc,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eMB(h,new C.tS(f)),A.S(w).k("M<1,t>")))
if(h.e)d.push(new A.D(B.Bd,A.av(A.mM(g,f?B.bs:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bm(!0,A.x(A.a([new A.D(B.Bi,a0,g),A.E(A.cc(A.x(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xW,g,g,B.ag),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bD5(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e0:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b1k,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.hU:B.hb,B.b0,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcUB()
v=A.AO(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.F,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bS.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bD4(d.c*d.d,B.b0,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h9,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.E0(A.B(A.a([m,A.E(new A.D(B.ahV,A.B(A.a([l,B.be,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.bs:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eMm(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b0b,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.adt.prototype={
Eo(d){return this.bMl(d)},
bMl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Eo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pb(d,o,!1),$async$Eo)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bM(Ac.Bb,null,x.H),$async$Eo)
case 4:s=t.d
w=5
return A.b(C.fKF(!0,o,s),$async$Eo)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gu(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Eo)
case 6:p=f
w=7
return A.b(A.pa(o,!1),$async$Eo)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Eo,v)},
a_c(d){return this.cvg(d)},
cvg(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pb(d,s,!1),$async$a_c)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hE(d,new C.asf(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pa(s,!1),$async$a_c)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_c,v)},
Q0(d){return this.crh(d)},
crh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Q0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aH_,!0,"NgmyWorksheetProjectScan",x.N),$async$Q0)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bD5(s),$async$Q0)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.f13)
w=1
break}q=C.h4Z(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$Q0)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Q0,v)},
a_d(d){return this.cDp(d)},
cDp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bCD(),$async$a_d)
case 3:s=f
if(s==null){w=1
break}r=C.h4Z(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a_d)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_d,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tS(u),s=w.d.d.length,r=u?B.e0:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.ke,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vF,A.p(v,A.x(A.a([w.ctQ(d,t,s),new A.D(D.bvn,A.x(A.a([w.b4o(t,"QR restore"),B.R,A.B(A.a([w.b_i(t,!0,B.jv,B.aO,B.aO,new C.eMD(w,d),"Show to scan","QR code"),B.at,w.axB(t,B.j5,B.b6,B.bu,new C.eME(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d8,w.b4o(t,"Backup files"),B.R,A.B(A.a([w.axB(t,B.hF,B.aV,B.bS,new C.eMF(w,d),"Full copy","Backup file"),B.at,w.axB(t,M.yB,B.aF,B.aM,new C.eMG(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
ctQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f2,B.cT,B.fy],k):A.a([B.b0,B.aV,B.bS],k)
w=A.ao(l,A.X(B.ug,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kV,l,l,l,36),l,l,l)
u=A.n(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aQ6(!0,A.n(13),64,D.bF4,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aRA,l,l,l)
r=C.bD4(r.gwZ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bvM,A.x(A.a([v,A.B(A.a([s,B.ep,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fE,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eMC(d),l,l,l,A.nE(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aOS,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.az,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b4o(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_i(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.agy:B.aQ
if(e)w=B.aO.j(o?0.45:0.35)
else{w=o?B.e2:B.bN
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aO.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eH(new A.D(E.Z3,A.x(A.a([t,B.ac,u,B.bC,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cx,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
axB(d,e,f,g,h,i,j){return this.b_i(d,!1,e,f,g,h,i,j)}}
C.asf.prototype={
S(){return new C.bkT()}}
C.bkT.prototype={
Z(){this.a1()
this.aeE()},
aeE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aeE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bD6(p.c,p.d),$async$aeE)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eMg(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eMh(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AJ:B.iE,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eF,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eMi(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zK],u),B.m,h,B.e,B.j,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f2,B.cT,B.fy],s):A.a([B.b0,B.aV,B.bS],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.L,h,h)
p=C.bD4(p.gwZ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fE,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.az,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Zp,h,h,1/0)
t=g?D.bix:B.c
q=A.n(24)
p=A.I(w?B.aO.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a87,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ecD)
else{m=A.n(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pT(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bP,h,h,h))}}o.push(B.aR)
n=w?B.aO:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.I((w?B.aO:B.aV).j(0.35),B.q,1)
k=w?B.NI:B.Oe
k=A.X(k,w?B.aO:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.i7,h,h,h))
return A.c6(h,f,A.bm(!0,A.x(A.a([new A.D(A7.MS,e,h),A.E(A.cc(A.x(A.a([s,B.aR,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tV,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aj2,h,h,B.ag),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.ask.prototype={
S(){return new C.aEG(A.zj(B.M8,B.nN,B.un))}}
C.aEG.prototype={
q(){this.d.q()
this.a2()},
aMe(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iR(w,d)},
caF(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.iaW(t)
if(s!=null){this.aMe(s)
return}r=C.hjA(t)
if(r!=null)q=A.cT(r,p,0)
else q=!1
if(q){this.aMe(B.a.i(B.a.b6(r,B.a.cH(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.X(u.f?B.ri:A2.NO,t,t,t,t,t),t,t,t,new C.eMk(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AJ,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fxc,t,t,t,1,t,!0),q=A.zi(u.d,B.bX,u.gcaE()),p=A.n(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c6(r,B.w,new A.an(B.W,t,B.b2,B.r,A.a([q,p,A.ao(32,A.p(t,D.fw_,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jq,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJt.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.O4.prototype={
S(){return new C.aEI(D.aap,A.a([],x.D))},
bs(){return this.r.$0()},
ge2(){return this.c}}
C.aEI.prototype={
gcBh(){return J.bEf(this.e,0,new C.eN2())},
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
return A.b(C.CV(q.a.c).d8(0,B.k4),$async$vI)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eMZ(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eN_(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vI,v)},
HU(d){return this.bJ6(d)},
bJ5(){return this.HU(null)},
bJ6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.id4(l,d),$async$HU)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lm(l,r,q,D.d9a,new A.T(Date.now(),0,!1))
w=4
return A.b(C.Lg(t.a.c,p),$async$HU)
case 4:o=f
w=5
return A.b(t.vI(),$async$HU)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.eZc)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.f_Y)
else n.K(q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Es(m)
case 1:return A.h(u,v)}})
return A.i($async$HU,v)},
Es(d){return this.ceB(d)},
ceB(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Es=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.asl(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Es)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Lg(u.a.c,t),$async$Es)
case 5:case 4:w=6
return A.b(u.vI(),$async$Es)
case 6:return A.h(null,v)}})
return A.i($async$Es,v)},
vu(d){return this.bZa(d)},
bZa(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bCD(),$async$vu)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aH_,!0,"NgmyWorksheetProjectScan",x.N),$async$vu)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bD5(q),$async$vu)
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
break}p=C.h4Z(s)
w=15
return A.b(C.Lg(t.a.c,p),$async$vu)
case 15:o=f
w=16
return A.b(t.vI(),$async$vu)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.f02)
w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Es(p)
case 1:return A.h(u,v)}})
return A.i($async$vu,v)},
NP(d){return this.bHM(d)},
bHM(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eMK(d),s,null,!0,!0,x.y),$async$NP)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oL(t.a.c,A.a([],x.D)),$async$NP)
case 6:w=7
return A.b(t.vI(),$async$NP)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.eZh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NP,v)},
ceO(d){var w=this.c
w.toString
A.bR(B.K,null,new C.eMT(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b5_(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jE
else w=B.c
v=A.n(16)
u=A.I(p?B.e2:B.bN,B.q,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.x(A.a([s,B.ac,t,B.bC,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vE,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_I(d,e){return this.ceC(d,e)},
ceC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_I=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(B.K,null,new C.eMO(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_I)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hsC(r,new C.eMP(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NR(d,e),$async$a_I)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_I,v)},
b1X(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.av
else t=h.a?B.aQ:B.aw
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.Bo,A.B(A.a([s,B.be,t,A.X(B.eA,w?B.bs:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
clv(d,e,f,g,h,i){return this.b1X(!1,d,e,f,g,h,i)},
NR(d,e){return this.bHW(d,e)},
bHW(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l7(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NR)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bBm(t.a.c,d.a),$async$NR)
case 6:w=7
return A.b(t.vI(),$async$NR)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tS(o),m=o?B.c_:B.iE
if(q.f)o=D.b6V
else{w=q.bCe(n)
v=q.bYf(n)
u=q.gbzl()
if(o)t=B.jE
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ac,v,B.aR,new C.Fz(A.p(p,A.B(A.a([q.aB8(N.Np,"Projects",n,D.aap),q.aB8(B.vQ,"Cashier",n,D.aWJ),q.aB8(B.G5,"Family Tree",n,D.hcq)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.el,0.95,u,p),B.by],r)
w=q.d
if(w===D.aap){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.aw,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.ax3(q.gaQr(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.clx(n)],r))}else{o=q.a
if(w===D.aWJ)u.push(new C.aom(o.c,n,p))
else{w=q.r
u.push(new C.apu(o.c,o.d,o.e,o.f,new C.eN5(q),new C.eN6(q),new A.cx(w,x.b4)))}}o=A.cc(A.x(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.MM,p,p,B.ag)}return A.c6(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bCe(d){var w=null,v=A.n(8),u=d.a,t=A.X(Q.a_H,u?B.bs:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kW,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMH(this),w,w,w,w,w,w,w)},
gbzl(){switch(this.d.a){case 0:return D.a9H
case 1:return D.h2C
case 2:return D.a9I}},
bYf(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cC,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bPG,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bA7,A.aF(!1,B.a1,!0,w,A.aL(!1,A.n(12),!0,A.p(w,D.bNa,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eML(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.F,w,B.e,B.j,0,w,w),r=B.b0.j(0.55),q=A.n(12)
return new C.Fz(A.p(w,A.x(A.a([new A.D(E.Z9,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AO(this.gcBh()),w,w,w,w,w,w,D.fgM,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vD,B.jq,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.h2B,w)},
aB8(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.K,q=A.n(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bn
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.eg,new A.dq(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iI,u,u,u,B.FM,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eN1(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
clx(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e0:B.c
u=A.n(15)
t=A.p(p,D.bNg,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bZh,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fz(A.p(p,A.x(A.a([t,B.d8,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dZ,A.B(A.a([A.E(q.aS1(B.j5,"Scan QR",new C.eMW(q),d),1),B.at,A.E(q.aS1(M.yB,"Upload file",new C.eMX(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fHl,q.gaQr(),A.bo(B.aV,p,p,p,B.c,B.fS,p,p,new A.b7(A.n(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bwQ,1.05,D.a9H,p)}w=J.b6(q.e,new C.eMY(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fz(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a9H,p)},
aS1(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b0,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.ffc,B.L,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ahN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
clw(d,e){var w,v,u=null,t=e.a,s=t?B.e0:B.c,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.en,10)],x.V),o=A.n(14),n=t?B.bs:B.bn
n=A.bx(B.VE,new A.fL(1.7777777777777777,C.aQ6(!0,B.fx,1/0,N.Np,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AO(d.gwZ()),u,u,u,u,u,u,D.fdj,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.x(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Af.O0,t?B.bs:B.bn,u,u,u,u),u,u,u,new C.eMU(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eMV(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e7,u,u,u,1/0)}}
C.bxs.prototype={}
C.r0.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcUB(){var w,v,u,t,s=this.c
if(s===B.k.jd(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lm.prototype={
gwZ(){return B.d.cJ(this.d,0,new C.cy0())},
ag(){var w=this,v=w.d,u=A.S(v).k("M<1,a6<m,@>>")
v=A.C(new A.M(v,new C.cy_(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bc8(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lm(w.a,w.b,v,u,w.e)},
bbQ(d){return this.bc8(d,null)},
SJ(d){return this.bc8(null,d)}}
C.HE.prototype={
a5(){return"FamilyGender."+this.b}}
C.i2.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hoq(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i2(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akC.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kG.prototype={
gaov(){var w=this.f
return new A.a_(w,new C.bOe(),A.S(w).k("a_<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.S(v).k("M<1,a6<m,@>>")
v=A.C(new A.M(v,new C.bOd(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i3o(w.y)],x.N,x.z)},
yF(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kG(w.a,v,u,t,s,r,w.r,q,p,o)},
bc7(d,e){var w=null
return this.yF(w,w,d,e,w,w,w,w)},
cKg(d,e,f,g,h,i,j){return this.yF(d,e,f,g,h,i,j,null)},
aDV(d,e){var w=null
return this.yF(w,w,w,d,w,w,e,w)},
cIL(d){var w=null
return this.yF(w,w,w,w,w,w,d,w)},
cJ8(d){var w=null
return this.yF(w,w,w,w,w,w,w,d)},
aDH(d){var w=null
return this.yF(w,w,w,w,d,w,w,w)},
cJN(d,e,f){var w=null
return this.yF(w,d,w,e,w,w,f,w)},
cIy(d){var w=null
return this.yF(w,w,d,w,w,w,w,w)},
cJl(d,e){var w=null
return this.yF(d,w,w,w,w,e,w,w)}}
C.cy1.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cy2.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGL.prototype={}
C.b8x.prototype={
bD(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b8x()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b8w.prototype={
gwg(){return!0},
gG_(){return this.z.b<this.b.length},
aTG(d){switch(0){case 0:return d.a.c}},
aTn(d){switch(0){case 0:return d.a.d}},
bRF(d,e){switch(0){case 0:return new A.hO(d,e)}},
bR2(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h9(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iG(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Hn(b4)
switch(0){case 0:v=b5.b
u=new A.kD(0,v,0,1/0)
t=w===B.TG
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fQ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h9(b4,u,!0)
f=b1.aTG(g)
f.toString
e=b1.aTn(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGL(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGL(k,j,i))}d=s.length
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
a8=b1.aTG(g)
e=b1.aTn(g)
e.toString
a9=b1.bR2(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bRF(a6,a3+a9)
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
w.oX(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h4(d)
w.nk(0)},
Gv(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ie(){return this.z}}
C.bvH.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i2)","Q(kG)","~()","Q(ne)","a6<m,@>(kG)","G(kG,kG)","m(i2)","kG(a6<@,@>)","Q(lm)","Q(ul)","ne(a6<@,@>)","ul()","G(lm,lm)","i2(a6<@,@>)","a6<m,@>(i2)","Q(r0)","aA<~>(lm)","eG<m?>(i2)","G(i2,i2)","m?(i2)","a6<m,@>(ne)","ZV(Y)","m(m)","ad8(Y)","t(ol)","G(ne,ne)","i2(i2)","cL(bv<m,FM>)","cL(K3)","~(i2)","G?(i2)","i2()","ai<i2>()","Q(uk)","Q(K3)","D(i2)","~(HE)","Q(aeH)","t(HE,m,a0)","Zj(Y)","bv<m,ai<a6<m,@>>>(m,ai<ne>)","~(G)","+count,id,name(G,m,m)(kG)","kG(kG)","a_f(Y)","a_g(Y)","Q(lC)","lC()","m(kG)","a10(Y)","YU(Y)","YT(Y)","Zh(Y)","Zl(Y)","t(r0)","adt(Y)","~(m0)","aA<~>([m?])","K(K,lm)","t(lm)","K(K,r0)","a6<m,@>(r0)","r0(a6<@,@>)","YS(Y)","SE(Y)","cr(HD)","lm(a6<@,@>)","uk()","m(lm)","a6<m,@>(lm)","m(T)","G(i2)","kG(a6<m,@>)","Yr(Y)"])
C.fDj.prototype={
$1(d){return d.a+" "+d.b},
$S:121}
C.fDi.prototype={
blh(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qT(s,d,B.hG,"book",E.Fr),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.L4(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.blh(d)},
$S:303}
C.fDk.prototype={
$1(d){return d.b},
$S:121}
C.fMx.prototype={
$1(d){var w=null
return A.eL(w,B.K,new F.Pq(this.a,this.b,w),w,w,0,B.Z4,B.d1,w,w,w)},
$S:48}
C.frH.prototype={
$1(d){return d!=null},
$S:209}
C.frI.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:209}
C.frN.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:173}
C.fB2.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.rK,w,w,w,w,w,w,w,B.du,w,w,10.5,w,B.em,w,!0,w,w,w,w),w),u=f?B.em:B.vK
return new A.nP(D.bsq,A.a9H(A.a([new A.fT(130,w,v),new A.z0(1,B.FZ,A.fc(e,w,w,w,A.ha(w,g==null?D.eeW:g,w,w,w,w,w,w,w,B.du,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xA,B.lz))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1930}
C.fB1.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vw(999)
f=A.x5(A.lx(h,A.fc("Cashier",h,h,h,A.ha(h,D.zw,h,h,h,h,h,h,h,B.du,h,h,10,h,B.em,h,!0,h,h,h,h),h),h,new A.kE(D.eeN,h,f,B.hL,h),h,h,D.bsU,h))
w=A.x5(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.du,h,h,22,h,B.em,h,!0,h,h,h,h),h))
v=A.x5(A.fc(C.wQ(new A.T(Date.now(),0,!1),!0),h,h,h,D.a8e,h))
u=A.vw(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.du,h,h,14,h,B.em,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a8e,h)
q=A.vw(10)
p=x.C
u=A.lx(h,A.yU(A.a([s,new A.fT(h,2,h),r,new A.fT(h,10,h),A.lx(h,A.yU(A.a([A.fc("Amount owed",h,h,h,D.a8e,h),new A.fT(h,2,h),A.fc(A.AO(t.c),h,h,h,A.ha(h,D.zw,h,h,h,h,h,h,h,B.du,h,h,20,h,B.em,h,!0,h,h,h,h),h)],p),B.r4,B.lz),h,new A.kE(B.pd,h,q,B.hL,h),h,h,D.bs6,1/0)],p),B.r4,B.lz),h,new A.kE(E.aIf,h,u,B.hL,h),h,h,D.btX,1/0)
q=new A.nx(D.eeQ,0.9,B.kO)
r=A.vw(12)
s=i.c
o=s.$2("Original due",C.wQ(t.r,!1))
n=s.$2("Current due",C.wQ(t.f,!1))
m=i.d
l=new A.nx(m,1.1,B.kO)
k=A.vw(8)
j=i.a
k=A.a([o,n,new A.fT(h,6,h),A.lx(h,A.x5(A.fc(t.gaKK(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.du,h,h,11,h,B.em,h,!0,0.5,h,h,h),h)),h,new A.kE(h,new A.pD(l,l,l,l),k,B.hL,h),h,h,D.bt1,1/0),new A.fT(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zw))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zw))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.rK,h,h,h,h,h,h,h,B.du,h,h,10.5,h,B.em,h,!0,h,h,h,h),h)
m=A.S(o).k("M<1,Sc>")
o=A.C(new A.M(o,new C.fB0(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fT(h,4,h),n,new A.fT(h,6,h),new C.b8w(5,5,new C.b8x(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fT(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fT(h,8,h),w,new A.fT(h,3,h),v,new A.fT(h,16,h),u,new A.fT(h,10,h),A.lx(h,A.yU(k,B.xA,B.lz),h,new A.kE(h,new A.pD(q,q,q,q),r,B.hL,h),h,h,B.ahZ,1/0)],p)
w=j.a
if(w!=null){v=new A.nx(B.Is,1,B.kO)
B.d.v(f,A.a([new A.fT(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.rK,h,h,h,h,h,h,h,B.du,h,h,10,h,B.em,h,!0,h,h,h,h),h),new A.fT(h,6,h),A.lx(h,new A.HU(w,B.VO,h,h),h,new A.kE(h,new A.pD(v,v,v,v),A.vw(6),B.hL,h),82,h,B.MQ,1/0)],p))}f.push(new A.fT(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.f69,h))
f.push(new A.fT(h,18,h))
f.push(A.x5(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.zw,h,h,h,h,h,h,h,B.du,h,h,14,h,B.em,h,!0,1.8,h,h,h),h)))
return f},
$S:455}
C.fB0.prototype={
$1(d){var w=null,v=new A.nx(D.It,0.7,B.kO),u=A.vw(999)
return A.lx(w,A.fc(C.wQ(d,!1),w,w,w,A.ha(w,D.It,w,w,w,w,w,w,w,B.du,w,w,9.5,w,B.em,w,!0,w,w,w,w),w),w,new A.kE(w,new A.pD(v,v,v,v),u,B.hL,w),w,w,D.byc,w)},
$S:1931}
C.c39.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wQ(d,!1),w,w,w,w,w,w,D.fcO,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
$S:1932}
C.fN2.prototype={
$1(d){var w=null,v=A.aI(d,B.bY,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bQA,w,w,w,new C.fN_(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eL(w,B.K,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.YU,A.x(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.co,A.cc(A.x(A.a([new A.ey(new C.aYy(r,w),s),B.R,A.B(A.a([A.E(A.et(B.yL,D.fDF,new C.fN0(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fa,w,new A.b7(A.n(14),B.Y),new A.az(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a1c,D.fAa,new C.fN1(r,d),A.bo(B.b0,w,w,w,B.c,w,B.fa,w,new A.b7(A.n(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.N,0,B.p),B.r,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.N,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ah),w),w,w,0,Aj.Zi,B.d1,w,w,w)},
$S:48}
C.fN_.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fN0.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m3(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h1),$async$$0)
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
C.fN1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fHD(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fMV.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eL(w,B.aw,A.x(A.a([new A.D(D.btL,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.mQ,w,w,w),1),A.aH(w,w,w,w,B.lw,w,w,w,new C.fMT(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.co,new A.D(B.fZ,A.bx(A.n(14),A.fQ(t,B.A,w,w,B.cg,B.dw,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Mv,new A.a7(1/0,w,A.dn(B.p3,D.aS1,new C.fMU(t,this.c,d),A.bo(B.b0,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.N,0,B.p),w,w,w,B.MH,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fMT.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fMU.prototype={
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
C.fN6.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eL(w,B.aw,new A.D(D.btT,A.x(A.a([A.B(A.a([D.bze,A.aH(w,w,w,w,B.lw,w,w,w,new C.fN4(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ey(A.bx(A.n(14),A.p(w,A.b3(w,w,w,new C.baG(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.p3,D.aS1,new C.fN5(t,s,d),A.bo(B.b0,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fN4.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fN5.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m3(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h1),$async$$0)
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
C.fvL.prototype={
$1(d){return d.a===this.a},
$S:246}
C.dHv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dHg.prototype={
bkw(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e0:B.c
s=u.a
w=2
return A.b(A.bR(t,null,new C.dHj(s,q,e),p,!0,!0,!1,B.IJ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dHk(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bkw(d,e)},
$S:1933}
C.dHj.prototype={
$1(d){var w,v=null,u=this.c===B.wj,t=u?D.dfB:D.dbv
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.aix,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.im(!0,v,v,B.y,L.aP9,new C.dHi(this.a,w,t,d),t.length,v,B.dT,B.ag,!0)],x.p),B.ai,v,B.e,B.N,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:24}
C.dHi.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cT.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.n(14)
if(q)u=B.cT
else u=(t.b.a.d.a?B.bs:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aYx(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dHh(t.d,r),s,s,s,s,s,s,s)},
$S:183}
C.dHh.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dHk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dHe.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dHf.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cu,e,v)
return new A.d_(e,!1,A.is(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e_(new C.dHd(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:32}
C.dHd.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e0:B.c,f=A.n(14),e=A.I((h?B.bs:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.el,A.X(B.cB,i.a.d.a?B.bs:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dGZ(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aSy("Name")
r=l.a
q=r.d==null?k:new C.dH_(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bm:B.lQ
n=A.I(B.cT.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.U,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bc0(new A.D(B.fC,A.aL(!1,p,!0,A.p(B.A,C.aYx(m==null?"\ud83d\udc64":A.fBR(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kI,k,B.a7Z,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aTd("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dH0(r,a0),r.d===B.wj),1),B.ab,A.E(i.aTd("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dH5(r,a0),r.d===B.a4S),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bI(B.a3,k,k,A.hn(D.bOV,D.fC0,new C.dH6(r,l.e,a0),A.fz(k,k,k,k,k,k,k,k,k,k,k,B.cT,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uo(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aSz("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.I((t?B.bs:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wQ(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bC,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bLL],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dH7(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aSy("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b0i(r.b.length!==0,B.mx,new C.dH8(r,i,a0),new C.dH9(r,a0),"Upload from gallery","ID photo"))
v.push(i.b0i(r.c.length!==0,D.bF2,new C.dHa(r,i,d,a0),new C.dHb(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ah.a7v("Signature (optional)",t,new C.dHc(a0),new C.dH1(a0,t),new C.dH2(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bn
s=(i?B.bs:B.bn).j(0.28)
s=A.E(A.dW(E.aRV,new C.dH3(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tQ,k,new A.b7(A.n(10),B.Y),new A.az(s,1,B.q,-1),k,k,k,k)),1)
t=A.bo(B.cT,k,k,k,B.c,k,B.tQ,k,new A.b7(A.n(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uV,k,k,k),new C.dH4(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cc(A.x(v,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vH,B.jq,k,k,360)},
$S:163}
C.dGZ.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dH_.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dH0.prototype={
$0(){return this.b.$1(new C.dGY(this.a))},
$S:0}
C.dGY.prototype={
$0(){var w=this.a
w.d=B.wj
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dH5.prototype={
$0(){return this.b.$1(new C.dGX(this.a))},
$S:0}
C.dGX.prototype={
$0(){var w=this.a
w.d=B.a4S
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dH6.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dH7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wU(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dGW(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGW.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gcf(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dH8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Po(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dGV(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGV.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dH9.prototype={
$0(){return this.b.$1(new C.dGU(this.a))},
$S:0}
C.dGU.prototype={
$0(){return this.a.b=""},
$S:0}
C.dHa.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e0:B.c
w=3
return A.b(A.bR(q,null,new C.dGS(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Po(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dGT(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGS.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anF,w,w,w,w,new C.dGM(d),!1,w,w,w,w,w,w,w,D.fsq,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anD,w,w,w,w,new C.dGN(d),!1,w,w,w,w,w,w,w,D.fzc,w,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),!0,!1,B.af,!0,!0)},
$S:24}
C.dGM.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dGN.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dGT.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dHb.prototype={
$0(){return this.b.$1(new C.dGR(this.a))},
$S:0}
C.dGR.prototype={
$0(){return this.a.c=""},
$S:0}
C.dHc.prototype={
$0(){return this.a.$1(new C.dGQ())},
$S:0}
C.dGQ.prototype={
$0(){},
$S:0}
C.dH1.prototype={
$0(){return this.a.$1(new C.dGP(this.b))},
$S:0}
C.dGP.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dH2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahE(u.a,null,null,new C.dGO(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGO.prototype={
$4(d,e,f,g){this.a.$1(new C.dGL(this.b,d))},
$S:461}
C.dGL.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dH3.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dH4.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.f1V)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.eZP)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dHy.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dHz.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AO(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z2(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z2(r).length>0?B.bz:B.cT,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bn
t=(q?B.bs:B.bn).j(0.28)
s=x.p
return new A.d_(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aB,A.B(A.a([A.E(A.dW(B.nG,new C.dHw(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jH,r,new A.b7(A.n(10),B.Y),new A.az(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fzB,new C.dHx(d),A.bo(B.cT,r,r,r,B.c,r,B.jH,r,new A.b7(A.n(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Br,E.Z9,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:32}
C.dHw.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dHx.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dHs.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dHt(r),p=r.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AO(l.c),s,s,s,s,s,s,D.fej,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iC((r.a.d.a?B.bs:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a01,"View receipt",new C.dHl(r,d,l))
u=l.x!=null
t=u?B.rn:B.q4
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.btQ,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dHm(r,d,l)),q.$3$icon$label$onTap(B.BI,"Edit",new C.dHn(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mx,"View / download ID",new C.dHo(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bF1,"View / download selfie",new C.dHp(r,d,l)))
if(l.gaFw())p.push(q.$3$icon$label$onTap(A6.a12,"View / download signature",new C.dHq(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e9,"Delete",new C.dHr(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.vD,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:24}
C.dHt.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.aw
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1934}
C.dHl.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fMZ(w,this.c)},
$S:0}
C.dHm.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.S4(this.c)},
$S:0}
C.dHn.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.D5(this.c)},
$S:0}
C.dHo.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDs(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dHp.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDs(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dHq.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fN3(w,this.c)},
$S:0}
C.dHr.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.O1(0,this.c)},
$S:0}
C.dHA.prototype={
$1(d){return d.x==null},
$S:246}
C.dHB.prototype={
$1(d){return d.x!=null},
$S:246}
C.dHC.prototype={
$2(d,e){return d+e.c},
$S:1935}
C.dHD.prototype={
$0(){return this.a.bzQ()},
$S:0}
C.dHu.prototype={
$0(){return this.a.aeR(this.b)},
$S:0}
C.fwo.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fwp.prototype={
$0(){return B.d.gI(D.a2g)},
$S:z+68}
C.d7j.prototype={
$0(){var w=this.a
return w.m(new C.d7h(w,this.b))},
$S:0}
C.d7h.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d7i.prototype={
$0(){},
$S:0}
C.d7k.prototype={
$0(){var w=this.a.gbYZ()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fyD.prototype={
$1(d){return C.h98(A.a2(d,x.N,x.z))},
$S:z+11}
C.fyE.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fyF.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aN(w,v)
return d.d.aN(0,e.d)},
$S:z+26}
C.fLD.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fTN.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fvC.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bO9.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f4(e,v)?v:null},
$S:1936}
C.fMb.prototype={
$1(d){var w=this
return new C.Zj(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d7Z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d7Y(w,d))},
$S:z+66}
C.d7Y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7N.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d7K.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d7l.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d7m.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d7O.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d7u.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e0:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.d7s(d),w,w),A.bG(B.wG,new C.d7t(d),A.bo(B.n_,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:21}
C.d7s.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d7t.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d7v.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d7L.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d7M.prototype={
$0(){return B.d.gI(D.yX)},
$S:z+12}
C.d7q.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyn(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.SE(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d7r.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7w.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YS(v,u,J.ad(w.d),null)},
$S:z+64}
C.d7x.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7X.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.YA(r.y,r.gyn(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d7V(r),s,s,s,s,s,s,!1,B.a5)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.ba4(v,e,w,u,t,r.gbQ7(),C.hop(r.y.Q),r.gyn(0),s)
w=t}return A.c7(q,new C.d7W(r,e),new A.D(B.Za,w,s))},
$S:1937}
C.d7W.prototype={
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
$S:46}
C.d7V.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGE(B.pR,B.iJ)},
$S:0}
C.d7H.prototype={
$0(){var w=this.a
return w.m(new C.d7G(w))},
$S:0}
C.d7G.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d7I.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.d7n.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.jZ.j(0.5),r=x.p,q=A.a([D.fr2,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.YQ(d,B.dY,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YQ(d,L.aly,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cv,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kr.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cv,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kr.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YQ(d,A0.amH,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YQ(d,B.qa,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YQ(d,B.qa,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eL(u,E.AU,A.bm(!0,new A.D(A5.xT,A.x(q,B.F,u,B.e,B.N,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aiW,B.d1,u,new A.b7(t,new A.az(s,1.4,B.q,-1)),u)},
$S:48}
C.d7J.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.d7A.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.Zl(v,J.cJ(w.d),w.r+1,null)},
$S:z+54}
C.d7B.prototype={
$1(d){var w=null
return A.os(!1,A.em(w,w,w,E.AU,new A.jN(this.a,new C.d7z(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:323}
C.d7z.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7F,B.op,A.E(A.d(e,w,w,w,w,w,w,B.iS,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d7C.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d7D.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.d7E.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7F.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AY(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rs(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d7y(s,t))
w=4
return A.b(s.l1(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d7Q.prototype={
$1(d){var w=null
return A.os(!1,A.em(w,w,w,E.AU,new A.jN(this.a,new C.d7P(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:323}
C.d7P.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7F,B.op,A.E(A.d(e,w,w,w,w,w,w,B.iS,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d7R.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d7S.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.d7T.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:180}
C.d7U.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AY(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l1(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7o.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bhy(B.pR,V.Mh)},
$S:0}
C.d7p.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGE(B.pR,V.Mh)},
$S:0}
C.d9J.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d9K.prototype={
$1(d){var w=this.a
return w.m(new C.d9I(w))},
$S:9}
C.d9I.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d9L.prototype={
$1(d){var w=this.a
return w.m(new C.d9H(w))},
$S:9}
C.d9H.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d9M.prototype={
$1(d){var w=this.a
return w.m(new C.d9G(w))},
$S:9}
C.d9G.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d9N.prototype={
$0(){var w=this.a
return w.m(new C.d9F(w,this.b))},
$S:0}
C.d9F.prototype={
$0(){var w=this.b
this.a.d.saW(0,w)
return w},
$S:0}
C.d9O.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1x()
A.a5(this.b,!1).O(new A.boH(w,v))},
$S:0}
C.d8d.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d8c.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Zh(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d8h.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d8g.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7G(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hJ,v,v,v)
return A.em(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.d8e(d),v,v),A.bG(B.wG,new C.d8f(d),A.bo(B.n_,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AU,w,v,v,v,v,D.fpU,v)},
$S:21}
C.d8e.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d8f.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d8i.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d8j.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cc(A.bS(B.bA,r,B.bq,18,14),B.r,t,B.y,t,D.buL,t,t,B.ag)},
$S:310}
C.d8b.prototype={
$0(){return this.a.Q4(0,this.b)},
$S:0}
C.d8a.prototype={
$0(){return this.a.Pz(0,this.b)},
$S:0}
C.cGO.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cGP.prototype={
$0(){return B.d.gI(D.yX)},
$S:z+12}
C.cGQ.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bU(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1939}
C.d_f.prototype={
$1(d){return this.a.m(new C.d_e(this.b,this.c))},
$S:9}
C.d_e.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d_E.prototype={
$1(d){return this.a.m(new C.d_r())},
$S:2}
C.d_r.prototype={
$0(){},
$S:0}
C.d_F.prototype={
$1(d){return this.a.m(new C.d_q())},
$S:2}
C.d_q.prototype={
$0(){},
$S:0}
C.d_G.prototype={
$0(){var w=this.a
return w.m(new C.d_p(w,this.b))},
$S:0}
C.d_p.prototype={
$0(){var w=this.a
return w.d=w.go6().FE(this.b.a)},
$S:0}
C.d_H.prototype={
$0(){var w=this.a
return w.m(new C.d_o(w,this.b))},
$S:0}
C.d_o.prototype={
$0(){var w=this.a
return w.d=w.go6().cI4(this.b)},
$S:0}
C.d_I.prototype={
$1(d){return this.a.m(new C.d_n())},
$S:2}
C.d_n.prototype={
$0(){},
$S:0}
C.d_J.prototype={
$0(){var w=this.a
return w.m(new C.d_m(w,this.b))},
$S:0}
C.d_m.prototype={
$0(){var w=this.a
return w.d=w.go6().cI9(this.b.a)},
$S:0}
C.d_K.prototype={
$1(d){var w=this.a
return w.m(new C.d_z(w,d))},
$S:6}
C.d_z.prototype={
$0(){var w=this.a
return w.d=w.go6().cJ3(this.b)},
$S:0}
C.d_L.prototype={
$1(d){var w=this.a
return w.d=w.go6().aDK(d)},
$S:2}
C.d_M.prototype={
$1(d){var w=this.a
return w.d=w.go6().cIc(d)},
$S:2}
C.d_O.prototype={
$1(d){var w=this.a
return w.d=w.go6().cJ1(d)},
$S:2}
C.d_P.prototype={
$1(d){var w=this.a
return w.m(new C.d_y(w,d))},
$S:9}
C.d_y.prototype={
$0(){var w=this.a
return w.d=w.go6().cIT(this.b)},
$S:0}
C.d_Q.prototype={
$0(){var w=this.a,v=w.go6(),u=B.a.i(w.gyn(0).a.a),t=B.a.i(w.gaAX().a.a)
u=v.bch(B.a.i(w.gaqE().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.dVv.prototype={
$0(){var w=this.a
w.vU()
w.a.bs()
w.a.pU()},
$S:0}
C.dVu.prototype={
$0(){var w=this.a
w.vU()
w.a.bs()
w.a.pU()},
$S:0}
C.dVx.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dVy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVz.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dVt.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dVw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dVB.prototype={
$0(){this.a.Ox()
return null},
$S:0}
C.dVA.prototype={
$0(){return this.a.Et(this.b)},
$S:0}
C.dUW.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dh,w,w,!0,w,w,new C.dUU(d),w,w),r=A.bo(B.bS,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dUV(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:21}
C.dUU.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dUV.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dUX.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cIy(this.b)},
$S:0}
C.dUR.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSO(w.b,w.c,w.d)},
$S:8}
C.dUp.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dUq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gx(t.a.c),$async$$0)
case 2:s=r.rh(q.dJ(e,new C.dUC(t)))
if(s!=null&&t.c!=null)t.m(new C.dUD(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUC.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dUD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUF.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dUG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cJl(C.hoz(w),w)},
$S:0}
C.dUO.prototype={
$1(d){return new A.e_(new C.dUN(this.a,this.b),null)},
$S:20}
C.dUN.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e0:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.anj,v,v,v,p>0?new C.dUJ(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.x(A.a([r,B.aR,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.anR,v,v,v,new C.dUK(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.N,0,B.p)
return A.em(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.dUL(d),v,v),A.bG(B.pp,new C.dUM(d),A.bo(B.bS,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:166}
C.dUJ.prototype={
$0(){return this.b.$1(new C.dUI(this.a))},
$S:0}
C.dUI.prototype={
$0(){return--this.a.a},
$S:0}
C.dUK.prototype={
$0(){return this.b.$1(new C.dUH(this.a))},
$S:0}
C.dUH.prototype={
$0(){return++this.a.a},
$S:0}
C.dUL.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dUM.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dUP.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cJ8(this.a.a)
w.r.a8(0)},
$S:0}
C.dUd.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahM(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hid(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dUe.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDH(w)},
$S:0}
C.dUZ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ad8(this.b,w,this.c,null)},
$S:z+24}
C.dUT.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e0:B.c,t=A.n(20),s=A.X(B.lt,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bG(D.fAN,new C.dUS(d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:21}
C.dUS.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dUf.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dUg.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dUh.prototype={
$1(d){return d.a},
$S:z+7}
C.dUi.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i2(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDH(w)},
$S:0}
C.dUm.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahM(q)
w=A.S(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dUk(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hid(v.e,null,r,v.f,v.r,new C.dUl(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dUl.prototype={
$0(){return this.a.a9V(this.b)},
$S:0}
C.dUk.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dUn.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.S(w).k("M<1,i2>")
w=A.C(new A.M(w,new C.dUj(this.b),v),v.k("ak.E"))
u.d=t.aDH(w)},
$S:0}
C.dUj.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dUY.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dUz.prototype={
$1(d){return d.length!==0},
$S:3}
C.dUA.prototype={
$1(d){var w=this
return new A.e_(new C.dUy(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dUy.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e0:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dUu(u,e,o),A.S(o).k("M<1,t>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.U,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(12),B.dj),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.ma,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ai,v,B.e,B.N,0,B.p)
t=w.a
return A.em(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.dUv(d),v,v),A.bG(B.JF,new C.dUw(t,u,o,e),A.bo(B.bS,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fo_,new C.dUx(t,u,o,d),A.bo(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:166}
C.dUu.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bSx,w,w,w,new C.dUt(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1940}
C.dUt.prototype={
$0(){return this.a.$1(new C.dUr(this.b,this.c))},
$S:0}
C.dUr.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dUv.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dUw.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dUs(w.c,u))
v.bP(0,B.c9)}},
$S:0}
C.dUs.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dUx.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dUB.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJN(this.b,D.tX,C.Gv(v,w.a.c))},
$S:0}
C.dV5.prototype={
$1(d){return d.as},
$S:z+1}
C.dV6.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.dV7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.icM(v)
return w.VM(v==null?null:v.a)},
$S:0}
C.dV8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hQ0(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.crr(new A.as(u,t),v.gbiq(),new A.as(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cRp:D.cPK
q=A.I(s?B.dp:D.bcy,B.q,1)
p=A.n(22)
o=A.bU(0,A.b3(m,m,m,new C.bds(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bU(0,A.ux(new A.R(n,n,n,n),new A.a7(u,t,new C.bel(l.d,v,l.f,w,new C.dV1(l),l.gcbj(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvP(s,new C.dV2(l,e),new C.dV3(l,e),new C.dV4(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b1,B.b5,B.x,r,m,m),B.n),m,m,m,R.ai2,m,m,m,m)},
$S:204}
C.dV1.prototype={
$1(d){var w=this.a
w.m(new C.dV_(w,d))},
$S:2}
C.dV_.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dV2.prototype={
$0(){var w=this.b
return this.a.b9X(1.25,new A.as(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dV3.prototype={
$0(){var w=this.b
return this.a.b9X(0.8,new A.as(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dV4.prototype={
$0(){var w=this,v=w.b
return w.a.aSO(new A.as(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.as(w.c,w.d),w.e.gbiq())},
$S:0}
C.dV9.prototype={
$0(){var w=this.a
return w.m(new C.dV0(w))},
$S:0}
C.dV0.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dUo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fO(new A.fF(s.c)),$async$$0)
case 2:t.xP("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d8n.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bi3(u,C.hsG(v.c,u),new C.d8m(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d8m.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d8o.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.blp(d.d,d.c,u.f.t(0,d.a),new C.d8l(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d8l.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fws.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.rh(new A.cP(new A.a_(v,new C.fwt(d),w.k("a_<1>")),new C.fwu(),w.k("cP<1,m>")))},
$S:z+20}
C.fwt.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fwu.prototype={
$1(d){return d.a},
$S:z+7}
C.fwq.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fwr.prototype={
$1(d){return d.b},
$S:z+7}
C.fwx.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.rh(new A.cP(new A.a_(v,new C.fwy(d),w.k("a_<1>")),new C.fwz(),w.k("cP<1,m>")))},
$S:z+20}
C.fwy.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fwz.prototype={
$1(d){return d.a},
$S:z+7}
C.fwv.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fww.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d8q.prototype={
$0(){return this.a},
$S:z+32}
C.d8H.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:236}
C.d8z.prototype={
$2(d,e){var w=this.a.ca(0,d,new C.d8A()),v=J.a4(w)
if(!v.t(w,e))v.L(w,e)},
$S:114}
C.d8A.prototype={
$0(){return A.a([],x.s)},
$S:742}
C.d8y.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f4(w,e)
return w===!0},
$S:284}
C.d8r.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d8x.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d8w.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Cu:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.U:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Cu:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1942}
C.d8s.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d8B.prototype={
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
t=J.aV(t==null?D.Cu:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b4(w,new C.d8C(r)))w.push(r)}}B.d.br(w,new C.d8D(a8))
B.d.aZ(w,new C.d8E())
q=C.hQ_(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eDx],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bor(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1943}
C.d8C.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d8D.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d8E.prototype={
$2(d,e){return B.o.aN(d.Q,e.Q)},
$S:z+19}
C.d8F.prototype={
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
C.d8G.prototype={
$1(d){return 16+d*156},
$S:252}
C.d8p.prototype={
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
t.n(0,d,new C.FM(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FM(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FM(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.K3(d,new A.v(e+t,w),s,s.length))}},
$S:180}
C.d8t.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIM(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:114}
C.d8u.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d8v.prototype={
$2(d,e){return B.k.aN(d.a,e.a)},
$S:743}
C.d8I.prototype={
$2(d,e){return B.k.aN(d.a,e.a)},
$S:743}
C.d8J.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:447}
C.d8K.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:191}
C.d8L.prototype={
$1(d){return d>=0.5},
$S:111}
C.fdy.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hx(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cp,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1945}
C.ePp.prototype={
$1(d){var w=null,v=A.n(8),u=B.bS.j(0.12),t=A.n(8)
return new A.D(B.nh,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fa_,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.MP,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ePo(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.ePo.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.doB.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.doA.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nE,B.L,w,w)
return A.em(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.doy(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.ml,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.doz(d),w,w)],x.p),B.b9,B.Bg,w,u,D.bw0,w,D.bxY,new A.b7(v,B.Y),w,w)},
$S:21}
C.doy.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.doz.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.doK.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.doL.prototype={
$1(d){var w=this.a
return w.m(new C.doJ(w,d))},
$S:z+37}
C.doJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.doM.prototype={
$1(d){var w=null
return A.qp(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.doP.prototype={
$1(d){var w=this.a
return w.m(new C.doI(w,d))},
$S:34}
C.doI.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.doO.prototype={
$1(d){var w=null
return A.qp(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.doQ.prototype={
$1(d){var w=this.a
return w.m(new C.doH(w,d))},
$S:34}
C.doH.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.doR.prototype={
$0(){var w=this.a
return w.m(new C.doG(w))},
$S:0}
C.doG.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.doS.prototype={
$0(){var w=this.a
return w.m(new C.doF(w))},
$S:0}
C.doF.prototype={
$0(){return++this.a.at},
$S:0}
C.doT.prototype={
$0(){var w=this.a
return w.m(new C.doE(w))},
$S:0}
C.doE.prototype={
$0(){return--this.a.ax},
$S:0}
C.doU.prototype={
$0(){var w=this.a
return w.m(new C.doD(w))},
$S:0}
C.doD.prototype={
$0(){return++this.a.ax},
$S:0}
C.doV.prototype={
$1(d){var w=this.a
return w.m(new C.doC(w,d))},
$S:9}
C.doC.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.doN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.doW.prototype={
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
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bd,new A.o(w,r,u,v,r,r,B.n),B.eJ,r,r,r,B.jH,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.doX(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+39}
C.doX.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dp5.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.c9H.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.c9O.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c9P.prototype={
$2(d,e){var w=J.b6(e,new C.c9N(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c9N.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c9J.prototype={
$1(d){return C.akD(A.a2(d,x.N,x.z))},
$S:z+8}
C.c9K.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c9L.prototype={
$1(d){return C.h98(A.a2(d,x.N,x.z))},
$S:z+11}
C.c9M.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c9T.prototype={
$1(d){return new A.aFR(d.f.length,d.a,d.b)},
$S:z+43}
C.c9U.prototype={
$2(d,e){return B.a.aN(d.c,e.c)},
$S:564}
C.c9Q.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c9R.prototype={
$1(d){return d.cIL(C.Gv(d,this.a))},
$S:z+44}
C.dVi.prototype={
$1(d){return C.u3(d,this.a.a.c)},
$S:z+2}
C.dVj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dVn.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dVo.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dVf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_2(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yo("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pa(r.c,r.e),$async$$0)
case 4:s.yo(p)
w=5
return A.b(s.Jz(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_2(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yo("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pa(r.c,r.e),$async$$0)
case 4:s.yo(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.V4(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yo("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yo("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yo("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jz(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yo(B.a.eh(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dVm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_1(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yo("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).cm(A.ea(new C.dVl(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pa(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVl.prototype={
$1(d){var w=this.b
return new C.a_f(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dVk.prototype={
$1(d){return D.h7b},
$S:z+46}
C.dVq.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dVr.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dVp(w,d)
return new A.D(B.d9,new C.bep(this.b,d.c,d.a,w,null),null)},
$S:1946}
C.dVp.prototype={
$0(){return this.a.Xu(this.b.b)},
$S:0}
C.dVa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dVb.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dVc.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dVd.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dVe.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dVs.prototype={
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
C.dGD.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dGE.prototype={
$0(){return B.d.gI(D.a3K)},
$S:z+48}
C.dGF.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cXE,44),w,w,w),w,w,new C.bjb(u,t,v,w),B.ax)},
$S:70}
C.fME.prototype={
$1(d){return A.oW(new C.fMD(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:143}
C.fMD.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e0:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rJ,24)],x.V),o=r?B.e2:B.bN
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bS.j(0.18)],x.O)
w=A.p(t,D.bN_,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.aj0,A.B(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.eY0,new C.fMC(this.b,s),20,B.aiB,t,B.ag,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kN,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:116}
C.fMC.prototype={
$2(d,e){var w=null,v=D.a3K[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.I(s?B.e2:B.bN,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.en,8)],x.V),p=A.n(15),o=A.E(new C.a6b(v.a,!0,w),1),n=s?B.jE:B.j_,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eH(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.kZ,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fMB(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:76}
C.fMB.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.chm.prototype={
$0(){return this.a.afU(this.b)},
$S:0}
C.fM0.prototype={
$1(d){return D.h3_},
$S:z+74}
C.fTu.prototype={
$1(d){var w=this
return new C.a10(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fM5.prototype={
$1(d){return new C.YU(this.a,null)},
$S:z+51}
C.fM4.prototype={
$1(d){return D.h3Z},
$S:z+52}
C.d01.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d02.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d00(w,d))},
$S:34}
C.d00.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d03.prototype={
$1(d){return this.a.K9()},
$S:2}
C.d04.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d_Y.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d_Z.prototype={
$1(d){return this.a.K9()},
$S:2}
C.d0_.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cyA.prototype={
$0(){},
$S:0}
C.cyG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cyH.prototype={
$0(){return this.a.aOd(-1)},
$S:0}
C.cyI.prototype={
$1(d){return this.a.m(new C.cyF())},
$S:2}
C.cyF.prototype={
$0(){},
$S:0}
C.cyJ.prototype={
$0(){return this.a.aOd(1)},
$S:0}
C.cyK.prototype={
$1(d){return this.a.m(new C.cyE())},
$S:2}
C.cyE.prototype={
$0(){},
$S:0}
C.cyL.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e2:B.bN
return A.un(u,u,B.b0,r,u,new C.cyD(t,d),B.Bs,s,w,u,new A.az(v,1,B.q,-1),B.ce)},
$S:1947}
C.cyD.prototype={
$1(d){var w=this.a
return w.m(new C.cyB(w,this.b))},
$S:9}
C.cyB.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cyM.prototype={
$1(d){return this.a.m(new C.cyC())},
$S:2}
C.cyC.prototype={
$0(){},
$S:0}
C.cyN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fd_.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.fd0.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fd1.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fcY.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyZ()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bxX,new A.ey(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bvD(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:70}
C.fcZ.prototype={
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
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eH(D.ecP,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a9(new A.dc(-1.2+t,-0.5),new A.dc(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:132}
C.fKE.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:68}
C.eMz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eMq.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eMr.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eMx.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e_(new C.eMw(w,this.b),null)},
$S:20}
C.eMw.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e0:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eL(w,u,new A.D(B.aiU,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hf0(new C.eMt(r,e),r.a),B.aB,A.B(A.a([A.E(A.dW(B.dh,new C.eMu(d),w),1),B.at,A.E(A.bG(B.Uj,new C.eMv(r,d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(t,B.Y),w)},
$S:99}
C.eMt.prototype={
$1(d){return this.b.$1(new C.eMs(this.a,d))},
$S:34}
C.eMs.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eMu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eMv.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eMy.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.SJ(this.b)},
$S:0}
C.eMl.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbQ(w)},
$S:0}
C.eMp.prototype={
$1(d){return this.bkZ(d)},
bkZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lg(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iR(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eMo.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.S(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eMn(this.b),v),v.k("J.E"))
u.d=t.bbQ(w)},
$S:0}
C.eMn.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eMA.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.eMB.prototype={
$1(d){return this.a.bD5(d,this.b)},
$S:z+55}
C.eMm.prototype={
$0(){return this.a.a9U(this.b)},
$S:0}
C.fTk.prototype={
$1(d){return new C.adt(this.a,this.b,this.c,null)},
$S:z+56}
C.eMD.prototype={
$0(){return this.a.a_c(this.b)},
$S:0}
C.eME.prototype={
$0(){return this.a.Q0(this.b)},
$S:0}
C.eMF.prototype={
$0(){return this.a.Eo(this.b)},
$S:0}
C.eMG.prototype={
$0(){return this.a.a_d(this.b)},
$S:0}
C.eMC.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eMg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eMh.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eMi.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eMk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.q_(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eMj(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMj.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eN2.prototype={
$2(d,e){return d+e.gwZ()},
$S:z+59}
C.eMZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eN_.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eMK.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e0:B.c,s=A.n(24),r=A.p(v,D.bNq,B.f,v,v,new A.o(B.av.j(u?0.18:0.08),v,A.I(B.av.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.aw
u=u?B.e2:B.bN
w=x.p
return A.eL(v,t,new A.D(B.xX,A.x(A.a([r,B.aR,q,B.O,p,B.d8,A.B(A.a([A.E(A.dW(B.nG,new C.eMI(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.fa,v,new A.b7(A.n(14),B.Y),new A.az(u,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fEz,new C.eMJ(d),A.bo(B.av,v,v,v,v,v,B.fa,v,new A.b7(A.n(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.N,0,B.p),v),v,v,v,v,B.d1,v,new A.b7(s,B.Y),v)},
$S:48}
C.eMI.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eMJ.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eMT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e0:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fR,28)],x.V),g=k?D.d3n:B.a35,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eRI,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cx,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.az,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aiY,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b5_(B.b6,B.j5,new C.eMQ(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b5_(B.cA,M.yB,new C.eMR(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.av.j(k?0.14:0.06)
q=A.n(16)
p=A.I(B.av.j(0.28),B.q,1)
o=A.p(m,D.bMO,B.f,m,m,new A.o(B.av.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vF,A.p(m,A.x(A.a([g,new A.D(B.aiV,A.x(A.a([w,B.R,u,B.by,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.be,n,A.X(B.eA,k?B.bs:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eMS(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:24}
C.eMQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vu("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMR.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vu("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMS.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.NP(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eMO.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e0:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e2:B.bN
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bs:B.bn
u=A.bx(w,new A.a7(48,48,C.aQ6(!0,A.n(12),48,N.Np,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AO(v.gwZ())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vF,A.p(q,A.x(A.a([B.R,k,new A.D(D.aiS,A.B(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.B6,r.clv(B.ug,B.aV,new C.eMM(d),p,"QR code or backup file","Transfer project"),r.b1X(!0,B.e9,B.av,new C.eMN(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:24}
C.eMM.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eMN.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eMP.prototype={
$1(d){return this.bl_(d)},
bl_(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Lg(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vI(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eN5.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eN4(w))},
$S:0}
C.eN4.prototype={
$0(){return this.a.r++},
$S:0}
C.eN6.prototype={
$0(){var w=this.a
return w.m(new C.eN3(w))},
$S:0}
C.eN3.prototype={
$0(){return this.a.r++},
$S:0}
C.eMH.prototype={
$0(){var w=this.a.c
w.toString
return A.iR(w,null)},
$S:0}
C.eML.prototype={
$0(){return this.a.ceO(this.b)},
$S:0}
C.eN1.prototype={
$0(){var w=this.a
return w.m(new C.eN0(w,this.b))},
$S:0}
C.eN0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eMW.prototype={
$0(){return this.a.vu("scan")},
$S:0}
C.eMX.prototype={
$0(){return this.a.vu("file")},
$S:0}
C.eMY.prototype={
$1(d){return this.a.clw(d,this.b)},
$S:z+60}
C.eMV.prototype={
$0(){return this.a.Es(this.b)},
$S:0}
C.eMU.prototype={
$0(){return this.a.a_I(this.b,this.c)},
$S:0}
C.cy0.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cy_.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cxY.prototype={
$1(d){return C.hyx(A.a2(d,x.N,x.z))},
$S:z+63}
C.cxZ.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fvs.prototype={
$1(d){return d.y===D.ky},
$S:z+2}
C.fTV.prototype={
$1(d){return C.bBp(d,this.a)},
$S:z+2}
C.ftu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bOe.prototype={
$1(d){return!d.as},
$S:z+1}
C.bOd.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bOa.prototype={
$1(d){return C.h99(A.a2(d,x.N,x.z))},
$S:z+14}
C.bOb.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bOc.prototype={
$1(d){return J.k(d)},
$S:17}
C.fkA.prototype={
$2(d,e){return e.e.aN(0,d.e)},
$S:z+13}
C.fgg.prototype={
$1(d){return C.h_q(A.a2(d,x.N,x.z))},
$S:z+67}
C.fgh.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fgi.prototype={
$2(d,e){return e.e.aN(0,d.e)},
$S:z+13}
C.fLS.prototype={
$1(d){return J.k(d)},
$S:17}
C.fLT.prototype={
$1(d){return d.a},
$S:z+69}
C.fLU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fLV.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fLW.prototype={
$1(d){return d.SJ(null).ag()},
$S:z+70}
C.fTT.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fvW.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fyJ.prototype={
$1(d){return C.akD(A.a2(d,x.N,x.z))},
$S:z+8}
C.fyK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fyL.prototype={
$2(d,e){return e.r.aN(0,d.r)},
$S:z+6}
C.fyM.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fyN.prototype={
$1(d){return C.u3(d,this.a)},
$S:z+2}
C.fLF.prototype={
$1(d){return C.u3(d,this.a)},
$S:z+2}
C.fTO.prototype={
$1(d){return C.akD(A.a2(d,x.N,x.z))},
$S:z+8}
C.fTP.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fTQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fvD.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fvE.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fTZ.prototype={
$1(d){return!d.as},
$S:z+1}
C.fv7.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fv8.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fv9.prototype={
$2(d,e){return B.o.aN(d.Q,e.Q)},
$S:z+19}
C.fTv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fzw.prototype={
$1(d){return d.Q},
$S:z+72}
C.fLy.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fyG.prototype={
$1(d){return C.akD(A.a2(d,x.N,x.z))},
$S:z+8}
C.fyH.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fyI.prototype={
$2(d,e){return e.r.aN(0,d.r)},
$S:z+6}
C.fLt.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fgO.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgP.prototype={
$1(d){return C.h99(A.a2(d,x.N,x.z))},
$S:z+14}
C.fgQ.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fgR.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fgS.prototype={
$1(d){return d.length!==0},
$S:3}
C.fh4.prototype={
$2(d,e){return d.eR(new C.fh5(e))},
$S:1948}
C.fh5.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.ca},
$S:1949}
C.fh1.prototype={
$1(d){return C.hUC(d,this.a)},
$S:z+73}
C.fh2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fh3.prototype={
$2(d,e){return e.r.aN(0,d.r)},
$S:z+6}
C.flf.prototype={
$1(d){return d.a},
$S:z+49}
C.flg.prototype={
$1(d){return d.length!==0},
$S:3}
C.flh.prototype={
$2(d,e){return e.r.aN(0,d.r)},
$S:z+6}
C.fnY.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fsO.prototype={
$1(d){return C.hkz(d,C.Gv(d,this.a))},
$S:z+5}
C.fsP.prototype={
$1(d){return C.hkA(d,C.Gv(d,this.a))},
$S:z+5};(function aliases(){var w=C.aL7.prototype
w.bv7=w.q
w=C.aNi.prototype
w.bxv=w.q
w=C.aNj.prototype
w.bxw=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCC.prototype,"gciq","cir",25)
var s
w(s=C.azG.prototype,"gcbp","cbq",42)
v(s,"gaMt","Nn",0)
v(s,"gcqN","AN",0)
v(s,"gbKT","O2",0)
v(s,"gcEZ","yp",0)
v(s,"gckt","a0p",0)
v(s,"gbGg","NL",0)
v(s,"gbLj","WW",0)
w(s,"gbQ7","bQ8",71)
v(s,"gbAD","zQ",0)
v(C.azH.prototype,"gcEV","Fj",0)
v(s=C.aDc.prototype,"gafw","vJ",0)
v(s,"gce3","a_z",0)
v(s,"gaQx","HV",0)
v(s=C.aD9.prototype,"gcB1","a2w",0)
v(s,"gafw","vJ",0)
v(s,"gcoN","a14",0)
v(s,"gcf0","a_N",0)
w(s,"gcbj","cbk",30)
v(s,"gbLa","I_",0)
v(s,"gcC6","cC7",3)
v(s,"gc1O","YC",0)
w(s,"gc9P","c9Q",23)
v(s,"gcdO","cdP",3)
v(s=C.aBB.prototype,"gc7D","PA",0)
v(s,"gc7F","c7G",3)
v(s,"gbHP","a9v",0)
v(s=C.aDb.prototype,"gbOC","Xq",0)
v(s,"gbZ5","Y4",0)
v(s,"gcvf","a1V",0)
v(s,"gcrm","a1w",0)
v(C.aDa.prototype,"gcr4","ahg",0)
v(C.asm.prototype,"gc9N","a_b",0)
v(C.ayr.prototype,"ga2g","K9",3)
v(C.ayq.prototype,"ga2g","K9",3)
v(C.axa.prototype,"ga2g","K9",3)
v(s=C.aEH.prototype,"gb1l","Qv",0)
v(s,"gbzr","VG",0)
v(s,"gceP","ceQ",3)
w(C.aEG.prototype,"gcaE","caF",57)
u(C.aEI.prototype,"gaQr",0,0,null,["$1","$0"],["HU","bJ5"],58,0,0)
t(C,"hrR","i3m",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoa,C.uk,C.ne,C.HD,C.aeH,C.JW,C.ul,C.K3,C.FM,C.ben,C.aIM,C.apr,C.d8M,C.lC,C.aT5,C.aT4,C.aR2,C.tS,C.r0,C.lm,C.i2,C.kG,C.aGL])
u(A.i0,[C.fDj,C.fDi,C.fDk,C.fMx,C.frH,C.frI,C.frN,C.fB2,C.fB1,C.fB0,C.c39,C.fN2,C.fMV,C.fN6,C.fvL,C.dHj,C.dHe,C.dHf,C.dGS,C.dGO,C.dHy,C.dHz,C.dHs,C.dHt,C.dHA,C.dHB,C.fwo,C.fyD,C.fyE,C.fLD,C.fTN,C.fvC,C.fMb,C.d7Z,C.d7l,C.d7u,C.d7L,C.d7q,C.d7w,C.d7n,C.d7A,C.d7B,C.d7z,C.d7Q,C.d7P,C.d9K,C.d9L,C.d9M,C.d8c,C.d8h,C.d8g,C.cGO,C.cGQ,C.d_f,C.d_E,C.d_F,C.d_I,C.d_K,C.d_L,C.d_M,C.d_O,C.d_P,C.dVw,C.dUW,C.dUR,C.dUp,C.dUC,C.dUF,C.dUO,C.dUd,C.dUZ,C.dUT,C.dUf,C.dUg,C.dUh,C.dUm,C.dUk,C.dUj,C.dUz,C.dUA,C.dUu,C.dV5,C.dV1,C.d8n,C.d8o,C.fws,C.fwt,C.fwu,C.fwq,C.fwr,C.fwx,C.fwy,C.fwz,C.fwv,C.fww,C.d8H,C.d8x,C.d8s,C.d8C,C.d8D,C.d8G,C.d8u,C.d8J,C.d8K,C.d8L,C.fdy,C.ePp,C.doA,C.doK,C.doL,C.doM,C.doP,C.doO,C.doQ,C.doV,C.doW,C.c9O,C.c9N,C.c9J,C.c9K,C.c9L,C.c9M,C.c9T,C.c9Q,C.c9R,C.dVi,C.dVl,C.dVk,C.dVr,C.dVs,C.dGD,C.fME,C.fM0,C.fTu,C.fM5,C.fM4,C.d02,C.d03,C.d_Z,C.cyI,C.cyK,C.cyL,C.cyD,C.cyM,C.fd_,C.fKE,C.eMx,C.eMt,C.eMp,C.eMn,C.eMB,C.fTk,C.eMK,C.eMT,C.eMO,C.eMP,C.eMY,C.cy_,C.cxY,C.cxZ,C.fvs,C.fTV,C.ftu,C.bOe,C.bOd,C.bOa,C.bOb,C.bOc,C.fgg,C.fgh,C.fLS,C.fLT,C.fLU,C.fLV,C.fLW,C.fTT,C.fvW,C.fyJ,C.fyK,C.fyM,C.fyN,C.fLF,C.fTO,C.fTP,C.fTQ,C.fvD,C.fvE,C.fTZ,C.fv7,C.fv8,C.fTv,C.fzw,C.fLy,C.fyG,C.fyH,C.fLt,C.fgO,C.fgP,C.fgQ,C.fgR,C.fgS,C.fh5,C.fh1,C.fh2,C.flf,C.flg,C.fnY,C.fsO,C.fsP])
u(A.au,[C.aYy,C.akB,C.aUj,C.YA,C.ba4,C.bel,C.bi3,C.bvP,C.blp,C.ad7,C.bi2,C.ad6,C.bi1,C.aBC,C.aHO,C.ad8,C.JS,C.bem,C.aco,C.bek,C.bep,C.aYw,C.asm,C.adt])
u(A.mP,[C.baG,C.bbT,C.bbK,C.aGG,C.bh6,C.beo,C.bds,C.bjb,C.bvD])
u(A.ja,[C.fN_,C.fN0,C.fN1,C.fMT,C.fMU,C.fN4,C.fN5,C.dHv,C.dHh,C.dHk,C.dGZ,C.dH_,C.dH0,C.dGY,C.dH5,C.dGX,C.dH6,C.dH7,C.dGW,C.dH8,C.dGV,C.dH9,C.dGU,C.dHa,C.dGM,C.dGN,C.dGT,C.dHb,C.dGR,C.dHc,C.dGQ,C.dH1,C.dGP,C.dH2,C.dGL,C.dH3,C.dH4,C.dHw,C.dHx,C.dHl,C.dHm,C.dHn,C.dHo,C.dHp,C.dHq,C.dHr,C.dHD,C.dHu,C.fwp,C.d7j,C.d7h,C.d7i,C.d7k,C.d7Y,C.d7N,C.d7K,C.d7m,C.d7O,C.d7s,C.d7t,C.d7v,C.d7M,C.d7r,C.d7x,C.d7V,C.d7H,C.d7G,C.d7I,C.d7J,C.d7C,C.d7E,C.d7F,C.d7y,C.d7R,C.d7U,C.d7o,C.d7p,C.d9J,C.d9I,C.d9H,C.d9G,C.d9N,C.d9F,C.d9O,C.d8d,C.d8e,C.d8f,C.d8i,C.d8b,C.d8a,C.cGP,C.d_e,C.d_r,C.d_q,C.d_G,C.d_p,C.d_H,C.d_o,C.d_n,C.d_J,C.d_m,C.d_z,C.d_y,C.d_Q,C.dVv,C.dVu,C.dVx,C.dVy,C.dVz,C.dVt,C.dVB,C.dVA,C.dUU,C.dUV,C.dUX,C.dUq,C.dUE,C.dUD,C.dUG,C.dUQ,C.dUJ,C.dUI,C.dUK,C.dUH,C.dUL,C.dUM,C.dUP,C.dUe,C.dUS,C.dUi,C.dUl,C.dUn,C.dUY,C.dUt,C.dUr,C.dUv,C.dUw,C.dUs,C.dUx,C.dUB,C.dV6,C.dV7,C.dV_,C.dV2,C.dV3,C.dV4,C.dV9,C.dV0,C.dUo,C.d8m,C.d8l,C.d8q,C.d8A,C.d8r,C.ePo,C.doB,C.doy,C.doz,C.doJ,C.doI,C.doH,C.doR,C.doG,C.doS,C.doF,C.doT,C.doE,C.doU,C.doD,C.doC,C.doN,C.doX,C.dp5,C.dVj,C.dVn,C.dVo,C.dVf,C.dVg,C.dVh,C.dVm,C.dVq,C.dVp,C.dVa,C.dVb,C.dVc,C.dVd,C.dVe,C.dGE,C.fMB,C.chm,C.d01,C.d00,C.d04,C.d_Y,C.d0_,C.cyA,C.cyG,C.cyH,C.cyF,C.cyJ,C.cyE,C.cyB,C.cyC,C.cyN,C.fd0,C.fd1,C.eMz,C.eMq,C.eMr,C.eMs,C.eMu,C.eMv,C.eMy,C.eMl,C.eMo,C.eMA,C.eMm,C.eMD,C.eME,C.eMF,C.eMG,C.eMC,C.eMg,C.eMh,C.eMi,C.eMk,C.eMj,C.eMZ,C.eN_,C.eMI,C.eMJ,C.eMQ,C.eMR,C.eMS,C.eMM,C.eMN,C.eN5,C.eN4,C.eN6,C.eN3,C.eMH,C.eML,C.eN1,C.eN0,C.eMW,C.eMX,C.eMV,C.eMU])
u(A.ag,[C.aom,C.SE,C.Zh,C.Zl,C.Zj,C.YS,C.apu,C.apo,C.ZV,C.aps,C.a_f,C.a_g,C.a6b,C.YU,C.YT,C.Yr,C.a10,C.Fz,C.ax3,C.asl,C.asf,C.ask,C.O4])
u(A.ah,[C.aCC,C.bei,C.azG,C.beD,C.azH,C.bbR,C.aDc,C.aD9,C.aBB,C.aDb,C.aDa,C.bjw,C.aL7,C.ayr,C.ayq,C.axa,C.bvG,C.aNi,C.aNj,C.aEH,C.bkT,C.aEG,C.bxs])
u(A.kn,[C.dHg,C.dHi,C.dHd,C.dHC,C.fyF,C.bO9,C.d7X,C.d7W,C.d7D,C.d7S,C.d7T,C.d8j,C.dUN,C.dUy,C.dV8,C.d8z,C.d8y,C.d8w,C.d8B,C.d8E,C.d8F,C.d8p,C.d8t,C.d8v,C.d8I,C.c9H,C.c9P,C.c9U,C.dGF,C.fMD,C.fMC,C.fcY,C.fcZ,C.eMw,C.eN2,C.cy0,C.fkA,C.fgi,C.fyL,C.fv9,C.fyI,C.fh4,C.fh3,C.flh])
t(C.bjc,C.aL7)
u(A.md,[C.abr,C.aJt,C.HE,C.akC,C.cy1,C.cy2])
t(C.bvE,C.aNi)
t(C.bvF,C.aNj)
t(C.aEI,C.bxs)
t(C.b8x,A.b8l)
t(C.bvH,A.a5R)
t(C.b8w,C.bvH)
w(C.aL7,A.eW)
w(C.aNi,A.c9)
w(C.aNj,A.c9)
v(C.bxs,A.eB)
v(C.bvH,A.j4)})()
A.k2(b.typeUniverse,JSON.parse('{"aYy":{"au":[],"t":[]},"baG":{"aC":[]},"aom":{"ag":[],"t":[]},"aCC":{"ah":["aom"]},"SE":{"ag":[],"t":[]},"akB":{"au":[],"t":[]},"aUj":{"au":[],"t":[]},"bei":{"ah":["SE"]},"Zh":{"ag":[],"t":[]},"Zl":{"ag":[],"t":[]},"Zj":{"ag":[],"t":[]},"YS":{"ag":[],"t":[]},"azG":{"ah":["Zh"]},"beD":{"ah":["Zl"]},"azH":{"ah":["Zj"]},"YA":{"au":[],"t":[]},"bbT":{"aC":[]},"bbK":{"aC":[]},"bbR":{"ah":["YS"]},"aGG":{"aC":[]},"bh6":{"aC":[]},"ba4":{"au":[],"t":[]},"apu":{"ag":[],"t":[]},"apo":{"ag":[],"t":[]},"ZV":{"ag":[],"t":[]},"ad8":{"au":[],"t":[]},"aDc":{"ah":["apu"]},"aD9":{"ah":["apo"]},"bel":{"au":[],"t":[]},"beo":{"aC":[]},"bi3":{"au":[],"t":[]},"bds":{"aC":[]},"bvP":{"au":[],"t":[]},"blp":{"au":[],"t":[]},"aBB":{"ah":["ZV"]},"ad7":{"au":[],"t":[]},"bi2":{"au":[],"t":[]},"ad6":{"au":[],"t":[]},"bi1":{"au":[],"t":[]},"aBC":{"au":[],"t":[]},"aHO":{"au":[],"t":[]},"JS":{"au":[],"t":[]},"aps":{"ag":[],"t":[]},"a_f":{"ag":[],"t":[]},"a_g":{"ag":[],"t":[]},"aDb":{"ah":["aps"]},"bem":{"au":[],"t":[]},"aco":{"au":[],"t":[]},"bek":{"au":[],"t":[]},"bep":{"au":[],"t":[]},"aDa":{"ah":["a_f"]},"bjw":{"ah":["a_g"]},"aYw":{"au":[],"t":[]},"a6b":{"ag":[],"t":[]},"bjc":{"ah":["a6b"]},"bjb":{"aC":[]},"asm":{"au":[],"t":[]},"YU":{"ag":[],"t":[]},"YT":{"ag":[],"t":[]},"Yr":{"ag":[],"t":[]},"a10":{"ag":[],"t":[]},"ayr":{"ah":["YU"]},"ayq":{"ah":["YT"]},"axa":{"ah":["Yr"]},"bvG":{"ah":["a10"]},"Fz":{"ag":[],"t":[]},"ax3":{"ag":[],"t":[]},"bvE":{"ah":["Fz"]},"bvF":{"ah":["ax3"]},"bvD":{"aC":[]},"asl":{"ag":[],"t":[]},"aEH":{"ah":["asl"]},"adt":{"au":[],"t":[]},"asf":{"ag":[],"t":[]},"ask":{"ag":[],"t":[]},"bkT":{"ah":["asf"]},"aEG":{"ah":["ask"]},"O4":{"ag":[],"t":[]},"aEI":{"ah":["O4"],"eB":[]},"b8w":{"j4":[],"fg":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aR2"),Q:w("r0"),n:w("bk<m,m>"),c5:w("aT4"),dY:w("aT5"),d:w("eG<m?>"),e:w("HD"),B:w("ne"),P:w("i2"),k:w("kG"),x:w("aA<~>"),f5:w("O<a3_>"),V:w("O<ac>"),t:w("O<r0>"),O:w("O<w>"),ac:w("O<eG<m?>>"),I:w("O<ne>"),u:w("O<i2>"),_:w("O<kG>"),cl:w("O<aA<ai<a6<m,@>>>>"),R:w("O<ng>"),cq:w("O<ai<+(K,K)>>"),ez:w("O<a6<m,aD>>"),gE:w("O<a6<m,m>>"),c7:w("O<a6<m,@>>"),fD:w("O<mu>"),bp:w("O<ol>"),g:w("O<v>"),v:w("O<hv>"),L:w("O<+(m,m)>"),G:w("O<+(K,K)>"),bF:w("O<+count,id,name(G,m,m)>"),A:w("O<cR>"),s:w("O<m>"),aS:w("O<iU>"),p:w("O<t>"),C:w("O<fg>"),D:w("O<lm>"),fp:w("O<JW>"),M:w("O<K3>"),gZ:w("O<aGL>"),Y:w("O<aeH>"),E:w("O<aIM>"),F:w("O<K>"),dC:w("O<G>"),dS:w("O<aC?>"),d4:w("O<m?>"),J:w("cs<ah<ag>>"),b:w("ai<ne>"),do:w("ai<i2>"),r:w("ai<kG>"),U:w("ai<a6<m,@>>"),gk:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),h:w("ai<m>"),c:w("ai<lm>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a6<m,@>>>"),a:w("a6<m,@>"),f:w("a6<@,@>"),gv:w("M<m,HF>"),w:w("iE"),g2:w("rm"),bV:w("aoa"),fL:w("cr"),K:w("aD"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),d9:w("+dx,hidden(K,ai<i2>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),e7:w("bq<K>"),gc:w("dL"),b4:w("cx<G>"),W:w("jN<m>"),l:w("t"),cM:w("fg"),i:w("lm"),cc:w("FM"),bw:w("ad6<m?>"),cy:w("K5"),q:w("n2"),y:w("Q"),gR:w("K"),z:w("@"),S:w("G"),eK:w("ai<kG>?"),m:w("apr?"),cT:w("v?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),X:w("+qrPayload,token,usesRemaining(m,m,G)?"),gF:w("+members,trees,viewOnly(G,G,Q)?"),Z:w("q0?"),T:w("m?"),aD:w("dL?"),o:w("lm?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZm=new A.bn(B.hg,B.bG,B.hg,B.bG)
D.ab1=new A.bn(B.hg,B.iw,B.hg,B.iw)
D.aZz=new A.bn(B.ix,B.bG,B.bG,B.bG)
D.aZD=new A.az(B.cT,1.4,B.q,-1)
D.aZN=new A.az(B.ad,1,B.q,-1)
D.b0b=new A.aY(0,1/0,64,1/0)
D.b0f=new A.aY(0,84,0,1/0)
D.ayH=w([B.lQ,B.r1,B.c],x.O)
D.bYp=new A.a9(B.az,B.aC,B.x,D.ayH,null,null)
D.b1_=new A.o(null,null,null,null,null,D.bYp,B.n)
D.d2S=w([B.aV,B.bS],x.O)
D.c_w=new A.a9(B.b1,B.b5,B.x,D.d2S,null,null)
D.b1k=new A.o(null,null,null,null,null,D.c_w,B.n)
D.b7y=new A.fk(null,null,null,null,null,E.jZ,null,null,null,null)
D.acm=new A.cp(B.A,null,null,D.b7y,null)
D.kr=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f7X=new A.H(!0,D.kr,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frh=new A.y("No books on the shelf yet.",null,D.f7X,null,null,null,null,null,null,null,null,null)
D.ecQ=new A.D(B.o6,D.frh,null)
D.b61=new A.cp(B.A,null,null,D.ecQ,null)
D.b6V=new A.cp(B.A,null,null,Z.Wa,null)
D.b92=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b9v=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.ady=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bcf=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bcy=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aeY=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bgw=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bgV=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.F_=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bix=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bl0=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.agy=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.flH=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bqN=new A.eG(null,D.flH,B.f_,null,x.d)
D.fus=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bqP=new A.eG(null,D.fus,B.f_,null,x.d)
D.brm=new A.ba(38e5)
D.bs6=new A.ij(0,10,0,10)
D.bsf=new A.R(0,1,0,0)
D.bsq=new A.ij(0,4,0,4)
D.bsI=new A.R(10,10,14,10)
D.bsU=new A.ij(10,4,10,4)
D.bt1=new A.ij(10,8,10,8)
D.bt2=new A.R(10,8,8,8)
D.btt=new A.R(12,6,12,2)
D.btL=new A.R(14,10,6,6)
D.btM=new A.R(14,12,14,0)
D.btQ=new A.R(14,12,14,8)
D.btT=new A.R(14,12,8,14)
D.btX=new A.ij(14,14,14,14)
D.buB=new A.R(16,2,16,10)
D.buL=new A.R(16,6,16,30)
D.buN=new A.R(16,6,16,8)
D.aiS=new A.R(18,16,18,8)
D.bvn=new A.R(18,20,18,22)
D.aiW=new A.R(18,24,18,24)
D.bvt=new A.R(18,30,18,30)
D.bvM=new A.R(20,10,12,20)
D.bvZ=new A.R(20,18,16,18)
D.bw0=new A.R(20,18,20,6)
D.bwQ=new A.R(24,32,24,28)
D.bwR=new A.R(24,36,24,32)
D.bwV=new A.R(26,26,24,14)
D.bx9=new A.R(2,4,2,8)
D.bxd=new A.R(30,0,30,0)
D.bxo=new A.R(38,22,22,22)
D.aje=new A.R(40,24,24,24)
D.bxq=new A.ij(40,40,40,40)
D.bxs=new A.R(46,30,30,30)
D.ajh=new A.R(4,0,0,8)
D.bxT=new A.R(56,40,40,40)
D.bxX=new A.R(1.25,1.25,1.25,1.25)
D.bxY=new A.R(60,0,60,0)
D.by0=new A.R(6,14,6,16)
D.byc=new A.ij(7,3,7,3)
D.byJ=new A.R(5,1.5,5,1.5)
D.byU=new A.R(6,2.5,6,2.5)
D.fGy=new A.y("Signature",null,B.mQ,null,null,null,null,null,null,null,null,null)
D.bze=new A.bB(1,B.bg,D.fGy,null)
D.fDH=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bA1=new A.bB(1,B.bg,D.fDH,null)
D.ffj=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFF=new A.y("Worksheets",null,D.ffj,null,null,null,null,null,null,null,null,null)
D.ffs=new A.H(!0,E.ad6,null,null,null,null,13,B.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEx=new A.y("Track your project spending",null,D.ffs,null,null,null,null,null,null,null,null,null)
D.cVP=w([D.fFF,B.au,D.fEx],x.p)
D.bnY=new A.fn(B.ag,B.e,B.j,B.F,null,B.p,null,0,D.cVP,null)
D.bA7=new A.bB(1,B.bg,D.bnY,null)
D.fay=new A.H(!0,E.jZ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkU=new A.y("FAMILY LIBRARY",null,D.fay,null,null,null,null,null,null,null,null,null)
D.bAp=new A.bB(1,B.bg,D.fkU,null)
D.N2=new C.HD("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.a_i=new C.HE(0,"male")
D.ak9=new C.HE(1,"female")
D.y5=new C.HE(2,"unknown")
D.tX=new C.akC(0,"owner")
D.N3=new C.akC(1,"editor")
D.ky=new C.akC(2,"viewer")
D.akZ=new A.a0(61199,"MaterialIcons",!1)
D.bF1=new A.a0(61504,"MaterialIcons",!1)
D.bF2=new A.a0(61505,"MaterialIcons",!1)
D.bF4=new A.a0(61587,"MaterialIcons",!1)
D.bFb=new A.a0(61890,"MaterialIcons",!1)
D.bG5=new A.a0(63034,"MaterialIcons",!0)
D.bGV=new A.a0(63429,"MaterialIcons",!1)
D.anc=new A.a0(984520,"MaterialIcons",!1)
D.bFB=new A.a0(62776,"MaterialIcons",!1)
D.bJh=new A.ae(D.bFB,26,B.b0,null,null,null)
D.bE_=new A.a0(57648,"MaterialIcons",!1)
D.bJz=new A.ae(D.bE_,14,B.c,null,null,null)
D.bJR=new A.ae(B.G7,17,null,null,null,null)
D.bKm=new A.ae(E.a0b,null,null,null,null,null)
D.bKp=new A.ae(B.js,18,E.jZ,null,null,null)
D.a_Y=new A.a0(62044,"MaterialIcons",!1)
D.bKv=new A.ae(D.a_Y,null,B.aV,null,null,null)
D.bLk=new A.ae(B.dY,16,null,null,null,null)
D.bLr=new A.ae(D.a_Y,32,B.aV,null,null,null)
D.bLL=new A.ae(E.al_,18,B.cT,null,null,null)
D.bMO=new A.ae(B.Gh,22,B.av,null,null,null)
D.bN_=new A.ae(B.dY,22,B.b0,null,null,null)
D.bNa=new A.ae(Q.a02,22,B.c,null,null,null)
D.bNg=new A.ae(B.u7,52,B.c,null,null,null)
D.bNq=new A.ae(B.Gh,30,B.av,null,null,null)
D.anO=new A.ae(B.ug,22,B.c,null,null,null)
D.bNS=new A.ae(B.dY,17,null,null,null,null)
D.bOb=new A.ae(B.vZ,26,B.cT,null,null,null)
D.bOV=new A.ae(B.a0m,16,null,null,null,null)
D.bPG=new A.ae(B.u7,24,B.c,null,null,null)
D.bPL=new A.ae(B.Nv,20,B.rB,null,null,null)
D.bPQ=new A.ae(B.G5,null,B.bS,null,null,null)
D.bPX=new A.ae(B.js,18,B.c,null,null,null)
D.bQA=new A.ae(B.cB,22,B.ad,null,null,null)
D.bRp=new A.ae(B.e9,16,B.ad,null,null,null)
D.bRB=new A.ae(D.a_Y,20,B.aV,null,null,null)
D.aod=new A.ae(B.hq,20,null,null,null,null)
D.bS6=new A.ae(B.cB,18,D.kr,null,null,null)
D.bSo=new A.ae(B.yq,28,B.c,null,null,null)
D.bSx=new A.ae(B.Nl,null,B.h3,null,null,null)
D.bSR=new A.ae(B.yq,24,B.c,null,null,null)
D.bTh=new A.ae(B.u7,null,B.aV,null,null,null)
D.bTi=new A.ae(B.jK,20,B.cT,null,null,null)
D.bTC=new A.ae(B.G7,16,null,null,null,null)
D.bV9=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eB,!0,null,null,null,null)
D.dag=w([B.bv,B.aV,B.fd,B.b0],x.O)
D.bWP=new A.a9(B.az,B.aC,B.x,D.dag,null,null)
D.bhr=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bmY=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cSF=w([D.bhr,D.bmY],x.O)
D.bX_=new A.a9(B.b1,B.b5,B.x,D.cSF,null,null)
D.d4G=w([B.f2,B.fy,B.fd],x.O)
D.bX4=new A.a9(B.az,B.aC,B.x,D.d4G,null,null)
D.afz=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b9w=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cUD=w([D.afz,D.b9w],x.O)
D.bXD=new A.a9(B.b1,B.b5,B.x,D.cUD,null,null)
D.bcL=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.ay0=w([D.bcL,D.afz],x.O)
D.bXX=new A.a9(B.az,B.aC,B.x,D.ay0,null,null)
D.aew=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.beZ=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d3P=w([D.aew,D.beZ],x.O)
D.bYA=new A.a9(B.a3,B.a8,B.x,D.d3P,null,null)
D.dgQ=w([B.bz,B.n5],x.O)
D.bYC=new A.a9(B.b1,B.b5,B.x,D.dgQ,null,null)
D.bhm=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dhG=w([D.bhm,D.kr,D.kr,P.Xu],x.O)
D.dk3=w([0,0.07,0.9,1],x.F)
D.bZ6=new A.a9(B.a3,B.a8,B.x,D.dhG,D.dk3,null)
D.bZh=new A.a9(B.az,B.aC,B.x,B.R5,null,null)
D.dgq=w([B.b0,B.aV,B.bS],x.O)
D.c_h=new A.a9(B.az,B.aC,B.x,D.dgq,null,null)
D.ckN=w([B.bv,B.b0,B.f2],x.O)
D.ckU=w([B.bu,B.aE,B.jg],x.O)
D.ckW=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bg1=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cr6=w([D.bg1,E.afg],x.O)
D.e8D=new A.v(1,2)
D.eUa=new A.cR(B.aW,D.e8D,3)
D.av1=w([D.eUa],x.A)
D.cyp=w([B.h5,B.cb,B.fc],x.O)
D.cB6=w([B.bK,B.br,B.bm],x.O)
D.bAS=new C.uk("classic","Classic leather","Gold-edged brown leather",D.ay0,E.jZ,E.jZ,"\u2766",B.L,!0,!1,!1,!1)
D.b8Q=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.blS=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cXp=w([D.b8Q,D.blS],x.O)
D.afk=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bAN=new C.uk("ornate","Ornate gold","Double gold border and flourishes",D.cXp,D.afk,D.afk,"\u2726",B.L,!0,!0,!0,!1)
D.bco=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bi9=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cPy=w([D.bco,D.bi9],x.O)
D.bAM=new C.uk("parchment","Parchment","Old paper with dark ink",D.cPy,D.F_,G.iF,"\u2767",B.L,!0,!1,!1,!0)
D.acO=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bkg=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.deK=w([D.acO,D.bkg],x.O)
D.bfB=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bjC=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bAP=new C.uk("minimal","Clean paper","Plain and elegant, like a printed book",D.deK,D.bfB,D.bjC,"",B.L,!0,!0,!1,!0)
D.bAR=new C.uk("midnight","Midnight","Deep blue with silver stars",L.ayj,B.cs,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bAL=new C.uk("emerald","Emerald library","Green cloth, title on the left",A_.avp,E.jZ,B.fK,"\u25c6",B.bi,!0,!1,!1,!1)
D.bkH=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.dcV=w([B.es,D.bkH],x.O)
D.bgE=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bhK=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bAQ=new C.uk("rose","Rose vintage","Burgundy with rose-gold lettering",D.dcV,D.bgE,D.bhK,"\u2740",B.L,!0,!1,!0,!1)
D.dhk=w([B.cp,O.mn],x.O)
D.bAO=new C.uk("modern","Modern","Dark, bold, left-aligned",D.dhk,B.aO,B.c,"",B.bi,!1,!0,!1,!1)
D.a2g=w([D.bAS,D.bAN,D.bAM,D.bAP,D.bAR,D.bAL,D.bAQ,D.bAO],A.ax("O<uk>"))
D.cP4=w([B.bS,B.bj],x.O)
D.bhc=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cPK=w([D.acO,D.bhc],x.O)
D.bck=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cRp=w([D.bck,B.db],x.O)
D.cSV=w([B.b8,B.iW,B.oI],x.O)
D.cTh=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b9s=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.beh=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dk_=w([D.aew,D.b9s,D.beh],x.O)
D.bAT=new C.ul("leather","Leather",D.dk_,"vintage")
D.d_p=w([B.d5,B.Lj,A4.WH],x.O)
D.bB_=new C.ul("midnight","Midnight",D.d_p,"starry")
D.cSW=w([B.ew,B.dX,B.lj],x.O)
D.bAZ=new C.ul("forest","Forest",D.cSW,"story")
D.dlY=w([B.eC,B.es,B.ku],x.O)
D.bAW=new C.ul("burgundy","Burgundy",D.dlY,"royal")
D.cAG=w([B.aE,B.oK,B.nO],x.O)
D.bAX=new C.ul("royal","Royal",D.cAG,"royal")
D.cVg=w([B.br,B.cp,O.mn],x.O)
D.bAU=new C.ul("charcoal","Charcoal",D.cVg,"geo")
D.dk7=w([B.cc,B.dP,B.xq],x.O)
D.bAY=new C.ul("sunset","Sunset",D.dk7,"sunset")
D.dkO=w([B.iW,B.F0,B.WK],x.O)
D.bAV=new C.ul("ocean","Ocean",D.dkO,"band")
D.yX=w([D.bAT,D.bB_,D.bAZ,D.bAW,D.bAX,D.bAU,D.bAY,D.bAV],A.ax("O<ul>"))
D.cVG=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cWg=w([B.ak,B.aJ,B.M],x.O)
D.cXu=w([B.es,B.dX,B.d5,B.fA,B.xt,B.cT,B.k1,B.ee,B.d6],x.O)
D.cXv=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eUb=new A.cR(B.ds,B.dE,8)
D.cXE=w([D.eUb],x.A)
D.cYJ=w([B.bU,B.dP,B.ks],x.O)
D.cZc=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d_l=w([B.bU,B.hj],x.O)
D.d1v=w([B.aM,B.vm,B.xh],x.O)
D.d2o=w([B.bM,B.c8,B.dl,B.aM],x.O)
D.d2T=w([B.iX,B.cc,B.ts],x.O)
D.d3n=w([B.f2,B.cT],x.O)
D.d3V=w([B.ct,B.fl,B.hm],x.O)
D.d45=w([B.aO,B.bj,B.d5],x.O)
D.d4D=w([B.et,B.cS,B.dX],x.O)
D.d4W=w([B.dM,B.d5,B.Lj],x.O)
D.d6e=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a3c=w(["leather","linen","plain","stars","rays"],x.s)
D.bIY=new A.a0(985219,"MaterialIcons",!1)
D.bIw=new A.a0(983781,"MaterialIcons",!1)
D.axH=w([B.alo,B.i8,B.lX,B.i9,D.bIY,B.Gr,B.q3,D.bIw,L.an_,B.ys,B.q5,B.mz],A.ax("O<a0>"))
D.a3h=w(["double","single","corners","none"],x.s)
D.d8Y=w([B.dt,B.bn,B.ee],x.O)
D.d9a=w([],x.t)
D.Cu=w([],x.u)
D.dbv=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ddQ=w([B.aF,B.fl,B.fA],x.O)
D.dfm=w([B.bH,B.n0,B.XF],x.O)
D.dfB=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dzd=new C.lC("construction","Construction","Jobsite & builds",B.yi)
D.dzk=new C.lC("house","Home Build","Houses & rooms",B.vU)
D.dza=new C.lC("grocery","Grocery","Store & pantry",B.a0S)
D.dz9=new C.lC("calculator","Calculations","Math & estimates",B.NG)
D.dzi=new C.lC("lumber","Materials","Lumber & supplies",B.NW)
D.dz6=new C.lC("kitchen","Kitchen","Remodel & meals",Aa.amc)
D.bIt=new A.a0(983756,"MaterialIcons",!1)
D.dzb=new C.lC("landscape","Landscaping","Yard & garden",D.bIt)
D.dz5=new C.lC("plumbing","Plumbing","Pipes & water",B.qd)
D.dzl=new C.lC("electrical","Electrical","Wiring & power",B.ha)
D.dz3=new C.lC("store","Retail Shop","Daily business",B.l2)
D.dz4=new C.lC("paint_remodel","Paint & Remodel","Colors & walls",Ab.a0s)
D.bHS=new A.a0(983311,"MaterialIcons",!1)
D.dzh=new C.lC("roofing","Roofing","Roofs & exteriors",D.bHS)
D.bIG=new A.a0(983986,"MaterialIcons",!1)
D.dz2=new C.lC("warehouse","Warehouse","Storage & stock",D.bIG)
D.dzf=new C.lC("vehicles","Vehicles","Fleet & transport",B.Gs)
D.bFD=new A.a0(62785,"MaterialIcons",!1)
D.dz8=new C.lC("farm","Farm","Crops & livestock",D.bFD)
D.dz7=new C.lC("restaurant","Restaurant","Food & catering",B.ue)
D.dze=new C.lC("tools","Tools","Workshop gear",B.Go)
D.dzj=new C.lC("wallet","Cash & Wallet","Quick spending",B.jK)
D.bGQ=new A.a0(63395,"MaterialIcons",!1)
D.dzg=new C.lC("concrete","Concrete","Foundation work",D.bGQ)
D.dzc=new C.lC("blueprint","Blueprint","Plans & design",Ag.alu)
D.a3K=w([D.dzd,D.dzk,D.dza,D.dz9,D.dzi,D.dz6,D.dzb,D.dz5,D.dzl,D.dz3,D.dz4,D.dzh,D.dz2,D.dzf,D.dz8,D.dz7,D.dze,D.dzj,D.dzg,D.dzc],A.ax("O<lC>"))
D.dg5=w([B.bs,B.bn],x.O)
D.dgR=w([B.ig,B.nV,B.dH],x.O)
D.a3U=w(["top","middle","bottom"],x.s)
D.djh=w([B.cl,B.bj,B.d5],x.O)
D.djU=w([B.aZ,B.cS,B.dX],x.O)
D.dlT=w([B.bK,B.ak],x.O)
D.dlU=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e5Q={top:0,middle:1,bottom:2}
D.dp8=new A.bk(D.e5Q,["Top","Middle","Bottom"],x.n)
D.e5u={double:0,single:1,corners:2,none:3}
D.dpd=new A.bk(D.e5u,["Double line","One line","Corners","None"],x.n)
D.e6H={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dqL=new A.bk(D.e6H,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dqX=new A.bk(B.hZ,[],A.ax("bk<G,+(m,m)>"))
D.e5J={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CH=new A.bk(D.e5J,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<m,G>"))
D.dtM=new F.MY(32,null)
D.dtN=new F.MY(40,null)
D.dtO=new F.MY(46,null)
D.aH_=new C.ask(null)
D.e9B=new A.v(8,14)
D.frU=new A.y("Write a new book",null,B.hK,null,B.L,null,null,null,null,null,null,null)
D.ech=new A.D(B.kX,D.frU,null)
D.anp=new A.ae(B.hE,18,B.c,null,null,null)
D.flf=new A.y("Add",null,B.lE,null,null,null,null,null,null,null,null,null)
D.d2D=w([D.anp,B.qv,D.flf],x.p)
D.eRP=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d2D,null)
D.ecC=new A.D(B.nj,D.eRP,null)
D.ecD=new A.D(E.ahJ,Z.Wa,null)
D.ffe=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foh=new A.y("New Project",null,D.ffe,null,null,null,null,null,null,null,null,null)
D.d6B=w([D.anp,B.ab,D.foh],x.p)
D.eRS=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d6B,null)
D.ecP=new A.D(B.i7,D.eRS,null)
D.fqH=new A.y("Choose your header",null,U.rW,null,null,null,null,null,null,null,null,null)
D.ed9=new A.D(B.hS,D.fqH,null)
D.b7N=new A.fk(2.2,null,null,null,null,B.cT,null,null,null,null)
D.eX2=new A.a7(22,22,D.b7N,null)
D.b5Y=new A.cp(B.A,null,null,D.eX2,null)
D.ede=new A.D(B.YO,D.b5Y,null)
D.bu5=new A.R(14,2,14,6)
D.fEg=new A.y("The top of your book. Tap a design to see it.",null,T.uU,null,null,null,null,null,null,null,null,null)
D.edf=new A.D(D.bu5,D.fEg,null)
D.eeN=new A.iS(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eeQ=new A.iS(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aIe=new A.iS(1,0.9607843137254902,0.48627450980392156,0)
D.It=new A.iS(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zw=new A.iS(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eeW=new A.iS(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.h6x=new C.bh6(null)
D.bp6=new A.mm(D.h6x,null,B.ax,null,null)
D.aLS=new A.cL(0,0,0,0,null,null,D.bp6,null)
D.eDx=new A.z(-42,42)
D.eMv=new A.cz([0,0,1,1])
D.aNc=new A.a8(0,0,520,160)
D.fDP=new A.y("Let the AI write it from your tree",null,B.ki,null,B.L,null,null,null,null,null,null,null)
D.bBw=new A.dq(1,B.co,D.fDP,null)
D.d_k=w([E.a1k,B.ab,D.bBw],x.p)
D.eRu=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d_k,null)
D.fkV=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.dea=w([D.aod,B.ab,D.fkV],x.p)
D.eRE=new A.ci(B.aP,B.b9,B.j,B.m,null,B.p,null,0,D.dea,null)
D.bN4=new A.ae(B.hU,14,B.b0,null,null,null)
D.f9b=new A.H(!0,B.b0,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foI=new A.y("Cashier",null,D.f9b,null,null,null,null,null,null,null,null,null)
D.d77=w([D.bN4,B.bp,D.foI],x.p)
D.eRH=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d77,null)
D.fkW=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bzS=new A.bB(1,B.bg,D.fkW,null)
D.cSo=w([D.anO,B.at,D.bzS],x.p)
D.eRI=new A.ci(B.aP,B.e,B.j,B.m,null,B.p,null,0,D.cSo,null)
D.eVJ=new A.as(16,40)
D.eVO=new A.as(22,64)
D.eVV=new A.as(280,88)
D.eWJ=new A.a7(30,null,null,null)
D.eY0=new A.hQ(2,12,12,1.05,null)
D.fon=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eYJ=new A.b1(D.fon,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.foD=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aPk=new A.b1(D.foD,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fwK=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZc=new A.b1(D.fwK,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fH7=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eZh=new A.b1(D.fH7,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fqF=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eZo=new A.b1(D.fqF,null,null,null,null,null,null,null,null,null,null,null,null,B.fN,!1,null,null,null,B.r,null)
D.fEt=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aPo=new A.b1(D.fEt,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.flw=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eZP=new A.b1(D.flw,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fHR=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.f_z=new A.b1(D.fHR,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fCK=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_Y=new A.b1(D.fCK,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fHb=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f00=new A.b1(D.fHb,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fyj=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f02=new A.b1(D.fyj,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsu=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f03=new A.b1(D.fsu,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsv=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f13=new A.b1(D.fsv,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fop=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f1l=new A.b1(D.fop,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fqj=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f1F=new A.b1(D.fqj,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fxP=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f1V=new A.b1(D.fxP,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fti=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f1W=new A.b1(D.fti,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.f55=new A.H(!0,D.kr,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5v=new A.H(!0,D.kr,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f69=new A.rI(!0,B.rK,null,null,null,null,B.du,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6r=new A.H(!0,D.kr,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7_=new A.H(!0,B.b0,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8e=new A.rI(!0,B.St,null,null,null,null,B.du,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8_=new A.H(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8o=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa_=new A.H(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa3=new A.H(!0,G.iF,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbj=new A.H(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc1=new A.H(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcK=new A.H(!0,B.bS,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcO=new A.H(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fda=new A.H(!0,D.F_,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdj=new A.H(!0,B.b0,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fej=new A.H(!0,B.cT,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feN=new A.H(!0,B.bS,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffc=new A.H(!0,B.b0,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new A.H(!0,B.ak,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgM=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRA=new A.H(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8I=new A.H(!0,B.ak,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fis=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiQ=new A.H(!0,G.iF,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiY=new A.H(!0,G.iF,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjL=new A.y("Themes",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fkm=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f9J=new A.H(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkL=new A.y("Debt receipt",null,D.f9J,null,B.L,null,null,null,null,null,null,null)
D.aRv=new A.H(!0,B.ak,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl2=new A.y("Person who owes",null,D.aRv,null,null,null,null,null,null,null,null,null)
D.flZ=new A.y("Notes",null,B.a8n,null,null,null,null,null,null,null,null,null)
D.fmo=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f8G=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fms=new A.y("Share",null,D.f8G,null,null,null,null,null,null,null,null,null)
D.fnn=new A.y("Move your family trees",null,D.aRA,null,null,null,null,null,null,null,null,null)
D.fo_=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.foC=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fpU=new A.y("Remove this book?",null,B.hw,null,null,null,null,null,null,null,null,null)
D.aS1=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fr2=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fsq=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new A.y("Ribbon bookmark",null,B.iS,null,null,null,null,null,null,null,null,null)
D.fgy=new A.H(!0,B.b0,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu_=new A.y("NGMY.ORG",null,D.fgy,null,B.L,null,null,null,null,null,null,null)
D.fvf=new A.y("Scan family tree QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fd2=new A.H(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw_=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fd2,null,B.L,null,null,null,null,null,null,null)
D.fxc=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxj=new A.y("Thumbnail",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fxV=new A.y("Save the cover",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fyk=new A.y("Your photos",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fyz=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fz6=new A.y("Design your cover",null,U.rW,null,null,null,null,null,null,null,null,null)
D.fzc=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fzf=new A.y("PICTURE",null,H.mR,null,null,null,null,null,null,null,null,null)
D.fzB=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fzD=new A.y("You can undo it right after.",null,T.Jo,null,null,null,null,null,null,null,null,null)
D.fAa=new A.y("Print",null,B.uV,null,null,null,null,null,null,null,null,null)
D.fAy=new A.y("Amount owed",null,D.aRv,null,null,null,null,null,null,null,null,null)
D.fAN=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fBn=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fBq=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fBS=new A.y("Debtor signature",null,B.a8n,null,null,null,null,null,null,null,null,null)
D.fC0=new A.y("Change icon",null,E.aQN,null,null,null,null,null,null,null,null,null)
D.fDc=new A.y("Family tree QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fDF=new A.y("Download",null,B.uV,null,null,null,null,null,null,null,null,null)
D.fDJ=new A.y("Change",null,B.pi,null,null,null,null,null,null,null,null,null)
D.fEz=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fEC=new A.y("WHAT SHOULD IT CHANGE?",null,H.mR,null,null,null,null,null,null,null,null,null)
D.fFb=new A.y("COLOUR",null,H.mR,null,null,null,null,null,null,null,null,null)
D.fFp=new A.y("Do it",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fFs=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fGs=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f43=new A.H(!0,E.jZ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGH=new A.y("Write the first page myself",null,D.f43,null,null,null,null,null,null,null,null,null)
D.fHe=new A.y("Use this header",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fHl=new A.y("Create Project",null,E.aRe,null,null,null,null,null,null,null,null,null)
D.h2B=new C.abr(1,"header")
D.a9H=new C.abr(2,"projects")
D.h2C=new C.abr(3,"cashier")
D.a9I=new C.abr(4,"familyTree")
D.heK=new C.cy1(0,"start")
D.heL=new C.cy2(0,"start")
D.h3_=new C.Yr(null)
D.h3Z=new C.YT(null)
D.dqU=new A.bk(B.hZ,[],A.ax("bk<m,FM>"))
D.d9y=w([],x.E)
D.d9z=w([],x.M)
D.h4v=new C.ben(D.dqU,D.d9y,D.d9z,0,0,null,null)
D.h7b=new C.a_g(null)
D.aap=new C.aJt(0,"projects")
D.aWJ=new C.aJt(1,"cashier")
D.hcq=new C.aJt(2,"familyTree")})()};
(a=>{a["AO80TWnq3DnczAP1M9eraqPdPpc="]=a.current})($__dart_deferred_initializers__);