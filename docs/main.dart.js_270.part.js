((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,G,F,E,N,A1,A2,R,A3,A4,M,A5,H,S,T,U,V,A6,A7,W,A8,A9,X,Aa,Ab,Ac,L,Ad,Y,Z,K,O,C={
bz6(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bz6=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uG(null,""),$async$bz6)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.R(y.j)
t=A.mJ(b1)
s=A.bZ(b3.length,null,!1,x.h5)
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
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.al(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qi(t,a1,B.hc,E.DE),$async$bz6)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.OJ(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.R(l!=null&&A.Jw(l)?y.l:y.i)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a_(r.a(j.h(a2,a7)),q,p):B.cu
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a0m(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bz6,v)},
aez(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aez=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uG(null,""),$async$aez)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.R(y.j)
t=A.mJ(b6)
s=x.S
r=A.df(c1,0,A.dK(4,"count",s),A.U(c1).c)
q=F.a09(new A.J(r,new C.fil(),r.$ti.k("J<ai.E,n>")).aF(0," "))
r=q==="sw"
if(!r){p=A.ae("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fik(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.al(b7,null)+"\nAllowed values: style one of "+B.d.aF(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aez)
case 6:l=c5
k=F.OJ(l==null?"":l)
if(k==null)throw A.R("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alK(s,D.d5S,r.b(k.h(0,"cover"))?A.a_(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.R.al(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aez)
case 10:l=c5
k=l==null?null:F.OJ(l)
if(k==null)throw A.R(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d5(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kM(a5,a2.k("kM<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a7(a9)
b1=A.aR(b0.h(a9,"index"))
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
p=A.cz(new A.bg(h,s),new C.fim(),s.k("G.E"),p)
p=F.a09(A.oL(p,3,A.a2(p).k("G.E")).aF(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.z(new A.cu(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a0m(s,b9),$async$aez)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alK(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aez,v)},
h5p(d,e,f){return A.cg(null,B.x.j(0.65),!1,null,new C.frk(e,f),d,null,!0,!0,x.g2)},
alK:function alK(d,e,f){this.a=d
this.b=e
this.c=f},
fil:function fil(){},
fik:function fik(d){this.a=d},
fim:function fim(){},
frk:function frk(d,e){this.a=d
this.b=e},
bx_(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bx_=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.ba(b1,new C.f8E())){u=null
w=1
break}t=B.d.e9(b1,new C.f8F())
s=$.Y()
r=new A.ru()
q=A.FL(r,D.aGS)
p=A.L()
p.r=B.c.gq(0)
q.b2(D.aGS,p)
o=A.L()
o.r=B.M.gq(0)
o.c=3.6
o.b=B.ae
o.d=B.bN
o.e=B.fs
n=new C.f8K(t)
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
s=$.Y()
p=A.a([],x.v)
a3=new A.aQ(s.r,B.aq,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aO(a3,o)}else{p=A.a([],x.v)
a3=new A.aQ(s.r,B.aq,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aO(a3,o)}w=4
return A.b(r.pO().yp(520,160),$async$bx_)
case 4:w=3
return A.b(b3.hf(B.fN),$async$bx_)
case 3:b0=b3
u=b0==null?null:J.f3(B.dD.gaN(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bx_,v)},
fg1(d){return C.hJ7(d)},
hJ7(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fg1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bb4()
n=d.x!=null&&d.y6(null).length===0
if(d.x!=null)t=n?D.y7:D.GE
else t=d.gRT()?D.GE:D.aBY
w=3
return A.b(C.bx_(d.ax),$async$fg1)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akt(s)
r=A.a2g(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBY}else{p.c=C.vZ(q,!0)
p.b=n?D.y7:D.GE}r.a0M(A.fAT(new C.fg3(p,d,new C.fg4(),t,n,o),null,D.bkr,B.v9))
u=r.jD(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fg1,v)},
fmF(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fmF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fg1(d),$async$fmF)
case 3:t=f
s=B.a.i(d.b)
r=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.am(q,0,40)
u=A4.Fi(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fmF,v)},
f8E:function f8E(){},
f8F:function f8F(){},
f8K:function f8K(d){this.a=d},
fg4:function fg4(){},
fg3:function fg3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fg2:function fg2(){},
frM(d,e){var w=0,v=A.j(x.H)
var $async$frM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.x.j(0.55),!0,null,new C.frQ(new A.co(null,x.J),e),d,null,!0,!0,x.H),$async$frM)
case 2:return A.h(null,v)}})
return A.i($async$frM,v)},
bzz(d,e,f,g){return C.hQp(d,e,f,g)},
hQp(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bzz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gaj(e.split(",")):e
r=B.cw.aG(t)}catch(q){r=null}if(r==null||r.length===0){d.H(x.q).f.P(D.ez9)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.frI(g,r,f),d,null,!0,!0,x.H),$async$bzz)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bzz,v)},
frR(d,e){var w=0,v=A.j(x.H)
var $async$frR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.frU(new A.co(null,x.J),e),d,null,!0,!0,x.H),$async$frR)
case 2:return A.h(null,v)}})
return A.i($async$frR,v)},
aVi:function aVi(d,e){this.c=d
this.a=e},
bXY:function bXY(){},
b7e:function b7e(d,e){this.b=d
this.a=e},
frQ:function frQ(d,e){this.a=d
this.b=e},
frN:function frN(d){this.a=d},
frO:function frO(d,e,f){this.a=d
this.b=e
this.c=f},
frP:function frP(d,e){this.a=d
this.b=e},
frI:function frI(d,e,f){this.a=d
this.b=e
this.c=f},
frG:function frG(d){this.a=d},
frH:function frH(d,e,f){this.a=d
this.b=e
this.c=f},
frU:function frU(d,e){this.a=d
this.b=e},
frS:function frS(d){this.a=d},
frT:function frT(d,e,f){this.a=d
this.b=e
this.c=f},
fbo(d,e){var w=0,v=A.j(x.y),u,t
var $async$fbo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_V(d),$async$fbo)
case 3:t=g
J.n2(t,new C.fbp(e))
u=A.afc(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fbo,v)},
fbp:function fbp(d){this.a=d},
alR:function alR(d,e,f){this.c=d
this.d=e
this.a=f},
azT:function azT(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dyE:function dyE(d,e){this.a=d
this.b=e},
dyp:function dyp(d,e){this.a=d
this.b=e},
dys:function dys(d,e,f){this.a=d
this.b=e
this.c=f},
dyr:function dyr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dyq:function dyq(d,e){this.a=d
this.b=e},
dyt:function dyt(d,e){this.a=d
this.b=e},
dyn:function dyn(){},
dyo:function dyo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dym:function dym(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dy7:function dy7(d){this.a=d},
dy8:function dy8(d,e,f){this.a=d
this.b=e
this.c=f},
dy9:function dy9(d,e){this.a=d
this.b=e},
dy6:function dy6(d){this.a=d},
dye:function dye(d,e){this.a=d
this.b=e},
dy5:function dy5(d){this.a=d},
dyf:function dyf(d,e,f){this.a=d
this.b=e
this.c=f},
dyg:function dyg(d,e,f){this.a=d
this.b=e
this.c=f},
dy4:function dy4(d,e){this.a=d
this.b=e},
dyh:function dyh(d,e,f){this.a=d
this.b=e
this.c=f},
dy3:function dy3(d,e){this.a=d
this.b=e},
dyi:function dyi(d,e){this.a=d
this.b=e},
dy2:function dy2(d){this.a=d},
dyj:function dyj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dy0:function dy0(){},
dxV:function dxV(d){this.a=d},
dxW:function dxW(d){this.a=d},
dy1:function dy1(d,e){this.a=d
this.b=e},
dyk:function dyk(d,e){this.a=d
this.b=e},
dy_:function dy_(d){this.a=d},
dyl:function dyl(d){this.a=d},
dxZ:function dxZ(){},
dya:function dya(d,e){this.a=d
this.b=e},
dxY:function dxY(d){this.a=d},
dyb:function dyb(d,e,f){this.a=d
this.b=e
this.c=f},
dxX:function dxX(d,e){this.a=d
this.b=e},
dxU:function dxU(d,e){this.a=d
this.b=e},
dyc:function dyc(d){this.a=d},
dyd:function dyd(d,e,f){this.a=d
this.b=e
this.c=f},
dyH:function dyH(){},
dyI:function dyI(d,e){this.a=d
this.b=e},
dyF:function dyF(d){this.a=d},
dyG:function dyG(d){this.a=d},
dyB:function dyB(d,e){this.a=d
this.b=e},
dyC:function dyC(d){this.a=d},
dyu:function dyu(d,e,f){this.a=d
this.b=e
this.c=f},
dyv:function dyv(d,e,f){this.a=d
this.b=e
this.c=f},
dyw:function dyw(d,e,f){this.a=d
this.b=e
this.c=f},
dyx:function dyx(d,e,f){this.a=d
this.b=e
this.c=f},
dyy:function dyy(d,e,f){this.a=d
this.b=e
this.c=f},
dyz:function dyz(d,e,f){this.a=d
this.b=e
this.c=f},
dyA:function dyA(d,e,f){this.a=d
this.b=e
this.c=f},
dyJ:function dyJ(){},
dyK:function dyK(){},
dyL:function dyL(){},
dyM:function dyM(d){this.a=d},
dyD:function dyD(d,e){this.a=d
this.b=e},
h1B(d){return B.d.dI(D.Zw,new C.fbN(d),new C.fbO())},
tD:function tD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fbN:function fbN(d){this.a=d},
fbO:function fbO(){},
aib:function aib(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aR9:function aR9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QW:function QW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baN:function baN(){this.d=$
this.c=this.a=null},
d_6:function d_6(d,e){this.a=d
this.b=e},
d_4:function d_4(d,e){this.a=d
this.b=e},
d_5:function d_5(){},
d_7:function d_7(d,e){this.a=d
this.b=e},
fNI(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.mS(t,w,v,u==null?new A.Q(Date.now(),0,!1):u)},
Jh(d,e){return C.hHL(d,e)},
hHL(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Jh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Jh)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aE(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d5(p,x.f)
o=A.cz(o,new C.fdE(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a4<G.E>")
o=A.z(new A.a4(o,new C.fdF(),n),n.k("G.E"))
B.d.aZ(o,new C.fdG())
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
return A.i($async$Jh,v)},
zT(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ax(),$async$zT)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b4(f,new C.fqt(),x.a)
r=A.z(r,r.$ti.k("ai.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.R.al(r,null)),$async$zT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zT,v)},
aNp(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aNp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jh(d,e),$async$aNp)
case 2:u=h
t=J.cA(u)
s=t.bi(u,new C.fy9(f))
if(s===-1)t.ck(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zT(d,e,u),$async$aNp)
case 3:return A.h(null,v)}})
return A.i($async$aNp,v)},
bxr(d,e,f){var w=0,v=A.j(x.H),u
var $async$bxr=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jh(d,e),$async$bxr)
case 2:u=h
J.n2(u,new C.fbg(f))
w=3
return A.b(C.zT(d,e,u),$async$bxr)
case 3:return A.h(null,v)}})
return A.i($async$bxr,v)},
bxF(d,e){return C.hHK(d,e)},
hHK(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bxF=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$bxF)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Kw
w=1
break}p=B.R.aE(0,q,null)
if(x.f.b(p)){o=A.a_(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aR(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.B_.an(0,o.h(0,"foil")))j=A.cJ(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aR(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a_W,o.h(0,"position"))?A.cJ(o.h(0,"position")):"middle"
g=B.d.t(D.a_q,o.h(0,"frame"))?A.cJ(o.h(0,"frame")):"double"
f=B.d.t(D.a_l,o.h(0,"texture"))?A.cJ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cDP,o.h(0,"header"))?A.cJ(o.h(0,"header")):"classic"
o=new C.Gb(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Kw
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Kw
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bxF,v)},
PN(d,e,f){return C.hPW(d,e,f)},
hPW(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$PN=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ax(),$async$PN)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.al(f.ac(),null)),$async$PN)
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
return A.i($async$PN,v)},
Ph(d,e){return C.hHM(d,e)},
hHM(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Ph=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Ph)
case 7:r=g
q=r.rn("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.z(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Jh(d,e),$async$Ph)
case 8:if(!j.ct(g)){n=B.a.i(d.toLowerCase())
m=J.lb(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Ph)
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
return A.i($async$Ph,v)},
adV(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ph(d,e),$async$adV)
case 3:s=g
r=J.a7(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.K(s,t)
w=5
return A.b(A.ax(),$async$adV)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adV)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adV,v)},
a0z(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0z=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ph(d,e),$async$a0z)
case 2:s=h
J.hD(s,f)
w=3
return A.b(A.ax(),$async$a0z)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0z)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0z)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0z)
case 6:return A.h(null,v)}})
return A.i($async$a0z,v)},
mS:function mS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdE:function fdE(){},
fdF:function fdF(){},
fdG:function fdG(){},
fqt:function fqt(){},
fy9:function fy9(d){this.a=d},
fbg:function fbg(d){this.a=d},
Gb:function Gb(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bJm:function bJm(d){this.a=d},
hQe(d,e,f,g,h,i,j){return A.a8(d,!1).cp(A.eD(new C.fqZ(j,i,f,e,h,g),!0,null,x.H))},
Pd(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Pd=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ph(h,g),$async$Pd)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.H(x.q).f.P(D.aIQ)
u=!1
w=1
break}w=4
return A.b(C.h5p(d,f,e),$async$Pd)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adV(h,g),$async$Pd)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mS(""+(q+n),l,B.a.i(m.b),new A.Q(Date.now(),0,!1)))}w=6
return A.b(C.zT(h,r,p),$async$Pd)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.PN(h,r,new C.Gb("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Pd)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Pd,v)},
fqZ:function fqZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Xm:function Xm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ax_:function ax_(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d_M:function d_M(d){this.a=d},
d_L:function d_L(d,e){this.a=d
this.b=e},
d_A:function d_A(d,e){this.a=d
this.b=e},
d_x:function d_x(d,e){this.a=d
this.b=e},
d_8:function d_8(d){this.a=d},
d_9:function d_9(d,e){this.a=d
this.b=e},
d_B:function d_B(d){this.a=d},
d_h:function d_h(d){this.a=d},
d_f:function d_f(d){this.a=d},
d_g:function d_g(d){this.a=d},
d_i:function d_i(d){this.a=d},
d_y:function d_y(d){this.a=d},
d_z:function d_z(){},
d_d:function d_d(d){this.a=d},
d_e:function d_e(d,e){this.a=d
this.b=e},
d_j:function d_j(d){this.a=d},
d_k:function d_k(d,e){this.a=d
this.b=e},
d_K:function d_K(d){this.a=d},
d_J:function d_J(d,e){this.a=d
this.b=e},
d_I:function d_I(d){this.a=d},
d_u:function d_u(d){this.a=d},
d_t:function d_t(d){this.a=d},
d_v:function d_v(d){this.a=d},
d_a:function d_a(d,e){this.a=d
this.b=e},
d_w:function d_w(d,e){this.a=d
this.b=e},
d_n:function d_n(d){this.a=d},
d_o:function d_o(d){this.a=d},
d_m:function d_m(){},
d_p:function d_p(d){this.a=d},
d_q:function d_q(d){this.a=d},
d_r:function d_r(d,e){this.a=d
this.b=e},
d_s:function d_s(d,e,f){this.a=d
this.b=e
this.c=f},
d_l:function d_l(d,e){this.a=d
this.b=e},
d_D:function d_D(d){this.a=d},
d_C:function d_C(){},
d_E:function d_E(d){this.a=d},
d_F:function d_F(d){this.a=d},
d_G:function d_G(d){this.a=d},
d_H:function d_H(d,e){this.a=d
this.b=e},
d_b:function d_b(d){this.a=d},
d_c:function d_c(d){this.a=d},
Xq:function Xq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb7:function bb7(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d1c:function d1c(d){this.a=d},
d1d:function d1d(d){this.a=d},
d1b:function d1b(d){this.a=d},
d1e:function d1e(d){this.a=d},
d1a:function d1a(d){this.a=d},
d1f:function d1f(d){this.a=d},
d19:function d19(d){this.a=d},
d1g:function d1g(d,e){this.a=d
this.b=e},
d18:function d18(d,e){this.a=d
this.b=e},
d1h:function d1h(d,e){this.a=d
this.b=e},
Xo:function Xo(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acp:function acp(d,e,f){this.a=d
this.b=e
this.c=f},
ax0:function ax0(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d00:function d00(d,e){this.a=d
this.b=e},
d0_:function d0_(d,e){this.a=d
this.b=e},
d04:function d04(d){this.a=d},
d03:function d03(d,e){this.a=d
this.b=e},
d01:function d01(d){this.a=d},
d02:function d02(d){this.a=d},
d05:function d05(d){this.a=d},
d06:function d06(d){this.a=d},
d_Z:function d_Z(d,e){this.a=d
this.b=e},
d_Y:function d_Y(d,e){this.a=d
this.b=e},
Ip:function Ip(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WF:function WF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
czx:function czx(d){this.a=d},
czy:function czy(){},
czz:function czz(d){this.a=d},
b8p:function b8p(d,e,f){this.b=d
this.c=e
this.a=f},
b8g:function b8g(d,e){this.b=d
this.a=e},
tE:function tE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WX:function WX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8n:function b8n(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cSZ:function cSZ(d,e,f){this.a=d
this.b=e
this.c=f},
cSY:function cSY(d,e){this.a=d
this.b=e},
cTn:function cTn(d){this.a=d},
cTa:function cTa(){},
cTo:function cTo(d){this.a=d},
cT9:function cT9(){},
cTp:function cTp(d,e){this.a=d
this.b=e},
cT8:function cT8(d,e){this.a=d
this.b=e},
cTq:function cTq(d,e){this.a=d
this.b=e},
cT7:function cT7(d,e){this.a=d
this.b=e},
cTr:function cTr(d){this.a=d},
cT6:function cT6(){},
cTs:function cTs(d,e){this.a=d
this.b=e},
cT5:function cT5(d,e){this.a=d
this.b=e},
cTt:function cTt(d){this.a=d},
cTi:function cTi(d,e){this.a=d
this.b=e},
cTu:function cTu(d){this.a=d},
cTv:function cTv(d){this.a=d},
cTx:function cTx(d){this.a=d},
cTy:function cTy(d){this.a=d},
cTh:function cTh(d,e){this.a=d
this.b=e},
cTz:function cTz(d,e){this.a=d
this.b=e},
aDR:function aDR(d){this.a=d},
bdA:function bdA(d){this.a=d},
b6D:function b6D(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hGM(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.afn(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.Q(Date.now(),0,!1))
s=new C.fbR(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a4<1>"),q=q.k("cT<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wL)m.push(l===D.WE?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jM(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jM(h,a2,a2)-A.jM(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.z(new A.cT(new A.a4(a4,new C.fbP(u,f),p),new C.fbQ(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aF(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aF(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.am(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hGN(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.afn(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.fbW(v,e)
q=new C.fbU(v)
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
B.d.fz(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gah(e),k=new A.hK(l,new C.fbV(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.an(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aF(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hsQ(d,e,f,g){var w,v,u=C.hGO(d,e)
if(u<=0||f.length<=u)return new A.ac0(!1,D.AP,f)
if(g.t(0,e.a))return new A.ac0(!1,D.AP,f)
w=A.U(f).c
v=A.df(f,0,A.dK(u,"count",x.S),w).dA(0)
return new A.ac0(!0,A.df(f,u,null,w).dA(0),v)},
hsR(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.afn(d3),d2=d1.length
if(d2===0)return D.fgT
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ce(0,t.a,new C.d0d(t))}s=new C.d0u(v)
d2=x.h
r=A.T(w,d2)
q=new C.d0m(r)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d0l(r)
l=A.T(w,x.do)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.ce(0,k,new C.d0e()),o)}h=new C.d0k(s)
g=new C.d0j(l,r)
p=v.$ti.k("bg<2>")
o=p.k("a4<G.E>")
f=A.z(new A.a4(new A.bg(v,p),new C.d0f(h),o),o.k("G.E"))
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
a9=new C.d0s(new C.d0o(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dv(v,v.r,v.e),j=a2.gahH(a2);o.C();){b0=o.d
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
b7=new C.d0c(a2,new C.d0t(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.m(0,b8,new C.Et(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ix(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.z(new A.cu(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bG(0,new C.d0g(c6,b4))
for(d2=new A.cQ(a4,a4.$ti.k("cQ<1,2>")).gah(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gT(j)
if(b6.an(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gah(b5),i=new A.hK(j,new C.d0h(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d0i())
c6.push(new C.aFX(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.baS(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h1a(d){var w=A.ae("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fWD(d,e,f,g,h,i,j,k,l,m,n){return new C.Y_(k,f,j,e,l,n,m,d,g,h,i,null)},
ayU(d,e,f,g,h,i,j){return new C.bew(i,d,e,f,j,h,g,null)},
amX:function amX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAt:function aAt(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dLE:function dLE(d){this.a=d},
dLD:function dLD(d){this.a=d},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLH:function dLH(d,e){this.a=d
this.b=e},
dLI:function dLI(d){this.a=d},
dLC:function dLC(d,e){this.a=d
this.b=e},
dLF:function dLF(d){this.a=d},
dLK:function dLK(d){this.a=d},
dLJ:function dLJ(d,e){this.a=d
this.b=e},
amR:function amR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAq:function aAq(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dL4:function dL4(d){this.a=d},
dL2:function dL2(d){this.a=d},
dL3:function dL3(d){this.a=d},
dL5:function dL5(d,e){this.a=d
this.b=e},
dL_:function dL_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKy:function dKy(d){this.a=d},
dKz:function dKz(d,e){this.a=d
this.b=e},
dKN:function dKN(d){this.a=d},
dKL:function dKL(d){this.a=d},
dKM:function dKM(d,e){this.a=d
this.b=e},
dKO:function dKO(d){this.a=d},
dKP:function dKP(d,e){this.a=d
this.b=e},
dKZ:function dKZ(d,e){this.a=d
this.b=e},
dKX:function dKX(d,e){this.a=d
this.b=e},
dKW:function dKW(d,e){this.a=d
this.b=e},
dKS:function dKS(d,e){this.a=d
this.b=e},
dKR:function dKR(d){this.a=d},
dKT:function dKT(d,e){this.a=d
this.b=e},
dKQ:function dKQ(d){this.a=d},
dKU:function dKU(d){this.a=d},
dKV:function dKV(d){this.a=d},
dKY:function dKY(d,e){this.a=d
this.b=e},
dKm:function dKm(d,e){this.a=d
this.b=e},
dKn:function dKn(d,e){this.a=d
this.b=e},
dL7:function dL7(d,e,f){this.a=d
this.b=e
this.c=f},
dL1:function dL1(d,e,f){this.a=d
this.b=e
this.c=f},
dL0:function dL0(d){this.a=d},
dKo:function dKo(d){this.a=d},
dKp:function dKp(d){this.a=d},
dKq:function dKq(){},
dKr:function dKr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKv:function dKv(d,e){this.a=d
this.b=e},
dKu:function dKu(d,e){this.a=d
this.b=e},
dKt:function dKt(d){this.a=d},
dKw:function dKw(d,e){this.a=d
this.b=e},
dKs:function dKs(d){this.a=d},
dL6:function dL6(d){this.a=d},
dKI:function dKI(){},
dKJ:function dKJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKH:function dKH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKD:function dKD(d,e,f){this.a=d
this.b=e
this.c=f},
dKC:function dKC(d,e,f){this.a=d
this.b=e
this.c=f},
dKA:function dKA(d,e){this.a=d
this.b=e},
dKE:function dKE(d){this.a=d},
dKF:function dKF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKB:function dKB(d,e){this.a=d
this.b=e},
dKG:function dKG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKK:function dKK(d,e){this.a=d
this.b=e},
dLe:function dLe(){},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLg:function dLg(d){this.a=d},
dLh:function dLh(d,e){this.a=d
this.b=e},
dLa:function dLa(d){this.a=d},
dL8:function dL8(d,e){this.a=d
this.b=e},
dLb:function dLb(d,e){this.a=d
this.b=e},
dLc:function dLc(d,e){this.a=d
this.b=e},
dLd:function dLd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dLi:function dLi(d){this.a=d},
dL9:function dL9(d){this.a=d},
dKx:function dKx(d){this.a=d},
baQ:function baQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d0a:function d0a(d){this.a=d},
d09:function d09(d,e){this.a=d
this.b=e},
d0b:function d0b(d){this.a=d},
d08:function d08(d,e){this.a=d
this.b=e},
fbR:function fbR(d,e){this.a=d
this.b=e},
fbS:function fbS(d){this.a=d},
fbT:function fbT(){},
fbP:function fbP(d,e){this.a=d
this.b=e},
fbQ:function fbQ(){},
fbW:function fbW(d,e){this.a=d
this.b=e},
fbX:function fbX(d){this.a=d},
fbY:function fbY(){},
fbU:function fbU(d){this.a=d},
fbV:function fbV(d,e){this.a=d
this.b=e},
Ix:function Ix(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Et:function Et(d,e){this.a=d
this.b=e},
baS:function baS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d0d:function d0d(d){this.a=d},
d0u:function d0u(d){this.a=d},
d0m:function d0m(d){this.a=d},
d0n:function d0n(){},
d0l:function d0l(d){this.a=d},
d0e:function d0e(){},
d0k:function d0k(d){this.a=d},
d0j:function d0j(d,e){this.a=d
this.b=e},
d0f:function d0f(d){this.a=d},
d0o:function d0o(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0p:function d0p(d){this.a=d},
d0q:function d0q(d){this.a=d},
d0r:function d0r(){},
d0s:function d0s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d0t:function d0t(){},
d0c:function d0c(d,e,f,g,h,i,j,k,l,m){var _=this
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
d0g:function d0g(d,e){this.a=d
this.b=e},
d0h:function d0h(d){this.a=d},
d0i:function d0i(){},
aFX:function aFX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baT:function baT(d,e){this.b=d
this.a=e},
d0v:function d0v(){},
d0w:function d0w(d){this.a=d},
d0x:function d0x(d){this.a=d},
d0y:function d0y(){},
bex:function bex(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9Y:function b9Y(d,e){this.b=d
this.a=e},
brY:function brY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eWv:function eWv(d){this.a=d},
bhP:function bhP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eya:function eya(d){this.a=d},
ey9:function ey9(d,e){this.a=d
this.b=e},
Y_:function Y_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayS:function ayS(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dfM:function dfM(d,e){this.a=d
this.b=e},
dfL:function dfL(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(d){this.a=d},
dfV:function dfV(d){this.a=d},
dfW:function dfW(d){this.a=d},
dfU:function dfU(d,e){this.a=d
this.b=e},
dfX:function dfX(){},
dg_:function dg_(d){this.a=d},
dfT:function dfT(d,e){this.a=d
this.b=e},
dfZ:function dfZ(){},
dg0:function dg0(d){this.a=d},
dfS:function dfS(d,e){this.a=d
this.b=e},
dg1:function dg1(d){this.a=d},
dfR:function dfR(d){this.a=d},
dg2:function dg2(d){this.a=d},
dfQ:function dfQ(d){this.a=d},
dg3:function dg3(d){this.a=d},
dfP:function dfP(d){this.a=d},
dg4:function dg4(d){this.a=d},
dfO:function dfO(d){this.a=d},
dg5:function dg5(d){this.a=d},
dfN:function dfN(d,e){this.a=d
this.b=e},
dfY:function dfY(d){this.a=d},
aaT:function aaT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bew:function bew(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaS:function aaS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bev:function bev(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dg6:function dg6(d){this.a=d},
dg7:function dg7(d,e){this.a=d
this.b=e},
ayT:function ayT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aF_:function aF_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaU:function aaU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dgg:function dgg(d){this.a=d},
Il:function Il(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fRA(d){var w=d.R,v=x.N
return w.iF(w,new C.c3u(),v,v)},
hkr(d){var w=d.bA
if(w>=0)return w
return 5},
fRC(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fRA(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
fRB(d,e){var w=C.fRC(d,e)
if(w!=null&&w.c8(new A.Q(Date.now(),0,!1)))return!0
return!1},
hks(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a_(C.fRA(d),w,w)
u=C.fRC(d,e)
t=u!=null&&u.c8(new A.Q(Date.now(),0,!1))?u:new A.Q(Date.now(),0,!1)
v.m(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a4().ab())
d.R=v},
aWI(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWI=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l0(t,B.Gr),$async$aWI)
case 3:if(l){u=!0
w=1
break}u=A.kG(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Gr,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWI,v)},
c3u:function c3u(){},
hkp(){var w,v=$.oZ(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fN(u)},
H3(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$H3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$H3)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_family_tree_backup_codes_v1",null,!1,B.bE),$async$H3)
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
return A.i($async$H3,v)},
a55(d){return C.hkq(d)},
hkq(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a55=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$a55)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.ht("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,B.cz,null),$async$a55)
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
return A.i($async$a55,v)},
c3t(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c3t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.H3(),$async$c3t)
case 3:t=m.jk(f),t=t.gah(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a7(q)
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
return A.i($async$c3t,v)},
LP(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$LP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c3t(d),$async$LP)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.H3(),$async$LP)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dS(A.a_(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.Q(Date.now(),0,!1).a4().ab())
r.m(s,t,o)
w=9
return A.b(C.a55(s),$async$LP)
case 9:case 8:u=t
w=1
break
case 5:n=C.hkp()
w=10
return A.b(C.H3(),$async$LP)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=11
return A.b(C.a55(s),$async$LP)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LP,v)},
aWH(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.H3(),$async$aWH)
case 3:t=f
for(s=J.dg(t),r=s.gdH(t),r=r.dA(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a55(t),$async$aWH)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWH,v)},
a56(d,e,f){var w=0,v=A.j(x.H),u
var $async$a56=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amW(d,e),$async$a56)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.LP(d),$async$a56)
case 7:w=4
break
case 5:w=8
return A.b(C.aWH(d),$async$a56)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a56,v)},
amQ(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amQ=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amW(f,e),$async$amQ)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bY(),$async$amQ)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.H3(),$async$amQ)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a7(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amQ,v)},
aWG(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bY(),$async$aWG)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.H3(),$async$aWG)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a7(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWG,v)},
hkt(){var w,v=$.oZ(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fN(u)},
amT(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$amT)
case 3:if(!g){u=null
w=1
break}t=C.hkt()
w=4
return A.b(A.Td(),$async$amT)
case 4:s=g
r=B.dG.aG(B.R.al(d.eF(),null))
r=B.cP.gcs().aG(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=5
return A.b(A.a57(s),$async$amT)
case 5:p=e?999:2
u=new A.Za("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amT,v)},
amS(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amS=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Td(),$async$amS)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aR(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aWG(J.k(l==null?"":l),j),$async$amS)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.c1.c6(0,B.cw.aG(t))
s=C.fRD(r)}catch(f){q=A.a6(f)
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
l.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
o.m(p,g,l)}w=5
return A.b(A.a57(p),$async$amS)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amS,v)},
fRD(d){var w,v,u,t,s=null
try{w=B.R.aE(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hkv(A.a_(w,x.N,x.z))
return u}catch(t){v=A.a6(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fBW(d){var w=0,v=A.j(x.m),u,t,s
var $async$fBW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amS(t[1])
w=1
break}u=null
w=1
break}u=C.fRD(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBW,v)},
hkv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d5(v,x.f)
u=A.cz(u,new C.c3w(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a4<G.E>")
s=A.z(new A.a4(u,new C.c3x(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jk(p),t=t.gah(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d5(l,u)
n=A.cz(n,new C.c3y(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a4<G.E>")
j=A.z(new A.a4(n,new C.c3z(),k),k.k("G.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amU(h,w,s,r,q)},
amW(d,e){var w=0,v=A.j(x.y),u,t
var $async$amW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.LH(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zI(d),$async$amW)
case 3:u=t.ct(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amW,v)},
c3F(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c3F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zI(d),$async$c3F)
case 3:t=s.b4(f,new C.c3G(),x.cs)
t=A.z(t,t.$ti.k("ai.E"))
B.d.aZ(t,new C.c3H())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c3F,v)},
Te(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Te=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amW(e,d),$async$Te)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.LP(e),$async$Te)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zI(e),$async$Te)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c3D(g))
r=A.z(t,t.$ti.k("G.E"))}t=J.a7(r)
if(t.gai(r)){u=null
w=1
break}t=t.di(r,new C.c3E(e),x.k)
r=A.z(t,t.$ti.k("ai.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Jh(e,o),$async$Te)
case 14:n=i
if(J.ct(n))q.m(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.amU(s,B.a.i(e.toLowerCase()),r,new A.Q(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Te,v)},
aWL(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWL=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Te(d,e,f,g),$async$aWL)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.F8(A.It(q.eF(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWL,v)},
aWK(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWK=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Te(d,e,f,g),$async$aWK)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amT(r,f),$async$aWK)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aD_(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWK,v)},
Tf(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Tf=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fBW(a0),$async$Tf)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amQ(g.a,d,e,f,s,r),$async$Tf)
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
return A.b(C.bxi(e,j),$async$Tf)
case 12:case 11:w=13
return A.b(C.afa(e,j,s),$async$Tf)
case 13:h=n.h(0,i)
w=h!=null&&J.ct(h)?14:15
break
case 14:w=16
return A.b(C.zT(e,i,h),$async$Tf)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.blj(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Tf,v)},
amU:function amU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3B:function c3B(){},
c3C:function c3C(){},
c3A:function c3A(){},
c3w:function c3w(){},
c3x:function c3x(){},
c3y:function c3y(){},
c3z:function c3z(){},
c3G:function c3G(){},
c3H:function c3H(){},
c3D:function c3D(d){this.a=d},
c3E:function c3E(d){this.a=d},
fK1(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hm(d,new C.amV(w,e,g,i,f,h,null),!0,null,x.H)},
d07(d,e,f,g,h,i,j,k){return new C.baP(i,e,k,j,g,f,h,d,null)},
amV:function amV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAs:function aAs(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dLr:function dLr(d){this.a=d},
dLs:function dLs(d,e,f){this.a=d
this.b=e
this.c=f},
dLw:function dLw(d,e){this.a=d
this.b=e},
dLx:function dLx(d){this.a=d},
dLo:function dLo(d){this.a=d},
dLp:function dLp(d,e){this.a=d
this.b=e},
dLq:function dLq(d,e){this.a=d
this.b=e},
dLv:function dLv(d){this.a=d},
dLu:function dLu(d,e){this.a=d
this.b=e},
dLt:function dLt(){},
dLz:function dLz(d){this.a=d},
dLA:function dLA(d,e){this.a=d
this.b=e},
dLy:function dLy(d,e){this.a=d
this.b=e},
d0z:function d0z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
baR:function baR(d,e,f){this.d=d
this.e=e
this.a=f},
aaa:function aaa(d,e,f){this.c=d
this.d=e
this.a=f},
baP:function baP(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
baU:function baU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Yk:function Yk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAr:function aAr(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dLj:function dLj(d,e){this.a=d
this.b=e},
dLk:function dLk(d){this.a=d},
dLl:function dLl(d){this.a=d},
dLm:function dLm(d){this.a=d},
dLn:function dLn(d){this.a=d},
Yl:function Yl(d){this.a=d},
bfW:function bfW(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dLB:function dLB(d,e){this.a=d
this.b=e},
aVh(d,e){return new C.aVg(d,e,null)},
aVg:function aVg(d,e,f){this.c=d
this.d=e
this.a=f},
hJc(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aX(d,11)},
hQo(d){return A.c2(B.K,null,new C.frr(new C.t6(A.M(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fTt(d,e){return new C.apM(e,d,null)},
aN6(d,e,f,g,h,i,j){var w=C.hJc(i)
if(w!=null)return A.bu(e,new A.a5(j,f,new C.a49(w,!0,null),null),B.ao)
return I.aMs(e,B.bP,f,g,h,i,j)},
ll:function ll(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a49:function a49(d,e,f){this.c=d
this.d=e
this.a=f},
bfF:function bfF(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
dxM:function dxM(d){this.a=d},
dxN:function dxN(){},
dxO:function dxO(d,e){this.a=d
this.b=e},
bfE:function bfE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
frr:function frr(d){this.a=d},
frq:function frq(d,e){this.a=d
this.b=e},
frp:function frp(d,e){this.a=d
this.b=e},
fro:function fro(d,e){this.a=d
this.b=e},
apM:function apM(d,e,f){this.c=d
this.d=e
this.a=f},
cb8:function cb8(d,e){this.a=d
this.b=e},
aIh:function aIh(){},
hQ9(d){var w=null
return A.cg(w,w,!0,w,new C.fqR(),d,w,!0,!0,x.e2)},
hRk(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.fy1(h,g,f,e),d,w,!0,!0,x.N)},
hQb(d,e){var w=null
return A.cg(w,w,!0,w,new C.fqT(e),d,w,!0,!0,x.dY)},
hQa(d){var w=null
return A.cg(w,w,!0,w,new C.fqS(),d,w,!0,!0,x.c5)},
aPX:function aPX(d,e){this.a=d
this.b=e},
aPW:function aPW(d){this.a=d},
aO1:function aO1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqR:function fqR(){},
fy1:function fy1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqT:function fqT(d){this.a=d},
fqS:function fqS(){},
WZ:function WZ(d,e){this.c=d
this.a=e},
avN:function avN(){var _=this
_.d=$
_.c=_.a=_.e=null},
cTL:function cTL(d){this.a=d},
cTM:function cTM(d){this.a=d},
cTK:function cTK(d,e){this.a=d
this.b=e},
cTN:function cTN(d){this.a=d},
cTO:function cTO(d){this.a=d},
WY:function WY(d){this.a=d},
avM:function avM(){this.d=$
this.c=this.a=null},
cTH:function cTH(d){this.a=d},
cTI:function cTI(d){this.a=d},
cTJ:function cTJ(d){this.a=d},
Ww:function Ww(d){this.a=d},
aux:function aux(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
crm:function crm(){},
crs:function crs(d){this.a=d},
crt:function crt(d){this.a=d},
cru:function cru(d){this.a=d},
crr:function crr(){},
crv:function crv(d){this.a=d},
crw:function crw(d){this.a=d},
crq:function crq(){},
crx:function crx(d,e){this.a=d
this.b=e},
crp:function crp(d,e){this.a=d
this.b=e},
crn:function crn(d,e){this.a=d
this.b=e},
cry:function cry(d){this.a=d},
cro:function cro(){},
crz:function crz(d){this.a=d},
a_3:function a_3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brQ:function brQ(){this.d=$
this.c=this.a=null},
eVY:function eVY(d,e){this.a=d
this.b=e},
eVZ:function eVZ(d){this.a=d},
eW_:function eW_(d,e){this.a=d
this.b=e},
a9e:function a9e(d,e){this.a=d
this.b=e},
Eg:function Eg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brO:function brO(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eVW:function eVW(d,e){this.a=d
this.b=e},
auq:function auq(d,e){this.c=d
this.a=e},
brP:function brP(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eVX:function eVX(d){this.a=d},
brN:function brN(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aKp:function aKp(){},
aKq:function aKq(){},
bzb(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.og(B.o.u(t),A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fpH(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VW(A.dl(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hR().kG(85,1280,B.ey),$async$aMJ)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f7(),$async$aMJ)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.fTs()
w=9
return A.b(C.cb7(q,r),$async$aMJ)
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
return A.i($async$aMJ,v)},
aN4(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aN4=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cb4(g)
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
return A.b($.Y().K3(p,!0,null,i).cJ(0,B.fJ),$async$aN4)
case 9:n=a1
w=10
return A.b(n.lT(),$async$aN4)
case 10:m=a1
w=11
return A.b(J.aNO(m).hf(B.fN),$async$aN4)
case 11:l=a1
J.aNO(m).p()
if(l==null){w=8
break}i=J.f3(B.dD.gaN(l))
k="data:image/png;base64,"+B.cP.gcs().aG(i)
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
return A.i($async$aN4,v)},
fpH:function fpH(){},
t6:function t6(d){this.a=d},
apL:function apL(d,e,f){this.c=d
this.d=e
this.a=f},
aBU:function aBU(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
evk:function evk(d,e){this.a=d
this.b=e},
evb:function evb(d){this.a=d},
evc:function evc(d){this.a=d},
evi:function evi(d,e){this.a=d
this.b=e},
evh:function evh(d,e){this.a=d
this.b=e},
eve:function eve(d,e){this.a=d
this.b=e},
evd:function evd(d,e){this.a=d
this.b=e},
evf:function evf(d){this.a=d},
evg:function evg(d,e){this.a=d
this.b=e},
evj:function evj(d,e){this.a=d
this.b=e},
ev6:function ev6(d,e){this.a=d
this.b=e},
eva:function eva(d){this.a=d},
ev9:function ev9(d,e){this.a=d
this.b=e},
ev8:function ev8(d){this.a=d},
evl:function evl(d,e){this.a=d
this.b=e},
evm:function evm(d,e){this.a=d
this.b=e},
ev7:function ev7(d,e){this.a=d
this.b=e},
h4U(d,e,f){var w="thumbnailPath",v=e.ac()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.Q(Date.now(),0,!1).a4().ab(),"project",v],x.N,x.z)},
fpI(d,e,f){var w=0,v=A.j(x.N),u
var $async$fpI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.al(C.h4U(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fpI,v)},
bzd(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bzd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fpI(!0,d,e),$async$bzd)
case 4:w=3
return A.b(r.apJ(g,d,e.a),$async$bzd)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dG.aG(B.R.al(C.h4U(d,e,null),null))
u="NGMY_WS:"+B.jY.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzd,v)},
fXY(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fJJ(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.cV(s,"NGMYWSSYNC2|"))return!0
if(J.cV(s,"NGMY_WS:"))return!0
if(J.eR(s,t))return!0
if(J.cV(s,"{"))try{w=B.R.aE(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hOe(d){var w,v,u,t=C.fXY(d)
if(t==null)return null
if(C.fJJ(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aX(t,w))
if(C.fJJ(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aX(t,u))
if(C.fJJ(v))return v}return null},
fJI(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.cV(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cV(q,"NGMY_WS:")){v=B.c1.c6(0,B.cw.aG(J.mj(q,8)))
w=t.a(B.R.aE(0,v,r))}else w=t.a(B.R.aE(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fEr(A.a_(u,x.N,x.z))
return t}catch(s){return r}},
bzc(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bzc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apI(t[1]),$async$bzc)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fJI(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fJI(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzc,v)},
fJH(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l4(w,v,d.c,d.d,new A.Q(Date.now(),0,!1))},
byK(){var w=0,v=A.j(x.o),u,t
var $async$byK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Fj(),$async$byK)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fJI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byK,v)},
h5N(d,e,f,g){return A.c2(B.K,null,new C.fxU(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fxU:function fxU(d,e,f){this.a=d
this.b=e
this.c=f},
abe:function abe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
evo:function evo(d,e){this.a=d
this.b=e},
evp:function evp(d,e){this.a=d
this.b=e},
evq:function evq(d,e){this.a=d
this.b=e},
evr:function evr(d,e){this.a=d
this.b=e},
evn:function evn(d){this.a=d},
apF:function apF(d,e,f){this.c=d
this.d=e
this.a=f},
bhi:function bhi(){var _=this
_.c=_.a=_.e=_.d=null},
ev1:function ev1(d,e){this.a=d
this.b=e},
ev2:function ev2(d){this.a=d},
ev3:function ev3(d){this.a=d},
apK:function apK(d){this.a=d},
aBT:function aBT(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ev5:function ev5(d){this.a=d},
ev4:function ev4(d){this.a=d},
hnG(d,e,f,g,h){return new C.Mq(h,g,d,e,f,null)},
aGE:function aGE(d,e){this.a=d
this.b=e},
Mq:function Mq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBV:function aBV(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
evO:function evO(){},
evK:function evK(d,e){this.a=d
this.b=e},
evL:function evL(d){this.a=d},
evv:function evv(d){this.a=d},
evt:function evt(d){this.a=d},
evu:function evu(d){this.a=d},
evE:function evE(d,e){this.a=d
this.b=e},
evB:function evB(d,e){this.a=d
this.b=e},
evC:function evC(d,e){this.a=d
this.b=e},
evD:function evD(d,e,f){this.a=d
this.b=e
this.c=f},
evz:function evz(d,e,f){this.a=d
this.b=e
this.c=f},
evx:function evx(d){this.a=d},
evy:function evy(d){this.a=d},
evA:function evA(d){this.a=d},
evR:function evR(d){this.a=d},
evQ:function evQ(d){this.a=d},
evS:function evS(d){this.a=d},
evP:function evP(d){this.a=d},
evs:function evs(d){this.a=d},
evw:function evw(d,e){this.a=d
this.b=e},
evN:function evN(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
evJ:function evJ(d,e){this.a=d
this.b=e},
evG:function evG(d,e){this.a=d
this.b=e},
evF:function evF(d,e,f){this.a=d
this.b=e
this.c=f},
btA:function btA(){},
zA(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ae("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
adE(d,e,f){return C.hCX(d,e,f)},
hCX(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adE=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$adE)
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
return A.i($async$adE,v)},
adD(d,e){return C.hCW(d,e)},
hCW(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adD=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adD)
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
return A.i($async$adD,v)},
hBJ(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QU(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bwi(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bwi=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZX(q),$async$bwi)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aN4(q,!1),$async$bwi)
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
return A.i($async$bwi,v)},
hbB(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aR(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aR(d.h(0,"quantity"))
if(w==null)w=null
v=A.aR(d.h(0,"unitPrice"))
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
fEr(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d5(s,x.f)
w=A.cz(w,new C.cqL(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a4<G.E>")
r=A.z(new A.a4(w,new C.cqM(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.l4(w,v,u,r,t==null?new A.Q(Date.now(),0,!1):t)},
hGI(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.WE
case"female":case"f":return D.aeM
default:return D.wL}},
h1C(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fNJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hGI(v==null?j:J.k(v))
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
m=A.aR(d.h(0,"birthOrder"))
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aR(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hQ(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hGK(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Kx
case"viewer":return D.k5
default:return D.rP}},
hGL(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
F9(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bxy(d,e){return B.a.i(e.toLowerCase())===C.F9(d,e)&&d.y!==D.k5},
tk(d,e){var w,v=d.y
if(v===D.k5)return!1
w=B.a.i(e.toLowerCase())
if(w===C.F9(d,e))return!0
if(v===D.Kx)return!0
v=d.e
return new A.J(v,A.fJN(),A.U(v).k("J<1,n>")).t(0,w)},
hGb(d){return J.dE(d,new C.fb8()).gJ(0)},
fyg(d){var w=0,v=A.j(x.y),u,t
var $async$fyg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zI(d),$async$fyg)
case 3:u=t.rl(f,new C.fyh(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyg,v)},
bxi(d,e){var w=0,v=A.j(x.H),u,t
var $async$bxi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zI(d),$async$bxi)
case 3:t=g
if(J.rl(t,new C.fak(e))){w=1
break}if(C.hGb(t)>=2)throw A.R(A.ba("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bxi,v)},
aid(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d5(n,x.f)
w=A.cz(w,new C.bJn(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a4<G.E>")
m=A.z(new A.a4(w,new C.bJo(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b4(u,new C.bJp(),x.N)
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
q=A.aR(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kn(l,w,v,!s,t,m,r,q,p,C.hGK(o==null?null:J.k(o)))},
h1L(d){var w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.am(v,0,8)},
BO(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PL(d),$async$BO)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ax(),$async$BO)
case 4:t=f
w=5
return A.b(t.a3H(0),$async$BO)
case 5:w=6
return A.b(C.f2s(t,l),$async$BO)
case 6:s=f
if(J.ct(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fYw(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.of(l,n),$async$BO)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fYw(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.of(l,n),$async$BO)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BO,v)},
f2s(d,e){return C.hze(d,e)},
hze(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f2s=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zA(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aE(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.aa(n)===0){w=7
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zA(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aE(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fEr(A.a_(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zA(a9)+"_"+n))
i=C.hBJ(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZX(h),$async$f2s)
case 17:g=b1
if(g!=null){i=i.QU(g)
p=!0}case 16:J.ch(q,i)
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
case 8:J.PV(q,new C.f2t())
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
return A.i($async$f2s,v)},
bxI(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PL(d),$async$bxI)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BO(r),$async$bxI)
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
return A.i($async$bxI,v)},
fYw(d){var w,v,u,t
try{w=B.R.aE(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d5(w,x.f)
v=A.cz(v,new C.eZd(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a4<G.E>")
v=A.z(new A.a4(v,new C.eZe(),u),u.k("G.E"))
B.d.aZ(v,new C.eZf())
return v}catch(t){v=A.a([],x.D)
return v}},
of(d,e){return C.hQ_(d,e)},
hQ_(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$of=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.PL(b2),$async$of)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ax(),$async$of)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zA(a8)
p=A.aS(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b4(x.j.a(B.R.aE(0,p,null)),new C.fqI(),a2).fG(0)
a2=J.b4(b3,new C.fqJ(),a2).bZ(0,new C.fqK())
n=A.d7(a2,a2.$ti.k("G.E"))
a2=o,a2=A.ef(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eR(n,m)?17:18
break
case 17:a5=C.zA(a8)
l=A.aS(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a6m(l),$async$of)
case 19:t=21
a5=C.zA(a8)
k=A.aS(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aE(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a6m(a5==null?null:J.k(a5)),$async$of)
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
return A.b(C.adD(r,"ngmy_worksheet_item_v3_"+C.zA(a8)+"_"+m),$async$of)
case 29:w=30
return A.b(C.adD(r,"ngmy_worksheet_thumb_v3_"+C.zA(a8)+"_"+m),$async$of)
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
return A.b(C.bwi(h),$async$of)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adE(r,"ngmy_worksheet_thumb_v3_"+C.zA(a8)+"_"+a4,f),$async$of)
case 40:g=i.QU(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adD(r,"ngmy_worksheet_thumb_v3_"+C.zA(a8)+"_"+a4),$async$of)
case 41:g=i.QU(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adD(r,"ngmy_worksheet_thumb_v3_"+C.zA(a8)+"_"+a4),$async$of)
case 42:case 34:a4=i.a
w=43
return A.b(C.adE(r,"ngmy_worksheet_item_v3_"+C.zA(a8)+"_"+a4,B.R.al(g.ac(),null)),$async$of)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adE(r,"ngmy_worksheets_index_v3_"+C.zA(a8),B.R.al(q,null)),$async$of)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eE(b3,new C.fqL(q))
a4=a3.$ti.k("cT<1,a1<n,@>>")
a7=A.z(new A.cT(a3,new C.fqM(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.adE(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.R.al(a0,null)),$async$of)
case 45:w=46
return A.b(J.haH(r),$async$of)
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
JI(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$JI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BO(d),$async$JI)
case 3:t=g
s=J.cA(t)
r=s.bi(t,new C.fyf(e))
if(r===-1)s.ck(t,0,e)
else s.m(t,r,e)
u=C.of(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$JI,v)},
bxv(d,e){var w=0,v=A.j(x.H),u
var $async$bxv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BO(d),$async$bxv)
case 2:u=g
J.n2(u,new C.fbA(e))
w=3
return A.b(C.of(d,u),$async$bxv)
case 3:return A.h(null,v)}})
return A.i($async$bxv,v)},
Fb(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Fb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Fb)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aS(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aE(0,i,null)
if(x.j.b(t)){j=J.d5(t,x.f)
j=A.cz(j,new C.fdK(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a4<G.E>")
r=A.z(new A.a4(j,new C.fdL(),s),s.k("G.E"))
B.d.aZ(r,new C.fdM())
k=r}}catch(h){}w=4
return A.b(C.eZW(d),$async$Fb)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hzB(k,p,d)
j=A.U(o)
s=j.k("J<1,a1<n,@>>")
s=A.z(new A.J(o,new C.fdN(),s),s.k("ai.E"))
n=B.R.al(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OX(d,o),$async$Fb)
case 7:case 6:j=j.k("a4<1>")
m=A.z(new A.a4(o,new C.fdO(d),j),j.k("G.E"))
if(m.length!==0)C.aLF(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Fb,v)},
fqu(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fqu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OX(d,e),$async$fqu)
case 3:t=J.dE(e,new C.fqv(d))
s=A.z(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLF(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqu,v)},
a0F(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0F=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ax(),$async$a0F)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aS(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aE(0,l,null)
if(x.j.b(u)){m=J.d5(u,x.f)
m=A.cz(m,new C.fya(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a4<G.E>")
s=A.z(new A.a4(m,new C.fyb(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pL(o,new C.fyc(e))
if(B.a.i(e.x).length===0&&C.tk(e,d)){m=B.a.i(d.toLowerCase())
p=e.aAg(e.y===D.k5?D.k5:D.rP,m)}else p=e
if(q===-1)J.p1(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OX(d,o),$async$a0F)
case 3:w=C.tk(p,d)?4:5
break
case 4:w=6
return A.b(C.aLE(C.F9(p,d),p),$async$a0F)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0F,v)},
aLO(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Fb(d),$async$aLO)
case 2:u=g
t=J.cA(u)
s=A.qE(t.eE(u,new C.fbh(e)))
t.bm(u,new C.fbi(e))
w=3
return A.b(C.OX(d,u),$async$aLO)
case 3:w=s!=null&&C.bxy(s,d)?4:5
break
case 4:w=6
return A.b(C.eZh(e),$async$aLO)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLO,v)},
afn(d){var w=d.f,v=A.U(w).k("a4<1>")
w=A.z(new A.a4(w,new C.fyl(),v),v.k("G.E"))
return w},
fHu(d,e){var w,v=d.f,u=A.qE(new A.a4(v,new C.faT(e),A.U(v).k("a4<1>")))
v=C.afn(d)
w=A.U(v).k("a4<1>")
v=A.z(new A.a4(v,new C.faU(e,u),w),w.k("G.E"))
B.d.aZ(v,new C.faV())
return v},
hGO(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h5Q(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bi(C.fHu(d,u),new C.fy2(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hIh(d,e){var w
if(e==null||e.length===0)return 1
w=C.fHu(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fev(),A.U(w).k("J<1,I>")).ft(0,B.yT)+1},
hPT(d){var w,v=C.afn(d)
if(v.length===0)return null
w=new A.a4(v,new C.fqr(),A.U(v).k("a4<1>"))
if(!w.gai(0))return w.gL(0)
return B.d.gL(v)},
hGJ(d){return A.E(["id",d.a,"name",d.b,"gender",C.h1C(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hIc(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.wL?n:q.c
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
d=q.aAb(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cAw(a1,w,a3.d,a2.y,s,a0,v)},
zI(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$zI)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aS(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aE(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d5(t,x.f)
p=A.cz(p,new C.fdH(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a4<G.E>")
p=A.z(new A.a4(p,new C.fdI(),s),s.k("G.E"))
B.d.aZ(p,new C.fdJ())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zI,v)},
afa(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$afa=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rP:D.k5
a7=C.F9(b2,b3)
w=2
return A.b(C.zI(b1),$async$afa)
case 2:a8=b5
a9=J.cA(a8)
b0=a9.bi(a8,new C.fqp(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bxi(b1,b2),$async$afa)
case 5:case 4:if(b0===-1){u=b2.aAg(a6,a7)
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
i=i!==D.wL?i:l.c
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
s.m(0,m,l.aAb(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bg<2>")
s=A.z(new A.bg(s,k),k.k("G.E"))
k=a5?D.rP:D.k5
u=t.xG(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OX(b1,a8),$async$afa)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLE(B.a.i(b3.toLowerCase()),u),$async$afa)
case 9:case 8:return A.h(null,v)}})
return A.i($async$afa,v)},
fYS(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.Q(Date.now(),0,!1).a4().ab(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("J<1,a1<n,@>>"),k=A.z(new A.J(m,C.h51(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().ab(),"updatedAt",o],r,x.K),"createdAt",s.a4().ab(),"updatedAt",o],r,x.z)},
fYT(d,e){var w=new A.Q(Date.now(),0,!1).a4().ab(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("J<1,a1<n,@>>")
u=A.z(new A.J(u,C.h51(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().ab(),"updatedAt",w],x.N,x.z)},
hxk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aid(A.a_(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fJN(),A.U(j).k("J<1,n>")).bZ(0,new C.eZJ())
t=A.z(j,j.$ti.k("G.E"))
if(u===v)s=D.rP
else s=B.d.t(t,u)?D.Kx:D.k5
return w.aAg(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aid(A.a_(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d5(q,h)
h=A.cz(h,new C.eZK(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a4<G.E>")
o=A.z(new A.a4(h,new C.eZL(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b4(n,new C.eZM(),x.N).bZ(0,new C.eZN())
t=A.z(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rP
else s=B.d.t(t,u)?D.Kx:D.k5
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
j=A.aR(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kn(h,r,p,!m,t,o,l,j,v,s)},
eZW(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eZW=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.f__()
h=x.N
g=x.z
w=7
return A.b(A.iD(A.a([A.la("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bE),r.$2(A.la("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bE),"collaborator"),r.$2(A.la("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bE),"public")],x.cl),x.U),$async$eZW)
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
h=A.cz(new A.bg(l,h),new C.eZX(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a4<G.E>")
l=A.z(new A.a4(h,new C.eZY(),l),l.k("G.E"))
B.d.aZ(l,new C.eZZ())
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
return A.i($async$eZW,v)},
hzB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gai(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f37(),v).bZ(0,new C.f38())
t=A.d7(u,u.$ti.k("G.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.F9(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.k5){m=q.e
m=!new A.J(m,A.fJN(),A.U(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.m(0,p,q)}for(j=j.gah(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hIc(l,v)
o=C.F9(k,w)
p=v.d
s.m(0,u,o===w?k.b6S(p,D.rP):k.b6S(p,v.y))}j=s.$ti.k("bg<2>")
j=A.z(new A.bg(s,j),j.k("G.E"))
B.d.aZ(j,new C.f39())
return j},
OX(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$OX)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b4(e,new C.f59(),x.a)
s=A.z(s,s.$ti.k("ai.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.al(s,null)),$async$OX)
case 3:return A.h(null,v)}})
return A.i($async$OX,v)},
aLE(d,e){return C.hEB(d,e)},
hEB(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lC("family_trees",A.a([C.fYS(e,d)],p),null,B.cz),$async$aLE)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lC("family_trees",A.a([C.fYT(e,d)],p),null,B.cz),$async$aLE)
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
return A.i($async$aLE,v)},
aLF(d,e){return C.hEC(d,e)},
hEC(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLF=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("J<1,a1<n,@>>")
m=n.k("ai.E")
l=A.z(new A.J(e,new C.f9H(d),n),m)
r=l
w=7
return A.b(A.lC("family_trees",r,null,B.cz),$async$aLF)
case 7:q=g
if(q){u=!0
w=1
break}k=A.z(new A.J(e,new C.f9I(d),n),m)
p=k
w=8
return A.b(A.lC("family_trees",p,null,B.cz),$async$aLF)
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
return A.i($async$aLF,v)},
eZh(d){return C.hwJ(d)},
hwJ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eZh=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Pl("family_trees",A.E(["id",d],x.N,x.z),null,B.cz),$async$eZh)
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
return A.i($async$eZh,v)},
qp:function qp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l4:function l4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqO:function cqO(){},
cqN:function cqN(){},
cqL:function cqL(){},
cqM:function cqM(){},
Gc:function Gc(d,e){this.a=d
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
aic:function aic(d,e){this.a=d
this.b=e},
fb8:function fb8(){},
fyh:function fyh(d){this.a=d},
fak:function fak(d){this.a=d},
kn:function kn(d,e,f,g,h,i,j,k,l,m){var _=this
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
bJr:function bJr(){},
bJq:function bJq(){},
bJn:function bJn(){},
bJo:function bJo(){},
bJp:function bJp(){},
f2t:function f2t(){},
eZd:function eZd(){},
eZe:function eZe(){},
eZf:function eZf(){},
fqI:function fqI(){},
fqJ:function fqJ(){},
fqK:function fqK(){},
fqL:function fqL(d){this.a=d},
fqM:function fqM(){},
fyf:function fyf(d){this.a=d},
fbA:function fbA(d){this.a=d},
fdK:function fdK(){},
fdL:function fdL(){},
fdM:function fdM(){},
fdN:function fdN(){},
fdO:function fdO(d){this.a=d},
fqv:function fqv(d){this.a=d},
fya:function fya(){},
fyb:function fyb(){},
fyc:function fyc(d){this.a=d},
fbh:function fbh(d){this.a=d},
fbi:function fbi(d){this.a=d},
fyl:function fyl(){},
faT:function faT(d){this.a=d},
faU:function faU(d,e){this.a=d
this.b=e},
faV:function faV(){},
fy2:function fy2(d){this.a=d},
fev:function fev(){},
fqr:function fqr(){},
fdH:function fdH(){},
fdI:function fdI(){},
fdJ:function fdJ(){},
fqp:function fqp(d){this.a=d},
eZJ:function eZJ(){},
eZK:function eZK(){},
eZL:function eZL(){},
eZM:function eZM(){},
eZN:function eZN(){},
f__:function f__(){},
f_0:function f_0(d){this.a=d},
eZX:function eZX(d){this.a=d},
eZY:function eZY(){},
eZZ:function eZZ(){},
f37:function f37(){},
f38:function f38(){},
f39:function f39(){},
f59:function f59(){},
f9H:function f9H(d){this.a=d},
f9I:function f9I(d){this.a=d},
cqP:function cqP(d,e){this.a=d
this.b=e},
cqQ:function cqQ(d,e){this.a=d
this.b=e},
aDW:function aDW(d,e,f){this.a=d
this.b=e
this.c=f},
b57:function b57(){this.b=this.a=0},
b56:function b56(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
brR:function brR(){},
vZ(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcb()+"/"+w.gcr()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmF()),2,"0")+":"+B.a.aT(B.o.u(w.gEX()),2,"0")},
hnD(){var w,v=$.oZ(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fN(u)},
apG(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apG)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bE),$async$apG)
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
return A.i($async$apG,v)},
apH(d){return C.hnE(d)},
hnE(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apH)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.ht("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,B.cz,null),$async$apH)
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
return A.i($async$apH,v)},
apJ(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apJ)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hnD()
w=4
return A.b(C.apG(),$async$apJ)
case 4:r=h
q=B.a.i(e)
p=B.dG.aG(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cP.gcs().aG(p),"usesRemaining",25,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=5
return A.b(C.apH(r),$async$apJ)
case 5:u=new A.Za("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apJ,v)},
apI(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bY(),$async$apI)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apG(),$async$apI)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aR(n.h(o,"usesRemaining"))
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
m.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
p.m(q,i,m)}w=5
return A.b(C.apH(q),$async$apI)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apI,v)},
fTs(){var w=new A.Q(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cB.aB(999999)},
hnF(d){var w,v,u,t,s,r,q
try{w=A.ae1(d)
if(w==null)return d
v=w
if(J.JO(v)>960||J.JN(v)>960){s=v
r=J.JO(v)>=J.JN(v)?960:null
v=A.ae0(s,J.JN(v)>J.JO(v)?960:null,B.LM,r)}s=v
u=A.ajC(82).Rf(s,B.xv)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cm(u))
return s}catch(q){t=A.a6(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cb7(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cb7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hnF(e)
$.cb3.m(0,s,t)
u=C.bzf(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cb7,v)},
aZX(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZX=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cV(l,"data:image")){u=null
w=1
break}t=4
r=J.eR(l,",")?B.d.gaj(J.lc(l,",")):l
q=B.cw.aG(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.fTs()
w=7
return A.b(C.cb7(p,q),$async$aZX)
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
return A.i($async$aZX,v)},
cb4(d){var w=0,v=A.j(x.T),u,t,s
var $async$cb4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cb6(s),$async$cb4)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cb4,v)},
a6m(d){var w=0,v=A.j(x.H),u,t
var $async$a6m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h4V(d)
if(t==null){w=1
break}$.cb3.W(0,t)
w=3
return A.b(C.bze(t),$async$a6m)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a6m,v)},
bzf(d,e){return C.hOh(d,e)},
hOh(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bzf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKC
w=7
return A.b(n==null?$.aKC=I.fGy():n,$async$bzf)
case 7:r=g
q=new Uint8Array(A.cm(e))
p=J.mk(r,"thumbs","readwrite")
B.iz.lM(J.mi(p,"thumbs"),q,l)
w=8
return A.b(J.p0(p),$async$bzf)
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
return A.i($async$bzf,v)},
bze(d){return C.hOf(d)},
hOf(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bze=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKC
w=7
return A.b(o==null?$.aKC=I.fGy():o,$async$bze)
case 7:r=f
q=J.mk(r,"thumbs","readwrite")
B.iz.Eu(J.mi(q,"thumbs"),m)
w=8
return A.b(J.p0(q),$async$bze)
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
return A.i($async$bze,v)}},D,Ae,Af,P,Ag,Ah,I,Ai,Q,A_,Aj
J=c[1]
A=c[0]
B=c[2]
A0=c[191]
G=c[171]
F=c[29]
E=c[181]
N=c[108]
A1=c[109]
A2=c[159]
R=c[122]
A3=c[190]
A4=c[35]
M=c[189]
A5=c[78]
H=c[84]
S=c[128]
T=c[131]
U=c[202]
V=c[160]
A6=c[151]
A7=c[163]
W=c[158]
A8=c[62]
A9=c[68]
X=c[175]
Aa=c[207]
Ab=c[28]
Ac=c[140]
L=c[153]
Ad=c[164]
Y=c[205]
Z=c[198]
K=c[99]
O=c[66]
C=a.updateHolder(c[6],C)
D=c[201]
Ae=c[67]
Af=c[169]
P=c[204]
Ag=c[203]
Ah=c[54]
I=c[52]
Ai=c[74]
Q=c[206]
A_=c[120]
Aj=c[94]
C.alK.prototype={}
C.aVi.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bb4(),f=h.x!=null&&h.y6(i).length===0
if(h.x!=null)w=f?B.aW:B.bQ
else w=h.gRT()?B.bQ:B.e_
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b5L,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.epa,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.fW,i,i,i),B.T,D.eRa,B.av,A.d(C.vZ(new A.Q(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eNl,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aSv,i,i,i,i,B.VC,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fIn(h.d)
o=A.p(B.A,C.aVh(A.fgT(h.e,n),30),B.h,i,i,new A.o(B.lS,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eIP,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bA,D.eRr,B.ab,A.p(i,A.v(A.a([D.f4M,B.bA,A.d(A.zK(h.c),i,i,i,i,i,i,D.eE3,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eY,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,p,q,i,i,B.n),i,i,i,i,L.acW,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMz("Original due",C.vZ(h.r,!1))
n=j.aMz("Current due",C.vZ(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.v(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGO(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zD,i,i,1/0),B.T,j.c7g(),B.P,j.bWM(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.v(A.a([D.eSm,B.av,A.d(q,i,i,i,i,i,i,D.eIa,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaBQ()){q=A.m(14)
o=A.H(B.cp,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.v(A.a([D.f5Y,B.P,A.bu(A.m(12),A.ec(new A.a5(1/0,88,A.b2(i,i,i,new A.U5(h.ax,B.M,D.esx,!0,3.5,i),B.at),i),B.c,!0),B.ao)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.DM,i,i,i)],s))}p.push(B.ay)
p.push(D.eZL)
return A.p(i,A.v(A.a([r,new A.C(B.acZ,A.v(p,B.ag,i,B.e,B.j,0,B.p),i)],s),B.ag,i,B.e,B.Q,0,B.p),B.ao,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMz(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4G,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eF2,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c7g(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6P(B.e_,u,"Not paid yet")
w=t.y6(null).length
v=w===0?B.aW:B.bQ
return this.a6P(v,u,C.vZ(t.x,!0))},
bWM(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6P(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6P(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4G,u,u,u)
v=A.U(d).k("J<1,hb>")
v=A.z(new A.J(d,new C.bXY(),v),v.k("ai.E"))
return A.v(A.a([w,B.ar,A.c8(B.bJ,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6P(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4G,w,w,w),1),new A.dm(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b7e.prototype={
a5(d,e){new A.U5(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ar(d){return d.b!==this.b}}
C.alR.prototype={
S(){return new C.azT(A.a([],x.bp))},
gdT(){return this.c}}
C.azT.prototype={
Z(){this.a0()
this.Hk()},
Hk(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_V(t.a.c),$async$Hk)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dyE(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hk,v)},
aOq(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aN,s=A.l(v,v,u?B.bp:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bp:B.bv).j(0.22)
w=A.m(10)
return A.bn(v,new A.b3(4,r,new A.ay(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b3(4,w,new A.ay((this.a.d.a?B.bp:B.bv).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b3(4,A.m(10),D.aQ9),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aOp(d){return this.aOq(d,null)},
NH(d){return this.caP(d)},
caP(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.F1:B.ey
w=7
return A.b(new A.hR().B1(72,900,900,n),$async$NH)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f7(),$async$NH)
case 8:p=f
n=B.cP.gcs().aG(p)
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
return A.i($async$NH,v)},
aWw(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aN,o=A.m(10),n=A.H((q?B.bp:B.bv).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bp:B.bv
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aN:B.aF,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bp:B.bv
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fo(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c8)
q=A.a([q,B.aa,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.ct,s.a.d.a?B.bp:B.bv,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c8))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ky,D.bg4,r,r,r)},
BY(d){return this.btO(d)},
btN(){return this.BY(null)},
btO(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BY=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
a4=a4===q?B.o.u(B.k.N(p)):B.k.aa(p,2)}o=new A.ap(new A.bc(a4,B.b2,B.aM),s)
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
i=a3?null:A.fIn(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.v2?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.x.j(0.55),!0,"Dismiss",a4,new C.dyn(),new C.dyo(a2,t,a5,r,new C.dyp(a2,t),o,n,j),B.eK,!0,x.y),$async$BY)
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
break}if(f.length===0||e<=0){t.c.H(x.q).f.P(D.eyR)
w=1
break}a0=a2.d
if(a0==null){t.c.H(x.q).f.P(D.exw)
w=1
break}a1=A.fgT(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.v2?"male":"female"
w=7
return A.b(A.afm(a3,A.fQd(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BY)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.v2?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bW(a3.gcd(),a3.gcb(),a3.gcr(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bW(a4.gcd(),a4.gcb(),a4.gcr(),0,0,0,0,0)))a5.cCC(a2.a)
w=8
return A.b(A.afm(t.a.c,a5),$async$BY)
case 8:case 5:w=9
return A.b(t.Hk(),$async$BY)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BY,v)},
aP_(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aN
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bp:B.bv).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aVh(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aN:B.aF
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.p(p,A.B(A.a([r,B.bo,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b6,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ac)},
Qg(d){return this.crG(d)},
crG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.x.j(0.55),!0,"Dismiss",s,new C.dyH(),new C.dyI(t,d),B.hS,!0,x.y),$async$Qg)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.Q(s,0,!1)
case 4:w=7
return A.b(A.afm(t.a.c,d),$async$Qg)
case 7:w=8
return A.b(t.Hk(),$async$Qg)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qg,v)},
Mn(d,e){return this.bEl(0,e)},
bEl(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kP(s,"Cancel","Delete",e.b+" \xb7 "+A.zK(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mn)
case 3:if(!g){w=1
break}w=4
return A.b(C.fbo(t.a.c,e.a),$async$Mn)
case 4:w=5
return A.b(t.Hk(),$async$Mn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mn,v)},
ac6(d){return this.c4Q(d)},
c4Q(d){var w=0,v=A.j(x.H),u=this,t
var $async$ac6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c2(B.K,null,new C.dyB(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ac6)
case 2:return A.h(null,v)}})
return A.i($async$ac6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dQr
w=J.dE(m.d,new C.dyJ())
v=A.z(w,w.$ti.k("G.E"))
w=J.dE(m.d,new C.dyK())
u=A.z(w,w.$ti.k("G.E"))
t=B.d.cG(v,0,new C.dyL())
w=A.m(18)
s=m.a.d.a
r=s?D.ca3:D.asJ
q=A.H(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bDv,B.h,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.ax,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aF,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.a1,!0,A.m(12),A.aI(!1,A.m(12),!0,D.dPT,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dyM(m),l,l,l,l,l,l,l),B.h,B.cY,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.co1("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zK(t)
r=A.a([A.p(l,A.v(A.a([s,B.ab,A.B(A.a([o,B.aa,A.D(m.b1o(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a3(B.aw,B.aC,B.w,r,l,l),B.n),l,l,l,l,B.acT,l,l,l),B.ay],p)
if(J.cj(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bp:B.bv).j(0.12),B.r,1)
n=A.p(l,D.byz,B.h,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aF,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ab,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bp:B.bv,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bix,l,l,1/0))}else{w=m.gca7()
s=A.z(new A.J(v,w,A.U(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.bka,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bp:B.bv,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.U(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.ag,l,B.e,B.j,0,B.p)},
b1o(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.x.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bp:B.bv).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bp:B.bv,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aN:B.aF
return A.p(u,A.v(A.a([q,B.bA,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ek,u,u,u)},
co1(d,e){return this.b1o(!1,d,e)},
ca8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y6(j).length,h=d.bah()
if(d.x!=null){w=d.y6(j).length
v=w===0?B.cY:B.bQ}else if(d.gRT())v=B.bQ
else{if(h)w=B.cY
else w=k.a.d.a?B.bp:B.bv
v=w}if(d.x!=null){w=d.y6(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vZ(u,!1)}else{u.toString
t="Paid "+C.vZ(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vZ(w,!1)+" \xb7 "+i+" missed":"Due "+C.vZ(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRT()&&d.x==null)s=B.bQ.j(0.35)
else s=(k.a.d.a?B.bp:B.bv).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.x.j(0.04),B.cA,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lS
o=A.H(d.gRT()&&d.x==null?B.bQ.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fIn(d.d)
o=A.p(B.A,A.d8(C.aVh(A.fgT(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aN:B.aF
m=x.p
n=A.a([new A.dm(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBQ())B.d.v(n,A.a([B.ez,A.V(B.KW,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d6,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zK(d.c)
l=k.a.d.a?B.aN:B.aF
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.a1,!0,j,A.aI(!1,q,!0,new A.C(U.acD,A.B(A.a([o,B.bd,p,B.aa,A.v(A.a([n,B.bA,A.V(B.em,(k.a.d.a?B.bp:B.bv).j(0.5),j,j,j,18)],m),B.dH,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dyD(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ac),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.tD.prototype={}
C.aib.prototype={
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
n.push(A.aH(a0,A.p(a0,A.V(B.ct,t?a1.f:B.c,a0,a0,a0,17),B.h,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.ad))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.kx,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.apq,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.E0,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eZ(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.h,B.eb)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bfj,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cx:B.bi,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fr,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eth)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uk,A.p(a0,a0,B.h,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a3(B.a3,B.a7,B.w,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.ls,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,A.H(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.h9,a0,a0,a0,a0)}return A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,q,s,p,new A.a3(B.aw,B.aC,B.w,a1.d,a0,a0),B.n),a0,a0,a0,D.bgw,a0,a0,a0,a0)}}
C.aR9.prototype={
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
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.d6,n],m)
if(p.z)o.push(new A.C(B.zC,n,q))
return new A.C(B.d9,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.QW.prototype={
S(){return new C.baN()}}
C.baN.prototype={
gbRY(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.dQm,D.dQs],l)
for(w=0;w<8;++w){v=D.Zw[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.EK:B.An
q=t===s
r=A.V(r,q?B.ew:B.c2,n,n,n,17)
q=q?B.c:B.af
r=A.a([r,B.bo,new A.w(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.aa,new A.bH(1,B.br,new A.w(v.c,n,Ai.BV,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.b1(24,24)
p=new A.ay(B.ew,2,B.r,-1)
s=new A.o(n,n,new A.c1(p,p,p,p),new A.bv(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aH(n,new A.C(B.ex,A.v(A.a([new A.C(B.lZ,new A.cC(B.b0,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.CN(!0,new C.aib(v,q.d,q.e,new C.d_5(),n,n),n),B.h,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_6(o,v),n,n,n,n,n,n,!1,B.ad))}k.push(new A.C(D.bgO,A.bL(D.faW,new C.d_7(o,d),A.bk(B.b3,n,n,n,n,B.nJ,n,n,new A.b6(A.m(16),B.X),n,n,n)),n))
return A.bq(!0,new A.d2(new A.aX(0,1/0,0,m.a.b*0.9),A.cL(k,n,D.bl1,n,n,B.ak,!0),n),!0,!1,B.aj,!0,!0)}}
C.mS.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().ab()],x.N,x.z)},
b73(d,e,f){return new C.mS(this.a,e,d,f)}}
C.Gb.prototype={
vv(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Gb(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aA5(d){var w=null
return this.vv(w,w,w,w,w,d,w,w,w,w,w,w)},
cyu(d){var w=null
return this.vv(w,w,w,w,d,w,w,w,w,w,w,w)},
b71(d,e,f){var w=null
return this.vv(d,w,w,w,w,w,w,w,e,w,f,w)},
cz8(d){var w=null
return this.vv(w,w,w,w,w,w,d,w,w,w,w,w)},
czh(d){var w=null
return this.vv(w,w,w,w,w,w,w,w,w,d,w,w)},
cys(d){var w=null
return this.vv(w,w,w,d,w,w,w,w,w,w,w,w)},
czj(d){var w=null
return this.vv(w,w,w,w,w,w,w,w,w,w,w,d)},
cyp(d){var w=null
return this.vv(w,w,d,w,w,w,w,w,w,w,w,w)},
cyk(d){var w=null
return this.vv(w,d,w,w,w,w,w,w,w,w,w,w)},
En(d){var w=null
return this.vv(w,w,w,w,w,w,w,d,w,w,w,w)},
czr(d,e,f,g,h,i,j,k,l,m,n){return this.vv(d,e,f,g,null,h,i,j,k,l,m,n)},
ac(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cwi(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bJm(d),k=A.aR(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aR(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cJ(d.h(0,n))).length!==0?B.a.i(A.cJ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cJ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.B_.geb(D.B_))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_W)
q=l.$2("frame",D.a_q)
l=l.$2("texture",D.a_l)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cJ(d.h(0,"author"))):o
return this.czr(p,u,t,q,r,A.tg(d.h(0,"ribbon"))?A.EM(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Xm.prototype={
S(){return new C.ax_(A.a([],x.I),D.Kw)},
gdT(){return this.c}}
C.ax_.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yE(0,1)
w=$.av()
v.z=new A.ap(B.as,w)
v.Q=new A.ap(B.as,w)
v.kv()
w=v.a
C.bxF(w.c,w.d).bx(new C.d_M(v),x.fL)},
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
return A.b(C.Jh(s.c,s.d),$async$kv)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.d_A(t,r))
t.asl()
case 1:return A.h(u,v)}})
return A.i($async$kv,v)},
gap0(){var w,v=this
if(!J.cj(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
asl(){var w,v,u=this.gap0(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saU(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saU(0,w==null?"":w)},
c3g(d){this.n(new C.d_x(this,d))
this.asl()},
LJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mS(B.o.u(1000*Date.now()),"Untitled page","",new A.Q(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aNp(r.c,r.d,s),$async$LJ)
case 3:w=4
return A.b(t.kv(),$async$LJ)
case 4:if(t.c==null||J.cj(t.d)){w=1
break}q=J.pL(t.d,new C.d_8(s))
p=q>=0?q:J.aa(t.d)-1
t.n(new C.d_9(t,p))
t.asl()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A6(p+1,B.co,B.kv),$async$LJ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LJ,v)},
zN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gap0()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aNp(o.c,o.d,new C.mS(s,r,q,new A.Q(p,0,!1))),$async$zN)
case 3:w=4
return A.b(t.kv(),$async$zN)
case 4:if(t.c==null){w=1
break}t.n(new C.d_B(t))
case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
Mo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gap0()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.d_h(r),s,null,!0,!0,x.y),$async$Mo)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bxr(s.c,s.d,r.a),$async$Mo)
case 4:t.n(new C.d_i(t))
w=5
return A.b(t.kv(),$async$Mo)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RW(B.o.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mo,v)},
xo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$xo)
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
return A.b(C.Pd(s,r.r,o,p,q),$async$xo)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).M(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h5p(s,r.x,r.r),$async$xo)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Jh(s.c,s.d),$async$xo)
case 10:l=e
for(s=n.d,r=J.cA(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.mS(""+(m+k),q,B.a.i(j.b),new A.Q(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zT(r.c,r.d,l),$async$xo)
case 11:w=12
return A.b(t.kv(),$async$xo)
case 12:r=t.c
if(r==null){w=1
break}r.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xo,v)},
Zg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$Zg)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxm(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dI(D.xC,new C.d_y(t),new C.d_z())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m3("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gT(o)
p.push(new F.m3(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fJZ(o,new F.qI(s,r,"",p,new F.tW(q.d,null,null,null,null,"","","")),null),$async$Zg)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Zg,v)},
M6(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$M6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$M6)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c2(D.a8R,null,new C.d_d(t),s,!0,!0,!0,D.aH4,!1,!1,x.N),$async$M6)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cyu(r)
t.n(new C.d_e(t,q))
s=t.a
w=7
return A.b(C.PN(s.c,s.d,q),$async$M6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$M6,v)},
V_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c2(D.a8R,null,new C.d_j(t),r,!0,!0,!0,D.aH4,!1,!1,x.e),$async$V_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.d_k(t,s))
r=t.a
w=4
return A.b(C.PN(r.c,r.d,s),$async$V_)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A6(0,B.dS,B.o5)
case 1:return A.h(u,v)}})
return A.i($async$V_,v)},
bJm(d){var w=d.bQ(),v=B.a.aT(B.o.u(w.gcb()),2,"0"),u=B.a.aT(B.o.u(w.gcr()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gxm(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bRe()
if(r.e)w=D.a7Y
else if(J.cj(r.d)){w=r.y
v=r.gxm(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eDw,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.C(Z.adT,new C.WF(w,v,0,q),q),q),B.bu,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k0.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aH(q,A.p(q,D.ep_,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ab(0,B.G,B.dI.j(0.45),B.J,18)],x.V),E.uT,B.n),q,q,q,q,B.VM,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcvt(),q,q,q,q,q,q,!1,B.ad))
w.push(B.T)
w.push(A.hh(D.buT,D.far,r.gaIw(),q))
B.d.v(u,w)}w=A.au(A.ci(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.ep,q,q,B.ak),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k0.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dL:B.yR
u=A.v(A.a([new A.C(D.bhR,w,q),A.D(A.Hs(v,new C.d_K(r),J.aa(r.d)+1,q,r.gc3f(),u,B.b0),1),r.bwC()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cd(q,D.a9W,new A.am(B.W,q,B.b_,B.q,A.a([D.aFB,A.bq(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.aj,!0,!0)],v),q),q,!1,!1,q,q)},
bRe(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.ct(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Ip(B.dP,"AI",h.gbuz(),!0))
if(h.a.f)f.push(new C.Ip(B.nx,"Cover",h.gbEV(),!1))
if(h.a.f)f.push(new C.Ip(B.xf,"Header",h.gbzZ(),!1))
if(J.ct(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Ip(B.t3,"Print",h.gcc3(),!1))
if(h.a.f&&J.ct(h.d)&&h.r>=0){v=h.w
u=v?B.hp:B.j3
t=v?"Save":"Edit"
f.push(new C.Ip(u,t,v?h.gci1():new C.d_u(h),!1))}if(h.a.f)f.push(new C.Ip(B.hD,"Add page",h.gaIw(),!1))
v=C.h1B(h.y.Q)
u=h.gxm(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.aa(h.d)
r=J.aa(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d84
else{k=new A.b1(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jy.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.k0,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c1(i,i,i,i),new A.bv(k,k,k,k),g,new A.a3(B.a3,B.a7,B.w,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k0.j(0.85)
p.push(new A.bH(1,B.br,A.aH(B.c5,A.v(A.a([k,B.bA,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ad),g))}return new C.aib(v,u,t+" \xb7 "+s+" "+r,new C.d_v(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
yR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$yR)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a09(B.d.aF(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.d_a(t,p),s,null,!0,!0,x.N),$async$yR)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xo(),$async$yR)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cw(),$async$yR)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.E2("Swahili (Kiswahili)",!0),$async$yR)
case 18:w=16
break
case 17:w=19
return A.b(t.csg(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yR)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yR,v)},
WR(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.jy.j(0.3),B.r,1),r=x.p
return new A.C(B.cL,A.aI(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uT,B.a6),w,42,w,w,w,w,w,42),B.bd,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A5.a4k,w,w,w),A.d(g,w,w,w,w,w,w,E.a4a,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d_w(d,h),w,w,w,w,w,w,w),w)},
Cw(){return this.bIR()},
bIR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cw=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.d_n(r),a7,null,!0,!0,x.ei),$async$Cw)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.z(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.av())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.d_o(o),a7,null,!0,!0,x.H).f3(new C.d_p(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.ch(l,new A.A(k.b,k.c))}d=r.r
a0=r.y.ac()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xC[a1]
J.ch(j,i.a)}w=8
return A.b(C.aez(a0,a7,new C.d_q(o),d,l,e,j),$async$Cw)
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
if(l!=null&&a6.a)A.a8(l,!0).eD()
l=o
l.shI($.av())
J.aNR(l,0)
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
a7=j.b73(m.b.h(0,a4).b,a7,new A.Q(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zT(j.c,j.d,l),$async$Cw)
case 11:w=12
return A.b(r.kv(),$async$Cw)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xC[a1].a)
a5=l.cwi(j,12,a7)
l=r.a
w=15
return A.b(C.PN(l.c,l.d,a5),$async$Cw)
case 15:if(r.c!=null)r.n(new C.d_r(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A6(0,B.dS,B.o5)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.H(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b0(a3?A.cls("Undo",new C.d_s(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ec,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cw,v)},
E2(d,e){return this.csh(d,e)},
csg(d){return this.E2(d,!1)},
csh(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$E2=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.z(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.av())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.d_D(a0),k,null,!0,!0,x.H).f3(new C.d_E(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ch(o,new A.A(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a0m(m,new C.d_F(a0)),$async$E2)
case 10:w=8
break
case 9:w=11
return A.b(C.bz6(new C.d_G(a0),m,a2),$async$E2)
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
if(o!=null&&f.a)A.a8(o,!0).eD()
o=a0
o.shI($.av())
J.aNR(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.H(x.q).f
k=q
o.P(A.b0(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b73(J.q(p,g).b,j.a,new A.Q(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zT(k.c,k.d,o),$async$E2)
case 12:w=13
return A.b(r.kv(),$async$E2)
case 13:o=r.c
if(o==null){w=1
break}o=o.H(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b0(A.cls("Undo",new C.d_H(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$E2,v)},
bwC(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d_b(v):u
r=A.aF(u,u,u,u,A.V(D.bqC,s?D.k0:B.ba,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.ct(v.d)&&!v.w&&v.r>=0)s=A.hh(A.V(B.uv,B.Dp,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Dp,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbEu(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k0.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.au(s,u,u,u),1)
w=t<J.aa(v.d)?new C.d_c(v):u
return A.bq(!0,new A.C(D.bhF,A.B(A.a([r,s,A.aF(u,u,u,u,A.V(B.em,t<J.aa(v.d)?D.k0:B.ba,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.aj,!0,!1)}}
C.Xq.prototype={
S(){return new C.bb7(new A.ap(B.as,$.av()))}}
C.bb7.prototype={
ga_n(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
gbHE(){var w,v=this.ga_n()
A:{if("cover"===v){w=D.cFw
break A}if("book"===v){w=D.cBz
break A}w=D.d16
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jy.j(0.5),n=x.p,m=A.B(A.a([D.d85,B.ax,D.bmS,A.aF(q,q,q,q,B.l2,q,q,q,new C.d1c(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jQ(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d1d(r),r.ga_n()==="page",q,q,q,q))
if(r.a.d)l.push(A.jQ(q,q,q,D.f5w,q,new C.d1e(r),r.ga_n()==="book",q,q,q,q))
l.push(A.jQ(q,q,q,D.eUO,q,new C.d1f(r),r.ga_n()==="cover",q,q,q,q))
l=A.c8(B.bJ,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bn(q,new A.b3(4,A.m(16),B.X),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kj,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ah,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbHE(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mL(q,B.c.j(0.08),new A.w(s,q,B.Hl,q,q,q,q,q,q,q,q,q),B.hs,new C.d1g(r,s),q,q,q,q))}return A.ew(q,E.zi,A.ci(A.v(A.a([m,B.T,D.f8s,B.ar,l,B.ab,k,B.P,A.c8(B.bJ,w,B.bx,6,6),B.ay,A.dq(D.buQ,D.f9d,new C.d1h(r,d),A.bk(B.b3,q,q,q,q,B.nJ,q,q,new A.b6(A.m(16),B.X),q,q,q)),B.av,D.f3Z],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.fB,q,q,B.ak),q,q,q,D.adC,B.cZ,q,new A.b6(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.Xo.prototype={
S(){return new C.ax0(A.a([],x.Y))},
gdT(){return this.c}}
C.acp.prototype={}
C.ax0.prototype={
Z(){this.a0()
this.kv()},
kv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Ph(p.c,p.d),$async$kv)
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
return A.b(C.bxF(r.c,q),$async$kv)
case 6:j=e
i=J
w=7
return A.b(C.Jh(t.a.c,q),$async$kv)
case 7:m.push(new l.acp(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.d00(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kv,v)},
b2w(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Ok(d,e){return this.c4O(0,e)},
c4O(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ok=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).cp(A.eD(new C.d0_(u,e),!0,null,x.y)),$async$Ok)
case 2:t=g
w=3
return A.b(u.kv(),$async$Ok)
case 3:if(t===!0&&u.c!=null)u.c.H(x.q).f.P(D.aIU)
return A.h(null,v)}})
return A.i($async$Ok,v)},
E5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.H(x.q).f.P(D.aIQ)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adV(s.c,s.d),$async$E5)
case 5:q=e
w=6
return A.b(t.kv(),$async$E5)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Ok(0,B.d.kZ(t.d,new C.d04(q))),$async$E5)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Pd(p,s.f,r,n,o),$async$E5)
case 10:m=e
w=11
return A.b(t.kv(),$async$E5)
case 11:if(m&&t.c!=null)t.c.H(x.q).f.P(D.aIU)
case 1:return A.h(u,v)}})
return A.i($async$E5,v)},
NO(d,e){return this.cfQ(0,e)},
cfQ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.d03(t,e),s,null,!0,!0,x.y),$async$NO)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0z(s.c,s.d,e.a),$async$NO)
case 4:w=5
return A.b(t.kv(),$async$NO)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NO,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bwF(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.jy.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aH(n,new A.fD(0.7142857142857143,A.p(n,A.v(A.a([D.d86,B.ab,D.dPz,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k0.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b6,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcvp(),n,n,n,n,n,n,!1,B.ad))}w=A.m(22)
v=A.H(E.jy.j(0.85),B.r,1.6)
s=A.aH(n,A.p(n,D.bCl,B.h,n,n,new A.o(B.x.j(0.3),n,A.H(E.jy.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d05(d),n,n,n,n,n,n,!1,B.ad)
r=A.m(14)
q=B.x.j(0.3)
p=A.H(E.jy.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bnb,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eCH,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.fW,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.bH9,B.n),n,n,n,Ag.Vk,D.bfK,n,n,n)
if(o.e)k=D.a7Y
else k=k.length===0?D.aXe:A.ck(new C.d06(k))
return A.cd(n,D.a9W,new A.am(B.W,n,B.b_,B.q,A.a([D.aFB,A.bq(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.aj,!0,!0)],l),n),n,!1,!1,n,n)},
bwF(d){var w,v,u=this,t=null,s=u.b2w(d),r=d.c,q=x.p,p=A.a([A.bX(0,A.eZ(B.A,new A.a5(300,420,new C.WF(d.b,s,r,t),t),B.h,B.dq),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aH(t,A.p(t,D.bBG,B.h,t,t,new A.o(B.x.j(0.55),t,A.H(B.ba,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_Y(u,d),t,t,t,t,t,t,!1,B.ad),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eCj,t,t,t)
v=r===1?"page":"pages"
return A.aH(t,A.v(A.a([new A.fD(0.7142857142857143,new A.am(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k0.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_Z(u,d),t,t,t,t,t,t,!1,B.ad)}}
C.Ip.prototype={}
C.WF.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dI(D.xC,new C.czx(m),new C.czy()),j=m.c,i=D.B_.h(0,j.e),h=A.aY(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m9:B.b6
v=new C.czz(h)
i=A.a([new A.ab(0,B.G,B.x.j(0.6),D.dN4,28)],x.V)
u=x.p
t=A.a([A.bX(0,A.b2(l,l,l,new C.b8p(j.x,h,l),B.at),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a3(B.a3,B.a7,B.w,A.a([B.x.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b1(3,3)
t.push(new A.cG(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bv(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adU,8,0.85,2.2),v.$4(D.bkt,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adU,8,0.85,2.4))
else if(r==="corners")t.push(A.bX(0,new A.C(D.bkp,A.b2(l,l,l,new C.b8g(h,l),B.at),l),0,0,0))
r=A.V(D.arV[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.apq,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.ab,p,B.ab,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cx,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bX(0,new A.C(D.bkU,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aDR(l),D.esq),l,l,l,46,0,l))
return A.p(l,A.bu(D.a6F,new A.am(B.W,l,B.a9,B.q,t,l),B.ao),B.h,l,l,new A.o(l,l,l,D.a6F,i,new A.a3(B.aw,B.aC,B.w,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b8p.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eX()
f.dQ(11)
switch(this.b){case"plain":return
case"linen":$.Y()
w=A.L()
w.r=B.x.j(0.07).gq(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.I()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.Y()
q=A.L()
q.r=B.c.j(0.05).gq(0)
q.c=1
for(p=0;p<u;p+=4){r=q.I()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ae()
l=f.ae()
k=f.ae()
$.Y()
j=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.ae()*0.5).gq(0)
r=j.I()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.Y()
j=A.a([],l)
h=new A.aQ(k.r,B.aq,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gq(0)
r=k.I()
k=h.gbL().a.snapshot()
o.drawPath((h.e=new A.cE(k)).a,r)
r.delete()}break
default:$.Y()
w=A.L()
w.r=B.x.j(0.07).gq(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ae()
m=f.ae()
l=f.ae()
r=w.I()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.Y()
g=A.L()
g.r=B.c.j(0.035).gq(0)
for(n=0;n<120;++n){o=f.ae()
m=f.ae()
l=f.ae()
r=g.I()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ar(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b8g.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.Y(),k=A.L(),j=this.b
k.r=j.j(0.9).gq(0)
k.b=B.ae
k.c=2.4
k.d=B.bN
for(w=e.a,v=e.b,v=[D.ekt,new A.cH([w,0,-1,1]),new A.cH([0,v,1,-1]),new A.cH([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aQ(l,B.aq,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ao(r,q))
s.push(new A.ao(r,q+o*34))
m=k.I()
s=n.gbL().a.snapshot()
w.drawPath((n.e=new A.cE(s)).a,m)
m.delete()
s=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gq(0)
m=s.I()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ar(d){return!d.b.A(0,this.b)}}
C.tE.prototype={}
C.WX.prototype={
S(){return new C.b8n()}}
C.b8n.prototype={
gnu(){var w=this.d
return w===$?this.d=this.a.c:w},
gxm(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ap(new A.bc(w.b,B.b2,B.aM),$.av())}return v},
gaxr(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ap(new A.bc(w.c,B.b2,B.aM),$.av())}return v},
ganB(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ap(new A.bc(w.y,B.b2,B.aM),$.av())}return v},
p(){var w=this,v=w.gxm(0),u=v.R$=$.av()
v.O$=0
v=w.gaxr()
v.R$=u
v.O$=0
v=w.ganB()
v.R$=u
v.O$=0
w.a2()},
aoc(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jQ(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cSZ(this,f,u),e===u,s,s,s,s))}return A.c8(B.bJ,r,B.bx,6,8)},
atC(d){var w=null,v=B.c.j(0.07)
return A.bn(w,new A.b3(4,A.m(14),B.X),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l9,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnu(),a0=f.gxm(0),a1=a0.a.a,a2=f.gaxr(),a3=a2.a.a,a4=f.ganB(),a5=d.b71(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a5(190,260,A.eZ(B.A,new A.a5(270,370,new C.WF(a5,d,f.a.e,e),e),B.h,B.dq),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atC("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ah,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTn(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atC("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ah,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTo(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xC[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.ba
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c1(o,o,o,o),e,e,new A.a3(B.aw,B.aC,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aH(e,A.v(A.a([p,B.d6,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTp(f,t),e,e,e,e,e,e,!1,B.ad))}v=A.c8(B.bJ,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b3.j(0.35):B.c.j(0.07)
m=new A.b1(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ew:B.K,2,B.r,-1)
q.push(A.aH(e,A.p(e,A.V(D.arV[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c1(o,o,o,o),new A.bv(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTq(f,n),e,e,e,e,e,e,!1,B.ad))}q=A.c8(B.bJ,q,B.bx,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atC("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ah,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTr(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mh,e,e,e)
m=A.a([],w)
for(l=D.B_.gdH(D.B_),l=l.gah(l);l.C();){k=l.gT(l)
j=A.aY(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ew:B.ba
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c1(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aH(e,A.v(A.a([j,B.bA,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTs(f,k),e,e,e,e,e,e,!1,B.ad))}m=A.c8(B.bJ,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mh,e,e,e)
k=f.gnu()
return new A.C(new A.N(0,0,0,a3.f.d),A.bq(!0,new A.d2(new A.aX(0,1/0,0,a1.a.b*0.92),A.cL(A.a([D.f3s,B.ab,d,B.aO,a0,B.T,a2,B.ay,D.f91,B.P,v,B.ay,D.f3B,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.md(e,9,""+B.k.U(f.gnu().f),36,18,new C.cTt(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mh,e,e,e),B.ar,f.aoc(D.a_W,f.gnu().r,new C.cTu(f),D.d4e),B.ab,A.d("BORDER",e,e,e,e,e,e,H.mh,e,e,e),B.ar,f.aoc(D.a_q,f.gnu().w,new C.cTv(f),D.d4j),B.ab,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mh,e,e,e),B.ar,f.aoc(D.a_l,f.gnu().x,new C.cTx(f),D.d5H),B.ar,A.ix(e,B.b3,e,B.aj,e,new C.cTy(f),e,e,e,D.eZj,f.gnu().z),B.bu,A.bL(D.f2n,new C.cTz(f,a6),A.bk(B.b3,e,e,e,e,B.nJ,e,e,new A.b6(A.m(16),B.X),e,e,e))],w),e,P.adr,e,e,B.ak,!0),e),!0,!1,B.aj,!0,!0),e)}}
C.aDR.prototype={
a5(d,e){var w,v,u,t=new A.aQ($.Y().r,B.aq,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ao(w,0))
v=e.b
t.E(new A.ao(w,v))
t.E(new A.ao(w/2,v-12))
t.E(new A.ao(0,v))
t.E(new A.bE())
u=A.L()
u.sap(D.bHM.au(0,new A.a9(0,0,0+w,0+v)))
d.aO(t,u)},
ar(d){return!1}}
C.bdA.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.Y()
w=A.L()
w.sap(D.bGQ.au(0,new A.a9(0,0,a3,a4)))
a5.b2(new A.a9(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.eX()
u.dQ(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ae()*20
l=56+u.ae()*40
k=D.cFv[u.aB(9)]
j=u.aB(14)
J.bB(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bF(i,B.h_)
g=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.x,0.45)
e.toString
g.sap(new A.a3(B.a3,B.a7,B.w,A.a([f,k,e],t),a0,a0).au(0,i))
d=g.I()
w.drawRRect(A.f7(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
e.r=E.jy.j(0.55).gq(0)
d=e.I()
w.drawRect(A.c9(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
j.r=E.jy.j(0.4).gq(0)
d=j.I()
w.drawRect(A.c9(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
p.sap(D.bGc.au(0,new A.a9(0,r,a3,q)))
d=p.I()
w.drawRect(A.c9(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=B.x.j(0.5).gq(0)
p.z=B.j7
d=p.I()
w.drawRect(A.c9(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b_k.j(0.72).gq(0)
a5.b2(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sap(new A.bR(B.A,0.5,B.w,a0,0,A.a([D.b5q.j(0.22),B.K],t),a0,a0).au(0,A.bV(new A.u(w,a2),a1)))
a5.af(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b6D.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ae("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cG(14,w*2,v*2.2,v*2,o,o,new A.kB(new A.o(A.aq(D.k0,D.b99,w/4),o,new A.c1(B.X,new A.ay(B.x.j(0.12),1,B.r,-1),B.X,B.X),B.In,o,o,B.n),B.bb,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.x.j(0.35),B.aBo,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.b1(2,2)
t.push(A.p(o,o,B.h,o,o,new A.o(E.jy.j(0.6),o,o,new A.bv(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.qC,B.j,0,B.p),B.h,o,o,new A.o(o,o,o,D.aPU,u,D.bHK,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.x.j(0.4),B.dn,18)],v)
t=A.an(o,A.b2(o,o,o,new C.aDR(o),D.esl),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aR9(p.y,r,G.ih,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.r,o,o,o,o,o,2,A.bn(o,B.et,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ih.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.ePx,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ih.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.w,o,o,o,o,o,2,A.bn(o,B.et,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ih.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,o,B.ah,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eGZ,!0,B.a5,B.yl,B.am,o,o,o,o),1)],m),B.ag,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.ePq,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ih.j(0.5),o,o,o,o,o,o,o,o,11,B.cx,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.D(A.p(o,o,B.h,D.Dc.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Dc.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.h,D.Dc.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ih.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.VW(A.dl(A.a([A.dl(o,o,o,o,o,o,o,o,o,D.eJV,B.a.am(k,0,1)),A.dl(o,o,o,o,o,o,o,o,o,o,B.a.aX(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ih.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ci(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.z,o,o,o,o,B.ak)}s.push(A.D(n,1))
s.push(new A.C(B.ir,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ih.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.D(A.p(o,A.bu(B.In,new A.am(B.W,o,B.a9,B.q,A.a([t,new A.C(D.bjX,A.v(s,B.ag,o,B.e,B.j,0,B.p),o),A.an(0,A.bT(o,new A.o(o,o,o,o,o,new A.a3(B.a3,B.a7,B.w,A.a([B.x.j(0.16),B.K],x.O),o,o),B.n),B.bb),o,o,0,o,0,22)],m),o),B.ao),B.h,o,o,new A.o(o,o,o,B.In,v,D.bIi,B.n),o,o,o,o,o,o,o,o),1)],m),B.ag,o,B.e,B.j,0,o,o))
return new A.am(B.W,o,B.a9,B.q,l,o)}}
C.amX.prototype={
S(){return new C.aAt(A.a([],x._))},
bn(){return this.r.$0()},
p5(){return this.w.$0()},
gdT(){return this.c}}
C.aAt.prototype={
Z(){var w,v
this.a0()
this.v1()
w=this.a
v=w.c
if(v.length!==0)C.a56(v,w.e,w.d.w)},
uR(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fK1(r,t.e,!1,s.w,new C.dLE(u),null,s),$async$uR)
case 2:w=3
return A.b(u.v1(),$async$uR)
case 3:return A.h(null,v)}})
return A.i($async$uR,v)},
Yr(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fK1(r,t.e,!0,s.w,new C.dLD(u),null,s),$async$Yr)
case 2:w=3
return A.b(u.v1(),$async$Yr)
case 3:return A.h(null,v)}})
return A.i($async$Yr,v)},
v1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zI(q.a.c),$async$v1)
case 7:p=e
if(q.c!=null)n=q.e||J.ct(p)
else n=!1
if(n)q.n(new C.dLG(q,p))
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
return A.b(C.Fb(q.a.c).cJ(0,B.p_),$async$v1)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dLH(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dLI(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v1,v)},
MT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.H(s).f.P(D.evW)
w=3
return A.b(C.Fb(t.a.c),$async$MT)
case 3:r=e
w=4
return A.b(C.fqu(t.a.c,r),$async$MT)
case 4:q=e
w=5
return A.b(C.Fb(t.a.c),$async$MT)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dLC(t,p))
o=t.c.H(s).f
s=A.d(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b0(null,null,null,q?B.dt:B.cO,null,B.q,null,s,null,B.lV,null,null,null,null,null,null,null,null,null,null))
t.a.p5()
case 1:return A.h(u,v)}})
return A.i($async$MT,v)},
GA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hQa(l),$async$GA)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hkr(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWI(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$GA)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h1L(r)
o=Date.now()
n=t.a.c
m=new C.kn(l,r.toUpperCase(),p,!0,B.U,D.AP,new A.Q(o,0,!1),0,n,D.rP)
w=5
return A.b(C.a0F(n,m),$async$GA)
case 5:w=6
return A.b(t.v1(),$async$GA)
case 6:t.a.bn()
t.a.p5()
if(t.c==null){w=1
break}t.Dg(m)
case 1:return A.h(u,v)}})
return A.i($async$GA,v)},
Dg(d){return this.c6N(d)},
c6N(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Dg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zI(u.a.c),$async$Dg)
case 2:n=l.qE(k.dE(f,new C.dLF(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hm(m,new C.amR(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Dg)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0F(u.a.c,o),$async$Dg)
case 6:case 5:w=7
return A.b(u.v1(),$async$Dg)
case 7:u.a.p5()
return A.h(null,v)}})
return A.i($async$Dg,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=new C.t6(p)
if(r.e)return A.au(A.mm(q,p?B.bp:B.bv,q,q,q,q,q,q,q,q),q,q,q)
if(J.cj(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.a1,!0,q,A.aI(!1,q,!0,A.p(q,D.bvV,B.h,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cH,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc5S(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Eg(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bp:B.bv,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bL(D.fab,r.gaMv(),A.bk(B.bV,q,q,q,q,q,Af.VP,q,new A.b6(A.m(12),B.X),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bjU,q,q,1/0),15,B.aj,1.05,D.a5n,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b8],v)
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.xm,B.aS,q,q,q,q),q,q,q,new C.dLK(r),q,q,q,q,"Sync family trees with database",q))
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.xd,B.aS,q,q,q,q),q,q,q,r.gacM(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.aiN,D.eSL,r.gaMv(),A.bk(B.bV,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ab)
u.push(new C.Eg(r.csl(J.q(r.d,s),o),14,B.aj,1,D.a5n,q))
B.d.v(w,u)}return A.v(A.a([p,B.ay,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
csl(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dU:B.c4).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.x.j(v?0.35:0.08),B.e9,10)],x.V),q=A.m(14),p=A.p(w,D.buZ,B.h,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aF,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galA(),m=d.d?"":" \xb7 Public",l=d.y===D.k5?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bp:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.a1,!0,w,A.aI(!1,q,!0,new A.C(B.bB,A.B(A.a([p,B.bd,l,A.V(B.KG,v?B.bp:B.bv,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dLJ(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amR.prototype={
S(){return new C.aAq(A.a([],x._),A.aZ(x.N),A.b4j())},
bn(){return this.r.$0()},
gdT(){return this.c}}
C.aAq.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9O()
w=u.a
v=w.c
if(v.length!==0)C.a56(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.av()
w.O$=0
this.a2()},
a0h(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wQ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dL4(r),s,null,!0,!0,x.y),$async$a0h)
case 3:if(e!==!0||t.c==null){w=1
break}t.I_()
t.n(new C.dL5(t,r))
w=4
return A.b(t.uT(),$async$a0h)
case 4:t.a.bn()
t.wQ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0h,v)},
ciG(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dL_(w,f,d,e))},
aOF(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.di()
u.dZ(w,v,0,1)
u.ji(q,q,1,1)
this.w.sq(0,u)},
b4K(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ex(new Float64Array(16))
q.dU(r)
w=q.Bw()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.di()
t.dZ(r,u,0,1)
t.ji(v,v,1,1)
t.dZ(-r,-u,0,1)
t.ig(0,q)
s.sq(0,t)},
a9O(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zI(u.a.c),$async$a9O)
case 2:t=s.qE(r.dE(e,new C.dKy(u)))
if(t!=null&&u.c!=null)u.n(new C.dKz(u,t))
return A.h(null,v)}})
return A.i($async$a9O,v)},
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
return A.b(C.fK1(o,t,!1,r,new C.dKN(u),q.a,s),$async$uR)
case 2:n=A
m=J
w=3
return A.b(C.Fb(u.a.c),$async$uR)
case 3:p=n.qE(m.dE(e,new C.dKO(u)))
if(p!=null&&u.c!=null)u.n(new C.dKP(u,p))
return A.h(null,v)}})
return A.i($async$uR,v)},
I_(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uT(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0F(t,s),$async$uT)
case 2:return A.h(null,v)}})
return A.i($async$uT,v)},
ZW(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tk(q,t.a.c)){t.wQ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hRk(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZW)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.I_()
t.n(new C.dKZ(t,r))
w=4
return A.b(t.uT(),$async$ZW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZW,v)},
YF(){return this.c6P()},
c6P(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tk(q,t.a.c)){t.wQ("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.M(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dKX(r,new C.t6(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$YF)
case 3:if(e!==!0||t.c==null){w=1
break}t.I_()
t.n(new C.dKY(r,t))
w=4
return A.b(t.uT(),$async$YF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YF,v)},
TR(d){return this.btL(d)},
btL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tk(r,t.a.c)){t.wQ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dKm(t,d),r,null,!0,!0,x.P),$async$TR)
case 3:s=f
if(s==null){w=1
break}t.I_()
t.n(new C.dKn(t,s))
w=4
return A.b(t.uT(),$async$TR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TR,v)},
a0D(d){return this.cut(d)},
cut(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0D=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.M(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dL7(u,d,new C.t6(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0D)
case 2:return A.h(null,v)}})
return A.i($async$a0D,v)},
c3a(d){var w=this,v=w.d
v===$&&A.c()
if(C.tk(v,w.a.c))w.My(d)
else w.a0D(d)},
afe(d,e){return this.cmu(d,e)},
cmu(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$afe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.M(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.dL1(new C.t6(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$afe)
case 3:case 1:return A.h(u,v)}})
return A.i($async$afe,v)},
GF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.k5?3:5
break
case 3:w=6
return A.b(C.fyg(t.a.c),$async$GF)
case 6:s=e
o=t.a
r=C.fRB(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.afe(!s,!r),$async$GF)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bxy(o,t.a.c)){t.wQ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kP(o,"Cancel","Remove",q.y===D.k5?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GF)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLO(t.a.c,t.d.a),$async$GF)
case 11:t.a.bn()
o=t.c
if(o==null){w=1
break}A.iG(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GF,v)},
a7p(d){return this.bEC(d)},
bEC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tk(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.ba(s,new C.dKo(p))){o=A.U(s)
p.a=A.qE(new A.cT(new A.a4(s,new C.dKp(d),o.k("a4<1>")),new C.dKq(),o.k("cT<1,n>")))}q=p.a
if(q==null)q=d.d
t.I_()
t.n(new C.dKr(t,s,d,q))
w=3
return A.b(t.uT(),$async$a7p)
case 3:t.wQ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7p,v)},
My(d){return this.bGC(d)},
bGC(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$My=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tk(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0D(d),$async$My)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dKv(t,d),r,null,!0,!0,x.P),$async$My)
case 6:s=f
if(s==null){w=1
break}t.I_()
t.n(new C.dKw(t,s))
w=7
return A.b(t.uT(),$async$My)
case 7:case 1:return A.h(u,v)}})
return A.i($async$My,v)},
csH(){var w=this,v=w.d
v===$&&A.c()
if(!C.tk(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dL6(w))
w.uT()},
WD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$WD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bxy(n,t.a.c)){t.wQ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.M(n)
s=$.av()
r=new A.ap(B.as,s)
q=t.d.e
p=A.bj(new A.J(q,t.gc1G(),A.U(q).k("J<1,n>")).bZ(0,new C.dKI()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dKJ(t,new C.t6(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$WD)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.I_()
t.n(new C.dKK(t,p))
w=4
return A.b(t.uT(),$async$WD)
case 4:t.wQ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$WD,v)},
c1H(d){return B.a.i(d.toLowerCase())},
c5D(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tk(v,w)
t=r.d
s=C.hGN(t)
C.hQe(q,t.b,u,C.hGM(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.t6(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a4(l,new C.dLe(),A.U(l).k("a4<1>")).gJ(0)
l=n?B.bX:B.iX
v=A.V(B.WS,n?B.bp:B.bv,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zH,A.aI(!1,o,!0,new A.C(B.hC,A.B(A.a([v,B.bo,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bp:B.bv,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dLf(p,d),o,o,o,o,o,o,o),o),new A.C(B.mC,p.bRf(m),o)],u)
if(p.d.y===D.k5){t=B.qE.j(0.15)
s=A.m(12)
r=A.H(B.qE.j(0.45),B.r,1)
q=C.F9(p.d,p.a.c)
v.push(new A.C(B.wA,A.p(o,A.B(A.a([D.bA5,B.ax,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iK,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b8],u)
if(C.tk(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Il("Undo",B.uM,p.gcsG(),m,o,o))
u.push(new C.Il("Family Book",D.bpJ,p.gc5C(),m,B.rl,o))
if(C.tk(p.d,p.a.c))u.push(new C.Il("Display settings",Aj.ER,p.gc6O(),m,B.aW,o))
u.push(new C.Il("Sync",B.xd,p.gacM(),m,o,o))
t=p.d
if(t.y===D.k5||C.bxy(t,p.a.c)){t=p.d.y===D.k5?"Remove shared tree":"Delete tree"
u.push(new C.Il(t,B.e6,p.gbEM(),m,B.fP,o))}if(C.tk(p.d,p.a.c))u.push(new C.Il("Add member",B.uH,new C.dLg(p),m,B.bV,o))
v.push(new A.C(P.ad4,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galA()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bp:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ck(new C.dLh(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?L.WW:W.KH,o,o,o,o,o)
v.push(A.au(A.hh(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dLi(p),o),o,o,o))}return A.cd(o,l,A.bq(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.aj,!0,!0),o,!1,!1,o,o)},
bRf(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ab(0,B.G,B.fo.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.x6,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.a1,!0,m,A.aI(!1,m,!0,A.p(m,D.bD4,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cH,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacM(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eFr,m,m,m)
r=r.galA()
p=n.d.galA()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.D(A.v(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tk(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.bAh,m,m,m,n.gcga(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j4:B.m3
r=r?"Private":"Public"
r=A.D(n.arL(q,"Privacy",r,n.a.d.w?n.gcrK():m),1)
q=A.D(n.arL(B.xe,"Tree code",n.d.c,new C.dKx(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ab,A.B(A.a([r,B.aa,q,B.aa,A.D(n.arL(D.brs,"Collaborators",p,n.gbVB()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.k5){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.a1,!0,A.m(999),A.aI(!1,A.m(999),!0,new A.C(B.fK,A.B(A.a([A.V(B.of,B.c,m,m,m,14),B.ez,A.d("View only",m,m,m,m,m,m,B.aK3,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bu(u,new A.am(B.W,m,B.a9,B.q,A.a([t,new A.C(B.DP,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ao),B.h,m,m,new A.o(m,m,m,w,v,D.bGg,B.n),m,m,m,m,m,m,m,1/0)},
arL(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.a1,!0,A.m(14),A.aI(!1,A.m(14),!0,new A.C(D.blF,A.v(A.a([A.V(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.tI,A.d(f,w,1,B.a2,w,w,w,K.a48,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)}}
C.baQ.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gai(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.baT(s,t),new A.ar(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d0a(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d0b(this),A.U(r).k("J<1,r>")))
return new A.C(B.rL,new A.a5(w,v,new A.am(B.W,t,B.a9,B.h,u,t),t),t)}}
C.Ix.prototype={}
C.Et.prototype={}
C.baS.prototype={
gbcU(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFX.prototype={}
C.baT.prototype={
bGk(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.Y()
v=A.L()
v.r=B.by.j(0.75).gq(0)
v.c=2
v.d=B.bN
d.bE(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aQ(q.r,B.aq,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.p7(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.p7(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bE())
q=A.L()
q.r=B.c.gq(0)
d.af(new A.u(u,w),9,q)
q=A.L()
q.r=B.by.gq(0)
d.aO(t,q)},
bGi(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d0v())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.ba(a0,new C.d0w(f))
t=new A.J(a0,new C.d0x(f),A.U(a0).k("J<1,O>")).bZ(0,new C.d0y()).cG(0,1/0,B.vS)
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
l=$.Y()
h=A.a([],q)
g=new A.aQ(l.r,B.aq,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.d0(w,v,w+l,v))
h.push(new A.ao(n-l,v))
h.push(new A.d0(n,v,n,v+i))
h.push(new A.ao(n,o.b))
k=e.I()
n=g.gbL().a.snapshot()
r.drawPath((g.e=new A.cE(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.Y()
w=A.L()
w.r=B.bV.j(0.75).gq(0)
w.c=2.2
w.b=B.ae
w.d=B.bN
w.e=B.fs
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bGi(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.I()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bGk(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bex.prototype={
gc_v(){var w=this.c
if(B.a.i(w.y).length!==0)return D.d15
switch(w.c.a){case 0:return D.cxI
case 1:return D.cIb
case 2:return D.cX2}},
gc_y(){var w=this.c,v=C.h1a(w.w),u=C.h1a(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=t.gc_v(),p=t.c,o=I.byq(p.f),n=t.gc_y(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gaj(q).j(0.35),B.cA,10)],m),k=r?B.aF:B.c,j=A.H(r?B.aF:B.c,B.r,2)
if(o!=null)w=A.rz(B.A,s,B.cl,B.bP,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gaj(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gaj(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a3(B.a3,B.a7,B.w,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hO(w,B.ao),B.h,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a3(B.aw,B.aC,B.w,q,s,s),B.a6),s,56,s,s,B.E4,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aF:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eP3,s,s,s),B.h,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.blJ,s,s,s),s,s,s,-6,-4,s))}k=r?B.cK:B.c
j=A.m(8)
w=A.H(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.x.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cK,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aP:B.bv,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aH(s,new A.a5(84,112,A.v(A.a([new A.am(B.W,s,B.a9,B.h,l,s),B.av,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.h,s,D.aRJ,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.blT,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ad)}}
C.b9Y.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.Y()
w=A.L()
v=this.b
u=v?B.c:D.b1K
w.r=u.j(v?0.05:0.09).gq(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.I()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.brY.prototype={
B(d){var w=this,v=null,u=new C.eWv(w),t=w.c,s=t?B.cK:B.c,r=A.m(12),q=u.$3(B.hD,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.f4,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Ao,"Zoom out",w.e)
return A.aD(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.f4,v,v,v,1,v,v,v,v,v,22),u.$3(B.agn,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.h,s,4,v,B.dr,v,v,v,B.ac)}}
C.bhP.prototype={
B(d){var w=this,v=null,u=B.bV.j(0.15),t=A.H(B.bV,B.r,2),s=w.e,r=x.p
t=A.aH(v,A.p(v,A.v(A.a([A.V(s?L.WW:W.KH,B.bV,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eLt,v,v,v)],r),B.m,v,B.b6,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ad)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eJt,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.eya(w),A.U(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a5(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Y_.prototype={
S(){return new C.ayS()},
bn(){return this.Q.$0()},
gdT(){return this.w}}
C.ayS.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.av()
r.d!==$&&A.aO()
r.d=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ap(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.c
r.y=t==null?D.wL:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hIh(w.r,w.f)
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
NP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fRB(p.y,p.w)
w=3
return A.b(A.l0(t.a.w,B.Gr),$async$NP)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWI(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NP)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hks(p.y,p.w)
t.a.bn()
case 5:w=7
return A.b(Ah.Fk(78,800),$async$NP)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.dfM(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NP,v)},
c_x(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hQ(B.o.u(1000*Date.now()),w,D.wL,null,null,null,"","","","","",1,!1,0)
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
s=v.aAb(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).M(s)},
a71(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a71=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dfL(r),s,null,!0,!0,x.y),$async$a71)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).M(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a71,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H,i=new C.t6(j),h=l.a.e,g=A.U(h).k("a4<1>"),f=A.z(new A.a4(h,new C.dfV(l),g),g.k("G.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bke,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aF,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hq(A.aI(!1,k,!0,new A.C(B.lY,A.V(B.e6,B.o2,k,k,k,17),k),B.cH,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbBt(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jg:B.ij
t=I.byq(l.as)
if(l.as==null)s=A.V(B.o8,j?B.bp:B.bv,k,k,k,40)
else s=k
s=A.au(A.aH(k,new A.am(B.W,k,B.a9,B.q,A.a([A.hi(u,t,s,k,42),A.an(0,A.hi(B.bV,k,D.bu3,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc_u(),k,k,k,k,k,k,!1,B.ad),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayU(t,"Full name",B.m_,1,1,i,B.lF)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.T,new C.bev(i,u,new C.dfW(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bp:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bdP],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dfX(),A.U(o).k("J<1,ep<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bp:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bdR],q)
B.d.v(q,new A.J(f,new C.dfZ(),A.U(f).k("J<1,ep<n?>>")))
o=A.v(A.a([t,B.ar,new C.aaS(i,r,"Who is their parent?",p,new C.dg_(l),k,o),B.ay,n,B.ar,new C.aaS(i,m,"Who is their spouse / partner?",q,new C.dg0(l),k,o)],v),B.ag,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayU(q,"Birth date",D.afv,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayU(m,"Birth place",B.Xa,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayU(n,"Date of death (if deceased)",D.ahD,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayU(p,"Occupation",B.Yh,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.A,k,B.a9,B.q,w,k),B.ay,s,B.bu,new C.aaT(i,"Identity",u,k),B.ab,new C.aaT(i,"Family links",o,k),B.ab,new C.aaT(i,"Life details",A.v(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ayU(r,"Notes",B.kC,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ab,new C.ayT(i,"Child order",l.c7_(l.at),new C.dg1(l),new C.dg2(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fHu(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dg3(l):k
B.d.v(r,A.a([B.T,new C.ayT(i,"Visible in tree",u,w,new C.dg4(l),k)],v))}r.push(B.T)
w=j?B.jg:B.ij
u=A.m(14)
t=A.H(j?B.dU:B.c4,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aF,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.ix(k,B.bV,k,B.aj,k,new C.dg5(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bp:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.acH,k,k,k))
r.push(B.bu)
w=j?B.aN:B.aF
j=j?B.dU:B.c4
r.push(A.B(A.a([A.D(A.dV(B.n_,new C.dfY(d),A.db(k,k,k,k,k,k,k,k,k,w,k,k,B.cc,k,new A.b6(A.m(14),B.X),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.D(A.bL(D.ep8,l.gc_w(),A.bk(B.aS,k,k,0,B.c,k,B.cc,k,new A.b6(A.m(14),B.X),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.eo(B.fY,k,B.aj,h,new A.a5(420,k,A.ci(A.v(r,B.ag,k,B.e,B.Q,0,B.p),B.q,k,B.z,k,k,k,k,B.ak),k),D.ady,k,B.acX,new A.b6(g,B.X),k,k)},
c7_(d){var w=B.o.G(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.G(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaT.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bp:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jg:B.ij,s=A.m(16)
return A.v(A.a([new A.C(D.adX,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dU:B.c4,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bew.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dU:B.c4).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aN:B.aF,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bn(u,B.et,u,B.um,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bp:B.bv,u,u,u,u,u,u,u,u,u,u,u,B.cq,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bV,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ah,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaS.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dU:B.c4).j(0.85),B.r,1),q=A.V(B.qn,u?B.bp:B.bv,v,v,v,v),p=A.l(v,v,u?B.aN:B.aF,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Cw(A.a2j(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bp:B.bv,v,v,v,v,v,v,v,v,v,v,v,B.cq,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lo,v,v,v)}}
C.bev.prototype={
B(d){var w=new C.dg6(this)
return A.B(A.a([w.$3(D.WE,"Male",B.Lq),B.aa,w.$3(D.aeM,"Female",B.Lc),B.aa,w.$3(D.wL,"Other",B.mG)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayT.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jg:B.ij,r=A.m(14),q=A.H(t?B.dU:B.c4,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aF,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bp:B.bv,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aF_(u,B.Ao,w.f,v),B.bo,new C.aF_(u,B.hD,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ek,v,v,v)}}
C.aF_.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bV.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bV
else t=(s.c.a?B.bp:B.bv).j(0.4)
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,new A.a5(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ac)}}
C.aaU.prototype={
bJV(d){switch(d.a){case 0:return B.bV
case 1:return B.by
case 2:return B.cV}},
bJW(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aSN(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zb(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.H((w?B.dU:B.c4).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bV,p,p,p,18),B.ax],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bp:B.bv,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aF,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cL,B.zF,p,p,1/0)},
abh(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bp:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jg:B.ij,s=A.m(16),r=A.H(v?B.dU:B.c4,B.r,1)
return A.v(A.a([new A.C(D.adX,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h5Q(r,q),o=q.c,n=t.bJV(o),m=I.byq(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aN:B.aF,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.k5?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bp:B.bv,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.hi(u,m,m==null?A.V(B.o8,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eh,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.au(A.p(s,A.d(t.bJW(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.lX,s,s,s),s,s,s)
u=x.p
i=A.a([t.zb("Full name",i,B.m_)],u)
if(p>0)i.push(t.zb("Child order","#"+p,B.Lj))
r=A.a([h,B.av,r,B.aO,l,B.T,v,B.bu,t.abh("Identity",i),B.ab,t.abh("Life details",A.a([t.zb("Birth date",q.w,D.afv),t.zb("Birth place",q.x,B.Xa),t.zb("Date of death",q.y,D.ahD),t.zb("Occupation",q.z,B.Yh)],u)),B.ab,t.abh("Family links",A.a([t.zb("1. Parent",t.aSN(q.d),B.Eh),t.zb("2. Spouse",t.aSN(q.e),B.Lb)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ab,t.abh("Notes",A.a([t.zb("Notes",q,B.kC)],u))],u))
r.push(B.bu)
r.push(A.bL(B.Hy,new C.dgg(d),A.bk(B.aS,s,s,s,s,s,B.cc,s,new A.b6(A.m(14),B.X),s,s,s)))
return A.ew(s,k,new A.d2(B.lf,A.ci(A.v(r,B.ag,s,B.e,B.Q,0,B.p),B.q,s,B.z,s,B.zN,s,s,B.ak),s),s,s,s,B.DT,B.cZ,s,new A.b6(j,B.X),s)}}
C.Il.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bp:B.bv
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.rO,A.hq(A.aD(!1,B.a1,!0,A.m(8),A.aI(!1,A.m(8),!0,new A.a5(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.amU.prototype={
eF(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().ab())
w=u.c
v=A.U(w).k("J<1,a1<n,@>>")
w=A.z(new A.J(w,new C.c3B(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iF(w,new C.c3C(),t,x.U))
return s}}
C.amV.prototype={
S(){return new C.aAs(A.a([],x.bF))},
gd6(){return this.c}}
C.aAs.prototype={
Z(){this.a0()
this.I6()},
I6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c3F(t.a.c),$async$I6)
case 3:r=e
w=4
return A.b(C.zI(t.a.c),$async$I6)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rl(q,new C.dLr(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dLs(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I6,v)},
xn(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IP(d,e){return this.cv_(d,e)},
cv_(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IP=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dLw(q,e))
t=3
w=6
return A.b(d.$0(),$async$IP)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dLx(q))
$.eI.lV()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IP,v)},
Vt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$Vt)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IP(new C.dLo(t),"Preparing download\u2026"),$async$Vt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vt,v)},
Vx(d){return this.bI0(d)},
bI0(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$Vx)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IP(new C.dLp(t,d),"Preparing file\u2026"),$async$Vx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vx,v)},
ad8(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ad8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wn.c2().Kv(B.Ob,B.rQ,!0),$async$ad8)
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
case 6:u=A.Fj()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ad8,v)},
W7(d){return this.bS7(d)},
bS7(d){var w=0,v=A.j(x.H),u=this
var $async$W7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IP(new C.dLq(u,d),"Restoring family trees\u2026"),$async$W7)
case 2:return A.h(null,v)}})
return A.i($async$W7,v)},
W6(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ad8(),$async$W6)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.W7(s),$async$W6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W6,v)},
a_K(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$a_K)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IP(new C.dLv(t),"Creating QR code\u2026"),$async$a_K)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_K,v)},
a_m(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BP()){t.xn("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cp(A.eD(new C.dLt(),!0,null,x.N)),$async$a_m)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.W7(r),$async$a_m)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_m,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=o?B.za:B.iX,m=o?D.abn:B.aN,l=o?B.aI:B.c4,k=o?B.aN:B.aF,j=new C.d0z(n,m,l,k,o?B.bI:B.bv)
l=A.aF(p,p,p,p,A.V(B.eq,k,p,p,p,20),p,p,p,new C.dLz(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eA(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d07(!0,B.j6,B.aX,B.aX,q.r?p:q.gcmh(),j,s,"Show restore QR"),1),B.ax],u))}s=q.e
r=q.r?p:q.gciB()
t.push(A.D(C.d07(!s,B.iN,B.b3,B.bC,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d07(!1,B.hq,B.aS,B.bV,q.r?p:q.gbHU(),j,"Photos & books included","Download all trees"),1),B.ax],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d07(!1,M.xh,B.aZ,B.aL,q.r?p:q.gbS4(),j,s,"Upload backup file"),1))
l=A.a([new C.baR(v,l,p),B.kg,new C.aaa(j,"QR restore",p),B.T,t,B.d3,new C.aaa(j,"Backup files",p),B.T,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.kg,new C.aaa(j,"One tree",p),B.T],u)
B.d.v(v,J.b4(q.d,new C.dLA(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cL(l,p,B.VL,p,p,B.ak,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.x.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.bq(!0,A.p(p,A.B(A.a([L.aIy,B.bd,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zM,p,p,p),!0,!1,B.aj,!0,!1),p,p,20,20,p,p))}return A.cd(w,n,new A.am(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d0z.prototype={}
C.baR.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ab(0,B.G,B.aS.j(0.32),B.jQ,28)],x.V)
t=A.an(p,A.V(B.t6,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bCD,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nK,A.D(A.v(A.a([D.eTE,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bJv,B.n),p,p,p,p,p,p,p,p)}}
C.aaa.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.aa,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.baP.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aX.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aX.j(0.1),B.cA,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.a1,!0,q,A.aI(!1,o,!0,A.eq(A.d8(new A.C(E.Vo,A.v(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qk,q,q,q),B.ab,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cq,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)}}
C.baU.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.eq(new A.C(B.eM,A.B(A.a([A.p(v,D.bBR,B.h,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qk,v,v,v),B.bd,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hq,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Yk.prototype={
S(){return new C.aAr()},
gd6(){return this.c}}
C.aAr.prototype={
Z(){this.a0()
this.a6A()},
a6A(){var w=0,v=A.j(x.H),u=this,t
var $async$a6A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aZk(u.a.c,B.Bq),$async$a6A)
case 2:t=e
if(u.c!=null)u.n(new C.dLj(u,t))
return A.h(null,v)}})
return A.i($async$a6A,v)},
aew(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aew=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dLk(q))
t=4
p=A.fTd(q.a.d,B.Bq)
if(p==null){n=A.ba("Could not read this QR code.")
throw A.R(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ap6(n.e,m,l,B.Bq,p,n.f),$async$aew)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dLl(q))
q.c.H(x.q).f.P(D.ex4)
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
if(q.c!=null)q.n(new C.dLm(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aew,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=p?B.iZ:B.oU,n=p?B.hx:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eA(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f79,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pl(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bu,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.ai,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b6,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.af:B.bt,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcij()
if(u)u=B.Hb
else u=A.V(r.e===!0?B.hp:B.afu,q,q,q,q,q)
w=A.a([w,B.ab,v,B.ab,new A.a5(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.db(q,q,q,q,q,q,q,q,q,B.aS,q,B.fQ,q,q,q,new A.ay(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.ir,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ai,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a5(1/0,q,A.bL(B.yr,new C.dLn(d),A.bk(B.aS,q,q,q,q,B.fQ,q,q,q,q,q,q)),q))
return A.cd(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Yl.prototype={
S(){return new C.bfW(A.yi(B.wl,B.n7,B.tb))}}
C.bfW.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cd(A.eA(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f_U,w,w,w,1,w,!0),B.x,A.yh(this.d,B.bP,new C.dLB(this,d)),w,!1,!1,w,w)}}
C.aVg.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.NI,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ll.prototype={}
C.a49.prototype={
S(){return new C.bfF(null,null)}}
C.bfF.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bi(v,B.rG,v,1,v,w)
w.e=A.bi(v,B.oZ,v,1,v,w)
w.a.toString
w.d.cF(0)
w.e.cF(0)},
bp(d){var w,v,u=this
u.bC(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)},
p(){var w=this.d
w===$&&A.c()
w.p()
w=this.e
w===$&&A.c()
w.p()
this.bpi()},
B(d){var w,v,u=this,t=B.d.dI(D.a_R,new C.dxM(u),new C.dxN())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.co9(A.c3(new A.h4(A.a([w,v],x.dS)),new C.dxO(u,t),null),!0)}}
C.bfE.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWN(d,e)
break
case"house":p.lw(d,e,D.cMy)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.ge8()
$.Y()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gq(0)
d.af(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lB(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zU(d,e,12)
p.wZ(d,e,B.kS,5,14)
break
case"grocery":p.c7H(d,e)
break
case"calculator":p.c7o(d,e)
break
case"lumber":p.c7P(d,e)
break
case"kitchen":p.c7K(d,e)
break
case"landscape":p.lw(d,e,D.cMZ)
s=new A.aQ($.Y().r,B.aq,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.d0(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.d0(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ao(t,w))
s.E(new A.ao(0,w))
s.E(new A.bE())
w=A.L()
w.r=B.fb.j(0.85).gq(0)
d.aO(s,w)
p.zU(d,e,8)
p.wZ(d,e,B.im,4,18)
break
case"plumbing":p.c7Y(d,e)
break
case"electrical":p.lw(d,e,D.cWo)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.Y()
u=A.L()
u.r=B.c.j(q*0.12).gq(0)
d.b2(new A.a9(0,0,0+e.a,0+e.b),u)
p.lB(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lB(d,e,B.lj.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zU(d,e,10)
break
case"store":p.c86(d,e)
break
case"paint_remodel":p.c7T(d,e)
break
case"roofing":p.c8_(d,e)
break
case"warehouse":p.c8d(d,e)
break
case"vehicles":p.c8b(d,e)
break
case"farm":p.c7B(d,e)
break
case"restaurant":p.c7Z(d,e)
break
case"tools":p.c89(d,e)
break
case"wallet":p.c8c(d,e)
break
case"concrete":p.c7u(d,e)
break
case"blueprint":p.c7m(d,e)
break
default:p.aWN(d,e)}},
lw(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.Y()
w=A.L()
w.sap(new A.a3(B.aw,B.aC,B.w,f,null,null).au(0,v))
d.b2(v,w)},
lB(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.ge8()/2-h
$.Y()
w=A.L()
w.b=B.ae
w.c=2.4
w.r=f.gq(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bV(q,p)
r=w.I()
v.drawArc.apply(v,[A.c9(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.ge8()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.Y()
q=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gq(0)
p=q.I()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zU(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.G(s*0.17,0.9)
p=B.k.G(s*0.23,0.85)
$.Y()
o=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gq(0)
n=o.I()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWN(d,e){var w,v=this
v.lw(d,e,D.cVg)
w=v.c
v.lB(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lB(d,e,B.bH.j(0.45),-w*3.141592653589793*1.4,22)
v.bGe(d,e,B.hO,w)
v.wZ(d,e,B.c.j(0.7),6,8)},
bGe(d,e,f,g){var w,v,u,t,s,r,q,p
$.Y()
w=A.L()
w.r=f.j(0.35).gq(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.I()
s.drawRect(A.c9(new A.a9(16,q,t,q+3)),p)
p.delete()}},
c7H(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.c3Q)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.G(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.G(s,2)
$.Y()
l=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
l.r=D.cKV[B.o.G(s,4)].j(0.85).gq(0)
k=l.I()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lB(d,e,B.c.j(0.35),w,16)
j.wZ(d,e,B.im,5,12)},
c7o(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lw(d,e,D.c3X)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.ge8()
$.Y()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gq(0)
d.af(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.io(g,g,g,g,g,B.a5,B.cm,g,B.en,B.cj)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cOs[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.G(o,2)
p.saU(0,new A.es(r,g,g,B.cW,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fe()
p.a5(d,new A.u(t*(0.08+B.o.G(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c3Z[o]
l=B.kq.j(0.28+0.3*Math.sin(n))
k=B.o.G(o,2)
p.saU(0,new A.es(m,g,g,B.cW,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fe()
p.a5(d,new A.u(t*(0.55+B.o.G(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lB(d,e,B.c.j(0.35),w*1.5,14)
h.lB(d,e,B.ew.j(0.55),-v*3.141592653589793*2,8)
h.lB(d,e,B.zb.j(0.4),r*2.8,22)
h.wZ(d,e,B.oN,8,10)
h.zU(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.G(w+o*0.22,0.9)
$.Y()
r=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gq(0)
r.c=1.2
i=r.I()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c7P(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,Y.aqT)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bF(new A.a9(20,q,u,q+10),B.hr)
$.Y()
o=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h4,B.nU,(r+1)/2).gq(0)
n=o.I()
t.drawRRect(A.f7(p),n)
n.delete()}m.lB(d,e,B.h4.j(0.35),w,15)
m.zU(d,e,8)},
c7K(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.cLp)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.G(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.G(r*0.13,0.7)
$.Y()
l=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gq(0)
k=l.I()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lB(d,e,B.bH.j(0.4),-w*3.141592653589793*2.2,11)
j.wZ(d,e,B.pY,4,14)},
c7Y(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lw(d,e,D.cBc)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.G(s,0.12)
$.Y()
n=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gq(0)
m=n.I()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wZ(d,e,B.o0,6,12)
l.lB(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c86(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lw(d,e,D.chh)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bF(new A.a9(q,14,q+u,22),B.j9)
$.Y()
p=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f0,B.bH,(r+1)/2).gq(0)
o=p.I()
t.drawRRect(A.f7(q),o)
o.delete()}n.lB(d,e,B.c.j(0.3),w,16)
n.zU(d,e,8)
n.wZ(d,e,B.u6,5,13)},
c7T(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cGG)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.G(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bF(new A.a9(q,p,q+8,p+(18+r*22)),B.hJ)
$.Y()
q=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=[B.id,B.dB,B.bH,B.eu][s].j(0.85).gq(0)
o=q.I()
t.drawRRect(A.f7(p),o)
o.delete()}this.lB(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c8_(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cEk)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.G(v+s*0.12,0.75))
q=B.o.G(s,4)*0.22
$.Y()
p=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gq(0)
p.c=1.5
o=p.I()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wZ(d,e,B.cp,7,11)},
c8d(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cjV)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bF(new A.a9(p,o,p+(t-r*8),o+16),B.hr)
$.Y()
p=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cp,B.aN,(Math.sin(q)+1)/2).gq(0)
n=p.I()
s.drawRRect(A.f7(o),n)
n.delete()}this.lB(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c8b(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cZW)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.G(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.G(s,2)*0.08)
q=A.bF(new A.a9(r,q,r+28,q+8),B.hr)
$.Y()
p=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gq(0)
o=p.I()
t.drawRRect(A.f7(q),o)
o.delete()}this.zU(d,e,6)},
c7B(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cK5)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.Y()
s=A.L()
s.r=B.lj.j(0.75).gq(0)
d.af(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=B.fx.j(0.85).gq(0)
o.c=3
n=o.I()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lB(d,e,B.lj.j(0.35),w,14)},
c7Z(d,e){var w,v,u,t,s,r,q,p,o=this
o.lw(d,e,D.cMn)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cN(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.Y()
q=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gq(0)
p=q.I()
t.drawOval(A.c9(r),p)
p.delete()}o.wZ(d,e,B.pY,5,16)
o.zU(d,e,7)},
c89(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.cXL)
w=m.c
v=w*3.141592653589793
m.lB(d,e,B.nU.j(0.55),v*3,10)
m.lB(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.Y()
o=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=B.nU.j(0.8).gq(0)
n=o.I()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c8c(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.d_q)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bF(new A.a9(p,o,p+36,o+22),B.j9)
$.Y()
p=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.im,B.lj,q).gq(0)
n=p.I()
s.drawRRect(A.f7(o),n)
n.delete()}m.zU(d,e,9)
m.lB(d,e,B.c.j(0.4),w*2.2,12)},
c7u(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cQX)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bV(new A.u(v,u),34)
$.Y()
s=A.L()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gq(0)
d.fJ(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
o.r=B.c4.j(0.85).gq(0)
n=o.I()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c7m(d,e){var w,v,u,t,s,r,q,p
this.lw(d,e,D.cNe)
$.Y()
w=A.L()
w.r=B.c.j(0.12).gq(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.I()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.I()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.G(t*0.85,1)
$.Y()
u=A.L()
u.r=B.dB.j(0.45).gq(0)
d.b2(new A.a9(0,p,0+v,p+6),u)
this.lB(d,e,B.kS.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apM.prototype={
Y4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMJ(),$async$Y4)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a6m(s),$async$Y4)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Y4,v)},
ad9(d){return this.cas(d)},
cas(d){var w=0,v=A.j(x.H),u=this,t
var $async$ad9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hQo(d),$async$ad9)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ad9,v)},
B(d){var w,v,u,t=null,s=A.M(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jg:B.ij
w=x.p
v=A.a([C.aN6(!0,B.pO,1/0,B.p6,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.x.j(0.35)],x.O)
v.push(A.bT(new A.bI(B.aY,t,t,new A.C(B.ui,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.arL,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a3(B.aY,B.b1,B.w,u,t,t),B.n),B.bb))}v.push(A.an(8,A.B(A.a([A.D(A.dq(D.bvO,D.eQg,new C.cb8(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jG,t,t,t,t,B.c8)),1),B.aa,A.D(A.ez(D.bDN,D.f2M,this.gc1E(),A.db(t,t,B.x.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jG,t,t,D.aQj,t,t,t,B.c8)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fD(1.7777777777777777,A.aD(!1,B.a1,!0,B.pO,new A.am(B.W,t,B.b_,B.q,v,t),B.ao,s,0,t,t,t,t,t,B.ac),t)}}
C.aIh.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b_$
if(v!=null)v.a1(0,w.gdB())
w.b_$=null
w.a2()}}
C.aPX.prototype={}
C.aPW.prototype={}
C.aO1.prototype={}
C.WZ.prototype={
S(){return new C.avN()}}
C.avN.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bc("",B.b2,B.aM)
v=$.av()
u.d!==$&&A.aO()
u.d=new A.ap(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
IG(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.H(x.q).f.P(D.exz)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).M(new C.aPX(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bDu,B.h,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.aF,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bp:B.bv,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aF(n,n,n,n,A.V(B.ct,m?B.bp:B.bv,n,n,n,n),n,n,n,new C.cTL(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bp:B.bv,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bp:B.bv,n,n,n,n,n,n,n,n,11,n,n,B.cq,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fTt(new C.cTM(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aN:B.aF,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jg:B.ij
r=A.m(12)
q=A.m(12)
p=m?B.dU:B.c4
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bn(n,new A.b3(4,r,B.dd),n,n,n,n,n,n,!0,new A.b3(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ah,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cTN(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.Hf,n,n,n,n)
u=m?B.aN:B.aF
m=m?B.dU:B.c4
return A.ew(n,l,new A.d2(B.lf,A.ci(A.v(A.a([j,B.aO,i,B.av,w,B.P,v,B.aO,t,B.bu,A.B(A.a([A.D(A.dV(B.df,new C.cTO(d),A.db(n,n,n,n,n,n,n,n,n,u,n,n,B.cc,n,new A.b6(A.m(12),B.X),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.ax,A.D(A.bL(D.f30,o.ga01(),A.bk(B.aS,n,n,n,B.c,n,B.cc,n,new A.b6(A.m(12),B.X),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.z,n,B.zP,n,n,B.ak),n),n,n,n,V.zQ,B.cZ,n,new A.b6(k,B.X),n)}}
C.WY.prototype={
S(){return new C.avM()}}
C.avM.prototype={
Z(){this.a0()
var w=$.av()
this.d!==$&&A.aO()
this.d=new A.ap(B.as,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
IG(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.H(x.q).f.P(D.evg)
return}v=this.c
v.toString
A.a8(v,!1).M(new C.aPW(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.M(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.bAa,B.h,q,q,new A.o(B.bV.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bp:B.bv,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aF(q,q,q,q,A.V(B.ct,p?B.bp:B.bv,q,q,q,q),q,q,q,new C.cTH(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.V(B.afg,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.ax,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aN:B.aF,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jg:B.ij
t=A.m(12)
s=A.m(12)
r=p?B.dU:B.c4
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bn(q,new A.b3(4,t,B.dd),q,q,q,q,q,q,!0,new A.b3(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ah,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cTI(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kh,q,q,q,q)
w=p?B.aN:B.aF
p=p?B.dU:B.c4
return A.ew(q,o,new A.d2(B.lf,A.ci(A.v(A.a([m,B.aO,l,B.ay,v,B.bu,A.B(A.a([A.D(A.dV(B.df,new C.cTJ(d),A.db(q,q,q,q,q,q,q,q,q,w,q,q,B.cc,q,new A.b6(A.m(12),B.X),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.ax,A.D(A.bL(D.f9g,this.ga01(),A.bk(B.bV,q,q,q,B.c,q,B.cc,q,new A.b6(A.m(12),B.X),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.zP,q,q,B.ak),q),q,q,q,V.zQ,B.cZ,q,new A.b6(n,B.X),q)}}
C.Ww.prototype={
S(){return new C.aux()}}
C.aux.prototype={
Z(){var w,v=this
v.a0()
w=$.av()
v.d!==$&&A.aO()
v.d=new A.ap(B.as,w)
v.e!==$&&A.aO()
v.e=new A.ap(new A.bc("1",B.b2,B.aM),w)
v.f!==$&&A.aO()
v.f=new A.ap(B.as,w)
v.r!==$&&A.aO()
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
gI1(){var w,v=this.e
v===$&&A.c()
w=A.d9(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gagh(){var w=this.f
w===$&&A.c()
w=A.d9(B.a.i(w.a.a))
return w==null?0:w},
gaZy(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aKf(d){var w,v=B.k.D(this.gI1()+d,0.25,999999),u=B.k.jA(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.ae("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saU(0,u)
this.n(new C.crm())},
auc(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.jg:B.ij,s=A.m(14),r=A.m(14)
u=u?B.dU:B.c4
return A.bn(w,new A.b3(4,s,B.dd),w,B.bB,w,w,w,w,!0,new A.b3(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b3(4,A.m(14),B.a6M),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c1F(d,e,f){return this.auc(d,e,f,null)},
IG(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gagh()<=0){s.c.H(x.q).f.P(D.ezq)
return}r=s.c
r.toString
v=s.gI1()
u=s.gagh()
t=s.gaZy()
A.a8(r,!1).M(new C.aO1(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.t6(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bV.j(0.14)],j),h=A.m(14)
i=A.p(o,D.btM,B.h,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a3(B.a3,B.a7,B.w,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bp:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.cq,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aF(o,o,o,o,A.V(B.ct,n?B.bp:B.bv,o,o,o,o),o,o,o,new C.crs(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.auc(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Lp),B.z,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.Hf,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bp:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jg:B.ij
t=A.m(14)
s=A.H(n?B.dU:B.c4,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Ao,n?B.aN:B.aF,o,o,o,20),o,o,o,new C.crt(p),o,o,o,o,o,B.c8)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bFg,B.z,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cru(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a5(52,o,q,o),A.aF(o,o,o,o,A.V(B.hD,n?B.aN:B.aF,o,o,o,20),o,o,o,new C.crv(p),o,o,o,o,o,B.c8)],w),B.m,o,B.e,B.Q,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.ax,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.auc(m,"Amount","0.00",B.hT),B.z,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.crw(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.z(new A.J(D.cH7,new C.crx(p,m),t),t.k("ai.E"))
i=A.a([i,B.bu,v,B.ay,h,B.P,s,B.ab,A.c8(B.bJ,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c1F(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cry(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kh,o,o,o,o)],w))}i.push(B.aO)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bV.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bp:B.bv,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gI1()===B.k.jA(p.gI1())?B.k.N(p.gI1()):p.gI1()
s=p.gaZy()
r=A.zK(p.gagh())
i.push(A.p(o,A.B(A.a([A.D(A.v(A.a([u,B.av,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bp:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bzb(p.gI1()*p.gagh(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a3(B.a3,B.a7,B.w,j,o,o),B.n),o,o,o,o,B.iL,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.dU:B.c4
h=A.db(o,o,o,o,o,o,o,o,o,o,o,o,B.cc,o,new A.b6(j,B.X),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aF,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.crz(d),h),1),B.ax,A.D(A.dq(D.aiG,D.f5z,p.ga01(),A.bk(B.aS,o,o,0,B.c,o,B.cc,o,new A.b6(A.m(14),B.X),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ew(o,l,new A.d2(U.a78,A.ci(A.v(i,B.ag,o,B.e,B.Q,0,B.p),B.q,o,B.z,o,A7.qj,o,o,B.ak),o),o,o,o,B.K8,B.cZ,o,new A.b6(k,B.X),o)}}
C.a_3.prototype={
S(){return new C.brQ()}}
C.brQ.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.av()
u.d!==$&&A.aO()
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
r=r?B.jg:B.ij
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bn(s,new A.b3(4,A.m(12),B.dd),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ah,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eVY(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dV(B.df,new C.eVZ(d),s),1)
r=A.bk(B.bV,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ew(s,q,new A.C(B.zP,A.v(A.a([o,B.ay,v,B.aO,A.B(A.a([u,B.ax,A.D(A.bL(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eW_(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.cZ,s,new A.b6(p,B.X),s)}}
C.a9e.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.Eg.prototype={
S(){return new C.brO(null,null)}}
C.brO.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.beo,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.brC()},
gbsY(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bV,B.aW],x.O)
case 2:return A.a([B.bq,B.aS,B.aW],x.O)
case 3:return A.a([B.aX,B.cb,B.jA],x.O)
case 4:return A.a([B.hl,B.bV,B.f3],x.O)
case 0:return A.a([B.aS,B.bV,B.aW],x.O)}},
B(d){var w=A.M(d),v=this.d
v===$&&A.c()
return new A.en(A.c3(v,new C.eVW(this,new C.t6(w.ax.a===B.H)),null),null)}}
C.auq.prototype={
S(){return new C.brP(null,null)}}
C.brP.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.my,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.brD()},
B(d){var w=this.d
w===$&&A.c()
return A.c3(w,new C.eVX(this),null)}}
C.brN.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bF(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b1(w,w))
u=new A.aQ($.Y().r,B.aq,null,null,A.a([],x.v))
u.E(new A.iO(v))
w=A.L()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gq(0)
d.aK(v,w)
w=A.L()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gq(0)
d.aO(u,w)
w=A.wl(u)
t=A.a([],x.f5)
w=new A.uU(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jJ('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.G3(w,r)
w.j1()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNy(d,q,r,o,0,0.2,4.2,0.92)
p.aNy(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNy(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.G(g+h,1)*f,s=A.hdJ(e.a.a,e,t,t+f*i,!0),r=A.bxB(s.gbL().a.getBounds())
$.Y()
w=A.L()
w.b=B.ae
w.c=j
w.d=B.bN
w.f=!0
v=this.f
u=k*this.e
w.sap(new A.a3(B.a3,B.a7,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Fv,null).au(0,r))
d.aO(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aKp.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.aKq.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.t6.prototype={}
C.apL.prototype={
S(){return new C.aBU()},
gdT(){return this.c}}
C.aBU.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.ae0()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.JI(w,v)
this.a2()},
ae0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ae0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxI(t.c,t.d.a),$async$ae0)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.evk(u,s))
return A.h(null,v)}})
return A.i($async$ae0,v)},
Of(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Of=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.evb(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.JI(t,s),$async$Of)
case 2:if(u.c!=null)u.n(new C.evc(u))
return A.h(null,v)}})
return A.i($async$Of,v)},
OL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.M(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.evi(t,new C.t6(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OL)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a6m(q),$async$OL)
case 6:case 5:t.n(new C.evj(t,r))
w=7
return A.b(t.Of(),$async$OL)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OL,v)},
TL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hQ9(r),$async$TL)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.ev6(t,new C.qp(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Of(),$async$TL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TL,v)},
c6D(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h5N(t,new C.eva(u),w,v)},
a8i(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c1(new A.ay(v,2.5,B.r,-1),B.X,B.X,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aQ5,w,w,B.n),w,22,w,w,w,w,w,22)},
a7o(d){return this.bEz(d)},
bEz(d){var w=0,v=A.j(x.H),u=this
var $async$a7o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.ev9(u,d))
w=2
return A.b(u.Of(),$async$a7o)
case 2:return A.h(null,v)}})
return A.i($async$a7o,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.M(a2).ax.a===B.H,e=f?B.bX:B.iX,d=A.m(8),a0=A.V(O.WT,f?B.bp:B.bv,g,g,g,16),a1=x.p
a0=A.aI(!1,d,!0,new A.C(B.DY,A.B(A.a([a0,B.bo,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bp:B.bv,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.evl(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.W,g,B.b_,B.q,A.a([A.bu(A.m(22),C.aN6(!0,A.m(22),1/0,B.p6,g,d,1/0),B.ao),A.an(10,A.dq(D.byg,D.f7C,h.gaXw(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b6(A.m(12),B.X),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aS.j(f?0.5:0.38),B.eP,22),new A.ab(-4,B.G,B.bV.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.am(B.W,g,B.b_,B.q,A.a([C.aN6(!0,A.m(16),1/0,B.KS,g,r.c,1/0),A.bT(g,new A.o(g,g,g,g,g,new A.a3(B.aY,B.b1,B.w,A.a([B.c.j(0.06),B.K,B.x.j(0.22)],x.O),g,g),B.n),B.bb),A.an(g,h.a8i(!0),g,g,8,g,8,g),A.an(g,A.coU(h.a8i(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.coU(h.a8i(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.coU(h.a8i(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dq(D.bul,D.f1P,h.gaXw(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b6(A.m(12),B.X),g,g,g)),g,g,g,10,g,g)],a1),g),B.ao),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bG1,B.n),g,g,g,g,B.lY,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aF,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZY,B.nd,B.fU],u):A.a([B.aW,B.aS,B.bV],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aS.j(f?0.45:0.35),B.eP,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jL,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.fW,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.bzb(h.d.gw4(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cq,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.h6.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aX.j(0.28),B.cA,14)],t)
j=B.aX.j(0.22)
i=A.m(10)
u=A.p(g,A.bu(r,new A.am(B.W,g,B.a9,B.q,A.a([p,new A.C(D.bj2,A.B(A.a([o,B.ax,A.aD(!1,B.a1,!0,g,A.aI(!1,n,!0,A.eq(new A.C(Ac.Vn,A.v(A.a([A.p(g,D.aie,B.h,g,g,new A.o(j,g,A.H(B.aX.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.h1,D.eSP],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc6C(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ao),B.h,g,g,new A.o(g,g,g,v,s,new A.a3(B.aw,B.aC,B.w,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fD(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bu,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aF,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b8,A.dq(Ae.YD,D.eQQ,h.gbtq(),A.bk(B.aS,g,g,g,B.c,g,B.iK,g,new A.b6(A.m(12),B.X),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ab],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dU:B.c4,B.r,1)
t=A.V(B.Xd,f?B.bp:B.bv,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aF,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bp:B.bv,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.uq,g,g,1/0))}else B.d.v(d,new A.J(w,new C.evm(h,new C.t6(f)),A.U(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zB,A.au(A.mm(g,f?B.bp:B.bv,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cd(g,e,A.bq(!0,A.v(A.a([new A.C(B.zH,a0,g),A.D(A.ci(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wD,g,g,B.ak),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.aj,!0,!0),g,!1,!1,g,g)},
bwV(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.ab(0,B.G,B.x.j(r?0.35:0.08),B.cA,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aSM,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hV:B.fX,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aN:B.aF,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcKq()
v=A.zK(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bp:B.bv,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b6,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bV.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bzb(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a3(B.a3,B.a7,B.w,k,u,u),B.n),u,u,u,u,B.h8,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.KY(A.B(A.a([m,A.D(new A.C(B.acA,A.B(A.a([l,B.bd,t,B.aa,k,A.aF(u,u,u,u,A.V(B.ct,(r?B.bp:B.bv).j(0.75),u,u,u,20),u,u,u,new C.ev7(this,d),u,u,u,u,u,B.c8)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ag,u,B.e,B.j,0,u,u),u),B.ao),B.h,u,D.aRG,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.abe.prototype={
Db(d){return this.bFR(d)},
bFR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Db=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oD(d,o,!1),$async$Db)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).M(null)
w=4
return A.b(A.bN(A6.zz,null,x.H),$async$Db)
case 4:s=t.d
w=5
return A.b(C.fpI(!0,o,s),$async$Db)
case 5:r=f
q=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.F8(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$Db)
case 6:p=f
w=7
return A.b(A.oC(o,!1),$async$Db)
case 7:if(d.e==null){w=1
break}d.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Db,v)},
Y5(d){return this.cmi(d)},
cmi(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oD(d,s,!1),$async$Y5)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).M(null)
A.hm(d,new C.apF(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oC(s,!1),$async$Y5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y5,v)},
Og(d){return this.ciw(d)},
ciw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Og=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).M(null)
w=3
return A.b(A.hm(d,D.aAX,!0,"NgmyWorksheetProjectScan",x.N),$async$Og)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bzc(s),$async$Og)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.H(x.q).f.P(D.eyz)
w=1
break}q=C.fJH(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$Og)
case 5:if(d.e==null){w=1
break}d.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Og,v)},
Y6(d){return this.ctZ(d)},
ctZ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Y6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).M(null)
w=3
return A.b(C.byK(),$async$Y6)
case 3:s=f
if(s==null){w=1
break}r=C.fJH(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$Y6)
case 4:if(d.e==null){w=1
break}d.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Y6,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=new C.t6(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.ab(0,B.G,B.x.j(u?0.35:0.08),B.jQ,36)],x.V),o=x.p
return A.bq(!0,new A.C(B.un,A.p(v,A.v(A.a([w.ckW(d,t,s),new A.C(D.bir,A.v(A.a([w.b_r(t,"QR restore"),B.T,A.B(A.a([w.aVx(t,!0,B.j6,B.aX,B.aX,new C.evo(w,d),"Show to scan","QR code"),B.ax,w.aud(t,B.iN,B.b3,B.bC,new C.evp(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d3,w.b_r(t,"Backup files"),B.T,A.B(A.a([w.aud(t,B.hq,B.aS,B.bV,new C.evq(w,d),"Full copy","Backup file"),B.ax,w.aud(t,M.xh,B.aZ,B.aL,new C.evr(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.ao,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.aj,!0,!0)},
ckW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eT,B.cY,B.fo],k):A.a([B.aW,B.aS,B.bV],k)
w=A.an(l,A.V(B.t6,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kw,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.x.j(0.2),B.cA,12)],x.V)
r=this.d
s=A.p(l,C.aN6(!0,A.m(13),64,D.bpD,l,r.c,64),B.ao,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aL0,l,l,l)
r=C.bzb(r.gw4(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.W,l,B.a9,B.q,A.a([w,new A.C(D.biP,A.v(A.a([v,A.B(A.a([s,B.er,A.D(A.v(A.a([u,B.av,t,B.P,A.B(A.a([r,B.aa,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fC,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.ct,B.c.j(0.85),l,l,l,l),l,l,l,new C.evn(d),l,l,l,A.na(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aIn,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a3(B.aw,B.aC,B.w,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b_r(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.aa,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bp:B.bv,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aVx(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.abn:B.aN
if(e)w=B.aX.j(o?0.45:0.35)
else{w=o?B.dU:B.c4
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aX.j(0.12),B.cA,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qk,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aN:B.aF,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.eq(new A.C(E.Vo,A.v(A.a([t,B.ab,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bp:B.bv,r,r,r,r,r,r,r,r,11,r,r,B.cq,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
aud(d,e,f,g,h,i,j){return this.aVx(d,!1,e,f,g,h,i,j)}}
C.apF.prototype={
S(){return new C.bhi()}}
C.bhi.prototype={
Z(){this.a0()
this.abU()},
abU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bzd(p.c,p.d),$async$abU)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.ev1(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.ev2(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=g?B.za:B.iX,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.eq,g?B.af:B.ai,h,h,h,18),h,h,h,new C.ev3(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.yi],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eT,B.cY,B.fo],s):A.a([B.aW,B.aS,B.bV],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aS.j(g?0.4:0.3),B.eP,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dQ,B.L,h,h)
p=C.bzb(p.gw4(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ar,A.B(A.a([p,B.aa,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fC,h,h,h)],u),B.m,h,B.b6,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a3(B.aw,B.aC,B.w,s,h,h),B.n),h,h,h,h,E.VK,h,h,1/0)
t=g?D.b78:B.c
q=A.m(24)
p=A.H(w?B.aX.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.x.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a44,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dPU)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pl(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c3,h,h,h))}}o.push(B.aO)
n=w?B.aX:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.aX:B.aS).j(0.35),B.r,1)
k=w?B.L8:B.LA
k=A.V(k,w?B.aX:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.ax,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.af:B.ai,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iK,h,h,h))
return A.cd(h,f,A.bq(!0,A.v(A.a([new A.C(A3.Kl,e,h),A.D(A.ci(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rN,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adI,h,h,B.ak),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.aj,!0,!0),h,!1,!1,h,h)}}
C.apK.prototype={
S(){return new C.aBT(A.yi(B.JE,B.n7,B.tb))}}
C.aBT.prototype={
p(){this.d.p()
this.a2()},
aIh(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iG(w,d)},
c2v(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hOe(t)
if(s!=null){this.aIh(s)
return}r=C.fXY(t)
if(r!=null)q=A.dp(r,p,0)
else q=!1
if(q){this.aIh(B.a.i(B.a.aX(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eA(A.a([A.aF(t,t,t,t,A.V(u.f?B.rZ:A0.Le,t,t,t,t,t),t,t,t,new C.ev5(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.za,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.f1J,t,t,t,1,t,!0),q=A.yh(u.d,B.bP,u.gc2u()),p=A.m(28)
p=A.au(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.ab(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.x.j(0.72)
v=A.m(16)
return A.cd(r,B.x,new A.am(B.W,t,B.b_,B.q,A.a([q,p,A.an(32,A.p(t,D.f0B,B.h,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iL,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGE.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mq.prototype={
S(){return new C.aBV(D.a63,A.a([],x.D))},
bn(){return this.r.$0()},
gdT(){return this.c}}
C.aBV.prototype={
gcs_(){return J.bAj(this.e,0,new C.evO())},
Z(){this.a0()
$.aT.c_$.push(this)
this.uQ()},
p(){$.aT.hE(this)
this.a2()},
iP(d){if(d===B.fv)this.uQ()},
uQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BO(q.a.c).cJ(0,B.k4),$async$uQ)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.evK(q,p))
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
if(q.c!=null&&q.f)q.n(new C.evL(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uQ,v)},
Gz(d){return this.bCK(d)},
bCJ(){return this.Gz(null)},
bCK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hQb(l,d),$async$Gz)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l4(l,r,q,D.cR9,new A.Q(Date.now(),0,!1))
w=4
return A.b(C.JI(t.a.c,p),$async$Gz)
case 4:o=f
w=5
return A.b(t.uQ(),$async$Gz)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.H(x.q).f.P(D.evK)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.H(q).f.P(D.ext)
else n.H(q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Df(m)
case 1:return A.h(u,v)}})
return A.i($async$Gz,v)},
Df(d){return this.c6o(d)},
c6o(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Df=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hm(s,new C.apL(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Df)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.JI(u.a.c,t),$async$Df)
case 5:case 4:w=6
return A.b(u.uQ(),$async$Df)
case 6:return A.h(null,v)}})
return A.i($async$Df,v)},
uE(d){return this.bS9(d)},
bS9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.byK(),$async$uE)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hm(r,D.aAX,!0,"NgmyWorksheetProjectScan",x.N),$async$uE)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bzc(q),$async$uE)
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
break}p=C.fJH(s)
w=15
return A.b(C.JI(t.a.c,p),$async$uE)
case 15:o=f
w=16
return A.b(t.uQ(),$async$uE)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.H(x.q).f.P(D.exy)
w=1
break}r.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Df(p)
case 1:return A.h(u,v)}})
return A.i($async$uE,v)},
Ma(d){return this.bBq(d)},
bBq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ma=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.evv(d),s,null,!0,!0,x.y),$async$Ma)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.of(t.a.c,A.a([],x.D)),$async$Ma)
case 6:w=7
return A.b(t.uQ(),$async$Ma)
case 7:s=t.c
if(s==null){w=1
break}s.H(x.q).f.P(D.evP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ma,v)},
c6B(d){var w=this.c
w.toString
A.c2(B.K,null,new C.evE(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b02(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jg
else w=B.c
v=A.m(16)
u=A.H(p?B.dU:B.c4,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aN:B.aF,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(r,A.v(A.a([s,B.ab,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bp:B.bv,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.um,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
YA(d,e){return this.c6p(d,e)},
c6p(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c2(B.K,null,new C.evz(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$YA)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h5N(r,new C.evA(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Mc(d,e),$async$YA)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$YA,v)},
aY7(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aE
else t=h.a?B.aN:B.aF
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bp:B.bv,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,u,!0,new A.C(B.zM,A.B(A.a([s,B.bd,t,A.V(B.em,w?B.bp:B.bv,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
cd4(d,e,f,g,h,i){return this.aY7(!1,d,e,f,g,h,i)},
Mc(d,e){return this.bBA(d,e)},
bBA(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kP(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Mc)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bxv(t.a.c,d.a),$async$Mc)
case 6:w=7
return A.b(t.uQ(),$async$Mc)
case 7:r=t.c
if(r==null){w=1
break}r.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Mc,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=new C.t6(o),m=o?B.bX:B.iX
if(q.f)o=D.aY3
else{w=q.bwa(n)
v=q.bRg(n)
u=q.gbtk()
if(o)t=B.jg
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ab,v,B.aO,new C.Eg(A.p(p,A.B(A.a([q.axD(Q.KR,"Projects",n,D.a63),q.axD(B.ux,"Cashier",n,D.aOc),q.axD(B.Eh,"Family Tree",n,D.fnV)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eh,0.95,u,p),B.bu],r)
w=q.d
if(w===D.a63){w=J.aa(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aN:B.aF,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b8,new C.auq(q.gaMp(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.cd6(n)],r))}else{o=q.a
if(w===D.aOc)u.push(new C.alR(o.c,n,p))
else{w=q.r
u.push(new C.amX(o.c,o.d,o.e,o.f,new C.evR(q),new C.evS(q),new A.cx(w,x.b4)))}}o=A.ci(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A8.Kf,p,p,B.ak)}return A.cd(p,m,A.bq(!0,o,!0,!1,B.aj,!0,!0),p,!1,!1,p,p)},
bwa(d){var w=null,v=A.m(8),u=d.a,t=A.V(O.WT,u?B.bp:B.bv,w,w,w,16)
return A.aI(!1,v,!0,new A.C(B.kY,A.B(A.a([t,B.bo,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bp:B.bv,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evs(this),w,w,w,w,w,w,w)},
gbtk(){switch(this.d.a){case 0:return D.a5m
case 1:return D.ff9
case 2:return D.a5n}},
bRg(d){var w=null,v=A.m(15),u=A.a([new A.ab(0,B.G,B.aS.j(0.35),B.cs,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bA0,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bmX,A.aD(!1,B.a1,!0,w,A.aI(!1,A.m(12),!0,A.p(w,D.bxA,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evw(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.Eg(A.p(w,A.v(A.a([new A.C(E.Vu,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.zK(this.gcs_()),w,w,w,w,w,w,D.eNt,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.ul,B.iL,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.aj,1,D.ff8,w)},
axD(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aS.j(0.42),B.cA,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bp:B.bv
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bp:B.bv
return A.D(A.aD(!1,B.a1,!0,u,A.aI(!1,s,!0,A.dj(u,A.B(A.a([w,B.ez,new A.dm(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b6,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.io,u,u,u,B.Ki,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.evN(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),1)},
cd6(d){var w,v,u,t,s,r,q=this,p=null
if(J.cj(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bxF,B.h,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aS.j(0.5),B.eP,28)],x.V),D.bIt,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aF,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Eg(A.p(p,A.v(A.a([t,B.d3,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bp:B.bv,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.B(A.a([A.D(q.aNT(B.iN,"Scan QR",new C.evH(q),d),1),B.ax,A.D(q.aNT(M.xh,"Upload file",new C.evI(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bL(D.fb0,q.gaMp(),A.bk(B.aS,p,p,p,B.c,B.fQ,p,p,new A.b6(A.m(12),B.X),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bjT,1.05,D.a5m,p)}w=J.b4(q.e,new C.evJ(q,d),x.l)
w=A.z(w,w.$ti.k("ai.E"))
return new C.Eg(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a5m,p)},
aNT(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(w,A.v(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eLU,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.acv,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)},
cd5(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dU:B.c4,B.r,1),p=A.a([new A.ab(0,B.G,B.x.j(t?0.35:0.08),B.e9,10)],x.V),o=A.m(14),n=t?B.bp:B.bv
n=A.bu(B.a6I,new A.fD(1.7777777777777777,C.aN6(!0,B.fn,1/0,Q.KR,n,d.c,1/0),u),B.ao)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aN:B.aF,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.zK(d.gw4()),u,u,u,u,u,u,D.eK3,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.a1,!0,u,A.aI(!1,o,!0,A.v(A.a([n,new A.C(B.bB,A.B(A.a([v,A.aF(u,u,u,u,A.V(A9.Lr,t?B.bp:B.bv,u,u,u,u),u,u,u,new C.evF(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.evG(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e0,u,u,u,1/0)}}
C.btA.prototype={}
C.qp.prototype={
ac(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcKq(){var w,v,u,t,s=this.c
if(s===B.k.jA(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.ae("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l4.prototype={
gw4(){return B.d.cG(this.d,0,new C.cqO())},
ac(){var w=this,v=w.d,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.cqN(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ab()],x.N,x.z)},
b6T(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l4(w.a,w.b,v,u,w.e)},
b6A(d){return this.b6T(d,null)},
QU(d){return this.b6T(null,d)}}
C.Gc.prototype={
a3(){return"FamilyGender."+this.b}}
C.hQ.prototype={
ac(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h1C(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aAb(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hQ(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aic.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kn.prototype={
galA(){var w=this.f
return new A.a4(w,new C.bJr(),A.U(w).k("a4<1>")).gJ(0)},
ac(){var w=this,v=w.f,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.bJq(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ab(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hGL(w.y)],x.N,x.z)},
xG(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kn(w.a,v,u,t,s,r,w.r,q,p,o)},
b6S(d,e){var w=null
return this.xG(w,w,d,e,w,w,w,w)},
cAw(d,e,f,g,h,i,j){return this.xG(d,e,f,g,h,i,j,null)},
aAg(d,e){var w=null
return this.xG(w,w,w,d,w,w,e,w)},
cz0(d){var w=null
return this.xG(w,w,w,w,w,w,d,w)},
czo(d){var w=null
return this.xG(w,w,w,w,w,w,w,d)},
aA2(d){var w=null
return this.xG(w,w,w,w,d,w,w,w)},
cA2(d,e,f){var w=null
return this.xG(w,d,w,e,w,w,f,w)},
cyO(d){var w=null
return this.xG(w,w,d,w,w,w,w,w)},
czB(d,e){var w=null
return this.xG(d,w,w,w,w,e,w,w)}}
C.cqP.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cqQ.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDW.prototype={}
C.b57.prototype={
by(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b57()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aW(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b56.prototype={
gvp(){return!0},
gEH(){return this.z.b<this.b.length},
aPs(d){switch(0){case 0:return d.a.c}},
aP9(d){switch(0){case 0:return d.a.d}},
bKO(d,e){switch(0){case 0:return new A.hA(d,e)}},
bKc(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fS(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iv(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FY(b4)
switch(0){case 0:v=b5.b
u=new A.kk(0,v,0,1/0)
t=w===B.QL
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fS(b4,u,!0)
f=b1.aPs(g)
f.toString
e=b1.aP9(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDW(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDW(k,j,i))}d=s.length
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
a8=b1.aPs(g)
e=b1.aP9(g)
e.toString
a9=b1.bKc(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bKO(a6,a3+a9)
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
Fb(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hR(){return this.z}}
C.brR.prototype={}
var z=a.updateTypes(["aw<~>()","S(hQ)","S(kn)","~()","S(mS)","a1<n,@>(kn)","I(kn,kn)","n(hQ)","kn(a1<@,@>)","S(l4)","S(tE)","mS(a1<@,@>)","tE()","I(l4,l4)","hQ(a1<@,@>)","a1<n,@>(hQ)","S(qp)","aw<~>(l4)","ep<n?>(hQ)","I(hQ,hQ)","n?(hQ)","a1<n,@>(mS)","Y_(X)","n(n)","aaU(X)","r(nR)","I(mS,mS)","hQ(hQ)","cG(br<n,Et>)","cG(Ix)","~(hQ)","I?(hQ)","hQ()","ak<hQ>()","S(tD)","S(Ix)","C(hQ)","~(Gc)","S(acp)","r(Gc,n,a0)","Xo(X)","br<n,ak<a1<n,@>>>(n,ak<mS>)","~(I)","+count,id,name(I,n,n)(kn)","kn(kn)","Yk(X)","Yl(X)","S(ll)","ll()","n(kn)","a_3(X)","WZ(X)","WY(X)","Xm(X)","Xq(X)","r(qp)","abe(X)","~(lI)","aw<~>([n?])","O(O,l4)","r(l4)","O(O,qp)","a1<n,@>(qp)","qp(a1<@,@>)","WX(X)","QW(X)","cp(Gb)","l4(a1<@,@>)","tD()","n(l4)","a1<n,@>(l4)","n(Q)","I(hQ)","kn(a1<n,@>)","Ww(X)"])
C.fil.prototype={
$1(d){return d.a+" "+d.b},
$S:118}
C.fik.prototype={
bfD(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qi(s,d,B.hc,E.DE),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.R(r!=null&&A.Jw(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bfD(d)},
$S:284}
C.fim.prototype={
$1(d){return d.b},
$S:118}
C.frk.prototype={
$1(d){var w=null
return A.ew(w,B.K,new F.NL(this.a,this.b,w),w,w,0,B.Vp,B.cZ,w,w,w)},
$S:46}
C.f8E.prototype={
$1(d){return d!=null},
$S:231}
C.f8F.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:231}
C.f8K.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:164}
C.fg4.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f1(d,w,w,w,A.fY(w,B.qM,w,w,w,w,w,w,w,B.dm,w,w,10.5,w,B.ed,w,!0,w,w,w,w),w),u=f?B.ed:B.us
return new A.nm(D.bfs,A.a7w(A.a([new A.fI(130,w,v),new A.y1(1,B.Ea,A.f1(e,w,w,w,A.fY(w,g==null?D.dRN:g,w,w,w,w,w,w,w,B.dm,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wh,B.l4))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1879}
C.fg3.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uM(999)
f=A.we(A.lf(h,A.f1("Cashier",h,h,h,A.fY(h,D.y7,h,h,h,h,h,h,h,B.dm,h,h,10,h,B.ed,h,!0,h,h,h,h),h),h,new A.kl(D.dRE,h,f,B.hu,h),h,h,D.bfU,h))
w=A.we(A.f1("Debt receipt",h,h,h,A.fY(h,h,h,h,h,h,h,h,h,B.dm,h,h,22,h,B.ed,h,!0,h,h,h,h),h))
v=A.we(A.f1(C.vZ(new A.Q(Date.now(),0,!1),!0),h,h,h,D.a4e,h))
u=A.uM(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f1(s,h,h,h,A.fY(h,h,h,h,h,h,h,h,h,B.dm,h,h,14,h,B.ed,h,!0,h,h,h,h),h)
r=A.f1("Person who owes",h,h,h,D.a4e,h)
q=A.uM(10)
p=x.C
u=A.lf(h,A.xY(A.a([s,new A.fI(h,2,h),r,new A.fI(h,10,h),A.lf(h,A.xY(A.a([A.f1("Amount owed",h,h,h,D.a4e,h),new A.fI(h,2,h),A.f1(A.zK(t.c),h,h,h,A.fY(h,D.y7,h,h,h,h,h,h,h,B.dm,h,h,20,h,B.ed,h,!0,h,h,h,h),h)],p),B.qc,B.l4),h,new A.kl(B.op,h,q,B.hu,h),h,h,D.bf9,1/0)],p),B.qc,B.l4),h,new A.kl(E.aBZ,h,u,B.hu,h),h,h,D.bgZ,1/0)
q=new A.n4(D.dRH,0.9,B.kn)
r=A.uM(12)
s=i.c
o=s.$2("Original due",C.vZ(t.r,!1))
n=s.$2("Current due",C.vZ(t.f,!1))
m=i.d
l=new A.n4(m,1.1,B.kn)
k=A.uM(8)
j=i.a
k=A.a([o,n,new A.fI(h,6,h),A.lf(h,A.we(A.f1(t.gaGO(),h,h,h,A.fY(h,m,h,h,h,h,h,h,h,B.dm,h,h,11,h,B.ed,h,!0,0.5,h,h,h),h)),h,new A.kl(h,new A.p2(l,l,l,l),k,B.hu,h),h,h,D.bg3,1/0),new A.fI(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.y7))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.y7))
else{n=A.f1("Missed days ("+n+")",h,h,h,A.fY(h,B.qM,h,h,h,h,h,h,h,B.dm,h,h,10.5,h,B.ed,h,!0,h,h,h,h),h)
m=A.U(o).k("J<1,Qv>")
o=A.z(new A.J(o,new C.fg2(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fI(h,4,h),n,new A.fI(h,6,h),new C.b56(5,5,new C.b57(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fI(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fI(h,8,h),w,new A.fI(h,3,h),v,new A.fI(h,16,h),u,new A.fI(h,10,h),A.lf(h,A.xY(k,B.wh,B.l4),h,new A.kl(h,new A.p2(q,q,q,q),r,B.hu,h),h,h,B.acE,1/0)],p)
w=j.a
if(w!=null){v=new A.n4(B.GD,1,B.kn)
B.d.v(f,A.a([new A.fI(h,16,h),A.f1("Debtor signature",h,h,h,A.fY(h,B.qM,h,h,h,h,h,h,h,B.dm,h,h,10,h,B.ed,h,!0,h,h,h,h),h),new A.fI(h,6,h),A.lf(h,new A.Gr(w,B.SM,h,h),h,new A.kl(h,new A.p2(v,v,v,v),A.uM(6),B.hu,h),82,h,B.Kk,1/0)],p))}f.push(new A.fI(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f1(w,h,h,h,D.eDg,h))
f.push(new A.fI(h,18,h))
f.push(A.we(A.f1("NGMY.ORG",h,h,h,A.fY(h,D.y7,h,h,h,h,h,h,h,B.dm,h,h,14,h,B.ed,h,!0,1.8,h,h,h),h)))
return f},
$S:415}
C.fg2.prototype={
$1(d){var w=null,v=new A.n4(D.GE,0.7,B.kn),u=A.uM(999)
return A.lf(w,A.f1(C.vZ(d,!1),w,w,w,A.fY(w,D.GE,w,w,w,w,w,w,w,B.dm,w,w,9.5,w,B.ed,w,!0,w,w,w,w),w),w,new A.kl(w,new A.p2(v,v,v,v),u,B.hu,w),w,w,D.bld,w)},
$S:1880}
C.bXY.prototype={
$1(d){var w=null,v=B.bQ.j(0.08),u=A.m(999),t=A.H(B.bQ.j(0.28),B.r,1)
return A.p(w,A.d(C.vZ(d,!1),w,w,w,w,w,w,D.eJy,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ex,w,w,w)},
$S:1881}
C.frQ.prototype={
$1(d){var w=null,v=A.aG(d,B.bR,x.w).w,u=A.m(26),t=A.aF(w,w,w,w,B.aiy,w,w,w,new C.frN(d),w,w,w,w,w,B.c8),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ew(w,B.K,new A.d2(new A.aX(0,380,0,v.a.b*0.9),A.aD(!1,B.a1,!0,u,new A.C(B.Vf,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dm(1,B.ci,A.ci(A.v(A.a([new A.en(new C.aVi(r,w),s),B.T,A.B(A.a([A.D(A.ez(B.xs,D.f7y,new C.frO(s,r,d),A.db(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eY,w,new A.b6(A.m(14),B.X),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.D(A.dq(B.Yt,D.f4r,new C.frP(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eY,w,new A.b6(A.m(14),B.X),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.z,w,w,w,w,B.ak),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.h,B.aF,0,w,w,w,w,w,B.ac),w),w,w,0,Ad.VD,B.cZ,w,w,w)},
$S:46}
C.frN.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.frO.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ag$.x.h(0,t.a)
m=m==null?null:m.gb6()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lQ(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fN),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f3(B.dD.gaN(s))
m=t.b
q=B.a.i(m.b)
p=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.am(o,0,32)
w=5
return A.b(A.rh(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.frP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fmF(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.H(x.q).f
s.P(A.b0(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.frI.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ew(w,B.aF,A.v(A.a([new A.C(D.bgN,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.mX,w,w,w),1),A.aF(w,w,w,w,B.l2,w,w,w,new C.frG(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.ci,new A.C(B.is,A.bu(A.m(14),A.fF(t,B.A,w,w,B.cl,B.dq,!1,w,!1,w,w),B.ao),w),w),new A.C(B.JY,new A.a5(1/0,w,A.dq(B.oh,D.aLp,new C.frH(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b6(A.m(14),B.X),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.K9,B.cZ,w,new A.b6(v,B.X),w)},
$S:46}
C.frG.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.frH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rh(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.frU.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ew(w,B.aF,new A.C(D.bgV,A.v(A.a([A.B(A.a([D.bma,A.aF(w,w,w,w,B.l2,w,w,w,new C.frS(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.en(A.bu(A.m(14),A.p(w,A.b2(w,w,w,new C.b7e(s.ax,w),B.at),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ao),t),B.ab,new A.a5(1/0,w,A.dq(B.oh,D.aLp,new C.frT(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b6(A.m(14),B.X),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b6(v,B.X),w)},
$S:46}
C.frS.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.frT.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ag$.x.h(0,t.a)
n=n==null?null:n.gb6()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lQ(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fN),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.am(p,0,32)
r=J.f3(B.dD.gaN(s))
w=5
return A.b(A.rh(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fbp.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dyE.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dyp.prototype={
beR(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c2(t,null,new C.dys(s,q,e),p,!0,!0,!1,B.GT,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dyt(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.beR(d,e)},
$S:1882}
C.dys.prototype={
$1(d){var w,v=null,u=this.c===B.v2,t=u?D.cWB:D.cTc
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aN:B.aF,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bq(!0,new A.C(L.adc,A.v(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bp:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab,A.ih(!0,v,v,B.z,K.aIF,new C.dyr(this.a,w,t,d),t.length,v,B.dL,B.ak,!0)],x.p),B.ag,v,B.e,B.Q,0,B.p),v),!0,!1,B.aj,!0,!0)},
$S:34}
C.dyr.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aN
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bp:B.bv).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aI(!1,p,!0,A.p(B.A,C.aVh(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dyq(t.d,r),s,s,s,s,s,s,s)},
$S:189}
C.dyq.prototype={
$0(){A.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.dyt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dyn.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:93}
C.dyo.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cF(B.co,e,v)
return new A.cW(e,!1,A.im(B.A,A.au(A.aD(!1,B.a1,!0,v,new A.ed(new C.dym(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bd(t,new A.bl(0.96,1,u),u.k("bd<bD.T>"))),v)},
$S:29}
C.dym.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bR,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bp:B.bv).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aI(!1,v,!0,new A.C(B.eh,A.V(B.ct,i.a.d.a?B.bp:B.bv,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dy7(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aOp("Name")
r=l.a
q=r.d==null?k:new C.dy8(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lS
n=A.H(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6L(new A.C(B.hm,A.aI(!1,p,!0,A.p(B.A,C.aVh(m==null?"\ud83d\udc64":A.fgT(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ah,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kh,k,B.a3W,k,k)
v=A.a([v,B.ab,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bp:B.bv,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aP_("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dy9(r,a0),r.d===B.v2),1),B.aa,A.D(i.aP_("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dye(r,a0),r.d===B.a0T),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hh(D.bzi,D.f65,new C.dyf(r,l.e,a0),A.fo(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c8)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tG(A.ae("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aOq("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ah,k,k,s,k,k,B.dX,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aN
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bp:B.bv).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bp:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vZ(r.a,!1)
v.push(A.aD(!1,B.a1,!0,q,A.aI(!1,p,!0,A.p(k,A.B(A.a([A.D(A.v(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bwc],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dyg(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bp:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aOp("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ah,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ab)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aF,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bp:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aWw(r.b.length!==0,B.m_,new C.dyh(r,i,a0),new C.dyi(r,a0),"Upload from gallery","ID photo"))
v.push(i.aWw(r.c.length!==0,D.bpB,new C.dyj(r,i,d,a0),new C.dyk(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a5u("Signature (optional)",t,new C.dyl(a0),new C.dya(a0,t),new C.dyb(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bp:B.bv
s=(i?B.bp:B.bv).j(0.28)
s=A.D(A.dV(E.aLj,new C.dyc(d),A.db(k,k,k,k,k,k,k,k,k,t,k,k,B.ws,k,new A.b6(A.m(10),B.X),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.ws,k,new A.b6(A.m(10),B.X),k,k,k)
v.push(A.B(A.a([s,B.aa,A.D(A.bL(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tK,k,k,k),new C.dyd(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ci(A.v(v,B.ag,k,B.e,B.Q,0,B.p),B.q,k,B.z,k,k,k,k,B.ak),B.h,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uo,B.iL,k,k,360)},
$S:163}
C.dy7.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dy8.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dy9.prototype={
$0(){return this.b.$1(new C.dy6(this.a))},
$S:0}
C.dy6.prototype={
$0(){var w=this.a
w.d=B.v2
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dye.prototype={
$0(){return this.b.$1(new C.dy5(this.a))},
$S:0}
C.dy5.prototype={
$0(){var w=this.a
w.d=B.a0T
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dyf.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dyg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xM(null,u.b,A.bW(2020,1,1,0,0,0,0,0),null,s,A.bW(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dy4(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dy4.prototype={
$0(){var w=this.b
return this.a.a=A.bW(w.gcd(),w.gcb(),w.gcr(),0,0,0,0,0)},
$S:0}
C.dyh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NH(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dy3(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dy3.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dyi.prototype={
$0(){return this.b.$1(new C.dy2(this.a))},
$S:0}
C.dy2.prototype={
$0(){return this.a.b=""},
$S:0}
C.dyj.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c2(q,null,new C.dy0(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NH(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dy1(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dy0.prototype={
$1(d){var w=null
return A.bq(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ai5,w,w,w,w,new C.dxV(d),!1,w,w,w,w,w,w,w,D.eYi,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ai3,w,w,w,w,new C.dxW(d),!1,w,w,w,w,w,w,w,D.f3y,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.aj,!0,!0)},
$S:34}
C.dxV.prototype={
$0(){A.a8(this.a,!1).M("camera")
return null},
$S:0}
C.dxW.prototype={
$0(){A.a8(this.a,!1).M("gallery")
return null},
$S:0}
C.dy1.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dyk.prototype={
$0(){return this.b.$1(new C.dy_(this.a))},
$S:0}
C.dy_.prototype={
$0(){return this.a.c=""},
$S:0}
C.dyl.prototype={
$0(){return this.a.$1(new C.dxZ())},
$S:0}
C.dxZ.prototype={
$0(){},
$S:0}
C.dya.prototype={
$0(){return this.a.$1(new C.dxY(this.b))},
$S:0}
C.dxY.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dyb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.afh(u.a,null,null,new C.dxX(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxX.prototype={
$4(d,e,f,g){this.a.$1(new C.dxU(this.b,d))},
$S:453}
C.dxU.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.v(w,this.b)},
$S:0}
C.dyc.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dyd.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.H(x.q).f.P(D.ezp)
return}if(w.a.d==null){w.c.H(x.q).f.P(D.ewl)
return}A.a8(w.c,!1).M(!0)},
$S:0}
C.dyH.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:93}
C.dyI.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bp:B.bv).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aN:B.aF,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zK(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bp:B.bv,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y6(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y6(r).length>0?B.bQ:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bp:B.bv
t=(q?B.bp:B.bv).j(0.28)
s=x.p
return new A.cW(e,!1,A.au(A.aD(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dV(B.n_,new C.dyF(d),A.db(r,r,r,r,r,r,r,r,r,w,r,r,B.jG,r,new A.b6(A.m(10),B.X),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.D(A.bL(D.f3X,new C.dyG(d),A.bk(B.cY,r,r,r,B.c,r,B.jG,r,new A.b6(A.m(10),B.X),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ag,r,B.e,B.Q,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zR,E.Vu,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:29}
C.dyF.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dyG.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dyB.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dyC(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bp:B.bv).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aN:B.aF,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zK(l.c),s,s,s,s,s,s,D.eL0,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jn((r.a.d.a?B.bp:B.bv).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Xd,"View receipt",new C.dyu(r,d,l))
u=l.x!=null
t=u?B.uM:B.p8
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bgS,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dyv(r,d,l)),q.$3$icon$label$onTap(B.A7,"Edit",new C.dyw(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.m_,"View / download ID",new C.dyx(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bpA,"View / download selfie",new C.dyy(r,d,l)))
if(l.gaBQ())p.push(q.$3$icon$label$onTap(A2.Yk,"View / download signature",new C.dyz(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bQ,B.e6,"Delete",new C.dyA(r,d,l)))
p.push(B.av)
return A.bq(!0,new A.C(B.ul,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.aj,!0,!0)},
$S:34}
C.dyC.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aN:B.aF
else w=d
return A.aI(!1,v,!0,new A.C(B.eM,A.B(A.a([A.V(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1883}
C.dyu.prototype={
$0(){A.a8(this.b,!1).M(null)
var w=this.a.c
w.toString
C.frM(w,this.c)},
$S:0}
C.dyv.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.Qg(this.c)},
$S:0}
C.dyw.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.BY(this.c)},
$S:0}
C.dyx.prototype={
$0(){var w,v,u
A.a8(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzz(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dyy.prototype={
$0(){var w,v,u
A.a8(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzz(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dyz.prototype={
$0(){A.a8(this.b,!1).M(null)
var w=this.a.c
w.toString
C.frR(w,this.c)},
$S:0}
C.dyA.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.Mn(0,this.c)},
$S:0}
C.dyJ.prototype={
$1(d){return d.x==null},
$S:261}
C.dyK.prototype={
$1(d){return d.x!=null},
$S:261}
C.dyL.prototype={
$2(d,e){return d+e.c},
$S:1884}
C.dyM.prototype={
$0(){return this.a.btN()},
$S:0}
C.dyD.prototype={
$0(){return this.a.ac6(this.b)},
$S:0}
C.fbN.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fbO.prototype={
$0(){return B.d.gL(D.Zw)},
$S:z+68}
C.d_6.prototype={
$0(){var w=this.a
return w.n(new C.d_4(w,this.b))},
$S:0}
C.d_4.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d_5.prototype={
$0(){},
$S:0}
C.d_7.prototype={
$0(){var w=this.a.gbRY()
A.a8(this.b,!1).M(w)
return null},
$S:0}
C.fdE.prototype={
$1(d){return C.fNI(A.a_(d,x.N,x.z))},
$S:z+11}
C.fdF.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fdG.prototype={
$2(d,e){var w=A.c4(d.a,null),v=A.c4(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+26}
C.fqt.prototype={
$1(d){return d.ac()},
$S:z+21}
C.fy9.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fbg.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bJm.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eR(e,v)?v:null},
$S:1885}
C.fqZ.prototype={
$1(d){var w=this
return new C.Xo(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d_M.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d_L(w,d))},
$S:z+66}
C.d_L.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_A.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.ct(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.d_x.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d_8.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d_9.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d_B.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d_h.prototype={
$1(d){var w=null,v=A.M(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aF,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bp:B.bv,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eo(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.d_f(d),w,w),A.bL(B.vp,new C.d_g(d),A.bk(B.mq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d_f.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.d_g.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.d_i.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d_y.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d_z.prototype={
$0(){return B.d.gL(D.xC)},
$S:z+12}
C.d_d.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxm(0),t=J.aa(w.d)
w=J.aa(w.d)===1?"page":"pages"
return new C.QW(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d_e.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_j.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WX(v,u,J.aa(w.d),null)},
$S:z+64}
C.d_k.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_K.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aH(s,new C.WF(r.y,r.gxm(0),J.aa(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d_I(r),s,s,s,s,s,s,!1,B.ad)
else{w=e-1
v=J.q(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6D(v,e,w,u,t,r.gbJl(),C.h1B(r.y.Q),r.gxm(0),s)
w=t}return A.c3(q,new C.d_J(r,e),new A.C(B.Vw,w,s))},
$S:1886}
C.d_J.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcV(t).ay){t=this.b
u=x.cy.a(B.d.gcV(u.f.f)).gtV(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.di()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fl(v*3.141592653589793*0.5)
return A.fp(B.a3,A.d8(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.d_I.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCU(B.oY,B.ip)},
$S:0}
C.d_u.prototype={
$0(){var w=this.a
return w.n(new C.d_t(w))},
$S:0}
C.d_t.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d_v.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).M(null)
return null},
$S:0}
C.d_a.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jy.j(0.5),r=x.p,q=A.a([D.eX0,B.ab],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cj(p.d)?"Write this book":"Write a new book"
q.push(p.WR(d,B.dP,w,J.cj(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WR(d,K.ag4,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.ct(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cL,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cL,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WR(d,Z.ah8,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WR(d,B.pe,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WR(d,B.pe,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ew(u,E.zi,A.bq(!0,new A.C(A1.DR,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.aj,!0,!0),u,u,u,D.adC,B.cZ,u,new A.b6(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.d_w.prototype={
$0(){A.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.d_n.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.ct(w.d)
return new C.Xq(v,J.ct(w.d),w.r+1,null)},
$S:z+54}
C.d_o.prototype={
$1(d){var w=null
return A.nX(!1,A.eo(w,w,w,E.zi,new A.k3(this.a,new C.d_m(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:313}
C.d_m.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3C,B.nK,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:582}
C.d_p.prototype={
$0(){return this.a.a=!1},
$S:48}
C.d_q.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:185}
C.d_r.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zT(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.PN(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.d_l(s,t))
w=4
return A.b(s.kv(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_l.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_D.prototype={
$1(d){var w=null
return A.nX(!1,A.eo(w,w,w,E.zi,new A.k3(this.a,new C.d_C(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:313}
C.d_C.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3C,B.nK,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:582}
C.d_E.prototype={
$0(){return this.a.a=!1},
$S:48}
C.d_F.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:185}
C.d_G.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:185}
C.d_H.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zT(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kv(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_b.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bc6(B.oY,T.JN)},
$S:0}
C.d_c.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCU(B.oY,T.JN)},
$S:0}
C.d1c.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.d1d.prototype={
$1(d){var w=this.a
return w.n(new C.d1b(w))},
$S:9}
C.d1b.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d1e.prototype={
$1(d){var w=this.a
return w.n(new C.d1a(w))},
$S:9}
C.d1a.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d1f.prototype={
$1(d){var w=this.a
return w.n(new C.d19(w))},
$S:9}
C.d19.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d1g.prototype={
$0(){var w=this.a
return w.n(new C.d18(w,this.b))},
$S:0}
C.d18.prototype={
$0(){var w=this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.d1h.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_n()
A.a8(this.b,!1).M(new A.bl0(w,v))},
$S:0}
C.d00.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d0_.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Xm(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d04.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d03.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b2w(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hs,v,v,v)
return A.eo(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.d01(d),v,v),A.bL(B.vp,new C.d02(d),A.bk(B.mq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zi,w,v,v,v,v,D.eVY,v)},
$S:20}
C.d01.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.d02.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.d05.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.d06.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ci(A.c8(B.bJ,r,B.bx,18,14),B.q,t,B.z,t,D.bhP,t,t,B.ak)},
$S:314}
C.d_Z.prototype={
$0(){return this.a.Ok(0,this.b)},
$S:0}
C.d_Y.prototype={
$0(){return this.a.NO(0,this.b)},
$S:0}
C.czx.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.czy.prototype={
$0(){return B.d.gL(D.xC)},
$S:z+12}
C.czz.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bX(0,new A.C(d,A.bT(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.bb),w),0,0,0)},
$S:1888}
C.cSZ.prototype={
$1(d){return this.a.n(new C.cSY(this.b,this.c))},
$S:9}
C.cSY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cTn.prototype={
$1(d){return this.a.n(new C.cTa())},
$S:2}
C.cTa.prototype={
$0(){},
$S:0}
C.cTo.prototype={
$1(d){return this.a.n(new C.cT9())},
$S:2}
C.cT9.prototype={
$0(){},
$S:0}
C.cTp.prototype={
$0(){var w=this.a
return w.n(new C.cT8(w,this.b))},
$S:0}
C.cT8.prototype={
$0(){var w=this.a
return w.d=w.gnu().En(this.b.a)},
$S:0}
C.cTq.prototype={
$0(){var w=this.a
return w.n(new C.cT7(w,this.b))},
$S:0}
C.cT7.prototype={
$0(){var w=this.a
return w.d=w.gnu().cyk(this.b)},
$S:0}
C.cTr.prototype={
$1(d){return this.a.n(new C.cT6())},
$S:2}
C.cT6.prototype={
$0(){},
$S:0}
C.cTs.prototype={
$0(){var w=this.a
return w.n(new C.cT5(w,this.b))},
$S:0}
C.cT5.prototype={
$0(){var w=this.a
return w.d=w.gnu().cyp(this.b.a)},
$S:0}
C.cTt.prototype={
$1(d){var w=this.a
return w.n(new C.cTi(w,d))},
$S:6}
C.cTi.prototype={
$0(){var w=this.a
return w.d=w.gnu().czj(this.b)},
$S:0}
C.cTu.prototype={
$1(d){var w=this.a
return w.d=w.gnu().aA5(d)},
$S:2}
C.cTv.prototype={
$1(d){var w=this.a
return w.d=w.gnu().cys(d)},
$S:2}
C.cTx.prototype={
$1(d){var w=this.a
return w.d=w.gnu().czh(d)},
$S:2}
C.cTy.prototype={
$1(d){var w=this.a
return w.n(new C.cTh(w,d))},
$S:9}
C.cTh.prototype={
$0(){var w=this.a
return w.d=w.gnu().cz8(this.b)},
$S:0}
C.cTz.prototype={
$0(){var w=this.a,v=w.gnu(),u=B.a.i(w.gxm(0).a.a),t=B.a.i(w.gaxr().a.a)
u=v.b71(B.a.i(w.ganB().a.a),t,u)
A.a8(this.b,!1).M(u)
return null},
$S:0}
C.dLE.prototype={
$0(){var w=this.a
w.v1()
w.a.bn()
w.a.p5()},
$S:0}
C.dLD.prototype={
$0(){var w=this.a
w.v1()
w.a.bn()
w.a.p5()},
$S:0}
C.dLG.prototype={
$0(){var w=this,v=w.b
if(J.ct(v)||J.cj(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dLH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLI.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dLC.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dLF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dLK.prototype={
$0(){this.a.MT()
return null},
$S:0}
C.dLJ.prototype={
$0(){return this.a.Dg(this.b)},
$S:0}
C.dL4.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.df,w,w,!0,w,w,new C.dL2(d),w,w),r=A.bk(B.bV,w,w,w,w,w,w,w,w,w,w,w)
return A.eo(A.a([s,A.bL(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dL3(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dL2.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dL3.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dL5.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cyO(this.b)},
$S:0}
C.dL_.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOF(w.b,w.c,w.d)},
$S:8}
C.dKy.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dKz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Fb(t.a.c),$async$$0)
case 2:s=r.qE(q.dE(e,new C.dKL(t)))
if(s!=null&&t.c!=null)t.n(new C.dKM(t,s))
t.a.bn()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKL.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dKM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKO.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dKP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKZ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.czB(C.h1L(w),w)},
$S:0}
C.dKX.prototype={
$1(d){return new A.ed(new C.dKW(this.a,this.b),null)},
$S:21}
C.dKW.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aF,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bp:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahK,v,v,v,p>0?new C.dKS(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aF,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.aii,v,v,v,new C.dKT(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eo(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dKU(d),v,v),A.bL(B.pE,new C.dKV(d),A.bk(B.bV,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:157}
C.dKS.prototype={
$0(){return this.b.$1(new C.dKR(this.a))},
$S:0}
C.dKR.prototype={
$0(){return--this.a.a},
$S:0}
C.dKT.prototype={
$0(){return this.b.$1(new C.dKQ(this.a))},
$S:0}
C.dKQ.prototype={
$0(){return++this.a.a},
$S:0}
C.dKU.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dKV.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dKY.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.czo(this.a.a)
w.r.a7(0)},
$S:0}
C.dKm.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.afn(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fWD(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dKn.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.f,x.P)
w.push(this.b)
v.d=u.aA2(w)},
$S:0}
C.dL7.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaU(this.b,w,this.c,null)},
$S:z+24}
C.dL1.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.l_,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aF,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bp:B.bv,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ab,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bp:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eo(A.a([A.bL(D.f4Z,new C.dL0(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b6,w,u,v,w,s,w,new A.b6(t,B.X),r,w)},
$S:20}
C.dL0.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dKo.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dKp.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dKq.prototype={
$1(d){return d.a},
$S:z+7}
C.dKr.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hQ(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aA2(w)},
$S:0}
C.dKv.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.afn(q)
w=A.U(q).k("a4<1>")
q=A.z(new A.a4(q,new C.dKt(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fWD(v.e,null,r,v.f,v.r,new C.dKu(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dKu.prototype={
$0(){return this.a.a7p(this.b)},
$S:0}
C.dKt.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dKw.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("J<1,hQ>")
w=A.z(new A.J(w,new C.dKs(this.b),v),v.k("ai.E"))
u.d=t.aA2(w)},
$S:0}
C.dKs.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dL6.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dKI.prototype={
$1(d){return d.length!==0},
$S:3}
C.dKJ.prototype={
$1(d){var w=this
return new A.ed(new C.dKH(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dKH.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aF,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bp:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bp:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dKD(u,e,o),A.U(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(12),B.dd),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ah,v,v,v,v,v,B.lG,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.ag,v,B.e,B.Q,0,B.p)
t=w.a
return A.eo(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dKE(d),v,v),A.bL(B.Hz,new C.dKF(t,u,o,e),A.bk(B.bV,v,v,v,v,v,v,v,v,v,v,v)),A.bL(D.eUc,new C.dKG(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:157}
C.dKD.prototype={
$1(d){var w=null
return A.dL(!1,B.aj,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aN:B.aF,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bCL,w,w,w,new C.dKC(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1889}
C.dKC.prototype={
$0(){return this.a.$1(new C.dKA(this.b,this.c))},
$S:0}
C.dKA.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dKE.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dKF.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dKB(w.c,u))
v.bJ(0,B.c0)}},
$S:0}
C.dKB.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dKG.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).M(!0)},
$S:0}
C.dKK.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cA2(this.b,D.rP,C.F9(v,w.a.c))},
$S:0}
C.dLe.prototype={
$1(d){return d.as},
$S:z+1}
C.dLf.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iG(this.b,w)},
$S:0}
C.dLg.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hPT(v)
return w.TR(v==null?null:v.a)},
$S:0}
C.dLh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hsR(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gci(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.ciG(new A.ar(u,t),v.gbcU(),new A.ar(k,s))}k=A.m(22)
s=this.b.a
r=s?D.czP:D.cym
q=A.H(s?B.dw:D.b1Z,B.r,1)
p=A.m(22)
o=A.bX(0,A.b2(m,m,m,new C.b9Y(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.am(B.W,m,B.a9,B.q,A.a([o,A.bX(0,A.tP(new A.N(n,n,n,n),new A.a5(u,t,new C.baQ(l.d,v,l.f,w,new C.dLa(l),l.gc39(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.brY(s,new C.dLb(l,e),new C.dLc(l,e),new C.dLd(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ao),B.h,m,m,new A.o(m,m,q,k,m,new A.a3(B.aY,B.b1,B.w,r,m,m),B.n),m,m,m,P.acI,m,m,m,m)},
$S:203}
C.dLa.prototype={
$1(d){var w=this.a
w.n(new C.dL8(w,d))},
$S:2}
C.dL8.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.K(0,v)},
$S:0}
C.dLb.prototype={
$0(){var w=this.b
return this.a.b4K(1.25,new A.ar(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dLc.prototype={
$0(){var w=this.b
return this.a.b4K(0.8,new A.ar(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dLd.prototype={
$0(){var w=this,v=w.b
return w.a.aOF(new A.ar(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbcU())},
$S:0}
C.dLi.prototype={
$0(){var w=this.a
return w.n(new C.dL9(w))},
$S:0}
C.dL9.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dKx.prototype={
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
C.d0a.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.bex(u,C.h5Q(v.c,u),new C.d09(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d09.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d0b.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhP(d.d,d.c,u.f.t(0,d.a),new C.d08(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d08.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fbR.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.U(v)
return A.qE(new A.cT(new A.a4(v,new C.fbS(d),w.k("a4<1>")),new C.fbT(),w.k("cT<1,n>")))},
$S:z+20}
C.fbS.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fbT.prototype={
$1(d){return d.a},
$S:z+7}
C.fbP.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fbQ.prototype={
$1(d){return d.b},
$S:z+7}
C.fbW.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.U(v)
return A.qE(new A.cT(new A.a4(v,new C.fbX(d),w.k("a4<1>")),new C.fbY(),w.k("cT<1,n>")))},
$S:z+20}
C.fbX.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fbY.prototype={
$1(d){return d.a},
$S:z+7}
C.fbU.prototype={
$1(d){var w,v=A.eN([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.an(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fbV.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d0d.prototype={
$0(){return this.a},
$S:z+32}
C.d0u.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.an(0,d)},
$S:260}
C.d0m.prototype={
$2(d,e){var w=this.a.ce(0,d,new C.d0n()),v=J.a7(w)
if(!v.t(w,e))v.K(w,e)},
$S:122}
C.d0n.prototype={
$0(){return A.a([],x.s)},
$S:576}
C.d0l.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eR(w,e)
return w===!0},
$S:295}
C.d0e.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d0k.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d0j.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.AP:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.AP:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1891}
C.d0f.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d0o.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.m(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.U:u)
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
t=J.aV(t==null?D.AP:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.ba(w,new C.d0p(r)))w.push(r)}}B.d.bm(w,new C.d0q(a8))
B.d.aZ(w,new C.d0r())
q=C.hsQ(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.ecC],x.G))}a8=A.a([],x.s)
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
else a8.m(0,a9,new A.bkL(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.A(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.A(a5,a6))}}return a1},
$S:1892}
C.d0p.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d0q.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d0r.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.d0s.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bg(v,A.a2(v).k("bg<2>")).cG(0,0,B.pR)+88-w.gL(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:553}
C.d0t.prototype={
$1(d){return 16+d*156},
$S:259}
C.d0c.prototype={
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
t.m(0,d,new C.Et(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Et(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Et(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ix(d,new A.u(e+t,w),s,s.length))}},
$S:185}
C.d0g.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFX(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:122}
C.d0h.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d0i.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:569}
C.d0v.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:569}
C.d0w.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:462}
C.d0x.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:195}
C.d0y.prototype={
$1(d){return d>=0.5},
$S:135}
C.eWv.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hq(A.aI(!1,v,!0,new A.a5(38,38,A.V(d,this.a.c?B.c:B.cK,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1894}
C.eya.prototype={
$1(d){var w=null,v=A.m(8),u=B.bV.j(0.12),t=A.m(8)
return new A.C(B.o6,A.aI(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eGV,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Kj,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ey9(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.ey9.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dfM.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dfL.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mW,B.L,w,w)
return A.eo(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.dfJ(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lQ,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dfK(d),w,w)],x.p),B.b6,B.DL,w,u,D.bj4,w,D.bkZ,new A.b6(v,B.X),w,w)},
$S:20}
C.dfJ.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dfK.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dfV.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dfW.prototype={
$1(d){var w=this.a
return w.n(new C.dfU(w,d))},
$S:z+37}
C.dfU.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfX.prototype={
$1(d){var w=null
return A.pa(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dg_.prototype={
$1(d){var w=this.a
return w.n(new C.dfT(w,d))},
$S:32}
C.dfT.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dfZ.prototype={
$1(d){var w=null
return A.pa(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dg0.prototype={
$1(d){var w=this.a
return w.n(new C.dfS(w,d))},
$S:32}
C.dfS.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dg1.prototype={
$0(){var w=this.a
return w.n(new C.dfR(w))},
$S:0}
C.dfR.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dg2.prototype={
$0(){var w=this.a
return w.n(new C.dfQ(w))},
$S:0}
C.dfQ.prototype={
$0(){return++this.a.at},
$S:0}
C.dg3.prototype={
$0(){var w=this.a
return w.n(new C.dfP(w))},
$S:0}
C.dfP.prototype={
$0(){return--this.a.ax},
$S:0}
C.dg4.prototype={
$0(){var w=this.a
return w.n(new C.dfO(w))},
$S:0}
C.dfO.prototype={
$0(){return++this.a.ax},
$S:0}
C.dg5.prototype={
$1(d){var w=this.a
return w.n(new C.dfN(w,d))},
$S:9}
C.dfN.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dfY.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dg6.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bV.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bV
else u=(q.c.a?B.dU:B.c4).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bV
else t=q.c.a?B.bp:B.bv
t=A.V(f,t,r,r,r,18)
if(p)s=B.bV
else s=q.c.a?B.bp:B.bv
return A.D(A.aD(!1,B.a1,!0,r,A.aI(!1,o,!0,A.dj(r,A.v(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b9,new A.o(w,r,u,v,r,r,B.n),B.eK,r,r,r,B.jG,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dg7(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+39}
C.dg7.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dgg.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.c3u.prototype={
$2(d,e){return new A.br(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:89}
C.c3B.prototype={
$1(d){return d.ac()},
$S:z+5}
C.c3C.prototype={
$2(d,e){var w=J.b4(e,new C.c3A(),x.a)
w=A.z(w,w.$ti.k("ai.E"))
return new A.br(d,w,x.d2)},
$S:z+41}
C.c3A.prototype={
$1(d){return d.ac()},
$S:z+21}
C.c3w.prototype={
$1(d){return C.aid(A.a_(d,x.N,x.z))},
$S:z+8}
C.c3x.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c3y.prototype={
$1(d){return C.fNI(A.a_(d,x.N,x.z))},
$S:z+11}
C.c3z.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c3G.prototype={
$1(d){return new A.aD1(d.f.length,d.a,d.b)},
$S:z+43}
C.c3H.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:613}
C.c3D.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c3E.prototype={
$1(d){return d.cz0(C.F9(d,this.a))},
$S:z+44}
C.dLr.prototype={
$1(d){return C.tk(d,this.a.a.c)},
$S:z+2}
C.dLs.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dLw.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dLx.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dLo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWL(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xn("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oC(r.c,r.e),$async$$0)
case 4:s.xn(p)
w=5
return A.b(s.I6(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWL(r.d,q,r.e,t.b),$async$$0)
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
C.dLq.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Tf(n.d,m,n.e,r.b),$async$$0)
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
return A.b(o.I6(),$async$$0)
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
C.dLv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWK(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xn("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).cp(A.eD(new C.dLu(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oC(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLu.prototype={
$1(d){var w=this.b
return new C.Yk(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dLt.prototype={
$1(d){return D.fiz},
$S:z+46}
C.dLz.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dLA.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dLy(w,d)
return new A.C(B.d9,new C.baU(this.b,d.c,d.a,w,null),null)},
$S:1895}
C.dLy.prototype={
$0(){return this.a.Vx(this.b.b)},
$S:0}
C.dLj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dLk.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dLl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dLm.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dLn.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dLB.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dp(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).M(s)
return}},
$S:175}
C.dxM.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dxN.prototype={
$0(){return B.d.gL(D.a_R)},
$S:z+48}
C.dxO.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.au(A.V(this.b.d,B.c.j(0.95),w,w,D.cFF,44),w,w,w),w,w,new C.bfE(u,t,v,w),B.at)},
$S:71}
C.frr.prototype={
$1(d){return A.p9(new C.frq(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:126}
C.frq.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.ab(0,B.G,B.x.j(r?0.35:0.08),B.tv,24)],x.V),o=r?B.dU:B.c4
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bV.j(0.18)],x.O)
w=A.p(t,D.bxp,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a3(B.a3,B.a7,B.w,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aN:B.aF,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.T,o,new A.C(E.adG,A.B(A.a([w,B.bd,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bp:B.bv,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ih(!0,t,e,B.z,D.euy,new C.frp(this.b,s),20,B.adg,t,B.ak,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.km,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:116}
C.frp.prototype={
$2(d,e){var w=null,v=D.a_R[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dU:B.c4,B.r,1),q=A.a([new A.ab(0,B.G,B.x.j(s?0.35:0.08),B.e9,8)],x.V),p=A.m(15),o=A.D(new C.a49(v.a,!0,w),1),n=s?B.jg:B.ij,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aN:B.aF,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.a1,!0,w,A.aI(!1,u,!0,A.eq(A.bu(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bp:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.lp,w,w,w)],l),B.ag,w,B.e,B.j,0,B.p),B.ao),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fro(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:76}
C.fro.prototype={
$0(){A.a8(this.a,!1).M("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cb8.prototype={
$0(){return this.a.ad9(this.b)},
$S:0}
C.fqR.prototype={
$1(d){return D.ffn},
$S:z+74}
C.fy1.prototype={
$1(d){var w=this
return new C.a_3(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fqT.prototype={
$1(d){return new C.WZ(this.a,null)},
$S:z+51}
C.fqS.prototype={
$1(d){return D.fgm},
$S:z+52}
C.cTL.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cTM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTK(w,d))},
$S:32}
C.cTK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cTN.prototype={
$1(d){return this.a.IG()},
$S:2}
C.cTO.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cTH.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cTI.prototype={
$1(d){return this.a.IG()},
$S:2}
C.cTJ.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.crm.prototype={
$0(){},
$S:0}
C.crs.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.crt.prototype={
$0(){return this.a.aKf(-1)},
$S:0}
C.cru.prototype={
$1(d){return this.a.n(new C.crr())},
$S:2}
C.crr.prototype={
$0(){},
$S:0}
C.crv.prototype={
$0(){return this.a.aKf(1)},
$S:0}
C.crw.prototype={
$1(d){return this.a.n(new C.crq())},
$S:2}
C.crq.prototype={
$0(){},
$S:0}
C.crx.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dU:B.c4
return A.tF(u,u,B.aW,r,u,new C.crp(t,d),B.zS,s,w,u,new A.ay(v,1,B.r,-1),B.c8)},
$S:1896}
C.crp.prototype={
$1(d){var w=this.a
return w.n(new C.crn(w,this.b))},
$S:9}
C.crn.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cry.prototype={
$1(d){return this.a.n(new C.cro())},
$S:2}
C.cro.prototype={
$0(){},
$S:0}
C.crz.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.eVY.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).M(w)},
$S:2}
C.eVZ.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.eW_.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).M(w)},
$S:0}
C.eVW.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbsY()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b2(new A.C(D.bkY,new A.en(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.brN(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:71}
C.eVX.prototype={
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
return A.aD(!1,B.a1,!0,p,A.aI(!1,v,!0,A.eq(D.dQ3,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a3(new A.d6(-1.2+t,-0.5),new A.d6(1.2-t,0.8),B.w,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
$S:139}
C.fpH.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.evk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evb.prototype={
$0(){return this.a.e=!0},
$S:0}
C.evc.prototype={
$0(){return this.a.e=!1},
$S:0}
C.evi.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.ed(new C.evh(w,this.b),null)},
$S:21}
C.evh.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aF,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ew(w,u,new A.C(B.adA,A.v(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bp:B.bv,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ab,C.fTt(new C.eve(r,e),r.a),B.ay,A.B(A.a([A.D(A.dV(B.df,new C.evf(d),w),1),B.ax,A.D(A.bL(B.Rp,new C.evg(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ag,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b6(t,B.X),w)},
$S:96}
C.eve.prototype={
$1(d){return this.b.$1(new C.evd(this.a,d))},
$S:32}
C.evd.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.evf.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.evg.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).M(w)
return null},
$S:0}
C.evj.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QU(this.b)},
$S:0}
C.ev6.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.d,x.Q)
w.push(this.b)
v.d=u.b6A(w)},
$S:0}
C.eva.prototype={
$1(d){return this.bfj(d)},
bfj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.JI(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iG(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.ev9.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a4<1>")
w=A.z(new A.a4(w,new C.ev8(this.b),v),v.k("G.E"))
u.d=t.b6A(w)},
$S:0}
C.ev8.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.evl.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iG(this.b,w)},
$S:0}
C.evm.prototype={
$1(d){return this.a.bwV(d,this.b)},
$S:z+55}
C.ev7.prototype={
$0(){return this.a.a7o(this.b)},
$S:0}
C.fxU.prototype={
$1(d){return new C.abe(this.a,this.b,this.c,null)},
$S:z+56}
C.evo.prototype={
$0(){return this.a.Y5(this.b)},
$S:0}
C.evp.prototype={
$0(){return this.a.Og(this.b)},
$S:0}
C.evq.prototype={
$0(){return this.a.Db(this.b)},
$S:0}
C.evr.prototype={
$0(){return this.a.Y6(this.b)},
$S:0}
C.evn.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.ev1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ev2.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.ev3.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.ev5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pb(),$async$$0)
case 2:if(t.c!=null)t.n(new C.ev4(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ev4.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.evO.prototype={
$2(d,e){return d+e.gw4()},
$S:z+59}
C.evK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.evL.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evv.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bxP,B.h,v,v,new A.o(B.aE.j(u?0.18:0.08),v,A.H(B.aE.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aF,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bp:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aN:B.aF
u=u?B.dU:B.c4
w=x.p
return A.ew(v,t,new A.C(B.wE,A.v(A.a([r,B.aO,q,B.P,p,B.d3,A.B(A.a([A.D(A.dV(B.n_,new C.evt(d),A.db(v,v,v,v,v,v,v,v,v,o,v,v,B.eY,v,new A.b6(A.m(14),B.X),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.ax,A.D(A.bL(D.f8p,new C.evu(d),A.bk(B.aE,v,v,v,v,v,B.eY,v,new A.b6(A.m(14),B.X),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.cZ,v,new A.b6(s,B.X),v)},
$S:46}
C.evt.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.evu.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.evE.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.ab(0,B.G,B.x.j(k?0.35:0.08),B.fF,28)],x.V),g=k?D.cLS:B.a_g,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.epb,B.av,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cq,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a3(B.aw,B.aC,B.w,g,m,m),B.n),m,m,m,m,E.adD,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bp:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b02(B.b3,B.iN,new C.evB(v,d),l,"Camera import","Scan QR"),1),B.ax,A.D(v.b02(B.cD,M.xh,new C.evC(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bp:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aE.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aE.j(0.28),B.r,1)
o=A.p(m,D.bxe,B.h,m,m,new A.o(B.aE.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aN:B.aF,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bp:B.bv,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bq(!0,new A.C(B.un,A.p(m,A.v(A.a([g,new A.C(B.adB,A.v(A.a([w,B.T,u,B.bu,t,B.T,A.aD(!1,B.a1,!0,m,A.aI(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.V(B.em,k?B.bp:B.bv,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.evD(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.ao,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.aj,!0,!0)},
$S:34}
C.evB.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.uE("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.evC.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.uE("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.evD.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.Ma(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.evz.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.ab(0,B.G,B.x.j(o?0.35:0.08),B.eP,24)],x.V),k=o?B.dU:B.c4
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bp:B.bv
u=A.bu(w,new A.a5(48,48,C.aN6(!0,A.m(12),48,Q.KR,u,v.c,48),q),B.ao)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aN:B.aF,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zK(v.gw4())
s=x.p
r=this.a
return A.bq(!0,new A.C(B.un,A.p(q,A.v(A.a([B.T,k,new A.C(D.ady,A.B(A.a([u,B.bd,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bp:B.bv,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zv,r.cd4(B.t6,B.aS,new C.evx(d),p,"QR code or backup file","Transfer project"),r.aY7(!0,B.e6,B.aE,new C.evy(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.Q,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.aj,!0,!0)},
$S:34}
C.evx.prototype={
$0(){A.a8(this.a,!1).M("transfer")
return null},
$S:0}
C.evy.prototype={
$0(){A.a8(this.a,!1).M("delete")
return null},
$S:0}
C.evA.prototype={
$1(d){return this.bfk(d)},
bfk(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.JI(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uQ(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.evR.prototype={
$0(){var w=this.a
w.a.bn()
w.n(new C.evQ(w))},
$S:0}
C.evQ.prototype={
$0(){return this.a.r++},
$S:0}
C.evS.prototype={
$0(){var w=this.a
return w.n(new C.evP(w))},
$S:0}
C.evP.prototype={
$0(){return this.a.r++},
$S:0}
C.evs.prototype={
$0(){var w=this.a.c
w.toString
return A.iG(w,null)},
$S:0}
C.evw.prototype={
$0(){return this.a.c6B(this.b)},
$S:0}
C.evN.prototype={
$0(){var w=this.a
return w.n(new C.evM(w,this.b))},
$S:0}
C.evM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evH.prototype={
$0(){return this.a.uE("scan")},
$S:0}
C.evI.prototype={
$0(){return this.a.uE("file")},
$S:0}
C.evJ.prototype={
$1(d){return this.a.cd5(d,this.b)},
$S:z+60}
C.evG.prototype={
$0(){return this.a.Df(this.b)},
$S:0}
C.evF.prototype={
$0(){return this.a.YA(this.b,this.c)},
$S:0}
C.cqO.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cqN.prototype={
$1(d){return d.ac()},
$S:z+62}
C.cqL.prototype={
$1(d){return C.hbB(A.a_(d,x.N,x.z))},
$S:z+63}
C.cqM.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fb8.prototype={
$1(d){return d.y===D.k5},
$S:z+2}
C.fyh.prototype={
$1(d){return C.bxy(d,this.a)},
$S:z+2}
C.fak.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bJr.prototype={
$1(d){return!d.as},
$S:z+1}
C.bJq.prototype={
$1(d){return d.ac()},
$S:z+15}
C.bJn.prototype={
$1(d){return C.fNJ(A.a_(d,x.N,x.z))},
$S:z+14}
C.bJo.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bJp.prototype={
$1(d){return J.k(d)},
$S:17}
C.f2t.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.eZd.prototype={
$1(d){return C.fEr(A.a_(d,x.N,x.z))},
$S:z+67}
C.eZe.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eZf.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.fqI.prototype={
$1(d){return J.k(d)},
$S:17}
C.fqJ.prototype={
$1(d){return d.a},
$S:z+69}
C.fqK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqL.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fqM.prototype={
$1(d){return d.QU(null).ac()},
$S:z+70}
C.fyf.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fbA.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fdK.prototype={
$1(d){return C.aid(A.a_(d,x.N,x.z))},
$S:z+8}
C.fdL.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fdM.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fdN.prototype={
$1(d){return d.ac()},
$S:z+5}
C.fdO.prototype={
$1(d){return C.tk(d,this.a)},
$S:z+2}
C.fqv.prototype={
$1(d){return C.tk(d,this.a)},
$S:z+2}
C.fya.prototype={
$1(d){return C.aid(A.a_(d,x.N,x.z))},
$S:z+8}
C.fyb.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fyc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fbh.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fbi.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fyl.prototype={
$1(d){return!d.as},
$S:z+1}
C.faT.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.faU.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.faV.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.fy2.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fev.prototype={
$1(d){return d.Q},
$S:z+72}
C.fqr.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fdH.prototype={
$1(d){return C.aid(A.a_(d,x.N,x.z))},
$S:z+8}
C.fdI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fdJ.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fqp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eZJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.eZK.prototype={
$1(d){return C.fNJ(A.a_(d,x.N,x.z))},
$S:z+14}
C.eZL.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eZM.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eZN.prototype={
$1(d){return d.length!==0},
$S:3}
C.f__.prototype={
$2(d,e){return d.eN(new C.f_0(e))},
$S:1897}
C.f_0.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1898}
C.eZX.prototype={
$1(d){return C.hxk(d,this.a)},
$S:z+73}
C.eZY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eZZ.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f37.prototype={
$1(d){return d.a},
$S:z+49}
C.f38.prototype={
$1(d){return d.length!==0},
$S:3}
C.f39.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f59.prototype={
$1(d){return d.ac()},
$S:z+5}
C.f9H.prototype={
$1(d){return C.fYS(d,C.F9(d,this.a))},
$S:z+5}
C.f9I.prototype={
$1(d){return C.fYT(d,C.F9(d,this.a))},
$S:z+5};(function aliases(){var w=C.aIh.prototype
w.bpi=w.p
w=C.aKp.prototype
w.brC=w.p
w=C.aKq.prototype
w.brD=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azT.prototype,"gca7","ca8",25)
var s
w(s=C.ax_.prototype,"gc3f","c3g",42)
v(s,"gaIw","LJ",0)
v(s,"gci1","zN",0)
v(s,"gbEu","Mo",0)
v(s,"gcvt","xo",0)
v(s,"gcc3","Zg",0)
v(s,"gbzZ","M6",0)
v(s,"gbEV","V_",0)
w(s,"gbJl","bJm",71)
v(s,"gbuz","yR",0)
v(C.ax0.prototype,"gcvp","E5",0)
v(s=C.aAt.prototype,"gacM","uR",0)
v(s,"gc5S","Yr",0)
v(s,"gaMv","GA",0)
v(s=C.aAq.prototype,"gcrK","a0h",0)
v(s,"gacM","uR",0)
v(s,"gcga","ZW",0)
v(s,"gc6O","YF",0)
w(s,"gc39","c3a",30)
v(s,"gbEM","GF",0)
v(s,"gcsG","csH",3)
v(s,"gbVB","WD",0)
w(s,"gc1G","c1H",23)
v(s,"gc5C","c5D",3)
v(s=C.ayS.prototype,"gc_u","NP",0)
v(s,"gc_w","c_x",3)
v(s,"gbBt","a71",0)
v(s=C.aAs.prototype,"gbHU","Vt",0)
v(s,"gbS4","W6",0)
v(s,"gcmh","a_K",0)
v(s,"gciB","a_m",0)
v(C.aAr.prototype,"gcij","aew",0)
v(C.apM.prototype,"gc1E","Y4",0)
v(C.avN.prototype,"ga01","IG",3)
v(C.avM.prototype,"ga01","IG",3)
v(C.aux.prototype,"ga01","IG",3)
v(s=C.aBU.prototype,"gaXw","OL",0)
v(s,"gbtq","TL",0)
v(s,"gc6C","c6D",3)
w(C.aBT.prototype,"gc2u","c2v",57)
u(C.aBV.prototype,"gaMp",0,0,null,["$1","$0"],["Gz","bCJ"],58,0,0)
t(C,"h51","hGJ",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alK,C.tD,C.mS,C.Gb,C.acp,C.Ip,C.tE,C.Ix,C.Et,C.baS,C.aFX,C.amU,C.d0z,C.ll,C.aPX,C.aPW,C.aO1,C.t6,C.qp,C.l4,C.hQ,C.kn,C.aDW])
u(A.i3,[C.fil,C.fik,C.fim,C.frk,C.f8E,C.f8F,C.f8K,C.fg4,C.fg3,C.fg2,C.bXY,C.frQ,C.frI,C.frU,C.fbp,C.dys,C.dyn,C.dyo,C.dy0,C.dxX,C.dyH,C.dyI,C.dyB,C.dyC,C.dyJ,C.dyK,C.fbN,C.fdE,C.fdF,C.fqt,C.fy9,C.fbg,C.fqZ,C.d_M,C.d_8,C.d_h,C.d_y,C.d_d,C.d_j,C.d_a,C.d_n,C.d_o,C.d_m,C.d_D,C.d_C,C.d1d,C.d1e,C.d1f,C.d0_,C.d04,C.d03,C.czx,C.czz,C.cSZ,C.cTn,C.cTo,C.cTr,C.cTt,C.cTu,C.cTv,C.cTx,C.cTy,C.dLF,C.dL4,C.dL_,C.dKy,C.dKL,C.dKO,C.dKX,C.dKm,C.dL7,C.dL1,C.dKo,C.dKp,C.dKq,C.dKv,C.dKt,C.dKs,C.dKI,C.dKJ,C.dKD,C.dLe,C.dLa,C.d0a,C.d0b,C.fbR,C.fbS,C.fbT,C.fbP,C.fbQ,C.fbW,C.fbX,C.fbY,C.fbU,C.fbV,C.d0u,C.d0k,C.d0f,C.d0p,C.d0q,C.d0t,C.d0h,C.d0w,C.d0x,C.d0y,C.eWv,C.eya,C.dfL,C.dfV,C.dfW,C.dfX,C.dg_,C.dfZ,C.dg0,C.dg5,C.dg6,C.c3B,C.c3A,C.c3w,C.c3x,C.c3y,C.c3z,C.c3G,C.c3D,C.c3E,C.dLr,C.dLu,C.dLt,C.dLA,C.dLB,C.dxM,C.frr,C.fqR,C.fy1,C.fqT,C.fqS,C.cTM,C.cTN,C.cTI,C.cru,C.crw,C.crx,C.crp,C.cry,C.eVY,C.fpH,C.evi,C.eve,C.eva,C.ev8,C.evm,C.fxU,C.evv,C.evE,C.evz,C.evA,C.evJ,C.cqN,C.cqL,C.cqM,C.fb8,C.fyh,C.fak,C.bJr,C.bJq,C.bJn,C.bJo,C.bJp,C.eZd,C.eZe,C.fqI,C.fqJ,C.fqK,C.fqL,C.fqM,C.fyf,C.fbA,C.fdK,C.fdL,C.fdN,C.fdO,C.fqv,C.fya,C.fyb,C.fyc,C.fbh,C.fbi,C.fyl,C.faT,C.faU,C.fy2,C.fev,C.fqr,C.fdH,C.fdI,C.fqp,C.eZJ,C.eZK,C.eZL,C.eZM,C.eZN,C.f_0,C.eZX,C.eZY,C.f37,C.f38,C.f59,C.f9H,C.f9I])
u(A.at,[C.aVi,C.aib,C.aR9,C.WF,C.b6D,C.baQ,C.bex,C.brY,C.bhP,C.aaT,C.bew,C.aaS,C.bev,C.ayT,C.aF_,C.aaU,C.Il,C.baR,C.aaa,C.baP,C.baU,C.aVg,C.apM,C.abe])
u(A.n7,[C.b7e,C.b8p,C.b8g,C.aDR,C.bdA,C.baT,C.b9Y,C.bfE,C.brN])
u(A.jl,[C.frN,C.frO,C.frP,C.frG,C.frH,C.frS,C.frT,C.dyE,C.dyq,C.dyt,C.dy7,C.dy8,C.dy9,C.dy6,C.dye,C.dy5,C.dyf,C.dyg,C.dy4,C.dyh,C.dy3,C.dyi,C.dy2,C.dyj,C.dxV,C.dxW,C.dy1,C.dyk,C.dy_,C.dyl,C.dxZ,C.dya,C.dxY,C.dyb,C.dxU,C.dyc,C.dyd,C.dyF,C.dyG,C.dyu,C.dyv,C.dyw,C.dyx,C.dyy,C.dyz,C.dyA,C.dyM,C.dyD,C.fbO,C.d_6,C.d_4,C.d_5,C.d_7,C.d_L,C.d_A,C.d_x,C.d_9,C.d_B,C.d_f,C.d_g,C.d_i,C.d_z,C.d_e,C.d_k,C.d_I,C.d_u,C.d_t,C.d_v,C.d_w,C.d_p,C.d_r,C.d_s,C.d_l,C.d_E,C.d_H,C.d_b,C.d_c,C.d1c,C.d1b,C.d1a,C.d19,C.d1g,C.d18,C.d1h,C.d00,C.d01,C.d02,C.d05,C.d_Z,C.d_Y,C.czy,C.cSY,C.cTa,C.cT9,C.cTp,C.cT8,C.cTq,C.cT7,C.cT6,C.cTs,C.cT5,C.cTi,C.cTh,C.cTz,C.dLE,C.dLD,C.dLG,C.dLH,C.dLI,C.dLC,C.dLK,C.dLJ,C.dL2,C.dL3,C.dL5,C.dKz,C.dKN,C.dKM,C.dKP,C.dKZ,C.dKS,C.dKR,C.dKT,C.dKQ,C.dKU,C.dKV,C.dKY,C.dKn,C.dL0,C.dKr,C.dKu,C.dKw,C.dL6,C.dKC,C.dKA,C.dKE,C.dKF,C.dKB,C.dKG,C.dKK,C.dLf,C.dLg,C.dL8,C.dLb,C.dLc,C.dLd,C.dLi,C.dL9,C.dKx,C.d09,C.d08,C.d0d,C.d0n,C.d0e,C.ey9,C.dfM,C.dfJ,C.dfK,C.dfU,C.dfT,C.dfS,C.dg1,C.dfR,C.dg2,C.dfQ,C.dg3,C.dfP,C.dg4,C.dfO,C.dfN,C.dfY,C.dg7,C.dgg,C.dLs,C.dLw,C.dLx,C.dLo,C.dLp,C.dLq,C.dLv,C.dLz,C.dLy,C.dLj,C.dLk,C.dLl,C.dLm,C.dLn,C.dxN,C.fro,C.cb8,C.cTL,C.cTK,C.cTO,C.cTH,C.cTJ,C.crm,C.crs,C.crt,C.crr,C.crv,C.crq,C.crn,C.cro,C.crz,C.eVZ,C.eW_,C.evk,C.evb,C.evc,C.evd,C.evf,C.evg,C.evj,C.ev6,C.ev9,C.evl,C.ev7,C.evo,C.evp,C.evq,C.evr,C.evn,C.ev1,C.ev2,C.ev3,C.ev5,C.ev4,C.evK,C.evL,C.evt,C.evu,C.evB,C.evC,C.evD,C.evx,C.evy,C.evR,C.evQ,C.evS,C.evP,C.evs,C.evw,C.evN,C.evM,C.evH,C.evI,C.evG,C.evF])
u(A.af,[C.alR,C.QW,C.Xm,C.Xq,C.Xo,C.WX,C.amX,C.amR,C.Y_,C.amV,C.Yk,C.Yl,C.a49,C.WZ,C.WY,C.Ww,C.a_3,C.Eg,C.auq,C.apL,C.apF,C.apK,C.Mq])
u(A.ag,[C.azT,C.baN,C.ax_,C.bb7,C.ax0,C.b8n,C.aAt,C.aAq,C.ayS,C.aAs,C.aAr,C.bfW,C.aIh,C.avN,C.avM,C.aux,C.brQ,C.aKp,C.aKq,C.aBU,C.bhi,C.aBT,C.btA])
u(A.kz,[C.dyp,C.dyr,C.dym,C.dyL,C.fdG,C.bJm,C.d_K,C.d_J,C.d_q,C.d_F,C.d_G,C.d06,C.dKW,C.dKH,C.dLh,C.d0m,C.d0l,C.d0j,C.d0o,C.d0r,C.d0s,C.d0c,C.d0g,C.d0i,C.d0v,C.c3u,C.c3C,C.c3H,C.dxO,C.frq,C.frp,C.eVW,C.eVX,C.evh,C.evO,C.cqO,C.f2t,C.eZf,C.fdM,C.faV,C.fdJ,C.f__,C.eZZ,C.f39])
t(C.bfF,C.aIh)
u(A.mf,[C.a9e,C.aGE,C.Gc,C.aic,C.cqP,C.cqQ])
t(C.brO,C.aKp)
t(C.brP,C.aKq)
t(C.aBV,C.btA)
t(C.b57,A.b4X)
t(C.brR,A.a3P)
t(C.b56,C.brR)
w(C.aIh,A.eJ)
w(C.aKp,A.c7)
w(C.aKq,A.c7)
v(C.btA,A.ev)
v(C.brR,A.iU)})()
A.kf(b.typeUniverse,JSON.parse('{"aVi":{"at":[],"r":[]},"b7e":{"aA":[]},"alR":{"af":[],"r":[]},"azT":{"ag":["alR"]},"QW":{"af":[],"r":[]},"aib":{"at":[],"r":[]},"aR9":{"at":[],"r":[]},"baN":{"ag":["QW"]},"Xm":{"af":[],"r":[]},"Xq":{"af":[],"r":[]},"Xo":{"af":[],"r":[]},"WX":{"af":[],"r":[]},"ax_":{"ag":["Xm"]},"bb7":{"ag":["Xq"]},"ax0":{"ag":["Xo"]},"WF":{"at":[],"r":[]},"b8p":{"aA":[]},"b8g":{"aA":[]},"b8n":{"ag":["WX"]},"aDR":{"aA":[]},"bdA":{"aA":[]},"b6D":{"at":[],"r":[]},"amX":{"af":[],"r":[]},"amR":{"af":[],"r":[]},"Y_":{"af":[],"r":[]},"aaU":{"at":[],"r":[]},"aAt":{"ag":["amX"]},"aAq":{"ag":["amR"]},"baQ":{"at":[],"r":[]},"baT":{"aA":[]},"bex":{"at":[],"r":[]},"b9Y":{"aA":[]},"brY":{"at":[],"r":[]},"bhP":{"at":[],"r":[]},"ayS":{"ag":["Y_"]},"aaT":{"at":[],"r":[]},"bew":{"at":[],"r":[]},"aaS":{"at":[],"r":[]},"bev":{"at":[],"r":[]},"ayT":{"at":[],"r":[]},"aF_":{"at":[],"r":[]},"Il":{"at":[],"r":[]},"amV":{"af":[],"r":[]},"Yk":{"af":[],"r":[]},"Yl":{"af":[],"r":[]},"aAs":{"ag":["amV"]},"baR":{"at":[],"r":[]},"aaa":{"at":[],"r":[]},"baP":{"at":[],"r":[]},"baU":{"at":[],"r":[]},"aAr":{"ag":["Yk"]},"bfW":{"ag":["Yl"]},"aVg":{"at":[],"r":[]},"a49":{"af":[],"r":[]},"bfF":{"ag":["a49"]},"bfE":{"aA":[]},"apM":{"at":[],"r":[]},"WZ":{"af":[],"r":[]},"WY":{"af":[],"r":[]},"Ww":{"af":[],"r":[]},"a_3":{"af":[],"r":[]},"avN":{"ag":["WZ"]},"avM":{"ag":["WY"]},"aux":{"ag":["Ww"]},"brQ":{"ag":["a_3"]},"Eg":{"af":[],"r":[]},"auq":{"af":[],"r":[]},"brO":{"ag":["Eg"]},"brP":{"ag":["auq"]},"brN":{"aA":[]},"apL":{"af":[],"r":[]},"aBU":{"ag":["apL"]},"abe":{"at":[],"r":[]},"apF":{"af":[],"r":[]},"apK":{"af":[],"r":[]},"bhi":{"ag":["apF"]},"aBT":{"ag":["apK"]},"Mq":{"af":[],"r":[]},"aBV":{"ag":["Mq"],"ev":[]},"b56":{"iU":[],"f6":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aO1"),Q:w("qp"),n:w("bs<n,n>"),c5:w("aPW"),dY:w("aPX"),d:w("ep<n?>"),e:w("Gb"),B:w("mS"),P:w("hQ"),k:w("kn"),x:w("aw<~>"),f5:w("P<ag6>"),V:w("P<ab>"),t:w("P<qp>"),O:w("P<x>"),ac:w("P<ep<n?>>"),I:w("P<mS>"),u:w("P<hQ>"),_:w("P<kn>"),cl:w("P<aw<ak<a1<n,@>>>>"),R:w("P<mU>"),cq:w("P<ak<+(O,O)>>"),ez:w("P<a1<n,aB>>"),gE:w("P<a1<n,n>>"),c7:w("P<a1<n,@>>"),fD:w("P<m3>"),bp:w("P<nR>"),g:w("P<u>"),v:w("P<hz>"),L:w("P<+(n,n)>"),G:w("P<+(O,O)>"),bF:w("P<+count,id,name(I,n,n)>"),A:w("P<cK>"),s:w("P<n>"),aS:w("P<iJ>"),p:w("P<r>"),C:w("P<f6>"),D:w("P<l4>"),fp:w("P<Ip>"),M:w("P<Ix>"),gZ:w("P<aDW>"),Y:w("P<acp>"),E:w("P<aFX>"),F:w("P<O>"),dC:w("P<I>"),dS:w("P<aA?>"),d4:w("P<n?>"),J:w("co<ag<af>>"),b:w("ak<mS>"),do:w("ak<hQ>"),r:w("ak<kn>"),U:w("ak<a1<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(I,n,n)>"),h:w("ak<n>"),c:w("ak<l4>"),j:w("ak<@>"),fK:w("br<n,n>"),d2:w("br<n,ak<a1<n,@>>>"),a:w("a1<n,@>"),f:w("a1<@,@>"),gv:w("J<n,Gd>"),w:w("iE"),g2:w("qI"),bV:w("alK"),fL:w("cp"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(O,ak<hQ>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bl<O>"),gc:w("dz"),b4:w("cx<I>"),W:w("k3<n>"),l:w("r"),cM:w("f6"),i:w("l4"),cc:w("Et"),bw:w("aaS<n?>"),cy:w("Iz"),q:w("mE"),y:w("S"),gR:w("O"),z:w("@"),S:w("I"),eK:w("ak<kn>?"),m:w("amU?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,S)?"),Z:w("q2?"),T:w("n?"),aD:w("dz?"),o:w("l4?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aPU=new A.bv(B.h0,B.bD,B.h0,B.bD)
D.a6F=new A.bv(B.h0,B.jS,B.h0,B.jS)
D.aQ5=new A.bv(B.j9,B.bD,B.bD,B.bD)
D.aQ9=new A.ay(B.cY,1.4,B.r,-1)
D.aQj=new A.ay(B.af,1,B.r,-1)
D.aRG=new A.aX(0,1/0,64,1/0)
D.aRJ=new A.aX(0,84,0,1/0)
D.asJ=w([B.lS,B.q9,B.c],x.O)
D.bHz=new A.a3(B.aw,B.aC,B.w,D.asJ,null,null)
D.aSv=new A.o(null,null,null,null,null,D.bHz,B.n)
D.cLo=w([B.aS,B.bV],x.O)
D.bJK=new A.a3(B.aY,B.b1,B.w,D.cLo,null,null)
D.aSM=new A.o(null,null,null,null,null,D.bJK,B.n)
D.aYC=new A.fd(null,null,null,null,null,E.jy,null,null,null,null)
D.a7Y=new A.cw(B.A,null,null,D.aYC,null)
D.k0=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eF_=new A.F(!0,D.k0,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXc=new A.w("No books on the shelf yet.",null,D.eF_,null,null,null,null,null,null,null,null,null)
D.dQ4=new A.C(B.ns,D.eXc,null)
D.aXe=new A.cw(B.A,null,null,D.dQ4,null)
D.aY3=new A.cw(B.A,null,null,X.T8,null)
D.aZY=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b_k=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.a8R=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b1K=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b1Z=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9W=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b5q=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b5L=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Dc=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b78=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b99=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.abn=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eS5=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bdP=new A.ep(null,D.eS5,B.eW,null,x.d)
D.f_b=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bdR=new A.ep(null,D.f_b,B.eW,null,x.d)
D.beo=new A.b8(38e5)
D.bf9=new A.i4(0,10,0,10)
D.bfj=new A.N(0,1,0,0)
D.bfs=new A.i4(0,4,0,4)
D.bfK=new A.N(10,10,14,10)
D.bfU=new A.i4(10,4,10,4)
D.bg3=new A.i4(10,8,10,8)
D.bg4=new A.N(10,8,8,8)
D.bgw=new A.N(12,6,12,2)
D.bgN=new A.N(14,10,6,6)
D.bgO=new A.N(14,12,14,0)
D.bgS=new A.N(14,12,14,8)
D.bgV=new A.N(14,12,8,14)
D.bgZ=new A.i4(14,14,14,14)
D.bhF=new A.N(16,2,16,10)
D.bhP=new A.N(16,6,16,30)
D.bhR=new A.N(16,6,16,8)
D.ady=new A.N(18,16,18,8)
D.bir=new A.N(18,20,18,22)
D.adC=new A.N(18,24,18,24)
D.bix=new A.N(18,30,18,30)
D.biP=new A.N(20,10,12,20)
D.bj2=new A.N(20,18,16,18)
D.bj4=new A.N(20,18,20,6)
D.bjT=new A.N(24,32,24,28)
D.bjU=new A.N(24,36,24,32)
D.bjX=new A.N(26,26,24,14)
D.bka=new A.N(2,4,2,8)
D.bke=new A.N(30,0,30,0)
D.bkp=new A.N(38,22,22,22)
D.adU=new A.N(40,24,24,24)
D.bkr=new A.i4(40,40,40,40)
D.bkt=new A.N(46,30,30,30)
D.adX=new A.N(4,0,0,8)
D.bkU=new A.N(56,40,40,40)
D.bkY=new A.N(1.25,1.25,1.25,1.25)
D.bkZ=new A.N(60,0,60,0)
D.bl1=new A.N(6,14,6,16)
D.bld=new A.i4(7,3,7,3)
D.blF=new A.N(8,9,8,9)
D.blJ=new A.N(5,1.5,5,1.5)
D.blT=new A.N(6,2.5,6,2.5)
D.fai=new A.w("Signature",null,B.mX,null,null,null,null,null,null,null,null,null)
D.bma=new A.bH(1,B.br,D.fai,null)
D.f7A=new A.w("Tell the AI what to fix",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.bmS=new A.bH(1,B.br,D.f7A,null)
D.eM_=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9t=new A.w("Worksheets",null,D.eM_,null,null,null,null,null,null,null,null,null)
D.eM7=new A.F(!0,E.a8x,null,null,null,null,13,B.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new A.w("Track your project spending",null,D.eM7,null,null,null,null,null,null,null,null,null)
D.cDV=w([D.f9t,B.av,D.f8n],x.p)
D.bby=new A.fm(B.ak,B.e,B.j,B.F,null,B.p,null,0,D.cDV,null)
D.bmX=new A.bH(1,B.br,D.bby,null)
D.eHs=new A.F(!0,E.jy,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRj=new A.w("FAMILY LIBRARY",null,D.eHs,null,null,null,null,null,null,null,null,null)
D.bnb=new A.bH(1,B.br,D.eRj,null)
D.Kw=new C.Gb("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.WE=new C.Gc(0,"male")
D.aeM=new C.Gc(1,"female")
D.wL=new C.Gc(2,"unknown")
D.rP=new C.aic(0,"owner")
D.Kx=new C.aic(1,"editor")
D.k5=new C.aic(2,"viewer")
D.afv=new A.a0(61199,"MaterialIcons",!1)
D.bpA=new A.a0(61504,"MaterialIcons",!1)
D.bpB=new A.a0(61505,"MaterialIcons",!1)
D.bpD=new A.a0(61587,"MaterialIcons",!1)
D.bpJ=new A.a0(61890,"MaterialIcons",!1)
D.bqC=new A.a0(63034,"MaterialIcons",!0)
D.brs=new A.a0(63429,"MaterialIcons",!1)
D.ahD=new A.a0(984520,"MaterialIcons",!1)
D.bq8=new A.a0(62776,"MaterialIcons",!1)
D.btM=new A.ad(D.bq8,26,B.aW,null,null,null)
D.boz=new A.a0(57648,"MaterialIcons",!1)
D.bu3=new A.ad(D.boz,14,B.c,null,null,null)
D.bul=new A.ad(B.Ej,17,null,null,null,null)
D.buQ=new A.ad(E.Xp,null,null,null,null,null)
D.buT=new A.ad(B.j3,18,E.jy,null,null,null)
D.X9=new A.a0(62044,"MaterialIcons",!1)
D.buZ=new A.ad(D.X9,null,B.aS,null,null,null)
D.bvO=new A.ad(B.dP,16,null,null,null,null)
D.bvV=new A.ad(D.X9,32,B.aS,null,null,null)
D.bwc=new A.ad(E.afw,18,B.cY,null,null,null)
D.bxe=new A.ad(B.Et,22,B.aE,null,null,null)
D.bxp=new A.ad(B.dP,22,B.aW,null,null,null)
D.bxA=new A.ad(O.Xe,22,B.c,null,null,null)
D.bxF=new A.ad(B.t_,52,B.c,null,null,null)
D.bxP=new A.ad(B.Et,30,B.aE,null,null,null)
D.aie=new A.ad(B.t6,22,B.c,null,null,null)
D.byg=new A.ad(B.dP,17,null,null,null,null)
D.byz=new A.ad(B.uH,26,B.cY,null,null,null)
D.bzi=new A.ad(B.XC,16,null,null,null,null)
D.bA0=new A.ad(B.t_,24,B.c,null,null,null)
D.bA5=new A.ad(B.KX,20,B.qE,null,null,null)
D.bAa=new A.ad(B.Eh,null,B.bV,null,null,null)
D.bAh=new A.ad(B.j3,18,B.c,null,null,null)
D.bBG=new A.ad(B.e6,16,B.af,null,null,null)
D.bBR=new A.ad(D.X9,20,B.aS,null,null,null)
D.aiG=new A.ad(B.hp,20,null,null,null,null)
D.bCl=new A.ad(B.ct,18,D.k0,null,null,null)
D.bCD=new A.ad(B.x6,28,B.c,null,null,null)
D.bCL=new A.ad(B.KN,null,B.fP,null,null,null)
D.bD4=new A.ad(B.x6,24,B.c,null,null,null)
D.bDu=new A.ad(B.t_,null,B.aS,null,null,null)
D.bDv=new A.ad(B.jL,20,B.cY,null,null,null)
D.bDN=new A.ad(B.Ej,16,null,null,null,null)
D.bFg=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.et,!0,null,null,null,null)
D.cS7=w([B.bq,B.aS,B.f3,B.aW],x.O)
D.bG1=new A.a3(B.aw,B.aC,B.w,D.cS7,null,null)
D.b6d=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.baL=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cB_=w([D.b6d,D.baL],x.O)
D.bGc=new A.a3(B.aY,B.b1,B.w,D.cB_,null,null)
D.cN1=w([B.eT,B.fo,B.f3],x.O)
D.bGg=new A.a3(B.aw,B.aC,B.w,D.cN1,null,null)
D.aar=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b_l=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cCQ=w([D.aar,D.b_l],x.O)
D.bGQ=new A.a3(B.aY,B.b1,B.w,D.cCQ,null,null)
D.b27=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.as9=w([D.b27,D.aar],x.O)
D.bH9=new A.a3(B.aw,B.aC,B.w,D.as9,null,null)
D.a9B=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b4_=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cMi=w([D.a9B,D.b4_],x.O)
D.bHK=new A.a3(B.a3,B.a7,B.w,D.cMi,null,null)
D.cXK=w([B.bQ,B.mu],x.O)
D.bHM=new A.a3(B.aY,B.b1,B.w,D.cXK,null,null)
D.b69=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b7A=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cYz=w([D.b69,D.k0,D.k0,D.b7A],x.O)
D.d_y=w([0,0.07,0.9,1],x.F)
D.bIi=new A.a3(B.a3,B.a7,B.w,D.cYz,D.d_y,null)
D.bIt=new A.a3(B.aw,B.aC,B.w,B.Ol,null,null)
D.cXl=w([B.aW,B.aS,B.bV],x.O)
D.bJv=new A.a3(B.aw,B.aC,B.w,D.cXl,null,null)
D.c3Q=w([B.bq,B.aW,B.eT],x.O)
D.c3X=w([B.bC,B.aB,B.je],x.O)
D.c3Z=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b4Z=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.ca3=w([D.b4Z,E.aaa],x.O)
D.dM9=new A.u(1,2)
D.eqZ=new A.cK(B.aT,D.dM9,3)
D.apq=w([D.eqZ],x.A)
D.chh=w([B.h3,B.cb,B.f0],x.O)
D.cjV=w([B.bI,B.bt,B.bj],x.O)
D.bnE=new C.tD("classic","Classic leather","Gold-edged brown leather",D.as9,E.jy,E.jy,"\u2766",B.L,!0,!1,!1,!1)
D.aZN=new A.x(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.b9R=new A.x(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cFq=w([D.aZN,D.b9R],x.O)
D.aad=new A.x(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bnz=new C.tD("ornate","Ornate gold","Double gold border and flourishes",D.cFq,D.aad,D.aad,"\u2726",B.L,!0,!0,!0,!1)
D.b1R=new A.x(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.b6P=new A.x(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cyb=w([D.b1R,D.b6P],x.O)
D.bny=new C.tD("parchment","Parchment","Old paper with dark ink",D.cyb,D.Dc,G.ih,"\u2767",B.L,!0,!1,!1,!0)
D.a8j=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b8z=new A.x(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.cVP=w([D.a8j,D.b8z],x.O)
D.b4C=new A.x(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.b81=new A.x(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bnB=new C.tD("minimal","Clean paper","Plain and elegant, like a printed book",D.cVP,D.b4C,D.b81,"",B.L,!0,!0,!1,!0)
D.bnD=new C.tD("midnight","Midnight","Deep blue with silver stars",K.asq,B.cp,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bnx=new C.tD("emerald","Emerald library","Green cloth, title on the left",Y.apM,E.jy,B.h4,"\u25c6",B.bf,!0,!1,!1,!1)
D.b8U=new A.x(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.cUp=w([B.f1,D.b8U],x.O)
D.b5x=new A.x(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.b6s=new A.x(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bnC=new C.tD("rose","Rose vintage","Burgundy with rose-gold lettering",D.cUp,D.b5x,D.b6s,"\u2740",B.L,!0,!1,!0,!1)
D.cYe=w([B.cK,K.q8],x.O)
D.bnA=new C.tD("modern","Modern","Dark, bold, left-aligned",D.cYe,B.aX,B.c,"",B.bf,!1,!0,!1,!1)
D.Zw=w([D.bnE,D.bnz,D.bny,D.bnB,D.bnD,D.bnx,D.bnC,D.bnA],A.az("P<tD>"))
D.cxI=w([B.bV,B.bk],x.O)
D.b61=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cym=w([D.a8j,D.b61],x.O)
D.b1O=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.czP=w([D.b1O,B.d8],x.O)
D.cBc=w([B.b7,B.iG,B.nV],x.O)
D.cBz=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b_h=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b3m=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d_v=w([D.a9B,D.b_h,D.b3m],x.O)
D.bnF=new C.tE("leather","Leather",D.d_v,"vintage")
D.cIf=w([B.dv,B.J2,N.TA],x.O)
D.bnM=new C.tE("midnight","Midnight",D.cIf,"starry")
D.cBd=w([B.fb,B.eA,B.ks],x.O)
D.bnL=new C.tE("forest","Forest",D.cBd,"story")
D.d1a=w([B.f2,B.f1,B.k1],x.O)
D.bnI=new C.tE("burgundy","Burgundy",D.d1a,"royal")
D.cju=w([B.aB,B.oQ,B.n8],x.O)
D.bnJ=new C.tE("royal","Royal",D.cju,"royal")
D.cDr=w([B.bt,B.cK,K.q8],x.O)
D.bnG=new C.tE("charcoal","Charcoal",D.cDr,"geo")
D.d_B=w([B.ck,B.dI,B.u8],x.O)
D.bnK=new C.tE("sunset","Sunset",D.d_B,"sunset")
D.d0b=w([B.iG,B.Dd,B.TB],x.O)
D.bnH=new C.tE("ocean","Ocean",D.d0b,"band")
D.xC=w([D.bnF,D.bnM,D.bnL,D.bnI,D.bnJ,D.bnG,D.bnK,D.bnH],A.az("P<tE>"))
D.cDP=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cEk=w([B.ai,B.aI,B.M],x.O)
D.cFv=w([B.f1,B.eA,B.dv,B.h5,B.wa,B.cY,B.kt,B.eC,B.dl],x.O)
D.cFw=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.er_=new A.cK(B.dr,B.dE,8)
D.cFF=w([D.er_],x.A)
D.cGG=w([B.bU,B.dI,B.kT],x.O)
D.cH7=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cIb=w([B.bU,B.hw],x.O)
D.cK5=w([B.aL,B.D8,B.w0],x.O)
D.cKV=w([B.bH,B.cF,B.dB,B.aL],x.O)
D.cLp=w([B.jz,B.ck,B.rm],x.O)
D.cLS=w([B.eT,B.cY],x.O)
D.cMn=w([B.cQ,B.fT,B.hz],x.O)
D.cMy=w([B.aX,B.bk,B.dv],x.O)
D.cMZ=w([B.eu,B.dk,B.eA],x.O)
D.cNe=w([B.e4,B.dv,B.J2],x.O)
D.cOs=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_l=w(["leather","linen","plain","stars","rays"],x.s)
D.bts=new A.a0(985219,"MaterialIcons",!1)
D.bt1=new A.a0(983781,"MaterialIcons",!1)
D.arV=w([B.afV,B.hU,B.m2,B.hW,D.bts,B.EC,B.p7,D.bt1,K.ahs,B.x8,B.p9,B.m1],A.az("P<a0>"))
D.a_q=w(["double","single","corners","none"],x.s)
D.cQX=w([B.eB,B.bv,B.eC],x.O)
D.cR9=w([],x.t)
D.AP=w([],x.u)
D.cTc=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cVg=w([B.aZ,B.fT,B.h5],x.O)
D.cWo=w([B.cE,B.nX,B.Uh],x.O)
D.cWB=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ddv=new C.ll("construction","Construction","Jobsite & builds",B.Eq)
D.ddC=new C.ll("house","Home Build","Houses & rooms",B.uB)
D.dds=new C.ll("grocery","Grocery","Store & pantry",B.Y9)
D.ddr=new C.ll("calculator","Calculations","Math & estimates",B.L5)
D.ddA=new C.ll("lumber","Materials","Lumber & supplies",B.Ln)
D.ddo=new C.ll("kitchen","Kitchen","Remodel & meals",S.agE)
D.bt_=new A.a0(983756,"MaterialIcons",!1)
D.ddt=new C.ll("landscape","Landscaping","Yard & garden",D.bt_)
D.ddn=new C.ll("plumbing","Plumbing","Pipes & water",B.uN)
D.ddD=new C.ll("electrical","Electrical","Wiring & power",B.ho)
D.ddl=new C.ll("store","Retail Shop","Daily business",B.kD)
D.ddm=new C.ll("paint_remodel","Paint & Remodel","Colors & walls",S.ags)
D.bsn=new A.a0(983311,"MaterialIcons",!1)
D.ddz=new C.ll("roofing","Roofing","Roofs & exteriors",D.bsn)
D.btc=new A.a0(983986,"MaterialIcons",!1)
D.ddk=new C.ll("warehouse","Warehouse","Storage & stock",D.btc)
D.ddx=new C.ll("vehicles","Vehicles","Fleet & transport",B.ED)
D.bqa=new A.a0(62785,"MaterialIcons",!1)
D.ddq=new C.ll("farm","Farm","Crops & livestock",D.bqa)
D.ddp=new C.ll("restaurant","Restaurant","Food & catering",B.t5)
D.ddw=new C.ll("tools","Tools","Workshop gear",B.EA)
D.ddB=new C.ll("wallet","Cash & Wallet","Quick spending",B.jL)
D.brn=new A.a0(63395,"MaterialIcons",!1)
D.ddy=new C.ll("concrete","Concrete","Foundation work",D.brn)
D.ddu=new C.ll("blueprint","Blueprint","Plans & design",Aa.ag0)
D.a_R=w([D.ddv,D.ddC,D.dds,D.ddr,D.ddA,D.ddo,D.ddt,D.ddn,D.ddD,D.ddl,D.ddm,D.ddz,D.ddk,D.ddx,D.ddq,D.ddp,D.ddw,D.ddB,D.ddy,D.ddu],A.az("P<ll>"))
D.cX2=w([B.bp,B.bv],x.O)
D.cXL=w([B.i0,B.nc,B.dz],x.O)
D.a_W=w(["top","middle","bottom"],x.s)
D.cZW=w([B.cC,B.bk,B.dv],x.O)
D.d_q=w([B.bh,B.dk,B.eA],x.O)
D.d15=w([B.bI,B.ai],x.O)
D.d16=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dJX={top:0,middle:1,bottom:2}
D.d4e=new A.bs(D.dJX,["Top","Middle","Bottom"],x.n)
D.dJD={double:0,single:1,corners:2,none:3}
D.d4j=new A.bs(D.dJD,["Double line","One line","Corners","None"],x.n)
D.dKG={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d5H=new A.bs(D.dKG,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.d5S=new A.bs(B.iA,[],A.az("bs<I,+(n,n)>"))
D.dJQ={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.B_=new A.bs(D.dJQ,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("bs<n,I>"))
D.d84=new F.Ll(32,null)
D.d85=new F.Ll(40,null)
D.d86=new F.Ll(46,null)
D.aAX=new C.apK(null)
D.dN4=new A.u(8,14)
D.eXP=new A.w("Write a new book",null,B.ja,null,B.L,null,null,null,null,null,null,null)
D.dPz=new A.C(B.lo,D.eXP,null)
D.ahQ=new A.ad(B.hD,18,B.c,null,null,null)
D.eRE=new A.w("Add",null,B.mY,null,null,null,null,null,null,null,null,null)
D.cL9=w([D.ahQ,B.vg,D.eRE],x.p)
D.epi=new A.cC(B.b0,B.e,B.Q,B.m,null,B.p,null,0,D.cL9,null)
D.dPT=new A.C(B.qi,D.epi,null)
D.dPU=new A.C(E.acr,X.T8,null)
D.eLW=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUu=new A.w("New Project",null,D.eLW,null,null,null,null,null,null,null,null,null)
D.cOO=w([D.ahQ,B.aa,D.eUu],x.p)
D.epl=new A.cC(B.b0,B.e,B.Q,B.m,null,B.p,null,0,D.cOO,null)
D.dQ3=new A.C(B.iK,D.epl,null)
D.eWG=new A.w("Choose your header",null,R.BS,null,null,null,null,null,null,null,null,null)
D.dQm=new A.C(B.it,D.eWG,null)
D.aYR=new A.fd(2.2,null,null,null,null,B.cY,null,null,null,null)
D.etB=new A.a5(22,22,D.aYR,null)
D.aXa=new A.cw(B.A,null,null,D.etB,null)
D.dQr=new A.C(B.V9,D.aXa,null)
D.bh7=new A.N(14,2,14,6)
D.f88=new A.w("The top of your book. Tap a design to see it.",null,N.a4d,null,null,null,null,null,null,null,null,null)
D.dQs=new A.C(D.bh7,D.f88,null)
D.dRE=new A.iH(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dRH=new A.iH(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBY=new A.iH(1,0.9607843137254902,0.48627450980392156,0)
D.GE=new A.iH(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.y7=new A.iH(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dRN=new A.iH(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fhV=new C.bdA(null)
D.bcr=new A.lX(D.fhV,null,B.at,null,null)
D.aFB=new A.cG(0,0,0,0,null,null,D.bcr,null)
D.ecC=new A.A(-42,42)
D.ekt=new A.cH([0,0,1,1])
D.aGS=new A.a9(0,0,520,160)
D.aH4=new A.b6(B.pP,B.X)
D.f7I=new A.w("Let the AI write it from your tree",null,B.ki,null,B.L,null,null,null,null,null,null,null)
D.bo5=new A.dm(1,B.ci,D.f7I,null)
D.cIa=w([E.YB,B.aa,D.bo5],x.p)
D.ep_=new A.cC(B.b0,B.e,B.Q,B.m,null,B.p,null,0,D.cIa,null)
D.eRk=new A.w("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.cVu=w([D.aiG,B.aa,D.eRk],x.p)
D.ep8=new A.cC(B.b0,B.b6,B.j,B.m,null,B.p,null,0,D.cVu,null)
D.bxu=new A.ad(B.hV,14,B.aW,null,null,null)
D.eGb=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUU=new A.w("Cashier",null,D.eGb,null,null,null,null,null,null,null,null,null)
D.cPh=w([D.bxu,B.bo,D.eUU],x.p)
D.epa=new A.cC(B.b0,B.e,B.Q,B.m,null,B.p,null,0,D.cPh,null)
D.eRl=new A.w("Transfer & settings",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.bmI=new A.bH(1,B.br,D.eRl,null)
D.cAJ=w([D.aie,B.ax,D.bmI],x.p)
D.epb=new A.cC(B.b0,B.e,B.j,B.m,null,B.p,null,0,D.cAJ,null)
D.esl=new A.ar(16,40)
D.esq=new A.ar(22,64)
D.esx=new A.ar(280,88)
D.eth=new A.a5(30,null,null,null)
D.euy=new A.hJ(2,12,12,1.05,null)
D.eUA=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.evg=new A.b_(D.eUA,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eUP=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aIQ=new A.b_(D.eUP,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f1i=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.evK=new A.b_(D.f1i,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.faP=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.evP=new A.b_(D.faP,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWE=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.evW=new A.b_(D.eWE,null,null,null,null,null,null,null,null,null,null,null,null,B.fJ,!1,null,null,null,B.q,null)
D.f8j=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aIU=new A.b_(D.f8j,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eRV=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ewl=new A.b_(D.eRV,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.fbq=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.ex4=new A.b_(D.fbq,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f6K=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ext=new A.b_(D.f6K,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.faT=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.exw=new A.b_(D.faT,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f2L=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.exy=new A.b_(D.f2L,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eYm=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.exz=new A.b_(D.eYm,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eYn=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eyz=new A.b_(D.eYn,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eUC=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eyR=new A.b_(D.eUC,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWm=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ez9=new A.b_(D.eWm,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f2h=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.ezp=new A.b_(D.f2h,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eZ4=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.ezq=new A.b_(D.eZ4,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eCj=new A.F(!0,D.k0,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCH=new A.F(!0,D.k0,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDg=new A.r0(!0,B.qM,null,null,null,null,B.dm,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDw=new A.F(!0,D.k0,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE3=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4e=new A.r0(!0,B.PG,null,null,null,null,B.dm,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF2=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFr=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGV=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGZ=new A.F(!0,G.ih,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIa=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIP=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJt=new A.F(!0,B.bV,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJy=new A.F(!0,B.bQ,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJV=new A.F(!0,D.Dc,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK3=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL0=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLt=new A.F(!0,B.bV,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLU=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNl=new A.F(!0,B.ai,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNt=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL0=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4G=new A.F(!0,B.ai,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP3=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePq=new A.F(!0,G.ih,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePx=new A.F(!0,G.ih,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQg=new A.w("Themes",null,B.pB,null,null,null,null,null,null,null,null,null)
D.eQQ=new A.w("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eGG=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRa=new A.w("Debt receipt",null,D.eGG,null,B.L,null,null,null,null,null,null,null)
D.aKX=new A.F(!0,B.ai,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRr=new A.w("Person who owes",null,D.aKX,null,null,null,null,null,null,null,null,null)
D.eSm=new A.w("Notes",null,B.a4l,null,null,null,null,null,null,null,null,null)
D.eSL=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eFJ=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSP=new A.w("Share",null,D.eFJ,null,null,null,null,null,null,null,null,null)
D.eTE=new A.w("Move your family trees",null,D.aL0,null,null,null,null,null,null,null,null,null)
D.eUc=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eUO=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eVY=new A.w("Remove this book?",null,B.hf,null,null,null,null,null,null,null,null,null)
D.aLp=new A.w("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eX0=new A.w("What should the AI do?",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.eYi=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eZj=new A.w("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.eNf=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZL=new A.w("NGMY.ORG",null,D.eNf,null,B.L,null,null,null,null,null,null,null)
D.f_U=new A.w("Scan family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eJN=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0B=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eJN,null,B.L,null,null,null,null,null,null,null)
D.f1J=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.f1P=new A.w("Thumbnail",null,B.pB,null,null,null,null,null,null,null,null,null)
D.f2n=new A.w("Save the cover",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f2M=new A.w("Your photos",null,B.pB,null,null,null,null,null,null,null,null,null)
D.f30=new A.w("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f3s=new A.w("Design your cover",null,R.BS,null,null,null,null,null,null,null,null,null)
D.f3y=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.f3B=new A.w("PICTURE",null,H.mh,null,null,null,null,null,null,null,null,null)
D.f3X=new A.w("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f3Z=new A.w("You can undo it right after.",null,N.a4q,null,null,null,null,null,null,null,null,null)
D.f4r=new A.w("Print",null,B.tK,null,null,null,null,null,null,null,null,null)
D.f4M=new A.w("Amount owed",null,D.aKX,null,null,null,null,null,null,null,null,null)
D.f4Z=new A.w("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f5w=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.f5z=new A.w("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f5Y=new A.w("Debtor signature",null,B.a4l,null,null,null,null,null,null,null,null,null)
D.f65=new A.w("Change icon",null,E.aKe,null,null,null,null,null,null,null,null,null)
D.f79=new A.w("Family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f7y=new A.w("Download",null,B.tK,null,null,null,null,null,null,null,null,null)
D.f7C=new A.w("Change",null,B.pB,null,null,null,null,null,null,null,null,null)
D.f8p=new A.w("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f8s=new A.w("WHAT SHOULD IT CHANGE?",null,H.mh,null,null,null,null,null,null,null,null,null)
D.f91=new A.w("COLOUR",null,H.mh,null,null,null,null,null,null,null,null,null)
D.f9d=new A.w("Do it",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f9g=new A.w("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fab=new A.w("Create Family Tree",null,B.eR,null,null,null,null,null,null,null,null,null)
D.eBm=new A.F(!0,E.jy,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.far=new A.w("Write the first page myself",null,D.eBm,null,null,null,null,null,null,null,null,null)
D.faW=new A.w("Use this header",null,B.cr,null,null,null,null,null,null,null,null,null)
D.fb0=new A.w("Create Project",null,E.aKJ,null,null,null,null,null,null,null,null,null)
D.ff8=new C.a9e(1,"header")
D.a5m=new C.a9e(2,"projects")
D.ff9=new C.a9e(3,"cashier")
D.a5n=new C.a9e(4,"familyTree")
D.fpZ=new C.cqP(0,"start")
D.fq_=new C.cqQ(0,"start")
D.ffn=new C.Ww(null)
D.fgm=new C.WY(null)
D.d5P=new A.bs(B.iA,[],A.az("bs<n,Et>"))
D.cRt=w([],x.E)
D.cRu=w([],x.M)
D.fgT=new C.baS(D.d5P,D.cRt,D.cRu,0,0,null,null)
D.fiz=new C.Yl(null)
D.a63=new C.aGE(0,"projects")
D.aOc=new C.aGE(1,"cashier")
D.fnV=new C.aGE(2,"familyTree")})()};
(a=>{a["STolWNbbcS0v7fKKXBskdCvhVl4="]=a.current})($__dart_deferred_initializers__);