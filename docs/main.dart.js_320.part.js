((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,A3,A4,A5,A6,T,U,A7,A8,M,A9,H,Aa,Ab,V,W,X,Ac,Ad,Y,Ae,Af,Ag,Z,Ah,Ai,K,Aj,A_,A0,O,P,L,Q,C={
bCA(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCA=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vm(null,""),$async$bCA)
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
j=A.cS(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qS(t,a1,B.hD,"book",E.Fj),$async$bCA)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Qe(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KV(l)?y.l:y.i)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a28(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCA,v)},
agG(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agG=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vm(null,""),$async$agG)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n7(b6)
s=x.S
r=A.db(c1,0,A.dI(4,"count",s),A.T(c1).c)
q=F.a1W(new A.M(r,new C.fBi(),r.$ti.k("M<ak.E,m>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fBh(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agG)
case 6:l=c5
k=F.Qe(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.anW(s,D.dqa,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agG)
case 10:l=c5
k=l==null?null:F.Qe(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.u(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.u(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.l1(a5,a2.k("l1<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
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
p=A.cD(new A.bc(h,s),new C.fBj(),s.k("J.E"),p)
p=F.a1W(A.ph(p,3,A.a3(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a28(s,b9),$async$agG)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anW(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agG,v)},
hq3(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fKv(e,f),d,null,!0,!0,x.g2)},
anW:function anW(d,e,f){this.a=d
this.b=e
this.c=f},
fBi:function fBi(){},
fBh:function fBh(d){this.a=d},
fBj:function fBj(){},
fKv:function fKv(d,e){this.a=d
this.b=e},
bAq(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAq=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b6(b1,new C.fpT())){u=null
w=1
break}t=B.d.d6(b1,new C.fpU())
s=$.W()
r=new A.r1()
q=A.Dk(r,D.aMY)
p=A.N()
p.r=B.c.gp(0)
q.b0(D.aMY,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bS
o.e=B.fG
n=new C.fpZ(t)
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
return A.b(r.pE().zk(520,160),$async$bAq)
case 4:w=3
return A.b(b3.hv(B.h0),$async$bAq)
case 3:b0=b3
u=b0==null?null:J.eW(B.dD.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAq,v)},
fyZ(d){return C.i3w(d)},
i3w(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fyZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bg9()
n=d.x!=null&&d.z0(null).length===0
if(d.x!=null)t=n?D.zr:D.Im
else t=d.gTw()?D.Im:D.aHW
w=3
return A.b(C.bAq(d.ax),$async$fyZ)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amF(s)
r=A.a46(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aHW}else{p.c=C.wN(q,!0)
p.b=n?D.zr:D.Im}r.a2N(A.fUI(new C.fz0(p,d,new C.fz1(),t,n,o),null,D.bwQ,B.wn))
u=r.kc(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyZ,v)},
fFC(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fFC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fyZ(d),$async$fFC)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gy(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFC,v)},
fpT:function fpT(){},
fpU:function fpU(){},
fpZ:function fpZ(d){this.a=d},
fz1:function fz1(){},
fz0:function fz0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fz_:function fz_(){},
fKX(d,e){var w=0,v=A.j(x.H)
var $async$fKX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fL0(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fKX)
case 2:return A.h(null,v)}})
return A.i($async$fKX,v)},
bD2(d,e,f,g){return C.ib0(d,e,f,g)},
ib0(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bD2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cI.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.f0C)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fKT(g,r,f),d,null,!0,!0,x.H),$async$bD2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bD2,v)},
fL1(d,e){var w=0,v=A.j(x.H)
var $async$fL1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fL4(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fL1)
case 2:return A.h(null,v)}})
return A.i($async$fL1,v)},
aYc:function aYc(d,e){this.c=d
this.a=e},
c1S:function c1S(){},
bai:function bai(d,e){this.b=d
this.a=e},
fL0:function fL0(d,e){this.a=d
this.b=e},
fKY:function fKY(d){this.a=d},
fKZ:function fKZ(d,e,f){this.a=d
this.b=e
this.c=f},
fL_:function fL_(d,e){this.a=d
this.b=e},
fKT:function fKT(d,e,f){this.a=d
this.b=e
this.c=f},
fKR:function fKR(d){this.a=d},
fKS:function fKS(d,e,f){this.a=d
this.b=e
this.c=f},
fL4:function fL4(d,e){this.a=d
this.b=e},
fL2:function fL2(d){this.a=d},
fL3:function fL3(d,e,f){this.a=d
this.b=e
this.c=f},
ftL(d,e){var w=0,v=A.j(x.y),u,t
var $async$ftL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1H(d),$async$ftL)
case 3:t=g
J.nt(t,new C.ftM(e))
u=A.ahk(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ftL,v)},
ftM:function ftM(d){this.a=d},
ao2:function ao2(d,e,f){this.c=d
this.d=e
this.a=f},
aCk:function aCk(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dGb:function dGb(d,e){this.a=d
this.b=e},
dFX:function dFX(d,e){this.a=d
this.b=e},
dG_:function dG_(d,e,f){this.a=d
this.b=e
this.c=f},
dFZ:function dFZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFY:function dFY(d,e){this.a=d
this.b=e},
dG0:function dG0(d,e){this.a=d
this.b=e},
dFV:function dFV(){},
dFW:function dFW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFU:function dFU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFF:function dFF(d){this.a=d},
dFG:function dFG(d,e,f){this.a=d
this.b=e
this.c=f},
dFH:function dFH(d,e){this.a=d
this.b=e},
dFE:function dFE(d){this.a=d},
dFM:function dFM(d,e){this.a=d
this.b=e},
dFD:function dFD(d){this.a=d},
dFN:function dFN(d,e,f){this.a=d
this.b=e
this.c=f},
dFO:function dFO(d,e,f){this.a=d
this.b=e
this.c=f},
dFC:function dFC(d,e){this.a=d
this.b=e},
dFP:function dFP(d,e,f){this.a=d
this.b=e
this.c=f},
dFB:function dFB(d,e){this.a=d
this.b=e},
dFQ:function dFQ(d,e){this.a=d
this.b=e},
dFA:function dFA(d){this.a=d},
dFR:function dFR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFy:function dFy(){},
dFs:function dFs(d){this.a=d},
dFt:function dFt(d){this.a=d},
dFz:function dFz(d,e){this.a=d
this.b=e},
dFS:function dFS(d,e){this.a=d
this.b=e},
dFx:function dFx(d){this.a=d},
dFT:function dFT(d){this.a=d},
dFw:function dFw(){},
dFI:function dFI(d,e){this.a=d
this.b=e},
dFv:function dFv(d){this.a=d},
dFJ:function dFJ(d,e,f){this.a=d
this.b=e
this.c=f},
dFu:function dFu(d,e){this.a=d
this.b=e},
dFr:function dFr(d,e){this.a=d
this.b=e},
dFK:function dFK(d){this.a=d},
dFL:function dFL(d,e,f){this.a=d
this.b=e
this.c=f},
dGe:function dGe(){},
dGf:function dGf(d,e){this.a=d
this.b=e},
dGc:function dGc(d){this.a=d},
dGd:function dGd(d){this.a=d},
dG8:function dG8(d,e){this.a=d
this.b=e},
dG9:function dG9(d){this.a=d},
dG1:function dG1(d,e,f){this.a=d
this.b=e
this.c=f},
dG2:function dG2(d,e,f){this.a=d
this.b=e
this.c=f},
dG3:function dG3(d,e,f){this.a=d
this.b=e
this.c=f},
dG4:function dG4(d,e,f){this.a=d
this.b=e
this.c=f},
dG5:function dG5(d,e,f){this.a=d
this.b=e
this.c=f},
dG6:function dG6(d,e,f){this.a=d
this.b=e
this.c=f},
dG7:function dG7(d,e,f){this.a=d
this.b=e
this.c=f},
dGg:function dGg(){},
dGh:function dGh(){},
dGi:function dGi(){},
dGj:function dGj(d){this.a=d},
dGa:function dGa(d,e){this.a=d
this.b=e},
hme(d){return B.d.dM(D.a28,new C.fup(d),new C.fuq())},
uh:function uh(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fup:function fup(d){this.a=d},
fuq:function fuq(){},
akn:function akn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTY:function aTY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Sw:function Sw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdV:function bdV(){this.d=$
this.c=this.a=null},
d6_:function d6_(d,e){this.a=d
this.b=e},
d5Y:function d5Y(d,e){this.a=d
this.b=e},
d5Z:function d5Z(){},
d60:function d60(d,e){this.a=d
this.b=e},
h7_(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.ne(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KH(d,e){return C.i29(d,e)},
i29(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KH=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$KH)
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
o=A.cD(o,new C.fwD(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fwE(),n),n.k("J.E"))
B.d.aZ(o,new C.fwF())
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
return A.i($async$KH,v)},
AU(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$AU)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fJB(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AU,v)},
aQ6(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQ6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KH(d,e),$async$aQ6)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.fRL(f))
if(s===-1)t.cj(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AU(d,e,u),$async$aQ6)
case 3:return A.h(null,v)}})
return A.i($async$aQ6,v)},
bAS(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KH(d,e),$async$bAS)
case 2:u=h
J.nt(u,new C.ftD(f))
w=3
return A.b(C.AU(d,e,u),$async$bAS)
case 3:return A.h(null,v)}})
return A.i($async$bAS,v)},
bB6(d,e){return C.i28(d,e)},
i28(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bB6=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bB6)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.MX
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
if(D.CB.ai(0,o.h(0,"foil")))j=A.cQ(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3L,o.h(0,"position"))?A.cQ(o.h(0,"position")):"middle"
g=B.d.t(D.a38,o.h(0,"frame"))?A.cQ(o.h(0,"frame")):"double"
f=B.d.t(D.a33,o.h(0,"texture"))?A.cQ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cUZ,o.h(0,"header"))?A.cQ(o.h(0,"header")):"classic"
o=new C.Hu(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.MX
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
return A.i($async$bB6,v)},
Rj(d,e,f){return C.iax(d,e,f)},
iax(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rj=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Rj)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ah(),null)),$async$Rj)
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
return A.i($async$Rj,v)},
QN(d,e){return C.i2a(d,e)},
i2a(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QN=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$QN)
case 7:r=g
q=r.tb("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KH(d,e),$async$QN)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lr(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QN)
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
return A.i($async$QN,v)},
ag0(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ag0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QN(d,e),$async$ag0)
case 3:s=g
r=J.a4(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.az(),$async$ag0)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ag0)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ag0,v)},
a2l(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2l=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QN(d,e),$async$a2l)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.az(),$async$a2l)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2l)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2l)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2l)
case 6:return A.h(null,v)}})
return A.i($async$a2l,v)},
ne:function ne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwD:function fwD(){},
fwE:function fwE(){},
fwF:function fwF(){},
fJB:function fJB(){},
fRL:function fRL(d){this.a=d},
ftD:function ftD(d){this.a=d},
Hu:function Hu(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bNA:function bNA(d){this.a=d},
iaQ(d,e,f,g,h,i,j){return A.a6(d,!1).cm(A.e9(new C.fK9(j,i,f,e,h,g),!0,null,x.H))},
QJ(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QJ=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QN(h,g),$async$QJ)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aP5)
u=!1
w=1
break}w=4
return A.b(C.hq3(d,f,e),$async$QJ)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ag0(h,g),$async$QJ)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.ne(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AU(h,r,p),$async$QJ)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rj(h,r,new C.Hu("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QJ)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QJ,v)},
fK9:function fK9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Z5:function Z5(d,e,f,g,h,i,j,k){var _=this
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
d6F:function d6F(d){this.a=d},
d6E:function d6E(d,e){this.a=d
this.b=e},
d6t:function d6t(d,e){this.a=d
this.b=e},
d6q:function d6q(d,e){this.a=d
this.b=e},
d61:function d61(d){this.a=d},
d62:function d62(d,e){this.a=d
this.b=e},
d6u:function d6u(d){this.a=d},
d6a:function d6a(d){this.a=d},
d68:function d68(d){this.a=d},
d69:function d69(d){this.a=d},
d6b:function d6b(d){this.a=d},
d6r:function d6r(d){this.a=d},
d6s:function d6s(){},
d66:function d66(d){this.a=d},
d67:function d67(d,e){this.a=d
this.b=e},
d6c:function d6c(d){this.a=d},
d6d:function d6d(d,e){this.a=d
this.b=e},
d6D:function d6D(d){this.a=d},
d6C:function d6C(d,e){this.a=d
this.b=e},
d6B:function d6B(d){this.a=d},
d6n:function d6n(d){this.a=d},
d6m:function d6m(d){this.a=d},
d6o:function d6o(d){this.a=d},
d63:function d63(d,e){this.a=d
this.b=e},
d6p:function d6p(d,e){this.a=d
this.b=e},
d6g:function d6g(d){this.a=d},
d6h:function d6h(d){this.a=d},
d6f:function d6f(){},
d6i:function d6i(d){this.a=d},
d6j:function d6j(d){this.a=d},
d6k:function d6k(d,e){this.a=d
this.b=e},
d6l:function d6l(d,e,f){this.a=d
this.b=e
this.c=f},
d6e:function d6e(d,e){this.a=d
this.b=e},
d6w:function d6w(d){this.a=d},
d6v:function d6v(){},
d6x:function d6x(d){this.a=d},
d6y:function d6y(d){this.a=d},
d6z:function d6z(d){this.a=d},
d6A:function d6A(d,e){this.a=d
this.b=e},
d64:function d64(d){this.a=d},
d65:function d65(d){this.a=d},
Z9:function Z9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bef:function bef(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d8p:function d8p(d){this.a=d},
d8q:function d8q(d){this.a=d},
d8o:function d8o(d){this.a=d},
d8r:function d8r(d){this.a=d},
d8n:function d8n(d){this.a=d},
d8s:function d8s(d){this.a=d},
d8m:function d8m(d){this.a=d},
d8t:function d8t(d,e){this.a=d
this.b=e},
d8l:function d8l(d,e){this.a=d
this.b=e},
d8u:function d8u(d,e){this.a=d
this.b=e},
Z7:function Z7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aet:function aet(d,e,f){this.a=d
this.b=e
this.c=f},
azp:function azp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d6U:function d6U(d,e){this.a=d
this.b=e},
d6T:function d6T(d,e){this.a=d
this.b=e},
d6Y:function d6Y(d){this.a=d},
d6X:function d6X(d,e){this.a=d
this.b=e},
d6V:function d6V(d){this.a=d},
d6W:function d6W(d){this.a=d},
d6Z:function d6Z(d){this.a=d},
d7_:function d7_(d){this.a=d},
d6S:function d6S(d,e){this.a=d
this.b=e},
d6R:function d6R(d,e){this.a=d
this.b=e},
JO:function JO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yo:function Yo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cFu:function cFu(d){this.a=d},
cFv:function cFv(){},
cFw:function cFw(d){this.a=d},
bbv:function bbv(d,e,f){this.b=d
this.c=e
this.a=f},
bbm:function bbm(d,e){this.b=d
this.a=e},
ui:function ui(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YG:function YG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbt:function bbt(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cYW:function cYW(d,e,f){this.a=d
this.b=e
this.c=f},
cYV:function cYV(d,e){this.a=d
this.b=e},
cZk:function cZk(d){this.a=d},
cZ7:function cZ7(){},
cZl:function cZl(d){this.a=d},
cZ6:function cZ6(){},
cZm:function cZm(d,e){this.a=d
this.b=e},
cZ5:function cZ5(d,e){this.a=d
this.b=e},
cZn:function cZn(d,e){this.a=d
this.b=e},
cZ4:function cZ4(d,e){this.a=d
this.b=e},
cZo:function cZo(d){this.a=d},
cZ3:function cZ3(){},
cZp:function cZp(d,e){this.a=d
this.b=e},
cZ2:function cZ2(d,e){this.a=d
this.b=e},
cZq:function cZq(d){this.a=d},
cZf:function cZf(d,e){this.a=d
this.b=e},
cZr:function cZr(d){this.a=d},
cZs:function cZs(d){this.a=d},
cZu:function cZu(d){this.a=d},
cZv:function cZv(d){this.a=d},
cZe:function cZe(d,e){this.a=d
this.b=e},
cZw:function cZw(d,e){this.a=d
this.b=e},
aGo:function aGo(d){this.a=d},
bgJ:function bgJ(d){this.a=d},
b9H:function b9H(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i17(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahx(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fut(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a_<1>"),q=q.k("cO<1,m>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.y1)m.push(l===D.a_b?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.k2(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k2(h,a2,a2)-A.k2(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cO(new A.a_(a4,new C.fur(u,f),p),new C.fus(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i18(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahx(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fuy(v,e)
q=new C.fuw(v)
p=A.U(w,x.S)
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
for(l=B.d.gae(e),k=new A.f1(l,new C.fux(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hNM(d,e,f,g){var w,v,u=C.i19(d,e)
if(u<=0||f.length<=u)return new A.ae3(!1,D.Co,f)
if(g.t(0,e.a))return new A.ae3(!1,D.Co,f)
w=A.T(f).c
v=A.db(f,0,A.dI(u,"count",x.S),w).dJ(0)
return new A.ae3(!0,A.db(f,u,null,w).dJ(0),v)},
hNN(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahx(d3),d2=d1.length
if(d2===0)return D.h2C
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.c9(0,t.a,new C.d76(t))}s=new C.d7n(v)
d2=x.h
r=A.U(w,d2)
q=new C.d7f(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d7e(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.c9(0,k,new C.d77()),o)}h=new C.d7d(s)
g=new C.d7c(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d78(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
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
a9=new C.d7l(new C.d7h(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
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
b3=A.rh(J.dJ(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.cc)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d75(a2,new C.d7m(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.FG(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.JW(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bM(0,new C.d79(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f1(j,new C.d7a(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d7b())
c6.push(new C.aIu(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.be_(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hlJ(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hg3(d,e,f,g,h,i,j,k,l,m,n){return new C.ZJ(k,f,j,e,l,n,m,d,g,h,i,null)},
aBl(d,e,f,g,h,i,j){return new C.bhF(i,d,e,f,j,h,g,null)},
apa:function apa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCV:function aCV(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dUa:function dUa(d){this.a=d},
dU9:function dU9(d){this.a=d},
dUc:function dUc(d,e){this.a=d
this.b=e},
dUd:function dUd(d,e){this.a=d
this.b=e},
dUe:function dUe(d){this.a=d},
dU8:function dU8(d,e){this.a=d
this.b=e},
dUb:function dUb(d){this.a=d},
dUg:function dUg(d){this.a=d},
dUf:function dUf(d,e){this.a=d
this.b=e},
ap4:function ap4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCS:function aCS(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dTB:function dTB(d){this.a=d},
dTz:function dTz(d){this.a=d},
dTA:function dTA(d){this.a=d},
dTC:function dTC(d,e){this.a=d
this.b=e},
dTw:function dTw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT4:function dT4(d){this.a=d},
dT5:function dT5(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTh:function dTh(d){this.a=d},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTv:function dTv(d,e){this.a=d
this.b=e},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTs:function dTs(d,e){this.a=d
this.b=e},
dTo:function dTo(d,e){this.a=d
this.b=e},
dTn:function dTn(d){this.a=d},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTm:function dTm(d){this.a=d},
dTq:function dTq(d){this.a=d},
dTr:function dTr(d){this.a=d},
dTu:function dTu(d,e){this.a=d
this.b=e},
dST:function dST(d,e){this.a=d
this.b=e},
dSU:function dSU(d,e){this.a=d
this.b=e},
dTE:function dTE(d,e,f){this.a=d
this.b=e
this.c=f},
dTy:function dTy(d,e,f){this.a=d
this.b=e
this.c=f},
dTx:function dTx(d){this.a=d},
dSV:function dSV(d){this.a=d},
dSW:function dSW(d){this.a=d},
dSX:function dSX(){},
dSY:function dSY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT_:function dT_(d){this.a=d},
dT2:function dT2(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d){this.a=d},
dTD:function dTD(d){this.a=d},
dTe:function dTe(){},
dTf:function dTf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTd:function dTd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT9:function dT9(d,e,f){this.a=d
this.b=e
this.c=f},
dT8:function dT8(d,e,f){this.a=d
this.b=e
this.c=f},
dT6:function dT6(d,e){this.a=d
this.b=e},
dTa:function dTa(d){this.a=d},
dTb:function dTb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dT7:function dT7(d,e){this.a=d
this.b=e},
dTc:function dTc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTg:function dTg(d,e){this.a=d
this.b=e},
dTL:function dTL(){},
dTM:function dTM(d,e){this.a=d
this.b=e},
dTN:function dTN(d){this.a=d},
dTO:function dTO(d,e){this.a=d
this.b=e},
dTH:function dTH(d){this.a=d},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTI:function dTI(d,e){this.a=d
this.b=e},
dTJ:function dTJ(d,e){this.a=d
this.b=e},
dTK:function dTK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dTP:function dTP(d){this.a=d},
dTG:function dTG(d){this.a=d},
dT3:function dT3(d){this.a=d},
bdY:function bdY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d73:function d73(d){this.a=d},
d72:function d72(d,e){this.a=d
this.b=e},
d74:function d74(d){this.a=d},
d71:function d71(d,e){this.a=d
this.b=e},
fut:function fut(d,e){this.a=d
this.b=e},
fuu:function fuu(d){this.a=d},
fuv:function fuv(){},
fur:function fur(d,e){this.a=d
this.b=e},
fus:function fus(){},
fuy:function fuy(d,e){this.a=d
this.b=e},
fuz:function fuz(d){this.a=d},
fuA:function fuA(){},
fuw:function fuw(d){this.a=d},
fux:function fux(d,e){this.a=d
this.b=e},
JW:function JW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FG:function FG(d,e){this.a=d
this.b=e},
be_:function be_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d76:function d76(d){this.a=d},
d7n:function d7n(d){this.a=d},
d7f:function d7f(d){this.a=d},
d7g:function d7g(){},
d7e:function d7e(d){this.a=d},
d77:function d77(){},
d7d:function d7d(d){this.a=d},
d7c:function d7c(d,e){this.a=d
this.b=e},
d78:function d78(d){this.a=d},
d7h:function d7h(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d7i:function d7i(d){this.a=d},
d7j:function d7j(d){this.a=d},
d7k:function d7k(){},
d7l:function d7l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d7m:function d7m(){},
d75:function d75(d,e,f,g,h,i,j,k,l,m){var _=this
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
d79:function d79(d,e){this.a=d
this.b=e},
d7a:function d7a(d){this.a=d},
d7b:function d7b(){},
aIu:function aIu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
be0:function be0(d,e){this.b=d
this.a=e},
d7o:function d7o(){},
d7p:function d7p(d){this.a=d},
d7q:function d7q(d){this.a=d},
d7r:function d7r(){},
bhG:function bhG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bd4:function bd4(d,e){this.b=d
this.a=e},
bvo:function bvo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fbP:function fbP(d){this.a=d},
bl1:function bl1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eNH:function eNH(d){this.a=d},
eNG:function eNG(d,e){this.a=d
this.b=e},
ZJ:function ZJ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dnh:function dnh(d,e){this.a=d
this.b=e},
dng:function dng(d){this.a=d},
dne:function dne(d){this.a=d},
dnf:function dnf(d){this.a=d},
dnq:function dnq(d){this.a=d},
dnr:function dnr(d){this.a=d},
dnp:function dnp(d,e){this.a=d
this.b=e},
dns:function dns(){},
dnv:function dnv(d){this.a=d},
dno:function dno(d,e){this.a=d
this.b=e},
dnu:function dnu(){},
dnw:function dnw(d){this.a=d},
dnn:function dnn(d,e){this.a=d
this.b=e},
dnx:function dnx(d){this.a=d},
dnm:function dnm(d){this.a=d},
dny:function dny(d){this.a=d},
dnl:function dnl(d){this.a=d},
dnz:function dnz(d){this.a=d},
dnk:function dnk(d){this.a=d},
dnA:function dnA(d){this.a=d},
dnj:function dnj(d){this.a=d},
dnB:function dnB(d){this.a=d},
dni:function dni(d,e){this.a=d
this.b=e},
dnt:function dnt(d){this.a=d},
acU:function acU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhF:function bhF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acT:function acT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhE:function bhE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnC:function dnC(d){this.a=d},
dnD:function dnD(d,e){this.a=d
this.b=e},
aBk:function aBk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHw:function aHw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acV:function acV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnM:function dnM(d){this.a=d},
JK:function JK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
haW(d){var w=d.T,v=x.N
return w.j9(w,new C.c8p(),v,v)},
hFh(d){var w=d.bz
if(w>=0)return w
return 5},
haY(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.haW(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
haX(d,e){var w=C.haY(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hFi(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.haW(d),w,w)
u=C.haY(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bR(A.dE(30,0,0,0,0,0).a).a6().ac())
d.T=v},
aZC(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZC=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lh(t,B.I9),$async$aZC)
case 3:if(l){u=!0
w=1
break}u=A.kW(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.I9,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZC,v)},
c8p:function c8p(){},
hFf(){var w,v=$.py(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.h2(u)},
Io(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Io=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Io)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Io)
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
return A.i($async$Io,v)},
a6V(d){return C.hFg(d)},
hFg(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6V=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6V)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a6V)
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
return A.i($async$a6V,v)},
c8o(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c8o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Io(),$async$c8o)
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
return A.i($async$c8o,v)},
Ni(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ni=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c8o(d),$async$Ni)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Io(),$async$Ni)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dQ(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,t,o)
w=9
return A.b(C.a6V(s),$async$Ni)
case 9:case 8:u=t
w=1
break
case 5:n=C.hFf()
w=10
return A.b(C.Io(),$async$Ni)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6V(s),$async$Ni)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ni,v)},
aZB(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Io(),$async$aZB)
case 3:t=f
for(s=J.dl(t),r=s.gdL(t),r=r.dJ(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6V(t),$async$aZB)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZB,v)},
a6W(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6W=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ap9(d,e),$async$a6W)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ni(d),$async$a6W)
case 7:w=4
break
case 5:w=8
return A.b(C.aZB(d),$async$a6W)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6W,v)},
ap3(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ap3=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ap9(f,e),$async$ap3)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$ap3)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Io(),$async$ap3)
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
return A.i($async$ap3,v)},
aZA(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZA)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Io(),$async$aZA)
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
return A.i($async$aZA,v)},
hFj(){var w,v=$.py(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.h2(u)},
ap6(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ap6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$ap6)
case 3:if(!g){u=null
w=1
break}t=C.hFj()
w=4
return A.b(A.US(),$async$ap6)
case 4:s=g
r=B.dK.aK(B.S.ao(d.eS(),null))
r=B.cV.gcB().aK(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6X(s),$async$ap6)
case 5:p=e?999:2
u=new A.a_V("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap6,v)},
ap5(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ap5=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.US(),$async$ap5)
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
return A.b(C.aZA(J.k(l==null?"":l),j),$async$ap5)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cA(0,B.cI.aK(t))
s=C.haZ(r)}catch(f){q=A.ab(f)
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
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=5
return A.b(A.a6X(p),$async$ap5)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap5,v)},
haZ(d){var w,v,u,t,s=null
try{w=B.S.aJ(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hFl(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fVM(d){var w=0,v=A.j(x.m),u,t,s
var $async$fVM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ap5(t[1])
w=1
break}u=null
w=1
break}u=C.haZ(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVM,v)},
hFl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cD(u,new C.c8r(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c8s(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.U(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jz(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.da(l,u)
n=A.cD(n,new C.c8t(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c8u(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ap7(h,w,s,r,q)},
ap9(d,e){var w=0,v=A.j(x.y),u,t
var $async$ap9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.N9(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AI(d),$async$ap9)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap9,v)},
c8A(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c8A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AI(d),$async$c8A)
case 3:t=s.b6(f,new C.c8B(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.c8C())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8A,v)},
UT(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UT=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ap9(e,d),$async$UT)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Ni(e),$async$UT)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AI(e),$async$UT)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.c8y(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gam(r)){u=null
w=1
break}t=t.dz(r,new C.c8z(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KH(e,o),$async$UT)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.ap7(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UT,v)},
aZF(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZF=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UT(d,e,f,g),$async$aZF)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Go(A.JS(q.eS(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZF,v)},
aZE(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZE=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UT(d,e,f,g),$async$aZE)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ap6(r,f),$async$aZE)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFx(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZE,v)},
UU(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UU=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fVM(a0),$async$UU)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ap3(g.a,d,e,f,s,r),$async$UU)
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
return A.b(C.bAI(e,j),$async$UU)
case 12:case 11:w=13
return A.b(C.ahi(e,j,s),$async$UU)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.AU(e,i,h),$async$UU)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.boC(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UU,v)},
ap7:function ap7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8w:function c8w(){},
c8x:function c8x(){},
c8v:function c8v(){},
c8r:function c8r(){},
c8s:function c8s(){},
c8t:function c8t(){},
c8u:function c8u(){},
c8B:function c8B(){},
c8C:function c8C(){},
c8y:function c8y(d){this.a=d},
c8z:function c8z(d){this.a=d},
h3a(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hE(d,new C.ap8(w,e,g,i,f,h,null),!0,null,x.H)},
d70(d,e,f,g,h,i,j,k){return new C.bdX(i,e,k,j,g,f,h,d,null)},
ap8:function ap8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCU:function aCU(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dTY:function dTY(d){this.a=d},
dTZ:function dTZ(d,e,f){this.a=d
this.b=e
this.c=f},
dU2:function dU2(d,e){this.a=d
this.b=e},
dU3:function dU3(d){this.a=d},
dTV:function dTV(d){this.a=d},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTX:function dTX(d,e){this.a=d
this.b=e},
dU1:function dU1(d){this.a=d},
dU0:function dU0(d,e){this.a=d
this.b=e},
dU_:function dU_(){},
dU5:function dU5(d){this.a=d},
dU6:function dU6(d,e){this.a=d
this.b=e},
dU4:function dU4(d,e){this.a=d
this.b=e},
d7s:function d7s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdZ:function bdZ(d,e,f){this.d=d
this.e=e
this.a=f},
aca:function aca(d,e,f){this.c=d
this.d=e
this.a=f},
bdX:function bdX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
be1:function be1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_3:function a_3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCT:function aCT(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dTQ:function dTQ(d,e){this.a=d
this.b=e},
dTR:function dTR(d){this.a=d},
dTS:function dTS(d){this.a=d},
dTT:function dTT(d){this.a=d},
dTU:function dTU(d){this.a=d},
a_4:function a_4(d){this.a=d},
bj8:function bj8(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dU7:function dU7(d,e){this.a=d
this.b=e},
aYb(d,e){return new C.aYa(d,e,null)},
aYa:function aYa(d,e,f){this.c=d
this.d=e
this.a=f},
i3B(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
ib_(d){return A.bS(B.K,null,new C.fKC(new C.tR(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hcR(d,e){return new C.as3(e,d,null)},
aPO(d,e,f,g,h,i,j){var w=C.i3B(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5Y(w,!0,null),null),B.aq)
return I.aPa(e,B.bV,f,g,h,i,j)},
lA:function lA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5Y:function a5Y(d,e,f){this.c=d
this.d=e
this.a=f},
biP:function biP(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b4$=e
_.c=_.a=null},
dFj:function dFj(d){this.a=d},
dFk:function dFk(){},
dFl:function dFl(d,e){this.a=d
this.b=e},
biO:function biO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fKC:function fKC(d){this.a=d},
fKB:function fKB(d,e){this.a=d
this.b=e},
fKA:function fKA(d,e){this.a=d
this.b=e},
fKz:function fKz(d,e){this.a=d
this.b=e},
as3:function as3(d,e,f){this.c=d
this.d=e
this.a=f},
cg5:function cg5(d,e){this.a=d
this.b=e},
aKQ:function aKQ(){},
iaL(d){var w=null
return A.ca(w,w,!0,w,new C.fJZ(),d,w,!0,!0,x.e2)},
ibV(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fRs(h,g,f,e),d,w,!0,!0,x.N)},
iaN(d,e){var w=null
return A.ca(w,w,!0,w,new C.fK3(e),d,w,!0,!0,x.dY)},
iaM(d){var w=null
return A.ca(w,w,!0,w,new C.fK2(),d,w,!0,!0,x.c5)},
aSK:function aSK(d,e){this.a=d
this.b=e},
aSJ:function aSJ(d){this.a=d},
aQJ:function aQJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJZ:function fJZ(){},
fRs:function fRs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fK3:function fK3(d){this.a=d},
fK2:function fK2(){},
YI:function YI(d,e){this.c=d
this.a=e},
ay9:function ay9(){var _=this
_.d=$
_.c=_.a=_.e=null},
cZI:function cZI(d){this.a=d},
cZJ:function cZJ(d){this.a=d},
cZH:function cZH(d,e){this.a=d
this.b=e},
cZK:function cZK(d){this.a=d},
cZL:function cZL(d){this.a=d},
YH:function YH(d){this.a=d},
ay8:function ay8(){this.d=$
this.c=this.a=null},
cZE:function cZE(d){this.a=d},
cZF:function cZF(d){this.a=d},
cZG:function cZG(d){this.a=d},
Yf:function Yf(d){this.a=d},
awT:function awT(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cxh:function cxh(){},
cxn:function cxn(d){this.a=d},
cxo:function cxo(d){this.a=d},
cxp:function cxp(d){this.a=d},
cxm:function cxm(){},
cxq:function cxq(d){this.a=d},
cxr:function cxr(d){this.a=d},
cxl:function cxl(){},
cxs:function cxs(d,e){this.a=d
this.b=e},
cxk:function cxk(d,e){this.a=d
this.b=e},
cxi:function cxi(d,e){this.a=d
this.b=e},
cxt:function cxt(d){this.a=d},
cxj:function cxj(){},
cxu:function cxu(d){this.a=d},
a0P:function a0P(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvg:function bvg(){this.d=$
this.c=this.a=null},
fbh:function fbh(d,e){this.a=d
this.b=e},
fbi:function fbi(d){this.a=d},
fbj:function fbj(d,e){this.a=d
this.b=e},
abd:function abd(d,e){this.a=d
this.b=e},
Ft:function Ft(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bve:function bve(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fbf:function fbf(d,e){this.a=d
this.b=e},
awM:function awM(d,e){this.c=d
this.a=e},
bvf:function bvf(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fbg:function fbg(d){this.a=d},
bvd:function bvd(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aN0:function aN0(){},
aN1:function aN1(){},
bCF(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bm(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oI(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fID(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aV(B.o.u(s),2,"0")
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XF(A.d3(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPq(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i1().lb(85,1280,B.eJ),$async$aPq)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fn(),$async$aPq)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hcQ()
w=9
return A.b(C.cg4(q,r),$async$aPq)
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
return A.i($async$aPq,v)},
aPM(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPM=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cg1(g)
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
return A.b($.W().Lt(p,!0,null,i).d7(0,B.fL),$async$aPM)
case 9:n=a1
w=10
return A.b(n.m3(),$async$aPM)
case 10:m=a1
w=11
return A.b(J.ahI(m).hv(B.h0),$async$aPM)
case 11:l=a1
J.ahI(m).q()
if(l==null){w=8
break}i=J.eW(B.dD.gaP(l))
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
return A.i($async$aPM,v)},
fID:function fID(){},
tR:function tR(d){this.a=d},
as2:function as2(d,e,f){this.c=d
this.d=e
this.a=f},
aEp:function aEp(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eKR:function eKR(d,e){this.a=d
this.b=e},
eKI:function eKI(d){this.a=d},
eKJ:function eKJ(d){this.a=d},
eKP:function eKP(d,e){this.a=d
this.b=e},
eKO:function eKO(d,e){this.a=d
this.b=e},
eKL:function eKL(d,e){this.a=d
this.b=e},
eKK:function eKK(d,e){this.a=d
this.b=e},
eKM:function eKM(d){this.a=d},
eKN:function eKN(d,e){this.a=d
this.b=e},
eKQ:function eKQ(d,e){this.a=d
this.b=e},
eKD:function eKD(d,e){this.a=d
this.b=e},
eKH:function eKH(d){this.a=d},
eKG:function eKG(d,e){this.a=d
this.b=e},
eKF:function eKF(d){this.a=d},
eKS:function eKS(d,e){this.a=d
this.b=e},
eKT:function eKT(d,e){this.a=d
this.b=e},
eKE:function eKE(d,e){this.a=d
this.b=e},
hpy(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fIE(d,e,f){var w=0,v=A.j(x.N),u
var $async$fIE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hpy(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIE,v)},
bCH(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fIE(!0,d,e),$async$bCH)
case 4:w=3
return A.b(r.as0(g,d,e.a),$async$bCH)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aK(B.S.ao(C.hpy(d,e,null),null))
u="NGMY_WS:"+B.kk.gcB().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCH,v)},
hhp(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h2S(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d0(s,"NGMYWSSYNC2|"))return!0
if(J.d0(s,"NGMY_WS:"))return!0
if(J.f3(s,t))return!0
if(J.d0(s,"{"))try{w=B.S.aJ(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i8E(d){var w,v,u,t=C.hhp(d)
if(t==null)return null
if(C.h2S(t))return t
w=B.a.cK(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.h2S(v))return v}u=B.a.cK(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.h2S(v))return v}return null},
h2R(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d0(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d0(q,"NGMY_WS:")){v=B.cg.cA(0,B.cI.aK(J.mH(q,8)))
w=t.a(B.S.aJ(0,v,r))}else w=t.a(B.S.aJ(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fYk(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCG(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.as_(t[1]),$async$bCG)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h2R(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h2R(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCG,v)},
h2Q(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lk(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bCd(){var w=0,v=A.j(x.o),u,t
var $async$bCd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gz(),$async$bCd)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h2R(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCd,v)},
hqr(d,e,f,g){return A.bS(B.K,null,new C.fRi(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fRi:function fRi(d,e,f){this.a=d
this.b=e
this.c=f},
adf:function adf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eKV:function eKV(d,e){this.a=d
this.b=e},
eKW:function eKW(d,e){this.a=d
this.b=e},
eKX:function eKX(d,e){this.a=d
this.b=e},
eKY:function eKY(d,e){this.a=d
this.b=e},
eKU:function eKU(d){this.a=d},
arX:function arX(d,e,f){this.c=d
this.d=e
this.a=f},
bkv:function bkv(){var _=this
_.c=_.a=_.e=_.d=null},
eKy:function eKy(d,e){this.a=d
this.b=e},
eKz:function eKz(d){this.a=d},
eKA:function eKA(d){this.a=d},
as1:function as1(d){this.a=d},
aEo:function aEo(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eKC:function eKC(d){this.a=d},
eKB:function eKB(d){this.a=d},
hIz(d,e,f,g,h){return new C.NV(h,g,d,e,f,null)},
aJb:function aJb(d,e){this.a=d
this.b=e},
NV:function NV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEq:function aEq(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eLk:function eLk(){},
eLg:function eLg(d,e){this.a=d
this.b=e},
eLh:function eLh(d){this.a=d},
eL1:function eL1(d){this.a=d},
eL_:function eL_(d){this.a=d},
eL0:function eL0(d){this.a=d},
eLa:function eLa(d,e){this.a=d
this.b=e},
eL7:function eL7(d,e){this.a=d
this.b=e},
eL8:function eL8(d,e){this.a=d
this.b=e},
eL9:function eL9(d,e,f){this.a=d
this.b=e
this.c=f},
eL5:function eL5(d,e,f){this.a=d
this.b=e
this.c=f},
eL3:function eL3(d){this.a=d},
eL4:function eL4(d){this.a=d},
eL6:function eL6(d){this.a=d},
eLn:function eLn(d){this.a=d},
eLm:function eLm(d){this.a=d},
eLo:function eLo(d){this.a=d},
eLl:function eLl(d){this.a=d},
eKZ:function eKZ(d){this.a=d},
eL2:function eL2(d,e){this.a=d
this.b=e},
eLj:function eLj(d,e){this.a=d
this.b=e},
eLi:function eLi(d,e){this.a=d
this.b=e},
eLd:function eLd(d){this.a=d},
eLe:function eLe(d){this.a=d},
eLf:function eLf(d,e){this.a=d
this.b=e},
eLc:function eLc(d,e){this.a=d
this.b=e},
eLb:function eLb(d,e,f){this.a=d
this.b=e
this.c=f},
bx1:function bx1(){},
AA(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afK(d,e,f){return C.hY9(d,e,f)},
hY9(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afK=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$afK)
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
return A.i($async$afK,v)},
afJ(d,e){return C.hY8(d,e)},
hY8(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afJ=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afJ)
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
return A.i($async$afJ,v)},
hWV(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sx(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzJ(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzJ=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1R(q),$async$bzJ)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPM(q,!1),$async$bzJ)
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
return A.i($async$bzJ,v)},
hwk(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
fYk(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cD(w,new C.cwG(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cwH(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lk(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
i13(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.a_b
case"female":case"f":return D.ajU
default:return D.y1}},
hmf(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h70(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i13(v==null?j:J.k(v))
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
i15(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.MY
case"viewer":return D.kv
default:return D.tT}},
i16(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gp(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bB_(d,e){return B.a.i(e.toLowerCase())===C.Gp(d,e)&&d.y!==D.kv},
u1(d,e){var w,v=d.y
if(v===D.kv)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gp(d,e))return!0
if(v===D.MY)return!0
v=d.e
return new A.M(v,A.h2W(),A.T(v).k("M<1,m>")).t(0,w)},
i0w(d){return J.dJ(d,new C.ftv()).gM(0)},
fRS(d){var w=0,v=A.j(x.y),u,t
var $async$fRS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AI(d),$async$fRS)
case 3:u=t.qW(f,new C.fRT(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRS,v)},
bAI(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AI(d),$async$bAI)
case 3:t=g
if(J.qW(t,new C.frG(e))){w=1
break}if(C.i0w(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAI,v)},
akp(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.da(n,x.f)
w=A.cD(w,new C.bNB(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bNC(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bND(),x.N)
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
return new C.kF(l,w,v,!s,t,m,r,q,p,C.i15(o==null?null:J.k(o)))},
hmo(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CR(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rg(d),$async$CR)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$CR)
case 4:t=f
w=5
return A.b(t.a5Q(0),$async$CR)
case 5:w=6
return A.b(C.fiP(t,l),$async$CR)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hi_(o)
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
case 12:n=C.hi_(m)
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
fiP(d,e){return C.hUo(d,e)},
hUo(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fiP=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AA(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aJ(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AA(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aJ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fYk(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AA(a9)+"_"+n))
i=C.hWV(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1R(h),$async$fiP)
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
case 8:J.Rr(q,new C.fiQ())
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
return A.i($async$fiP,v)},
bB9(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bB9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rg(d),$async$bB9)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CR(r),$async$bB9)
case 4:t=p.aW(g)
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
return A.i($async$bB9,v)},
hi_(d){var w,v,u,t
try{w=B.S.aJ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cD(v,new C.few(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fex(),u),u.k("J.E"))
B.d.aZ(v,new C.fey())
return v}catch(t){v=A.a([],x.D)
return v}},
oH(d,e){return C.iaB(d,e)},
iaB(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oH=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rg(b2),$async$oH)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oH)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AA(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aJ(0,p,null)),new C.fJQ(),a2).fP(0)
a2=J.b6(b3,new C.fJR(),a2).c0(0,new C.fJS())
n=A.dd(a2,a2.$ti.k("J.E"))
a2=o,a2=A.eb(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f3(n,m)?17:18
break
case 17:a5=C.AA(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8d(l),$async$oH)
case 19:t=21
a5=C.AA(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aJ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8d(a5==null?null:J.k(a5)),$async$oH)
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
return A.b(C.afJ(r,"ngmy_worksheet_item_v3_"+C.AA(a8)+"_"+m),$async$oH)
case 29:w=30
return A.b(C.afJ(r,"ngmy_worksheet_thumb_v3_"+C.AA(a8)+"_"+m),$async$oH)
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
return A.b(C.bzJ(h),$async$oH)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afK(r,"ngmy_worksheet_thumb_v3_"+C.AA(a8)+"_"+a4,f),$async$oH)
case 40:g=i.Sx(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afJ(r,"ngmy_worksheet_thumb_v3_"+C.AA(a8)+"_"+a4),$async$oH)
case 41:g=i.Sx(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afJ(r,"ngmy_worksheet_thumb_v3_"+C.AA(a8)+"_"+a4),$async$oH)
case 42:case 34:a4=i.a
w=43
return A.b(C.afK(r,"ngmy_worksheet_item_v3_"+C.AA(a8)+"_"+a4,B.S.ao(g.ah(),null)),$async$oH)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afK(r,"ngmy_worksheets_index_v3_"+C.AA(a8),B.S.ao(q,null)),$async$oH)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eQ(b3,new C.fJT(q))
a4=a3.$ti.k("cO<1,a5<m,@>>")
a7=A.C(new A.cO(a3,new C.fJU(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afK(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oH)
case 45:w=46
return A.b(J.hvr(r),$async$oH)
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
L6(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$L6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CR(d),$async$L6)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.fRR(e))
if(r===-1)s.cj(t,0,e)
else s.n(t,r,e)
u=C.oH(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$L6,v)},
bAW(d,e){var w=0,v=A.j(x.H),u
var $async$bAW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CR(d),$async$bAW)
case 2:u=g
J.nt(u,new C.ftX(e))
w=3
return A.b(C.oH(d,u),$async$bAW)
case 3:return A.h(null,v)}})
return A.i($async$bAW,v)},
Gr(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Gr)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aJ(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cD(j,new C.fwJ(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fwK(),s),s.k("J.E"))
B.d.aZ(r,new C.fwL())
k=r}}catch(h){}w=4
return A.b(C.ffg(d),$async$Gr)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hUL(k,p,d)
j=A.T(o)
s=j.k("M<1,a5<m,@>>")
s=A.C(new A.M(o,new C.fwM(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qs(d,o),$async$Gr)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fwN(d),j),j.k("J.E"))
if(m.length!==0)C.aOj(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gr,v)},
fJC(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fJC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qs(d,e),$async$fJC)
case 3:t=J.dJ(e,new C.fJD(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOj(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJC,v)},
a2r(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2r=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a2r)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aJ(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cD(m,new C.fRM(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fRN(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qk(o,new C.fRO(e))
if(B.a.i(e.x).length===0&&C.u1(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDB(e.y===D.kv?D.kv:D.tT,m)}else p=e
if(q===-1)J.pC(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.Qs(d,o),$async$a2r)
case 3:w=C.u1(p,d)?4:5
break
case 4:w=6
return A.b(C.aOi(C.Gp(p,d),p),$async$a2r)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2r,v)},
aOu(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gr(d),$async$aOu)
case 2:u=g
t=J.cF(u)
s=A.rh(t.eQ(u,new C.ftE(e)))
t.bq(u,new C.ftF(e))
w=3
return A.b(C.Qs(d,u),$async$aOu)
case 3:w=s!=null&&C.bB_(s,d)?4:5
break
case 4:w=6
return A.b(C.feA(e),$async$aOu)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOu,v)},
ahx(d){var w=d.f,v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fRY(),v),v.k("J.E"))
return w},
h0u(d,e){var w,v=d.f,u=A.rh(new A.a_(v,new C.fta(e),A.T(v).k("a_<1>")))
v=C.ahx(d)
w=A.T(v).k("a_<1>")
v=A.C(new A.a_(v,new C.ftb(e,u),w),w.k("J.E"))
B.d.aZ(v,new C.ftc())
return v},
i19(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hqv(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h0u(d,u),new C.fRt(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i2G(d,e){var w
if(e==null||e.length===0)return 1
w=C.h0u(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fxv(),A.T(w).k("M<1,G>")).ff(0,B.Am)+1},
iau(d){var w,v=C.ahx(d)
if(v.length===0)return null
w=new A.a_(v,new C.fJw(),A.T(v).k("a_<1>"))
if(!w.gam(0))return w.gI(0)
return B.d.gI(v)},
i14(d){return A.F(["id",d.a,"name",d.b,"gender",C.hmf(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i2B(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
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
n=n!==D.y1?n:q.c
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
d=q.aDw(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cJx(a1,w,a3.d,a2.y,s,a0,v)},
AI(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$AI)
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
p=A.cD(p,new C.fwG(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fwH(),s),s.k("J.E"))
B.d.aZ(p,new C.fwI())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AI,v)},
ahi(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahi=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tT:D.kv
a7=C.Gp(b2,b3)
w=2
return A.b(C.AI(b1),$async$ahi)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fJr(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAI(b1,b2),$async$ahi)
case 5:case 4:if(b0===-1){u=b2.aDB(a6,a7)
a9.cj(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
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
i=i!==D.y1?i:l.c
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
s.n(0,m,l.aDw(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tT:D.kv
u=t.yA(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qs(b1,a8),$async$ahi)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOi(B.a.i(b3.toLowerCase()),u),$async$ahi)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahi,v)},
hin(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("M<1,a5<m,@>>"),k=A.C(new A.M(m,C.hpG(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hio(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("M<1,a5<m,@>>")
u=A.C(new A.M(u,C.hpG(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hSn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akp(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h2W(),A.T(j).k("M<1,m>")).c0(0,new C.ff3())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tT
else s=B.d.t(t,u)?D.MY:D.kv
return w.aDB(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akp(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cD(h,new C.ff4(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.ff5(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.ff6(),x.N).c0(0,new C.ff7())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tT
else s=B.d.t(t,u)?D.MY:D.kv
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
return new C.kF(h,r,p,!m,t,o,l,j,v,s)},
ffg(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ffg=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.ffk()
h=x.N
g=x.z
w=7
return A.b(A.iO(A.a([A.lq("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.lq("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.lq("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.U),$async$ffg)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h5(l,o)
J.h5(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.ffh(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.ffi(),l),l.k("J.E"))
B.d.aZ(l,new C.ffj())
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
return A.i($async$ffg,v)},
hUL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dz(e,new C.fju(),v).c0(0,new C.fjv())
t=A.dd(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gp(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kv){m=q.e
m=!new A.M(m,A.h2W(),A.T(m).k("M<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i2B(l,v)
o=C.Gp(k,w)
p=v.d
s.n(0,u,o===w?k.bbP(p,D.tT):k.bbP(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aZ(j,new C.fjw())
return j},
Qs(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Qs)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fm9(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$Qs)
case 3:return A.h(null,v)}})
return A.i($async$Qs,v)},
aOi(d,e){return C.hZU(d,e)},
hZU(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOi=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lT("family_trees",A.a([C.hin(e,d)],p),null,B.cH),$async$aOi)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lT("family_trees",A.a([C.hio(e,d)],p),null,B.cH),$async$aOi)
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
return A.i($async$aOi,v)},
aOj(d,e){return C.hZV(d,e)},
hZV(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("M<1,a5<m,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fr_(d),n),m)
r=l
w=7
return A.b(A.lT("family_trees",r,null,B.cH),$async$aOj)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fr0(d),n),m)
p=k
w=8
return A.b(A.lT("family_trees",p,null,B.cH),$async$aOj)
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
return A.i($async$aOj,v)},
feA(d){return C.hRI(d)},
hRI(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$feA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QR("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$feA)
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
return A.i($async$feA,v)},
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
cwJ:function cwJ(){},
cwI:function cwI(){},
cwG:function cwG(){},
cwH:function cwH(){},
Hv:function Hv(d,e){this.a=d
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
ako:function ako(d,e){this.a=d
this.b=e},
ftv:function ftv(){},
fRT:function fRT(d){this.a=d},
frG:function frG(d){this.a=d},
kF:function kF(d,e,f,g,h,i,j,k,l,m){var _=this
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
bNF:function bNF(){},
bNE:function bNE(){},
bNB:function bNB(){},
bNC:function bNC(){},
bND:function bND(){},
fiQ:function fiQ(){},
few:function few(){},
fex:function fex(){},
fey:function fey(){},
fJQ:function fJQ(){},
fJR:function fJR(){},
fJS:function fJS(){},
fJT:function fJT(d){this.a=d},
fJU:function fJU(){},
fRR:function fRR(d){this.a=d},
ftX:function ftX(d){this.a=d},
fwJ:function fwJ(){},
fwK:function fwK(){},
fwL:function fwL(){},
fwM:function fwM(){},
fwN:function fwN(d){this.a=d},
fJD:function fJD(d){this.a=d},
fRM:function fRM(){},
fRN:function fRN(){},
fRO:function fRO(d){this.a=d},
ftE:function ftE(d){this.a=d},
ftF:function ftF(d){this.a=d},
fRY:function fRY(){},
fta:function fta(d){this.a=d},
ftb:function ftb(d,e){this.a=d
this.b=e},
ftc:function ftc(){},
fRt:function fRt(d){this.a=d},
fxv:function fxv(){},
fJw:function fJw(){},
fwG:function fwG(){},
fwH:function fwH(){},
fwI:function fwI(){},
fJr:function fJr(d){this.a=d},
ff3:function ff3(){},
ff4:function ff4(){},
ff5:function ff5(){},
ff6:function ff6(){},
ff7:function ff7(){},
ffk:function ffk(){},
ffl:function ffl(d){this.a=d},
ffh:function ffh(d){this.a=d},
ffi:function ffi(){},
ffj:function ffj(){},
fju:function fju(){},
fjv:function fjv(){},
fjw:function fjw(){},
fm9:function fm9(){},
fr_:function fr_(d){this.a=d},
fr0:function fr0(d){this.a=d},
cwK:function cwK(d,e){this.a=d
this.b=e},
cwL:function cwL(d,e){this.a=d
this.b=e},
aGt:function aGt(d,e,f){this.a=d
this.b=e
this.c=f},
b89:function b89(){this.b=this.a=0},
b88:function b88(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bvh:function bvh(){},
wN(d,e){var w,v
if(d==null)return""
w=d.bV()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gci()
if(!e)return v
return v+" "+B.a.aV(B.o.u(w.gnd()),2,"0")+":"+B.a.aV(B.o.u(w.gGc()),2,"0")},
hIw(){var w,v=$.py(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.h2(u)},
arY(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arY)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$arY)
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
return A.i($async$arY,v)},
arZ(d){return C.hIx(d)},
hIx(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arZ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arZ)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arZ)
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
return A.i($async$arZ,v)},
as0(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$as0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$as0)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hIw()
w=4
return A.b(C.arY(),$async$as0)
case 4:r=h
q=B.a.i(e)
p=B.dK.aK(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cV.gcB().aK(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.arZ(r),$async$as0)
case 5:u=new A.a_V("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as0,v)},
as_(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$as_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$as_)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arY(),$async$as_)
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
try{s=B.cg.cA(0,B.cI.aK(t))}catch(h){r=A.ab(h)
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
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
p.n(q,i,m)}w=5
return A.b(C.arZ(q),$async$as_)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as_,v)},
hcQ(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cG.aw(999999)},
hIy(d){var w,v,u,t,s,r,q
try{w=A.ag8(d)
if(w==null)return d
v=w
if(J.Lc(v)>960||J.Lb(v)>960){s=v
r=J.Lc(v)>=J.Lb(v)?960:null
v=A.ag7(s,J.Lb(v)>J.Lc(v)?960:null,B.Oj,r)}s=v
u=A.alN(82).SU(s,B.yL)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
cg4(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cg4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hIy(e)
$.cg0.n(0,s,t)
u=C.bCJ(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cg4,v)},
b1R(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1R=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d0(l,"data:image")){u=null
w=1
break}t=4
r=J.f3(l,",")?B.d.gal(J.ls(l,",")):l
q=B.cI.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hcQ()
w=7
return A.b(C.cg4(p,q),$async$b1R)
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
return A.i($async$b1R,v)},
cg1(d){var w=0,v=A.j(x.T),u,t,s
var $async$cg1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cg3(s),$async$cg1)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cV.gcB().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cg1,v)},
a8d(d){var w=0,v=A.j(x.H),u,t
var $async$a8d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hpz(d)
if(t==null){w=1
break}$.cg0.W(0,t)
w=3
return A.b(C.bCI(t),$async$a8d)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8d,v)},
bCJ(d,e){return C.i8H(d,e)},
i8H(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCJ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNd
w=7
return A.b(n==null?$.aNd=I.h_t():n,$async$bCJ)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mI(r,"thumbs","readwrite")
B.iM.mm(J.mG(p,"thumbs"),q,l)
w=8
return A.b(J.pB(p),$async$bCJ)
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
return A.i($async$bCJ,v)},
bCI(d){return C.i8F(d)},
i8F(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCI=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNd
w=7
return A.b(o==null?$.aNd=I.h_t():o,$async$bCI)
case 7:r=f
q=J.mI(r,"thumbs","readwrite")
B.iM.FI(J.mG(q,"thumbs"),m)
w=8
return A.b(J.pB(q),$async$bCI)
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
return A.i($async$bCI,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[237]
S=c[152]
A2=c[221]
G=c[202]
F=c[31]
E=c[212]
A3=c[113]
A4=c[223]
A5=c[109]
A6=c[190]
T=c[99]
U=c[110]
A7=c[220]
A8=c[37]
M=c[219]
A9=c[80]
H=c[88]
Aa=c[159]
Ab=c[118]
V=c[162]
W=c[233]
X=c[191]
Ac=c[182]
Ad=c[194]
Y=c[189]
Ae=c[65]
Af=c[238]
Ag=c[71]
Z=c[206]
Ah=c[30]
Ai=c[111]
K=c[184]
Aj=c[195]
A_=c[236]
A0=c[229]
O=c[102]
P=c[98]
L=c[137]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[232]
Ak=c[70]
Al=c[200]
R=c[235]
Am=c[234]
An=c[56]
I=c[54]
C.anW.prototype={}
C.aYc.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bg9(),f=h.x!=null&&h.z0(i).length===0
if(h.x!=null)w=f?B.aZ:B.bz
else w=h.gTw()?B.bz:B.dU
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.I(D.bgo,B.q,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.eQL,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h7,i,i,i),B.R,D.fjE,B.au,A.d(C.wN(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ffz,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b0x,i,i,i,i,B.Za,i,i,i)
q=A.n(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h1v(h.d)
o=A.p(B.A,C.aYb(A.fzQ(h.e,n),30),B.f,i,i,new A.o(B.lL,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.faX,B.L,i,i)
m=A.n(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bC,D.fjW,B.ac,A.p(i,A.x(A.a([D.fzo,B.bC,A.d(A.AK(h.c),i,i,i,i,i,i,D.f5V,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fa,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.ai_,i,i,i)
p=A.n(16)
m=A.I(B.aL,B.q,1)
l=j.aQk("Original due",C.wN(h.r,!1))
n=j.aQk("Current due",C.wN(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.O,n,B.R,A.p(i,A.d(h.gaKs(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.B9,i,i,1/0),B.R,j.ceZ(),B.O,j.c2s(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fkS,B.au,A.d(q,i,i,i,i,i,i,D.fae,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaFd()){q=A.n(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fAH,B.O,A.bw(A.n(12),A.en(new A.a7(1/0,88,A.b3(i,i,i,new A.VK(h.ax,B.M,D.eUY,!0,3.5,i),B.aw),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fq,i,i,i)],s))}p.push(B.aB)
p.push(D.fsS)
return A.p(i,A.x(A.a([r,new A.D(B.ai2,A.x(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQk(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a8v,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f6V,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ceZ(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a93(B.dU,u,"Not paid yet")
w=t.z0(null).length
v=w===0?B.aZ:B.bz
return this.a93(v,u,C.wN(t.x,!0))},
c2s(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a93(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a93(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a8v,u,u,u)
v=A.T(d).k("M<1,hd>")
v=A.C(new A.M(d,new C.c1S(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bV(B.bA,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a93(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a8v,w,w,w),1),new A.dq(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.bai.prototype={
a4(d,e){new A.VK(this.b,B.M,e,!0,3.5,null).a4(d,e)},
au(d){return d.b!==this.b}}
C.ao2.prototype={
S(){return new C.aCk(A.a([],x.bp))},
ge1(){return this.c}}
C.aCk.prototype={
a_(){this.a1()
this.IB()},
IB(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1H(t.a.c),$async$IB)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dGb(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IB,v)},
aSi(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bs:B.bm).j(0.22)
w=A.n(10)
return A.bs(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bl,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.bs:B.bm).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.n(10),D.aZa),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aSh(d){return this.aSi(d,null)},
Pc(d){return this.ciy(d)},
ciy(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GI:B.eJ
w=7
return A.b(new A.i1().C3(72,900,900,n),$async$Pc)
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
o=A.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.u(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
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
b00(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.n(10),n=A.I((q?B.bs:B.bm).j(0.18),B.q,1)
if(d)q=B.cS
else q=s.a.d.a?B.bs:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.ax,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cS
else u=s.a.d.a?B.bs:B.bm
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fy(r,r,r,r,r,r,r,r,r,r,r,B.cS,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cC,s.a.d.a?B.bs:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jH,D.bst,r,r,r)},
D2(d){return this.bzt(d)},
bzs(){return this.D2(null)},
bzt(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
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
m=A.c1(a4.gci(),a4.gce(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gci(),a4.gce(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h1v(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wg?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hX(B.w.j(0.55),!0,"Dismiss",a4,new C.dFV(),new C.dFW(a2,t,a5,r,new C.dFX(a2,t),o,n,j),B.eH,!0,x.y),$async$D2)
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
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.f0j)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.eZZ)
w=1
break}a1=A.fzQ(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wg?"male":"female"
w=7
return A.b(A.ahw(a3,A.h9z(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D2)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wg?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gci(),a3.gce(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gci(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cLH(a2.a)
w=8
return A.b(A.ahw(t.a.c,a5),$async$D2)
case 8:case 5:w=9
return A.b(t.IB(),$async$D2)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D2,v)},
aSW(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cS.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cS
else s=(this.a.d.a?B.bs:B.bm).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aYb(d,18)
if(g)q=B.cS
else q=this.a.d.a?B.aQ:B.ax
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
RT(d){return this.cAf(d)},
cAf(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hX(B.w.j(0.55),!0,"Dismiss",s,new C.dGe(),new C.dGf(t,d),B.hz,!0,x.y),$async$RT)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahw(t.a.c,d),$async$RT)
case 7:w=8
return A.b(t.IB(),$async$RT)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RT,v)},
NR(d,e){return this.bKj(0,e)},
bKj(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l5(s,"Cancel","Delete",e.b+" \xb7 "+A.AK(e.c)+" will be removed from this device.","Delete this debt?"),$async$NR)
case 3:if(!g){w=1
break}w=4
return A.b(C.ftL(t.a.c,e.a),$async$NR)
case 4:w=5
return A.b(t.IB(),$async$NR)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
aeB(d){return this.ccq(d)},
ccq(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bS(B.K,null,new C.dG8(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeB)
case 2:return A.h(null,v)}})
return A.i($async$aeB,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ecr
w=J.dJ(m.d,new C.dGg())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dGh())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cJ(v,0,new C.dGi())
w=A.n(18)
s=m.a.d.a
r=s?D.cqs:D.ayn
q=A.I(s?B.cS.j(0.35):B.cS.j(0.18),B.q,1)
s=A.p(l,D.bSG,B.f,l,l,new A.o(B.cS.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.n(12),A.aL(!1,A.n(12),!0,D.ebQ,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dGj(m),l,l,l,l,l,l,l),B.f,B.cS,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cws("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AK(t)
r=A.a([A.p(l,A.x(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b6a(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.az,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ahX,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e0:B.c
q=A.n(18)
o=A.I((w?B.bs:B.bm).j(0.12),B.q,1)
n=A.p(l,D.bNC,B.f,l,l,new A.o(B.cS.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.buT,l,l,1/0))}else{w=m.gchR()
s=A.C(new A.M(v,w,A.T(v).k("M<1,t>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bwz,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.T(u).k("M<1,t>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ai,l,B.e,B.j,0,B.p)},
b6a(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.I((v.a.d.a?B.bs:B.bm).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cS
else w=v.a.d.a?B.aQ:B.ax
return A.p(u,A.x(A.a([q,B.bC,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ej,u,u,u)},
cws(d,e){return this.b6a(!1,d,e)},
chS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z0(j).length,h=d.bfm()
if(d.x!=null){w=d.z0(j).length
v=w===0?B.cS:B.bz}else if(d.gTw())v=B.bz
else{if(h)w=B.cS
else w=k.a.d.a?B.bs:B.bm
v=w}if(d.x!=null){w=d.z0(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wN(u,!1)}else{u.toString
t="Paid "+C.wN(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wN(w,!1)+" \xb7 "+i+" missed":"Due "+C.wN(w,!1)}w=k.a.d.a?B.e0:B.c
u=A.n(18)
if(d.gTw()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bs:B.bm).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bn:B.lL
o=A.I(d.gTw()&&d.x==null?B.bz.j(0.45):B.cS.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h1v(d.d)
o=A.p(B.A,A.de(C.aYb(A.fzQ(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.ax
m=x.p
n=A.a([new A.dq(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFd())B.d.v(n,A.a([B.ee,A.X(B.No,B.cS.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AK(d.c)
l=k.a.d.a?B.aQ:B.ax
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(W.ahI,A.B(A.a([o,B.be,p,B.ab,A.x(A.a([n,B.bC,A.X(B.ey,(k.a.d.a?B.bs:B.bm).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dGa(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uh.prototype={}
C.akn.prototype={
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
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aC(a0,A.p(a0,A.X(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.ij,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.auL,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FI,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eP(m,A.B(l,B.m,a0,B.e,B.N,0,a0,a0),B.f,B.dZ)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.brG,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.eVJ)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vx,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.ll,A.x(a2,B.m,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hn,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.az,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bsT,a0,a0,a0,a0)}}
C.aTY.prototype={
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
if(p.z)o.push(new A.D(B.vu,n,q))
return new A.D(B.da,A.x(o,B.m,q,B.e,B.N,0,B.p),q)}}
C.Sw.prototype={
S(){return new C.bdV()}}
C.bdV.prototype={
gbYs(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.ecm,D.ecs],l)
for(w=0;w<8;++w){v=D.a28[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gu:B.BT
q=t===s
r=A.X(r,q?B.eC:B.bX,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bh,new A.y(v.c,n,A1.Dt,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eC,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aC(n,new A.D(B.eD,A.x(A.a([new A.D(B.mu,new A.cl(B.aP,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DT(!0,new C.akn(v,q.d,q.e,new C.d5Z(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6_(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.btb,A.bG(D.fG3,new C.d60(o,d),A.bn(B.b6,n,n,n,n,B.ok,n,n,new A.b7(A.n(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.bxq,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.ne.prototype={
ah(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bc0(d,e,f){return new C.ne(this.a,e,d,f)}}
C.Hu.prototype={
wi(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hu(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDq(d){var w=null
return this.wi(w,w,w,w,w,d,w,w,w,w,w,w)},
cHu(d){var w=null
return this.wi(w,w,w,w,d,w,w,w,w,w,w,w)},
bbZ(d,e,f){var w=null
return this.wi(d,w,w,w,w,w,w,w,e,w,f,w)},
cI8(d){var w=null
return this.wi(w,w,w,w,w,w,d,w,w,w,w,w)},
cIh(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,d,w,w)},
cHs(d){var w=null
return this.wi(w,w,w,d,w,w,w,w,w,w,w,w)},
cIj(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,w,w,d)},
cHp(d){var w=null
return this.wi(w,w,d,w,w,w,w,w,w,w,w,w)},
cHk(d){var w=null
return this.wi(w,d,w,w,w,w,w,w,w,w,w,w)},
FA(d){var w=null
return this.wi(w,w,w,w,w,w,w,d,w,w,w,w)},
cIr(d,e,f,g,h,i,j,k,l,m,n){return this.wi(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cF6(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bNA(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cQ(d.h(0,n))).length!==0?B.a.i(A.cQ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cQ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CB.gee(D.CB))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3L)
q=l.$2("frame",D.a38)
l=l.$2("texture",D.a33)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cQ(d.h(0,"author"))):o
return this.cIr(p,u,t,q,r,A.qQ(d.h(0,"ribbon"))?A.G0(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Z5.prototype={
S(){return new C.azo(A.a([],x.I),D.MX)},
ge1(){return this.c}}
C.azo.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zA(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.kZ()
w=v.a
C.bB6(w.c,w.d).bA(new C.d6F(v),x.fL)},
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
kZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KH(s.c,s.d),$async$kZ)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d6t(t,r))
t.avd()
case 1:return A.h(u,v)}})
return A.i($async$kZ,v)},
garP(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avd(){var w,v,u=this.garP(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
caR(d){this.m(new C.d6q(this,d))
this.avd()},
Nc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Nc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.ne(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQ6(r.c,r.d,s),$async$Nc)
case 3:w=4
return A.b(t.kZ(),$async$Nc)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qk(t.d,new C.d61(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d62(t,p))
t.avd()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B5(p+1,B.cu,B.kT),$async$Nc)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Nc,v)},
AL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.garP()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQ6(o.c,o.d,new C.ne(s,r,q,new A.S(p,0,!1))),$async$AL)
case 3:w=4
return A.b(t.kZ(),$async$AL)
case 4:if(t.c==null){w=1
break}t.m(new C.d6u(t))
case 1:return A.h(u,v)}})
return A.i($async$AL,v)},
NS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garP()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6a(r),s,null,!0,!0,x.y),$async$NS)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAS(s.c,s.d,r.a),$async$NS)
case 4:t.m(new C.d6b(t))
w=5
return A.b(t.kZ(),$async$NS)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Tz(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$NS,v)},
yk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AL(),$async$yk)
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
return A.b(C.QJ(s,r.r,o,p,q),$async$yk)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hq3(s,r.x,r.r),$async$yk)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KH(s.c,s.d),$async$yk)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.ne(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AU(r.c,r.d,l),$async$yk)
case 11:w=12
return A.b(t.kZ(),$async$yk)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yk,v)},
a0b(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AL(),$async$a0b)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyi(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yU,new C.d6r(t),new C.d6s())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mt("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gR(o)
p.push(new F.mt(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h37(o,new F.rl(s,r,"",p,new F.uz(q.d,null,null,null,null,"","","")),null),$async$a0b)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0b,v)},
NA(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AL(),$async$NA)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bS(D.adi,null,new C.d66(t),s,!0,!0,!0,P.a6H,!1,!1,x.N),$async$NA)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cHu(r)
t.m(new C.d67(t,q))
s=t.a
w=7
return A.b(C.Rj(s.c,s.d,q),$async$NA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NA,v)},
WJ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(D.adi,null,new C.d6c(t),r,!0,!0,!0,P.a6H,!1,!1,x.e),$async$WJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d6d(t,s))
r=t.a
w=4
return A.b(C.Rj(r.c,r.d,s),$async$WJ)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B5(0,B.dV,B.o0)
case 1:return A.h(u,v)}})
return A.i($async$WJ,v)},
bPC(d){var w=d.bV(),v=B.a.aV(B.o.u(w.gce()),2,"0"),u=B.a.aV(B.o.u(w.gcu()),2,"0")
return""+w.gci()+"-"+v+"-"+u},
gyi(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bXH()
if(r.e)w=D.ac7
else if(J.cn(r.d)){w=r.y
v=r.gyi(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f5m,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.aiY,new C.Yo(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ko.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aC(q,A.p(q,D.eQy,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dR.j(0.45),B.J,18)],x.V),E.w5,B.n),q,q,q,q,B.Zk,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcEe(),q,q,q,q,q,q,!1,B.a7))
w.push(B.R)
w.push(A.hn(D.bJQ,D.fFw,r.gaMb(),q))
B.d.v(u,w)}w=A.av(A.cd(A.x(u,B.m,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.ex,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ko.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.Ak
u=A.x(A.a([new A.D(D.buc,w,q),A.E(A.IP(v,new C.d6D(r),J.ad(r.d)+1,q,r.gcaQ(),u,B.aP),1),r.bCm()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c7(q,D.aeH,new A.an(B.W,q,B.b1,B.r,A.a([D.aLz,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bXH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JO(B.dX,"AI",h.gbAf(),!0))
if(h.a.f)f.push(new C.JO(B.nl,"Cover",h.gbKT(),!1))
if(h.a.f)f.push(new C.JO(B.yv,"Header",h.gbFR(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JO(B.u7,"Print",h.gcjS(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.ho:B.jq
t=v?"Save":"Edit"
f.push(new C.JO(u,t,v?h.gcqa():new C.d6n(h),!1))}if(h.a.f)f.push(new C.JO(B.hB,"Add page",h.gaMb(),!1))
v=C.hme(h.y.Q)
u=h.gyi(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dt0
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jX.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.ko,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ko.j(0.85)
p.push(new A.bB(1,B.bh,A.aC(B.c7,A.x(A.a([k,B.bC,new A.y(l.b,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.akn(v,u,t+" \xb7 "+s+" "+r,new C.d6o(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AL(),$async$zN)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a1W(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d63(t,p),s,null,!0,!0,x.N),$async$zN)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yk(),$async$zN)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DE(),$async$zN)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fd("Swahili (Kiswahili)",!0),$async$zN)
case 18:w=16
break
case 17:w=19
return A.b(t.cAU(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zN)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
YD(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.I(E.jX.j(0.3),B.q,1),r=x.p
return new A.D(B.cw,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.w5,B.a5),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A9.TP,w,w,w),A.d(g,w,w,w,w,w,w,A3.TK,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d6p(d,h),w,w,w,w,w,w,w),w)},
DE(){return this.bP6()},
bP6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DE=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6g(r),a7,null,!0,!0,x.ei),$async$DE)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d6h(o),a7,null,!0,!0,x.H).fj(new C.d6i(a6))
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
for(a1=0;a1<8;++a1){i=D.yU[a1]
J.ci(j,i.a)}w=8
return A.b(C.agG(a0,a7,new C.d6j(o),d,l,e,j),$async$DE)
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
if(l!=null&&a6.a)A.a6(l,!0).eF()
l=o
l.si1($.aw())
J.aQx(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
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
a7=j.bc0(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AU(j.c,j.d,l),$async$DE)
case 11:w=12
return A.b(r.kZ(),$async$DE)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yU[a1].a)
a5=l.cF6(j,12,a7)
l=r.a
w=15
return A.b(C.Rj(l.c,l.d,a5),$async$DE)
case 15:if(r.c!=null)r.m(new C.d6k(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B5(0,B.dV,B.o0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cr9("Undo",new C.d6l(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.eg,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DE,v)},
Fd(d,e){return this.cAV(d,e)},
cAU(d){return this.Fd(d,!1)},
cAV(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fd=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d6w(a0),k,null,!0,!0,x.H).fj(new C.d6x(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ci(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a28(m,new C.d6y(a0)),$async$Fd)
case 10:w=8
break
case 9:w=11
return A.b(C.bCA(new C.d6z(a0),m,a2),$async$Fd)
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
if(o!=null&&f.a)A.a6(o,!0).eF()
o=a0
o.si1($.aw())
J.aQx(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bc0(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AU(k.c,k.d,o),$async$Fd)
case 12:w=13
return A.b(r.kZ(),$async$Fd)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cr9("Undo",new C.d6A(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fd,v)},
bCm(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d64(v):u
r=A.aH(u,u,u,u,A.X(D.bFv,s?D.ko:B.b_,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hn(A.X(B.vK,B.F3,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.F3,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbKs(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ko.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d65(v):u
return A.bm(!0,new A.D(D.bu0,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.ey,t<J.ad(v.d)?D.ko:B.b_,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Z9.prototype={
S(){return new C.bef(new A.as(B.as,$.aw()))}}
C.bef.prototype={
ga1j(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbNQ(){var w,v=this.ga1j()
A:{if("cover"===v){w=D.cWO
break A}if("book"===v){w=D.cSA
break A}w=D.dl8
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.jX.j(0.5),n=x.p,m=A.B(A.a([D.dt1,B.at,D.bzr,A.aH(q,q,q,q,B.ls,q,q,q,new C.d8p(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j9(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d8q(r),r.ga1j()==="page",q,q,q,q))
if(r.a.d)l.push(A.j9(q,q,q,D.fAd,q,new C.d8r(r),r.ga1j()==="book",q,q,q,q))
l.push(A.j9(q,q,q,D.fnt,q,new C.d8s(r),r.ga1j()==="cover",q,q,q,q))
l=A.bV(B.bA,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.n(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kI,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dp,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbNQ(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mJ(q,B.c.j(0.08),new A.y(s,q,B.Jd,q,q,q,q,q,q,q,q,q),B.hG,new C.d8t(r,s),q,q,q,q))}return A.eL(q,E.AQ,A.cd(A.x(A.a([m,B.R,D.fDr,B.am,l,B.ac,k,B.O,A.bV(B.bA,w,B.br,6,6),B.aB,A.dn(D.bJN,D.fEe,new C.d8u(r,d),A.bn(B.b6,q,q,q,q,B.ok,q,q,new A.b7(A.n(16),B.Y),q,q,q)),B.au,D.fyu],n),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.fD,q,q,B.ah),q,q,q,D.aiG,B.d1,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.Z7.prototype={
S(){return new C.azp(A.a([],x.Y))},
ge1(){return this.c}}
C.aet.prototype={}
C.azp.prototype={
a_(){this.a1()
this.kZ()},
kZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QN(p.c,p.d),$async$kZ)
case 3:o=e
n=A.a([],x.Y)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bB6(r.c,q),$async$kZ)
case 6:j=e
i=J
w=7
return A.b(C.KH(t.a.c,q),$async$kZ)
case 7:m.push(new l.aet(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d6U(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kZ,v)},
b7n(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PT(d,e){return this.cco(0,e)},
cco(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cm(A.e9(new C.d6T(u,e),!0,null,x.y)),$async$PT)
case 2:t=g
w=3
return A.b(u.kZ(),$async$PT)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aP9)
return A.h(null,v)}})
return A.i($async$PT,v)},
Fg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aP5)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ag0(s.c,s.d),$async$Fg)
case 5:q=e
w=6
return A.b(t.kZ(),$async$Fg)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PT(0,B.d.h7(t.d,new C.d6Y(q))),$async$Fg)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QJ(p,s.f,r,n,o),$async$Fg)
case 10:m=e
w=11
return A.b(t.kZ(),$async$Fg)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aP9)
case 1:return A.h(u,v)}})
return A.i($async$Fg,v)},
Pn(d,e){return this.cnR(0,e)},
cnR(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6X(t,e),s,null,!0,!0,x.y),$async$Pn)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2l(s.c,s.d,e.a),$async$Pn)
case 4:w=5
return A.b(t.kZ(),$async$Pn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pn,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bCp(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.I(E.jX.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aC(n,new A.fK(0.7142857142857143,A.p(n,A.x(A.a([D.dt2,B.ac,D.ebv,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ko.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcEa(),n,n,n,n,n,n,!1,B.a7))}w=A.n(22)
v=A.I(E.jX.j(0.85),B.q,1.6)
s=A.aC(n,A.p(n,D.bRu,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jX.j(0.6),B.q,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6Z(d),n,n,n,n,n,n,!1,B.a7)
r=A.n(14)
q=B.w.j(0.3)
p=A.I(E.jX.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.be,D.bzP,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f4r,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h7,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bXk,B.n),n,n,n,Am.Mr,D.bs8,n,n,n)
if(o.e)k=D.ac7
else k=k.length===0?D.b5z:A.cq(new C.d7_(k))
return A.c7(n,D.aeH,new A.an(B.W,n,B.b1,B.r,A.a([D.aLz,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bCp(d){var w,v,u=this,t=null,s=u.b7n(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.eP(B.A,new A.a7(300,420,new C.Yo(d.b,s,r,t),t),B.f,B.dv),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aC(t,A.p(t,D.bQO,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b_,B.q,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6R(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f41,t,t,t)
v=r===1?"page":"pages"
return A.aC(t,A.x(A.a([new A.fK(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ko.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6S(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JO.prototype={}
C.Yo.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yU,new C.cFu(m),new C.cFv()),j=m.c,i=D.CB.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m_:B.b9
v=new C.cFw(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e8P,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bbv(j.x,h,l),B.aw),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aiZ,8,0.85,2.2),v.$4(D.bwS,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aiZ,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bwO,A.b3(l,l,l,new C.bbm(h,l),B.aw),l),0,0,0))
r=A.X(D.axq[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.auL,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.bxi,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGo(l),D.eUR),l,l,l,46,0,l))
return A.p(l,A.bw(D.aaN,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aaN,i,new A.a8(B.az,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbv.prototype={
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
C.bbm.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bS
for(w=e.a,v=e.b,v=[D.eLz,new A.cA([w,0,-1,1]),new A.cA([0,v,1,-1]),new A.cA([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
C.ui.prototype={}
C.YG.prototype={
S(){return new C.bbt()}}
C.bbt.prototype={
go4(){var w=this.d
return w===$?this.d=this.a.c:w},
gyi(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b5,B.aO),$.aw())}return v},
gaAC(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b5,B.aO),$.aw())}return v},
gaqm(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b5,B.aO),$.aw())}return v},
q(){var w=this,v=w.gyi(0),u=v.T$=$.aw()
v.P$=0
v=w.gaAC()
v.T$=u
v.P$=0
v=w.gaqm()
v.T$=u
v.P$=0
w.a2()},
aqZ(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j9(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cYW(this,f,u),e===u,s,s,s,s))}return A.bV(B.bA,r,B.br,6,8)},
awF(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.n(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kH,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go4(),a0=f.gyi(0),a1=a0.a.a,a2=f.gaAC(),a3=a2.a.a,a4=f.gaqm(),a5=d.bbZ(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.eP(B.A,new A.a7(270,370,new C.Yo(a5,d,f.a.e,e),e),B.f,B.dv),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awF("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZk(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awF("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZl(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yU[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b_
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.az,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aC(e,A.x(A.a([p,B.cU,new A.y(t.b,e,new A.H(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZm(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bV(B.bA,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eC:B.K,2,B.q,-1)
q.push(A.aC(e,A.p(e,A.X(D.axq[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZn(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bV(B.bA,q,B.br,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awF("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZo(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mQ,e,e,e)
m=A.a([],w)
for(l=D.CB.gdL(D.CB),l=l.gae(l);l.C();){k=l.gR(l)
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
m.push(A.aC(e,A.x(A.a([j,B.bC,new A.y(i,e,new A.H(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZp(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bV(B.bA,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mQ,e,e,e)
k=f.go4()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fxY,B.ac,d,B.aR,a0,B.R,a2,B.aB,D.fE0,B.O,v,B.aB,D.fy6,B.O,q,B.aB,a4,B.aB,p,B.O,m,B.aB,l,A.l0(e,9,""+B.k.V(f.go4().f),36,18,new C.cZq(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.aqZ(D.a3L,f.go4().r,new C.cZr(f),D.don),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.aqZ(D.a38,f.go4().w,new C.cZs(f),D.dos),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.aqZ(D.a33,f.go4().x,new C.cZu(f),D.dpZ),B.am,A.iH(e,B.b6,e,B.af,e,new C.cZv(f),e,e,e,D.fsp,f.go4().z),B.by,A.bG(D.fwN,new C.cZw(f,a6),A.bn(B.b6,e,e,e,e,B.ok,e,e,new A.b7(A.n(16),B.Y),e,e,e))],w),e,R.aiw,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGo.prototype={
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
u.saq(D.bY_.av(0,new A.a9(0,0,0+w,0+v)))
d.aR(t,u)},
au(d){return!1}}
C.bgJ.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.saq(D.bX0.av(0,new A.a9(0,0,a3,a4)))
a5.b0(new A.a9(0,0,a3,a4),w)
v=B.k.dk(a2/112)
u=new A.eE()
u.dt(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cWN[u.aw(9)]
j=u.aw(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bx(i,B.hd)
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
p.saq(D.bWn.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.ju
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b91.j(0.72).gp(0)
a5.b0(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.saq(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bg_.j(0.22),B.K],t),a0,a0).av(0,A.bU(new A.v(w,a2),a1)))
a5.af(new A.v(w,a2),a1,a4)},
au(d){return!1}}
C.b9H.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kR(new A.o(A.aq(D.ko,D.bks,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.Kp,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aHd,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jX.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qf,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aYU,u,D.bXY,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGo(o),D.eUM),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTY(p.y,r,G.iC,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iC.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fhR,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iC.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iC.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f8Z,!0,B.a4,B.zH,B.an,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fhJ,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iC.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.ES.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.ES.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.ES.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iC.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XF(A.d3(A.a([A.d3(o,o,o,o,o,o,o,o,o,D.fc5,B.a.ap(k,0,1)),A.d3(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iC.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.x(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i3,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iC.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.Kp,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.bwk,A.x(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Kp,v,D.bYu,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.apa.prototype={
S(){return new C.aCV(A.a([],x._))},
bs(){return this.r.$0()},
pR(){return this.w.$0()},
ge1(){return this.c}}
C.aCV.prototype={
a_(){var w,v
this.a1()
this.vP()
w=this.a
v=w.c
if(v.length!==0)C.a6W(v,w.e,w.d.w)},
vE(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h3a(r,t.e,!1,s.w,new C.dUa(u),null,s),$async$vE)
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
return A.b(C.h3a(r,t.e,!0,s.w,new C.dU9(u),null,s),$async$a_l)
case 2:w=3
return A.b(u.vP(),$async$a_l)
case 3:return A.h(null,v)}})
return A.i($async$a_l,v)},
vP(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AI(q.a.c),$async$vP)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.dUc(q,p))
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
return A.b(C.Gr(q.a.c).d7(0,B.pS),$async$vP)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dUd(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dUe(q))
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
o.K(s).f.U(D.eYo)
w=3
return A.b(C.Gr(t.a.c),$async$Om)
case 3:r=e
w=4
return A.b(C.fJC(t.a.c,r),$async$Om)
case 4:q=e
w=5
return A.b(C.Gr(t.a.c),$async$Om)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dU8(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dA:B.cT,null,B.r,null,s,null,B.mq,null,null,null,null,null,null,null,null,null,null))
t.a.pR()
case 1:return A.h(u,v)}})
return A.i($async$Om,v)},
HP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iaM(l),$async$HP)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hFh(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZC(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HP)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hmo(r)
o=Date.now()
n=t.a.c
m=new C.kF(l,r.toUpperCase(),p,!0,B.T,D.Co,new A.S(o,0,!1),0,n,D.tT)
w=5
return A.b(C.a2r(n,m),$async$HP)
case 5:w=6
return A.b(t.vP(),$async$HP)
case 6:t.a.bs()
t.a.pR()
if(t.c==null){w=1
break}t.Eq(m)
case 1:return A.h(u,v)}})
return A.i($async$HP,v)},
Eq(d){return this.ceq(d)},
ceq(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Eq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AI(u.a.c),$async$Eq)
case 2:n=l.rh(k.dJ(f,new C.dUb(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.ap4(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Eq)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2r(u.a.c,o),$async$Eq)
case 6:case 5:w=7
return A.b(u.vP(),$async$Eq)
case 7:u.a.pR()
return A.h(null,v)}})
return A.i($async$Eq,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tR(p)
if(r.e)return A.av(A.mK(q,p?B.bs:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e0:B.c
v=A.n(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bKS,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcdu(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Ft(A.p(q,A.x(A.a([u,B.aR,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fFh,r.gaQf(),A.bn(B.bT,q,q,q,q,q,Al.Zn,q,new A.b7(A.n(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bwg,q,q,1/0),15,B.af,1.05,D.a9t,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yC,B.aV,q,q,q,q),q,q,q,new C.dUg(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yt,B.aV,q,q,q,q),q,q,q,r.gafg(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.ao4,D.flh,r.gaQf(),A.bn(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Ft(r.cB_(J.q(r.d,s),o),14,B.af,1,D.a9t,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cB_(d,e){var w=null,v=e.a,u=v?B.e0:B.c,t=A.n(14),s=A.I((v?B.e2:B.bN).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.n(14),p=A.p(w,D.bJW,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaoe(),m=d.d?"":" \xb7 Public",l=d.y===D.kv?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.be,l,A.X(B.N8,v?B.bs:B.bm,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dUf(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ap4.prototype={
S(){return new C.aCS(A.a([],x._),A.aX(x.N),A.b7j())},
bs(){return this.r.$0()},
ge1(){return this.c}}
C.aCS.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.ac9()
w=u.a
v=w.c
if(v.length!==0)C.a6W(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a2i(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xL("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTB(r),s,null,!0,!0,x.y),$async$a2i)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jk()
t.m(new C.dTC(t,r))
w=4
return A.b(t.vG(),$async$a2i)
case 4:t.a.bs()
t.xL(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2i,v)},
cqP(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dTw(w,f,d,e))},
aSx(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jO(q,q,1,1)
this.w.sp(0,u)},
b9E(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eI(new Float64Array(16))
q.e2(r)
w=q.Cy()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e9(r,u,0,1)
t.jO(v,v,1,1)
t.e9(-r,-u,0,1)
t.iH(0,q)
s.sp(0,t)},
ac9(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ac9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AI(u.a.c),$async$ac9)
case 2:t=s.rh(r.dJ(e,new C.dT4(u)))
if(t!=null&&u.c!=null)u.m(new C.dT5(u,t))
return A.h(null,v)}})
return A.i($async$ac9,v)},
xL(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
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
return A.b(C.h3a(o,t,!1,r,new C.dTj(u),q.a,s),$async$vE)
case 2:n=A
m=J
w=3
return A.b(C.Gr(u.a.c),$async$vE)
case 3:p=n.rh(m.dJ(e,new C.dTk(u)))
if(p!=null&&u.c!=null)u.m(new C.dTl(u,p))
return A.h(null,v)}})
return A.i($async$vE,v)},
Jk(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
vG(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2r(t,s),$async$vG)
case 2:return A.h(null,v)}})
return A.i($async$vG,v)},
a0R(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u1(q,t.a.c)){t.xL("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ibV(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0R)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jk()
t.m(new C.dTv(t,r))
w=4
return A.b(t.vG(),$async$a0R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0R,v)},
a_z(){return this.ces()},
ces(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.u1(q,t.a.c)){t.xL("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTt(r,new C.tR(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_z)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jk()
t.m(new C.dTu(r,t))
w=4
return A.b(t.vG(),$async$a_z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_z,v)},
Vz(d){return this.bzq(d)},
bzq(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u1(r,t.a.c)){t.xL("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dST(t,d),r,null,!0,!0,x.P),$async$Vz)
case 3:s=f
if(s==null){w=1
break}t.Jk()
t.m(new C.dSU(t,s))
w=4
return A.b(t.vG(),$async$Vz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vz,v)},
a2E(d){return this.cDa(d)},
cDa(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2E=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dTE(u,d,new C.tR(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2E)
case 2:return A.h(null,v)}})
return A.i($async$a2E,v)},
caL(d){var w=this,v=w.d
v===$&&A.c()
if(C.u1(v,w.a.c))w.O1(d)
else w.a2E(d)},
ahK(d,e){return this.cuP(d,e)},
cuP(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dTy(new C.tR(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahK)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahK,v)},
HU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kv?3:5
break
case 3:w=6
return A.b(C.fRS(t.a.c),$async$HU)
case 6:s=e
o=t.a
r=C.haX(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahK(!s,!r),$async$HU)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bB_(o,t.a.c)){t.xL("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l5(o,"Cancel","Remove",q.y===D.kv?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HU)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOu(t.a.c,t.d.a),$async$HU)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iQ(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HU,v)},
a9G(d){return this.bKA(d)},
bKA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u1(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b6(s,new C.dSV(p))){o=A.T(s)
p.a=A.rh(new A.cO(new A.a_(s,new C.dSW(d),o.k("a_<1>")),new C.dSX(),o.k("cO<1,m>")))}q=p.a
if(q==null)q=d.d
t.Jk()
t.m(new C.dSY(t,s,d,q))
w=3
return A.b(t.vG(),$async$a9G)
case 3:t.xL(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9G,v)},
O1(d){return this.bMK(d)},
bMK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u1(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2E(d),$async$O1)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dT1(t,d),r,null,!0,!0,x.P),$async$O1)
case 6:s=f
if(s==null){w=1
break}t.Jk()
t.m(new C.dT2(t,s))
w=7
return A.b(t.vG(),$async$O1)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O1,v)},
cBo(){var w=this,v=w.d
v===$&&A.c()
if(!C.u1(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dTD(w))
w.vG()},
Yp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bB_(n,t.a.c)){t.xL("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bo(new A.M(q,t.gc9f(),A.T(q).k("M<1,m>")).c0(0,new C.dTe()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTf(t,new C.tR(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yp)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jk()
t.m(new C.dTg(t,p))
w=4
return A.b(t.vG(),$async$Yp)
case 4:t.xL("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yp,v)},
c9g(d){return B.a.i(d.toLowerCase())},
cdf(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u1(v,w)
t=r.d
s=C.i18(t)
C.iaQ(q,t.b,u,C.i17(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dTL(),A.T(l).k("a_<1>")).gM(0)
l=n?B.c_:B.iB
v=A.X(B.a_z,n?B.bs:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bd,A.aL(!1,o,!0,new A.D(B.hP,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dTM(p,d),o,o,o,o,o,o,o),o),new A.D(B.nh,p.bXI(m),o)],u)
if(p.d.y===D.kv){t=B.ry.j(0.15)
s=A.n(12)
r=A.I(B.ry.j(0.45),B.q,1)
q=C.Gp(p.d,p.a.c)
v.push(new A.D(B.xO,A.p(o,A.B(A.a([D.bPa,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ik,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.u1(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JK("Undo",B.rm,p.gcBn(),m,o,o))
u.push(new C.JK("Family Book",D.bEB,p.gcde(),m,B.to,o))
if(C.u1(p.d,p.a.c))u.push(new C.JK("Display settings",B.C_,p.gcer(),m,B.aZ,o))
u.push(new C.JK("Sync",B.yt,p.gafg(),m,o,o))
t=p.d
if(t.y===D.kv||C.bB_(t,p.a.c)){t=p.d.y===D.kv?"Remove shared tree":"Delete tree"
u.push(new C.JK(t,B.e7,p.gbKK(),m,B.h2,o))}if(C.u1(p.d,p.a.c))u.push(new C.JK("Add member",B.vW,new C.dTN(p),m,B.bT,o))
v.push(new A.D(R.ai9,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaoe()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dTO(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_D:Y.N9,o,o,o,o,o)
v.push(A.av(A.hn(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dTP(p),o),o,o,o))}return A.c7(o,l,A.bm(!0,A.x(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bXI(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fy.j(0.35),B.dn,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.ym,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bSe,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafg(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f7j,m,m,m)
r=r.gaoe()
p=n.d.gaoe()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bC,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a6,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.u1(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bPm,m,m,m,n.gcob(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jr:B.mz
r=r?"Private":"Public"
r=A.E(n.auC(q,"Privacy",r,n.a.d.w?n.gcAj():m),1)
q=A.E(n.auC(B.yu,"Tree code",n.d.c,new C.dT3(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.auC(D.bGk,"Collaborators",p,n.gc1h()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kv){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aF(!1,B.a1,!0,A.n(999),A.aL(!1,A.n(999),!0,new A.D(B.fM,A.B(A.a([A.X(B.oY,B.c,m,m,m,14),B.ee,A.d("View only",m,m,m,m,m,m,B.aQn,m,m,m)],o),B.m,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.Fu,A.x(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bWs,B.n),m,m,m,m,m,m,m,1/0)},
auC(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.n(14),A.aL(!1,A.n(14),!0,new A.D(L.ajh,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uO,A.d(f,w,1,B.a2,w,w,w,O.zL,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bdY.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.be0(s,t),new A.ar(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dz(r,new C.d73(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d74(this),A.T(r).k("M<1,t>")))
return new A.D(B.tQ,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JW.prototype={}
C.FG.prototype={}
C.be_.prototype={
gbi5(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIu.prototype={}
C.be0.prototype={
bMo(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bS
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
q.r=B.bD.gp(0)
d.aR(t,q)},
bMm(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d7o())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b6(a0,new C.d7p(f))
t=new A.M(a0,new C.d7q(f),A.T(a0).k("M<1,L>")).c0(0,new C.d7r()).cJ(0,1/0,B.v7)
w=f.a
d.bE(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
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
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bS
w.e=B.fG
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bMm(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bMo(d,w,q.a,q.b)}},
au(d){return d.b!==this.b}}
C.bhG.prototype={
gc74(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dl7
switch(w.c.a){case 0:return D.cOq
case 1:return D.cZE
case 2:return D.dfl}},
gc77(){var w=this.c,v=C.hlJ(w.w),u=C.hlJ(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc74(),p=t.c,o=I.bBT(p.f),n=t.gc77(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.ax:B.c,j=A.I(r?B.ax:B.c,B.q,2)
if(o!=null)w=A.tg(B.A,s,B.ci,B.bV,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hY(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.az,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.FL,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.I(r?B.ax:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fhm,s,s,s),B.f,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.by8,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.n(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a6,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aC(s,new A.a7(84,112,A.x(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,D.b_N,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.byj,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bd4.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bbN
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
au(d){return d.b!==this.b}}
C.bvo.prototype={
B(d){var w=this,v=null,u=new C.fbP(w),t=w.c,s=t?B.ct:B.c,r=A.n(12),q=u.$3(B.hB,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yr,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),u.$3(B.alG,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dr,v,v,v,B.ag)}}
C.bl1.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.q,2),s=w.e,r=x.p
t=A.aC(v,A.p(v,A.x(A.a([A.X(s?K.a_D:Y.N9,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fdI,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fbF,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.eNH(w),A.T(s).k("M<1,t>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZJ.prototype={
S(){return new C.aBj()},
bs(){return this.Q.$0()},
ge1(){return this.w}}
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
r.y=t==null?D.y1:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i2G(w.r,w.f)
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
Po(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Po=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.haX(p.y,p.w)
w=3
return A.b(A.lh(t.a.w,B.I9),$async$Po)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZC(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Po)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hFi(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(An.GA(78,800),$async$Po)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dnh(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Po,v)},
c76(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i0(B.o.u(1000*Date.now()),w,D.y1,null,null,null,"","","","","",1,!1,0)
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
s=v.aDw(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a9h(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dng(r),s,null,!0,!0,x.y),$async$a9h)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9h,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tR(j),h=l.a.e,g=A.T(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dnq(l),g),g.k("J.E"))
h=j?B.e0:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bwD,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hx(A.aL(!1,k,!0,new A.D(B.lS,A.X(B.e7,B.oM,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbHo(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jC:B.iX
t=I.bBT(l.as)
if(l.as==null)s=A.X(B.oQ,j?B.bs:B.bm,k,k,k,40)
else s=k
s=A.av(A.aC(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h6(u,t,s,k,42),A.ao(0,A.h6(B.bT,k,D.bJ_,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc73(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBl(t,"Full name",B.mv,1,1,i,B.m5)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.R,new C.bhE(i,u,new C.dnr(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bqd],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dns(),A.T(o).k("M<1,eG<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bqf],q)
B.d.v(q,new A.M(f,new C.dnu(),A.T(f).k("M<1,eG<m?>>")))
o=A.x(A.a([t,B.am,new C.acT(i,r,"Who is their parent?",p,new C.dnv(l),k,o),B.aB,n,B.am,new C.acT(i,m,"Who is their spouse / partner?",q,new C.dnw(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBl(q,"Birth date",D.akJ,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBl(m,"Birth place",B.a_S,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBl(n,"Date of death (if deceased)",D.amW,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBl(p,"Occupation",B.a0U,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.acU(i,"Identity",u,k),B.ac,new C.acU(i,"Family links",o,k),B.ac,new C.acU(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBl(r,"Notes",B.l_,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBk(i,"Child order",l.ceG(l.at),new C.dnx(l),new C.dny(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h0u(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dnz(l):k
B.d.v(r,A.a([B.R,new C.aBk(i,"Visible in tree",u,w,new C.dnA(l),k)],v))}r.push(B.R)
w=j?B.jC:B.iX
u=A.n(14)
t=A.I(j?B.e2:B.bN,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iH(k,B.bT,k,B.af,k,new C.dnB(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ahM,k,k,k))
r.push(B.by)
w=j?B.aQ:B.ax
j=j?B.e2:B.bN
r.push(A.B(A.a([A.E(A.dV(B.nD,new C.dnt(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b7(A.n(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.be,A.E(A.bG(D.eQI,l.gc75(),A.bn(B.aV,k,k,0,B.c,k,B.cm,k,new A.b7(A.n(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.em(B.hb,k,B.af,h,new A.a7(420,k,A.cd(A.x(r,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.aiC,k,B.ai0,new A.b7(g,B.Y),k,k)},
ceG(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acU.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jC:B.iX,s=A.n(16)
return A.x(A.a([new A.D(D.aj1,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e2:B.bN,B.q,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhF.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e0:B.c,r=A.n(12),q=A.I((t?B.e2:B.bN).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eA,u,B.vz,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cx,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acT.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e0:B.c,s=A.n(12),r=A.I((u?B.e2:B.bN).j(0.85),B.q,1),q=A.X(B.rg,u?B.bs:B.bm,v,v,v,v),p=A.l(v,v,u?B.aQ:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a6,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e0:B.c
return A.p(v,new A.Dz(A.Sm(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cx,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bhE.prototype={
B(d){var w=new C.dnC(this)
return A.B(A.a([w.$3(D.a_b,"Male",B.NT),B.ab,w.$3(D.ajU,"Female",B.NG),B.ab,w.$3(D.y1,"Other",B.nm)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBk.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jC:B.iX,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHw(u,B.yr,w.f,v),B.bp,new C.aHw(u,B.hB,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ej,v,v,v)}}
C.aHw.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.e0:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bT
else t=(s.c.a?B.bs:B.bm).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acV.prototype={
bQe(d){switch(d.a){case 0:return B.bT
case 1:return B.bD
case 2:return B.cX}},
bQf(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWT(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A8(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e0:B.c
u=A.n(12)
t=A.I((w?B.e2:B.bN).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bT,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.ax,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.xL,p,p,1/0)},
adM(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jC:B.iX,s=A.n(16),r=A.I(v?B.e2:B.bN,B.q,1)
return A.x(A.a([new A.D(D.aj1,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hqv(r,q),o=q.c,n=t.bQe(o),m=I.bBT(q.f),l=t.e.a,k=l?B.e0:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kv?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a6,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h6(u,m,m==null?A.X(B.oQ,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ek,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bQf(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.ms,s,s,s),s,s,s)
u=x.p
i=A.a([t.A8("Full name",i,B.mv)],u)
if(p>0)i.push(t.A8("Child order","#"+p,B.NM))
r=A.a([h,B.au,r,B.aR,l,B.R,v,B.by,t.adM("Identity",i),B.ac,t.adM("Life details",A.a([t.A8("Birth date",q.w,D.akJ),t.A8("Birth place",q.x,B.a_S),t.A8("Date of death",q.y,D.amW),t.A8("Occupation",q.z,B.a0U)],u)),B.ac,t.adM("Family links",A.a([t.A8("1. Parent",t.aWT(q.d),B.FZ),t.A8("2. Spouse",t.aWT(q.e),B.NF)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adM("Notes",A.a([t.A8("Notes",q,B.l_)],u))],u))
r.push(B.by)
r.push(A.bG(B.Jw,new C.dnM(d),A.bn(B.aV,s,s,s,s,s,B.cm,s,new A.b7(A.n(14),B.Y),s,s,s)))
return A.eL(s,k,new A.cT(B.lE,A.cd(A.x(r,B.ai,s,B.e,B.N,0,B.p),B.r,s,B.y,s,B.xR,s,s,B.ah),s),s,s,s,B.Fx,B.d1,s,new A.b7(j,B.Y),s)}}
C.JK.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xU,A.hx(A.aF(!1,B.a1,!0,A.n(8),A.aL(!1,A.n(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.ap7.prototype={
eS(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.T(w).k("M<1,a5<m,@>>")
w=A.C(new A.M(w,new C.c8w(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j9(w,new C.c8x(),t,x.U))
return s}}
C.ap8.prototype={
S(){return new C.aCU(A.a([],x.bF))},
gde(){return this.c}}
C.aCU.prototype={
a_(){this.a1()
this.Jr()},
Jr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c8A(t.a.c),$async$Jr)
case 3:r=e
w=4
return A.b(C.AI(t.a.c),$async$Jr)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qW(q,new C.dTY(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dTZ(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jr,v)},
yj(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Ka(d,e){return this.cDL(d,e)},
cDL(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Ka=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dU2(q,e))
t=3
w=6
return A.b(d.$0(),$async$Ka)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dU3(q))
$.eT.mt()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ka,v)},
Xd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p9(r,s.c,s.e),$async$Xd)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ka(new C.dTV(t),"Preparing download\u2026"),$async$Xd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xd,v)},
Xh(d){return this.bOc(d)},
bOc(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p9(r,s.c,s.e),$async$Xh)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Ka(new C.dTW(t,d),"Preparing file\u2026"),$async$Xh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xh,v)},
afD(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xa.c7().LX(B.QO,B.tU,!0),$async$afD)
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
case 6:u=A.Gz()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afD,v)},
XT(d){return this.bYC(d)},
bYC(d){var w=0,v=A.j(x.H),u=this
var $async$XT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Ka(new C.dTX(u,d),"Restoring family trees\u2026"),$async$XT)
case 2:return A.h(null,v)}})
return A.i($async$XT,v)},
XS(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afD(),$async$XS)
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
return A.b(A.p9(r,s.c,s.e),$async$a1H)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ka(new C.dU1(t),"Creating QR code\u2026"),$async$a1H)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1H,v)},
a1i(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CS()){t.yj("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cm(A.e9(new C.dU_(),!0,null,x.N)),$async$a1i)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XT(r),$async$a1i)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1i,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AG:B.iB,m=o?D.agh:B.aQ,l=o?B.aJ:B.bN,k=o?B.aQ:B.ax,j=new C.d7s(n,m,l,k,o?B.bK:B.bm)
l=A.aH(p,p,p,p,A.X(B.eE,k,p,p,p,20),p,p,p,new C.dU5(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d70(!0,B.jt,B.aN,B.aN,q.r?p:q.gcuD(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcqK()
t.push(A.E(C.d70(!s,B.j2,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d70(!1,B.hC,B.aV,B.bT,q.r?p:q.gbO5(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d70(!1,M.yx,B.aF,B.aM,q.r?p:q.gbYz(),j,s,"Upload backup file"),1))
l=A.a([new C.bdZ(v,l,p),B.kF,new C.aca(j,"QR restore",p),B.R,t,B.d7,new C.aca(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kF,new C.aca(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dU6(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.Zj,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([K.aOO,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Bj,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d7s.prototype={}
C.bdZ.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kb,28)],x.V)
t=A.ao(p,A.X(B.ub,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bRM,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.ol,A.E(A.x(A.a([D.fmg,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bZF,B.n),p,p,p,p,p,p,p,p)}}
C.aca.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdX.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aN.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aN.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eH(A.de(new A.D(E.YX,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rc,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cx,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.be1.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eH(new A.D(B.eR,A.B(A.a([A.p(v,D.bR_,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.rc,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hC,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.a_3.prototype={
S(){return new C.aCT()},
gde(){return this.c}}
C.aCT.prototype={
a_(){this.a1()
this.a8O()},
a8O(){var w=0,v=A.j(x.H),u=this,t
var $async$a8O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b1f(u.a.c,B.D0),$async$a8O)
case 2:t=e
if(u.c!=null)u.m(new C.dTQ(u,t))
return A.h(null,v)}})
return A.i($async$a8O,v)},
ah0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ah0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dTR(q))
t=4
p=A.hcB(q.a.d,B.D0)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arm(n.e,m,l,B.D0,p,n.f),$async$ah0)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dTS(q))
q.c.K(x.q).f.U(D.eZx)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.eg(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dTT(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah0,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jg:B.pL,n=p?B.id:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fC1,q,q,q,1,q,!0)
w=A.n(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pT(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.by,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bq,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcqs()
if(u)u=B.J0
else u=A.X(r.e===!0?B.ho:B.akI,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eD(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.fQ,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i3,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zT,new C.dTU(d),A.bn(B.aV,q,q,q,q,B.fQ,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_4.prototype={
S(){return new C.bj8(A.ze(B.xA,B.nK,B.ui))}}
C.bj8.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c7(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fu7,w,w,w,1,w,!0),B.w,A.zd(this.d,B.bV,new C.dU7(this,d)),w,!1,!1,w,w)}}
C.aYa.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Qh,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lA.prototype={}
C.a5Y.prototype={
S(){return new C.biP(null,null)}}
C.biP.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tK,v,1,v,w)
w.e=A.bj(v,B.pR,v,1,v,w)
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
this.buL()},
B(d){var w,v,u=this,t=B.d.dM(D.a3C,new C.dFj(u),new C.dFk())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cu_(A.c6(new A.ha(A.a([w,v],x.dS)),new C.dFl(u,t),null),!0)}}
C.biO.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0h(d,e)
break
case"house":p.m5(d,e,D.d3n)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdB()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.ma(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AS(d,e,12)
p.xU(d,e,B.lf,5,14)
break
case"grocery":p.cfp(d,e)
break
case"calculator":p.cf6(d,e)
break
case"lumber":p.cfx(d,e)
break
case"kitchen":p.cfs(d,e)
break
case"landscape":p.m5(d,e,D.d3U)
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
w.r=B.eB.j(0.85).gp(0)
d.aR(s,w)
p.AS(d,e,8)
p.xU(d,e,B.j_,4,18)
break
case"plumbing":p.cfG(d,e)
break
case"electrical":p.m5(d,e,D.deC)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.b0(new A.a9(0,0,0+e.a,0+e.b),u)
p.ma(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.ma(d,e,B.lJ.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AS(d,e,10)
break
case"store":p.cfQ(d,e)
break
case"paint_remodel":p.cfB(d,e)
break
case"roofing":p.cfI(d,e)
break
case"warehouse":p.cfX(d,e)
break
case"vehicles":p.cfV(d,e)
break
case"farm":p.cfj(d,e)
break
case"restaurant":p.cfH(d,e)
break
case"tools":p.cfT(d,e)
break
case"wallet":p.cfW(d,e)
break
case"concrete":p.cfc(d,e)
break
case"blueprint":p.cf4(d,e)
break
default:p.b0h(d,e)}},
m5(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.saq(new A.a8(B.az,B.aC,B.x,f,null,null).av(0,v))
d.b0(v,w)},
ma(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gdB()/2-h
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
xU(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdB()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AS(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b0h(d,e){var w,v=this
v.m5(d,e,D.dd7)
w=v.c
v.ma(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.ma(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bMi(d,e,B.i0,w)
v.xU(d,e,B.c.j(0.7),6,8)},
bMi(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c0(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cfp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m5(d,e,D.cka)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d1G[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.ma(d,e,B.c.j(0.35),w,16)
j.xU(d,e,B.j_,5,12)},
cf6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m5(d,e,D.ckh)
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
p=A.h3(g,g,g,g,g,B.a4,B.c6,g,B.dP,B.c5)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d5v[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saX(0,new A.es(r,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a4(d,new A.v(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ckj[o]
l=B.km.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saX(0,new A.es(m,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a4(d,new A.v(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.ma(d,e,B.c.j(0.35),w*1.5,14)
h.ma(d,e,B.eC.j(0.55),-v*3.141592653589793*2,8)
h.ma(d,e,B.AH.j(0.4),r*2.8,22)
h.xU(d,e,B.pA,8,10)
h.AS(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cfx(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,A_.awj)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hF)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fV,B.oE,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.et(p),n)
n.delete()}m.ma(d,e,B.fV.j(0.35),w,15)
m.AS(d,e,8)},
cfs(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m5(d,e,D.d2a)
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
j.xU(d,e,B.qP,4,14)},
cfG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m5(d,e,D.cSd)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xU(d,e,B.oK,6,12)
l.ma(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cfQ(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m5(d,e,D.cxL)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.it)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fc,B.bM,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}n.ma(d,e,B.c.j(0.3),w,16)
n.AS(d,e,8)
n.xU(d,e,B.vd,5,13)},
cfB(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.cY1)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.he)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.iy,B.ds,B.bM,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.et(p),o)
o.delete()}this.ma(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cfI(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.cVz)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xU(d,e,B.cr,7,11)},
cfX(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.cAs)
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
cfV(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.dix)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hF)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}this.AS(d,e,6)},
cfj(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.d0N)
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
cfH(d,e){var w,v,u,t,s,r,q,p,o=this
o.m5(d,e,D.d3c)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cg(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xU(d,e,B.qP,5,16)
o.AS(d,e,7)},
cfT(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,D.dg6)
w=m.c
v=w*3.141592653589793
m.ma(d,e,B.oE.j(0.55),v*3,10)
m.ma(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oE.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cfW(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,D.dj8)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.it)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.j_,B.lJ,q).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}m.AS(d,e,9)
m.ma(d,e,B.c.j(0.4),w*2.2,12)},
cfc(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.d8e)
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
o.r=B.bN.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cf4(d,e){var w,v,u,t,s,r,q,p
this.m5(d,e,D.d4c)
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
d.b0(new A.a9(0,p,0+v,p+6),u)
this.ma(d,e,B.lf.j(0.45),-t*3.141592653589793*2,11)},
au(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.as3.prototype={
ZY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPq(),$async$ZY)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8d(s),$async$ZY)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZY,v)},
afE(d){return this.cib(d)},
cib(d){var w=0,v=A.j(x.H),u=this,t
var $async$afE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ib_(d),$async$afE)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afE,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jC:B.iX
w=x.p
v=A.a([C.aPO(!0,B.qH,1/0,B.q_,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bI(B.b0,t,t,new A.D(B.vt,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.axg,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b4,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bKL,D.fiE,new C.cg5(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jG,t,t,t,t,B.ce)),1),B.ab,A.E(A.eD(D.bT_,D.fxc,this.gc9d(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jG,t,t,D.aZk,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fK(1.7777777777777777,A.aF(!1,B.a1,!0,B.qH,new A.an(B.W,t,B.b1,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aKQ.prototype={
aT(){this.b2()
this.b_()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
C.aSK.prototype={}
C.aSJ.prototype={}
C.aQJ.prototype={}
C.YI.prototype={
S(){return new C.ay9()}}
C.ay9.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b5,B.aO)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
K0(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.f_1)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aSK(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e0:B.c,k=A.n(20),j=A.p(n,D.bSF,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.be,i,A.aH(n,n,n,n,A.X(B.cC,m?B.bs:B.bm,n,n,n,n),n,n,n,new C.cZI(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cx,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hcR(new C.cZJ(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a6,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jC:B.iX
r=A.n(12)
q=A.n(12)
p=m?B.e2:B.bN
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dh),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cZK(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.J7,n,n,n,n)
u=m?B.aQ:B.ax
m=m?B.e2:B.bN
return A.eL(n,l,new A.cT(B.lE,A.cd(A.x(A.a([j,B.aR,i,B.au,w,B.O,v,B.aR,t,B.by,A.B(A.a([A.E(A.dV(B.df,new C.cZL(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b7(A.n(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.at,A.E(A.bG(D.fxr,o.ga21(),A.bn(B.aV,n,n,n,B.c,n,B.cm,n,new A.b7(A.n(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.N,0,B.p),B.r,n,B.y,n,B.Bk,n,n,B.ah),n),n,n,n,X.Bl,B.d1,n,new A.b7(k,B.Y),n)}}
C.YH.prototype={
S(){return new C.ay8()}}
C.ay8.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
K0(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.eXJ)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aSJ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e0:B.c,n=A.n(20),m=A.p(q,D.bPf,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.be,l,A.aH(q,q,q,q,A.X(B.cC,p?B.bs:B.bm,q,q,q,q),q,q,q,new C.cZE(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.aku,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jC:B.iX
t=A.n(12)
s=A.n(12)
r=p?B.e2:B.bN
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dh),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cZF(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kG,q,q,q,q)
w=p?B.aQ:B.ax
p=p?B.e2:B.bN
return A.eL(q,o,new A.cT(B.lE,A.cd(A.x(A.a([m,B.aR,l,B.aB,v,B.by,A.B(A.a([A.E(A.dV(B.df,new C.cZG(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b7(A.n(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.at,A.E(A.bG(D.fEh,this.ga21(),A.bn(B.bT,q,q,q,B.c,q,B.cm,q,new A.b7(A.n(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.Bk,q,q,B.ah),q),q,q,q,X.Bl,B.d1,q,new A.b7(n,B.Y),q)}}
C.Yf.prototype={
S(){return new C.awT()}}
C.awT.prototype={
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
gJm(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiQ(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb3b(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNW(d){var w,v=B.k.D(this.gJm()+d,0.25,999999),u=B.k.k9(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saX(0,u)
this.m(new C.cxh())},
axf(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jC:B.iX,s=A.n(14),r=A.n(14)
u=u?B.e2:B.bN
return A.bs(w,new A.b4(4,s,B.dh),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.n(14),B.aaT),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c9e(d,e,f){return this.axf(d,e,f,null)},
K0(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiQ()<=0){s.c.K(x.q).f.U(D.f0T)
return}r=s.c
r.toString
v=s.gJm()
u=s.gaiQ()
t=s.gb3b()
A.a6(r,!1).O(new C.aQJ(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=n?B.e0:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bT.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bII,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cx,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.be,h,A.aH(o,o,o,o,A.X(B.cC,n?B.bs:B.bm,o,o,o,o),o,o,o,new C.cxn(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axf(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NS),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.J7,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jC:B.iX
t=A.n(14)
s=A.I(n?B.e2:B.bN,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yr,n?B.aQ:B.ax,o,o,o,20),o,o,o,new C.cxo(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bUx,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxp(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hB,n?B.aQ:B.ax,o,o,o,20),o,o,o,new C.cxq(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axf(m,"Amount","0.00",B.i4),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxr(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cYv,new C.cxs(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.O,s,B.ac,A.bV(B.bA,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c9e(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cxt(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kG,o,o,o,o)],w))}i.push(B.aR)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJm()===B.k.k9(p.gJm())?B.k.N(p.gJm()):p.gJm()
s=p.gb3b()
r=A.AK(p.gaiQ())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCF(p.gJm()*p.gaiQ(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jn,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.e2:B.bN
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cxu(d),h),1),B.at,A.E(A.dn(D.anY,D.fAg,p.ga21(),A.bn(B.aV,o,o,0,B.c,o,B.cm,o,new A.b7(A.n(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eL(o,l,new A.cT(W.abh,A.cd(A.x(i,B.ai,o,B.e,B.N,0,B.p),B.r,o,B.y,o,Ad.ra,o,o,B.ah),o),o,o,o,B.MA,B.d1,o,new A.b7(k,B.Y),o)}}
C.a0P.prototype={
S(){return new C.bvg()}}
C.bvg.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b5,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e0:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.ax,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jC:B.iX
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.n(12),B.dh),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fbh(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dV(B.df,new C.fbi(d),s),1)
r=A.bn(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eL(s,q,new A.D(B.Bk,A.x(A.a([o,B.aB,v,B.aR,A.B(A.a([u,B.at,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fbj(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.N,0,B.p),s),s,s,s,s,B.d1,s,new A.b7(p,B.Y),s)}}
C.abd.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Ft.prototype={
S(){return new C.bve(null,null)}}
C.bve.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bqN,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bx8()},
gbyB(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bT,B.aZ],x.O)
case 2:return A.a([B.bv,B.aV,B.aZ],x.O)
case 3:return A.a([B.aN,B.cb,B.jY],x.O)
case 4:return A.a([B.hm,B.bT,B.fd],x.O)
case 0:return A.a([B.aV,B.bT,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ex(A.c6(v,new C.fbf(this,new C.tR(w.ax.a===B.I)),null),null)}}
C.awM.prototype={
S(){return new C.bvf(null,null)}}
C.bvf.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.nb,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bx9()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fbg(this),null)}}
C.bvd.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iM(v))
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
w=A.x8(u)
t=A.a([],x.f5)
w=new A.vD(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jY('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hl(w,r)
w.jy()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRp(d,q,r,o,0,0.2,4.2,0.92)
p.aRp(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRp(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hyv(e.a.a,e,t,t+f*i,!0),r=A.bB2(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bS
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Hc,null).av(0,r))
d.aR(s,w)},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aN0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b2()
this.b_()
this.by()}}
C.aN1.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b2()
this.b_()
this.by()}}
C.tR.prototype={}
C.as2.prototype={
S(){return new C.aEp()},
ge1(){return this.c}}
C.aEp.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.agv()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.L6(w,v)
this.a2()},
agv(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bB9(t.c,t.d.a),$async$agv)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eKR(u,s))
return A.h(null,v)}})
return A.i($async$agv,v)},
PO(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eKI(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.L6(t,s),$async$PO)
case 2:if(u.c!=null)u.m(new C.eKJ(u))
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
return A.b(A.ca(null,null,!0,null,new C.eKP(t,new C.tR(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qj)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8d(q),$async$Qj)
case 6:case 5:t.m(new C.eKQ(t,r))
w=7
return A.b(t.PO(),$async$Qj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
Vt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iaL(r),$async$Vt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eKD(t,new C.r_(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PO(),$async$Vt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vt,v)},
ceg(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hqr(t,new C.eKH(u),w,v)},
aaB(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aZ6,w,w,B.n),w,22,w,w,w,w,w,22)},
a9F(d){return this.bKx(d)},
bKx(d){var w=0,v=A.j(x.H),u=this
var $async$a9F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eKG(u,d))
w=2
return A.b(u.PO(),$async$a9F)
case 2:return A.h(null,v)}})
return A.i($async$a9F,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c_:B.iB,d=A.n(8),a0=A.X(Q.a_A,f?B.bs:B.bm,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.FE,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a6,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eKS(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b1,B.r,A.a([A.bw(A.n(22),C.aPO(!0,A.n(22),1/0,B.q_,g,d,1/0),B.aq),A.ao(10,A.dn(D.bNi,D.fCy,h.gb13(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b1,B.r,A.a([C.aPO(!0,A.n(16),1/0,B.Nk,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b4,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.aaB(!0),g,g,8,g,8,g),A.ao(g,A.cuK(h.aaB(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cuK(h.aaB(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cuK(h.aaB(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bJh,D.fwb,h.gb13(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bWc,B.n),g,g,g,g,B.lS,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.b8z,B.nR,B.h6],u):A.a([B.aZ,B.aV,B.bT],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.jJ,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h7,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCF(h.d.gwV(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cx,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.I(B.fW.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aN.j(0.28),B.cJ,14)],t)
j=B.aN.j(0.22)
i=A.n(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bvo,A.B(A.a([o,B.at,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eH(new A.D(Ai.Bf,A.x(A.a([A.p(g,D.any,B.f,g,g,new A.o(j,g,A.I(B.aN.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fF,D.fll],a1),B.m,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcef(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.az,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aR,w,B.O,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ak.a1f,D.fjf,h.gbz3(),A.bn(B.aV,g,g,g,B.c,g,B.ik,g,new A.b7(A.n(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e0:B.c
v=A.n(14)
u=A.I(f?B.e2:B.bN,B.q,1)
t=A.X(B.a_V,f?B.bs:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rb,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eKT(h,new C.tR(f)),A.T(w).k("M<1,t>")))
if(h.e)d.push(new A.D(B.B8,A.av(A.mK(g,f?B.bs:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bm(!0,A.x(A.a([new A.D(B.Bd,a0,g),A.E(A.cd(A.x(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xS,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bCG(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e0:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b0S,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.hR:B.ha,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcTQ()
v=A.AK(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.F,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bT.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bCF(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h8,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DY(A.B(A.a([m,A.E(new A.D(B.ahF,A.B(A.a([l,B.be,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cC,(r?B.bs:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eKE(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b_J,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.adf.prototype={
El(d){return this.bLV(d)},
bLV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$El=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p9(d,o,!1),$async$El)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ac.B6,null,x.H),$async$El)
case 4:s=t.d
w=5
return A.b(C.fIE(!0,o,s),$async$El)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Go(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$El)
case 6:p=f
w=7
return A.b(A.p8(o,!1),$async$El)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$El,v)},
ZZ(d){return this.cuE(d)},
cuE(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p9(d,s,!1),$async$ZZ)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hE(d,new C.arX(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p8(s,!1),$async$ZZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZZ,v)},
PP(d){return this.cqF(d)},
cqF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aGH,!0,"NgmyWorksheetProjectScan",x.N),$async$PP)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCG(s),$async$PP)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.f01)
w=1
break}q=C.h2Q(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dS(p,x.H),$async$PP)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PP,v)},
a__(d){return this.cCG(d)},
cCG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a__=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bCd(),$async$a__)
case 3:s=f
if(s==null){w=1
break}r=C.h2Q(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dS(q,x.H),$async$a__)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a__,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tR(u),s=w.d.d.length,r=u?B.e0:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kb,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vA,A.p(v,A.x(A.a([w.ctb(d,t,s),new A.D(D.buN,A.x(A.a([w.b46(t,"QR restore"),B.R,A.B(A.a([w.b_0(t,!0,B.jt,B.aN,B.aN,new C.eKV(w,d),"Show to scan","QR code"),B.at,w.axg(t,B.j2,B.b6,B.bu,new C.eKW(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b46(t,"Backup files"),B.R,A.B(A.a([w.axg(t,B.hC,B.aV,B.bT,new C.eKX(w,d),"Full copy","Backup file"),B.at,w.axg(t,M.yx,B.aF,B.aM,new C.eKY(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
ctb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f1,B.cS,B.fy],k):A.a([B.aZ,B.aV,B.bT],k)
w=A.ao(l,A.X(B.ub,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.n(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPO(!0,A.n(13),64,D.bEu,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aRm,l,l,l)
r=C.bCF(r.gwV(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bvb,A.x(A.a([v,A.B(A.a([s,B.eo,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fE,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.eKU(d),l,l,l,A.nB(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aOD,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.az,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b46(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_0(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.agh:B.aQ
if(e)w=B.aN.j(o?0.45:0.35)
else{w=o?B.e2:B.bN
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aN.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rc,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eH(new A.D(E.YX,A.x(A.a([t,B.ac,u,B.bC,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cx,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
axg(d,e,f,g,h,i,j){return this.b_0(d,!1,e,f,g,h,i,j)}}
C.arX.prototype={
S(){return new C.bkv()}}
C.bkv.prototype={
a_(){this.a1()
this.aeo()},
aeo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aeo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCH(p.c,p.d),$async$aeo)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eKy(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eKz(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeo,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AG:B.iB,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eE,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eKA(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zF],u),B.m,h,B.e,B.j,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f1,B.cS,B.fy],s):A.a([B.aZ,B.aV,B.bT],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dj,B.L,h,h)
p=C.bCF(p.gwV(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fE,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.az,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Zi,h,h,1/0)
t=g?D.bi_:B.c
q=A.n(24)
p=A.I(w?B.aN.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7V,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ebR)
else{m=A.n(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pT(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aR)
n=w?B.aN:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.I((w?B.aN:B.aV).j(0.35),B.q,1)
k=w?B.NC:B.O8
k=A.X(k,w?B.aN:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a6,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ik,h,h,h))
return A.c7(h,f,A.bm(!0,A.x(A.a([new A.D(A7.MM,e,h),A.E(A.cd(A.x(A.a([s,B.aR,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tS,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aiN,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.as1.prototype={
S(){return new C.aEo(A.ze(B.M3,B.nK,B.ui))}}
C.aEo.prototype={
q(){this.d.q()
this.a2()},
aLX(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iQ(w,d)},
ca5(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.i8E(t)
if(s!=null){this.aLX(s)
return}r=C.hhp(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aLX(B.a.i(B.a.b5(r,B.a.cK(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.X(u.f?B.rh:A2.NI,t,t,t,t,t),t,t,t,new C.eKC(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AG,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fw4,t,t,t,1,t,!0),q=A.zd(u.d,B.bV,u.gca4()),p=A.n(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c7(r,B.w,new A.an(B.W,t,B.b1,B.r,A.a([q,p,A.ao(32,A.p(t,D.fuS,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jn,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJb.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.NV.prototype={
S(){return new C.aEq(D.aaa,A.a([],x.D))},
bs(){return this.r.$0()},
ge1(){return this.c}}
C.aEq.prototype={
gcAz(){return J.bDP(this.e,0,new C.eLk())},
a_(){this.a1()
$.aV.bU$.push(this)
this.vD()},
q(){$.aV.hL(this)
this.a2()},
j6(d){if(d===B.fw)this.vD()},
vD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CR(q.a.c).d7(0,B.k2),$async$vD)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eLg(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eLh(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vD,v)},
HO(d){return this.bIG(d)},
bIF(){return this.HO(null)},
bIG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iaN(l,d),$async$HO)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lk(l,r,q,D.d8r,new A.S(Date.now(),0,!1))
w=4
return A.b(C.L6(t.a.c,p),$async$HO)
case 4:o=f
w=5
return A.b(t.vD(),$async$HO)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.eYc)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.eZW)
else n.K(q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ep(m)
case 1:return A.h(u,v)}})
return A.i($async$HO,v)},
Ep(d){return this.ce1(d)},
ce1(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ep=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.as2(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ep)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.L6(u.a.c,t),$async$Ep)
case 5:case 4:w=6
return A.b(u.vD(),$async$Ep)
case 6:return A.h(null,v)}})
return A.i($async$Ep,v)},
vp(d){return this.bYE(d)},
bYE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bCd(),$async$vp)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aGH,!0,"NgmyWorksheetProjectScan",x.N),$async$vp)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCG(q),$async$vp)
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
r.U(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h2Q(s)
w=15
return A.b(C.L6(t.a.c,p),$async$vp)
case 15:o=f
w=16
return A.b(t.vD(),$async$vp)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.f_0)
w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ep(p)
case 1:return A.h(u,v)}})
return A.i($async$vp,v)},
NE(d){return this.bHl(d)},
bHl(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eL1(d),s,null,!0,!0,x.y),$async$NE)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oH(t.a.c,A.a([],x.D)),$async$NE)
case 6:w=7
return A.b(t.vD(),$async$NE)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.eYh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NE,v)},
cee(d){var w=this.c
w.toString
A.bS(B.K,null,new C.eLa(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4I(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jC
else w=B.c
v=A.n(16)
u=A.I(p?B.e2:B.bN,B.q,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.x(A.a([s,B.ac,t,B.bC,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vz,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_u(d,e){return this.ce2(d,e)},
ce2(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_u=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(B.K,null,new C.eL5(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_u)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hqr(r,new C.eL6(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NG(d,e),$async$a_u)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_u,v)},
b1F(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.av
else t=h.a?B.aQ:B.ax
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.Bj,A.B(A.a([s,B.be,t,A.X(B.ey,w?B.bs:B.bm,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
ckU(d,e,f,g,h,i){return this.b1F(!1,d,e,f,g,h,i)},
NG(d,e){return this.bHv(d,e)},
bHv(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l5(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NG)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAW(t.a.c,d.a),$async$NG)
case 6:w=7
return A.b(t.vD(),$async$NG)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NG,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tR(o),m=o?B.c_:B.iB
if(q.f)o=D.b6s
else{w=q.bBR(n)
v=q.bXJ(n)
u=q.gbyY()
if(o)t=B.jC
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ac,v,B.aR,new C.Ft(A.p(p,A.B(A.a([q.aAO(N.Nj,"Projects",n,D.aaa),q.aAO(B.vM,"Cashier",n,D.aWw),q.aAO(B.FZ,"Family Tree",n,D.hao)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ek,0.95,u,p),B.by],r)
w=q.d
if(w===D.aaa){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.ax,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.awM(q.gaQ9(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.ckW(n)],r))}else{o=q.a
if(w===D.aWw)u.push(new C.ao2(o.c,n,p))
else{w=q.r
u.push(new C.apa(o.c,o.d,o.e,o.f,new C.eLn(q),new C.eLo(q),new A.cx(w,x.b4)))}}o=A.cd(A.x(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.MG,p,p,B.ah)}return A.c7(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bBR(d){var w=null,v=A.n(8),u=d.a,t=A.X(Q.a_A,u?B.bs:B.bm,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kV,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKZ(this),w,w,w,w,w,w,w)},
gbyY(){switch(this.d.a){case 0:return D.a9s
case 1:return D.h0J
case 2:return D.a9t}},
bXJ(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cA,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bP5,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bzx,A.aF(!1,B.a1,!0,w,A.aL(!1,A.n(12),!0,A.p(w,D.bMB,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eL2(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.n(12)
return new C.Ft(A.p(w,A.x(A.a([new A.D(E.Z2,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AK(this.gcAz()),w,w,w,w,w,w,D.ffH,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vy,B.jn,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.h0I,w)},
aAO(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.K,q=A.n(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bm
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.ee,new A.dq(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iF,u,u,u,B.FF,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eLj(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
ckW(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e0:B.c
u=A.n(15)
t=A.p(p,D.bMH,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bYF,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Ft(A.p(p,A.x(A.a([t,B.d7,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRL(B.j2,"Scan QR",new C.eLd(q),d),1),B.at,A.E(q.aRL(M.yx,"Upload file",new C.eLe(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fG9,q.gaQ9(),A.bn(B.aV,p,p,p,B.c,B.fQ,p,p,new A.b7(A.n(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bwf,1.05,D.a9s,p)}w=J.b6(q.e,new C.eLf(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Ft(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a9s,p)},
aRL(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.aZ,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.fe7,B.L,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ahx,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
ckV(d,e){var w,v,u=null,t=e.a,s=t?B.e0:B.c,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.n(14),n=t?B.bs:B.bm
n=A.bw(B.Vx,new A.fK(1.7777777777777777,C.aPO(!0,B.fx,1/0,N.Nj,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AK(d.gwV()),u,u,u,u,u,u,D.fce,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.x(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Ag.NV,t?B.bs:B.bm,u,u,u,u),u,u,u,new C.eLb(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eLc(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e6,u,u,u,1/0)}}
C.bx1.prototype={}
C.r_.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcTQ(){var w,v,u,t,s=this.c
if(s===B.k.k9(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lk.prototype={
gwV(){return B.d.cJ(this.d,0,new C.cwJ())},
ah(){var w=this,v=w.d,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.cwI(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bbQ(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lk(w.a,w.b,v,u,w.e)},
bbx(d){return this.bbQ(d,null)},
Sx(d){return this.bbQ(null,d)}}
C.Hv.prototype={
a5(){return"FamilyGender."+this.b}}
C.i0.prototype={
ah(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hmf(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDw(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i0(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ako.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kF.prototype={
gaoe(){var w=this.f
return new A.a_(w,new C.bNF(),A.T(w).k("a_<1>")).gM(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.bNE(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i16(w.y)],x.N,x.z)},
yA(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kF(w.a,v,u,t,s,r,w.r,q,p,o)},
bbP(d,e){var w=null
return this.yA(w,w,d,e,w,w,w,w)},
cJx(d,e,f,g,h,i,j){return this.yA(d,e,f,g,h,i,j,null)},
aDB(d,e){var w=null
return this.yA(w,w,w,d,w,w,e,w)},
cI0(d){var w=null
return this.yA(w,w,w,w,w,w,d,w)},
cIo(d){var w=null
return this.yA(w,w,w,w,w,w,w,d)},
aDn(d){var w=null
return this.yA(w,w,w,w,d,w,w,w)},
cJ2(d,e,f){var w=null
return this.yA(w,d,w,e,w,w,f,w)},
cHO(d){var w=null
return this.yA(w,w,d,w,w,w,w,w)},
cIB(d,e){var w=null
return this.yA(d,w,w,w,w,e,w,w)}}
C.cwK.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cwL.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGt.prototype={}
C.b89.prototype={
bB(d){this.a=d.a
this.b=d.b},
cU(d){var w=new C.b89()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b88.prototype={
gwc(){return!0},
gFW(){return this.z.b<this.b.length},
aTo(d){switch(0){case 0:return d.a.c}},
aT5(d){switch(0){case 0:return d.a.d}},
bR8(d,e){switch(0){case 0:return new A.hO(d,e)}},
bQw(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h9(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iF(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Hf(b4)
switch(0){case 0:v=b5.b
u=new A.kC(0,v,0,1/0)
t=w===B.Tz
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fQ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.h9(b4,u,!0)
f=b1.aTo(g)
f.toString
e=b1.aT5(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGt(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGt(k,j,i))}d=s.length
switch(0){case 0:q=b5.cv(new A.hO(m,l))
a0=q.a
a1=q.b
b1.a=new A.iF(0,0,a0,a1)
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
for(q=B.d.fQ(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aTo(g)
e=b1.aT5(g)
e.toString
a9=b1.bQw(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bR8(a6,a3+a9)
b0=g.a
g.a=new A.iF(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h3(d){var w,v,u,t,s,r=this
r.lk(d)
w=d.b
w.ic()
v=A.dp()
u=r.a
v.e9(u.a,u.b,0,1)
w.oU(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].h3(d)
w.nh(0)},
Gr(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ic(){return this.z}}
C.bvh.prototype={}
var z=a.updateTypes(["aA<~>()","R(i0)","R(kF)","~()","R(ne)","a5<m,@>(kF)","G(kF,kF)","m(i0)","kF(a5<@,@>)","R(lk)","R(ui)","ne(a5<@,@>)","ui()","G(lk,lk)","i0(a5<@,@>)","a5<m,@>(i0)","R(r_)","aA<~>(lk)","eG<m?>(i0)","G(i0,i0)","m?(i0)","a5<m,@>(ne)","ZJ(Y)","m(m)","acV(Y)","t(og)","G(ne,ne)","i0(i0)","cL(bv<m,FG>)","cL(JW)","~(i0)","G?(i0)","i0()","ai<i0>()","R(uh)","R(JW)","D(i0)","~(Hv)","R(aet)","t(Hv,m,a0)","Z7(Y)","bv<m,ai<a5<m,@>>>(m,ai<ne>)","~(G)","+count,id,name(G,m,m)(kF)","kF(kF)","a_3(Y)","a_4(Y)","R(lA)","lA()","m(kF)","a0P(Y)","YI(Y)","YH(Y)","Z5(Y)","Z9(Y)","t(r_)","adf(Y)","~(m0)","aA<~>([m?])","L(L,lk)","t(lk)","L(L,r_)","a5<m,@>(r_)","r_(a5<@,@>)","YG(Y)","Sw(Y)","cr(Hu)","lk(a5<@,@>)","uh()","m(lk)","a5<m,@>(lk)","m(S)","G(i0)","kF(a5<m,@>)","Yf(Y)"])
C.fBi.prototype={
$1(d){return d.a+" "+d.b},
$S:125}
C.fBh.prototype={
bkX(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qS(s,d,B.hD,"book",E.Fj),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KV(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bkX(d)},
$S:304}
C.fBj.prototype={
$1(d){return d.b},
$S:125}
C.fKv.prototype={
$1(d){var w=null
return A.eL(w,B.K,new F.Pg(this.a,this.b,w),w,w,0,B.YY,B.d1,w,w,w)},
$S:48}
C.fpT.prototype={
$1(d){return d!=null},
$S:209}
C.fpU.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:209}
C.fpZ.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:176}
C.fz1.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.h9(w,B.rH,w,w,w,w,w,w,w,B.dt,w,w,10.5,w,B.el,w,!0,w,w,w,w),w),u=f?B.el:B.vG
return new A.nM(D.brR,A.a9t(A.a([new A.fS(130,w,v),new A.yW(1,B.FS,A.fc(e,w,w,w,A.h9(w,g==null?D.ee8:g,w,w,w,w,w,w,w,B.dt,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xw,B.lu))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1921}
C.fz0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vu(999)
f=A.x1(A.lv(h,A.fc("Cashier",h,h,h,A.h9(h,D.zr,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.el,h,!0,h,h,h,h),h),h,new A.kD(D.ee_,h,f,B.hI,h),h,h,D.bsk,h))
w=A.x1(A.fc("Debt receipt",h,h,h,A.h9(h,h,h,h,h,h,h,h,h,B.dt,h,h,22,h,B.el,h,!0,h,h,h,h),h))
v=A.x1(A.fc(C.wN(new A.S(Date.now(),0,!1),!0),h,h,h,D.a82,h))
u=A.vu(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.h9(h,h,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.el,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a82,h)
q=A.vu(10)
p=x.C
u=A.lv(h,A.yO(A.a([s,new A.fS(h,2,h),r,new A.fS(h,10,h),A.lv(h,A.yO(A.a([A.fc("Amount owed",h,h,h,D.a82,h),new A.fS(h,2,h),A.fc(A.AK(t.c),h,h,h,A.h9(h,D.zr,h,h,h,h,h,h,h,B.dt,h,h,20,h,B.el,h,!0,h,h,h,h),h)],p),B.r3,B.lu),h,new A.kD(B.pa,h,q,B.hI,h),h,h,D.brx,1/0)],p),B.r3,B.lu),h,new A.kD(E.aHX,h,u,B.hI,h),h,h,D.btm,1/0)
q=new A.nv(D.ee2,0.9,B.kM)
r=A.vu(12)
s=i.c
o=s.$2("Original due",C.wN(t.r,!1))
n=s.$2("Current due",C.wN(t.f,!1))
m=i.d
l=new A.nv(m,1.1,B.kM)
k=A.vu(8)
j=i.a
k=A.a([o,n,new A.fS(h,6,h),A.lv(h,A.x1(A.fc(t.gaKs(),h,h,h,A.h9(h,m,h,h,h,h,h,h,h,B.dt,h,h,11,h,B.el,h,!0,0.5,h,h,h),h)),h,new A.kD(h,new A.pD(l,l,l,l),k,B.hI,h),h,h,D.bss,1/0),new A.fS(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zr))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zr))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.h9(h,B.rH,h,h,h,h,h,h,h,B.dt,h,h,10.5,h,B.el,h,!0,h,h,h,h),h)
m=A.T(o).k("M<1,S3>")
o=A.C(new A.M(o,new C.fz_(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fS(h,4,h),n,new A.fS(h,6,h),new C.b88(5,5,new C.b89(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fS(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fS(h,8,h),w,new A.fS(h,3,h),v,new A.fS(h,16,h),u,new A.fS(h,10,h),A.lv(h,A.yO(k,B.xw,B.lu),h,new A.kD(h,new A.pD(q,q,q,q),r,B.hI,h),h,h,B.ahJ,1/0)],p)
w=j.a
if(w!=null){v=new A.nv(B.Il,1,B.kM)
B.d.v(f,A.a([new A.fS(h,16,h),A.fc("Debtor signature",h,h,h,A.h9(h,B.rH,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.el,h,!0,h,h,h,h),h),new A.fS(h,6,h),A.lv(h,new A.HL(w,B.VH,h,h),h,new A.kD(h,new A.pD(v,v,v,v),A.vu(6),B.hI,h),82,h,B.MK,1/0)],p))}f.push(new A.fS(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.f54,h))
f.push(new A.fS(h,18,h))
f.push(A.x1(A.fc("NGMY.ORG",h,h,h,A.h9(h,D.zr,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.el,h,!0,1.8,h,h,h),h)))
return f},
$S:392}
C.fz_.prototype={
$1(d){var w=null,v=new A.nv(D.Im,0.7,B.kM),u=A.vu(999)
return A.lv(w,A.fc(C.wN(d,!1),w,w,w,A.h9(w,D.Im,w,w,w,w,w,w,w,B.dt,w,w,9.5,w,B.el,w,!0,w,w,w,w),w),w,new A.kD(w,new A.pD(v,v,v,v),u,B.hI,w),w,w,D.bxC,w)},
$S:1922}
C.c1S.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wN(d,!1),w,w,w,w,w,w,D.fbJ,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eD,w,w,w)},
$S:1923}
C.fL0.prototype={
$1(d){var w=null,v=A.aI(d,B.bW,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bPZ,w,w,w,new C.fKY(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eL(w,B.K,new A.cT(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.YN,A.x(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.co,A.cd(A.x(A.a([new A.ex(new C.aYc(r,w),s),B.R,A.B(A.a([A.E(A.eD(B.yI,D.fCu,new C.fKZ(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fa,w,new A.b7(A.n(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a15,D.fz1,new C.fL_(r,d),A.bn(B.aZ,w,w,w,B.c,w,B.fa,w,new A.b7(A.n(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.N,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.N,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Zb,B.d1,w,w,w)},
$S:48}
C.fKY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fKZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m1(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.h0),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eW(B.dD.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.t_(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fL_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fFC(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKT.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eL(w,B.ax,A.x(A.a([new A.D(D.bta,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nC,w,w,w),1),A.aH(w,w,w,w,B.ls,w,w,w,new C.fKR(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.co,new A.D(B.fY,A.bw(A.n(14),A.fP(t,B.A,w,w,B.ci,B.dv,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Mp,new A.a7(1/0,w,A.dn(B.p0,D.aRO,new C.fKS(t,this.c,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.N,0,B.p),w,w,w,B.MB,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fKR.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fKS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t_(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fL4.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eL(w,B.ax,new A.D(D.bti,A.x(A.a([A.B(A.a([D.byE,A.aH(w,w,w,w,B.ls,w,w,w,new C.fL2(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ex(A.bw(A.n(14),A.p(w,A.b3(w,w,w,new C.bai(s.ax,w),B.aw),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.p0,D.aRO,new C.fL3(t,s,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fL2.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fL3.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m1(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.h0),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eW(B.dD.gaP(s))
w=5
return A.b(A.t_(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ftM.prototype={
$1(d){return d.a===this.a},
$S:269}
C.dGb.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dFX.prototype={
bkb(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e0:B.c
s=u.a
w=2
return A.b(A.bS(t,null,new C.dG_(s,q,e),p,!0,!0,!1,B.IC,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dG0(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bkb(d,e)},
$S:1924}
C.dG_.prototype={
$1(d){var w,v=null,u=this.c===B.wg,t=u?D.deR:D.daN
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.aih,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.im(!0,v,v,B.y,L.aOV,new C.dFZ(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ai,v,B.e,B.N,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dFZ.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cS.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.n(14)
if(q)u=B.cS
else u=(t.b.a.d.a?B.bs:B.bm).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aYb(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dFY(t.d,r),s,s,s,s,s,s,s)},
$S:183}
C.dFY.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dG0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dFV.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dFW.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cu,e,v)
return new A.d_(e,!1,A.is(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e2(new C.dFU(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:31}
C.dFU.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e0:B.c,f=A.n(14),e=A.I((h?B.bs:B.bm).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.ek,A.X(B.cC,i.a.d.a?B.bs:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFF(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aSh("Name")
r=l.a
q=r.d==null?k:new C.dFG(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bn:B.lL
n=A.I(B.cS.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bbI(new A.D(B.fC,A.aL(!1,p,!0,A.p(B.A,C.aYb(m==null?"\ud83d\udc64":A.fzQ(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kG,k,B.a7M,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aSW("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dFH(r,a0),r.d===B.wg),1),B.ab,A.E(i.aSW("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dFM(r,a0),r.d===B.a4K),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bI(B.a3,k,k,A.hn(D.bOl,D.fAQ,new C.dFN(r,l.e,a0),A.fy(k,k,k,k,k,k,k,k,k,k,k,B.cS,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ul(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aSi("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.I((t?B.bs:B.bm).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wN(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bC,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bLb],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFO(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aSh("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b00(r.b.length!==0,B.mv,new C.dFP(r,i,a0),new C.dFQ(r,a0),"Upload from gallery","ID photo"))
v.push(i.b00(r.c.length!==0,D.bEs,new C.dFR(r,i,d,a0),new C.dFS(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ah.a7j("Signature (optional)",t,new C.dFT(a0),new C.dFI(a0,t),new C.dFJ(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bm
s=(i?B.bs:B.bm).j(0.28)
s=A.E(A.dV(E.aRH,new C.dFK(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.tN,k,new A.b7(A.n(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bn(B.cS,k,k,k,B.c,k,B.tN,k,new A.b7(A.n(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uQ,k,k,k),new C.dFL(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.x(v,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vC,B.jn,k,k,360)},
$S:161}
C.dFF.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFG.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFH.prototype={
$0(){return this.b.$1(new C.dFE(this.a))},
$S:0}
C.dFE.prototype={
$0(){var w=this.a
w.d=B.wg
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFM.prototype={
$0(){return this.b.$1(new C.dFD(this.a))},
$S:0}
C.dFD.prototype={
$0(){var w=this.a
w.d=B.a4K
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFN.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wR(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dFC(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFC.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gci(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dFP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pc(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dFB(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFB.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dFQ.prototype={
$0(){return this.b.$1(new C.dFA(this.a))},
$S:0}
C.dFA.prototype={
$0(){return this.a.b=""},
$S:0}
C.dFR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e0:B.c
w=3
return A.b(A.bS(q,null,new C.dFy(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pc(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dFz(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFy.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anp,w,w,w,w,new C.dFs(d),!1,w,w,w,w,w,w,w,D.fri,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.ann,w,w,w,w,new C.dFt(d),!1,w,w,w,w,w,w,w,D.fy3,w,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dFs.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dFt.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dFz.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dFS.prototype={
$0(){return this.b.$1(new C.dFx(this.a))},
$S:0}
C.dFx.prototype={
$0(){return this.a.c=""},
$S:0}
C.dFT.prototype={
$0(){return this.a.$1(new C.dFw())},
$S:0}
C.dFw.prototype={
$0(){},
$S:0}
C.dFI.prototype={
$0(){return this.a.$1(new C.dFv(this.b))},
$S:0}
C.dFv.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dFJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahp(u.a,null,null,new C.dFu(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFu.prototype={
$4(d,e,f,g){this.a.$1(new C.dFr(this.b,d))},
$S:451}
C.dFr.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dFK.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFL.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.f0S)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.eYO)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dGe.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dGf.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bm).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AK(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z0(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z0(r).length>0?B.bz:B.cS,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bm
t=(q?B.bs:B.bm).j(0.28)
s=x.p
return new A.d_(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aB,A.B(A.a([A.E(A.dV(B.nD,new C.dGc(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jG,r,new A.b7(A.n(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fys,new C.dGd(d),A.bn(B.cS,r,r,r,B.c,r,B.jG,r,new A.b7(A.n(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bm,E.Z2,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:31}
C.dGc.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dGd.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dG8.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dG9(r),p=r.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bm).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AK(l.c),s,s,s,s,s,s,D.fde,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iB((r.a.d.a?B.bs:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_V,"View receipt",new C.dG1(r,d,l))
u=l.x!=null
t=u?B.rm:B.q2
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.btf,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dG2(r,d,l)),q.$3$icon$label$onTap(B.BD,"Edit",new C.dG3(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mv,"View / download ID",new C.dG4(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bEr,"View / download selfie",new C.dG5(r,d,l)))
if(l.gaFd())p.push(q.$3$icon$label$onTap(A6.a0X,"View / download signature",new C.dG6(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e7,"Delete",new C.dG7(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.vy,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dG9.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.ax
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1925}
C.dG1.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fKX(w,this.c)},
$S:0}
C.dG2.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.RT(this.c)},
$S:0}
C.dG3.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.D2(this.c)},
$S:0}
C.dG4.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bD2(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dG5.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bD2(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dG6.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fL1(w,this.c)},
$S:0}
C.dG7.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.NR(0,this.c)},
$S:0}
C.dGg.prototype={
$1(d){return d.x==null},
$S:269}
C.dGh.prototype={
$1(d){return d.x!=null},
$S:269}
C.dGi.prototype={
$2(d,e){return d+e.c},
$S:1926}
C.dGj.prototype={
$0(){return this.a.bzs()},
$S:0}
C.dGa.prototype={
$0(){return this.a.aeB(this.b)},
$S:0}
C.fup.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fuq.prototype={
$0(){return B.d.gI(D.a28)},
$S:z+68}
C.d6_.prototype={
$0(){var w=this.a
return w.m(new C.d5Y(w,this.b))},
$S:0}
C.d5Y.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d5Z.prototype={
$0(){},
$S:0}
C.d60.prototype={
$0(){var w=this.a.gbYs()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fwD.prototype={
$1(d){return C.h7_(A.a2(d,x.N,x.z))},
$S:z+11}
C.fwE.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fwF.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fJB.prototype={
$1(d){return d.ah()},
$S:z+21}
C.fRL.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ftD.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bNA.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f3(e,v)?v:null},
$S:1927}
C.fK9.prototype={
$1(d){var w=this
return new C.Z7(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d6F.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d6E(w,d))},
$S:z+66}
C.d6E.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6t.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d6q.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d61.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d62.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d6u.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d6a.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e0:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.d68(d),w,w),A.bG(B.wD,new C.d69(d),A.bn(B.mZ,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d68.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d69.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6b.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d6r.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d6s.prototype={
$0(){return B.d.gI(D.yU)},
$S:z+12}
C.d66.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyi(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Sw(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d67.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6c.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YG(v,u,J.ad(w.d),null)},
$S:z+64}
C.d6d.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6D.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aC(s,new C.Yo(r.y,r.gyi(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d6B(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9H(v,e,w,u,t,r.gbPB(),C.hme(r.y.Q),r.gyi(0),s)
w=t}return A.c6(q,new C.d6C(r,e),new A.D(B.Z3,w,s))},
$S:1928}
C.d6C.prototype={
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
u.fE(v*3.141592653589793*0.5)
return A.fv(B.a3,A.de(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.d6B.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGl(B.pP,B.iG)},
$S:0}
C.d6n.prototype={
$0(){var w=this.a
return w.m(new C.d6m(w))},
$S:0}
C.d6m.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6o.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d63.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.jX.j(0.5),r=x.p,q=A.a([D.fpV,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.YD(d,B.dX,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YD(d,L.ali,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ko.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ko.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YD(d,A0.amq,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YD(d,B.q8,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YD(d,B.q8,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eL(u,E.AQ,A.bm(!0,new A.D(A5.xP,A.x(q,B.F,u,B.e,B.N,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aiG,B.d1,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:48}
C.d6p.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d6g.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.Z9(v,J.cJ(w.d),w.r+1,null)},
$S:z+54}
C.d6h.prototype={
$1(d){var w=null
return A.on(!1,A.em(w,w,w,E.AQ,new A.jM(this.a,new C.d6f(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:324}
C.d6f.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7s,B.ol,A.E(A.d(e,w,w,w,w,w,w,B.iP,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d6i.prototype={
$0(){return this.a.a=!1},
$S:52}
C.d6j.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d6k.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6l.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AU(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rj(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d6e(s,t))
w=4
return A.b(s.kZ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6e.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6w.prototype={
$1(d){var w=null
return A.on(!1,A.em(w,w,w,E.AQ,new A.jM(this.a,new C.d6v(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:324}
C.d6v.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7s,B.ol,A.E(A.d(e,w,w,w,w,w,w,B.iP,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d6x.prototype={
$0(){return this.a.a=!1},
$S:52}
C.d6y.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d6z.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d6A.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AU(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kZ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d64.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bhe(B.pP,V.Mc)},
$S:0}
C.d65.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGl(B.pP,V.Mc)},
$S:0}
C.d8p.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8q.prototype={
$1(d){var w=this.a
return w.m(new C.d8o(w))},
$S:9}
C.d8o.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d8r.prototype={
$1(d){var w=this.a
return w.m(new C.d8n(w))},
$S:9}
C.d8n.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d8s.prototype={
$1(d){var w=this.a
return w.m(new C.d8m(w))},
$S:9}
C.d8m.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d8t.prototype={
$0(){var w=this.a
return w.m(new C.d8l(w,this.b))},
$S:0}
C.d8l.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.d8u.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1j()
A.a6(this.b,!1).O(new A.boj(w,v))},
$S:0}
C.d6U.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6T.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Z5(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d6Y.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d6X.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7n(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hG,v,v,v)
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.d6V(d),v,v),A.bG(B.wD,new C.d6W(d),A.bn(B.mZ,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AQ,w,v,v,v,v,D.foM,v)},
$S:20}
C.d6V.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d6W.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6Z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7_.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bV(B.bA,r,B.br,18,14),B.r,t,B.y,t,D.bua,t,t,B.ah)},
$S:312}
C.d6S.prototype={
$0(){return this.a.PT(0,this.b)},
$S:0}
C.d6R.prototype={
$0(){return this.a.Pn(0,this.b)},
$S:0}
C.cFu.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cFv.prototype={
$0(){return B.d.gI(D.yU)},
$S:z+12}
C.cFw.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bZ(0,new A.D(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1930}
C.cYW.prototype={
$1(d){return this.a.m(new C.cYV(this.b,this.c))},
$S:9}
C.cYV.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cZk.prototype={
$1(d){return this.a.m(new C.cZ7())},
$S:2}
C.cZ7.prototype={
$0(){},
$S:0}
C.cZl.prototype={
$1(d){return this.a.m(new C.cZ6())},
$S:2}
C.cZ6.prototype={
$0(){},
$S:0}
C.cZm.prototype={
$0(){var w=this.a
return w.m(new C.cZ5(w,this.b))},
$S:0}
C.cZ5.prototype={
$0(){var w=this.a
return w.d=w.go4().FA(this.b.a)},
$S:0}
C.cZn.prototype={
$0(){var w=this.a
return w.m(new C.cZ4(w,this.b))},
$S:0}
C.cZ4.prototype={
$0(){var w=this.a
return w.d=w.go4().cHk(this.b)},
$S:0}
C.cZo.prototype={
$1(d){return this.a.m(new C.cZ3())},
$S:2}
C.cZ3.prototype={
$0(){},
$S:0}
C.cZp.prototype={
$0(){var w=this.a
return w.m(new C.cZ2(w,this.b))},
$S:0}
C.cZ2.prototype={
$0(){var w=this.a
return w.d=w.go4().cHp(this.b.a)},
$S:0}
C.cZq.prototype={
$1(d){var w=this.a
return w.m(new C.cZf(w,d))},
$S:6}
C.cZf.prototype={
$0(){var w=this.a
return w.d=w.go4().cIj(this.b)},
$S:0}
C.cZr.prototype={
$1(d){var w=this.a
return w.d=w.go4().aDq(d)},
$S:2}
C.cZs.prototype={
$1(d){var w=this.a
return w.d=w.go4().cHs(d)},
$S:2}
C.cZu.prototype={
$1(d){var w=this.a
return w.d=w.go4().cIh(d)},
$S:2}
C.cZv.prototype={
$1(d){var w=this.a
return w.m(new C.cZe(w,d))},
$S:9}
C.cZe.prototype={
$0(){var w=this.a
return w.d=w.go4().cI8(this.b)},
$S:0}
C.cZw.prototype={
$0(){var w=this.a,v=w.go4(),u=B.a.i(w.gyi(0).a.a),t=B.a.i(w.gaAC().a.a)
u=v.bbZ(B.a.i(w.gaqm().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dUa.prototype={
$0(){var w=this.a
w.vP()
w.a.bs()
w.a.pR()},
$S:0}
C.dU9.prototype={
$0(){var w=this.a
w.vP()
w.a.bs()
w.a.pR()},
$S:0}
C.dUc.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dUd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUe.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dU8.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dUb.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dUg.prototype={
$0(){this.a.Om()
return null},
$S:0}
C.dUf.prototype={
$0(){return this.a.Eq(this.b)},
$S:0}
C.dTB.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.df,w,w,!0,w,w,new C.dTz(d),w,w),r=A.bn(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dTA(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dTz.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTA.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dTC.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cHO(this.b)},
$S:0}
C.dTw.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSx(w.b,w.c,w.d)},
$S:8}
C.dT4.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dT5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gr(t.a.c),$async$$0)
case 2:s=r.rh(q.dJ(e,new C.dTh(t)))
if(s!=null&&t.c!=null)t.m(new C.dTi(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTh.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dTi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTk.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dTl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTv.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cIB(C.hmo(w),w)},
$S:0}
C.dTt.prototype={
$1(d){return new A.e2(new C.dTs(this.a,this.b),null)},
$S:21}
C.dTs.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e0:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.an2,v,v,v,p>0?new C.dTo(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.x(A.a([r,B.aR,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.anB,v,v,v,new C.dTp(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.N,0,B.p)
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dTq(d),v,v),A.bG(B.pn,new C.dTr(d),A.bn(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:166}
C.dTo.prototype={
$0(){return this.b.$1(new C.dTn(this.a))},
$S:0}
C.dTn.prototype={
$0(){return--this.a.a},
$S:0}
C.dTp.prototype={
$0(){return this.b.$1(new C.dTm(this.a))},
$S:0}
C.dTm.prototype={
$0(){return++this.a.a},
$S:0}
C.dTq.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTr.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dTu.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cIo(this.a.a)
w.r.a8(0)},
$S:0}
C.dST.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahx(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hg3(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dSU.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDn(w)},
$S:0}
C.dTE.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acV(this.b,w,this.c,null)},
$S:z+24}
C.dTy.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e0:B.c,t=A.n(20),s=A.X(B.lo,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bG(D.fzD,new C.dTx(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:20}
C.dTx.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dSV.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dSW.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dSX.prototype={
$1(d){return d.a},
$S:z+7}
C.dSY.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i0(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDn(w)},
$S:0}
C.dT1.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahx(q)
w=A.T(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dT_(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hg3(v.e,null,r,v.f,v.r,new C.dT0(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dT0.prototype={
$0(){return this.a.a9G(this.b)},
$S:0}
C.dT_.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dT2.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("M<1,i0>")
w=A.C(new A.M(w,new C.dSZ(this.b),v),v.k("ak.E"))
u.d=t.aDn(w)},
$S:0}
C.dSZ.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dTD.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dTe.prototype={
$1(d){return d.length!==0},
$S:3}
C.dTf.prototype={
$1(d){var w=this
return new A.e2(new C.dTd(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dTd.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e0:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dT9(u,e,o),A.T(o).k("M<1,t>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(12),B.dh),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.m6,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ai,v,B.e,B.N,0,B.p)
t=w.a
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dTa(d),v,v),A.bG(B.Jy,new C.dTb(t,u,o,e),A.bn(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fmS,new C.dTc(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:166}
C.dT9.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bRV,w,w,w,new C.dT8(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1931}
C.dT8.prototype={
$0(){return this.a.$1(new C.dT6(this.b,this.c))},
$S:0}
C.dT6.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dTa.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTb.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dT7(w.c,u))
v.bP(0,B.c8)}},
$S:0}
C.dT7.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dTc.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dTg.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJ2(this.b,D.tT,C.Gp(v,w.a.c))},
$S:0}
C.dTL.prototype={
$1(d){return d.as},
$S:z+1}
C.dTM.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iQ(this.b,w)},
$S:0}
C.dTN.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iau(v)
return w.Vz(v==null?null:v.a)},
$S:0}
C.dTO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hNN(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cqP(new A.ar(u,t),v.gbi5(),new A.ar(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cQI:D.cP5
q=A.I(s?B.dm:D.bc4,B.q,1)
p=A.n(22)
o=A.bZ(0,A.b3(m,m,m,new C.bd4(s,m),B.aw),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.uu(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdY(l.d,v,l.f,w,new C.dTH(l),l.gcaK(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvo(s,new C.dTI(l,e),new C.dTJ(l,e),new C.dTK(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b4,B.x,r,m,m),B.n),m,m,m,R.ahN,m,m,m,m)},
$S:204}
C.dTH.prototype={
$1(d){var w=this.a
w.m(new C.dTF(w,d))},
$S:2}
C.dTF.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dTI.prototype={
$0(){var w=this.b
return this.a.b9E(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dTJ.prototype={
$0(){var w=this.b
return this.a.b9E(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dTK.prototype={
$0(){var w=this,v=w.b
return w.a.aSx(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbi5())},
$S:0}
C.dTP.prototype={
$0(){var w=this.a
return w.m(new C.dTG(w))},
$S:0}
C.dTG.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dT3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fN(new A.fE(s.c)),$async$$0)
case 2:t.xL("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d73.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhG(u,C.hqv(v.c,u),new C.d72(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d72.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d74.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bl1(d.d,d.c,u.f.t(0,d.a),new C.d71(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d71.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fut.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.rh(new A.cO(new A.a_(v,new C.fuu(d),w.k("a_<1>")),new C.fuv(),w.k("cO<1,m>")))},
$S:z+20}
C.fuu.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fuv.prototype={
$1(d){return d.a},
$S:z+7}
C.fur.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fus.prototype={
$1(d){return d.b},
$S:z+7}
C.fuy.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.rh(new A.cO(new A.a_(v,new C.fuz(d),w.k("a_<1>")),new C.fuA(),w.k("cO<1,m>")))},
$S:z+20}
C.fuz.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fuA.prototype={
$1(d){return d.a},
$S:z+7}
C.fuw.prototype={
$1(d){var w,v=A.ev([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fux.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d76.prototype={
$0(){return this.a},
$S:z+32}
C.d7n.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:236}
C.d7f.prototype={
$2(d,e){var w=this.a.c9(0,d,new C.d7g()),v=J.a4(w)
if(!v.t(w,e))v.L(w,e)},
$S:113}
C.d7g.prototype={
$0(){return A.a([],x.s)},
$S:742}
C.d7e.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f3(w,e)
return w===!0},
$S:284}
C.d77.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d7d.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d7c.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.Co:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.T:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.Co:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1933}
C.d78.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d7h.prototype={
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
t=J.aW(t==null?D.Co:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b6(w,new C.d7i(r)))w.push(r)}}B.d.bq(w,new C.d7j(a8))
B.d.aZ(w,new C.d7k())
q=C.hNM(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eCE],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bo3(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1934}
C.d7i.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d7j.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d7k.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d7l.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cJ(0,0,B.pu)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:652}
C.d7m.prototype={
$1(d){return 16+d*156},
$S:252}
C.d75.prototype={
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
t.n(0,d,new C.FG(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FG(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FG(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JW(d,new A.v(e+t,w),s,s.length))}},
$S:193}
C.d79.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIu(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:113}
C.d7a.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d7b.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:743}
C.d7o.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:743}
C.d7p.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:469}
C.d7q.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:191}
C.d7r.prototype={
$1(d){return d>=0.5},
$S:119}
C.fbP.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hx(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1936}
C.eNH.prototype={
$1(d){var w=null,v=A.n(8),u=B.bT.j(0.12),t=A.n(8)
return new A.D(B.ne,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f8V,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.MJ,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eNG(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eNG.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dnh.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dng.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nA,B.L,w,w)
return A.em(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.dne(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mi,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dnf(d),w,w)],x.p),B.b9,B.Bb,w,u,D.bvq,w,D.bxn,new A.b7(v,B.Y),w,w)},
$S:20}
C.dne.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dnf.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dnq.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dnr.prototype={
$1(d){var w=this.a
return w.m(new C.dnp(w,d))},
$S:z+37}
C.dnp.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dns.prototype={
$1(d){var w=null
return A.qo(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnv.prototype={
$1(d){var w=this.a
return w.m(new C.dno(w,d))},
$S:32}
C.dno.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dnu.prototype={
$1(d){var w=null
return A.qo(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnw.prototype={
$1(d){var w=this.a
return w.m(new C.dnn(w,d))},
$S:32}
C.dnn.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnx.prototype={
$0(){var w=this.a
return w.m(new C.dnm(w))},
$S:0}
C.dnm.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dny.prototype={
$0(){var w=this.a
return w.m(new C.dnl(w))},
$S:0}
C.dnl.prototype={
$0(){return++this.a.at},
$S:0}
C.dnz.prototype={
$0(){var w=this.a
return w.m(new C.dnk(w))},
$S:0}
C.dnk.prototype={
$0(){return--this.a.ax},
$S:0}
C.dnA.prototype={
$0(){var w=this.a
return w.m(new C.dnj(w))},
$S:0}
C.dnj.prototype={
$0(){return++this.a.ax},
$S:0}
C.dnB.prototype={
$1(d){var w=this.a
return w.m(new C.dni(w,d))},
$S:9}
C.dni.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dnt.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dnC.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.e0:B.c
v=A.n(12)
if(p)u=B.bT
else u=(q.c.a?B.e2:B.bN).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bs:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bs:B.bm
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,B.jG,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dnD(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dnD.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dnM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c8p.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.c8w.prototype={
$1(d){return d.ah()},
$S:z+5}
C.c8x.prototype={
$2(d,e){var w=J.b6(e,new C.c8v(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c8v.prototype={
$1(d){return d.ah()},
$S:z+21}
C.c8r.prototype={
$1(d){return C.akp(A.a2(d,x.N,x.z))},
$S:z+8}
C.c8s.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c8t.prototype={
$1(d){return C.h7_(A.a2(d,x.N,x.z))},
$S:z+11}
C.c8u.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c8B.prototype={
$1(d){return new A.aFz(d.f.length,d.a,d.b)},
$S:z+43}
C.c8C.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:563}
C.c8y.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c8z.prototype={
$1(d){return d.cI0(C.Gp(d,this.a))},
$S:z+44}
C.dTY.prototype={
$1(d){return C.u1(d,this.a.a.c)},
$S:z+2}
C.dTZ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dU2.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dU3.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dTV.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZF(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yj("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p8(r.c,r.e),$async$$0)
case 4:s.yj(p)
w=5
return A.b(s.Jr(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZF(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yj("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p8(r.c,r.e),$async$$0)
case 4:s.yj(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UU(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yj("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yj("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yj("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jr(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yj(B.a.eg(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dU1.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZE(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yj("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cm(A.e9(new C.dU0(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p8(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dU0.prototype={
$1(d){var w=this.b
return new C.a_3(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dU_.prototype={
$1(d){return D.h59},
$S:z+46}
C.dU5.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dU6.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dU4(w,d)
return new A.D(B.da,new C.be1(this.b,d.c,d.a,w,null),null)},
$S:1937}
C.dU4.prototype={
$0(){return this.a.Xh(this.b.b)},
$S:0}
C.dTQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTR.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dTS.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dTT.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dTU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dU7.prototype={
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
$S:177}
C.dFj.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dFk.prototype={
$0(){return B.d.gI(D.a3C)},
$S:z+48}
C.dFl.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cWX,44),w,w,w),w,w,new C.biO(u,t,v,w),B.aw)},
$S:71}
C.fKC.prototype={
$1(d){return A.oT(new C.fKB(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:143}
C.fKB.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e0:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rG,24)],x.V),o=r?B.e2:B.bN
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bMq,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.aiL,A.B(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.eX0,new C.fKA(this.b,s),20,B.ail,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kL,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fKA.prototype={
$2(d,e){var w=null,v=D.a3C[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.I(s?B.e2:B.bN,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.n(15),o=A.E(new C.a5Y(v.a,!0,w),1),n=s?B.jC:B.iX,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eH(A.bw(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.kY,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fKz(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:75}
C.fKz.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cg5.prototype={
$0(){return this.a.afE(this.b)},
$S:0}
C.fJZ.prototype={
$1(d){return D.h16},
$S:z+74}
C.fRs.prototype={
$1(d){var w=this
return new C.a0P(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fK3.prototype={
$1(d){return new C.YI(this.a,null)},
$S:z+51}
C.fK2.prototype={
$1(d){return D.h25},
$S:z+52}
C.cZI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cZH(w,d))},
$S:32}
C.cZH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cZK.prototype={
$1(d){return this.a.K0()},
$S:2}
C.cZL.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZE.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZF.prototype={
$1(d){return this.a.K0()},
$S:2}
C.cZG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cxh.prototype={
$0(){},
$S:0}
C.cxn.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cxo.prototype={
$0(){return this.a.aNW(-1)},
$S:0}
C.cxp.prototype={
$1(d){return this.a.m(new C.cxm())},
$S:2}
C.cxm.prototype={
$0(){},
$S:0}
C.cxq.prototype={
$0(){return this.a.aNW(1)},
$S:0}
C.cxr.prototype={
$1(d){return this.a.m(new C.cxl())},
$S:2}
C.cxl.prototype={
$0(){},
$S:0}
C.cxs.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e2:B.bN
return A.uk(u,u,B.aZ,r,u,new C.cxk(t,d),B.Bn,s,w,u,new A.ay(v,1,B.q,-1),B.ce)},
$S:1938}
C.cxk.prototype={
$1(d){var w=this.a
return w.m(new C.cxi(w,this.b))},
$S:9}
C.cxi.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cxt.prototype={
$1(d){return this.a.m(new C.cxj())},
$S:2}
C.cxj.prototype={
$0(){},
$S:0}
C.cxu.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fbh.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fbi.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fbj.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fbf.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyB()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bxm,new A.ex(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bvd(p,v,this.b.a,u,t,r),r,r,B.aw)},
$S:71}
C.fbg.prototype={
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
s=A.aq(B.aV,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eH(D.ec1,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.dc(-1.2+t,-0.5),new A.dc(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:134}
C.fID.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:70}
C.eKR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eKI.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eKJ.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eKP.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e2(new C.eKO(w,this.b),null)},
$S:21}
C.eKO.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e0:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eL(w,u,new A.D(B.aiE,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hcR(new C.eKL(r,e),r.a),B.aB,A.B(A.a([A.E(A.dV(B.df,new C.eKM(d),w),1),B.at,A.E(A.bG(B.Uc,new C.eKN(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(t,B.Y),w)},
$S:99}
C.eKL.prototype={
$1(d){return this.b.$1(new C.eKK(this.a,d))},
$S:32}
C.eKK.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eKM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eKN.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eKQ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sx(this.b)},
$S:0}
C.eKD.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbx(w)},
$S:0}
C.eKH.prototype={
$1(d){return this.bkE(d)},
bkE(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L6(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iQ(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eKG.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eKF(this.b),v),v.k("J.E"))
u.d=t.bbx(w)},
$S:0}
C.eKF.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eKS.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iQ(this.b,w)},
$S:0}
C.eKT.prototype={
$1(d){return this.a.bCG(d,this.b)},
$S:z+55}
C.eKE.prototype={
$0(){return this.a.a9F(this.b)},
$S:0}
C.fRi.prototype={
$1(d){return new C.adf(this.a,this.b,this.c,null)},
$S:z+56}
C.eKV.prototype={
$0(){return this.a.ZZ(this.b)},
$S:0}
C.eKW.prototype={
$0(){return this.a.PP(this.b)},
$S:0}
C.eKX.prototype={
$0(){return this.a.El(this.b)},
$S:0}
C.eKY.prototype={
$0(){return this.a.a__(this.b)},
$S:0}
C.eKU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eKy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eKz.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eKA.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eKC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eKB(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKB.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eLk.prototype={
$2(d,e){return d+e.gwV()},
$S:z+59}
C.eLg.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eLh.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eL1.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e0:B.c,s=A.n(24),r=A.p(v,D.bMR,B.f,v,v,new A.o(B.av.j(u?0.18:0.08),v,A.I(B.av.j(0.28),B.q,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.ax
u=u?B.e2:B.bN
w=x.p
return A.eL(v,t,new A.D(B.xT,A.x(A.a([r,B.aR,q,B.O,p,B.d7,A.B(A.a([A.E(A.dV(B.nD,new C.eL_(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fa,v,new A.b7(A.n(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fDo,new C.eL0(d),A.bn(B.av,v,v,v,v,v,B.fa,v,new A.b7(A.n(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.N,0,B.p),v),v,v,v,v,B.d1,v,new A.b7(s,B.Y),v)},
$S:48}
C.eL_.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eL0.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eLa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e0:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fP,28)],x.V),g=k?D.d2F:B.a2X,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eQM,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cx,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.az,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aiI,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4I(B.b6,B.j2,new C.eL7(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b4I(B.cz,M.yx,new C.eL8(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.av.j(k?0.14:0.06)
q=A.n(16)
p=A.I(B.av.j(0.28),B.q,1)
o=A.p(m,D.bMe,B.f,m,m,new A.o(B.av.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vA,A.p(m,A.x(A.a([g,new A.D(B.aiF,A.x(A.a([w,B.R,u,B.by,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.be,n,A.X(B.ey,k?B.bs:B.bm,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eL9(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eL7.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vp("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eL8.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vp("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eL9.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.NE(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eL5.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e0:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e2:B.bN
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bs:B.bm
u=A.bw(w,new A.a7(48,48,C.aPO(!0,A.n(12),48,N.Nj,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AK(v.gwV())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vA,A.p(q,A.x(A.a([B.R,k,new A.D(D.aiC,A.B(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.B2,r.ckU(B.ub,B.aV,new C.eL3(d),p,"QR code or backup file","Transfer project"),r.b1F(!0,B.e7,B.av,new C.eL4(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eL3.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eL4.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eL6.prototype={
$1(d){return this.bkF(d)},
bkF(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.L6(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vD(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eLn.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eLm(w))},
$S:0}
C.eLm.prototype={
$0(){return this.a.r++},
$S:0}
C.eLo.prototype={
$0(){var w=this.a
return w.m(new C.eLl(w))},
$S:0}
C.eLl.prototype={
$0(){return this.a.r++},
$S:0}
C.eKZ.prototype={
$0(){var w=this.a.c
w.toString
return A.iQ(w,null)},
$S:0}
C.eL2.prototype={
$0(){return this.a.cee(this.b)},
$S:0}
C.eLj.prototype={
$0(){var w=this.a
return w.m(new C.eLi(w,this.b))},
$S:0}
C.eLi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eLd.prototype={
$0(){return this.a.vp("scan")},
$S:0}
C.eLe.prototype={
$0(){return this.a.vp("file")},
$S:0}
C.eLf.prototype={
$1(d){return this.a.ckV(d,this.b)},
$S:z+60}
C.eLc.prototype={
$0(){return this.a.Ep(this.b)},
$S:0}
C.eLb.prototype={
$0(){return this.a.a_u(this.b,this.c)},
$S:0}
C.cwJ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cwI.prototype={
$1(d){return d.ah()},
$S:z+62}
C.cwG.prototype={
$1(d){return C.hwk(A.a2(d,x.N,x.z))},
$S:z+63}
C.cwH.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.ftv.prototype={
$1(d){return d.y===D.kv},
$S:z+2}
C.fRT.prototype={
$1(d){return C.bB_(d,this.a)},
$S:z+2}
C.frG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bNF.prototype={
$1(d){return!d.as},
$S:z+1}
C.bNE.prototype={
$1(d){return d.ah()},
$S:z+15}
C.bNB.prototype={
$1(d){return C.h70(A.a2(d,x.N,x.z))},
$S:z+14}
C.bNC.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bND.prototype={
$1(d){return J.k(d)},
$S:17}
C.fiQ.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.few.prototype={
$1(d){return C.fYk(A.a2(d,x.N,x.z))},
$S:z+67}
C.fex.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fey.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fJQ.prototype={
$1(d){return J.k(d)},
$S:17}
C.fJR.prototype={
$1(d){return d.a},
$S:z+69}
C.fJS.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJT.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fJU.prototype={
$1(d){return d.Sx(null).ah()},
$S:z+70}
C.fRR.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.ftX.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fwJ.prototype={
$1(d){return C.akp(A.a2(d,x.N,x.z))},
$S:z+8}
C.fwK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwL.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fwM.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fwN.prototype={
$1(d){return C.u1(d,this.a)},
$S:z+2}
C.fJD.prototype={
$1(d){return C.u1(d,this.a)},
$S:z+2}
C.fRM.prototype={
$1(d){return C.akp(A.a2(d,x.N,x.z))},
$S:z+8}
C.fRN.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fRO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ftE.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.ftF.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fRY.prototype={
$1(d){return!d.as},
$S:z+1}
C.fta.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.ftb.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.ftc.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fRt.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fxv.prototype={
$1(d){return d.Q},
$S:z+72}
C.fJw.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fwG.prototype={
$1(d){return C.akp(A.a2(d,x.N,x.z))},
$S:z+8}
C.fwH.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwI.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fJr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ff3.prototype={
$1(d){return d.length!==0},
$S:3}
C.ff4.prototype={
$1(d){return C.h70(A.a2(d,x.N,x.z))},
$S:z+14}
C.ff5.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.ff6.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.ff7.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffk.prototype={
$2(d,e){return d.eR(new C.ffl(e))},
$S:1939}
C.ffl.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.ca},
$S:1940}
C.ffh.prototype={
$1(d){return C.hSn(d,this.a)},
$S:z+73}
C.ffi.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ffj.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fju.prototype={
$1(d){return d.a},
$S:z+49}
C.fjv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fjw.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fm9.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fr_.prototype={
$1(d){return C.hin(d,C.Gp(d,this.a))},
$S:z+5}
C.fr0.prototype={
$1(d){return C.hio(d,C.Gp(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKQ.prototype
w.buL=w.q
w=C.aN0.prototype
w.bx8=w.q
w=C.aN1.prototype
w.bx9=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCk.prototype,"gchR","chS",25)
var s
w(s=C.azo.prototype,"gcaQ","caR",42)
v(s,"gaMb","Nc",0)
v(s,"gcqa","AL",0)
v(s,"gbKs","NS",0)
v(s,"gcEe","yk",0)
v(s,"gcjS","a0b",0)
v(s,"gbFR","NA",0)
v(s,"gbKT","WJ",0)
w(s,"gbPB","bPC",71)
v(s,"gbAf","zN",0)
v(C.azp.prototype,"gcEa","Fg",0)
v(s=C.aCV.prototype,"gafg","vE",0)
v(s,"gcdu","a_l",0)
v(s,"gaQf","HP",0)
v(s=C.aCS.prototype,"gcAj","a2i",0)
v(s,"gafg","vE",0)
v(s,"gcob","a0R",0)
v(s,"gcer","a_z",0)
w(s,"gcaK","caL",30)
v(s,"gbKK","HU",0)
v(s,"gcBn","cBo",3)
v(s,"gc1h","Yp",0)
w(s,"gc9f","c9g",23)
v(s,"gcde","cdf",3)
v(s=C.aBj.prototype,"gc73","Po",0)
v(s,"gc75","c76",3)
v(s,"gbHo","a9h",0)
v(s=C.aCU.prototype,"gbO5","Xd",0)
v(s,"gbYz","XS",0)
v(s,"gcuD","a1H",0)
v(s,"gcqK","a1i",0)
v(C.aCT.prototype,"gcqs","ah0",0)
v(C.as3.prototype,"gc9d","ZY",0)
v(C.ay9.prototype,"ga21","K0",3)
v(C.ay8.prototype,"ga21","K0",3)
v(C.awT.prototype,"ga21","K0",3)
v(s=C.aEp.prototype,"gb13","Qj",0)
v(s,"gbz3","Vt",0)
v(s,"gcef","ceg",3)
w(C.aEo.prototype,"gca4","ca5",57)
u(C.aEq.prototype,"gaQ9",0,0,null,["$1","$0"],["HO","bIF"],58,0,0)
t(C,"hpG","i14",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.anW,C.uh,C.ne,C.Hu,C.aet,C.JO,C.ui,C.JW,C.FG,C.be_,C.aIu,C.ap7,C.d7s,C.lA,C.aSK,C.aSJ,C.aQJ,C.tR,C.r_,C.lk,C.i0,C.kF,C.aGt])
u(A.hZ,[C.fBi,C.fBh,C.fBj,C.fKv,C.fpT,C.fpU,C.fpZ,C.fz1,C.fz0,C.fz_,C.c1S,C.fL0,C.fKT,C.fL4,C.ftM,C.dG_,C.dFV,C.dFW,C.dFy,C.dFu,C.dGe,C.dGf,C.dG8,C.dG9,C.dGg,C.dGh,C.fup,C.fwD,C.fwE,C.fJB,C.fRL,C.ftD,C.fK9,C.d6F,C.d61,C.d6a,C.d6r,C.d66,C.d6c,C.d63,C.d6g,C.d6h,C.d6f,C.d6w,C.d6v,C.d8q,C.d8r,C.d8s,C.d6T,C.d6Y,C.d6X,C.cFu,C.cFw,C.cYW,C.cZk,C.cZl,C.cZo,C.cZq,C.cZr,C.cZs,C.cZu,C.cZv,C.dUb,C.dTB,C.dTw,C.dT4,C.dTh,C.dTk,C.dTt,C.dST,C.dTE,C.dTy,C.dSV,C.dSW,C.dSX,C.dT1,C.dT_,C.dSZ,C.dTe,C.dTf,C.dT9,C.dTL,C.dTH,C.d73,C.d74,C.fut,C.fuu,C.fuv,C.fur,C.fus,C.fuy,C.fuz,C.fuA,C.fuw,C.fux,C.d7n,C.d7d,C.d78,C.d7i,C.d7j,C.d7m,C.d7a,C.d7p,C.d7q,C.d7r,C.fbP,C.eNH,C.dng,C.dnq,C.dnr,C.dns,C.dnv,C.dnu,C.dnw,C.dnB,C.dnC,C.c8w,C.c8v,C.c8r,C.c8s,C.c8t,C.c8u,C.c8B,C.c8y,C.c8z,C.dTY,C.dU0,C.dU_,C.dU6,C.dU7,C.dFj,C.fKC,C.fJZ,C.fRs,C.fK3,C.fK2,C.cZJ,C.cZK,C.cZF,C.cxp,C.cxr,C.cxs,C.cxk,C.cxt,C.fbh,C.fID,C.eKP,C.eKL,C.eKH,C.eKF,C.eKT,C.fRi,C.eL1,C.eLa,C.eL5,C.eL6,C.eLf,C.cwI,C.cwG,C.cwH,C.ftv,C.fRT,C.frG,C.bNF,C.bNE,C.bNB,C.bNC,C.bND,C.few,C.fex,C.fJQ,C.fJR,C.fJS,C.fJT,C.fJU,C.fRR,C.ftX,C.fwJ,C.fwK,C.fwM,C.fwN,C.fJD,C.fRM,C.fRN,C.fRO,C.ftE,C.ftF,C.fRY,C.fta,C.ftb,C.fRt,C.fxv,C.fJw,C.fwG,C.fwH,C.fJr,C.ff3,C.ff4,C.ff5,C.ff6,C.ff7,C.ffl,C.ffh,C.ffi,C.fju,C.fjv,C.fm9,C.fr_,C.fr0])
u(A.au,[C.aYc,C.akn,C.aTY,C.Yo,C.b9H,C.bdY,C.bhG,C.bvo,C.bl1,C.acU,C.bhF,C.acT,C.bhE,C.aBk,C.aHw,C.acV,C.JK,C.bdZ,C.aca,C.bdX,C.be1,C.aYa,C.as3,C.adf])
u(A.mN,[C.bai,C.bbv,C.bbm,C.aGo,C.bgJ,C.be0,C.bd4,C.biO,C.bvd])
u(A.ja,[C.fKY,C.fKZ,C.fL_,C.fKR,C.fKS,C.fL2,C.fL3,C.dGb,C.dFY,C.dG0,C.dFF,C.dFG,C.dFH,C.dFE,C.dFM,C.dFD,C.dFN,C.dFO,C.dFC,C.dFP,C.dFB,C.dFQ,C.dFA,C.dFR,C.dFs,C.dFt,C.dFz,C.dFS,C.dFx,C.dFT,C.dFw,C.dFI,C.dFv,C.dFJ,C.dFr,C.dFK,C.dFL,C.dGc,C.dGd,C.dG1,C.dG2,C.dG3,C.dG4,C.dG5,C.dG6,C.dG7,C.dGj,C.dGa,C.fuq,C.d6_,C.d5Y,C.d5Z,C.d60,C.d6E,C.d6t,C.d6q,C.d62,C.d6u,C.d68,C.d69,C.d6b,C.d6s,C.d67,C.d6d,C.d6B,C.d6n,C.d6m,C.d6o,C.d6p,C.d6i,C.d6k,C.d6l,C.d6e,C.d6x,C.d6A,C.d64,C.d65,C.d8p,C.d8o,C.d8n,C.d8m,C.d8t,C.d8l,C.d8u,C.d6U,C.d6V,C.d6W,C.d6Z,C.d6S,C.d6R,C.cFv,C.cYV,C.cZ7,C.cZ6,C.cZm,C.cZ5,C.cZn,C.cZ4,C.cZ3,C.cZp,C.cZ2,C.cZf,C.cZe,C.cZw,C.dUa,C.dU9,C.dUc,C.dUd,C.dUe,C.dU8,C.dUg,C.dUf,C.dTz,C.dTA,C.dTC,C.dT5,C.dTj,C.dTi,C.dTl,C.dTv,C.dTo,C.dTn,C.dTp,C.dTm,C.dTq,C.dTr,C.dTu,C.dSU,C.dTx,C.dSY,C.dT0,C.dT2,C.dTD,C.dT8,C.dT6,C.dTa,C.dTb,C.dT7,C.dTc,C.dTg,C.dTM,C.dTN,C.dTF,C.dTI,C.dTJ,C.dTK,C.dTP,C.dTG,C.dT3,C.d72,C.d71,C.d76,C.d7g,C.d77,C.eNG,C.dnh,C.dne,C.dnf,C.dnp,C.dno,C.dnn,C.dnx,C.dnm,C.dny,C.dnl,C.dnz,C.dnk,C.dnA,C.dnj,C.dni,C.dnt,C.dnD,C.dnM,C.dTZ,C.dU2,C.dU3,C.dTV,C.dTW,C.dTX,C.dU1,C.dU5,C.dU4,C.dTQ,C.dTR,C.dTS,C.dTT,C.dTU,C.dFk,C.fKz,C.cg5,C.cZI,C.cZH,C.cZL,C.cZE,C.cZG,C.cxh,C.cxn,C.cxo,C.cxm,C.cxq,C.cxl,C.cxi,C.cxj,C.cxu,C.fbi,C.fbj,C.eKR,C.eKI,C.eKJ,C.eKK,C.eKM,C.eKN,C.eKQ,C.eKD,C.eKG,C.eKS,C.eKE,C.eKV,C.eKW,C.eKX,C.eKY,C.eKU,C.eKy,C.eKz,C.eKA,C.eKC,C.eKB,C.eLg,C.eLh,C.eL_,C.eL0,C.eL7,C.eL8,C.eL9,C.eL3,C.eL4,C.eLn,C.eLm,C.eLo,C.eLl,C.eKZ,C.eL2,C.eLj,C.eLi,C.eLd,C.eLe,C.eLc,C.eLb])
u(A.ag,[C.ao2,C.Sw,C.Z5,C.Z9,C.Z7,C.YG,C.apa,C.ap4,C.ZJ,C.ap8,C.a_3,C.a_4,C.a5Y,C.YI,C.YH,C.Yf,C.a0P,C.Ft,C.awM,C.as2,C.arX,C.as1,C.NV])
u(A.ah,[C.aCk,C.bdV,C.azo,C.bef,C.azp,C.bbt,C.aCV,C.aCS,C.aBj,C.aCU,C.aCT,C.bj8,C.aKQ,C.ay9,C.ay8,C.awT,C.bvg,C.aN0,C.aN1,C.aEp,C.bkv,C.aEo,C.bx1])
u(A.km,[C.dFX,C.dFZ,C.dFU,C.dGi,C.fwF,C.bNA,C.d6D,C.d6C,C.d6j,C.d6y,C.d6z,C.d7_,C.dTs,C.dTd,C.dTO,C.d7f,C.d7e,C.d7c,C.d7h,C.d7k,C.d7l,C.d75,C.d79,C.d7b,C.d7o,C.c8p,C.c8x,C.c8C,C.dFl,C.fKB,C.fKA,C.fbf,C.fbg,C.eKO,C.eLk,C.cwJ,C.fiQ,C.fey,C.fwL,C.ftc,C.fwI,C.ffk,C.ffj,C.fjw])
t(C.biP,C.aKQ)
u(A.mc,[C.abd,C.aJb,C.Hv,C.ako,C.cwK,C.cwL])
t(C.bve,C.aN0)
t(C.bvf,C.aN1)
t(C.aEq,C.bx1)
t(C.b89,A.b7Y)
t(C.bvh,A.a5E)
t(C.b88,C.bvh)
w(C.aKQ,A.eV)
w(C.aN0,A.c9)
w(C.aN1,A.c9)
v(C.bx1,A.eA)
v(C.bvh,A.j4)})()
A.k0(b.typeUniverse,JSON.parse('{"aYc":{"au":[],"t":[]},"bai":{"aB":[]},"ao2":{"ag":[],"t":[]},"aCk":{"ah":["ao2"]},"Sw":{"ag":[],"t":[]},"akn":{"au":[],"t":[]},"aTY":{"au":[],"t":[]},"bdV":{"ah":["Sw"]},"Z5":{"ag":[],"t":[]},"Z9":{"ag":[],"t":[]},"Z7":{"ag":[],"t":[]},"YG":{"ag":[],"t":[]},"azo":{"ah":["Z5"]},"bef":{"ah":["Z9"]},"azp":{"ah":["Z7"]},"Yo":{"au":[],"t":[]},"bbv":{"aB":[]},"bbm":{"aB":[]},"bbt":{"ah":["YG"]},"aGo":{"aB":[]},"bgJ":{"aB":[]},"b9H":{"au":[],"t":[]},"apa":{"ag":[],"t":[]},"ap4":{"ag":[],"t":[]},"ZJ":{"ag":[],"t":[]},"acV":{"au":[],"t":[]},"aCV":{"ah":["apa"]},"aCS":{"ah":["ap4"]},"bdY":{"au":[],"t":[]},"be0":{"aB":[]},"bhG":{"au":[],"t":[]},"bd4":{"aB":[]},"bvo":{"au":[],"t":[]},"bl1":{"au":[],"t":[]},"aBj":{"ah":["ZJ"]},"acU":{"au":[],"t":[]},"bhF":{"au":[],"t":[]},"acT":{"au":[],"t":[]},"bhE":{"au":[],"t":[]},"aBk":{"au":[],"t":[]},"aHw":{"au":[],"t":[]},"JK":{"au":[],"t":[]},"ap8":{"ag":[],"t":[]},"a_3":{"ag":[],"t":[]},"a_4":{"ag":[],"t":[]},"aCU":{"ah":["ap8"]},"bdZ":{"au":[],"t":[]},"aca":{"au":[],"t":[]},"bdX":{"au":[],"t":[]},"be1":{"au":[],"t":[]},"aCT":{"ah":["a_3"]},"bj8":{"ah":["a_4"]},"aYa":{"au":[],"t":[]},"a5Y":{"ag":[],"t":[]},"biP":{"ah":["a5Y"]},"biO":{"aB":[]},"as3":{"au":[],"t":[]},"YI":{"ag":[],"t":[]},"YH":{"ag":[],"t":[]},"Yf":{"ag":[],"t":[]},"a0P":{"ag":[],"t":[]},"ay9":{"ah":["YI"]},"ay8":{"ah":["YH"]},"awT":{"ah":["Yf"]},"bvg":{"ah":["a0P"]},"Ft":{"ag":[],"t":[]},"awM":{"ag":[],"t":[]},"bve":{"ah":["Ft"]},"bvf":{"ah":["awM"]},"bvd":{"aB":[]},"as2":{"ag":[],"t":[]},"aEp":{"ah":["as2"]},"adf":{"au":[],"t":[]},"arX":{"ag":[],"t":[]},"as1":{"ag":[],"t":[]},"bkv":{"ah":["arX"]},"aEo":{"ah":["as1"]},"NV":{"ag":[],"t":[]},"aEq":{"ah":["NV"],"eA":[]},"b88":{"j4":[],"fg":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQJ"),Q:w("r_"),n:w("bk<m,m>"),c5:w("aSJ"),dY:w("aSK"),d:w("eG<m?>"),e:w("Hu"),B:w("ne"),P:w("i0"),k:w("kF"),x:w("aA<~>"),f5:w("O<a2O>"),V:w("O<ac>"),t:w("O<r_>"),O:w("O<w>"),ac:w("O<eG<m?>>"),I:w("O<ne>"),u:w("O<i0>"),_:w("O<kF>"),cl:w("O<aA<ai<a5<m,@>>>>"),R:w("O<ng>"),cq:w("O<ai<+(L,L)>>"),ez:w("O<a5<m,aD>>"),gE:w("O<a5<m,m>>"),c7:w("O<a5<m,@>>"),fD:w("O<mt>"),bp:w("O<og>"),g:w("O<v>"),v:w("O<hv>"),L:w("O<+(m,m)>"),G:w("O<+(L,L)>"),bF:w("O<+count,id,name(G,m,m)>"),A:w("O<cR>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<t>"),C:w("O<fg>"),D:w("O<lk>"),fp:w("O<JO>"),M:w("O<JW>"),gZ:w("O<aGt>"),Y:w("O<aet>"),E:w("O<aIu>"),F:w("O<L>"),dC:w("O<G>"),dS:w("O<aB?>"),d4:w("O<m?>"),J:w("cs<ah<ag>>"),b:w("ai<ne>"),do:w("ai<i0>"),r:w("ai<kF>"),U:w("ai<a5<m,@>>"),gk:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),h:w("ai<m>"),c:w("ai<lk>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a5<m,@>>>"),a:w("a5<m,@>"),f:w("a5<@,@>"),gv:w("M<m,Hw>"),w:w("iD"),g2:w("rl"),bV:w("anW"),fL:w("cr"),K:w("aD"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),d9:w("+dx,hidden(L,ai<i0>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),e7:w("bq<L>"),gc:w("dL"),b4:w("cx<G>"),W:w("jM<m>"),l:w("t"),cM:w("fg"),i:w("lk"),cc:w("FG"),bw:w("acT<m?>"),cy:w("JY"),q:w("n2"),y:w("R"),gR:w("L"),z:w("@"),S:w("G"),eK:w("ai<kF>?"),m:w("ap7?"),cT:w("v?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),X:w("+qrPayload,token,usesRemaining(m,m,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("q0?"),T:w("m?"),aD:w("dL?"),o:w("lk?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aYU=new A.bp(B.hf,B.bG,B.hf,B.bG)
D.aaN=new A.bp(B.hf,B.is,B.hf,B.is)
D.aZ6=new A.bp(B.it,B.bG,B.bG,B.bG)
D.aZa=new A.ay(B.cS,1.4,B.q,-1)
D.aZk=new A.ay(B.ad,1,B.q,-1)
D.b_J=new A.aY(0,1/0,64,1/0)
D.b_N=new A.aY(0,84,0,1/0)
D.ayn=w([B.lL,B.r_,B.c],x.O)
D.bXN=new A.a8(B.az,B.aC,B.x,D.ayn,null,null)
D.b0x=new A.o(null,null,null,null,null,D.bXN,B.n)
D.d29=w([B.aV,B.bT],x.O)
D.bZU=new A.a8(B.b0,B.b4,B.x,D.d29,null,null)
D.b0S=new A.o(null,null,null,null,null,D.bZU,B.n)
D.b75=new A.fk(null,null,null,null,null,E.jX,null,null,null,null)
D.ac7=new A.cp(B.A,null,null,D.b75,null)
D.ko=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f6S=new A.H(!0,D.ko,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq9=new A.y("No books on the shelf yet.",null,D.f6S,null,null,null,null,null,null,null,null,null)
D.ec2=new A.D(B.o2,D.fq9,null)
D.b5z=new A.cp(B.A,null,null,D.ec2,null)
D.b6s=new A.cp(B.A,null,null,Z.W3,null)
D.b8z=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b91=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.adi=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bbN=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bc4=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aeH=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bg_=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bgo=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.ES=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bi_=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bks=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.agh=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fkA=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bqd=new A.eG(null,D.fkA,B.eZ,null,x.d)
D.ftk=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bqf=new A.eG(null,D.ftk,B.eZ,null,x.d)
D.bqN=new A.ba(38e5)
D.brx=new A.ij(0,10,0,10)
D.brG=new A.Q(0,1,0,0)
D.brR=new A.ij(0,4,0,4)
D.bs8=new A.Q(10,10,14,10)
D.bsk=new A.ij(10,4,10,4)
D.bss=new A.ij(10,8,10,8)
D.bst=new A.Q(10,8,8,8)
D.bsT=new A.Q(12,6,12,2)
D.bta=new A.Q(14,10,6,6)
D.btb=new A.Q(14,12,14,0)
D.btf=new A.Q(14,12,14,8)
D.bti=new A.Q(14,12,8,14)
D.btm=new A.ij(14,14,14,14)
D.bu0=new A.Q(16,2,16,10)
D.bua=new A.Q(16,6,16,30)
D.buc=new A.Q(16,6,16,8)
D.aiC=new A.Q(18,16,18,8)
D.buN=new A.Q(18,20,18,22)
D.aiG=new A.Q(18,24,18,24)
D.buT=new A.Q(18,30,18,30)
D.bvb=new A.Q(20,10,12,20)
D.bvo=new A.Q(20,18,16,18)
D.bvq=new A.Q(20,18,20,6)
D.bwf=new A.Q(24,32,24,28)
D.bwg=new A.Q(24,36,24,32)
D.bwk=new A.Q(26,26,24,14)
D.bwz=new A.Q(2,4,2,8)
D.bwD=new A.Q(30,0,30,0)
D.bwO=new A.Q(38,22,22,22)
D.aiZ=new A.Q(40,24,24,24)
D.bwQ=new A.ij(40,40,40,40)
D.bwS=new A.Q(46,30,30,30)
D.aj1=new A.Q(4,0,0,8)
D.bxi=new A.Q(56,40,40,40)
D.bxm=new A.Q(1.25,1.25,1.25,1.25)
D.bxn=new A.Q(60,0,60,0)
D.bxq=new A.Q(6,14,6,16)
D.bxC=new A.ij(7,3,7,3)
D.by8=new A.Q(5,1.5,5,1.5)
D.byj=new A.Q(6,2.5,6,2.5)
D.fFn=new A.y("Signature",null,B.nC,null,null,null,null,null,null,null,null,null)
D.byE=new A.bB(1,B.bh,D.fFn,null)
D.fCw=new A.y("Tell the AI what to fix",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bzr=new A.bB(1,B.bh,D.fCw,null)
D.fee=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEu=new A.y("Worksheets",null,D.fee,null,null,null,null,null,null,null,null,null)
D.fen=new A.H(!0,E.acS,null,null,null,null,13,B.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDm=new A.y("Track your project spending",null,D.fen,null,null,null,null,null,null,null,null,null)
D.cV7=w([D.fEu,B.au,D.fDm],x.p)
D.bno=new A.fm(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cV7,null)
D.bzx=new A.bB(1,B.bh,D.bno,null)
D.f9t=new A.H(!0,E.jX,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjN=new A.y("FAMILY LIBRARY",null,D.f9t,null,null,null,null,null,null,null,null,null)
D.bzP=new A.bB(1,B.bh,D.fjN,null)
D.MX=new C.Hu("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.a_b=new C.Hv(0,"male")
D.ajU=new C.Hv(1,"female")
D.y1=new C.Hv(2,"unknown")
D.tT=new C.ako(0,"owner")
D.MY=new C.ako(1,"editor")
D.kv=new C.ako(2,"viewer")
D.akJ=new A.a0(61199,"MaterialIcons",!1)
D.bEr=new A.a0(61504,"MaterialIcons",!1)
D.bEs=new A.a0(61505,"MaterialIcons",!1)
D.bEu=new A.a0(61587,"MaterialIcons",!1)
D.bEB=new A.a0(61890,"MaterialIcons",!1)
D.bFv=new A.a0(63034,"MaterialIcons",!0)
D.bGk=new A.a0(63429,"MaterialIcons",!1)
D.amW=new A.a0(984520,"MaterialIcons",!1)
D.bF0=new A.a0(62776,"MaterialIcons",!1)
D.bII=new A.ae(D.bF0,26,B.aZ,null,null,null)
D.bDp=new A.a0(57648,"MaterialIcons",!1)
D.bJ_=new A.ae(D.bDp,14,B.c,null,null,null)
D.bJh=new A.ae(B.G0,17,null,null,null,null)
D.bJN=new A.ae(E.a04,null,null,null,null,null)
D.bJQ=new A.ae(B.jq,18,E.jX,null,null,null)
D.a_R=new A.a0(62044,"MaterialIcons",!1)
D.bJW=new A.ae(D.a_R,null,B.aV,null,null,null)
D.bKL=new A.ae(B.dX,16,null,null,null,null)
D.bKS=new A.ae(D.a_R,32,B.aV,null,null,null)
D.bLb=new A.ae(E.akK,18,B.cS,null,null,null)
D.bMe=new A.ae(B.Ga,22,B.av,null,null,null)
D.bMq=new A.ae(B.dX,22,B.aZ,null,null,null)
D.bMB=new A.ae(Q.a_W,22,B.c,null,null,null)
D.bMH=new A.ae(B.u2,52,B.c,null,null,null)
D.bMR=new A.ae(B.Ga,30,B.av,null,null,null)
D.any=new A.ae(B.ub,22,B.c,null,null,null)
D.bNi=new A.ae(B.dX,17,null,null,null,null)
D.bNC=new A.ae(B.vW,26,B.cS,null,null,null)
D.bOl=new A.ae(B.a0f,16,null,null,null,null)
D.bP5=new A.ae(B.u2,24,B.c,null,null,null)
D.bPa=new A.ae(B.Np,20,B.ry,null,null,null)
D.bPf=new A.ae(B.FZ,null,B.bT,null,null,null)
D.bPm=new A.ae(B.jq,18,B.c,null,null,null)
D.bPZ=new A.ae(B.cC,22,B.ad,null,null,null)
D.bQO=new A.ae(B.e7,16,B.ad,null,null,null)
D.bR_=new A.ae(D.a_R,20,B.aV,null,null,null)
D.anY=new A.ae(B.ho,20,null,null,null,null)
D.bRu=new A.ae(B.cC,18,D.ko,null,null,null)
D.bRM=new A.ae(B.ym,28,B.c,null,null,null)
D.bRV=new A.ae(B.Nf,null,B.h2,null,null,null)
D.bSe=new A.ae(B.ym,24,B.c,null,null,null)
D.bSF=new A.ae(B.u2,null,B.aV,null,null,null)
D.bSG=new A.ae(B.jJ,20,B.cS,null,null,null)
D.bT_=new A.ae(B.G0,16,null,null,null,null)
D.bUx=new A.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eA,!0,null,null,null,null)
D.d9y=w([B.bv,B.aV,B.fd,B.aZ],x.O)
D.bWc=new A.a8(B.az,B.aC,B.x,D.d9y,null,null)
D.bgV=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bmo=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cRY=w([D.bgV,D.bmo],x.O)
D.bWn=new A.a8(B.b0,B.b4,B.x,D.cRY,null,null)
D.d3X=w([B.f1,B.fy,B.fd],x.O)
D.bWs=new A.a8(B.az,B.aC,B.x,D.d3X,null,null)
D.afi=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b92=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cTW=w([D.afi,D.b92],x.O)
D.bX0=new A.a8(B.b0,B.b4,B.x,D.cTW,null,null)
D.bch=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.axJ=w([D.bch,D.afi],x.O)
D.bXk=new A.a8(B.az,B.aC,B.x,D.axJ,null,null)
D.aef=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bet=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d36=w([D.aef,D.bet],x.O)
D.bXY=new A.a8(B.a3,B.a8,B.x,D.d36,null,null)
D.dg5=w([B.bz,B.n4],x.O)
D.bY_=new A.a8(B.b0,B.b4,B.x,D.dg5,null,null)
D.bgQ=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dgW=w([D.bgQ,D.ko,D.ko,P.Xn],x.O)
D.dji=w([0,0.07,0.9,1],x.F)
D.bYu=new A.a8(B.a3,B.a8,B.x,D.dgW,D.dji,null)
D.bYF=new A.a8(B.az,B.aC,B.x,B.R_,null,null)
D.dfG=w([B.aZ,B.aV,B.bT],x.O)
D.bZF=new A.a8(B.az,B.aC,B.x,D.dfG,null,null)
D.cka=w([B.bv,B.aZ,B.f1],x.O)
D.ckh=w([B.bu,B.aE,B.jd],x.O)
D.ckj=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bfv=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cqs=w([D.bfv,E.af_],x.O)
D.e7R=new A.v(1,2)
D.eTe=new A.cR(B.aW,D.e7R,3)
D.auL=w([D.eTe],x.A)
D.cxL=w([B.h4,B.cb,B.fc],x.O)
D.cAs=w([B.bK,B.bq,B.bn],x.O)
D.bAh=new C.uh("classic","Classic leather","Gold-edged brown leather",D.axJ,E.jX,E.jX,"\u2766",B.L,!0,!1,!1,!1)
D.b8n=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bli=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cWI=w([D.b8n,D.bli],x.O)
D.af3=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bAc=new C.uh("ornate","Ornate gold","Double gold border and flourishes",D.cWI,D.af3,D.af3,"\u2726",B.L,!0,!0,!0,!1)
D.bbW=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bhC=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cOU=w([D.bbW,D.bhC],x.O)
D.bAb=new C.uh("parchment","Parchment","Old paper with dark ink",D.cOU,D.ES,G.iC,"\u2767",B.L,!0,!1,!1,!0)
D.acz=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bjI=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.de0=w([D.acz,D.bjI],x.O)
D.bf5=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bj4=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bAe=new C.uh("minimal","Clean paper","Plain and elegant, like a printed book",D.de0,D.bf5,D.bj4,"",B.L,!0,!0,!1,!0)
D.bAg=new C.uh("midnight","Midnight","Deep blue with silver stars",L.ay0,B.cr,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bAa=new C.uh("emerald","Emerald library","Green cloth, title on the left",A_.av8,E.jX,B.fV,"\u25c6",B.bi,!0,!1,!1,!1)
D.bk8=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.dcc=w([B.er,D.bk8],x.O)
D.bg7=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bhd=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bAf=new C.uh("rose","Rose vintage","Burgundy with rose-gold lettering",D.dcc,D.bg7,D.bhd,"\u2740",B.L,!0,!1,!0,!1)
D.dgA=w([B.ct,O.ml],x.O)
D.bAd=new C.uh("modern","Modern","Dark, bold, left-aligned",D.dgA,B.aN,B.c,"",B.bi,!1,!0,!1,!1)
D.a28=w([D.bAh,D.bAc,D.bAb,D.bAe,D.bAg,D.bAa,D.bAf,D.bAd],A.ax("O<uh>"))
D.cOq=w([B.bT,B.bj],x.O)
D.bgG=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cP5=w([D.acz,D.bgG],x.O)
D.bbS=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cQI=w([D.bbS,B.d9],x.O)
D.cSd=w([B.b8,B.iT,B.oF],x.O)
D.cSA=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b8Z=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bdM=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dje=w([D.aef,D.b8Z,D.bdM],x.O)
D.bAi=new C.ui("leather","Leather",D.dje,"vintage")
D.cZI=w([B.dc,B.Ld,A4.WA],x.O)
D.bAp=new C.ui("midnight","Midnight",D.cZI,"starry")
D.cSe=w([B.eB,B.e_,B.lh],x.O)
D.bAo=new C.ui("forest","Forest",D.cSe,"story")
D.dlc=w([B.eK,B.er,B.kr],x.O)
D.bAl=new C.ui("burgundy","Burgundy",D.dlc,"royal")
D.cA1=w([B.aE,B.pE,B.nL],x.O)
D.bAm=new C.ui("royal","Royal",D.cA1,"royal")
D.cUz=w([B.bq,B.ct,O.ml],x.O)
D.bAj=new C.ui("charcoal","Charcoal",D.cUz,"geo")
D.djm=w([B.cc,B.dR,B.xm],x.O)
D.bAn=new C.ui("sunset","Sunset",D.djm,"sunset")
D.dk2=w([B.iT,B.ET,B.WD],x.O)
D.bAk=new C.ui("ocean","Ocean",D.dk2,"band")
D.yU=w([D.bAi,D.bAp,D.bAo,D.bAl,D.bAm,D.bAj,D.bAn,D.bAk],A.ax("O<ui>"))
D.cUZ=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cVz=w([B.ak,B.aJ,B.M],x.O)
D.cWN=w([B.er,B.e_,B.dc,B.fA,B.xp,B.cS,B.k_,B.ec,B.d5],x.O)
D.cWO=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eTf=new A.cR(B.dr,B.dE,8)
D.cWX=w([D.eTf],x.A)
D.cY1=w([B.bY,B.dR,B.kp],x.O)
D.cYv=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cZE=w([B.bY,B.hi],x.O)
D.d0N=w([B.aM,B.vh,B.xd],x.O)
D.d1G=w([B.bM,B.c9,B.ds,B.aM],x.O)
D.d2a=w([B.iU,B.cc,B.tp],x.O)
D.d2F=w([B.f1,B.cS],x.O)
D.d3c=w([B.cs,B.fl,B.hl],x.O)
D.d3n=w([B.aN,B.bj,B.dc],x.O)
D.d3U=w([B.es,B.cR,B.e_],x.O)
D.d4c=w([B.dM,B.dc,B.Ld],x.O)
D.d5v=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a33=w(["leather","linen","plain","stars","rays"],x.s)
D.bIo=new A.a0(985219,"MaterialIcons",!1)
D.bHX=new A.a0(983781,"MaterialIcons",!1)
D.axq=w([B.al8,B.i5,B.lT,B.i6,D.bIo,B.Gm,B.q1,D.bHX,L.amJ,B.yo,B.q3,B.mx],A.ax("O<a0>"))
D.a38=w(["double","single","corners","none"],x.s)
D.d8e=w([B.dy,B.bm,B.ec],x.O)
D.d8r=w([],x.t)
D.Co=w([],x.u)
D.daN=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dd7=w([B.aF,B.fl,B.fA],x.O)
D.deC=w([B.bH,B.n_,B.Xy],x.O)
D.deR=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dyr=new C.lA("construction","Construction","Jobsite & builds",B.ye)
D.dyy=new C.lA("house","Home Build","Houses & rooms",B.vR)
D.dyo=new C.lA("grocery","Grocery","Store & pantry",B.a0L)
D.dyn=new C.lA("calculator","Calculations","Math & estimates",B.NA)
D.dyw=new C.lA("lumber","Materials","Lumber & supplies",B.NQ)
D.dyk=new C.lA("kitchen","Kitchen","Remodel & meals",Aa.alX)
D.bHU=new A.a0(983756,"MaterialIcons",!1)
D.dyp=new C.lA("landscape","Landscaping","Yard & garden",D.bHU)
D.dyj=new C.lA("plumbing","Plumbing","Pipes & water",B.qb)
D.dyz=new C.lA("electrical","Electrical","Wiring & power",B.h9)
D.dyh=new C.lA("store","Retail Shop","Daily business",B.l0)
D.dyi=new C.lA("paint_remodel","Paint & Remodel","Colors & walls",Ab.a0l)
D.bHi=new A.a0(983311,"MaterialIcons",!1)
D.dyv=new C.lA("roofing","Roofing","Roofs & exteriors",D.bHi)
D.bI6=new A.a0(983986,"MaterialIcons",!1)
D.dyg=new C.lA("warehouse","Warehouse","Storage & stock",D.bI6)
D.dyt=new C.lA("vehicles","Vehicles","Fleet & transport",B.Gn)
D.bF2=new A.a0(62785,"MaterialIcons",!1)
D.dym=new C.lA("farm","Farm","Crops & livestock",D.bF2)
D.dyl=new C.lA("restaurant","Restaurant","Food & catering",B.u9)
D.dys=new C.lA("tools","Tools","Workshop gear",B.Gi)
D.dyx=new C.lA("wallet","Cash & Wallet","Quick spending",B.jJ)
D.bGf=new A.a0(63395,"MaterialIcons",!1)
D.dyu=new C.lA("concrete","Concrete","Foundation work",D.bGf)
D.dyq=new C.lA("blueprint","Blueprint","Plans & design",Af.ale)
D.a3C=w([D.dyr,D.dyy,D.dyo,D.dyn,D.dyw,D.dyk,D.dyp,D.dyj,D.dyz,D.dyh,D.dyi,D.dyv,D.dyg,D.dyt,D.dym,D.dyl,D.dys,D.dyx,D.dyu,D.dyq],A.ax("O<lA>"))
D.dfl=w([B.bs,B.bm],x.O)
D.dg6=w([B.ic,B.nQ,B.dH],x.O)
D.a3L=w(["top","middle","bottom"],x.s)
D.dix=w([B.cl,B.bj,B.dc],x.O)
D.dj8=w([B.b2,B.cR,B.e_],x.O)
D.dl7=w([B.bK,B.ak],x.O)
D.dl8=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e53={top:0,middle:1,bottom:2}
D.don=new A.bk(D.e53,["Top","Middle","Bottom"],x.n)
D.e4H={double:0,single:1,corners:2,none:3}
D.dos=new A.bk(D.e4H,["Double line","One line","Corners","None"],x.n)
D.e5V={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dpZ=new A.bk(D.e5V,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dqa=new A.bk(B.hW,[],A.ax("bk<G,+(m,m)>"))
D.e4W={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CB=new A.bk(D.e4W,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<m,G>"))
D.dt0=new F.MO(32,null)
D.dt1=new F.MO(40,null)
D.dt2=new F.MO(46,null)
D.aGH=new C.as1(null)
D.e8P=new A.v(8,14)
D.fqM=new A.y("Write a new book",null,B.hH,null,B.L,null,null,null,null,null,null,null)
D.ebv=new A.D(B.kW,D.fqM,null)
D.an8=new A.ae(B.hB,18,B.c,null,null,null)
D.fk8=new A.y("Add",null,B.m7,null,null,null,null,null,null,null,null,null)
D.d1V=w([D.an8,B.qt,D.fk8],x.p)
D.eQT=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d1V,null)
D.ebQ=new A.D(B.ng,D.eQT,null)
D.ebR=new A.D(E.aht,Z.W3,null)
D.fe9=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn9=new A.y("New Project",null,D.fe9,null,null,null,null,null,null,null,null,null)
D.d5S=w([D.an8,B.ab,D.fn9],x.p)
D.eQW=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d5S,null)
D.ec1=new A.D(B.ik,D.eQW,null)
D.fpz=new A.y("Choose your header",null,U.rT,null,null,null,null,null,null,null,null,null)
D.ecm=new A.D(B.hQ,D.fpz,null)
D.b7k=new A.fk(2.2,null,null,null,null,B.cS,null,null,null,null)
D.eW2=new A.a7(22,22,D.b7k,null)
D.b5v=new A.cp(B.A,null,null,D.eW2,null)
D.ecr=new A.D(B.YH,D.b5v,null)
D.btv=new A.Q(14,2,14,6)
D.fD5=new A.y("The top of your book. Tap a design to see it.",null,T.zO,null,null,null,null,null,null,null,null,null)
D.ecs=new A.D(D.btv,D.fD5,null)
D.ee_=new A.iR(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.ee2=new A.iR(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aHW=new A.iR(1,0.9607843137254902,0.48627450980392156,0)
D.Im=new A.iR(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zr=new A.iR(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.ee8=new A.iR(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.h4v=new C.bgJ(null)
D.box=new A.ml(D.h4v,null,B.aw,null,null)
D.aLz=new A.cL(0,0,0,0,null,null,D.box,null)
D.eCE=new A.z(-42,42)
D.eLz=new A.cA([0,0,1,1])
D.aMY=new A.a9(0,0,520,160)
D.fCE=new A.y("Let the AI write it from your tree",null,B.kf,null,B.L,null,null,null,null,null,null,null)
D.bAW=new A.dq(1,B.co,D.fCE,null)
D.cZD=w([E.a1d,B.ab,D.bAW],x.p)
D.eQy=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.cZD,null)
D.fjO=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.dds=w([D.anY,B.ab,D.fjO],x.p)
D.eQI=new A.cl(B.aP,B.b9,B.j,B.m,null,B.p,null,0,D.dds,null)
D.bMv=new A.ae(B.hR,14,B.aZ,null,null,null)
D.f86=new A.H(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnz=new A.y("Cashier",null,D.f86,null,null,null,null,null,null,null,null,null)
D.d6o=w([D.bMv,B.bp,D.fnz],x.p)
D.eQL=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d6o,null)
D.fjP=new A.y("Transfer & settings",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bzh=new A.bB(1,B.bh,D.fjP,null)
D.cRH=w([D.any,B.at,D.bzh],x.p)
D.eQM=new A.cl(B.aP,B.e,B.j,B.m,null,B.p,null,0,D.cRH,null)
D.eUM=new A.ar(16,40)
D.eUR=new A.ar(22,64)
D.eUY=new A.ar(280,88)
D.eVJ=new A.a7(30,null,null,null)
D.eX0=new A.hQ(2,12,12,1.05,null)
D.fnf=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eXJ=new A.b1(D.fnf,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnu=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aP5=new A.b1(D.fnu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fvC=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eYc=new A.b1(D.fvC,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fFX=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eYh=new A.b1(D.fFX,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpx=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eYo=new A.b1(D.fpx,null,null,null,null,null,null,null,null,null,null,null,null,B.fL,!1,null,null,null,B.r,null)
D.fDi=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aP9=new A.b1(D.fDi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkp=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eYO=new A.b1(D.fkp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fGC=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eZx=new A.b1(D.fGC,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fBz=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZW=new A.b1(D.fBz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fG0=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eZZ=new A.b1(D.fG0,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fxb=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_0=new A.b1(D.fxb,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.frm=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f_1=new A.b1(D.frm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.frn=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f01=new A.b1(D.frn,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnh=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f0j=new A.b1(D.fnh,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpb=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f0C=new A.b1(D.fpb,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fwH=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f0S=new A.b1(D.fwH,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fsa=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f0T=new A.b1(D.fsa,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f41=new A.H(!0,D.ko,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4r=new A.H(!0,D.ko,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f54=new A.rH(!0,B.rH,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5m=new A.H(!0,D.ko,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5V=new A.H(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a82=new A.rH(!0,B.Sl,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6V=new A.H(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7j=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8V=new A.H(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8Z=new A.H(!0,G.iC,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fae=new A.H(!0,B.M,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faX=new A.H(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbF=new A.H(!0,B.bT,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbJ=new A.H(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc5=new A.H(!0,D.ES,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fce=new A.H(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fde=new A.H(!0,B.cS,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdI=new A.H(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe7=new A.H(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new A.H(!0,B.ak,null,null,null,null,11.5,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffH=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRm=new A.H(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8v=new A.H(!0,B.ak,null,null,null,null,12,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhm=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhJ=new A.H(!0,G.iC,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhR=new A.H(!0,G.iC,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiE=new A.y("Themes",null,B.pf,null,null,null,null,null,null,null,null,null)
D.fjf=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f8E=new A.H(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjE=new A.y("Debt receipt",null,D.f8E,null,B.L,null,null,null,null,null,null,null)
D.aRh=new A.H(!0,B.ak,null,null,null,null,11,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjW=new A.y("Person who owes",null,D.aRh,null,null,null,null,null,null,null,null,null)
D.fkS=new A.y("Notes",null,B.a8b,null,null,null,null,null,null,null,null,null)
D.flh=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f7B=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fll=new A.y("Share",null,D.f7B,null,null,null,null,null,null,null,null,null)
D.fmg=new A.y("Move your family trees",null,D.aRm,null,null,null,null,null,null,null,null,null)
D.fmS=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fnt=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.foM=new A.y("Remove this book?",null,B.hu,null,null,null,null,null,null,null,null,null)
D.aRO=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fpV=new A.y("What should the AI do?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.fri=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fsp=new A.y("Ribbon bookmark",null,B.iP,null,null,null,null,null,null,null,null,null)
D.fft=new A.H(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsS=new A.y("NGMY.ORG",null,D.fft,null,B.L,null,null,null,null,null,null,null)
D.fu7=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fbY=new A.H(!0,B.c,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuS=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fbY,null,B.L,null,null,null,null,null,null,null)
D.fw4=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fwb=new A.y("Thumbnail",null,B.pf,null,null,null,null,null,null,null,null,null)
D.fwN=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fxc=new A.y("Your photos",null,B.pf,null,null,null,null,null,null,null,null,null)
D.fxr=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fxY=new A.y("Design your cover",null,U.rT,null,null,null,null,null,null,null,null,null)
D.fy3=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fy6=new A.y("PICTURE",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fys=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fyu=new A.y("You can undo it right after.",null,T.Jh,null,null,null,null,null,null,null,null,null)
D.fz1=new A.y("Print",null,B.uQ,null,null,null,null,null,null,null,null,null)
D.fzo=new A.y("Amount owed",null,D.aRh,null,null,null,null,null,null,null,null,null)
D.fzD=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fAd=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fAg=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fAH=new A.y("Debtor signature",null,B.a8b,null,null,null,null,null,null,null,null,null)
D.fAQ=new A.y("Change icon",null,E.aQy,null,null,null,null,null,null,null,null,null)
D.fC1=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fCu=new A.y("Download",null,B.uQ,null,null,null,null,null,null,null,null,null)
D.fCy=new A.y("Change",null,B.pf,null,null,null,null,null,null,null,null,null)
D.fDo=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fDr=new A.y("WHAT SHOULD IT CHANGE?",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fE0=new A.y("COLOUR",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fEe=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fEh=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fFh=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f30=new A.H(!0,E.jX,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFw=new A.y("Write the first page myself",null,D.f30,null,null,null,null,null,null,null,null,null)
D.fG3=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fG9=new A.y("Create Project",null,E.aR0,null,null,null,null,null,null,null,null,null)
D.h0I=new C.abd(1,"header")
D.a9s=new C.abd(2,"projects")
D.h0J=new C.abd(3,"cashier")
D.a9t=new C.abd(4,"familyTree")
D.hcI=new C.cwK(0,"start")
D.hcJ=new C.cwL(0,"start")
D.h16=new C.Yf(null)
D.h25=new C.YH(null)
D.dq7=new A.bk(B.hW,[],A.ax("bk<m,FG>"))
D.d8Q=w([],x.E)
D.d8R=w([],x.M)
D.h2C=new C.be_(D.dq7,D.d8Q,D.d8R,0,0,null,null)
D.h59=new C.a_4(null)
D.aaa=new C.aJb(0,"projects")
D.aWw=new C.aJb(1,"cashier")
D.hao=new C.aJb(2,"familyTree")})()};
(a=>{a["wYbqk58+eCQIHLVH73vQSxoyFJM="]=a.current})($__dart_deferred_initializers__);