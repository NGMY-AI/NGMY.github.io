((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,A1,G,F,E,N,A2,A3,R,A4,A5,M,A6,H,S,T,U,V,A7,A8,W,A9,Aa,Ab,X,Ac,Ad,L,Ae,Y,Z,K,O,C={
bze(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bze=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uK(null,""),$async$bze)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.R(y.j)
t=A.mL(b1)
s=A.bY(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dp(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.al(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qi(t,a1,B.hc,E.DG),$async$bze)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.OM(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.R(l!=null&&A.Jy(l)?y.l:y.i)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a_(r.a(j.h(a2,a7)),q,p):B.cu
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.A(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a0o(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bze,v)},
aeA(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aeA=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uK(null,""),$async$aeA)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.R(y.j)
t=A.mL(b6)
s=x.S
r=A.df(c1,0,A.dK(4,"count",s),A.U(c1).c)
q=F.a0b(new A.J(r,new C.fiE(),r.$ti.k("J<ai.E,n>")).aF(0," "))
r=q==="sw"
if(!r){p=A.ae("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fiD(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.al(b7,null)+"\nAllowed values: style one of "+B.d.aF(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aeA)
case 6:l=c5
k=F.OM(l==null?"":l)
if(k==null)throw A.R("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alM(s,D.d5W,r.b(k.h(0,"cover"))?A.a_(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.R("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Q.al(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aeA)
case 10:l=c5
k=l==null?null:F.OM(l)
if(k==null)throw A.R(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d5(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.kO(a5,a2.k("kO<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
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
h.m(0,i,new A.A(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bg<2>")
p=A.cz(new A.bg(h,s),new C.fiF(),s.k("G.E"),p)
p=F.a0b(A.oL(p,3,A.a2(p).k("G.E")).aF(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.z(new A.cu(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a0o(s,b9),$async$aeA)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alM(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeA,v)},
h5I(d,e,f){return A.ch(null,B.x.j(0.65),!1,null,new C.frD(e,f),d,null,!0,!0,x.g2)},
alM:function alM(d,e,f){this.a=d
this.b=e
this.c=f},
fiE:function fiE(){},
fiD:function fiD(d){this.a=d},
fiF:function fiF(){},
frD:function frD(d,e){this.a=d
this.b=e},
bx8(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bx8=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.ba(b1,new C.f8V())){u=null
w=1
break}t=B.d.ea(b1,new C.f8W())
s=$.W()
r=new A.rv()
q=A.FN(r,D.aGT)
p=A.L()
p.r=B.c.gq(0)
q.aX(D.aGT,p)
o=A.L()
o.r=B.M.gq(0)
o.c=3.6
o.b=B.ac
o.d=B.bL
o.e=B.ft
n=new C.f90(t)
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
s=$.W()
p=A.a([],x.v)
a3=new A.aO(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b4(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aM(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b4(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aM(a3,o)}w=4
return A.b(r.pO().yp(520,160),$async$bx8)
case 4:w=3
return A.b(b3.hf(B.fO),$async$bx8)
case 3:b0=b3
u=b0==null?null:J.f5(B.dD.gaO(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bx8,v)},
fgk(d){return C.hJx(d)},
hJx(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fgk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bbc()
n=d.x!=null&&d.y6(null).length===0
if(d.x!=null)t=n?D.y8:D.GE
else t=d.gRW()?D.GE:D.aBZ
w=3
return A.b(C.bx8(d.ax),$async$fgk)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akv(s)
r=A.a2i(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBZ}else{p.c=C.w1(q,!0)
p.b=n?D.y8:D.GE}r.a0P(A.fBb(new C.fgm(p,d,new C.fgn(),t,n,o),null,D.bks,B.v7))
u=r.jD(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fgk,v)},
fmY(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fmY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fgk(d),$async$fmY)
case 3:t=f
s=B.a.i(d.b)
r=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.am(q,0,40)
u=A5.Fk(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fmY,v)},
f8V:function f8V(){},
f8W:function f8W(){},
f90:function f90(d){this.a=d},
fgn:function fgn(){},
fgm:function fgm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgl:function fgl(){},
fs4(d,e){var w=0,v=A.j(x.H)
var $async$fs4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ch(null,B.x.j(0.55),!0,null,new C.fs8(new A.co(null,x.J),e),d,null,!0,!0,x.H),$async$fs4)
case 2:return A.h(null,v)}})
return A.i($async$fs4,v)},
bzH(d,e,f,g){return C.hQQ(d,e,f,g)},
hQQ(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bzH=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gaj(e.split(",")):e
r=B.cw.aG(t)}catch(q){r=null}if(r==null||r.length===0){d.H(x.q).f.P(D.ezn)
w=1
break}w=3
return A.b(A.ch(null,null,!0,null,new C.fs0(g,r,f),d,null,!0,!0,x.H),$async$bzH)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bzH,v)},
fs9(d,e){var w=0,v=A.j(x.H)
var $async$fs9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ch(null,null,!0,null,new C.fsc(new A.co(null,x.J),e),d,null,!0,!0,x.H),$async$fs9)
case 2:return A.h(null,v)}})
return A.i($async$fs9,v)},
aVm:function aVm(d,e){this.c=d
this.a=e},
bY5:function bY5(){},
b7l:function b7l(d,e){this.b=d
this.a=e},
fs8:function fs8(d,e){this.a=d
this.b=e},
fs5:function fs5(d){this.a=d},
fs6:function fs6(d,e,f){this.a=d
this.b=e
this.c=f},
fs7:function fs7(d,e){this.a=d
this.b=e},
fs0:function fs0(d,e,f){this.a=d
this.b=e
this.c=f},
frZ:function frZ(d){this.a=d},
fs_:function fs_(d,e,f){this.a=d
this.b=e
this.c=f},
fsc:function fsc(d,e){this.a=d
this.b=e},
fsa:function fsa(d){this.a=d},
fsb:function fsb(d,e,f){this.a=d
this.b=e
this.c=f},
fbG(d,e){var w=0,v=A.j(x.y),u,t
var $async$fbG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_X(d),$async$fbG)
case 3:t=g
J.n3(t,new C.fbH(e))
u=A.afd(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fbG,v)},
fbH:function fbH(d){this.a=d},
alT:function alT(d,e,f){this.c=d
this.d=e
this.a=f},
azW:function azW(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dyN:function dyN(d,e){this.a=d
this.b=e},
dyy:function dyy(d,e){this.a=d
this.b=e},
dyB:function dyB(d,e,f){this.a=d
this.b=e
this.c=f},
dyA:function dyA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dyz:function dyz(d,e){this.a=d
this.b=e},
dyC:function dyC(d,e){this.a=d
this.b=e},
dyw:function dyw(){},
dyx:function dyx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dyv:function dyv(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dyg:function dyg(d){this.a=d},
dyh:function dyh(d,e,f){this.a=d
this.b=e
this.c=f},
dyi:function dyi(d,e){this.a=d
this.b=e},
dyf:function dyf(d){this.a=d},
dyn:function dyn(d,e){this.a=d
this.b=e},
dye:function dye(d){this.a=d},
dyo:function dyo(d,e,f){this.a=d
this.b=e
this.c=f},
dyp:function dyp(d,e,f){this.a=d
this.b=e
this.c=f},
dyd:function dyd(d,e){this.a=d
this.b=e},
dyq:function dyq(d,e,f){this.a=d
this.b=e
this.c=f},
dyc:function dyc(d,e){this.a=d
this.b=e},
dyr:function dyr(d,e){this.a=d
this.b=e},
dyb:function dyb(d){this.a=d},
dys:function dys(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dy9:function dy9(){},
dy3:function dy3(d){this.a=d},
dy4:function dy4(d){this.a=d},
dya:function dya(d,e){this.a=d
this.b=e},
dyt:function dyt(d,e){this.a=d
this.b=e},
dy8:function dy8(d){this.a=d},
dyu:function dyu(d){this.a=d},
dy7:function dy7(){},
dyj:function dyj(d,e){this.a=d
this.b=e},
dy6:function dy6(d){this.a=d},
dyk:function dyk(d,e,f){this.a=d
this.b=e
this.c=f},
dy5:function dy5(d,e){this.a=d
this.b=e},
dy2:function dy2(d,e){this.a=d
this.b=e},
dyl:function dyl(d){this.a=d},
dym:function dym(d,e,f){this.a=d
this.b=e
this.c=f},
dyQ:function dyQ(){},
dyR:function dyR(d,e){this.a=d
this.b=e},
dyO:function dyO(d){this.a=d},
dyP:function dyP(d){this.a=d},
dyK:function dyK(d,e){this.a=d
this.b=e},
dyL:function dyL(d){this.a=d},
dyD:function dyD(d,e,f){this.a=d
this.b=e
this.c=f},
dyE:function dyE(d,e,f){this.a=d
this.b=e
this.c=f},
dyF:function dyF(d,e,f){this.a=d
this.b=e
this.c=f},
dyG:function dyG(d,e,f){this.a=d
this.b=e
this.c=f},
dyH:function dyH(d,e,f){this.a=d
this.b=e
this.c=f},
dyI:function dyI(d,e,f){this.a=d
this.b=e
this.c=f},
dyJ:function dyJ(d,e,f){this.a=d
this.b=e
this.c=f},
dyS:function dyS(){},
dyT:function dyT(){},
dyU:function dyU(){},
dyV:function dyV(d){this.a=d},
dyM:function dyM(d,e){this.a=d
this.b=e},
h1U(d){return B.d.dI(D.Zy,new C.fc4(d),new C.fc5())},
tH:function tH(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fc4:function fc4(d){this.a=d},
fc5:function fc5(){},
aid:function aid(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRd:function aRd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QX:function QX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baU:function baU(){this.d=$
this.c=this.a=null},
d_f:function d_f(d,e){this.a=d
this.b=e},
d_d:function d_d(d,e){this.a=d
this.b=e},
d_e:function d_e(){},
d_g:function d_g(d,e){this.a=d
this.b=e},
fO0(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.mT(t,w,v,u==null?new A.Q(Date.now(),0,!1):u)},
Jj(d,e){return C.hIa(d,e)},
hIa(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Jj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Jj)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Q.aD(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d5(p,x.f)
o=A.cz(o,new C.fdW(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a4<G.E>")
o=A.z(new A.a4(o,new C.fdX(),n),n.k("G.E"))
B.d.b_(o,new C.fdY())
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
return A.i($async$Jj,v)},
zV(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ax(),$async$zV)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b5(f,new C.fqM(),x.a)
r=A.z(r,r.$ti.k("ai.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.al(r,null)),$async$zV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zV,v)},
aNt(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aNt=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jj(d,e),$async$aNt)
case 2:u=h
t=J.cA(u)
s=t.bi(u,new C.fys(f))
if(s===-1)t.ck(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zV(d,e,u),$async$aNt)
case 3:return A.h(null,v)}})
return A.i($async$aNt,v)},
bxz(d,e,f){var w=0,v=A.j(x.H),u
var $async$bxz=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jj(d,e),$async$bxz)
case 2:u=h
J.n3(u,new C.fby(f))
w=3
return A.b(C.zV(d,e,u),$async$bxz)
case 3:return A.h(null,v)}})
return A.i($async$bxz,v)},
bxN(d,e){return C.hI9(d,e)},
hI9(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bxN=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$bxN)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Ky
w=1
break}p=B.Q.aD(0,q,null)
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
if(D.B1.an(0,o.h(0,"foil")))j=A.cK(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a_Y,o.h(0,"position"))?A.cK(o.h(0,"position")):"middle"
g=B.d.t(D.a_s,o.h(0,"frame"))?A.cK(o.h(0,"frame")):"double"
f=B.d.t(D.a_n,o.h(0,"texture"))?A.cK(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cDP,o.h(0,"header"))?A.cK(o.h(0,"header")):"classic"
o=new C.Gd(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Ky
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Ky
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bxN,v)},
PP(d,e,f){return C.hQm(d,e,f)},
hQm(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$PP=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ax(),$async$PP)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.al(f.ac(),null)),$async$PP)
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
return A.i($async$PP,v)},
Pj(d,e){return C.hIb(d,e)},
hIb(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Pj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Pj)
case 7:r=g
q=r.rn("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.z(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Jj(d,e),$async$Pj)
case 8:if(!j.ct(g)){n=B.a.i(d.toLowerCase())
m=J.lc(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Pj)
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
return A.i($async$Pj,v)},
adW(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pj(d,e),$async$adW)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.K(s,t)
w=5
return A.b(A.ax(),$async$adW)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adW)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adW,v)},
a0B(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0B=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Pj(d,e),$async$a0B)
case 2:s=h
J.hD(s,f)
w=3
return A.b(A.ax(),$async$a0B)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0B)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0B)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0B)
case 6:return A.h(null,v)}})
return A.i($async$a0B,v)},
mT:function mT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdW:function fdW(){},
fdX:function fdX(){},
fdY:function fdY(){},
fqM:function fqM(){},
fys:function fys(d){this.a=d},
fby:function fby(d){this.a=d},
Gd:function Gd(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bJu:function bJu(d){this.a=d},
hQF(d,e,f,g,h,i,j){return A.a9(d,!1).cp(A.eD(new C.frh(j,i,f,e,h,g),!0,null,x.H))},
Pg(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Pg=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pj(h,g),$async$Pg)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.H(x.q).f.P(D.aIR)
u=!1
w=1
break}w=4
return A.b(C.h5I(d,f,e),$async$Pg)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adW(h,g),$async$Pg)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mT(""+(q+n),l,B.a.i(m.b),new A.Q(Date.now(),0,!1)))}w=6
return A.b(C.zV(h,r,p),$async$Pg)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.PP(h,r,new C.Gd("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Pg)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Pg,v)},
frh:function frh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Xo:function Xo(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ax2:function ax2(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d_V:function d_V(d){this.a=d},
d_U:function d_U(d,e){this.a=d
this.b=e},
d_J:function d_J(d,e){this.a=d
this.b=e},
d_G:function d_G(d,e){this.a=d
this.b=e},
d_h:function d_h(d){this.a=d},
d_i:function d_i(d,e){this.a=d
this.b=e},
d_K:function d_K(d){this.a=d},
d_q:function d_q(d){this.a=d},
d_o:function d_o(d){this.a=d},
d_p:function d_p(d){this.a=d},
d_r:function d_r(d){this.a=d},
d_H:function d_H(d){this.a=d},
d_I:function d_I(){},
d_m:function d_m(d){this.a=d},
d_n:function d_n(d,e){this.a=d
this.b=e},
d_s:function d_s(d){this.a=d},
d_t:function d_t(d,e){this.a=d
this.b=e},
d_T:function d_T(d){this.a=d},
d_S:function d_S(d,e){this.a=d
this.b=e},
d_R:function d_R(d){this.a=d},
d_D:function d_D(d){this.a=d},
d_C:function d_C(d){this.a=d},
d_E:function d_E(d){this.a=d},
d_j:function d_j(d,e){this.a=d
this.b=e},
d_F:function d_F(d,e){this.a=d
this.b=e},
d_w:function d_w(d){this.a=d},
d_x:function d_x(d){this.a=d},
d_v:function d_v(){},
d_y:function d_y(d){this.a=d},
d_z:function d_z(d){this.a=d},
d_A:function d_A(d,e){this.a=d
this.b=e},
d_B:function d_B(d,e,f){this.a=d
this.b=e
this.c=f},
d_u:function d_u(d,e){this.a=d
this.b=e},
d_M:function d_M(d){this.a=d},
d_L:function d_L(){},
d_N:function d_N(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_P:function d_P(d){this.a=d},
d_Q:function d_Q(d,e){this.a=d
this.b=e},
d_k:function d_k(d){this.a=d},
d_l:function d_l(d){this.a=d},
Xs:function Xs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbe:function bbe(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d1l:function d1l(d){this.a=d},
d1m:function d1m(d){this.a=d},
d1k:function d1k(d){this.a=d},
d1n:function d1n(d){this.a=d},
d1j:function d1j(d){this.a=d},
d1o:function d1o(d){this.a=d},
d1i:function d1i(d){this.a=d},
d1p:function d1p(d,e){this.a=d
this.b=e},
d1h:function d1h(d,e){this.a=d
this.b=e},
d1q:function d1q(d,e){this.a=d
this.b=e},
Xq:function Xq(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acq:function acq(d,e,f){this.a=d
this.b=e
this.c=f},
ax3:function ax3(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d09:function d09(d,e){this.a=d
this.b=e},
d08:function d08(d,e){this.a=d
this.b=e},
d0d:function d0d(d){this.a=d},
d0c:function d0c(d,e){this.a=d
this.b=e},
d0a:function d0a(d){this.a=d},
d0b:function d0b(d){this.a=d},
d0e:function d0e(d){this.a=d},
d0f:function d0f(d){this.a=d},
d07:function d07(d,e){this.a=d
this.b=e},
d06:function d06(d,e){this.a=d
this.b=e},
Ir:function Ir(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WH:function WH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
czG:function czG(d){this.a=d},
czH:function czH(){},
czI:function czI(d){this.a=d},
b8w:function b8w(d,e,f){this.b=d
this.c=e
this.a=f},
b8n:function b8n(d,e){this.b=d
this.a=e},
tI:function tI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WZ:function WZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8u:function b8u(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cT7:function cT7(d,e,f){this.a=d
this.b=e
this.c=f},
cT6:function cT6(d,e){this.a=d
this.b=e},
cTw:function cTw(d){this.a=d},
cTj:function cTj(){},
cTx:function cTx(d){this.a=d},
cTi:function cTi(){},
cTy:function cTy(d,e){this.a=d
this.b=e},
cTh:function cTh(d,e){this.a=d
this.b=e},
cTz:function cTz(d,e){this.a=d
this.b=e},
cTg:function cTg(d,e){this.a=d
this.b=e},
cTA:function cTA(d){this.a=d},
cTf:function cTf(){},
cTB:function cTB(d,e){this.a=d
this.b=e},
cTe:function cTe(d,e){this.a=d
this.b=e},
cTC:function cTC(d){this.a=d},
cTr:function cTr(d,e){this.a=d
this.b=e},
cTD:function cTD(d){this.a=d},
cTE:function cTE(d){this.a=d},
cTG:function cTG(d){this.a=d},
cTH:function cTH(d){this.a=d},
cTq:function cTq(d,e){this.a=d
this.b=e},
cTI:function cTI(d,e){this.a=d
this.b=e},
aDU:function aDU(d){this.a=d},
bdH:function bdH(d){this.a=d},
b6K:function b6K(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hHb(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.afo(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.Q(Date.now(),0,!1))
s=new C.fc8(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a4<1>"),q=q.k("cU<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wM)m.push(l===D.WG?"male":"female")
l=u.w
k=A.ae(a3,!0,!1,!1,!1).cz(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ae(a3,!0,!1,!1,!1).cz(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jO(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jO(h,a2,a2)-A.jO(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.an(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.z(new A.cU(new A.a4(a4,new C.fc6(u,f),p),new C.fc7(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aF(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aF(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.am(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hHc(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.afo(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.fcd(v,e)
q=new C.fcb(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.m(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.m(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.an(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.an(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.m(0,s.a,d)}}d=p.$ti.k("bg<2>")
d=A.d7(new A.bg(p,d),d.k("G.E"))
n=A.z(d,A.a2(d).k("cl.E"))
B.d.fm(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gah(e),k=new A.hK(l,new C.fcc(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.an(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aF(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
ht8(d,e,f,g){var w,v,u=C.hHd(d,e)
if(u<=0||f.length<=u)return new A.ac1(!1,D.AR,f)
if(g.t(0,e.a))return new A.ac1(!1,D.AR,f)
w=A.U(f).c
v=A.df(f,0,A.dK(u,"count",x.S),w).dA(0)
return new A.ac1(!0,A.df(f,u,null,w).dA(0),v)},
ht9(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.afo(d3),d2=d1.length
if(d2===0)return D.fh9
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ce(0,t.a,new C.d0m(t))}s=new C.d0D(v)
d2=x.h
r=A.T(w,d2)
q=new C.d0v(r)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d0u(r)
l=A.T(w,x.do)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cb(l.ce(0,k,new C.d0n()),o)}h=new C.d0t(s)
g=new C.d0s(l,r)
p=v.$ti.k("bg<2>")
o=p.k("a4<G.E>")
f=A.z(new A.a4(new A.bg(v,p),new C.d0o(h),o),o.k("G.E"))
e=f.length===0?new A.bg(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aZ(w))
if(a0>d){d=a0
e=t}}a1=A.aZ(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.gR
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.d0B(new C.d0x(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dv(v,v.r,v.e),j=a2.gahN(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eN([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.an(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qE(J.dE(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d0l(a2,new C.d0C(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dv(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cu<1>")
d2=A.z(new A.cu(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.Ev(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Iz(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.z(new A.cu(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bG(0,new C.d0p(c6,b4))
for(d2=new A.cR(a4,a4.$ti.k("cR<1,2>")).gah(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gT(j)
if(b6.an(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gah(b5),i=new A.hK(j,new C.d0q(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d0r())
c6.push(new C.aG_(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.baZ(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h1t(d){var w=A.ae("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fWW(d,e,f,g,h,i,j,k,l,m,n){return new C.Y1(k,f,j,e,l,n,m,d,g,h,i,null)},
ayX(d,e,f,g,h,i,j){return new C.beD(i,d,e,f,j,h,g,null)},
amZ:function amZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAw:function aAw(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dLU:function dLU(d){this.a=d},
dLT:function dLT(d){this.a=d},
dLW:function dLW(d,e){this.a=d
this.b=e},
dLX:function dLX(d,e){this.a=d
this.b=e},
dLY:function dLY(d){this.a=d},
dLS:function dLS(d,e){this.a=d
this.b=e},
dLV:function dLV(d){this.a=d},
dM_:function dM_(d){this.a=d},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
amT:function amT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAt:function aAt(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dLk:function dLk(d){this.a=d},
dLi:function dLi(d){this.a=d},
dLj:function dLj(d){this.a=d},
dLl:function dLl(d,e){this.a=d
this.b=e},
dLf:function dLf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKO:function dKO(d){this.a=d},
dKP:function dKP(d,e){this.a=d
this.b=e},
dL2:function dL2(d){this.a=d},
dL0:function dL0(d){this.a=d},
dL1:function dL1(d,e){this.a=d
this.b=e},
dL3:function dL3(d){this.a=d},
dL4:function dL4(d,e){this.a=d
this.b=e},
dLe:function dLe(d,e){this.a=d
this.b=e},
dLc:function dLc(d,e){this.a=d
this.b=e},
dLb:function dLb(d,e){this.a=d
this.b=e},
dL7:function dL7(d,e){this.a=d
this.b=e},
dL6:function dL6(d){this.a=d},
dL8:function dL8(d,e){this.a=d
this.b=e},
dL5:function dL5(d){this.a=d},
dL9:function dL9(d){this.a=d},
dLa:function dLa(d){this.a=d},
dLd:function dLd(d,e){this.a=d
this.b=e},
dKC:function dKC(d,e){this.a=d
this.b=e},
dKD:function dKD(d,e){this.a=d
this.b=e},
dLn:function dLn(d,e,f){this.a=d
this.b=e
this.c=f},
dLh:function dLh(d,e,f){this.a=d
this.b=e
this.c=f},
dLg:function dLg(d){this.a=d},
dKE:function dKE(d){this.a=d},
dKF:function dKF(d){this.a=d},
dKG:function dKG(){},
dKH:function dKH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKL:function dKL(d,e){this.a=d
this.b=e},
dKK:function dKK(d,e){this.a=d
this.b=e},
dKJ:function dKJ(d){this.a=d},
dKM:function dKM(d,e){this.a=d
this.b=e},
dKI:function dKI(d){this.a=d},
dLm:function dLm(d){this.a=d},
dKY:function dKY(){},
dKZ:function dKZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKX:function dKX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKT:function dKT(d,e,f){this.a=d
this.b=e
this.c=f},
dKS:function dKS(d,e,f){this.a=d
this.b=e
this.c=f},
dKQ:function dKQ(d,e){this.a=d
this.b=e},
dKU:function dKU(d){this.a=d},
dKV:function dKV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKR:function dKR(d,e){this.a=d
this.b=e},
dKW:function dKW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dL_:function dL_(d,e){this.a=d
this.b=e},
dLu:function dLu(){},
dLv:function dLv(d,e){this.a=d
this.b=e},
dLw:function dLw(d){this.a=d},
dLx:function dLx(d,e){this.a=d
this.b=e},
dLq:function dLq(d){this.a=d},
dLo:function dLo(d,e){this.a=d
this.b=e},
dLr:function dLr(d,e){this.a=d
this.b=e},
dLs:function dLs(d,e){this.a=d
this.b=e},
dLt:function dLt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dLy:function dLy(d){this.a=d},
dLp:function dLp(d){this.a=d},
dKN:function dKN(d){this.a=d},
baX:function baX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d0j:function d0j(d){this.a=d},
d0i:function d0i(d,e){this.a=d
this.b=e},
d0k:function d0k(d){this.a=d},
d0h:function d0h(d,e){this.a=d
this.b=e},
fc8:function fc8(d,e){this.a=d
this.b=e},
fc9:function fc9(d){this.a=d},
fca:function fca(){},
fc6:function fc6(d,e){this.a=d
this.b=e},
fc7:function fc7(){},
fcd:function fcd(d,e){this.a=d
this.b=e},
fce:function fce(d){this.a=d},
fcf:function fcf(){},
fcb:function fcb(d){this.a=d},
fcc:function fcc(d,e){this.a=d
this.b=e},
Iz:function Iz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ev:function Ev(d,e){this.a=d
this.b=e},
baZ:function baZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d0m:function d0m(d){this.a=d},
d0D:function d0D(d){this.a=d},
d0v:function d0v(d){this.a=d},
d0w:function d0w(){},
d0u:function d0u(d){this.a=d},
d0n:function d0n(){},
d0t:function d0t(d){this.a=d},
d0s:function d0s(d,e){this.a=d
this.b=e},
d0o:function d0o(d){this.a=d},
d0x:function d0x(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0y:function d0y(d){this.a=d},
d0z:function d0z(d){this.a=d},
d0A:function d0A(){},
d0B:function d0B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d0C:function d0C(){},
d0l:function d0l(d,e,f,g,h,i,j,k,l,m){var _=this
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
d0p:function d0p(d,e){this.a=d
this.b=e},
d0q:function d0q(d){this.a=d},
d0r:function d0r(){},
aG_:function aG_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bb_:function bb_(d,e){this.b=d
this.a=e},
d0E:function d0E(){},
d0F:function d0F(d){this.a=d},
d0G:function d0G(d){this.a=d},
d0H:function d0H(){},
beE:function beE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba4:function ba4(d,e){this.b=d
this.a=e},
bs5:function bs5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eWM:function eWM(d){this.a=d},
bhW:function bhW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eyr:function eyr(d){this.a=d},
eyq:function eyq(d,e){this.a=d
this.b=e},
Y1:function Y1(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayV:function ayV(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dfV:function dfV(d,e){this.a=d
this.b=e},
dfU:function dfU(d){this.a=d},
dfS:function dfS(d){this.a=d},
dfT:function dfT(d){this.a=d},
dg3:function dg3(d){this.a=d},
dg4:function dg4(d){this.a=d},
dg2:function dg2(d,e){this.a=d
this.b=e},
dg5:function dg5(){},
dg8:function dg8(d){this.a=d},
dg1:function dg1(d,e){this.a=d
this.b=e},
dg7:function dg7(){},
dg9:function dg9(d){this.a=d},
dg0:function dg0(d,e){this.a=d
this.b=e},
dga:function dga(d){this.a=d},
dg_:function dg_(d){this.a=d},
dgb:function dgb(d){this.a=d},
dfZ:function dfZ(d){this.a=d},
dgc:function dgc(d){this.a=d},
dfY:function dfY(d){this.a=d},
dgd:function dgd(d){this.a=d},
dfX:function dfX(d){this.a=d},
dge:function dge(d){this.a=d},
dfW:function dfW(d,e){this.a=d
this.b=e},
dg6:function dg6(d){this.a=d},
aaU:function aaU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beD:function beD(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaT:function aaT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
beC:function beC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dgf:function dgf(d){this.a=d},
dgg:function dgg(d,e){this.a=d
this.b=e},
ayW:function ayW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aF2:function aF2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaV:function aaV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dgp:function dgp(d){this.a=d},
In:function In(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fRT(d){var w=d.R,v=x.N
return w.iH(w,new C.c3C(),v,v)},
hkK(d){var w=d.bA
if(w>=0)return w
return 5},
fRV(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fRT(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
fRU(d,e){var w=C.fRV(d,e)
if(w!=null&&w.c8(new A.Q(Date.now(),0,!1)))return!0
return!1},
hkL(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a_(C.fRT(d),w,w)
u=C.fRV(d,e)
t=u!=null&&u.c8(new A.Q(Date.now(),0,!1))?u:new A.Q(Date.now(),0,!1)
v.m(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a5().ab())
d.R=v},
aWM(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWM=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l2(t,B.Gr),$async$aWM)
case 3:if(l){u=!0
w=1
break}u=A.kH(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Gr,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWM,v)},
c3C:function c3C(){},
hkI(){var w,v=$.oZ(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fN(u)},
H5(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$H5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$H5)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eV("ngmy_family_tree_backup_codes_v1",null,!1,B.bE),$async$H5)
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
p=A.a6(m)
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
return A.i($async$H5,v)},
a57(d){return C.hkJ(d)},
hkJ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a57=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$a57)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.ht("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z),!1,!1,B.cA,null),$async$a57)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a6(p)
$.al.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a57,v)},
c3B(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c3B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.H5(),$async$c3B)
case 3:t=m.jl(f),t=t.gah(t),s=x.f
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
return A.i($async$c3B,v)},
LS(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$LS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c3B(d),$async$LS)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.H5(),$async$LS)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dS(A.a_(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.Q(Date.now(),0,!1).a5().ab())
r.m(s,t,o)
w=9
return A.b(C.a57(s),$async$LS)
case 9:case 8:u=t
w=1
break
case 5:n=C.hkI()
w=10
return A.b(C.H5(),$async$LS)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a5().ab(),"updatedAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.K))
w=11
return A.b(C.a57(s),$async$LS)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LS,v)},
aWL(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.H5(),$async$aWL)
case 3:t=f
for(s=J.dg(t),r=s.gdH(t),r=r.dA(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a57(t),$async$aWL)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWL,v)},
a58(d,e,f){var w=0,v=A.j(x.H),u
var $async$a58=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amY(d,e),$async$a58)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.LS(d),$async$a58)
case 7:w=4
break
case 5:w=8
return A.b(C.aWL(d),$async$a58)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a58,v)},
amS(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amS=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amY(f,e),$async$amS)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bX(),$async$amS)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.H5(),$async$amS)
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
return A.i($async$amS,v)},
aWK(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bX(),$async$aWK)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.H5(),$async$aWK)
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
return A.i($async$aWK,v)},
hkM(){var w,v=$.oZ(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fN(u)},
amV(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$amV)
case 3:if(!g){u=null
w=1
break}t=C.hkM()
w=4
return A.b(A.Te(),$async$amV)
case 4:s=g
r=B.dG.aG(B.Q.al(d.eF(),null))
r=B.cR.gcs().aG(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.K))
w=5
return A.b(A.a59(s),$async$amV)
case 5:p=e?999:2
u=new A.Zc("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amV,v)},
amU(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amU=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Te(),$async$amU)
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
return A.b(C.aWK(J.k(l==null?"":l),j),$async$amU)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.c1.c6(0,B.cw.aG(t))
s=C.fRW(r)}catch(f){q=A.a6(f)
$.al.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dS(A.a_(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ab())
o.m(p,g,l)}w=5
return A.b(A.a59(p),$async$amU)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amU,v)},
fRW(d){var w,v,u,t,s=null
try{w=B.Q.aD(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hkO(A.a_(w,x.N,x.z))
return u}catch(t){v=A.a6(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fCe(d){var w=0,v=A.j(x.m),u,t,s
var $async$fCe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amU(t[1])
w=1
break}u=null
w=1
break}u=C.fRW(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCe,v)},
hkO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d5(v,x.f)
u=A.cz(u,new C.c3E(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a4<G.E>")
s=A.z(new A.a4(u,new C.c3F(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jl(p),t=t.gah(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d5(l,u)
n=A.cz(n,new C.c3G(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a4<G.E>")
j=A.z(new A.a4(n,new C.c3H(),k),k.k("G.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amW(h,w,s,r,q)},
amY(d,e){var w=0,v=A.j(x.y),u,t
var $async$amY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.LK(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zK(d),$async$amY)
case 3:u=t.ct(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amY,v)},
c3N(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c3N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zK(d),$async$c3N)
case 3:t=s.b5(f,new C.c3O(),x.cs)
t=A.z(t,t.$ti.k("ai.E"))
B.d.b_(t,new C.c3P())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c3N,v)},
Tf(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Tf=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amY(e,d),$async$Tf)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.LS(e),$async$Tf)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zK(e),$async$Tf)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c3L(g))
r=A.z(t,t.$ti.k("G.E"))}t=J.a8(r)
if(t.gai(r)){u=null
w=1
break}t=t.di(r,new C.c3M(e),x.k)
r=A.z(t,t.$ti.k("ai.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Jj(e,o),$async$Tf)
case 14:n=i
if(J.ct(n))q.m(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.amW(s,B.a.i(e.toLowerCase()),r,new A.Q(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Tf,v)},
aWP(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWP=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Tf(d,e,f,g),$async$aWP)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.Fa(A.Iv(q.eF(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWP,v)},
aWO(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWO=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Tf(d,e,f,g),$async$aWO)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amV(r,f),$async$aWO)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aD2(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWO,v)},
Tg(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Tg=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fCe(a0),$async$Tg)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amS(g.a,d,e,f,s,r),$async$Tg)
case 6:if(!a2){if(r)throw A.R(A.ba("This backup expired or the sender's tree is no longer available."))
throw A.R(A.ba("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bxq(e,j),$async$Tg)
case 12:case 11:w=13
return A.b(C.afb(e,j,s),$async$Tg)
case 13:h=n.h(0,i)
w=h!=null&&J.ct(h)?14:15
break
case 14:w=16
return A.b(C.zV(e,i,h),$async$Tg)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.blr(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Tg,v)},
amW:function amW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3J:function c3J(){},
c3K:function c3K(){},
c3I:function c3I(){},
c3E:function c3E(){},
c3F:function c3F(){},
c3G:function c3G(){},
c3H:function c3H(){},
c3O:function c3O(){},
c3P:function c3P(){},
c3L:function c3L(d){this.a=d},
c3M:function c3M(d){this.a=d},
fKk(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fa(null,x.H)
return A.hm(d,new C.amX(w,e,g,i,f,h,null),!0,null,x.H)},
d0g(d,e,f,g,h,i,j,k){return new C.baW(i,e,k,j,g,f,h,d,null)},
amX:function amX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAv:function aAv(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dLH:function dLH(d){this.a=d},
dLI:function dLI(d,e,f){this.a=d
this.b=e
this.c=f},
dLM:function dLM(d,e){this.a=d
this.b=e},
dLN:function dLN(d){this.a=d},
dLE:function dLE(d){this.a=d},
dLF:function dLF(d,e){this.a=d
this.b=e},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLL:function dLL(d){this.a=d},
dLK:function dLK(d,e){this.a=d
this.b=e},
dLJ:function dLJ(){},
dLP:function dLP(d){this.a=d},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
dLO:function dLO(d,e){this.a=d
this.b=e},
d0I:function d0I(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
baY:function baY(d,e,f){this.d=d
this.e=e
this.a=f},
aab:function aab(d,e,f){this.c=d
this.d=e
this.a=f},
baW:function baW(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bb0:function bb0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ym:function Ym(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAu:function aAu(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dLz:function dLz(d,e){this.a=d
this.b=e},
dLA:function dLA(d){this.a=d},
dLB:function dLB(d){this.a=d},
dLC:function dLC(d){this.a=d},
dLD:function dLD(d){this.a=d},
Yn:function Yn(d){this.a=d},
bg2:function bg2(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dLR:function dLR(d,e){this.a=d
this.b=e},
aVl(d,e){return new C.aVk(d,e,null)},
aVk:function aVk(d,e,f){this.c=d
this.d=e
this.a=f},
hJC(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
hQP(d){return A.c2(B.K,null,new C.frK(new C.t8(A.M(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fTM(d,e){return new C.apO(e,d,null)},
aNa(d,e,f,g,h,i,j){var w=C.hJC(i)
if(w!=null)return A.bu(e,new A.a5(j,f,new C.a4b(w,!0,null),null),B.ao)
return I.aMw(e,B.bQ,f,g,h,i,j)},
ll:function ll(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4b:function a4b(d,e,f){this.c=d
this.d=e
this.a=f},
bfM:function bfM(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b0$=e
_.c=_.a=null},
dxV:function dxV(d){this.a=d},
dxW:function dxW(){},
dxX:function dxX(d,e){this.a=d
this.b=e},
bfL:function bfL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
frK:function frK(d){this.a=d},
frJ:function frJ(d,e){this.a=d
this.b=e},
frI:function frI(d,e){this.a=d
this.b=e},
frH:function frH(d,e){this.a=d
this.b=e},
apO:function apO(d,e,f){this.c=d
this.d=e
this.a=f},
cbg:function cbg(d,e){this.a=d
this.b=e},
aIl:function aIl(){},
hQA(d){var w=null
return A.ch(w,w,!0,w,new C.fr9(),d,w,!0,!0,x.e2)},
hRL(d,e,f,g,h){var w=null
return A.ch(w,w,!0,w,new C.fyk(h,g,f,e),d,w,!0,!0,x.N)},
hQC(d,e){var w=null
return A.ch(w,w,!0,w,new C.frb(e),d,w,!0,!0,x.dY)},
hQB(d){var w=null
return A.ch(w,w,!0,w,new C.fra(),d,w,!0,!0,x.c5)},
aQ0:function aQ0(d,e){this.a=d
this.b=e},
aQ_:function aQ_(d){this.a=d},
aO5:function aO5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fr9:function fr9(){},
fyk:function fyk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frb:function frb(d){this.a=d},
fra:function fra(){},
X0:function X0(d,e){this.c=d
this.a=e},
avQ:function avQ(){var _=this
_.d=$
_.c=_.a=_.e=null},
cTU:function cTU(d){this.a=d},
cTV:function cTV(d){this.a=d},
cTT:function cTT(d,e){this.a=d
this.b=e},
cTW:function cTW(d){this.a=d},
cTX:function cTX(d){this.a=d},
X_:function X_(d){this.a=d},
avP:function avP(){this.d=$
this.c=this.a=null},
cTQ:function cTQ(d){this.a=d},
cTR:function cTR(d){this.a=d},
cTS:function cTS(d){this.a=d},
Wy:function Wy(d){this.a=d},
auz:function auz(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
crt:function crt(){},
crz:function crz(d){this.a=d},
crA:function crA(d){this.a=d},
crB:function crB(d){this.a=d},
cry:function cry(){},
crC:function crC(d){this.a=d},
crD:function crD(d){this.a=d},
crx:function crx(){},
crE:function crE(d,e){this.a=d
this.b=e},
crw:function crw(d,e){this.a=d
this.b=e},
cru:function cru(d,e){this.a=d
this.b=e},
crF:function crF(d){this.a=d},
crv:function crv(){},
crG:function crG(d){this.a=d},
a_5:function a_5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brY:function brY(){this.d=$
this.c=this.a=null},
eWe:function eWe(d,e){this.a=d
this.b=e},
eWf:function eWf(d){this.a=d},
eWg:function eWg(d,e){this.a=d
this.b=e},
a9f:function a9f(d,e){this.a=d
this.b=e},
Ei:function Ei(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brW:function brW(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eWc:function eWc(d,e){this.a=d
this.b=e},
aus:function aus(d,e){this.c=d
this.a=e},
brX:function brX(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eWd:function eWd(d){this.a=d},
brV:function brV(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aKt:function aKt(){},
aKu:function aKu(){},
bzj(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bt(u),s=B.o.E(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.og(B.o.u(t),A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fq_(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aS(B.o.u(s),2,"0")
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VY(A.dl(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMN(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hR().kG(85,1280,B.ez),$async$aMN)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aMN)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.fTL()
w=9
return A.b(C.cbf(q,r),$async$aMN)
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
o=A.a6(l)
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
return A.i($async$aMN,v)},
aN8(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aN8=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cbc(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gaj(g.split(",")):g
p=B.cw.aG(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().K6(p,!0,null,i).cJ(0,B.fK),$async$aN8)
case 9:n=a1
w=10
return A.b(n.lT(),$async$aN8)
case 10:m=a1
w=11
return A.b(J.aNS(m).hf(B.fO),$async$aN8)
case 11:l=a1
J.aNS(m).p()
if(l==null){w=8
break}i=J.f5(B.dD.gaO(l))
k="data:image/png;base64,"+B.cR.gcs().aG(i)
if(J.aa(k)<=r){u=k
w=1
break}o=B.k.U(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a6(f)
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
return A.i($async$aN8,v)},
fq_:function fq_(){},
t8:function t8(d){this.a=d},
apN:function apN(d,e,f){this.c=d
this.d=e
this.a=f},
aBX:function aBX(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
evB:function evB(d,e){this.a=d
this.b=e},
evs:function evs(d){this.a=d},
evt:function evt(d){this.a=d},
evz:function evz(d,e){this.a=d
this.b=e},
evy:function evy(d,e){this.a=d
this.b=e},
evv:function evv(d,e){this.a=d
this.b=e},
evu:function evu(d,e){this.a=d
this.b=e},
evw:function evw(d){this.a=d},
evx:function evx(d,e){this.a=d
this.b=e},
evA:function evA(d,e){this.a=d
this.b=e},
evn:function evn(d,e){this.a=d
this.b=e},
evr:function evr(d){this.a=d},
evq:function evq(d,e){this.a=d
this.b=e},
evp:function evp(d){this.a=d},
evC:function evC(d,e){this.a=d
this.b=e},
evD:function evD(d,e){this.a=d
this.b=e},
evo:function evo(d,e){this.a=d
this.b=e},
h5c(d,e,f){var w="thumbnailPath",v=e.ac()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.Q(Date.now(),0,!1).a5().ab(),"project",v],x.N,x.z)},
fq0(d,e,f){var w=0,v=A.j(x.N),u
var $async$fq0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.al(C.h5c(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fq0,v)},
bzl(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bzl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fq0(!0,d,e),$async$bzl)
case 4:w=3
return A.b(r.apL(g,d,e.a),$async$bzl)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dG.aG(B.Q.al(C.h5c(d,e,null),null))
u="NGMY_WS:"+B.jY.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzl,v)},
fYg(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fK1(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.cW(s,"NGMYWSSYNC2|"))return!0
if(J.cW(s,"NGMY_WS:"))return!0
if(J.eR(s,t))return!0
if(J.cW(s,"{"))try{w=B.Q.aD(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hOE(d){var w,v,u,t=C.fYg(d)
if(t==null)return null
if(C.fK1(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.fK1(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.fK1(v))return v}return null},
fK0(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.cW(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cW(q,"NGMY_WS:")){v=B.c1.c6(0,B.cw.aG(J.mm(q,8)))
w=t.a(B.Q.aD(0,v,r))}else w=t.a(B.Q.aD(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fEK(A.a_(u,x.N,x.z))
return t}catch(s){return r}},
bzk(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bzk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apK(t[1]),$async$bzk)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fK0(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fK0(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzk,v)},
fK_(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l5(w,v,d.c,d.d,new A.Q(Date.now(),0,!1))},
byS(){var w=0,v=A.j(x.o),u,t
var $async$byS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Fl(),$async$byS)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fK0(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byS,v)},
h65(d,e,f,g){return A.c2(B.K,null,new C.fyc(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fyc:function fyc(d,e,f){this.a=d
this.b=e
this.c=f},
abf:function abf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
evF:function evF(d,e){this.a=d
this.b=e},
evG:function evG(d,e){this.a=d
this.b=e},
evH:function evH(d,e){this.a=d
this.b=e},
evI:function evI(d,e){this.a=d
this.b=e},
evE:function evE(d){this.a=d},
apH:function apH(d,e,f){this.c=d
this.d=e
this.a=f},
bhp:function bhp(){var _=this
_.c=_.a=_.e=_.d=null},
evi:function evi(d,e){this.a=d
this.b=e},
evj:function evj(d){this.a=d},
evk:function evk(d){this.a=d},
apM:function apM(d){this.a=d},
aBW:function aBW(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
evm:function evm(d){this.a=d},
evl:function evl(d){this.a=d},
hnZ(d,e,f,g,h){return new C.Mt(h,g,d,e,f,null)},
aGH:function aGH(d,e){this.a=d
this.b=e},
Mt:function Mt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBY:function aBY(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
ew4:function ew4(){},
ew0:function ew0(d,e){this.a=d
this.b=e},
ew1:function ew1(d){this.a=d},
evM:function evM(d){this.a=d},
evK:function evK(d){this.a=d},
evL:function evL(d){this.a=d},
evV:function evV(d,e){this.a=d
this.b=e},
evS:function evS(d,e){this.a=d
this.b=e},
evT:function evT(d,e){this.a=d
this.b=e},
evU:function evU(d,e,f){this.a=d
this.b=e
this.c=f},
evQ:function evQ(d,e,f){this.a=d
this.b=e
this.c=f},
evO:function evO(d){this.a=d},
evP:function evP(d){this.a=d},
evR:function evR(d){this.a=d},
ew7:function ew7(d){this.a=d},
ew6:function ew6(d){this.a=d},
ew8:function ew8(d){this.a=d},
ew5:function ew5(d){this.a=d},
evJ:function evJ(d){this.a=d},
evN:function evN(d,e){this.a=d
this.b=e},
ew3:function ew3(d,e){this.a=d
this.b=e},
ew2:function ew2(d,e){this.a=d
this.b=e},
evY:function evY(d){this.a=d},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d,e){this.a=d
this.b=e},
evX:function evX(d,e){this.a=d
this.b=e},
evW:function evW(d,e,f){this.a=d
this.b=e
this.c=f},
btJ:function btJ(){},
zC(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ae("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
adF(d,e,f){return C.hDj(d,e,f)},
hDj(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adF=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$adF)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a6(o)
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
return A.i($async$adF,v)},
adE(d,e){return C.hDi(d,e)},
hDi(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adE=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adE)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a6(q)
$.al.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$adE,v)},
hC5(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QX(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bwr(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bwr=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b_0(q),$async$bwr)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aN8(q,!1),$async$bwr)
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
return A.i($async$bwr,v)},
hbU(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qp(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qp(p,J.k(u==null?"":u),1,o,q)},
fEK(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d5(s,x.f)
w=A.cz(w,new C.cqS(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a4<G.E>")
r=A.z(new A.a4(w,new C.cqT(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.l5(w,v,u,r,t==null?new A.Q(Date.now(),0,!1):t)},
hH7(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.WG
case"female":case"f":return D.aeL
default:return D.wM}},
h1V(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fO1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hH7(v==null?j:J.k(v))
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
return new C.hQ(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hH9(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Kz
case"viewer":return D.k7
default:return D.rR}},
hHa(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Fb(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bxG(d,e){return B.a.i(e.toLowerCase())===C.Fb(d,e)&&d.y!==D.k7},
tm(d,e){var w,v=d.y
if(v===D.k7)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Fb(d,e))return!0
if(v===D.Kz)return!0
v=d.e
return new A.J(v,A.fK5(),A.U(v).k("J<1,n>")).t(0,w)},
hGA(d){return J.dE(d,new C.fbq()).gJ(0)},
fyz(d){var w=0,v=A.j(x.y),u,t
var $async$fyz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zK(d),$async$fyz)
case 3:u=t.rm(f,new C.fyA(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyz,v)},
bxq(d,e){var w=0,v=A.j(x.H),u,t
var $async$bxq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zK(d),$async$bxq)
case 3:t=g
if(J.rm(t,new C.faC(e))){w=1
break}if(C.hGA(t)>=2)throw A.R(A.ba("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bxq,v)},
aif(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d5(n,x.f)
w=A.cz(w,new C.bJv(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a4<G.E>")
m=A.z(new A.a4(w,new C.bJw(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b5(u,new C.bJx(),x.N)
t=A.z(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bh(J.k(r==null?"":r))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kp(l,w,v,!s,t,m,r,q,p,C.hH9(o==null?null:J.k(o)))},
h23(d){var w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.am(v,0,8)},
BQ(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PN(d),$async$BQ)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ax(),$async$BQ)
case 4:t=f
w=5
return A.b(t.a3J(0),$async$BQ)
case 5:w=6
return A.b(C.f2J(t,l),$async$BQ)
case 6:s=f
if(J.ct(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fYP(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.of(l,n),$async$BQ)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fYP(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.of(l,n),$async$BQ)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BQ,v)},
f2J(d,e){return C.hzA(d,e)},
hzA(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f2J=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zC(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Q.aD(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aU(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.aa(n)===0){w=7
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zC(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aD(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fEK(A.a_(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zC(a9)+"_"+n))
i=C.hC5(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b_0(h),$async$f2J)
case 17:g=b1
if(g!=null){i=i.QX(g)
p=!0}case 16:J.cb(q,i)
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
case 8:J.PX(q,new C.f2K())
if(p&&J.aa(q)!==0)C.of(a9,q)
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
return A.i($async$f2J,v)},
bxQ(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PN(d),$async$bxQ)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BQ(r),$async$bxQ)
case 4:t=p.aU(g)
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
return A.i($async$bxQ,v)},
fYP(d){var w,v,u,t
try{w=B.Q.aD(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d5(w,x.f)
v=A.cz(v,new C.eZu(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a4<G.E>")
v=A.z(new A.a4(v,new C.eZv(),u),u.k("G.E"))
B.d.b_(v,new C.eZw())
return v}catch(t){v=A.a([],x.D)
return v}},
of(d,e){return C.hQq(d,e)},
hQq(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$of=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.PN(b2),$async$of)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ax(),$async$of)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zC(a8)
p=A.aS(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b5(x.j.a(B.Q.aD(0,p,null)),new C.fr0(),a2).fH(0)
a2=J.b5(b3,new C.fr1(),a2).bZ(0,new C.fr2())
n=A.d7(a2,a2.$ti.k("G.E"))
a2=o,a2=A.ef(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eR(n,m)?17:18
break
case 17:a5=C.zC(a8)
l=A.aS(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a6o(l),$async$of)
case 19:t=21
a5=C.zC(a8)
k=A.aS(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aD(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a6o(a5==null?null:J.k(a5)),$async$of)
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
return A.b(C.adE(r,"ngmy_worksheet_item_v3_"+C.zC(a8)+"_"+m),$async$of)
case 29:w=30
return A.b(C.adE(r,"ngmy_worksheet_thumb_v3_"+C.zC(a8)+"_"+m),$async$of)
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
case 14:case 10:a2=J.cA(b3),a3=a2.gah(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bwr(h),$async$of)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adF(r,"ngmy_worksheet_thumb_v3_"+C.zC(a8)+"_"+a4,f),$async$of)
case 40:g=i.QX(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adE(r,"ngmy_worksheet_thumb_v3_"+C.zC(a8)+"_"+a4),$async$of)
case 41:g=i.QX(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adE(r,"ngmy_worksheet_thumb_v3_"+C.zC(a8)+"_"+a4),$async$of)
case 42:case 34:a4=i.a
w=43
return A.b(C.adF(r,"ngmy_worksheet_item_v3_"+C.zC(a8)+"_"+a4,B.Q.al(g.ac(),null)),$async$of)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cb(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adF(r,"ngmy_worksheets_index_v3_"+C.zC(a8),B.Q.al(q,null)),$async$of)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eE(b3,new C.fr3(q))
a4=a3.$ti.k("cU<1,a1<n,@>>")
a7=A.z(new A.cU(a3,new C.fr4(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.adF(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.al(a0,null)),$async$of)
case 45:w=46
return A.b(J.hb_(r),$async$of)
case 46:if(a2.gci(b3)&&J.aa(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a6(b1)
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
return A.i($async$of,v)},
JK(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$JK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BQ(d),$async$JK)
case 3:t=g
s=J.cA(t)
r=s.bi(t,new C.fyy(e))
if(r===-1)s.ck(t,0,e)
else s.m(t,r,e)
u=C.of(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$JK,v)},
bxD(d,e){var w=0,v=A.j(x.H),u
var $async$bxD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BQ(d),$async$bxD)
case 2:u=g
J.n3(u,new C.fbS(e))
w=3
return A.b(C.of(d,u),$async$bxD)
case 3:return A.h(null,v)}})
return A.i($async$bxD,v)},
Fd(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Fd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Fd)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aS(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aD(0,i,null)
if(x.j.b(t)){j=J.d5(t,x.f)
j=A.cz(j,new C.fe1(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a4<G.E>")
r=A.z(new A.a4(j,new C.fe2(),s),s.k("G.E"))
B.d.b_(r,new C.fe3())
k=r}}catch(h){}w=4
return A.b(C.f_c(d),$async$Fd)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hzY(k,p,d)
j=A.U(o)
s=j.k("J<1,a1<n,@>>")
s=A.z(new A.J(o,new C.fe4(),s),s.k("ai.E"))
n=B.Q.al(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.P_(d,o),$async$Fd)
case 7:case 6:j=j.k("a4<1>")
m=A.z(new A.a4(o,new C.fe5(d),j),j.k("G.E"))
if(m.length!==0)C.aLJ(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Fd,v)},
fqN(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fqN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P_(d,e),$async$fqN)
case 3:t=J.dE(e,new C.fqO(d))
s=A.z(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLJ(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqN,v)},
a0H(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ax(),$async$a0H)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aS(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aD(0,l,null)
if(x.j.b(u)){m=J.d5(u,x.f)
m=A.cz(m,new C.fyt(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a4<G.E>")
s=A.z(new A.a4(m,new C.fyu(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pL(o,new C.fyv(e))
if(B.a.i(e.x).length===0&&C.tm(e,d)){m=B.a.i(d.toLowerCase())
p=e.aAn(e.y===D.k7?D.k7:D.rR,m)}else p=e
if(q===-1)J.p1(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.P_(d,o),$async$a0H)
case 3:w=C.tm(p,d)?4:5
break
case 4:w=6
return A.b(C.aLI(C.Fb(p,d),p),$async$a0H)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0H,v)},
aLS(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Fd(d),$async$aLS)
case 2:u=g
t=J.cA(u)
s=A.qE(t.eE(u,new C.fbz(e)))
t.bm(u,new C.fbA(e))
w=3
return A.b(C.P_(d,u),$async$aLS)
case 3:w=s!=null&&C.bxG(s,d)?4:5
break
case 4:w=6
return A.b(C.eZy(e),$async$aLS)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLS,v)},
afo(d){var w=d.f,v=A.U(w).k("a4<1>")
w=A.z(new A.a4(w,new C.fyE(),v),v.k("G.E"))
return w},
fHN(d,e){var w,v=d.f,u=A.qE(new A.a4(v,new C.fba(e),A.U(v).k("a4<1>")))
v=C.afo(d)
w=A.U(v).k("a4<1>")
v=A.z(new A.a4(v,new C.fbb(e,u),w),w.k("G.E"))
B.d.b_(v,new C.fbc())
return v},
hHd(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h68(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bi(C.fHN(d,u),new C.fyl(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hIH(d,e){var w
if(e==null||e.length===0)return 1
w=C.fHN(d,e)
if(w.length===0)return 1
return new A.J(w,new C.feO(),A.U(w).k("J<1,I>")).fv(0,B.yV)+1},
hQj(d){var w,v=C.afo(d)
if(v.length===0)return null
w=new A.a4(v,new C.fqK(),A.U(v).k("a4<1>"))
if(!w.gai(0))return w.gL(0)
return B.d.gL(v)},
hH8(d){return A.E(["id",d.a,"name",d.b,"gender",C.h1V(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hIC(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.m(0,t.a,t)}s=A.a([],x.u)
r=A.aZ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.K(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.wM?n:q.c
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
d=q.aAi(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cAH(a1,w,a3.d,a2.y,s,a0,v)},
zK(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$zK)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aS(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aD(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d5(t,x.f)
p=A.cz(p,new C.fdZ(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a4<G.E>")
p=A.z(new A.a4(p,new C.fe_(),s),s.k("G.E"))
B.d.b_(p,new C.fe0())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zK,v)},
afb(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$afb=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rR:D.k7
a7=C.Fb(b2,b3)
w=2
return A.b(C.zK(b1),$async$afb)
case 2:a8=b5
a9=J.cA(a8)
b0=a9.bi(a8,new C.fqI(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bxq(b1,b2),$async$afb)
case 5:case 4:if(b0===-1){u=b2.aAn(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){o=r[p]
s.m(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.m(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.wM?i:l.c
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
s.m(0,m,l.aAi(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bg<2>")
s=A.z(new A.bg(s,k),k.k("G.E"))
k=a5?D.rR:D.k7
u=t.xG(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.P_(b1,a8),$async$afb)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLI(B.a.i(b3.toLowerCase()),u),$async$afb)
case 9:case 8:return A.h(null,v)}})
return A.i($async$afb,v)},
fZa(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.Q(Date.now(),0,!1).a5().ab(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("J<1,a1<n,@>>"),k=A.z(new A.J(m,C.h5k(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ab(),"updatedAt",o],r,x.K),"createdAt",s.a5().ab(),"updatedAt",o],r,x.z)},
fZb(d,e){var w=new A.Q(Date.now(),0,!1).a5().ab(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("J<1,a1<n,@>>")
u=A.z(new A.J(u,C.h5k(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ab(),"updatedAt",w],x.N,x.z)},
hxG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aif(A.a_(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fK5(),A.U(j).k("J<1,n>")).bZ(0,new C.f__())
t=A.z(j,j.$ti.k("G.E"))
if(u===v)s=D.rR
else s=B.d.t(t,u)?D.Kz:D.k7
return w.aAn(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aif(A.a_(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d5(q,h)
h=A.cz(h,new C.f_0(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a4<G.E>")
o=A.z(new A.a4(h,new C.f_1(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b5(n,new C.f_2(),x.N).bZ(0,new C.f_3())
t=A.z(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rR
else s=B.d.t(t,u)?D.Kz:D.k7
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bh(J.k(l==null?"":l))
if(l==null)l=new A.Q(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kp(h,r,p,!m,t,o,l,j,v,s)},
f_c(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f_c=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.f_g()
h=x.N
g=x.z
w=7
return A.b(A.iD(A.a([A.lb("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bE),r.$2(A.lb("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bE),"collaborator"),r.$2(A.lb("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bE),"public")],x.cl),x.U),$async$f_c)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.z(p,g)
l=h
J.fU(l,o)
J.fU(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.aa(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bg<2>")
h=A.cz(new A.bg(l,h),new C.f_d(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a4<G.E>")
l=A.z(new A.a4(h,new C.f_e(),l),l.k("G.E"))
B.d.b_(l,new C.f_f())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a6(a1)
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
return A.i($async$f_c,v)},
hzY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gai(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f3o(),v).bZ(0,new C.f3p())
t=A.d7(u,u.$ti.k("G.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Fb(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.k7){m=q.e
m=!new A.J(m,A.fK5(),A.U(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.m(0,p,q)}for(j=j.gah(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hIC(l,v)
o=C.Fb(k,w)
p=v.d
s.m(0,u,o===w?k.b7_(p,D.rR):k.b7_(p,v.y))}j=s.$ti.k("bg<2>")
j=A.z(new A.bg(s,j),j.k("G.E"))
B.d.b_(j,new C.f3q())
return j},
P_(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$P_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$P_)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b5(e,new C.f5q(),x.a)
s=A.z(s,s.$ti.k("ai.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.al(s,null)),$async$P_)
case 3:return A.h(null,v)}})
return A.i($async$P_,v)},
aLI(d,e){return C.hF_(d,e)},
hF_(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLI=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lC("family_trees",A.a([C.fZa(e,d)],p),null,B.cA),$async$aLI)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lC("family_trees",A.a([C.fZb(e,d)],p),null,B.cA),$async$aLI)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a6(n)
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
return A.i($async$aLI,v)},
aLJ(d,e){return C.hF0(d,e)},
hF0(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLJ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("J<1,a1<n,@>>")
m=n.k("ai.E")
l=A.z(new A.J(e,new C.f9Z(d),n),m)
r=l
w=7
return A.b(A.lC("family_trees",r,null,B.cA),$async$aLJ)
case 7:q=g
if(q){u=!0
w=1
break}k=A.z(new A.J(e,new C.fa_(d),n),m)
p=k
w=8
return A.b(A.lC("family_trees",p,null,B.cA),$async$aLJ)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a6(i)
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
return A.i($async$aLJ,v)},
eZy(d){return C.hx4(d)},
hx4(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eZy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Pn("family_trees",A.E(["id",d],x.N,x.z),null,B.cA),$async$eZy)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a6(p)
$.al.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$eZy,v)},
qp:function qp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l5:function l5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqV:function cqV(){},
cqU:function cqU(){},
cqS:function cqS(){},
cqT:function cqT(){},
Ge:function Ge(d,e){this.a=d
this.b=e},
hQ:function hQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aie:function aie(d,e){this.a=d
this.b=e},
fbq:function fbq(){},
fyA:function fyA(d){this.a=d},
faC:function faC(d){this.a=d},
kp:function kp(d,e,f,g,h,i,j,k,l,m){var _=this
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
bJz:function bJz(){},
bJy:function bJy(){},
bJv:function bJv(){},
bJw:function bJw(){},
bJx:function bJx(){},
f2K:function f2K(){},
eZu:function eZu(){},
eZv:function eZv(){},
eZw:function eZw(){},
fr0:function fr0(){},
fr1:function fr1(){},
fr2:function fr2(){},
fr3:function fr3(d){this.a=d},
fr4:function fr4(){},
fyy:function fyy(d){this.a=d},
fbS:function fbS(d){this.a=d},
fe1:function fe1(){},
fe2:function fe2(){},
fe3:function fe3(){},
fe4:function fe4(){},
fe5:function fe5(d){this.a=d},
fqO:function fqO(d){this.a=d},
fyt:function fyt(){},
fyu:function fyu(){},
fyv:function fyv(d){this.a=d},
fbz:function fbz(d){this.a=d},
fbA:function fbA(d){this.a=d},
fyE:function fyE(){},
fba:function fba(d){this.a=d},
fbb:function fbb(d,e){this.a=d
this.b=e},
fbc:function fbc(){},
fyl:function fyl(d){this.a=d},
feO:function feO(){},
fqK:function fqK(){},
fdZ:function fdZ(){},
fe_:function fe_(){},
fe0:function fe0(){},
fqI:function fqI(d){this.a=d},
f__:function f__(){},
f_0:function f_0(){},
f_1:function f_1(){},
f_2:function f_2(){},
f_3:function f_3(){},
f_g:function f_g(){},
f_h:function f_h(d){this.a=d},
f_d:function f_d(d){this.a=d},
f_e:function f_e(){},
f_f:function f_f(){},
f3o:function f3o(){},
f3p:function f3p(){},
f3q:function f3q(){},
f5q:function f5q(){},
f9Z:function f9Z(d){this.a=d},
fa_:function fa_(d){this.a=d},
cqW:function cqW(d,e){this.a=d
this.b=e},
cqX:function cqX(d,e){this.a=d
this.b=e},
aDZ:function aDZ(d,e,f){this.a=d
this.b=e
this.c=f},
b5c:function b5c(){this.b=this.a=0},
b5b:function b5b(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
brZ:function brZ(){},
w1(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcb()+"/"+w.gcr()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aS(B.o.u(w.gmF()),2,"0")+":"+B.a.aS(B.o.u(w.gEZ()),2,"0")},
hnW(){var w,v=$.oZ(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fN(u)},
apI(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$apI)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eV("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bE),$async$apI)
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
p=A.a6(m)
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
return A.i($async$apI,v)},
apJ(d){return C.hnX(d)},
hnX(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apJ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$apJ)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.ht("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z),!1,!1,B.cA,null),$async$apJ)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a6(p)
$.al.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apJ,v)},
apL(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$apL)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hnW()
w=4
return A.b(C.apI(),$async$apL)
case 4:r=h
q=B.a.i(e)
p=B.dG.aG(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cR.gcs().aG(p),"usesRemaining",25,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.K))
w=5
return A.b(C.apJ(r),$async$apL)
case 5:u=new A.Zc("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apL,v)},
apK(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bX(),$async$apK)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apI(),$async$apK)
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
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=B.c1.c6(0,B.cw.aG(t))}catch(h){r=A.a6(h)
$.al.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dS(A.a_(o,n,m),n,m)
m.m(0,"usesRemaining",j)
m.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ab())
p.m(q,i,m)}w=5
return A.b(C.apJ(q),$async$apK)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apK,v)},
fTL(){var w=new A.Q(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cB.aB(999999)},
hnY(d){var w,v,u,t,s,r,q
try{w=A.ae2(d)
if(w==null)return d
v=w
if(J.JQ(v)>960||J.JP(v)>960){s=v
r=J.JQ(v)>=J.JP(v)?960:null
v=A.ae1(s,J.JP(v)>J.JQ(v)?960:null,B.LO,r)}s=v
u=A.ajE(82).Ri(s,B.xw)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cm(u))
return s}catch(q){t=A.a6(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cbf(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cbf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hnY(e)
$.cbb.m(0,s,t)
u=C.bzn(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cbf,v)},
b_0(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_0=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cW(l,"data:image")){u=null
w=1
break}t=4
r=J.eR(l,",")?B.d.gaj(J.ld(l,",")):l
q=B.cw.aG(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.fTL()
w=7
return A.b(C.cbf(p,q),$async$b_0)
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
n=A.a6(k)
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
return A.i($async$b_0,v)},
cbc(d){var w=0,v=A.j(x.T),u,t,s
var $async$cbc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cbe(s),$async$cbc)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cR.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cbc,v)},
a6o(d){var w=0,v=A.j(x.H),u,t
var $async$a6o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h5d(d)
if(t==null){w=1
break}$.cbb.W(0,t)
w=3
return A.b(C.bzm(t),$async$a6o)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a6o,v)},
bzn(d,e){return C.hOH(d,e)},
hOH(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bzn=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKG
w=7
return A.b(n==null?$.aKG=I.fGR():n,$async$bzn)
case 7:r=g
q=new Uint8Array(A.cm(e))
p=J.mn(r,"thumbs","readwrite")
B.iy.lM(J.ml(p,"thumbs"),q,l)
w=8
return A.b(J.p0(p),$async$bzn)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a6(k)
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
return A.i($async$bzn,v)},
bzm(d){return C.hOF(d)},
hOF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bzm=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKG
w=7
return A.b(o==null?$.aKG=I.fGR():o,$async$bzm)
case 7:r=f
q=J.mn(r,"thumbs","readwrite")
B.iy.Ew(J.ml(q,"thumbs"),m)
w=8
return A.b(J.p0(q),$async$bzm)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a6(l)
$.al.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzm,v)}},D,Af,Ag,P,Ah,Ai,I,Aj,Q,A_
J=c[1]
A=c[0]
B=c[2]
A0=c[95]
A1=c[193]
G=c[173]
F=c[30]
E=c[183]
N=c[108]
A2=c[110]
A3=c[161]
R=c[124]
A4=c[192]
A5=c[36]
M=c[191]
A6=c[79]
H=c[85]
S=c[130]
T=c[133]
U=c[204]
V=c[162]
A7=c[153]
A8=c[165]
W=c[160]
A9=c[63]
Aa=c[69]
Ab=c[209]
X=c[177]
Ac=c[29]
Ad=c[142]
L=c[155]
Ae=c[166]
Y=c[207]
Z=c[200]
K=c[100]
O=c[67]
C=a.updateHolder(c[6],C)
D=c[203]
Af=c[68]
Ag=c[171]
P=c[206]
Ah=c[205]
Ai=c[55]
I=c[53]
Aj=c[75]
Q=c[208]
A_=c[122]
C.alM.prototype={}
C.aVm.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bbc(),f=h.x!=null&&h.y6(i).length===0
if(h.x!=null)w=f?B.aW:B.bO
else w=h.gRW()?B.bO:B.e_
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b5L,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.epm,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.fX,i,i,i),B.T,D.eRr,B.av,A.d(C.w1(new A.Q(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eNB,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aSw,i,i,i,i,B.VE,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fIG(h.d)
o=A.p(B.A,C.aVl(A.fhb(h.e,n),30),B.h,i,i,new A.o(B.lR,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eJ4,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bA,D.eRI,B.ab,A.p(i,A.v(A.a([D.f52,B.bA,A.d(A.zM(h.c),i,i,i,i,i,i,D.eEj,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f0,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,p,q,i,i,B.n),i,i,i,i,L.acV,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMF("Original due",C.w1(h.r,!1))
n=j.aMF("Current due",C.w1(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.v(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGV(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zE,i,i,1/0),B.T,j.c7r(),B.P,j.bWW(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.v(A.a([D.eSD,B.av,A.d(q,i,i,i,i,i,i,D.eIq,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaBX()){q=A.m(14)
o=A.H(B.cp,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.v(A.a([D.f6e,B.P,A.bu(A.m(12),A.ed(new A.a5(1/0,88,A.b2(i,i,i,new A.U6(h.ax,B.M,D.esJ,!0,3.5,i),B.at),i),B.c,!0),B.ao)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.DO,i,i,i)],s))}p.push(B.ay)
p.push(D.f__)
return A.p(i,A.v(A.a([r,new A.C(B.acY,A.v(p,B.ag,i,B.e,B.j,0,B.p),i)],s),B.ag,i,B.e,B.R,0,B.p),B.ao,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMF(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4I,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eFi,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c7r(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6R(B.e_,u,"Not paid yet")
w=t.y6(null).length
v=w===0?B.aW:B.bO
return this.a6R(v,u,C.w1(t.x,!0))},
bWW(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6R(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6R(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4I,u,u,u)
v=A.U(d).k("J<1,hb>")
v=A.z(new A.J(d,new C.bY5(),v),v.k("ai.E"))
return A.v(A.a([w,B.ar,A.c9(B.bJ,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6R(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4I,w,w,w),1),new A.dm(1,B.cl,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b7l.prototype={
a4(d,e){new A.U6(this.b,B.M,e,!0,3.5,null).a4(d,e)},
ar(d){return d.b!==this.b}}
C.alT.prototype={
S(){return new C.azW(A.a([],x.bp))},
gdT(){return this.c}}
C.azW.prototype={
Z(){this.a0()
this.Hn()},
Hn(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_X(t.a.c),$async$Hn)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dyN(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hn,v)},
aOw(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aN,s=A.l(v,v,u?B.bq:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bv).j(0.22)
w=A.m(10)
return A.bn(v,new A.b3(4,r,new A.ay(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b3(4,w,new A.ay((this.a.d.a?B.bq:B.bv).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b3(4,A.m(10),D.aQ9),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aOv(d){return this.aOw(d,null)},
NK(d){return this.cb_(d)},
cb_(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NK=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.F2:B.ez
w=7
return A.b(new A.hR().B2(72,900,900,n),$async$NK)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$NK)
case 8:p=f
n=B.cR.gcs().aG(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a6(l)
n=r.c
if(n!=null)n.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$NK,v)},
aWD(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aN,o=A.m(10),n=A.H((q?B.bq:B.bv).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bq:B.bv
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aN:B.aF,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bq:B.bv
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a3,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c8)
q=A.a([q,B.aa,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.ct,s.a.d.a?B.bq:B.bv,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c8))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ky,D.bg5,r,r,r)},
BZ(d){return this.btX(d)},
btW(){return this.BZ(null)},
btX(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BZ=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.av()
r=new A.ap(new A.bc(a4,B.b2,B.aM),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jA(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.a9(p,2)}o=new A.ap(new A.bc(a4,B.b2,B.aM),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ap(new A.bc(a4,B.b2,B.aM),s)
if(a3){a4=new A.Q(Date.now(),0,!1).bN(6048e8)
m=A.bW(a4.gcd(),a4.gcb(),a4.gcr(),0,0,0,0,0)}else{a4=a5.f
m=A.bW(a4.gcd(),a4.gcb(),a4.gcr(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bj(a4,!0,x.cT)
i=a3?null:A.fIG(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.v0?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.x.j(0.55),!0,"Dismiss",a4,new C.dyw(),new C.dyx(a2,t,a5,r,new C.dyy(a2,t),o,n,j),B.eL,!0,x.y),$async$BZ)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d9(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.H(x.q).f.P(D.ez4)
w=1
break}a0=a2.d
if(a0==null){t.c.H(x.q).f.P(D.exK)
w=1
break}a1=A.fhb(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.v0?"male":"female"
w=7
return A.b(A.afn(a3,A.fQw(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BZ)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.v0?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bW(a3.gcd(),a3.gcb(),a3.gcr(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bW(a4.gcd(),a4.gcb(),a4.gcr(),0,0,0,0,0)))a5.cCN(a2.a)
w=8
return A.b(A.afn(t.a.c,a5),$async$BZ)
case 8:case 5:w=9
return A.b(t.Hn(),$async$BZ)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BZ,v)},
aP5(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aN
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bv).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aVl(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aN:B.aF
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b7,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ad)},
Qj(d){return this.crR(d)},
crR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.x.j(0.55),!0,"Dismiss",s,new C.dyQ(),new C.dyR(t,d),B.hS,!0,x.y),$async$Qj)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.Q(s,0,!1)
case 4:w=7
return A.b(A.afn(t.a.c,d),$async$Qj)
case 7:w=8
return A.b(t.Hn(),$async$Qj)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
Mq(d,e){return this.bEv(0,e)},
bEv(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kR(s,"Cancel","Delete",e.b+" \xb7 "+A.zM(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mq)
case 3:if(!g){w=1
break}w=4
return A.b(C.fbG(t.a.c,e.a),$async$Mq)
case 4:w=5
return A.b(t.Hn(),$async$Mq)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mq,v)},
aca(d){return this.c50(d)},
c50(d){var w=0,v=A.j(x.H),u=this,t
var $async$aca=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c2(B.K,null,new C.dyK(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aca)
case 2:return A.h(null,v)}})
return A.i($async$aca,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dQD
w=J.dE(m.d,new C.dyS())
v=A.z(w,w.$ti.k("G.E"))
w=J.dE(m.d,new C.dyT())
u=A.z(w,w.$ti.k("G.E"))
t=B.d.cG(v,0,new C.dyU())
w=A.m(18)
s=m.a.d.a
r=s?D.ca1:D.asK
q=A.H(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bDv,B.h,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aF,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.a1,!0,A.m(12),A.aI(!1,A.m(12),!0,D.dQ4,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dyV(m),l,l,l,l,l,l,l),B.h,B.cY,0,l,l,l,l,l,B.ad)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.coc("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zM(t)
r=A.a([A.p(l,A.v(A.a([s,B.ab,A.B(A.a([o,B.aa,A.D(m.b1w(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a3(B.ax,B.aC,B.w,r,l,l),B.n),l,l,l,l,B.acS,l,l,l),B.ay],p)
if(J.cj(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bq:B.bv).j(0.12),B.r,1)
n=A.p(l,D.byA,B.h,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aF,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ab,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bv,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.biy,l,l,1/0))}else{w=m.gcai()
s=A.z(new A.J(v,w,A.U(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.bkb,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bv,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.U(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.ag,l,B.e,B.j,0,B.p)},
b1w(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.x.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bq:B.bv).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bv,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aN:B.aF
return A.p(u,A.v(A.a([q,B.bA,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.em,u,u,u)},
coc(d,e){return this.b1w(!1,d,e)},
caj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y6(j).length,h=d.bap()
if(d.x!=null){w=d.y6(j).length
v=w===0?B.cY:B.bO}else if(d.gRW())v=B.bO
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bv
v=w}if(d.x!=null){w=d.y6(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.w1(u,!1)}else{u.toString
t="Paid "+C.w1(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.w1(w,!1)+" \xb7 "+i+" missed":"Due "+C.w1(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRW()&&d.x==null)s=B.bO.j(0.35)
else s=(k.a.d.a?B.bq:B.bv).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.x.j(0.04),B.cF,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lR
o=A.H(d.gRW()&&d.x==null?B.bO.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fIG(d.d)
o=A.p(B.A,A.d8(C.aVl(A.fhb(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aN:B.aF
m=x.p
n=A.a([new A.dm(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBX())B.d.v(n,A.a([B.eA,A.V(B.KY,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d4,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zM(d.c)
l=k.a.d.a?B.aN:B.aF
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.a1,!0,j,A.aI(!1,q,!0,new A.C(U.acD,A.B(A.a([o,B.bd,p,B.aa,A.v(A.a([n,B.bA,A.V(B.eo,(k.a.d.a?B.bq:B.bv).j(0.5),j,j,j,18)],m),B.dH,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dyM(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ad),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.tH.prototype={}
C.aid.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bf
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.H(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.G,B.x.j(0.45),B.cs,16)],x.V)
o=x.p
n=A.a([],o)
m=B.x.j(t?0.07:0.3)
l=A.H(r.j(0.6),B.r,1)
n.push(A.aH(a0,A.p(a0,A.V(B.ct,t?a1.f:B.c,a0,a0,a0,17),B.h,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.ae))
m=v?B.a4:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.kx,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.apr,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.E1,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f_(m,A.B(l,B.m,a0,B.e,B.R,0,a0,a0),B.h,B.eb)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bfk,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cx:B.bi,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fs,A.v(a2,u,a0,B.e,B.R,0,B.p),a0),1))
n.push(D.ett)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.ui,A.p(a0,a0,B.h,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a3(B.a4,B.a7,B.w,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.kZ,A.v(a2,B.m,a0,B.e,B.R,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,A.H(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.h9,a0,a0,a0,a0)}return A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,q,s,p,new A.a3(B.ax,B.aC,B.w,a1.d,a0,a0),B.n),a0,a0,a0,D.bgx,a0,a0,a0,a0)}}
C.aRd.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.h,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bf?B.bf:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bi:B.cx,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.d4,n],m)
if(p.z)o.push(new A.C(B.zD,n,q))
return new A.C(B.da,A.v(o,B.m,q,B.e,B.R,0,B.p),q)}}
C.QX.prototype={
S(){return new C.baU()}}
C.baU.prototype={
gbS7(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.dQy,D.dQE],l)
for(w=0;w<8;++w){v=D.Zy[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.EL:B.Ap
q=t===s
r=A.V(r,q?B.ex:B.c2,n,n,n,17)
q=q?B.c:B.af
r=A.a([r,B.bp,new A.w(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.aa,new A.bH(1,B.bo,new A.w(v.c,n,Aj.BY,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.b1(24,24)
p=new A.ay(B.ex,2,B.r,-1)
s=new A.o(n,n,new A.c1(p,p,p,p),new A.bv(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aH(n,new A.C(B.ey,A.v(A.a([new A.C(B.m_,new A.cC(B.b0,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.CP(!0,new C.aid(v,q.d,q.e,new C.d_e(),n,n),n),B.h,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_f(o,v),n,n,n,n,n,n,!1,B.ae))}k.push(new A.C(D.bgQ,A.bL(D.fbb,new C.d_g(o,d),A.bk(B.b3,n,n,n,n,B.nK,n,n,new A.b6(A.m(16),B.X),n,n,n)),n))
return A.bq(!0,new A.d1(new A.aW(0,1/0,0,m.a.b*0.9),A.cM(k,n,D.bl2,n,n,B.ak,!0),n),!0,!1,B.ah,!0,!0)}}
C.mT.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ab()],x.N,x.z)},
b7b(d,e,f){return new C.mT(this.a,e,d,f)}}
C.Gd.prototype={
vv(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Gd(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aAc(d){var w=null
return this.vv(w,w,w,w,w,d,w,w,w,w,w,w)},
cyF(d){var w=null
return this.vv(w,w,w,w,d,w,w,w,w,w,w,w)},
b79(d,e,f){var w=null
return this.vv(d,w,w,w,w,w,w,w,e,w,f,w)},
czj(d){var w=null
return this.vv(w,w,w,w,w,w,d,w,w,w,w,w)},
czs(d){var w=null
return this.vv(w,w,w,w,w,w,w,w,w,d,w,w)},
cyD(d){var w=null
return this.vv(w,w,w,d,w,w,w,w,w,w,w,w)},
czu(d){var w=null
return this.vv(w,w,w,w,w,w,w,w,w,w,w,d)},
cyA(d){var w=null
return this.vv(w,w,d,w,w,w,w,w,w,w,w,w)},
cyv(d){var w=null
return this.vv(w,d,w,w,w,w,w,w,w,w,w,w)},
Ep(d){var w=null
return this.vv(w,w,w,w,w,w,w,d,w,w,w,w)},
czC(d,e,f,g,h,i,j,k,l,m,n){return this.vv(d,e,f,g,null,h,i,j,k,l,m,n)},
ac(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cwt(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bJu(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cK(d.h(0,n))).length!==0?B.a.i(A.cK(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cK(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.B1.gec(D.B1))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a_Y)
q=l.$2("frame",D.a_s)
l=l.$2("texture",D.a_n)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cK(d.h(0,"author"))):o
return this.czC(p,u,t,q,r,A.ti(d.h(0,"ribbon"))?A.EO(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Xo.prototype={
S(){return new C.ax2(A.a([],x.I),D.Ky)},
gdT(){return this.c}}
C.ax2.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yG(0,1)
w=$.av()
v.z=new A.ap(B.as,w)
v.Q=new A.ap(B.as,w)
v.kv()
w=v.a
C.bxN(w.c,w.d).by(new C.d_V(v),x.fL)},
p(){var w,v=this,u=v.f
u===$&&A.c()
u.p()
u=v.z
u===$&&A.c()
w=$.av()
u.R$=w
u.O$=0
u=v.Q
u===$&&A.c()
u.R$=w
u.O$=0
v.a2()},
kv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Jj(s.c,s.d),$async$kv)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.d_J(t,r))
t.ast()
case 1:return A.h(u,v)}})
return A.i($async$kv,v)},
gap8(){var w,v=this
if(!J.cj(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
ast(){var w,v,u=this.gap8(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saU(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saU(0,w==null?"":w)},
c3r(d){this.n(new C.d_G(this,d))
this.ast()},
LM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mT(B.o.u(1000*Date.now()),"Untitled page","",new A.Q(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aNt(r.c,r.d,s),$async$LM)
case 3:w=4
return A.b(t.kv(),$async$LM)
case 4:if(t.c==null||J.cj(t.d)){w=1
break}q=J.pL(t.d,new C.d_h(s))
p=q>=0?q:J.aa(t.d)-1
t.n(new C.d_i(t,p))
t.ast()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A7(p+1,B.co,B.kv),$async$LM)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LM,v)},
zO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gap8()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aNt(o.c,o.d,new C.mT(s,r,q,new A.Q(p,0,!1))),$async$zO)
case 3:w=4
return A.b(t.kv(),$async$zO)
case 4:if(t.c==null){w=1
break}t.n(new C.d_K(t))
case 1:return A.h(u,v)}})
return A.i($async$zO,v)},
Mr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gap8()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.d_q(r),s,null,!0,!0,x.y),$async$Mr)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bxz(s.c,s.d,r.a),$async$Mr)
case 4:t.n(new C.d_r(t))
w=5
return A.b(t.kv(),$async$Mr)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RZ(B.o.E(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mr,v)},
xo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zO(),$async$xo)
case 5:case 4:if(t.c==null){w=1
break}w=J.ct(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Pg(s,r.r,o,p,q),$async$xo)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a9(s,!1).M(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h5I(s,r.x,r.r),$async$xo)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Jj(s.c,s.d),$async$xo)
case 10:l=e
for(s=n.d,r=J.cA(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.mT(""+(m+k),q,B.a.i(j.b),new A.Q(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zV(r.c,r.d,l),$async$xo)
case 11:w=12
return A.b(t.kv(),$async$xo)
case 12:r=t.c
if(r==null){w=1
break}r.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xo,v)},
Zj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zO(),$async$Zj)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxm(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dI(D.xD,new C.d_H(t),new C.d_I())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m7("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gT(o)
p.push(new F.m7(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fKh(o,new F.qJ(s,r,"",p,new F.u_(q.d,null,null,null,null,"","","")),null),$async$Zj)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Zj,v)},
M9(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$M9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zO(),$async$M9)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c2(D.a8R,null,new C.d_m(t),s,!0,!0,!0,D.aH5,!1,!1,x.N),$async$M9)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cyF(r)
t.n(new C.d_n(t,q))
s=t.a
w=7
return A.b(C.PP(s.c,s.d,q),$async$M9)
case 7:case 1:return A.h(u,v)}})
return A.i($async$M9,v)},
V2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c2(D.a8R,null,new C.d_s(t),r,!0,!0,!0,D.aH5,!1,!1,x.e),$async$V2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.d_t(t,s))
r=t.a
w=4
return A.b(C.PP(r.c,r.d,s),$async$V2)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A7(0,B.dS,B.o6)
case 1:return A.h(u,v)}})
return A.i($async$V2,v)},
bJw(d){var w=d.bQ(),v=B.a.aS(B.o.u(w.gcb()),2,"0"),u=B.a.aS(B.o.u(w.gcr()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gxm(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bRo()
if(r.e)w=D.a7Y
else if(J.cj(r.d)){w=r.y
v=r.gxm(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eDN,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.C(Z.adS,new C.WH(w,v,0,q),q),q),B.bu,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k1.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aH(q,A.p(q,D.epc,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ab(0,B.G,B.dI.j(0.45),B.J,18)],x.V),E.uR,B.n),q,q,q,q,B.VO,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcvE(),q,q,q,q,q,q,!1,B.ae))
w.push(B.T)
w.push(A.hh(D.buU,D.faH,r.gaIC(),q))
B.d.v(u,w)}w=A.au(A.ci(A.v(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.eq,q,q,B.ak),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k1.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dL:B.yT
u=A.v(A.a([new A.C(D.bhS,w,q),A.D(A.Hu(v,new C.d_T(r),J.aa(r.d)+1,q,r.gc3q(),u,B.b0),1),r.bwL()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.ce(q,D.a9W,new A.am(B.W,q,B.b_,B.q,A.a([D.aFC,A.bq(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],v),q),q,!1,!1,q,q)},
bRo(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.ct(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Ir(B.dQ,"AI",h.gbuI(),!0))
if(h.a.f)f.push(new C.Ir(B.nx,"Cover",h.gbF4(),!1))
if(h.a.f)f.push(new C.Ir(B.xg,"Header",h.gbA8(),!1))
if(J.ct(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Ir(B.t5,"Print",h.gcce(),!1))
if(h.a.f&&J.ct(h.d)&&h.r>=0){v=h.w
u=v?B.hq:B.j3
t=v?"Save":"Edit"
f.push(new C.Ir(u,t,v?h.gcic():new C.d_D(h),!1))}if(h.a.f)f.push(new C.Ir(B.hD,"Add page",h.gaIC(),!1))
v=C.h1U(h.y.Q)
u=h.gxm(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.aa(h.d)
r=J.aa(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d88
else{k=new A.b1(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jy.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.k1,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c1(i,i,i,i),new A.bv(k,k,k,k),g,new A.a3(B.a4,B.a7,B.w,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k1.j(0.85)
p.push(new A.bH(1,B.bo,A.aH(B.c5,A.v(A.a([k,B.bA,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ae),g))}return new C.aid(v,u,t+" \xb7 "+s+" "+r,new C.d_E(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
yS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zO(),$async$yS)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a0b(B.d.aF(s," "))
s=t.c
s.toString
w=6
return A.b(A.ch(null,null,!0,null,new C.d_j(t,p),s,null,!0,!0,x.N),$async$yS)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xo(),$async$yS)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cx(),$async$yS)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.E4("Swahili (Kiswahili)",!0),$async$yS)
case 18:w=16
break
case 17:w=19
return A.b(t.css(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yS)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yS,v)},
WU(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.jy.j(0.3),B.r,1),r=x.p
return new A.C(B.cM,A.aI(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uR,B.a6),w,42,w,w,w,w,w,42),B.bd,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A6.R3,w,w,w),A.d(g,w,w,w,w,w,w,E.a4c,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d_F(d,h),w,w,w,w,w,w,w),w)},
Cx(){return this.bJ0()},
bJ0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cx=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.d_w(r),a7,null,!0,!0,x.ei),$async$Cx)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.z(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.av())
a6.a=!0
a7=r.c
a7.toString
A.ch(null,null,!1,null,new C.d_x(o),a7,null,!0,!0,x.H).f4(new C.d_y(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cb(l,new A.A(k.b,k.c))}d=r.r
a0=r.y.ac()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xD[a1]
J.cb(j,i.a)}w=8
return A.b(C.aeA(a0,a7,new C.d_z(o),d,l,e,j),$async$Cx)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a6(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a9(l,!0).eD()
l=o
l.shI($.av())
J.aNV(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.H(x.q).f
j=n
l.P(A.b0(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gci(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.an(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b7b(m.b.h(0,a4).b,a7,new A.Q(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zV(j.c,j.d,l),$async$Cx)
case 11:w=12
return A.b(r.kv(),$async$Cx)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xD[a1].a)
a5=l.cwt(j,12,a7)
l=r.a
w=15
return A.b(C.PP(l.c,l.d,a5),$async$Cx)
case 15:if(r.c!=null)r.n(new C.d_A(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A7(0,B.dS,B.o6)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.H(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b0(a3?A.clz("Undo",new C.d_B(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ec,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cx,v)},
E4(d,e){return this.cst(d,e)},
css(d){return this.E4(d,!1)},
cst(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$E4=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.z(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.av())
f.a=!0
k=r.c
k.toString
A.ch(null,null,!1,null,new C.d_M(a0),k,null,!0,!0,x.H).f4(new C.d_N(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cb(o,new A.A(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a0o(m,new C.d_O(a0)),$async$E4)
case 10:w=8
break
case 9:w=11
return A.b(C.bze(new C.d_P(a0),m,a2),$async$E4)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a6(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a9(o,!0).eD()
o=a0
o.shI($.av())
J.aNV(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.H(x.q).f
k=q
o.P(A.b0(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b7b(J.q(p,g).b,j.a,new A.Q(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zV(k.c,k.d,o),$async$E4)
case 12:w=13
return A.b(r.kv(),$async$E4)
case 13:o=r.c
if(o==null){w=1
break}o=o.H(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b0(A.clz("Undo",new C.d_Q(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$E4,v)},
bwL(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d_k(v):u
r=A.aF(u,u,u,u,A.V(D.bqD,s?D.k1:B.b9,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.ct(v.d)&&!v.w&&v.r>=0)s=A.hh(A.V(B.ut,B.Dr,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Dr,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbEE(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k1.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.au(s,u,u,u),1)
w=t<J.aa(v.d)?new C.d_l(v):u
return A.bq(!0,new A.C(D.bhG,A.B(A.a([r,s,A.aF(u,u,u,u,A.V(B.eo,t<J.aa(v.d)?D.k1:B.b9,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ah,!0,!1)}}
C.Xs.prototype={
S(){return new C.bbe(new A.ap(B.as,$.av()))}}
C.bbe.prototype={
ga_q(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
gbHO(){var w,v=this.ga_q()
A:{if("cover"===v){w=D.cFv
break A}if("book"===v){w=D.cBz
break A}w=D.d1a
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jy.j(0.5),n=x.p,m=A.B(A.a([D.d89,B.aw,D.bmT,A.aF(q,q,q,q,B.l4,q,q,q,new C.d1l(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jS(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d1m(r),r.ga_q()==="page",q,q,q,q))
if(r.a.d)l.push(A.jS(q,q,q,D.f5N,q,new C.d1n(r),r.ga_q()==="book",q,q,q,q))
l.push(A.jS(q,q,q,D.eV4,q,new C.d1o(r),r.ga_q()==="cover",q,q,q,q))
l=A.c9(B.bJ,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bn(q,new A.b3(4,A.m(16),B.X),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kl,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbHO(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mN(q,B.c.j(0.08),new A.w(s,q,B.Hk,q,q,q,q,q,q,q,q,q),B.hs,new C.d1p(r,s),q,q,q,q))}return A.ew(q,E.zj,A.ci(A.v(A.a([m,B.T,D.f8J,B.ar,l,B.ab,k,B.P,A.c9(B.bJ,w,B.bx,6,6),B.ay,A.dq(D.buR,D.f9u,new C.d1q(r,d),A.bk(B.b3,q,q,q,q,B.nK,q,q,new A.b6(A.m(16),B.X),q,q,q)),B.av,D.f4f],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.fB,q,q,B.ak),q,q,q,D.adB,B.cZ,q,new A.b6(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.Xq.prototype={
S(){return new C.ax3(A.a([],x.Y))},
gdT(){return this.c}}
C.acq.prototype={}
C.ax3.prototype={
Z(){this.a0()
this.kv()},
kv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Pj(p.c,p.d),$async$kv)
case 3:o=e
n=A.a([],x.Y)
p=J.aU(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bxN(r.c,q),$async$kv)
case 6:j=e
i=J
w=7
return A.b(C.Jj(t.a.c,q),$async$kv)
case 7:m.push(new l.acq(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.d09(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kv,v)},
b2E(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
On(d,e){return this.c4Z(0,e)},
c4Z(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$On=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a9(s,!1).cp(A.eD(new C.d08(u,e),!0,null,x.y)),$async$On)
case 2:t=g
w=3
return A.b(u.kv(),$async$On)
case 3:if(t===!0&&u.c!=null)u.c.H(x.q).f.P(D.aIV)
return A.h(null,v)}})
return A.i($async$On,v)},
E7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.H(x.q).f.P(D.aIR)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adW(s.c,s.d),$async$E7)
case 5:q=e
w=6
return A.b(t.kv(),$async$E7)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.On(0,B.d.kZ(t.d,new C.d0d(q))),$async$E7)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Pg(p,s.f,r,n,o),$async$E7)
case 10:m=e
w=11
return A.b(t.kv(),$async$E7)
case 11:if(m&&t.c!=null)t.c.H(x.q).f.P(D.aIV)
case 1:return A.h(u,v)}})
return A.i($async$E7,v)},
NR(d,e){return this.cg0(0,e)},
cg0(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.d0c(t,e),s,null,!0,!0,x.y),$async$NR)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0B(s.c,s.d,e.a),$async$NR)
case 4:w=5
return A.b(t.kv(),$async$NR)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bwO(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.jy.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aH(n,new A.fD(0.7142857142857143,A.p(n,A.v(A.a([D.d8a,B.ab,D.dPL,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k1.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b7,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcvA(),n,n,n,n,n,n,!1,B.ae))}w=A.m(22)
v=A.H(E.jy.j(0.85),B.r,1.6)
s=A.aH(n,A.p(n,D.bCl,B.h,n,n,new A.o(B.x.j(0.3),n,A.H(E.jy.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d0e(d),n,n,n,n,n,n,!1,B.ae)
r=A.m(14)
q=B.x.j(0.3)
p=A.H(E.jy.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bnc,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eCX,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.fX,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.bHa,B.n),n,n,n,Ah.Vm,D.bfL,n,n,n)
if(o.e)k=D.a7Y
else k=k.length===0?D.aXf:A.ck(new C.d0f(k))
return A.ce(n,D.a9W,new A.am(B.W,n,B.b_,B.q,A.a([D.aFC,A.bq(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],l),n),n,!1,!1,n,n)},
bwO(d){var w,v,u=this,t=null,s=u.b2E(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f_(B.A,new A.a5(300,420,new C.WH(d.b,s,r,t),t),B.h,B.dq),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aH(t,A.p(t,D.bBG,B.h,t,t,new A.o(B.x.j(0.55),t,A.H(B.b9,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d06(u,d),t,t,t,t,t,t,!1,B.ae),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eCz,t,t,t)
v=r===1?"page":"pages"
return A.aH(t,A.v(A.a([new A.fD(0.7142857142857143,new A.am(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k1.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d07(u,d),t,t,t,t,t,t,!1,B.ae)}}
C.Ir.prototype={}
C.WH.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dI(D.xD,new C.czG(m),new C.czH()),j=m.c,i=D.B1.h(0,j.e),h=A.aY(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.ma:B.b7
v=new C.czI(h)
i=A.a([new A.ab(0,B.G,B.x.j(0.6),D.dNe,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b2(l,l,l,new C.b8w(j.x,h,l),B.at),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a3(B.a4,B.a7,B.w,A.a([B.x.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b1(3,3)
t.push(new A.cG(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bv(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adT,8,0.85,2.2),v.$4(D.bku,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adT,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.bkq,A.b2(l,l,l,new C.b8n(h,l),B.at),l),0,0,0))
r=A.V(D.arW[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.apr,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.ab,p,B.ab,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cx,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.bkV,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aDU(l),D.esC),l,l,l,46,0,l))
return A.p(l,A.bu(D.a6F,new A.am(B.W,l,B.a9,B.q,t,l),B.ao),B.h,l,l,new A.o(l,l,l,D.a6F,i,new A.a3(B.ax,B.aC,B.w,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b8w.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eU()
f.dM(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.L()
w.r=B.x.j(0.07).gq(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.I()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.L()
q.r=B.c.j(0.05).gq(0)
q.c=1
for(p=0;p<u;p+=4){r=q.I()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.af()
l=f.af()
k=f.af()
$.W()
j=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.af()*0.5).gq(0)
r=j.I()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.W()
j=A.a([],l)
h=new A.aO(k.r,B.ap,null,null,j)
j.push(new A.b4(v,t))
k=i-0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gq(0)
r=k.I()
k=h.gbL().a.snapshot()
o.drawPath((h.e=new A.cD(k)).a,r)
r.delete()}break
default:$.W()
w=A.L()
w.r=B.x.j(0.07).gq(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.af()
m=f.af()
l=f.af()
r=w.I()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.L()
g.r=B.c.j(0.035).gq(0)
for(n=0;n<120;++n){o=f.af()
m=f.af()
l=f.af()
r=g.I()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ar(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b8n.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.L(),j=this.b
k.r=j.j(0.9).gq(0)
k.b=B.ac
k.c=2.4
k.d=B.bL
for(w=e.a,v=e.b,v=[D.ekG,new A.cH([w,0,-1,1]),new A.cH([0,v,1,-1]),new A.cH([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ap,null,null,s)
s.push(new A.b4(r+p*34,q))
s.push(new A.ao(r,q))
s.push(new A.ao(r,q+o*34))
m=k.I()
s=n.gbL().a.snapshot()
w.drawPath((n.e=new A.cD(s)).a,m)
m.delete()
s=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gq(0)
m=s.I()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ar(d){return!d.b.A(0,this.b)}}
C.tI.prototype={}
C.WZ.prototype={
S(){return new C.b8u()}}
C.b8u.prototype={
gnu(){var w=this.d
return w===$?this.d=this.a.c:w},
gxm(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ap(new A.bc(w.b,B.b2,B.aM),$.av())}return v},
gaxz(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ap(new A.bc(w.c,B.b2,B.aM),$.av())}return v},
ganJ(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ap(new A.bc(w.y,B.b2,B.aM),$.av())}return v},
p(){var w=this,v=w.gxm(0),u=v.R$=$.av()
v.O$=0
v=w.gaxz()
v.R$=u
v.O$=0
v=w.ganJ()
v.R$=u
v.O$=0
w.a2()},
aok(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jS(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cT7(this,f,u),e===u,s,s,s,s))}return A.c9(B.bJ,r,B.bx,6,8)},
atK(d){var w=null,v=B.c.j(0.07)
return A.bn(w,new A.b3(4,A.m(14),B.X),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lb,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnu(),a0=f.gxm(0),a1=a0.a.a,a2=f.gaxz(),a3=a2.a.a,a4=f.ganJ(),a5=d.b79(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a5(190,260,A.f_(B.A,new A.a5(270,370,new C.WH(a5,d,f.a.e,e),e),B.h,B.dq),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atK("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTw(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atK("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTx(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xD[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b9
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c1(o,o,o,o),e,e,new A.a3(B.ax,B.aC,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aH(e,A.v(A.a([p,B.d4,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTy(f,t),e,e,e,e,e,e,!1,B.ae))}v=A.c9(B.bJ,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b3.j(0.35):B.c.j(0.07)
m=new A.b1(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ex:B.K,2,B.r,-1)
q.push(A.aH(e,A.p(e,A.V(D.arW[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c1(o,o,o,o),new A.bv(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTz(f,n),e,e,e,e,e,e,!1,B.ae))}q=A.c9(B.bJ,q,B.bx,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atK("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTA(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mj,e,e,e)
m=A.a([],w)
for(l=D.B1.gdH(D.B1),l=l.gah(l);l.C();){k=l.gT(l)
j=A.aY(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ex:B.b9
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c1(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aH(e,A.v(A.a([j,B.bA,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTB(f,k),e,e,e,e,e,e,!1,B.ae))}m=A.c9(B.bJ,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mj,e,e,e)
k=f.gnu()
return new A.C(new A.N(0,0,0,a3.f.d),A.bq(!0,new A.d1(new A.aW(0,1/0,0,a1.a.b*0.92),A.cM(A.a([D.f3J,B.ab,d,B.aO,a0,B.T,a2,B.ay,D.f9i,B.P,v,B.ay,D.f3S,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.mg(e,9,""+B.k.U(f.gnu().f),36,18,new C.cTC(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mj,e,e,e),B.ar,f.aok(D.a_Y,f.gnu().r,new C.cTD(f),D.d4i),B.ab,A.d("BORDER",e,e,e,e,e,e,H.mj,e,e,e),B.ar,f.aok(D.a_s,f.gnu().w,new C.cTE(f),D.d4n),B.ab,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mj,e,e,e),B.ar,f.aok(D.a_n,f.gnu().x,new C.cTG(f),D.d5L),B.ar,A.ix(e,B.b3,e,B.ah,e,new C.cTH(f),e,e,e,D.eZz,f.gnu().z),B.bu,A.bL(D.f2E,new C.cTI(f,a6),A.bk(B.b3,e,e,e,e,B.nK,e,e,new A.b6(A.m(16),B.X),e,e,e))],w),e,P.adq,e,e,B.ak,!0),e),!0,!1,B.ah,!0,!0),e)}}
C.aDU.prototype={
a4(d,e){var w,v,u,t=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
t.D(new A.b4(0,0))
w=e.a
t.D(new A.ao(w,0))
v=e.b
t.D(new A.ao(w,v))
t.D(new A.ao(w/2,v-12))
t.D(new A.ao(0,v))
t.D(new A.bE())
u=A.L()
u.sap(D.bHN.au(0,new A.a7(0,0,0+w,0+v)))
d.aM(t,u)},
ar(d){return!1}}
C.bdH.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.L()
w.sap(D.bGR.au(0,new A.a7(0,0,a3,a4)))
a5.aX(new A.a7(0,0,a3,a4),w)
v=B.k.dE(a2/112)
u=new A.eU()
u.dM(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.cFu[u.aB(9)]
j=u.aB(14)
J.bD(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a7(n,j,n+m,j+l)
h=A.bC(i,B.h0)
g=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.x,0.45)
e.toString
g.sap(new A.a3(B.a4,B.a7,B.w,A.a([f,k,e],t),a0,a0).au(0,i))
d=g.I()
w.drawRRect(A.eZ(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
e.r=E.jy.j(0.55).gq(0)
d=e.I()
w.drawRect(A.c8(new A.a7(h,j,g,j+2)),d)
d.delete()
j=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
j.r=E.jy.j(0.4).gq(0)
d=j.I()
w.drawRect(A.c8(new A.a7(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
p.sap(D.bGc.au(0,new A.a7(0,r,a3,q)))
d=p.I()
w.drawRect(A.c8(new A.a7(0,r,a3,q)),d)
d.delete()
p=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=B.x.j(0.5).gq(0)
p.z=B.j7
d=p.I()
w.drawRect(A.c8(new A.a7(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b_k.j(0.72).gq(0)
a5.aX(new A.a7(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sap(new A.bR(B.A,0.5,B.w,a0,0,A.a([D.b5q.j(0.22),B.K],t),a0,a0).au(0,A.bT(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b6K.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ae("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cG(14,w*2,v*2.2,v*2,o,o,new A.kC(new A.o(A.aq(D.k1,D.b99,w/4),o,new A.c1(B.X,new A.ay(B.x.j(0.12),1,B.r,-1),B.X,B.X),B.In,o,o,B.n),B.bb,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.x.j(0.35),B.aBp,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.b1(2,2)
t.push(A.p(o,o,B.h,o,o,new A.o(E.jy.j(0.6),o,o,new A.bv(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.qC,B.j,0,B.p),B.h,o,o,new A.o(o,o,o,D.aPU,u,D.bHL,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.x.j(0.4),B.dn,18)],v)
t=A.an(o,A.b2(o,o,o,new C.aDU(o),D.esx),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aRd(p.y,r,G.ii,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.r,o,o,o,o,o,2,A.bn(o,B.eu,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ii.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.ePO,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ii.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.w,o,o,o,o,o,2,A.bn(o,B.eu,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ii.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eHe,!0,B.a5,B.ym,B.am,o,o,o,o),1)],m),B.ag,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.ePH,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ii.j(0.5),o,o,o,o,o,o,o,o,11,B.cx,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.D(A.p(o,o,B.h,D.De.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fs,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.De.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.h,D.De.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ii.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.VY(A.dl(A.a([A.dl(o,o,o,o,o,o,o,o,o,D.eKa,B.a.am(k,0,1)),A.dl(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ii.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ci(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.z,o,o,o,o,B.ak)}s.push(A.D(n,1))
s.push(new A.C(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ii.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.D(A.p(o,A.bu(B.In,new A.am(B.W,o,B.a9,B.q,A.a([t,new A.C(D.bjY,A.v(s,B.ag,o,B.e,B.j,0,B.p),o),A.an(0,A.bU(o,new A.o(o,o,o,o,o,new A.a3(B.a4,B.a7,B.w,A.a([B.x.j(0.16),B.K],x.O),o,o),B.n),B.bb),o,o,0,o,0,22)],m),o),B.ao),B.h,o,o,new A.o(o,o,o,B.In,v,D.bIi,B.n),o,o,o,o,o,o,o,o),1)],m),B.ag,o,B.e,B.j,0,o,o))
return new A.am(B.W,o,B.a9,B.q,l,o)}}
C.amZ.prototype={
S(){return new C.aAw(A.a([],x._))},
bn(){return this.r.$0()},
p5(){return this.w.$0()},
gdT(){return this.c}}
C.aAw.prototype={
Z(){var w,v
this.a0()
this.v1()
w=this.a
v=w.c
if(v.length!==0)C.a58(v,w.e,w.d.w)},
uR(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fKk(r,t.e,!1,s.w,new C.dLU(u),null,s),$async$uR)
case 2:w=3
return A.b(u.v1(),$async$uR)
case 3:return A.h(null,v)}})
return A.i($async$uR,v)},
Yu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fKk(r,t.e,!0,s.w,new C.dLT(u),null,s),$async$Yu)
case 2:w=3
return A.b(u.v1(),$async$Yu)
case 3:return A.h(null,v)}})
return A.i($async$Yu,v)},
v1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zK(q.a.c),$async$v1)
case 7:p=e
if(q.c!=null)n=q.e||J.ct(p)
else n=!1
if(n)q.n(new C.dLW(q,p))
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
return A.b(C.Fd(q.a.c).cJ(0,B.p_),$async$v1)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dLX(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dLY(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v1,v)},
MW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.H(s).f.P(D.ew9)
w=3
return A.b(C.Fd(t.a.c),$async$MW)
case 3:r=e
w=4
return A.b(C.fqN(t.a.c,r),$async$MW)
case 4:q=e
w=5
return A.b(C.Fd(t.a.c),$async$MW)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dLS(t,p))
o=t.c.H(s).f
s=A.d(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b0(null,null,null,q?B.ds:B.cQ,null,B.q,null,s,null,B.lV,null,null,null,null,null,null,null,null,null,null))
t.a.p5()
case 1:return A.h(u,v)}})
return A.i($async$MW,v)},
GD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hQB(l),$async$GD)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hkK(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWM(q,p.e,l,"Each family tree costs $"+B.k.a9(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$GD)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h23(r)
o=Date.now()
n=t.a.c
m=new C.kp(l,r.toUpperCase(),p,!0,B.U,D.AR,new A.Q(o,0,!1),0,n,D.rR)
w=5
return A.b(C.a0H(n,m),$async$GD)
case 5:w=6
return A.b(t.v1(),$async$GD)
case 6:t.a.bn()
t.a.p5()
if(t.c==null){w=1
break}t.Dh(m)
case 1:return A.h(u,v)}})
return A.i($async$GD,v)},
Dh(d){return this.c6Y(d)},
c6Y(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Dh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zK(u.a.c),$async$Dh)
case 2:n=l.qE(k.dE(f,new C.dLV(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hm(m,new C.amT(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Dh)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0H(u.a.c,o),$async$Dh)
case 6:case 5:w=7
return A.b(u.v1(),$async$Dh)
case 7:u.a.p5()
return A.h(null,v)}})
return A.i($async$Dh,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=new C.t8(p)
if(r.e)return A.au(A.mq(q,p?B.bq:B.bv,q,q,q,q,q,q,q,q),q,q,q)
if(J.cj(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.a1,!0,q,A.aI(!1,q,!0,A.p(q,D.bvW,B.h,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cH,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc62(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ad)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Ei(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bv,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dX,A.bL(D.fas,r.gaMB(),A.bk(B.bV,q,q,q,q,q,Ag.VR,q,new A.b6(A.m(12),B.X),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bjV,q,q,1/0),15,B.ah,1.05,D.a5o,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b8],v)
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.xn,B.aS,q,q,q,q),q,q,q,new C.dM_(r),q,q,q,q,"Sync family trees with database",q))
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.xe,B.aS,q,q,q,q),q,q,q,r.gacQ(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.aiM,D.eT1,r.gaMB(),A.bk(B.bV,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ab)
u.push(new C.Ei(r.csx(J.q(r.d,s),o),14,B.ah,1,D.a5o,q))
B.d.v(w,u)}return A.v(A.a([p,B.ay,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
csx(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dV:B.c3).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.x.j(v?0.35:0.08),B.e9,10)],x.V),q=A.m(14),p=A.p(w,D.bv_,B.h,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aF,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galH(),m=d.d?"":" \xb7 Public",l=d.y===D.k7?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.a1,!0,w,A.aI(!1,q,!0,new A.C(B.bC,A.B(A.a([p,B.bd,l,A.V(B.KI,v?B.bq:B.bv,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dLZ(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ad),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amT.prototype={
S(){return new C.aAt(A.a([],x._),A.aZ(x.N),A.b4o())},
bn(){return this.r.$0()},
gdT(){return this.c}}
C.aAt.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9Q()
w=u.a
v=w.c
if(v.length!==0)C.a58(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.av()
w.O$=0
this.a2()},
a0k(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wQ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dLk(r),s,null,!0,!0,x.y),$async$a0k)
case 3:if(e!==!0||t.c==null){w=1
break}t.I2()
t.n(new C.dLl(t,r))
w=4
return A.b(t.uT(),$async$a0k)
case 4:t.a.bn()
t.wQ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0k,v)},
ciR(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dLf(w,f,d,e))},
aOL(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.di()
u.dZ(w,v,0,1)
u.ji(q,q,1,1)
this.w.sq(0,u)},
b4S(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ex(new Float64Array(16))
q.dU(r)
w=q.Bx()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.di()
t.dZ(r,u,0,1)
t.ji(v,v,1,1)
t.dZ(-r,-u,0,1)
t.ig(0,q)
s.sq(0,t)},
a9Q(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zK(u.a.c),$async$a9Q)
case 2:t=s.qE(r.dE(e,new C.dKO(u)))
if(t!=null&&u.c!=null)u.n(new C.dKP(u,t))
return A.h(null,v)}})
return A.i($async$a9Q,v)},
wQ(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
uR(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$uR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fKk(o,t,!1,r,new C.dL2(u),q.a,s),$async$uR)
case 2:n=A
m=J
w=3
return A.b(C.Fd(u.a.c),$async$uR)
case 3:p=n.qE(m.dE(e,new C.dL3(u)))
if(p!=null&&u.c!=null)u.n(new C.dL4(u,p))
return A.h(null,v)}})
return A.i($async$uR,v)},
I2(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uT(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0H(t,s),$async$uT)
case 2:return A.h(null,v)}})
return A.i($async$uT,v)},
ZZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tm(q,t.a.c)){t.wQ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hRL(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZZ)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.I2()
t.n(new C.dLe(t,r))
w=4
return A.b(t.uT(),$async$ZZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZZ,v)},
YI(){return this.c7_()},
c7_(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tm(q,t.a.c)){t.wQ("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.M(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dLc(r,new C.t8(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$YI)
case 3:if(e!==!0||t.c==null){w=1
break}t.I2()
t.n(new C.dLd(r,t))
w=4
return A.b(t.uT(),$async$YI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YI,v)},
TU(d){return this.btU(d)},
btU(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tm(r,t.a.c)){t.wQ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dKC(t,d),r,null,!0,!0,x.P),$async$TU)
case 3:s=f
if(s==null){w=1
break}t.I2()
t.n(new C.dKD(t,s))
w=4
return A.b(t.uT(),$async$TU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TU,v)},
a0G(d){return this.cuE(d)},
cuE(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.M(s)
t=u.c
t.toString
w=2
return A.b(A.ch(null,null,!0,null,new C.dLn(u,d,new C.t8(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0G)
case 2:return A.h(null,v)}})
return A.i($async$a0G,v)},
c3l(d){var w=this,v=w.d
v===$&&A.c()
if(C.tm(v,w.a.c))w.MB(d)
else w.a0G(d)},
afj(d,e){return this.cmG(d,e)},
cmG(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$afj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.M(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ch(null,null,!0,null,new C.dLh(new C.t8(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$afj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$afj,v)},
GI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.k7?3:5
break
case 3:w=6
return A.b(C.fyz(t.a.c),$async$GI)
case 6:s=e
o=t.a
r=C.fRU(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.afj(!s,!r),$async$GI)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bxG(o,t.a.c)){t.wQ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kR(o,"Cancel","Remove",q.y===D.k7?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GI)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLS(t.a.c,t.d.a),$async$GI)
case 11:t.a.bn()
o=t.c
if(o==null){w=1
break}A.iG(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GI,v)},
a7r(d){return this.bEM(d)},
bEM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tm(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.ba(s,new C.dKE(p))){o=A.U(s)
p.a=A.qE(new A.cU(new A.a4(s,new C.dKF(d),o.k("a4<1>")),new C.dKG(),o.k("cU<1,n>")))}q=p.a
if(q==null)q=d.d
t.I2()
t.n(new C.dKH(t,s,d,q))
w=3
return A.b(t.uT(),$async$a7r)
case 3:t.wQ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7r,v)},
MB(d){return this.bGM(d)},
bGM(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$MB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tm(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0G(d),$async$MB)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ch(null,null,!0,null,new C.dKL(t,d),r,null,!0,!0,x.P),$async$MB)
case 6:s=f
if(s==null){w=1
break}t.I2()
t.n(new C.dKM(t,s))
w=7
return A.b(t.uT(),$async$MB)
case 7:case 1:return A.h(u,v)}})
return A.i($async$MB,v)},
csS(){var w=this,v=w.d
v===$&&A.c()
if(!C.tm(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dLm(w))
w.uT()},
WG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$WG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bxG(n,t.a.c)){t.wQ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.M(n)
s=$.av()
r=new A.ap(B.as,s)
q=t.d.e
p=A.bj(new A.J(q,t.gc1R(),A.U(q).k("J<1,n>")).bZ(0,new C.dKY()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dKZ(t,new C.t8(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$WG)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.I2()
t.n(new C.dL_(t,p))
w=4
return A.b(t.uT(),$async$WG)
case 4:t.wQ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$WG,v)},
c1S(d){return B.a.i(d.toLowerCase())},
c5O(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tm(v,w)
t=r.d
s=C.hHc(t)
C.hQF(q,t.b,u,C.hHb(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.t8(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a4(l,new C.dLu(),A.U(l).k("a4<1>")).gJ(0)
l=n?B.bX:B.iX
v=A.V(B.WU,n?B.bq:B.bv,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zI,A.aI(!1,o,!0,new A.C(B.hC,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bv,o,o,o,o,o,o,o,o,o,o,o,B.a3,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dLv(p,d),o,o,o,o,o,o,o),o),new A.C(B.mD,p.bRp(m),o)],u)
if(p.d.y===D.k7){t=B.qE.j(0.15)
s=A.m(12)
r=A.H(B.qE.j(0.45),B.r,1)
q=C.Fb(p.d,p.a.c)
v.push(new A.C(B.wA,A.p(o,A.B(A.a([D.bA6,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,12,o,o,B.a3,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iK,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b8],u)
if(C.tm(p.d,p.a.c)&&p.e.length!==0)u.push(new C.In("Undo",B.uK,p.gcsR(),m,o,o))
u.push(new C.In("Family Book",D.bpK,p.gc5N(),m,B.ro,o))
if(C.tm(p.d,p.a.c))u.push(new C.In("Display settings",A0.ES,p.gc6Z(),m,B.aW,o))
u.push(new C.In("Sync",B.xe,p.gacQ(),m,o,o))
t=p.d
if(t.y===D.k7||C.bxG(t,p.a.c)){t=p.d.y===D.k7?"Remove shared tree":"Delete tree"
u.push(new C.In(t,B.e7,p.gbEW(),m,B.fQ,o))}if(C.tm(p.d,p.a.c))u.push(new C.In("Add member",B.uF,new C.dLw(p),m,B.bV,o))
v.push(new A.C(P.ad3,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galH()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ck(new C.dLx(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?L.WY:W.KJ,o,o,o,o,o)
v.push(A.au(A.hh(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dLy(p),o),o,o,o))}return A.ce(o,l,A.bq(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)},
bRp(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ab(0,B.G,B.fq.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.x7,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.a1,!0,m,A.aI(!1,m,!0,A.p(m,D.bD4,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cH,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacQ(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ad)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eFH,m,m,m)
r=r.galH()
p=n.d.galH()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.D(A.v(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a3,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tm(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.bAi,m,m,m,n.gcgl(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j4:B.m4
r=r?"Private":"Public"
r=A.D(n.arT(q,"Privacy",r,n.a.d.w?n.gcrV():m),1)
q=A.D(n.arT(B.xf,"Tree code",n.d.c,new C.dKN(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ab,A.B(A.a([r,B.aa,q,B.aa,A.D(n.arT(D.brt,"Collaborators",p,n.gbVL()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.k7){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.a1,!0,A.m(999),A.aI(!1,A.m(999),!0,new A.C(B.fL,A.B(A.a([A.V(B.og,B.c,m,m,m,14),B.eA,A.d("View only",m,m,m,m,m,m,B.aK3,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ad)],o))}return A.p(m,A.bu(u,new A.am(B.W,m,B.a9,B.q,A.a([t,new A.C(B.DR,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ao),B.h,m,m,new A.o(m,m,m,w,v,D.bGg,B.n),m,m,m,m,m,m,m,1/0)},
arT(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.a1,!0,A.m(14),A.aI(!1,A.m(14),!0,new A.C(D.blG,A.v(A.a([A.V(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.tI,A.d(f,w,1,B.a2,w,w,w,K.a4a,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ad)}}
C.baX.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gai(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.bb_(s,t),new A.as(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d0j(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d0k(this),A.U(r).k("J<1,r>")))
return new A.C(B.rO,new A.a5(w,v,new A.am(B.W,t,B.a9,B.h,u,t),t),t)}}
C.Iz.prototype={}
C.Ev.prototype={}
C.baZ.prototype={
gbd1(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aG_.prototype={}
C.bb_.prototype={
bGu(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.L()
v.r=B.by.j(0.75).gq(0)
v.c=2
v.d=B.bL
d.bE(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.b4(u,q))
s=w-1.1
r=w-8.8
t.D(new A.p7(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.p7(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bE())
q=A.L()
q.r=B.c.gq(0)
d.ae(new A.u(u,w),9,q)
q=A.L()
q.r=B.by.gq(0)
d.aM(t,q)},
bGs(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d0E())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.ba(a0,new C.d0F(f))
t=new A.J(a0,new C.d0G(f),A.U(a0).k("J<1,O>")).bZ(0,new C.d0H()).cG(0,1/0,B.vR)
w=f.a
d.bE(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.I()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lF(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aO(l.r,B.ap,null,null,h)
h.push(new A.b4(w,v-i))
l=j*i
h.push(new A.cO(w,v,w+l,v))
h.push(new A.ao(n-l,v))
h.push(new A.cO(n,v,n,v+i))
h.push(new A.ao(n,o.b))
k=e.I()
n=g.gbL().a.snapshot()
r.drawPath((g.e=new A.cD(n)).a,k)
k.delete()}},
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.L()
w.r=B.bV.j(0.75).gq(0)
w.c=2.2
w.b=B.ac
w.d=B.bL
w.e=B.ft
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bGs(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.I()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bGu(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.beE.prototype={
gc_G(){var w=this.c
if(B.a.i(w.y).length!==0)return D.d19
switch(w.c.a){case 0:return D.cxH
case 1:return D.cIb
case 2:return D.cX2}},
gc_J(){var w=this.c,v=C.h1t(w.w),u=C.h1t(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=t.gc_G(),p=t.c,o=I.byy(p.f),n=t.gc_J(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gaj(q).j(0.35),B.cF,10)],m),k=r?B.aF:B.c,j=A.H(r?B.aF:B.c,B.r,2)
if(o!=null)w=A.rA(B.A,s,B.cm,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gaj(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gaj(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a3(B.a4,B.a7,B.w,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hO(w,B.ao),B.h,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a3(B.ax,B.aC,B.w,q,s,s),B.a6),s,56,s,s,B.E5,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aF:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.ePk,s,s,s),B.h,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.blK,s,s,s),s,s,s,-6,-4,s))}k=r?B.cJ:B.c
j=A.m(8)
w=A.H(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.x.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cJ,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bv,s,s,s,s,s,s,s,s,7.5,s,s,B.a3,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aH(s,new A.a5(84,112,A.v(A.a([new A.am(B.W,s,B.a9,B.h,l,s),B.av,A.p(s,A.v(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aRK,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.blU,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ae)}}
C.ba4.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.L()
v=this.b
u=v?B.c:D.b1K
w.r=u.j(v?0.05:0.09).gq(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.I()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.bs5.prototype={
B(d){var w=this,v=null,u=new C.eWM(w),t=w.c,s=t?B.cJ:B.c,r=A.m(12),q=u.$3(B.hD,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.f5,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Aq,"Zoom out",w.e)
return A.aD(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.f5,v,v,v,1,v,v,v,v,v,22),u.$3(B.agm,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dr,v,v,v,B.ad)}}
C.bhW.prototype={
B(d){var w=this,v=null,u=B.bV.j(0.15),t=A.H(B.bV,B.r,2),s=w.e,r=x.p
t=A.aH(v,A.p(v,A.v(A.a([A.V(s?L.WY:W.KJ,B.bV,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eLJ,v,v,v)],r),B.m,v,B.b7,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ae)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eJJ,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.eyr(w),A.U(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a5(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Y1.prototype={
S(){return new C.ayV()},
bn(){return this.Q.$0()},
gdT(){return this.w}}
C.ayV.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.av()
r.d!==$&&A.aQ()
r.d=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.c
r.y=t==null?D.wM:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hIH(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
p(){var w,v=this,u=v.d
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
v.a2()},
NS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fRU(p.y,p.w)
w=3
return A.b(A.l2(t.a.w,B.Gr),$async$NS)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWM(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NS)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hkL(p.y,p.w)
t.a.bn()
case 5:w=7
return A.b(Ai.Fm(78,800),$async$NS)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.dfV(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NS,v)},
c_I(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hQ(B.o.u(1000*Date.now()),w,D.wM,null,null,null,"","","","","",1,!1,0)
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
s=v.aAi(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a9(k,!1).M(s)},
a73(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a73=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dfU(r),s,null,!0,!0,x.y),$async$a73)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a9(s,!1).M(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a73,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H,i=new C.t8(j),h=l.a.e,g=A.U(h).k("a4<1>"),f=A.z(new A.a4(h,new C.dg3(l),g),g.k("G.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bkf,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aF,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hq(A.aI(!1,k,!0,new A.C(B.lZ,A.V(B.e7,B.o3,k,k,k,17),k),B.cH,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbBD(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jg:B.ik
t=I.byy(l.as)
if(l.as==null)s=A.V(B.o9,j?B.bq:B.bv,k,k,k,40)
else s=k
s=A.au(A.aH(k,new A.am(B.W,k,B.a9,B.q,A.a([A.hi(u,t,s,k,42),A.an(0,A.hi(B.bV,k,D.bu4,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc_F(),k,k,k,k,k,k,!1,B.ae),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayX(t,"Full name",B.m0,1,1,i,B.lE)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.T,new C.beC(i,u,new C.dg4(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bdQ],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dg5(),A.U(o).k("J<1,er<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bdS],q)
B.d.v(q,new A.J(f,new C.dg7(),A.U(f).k("J<1,er<n?>>")))
o=A.v(A.a([t,B.ar,new C.aaT(i,r,"Who is their parent?",p,new C.dg8(l),k,o),B.ay,n,B.ar,new C.aaT(i,m,"Who is their spouse / partner?",q,new C.dg9(l),k,o)],v),B.ag,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayX(q,"Birth date",D.afu,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayX(m,"Birth place",B.Xc,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayX(n,"Date of death (if deceased)",D.ahC,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayX(p,"Occupation",B.Yj,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.A,k,B.a9,B.q,w,k),B.ay,s,B.bu,new C.aaU(i,"Identity",u,k),B.ab,new C.aaU(i,"Family links",o,k),B.ab,new C.aaU(i,"Life details",A.v(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ayX(r,"Notes",B.kC,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ab,new C.ayW(i,"Child order",l.c7a(l.at),new C.dga(l),new C.dgb(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fHN(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dgc(l):k
B.d.v(r,A.a([B.T,new C.ayW(i,"Visible in tree",u,w,new C.dgd(l),k)],v))}r.push(B.T)
w=j?B.jg:B.ik
u=A.m(14)
t=A.H(j?B.dV:B.c3,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aF,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.ix(k,B.bV,k,B.ah,k,new C.dge(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.acH,k,k,k))
r.push(B.bu)
w=j?B.aN:B.aF
j=j?B.dV:B.c3
r.push(A.B(A.a([A.D(A.dV(B.n_,new C.dg6(d),A.db(k,k,k,k,k,k,k,k,k,w,k,k,B.cc,k,new A.b6(A.m(14),B.X),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.D(A.bL(D.epk,l.gc_H(),A.bk(B.aS,k,k,0,B.c,k,B.cc,k,new A.b6(A.m(14),B.X),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.eq(B.fZ,k,B.ah,h,new A.a5(420,k,A.ci(A.v(r,B.ag,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ak),k),D.adx,k,B.acW,new A.b6(g,B.X),k,k)},
c7a(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaU.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jg:B.ik,s=A.m(16)
return A.v(A.a([new A.C(D.adW,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dV:B.c3,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.beD.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dV:B.c3).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aN:B.aF,u,u,u,u,u,u,u,u,14,u,u,B.a3,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bn(u,B.eu,u,B.uk,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bv,u,u,u,u,u,u,u,u,u,u,u,B.cq,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bV,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaT.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dV:B.c3).j(0.85),B.r,1),q=A.V(B.qn,u?B.bq:B.bv,v,v,v,v),p=A.l(v,v,u?B.aN:B.aF,v,v,v,v,v,v,v,v,14,v,v,B.a3,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Cy(A.a2l(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bv,v,v,v,v,v,v,v,v,v,v,v,B.cq,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lX,v,v,v)}}
C.beC.prototype={
B(d){var w=new C.dgf(this)
return A.B(A.a([w.$3(D.WG,"Male",B.Ls),B.aa,w.$3(D.aeL,"Female",B.Le),B.aa,w.$3(D.wM,"Other",B.mH)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayW.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jg:B.ik,r=A.m(14),q=A.H(t?B.dV:B.c3,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aF,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bv,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aF2(u,B.Aq,w.f,v),B.bp,new C.aF2(u,B.hD,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.em,v,v,v)}}
C.aF2.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bV.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bV
else t=(s.c.a?B.bq:B.bv).j(0.4)
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,new A.a5(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ad)}}
C.aaV.prototype={
bK4(d){switch(d.a){case 0:return B.bV
case 1:return B.by
case 2:return B.cW}},
bK5(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aST(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zc(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.H((w?B.dV:B.c3).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bV,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bv,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aF,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cM,B.zG,p,p,1/0)},
abl(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jg:B.ik,s=A.m(16),r=A.H(v?B.dV:B.c3,B.r,1)
return A.v(A.a([new A.C(D.adW,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h68(r,q),o=q.c,n=t.bK4(o),m=I.byy(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aN:B.aF,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.k7?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bv,s,s,s,s,s,s,s,s,12,s,s,B.a3,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.hi(u,m,m==null?A.V(B.o9,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eh,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.au(A.p(s,A.d(t.bK5(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.lY,s,s,s),s,s,s)
u=x.p
i=A.a([t.zc("Full name",i,B.m0)],u)
if(p>0)i.push(t.zc("Child order","#"+p,B.Ll))
r=A.a([h,B.av,r,B.aO,l,B.T,v,B.bu,t.abl("Identity",i),B.ab,t.abl("Life details",A.a([t.zc("Birth date",q.w,D.afu),t.zc("Birth place",q.x,B.Xc),t.zc("Date of death",q.y,D.ahC),t.zc("Occupation",q.z,B.Yj)],u)),B.ab,t.abl("Family links",A.a([t.zc("1. Parent",t.aST(q.d),B.Ei),t.zc("2. Spouse",t.aST(q.e),B.Ld)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ab,t.abl("Notes",A.a([t.zc("Notes",q,B.kC)],u))],u))
r.push(B.bu)
r.push(A.bL(B.Hy,new C.dgp(d),A.bk(B.aS,s,s,s,s,s,B.cc,s,new A.b6(A.m(14),B.X),s,s,s)))
return A.ew(s,k,new A.d1(B.lh,A.ci(A.v(r,B.ag,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zP,s,s,B.ak),s),s,s,s,B.DU,B.cZ,s,new A.b6(j,B.X),s)}}
C.In.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bv
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.wF,A.hq(A.aD(!1,B.a1,!0,A.m(8),A.aI(!1,A.m(8),!0,new A.a5(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ad),u,v.c,u,u),u)}}
C.amW.prototype={
eF(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a5().ab())
w=u.c
v=A.U(w).k("J<1,a1<n,@>>")
w=A.z(new A.J(w,new C.c3J(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iH(w,new C.c3K(),t,x.U))
return s}}
C.amX.prototype={
S(){return new C.aAv(A.a([],x.bF))},
gd6(){return this.c}}
C.aAv.prototype={
Z(){this.a0()
this.I9()},
I9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c3N(t.a.c),$async$I9)
case 3:r=e
w=4
return A.b(C.zK(t.a.c),$async$I9)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rm(q,new C.dLH(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dLI(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I9,v)},
xn(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IS(d,e){return this.cva(d,e)},
cva(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dLM(q,e))
t=3
w=6
return A.b(d.$0(),$async$IS)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dLN(q))
$.eI.lV()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IS,v)},
Vw(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$Vw)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IS(new C.dLE(t),"Preparing download\u2026"),$async$Vw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vw,v)},
VA(d){return this.bIa(d)},
bIa(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$VA)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IS(new C.dLF(t,d),"Preparing file\u2026"),$async$VA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
adc(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$adc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wp.c2().Kz(B.Oe,B.rS,!0),$async$adc)
case 7:r=e
o=r
q=o==null?null:J.fj(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gai(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jf(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a6(m)
$.al.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.Fl()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adc,v)},
Wa(d){return this.bSh(d)},
bSh(d){var w=0,v=A.j(x.H),u=this
var $async$Wa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IS(new C.dLG(u,d),"Restoring family trees\u2026"),$async$Wa)
case 2:return A.h(null,v)}})
return A.i($async$Wa,v)},
W9(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.adc(),$async$W9)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Wa(s),$async$W9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W9,v)},
a_N(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$a_N)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IS(new C.dLL(t),"Creating QR code\u2026"),$async$a_N)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_N,v)},
a_p(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BR()){t.xn("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a9(s,!1).cp(A.eD(new C.dLJ(),!0,null,x.N)),$async$a_p)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Wa(r),$async$a_p)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_p,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=o?B.zb:B.iX,m=o?D.abm:B.aN,l=o?B.aI:B.c3,k=o?B.aN:B.aF,j=new C.d0I(n,m,l,k,o?B.bI:B.bv)
l=A.aF(p,p,p,p,A.V(B.er,k,p,p,p,20),p,p,p,new C.dLP(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eA(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d0g(!0,B.j6,B.aY,B.aY,q.r?p:q.gcmu(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gciM()
t.push(A.D(C.d0g(!s,B.iN,B.b3,B.bB,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d0g(!1,B.hr,B.aS,B.bV,q.r?p:q.gbI3(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d0g(!1,M.xi,B.aZ,B.aK,q.r?p:q.gbSe(),j,s,"Upload backup file"),1))
l=A.a([new C.baY(v,l,p),B.ki,new C.aab(j,"QR restore",p),B.T,t,B.d3,new C.aab(j,"Backup files",p),B.T,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.ki,new C.aab(j,"One tree",p),B.T],u)
B.d.v(v,J.b5(q.d,new C.dLQ(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cM(l,p,B.VN,p,p,B.ak,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.x.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.bq(!0,A.p(p,A.B(A.a([L.aIz,B.bd,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zO,p,p,p),!0,!1,B.ah,!0,!1),p,p,20,20,p,p))}return A.ce(w,n,new A.am(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d0I.prototype={}
C.baY.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ab(0,B.G,B.aS.j(0.32),B.jQ,28)],x.V)
t=A.an(p,A.V(B.t8,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bCD,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nL,A.D(A.v(A.a([D.eTV,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bJu,B.n),p,p,p,p,p,p,p,p)}}
C.aab.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.aa,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.baW.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aY.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aY.j(0.1),B.cF,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.a1,!0,q,A.aI(!1,o,!0,A.es(A.d8(new A.C(E.Vq,A.v(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qk,q,q,q),B.ab,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cq,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ad)}}
C.bb0.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.es(new A.C(B.eN,A.B(A.a([A.p(v,D.bBR,B.h,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qk,v,v,v),B.bd,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hr,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ad)}}
C.Ym.prototype={
S(){return new C.aAu()},
gd6(){return this.c}}
C.aAu.prototype={
Z(){this.a0()
this.a6C()},
a6C(){var w=0,v=A.j(x.H),u=this,t
var $async$a6C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aZo(u.a.c,B.Bs),$async$a6C)
case 2:t=e
if(u.c!=null)u.n(new C.dLz(u,t))
return A.h(null,v)}})
return A.i($async$a6C,v)},
aeA(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aeA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dLA(q))
t=4
p=A.fTw(q.a.d,B.Bs)
if(p==null){n=A.ba("Could not read this QR code.")
throw A.R(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ap8(n.e,m,l,B.Bs,p,n.f),$async$aeA)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dLB(q))
q.c.H(x.q).f.P(D.exi)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a6(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(B.a.e1(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dLC(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeA,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=p?B.iZ:B.oU,n=p?B.hx:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eA(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f7q,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pl(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bu,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aj,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b7,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.af:B.bt,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gciu()
if(u)u=B.Ha
else u=A.V(r.e===!0?B.hq:B.aft,q,q,q,q,q)
w=A.a([w,B.ab,v,B.ab,new A.a5(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.db(q,q,q,q,q,q,q,q,q,B.aS,q,B.fR,q,q,q,new A.ay(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.aj,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a5(1/0,q,A.bL(B.yt,new C.dLD(d),A.bk(B.aS,q,q,q,q,B.fR,q,q,q,q,q,q)),q))
return A.ce(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Yn.prototype={
S(){return new C.bg2(A.yk(B.wl,B.n7,B.td))}}
C.bg2.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.ce(A.eA(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f09,w,w,w,1,w,!0),B.x,A.yj(this.d,B.bQ,new C.dLR(this,d)),w,!1,!1,w,w)}}
C.aVk.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.NL,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ll.prototype={}
C.a4b.prototype={
S(){return new C.bfM(null,null)}}
C.bfM.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bi(v,B.rJ,v,1,v,w)
w.e=A.bi(v,B.oZ,v,1,v,w)
w.a.toString
w.d.cD(0)
w.e.cD(0)},
bq(d){var w,v,u=this
u.bC(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cD(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cD(0)},
p(){var w=this.d
w===$&&A.c()
w.p()
w=this.e
w===$&&A.c()
w.p()
this.bpr()},
B(d){var w,v,u=this,t=B.d.dI(D.a_T,new C.dxV(u),new C.dxW())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cog(A.c3(new A.h4(A.a([w,v],x.dS)),new C.dxX(u,t),null),!0)}}
C.bfL.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWU(d,e)
break
case"house":p.lw(d,e,D.cMy)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.ge8()
$.W()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gq(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lB(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zV(d,e,12)
p.wZ(d,e,B.kS,5,14)
break
case"grocery":p.c7S(d,e)
break
case"calculator":p.c7z(d,e)
break
case"lumber":p.c8_(d,e)
break
case"kitchen":p.c7V(d,e)
break
case"landscape":p.lw(d,e,D.cMZ)
s=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.b4(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.cO(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.cO(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.ao(t,w))
s.D(new A.ao(0,w))
s.D(new A.bE())
w=A.L()
w.r=B.f2.j(0.85).gq(0)
d.aM(s,w)
p.zV(d,e,8)
p.wZ(d,e,B.i1,4,18)
break
case"plumbing":p.c88(d,e)
break
case"electrical":p.lw(d,e,D.cWo)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.L()
u.r=B.c.j(q*0.12).gq(0)
d.aX(new A.a7(0,0,0+e.a,0+e.b),u)
p.lB(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lB(d,e,B.ll.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zV(d,e,10)
break
case"store":p.c8h(d,e)
break
case"paint_remodel":p.c83(d,e)
break
case"roofing":p.c8a(d,e)
break
case"warehouse":p.c8o(d,e)
break
case"vehicles":p.c8m(d,e)
break
case"farm":p.c7M(d,e)
break
case"restaurant":p.c89(d,e)
break
case"tools":p.c8k(d,e)
break
case"wallet":p.c8n(d,e)
break
case"concrete":p.c7F(d,e)
break
case"blueprint":p.c7x(d,e)
break
default:p.aWU(d,e)}},
lw(d,e,f){var w,v=new A.a7(0,0,0+e.a,0+e.b)
$.W()
w=A.L()
w.sap(new A.a3(B.ax,B.aC,B.w,f,null,null).au(0,v))
d.aX(v,w)},
lB(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.ge8()/2-h
$.W()
w=A.L()
w.b=B.ac
w.c=2.4
w.r=f.gq(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bT(q,p)
r=w.I()
v.drawArc.apply(v,[A.c8(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.ge8()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gq(0)
p=q.I()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zV(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.W()
o=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gq(0)
n=o.I()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWU(d,e){var w,v=this
v.lw(d,e,D.cVg)
w=v.c
v.lB(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lB(d,e,B.bH.j(0.45),-w*3.141592653589793*1.4,22)
v.bGo(d,e,B.hO,w)
v.wZ(d,e,B.c.j(0.7),6,8)},
bGo(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.L()
w.r=f.j(0.35).gq(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.I()
s.drawRect(A.c8(new A.a7(16,q,t,q+3)),p)
p.delete()}},
c7S(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.c3O)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
l.r=D.cKW[B.o.F(s,4)].j(0.85).gq(0)
k=l.I()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lB(d,e,B.c.j(0.35),w,16)
j.wZ(d,e,B.i1,5,12)},
c7z(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lw(d,e,D.c3V)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.ge8()
$.W()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gq(0)
d.ae(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ib(g,g,g,g,g,B.a5,B.cg,g,B.ek,B.cf)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cOs[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saU(0,new A.em(r,g,g,B.cS,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.f_()
p.a4(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c3X[o]
l=B.k_.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saU(0,new A.em(m,g,g,B.cS,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.f_()
p.a4(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lB(d,e,B.c.j(0.35),w*1.5,14)
h.lB(d,e,B.ex.j(0.55),-v*3.141592653589793*2,8)
h.lB(d,e,B.zc.j(0.4),r*2.8,22)
h.wZ(d,e,B.oN,8,10)
h.zV(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gq(0)
r.c=1.2
i=r.I()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c8_(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,Y.aqU)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bC(new A.a7(20,q,u,q+10),B.hd)
$.W()
o=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h5,B.nV,(r+1)/2).gq(0)
n=o.I()
t.drawRRect(A.eZ(p),n)
n.delete()}m.lB(d,e,B.h5.j(0.35),w,15)
m.zV(d,e,8)},
c7V(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.cLq)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.W()
l=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gq(0)
k=l.I()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lB(d,e,B.bH.j(0.4),-w*3.141592653589793*2.2,11)
j.wZ(d,e,B.pZ,4,14)},
c88(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lw(d,e,D.cBc)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
n.b=B.ac
n.c=2
n.r=B.c.j(0.45-q*0.12).gq(0)
m=n.I()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wZ(d,e,B.o1,6,12)
l.lB(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c8h(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lw(d,e,D.chf)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bC(new A.a7(q,14,q+u,22),B.j9)
$.W()
p=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.eZ,B.bH,(r+1)/2).gq(0)
o=p.I()
t.drawRRect(A.eZ(q),o)
o.delete()}n.lB(d,e,B.c.j(0.3),w,16)
n.zV(d,e,8)
n.wZ(d,e,B.u4,5,13)},
c83(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cGG)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bC(new A.a7(q,p,q+8,p+(18+r*22)),B.hJ)
$.W()
q=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=[B.ie,B.dB,B.bH,B.el][s].j(0.85).gq(0)
o=q.I()
t.drawRRect(A.eZ(p),o)
o.delete()}this.lB(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c8a(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cEk)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gq(0)
p.c=1.5
o=p.I()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wZ(d,e,B.cp,7,11)},
c8o(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cjT)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bC(new A.a7(p,o,p+(t-r*8),o+16),B.hd)
$.W()
p=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cp,B.aN,(Math.sin(q)+1)/2).gq(0)
n=p.I()
s.drawRRect(A.eZ(o),n)
n.delete()}this.lB(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c8m(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cZZ)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bC(new A.a7(r,q,r+28,q+8),B.hd)
$.W()
p=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gq(0)
o=p.I()
t.drawRRect(A.eZ(q),o)
o.delete()}this.zV(d,e,6)},
c7M(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cK6)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.L()
s.r=B.ll.j(0.75).gq(0)
d.ae(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=B.fx.j(0.85).gq(0)
o.c=3
n=o.I()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lB(d,e,B.ll.j(0.35),w,14)},
c89(d,e){var w,v,u,t,s,r,q,p,o=this
o.lw(d,e,D.cMn)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cJ(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gq(0)
p=q.I()
t.drawOval(A.c8(r),p)
p.delete()}o.wZ(d,e,B.pZ,5,16)
o.zV(d,e,7)},
c8k(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.cXL)
w=m.c
v=w*3.141592653589793
m.lB(d,e,B.nV.j(0.55),v*3,10)
m.lB(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=B.nV.j(0.8).gq(0)
n=o.I()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c8n(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.d_t)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bC(new A.a7(p,o,p+36,o+22),B.j9)
$.W()
p=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.i1,B.ll,q).gq(0)
n=p.I()
s.drawRRect(A.eZ(o),n)
n.delete()}m.zV(d,e,9)
m.lB(d,e,B.c.j(0.4),w*2.2,12)},
c7F(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cQX)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bT(new A.u(v,u),34)
$.W()
s=A.L()
s.b=B.ac
s.c=5
s.r=B.c.j(0.45).gq(0)
d.fs(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=B.c3.j(0.85).gq(0)
n=o.I()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c7x(d,e){var w,v,u,t,s,r,q,p
this.lw(d,e,D.cNe)
$.W()
w=A.L()
w.r=B.c.j(0.12).gq(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.I()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.I()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.W()
u=A.L()
u.r=B.dB.j(0.45).gq(0)
d.aX(new A.a7(0,p,0+v,p+6),u)
this.lB(d,e,B.kS.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apO.prototype={
Y7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMN(),$async$Y7)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a6o(s),$async$Y7)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Y7,v)},
ade(d){return this.caD(d)},
caD(d){var w=0,v=A.j(x.H),u=this,t
var $async$ade=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hQP(d),$async$ade)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ade,v)},
B(d){var w,v,u,t=null,s=A.M(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jg:B.ik
w=x.p
v=A.a([C.aNa(!0,B.pP,1/0,B.p7,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.x.j(0.35)],x.O)
v.push(A.bU(new A.bI(B.aX,t,t,new A.C(B.ug,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.arM,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a3(B.aX,B.b1,B.w,u,t,t),B.n),B.bb))}v.push(A.an(8,A.B(A.a([A.D(A.dq(D.bvP,D.eQx,new C.cbg(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jG,t,t,t,t,B.c8)),1),B.aa,A.D(A.ez(D.bDN,D.f32,this.gc1P(),A.db(t,t,B.x.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jG,t,t,D.aQj,t,t,t,B.c8)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fD(1.7777777777777777,A.aD(!1,B.a1,!0,B.pP,new A.am(B.W,t,B.b_,B.q,v,t),B.ao,s,0,t,t,t,t,t,B.ad),t)}}
C.aIl.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.aQ0.prototype={}
C.aQ_.prototype={}
C.aO5.prototype={}
C.X0.prototype={
S(){return new C.avQ()}}
C.avQ.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bc("",B.b2,B.aM)
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ap(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
IJ(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.H(x.q).f.P(D.exN)
return}t=u.c
t.toString
v=u.e
A.a9(t,!1).M(new C.aQ0(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bDu,B.h,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.aF,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bv,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aF(n,n,n,n,A.V(B.ct,m?B.bq:B.bv,n,n,n,n),n,n,n,new C.cTU(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bv,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bv,n,n,n,n,n,n,n,n,11,n,n,B.cq,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fTM(new C.cTV(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aN:B.aF,n,n,n,n,n,n,n,n,n,n,n,B.a3,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jg:B.ik
r=A.m(12)
q=A.m(12)
p=m?B.dV:B.c3
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bn(n,new A.b3(4,r,B.dd),n,n,n,n,n,n,!0,new A.b3(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cTW(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.He,n,n,n,n)
u=m?B.aN:B.aF
m=m?B.dV:B.c3
return A.ew(n,l,new A.d1(B.lh,A.ci(A.v(A.a([j,B.aO,i,B.av,w,B.P,v,B.aO,t,B.bu,A.B(A.a([A.D(A.dV(B.df,new C.cTX(d),A.db(n,n,n,n,n,n,n,n,n,u,n,n,B.cc,n,new A.b6(A.m(12),B.X),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bL(D.f3h,o.ga04(),A.bk(B.aS,n,n,n,B.c,n,B.cc,n,new A.b6(A.m(12),B.X),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zR,n,n,B.ak),n),n,n,n,V.zS,B.cZ,n,new A.b6(k,B.X),n)}}
C.X_.prototype={
S(){return new C.avP()}}
C.avP.prototype={
Z(){this.a0()
var w=$.av()
this.d!==$&&A.aQ()
this.d=new A.ap(B.as,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
IJ(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.H(x.q).f.P(D.evu)
return}v=this.c
v.toString
A.a9(v,!1).M(new C.aQ_(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.M(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.bAb,B.h,q,q,new A.o(B.bV.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bv,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aF(q,q,q,q,A.V(B.ct,p?B.bq:B.bv,q,q,q,q),q,q,q,new C.cTQ(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.V(B.aff,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,12,q,q,B.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,q,q,q,B.a3,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jg:B.ik
t=A.m(12)
s=A.m(12)
r=p?B.dV:B.c3
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bn(q,new A.b3(4,t,B.dd),q,q,q,q,q,q,!0,new A.b3(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cTR(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kj,q,q,q,q)
w=p?B.aN:B.aF
p=p?B.dV:B.c3
return A.ew(q,o,new A.d1(B.lh,A.ci(A.v(A.a([m,B.aO,l,B.ay,v,B.bu,A.B(A.a([A.D(A.dV(B.df,new C.cTS(d),A.db(q,q,q,q,q,q,q,q,q,w,q,q,B.cc,q,new A.b6(A.m(12),B.X),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bL(D.f9x,this.ga04(),A.bk(B.bV,q,q,q,B.c,q,B.cc,q,new A.b6(A.m(12),B.X),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zR,q,q,B.ak),q),q,q,q,V.zS,B.cZ,q,new A.b6(n,B.X),q)}}
C.Wy.prototype={
S(){return new C.auz()}}
C.auz.prototype={
Z(){var w,v=this
v.a0()
w=$.av()
v.d!==$&&A.aQ()
v.d=new A.ap(B.as,w)
v.e!==$&&A.aQ()
v.e=new A.ap(new A.bc("1",B.b2,B.aM),w)
v.f!==$&&A.aQ()
v.f=new A.ap(B.as,w)
v.r!==$&&A.aQ()
v.r=new A.ap(B.as,w)},
p(){var w,v=this,u=v.d
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
v.a2()},
gI4(){var w,v=this.e
v===$&&A.c()
w=A.d9(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gagm(){var w=this.f
w===$&&A.c()
w=A.d9(B.a.i(w.a.a))
return w==null?0:w},
gaZF(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aKl(d){var w,v=B.k.E(this.gI4()+d,0.25,999999),u=B.k.jA(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.a9(v,2)
w=A.ae("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saU(0,u)
this.n(new C.crt())},
auk(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.jg:B.ik,s=A.m(14),r=A.m(14)
u=u?B.dV:B.c3
return A.bn(w,new A.b3(4,s,B.dd),w,B.bC,w,w,w,w,!0,new A.b3(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b3(4,A.m(14),B.a6M),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c1Q(d,e,f){return this.auk(d,e,f,null)},
IJ(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gagm()<=0){s.c.H(x.q).f.P(D.ezE)
return}r=s.c
r.toString
v=s.gI4()
u=s.gagm()
t=s.gaZF()
A.a9(r,!1).M(new C.aO5(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.t8(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bV.j(0.14)],j),h=A.m(14)
i=A.p(o,D.btN,B.h,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a3(B.a4,B.a7,B.w,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.cq,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aF(o,o,o,o,A.V(B.ct,n?B.bq:B.bv,o,o,o,o),o,o,o,new C.crz(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,o,o,o,B.a3,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.auk(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Lr),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.He,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jg:B.ik
t=A.m(14)
s=A.H(n?B.dV:B.c3,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Aq,n?B.aN:B.aF,o,o,o,20),o,o,o,new C.crA(p),o,o,o,o,o,B.c8)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bFg,B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dY,o,o,o,1,o,o,!1,"\u2022",o,new C.crB(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a5(52,o,q,o),A.aF(o,o,o,o,A.V(B.hD,n?B.aN:B.aF,o,o,o,20),o,o,o,new C.crC(p),o,o,o,o,o,B.c8)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.aw,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.auk(m,"Amount","0.00",B.hT),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dY,o,o,o,1,o,o,!1,"\u2022",o,new C.crD(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.z(new A.J(D.cH7,new C.crE(p,m),t),t.k("ai.E"))
i=A.a([i,B.bu,v,B.ay,h,B.P,s,B.ab,A.c9(B.bJ,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c1Q(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.crF(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kj,o,o,o,o)],w))}i.push(B.aO)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bV.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bv,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gI4()===B.k.jA(p.gI4())?B.k.N(p.gI4()):p.gI4()
s=p.gaZF()
r=A.zM(p.gagm())
i.push(A.p(o,A.B(A.a([A.D(A.v(A.a([u,B.av,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.a3,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bzj(p.gI4()*p.gagm(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a3(B.a4,B.a7,B.w,j,o,o),B.n),o,o,o,o,B.iL,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.dV:B.c3
h=A.db(o,o,o,o,o,o,o,o,o,o,o,o,B.cc,o,new A.b6(j,B.X),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.crG(d),h),1),B.aw,A.D(A.dq(D.aiF,D.f5Q,p.ga04(),A.bk(B.aS,o,o,0,B.c,o,B.cc,o,new A.b6(A.m(14),B.X),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ew(o,l,new A.d1(U.a78,A.ci(A.v(i,B.ag,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A8.qj,o,o,B.ak),o),o,o,o,B.Ka,B.cZ,o,new A.b6(k,B.X),o)}}
C.a_5.prototype={
S(){return new C.brY()}}
C.brY.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ap(new A.bc(w,B.b2,B.aM),v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?B.dR:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aN:B.aF,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aN:B.aF,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jg:B.ik
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bn(s,new A.b3(4,A.m(12),B.dd),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eWe(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dV(B.df,new C.eWf(d),s),1)
r=A.bk(B.bV,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ew(s,q,new A.C(B.zR,A.v(A.a([o,B.ay,v,B.aO,A.B(A.a([u,B.aw,A.D(A.bL(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eWg(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cZ,s,new A.b6(p,B.X),s)}}
C.a9f.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.Ei.prototype={
S(){return new C.brW(null,null)}}
C.brW.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bep,null,1,null,v)
w.cD(0)
v.d!==$&&A.aQ()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.brL()},
gbt6(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bV,B.aW],x.O)
case 2:return A.a([B.br,B.aS,B.aW],x.O)
case 3:return A.a([B.aY,B.cb,B.jA],x.O)
case 4:return A.a([B.hm,B.bV,B.f4],x.O)
case 0:return A.a([B.aS,B.bV,B.aW],x.O)}},
B(d){var w=A.M(d),v=this.d
v===$&&A.c()
return new A.ep(A.c3(v,new C.eWc(this,new C.t8(w.ax.a===B.H)),null),null)}}
C.aus.prototype={
S(){return new C.brX(null,null)}}
C.brX.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mA,null,1,null,v)
w.cD(0)
v.d!==$&&A.aQ()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.brM()},
B(d){var w=this.d
w===$&&A.c()
return A.c3(w,new C.eWd(this),null)}}
C.brV.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bC(new A.a7(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b1(w,w))
u=new A.aO($.W().r,B.ap,null,null,A.a([],x.v))
u.D(new A.iO(v))
w=A.L()
w.b=B.ac
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gq(0)
d.aJ(v,w)
w=A.L()
w.b=B.ac
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gq(0)
d.aM(u,w)
w=A.uY(u)
t=A.a([],x.f5)
w=new A.tG(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jK('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.G5(w,r)
w.im()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNE(d,q,r,o,0,0.2,4.2,0.92)
p.aNE(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNE(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.he1(e.a.a,e,t,t+f*i,!0),r=A.bxJ(s.gbL().a.getBounds())
$.W()
w=A.L()
w.b=B.ac
w.c=j
w.d=B.bL
w.f=!0
v=this.f
u=k*this.e
w.sap(new A.a3(B.a4,B.a7,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Fw,null).au(0,r))
d.aM(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aKt.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aKu.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.t8.prototype={}
C.apN.prototype={
S(){return new C.aBX()},
gdT(){return this.c}}
C.aBX.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.ae4()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.JK(w,v)
this.a2()},
ae4(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ae4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxQ(t.c,t.d.a),$async$ae4)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.evB(u,s))
return A.h(null,v)}})
return A.i($async$ae4,v)},
Oi(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.evs(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.JK(t,s),$async$Oi)
case 2:if(u.c!=null)u.n(new C.evt(u))
return A.h(null,v)}})
return A.i($async$Oi,v)},
OO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.M(p)
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.evz(t,new C.t8(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OO)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a6o(q),$async$OO)
case 6:case 5:t.n(new C.evA(t,r))
w=7
return A.b(t.Oi(),$async$OO)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
TO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hQA(r),$async$TO)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.evn(t,new C.qp(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Oi(),$async$TO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TO,v)},
c6O(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h65(t,new C.evr(u),w,v)},
a8k(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c1(new A.ay(v,2.5,B.r,-1),B.X,B.X,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aQ5,w,w,B.n),w,22,w,w,w,w,w,22)},
a7q(d){return this.bEJ(d)},
bEJ(d){var w=0,v=A.j(x.H),u=this
var $async$a7q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.evq(u,d))
w=2
return A.b(u.Oi(),$async$a7q)
case 2:return A.h(null,v)}})
return A.i($async$a7q,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.M(a2).ax.a===B.H,e=f?B.bX:B.iX,d=A.m(8),a0=A.V(O.WV,f?B.bq:B.bv,g,g,g,16),a1=x.p
a0=A.aI(!1,d,!0,new A.C(B.DZ,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bv,g,g,g,g,g,g,g,g,g,g,g,B.a3,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.evC(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.W,g,B.b_,B.q,A.a([A.bu(A.m(22),C.aNa(!0,A.m(22),1/0,B.p7,g,d,1/0),B.ao),A.an(10,A.dq(D.byh,D.f7T,h.gaXD(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b6(A.m(12),B.X),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aS.j(f?0.5:0.38),B.eQ,22),new A.ab(-4,B.G,B.bV.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.am(B.W,g,B.b_,B.q,A.a([C.aNa(!0,A.m(16),1/0,B.KU,g,r.c,1/0),A.bU(g,new A.o(g,g,g,g,g,new A.a3(B.aX,B.b1,B.w,A.a([B.c.j(0.06),B.K,B.x.j(0.22)],x.O),g,g),B.n),B.bb),A.an(g,h.a8k(!0),g,g,8,g,8,g),A.an(g,A.cp0(h.a8k(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.cp0(h.a8k(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.cp0(h.a8k(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dq(D.bum,D.f24,h.gaXD(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b6(A.m(12),B.X),g,g,g)),g,g,g,10,g,g)],a1),g),B.ao),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bG1,B.n),g,g,g,g,B.lZ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aF,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZY,B.nd,B.fV],u):A.a([B.aW,B.aS,B.bV],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aS.j(f?0.45:0.35),B.eQ,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jL,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.fX,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.bzj(h.d.gw4(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cq,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.fJ.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aY.j(0.28),B.cF,14)],t)
j=B.aY.j(0.22)
i=A.m(10)
u=A.p(g,A.bu(r,new A.am(B.W,g,B.a9,B.q,A.a([p,new A.C(D.bj3,A.B(A.a([o,B.aw,A.aD(!1,B.a1,!0,g,A.aI(!1,n,!0,A.es(new A.C(Ad.Vp,A.v(A.a([A.p(g,D.aid,B.h,g,g,new A.o(j,g,A.H(B.aY.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.h2,D.eT5],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc6N(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ad)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ao),B.h,g,g,new A.o(g,g,g,v,s,new A.a3(B.ax,B.aC,B.w,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fD(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bu,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aF,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b8,A.dq(Af.YF,D.eR6,h.gbtz(),A.bk(B.aS,g,g,g,B.c,g,B.iK,g,new A.b6(A.m(12),B.X),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ab],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dV:B.c3,B.r,1)
t=A.V(B.Xf,f?B.bq:B.bv,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aF,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bv,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.uo,g,g,1/0))}else B.d.v(d,new A.J(w,new C.evD(h,new C.t8(f)),A.U(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zC,A.au(A.mq(g,f?B.bq:B.bv,g,g,g,g,g,g,g,g),g,g,g),g))
return A.ce(g,e,A.bq(!0,A.v(A.a([new A.C(B.zI,a0,g),A.D(A.ci(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wD,g,g,B.ak),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),g,!1,!1,g,g)},
bx3(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.ab(0,B.G,B.x.j(r?0.35:0.08),B.cF,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aSN,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hV:B.fY,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aN:B.aF,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcKC()
v=A.zM(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bv,u,u,u,u,u,u,u,u,12,u,u,B.a3,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b7,B.R,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bV.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bzj(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a3(B.a4,B.a7,B.w,k,u,u),B.n),u,u,u,u,B.h8,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.L0(A.B(A.a([m,A.D(new A.C(B.acA,A.B(A.a([l,B.bd,t,B.aa,k,A.aF(u,u,u,u,A.V(B.ct,(r?B.bq:B.bv).j(0.75),u,u,u,20),u,u,u,new C.evo(this,d),u,u,u,u,u,B.c8)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ag,u,B.e,B.j,0,u,u),u),B.ao),B.h,u,D.aRG,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.abf.prototype={
Dc(d){return this.bG0(d)},
bG0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Dc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oD(d,o,!1),$async$Dc)
case 3:if(!f||d.e==null){w=1
break}A.a9(d,!1).M(null)
w=4
return A.b(A.bN(A7.zA,null,x.H),$async$Dc)
case 4:s=t.d
w=5
return A.b(C.fq0(!0,o,s),$async$Dc)
case 5:r=f
q=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Fa(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$Dc)
case 6:p=f
w=7
return A.b(A.oC(o,!1),$async$Dc)
case 7:if(d.e==null){w=1
break}d.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Dc,v)},
Y8(d){return this.cmv(d)},
cmv(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oD(d,s,!1),$async$Y8)
case 3:if(!f||d.e==null){w=1
break}A.a9(d,!1).M(null)
A.hm(d,new C.apH(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oC(s,!1),$async$Y8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y8,v)},
Oj(d){return this.ciH(d)},
ciH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a9(d,!1).M(null)
w=3
return A.b(A.hm(d,D.aAY,!0,"NgmyWorksheetProjectScan",x.N),$async$Oj)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bzk(s),$async$Oj)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.H(x.q).f.P(D.eyN)
w=1
break}q=C.fK_(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$Oj)
case 5:if(d.e==null){w=1
break}d.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
Y9(d){return this.cu9(d)},
cu9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Y9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a9(d,!1).M(null)
w=3
return A.b(C.byS(),$async$Y9)
case 3:s=f
if(s==null){w=1
break}r=C.fK_(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$Y9)
case 4:if(d.e==null){w=1
break}d.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Y9,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=new C.t8(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.ab(0,B.G,B.x.j(u?0.35:0.08),B.jQ,36)],x.V),o=x.p
return A.bq(!0,new A.C(B.ul,A.p(v,A.v(A.a([w.cl6(d,t,s),new A.C(D.bis,A.v(A.a([w.b_y(t,"QR restore"),B.T,A.B(A.a([w.aVE(t,!0,B.j6,B.aY,B.aY,new C.evF(w,d),"Show to scan","QR code"),B.aw,w.aul(t,B.iN,B.b3,B.bB,new C.evG(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d3,w.b_y(t,"Backup files"),B.T,A.B(A.a([w.aul(t,B.hr,B.aS,B.bV,new C.evH(w,d),"Full copy","Backup file"),B.aw,w.aul(t,M.xi,B.aZ,B.aK,new C.evI(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ao,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ah,!0,!0)},
cl6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eK,B.cY,B.fq],k):A.a([B.aW,B.aS,B.bV],k)
w=A.an(l,A.V(B.t8,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kw,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.x.j(0.2),B.cF,12)],x.V)
r=this.d
s=A.p(l,C.aNa(!0,A.m(13),64,D.bpE,l,r.c,64),B.ao,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aL_,l,l,l)
r=C.bzj(r.gw4(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.W,l,B.a9,B.q,A.a([w,new A.C(D.biQ,A.v(A.a([v,A.B(A.a([s,B.es,A.D(A.v(A.a([u,B.av,t,B.P,A.B(A.a([r,B.aa,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fC,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.ct,B.c.j(0.85),l,l,l,l),l,l,l,new C.evE(d),l,l,l,A.nb(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aIo,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a3(B.ax,B.aC,B.w,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b_y(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.aa,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bv,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aVE(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.abm:B.aN
if(e)w=B.aY.j(o?0.45:0.35)
else{w=o?B.dV:B.c3
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aY.j(0.12),B.cF,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qk,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aN:B.aF,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.es(new A.C(E.Vq,A.v(A.a([t,B.ab,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bv,r,r,r,r,r,r,r,r,11,r,r,B.cq,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ad),1)},
aul(d,e,f,g,h,i,j){return this.aVE(d,!1,e,f,g,h,i,j)}}
C.apH.prototype={
S(){return new C.bhp()}}
C.bhp.prototype={
Z(){this.a0()
this.abY()},
abY(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bzl(p.c,p.d),$async$abY)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.evi(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.evj(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=g?B.zb:B.iX,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.er,g?B.af:B.aj,h,h,h,18),h,h,h,new C.evk(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.yj],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eK,B.cY,B.fq],s):A.a([B.aW,B.aS,B.bV],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aS.j(g?0.4:0.3),B.eQ,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dO,B.L,h,h)
p=C.bzj(p.gw4(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ar,A.B(A.a([p,B.aa,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fC,h,h,h)],u),B.m,h,B.b7,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a3(B.ax,B.aC,B.w,s,h,h),B.n),h,h,h,h,E.VM,h,h,1/0)
t=g?D.b78:B.c
q=A.m(24)
p=A.H(w?B.aY.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.x.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a46,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dQ5)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pl(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c4,h,h,h))}}o.push(B.aO)
n=w?B.aY:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.aY:B.aS).j(0.35),B.r,1)
k=w?B.La:B.LC
k=A.V(k,w?B.aY:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.af:B.aj,h,h,h,h,h,h,h,h,12,h,h,B.a3,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iK,h,h,h))
return A.ce(h,f,A.bq(!0,A.v(A.a([new A.C(A4.Kn,e,h),A.D(A.ci(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rQ,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adH,h,h,B.ak),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),h,!1,!1,h,h)}}
C.apM.prototype={
S(){return new C.aBW(A.yk(B.JG,B.n7,B.td))}}
C.aBW.prototype={
p(){this.d.p()
this.a2()},
aIn(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iG(w,d)},
c2G(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hOE(t)
if(s!=null){this.aIn(s)
return}r=C.fYg(t)
if(r!=null)q=A.dp(r,p,0)
else q=!1
if(q){this.aIn(B.a.i(B.a.aY(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eA(A.a([A.aF(t,t,t,t,A.V(u.f?B.t0:A1.Lg,t,t,t,t,t),t,t,t,new C.evm(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.zb,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.f1Z,t,t,t,1,t,!0),q=A.yj(u.d,B.bQ,u.gc2F()),p=A.m(28)
p=A.au(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.ab(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.x.j(0.72)
v=A.m(16)
return A.ce(r,B.x,new A.am(B.W,t,B.b_,B.q,A.a([q,p,A.an(32,A.p(t,D.f0R,B.h,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iL,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGH.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mt.prototype={
S(){return new C.aBY(D.a64,A.a([],x.D))},
bn(){return this.r.$0()},
gdT(){return this.c}}
C.aBY.prototype={
gcsa(){return J.bAr(this.e,0,new C.ew4())},
Z(){this.a0()
$.aT.c_$.push(this)
this.uQ()},
p(){$.aT.hv(this)
this.a2()},
iE(d){if(d===B.fo)this.uQ()},
uQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BQ(q.a.c).cJ(0,B.k6),$async$uQ)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.ew0(q,p))
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
if(q.c!=null&&q.f)q.n(new C.ew1(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uQ,v)},
GC(d){return this.bCU(d)},
bCT(){return this.GC(null)},
bCU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hQC(l,d),$async$GC)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l5(l,r,q,D.cR9,new A.Q(Date.now(),0,!1))
w=4
return A.b(C.JK(t.a.c,p),$async$GC)
case 4:o=f
w=5
return A.b(t.uQ(),$async$GC)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.H(x.q).f.P(D.evY)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.H(q).f.P(D.exH)
else n.H(q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Dg(m)
case 1:return A.h(u,v)}})
return A.i($async$GC,v)},
Dg(d){return this.c6z(d)},
c6z(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Dg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hm(s,new C.apN(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Dg)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.JK(u.a.c,t),$async$Dg)
case 5:case 4:w=6
return A.b(u.uQ(),$async$Dg)
case 6:return A.h(null,v)}})
return A.i($async$Dg,v)},
uE(d){return this.bSj(d)},
bSj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.byS(),$async$uE)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hm(r,D.aAY,!0,"NgmyWorksheetProjectScan",x.N),$async$uE)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bzk(q),$async$uE)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.H(x.q).f
r.P(A.b0(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fK_(s)
w=15
return A.b(C.JK(t.a.c,p),$async$uE)
case 15:o=f
w=16
return A.b(t.uQ(),$async$uE)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.H(x.q).f.P(D.exM)
w=1
break}r.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Dg(p)
case 1:return A.h(u,v)}})
return A.i($async$uE,v)},
Md(d){return this.bBA(d)},
bBA(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Md=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ch(null,null,!0,null,new C.evM(d),s,null,!0,!0,x.y),$async$Md)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.of(t.a.c,A.a([],x.D)),$async$Md)
case 6:w=7
return A.b(t.uQ(),$async$Md)
case 7:s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.ew2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Md,v)},
c6M(d){var w=this.c
w.toString
A.c2(B.K,null,new C.evV(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b09(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jg
else w=B.c
v=A.m(16)
u=A.H(p?B.dV:B.c3,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aN:B.aF,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(r,A.v(A.a([s,B.ab,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bv,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uk,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ad)},
YD(d,e){return this.c6A(d,e)},
c6A(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c2(B.K,null,new C.evQ(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$YD)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h65(r,new C.evR(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Mf(d,e),$async$YD)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$YD,v)},
aYe(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aD
else t=h.a?B.aN:B.aF
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bv,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,u,!0,new A.C(B.zO,A.B(A.a([s,B.bd,t,A.V(B.eo,w?B.bq:B.bv,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ad)},
cdf(d,e,f,g,h,i){return this.aYe(!1,d,e,f,g,h,i)},
Mf(d,e){return this.bBK(d,e)},
bBK(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kR(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Mf)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bxD(t.a.c,d.a),$async$Mf)
case 6:w=7
return A.b(t.uQ(),$async$Mf)
case 7:r=t.c
if(r==null){w=1
break}r.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Mf,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=new C.t8(o),m=o?B.bX:B.iX
if(q.f)o=D.aY3
else{w=q.bwj(n)
v=q.bRq(n)
u=q.gbtt()
if(o)t=B.jg
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ab,v,B.aO,new C.Ei(A.p(p,A.B(A.a([q.axL(Q.KT,"Projects",n,D.a64),q.axL(B.uv,"Cashier",n,D.aOb),q.axL(B.Ei,"Family Tree",n,D.fob)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eh,0.95,u,p),B.bu],r)
w=q.d
if(w===D.a64){w=J.aa(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aN:B.aF,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b8,new C.aus(q.gaMv(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.cdh(n)],r))}else{o=q.a
if(w===D.aOb)u.push(new C.alT(o.c,n,p))
else{w=q.r
u.push(new C.amZ(o.c,o.d,o.e,o.f,new C.ew7(q),new C.ew8(q),new A.cx(w,x.b4)))}}o=A.ci(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A9.Kh,p,p,B.ak)}return A.ce(p,m,A.bq(!0,o,!0,!1,B.ah,!0,!0),p,!1,!1,p,p)},
bwj(d){var w=null,v=A.m(8),u=d.a,t=A.V(O.WV,u?B.bq:B.bv,w,w,w,16)
return A.aI(!1,v,!0,new A.C(B.kY,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bv,w,w,w,w,w,w,w,w,14,w,w,B.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evJ(this),w,w,w,w,w,w,w)},
gbtt(){switch(this.d.a){case 0:return D.a5n
case 1:return D.ffq
case 2:return D.a5o}},
bRq(d){var w=null,v=A.m(15),u=A.a([new A.ab(0,B.G,B.aS.j(0.35),B.cs,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bA1,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bmY,A.aD(!1,B.a1,!0,w,A.aI(!1,A.m(12),!0,A.p(w,D.bxB,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evN(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ad)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.Ei(A.p(w,A.v(A.a([new A.C(E.Vw,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.zM(this.gcsa()),w,w,w,w,w,w,D.eNJ,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uj,B.iL,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ah,1,D.ffp,w)},
axL(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aS.j(0.42),B.cF,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bv
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bv
return A.D(A.aD(!1,B.a1,!0,u,A.aI(!1,s,!0,A.dj(u,A.B(A.a([w,B.eA,new A.dm(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b7,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.io,u,u,u,B.Kk,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.ew3(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ad),1)},
cdh(d){var w,v,u,t,s,r,q=this,p=null
if(J.cj(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bxG,B.h,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aS.j(0.5),B.eQ,28)],x.V),D.bIt,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aF,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Ei(A.p(p,A.v(A.a([t,B.d3,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bv,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dX,A.B(A.a([A.D(q.aNZ(B.iN,"Scan QR",new C.evY(q),d),1),B.aw,A.D(q.aNZ(M.xi,"Upload file",new C.evZ(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bL(D.fbh,q.gaMv(),A.bk(B.aS,p,p,p,B.c,B.fR,p,p,new A.b6(A.m(12),B.X),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bjU,1.05,D.a5n,p)}w=J.b5(q.e,new C.ew_(q,d),x.l)
w=A.z(w,w.$ti.k("ai.E"))
return new C.Ei(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a5n,p)},
aNZ(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(w,A.v(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eM9,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.acu,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ad)},
cdg(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dV:B.c3,B.r,1),p=A.a([new A.ab(0,B.G,B.x.j(t?0.35:0.08),B.e9,10)],x.V),o=A.m(14),n=t?B.bq:B.bv
n=A.bu(B.a6I,new A.fD(1.7777777777777777,C.aNa(!0,B.fp,1/0,Q.KT,n,d.c,1/0),u),B.ao)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aN:B.aF,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.zM(d.gw4()),u,u,u,u,u,u,D.eKj,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.a1,!0,u,A.aI(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.B(A.a([v,A.aF(u,u,u,u,A.V(Aa.Lt,t?B.bq:B.bv,u,u,u,u),u,u,u,new C.evW(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.evX(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ad),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e0,u,u,u,1/0)}}
C.btJ.prototype={}
C.qp.prototype={
ac(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcKC(){var w,v,u,t,s=this.c
if(s===B.k.jA(s))w=B.o.u(B.k.N(s))
else{v=B.k.a9(s,2)
u=A.ae("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l5.prototype={
gw4(){return B.d.cG(this.d,0,new C.cqV())},
ac(){var w=this,v=w.d,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.cqU(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ab()],x.N,x.z)},
b70(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l5(w.a,w.b,v,u,w.e)},
b6I(d){return this.b70(d,null)},
QX(d){return this.b70(null,d)}}
C.Ge.prototype={
a3(){return"FamilyGender."+this.b}}
C.hQ.prototype={
ac(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h1V(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aAi(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hQ(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aie.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kp.prototype={
galH(){var w=this.f
return new A.a4(w,new C.bJz(),A.U(w).k("a4<1>")).gJ(0)},
ac(){var w=this,v=w.f,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.bJy(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ab(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hHa(w.y)],x.N,x.z)},
xG(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kp(w.a,v,u,t,s,r,w.r,q,p,o)},
b7_(d,e){var w=null
return this.xG(w,w,d,e,w,w,w,w)},
cAH(d,e,f,g,h,i,j){return this.xG(d,e,f,g,h,i,j,null)},
aAn(d,e){var w=null
return this.xG(w,w,w,d,w,w,e,w)},
czb(d){var w=null
return this.xG(w,w,w,w,w,w,d,w)},
czz(d){var w=null
return this.xG(w,w,w,w,w,w,w,d)},
aA9(d){var w=null
return this.xG(w,w,w,w,d,w,w,w)},
cAd(d,e,f){var w=null
return this.xG(w,d,w,e,w,w,f,w)},
cyZ(d){var w=null
return this.xG(w,w,d,w,w,w,w,w)},
czM(d,e){var w=null
return this.xG(d,w,w,w,w,e,w,w)}}
C.cqW.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cqX.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDZ.prototype={}
C.b5c.prototype={
bx(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b5c()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aX(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b5b.prototype={
gvp(){return!0},
gEJ(){return this.z.b<this.b.length},
aPy(d){switch(0){case 0:return d.a.c}},
aPf(d){switch(0){case 0:return d.a.d}},
bKY(d,e){switch(0){case 0:return new A.hA(d,e)}},
bKm(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fS(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iv(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.G_(b4)
switch(0){case 0:v=b5.b
u=new A.km(0,v,0,1/0)
t=w===B.QO
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fS(b4,u,!0)
f=b1.aPy(g)
f.toString
e=b1.aPf(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDZ(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDZ(k,j,i))}d=s.length
switch(0){case 0:q=b5.cq(new A.hA(m,l))
a0=q.a
a1=q.b
b1.a=new A.iv(0,0,a0,a1)
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
a8=b1.aPy(g)
e=b1.aPf(g)
e.toString
a9=b1.bKm(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bKY(a6,a3+a9)
b0=g.a
g.a=new A.iv(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fO(d){var w,v,u,t,s,r=this
r.kO(d)
w=d.b
w.hR()
v=A.di()
u=r.a
v.dZ(u.a,u.b,0,1)
w.of(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fO(d)
w.mK(0)},
Fd(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hR(){return this.z}}
C.brZ.prototype={}
var z=a.updateTypes(["aw<~>()","S(hQ)","S(kp)","~()","S(mT)","a1<n,@>(kp)","I(kp,kp)","n(hQ)","kp(a1<@,@>)","S(l5)","S(tI)","mT(a1<@,@>)","tI()","I(l5,l5)","hQ(a1<@,@>)","a1<n,@>(hQ)","S(qp)","aw<~>(l5)","er<n?>(hQ)","I(hQ,hQ)","n?(hQ)","a1<n,@>(mT)","Y1(Y)","n(n)","aaV(Y)","r(nR)","I(mT,mT)","hQ(hQ)","cG(br<n,Ev>)","cG(Iz)","~(hQ)","I?(hQ)","hQ()","ak<hQ>()","S(tH)","S(Iz)","C(hQ)","~(Ge)","S(acq)","r(Ge,n,a0)","Xq(Y)","br<n,ak<a1<n,@>>>(n,ak<mT>)","~(I)","+count,id,name(I,n,n)(kp)","kp(kp)","Ym(Y)","Yn(Y)","S(ll)","ll()","n(kp)","a_5(Y)","X0(Y)","X_(Y)","Xo(Y)","Xs(Y)","r(qp)","abf(Y)","~(lI)","aw<~>([n?])","O(O,l5)","r(l5)","O(O,qp)","a1<n,@>(qp)","qp(a1<@,@>)","WZ(Y)","QX(Y)","cp(Gd)","l5(a1<@,@>)","tH()","n(l5)","a1<n,@>(l5)","n(Q)","I(hQ)","kp(a1<n,@>)","Wy(Y)"])
C.fiE.prototype={
$1(d){return d.a+" "+d.b},
$S:117}
C.fiD.prototype={
bfL(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qi(s,d,B.hc,E.DG),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.R(r!=null&&A.Jy(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bfL(d)},
$S:325}
C.fiF.prototype={
$1(d){return d.b},
$S:117}
C.frD.prototype={
$1(d){var w=null
return A.ew(w,B.K,new F.NO(this.a,this.b,w),w,w,0,B.Vr,B.cZ,w,w,w)},
$S:46}
C.f8V.prototype={
$1(d){return d!=null},
$S:217}
C.f8W.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:217}
C.f90.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:170}
C.fgn.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f2(d,w,w,w,A.fY(w,B.qN,w,w,w,w,w,w,w,B.dm,w,w,10.5,w,B.ed,w,!0,w,w,w,w),w),u=f?B.ed:B.uq
return new A.nn(D.bft,A.a7y(A.a([new A.fI(130,w,v),new A.y3(1,B.Eb,A.f2(e,w,w,w,A.fY(w,g==null?D.dRZ:g,w,w,w,w,w,w,w,B.dm,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wh,B.l6))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1880}
C.fgm.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uQ(999)
f=A.wh(A.lg(h,A.f2("Cashier",h,h,h,A.fY(h,D.y8,h,h,h,h,h,h,h,B.dm,h,h,10,h,B.ed,h,!0,h,h,h,h),h),h,new A.kn(D.dRQ,h,f,B.hu,h),h,h,D.bfV,h))
w=A.wh(A.f2("Debt receipt",h,h,h,A.fY(h,h,h,h,h,h,h,h,h,B.dm,h,h,22,h,B.ed,h,!0,h,h,h,h),h))
v=A.wh(A.f2(C.w1(new A.Q(Date.now(),0,!1),!0),h,h,h,D.a4g,h))
u=A.uQ(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f2(s,h,h,h,A.fY(h,h,h,h,h,h,h,h,h,B.dm,h,h,14,h,B.ed,h,!0,h,h,h,h),h)
r=A.f2("Person who owes",h,h,h,D.a4g,h)
q=A.uQ(10)
p=x.C
u=A.lg(h,A.y_(A.a([s,new A.fI(h,2,h),r,new A.fI(h,10,h),A.lg(h,A.y_(A.a([A.f2("Amount owed",h,h,h,D.a4g,h),new A.fI(h,2,h),A.f2(A.zM(t.c),h,h,h,A.fY(h,D.y8,h,h,h,h,h,h,h,B.dm,h,h,20,h,B.ed,h,!0,h,h,h,h),h)],p),B.qd,B.l6),h,new A.kn(B.op,h,q,B.hu,h),h,h,D.bfa,1/0)],p),B.qd,B.l6),h,new A.kn(E.aC_,h,u,B.hu,h),h,h,D.bh0,1/0)
q=new A.n5(D.dRT,0.9,B.kp)
r=A.uQ(12)
s=i.c
o=s.$2("Original due",C.w1(t.r,!1))
n=s.$2("Current due",C.w1(t.f,!1))
m=i.d
l=new A.n5(m,1.1,B.kp)
k=A.uQ(8)
j=i.a
k=A.a([o,n,new A.fI(h,6,h),A.lg(h,A.wh(A.f2(t.gaGV(),h,h,h,A.fY(h,m,h,h,h,h,h,h,h,B.dm,h,h,11,h,B.ed,h,!0,0.5,h,h,h),h)),h,new A.kn(h,new A.p2(l,l,l,l),k,B.hu,h),h,h,D.bg4,1/0),new A.fI(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.y8))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.y8))
else{n=A.f2("Missed days ("+n+")",h,h,h,A.fY(h,B.qN,h,h,h,h,h,h,h,B.dm,h,h,10.5,h,B.ed,h,!0,h,h,h,h),h)
m=A.U(o).k("J<1,Qx>")
o=A.z(new A.J(o,new C.fgl(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fI(h,4,h),n,new A.fI(h,6,h),new C.b5b(5,5,new C.b5c(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fI(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fI(h,8,h),w,new A.fI(h,3,h),v,new A.fI(h,16,h),u,new A.fI(h,10,h),A.lg(h,A.y_(k,B.wh,B.l6),h,new A.kn(h,new A.p2(q,q,q,q),r,B.hu,h),h,h,B.acE,1/0)],p)
w=j.a
if(w!=null){v=new A.n5(B.GD,1,B.kp)
B.d.v(f,A.a([new A.fI(h,16,h),A.f2("Debtor signature",h,h,h,A.fY(h,B.qN,h,h,h,h,h,h,h,B.dm,h,h,10,h,B.ed,h,!0,h,h,h,h),h),new A.fI(h,6,h),A.lg(h,new A.Gt(w,B.SR,h,h),h,new A.kn(h,new A.p2(v,v,v,v),A.uQ(6),B.hu,h),82,h,B.Km,1/0)],p))}f.push(new A.fI(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f2(w,h,h,h,D.eDx,h))
f.push(new A.fI(h,18,h))
f.push(A.wh(A.f2("NGMY.ORG",h,h,h,A.fY(h,D.y8,h,h,h,h,h,h,h,B.dm,h,h,14,h,B.ed,h,!0,1.8,h,h,h),h)))
return f},
$S:399}
C.fgl.prototype={
$1(d){var w=null,v=new A.n5(D.GE,0.7,B.kp),u=A.uQ(999)
return A.lg(w,A.f2(C.w1(d,!1),w,w,w,A.fY(w,D.GE,w,w,w,w,w,w,w,B.dm,w,w,9.5,w,B.ed,w,!0,w,w,w,w),w),w,new A.kn(w,new A.p2(v,v,v,v),u,B.hu,w),w,w,D.ble,w)},
$S:1881}
C.bY5.prototype={
$1(d){var w=null,v=B.bO.j(0.08),u=A.m(999),t=A.H(B.bO.j(0.28),B.r,1)
return A.p(w,A.d(C.w1(d,!1),w,w,w,w,w,w,D.eJO,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ey,w,w,w)},
$S:1882}
C.fs8.prototype={
$1(d){var w=null,v=A.aG(d,B.bR,x.w).w,u=A.m(26),t=A.aF(w,w,w,w,B.aix,w,w,w,new C.fs5(d),w,w,w,w,w,B.c8),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ew(w,B.K,new A.d1(new A.aW(0,380,0,v.a.b*0.9),A.aD(!1,B.a1,!0,u,new A.C(B.Vi,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dm(1,B.cl,A.ci(A.v(A.a([new A.ep(new C.aVm(r,w),s),B.T,A.B(A.a([A.D(A.ez(B.xt,D.f7P,new C.fs6(s,r,d),A.db(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f0,w,new A.b6(A.m(14),B.X),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.D(A.dq(B.Yv,D.f4I,new C.fs7(r,d),A.bk(B.aW,w,w,w,B.c,w,B.f0,w,new A.b6(A.m(14),B.X),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ak),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aF,0,w,w,w,w,w,B.ad),w),w,w,0,Ae.VF,B.cZ,w,w,w)},
$S:46}
C.fs5.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.fs6.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ag$.x.h(0,t.a)
m=m==null?null:m.gb6()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lQ(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fO),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f5(B.dD.gaO(s))
m=t.b
q=B.a.i(m.b)
p=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.am(o,0,32)
w=5
return A.b(A.ri(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fs7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fmY(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.H(x.q).f
s.P(A.b0(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fs0.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ew(w,B.aF,A.v(A.a([new A.C(D.bgP,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.mX,w,w,w),1),A.aF(w,w,w,w,B.l4,w,w,w,new C.frZ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.cl,new A.C(B.ir,A.bu(A.m(14),A.fF(t,B.A,w,w,B.cm,B.dq,!1,w,!1,w,w),B.ao),w),w),new A.C(B.K_,new A.a5(1/0,w,A.dq(B.oi,D.aLo,new C.fs_(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b6(A.m(14),B.X),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.Kb,B.cZ,w,new A.b6(v,B.X),w)},
$S:46}
C.frZ.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.fs_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ri(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fsc.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ew(w,B.aF,new A.C(D.bgX,A.v(A.a([A.B(A.a([D.bmb,A.aF(w,w,w,w,B.l4,w,w,w,new C.fsa(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.ep(A.bu(A.m(14),A.p(w,A.b2(w,w,w,new C.b7l(s.ax,w),B.at),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ao),t),B.ab,new A.a5(1/0,w,A.dq(B.oi,D.aLo,new C.fsb(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b6(A.m(14),B.X),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b6(v,B.X),w)},
$S:46}
C.fsa.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.fsb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ag$.x.h(0,t.a)
n=n==null?null:n.gb6()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lQ(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fO),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.am(p,0,32)
r=J.f5(B.dD.gaO(s))
w=5
return A.b(A.ri(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fbH.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dyN.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dyy.prototype={
beZ(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c2(t,null,new C.dyB(s,q,e),p,!0,!0,!1,B.GT,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dyC(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.beZ(d,e)},
$S:1883}
C.dyB.prototype={
$1(d){var w,v=null,u=this.c===B.v0,t=u?D.cWB:D.cTc
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aN:B.aF,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bq(!0,new A.C(L.adb,A.v(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab,A.i7(!0,v,v,B.z,K.aIG,new C.dyA(this.a,w,t,d),t.length,v,B.dL,B.ak,!0)],x.p),B.ag,v,B.e,B.R,0,B.p),v),!0,!1,B.ah,!0,!0)},
$S:34}
C.dyA.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aN
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bv).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aI(!1,p,!0,A.p(B.A,C.aVl(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dyz(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dyz.prototype={
$0(){A.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.dyC.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dyw.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dyx.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cF(B.co,e,v)
return new A.cX(e,!1,A.io(B.A,A.au(A.aD(!1,B.a1,!0,v,new A.ea(new C.dyv(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ad),v,v,v),v,new A.bd(t,new A.bl(0.96,1,u),u.k("bd<bF.T>"))),v)},
$S:30}
C.dyv.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bR,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bq:B.bv).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aI(!1,v,!0,new A.C(B.eh,A.V(B.ct,i.a.d.a?B.bq:B.bv,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dyg(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,14,k,k,B.a3,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aOv("Name")
r=l.a
q=r.d==null?k:new C.dyh(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lR
n=A.H(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6T(new A.C(B.hn,A.aI(!1,p,!0,A.p(B.A,C.aVl(m==null?"\ud83d\udc64":A.fhb(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kj,k,B.a3Y,k,k)
v=A.a([v,B.ab,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bv,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aP5("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dyi(r,a0),r.d===B.v0),1),B.aa,A.D(i.aP5("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dyn(r,a0),r.d===B.a0V),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a4,k,k,A.hh(D.bzj,D.f6m,new C.dyo(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c8)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,14,k,k,B.a3,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tK(A.ae("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aOw("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dY,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aN
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bq:B.bv).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.a3,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.w1(r.a,!1)
v.push(A.aD(!1,B.a1,!0,q,A.aI(!1,p,!0,A.p(k,A.B(A.a([A.D(A.v(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bwd],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dyp(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ad))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aOv("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ab)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aWD(r.b.length!==0,B.m0,new C.dyq(r,i,a0),new C.dyr(r,a0),"Upload from gallery","ID photo"))
v.push(i.aWD(r.c.length!==0,D.bpC,new C.dys(r,i,d,a0),new C.dyt(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ac.a5w("Signature (optional)",t,new C.dyu(a0),new C.dyj(a0,t),new C.dyk(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bq:B.bv
s=(i?B.bq:B.bv).j(0.28)
s=A.D(A.dV(E.aLi,new C.dyl(d),A.db(k,k,k,k,k,k,k,k,k,t,k,k,B.ws,k,new A.b6(A.m(10),B.X),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.ws,k,new A.b6(A.m(10),B.X),k,k,k)
v.push(A.B(A.a([s,B.aa,A.D(A.bL(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tK,k,k,k),new C.dym(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ci(A.v(v,B.ag,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ak),B.h,k,new A.aW(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.um,B.iL,k,k,360)},
$S:158}
C.dyg.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dyh.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dyi.prototype={
$0(){return this.b.$1(new C.dyf(this.a))},
$S:0}
C.dyf.prototype={
$0(){var w=this.a
w.d=B.v0
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dyn.prototype={
$0(){return this.b.$1(new C.dye(this.a))},
$S:0}
C.dye.prototype={
$0(){var w=this.a
w.d=B.a0V
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dyo.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dyp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xP(null,u.b,A.bW(2020,1,1,0,0,0,0,0),null,s,A.bW(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dyd(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyd.prototype={
$0(){var w=this.b
return this.a.a=A.bW(w.gcd(),w.gcb(),w.gcr(),0,0,0,0,0)},
$S:0}
C.dyq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NK(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dyc(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyc.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dyr.prototype={
$0(){return this.b.$1(new C.dyb(this.a))},
$S:0}
C.dyb.prototype={
$0(){return this.a.b=""},
$S:0}
C.dys.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c2(q,null,new C.dy9(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NK(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dya(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dy9.prototype={
$1(d){var w=null
return A.bq(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ai4,w,w,w,w,new C.dy3(d),!1,w,w,w,w,w,w,w,D.eYz,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ai2,w,w,w,w,new C.dy4(d),!1,w,w,w,w,w,w,w,D.f3P,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ah,!0,!0)},
$S:34}
C.dy3.prototype={
$0(){A.a9(this.a,!1).M("camera")
return null},
$S:0}
C.dy4.prototype={
$0(){A.a9(this.a,!1).M("gallery")
return null},
$S:0}
C.dya.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dyt.prototype={
$0(){return this.b.$1(new C.dy8(this.a))},
$S:0}
C.dy8.prototype={
$0(){return this.a.c=""},
$S:0}
C.dyu.prototype={
$0(){return this.a.$1(new C.dy7())},
$S:0}
C.dy7.prototype={
$0(){},
$S:0}
C.dyj.prototype={
$0(){return this.a.$1(new C.dy6(this.b))},
$S:0}
C.dy6.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dyk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.afi(u.a,null,null,new C.dy5(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dy5.prototype={
$4(d,e,f,g){this.a.$1(new C.dy2(this.b,d))},
$S:448}
C.dy2.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.v(w,this.b)},
$S:0}
C.dyl.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dym.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.H(x.q).f.P(D.ezD)
return}if(w.a.d==null){w.c.H(x.q).f.P(D.ewz)
return}A.a9(w.c,!1).M(!0)},
$S:0}
C.dyQ.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dyR.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bq:B.bv).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aN:B.aF,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zM(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bv,r,r,r,r,r,r,r,r,13,r,r,B.a3,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y6(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y6(r).length>0?B.bO:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bv
t=(q?B.bq:B.bv).j(0.28)
s=x.p
return new A.cX(e,!1,A.au(A.aD(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dV(B.n_,new C.dyO(d),A.db(r,r,r,r,r,r,r,r,r,w,r,r,B.jG,r,new A.b6(A.m(10),B.X),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.D(A.bL(D.f4d,new C.dyP(d),A.bk(B.cY,r,r,r,B.c,r,B.jG,r,new A.b6(A.m(10),B.X),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ag,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zT,E.Vw,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ad),r,r,r),r)},
$S:30}
C.dyO.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dyP.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dyK.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dyL(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bq:B.bv).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aN:B.aF,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zM(l.c),s,s,s,s,s,s,D.eLh,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jo((r.a.d.a?B.bq:B.bv).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Xf,"View receipt",new C.dyD(r,d,l))
u=l.x!=null
t=u?B.uK:B.p9
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bgU,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dyE(r,d,l)),q.$3$icon$label$onTap(B.A9,"Edit",new C.dyF(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.m0,"View / download ID",new C.dyG(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bpB,"View / download selfie",new C.dyH(r,d,l)))
if(l.gaBX())p.push(q.$3$icon$label$onTap(A3.Ym,"View / download signature",new C.dyI(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bO,B.e7,"Delete",new C.dyJ(r,d,l)))
p.push(B.av)
return A.bq(!0,new A.C(B.uj,A.p(s,A.v(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ah,!0,!0)},
$S:34}
C.dyL.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aN:B.aF
else w=d
return A.aI(!1,v,!0,new A.C(B.eN,A.B(A.a([A.V(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1884}
C.dyD.prototype={
$0(){A.a9(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fs4(w,this.c)},
$S:0}
C.dyE.prototype={
$0(){A.a9(this.b,!1).M(null)
this.a.Qj(this.c)},
$S:0}
C.dyF.prototype={
$0(){A.a9(this.b,!1).M(null)
this.a.BZ(this.c)},
$S:0}
C.dyG.prototype={
$0(){var w,v,u
A.a9(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzH(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dyH.prototype={
$0(){var w,v,u
A.a9(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzH(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dyI.prototype={
$0(){A.a9(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fs9(w,this.c)},
$S:0}
C.dyJ.prototype={
$0(){A.a9(this.b,!1).M(null)
this.a.Mq(0,this.c)},
$S:0}
C.dyS.prototype={
$1(d){return d.x==null},
$S:261}
C.dyT.prototype={
$1(d){return d.x!=null},
$S:261}
C.dyU.prototype={
$2(d,e){return d+e.c},
$S:1885}
C.dyV.prototype={
$0(){return this.a.btW()},
$S:0}
C.dyM.prototype={
$0(){return this.a.aca(this.b)},
$S:0}
C.fc4.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fc5.prototype={
$0(){return B.d.gL(D.Zy)},
$S:z+68}
C.d_f.prototype={
$0(){var w=this.a
return w.n(new C.d_d(w,this.b))},
$S:0}
C.d_d.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d_e.prototype={
$0(){},
$S:0}
C.d_g.prototype={
$0(){var w=this.a.gbS7()
A.a9(this.b,!1).M(w)
return null},
$S:0}
C.fdW.prototype={
$1(d){return C.fO0(A.a_(d,x.N,x.z))},
$S:z+11}
C.fdX.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fdY.prototype={
$2(d,e){var w=A.c4(d.a,null),v=A.c4(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+26}
C.fqM.prototype={
$1(d){return d.ac()},
$S:z+21}
C.fys.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fby.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bJu.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eR(e,v)?v:null},
$S:1886}
C.frh.prototype={
$1(d){var w=this
return new C.Xq(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d_V.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d_U(w,d))},
$S:z+66}
C.d_U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_J.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.ct(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.d_G.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d_h.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d_i.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d_K.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d_q.prototype={
$1(d){var w=null,v=A.M(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aF,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bv,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eq(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.d_o(d),w,w),A.bL(B.vo,new C.d_p(d),A.bk(B.ms,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:21}
C.d_o.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.d_p.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.d_r.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.d_H.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d_I.prototype={
$0(){return B.d.gL(D.xD)},
$S:z+12}
C.d_m.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxm(0),t=J.aa(w.d)
w=J.aa(w.d)===1?"page":"pages"
return new C.QX(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d_n.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_s.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WZ(v,u,J.aa(w.d),null)},
$S:z+64}
C.d_t.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_T.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aH(s,new C.WH(r.y,r.gxm(0),J.aa(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d_R(r),s,s,s,s,s,s,!1,B.ae)
else{w=e-1
v=J.q(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6K(v,e,w,u,t,r.gbJv(),C.h1U(r.y.Q),r.gxm(0),s)
w=t}return A.c3(q,new C.d_S(r,e),new A.C(B.Vy,w,s))},
$S:1887}
C.d_S.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcV(t).ay){t=this.b
u=x.cy.a(B.d.gcV(u.f.f)).gtV(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.di()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fl(v*3.141592653589793*0.5)
return A.fo(B.a4,A.d8(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.d_R.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aD0(B.oY,B.ip)},
$S:0}
C.d_D.prototype={
$0(){var w=this.a
return w.n(new C.d_C(w))},
$S:0}
C.d_C.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d_E.prototype={
$0(){var w=this.a.c
w.toString
A.a9(w,!1).M(null)
return null},
$S:0}
C.d_j.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jy.j(0.5),r=x.p,q=A.a([D.eXh,B.ab],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cj(p.d)?"Write this book":"Write a new book"
q.push(p.WU(d,B.dQ,w,J.cj(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WU(d,K.ag3,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.ct(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cM,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k1.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cM,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k1.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WU(d,Z.ah7,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WU(d,B.pf,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WU(d,B.pf,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ew(u,E.zj,A.bq(!0,new A.C(A2.zM,A.v(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ah,!0,!0),u,u,u,D.adB,B.cZ,u,new A.b6(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.d_F.prototype={
$0(){A.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.d_w.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.ct(w.d)
return new C.Xs(v,J.ct(w.d),w.r+1,null)},
$S:z+54}
C.d_x.prototype={
$1(d){var w=null
return A.nX(!1,A.eq(w,w,w,E.zj,new A.k5(this.a,new C.d_v(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.d_v.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3E,B.nL,A.D(A.d(e,w,w,w,w,w,w,B.iB,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:729}
C.d_y.prototype={
$0(){return this.a.a=!1},
$S:47}
C.d_z.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:191}
C.d_A.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_B.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zV(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.PP(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.d_u(s,t))
w=4
return A.b(s.kv(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_u.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_M.prototype={
$1(d){var w=null
return A.nX(!1,A.eq(w,w,w,E.zj,new A.k5(this.a,new C.d_L(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.d_L.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3E,B.nL,A.D(A.d(e,w,w,w,w,w,w,B.iB,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:729}
C.d_N.prototype={
$0(){return this.a.a=!1},
$S:47}
C.d_O.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:191}
C.d_P.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:191}
C.d_Q.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zV(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kv(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_k.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bce(B.oY,T.JP)},
$S:0}
C.d_l.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aD0(B.oY,T.JP)},
$S:0}
C.d1l.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.d1m.prototype={
$1(d){var w=this.a
return w.n(new C.d1k(w))},
$S:9}
C.d1k.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d1n.prototype={
$1(d){var w=this.a
return w.n(new C.d1j(w))},
$S:9}
C.d1j.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d1o.prototype={
$1(d){var w=this.a
return w.n(new C.d1i(w))},
$S:9}
C.d1i.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d1p.prototype={
$0(){var w=this.a
return w.n(new C.d1h(w,this.b))},
$S:0}
C.d1h.prototype={
$0(){var w=this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.d1q.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_q()
A.a9(this.b,!1).M(new A.bl8(w,v))},
$S:0}
C.d09.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d08.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Xo(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d0d.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d0c.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b2E(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hs,v,v,v)
return A.eq(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.d0a(d),v,v),A.bL(B.vo,new C.d0b(d),A.bk(B.ms,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zj,w,v,v,v,v,D.eWe,v)},
$S:21}
C.d0a.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.d0b.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.d0e.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.d0f.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ci(A.c9(B.bJ,r,B.bx,18,14),B.q,t,B.z,t,D.bhQ,t,t,B.ak)},
$S:310}
C.d07.prototype={
$0(){return this.a.On(0,this.b)},
$S:0}
C.d06.prototype={
$0(){return this.a.NR(0,this.b)},
$S:0}
C.czG.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.czH.prototype={
$0(){return B.d.gL(D.xD)},
$S:z+12}
C.czI.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.bU(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.bb),w),0,0,0)},
$S:1889}
C.cT7.prototype={
$1(d){return this.a.n(new C.cT6(this.b,this.c))},
$S:9}
C.cT6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cTw.prototype={
$1(d){return this.a.n(new C.cTj())},
$S:2}
C.cTj.prototype={
$0(){},
$S:0}
C.cTx.prototype={
$1(d){return this.a.n(new C.cTi())},
$S:2}
C.cTi.prototype={
$0(){},
$S:0}
C.cTy.prototype={
$0(){var w=this.a
return w.n(new C.cTh(w,this.b))},
$S:0}
C.cTh.prototype={
$0(){var w=this.a
return w.d=w.gnu().Ep(this.b.a)},
$S:0}
C.cTz.prototype={
$0(){var w=this.a
return w.n(new C.cTg(w,this.b))},
$S:0}
C.cTg.prototype={
$0(){var w=this.a
return w.d=w.gnu().cyv(this.b)},
$S:0}
C.cTA.prototype={
$1(d){return this.a.n(new C.cTf())},
$S:2}
C.cTf.prototype={
$0(){},
$S:0}
C.cTB.prototype={
$0(){var w=this.a
return w.n(new C.cTe(w,this.b))},
$S:0}
C.cTe.prototype={
$0(){var w=this.a
return w.d=w.gnu().cyA(this.b.a)},
$S:0}
C.cTC.prototype={
$1(d){var w=this.a
return w.n(new C.cTr(w,d))},
$S:6}
C.cTr.prototype={
$0(){var w=this.a
return w.d=w.gnu().czu(this.b)},
$S:0}
C.cTD.prototype={
$1(d){var w=this.a
return w.d=w.gnu().aAc(d)},
$S:2}
C.cTE.prototype={
$1(d){var w=this.a
return w.d=w.gnu().cyD(d)},
$S:2}
C.cTG.prototype={
$1(d){var w=this.a
return w.d=w.gnu().czs(d)},
$S:2}
C.cTH.prototype={
$1(d){var w=this.a
return w.n(new C.cTq(w,d))},
$S:9}
C.cTq.prototype={
$0(){var w=this.a
return w.d=w.gnu().czj(this.b)},
$S:0}
C.cTI.prototype={
$0(){var w=this.a,v=w.gnu(),u=B.a.i(w.gxm(0).a.a),t=B.a.i(w.gaxz().a.a)
u=v.b79(B.a.i(w.ganJ().a.a),t,u)
A.a9(this.b,!1).M(u)
return null},
$S:0}
C.dLU.prototype={
$0(){var w=this.a
w.v1()
w.a.bn()
w.a.p5()},
$S:0}
C.dLT.prototype={
$0(){var w=this.a
w.v1()
w.a.bn()
w.a.p5()},
$S:0}
C.dLW.prototype={
$0(){var w=this,v=w.b
if(J.ct(v)||J.cj(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dLX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLY.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dLS.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dLV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dM_.prototype={
$0(){this.a.MW()
return null},
$S:0}
C.dLZ.prototype={
$0(){return this.a.Dh(this.b)},
$S:0}
C.dLk.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.df,w,w,!0,w,w,new C.dLi(d),w,w),r=A.bk(B.bV,w,w,w,w,w,w,w,w,w,w,w)
return A.eq(A.a([s,A.bL(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dLj(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:21}
C.dLi.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dLj.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dLl.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cyZ(this.b)},
$S:0}
C.dLf.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOL(w.b,w.c,w.d)},
$S:8}
C.dKO.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dKP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dL2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Fd(t.a.c),$async$$0)
case 2:s=r.qE(q.dE(e,new C.dL0(t)))
if(s!=null&&t.c!=null)t.n(new C.dL1(t,s))
t.a.bn()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dL0.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dL1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dL3.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dL4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLe.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.czM(C.h23(w),w)},
$S:0}
C.dLc.prototype={
$1(d){return new A.ea(new C.dLb(this.a,this.b),null)},
$S:20}
C.dLb.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aF,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahJ,v,v,v,p>0?new C.dL7(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aF,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.aih,v,v,v,new C.dL8(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.eq(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dL9(d),v,v),A.bL(B.pF,new C.dLa(d),A.bk(B.bV,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:162}
C.dL7.prototype={
$0(){return this.b.$1(new C.dL6(this.a))},
$S:0}
C.dL6.prototype={
$0(){return--this.a.a},
$S:0}
C.dL8.prototype={
$0(){return this.b.$1(new C.dL5(this.a))},
$S:0}
C.dL5.prototype={
$0(){return++this.a.a},
$S:0}
C.dL9.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dLa.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dLd.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.czz(this.a.a)
w.r.a7(0)},
$S:0}
C.dKC.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.afo(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fWW(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dKD.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.f,x.P)
w.push(this.b)
v.d=u.aA9(w)},
$S:0}
C.dLn.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaV(this.b,w,this.c,null)},
$S:z+24}
C.dLh.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.l1,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aF,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bv,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ab,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.R,0,B.p)
return A.eq(A.a([A.bL(D.f5f,new C.dLg(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b7,w,u,v,w,s,w,new A.b6(t,B.X),r,w)},
$S:21}
C.dLg.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dKE.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dKF.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dKG.prototype={
$1(d){return d.a},
$S:z+7}
C.dKH.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hQ(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aA9(w)},
$S:0}
C.dKL.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.afo(q)
w=A.U(q).k("a4<1>")
q=A.z(new A.a4(q,new C.dKJ(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fWW(v.e,null,r,v.f,v.r,new C.dKK(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dKK.prototype={
$0(){return this.a.a7r(this.b)},
$S:0}
C.dKJ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dKM.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("J<1,hQ>")
w=A.z(new A.J(w,new C.dKI(this.b),v),v.k("ai.E"))
u.d=t.aA9(w)},
$S:0}
C.dKI.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dLm.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dKY.prototype={
$1(d){return d.length!==0},
$S:3}
C.dKZ.prototype={
$1(d){var w=this
return new A.ea(new C.dKX(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dKX.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aF,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dKT(u,e,o),A.U(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(12),B.dd),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lF,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.ag,v,B.e,B.R,0,B.p)
t=w.a
return A.eq(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dKU(d),v,v),A.bL(B.Hz,new C.dKV(t,u,o,e),A.bk(B.bV,v,v,v,v,v,v,v,v,v,v,v)),A.bL(D.eUt,new C.dKW(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:162}
C.dKT.prototype={
$1(d){var w=null
return A.dL(!1,B.ah,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aN:B.aF,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bCL,w,w,w,new C.dKS(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1890}
C.dKS.prototype={
$0(){return this.a.$1(new C.dKQ(this.b,this.c))},
$S:0}
C.dKQ.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dKU.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dKV.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dKR(w.c,u))
v.bJ(0,B.c0)}},
$S:0}
C.dKR.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dKW.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a9(w.d,!1).M(!0)},
$S:0}
C.dL_.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cAd(this.b,D.rR,C.Fb(v,w.a.c))},
$S:0}
C.dLu.prototype={
$1(d){return d.as},
$S:z+1}
C.dLv.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iG(this.b,w)},
$S:0}
C.dLw.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hQj(v)
return w.TU(v==null?null:v.a)},
$S:0}
C.dLx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.ht9(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gci(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.ciR(new A.as(u,t),v.gbd1(),new A.as(k,s))}k=A.m(22)
s=this.b.a
r=s?D.czP:D.cyl
q=A.H(s?B.dv:D.b1Z,B.r,1)
p=A.m(22)
o=A.bZ(0,A.b2(m,m,m,new C.ba4(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.am(B.W,m,B.a9,B.q,A.a([o,A.bZ(0,A.tT(new A.N(n,n,n,n),new A.a5(u,t,new C.baX(l.d,v,l.f,w,new C.dLq(l),l.gc3k(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.bs5(s,new C.dLr(l,e),new C.dLs(l,e),new C.dLt(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ao),B.h,m,m,new A.o(m,m,q,k,m,new A.a3(B.aX,B.b1,B.w,r,m,m),B.n),m,m,m,P.acI,m,m,m,m)},
$S:229}
C.dLq.prototype={
$1(d){var w=this.a
w.n(new C.dLo(w,d))},
$S:2}
C.dLo.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.K(0,v)},
$S:0}
C.dLr.prototype={
$0(){var w=this.b
return this.a.b4S(1.25,new A.as(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dLs.prototype={
$0(){var w=this.b
return this.a.b4S(0.8,new A.as(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dLt.prototype={
$0(){var w=this,v=w.b
return w.a.aOL(new A.as(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.as(w.c,w.d),w.e.gbd1())},
$S:0}
C.dLy.prototype={
$0(){var w=this.a
return w.n(new C.dLp(w))},
$S:0}
C.dLp.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dKN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fE(new A.fx(s.c)),$async$$0)
case 2:t.wQ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d0j.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.beE(u,C.h68(v.c,u),new C.d0i(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d0i.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d0k.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhW(d.d,d.c,u.f.t(0,d.a),new C.d0h(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d0h.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fc8.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.U(v)
return A.qE(new A.cU(new A.a4(v,new C.fc9(d),w.k("a4<1>")),new C.fca(),w.k("cU<1,n>")))},
$S:z+20}
C.fc9.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fca.prototype={
$1(d){return d.a},
$S:z+7}
C.fc6.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fc7.prototype={
$1(d){return d.b},
$S:z+7}
C.fcd.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.U(v)
return A.qE(new A.cU(new A.a4(v,new C.fce(d),w.k("a4<1>")),new C.fcf(),w.k("cU<1,n>")))},
$S:z+20}
C.fce.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fcf.prototype={
$1(d){return d.a},
$S:z+7}
C.fcb.prototype={
$1(d){var w,v=A.eN([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.an(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fcc.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d0m.prototype={
$0(){return this.a},
$S:z+32}
C.d0D.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.an(0,d)},
$S:248}
C.d0v.prototype={
$2(d,e){var w=this.a.ce(0,d,new C.d0w()),v=J.a8(w)
if(!v.t(w,e))v.K(w,e)},
$S:121}
C.d0w.prototype={
$0(){return A.a([],x.s)},
$S:730}
C.d0u.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eR(w,e)
return w===!0},
$S:316}
C.d0n.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d0t.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d0s.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.AR:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.AR:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1892}
C.d0o.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d0x.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.m(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aU(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.m(0,s,b0)
a7.e.m(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aU(t==null?D.AR:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.ba(w,new C.d0y(r)))w.push(r)}}B.d.bm(w,new C.d0z(a8))
B.d.b_(w,new C.d0A())
q=C.ht8(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.ecP],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.m(0,a9,a8)
if(o.length===0)return A.a([new A.A(-p,p)],x.G)
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
else j.push(d)}}a0=(B.d.gL(k)+B.d.gaj(k))/2
a1=A.a([new A.A(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bkT(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.A(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.A(a5,a6))}}return a1},
$S:1893}
C.d0y.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d0z.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d0A.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.d0B.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bg(v,A.a2(v).k("bg<2>")).cG(0,0,B.pS)+88-w.gL(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:652}
C.d0C.prototype={
$1(d){return 16+d*156},
$S:256}
C.d0l.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.h(0,d)
if(n==null)n=0
w=o.b
v=w.$1(n)
o.c.m(0,d,e)
u=o.d.h(0,d)
t=o.e
s=o.f
if(u!=null){r=s.h(0,d)
r.toString
t.m(0,d,new C.Ev(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Ev(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Ev(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Iz(d,new A.u(e+t,w),s,s.length))}},
$S:191}
C.d0p.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aG_(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:121}
C.d0q.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d0r.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:731}
C.d0E.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:731}
C.d0F.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:460}
C.d0G.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d0H.prototype={
$1(d){return d>=0.5},
$S:125}
C.eWM.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hq(A.aI(!1,v,!0,new A.a5(38,38,A.V(d,this.a.c?B.c:B.cJ,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1895}
C.eyr.prototype={
$1(d){var w=null,v=A.m(8),u=B.bV.j(0.12),t=A.m(8)
return new A.C(B.o7,A.aI(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eHa,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Kl,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyq(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eyq.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dfV.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dfU.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mW,B.L,w,w)
return A.eq(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.dfS(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lP,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dfT(d),w,w)],x.p),B.b7,B.DN,w,u,D.bj5,w,D.bl_,new A.b6(v,B.X),w,w)},
$S:21}
C.dfS.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dfT.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dg3.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dg4.prototype={
$1(d){var w=this.a
return w.n(new C.dg2(w,d))},
$S:z+37}
C.dg2.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg5.prototype={
$1(d){var w=null
return A.pa(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dg8.prototype={
$1(d){var w=this.a
return w.n(new C.dg1(w,d))},
$S:31}
C.dg1.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dg7.prototype={
$1(d){var w=null
return A.pa(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dg9.prototype={
$1(d){var w=this.a
return w.n(new C.dg0(w,d))},
$S:31}
C.dg0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dga.prototype={
$0(){var w=this.a
return w.n(new C.dg_(w))},
$S:0}
C.dg_.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dgb.prototype={
$0(){var w=this.a
return w.n(new C.dfZ(w))},
$S:0}
C.dfZ.prototype={
$0(){return++this.a.at},
$S:0}
C.dgc.prototype={
$0(){var w=this.a
return w.n(new C.dfY(w))},
$S:0}
C.dfY.prototype={
$0(){return--this.a.ax},
$S:0}
C.dgd.prototype={
$0(){var w=this.a
return w.n(new C.dfX(w))},
$S:0}
C.dfX.prototype={
$0(){return++this.a.ax},
$S:0}
C.dge.prototype={
$1(d){var w=this.a
return w.n(new C.dfW(w,d))},
$S:9}
C.dfW.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dg6.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dgf.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bV.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bV
else u=(q.c.a?B.dV:B.c3).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bV
else t=q.c.a?B.bq:B.bv
t=A.V(f,t,r,r,r,18)
if(p)s=B.bV
else s=q.c.a?B.bq:B.bv
return A.D(A.aD(!1,B.a1,!0,r,A.aI(!1,o,!0,A.dj(r,A.v(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.ba,new A.o(w,r,u,v,r,r,B.n),B.eL,r,r,r,B.jG,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dgg(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ad),1)},
$S:z+39}
C.dgg.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dgp.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.c3C.prototype={
$2(d,e){return new A.br(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c3J.prototype={
$1(d){return d.ac()},
$S:z+5}
C.c3K.prototype={
$2(d,e){var w=J.b5(e,new C.c3I(),x.a)
w=A.z(w,w.$ti.k("ai.E"))
return new A.br(d,w,x.d2)},
$S:z+41}
C.c3I.prototype={
$1(d){return d.ac()},
$S:z+21}
C.c3E.prototype={
$1(d){return C.aif(A.a_(d,x.N,x.z))},
$S:z+8}
C.c3F.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c3G.prototype={
$1(d){return C.fO0(A.a_(d,x.N,x.z))},
$S:z+11}
C.c3H.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c3O.prototype={
$1(d){return new A.aD4(d.f.length,d.a,d.b)},
$S:z+43}
C.c3P.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:564}
C.c3L.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c3M.prototype={
$1(d){return d.czb(C.Fb(d,this.a))},
$S:z+44}
C.dLH.prototype={
$1(d){return C.tm(d,this.a.a.c)},
$S:z+2}
C.dLI.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dLM.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dLN.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dLE.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWP(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xn("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oC(r.c,r.e),$async$$0)
case 4:s.xn(p)
w=5
return A.b(s.I9(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWP(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xn("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oC(r.c,r.e),$async$$0)
case 4:s.xn(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLG.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Tg(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xn("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xn("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xn("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I9(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a6(j)
o=r.a
if(o.c==null){w=1
break}o.xn(B.a.e1(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dLL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWO(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xn("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a9(r,!1).cp(A.eD(new C.dLK(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oC(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLK.prototype={
$1(d){var w=this.b
return new C.Ym(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dLJ.prototype={
$1(d){return D.fiQ},
$S:z+46}
C.dLP.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dLQ.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dLO(w,d)
return new A.C(B.da,new C.bb0(this.b,d.c,d.a,w,null),null)},
$S:1896}
C.dLO.prototype={
$0(){return this.a.VA(this.b.b)},
$S:0}
C.dLz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dLA.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dLB.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dLC.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dLD.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dLR.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dp(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a9(this.b,!1).M(s)
return}},
$S:176}
C.dxV.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dxW.prototype={
$0(){return B.d.gL(D.a_T)},
$S:z+48}
C.dxX.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.au(A.V(this.b.d,B.c.j(0.95),w,w,D.cFE,44),w,w,w),w,w,new C.bfL(u,t,v,w),B.at)},
$S:68}
C.frK.prototype={
$1(d){return A.p9(new C.frJ(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.frJ.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.ab(0,B.G,B.x.j(r?0.35:0.08),B.qM,24)],x.V),o=r?B.dV:B.c3
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bV.j(0.18)],x.O)
w=A.p(t,D.bxq,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a3(B.a4,B.a7,B.w,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aN:B.aF,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.T,o,new A.C(E.adF,A.B(A.a([w,B.bd,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bv,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.i7(!0,t,e,B.z,D.euK,new C.frI(this.b,s),20,B.adf,t,B.ak,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.ko,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.frI.prototype={
$2(d,e){var w=null,v=D.a_T[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dV:B.c3,B.r,1),q=A.a([new A.ab(0,B.G,B.x.j(s?0.35:0.08),B.e9,8)],x.V),p=A.m(15),o=A.D(new C.a4b(v.a,!0,w),1),n=s?B.jg:B.ik,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aN:B.aF,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.a1,!0,w,A.aI(!1,u,!0,A.es(A.bu(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.lq,w,w,w)],l),B.ag,w,B.e,B.j,0,B.p),B.ao),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.frH(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ad)},
$S:75}
C.frH.prototype={
$0(){A.a9(this.a,!1).M("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cbg.prototype={
$0(){return this.a.ade(this.b)},
$S:0}
C.fr9.prototype={
$1(d){return D.ffE},
$S:z+74}
C.fyk.prototype={
$1(d){var w=this
return new C.a_5(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.frb.prototype={
$1(d){return new C.X0(this.a,null)},
$S:z+51}
C.fra.prototype={
$1(d){return D.fgD},
$S:z+52}
C.cTU.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.cTV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTT(w,d))},
$S:31}
C.cTT.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cTW.prototype={
$1(d){return this.a.IJ()},
$S:2}
C.cTX.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.cTQ.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.cTR.prototype={
$1(d){return this.a.IJ()},
$S:2}
C.cTS.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.crt.prototype={
$0(){},
$S:0}
C.crz.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.crA.prototype={
$0(){return this.a.aKl(-1)},
$S:0}
C.crB.prototype={
$1(d){return this.a.n(new C.cry())},
$S:2}
C.cry.prototype={
$0(){},
$S:0}
C.crC.prototype={
$0(){return this.a.aKl(1)},
$S:0}
C.crD.prototype={
$1(d){return this.a.n(new C.crx())},
$S:2}
C.crx.prototype={
$0(){},
$S:0}
C.crE.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dV:B.c3
return A.tJ(u,u,B.aW,r,u,new C.crw(t,d),B.zU,s,w,u,new A.ay(v,1,B.r,-1),B.c8)},
$S:1897}
C.crw.prototype={
$1(d){var w=this.a
return w.n(new C.cru(w,this.b))},
$S:9}
C.cru.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.crF.prototype={
$1(d){return this.a.n(new C.crv())},
$S:2}
C.crv.prototype={
$0(){},
$S:0}
C.crG.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.eWe.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a9(this.b,!1).M(w)},
$S:2}
C.eWf.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.eWg.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a9(this.b,!1).M(w)},
$S:0}
C.eWc.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbt6()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b2(new A.C(D.bkZ,new A.ep(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.brV(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:68}
C.eWd.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dJ.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aS,B.bV,w)
s.toString
s=A.a([B.aW,s,B.aS],x.O)
return A.aD(!1,B.a1,!0,p,A.aI(!1,v,!0,A.es(D.dQf,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a3(new A.d6(-1.2+t,-0.5),new A.d6(1.2-t,0.8),B.w,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ad)},
$S:137}
C.fq_.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.evB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evs.prototype={
$0(){return this.a.e=!0},
$S:0}
C.evt.prototype={
$0(){return this.a.e=!1},
$S:0}
C.evz.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.ea(new C.evy(w,this.b),null)},
$S:20}
C.evy.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aF,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ew(w,u,new A.C(B.adz,A.v(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bv,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ab,C.fTM(new C.evv(r,e),r.a),B.ay,A.B(A.a([A.D(A.dV(B.df,new C.evw(d),w),1),B.aw,A.D(A.bL(B.Ru,new C.evx(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ag,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b6(t,B.X),w)},
$S:97}
C.evv.prototype={
$1(d){return this.b.$1(new C.evu(this.a,d))},
$S:31}
C.evu.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.evw.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.evx.prototype={
$0(){var w=this.a.a
A.a9(this.b,!1).M(w)
return null},
$S:0}
C.evA.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QX(this.b)},
$S:0}
C.evn.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.d,x.Q)
w.push(this.b)
v.d=u.b6I(w)},
$S:0}
C.evr.prototype={
$1(d){return this.bfr(d)},
bfr(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.JK(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iG(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.evq.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a4<1>")
w=A.z(new A.a4(w,new C.evp(this.b),v),v.k("G.E"))
u.d=t.b6I(w)},
$S:0}
C.evp.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.evC.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iG(this.b,w)},
$S:0}
C.evD.prototype={
$1(d){return this.a.bx3(d,this.b)},
$S:z+55}
C.evo.prototype={
$0(){return this.a.a7q(this.b)},
$S:0}
C.fyc.prototype={
$1(d){return new C.abf(this.a,this.b,this.c,null)},
$S:z+56}
C.evF.prototype={
$0(){return this.a.Y8(this.b)},
$S:0}
C.evG.prototype={
$0(){return this.a.Oj(this.b)},
$S:0}
C.evH.prototype={
$0(){return this.a.Dc(this.b)},
$S:0}
C.evI.prototype={
$0(){return this.a.Y9(this.b)},
$S:0}
C.evE.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.evi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evj.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.evk.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.evm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pb(),$async$$0)
case 2:if(t.c!=null)t.n(new C.evl(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.evl.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.ew4.prototype={
$2(d,e){return d+e.gw4()},
$S:z+59}
C.ew0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ew1.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evM.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bxQ,B.h,v,v,new A.o(B.aD.j(u?0.18:0.08),v,A.H(B.aD.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aF,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aN:B.aF
u=u?B.dV:B.c3
w=x.p
return A.ew(v,t,new A.C(B.wE,A.v(A.a([r,B.aO,q,B.P,p,B.d3,A.B(A.a([A.D(A.dV(B.n_,new C.evK(d),A.db(v,v,v,v,v,v,v,v,v,o,v,v,B.f0,v,new A.b6(A.m(14),B.X),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bL(D.f8G,new C.evL(d),A.bk(B.aD,v,v,v,v,v,B.f0,v,new A.b6(A.m(14),B.X),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cZ,v,new A.b6(s,B.X),v)},
$S:46}
C.evK.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.evL.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.evV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.ab(0,B.G,B.x.j(k?0.35:0.08),B.fF,28)],x.V),g=k?D.cLT:B.a_i,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.epn,B.av,new A.bI(B.a4,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cq,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a3(B.ax,B.aC,B.w,g,m,m),B.n),m,m,m,m,E.adC,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b09(B.b3,B.iN,new C.evS(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b09(B.cE,M.xi,new C.evT(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aD.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aD.j(0.28),B.r,1)
o=A.p(m,D.bxf,B.h,m,m,new A.o(B.aD.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aN:B.aF,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bv,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bq(!0,new A.C(B.ul,A.p(m,A.v(A.a([g,new A.C(B.adA,A.v(A.a([w,B.T,u,B.bu,t,B.T,A.aD(!1,B.a1,!0,m,A.aI(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.V(B.eo,k?B.bq:B.bv,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.evU(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ad)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ao,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ah,!0,!0)},
$S:34}
C.evS.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a9(u.b,!1).M(null)
w=2
return A.b(u.a.uE("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.evT.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a9(u.b,!1).M(null)
w=2
return A.b(u.a.uE("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.evU.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a9(u.b,!1).M(null)
w=2
return A.b(u.a.Md(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.evQ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.ab(0,B.G,B.x.j(o?0.35:0.08),B.eQ,24)],x.V),k=o?B.dV:B.c3
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bv
u=A.bu(w,new A.a5(48,48,C.aNa(!0,A.m(12),48,Q.KT,u,v.c,48),q),B.ao)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aN:B.aF,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zM(v.gw4())
s=x.p
r=this.a
return A.bq(!0,new A.C(B.ul,A.p(q,A.v(A.a([B.T,k,new A.C(D.adx,A.B(A.a([u,B.bd,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bv,q,q,q,q,q,q,q,q,12,q,q,B.a3,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zw,r.cdf(B.t8,B.aS,new C.evO(d),p,"QR code or backup file","Transfer project"),r.aYe(!0,B.e7,B.aD,new C.evP(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ah,!0,!0)},
$S:34}
C.evO.prototype={
$0(){A.a9(this.a,!1).M("transfer")
return null},
$S:0}
C.evP.prototype={
$0(){A.a9(this.a,!1).M("delete")
return null},
$S:0}
C.evR.prototype={
$1(d){return this.bfs(d)},
bfs(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.JK(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uQ(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.ew7.prototype={
$0(){var w=this.a
w.a.bn()
w.n(new C.ew6(w))},
$S:0}
C.ew6.prototype={
$0(){return this.a.r++},
$S:0}
C.ew8.prototype={
$0(){var w=this.a
return w.n(new C.ew5(w))},
$S:0}
C.ew5.prototype={
$0(){return this.a.r++},
$S:0}
C.evJ.prototype={
$0(){var w=this.a.c
w.toString
return A.iG(w,null)},
$S:0}
C.evN.prototype={
$0(){return this.a.c6M(this.b)},
$S:0}
C.ew3.prototype={
$0(){var w=this.a
return w.n(new C.ew2(w,this.b))},
$S:0}
C.ew2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evY.prototype={
$0(){return this.a.uE("scan")},
$S:0}
C.evZ.prototype={
$0(){return this.a.uE("file")},
$S:0}
C.ew_.prototype={
$1(d){return this.a.cdg(d,this.b)},
$S:z+60}
C.evX.prototype={
$0(){return this.a.Dg(this.b)},
$S:0}
C.evW.prototype={
$0(){return this.a.YD(this.b,this.c)},
$S:0}
C.cqV.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cqU.prototype={
$1(d){return d.ac()},
$S:z+62}
C.cqS.prototype={
$1(d){return C.hbU(A.a_(d,x.N,x.z))},
$S:z+63}
C.cqT.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fbq.prototype={
$1(d){return d.y===D.k7},
$S:z+2}
C.fyA.prototype={
$1(d){return C.bxG(d,this.a)},
$S:z+2}
C.faC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bJz.prototype={
$1(d){return!d.as},
$S:z+1}
C.bJy.prototype={
$1(d){return d.ac()},
$S:z+15}
C.bJv.prototype={
$1(d){return C.fO1(A.a_(d,x.N,x.z))},
$S:z+14}
C.bJw.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bJx.prototype={
$1(d){return J.k(d)},
$S:17}
C.f2K.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.eZu.prototype={
$1(d){return C.fEK(A.a_(d,x.N,x.z))},
$S:z+67}
C.eZv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eZw.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.fr0.prototype={
$1(d){return J.k(d)},
$S:17}
C.fr1.prototype={
$1(d){return d.a},
$S:z+69}
C.fr2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fr3.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fr4.prototype={
$1(d){return d.QX(null).ac()},
$S:z+70}
C.fyy.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fbS.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fe1.prototype={
$1(d){return C.aif(A.a_(d,x.N,x.z))},
$S:z+8}
C.fe2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fe3.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fe4.prototype={
$1(d){return d.ac()},
$S:z+5}
C.fe5.prototype={
$1(d){return C.tm(d,this.a)},
$S:z+2}
C.fqO.prototype={
$1(d){return C.tm(d,this.a)},
$S:z+2}
C.fyt.prototype={
$1(d){return C.aif(A.a_(d,x.N,x.z))},
$S:z+8}
C.fyu.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fyv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fbz.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fbA.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fyE.prototype={
$1(d){return!d.as},
$S:z+1}
C.fba.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fbb.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fbc.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.fyl.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.feO.prototype={
$1(d){return d.Q},
$S:z+72}
C.fqK.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fdZ.prototype={
$1(d){return C.aif(A.a_(d,x.N,x.z))},
$S:z+8}
C.fe_.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fe0.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fqI.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f__.prototype={
$1(d){return d.length!==0},
$S:3}
C.f_0.prototype={
$1(d){return C.fO1(A.a_(d,x.N,x.z))},
$S:z+14}
C.f_1.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f_2.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f_3.prototype={
$1(d){return d.length!==0},
$S:3}
C.f_g.prototype={
$2(d,e){return d.eN(new C.f_h(e))},
$S:1898}
C.f_h.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1899}
C.f_d.prototype={
$1(d){return C.hxG(d,this.a)},
$S:z+73}
C.f_e.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f_f.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f3o.prototype={
$1(d){return d.a},
$S:z+49}
C.f3p.prototype={
$1(d){return d.length!==0},
$S:3}
C.f3q.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f5q.prototype={
$1(d){return d.ac()},
$S:z+5}
C.f9Z.prototype={
$1(d){return C.fZa(d,C.Fb(d,this.a))},
$S:z+5}
C.fa_.prototype={
$1(d){return C.fZb(d,C.Fb(d,this.a))},
$S:z+5};(function aliases(){var w=C.aIl.prototype
w.bpr=w.p
w=C.aKt.prototype
w.brL=w.p
w=C.aKu.prototype
w.brM=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azW.prototype,"gcai","caj",25)
var s
w(s=C.ax2.prototype,"gc3q","c3r",42)
v(s,"gaIC","LM",0)
v(s,"gcic","zO",0)
v(s,"gbEE","Mr",0)
v(s,"gcvE","xo",0)
v(s,"gcce","Zj",0)
v(s,"gbA8","M9",0)
v(s,"gbF4","V2",0)
w(s,"gbJv","bJw",71)
v(s,"gbuI","yS",0)
v(C.ax3.prototype,"gcvA","E7",0)
v(s=C.aAw.prototype,"gacQ","uR",0)
v(s,"gc62","Yu",0)
v(s,"gaMB","GD",0)
v(s=C.aAt.prototype,"gcrV","a0k",0)
v(s,"gacQ","uR",0)
v(s,"gcgl","ZZ",0)
v(s,"gc6Z","YI",0)
w(s,"gc3k","c3l",30)
v(s,"gbEW","GI",0)
v(s,"gcsR","csS",3)
v(s,"gbVL","WG",0)
w(s,"gc1R","c1S",23)
v(s,"gc5N","c5O",3)
v(s=C.ayV.prototype,"gc_F","NS",0)
v(s,"gc_H","c_I",3)
v(s,"gbBD","a73",0)
v(s=C.aAv.prototype,"gbI3","Vw",0)
v(s,"gbSe","W9",0)
v(s,"gcmu","a_N",0)
v(s,"gciM","a_p",0)
v(C.aAu.prototype,"gciu","aeA",0)
v(C.apO.prototype,"gc1P","Y7",0)
v(C.avQ.prototype,"ga04","IJ",3)
v(C.avP.prototype,"ga04","IJ",3)
v(C.auz.prototype,"ga04","IJ",3)
v(s=C.aBX.prototype,"gaXD","OO",0)
v(s,"gbtz","TO",0)
v(s,"gc6N","c6O",3)
w(C.aBW.prototype,"gc2F","c2G",57)
u(C.aBY.prototype,"gaMv",0,0,null,["$1","$0"],["GC","bCT"],58,0,0)
t(C,"h5k","hH8",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alM,C.tH,C.mT,C.Gd,C.acq,C.Ir,C.tI,C.Iz,C.Ev,C.baZ,C.aG_,C.amW,C.d0I,C.ll,C.aQ0,C.aQ_,C.aO5,C.t8,C.qp,C.l5,C.hQ,C.kp,C.aDZ])
u(A.i3,[C.fiE,C.fiD,C.fiF,C.frD,C.f8V,C.f8W,C.f90,C.fgn,C.fgm,C.fgl,C.bY5,C.fs8,C.fs0,C.fsc,C.fbH,C.dyB,C.dyw,C.dyx,C.dy9,C.dy5,C.dyQ,C.dyR,C.dyK,C.dyL,C.dyS,C.dyT,C.fc4,C.fdW,C.fdX,C.fqM,C.fys,C.fby,C.frh,C.d_V,C.d_h,C.d_q,C.d_H,C.d_m,C.d_s,C.d_j,C.d_w,C.d_x,C.d_v,C.d_M,C.d_L,C.d1m,C.d1n,C.d1o,C.d08,C.d0d,C.d0c,C.czG,C.czI,C.cT7,C.cTw,C.cTx,C.cTA,C.cTC,C.cTD,C.cTE,C.cTG,C.cTH,C.dLV,C.dLk,C.dLf,C.dKO,C.dL0,C.dL3,C.dLc,C.dKC,C.dLn,C.dLh,C.dKE,C.dKF,C.dKG,C.dKL,C.dKJ,C.dKI,C.dKY,C.dKZ,C.dKT,C.dLu,C.dLq,C.d0j,C.d0k,C.fc8,C.fc9,C.fca,C.fc6,C.fc7,C.fcd,C.fce,C.fcf,C.fcb,C.fcc,C.d0D,C.d0t,C.d0o,C.d0y,C.d0z,C.d0C,C.d0q,C.d0F,C.d0G,C.d0H,C.eWM,C.eyr,C.dfU,C.dg3,C.dg4,C.dg5,C.dg8,C.dg7,C.dg9,C.dge,C.dgf,C.c3J,C.c3I,C.c3E,C.c3F,C.c3G,C.c3H,C.c3O,C.c3L,C.c3M,C.dLH,C.dLK,C.dLJ,C.dLQ,C.dLR,C.dxV,C.frK,C.fr9,C.fyk,C.frb,C.fra,C.cTV,C.cTW,C.cTR,C.crB,C.crD,C.crE,C.crw,C.crF,C.eWe,C.fq_,C.evz,C.evv,C.evr,C.evp,C.evD,C.fyc,C.evM,C.evV,C.evQ,C.evR,C.ew_,C.cqU,C.cqS,C.cqT,C.fbq,C.fyA,C.faC,C.bJz,C.bJy,C.bJv,C.bJw,C.bJx,C.eZu,C.eZv,C.fr0,C.fr1,C.fr2,C.fr3,C.fr4,C.fyy,C.fbS,C.fe1,C.fe2,C.fe4,C.fe5,C.fqO,C.fyt,C.fyu,C.fyv,C.fbz,C.fbA,C.fyE,C.fba,C.fbb,C.fyl,C.feO,C.fqK,C.fdZ,C.fe_,C.fqI,C.f__,C.f_0,C.f_1,C.f_2,C.f_3,C.f_h,C.f_d,C.f_e,C.f3o,C.f3p,C.f5q,C.f9Z,C.fa_])
u(A.at,[C.aVm,C.aid,C.aRd,C.WH,C.b6K,C.baX,C.beE,C.bs5,C.bhW,C.aaU,C.beD,C.aaT,C.beC,C.ayW,C.aF2,C.aaV,C.In,C.baY,C.aab,C.baW,C.bb0,C.aVk,C.apO,C.abf])
u(A.n8,[C.b7l,C.b8w,C.b8n,C.aDU,C.bdH,C.bb_,C.ba4,C.bfL,C.brV])
u(A.jm,[C.fs5,C.fs6,C.fs7,C.frZ,C.fs_,C.fsa,C.fsb,C.dyN,C.dyz,C.dyC,C.dyg,C.dyh,C.dyi,C.dyf,C.dyn,C.dye,C.dyo,C.dyp,C.dyd,C.dyq,C.dyc,C.dyr,C.dyb,C.dys,C.dy3,C.dy4,C.dya,C.dyt,C.dy8,C.dyu,C.dy7,C.dyj,C.dy6,C.dyk,C.dy2,C.dyl,C.dym,C.dyO,C.dyP,C.dyD,C.dyE,C.dyF,C.dyG,C.dyH,C.dyI,C.dyJ,C.dyV,C.dyM,C.fc5,C.d_f,C.d_d,C.d_e,C.d_g,C.d_U,C.d_J,C.d_G,C.d_i,C.d_K,C.d_o,C.d_p,C.d_r,C.d_I,C.d_n,C.d_t,C.d_R,C.d_D,C.d_C,C.d_E,C.d_F,C.d_y,C.d_A,C.d_B,C.d_u,C.d_N,C.d_Q,C.d_k,C.d_l,C.d1l,C.d1k,C.d1j,C.d1i,C.d1p,C.d1h,C.d1q,C.d09,C.d0a,C.d0b,C.d0e,C.d07,C.d06,C.czH,C.cT6,C.cTj,C.cTi,C.cTy,C.cTh,C.cTz,C.cTg,C.cTf,C.cTB,C.cTe,C.cTr,C.cTq,C.cTI,C.dLU,C.dLT,C.dLW,C.dLX,C.dLY,C.dLS,C.dM_,C.dLZ,C.dLi,C.dLj,C.dLl,C.dKP,C.dL2,C.dL1,C.dL4,C.dLe,C.dL7,C.dL6,C.dL8,C.dL5,C.dL9,C.dLa,C.dLd,C.dKD,C.dLg,C.dKH,C.dKK,C.dKM,C.dLm,C.dKS,C.dKQ,C.dKU,C.dKV,C.dKR,C.dKW,C.dL_,C.dLv,C.dLw,C.dLo,C.dLr,C.dLs,C.dLt,C.dLy,C.dLp,C.dKN,C.d0i,C.d0h,C.d0m,C.d0w,C.d0n,C.eyq,C.dfV,C.dfS,C.dfT,C.dg2,C.dg1,C.dg0,C.dga,C.dg_,C.dgb,C.dfZ,C.dgc,C.dfY,C.dgd,C.dfX,C.dfW,C.dg6,C.dgg,C.dgp,C.dLI,C.dLM,C.dLN,C.dLE,C.dLF,C.dLG,C.dLL,C.dLP,C.dLO,C.dLz,C.dLA,C.dLB,C.dLC,C.dLD,C.dxW,C.frH,C.cbg,C.cTU,C.cTT,C.cTX,C.cTQ,C.cTS,C.crt,C.crz,C.crA,C.cry,C.crC,C.crx,C.cru,C.crv,C.crG,C.eWf,C.eWg,C.evB,C.evs,C.evt,C.evu,C.evw,C.evx,C.evA,C.evn,C.evq,C.evC,C.evo,C.evF,C.evG,C.evH,C.evI,C.evE,C.evi,C.evj,C.evk,C.evm,C.evl,C.ew0,C.ew1,C.evK,C.evL,C.evS,C.evT,C.evU,C.evO,C.evP,C.ew7,C.ew6,C.ew8,C.ew5,C.evJ,C.evN,C.ew3,C.ew2,C.evY,C.evZ,C.evX,C.evW])
u(A.af,[C.alT,C.QX,C.Xo,C.Xs,C.Xq,C.WZ,C.amZ,C.amT,C.Y1,C.amX,C.Ym,C.Yn,C.a4b,C.X0,C.X_,C.Wy,C.a_5,C.Ei,C.aus,C.apN,C.apH,C.apM,C.Mt])
u(A.ag,[C.azW,C.baU,C.ax2,C.bbe,C.ax3,C.b8u,C.aAw,C.aAt,C.ayV,C.aAv,C.aAu,C.bg2,C.aIl,C.avQ,C.avP,C.auz,C.brY,C.aKt,C.aKu,C.aBX,C.bhp,C.aBW,C.btJ])
u(A.kA,[C.dyy,C.dyA,C.dyv,C.dyU,C.fdY,C.bJu,C.d_T,C.d_S,C.d_z,C.d_O,C.d_P,C.d0f,C.dLb,C.dKX,C.dLx,C.d0v,C.d0u,C.d0s,C.d0x,C.d0A,C.d0B,C.d0l,C.d0p,C.d0r,C.d0E,C.c3C,C.c3K,C.c3P,C.dxX,C.frJ,C.frI,C.eWc,C.eWd,C.evy,C.ew4,C.cqV,C.f2K,C.eZw,C.fe3,C.fbc,C.fe0,C.f_g,C.f_f,C.f3q])
t(C.bfM,C.aIl)
u(A.mi,[C.a9f,C.aGH,C.Ge,C.aie,C.cqW,C.cqX])
t(C.brW,C.aKt)
t(C.brX,C.aKu)
t(C.aBY,C.btJ)
t(C.b5c,A.b51)
t(C.brZ,A.a3R)
t(C.b5b,C.brZ)
w(C.aIl,A.eJ)
w(C.aKt,A.c6)
w(C.aKu,A.c6)
v(C.btJ,A.en)
v(C.brZ,A.iU)})()
A.kh(b.typeUniverse,JSON.parse('{"aVm":{"at":[],"r":[]},"b7l":{"aA":[]},"alT":{"af":[],"r":[]},"azW":{"ag":["alT"]},"QX":{"af":[],"r":[]},"aid":{"at":[],"r":[]},"aRd":{"at":[],"r":[]},"baU":{"ag":["QX"]},"Xo":{"af":[],"r":[]},"Xs":{"af":[],"r":[]},"Xq":{"af":[],"r":[]},"WZ":{"af":[],"r":[]},"ax2":{"ag":["Xo"]},"bbe":{"ag":["Xs"]},"ax3":{"ag":["Xq"]},"WH":{"at":[],"r":[]},"b8w":{"aA":[]},"b8n":{"aA":[]},"b8u":{"ag":["WZ"]},"aDU":{"aA":[]},"bdH":{"aA":[]},"b6K":{"at":[],"r":[]},"amZ":{"af":[],"r":[]},"amT":{"af":[],"r":[]},"Y1":{"af":[],"r":[]},"aaV":{"at":[],"r":[]},"aAw":{"ag":["amZ"]},"aAt":{"ag":["amT"]},"baX":{"at":[],"r":[]},"bb_":{"aA":[]},"beE":{"at":[],"r":[]},"ba4":{"aA":[]},"bs5":{"at":[],"r":[]},"bhW":{"at":[],"r":[]},"ayV":{"ag":["Y1"]},"aaU":{"at":[],"r":[]},"beD":{"at":[],"r":[]},"aaT":{"at":[],"r":[]},"beC":{"at":[],"r":[]},"ayW":{"at":[],"r":[]},"aF2":{"at":[],"r":[]},"In":{"at":[],"r":[]},"amX":{"af":[],"r":[]},"Ym":{"af":[],"r":[]},"Yn":{"af":[],"r":[]},"aAv":{"ag":["amX"]},"baY":{"at":[],"r":[]},"aab":{"at":[],"r":[]},"baW":{"at":[],"r":[]},"bb0":{"at":[],"r":[]},"aAu":{"ag":["Ym"]},"bg2":{"ag":["Yn"]},"aVk":{"at":[],"r":[]},"a4b":{"af":[],"r":[]},"bfM":{"ag":["a4b"]},"bfL":{"aA":[]},"apO":{"at":[],"r":[]},"X0":{"af":[],"r":[]},"X_":{"af":[],"r":[]},"Wy":{"af":[],"r":[]},"a_5":{"af":[],"r":[]},"avQ":{"ag":["X0"]},"avP":{"ag":["X_"]},"auz":{"ag":["Wy"]},"brY":{"ag":["a_5"]},"Ei":{"af":[],"r":[]},"aus":{"af":[],"r":[]},"brW":{"ag":["Ei"]},"brX":{"ag":["aus"]},"brV":{"aA":[]},"apN":{"af":[],"r":[]},"aBX":{"ag":["apN"]},"abf":{"at":[],"r":[]},"apH":{"af":[],"r":[]},"apM":{"af":[],"r":[]},"bhp":{"ag":["apH"]},"aBW":{"ag":["apM"]},"Mt":{"af":[],"r":[]},"aBY":{"ag":["Mt"],"en":[]},"b5b":{"iU":[],"f8":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aO5"),Q:w("qp"),n:w("bs<n,n>"),c5:w("aQ_"),dY:w("aQ0"),d:w("er<n?>"),e:w("Gd"),B:w("mT"),P:w("hQ"),k:w("kp"),x:w("aw<~>"),f5:w("P<ag8>"),V:w("P<ab>"),t:w("P<qp>"),O:w("P<x>"),ac:w("P<er<n?>>"),I:w("P<mT>"),u:w("P<hQ>"),_:w("P<kp>"),cl:w("P<aw<ak<a1<n,@>>>>"),R:w("P<mV>"),cq:w("P<ak<+(O,O)>>"),ez:w("P<a1<n,aB>>"),gE:w("P<a1<n,n>>"),c7:w("P<a1<n,@>>"),fD:w("P<m7>"),bp:w("P<nR>"),g:w("P<u>"),v:w("P<hz>"),L:w("P<+(n,n)>"),G:w("P<+(O,O)>"),bF:w("P<+count,id,name(I,n,n)>"),A:w("P<cL>"),s:w("P<n>"),aS:w("P<iJ>"),p:w("P<r>"),C:w("P<f8>"),D:w("P<l5>"),fp:w("P<Ir>"),M:w("P<Iz>"),gZ:w("P<aDZ>"),Y:w("P<acq>"),E:w("P<aG_>"),F:w("P<O>"),dC:w("P<I>"),dS:w("P<aA?>"),d4:w("P<n?>"),J:w("co<ag<af>>"),b:w("ak<mT>"),do:w("ak<hQ>"),r:w("ak<kp>"),U:w("ak<a1<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(I,n,n)>"),h:w("ak<n>"),c:w("ak<l5>"),j:w("ak<@>"),fK:w("br<n,n>"),d2:w("br<n,ak<a1<n,@>>>"),a:w("a1<n,@>"),f:w("a1<@,@>"),gv:w("J<n,Gf>"),w:w("iE"),g2:w("qJ"),bV:w("alM"),fL:w("cp"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(O,ak<hQ>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bl<O>"),gc:w("dz"),b4:w("cx<I>"),W:w("k5<n>"),l:w("r"),cM:w("f8"),i:w("l5"),cc:w("Ev"),bw:w("aaT<n?>"),cy:w("IB"),q:w("mG"),y:w("S"),gR:w("O"),z:w("@"),S:w("I"),eK:w("ak<kp>?"),m:w("amW?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,S)?"),Z:w("q2?"),T:w("n?"),aD:w("dz?"),o:w("l5?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aPU=new A.bv(B.h1,B.bD,B.h1,B.bD)
D.a6F=new A.bv(B.h1,B.jS,B.h1,B.jS)
D.aQ5=new A.bv(B.j9,B.bD,B.bD,B.bD)
D.aQ9=new A.ay(B.cY,1.4,B.r,-1)
D.aQj=new A.ay(B.af,1,B.r,-1)
D.aRG=new A.aW(0,1/0,64,1/0)
D.aRK=new A.aW(0,84,0,1/0)
D.asK=w([B.lR,B.qa,B.c],x.O)
D.bHA=new A.a3(B.ax,B.aC,B.w,D.asK,null,null)
D.aSw=new A.o(null,null,null,null,null,D.bHA,B.n)
D.cLp=w([B.aS,B.bV],x.O)
D.bJJ=new A.a3(B.aX,B.b1,B.w,D.cLp,null,null)
D.aSN=new A.o(null,null,null,null,null,D.bJJ,B.n)
D.aYC=new A.fd(null,null,null,null,null,E.jy,null,null,null,null)
D.a7Y=new A.cw(B.A,null,null,D.aYC,null)
D.k1=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eFf=new A.F(!0,D.k1,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXt=new A.w("No books on the shelf yet.",null,D.eFf,null,null,null,null,null,null,null,null,null)
D.dQg=new A.C(B.ns,D.eXt,null)
D.aXf=new A.cw(B.A,null,null,D.dQg,null)
D.aY3=new A.cw(B.A,null,null,X.Td,null)
D.aZY=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b_k=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.a8R=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b1K=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b1Z=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9W=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b5q=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b5L=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.De=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b78=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b99=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.abm=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eSm=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bdQ=new A.er(null,D.eSm,B.eX,null,x.d)
D.f_q=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bdS=new A.er(null,D.f_q,B.eX,null,x.d)
D.bep=new A.b8(38e5)
D.bfa=new A.i4(0,10,0,10)
D.bfk=new A.N(0,1,0,0)
D.bft=new A.i4(0,4,0,4)
D.bfL=new A.N(10,10,14,10)
D.bfV=new A.i4(10,4,10,4)
D.bg4=new A.i4(10,8,10,8)
D.bg5=new A.N(10,8,8,8)
D.bgx=new A.N(12,6,12,2)
D.bgP=new A.N(14,10,6,6)
D.bgQ=new A.N(14,12,14,0)
D.bgU=new A.N(14,12,14,8)
D.bgX=new A.N(14,12,8,14)
D.bh0=new A.i4(14,14,14,14)
D.bhG=new A.N(16,2,16,10)
D.bhQ=new A.N(16,6,16,30)
D.bhS=new A.N(16,6,16,8)
D.adx=new A.N(18,16,18,8)
D.bis=new A.N(18,20,18,22)
D.adB=new A.N(18,24,18,24)
D.biy=new A.N(18,30,18,30)
D.biQ=new A.N(20,10,12,20)
D.bj3=new A.N(20,18,16,18)
D.bj5=new A.N(20,18,20,6)
D.bjU=new A.N(24,32,24,28)
D.bjV=new A.N(24,36,24,32)
D.bjY=new A.N(26,26,24,14)
D.bkb=new A.N(2,4,2,8)
D.bkf=new A.N(30,0,30,0)
D.bkq=new A.N(38,22,22,22)
D.adT=new A.N(40,24,24,24)
D.bks=new A.i4(40,40,40,40)
D.bku=new A.N(46,30,30,30)
D.adW=new A.N(4,0,0,8)
D.bkV=new A.N(56,40,40,40)
D.bkZ=new A.N(1.25,1.25,1.25,1.25)
D.bl_=new A.N(60,0,60,0)
D.bl2=new A.N(6,14,6,16)
D.ble=new A.i4(7,3,7,3)
D.blG=new A.N(8,9,8,9)
D.blK=new A.N(5,1.5,5,1.5)
D.blU=new A.N(6,2.5,6,2.5)
D.fay=new A.w("Signature",null,B.mX,null,null,null,null,null,null,null,null,null)
D.bmb=new A.bH(1,B.bo,D.fay,null)
D.f7R=new A.w("Tell the AI what to fix",null,B.dO,null,null,null,null,null,null,null,null,null)
D.bmT=new A.bH(1,B.bo,D.f7R,null)
D.eMf=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9K=new A.w("Worksheets",null,D.eMf,null,null,null,null,null,null,null,null,null)
D.eMn=new A.F(!0,E.a8x,null,null,null,null,13,B.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8E=new A.w("Track your project spending",null,D.eMn,null,null,null,null,null,null,null,null,null)
D.cDV=w([D.f9K,B.av,D.f8E],x.p)
D.bbz=new A.fm(B.ak,B.e,B.j,B.F,null,B.p,null,0,D.cDV,null)
D.bmY=new A.bH(1,B.bo,D.bbz,null)
D.eHI=new A.F(!0,E.jy,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRA=new A.w("FAMILY LIBRARY",null,D.eHI,null,null,null,null,null,null,null,null,null)
D.bnc=new A.bH(1,B.bo,D.eRA,null)
D.Ky=new C.Gd("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.WG=new C.Ge(0,"male")
D.aeL=new C.Ge(1,"female")
D.wM=new C.Ge(2,"unknown")
D.rR=new C.aie(0,"owner")
D.Kz=new C.aie(1,"editor")
D.k7=new C.aie(2,"viewer")
D.afu=new A.a0(61199,"MaterialIcons",!1)
D.bpB=new A.a0(61504,"MaterialIcons",!1)
D.bpC=new A.a0(61505,"MaterialIcons",!1)
D.bpE=new A.a0(61587,"MaterialIcons",!1)
D.bpK=new A.a0(61890,"MaterialIcons",!1)
D.bqD=new A.a0(63034,"MaterialIcons",!0)
D.brt=new A.a0(63429,"MaterialIcons",!1)
D.ahC=new A.a0(984520,"MaterialIcons",!1)
D.bq9=new A.a0(62776,"MaterialIcons",!1)
D.btN=new A.ad(D.bq9,26,B.aW,null,null,null)
D.boA=new A.a0(57648,"MaterialIcons",!1)
D.bu4=new A.ad(D.boA,14,B.c,null,null,null)
D.bum=new A.ad(B.Ek,17,null,null,null,null)
D.buR=new A.ad(E.Xr,null,null,null,null,null)
D.buU=new A.ad(B.j3,18,E.jy,null,null,null)
D.Xb=new A.a0(62044,"MaterialIcons",!1)
D.bv_=new A.ad(D.Xb,null,B.aS,null,null,null)
D.bvP=new A.ad(B.dQ,16,null,null,null,null)
D.bvW=new A.ad(D.Xb,32,B.aS,null,null,null)
D.bwd=new A.ad(E.afv,18,B.cY,null,null,null)
D.bxf=new A.ad(B.Eu,22,B.aD,null,null,null)
D.bxq=new A.ad(B.dQ,22,B.aW,null,null,null)
D.bxB=new A.ad(O.Xg,22,B.c,null,null,null)
D.bxG=new A.ad(B.t1,52,B.c,null,null,null)
D.bxQ=new A.ad(B.Eu,30,B.aD,null,null,null)
D.aid=new A.ad(B.t8,22,B.c,null,null,null)
D.byh=new A.ad(B.dQ,17,null,null,null,null)
D.byA=new A.ad(B.uF,26,B.cY,null,null,null)
D.bzj=new A.ad(B.XE,16,null,null,null,null)
D.bA1=new A.ad(B.t1,24,B.c,null,null,null)
D.bA6=new A.ad(B.KZ,20,B.qE,null,null,null)
D.bAb=new A.ad(B.Ei,null,B.bV,null,null,null)
D.bAi=new A.ad(B.j3,18,B.c,null,null,null)
D.bBG=new A.ad(B.e7,16,B.af,null,null,null)
D.bBR=new A.ad(D.Xb,20,B.aS,null,null,null)
D.aiF=new A.ad(B.hq,20,null,null,null,null)
D.bCl=new A.ad(B.ct,18,D.k1,null,null,null)
D.bCD=new A.ad(B.x7,28,B.c,null,null,null)
D.bCL=new A.ad(B.KP,null,B.fQ,null,null,null)
D.bD4=new A.ad(B.x7,24,B.c,null,null,null)
D.bDu=new A.ad(B.t1,null,B.aS,null,null,null)
D.bDv=new A.ad(B.jL,20,B.cY,null,null,null)
D.bDN=new A.ad(B.Ek,16,null,null,null,null)
D.bFg=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eu,!0,null,null,null,null)
D.cS7=w([B.br,B.aS,B.f4,B.aW],x.O)
D.bG1=new A.a3(B.ax,B.aC,B.w,D.cS7,null,null)
D.b6d=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.baL=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cB_=w([D.b6d,D.baL],x.O)
D.bGc=new A.a3(B.aX,B.b1,B.w,D.cB_,null,null)
D.cN1=w([B.eK,B.fq,B.f4],x.O)
D.bGg=new A.a3(B.ax,B.aC,B.w,D.cN1,null,null)
D.aar=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b_l=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cCQ=w([D.aar,D.b_l],x.O)
D.bGR=new A.a3(B.aX,B.b1,B.w,D.cCQ,null,null)
D.b27=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.asa=w([D.b27,D.aar],x.O)
D.bHa=new A.a3(B.ax,B.aC,B.w,D.asa,null,null)
D.a9B=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b4_=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cMi=w([D.a9B,D.b4_],x.O)
D.bHL=new A.a3(B.a4,B.a7,B.w,D.cMi,null,null)
D.cXK=w([B.bO,B.mw],x.O)
D.bHN=new A.a3(B.aX,B.b1,B.w,D.cXK,null,null)
D.b69=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b7A=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cYA=w([D.b69,D.k1,D.k1,D.b7A],x.O)
D.d_B=w([0,0.07,0.9,1],x.F)
D.bIi=new A.a3(B.a4,B.a7,B.w,D.cYA,D.d_B,null)
D.bIt=new A.a3(B.ax,B.aC,B.w,B.Oo,null,null)
D.cXl=w([B.aW,B.aS,B.bV],x.O)
D.bJu=new A.a3(B.ax,B.aC,B.w,D.cXl,null,null)
D.c3O=w([B.br,B.aW,B.eK],x.O)
D.c3V=w([B.bB,B.aB,B.je],x.O)
D.c3X=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b4Z=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.ca1=w([D.b4Z,E.aaa],x.O)
D.dMj=new A.u(1,2)
D.era=new A.cL(B.aT,D.dMj,3)
D.apr=w([D.era],x.A)
D.chf=w([B.h4,B.cb,B.eZ],x.O)
D.cjT=w([B.bI,B.bt,B.bj],x.O)
D.bnF=new C.tH("classic","Classic leather","Gold-edged brown leather",D.asa,E.jy,E.jy,"\u2766",B.L,!0,!1,!1,!1)
D.aZN=new A.x(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.b9R=new A.x(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cFp=w([D.aZN,D.b9R],x.O)
D.aad=new A.x(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bnA=new C.tH("ornate","Ornate gold","Double gold border and flourishes",D.cFp,D.aad,D.aad,"\u2726",B.L,!0,!0,!0,!1)
D.b1R=new A.x(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.b6P=new A.x(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cya=w([D.b1R,D.b6P],x.O)
D.bnz=new C.tH("parchment","Parchment","Old paper with dark ink",D.cya,D.De,G.ii,"\u2767",B.L,!0,!1,!1,!0)
D.a8j=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b8z=new A.x(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.cVP=w([D.a8j,D.b8z],x.O)
D.b4C=new A.x(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.b81=new A.x(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bnC=new C.tH("minimal","Clean paper","Plain and elegant, like a printed book",D.cVP,D.b4C,D.b81,"",B.L,!0,!0,!1,!0)
D.bnE=new C.tH("midnight","Midnight","Deep blue with silver stars",K.asr,B.cp,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.bny=new C.tH("emerald","Emerald library","Green cloth, title on the left",Y.apN,E.jy,B.h5,"\u25c6",B.bf,!0,!1,!1,!1)
D.b8U=new A.x(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.cUp=w([B.f_,D.b8U],x.O)
D.b5x=new A.x(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.b6s=new A.x(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bnD=new C.tH("rose","Rose vintage","Burgundy with rose-gold lettering",D.cUp,D.b5x,D.b6s,"\u2740",B.L,!0,!1,!0,!1)
D.cYf=w([B.cJ,K.q9],x.O)
D.bnB=new C.tH("modern","Modern","Dark, bold, left-aligned",D.cYf,B.aY,B.c,"",B.bf,!1,!0,!1,!1)
D.Zy=w([D.bnF,D.bnA,D.bnz,D.bnC,D.bnE,D.bny,D.bnD,D.bnB],A.az("P<tH>"))
D.cxH=w([B.bV,B.bk],x.O)
D.b61=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cyl=w([D.a8j,D.b61],x.O)
D.b1O=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.czP=w([D.b1O,B.d9],x.O)
D.cBc=w([B.b6,B.iG,B.nW],x.O)
D.cBz=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b_h=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b3m=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d_y=w([D.a9B,D.b_h,D.b3m],x.O)
D.bnG=new C.tI("leather","Leather",D.d_y,"vintage")
D.cIf=w([B.dx,B.J3,N.TE],x.O)
D.bnN=new C.tI("midnight","Midnight",D.cIf,"starry")
D.cBd=w([B.f2,B.eB,B.k2],x.O)
D.bnM=new C.tI("forest","Forest",D.cBd,"story")
D.d1e=w([B.f3,B.f_,B.k3],x.O)
D.bnJ=new C.tI("burgundy","Burgundy",D.d1e,"royal")
D.cjs=w([B.aB,B.oQ,B.n8],x.O)
D.bnK=new C.tI("royal","Royal",D.cjs,"royal")
D.cDr=w([B.bt,B.cJ,K.q9],x.O)
D.bnH=new C.tI("charcoal","Charcoal",D.cDr,"geo")
D.d_E=w([B.cj,B.dI,B.u6],x.O)
D.bnL=new C.tI("sunset","Sunset",D.d_E,"sunset")
D.d0f=w([B.iG,B.Df,B.TF],x.O)
D.bnI=new C.tI("ocean","Ocean",D.d0f,"band")
D.xD=w([D.bnG,D.bnN,D.bnM,D.bnJ,D.bnK,D.bnH,D.bnL,D.bnI],A.az("P<tI>"))
D.cDP=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cEk=w([B.aj,B.aI,B.M],x.O)
D.cFu=w([B.f_,B.eB,B.dx,B.h6,B.wa,B.cY,B.kt,B.ew,B.dl],x.O)
D.cFv=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.erb=new A.cL(B.dr,B.dE,8)
D.cFE=w([D.erb],x.A)
D.cGG=w([B.bU,B.dI,B.kT],x.O)
D.cH7=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cIb=w([B.bU,B.hw],x.O)
D.cK6=w([B.aK,B.D9,B.w_],x.O)
D.cKW=w([B.bH,B.cD,B.dB,B.aK],x.O)
D.cLq=w([B.jz,B.cj,B.rp],x.O)
D.cLT=w([B.eK,B.cY],x.O)
D.cMn=w([B.cP,B.fU,B.hz],x.O)
D.cMy=w([B.aY,B.bk,B.dx],x.O)
D.cMZ=w([B.el,B.dk,B.eB],x.O)
D.cNe=w([B.e4,B.dx,B.J3],x.O)
D.cOs=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_n=w(["leather","linen","plain","stars","rays"],x.s)
D.btt=new A.a0(985219,"MaterialIcons",!1)
D.bt2=new A.a0(983781,"MaterialIcons",!1)
D.arW=w([B.afU,B.hU,B.m3,B.hW,D.btt,B.ED,B.p8,D.bt2,K.ahr,B.x9,B.pa,B.m2],A.az("P<a0>"))
D.a_s=w(["double","single","corners","none"],x.s)
D.cQX=w([B.eC,B.bv,B.ew],x.O)
D.cR9=w([],x.t)
D.AR=w([],x.u)
D.cTc=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cVg=w([B.aZ,B.fU,B.h6],x.O)
D.cWo=w([B.cz,B.nY,B.Uk],x.O)
D.cWB=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ddF=new C.ll("construction","Construction","Jobsite & builds",B.Er)
D.ddM=new C.ll("house","Home Build","Houses & rooms",B.uz)
D.ddC=new C.ll("grocery","Grocery","Store & pantry",B.Yb)
D.ddB=new C.ll("calculator","Calculations","Math & estimates",B.L7)
D.ddK=new C.ll("lumber","Materials","Lumber & supplies",B.Lp)
D.ddy=new C.ll("kitchen","Kitchen","Remodel & meals",S.agD)
D.bt0=new A.a0(983756,"MaterialIcons",!1)
D.ddD=new C.ll("landscape","Landscaping","Yard & garden",D.bt0)
D.ddx=new C.ll("plumbing","Plumbing","Pipes & water",B.uL)
D.ddN=new C.ll("electrical","Electrical","Wiring & power",B.hp)
D.ddv=new C.ll("store","Retail Shop","Daily business",B.kD)
D.ddw=new C.ll("paint_remodel","Paint & Remodel","Colors & walls",S.agr)
D.bso=new A.a0(983311,"MaterialIcons",!1)
D.ddJ=new C.ll("roofing","Roofing","Roofs & exteriors",D.bso)
D.btd=new A.a0(983986,"MaterialIcons",!1)
D.ddu=new C.ll("warehouse","Warehouse","Storage & stock",D.btd)
D.ddH=new C.ll("vehicles","Vehicles","Fleet & transport",B.EE)
D.bqb=new A.a0(62785,"MaterialIcons",!1)
D.ddA=new C.ll("farm","Farm","Crops & livestock",D.bqb)
D.ddz=new C.ll("restaurant","Restaurant","Food & catering",B.t7)
D.ddG=new C.ll("tools","Tools","Workshop gear",B.EB)
D.ddL=new C.ll("wallet","Cash & Wallet","Quick spending",B.jL)
D.bro=new A.a0(63395,"MaterialIcons",!1)
D.ddI=new C.ll("concrete","Concrete","Foundation work",D.bro)
D.ddE=new C.ll("blueprint","Blueprint","Plans & design",Ab.ag_)
D.a_T=w([D.ddF,D.ddM,D.ddC,D.ddB,D.ddK,D.ddy,D.ddD,D.ddx,D.ddN,D.ddv,D.ddw,D.ddJ,D.ddu,D.ddH,D.ddA,D.ddz,D.ddG,D.ddL,D.ddI,D.ddE],A.az("P<ll>"))
D.cX2=w([B.bq,B.bv],x.O)
D.cXL=w([B.i0,B.nc,B.dA],x.O)
D.a_Y=w(["top","middle","bottom"],x.s)
D.cZZ=w([B.cC,B.bk,B.dx],x.O)
D.d_t=w([B.bh,B.dk,B.eB],x.O)
D.d19=w([B.bI,B.aj],x.O)
D.d1a=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dK6={top:0,middle:1,bottom:2}
D.d4i=new A.bs(D.dK6,["Top","Middle","Bottom"],x.n)
D.dJN={double:0,single:1,corners:2,none:3}
D.d4n=new A.bs(D.dJN,["Double line","One line","Corners","None"],x.n)
D.dKQ={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d5L=new A.bs(D.dKQ,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.d5W=new A.bs(B.iz,[],A.az("bs<I,+(n,n)>"))
D.dK_={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.B1=new A.bs(D.dK_,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("bs<n,I>"))
D.d88=new F.Lo(32,null)
D.d89=new F.Lo(40,null)
D.d8a=new F.Lo(46,null)
D.aAY=new C.apM(null)
D.dNe=new A.u(8,14)
D.eY5=new A.w("Write a new book",null,B.ja,null,B.L,null,null,null,null,null,null,null)
D.dPL=new A.C(B.lX,D.eY5,null)
D.ahP=new A.ad(B.hD,18,B.c,null,null,null)
D.eRV=new A.w("Add",null,B.mY,null,null,null,null,null,null,null,null,null)
D.cLa=w([D.ahP,B.ve,D.eRV],x.p)
D.epu=new A.cC(B.b0,B.e,B.R,B.m,null,B.p,null,0,D.cLa,null)
D.dQ4=new A.C(B.p4,D.epu,null)
D.dQ5=new A.C(E.acq,X.Td,null)
D.eMb=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUL=new A.w("New Project",null,D.eMb,null,null,null,null,null,null,null,null,null)
D.cOO=w([D.ahP,B.aa,D.eUL],x.p)
D.epx=new A.cC(B.b0,B.e,B.R,B.m,null,B.p,null,0,D.cOO,null)
D.dQf=new A.C(B.iK,D.epx,null)
D.eWX=new A.w("Choose your header",null,R.BV,null,null,null,null,null,null,null,null,null)
D.dQy=new A.C(B.is,D.eWX,null)
D.aYR=new A.fd(2.2,null,null,null,null,B.cY,null,null,null,null)
D.etN=new A.a5(22,22,D.aYR,null)
D.aXb=new A.cw(B.A,null,null,D.etN,null)
D.dQD=new A.C(B.Vc,D.aXb,null)
D.bh9=new A.N(14,2,14,6)
D.f8p=new A.w("The top of your book. Tap a design to see it.",null,N.a4f,null,null,null,null,null,null,null,null,null)
D.dQE=new A.C(D.bh9,D.f8p,null)
D.dRQ=new A.iH(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dRT=new A.iH(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBZ=new A.iH(1,0.9607843137254902,0.48627450980392156,0)
D.GE=new A.iH(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.y8=new A.iH(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dRZ=new A.iH(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fib=new C.bdH(null)
D.bcs=new A.lZ(D.fib,null,B.at,null,null)
D.aFC=new A.cG(0,0,0,0,null,null,D.bcs,null)
D.ecP=new A.A(-42,42)
D.ekG=new A.cH([0,0,1,1])
D.aGT=new A.a7(0,0,520,160)
D.aH5=new A.b6(B.pQ,B.X)
D.f7Z=new A.w("Let the AI write it from your tree",null,B.kk,null,B.L,null,null,null,null,null,null,null)
D.bo6=new A.dm(1,B.cl,D.f7Z,null)
D.cIa=w([E.YD,B.aa,D.bo6],x.p)
D.epc=new A.cC(B.b0,B.e,B.R,B.m,null,B.p,null,0,D.cIa,null)
D.eRB=new A.w("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.cVu=w([D.aiF,B.aa,D.eRB],x.p)
D.epk=new A.cC(B.b0,B.b7,B.j,B.m,null,B.p,null,0,D.cVu,null)
D.bxv=new A.ad(B.hV,14,B.aW,null,null,null)
D.eGr=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVa=new A.w("Cashier",null,D.eGr,null,null,null,null,null,null,null,null,null)
D.cPh=w([D.bxv,B.bp,D.eVa],x.p)
D.epm=new A.cC(B.b0,B.e,B.R,B.m,null,B.p,null,0,D.cPh,null)
D.eRC=new A.w("Transfer & settings",null,B.dO,null,null,null,null,null,null,null,null,null)
D.bmJ=new A.bH(1,B.bo,D.eRC,null)
D.cAJ=w([D.aid,B.aw,D.bmJ],x.p)
D.epn=new A.cC(B.b0,B.e,B.j,B.m,null,B.p,null,0,D.cAJ,null)
D.esx=new A.as(16,40)
D.esC=new A.as(22,64)
D.esJ=new A.as(280,88)
D.ett=new A.a5(30,null,null,null)
D.euK=new A.hJ(2,12,12,1.05,null)
D.eUR=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.evu=new A.b_(D.eUR,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eV5=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aIR=new A.b_(D.eV5,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f1y=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.evY=new A.b_(D.f1y,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.fb4=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ew2=new A.b_(D.fb4,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWV=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.ew9=new A.b_(D.eWV,null,null,null,null,null,null,null,null,null,null,null,null,B.fK,!1,null,null,null,B.q,null)
D.f8A=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aIV=new A.b_(D.f8A,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSb=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ewz=new A.b_(D.eSb,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.fbH=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.exi=new A.b_(D.fbH,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f70=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.exH=new A.b_(D.f70,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.fb8=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.exK=new A.b_(D.fb8,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f31=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.exM=new A.b_(D.f31,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eYD=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.exN=new A.b_(D.eYD,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eYE=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eyN=new A.b_(D.eYE,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eUT=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.ez4=new A.b_(D.eUT,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWD=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ezn=new A.b_(D.eWD,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f2y=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.ezD=new A.b_(D.f2y,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eZl=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.ezE=new A.b_(D.eZl,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eCz=new A.F(!0,D.k1,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCX=new A.F(!0,D.k1,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDx=new A.r1(!0,B.qN,null,null,null,null,B.dm,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDN=new A.F(!0,D.k1,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEj=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4g=new A.r1(!0,B.PJ,null,null,null,null,B.dm,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFi=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFH=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHa=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHe=new A.F(!0,G.ii,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIq=new A.F(!0,B.M,null,null,null,null,13,B.a3,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ4=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJJ=new A.F(!0,B.bV,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJO=new A.F(!0,B.bO,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKa=new A.F(!0,D.De,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKj=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLh=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLJ=new A.F(!0,B.bV,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM9=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNB=new A.F(!0,B.aj,null,null,null,null,11.5,B.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNJ=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL_=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4I=new A.F(!0,B.aj,null,null,null,null,12,B.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePk=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePH=new A.F(!0,G.ii,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePO=new A.F(!0,G.ii,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQx=new A.w("Themes",null,B.pC,null,null,null,null,null,null,null,null,null)
D.eR6=new A.w("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eGW=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRr=new A.w("Debt receipt",null,D.eGW,null,B.L,null,null,null,null,null,null,null)
D.aKW=new A.F(!0,B.aj,null,null,null,null,11,B.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRI=new A.w("Person who owes",null,D.aKW,null,null,null,null,null,null,null,null,null)
D.eSD=new A.w("Notes",null,B.a4m,null,null,null,null,null,null,null,null,null)
D.eT1=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eFZ=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT5=new A.w("Share",null,D.eFZ,null,null,null,null,null,null,null,null,null)
D.eTV=new A.w("Move your family trees",null,D.aL_,null,null,null,null,null,null,null,null,null)
D.eUt=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eV4=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eWe=new A.w("Remove this book?",null,B.hg,null,null,null,null,null,null,null,null,null)
D.aLo=new A.w("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eXh=new A.w("What should the AI do?",null,B.dO,null,null,null,null,null,null,null,null,null)
D.eYz=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eZz=new A.w("Ribbon bookmark",null,B.iB,null,null,null,null,null,null,null,null,null)
D.eNv=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f__=new A.w("NGMY.ORG",null,D.eNv,null,B.L,null,null,null,null,null,null,null)
D.f09=new A.w("Scan family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eK2=new A.F(!0,B.c,null,null,null,null,13,B.a3,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0R=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eK2,null,B.L,null,null,null,null,null,null,null)
D.f1Z=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.f24=new A.w("Thumbnail",null,B.pC,null,null,null,null,null,null,null,null,null)
D.f2E=new A.w("Save the cover",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f32=new A.w("Your photos",null,B.pC,null,null,null,null,null,null,null,null,null)
D.f3h=new A.w("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f3J=new A.w("Design your cover",null,R.BV,null,null,null,null,null,null,null,null,null)
D.f3P=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.f3S=new A.w("PICTURE",null,H.mj,null,null,null,null,null,null,null,null,null)
D.f4d=new A.w("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f4f=new A.w("You can undo it right after.",null,N.a4r,null,null,null,null,null,null,null,null,null)
D.f4I=new A.w("Print",null,B.tK,null,null,null,null,null,null,null,null,null)
D.f52=new A.w("Amount owed",null,D.aKW,null,null,null,null,null,null,null,null,null)
D.f5f=new A.w("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f5N=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.f5Q=new A.w("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f6e=new A.w("Debtor signature",null,B.a4m,null,null,null,null,null,null,null,null,null)
D.f6m=new A.w("Change icon",null,E.aKe,null,null,null,null,null,null,null,null,null)
D.f7q=new A.w("Family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f7P=new A.w("Download",null,B.tK,null,null,null,null,null,null,null,null,null)
D.f7T=new A.w("Change",null,B.pC,null,null,null,null,null,null,null,null,null)
D.f8G=new A.w("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f8J=new A.w("WHAT SHOULD IT CHANGE?",null,H.mj,null,null,null,null,null,null,null,null,null)
D.f9i=new A.w("COLOUR",null,H.mj,null,null,null,null,null,null,null,null,null)
D.f9u=new A.w("Do it",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f9x=new A.w("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fas=new A.w("Create Family Tree",null,B.eS,null,null,null,null,null,null,null,null,null)
D.eBC=new A.F(!0,E.jy,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faH=new A.w("Write the first page myself",null,D.eBC,null,null,null,null,null,null,null,null,null)
D.fbb=new A.w("Use this header",null,B.cr,null,null,null,null,null,null,null,null,null)
D.fbh=new A.w("Create Project",null,E.aKH,null,null,null,null,null,null,null,null,null)
D.ffp=new C.a9f(1,"header")
D.a5n=new C.a9f(2,"projects")
D.ffq=new C.a9f(3,"cashier")
D.a5o=new C.a9f(4,"familyTree")
D.fqf=new C.cqW(0,"start")
D.fqg=new C.cqX(0,"start")
D.ffE=new C.Wy(null)
D.fgD=new C.X_(null)
D.d5T=new A.bs(B.iz,[],A.az("bs<n,Ev>"))
D.cRt=w([],x.E)
D.cRu=w([],x.M)
D.fh9=new C.baZ(D.d5T,D.cRt,D.cRu,0,0,null,null)
D.fiQ=new C.Yn(null)
D.a64=new C.aGH(0,"projects")
D.aOb=new C.aGH(1,"cashier")
D.fob=new C.aGH(2,"familyTree")})()};
(a=>{a["KK288sUrhfaNMj2pjDCVjZ8d4lU="]=a.current})($__dart_deferred_initializers__);