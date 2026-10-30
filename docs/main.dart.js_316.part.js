((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,A3,A4,A5,A6,T,U,A7,A8,M,A9,H,Aa,Ab,V,W,X,Ac,Ad,Y,Ae,Af,Ag,Z,Ah,Ai,K,Aj,A_,A0,O,P,L,Q,C={
bCS(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCS=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vm(null,""),$async$bCS)
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
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qS(t,a1,B.hD,"book",E.Fo),$async$bCS)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Qk(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.L0(l)?y.l:y.i)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a2g(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCS,v)},
agO(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agO=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vm(null,""),$async$agO)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n7(b6)
s=x.S
r=A.db(c1,0,A.dI(4,"count",s),A.T(c1).c)
q=F.a23(new A.M(r,new C.fCe(),r.$ti.k("M<ak.E,m>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fCd(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agO)
case 6:l=c5
k=F.Qk(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.ao3(s,D.dqp,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agO)
case 10:l=c5
k=l==null?null:F.Qk(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.u(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.u(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.l2(a5,a2.k("l2<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
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
p=A.cD(new A.bc(h,s),new C.fCf(),s.k("J.E"),p)
p=F.a23(A.pi(p,3,A.a3(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a2g(s,b9),$async$agO)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.ao3(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agO,v)},
hr5(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fLr(e,f),d,null,!0,!0,x.g2)},
ao3:function ao3(d,e,f){this.a=d
this.b=e
this.c=f},
fCe:function fCe(){},
fCd:function fCd(d){this.a=d},
fCf:function fCf(){},
fLr:function fLr(d,e){this.a=d
this.b=e},
bAI(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAI=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b6(b1,new C.fqI())){u=null
w=1
break}t=B.d.d7(b1,new C.fqJ())
s=$.W()
r=new A.r1()
q=A.Dm(r,D.aN4)
p=A.N()
p.r=B.c.gp(0)
q.b0(D.aN4,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bS
o.e=B.fG
n=new C.fqO(t)
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
a3.e=null}}q.aQ(a3,o)}else{p=A.a([],x.v)
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
a3.e=null}}q.aQ(a3,o)}w=4
return A.b(r.pG().zm(520,160),$async$bAI)
case 4:w=3
return A.b(b3.hw(B.h0),$async$bAI)
case 3:b0=b3
u=b0==null?null:J.eX(B.dD.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAI,v)},
fzV(d){return C.i4B(d)},
i4B(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fzV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bgf()
n=d.x!=null&&d.z2(null).length===0
if(d.x!=null)t=n?D.zs:D.Ir
else t=d.gTz()?D.Ir:D.aI6
w=3
return A.b(C.bAI(d.ax),$async$fzV)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amN(s)
r=A.a4d(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aI6}else{p.c=C.wO(q,!0)
p.b=n?D.zs:D.Ir}r.a2R(A.fVF(new C.fzX(p,d,new C.fzY(),t,n,o),null,D.bx_,B.wo))
u=r.kd(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzV,v)},
fGy(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fGy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fzV(d),$async$fGy)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.GD(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGy,v)},
fqI:function fqI(){},
fqJ:function fqJ(){},
fqO:function fqO(d){this.a=d},
fzY:function fzY(){},
fzX:function fzX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzW:function fzW(){},
fLT(d,e){var w=0,v=A.j(x.H)
var $async$fLT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fLX(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fLT)
case 2:return A.h(null,v)}})
return A.i($async$fLT,v)},
bDk(d,e,f,g){return C.ic5(d,e,f,g)},
ic5(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bDk=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cI.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.J(x.q).f.S(D.f0W)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fLP(g,r,f),d,null,!0,!0,x.H),$async$bDk)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bDk,v)},
fLY(d,e){var w=0,v=A.j(x.H)
var $async$fLY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fM0(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fLY)
case 2:return A.h(null,v)}})
return A.i($async$fLY,v)},
aYq:function aYq(d,e){this.c=d
this.a=e},
c2h:function c2h(){},
bay:function bay(d,e){this.b=d
this.a=e},
fLX:function fLX(d,e){this.a=d
this.b=e},
fLU:function fLU(d){this.a=d},
fLV:function fLV(d,e,f){this.a=d
this.b=e
this.c=f},
fLW:function fLW(d,e){this.a=d
this.b=e},
fLP:function fLP(d,e,f){this.a=d
this.b=e
this.c=f},
fLN:function fLN(d){this.a=d},
fLO:function fLO(d,e,f){this.a=d
this.b=e
this.c=f},
fM0:function fM0(d,e){this.a=d
this.b=e},
fLZ:function fLZ(d){this.a=d},
fM_:function fM_(d,e,f){this.a=d
this.b=e
this.c=f},
fuG(d,e){var w=0,v=A.j(x.y),u,t
var $async$fuG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1P(d),$async$fuG)
case 3:t=g
J.nt(t,new C.fuH(e))
u=A.ahs(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fuG,v)},
fuH:function fuH(d){this.a=d},
aof:function aof(d,e,f){this.c=d
this.d=e
this.a=f},
aCw:function aCw(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGn:function dGn(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e,f){this.a=d
this.b=e
this.c=f},
dGp:function dGp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGr:function dGr(d,e){this.a=d
this.b=e},
dGl:function dGl(){},
dGm:function dGm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dGk:function dGk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dG5:function dG5(d){this.a=d},
dG6:function dG6(d,e,f){this.a=d
this.b=e
this.c=f},
dG7:function dG7(d,e){this.a=d
this.b=e},
dG4:function dG4(d){this.a=d},
dGc:function dGc(d,e){this.a=d
this.b=e},
dG3:function dG3(d){this.a=d},
dGd:function dGd(d,e,f){this.a=d
this.b=e
this.c=f},
dGe:function dGe(d,e,f){this.a=d
this.b=e
this.c=f},
dG2:function dG2(d,e){this.a=d
this.b=e},
dGf:function dGf(d,e,f){this.a=d
this.b=e
this.c=f},
dG1:function dG1(d,e){this.a=d
this.b=e},
dGg:function dGg(d,e){this.a=d
this.b=e},
dG0:function dG0(d){this.a=d},
dGh:function dGh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFZ:function dFZ(){},
dFT:function dFT(d){this.a=d},
dFU:function dFU(d){this.a=d},
dG_:function dG_(d,e){this.a=d
this.b=e},
dGi:function dGi(d,e){this.a=d
this.b=e},
dFY:function dFY(d){this.a=d},
dGj:function dGj(d){this.a=d},
dFX:function dFX(){},
dG8:function dG8(d,e){this.a=d
this.b=e},
dFW:function dFW(d){this.a=d},
dG9:function dG9(d,e,f){this.a=d
this.b=e
this.c=f},
dFV:function dFV(d,e){this.a=d
this.b=e},
dFS:function dFS(d,e){this.a=d
this.b=e},
dGa:function dGa(d){this.a=d},
dGb:function dGb(d,e,f){this.a=d
this.b=e
this.c=f},
dGF:function dGF(){},
dGG:function dGG(d,e){this.a=d
this.b=e},
dGD:function dGD(d){this.a=d},
dGE:function dGE(d){this.a=d},
dGz:function dGz(d,e){this.a=d
this.b=e},
dGA:function dGA(d){this.a=d},
dGs:function dGs(d,e,f){this.a=d
this.b=e
this.c=f},
dGt:function dGt(d,e,f){this.a=d
this.b=e
this.c=f},
dGu:function dGu(d,e,f){this.a=d
this.b=e
this.c=f},
dGv:function dGv(d,e,f){this.a=d
this.b=e
this.c=f},
dGw:function dGw(d,e,f){this.a=d
this.b=e
this.c=f},
dGx:function dGx(d,e,f){this.a=d
this.b=e
this.c=f},
dGy:function dGy(d,e,f){this.a=d
this.b=e
this.c=f},
dGH:function dGH(){},
dGI:function dGI(){},
dGJ:function dGJ(){},
dGK:function dGK(d){this.a=d},
dGB:function dGB(d,e){this.a=d
this.b=e},
hnf(d){return B.d.dM(D.a2b,new C.fvk(d),new C.fvl())},
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
fvk:function fvk(d){this.a=d},
fvl:function fvl(){},
akv:function akv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aUb:function aUb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SB:function SB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bea:function bea(){this.d=$
this.c=this.a=null},
d6q:function d6q(d,e){this.a=d
this.b=e},
d6o:function d6o(d,e){this.a=d
this.b=e},
d6p:function d6p(){},
d6r:function d6r(d,e){this.a=d
this.b=e},
h7Z(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.ne(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KN(d,e){return C.i3e(d,e)},
i3e(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
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
break}p=B.S.aK(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.da(p,x.f)
o=A.cD(o,new C.fxy(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fxz(),n),n.k("J.E"))
B.d.aZ(o,new C.fxA())
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
AW(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$AW)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fKx(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AW,v)},
aQi(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQi=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KN(d,e),$async$aQi)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.fSH(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AW(d,e,u),$async$aQi)
case 3:return A.h(null,v)}})
return A.i($async$aQi,v)},
bB9(d,e,f){var w=0,v=A.j(x.H),u
var $async$bB9=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KN(d,e),$async$bB9)
case 2:u=h
J.nt(u,new C.fuy(f))
w=3
return A.b(C.AW(d,e,u),$async$bB9)
case 3:return A.h(null,v)}})
return A.i($async$bB9,v)},
bBo(d,e){return C.i3d(d,e)},
i3d(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bBo=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bBo)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.N0
w=1
break}p=B.S.aK(0,q,null)
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
if(D.CF.ai(0,o.h(0,"foil")))j=A.cQ(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3N,o.h(0,"position"))?A.cQ(o.h(0,"position")):"middle"
g=B.d.t(D.a3b,o.h(0,"frame"))?A.cQ(o.h(0,"frame")):"double"
f=B.d.t(D.a36,o.h(0,"texture"))?A.cQ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cV9,o.h(0,"header"))?A.cQ(o.h(0,"header")):"classic"
o=new C.HA(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.N0
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.N0
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBo,v)},
Ro(d,e,f){return C.ibC(d,e,f)},
ibC(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Ro=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Ro)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ah(),null)),$async$Ro)
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
return A.i($async$Ro,v)},
QS(d,e){return C.i3f(d,e)},
i3f(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$QS)
case 7:r=g
q=r.tc("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KN(d,e),$async$QS)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lt(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QS)
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
return A.i($async$QS,v)},
ag8(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ag8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QS(d,e),$async$ag8)
case 3:s=g
r=J.a4(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.ay(),$async$ag8)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ag8)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ag8,v)},
a2s(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2s=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QS(d,e),$async$a2s)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.ay(),$async$a2s)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2s)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2s)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2s)
case 6:return A.h(null,v)}})
return A.i($async$a2s,v)},
ne:function ne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxy:function fxy(){},
fxz:function fxz(){},
fxA:function fxA(){},
fKx:function fKx(){},
fSH:function fSH(d){this.a=d},
fuy:function fuy(d){this.a=d},
HA:function HA(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bNX:function bNX(d){this.a=d},
ibV(d,e,f,g,h,i,j){return A.a6(d,!1).cm(A.ea(new C.fL5(j,i,f,e,h,g),!0,null,x.H))},
QP(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QP=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QS(h,g),$async$QP)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.J(x.q).f.S(D.aPc)
u=!1
w=1
break}w=4
return A.b(C.hr5(d,f,e),$async$QP)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ag8(h,g),$async$QP)
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
return A.b(C.AW(h,r,p),$async$QP)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Ro(h,r,new C.HA("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QP)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QP,v)},
fL5:function fL5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zd:function Zd(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azA:function azA(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d75:function d75(d){this.a=d},
d74:function d74(d,e){this.a=d
this.b=e},
d6U:function d6U(d,e){this.a=d
this.b=e},
d6R:function d6R(d,e){this.a=d
this.b=e},
d6s:function d6s(d){this.a=d},
d6t:function d6t(d,e){this.a=d
this.b=e},
d6V:function d6V(d){this.a=d},
d6B:function d6B(d){this.a=d},
d6z:function d6z(d){this.a=d},
d6A:function d6A(d){this.a=d},
d6C:function d6C(d){this.a=d},
d6S:function d6S(d){this.a=d},
d6T:function d6T(){},
d6x:function d6x(d){this.a=d},
d6y:function d6y(d,e){this.a=d
this.b=e},
d6D:function d6D(d){this.a=d},
d6E:function d6E(d,e){this.a=d
this.b=e},
d73:function d73(d){this.a=d},
d72:function d72(d,e){this.a=d
this.b=e},
d71:function d71(d){this.a=d},
d6O:function d6O(d){this.a=d},
d6N:function d6N(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6u:function d6u(d,e){this.a=d
this.b=e},
d6Q:function d6Q(d,e){this.a=d
this.b=e},
d6H:function d6H(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6G:function d6G(){},
d6J:function d6J(d){this.a=d},
d6K:function d6K(d){this.a=d},
d6L:function d6L(d,e){this.a=d
this.b=e},
d6M:function d6M(d,e,f){this.a=d
this.b=e
this.c=f},
d6F:function d6F(d,e){this.a=d
this.b=e},
d6X:function d6X(d){this.a=d},
d6W:function d6W(){},
d6Y:function d6Y(d){this.a=d},
d6Z:function d6Z(d){this.a=d},
d7_:function d7_(d){this.a=d},
d70:function d70(d,e){this.a=d
this.b=e},
d6v:function d6v(d){this.a=d},
d6w:function d6w(d){this.a=d},
Zh:function Zh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bev:function bev(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d8Q:function d8Q(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8P:function d8P(d){this.a=d},
d8S:function d8S(d){this.a=d},
d8O:function d8O(d){this.a=d},
d8T:function d8T(d){this.a=d},
d8N:function d8N(d){this.a=d},
d8U:function d8U(d,e){this.a=d
this.b=e},
d8M:function d8M(d,e){this.a=d
this.b=e},
d8V:function d8V(d,e){this.a=d
this.b=e},
Zf:function Zf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeB:function aeB(d,e,f){this.a=d
this.b=e
this.c=f},
azB:function azB(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d7k:function d7k(d,e){this.a=d
this.b=e},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7o:function d7o(d){this.a=d},
d7n:function d7n(d,e){this.a=d
this.b=e},
d7l:function d7l(d){this.a=d},
d7m:function d7m(d){this.a=d},
d7p:function d7p(d){this.a=d},
d7q:function d7q(d){this.a=d},
d7i:function d7i(d,e){this.a=d
this.b=e},
d7h:function d7h(d,e){this.a=d
this.b=e},
JT:function JT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yw:function Yw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cFV:function cFV(d){this.a=d},
cFW:function cFW(){},
cFX:function cFX(d){this.a=d},
bbL:function bbL(d,e,f){this.b=d
this.c=e
this.a=f},
bbC:function bbC(d,e){this.b=d
this.a=e},
ui:function ui(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YO:function YO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbJ:function bbJ(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cZm:function cZm(d,e,f){this.a=d
this.b=e
this.c=f},
cZl:function cZl(d,e){this.a=d
this.b=e},
cZL:function cZL(d){this.a=d},
cZy:function cZy(){},
cZM:function cZM(d){this.a=d},
cZx:function cZx(){},
cZN:function cZN(d,e){this.a=d
this.b=e},
cZw:function cZw(d,e){this.a=d
this.b=e},
cZO:function cZO(d,e){this.a=d
this.b=e},
cZv:function cZv(d,e){this.a=d
this.b=e},
cZP:function cZP(d){this.a=d},
cZu:function cZu(){},
cZQ:function cZQ(d,e){this.a=d
this.b=e},
cZt:function cZt(d,e){this.a=d
this.b=e},
cZR:function cZR(d){this.a=d},
cZG:function cZG(d,e){this.a=d
this.b=e},
cZS:function cZS(d){this.a=d},
cZT:function cZT(d){this.a=d},
cZV:function cZV(d){this.a=d},
cZW:function cZW(d){this.a=d},
cZF:function cZF(d,e){this.a=d
this.b=e},
cZX:function cZX(d,e){this.a=d
this.b=e},
aGA:function aGA(d){this.a=d},
bgZ:function bgZ(d){this.a=d},
b9X:function b9X(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i2c(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahF(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fvo(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a_<1>"),q=q.k("cO<1,m>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.y2)m.push(l===D.a_f?"male":"female")
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
m.push("child of "+l+k)}a0=A.C(new A.cO(new A.a_(a4,new C.fvm(u,f),p),new C.fvn(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i2d(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahF(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fvt(v,e)
q=new C.fvr(v)
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
B.d.fp(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f2(l,new C.fvs(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hOP(d,e,f,g){var w,v,u=C.i2e(d,e)
if(u<=0||f.length<=u)return new A.aeb(!1,D.Cr,f)
if(g.t(0,e.a))return new A.aeb(!1,D.Cr,f)
w=A.T(f).c
v=A.db(f,0,A.dI(u,"count",x.S),w).dJ(0)
return new A.aeb(!0,A.db(f,u,null,w).dJ(0),v)},
hOQ(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahF(d3),d2=d1.length
if(d2===0)return D.h3h
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.ca(0,t.a,new C.d7x(t))}s=new C.d7O(v)
d2=x.h
r=A.U(w,d2)
q=new C.d7G(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d7F(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ce(l.ca(0,k,new C.d7y()),o)}h=new C.d7E(s)
g=new C.d7D(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d7z(h),o),o.k("J.E"))
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
a9=new C.d7M(new C.d7I(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gakp(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ev([i],w)
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
b7=new C.d7w(a2,new C.d7N(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.FL(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.K0(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bM(0,new C.d7A(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f2(j,new C.d7B(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d7C())
c6.push(new C.aIG(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bef(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hmK(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hh3(d,e,f,g,h,i,j,k,l,m,n){return new C.ZR(k,f,j,e,l,n,m,d,g,h,i,null)},
aBx(d,e,f,g,h,i,j){return new C.bhV(i,d,e,f,j,h,g,null)},
apn:function apn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aD6:function aD6(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dUB:function dUB(d){this.a=d},
dUA:function dUA(d){this.a=d},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUF:function dUF(d){this.a=d},
dUz:function dUz(d,e){this.a=d
this.b=e},
dUC:function dUC(d){this.a=d},
dUH:function dUH(d){this.a=d},
dUG:function dUG(d,e){this.a=d
this.b=e},
aph:function aph(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aD3:function aD3(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dU1:function dU1(d){this.a=d},
dU_:function dU_(d){this.a=d},
dU0:function dU0(d){this.a=d},
dU2:function dU2(d,e){this.a=d
this.b=e},
dTX:function dTX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTv:function dTv(d){this.a=d},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTK:function dTK(d){this.a=d},
dTI:function dTI(d){this.a=d},
dTJ:function dTJ(d,e){this.a=d
this.b=e},
dTL:function dTL(d){this.a=d},
dTM:function dTM(d,e){this.a=d
this.b=e},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTU:function dTU(d,e){this.a=d
this.b=e},
dTT:function dTT(d,e){this.a=d
this.b=e},
dTP:function dTP(d,e){this.a=d
this.b=e},
dTO:function dTO(d){this.a=d},
dTQ:function dTQ(d,e){this.a=d
this.b=e},
dTN:function dTN(d){this.a=d},
dTR:function dTR(d){this.a=d},
dTS:function dTS(d){this.a=d},
dTV:function dTV(d,e){this.a=d
this.b=e},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTk:function dTk(d,e){this.a=d
this.b=e},
dU4:function dU4(d,e,f){this.a=d
this.b=e
this.c=f},
dTZ:function dTZ(d,e,f){this.a=d
this.b=e
this.c=f},
dTY:function dTY(d){this.a=d},
dTl:function dTl(d){this.a=d},
dTm:function dTm(d){this.a=d},
dTn:function dTn(){},
dTo:function dTo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTs:function dTs(d,e){this.a=d
this.b=e},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTq:function dTq(d){this.a=d},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTp:function dTp(d){this.a=d},
dU3:function dU3(d){this.a=d},
dTF:function dTF(){},
dTG:function dTG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTE:function dTE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTA:function dTA(d,e,f){this.a=d
this.b=e
this.c=f},
dTz:function dTz(d,e,f){this.a=d
this.b=e
this.c=f},
dTx:function dTx(d,e){this.a=d
this.b=e},
dTB:function dTB(d){this.a=d},
dTC:function dTC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTy:function dTy(d,e){this.a=d
this.b=e},
dTD:function dTD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTH:function dTH(d,e){this.a=d
this.b=e},
dUb:function dUb(){},
dUc:function dUc(d,e){this.a=d
this.b=e},
dUd:function dUd(d){this.a=d},
dUe:function dUe(d,e){this.a=d
this.b=e},
dU7:function dU7(d){this.a=d},
dU5:function dU5(d,e){this.a=d
this.b=e},
dU8:function dU8(d,e){this.a=d
this.b=e},
dU9:function dU9(d,e){this.a=d
this.b=e},
dUa:function dUa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUf:function dUf(d){this.a=d},
dU6:function dU6(d){this.a=d},
dTu:function dTu(d){this.a=d},
bed:function bed(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d7u:function d7u(d){this.a=d},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7v:function d7v(d){this.a=d},
d7s:function d7s(d,e){this.a=d
this.b=e},
fvo:function fvo(d,e){this.a=d
this.b=e},
fvp:function fvp(d){this.a=d},
fvq:function fvq(){},
fvm:function fvm(d,e){this.a=d
this.b=e},
fvn:function fvn(){},
fvt:function fvt(d,e){this.a=d
this.b=e},
fvu:function fvu(d){this.a=d},
fvv:function fvv(){},
fvr:function fvr(d){this.a=d},
fvs:function fvs(d,e){this.a=d
this.b=e},
K0:function K0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FL:function FL(d,e){this.a=d
this.b=e},
bef:function bef(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d7x:function d7x(d){this.a=d},
d7O:function d7O(d){this.a=d},
d7G:function d7G(d){this.a=d},
d7H:function d7H(){},
d7F:function d7F(d){this.a=d},
d7y:function d7y(){},
d7E:function d7E(d){this.a=d},
d7D:function d7D(d,e){this.a=d
this.b=e},
d7z:function d7z(d){this.a=d},
d7I:function d7I(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d7J:function d7J(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7L:function d7L(){},
d7M:function d7M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d7N:function d7N(){},
d7w:function d7w(d,e,f,g,h,i,j,k,l,m){var _=this
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
d7A:function d7A(d,e){this.a=d
this.b=e},
d7B:function d7B(d){this.a=d},
d7C:function d7C(){},
aIG:function aIG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
beg:function beg(d,e){this.b=d
this.a=e},
d7P:function d7P(){},
d7Q:function d7Q(d){this.a=d},
d7R:function d7R(d){this.a=d},
d7S:function d7S(){},
bhW:function bhW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdk:function bdk(d,e){this.b=d
this.a=e},
bvG:function bvG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fcB:function fcB(d){this.a=d},
blh:function blh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eOt:function eOt(d){this.a=d},
eOs:function eOs(d,e){this.a=d
this.b=e},
ZR:function ZR(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBv:function aBv(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dnI:function dnI(d,e){this.a=d
this.b=e},
dnH:function dnH(d){this.a=d},
dnF:function dnF(d){this.a=d},
dnG:function dnG(d){this.a=d},
dnR:function dnR(d){this.a=d},
dnS:function dnS(d){this.a=d},
dnQ:function dnQ(d,e){this.a=d
this.b=e},
dnT:function dnT(){},
dnW:function dnW(d){this.a=d},
dnP:function dnP(d,e){this.a=d
this.b=e},
dnV:function dnV(){},
dnX:function dnX(d){this.a=d},
dnO:function dnO(d,e){this.a=d
this.b=e},
dnY:function dnY(d){this.a=d},
dnN:function dnN(d){this.a=d},
dnZ:function dnZ(d){this.a=d},
dnM:function dnM(d){this.a=d},
do_:function do_(d){this.a=d},
dnL:function dnL(d){this.a=d},
do0:function do0(d){this.a=d},
dnK:function dnK(d){this.a=d},
do1:function do1(d){this.a=d},
dnJ:function dnJ(d,e){this.a=d
this.b=e},
dnU:function dnU(d){this.a=d},
ad1:function ad1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhV:function bhV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ad0:function ad0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhU:function bhU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
do2:function do2(d){this.a=d},
do3:function do3(d,e){this.a=d
this.b=e},
aBw:function aBw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHI:function aHI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ad2:function ad2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
doc:function doc(d){this.a=d},
JP:function JP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hbV(d){var w=d.U,v=x.N
return w.ja(w,new C.c8P(),v,v)},
hGl(d){var w=d.bz
if(w>=0)return w
return 5},
hbX(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hbV(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hbW(d,e){var w=C.hbX(d,e)
if(w!=null&&w.cd(new A.S(Date.now(),0,!1)))return!0
return!1},
hGm(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hbV(d),w,w)
u=C.hbX(d,e)
t=u!=null&&u.cd(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bR(A.dE(30,0,0,0,0,0).a).a6().ac())
d.U=v},
aZS(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZS=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lj(t,B.Ie),$async$aZS)
case 3:if(l){u=!0
w=1
break}u=A.kX(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ie,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZS,v)},
c8P:function c8P(){},
hGj(){var w,v=$.py(),u=J.e5(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.h2(u)},
Iu(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Iu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Iu)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Iu)
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
return A.i($async$Iu,v)},
a70(d){return C.hGk(d)},
hGk(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a70=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a70)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a70)
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
return A.i($async$a70,v)},
c8O(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c8O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Iu(),$async$c8O)
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
return A.i($async$c8O,v)},
No(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$No=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c8O(d),$async$No)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Iu(),$async$No)
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
return A.b(C.a70(s),$async$No)
case 9:case 8:u=t
w=1
break
case 5:n=C.hGj()
w=10
return A.b(C.Iu(),$async$No)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a70(s),$async$No)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$No,v)},
aZR(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Iu(),$async$aZR)
case 3:t=f
for(s=J.dl(t),r=s.gdL(t),r=r.dJ(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a70(t),$async$aZR)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZR,v)},
a71(d,e,f){var w=0,v=A.j(x.H),u
var $async$a71=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apm(d,e),$async$a71)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.No(d),$async$a71)
case 7:w=4
break
case 5:w=8
return A.b(C.aZR(d),$async$a71)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a71,v)},
apg(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apg=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apm(f,e),$async$apg)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$apg)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Iu(),$async$apg)
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
return A.i($async$apg,v)},
aZQ(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZQ)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Iu(),$async$aZQ)
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
return A.i($async$aZQ,v)},
hGn(){var w,v=$.py(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.h2(u)},
apj(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$apj)
case 3:if(!g){u=null
w=1
break}t=C.hGn()
w=4
return A.b(A.V_(),$async$apj)
case 4:s=g
r=B.dK.aL(B.S.ao(d.eS(),null))
r=B.cR.gcw().aL(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a72(s),$async$apj)
case 5:p=e?999:2
u=new A.a02("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apj,v)},
api(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$api=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.V_(),$async$api)
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
return A.b(C.aZQ(J.k(l==null?"":l),j),$async$api)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cB(0,B.cI.aL(t))
s=C.hbY(r)}catch(f){q=A.ab(f)
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
return A.b(A.a72(p),$async$api)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$api,v)},
hbY(d){var w,v,u,t,s=null
try{w=B.S.aK(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hGp(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fWJ(d){var w=0,v=A.j(x.m),u,t,s
var $async$fWJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.api(t[1])
w=1
break}u=null
w=1
break}u=C.hbY(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWJ,v)},
hGp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cD(u,new C.c8R(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c8S(),t),t.k("J.E"))}else s=A.a([],x._)
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
n=A.cD(n,new C.c8T(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c8U(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.apk(h,w,s,r,q)},
apm(d,e){var w=0,v=A.j(x.y),u,t
var $async$apm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Nf(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AK(d),$async$apm)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apm,v)},
c9_(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c9_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AK(d),$async$c9_)
case 3:t=s.b6(f,new C.c90(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.c91())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9_,v)},
V0(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$V0=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apm(e,d),$async$V0)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.No(e),$async$V0)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AK(e),$async$V0)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.c8Y(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gan(r)){u=null
w=1
break}t=t.dz(r,new C.c8Z(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KN(e,o),$async$V0)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.apk(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V0,v)},
aZV(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZV=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.V0(d,e,f,g),$async$aZV)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gt(A.JX(q.eS(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZV,v)},
aZU(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZU=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.V0(d,e,f,g),$async$aZU)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.apj(r,f),$async$aZU)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFJ(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZU,v)},
V1(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$V1=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fWJ(a0),$async$V1)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apg(g.a,d,e,f,s,r),$async$V1)
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
return A.b(C.bB_(e,j),$async$V1)
case 12:case 11:w=13
return A.b(C.ahq(e,j,s),$async$V1)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.AW(e,i,h),$async$V1)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.boS(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V1,v)},
apk:function apk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8W:function c8W(){},
c8X:function c8X(){},
c8V:function c8V(){},
c8R:function c8R(){},
c8S:function c8S(){},
c8T:function c8T(){},
c8U:function c8U(){},
c90:function c90(){},
c91:function c91(){},
c8Y:function c8Y(d){this.a=d},
c8Z:function c8Z(d){this.a=d},
h49(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hE(d,new C.apl(w,e,g,i,f,h,null),!0,null,x.H)},
d7r(d,e,f,g,h,i,j,k){return new C.bec(i,e,k,j,g,f,h,d,null)},
apl:function apl(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aD5:function aD5(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dUo:function dUo(d){this.a=d},
dUp:function dUp(d,e,f){this.a=d
this.b=e
this.c=f},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUu:function dUu(d){this.a=d},
dUl:function dUl(d){this.a=d},
dUm:function dUm(d,e){this.a=d
this.b=e},
dUn:function dUn(d,e){this.a=d
this.b=e},
dUs:function dUs(d){this.a=d},
dUr:function dUr(d,e){this.a=d
this.b=e},
dUq:function dUq(){},
dUw:function dUw(d){this.a=d},
dUx:function dUx(d,e){this.a=d
this.b=e},
dUv:function dUv(d,e){this.a=d
this.b=e},
d7T:function d7T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bee:function bee(d,e,f){this.d=d
this.e=e
this.a=f},
aci:function aci(d,e,f){this.c=d
this.d=e
this.a=f},
bec:function bec(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
beh:function beh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_b:function a_b(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD4:function aD4(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dUg:function dUg(d,e){this.a=d
this.b=e},
dUh:function dUh(d){this.a=d},
dUi:function dUi(d){this.a=d},
dUj:function dUj(d){this.a=d},
dUk:function dUk(d){this.a=d},
a_c:function a_c(d){this.a=d},
bjo:function bjo(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dUy:function dUy(d,e){this.a=d
this.b=e},
aYp(d,e){return new C.aYo(d,e,null)},
aYo:function aYo(d,e,f){this.c=d
this.d=e
this.a=f},
i4G(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
ic4(d){return A.bS(B.K,null,new C.fLy(new C.tR(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hdQ(d,e){return new C.asf(e,d,null)},
aQ_(d,e,f,g,h,i,j){var w=C.i4G(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a65(w,!0,null),null),B.aq)
return I.aPm(e,B.bV,f,g,h,i,j)},
lC:function lC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a65:function a65(d,e,f){this.c=d
this.d=e
this.a=f},
bj4:function bj4(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b4$=e
_.c=_.a=null},
dFK:function dFK(d){this.a=d},
dFL:function dFL(){},
dFM:function dFM(d,e){this.a=d
this.b=e},
bj3:function bj3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fLy:function fLy(d){this.a=d},
fLx:function fLx(d,e){this.a=d
this.b=e},
fLw:function fLw(d,e){this.a=d
this.b=e},
fLv:function fLv(d,e){this.a=d
this.b=e},
asf:function asf(d,e,f){this.c=d
this.d=e
this.a=f},
cgu:function cgu(d,e){this.a=d
this.b=e},
aL1:function aL1(){},
ibQ(d){var w=null
return A.ca(w,w,!0,w,new C.fKV(),d,w,!0,!0,x.e2)},
id_(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fSo(h,g,f,e),d,w,!0,!0,x.N)},
ibS(d,e){var w=null
return A.ca(w,w,!0,w,new C.fL_(e),d,w,!0,!0,x.dY)},
ibR(d){var w=null
return A.ca(w,w,!0,w,new C.fKZ(),d,w,!0,!0,x.c5)},
aSY:function aSY(d,e){this.a=d
this.b=e},
aSX:function aSX(d){this.a=d},
aQW:function aQW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKV:function fKV(){},
fSo:function fSo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fL_:function fL_(d){this.a=d},
fKZ:function fKZ(){},
YQ:function YQ(d,e){this.c=d
this.a=e},
ayl:function ayl(){var _=this
_.d=$
_.c=_.a=_.e=null},
d_8:function d_8(d){this.a=d},
d_9:function d_9(d){this.a=d},
d_7:function d_7(d,e){this.a=d
this.b=e},
d_a:function d_a(d){this.a=d},
d_b:function d_b(d){this.a=d},
YP:function YP(d){this.a=d},
ayk:function ayk(){this.d=$
this.c=this.a=null},
d_4:function d_4(d){this.a=d},
d_5:function d_5(d){this.a=d},
d_6:function d_6(d){this.a=d},
Yn:function Yn(d){this.a=d},
ax4:function ax4(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cxH:function cxH(){},
cxN:function cxN(d){this.a=d},
cxO:function cxO(d){this.a=d},
cxP:function cxP(d){this.a=d},
cxM:function cxM(){},
cxQ:function cxQ(d){this.a=d},
cxR:function cxR(d){this.a=d},
cxL:function cxL(){},
cxS:function cxS(d,e){this.a=d
this.b=e},
cxK:function cxK(d,e){this.a=d
this.b=e},
cxI:function cxI(d,e){this.a=d
this.b=e},
cxT:function cxT(d){this.a=d},
cxJ:function cxJ(){},
cxU:function cxU(d){this.a=d},
a0X:function a0X(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvy:function bvy(){this.d=$
this.c=this.a=null},
fc3:function fc3(d,e){this.a=d
this.b=e},
fc4:function fc4(d){this.a=d},
fc5:function fc5(d,e){this.a=d
this.b=e},
abl:function abl(d,e){this.a=d
this.b=e},
Fy:function Fy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bvw:function bvw(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fc1:function fc1(d,e){this.a=d
this.b=e},
awY:function awY(d,e){this.c=d
this.a=e},
bvx:function bvx(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fc2:function fc2(d){this.a=d},
bvv:function bvv(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aNc:function aNc(){},
aNd:function aNd(){},
bCX(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bm(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oK(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fJz(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aW(B.o.u(s),2,"0")
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XN(A.d3(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPC(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i2().lc(85,1280,B.eJ),$async$aPC)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fm(),$async$aPC)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hdP()
w=9
return A.b(C.cgt(q,r),$async$aPC)
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
return A.i($async$aPC,v)},
aPY(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPY=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cgq(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cI.aL(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().Lx(p,!0,null,i).d8(0,B.fM),$async$aPY)
case 9:n=a1
w=10
return A.b(n.m4(),$async$aPY)
case 10:m=a1
w=11
return A.b(J.ahQ(m).hw(B.h0),$async$aPY)
case 11:l=a1
J.ahQ(m).q()
if(l==null){w=8
break}i=J.eX(B.dD.gaP(l))
k="data:image/png;base64,"+B.cR.gcw().aL(i)
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
return A.i($async$aPY,v)},
fJz:function fJz(){},
tR:function tR(d){this.a=d},
ase:function ase(d,e,f){this.c=d
this.d=e
this.a=f},
aEB:function aEB(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eLD:function eLD(d,e){this.a=d
this.b=e},
eLu:function eLu(d){this.a=d},
eLv:function eLv(d){this.a=d},
eLB:function eLB(d,e){this.a=d
this.b=e},
eLA:function eLA(d,e){this.a=d
this.b=e},
eLx:function eLx(d,e){this.a=d
this.b=e},
eLw:function eLw(d,e){this.a=d
this.b=e},
eLy:function eLy(d){this.a=d},
eLz:function eLz(d,e){this.a=d
this.b=e},
eLC:function eLC(d,e){this.a=d
this.b=e},
eLp:function eLp(d,e){this.a=d
this.b=e},
eLt:function eLt(d){this.a=d},
eLs:function eLs(d,e){this.a=d
this.b=e},
eLr:function eLr(d){this.a=d},
eLE:function eLE(d,e){this.a=d
this.b=e},
eLF:function eLF(d,e){this.a=d
this.b=e},
eLq:function eLq(d,e){this.a=d
this.b=e},
hqA(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fJA(d,e,f){var w=0,v=A.j(x.N),u
var $async$fJA=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hqA(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJA,v)},
bCZ(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fJA(!0,d,e),$async$bCZ)
case 4:w=3
return A.b(r.asc(g,d,e.a),$async$bCZ)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aL(B.S.ao(C.hqA(d,e,null),null))
u="NGMY_WS:"+B.kl.gcw().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCZ,v)},
hip(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h3Q(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d0(s,"NGMYWSSYNC2|"))return!0
if(J.d0(s,"NGMY_WS:"))return!0
if(J.f4(s,t))return!0
if(J.d0(s,"{"))try{w=B.S.aK(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i9J(d){var w,v,u,t=C.hip(d)
if(t==null)return null
if(C.h3Q(t))return t
w=B.a.cH(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.h3Q(v))return v}u=B.a.cH(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.h3Q(v))return v}return null},
h3P(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d0(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d0(q,"NGMY_WS:")){v=B.cg.cB(0,B.cI.aL(J.mJ(q,8)))
w=t.a(B.S.aK(0,v,r))}else w=t.a(B.S.aK(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fZi(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCY(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asb(t[1]),$async$bCY)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h3P(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h3P(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCY,v)},
h3O(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lm(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bCv(){var w=0,v=A.j(x.o),u,t
var $async$bCv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GE(),$async$bCv)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h3P(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCv,v)},
hrs(d,e,f,g){return A.bS(B.K,null,new C.fSe(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fSe:function fSe(d,e,f){this.a=d
this.b=e
this.c=f},
adn:function adn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eLH:function eLH(d,e){this.a=d
this.b=e},
eLI:function eLI(d,e){this.a=d
this.b=e},
eLJ:function eLJ(d,e){this.a=d
this.b=e},
eLK:function eLK(d,e){this.a=d
this.b=e},
eLG:function eLG(d){this.a=d},
as8:function as8(d,e,f){this.c=d
this.d=e
this.a=f},
bkL:function bkL(){var _=this
_.c=_.a=_.e=_.d=null},
eLk:function eLk(d,e){this.a=d
this.b=e},
eLl:function eLl(d){this.a=d},
eLm:function eLm(d){this.a=d},
asd:function asd(d){this.a=d},
aEA:function aEA(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eLo:function eLo(d){this.a=d},
eLn:function eLn(d){this.a=d},
hJC(d,e,f,g,h){return new C.O0(h,g,d,e,f,null)},
aJn:function aJn(d,e){this.a=d
this.b=e},
O0:function O0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEC:function aEC(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eM6:function eM6(){},
eM2:function eM2(d,e){this.a=d
this.b=e},
eM3:function eM3(d){this.a=d},
eLO:function eLO(d){this.a=d},
eLM:function eLM(d){this.a=d},
eLN:function eLN(d){this.a=d},
eLX:function eLX(d,e){this.a=d
this.b=e},
eLU:function eLU(d,e){this.a=d
this.b=e},
eLV:function eLV(d,e){this.a=d
this.b=e},
eLW:function eLW(d,e,f){this.a=d
this.b=e
this.c=f},
eLS:function eLS(d,e,f){this.a=d
this.b=e
this.c=f},
eLQ:function eLQ(d){this.a=d},
eLR:function eLR(d){this.a=d},
eLT:function eLT(d){this.a=d},
eM9:function eM9(d){this.a=d},
eM8:function eM8(d){this.a=d},
eMa:function eMa(d){this.a=d},
eM7:function eM7(d){this.a=d},
eLL:function eLL(d){this.a=d},
eLP:function eLP(d,e){this.a=d
this.b=e},
eM5:function eM5(d,e){this.a=d
this.b=e},
eM4:function eM4(d,e){this.a=d
this.b=e},
eM_:function eM_(d){this.a=d},
eM0:function eM0(d){this.a=d},
eM1:function eM1(d,e){this.a=d
this.b=e},
eLZ:function eLZ(d,e){this.a=d
this.b=e},
eLY:function eLY(d,e,f){this.a=d
this.b=e
this.c=f},
bxj:function bxj(){},
AB(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afS(d,e,f){return C.hZd(d,e,f)},
hZd(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afS=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$afS)
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
return A.i($async$afS,v)},
afR(d,e){return C.hZc(d,e)},
hZc(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afR=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afR)
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
return A.i($async$afR,v)},
hXZ(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.SA(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bA0(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bA0=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b26(q),$async$bA0)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPY(q,!1),$async$bA0)
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
return A.i($async$bA0,v)},
hxl(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
fZi(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cD(w,new C.cx5(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cx6(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lm(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
i28(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.a_f
case"female":case"f":return D.ak2
default:return D.y2}},
hng(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h8_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i28(v==null?j:J.k(v))
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
return new C.i1(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i2a(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.N1
case"viewer":return D.kw
default:return D.tV}},
i2b(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gu(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bBh(d,e){return B.a.i(e.toLowerCase())===C.Gu(d,e)&&d.y!==D.kw},
u1(d,e){var w,v=d.y
if(v===D.kw)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gu(d,e))return!0
if(v===D.N1)return!0
v=d.e
return new A.M(v,A.h3U(),A.T(v).k("M<1,m>")).t(0,w)},
i1A(d){return J.dJ(d,new C.fuo()).gM(0)},
fSO(d){var w=0,v=A.j(x.y),u,t
var $async$fSO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AK(d),$async$fSO)
case 3:u=t.qW(f,new C.fSP(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSO,v)},
bB_(d,e){var w=0,v=A.j(x.H),u,t
var $async$bB_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AK(d),$async$bB_)
case 3:t=g
if(J.qW(t,new C.fsv(e))){w=1
break}if(C.i1A(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bB_,v)},
akx(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.da(n,x.f)
w=A.cD(w,new C.bNY(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bNZ(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bO_(),x.N)
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
return new C.kG(l,w,v,!s,t,m,r,q,p,C.i2a(o==null?null:J.k(o)))},
hnp(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CT(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rl(d),$async$CT)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$CT)
case 4:t=f
w=5
return A.b(t.a5W(0),$async$CT)
case 5:w=6
return A.b(C.fjB(t,l),$async$CT)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hj_(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oJ(l,n),$async$CT)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hj_(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oJ(l,n),$async$CT)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CT,v)},
fjB(d,e){return C.hVs(d,e)},
hVs(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fjB=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AB(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aK(0,a5,null)
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AB(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aK(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fZi(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AB(a9)+"_"+n))
i=C.hXZ(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b26(h),$async$fjB)
case 17:g=b1
if(g!=null){i=i.SA(g)
p=!0}case 16:J.ce(q,i)
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
case 8:J.Rw(q,new C.fjC())
if(p&&J.ad(q)!==0)C.oJ(a9,q)
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
return A.i($async$fjB,v)},
bBr(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bBr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rl(d),$async$bBr)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CT(r),$async$bBr)
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
return A.i($async$bBr,v)},
hj_(d){var w,v,u,t
try{w=B.S.aK(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cD(v,new C.ffi(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.ffj(),u),u.k("J.E"))
B.d.aZ(v,new C.ffk())
return v}catch(t){v=A.a([],x.D)
return v}},
oJ(d,e){return C.ibG(d,e)},
ibG(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oJ=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rl(b2),$async$oJ)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$oJ)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AB(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aK(0,p,null)),new C.fKM(),a2).fP(0)
a2=J.b6(b3,new C.fKN(),a2).c0(0,new C.fKO())
n=A.dd(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ec(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f4(n,m)?17:18
break
case 17:a5=C.AB(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8l(l),$async$oJ)
case 19:t=21
a5=C.AB(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aK(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8l(a5==null?null:J.k(a5)),$async$oJ)
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
return A.b(C.afR(r,"ngmy_worksheet_item_v3_"+C.AB(a8)+"_"+m),$async$oJ)
case 29:w=30
return A.b(C.afR(r,"ngmy_worksheet_thumb_v3_"+C.AB(a8)+"_"+m),$async$oJ)
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
return A.b(C.bA0(h),$async$oJ)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afS(r,"ngmy_worksheet_thumb_v3_"+C.AB(a8)+"_"+a4,f),$async$oJ)
case 40:g=i.SA(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afR(r,"ngmy_worksheet_thumb_v3_"+C.AB(a8)+"_"+a4),$async$oJ)
case 41:g=i.SA(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afR(r,"ngmy_worksheet_thumb_v3_"+C.AB(a8)+"_"+a4),$async$oJ)
case 42:case 34:a4=i.a
w=43
return A.b(C.afS(r,"ngmy_worksheet_item_v3_"+C.AB(a8)+"_"+a4,B.S.ao(g.ah(),null)),$async$oJ)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.ce(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afS(r,"ngmy_worksheets_index_v3_"+C.AB(a8),B.S.ao(q,null)),$async$oJ)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eQ(b3,new C.fKP(q))
a4=a3.$ti.k("cO<1,a5<m,@>>")
a7=A.C(new A.cO(a3,new C.fKQ(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afS(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oJ)
case 45:w=46
return A.b(J.hws(r),$async$oJ)
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
return A.i($async$oJ,v)},
Lc(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Lc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CT(d),$async$Lc)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.fSN(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.oJ(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lc,v)},
bBd(d,e){var w=0,v=A.j(x.H),u
var $async$bBd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CT(d),$async$bBd)
case 2:u=g
J.nt(u,new C.fuS(e))
w=3
return A.b(C.oJ(d,u),$async$bBd)
case 3:return A.h(null,v)}})
return A.i($async$bBd,v)},
Gw(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Gw)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aK(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cD(j,new C.fxE(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fxF(),s),s.k("J.E"))
B.d.aZ(r,new C.fxG())
k=r}}catch(h){}w=4
return A.b(C.fg2(d),$async$Gw)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hVP(k,p,d)
j=A.T(o)
s=j.k("M<1,a5<m,@>>")
s=A.C(new A.M(o,new C.fxH(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qy(d,o),$async$Gw)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fxI(d),j),j.k("J.E"))
if(m.length!==0)C.aOv(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gw,v)},
fKy(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fKy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qy(d,e),$async$fKy)
case 3:t=J.dJ(e,new C.fKz(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOv(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKy,v)},
a2y(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a2y)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aK(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cD(m,new C.fSI(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fSJ(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qk(o,new C.fSK(e))
if(B.a.i(e.x).length===0&&C.u1(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDH(e.y===D.kw?D.kw:D.tV,m)}else p=e
if(q===-1)J.pC(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.Qy(d,o),$async$a2y)
case 3:w=C.u1(p,d)?4:5
break
case 4:w=6
return A.b(C.aOu(C.Gu(p,d),p),$async$a2y)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2y,v)},
aOG(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gw(d),$async$aOG)
case 2:u=g
t=J.cF(u)
s=A.rh(t.eQ(u,new C.fuz(e)))
t.br(u,new C.fuA(e))
w=3
return A.b(C.Qy(d,u),$async$aOG)
case 3:w=s!=null&&C.bBh(s,d)?4:5
break
case 4:w=6
return A.b(C.ffm(e),$async$aOG)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOG,v)},
ahF(d){var w=d.f,v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fST(),v),v.k("J.E"))
return w},
h1s(d,e){var w,v=d.f,u=A.rh(new A.a_(v,new C.fu3(e),A.T(v).k("a_<1>")))
v=C.ahF(d)
w=A.T(v).k("a_<1>")
v=A.C(new A.a_(v,new C.fu4(e,u),w),w.k("J.E"))
B.d.aZ(v,new C.fu5())
return v},
i2e(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hrw(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h1s(d,u),new C.fSp(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i3L(d,e){var w
if(e==null||e.length===0)return 1
w=C.h1s(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fyr(),A.T(w).k("M<1,G>")).fe(0,B.Ao)+1},
ibz(d){var w,v=C.ahF(d)
if(v.length===0)return null
w=new A.a_(v,new C.fKs(),A.T(v).k("a_<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
i29(d){return A.F(["id",d.a,"name",d.b,"gender",C.hng(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i3G(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
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
n=n!==D.y2?n:q.c
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
d=q.aDC(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cJM(a1,w,a3.d,a2.y,s,a0,v)},
AK(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$AK)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aK(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.da(t,x.f)
p=A.cD(p,new C.fxB(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fxC(),s),s.k("J.E"))
B.d.aZ(p,new C.fxD())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AK,v)},
ahq(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahq=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tV:D.kw
a7=C.Gu(b2,b3)
w=2
return A.b(C.AK(b1),$async$ahq)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fKn(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bB_(b1,b2),$async$ahq)
case 5:case 4:if(b0===-1){u=b2.aDH(a6,a7)
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
i=i!==D.y2?i:l.c
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
s.n(0,m,l.aDC(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tV:D.kw
u=t.yC(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qy(b1,a8),$async$ahq)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOu(B.a.i(b3.toLowerCase()),u),$async$ahq)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahq,v)},
hjn(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("M<1,a5<m,@>>"),k=A.C(new A.M(m,C.hqI(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hjo(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("M<1,a5<m,@>>")
u=A.C(new A.M(u,C.hqI(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hTq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akx(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h3U(),A.T(j).k("M<1,m>")).c0(0,new C.ffQ())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tV
else s=B.d.t(t,u)?D.N1:D.kw
return w.aDH(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akx(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cD(h,new C.ffR(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.ffS(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.ffT(),x.N).c0(0,new C.ffU())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tV
else s=B.d.t(t,u)?D.N1:D.kw
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
return new C.kG(h,r,p,!m,t,o,l,j,v,s)},
fg2(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fg2=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fg6()
h=x.N
g=x.z
w=7
return A.b(A.iP(A.a([A.ls("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.ls("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.ls("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.U),$async$fg2)
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
h=A.cD(new A.bc(l,h),new C.fg3(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.fg4(),l),l.k("J.E"))
B.d.aZ(l,new C.fg5())
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
return A.i($async$fg2,v)},
hVP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dz(e,new C.fkg(),v).c0(0,new C.fkh())
t=A.dd(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gu(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kw){m=q.e
m=!new A.M(m,A.h3U(),A.T(m).k("M<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i3G(l,v)
o=C.Gu(k,w)
p=v.d
s.n(0,u,o===w?k.bbU(p,D.tV):k.bbU(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aZ(j,new C.fki())
return j},
Qy(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$Qy)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fmZ(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$Qy)
case 3:return A.h(null,v)}})
return A.i($async$Qy,v)},
aOu(d,e){return C.i_Y(d,e)},
i_Y(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lU("family_trees",A.a([C.hjn(e,d)],p),null,B.cH),$async$aOu)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lU("family_trees",A.a([C.hjo(e,d)],p),null,B.cH),$async$aOu)
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
return A.i($async$aOu,v)},
aOv(d,e){return C.i_Z(d,e)},
i_Z(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOv=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("M<1,a5<m,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.frP(d),n),m)
r=l
w=7
return A.b(A.lU("family_trees",r,null,B.cH),$async$aOv)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.frQ(d),n),m)
p=k
w=8
return A.b(A.lU("family_trees",p,null,B.cH),$async$aOv)
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
return A.i($async$aOv,v)},
ffm(d){return C.hSL(d)},
hSL(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ffm=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QW("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$ffm)
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
return A.i($async$ffm,v)},
r_:function r_(d,e,f,g,h){var _=this
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
cx8:function cx8(){},
cx7:function cx7(){},
cx5:function cx5(){},
cx6:function cx6(){},
HB:function HB(d,e){this.a=d
this.b=e},
i1:function i1(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
akw:function akw(d,e){this.a=d
this.b=e},
fuo:function fuo(){},
fSP:function fSP(d){this.a=d},
fsv:function fsv(d){this.a=d},
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
bO1:function bO1(){},
bO0:function bO0(){},
bNY:function bNY(){},
bNZ:function bNZ(){},
bO_:function bO_(){},
fjC:function fjC(){},
ffi:function ffi(){},
ffj:function ffj(){},
ffk:function ffk(){},
fKM:function fKM(){},
fKN:function fKN(){},
fKO:function fKO(){},
fKP:function fKP(d){this.a=d},
fKQ:function fKQ(){},
fSN:function fSN(d){this.a=d},
fuS:function fuS(d){this.a=d},
fxE:function fxE(){},
fxF:function fxF(){},
fxG:function fxG(){},
fxH:function fxH(){},
fxI:function fxI(d){this.a=d},
fKz:function fKz(d){this.a=d},
fSI:function fSI(){},
fSJ:function fSJ(){},
fSK:function fSK(d){this.a=d},
fuz:function fuz(d){this.a=d},
fuA:function fuA(d){this.a=d},
fST:function fST(){},
fu3:function fu3(d){this.a=d},
fu4:function fu4(d,e){this.a=d
this.b=e},
fu5:function fu5(){},
fSp:function fSp(d){this.a=d},
fyr:function fyr(){},
fKs:function fKs(){},
fxB:function fxB(){},
fxC:function fxC(){},
fxD:function fxD(){},
fKn:function fKn(d){this.a=d},
ffQ:function ffQ(){},
ffR:function ffR(){},
ffS:function ffS(){},
ffT:function ffT(){},
ffU:function ffU(){},
fg6:function fg6(){},
fg7:function fg7(d){this.a=d},
fg3:function fg3(d){this.a=d},
fg4:function fg4(){},
fg5:function fg5(){},
fkg:function fkg(){},
fkh:function fkh(){},
fki:function fki(){},
fmZ:function fmZ(){},
frP:function frP(d){this.a=d},
frQ:function frQ(d){this.a=d},
cx9:function cx9(d,e){this.a=d
this.b=e},
cxa:function cxa(d,e){this.a=d
this.b=e},
aGF:function aGF(d,e,f){this.a=d
this.b=e
this.c=f},
b8p:function b8p(){this.b=this.a=0},
b8o:function b8o(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bvz:function bvz(){},
wO(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcu()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aW(B.o.u(w.gne()),2,"0")+":"+B.a.aW(B.o.u(w.gGe()),2,"0")},
hJz(){var w,v=$.py(),u=J.e5(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.h2(u)},
as9(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$as9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$as9)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$as9)
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
return A.i($async$as9,v)},
asa(d){return C.hJA(d)},
hJA(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$asa=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$asa)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$asa)
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
return A.i($async$asa,v)},
asc(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$asc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$asc)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hJz()
w=4
return A.b(C.as9(),$async$asc)
case 4:r=h
q=B.a.i(e)
p=B.dK.aL(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cR.gcw().aL(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.asa(r),$async$asc)
case 5:u=new A.a02("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asc,v)},
asb(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$asb)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.as9(),$async$asb)
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
try{s=B.cg.cB(0,B.cI.aL(t))}catch(h){r=A.ab(h)
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
return A.b(C.asa(q),$async$asb)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asb,v)},
hdP(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cG.av(999999)},
hJB(d){var w,v,u,t,s,r,q
try{w=A.agg(d)
if(w==null)return d
v=w
if(J.Li(v)>960||J.Lh(v)>960){s=v
r=J.Li(v)>=J.Lh(v)?960:null
v=A.agf(s,J.Lh(v)>J.Li(v)?960:null,B.On,r)}s=v
u=A.alV(82).SX(s,B.yL)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
cgt(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cgt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hJB(e)
$.cgp.n(0,s,t)
u=C.bD0(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgt,v)},
b26(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b26=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d0(l,"data:image")){u=null
w=1
break}t=4
r=J.f4(l,",")?B.d.gal(J.lu(l,",")):l
q=B.cI.aL(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hdP()
w=7
return A.b(C.cgt(p,q),$async$b26)
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
return A.i($async$b26,v)},
cgq(d){var w=0,v=A.j(x.T),u,t,s
var $async$cgq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cgs(s),$async$cgq)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cR.gcw().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgq,v)},
a8l(d){var w=0,v=A.j(x.H),u,t
var $async$a8l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hqB(d)
if(t==null){w=1
break}$.cgp.W(0,t)
w=3
return A.b(C.bD_(t),$async$a8l)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8l,v)},
bD0(d,e){return C.i9M(d,e)},
i9M(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bD0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNp
w=7
return A.b(n==null?$.aNp=I.h0r():n,$async$bD0)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.mK(r,"thumbs","readwrite")
B.iN.mm(J.mI(p,"thumbs"),q,l)
w=8
return A.b(J.pB(p),$async$bD0)
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
return A.i($async$bD0,v)},
bD_(d){return C.i9K(d)},
i9K(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bD_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNp
w=7
return A.b(o==null?$.aNp=I.h0r():o,$async$bD_)
case 7:r=f
q=J.mK(r,"thumbs","readwrite")
B.iN.FL(J.mI(q,"thumbs"),m)
w=8
return A.b(J.pB(q),$async$bD_)
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
return A.i($async$bD_,v)}},D,Ak,Al,R,Am,An,I
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
T=c[99]
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
P=c[98]
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
C.ao3.prototype={}
C.aYq.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bgf(),f=h.x!=null&&h.z2(i).length===0
if(h.x!=null)w=f?B.aZ:B.bz
else w=h.gTz()?B.bz:B.dU
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.I(D.bgw,B.q,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.eQZ,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h7,i,i,i),B.R,D.fjY,B.au,A.d(C.wO(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ffT,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b0C,i,i,i,i,B.Ze,i,i,i)
q=A.n(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h2t(h.d)
o=A.p(B.A,C.aYp(A.fAM(h.e,n),30),B.f,i,i,new A.o(B.lM,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fbg,B.L,i,i)
m=A.n(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bC,D.fkf,B.ac,A.p(i,A.x(A.a([D.fzK,B.bC,A.d(A.AM(h.c),i,i,i,i,i,i,D.f6e,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fa,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.ai8,i,i,i)
p=A.n(16)
m=A.I(B.aL,B.q,1)
l=j.aQo("Original due",C.wO(h.r,!1))
n=j.aQo("Current due",C.wO(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.O,n,B.R,A.p(i,A.d(h.gaKx(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Bb,i,i,1/0),B.R,j.cfb(),B.O,j.c2F(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.flb,B.au,A.d(q,i,i,i,i,i,i,D.fay,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaFi()){q=A.n(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fB2,B.O,A.bw(A.n(12),A.en(new A.a7(1/0,88,A.b3(i,i,i,new A.VS(h.ax,B.M,D.eVb,!0,3.5,i),B.ax),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fv,i,i,i)],s))}p.push(B.aB)
p.push(D.ftb)
return A.p(i,A.x(A.a([r,new A.D(B.aib,A.x(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQo(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a8C,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f7e,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cfb(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9a(B.dU,u,"Not paid yet")
w=t.z2(null).length
v=w===0?B.aZ:B.bz
return this.a9a(v,u,C.wO(t.x,!0))},
c2F(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9a(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9a(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a8C,u,u,u)
v=A.T(d).k("M<1,he>")
v=A.C(new A.M(d,new C.c2h(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bV(B.bA,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a9a(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a8C,w,w,w),1),new A.dq(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.bay.prototype={
a4(d,e){new A.VS(this.b,B.M,e,!0,3.5,null).a4(d,e)},
au(d){return d.b!==this.b}}
C.aof.prototype={
T(){return new C.aCw(A.a([],x.bp))},
ge1(){return this.c}}
C.aCw.prototype={
Z(){this.a1()
this.IE()},
IE(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1P(t.a.c),$async$IE)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dGC(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IE,v)},
aSm(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bs:B.bn).j(0.22)
w=A.n(10)
return A.bs(v,new A.b4(4,r,new A.az(u,1,B.q,-1)),v,B.bl,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bs:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.n(10),D.aZf),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aSl(d){return this.aSm(d,null)},
Pf(d){return this.ciM(d)},
ciM(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pf=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GM:B.eJ
w=7
return A.b(new A.i2().C5(72,900,900,n),$async$Pf)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fm(),$async$Pf)
case 8:p=f
n=B.cR.gcw().aL(p)
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
if(n!=null)n.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.u(o),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pf,v)},
b04(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.n(10),n=A.I((q?B.bs:B.bn).j(0.18),B.q,1)
if(d)q=B.cT
else q=s.a.d.a?B.bs:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cT
else u=s.a.d.a?B.bs:B.bn
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fy(r,r,r,r,r,r,r,r,r,r,r,B.cT,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cB,s.a.d.a?B.bs:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jI,D.bsD,r,r,r)},
D4(d){return this.bzz(d)},
bzy(){return this.D4(null)},
bzz(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D4=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b5,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jc(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ab(p,2)}o=new A.as(new A.bb(a4,B.b5,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b5,B.aO),s)
if(a3){a4=new A.S(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcj(),a4.gcf(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gcf(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h2t(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wh?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hY(B.w.j(0.55),!0,"Dismiss",a4,new C.dGl(),new C.dGm(a2,t,a5,r,new C.dGn(a2,t),o,n,j),B.eH,!0,x.y),$async$D4)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d6(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.J(x.q).f.S(D.f0C)
w=1
break}a0=a2.d
if(a0==null){t.c.J(x.q).f.S(D.f_h)
w=1
break}a1=A.fAM(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wh?"male":"female"
w=7
return A.b(A.ahE(a3,A.hay(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D4)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wh?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gcf(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gcf(),a4.gcu(),0,0,0,0,0)))a5.cLW(a2.a)
w=8
return A.b(A.ahE(t.a.c,a5),$async$D4)
case 8:case 5:w=9
return A.b(t.IE(),$async$D4)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D4,v)},
aT_(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cT.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cT
else s=(this.a.d.a?B.bs:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aYp(d,18)
if(g)q=B.cT
else q=this.a.d.a?B.aQ:B.aw
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
RW(d){return this.cAu(d)},
cAu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hY(B.w.j(0.55),!0,"Dismiss",s,new C.dGF(),new C.dGG(t,d),B.hz,!0,x.y),$async$RW)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahE(t.a.c,d),$async$RW)
case 7:w=8
return A.b(t.IE(),$async$RW)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RW,v)},
NU(d,e){return this.bKs(0,e)},
bKs(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l7(s,"Cancel","Delete",e.b+" \xb7 "+A.AM(e.c)+" will be removed from this device.","Delete this debt?"),$async$NU)
case 3:if(!g){w=1
break}w=4
return A.b(C.fuG(t.a.c,e.a),$async$NU)
case 4:w=5
return A.b(t.IE(),$async$NU)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NU,v)},
aeJ(d){return this.ccD(d)},
ccD(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bS(B.K,null,new C.dGz(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeJ)
case 2:return A.h(null,v)}})
return A.i($async$aeJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ecF
w=J.dJ(m.d,new C.dGH())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dGI())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cL(v,0,new C.dGJ())
w=A.n(18)
s=m.a.d.a
r=s?D.cqC:D.ayz
q=A.I(s?B.cT.j(0.35):B.cT.j(0.18),B.q,1)
s=A.p(l,D.bSQ,B.f,l,l,new A.o(B.cT.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.n(12),A.aL(!1,A.n(12),!0,D.ec3,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dGK(m),l,l,l,l,l,l,l),B.f,B.cT,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cwG("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AM(t)
r=A.a([A.p(l,A.x(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b6f(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.az,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ai5,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e0:B.c
q=A.n(18)
o=A.I((w?B.bs:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bNL,B.f,l,l,new A.o(B.cT.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bv2,l,l,1/0))}else{w=m.gci3()
s=A.C(new A.M(v,w,A.T(v).k("M<1,t>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bwJ,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.T(u).k("M<1,t>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ai,l,B.e,B.j,0,B.p)},
b6f(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.I((v.a.d.a?B.bs:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cT
else w=v.a.d.a?B.aQ:B.aw
return A.p(u,A.x(A.a([q,B.bC,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ek,u,u,u)},
cwG(d,e){return this.b6f(!1,d,e)},
ci4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z2(j).length,h=d.bfs()
if(d.x!=null){w=d.z2(j).length
v=w===0?B.cT:B.bz}else if(d.gTz())v=B.bz
else{if(h)w=B.cT
else w=k.a.d.a?B.bs:B.bn
v=w}if(d.x!=null){w=d.z2(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wO(u,!1)}else{u.toString
t="Paid "+C.wO(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wO(w,!1)+" \xb7 "+i+" missed":"Due "+C.wO(w,!1)}w=k.a.d.a?B.e0:B.c
u=A.n(18)
if(d.gTz()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bs:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bm:B.lM
o=A.I(d.gTz()&&d.x==null?B.bz.j(0.45):B.cT.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h2t(d.d)
o=A.p(B.A,A.de(C.aYp(A.fAM(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.aw
m=x.p
n=A.a([new A.dq(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFi())B.d.v(n,A.a([B.ee,A.X(B.Ns,B.cT.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cV,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AM(d.c)
l=k.a.d.a?B.aQ:B.aw
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(W.ahR,A.B(A.a([o,B.be,p,B.ab,A.x(A.a([n,B.bC,A.X(B.eA,(k.a.d.a?B.bs:B.bn).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dGB(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uh.prototype={}
C.akv.prototype={
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
n.push(A.aC(a0,A.p(a0,A.X(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.auV,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FN,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eQ(m,A.B(l,B.m,a0,B.e,B.N,0,a0,a0),B.f,B.dZ)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.brQ,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.eW_)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vy,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lm,A.x(a2,B.m,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hn,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.az,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bt2,a0,a0,a0,a0)}}
C.aUb.prototype={
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
if(p.z)o.push(new A.D(B.vv,n,q))
return new A.D(B.da,A.x(o,B.m,q,B.e,B.N,0,B.p),q)}}
C.SB.prototype={
T(){return new C.bea()}}
C.bea.prototype={
gbYF(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.ecA,D.ecG],l)
for(w=0;w<8;++w){v=D.a2b[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gx:B.BX
q=t===s
r=A.X(r,q?B.eC:B.bW,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bh,new A.y(v.c,n,A1.Dx,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.az(B.eC,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aC(n,new A.D(B.eD,A.x(A.a([new A.D(B.mv,new A.cl(B.aP,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DV(!0,new C.akv(v,q.d,q.e,new C.d6p(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6q(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.btl,A.bG(D.fGp,new C.d6r(o,d),A.bn(B.b6,n,n,n,n,B.ol,n,n,new A.b7(A.n(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.bxA,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.ne.prototype={
ah(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bc5(d,e,f){return new C.ne(this.a,e,d,f)}}
C.HA.prototype={
wj(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HA(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDw(d){var w=null
return this.wj(w,w,w,w,w,d,w,w,w,w,w,w)},
cHK(d){var w=null
return this.wj(w,w,w,w,d,w,w,w,w,w,w,w)},
bc3(d,e,f){var w=null
return this.wj(d,w,w,w,w,w,w,w,e,w,f,w)},
cIo(d){var w=null
return this.wj(w,w,w,w,w,w,d,w,w,w,w,w)},
cIx(d){var w=null
return this.wj(w,w,w,w,w,w,w,w,w,d,w,w)},
cHI(d){var w=null
return this.wj(w,w,w,d,w,w,w,w,w,w,w,w)},
cIz(d){var w=null
return this.wj(w,w,w,w,w,w,w,w,w,w,w,d)},
cHF(d){var w=null
return this.wj(w,w,d,w,w,w,w,w,w,w,w,w)},
cHA(d){var w=null
return this.wj(w,d,w,w,w,w,w,w,w,w,w,w)},
FD(d){var w=null
return this.wj(w,w,w,w,w,w,w,d,w,w,w,w)},
cIH(d,e,f,g,h,i,j,k,l,m,n){return this.wj(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cFm(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bNX(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cQ(d.h(0,n))).length!==0?B.a.i(A.cQ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cQ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CF.gef(D.CF))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3N)
q=l.$2("frame",D.a3b)
l=l.$2("texture",D.a36)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cQ(d.h(0,"author"))):o
return this.cIH(p,u,t,q,r,A.qQ(d.h(0,"ribbon"))?A.G5(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Zd.prototype={
T(){return new C.azA(A.a([],x.I),D.N0)},
ge1(){return this.c}}
C.azA.prototype={
Z(){var w,v=this
v.a1()
v.f=A.zC(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.l0()
w=v.a
C.bBo(w.c,w.d).bC(new C.d75(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.U$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.P$=0
v.a2()},
l0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KN(s.c,s.d),$async$l0)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d6U(t,r))
t.avm()
case 1:return A.h(u,v)}})
return A.i($async$l0,v)},
garX(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avm(){var w,v,u=this.garX(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saY(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saY(0,w==null?"":w)},
cb3(d){this.m(new C.d6R(this,d))
this.avm()},
Nf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Nf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.ne(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQi(r.c,r.d,s),$async$Nf)
case 3:w=4
return A.b(t.l0(),$async$Nf)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qk(t.d,new C.d6s(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d6t(t,p))
t.avm()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B7(p+1,B.cu,B.kU),$async$Nf)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Nf,v)},
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
break}s=t.garX()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQi(o.c,o.d,new C.ne(s,r,q,new A.S(p,0,!1))),$async$AN)
case 3:w=4
return A.b(t.l0(),$async$AN)
case 4:if(t.c==null){w=1
break}t.m(new C.d6V(t))
case 1:return A.h(u,v)}})
return A.i($async$AN,v)},
NV(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garX()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6B(r),s,null,!0,!0,x.y),$async$NV)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bB9(s.c,s.d,r.a),$async$NV)
case 4:t.m(new C.d6C(t))
w=5
return A.b(t.l0(),$async$NV)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TC(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$NV,v)},
ym(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$ym)
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
return A.b(C.QP(s,r.r,o,p,q),$async$ym)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hr5(s,r.x,r.r),$async$ym)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KN(s.c,s.d),$async$ym)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.ne(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AW(r.c,r.d,l),$async$ym)
case 11:w=12
return A.b(t.l0(),$async$ym)
case 12:r=t.c
if(r==null){w=1
break}r.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ym,v)},
a0f(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$a0f)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyk(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yU,new C.d6S(t),new C.d6T())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mu("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new F.mu(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h45(o,new F.rm(s,r,"",p,new F.uz(q.d,null,null,null,null,"","","")),null),$async$a0f)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0f,v)},
ND(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ND=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$ND)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bS(D.adr,null,new C.d6x(t),s,!0,!0,!0,P.a6O,!1,!1,x.N),$async$ND)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cHK(r)
t.m(new C.d6y(t,q))
s=t.a
w=7
return A.b(C.Ro(s.c,s.d,q),$async$ND)
case 7:case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
WM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(D.adr,null,new C.d6D(t),r,!0,!0,!0,P.a6O,!1,!1,x.e),$async$WM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d6E(t,s))
r=t.a
w=4
return A.b(C.Ro(r.c,r.d,s),$async$WM)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B7(0,B.dV,B.o1)
case 1:return A.h(u,v)}})
return A.i($async$WM,v)},
bPP(d){var w=d.bU(),v=B.a.aW(B.o.u(w.gcf()),2,"0"),u=B.a.aW(B.o.u(w.gcu()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gyk(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bXU()
if(r.e)w=D.acg
else if(J.cn(r.d)){w=r.y
v=r.gyk(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f5G,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.aj6,new C.Yw(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kp.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aC(q,A.p(q,D.eQM,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dR.j(0.45),B.J,18)],x.V),E.w6,B.n),q,q,q,q,B.Zo,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcEu(),q,q,q,q,q,q,!1,B.a7))
w.push(B.R)
w.push(A.hn(D.bJZ,D.fFS,r.gaMg(),q))
B.d.v(u,w)}w=A.av(A.cd(A.x(u,B.m,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kp.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.Am
u=A.x(A.a([new A.D(D.bum,w,q),A.E(A.IU(v,new C.d73(r),J.ad(r.d)+1,q,r.gcb2(),u,B.aP),1),r.bCs()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c6(q,D.aeR,new A.an(B.W,q,B.b1,B.r,A.a([D.aLK,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bXU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JT(B.dX,"AI",h.gbAl(),!0))
if(h.a.f)f.push(new C.JT(B.nm,"Cover",h.gbL1(),!1))
if(h.a.f)f.push(new C.JT(B.yw,"Header",h.gbFZ(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JT(B.u9,"Print",h.gck5(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.ho:B.jr
t=v?"Save":"Edit"
f.push(new C.JT(u,t,v?h.gcqp():new C.d6O(h),!1))}if(h.a.f)f.push(new C.JT(B.hB,"Add page",h.gaMg(),!1))
v=C.hnf(h.y.Q)
u=h.gyk(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dte
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jY.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kp,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kp.j(0.85)
p.push(new A.bB(1,B.bh,A.aC(B.c7,A.x(A.a([k,B.bC,new A.y(l.b,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.akv(v,u,t+" \xb7 "+s+" "+r,new C.d6P(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$zP)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a23(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d6u(t,p),s,null,!0,!0,x.N),$async$zP)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.ym(),$async$zP)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DG(),$async$zP)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Ff("Swahili (Kiswahili)",!0),$async$zP)
case 18:w=16
break
case 17:w=19
return A.b(t.cB9(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zP)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zP,v)},
YH(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.I(E.jY.j(0.3),B.q,1),r=x.p
return new A.D(B.cw,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.w6,B.a5),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A9.TT,w,w,w),A.d(g,w,w,w,w,w,w,A3.TO,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d6Q(d,h),w,w,w,w,w,w,w),w)},
DG(){return this.bPj()},
bPj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DG=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6H(r),a7,null,!0,!0,x.ei),$async$DG)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d6I(o),a7,null,!0,!0,x.H).fi(new C.d6J(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ce(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yU[a1]
J.ce(j,i.a)}w=8
return A.b(C.agO(a0,a7,new C.d6K(o),d,l,e,j),$async$DG)
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
l.si3($.aw())
J.aQK(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.J(x.q).f
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
a7=j.bc5(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AW(j.c,j.d,l),$async$DG)
case 11:w=12
return A.b(r.l0(),$async$DG)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yU[a1].a)
a5=l.cFm(j,12,a7)
l=r.a
w=15
return A.b(C.Ro(l.c,l.d,a5),$async$DG)
case 15:if(r.c!=null)r.m(new C.d6L(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B7(0,B.dV,B.o1)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.J(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b2(a3?A.crz("Undo",new C.d6M(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.eg,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DG,v)},
Ff(d,e){return this.cBa(d,e)},
cB9(d){return this.Ff(d,!1)},
cBa(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ff=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d6X(a0),k,null,!0,!0,x.H).fi(new C.d6Y(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ce(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a2g(m,new C.d6Z(a0)),$async$Ff)
case 10:w=8
break
case 9:w=11
return A.b(C.bCS(new C.d7_(a0),m,a2),$async$Ff)
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
o.si3($.aw())
J.aQK(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.J(x.q).f
k=q
o.S(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bc5(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AW(k.c,k.d,o),$async$Ff)
case 12:w=13
return A.b(r.l0(),$async$Ff)
case 13:o=r.c
if(o==null){w=1
break}o=o.J(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(A.crz("Undo",new C.d70(r,d),null),null,null,null,null,B.r,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ff,v)},
bCs(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d6v(v):u
r=A.aH(u,u,u,u,A.X(D.bFF,s?D.kp:B.b_,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hn(A.X(B.vL,B.F8,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.F8,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbKB(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kp.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d6w(v):u
return A.bm(!0,new A.D(D.bua,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eA,t<J.ad(v.d)?D.kp:B.b_,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Zh.prototype={
T(){return new C.bev(new A.as(B.as,$.aw()))}}
C.bev.prototype={
ga1n(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
gbO0(){var w,v=this.ga1n()
A:{if("cover"===v){w=D.cX_
break A}if("book"===v){w=D.cSL
break A}w=D.dlm
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.jY.j(0.5),n=x.p,m=A.B(A.a([D.dtf,B.at,D.bzB,A.aH(q,q,q,q,B.lt,q,q,q,new C.d8Q(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j9(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d8R(r),r.ga1n()==="page",q,q,q,q))
if(r.a.d)l.push(A.j9(q,q,q,D.fAz,q,new C.d8S(r),r.ga1n()==="book",q,q,q,q))
l.push(A.j9(q,q,q,D.fnN,q,new C.d8T(r),r.ga1n()==="cover",q,q,q,q))
l=A.bV(B.bA,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.U,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.n(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kJ,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dp,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbO0(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mL(q,B.c.j(0.08),new A.y(s,q,B.Ji,q,q,q,q,q,q,q,q,q),B.hG,new C.d8U(r,s),q,q,q,q))}return A.eL(q,E.AS,A.cd(A.x(A.a([m,B.R,D.fDN,B.am,l,B.ac,k,B.O,A.bV(B.bA,w,B.br,6,6),B.aB,A.dn(D.bJW,D.fEA,new C.d8V(r,d),A.bn(B.b6,q,q,q,q,B.ol,q,q,new A.b7(A.n(16),B.Y),q,q,q)),B.au,D.fyP],n),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.fD,q,q,B.ah),q,q,q,D.aiP,B.d1,q,new A.b7(p,new A.az(o,1.4,B.q,-1)),q)}}
C.Zf.prototype={
T(){return new C.azB(A.a([],x.Y))},
ge1(){return this.c}}
C.aeB.prototype={}
C.azB.prototype={
Z(){this.a1()
this.l0()},
l0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QS(p.c,p.d),$async$l0)
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
return A.b(C.bBo(r.c,q),$async$l0)
case 6:j=e
i=J
w=7
return A.b(C.KN(t.a.c,q),$async$l0)
case 7:m.push(new l.aeB(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d7k(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l0,v)},
b7s(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PW(d,e){return this.ccB(0,e)},
ccB(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cm(A.ea(new C.d7j(u,e),!0,null,x.y)),$async$PW)
case 2:t=g
w=3
return A.b(u.l0(),$async$PW)
case 3:if(t===!0&&u.c!=null)u.c.J(x.q).f.S(D.aPg)
return A.h(null,v)}})
return A.i($async$PW,v)},
Fi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.J(x.q).f.S(D.aPc)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ag8(s.c,s.d),$async$Fi)
case 5:q=e
w=6
return A.b(t.l0(),$async$Fi)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PW(0,B.d.h7(t.d,new C.d7o(q))),$async$Fi)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QP(p,s.f,r,n,o),$async$Fi)
case 10:m=e
w=11
return A.b(t.l0(),$async$Fi)
case 11:if(m&&t.c!=null)t.c.J(x.q).f.S(D.aPg)
case 1:return A.h(u,v)}})
return A.i($async$Fi,v)},
Pq(d,e){return this.co4(0,e)},
co4(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d7n(t,e),s,null,!0,!0,x.y),$async$Pq)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2s(s.c,s.d,e.a),$async$Pq)
case 4:w=5
return A.b(t.l0(),$async$Pq)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pq,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bCv(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.I(E.jY.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aC(n,new A.fL(0.7142857142857143,A.p(n,A.x(A.a([D.dtg,B.ac,D.ebJ,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kp.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcEq(),n,n,n,n,n,n,!1,B.a7))}w=A.n(22)
v=A.I(E.jY.j(0.85),B.q,1.6)
s=A.aC(n,A.p(n,D.bRE,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jY.j(0.6),B.q,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d7p(d),n,n,n,n,n,n,!1,B.a7)
r=A.n(14)
q=B.w.j(0.3)
p=A.I(E.jY.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.be,D.bzZ,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f4L,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h7,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bXu,B.n),n,n,n,Am.Mv,D.bsi,n,n,n)
if(o.e)k=D.acg
else k=k.length===0?D.b5E:A.cq(new C.d7q(k))
return A.c6(n,D.aeR,new A.an(B.W,n,B.b1,B.r,A.a([D.aLK,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bCv(d){var w,v,u=this,t=null,s=u.b7s(d),r=d.c,q=x.p,p=A.a([A.bX(0,A.eQ(B.A,new A.a7(300,420,new C.Yw(d.b,s,r,t),t),B.f,B.dv),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aC(t,A.p(t,D.bQY,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b_,B.q,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d7h(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f4l,t,t,t)
v=r===1?"page":"pages"
return A.aC(t,A.x(A.a([new A.fL(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kp.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d7i(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JT.prototype={}
C.Yw.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yU,new C.cFV(m),new C.cFW()),j=m.c,i=D.CF.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m0:B.b9
v=new C.cFX(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e92,28)],x.V)
u=x.p
t=A.a([A.bX(0,A.b3(l,l,l,new C.bbL(j.x,h,l),B.ax),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aj7,8,0.85,2.2),v.$4(D.bx1,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aj7,8,0.85,2.4))
else if(r==="corners")t.push(A.bX(0,new A.D(D.bwY,A.b3(l,l,l,new C.bbC(h,l),B.ax),l),0,0,0))
r=A.X(D.axA[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.auV,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bX(0,new A.D(D.bxs,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGA(l),D.eV4),l,l,l,46,0,l))
return A.p(l,A.bw(D.aaW,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aaW,i,new A.a8(B.az,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbL.prototype={
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
C.bbC.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bS
for(w=e.a,v=e.b,v=[D.eLN,new A.cA([w,0,-1,1]),new A.cA([0,v,1,-1]),new A.cA([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
C.YO.prototype={
T(){return new C.bbJ()}}
C.bbJ.prototype={
go6(){var w=this.d
return w===$?this.d=this.a.c:w},
gyk(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b5,B.aO),$.aw())}return v},
gaAJ(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b5,B.aO),$.aw())}return v},
gaqu(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b5,B.aO),$.aw())}return v},
q(){var w=this,v=w.gyk(0),u=v.U$=$.aw()
v.P$=0
v=w.gaAJ()
v.U$=u
v.P$=0
v=w.gaqu()
v.U$=u
v.P$=0
w.a2()},
ar6(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j9(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cZm(this,f,u),e===u,s,s,s,s))}return A.bV(B.bA,r,B.br,6,8)},
awN(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.n(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kI,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go6(),a0=f.gyk(0),a1=a0.a.a,a2=f.gaAJ(),a3=a2.a.a,a4=f.gaqu(),a5=d.bc3(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.eQ(B.A,new A.a7(270,370,new C.Yw(a5,d,f.a.e,e),e),B.f,B.dv),e),e,e,e)
a0=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awN("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZL(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awN("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZM(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yU[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b_
q=r.a===q
o=new A.az(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.az,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aC(e,A.x(A.a([p,B.cV,new A.y(t.b,e,new A.H(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZN(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bV(B.bA,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.eC:B.K,2,B.q,-1)
q.push(A.aC(e,A.p(e,A.X(D.axA[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZO(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bV(B.bA,q,B.br,8,8)
a4=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awN("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZP(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mQ,e,e,e)
m=A.a([],w)
for(l=D.CF.gdL(D.CF),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eC:B.b_
g=r.e===i
o=new A.az(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aC(e,A.x(A.a([j,B.bC,new A.y(i,e,new A.H(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZQ(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bV(B.bA,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mQ,e,e,e)
k=f.go6()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fyi,B.ac,d,B.aR,a0,B.R,a2,B.aB,D.fEm,B.O,v,B.aB,D.fyr,B.O,q,B.aB,a4,B.aB,p,B.O,m,B.aB,l,A.l1(e,9,""+B.k.V(f.go6().f),36,18,new C.cZR(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.ar6(D.a3N,f.go6().r,new C.cZS(f),D.doB),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.ar6(D.a3b,f.go6().w,new C.cZT(f),D.doG),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.ar6(D.a36,f.go6().x,new C.cZV(f),D.dqd),B.am,A.iI(e,B.b6,e,B.af,e,new C.cZW(f),e,e,e,D.fsJ,f.go6().z),B.by,A.bG(D.fx6,new C.cZX(f,a6),A.bn(B.b6,e,e,e,e,B.ol,e,e,new A.b7(A.n(16),B.Y),e,e,e))],w),e,R.aiF,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGA.prototype={
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
u.sar(D.bY9.aw(0,new A.a9(0,0,0+w,0+v)))
d.aQ(t,u)},
au(d){return!1}}
C.bgZ.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.sar(D.bXa.aw(0,new A.a9(0,0,a3,a4)))
a5.b0(new A.a9(0,0,a3,a4),w)
v=B.k.dj(a2/112)
u=new A.eE()
u.dt(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cWZ[u.av(9)]
j=u.av(14)
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
g.sar(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.et(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jY.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c0(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jY.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c0(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.av(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.sar(D.bWx.aw(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jw
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b97.j(0.72).gp(0)
a5.b0(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sar(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bg7.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.v(w,a2),a1)))
a5.af(new A.v(w,a2),a1,a4)},
au(d){return!1}}
C.b9X.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kS(new A.o(A.aq(D.kp,D.bkC,w/4),o,new A.bO(B.Y,new A.az(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.Ku,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aHo,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jY.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qg,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aYZ,u,D.bY7,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGA(o),D.eV_),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aUb(p.y,r,G.iD,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iD.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fia,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iD.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iD.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f9i,!0,B.a4,B.zI,B.an,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fi2,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iD.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.EX.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.EX.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.EX.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iD.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XN(A.d3(A.a([A.d3(o,o,o,o,o,o,o,o,o,D.fcp,B.a.ap(k,0,1)),A.d3(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iD.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.x(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iD.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.Ku,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.bwu,A.x(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Ku,v,D.bYE,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.apn.prototype={
T(){return new C.aD6(A.a([],x._))},
bs(){return this.r.$0()},
pT(){return this.w.$0()},
ge1(){return this.c}}
C.aD6.prototype={
Z(){var w,v
this.a1()
this.vR()
w=this.a
v=w.c
if(v.length!==0)C.a71(v,w.e,w.d.w)},
vG(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h49(r,t.e,!1,s.w,new C.dUB(u),null,s),$async$vG)
case 2:w=3
return A.b(u.vR(),$async$vG)
case 3:return A.h(null,v)}})
return A.i($async$vG,v)},
a_p(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h49(r,t.e,!0,s.w,new C.dUA(u),null,s),$async$a_p)
case 2:w=3
return A.b(u.vR(),$async$a_p)
case 3:return A.h(null,v)}})
return A.i($async$a_p,v)},
vR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AK(q.a.c),$async$vR)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.dUD(q,p))
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
return A.b(C.Gw(q.a.c).d8(0,B.pT),$async$vR)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dUE(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dUF(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vR,v)},
Op(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Op=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.J(s).f.S(D.eYF)
w=3
return A.b(C.Gw(t.a.c),$async$Op)
case 3:r=e
w=4
return A.b(C.fKy(t.a.c,r),$async$Op)
case 4:q=e
w=5
return A.b(C.Gw(t.a.c),$async$Op)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dUz(t,p))
o=t.c.J(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(null,null,null,q?B.dA:B.cU,null,B.r,null,s,null,B.mr,null,null,null,null,null,null,null,null,null,null))
t.a.pT()
case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
HT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ibR(l),$async$HT)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hGl(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZS(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HT)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hnp(r)
o=Date.now()
n=t.a.c
m=new C.kG(l,r.toUpperCase(),p,!0,B.U,D.Cr,new A.S(o,0,!1),0,n,D.tV)
w=5
return A.b(C.a2y(n,m),$async$HT)
case 5:w=6
return A.b(t.vR(),$async$HT)
case 6:t.a.bs()
t.a.pT()
if(t.c==null){w=1
break}t.Es(m)
case 1:return A.h(u,v)}})
return A.i($async$HT,v)},
Es(d){return this.ceD(d)},
ceD(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Es=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AK(u.a.c),$async$Es)
case 2:n=l.rh(k.dJ(f,new C.dUC(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.aph(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Es)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2y(u.a.c,o),$async$Es)
case 6:case 5:w=7
return A.b(u.vR(),$async$Es)
case 7:u.a.pT()
return A.h(null,v)}})
return A.i($async$Es,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tR(p)
if(r.e)return A.av(A.mM(q,p?B.bs:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e0:B.c
v=A.n(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bL0,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcdH(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fy(A.p(q,A.x(A.a([u,B.aR,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fFD,r.gaQk(),A.bn(B.bT,q,q,q,q,q,Al.Zr,q,new A.b7(A.n(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bwq,q,q,1/0),15,B.af,1.05,D.a9C,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yC,B.aV,q,q,q,q),q,q,q,new C.dUH(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yu,B.aV,q,q,q,q),q,q,q,r.gafo(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.aoe,D.flB,r.gaQk(),A.bn(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fy(r.cBf(J.q(r.d,s),o),14,B.af,1,D.a9C,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cBf(d,e){var w=null,v=e.a,u=v?B.e0:B.c,t=A.n(14),s=A.I((v?B.e2:B.bN).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.en,10)],x.V),q=A.n(14),p=A.p(w,D.bK4,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaol(),m=d.d?"":" \xb7 Public",l=d.y===D.kw?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.be,l,A.X(B.Nc,v?B.bs:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dUG(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aph.prototype={
T(){return new C.aD3(A.a([],x._),A.aX(x.N),A.b7z())},
bs(){return this.r.$0()},
ge1(){return this.c}}
C.aD3.prototype={
Z(){var w,v,u=this
u.a1()
u.d=u.a.w
u.ach()
w=u.a
v=w.c
if(v.length!==0)C.a71(v,w.e,w.d.w)},
q(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a2()},
a2m(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xM("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dU1(r),s,null,!0,!0,x.y),$async$a2m)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jn()
t.m(new C.dU2(t,r))
w=4
return A.b(t.vI(),$async$a2m)
case 4:t.a.bs()
t.xM(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2m,v)},
cr3(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dTX(w,f,d,e))},
aSB(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jQ(q,q,1,1)
this.w.sp(0,u)},
b9J(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eI(new Float64Array(16))
q.e2(r)
w=q.CA()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e9(r,u,0,1)
t.jQ(v,v,1,1)
t.e9(-r,-u,0,1)
t.iK(0,q)
s.sp(0,t)},
ach(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ach=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AK(u.a.c),$async$ach)
case 2:t=s.rh(r.dJ(e,new C.dTv(u)))
if(t!=null&&u.c!=null)u.m(new C.dTw(u,t))
return A.h(null,v)}})
return A.i($async$ach,v)},
xM(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
vG(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h49(o,t,!1,r,new C.dTK(u),q.a,s),$async$vG)
case 2:n=A
m=J
w=3
return A.b(C.Gw(u.a.c),$async$vG)
case 3:p=n.rh(m.dJ(e,new C.dTL(u)))
if(p!=null&&u.c!=null)u.m(new C.dTM(u,p))
return A.h(null,v)}})
return A.i($async$vG,v)},
Jn(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vI(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2y(t,s),$async$vI)
case 2:return A.h(null,v)}})
return A.i($async$vI,v)},
a0V(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u1(q,t.a.c)){t.xM("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.id_(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0V)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jn()
t.m(new C.dTW(t,r))
w=4
return A.b(t.vI(),$async$a0V)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0V,v)},
a_D(){return this.ceF()},
ceF(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.u1(q,t.a.c)){t.xM("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTU(r,new C.tR(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_D)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jn()
t.m(new C.dTV(r,t))
w=4
return A.b(t.vI(),$async$a_D)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_D,v)},
VC(d){return this.bzw(d)},
bzw(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u1(r,t.a.c)){t.xM("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTj(t,d),r,null,!0,!0,x.P),$async$VC)
case 3:s=f
if(s==null){w=1
break}t.Jn()
t.m(new C.dTk(t,s))
w=4
return A.b(t.vI(),$async$VC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VC,v)},
a2I(d){return this.cDq(d)},
cDq(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dU4(u,d,new C.tR(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2I)
case 2:return A.h(null,v)}})
return A.i($async$a2I,v)},
caY(d){var w=this,v=w.d
v===$&&A.c()
if(C.u1(v,w.a.c))w.O4(d)
else w.a2I(d)},
ahS(d,e){return this.cv2(d,e)},
cv2(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dTZ(new C.tR(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahS)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahS,v)},
HY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kw?3:5
break
case 3:w=6
return A.b(C.fSO(t.a.c),$async$HY)
case 6:s=e
o=t.a
r=C.hbW(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahS(!s,!r),$async$HY)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bBh(o,t.a.c)){t.xM("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l7(o,"Cancel","Remove",q.y===D.kw?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HY)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOG(t.a.c,t.d.a),$async$HY)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iR(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HY,v)},
a9O(d){return this.bKJ(d)},
bKJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u1(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b6(s,new C.dTl(p))){o=A.T(s)
p.a=A.rh(new A.cO(new A.a_(s,new C.dTm(d),o.k("a_<1>")),new C.dTn(),o.k("cO<1,m>")))}q=p.a
if(q==null)q=d.d
t.Jn()
t.m(new C.dTo(t,s,d,q))
w=3
return A.b(t.vI(),$async$a9O)
case 3:t.xM(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9O,v)},
O4(d){return this.bMT(d)},
bMT(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u1(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2I(d),$async$O4)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dTs(t,d),r,null,!0,!0,x.P),$async$O4)
case 6:s=f
if(s==null){w=1
break}t.Jn()
t.m(new C.dTt(t,s))
w=7
return A.b(t.vI(),$async$O4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O4,v)},
cBE(){var w=this,v=w.d
v===$&&A.c()
if(!C.u1(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dU3(w))
w.vI()},
Yt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bBh(n,t.a.c)){t.xM("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bo(new A.M(q,t.gc9s(),A.T(q).k("M<1,m>")).c0(0,new C.dTF()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTG(t,new C.tR(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yt)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jn()
t.m(new C.dTH(t,p))
w=4
return A.b(t.vI(),$async$Yt)
case 4:t.xM("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yt,v)},
c9t(d){return B.a.i(d.toLowerCase())},
cds(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u1(v,w)
t=r.d
s=C.i2d(t)
C.ibV(q,t.b,u,C.i2c(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dUb(),A.T(l).k("a_<1>")).gM(0)
l=n?B.c_:B.iC
v=A.X(B.a_D,n?B.bs:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bf,A.aL(!1,o,!0,new A.D(B.hP,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dUc(p,d),o,o,o,o,o,o,o),o),new A.D(B.ni,p.bXV(m),o)],u)
if(p.d.y===D.kw){t=B.rA.j(0.15)
s=A.n(12)
r=A.I(B.rA.j(0.45),B.q,1)
q=C.Gu(p.d,p.a.c)
v.push(new A.D(B.xP,A.p(o,A.B(A.a([D.bPk,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ik,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.u1(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JP("Undo",B.rn,p.gcBD(),m,o,o))
u.push(new C.JP("Family Book",D.bEL,p.gcdr(),m,B.tq,o))
if(C.u1(p.d,p.a.c))u.push(new C.JP("Display settings",B.C3,p.gceE(),m,B.aZ,o))
u.push(new C.JP("Sync",B.yu,p.gafo(),m,o,o))
t=p.d
if(t.y===D.kw||C.bBh(t,p.a.c)){t=p.d.y===D.kw?"Remove shared tree":"Delete tree"
u.push(new C.JP(t,B.e7,p.gbKT(),m,B.h2,o))}if(C.u1(p.d,p.a.c))u.push(new C.JP("Add member",B.vX,new C.dUd(p),m,B.bT,o))
v.push(new A.D(R.aii,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaol()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dUe(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_H:Y.Nd,o,o,o,o,o)
v.push(A.av(A.hn(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dUf(p),o),o,o,o))}return A.c6(o,l,A.bm(!0,A.x(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bXV(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fy.j(0.35),B.dn,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.yn,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bSo,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafo(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f7D,m,m,m)
r=r.gaol()
p=n.d.gaol()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bC,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a6,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.u1(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bPw,m,m,m,n.gcop(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.js:B.mA
r=r?"Private":"Public"
r=A.E(n.auJ(q,"Privacy",r,n.a.d.w?n.gcAy():m),1)
q=A.E(n.auJ(B.yv,"Tree code",n.d.c,new C.dTu(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.auJ(D.bGu,"Collaborators",p,n.gc1u()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kw){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aF(!1,B.a1,!0,A.n(999),A.aL(!1,A.n(999),!0,new A.D(B.fN,A.B(A.a([A.X(B.p_,B.c,m,m,m,14),B.ee,A.d("View only",m,m,m,m,m,m,B.aQu,m,m,m)],o),B.m,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.Fz,A.x(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bWC,B.n),m,m,m,m,m,m,m,1/0)},
auJ(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.n(14),A.aL(!1,A.n(14),!0,new A.D(L.ajq,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uQ,A.d(f,w,1,B.a2,w,w,w,O.zM,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bed.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.beg(s,t),new A.ar(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dz(r,new C.d7u(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d7v(this),A.T(r).k("M<1,t>")))
return new A.D(B.tS,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.K0.prototype={}
C.FL.prototype={}
C.bef.prototype={
gbia(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIG.prototype={}
C.beg.prototype={
bMx(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
d.aQ(t,q)},
bMv(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d7P())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b6(a0,new C.d7Q(f))
t=new A.M(a0,new C.d7R(f),A.T(a0).k("M<1,K>")).c0(0,new C.d7S()).cL(0,1/0,B.v8)
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
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bS
w.e=B.fG
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bMv(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bMx(d,w,q.a,q.b)}},
au(d){return d.b!==this.b}}
C.bhW.prototype={
gc7h(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dll
switch(w.c.a){case 0:return D.cOA
case 1:return D.cZQ
case 2:return D.dfz}},
gc7k(){var w=this.c,v=C.hmK(w.w),u=C.hmK(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc7h(),p=t.c,o=I.bCa(p.f),n=t.gc7k(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aw:B.c,j=A.I(r?B.aw:B.c,B.q,2)
if(o!=null)w=A.th(B.A,s,B.ci,B.bV,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hZ(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.az,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.FQ,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.I(r?B.aw:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fhG,s,s,s),B.f,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.byi,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.n(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a6,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aC(s,new A.a7(84,112,A.x(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,D.b_S,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.byt,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bdk.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bbU
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
au(d){return d.b!==this.b}}
C.bvG.prototype={
B(d){var w=this,v=null,u=new C.fcB(w),t=w.c,s=t?B.ct:B.c,r=A.n(12),q=u.$3(B.hB,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.ys,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),u.$3(B.alP,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dr,v,v,v,B.ag)}}
C.blh.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.q,2),s=w.e,r=x.p
t=A.aC(v,A.p(v,A.x(A.a([A.X(s?K.a_H:Y.Nd,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fe1,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fbZ,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.eOt(w),A.T(s).k("M<1,t>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZR.prototype={
T(){return new C.aBv()},
bs(){return this.Q.$0()},
ge1(){return this.w}}
C.aBv.prototype={
Z(){var w,v,u,t,s,r=this,q=null
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
r.y=t==null?D.y2:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i3L(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.U$=w
u.P$=0
u=v.f
u===$&&A.c()
u.U$=w
u.P$=0
u=v.r
u===$&&A.c()
u.U$=w
u.P$=0
u=v.w
u===$&&A.c()
u.U$=w
u.P$=0
u=v.x
u===$&&A.c()
u.U$=w
u.P$=0
v.a2()},
Pr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Pr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hbW(p.y,p.w)
w=3
return A.b(A.lj(t.a.w,B.Ie),$async$Pr)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZS(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Pr)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hGm(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(An.GF(78,800),$async$Pr)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dnI(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Pr,v)},
c7j(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i1(B.o.u(1000*Date.now()),w,D.y2,null,null,null,"","","","","",1,!1,0)
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
s=v.aDC(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a9o(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dnH(r),s,null,!0,!0,x.y),$async$a9o)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9o,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tR(j),h=l.a.e,g=A.T(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dnR(l),g),g.k("J.E"))
h=j?B.e0:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bwN,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hx(A.aL(!1,k,!0,new A.D(B.lT,A.X(B.e7,B.oO,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbHx(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jE:B.iY
t=I.bCa(l.as)
if(l.as==null)s=A.X(B.oS,j?B.bs:B.bn,k,k,k,40)
else s=k
s=A.av(A.aC(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h7(u,t,s,k,42),A.ao(0,A.h7(B.bT,k,D.bJ8,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc7g(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBx(t,"Full name",B.mw,1,1,i,B.m6)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.R,new C.bhU(i,u,new C.dnS(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bqn],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dnT(),A.T(o).k("M<1,eG<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bqp],q)
B.d.v(q,new A.M(f,new C.dnV(),A.T(f).k("M<1,eG<m?>>")))
o=A.x(A.a([t,B.am,new C.ad0(i,r,"Who is their parent?",p,new C.dnW(l),k,o),B.aB,n,B.am,new C.ad0(i,m,"Who is their spouse / partner?",q,new C.dnX(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBx(q,"Birth date",D.akS,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBx(m,"Birth place",B.a_W,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBx(n,"Date of death (if deceased)",D.an5,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBx(p,"Occupation",B.a0X,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.ad1(i,"Identity",u,k),B.ac,new C.ad1(i,"Family links",o,k),B.ac,new C.ad1(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBx(r,"Notes",B.l0,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBw(i,"Child order",l.ceT(l.at),new C.dnY(l),new C.dnZ(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h1s(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.do_(l):k
B.d.v(r,A.a([B.R,new C.aBw(i,"Visible in tree",u,w,new C.do0(l),k)],v))}r.push(B.R)
w=j?B.jE:B.iY
u=A.n(14)
t=A.I(j?B.e2:B.bN,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bT,k,B.af,k,new C.do1(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ahV,k,k,k))
r.push(B.by)
w=j?B.aQ:B.aw
j=j?B.e2:B.bN
r.push(A.B(A.a([A.E(A.dW(B.nF,new C.dnU(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b7(A.n(14),B.Y),new A.az(j,1,B.q,-1),k,k,k,k)),1),B.be,A.E(A.bG(D.eQW,l.gc7i(),A.bn(B.aV,k,k,0,B.c,k,B.cm,k,new A.b7(A.n(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.em(B.hb,k,B.af,h,new A.a7(420,k,A.cd(A.x(r,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.aiL,k,B.ai9,new A.b7(g,B.Y),k,k)},
ceT(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ad1.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jE:B.iY,s=A.n(16)
return A.x(A.a([new A.D(D.aja,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e2:B.bN,B.q,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhV.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e0:B.c,r=A.n(12),q=A.I((t?B.e2:B.bN).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.U,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eB,u,B.vA,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cx,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ad0.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e0:B.c,s=A.n(12),r=A.I((u?B.e2:B.bN).j(0.85),B.q,1),q=A.X(B.rh,u?B.bs:B.bn,v,v,v,v),p=A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a6,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e0:B.c
return A.p(v,new A.DB(A.Sr(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cx,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kX,v,v,v)}}
C.bhU.prototype={
B(d){var w=new C.do2(this)
return A.B(A.a([w.$3(D.a_f,"Male",B.NX),B.ab,w.$3(D.ak2,"Female",B.NK),B.ab,w.$3(D.y2,"Other",B.nn)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBw.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jE:B.iY,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHI(u,B.ys,w.f,v),B.bp,new C.aHI(u,B.hB,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ek,v,v,v)}}
C.aHI.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.e0:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bT
else t=(s.c.a?B.bs:B.bn).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.ad2.prototype={
bQr(d){switch(d.a){case 0:return B.bT
case 1:return B.bD
case 2:return B.cX}},
bQs(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWX(d){var w,v,u,t
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
B.d.v(r,A.a([A.X(f,B.bT,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.xM,p,p,1/0)},
adU(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jE:B.iY,s=A.n(16),r=A.I(v?B.e2:B.bN,B.q,1)
return A.x(A.a([new A.D(D.aja,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hrw(r,q),o=q.c,n=t.bQr(o),m=I.bCa(q.f),l=t.e.a,k=l?B.e0:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kw?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a6,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h7(u,m,m==null?A.X(B.oS,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.el,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bQs(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mt,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ab("Full name",i,B.mw)],u)
if(p>0)i.push(t.Ab("Child order","#"+p,B.NQ))
r=A.a([h,B.au,r,B.aR,l,B.R,v,B.by,t.adU("Identity",i),B.ac,t.adU("Life details",A.a([t.Ab("Birth date",q.w,D.akS),t.Ab("Birth place",q.x,B.a_W),t.Ab("Date of death",q.y,D.an5),t.Ab("Occupation",q.z,B.a0X)],u)),B.ac,t.adU("Family links",A.a([t.Ab("1. Parent",t.aWX(q.d),B.G3),t.Ab("2. Spouse",t.aWX(q.e),B.NJ)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adU("Notes",A.a([t.Ab("Notes",q,B.l0)],u))],u))
r.push(B.by)
r.push(A.bG(B.JB,new C.doc(d),A.bn(B.aV,s,s,s,s,s,B.cm,s,new A.b7(A.n(14),B.Y),s,s,s)))
return A.eL(s,k,new A.cT(B.lF,A.cd(A.x(r,B.ai,s,B.e,B.N,0,B.p),B.r,s,B.y,s,B.xS,s,s,B.ah),s),s,s,s,B.FC,B.d1,s,new A.b7(j,B.Y),s)}}
C.JP.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xV,A.hx(A.aF(!1,B.a1,!0,A.n(8),A.aL(!1,A.n(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.apk.prototype={
eS(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.T(w).k("M<1,a5<m,@>>")
w=A.C(new A.M(w,new C.c8W(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.ja(w,new C.c8X(),t,x.U))
return s}}
C.apl.prototype={
T(){return new C.aD5(A.a([],x.bF))},
gde(){return this.c}}
C.aD5.prototype={
Z(){this.a1()
this.Ju()},
Ju(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ju=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c9_(t.a.c),$async$Ju)
case 3:r=e
w=4
return A.b(C.AK(t.a.c),$async$Ju)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qW(q,new C.dUo(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dUp(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Ju,v)},
yl(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Ke(d,e){return this.cE0(d,e)},
cE0(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Ke=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dUt(q,e))
t=3
w=6
return A.b(d.$0(),$async$Ke)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dUu(q))
$.eU.mt()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ke,v)},
Xg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pa(r,s.c,s.e),$async$Xg)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ke(new C.dUl(t),"Preparing download\u2026"),$async$Xg)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xg,v)},
Xk(d){return this.bOp(d)},
bOp(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pa(r,s.c,s.e),$async$Xk)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Ke(new C.dUm(t,d),"Preparing file\u2026"),$async$Xk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xk,v)},
afL(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xc.c7().M0(B.QS,B.tW,!0),$async$afL)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
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
case 6:u=A.GE()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afL,v)},
XX(d){return this.bYP(d)},
bYP(d){var w=0,v=A.j(x.H),u=this
var $async$XX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Ke(new C.dUn(u,d),"Restoring family trees\u2026"),$async$XX)
case 2:return A.h(null,v)}})
return A.i($async$XX,v)},
XW(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afL(),$async$XW)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XX(s),$async$XW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
a1L(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pa(r,s.c,s.e),$async$a1L)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ke(new C.dUs(t),"Creating QR code\u2026"),$async$a1L)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1L,v)},
a1m(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CU()){t.yl("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cm(A.ea(new C.dUq(),!0,null,x.N)),$async$a1m)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XX(r),$async$a1m)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1m,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AI:B.iC,m=o?D.agr:B.aQ,l=o?B.aJ:B.bN,k=o?B.aQ:B.aw,j=new C.d7T(n,m,l,k,o?B.bK:B.bn)
l=A.aH(p,p,p,p,A.X(B.eE,k,p,p,p,20),p,p,p,new C.dUw(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d7r(!0,B.ju,B.aN,B.aN,q.r?p:q.gcuR(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcqZ()
t.push(A.E(C.d7r(!s,B.j4,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d7r(!1,B.hC,B.aV,B.bT,q.r?p:q.gbOi(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d7r(!1,M.yy,B.aF,B.aM,q.r?p:q.gbYM(),j,s,"Upload backup file"),1))
l=A.a([new C.bee(v,l,p),B.kG,new C.aci(j,"QR restore",p),B.R,t,B.d7,new C.aci(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kG,new C.aci(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dUx(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.Zn,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([K.aOV,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Bl,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d7T.prototype={}
C.bee.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kc,28)],x.V)
t=A.ao(p,A.X(B.ud,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bRW,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.om,A.E(A.x(A.a([D.fmA,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bZP,B.n),p,p,p,p,p,p,p,p)}}
C.aci.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bec.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aN.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aN.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eH(A.de(new A.D(E.Z0,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rd,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cx,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.beh.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eH(new A.D(B.eR,A.B(A.a([A.p(v,D.bR9,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.rd,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hC,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.a_b.prototype={
T(){return new C.aD4()},
gde(){return this.c}}
C.aD4.prototype={
Z(){this.a1()
this.a8V()},
a8V(){var w=0,v=A.j(x.H),u=this,t
var $async$a8V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b1v(u.a.c,B.D4),$async$a8V)
case 2:t=e
if(u.c!=null)u.m(new C.dUg(u,t))
return A.h(null,v)}})
return A.i($async$a8V,v)},
ah8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ah8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dUh(q))
t=4
p=A.hdA(q.a.d,B.D4)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ary(n.e,m,l,B.D4,p,n.f),$async$ah8)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dUi(q))
q.c.J(x.q).f.S(D.eZQ)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.eh(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dUj(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah8,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.ji:B.pM,n=p?B.id:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fCn,q,q,q,1,q,!0)
w=A.n(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pT(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.by,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bq,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcqH()
if(u)u=B.J5
else u=A.X(r.e===!0?B.ho:B.akR,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eA(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fR,q,q,q,new A.az(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zU,new C.dUk(d),A.bn(B.aV,q,q,q,q,B.fR,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_c.prototype={
T(){return new C.bjo(A.zg(B.xB,B.nM,B.ul))}}
C.bjo.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c6(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fur,w,w,w,1,w,!0),B.w,A.zf(this.d,B.bV,new C.dUy(this,d)),w,!1,!1,w,w)}}
C.aYo.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Qk,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lC.prototype={}
C.a65.prototype={
T(){return new C.bj4(null,null)}}
C.bj4.prototype={
Z(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tM,v,1,v,w)
w.e=A.bj(v,B.pS,v,1,v,w)
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
this.buR()},
B(d){var w,v,u=this,t=B.d.dM(D.a3E,new C.dFK(u),new C.dFL())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cup(A.c7(new A.hb(A.a([w,v],x.dS)),new C.dFM(u,t),null),!0)}}
C.bj3.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0l(d,e)
break
case"house":p.m6(d,e,D.d3z)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdB()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mb(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AU(d,e,12)
p.xW(d,e,B.lg,5,14)
break
case"grocery":p.cfC(d,e)
break
case"calculator":p.cfj(d,e)
break
case"lumber":p.cfK(d,e)
break
case"kitchen":p.cfF(d,e)
break
case"landscape":p.m6(d,e,D.d46)
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
d.aQ(s,w)
p.AU(d,e,8)
p.xW(d,e,B.j1,4,18)
break
case"plumbing":p.cfT(d,e)
break
case"electrical":p.m6(d,e,D.deQ)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.b0(new A.a9(0,0,0+e.a,0+e.b),u)
p.mb(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mb(d,e,B.lK.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AU(d,e,10)
break
case"store":p.cg2(d,e)
break
case"paint_remodel":p.cfO(d,e)
break
case"roofing":p.cfV(d,e)
break
case"warehouse":p.cg9(d,e)
break
case"vehicles":p.cg7(d,e)
break
case"farm":p.cfw(d,e)
break
case"restaurant":p.cfU(d,e)
break
case"tools":p.cg5(d,e)
break
case"wallet":p.cg8(d,e)
break
case"concrete":p.cfp(d,e)
break
case"blueprint":p.cfh(d,e)
break
default:p.b0l(d,e)}},
m6(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.sar(new A.a8(B.az,B.aC,B.x,f,null,null).aw(0,v))
d.b0(v,w)},
mb(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gdB()/2-h
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
xW(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdB()/2-h
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
b0l(d,e){var w,v=this
v.m6(d,e,D.ddj)
w=v.c
v.mb(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mb(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bMr(d,e,B.i1,w)
v.xW(d,e,B.c.j(0.7),6,8)},
bMr(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c0(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cfC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.ckk)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.am(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d1S[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mb(d,e,B.c.j(0.35),w,16)
j.xW(d,e,B.j1,5,12)},
cfj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m6(d,e,D.ckr)
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
p=A.h4(g,g,g,g,g,B.a4,B.c6,g,B.dP,B.c5)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d5I[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saY(0,new A.es(r,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a4(d,new A.v(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.am(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ckt[o]
l=B.kn.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saY(0,new A.es(m,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a4(d,new A.v(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.am(o,3)*0.38)+Math.sin(n)*6))}h.mb(d,e,B.c.j(0.35),w*1.5,14)
h.mb(d,e,B.eC.j(0.55),-v*3.141592653589793*2,8)
h.mb(d,e,B.AJ.j(0.4),r*2.8,22)
h.xW(d,e,B.pB,8,10)
h.AU(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cfK(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,A_.awu)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hF)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fJ,B.oG,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.et(p),n)
n.delete()}m.mb(d,e,B.fJ.j(0.35),w,15)
m.AU(d,e,8)},
cfF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.d2m)
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
j.xW(d,e,B.qQ,4,14)},
cfT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m6(d,e,D.cSo)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xW(d,e,B.oM,6,12)
l.mb(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cg2(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m6(d,e,D.cxV)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.iu)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fc,B.bM,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}n.mb(d,e,B.c.j(0.3),w,16)
n.AU(d,e,8)
n.xW(d,e,B.ve,5,13)},
cfO(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.cYd)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.he)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.iz,B.ds,B.bM,B.et][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.et(p),o)
o.delete()}this.mb(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cfV(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.cVK)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xW(d,e,B.cr,7,11)},
cg9(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.cAC)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.hF)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cr,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}this.mb(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cg7(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.diK)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hF)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}this.AU(d,e,6)},
cfw(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d0Z)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lK.j(0.75).gp(0)
d.af(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hk.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mb(d,e,B.lK.j(0.35),w,14)},
cfU(d,e){var w,v,u,t,s,r,q,p,o=this
o.m6(d,e,D.d3o)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ch(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xW(d,e,B.qQ,5,16)
o.AU(d,e,7)},
cg5(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dgk)
w=m.c
v=w*3.141592653589793
m.mb(d,e,B.oG.j(0.55),v*3,10)
m.mb(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oG.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cg8(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.djl)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.iu)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.j1,B.lK,q).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}m.AU(d,e,9)
m.mb(d,e,B.c.j(0.4),w*2.2,12)},
cfp(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d8r)
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
cfh(d,e){var w,v,u,t,s,r,q,p
this.m6(d,e,D.d4p)
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
this.mb(d,e,B.lg.j(0.45),-t*3.141592653589793*2,11)},
au(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.asf.prototype={
a_1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPC(),$async$a_1)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8l(s),$async$a_1)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_1,v)},
afM(d){return this.cip(d)},
cip(d){var w=0,v=A.j(x.H),u=this,t
var $async$afM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ic4(d),$async$afM)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afM,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jE:B.iY
w=x.p
v=A.a([C.aQ_(!0,B.qI,1/0,B.q0,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bI(B.b0,t,t,new A.D(B.vu,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.axq,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b4,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bKU,D.fiY,new C.cgu(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jH,t,t,t,t,B.ce)),1),B.ab,A.E(A.eA(D.bT9,D.fxw,this.gc9q(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jH,t,t,D.aZp,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fL(1.7777777777777777,A.aF(!1,B.a1,!0,B.qI,new A.an(B.W,t,B.b1,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aL1.prototype={
aT(){this.b3()
this.b_()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
C.aSY.prototype={}
C.aSX.prototype={}
C.aQW.prototype={}
C.YQ.prototype={
T(){return new C.ayl()}}
C.ayl.prototype={
Z(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b5,B.aO)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
K4(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.J(x.q).f.S(D.f_k)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aSY(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e0:B.c,k=A.n(20),j=A.p(n,D.bSP,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.be,i,A.aH(n,n,n,n,A.X(B.cB,m?B.bs:B.bn,n,n,n,n),n,n,n,new C.d_8(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cx,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hdQ(new C.d_9(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a6,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jE:B.iY
r=A.n(12)
q=A.n(12)
p=m?B.e2:B.bN
t=A.aM(n,B.U,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dh),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d_a(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.Jc,n,n,n,n)
u=m?B.aQ:B.aw
m=m?B.e2:B.bN
return A.eL(n,l,new A.cT(B.lF,A.cd(A.x(A.a([j,B.aR,i,B.au,w,B.O,v,B.aR,t,B.by,A.B(A.a([A.E(A.dW(B.df,new C.d_b(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b7(A.n(12),B.Y),new A.az(m,1,B.q,-1),n,n,n,n)),1),B.at,A.E(A.bG(D.fxL,o.ga26(),A.bn(B.aV,n,n,n,B.c,n,B.cm,n,new A.b7(A.n(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.N,0,B.p),B.r,n,B.y,n,B.Bm,n,n,B.ah),n),n,n,n,X.Bn,B.d1,n,new A.b7(k,B.Y),n)}}
C.YP.prototype={
T(){return new C.ayk()}}
C.ayk.prototype={
Z(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
K4(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.J(x.q).f.S(D.eY_)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aSX(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e0:B.c,n=A.n(20),m=A.p(q,D.bPp,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.be,l,A.aH(q,q,q,q,A.X(B.cB,p?B.bs:B.bn,q,q,q,q),q,q,q,new C.d_4(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.akD,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jE:B.iY
t=A.n(12)
s=A.n(12)
r=p?B.e2:B.bN
v=A.aM(q,B.U,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dh),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d_5(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kH,q,q,q,q)
w=p?B.aQ:B.aw
p=p?B.e2:B.bN
return A.eL(q,o,new A.cT(B.lF,A.cd(A.x(A.a([m,B.aR,l,B.aB,v,B.by,A.B(A.a([A.E(A.dW(B.df,new C.d_6(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b7(A.n(12),B.Y),new A.az(p,1,B.q,-1),q,q,q,q)),1),B.at,A.E(A.bG(D.fED,this.ga26(),A.bn(B.bT,q,q,q,B.c,q,B.cm,q,new A.b7(A.n(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.Bm,q,q,B.ah),q),q,q,q,X.Bn,B.d1,q,new A.b7(n,B.Y),q)}}
C.Yn.prototype={
T(){return new C.ax4()}}
C.ax4.prototype={
Z(){var w,v=this
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
w=u.U$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.U$=w
u.P$=0
u=v.f
u===$&&A.c()
u.U$=w
u.P$=0
u=v.r
u===$&&A.c()
u.U$=w
u.P$=0
v.a2()},
gJp(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiY(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb3f(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aO0(d){var w,v=B.k.D(this.gJp()+d,0.25,999999),u=B.k.jc(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saY(0,u)
this.m(new C.cxH())},
axn(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jE:B.iY,s=A.n(14),r=A.n(14)
u=u?B.e2:B.bN
return A.bs(w,new A.b4(4,s,B.dh),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.n(14),B.ab1),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c9r(d,e,f){return this.axn(d,e,f,null)},
K4(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiY()<=0){s.c.J(x.q).f.S(D.f1c)
return}r=s.c
r.toString
v=s.gJp()
u=s.gaiY()
t=s.gb3f()
A.a6(r,!1).O(new C.aQW(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=n?B.e0:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bT.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bIR,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cx,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.be,h,A.aH(o,o,o,o,A.X(B.cB,n?B.bs:B.bn,o,o,o,o),o,o,o,new C.cxN(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.U,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axn(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NW),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.Jc,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jE:B.iY
t=A.n(14)
s=A.I(n?B.e2:B.bN,B.q,1)
r=A.aH(o,o,o,o,A.X(B.ys,n?B.aQ:B.aw,o,o,o,20),o,o,o,new C.cxO(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bUH,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxP(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hB,n?B.aQ:B.aw,o,o,o,20),o,o,o,new C.cxQ(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axn(m,"Amount","0.00",B.hR),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxR(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cYH,new C.cxS(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.O,s,B.ac,A.bV(B.bA,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c9r(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cxT(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kH,o,o,o,o)],w))}i.push(B.aR)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJp()===B.k.jc(p.gJp())?B.k.N(p.gJp()):p.gJp()
s=p.gb3f()
r=A.AM(p.gaiY())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCX(p.gJp()*p.gaiY(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jp,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.e2:B.bN
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b7(j,B.Y),new A.az(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dW(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cxU(d),h),1),B.at,A.E(A.dn(D.ao7,D.fAC,p.ga26(),A.bn(B.aV,o,o,0,B.c,o,B.cm,o,new A.b7(A.n(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eL(o,l,new A.cT(W.abq,A.cd(A.x(i,B.ai,o,B.e,B.N,0,B.p),B.r,o,B.y,o,Ad.rb,o,o,B.ah),o),o,o,o,B.ME,B.d1,o,new A.b7(k,B.Y),o)}}
C.a0X.prototype={
T(){return new C.bvy()}}
C.bvy.prototype={
Z(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b5,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e0:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jE:B.iY
v=A.aM(s,B.U,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.n(12),B.dh),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fc3(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dW(B.df,new C.fc4(d),s),1)
r=A.bn(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eL(s,q,new A.D(B.Bm,A.x(A.a([o,B.aB,v,B.aR,A.B(A.a([u,B.at,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fc5(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.N,0,B.p),s),s,s,s,s,B.d1,s,new A.b7(p,B.Y),s)}}
C.abl.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Fy.prototype={
T(){return new C.bvw(null,null)}}
C.bvw.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,D.bqX,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bxe()},
gbyH(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bT,B.aZ],x.O)
case 2:return A.a([B.bv,B.aV,B.aZ],x.O)
case 3:return A.a([B.aN,B.cb,B.jZ],x.O)
case 4:return A.a([B.hm,B.bT,B.fd],x.O)
case 0:return A.a([B.aV,B.bT,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ex(A.c7(v,new C.fc1(this,new C.tR(w.ax.a===B.I)),null),null)}}
C.awY.prototype={
T(){return new C.bvx(null,null)}}
C.bvx.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,B.nb,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bxf()},
B(d){var w=this.d
w===$&&A.c()
return A.c7(w,new C.fc2(this),null)}}
C.bvv.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
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
d.aQ(u,w)
w=A.xa(u)
t=A.a([],x.f5)
w=new A.vD(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jY('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hr(w,r)
w.jA()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRt(d,q,r,o,0,0.2,4.2,0.92)
p.aRt(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRt(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hzx(e.a.a,e,t,t+f*i,!0),r=A.bBk(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bS
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Hg,null).aw(0,r))
d.aQ(s,w)},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aNc.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.aNd.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.tR.prototype={}
C.ase.prototype={
T(){return new C.aEB()},
ge1(){return this.c}}
C.aEB.prototype={
Z(){var w=this
w.a1()
w.d=w.a.d
w.agD()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Lc(w,v)
this.a2()},
agD(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bBr(t.c,t.d.a),$async$agD)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eLD(u,s))
return A.h(null,v)}})
return A.i($async$agD,v)},
PR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eLu(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Lc(t,s),$async$PR)
case 2:if(u.c!=null)u.m(new C.eLv(u))
return A.h(null,v)}})
return A.i($async$PR,v)},
Qm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eLB(t,new C.tR(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qm)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8l(q),$async$Qm)
case 6:case 5:t.m(new C.eLC(t,r))
w=7
return A.b(t.PR(),$async$Qm)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qm,v)},
Vw(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ibQ(r),$async$Vw)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eLp(t,new C.r_(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PR(),$async$Vw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vw,v)},
cet(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hrs(t,new C.eLt(u),w,v)},
aaJ(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.az(v,2.5,B.q,-1),B.Y,B.Y,new A.az(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aZb,w,w,B.n),w,22,w,w,w,w,w,22)},
a9N(d){return this.bKG(d)},
bKG(d){var w=0,v=A.j(x.H),u=this
var $async$a9N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eLs(u,d))
w=2
return A.b(u.PR(),$async$a9N)
case 2:return A.h(null,v)}})
return A.i($async$a9N,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c_:B.iC,d=A.n(8),a0=A.X(Q.a_E,f?B.bs:B.bn,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.FJ,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a6,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eLE(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b1,B.r,A.a([A.bw(A.n(22),C.aQ_(!0,A.n(22),1/0,B.q0,g,d,1/0),B.aq),A.ao(10,A.dn(D.bNr,D.fCU,h.gb17(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b1,B.r,A.a([C.aQ_(!0,A.n(16),1/0,B.No,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b4,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.aaJ(!0),g,g,8,g,8,g),A.ao(g,A.cv9(h.aaJ(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cv9(h.aaJ(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cv9(h.aaJ(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bJq,D.fwv,h.gb17(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bWm,B.n),g,g,g,g,B.lT,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.b8F,B.nT,B.h6],u):A.a([B.aZ,B.aV,B.bT],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.jK,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h7,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCX(h.d.gwW(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cx,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.I(B.fW.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aN.j(0.28),B.cJ,14)],t)
j=B.aN.j(0.22)
i=A.n(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bvy,A.B(A.a([o,B.at,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eH(new A.D(Ai.Bh,A.x(A.a([A.p(g,D.anI,B.f,g,g,new A.o(j,g,A.I(B.aN.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fF,D.flF],a1),B.m,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gces(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.az,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fL(1.7777777777777777,d,g),B.aR,w,B.O,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ak.a1i,D.fjz,h.gbz9(),A.bn(B.aV,g,g,g,B.c,g,B.ik,g,new A.b7(A.n(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e0:B.c
v=A.n(14)
u=A.I(f?B.e2:B.bN,B.q,1)
t=A.X(B.a_Z,f?B.bs:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rc,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eLF(h,new C.tR(f)),A.T(w).k("M<1,t>")))
if(h.e)d.push(new A.D(B.Ba,A.av(A.mM(g,f?B.bs:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bm(!0,A.x(A.a([new A.D(B.Bf,a0,g),A.E(A.cd(A.x(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xT,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bCO(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e0:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b0X,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.hS:B.ha,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcU7()
v=A.AM(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.F,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bT.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bCX(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h8,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.E_(A.B(A.a([m,A.E(new A.D(B.ahO,A.B(A.a([l,B.be,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.bs:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eLq(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b_O,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.adn.prototype={
En(d){return this.bM3(d)},
bM3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$En=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pa(d,o,!1),$async$En)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ac.B8,null,x.H),$async$En)
case 4:s=t.d
w=5
return A.b(C.fJA(!0,o,s),$async$En)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gt(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$En)
case 6:p=f
w=7
return A.b(A.p9(o,!1),$async$En)
case 7:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$En,v)},
a_2(d){return this.cuS(d)},
cuS(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pa(d,s,!1),$async$a_2)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hE(d,new C.as8(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p9(s,!1),$async$a_2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_2,v)},
PS(d){return this.cqU(d)},
cqU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aGS,!0,"NgmyWorksheetProjectScan",x.N),$async$PS)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCY(s),$async$PS)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.J(x.q).f.S(D.f0k)
w=1
break}q=C.h3O(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$PS)
case 5:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PS,v)},
a_3(d){return this.cCW(d)},
cCW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bCv(),$async$a_3)
case 3:s=f
if(s==null){w=1
break}r=C.h3O(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a_3)
case 4:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_3,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tR(u),s=w.d.d.length,r=u?B.e0:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kc,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vB,A.p(v,A.x(A.a([w.ctr(d,t,s),new A.D(D.buX,A.x(A.a([w.b4a(t,"QR restore"),B.R,A.B(A.a([w.b_4(t,!0,B.ju,B.aN,B.aN,new C.eLH(w,d),"Show to scan","QR code"),B.at,w.axo(t,B.j4,B.b6,B.bu,new C.eLI(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b4a(t,"Backup files"),B.R,A.B(A.a([w.axo(t,B.hC,B.aV,B.bT,new C.eLJ(w,d),"Full copy","Backup file"),B.at,w.axo(t,M.yy,B.aF,B.aM,new C.eLK(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
ctr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f2,B.cT,B.fy],k):A.a([B.aZ,B.aV,B.bT],k)
w=A.ao(l,A.X(B.ud,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kV,l,l,l,36),l,l,l)
u=A.n(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aQ_(!0,A.n(13),64,D.bEE,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aRt,l,l,l)
r=C.bCX(r.gwW(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bvl,A.x(A.a([v,A.B(A.a([s,B.ep,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fE,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eLG(d),l,l,l,A.nB(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aOK,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.az,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b4a(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_4(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.agr:B.aQ
if(e)w=B.aN.j(o?0.45:0.35)
else{w=o?B.e2:B.bN
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aN.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eH(new A.D(E.Z0,A.x(A.a([t,B.ac,u,B.bC,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cx,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
axo(d,e,f,g,h,i,j){return this.b_4(d,!1,e,f,g,h,i,j)}}
C.as8.prototype={
T(){return new C.bkL()}}
C.bkL.prototype={
Z(){this.a1()
this.aew()},
aew(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aew=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCZ(p.c,p.d),$async$aew)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eLk(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eLl(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aew,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AI:B.iC,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eE,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eLm(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zG],u),B.m,h,B.e,B.j,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f2,B.cT,B.fy],s):A.a([B.aZ,B.aV,B.bT],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dj,B.L,h,h)
p=C.bCX(p.gwW(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fE,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.az,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Zm,h,h,1/0)
t=g?D.bi8:B.c
q=A.n(24)
p=A.I(w?B.aN.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a81,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ec4)
else{m=A.n(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pT(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aR)
n=w?B.aN:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.I((w?B.aN:B.aV).j(0.35),B.q,1)
k=w?B.NG:B.Oc
k=A.X(k,w?B.aN:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a6,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ik,h,h,h))
return A.c6(h,f,A.bm(!0,A.x(A.a([new A.D(A7.MQ,e,h),A.E(A.cd(A.x(A.a([s,B.aR,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tU,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aiW,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.asd.prototype={
T(){return new C.aEA(A.zg(B.M6,B.nM,B.ul))}}
C.aEA.prototype={
q(){this.d.q()
this.a2()},
aM1(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iR(w,d)},
cai(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i9J(t)
if(s!=null){this.aM1(s)
return}r=C.hip(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aM1(B.a.i(B.a.b5(r,B.a.cH(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.X(u.f?B.ri:A2.NM,t,t,t,t,t),t,t,t,new C.eLo(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AI,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fwo,t,t,t,1,t,!0),q=A.zf(u.d,B.bV,u.gcah()),p=A.n(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c6(r,B.w,new A.an(B.W,t,B.b1,B.r,A.a([q,p,A.ao(32,A.p(t,D.fvb,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jp,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJn.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.O0.prototype={
T(){return new C.aEC(D.aaj,A.a([],x.D))},
bs(){return this.r.$0()},
ge1(){return this.c}}
C.aEC.prototype={
gcAO(){return J.bE6(this.e,0,new C.eM6())},
Z(){this.a1()
$.aW.bY$.push(this)
this.vF()},
q(){$.aW.hN(this)
this.a2()},
j7(d){if(d===B.fw)this.vF()},
vF(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CT(q.a.c).d8(0,B.k3),$async$vF)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eM2(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eM3(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vF,v)},
HS(d){return this.bIP(d)},
bIO(){return this.HS(null)},
bIP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ibS(l,d),$async$HS)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lm(l,r,q,D.d8E,new A.S(Date.now(),0,!1))
w=4
return A.b(C.Lc(t.a.c,p),$async$HS)
case 4:o=f
w=5
return A.b(t.vF(),$async$HS)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.J(x.q).f.S(D.eYt)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.J(q).f.S(D.f_e)
else n.J(q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Er(m)
case 1:return A.h(u,v)}})
return A.i($async$HS,v)},
Er(d){return this.cee(d)},
cee(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Er=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.ase(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Er)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Lc(u.a.c,t),$async$Er)
case 5:case 4:w=6
return A.b(u.vF(),$async$Er)
case 6:return A.h(null,v)}})
return A.i($async$Er,v)},
vr(d){return this.bYR(d)},
bYR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bCv(),$async$vr)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aGS,!0,"NgmyWorksheetProjectScan",x.N),$async$vr)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCY(q),$async$vr)
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
r.S(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h3O(s)
w=15
return A.b(C.Lc(t.a.c,p),$async$vr)
case 15:o=f
w=16
return A.b(t.vF(),$async$vr)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.J(x.q).f.S(D.f_j)
w=1
break}r.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Er(p)
case 1:return A.h(u,v)}})
return A.i($async$vr,v)},
NH(d){return this.bHu(d)},
bHu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eLO(d),s,null,!0,!0,x.y),$async$NH)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oJ(t.a.c,A.a([],x.D)),$async$NH)
case 6:w=7
return A.b(t.vF(),$async$NH)
case 7:s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.eYy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NH,v)},
cer(d){var w=this.c
w.toString
A.bS(B.K,null,new C.eLX(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4M(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jE
else w=B.c
v=A.n(16)
u=A.I(p?B.e2:B.bN,B.q,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.x(A.a([s,B.ac,t,B.bC,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vA,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_y(d,e){return this.cef(d,e)},
cef(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(B.K,null,new C.eLS(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_y)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hrs(r,new C.eLT(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NJ(d,e),$async$a_y)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_y,v)},
b1J(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.av
else t=h.a?B.aQ:B.aw
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.Bl,A.B(A.a([s,B.be,t,A.X(B.eA,w?B.bs:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cl7(d,e,f,g,h,i){return this.b1J(!1,d,e,f,g,h,i)},
NJ(d,e){return this.bHE(d,e)},
bHE(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l7(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NJ)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bBd(t.a.c,d.a),$async$NJ)
case 6:w=7
return A.b(t.vF(),$async$NJ)
case 7:r=t.c
if(r==null){w=1
break}r.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NJ,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tR(o),m=o?B.c_:B.iC
if(q.f)o=D.b6x
else{w=q.bBX(n)
v=q.bXW(n)
u=q.gbz3()
if(o)t=B.jE
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ac,v,B.aR,new C.Fy(A.p(p,A.B(A.a([q.aAV(N.Nn,"Projects",n,D.aaj),q.aAV(B.vN,"Cashier",n,D.aWB),q.aAV(B.G3,"Family Tree",n,D.hb3)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.el,0.95,u,p),B.by],r)
w=q.d
if(w===D.aaj){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.aw,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.awY(q.gaQe(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.cl9(n)],r))}else{o=q.a
if(w===D.aWB)u.push(new C.aof(o.c,n,p))
else{w=q.r
u.push(new C.apn(o.c,o.d,o.e,o.f,new C.eM9(q),new C.eMa(q),new A.cx(w,x.b4)))}}o=A.cd(A.x(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.MK,p,p,B.ah)}return A.c6(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bBX(d){var w=null,v=A.n(8),u=d.a,t=A.X(Q.a_E,u?B.bs:B.bn,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kW,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eLL(this),w,w,w,w,w,w,w)},
gbz3(){switch(this.d.a){case 0:return D.a9B
case 1:return D.h1o
case 2:return D.a9C}},
bXW(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cC,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bPf,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bzH,A.aF(!1,B.a1,!0,w,A.aL(!1,A.n(12),!0,A.p(w,D.bMK,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eLP(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.n(12)
return new C.Fy(A.p(w,A.x(A.a([new A.D(E.Z6,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AM(this.gcAO()),w,w,w,w,w,w,D.fg0,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vz,B.jp,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.h1n,w)},
aAV(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.K,q=A.n(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bn
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.ee,new A.dq(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iG,u,u,u,B.FK,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eM5(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cl9(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e0:B.c
u=A.n(15)
t=A.p(p,D.bMQ,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bYP,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fy(A.p(p,A.x(A.a([t,B.d7,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRP(B.j4,"Scan QR",new C.eM_(q),d),1),B.at,A.E(q.aRP(M.yy,"Upload file",new C.eM0(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fGv,q.gaQe(),A.bn(B.aV,p,p,p,B.c,B.fR,p,p,new A.b7(A.n(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bwp,1.05,D.a9B,p)}w=J.b6(q.e,new C.eM1(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fy(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a9B,p)},
aRP(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.aZ,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.fer,B.L,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ahG,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cl8(d,e){var w,v,u=null,t=e.a,s=t?B.e0:B.c,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.en,10)],x.V),o=A.n(14),n=t?B.bs:B.bn
n=A.bw(B.VB,new A.fL(1.7777777777777777,C.aQ_(!0,B.fx,1/0,N.Nn,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AM(d.gwW()),u,u,u,u,u,u,D.fcy,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.x(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Af.NZ,t?B.bs:B.bn,u,u,u,u),u,u,u,new C.eLY(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eLZ(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e6,u,u,u,1/0)}}
C.bxj.prototype={}
C.r_.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcU7(){var w,v,u,t,s=this.c
if(s===B.k.jc(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lm.prototype={
gwW(){return B.d.cL(this.d,0,new C.cx8())},
ah(){var w=this,v=w.d,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.cx7(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bbV(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lm(w.a,w.b,v,u,w.e)},
bbC(d){return this.bbV(d,null)},
SA(d){return this.bbV(null,d)}}
C.HB.prototype={
a5(){return"FamilyGender."+this.b}}
C.i1.prototype={
ah(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hng(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDC(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i1(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akw.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kG.prototype={
gaol(){var w=this.f
return new A.a_(w,new C.bO1(),A.T(w).k("a_<1>")).gM(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.bO0(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i2b(w.y)],x.N,x.z)},
yC(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kG(w.a,v,u,t,s,r,w.r,q,p,o)},
bbU(d,e){var w=null
return this.yC(w,w,d,e,w,w,w,w)},
cJM(d,e,f,g,h,i,j){return this.yC(d,e,f,g,h,i,j,null)},
aDH(d,e){var w=null
return this.yC(w,w,w,d,w,w,e,w)},
cIg(d){var w=null
return this.yC(w,w,w,w,w,w,d,w)},
cIE(d){var w=null
return this.yC(w,w,w,w,w,w,w,d)},
aDt(d){var w=null
return this.yC(w,w,w,w,d,w,w,w)},
cJi(d,e,f){var w=null
return this.yC(w,d,w,e,w,w,f,w)},
cI3(d){var w=null
return this.yC(w,w,d,w,w,w,w,w)},
cIR(d,e){var w=null
return this.yC(d,w,w,w,w,e,w,w)}}
C.cx9.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cxa.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGF.prototype={}
C.b8p.prototype={
bD(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b8p()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b8o.prototype={
gwd(){return!0},
gFZ(){return this.z.b<this.b.length},
aTs(d){switch(0){case 0:return d.a.c}},
aT9(d){switch(0){case 0:return d.a.d}},
bRl(d,e){switch(0){case 0:return new A.hO(d,e)}},
bQJ(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h9(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iG(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Hl(b4)
switch(0){case 0:v=b5.b
u=new A.kD(0,v,0,1/0)
t=w===B.TD
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fQ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h9(b4,u,!0)
f=b1.aTs(g)
f.toString
e=b1.aT9(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGF(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGF(k,j,i))}d=s.length
switch(0){case 0:q=b5.cv(new A.hO(m,l))
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
a8=b1.aTs(g)
e=b1.aT9(g)
e.toString
a9=b1.bQJ(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bRl(a6,a3+a9)
b0=g.a
g.a=new A.iG(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h3(d){var w,v,u,t,s,r=this
r.ll(d)
w=d.b
w.ie()
v=A.dp()
u=r.a
v.e9(u.a,u.b,0,1)
w.oV(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h3(d)
w.nj(0)},
Gt(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ie(){return this.z}}
C.bvz.prototype={}
var z=a.updateTypes(["aA<~>()","R(i1)","R(kG)","~()","R(ne)","a5<m,@>(kG)","G(kG,kG)","m(i1)","kG(a5<@,@>)","R(lm)","R(ui)","ne(a5<@,@>)","ui()","G(lm,lm)","i1(a5<@,@>)","a5<m,@>(i1)","R(r_)","aA<~>(lm)","eG<m?>(i1)","G(i1,i1)","m?(i1)","a5<m,@>(ne)","ZR(Y)","m(m)","ad2(Y)","t(oi)","G(ne,ne)","i1(i1)","cL(bv<m,FL>)","cL(K0)","~(i1)","G?(i1)","i1()","ai<i1>()","R(uh)","R(K0)","D(i1)","~(HB)","R(aeB)","t(HB,m,a0)","Zf(Y)","bv<m,ai<a5<m,@>>>(m,ai<ne>)","~(G)","+count,id,name(G,m,m)(kG)","kG(kG)","a_b(Y)","a_c(Y)","R(lC)","lC()","m(kG)","a0X(Y)","YQ(Y)","YP(Y)","Zd(Y)","Zh(Y)","t(r_)","adn(Y)","~(m0)","aA<~>([m?])","K(K,lm)","t(lm)","K(K,r_)","a5<m,@>(r_)","r_(a5<@,@>)","YO(Y)","SB(Y)","cr(HA)","lm(a5<@,@>)","uh()","m(lm)","a5<m,@>(lm)","m(S)","G(i1)","kG(a5<m,@>)","Yn(Y)"])
C.fCe.prototype={
$1(d){return d.a+" "+d.b},
$S:121}
C.fCd.prototype={
bl2(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qS(s,d,B.hD,"book",E.Fo),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.L0(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bl2(d)},
$S:300}
C.fCf.prototype={
$1(d){return d.b},
$S:121}
C.fLr.prototype={
$1(d){var w=null
return A.eL(w,B.K,new F.Pm(this.a,this.b,w),w,w,0,B.Z1,B.d1,w,w,w)},
$S:48}
C.fqI.prototype={
$1(d){return d!=null},
$S:205}
C.fqJ.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:205}
C.fqO.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:176}
C.fzY.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.rJ,w,w,w,w,w,w,w,B.dt,w,w,10.5,w,B.em,w,!0,w,w,w,w),w),u=f?B.em:B.vH
return new A.nM(D.bs0,A.a9B(A.a([new A.fS(130,w,v),new A.yY(1,B.FX,A.fc(e,w,w,w,A.ha(w,g==null?D.eem:g,w,w,w,w,w,w,w,B.dt,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xx,B.lv))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1926}
C.fzX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vu(999)
f=A.x2(A.lx(h,A.fc("Cashier",h,h,h,A.ha(h,D.zs,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.em,h,!0,h,h,h,h),h),h,new A.kE(D.eed,h,f,B.hI,h),h,h,D.bsu,h))
w=A.x2(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dt,h,h,22,h,B.em,h,!0,h,h,h,h),h))
v=A.x2(A.fc(C.wO(new A.S(Date.now(),0,!1),!0),h,h,h,D.a89,h))
u=A.vu(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.em,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a89,h)
q=A.vu(10)
p=x.C
u=A.lx(h,A.yR(A.a([s,new A.fS(h,2,h),r,new A.fS(h,10,h),A.lx(h,A.yR(A.a([A.fc("Amount owed",h,h,h,D.a89,h),new A.fS(h,2,h),A.fc(A.AM(t.c),h,h,h,A.ha(h,D.zs,h,h,h,h,h,h,h,B.dt,h,h,20,h,B.em,h,!0,h,h,h,h),h)],p),B.r4,B.lv),h,new A.kE(B.pc,h,q,B.hI,h),h,h,D.brH,1/0)],p),B.r4,B.lv),h,new A.kE(E.aI7,h,u,B.hI,h),h,h,D.btw,1/0)
q=new A.nv(D.eeg,0.9,B.kN)
r=A.vu(12)
s=i.c
o=s.$2("Original due",C.wO(t.r,!1))
n=s.$2("Current due",C.wO(t.f,!1))
m=i.d
l=new A.nv(m,1.1,B.kN)
k=A.vu(8)
j=i.a
k=A.a([o,n,new A.fS(h,6,h),A.lx(h,A.x2(A.fc(t.gaKx(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dt,h,h,11,h,B.em,h,!0,0.5,h,h,h),h)),h,new A.kE(h,new A.pD(l,l,l,l),k,B.hI,h),h,h,D.bsC,1/0),new A.fS(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zs))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zs))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.rJ,h,h,h,h,h,h,h,B.dt,h,h,10.5,h,B.em,h,!0,h,h,h,h),h)
m=A.T(o).k("M<1,S8>")
o=A.C(new A.M(o,new C.fzW(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fS(h,4,h),n,new A.fS(h,6,h),new C.b8o(5,5,new C.b8p(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fS(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fS(h,8,h),w,new A.fS(h,3,h),v,new A.fS(h,16,h),u,new A.fS(h,10,h),A.lx(h,A.yR(k,B.xx,B.lv),h,new A.kE(h,new A.pD(q,q,q,q),r,B.hI,h),h,h,B.ahS,1/0)],p)
w=j.a
if(w!=null){v=new A.nv(B.Iq,1,B.kN)
B.d.v(f,A.a([new A.fS(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.rJ,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.em,h,!0,h,h,h,h),h),new A.fS(h,6,h),A.lx(h,new A.HR(w,B.VL,h,h),h,new A.kE(h,new A.pD(v,v,v,v),A.vu(6),B.hI,h),82,h,B.MO,1/0)],p))}f.push(new A.fS(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.f5o,h))
f.push(new A.fS(h,18,h))
f.push(A.x2(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.zs,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.em,h,!0,1.8,h,h,h),h)))
return f},
$S:380}
C.fzW.prototype={
$1(d){var w=null,v=new A.nv(D.Ir,0.7,B.kN),u=A.vu(999)
return A.lx(w,A.fc(C.wO(d,!1),w,w,w,A.ha(w,D.Ir,w,w,w,w,w,w,w,B.dt,w,w,9.5,w,B.em,w,!0,w,w,w,w),w),w,new A.kE(w,new A.pD(v,v,v,v),u,B.hI,w),w,w,D.bxM,w)},
$S:1927}
C.c2h.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wO(d,!1),w,w,w,w,w,w,D.fc2,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eD,w,w,w)},
$S:1928}
C.fLX.prototype={
$1(d){var w=null,v=A.aI(d,B.bX,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bQ8,w,w,w,new C.fLU(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eL(w,B.K,new A.cT(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.YR,A.x(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.co,A.cd(A.x(A.a([new A.ex(new C.aYq(r,w),s),B.R,A.B(A.a([A.E(A.eA(B.yI,D.fCQ,new C.fLV(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fa,w,new A.b7(A.n(14),B.Y),new A.az(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a18,D.fzm,new C.fLW(r,d),A.bn(B.aZ,w,w,w,B.c,w,B.fa,w,new A.b7(A.n(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.N,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.N,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Zf,B.d1,w,w,w)},
$S:48}
C.fLU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fLV.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m2(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h0),$async$$0)
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
if(m.e!=null)m.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fLW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fGy(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.J(x.q).f
s.S(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fLP.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eL(w,B.aw,A.x(A.a([new A.D(D.btk,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nE,w,w,w),1),A.aH(w,w,w,w,B.lt,w,w,w,new C.fLN(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.co,new A.D(B.fY,A.bw(A.n(14),A.fP(t,B.A,w,w,B.ci,B.dv,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Mt,new A.a7(1/0,w,A.dn(B.p2,D.aRV,new C.fLO(t,this.c,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.N,0,B.p),w,w,w,B.MF,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fLN.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fLO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t0(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fM0.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eL(w,B.aw,new A.D(D.bts,A.x(A.a([A.B(A.a([D.byO,A.aH(w,w,w,w,B.lt,w,w,w,new C.fLZ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ex(A.bw(A.n(14),A.p(w,A.b3(w,w,w,new C.bay(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.p2,D.aRV,new C.fM_(t,s,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fLZ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fM_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m2(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h0),$async$$0)
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
if(n.e!=null)n.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fuH.prototype={
$1(d){return d.a===this.a},
$S:236}
C.dGC.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dGn.prototype={
bkh(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e0:B.c
s=u.a
w=2
return A.b(A.bS(t,null,new C.dGq(s,q,e),p,!0,!0,!1,B.IH,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dGr(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bkh(d,e)},
$S:1929}
C.dGq.prototype={
$1(d){var w,v=null,u=this.c===B.wh,t=u?D.df4:D.daZ
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.aiq,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.im(!0,v,v,B.y,L.aP1,new C.dGp(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ai,v,B.e,B.N,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dGp.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cT.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.n(14)
if(q)u=B.cT
else u=(t.b.a.d.a?B.bs:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aYp(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dGo(t.d,r),s,s,s,s,s,s,s)},
$S:200}
C.dGo.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dGr.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dGl.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:91}
C.dGm.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cu,e,v)
return new A.d_(e,!1,A.is(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e3(new C.dGk(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:32}
C.dGk.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e0:B.c,f=A.n(14),e=A.I((h?B.bs:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.el,A.X(B.cB,i.a.d.a?B.bs:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dG5(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aSl("Name")
r=l.a
q=r.d==null?k:new C.dG6(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bm:B.lM
n=A.I(B.cT.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.U,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bbN(new A.D(B.fC,A.aL(!1,p,!0,A.p(B.A,C.aYp(m==null?"\ud83d\udc64":A.fAM(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kH,k,B.a7T,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aT_("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dG7(r,a0),r.d===B.wh),1),B.ab,A.E(i.aT_("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dGc(r,a0),r.d===B.a4M),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bI(B.a3,k,k,A.hn(D.bOu,D.fBb,new C.dGd(r,l.e,a0),A.fy(k,k,k,k,k,k,k,k,k,k,k,B.cT,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ul(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aSm("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.I((t?B.bs:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wO(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bC,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bLk],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dGe(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aSl("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b04(r.b.length!==0,B.mw,new C.dGf(r,i,a0),new C.dGg(r,a0),"Upload from gallery","ID photo"))
v.push(i.b04(r.c.length!==0,D.bEC,new C.dGh(r,i,d,a0),new C.dGi(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ah.a7p("Signature (optional)",t,new C.dGj(a0),new C.dG8(a0,t),new C.dG9(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bn
s=(i?B.bs:B.bn).j(0.28)
s=A.E(A.dW(E.aRO,new C.dGa(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tP,k,new A.b7(A.n(10),B.Y),new A.az(s,1,B.q,-1),k,k,k,k)),1)
t=A.bn(B.cT,k,k,k,B.c,k,B.tP,k,new A.b7(A.n(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uS,k,k,k),new C.dGb(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.x(v,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vD,B.jp,k,k,360)},
$S:170}
C.dG5.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dG6.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dG7.prototype={
$0(){return this.b.$1(new C.dG4(this.a))},
$S:0}
C.dG4.prototype={
$0(){var w=this.a
w.d=B.wh
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dGc.prototype={
$0(){return this.b.$1(new C.dG3(this.a))},
$S:0}
C.dG3.prototype={
$0(){var w=this.a
w.d=B.a4M
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dGd.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dGe.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wS(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dG2(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dG2.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gcf(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dGf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pf(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dG1(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dG1.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dGg.prototype={
$0(){return this.b.$1(new C.dG0(this.a))},
$S:0}
C.dG0.prototype={
$0(){return this.a.b=""},
$S:0}
C.dGh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e0:B.c
w=3
return A.b(A.bS(q,null,new C.dFZ(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pf(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dG_(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFZ.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anz,w,w,w,w,new C.dFT(d),!1,w,w,w,w,w,w,w,D.frC,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anx,w,w,w,w,new C.dFU(d),!1,w,w,w,w,w,w,w,D.fyo,w,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dFT.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dFU.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dG_.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dGi.prototype={
$0(){return this.b.$1(new C.dFY(this.a))},
$S:0}
C.dFY.prototype={
$0(){return this.a.c=""},
$S:0}
C.dGj.prototype={
$0(){return this.a.$1(new C.dFX())},
$S:0}
C.dFX.prototype={
$0(){},
$S:0}
C.dG8.prototype={
$0(){return this.a.$1(new C.dFW(this.b))},
$S:0}
C.dFW.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dG9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahx(u.a,null,null,new C.dFV(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFV.prototype={
$4(d,e,f,g){this.a.$1(new C.dFS(this.b,d))},
$S:364}
C.dFS.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dGa.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dGb.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.J(x.q).f.S(D.f1b)
return}if(w.a.d==null){w.c.J(x.q).f.S(D.eZ5)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dGF.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:91}
C.dGG.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AM(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z2(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z2(r).length>0?B.bz:B.cT,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bn
t=(q?B.bs:B.bn).j(0.28)
s=x.p
return new A.d_(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aB,A.B(A.a([A.E(A.dW(B.nF,new C.dGD(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jH,r,new A.b7(A.n(10),B.Y),new A.az(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fyN,new C.dGE(d),A.bn(B.cT,r,r,r,B.c,r,B.jH,r,new A.b7(A.n(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bo,E.Z6,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:32}
C.dGD.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dGE.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dGz.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dGA(r),p=r.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AM(l.c),s,s,s,s,s,s,D.fdy,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iC((r.a.d.a?B.bs:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_Z,"View receipt",new C.dGs(r,d,l))
u=l.x!=null
t=u?B.rn:B.q3
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.btp,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dGt(r,d,l)),q.$3$icon$label$onTap(B.BF,"Edit",new C.dGu(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mw,"View / download ID",new C.dGv(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bEB,"View / download selfie",new C.dGw(r,d,l)))
if(l.gaFi())p.push(q.$3$icon$label$onTap(A6.a1_,"View / download signature",new C.dGx(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e7,"Delete",new C.dGy(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.vz,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dGA.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.aw
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1930}
C.dGs.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fLT(w,this.c)},
$S:0}
C.dGt.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.RW(this.c)},
$S:0}
C.dGu.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.D4(this.c)},
$S:0}
C.dGv.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDk(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dGw.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDk(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dGx.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fLY(w,this.c)},
$S:0}
C.dGy.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.NU(0,this.c)},
$S:0}
C.dGH.prototype={
$1(d){return d.x==null},
$S:236}
C.dGI.prototype={
$1(d){return d.x!=null},
$S:236}
C.dGJ.prototype={
$2(d,e){return d+e.c},
$S:1931}
C.dGK.prototype={
$0(){return this.a.bzy()},
$S:0}
C.dGB.prototype={
$0(){return this.a.aeJ(this.b)},
$S:0}
C.fvk.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fvl.prototype={
$0(){return B.d.gI(D.a2b)},
$S:z+68}
C.d6q.prototype={
$0(){var w=this.a
return w.m(new C.d6o(w,this.b))},
$S:0}
C.d6o.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d6p.prototype={
$0(){},
$S:0}
C.d6r.prototype={
$0(){var w=this.a.gbYF()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fxy.prototype={
$1(d){return C.h7Z(A.a2(d,x.N,x.z))},
$S:z+11}
C.fxz.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fxA.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aM(w,v)
return d.d.aM(0,e.d)},
$S:z+26}
C.fKx.prototype={
$1(d){return d.ah()},
$S:z+21}
C.fSH.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fuy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bNX.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f4(e,v)?v:null},
$S:1932}
C.fL5.prototype={
$1(d){var w=this
return new C.Zf(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d75.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d74(w,d))},
$S:z+66}
C.d74.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6U.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d6R.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d6s.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d6t.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d6V.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d6B.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e0:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.d6z(d),w,w),A.bG(B.wE,new C.d6A(d),A.bn(B.mZ,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d6z.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d6A.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6C.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d6S.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d6T.prototype={
$0(){return B.d.gI(D.yU)},
$S:z+12}
C.d6x.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyk(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.SB(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d6y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6D.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YO(v,u,J.ad(w.d),null)},
$S:z+64}
C.d6E.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d73.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aC(s,new C.Yw(r.y,r.gyk(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d71(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9X(v,e,w,u,t,r.gbPO(),C.hnf(r.y.Q),r.gyk(0),s)
w=t}return A.c7(q,new C.d72(r,e),new A.D(B.Z7,w,s))},
$S:1933}
C.d72.prototype={
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
u.fF(v*3.141592653589793*0.5)
return A.fv(B.a3,A.de(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.d71.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGq(B.pQ,B.iH)},
$S:0}
C.d6O.prototype={
$0(){var w=this.a
return w.m(new C.d6N(w))},
$S:0}
C.d6N.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6P.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d6u.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.jY.j(0.5),r=x.p,q=A.a([D.fqe,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.YH(d,B.dX,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YH(d,L.alr,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kp.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kp.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YH(d,A0.amA,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YH(d,B.q9,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YH(d,B.q9,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eL(u,E.AS,A.bm(!0,new A.D(A5.xQ,A.x(q,B.F,u,B.e,B.N,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aiP,B.d1,u,new A.b7(t,new A.az(s,1.4,B.q,-1)),u)},
$S:48}
C.d6Q.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d6H.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.Zh(v,J.cJ(w.d),w.r+1,null)},
$S:z+54}
C.d6I.prototype={
$1(d){var w=null
return A.op(!1,A.em(w,w,w,E.AS,new A.jM(this.a,new C.d6G(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:315}
C.d6G.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7z,B.om,A.E(A.d(e,w,w,w,w,w,w,B.iQ,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d6J.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d6K.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.d6L.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6M.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AW(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Ro(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d6F(s,t))
w=4
return A.b(s.l0(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6X.prototype={
$1(d){var w=null
return A.op(!1,A.em(w,w,w,E.AS,new A.jM(this.a,new C.d6W(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:315}
C.d6W.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7z,B.om,A.E(A.d(e,w,w,w,w,w,w,B.iQ,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d6Y.prototype={
$0(){return this.a.a=!1},
$S:51}
C.d6Z.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.d7_.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.d70.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AW(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l0(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6v.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bhk(B.pQ,V.Mf)},
$S:0}
C.d6w.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGq(B.pQ,V.Mf)},
$S:0}
C.d8Q.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8R.prototype={
$1(d){var w=this.a
return w.m(new C.d8P(w))},
$S:9}
C.d8P.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d8S.prototype={
$1(d){var w=this.a
return w.m(new C.d8O(w))},
$S:9}
C.d8O.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d8T.prototype={
$1(d){var w=this.a
return w.m(new C.d8N(w))},
$S:9}
C.d8N.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d8U.prototype={
$0(){var w=this.a
return w.m(new C.d8M(w,this.b))},
$S:0}
C.d8M.prototype={
$0(){var w=this.b
this.a.d.saY(0,w)
return w},
$S:0}
C.d8V.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1n()
A.a6(this.b,!1).O(new A.boz(w,v))},
$S:0}
C.d7k.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d7j.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Zd(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d7o.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d7n.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7s(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hG,v,v,v)
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.d7l(d),v,v),A.bG(B.wE,new C.d7m(d),A.bn(B.mZ,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AS,w,v,v,v,v,D.fp5,v)},
$S:20}
C.d7l.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d7m.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d7p.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7q.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bV(B.bA,r,B.br,18,14),B.r,t,B.y,t,D.buk,t,t,B.ah)},
$S:308}
C.d7i.prototype={
$0(){return this.a.PW(0,this.b)},
$S:0}
C.d7h.prototype={
$0(){return this.a.Pq(0,this.b)},
$S:0}
C.cFV.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cFW.prototype={
$0(){return B.d.gI(D.yU)},
$S:z+12}
C.cFX.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bX(0,new A.D(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1935}
C.cZm.prototype={
$1(d){return this.a.m(new C.cZl(this.b,this.c))},
$S:9}
C.cZl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cZL.prototype={
$1(d){return this.a.m(new C.cZy())},
$S:2}
C.cZy.prototype={
$0(){},
$S:0}
C.cZM.prototype={
$1(d){return this.a.m(new C.cZx())},
$S:2}
C.cZx.prototype={
$0(){},
$S:0}
C.cZN.prototype={
$0(){var w=this.a
return w.m(new C.cZw(w,this.b))},
$S:0}
C.cZw.prototype={
$0(){var w=this.a
return w.d=w.go6().FD(this.b.a)},
$S:0}
C.cZO.prototype={
$0(){var w=this.a
return w.m(new C.cZv(w,this.b))},
$S:0}
C.cZv.prototype={
$0(){var w=this.a
return w.d=w.go6().cHA(this.b)},
$S:0}
C.cZP.prototype={
$1(d){return this.a.m(new C.cZu())},
$S:2}
C.cZu.prototype={
$0(){},
$S:0}
C.cZQ.prototype={
$0(){var w=this.a
return w.m(new C.cZt(w,this.b))},
$S:0}
C.cZt.prototype={
$0(){var w=this.a
return w.d=w.go6().cHF(this.b.a)},
$S:0}
C.cZR.prototype={
$1(d){var w=this.a
return w.m(new C.cZG(w,d))},
$S:6}
C.cZG.prototype={
$0(){var w=this.a
return w.d=w.go6().cIz(this.b)},
$S:0}
C.cZS.prototype={
$1(d){var w=this.a
return w.d=w.go6().aDw(d)},
$S:2}
C.cZT.prototype={
$1(d){var w=this.a
return w.d=w.go6().cHI(d)},
$S:2}
C.cZV.prototype={
$1(d){var w=this.a
return w.d=w.go6().cIx(d)},
$S:2}
C.cZW.prototype={
$1(d){var w=this.a
return w.m(new C.cZF(w,d))},
$S:9}
C.cZF.prototype={
$0(){var w=this.a
return w.d=w.go6().cIo(this.b)},
$S:0}
C.cZX.prototype={
$0(){var w=this.a,v=w.go6(),u=B.a.i(w.gyk(0).a.a),t=B.a.i(w.gaAJ().a.a)
u=v.bc3(B.a.i(w.gaqu().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dUB.prototype={
$0(){var w=this.a
w.vR()
w.a.bs()
w.a.pT()},
$S:0}
C.dUA.prototype={
$0(){var w=this.a
w.vR()
w.a.bs()
w.a.pT()},
$S:0}
C.dUD.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dUE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUF.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dUz.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dUC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dUH.prototype={
$0(){this.a.Op()
return null},
$S:0}
C.dUG.prototype={
$0(){return this.a.Es(this.b)},
$S:0}
C.dU1.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.df,w,w,!0,w,w,new C.dU_(d),w,w),r=A.bn(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dU0(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dU_.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dU0.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dU2.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cI3(this.b)},
$S:0}
C.dTX.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSB(w.b,w.c,w.d)},
$S:8}
C.dTv.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dTw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gw(t.a.c),$async$$0)
case 2:s=r.rh(q.dJ(e,new C.dTI(t)))
if(s!=null&&t.c!=null)t.m(new C.dTJ(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTI.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dTJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTL.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dTM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTW.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cIR(C.hnp(w),w)},
$S:0}
C.dTU.prototype={
$1(d){return new A.e3(new C.dTT(this.a,this.b),null)},
$S:21}
C.dTT.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e0:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.anc,v,v,v,p>0?new C.dTP(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.x(A.a([r,B.aR,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.anL,v,v,v,new C.dTQ(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.N,0,B.p)
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dTR(d),v,v),A.bG(B.po,new C.dTS(d),A.bn(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:168}
C.dTP.prototype={
$0(){return this.b.$1(new C.dTO(this.a))},
$S:0}
C.dTO.prototype={
$0(){return--this.a.a},
$S:0}
C.dTQ.prototype={
$0(){return this.b.$1(new C.dTN(this.a))},
$S:0}
C.dTN.prototype={
$0(){return++this.a.a},
$S:0}
C.dTR.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTS.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dTV.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cIE(this.a.a)
w.r.a8(0)},
$S:0}
C.dTj.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahF(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hh3(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dTk.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDt(w)},
$S:0}
C.dU4.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ad2(this.b,w,this.c,null)},
$S:z+24}
C.dTZ.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e0:B.c,t=A.n(20),s=A.X(B.lp,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bG(D.fzZ,new C.dTY(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:20}
C.dTY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTl.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dTm.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dTn.prototype={
$1(d){return d.a},
$S:z+7}
C.dTo.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i1(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDt(w)},
$S:0}
C.dTs.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahF(q)
w=A.T(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dTq(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hh3(v.e,null,r,v.f,v.r,new C.dTr(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dTr.prototype={
$0(){return this.a.a9O(this.b)},
$S:0}
C.dTq.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dTt.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("M<1,i1>")
w=A.C(new A.M(w,new C.dTp(this.b),v),v.k("ak.E"))
u.d=t.aDt(w)},
$S:0}
C.dTp.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dU3.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dTF.prototype={
$1(d){return d.length!==0},
$S:3}
C.dTG.prototype={
$1(d){var w=this
return new A.e3(new C.dTE(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dTE.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e0:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dTA(u,e,o),A.T(o).k("M<1,t>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.U,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(12),B.dh),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.m7,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ai,v,B.e,B.N,0,B.p)
t=w.a
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dTB(d),v,v),A.bG(B.JD,new C.dTC(t,u,o,e),A.bn(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fnb,new C.dTD(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:168}
C.dTA.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bS4,w,w,w,new C.dTz(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1936}
C.dTz.prototype={
$0(){return this.a.$1(new C.dTx(this.b,this.c))},
$S:0}
C.dTx.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dTB.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTC.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dTy(w.c,u))
v.bP(0,B.c8)}},
$S:0}
C.dTy.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dTD.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dTH.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJi(this.b,D.tV,C.Gu(v,w.a.c))},
$S:0}
C.dUb.prototype={
$1(d){return d.as},
$S:z+1}
C.dUc.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.dUd.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ibz(v)
return w.VC(v==null?null:v.a)},
$S:0}
C.dUe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hOQ(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cr3(new A.ar(u,t),v.gbia(),new A.ar(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cQT:D.cPf
q=A.I(s?B.dm:D.bcb,B.q,1)
p=A.n(22)
o=A.bX(0,A.b3(m,m,m,new C.bdk(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bX(0,A.uu(new A.Q(n,n,n,n),new A.a7(u,t,new C.bed(l.d,v,l.f,w,new C.dU7(l),l.gcaX(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvG(s,new C.dU8(l,e),new C.dU9(l,e),new C.dUa(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b4,B.x,r,m,m),B.n),m,m,m,R.ahW,m,m,m,m)},
$S:220}
C.dU7.prototype={
$1(d){var w=this.a
w.m(new C.dU5(w,d))},
$S:2}
C.dU5.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dU8.prototype={
$0(){var w=this.b
return this.a.b9J(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dU9.prototype={
$0(){var w=this.b
return this.a.b9J(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dUa.prototype={
$0(){var w=this,v=w.b
return w.a.aSB(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbia())},
$S:0}
C.dUf.prototype={
$0(){var w=this.a
return w.m(new C.dU6(w))},
$S:0}
C.dU6.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dTu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fN(new A.fF(s.c)),$async$$0)
case 2:t.xM("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7u.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhW(u,C.hrw(v.c,u),new C.d7t(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d7t.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d7v.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.blh(d.d,d.c,u.f.t(0,d.a),new C.d7s(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d7s.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fvo.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.rh(new A.cO(new A.a_(v,new C.fvp(d),w.k("a_<1>")),new C.fvq(),w.k("cO<1,m>")))},
$S:z+20}
C.fvp.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fvq.prototype={
$1(d){return d.a},
$S:z+7}
C.fvm.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fvn.prototype={
$1(d){return d.b},
$S:z+7}
C.fvt.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.rh(new A.cO(new A.a_(v,new C.fvu(d),w.k("a_<1>")),new C.fvv(),w.k("cO<1,m>")))},
$S:z+20}
C.fvu.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fvv.prototype={
$1(d){return d.a},
$S:z+7}
C.fvr.prototype={
$1(d){var w,v=A.ev([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fvs.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d7x.prototype={
$0(){return this.a},
$S:z+32}
C.d7O.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:252}
C.d7G.prototype={
$2(d,e){var w=this.a.ca(0,d,new C.d7H()),v=J.a4(w)
if(!v.t(w,e))v.L(w,e)},
$S:116}
C.d7H.prototype={
$0(){return A.a([],x.s)},
$S:742}
C.d7F.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f4(w,e)
return w===!0},
$S:276}
C.d7y.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d7E.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d7D.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Cr:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.U:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Cr:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1938}
C.d7z.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d7I.prototype={
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
t=J.aV(t==null?D.Cr:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b6(w,new C.d7J(r)))w.push(r)}}B.d.br(w,new C.d7K(a8))
B.d.aZ(w,new C.d7L())
q=C.hOP(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eCS],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.boj(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1939}
C.d7J.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d7K.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d7L.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.d7M.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cL(0,0,B.pv)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:653}
C.d7N.prototype={
$1(d){return 16+d*156},
$S:261}
C.d7w.prototype={
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
t.n(0,d,new C.FL(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FL(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FL(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.K0(d,new A.v(e+t,w),s,s.length))}},
$S:190}
C.d7A.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIG(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:116}
C.d7B.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d7C.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:743}
C.d7P.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:743}
C.d7Q.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:350}
C.d7R.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:183}
C.d7S.prototype={
$1(d){return d>=0.5},
$S:119}
C.fcB.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hx(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1941}
C.eOt.prototype={
$1(d){var w=null,v=A.n(8),u=B.bT.j(0.12),t=A.n(8)
return new A.D(B.nf,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f9e,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.MN,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eOs(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eOs.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dnI.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dnH.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nC,B.L,w,w)
return A.em(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.dnF(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mj,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dnG(d),w,w)],x.p),B.b9,B.Bd,w,u,D.bvA,w,D.bxx,new A.b7(v,B.Y),w,w)},
$S:20}
C.dnF.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dnG.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dnR.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dnS.prototype={
$1(d){var w=this.a
return w.m(new C.dnQ(w,d))},
$S:z+37}
C.dnQ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dnT.prototype={
$1(d){var w=null
return A.qo(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnW.prototype={
$1(d){var w=this.a
return w.m(new C.dnP(w,d))},
$S:34}
C.dnP.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dnV.prototype={
$1(d){var w=null
return A.qo(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnX.prototype={
$1(d){var w=this.a
return w.m(new C.dnO(w,d))},
$S:34}
C.dnO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnY.prototype={
$0(){var w=this.a
return w.m(new C.dnN(w))},
$S:0}
C.dnN.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dnZ.prototype={
$0(){var w=this.a
return w.m(new C.dnM(w))},
$S:0}
C.dnM.prototype={
$0(){return++this.a.at},
$S:0}
C.do_.prototype={
$0(){var w=this.a
return w.m(new C.dnL(w))},
$S:0}
C.dnL.prototype={
$0(){return--this.a.ax},
$S:0}
C.do0.prototype={
$0(){var w=this.a
return w.m(new C.dnK(w))},
$S:0}
C.dnK.prototype={
$0(){return++this.a.ax},
$S:0}
C.do1.prototype={
$1(d){var w=this.a
return w.m(new C.dnJ(w,d))},
$S:9}
C.dnJ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dnU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.do2.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.e0:B.c
v=A.n(12)
if(p)u=B.bT
else u=(q.c.a?B.e2:B.bN).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bs:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bs:B.bn
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bd,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,B.jH,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.do3(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.do3.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.doc.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c8P.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.c8W.prototype={
$1(d){return d.ah()},
$S:z+5}
C.c8X.prototype={
$2(d,e){var w=J.b6(e,new C.c8V(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c8V.prototype={
$1(d){return d.ah()},
$S:z+21}
C.c8R.prototype={
$1(d){return C.akx(A.a2(d,x.N,x.z))},
$S:z+8}
C.c8S.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c8T.prototype={
$1(d){return C.h7Z(A.a2(d,x.N,x.z))},
$S:z+11}
C.c8U.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c90.prototype={
$1(d){return new A.aFL(d.f.length,d.a,d.b)},
$S:z+43}
C.c91.prototype={
$2(d,e){return B.a.aM(d.c,e.c)},
$S:563}
C.c8Y.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c8Z.prototype={
$1(d){return d.cIg(C.Gu(d,this.a))},
$S:z+44}
C.dUo.prototype={
$1(d){return C.u1(d,this.a.a.c)},
$S:z+2}
C.dUp.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dUt.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dUu.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dUl.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZV(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yl("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p9(r.c,r.e),$async$$0)
case 4:s.yl(p)
w=5
return A.b(s.Ju(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZV(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yl("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p9(r.c,r.e),$async$$0)
case 4:s.yl(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUn.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.V1(n.d,m,n.e,r.b),$async$$0)
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
return A.b(o.Ju(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yl(B.a.eh(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dUs.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZU(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yl("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cm(A.ea(new C.dUr(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p9(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUr.prototype={
$1(d){var w=this.b
return new C.a_b(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dUq.prototype={
$1(d){return D.h5P},
$S:z+46}
C.dUw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dUx.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dUv(w,d)
return new A.D(B.da,new C.beh(this.b,d.c,d.a,w,null),null)},
$S:1942}
C.dUv.prototype={
$0(){return this.a.Xk(this.b.b)},
$S:0}
C.dUg.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dUh.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dUi.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dUj.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dUk.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dUy.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:184}
C.dFK.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dFL.prototype={
$0(){return B.d.gI(D.a3E)},
$S:z+48}
C.dFM.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cX8,44),w,w,w),w,w,new C.bj3(u,t,v,w),B.ax)},
$S:69}
C.fLy.prototype={
$1(d){return A.oU(new C.fLx(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:135}
C.fLx.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e0:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rI,24)],x.V),o=r?B.e2:B.bN
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bMz,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.aiU,A.B(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.eXh,new C.fLw(this.b,s),20,B.aiu,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kM,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fLw.prototype={
$2(d,e){var w=null,v=D.a3E[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.I(s?B.e2:B.bN,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.en,8)],x.V),p=A.n(15),o=A.E(new C.a65(v.a,!0,w),1),n=s?B.jE:B.iY,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eH(A.bw(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.kZ,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fLv(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:75}
C.fLv.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cgu.prototype={
$0(){return this.a.afM(this.b)},
$S:0}
C.fKV.prototype={
$1(d){return D.h1M},
$S:z+74}
C.fSo.prototype={
$1(d){var w=this
return new C.a0X(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fL_.prototype={
$1(d){return new C.YQ(this.a,null)},
$S:z+51}
C.fKZ.prototype={
$1(d){return D.h2L},
$S:z+52}
C.d_8.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d_9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d_7(w,d))},
$S:34}
C.d_7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d_a.prototype={
$1(d){return this.a.K4()},
$S:2}
C.d_b.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d_4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d_5.prototype={
$1(d){return this.a.K4()},
$S:2}
C.d_6.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cxH.prototype={
$0(){},
$S:0}
C.cxN.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cxO.prototype={
$0(){return this.a.aO0(-1)},
$S:0}
C.cxP.prototype={
$1(d){return this.a.m(new C.cxM())},
$S:2}
C.cxM.prototype={
$0(){},
$S:0}
C.cxQ.prototype={
$0(){return this.a.aO0(1)},
$S:0}
C.cxR.prototype={
$1(d){return this.a.m(new C.cxL())},
$S:2}
C.cxL.prototype={
$0(){},
$S:0}
C.cxS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e2:B.bN
return A.uk(u,u,B.aZ,r,u,new C.cxK(t,d),B.Bp,s,w,u,new A.az(v,1,B.q,-1),B.ce)},
$S:1943}
C.cxK.prototype={
$1(d){var w=this.a
return w.m(new C.cxI(w,this.b))},
$S:9}
C.cxI.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cxT.prototype={
$1(d){return this.a.m(new C.cxJ())},
$S:2}
C.cxJ.prototype={
$0(){},
$S:0}
C.cxU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fc3.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fc4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fc5.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fc1.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyH()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bxw,new A.ex(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bvv(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:69}
C.fc2.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.aA(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.aq(B.aV,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eH(D.ecf,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.dc(-1.2+t,-0.5),new A.dc(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:129}
C.fJz.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:68}
C.eLD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eLu.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eLv.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eLB.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e3(new C.eLA(w,this.b),null)},
$S:21}
C.eLA.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e0:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eL(w,u,new A.D(B.aiN,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hdQ(new C.eLx(r,e),r.a),B.aB,A.B(A.a([A.E(A.dW(B.df,new C.eLy(d),w),1),B.at,A.E(A.bG(B.Ug,new C.eLz(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(t,B.Y),w)},
$S:98}
C.eLx.prototype={
$1(d){return this.b.$1(new C.eLw(this.a,d))},
$S:34}
C.eLw.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eLy.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eLz.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eLC.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.SA(this.b)},
$S:0}
C.eLp.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbC(w)},
$S:0}
C.eLt.prototype={
$1(d){return this.bkK(d)},
bkK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lc(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iR(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eLs.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eLr(this.b),v),v.k("J.E"))
u.d=t.bbC(w)},
$S:0}
C.eLr.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eLE.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.eLF.prototype={
$1(d){return this.a.bCO(d,this.b)},
$S:z+55}
C.eLq.prototype={
$0(){return this.a.a9N(this.b)},
$S:0}
C.fSe.prototype={
$1(d){return new C.adn(this.a,this.b,this.c,null)},
$S:z+56}
C.eLH.prototype={
$0(){return this.a.a_2(this.b)},
$S:0}
C.eLI.prototype={
$0(){return this.a.PS(this.b)},
$S:0}
C.eLJ.prototype={
$0(){return this.a.En(this.b)},
$S:0}
C.eLK.prototype={
$0(){return this.a.a_3(this.b)},
$S:0}
C.eLG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eLk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eLl.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eLm.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eLo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pZ(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eLn(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLn.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eM6.prototype={
$2(d,e){return d+e.gwW()},
$S:z+59}
C.eM2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eM3.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eLO.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e0:B.c,s=A.n(24),r=A.p(v,D.bN_,B.f,v,v,new A.o(B.av.j(u?0.18:0.08),v,A.I(B.av.j(0.28),B.q,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.aw
u=u?B.e2:B.bN
w=x.p
return A.eL(v,t,new A.D(B.xU,A.x(A.a([r,B.aR,q,B.O,p,B.d7,A.B(A.a([A.E(A.dW(B.nF,new C.eLM(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.fa,v,new A.b7(A.n(14),B.Y),new A.az(u,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fDK,new C.eLN(d),A.bn(B.av,v,v,v,v,v,B.fa,v,new A.b7(A.n(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.N,0,B.p),v),v,v,v,v,B.d1,v,new A.b7(s,B.Y),v)},
$S:48}
C.eLM.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eLN.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eLX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e0:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.d2R:B.a3_,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eR_,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cx,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.az,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aiR,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4M(B.b6,B.j4,new C.eLU(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b4M(B.cA,M.yy,new C.eLV(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.av.j(k?0.14:0.06)
q=A.n(16)
p=A.I(B.av.j(0.28),B.q,1)
o=A.p(m,D.bMn,B.f,m,m,new A.o(B.av.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vB,A.p(m,A.x(A.a([g,new A.D(B.aiO,A.x(A.a([w,B.R,u,B.by,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.be,n,A.X(B.eA,k?B.bs:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eLW(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eLU.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vr("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLV.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vr("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLW.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.NH(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLS.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e0:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e2:B.bN
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bs:B.bn
u=A.bw(w,new A.a7(48,48,C.aQ_(!0,A.n(12),48,N.Nn,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AM(v.gwW())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vB,A.p(q,A.x(A.a([B.R,k,new A.D(D.aiL,A.B(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.B4,r.cl7(B.ud,B.aV,new C.eLQ(d),p,"QR code or backup file","Transfer project"),r.b1J(!0,B.e7,B.av,new C.eLR(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eLQ.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eLR.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eLT.prototype={
$1(d){return this.bkL(d)},
bkL(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Lc(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vF(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eM9.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eM8(w))},
$S:0}
C.eM8.prototype={
$0(){return this.a.r++},
$S:0}
C.eMa.prototype={
$0(){var w=this.a
return w.m(new C.eM7(w))},
$S:0}
C.eM7.prototype={
$0(){return this.a.r++},
$S:0}
C.eLL.prototype={
$0(){var w=this.a.c
w.toString
return A.iR(w,null)},
$S:0}
C.eLP.prototype={
$0(){return this.a.cer(this.b)},
$S:0}
C.eM5.prototype={
$0(){var w=this.a
return w.m(new C.eM4(w,this.b))},
$S:0}
C.eM4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eM_.prototype={
$0(){return this.a.vr("scan")},
$S:0}
C.eM0.prototype={
$0(){return this.a.vr("file")},
$S:0}
C.eM1.prototype={
$1(d){return this.a.cl8(d,this.b)},
$S:z+60}
C.eLZ.prototype={
$0(){return this.a.Er(this.b)},
$S:0}
C.eLY.prototype={
$0(){return this.a.a_y(this.b,this.c)},
$S:0}
C.cx8.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cx7.prototype={
$1(d){return d.ah()},
$S:z+62}
C.cx5.prototype={
$1(d){return C.hxl(A.a2(d,x.N,x.z))},
$S:z+63}
C.cx6.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fuo.prototype={
$1(d){return d.y===D.kw},
$S:z+2}
C.fSP.prototype={
$1(d){return C.bBh(d,this.a)},
$S:z+2}
C.fsv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bO1.prototype={
$1(d){return!d.as},
$S:z+1}
C.bO0.prototype={
$1(d){return d.ah()},
$S:z+15}
C.bNY.prototype={
$1(d){return C.h8_(A.a2(d,x.N,x.z))},
$S:z+14}
C.bNZ.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bO_.prototype={
$1(d){return J.k(d)},
$S:17}
C.fjC.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.ffi.prototype={
$1(d){return C.fZi(A.a2(d,x.N,x.z))},
$S:z+67}
C.ffj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.ffk.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fKM.prototype={
$1(d){return J.k(d)},
$S:17}
C.fKN.prototype={
$1(d){return d.a},
$S:z+69}
C.fKO.prototype={
$1(d){return d.length!==0},
$S:3}
C.fKP.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fKQ.prototype={
$1(d){return d.SA(null).ah()},
$S:z+70}
C.fSN.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fuS.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fxE.prototype={
$1(d){return C.akx(A.a2(d,x.N,x.z))},
$S:z+8}
C.fxF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fxG.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fxH.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fxI.prototype={
$1(d){return C.u1(d,this.a)},
$S:z+2}
C.fKz.prototype={
$1(d){return C.u1(d,this.a)},
$S:z+2}
C.fSI.prototype={
$1(d){return C.akx(A.a2(d,x.N,x.z))},
$S:z+8}
C.fSJ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fSK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fuz.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fuA.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fST.prototype={
$1(d){return!d.as},
$S:z+1}
C.fu3.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fu4.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fu5.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.fSp.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fyr.prototype={
$1(d){return d.Q},
$S:z+72}
C.fKs.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fxB.prototype={
$1(d){return C.akx(A.a2(d,x.N,x.z))},
$S:z+8}
C.fxC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fxD.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fKn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ffQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffR.prototype={
$1(d){return C.h8_(A.a2(d,x.N,x.z))},
$S:z+14}
C.ffS.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.ffT.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.ffU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fg6.prototype={
$2(d,e){return d.eR(new C.fg7(e))},
$S:1944}
C.fg7.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.ca},
$S:1945}
C.fg3.prototype={
$1(d){return C.hTq(d,this.a)},
$S:z+73}
C.fg4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fg5.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fkg.prototype={
$1(d){return d.a},
$S:z+49}
C.fkh.prototype={
$1(d){return d.length!==0},
$S:3}
C.fki.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fmZ.prototype={
$1(d){return d.ah()},
$S:z+5}
C.frP.prototype={
$1(d){return C.hjn(d,C.Gu(d,this.a))},
$S:z+5}
C.frQ.prototype={
$1(d){return C.hjo(d,C.Gu(d,this.a))},
$S:z+5};(function aliases(){var w=C.aL1.prototype
w.buR=w.q
w=C.aNc.prototype
w.bxe=w.q
w=C.aNd.prototype
w.bxf=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCw.prototype,"gci3","ci4",25)
var s
w(s=C.azA.prototype,"gcb2","cb3",42)
v(s,"gaMg","Nf",0)
v(s,"gcqp","AN",0)
v(s,"gbKB","NV",0)
v(s,"gcEu","ym",0)
v(s,"gck5","a0f",0)
v(s,"gbFZ","ND",0)
v(s,"gbL1","WM",0)
w(s,"gbPO","bPP",71)
v(s,"gbAl","zP",0)
v(C.azB.prototype,"gcEq","Fi",0)
v(s=C.aD6.prototype,"gafo","vG",0)
v(s,"gcdH","a_p",0)
v(s,"gaQk","HT",0)
v(s=C.aD3.prototype,"gcAy","a2m",0)
v(s,"gafo","vG",0)
v(s,"gcop","a0V",0)
v(s,"gceE","a_D",0)
w(s,"gcaX","caY",30)
v(s,"gbKT","HY",0)
v(s,"gcBD","cBE",3)
v(s,"gc1u","Yt",0)
w(s,"gc9s","c9t",23)
v(s,"gcdr","cds",3)
v(s=C.aBv.prototype,"gc7g","Pr",0)
v(s,"gc7i","c7j",3)
v(s,"gbHx","a9o",0)
v(s=C.aD5.prototype,"gbOi","Xg",0)
v(s,"gbYM","XW",0)
v(s,"gcuR","a1L",0)
v(s,"gcqZ","a1m",0)
v(C.aD4.prototype,"gcqH","ah8",0)
v(C.asf.prototype,"gc9q","a_1",0)
v(C.ayl.prototype,"ga26","K4",3)
v(C.ayk.prototype,"ga26","K4",3)
v(C.ax4.prototype,"ga26","K4",3)
v(s=C.aEB.prototype,"gb17","Qm",0)
v(s,"gbz9","Vw",0)
v(s,"gces","cet",3)
w(C.aEA.prototype,"gcah","cai",57)
u(C.aEC.prototype,"gaQe",0,0,null,["$1","$0"],["HS","bIO"],58,0,0)
t(C,"hqI","i29",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.ao3,C.uh,C.ne,C.HA,C.aeB,C.JT,C.ui,C.K0,C.FL,C.bef,C.aIG,C.apk,C.d7T,C.lC,C.aSY,C.aSX,C.aQW,C.tR,C.r_,C.lm,C.i1,C.kG,C.aGF])
u(A.i_,[C.fCe,C.fCd,C.fCf,C.fLr,C.fqI,C.fqJ,C.fqO,C.fzY,C.fzX,C.fzW,C.c2h,C.fLX,C.fLP,C.fM0,C.fuH,C.dGq,C.dGl,C.dGm,C.dFZ,C.dFV,C.dGF,C.dGG,C.dGz,C.dGA,C.dGH,C.dGI,C.fvk,C.fxy,C.fxz,C.fKx,C.fSH,C.fuy,C.fL5,C.d75,C.d6s,C.d6B,C.d6S,C.d6x,C.d6D,C.d6u,C.d6H,C.d6I,C.d6G,C.d6X,C.d6W,C.d8R,C.d8S,C.d8T,C.d7j,C.d7o,C.d7n,C.cFV,C.cFX,C.cZm,C.cZL,C.cZM,C.cZP,C.cZR,C.cZS,C.cZT,C.cZV,C.cZW,C.dUC,C.dU1,C.dTX,C.dTv,C.dTI,C.dTL,C.dTU,C.dTj,C.dU4,C.dTZ,C.dTl,C.dTm,C.dTn,C.dTs,C.dTq,C.dTp,C.dTF,C.dTG,C.dTA,C.dUb,C.dU7,C.d7u,C.d7v,C.fvo,C.fvp,C.fvq,C.fvm,C.fvn,C.fvt,C.fvu,C.fvv,C.fvr,C.fvs,C.d7O,C.d7E,C.d7z,C.d7J,C.d7K,C.d7N,C.d7B,C.d7Q,C.d7R,C.d7S,C.fcB,C.eOt,C.dnH,C.dnR,C.dnS,C.dnT,C.dnW,C.dnV,C.dnX,C.do1,C.do2,C.c8W,C.c8V,C.c8R,C.c8S,C.c8T,C.c8U,C.c90,C.c8Y,C.c8Z,C.dUo,C.dUr,C.dUq,C.dUx,C.dUy,C.dFK,C.fLy,C.fKV,C.fSo,C.fL_,C.fKZ,C.d_9,C.d_a,C.d_5,C.cxP,C.cxR,C.cxS,C.cxK,C.cxT,C.fc3,C.fJz,C.eLB,C.eLx,C.eLt,C.eLr,C.eLF,C.fSe,C.eLO,C.eLX,C.eLS,C.eLT,C.eM1,C.cx7,C.cx5,C.cx6,C.fuo,C.fSP,C.fsv,C.bO1,C.bO0,C.bNY,C.bNZ,C.bO_,C.ffi,C.ffj,C.fKM,C.fKN,C.fKO,C.fKP,C.fKQ,C.fSN,C.fuS,C.fxE,C.fxF,C.fxH,C.fxI,C.fKz,C.fSI,C.fSJ,C.fSK,C.fuz,C.fuA,C.fST,C.fu3,C.fu4,C.fSp,C.fyr,C.fKs,C.fxB,C.fxC,C.fKn,C.ffQ,C.ffR,C.ffS,C.ffT,C.ffU,C.fg7,C.fg3,C.fg4,C.fkg,C.fkh,C.fmZ,C.frP,C.frQ])
u(A.au,[C.aYq,C.akv,C.aUb,C.Yw,C.b9X,C.bed,C.bhW,C.bvG,C.blh,C.ad1,C.bhV,C.ad0,C.bhU,C.aBw,C.aHI,C.ad2,C.JP,C.bee,C.aci,C.bec,C.beh,C.aYo,C.asf,C.adn])
u(A.mP,[C.bay,C.bbL,C.bbC,C.aGA,C.bgZ,C.beg,C.bdk,C.bj3,C.bvv])
u(A.ja,[C.fLU,C.fLV,C.fLW,C.fLN,C.fLO,C.fLZ,C.fM_,C.dGC,C.dGo,C.dGr,C.dG5,C.dG6,C.dG7,C.dG4,C.dGc,C.dG3,C.dGd,C.dGe,C.dG2,C.dGf,C.dG1,C.dGg,C.dG0,C.dGh,C.dFT,C.dFU,C.dG_,C.dGi,C.dFY,C.dGj,C.dFX,C.dG8,C.dFW,C.dG9,C.dFS,C.dGa,C.dGb,C.dGD,C.dGE,C.dGs,C.dGt,C.dGu,C.dGv,C.dGw,C.dGx,C.dGy,C.dGK,C.dGB,C.fvl,C.d6q,C.d6o,C.d6p,C.d6r,C.d74,C.d6U,C.d6R,C.d6t,C.d6V,C.d6z,C.d6A,C.d6C,C.d6T,C.d6y,C.d6E,C.d71,C.d6O,C.d6N,C.d6P,C.d6Q,C.d6J,C.d6L,C.d6M,C.d6F,C.d6Y,C.d70,C.d6v,C.d6w,C.d8Q,C.d8P,C.d8O,C.d8N,C.d8U,C.d8M,C.d8V,C.d7k,C.d7l,C.d7m,C.d7p,C.d7i,C.d7h,C.cFW,C.cZl,C.cZy,C.cZx,C.cZN,C.cZw,C.cZO,C.cZv,C.cZu,C.cZQ,C.cZt,C.cZG,C.cZF,C.cZX,C.dUB,C.dUA,C.dUD,C.dUE,C.dUF,C.dUz,C.dUH,C.dUG,C.dU_,C.dU0,C.dU2,C.dTw,C.dTK,C.dTJ,C.dTM,C.dTW,C.dTP,C.dTO,C.dTQ,C.dTN,C.dTR,C.dTS,C.dTV,C.dTk,C.dTY,C.dTo,C.dTr,C.dTt,C.dU3,C.dTz,C.dTx,C.dTB,C.dTC,C.dTy,C.dTD,C.dTH,C.dUc,C.dUd,C.dU5,C.dU8,C.dU9,C.dUa,C.dUf,C.dU6,C.dTu,C.d7t,C.d7s,C.d7x,C.d7H,C.d7y,C.eOs,C.dnI,C.dnF,C.dnG,C.dnQ,C.dnP,C.dnO,C.dnY,C.dnN,C.dnZ,C.dnM,C.do_,C.dnL,C.do0,C.dnK,C.dnJ,C.dnU,C.do3,C.doc,C.dUp,C.dUt,C.dUu,C.dUl,C.dUm,C.dUn,C.dUs,C.dUw,C.dUv,C.dUg,C.dUh,C.dUi,C.dUj,C.dUk,C.dFL,C.fLv,C.cgu,C.d_8,C.d_7,C.d_b,C.d_4,C.d_6,C.cxH,C.cxN,C.cxO,C.cxM,C.cxQ,C.cxL,C.cxI,C.cxJ,C.cxU,C.fc4,C.fc5,C.eLD,C.eLu,C.eLv,C.eLw,C.eLy,C.eLz,C.eLC,C.eLp,C.eLs,C.eLE,C.eLq,C.eLH,C.eLI,C.eLJ,C.eLK,C.eLG,C.eLk,C.eLl,C.eLm,C.eLo,C.eLn,C.eM2,C.eM3,C.eLM,C.eLN,C.eLU,C.eLV,C.eLW,C.eLQ,C.eLR,C.eM9,C.eM8,C.eMa,C.eM7,C.eLL,C.eLP,C.eM5,C.eM4,C.eM_,C.eM0,C.eLZ,C.eLY])
u(A.ag,[C.aof,C.SB,C.Zd,C.Zh,C.Zf,C.YO,C.apn,C.aph,C.ZR,C.apl,C.a_b,C.a_c,C.a65,C.YQ,C.YP,C.Yn,C.a0X,C.Fy,C.awY,C.ase,C.as8,C.asd,C.O0])
u(A.ah,[C.aCw,C.bea,C.azA,C.bev,C.azB,C.bbJ,C.aD6,C.aD3,C.aBv,C.aD5,C.aD4,C.bjo,C.aL1,C.ayl,C.ayk,C.ax4,C.bvy,C.aNc,C.aNd,C.aEB,C.bkL,C.aEA,C.bxj])
u(A.km,[C.dGn,C.dGp,C.dGk,C.dGJ,C.fxA,C.bNX,C.d73,C.d72,C.d6K,C.d6Z,C.d7_,C.d7q,C.dTT,C.dTE,C.dUe,C.d7G,C.d7F,C.d7D,C.d7I,C.d7L,C.d7M,C.d7w,C.d7A,C.d7C,C.d7P,C.c8P,C.c8X,C.c91,C.dFM,C.fLx,C.fLw,C.fc1,C.fc2,C.eLA,C.eM6,C.cx8,C.fjC,C.ffk,C.fxG,C.fu5,C.fxD,C.fg6,C.fg5,C.fki])
t(C.bj4,C.aL1)
u(A.md,[C.abl,C.aJn,C.HB,C.akw,C.cx9,C.cxa])
t(C.bvw,C.aNc)
t(C.bvx,C.aNd)
t(C.aEC,C.bxj)
t(C.b8p,A.b8d)
t(C.bvz,A.a5L)
t(C.b8o,C.bvz)
w(C.aL1,A.eW)
w(C.aNc,A.c9)
w(C.aNd,A.c9)
v(C.bxj,A.eB)
v(C.bvz,A.j4)})()
A.k0(b.typeUniverse,JSON.parse('{"aYq":{"au":[],"t":[]},"bay":{"aB":[]},"aof":{"ag":[],"t":[]},"aCw":{"ah":["aof"]},"SB":{"ag":[],"t":[]},"akv":{"au":[],"t":[]},"aUb":{"au":[],"t":[]},"bea":{"ah":["SB"]},"Zd":{"ag":[],"t":[]},"Zh":{"ag":[],"t":[]},"Zf":{"ag":[],"t":[]},"YO":{"ag":[],"t":[]},"azA":{"ah":["Zd"]},"bev":{"ah":["Zh"]},"azB":{"ah":["Zf"]},"Yw":{"au":[],"t":[]},"bbL":{"aB":[]},"bbC":{"aB":[]},"bbJ":{"ah":["YO"]},"aGA":{"aB":[]},"bgZ":{"aB":[]},"b9X":{"au":[],"t":[]},"apn":{"ag":[],"t":[]},"aph":{"ag":[],"t":[]},"ZR":{"ag":[],"t":[]},"ad2":{"au":[],"t":[]},"aD6":{"ah":["apn"]},"aD3":{"ah":["aph"]},"bed":{"au":[],"t":[]},"beg":{"aB":[]},"bhW":{"au":[],"t":[]},"bdk":{"aB":[]},"bvG":{"au":[],"t":[]},"blh":{"au":[],"t":[]},"aBv":{"ah":["ZR"]},"ad1":{"au":[],"t":[]},"bhV":{"au":[],"t":[]},"ad0":{"au":[],"t":[]},"bhU":{"au":[],"t":[]},"aBw":{"au":[],"t":[]},"aHI":{"au":[],"t":[]},"JP":{"au":[],"t":[]},"apl":{"ag":[],"t":[]},"a_b":{"ag":[],"t":[]},"a_c":{"ag":[],"t":[]},"aD5":{"ah":["apl"]},"bee":{"au":[],"t":[]},"aci":{"au":[],"t":[]},"bec":{"au":[],"t":[]},"beh":{"au":[],"t":[]},"aD4":{"ah":["a_b"]},"bjo":{"ah":["a_c"]},"aYo":{"au":[],"t":[]},"a65":{"ag":[],"t":[]},"bj4":{"ah":["a65"]},"bj3":{"aB":[]},"asf":{"au":[],"t":[]},"YQ":{"ag":[],"t":[]},"YP":{"ag":[],"t":[]},"Yn":{"ag":[],"t":[]},"a0X":{"ag":[],"t":[]},"ayl":{"ah":["YQ"]},"ayk":{"ah":["YP"]},"ax4":{"ah":["Yn"]},"bvy":{"ah":["a0X"]},"Fy":{"ag":[],"t":[]},"awY":{"ag":[],"t":[]},"bvw":{"ah":["Fy"]},"bvx":{"ah":["awY"]},"bvv":{"aB":[]},"ase":{"ag":[],"t":[]},"aEB":{"ah":["ase"]},"adn":{"au":[],"t":[]},"as8":{"ag":[],"t":[]},"asd":{"ag":[],"t":[]},"bkL":{"ah":["as8"]},"aEA":{"ah":["asd"]},"O0":{"ag":[],"t":[]},"aEC":{"ah":["O0"],"eB":[]},"b8o":{"j4":[],"fg":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQW"),Q:w("r_"),n:w("bk<m,m>"),c5:w("aSX"),dY:w("aSY"),d:w("eG<m?>"),e:w("HA"),B:w("ne"),P:w("i1"),k:w("kG"),x:w("aA<~>"),f5:w("O<a2V>"),V:w("O<ac>"),t:w("O<r_>"),O:w("O<w>"),ac:w("O<eG<m?>>"),I:w("O<ne>"),u:w("O<i1>"),_:w("O<kG>"),cl:w("O<aA<ai<a5<m,@>>>>"),R:w("O<ng>"),cq:w("O<ai<+(K,K)>>"),ez:w("O<a5<m,aD>>"),gE:w("O<a5<m,m>>"),c7:w("O<a5<m,@>>"),fD:w("O<mu>"),bp:w("O<oi>"),g:w("O<v>"),v:w("O<hv>"),L:w("O<+(m,m)>"),G:w("O<+(K,K)>"),bF:w("O<+count,id,name(G,m,m)>"),A:w("O<cR>"),s:w("O<m>"),aS:w("O<iU>"),p:w("O<t>"),C:w("O<fg>"),D:w("O<lm>"),fp:w("O<JT>"),M:w("O<K0>"),gZ:w("O<aGF>"),Y:w("O<aeB>"),E:w("O<aIG>"),F:w("O<K>"),dC:w("O<G>"),dS:w("O<aB?>"),d4:w("O<m?>"),J:w("cs<ah<ag>>"),b:w("ai<ne>"),do:w("ai<i1>"),r:w("ai<kG>"),U:w("ai<a5<m,@>>"),gk:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),h:w("ai<m>"),c:w("ai<lm>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a5<m,@>>>"),a:w("a5<m,@>"),f:w("a5<@,@>"),gv:w("M<m,HC>"),w:w("iE"),g2:w("rm"),bV:w("ao3"),fL:w("cr"),K:w("aD"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),d9:w("+dx,hidden(K,ai<i1>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),e7:w("bq<K>"),gc:w("dL"),b4:w("cx<G>"),W:w("jM<m>"),l:w("t"),cM:w("fg"),i:w("lm"),cc:w("FL"),bw:w("ad0<m?>"),cy:w("K2"),q:w("n2"),y:w("R"),gR:w("K"),z:w("@"),S:w("G"),eK:w("ai<kG>?"),m:w("apk?"),cT:w("v?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),X:w("+qrPayload,token,usesRemaining(m,m,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("q0?"),T:w("m?"),aD:w("dL?"),o:w("lm?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aYZ=new A.bp(B.hf,B.bG,B.hf,B.bG)
D.aaW=new A.bp(B.hf,B.it,B.hf,B.it)
D.aZb=new A.bp(B.iu,B.bG,B.bG,B.bG)
D.aZf=new A.az(B.cT,1.4,B.q,-1)
D.aZp=new A.az(B.ad,1,B.q,-1)
D.b_O=new A.aY(0,1/0,64,1/0)
D.b_S=new A.aY(0,84,0,1/0)
D.ayz=w([B.lM,B.r0,B.c],x.O)
D.bXX=new A.a8(B.az,B.aC,B.x,D.ayz,null,null)
D.b0C=new A.o(null,null,null,null,null,D.bXX,B.n)
D.d2l=w([B.aV,B.bT],x.O)
D.c_3=new A.a8(B.b0,B.b4,B.x,D.d2l,null,null)
D.b0X=new A.o(null,null,null,null,null,D.c_3,B.n)
D.b7a=new A.fk(null,null,null,null,null,E.jY,null,null,null,null)
D.acg=new A.cp(B.A,null,null,D.b7a,null)
D.kp=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f7b=new A.H(!0,D.kp,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqt=new A.y("No books on the shelf yet.",null,D.f7b,null,null,null,null,null,null,null,null,null)
D.ecg=new A.D(B.o3,D.fqt,null)
D.b5E=new A.cp(B.A,null,null,D.ecg,null)
D.b6x=new A.cp(B.A,null,null,Z.W7,null)
D.b8F=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b97=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.adr=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bbU=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bcb=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aeR=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bg7=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bgw=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.EX=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bi8=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bkC=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.agr=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fkU=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bqn=new A.eG(null,D.fkU,B.f_,null,x.d)
D.ftE=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bqp=new A.eG(null,D.ftE,B.f_,null,x.d)
D.bqX=new A.ba(38e5)
D.brH=new A.ij(0,10,0,10)
D.brQ=new A.Q(0,1,0,0)
D.bs0=new A.ij(0,4,0,4)
D.bsi=new A.Q(10,10,14,10)
D.bsu=new A.ij(10,4,10,4)
D.bsC=new A.ij(10,8,10,8)
D.bsD=new A.Q(10,8,8,8)
D.bt2=new A.Q(12,6,12,2)
D.btk=new A.Q(14,10,6,6)
D.btl=new A.Q(14,12,14,0)
D.btp=new A.Q(14,12,14,8)
D.bts=new A.Q(14,12,8,14)
D.btw=new A.ij(14,14,14,14)
D.bua=new A.Q(16,2,16,10)
D.buk=new A.Q(16,6,16,30)
D.bum=new A.Q(16,6,16,8)
D.aiL=new A.Q(18,16,18,8)
D.buX=new A.Q(18,20,18,22)
D.aiP=new A.Q(18,24,18,24)
D.bv2=new A.Q(18,30,18,30)
D.bvl=new A.Q(20,10,12,20)
D.bvy=new A.Q(20,18,16,18)
D.bvA=new A.Q(20,18,20,6)
D.bwp=new A.Q(24,32,24,28)
D.bwq=new A.Q(24,36,24,32)
D.bwu=new A.Q(26,26,24,14)
D.bwJ=new A.Q(2,4,2,8)
D.bwN=new A.Q(30,0,30,0)
D.bwY=new A.Q(38,22,22,22)
D.aj7=new A.Q(40,24,24,24)
D.bx_=new A.ij(40,40,40,40)
D.bx1=new A.Q(46,30,30,30)
D.aja=new A.Q(4,0,0,8)
D.bxs=new A.Q(56,40,40,40)
D.bxw=new A.Q(1.25,1.25,1.25,1.25)
D.bxx=new A.Q(60,0,60,0)
D.bxA=new A.Q(6,14,6,16)
D.bxM=new A.ij(7,3,7,3)
D.byi=new A.Q(5,1.5,5,1.5)
D.byt=new A.Q(6,2.5,6,2.5)
D.fFJ=new A.y("Signature",null,B.nE,null,null,null,null,null,null,null,null,null)
D.byO=new A.bB(1,B.bh,D.fFJ,null)
D.fCS=new A.y("Tell the AI what to fix",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bzB=new A.bB(1,B.bh,D.fCS,null)
D.fey=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEQ=new A.y("Worksheets",null,D.fey,null,null,null,null,null,null,null,null,null)
D.feH=new A.H(!0,E.ad0,null,null,null,null,13,B.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDI=new A.y("Track your project spending",null,D.feH,null,null,null,null,null,null,null,null,null)
D.cVi=w([D.fEQ,B.au,D.fDI],x.p)
D.bny=new A.fm(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cVi,null)
D.bzH=new A.bB(1,B.bh,D.bny,null)
D.f9N=new A.H(!0,E.jY,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk6=new A.y("FAMILY LIBRARY",null,D.f9N,null,null,null,null,null,null,null,null,null)
D.bzZ=new A.bB(1,B.bh,D.fk6,null)
D.N0=new C.HA("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.a_f=new C.HB(0,"male")
D.ak2=new C.HB(1,"female")
D.y2=new C.HB(2,"unknown")
D.tV=new C.akw(0,"owner")
D.N1=new C.akw(1,"editor")
D.kw=new C.akw(2,"viewer")
D.akS=new A.a0(61199,"MaterialIcons",!1)
D.bEB=new A.a0(61504,"MaterialIcons",!1)
D.bEC=new A.a0(61505,"MaterialIcons",!1)
D.bEE=new A.a0(61587,"MaterialIcons",!1)
D.bEL=new A.a0(61890,"MaterialIcons",!1)
D.bFF=new A.a0(63034,"MaterialIcons",!0)
D.bGu=new A.a0(63429,"MaterialIcons",!1)
D.an5=new A.a0(984520,"MaterialIcons",!1)
D.bFa=new A.a0(62776,"MaterialIcons",!1)
D.bIR=new A.ae(D.bFa,26,B.aZ,null,null,null)
D.bDz=new A.a0(57648,"MaterialIcons",!1)
D.bJ8=new A.ae(D.bDz,14,B.c,null,null,null)
D.bJq=new A.ae(B.G5,17,null,null,null,null)
D.bJW=new A.ae(E.a08,null,null,null,null,null)
D.bJZ=new A.ae(B.jr,18,E.jY,null,null,null)
D.a_V=new A.a0(62044,"MaterialIcons",!1)
D.bK4=new A.ae(D.a_V,null,B.aV,null,null,null)
D.bKU=new A.ae(B.dX,16,null,null,null,null)
D.bL0=new A.ae(D.a_V,32,B.aV,null,null,null)
D.bLk=new A.ae(E.akT,18,B.cT,null,null,null)
D.bMn=new A.ae(B.Gf,22,B.av,null,null,null)
D.bMz=new A.ae(B.dX,22,B.aZ,null,null,null)
D.bMK=new A.ae(Q.a0_,22,B.c,null,null,null)
D.bMQ=new A.ae(B.u4,52,B.c,null,null,null)
D.bN_=new A.ae(B.Gf,30,B.av,null,null,null)
D.anI=new A.ae(B.ud,22,B.c,null,null,null)
D.bNr=new A.ae(B.dX,17,null,null,null,null)
D.bNL=new A.ae(B.vX,26,B.cT,null,null,null)
D.bOu=new A.ae(B.a0j,16,null,null,null,null)
D.bPf=new A.ae(B.u4,24,B.c,null,null,null)
D.bPk=new A.ae(B.Nt,20,B.rA,null,null,null)
D.bPp=new A.ae(B.G3,null,B.bT,null,null,null)
D.bPw=new A.ae(B.jr,18,B.c,null,null,null)
D.bQ8=new A.ae(B.cB,22,B.ad,null,null,null)
D.bQY=new A.ae(B.e7,16,B.ad,null,null,null)
D.bR9=new A.ae(D.a_V,20,B.aV,null,null,null)
D.ao7=new A.ae(B.ho,20,null,null,null,null)
D.bRE=new A.ae(B.cB,18,D.kp,null,null,null)
D.bRW=new A.ae(B.yn,28,B.c,null,null,null)
D.bS4=new A.ae(B.Nj,null,B.h2,null,null,null)
D.bSo=new A.ae(B.yn,24,B.c,null,null,null)
D.bSP=new A.ae(B.u4,null,B.aV,null,null,null)
D.bSQ=new A.ae(B.jK,20,B.cT,null,null,null)
D.bT9=new A.ae(B.G5,16,null,null,null,null)
D.bUH=new A.e4(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eB,!0,null,null,null,null)
D.d9K=w([B.bv,B.aV,B.fd,B.aZ],x.O)
D.bWm=new A.a8(B.az,B.aC,B.x,D.d9K,null,null)
D.bh2=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bmy=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cS8=w([D.bh2,D.bmy],x.O)
D.bWx=new A.a8(B.b0,B.b4,B.x,D.cS8,null,null)
D.d49=w([B.f2,B.fy,B.fd],x.O)
D.bWC=new A.a8(B.az,B.aC,B.x,D.d49,null,null)
D.afs=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b98=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cU6=w([D.afs,D.b98],x.O)
D.bXa=new A.a8(B.b0,B.b4,B.x,D.cU6,null,null)
D.bco=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.axU=w([D.bco,D.afs],x.O)
D.bXu=new A.a8(B.az,B.aC,B.x,D.axU,null,null)
D.aep=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.beB=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d3i=w([D.aep,D.beB],x.O)
D.bY7=new A.a8(B.a3,B.a8,B.x,D.d3i,null,null)
D.dgj=w([B.bz,B.n4],x.O)
D.bY9=new A.a8(B.b0,B.b4,B.x,D.dgj,null,null)
D.bgY=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dh9=w([D.bgY,D.kp,D.kp,P.Xr],x.O)
D.djv=w([0,0.07,0.9,1],x.F)
D.bYE=new A.a8(B.a3,B.a8,B.x,D.dh9,D.djv,null)
D.bYP=new A.a8(B.az,B.aC,B.x,B.R3,null,null)
D.dfU=w([B.aZ,B.aV,B.bT],x.O)
D.bZP=new A.a8(B.az,B.aC,B.x,D.dfU,null,null)
D.ckk=w([B.bv,B.aZ,B.f2],x.O)
D.ckr=w([B.bu,B.aE,B.jf],x.O)
D.ckt=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bfD=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cqC=w([D.bfD,E.af9],x.O)
D.e84=new A.v(1,2)
D.eTs=new A.cR(B.aW,D.e84,3)
D.auV=w([D.eTs],x.A)
D.cxV=w([B.h4,B.cb,B.fc],x.O)
D.cAC=w([B.bK,B.bq,B.bm],x.O)
D.bAr=new C.uh("classic","Classic leather","Gold-edged brown leather",D.axU,E.jY,E.jY,"\u2766",B.L,!0,!1,!1,!1)
D.b8s=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bls=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cWU=w([D.b8s,D.bls],x.O)
D.afd=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bAm=new C.uh("ornate","Ornate gold","Double gold border and flourishes",D.cWU,D.afd,D.afd,"\u2726",B.L,!0,!0,!0,!1)
D.bc2=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bhL=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cP3=w([D.bc2,D.bhL],x.O)
D.bAl=new C.uh("parchment","Parchment","Old paper with dark ink",D.cP3,D.EX,G.iD,"\u2767",B.L,!0,!1,!1,!0)
D.acI=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bjS=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.ded=w([D.acI,D.bjS],x.O)
D.bfd=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bjd=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bAo=new C.uh("minimal","Clean paper","Plain and elegant, like a printed book",D.ded,D.bfd,D.bjd,"",B.L,!0,!0,!1,!0)
D.bAq=new C.uh("midnight","Midnight","Deep blue with silver stars",L.ayb,B.cr,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bAk=new C.uh("emerald","Emerald library","Green cloth, title on the left",A_.avi,E.jY,B.fJ,"\u25c6",B.bi,!0,!1,!1,!1)
D.bki=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.dco=w([B.es,D.bki],x.O)
D.bgf=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bhl=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bAp=new C.uh("rose","Rose vintage","Burgundy with rose-gold lettering",D.dco,D.bgf,D.bhl,"\u2740",B.L,!0,!1,!0,!1)
D.dgO=w([B.ct,O.mm],x.O)
D.bAn=new C.uh("modern","Modern","Dark, bold, left-aligned",D.dgO,B.aN,B.c,"",B.bi,!1,!0,!1,!1)
D.a2b=w([D.bAr,D.bAm,D.bAl,D.bAo,D.bAq,D.bAk,D.bAp,D.bAn],A.ax("O<uh>"))
D.cOA=w([B.bT,B.bj],x.O)
D.bgO=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cPf=w([D.acI,D.bgO],x.O)
D.bbZ=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cQT=w([D.bbZ,B.d9],x.O)
D.cSo=w([B.b8,B.iU,B.oH],x.O)
D.cSL=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b94=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bdU=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.djr=w([D.aep,D.b94,D.bdU],x.O)
D.bAs=new C.ui("leather","Leather",D.djr,"vintage")
D.cZU=w([B.dc,B.Li,A4.WE],x.O)
D.bAz=new C.ui("midnight","Midnight",D.cZU,"starry")
D.cSp=w([B.ew,B.e_,B.li],x.O)
D.bAy=new C.ui("forest","Forest",D.cSp,"story")
D.dlq=w([B.eK,B.es,B.ks],x.O)
D.bAv=new C.ui("burgundy","Burgundy",D.dlq,"royal")
D.cAb=w([B.aE,B.pF,B.nN],x.O)
D.bAw=new C.ui("royal","Royal",D.cAb,"royal")
D.cUK=w([B.bq,B.ct,O.mm],x.O)
D.bAt=new C.ui("charcoal","Charcoal",D.cUK,"geo")
D.djz=w([B.cc,B.dR,B.xn],x.O)
D.bAx=new C.ui("sunset","Sunset",D.djz,"sunset")
D.dkg=w([B.iU,B.EY,B.WH],x.O)
D.bAu=new C.ui("ocean","Ocean",D.dkg,"band")
D.yU=w([D.bAs,D.bAz,D.bAy,D.bAv,D.bAw,D.bAt,D.bAx,D.bAu],A.ax("O<ui>"))
D.cV9=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cVK=w([B.ak,B.aJ,B.M],x.O)
D.cWZ=w([B.es,B.e_,B.dc,B.fA,B.xq,B.cT,B.k0,B.ec,B.d5],x.O)
D.cX_=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eTt=new A.cR(B.dr,B.dE,8)
D.cX8=w([D.eTt],x.A)
D.cYd=w([B.bY,B.dR,B.kq],x.O)
D.cYH=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cZQ=w([B.bY,B.hi],x.O)
D.d0Z=w([B.aM,B.vi,B.xe],x.O)
D.d1S=w([B.bM,B.c9,B.ds,B.aM],x.O)
D.d2m=w([B.iV,B.cc,B.tr],x.O)
D.d2R=w([B.f2,B.cT],x.O)
D.d3o=w([B.cs,B.fl,B.hl],x.O)
D.d3z=w([B.aN,B.bj,B.dc],x.O)
D.d46=w([B.et,B.cS,B.e_],x.O)
D.d4p=w([B.dL,B.dc,B.Li],x.O)
D.d5I=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a36=w(["leather","linen","plain","stars","rays"],x.s)
D.bIx=new A.a0(985219,"MaterialIcons",!1)
D.bI5=new A.a0(983781,"MaterialIcons",!1)
D.axA=w([B.alh,B.i5,B.lU,B.i6,D.bIx,B.Gp,B.q2,D.bI5,L.amT,B.yp,B.q4,B.my],A.ax("O<a0>"))
D.a3b=w(["double","single","corners","none"],x.s)
D.d8r=w([B.dy,B.bn,B.ec],x.O)
D.d8E=w([],x.t)
D.Cr=w([],x.u)
D.daZ=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ddj=w([B.aF,B.fl,B.fA],x.O)
D.deQ=w([B.bH,B.n_,B.XC],x.O)
D.df4=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dyF=new C.lC("construction","Construction","Jobsite & builds",B.yf)
D.dyM=new C.lC("house","Home Build","Houses & rooms",B.vS)
D.dyC=new C.lC("grocery","Grocery","Store & pantry",B.a0P)
D.dyB=new C.lC("calculator","Calculations","Math & estimates",B.NE)
D.dyK=new C.lC("lumber","Materials","Lumber & supplies",B.NU)
D.dyy=new C.lC("kitchen","Kitchen","Remodel & meals",Aa.am5)
D.bI2=new A.a0(983756,"MaterialIcons",!1)
D.dyD=new C.lC("landscape","Landscaping","Yard & garden",D.bI2)
D.dyx=new C.lC("plumbing","Plumbing","Pipes & water",B.qc)
D.dyN=new C.lC("electrical","Electrical","Wiring & power",B.h9)
D.dyv=new C.lC("store","Retail Shop","Daily business",B.l1)
D.dyw=new C.lC("paint_remodel","Paint & Remodel","Colors & walls",Ab.a0p)
D.bHr=new A.a0(983311,"MaterialIcons",!1)
D.dyJ=new C.lC("roofing","Roofing","Roofs & exteriors",D.bHr)
D.bIf=new A.a0(983986,"MaterialIcons",!1)
D.dyu=new C.lC("warehouse","Warehouse","Storage & stock",D.bIf)
D.dyH=new C.lC("vehicles","Vehicles","Fleet & transport",B.Gq)
D.bFc=new A.a0(62785,"MaterialIcons",!1)
D.dyA=new C.lC("farm","Farm","Crops & livestock",D.bFc)
D.dyz=new C.lC("restaurant","Restaurant","Food & catering",B.ub)
D.dyG=new C.lC("tools","Tools","Workshop gear",B.Gm)
D.dyL=new C.lC("wallet","Cash & Wallet","Quick spending",B.jK)
D.bGp=new A.a0(63395,"MaterialIcons",!1)
D.dyI=new C.lC("concrete","Concrete","Foundation work",D.bGp)
D.dyE=new C.lC("blueprint","Blueprint","Plans & design",Ag.aln)
D.a3E=w([D.dyF,D.dyM,D.dyC,D.dyB,D.dyK,D.dyy,D.dyD,D.dyx,D.dyN,D.dyv,D.dyw,D.dyJ,D.dyu,D.dyH,D.dyA,D.dyz,D.dyG,D.dyL,D.dyI,D.dyE],A.ax("O<lC>"))
D.dfz=w([B.bs,B.bn],x.O)
D.dgk=w([B.ic,B.nS,B.dH],x.O)
D.a3N=w(["top","middle","bottom"],x.s)
D.diK=w([B.cl,B.bj,B.dc],x.O)
D.djl=w([B.b2,B.cS,B.e_],x.O)
D.dll=w([B.bK,B.ak],x.O)
D.dlm=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e5h={top:0,middle:1,bottom:2}
D.doB=new A.bk(D.e5h,["Top","Middle","Bottom"],x.n)
D.e4W={double:0,single:1,corners:2,none:3}
D.doG=new A.bk(D.e4W,["Double line","One line","Corners","None"],x.n)
D.e68={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dqd=new A.bk(D.e68,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dqp=new A.bk(B.hX,[],A.ax("bk<G,+(m,m)>"))
D.e5a={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CF=new A.bk(D.e5a,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<m,G>"))
D.dte=new F.MU(32,null)
D.dtf=new F.MU(40,null)
D.dtg=new F.MU(46,null)
D.aGS=new C.asd(null)
D.e92=new A.v(8,14)
D.fr5=new A.y("Write a new book",null,B.hH,null,B.L,null,null,null,null,null,null,null)
D.ebJ=new A.D(B.kX,D.fr5,null)
D.ani=new A.ae(B.hB,18,B.c,null,null,null)
D.fks=new A.y("Add",null,B.m8,null,null,null,null,null,null,null,null,null)
D.d26=w([D.ani,B.qu,D.fks],x.p)
D.eR6=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d26,null)
D.ec3=new A.D(B.nh,D.eR6,null)
D.ec4=new A.D(E.ahC,Z.W7,null)
D.fet=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnt=new A.y("New Project",null,D.fet,null,null,null,null,null,null,null,null,null)
D.d64=w([D.ani,B.ab,D.fnt],x.p)
D.eR9=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d64,null)
D.ecf=new A.D(B.ik,D.eR9,null)
D.fpT=new A.y("Choose your header",null,U.rV,null,null,null,null,null,null,null,null,null)
D.ecA=new A.D(B.hQ,D.fpT,null)
D.b7p=new A.fk(2.2,null,null,null,null,B.cT,null,null,null,null)
D.eWj=new A.a7(22,22,D.b7p,null)
D.b5A=new A.cp(B.A,null,null,D.eWj,null)
D.ecF=new A.D(B.YL,D.b5A,null)
D.btF=new A.Q(14,2,14,6)
D.fDr=new A.y("The top of your book. Tap a design to see it.",null,T.zP,null,null,null,null,null,null,null,null,null)
D.ecG=new A.D(D.btF,D.fDr,null)
D.eed=new A.iS(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eeg=new A.iS(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aI6=new A.iS(1,0.9607843137254902,0.48627450980392156,0)
D.Ir=new A.iS(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zs=new A.iS(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eem=new A.iS(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.h5a=new C.bgZ(null)
D.boH=new A.mm(D.h5a,null,B.ax,null,null)
D.aLK=new A.cL(0,0,0,0,null,null,D.boH,null)
D.eCS=new A.z(-42,42)
D.eLN=new A.cA([0,0,1,1])
D.aN4=new A.a9(0,0,520,160)
D.fD_=new A.y("Let the AI write it from your tree",null,B.kg,null,B.L,null,null,null,null,null,null,null)
D.bB5=new A.dq(1,B.co,D.fD_,null)
D.cZP=w([E.a1g,B.ab,D.bB5],x.p)
D.eQM=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.cZP,null)
D.fk7=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.ddE=w([D.ao7,B.ab,D.fk7],x.p)
D.eQW=new A.cl(B.aP,B.b9,B.j,B.m,null,B.p,null,0,D.ddE,null)
D.bME=new A.ae(B.hS,14,B.aZ,null,null,null)
D.f8q=new A.H(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnT=new A.y("Cashier",null,D.f8q,null,null,null,null,null,null,null,null,null)
D.d6B=w([D.bME,B.bp,D.fnT],x.p)
D.eQZ=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d6B,null)
D.fk8=new A.y("Transfer & settings",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bzr=new A.bB(1,B.bh,D.fk8,null)
D.cRS=w([D.anI,B.at,D.bzr],x.p)
D.eR_=new A.cl(B.aP,B.e,B.j,B.m,null,B.p,null,0,D.cRS,null)
D.eV_=new A.ar(16,40)
D.eV4=new A.ar(22,64)
D.eVb=new A.ar(280,88)
D.eW_=new A.a7(30,null,null,null)
D.eXh=new A.hQ(2,12,12,1.05,null)
D.fnz=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eY_=new A.b1(D.fnz,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fnO=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aPc=new A.b1(D.fnO,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fvW=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eYt=new A.b1(D.fvW,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fGi=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eYy=new A.b1(D.fGi,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fpR=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eYF=new A.b1(D.fpR,null,null,null,null,null,null,null,null,null,null,null,null,B.fM,!1,null,null,null,B.r,null)
D.fDE=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aPg=new A.b1(D.fDE,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fkJ=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ5=new A.b1(D.fkJ,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fGZ=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eZQ=new A.b1(D.fGZ,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fBV=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_e=new A.b1(D.fBV,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fGm=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new A.b1(D.fGm,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fxv=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_j=new A.b1(D.fxv,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.frG=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f_k=new A.b1(D.frG,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.frH=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f0k=new A.b1(D.frH,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fnB=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f0C=new A.b1(D.fnB,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fpv=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f0W=new A.b1(D.fpv,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fx0=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f1b=new A.b1(D.fx0,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsu=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f1c=new A.b1(D.fsu,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.f4l=new A.H(!0,D.kp,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4L=new A.H(!0,D.kp,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5o=new A.rI(!0,B.rJ,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5G=new A.H(!0,D.kp,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6e=new A.H(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a89=new A.rI(!0,B.Sq,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7e=new A.H(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7D=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9e=new A.H(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9i=new A.H(!0,G.iD,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fay=new A.H(!0,B.M,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new A.H(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbZ=new A.H(!0,B.bT,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc2=new A.H(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcp=new A.H(!0,D.EX,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcy=new A.H(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdy=new A.H(!0,B.cT,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe1=new A.H(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fer=new A.H(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffT=new A.H(!0,B.ak,null,null,null,null,11.5,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg0=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRt=new A.H(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8C=new A.H(!0,B.ak,null,null,null,null,12,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhG=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new A.H(!0,G.iD,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fia=new A.H(!0,G.iD,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiY=new A.y("Themes",null,B.ph,null,null,null,null,null,null,null,null,null)
D.fjz=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f8Y=new A.H(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new A.y("Debt receipt",null,D.f8Y,null,B.L,null,null,null,null,null,null,null)
D.aRo=new A.H(!0,B.ak,null,null,null,null,11,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkf=new A.y("Person who owes",null,D.aRo,null,null,null,null,null,null,null,null,null)
D.flb=new A.y("Notes",null,B.a8i,null,null,null,null,null,null,null,null,null)
D.flB=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f7V=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flF=new A.y("Share",null,D.f7V,null,null,null,null,null,null,null,null,null)
D.fmA=new A.y("Move your family trees",null,D.aRt,null,null,null,null,null,null,null,null,null)
D.fnb=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fp5=new A.y("Remove this book?",null,B.hu,null,null,null,null,null,null,null,null,null)
D.aRV=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fqe=new A.y("What should the AI do?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.frC=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fsJ=new A.y("Ribbon bookmark",null,B.iQ,null,null,null,null,null,null,null,null,null)
D.ffN=new A.H(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftb=new A.y("NGMY.ORG",null,D.ffN,null,B.L,null,null,null,null,null,null,null)
D.fur=new A.y("Scan family tree QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fch=new A.H(!0,B.c,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvb=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fch,null,B.L,null,null,null,null,null,null,null)
D.fwo=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fwv=new A.y("Thumbnail",null,B.ph,null,null,null,null,null,null,null,null,null)
D.fx6=new A.y("Save the cover",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fxw=new A.y("Your photos",null,B.ph,null,null,null,null,null,null,null,null,null)
D.fxL=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fyi=new A.y("Design your cover",null,U.rV,null,null,null,null,null,null,null,null,null)
D.fyo=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fyr=new A.y("PICTURE",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fyN=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fyP=new A.y("You can undo it right after.",null,T.Jm,null,null,null,null,null,null,null,null,null)
D.fzm=new A.y("Print",null,B.uS,null,null,null,null,null,null,null,null,null)
D.fzK=new A.y("Amount owed",null,D.aRo,null,null,null,null,null,null,null,null,null)
D.fzZ=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fAz=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fAC=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fB2=new A.y("Debtor signature",null,B.a8i,null,null,null,null,null,null,null,null,null)
D.fBb=new A.y("Change icon",null,E.aQF,null,null,null,null,null,null,null,null,null)
D.fCn=new A.y("Family tree QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fCQ=new A.y("Download",null,B.uS,null,null,null,null,null,null,null,null,null)
D.fCU=new A.y("Change",null,B.ph,null,null,null,null,null,null,null,null,null)
D.fDK=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fDN=new A.y("WHAT SHOULD IT CHANGE?",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fEm=new A.y("COLOUR",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fEA=new A.y("Do it",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fED=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fFD=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f3k=new A.H(!0,E.jY,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFS=new A.y("Write the first page myself",null,D.f3k,null,null,null,null,null,null,null,null,null)
D.fGp=new A.y("Use this header",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fGv=new A.y("Create Project",null,E.aR7,null,null,null,null,null,null,null,null,null)
D.h1n=new C.abl(1,"header")
D.a9B=new C.abl(2,"projects")
D.h1o=new C.abl(3,"cashier")
D.a9C=new C.abl(4,"familyTree")
D.hdn=new C.cx9(0,"start")
D.hdo=new C.cxa(0,"start")
D.h1M=new C.Yn(null)
D.h2L=new C.YP(null)
D.dqm=new A.bk(B.hX,[],A.ax("bk<m,FL>"))
D.d91=w([],x.E)
D.d92=w([],x.M)
D.h3h=new C.bef(D.dqm,D.d91,D.d92,0,0,null,null)
D.h5P=new C.a_c(null)
D.aaj=new C.aJn(0,"projects")
D.aWB=new C.aJn(1,"cashier")
D.hb3=new C.aJn(2,"familyTree")})()};
(a=>{a["wPxw9cvnpYUYaiA7FQO70eNH91A="]=a.current})($__dart_deferred_initializers__);