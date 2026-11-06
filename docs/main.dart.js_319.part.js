((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,A3,A4,A5,A6,T,U,A7,A8,L,A9,H,Aa,Ab,V,W,X,Ac,Ad,Y,Ae,Af,Z,Ag,Ah,Ai,K,Aj,A_,A0,O,P,M,Q,C={
bC1(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bC1=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vl(null,""),$async$bC1)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n2(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qT(t,a1,B.hC,"book",E.Fl),$async$bC1)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ql(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.L1(l)?y.l:y.i)
for(j=J.a3(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cw
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a24(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC1,v)},
agD(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agD=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vl(null,""),$async$agD)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n2(b6)
s=x.S
r=A.dc(c1,0,A.dG(4,"count",s),A.T(c1).c)
q=F.a1S(new A.M(r,new C.fyR(),r.$ti.k("M<ak.E,m>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fyQ(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agD)
case 6:l=c5
k=F.Ql(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.anT(s,D.dqs,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agD)
case 10:l=c5
k=l==null?null:F.Ql(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.u(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.u(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.l2(a5,a2.k("l2<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a3(a9)
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
p=A.cC(new A.bc(h,s),new C.fyS(),s.k("J.E"),p)
p=F.a1S(A.pe(p,3,A.a6(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cw<1>")
b4=A.C(new A.cw(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a24(s,b9),$async$agD)
case 13:b5=c5
for(s=J.a3(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
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
return A.i($async$agD,v)},
hnS(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fI6(e,f),d,null,!0,!0,x.g2)},
anT:function anT(d,e,f){this.a=d
this.b=e
this.c=f},
fyR:function fyR(){},
fyQ:function fyQ(d){this.a=d},
fyS:function fyS(){},
fI6:function fI6(d,e){this.a=d
this.b=e},
bzT(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bzT=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b4(b1,new C.fn3())){u=null
w=1
break}t=B.d.d8(b1,new C.fn4())
s=$.W()
r=new A.qk()
q=A.B7(r,D.aML)
p=A.N()
p.r=B.c.gp(0)
q.b1(D.aML,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.af
o.d=B.bV
o.e=B.hn
n=new C.fn9(t)
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
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aS(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aS(a3,o)}w=4
return A.b(r.oq().zj(520,160),$async$bzT)
case 4:w=3
return A.b(b3.hu(B.h0),$async$bzT)
case 3:b0=b3
u=b0==null?null:J.eU(B.dC.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzT,v)},
fwx(d){return C.i1p(d)},
i1p(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fwx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bfU()
n=d.x!=null&&d.z_(null).length===0
if(d.x!=null)t=n?D.zs:D.Iq
else t=d.gTG()?D.Iq:D.aHM
w=3
return A.b(C.bzT(d.ax),$async$fwx)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amA(s)
r=A.a42(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aHM}else{p.c=C.wN(q,!0)
p.b=n?D.zs:D.Iq}r.a2V(A.fSk(new C.fwz(p,d,new C.fwA(),t,n,o),null,D.bxa,B.wm))
u=r.kc(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwx,v)},
fDa(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fDa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fwx(d),$async$fDa)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gz(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fDa,v)},
fn3:function fn3(){},
fn4:function fn4(){},
fn9:function fn9(d){this.a=d},
fwA:function fwA(){},
fwz:function fwz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fwy:function fwy(){},
fIy(d,e){var w=0,v=A.j(x.H)
var $async$fIy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fIC(new A.cv(null,x.J),e),d,null,!0,!0,x.H),$async$fIy)
case 2:return A.h(null,v)}})
return A.i($async$fIy,v)},
bCu(d,e,f,g){return C.i8T(d,e,f,g)},
i8T(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCu=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.S(D.f0j)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fIu(g,r,f),d,null,!0,!0,x.H),$async$bCu)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCu,v)},
fID(d,e){var w=0,v=A.j(x.H)
var $async$fID=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fIG(new A.cv(null,x.J),e),d,null,!0,!0,x.H),$async$fID)
case 2:return A.h(null,v)}})
return A.i($async$fID,v)},
aXY:function aXY(d,e){this.c=d
this.a=e},
c2a:function c2a(){},
ba5:function ba5(d,e){this.b=d
this.a=e},
fIC:function fIC(d,e){this.a=d
this.b=e},
fIz:function fIz(d){this.a=d},
fIA:function fIA(d,e,f){this.a=d
this.b=e
this.c=f},
fIB:function fIB(d,e){this.a=d
this.b=e},
fIu:function fIu(d,e,f){this.a=d
this.b=e
this.c=f},
fIs:function fIs(d){this.a=d},
fIt:function fIt(d,e,f){this.a=d
this.b=e
this.c=f},
fIG:function fIG(d,e){this.a=d
this.b=e},
fIE:function fIE(d){this.a=d},
fIF:function fIF(d,e,f){this.a=d
this.b=e
this.c=f},
fri(d,e){var w=0,v=A.j(x.y),u,t
var $async$fri=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1D(d),$async$fri)
case 3:t=g
J.nr(t,new C.frj(e))
u=A.ahh(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fri,v)},
frj:function frj(d){this.a=d},
ao4:function ao4(d,e,f){this.c=d
this.d=e
this.a=f},
aCk:function aCk(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dG6:function dG6(d,e){this.a=d
this.b=e},
dFS:function dFS(d,e){this.a=d
this.b=e},
dFV:function dFV(d,e,f){this.a=d
this.b=e
this.c=f},
dFU:function dFU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFT:function dFT(d,e){this.a=d
this.b=e},
dFW:function dFW(d,e){this.a=d
this.b=e},
dFQ:function dFQ(){},
dFR:function dFR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFP:function dFP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFA:function dFA(d){this.a=d},
dFB:function dFB(d,e,f){this.a=d
this.b=e
this.c=f},
dFC:function dFC(d,e){this.a=d
this.b=e},
dFz:function dFz(d){this.a=d},
dFH:function dFH(d,e){this.a=d
this.b=e},
dFy:function dFy(d){this.a=d},
dFI:function dFI(d,e,f){this.a=d
this.b=e
this.c=f},
dFJ:function dFJ(d,e,f){this.a=d
this.b=e
this.c=f},
dFx:function dFx(d,e){this.a=d
this.b=e},
dFK:function dFK(d,e,f){this.a=d
this.b=e
this.c=f},
dFw:function dFw(d,e){this.a=d
this.b=e},
dFL:function dFL(d,e){this.a=d
this.b=e},
dFv:function dFv(d){this.a=d},
dFM:function dFM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFt:function dFt(){},
dFn:function dFn(d){this.a=d},
dFo:function dFo(d){this.a=d},
dFu:function dFu(d,e){this.a=d
this.b=e},
dFN:function dFN(d,e){this.a=d
this.b=e},
dFs:function dFs(d){this.a=d},
dFO:function dFO(d){this.a=d},
dFr:function dFr(){},
dFD:function dFD(d,e){this.a=d
this.b=e},
dFq:function dFq(d){this.a=d},
dFE:function dFE(d,e,f){this.a=d
this.b=e
this.c=f},
dFp:function dFp(d,e){this.a=d
this.b=e},
dFm:function dFm(d,e){this.a=d
this.b=e},
dFF:function dFF(d){this.a=d},
dFG:function dFG(d,e,f){this.a=d
this.b=e
this.c=f},
dG9:function dG9(){},
dGa:function dGa(d,e){this.a=d
this.b=e},
dG7:function dG7(d){this.a=d},
dG8:function dG8(d){this.a=d},
dG3:function dG3(d,e){this.a=d
this.b=e},
dG4:function dG4(d){this.a=d},
dFX:function dFX(d,e,f){this.a=d
this.b=e
this.c=f},
dFY:function dFY(d,e,f){this.a=d
this.b=e
this.c=f},
dFZ:function dFZ(d,e,f){this.a=d
this.b=e
this.c=f},
dG_:function dG_(d,e,f){this.a=d
this.b=e
this.c=f},
dG0:function dG0(d,e,f){this.a=d
this.b=e
this.c=f},
dG1:function dG1(d,e,f){this.a=d
this.b=e
this.c=f},
dG2:function dG2(d,e,f){this.a=d
this.b=e
this.c=f},
dGb:function dGb(){},
dGc:function dGc(){},
dGd:function dGd(){},
dGe:function dGe(d){this.a=d},
dG5:function dG5(d,e){this.a=d
this.b=e},
hjY(d){return B.d.dK(D.a2a,new C.frX(d),new C.frY())},
ui:function ui(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
frX:function frX(d){this.a=d},
frY:function frY(){},
akj:function akj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTK:function aTK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SB:function SB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdG:function bdG(){this.d=$
this.c=this.a=null},
d6g:function d6g(d,e){this.a=d
this.b=e},
d6e:function d6e(d,e){this.a=d
this.b=e},
d6f:function d6f(){},
d6h:function d6h(d,e){this.a=d
this.b=e},
h4H(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nc(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KN(d,e){return C.i03(d,e)},
i03(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KN=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$KN)
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
break}o=J.da(p,x.f)
o=A.cC(o,new C.fub(),o.$ti.k("J.E"),x.B)
n=A.a6(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fuc(),n),n.k("J.E"))
B.d.aZ(o,new C.fud())
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
return A.i($async$KN,v)},
AX(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AX=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$AX)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fHc(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AX,v)},
aPR(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KN(d,e),$async$aPR)
case 2:u=h
t=J.cE(u)
s=t.bg(u,new C.fPm(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AX(d,e,u),$async$aPR)
case 3:return A.h(null,v)}})
return A.i($async$aPR,v)},
bAk(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KN(d,e),$async$bAk)
case 2:u=h
J.nr(u,new C.fra(f))
w=3
return A.b(C.AX(d,e,u),$async$bAk)
case 3:return A.h(null,v)}})
return A.i($async$bAk,v)},
bAy(d,e){return C.i02(d,e)},
i02(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAy=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bAy)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.MX
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
if(D.CC.ai(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3K,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a39,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a35,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cVh,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Hy(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.MX
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.MX
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAy,v)},
Rp(d,e,f){return C.i8p(d,e,f)},
i8p(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rp=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Rp)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ag(),null)),$async$Rp)
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
return A.i($async$Rp,v)},
QT(d,e){return C.i04(d,e)},
i04(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$QT)
case 7:r=g
q=r.tf("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KN(d,e),$async$QT)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lr(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QT)
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
return A.i($async$QT,v)},
afX(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QT(d,e),$async$afX)
case 3:s=g
r=J.a3(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.ay(),$async$afX)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afX)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afX,v)},
a2g(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2g=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QT(d,e),$async$a2g)
case 2:s=h
J.hx(s,f)
w=3
return A.b(A.ay(),$async$a2g)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2g)
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
fub:function fub(){},
fuc:function fuc(){},
fud:function fud(){},
fHc:function fHc(){},
fPm:function fPm(d){this.a=d},
fra:function fra(d){this.a=d},
Hy:function Hy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bNa:function bNa(d){this.a=d},
i8I(d,e,f,g,h,i,j){return A.a4(d,!1).cm(A.e9(new C.fHL(j,i,f,e,h,g),!0,null,x.H))},
QQ(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QQ=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QT(h,g),$async$QQ)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.S(D.aOS)
u=!1
w=1
break}w=4
return A.b(C.hnS(d,f,e),$async$QQ)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afX(h,g),$async$QQ)
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
return A.b(C.AX(h,r,p),$async$QQ)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rp(h,r,new C.Hy("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QQ)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QQ,v)},
fHL:function fHL(d,e,f,g,h,i){var _=this
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
azo:function azo(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d6W:function d6W(d){this.a=d},
d6V:function d6V(d,e){this.a=d
this.b=e},
d6K:function d6K(d,e){this.a=d
this.b=e},
d6H:function d6H(d,e){this.a=d
this.b=e},
d6i:function d6i(d){this.a=d},
d6j:function d6j(d,e){this.a=d
this.b=e},
d6L:function d6L(d){this.a=d},
d6r:function d6r(d){this.a=d},
d6p:function d6p(d){this.a=d},
d6q:function d6q(d){this.a=d},
d6s:function d6s(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6J:function d6J(){},
d6n:function d6n(d){this.a=d},
d6o:function d6o(d,e){this.a=d
this.b=e},
d6t:function d6t(d){this.a=d},
d6u:function d6u(d,e){this.a=d
this.b=e},
d6U:function d6U(d){this.a=d},
d6T:function d6T(d,e){this.a=d
this.b=e},
d6S:function d6S(d){this.a=d},
d6E:function d6E(d){this.a=d},
d6D:function d6D(d){this.a=d},
d6F:function d6F(d){this.a=d},
d6k:function d6k(d,e){this.a=d
this.b=e},
d6G:function d6G(d,e){this.a=d
this.b=e},
d6x:function d6x(d){this.a=d},
d6y:function d6y(d){this.a=d},
d6w:function d6w(){},
d6z:function d6z(d){this.a=d},
d6A:function d6A(d){this.a=d},
d6B:function d6B(d,e){this.a=d
this.b=e},
d6C:function d6C(d,e,f){this.a=d
this.b=e
this.c=f},
d6v:function d6v(d,e){this.a=d
this.b=e},
d6N:function d6N(d){this.a=d},
d6M:function d6M(){},
d6O:function d6O(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6Q:function d6Q(d){this.a=d},
d6R:function d6R(d,e){this.a=d
this.b=e},
d6l:function d6l(d){this.a=d},
d6m:function d6m(d){this.a=d},
Z6:function Z6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be0:function be0(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d8G:function d8G(d){this.a=d},
d8H:function d8H(d){this.a=d},
d8F:function d8F(d){this.a=d},
d8I:function d8I(d){this.a=d},
d8E:function d8E(d){this.a=d},
d8J:function d8J(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8K:function d8K(d,e){this.a=d
this.b=e},
d8C:function d8C(d,e){this.a=d
this.b=e},
d8L:function d8L(d,e){this.a=d
this.b=e},
Z4:function Z4(d,e,f,g,h,i,j){var _=this
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
azp:function azp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d7a:function d7a(d,e){this.a=d
this.b=e},
d79:function d79(d,e){this.a=d
this.b=e},
d7e:function d7e(d){this.a=d},
d7d:function d7d(d,e){this.a=d
this.b=e},
d7b:function d7b(d){this.a=d},
d7c:function d7c(d){this.a=d},
d7f:function d7f(d){this.a=d},
d7g:function d7g(d){this.a=d},
d78:function d78(d,e){this.a=d
this.b=e},
d77:function d77(d,e){this.a=d
this.b=e},
JS:function JS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yl:function Yl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cFP:function cFP(d){this.a=d},
cFQ:function cFQ(){},
cFR:function cFR(d){this.a=d},
bbh:function bbh(d,e,f){this.b=d
this.c=e
this.a=f},
bb8:function bb8(d,e){this.b=d
this.a=e},
uj:function uj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YD:function YD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbf:function bbf(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cZf:function cZf(d,e,f){this.a=d
this.b=e
this.c=f},
cZe:function cZe(d,e){this.a=d
this.b=e},
cZE:function cZE(d){this.a=d},
cZr:function cZr(){},
cZF:function cZF(d){this.a=d},
cZq:function cZq(){},
cZG:function cZG(d,e){this.a=d
this.b=e},
cZp:function cZp(d,e){this.a=d
this.b=e},
cZH:function cZH(d,e){this.a=d
this.b=e},
cZo:function cZo(d,e){this.a=d
this.b=e},
cZI:function cZI(d){this.a=d},
cZn:function cZn(){},
cZJ:function cZJ(d,e){this.a=d
this.b=e},
cZm:function cZm(d,e){this.a=d
this.b=e},
cZK:function cZK(d){this.a=d},
cZz:function cZz(d,e){this.a=d
this.b=e},
cZL:function cZL(d){this.a=d},
cZM:function cZM(d){this.a=d},
cZO:function cZO(d){this.a=d},
cZP:function cZP(d){this.a=d},
cZy:function cZy(d,e){this.a=d
this.b=e},
cZQ:function cZQ(d,e){this.a=d
this.b=e},
aGi:function aGi(d){this.a=d},
bgs:function bgs(d){this.a=d},
b9u:function b9u(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i_1(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahu(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fs0(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a_<1>"),q=q.k("cP<1,m>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.y6)m.push(l===D.a_9?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cE(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cE(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.k1(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k1(h,a2,a2)-A.k1(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cP(new A.a_(a4,new C.frZ(u,f),p),new C.fs_(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i_2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahu(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fs5(v,e)
q=new C.fs3(v)
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
d=A.df(new A.bc(p,d),d.k("J.E"))
n=A.C(d,A.a6(d).k("cq.E"))
B.d.fp(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f4(l,new C.fs4(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hLB(d,e,f,g){var w,v,u=C.i_3(d,e)
if(u<=0||f.length<=u)return new A.adY(!1,D.Cr,f)
if(g.t(0,e.a))return new A.adY(!1,D.Cr,f)
w=A.T(f).c
v=A.dc(f,0,A.dG(u,"count",x.S),w).dM(0)
return new A.adY(!0,A.dc(f,u,null,w).dM(0),v)},
hLC(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahu(d3),d2=d1.length
if(d2===0)return D.h3A
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.ca(0,t.a,new C.d7n(t))}s=new C.d7E(v)
d2=x.h
r=A.U(w,d2)
q=new C.d7w(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d7v(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cd(l.ca(0,k,new C.d7o()),o)}h=new C.d7u(s)
g=new C.d7t(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d7p(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aY(w))
if(a0>d){d=a0
e=t}}a1=A.aY(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.gR
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.d7C(new C.d7y(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gakm(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eC([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.rg(J.dJ(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.cc)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d7m(a2,new C.d7D(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cw<1>")
d2=A.C(new A.cw(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.FJ(o,new A.x(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.K_(c5.a,new A.x(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cw<1>")
d2=A.C(new A.cw(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bQ(0,new C.d7q(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.x(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f4(j,new C.d7r(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d7s())
c6.push(new C.aIo(new A.x(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdL(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hjs(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hdM(d,e,f,g,h,i,j,k,l,m,n){return new C.ZG(k,f,j,e,l,n,m,d,g,h,i,null)},
aBl(d,e,f,g,h,i,j){return new C.bhm(i,d,e,f,j,h,g,null)},
apc:function apc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCT:function aCT(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTr:function dTr(d){this.a=d},
dTq:function dTq(d){this.a=d},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTu:function dTu(d,e){this.a=d
this.b=e},
dTv:function dTv(d){this.a=d},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTs:function dTs(d){this.a=d},
dTx:function dTx(d){this.a=d},
dTw:function dTw(d,e){this.a=d
this.b=e},
ap6:function ap6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCQ:function aCQ(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSS:function dSS(d){this.a=d},
dSQ:function dSQ(d){this.a=d},
dSR:function dSR(d){this.a=d},
dST:function dST(d,e){this.a=d
this.b=e},
dSN:function dSN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSl:function dSl(d){this.a=d},
dSm:function dSm(d,e){this.a=d
this.b=e},
dSA:function dSA(d){this.a=d},
dSy:function dSy(d){this.a=d},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSB:function dSB(d){this.a=d},
dSC:function dSC(d,e){this.a=d
this.b=e},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dSF:function dSF(d,e){this.a=d
this.b=e},
dSE:function dSE(d){this.a=d},
dSG:function dSG(d,e){this.a=d
this.b=e},
dSD:function dSD(d){this.a=d},
dSH:function dSH(d){this.a=d},
dSI:function dSI(d){this.a=d},
dSL:function dSL(d,e){this.a=d
this.b=e},
dS9:function dS9(d,e){this.a=d
this.b=e},
dSa:function dSa(d,e){this.a=d
this.b=e},
dSV:function dSV(d,e,f){this.a=d
this.b=e
this.c=f},
dSP:function dSP(d,e,f){this.a=d
this.b=e
this.c=f},
dSO:function dSO(d){this.a=d},
dSb:function dSb(d){this.a=d},
dSc:function dSc(d){this.a=d},
dSd:function dSd(){},
dSe:function dSe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSi:function dSi(d,e){this.a=d
this.b=e},
dSh:function dSh(d,e){this.a=d
this.b=e},
dSg:function dSg(d){this.a=d},
dSj:function dSj(d,e){this.a=d
this.b=e},
dSf:function dSf(d){this.a=d},
dSU:function dSU(d){this.a=d},
dSv:function dSv(){},
dSw:function dSw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSu:function dSu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSq:function dSq(d,e,f){this.a=d
this.b=e
this.c=f},
dSp:function dSp(d,e,f){this.a=d
this.b=e
this.c=f},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSr:function dSr(d){this.a=d},
dSs:function dSs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSt:function dSt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSx:function dSx(d,e){this.a=d
this.b=e},
dT1:function dT1(){},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT3:function dT3(d){this.a=d},
dT4:function dT4(d,e){this.a=d
this.b=e},
dSY:function dSY(d){this.a=d},
dSW:function dSW(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dT_:function dT_(d,e){this.a=d
this.b=e},
dT0:function dT0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dT5:function dT5(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSk:function dSk(d){this.a=d},
bdJ:function bdJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d7k:function d7k(d){this.a=d},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7l:function d7l(d){this.a=d},
d7i:function d7i(d,e){this.a=d
this.b=e},
fs0:function fs0(d,e){this.a=d
this.b=e},
fs1:function fs1(d){this.a=d},
fs2:function fs2(){},
frZ:function frZ(d,e){this.a=d
this.b=e},
fs_:function fs_(){},
fs5:function fs5(d,e){this.a=d
this.b=e},
fs6:function fs6(d){this.a=d},
fs7:function fs7(){},
fs3:function fs3(d){this.a=d},
fs4:function fs4(d,e){this.a=d
this.b=e},
K_:function K_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FJ:function FJ(d,e){this.a=d
this.b=e},
bdL:function bdL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d7n:function d7n(d){this.a=d},
d7E:function d7E(d){this.a=d},
d7w:function d7w(d){this.a=d},
d7x:function d7x(){},
d7v:function d7v(d){this.a=d},
d7o:function d7o(){},
d7u:function d7u(d){this.a=d},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7p:function d7p(d){this.a=d},
d7y:function d7y(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d7z:function d7z(d){this.a=d},
d7A:function d7A(d){this.a=d},
d7B:function d7B(){},
d7C:function d7C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d7D:function d7D(){},
d7m:function d7m(d,e,f,g,h,i,j,k,l,m){var _=this
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
d7q:function d7q(d,e){this.a=d
this.b=e},
d7r:function d7r(d){this.a=d},
d7s:function d7s(){},
aIo:function aIo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdM:function bdM(d,e){this.b=d
this.a=e},
d7F:function d7F(){},
d7G:function d7G(d){this.a=d},
d7H:function d7H(d){this.a=d},
d7I:function d7I(){},
bhn:function bhn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcR:function bcR(d,e){this.b=d
this.a=e},
buY:function buY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f92:function f92(d){this.a=d},
bkA:function bkA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eKU:function eKU(d){this.a=d},
eKT:function eKT(d,e){this.a=d
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
aBj:function aBj(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dns:function dns(d,e){this.a=d
this.b=e},
dnr:function dnr(d){this.a=d},
dnp:function dnp(d){this.a=d},
dnq:function dnq(d){this.a=d},
dnB:function dnB(d){this.a=d},
dnC:function dnC(d){this.a=d},
dnA:function dnA(d,e){this.a=d
this.b=e},
dnD:function dnD(){},
dnG:function dnG(d){this.a=d},
dnz:function dnz(d,e){this.a=d
this.b=e},
dnF:function dnF(){},
dnH:function dnH(d){this.a=d},
dny:function dny(d,e){this.a=d
this.b=e},
dnI:function dnI(d){this.a=d},
dnx:function dnx(d){this.a=d},
dnJ:function dnJ(d){this.a=d},
dnw:function dnw(d){this.a=d},
dnK:function dnK(d){this.a=d},
dnv:function dnv(d){this.a=d},
dnL:function dnL(d){this.a=d},
dnu:function dnu(d){this.a=d},
dnM:function dnM(d){this.a=d},
dnt:function dnt(d,e){this.a=d
this.b=e},
dnE:function dnE(d){this.a=d},
acP:function acP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhm:function bhm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acO:function acO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhl:function bhl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnN:function dnN(d){this.a=d},
dnO:function dnO(d,e){this.a=d
this.b=e},
aBk:function aBk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHq:function aHq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acQ:function acQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnX:function dnX(d){this.a=d},
JO:function JO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h8D(d){var w=d.R,v=x.N
return w.j9(w,new C.c8I(),v,v)},
hD8(d){var w=d.bx
if(w>=0)return w
return 5},
h8F(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h8D(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h8E(d,e){var w=C.h8F(d,e)
if(w!=null&&w.cd(new A.S(Date.now(),0,!1)))return!0
return!1},
hD9(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.h8D(d),w,w)
u=C.h8F(d,e)
t=u!=null&&u.cd(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bS(A.dD(30,0,0,0,0,0).a).a5().ac())
d.R=v},
aZp(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZp=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lj(t,B.Id),$async$aZp)
case 3:if(l){u=!0
w=1
break}u=A.kV(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Id,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZp,v)},
c8I:function c8I(){},
hD6(){var w,v=$.pu(),u=J.e6(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.hk(u)},
Is(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Is=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Is)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Is)
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
return A.i($async$Is,v)},
a6R(d){return C.hD7(d)},
hD7(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6R=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6R)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hH("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cG,null),$async$a6R)
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
return A.i($async$a6R,v)},
c8H(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c8H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Is(),$async$c8H)
case 3:t=m.jN(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a3(q)
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
return A.i($async$c8H,v)},
Np(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Np=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c8H(d),$async$Np)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Is(),$async$Np)
case 6:s=f
r=J.a3(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,t,o)
w=9
return A.b(C.a6R(s),$async$Np)
case 9:case 8:u=t
w=1
break
case 5:n=C.hD6()
w=10
return A.b(C.Is(),$async$Np)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a6R(s),$async$Np)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
aZo(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Is(),$async$aZo)
case 3:t=f
for(s=J.dl(t),r=s.gdQ(t),r=r.dM(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6R(t),$async$aZo)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZo,v)},
a6S(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6S=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apb(d,e),$async$a6S)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Np(d),$async$a6S)
case 7:w=4
break
case 5:w=8
return A.b(C.aZo(d),$async$a6S)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6S,v)},
ap5(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ap5=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apb(f,e),$async$ap5)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$ap5)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Is(),$async$ap5)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a3(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap5,v)},
aZn(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZn)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Is(),$async$aZn)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a3(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZn,v)},
hDa(){var w,v=$.pu(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.hk(u)},
ap8(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ap8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ap8)
case 3:if(!g){u=null
w=1
break}t=C.hDa()
w=4
return A.b(A.UW(),$async$ap8)
case 4:s=g
r=B.dK.aK(B.S.ao(d.eT(),null))
r=B.cJ.gct().aK(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a6T(s),$async$ap8)
case 5:p=e?999:2
u=new A.a_R("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap8,v)},
ap7(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ap7=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UW(),$async$ap7)
case 3:p=a0
o=J.a3(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a3(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aZn(J.k(l==null?"":l),j),$async$ap7)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cz(0,B.cF.aK(t))
s=C.h8G(r)}catch(f){q=A.ab(f)
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
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=5
return A.b(A.a6T(p),$async$ap7)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap7,v)},
h8G(d){var w,v,u,t,s=null
try{w=B.S.aL(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hDc(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fTo(d){var w=0,v=A.j(x.m),u,t,s
var $async$fTo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ap7(t[1])
w=1
break}u=null
w=1
break}u=C.h8G(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTo,v)},
hDc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cC(u,new C.c8K(),u.$ti.k("J.E"),x.k)
t=A.a6(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c8L(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.U(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jN(p),t=t.gae(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.da(l,u)
n=A.cC(n,new C.c8M(),n.$ti.k("J.E"),o)
k=A.a6(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c8N(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ap9(h,w,s,r,q)},
apb(d,e){var w=0,v=A.j(x.y),u,t
var $async$apb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ng(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AM(d),$async$apb)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apb,v)},
c8T(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c8T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AM(d),$async$c8T)
case 3:t=s.b6(f,new C.c8U(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.c8V())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8T,v)},
UX(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apb(e,d),$async$UX)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Np(e),$async$UX)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AM(e),$async$UX)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.c8R(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a3(r)
if(t.gal(r)){u=null
w=1
break}t=t.dB(r,new C.c8S(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KN(e,o),$async$UX)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.ap9(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UX,v)},
aZs(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZs=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UX(d,e,f,g),$async$aZs)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gp(A.JW(q.eT(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZs,v)},
aZr(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZr=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UX(d,e,f,g),$async$aZr)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ap8(r,f),$async$aZr)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFr(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZr,v)},
UY(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UY=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fTo(a0),$async$UY)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ap5(g.a,d,e,f,s,r),$async$UY)
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
return A.b(C.bAa(e,j),$async$UY)
case 12:case 11:w=13
return A.b(C.ahf(e,j,s),$async$UY)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.AX(e,i,h),$async$UY)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bo9(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UY,v)},
ap9:function ap9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8P:function c8P(){},
c8Q:function c8Q(){},
c8O:function c8O(){},
c8K:function c8K(){},
c8L:function c8L(){},
c8M:function c8M(){},
c8N:function c8N(){},
c8U:function c8U(){},
c8V:function c8V(){},
c8R:function c8R(d){this.a=d},
c8S:function c8S(d){this.a=d},
h0S(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hD(d,new C.apa(w,e,g,i,f,h,null),!0,null,x.H)},
d7h(d,e,f,g,h,i,j,k){return new C.bdI(i,e,k,j,g,f,h,d,null)},
apa:function apa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCS:function aCS(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dTe:function dTe(d){this.a=d},
dTf:function dTf(d,e,f){this.a=d
this.b=e
this.c=f},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTc:function dTc(d,e){this.a=d
this.b=e},
dTd:function dTd(d,e){this.a=d
this.b=e},
dTi:function dTi(d){this.a=d},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTg:function dTg(){},
dTm:function dTm(d){this.a=d},
dTn:function dTn(d,e){this.a=d
this.b=e},
dTl:function dTl(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdK:function bdK(d,e,f){this.d=d
this.e=e
this.a=f},
ac6:function ac6(d,e,f){this.c=d
this.d=e
this.a=f},
bdI:function bdI(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdN:function bdN(d,e,f,g,h){var _=this
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
aCR:function aCR(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT7:function dT7(d){this.a=d},
dT8:function dT8(d){this.a=d},
dT9:function dT9(d){this.a=d},
dTa:function dTa(d){this.a=d},
a_1:function a_1(d){this.a=d},
biN:function biN(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dTo:function dTo(d,e){this.a=d
this.b=e},
aXX(d,e){return new C.aXW(d,e,null)},
aXW:function aXW(d,e,f){this.c=d
this.d=e
this.a=f},
i1u(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b3(d,11)},
i8S(d){return A.bQ(B.K,null,new C.fId(new C.tR(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
haz(d,e){return new C.as5(e,d,null)},
aPy(d,e,f,g,h,i,j){var w=C.i1u(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5W(w,!0,null),null),B.aq)
return I.aOV(e,B.bU,f,g,h,i,j)},
lA:function lA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5W:function a5W(d,e,f){this.c=d
this.d=e
this.a=f},
biu:function biu(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b2$=e
_.c=_.a=null},
dFe:function dFe(d){this.a=d},
dFf:function dFf(){},
dFg:function dFg(d,e){this.a=d
this.b=e},
bit:function bit(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fId:function fId(d){this.a=d},
fIc:function fIc(d,e){this.a=d
this.b=e},
fIb:function fIb(d,e){this.a=d
this.b=e},
fIa:function fIa(d,e){this.a=d
this.b=e},
as5:function as5(d,e,f){this.c=d
this.d=e
this.a=f},
cgo:function cgo(d,e){this.a=d
this.b=e},
aKJ:function aKJ(){},
i8D(d){var w=null
return A.ca(w,w,!0,w,new C.fHA(),d,w,!0,!0,x.e2)},
i9N(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fP3(h,g,f,e),d,w,!0,!0,x.N)},
i8F(d,e){var w=null
return A.ca(w,w,!0,w,new C.fHF(e),d,w,!0,!0,x.dY)},
i8E(d){var w=null
return A.ca(w,w,!0,w,new C.fHE(),d,w,!0,!0,x.c5)},
aSw:function aSw(d,e){this.a=d
this.b=e},
aSv:function aSv(d){this.a=d},
aQu:function aQu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHA:function fHA(){},
fP3:function fP3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHF:function fHF(d){this.a=d},
fHE:function fHE(){},
YF:function YF(d,e){this.c=d
this.a=e},
ay9:function ay9(){var _=this
_.d=$
_.c=_.a=_.e=null},
d_1:function d_1(d){this.a=d},
d_2:function d_2(d){this.a=d},
d_0:function d_0(d,e){this.a=d
this.b=e},
d_3:function d_3(d){this.a=d},
d_4:function d_4(d){this.a=d},
YE:function YE(d){this.a=d},
ay8:function ay8(){this.d=$
this.c=this.a=null},
cZY:function cZY(d){this.a=d},
cZZ:function cZZ(d){this.a=d},
d__:function d__(d){this.a=d},
Yc:function Yc(d){this.a=d},
awT:function awT(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cxC:function cxC(){},
cxI:function cxI(d){this.a=d},
cxJ:function cxJ(d){this.a=d},
cxK:function cxK(d){this.a=d},
cxH:function cxH(){},
cxL:function cxL(d){this.a=d},
cxM:function cxM(d){this.a=d},
cxG:function cxG(){},
cxN:function cxN(d,e){this.a=d
this.b=e},
cxF:function cxF(d,e){this.a=d
this.b=e},
cxD:function cxD(d,e){this.a=d
this.b=e},
cxO:function cxO(d){this.a=d},
cxE:function cxE(){},
cxP:function cxP(d){this.a=d},
a0L:function a0L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buP:function buP(){this.d=$
this.c=this.a=null},
f8u:function f8u(d,e){this.a=d
this.b=e},
f8v:function f8v(d){this.a=d},
f8w:function f8w(d,e){this.a=d
this.b=e},
abb:function abb(d,e){this.a=d
this.b=e},
Fw:function Fw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
buN:function buN(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
f8s:function f8s(d,e){this.a=d
this.b=e},
awM:function awM(d,e){this.c=d
this.a=e},
buO:function buO(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
f8t:function f8t(d){this.a=d},
buM:function buM(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aML:function aML(){},
aMM:function aMM(){},
bC6(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bm(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oI(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fGb(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aX(B.o.u(s),2,"0")
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XC(A.d0(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPa(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPa=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hR().kT(85,1280,B.eG),$async$aPa)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fe(),$async$aPa)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hay()
w=9
return A.b(C.cgn(q,r),$async$aPa)
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
return A.i($async$aPa,v)},
aPw(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPw=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cgk(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().Lz(p,!0,null,i).d7(0,B.fK),$async$aPw)
case 9:n=a1
w=10
return A.b(n.lC(),$async$aPw)
case 10:m=a1
w=11
return A.b(J.a2t(m).hu(B.h0),$async$aPw)
case 11:l=a1
J.a2t(m).q()
if(l==null){w=8
break}i=J.eU(B.dC.gaP(l))
k="data:image/png;base64,"+B.cJ.gct().aK(i)
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
return A.i($async$aPw,v)},
fGb:function fGb(){},
tR:function tR(d){this.a=d},
as4:function as4(d,e,f){this.c=d
this.d=e
this.a=f},
aEj:function aEj(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eI3:function eI3(d,e){this.a=d
this.b=e},
eHV:function eHV(d){this.a=d},
eHW:function eHW(d){this.a=d},
eI1:function eI1(d,e){this.a=d
this.b=e},
eI0:function eI0(d,e){this.a=d
this.b=e},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d){this.a=d},
eI_:function eI_(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHU:function eHU(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
eHS:function eHS(d){this.a=d},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI5:function eI5(d,e){this.a=d
this.b=e},
eHR:function eHR(d,e){this.a=d
this.b=e},
hnh(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fGc(d,e,f){var w=0,v=A.j(x.N),u
var $async$fGc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hnh(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGc,v)},
bC8(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bC8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fGc(!0,d,e),$async$bC8)
case 4:w=3
return A.b(r.as2(g,d,e.a),$async$bC8)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aK(B.S.ao(C.hnh(d,e,null),null))
u="NGMY_WS:"+B.km.gct().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC8,v)},
hf8(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h0x(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d1(s,"NGMYWSSYNC2|"))return!0
if(J.d1(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d1(s,"{"))try{w=B.S.aL(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i6x(d){var w,v,u,t=C.hf8(d)
if(t==null)return null
if(C.h0x(t))return t
w=B.a.cK(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b3(t,w))
if(C.h0x(v))return v}u=B.a.cK(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b3(t,u))
if(C.h0x(v))return v}return null},
h0w(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d1(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d1(q,"NGMY_WS:")){v=B.cf.cz(0,B.cF.aK(J.n6(q,8)))
w=t.a(B.S.aL(0,v,r))}else w=t.a(B.S.aL(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fVZ(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bC7(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bC7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.as1(t[1]),$async$bC7)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h0w(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h0w(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC7,v)},
h0v(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lk(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBF(){var w=0,v=A.j(x.o),u,t
var $async$bBF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GA(),$async$bBF)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h0w(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBF,v)},
hoe(d,e,f,g){return A.bQ(B.K,null,new C.fOU(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fOU:function fOU(d,e,f){this.a=d
this.b=e
this.c=f},
ada:function ada(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eI7:function eI7(d,e){this.a=d
this.b=e},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e){this.a=d
this.b=e},
eIa:function eIa(d,e){this.a=d
this.b=e},
eI6:function eI6(d){this.a=d},
arZ:function arZ(d,e,f){this.c=d
this.d=e
this.a=f},
bk5:function bk5(){var _=this
_.c=_.a=_.e=_.d=null},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d){this.a=d},
as3:function as3(d){this.a=d},
aEi:function aEi(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHP:function eHP(d){this.a=d},
eHO:function eHO(d){this.a=d},
hGo(d,e,f,g,h){return new C.O1(h,g,d,e,f,null)},
aJ5:function aJ5(d,e){this.a=d
this.b=e},
O1:function O1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEk:function aEk(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eIx:function eIx(){},
eIt:function eIt(d,e){this.a=d
this.b=e},
eIu:function eIu(d){this.a=d},
eIe:function eIe(d){this.a=d},
eIc:function eIc(d){this.a=d},
eId:function eId(d){this.a=d},
eIn:function eIn(d,e){this.a=d
this.b=e},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIm:function eIm(d,e,f){this.a=d
this.b=e
this.c=f},
eIi:function eIi(d,e,f){this.a=d
this.b=e
this.c=f},
eIg:function eIg(d){this.a=d},
eIh:function eIh(d){this.a=d},
eIj:function eIj(d){this.a=d},
eIA:function eIA(d){this.a=d},
eIz:function eIz(d){this.a=d},
eIB:function eIB(d){this.a=d},
eIy:function eIy(d){this.a=d},
eIb:function eIb(d){this.a=d},
eIf:function eIf(d,e){this.a=d
this.b=e},
eIw:function eIw(d,e){this.a=d
this.b=e},
eIv:function eIv(d,e){this.a=d
this.b=e},
eIq:function eIq(d){this.a=d},
eIr:function eIr(d){this.a=d},
eIs:function eIs(d,e){this.a=d
this.b=e},
eIp:function eIp(d,e){this.a=d
this.b=e},
eIo:function eIo(d,e,f){this.a=d
this.b=e
this.c=f},
bwu:function bwu(){},
AD(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afF(d,e,f){return C.hW2(d,e,f)},
hW2(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afF=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$afF)
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
return A.i($async$afF,v)},
afE(d,e){return C.hW1(d,e)},
hW1(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afE=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afE)
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
return A.i($async$afE,v)},
hUO(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.SG(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzb(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzb=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1F(q),$async$bzb)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPw(q,!1),$async$bzb)
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
return A.i($async$bzb,v)},
hu8(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r_(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r_(p,J.k(u==null?"":u),1,o,q)},
fVZ(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cC(w,new C.cx_(),w.$ti.k("J.E"),x.Q)
v=A.a6(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cx0(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lk(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hZY(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.a_9
case"female":case"f":return D.ajQ
default:return D.y6}},
hjZ(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h4I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hZY(v==null?j:J.k(v))
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
return new C.i0(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i__(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.MY
case"viewer":return D.kx
default:return D.tP}},
i_0(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gq(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAr(d,e){return B.a.i(e.toLowerCase())===C.Gq(d,e)&&d.y!==D.kx},
u2(d,e){var w,v=d.y
if(v===D.kx)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gq(d,e))return!0
if(v===D.MY)return!0
v=d.e
return new A.M(v,A.h0C(),A.T(v).k("M<1,m>")).t(0,w)},
hZp(d){return J.dJ(d,new C.fr0()).gM(0)},
fPt(d){var w=0,v=A.j(x.y),u,t
var $async$fPt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AM(d),$async$fPt)
case 3:u=t.qW(f,new C.fPu(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fPt,v)},
bAa(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AM(d),$async$bAa)
case 3:t=g
if(J.qW(t,new C.foW(e))){w=1
break}if(C.hZp(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAa,v)},
akl(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.da(n,x.f)
w=A.cC(w,new C.bNb(),w.$ti.k("J.E"),x.P)
v=A.a6(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bNc(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bNd(),x.N)
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
return new C.kD(l,w,v,!s,t,m,r,q,p,C.i__(o==null?null:J.k(o)))},
hk7(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CR(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rm(d),$async$CR)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$CR)
case 4:t=f
w=5
return A.b(t.a5Z(0),$async$CR)
case 5:w=6
return A.b(C.ffX(t,l),$async$CR)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a3(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hfJ(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oH(l,n),$async$CR)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hfJ(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oH(l,n),$async$CR)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CR,v)},
ffX(d,e){return C.hSf(d,e)},
hSf(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ffX=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a3(a3)
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
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AD(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aL(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fVZ(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AD(a9)+"_"+n))
i=C.hUO(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1F(h),$async$ffX)
case 17:g=b1
if(g!=null){i=i.SG(g)
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
case 8:J.Rx(q,new C.ffY())
if(p&&J.ad(q)!==0)C.oH(a9,q)
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
return A.i($async$ffX,v)},
bAB(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rm(d),$async$bAB)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CR(r),$async$bAB)
case 4:t=p.aW(g)
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
return A.i($async$bAB,v)},
hfJ(d){var w,v,u,t
try{w=B.S.aL(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cC(v,new C.fbP(),v.$ti.k("J.E"),x.i)
u=A.a6(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fbQ(),u),u.k("J.E"))
B.d.aZ(v,new C.fbR())
return v}catch(t){v=A.a([],x.D)
return v}},
oH(d,e){return C.i8t(d,e)},
i8t(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oH=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rm(b2),$async$oH)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$oH)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AD(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aL(0,p,null)),new C.fHr(),a2).fM(0)
a2=J.b6(b3,new C.fHs(),a2).c0(0,new C.fHt())
n=A.df(a2,a2.$ti.k("J.E"))
a2=o,a2=A.em(a2,a2.r,A.a6(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.AD(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8a(l),$async$oH)
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
return A.b(C.a8a(a5==null?null:J.k(a5)),$async$oH)
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
return A.b(C.afE(r,"ngmy_worksheet_item_v3_"+C.AD(a8)+"_"+m),$async$oH)
case 29:w=30
return A.b(C.afE(r,"ngmy_worksheet_thumb_v3_"+C.AD(a8)+"_"+m),$async$oH)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzb(h),$async$oH)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afF(r,"ngmy_worksheet_thumb_v3_"+C.AD(a8)+"_"+a4,f),$async$oH)
case 40:g=i.SG(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afE(r,"ngmy_worksheet_thumb_v3_"+C.AD(a8)+"_"+a4),$async$oH)
case 41:g=i.SG(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afE(r,"ngmy_worksheet_thumb_v3_"+C.AD(a8)+"_"+a4),$async$oH)
case 42:case 34:a4=i.a
w=43
return A.b(C.afF(r,"ngmy_worksheet_item_v3_"+C.AD(a8)+"_"+a4,B.S.ao(g.ag(),null)),$async$oH)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.cd(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afF(r,"ngmy_worksheets_index_v3_"+C.AD(a8),B.S.ao(q,null)),$async$oH)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fHu(q))
a4=a3.$ti.k("cP<1,a5<m,@>>")
a7=A.C(new A.cP(a3,new C.fHv(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afF(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oH)
case 45:w=46
return A.b(J.hte(r),$async$oH)
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
return A.i($async$oH,v)},
Ld(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Ld=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CR(d),$async$Ld)
case 3:t=g
s=J.cE(t)
r=s.bg(t,new C.fPs(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.oH(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ld,v)},
bAo(d,e){var w=0,v=A.j(x.H),u
var $async$bAo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CR(d),$async$bAo)
case 2:u=g
J.nr(u,new C.fru(e))
w=3
return A.b(C.oH(d,u),$async$bAo)
case 3:return A.h(null,v)}})
return A.i($async$bAo,v)},
Gs(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Gs)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aL(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cC(j,new C.fuh(),j.$ti.k("J.E"),x.k)
s=A.a6(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fui(),s),s.k("J.E"))
B.d.aZ(r,new C.fuj())
k=r}}catch(h){}w=4
return A.b(C.fcz(d),$async$Gs)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hSC(k,p,d)
j=A.T(o)
s=j.k("M<1,a5<m,@>>")
s=A.C(new A.M(o,new C.fuk(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qz(d,o),$async$Gs)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.ful(d),j),j.k("J.E"))
if(m.length!==0)C.aO3(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gs,v)},
fHd(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fHd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qz(d,e),$async$fHd)
case 3:t=J.dJ(e,new C.fHe(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aO3(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHd,v)},
a2m(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a2m)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aL(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cC(m,new C.fPn(),m.$ti.k("J.E"),x.k)
t=A.a6(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fPo(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qh(o,new C.fPp(e))
if(B.a.i(e.x).length===0&&C.u2(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDy(e.y===D.kx?D.kx:D.tP,m)}else p=e
if(q===-1)J.py(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.Qz(d,o),$async$a2m)
case 3:w=C.u2(p,d)?4:5
break
case 4:w=6
return A.b(C.aO2(C.Gq(p,d),p),$async$a2m)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2m,v)},
aOe(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gs(d),$async$aOe)
case 2:u=g
t=J.cE(u)
s=A.rg(t.eP(u,new C.frb(e)))
t.bs(u,new C.frc(e))
w=3
return A.b(C.Qz(d,u),$async$aOe)
case 3:w=s!=null&&C.bAr(s,d)?4:5
break
case 4:w=6
return A.b(C.fbT(e),$async$aOe)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOe,v)},
ahu(d){var w=d.f,v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fPy(),v),v.k("J.E"))
return w},
fZb(d,e){var w,v=d.f,u=A.rg(new A.a_(v,new C.fqG(e),A.T(v).k("a_<1>")))
v=C.ahu(d)
w=A.T(v).k("a_<1>")
v=A.C(new A.a_(v,new C.fqH(e,u),w),w.k("J.E"))
B.d.aZ(v,new C.fqI())
return v},
i_3(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hoi(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.fZb(d,u),new C.fP4(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i0z(d,e){var w
if(e==null||e.length===0)return 1
w=C.fZb(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fv3(),A.T(w).k("M<1,H>")).fn(0,B.x6)+1},
i8m(d){var w,v=C.ahu(d)
if(v.length===0)return null
w=new A.a_(v,new C.fH7(),A.T(v).k("a_<1>"))
if(!w.gal(0))return w.gH(0)
return B.d.gH(v)},
hZZ(d){return A.F(["id",d.a,"name",d.b,"gender",C.hjZ(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i0v(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aY(a0)
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
d=q.aDt(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cJ0(a1,w,a3.d,a2.y,s,a0,v)},
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
break}p=J.da(t,x.f)
p=A.cC(p,new C.fue(),p.$ti.k("J.E"),x.k)
s=A.a6(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fuf(),s),s.k("J.E"))
B.d.aZ(p,new C.fug())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AM,v)},
ahf(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahf=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tP:D.kx
a7=C.Gq(b2,b3)
w=2
return A.b(C.AM(b1),$async$ahf)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bg(a8,new C.fH2(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAa(b1,b2),$async$ahf)
case 5:case 4:if(b0===-1){u=b2.aDy(a6,a7)
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
s.n(0,m,l.aDt(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tP:D.kx
u=t.yC(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qz(b1,a8),$async$ahf)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aO2(B.a.i(b3.toLowerCase()),u),$async$ahf)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahf,v)},
hg7(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("M<1,a5<m,@>>"),k=A.C(new A.M(m,C.hnq(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
hg8(d,e){var w=new A.S(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("M<1,a5<m,@>>")
u=A.C(new A.M(u,C.hnq(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hQd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a3(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akl(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h0C(),A.T(j).k("M<1,m>")).c0(0,new C.fcm())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tP
else s=B.d.t(t,u)?D.MY:D.kx
return w.aDy(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akl(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cC(h,new C.fcn(),h.$ti.k("J.E"),x.P)
p=A.a6(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.fco(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fcp(),x.N).c0(0,new C.fcq())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tP
else s=B.d.t(t,u)?D.MY:D.kx
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
return new C.kD(h,r,p,!m,t,o,l,j,v,s)},
fcz(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fcz=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fcD()
h=x.N
g=x.z
w=7
return A.b(A.iN(A.a([A.lq("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.lq("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.lq("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.U),$async$fcz)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h4(l,o)
J.h4(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a6(l).k("bc<2>")
h=A.cC(new A.bc(l,h),new C.fcA(a0),h.k("J.E"),x.k)
l=A.a6(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.fcB(),l),l.k("J.E"))
B.d.aZ(l,new C.fcC())
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
return A.i($async$fcz,v)},
hSC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a3(e)
if(j.gal(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dB(e,new C.fgD(),v).c0(0,new C.fgE())
t=A.df(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gq(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kx){m=q.e
m=!new A.M(m,A.h0C(),A.T(m).k("M<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i0v(l,v)
o=C.Gq(k,w)
p=v.d
s.n(0,u,o===w?k.bbw(p,D.tP):k.bbw(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aZ(j,new C.fgF())
return j},
Qz(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$Qz)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fjl(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$Qz)
case 3:return A.h(null,v)}})
return A.i($async$Qz,v)},
aO2(d,e){return C.hXN(d,e)},
hXN(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aO2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lS("family_trees",A.a([C.hg7(e,d)],p),null,B.cG),$async$aO2)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lS("family_trees",A.a([C.hg8(e,d)],p),null,B.cG),$async$aO2)
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
return A.i($async$aO2,v)},
aO3(d,e){return C.hXO(d,e)},
hXO(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aO3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("M<1,a5<m,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.foe(d),n),m)
r=l
w=7
return A.b(A.lS("family_trees",r,null,B.cG),$async$aO3)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fof(d),n),m)
p=k
w=8
return A.b(A.lS("family_trees",p,null,B.cG),$async$aO3)
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
return A.i($async$aO3,v)},
fbT(d){return C.hPy(d)},
hPy(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fbT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QX("family_trees",A.F(["id",d],x.N,x.z),null,B.cG),$async$fbT)
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
return A.i($async$fbT,v)},
r_:function r_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lk:function lk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cx2:function cx2(){},
cx1:function cx1(){},
cx_:function cx_(){},
cx0:function cx0(){},
Hz:function Hz(d,e){this.a=d
this.b=e},
i0:function i0(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
akk:function akk(d,e){this.a=d
this.b=e},
fr0:function fr0(){},
fPu:function fPu(d){this.a=d},
foW:function foW(d){this.a=d},
kD:function kD(d,e,f,g,h,i,j,k,l,m){var _=this
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
bNf:function bNf(){},
bNe:function bNe(){},
bNb:function bNb(){},
bNc:function bNc(){},
bNd:function bNd(){},
ffY:function ffY(){},
fbP:function fbP(){},
fbQ:function fbQ(){},
fbR:function fbR(){},
fHr:function fHr(){},
fHs:function fHs(){},
fHt:function fHt(){},
fHu:function fHu(d){this.a=d},
fHv:function fHv(){},
fPs:function fPs(d){this.a=d},
fru:function fru(d){this.a=d},
fuh:function fuh(){},
fui:function fui(){},
fuj:function fuj(){},
fuk:function fuk(){},
ful:function ful(d){this.a=d},
fHe:function fHe(d){this.a=d},
fPn:function fPn(){},
fPo:function fPo(){},
fPp:function fPp(d){this.a=d},
frb:function frb(d){this.a=d},
frc:function frc(d){this.a=d},
fPy:function fPy(){},
fqG:function fqG(d){this.a=d},
fqH:function fqH(d,e){this.a=d
this.b=e},
fqI:function fqI(){},
fP4:function fP4(d){this.a=d},
fv3:function fv3(){},
fH7:function fH7(){},
fue:function fue(){},
fuf:function fuf(){},
fug:function fug(){},
fH2:function fH2(d){this.a=d},
fcm:function fcm(){},
fcn:function fcn(){},
fco:function fco(){},
fcp:function fcp(){},
fcq:function fcq(){},
fcD:function fcD(){},
fcE:function fcE(d){this.a=d},
fcA:function fcA(d){this.a=d},
fcB:function fcB(){},
fcC:function fcC(){},
fgD:function fgD(){},
fgE:function fgE(){},
fgF:function fgF(){},
fjl:function fjl(){},
foe:function foe(d){this.a=d},
fof:function fof(d){this.a=d},
cx3:function cx3(d,e){this.a=d
this.b=e},
cx4:function cx4(d,e){this.a=d
this.b=e},
aGn:function aGn(d,e,f){this.a=d
this.b=e
this.c=f},
b7Z:function b7Z(){this.b=this.a=0},
b7Y:function b7Y(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
buQ:function buQ(){},
wN(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcv()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aX(B.o.u(w.gnd()),2,"0")+":"+B.a.aX(B.o.u(w.gGd()),2,"0")},
hGl(){var w,v=$.pu(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.hk(u)},
as_(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$as_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$as_)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$as_)
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
return A.i($async$as_,v)},
as0(d){return C.hGm(d)},
hGm(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$as0=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$as0)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hH("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cG,null),$async$as0)
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
return A.i($async$as0,v)},
as2(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$as2=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$as2)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hGl()
w=4
return A.b(C.as_(),$async$as2)
case 4:r=h
q=B.a.i(e)
p=B.dK.aK(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aK(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.as0(r),$async$as2)
case 5:u=new A.a_R("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as2,v)},
as1(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$as1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$as1)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.as_(),$async$as1)
case 4:q=f
p=J.a3(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a3(o)
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
try{s=B.cf.cz(0,B.cF.aK(t))}catch(h){r=A.ab(h)
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
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
p.n(q,i,m)}w=5
return A.b(C.as0(q),$async$as1)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as1,v)},
hay(){var w=new A.S(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cS.az(999999)},
hGn(d){var w,v,u,t,s,r,q
try{w=A.ag4(d)
if(w==null)return d
v=w
if(J.Lj(v)>960||J.Li(v)>960){s=v
r=J.Lj(v)>=J.Li(v)?960:null
v=A.ag3(s,J.Li(v)>J.Lj(v)?960:null,B.Of,r)}s=v
u=A.alI(82).T2(s,B.yK)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
cgn(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cgn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hGn(e)
$.cgj.n(0,s,t)
u=C.bCa(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgn,v)},
b1F(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1F=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d1(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gak(J.ls(l,",")):l
q=B.cF.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hay()
w=7
return A.b(C.cgn(p,q),$async$b1F)
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
return A.i($async$b1F,v)},
cgk(d){var w=0,v=A.j(x.T),u,t,s
var $async$cgk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cgm(s),$async$cgk)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgk,v)},
a8a(d){var w=0,v=A.j(x.H),u,t
var $async$a8a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hni(d)
if(t==null){w=1
break}$.cgj.W(0,t)
w=3
return A.b(C.bC9(t),$async$a8a)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8a,v)},
bCa(d,e){return C.i6A(d,e)},
i6A(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMY
w=7
return A.b(n==null?$.aMY=I.fY8():n,$async$bCa)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mG(r,"thumbs","readwrite")
B.iP.mi(J.mF(p,"thumbs"),q,l)
w=8
return A.b(J.px(p),$async$bCa)
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
return A.i($async$bCa,v)},
bC9(d){return C.i6y(d)},
i6y(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bC9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMY
w=7
return A.b(o==null?$.aMY=I.fY8():o,$async$bC9)
case 7:r=f
q=J.mG(r,"thumbs","readwrite")
B.iP.FK(J.mF(q,"thumbs"),m)
w=8
return A.b(J.px(q),$async$bC9)
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
return A.i($async$bC9,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[235]
S=c[150]
A2=c[219]
G=c[200]
F=c[31]
E=c[210]
A3=c[113]
A4=c[221]
A5=c[109]
A6=c[187]
T=c[100]
U=c[110]
A7=c[218]
A8=c[37]
L=c[217]
A9=c[80]
H=c[88]
Aa=c[157]
Ab=c[119]
V=c[159]
W=c[231]
X=c[188]
Ac=c[179]
Ad=c[191]
Y=c[186]
Ae=c[65]
Af=c[71]
Z=c[204]
Ag=c[236]
Ah=c[30]
Ai=c[111]
K=c[181]
Aj=c[192]
A_=c[234]
A0=c[227]
O=c[102]
P=c[99]
M=c[135]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[230]
Ak=c[70]
Al=c[198]
R=c[233]
Am=c[232]
An=c[56]
I=c[54]
C.anT.prototype={}
C.aXY.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bfU(),f=h.x!=null&&h.z_(i).length===0
if(h.x!=null)w=f?B.aZ:B.bx
else w=h.gTG()?B.bx:B.dS
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.I(D.bgH,B.q,1)
s=x.p
r=A.p(i,A.w(A.a([A.p(i,D.eQl,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h7,i,i,i),B.R,D.fjm,B.au,A.d(C.wN(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ffg,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b0H,i,i,i,i,B.Z8,i,i,i)
q=A.n(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h_a(h.d)
o=A.p(B.A,C.aXX(A.fxo(h.e,n),30),B.f,i,i,new A.o(B.lO,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.faE,B.L,i,i)
m=A.n(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.w(A.a([o,B.N,n,B.bz,D.fjE,B.ac,A.p(i,A.w(A.a([D.fz9,B.bz,A.d(A.AO(h.c),i,i,i,i,i,i,D.f5D,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f8,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aO,i,p,q,i,i,B.n),i,i,i,i,K.ahW,i,i,i)
p=A.n(16)
m=A.I(B.aL,B.q,1)
l=j.aQd("Original due",C.wN(h.r,!1))
n=j.aQd("Current due",C.wN(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.R,A.p(i,A.w(A.a([l,B.N,n,B.R,A.p(i,A.d(h.gaKo(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.B8,i,i,1/0),B.R,j.cet(),B.N,j.c29(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fkA,B.au,A.d(q,i,i,i,i,i,i,D.f9W,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aO,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaF9()){q=A.n(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fAt,B.N,A.bw(A.n(12),A.el(new A.a7(1/0,88,A.b4(i,i,i,new A.VI(h.ax,B.M,D.eUz,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fr,i,i,i)],s))}p.push(B.aB)
p.push(D.fsB)
return A.p(i,A.w(A.a([r,new A.D(B.ahZ,A.w(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQd(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a8u,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f6D,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cet(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9b(B.dS,u,"Not paid yet")
w=t.z_(null).length
v=w===0?B.aZ:B.bx
return this.a9b(v,u,C.wN(t.x,!0))},
c29(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9b(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9b(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a8u,u,u,u)
v=A.T(d).k("M<1,hd>")
v=A.C(new A.M(d,new C.c2a(),v),v.k("ak.E"))
return A.w(A.a([w,B.an,A.bZ(B.bD,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a9b(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a8u,w,w,w),1),new A.dq(1,B.cm,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dP,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.ba5.prototype={
a6(d,e){new A.VI(this.b,B.M,e,!0,3.5,null).a6(d,e)},
av(d){return d.b!==this.b}}
C.ao4.prototype={
U(){return new C.aCk(A.a([],x.bp))},
ge2(){return this.c}}
C.aCk.prototype={
a_(){this.a1()
this.IG()},
IG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1D(t.a.c),$async$IG)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dG6(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IG,v)},
aS9(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aO,s=A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bs:B.bn).j(0.22)
w=A.n(10)
return A.br(v,new A.b3(4,r,new A.az(u,1,B.q,-1)),v,B.bl,v,v,v,v,!0,new A.b3(4,w,new A.az((this.a.d.a?B.bs:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b3(4,A.n(10),D.aZk),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aS8(d){return this.aS9(d,null)},
Pm(d){return this.ci4(d)},
ci4(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pm=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GK:B.eG
w=7
return A.b(new A.hR().C3(72,900,900,n),$async$Pm)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fe(),$async$Pm)
case 8:p=f
n=B.cJ.gct().aK(p)
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
if(n!=null)n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.u(o),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pm,v)},
b_L(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aO,o=A.n(10),n=A.I((q?B.bs:B.bn).j(0.18),B.q,1)
if(d)q=B.cN
else q=s.a.d.a?B.bs:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aO:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cN
else u=s.a.d.a?B.bs:B.bn
t=x.p
u=A.E(A.w(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cN,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.X(B.cy,s.a.d.a?B.bs:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jH,D.bsO,r,r,r)},
D2(d){return this.bz8(d)},
bz7(){return this.D2(null)},
bz8(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D2=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.ba(a4,B.b3,B.aM),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.ja(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ab(p,2)}o=new A.ar(new A.ba(a4,B.b3,B.aM),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.ba(a4,B.b3,B.aM),s)
if(a3){a4=new A.S(Date.now(),0,!1).bS(6048e8)
m=A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bn(a4,!0,x.cT)
i=a3?null:A.h_a(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wf?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hX(B.w.j(0.55),!0,"Dismiss",a4,new C.dFQ(),new C.dFR(a2,t,a5,r,new C.dFS(a2,t),o,n,j),B.eJ,!0,x.y),$async$D2)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d6(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.P$=0
o.R$=s
o.P$=0
n.R$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.S(D.f0_)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.S(D.eZF)
w=1
break}a1=A.fxo(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wf?"male":"female"
w=7
return A.b(A.aht(a3,A.h7g(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D2)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wf?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gcf(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)))a5.cLa(a2.a)
w=8
return A.b(A.aht(t.a.c,a5),$async$D2)
case 8:case 5:w=9
return A.b(t.IG(),$async$D2)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D2,v)},
aSO(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cN.j(0.14)
else w=this.a.d.a?B.M:B.aO
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cN
else s=(this.a.d.a?B.bs:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXX(d,18)
if(g)q=B.cN
else q=this.a.d.a?B.aO:B.av
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b7,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
S2(d){return this.czJ(d)},
czJ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$S2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hX(B.w.j(0.55),!0,"Dismiss",s,new C.dG9(),new C.dGa(t,d),B.hw,!0,x.y),$async$S2)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.aht(t.a.c,d),$async$S2)
case 7:w=8
return A.b(t.IG(),$async$S2)
case 8:case 1:return A.h(u,v)}})
return A.i($async$S2,v)},
O_(d,e){return this.bJY(0,e)},
bJY(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$O_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l7(s,"Cancel","Delete",e.b+" \xb7 "+A.AO(e.c)+" will be removed from this device.","Delete this debt?"),$async$O_)
case 3:if(!g){w=1
break}w=4
return A.b(C.fri(t.a.c,e.a),$async$O_)
case 4:w=5
return A.b(t.IG(),$async$O_)
case 5:case 1:return A.h(u,v)}})
return A.i($async$O_,v)},
aeG(d){return this.cbV(d)},
cbV(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bQ(B.K,null,new C.dG3(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeG)
case 2:return A.h(null,v)}})
return A.i($async$aeG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ec3
w=J.dJ(m.d,new C.dGb())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dGc())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cM(v,0,new C.dGd())
w=A.n(18)
s=m.a.d.a
r=s?D.cqL:D.ayi
q=A.I(s?B.cN.j(0.35):B.cN.j(0.18),B.q,1)
s=A.p(l,D.bSV,B.f,l,l,new A.o(B.cN.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.n(12),A.aL(!1,A.n(12),!0,D.ebr,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dGe(m),l,l,l,l,l,l,l),B.f,B.cN,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cvS("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AO(t)
r=A.a([A.p(l,A.w(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b5S(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ahT,l,l,l),B.aB],p)
if(J.cm(m.d)){w=m.a.d.a
s=w?B.e_:B.c
q=A.n(18)
o=A.I((w?B.bs:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bNO,B.f,l,l,new A.o(B.cN.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.w(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bvd,l,l,1/0))}else{w=m.gchl()
s=A.C(new A.M(v,w,A.T(v).k("M<1,t>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.D(D.bwU,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.T(u).k("M<1,t>")))
B.d.v(s,q)}B.d.v(r,s)}return A.w(r,B.ai,l,B.e,B.j,0,B.p)},
b5S(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.I((v.a.d.a?B.bs:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cN
else w=v.a.d.a?B.aO:B.av
return A.p(u,A.w(A.a([q,B.bz,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eu,u,u,u)},
cvS(d,e){return this.b5S(!1,d,e)},
chm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z_(j).length,h=d.bf6()
if(d.x!=null){w=d.z_(j).length
v=w===0?B.cN:B.bx}else if(d.gTG())v=B.bx
else{if(h)w=B.cN
else w=k.a.d.a?B.bs:B.bn
v=w}if(d.x!=null){w=d.z_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wN(u,!1)}else{u.toString
t="Paid "+C.wN(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wN(w,!1)+" \xb7 "+i+" missed":"Due "+C.wN(w,!1)}w=k.a.d.a?B.e_:B.c
u=A.n(18)
if(d.gTG()&&d.x==null)s=B.bx.j(0.35)
else s=(k.a.d.a?B.bs:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bm:B.lO
o=A.I(d.gTG()&&d.x==null?B.bx.j(0.45):B.cN.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h_a(d.d)
o=A.p(B.A,A.db(C.aXX(A.fxo(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aO:B.av
m=x.p
n=A.a([new A.dq(1,B.cm,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaF9())B.d.v(n,A.a([B.eg,A.X(B.No,B.cN.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cR,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AO(d.c)
l=k.a.d.a?B.aO:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(W.ahF,A.B(A.a([o,B.bc,p,B.ab,A.w(A.a([n,B.bz,A.X(B.eA,(k.a.d.a?B.bs:B.bn).j(0.5),j,j,j,18)],m),B.dy,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dG5(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.ui.prototype={}
C.akj.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bh
u=v?B.F:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cy,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.il,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.auF,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FJ,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eM(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.dZ)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bs1,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cE:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fq,A.w(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eVm)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vx,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.ln,A.w(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hi,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bte,a0,a0,a0,a0)}}
C.aTK.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bh?B.bh:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cE,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cR,n],m)
if(p.z)o.push(new A.D(B.vu,n,q))
return new A.D(B.d9,A.w(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.SB.prototype={
U(){return new C.bdG()}}
C.bdG.prototype={
gbY9(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.ebZ,D.ec4],l)
for(w=0;w<8;++w){v=D.a2a[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gt:B.BV
q=t===s
r=A.X(r,q?B.eC:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bf,new A.y(v.c,n,A1.Du,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aR(24,24)
p=new A.az(B.eC,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bo(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eE,A.w(A.a([new A.D(B.mt,new A.ck(B.aN,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DS(!0,new C.akj(v,q.d,q.e,new C.d6f(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6g(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.btx,A.bG(D.fFP,new C.d6h(o,d),A.bm(B.b4,n,n,n,n,B.og,n,n,new A.b7(A.n(16),B.W),n,n,n)),n))
return A.bl(!0,new A.cT(new A.aX(0,1/0,0,m.a.b*0.9),A.ct(k,n,D.bxL,n,n,B.ah,!0),n),!0,!1,B.ae,!0,!0)}}
C.nc.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
bbI(d,e,f){return new C.nc(this.a,e,d,f)}}
C.Hy.prototype={
wi(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hy(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDn(d){var w=null
return this.wi(w,w,w,w,w,d,w,w,w,w,w,w)},
cGZ(d){var w=null
return this.wi(w,w,w,w,d,w,w,w,w,w,w,w)},
bbG(d,e,f){var w=null
return this.wi(d,w,w,w,w,w,w,w,e,w,f,w)},
cHD(d){var w=null
return this.wi(w,w,w,w,w,w,d,w,w,w,w,w)},
cHM(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,d,w,w)},
cGX(d){var w=null
return this.wi(w,w,w,d,w,w,w,w,w,w,w,w)},
cHO(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,w,w,d)},
cGU(d){var w=null
return this.wi(w,w,d,w,w,w,w,w,w,w,w,w)},
cGP(d){var w=null
return this.wi(w,d,w,w,w,w,w,w,w,w,w,w)},
FC(d){var w=null
return this.wi(w,w,w,w,w,w,w,d,w,w,w,w)},
cHW(d,e,f,g,h,i,j,k,l,m,n){return this.wi(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cEB(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bNa(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CC.gep(D.CC))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3K)
q=l.$2("frame",D.a39)
l=l.$2("texture",D.a35)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cHW(p,u,t,q,r,A.qQ(d.h(0,"ribbon"))?A.G2(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Z2.prototype={
U(){return new C.azo(A.a([],x.I),D.MX)},
ge2(){return this.c}}
C.azo.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zF(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.l_()
w=v.a
C.bAy(w.c,w.d).bH(new C.d6W(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.R$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.R$=w
u.P$=0
v.a2()},
l_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KN(s.c,s.d),$async$l_)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d6K(t,r))
t.avh()
case 1:return A.h(u,v)}})
return A.i($async$l_,v)},
garT(){var w,v=this
if(!J.cm(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avh(){var w,v,u=this.garT(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saU(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saU(0,w==null?"":w)},
cal(d){this.m(new C.d6H(this,d))
this.avh()},
Nl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Nl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nc(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPR(r.c,r.d,s),$async$Nl)
case 3:w=4
return A.b(t.l_(),$async$Nl)
case 4:if(t.c==null||J.cm(t.d)){w=1
break}q=J.qh(t.d,new C.d6i(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d6j(t,p))
t.avh()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B4(p+1,B.ct,B.kT),$async$Nl)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Nl,v)},
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
break}s=t.garT()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPR(o.c,o.d,new C.nc(s,r,q,new A.S(p,0,!1))),$async$AK)
case 3:w=4
return A.b(t.l_(),$async$AK)
case 4:if(t.c==null){w=1
break}t.m(new C.d6L(t))
case 1:return A.h(u,v)}})
return A.i($async$AK,v)},
O0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garT()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6r(r),s,null,!0,!0,x.y),$async$O0)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAk(s.c,s.d,r.a),$async$O0)
case 4:t.m(new C.d6s(t))
w=5
return A.b(t.l_(),$async$O0)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TJ(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$O0,v)},
ym(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$ym)
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
return A.b(C.QQ(s,r.r,o,p,q),$async$ym)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hnS(s,r.x,r.r),$async$ym)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KN(s.c,s.d),$async$ym)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.nc(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AX(r.c,r.d,l),$async$ym)
case 11:w=12
return A.b(t.l_(),$async$ym)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ym,v)},
a0k(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$a0k)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyk(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dK(D.yT,new C.d6I(t),new C.d6J())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mr("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new F.mr(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h0O(o,new F.rl(s,r,"",p,new F.uA(q.d,null,null,null,null,"","","")),null),$async$a0k)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0k,v)},
NJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$NJ)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bQ(D.adj,null,new C.d6n(t),s,!0,!0,!0,P.a6J,!1,!1,x.N),$async$NJ)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cGZ(r)
t.m(new C.d6o(t,q))
s=t.a
w=7
return A.b(C.Rp(s.c,s.d,q),$async$NJ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NJ,v)},
WT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bQ(D.adj,null,new C.d6t(t),r,!0,!0,!0,P.a6J,!1,!1,x.e),$async$WT)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d6u(t,s))
r=t.a
w=4
return A.b(C.Rp(r.c,r.d,s),$async$WT)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B4(0,B.dX,B.n7)
case 1:return A.h(u,v)}})
return A.i($async$WT,v)},
bPl(d){var w=d.bU(),v=B.a.aX(B.o.u(w.gcf()),2,"0"),u=B.a.aX(B.o.u(w.gcv()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gyk(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bXp()
if(r.e)w=D.ac8
else if(J.cm(r.d)){w=r.y
v=r.gyk(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f54,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.aiU,new C.Yl(w,v,0,q),q),q),B.bw,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kq.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bw],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.eQ8,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.w4,B.n),q,q,q,q,B.Zi,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcDJ(),q,q,q,q,q,q,!1,B.a7))
w.push(B.R)
w.push(A.hm(D.bK1,D.fFh,r.gaM7(),q))
B.d.v(u,w)}w=A.au(A.cc(A.w(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.eD,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kq.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dT:B.Aj
u=A.w(A.a([new A.D(D.bux,w,q),A.E(A.IT(v,new C.d6U(r),J.ad(r.d)+1,q,r.gcak(),u,B.aN),1),r.bC1()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c6(q,D.aeE,new A.an(B.V,q,B.b0,B.r,A.a([D.aLp,A.bl(!0,A.w(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0)],v),q),q,!1,!1,q,q)},
bXp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JS(B.e0,"AI",h.gbzV(),!0))
if(h.a.f)f.push(new C.JS(B.nh,"Cover",h.gbKw(),!1))
if(h.a.f)f.push(new C.JS(B.yy,"Header",h.gbFy(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JS(B.u6,"Print",h.gcjn(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hA:B.jp
t=v?"Save":"Edit"
f.push(new C.JS(u,t,v?h.gcpE():new C.d6E(h),!1))}if(h.a.f)f.push(new C.JS(B.hz,"Add page",h.gaM7(),!1))
v=C.hjY(h.y.Q)
u=h.gyk(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dsZ
else{k=new A.aR(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jY.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kq,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bo(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kq.j(0.85)
p.push(new A.bB(1,B.bf,A.aB(B.ci,A.w(A.a([k,B.bz,new A.y(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.akj(v,u,t+" \xb7 "+s+" "+r,new C.d6F(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$zN)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a1S(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d6k(t,p),s,null,!0,!0,x.N),$async$zN)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.ym(),$async$zN)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DF(),$async$zN)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fe("Swahili (Kiswahili)",!0),$async$zN)
case 18:w=16
break
case 17:w=19
return A.b(t.cAo(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zN)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
YN(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.I(E.jY.j(0.3),B.q,1),r=x.p
return new A.D(B.cu,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.w4,B.a5),w,42,w,w,w,w,w,42),B.bc,A.E(A.w(A.a([A.d(f,w,w,w,w,w,w,A9.TM,w,w,w),A.d(g,w,w,w,w,w,w,A3.TG,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d6G(d,h),w,w,w,w,w,w,w),w)},
DF(){return this.bOQ()},
bOQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DF=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6x(r),a7,null,!0,!0,x.ei),$async$DF)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eI("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d6y(o),a7,null,!0,!0,x.H).fi(new C.d6z(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.cd(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yT[a1]
J.cd(j,i.a)}w=8
return A.b(C.agD(a0,a7,new C.d6A(o),d,l,e,j),$async$DF)
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
if(l!=null&&a6.a)A.a4(l,!0).eE()
l=o
l.si0($.aw())
J.aQi(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.S(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bbI(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AX(j.c,j.d,l),$async$DF)
case 11:w=12
return A.b(r.l_(),$async$DF)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yT[a1].a)
a5=l.cEB(j,12,a7)
l=r.a
w=15
return A.b(C.Rp(l.c,l.d,a5),$async$DF)
case 15:if(r.c!=null)r.m(new C.d6B(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B4(0,B.dX,B.n7)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b2(a3?A.crt("Undo",new C.d6C(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DF,v)},
Fe(d,e){return this.cAp(d,e)},
cAo(d){return this.Fe(d,!1)},
cAp(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fe=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eI("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d6N(a0),k,null,!0,!0,x.H).fi(new C.d6O(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cd(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a24(m,new C.d6P(a0)),$async$Fe)
case 10:w=8
break
case 9:w=11
return A.b(C.bC1(new C.d6Q(a0),m,a2),$async$Fe)
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
if(o!=null&&f.a)A.a4(o,!0).eE()
o=a0
o.si0($.aw())
J.aQi(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.S(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bbI(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AX(k.c,k.d,o),$async$Fe)
case 12:w=13
return A.b(r.l_(),$async$Fe)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(A.crt("Undo",new C.d6R(r,d),null),null,null,null,null,B.r,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fe,v)},
bC1(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d6l(v):u
r=A.aI(u,u,u,u,A.X(D.bFQ,s?D.kq:B.b2,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hm(A.X(B.vJ,B.F5,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.F5,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbK6(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kq.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.au(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d6m(v):u
return A.bl(!0,new A.D(D.bul,A.B(A.a([r,s,A.aI(u,u,u,u,A.X(B.eA,t<J.ad(v.d)?D.kq:B.b2,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ae,!0,!1)}}
C.Z6.prototype={
U(){return new C.be0(new A.ar(B.as,$.aw()))}}
C.be0.prototype={
ga1r(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.R$=$.aw()
w.P$=0
this.a2()},
gbNx(){var w,v=this.ga1r()
A:{if("cover"===v){w=D.cX7
break A}if("book"===v){w=D.cSU
break A}w=D.dly
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.jY.j(0.5),n=x.p,m=A.B(A.a([D.dt_,B.at,D.bzM,A.aI(q,q,q,q,B.lu,q,q,q,new C.d8G(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j8(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d8H(r),r.ga1r()==="page",q,q,q,q))
if(r.a.d)l.push(A.j8(q,q,q,D.fzZ,q,new C.d8I(r),r.ga1r()==="book",q,q,q,q))
l.push(A.j8(q,q,q,D.fnc,q,new C.d8J(r),r.ga1r()==="cover",q,q,q,q))
l=A.bZ(B.bD,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.U,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b3(4,A.n(16),B.W),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kJ,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dg,!0,B.a4,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbNx(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mH(q,B.c.j(0.08),new A.y(s,q,B.Jh,q,q,q,q,q,q,q,q,q),B.hW,new C.d8K(r,s),q,q,q,q))}return A.eL(q,E.AO,A.cc(A.w(A.a([m,B.R,D.fDd,B.an,l,B.ac,k,B.N,A.bZ(B.bD,w,B.br,6,6),B.aB,A.dn(D.bJZ,D.fE_,new C.d8L(r,d),A.bm(B.b4,q,q,q,q,B.og,q,q,new A.b7(A.n(16),B.W),q,q,q)),B.au,D.fye],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fC,q,q,B.ah),q,q,q,D.aiC,B.d3,q,new A.b7(p,new A.az(o,1.4,B.q,-1)),q)}}
C.Z4.prototype={
U(){return new C.azp(A.a([],x.Y))},
ge2(){return this.c}}
C.aen.prototype={}
C.azp.prototype={
a_(){this.a1()
this.l_()},
l_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QT(p.c,p.d),$async$l_)
case 3:o=e
n=A.a([],x.Y)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bAy(r.c,q),$async$l_)
case 6:j=e
i=J
w=7
return A.b(C.KN(t.a.c,q),$async$l_)
case 7:m.push(new l.aen(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d7a(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l_,v)},
b74(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Q2(d,e){return this.cbT(0,e)},
cbT(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cm(A.e9(new C.d79(u,e),!0,null,x.y)),$async$Q2)
case 2:t=g
w=3
return A.b(u.l_(),$async$Q2)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.S(D.aOW)
return A.h(null,v)}})
return A.i($async$Q2,v)},
Fh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.S(D.aOS)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afX(s.c,s.d),$async$Fh)
case 5:q=e
w=6
return A.b(t.l_(),$async$Fh)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Q2(0,B.d.fZ(t.d,new C.d7e(q))),$async$Fh)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QQ(p,s.f,r,n,o),$async$Fh)
case 10:m=e
w=11
return A.b(t.l_(),$async$Fh)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.S(D.aOW)
case 1:return A.h(u,v)}})
return A.i($async$Fh,v)},
Px(d,e){return this.cnl(0,e)},
cnl(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Px=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d7d(t,e),s,null,!0,!0,x.y),$async$Px)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2g(s.c,s.d,e.a),$async$Px)
case 4:w=5
return A.b(t.l_(),$async$Px)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Px,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bC4(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.I(E.jY.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fK(0.7142857142857143,A.p(n,A.w(A.a([D.dt0,B.ac,D.eb6,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kq.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcDF(),n,n,n,n,n,n,!1,B.a7))}w=A.n(22)
v=A.I(E.jY.j(0.85),B.q,1.6)
s=A.aB(n,A.p(n,D.bRJ,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jY.j(0.6),B.q,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d7f(d),n,n,n,n,n,n,!1,B.a7)
r=A.n(14)
q=B.w.j(0.3)
p=A.I(E.jY.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bA9,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f48,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h7,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bXy,B.n),n,n,n,Am.Mr,D.bst,n,n,n)
if(o.e)k=D.ac8
else k=k.length===0?D.b5J:A.cA(new C.d7g(k))
return A.c6(n,D.aeE,new A.an(B.V,n,B.b0,B.r,A.a([D.aLp,A.bl(!0,A.w(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0)],l),n),n,!1,!1,n,n)},
bC4(d){var w,v,u=this,t=null,s=u.b74(d),r=d.c,q=x.p,p=A.a([A.bT(0,A.eM(B.A,new A.a7(300,420,new C.Yl(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bR1,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b2,B.q,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d77(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f3J,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.w(A.a([new A.fK(0.7142857142857143,new A.an(B.V,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kq.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d78(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JS.prototype={}
C.Yl.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dK(D.yT,new C.cFP(m),new C.cFQ()),j=m.c,i=D.CC.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m1:B.b7
v=new C.cFR(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e8q,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bbh(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aR(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bo(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aiV,8,0.85,2.2),v.$4(D.bxc,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aiV,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.D(D.bx8,A.b4(l,l,l,new C.bb8(h,l),B.az),l),0,0,0))
r=A.X(D.axh[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.auF,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cE,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bT(0,new A.D(D.bxD,A.w(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aGi(l),D.eUs),l,l,l,46,0,l))
return A.p(l,A.bw(D.aaO,new A.an(B.V,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aaO,i,new A.a8(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbh.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f5()
f.dU(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.K()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.N()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.K()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.an()
l=f.an()
k=f.an()
$.W()
j=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.an()*0.5).gp(0)
r=j.K()
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
k=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.K()
k=h.gbK().a.snapshot()
o.drawPath((h.e=new A.cF(k)).a,r)
r.delete()}break
default:$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.an()
m=f.an()
l=f.an()
r=w.K()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.N()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.an()
m=f.an()
l=f.an()
r=g.K()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bb8.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.af
k.c=2.4
k.d=B.bV
for(w=e.a,v=e.b,v=[D.eLa,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ao,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.K()
s=n.gbK().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.K()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uj.prototype={}
C.YD.prototype={
U(){return new C.bbf()}}
C.bbf.prototype={
go4(){var w=this.d
return w===$?this.d=this.a.c:w},
gyk(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.ba(w.b,B.b3,B.aM),$.aw())}return v},
gaAA(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.ba(w.c,B.b3,B.aM),$.aw())}return v},
gaqr(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.ba(w.y,B.b3,B.aM),$.aw())}return v},
q(){var w=this,v=w.gyk(0),u=v.R$=$.aw()
v.P$=0
v=w.gaAA()
v.R$=u
v.P$=0
v=w.gaqr()
v.R$=u
v.P$=0
w.a2()},
ar3(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j8(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cZf(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bD,r,B.br,6,8)},
awI(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b3(4,A.n(14),B.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kI,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go4(),a0=f.gyk(0),a1=a0.a.a,a2=f.gaAA(),a3=a2.a.a,a4=f.gaqr(),a5=d.bbG(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a7(190,260,A.eM(B.A,new A.a7(270,370,new C.Yl(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awI("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZE(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.am,e,e,e,e)
a2=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awI("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZF(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yT[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b2
q=r.a===q
o=new A.az(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ay,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aB(e,A.w(A.a([p,B.cR,new A.y(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZG(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bZ(B.bD,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b4.j(0.35):B.c.j(0.07)
m=new A.aR(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.eC:B.K,2,B.q,-1)
q.push(A.aB(e,A.p(e,A.X(D.axh[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bo(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZH(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bZ(B.bD,q,B.br,8,8)
a4=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awI("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZI(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.or,e,e,e)
m=A.a([],w)
for(l=D.CC.gdQ(D.CC),l=l.gae(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eC:B.b2
g=r.e===i
o=new A.az(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aB(e,A.w(A.a([j,B.bz,new A.y(i,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZJ(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bZ(B.bD,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.or,e,e,e)
k=f.go4()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cT(new A.aX(0,1/0,0,a1.a.b*0.92),A.ct(A.a([D.fxI,B.ac,d,B.aQ,a0,B.R,a2,B.aB,D.fDM,B.N,v,B.aB,D.fxR,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.l_(e,9,""+B.k.V(f.go4().f),36,18,new C.cZK(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.or,e,e,e),B.an,f.ar3(D.a3K,f.go4().r,new C.cZL(f),D.doK),B.ac,A.d("BORDER",e,e,e,e,e,e,H.or,e,e,e),B.an,f.ar3(D.a39,f.go4().w,new C.cZM(f),D.doP),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.or,e,e,e),B.an,f.ar3(D.a35,f.go4().x,new C.cZO(f),D.dqh),B.an,A.iG(e,B.b4,e,B.ae,e,new C.cZP(f),e,e,e,D.fs8,f.go4().z),B.bw,A.bG(D.fww,new C.cZQ(f,a6),A.bm(B.b4,e,e,e,e,B.og,e,e,new A.b7(A.n(16),B.W),e,e,e))],w),e,R.ais,e,e,B.ah,!0),e),!0,!1,B.ae,!0,!0),e)}}
C.aGi.prototype={
a6(d,e){var w,v,u,t=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
t.F(new A.b5(0,0))
w=e.a
t.F(new A.ap(w,0))
v=e.b
t.F(new A.ap(w,v))
t.F(new A.ap(w/2,v-12))
t.F(new A.ap(0,v))
t.F(new A.bE())
u=A.N()
u.sar(D.bYe.aA(0,new A.a9(0,0,0+w,0+v)))
d.aS(t,u)},
av(d){return!1}}
C.bgs.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.sar(D.bXe.aA(0,new A.a9(0,0,a3,a4)))
a5.b1(new A.a9(0,0,a3,a4),w)
v=B.k.dj(a2/112)
u=new A.f5()
u.dU(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.an()*20
l=56+u.an()*40
k=D.cX6[u.az(9)]
j=u.az(14)
J.bx(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.by(i,B.hb)
g=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sar(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.K()
w.drawRRect(A.eT(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
e.r=E.jY.j(0.55).gp(0)
d=e.K()
w.drawRect(A.bY(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
j.r=E.jY.j(0.4).gp(0)
d=j.K()
w.drawRect(A.bY(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.sar(D.bWC.aA(0,new A.a9(0,r,a3,q)))
d=p.K()
w.drawRect(A.bY(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.lx
d=p.K()
w.drawRect(A.bY(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b9b.j(0.72).gp(0)
a5.b1(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sar(new A.c_(B.A,0.5,B.x,a0,0,A.a([D.bgi.j(0.22),B.K],t),a0,a0).aA(0,A.bV(new A.x(w,a2),a1)))
a5.af(new A.x(w,a2),a1,a4)},
av(d){return!1}}
C.b9u.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kQ(new A.o(A.aq(D.kq,D.bkO,w/4),o,new A.bO(B.W,new A.az(B.w.j(0.12),1,B.q,-1),B.W,B.W),B.Ks,o,o,B.n),B.be,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aH3,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aR(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jY.j(0.6),o,o,new A.bo(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.w(t,B.m,o,B.rr,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aZ3,u,D.bYc,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aGi(o),D.eUn),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTK(p.y,r,G.iE,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iE.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fhz,!0,B.a4,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iE.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iE.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f8H,!0,B.a4,B.zI,B.am,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fhr,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iE.j(0.5),o,o,o,o,o,o,o,o,11,B.cE,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.EV.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fq,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.EV.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.EV.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iE.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XC(A.d0(A.a([A.d0(o,o,o,o,o,o,o,o,o,D.fbN,B.a.ap(k,0,1)),A.d0(o,o,o,o,o,o,o,o,o,o,B.a.b3(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iE.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.w(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iE.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.Ks,new A.an(B.V,o,B.aa,B.r,A.a([t,new A.D(D.bwF,A.w(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.be),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Ks,v,D.bYK,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.V,o,B.aa,B.r,l,o)}}
C.apc.prototype={
U(){return new C.aCT(A.a([],x._))},
br(){return this.r.$0()},
pU(){return this.w.$0()},
ge2(){return this.c}}
C.aCT.prototype={
a_(){var w,v
this.a1()
this.vQ()
w=this.a
v=w.c
if(v.length!==0)C.a6S(v,w.e,w.d.w)},
vF(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h0S(r,t.e,!1,s.w,new C.dTr(u),null,s),$async$vF)
case 2:w=3
return A.b(u.vQ(),$async$vF)
case 3:return A.h(null,v)}})
return A.i($async$vF,v)},
a_u(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h0S(r,t.e,!0,s.w,new C.dTq(u),null,s),$async$a_u)
case 2:w=3
return A.b(u.vQ(),$async$a_u)
case 3:return A.h(null,v)}})
return A.i($async$a_u,v)},
vQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AM(q.a.c),$async$vQ)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.dTt(q,p))
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
return A.b(C.Gs(q.a.c).d7(0,B.pR),$async$vQ)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTu(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTv(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vQ,v)},
Ov(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ov=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.S(D.eY2)
w=3
return A.b(C.Gs(t.a.c),$async$Ov)
case 3:r=e
w=4
return A.b(C.fHd(t.a.c,r),$async$Ov)
case 4:q=e
w=5
return A.b(C.Gs(t.a.c),$async$Ov)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dTp(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(null,null,null,q?B.dA:B.cQ,null,B.r,null,s,null,B.mq,null,null,null,null,null,null,null,null,null,null))
t.a.pU()
case 1:return A.h(u,v)}})
return A.i($async$Ov,v)},
HT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i8E(l),$async$HT)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hD8(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZp(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HT)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hk7(r)
o=Date.now()
n=t.a.c
m=new C.kD(l,r.toUpperCase(),p,!0,B.U,D.Cr,new A.S(o,0,!1),0,n,D.tP)
w=5
return A.b(C.a2m(n,m),$async$HT)
case 5:w=6
return A.b(t.vQ(),$async$HT)
case 6:t.a.br()
t.a.pU()
if(t.c==null){w=1
break}t.Er(m)
case 1:return A.h(u,v)}})
return A.i($async$HT,v)},
Er(d){return this.cdV(d)},
cdV(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Er=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AM(u.a.c),$async$Er)
case 2:n=l.rg(k.dJ(f,new C.dTs(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hD(m,new C.ap6(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Er)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2m(u.a.c,o),$async$Er)
case 6:case 5:w=7
return A.b(u.vQ(),$async$Er)
case 7:u.a.pU()
return A.h(null,v)}})
return A.i($async$Er,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tR(p)
if(r.e)return A.au(A.mI(q,p?B.bs:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cm(r.d)){w=p?B.e_:B.c
v=A.n(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bL3,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cK,!0,q,q,q,q,q,q,q,q,q,q,q,r.gccZ(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fw(A.p(q,A.w(A.a([u,B.aQ,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fF2,r.gaQ9(),A.bm(B.bR,q,q,q,q,q,Al.Zl,q,new A.b7(A.n(12),B.W),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bwB,q,q,1/0),15,B.ae,1.05,D.a9t,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b5],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.yC,B.aV,q,q,q,q),q,q,q,new C.dTx(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.yw,B.aV,q,q,q,q),q,q,q,r.gafl(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.ao0,D.fl_,r.gaQ9(),A.bm(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fw(r.cAu(J.q(r.d,s),o),14,B.ae,1,D.a9t,q))
B.d.v(w,u)}return A.w(A.a([p,B.aB,A.w(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cAu(d,e){var w=null,v=e.a,u=v?B.e_:B.c,t=A.n(14),s=A.I((v?B.e3:B.bO).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.n(14),p=A.p(w,D.bK7,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aO:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaoi(),m=d.d?"":" \xb7 Public",l=d.y===D.kx?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bz,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bC,A.B(A.a([p,B.bc,l,A.X(B.N8,v?B.bs:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTw(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ap6.prototype={
U(){return new C.aCQ(A.a([],x._),A.aY(x.N),A.b78())},
br(){return this.r.$0()},
ge2(){return this.c}}
C.aCQ.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.aci()
w=u.a
v=w.c
if(v.length!==0)C.a6S(v,w.e,w.d.w)},
q(){var w=this.w
w.R$=$.aw()
w.P$=0
this.a2()},
a2q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xM("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSS(r),s,null,!0,!0,x.y),$async$a2q)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jp()
t.m(new C.dST(t,r))
w=4
return A.b(t.vH(),$async$a2q)
case 4:t.a.br()
t.xM(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2q,v)},
cqi(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dSN(w,f,d,e))},
aSo(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jQ(q,q,1,1)
this.w.sp(0,u)},
b9l(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eD(new Float64Array(16))
q.e3(r)
w=q.Cy()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e9(r,u,0,1)
t.jQ(v,v,1,1)
t.e9(-r,-u,0,1)
t.iK(0,q)
s.sp(0,t)},
aci(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aci=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AM(u.a.c),$async$aci)
case 2:t=s.rg(r.dJ(e,new C.dSl(u)))
if(t!=null&&u.c!=null)u.m(new C.dSm(u,t))
return A.h(null,v)}})
return A.i($async$aci,v)},
xM(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
vF(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h0S(o,t,!1,r,new C.dSA(u),q.a,s),$async$vF)
case 2:n=A
m=J
w=3
return A.b(C.Gs(u.a.c),$async$vF)
case 3:p=n.rg(m.dJ(e,new C.dSB(u)))
if(p!=null&&u.c!=null)u.m(new C.dSC(u,p))
return A.h(null,v)}})
return A.i($async$vF,v)},
Jp(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cF(w,0)},
vH(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2m(t,s),$async$vH)
case 2:return A.h(null,v)}})
return A.i($async$vH,v)},
a0Z(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u2(q,t.a.c)){t.xM("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i9N(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0Z)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jp()
t.m(new C.dSM(t,r))
w=4
return A.b(t.vH(),$async$a0Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0Z,v)},
a_I(){return this.cdX()},
cdX(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.u2(q,t.a.c)){t.xM("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSK(r,new C.tR(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_I)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jp()
t.m(new C.dSL(r,t))
w=4
return A.b(t.vH(),$async$a_I)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_I,v)},
VJ(d){return this.bz5(d)},
bz5(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u2(r,t.a.c)){t.xM("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dS9(t,d),r,null,!0,!0,x.P),$async$VJ)
case 3:s=f
if(s==null){w=1
break}t.Jp()
t.m(new C.dSa(t,s))
w=4
return A.b(t.vH(),$async$VJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VJ,v)},
a2M(d){return this.cCE(d)},
cCE(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dSV(u,d,new C.tR(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2M)
case 2:return A.h(null,v)}})
return A.i($async$a2M,v)},
caf(d){var w=this,v=w.d
v===$&&A.c()
if(C.u2(v,w.a.c))w.Oa(d)
else w.a2M(d)},
ahP(d,e){return this.cug(d,e)},
cug(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dSP(new C.tR(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahP,v)},
HY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kx?3:5
break
case 3:w=6
return A.b(C.fPt(t.a.c),$async$HY)
case 6:s=e
o=t.a
r=C.h8E(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahP(!s,!r),$async$HY)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAr(o,t.a.c)){t.xM("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l7(o,"Cancel","Remove",q.y===D.kx?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HY)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOe(t.a.c,t.d.a),$async$HY)
case 11:t.a.br()
o=t.c
if(o==null){w=1
break}A.iP(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HY,v)},
a9P(d){return this.bKe(d)},
bKe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u2(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b4(s,new C.dSb(p))){o=A.T(s)
p.a=A.rg(new A.cP(new A.a_(s,new C.dSc(d),o.k("a_<1>")),new C.dSd(),o.k("cP<1,m>")))}q=p.a
if(q==null)q=d.d
t.Jp()
t.m(new C.dSe(t,s,d,q))
w=3
return A.b(t.vH(),$async$a9P)
case 3:t.xM(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9P,v)},
Oa(d){return this.bMn(d)},
bMn(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u2(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2M(d),$async$Oa)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dSi(t,d),r,null,!0,!0,x.P),$async$Oa)
case 6:s=f
if(s==null){w=1
break}t.Jp()
t.m(new C.dSj(t,s))
w=7
return A.b(t.vH(),$async$Oa)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
cAT(){var w=this,v=w.d
v===$&&A.c()
if(!C.u2(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSU(w))
w.vH()},
Yz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAr(n,t.a.c)){t.xM("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bn(new A.M(q,t.gc8K(),A.T(q).k("M<1,m>")).c0(0,new C.dSv()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSw(t,new C.tR(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yz)
case 3:o=e
r.R$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jp()
t.m(new C.dSx(t,p))
w=4
return A.b(t.vH(),$async$Yz)
case 4:t.xM("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yz,v)},
c8L(d){return B.a.i(d.toLowerCase())},
ccK(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u2(v,w)
t=r.d
s=C.i_2(t)
C.i8I(q,t.b,u,C.i_1(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dT1(),A.T(l).k("a_<1>")).gM(0)
l=n?B.bY:B.iD
v=A.X(B.a_x,n?B.bs:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bc,A.aL(!1,o,!0,new A.D(B.hx,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dT2(p,d),o,o,o,o,o,o,o),o),new A.D(B.nc,p.bXq(m),o)],u)
if(p.d.y===D.kx){t=B.rs.j(0.15)
s=A.n(12)
r=A.I(B.rs.j(0.45),B.q,1)
q=C.Gq(p.d,p.a.c)
v.push(new A.D(B.xT,A.p(o,A.B(A.a([D.bPn,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.im,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b5],u)
if(C.u2(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JO("Undo",B.rg,p.gcAS(),m,o,o))
u.push(new C.JO("Family Book",D.bEW,p.gccJ(),m,B.tj,o))
if(C.u2(p.d,p.a.c))u.push(new C.JO("Display settings",B.C0,p.gcdW(),m,B.aZ,o))
u.push(new C.JO("Sync",B.yw,p.gafl(),m,o,o))
t=p.d
if(t.y===D.kx||C.bAr(t,p.a.c)){t=p.d.y===D.kx?"Remove shared tree":"Delete tree"
u.push(new C.JO(t,B.ef,p.gbKo(),m,B.h2,o))}if(C.u2(p.d,p.a.c))u.push(new C.JO("Add member",B.vU,new C.dT3(p),m,B.bR,o))
v.push(new A.D(R.ai5,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaoi()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cA(new C.dT4(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_B:Y.N9,o,o,o,o,o)
v.push(A.au(A.hm(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dT5(p),o),o,o,o))}return A.c6(o,l,A.bl(!0,A.w(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),o,!1,!1,o,o)},
bXq(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fx.j(0.35),B.dn,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.yq,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bSt,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cK,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafl(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f71,m,m,m)
r=r.gaoi()
p=n.d.gaoi()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.w(A.a([q,B.bz,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a6,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.u2(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.bPz,m,m,m,n.gcnE(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jq:B.o1
r=r?"Private":"Public"
r=A.E(n.auE(q,"Privacy",r,n.a.d.w?n.gczN():m),1)
q=A.E(n.auE(B.yx,"Tree code",n.d.c,new C.dSk(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.auE(D.bGE,"Collaborators",p,n.gc0Z()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kx){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aF(!1,B.a1,!0,A.n(999),A.aL(!1,A.n(999),!0,new A.D(B.fX,A.B(A.a([A.X(B.oY,B.c,m,m,m,14),B.eg,A.d("View only",m,m,m,m,m,m,B.aQ9,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.V,m,B.aa,B.r,A.a([t,new A.D(B.Fv,A.w(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bWH,B.n),m,m,m,m,m,m,m,1/0)},
auE(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.n(14),A.aL(!1,A.n(14),!0,new A.D(M.ajd,A.w(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uO,A.d(f,w,1,B.a2,w,w,w,O.zM,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bdJ.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gal(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bdM(s,t),new A.as(w,v))],x.p)
r=r.gdQ(r)
B.d.v(u,r.dB(r,new C.d7k(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d7l(this),A.T(r).k("M<1,t>")))
return new A.D(B.tL,new A.a7(w,v,new A.an(B.V,t,B.aa,B.f,u,t),t),t)}}
C.K_.prototype={}
C.FJ.prototype={}
C.bdL.prototype={
gbhR(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIo.prototype={}
C.bdM.prototype={
bM1(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bV
d.bL(new A.x(n,w),new A.x(m,w),v)
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
d.af(new A.x(u,w),9,q)
q=A.N()
q.r=B.bA.gp(0)
d.aS(t,q)},
bM_(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d7F())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.b4(a0,new C.d7G(f))
t=new A.M(a0,new C.d7H(f),A.T(a0).k("M<1,K>")).c0(0,new C.d7I()).cM(0,1/0,B.v8)
w=f.a
d.bL(f,new A.x(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.K()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mE(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aO(l.r,B.ao,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cR(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cR(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.K()
n=g.gbK().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bR.j(0.75).gp(0)
w.c=2.2
w.b=B.af
w.d=B.bV
w.e=B.hn
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bM_(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.K()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bM1(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bhn.prototype={
gc6C(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dlx
switch(w.c.a){case 0:return D.cOL
case 1:return D.cZZ
case 2:return D.dfM}},
gc6F(){var w=this.c,v=C.hjs(w.w),u=C.hjs(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc6C(),p=t.c,o=I.bBk(p.f),n=t.gc6F(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.I(r?B.av:B.c,B.q,2)
if(o!=null)w=A.th(B.A,s,B.ce,B.bU,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hY(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ay,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.FM,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.I(r?B.av:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fh3,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.byt,s,s,s),s,s,s,-6,-4,s))}k=r?B.co:B.c
j=A.n(8)
w=A.I(B.d.gH(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dD,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.co,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a6,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a7(84,112,A.w(A.a([new A.an(B.V,s,B.aa,B.f,l,s),B.au,A.p(s,A.w(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.b_X,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.byE,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bcR.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bbW
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.K()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.buY.prototype={
B(d){var w=this,v=null,u=new C.f92(w),t=w.c,s=t?B.co:B.c,r=A.n(12),q=u.$3(B.hz,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bE:B.fc,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yu,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.w(A.a([q,p,o,A.p(v,v,B.f,t?B.bE:B.fc,v,v,v,1,v,v,v,v,v,22),u.$3(B.alD,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.ag)}}
C.bkA.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.I(B.bR,B.q,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.w(A.a([A.X(s?K.a_B:Y.N9,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fdp,v,v,v)],r),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fbm,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.M(s,new C.eKU(w),A.T(s).k("M<1,t>")))
B.d.v(u,t)}return new A.a7(84,v,A.w(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZG.prototype={
U(){return new C.aBj()},
br(){return this.Q.$0()},
ge2(){return this.w}}
C.aBj.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.ar(new A.ba(t,B.b3,B.aM),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.ar(new A.ba(t,B.b3,B.aM),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.ar(new A.ba(t,B.b3,B.aM),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.ar(new A.ba(t,B.b3,B.aM),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.ar(new A.ba(t,B.b3,B.aM),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.ar(new A.ba(t,B.b3,B.aM),s)
t=u?q:v.c
r.y=t==null?D.y6:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i0z(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.R$=w
u.P$=0
u=v.f
u===$&&A.c()
u.R$=w
u.P$=0
u=v.r
u===$&&A.c()
u.R$=w
u.P$=0
u=v.w
u===$&&A.c()
u.R$=w
u.P$=0
u=v.x
u===$&&A.c()
u.R$=w
u.P$=0
v.a2()},
Py(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Py=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h8E(p.y,p.w)
w=3
return A.b(A.lj(t.a.w,B.Id),$async$Py)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZp(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Py)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hD9(p.y,p.w)
t.a.br()
case 5:w=7
return A.b(An.GB(78,800),$async$Py)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dns(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Py,v)},
c6E(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i0(B.o.u(1000*Date.now()),w,D.y6,null,null,null,"","","","","",1,!1,0)
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
s=v.aDt(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
a9p(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dnr(r),s,null,!0,!0,x.y),$async$a9p)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9p,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tR(j),h=l.a.e,g=A.T(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dnB(l),g),g.k("J.E"))
h=j?B.e_:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bwY,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aO:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hw(A.aL(!1,k,!0,new A.D(B.lU,A.X(B.ef,B.oL,k,k,k,17),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbH2(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jC:B.iZ
t=I.bBk(l.as)
if(l.as==null)s=A.X(B.oP,j?B.bs:B.bn,k,k,k,40)
else s=k
s=A.au(A.aB(k,new A.an(B.V,k,B.aa,B.r,A.a([A.h5(u,t,s,k,42),A.ao(0,A.h5(B.bR,k,D.bJb,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc6B(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBl(t,"Full name",B.mu,1,1,i,B.m7)
u=l.y
u===$&&A.c()
u=A.w(A.a([t,B.R,new C.bhl(i,u,new C.dnC(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bqA],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dnD(),A.T(o).k("M<1,eA<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bqC],q)
B.d.v(q,new A.M(f,new C.dnF(),A.T(f).k("M<1,eA<m?>>")))
o=A.w(A.a([t,B.an,new C.acO(i,r,"Who is their parent?",p,new C.dnG(l),k,o),B.aB,n,B.an,new C.acO(i,m,"Who is their spouse / partner?",q,new C.dnH(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBl(q,"Birth date",D.akF,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBl(m,"Birth place",B.a_Q,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBl(n,"Date of death (if deceased)",D.amT,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBl(p,"Occupation",B.a0U,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.bw,new C.acP(i,"Identity",u,k),B.ac,new C.acP(i,"Family links",o,k),B.ac,new C.acP(i,"Life details",A.w(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBl(r,"Notes",B.l_,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBk(i,"Child order",l.cea(l.at),new C.dnI(l),new C.dnJ(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fZb(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dnK(l):k
B.d.v(r,A.a([B.R,new C.aBk(i,"Visible in tree",u,w,new C.dnL(l),k)],v))}r.push(B.R)
w=j?B.jC:B.iZ
u=A.n(14)
t=A.I(j?B.e3:B.bO,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aO:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iG(k,B.bR,k,B.ae,k,new C.dnM(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ahJ,k,k,k))
r.push(B.bw)
w=j?B.aO:B.av
j=j?B.e3:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nw,new C.dnE(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.ck,k,new A.b7(A.n(14),B.W),new A.az(j,1,B.q,-1),k,k,k,k)),1),B.bc,A.E(A.bG(D.eQi,l.gc6D(),A.bm(B.aV,k,k,0,B.c,k,B.ck,k,new A.b7(A.n(14),B.W),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.ek(B.jt,k,B.ae,h,new A.a7(420,k,A.cc(A.w(r,B.ai,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.aiy,k,B.ahX,new A.b7(g,B.W),k,k)},
cea(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acP.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jC:B.iZ,s=A.n(16)
return A.w(A.a([new A.D(D.aiY,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e3:B.bO,B.q,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhm.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e_:B.c,r=A.n(12),q=A.I((t?B.e3:B.bO).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aO:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.U,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.eB,u,B.vz,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acO.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e_:B.c,s=A.n(12),r=A.I((u?B.e3:B.bO).j(0.85),B.q,1),q=A.X(B.rc,u?B.bs:B.bn,v,v,v,v),p=A.l(v,v,u?B.aO:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a6,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e_:B.c
return A.p(v,new A.Dy(A.Ss(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bhl.prototype={
B(d){var w=new C.dnN(this)
return A.B(A.a([w.$3(D.a_9,"Male",B.NR),B.ab,w.$3(D.ajQ,"Female",B.NF),B.ab,w.$3(D.y6,"Other",B.ni)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBk.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jC:B.iZ,r=A.n(14),q=A.I(t?B.e3:B.bO,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aO:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.w(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHq(u,B.yu,w.f,v),B.bp,new C.aHq(u,B.hz,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eu,v,v,v)}}
C.aHq.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.e_:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bR
else t=(s.c.a?B.bs:B.bn).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acQ.prototype={
bPX(d){switch(d.a){case 0:return B.bR
case 1:return B.bA
case 2:return B.cV}},
bPY(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWK(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A8(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e_:B.c
u=A.n(12)
t=A.I((w?B.e3:B.bO).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aO:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.xQ,p,p,1/0)},
adS(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jC:B.iZ,s=A.n(16),r=A.I(v?B.e3:B.bO,B.q,1)
return A.w(A.a([new A.D(D.aiY,u,w),A.p(w,A.w(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hoi(r,q),o=q.c,n=t.bPX(o),m=I.bBk(q.f),l=t.e.a,k=l?B.e_:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aO:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kx?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a6,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.h5(u,m,m==null?A.X(B.oP,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.I(n.j(0.45),B.q,1)
v=A.au(A.p(s,A.d(t.bPY(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.ms,s,s,s),s,s,s)
u=x.p
i=A.a([t.A8("Full name",i,B.mu)],u)
if(p>0)i.push(t.A8("Child order","#"+p,B.NL))
r=A.a([h,B.au,r,B.aQ,l,B.R,v,B.bw,t.adS("Identity",i),B.ac,t.adS("Life details",A.a([t.A8("Birth date",q.w,D.akF),t.A8("Birth place",q.x,B.a_Q),t.A8("Date of death",q.y,D.amT),t.A8("Occupation",q.z,B.a0U)],u)),B.ac,t.adS("Family links",A.a([t.A8("1. Parent",t.aWK(q.d),B.G_),t.A8("2. Spouse",t.aWK(q.e),B.NE)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adS("Notes",A.a([t.A8("Notes",q,B.l_)],u))],u))
r.push(B.bw)
r.push(A.bG(B.JA,new C.dnX(d),A.bm(B.aV,s,s,s,s,s,B.ck,s,new A.b7(A.n(14),B.W),s,s,s)))
return A.eL(s,k,new A.cT(B.lH,A.cc(A.w(r,B.ai,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xW,s,s,B.ah),s),s,s,s,B.Fy,B.d3,s,new A.b7(j,B.W),s)}}
C.JO.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xZ,A.hw(A.aF(!1,B.a1,!0,A.n(8),A.aL(!1,A.n(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.ap9.prototype={
eT(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.T(w).k("M<1,a5<m,@>>")
w=A.C(new A.M(w,new C.c8P(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j9(w,new C.c8Q(),t,x.U))
return s}}
C.apa.prototype={
U(){return new C.aCS(A.a([],x.bF))},
gde(){return this.c}}
C.aCS.prototype={
a_(){this.a1()
this.Jw()},
Jw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c8T(t.a.c),$async$Jw)
case 3:r=e
w=4
return A.b(C.AM(t.a.c),$async$Jw)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qW(q,new C.dTe(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dTf(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jw,v)},
yl(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Kg(d,e){return this.cDf(d,e)},
cDf(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Kg=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dTj(q,e))
t=3
w=6
return A.b(d.$0(),$async$Kg)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dTk(q))
$.eQ.mp()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kg,v)},
Xn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p6(r,s.c,s.e),$async$Xn)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kg(new C.dTb(t),"Preparing download\u2026"),$async$Xn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xn,v)},
Xr(d){return this.bNW(d)},
bNW(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p6(r,s.c,s.e),$async$Xr)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Kg(new C.dTc(t,d),"Preparing file\u2026"),$async$Xr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xr,v)},
afI(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xe.c7().M2(B.QK,B.tQ,!0),$async$afI)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gal(o)}else o=!1
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
p=A.ab(m)
$.am.$1("[family tree sync pick] file_picker: "+A.u(p))
w=6
break
case 3:w=2
break
case 6:u=A.GA()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afI,v)},
Y2(d){return this.bYj(d)},
bYj(d){var w=0,v=A.j(x.H),u=this
var $async$Y2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Kg(new C.dTd(u,d),"Restoring family trees\u2026"),$async$Y2)
case 2:return A.h(null,v)}})
return A.i($async$Y2,v)},
Y1(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afI(),$async$Y1)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Y2(s),$async$Y1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y1,v)},
a1P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p6(r,s.c,s.e),$async$a1P)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kg(new C.dTi(t),"Creating QR code\u2026"),$async$a1P)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1P,v)},
a1q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CS()){t.yl("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cm(A.e9(new C.dTg(),!0,null,x.N)),$async$a1q)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Y2(r),$async$a1q)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1q,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AE:B.iD,m=o?D.age:B.aO,l=o?B.aJ:B.bO,k=o?B.aO:B.av,j=new C.d7J(n,m,l,k,o?B.bK:B.bn)
l=A.aI(p,p,p,p,A.X(B.eF,k,p,p,p,20),p,p,p,new C.dTm(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.ez(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d7h(!0,B.js,B.aP,B.aP,q.r?p:q.gcu4(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcqd()
t.push(A.E(C.d7h(!s,B.j3,B.b4,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d7h(!1,B.hB,B.aV,B.bR,q.r?p:q.gbNP(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d7h(!1,L.yz,B.aF,B.aS,q.r?p:q.gbYg(),j,s,"Upload backup file"),1))
l=A.a([new C.bdK(v,l,p),B.kG,new C.ac6(j,"QR restore",p),B.R,t,B.d7,new C.ac6(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kG,new C.ac6(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dTn(q,j),x.l))
B.d.v(l,v)}l=A.a([A.ct(l,p,B.Zh,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.B(A.a([K.aOB,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Bi,p,p,p),!0,!1,B.ae,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.V,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d7J.prototype={}
C.bdK.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.ke,28)],x.V)
t=A.ao(p,A.X(B.u9,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.V,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bS0,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oh,A.E(A.w(A.a([D.flZ,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bZT,B.n),p,p,p,p,p,p,p,p)}}
C.ac6.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdI.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aP.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aP.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eB(A.db(new A.D(E.YV,A.w(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.r8,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bz,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bdN.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eB(new A.D(B.eR,A.B(A.a([A.p(v,D.bRd,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.r8,v,v,v),B.bc,A.E(A.w(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hB,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.a_0.prototype={
U(){return new C.aCR()},
gde(){return this.c}}
C.aCR.prototype={
a_(){this.a1()
this.a8X()},
a8X(){var w=0,v=A.j(x.H),u=this,t
var $async$a8X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b13(u.a.c,B.D0),$async$a8X)
case 2:t=e
if(u.c!=null)u.m(new C.dT6(u,t))
return A.h(null,v)}})
return A.i($async$a8X,v)},
ah5(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ah5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dT7(q))
t=4
p=A.haj(q.a.d,B.D0)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aro(n.e,m,l,B.D0,p,n.f),$async$ah5)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dT8(q))
q.c.I(x.q).f.S(D.eZd)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ef(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dT9(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah5,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jh:B.pJ,n=p?B.id:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.ez(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fBO,q,q,q,1,q,!0)
w=A.n(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pP(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.w(A.a([B.N,u,B.bw,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b7,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bq,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcpW()
if(u)u=B.J4
else u=A.X(r.e===!0?B.hA:B.akE,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.er(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cj,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fO,q,q,q,new A.az(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zS,new C.dTa(d),A.bm(B.aV,q,q,q,q,B.fO,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.a9,A.w(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_1.prototype={
U(){return new C.biN(A.zk(B.xF,B.nC,B.uh))}}
C.biN.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c6(A.ez(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.ftR,w,w,w,1,w,!0),B.w,A.zj(this.d,B.bU,new C.dTo(this,d)),w,!1,!1,w,w)}}
C.aXW.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Qd,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lA.prototype={}
C.a5W.prototype={
U(){return new C.biu(null,null)}}
C.biu.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tF,v,1,v,w)
w.e=A.bj(v,B.pQ,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bu(d){var w,v,u=this
u.bC(d)
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
this.buy()},
B(d){var w,v,u=this,t=B.d.dK(D.a3A,new C.dFe(u),new C.dFf())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cuj(A.c7(new A.ha(A.a([w,v],x.dS)),new C.dFg(u,t),null),!0)}}
C.bit.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b01(d,e)
break
case"house":p.m2(d,e,D.d3J)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdH()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.x(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m7(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AR(d,e,12)
p.xW(d,e,B.kR,5,14)
break
case"grocery":p.ceU(d,e)
break
case"calculator":p.ceB(d,e)
break
case"lumber":p.cf1(d,e)
break
case"kitchen":p.ceX(d,e)
break
case"landscape":p.m2(d,e,D.d4g)
s=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.F(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.F(new A.cR(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.F(new A.cR(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.F(new A.ap(t,w))
s.F(new A.ap(0,w))
s.F(new A.bE())
w=A.N()
w.r=B.er.j(0.85).gp(0)
d.aS(s,w)
p.AR(d,e,8)
p.xW(d,e,B.iI,4,18)
break
case"plumbing":p.cfa(d,e)
break
case"electrical":p.m2(d,e,D.df2)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.b1(new A.a9(0,0,0+e.a,0+e.b),u)
p.m7(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m7(d,e,B.lM.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AR(d,e,10)
break
case"store":p.cfk(d,e)
break
case"paint_remodel":p.cf5(d,e)
break
case"roofing":p.cfc(d,e)
break
case"warehouse":p.cfr(d,e)
break
case"vehicles":p.cfp(d,e)
break
case"farm":p.ceO(d,e)
break
case"restaurant":p.cfb(d,e)
break
case"tools":p.cfn(d,e)
break
case"wallet":p.cfq(d,e)
break
case"concrete":p.ceH(d,e)
break
case"blueprint":p.cez(d,e)
break
default:p.b01(d,e)}},
m2(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.sar(new A.a8(B.ay,B.aC,B.x,f,null,null).aA(0,v))
d.b1(v,w)},
m7(d,e,f,g,h){var w,v,u,t,s,r,q=new A.x(e.a/2,e.b/2),p=e.gdH()/2-h
$.W()
w=A.N()
w.b=B.af
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bV(q,p)
r=w.K()
v.drawArc.apply(v,[A.bY(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xW(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdH()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.K()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AR(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.K()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b01(d,e){var w,v=this
v.m2(d,e,D.ddu)
w=v.c
v.m7(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m7(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bLW(d,e,B.hI,w)
v.xW(d,e,B.c.j(0.7),6,8)},
bLW(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.K()
s.drawRect(A.bY(new A.a9(16,q,t,q+3)),p)
p.delete()}},
ceU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m2(d,e,D.cks)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.am(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
l.r=D.d21[B.o.E(s,4)].j(0.85).gp(0)
k=l.K()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m7(d,e,B.c.j(0.35),w,16)
j.xW(d,e,B.iI,5,12)},
ceB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m2(d,e,D.ckz)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdH()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.x(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h2(g,g,g,g,g,B.a4,B.cb,g,B.dR,B.c7)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d5S[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saU(0,new A.eR(r,g,g,B.d_,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.x(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.am(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ckB[o]
l=B.ko.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saU(0,new A.eR(m,g,g,B.d_,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.x(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.am(o,3)*0.38)+Math.sin(n)*6))}h.m7(d,e,B.c.j(0.35),w*1.5,14)
h.m7(d,e,B.eC.j(0.55),-v*3.141592653589793*2,8)
h.m7(d,e,B.xo.j(0.4),r*2.8,22)
h.xW(d,e,B.pz,8,10)
h.AR(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.K()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cf1(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m2(d,e,A_.awc)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.by(new A.a9(20,q,u,q+10),B.hD)
$.W()
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=A.aq(B.fT,B.oC,(r+1)/2).gp(0)
n=o.K()
t.drawRRect(A.eT(p),n)
n.delete()}m.m7(d,e,B.fT.j(0.35),w,15)
m.AR(d,e,8)},
ceX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m2(d,e,D.d2w)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.E(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.E(r*0.13,0.7)
$.W()
l=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.K()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m7(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.xW(d,e,B.pw,4,14)},
cfa(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m2(d,e,D.cSx)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
n.b=B.af
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.K()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xW(d,e,B.oI,6,12)
l.m7(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cfk(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m2(d,e,D.cy3)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.by(new A.a9(q,14,q+u,22),B.ix)
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=A.aq(B.fa,B.bL,(r+1)/2).gp(0)
o=p.K()
t.drawRRect(A.eT(q),o)
o.delete()}n.m7(d,e,B.c.j(0.3),w,16)
n.AR(d,e,8)
n.xW(d,e,B.vd,5,13)},
cf5(d,e){var w,v,u,t,s,r,q,p,o
this.m2(d,e,D.cYk)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.by(new A.a9(q,p,q+8,p+(18+r*22)),B.hU)
$.W()
q=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
q.r=[B.i0,B.dr,B.bL,B.ek][s].j(0.85).gp(0)
o=q.K()
t.drawRRect(A.eT(p),o)
o.delete()}this.m7(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cfc(d,e){var w,v,u,t,s,r,q,p,o
this.m2(d,e,D.cVT)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.K()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xW(d,e,B.cr,7,11)},
cfr(d,e){var w,v,u,t,s,r,q,p,o,n
this.m2(d,e,D.cAL)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.by(new A.a9(p,o,p+(t-r*8),o+16),B.hD)
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=A.aq(B.cr,B.aO,(Math.sin(q)+1)/2).gp(0)
n=p.K()
s.drawRRect(A.eT(o),n)
n.delete()}this.m7(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cfp(d,e){var w,v,u,t,s,r,q,p,o
this.m2(d,e,D.diX)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.by(new A.a9(r,q,r+28,q+8),B.hD)
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.K()
t.drawRRect(A.eT(q),o)
o.delete()}this.AR(d,e,6)},
ceO(d,e){var w,v,u,t,s,r,q,p,o,n
this.m2(d,e,D.d18)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lM.j(0.75).gp(0)
d.af(new A.x(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=B.hg.j(0.85).gp(0)
o.c=3
n=o.K()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m7(d,e,B.lM.j(0.35),w,14)},
cfb(d,e){var w,v,u,t,s,r,q,p,o=this
o.m2(d,e,D.d3y)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ci(new A.x(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.K()
t.drawOval(A.bY(r),p)
p.delete()}o.xW(d,e,B.pw,5,16)
o.AR(d,e,7)},
cfn(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m2(d,e,D.dgw)
w=m.c
v=w*3.141592653589793
m.m7(d,e,B.oC.j(0.55),v*3,10)
m.m7(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=B.oC.j(0.8).gp(0)
n=o.K()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cfq(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m2(d,e,D.djz)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.by(new A.a9(p,o,p+36,o+22),B.ix)
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=A.aq(B.iI,B.lM,q).gp(0)
n=p.K()
s.drawRRect(A.eT(o),n)
n.delete()}m.AR(d,e,9)
m.m7(d,e,B.c.j(0.4),w*2.2,12)},
ceH(d,e){var w,v,u,t,s,r,q,p,o,n
this.m2(d,e,D.d8B)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bV(new A.x(v,u),34)
$.W()
s=A.N()
s.b=B.af
s.c=5
s.r=B.c.j(0.45).gp(0)
d.eV(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=B.bO.j(0.85).gp(0)
n=o.K()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cez(d,e){var w,v,u,t,s,r,q,p
this.m2(d,e,D.d4z)
$.W()
w=A.N()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.K()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.K()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.E(t*0.85,1)
$.W()
u=A.N()
u.r=B.dr.j(0.45).gp(0)
d.b1(new A.a9(0,p,0+v,p+6),u)
this.m7(d,e,B.kR.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.as5.prototype={
a_7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPa(),$async$a_7)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8a(s),$async$a_7)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_7,v)},
afJ(d){return this.chH(d)},
chH(d){var w=0,v=A.j(x.H),u=this,t
var $async$afJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i8S(d),$async$afJ)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afJ,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jC:B.iZ
w=x.p
v=A.a([C.aPy(!0,B.qF,1/0,B.pZ,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b1,t,t,new A.D(B.vt,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ax7,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b1,B.b6,B.x,u,t,t),B.n),B.be))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bKX,D.fim,new C.cgo(this,d),A.bm(B.aV,t,t,t,B.c,t,B.jG,t,t,t,t,B.cc)),1),B.ab,A.E(A.er(D.bTe,D.fwW,this.gc8I(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jG,t,t,D.aZu,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fK(1.7777777777777777,A.aF(!1,B.a1,!0,B.qF,new A.an(B.V,t,B.b0,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aKJ.prototype={
aW(){this.b6()
this.b5()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a4(0,w.gdD())
w.b2$=null
w.a2()}}
C.aSw.prototype={}
C.aSv.prototype={}
C.aQu.prototype={}
C.YF.prototype={
U(){return new C.ay9()}}
C.ay9.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.ba("",B.b3,B.aM)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.aw()
w.P$=0
this.a2()},
K6(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.S(D.eZI)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aSw(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e_:B.c,k=A.n(20),j=A.p(n,D.bSU,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bz,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aI(n,n,n,n,A.X(B.cy,m?B.bs:B.bn,n,n,n,n),n,n,n,new C.d_1(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.haz(new C.d_2(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aO:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a6,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jC:B.iZ
r=A.n(12)
q=A.n(12)
p=m?B.e3:B.bO
t=A.aM(n,B.U,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b3(4,r,B.dj),n,n,n,n,n,n,!0,new A.b3(4,q,new A.az(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d_3(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.Jb,n,n,n,n)
u=m?B.aO:B.av
m=m?B.e3:B.bO
return A.eL(n,l,new A.cT(B.lH,A.cc(A.w(A.a([j,B.aQ,i,B.au,w,B.N,v,B.aQ,t,B.bw,A.B(A.a([A.E(A.dT(B.dh,new C.d_4(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.ck,n,new A.b7(A.n(12),B.W),new A.az(m,1,B.q,-1),n,n,n,n)),1),B.at,A.E(A.bG(D.fxa,o.ga2a(),A.bm(B.aV,n,n,n,B.c,n,B.ck,n,new A.b7(A.n(12),B.W),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.Bj,n,n,B.ah),n),n,n,n,X.Bk,B.d3,n,new A.b7(k,B.W),n)}}
C.YE.prototype={
U(){return new C.ay8()}}
C.ay8.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.aw()
w.P$=0
this.a2()},
K6(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.S(D.eXn)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aSv(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e_:B.c,n=A.n(20),m=A.p(q,D.bPs,B.f,q,q,new A.o(B.bR.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bz,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aI(q,q,q,q,A.X(B.cy,p?B.bs:B.bn,q,q,q,q),q,q,q,new C.cZY(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.akq,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aO:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jC:B.iZ
t=A.n(12)
s=A.n(12)
r=p?B.e3:B.bO
v=A.aM(q,B.U,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b3(4,t,B.dj),q,q,q,q,q,q,!0,new A.b3(4,s,new A.az(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cZZ(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kH,q,q,q,q)
w=p?B.aO:B.av
p=p?B.e3:B.bO
return A.eL(q,o,new A.cT(B.lH,A.cc(A.w(A.a([m,B.aQ,l,B.aB,v,B.bw,A.B(A.a([A.E(A.dT(B.dh,new C.d__(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.ck,q,new A.b7(A.n(12),B.W),new A.az(p,1,B.q,-1),q,q,q,q)),1),B.at,A.E(A.bG(D.fE2,this.ga2a(),A.bm(B.bR,q,q,q,B.c,q,B.ck,q,new A.b7(A.n(12),B.W),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.Bj,q,q,B.ah),q),q,q,q,X.Bk,B.d3,q,new A.b7(n,B.W),q)}}
C.Yc.prototype={
U(){return new C.awT()}}
C.awT.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aP()
v.e=new A.ar(new A.ba("1",B.b3,B.aM),w)
v.f!==$&&A.aP()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aP()
v.r=new A.ar(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.R$=w
u.P$=0
u=v.f
u===$&&A.c()
u.R$=w
u.P$=0
u=v.r
u===$&&A.c()
u.R$=w
u.P$=0
v.a2()},
gJr(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiW(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb2U(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNR(d){var w,v=B.k.D(this.gJr()+d,0.25,999999),u=B.k.ja(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saU(0,u)
this.m(new C.cxC())},
axh(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jC:B.iZ,s=A.n(14),r=A.n(14)
u=u?B.e3:B.bO
return A.br(w,new A.b3(4,s,B.dj),w,B.bC,w,w,w,w,!0,new A.b3(4,r,new A.az(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b3(4,A.n(14),B.aaU),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c8J(d,e,f){return this.axh(d,e,f,null)},
K6(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiW()<=0){s.c.I(x.q).f.S(D.f0A)
return}r=s.c
r.toString
v=s.gJr()
u=s.gaiW()
t=s.gb2U()
A.a4(r,!1).O(new C.aQu(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=n?B.e_:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bR.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bIU,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bz,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aI(o,o,o,o,A.X(B.cy,n?B.bs:B.bn,o,o,o,o),o,o,o,new C.cxI(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.U,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axh(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NQ),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.Jb,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jC:B.iZ
t=A.n(14)
s=A.I(n?B.e3:B.bO,B.q,1)
r=A.aI(o,o,o,o,A.X(B.yu,n?B.aO:B.av,o,o,o,20),o,o,o,new C.cxJ(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bUM,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cxK(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aO:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aI(o,o,o,o,A.X(B.hz,n?B.aO:B.av,o,o,o,20),o,o,o,new C.cxL(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aO:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axh(m,"Amount","0.00",B.hN),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dV,o,o,o,1,o,o,!1,"\u2022",o,new C.cxM(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cYO,new C.cxN(p,m),t),t.k("ak.E"))
i=A.a([i,B.bw,v,B.aB,h,B.N,s,B.ac,A.bZ(B.bD,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c8J(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cxO(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kH,o,o,o,o)],w))}i.push(B.aQ)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJr()===B.k.ja(p.gJr())?B.k.N(p.gJr()):p.gJr()
s=p.gb2U()
r=A.AO(p.gaiW())
i.push(A.p(o,A.B(A.a([A.E(A.w(A.a([u,B.au,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bC6(p.gJr()*p.gaiW(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jn,o,o,o))
i.push(B.bw)
j=A.n(14)
h=n?B.e3:B.bO
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.ck,o,new A.b7(j,B.W),new A.az(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cxP(d),h),1),B.at,A.E(A.dn(D.anU,D.fA1,p.ga2a(),A.bm(B.aV,o,o,0,B.c,o,B.ck,o,new A.b7(A.n(14),B.W),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eL(o,l,new A.cT(W.abi,A.cc(A.w(i,B.ai,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ad.r6,o,o,B.ah),o),o,o,o,B.MA,B.d3,o,new A.b7(k,B.W),o)}}
C.a0L.prototype={
U(){return new C.buP()}}
C.buP.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.ba(w,B.b3,B.aM),v)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e_:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aO:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aO:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jC:B.iZ
v=A.aM(s,B.U,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b3(4,A.n(12),B.dj),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f8u(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.am,s,s,s,s)
u=A.E(A.dT(B.dh,new C.f8v(d),s),1)
r=A.bm(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eL(s,q,new A.D(B.Bj,A.w(A.a([o,B.aB,v,B.aQ,A.B(A.a([u,B.at,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f8w(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d3,s,new A.b7(p,B.W),s)}}
C.abb.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.Fw.prototype={
U(){return new C.buN(null,null)}}
C.buN.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.br9,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bwN()},
gbyg(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bR,B.aZ],x.O)
case 2:return A.a([B.bu,B.aV,B.aZ],x.O)
case 3:return A.a([B.aP,B.c8,B.jZ],x.O)
case 4:return A.a([B.iF,B.bR,B.fb],x.O)
case 0:return A.a([B.aV,B.bR,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.eH(A.c7(v,new C.f8s(this,new C.tR(w.ax.a===B.I)),null),null)}}
C.awM.prototype={
U(){return new C.buO(null,null)}}
C.buO.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n4,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bwO()},
B(d){var w=this.d
w===$&&A.c()
return A.c7(w,new C.f8t(this),null)}}
C.buM.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aR(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iL(v))
w=A.N()
w.b=B.af
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.N()
w.b=B.af
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aS(u,w)
w=A.xc(u)
t=A.a([],x.f5)
w=new A.vD(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jX('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Ho(w,r)
w.jz()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRh(d,q,r,o,0,0.2,4.2,0.92)
p.aRh(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRh(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hwk(e.a.a,e,t,t+f*i,!0),r=A.bAu(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.af
w.c=j
w.d=B.bV
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.He,null).aA(0,r))
d.aS(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aML.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aMM.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.tR.prototype={}
C.as4.prototype={
U(){return new C.aEj()},
ge2(){return this.c}}
C.aEj.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.agA()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Ld(w,v)
this.a2()},
agA(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAB(t.c,t.d.a),$async$agA)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eI3(u,s))
return A.h(null,v)}})
return A.i($async$agA,v)},
PY(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eHV(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Ld(t,s),$async$PY)
case 2:if(u.c!=null)u.m(new C.eHW(u))
return A.h(null,v)}})
return A.i($async$PY,v)},
Qt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eI1(t,new C.tR(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qt)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8a(q),$async$Qt)
case 6:case 5:t.m(new C.eI2(t,r))
w=7
return A.b(t.PY(),$async$Qt)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qt,v)},
VD(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i8D(r),$async$VD)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eHQ(t,new C.r_(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PY(),$async$VD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VD,v)},
cdL(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hoe(t,new C.eHU(u),w,v)},
aaK(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.az(v,2.5,B.q,-1),B.W,B.W,new A.az(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aZg,w,w,B.n),w,22,w,w,w,w,w,22)},
a9O(d){return this.bKb(d)},
bKb(d){var w=0,v=A.j(x.H),u=this
var $async$a9O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eHT(u,d))
w=2
return A.b(u.PY(),$async$a9O)
case 2:return A.h(null,v)}})
return A.i($async$a9O,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bY:B.iD,d=A.n(8),a0=A.X(Q.a_y,f?B.bs:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.FF,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a6,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eI4(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.V,g,B.b0,B.r,A.a([A.bw(A.n(22),C.aPy(!0,A.n(22),1/0,B.pZ,g,d,1/0),B.aq),A.ao(10,A.dn(D.bNu,D.fCk,h.gb0N(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bR.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.V,g,B.b0,B.r,A.a([C.aPy(!0,A.n(16),1/0,B.Nk,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a8(B.b1,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.be),A.ao(g,h.aaK(!0),g,g,8,g,8,g),A.ao(g,A.cv3(h.aaK(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cv3(h.aaK(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cv3(h.aaK(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bJt,D.fvV,h.gb0N(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bWr,B.n),g,g,g,g,B.lU,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aO:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.b8J,B.nL,B.fV],u):A.a([B.aZ,B.aV,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.jJ,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h7,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bC6(h.d.gwW(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.I(B.hh.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aP.j(0.28),B.cH,14)],t)
j=B.aP.j(0.22)
i=A.n(10)
u=A.p(g,A.bw(r,new A.an(B.V,g,B.aa,B.r,A.a([p,new A.D(D.bvJ,A.B(A.a([o,B.at,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eB(new A.D(Ai.Be,A.w(A.a([A.p(g,D.anu,B.f,g,g,new A.o(j,g,A.I(B.aP.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fF,D.fl3],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcdK(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aQ,w,B.N,u,B.bw,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b5,A.dn(Ak.a1g,D.fiY,h.gbyJ(),A.bm(B.aV,g,g,g,B.c,g,B.im,g,new A.b7(A.n(12),B.W),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e_:B.c
v=A.n(14)
u=A.I(f?B.e3:B.bO,B.q,1)
t=A.X(B.a_T,f?B.bs:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.w(A.a([t,B.R,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.r7,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eI5(h,new C.tR(f)),A.T(w).k("M<1,t>")))
if(h.e)d.push(new A.D(B.B7,A.au(A.mI(g,f?B.bs:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bl(!0,A.w(A.a([new A.D(B.Bc,a0,g),A.E(A.cc(A.w(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xX,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),g,!1,!1,g,g)},
bCn(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e_:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b11,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.hO:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aO:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcTk()
v=A.AO(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.F,u,B.b7,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bR.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bC6(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h8,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DX(A.B(A.a([m,A.E(new A.D(B.ahC,A.B(A.a([l,B.bc,t,B.ab,k,A.aI(u,u,u,u,A.X(B.cy,(r?B.bs:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eHR(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b_T,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.ada.prototype={
Em(d){return this.bLy(d)},
bLy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Em=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p6(d,o,!1),$async$Em)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bM(Ac.B5,null,x.H),$async$Em)
case 4:s=t.d
w=5
return A.b(C.fGc(!0,o,s),$async$Em)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gp(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Em)
case 6:p=f
w=7
return A.b(A.p5(o,!1),$async$Em)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Em,v)},
a_8(d){return this.cu5(d)},
cu5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p6(d,s,!1),$async$a_8)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hD(d,new C.arZ(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p5(s,!1),$async$a_8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_8,v)},
PZ(d){return this.cq8(d)},
cq8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hD(d,D.aGz,!0,"NgmyWorksheetProjectScan",x.N),$async$PZ)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bC7(s),$async$PZ)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.S(D.f_I)
w=1
break}q=C.h0v(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$PZ)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PZ,v)},
a_9(d){return this.cCa(d)},
cCa(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bBF(),$async$a_9)
case 3:s=f
if(s==null){w=1
break}r=C.h0v(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$a_9)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_9,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tR(u),s=w.d.d.length,r=u?B.e_:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.ke,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vA,A.p(v,A.w(A.a([w.csE(d,t,s),new A.D(D.bv7,A.w(A.a([w.b3O(t,"QR restore"),B.R,A.B(A.a([w.aZL(t,!0,B.js,B.aP,B.aP,new C.eI7(w,d),"Show to scan","QR code"),B.at,w.axi(t,B.j3,B.b4,B.by,new C.eI8(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b3O(t,"Backup files"),B.R,A.B(A.a([w.axi(t,B.hB,B.aV,B.bR,new C.eI9(w,d),"Full copy","Backup file"),B.at,w.axi(t,L.yz,B.aF,B.aS,new C.eIa(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ae,!0,!0)},
csE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f2,B.cN,B.fx],k):A.a([B.aZ,B.aV,B.bR],k)
w=A.ao(l,A.X(B.u9,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.n(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aPy(!0,A.n(13),64,D.bEP,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aR7,l,l,l)
r=C.bC6(r.gwW(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.V,l,B.aa,B.r,A.a([w,new A.D(D.bvw,A.w(A.a([v,A.B(A.a([s,B.eo,A.E(A.w(A.a([u,B.au,t,B.N,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fD,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aI(l,l,l,l,A.X(B.cy,B.c.j(0.85),l,l,l,l),l,l,l,new C.eI6(d),l,l,l,A.nA(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aOq,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b3O(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZL(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.age:B.aO
if(e)w=B.aP.j(o?0.45:0.35)
else{w=o?B.e3:B.bO
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aP.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.r8,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aO:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eB(new A.D(E.YV,A.w(A.a([t,B.ac,u,B.bz,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
axi(d,e,f,g,h,i,j){return this.aZL(d,!1,e,f,g,h,i,j)}}
C.arZ.prototype={
U(){return new C.bk5()}}
C.bk5.prototype={
a_(){this.a1()
this.aet()},
aet(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aet=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bC8(p.c,p.d),$async$aet)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eHL(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHM(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aet,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AE:B.iD,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.X(B.eF,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eHN(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zG],u),B.m,h,B.e,B.j,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f2,B.cN,B.fx],s):A.a([B.aZ,B.aV,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.L,h,h)
p=C.bC6(p.gwW(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.w(A.a([o,B.an,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fD,h,h,h)],u),B.m,h,B.b7,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Zg,h,h,1/0)
t=g?D.bik:B.c
q=A.n(24)
p=A.I(w?B.aP.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7W,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ebs)
else{m=A.n(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pP(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bP,h,h,h))}}o.push(B.aQ)
n=w?B.aP:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.I((w?B.aP:B.aV).j(0.35),B.q,1)
k=w?B.NA:B.O4
k=A.X(k,w?B.aP:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a6,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.im,h,h,h))
return A.c6(h,f,A.bl(!0,A.w(A.a([new A.D(A7.MM,e,h),A.E(A.cc(A.w(A.a([s,B.aQ,A.p(h,A.w(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tN,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aiJ,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),h,!1,!1,h,h)}}
C.as3.prototype={
U(){return new C.aEi(A.zk(B.M3,B.nC,B.uh))}}
C.aEi.prototype={
q(){this.d.q()
this.a2()},
aLT(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iP(w,d)},
c9A(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i6x(t)
if(s!=null){this.aLT(s)
return}r=C.hf8(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aLT(B.a.i(B.a.b3(r,B.a.cK(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.ez(A.a([A.aI(t,t,t,t,A.X(u.f?B.u_:A2.NH,t,t,t,t,t),t,t,t,new C.eHP(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AE,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fvO,t,t,t,1,t,!0),q=A.zj(u.d,B.bU,u.gc9z()),p=A.n(28)
p=A.au(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c6(r,B.w,new A.an(B.V,t,B.b0,B.r,A.a([q,p,A.ao(32,A.p(t,D.fuB,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jn,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJ5.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.O1.prototype={
U(){return new C.aEk(D.aaa,A.a([],x.D))},
br(){return this.r.$0()},
ge2(){return this.c}}
C.aEk.prototype={
gcA2(){return J.bDh(this.e,0,new C.eIx())},
a_(){this.a1()
$.aV.bY$.push(this)
this.vE()},
q(){$.aV.hM(this)
this.a2()},
j6(d){if(d===B.fv)this.vE()},
vE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CR(q.a.c).d7(0,B.k4),$async$vE)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eIt(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eIu(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vE,v)},
HS(d){return this.bIk(d)},
bIj(){return this.HS(null)},
bIk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i8F(l,d),$async$HS)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lk(l,r,q,D.d8O,new A.S(Date.now(),0,!1))
w=4
return A.b(C.Ld(t.a.c,p),$async$HS)
case 4:o=f
w=5
return A.b(t.vE(),$async$HS)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.S(D.eXR)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.S(D.eZC)
else n.I(q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Eq(m)
case 1:return A.h(u,v)}})
return A.i($async$HS,v)},
Eq(d){return this.cdw(d)},
cdw(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Eq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hD(s,new C.as4(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Eq)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Ld(u.a.c,t),$async$Eq)
case 5:case 4:w=6
return A.b(u.vE(),$async$Eq)
case 6:return A.h(null,v)}})
return A.i($async$Eq,v)},
vr(d){return this.bYl(d)},
bYl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBF(),$async$vr)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hD(r,D.aGz,!0,"NgmyWorksheetProjectScan",x.N),$async$vr)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bC7(q),$async$vr)
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
r.S(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h0v(s)
w=15
return A.b(C.Ld(t.a.c,p),$async$vr)
case 15:o=f
w=16
return A.b(t.vE(),$async$vr)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.S(D.eZH)
w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Eq(p)
case 1:return A.h(u,v)}})
return A.i($async$vr,v)},
NN(d){return this.bH_(d)},
bH_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eIe(d),s,null,!0,!0,x.y),$async$NN)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oH(t.a.c,A.a([],x.D)),$async$NN)
case 6:w=7
return A.b(t.vE(),$async$NN)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eXW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
cdJ(d){var w=this.c
w.toString
A.bQ(B.K,null,new C.eIn(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4p(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jC
else w=B.c
v=A.n(16)
u=A.I(p?B.e3:B.bO,B.q,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aO:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.w(A.a([s,B.ac,t,B.bz,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vz,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_D(d,e){return this.cdx(d,e)},
cdx(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_D=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bQ(B.K,null,new C.eIi(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_D)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hoe(r,new C.eIj(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NP(d,e),$async$a_D)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_D,v)},
b1o(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aw
else t=h.a?B.aO:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.Bi,A.B(A.a([s,B.bc,t,A.X(B.eA,w?B.bs:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
ckp(d,e,f,g,h,i){return this.b1o(!1,d,e,f,g,h,i)},
NP(d,e){return this.bH9(d,e)},
bH9(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l7(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NP)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAo(t.a.c,d.a),$async$NP)
case 6:w=7
return A.b(t.vE(),$async$NP)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NP,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tR(o),m=o?B.bY:B.iD
if(q.f)o=D.b6C
else{w=q.bBw(n)
v=q.bXr(n)
u=q.gbyD()
if(o)t=B.jC
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ac,v,B.aQ,new C.Fw(A.p(p,A.B(A.a([q.aAM(N.Nj,"Projects",n,D.aaa),q.aAM(B.vL,"Cashier",n,D.aWf),q.aAM(B.G_,"Family Tree",n,D.hbx)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bw],r)
w=q.d
if(w===D.aaa){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aO:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b5,new C.awM(q.gaQ3(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.ckr(n)],r))}else{o=q.a
if(w===D.aWf)u.push(new C.ao4(o.c,n,p))
else{w=q.r
u.push(new C.apc(o.c,o.d,o.e,o.f,new C.eIA(q),new C.eIB(q),new A.cx(w,x.b4)))}}o=A.cc(A.w(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.MG,p,p,B.ah)}return A.c6(p,m,A.bl(!0,o,!0,!1,B.ae,!0,!0),p,!1,!1,p,p)},
bBw(d){var w=null,v=A.n(8),u=d.a,t=A.X(Q.a_y,u?B.bs:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kV,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIb(this),w,w,w,w,w,w,w)},
gbyD(){switch(this.d.a){case 0:return D.a9s
case 1:return D.h1H
case 2:return D.a9t}},
bXr(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bPi,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bzS,A.aF(!1,B.a1,!0,w,A.aL(!1,A.n(12),!0,A.p(w,D.bMN,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIf(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.n(12)
return new C.Fw(A.p(w,A.w(A.a([new A.D(E.Z0,s,w),A.p(w,A.w(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AO(this.gcA2()),w,w,w,w,w,w,D.ffo,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vy,B.jn,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ae,1,D.h1G,w)},
aAM(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.K,q=A.n(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bn
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.de(u,A.B(A.a([w,B.eg,new A.dq(1,B.cm,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b7,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iJ,u,u,u,B.FG,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eIw(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
ckr(d){var w,v,u,t,s,r,q=this,p=null
if(J.cm(q.e)){w=d.a
v=w?B.e_:B.c
u=A.n(15)
t=A.p(p,D.bMT,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bYU,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aO:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fw(A.p(p,A.w(A.a([t,B.d7,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRD(B.j3,"Scan QR",new C.eIq(q),d),1),B.at,A.E(q.aRD(L.yz,"Upload file",new C.eIr(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fFW,q.gaQ3(),A.bm(B.aV,p,p,p,B.c,B.fO,p,p,new A.b7(A.n(12),B.W),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bwA,1.05,D.a9s,p)}w=J.b6(q.e,new C.eIs(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fw(A.w(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a9s,p)},
aRD(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.w(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.fdP,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ahu,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
ckq(d,e){var w,v,u=null,t=e.a,s=t?B.e_:B.c,r=A.n(14),q=A.I(t?B.e3:B.bO,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.n(14),n=t?B.bs:B.bn
n=A.bw(B.Vu,new A.fK(1.7777777777777777,C.aPy(!0,B.fw,1/0,N.Nj,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.w(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aO:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AO(d.gwW()),u,u,u,u,u,u,D.fbW,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.w(A.a([n,new A.D(B.bC,A.B(A.a([v,A.aI(u,u,u,u,A.X(Af.a0x,t?B.bs:B.bn,u,u,u,u),u,u,u,new C.eIo(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eIp(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e8,u,u,u,1/0)}}
C.bwu.prototype={}
C.r_.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcTk(){var w,v,u,t,s=this.c
if(s===B.k.ja(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lk.prototype={
gwW(){return B.d.cM(this.d,0,new C.cx2())},
ag(){var w=this,v=w.d,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.cx1(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bbx(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lk(w.a,w.b,v,u,w.e)},
bbe(d){return this.bbx(d,null)},
SG(d){return this.bbx(null,d)}}
C.Hz.prototype={
a3(){return"FamilyGender."+this.b}}
C.i0.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hjZ(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDt(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i0(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akk.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kD.prototype={
gaoi(){var w=this.f
return new A.a_(w,new C.bNf(),A.T(w).k("a_<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.bNe(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i_0(w.y)],x.N,x.z)},
yC(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kD(w.a,v,u,t,s,r,w.r,q,p,o)},
bbw(d,e){var w=null
return this.yC(w,w,d,e,w,w,w,w)},
cJ0(d,e,f,g,h,i,j){return this.yC(d,e,f,g,h,i,j,null)},
aDy(d,e){var w=null
return this.yC(w,w,w,d,w,w,e,w)},
cHv(d){var w=null
return this.yC(w,w,w,w,w,w,d,w)},
cHT(d){var w=null
return this.yC(w,w,w,w,w,w,w,d)},
aDk(d){var w=null
return this.yC(w,w,w,w,d,w,w,w)},
cIx(d,e,f){var w=null
return this.yC(w,d,w,e,w,w,f,w)},
cHi(d){var w=null
return this.yC(w,w,d,w,w,w,w,w)},
cI5(d,e){var w=null
return this.yC(d,w,w,w,w,e,w,w)}}
C.cx3.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cx4.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aGn.prototype={}
C.b7Z.prototype={
bA(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b7Z()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7Y.prototype={
gwc(){return!0},
gFY(){return this.z.b<this.b.length},
aTg(d){switch(0){case 0:return d.a.c}},
aSY(d){switch(0){case 0:return d.a.d}},
bQR(d,e){switch(0){case 0:return new A.hM(d,e)}},
bQe(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h4(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iE(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Hi(b4)
switch(0){case 0:v=b5.b
u=new A.kA(0,v,0,1/0)
t=w===B.Tw
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h4(b4,u,!0)
f=b1.aTg(g)
f.toString
e=b1.aSY(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGn(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGn(k,j,i))}d=s.length
switch(0){case 0:q=b5.cw(new A.hM(m,l))
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aTg(g)
e=b1.aSY(g)
e.toString
a9=b1.bQe(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bQR(a6,a3+a9)
b0=g.a
g.a=new A.iE(e.a,e.b,b0.c,b0.d)
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
v.e9(u.a,u.b,0,1)
w.oW(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h0(d)
w.ni(0)},
Gt(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i9(){return this.z}}
C.buQ.prototype={}
var z=a.updateTypes(["aA<~>()","R(i0)","R(kD)","~()","R(nc)","a5<m,@>(kD)","H(kD,kD)","m(i0)","kD(a5<@,@>)","R(lk)","R(uj)","nc(a5<@,@>)","uj()","H(lk,lk)","i0(a5<@,@>)","a5<m,@>(i0)","R(r_)","aA<~>(lk)","eA<m?>(i0)","H(i0,i0)","m?(i0)","a5<m,@>(nc)","ZG(Y)","m(m)","acQ(Y)","t(oi)","H(nc,nc)","i0(i0)","cL(bv<m,FJ>)","cL(K_)","~(i0)","H?(i0)","i0()","ai<i0>()","R(ui)","R(K_)","D(i0)","~(Hz)","R(aen)","t(Hz,m,a1)","Z4(Y)","bv<m,ai<a5<m,@>>>(m,ai<nc>)","~(H)","+count,id,name(H,m,m)(kD)","kD(kD)","a_0(Y)","a_1(Y)","R(lA)","lA()","m(kD)","a0L(Y)","YF(Y)","YE(Y)","Z2(Y)","Z6(Y)","t(r_)","ada(Y)","~(lY)","aA<~>([m?])","K(K,lk)","t(lk)","K(K,r_)","a5<m,@>(r_)","r_(a5<@,@>)","YD(Y)","SB(Y)","cp(Hy)","lk(a5<@,@>)","ui()","m(lk)","a5<m,@>(lk)","m(S)","H(i0)","kD(a5<m,@>)","Yc(Y)"])
C.fyR.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.fyQ.prototype={
bkJ(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qT(s,d,B.hC,"book",E.Fl),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.L1(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bkJ(d)},
$S:338}
C.fyS.prototype={
$1(d){return d.b},
$S:126}
C.fI6.prototype={
$1(d){var w=null
return A.eL(w,B.K,new F.Pn(this.a,this.b,w),w,w,0,B.YW,B.d3,w,w,w)},
$S:47}
C.fn3.prototype={
$1(d){return d!=null},
$S:223}
C.fn4.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:223}
C.fn9.prototype={
$1(d){if(this.a)return new A.x(d.a*520,d.b*160)
return d},
$S:169}
C.fwA.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.h9(w,B.rB,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.el,w,!0,w,w,w,w),w),u=f?B.el:B.vF
return new A.nL(D.bsc,A.a9r(A.a([new A.fR(130,w,v),new A.z1(1,B.FT,A.fb(e,w,w,w,A.h9(w,g==null?D.edL:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xB,B.lw))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1917}
C.fwz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vu(999)
f=A.x4(A.lv(h,A.fb("Cashier",h,h,h,A.h9(h,D.zs,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.el,h,!0,h,h,h,h),h),h,new A.kB(D.edC,h,f,B.hF,h),h,h,D.bsF,h))
w=A.x4(A.fb("Debt receipt",h,h,h,A.h9(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.el,h,!0,h,h,h,h),h))
v=A.x4(A.fb(C.wN(new A.S(Date.now(),0,!1),!0),h,h,h,D.a81,h))
u=A.vu(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.h9(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.el,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a81,h)
q=A.vu(10)
p=x.C
u=A.lv(h,A.yV(A.a([s,new A.fR(h,2,h),r,new A.fR(h,10,h),A.lv(h,A.yV(A.a([A.fb("Amount owed",h,h,h,D.a81,h),new A.fR(h,2,h),A.fb(A.AO(t.c),h,h,h,A.h9(h,D.zs,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.el,h,!0,h,h,h,h),h)],p),B.r_,B.lw),h,new A.kB(B.pb,h,q,B.hF,h),h,h,D.brT,1/0)],p),B.r_,B.lw),h,new A.kB(E.aHN,h,u,B.hF,h),h,h,D.btI,1/0)
q=new A.nt(D.edF,0.9,B.kN)
r=A.vu(12)
s=i.c
o=s.$2("Original due",C.wN(t.r,!1))
n=s.$2("Current due",C.wN(t.f,!1))
m=i.d
l=new A.nt(m,1.1,B.kN)
k=A.vu(8)
j=i.a
k=A.a([o,n,new A.fR(h,6,h),A.lv(h,A.x4(A.fb(t.gaKo(),h,h,h,A.h9(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.el,h,!0,0.5,h,h,h),h)),h,new A.kB(h,new A.pz(l,l,l,l),k,B.hF,h),h,h,D.bsN,1/0),new A.fR(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zs))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zs))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.h9(h,B.rB,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.el,h,!0,h,h,h,h),h)
m=A.T(o).k("M<1,S9>")
o=A.C(new A.M(o,new C.fwy(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fR(h,4,h),n,new A.fR(h,6,h),new C.b7Y(5,5,new C.b7Z(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fR(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fR(h,8,h),w,new A.fR(h,3,h),v,new A.fR(h,16,h),u,new A.fR(h,10,h),A.lv(h,A.yV(k,B.xB,B.lw),h,new A.kB(h,new A.pz(q,q,q,q),r,B.hF,h),h,h,B.ahG,1/0)],p)
w=j.a
if(w!=null){v=new A.nt(B.Ip,1,B.kN)
B.d.v(f,A.a([new A.fR(h,16,h),A.fb("Debtor signature",h,h,h,A.h9(h,B.rB,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.el,h,!0,h,h,h,h),h),new A.fR(h,6,h),A.lv(h,new A.HP(w,B.VE,h,h),h,new A.kB(h,new A.pz(v,v,v,v),A.vu(6),B.hF,h),82,h,B.MK,1/0)],p))}f.push(new A.fR(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.f4N,h))
f.push(new A.fR(h,18,h))
f.push(A.x4(A.fb("NGMY.ORG",h,h,h,A.h9(h,D.zs,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.el,h,!0,1.8,h,h,h),h)))
return f},
$S:361}
C.fwy.prototype={
$1(d){var w=null,v=new A.nt(D.Iq,0.7,B.kN),u=A.vu(999)
return A.lv(w,A.fb(C.wN(d,!1),w,w,w,A.h9(w,D.Iq,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.el,w,!0,w,w,w,w),w),w,new A.kB(w,new A.pz(v,v,v,v),u,B.hF,w),w,w,D.bxX,w)},
$S:1918}
C.c2a.prototype={
$1(d){var w=null,v=B.bx.j(0.08),u=A.n(999),t=A.I(B.bx.j(0.28),B.q,1)
return A.p(w,A.d(C.wN(d,!1),w,w,w,w,w,w,D.fbq,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
$S:1919}
C.fIC.prototype={
$1(d){var w=null,v=A.aH(d,B.bW,x.w).w,u=A.n(26),t=A.aI(w,w,w,w,D.bQc,w,w,w,new C.fIz(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eL(w,B.K,new A.cT(new A.aX(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.YL,A.w(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.cm,A.cc(A.w(A.a([new A.eH(new C.aXY(r,w),s),B.R,A.B(A.a([A.E(A.er(B.yH,D.fCg,new C.fIA(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.b7(A.n(14),B.W),new A.az(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a16,D.fyM,new C.fIB(r,d),A.bm(B.aZ,w,w,w,B.c,w,B.f8,w,new A.b7(A.n(14),B.W),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Z9,B.d3,w,w,w)},
$S:47}
C.fIz.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fIA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.aj$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.hu(B.h0),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dC.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rZ(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fIB.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fDa(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.S(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fIu.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eL(w,B.av,A.w(A.a([new A.D(D.btw,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.mK,w,w,w),1),A.aI(w,w,w,w,B.lu,w,w,w,new C.fIs(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cm,new A.D(B.fY,A.bw(A.n(14),A.fO(t,B.A,w,w,B.ce,B.du,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Mp,new A.a7(1/0,w,A.dn(B.p0,D.aRz,new C.fIt(t,this.c,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.W),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.MB,B.d3,w,new A.b7(v,B.W),w)},
$S:47}
C.fIs.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fIt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rZ(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fIG.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eL(w,B.av,new A.D(D.btE,A.w(A.a([A.B(A.a([D.byZ,A.aI(w,w,w,w,B.lu,w,w,w,new C.fIE(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.eH(A.bw(A.n(14),A.p(w,A.b4(w,w,w,new C.ba5(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.p0,D.aRz,new C.fIF(t,s,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.W),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d3,w,new A.b7(v,B.W),w)},
$S:47}
C.fIE.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fIF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.aj$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.hu(B.h0),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eU(B.dC.gaP(s))
w=5
return A.b(A.rZ(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.frj.prototype={
$1(d){return d.a===this.a},
$S:258}
C.dG6.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dFS.prototype={
bjY(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e_:B.c
s=u.a
w=2
return A.b(A.bQ(t,null,new C.dFV(s,q,e),p,!0,!0,!1,B.IG,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dFW(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bjY(d,e)},
$S:1920}
C.dFV.prototype={
$1(d){var w,v=null,u=this.c===B.wf,t=u?D.dfh:D.db9
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aO:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(K.aid,A.w(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.iv(!0,v,v,B.y,D.eWx,new C.dFU(this.a,w,t,d),t.length,v,B.dT,B.ah,!0)],x.p),B.ai,v,B.e,B.Q,0,B.p),v),!0,!1,B.ae,!0,!0)},
$S:25}
C.dFU.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cN.j(0.14)
else w=t.b.a.d.a?B.M:B.aO
v=A.n(14)
if(q)u=B.cN
else u=(t.b.a.d.a?B.bs:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXX(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dFT(t.d,r),s,s,s,s,s,s,s)},
$S:192}
C.dFT.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dFW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dFQ.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:91}
C.dFR.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.d_(e,!1,A.ip(B.A,A.au(A.aF(!1,B.a1,!0,v,new A.dY(new C.dFP(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:32}
C.dFP.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e_:B.c,f=A.n(14),e=A.I((h?B.bs:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.ev,A.X(B.cy,i.a.d.a?B.bs:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFA(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aO:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aS8("Name")
r=l.a
q=r.d==null?k:new C.dFB(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bm:B.lO
n=A.I(B.cN.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.U,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bbp(new A.D(B.fB,A.aL(!1,p,!0,A.p(B.A,C.aXX(m==null?"\ud83d\udc64":A.fxo(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kH,k,B.a7O,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.B(A.a([A.E(i.aSO("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dFC(r,a0),r.d===B.wf),1),B.ab,A.E(i.aSO("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dFH(r,a0),r.d===B.a4I),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.hm(D.bOx,D.fAC,new C.dFI(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cN,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aO:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.um(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aS9("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dV,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aO
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.I((t?B.bs:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wN(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.w(A.a([t,B.bz,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bLn],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFJ(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aO:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aS8("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b_L(r.b.length!==0,B.mu,new C.dFK(r,i,a0),new C.dFL(r,a0),"Upload from gallery","ID photo"))
v.push(i.b_L(r.c.length!==0,D.bEN,new C.dFM(r,i,d,a0),new C.dFN(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ah.a7f("Signature (optional)",t,new C.dFO(a0),new C.dFD(a0,t),new C.dFE(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bn
s=(i?B.bs:B.bn).j(0.28)
s=A.E(A.dT(E.aRs,new C.dFF(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tI,k,new A.b7(A.n(10),B.W),new A.az(s,1,B.q,-1),k,k,k,k)),1)
t=A.bm(B.cN,k,k,k,B.c,k,B.tI,k,new A.b7(A.n(10),B.W),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uR,k,k,k),new C.dFG(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cc(A.w(v,B.ai,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vC,B.jn,k,k,360)},
$S:168}
C.dFA.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dFB.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFC.prototype={
$0(){return this.b.$1(new C.dFz(this.a))},
$S:0}
C.dFz.prototype={
$0(){var w=this.a
w.d=B.wf
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFH.prototype={
$0(){return this.b.$1(new C.dFy(this.a))},
$S:0}
C.dFy.prototype={
$0(){var w=this.a
w.d=B.a4I
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFI.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wR(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dFx(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFx.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gcf(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dFK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pm(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dFw(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFw.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dFL.prototype={
$0(){return this.b.$1(new C.dFv(this.a))},
$S:0}
C.dFv.prototype={
$0(){return this.a.b=""},
$S:0}
C.dFM.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e_:B.c
w=3
return A.b(A.bQ(q,null,new C.dFt(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pm(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dFu(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFt.prototype={
$1(d){var w=null
return A.bl(!0,A.w(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.anl,w,w,w,w,new C.dFn(d),!1,w,w,w,w,w,w,w,D.fr1,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.anj,w,w,w,w,new C.dFo(d),!1,w,w,w,w,w,w,w,D.fxO,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ae,!0,!0)},
$S:25}
C.dFn.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dFo.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dFu.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dFN.prototype={
$0(){return this.b.$1(new C.dFs(this.a))},
$S:0}
C.dFs.prototype={
$0(){return this.a.c=""},
$S:0}
C.dFO.prototype={
$0(){return this.a.$1(new C.dFr())},
$S:0}
C.dFr.prototype={
$0(){},
$S:0}
C.dFD.prototype={
$0(){return this.a.$1(new C.dFq(this.b))},
$S:0}
C.dFq.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dFE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahm(u.a,null,null,new C.dFp(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFp.prototype={
$4(d,e,f,g){this.a.$1(new C.dFm(this.b,d))},
$S:442}
C.dFm.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dFF.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dFG.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.S(D.f0z)
return}if(w.a.d==null){w.c.I(x.q).f.S(D.eYt)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dG9.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:91}
C.dGa.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e_:B.c,n=A.n(14),m=A.I((p?B.bs:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aO:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AO(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z_(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z_(r).length>0?B.bx:B.cN,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bn
t=(q?B.bs:B.bn).j(0.28)
s=x.p
return new A.d_(e,!1,A.au(A.aF(!1,B.a1,!0,r,A.p(r,A.w(A.a([p,B.N,v,u,B.aB,A.B(A.a([A.E(A.dT(B.nw,new C.dG7(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jG,r,new A.b7(A.n(10),B.W),new A.az(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fyc,new C.dG8(d),A.bm(B.cN,r,r,r,B.c,r,B.jG,r,new A.b7(A.n(10),B.W),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bl,E.Z0,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:32}
C.dG7.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dG8.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dG3.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dG4(r),p=r.a.d.a,o=p?B.e_:B.c,n=A.n(14),m=A.I((p?B.bs:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aO:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AO(l.c),s,s,s,s,s,s,D.fcW,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iA((r.a.d.a?B.bs:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_T,"View receipt",new C.dFX(r,d,l))
u=l.x!=null
t=u?B.rg:B.q1
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.btB,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dFY(r,d,l)),q.$3$icon$label$onTap(B.BC,"Edit",new C.dFZ(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mu,"View / download ID",new C.dG_(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bEM,"View / download selfie",new C.dG0(r,d,l)))
if(l.gaF9())p.push(q.$3$icon$label$onTap(A6.a0X,"View / download signature",new C.dG1(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bx,B.ef,"Delete",new C.dG2(r,d,l)))
p.push(B.au)
return A.bl(!0,new A.D(B.vy,A.p(s,A.w(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ae,!0,!0)},
$S:25}
C.dG4.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aO:B.av
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1921}
C.dFX.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fIy(w,this.c)},
$S:0}
C.dFY.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.S2(this.c)},
$S:0}
C.dFZ.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.D2(this.c)},
$S:0}
C.dG_.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCu(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dG0.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCu(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dG1.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fID(w,this.c)},
$S:0}
C.dG2.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.O_(0,this.c)},
$S:0}
C.dGb.prototype={
$1(d){return d.x==null},
$S:258}
C.dGc.prototype={
$1(d){return d.x!=null},
$S:258}
C.dGd.prototype={
$2(d,e){return d+e.c},
$S:1922}
C.dGe.prototype={
$0(){return this.a.bz7()},
$S:0}
C.dG5.prototype={
$0(){return this.a.aeG(this.b)},
$S:0}
C.frX.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.frY.prototype={
$0(){return B.d.gH(D.a2a)},
$S:z+68}
C.d6g.prototype={
$0(){var w=this.a
return w.m(new C.d6e(w,this.b))},
$S:0}
C.d6e.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d6f.prototype={
$0(){},
$S:0}
C.d6h.prototype={
$0(){var w=this.a.gbY9()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fub.prototype={
$1(d){return C.h4H(A.a2(d,x.N,x.z))},
$S:z+11}
C.fuc.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fud.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aM(w,v)
return d.d.aM(0,e.d)},
$S:z+26}
C.fHc.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fPm.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fra.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bNa.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1923}
C.fHL.prototype={
$1(d){var w=this
return new C.Z4(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d6W.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d6V(w,d))},
$S:z+66}
C.d6V.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6K.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d6H.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d6i.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d6j.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d6L.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d6r.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e_:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.d6p(d),w,w),A.bG(B.wD,new C.d6q(d),A.bm(B.mS,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.d6p.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d6q.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d6s.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d6I.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d6J.prototype={
$0(){return B.d.gH(D.yT)},
$S:z+12}
C.d6n.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyk(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.SB(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d6o.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6t.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YD(v,u,J.ad(w.d),null)},
$S:z+64}
C.d6u.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6U.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.Yl(r.y,r.gyk(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d6S(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9u(v,e,w,u,t,r.gbPk(),C.hjY(r.y.Q),r.gyk(0),s)
w=t}return A.c7(q,new C.d6T(r,e),new A.D(B.Z1,w,s))},
$S:1924}
C.d6T.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd0(t).ay){t=this.b
u=x.cy.a(B.d.gd0(u.f.f)).guK(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fC(v*3.141592653589793*0.5)
return A.fu(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d6S.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGi(B.pO,B.iK)},
$S:0}
C.d6E.prototype={
$0(){var w=this.a
return w.m(new C.d6D(w))},
$S:0}
C.d6D.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6F.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.d6k.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.jY.j(0.5),r=x.p,q=A.a([D.fpE,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cm(p.d)?"Write this book":"Write a new book"
q.push(p.YN(d,B.e0,w,J.cm(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YN(d,M.alf,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kq.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kq.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YN(d,A0.amn,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YN(d,B.q7,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YN(d,B.q7,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eL(u,E.AO,A.bl(!0,new A.D(A5.xU,A.w(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ae,!0,!0),u,u,u,D.aiC,B.d3,u,new A.b7(t,new A.az(s,1.4,B.q,-1)),u)},
$S:47}
C.d6G.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.d6x.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.Z6(v,J.cJ(w.d),w.r+1,null)},
$S:z+54}
C.d6y.prototype={
$1(d){var w=null
return A.op(!1,A.ek(w,w,w,E.AO,new A.jI(this.a,new C.d6w(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:337}
C.d6w.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7u,B.oh,A.E(A.d(e,w,w,w,w,w,w,B.iS,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:745}
C.d6z.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d6A.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:181}
C.d6B.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6C.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AX(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rp(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d6v(s,t))
w=4
return A.b(s.l_(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6v.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6N.prototype={
$1(d){var w=null
return A.op(!1,A.ek(w,w,w,E.AO,new A.jI(this.a,new C.d6M(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:337}
C.d6M.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7u,B.oh,A.E(A.d(e,w,w,w,w,w,w,B.iS,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:745}
C.d6O.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d6P.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:181}
C.d6Q.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:181}
C.d6R.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AX(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l_(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6l.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bgZ(B.pO,V.Mc)},
$S:0}
C.d6m.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGi(B.pO,V.Mc)},
$S:0}
C.d8G.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d8H.prototype={
$1(d){var w=this.a
return w.m(new C.d8F(w))},
$S:8}
C.d8F.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d8I.prototype={
$1(d){var w=this.a
return w.m(new C.d8E(w))},
$S:8}
C.d8E.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d8J.prototype={
$1(d){var w=this.a
return w.m(new C.d8D(w))},
$S:8}
C.d8D.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d8K.prototype={
$0(){var w=this.a
return w.m(new C.d8C(w,this.b))},
$S:0}
C.d8C.prototype={
$0(){var w=this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.d8L.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1r()
A.a4(this.b,!1).O(new A.bnR(w,v))},
$S:0}
C.d7a.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d79.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Z2(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d7e.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d7d.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b74(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hW,v,v,v)
return A.ek(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.d7b(d),v,v),A.bG(B.wD,new C.d7c(d),A.bm(B.mS,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AO,w,v,v,v,v,D.fov,v)},
$S:18}
C.d7b.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d7c.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d7f.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d7g.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cc(A.bZ(B.bD,r,B.br,18,14),B.r,t,B.y,t,D.buv,t,t,B.ah)},
$S:283}
C.d78.prototype={
$0(){return this.a.Q2(0,this.b)},
$S:0}
C.d77.prototype={
$0(){return this.a.Px(0,this.b)},
$S:0}
C.cFP.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cFQ.prototype={
$0(){return B.d.gH(D.yT)},
$S:z+12}
C.cFR.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bT(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.be),w),0,0,0)},
$S:1926}
C.cZf.prototype={
$1(d){return this.a.m(new C.cZe(this.b,this.c))},
$S:8}
C.cZe.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cZE.prototype={
$1(d){return this.a.m(new C.cZr())},
$S:2}
C.cZr.prototype={
$0(){},
$S:0}
C.cZF.prototype={
$1(d){return this.a.m(new C.cZq())},
$S:2}
C.cZq.prototype={
$0(){},
$S:0}
C.cZG.prototype={
$0(){var w=this.a
return w.m(new C.cZp(w,this.b))},
$S:0}
C.cZp.prototype={
$0(){var w=this.a
return w.d=w.go4().FC(this.b.a)},
$S:0}
C.cZH.prototype={
$0(){var w=this.a
return w.m(new C.cZo(w,this.b))},
$S:0}
C.cZo.prototype={
$0(){var w=this.a
return w.d=w.go4().cGP(this.b)},
$S:0}
C.cZI.prototype={
$1(d){return this.a.m(new C.cZn())},
$S:2}
C.cZn.prototype={
$0(){},
$S:0}
C.cZJ.prototype={
$0(){var w=this.a
return w.m(new C.cZm(w,this.b))},
$S:0}
C.cZm.prototype={
$0(){var w=this.a
return w.d=w.go4().cGU(this.b.a)},
$S:0}
C.cZK.prototype={
$1(d){var w=this.a
return w.m(new C.cZz(w,d))},
$S:6}
C.cZz.prototype={
$0(){var w=this.a
return w.d=w.go4().cHO(this.b)},
$S:0}
C.cZL.prototype={
$1(d){var w=this.a
return w.d=w.go4().aDn(d)},
$S:2}
C.cZM.prototype={
$1(d){var w=this.a
return w.d=w.go4().cGX(d)},
$S:2}
C.cZO.prototype={
$1(d){var w=this.a
return w.d=w.go4().cHM(d)},
$S:2}
C.cZP.prototype={
$1(d){var w=this.a
return w.m(new C.cZy(w,d))},
$S:8}
C.cZy.prototype={
$0(){var w=this.a
return w.d=w.go4().cHD(this.b)},
$S:0}
C.cZQ.prototype={
$0(){var w=this.a,v=w.go4(),u=B.a.i(w.gyk(0).a.a),t=B.a.i(w.gaAA().a.a)
u=v.bbG(B.a.i(w.gaqr().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.dTr.prototype={
$0(){var w=this.a
w.vQ()
w.a.br()
w.a.pU()},
$S:0}
C.dTq.prototype={
$0(){var w=this.a
w.vQ()
w.a.br()
w.a.pU()},
$S:0}
C.dTt.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cm(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTv.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTp.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTs.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTx.prototype={
$0(){this.a.Ov()
return null},
$S:0}
C.dTw.prototype={
$0(){return this.a.Er(this.b)},
$S:0}
C.dSS.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dh,w,w,!0,w,w,new C.dSQ(d),w,w),r=A.bm(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dSR(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dSQ.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dSR.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dST.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cHi(this.b)},
$S:0}
C.dSN.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSo(w.b,w.c,w.d)},
$S:9}
C.dSl.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dSm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gs(t.a.c),$async$$0)
case 2:s=r.rg(q.dJ(e,new C.dSy(t)))
if(s!=null&&t.c!=null)t.m(new C.dSz(t,s))
t.a.br()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSy.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSB.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSM.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cI5(C.hk7(w),w)},
$S:0}
C.dSK.prototype={
$1(d){return new A.dY(new C.dSJ(this.a,this.b),null)},
$S:19}
C.dSJ.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e_:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.av,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aI(v,v,v,v,B.an_,v,v,v,p>0?new C.dSF(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.w(A.a([r,B.aQ,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.av,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aI(v,v,v,v,B.anx,v,v,v,new C.dSG(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.dSH(d),v,v),A.bG(B.pn,new C.dSI(d),A.bm(B.bR,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:159}
C.dSF.prototype={
$0(){return this.b.$1(new C.dSE(this.a))},
$S:0}
C.dSE.prototype={
$0(){return--this.a.a},
$S:0}
C.dSG.prototype={
$0(){return this.b.$1(new C.dSD(this.a))},
$S:0}
C.dSD.prototype={
$0(){return++this.a.a},
$S:0}
C.dSH.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dSI.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dSL.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cHT(this.a.a)
w.r.a8(0)},
$S:0}
C.dS9.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahu(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hdM(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dSa.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDk(w)},
$S:0}
C.dSV.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acQ(this.b,w,this.c,null)},
$S:z+24}
C.dSP.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e_:B.c,t=A.n(20),s=A.X(B.lr,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.w(p,B.m,w,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bG(D.fzo,new C.dSO(d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b7,w,u,v,w,s,w,new A.b7(t,B.W),r,w)},
$S:18}
C.dSO.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dSb.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dSc.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dSd.prototype={
$1(d){return d.a},
$S:z+7}
C.dSe.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i0(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDk(w)},
$S:0}
C.dSi.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahu(q)
w=A.T(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dSg(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hdM(v.e,null,r,v.f,v.r,new C.dSh(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dSh.prototype={
$0(){return this.a.a9P(this.b)},
$S:0}
C.dSg.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dSj.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("M<1,i0>")
w=A.C(new A.M(w,new C.dSf(this.b),v),v.k("ak.E"))
u.d=t.aDk(w)},
$S:0}
C.dSf.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSU.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSv.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSw.prototype={
$1(d){var w=this
return new A.dY(new C.dSu(w.a,w.b,w.c,w.d),null)},
$S:19}
C.dSu.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e_:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aO:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dSq(u,e,o),A.T(o).k("M<1,t>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.U,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b3(4,A.n(12),B.dj),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.m8,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.am,v,v,v,v))
p=A.w(p,B.ai,v,B.e,B.Q,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.dSr(d),v,v),A.bG(B.JC,new C.dSs(t,u,o,e),A.bm(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fmB,new C.dSt(t,u,o,d),A.bm(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:159}
C.dSq.prototype={
$1(d){var w=null
return A.dL(!1,B.ae,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aO:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.bS9,w,w,w,new C.dSp(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1927}
C.dSp.prototype={
$0(){return this.a.$1(new C.dSn(this.b,this.c))},
$S:0}
C.dSn.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSr.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dSs.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dSo(w.c,u))
v.bP(0,B.c4)}},
$S:0}
C.dSo.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dSt.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dSx.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cIx(this.b,D.tP,C.Gq(v,w.a.c))},
$S:0}
C.dT1.prototype={
$1(d){return d.as},
$S:z+1}
C.dT2.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iP(this.b,w)},
$S:0}
C.dT3.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i8m(v)
return w.VJ(v==null?null:v.a)},
$S:0}
C.dT4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hLC(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cqi(new A.as(u,t),v.gbhR(),new A.as(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cR2:D.cPp
q=A.I(s?B.dB:D.bcf,B.q,1)
p=A.n(22)
o=A.bT(0,A.b4(m,m,m,new C.bcR(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.V,m,B.aa,B.r,A.a([o,A.bT(0,A.uv(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdJ(l.d,v,l.f,w,new C.dSY(l),l.gcae(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.buY(s,new C.dSZ(l,e),new C.dT_(l,e),new C.dT0(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b1,B.b6,B.x,r,m,m),B.n),m,m,m,R.ahK,m,m,m,m)},
$S:212}
C.dSY.prototype={
$1(d){var w=this.a
w.m(new C.dSW(w,d))},
$S:2}
C.dSW.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dSZ.prototype={
$0(){var w=this.b
return this.a.b9l(1.25,new A.as(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dT_.prototype={
$0(){var w=this.b
return this.a.b9l(0.8,new A.as(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dT0.prototype={
$0(){var w=this,v=w.b
return w.a.aSo(new A.as(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.as(w.c,w.d),w.e.gbhR())},
$S:0}
C.dT5.prototype={
$0(){var w=this.a
return w.m(new C.dSX(w))},
$S:0}
C.dSX.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dSk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fM(new A.fD(s.c)),$async$$0)
case 2:t.xM("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7k.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhn(u,C.hoi(v.c,u),new C.d7j(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d7j.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d7l.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkA(d.d,d.c,u.f.t(0,d.a),new C.d7i(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d7i.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fs0.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.rg(new A.cP(new A.a_(v,new C.fs1(d),w.k("a_<1>")),new C.fs2(),w.k("cP<1,m>")))},
$S:z+20}
C.fs1.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fs2.prototype={
$1(d){return d.a},
$S:z+7}
C.frZ.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fs_.prototype={
$1(d){return d.b},
$S:z+7}
C.fs5.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.rg(new A.cP(new A.a_(v,new C.fs6(d),w.k("a_<1>")),new C.fs7(),w.k("cP<1,m>")))},
$S:z+20}
C.fs6.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fs7.prototype={
$1(d){return d.a},
$S:z+7}
C.fs3.prototype={
$1(d){var w,v=A.eC([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fs4.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d7n.prototype={
$0(){return this.a},
$S:z+32}
C.d7E.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:246}
C.d7w.prototype={
$2(d,e){var w=this.a.ca(0,d,new C.d7x()),v=J.a3(w)
if(!v.t(w,e))v.L(w,e)},
$S:117}
C.d7x.prototype={
$0(){return A.a([],x.s)},
$S:746}
C.d7v.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:339}
C.d7o.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d7u.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d7t.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.Cr:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.Cr:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1929}
C.d7p.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d7y.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.L(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.U:u)
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
t=J.aW(t==null?D.Cr:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b4(w,new C.d7z(r)))w.push(r)}}B.d.bs(w,new C.d7A(a8))
B.d.aZ(w,new C.d7B())
q=C.hLB(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eCh],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gH(k)+B.d.gak(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bnB(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1930}
C.d7z.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d7A.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d7B.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.d7C.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a3(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a6(v).k("bc<2>")).cM(0,0,B.qI)+88-w.gH(n).a}else u=0
for(w=J.a3(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:694}
C.d7D.prototype={
$1(d){return 16+d*156},
$S:244}
C.d7m.prototype={
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
t.n(0,d,new C.FJ(r,new A.x(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FJ(s,new A.x(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FJ(s,new A.x(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.K_(d,new A.x(e+t,w),s,s.length))}},
$S:181}
C.d7q.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIo(new A.x(v.a,v.b+28),new A.x(w.a,w.b+28),!0,null))},
$S:117}
C.d7r.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d7s.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:747}
C.d7F.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:747}
C.d7G.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:464}
C.d7H.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:175}
C.d7I.prototype={
$1(d){return d>=0.5},
$S:124}
C.f92.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hw(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.co,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1932}
C.eKU.prototype={
$1(d){var w=null,v=A.n(8),u=B.bR.j(0.12),t=A.n(8)
return new A.D(B.n9,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f8C,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.MJ,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKT(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eKT.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dns.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dnr.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nv,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.dnp(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mk,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dnq(d),w,w)],x.p),B.b7,B.Ba,w,u,D.bvL,w,D.bxI,new A.b7(v,B.W),w,w)},
$S:18}
C.dnp.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dnq.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dnB.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dnC.prototype={
$1(d){var w=this.a
return w.m(new C.dnA(w,d))},
$S:z+37}
C.dnA.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dnD.prototype={
$1(d){var w=null
return A.qm(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnG.prototype={
$1(d){var w=this.a
return w.m(new C.dnz(w,d))},
$S:33}
C.dnz.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dnF.prototype={
$1(d){var w=null
return A.qm(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnH.prototype={
$1(d){var w=this.a
return w.m(new C.dny(w,d))},
$S:33}
C.dny.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnI.prototype={
$0(){var w=this.a
return w.m(new C.dnx(w))},
$S:0}
C.dnx.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dnJ.prototype={
$0(){var w=this.a
return w.m(new C.dnw(w))},
$S:0}
C.dnw.prototype={
$0(){return++this.a.at},
$S:0}
C.dnK.prototype={
$0(){var w=this.a
return w.m(new C.dnv(w))},
$S:0}
C.dnv.prototype={
$0(){return--this.a.ax},
$S:0}
C.dnL.prototype={
$0(){var w=this.a
return w.m(new C.dnu(w))},
$S:0}
C.dnu.prototype={
$0(){return++this.a.ax},
$S:0}
C.dnM.prototype={
$1(d){var w=this.a
return w.m(new C.dnt(w,d))},
$S:8}
C.dnt.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dnE.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dnN.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.e_:B.c
v=A.n(12)
if(p)u=B.bR
else u=(q.c.a?B.e3:B.bO).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bs:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bs:B.bn
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.de(r,A.w(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eJ,r,r,r,B.jG,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dnO(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dnO.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dnX.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.c8I.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:93}
C.c8P.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c8Q.prototype={
$2(d,e){var w=J.b6(e,new C.c8O(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c8O.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c8K.prototype={
$1(d){return C.akl(A.a2(d,x.N,x.z))},
$S:z+8}
C.c8L.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c8M.prototype={
$1(d){return C.h4H(A.a2(d,x.N,x.z))},
$S:z+11}
C.c8N.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c8U.prototype={
$1(d){return new A.aFt(d.f.length,d.a,d.b)},
$S:z+43}
C.c8V.prototype={
$2(d,e){return B.a.aM(d.c,e.c)},
$S:641}
C.c8R.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c8S.prototype={
$1(d){return d.cHv(C.Gq(d,this.a))},
$S:z+44}
C.dTe.prototype={
$1(d){return C.u2(d,this.a.a.c)},
$S:z+2}
C.dTf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dTj.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dTk.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dTb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZs(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yl("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p5(r.c,r.e),$async$$0)
case 4:s.yl(p)
w=5
return A.b(s.Jw(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZs(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yl("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p5(r.c,r.e),$async$$0)
case 4:s.yl(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UY(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yl("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yl("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yl("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jw(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yl(B.a.ef(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dTi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZr(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yl("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cm(A.e9(new C.dTh(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p5(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTh.prototype={
$1(d){var w=this.b
return new C.a_0(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dTg.prototype={
$1(d){return D.h6i},
$S:z+46}
C.dTm.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dTn.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dTl(w,d)
return new A.D(B.d9,new C.bdN(this.b,d.c,d.a,w,null),null)},
$S:1933}
C.dTl.prototype={
$0(){return this.a.Xr(this.b.b)},
$S:0}
C.dT6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dT7.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dT8.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dT9.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dTa.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dTo.prototype={
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
$S:177}
C.dFe.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dFf.prototype={
$0(){return B.d.gH(D.a3A)},
$S:z+48}
C.dFg.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.au(A.X(this.b.d,B.c.j(0.95),w,w,D.cXg,44),w,w,w),w,w,new C.bit(u,t,v,w),B.az)},
$S:70}
C.fId.prototype={
$1(d){return A.oR(new C.fIc(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:131}
C.fIc.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e_:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rA,24)],x.V),o=r?B.e3:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bR.j(0.18)],x.O)
w=A.p(t,D.bMC,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aO:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.w(A.a([B.R,o,new A.D(E.aiH,A.B(A.a([w,B.bc,A.E(A.w(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.iv(!0,t,e,B.y,D.eWF,new C.fIb(this.b,s),20,B.aih,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kM,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fIb.prototype={
$2(d,e){var w=null,v=D.a3A[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.I(s?B.e3:B.bO,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.n(15),o=A.E(new C.a5W(v.a,!0,w),1),n=s?B.jC:B.iZ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aO:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eB(A.bw(p,A.w(A.a([o,A.p(w,A.w(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.kY,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fIa(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:77}
C.fIa.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cgo.prototype={
$0(){return this.a.afJ(this.b)},
$S:0}
C.fHA.prototype={
$1(d){return D.h24},
$S:z+74}
C.fP3.prototype={
$1(d){var w=this
return new C.a0L(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fHF.prototype={
$1(d){return new C.YF(this.a,null)},
$S:z+51}
C.fHE.prototype={
$1(d){return D.h33},
$S:z+52}
C.d_1.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d_2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d_0(w,d))},
$S:33}
C.d_0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d_3.prototype={
$1(d){return this.a.K6()},
$S:2}
C.d_4.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cZY.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cZZ.prototype={
$1(d){return this.a.K6()},
$S:2}
C.d__.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cxC.prototype={
$0(){},
$S:0}
C.cxI.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cxJ.prototype={
$0(){return this.a.aNR(-1)},
$S:0}
C.cxK.prototype={
$1(d){return this.a.m(new C.cxH())},
$S:2}
C.cxH.prototype={
$0(){},
$S:0}
C.cxL.prototype={
$0(){return this.a.aNR(1)},
$S:0}
C.cxM.prototype={
$1(d){return this.a.m(new C.cxG())},
$S:2}
C.cxG.prototype={
$0(){},
$S:0}
C.cxN.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e3:B.bO
return A.ul(u,u,B.aZ,r,u,new C.cxF(t,d),B.Bm,s,w,u,new A.az(v,1,B.q,-1),B.cc)},
$S:1934}
C.cxF.prototype={
$1(d){var w=this.a
return w.m(new C.cxD(w,this.b))},
$S:8}
C.cxD.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cxO.prototype={
$1(d){return this.a.m(new C.cxE())},
$S:2}
C.cxE.prototype={
$0(){},
$S:0}
C.cxP.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.f8u.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.f8v.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.f8w.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.f8s.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyg()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bxH,new A.eH(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buM(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:70}
C.f8t.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dz.au(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.aq(B.aV,B.bR,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eB(D.ebE,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.dd(-1.2+t,-0.5),new A.dd(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:133}
C.fGb.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:71}
C.eI3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHV.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eHW.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eI1.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eI0(w,this.b),null)},
$S:19}
C.eI0.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e_:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eL(w,u,new A.D(B.aiA,A.w(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.haz(new C.eHY(r,e),r.a),B.aB,A.B(A.a([A.E(A.dT(B.dh,new C.eHZ(d),w),1),B.at,A.E(A.bG(B.U8,new C.eI_(r,d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d3,w,new A.b7(t,B.W),w)},
$S:99}
C.eHY.prototype={
$1(d){return this.b.$1(new C.eHX(this.a,d))},
$S:33}
C.eHX.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eHZ.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eI_.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eI2.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.SG(this.b)},
$S:0}
C.eHQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbe(w)},
$S:0}
C.eHU.prototype={
$1(d){return this.bkq(d)},
bkq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Ld(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iP(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eHT.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eHS(this.b),v),v.k("J.E"))
u.d=t.bbe(w)},
$S:0}
C.eHS.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eI4.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iP(this.b,w)},
$S:0}
C.eI5.prototype={
$1(d){return this.a.bCn(d,this.b)},
$S:z+55}
C.eHR.prototype={
$0(){return this.a.a9O(this.b)},
$S:0}
C.fOU.prototype={
$1(d){return new C.ada(this.a,this.b,this.c,null)},
$S:z+56}
C.eI7.prototype={
$0(){return this.a.a_8(this.b)},
$S:0}
C.eI8.prototype={
$0(){return this.a.PZ(this.b)},
$S:0}
C.eI9.prototype={
$0(){return this.a.Em(this.b)},
$S:0}
C.eIa.prototype={
$0(){return this.a.a_9(this.b)},
$S:0}
C.eI6.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eHL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHM.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eHN.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eHP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.q0(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHO(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHO.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eIx.prototype={
$2(d,e){return d+e.gwW()},
$S:z+59}
C.eIt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eIu.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIe.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e_:B.c,s=A.n(24),r=A.p(v,D.bN2,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.I(B.aw.j(0.28),B.q,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aO:B.av
u=u?B.e3:B.bO
w=x.p
return A.eL(v,t,new A.D(B.xY,A.w(A.a([r,B.aQ,q,B.N,p,B.d7,A.B(A.a([A.E(A.dT(B.nw,new C.eIc(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.b7(A.n(14),B.W),new A.az(u,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fDa,new C.eId(d),A.bm(B.aw,v,v,v,v,v,B.f8,v,new A.b7(A.n(14),B.W),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d3,v,new A.b7(s,B.W),v)},
$S:47}
C.eIc.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eId.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eIn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e_:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fN,28)],x.V),g=k?D.d30:B.a2Z,f=x.p
g=A.p(m,A.w(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eQm,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aiE,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4p(B.b4,B.j3,new C.eIk(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b4p(B.cB,L.yz,new C.eIl(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aw.j(k?0.14:0.06)
q=A.n(16)
p=A.I(B.aw.j(0.28),B.q,1)
o=A.p(m,D.bMq,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aO:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bl(!0,new A.D(B.vA,A.p(m,A.w(A.a([g,new A.D(B.aiB,A.w(A.a([w,B.R,u,B.bw,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.X(B.eA,k?B.bs:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eIm(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ae,!0,!0)},
$S:25}
C.eIk.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vr("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIl.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vr("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIm.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.NN(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eIi.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e_:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e3:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bs:B.bn
u=A.bw(w,new A.a7(48,48,C.aPy(!0,A.n(12),48,N.Nj,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aO:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AO(v.gwW())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vA,A.p(q,A.w(A.a([B.R,k,new A.D(D.aiy,A.B(A.a([u,B.bc,A.E(A.w(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.B0,r.ckp(B.u9,B.aV,new C.eIg(d),p,"QR code or backup file","Transfer project"),r.b1o(!0,B.ef,B.aw,new C.eIh(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ae,!0,!0)},
$S:25}
C.eIg.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eIh.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eIj.prototype={
$1(d){return this.bkr(d)},
bkr(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Ld(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vE(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eIA.prototype={
$0(){var w=this.a
w.a.br()
w.m(new C.eIz(w))},
$S:0}
C.eIz.prototype={
$0(){return this.a.r++},
$S:0}
C.eIB.prototype={
$0(){var w=this.a
return w.m(new C.eIy(w))},
$S:0}
C.eIy.prototype={
$0(){return this.a.r++},
$S:0}
C.eIb.prototype={
$0(){var w=this.a.c
w.toString
return A.iP(w,null)},
$S:0}
C.eIf.prototype={
$0(){return this.a.cdJ(this.b)},
$S:0}
C.eIw.prototype={
$0(){var w=this.a
return w.m(new C.eIv(w,this.b))},
$S:0}
C.eIv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eIq.prototype={
$0(){return this.a.vr("scan")},
$S:0}
C.eIr.prototype={
$0(){return this.a.vr("file")},
$S:0}
C.eIs.prototype={
$1(d){return this.a.ckq(d,this.b)},
$S:z+60}
C.eIp.prototype={
$0(){return this.a.Eq(this.b)},
$S:0}
C.eIo.prototype={
$0(){return this.a.a_D(this.b,this.c)},
$S:0}
C.cx2.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cx1.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cx_.prototype={
$1(d){return C.hu8(A.a2(d,x.N,x.z))},
$S:z+63}
C.cx0.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fr0.prototype={
$1(d){return d.y===D.kx},
$S:z+2}
C.fPu.prototype={
$1(d){return C.bAr(d,this.a)},
$S:z+2}
C.foW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bNf.prototype={
$1(d){return!d.as},
$S:z+1}
C.bNe.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bNb.prototype={
$1(d){return C.h4I(A.a2(d,x.N,x.z))},
$S:z+14}
C.bNc.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bNd.prototype={
$1(d){return J.k(d)},
$S:17}
C.ffY.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fbP.prototype={
$1(d){return C.fVZ(A.a2(d,x.N,x.z))},
$S:z+67}
C.fbQ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fbR.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fHr.prototype={
$1(d){return J.k(d)},
$S:17}
C.fHs.prototype={
$1(d){return d.a},
$S:z+69}
C.fHt.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHu.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fHv.prototype={
$1(d){return d.SG(null).ag()},
$S:z+70}
C.fPs.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fru.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fuh.prototype={
$1(d){return C.akl(A.a2(d,x.N,x.z))},
$S:z+8}
C.fui.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fuj.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fuk.prototype={
$1(d){return d.ag()},
$S:z+5}
C.ful.prototype={
$1(d){return C.u2(d,this.a)},
$S:z+2}
C.fHe.prototype={
$1(d){return C.u2(d,this.a)},
$S:z+2}
C.fPn.prototype={
$1(d){return C.akl(A.a2(d,x.N,x.z))},
$S:z+8}
C.fPo.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fPp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.frb.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.frc.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fPy.prototype={
$1(d){return!d.as},
$S:z+1}
C.fqG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fqH.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fqI.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.fP4.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fv3.prototype={
$1(d){return d.Q},
$S:z+72}
C.fH7.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fue.prototype={
$1(d){return C.akl(A.a2(d,x.N,x.z))},
$S:z+8}
C.fuf.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fug.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fH2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fcm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcn.prototype={
$1(d){return C.h4I(A.a2(d,x.N,x.z))},
$S:z+14}
C.fco.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fcp.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fcq.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcD.prototype={
$2(d,e){return d.eS(new C.fcE(e))},
$S:1935}
C.fcE.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.c6},
$S:1936}
C.fcA.prototype={
$1(d){return C.hQd(d,this.a)},
$S:z+73}
C.fcB.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcC.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fgD.prototype={
$1(d){return d.a},
$S:z+49}
C.fgE.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgF.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fjl.prototype={
$1(d){return d.ag()},
$S:z+5}
C.foe.prototype={
$1(d){return C.hg7(d,C.Gq(d,this.a))},
$S:z+5}
C.fof.prototype={
$1(d){return C.hg8(d,C.Gq(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKJ.prototype
w.buy=w.q
w=C.aML.prototype
w.bwN=w.q
w=C.aMM.prototype
w.bwO=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCk.prototype,"gchl","chm",25)
var s
w(s=C.azo.prototype,"gcak","cal",42)
v(s,"gaM7","Nl",0)
v(s,"gcpE","AK",0)
v(s,"gbK6","O0",0)
v(s,"gcDJ","ym",0)
v(s,"gcjn","a0k",0)
v(s,"gbFy","NJ",0)
v(s,"gbKw","WT",0)
w(s,"gbPk","bPl",71)
v(s,"gbzV","zN",0)
v(C.azp.prototype,"gcDF","Fh",0)
v(s=C.aCT.prototype,"gafl","vF",0)
v(s,"gccZ","a_u",0)
v(s,"gaQ9","HT",0)
v(s=C.aCQ.prototype,"gczN","a2q",0)
v(s,"gafl","vF",0)
v(s,"gcnE","a0Z",0)
v(s,"gcdW","a_I",0)
w(s,"gcae","caf",30)
v(s,"gbKo","HY",0)
v(s,"gcAS","cAT",3)
v(s,"gc0Z","Yz",0)
w(s,"gc8K","c8L",23)
v(s,"gccJ","ccK",3)
v(s=C.aBj.prototype,"gc6B","Py",0)
v(s,"gc6D","c6E",3)
v(s,"gbH2","a9p",0)
v(s=C.aCS.prototype,"gbNP","Xn",0)
v(s,"gbYg","Y1",0)
v(s,"gcu4","a1P",0)
v(s,"gcqd","a1q",0)
v(C.aCR.prototype,"gcpW","ah5",0)
v(C.as5.prototype,"gc8I","a_7",0)
v(C.ay9.prototype,"ga2a","K6",3)
v(C.ay8.prototype,"ga2a","K6",3)
v(C.awT.prototype,"ga2a","K6",3)
v(s=C.aEj.prototype,"gb0N","Qt",0)
v(s,"gbyJ","VD",0)
v(s,"gcdK","cdL",3)
w(C.aEi.prototype,"gc9z","c9A",57)
u(C.aEk.prototype,"gaQ3",0,0,null,["$1","$0"],["HS","bIj"],58,0,0)
t(C,"hnq","hZZ",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.anT,C.ui,C.nc,C.Hy,C.aen,C.JS,C.uj,C.K_,C.FJ,C.bdL,C.aIo,C.ap9,C.d7J,C.lA,C.aSw,C.aSv,C.aQu,C.tR,C.r_,C.lk,C.i0,C.kD,C.aGn])
u(A.hZ,[C.fyR,C.fyQ,C.fyS,C.fI6,C.fn3,C.fn4,C.fn9,C.fwA,C.fwz,C.fwy,C.c2a,C.fIC,C.fIu,C.fIG,C.frj,C.dFV,C.dFQ,C.dFR,C.dFt,C.dFp,C.dG9,C.dGa,C.dG3,C.dG4,C.dGb,C.dGc,C.frX,C.fub,C.fuc,C.fHc,C.fPm,C.fra,C.fHL,C.d6W,C.d6i,C.d6r,C.d6I,C.d6n,C.d6t,C.d6k,C.d6x,C.d6y,C.d6w,C.d6N,C.d6M,C.d8H,C.d8I,C.d8J,C.d79,C.d7e,C.d7d,C.cFP,C.cFR,C.cZf,C.cZE,C.cZF,C.cZI,C.cZK,C.cZL,C.cZM,C.cZO,C.cZP,C.dTs,C.dSS,C.dSN,C.dSl,C.dSy,C.dSB,C.dSK,C.dS9,C.dSV,C.dSP,C.dSb,C.dSc,C.dSd,C.dSi,C.dSg,C.dSf,C.dSv,C.dSw,C.dSq,C.dT1,C.dSY,C.d7k,C.d7l,C.fs0,C.fs1,C.fs2,C.frZ,C.fs_,C.fs5,C.fs6,C.fs7,C.fs3,C.fs4,C.d7E,C.d7u,C.d7p,C.d7z,C.d7A,C.d7D,C.d7r,C.d7G,C.d7H,C.d7I,C.f92,C.eKU,C.dnr,C.dnB,C.dnC,C.dnD,C.dnG,C.dnF,C.dnH,C.dnM,C.dnN,C.c8P,C.c8O,C.c8K,C.c8L,C.c8M,C.c8N,C.c8U,C.c8R,C.c8S,C.dTe,C.dTh,C.dTg,C.dTn,C.dTo,C.dFe,C.fId,C.fHA,C.fP3,C.fHF,C.fHE,C.d_2,C.d_3,C.cZZ,C.cxK,C.cxM,C.cxN,C.cxF,C.cxO,C.f8u,C.fGb,C.eI1,C.eHY,C.eHU,C.eHS,C.eI5,C.fOU,C.eIe,C.eIn,C.eIi,C.eIj,C.eIs,C.cx1,C.cx_,C.cx0,C.fr0,C.fPu,C.foW,C.bNf,C.bNe,C.bNb,C.bNc,C.bNd,C.fbP,C.fbQ,C.fHr,C.fHs,C.fHt,C.fHu,C.fHv,C.fPs,C.fru,C.fuh,C.fui,C.fuk,C.ful,C.fHe,C.fPn,C.fPo,C.fPp,C.frb,C.frc,C.fPy,C.fqG,C.fqH,C.fP4,C.fv3,C.fH7,C.fue,C.fuf,C.fH2,C.fcm,C.fcn,C.fco,C.fcp,C.fcq,C.fcE,C.fcA,C.fcB,C.fgD,C.fgE,C.fjl,C.foe,C.fof])
u(A.at,[C.aXY,C.akj,C.aTK,C.Yl,C.b9u,C.bdJ,C.bhn,C.buY,C.bkA,C.acP,C.bhm,C.acO,C.bhl,C.aBk,C.aHq,C.acQ,C.JO,C.bdK,C.ac6,C.bdI,C.bdN,C.aXW,C.as5,C.ada])
u(A.mL,[C.ba5,C.bbh,C.bb8,C.aGi,C.bgs,C.bdM,C.bcR,C.bit,C.buM])
u(A.j9,[C.fIz,C.fIA,C.fIB,C.fIs,C.fIt,C.fIE,C.fIF,C.dG6,C.dFT,C.dFW,C.dFA,C.dFB,C.dFC,C.dFz,C.dFH,C.dFy,C.dFI,C.dFJ,C.dFx,C.dFK,C.dFw,C.dFL,C.dFv,C.dFM,C.dFn,C.dFo,C.dFu,C.dFN,C.dFs,C.dFO,C.dFr,C.dFD,C.dFq,C.dFE,C.dFm,C.dFF,C.dFG,C.dG7,C.dG8,C.dFX,C.dFY,C.dFZ,C.dG_,C.dG0,C.dG1,C.dG2,C.dGe,C.dG5,C.frY,C.d6g,C.d6e,C.d6f,C.d6h,C.d6V,C.d6K,C.d6H,C.d6j,C.d6L,C.d6p,C.d6q,C.d6s,C.d6J,C.d6o,C.d6u,C.d6S,C.d6E,C.d6D,C.d6F,C.d6G,C.d6z,C.d6B,C.d6C,C.d6v,C.d6O,C.d6R,C.d6l,C.d6m,C.d8G,C.d8F,C.d8E,C.d8D,C.d8K,C.d8C,C.d8L,C.d7a,C.d7b,C.d7c,C.d7f,C.d78,C.d77,C.cFQ,C.cZe,C.cZr,C.cZq,C.cZG,C.cZp,C.cZH,C.cZo,C.cZn,C.cZJ,C.cZm,C.cZz,C.cZy,C.cZQ,C.dTr,C.dTq,C.dTt,C.dTu,C.dTv,C.dTp,C.dTx,C.dTw,C.dSQ,C.dSR,C.dST,C.dSm,C.dSA,C.dSz,C.dSC,C.dSM,C.dSF,C.dSE,C.dSG,C.dSD,C.dSH,C.dSI,C.dSL,C.dSa,C.dSO,C.dSe,C.dSh,C.dSj,C.dSU,C.dSp,C.dSn,C.dSr,C.dSs,C.dSo,C.dSt,C.dSx,C.dT2,C.dT3,C.dSW,C.dSZ,C.dT_,C.dT0,C.dT5,C.dSX,C.dSk,C.d7j,C.d7i,C.d7n,C.d7x,C.d7o,C.eKT,C.dns,C.dnp,C.dnq,C.dnA,C.dnz,C.dny,C.dnI,C.dnx,C.dnJ,C.dnw,C.dnK,C.dnv,C.dnL,C.dnu,C.dnt,C.dnE,C.dnO,C.dnX,C.dTf,C.dTj,C.dTk,C.dTb,C.dTc,C.dTd,C.dTi,C.dTm,C.dTl,C.dT6,C.dT7,C.dT8,C.dT9,C.dTa,C.dFf,C.fIa,C.cgo,C.d_1,C.d_0,C.d_4,C.cZY,C.d__,C.cxC,C.cxI,C.cxJ,C.cxH,C.cxL,C.cxG,C.cxD,C.cxE,C.cxP,C.f8v,C.f8w,C.eI3,C.eHV,C.eHW,C.eHX,C.eHZ,C.eI_,C.eI2,C.eHQ,C.eHT,C.eI4,C.eHR,C.eI7,C.eI8,C.eI9,C.eIa,C.eI6,C.eHL,C.eHM,C.eHN,C.eHP,C.eHO,C.eIt,C.eIu,C.eIc,C.eId,C.eIk,C.eIl,C.eIm,C.eIg,C.eIh,C.eIA,C.eIz,C.eIB,C.eIy,C.eIb,C.eIf,C.eIw,C.eIv,C.eIq,C.eIr,C.eIp,C.eIo])
u(A.ag,[C.ao4,C.SB,C.Z2,C.Z6,C.Z4,C.YD,C.apc,C.ap6,C.ZG,C.apa,C.a_0,C.a_1,C.a5W,C.YF,C.YE,C.Yc,C.a0L,C.Fw,C.awM,C.as4,C.arZ,C.as3,C.O1])
u(A.ah,[C.aCk,C.bdG,C.azo,C.be0,C.azp,C.bbf,C.aCT,C.aCQ,C.aBj,C.aCS,C.aCR,C.biN,C.aKJ,C.ay9,C.ay8,C.awT,C.buP,C.aML,C.aMM,C.aEj,C.bk5,C.aEi,C.bwu])
u(A.kj,[C.dFS,C.dFU,C.dFP,C.dGd,C.fud,C.bNa,C.d6U,C.d6T,C.d6A,C.d6P,C.d6Q,C.d7g,C.dSJ,C.dSu,C.dT4,C.d7w,C.d7v,C.d7t,C.d7y,C.d7B,C.d7C,C.d7m,C.d7q,C.d7s,C.d7F,C.c8I,C.c8Q,C.c8V,C.dFg,C.fIc,C.fIb,C.f8s,C.f8t,C.eI0,C.eIx,C.cx2,C.ffY,C.fbR,C.fuj,C.fqI,C.fug,C.fcD,C.fcC,C.fgF])
t(C.biu,C.aKJ)
u(A.ma,[C.abb,C.aJ5,C.Hz,C.akk,C.cx3,C.cx4])
t(C.buN,C.aML)
t(C.buO,C.aMM)
t(C.aEk,C.bwu)
t(C.b7Z,A.b7N)
t(C.buQ,A.a5B)
t(C.b7Y,C.buQ)
w(C.aKJ,A.eS)
w(C.aML,A.cn)
w(C.aMM,A.cn)
v(C.bwu,A.ew)
v(C.buQ,A.j3)})()
A.k_(b.typeUniverse,JSON.parse('{"aXY":{"at":[],"t":[]},"ba5":{"aC":[]},"ao4":{"ag":[],"t":[]},"aCk":{"ah":["ao4"]},"SB":{"ag":[],"t":[]},"akj":{"at":[],"t":[]},"aTK":{"at":[],"t":[]},"bdG":{"ah":["SB"]},"Z2":{"ag":[],"t":[]},"Z6":{"ag":[],"t":[]},"Z4":{"ag":[],"t":[]},"YD":{"ag":[],"t":[]},"azo":{"ah":["Z2"]},"be0":{"ah":["Z6"]},"azp":{"ah":["Z4"]},"Yl":{"at":[],"t":[]},"bbh":{"aC":[]},"bb8":{"aC":[]},"bbf":{"ah":["YD"]},"aGi":{"aC":[]},"bgs":{"aC":[]},"b9u":{"at":[],"t":[]},"apc":{"ag":[],"t":[]},"ap6":{"ag":[],"t":[]},"ZG":{"ag":[],"t":[]},"acQ":{"at":[],"t":[]},"aCT":{"ah":["apc"]},"aCQ":{"ah":["ap6"]},"bdJ":{"at":[],"t":[]},"bdM":{"aC":[]},"bhn":{"at":[],"t":[]},"bcR":{"aC":[]},"buY":{"at":[],"t":[]},"bkA":{"at":[],"t":[]},"aBj":{"ah":["ZG"]},"acP":{"at":[],"t":[]},"bhm":{"at":[],"t":[]},"acO":{"at":[],"t":[]},"bhl":{"at":[],"t":[]},"aBk":{"at":[],"t":[]},"aHq":{"at":[],"t":[]},"JO":{"at":[],"t":[]},"apa":{"ag":[],"t":[]},"a_0":{"ag":[],"t":[]},"a_1":{"ag":[],"t":[]},"aCS":{"ah":["apa"]},"bdK":{"at":[],"t":[]},"ac6":{"at":[],"t":[]},"bdI":{"at":[],"t":[]},"bdN":{"at":[],"t":[]},"aCR":{"ah":["a_0"]},"biN":{"ah":["a_1"]},"aXW":{"at":[],"t":[]},"a5W":{"ag":[],"t":[]},"biu":{"ah":["a5W"]},"bit":{"aC":[]},"as5":{"at":[],"t":[]},"YF":{"ag":[],"t":[]},"YE":{"ag":[],"t":[]},"Yc":{"ag":[],"t":[]},"a0L":{"ag":[],"t":[]},"ay9":{"ah":["YF"]},"ay8":{"ah":["YE"]},"awT":{"ah":["Yc"]},"buP":{"ah":["a0L"]},"Fw":{"ag":[],"t":[]},"awM":{"ag":[],"t":[]},"buN":{"ah":["Fw"]},"buO":{"ah":["awM"]},"buM":{"aC":[]},"as4":{"ag":[],"t":[]},"aEj":{"ah":["as4"]},"ada":{"at":[],"t":[]},"arZ":{"ag":[],"t":[]},"as3":{"ag":[],"t":[]},"bk5":{"ah":["arZ"]},"aEi":{"ah":["as3"]},"O1":{"ag":[],"t":[]},"aEk":{"ah":["O1"],"ew":[]},"b7Y":{"j3":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQu"),Q:w("r_"),n:w("bt<m,m>"),c5:w("aSv"),dY:w("aSw"),d:w("eA<m?>"),e:w("Hy"),B:w("nc"),P:w("i0"),k:w("kD"),x:w("aA<~>"),f5:w("O<a2K>"),V:w("O<ac>"),t:w("O<r_>"),O:w("O<v>"),ac:w("O<eA<m?>>"),I:w("O<nc>"),u:w("O<i0>"),_:w("O<kD>"),cl:w("O<aA<ai<a5<m,@>>>>"),R:w("O<ne>"),cq:w("O<ai<+(K,K)>>"),ez:w("O<a5<m,aD>>"),gE:w("O<a5<m,m>>"),c7:w("O<a5<m,@>>"),fD:w("O<mr>"),bp:w("O<oi>"),g:w("O<x>"),v:w("O<hu>"),L:w("O<+(m,m)>"),G:w("O<+(K,K)>"),bF:w("O<+count,id,name(H,m,m)>"),A:w("O<cS>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<t>"),C:w("O<ff>"),D:w("O<lk>"),fp:w("O<JS>"),M:w("O<K_>"),gZ:w("O<aGn>"),Y:w("O<aen>"),E:w("O<aIo>"),F:w("O<K>"),dC:w("O<H>"),dS:w("O<aC?>"),d4:w("O<m?>"),J:w("cv<ah<ag>>"),b:w("ai<nc>"),do:w("ai<i0>"),r:w("ai<kD>"),U:w("ai<a5<m,@>>"),gk:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(H,m,m)>"),h:w("ai<m>"),c:w("ai<lk>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a5<m,@>>>"),a:w("a5<m,@>"),f:w("a5<@,@>"),gv:w("M<m,HA>"),w:w("iC"),g2:w("rl"),bV:w("anT"),fL:w("cp"),K:w("aD"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),d9:w("+dx,hidden(K,ai<i0>)"),cs:w("+count,id,name(H,m,m)"),N:w("m"),e7:w("bp<K>"),gc:w("dI"),b4:w("cx<H>"),W:w("jI<m>"),l:w("t"),cM:w("ff"),i:w("lk"),cc:w("FJ"),bw:w("acO<m?>"),cy:w("K1"),q:w("mY"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),eK:w("ai<kD>?"),m:w("ap9?"),cT:w("x?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,H)?"),X:w("+qrPayload,token,usesRemaining(m,m,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pY?"),T:w("m?"),aD:w("dI?"),o:w("lk?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZ3=new A.bo(B.hE,B.bG,B.hE,B.bG)
D.aaO=new A.bo(B.hE,B.iw,B.hE,B.iw)
D.aZg=new A.bo(B.ix,B.bG,B.bG,B.bG)
D.aZk=new A.az(B.cN,1.4,B.q,-1)
D.aZu=new A.az(B.ad,1,B.q,-1)
D.b_T=new A.aX(0,1/0,64,1/0)
D.b_X=new A.aX(0,84,0,1/0)
D.ayi=w([B.lO,B.qY,B.c],x.O)
D.bY1=new A.a8(B.ay,B.aC,B.x,D.ayi,null,null)
D.b0H=new A.o(null,null,null,null,null,D.bY1,B.n)
D.d2v=w([B.aV,B.bR],x.O)
D.c_7=new A.a8(B.b1,B.b6,B.x,D.d2v,null,null)
D.b11=new A.o(null,null,null,null,null,D.c_7,B.n)
D.b7f=new A.fi(null,null,null,null,null,E.jY,null,null,null,null)
D.ac8=new A.co(B.A,null,null,D.b7f,null)
D.kq=new A.v(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f6A=new A.G(!0,D.kq,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpT=new A.y("No books on the shelf yet.",null,D.f6A,null,null,null,null,null,null,null,null,null)
D.ebF=new A.D(B.nX,D.fpT,null)
D.b5J=new A.co(B.A,null,null,D.ebF,null)
D.b6C=new A.co(B.A,null,null,Z.W0,null)
D.b8J=new A.v(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b9b=new A.v(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.adj=new A.v(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bbW=new A.v(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bcf=new A.v(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aeE=new A.v(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bgi=new A.v(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bgH=new A.v(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.EV=new A.v(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bik=new A.v(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bkO=new A.v(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.age=new A.v(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fki=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bqA=new A.eA(null,D.fki,B.f_,null,x.d)
D.ft3=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bqC=new A.eA(null,D.ft3,B.f_,null,x.d)
D.br9=new A.bb(38e5)
D.brT=new A.ih(0,10,0,10)
D.bs1=new A.Q(0,1,0,0)
D.bsc=new A.ih(0,4,0,4)
D.bst=new A.Q(10,10,14,10)
D.bsF=new A.ih(10,4,10,4)
D.bsN=new A.ih(10,8,10,8)
D.bsO=new A.Q(10,8,8,8)
D.bte=new A.Q(12,6,12,2)
D.btw=new A.Q(14,10,6,6)
D.btx=new A.Q(14,12,14,0)
D.btB=new A.Q(14,12,14,8)
D.btE=new A.Q(14,12,8,14)
D.btI=new A.ih(14,14,14,14)
D.bul=new A.Q(16,2,16,10)
D.buv=new A.Q(16,6,16,30)
D.bux=new A.Q(16,6,16,8)
D.aiy=new A.Q(18,16,18,8)
D.bv7=new A.Q(18,20,18,22)
D.aiC=new A.Q(18,24,18,24)
D.bvd=new A.Q(18,30,18,30)
D.bvw=new A.Q(20,10,12,20)
D.bvJ=new A.Q(20,18,16,18)
D.bvL=new A.Q(20,18,20,6)
D.bwA=new A.Q(24,32,24,28)
D.bwB=new A.Q(24,36,24,32)
D.bwF=new A.Q(26,26,24,14)
D.bwU=new A.Q(2,4,2,8)
D.bwY=new A.Q(30,0,30,0)
D.bx8=new A.Q(38,22,22,22)
D.aiV=new A.Q(40,24,24,24)
D.bxa=new A.ih(40,40,40,40)
D.bxc=new A.Q(46,30,30,30)
D.aiY=new A.Q(4,0,0,8)
D.bxD=new A.Q(56,40,40,40)
D.bxH=new A.Q(1.25,1.25,1.25,1.25)
D.bxI=new A.Q(60,0,60,0)
D.bxL=new A.Q(6,14,6,16)
D.bxX=new A.ih(7,3,7,3)
D.byt=new A.Q(5,1.5,5,1.5)
D.byE=new A.Q(6,2.5,6,2.5)
D.fF8=new A.y("Signature",null,B.mK,null,null,null,null,null,null,null,null,null)
D.byZ=new A.bB(1,B.bf,D.fF8,null)
D.fCi=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bzM=new A.bB(1,B.bf,D.fCi,null)
D.fdW=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEf=new A.y("Worksheets",null,D.fdW,null,null,null,null,null,null,null,null,null)
D.fe4=new A.G(!0,E.acT,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD8=new A.y("Track your project spending",null,D.fe4,null,null,null,null,null,null,null,null,null)
D.cVq=w([D.fEf,B.au,D.fD8],x.p)
D.bnL=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cVq,null)
D.bzS=new A.bB(1,B.bf,D.bnL,null)
D.f9b=new A.G(!0,E.jY,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjv=new A.y("FAMILY LIBRARY",null,D.f9b,null,null,null,null,null,null,null,null,null)
D.bA9=new A.bB(1,B.bf,D.fjv,null)
D.MX=new C.Hy("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.a_9=new C.Hz(0,"male")
D.ajQ=new C.Hz(1,"female")
D.y6=new C.Hz(2,"unknown")
D.tP=new C.akk(0,"owner")
D.MY=new C.akk(1,"editor")
D.kx=new C.akk(2,"viewer")
D.akF=new A.a1(61199,"MaterialIcons",!1)
D.bEM=new A.a1(61504,"MaterialIcons",!1)
D.bEN=new A.a1(61505,"MaterialIcons",!1)
D.bEP=new A.a1(61587,"MaterialIcons",!1)
D.bEW=new A.a1(61890,"MaterialIcons",!1)
D.bFQ=new A.a1(63034,"MaterialIcons",!0)
D.bGE=new A.a1(63429,"MaterialIcons",!1)
D.amT=new A.a1(984520,"MaterialIcons",!1)
D.bFl=new A.a1(62776,"MaterialIcons",!1)
D.bIU=new A.ae(D.bFl,26,B.aZ,null,null,null)
D.bDK=new A.a1(57648,"MaterialIcons",!1)
D.bJb=new A.ae(D.bDK,14,B.c,null,null,null)
D.bJt=new A.ae(B.G1,17,null,null,null,null)
D.bJZ=new A.ae(E.a02,null,null,null,null,null)
D.bK1=new A.ae(B.jp,18,E.jY,null,null,null)
D.a_P=new A.a1(62044,"MaterialIcons",!1)
D.bK7=new A.ae(D.a_P,null,B.aV,null,null,null)
D.bKX=new A.ae(B.e0,16,null,null,null,null)
D.bL3=new A.ae(D.a_P,32,B.aV,null,null,null)
D.bLn=new A.ae(E.akG,18,B.cN,null,null,null)
D.bMq=new A.ae(B.Gb,22,B.aw,null,null,null)
D.bMC=new A.ae(B.e0,22,B.aZ,null,null,null)
D.bMN=new A.ae(Q.a_U,22,B.c,null,null,null)
D.bMT=new A.ae(B.u0,52,B.c,null,null,null)
D.bN2=new A.ae(B.Gb,30,B.aw,null,null,null)
D.anu=new A.ae(B.u9,22,B.c,null,null,null)
D.bNu=new A.ae(B.e0,17,null,null,null,null)
D.bNO=new A.ae(B.vU,26,B.cN,null,null,null)
D.bOx=new A.ae(B.a0d,16,null,null,null,null)
D.bPi=new A.ae(B.u0,24,B.c,null,null,null)
D.bPn=new A.ae(B.Np,20,B.rs,null,null,null)
D.bPs=new A.ae(B.G_,null,B.bR,null,null,null)
D.bPz=new A.ae(B.jp,18,B.c,null,null,null)
D.bQc=new A.ae(B.cy,22,B.ad,null,null,null)
D.bR1=new A.ae(B.ef,16,B.ad,null,null,null)
D.bRd=new A.ae(D.a_P,20,B.aV,null,null,null)
D.anU=new A.ae(B.hA,20,null,null,null,null)
D.bRJ=new A.ae(B.cy,18,D.kq,null,null,null)
D.bS0=new A.ae(B.yq,28,B.c,null,null,null)
D.bS9=new A.ae(B.Nf,null,B.h2,null,null,null)
D.bSt=new A.ae(B.yq,24,B.c,null,null,null)
D.bSU=new A.ae(B.u0,null,B.aV,null,null,null)
D.bSV=new A.ae(B.jJ,20,B.cN,null,null,null)
D.bTe=new A.ae(B.G1,16,null,null,null,null)
D.bUM=new A.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eB,!0,null,null,null,null)
D.d9V=w([B.bu,B.aV,B.fb,B.aZ],x.O)
D.bWr=new A.a8(B.ay,B.aC,B.x,D.d9V,null,null)
D.bhd=new A.v(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bmL=new A.v(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cSh=w([D.bhd,D.bmL],x.O)
D.bWC=new A.a8(B.b1,B.b6,B.x,D.cSh,null,null)
D.d4j=w([B.f2,B.fx,B.fb],x.O)
D.bWH=new A.a8(B.ay,B.aC,B.x,D.d4j,null,null)
D.aff=new A.v(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b9c=new A.v(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cUf=w([D.aff,D.b9c],x.O)
D.bXe=new A.a8(B.b1,B.b6,B.x,D.cUf,null,null)
D.bct=new A.v(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.axB=w([D.bct,D.aff],x.O)
D.bXy=new A.a8(B.ay,B.aC,B.x,D.axB,null,null)
D.aee=new A.v(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.beL=new A.v(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d3s=w([D.aee,D.beL],x.O)
D.bYc=new A.a8(B.a3,B.a8,B.x,D.d3s,null,null)
D.dgv=w([B.bx,B.mX],x.O)
D.bYe=new A.a8(B.b1,B.b6,B.x,D.dgv,null,null)
D.bh8=new A.v(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dhn=w([D.bh8,D.kq,D.kq,P.Xk],x.O)
D.djJ=w([0,0.07,0.9,1],x.F)
D.bYK=new A.a8(B.a3,B.a8,B.x,D.dhn,D.djJ,null)
D.bYU=new A.a8(B.ay,B.aC,B.x,B.QW,null,null)
D.dg5=w([B.aZ,B.aV,B.bR],x.O)
D.bZT=new A.a8(B.ay,B.aC,B.x,D.dg5,null,null)
D.cks=w([B.bu,B.aZ,B.f2],x.O)
D.ckz=w([B.by,B.aE,B.je],x.O)
D.ckB=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bfO=new A.v(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cqL=w([D.bfO,E.aeX],x.O)
D.e7s=new A.x(1,2)
D.eSP=new A.cS(B.aW,D.e7s,3)
D.auF=w([D.eSP],x.A)
D.cy3=w([B.h4,B.c8,B.fa],x.O)
D.cAL=w([B.bK,B.bq,B.bm],x.O)
D.bAC=new C.ui("classic","Classic leather","Gold-edged brown leather",D.axB,E.jY,E.jY,"\u2766",B.L,!0,!1,!1,!1)
D.b8w=new A.v(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.blF=new A.v(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cX1=w([D.b8w,D.blF],x.O)
D.af0=new A.v(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bAx=new C.ui("ornate","Ornate gold","Double gold border and flourishes",D.cX1,D.af0,D.af0,"\u2726",B.L,!0,!0,!0,!1)
D.bc4=new A.v(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bhX=new A.v(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cPd=w([D.bc4,D.bhX],x.O)
D.bAw=new C.ui("parchment","Parchment","Old paper with dark ink",D.cPd,D.EV,G.iE,"\u2767",B.L,!0,!1,!1,!0)
D.acA=new A.v(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bk3=new A.v(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.deq=w([D.acA,D.bk3],x.O)
D.bfn=new A.v(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bjo=new A.v(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bAz=new C.ui("minimal","Clean paper","Plain and elegant, like a printed book",D.deq,D.bfn,D.bjo,"",B.L,!0,!0,!1,!0)
D.bAB=new C.ui("midnight","Midnight","Deep blue with silver stars",M.axV,B.cr,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bAv=new C.ui("emerald","Emerald library","Green cloth, title on the left",A_.av2,E.jY,B.fT,"\u25c6",B.bh,!0,!1,!1,!1)
D.bku=new A.v(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.dcA=w([B.es,D.bku],x.O)
D.bgq=new A.v(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bhw=new A.v(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bAA=new C.ui("rose","Rose vintage","Burgundy with rose-gold lettering",D.dcA,D.bgq,D.bhw,"\u2740",B.L,!0,!1,!0,!1)
D.dh0=w([B.co,O.mY],x.O)
D.bAy=new C.ui("modern","Modern","Dark, bold, left-aligned",D.dh0,B.aP,B.c,"",B.bh,!1,!0,!1,!1)
D.a2a=w([D.bAC,D.bAx,D.bAw,D.bAz,D.bAB,D.bAv,D.bAA,D.bAy],A.ax("O<ui>"))
D.cOL=w([B.bR,B.bi],x.O)
D.bgZ=new A.v(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cPp=w([D.acA,D.bgZ],x.O)
D.bc0=new A.v(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cR2=w([D.bc0,B.dc],x.O)
D.cSx=w([B.ba,B.iW,B.oD],x.O)
D.cSU=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b98=new A.v(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.be2=new A.v(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.djF=w([D.aee,D.b98,D.be2],x.O)
D.bAD=new C.uj("leather","Leather",D.djF,"vintage")
D.d_3=w([B.d5,B.Lf,A4.Wy],x.O)
D.bAK=new C.uj("midnight","Midnight",D.d_3,"starry")
D.cSy=w([B.er,B.dW,B.lh],x.O)
D.bAJ=new C.uj("forest","Forest",D.cSy,"story")
D.dlC=w([B.ey,B.es,B.kt],x.O)
D.bAG=new C.uj("burgundy","Burgundy",D.dlC,"royal")
D.cAk=w([B.aE,B.oF,B.nD],x.O)
D.bAH=new C.uj("royal","Royal",D.cAk,"royal")
D.cUS=w([B.bq,B.co,O.mY],x.O)
D.bAE=new C.uj("charcoal","Charcoal",D.cUS,"geo")
D.djN=w([B.c9,B.dN,B.xq],x.O)
D.bAI=new C.uj("sunset","Sunset",D.djN,"sunset")
D.dkt=w([B.iW,B.EW,B.WB],x.O)
D.bAF=new C.uj("ocean","Ocean",D.dkt,"band")
D.yT=w([D.bAD,D.bAK,D.bAJ,D.bAG,D.bAH,D.bAE,D.bAI,D.bAF],A.ax("O<uj>"))
D.cVh=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cVT=w([B.ak,B.aJ,B.M],x.O)
D.cX6=w([B.es,B.dW,B.d5,B.fU,B.xt,B.cN,B.k1,B.e2,B.d8],x.O)
D.cX7=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eSQ=new A.cS(B.dq,B.dD,8)
D.cXg=w([D.eSQ],x.A)
D.cYk=w([B.c5,B.dN,B.kr],x.O)
D.cYO=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cZZ=w([B.c5,B.he],x.O)
D.d18=w([B.aS,B.vh,B.xf],x.O)
D.d21=w([B.bL,B.cs,B.dr,B.aS],x.O)
D.d2w=w([B.i1,B.c9,B.tk],x.O)
D.d30=w([B.f2,B.cN],x.O)
D.d3y=w([B.cY,B.fz,B.hv],x.O)
D.d3J=w([B.aP,B.bi,B.d5],x.O)
D.d4g=w([B.ek,B.cT,B.dW],x.O)
D.d4z=w([B.dL,B.d5,B.Lf],x.O)
D.d5S=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a35=w(["leather","linen","plain","stars","rays"],x.s)
D.bIA=new A.a1(985219,"MaterialIcons",!1)
D.bI8=new A.a1(983781,"MaterialIcons",!1)
D.axh=w([B.al4,B.i5,B.lV,B.i6,D.bIA,B.Gl,B.q0,D.bI8,M.amG,B.BU,B.q2,B.mv],A.ax("O<a1>"))
D.a39=w(["double","single","corners","none"],x.s)
D.d8B=w([B.dv,B.bn,B.e2],x.O)
D.d8O=w([],x.t)
D.Cr=w([],x.u)
D.db9=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ddu=w([B.aF,B.fz,B.fU],x.O)
D.df2=w([B.bH,B.mT,B.Xw],x.O)
D.dfh=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dyp=new C.lA("construction","Construction","Jobsite & builds",B.yj)
D.dyw=new C.lA("house","Home Build","Houses & rooms",B.vP)
D.dym=new C.lA("grocery","Grocery","Store & pantry",B.a0L)
D.dyl=new C.lA("calculator","Calculations","Math & estimates",B.Ny)
D.dyu=new C.lA("lumber","Materials","Lumber & supplies",B.NO)
D.dyi=new C.lA("kitchen","Kitchen","Remodel & meals",Aa.alT)
D.bI6=new A.a1(983756,"MaterialIcons",!1)
D.dyn=new C.lA("landscape","Landscaping","Yard & garden",D.bI6)
D.dyh=new C.lA("plumbing","Plumbing","Pipes & water",B.qa)
D.dyx=new C.lA("electrical","Electrical","Wiring & power",B.hj)
D.dyf=new C.lA("store","Retail Shop","Daily business",B.l1)
D.dyg=new C.lA("paint_remodel","Paint & Remodel","Colors & walls",Ab.a0j)
D.bHA=new A.a1(983311,"MaterialIcons",!1)
D.dyt=new C.lA("roofing","Roofing","Roofs & exteriors",D.bHA)
D.bIi=new A.a1(983986,"MaterialIcons",!1)
D.dye=new C.lA("warehouse","Warehouse","Storage & stock",D.bIi)
D.dyr=new C.lA("vehicles","Vehicles","Fleet & transport",B.Gm)
D.bFn=new A.a1(62785,"MaterialIcons",!1)
D.dyk=new C.lA("farm","Farm","Crops & livestock",D.bFn)
D.dyj=new C.lA("restaurant","Restaurant","Food & catering",B.vX)
D.dyq=new C.lA("tools","Tools","Workshop gear",B.Gi)
D.dyv=new C.lA("wallet","Cash & Wallet","Quick spending",B.jJ)
D.bGz=new A.a1(63395,"MaterialIcons",!1)
D.dys=new C.lA("concrete","Concrete","Foundation work",D.bGz)
D.dyo=new C.lA("blueprint","Blueprint","Plans & design",Ag.ala)
D.a3A=w([D.dyp,D.dyw,D.dym,D.dyl,D.dyu,D.dyi,D.dyn,D.dyh,D.dyx,D.dyf,D.dyg,D.dyt,D.dye,D.dyr,D.dyk,D.dyj,D.dyq,D.dyv,D.dys,D.dyo],A.ax("O<lA>"))
D.dfM=w([B.bs,B.bn],x.O)
D.dgw=w([B.ic,B.nK,B.dG],x.O)
D.a3K=w(["top","middle","bottom"],x.s)
D.diX=w([B.cn,B.bi,B.d5],x.O)
D.djz=w([B.bk,B.cT,B.dW],x.O)
D.dlx=w([B.bK,B.ak],x.O)
D.dly=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e4Q={top:0,middle:1,bottom:2}
D.doK=new A.bt(D.e4Q,["Top","Middle","Bottom"],x.n)
D.e4v={double:0,single:1,corners:2,none:3}
D.doP=new A.bt(D.e4v,["Double line","One line","Corners","None"],x.n)
D.e5y={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dqh=new A.bt(D.e5y,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dqs=new A.bt(B.hT,[],A.ax("bt<H,+(m,m)>"))
D.e4J={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CC=new A.bt(D.e4J,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bt<m,H>"))
D.dsZ=new F.MV(32,null)
D.dt_=new F.MV(40,null)
D.dt0=new F.MV(46,null)
D.aGz=new C.as3(null)
D.e8q=new A.x(8,14)
D.fqv=new A.y("Write a new book",null,B.hX,null,B.L,null,null,null,null,null,null,null)
D.eb6=new A.D(B.kW,D.fqv,null)
D.an5=new A.ae(B.hz,18,B.c,null,null,null)
D.fjR=new A.y("Add",null,B.lB,null,null,null,null,null,null,null,null,null)
D.d2g=w([D.an5,B.qr,D.fjR],x.p)
D.eQt=new A.ck(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d2g,null)
D.ebr=new A.D(B.nb,D.eQt,null)
D.ebs=new A.D(E.ahq,Z.W0,null)
D.fdR=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmT=new A.y("New Project",null,D.fdR,null,null,null,null,null,null,null,null,null)
D.d6d=w([D.an5,B.ab,D.fmT],x.p)
D.eQw=new A.ck(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d6d,null)
D.ebE=new A.D(B.im,D.eQw,null)
D.fpi=new A.y("Choose your header",null,U.rO,null,null,null,null,null,null,null,null,null)
D.ebZ=new A.D(B.hM,D.fpi,null)
D.b7u=new A.fi(2.2,null,null,null,null,B.cN,null,null,null,null)
D.eVG=new A.a7(22,22,D.b7u,null)
D.b5F=new A.co(B.A,null,null,D.eVG,null)
D.ec3=new A.D(B.YG,D.b5F,null)
D.btR=new A.Q(14,2,14,6)
D.fCS=new A.y("The top of your book. Tap a design to see it.",null,T.uQ,null,null,null,null,null,null,null,null,null)
D.ec4=new A.D(D.btR,D.fCS,null)
D.edC=new A.iQ(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.edF=new A.iQ(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aHM=new A.iQ(1,0.9607843137254902,0.48627450980392156,0)
D.Iq=new A.iQ(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zs=new A.iQ(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.edL=new A.iQ(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.h5E=new C.bgs(null)
D.boU=new A.mj(D.h5E,null,B.az,null,null)
D.aLp=new A.cL(0,0,0,0,null,null,D.boU,null)
D.eCh=new A.z(-42,42)
D.eLa=new A.cu([0,0,1,1])
D.aML=new A.a9(0,0,520,160)
D.fCq=new A.y("Let the AI write it from your tree",null,B.kh,null,B.L,null,null,null,null,null,null,null)
D.bBg=new A.dq(1,B.cm,D.fCq,null)
D.cZY=w([E.a1e,B.ab,D.bBg],x.p)
D.eQ8=new A.ck(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.cZY,null)
D.fjw=new A.y("Save member",null,B.cj,null,null,null,null,null,null,null,null,null)
D.ddP=w([D.anU,B.ab,D.fjw],x.p)
D.eQi=new A.ck(B.aN,B.b7,B.j,B.m,null,B.p,null,0,D.ddP,null)
D.bMH=new A.ae(B.hO,14,B.aZ,null,null,null)
D.f7O=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fni=new A.y("Cashier",null,D.f7O,null,null,null,null,null,null,null,null,null)
D.d6K=w([D.bMH,B.bp,D.fni],x.p)
D.eQl=new A.ck(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d6K,null)
D.fjx=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bzC=new A.bB(1,B.bf,D.fjx,null)
D.cS1=w([D.anu,B.at,D.bzC],x.p)
D.eQm=new A.ck(B.aN,B.e,B.j,B.m,null,B.p,null,0,D.cS1,null)
D.eUn=new A.as(16,40)
D.eUs=new A.as(22,64)
D.eUz=new A.as(280,88)
D.eVm=new A.a7(30,null,null,null)
D.eWx=new A.hO(5,8,8,1,null)
D.eWF=new A.hO(2,12,12,1.05,null)
D.fmZ=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eXn=new A.b1(D.fmZ,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fnd=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aOS=new A.b1(D.fnd,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fvl=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eXR=new A.b1(D.fvl,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fFI=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eXW=new A.b1(D.fFI,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fpg=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eY2=new A.b1(D.fpg,null,null,null,null,null,null,null,null,null,null,null,null,B.fK,!1,null,null,null,B.r,null)
D.fD4=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aOW=new A.b1(D.fD4,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fk7=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eYt=new A.b1(D.fk7,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fGr=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eZd=new A.b1(D.fGr,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fBl=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZC=new A.b1(D.fBl,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fFM=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eZF=new A.b1(D.fFM,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fwV=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZH=new A.b1(D.fwV,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fr5=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eZI=new A.b1(D.fr5,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fr6=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f_I=new A.b1(D.fr6,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fn0=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f0_=new A.b1(D.fn0,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.foV=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f0j=new A.b1(D.foV,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fwq=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f0z=new A.b1(D.fwq,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.frU=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f0A=new A.b1(D.frU,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.f3J=new A.G(!0,D.kq,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f48=new A.G(!0,D.kq,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4N=new A.rH(!0,B.rB,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f54=new A.G(!0,D.kq,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5D=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a81=new A.rH(!0,B.Sj,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6D=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f71=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8C=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8H=new A.G(!0,G.iE,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9W=new A.G(!0,B.M,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faE=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbm=new A.G(!0,B.bR,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbq=new A.G(!0,B.bx,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbN=new A.G(!0,D.EV,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbW=new A.G(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcW=new A.G(!0,B.cN,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdp=new A.G(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdP=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffg=new A.G(!0,B.ak,null,null,null,null,11.5,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffo=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR7=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8u=new A.G(!0,B.ak,null,null,null,null,12,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhr=new A.G(!0,G.iE,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhz=new A.G(!0,G.iE,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fim=new A.y("Themes",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fiY=new A.y("Add Item",null,B.cj,null,null,null,null,null,null,null,null,null)
D.f8l=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjm=new A.y("Debt receipt",null,D.f8l,null,B.L,null,null,null,null,null,null,null)
D.aR3=new A.G(!0,B.ak,null,null,null,null,11,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjE=new A.y("Person who owes",null,D.aR3,null,null,null,null,null,null,null,null,null)
D.fkA=new A.y("Notes",null,B.a89,null,null,null,null,null,null,null,null,null)
D.fl_=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f7i=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new A.y("Share",null,D.f7i,null,null,null,null,null,null,null,null,null)
D.flZ=new A.y("Move your family trees",null,D.aR7,null,null,null,null,null,null,null,null,null)
D.fmB=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fnc=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fov=new A.y("Remove this book?",null,B.hq,null,null,null,null,null,null,null,null,null)
D.aRz=new A.y("Download",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fpE=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fr1=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fs8=new A.y("Ribbon bookmark",null,B.iS,null,null,null,null,null,null,null,null,null)
D.ffa=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsB=new A.y("NGMY.ORG",null,D.ffa,null,B.L,null,null,null,null,null,null,null)
D.ftR=new A.y("Scan family tree QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fbF=new A.G(!0,B.c,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuB=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fbF,null,B.L,null,null,null,null,null,null,null)
D.fvO=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fvV=new A.y("Thumbnail",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fww=new A.y("Save the cover",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fwW=new A.y("Your photos",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fxa=new A.y("Create Project",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fxI=new A.y("Design your cover",null,U.rO,null,null,null,null,null,null,null,null,null)
D.fxO=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fxR=new A.y("PICTURE",null,H.or,null,null,null,null,null,null,null,null,null)
D.fyc=new A.y("Paid",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fye=new A.y("You can undo it right after.",null,T.Jl,null,null,null,null,null,null,null,null,null)
D.fyM=new A.y("Print",null,B.uR,null,null,null,null,null,null,null,null,null)
D.fz9=new A.y("Amount owed",null,D.aR3,null,null,null,null,null,null,null,null,null)
D.fzo=new A.y("Got it",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fzZ=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fA1=new A.y("Add to budget",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fAt=new A.y("Debtor signature",null,B.a89,null,null,null,null,null,null,null,null,null)
D.fAC=new A.y("Change icon",null,E.aQk,null,null,null,null,null,null,null,null,null)
D.fBO=new A.y("Family tree QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fCg=new A.y("Download",null,B.uR,null,null,null,null,null,null,null,null,null)
D.fCk=new A.y("Change",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fDa=new A.y("Clear all",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fDd=new A.y("WHAT SHOULD IT CHANGE?",null,H.or,null,null,null,null,null,null,null,null,null)
D.fDM=new A.y("COLOUR",null,H.or,null,null,null,null,null,null,null,null,null)
D.fE_=new A.y("Do it",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fE2=new A.y("Create Tree",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fF2=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f2G=new A.G(!0,E.jY,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFh=new A.y("Write the first page myself",null,D.f2G,null,null,null,null,null,null,null,null,null)
D.fFP=new A.y("Use this header",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fFW=new A.y("Create Project",null,E.aQM,null,null,null,null,null,null,null,null,null)
D.h1G=new C.abb(1,"header")
D.a9s=new C.abb(2,"projects")
D.h1H=new C.abb(3,"cashier")
D.a9t=new C.abb(4,"familyTree")
D.hdR=new C.cx3(0,"start")
D.hdS=new C.cx4(0,"start")
D.h24=new C.Yc(null)
D.h33=new C.YE(null)
D.dqp=new A.bt(B.hT,[],A.ax("bt<m,FJ>"))
D.d9b=w([],x.E)
D.d9c=w([],x.M)
D.h3A=new C.bdL(D.dqp,D.d9b,D.d9c,0,0,null,null)
D.h6i=new C.a_1(null)
D.aaa=new C.aJ5(0,"projects")
D.aWf=new C.aJ5(1,"cashier")
D.hbx=new C.aJ5(2,"familyTree")})()};
(a=>{a["F2Ma4DE4/4sE9kX3iJDByv1525U="]=a.current})($__dart_deferred_initializers__);