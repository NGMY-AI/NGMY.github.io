((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,G,F,E,A1,Q,A2,R,A3,A4,M,A5,H,S,T,U,V,A6,A7,W,A8,A9,X,Aa,Ab,Ac,K,Ad,Y,Z,L,N,C={
byL(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$byL=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uA(null,""),$async$byL)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.P(y.j)
t=A.mE(b1)
s=A.bU(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dA(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dj(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.aj(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qg(t,a1,B.h5,E.Dp),$async$byL)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ow(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.a9(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.P(l!=null&&A.Jj(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Z(r.a(j.h(a2,a7)),q,p):B.cs
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a08(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byL,v)},
aen(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aen=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uA(null,""),$async$aen)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.P(y.j)
t=A.mE(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a_W(new A.J(r,new C.fh1(),r.$ti.k("J<ai.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ad("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fh0(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.aj(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aen)
case 6:l=c5
k=F.Ow(l==null?"":l)
if(k==null)throw A.P("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alx(s,D.d30,r.b(k.h(0,"cover"))?A.Z(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.P("There is no page to change.")
h=A.S(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dA(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Q.aj(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aen)
case 10:l=c5
k=l==null?null:F.Ow(l)
if(k==null)throw A.P(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d2(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.kK(a5,a2.k("kK<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a6(a9)
b1=A.aQ(b0.h(a9,"index"))
i=b1==null?null:B.k.L(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.t(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.t(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.m(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bf<2>")
p=A.cy(new A.bf(h,s),new C.fh2(),s.k("G.E"),p)
p=F.a_W(A.oI(p,3,A.a2(p).k("G.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.A(new A.cu(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a08(s,b9),$async$aen)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alx(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aen,v)},
h3R(d,e,f){return A.ce(null,B.w.j(0.65),!1,null,new C.fpV(e,f),d,null,!0,!0,x.g2)},
alx:function alx(d,e,f){this.a=d
this.b=e
this.c=f},
fh1:function fh1(){},
fh0:function fh0(d){this.a=d},
fh2:function fh2(){},
fpV:function fpV(d,e){this.a=d
this.b=e},
bwG(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bwG=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.bf(b1,new C.f7l())){u=null
w=1
break}t=B.d.e8(b1,new C.f7m())
s=$.a1()
r=new A.rs()
q=A.Fy(r,D.aG5)
p=A.U()
p.r=B.c.gt(0)
q.bp(D.aG5,p)
o=A.U()
o.r=B.M.gt(0)
o.c=3.6
o.b=B.ak
o.d=B.bZ
o.e=B.fl
n=new C.f7r(t)
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
s=$.a1()
p=A.a([],x.v)
a3=new A.b0(s.r,B.aw,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.bj(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.av(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.b4(a3,o)}else{p=A.a([],x.v)
a3=new A.b0(s.r,B.aw,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.bj(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.av(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.b4(a3,o)}w=4
return A.b(r.pM().ym(520,160),$async$bwG)
case 4:w=3
return A.b(b3.hf(B.fI),$async$bwG)
case 3:b0=b3
u=b0==null?null:J.f1(B.dz.gaL(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bwG,v)},
feI(d){return C.hHg(d)},
hHg(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$feI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.baF()
n=d.x!=null&&d.y3(null).length===0
if(d.x!=null)t=n?D.xY:D.Go
else t=d.gRO()?D.Go:D.aBj
w=3
return A.b(C.bwG(d.ax),$async$feI)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akg(s)
r=A.a24(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBj}else{p.c=C.vS(q,!0)
p.b=n?D.xY:D.Go}r.a0D(A.fzq(new C.feK(p,d,new C.feL(),t,n,o),null,D.biR,B.uW))
u=r.jz(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$feI,v)},
flj(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$flj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.feI(d),$async$flj)
case 3:t=f
s=B.a.i(d.b)
r=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aI(s,r,"_")
if(q.length>40)q=B.a.al(q,0,40)
u=A4.F5(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$flj,v)},
f7l:function f7l(){},
f7m:function f7m(){},
f7r:function f7r(d){this.a=d},
feL:function feL(){},
feK:function feK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
feJ:function feJ(){},
fqm(d,e){var w=0,v=A.j(x.H)
var $async$fqm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.w.j(0.55),!0,null,new C.fqq(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fqm)
case 2:return A.h(null,v)}})
return A.i($async$fqm,v)},
bzd(d,e,f,g){return C.hOt(d,e,f,g)},
hOt(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bzd=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aF(t)}catch(q){r=null}if(r==null||r.length===0){d.F(x.q).f.P(D.ete)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.fqi(g,r,f),d,null,!0,!0,x.H),$async$bzd)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bzd,v)},
fqr(d,e){var w=0,v=A.j(x.H)
var $async$fqr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.fqu(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fqr)
case 2:return A.h(null,v)}})
return A.i($async$fqr,v)},
aV0:function aV0(d,e){this.c=d
this.a=e},
bXk:function bXk(){},
b6X:function b6X(d,e){this.b=d
this.a=e},
fqq:function fqq(d,e){this.a=d
this.b=e},
fqn:function fqn(d){this.a=d},
fqo:function fqo(d,e,f){this.a=d
this.b=e
this.c=f},
fqp:function fqp(d,e){this.a=d
this.b=e},
fqi:function fqi(d,e,f){this.a=d
this.b=e
this.c=f},
fqg:function fqg(d){this.a=d},
fqh:function fqh(d,e,f){this.a=d
this.b=e
this.c=f},
fqu:function fqu(d,e){this.a=d
this.b=e},
fqs:function fqs(d){this.a=d},
fqt:function fqt(d,e,f){this.a=d
this.b=e
this.c=f},
fa4(d,e){var w=0,v=A.j(x.y),u,t
var $async$fa4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_H(d),$async$fa4)
case 3:t=g
J.n_(t,new C.fa5(e))
u=A.af0(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fa4,v)},
fa5:function fa5(d){this.a=d},
alE:function alE(d,e,f){this.c=d
this.d=e
this.a=f},
azF:function azF(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dy0:function dy0(d,e){this.a=d
this.b=e},
dxM:function dxM(d,e){this.a=d
this.b=e},
dxP:function dxP(d,e,f){this.a=d
this.b=e
this.c=f},
dxO:function dxO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxN:function dxN(d,e){this.a=d
this.b=e},
dxQ:function dxQ(d,e){this.a=d
this.b=e},
dxK:function dxK(){},
dxL:function dxL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxJ:function dxJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxu:function dxu(d){this.a=d},
dxv:function dxv(d,e,f){this.a=d
this.b=e
this.c=f},
dxw:function dxw(d,e){this.a=d
this.b=e},
dxt:function dxt(d){this.a=d},
dxB:function dxB(d,e){this.a=d
this.b=e},
dxs:function dxs(d){this.a=d},
dxC:function dxC(d,e,f){this.a=d
this.b=e
this.c=f},
dxD:function dxD(d,e,f){this.a=d
this.b=e
this.c=f},
dxr:function dxr(d,e){this.a=d
this.b=e},
dxE:function dxE(d,e,f){this.a=d
this.b=e
this.c=f},
dxq:function dxq(d,e){this.a=d
this.b=e},
dxF:function dxF(d,e){this.a=d
this.b=e},
dxp:function dxp(d){this.a=d},
dxG:function dxG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxn:function dxn(){},
dxh:function dxh(d){this.a=d},
dxi:function dxi(d){this.a=d},
dxo:function dxo(d,e){this.a=d
this.b=e},
dxH:function dxH(d,e){this.a=d
this.b=e},
dxm:function dxm(d){this.a=d},
dxI:function dxI(d){this.a=d},
dxl:function dxl(){},
dxx:function dxx(d,e){this.a=d
this.b=e},
dxk:function dxk(d){this.a=d},
dxy:function dxy(d,e,f){this.a=d
this.b=e
this.c=f},
dxj:function dxj(d,e){this.a=d
this.b=e},
dxg:function dxg(d,e){this.a=d
this.b=e},
dxz:function dxz(d){this.a=d},
dxA:function dxA(d,e,f){this.a=d
this.b=e
this.c=f},
dy3:function dy3(){},
dy4:function dy4(d,e){this.a=d
this.b=e},
dy1:function dy1(d){this.a=d},
dy2:function dy2(d){this.a=d},
dxY:function dxY(d,e){this.a=d
this.b=e},
dxZ:function dxZ(d){this.a=d},
dxR:function dxR(d,e,f){this.a=d
this.b=e
this.c=f},
dxS:function dxS(d,e,f){this.a=d
this.b=e
this.c=f},
dxT:function dxT(d,e,f){this.a=d
this.b=e
this.c=f},
dxU:function dxU(d,e,f){this.a=d
this.b=e
this.c=f},
dxV:function dxV(d,e,f){this.a=d
this.b=e
this.c=f},
dxW:function dxW(d,e,f){this.a=d
this.b=e
this.c=f},
dxX:function dxX(d,e,f){this.a=d
this.b=e
this.c=f},
dy5:function dy5(){},
dy6:function dy6(){},
dy7:function dy7(){},
dy8:function dy8(d){this.a=d},
dy_:function dy_(d,e){this.a=d
this.b=e},
h04(d){return B.d.dI(D.Zc,new C.fat(d),new C.fau())},
tz:function tz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fat:function fat(d){this.a=d},
fau:function fau(){},
ahZ:function ahZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQS:function aQS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QJ:function QJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bav:function bav(){this.d=$
this.c=this.a=null},
cZu:function cZu(d,e){this.a=d
this.b=e},
cZs:function cZs(d,e){this.a=d
this.b=e},
cZt:function cZt(){},
cZv:function cZv(d,e){this.a=d
this.b=e},
fMd(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bg(J.k(u==null?"":u))
return new C.mM(t,w,v,u==null?new A.O(Date.now(),0,!1):u)},
J4(d,e){return C.hFU(d,e)},
hFU(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$J4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$J4)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Q.aE(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d2(p,x.f)
o=A.cy(o,new C.fck(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a5<G.E>")
o=A.A(new A.a5(o,new C.fcl(),n),n.k("G.E"))
B.d.aZ(o,new C.fcm())
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
return A.i($async$J4,v)},
zH(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zH=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aw(),$async$zH)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b4(f,new C.fp3(),x.a)
r=A.A(r,r.$ti.k("ai.E"))
w=4
return A.b(t.an("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.aj(r,null)),$async$zH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zH,v)},
aN6(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aN6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J4(d,e),$async$aN6)
case 2:u=h
t=J.cB(u)
s=t.bg(u,new C.fwG(f))
if(s===-1)t.ck(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zH(d,e,u),$async$aN6)
case 3:return A.h(null,v)}})
return A.i($async$aN6,v)},
bx6(d,e,f){var w=0,v=A.j(x.H),u
var $async$bx6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J4(d,e),$async$bx6)
case 2:u=h
J.n_(u,new C.f9X(f))
w=3
return A.b(C.zH(d,e,u),$async$bx6)
case 3:return A.h(null,v)}})
return A.i($async$bx6,v)},
bxk(d,e){return C.hFT(d,e)},
hFT(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bxk=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aw(),$async$bxk)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Kf
w=1
break}p=B.Q.aE(0,q,null)
if(x.f.b(p)){o=A.Z(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aQ(o.h(0,"emblem"))
k=k==null?null:B.k.L(k)
if(k==null)k=0
if(D.AP.am(0,o.h(0,"foil")))j=A.cI(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a_C,o.h(0,"position"))?A.cI(o.h(0,"position")):"middle"
g=B.d.q(D.a_7,o.h(0,"frame"))?A.cI(o.h(0,"frame")):"double"
f=B.d.q(D.a_2,o.h(0,"texture"))?A.cI(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.q(D.cBz,o.h(0,"header"))?A.cI(o.h(0,"header")):"classic"
o=new C.FZ(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Kf
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Kf
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bxk,v)},
PB(d,e,f){return C.hO_(d,e,f)},
hO_(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$PB=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aw(),$async$PB)
case 7:r=h
w=8
return A.b(r.an("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.aj(f.ad(),null)),$async$PB)
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
return A.i($async$PB,v)},
P5(d,e){return C.hFV(d,e)},
hFV(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$P5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$P5)
case 7:r=g
q=r.rm("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.A(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.J4(d,e),$async$P5)
case 8:if(!j.cs(g)){n=B.a.i(d.toLowerCase())
m=J.l8(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$P5)
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
return A.i($async$P5,v)},
adJ(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P5(d,e),$async$adJ)
case 3:s=g
r=J.a6(s)
if(r.gH(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gH(s):"main"
r.G(s,t)
w=5
return A.b(A.aw(),$async$adJ)
case 5:w=4
return A.b(g.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adJ)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adJ,v)},
a0m(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0m=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.P5(d,e),$async$a0m)
case 2:s=h
J.hA(s,f)
w=3
return A.b(A.aw(),$async$a0m)
case 3:u=h
w=4
return A.b(u.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0m)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0m)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0m)
case 6:return A.h(null,v)}})
return A.i($async$a0m,v)},
mM:function mM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fck:function fck(){},
fcl:function fcl(){},
fcm:function fcm(){},
fp3:function fp3(){},
fwG:function fwG(d){this.a=d},
f9X:function f9X(d){this.a=d},
FZ:function FZ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bIJ:function bIJ(d){this.a=d},
hOi(d,e,f,g,h,i,j){return A.a7(d,!1).cs(A.eH(new C.fpz(j,i,f,e,h,g),!0,null,x.H))},
P1(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$P1=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P5(h,g),$async$P1)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.a9(k)>=6){d.F(x.q).f.P(D.aI0)
u=!1
w=1
break}w=4
return A.b(C.h3R(d,f,e),$async$P1)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adJ(h,g),$async$P1)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mM(""+(q+n),l,B.a.i(m.b),new A.O(Date.now(),0,!1)))}w=6
return A.b(C.zH(h,r,p),$async$P1)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.PB(h,r,new C.FZ("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$P1)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P1,v)},
fpz:function fpz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
X8:function X8(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awM:function awM(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d_9:function d_9(d){this.a=d},
d_8:function d_8(d,e){this.a=d
this.b=e},
cZY:function cZY(d,e){this.a=d
this.b=e},
cZV:function cZV(d,e){this.a=d
this.b=e},
cZw:function cZw(d){this.a=d},
cZx:function cZx(d,e){this.a=d
this.b=e},
cZZ:function cZZ(d){this.a=d},
cZF:function cZF(d){this.a=d},
cZD:function cZD(d){this.a=d},
cZE:function cZE(d){this.a=d},
cZG:function cZG(d){this.a=d},
cZW:function cZW(d){this.a=d},
cZX:function cZX(){},
cZB:function cZB(d){this.a=d},
cZC:function cZC(d,e){this.a=d
this.b=e},
cZH:function cZH(d){this.a=d},
cZI:function cZI(d,e){this.a=d
this.b=e},
d_7:function d_7(d){this.a=d},
d_6:function d_6(d,e){this.a=d
this.b=e},
d_5:function d_5(d){this.a=d},
cZS:function cZS(d){this.a=d},
cZR:function cZR(d){this.a=d},
cZT:function cZT(d){this.a=d},
cZy:function cZy(d,e){this.a=d
this.b=e},
cZU:function cZU(d,e){this.a=d
this.b=e},
cZL:function cZL(d){this.a=d},
cZM:function cZM(d){this.a=d},
cZK:function cZK(){},
cZN:function cZN(d){this.a=d},
cZO:function cZO(d){this.a=d},
cZP:function cZP(d,e){this.a=d
this.b=e},
cZQ:function cZQ(d,e,f){this.a=d
this.b=e
this.c=f},
cZJ:function cZJ(d,e){this.a=d
this.b=e},
d_0:function d_0(d){this.a=d},
d__:function d__(){},
d_1:function d_1(d){this.a=d},
d_2:function d_2(d){this.a=d},
d_3:function d_3(d){this.a=d},
d_4:function d_4(d,e){this.a=d
this.b=e},
cZz:function cZz(d){this.a=d},
cZA:function cZA(d){this.a=d},
Xc:function Xc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baQ:function baQ(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d0A:function d0A(d){this.a=d},
d0B:function d0B(d){this.a=d},
d0z:function d0z(d){this.a=d},
d0C:function d0C(d){this.a=d},
d0y:function d0y(d){this.a=d},
d0D:function d0D(d){this.a=d},
d0x:function d0x(d){this.a=d},
d0E:function d0E(d,e){this.a=d
this.b=e},
d0w:function d0w(d,e){this.a=d
this.b=e},
d0F:function d0F(d,e){this.a=d
this.b=e},
Xa:function Xa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acd:function acd(d,e,f){this.a=d
this.b=e
this.c=f},
awN:function awN(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d_o:function d_o(d,e){this.a=d
this.b=e},
d_n:function d_n(d,e){this.a=d
this.b=e},
d_s:function d_s(d){this.a=d},
d_r:function d_r(d,e){this.a=d
this.b=e},
d_p:function d_p(d){this.a=d},
d_q:function d_q(d){this.a=d},
d_t:function d_t(d){this.a=d},
d_u:function d_u(d){this.a=d},
d_m:function d_m(d,e){this.a=d
this.b=e},
d_l:function d_l(d,e){this.a=d
this.b=e},
Id:function Id(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wq:function Wq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cyV:function cyV(d){this.a=d},
cyW:function cyW(){},
cyX:function cyX(d){this.a=d},
b87:function b87(d,e,f){this.b=d
this.c=e
this.a=f},
b7Z:function b7Z(d,e){this.b=d
this.a=e},
tA:function tA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WJ:function WJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b85:function b85(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cSm:function cSm(d,e,f){this.a=d
this.b=e
this.c=f},
cSl:function cSl(d,e){this.a=d
this.b=e},
cSL:function cSL(d){this.a=d},
cSy:function cSy(){},
cSM:function cSM(d){this.a=d},
cSx:function cSx(){},
cSN:function cSN(d,e){this.a=d
this.b=e},
cSw:function cSw(d,e){this.a=d
this.b=e},
cSO:function cSO(d,e){this.a=d
this.b=e},
cSv:function cSv(d,e){this.a=d
this.b=e},
cSP:function cSP(d){this.a=d},
cSu:function cSu(){},
cSQ:function cSQ(d,e){this.a=d
this.b=e},
cSt:function cSt(d,e){this.a=d
this.b=e},
cSR:function cSR(d){this.a=d},
cSG:function cSG(d,e){this.a=d
this.b=e},
cSS:function cSS(d){this.a=d},
cST:function cST(d){this.a=d},
cSV:function cSV(d){this.a=d},
cSW:function cSW(d){this.a=d},
cSF:function cSF(d,e){this.a=d
this.b=e},
cSX:function cSX(d,e){this.a=d
this.b=e},
aDC:function aDC(d){this.a=d},
bdi:function bdi(d){this.a=d},
b6l:function b6l(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hEV(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.afb(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.O(Date.now(),0,!1))
s=new C.fax(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a5<1>"),q=q.k("cQ<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wC)m.push(l===D.Wi?"male":"female")
l=u.w
k=A.ad(a3,!0,!1,!1,!1).cz(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ad(a3,!0,!1,!1,!1).cz(k)
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
if(e!=null&&w.am(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.A(new A.cQ(new A.a5(a4,new C.fav(u,f),p),new C.faw(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.al(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hEW(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.afb(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.faC(v,e)
q=new C.faA(v)
p=A.S(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.m(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.m(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.am(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.am(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.m(0,s.a,d)}}d=p.$ti.k("bf<2>")
d=A.d8(new A.bf(p,d),d.k("G.E"))
n=A.A(d,A.a2(d).k("ck.E"))
B.d.fw(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.hX(l,new C.faB(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hrf(d,e,f,g){var w,v,u=C.hEX(d,e)
if(u<=0||f.length<=u)return new A.abP(!1,D.AE,f)
if(g.q(0,e.a))return new A.abP(!1,D.AE,f)
w=A.T(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dz(0)
return new A.abP(!0,A.dc(f,u,null,w).dz(0),v)},
hrg(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.afb(d3),d2=d1.length
if(d2===0)return D.faA
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ci(0,t.a,new C.d_B(t))}s=new C.d_S(v)
d2=x.h
r=A.S(w,d2)
q=new C.d_K(r)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d_J(r)
l=A.S(w,x.do)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.ci(0,k,new C.d_C()),o)}h=new C.d_I(s)
g=new C.d_H(l,r)
p=v.$ti.k("bf<2>")
o=p.k("a5<G.E>")
f=A.A(new A.a5(new A.bf(v,p),new C.d_D(h),o),o.k("G.E"))
e=f.length===0?new A.bf(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aZ(w))
if(a0>d){d=a0
e=t}}a1=A.aZ(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.gR
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.d_Q(new C.d_M(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dw(v,v.r,v.e),j=a2.gahv(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eN([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.G(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qC(J.dE(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.cc)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.d_A(a2,new C.d_R(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cu<1>")
d2=A.A(new A.cu(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.Eh(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Il(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.A(new A.cu(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bD(0,new C.d_E(c6,b4))
for(d2=new A.cN(a4,a4.$ti.k("cN<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.hX(j,new C.d_F(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d_G())
c6.push(new C.aFH(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.baA(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h_E(d){var w=A.ad("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fV8(d,e,f,g,h,i,j,k,l,m,n){return new C.XM(k,f,j,e,l,n,m,d,g,h,i,null)},
ayG(d,e,f,g,h,i,j){return new C.bee(i,d,e,f,j,h,g,null)},
amK:function amK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAf:function aAf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dKU:function dKU(d){this.a=d},
dKT:function dKT(d){this.a=d},
dKW:function dKW(d,e){this.a=d
this.b=e},
dKX:function dKX(d,e){this.a=d
this.b=e},
dKY:function dKY(d){this.a=d},
dKS:function dKS(d,e){this.a=d
this.b=e},
dKV:function dKV(d){this.a=d},
dL_:function dL_(d){this.a=d},
dKZ:function dKZ(d,e){this.a=d
this.b=e},
amE:function amE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAc:function aAc(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dKk:function dKk(d){this.a=d},
dKi:function dKi(d){this.a=d},
dKj:function dKj(d){this.a=d},
dKl:function dKl(d,e){this.a=d
this.b=e},
dKf:function dKf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJO:function dJO(d){this.a=d},
dJP:function dJP(d,e){this.a=d
this.b=e},
dK2:function dK2(d){this.a=d},
dK0:function dK0(d){this.a=d},
dK1:function dK1(d,e){this.a=d
this.b=e},
dK3:function dK3(d){this.a=d},
dK4:function dK4(d,e){this.a=d
this.b=e},
dKe:function dKe(d,e){this.a=d
this.b=e},
dKc:function dKc(d,e){this.a=d
this.b=e},
dKb:function dKb(d,e){this.a=d
this.b=e},
dK7:function dK7(d,e){this.a=d
this.b=e},
dK6:function dK6(d){this.a=d},
dK8:function dK8(d,e){this.a=d
this.b=e},
dK5:function dK5(d){this.a=d},
dK9:function dK9(d){this.a=d},
dKa:function dKa(d){this.a=d},
dKd:function dKd(d,e){this.a=d
this.b=e},
dJC:function dJC(d,e){this.a=d
this.b=e},
dJD:function dJD(d,e){this.a=d
this.b=e},
dKn:function dKn(d,e,f){this.a=d
this.b=e
this.c=f},
dKh:function dKh(d,e,f){this.a=d
this.b=e
this.c=f},
dKg:function dKg(d){this.a=d},
dJE:function dJE(d){this.a=d},
dJF:function dJF(d){this.a=d},
dJG:function dJG(){},
dJH:function dJH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJL:function dJL(d,e){this.a=d
this.b=e},
dJK:function dJK(d,e){this.a=d
this.b=e},
dJJ:function dJJ(d){this.a=d},
dJM:function dJM(d,e){this.a=d
this.b=e},
dJI:function dJI(d){this.a=d},
dKm:function dKm(d){this.a=d},
dJY:function dJY(){},
dJZ:function dJZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJX:function dJX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJT:function dJT(d,e,f){this.a=d
this.b=e
this.c=f},
dJS:function dJS(d,e,f){this.a=d
this.b=e
this.c=f},
dJQ:function dJQ(d,e){this.a=d
this.b=e},
dJU:function dJU(d){this.a=d},
dJV:function dJV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJR:function dJR(d,e){this.a=d
this.b=e},
dJW:function dJW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dK_:function dK_(d,e){this.a=d
this.b=e},
dKu:function dKu(){},
dKv:function dKv(d,e){this.a=d
this.b=e},
dKw:function dKw(d){this.a=d},
dKx:function dKx(d,e){this.a=d
this.b=e},
dKq:function dKq(d){this.a=d},
dKo:function dKo(d,e){this.a=d
this.b=e},
dKr:function dKr(d,e){this.a=d
this.b=e},
dKs:function dKs(d,e){this.a=d
this.b=e},
dKt:function dKt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dKy:function dKy(d){this.a=d},
dKp:function dKp(d){this.a=d},
dJN:function dJN(d){this.a=d},
bay:function bay(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d_y:function d_y(d){this.a=d},
d_x:function d_x(d,e){this.a=d
this.b=e},
d_z:function d_z(d){this.a=d},
d_w:function d_w(d,e){this.a=d
this.b=e},
fax:function fax(d,e){this.a=d
this.b=e},
fay:function fay(d){this.a=d},
faz:function faz(){},
fav:function fav(d,e){this.a=d
this.b=e},
faw:function faw(){},
faC:function faC(d,e){this.a=d
this.b=e},
faD:function faD(d){this.a=d},
faE:function faE(){},
faA:function faA(d){this.a=d},
faB:function faB(d,e){this.a=d
this.b=e},
Il:function Il(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Eh:function Eh(d,e){this.a=d
this.b=e},
baA:function baA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_B:function d_B(d){this.a=d},
d_S:function d_S(d){this.a=d},
d_K:function d_K(d){this.a=d},
d_L:function d_L(){},
d_J:function d_J(d){this.a=d},
d_C:function d_C(){},
d_I:function d_I(d){this.a=d},
d_H:function d_H(d,e){this.a=d
this.b=e},
d_D:function d_D(d){this.a=d},
d_M:function d_M(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_N:function d_N(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_P:function d_P(){},
d_Q:function d_Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_R:function d_R(){},
d_A:function d_A(d,e,f,g,h,i,j,k,l,m){var _=this
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
d_E:function d_E(d,e){this.a=d
this.b=e},
d_F:function d_F(d){this.a=d},
d_G:function d_G(){},
aFH:function aFH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baB:function baB(d,e){this.b=d
this.a=e},
d_T:function d_T(){},
d_U:function d_U(d){this.a=d},
d_V:function d_V(d){this.a=d},
d_W:function d_W(){},
bef:function bef(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9G:function b9G(d,e){this.b=d
this.a=e},
brE:function brE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eVn:function eVn(d){this.a=d},
bhw:function bhw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ex2:function ex2(d){this.a=d},
ex1:function ex1(d,e){this.a=d
this.b=e},
XM:function XM(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayE:function ayE(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
df9:function df9(d,e){this.a=d
this.b=e},
df8:function df8(d){this.a=d},
df6:function df6(d){this.a=d},
df7:function df7(d){this.a=d},
dfi:function dfi(d){this.a=d},
dfj:function dfj(d){this.a=d},
dfh:function dfh(d,e){this.a=d
this.b=e},
dfk:function dfk(){},
dfn:function dfn(d){this.a=d},
dfg:function dfg(d,e){this.a=d
this.b=e},
dfm:function dfm(){},
dfo:function dfo(d){this.a=d},
dff:function dff(d,e){this.a=d
this.b=e},
dfp:function dfp(d){this.a=d},
dfe:function dfe(d){this.a=d},
dfq:function dfq(d){this.a=d},
dfd:function dfd(d){this.a=d},
dfr:function dfr(d){this.a=d},
dfc:function dfc(d){this.a=d},
dfs:function dfs(d){this.a=d},
dfb:function dfb(d){this.a=d},
dft:function dft(d){this.a=d},
dfa:function dfa(d,e){this.a=d
this.b=e},
dfl:function dfl(d){this.a=d},
aaH:function aaH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bee:function bee(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaG:function aaG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bed:function bed(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dfu:function dfu(d){this.a=d},
dfv:function dfv(d,e){this.a=d
this.b=e},
ayF:function ayF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEK:function aEK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaI:function aaI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dfE:function dfE(d){this.a=d},
I9:function I9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fQ5(d){var w=d.R,v=x.N
return w.iD(w,new C.c2R(),v,v)},
hiS(d){var w=d.by
if(w>=0)return w
return 5},
fQ7(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fQ5(d).h(0,v)
if(w==null||w.length===0)return null
return A.bg(w)},
fQ6(d,e){var w=C.fQ7(d,e)
if(w!=null&&w.c8(new A.O(Date.now(),0,!1)))return!0
return!1},
hiT(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Z(C.fQ5(d),w,w)
u=C.fQ7(d,e)
t=u!=null&&u.c8(new A.O(Date.now(),0,!1))?u:new A.O(Date.now(),0,!1)
v.m(0,s,t.bL(A.dB(30,0,0,0,0,0).a).a4().aa())
d.R=v},
aWq(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWq=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.kZ(t,B.Gc),$async$aWq)
case 3:if(l){u=!0
w=1
break}u=A.kE(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Gc,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWq,v)},
c2R:function c2R(){},
hiQ(){var w,v=$.oW(),u=J.dZ(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fM(u)},
GR(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$GR)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_family_tree_backup_codes_v1",null,!1,B.bD),$async$GR)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.Z(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a4(m)
$.al.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GR,v)},
a4U(d){return C.hiR(d)},
hiR(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a4U=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$a4U)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cz,null),$async$a4U)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a4(p)
$.al.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a4U,v)},
c2Q(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c2Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GR(),$async$c2Q)
case 3:t=m.jj(f),t=t.gag(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a6(q)
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
return A.i($async$c2Q,v)},
LC(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$LC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c2Q(d),$async$LC)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.GR(),$async$LC)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.Z(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.O(Date.now(),0,!1).a4().aa())
r.m(s,t,o)
w=9
return A.b(C.a4U(s),$async$LC)
case 9:case 8:u=t
w=1
break
case 5:n=C.hiQ()
w=10
return A.b(C.GR(),$async$LC)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=11
return A.b(C.a4U(s),$async$LC)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LC,v)},
aWp(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GR(),$async$aWp)
case 3:t=f
for(s=J.df(t),r=s.gdH(t),r=r.dz(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a4U(t),$async$aWp)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWp,v)},
a4V(d,e,f){var w=0,v=A.j(x.H),u
var $async$a4V=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amJ(d,e),$async$a4V)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.LC(d),$async$a4V)
case 7:w=4
break
case 5:w=8
return A.b(C.aWp(d),$async$a4V)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a4V,v)},
amD(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amD=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amJ(f,e),$async$amD)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bW(),$async$amD)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GR(),$async$amD)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a6(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amD,v)},
aWo(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bW(),$async$aWo)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GR(),$async$aWo)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a6(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWo,v)},
hiU(){var w,v=$.oW(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fM(u)},
amG(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$amG)
case 3:if(!g){u=null
w=1
break}t=C.hiU()
w=4
return A.b(A.T0(),$async$amG)
case 4:s=g
r=B.dB.aF(B.Q.aj(d.eE(),null))
r=B.cM.gcr().aF(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(A.a4W(s),$async$amG)
case 5:p=e?999:2
u=new A.YX("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amG,v)},
amF(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amF=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.T0(),$async$amF)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aQ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.L(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aWo(J.k(l==null?"":l),j),$async$amF)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{r=B.c0.c6(0,B.cw.aF(t))
s=C.fQ8(r)}catch(f){q=A.a4(f)
$.al.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dR(A.Z(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new A.O(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=5
return A.b(A.a4W(p),$async$amF)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amF,v)},
fQ8(d){var w,v,u,t,s=null
try{w=B.Q.aE(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hiW(A.Z(w,x.N,x.z))
return u}catch(t){v=A.a4(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fAt(d){var w=0,v=A.j(x.m),u,t,s
var $async$fAt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amF(t[1])
w=1
break}u=null
w=1
break}u=C.fQ8(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAt,v)},
hiW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d2(v,x.f)
u=A.cy(u,new C.c2T(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a5<G.E>")
s=A.A(new A.a5(u,new C.c2U(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bg(J.k(u==null?"":u))
if(r==null)r=new A.O(Date.now(),0,!1)
q=A.S(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jj(p),t=t.gag(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d2(l,u)
n=A.cy(n,new C.c2V(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a5<G.E>")
j=A.A(new A.a5(n,new C.c2W(),k),k.k("G.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amH(h,w,s,r,q)},
amJ(d,e){var w=0,v=A.j(x.y),u,t
var $async$amJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Lu(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zw(d),$async$amJ)
case 3:u=t.cs(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amJ,v)},
c31(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c31=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zw(d),$async$c31)
case 3:t=s.b4(f,new C.c32(),x.cs)
t=A.A(t,t.$ti.k("ai.E"))
B.d.aZ(t,new C.c33())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c31,v)},
T1(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$T1=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amJ(e,d),$async$T1)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.LC(e),$async$T1)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zw(e),$async$T1)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c3_(g))
r=A.A(t,t.$ti.k("G.E"))}t=J.a6(r)
if(t.gah(r)){u=null
w=1
break}t=t.di(r,new C.c30(e),x.k)
r=A.A(t,t.$ti.k("ai.E"))
q=A.S(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.J4(e,o),$async$T1)
case 14:n=i
if(J.cs(n))q.m(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.amH(s,B.a.i(e.toLowerCase()),r,new A.O(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T1,v)},
aWt(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWt=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T1(d,e,f,g),$async$aWt)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aI(t,s,"_")
r=q.a
u=A.EW(A.Ih(q.eE(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWt,v)},
aWs(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWs=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T1(d,e,f,g),$async$aWs)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amG(r,f),$async$aWs)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCL(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWs,v)},
T2(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T2=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fAt(a0),$async$T2)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amD(g.a,d,e,f,s,r),$async$T2)
case 6:if(!a2){if(r)throw A.P(A.b9("This backup expired or the sender's tree is no longer available."))
throw A.P(A.b9("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bwY(e,j),$async$T2)
case 12:case 11:w=13
return A.b(C.aeZ(e,j,s),$async$T2)
case 13:h=n.h(0,i)
w=h!=null&&J.cs(h)?14:15
break
case 14:w=16
return A.b(C.zH(e,i,h),$async$T2)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bl0(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T2,v)},
amH:function amH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2Y:function c2Y(){},
c2Z:function c2Z(){},
c2X:function c2X(){},
c2T:function c2T(){},
c2U:function c2U(){},
c2V:function c2V(){},
c2W:function c2W(){},
c32:function c32(){},
c33:function c33(){},
c3_:function c3_(d){this.a=d},
c30:function c30(d){this.a=d},
fIy(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f6(null,x.H)
return A.hk(d,new C.amI(w,e,g,i,f,h,null),!0,null,x.H)},
d_v(d,e,f,g,h,i,j,k){return new C.bax(i,e,k,j,g,f,h,d,null)},
amI:function amI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAe:function aAe(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dKH:function dKH(d){this.a=d},
dKI:function dKI(d,e,f){this.a=d
this.b=e
this.c=f},
dKM:function dKM(d,e){this.a=d
this.b=e},
dKN:function dKN(d){this.a=d},
dKE:function dKE(d){this.a=d},
dKF:function dKF(d,e){this.a=d
this.b=e},
dKG:function dKG(d,e){this.a=d
this.b=e},
dKL:function dKL(d){this.a=d},
dKK:function dKK(d,e){this.a=d
this.b=e},
dKJ:function dKJ(){},
dKP:function dKP(d){this.a=d},
dKQ:function dKQ(d,e){this.a=d
this.b=e},
dKO:function dKO(d,e){this.a=d
this.b=e},
d_X:function d_X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
baz:function baz(d,e,f){this.d=d
this.e=e
this.a=f},
a9Z:function a9Z(d,e,f){this.c=d
this.d=e
this.a=f},
bax:function bax(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
baC:function baC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y6:function Y6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAd:function aAd(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dKz:function dKz(d,e){this.a=d
this.b=e},
dKA:function dKA(d){this.a=d},
dKB:function dKB(d){this.a=d},
dKC:function dKC(d){this.a=d},
dKD:function dKD(d){this.a=d},
Y7:function Y7(d){this.a=d},
bfE:function bfE(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dKR:function dKR(d,e){this.a=d
this.b=e},
aV_(d,e){return new C.aUZ(d,e,null)},
aUZ:function aUZ(d,e,f){this.c=d
this.d=e
this.a=f},
hHl(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
hOs(d){return A.c0(B.K,null,new C.fq1(new C.t4(A.L(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fRZ(d,e){return new C.apz(e,d,null)},
aMO(d,e,f,g,h,i,j){var w=C.hHl(i)
if(w!=null)return A.bv(e,new A.a3(j,f,new C.a3Y(w,!0,null),null),B.ap)
return I.aM9(e,B.bN,f,g,h,i,j)},
lh:function lh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3Y:function a3Y(d,e,f){this.c=d
this.d=e
this.a=f},
bfn:function bfn(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
dx8:function dx8(d){this.a=d},
dx9:function dx9(){},
dxa:function dxa(d,e){this.a=d
this.b=e},
bfm:function bfm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fq1:function fq1(d){this.a=d},
fq0:function fq0(d,e){this.a=d
this.b=e},
fq_:function fq_(d,e){this.a=d
this.b=e},
fpZ:function fpZ(d,e){this.a=d
this.b=e},
apz:function apz(d,e,f){this.c=d
this.d=e
this.a=f},
caw:function caw(d,e){this.a=d
this.b=e},
aI1:function aI1(){},
hOd(d){var w=null
return A.ce(w,w,!0,w,new C.fpr(),d,w,!0,!0,x.e2)},
hPn(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.fwy(h,g,f,e),d,w,!0,!0,x.N)},
hOf(d,e){var w=null
return A.ce(w,w,!0,w,new C.fpt(e),d,w,!0,!0,x.dY)},
hOe(d){var w=null
return A.ce(w,w,!0,w,new C.fps(),d,w,!0,!0,x.c5)},
aPF:function aPF(d,e){this.a=d
this.b=e},
aPE:function aPE(d){this.a=d},
aNJ:function aNJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpr:function fpr(){},
fwy:function fwy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpt:function fpt(d){this.a=d},
fps:function fps(){},
WL:function WL(d,e){this.c=d
this.a=e},
avz:function avz(){var _=this
_.d=$
_.c=_.a=_.e=null},
cT8:function cT8(d){this.a=d},
cT9:function cT9(d){this.a=d},
cT7:function cT7(d,e){this.a=d
this.b=e},
cTa:function cTa(d){this.a=d},
cTb:function cTb(d){this.a=d},
WK:function WK(d){this.a=d},
avy:function avy(){this.d=$
this.c=this.a=null},
cT4:function cT4(d){this.a=d},
cT5:function cT5(d){this.a=d},
cT6:function cT6(d){this.a=d},
Wh:function Wh(d){this.a=d},
auk:function auk(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cqK:function cqK(){},
cqQ:function cqQ(d){this.a=d},
cqR:function cqR(d){this.a=d},
cqS:function cqS(d){this.a=d},
cqP:function cqP(){},
cqT:function cqT(d){this.a=d},
cqU:function cqU(d){this.a=d},
cqO:function cqO(){},
cqV:function cqV(d,e){this.a=d
this.b=e},
cqN:function cqN(d,e){this.a=d
this.b=e},
cqL:function cqL(d,e){this.a=d
this.b=e},
cqW:function cqW(d){this.a=d},
cqM:function cqM(){},
cqX:function cqX(d){this.a=d},
ZQ:function ZQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brw:function brw(){this.d=$
this.c=this.a=null},
eUQ:function eUQ(d,e){this.a=d
this.b=e},
eUR:function eUR(d){this.a=d},
eUS:function eUS(d,e){this.a=d
this.b=e},
a92:function a92(d,e){this.a=d
this.b=e},
E5:function E5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bru:function bru(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eUO:function eUO(d,e){this.a=d
this.b=e},
aud:function aud(d,e){this.c=d
this.a=e},
brv:function brv(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eUP:function eUP(d){this.a=d},
brt:function brt(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aK7:function aK7(){},
aK8:function aK8(){},
byQ(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bK(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.oc(B.o.u(t),A.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fok(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VH(A.dr(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMq(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hP().kA(85,1280,B.eu),$async$aMq)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aMq)
case 8:r=e
if(J.a9(r)===0){u=null
w=1
break}q=C.fRY()
w=9
return A.b(C.cav(q,r),$async$aMq)
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
o=A.a4(l)
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
return A.i($async$aMq,v)},
aMM(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aMM=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cas(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gai(g.split(",")):g
p=B.cw.aF(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.a1().K0(p,!0,null,i).cJ(0,B.fE),$async$aMM)
case 9:n=a1
w=10
return A.b(n.lS(),$async$aMM)
case 10:m=a1
w=11
return A.b(J.aNv(m).hf(B.fI),$async$aMM)
case 11:l=a1
J.aNv(m).p()
if(l==null){w=8
break}i=J.f1(B.dz.gaL(l))
k="data:image/png;base64,"+B.cM.gcr().aF(i)
if(J.a9(k)<=r){u=k
w=1
break}o=B.k.U(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a4(f)
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
return A.i($async$aMM,v)},
fok:function fok(){},
t4:function t4(d){this.a=d},
apy:function apy(d,e,f){this.c=d
this.d=e
this.a=f},
aBF:function aBF(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
euc:function euc(d,e){this.a=d
this.b=e},
eu3:function eu3(d){this.a=d},
eu4:function eu4(d){this.a=d},
eua:function eua(d,e){this.a=d
this.b=e},
eu9:function eu9(d,e){this.a=d
this.b=e},
eu6:function eu6(d,e){this.a=d
this.b=e},
eu5:function eu5(d,e){this.a=d
this.b=e},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d,e){this.a=d
this.b=e},
eub:function eub(d,e){this.a=d
this.b=e},
etZ:function etZ(d,e){this.a=d
this.b=e},
eu2:function eu2(d){this.a=d},
eu1:function eu1(d,e){this.a=d
this.b=e},
eu0:function eu0(d){this.a=d},
eud:function eud(d,e){this.a=d
this.b=e},
eue:function eue(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e){this.a=d
this.b=e},
h3n(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.O(Date.now(),0,!1).a4().aa(),"project",v],x.N,x.z)},
fol(d,e,f){var w=0,v=A.j(x.N),u
var $async$fol=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.aj(C.h3n(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fol,v)},
byS(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fol(!0,d,e),$async$byS)
case 4:w=3
return A.b(r.apw(g,d,e.a),$async$byS)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dB.aF(B.Q.aj(C.h3n(d,e,null),null))
u="NGMY_WS:"+B.jR.gcr().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byS,v)},
fWt(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fIg(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.a9(s)===0)return!1
if(J.cS(s,"NGMYWSSYNC2|"))return!0
if(J.cS(s,"NGMY_WS:"))return!0
if(J.eQ(s,t))return!0
if(J.cS(s,"{"))try{w=B.Q.aE(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hMk(d){var w,v,u,t=C.fWt(d)
if(t==null)return null
if(C.fIg(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.fIg(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.fIg(v))return v}return null},
fIf(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.a9(q)===0)return r
if(J.cS(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cS(q,"NGMY_WS:")){v=B.c0.c6(0,B.cw.aF(J.mf(q,8)))
w=t.a(B.Q.aE(0,v,r))}else w=t.a(B.Q.aE(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fCZ(A.Z(u,x.N,x.z))
return t}catch(s){return r}},
byR(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$byR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apv(t[1]),$async$byR)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fIf(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fIf(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byR,v)},
fIe(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l1(w,v,d.c,d.d,new A.O(Date.now(),0,!1))},
byo(){var w=0,v=A.j(x.o),u,t
var $async$byo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.F6(),$async$byo)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fIf(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byo,v)},
h4e(d,e,f,g){return A.c0(B.K,null,new C.fwq(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fwq:function fwq(d,e,f){this.a=d
this.b=e
this.c=f},
ab2:function ab2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eug:function eug(d,e){this.a=d
this.b=e},
euh:function euh(d,e){this.a=d
this.b=e},
eui:function eui(d,e){this.a=d
this.b=e},
euj:function euj(d,e){this.a=d
this.b=e},
euf:function euf(d){this.a=d},
aps:function aps(d,e,f){this.c=d
this.d=e
this.a=f},
bh_:function bh_(){var _=this
_.c=_.a=_.e=_.d=null},
etU:function etU(d,e){this.a=d
this.b=e},
etV:function etV(d){this.a=d},
etW:function etW(d){this.a=d},
apx:function apx(d){this.a=d},
aBE:function aBE(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
etY:function etY(d){this.a=d},
etX:function etX(d){this.a=d},
hm5(d,e,f,g,h){return new C.Md(h,g,d,e,f,null)},
aGo:function aGo(d,e){this.a=d
this.b=e},
Md:function Md(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBG:function aBG(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
euG:function euG(){},
euC:function euC(d,e){this.a=d
this.b=e},
euD:function euD(d){this.a=d},
eun:function eun(d){this.a=d},
eul:function eul(d){this.a=d},
eum:function eum(d){this.a=d},
euw:function euw(d,e){this.a=d
this.b=e},
eut:function eut(d,e){this.a=d
this.b=e},
euu:function euu(d,e){this.a=d
this.b=e},
euv:function euv(d,e,f){this.a=d
this.b=e
this.c=f},
eur:function eur(d,e,f){this.a=d
this.b=e
this.c=f},
eup:function eup(d){this.a=d},
euq:function euq(d){this.a=d},
eus:function eus(d){this.a=d},
euJ:function euJ(d){this.a=d},
euI:function euI(d){this.a=d},
euK:function euK(d){this.a=d},
euH:function euH(d){this.a=d},
euk:function euk(d){this.a=d},
euo:function euo(d,e){this.a=d
this.b=e},
euF:function euF(d,e){this.a=d
this.b=e},
euE:function euE(d,e){this.a=d
this.b=e},
euz:function euz(d){this.a=d},
euA:function euA(d){this.a=d},
euB:function euB(d,e){this.a=d
this.b=e},
euy:function euy(d,e){this.a=d
this.b=e},
eux:function eux(d,e,f){this.a=d
this.b=e
this.c=f},
btg:function btg(){},
zo(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ad("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aI(v,w,"_")},
ads(d,e,f){return C.hBc(d,e,f)},
hBc(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ads=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.an("String",e,f),$async$ads)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a4(o)
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
return A.i($async$ads,v)},
adr(d,e){return C.hBb(d,e)},
hBb(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adr=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adr)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a4(q)
$.al.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$adr,v)},
hA0(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QP(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bvZ(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bvZ=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZE(q),$async$bvZ)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aMM(q,!1),$async$bvZ)
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
return A.i($async$bvZ,v)},
ha1(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aQ(d.h(0,"quantity"))
if(w==null)w=null
v=A.aQ(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.qn(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qn(p,J.k(u==null?"":u),1,o,q)},
fCZ(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d2(s,x.f)
w=A.cy(w,new C.cq8(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a5<G.E>")
r=A.A(new A.a5(w,new C.cq9(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bg(J.k(t==null?"":t))
return new C.l1(w,v,u,r,t==null?new A.O(Date.now(),0,!1):t)},
hER(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wi
case"female":case"f":return D.aeu
default:return D.wC}},
h05(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fMe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hER(v==null?j:J.k(v))
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
m=A.aQ(d.h(0,"birthOrder"))
m=m==null?j:B.k.L(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aQ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.L(k)
return new C.hO(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hET(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Kg
case"viewer":return D.k_
default:return D.rH}},
hEU(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
EX(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bxd(d,e){return B.a.i(e.toLowerCase())===C.EX(d,e)&&d.y!==D.k_},
ti(d,e){var w,v=d.y
if(v===D.k_)return!1
w=B.a.i(e.toLowerCase())
if(w===C.EX(d,e))return!0
if(v===D.Kg)return!0
v=d.e
return new A.J(v,A.fIk(),A.T(v).k("J<1,n>")).q(0,w)},
hEk(d){return J.dE(d,new C.f9P()).gH(0)},
fwN(d){var w=0,v=A.j(x.y),u,t
var $async$fwN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zw(d),$async$fwN)
case 3:u=t.rj(f,new C.fwO(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwN,v)},
bwY(d,e){var w=0,v=A.j(x.H),u,t
var $async$bwY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zw(d),$async$bwY)
case 3:t=g
if(J.rj(t,new C.f90(e))){w=1
break}if(C.hEk(t)>=2)throw A.P(A.b9("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bwY,v)},
ai0(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d2(n,x.f)
w=A.cy(w,new C.bIK(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a5<G.E>")
m=A.A(new A.a5(w,new C.bIL(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b4(u,new C.bIM(),x.N)
t=A.A(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bg(J.k(r==null?"":r))
if(r==null)r=new A.O(Date.now(),0,!1)
q=A.aQ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.L(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kl(l,w,v,!s,t,m,r,q,p,C.hET(o==null?null:J.k(o)))},
h0e(d){var w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.al(v,0,8)},
BB(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Pz(d),$async$BB)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aw(),$async$BB)
case 4:t=f
w=5
return A.b(t.a3x(0),$async$BB)
case 5:w=6
return A.b(C.f1a(t,l),$async$BB)
case 6:s=f
if(J.cs(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aR(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fX1(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ob(l,n),$async$BB)
case 11:u=n
w=1
break
case 10:case 8:m=A.aR(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fX1(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ob(l,n),$async$BB)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BB,v)},
f1a(d,e){return C.hxz(d,e)},
hxz(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f1a=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aR(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zo(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Q.aE(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aU(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.a9(n)===0){w=7
break}m=A.aR(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zo(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aE(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fCZ(A.Z(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aR(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zo(a9)+"_"+n))
i=C.hA0(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZE(h),$async$f1a)
case 17:g=b1
if(g!=null){i=i.QP(g)
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
case 8:J.PJ(q,new C.f1b())
if(p&&J.a9(q)!==0)C.ob(a9,q)
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
return A.i($async$f1a,v)},
bxn(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Pz(d),$async$bxn)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BB(r),$async$bxn)
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
return A.i($async$bxn,v)},
fX1(d){var w,v,u,t
try{w=B.Q.aE(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d2(w,x.f)
v=A.cy(v,new C.eY3(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a5<G.E>")
v=A.A(new A.a5(v,new C.eY4(),u),u.k("G.E"))
B.d.aZ(v,new C.eY5())
return v}catch(t){v=A.a([],x.D)
return v}},
ob(d,e){return C.hO3(d,e)},
hO3(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ob=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Pz(b2),$async$ob)
case 3:a8=b5
if(J.a9(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aw(),$async$ob)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zo(a8)
p=A.aR(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b4(x.j.a(B.Q.aE(0,p,null)),new C.fpi(),a2).fG(0)
a2=J.b4(b3,new C.fpj(),a2).bZ(0,new C.fpk())
n=A.d8(a2,a2.$ti.k("G.E"))
a2=o,a2=A.ef(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eQ(n,m)?17:18
break
case 17:a5=C.zo(a8)
l=A.aR(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a6a(l),$async$ob)
case 19:t=21
a5=C.zo(a8)
k=A.aR(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aE(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a6a(a5==null?null:J.k(a5)),$async$ob)
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
return A.b(C.adr(r,"ngmy_worksheet_item_v3_"+C.zo(a8)+"_"+m),$async$ob)
case 29:w=30
return A.b(C.adr(r,"ngmy_worksheet_thumb_v3_"+C.zo(a8)+"_"+m),$async$ob)
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
case 14:case 10:a2=J.cB(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bvZ(h),$async$ob)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ads(r,"ngmy_worksheet_thumb_v3_"+C.zo(a8)+"_"+a4,f),$async$ob)
case 40:g=i.QP(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adr(r,"ngmy_worksheet_thumb_v3_"+C.zo(a8)+"_"+a4),$async$ob)
case 41:g=i.QP(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adr(r,"ngmy_worksheet_thumb_v3_"+C.zo(a8)+"_"+a4),$async$ob)
case 42:case 34:a4=i.a
w=43
return A.b(C.ads(r,"ngmy_worksheet_item_v3_"+C.zo(a8)+"_"+a4,B.Q.aj(g.ad(),null)),$async$ob)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ads(r,"ngmy_worksheets_index_v3_"+C.zo(a8),B.Q.aj(q,null)),$async$ob)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eD(b3,new C.fpl(q))
a4=a3.$ti.k("cQ<1,a0<n,@>>")
a7=A.A(new A.cQ(a3,new C.fpm(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.ads(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.aj(a0,null)),$async$ob)
case 45:w=46
return A.b(J.h97(r),$async$ob)
case 46:if(a2.gcg(b3)&&J.a9(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a4(b1)
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
return A.i($async$ob,v)},
Jv(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Jv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BB(d),$async$Jv)
case 3:t=g
s=J.cB(t)
r=s.bg(t,new C.fwM(e))
if(r===-1)s.ck(t,0,e)
else s.m(t,r,e)
u=C.ob(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Jv,v)},
bxa(d,e){var w=0,v=A.j(x.H),u
var $async$bxa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BB(d),$async$bxa)
case 2:u=g
J.n_(u,new C.fag(e))
w=3
return A.b(C.ob(d,u),$async$bxa)
case 3:return A.h(null,v)}})
return A.i($async$bxa,v)},
EZ(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$EZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$EZ)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aR(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aE(0,i,null)
if(x.j.b(t)){j=J.d2(t,x.f)
j=A.cy(j,new C.fcq(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a5<G.E>")
r=A.A(new A.a5(j,new C.fcr(),s),s.k("G.E"))
B.d.aZ(r,new C.fcs())
k=r}}catch(h){}w=4
return A.b(C.eYM(d),$async$EZ)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hxW(k,p,d)
j=A.T(o)
s=j.k("J<1,a0<n,@>>")
s=A.A(new A.J(o,new C.fct(),s),s.k("ai.E"))
n=B.Q.aj(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OK(d,o),$async$EZ)
case 7:case 6:j=j.k("a5<1>")
m=A.A(new A.a5(o,new C.fcu(d),j),j.k("G.E"))
if(m.length!==0)C.aLm(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$EZ,v)},
fp4(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fp4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OK(d,e),$async$fp4)
case 3:t=J.dE(e,new C.fp5(d))
s=A.A(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLm(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fp4,v)},
a0s(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0s=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aw(),$async$a0s)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aR(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aE(0,l,null)
if(x.j.b(u)){m=J.d2(u,x.f)
m=A.cy(m,new C.fwH(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a5<G.E>")
s=A.A(new A.a5(m,new C.fwI(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pI(o,new C.fwJ(e))
if(B.a.i(e.x).length===0&&C.ti(e,d)){m=B.a.i(d.toLowerCase())
p=e.azZ(e.y===D.k_?D.k_:D.rH,m)}else p=e
if(q===-1)J.oZ(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OK(d,o),$async$a0s)
case 3:w=C.ti(p,d)?4:5
break
case 4:w=6
return A.b(C.aLl(C.EX(p,d),p),$async$a0s)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0s,v)},
aLv(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.EZ(d),$async$aLv)
case 2:u=g
t=J.cB(u)
s=A.qC(t.eD(u,new C.f9Y(e)))
t.bm(u,new C.f9Z(e))
w=3
return A.b(C.OK(d,u),$async$aLv)
case 3:w=s!=null&&C.bxd(s,d)?4:5
break
case 4:w=6
return A.b(C.eY7(e),$async$aLv)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLv,v)},
afb(d){var w=d.f,v=A.T(w).k("a5<1>")
w=A.A(new A.a5(w,new C.fwS(),v),v.k("G.E"))
return w},
fG1(d,e){var w,v=d.f,u=A.qC(new A.a5(v,new C.f9z(e),A.T(v).k("a5<1>")))
v=C.afb(d)
w=A.T(v).k("a5<1>")
v=A.A(new A.a5(v,new C.f9A(e,u),w),w.k("G.E"))
B.d.aZ(v,new C.f9B())
return v},
hEX(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h4g(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.fG1(d,u),new C.fwz(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hGq(d,e){var w
if(e==null||e.length===0)return 1
w=C.fG1(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fdb(),A.T(w).k("J<1,I>")).fs(0,B.yL)+1},
hNX(d){var w,v=C.afb(d)
if(v.length===0)return null
w=new A.a5(v,new C.fp1(),A.T(v).k("a5<1>"))
if(!w.gah(0))return w.gI(0)
return B.d.gI(v)},
hES(d){return A.E(["id",d.a,"name",d.b,"gender",C.h05(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hGl(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.m(0,t.a,t)}s=A.a([],x.u)
r=A.aZ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.G(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.wC?n:q.c
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
d=q.azU(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.czR(a1,w,a3.d,a2.y,s,a0,v)},
zw(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$zw)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aR(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aE(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d2(t,x.f)
p=A.cy(p,new C.fcn(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a5<G.E>")
p=A.A(new A.a5(p,new C.fco(),s),s.k("G.E"))
B.d.aZ(p,new C.fcp())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zw,v)},
aeZ(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aeZ=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rH:D.k_
a7=C.EX(b2,b3)
w=2
return A.b(C.zw(b1),$async$aeZ)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.bg(a8,new C.fp_(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bwY(b1,b2),$async$aeZ)
case 5:case 4:if(b0===-1){u=b2.azZ(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
s=A.S(x.N,x.P)
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
i=i!==D.wC?i:l.c
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
s.m(0,m,l.azU(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bf<2>")
s=A.A(new A.bf(s,k),k.k("G.E"))
k=a5?D.rH:D.k_
u=t.xE(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OK(b1,a8),$async$aeZ)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLl(B.a.i(b3.toLowerCase()),u),$async$aeZ)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aeZ,v)},
fXn(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.O(Date.now(),0,!1).a4().aa(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a0<n,@>>"),k=A.A(new A.J(m,C.h3v(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().aa(),"updatedAt",o],r,x.K),"createdAt",s.a4().aa(),"updatedAt",o],r,x.z)},
fXo(d,e){var w=new A.O(Date.now(),0,!1).a4().aa(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a0<n,@>>")
u=A.A(new A.J(u,C.h3v(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().aa(),"updatedAt",w],x.N,x.z)},
hvH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ai0(A.Z(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fIk(),A.T(j).k("J<1,n>")).bZ(0,new C.eYz())
t=A.A(j,j.$ti.k("G.E"))
if(u===v)s=D.rH
else s=B.d.q(t,u)?D.Kg:D.k_
return w.azZ(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ai0(A.Z(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d2(q,h)
h=A.cy(h,new C.eYA(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a5<G.E>")
o=A.A(new A.a5(h,new C.eYB(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b4(n,new C.eYC(),x.N).bZ(0,new C.eYD())
t=A.A(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rH
else s=B.d.q(t,u)?D.Kg:D.k_
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bg(J.k(l==null?"":l))
if(l==null)l=new A.O(Date.now(),0,!1)
j=A.aQ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.L(j)
if(j==null)j=0
return new C.kl(h,r,p,!m,t,o,l,j,v,s)},
eYM(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eYM=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.a9(a0)===0){u=null
w=1
break}t=4
r=new C.eYQ()
h=x.N
g=x.z
w=7
return A.b(A.iz(A.a([A.l7("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bD),r.$2(A.l7("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bD),"collaborator"),r.$2(A.l7("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bD),"public")],x.cl),x.U),$async$eYM)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.S(h,g)
h=A.A(p,g)
l=h
J.fS(l,o)
J.fS(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.a9(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bf<2>")
h=A.cy(new A.bf(l,h),new C.eYN(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a5<G.E>")
l=A.A(new A.a5(h,new C.eYO(),l),l.k("G.E"))
B.d.aZ(l,new C.eYP())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a4(a1)
d=J.k(i)
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
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
return A.i($async$eYM,v)},
hxW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gah(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f1Q(),v).bZ(0,new C.f1R())
t=A.d8(u,u.$ti.k("G.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.EX(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.k_){m=q.e
m=!new A.J(m,A.fIk(),A.T(m).k("J<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.m(0,p,q)}for(j=j.gag(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hGl(l,v)
o=C.EX(k,w)
p=v.d
s.m(0,u,o===w?k.b6u(p,D.rH):k.b6u(p,v.y))}j=s.$ti.k("bf<2>")
j=A.A(new A.bf(s,j),j.k("G.E"))
B.d.aZ(j,new C.f1S())
return j},
OK(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$OK)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b4(e,new C.f3S(),x.a)
s=A.A(s,s.$ti.k("ai.E"))
w=3
return A.b(u.an("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.aj(s,null)),$async$OK)
case 3:return A.h(null,v)}})
return A.i($async$OK,v)},
aLl(d,e){return C.hCL(d,e)},
hCL(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLl=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.ly("family_trees",A.a([C.fXn(e,d)],p),null,B.cz),$async$aLl)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.ly("family_trees",A.a([C.fXo(e,d)],p),null,B.cz),$async$aLl)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a4(n)
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
return A.i($async$aLl,v)},
aLm(d,e){return C.hCM(d,e)},
hCM(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a0<n,@>>")
m=n.k("ai.E")
l=A.A(new A.J(e,new C.f8n(d),n),m)
r=l
w=7
return A.b(A.ly("family_trees",r,null,B.cz),$async$aLm)
case 7:q=g
if(q){u=!0
w=1
break}k=A.A(new A.J(e,new C.f8o(d),n),m)
p=k
w=8
return A.b(A.ly("family_trees",p,null,B.cz),$async$aLm)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a4(i)
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
return A.i($async$aLm,v)},
eY7(d){return C.hv5(d)},
hv5(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eY7=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.P9("family_trees",A.E(["id",d],x.N,x.z),null,B.cz),$async$eY7)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a4(p)
$.al.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$eY7,v)},
qn:function qn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l1:function l1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqb:function cqb(){},
cqa:function cqa(){},
cq8:function cq8(){},
cq9:function cq9(){},
G_:function G_(d,e){this.a=d
this.b=e},
hO:function hO(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ai_:function ai_(d,e){this.a=d
this.b=e},
f9P:function f9P(){},
fwO:function fwO(d){this.a=d},
f90:function f90(d){this.a=d},
kl:function kl(d,e,f,g,h,i,j,k,l,m){var _=this
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
bIO:function bIO(){},
bIN:function bIN(){},
bIK:function bIK(){},
bIL:function bIL(){},
bIM:function bIM(){},
f1b:function f1b(){},
eY3:function eY3(){},
eY4:function eY4(){},
eY5:function eY5(){},
fpi:function fpi(){},
fpj:function fpj(){},
fpk:function fpk(){},
fpl:function fpl(d){this.a=d},
fpm:function fpm(){},
fwM:function fwM(d){this.a=d},
fag:function fag(d){this.a=d},
fcq:function fcq(){},
fcr:function fcr(){},
fcs:function fcs(){},
fct:function fct(){},
fcu:function fcu(d){this.a=d},
fp5:function fp5(d){this.a=d},
fwH:function fwH(){},
fwI:function fwI(){},
fwJ:function fwJ(d){this.a=d},
f9Y:function f9Y(d){this.a=d},
f9Z:function f9Z(d){this.a=d},
fwS:function fwS(){},
f9z:function f9z(d){this.a=d},
f9A:function f9A(d,e){this.a=d
this.b=e},
f9B:function f9B(){},
fwz:function fwz(d){this.a=d},
fdb:function fdb(){},
fp1:function fp1(){},
fcn:function fcn(){},
fco:function fco(){},
fcp:function fcp(){},
fp_:function fp_(d){this.a=d},
eYz:function eYz(){},
eYA:function eYA(){},
eYB:function eYB(){},
eYC:function eYC(){},
eYD:function eYD(){},
eYQ:function eYQ(){},
eYR:function eYR(d){this.a=d},
eYN:function eYN(d){this.a=d},
eYO:function eYO(){},
eYP:function eYP(){},
f1Q:function f1Q(){},
f1R:function f1R(){},
f1S:function f1S(){},
f3S:function f3S(){},
f8n:function f8n(d){this.a=d},
f8o:function f8o(d){this.a=d},
cqc:function cqc(d,e){this.a=d
this.b=e},
cqd:function cqd(d,e){this.a=d
this.b=e},
aDH:function aDH(d,e,f){this.a=d
this.b=e
this.c=f},
b4P:function b4P(){this.b=this.a=0},
b4O:function b4O(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
brx:function brx(){},
vS(d,e){var w,v
if(d==null)return""
w=d.bP()
v=""+w.gcb()+"/"+w.gcq()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmE()),2,"0")+":"+B.a.aT(B.o.u(w.gEU()),2,"0")},
hm2(){var w,v=$.oW(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"WS"+B.d.fM(u)},
apt(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$apt)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bD),$async$apt)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.Z(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a4(m)
$.al.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apt,v)},
apu(d){return C.hm3(d)},
hm3(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apu=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$apu)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cz,null),$async$apu)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a4(p)
$.al.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apu,v)},
apw(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$apw)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hm2()
w=4
return A.b(C.apt(),$async$apw)
case 4:r=h
q=B.a.i(e)
p=B.dB.aF(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cM.gcr().aF(p),"usesRemaining",25,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(C.apu(r),$async$apw)
case 5:u=new A.YX("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apw,v)},
apv(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bW(),$async$apv)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apt(),$async$apv)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aQ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.L(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{s=B.c0.c6(0,B.cw.aF(t))}catch(h){r=A.a4(h)
$.al.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dR(A.Z(o,n,m),n,m)
m.m(0,"usesRemaining",j)
m.m(0,"lastUsedAt",new A.O(Date.now(),0,!1).a4().aa())
p.m(q,i,m)}w=5
return A.b(C.apu(q),$async$apv)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apv,v)},
fRY(){var w=new A.O(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cA.aA(999999)},
hm4(d){var w,v,u,t,s,r,q
try{w=A.adQ(d)
if(w==null)return d
v=w
if(J.JB(v)>960||J.JA(v)>960){s=v
r=J.JB(v)>=J.JA(v)?960:null
v=A.adP(s,J.JA(v)>J.JB(v)?960:null,B.Lv,r)}s=v
u=A.ajp(82).Ra(s,B.xm)
if(J.a9(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.a4(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cav(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cav=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hm4(e)
$.car.m(0,s,t)
u=C.byU(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cav,v)},
aZE(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZE=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cS(l,"data:image")){u=null
w=1
break}t=4
r=J.eQ(l,",")?B.d.gai(J.l9(l,",")):l
q=B.cw.aF(r)
if(J.a9(q)===0){u=null
w=1
break}p=C.fRY()
w=7
return A.b(C.cav(p,q),$async$aZE)
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
n=A.a4(k)
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
return A.i($async$aZE,v)},
cas(d){var w=0,v=A.j(x.T),u,t,s
var $async$cas=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cau(s),$async$cas)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gcr().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cas,v)},
a6a(d){var w=0,v=A.j(x.H),u,t
var $async$a6a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h3o(d)
if(t==null){w=1
break}$.car.W(0,t)
w=3
return A.b(C.byT(t),$async$a6a)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a6a,v)},
byU(d,e){return C.hMn(d,e)},
hMn(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$byU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKk
w=7
return A.b(n==null?$.aKk=I.fF5():n,$async$byU)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.mg(r,"thumbs","readwrite")
B.ip.lL(J.me(p,"thumbs"),q,l)
w=8
return A.b(J.oY(p),$async$byU)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a4(k)
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
return A.i($async$byU,v)},
byT(d){return C.hMl(d)},
hMl(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKk
w=7
return A.b(o==null?$.aKk=I.fF5():o,$async$byT)
case 7:r=f
q=J.mg(r,"thumbs","readwrite")
B.ip.Eq(J.me(q,"thumbs"),m)
w=8
return A.b(J.oY(q),$async$byT)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a4(l)
$.al.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byT,v)}},D,Ae,Af,O,Ag,Ah,I,Ai,P,A_,Aj
J=c[1]
A=c[0]
B=c[2]
A0=c[191]
G=c[171]
F=c[29]
E=c[181]
A1=c[109]
Q=c[108]
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
K=c[153]
Ad=c[164]
Y=c[205]
Z=c[198]
L=c[99]
N=c[66]
C=a.updateHolder(c[6],C)
D=c[201]
Ae=c[67]
Af=c[169]
O=c[204]
Ag=c[203]
Ah=c[54]
I=c[52]
Ai=c[74]
P=c[206]
A_=c[120]
Aj=c[94]
C.alx.prototype={}
C.aV0.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.baF(),f=h.x!=null&&h.y3(i).length===0
if(h.x!=null)w=f?B.aW:B.bS
else w=h.gRO()?B.bS:B.e2
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b4Q,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.ejj,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h0,i,i,i),B.T,D.eL6,B.au,A.d(C.vS(new A.O(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eHj,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aRH,i,i,i,i,B.Vh,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fGV(h.d)
o=A.p(B.B,C.aV_(A.ffz(h.e,n),30),B.h,i,i,new A.o(B.lN,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eCR,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.by,D.eLn,B.ab,A.p(i,A.u(A.a([D.eZE,B.by,A.d(A.zy(h.c),i,i,i,i,i,i,D.ey7,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eU,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,p,q,i,i,B.n),i,i,i,i,K.acD,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMg("Original due",C.vS(h.r,!1))
n=j.aMg("Current due",C.vS(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.u(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGv(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zw,i,i,1/0),B.T,j.c6B(),B.P,j.bWf(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eMh,B.au,A.d(q,i,i,i,i,i,i,D.eCd,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaBz()){q=A.m(14)
o=A.H(B.cr,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.f_P,B.P,A.bv(A.m(12),A.ec(new A.a3(1/0,88,A.b2(i,i,i,new A.TS(h.ax,B.M,D.emE,!0,3.5,i),B.as),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Dw,i,i,i)],s))}p.push(B.ay)
p.push(D.eTD)
return A.p(i,A.u(A.a([r,new A.C(B.acG,A.u(p,B.ad,i,B.e,B.j,0,B.p),i)],s),B.ad,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMg(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4j,w,w,w),1),A.d(e,w,w,w,w,w,w,D.ez4,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c6B(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6F(B.e2,u,"Not paid yet")
w=t.y3(null).length
v=w===0?B.aW:B.bS
return this.a6F(v,u,C.vS(t.x,!0))},
bWf(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6F(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6F(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4j,u,u,u)
v=A.T(d).k("J<1,h9>")
v=A.A(new A.J(d,new C.bXk(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.cb(B.bH,v,B.bw,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6F(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4j,w,w,w),1),new A.dl(1,B.cj,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b6X.prototype={
a6(d,e){new A.TS(this.b,B.M,e,!0,3.5,null).a6(d,e)},
ao(d){return d.b!==this.b}}
C.alE.prototype={
S(){return new C.azF(A.a([],x.bp))},
gdS(){return this.c}}
C.azF.prototype={
Z(){this.a0()
this.Hh()},
Hh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_H(t.a.c),$async$Hh)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dy0(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hh,v)},
aO7(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aO,s=A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bm:B.bv).j(0.22)
w=A.m(10)
return A.bl(v,new A.b1(4,r,new A.ax(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b1(4,w,new A.ax((this.a.d.a?B.bm:B.bv).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b1(4,A.m(10),D.aPl),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aO6(d){return this.aO7(d,null)},
NC(d){return this.ca9(d)},
ca9(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EN:B.eu
w=7
return A.b(new A.hP().B_(72,900,900,n),$async$NC)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$NC)
case 8:p=f
n=B.cM.gcr().aF(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a4(l)
n=r.c
if(n!=null)n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$NC,v)},
aW5(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aO,o=A.m(10),n=A.H((q?B.bm:B.bv).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bm:B.bv
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bm:B.bv
t=x.p
u=A.D(A.u(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fo(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c6)
q=A.a([q,B.aa,u,A.bG(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.cu,s.a.d.a?B.bm:B.bv,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c6))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ks,D.bev,r,r,r)},
BV(d){return this.btl(d)},
btk(){return this.BV(null)},
btl(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BV=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.at()
r=new A.ao(new A.bb(a4,B.b_,B.aL),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.lp(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.L(p)):B.k.ab(p,2)}o=new A.ao(new A.bb(a4,B.b_,B.aL),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ao(new A.bb(a4,B.b_,B.aL),s)
if(a3){a4=new A.O(Date.now(),0,!1).bL(6048e8)
m=A.bT(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)}else{a4=a5.f
m=A.bT(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bh(a4,!0,x.cT)
i=a3?null:A.fGV(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.uR?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",a4,new C.dxK(),new C.dxL(a2,t,a5,r,new C.dxM(a2,t),o,n,j),B.eE,!0,x.y),$async$BV)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d5(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.F(x.q).f.P(D.esW)
w=1
break}a0=a2.d
if(a0==null){t.c.F(x.q).f.P(D.erB)
w=1
break}a1=A.ffz(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.uR?"male":"female"
w=7
return A.b(A.afa(a3,A.fOJ(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BV)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.uR?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bT(a3.gcd(),a3.gcb(),a3.gcq(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bT(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)))a5.cBX(a2.a)
w=8
return A.b(A.afa(t.a.c,a5),$async$BV)
case 8:case 5:w=9
return A.b(t.Hh(),$async$BV)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BV,v)},
aOH(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.M:B.aO
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bm:B.bv).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aV_(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aO:B.aG
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.p(p,A.B(A.a([r,B.bo,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b5,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ac)},
Qb(d){return this.cr2(d)},
cr2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",s,new C.dy3(),new C.dy4(t,d),B.hG,!0,x.y),$async$Qb)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.O(s,0,!1)
case 4:w=7
return A.b(A.afa(t.a.c,d),$async$Qb)
case 7:w=8
return A.b(t.Hh(),$async$Qb)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qb,v)},
Mj(d,e){return this.bDQ(0,e)},
bDQ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kN(s,"Cancel","Delete",e.b+" \xb7 "+A.zy(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mj)
case 3:if(!g){w=1
break}w=4
return A.b(C.fa4(t.a.c,e.a),$async$Mj)
case 4:w=5
return A.b(t.Hh(),$async$Mj)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mj,v)},
abV(d){return this.c4d(d)},
c4d(d){var w=0,v=A.j(x.H),u=this,t
var $async$abV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c0(B.K,null,new C.dxY(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$abV)
case 2:return A.h(null,v)}})
return A.i($async$abV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dMe
w=J.dE(m.d,new C.dy5())
v=A.A(w,w.$ti.k("G.E"))
w=J.dE(m.d,new C.dy6())
u=A.A(w,w.$ti.k("G.E"))
t=B.d.cI(v,0,new C.dy7())
w=A.m(18)
s=m.a.d.a
r=s?D.c81:D.asd
q=A.H(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.bBU,B.h,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.av,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.X,!0,A.m(12),A.aH(!1,A.m(12),!0,D.dLG,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dy8(m),l,l,l,l,l,l,l),B.h,B.cW,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cnl("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zy(t)
r=A.a([A.p(l,A.u(A.a([s,B.ab,A.B(A.a([o,B.aa,A.D(m.b0Y(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.acA,l,l,l),B.ay],p)
if(J.ci(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bm:B.bv).j(0.12),B.r,1)
n=A.p(l,D.bwZ,B.h,l,l,new A.o(B.cW.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.ab,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bgX,l,l,1/0))}else{w=m.gc9s()
s=A.A(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.biA,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.ad,l,B.e,B.j,0,B.p)},
b0Y(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bm:B.bv).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bm:B.bv,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aO:B.aG
return A.p(u,A.u(A.a([q,B.by,A.d(f,u,1,B.Z,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cnl(d,e){return this.b0Y(!1,d,e)},
c9t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y3(j).length,h=d.b9R()
if(d.x!=null){w=d.y3(j).length
v=w===0?B.cW:B.bS}else if(d.gRO())v=B.bS
else{if(h)w=B.cW
else w=k.a.d.a?B.bm:B.bv
v=w}if(d.x!=null){w=d.y3(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vS(u,!1)}else{u.toString
t="Paid "+C.vS(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vS(w,!1)+" \xb7 "+i+" missed":"Due "+C.vS(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRO()&&d.x==null)s=B.bS.j(0.35)
else s=(k.a.d.a?B.bm:B.bv).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.G,B.w.j(0.04),B.cG,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lN
o=A.H(d.gRO()&&d.x==null?B.bS.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fGV(d.d)
o=A.p(B.B,A.d4(C.aV_(A.ffz(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aO:B.aG
m=x.p
n=A.a([new A.dl(1,B.cj,A.d(p,j,1,B.Z,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBz())B.d.v(n,A.a([B.eA,A.V(B.KF,B.cW.j(0.8),j,j,j,14)],m))
p=A.D(A.u(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d4,A.d(t,j,1,B.Z,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zy(d.c)
l=k.a.d.a?B.aO:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.X,!0,j,A.aH(!1,q,!0,new A.C(U.ack,A.B(A.a([o,B.ba,p,B.aa,A.u(A.a([n,B.by,A.V(B.ek,(k.a.d.a?B.bm:B.bv).j(0.5),j,j,j,18)],m),B.dF,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dy_(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ac),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d7,j,j,j,j)}}
C.tz.prototype={}
C.ahZ.prototype={
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
p=A.a([new A.aa(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.H(r.j(0.6),B.r,1)
n.push(A.aJ(a0,A.p(a0,A.V(B.cu,t?a1.f:B.c,a0,a0,a0,17),B.h,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.ae))
m=v?B.a1:B.B
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.jY,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ap4,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.DL,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eX(m,A.B(l,B.m,a0,B.e,B.R,0,a0,a0),B.h,B.e8)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bdM,A.d(v,a0,1,B.Z,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cx:B.bg,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fj,A.u(a2,u,a0,B.e,B.R,0,B.p),a0),1))
n.push(D.enm)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.u8,A.p(a0,a0,B.h,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a1,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lo,A.u(a2,B.m,a0,B.e,B.R,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,A.H(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.h2,a0,a0,a0,a0)}return A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.beX,a0,a0,a0,a0)}}
C.aQS.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.h,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bf?B.bf:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.Z,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bg:B.cx,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.d4,n],m)
if(p.z)o.push(new A.C(B.zv,n,q))
return new A.C(B.d7,A.u(o,B.m,q,B.e,B.R,0,B.p),q)}}
C.QJ.prototype={
S(){return new C.bav()}}
C.bav.prototype={
gbRr(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.dM9,D.dMf],l)
for(w=0;w<8;++w){v=D.Zc[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Eu:B.Ae
q=t===s
r=A.V(r,q?B.ev:B.c2,n,n,n,17)
q=q?B.c:B.aj
r=A.a([r,B.bo,new A.w(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.aa,new A.bE(1,B.bn,new A.w(v.c,n,Ai.BH,n,n,n,n,B.Z,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.b3(24,24)
p=new A.ax(B.ev,2,B.r,-1)
s=new A.o(n,n,new A.c1(p,p,p,p),new A.bu(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aJ(n,new A.C(B.es,A.u(A.a([new A.C(B.lU,new A.cC(B.aY,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.CA(!0,new C.ahZ(v,q.d,q.e,new C.cZt(),n,n),n),B.h,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.cZu(o,v),n,n,n,n,n,n,!1,B.ae))}k.push(new A.C(D.bfe,A.bH(D.f4L,new C.cZv(o,d),A.bk(B.b0,n,n,n,n,B.nC,n,n,new A.b5(A.m(16),B.W),n,n,n)),n))
return A.br(!0,new A.cZ(new A.aW(0,1/0,0,m.a.b*0.9),A.cK(k,n,D.bjq,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.mM.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().aa()],x.N,x.z)},
b6G(d,e,f){return new C.mM(this.a,e,d,f)}}
C.FZ.prototype={
vt(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.FZ(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
azO(d){var w=null
return this.vt(w,w,w,w,w,d,w,w,w,w,w,w)},
cxP(d){var w=null
return this.vt(w,w,w,w,d,w,w,w,w,w,w,w)},
b6E(d,e,f){var w=null
return this.vt(d,w,w,w,w,w,w,w,e,w,f,w)},
cyt(d){var w=null
return this.vt(w,w,w,w,w,w,d,w,w,w,w,w)},
cyC(d){var w=null
return this.vt(w,w,w,w,w,w,w,w,w,d,w,w)},
cxN(d){var w=null
return this.vt(w,w,w,d,w,w,w,w,w,w,w,w)},
cyE(d){var w=null
return this.vt(w,w,w,w,w,w,w,w,w,w,w,d)},
cxK(d){var w=null
return this.vt(w,w,d,w,w,w,w,w,w,w,w,w)},
cxF(d){var w=null
return this.vt(w,d,w,w,w,w,w,w,w,w,w,w)},
Ej(d){var w=null
return this.vt(w,w,w,w,w,w,w,d,w,w,w,w)},
cyM(d,e,f,g,h,i,j,k,l,m,n){return this.vt(d,e,f,g,null,h,i,j,k,l,m,n)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cvD(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bIJ(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.L(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cI(d.h(0,n))).length!==0?B.a.i(A.cI(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cI(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AP.ge9(D.AP))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_C)
q=l.$2("frame",D.a_7)
l=l.$2("texture",D.a_2)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cI(d.h(0,"author"))):o
return this.cyM(p,u,t,q,r,A.te(d.h(0,"ribbon"))?A.EA(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.X8.prototype={
S(){return new C.awM(A.a([],x.I),D.Kf)},
gdS(){return this.c}}
C.awM.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yu(0,1)
w=$.at()
v.z=new A.ao(B.aq,w)
v.Q=new A.ao(B.aq,w)
v.kp()
w=v.a
C.bxk(w.c,w.d).bw(new C.d_9(v),x.fL)},
p(){var w,v=this,u=v.f
u===$&&A.c()
u.p()
u=v.z
u===$&&A.c()
w=$.at()
u.R$=w
u.O$=0
u=v.Q
u===$&&A.c()
u.R$=w
u.O$=0
v.a2()},
kp(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.J4(s.c,s.d),$async$kp)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.cZY(t,r))
t.as7()
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
gaoN(){var w,v=this
if(!J.ci(v.d)){w=v.r
w=w<0||w>=J.a9(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
as7(){var w,v,u=this.gaoN(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saR(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saR(0,w==null?"":w)},
c2E(d){this.n(new C.cZV(this,d))
this.as7()},
LF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mM(B.o.u(1000*Date.now()),"Untitled page","",new A.O(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aN6(r.c,r.d,s),$async$LF)
case 3:w=4
return A.b(t.kp(),$async$LF)
case 4:if(t.c==null||J.ci(t.d)){w=1
break}q=J.pI(t.d,new C.cZw(s))
p=q>=0?q:J.a9(t.d)-1
t.n(new C.cZx(t,p))
t.as7()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A4(p+1,B.co,B.kp),$async$LF)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LF,v)},
zL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaoN()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aN6(o.c,o.d,new C.mM(s,r,q,new A.O(p,0,!1))),$async$zL)
case 3:w=4
return A.b(t.kp(),$async$zL)
case 4:if(t.c==null){w=1
break}t.n(new C.cZZ(t))
case 1:return A.h(u,v)}})
return A.i($async$zL,v)},
Mk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaoN()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.cZF(r),s,null,!0,!0,x.y),$async$Mk)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bx6(s.c,s.d,r.a),$async$Mk)
case 4:t.n(new C.cZG(t))
w=5
return A.b(t.kp(),$async$Mk)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RR(B.o.D(t.r+1,0,J.a9(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mk,v)},
xm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$xm)
case 5:case 4:if(t.c==null){w=1
break}w=J.cs(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.P1(s,r.r,o,p,q),$async$xm)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).K(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h3R(s,r.x,r.r),$async$xm)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.J4(s.c,s.d),$async$xm)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.G(l,new C.mM(""+(m+k),q,B.a.i(j.b),new A.O(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zH(r.c,r.d,l),$async$xm)
case 11:w=12
return A.b(t.kp(),$async$xm)
case 12:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xm,v)},
Z6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$Z6)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxk(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dI(D.xt,new C.cZW(t),new C.cZX())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m0("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gT(o)
p.push(new F.m0(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fIv(o,new F.qG(s,r,"",p,new F.tS(q.d,null,null,null,null,"","","")),null),$async$Z6)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Z6,v)},
M2(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$M2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$M2)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c0(D.a8t,null,new C.cZB(t),s,!0,!0,!0,D.aGg,!1,!1,x.N),$async$M2)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cxP(r)
t.n(new C.cZC(t,q))
s=t.a
w=7
return A.b(C.PB(s.c,s.d,q),$async$M2)
case 7:case 1:return A.h(u,v)}})
return A.i($async$M2,v)},
UT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(D.a8t,null,new C.cZH(t),r,!0,!0,!0,D.aGg,!1,!1,x.e),$async$UT)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cZI(t,s))
r=t.a
w=4
return A.b(C.PB(r.c,r.d,s),$async$UT)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A4(0,B.dU,B.nZ)
case 1:return A.h(u,v)}})
return A.i($async$UT,v)},
bIR(d){var w=d.bP(),v=B.a.aT(B.o.u(w.gcb()),2,"0"),u=B.a.aT(B.o.u(w.gcq()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gxk(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bQJ()
if(r.e)w=D.a7z
else if(J.ci(r.d)){w=r.y
v=r.gxk(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.exA,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a3(q,330,new A.C(Z.adA,new C.Wq(w,v,0,q),q),q),B.bs,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.jU.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bs],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aJ(q,A.p(q,D.ej9,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.uH,B.n),q,q,q,q,B.Vr,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcuO(),q,q,q,q,q,q,!1,B.ae))
w.push(B.T)
w.push(A.hf(D.bth,D.f4g,r.gaId(),q))
B.d.v(u,w)}w=A.as(A.cg(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.em,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.a9(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.jU.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dJ:B.yJ
u=A.u(A.a([new A.C(D.bgg,w,q),A.D(A.Hf(v,new C.d_7(r),J.a9(r.d)+1,q,r.gc2D(),u,B.aY),1),r.bw7()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cf(q,D.a9y,new A.am(B.V,q,B.aX,B.q,A.a([D.aEX,A.br(!0,A.u(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bQJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cs(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Id(B.dO,"AI",h.gbu6(),!0))
if(h.a.f)f.push(new C.Id(B.nq,"Cover",h.gbEp(),!1))
if(h.a.f)f.push(new C.Id(B.x6,"Header",h.gbzt(),!1))
if(J.cs(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Id(B.rW,"Print",h.gcbo(),!1))
if(h.a.f&&J.cs(h.d)&&h.r>=0){v=h.w
u=v?B.hg:B.iY
t=v?"Save":"Edit"
f.push(new C.Id(u,t,v?h.gchl():new C.cZS(h),!1))}if(h.a.f)f.push(new C.Id(B.hH,"Add page",h.gaId(),!1))
v=C.h04(h.y.Q)
u=h.gxk(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.a9(h.d)
r=J.a9(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d5c
else{k=new A.b3(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.jt.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.jU,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c1(i,i,i,i),new A.bu(k,k,k,k),g,new A.a8(B.a1,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.jU.j(0.85)
p.push(new A.bE(1,B.bn,A.aJ(B.c4,A.u(A.a([k,B.by,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ae),g))}return new C.ahZ(v,u,t+" \xb7 "+s+" "+r,new C.cZT(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
yP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$yP)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a_W(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.cZy(t,p),s,null,!0,!0,x.N),$async$yP)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xm(),$async$yP)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cs(),$async$yP)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.DZ("Swahili (Kiswahili)",!0),$async$yP)
case 18:w=16
break
case 17:w=19
return A.b(t.crC(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yP)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yP,v)},
WJ(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.jt.j(0.3),B.r,1),r=x.p
return new A.C(B.cH,A.aH(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uH,B.a5),w,42,w,w,w,w,w,42),B.ba,A.D(A.u(A.a([A.d(f,w,w,w,w,w,w,A5.a3Y,w,w,w),A.d(g,w,w,w,w,w,w,E.a3O,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZU(d,h),w,w,w,w,w,w,w),w)},
Cs(){return this.bIl()},
bIl(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cs=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.cZL(r),a7,null,!0,!0,x.ei),$async$Cs)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.A(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.at())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.cZM(o),a7,null,!0,!0,x.H).f4(new C.cZN(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.ch(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xt[a1]
J.ch(j,i.a)}w=8
return A.b(C.aen(a0,a7,new C.cZO(o),d,l,e,j),$async$Cs)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a4(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a7(l,!0).eC()
l=o
l.shI($.at())
J.aNy(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.F(x.q).f
j=n
l.P(A.b_(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcg(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.a9(p);++a4){if(m.b.am(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b6G(m.b.h(0,a4).b,a7,new A.O(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zH(j.c,j.d,l),$async$Cs)
case 11:w=12
return A.b(r.kp(),$async$Cs)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xt[a1].a)
a5=l.cvD(j,12,a7)
l=r.a
w=15
return A.b(C.PB(l.c,l.d,a5),$async$Cs)
case 15:if(r.c!=null)r.n(new C.cZP(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A4(0,B.dU,B.nZ)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.F(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b_(a3?A.ckQ("Undo",new C.cZQ(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cs,v)},
DZ(d,e){return this.crD(d,e)},
crC(d){return this.DZ(d,!1)},
crD(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$DZ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.A(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.at())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.d_0(a0),k,null,!0,!0,x.H).f4(new C.d_1(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ch(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a08(m,new C.d_2(a0)),$async$DZ)
case 10:w=8
break
case 9:w=11
return A.b(C.byL(new C.d_3(a0),m,a2),$async$DZ)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a4(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a7(o,!0).eC()
o=a0
o.shI($.at())
J.aNy(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.F(x.q).f
k=q
o.P(A.b_(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.a9(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b6G(J.q(p,g).b,j.a,new A.O(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zH(k.c,k.d,o),$async$DZ)
case 12:w=13
return A.b(r.kp(),$async$DZ)
case 13:o=r.c
if(o==null){w=1
break}o=o.F(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(A.ckQ("Undo",new C.d_4(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DZ,v)},
bw7(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cZz(v):u
r=A.aF(u,u,u,u,A.V(D.bp_,s?D.jU:B.be,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cs(v.d)&&!v.w&&v.r>=0)s=A.hf(A.V(B.uj,B.Da,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Da,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbDZ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.jU.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.as(s,u,u,u),1)
w=t<J.a9(v.d)?new C.cZA(v):u
return A.br(!0,new A.C(D.bg4,A.B(A.a([r,s,A.aF(u,u,u,u,A.V(B.ek,t<J.a9(v.d)?D.jU:B.be,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.Xc.prototype={
S(){return new C.baQ(new A.ao(B.aq,$.at()))}}
C.baQ.prototype={
ga_d(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
gbH8(){var w,v=this.ga_d()
A:{if("cover"===v){w=D.cDc
break A}if("book"===v){w=D.czn
break A}w=D.cZg
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jt.j(0.5),n=x.p,m=A.B(A.a([D.d5d,B.av,D.blf,A.aF(q,q,q,q,B.l0,q,q,q,new C.d0A(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jO(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d0B(r),r.ga_d()==="page",q,q,q,q))
if(r.a.d)l.push(A.jO(q,q,q,D.f_n,q,new C.d0C(r),r.ga_d()==="book",q,q,q,q))
l.push(A.jO(q,q,q,D.eOI,q,new C.d0D(r),r.ga_d()==="cover",q,q,q,q))
l=A.cb(B.bH,l,B.bw,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bl(q,new A.b1(4,A.m(16),B.W),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ke,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.af,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a6,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbH8(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mG(q,B.c.j(0.08),new A.w(s,q,B.H6,q,q,q,q,q,q,q,q,q),B.hj,new C.d0E(r,s),q,q,q,q))}return A.ev(q,E.z9,A.cg(A.u(A.a([m,B.T,D.f2j,B.ar,l,B.ab,k,B.P,A.cb(B.bH,w,B.bw,6,6),B.ay,A.dk(D.bte,D.f34,new C.d0F(r,d),A.bk(B.b0,q,q,q,q,B.nC,q,q,new A.b5(A.m(16),B.W),q,q,q)),B.au,D.eYR],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.fv,q,q,B.ah),q,q,q,D.adj,B.cX,q,new A.b5(p,new A.ax(o,1.4,B.r,-1)),q)}}
C.Xa.prototype={
S(){return new C.awN(A.a([],x.Y))},
gdS(){return this.c}}
C.acd.prototype={}
C.awN.prototype={
Z(){this.a0()
this.kp()},
kp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.P5(p.c,p.d),$async$kp)
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
return A.b(C.bxk(r.c,q),$async$kp)
case 6:j=e
i=J
w=7
return A.b(C.J4(t.a.c,q),$async$kp)
case 7:m.push(new l.acd(k,j,i.a9(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.d_o(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
b28(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Of(d,e){return this.c4b(0,e)},
c4b(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Of=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).cs(A.eH(new C.d_n(u,e),!0,null,x.y)),$async$Of)
case 2:t=g
w=3
return A.b(u.kp(),$async$Of)
case 3:if(t===!0&&u.c!=null)u.c.F(x.q).f.P(D.aI4)
return A.h(null,v)}})
return A.i($async$Of,v)},
E1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.F(x.q).f.P(D.aI0)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adJ(s.c,s.d),$async$E1)
case 5:q=e
w=6
return A.b(t.kp(),$async$E1)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Of(0,B.d.kU(t.d,new C.d_s(q))),$async$E1)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.P1(p,s.f,r,n,o),$async$E1)
case 10:m=e
w=11
return A.b(t.kp(),$async$E1)
case 11:if(m&&t.c!=null)t.c.F(x.q).f.P(D.aI4)
case 1:return A.h(u,v)}})
return A.i($async$E1,v)},
NK(d,e){return this.cf9(0,e)},
cf9(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.d_r(t,e),s,null,!0,!0,x.y),$async$NK)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0m(s.c,s.d,e.a),$async$NK)
case 4:w=5
return A.b(t.kp(),$async$NK)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NK,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bwa(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.jt.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aJ(n,new A.fM(0.7142857142857143,A.p(n,A.u(A.a([D.d5e,B.ab,D.dLm,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.jU.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcuK(),n,n,n,n,n,n,!1,B.ae))}w=A.m(22)
v=A.H(E.jt.j(0.85),B.r,1.6)
s=A.aJ(n,A.p(n,D.bAK,B.h,n,n,new A.o(B.w.j(0.3),n,A.H(E.jt.j(0.6),B.r,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_t(d),n,n,n,n,n,n,!1,B.ae)
r=A.m(14)
q=B.w.j(0.3)
p=A.H(E.jt.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.ba,D.blz,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.ewM,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h0,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.bFt,B.n),n,n,n,Ag.UZ,D.beb,n,n,n)
if(o.e)k=D.a7z
else k=k.length===0?D.aWp:A.cj(new C.d_u(k))
return A.cf(n,D.a9y,new A.am(B.V,n,B.aX,B.q,A.a([D.aEX,A.br(!0,A.u(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bwa(d){var w,v,u=this,t=null,s=u.b28(d),r=d.c,q=x.p,p=A.a([A.bV(0,A.eX(B.B,new A.a3(300,420,new C.Wq(d.b,s,r,t),t),B.h,B.dn),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aJ(t,A.p(t,D.bA3,B.h,t,t,new A.o(B.w.j(0.55),t,A.H(B.be,B.r,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_l(u,d),t,t,t,t,t,t,!1,B.ae),t,t,t,6,6,t))
w=A.d(s,t,1,B.Z,t,t,t,D.ewo,t,t,t)
v=r===1?"page":"pages"
return A.aJ(t,A.u(A.a([new A.fM(0.7142857142857143,new A.am(B.V,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.jU.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_m(u,d),t,t,t,t,t,t,!1,B.ae)}}
C.Id.prototype={}
C.Wq.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dI(D.xt,new C.cyV(m),new C.cyW()),j=m.c,i=D.AP.h(0,j.e),h=A.aX(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m3:B.b5
v=new C.cyX(h)
i=A.a([new A.aa(0,B.G,B.w.j(0.6),D.dJp,28)],x.V)
u=x.p
t=A.a([A.bV(0,A.b2(l,l,l,new C.b87(j.x,h,l),B.as),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.a1,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b3(3,3)
t.push(new A.cE(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bu(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adB,8,0.85,2.2),v.$4(D.biT,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adB,8,0.85,2.4))
else if(r==="corners")t.push(A.bV(0,new A.C(D.biP,A.b2(l,l,l,new C.b7Z(h,l),B.as),l),0,0,0))
r=A.V(D.arv[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.Z,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ap4,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.ab,p,B.ab,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cx,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.Z,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bV(0,new A.C(D.bji,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aDC(l),D.emy),l,l,l,46,0,l))
return A.p(l,A.bv(D.a6g,new A.am(B.V,l,B.a9,B.q,t,l),B.ap),B.h,l,l,new A.o(l,l,l,D.a6g,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b87.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f5()
f.dZ(11)
switch(this.b){case"plain":return
case"linen":$.a1()
w=A.U()
w.r=B.w.j(0.07).gt(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.M()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.a1()
q=A.U()
q.r=B.c.j(0.05).gt(0)
q.c=1
for(p=0;p<u;p+=4){r=q.M()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.af()
l=f.af()
k=f.af()
$.a1()
j=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.r=t.j(0.25+f.af()*0.5).gt(0)
r=j.M()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.a1()
j=A.a([],l)
h=new A.b0(k.r,B.aw,null,null,j)
j.push(new A.bj(v,t))
k=i-0.04
j.push(new A.av(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.av(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bX())
k=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.r=m.j((n&1)===0?0.09:0.03).gt(0)
r=k.M()
k=h.gbM().a.snapshot()
o.drawPath((h.e=new A.cG(k)).a,r)
r.delete()}break
default:$.a1()
w=A.U()
w.r=B.w.j(0.07).gt(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.af()
m=f.af()
l=f.af()
r=w.M()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.a1()
g=A.U()
g.r=B.c.j(0.035).gt(0)
for(n=0;n<120;++n){o=f.af()
m=f.af()
l=f.af()
r=g.M()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ao(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b7Z.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a1(),k=A.U(),j=this.b
k.r=j.j(0.9).gt(0)
k.b=B.ak
k.c=2.4
k.d=B.bZ
for(w=e.a,v=e.b,v=[D.efs,new A.d7([w,0,-1,1]),new A.d7([0,v,1,-1]),new A.d7([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.b0(l,B.aw,null,null,s)
s.push(new A.bj(r+p*34,q))
s.push(new A.av(r,q))
s.push(new A.av(r,q+o*34))
m=k.M()
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cG(s)).a,m)
m.delete()
s=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
s.r=j.j(0.9).gt(0)
m=s.M()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ao(d){return!d.b.A(0,this.b)}}
C.tA.prototype={}
C.WJ.prototype={
S(){return new C.b85()}}
C.b85.prototype={
gns(){var w=this.d
return w===$?this.d=this.a.c:w},
gxk(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ao(new A.bb(w.b,B.b_,B.aL),$.at())}return v},
gax7(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ao(new A.bb(w.c,B.b_,B.aL),$.at())}return v},
gano(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ao(new A.bb(w.y,B.b_,B.aL),$.at())}return v},
p(){var w=this,v=w.gxk(0),u=v.R$=$.at()
v.O$=0
v=w.gax7()
v.R$=u
v.O$=0
v=w.gano()
v.R$=u
v.O$=0
w.a2()},
anZ(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jO(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cSm(this,f,u),e===u,s,s,s,s))}return A.cb(B.bH,r,B.bw,6,8)},
atm(d){var w=null,v=B.c.j(0.07)
return A.bl(w,new A.b1(4,A.m(14),B.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l7,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gns(),a0=f.gxk(0),a1=a0.a.a,a2=f.gax7(),a3=a2.a.a,a4=f.gano(),a5=d.b6E(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a3(190,260,A.eX(B.B,new A.a3(270,370,new C.Wq(a5,d,f.a.e,e),e),B.h,B.dn),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atm("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSL(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atm("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSM(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xt[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.be
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c1(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aJ(e,A.u(A.a([p,B.d4,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSN(f,t),e,e,e,e,e,e,!1,B.ae))}v=A.cb(B.bH,v,B.bw,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.b3(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.ev:B.K,2,B.r,-1)
q.push(A.aJ(e,A.p(e,A.V(D.arv[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c1(o,o,o,o),new A.bu(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSO(f,n),e,e,e,e,e,e,!1,B.ae))}q=A.cb(B.bH,q,B.bw,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atm("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSP(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mc,e,e,e)
m=A.a([],w)
for(l=D.AP.gdH(D.AP),l=l.gag(l);l.C();){k=l.gT(l)
j=A.aX(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ev:B.be
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c1(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aJ(e,A.u(A.a([j,B.by,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSQ(f,k),e,e,e,e,e,e,!1,B.ae))}m=A.cb(B.bH,m,B.bw,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mc,e,e,e)
k=f.gns()
return new A.C(new A.M(0,0,0,a3.f.d),A.br(!0,new A.cZ(new A.aW(0,1/0,0,a1.a.b*0.92),A.cK(A.a([D.eYk,B.ab,d,B.aN,a0,B.T,a2,B.ay,D.f2T,B.P,v,B.ay,D.eYt,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.m8(e,9,""+B.k.U(f.gns().f),36,18,new C.cSR(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mc,e,e,e),B.ar,f.anZ(D.a_C,f.gns().r,new C.cSS(f),D.d1n),B.ab,A.d("BORDER",e,e,e,e,e,e,H.mc,e,e,e),B.ar,f.anZ(D.a_7,f.gns().w,new C.cST(f),D.d1s),B.ab,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mc,e,e,e),B.ar,f.anZ(D.a_2,f.gns().x,new C.cSV(f),D.d2Q),B.ar,A.it(e,B.b0,e,B.ag,e,new C.cSW(f),e,e,e,D.eTc,f.gns().z),B.bs,A.bH(D.eXg,new C.cSX(f,a6),A.bk(B.b0,e,e,e,e,B.nC,e,e,new A.b5(A.m(16),B.W),e,e,e))],w),e,O.ad8,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDC.prototype={
a6(d,e){var w,v,u,t=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
t.N(new A.bj(0,0))
w=e.a
t.N(new A.av(w,0))
v=e.b
t.N(new A.av(w,v))
t.N(new A.av(w/2,v-12))
t.N(new A.av(0,v))
t.N(new A.bX())
u=A.U()
u.sav(D.bG1.aC(0,new A.af(0,0,0+w,0+v)))
d.b4(t,u)},
ao(d){return!1}}
C.bdi.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a1()
w=A.U()
w.sav(D.bF9.aC(0,new A.af(0,0,a3,a4)))
a5.bp(new A.af(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f5()
u.dZ(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.cDb[u.aA(9)]
j=u.aA(14)
J.bP(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.af(n,j,n+m,j+l)
h=A.c_(i,B.hi)
g=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a1,B.a7,B.x,A.a([f,k,e],t),a0,a0).aC(0,i))
d=g.M()
w.drawRRect(A.fL(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
e.r=E.jt.j(0.55).gt(0)
d=e.M()
w.drawRect(A.cz(new A.af(h,j,g,j+2)),d)
d.delete()
j=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.r=E.jt.j(0.4).gt(0)
d=j.M()
w.drawRect(A.cz(new A.af(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aA(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.sav(D.bEB.aC(0,new A.af(0,r,a3,q)))
d=p.M()
w.drawRect(A.cz(new A.af(0,r,a3,q)),d)
d.delete()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.w.j(0.5).gt(0)
p.z=B.jf
d=p.M()
w.drawRect(A.cz(new A.af(0,q,a3,q+14)),d)
d.delete()}w=A.U()
w.r=D.aZt.j(0.72).gt(0)
a5.bp(new A.af(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.U()
a4.sav(new A.bS(B.B,0.5,B.x,a0,0,A.a([D.b4v.j(0.22),B.K],t),a0,a0).aC(0,A.c2(new A.v(w,a2),a1)))
a5.aw(new A.v(w,a2),a1,a4)},
ao(d){return!1}}
C.b6l.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ad("[ \t]{2,}",!0,!1,!1,!1),k=A.aI(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cE(14,w*2,v*2.2,v*2,o,o,new A.kz(new A.o(A.aq(D.jU,D.b8b,w/4),o,new A.c1(B.W,new A.ax(B.w.j(0.12),1,B.r,-1),B.W,B.W),B.I8,o,o,B.n),B.b7,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.G,B.w.j(0.35),B.aAM,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.b3(2,2)
t.push(A.p(o,o,B.h,o,o,new A.o(E.jt.j(0.6),o,o,new A.bu(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.u(t,B.m,o,B.qv,B.j,0,B.p),B.h,o,o,new A.o(o,o,o,D.aP5,u,D.bG_,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.G,B.w.j(0.4),B.dl,18)],v)
t=A.an(o,A.b2(o,o,o,new C.aDC(o),D.emt),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aQS(p.y,r,G.i9,o))
r=n.d
q=p.x
if(p.f)n=A.u(A.a([A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.r,o,o,o,o,o,2,A.bl(o,B.ep,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.i9.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eJu,!0,B.a6,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.i9.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.w,o,o,o,o,o,2,A.bl(o,B.ep,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.i9.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,o,B.af,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eB0,!0,B.a6,B.yc,B.am,o,o,o,o),1)],m),B.ad,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.eJn,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.i9.j(0.5),o,o,o,o,o,o,o,o,11,B.cx,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.D(A.p(o,o,B.h,D.CX.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fj,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.CX.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.h,D.CX.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.i9.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.VH(A.dr(A.a([A.dr(o,o,o,o,o,o,o,o,o,D.eDW,B.a.al(k,0,1)),A.dr(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.i9.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cg(A.u(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.z,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.iX,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.i9.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.D(A.p(o,A.bv(B.I8,new A.am(B.V,o,B.a9,B.q,A.a([t,new A.C(D.bim,A.u(s,B.ad,o,B.e,B.j,0,B.p),o),A.an(0,A.bQ(o,new A.o(o,o,o,o,o,new A.a8(B.a1,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.b7),o,o,0,o,0,22)],m),o),B.ap),B.h,o,o,new A.o(o,o,o,B.I8,v,D.bGt,B.n),o,o,o,o,o,o,o,o),1)],m),B.ad,o,B.e,B.j,0,o,o))
return new A.am(B.V,o,B.a9,B.q,l,o)}}
C.amK.prototype={
S(){return new C.aAf(A.a([],x._))},
bl(){return this.r.$0()},
p_(){return this.w.$0()},
gdS(){return this.c}}
C.aAf.prototype={
Z(){var w,v
this.a0()
this.v_()
w=this.a
v=w.c
if(v.length!==0)C.a4V(v,w.e,w.d.w)},
uP(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fIy(r,t.e,!1,s.w,new C.dKU(u),null,s),$async$uP)
case 2:w=3
return A.b(u.v_(),$async$uP)
case 3:return A.h(null,v)}})
return A.i($async$uP,v)},
Yj(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fIy(r,t.e,!0,s.w,new C.dKT(u),null,s),$async$Yj)
case 2:w=3
return A.b(u.v_(),$async$Yj)
case 3:return A.h(null,v)}})
return A.i($async$Yj,v)},
v_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zw(q.a.c),$async$v_)
case 7:p=e
if(q.c!=null)n=q.e||J.cs(p)
else n=!1
if(n)q.n(new C.dKW(q,p))
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
return A.b(C.EZ(q.a.c).cJ(0,B.oT),$async$v_)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dKX(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dKY(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v_,v)},
MO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.F(s).f.P(D.eq0)
w=3
return A.b(C.EZ(t.a.c),$async$MO)
case 3:r=e
w=4
return A.b(C.fp4(t.a.c,r),$async$MO)
case 4:q=e
w=5
return A.b(C.EZ(t.a.c),$async$MO)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dKS(t,p))
o=t.c.F(s).f
s=A.d(q?"Family trees synced \u2014 "+J.a9(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(null,null,null,q?B.dq:B.cL,null,B.q,null,s,null,B.lQ,null,null,null,null,null,null,null,null,null,null))
t.a.p_()
case 1:return A.h(u,v)}})
return A.i($async$MO,v)},
Gx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hOe(l),$async$Gx)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hiS(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWq(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Gx)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h0e(r)
o=Date.now()
n=t.a.c
m=new C.kl(l,r.toUpperCase(),p,!0,B.U,D.AE,new A.O(o,0,!1),0,n,D.rH)
w=5
return A.b(C.a0s(n,m),$async$Gx)
case 5:w=6
return A.b(t.v_(),$async$Gx)
case 6:t.a.bl()
t.a.p_()
if(t.c==null){w=1
break}t.Dc(m)
case 1:return A.h(u,v)}})
return A.i($async$Gx,v)},
Dc(d){return this.c68(d)},
c68(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Dc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zw(u.a.c),$async$Dc)
case 2:n=l.qC(k.dE(f,new C.dKV(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hk(m,new C.amE(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Dc)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0s(u.a.c,o),$async$Dc)
case 6:case 5:w=7
return A.b(u.v_(),$async$Dc)
case 7:u.a.p_()
return A.h(null,v)}})
return A.i($async$Dc,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=new C.t4(p)
if(r.e)return A.as(A.mi(q,p?B.bm:B.bv,q,q,q,q,q,q,q,q),q,q,q)
if(J.ci(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.X,!0,q,A.aH(!1,q,!0,A.p(q,D.buk,B.h,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cC,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc5e(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.E5(A.p(q,A.u(A.a([u,B.aN,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bH(D.f41,r.gaMc(),A.bk(B.bR,q,q,q,q,q,Af.Vu,q,new A.b5(A.m(12),B.W),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bij,q,q,1/0),15,B.ag,1.05,D.a50,q)}w=J.a9(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.xd,B.aS,q,q,q,q),q,q,q,new C.dL_(r),q,q,q,q,"Sync family trees with database",q))
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.x4,B.aS,q,q,q,q),q,q,q,r.gacz(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dk(E.aiv,D.eMG,r.gaMc(),A.bk(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.a9(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ab)
u.push(new C.E5(r.crH(J.q(r.d,s),o),14,B.ag,1,D.a50,q))
B.d.v(w,u)}return A.u(A.a([p,B.ay,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
crH(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dT:B.cg).j(0.55),B.r,1),r=A.a([new A.aa(0,B.G,B.w.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.btn,B.h,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galm(),m=d.d?"":" \xb7 Public",l=d.y===D.k_?" \xb7 View only":"",k=x.p
l=A.D(A.u(A.a([o,B.by,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.X,!0,w,A.aH(!1,q,!0,new A.C(B.bA,A.B(A.a([p,B.ba,l,A.V(B.Kp,v?B.bm:B.bv,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dKZ(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amE.prototype={
S(){return new C.aAc(A.a([],x._),A.aZ(x.N),A.b40())},
bl(){return this.r.$0()},
gdS(){return this.c}}
C.aAc.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9E()
w=u.a
v=w.c
if(v.length!==0)C.a4V(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.at()
w.O$=0
this.a2()},
a08(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a08=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wO("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dKk(r),s,null,!0,!0,x.y),$async$a08)
case 3:if(e!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dKl(t,r))
w=4
return A.b(t.uR(),$async$a08)
case 4:t.a.bl()
t.wO(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a08,v)},
ci_(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.x1$.push(new C.dKf(w,f,d,e))},
aOm(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.de()
u.dY(w,v,0,1)
u.jf(q,q,1,1)
this.w.st(0,u)},
b4m(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ew(new Float64Array(16))
q.dT(r)
w=q.Bt()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.de()
t.dY(r,u,0,1)
t.jf(v,v,1,1)
t.dY(-r,-u,0,1)
t.ie(0,q)
s.st(0,t)},
a9E(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zw(u.a.c),$async$a9E)
case 2:t=s.qC(r.dE(e,new C.dJO(u)))
if(t!=null&&u.c!=null)u.n(new C.dJP(u,t))
return A.h(null,v)}})
return A.i($async$a9E,v)},
wO(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
uP(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$uP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fIy(o,t,!1,r,new C.dK2(u),q.a,s),$async$uP)
case 2:n=A
m=J
w=3
return A.b(C.EZ(u.a.c),$async$uP)
case 3:p=n.qC(m.dE(e,new C.dK3(u)))
if(p!=null&&u.c!=null)u.n(new C.dK4(u,p))
return A.h(null,v)}})
return A.i($async$uP,v)},
HX(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0s(t,s),$async$uR)
case 2:return A.h(null,v)}})
return A.i($async$uR,v)},
ZM(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wO("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hPn(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZM)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HX()
t.n(new C.dKe(t,r))
w=4
return A.b(t.uR(),$async$ZM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZM,v)},
Yw(){return this.c6a()},
c6a(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wO("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.L(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dKc(r,new C.t4(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Yw)
case 3:if(e!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dKd(r,t))
w=4
return A.b(t.uR(),$async$Yw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yw,v)},
TL(d){return this.bti(d)},
bti(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ti(r,t.a.c)){t.wO("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dJC(t,d),r,null,!0,!0,x.P),$async$TL)
case 3:s=f
if(s==null){w=1
break}t.HX()
t.n(new C.dJD(t,s))
w=4
return A.b(t.uR(),$async$TL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TL,v)},
a0u(d){return this.ctO(d)},
ctO(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.L(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.dKn(u,d,new C.t4(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0u)
case 2:return A.h(null,v)}})
return A.i($async$a0u,v)},
c2y(d){var w=this,v=w.d
v===$&&A.c()
if(C.ti(v,w.a.c))w.Mu(d)
else w.a0u(d)},
af1(d,e){return this.clN(d,e)},
clN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$af1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.L(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.dKh(new C.t4(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$af1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$af1,v)},
GC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.k_?3:5
break
case 3:w=6
return A.b(C.fwN(t.a.c),$async$GC)
case 6:s=e
o=t.a
r=C.fQ6(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.af1(!s,!r),$async$GC)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bxd(o,t.a.c)){t.wO("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kN(o,"Cancel","Remove",q.y===D.k_?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GC)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLv(t.a.c,t.d.a),$async$GC)
case 11:t.a.bl()
o=t.c
if(o==null){w=1
break}A.iC(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GC,v)},
a7f(d){return this.bE6(d)},
bE6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ti(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.bf(s,new C.dJE(p))){o=A.T(s)
p.a=A.qC(new A.cQ(new A.a5(s,new C.dJF(d),o.k("a5<1>")),new C.dJG(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.HX()
t.n(new C.dJH(t,s,d,q))
w=3
return A.b(t.uR(),$async$a7f)
case 3:t.wO(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7f,v)},
Mu(d){return this.bG6(d)},
bG6(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ti(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0u(d),$async$Mu)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.dJL(t,d),r,null,!0,!0,x.P),$async$Mu)
case 6:s=f
if(s==null){w=1
break}t.HX()
t.n(new C.dJM(t,s))
w=7
return A.b(t.uR(),$async$Mu)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mu,v)},
cs0(){var w=this,v=w.d
v===$&&A.c()
if(!C.ti(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dKm(w))
w.uR()},
Wv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bxd(n,t.a.c)){t.wO("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.L(n)
s=$.at()
r=new A.ao(B.aq,s)
q=t.d.e
p=A.bh(new A.J(q,t.gc13(),A.T(q).k("J<1,n>")).bZ(0,new C.dJY()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dJZ(t,new C.t4(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Wv)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dK_(t,p))
w=4
return A.b(t.uR(),$async$Wv)
case 4:t.wO("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
c14(d){return B.a.i(d.toLowerCase())},
c5_(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ti(v,w)
t=r.d
s=C.hEW(t)
C.hOi(q,t.b,u,C.hEV(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t4(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a5(l,new C.dKu(),A.T(l).k("a5<1>")).gH(0)
l=n?B.bV:B.iR
v=A.V(B.Ww,n?B.bm:B.bv,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zA,A.aH(!1,o,!0,new A.C(B.ht,A.B(A.a([v,B.bo,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dKv(p,d),o,o,o,o,o,o,o),o),new A.C(B.my,p.bQK(m),o)],u)
if(p.d.y===D.k_){t=B.qx.j(0.15)
s=A.m(12)
r=A.H(B.qx.j(0.45),B.r,1)
q=C.EX(p.d,p.a.c)
v.push(new A.C(B.wq,A.p(o,A.B(A.a([D.byu,B.av,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a0,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iE,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.ti(p.d,p.a.c)&&p.e.length!==0)u.push(new C.I9("Undo",B.uA,p.gcs_(),m,o,o))
u.push(new C.I9("Family Book",D.bo6,p.gc4Z(),m,B.re,o))
if(C.ti(p.d,p.a.c))u.push(new C.I9("Display settings",Aj.EC,p.gc69(),m,B.aW,o))
u.push(new C.I9("Sync",B.x4,p.gacz(),m,o,o))
t=p.d
if(t.y===D.k_||C.bxd(t,p.a.c)){t=p.d.y===D.k_?"Remove shared tree":"Delete tree"
u.push(new C.I9(t,B.e4,p.gbEg(),m,B.fK,o))}if(C.ti(p.d,p.a.c))u.push(new C.I9("Add member",B.uv,new C.dKw(p),m,B.bR,o))
v.push(new A.C(O.acM,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galm()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cj(new C.dKx(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?K.WA:W.Kq,o,o,o,o,o)
v.push(A.as(A.hf(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dKy(p),o),o,o,o))}return A.cf(o,l,A.br(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bQK(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.aa(0,B.G,B.ff.j(0.35),B.dl,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.wY,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.X,!0,m,A.aH(!1,m,!0,A.p(m,D.bBt,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cC,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacz(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.Z,m,m,m,D.ezt,m,m,m)
r=r.galm()
p=n.d.galm()===1?"member":"members"
o=x.p
p=A.a([s,B.ba,A.D(A.u(A.a([q,B.by,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a0,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.ti(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.byG,m,m,m,n.gcfu(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.iZ:B.lZ
r=r?"Private":"Public"
r=A.D(n.arx(q,"Privacy",r,n.a.d.w?n.gcr6():m),1)
q=A.D(n.arx(B.x5,"Tree code",n.d.c,new C.dJN(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ab,A.B(A.a([r,B.aa,q,B.aa,A.D(n.arx(D.bpQ,"Collaborators",p,n.gbV4()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.k_){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.X,!0,A.m(999),A.aH(!1,A.m(999),!0,new A.C(B.fF,A.B(A.a([A.V(B.o9,B.c,m,m,m,14),B.eA,A.d("View only",m,m,m,m,m,m,B.aJe,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bv(u,new A.am(B.V,m,B.a9,B.q,A.a([t,new A.C(B.Dz,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.h,m,m,new A.o(m,m,m,w,v,D.bEE,B.n),m,m,m,m,m,m,m,1/0)},
arx(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.X,!0,A.m(14),A.aH(!1,A.m(14),!0,new A.C(D.bk2,A.u(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.Z,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.v4,A.d(f,w,1,B.Z,w,w,w,L.aJ0,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)}}
C.bay.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gah(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.baB(s,t),new A.ap(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d_y(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d_z(this),A.T(r).k("J<1,r>")))
return new A.C(B.rE,new A.a3(w,v,new A.am(B.V,t,B.a9,B.h,u,t),t),t)}}
C.Il.prototype={}
C.Eh.prototype={}
C.baA.prototype={
gbcu(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFH.prototype={}
C.baB.prototype={
bFP(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.a1()
v=A.U()
v.r=B.bz.j(0.75).gt(0)
v.c=2
v.d=B.bZ
d.bU(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.b0(q.r,B.aw,null,null,A.a([],x.v))
q=w+5.5
t.N(new A.bj(u,q))
s=w-1.1
r=w-8.8
t.N(new A.p4(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.N(new A.p4(u+4.95,r,u+9.9,s,u,q))
t.N(new A.bX())
q=A.U()
q.r=B.c.gt(0)
d.aw(new A.v(u,w),9,q)
q=A.U()
q.r=B.bz.gt(0)
d.b4(t,q)},
bFN(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d_T())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.bf(a0,new C.d_U(f))
t=new A.J(a0,new C.d_V(f),A.T(a0).k("J<1,Q>")).bZ(0,new C.d_W()).cI(0,1/0,B.vH)
w=f.a
d.bU(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.M()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lB(m)
i=Math.min(10,l/2)
l=$.a1()
h=A.a([],q)
g=new A.b0(l.r,B.aw,null,null,h)
h.push(new A.bj(w,v-i))
l=j*i
h.push(new A.dn(w,v,w+l,v))
h.push(new A.av(n-l,v))
h.push(new A.dn(n,v,n,v+i))
h.push(new A.av(n,o.b))
k=e.M()
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cG(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.a1()
w=A.U()
w.r=B.bR.j(0.75).gt(0)
w.c=2.2
w.b=B.ak
w.d=B.bZ
w.e=B.fl
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bFN(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.M()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bFP(d,w,q.a,q.b)}},
ao(d){return d.b!==this.b}}
C.bef.prototype={
gbZW(){var w=this.c
if(B.a.i(w.y).length!==0)return D.cZf
switch(w.c.a){case 0:return D.cvC
case 1:return D.cFP
case 2:return D.cUl}},
gbZZ(){var w=this.c,v=C.h_E(w.w),u=C.h_E(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=t.gbZW(),p=t.c,o=I.by4(p.f),n=t.gbZZ(),m=x.V,l=A.a([new A.aa(0,B.G,B.d.gai(q).j(0.35),B.cG,10)],m),k=r?B.aG:B.c,j=A.H(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.rx(B.B,s,B.ci,B.bN,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.B,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a8(B.a1,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hM(w,B.ap),B.h,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.DP,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eJ1,s,s,s),B.h,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.bk6,s,s,s),s,s,s,-6,-4,s))}k=r?B.d3:B.c
j=A.m(8)
w=A.H(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.G,B.w.j(r?0.3:0.06),B.dH,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.d3,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bv,s,s,s,s,s,s,s,s,7.5,s,s,B.a0,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aJ(s,new A.a3(84,112,A.u(A.a([new A.am(B.V,s,B.a9,B.h,l,s),B.au,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aQU,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bkg,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ae)}}
C.b9G.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.a1()
w=A.U()
v=this.b
u=v?B.c:D.b0R
w.r=u.j(v?0.05:0.09).gt(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.M()
t.drawCircle(r,s,1,q)
q.delete()}},
ao(d){return d.b!==this.b}}
C.brE.prototype={
B(d){var w=this,v=null,u=new C.eVn(w),t=w.c,s=t?B.d3:B.c,r=A.m(12),q=u.$3(B.hH,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Ev,"Zoom out",w.e)
return A.aD(!1,B.X,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),u.$3(B.ag5,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dt,v,v,v,B.ac)}}
C.bhw.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.H(B.bR,B.r,2),s=w.e,r=x.p
t=A.aJ(v,A.p(v,A.u(A.a([A.V(s?K.WA:W.Kq,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eFs,v,v,v)],r),B.m,v,B.b5,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ae)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eDv,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.ex2(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a3(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XM.prototype={
S(){return new C.ayE()},
bl(){return this.Q.$0()},
gdS(){return this.w}}
C.ayE.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.at()
r.d!==$&&A.aO()
r.d=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.c
r.y=t==null?D.wC:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hGq(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.at()
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
NL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fQ6(p.y,p.w)
w=3
return A.b(A.kZ(t.a.w,B.Gc),$async$NL)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWq(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NL)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hiT(p.y,p.w)
t.a.bl()
case 5:w=7
return A.b(Ah.F7(78,800),$async$NL)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.df9(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NL,v)},
bZY(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hO(B.o.u(1000*Date.now()),w,D.wC,null,null,null,"","","","","",1,!1,0)
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
s=v.azU(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).K(s)},
a6S(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a6S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.df8(r),s,null,!0,!0,x.y),$async$a6S)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).K(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a6S,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===B.H,i=new C.t4(j),h=l.a.e,g=A.T(h).k("a5<1>"),f=A.A(new A.a5(h,new C.dfi(l),g),g.k("G.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.biE,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hI(A.aH(!1,k,!0,new A.C(B.lT,A.V(B.e4,B.nW,k,k,k,17),k),B.cC,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbAY(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.j7:B.iA
t=I.by4(l.as)
if(l.as==null)s=A.V(B.o2,j?B.bm:B.bv,k,k,k,40)
else s=k
s=A.as(A.aJ(k,new A.am(B.V,k,B.a9,B.q,A.a([A.hg(u,t,s,k,42),A.an(0,A.hg(B.bR,k,D.bsr,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gbZV(),k,k,k,k,k,k,!1,B.ae),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayG(t,"Full name",B.lV,1,1,i,B.lA)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.T,new C.bed(i,u,new C.dfj(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bch],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dfk(),A.T(o).k("J<1,ep<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bcj],q)
B.d.v(q,new A.J(f,new C.dfm(),A.T(f).k("J<1,ep<n?>>")))
o=A.u(A.a([t,B.ar,new C.aaG(i,r,"Who is their parent?",p,new C.dfn(l),k,o),B.ay,n,B.ar,new C.aaG(i,m,"Who is their spouse / partner?",q,new C.dfo(l),k,o)],v),B.ad,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayG(q,"Birth date",D.afd,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayG(m,"Birth place",B.WP,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayG(n,"Date of death (if deceased)",D.ahl,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayG(p,"Occupation",B.XY,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.B,k,B.a9,B.q,w,k),B.ay,s,B.bs,new C.aaH(i,"Identity",u,k),B.ab,new C.aaH(i,"Family links",o,k),B.ab,new C.aaH(i,"Life details",A.u(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ayG(r,"Notes",B.kw,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ab,new C.ayF(i,"Child order",l.c6k(l.at),new C.dfp(l),new C.dfq(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fG1(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dfr(l):k
B.d.v(r,A.a([B.T,new C.ayF(i,"Visible in tree",u,w,new C.dfs(l),k)],v))}r.push(B.T)
w=j?B.j7:B.iA
u=A.m(14)
t=A.H(j?B.dT:B.cg,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.it(k,B.bR,k,B.ag,k,new C.dft(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.aco,k,k,k))
r.push(B.bs)
w=j?B.aO:B.aG
j=j?B.dT:B.cg
r.push(A.B(A.a([A.D(A.dU(B.mW,new C.dfl(d),A.d9(k,k,k,k,k,k,k,k,k,w,k,k,B.ca,k,new A.b5(A.m(14),B.W),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.ba,A.D(A.bH(D.ejh,l.gbZX(),A.bk(B.aS,k,k,0,B.c,k,B.ca,k,new A.b5(A.m(14),B.W),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.eo(B.fT,k,B.ag,h,new A.a3(420,k,A.cg(A.u(r,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),k),D.adf,k,B.acE,new A.b5(g,B.W),k,k)},
c6k(d){var w=B.o.J(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.J(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaH.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j7:B.iA,s=A.m(16)
return A.u(A.a([new A.C(D.adE,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dT:B.cg,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bee.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dT:B.cg).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a0,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bl(u,B.ep,u,B.ua,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bm:B.bv,u,u,u,u,u,u,u,u,u,u,u,B.cp,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.af,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a6,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaG.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dT:B.cg).j(0.85),B.r,1),q=A.V(B.qg,u?B.bm:B.bv,v,v,v,v),p=A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a0,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Cj(A.a27(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,v,v,v,B.cp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lS,v,v,v)}}
C.bed.prototype={
B(d){var w=new C.dfu(this)
return A.B(A.a([w.$3(D.Wi,"Male",B.La),B.aa,w.$3(D.aeu,"Female",B.KW),B.aa,w.$3(D.wC,"Other",B.mC)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayF.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.j7:B.iA,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aEK(u,B.Ev,w.f,v),B.bo,new C.aEK(u,B.hH,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aEK.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bm:B.bv).j(0.4)
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,new A.a3(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ac)}}
C.aaI.prototype={
bJp(d){switch(d.a){case 0:return B.bR
case 1:return B.bz
case 2:return B.cS}},
bJq(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aSt(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
z9(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.H((w?B.dT:B.cg).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bR,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.u(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.zy,p,p,1/0)},
ab7(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j7:B.iA,s=A.m(16),r=A.H(v?B.dT:B.cg,B.r,1)
return A.u(A.a([new A.C(D.adE,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h4g(r,q),o=q.c,n=t.bJp(o),m=I.by4(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.k_?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bm:B.bv,s,s,s,s,s,s,s,s,12,s,s,B.a0,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.aa(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.hg(u,m,m==null?A.V(B.o2,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ef,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bJq(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mx,s,s,s),s,s,s)
u=x.p
i=A.a([t.z9("Full name",i,B.lV)],u)
if(p>0)i.push(t.z9("Child order","#"+p,B.L2))
r=A.a([h,B.au,r,B.aN,l,B.T,v,B.bs,t.ab7("Identity",i),B.ab,t.ab7("Life details",A.a([t.z9("Birth date",q.w,D.afd),t.z9("Birth place",q.x,B.WP),t.z9("Date of death",q.y,D.ahl),t.z9("Occupation",q.z,B.XY)],u)),B.ab,t.ab7("Family links",A.a([t.z9("1. Parent",t.aSt(q.d),B.E1),t.z9("2. Spouse",t.aSt(q.e),B.KV)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ab,t.ab7("Notes",A.a([t.z9("Notes",q,B.kw)],u))],u))
r.push(B.bs)
r.push(A.bH(B.Hj,new C.dfE(d),A.bk(B.aS,s,s,s,s,s,B.ca,s,new A.b5(A.m(14),B.W),s,s,s)))
return A.ev(s,k,new A.cZ(B.ld,A.cg(A.u(r,B.ad,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zG,s,s,B.ah),s),s,s,s,B.DD,B.cX,s,new A.b5(j,B.W),s)}}
C.I9.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bm:B.bv
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.wv,A.hI(A.aD(!1,B.X,!0,A.m(8),A.aH(!1,A.m(8),!0,new A.a3(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.amH.prototype={
eE(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().aa())
w=u.c
v=A.T(w).k("J<1,a0<n,@>>")
w=A.A(new A.J(w,new C.c2Y(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iD(w,new C.c2Z(),t,x.U))
return s}}
C.amI.prototype={
S(){return new C.aAe(A.a([],x.bF))},
gd6(){return this.c}}
C.aAe.prototype={
Z(){this.a0()
this.I3()},
I3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c31(t.a.c),$async$I3)
case 3:r=e
w=4
return A.b(C.zw(t.a.c),$async$I3)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rj(q,new C.dKH(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dKI(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I3,v)},
xl(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IM(d,e){return this.cuk(d,e)},
cuk(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dKM(q,e))
t=3
w=6
return A.b(d.$0(),$async$IM)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dKN(q))
$.eI.lU()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IM,v)},
Vm(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$Vm)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKE(t),"Preparing download\u2026"),$async$Vm)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vm,v)},
Vq(d){return this.bHv(d)},
bHv(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$Vq)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKF(t,d),"Preparing file\u2026"),$async$Vq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vq,v)},
acW(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$acW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wg.c2().Ks(B.NT,B.rI,!0),$async$acW)
case 7:r=e
o=r
q=o==null?null:J.fg(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aE.gah(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jd(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a4(m)
$.al.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.F6()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acW,v)},
W0(d){return this.bRB(d)},
bRB(d){var w=0,v=A.j(x.H),u=this
var $async$W0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IM(new C.dKG(u,d),"Restoring family trees\u2026"),$async$W0)
case 2:return A.h(null,v)}})
return A.i($async$W0,v)},
W_(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.acW(),$async$W_)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.W0(s),$async$W_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W_,v)},
a_B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$a_B)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKL(t),"Creating QR code\u2026"),$async$a_B)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_B,v)},
a_c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BC()){t.xl("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).cs(A.eH(new C.dKJ(),!0,null,x.N)),$async$a_c)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.W0(r),$async$a_c)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_c,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=o?B.z1:B.iR,m=o?D.ab1:B.aO,l=o?B.aI:B.cg,k=o?B.aO:B.aG,j=new C.d_X(n,m,l,k,o?B.bP:B.bv)
l=A.aF(p,p,p,p,A.V(B.et,k,p,p,p,20),p,p,p,new C.dKP(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eA(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d_v(!0,B.j0,B.b4,B.b4,q.r?p:q.gclB(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gchV()
t.push(A.D(C.d_v(!s,B.iH,B.b0,B.bE,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d_v(!1,B.hh,B.aS,B.bR,q.r?p:q.gbHo(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d_v(!1,M.x8,B.aZ,B.aM,q.r?p:q.gbRy(),j,s,"Upload backup file"),1))
l=A.a([new C.baz(v,l,p),B.kb,new C.a9Z(j,"QR restore",p),B.T,t,B.d1,new C.a9Z(j,"Backup files",p),B.T,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.a9(q.d)>1&&q.a.f==null){v=A.a([B.kb,new C.a9Z(j,"One tree",p),B.T],u)
B.d.v(v,J.b4(q.d,new C.dKQ(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cK(l,p,B.Vq,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.G,B.w.j(o?0.3:0.1),B.dl,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.br(!0,A.p(p,A.B(A.a([K.aHJ,B.ba,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zF,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cf(w,n,new A.am(B.V,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d_X.prototype={}
C.baz.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.G,B.aS.j(0.32),B.kG,28)],x.V)
t=A.an(p,A.V(B.rZ,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bB1,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nD,A.D(A.u(A.a([D.eNz,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bHz,B.n),p,p,p,p,p,p,p,p)}}
C.a9Z.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.aa,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bax.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b4.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.G,B.b4.j(0.1),B.cG,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.X,!0,q,A.aH(!1,o,!0,A.eq(A.d4(new A.C(E.V3,A.u(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qd,q,q,q),B.ab,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.by,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cp,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)}}
C.baC.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.eq(new A.C(B.eF,A.B(A.a([A.p(v,D.bAe,B.h,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qd,v,v,v),B.ba,A.D(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hh,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Y6.prototype={
S(){return new C.aAd()},
gd6(){return this.c}}
C.aAd.prototype={
Z(){this.a0()
this.a6r()},
a6r(){var w=0,v=A.j(x.H),u=this,t
var $async$a6r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aZ2(u.a.c,B.Be),$async$a6r)
case 2:t=e
if(u.c!=null)u.n(new C.dKz(u,t))
return A.h(null,v)}})
return A.i($async$a6r,v)},
aej(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aej=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dKA(q))
t=4
p=A.fRJ(q.a.d,B.Be)
if(p==null){n=A.b9("Could not read this QR code.")
throw A.P(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aoU(n.e,m,l,B.Be,p,n.f),$async$aej)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dKB(q))
q.c.F(x.q).f.P(D.er9)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a4(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(B.a.e1(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dKC(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aej,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=p?B.iT:B.oO,n=p?B.hm:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eA(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f10,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pi(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.u(A.a([B.P,u,B.bs,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b5,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.aj:B.bB,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gchD()
if(u)u=B.GX
else u=A.V(r.e===!0?B.hg:B.afc,q,q,q,q,q)
w=A.a([w,B.ab,v,B.ab,new A.a3(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.d9(q,q,q,q,q,q,q,q,q,B.aS,q,B.fL,q,q,q,new A.ax(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.iX,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a3(1/0,q,A.bH(B.yj,new C.dKD(d),A.bk(B.aS,q,q,q,q,B.fL,q,q,q,q,q,q)),q))
return A.cf(m,o,new A.C(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Y7.prototype={
S(){return new C.bfE(A.y8(B.wb,B.n2,B.t2))}}
C.bfE.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cf(A.eA(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eUM,w,w,w,1,w,!0),B.w,A.y7(this.d,B.bN,new C.dKR(this,d)),w,!1,!1,w,w)}}
C.aUZ.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Nq,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lh.prototype={}
C.a3Y.prototype={
S(){return new C.bfn(null,null)}}
C.bfn.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bi(v,B.rx,v,1,v,w)
w.e=A.bi(v,B.oS,v,1,v,w)
w.a.toString
w.d.cF(0)
w.e.cF(0)},
bo(d){var w,v,u=this
u.bA(d)
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
this.boS()},
B(d){var w,v,u=this,t=B.d.dI(D.a_x,new C.dx8(u),new C.dx9())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cnx(A.c4(new A.h2(A.a([w,v],x.dS)),new C.dxa(u,t),null),!0)}}
C.bfm.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWm(d,e)
break
case"house":p.lv(d,e,D.cK2)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.a1()
t=A.U()
t.r=B.c.j(0.18+v*0.12).gt(0)
d.aw(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lA(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zS(d,e,12)
p.wX(d,e,B.kO,5,14)
break
case"grocery":p.c71(d,e)
break
case"calculator":p.c6J(d,e)
break
case"lumber":p.c79(d,e)
break
case"kitchen":p.c74(d,e)
break
case"landscape":p.lv(d,e,D.cKt)
s=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.N(new A.bj(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.N(new A.dn(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.N(new A.dn(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.N(new A.av(t,w))
s.N(new A.av(0,w))
s.N(new A.bX())
w=A.U()
w.r=B.fq.j(0.85).gt(0)
d.b4(s,w)
p.zS(d,e,8)
p.wX(d,e,B.iC,4,18)
break
case"plumbing":p.c7i(d,e)
break
case"electrical":p.lv(d,e,D.cTH)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.a1()
u=A.U()
u.r=B.c.j(q*0.12).gt(0)
d.bp(new A.af(0,0,0+e.a,0+e.b),u)
p.lA(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lA(d,e,B.nb.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zS(d,e,10)
break
case"store":p.c7r(d,e)
break
case"paint_remodel":p.c7d(d,e)
break
case"roofing":p.c7k(d,e)
break
case"warehouse":p.c7y(d,e)
break
case"vehicles":p.c7w(d,e)
break
case"farm":p.c6W(d,e)
break
case"restaurant":p.c7j(d,e)
break
case"tools":p.c7u(d,e)
break
case"wallet":p.c7x(d,e)
break
case"concrete":p.c6P(d,e)
break
case"blueprint":p.c6H(d,e)
break
default:p.aWm(d,e)}},
lv(d,e,f){var w,v=new A.af(0,0,0+e.a,0+e.b)
$.a1()
w=A.U()
w.sav(new A.a8(B.ax,B.aC,B.x,f,null,null).aC(0,v))
d.bp(v,w)},
lA(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gef()/2-h
$.a1()
w=A.U()
w.b=B.ak
w.c=2.4
w.r=f.gt(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.c2(q,p)
r=w.M()
v.drawArc.apply(v,[A.cz(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wX(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gt(0)
p=q.M()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zS(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.J(s*0.17,0.9)
p=B.k.J(s*0.23,0.85)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.c.j(0.2+r*0.6).gt(0)
n=o.M()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWm(d,e){var w,v=this
v.lv(d,e,D.cSB)
w=v.c
v.lA(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lA(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bFJ(d,e,B.hD,w)
v.wX(d,e,B.c.j(0.7),6,8)},
bFJ(d,e,f,g){var w,v,u,t,s,r,q,p
$.a1()
w=A.U()
w.r=f.j(0.35).gt(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.M()
s.drawRect(A.cz(new A.af(16,q,t,q+3)),p)
p.delete()}},
c71(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.c1P)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.J(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.J(s,2)
$.a1()
l=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.r=D.cIt[B.o.J(s,4)].j(0.85).gt(0)
k=l.M()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lA(d,e,B.c.j(0.35),w,16)
j.wX(d,e,B.iC,5,12)},
c6J(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lv(d,e,D.c1V)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gef()
$.a1()
q=A.U()
q.r=B.c.j(0.1+u*0.12).gt(0)
d.aw(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.j1(g,g,g,g,g,B.a6,B.cn,g,B.eM,B.cm)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cLW[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.J(o,2)
p.saR(0,new A.ez(r,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fE()
p.a6(d,new A.v(t*(0.08+B.o.J(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c1X[o]
l=B.kN.j(0.28+0.3*Math.sin(n))
k=B.o.J(o,2)
p.saR(0,new A.ez(m,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fE()
p.a6(d,new A.v(t*(0.55+B.o.J(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lA(d,e,B.c.j(0.35),w*1.5,14)
h.lA(d,e,B.ev.j(0.55),-v*3.141592653589793*2,8)
h.lA(d,e,B.z2.j(0.4),r*2.8,22)
h.wX(d,e,B.oG,8,10)
h.zS(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.J(w+o*0.22,0.9)
$.a1()
r=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gt(0)
r.c=1.2
i=r.M()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c79(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,Y.aqv)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.c_(new A.af(20,q,u,q+10),B.k8)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=A.aq(B.ho,B.nO,(r+1)/2).gt(0)
n=o.M()
t.drawRRect(A.fL(p),n)
n.delete()}m.lA(d,e,B.ho.j(0.35),w,15)
m.zS(d,e,8)},
c74(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.cIW)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.J(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.J(r*0.13,0.7)
$.a1()
l=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.r=B.c.j(0.25+p*0.55).gt(0)
k=l.M()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lA(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.wX(d,e,B.pU,4,14)},
c7i(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lv(d,e,D.cz0)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.J(s,0.12)
$.a1()
n=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.b=B.ak
n.c=2
n.r=B.c.j(0.45-q*0.12).gt(0)
m=n.M()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wX(d,e,B.nT,6,12)
l.lA(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c7r(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lv(d,e,D.cff)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.c_(new A.af(q,14,q+u,22),B.jL)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.fr,B.bK,(r+1)/2).gt(0)
o=p.M()
t.drawRRect(A.fL(q),o)
o.delete()}n.lA(d,e,B.c.j(0.3),w,16)
n.zS(d,e,8)
n.wX(d,e,B.tT,5,13)},
c7d(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cEj)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.J(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.c_(new A.af(q,p,q+8,p+(18+r*22)),B.hZ)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=[B.i6,B.dE,B.bK,B.eX][s].j(0.85).gt(0)
o=q.M()
t.drawRRect(A.fL(p),o)
o.delete()}this.lA(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c7k(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cC4)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.J(v+s*0.12,0.75))
q=B.o.J(s,4)*0.22
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.25).gt(0)
p.c=1.5
o=p.M()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wX(d,e,B.cr,7,11)},
c7y(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.chR)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.c_(new A.af(p,o,p+(t-r*8),o+16),B.k8)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.cr,B.aO,(Math.sin(q)+1)/2).gt(0)
n=p.M()
s.drawRRect(A.fL(o),n)
n.delete()}this.lA(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c7w(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cXa)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.J(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.J(s,2)*0.08)
q=A.c_(new A.af(r,q,r+28,q+8),B.k8)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.35+s*0.08).gt(0)
o=p.M()
t.drawRRect(A.fL(q),o)
o.delete()}this.zS(d,e,6)},
c6W(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cHG)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.a1()
s=A.U()
s.r=B.nb.j(0.75).gt(0)
d.aw(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.hp.j(0.85).gt(0)
o.c=3
n=o.M()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lA(d,e,B.nb.j(0.35),w,14)},
c7j(d,e){var w,v,u,t,s,r,q,p,o=this
o.lv(d,e,D.cJS)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.dy(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.22).gt(0)
p=q.M()
t.drawOval(A.cz(r),p)
p.delete()}o.wX(d,e,B.pU,5,16)
o.zS(d,e,7)},
c7u(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cV2)
w=m.c
v=w*3.141592653589793
m.lA(d,e,B.nO.j(0.55),v*3,10)
m.lA(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.nO.j(0.8).gt(0)
n=o.M()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c7x(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cXD)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.c_(new A.af(p,o,p+36,o+22),B.jL)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.iC,B.nb,q).gt(0)
n=p.M()
s.drawRRect(A.fL(o),n)
n.delete()}m.zS(d,e,9)
m.lA(d,e,B.c.j(0.4),w*2.2,12)},
c6P(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cOl)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c2(new A.v(v,u),34)
$.a1()
s=A.U()
s.b=B.ak
s.c=5
s.r=B.c.j(0.45).gt(0)
d.fP(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.cg.j(0.85).gt(0)
n=o.M()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c6H(d,e){var w,v,u,t,s,r,q,p
this.lv(d,e,D.cKJ)
$.a1()
w=A.U()
w.r=B.c.j(0.12).gt(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.M()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.M()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.J(t*0.85,1)
$.a1()
u=A.U()
u.r=B.dE.j(0.45).gt(0)
d.bp(new A.af(0,p,0+v,p+6),u)
this.lA(d,e,B.kO.j(0.45),-t*3.141592653589793*2,11)},
ao(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apz.prototype={
XX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMq(),$async$XX)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a6a(s),$async$XX)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$XX,v)},
acX(d){return this.c9N(d)},
c9N(d){var w=0,v=A.j(x.H),u=this,t
var $async$acX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hOs(d),$async$acX)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$acX,v)},
B(d){var w,v,u,t=null,s=A.L(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.j7:B.iA
w=x.p
v=A.a([C.aMO(!0,B.pK,1/0,B.p0,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bQ(new A.bF(B.b3,t,t,new A.C(B.u6,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.arl,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b3,B.bb,B.x,u,t,t),B.n),B.b7))}v.push(A.an(8,A.B(A.a([A.D(A.dk(D.bud,D.eKc,new C.caw(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jA,t,t,t,t,B.c6)),1),B.aa,A.D(A.ey(D.bCb,D.eXF,this.gc11(),A.d9(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jA,t,t,D.aPv,t,t,t,B.c6)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fM(1.7777777777777777,A.aD(!1,B.X,!0,B.pK,new A.am(B.V,t,B.aX,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aI1.prototype={
aO(){this.aU()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aPF.prototype={}
C.aPE.prototype={}
C.aNJ.prototype={}
C.WL.prototype={
S(){return new C.avz()}}
C.avz.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bb("",B.b_,B.aL)
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
ID(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.F(x.q).f.P(D.erE)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).K(new C.aPF(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.L(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bBT,B.h,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.u(A.a([i,B.by,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.ba,i,A.aF(n,n,n,n,A.V(B.cu,m?B.bm:B.bv,n,n,n,n),n,n,n,new C.cT8(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,11,n,n,B.cp,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fRZ(new C.cT9(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a0,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.j7:B.iA
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.cg
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bl(n,new A.b1(4,r,B.da),n,n,n,n,n,n,!0,new A.b1(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.af,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cTa(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a6,n,A_.H0,n,n,n,n)
u=m?B.aO:B.aG
m=m?B.dT:B.cg
return A.ev(n,l,new A.cZ(B.ld,A.cg(A.u(A.a([j,B.aN,i,B.au,w,B.P,v,B.aN,t,B.bs,A.B(A.a([A.D(A.dU(B.dd,new C.cTb(d),A.d9(n,n,n,n,n,n,n,n,n,u,n,n,B.ca,n,new A.b5(A.m(12),B.W),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.av,A.D(A.bH(D.eXU,o.ga_T(),A.bk(B.aS,n,n,n,B.c,n,B.ca,n,new A.b5(A.m(12),B.W),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zI,n,n,B.ah),n),n,n,n,V.zJ,B.cX,n,new A.b5(k,B.W),n)}}
C.WK.prototype={
S(){return new C.avy()}}
C.avy.prototype={
Z(){this.a0()
var w=$.at()
this.d!==$&&A.aO()
this.d=new A.ao(B.aq,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
ID(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.F(x.q).f.P(D.epl)
return}v=this.c
v.toString
A.a7(v,!1).K(new C.aPE(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.L(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.byz,B.h,q,q,new A.o(B.bR.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.u(A.a([l,B.by,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.ba,l,A.aF(q,q,q,q,A.V(B.cu,p?B.bm:B.bv,q,q,q,q),q,q,q,new C.cT4(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.V(B.aeZ,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.av,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bA,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.j7:B.iA
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.cg
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bl(q,new A.b1(4,t,B.da),q,q,q,q,q,q,!0,new A.b1(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.af,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cT5(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a6,q,B.kc,q,q,q,q)
w=p?B.aO:B.aG
p=p?B.dT:B.cg
return A.ev(q,o,new A.cZ(B.ld,A.cg(A.u(A.a([m,B.aN,l,B.ay,v,B.bs,A.B(A.a([A.D(A.dU(B.dd,new C.cT6(d),A.d9(q,q,q,q,q,q,q,q,q,w,q,q,B.ca,q,new A.b5(A.m(12),B.W),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.av,A.D(A.bH(D.f37,this.ga_T(),A.bk(B.bR,q,q,q,B.c,q,B.ca,q,new A.b5(A.m(12),B.W),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zI,q,q,B.ah),q),q,q,q,V.zJ,B.cX,q,new A.b5(n,B.W),q)}}
C.Wh.prototype={
S(){return new C.auk()}}
C.auk.prototype={
Z(){var w,v=this
v.a0()
w=$.at()
v.d!==$&&A.aO()
v.d=new A.ao(B.aq,w)
v.e!==$&&A.aO()
v.e=new A.ao(new A.bb("1",B.b_,B.aL),w)
v.f!==$&&A.aO()
v.f=new A.ao(B.aq,w)
v.r!==$&&A.aO()
v.r=new A.ao(B.aq,w)},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.at()
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
gHZ(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gag5(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gaZ6(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aJX(d){var w,v=B.k.D(this.gHZ()+d,0.25,999999),u=B.k.lp(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.L(v))
else{u=B.k.ab(v,2)
w=A.ad("\\.?0+$",!0,!1,!1,!1)
u=A.aI(u,w,"")}t.saR(0,u)
this.n(new C.cqK())},
atU(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.j7:B.iA,s=A.m(14),r=A.m(14)
u=u?B.dT:B.cg
return A.bl(w,new A.b1(4,s,B.da),w,B.bA,w,w,w,w,!0,new A.b1(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b1(4,A.m(14),B.a6n),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c12(d,e,f){return this.atU(d,e,f,null)},
ID(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gag5()<=0){s.c.F(x.q).f.P(D.etv)
return}r=s.c
r.toString
v=s.gHZ()
u=s.gag5()
t=s.gaZ6()
A.a7(r,!1).K(new C.aNJ(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t4(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bs9,B.h,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a8(B.a1,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.u(A.a([h,B.by,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.cp,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.ba,h,A.aF(o,o,o,o,A.V(B.cu,n?B.bm:B.bv,o,o,o,o),o,o,o,new C.cqQ(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.atU(m,"Item name (optional)","Lumber, paint, labor\u2026",B.L8),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,A_.H0,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.j7:B.iA
t=A.m(14)
s=A.H(n?B.dT:B.cg,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Ev,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqR(p),o,o,o,o,o,B.c6)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bDF,B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqS(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a3(52,o,q,o),A.aF(o,o,o,o,A.V(B.hH,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqT(p),o,o,o,o,o,B.c6)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.av,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.atU(m,"Amount","0.00",B.hI),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqU(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a6,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.A(new A.J(D.cEL,new C.cqV(p,m),t),t.k("ai.E"))
i=A.a([i,B.bs,v,B.ay,h,B.P,s,B.ab,A.cb(B.bH,u,B.bw,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c12(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cqW(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,B.kc,o,o,o,o)],w))}i.push(B.aN)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gHZ()===B.k.lp(p.gHZ())?B.k.L(p.gHZ()):p.gHZ()
s=p.gaZ6()
r=A.zy(p.gag5())
i.push(A.p(o,A.B(A.a([A.D(A.u(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.byQ(p.gHZ()*p.gag5(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a8(B.a1,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.iF,o,o,o))
i.push(B.bs)
j=A.m(14)
h=n?B.dT:B.cg
h=A.d9(o,o,o,o,o,o,o,o,o,o,o,o,B.ca,o,new A.b5(j,B.W),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cqX(d),h),1),B.av,A.D(A.dk(D.aio,D.f_q,p.ga_T(),A.bk(B.aS,o,o,0,B.c,o,B.ca,o,new A.b5(A.m(14),B.W),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ev(o,l,new A.cZ(U.a6K,A.cg(A.u(i,B.ad,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A7.qc,o,o,B.ah),o),o,o,o,B.JS,B.cX,o,new A.b5(k,B.W),o)}}
C.ZQ.prototype={
S(){return new C.brw()}}
C.brw.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,B.b_,B.aL),v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=r?B.dR:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aO:B.aG,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.j7:B.iA
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bl(s,new A.b1(4,A.m(12),B.da),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eUQ(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a6,s,B.am,s,s,s,s)
u=A.D(A.dU(B.dd,new C.eUR(d),s),1)
r=A.bk(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ev(s,q,new A.C(B.zI,A.u(A.a([o,B.ay,v,B.aN,A.B(A.a([u,B.av,A.D(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eUS(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cX,s,new A.b5(p,B.W),s)}}
C.a92.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.E5.prototype={
S(){return new C.bru(null,null)}}
C.bru.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bcR,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.br9()},
gbsv(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bR,B.aW],x.O)
case 2:return A.a([B.bq,B.aS,B.aW],x.O)
case 3:return A.a([B.b4,B.c9,B.ju],x.O)
case 4:return A.a([B.hS,B.bR,B.eY],x.O)
case 0:return A.a([B.aS,B.bR,B.aW],x.O)}},
B(d){var w=A.L(d),v=this.d
v===$&&A.c()
return new A.en(A.c4(v,new C.eUO(this,new C.t4(w.ax.a===B.H)),null),null)}}
C.aud.prototype={
S(){return new C.brv(null,null)}}
C.brv.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mu,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bra()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eUP(this),null)}}
C.brt.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.c_(new A.af(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b3(w,w))
u=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
u.N(new A.j3(v))
w=A.U()
w.b=B.ak
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gt(0)
d.bj(v,w)
w=A.U()
w.b=B.ak
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gt(0)
d.b4(u,w)
w=A.zZ(u)
t=A.a([],x.f5)
w=new A.xQ(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jH('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FR(w,r)
w.lc()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNf(d,q,r,o,0,0.2,4.2,0.92)
p.aNf(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNf(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.J(g+h,1)*f,s=A.hc9(e.a.a,e,t,t+f*i,!0),r=A.bxg(s.gbM().a.getBounds())
$.a1()
w=A.U()
w.b=B.ak
w.c=j
w.d=B.bZ
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a1,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Fh,null).aC(0,r))
d.b4(s,w)},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aK7.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.aK8.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.t4.prototype={}
C.apy.prototype={
S(){return new C.aBF()},
gdS(){return this.c}}
C.aBF.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adO()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Jv(w,v)
this.a2()},
adO(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxn(t.c,t.d.a),$async$adO)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.euc(u,s))
return A.h(null,v)}})
return A.i($async$adO,v)},
Oa(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.eu3(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Jv(t,s),$async$Oa)
case 2:if(u.c!=null)u.n(new C.eu4(u))
return A.h(null,v)}})
return A.i($async$Oa,v)},
OG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.L(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.eua(t,new C.t4(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OG)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a6a(q),$async$OG)
case 6:case 5:t.n(new C.eub(t,r))
w=7
return A.b(t.Oa(),$async$OG)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OG,v)},
TF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hOd(r),$async$TF)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.etZ(t,new C.qn(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Oa(),$async$TF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TF,v)},
c5Z(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h4e(t,new C.eu2(u),w,v)},
a88(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c1(new A.ax(v,2.5,B.r,-1),B.W,B.W,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aPh,w,w,B.n),w,22,w,w,w,w,w,22)},
a7e(d){return this.bE3(d)},
bE3(d){var w=0,v=A.j(x.H),u=this
var $async$a7e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.eu1(u,d))
w=2
return A.b(u.Oa(),$async$a7e)
case 2:return A.h(null,v)}})
return A.i($async$a7e,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.L(a2).ax.a===B.H,e=f?B.bV:B.iR,d=A.m(8),a0=A.V(N.Wx,f?B.bm:B.bv,g,g,g,16),a1=x.p
a0=A.aH(!1,d,!0,new A.C(B.DI,A.B(A.a([a0,B.bo,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,B.a0,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eud(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.V,g,B.aX,B.q,A.a([A.bv(A.m(22),C.aMO(!0,A.m(22),1/0,B.p0,g,d,1/0),B.ap),A.an(10,A.dk(D.bwG,D.f1t,h.gaX4(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.G,B.aS.j(f?0.5:0.38),B.eI,22),new A.aa(-4,B.G,B.bR.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.am(B.V,g,B.aX,B.q,A.a([C.aMO(!0,A.m(16),1/0,B.KB,g,r.c,1/0),A.bQ(g,new A.o(g,g,g,g,g,new A.a8(B.b3,B.bb,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.b7),A.an(g,h.a88(!0),g,g,8,g,8,g),A.an(g,A.coh(h.a88(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.coh(h.a88(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.coh(h.a88(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dk(D.bsJ,D.eWI,h.gaX4(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bEq,B.n),g,g,g,g,B.lT,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZ6,B.n8,B.fQ],u):A.a([B.aW,B.aS,B.bR],u)
t=x.V
s=A.a([new A.aa(0,B.G,B.aS.j(f?0.45:0.35),B.eI,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jE,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h0,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.byQ(h.d.gw2(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cp,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.j8.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.b4.j(0.28),B.cG,14)],t)
j=B.b4.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.am(B.V,g,B.a9,B.q,A.a([p,new A.C(D.bhs,A.B(A.a([o,B.av,A.aD(!1,B.X,!0,g,A.aH(!1,n,!0,A.eq(new A.C(Ac.V2,A.u(A.a([A.p(g,D.ahX,B.h,g,g,new A.o(j,g,A.H(B.b4.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.fW,D.eMK],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc5Y(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fM(1.7777777777777777,d,g),B.aN,w,B.P,u,B.bs,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dk(Ae.Yj,D.eKM,h.gbsY(),A.bk(B.aS,g,g,g,B.c,g,B.iE,g,new A.b5(A.m(12),B.W),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ab],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dT:B.cg,B.r,1)
t=A.V(B.WS,f?B.bm:B.bv,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.ue,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eue(h,new C.t4(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zu,A.as(A.mi(g,f?B.bm:B.bv,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cf(g,e,A.br(!0,A.u(A.a([new A.C(B.zA,a0,g),A.D(A.cg(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wt,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bwq(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.aa(0,B.G,B.w.j(r?0.35:0.08),B.cG,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aRY,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hK:B.fS,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.Z,u,u,u,A.l(u,u,r?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcJL()
v=A.zy(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,B.a0,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b5,B.R,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.byQ(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a8(B.a1,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.KL(A.B(A.a([m,A.D(new A.C(B.ach,A.B(A.a([l,B.ba,t,B.aa,k,A.aF(u,u,u,u,A.V(B.cu,(r?B.bm:B.bv).j(0.75),u,u,u,20),u,u,u,new C.eu_(this,d),u,u,u,u,u,B.c6)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ad,u,B.e,B.j,0,u,u),u),B.ap),B.h,u,D.aQR,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d7,u,u,u,u)}}
C.ab2.prototype={
D7(d){return this.bFl(d)},
bFl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oA(d,o,!1),$async$D7)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
w=4
return A.b(A.bK(A6.zs,null,x.H),$async$D7)
case 4:s=t.d
w=5
return A.b(C.fol(!0,o,s),$async$D7)
case 5:r=f
q=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.EW(r,"ngmy_project_"+A.aI(s.b,q,"_"),!1),$async$D7)
case 6:p=f
w=7
return A.b(A.oz(o,!1),$async$D7)
case 7:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$D7,v)},
XY(d){return this.clC(d)},
clC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$XY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oA(d,s,!1),$async$XY)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
A.hk(d,new C.aps(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oz(s,!1),$async$XY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XY,v)},
Ob(d){return this.chQ(d)},
chQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ob=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(A.hk(d,D.aAo,!0,"NgmyWorksheetProjectScan",x.N),$async$Ob)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.byR(s),$async$Ob)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.F(x.q).f.P(D.esE)
w=1
break}q=C.fIe(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Ob)
case 5:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ob,v)},
XZ(d){return this.cti(d)},
cti(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(C.byo(),$async$XZ)
case 3:s=f
if(s==null){w=1
break}r=C.fIe(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$XZ)
case 4:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XZ,v)},
B(d){var w=this,v=null,u=A.L(d).ax.a===B.H,t=new C.t4(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.aa(0,B.G,B.w.j(u?0.35:0.08),B.kG,36)],x.V),o=x.p
return A.br(!0,new A.C(B.ub,A.p(v,A.u(A.a([w.ckf(d,t,s),new A.C(D.bgR,A.u(A.a([w.b__(t,"QR restore"),B.T,A.B(A.a([w.aV8(t,!0,B.j0,B.b4,B.b4,new C.eug(w,d),"Show to scan","QR code"),B.av,w.atV(t,B.iH,B.b0,B.bE,new C.euh(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d1,w.b__(t,"Backup files"),B.T,A.B(A.a([w.atV(t,B.hh,B.aS,B.bR,new C.eui(w,d),"Full copy","Backup file"),B.av,w.atV(t,M.x8,B.aZ,B.aM,new C.euj(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
ckf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eO,B.cW,B.ff],k):A.a([B.aW,B.aS,B.bR],k)
w=A.an(l,A.V(B.rZ,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kr,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.G,B.w.j(0.2),B.cG,12)],x.V)
r=this.d
s=A.p(l,C.aMO(!0,A.m(13),64,D.bo0,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.Z,l,l,l,D.aKa,l,l,l)
r=C.byQ(r.gw2(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.V,l,B.a9,B.q,A.a([w,new A.C(D.bhe,A.u(A.a([v,A.B(A.a([s,B.en,A.D(A.u(A.a([u,B.au,t,B.P,A.B(A.a([r,B.aa,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fw,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.euf(d),l,l,l,A.ok(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aHy,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b__(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.aa,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aV8(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ab1:B.aO
if(e)w=B.b4.j(o?0.45:0.35)
else{w=o?B.dT:B.cg
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.G,B.b4.j(0.12),B.cG,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.eq(new A.C(E.V3,A.u(A.a([t,B.ab,u,B.by,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,B.cp,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
atV(d,e,f,g,h,i,j){return this.aV8(d,!1,e,f,g,h,i,j)}}
C.aps.prototype={
S(){return new C.bh_()}}
C.bh_.prototype={
Z(){this.a0()
this.abI()},
abI(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.byS(p.c,p.d),$async$abI)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.etU(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.etV(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.L(d).ax.a===B.H,f=g?B.z1:B.iR,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.et,g?B.aj:B.al,h,h,h,18),h,h,h,new C.etW(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.y9],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eO,B.cW,B.ff],s):A.a([B.aW,B.aS,B.bR],s)
r=x.V
q=A.a([new A.aa(0,B.G,B.aS.j(g?0.4:0.3),B.eI,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.byQ(p.gw2(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.B(A.a([p,B.aa,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fw,h,h,h)],u),B.m,h,B.b5,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Vp,h,h,1/0)
t=g?D.b6c:B.c
q=A.m(24)
p=A.H(w?B.b4.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.G,B.w.j(g?0.25:0.06),B.dl,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3J,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dLH)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pi(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c1,h,h,h))}}o.push(B.aN)
n=w?B.b4:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.b4:B.aS).j(0.35),B.r,1)
k=w?B.KS:B.Lj
k=A.V(k,w?B.b4:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.av,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.aj:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a0,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iE,h,h,h))
return A.cf(h,f,A.br(!0,A.u(A.a([new A.C(A3.K4,e,h),A.D(A.cg(A.u(A.a([s,B.aN,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rG,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adp,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.apx.prototype={
S(){return new C.aBE(A.y8(B.Jn,B.n2,B.t2))}}
C.aBE.prototype={
p(){this.d.p()
this.a2()},
aHZ(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iC(w,d)},
c1T(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hMk(t)
if(s!=null){this.aHZ(s)
return}r=C.fWt(t)
if(r!=null)q=A.dj(r,p,0)
else q=!1
if(q){this.aHZ(B.a.i(B.a.aV(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eA(A.a([A.aF(t,t,t,t,A.V(u.f?B.rR:A0.KY,t,t,t,t,t),t,t,t,new C.etY(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.z1,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.eWC,t,t,t,1,t,!0),q=A.y7(u.d,B.bN,u.gc1S()),p=A.m(28)
p=A.as(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.aa(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cf(r,B.w,new A.am(B.V,t,B.aX,B.q,A.a([q,p,A.an(32,A.p(t,D.eVt,B.h,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iF,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGo.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Md.prototype={
S(){return new C.aBG(D.a5H,A.a([],x.D))},
bl(){return this.r.$0()},
gdS(){return this.c}}
C.aBG.prototype={
gcrm(){return J.bzY(this.e,0,new C.euG())},
Z(){this.a0()
$.aS.c_$.push(this)
this.uO()},
p(){$.aS.hE(this)
this.a2()},
iO(d){if(d===B.fo)this.uO()},
uO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BB(q.a.c).cJ(0,B.kq),$async$uO)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.euC(q,p))
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
if(q.c!=null&&q.f)q.n(new C.euD(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uO,v)},
Gw(d){return this.bCe(d)},
bCd(){return this.Gw(null)},
bCe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hOf(l,d),$async$Gw)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l1(l,r,q,D.cOy,new A.O(Date.now(),0,!1))
w=4
return A.b(C.Jv(t.a.c,p),$async$Gw)
case 4:o=f
w=5
return A.b(t.uO(),$async$Gw)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.F(x.q).f.P(D.epP)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.F(q).f.P(D.ery)
else n.F(q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Db(m)
case 1:return A.h(u,v)}})
return A.i($async$Gw,v)},
Db(d){return this.c5K(d)},
c5K(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Db=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hk(s,new C.apy(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Db)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Jv(u.a.c,t),$async$Db)
case 5:case 4:w=6
return A.b(u.uO(),$async$Db)
case 6:return A.h(null,v)}})
return A.i($async$Db,v)},
uC(d){return this.bRD(d)},
bRD(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.byo(),$async$uC)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hk(r,D.aAo,!0,"NgmyWorksheetProjectScan",x.N),$async$uC)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.byR(q),$async$uC)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.F(x.q).f
r.P(A.b_(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fIe(s)
w=15
return A.b(C.Jv(t.a.c,p),$async$uC)
case 15:o=f
w=16
return A.b(t.uO(),$async$uC)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.F(x.q).f.P(D.erD)
w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Db(p)
case 1:return A.h(u,v)}})
return A.i($async$uC,v)},
M6(d){return this.bAV(d)},
bAV(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$M6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.eun(d),s,null,!0,!0,x.y),$async$M6)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ob(t.a.c,A.a([],x.D)),$async$M6)
case 6:w=7
return A.b(t.uO(),$async$M6)
case 7:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.epU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$M6,v)},
c5X(d){var w=this.c
w.toString
A.c0(B.K,null,new C.euw(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b_B(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.j7
else w=B.c
v=A.m(16)
u=A.H(p?B.dT:B.cg,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.p(r,A.u(A.a([s,B.ab,t,B.by,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ua,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
Yr(d,e){return this.c5L(d,e)},
c5L(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(B.K,null,new C.eur(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Yr)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h4e(r,new C.eus(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.M8(d,e),$async$Yr)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Yr,v)},
aXG(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aH
else t=h.a?B.aO:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.X,!0,u,A.aH(!1,u,!0,new A.C(B.zF,A.B(A.a([s,B.ba,t,A.V(B.ek,w?B.bm:B.bv,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
ccp(d,e,f,g,h,i){return this.aXG(!1,d,e,f,g,h,i)},
M8(d,e){return this.bB4(d,e)},
bB4(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$M8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kN(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$M8)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bxa(t.a.c,d.a),$async$M8)
case 6:w=7
return A.b(t.uO(),$async$M8)
case 7:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$M8,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=new C.t4(o),m=o?B.bV:B.iR
if(q.f)o=D.aXd
else{w=q.bvG(n)
v=q.bQL(n)
u=q.gbsS()
if(o)t=B.j7
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ab,v,B.aN,new C.E5(A.p(p,A.B(A.a([q.axl(P.KA,"Projects",n,D.a5H),q.axl(B.ul,"Cashier",n,D.aNm),q.axl(B.E1,"Family Tree",n,D.fhu)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ef,0.95,u,p),B.bs],r)
w=q.d
if(w===D.a5H){w=J.a9(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aO:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.aud(q.gaM6(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.ccr(n)],r))}else{o=q.a
if(w===D.aNm)u.push(new C.alE(o.c,n,p))
else{w=q.r
u.push(new C.amK(o.c,o.d,o.e,o.f,new C.euJ(q),new C.euK(q),new A.cv(w,x.b4)))}}o=A.cg(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A8.JZ,p,p,B.ah)}return A.cf(p,m,A.br(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bvG(d){var w=null,v=A.m(8),u=d.a,t=A.V(N.Wx,u?B.bm:B.bv,w,w,w,16)
return A.aH(!1,v,!0,new A.C(B.ll,A.B(A.a([t,B.bo,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euk(this),w,w,w,w,w,w,w)},
gbsS(){switch(this.d.a){case 0:return D.a5_
case 1:return D.f8Z
case 2:return D.a50}},
bQL(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.G,B.aS.j(0.35),B.cv,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.byp,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.ba,D.blk,A.aD(!1,B.X,!0,w,A.aH(!1,A.m(12),!0,A.p(w,D.bw_,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euo(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.E5(A.p(w,A.u(A.a([new A.C(E.V9,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.zy(this.gcrm()),w,w,w,w,w,w,D.eHr,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u9,B.iF,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.f8Y,w)},
axl(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.aa(0.5,B.G,B.aS.j(0.42),B.cG,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bm:B.bv
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bm:B.bv
return A.D(A.aD(!1,B.X,!0,u,A.aH(!1,s,!0,A.dg(u,A.B(A.a([w,B.eA,new A.dl(1,B.cj,A.d(e,u,1,B.Z,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b5,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.id,u,u,u,B.K1,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.euF(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),1)},
ccr(d){var w,v,u,t,s,r,q=this,p=null
if(J.ci(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bw4,B.h,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.G,B.aS.j(0.5),B.eI,28)],x.V),D.bGD,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.E5(A.p(p,A.u(A.a([t,B.d1,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.B(A.a([A.D(q.aNA(B.iH,"Scan QR",new C.euz(q),d),1),B.av,A.D(q.aNA(M.x8,"Upload file",new C.euA(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bH(D.f4Q,q.gaM6(),A.bk(B.aS,p,p,p,B.c,B.fL,p,p,new A.b5(A.m(12),B.W),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bii,1.05,D.a5_,p)}w=J.b4(q.e,new C.euB(q,d),x.l)
w=A.A(w,w.$ti.k("ai.E"))
return new C.E5(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a5_,p)},
aNA(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.X,!0,u,A.aH(!1,t,!0,A.p(w,A.u(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eFT,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.aca,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)},
ccq(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.a([new A.aa(0,B.G,B.w.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bm:B.bv
n=A.bv(B.a6j,new A.fM(1.7777777777777777,C.aMO(!0,B.fe,1/0,P.KA,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.zy(d.gw2()),u,u,u,u,u,u,D.eE4,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.X,!0,u,A.aH(!1,o,!0,A.u(A.a([n,new A.C(B.bA,A.B(A.a([v,A.aF(u,u,u,u,A.V(A9.Lb,t?B.bm:B.bv,u,u,u,u),u,u,u,new C.eux(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.euy(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.dZ,u,u,u,1/0)}}
C.btg.prototype={}
C.qn.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcJL(){var w,v,u,t,s=this.c
if(s===B.k.lp(s))w=B.o.u(B.k.L(s))
else{v=B.k.ab(s,2)
u=A.ad("\\.?0+$",!0,!1,!1,!1)
w=A.aI(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l1.prototype={
gw2(){return B.d.cI(this.d,0,new C.cqb())},
ad(){var w=this,v=w.d,u=A.T(v).k("J<1,a0<n,@>>")
v=A.A(new A.J(v,new C.cqa(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.aa()],x.N,x.z)},
b6v(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l1(w.a,w.b,v,u,w.e)},
b6c(d){return this.b6v(d,null)},
QP(d){return this.b6v(null,d)}}
C.G_.prototype={
a3(){return"FamilyGender."+this.b}}
C.hO.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h05(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
azU(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hO(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ai_.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kl.prototype={
galm(){var w=this.f
return new A.a5(w,new C.bIO(),A.T(w).k("a5<1>")).gH(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("J<1,a0<n,@>>")
v=A.A(new A.J(v,new C.bIN(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.aa(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hEU(w.y)],x.N,x.z)},
xE(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kl(w.a,v,u,t,s,r,w.r,q,p,o)},
b6u(d,e){var w=null
return this.xE(w,w,d,e,w,w,w,w)},
czR(d,e,f,g,h,i,j){return this.xE(d,e,f,g,h,i,j,null)},
azZ(d,e){var w=null
return this.xE(w,w,w,d,w,w,e,w)},
cyl(d){var w=null
return this.xE(w,w,w,w,w,w,d,w)},
cyJ(d){var w=null
return this.xE(w,w,w,w,w,w,w,d)},
azL(d){var w=null
return this.xE(w,w,w,w,d,w,w,w)},
czn(d,e,f){var w=null
return this.xE(w,d,w,e,w,w,f,w)},
cy8(d){var w=null
return this.xE(w,w,d,w,w,w,w,w)},
cyW(d,e){var w=null
return this.xE(d,w,w,w,w,e,w,w)}}
C.cqc.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cqd.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDH.prototype={}
C.b4P.prototype={
bH(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b4P()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aV(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b4O.prototype={
gvn(){return!0},
gED(){return this.z.b<this.b.length},
aP9(d){switch(0){case 0:return d.a.c}},
aOR(d){switch(0){case 0:return d.a.d}},
bKi(d,e){switch(0){case 0:return new A.hx(d,e)}},
bJH(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fR(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.ir(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FL(b4)
switch(0){case 0:v=b5.b
u=new A.ki(0,v,0,1/0)
t=w===B.Qp
break}s=A.a([],x.gZ)
r=A.S(x.cM,x.S)
for(b3=b1.z,q=B.d.fT(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fR(b4,u,!0)
f=b1.aP9(g)
f.toString
e=b1.aOR(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDH(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDH(k,j,i))}d=s.length
switch(0){case 0:q=b5.cp(new A.hx(m,l))
a0=q.a
a1=q.b
b1.a=new A.ir(0,0,a0,a1)
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
for(q=B.d.fT(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aP9(g)
e=b1.aOR(g)
e.toString
a9=b1.bJH(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bKi(a6,a3+a9)
b0=g.a
g.a=new A.ir(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fN(d){var w,v,u,t,s,r=this
r.kJ(d)
w=d.b
w.hR()
v=A.de()
u=r.a
v.dY(u.a,u.b,0,1)
w.od(0,v)
for(u=r.z,u=B.d.dA(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fN(d)
w.mJ(0)},
F8(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hR(){return this.z}}
C.brx.prototype={}
var z=a.updateTypes(["au<~>()","R(hO)","R(kl)","~()","R(mM)","a0<n,@>(kl)","I(kl,kl)","n(hO)","kl(a0<@,@>)","R(l1)","R(tA)","mM(a0<@,@>)","tA()","I(l1,l1)","hO(a0<@,@>)","a0<n,@>(hO)","R(qn)","au<~>(l1)","ep<n?>(hO)","I(hO,hO)","n?(hO)","a0<n,@>(mM)","XM(X)","n(n)","aaI(X)","r(nO)","I(mM,mM)","hO(hO)","cE(bq<n,Eh>)","cE(Il)","~(hO)","I?(hO)","hO()","ak<hO>()","R(tz)","R(Il)","C(hO)","~(G_)","R(acd)","r(G_,n,a_)","Xa(X)","bq<n,ak<a0<n,@>>>(n,ak<mM>)","~(I)","+count,id,name(I,n,n)(kl)","kl(kl)","Y6(X)","Y7(X)","R(lh)","lh()","n(kl)","ZQ(X)","WL(X)","WK(X)","X8(X)","Xc(X)","r(qn)","ab2(X)","~(lE)","au<~>([n?])","Q(Q,l1)","r(l1)","Q(Q,qn)","a0<n,@>(qn)","qn(a0<@,@>)","WJ(X)","QJ(X)","co(FZ)","l1(a0<@,@>)","tz()","n(l1)","a0<n,@>(l1)","n(O)","I(hO)","kl(a0<n,@>)","Wh(X)"])
C.fh1.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.fh0.prototype={
bfd(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qg(s,d,B.h5,E.Dp),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.P(r!=null&&A.Jj(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bfd(d)},
$S:325}
C.fh2.prototype={
$1(d){return d.b},
$S:116}
C.fpV.prototype={
$1(d){var w=null
return A.ev(w,B.K,new F.Ny(this.a,this.b,w),w,w,0,B.V4,B.cX,w,w,w)},
$S:46}
C.f7l.prototype={
$1(d){return d!=null},
$S:217}
C.f7m.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:217}
C.f7r.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:170}
C.feL.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f_(d,w,w,w,A.fW(w,B.qF,w,w,w,w,w,w,w,B.dk,w,w,10.5,w,B.eb,w,!0,w,w,w,w),w),u=f?B.eb:B.ug
return new A.ni(D.bdV,A.a7k(A.a([new A.fF(130,w,v),new A.xS(1,B.DV,A.f_(e,w,w,w,A.fW(w,g==null?D.dMX:g,w,w,w,w,w,w,w,B.dk,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.w7,B.l2))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1867}
C.feK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uG(999)
f=A.w8(A.lc(h,A.f_("Cashier",h,h,h,A.fW(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,10,h,B.eb,h,!0,h,h,h,h),h),h,new A.kj(D.dMO,h,f,B.hk,h),h,h,D.bel,h))
w=A.w8(A.f_("Debt receipt",h,h,h,A.fW(h,h,h,h,h,h,h,h,h,B.dk,h,h,22,h,B.eb,h,!0,h,h,h,h),h))
v=A.w8(A.f_(C.vS(new A.O(Date.now(),0,!1),!0),h,h,h,D.a3S,h))
u=A.uG(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f_(s,h,h,h,A.fW(h,h,h,h,h,h,h,h,h,B.dk,h,h,14,h,B.eb,h,!0,h,h,h,h),h)
r=A.f_("Person who owes",h,h,h,D.a3S,h)
q=A.uG(10)
p=x.C
u=A.lc(h,A.xN(A.a([s,new A.fF(h,2,h),r,new A.fF(h,10,h),A.lc(h,A.xN(A.a([A.f_("Amount owed",h,h,h,D.a3S,h),new A.fF(h,2,h),A.f_(A.zy(t.c),h,h,h,A.fW(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,20,h,B.eb,h,!0,h,h,h,h),h)],p),B.q8,B.l2),h,new A.kj(B.oi,h,q,B.hk,h),h,h,D.bdC,1/0)],p),B.q8,B.l2),h,new A.kj(E.aBk,h,u,B.hk,h),h,h,D.bfp,1/0)
q=new A.n1(D.dMR,0.9,B.ki)
r=A.uG(12)
s=i.c
o=s.$2("Original due",C.vS(t.r,!1))
n=s.$2("Current due",C.vS(t.f,!1))
m=i.d
l=new A.n1(m,1.1,B.ki)
k=A.uG(8)
j=i.a
k=A.a([o,n,new A.fF(h,6,h),A.lc(h,A.w8(A.f_(t.gaGv(),h,h,h,A.fW(h,m,h,h,h,h,h,h,h,B.dk,h,h,11,h,B.eb,h,!0,0.5,h,h,h),h)),h,new A.kj(h,new A.p_(l,l,l,l),k,B.hk,h),h,h,D.beu,1/0),new A.fF(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.xY))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.xY))
else{n=A.f_("Missed days ("+n+")",h,h,h,A.fW(h,B.qF,h,h,h,h,h,h,h,B.dk,h,h,10.5,h,B.eb,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Qj>")
o=A.A(new A.J(o,new C.feJ(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fF(h,4,h),n,new A.fF(h,6,h),new C.b4O(5,5,new C.b4P(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fF(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fF(h,8,h),w,new A.fF(h,3,h),v,new A.fF(h,16,h),u,new A.fF(h,10,h),A.lc(h,A.xN(k,B.w7,B.l2),h,new A.kj(h,new A.p_(q,q,q,q),r,B.hk,h),h,h,B.acl,1/0)],p)
w=j.a
if(w!=null){v=new A.n1(B.Gn,1,B.ki)
B.d.v(f,A.a([new A.fF(h,16,h),A.f_("Debtor signature",h,h,h,A.fW(h,B.qF,h,h,h,h,h,h,h,B.dk,h,h,10,h,B.eb,h,!0,h,h,h,h),h),new A.fF(h,6,h),A.lc(h,new A.Ge(w,B.Sr,h,h),h,new A.kj(h,new A.p_(v,v,v,v),A.uG(6),B.hk,h),82,h,B.K3,1/0)],p))}f.push(new A.fF(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f_(w,h,h,h,D.exk,h))
f.push(new A.fF(h,18,h))
f.push(A.w8(A.f_("NGMY.ORG",h,h,h,A.fW(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,14,h,B.eb,h,!0,1.8,h,h,h),h)))
return f},
$S:398}
C.feJ.prototype={
$1(d){var w=null,v=new A.n1(D.Go,0.7,B.ki),u=A.uG(999)
return A.lc(w,A.f_(C.vS(d,!1),w,w,w,A.fW(w,D.Go,w,w,w,w,w,w,w,B.dk,w,w,9.5,w,B.eb,w,!0,w,w,w,w),w),w,new A.kj(w,new A.p_(v,v,v,v),u,B.hk,w),w,w,D.bjC,w)},
$S:1868}
C.bXk.prototype={
$1(d){var w=null,v=B.bS.j(0.08),u=A.m(999),t=A.H(B.bS.j(0.28),B.r,1)
return A.p(w,A.d(C.vS(d,!1),w,w,w,w,w,w,D.eDA,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.es,w,w,w)},
$S:1869}
C.fqq.prototype={
$1(d){var w=null,v=A.aG(d,B.bO,x.w).w,u=A.m(26),t=A.aF(w,w,w,w,B.aig,w,w,w,new C.fqn(d),w,w,w,w,w,B.c6),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ev(w,B.K,new A.cZ(new A.aW(0,380,0,v.a.b*0.9),A.aD(!1,B.X,!0,u,new A.C(B.UV,A.u(A.a([new A.bF(B.a7,w,w,t,w),new A.dl(1,B.cj,A.cg(A.u(A.a([new A.en(new C.aV0(r,w),s),B.T,A.B(A.a([A.D(A.ey(B.xj,D.f1p,new C.fqo(s,r,d),A.d9(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eU,w,new A.b5(A.m(14),B.W),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.D(A.dk(B.Y9,D.eZj,new C.fqp(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eU,w,new A.b5(A.m(14),B.W),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aG,0,w,w,w,w,w,B.ac),w),w,w,0,Ad.Vi,B.cX,w,w,w)},
$S:46}
C.fqn.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fqo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.ae$.x.h(0,t.a)
m=m==null?null:m.gb3()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fI),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f1(B.dz.gaL(s))
m=t.b
q=B.a.i(m.b)
p=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aI(q,p,"_")
if(o.length>32)o=B.a.al(o,0,32)
w=5
return A.b(A.rf(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.flj(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.F(x.q).f
s.P(A.b_(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqi.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ev(w,B.aG,A.u(A.a([new A.C(D.bfd,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.mT,w,w,w),1),A.aF(w,w,w,w,B.l0,w,w,w,new C.fqg(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dl(1,B.cj,new A.C(B.ii,A.bv(A.m(14),A.fC(t,B.B,w,w,B.ci,B.dn,!1,w,!1,w,w),B.ap),w),w),new A.C(B.JI,new A.a3(1/0,w,A.dk(B.ob,D.aKz,new C.fqh(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.JT,B.cX,w,new A.b5(v,B.W),w)},
$S:46}
C.fqg.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fqh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rf(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqu.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ev(w,B.aG,new A.C(D.bfl,A.u(A.a([A.B(A.a([D.bky,A.aF(w,w,w,w,B.l0,w,w,w,new C.fqs(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.en(A.bv(A.m(14),A.p(w,A.b2(w,w,w,new C.b6X(s.ax,w),B.as),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ab,new A.a3(1/0,w,A.dk(B.ob,D.aKz,new C.fqt(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cX,w,new A.b5(v,B.W),w)},
$S:46}
C.fqs.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fqt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.ae$.x.h(0,t.a)
n=n==null?null:n.gb3()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fI),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aI(r,q,"_")
if(p.length>32)p=B.a.al(p,0,32)
r=J.f1(B.dz.gaL(s))
w=5
return A.b(A.rf(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fa5.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dy0.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dxM.prototype={
ber(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c0(t,null,new C.dxP(s,q,e),p,!0,!0,!1,B.GE,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dxQ(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.ber(d,e)},
$S:1870}
C.dxP.prototype={
$1(d){var w,v=null,u=this.c===B.uR,t=u?D.cTU:D.cQx
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aO:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.br(!0,new A.C(K.acU,A.u(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab,A.ig(!0,v,v,B.z,L.aHQ,new C.dxO(this.a,w,t,d),t.length,v,B.dJ,B.ah,!0)],x.p),B.ad,v,B.e,B.R,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:34}
C.dxO.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.M:B.aO
v=A.m(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bm:B.bv).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aH(!1,p,!0,A.p(B.B,C.aV_(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dxN(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dxN.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.dxQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dxK.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dxL.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cF(B.co,e,v)
return new A.d_(e,!1,A.iF(B.B,A.as(A.aD(!1,B.X,!0,v,new A.ed(new C.dxJ(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bc(t,new A.bm(0.96,1,u),u.k("bc<bC.T>"))),v)},
$S:32}
C.dxJ.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bO,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bm:B.bv).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aH(!1,v,!0,new A.C(B.ef,A.V(B.cu,i.a.d.a?B.bm:B.bv,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dxu(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aO6("Name")
r=l.a
q=r.d==null?k:new C.dxv(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lN
n=A.H(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6n(new A.C(B.hd,A.aH(!1,p,!0,A.p(B.B,C.aV_(m==null?"\ud83d\udc64":A.ffz(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.af,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.kc,k,B.a3A,k,k)
v=A.a([v,B.ab,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aOH("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dxw(r,a0),r.d===B.uR),1),B.aa,A.D(i.aOH("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dxB(r,a0),r.d===B.a0A),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bF(B.a1,k,k,A.hf(D.bxI,D.f_X,new C.dxC(r,l.e,a0),A.fo(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c6)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tC(A.ad("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aO7("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.af,k,k,s,k,k,B.dX,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aO
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bm:B.bv).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vS(r.a,!1)
v.push(A.aD(!1,B.X,!0,q,A.aH(!1,p,!0,A.p(k,A.B(A.a([A.D(A.u(A.a([t,B.by,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.buC],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dxD(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aO6("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.af,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.am,k,k,k,k))
v.push(B.ab)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aW5(r.b.length!==0,B.lV,new C.dxE(r,i,a0),new C.dxF(r,a0),"Upload from gallery","ID photo"))
v.push(i.aW5(r.c.length!==0,D.bnZ,new C.dxG(r,i,d,a0),new C.dxH(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a5i("Signature (optional)",t,new C.dxI(a0),new C.dxx(a0,t),new C.dxy(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bm:B.bv
s=(i?B.bm:B.bv).j(0.28)
s=A.D(A.dU(E.aKt,new C.dxz(d),A.d9(k,k,k,k,k,k,k,k,k,t,k,k,B.wi,k,new A.b5(A.m(10),B.W),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cW,k,k,k,B.c,k,B.wi,k,new A.b5(A.m(10),B.W),k,k,k)
v.push(A.B(A.a([s,B.aa,A.D(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ty,k,k,k),new C.dxA(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cg(A.u(v,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),B.h,k,new A.aW(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uc,B.iF,k,k,360)},
$S:158}
C.dxu.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxv.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dxw.prototype={
$0(){return this.b.$1(new C.dxt(this.a))},
$S:0}
C.dxt.prototype={
$0(){var w=this.a
w.d=B.uR
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dxB.prototype={
$0(){return this.b.$1(new C.dxs(this.a))},
$S:0}
C.dxs.prototype={
$0(){var w=this.a
w.d=B.a0A
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dxC.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dxD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xE(null,u.b,A.bT(2020,1,1,0,0,0,0,0),null,s,A.bT(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dxr(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxr.prototype={
$0(){var w=this.b
return this.a.a=A.bT(w.gcd(),w.gcb(),w.gcq(),0,0,0,0,0)},
$S:0}
C.dxE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NC(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dxq(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxq.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dxF.prototype={
$0(){return this.b.$1(new C.dxp(this.a))},
$S:0}
C.dxp.prototype={
$0(){return this.a.b=""},
$S:0}
C.dxG.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c0(q,null,new C.dxn(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NC(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dxo(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxn.prototype={
$1(d){var w=null
return A.br(!0,A.u(A.a([A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahO,w,w,w,w,new C.dxh(d),!1,w,w,w,w,w,w,w,D.eSc,w,w,w),A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahM,w,w,w,w,new C.dxi(d),!1,w,w,w,w,w,w,w,D.eYq,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:34}
C.dxh.prototype={
$0(){A.a7(this.a,!1).K("camera")
return null},
$S:0}
C.dxi.prototype={
$0(){A.a7(this.a,!1).K("gallery")
return null},
$S:0}
C.dxo.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dxH.prototype={
$0(){return this.b.$1(new C.dxm(this.a))},
$S:0}
C.dxm.prototype={
$0(){return this.a.c=""},
$S:0}
C.dxI.prototype={
$0(){return this.a.$1(new C.dxl())},
$S:0}
C.dxl.prototype={
$0(){},
$S:0}
C.dxx.prototype={
$0(){return this.a.$1(new C.dxk(this.b))},
$S:0}
C.dxk.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dxy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.af5(u.a,null,null,new C.dxj(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxj.prototype={
$4(d,e,f,g){this.a.$1(new C.dxg(this.b,d))},
$S:447}
C.dxg.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dxz.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxA.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.F(x.q).f.P(D.etu)
return}if(w.a.d==null){w.c.F(x.q).f.P(D.eqq)
return}A.a7(w.c,!1).K(!0)},
$S:0}
C.dy3.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dy4.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bv).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zy(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bm:B.bv,r,r,r,r,r,r,r,r,13,r,r,B.a0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y3(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y3(r).length>0?B.bS:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bm:B.bv
t=(q?B.bm:B.bv).j(0.28)
s=x.p
return new A.d_(e,!1,A.as(A.aD(!1,B.X,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dU(B.mW,new C.dy1(d),A.d9(r,r,r,r,r,r,r,r,r,w,r,r,B.jA,r,new A.b5(A.m(10),B.W),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.D(A.bH(D.eYP,new C.dy2(d),A.bk(B.cW,r,r,r,B.c,r,B.jA,r,new A.b5(A.m(10),B.W),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ad,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zK,E.V9,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:32}
C.dy1.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dy2.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dxY.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dxZ(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bv).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.Z,s,s,s,A.l(s,s,r.a.d.a?B.aO:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zy(l.c),s,s,s,s,s,s,D.eF0,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jm((r.a.d.a?B.bm:B.bv).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.WS,"View receipt",new C.dxR(r,d,l))
u=l.x!=null
t=u?B.uA:B.p2
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bfi,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dxS(r,d,l)),q.$3$icon$label$onTap(B.A0,"Edit",new C.dxT(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.lV,"View / download ID",new C.dxU(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bnY,"View / download selfie",new C.dxV(r,d,l)))
if(l.gaBz())p.push(q.$3$icon$label$onTap(A2.Y0,"View / download signature",new C.dxW(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bS,B.e4,"Delete",new C.dxX(r,d,l)))
p.push(B.au)
return A.br(!0,new A.C(B.u9,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:34}
C.dxZ.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aO:B.aG
else w=d
return A.aH(!1,v,!0,new A.C(B.eF,A.B(A.a([A.V(e,w,v,v,v,20),B.ba,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1871}
C.dxR.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fqm(w,this.c)},
$S:0}
C.dxS.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Qb(this.c)},
$S:0}
C.dxT.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.BV(this.c)},
$S:0}
C.dxU.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzd(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dxV.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzd(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dxW.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fqr(w,this.c)},
$S:0}
C.dxX.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Mj(0,this.c)},
$S:0}
C.dy5.prototype={
$1(d){return d.x==null},
$S:261}
C.dy6.prototype={
$1(d){return d.x!=null},
$S:261}
C.dy7.prototype={
$2(d,e){return d+e.c},
$S:1872}
C.dy8.prototype={
$0(){return this.a.btk()},
$S:0}
C.dy_.prototype={
$0(){return this.a.abV(this.b)},
$S:0}
C.fat.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fau.prototype={
$0(){return B.d.gI(D.Zc)},
$S:z+68}
C.cZu.prototype={
$0(){var w=this.a
return w.n(new C.cZs(w,this.b))},
$S:0}
C.cZs.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.cZt.prototype={
$0(){},
$S:0}
C.cZv.prototype={
$0(){var w=this.a.gbRr()
A.a7(this.b,!1).K(w)
return null},
$S:0}
C.fck.prototype={
$1(d){return C.fMd(A.Z(d,x.N,x.z))},
$S:z+11}
C.fcl.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fcm.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+26}
C.fp3.prototype={
$1(d){return d.ad()},
$S:z+21}
C.fwG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.f9X.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bIJ.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eQ(e,v)?v:null},
$S:1873}
C.fpz.prototype={
$1(d){var w=this
return new C.Xa(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d_9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d_8(w,d))},
$S:z+66}
C.d_8.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZY.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cs(u)?v.r>=J.a9(v.d):w)v.r=J.a9(v.d)-1},
$S:0}
C.cZV.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cZw.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cZx.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.cZZ.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cZF.prototype={
$1(d){var w=null,v=A.L(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eo(A.a([A.bG(!1,B.dd,w,w,!0,w,w,new C.cZD(d),w,w),A.bH(B.vd,new C.cZE(d),A.bk(B.ml,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.cZD.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZE.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cZG.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.cZW.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.cZX.prototype={
$0(){return B.d.gI(D.xt)},
$S:z+12}
C.cZB.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxk(0),t=J.a9(w.d)
w=J.a9(w.d)===1?"page":"pages"
return new C.QJ(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.cZC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZH.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WJ(v,u,J.a9(w.d),null)},
$S:z+64}
C.cZI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_7.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aJ(s,new C.Wq(r.y,r.gxk(0),J.a9(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d_5(r),s,s,s,s,s,s,!1,B.ae)
else{w=e-1
v=J.q(r.d,w)
J.a9(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6l(v,e,w,u,t,r.gbIQ(),C.h04(r.y.Q),r.gxk(0),s)
w=t}return A.c4(q,new C.d_6(r,e),new A.C(B.Vb,w,s))},
$S:1874}
C.d_6.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcV(t).ay){t=this.b
u=x.cy.a(B.d.gcV(u.f.f)).gtU(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.de()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fk(v*3.141592653589793*0.5)
return A.fl(B.a1,A.d4(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.d_5.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCC(B.oR,B.ig)},
$S:0}
C.cZS.prototype={
$0(){var w=this.a
return w.n(new C.cZR(w))},
$S:0}
C.cZR.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZT.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).K(null)
return null},
$S:0}
C.cZy.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jt.j(0.5),r=x.p,q=A.a([D.eQV,B.ab],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ci(p.d)?"Write this book":"Write a new book"
q.push(p.WJ(d,B.dO,w,J.ci(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WJ(d,L.afN,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cs(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.jU.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.jU.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WJ(d,Z.agR,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WJ(d,B.p8,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WJ(d,B.p8,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ev(u,E.z9,A.br(!0,new A.C(A1.DB,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.adj,B.cX,u,new A.b5(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.cZU.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.cZL.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cs(w.d)
return new C.Xc(v,J.cs(w.d),w.r+1,null)},
$S:z+54}
C.cZM.prototype={
$1(d){var w=null
return A.nU(!1,A.eo(w,w,w,E.z9,new A.k1(this.a,new C.cZK(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.cZK.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3g,B.nD,A.D(A.d(e,w,w,w,w,w,w,B.it,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.cZN.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZO.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zH(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.PB(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.cZJ(s,t))
w=4
return A.b(s.kp(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_0.prototype={
$1(d){var w=null
return A.nU(!1,A.eo(w,w,w,E.z9,new A.k1(this.a,new C.d__(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.d__.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3g,B.nD,A.D(A.d(e,w,w,w,w,w,w,B.it,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.d_1.prototype={
$0(){return this.a.a=!1},
$S:47}
C.d_2.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.d_3.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.d_4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zH(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kp(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZz.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bbH(B.oR,T.Jw)},
$S:0}
C.cZA.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCC(B.oR,T.Jw)},
$S:0}
C.d0A.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d0B.prototype={
$1(d){var w=this.a
return w.n(new C.d0z(w))},
$S:9}
C.d0z.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d0C.prototype={
$1(d){var w=this.a
return w.n(new C.d0y(w))},
$S:9}
C.d0y.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d0D.prototype={
$1(d){var w=this.a
return w.n(new C.d0x(w))},
$S:9}
C.d0x.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d0E.prototype={
$0(){var w=this.a
return w.n(new C.d0w(w,this.b))},
$S:0}
C.d0w.prototype={
$0(){var w=this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d0F.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_d()
A.a7(this.b,!1).K(new A.bkI(w,v))},
$S:0}
C.d_o.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d_n.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.X8(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d_s.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d_r.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b28(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.d_p(d),v,v),A.bH(B.vd,new C.d_q(d),A.bk(B.ml,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.z9,w,v,v,v,v,D.ePS,v)},
$S:20}
C.d_p.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.d_q.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.d_t.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d_u.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a3(s,t,w[u],t))
return A.cg(A.cb(B.bH,r,B.bw,18,14),B.q,t,B.z,t,D.bge,t,t,B.ah)},
$S:310}
C.d_m.prototype={
$0(){return this.a.Of(0,this.b)},
$S:0}
C.d_l.prototype={
$0(){return this.a.NK(0,this.b)},
$S:0}
C.cyV.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cyW.prototype={
$0(){return B.d.gI(D.xt)},
$S:z+12}
C.cyX.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bV(0,new A.C(d,A.bQ(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.b7),w),0,0,0)},
$S:1876}
C.cSm.prototype={
$1(d){return this.a.n(new C.cSl(this.b,this.c))},
$S:9}
C.cSl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cSL.prototype={
$1(d){return this.a.n(new C.cSy())},
$S:2}
C.cSy.prototype={
$0(){},
$S:0}
C.cSM.prototype={
$1(d){return this.a.n(new C.cSx())},
$S:2}
C.cSx.prototype={
$0(){},
$S:0}
C.cSN.prototype={
$0(){var w=this.a
return w.n(new C.cSw(w,this.b))},
$S:0}
C.cSw.prototype={
$0(){var w=this.a
return w.d=w.gns().Ej(this.b.a)},
$S:0}
C.cSO.prototype={
$0(){var w=this.a
return w.n(new C.cSv(w,this.b))},
$S:0}
C.cSv.prototype={
$0(){var w=this.a
return w.d=w.gns().cxF(this.b)},
$S:0}
C.cSP.prototype={
$1(d){return this.a.n(new C.cSu())},
$S:2}
C.cSu.prototype={
$0(){},
$S:0}
C.cSQ.prototype={
$0(){var w=this.a
return w.n(new C.cSt(w,this.b))},
$S:0}
C.cSt.prototype={
$0(){var w=this.a
return w.d=w.gns().cxK(this.b.a)},
$S:0}
C.cSR.prototype={
$1(d){var w=this.a
return w.n(new C.cSG(w,d))},
$S:6}
C.cSG.prototype={
$0(){var w=this.a
return w.d=w.gns().cyE(this.b)},
$S:0}
C.cSS.prototype={
$1(d){var w=this.a
return w.d=w.gns().azO(d)},
$S:2}
C.cST.prototype={
$1(d){var w=this.a
return w.d=w.gns().cxN(d)},
$S:2}
C.cSV.prototype={
$1(d){var w=this.a
return w.d=w.gns().cyC(d)},
$S:2}
C.cSW.prototype={
$1(d){var w=this.a
return w.n(new C.cSF(w,d))},
$S:9}
C.cSF.prototype={
$0(){var w=this.a
return w.d=w.gns().cyt(this.b)},
$S:0}
C.cSX.prototype={
$0(){var w=this.a,v=w.gns(),u=B.a.i(w.gxk(0).a.a),t=B.a.i(w.gax7().a.a)
u=v.b6E(B.a.i(w.gano().a.a),t,u)
A.a7(this.b,!1).K(u)
return null},
$S:0}
C.dKU.prototype={
$0(){var w=this.a
w.v_()
w.a.bl()
w.a.p_()},
$S:0}
C.dKT.prototype={
$0(){var w=this.a
w.v_()
w.a.bl()
w.a.p_()},
$S:0}
C.dKW.prototype={
$0(){var w=this,v=w.b
if(J.cs(v)||J.ci(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dKX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKY.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dKS.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dKV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dL_.prototype={
$0(){this.a.MO()
return null},
$S:0}
C.dKZ.prototype={
$0(){return this.a.Dc(this.b)},
$S:0}
C.dKk.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bG(!1,B.dd,w,w,!0,w,w,new C.dKi(d),w,w),r=A.bk(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eo(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dKj(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dKi.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dKj.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dKl.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cy8(this.b)},
$S:0}
C.dKf.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOm(w.b,w.c,w.d)},
$S:8}
C.dJO.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dJP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dK2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.EZ(t.a.c),$async$$0)
case 2:s=r.qC(q.dE(e,new C.dK0(t)))
if(s!=null&&t.c!=null)t.n(new C.dK1(t,s))
t.a.bl()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dK0.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dK1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dK3.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dK4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKe.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cyW(C.h0e(w),w)},
$S:0}
C.dKc.prototype={
$1(d){return new A.ed(new C.dKb(this.a,this.b),null)},
$S:21}
C.dKb.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahs,v,v,v,p>0?new C.dK7(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aN,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.ai0,v,v,v,new C.dK8(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.dK9(d),v,v),A.bH(B.pB,new C.dKa(d),A.bk(B.bR,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:162}
C.dK7.prototype={
$0(){return this.b.$1(new C.dK6(this.a))},
$S:0}
C.dK6.prototype={
$0(){return--this.a.a},
$S:0}
C.dK8.prototype={
$0(){return this.b.$1(new C.dK5(this.a))},
$S:0}
C.dK5.prototype={
$0(){return++this.a.a},
$S:0}
C.dK9.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dKa.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dKd.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cyJ(this.a.a)
w.r.a8(0)},
$S:0}
C.dJC.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.afb(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fV8(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dJD.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.f,x.P)
w.push(this.b)
v.d=u.azL(w)},
$S:0}
C.dKn.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaI(this.b,w,this.c,null)},
$S:z+24}
C.dKh.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.kY,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ab,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.eo(A.a([A.bH(D.eZR,new C.dKg(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b5,w,u,v,w,s,w,new A.b5(t,B.W),r,w)},
$S:20}
C.dKg.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dJE.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dJF.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dJG.prototype={
$1(d){return d.a},
$S:z+7}
C.dJH.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hO(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.azL(w)},
$S:0}
C.dJL.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.afb(q)
w=A.T(q).k("a5<1>")
q=A.A(new A.a5(q,new C.dJJ(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fV8(v.e,null,r,v.f,v.r,new C.dJK(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dJK.prototype={
$0(){return this.a.a7f(this.b)},
$S:0}
C.dJJ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dJM.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hO>")
w=A.A(new A.J(w,new C.dJI(this.b),v),v.k("ai.E"))
u.d=t.azL(w)},
$S:0}
C.dJI.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dKm.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dJY.prototype={
$1(d){return d.length!==0},
$S:3}
C.dJZ.prototype={
$1(d){var w=this
return new A.ed(new C.dJX(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dJX.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dJT(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(12),B.da),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.af,v,v,v,v,v,B.lB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a6,v,B.am,v,v,v,v))
p=A.u(p,B.ad,v,B.e,B.R,0,B.p)
t=w.a
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.dJU(d),v,v),A.bH(B.Hk,new C.dJV(t,u,o,e),A.bk(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.eO7,new C.dJW(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a3(360,v,p,v),v,v,v,v,r,v)},
$S:162}
C.dJT.prototype={
$1(d){var w=null
return A.dK(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bB9,w,w,w,new C.dJS(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1877}
C.dJS.prototype={
$0(){return this.a.$1(new C.dJQ(this.b,this.c))},
$S:0}
C.dJQ.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dJU.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJV.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dJR(w.c,u))
v.bG(0,B.c_)}},
$S:0}
C.dJR.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dJW.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).K(!0)},
$S:0}
C.dK_.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.czn(this.b,D.rH,C.EX(v,w.a.c))},
$S:0}
C.dKu.prototype={
$1(d){return d.as},
$S:z+1}
C.dKv.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.dKw.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hNX(v)
return w.TL(v==null?null:v.a)},
$S:0}
C.dKx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hrg(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcg(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.ci_(new A.ap(u,t),v.gbcu(),new A.ap(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cxE:D.cwg
q=A.H(s?B.du:D.b15,B.r,1)
p=A.m(22)
o=A.bV(0,A.b2(m,m,m,new C.b9G(s,m),B.as),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.am(B.V,m,B.a9,B.q,A.a([o,A.bV(0,A.tL(new A.M(n,n,n,n),new A.a3(u,t,new C.bay(l.d,v,l.f,w,new C.dKq(l),l.gc2x(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.brE(s,new C.dKr(l,e),new C.dKs(l,e),new C.dKt(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.h,m,m,new A.o(m,m,q,k,m,new A.a8(B.b3,B.bb,B.x,r,m,m),B.n),m,m,m,O.acp,m,m,m,m)},
$S:229}
C.dKq.prototype={
$1(d){var w=this.a
w.n(new C.dKo(w,d))},
$S:2}
C.dKo.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.G(0,v)},
$S:0}
C.dKr.prototype={
$0(){var w=this.b
return this.a.b4m(1.25,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dKs.prototype={
$0(){var w=this.b
return this.a.b4m(0.8,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dKt.prototype={
$0(){var w=this,v=w.b
return w.a.aOm(new A.ap(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ap(w.c,w.d),w.e.gbcu())},
$S:0}
C.dKy.prototype={
$0(){var w=this.a
return w.n(new C.dKp(w))},
$S:0}
C.dKp.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dJN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fB(new A.fu(s.c)),$async$$0)
case 2:t.wO("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_y.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.bef(u,C.h4g(v.c,u),new C.d_x(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d_x.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d_z.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhw(d.d,d.c,u.f.q(0,d.a),new C.d_w(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d_w.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fax.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qC(new A.cQ(new A.a5(v,new C.fay(d),w.k("a5<1>")),new C.faz(),w.k("cQ<1,n>")))},
$S:z+20}
C.fay.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.faz.prototype={
$1(d){return d.a},
$S:z+7}
C.fav.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.faw.prototype={
$1(d){return d.b},
$S:z+7}
C.faC.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qC(new A.cQ(new A.a5(v,new C.faD(d),w.k("a5<1>")),new C.faE(),w.k("cQ<1,n>")))},
$S:z+20}
C.faD.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.faE.prototype={
$1(d){return d.a},
$S:z+7}
C.faA.prototype={
$1(d){var w,v=A.eN([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.G(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.faB.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d_B.prototype={
$0(){return this.a},
$S:z+32}
C.d_S.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:248}
C.d_K.prototype={
$2(d,e){var w=this.a.ci(0,d,new C.d_L()),v=J.a6(w)
if(!v.q(w,e))v.G(w,e)},
$S:121}
C.d_L.prototype={
$0(){return A.a([],x.s)},
$S:729}
C.d_J.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eQ(w,e)
return w===!0},
$S:316}
C.d_C.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d_I.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d_H.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.G(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.AE:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.G(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.AE:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1879}
C.d_D.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d_M.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.G(0,a9)
w=a7.b
w.m(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aU(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.G(0,s)
w.m(0,s,b0)
a7.e.m(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aU(t==null?D.AE:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.bf(w,new C.d_N(r)))w.push(r)}}B.d.bm(w,new C.d_O(a8))
B.d.aZ(w,new C.d_P())
q=C.hrf(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.e7B],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.m(0,a9,a8)
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
else j.push(d)}}a0=(B.d.gI(k)+B.d.gai(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bks(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1880}
C.d_N.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d_O.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d_P.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.d_Q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gH(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bf(v,A.a2(v).k("bf<2>")).cI(0,0,B.pN)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gH(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:652}
C.d_R.prototype={
$1(d){return 16+d*156},
$S:256}
C.d_A.prototype={
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
t.m(0,d,new C.Eh(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Eh(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Eh(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Il(d,new A.v(e+t,w),s,s.length))}},
$S:191}
C.d_E.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFH(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:121}
C.d_F.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d_G.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_T.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_U.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:459}
C.d_V.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d_W.prototype={
$1(d){return d>=0.5},
$S:126}
C.eVn.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hI(A.aH(!1,v,!0,new A.a3(38,38,A.V(d,this.a.c?B.c:B.d3,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1882}
C.ex2.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.C(B.o0,A.aH(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eAX,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.K2,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ex1(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.ex1.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.df9.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.df8.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mS,B.L,w,w)
return A.eo(A.a([A.bG(!1,B.dd,w,w,!0,w,w,new C.df6(d),w,w),A.bG(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lL,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.df7(d),w,w)],x.p),B.b5,B.Dv,w,u,D.bhu,w,D.bjn,new A.b5(v,B.W),w,w)},
$S:20}
C.df6.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.df7.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dfi.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dfj.prototype={
$1(d){var w=this.a
return w.n(new C.dfh(w,d))},
$S:z+37}
C.dfh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfk.prototype={
$1(d){var w=null
return A.p7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dfn.prototype={
$1(d){var w=this.a
return w.n(new C.dfg(w,d))},
$S:30}
C.dfg.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dfm.prototype={
$1(d){var w=null
return A.p7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dfo.prototype={
$1(d){var w=this.a
return w.n(new C.dff(w,d))},
$S:30}
C.dff.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dfp.prototype={
$0(){var w=this.a
return w.n(new C.dfe(w))},
$S:0}
C.dfe.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dfq.prototype={
$0(){var w=this.a
return w.n(new C.dfd(w))},
$S:0}
C.dfd.prototype={
$0(){return++this.a.at},
$S:0}
C.dfr.prototype={
$0(){var w=this.a
return w.n(new C.dfc(w))},
$S:0}
C.dfc.prototype={
$0(){return--this.a.ax},
$S:0}
C.dfs.prototype={
$0(){var w=this.a
return w.n(new C.dfb(w))},
$S:0}
C.dfb.prototype={
$0(){return++this.a.ax},
$S:0}
C.dft.prototype={
$1(d){var w=this.a
return w.n(new C.dfa(w,d))},
$S:9}
C.dfa.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dfl.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dfu.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bR
else u=(q.c.a?B.dT:B.cg).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bm:B.bv
t=A.V(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bm:B.bv
return A.D(A.aD(!1,B.X,!0,r,A.aH(!1,o,!0,A.dg(r,A.u(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b9,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jA,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dfv(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+39}
C.dfv.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dfE.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.c2R.prototype={
$2(d,e){return new A.bq(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c2Y.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c2Z.prototype={
$2(d,e){var w=J.b4(e,new C.c2X(),x.a)
w=A.A(w,w.$ti.k("ai.E"))
return new A.bq(d,w,x.d2)},
$S:z+41}
C.c2X.prototype={
$1(d){return d.ad()},
$S:z+21}
C.c2T.prototype={
$1(d){return C.ai0(A.Z(d,x.N,x.z))},
$S:z+8}
C.c2U.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c2V.prototype={
$1(d){return C.fMd(A.Z(d,x.N,x.z))},
$S:z+11}
C.c2W.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c32.prototype={
$1(d){return new A.aCN(d.f.length,d.a,d.b)},
$S:z+43}
C.c33.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:564}
C.c3_.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c30.prototype={
$1(d){return d.cyl(C.EX(d,this.a))},
$S:z+44}
C.dKH.prototype={
$1(d){return C.ti(d,this.a.a.c)},
$S:z+2}
C.dKI.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dKM.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dKN.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dKE.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWt(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xl("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oz(r.c,r.e),$async$$0)
case 4:s.xl(p)
w=5
return A.b(s.I3(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWt(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xl("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oz(r.c,r.e),$async$$0)
case 4:s.xl(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKG.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.T2(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xl("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xl("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xl("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I3(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a4(j)
o=r.a
if(o.c==null){w=1
break}o.xl(B.a.e1(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dKL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWs(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xl("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).cs(A.eH(new C.dKK(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oz(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKK.prototype={
$1(d){var w=this.b
return new C.Y6(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dKJ.prototype={
$1(d){return D.fcg},
$S:z+46}
C.dKP.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKQ.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dKO(w,d)
return new A.C(B.d7,new C.baC(this.b,d.c,d.a,w,null),null)},
$S:1883}
C.dKO.prototype={
$0(){return this.a.Vq(this.b.b)},
$S:0}
C.dKz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dKA.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dKB.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dKC.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dKD.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKR.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dj(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).K(s)
return}},
$S:176}
C.dx8.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dx9.prototype={
$0(){return B.d.gI(D.a_x)},
$S:z+48}
C.dxa.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.as(A.V(this.b.d,B.c.j(0.95),w,w,D.cDl,44),w,w,w),w,w,new C.bfm(u,t,v,w),B.as)},
$S:75}
C.fq1.prototype={
$1(d){return A.p6(new C.fq0(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.fq0.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.aa(0,B.G,B.w.j(r?0.35:0.08),B.tm,24)],x.V),o=r?B.dT:B.cg
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bR.j(0.18)],x.O)
w=A.p(t,D.bvP,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a1,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aO:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.T,o,new A.C(E.adn,A.B(A.a([w,B.ba,A.D(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bm:B.bv,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ig(!0,t,e,B.z,D.eoD,new C.fq_(this.b,s),20,B.acY,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.kh,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fq_.prototype={
$2(d,e){var w=null,v=D.a_x[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dT:B.cg,B.r,1),q=A.a([new A.aa(0,B.G,B.w.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.D(new C.a3Y(v.a,!0,w),1),n=s?B.j7:B.iA,m=A.d(v.b,w,1,B.Z,w,w,w,A.l(w,w,s?B.aO:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.X,!0,w,A.aH(!1,u,!0,A.eq(A.bv(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.Z,w,w,w,A.l(w,w,s?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.kW,w,w,w)],l),B.ad,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fpZ(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:73}
C.fpZ.prototype={
$0(){A.a7(this.a,!1).K("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.caw.prototype={
$0(){return this.a.acX(this.b)},
$S:0}
C.fpr.prototype={
$1(d){return D.f94},
$S:z+74}
C.fwy.prototype={
$1(d){var w=this
return new C.ZQ(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fpt.prototype={
$1(d){return new C.WL(this.a,null)},
$S:z+51}
C.fps.prototype={
$1(d){return D.fa3},
$S:z+52}
C.cT8.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cT9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cT7(w,d))},
$S:30}
C.cT7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cTa.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cTb.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cT4.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cT5.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cT6.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqK.prototype={
$0(){},
$S:0}
C.cqQ.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqR.prototype={
$0(){return this.a.aJX(-1)},
$S:0}
C.cqS.prototype={
$1(d){return this.a.n(new C.cqP())},
$S:2}
C.cqP.prototype={
$0(){},
$S:0}
C.cqT.prototype={
$0(){return this.a.aJX(1)},
$S:0}
C.cqU.prototype={
$1(d){return this.a.n(new C.cqO())},
$S:2}
C.cqO.prototype={
$0(){},
$S:0}
C.cqV.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dT:B.cg
return A.tB(u,u,B.aW,r,u,new C.cqN(t,d),B.zL,s,w,u,new A.ax(v,1,B.r,-1),B.c6)},
$S:1884}
C.cqN.prototype={
$1(d){var w=this.a
return w.n(new C.cqL(w,this.b))},
$S:9}
C.cqL.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cqW.prototype={
$1(d){return this.a.n(new C.cqM())},
$S:2}
C.cqM.prototype={
$0(){},
$S:0}
C.cqX.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUQ.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).K(w)},
$S:2}
C.eUR.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUS.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).K(w)},
$S:0}
C.eUO.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbsv()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b2(new A.C(D.bjm,new A.en(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.brt(p,v,this.b.a,u,t,r),r,r,B.as)},
$S:75}
C.eUP.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dG.ar(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aS,B.bR,w)
s.toString
s=A.a([B.aW,s,B.aS],x.O)
return A.aD(!1,B.X,!0,p,A.aH(!1,v,!0,A.eq(D.dLR,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.d3(-1.2+t,-0.5),new A.d3(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
$S:125}
C.fok.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.euc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eu3.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eu4.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eua.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.ed(new C.eu9(w,this.b),null)},
$S:21}
C.eu9.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ev(w,u,new A.C(B.adh,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ab,C.fRZ(new C.eu6(r,e),r.a),B.ay,A.B(A.a([A.D(A.dU(B.dd,new C.eu7(d),w),1),B.av,A.D(A.bH(B.R4,new C.eu8(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ad,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cX,w,new A.b5(t,B.W),w)},
$S:97}
C.eu6.prototype={
$1(d){return this.b.$1(new C.eu5(this.a,d))},
$S:30}
C.eu5.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eu7.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eu8.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).K(w)
return null},
$S:0}
C.eub.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QP(this.b)},
$S:0}
C.etZ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.d,x.Q)
w.push(this.b)
v.d=u.b6c(w)},
$S:0}
C.eu2.prototype={
$1(d){return this.beU(d)},
beU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Jv(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iC(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eu1.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a5<1>")
w=A.A(new A.a5(w,new C.eu0(this.b),v),v.k("G.E"))
u.d=t.b6c(w)},
$S:0}
C.eu0.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eud.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.eue.prototype={
$1(d){return this.a.bwq(d,this.b)},
$S:z+55}
C.eu_.prototype={
$0(){return this.a.a7e(this.b)},
$S:0}
C.fwq.prototype={
$1(d){return new C.ab2(this.a,this.b,this.c,null)},
$S:z+56}
C.eug.prototype={
$0(){return this.a.XY(this.b)},
$S:0}
C.euh.prototype={
$0(){return this.a.Ob(this.b)},
$S:0}
C.eui.prototype={
$0(){return this.a.D7(this.b)},
$S:0}
C.euj.prototype={
$0(){return this.a.XZ(this.b)},
$S:0}
C.euf.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etV.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.etW.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.etX(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etX.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.euG.prototype={
$2(d,e){return d+e.gw2()},
$S:z+59}
C.euC.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euD.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eun.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bwe,B.h,v,v,new A.o(B.aH.j(u?0.18:0.08),v,A.H(B.aH.j(0.28),B.r,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aO:B.aG
u=u?B.dT:B.cg
w=x.p
return A.ev(v,t,new A.C(B.wu,A.u(A.a([r,B.aN,q,B.P,p,B.d1,A.B(A.a([A.D(A.dU(B.mW,new C.eul(d),A.d9(v,v,v,v,v,v,v,v,v,o,v,v,B.eU,v,new A.b5(A.m(14),B.W),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.av,A.D(A.bH(D.f2g,new C.eum(d),A.bk(B.aH,v,v,v,v,v,B.eU,v,new A.b5(A.m(14),B.W),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cX,v,new A.b5(s,B.W),v)},
$S:46}
C.eul.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.eum.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.euw.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.aa(0,B.G,B.w.j(k?0.35:0.08),B.fz,28)],x.V),g=k?D.cJo:B.ZY,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.ejk,B.au,new A.bF(B.a1,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cp,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.adk,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b_B(B.b0,B.iH,new C.eut(v,d),l,"Camera import","Scan QR"),1),B.av,A.D(v.b_B(B.cE,M.x8,new C.euu(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aH.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aH.j(0.28),B.r,1)
o=A.p(m,D.bvE,B.h,m,m,new A.o(B.aH.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aO:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.br(!0,new A.C(B.ub,A.p(m,A.u(A.a([g,new A.C(B.adi,A.u(A.a([w,B.T,u,B.bs,t,B.T,A.aD(!1,B.X,!0,m,A.aH(!1,s,!0,A.p(m,A.B(A.a([o,B.ba,n,A.V(B.ek,k?B.bm:B.bv,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bA,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.euv(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:34}
C.eut.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uC("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.euu.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uC("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.euv.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.M6(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eur.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.aa(0,B.G,B.w.j(o?0.35:0.08),B.eI,24)],x.V),k=o?B.dT:B.cg
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bm:B.bv
u=A.bv(w,new A.a3(48,48,C.aMO(!0,A.m(12),48,P.KA,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.Z,q,q,q,A.l(q,q,o?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zy(v.gw2())
s=x.p
r=this.a
return A.br(!0,new A.C(B.ub,A.p(q,A.u(A.a([B.T,k,new A.C(D.adf,A.B(A.a([u,B.ba,A.D(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zo,r.ccp(B.rZ,B.aS,new C.eup(d),p,"QR code or backup file","Transfer project"),r.aXG(!0,B.e4,B.aH,new C.euq(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:34}
C.eup.prototype={
$0(){A.a7(this.a,!1).K("transfer")
return null},
$S:0}
C.euq.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
C.eus.prototype={
$1(d){return this.beV(d)},
beV(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Jv(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uO(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.euJ.prototype={
$0(){var w=this.a
w.a.bl()
w.n(new C.euI(w))},
$S:0}
C.euI.prototype={
$0(){return this.a.r++},
$S:0}
C.euK.prototype={
$0(){var w=this.a
return w.n(new C.euH(w))},
$S:0}
C.euH.prototype={
$0(){return this.a.r++},
$S:0}
C.euk.prototype={
$0(){var w=this.a.c
w.toString
return A.iC(w,null)},
$S:0}
C.euo.prototype={
$0(){return this.a.c5X(this.b)},
$S:0}
C.euF.prototype={
$0(){var w=this.a
return w.n(new C.euE(w,this.b))},
$S:0}
C.euE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.euz.prototype={
$0(){return this.a.uC("scan")},
$S:0}
C.euA.prototype={
$0(){return this.a.uC("file")},
$S:0}
C.euB.prototype={
$1(d){return this.a.ccq(d,this.b)},
$S:z+60}
C.euy.prototype={
$0(){return this.a.Db(this.b)},
$S:0}
C.eux.prototype={
$0(){return this.a.Yr(this.b,this.c)},
$S:0}
C.cqb.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cqa.prototype={
$1(d){return d.ad()},
$S:z+62}
C.cq8.prototype={
$1(d){return C.ha1(A.Z(d,x.N,x.z))},
$S:z+63}
C.cq9.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.f9P.prototype={
$1(d){return d.y===D.k_},
$S:z+2}
C.fwO.prototype={
$1(d){return C.bxd(d,this.a)},
$S:z+2}
C.f90.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bIO.prototype={
$1(d){return!d.as},
$S:z+1}
C.bIN.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bIK.prototype={
$1(d){return C.fMe(A.Z(d,x.N,x.z))},
$S:z+14}
C.bIL.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bIM.prototype={
$1(d){return J.k(d)},
$S:17}
C.f1b.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.eY3.prototype={
$1(d){return C.fCZ(A.Z(d,x.N,x.z))},
$S:z+67}
C.eY4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eY5.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.fpi.prototype={
$1(d){return J.k(d)},
$S:17}
C.fpj.prototype={
$1(d){return d.a},
$S:z+69}
C.fpk.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpl.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.fpm.prototype={
$1(d){return d.QP(null).ad()},
$S:z+70}
C.fwM.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fag.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fcq.prototype={
$1(d){return C.ai0(A.Z(d,x.N,x.z))},
$S:z+8}
C.fcr.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcs.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fct.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fcu.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.fp5.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.fwH.prototype={
$1(d){return C.ai0(A.Z(d,x.N,x.z))},
$S:z+8}
C.fwI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f9Y.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.f9Z.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fwS.prototype={
$1(d){return!d.as},
$S:z+1}
C.f9z.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.f9A.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.f9B.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.fwz.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fdb.prototype={
$1(d){return d.Q},
$S:z+72}
C.fp1.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fcn.prototype={
$1(d){return C.ai0(A.Z(d,x.N,x.z))},
$S:z+8}
C.fco.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcp.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fp_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eYz.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYA.prototype={
$1(d){return C.fMe(A.Z(d,x.N,x.z))},
$S:z+14}
C.eYB.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eYC.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eYD.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYQ.prototype={
$2(d,e){return d.eM(new C.eYR(e))},
$S:1885}
C.eYR.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c3},
$S:1886}
C.eYN.prototype={
$1(d){return C.hvH(d,this.a)},
$S:z+73}
C.eYO.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eYP.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f1Q.prototype={
$1(d){return d.a},
$S:z+49}
C.f1R.prototype={
$1(d){return d.length!==0},
$S:3}
C.f1S.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f3S.prototype={
$1(d){return d.ad()},
$S:z+5}
C.f8n.prototype={
$1(d){return C.fXn(d,C.EX(d,this.a))},
$S:z+5}
C.f8o.prototype={
$1(d){return C.fXo(d,C.EX(d,this.a))},
$S:z+5};(function aliases(){var w=C.aI1.prototype
w.boS=w.p
w=C.aK7.prototype
w.br9=w.p
w=C.aK8.prototype
w.bra=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azF.prototype,"gc9s","c9t",25)
var s
w(s=C.awM.prototype,"gc2D","c2E",42)
v(s,"gaId","LF",0)
v(s,"gchl","zL",0)
v(s,"gbDZ","Mk",0)
v(s,"gcuO","xm",0)
v(s,"gcbo","Z6",0)
v(s,"gbzt","M2",0)
v(s,"gbEp","UT",0)
w(s,"gbIQ","bIR",71)
v(s,"gbu6","yP",0)
v(C.awN.prototype,"gcuK","E1",0)
v(s=C.aAf.prototype,"gacz","uP",0)
v(s,"gc5e","Yj",0)
v(s,"gaMc","Gx",0)
v(s=C.aAc.prototype,"gcr6","a08",0)
v(s,"gacz","uP",0)
v(s,"gcfu","ZM",0)
v(s,"gc69","Yw",0)
w(s,"gc2x","c2y",30)
v(s,"gbEg","GC",0)
v(s,"gcs_","cs0",3)
v(s,"gbV4","Wv",0)
w(s,"gc13","c14",23)
v(s,"gc4Z","c5_",3)
v(s=C.ayE.prototype,"gbZV","NL",0)
v(s,"gbZX","bZY",3)
v(s,"gbAY","a6S",0)
v(s=C.aAe.prototype,"gbHo","Vm",0)
v(s,"gbRy","W_",0)
v(s,"gclB","a_B",0)
v(s,"gchV","a_c",0)
v(C.aAd.prototype,"gchD","aej",0)
v(C.apz.prototype,"gc11","XX",0)
v(C.avz.prototype,"ga_T","ID",3)
v(C.avy.prototype,"ga_T","ID",3)
v(C.auk.prototype,"ga_T","ID",3)
v(s=C.aBF.prototype,"gaX4","OG",0)
v(s,"gbsY","TF",0)
v(s,"gc5Y","c5Z",3)
w(C.aBE.prototype,"gc1S","c1T",57)
u(C.aBG.prototype,"gaM6",0,0,null,["$1","$0"],["Gw","bCd"],58,0,0)
t(C,"h3v","hES",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alx,C.tz,C.mM,C.FZ,C.acd,C.Id,C.tA,C.Il,C.Eh,C.baA,C.aFH,C.amH,C.d_X,C.lh,C.aPF,C.aPE,C.aNJ,C.t4,C.qn,C.l1,C.hO,C.kl,C.aDH])
u(A.i2,[C.fh1,C.fh0,C.fh2,C.fpV,C.f7l,C.f7m,C.f7r,C.feL,C.feK,C.feJ,C.bXk,C.fqq,C.fqi,C.fqu,C.fa5,C.dxP,C.dxK,C.dxL,C.dxn,C.dxj,C.dy3,C.dy4,C.dxY,C.dxZ,C.dy5,C.dy6,C.fat,C.fck,C.fcl,C.fp3,C.fwG,C.f9X,C.fpz,C.d_9,C.cZw,C.cZF,C.cZW,C.cZB,C.cZH,C.cZy,C.cZL,C.cZM,C.cZK,C.d_0,C.d__,C.d0B,C.d0C,C.d0D,C.d_n,C.d_s,C.d_r,C.cyV,C.cyX,C.cSm,C.cSL,C.cSM,C.cSP,C.cSR,C.cSS,C.cST,C.cSV,C.cSW,C.dKV,C.dKk,C.dKf,C.dJO,C.dK0,C.dK3,C.dKc,C.dJC,C.dKn,C.dKh,C.dJE,C.dJF,C.dJG,C.dJL,C.dJJ,C.dJI,C.dJY,C.dJZ,C.dJT,C.dKu,C.dKq,C.d_y,C.d_z,C.fax,C.fay,C.faz,C.fav,C.faw,C.faC,C.faD,C.faE,C.faA,C.faB,C.d_S,C.d_I,C.d_D,C.d_N,C.d_O,C.d_R,C.d_F,C.d_U,C.d_V,C.d_W,C.eVn,C.ex2,C.df8,C.dfi,C.dfj,C.dfk,C.dfn,C.dfm,C.dfo,C.dft,C.dfu,C.c2Y,C.c2X,C.c2T,C.c2U,C.c2V,C.c2W,C.c32,C.c3_,C.c30,C.dKH,C.dKK,C.dKJ,C.dKQ,C.dKR,C.dx8,C.fq1,C.fpr,C.fwy,C.fpt,C.fps,C.cT9,C.cTa,C.cT5,C.cqS,C.cqU,C.cqV,C.cqN,C.cqW,C.eUQ,C.fok,C.eua,C.eu6,C.eu2,C.eu0,C.eue,C.fwq,C.eun,C.euw,C.eur,C.eus,C.euB,C.cqa,C.cq8,C.cq9,C.f9P,C.fwO,C.f90,C.bIO,C.bIN,C.bIK,C.bIL,C.bIM,C.eY3,C.eY4,C.fpi,C.fpj,C.fpk,C.fpl,C.fpm,C.fwM,C.fag,C.fcq,C.fcr,C.fct,C.fcu,C.fp5,C.fwH,C.fwI,C.fwJ,C.f9Y,C.f9Z,C.fwS,C.f9z,C.f9A,C.fwz,C.fdb,C.fp1,C.fcn,C.fco,C.fp_,C.eYz,C.eYA,C.eYB,C.eYC,C.eYD,C.eYR,C.eYN,C.eYO,C.f1Q,C.f1R,C.f3S,C.f8n,C.f8o])
u(A.ar,[C.aV0,C.ahZ,C.aQS,C.Wq,C.b6l,C.bay,C.bef,C.brE,C.bhw,C.aaH,C.bee,C.aaG,C.bed,C.ayF,C.aEK,C.aaI,C.I9,C.baz,C.a9Z,C.bax,C.baC,C.aUZ,C.apz,C.ab2])
u(A.n4,[C.b6X,C.b87,C.b7Z,C.aDC,C.bdi,C.baB,C.b9G,C.bfm,C.brt])
u(A.jk,[C.fqn,C.fqo,C.fqp,C.fqg,C.fqh,C.fqs,C.fqt,C.dy0,C.dxN,C.dxQ,C.dxu,C.dxv,C.dxw,C.dxt,C.dxB,C.dxs,C.dxC,C.dxD,C.dxr,C.dxE,C.dxq,C.dxF,C.dxp,C.dxG,C.dxh,C.dxi,C.dxo,C.dxH,C.dxm,C.dxI,C.dxl,C.dxx,C.dxk,C.dxy,C.dxg,C.dxz,C.dxA,C.dy1,C.dy2,C.dxR,C.dxS,C.dxT,C.dxU,C.dxV,C.dxW,C.dxX,C.dy8,C.dy_,C.fau,C.cZu,C.cZs,C.cZt,C.cZv,C.d_8,C.cZY,C.cZV,C.cZx,C.cZZ,C.cZD,C.cZE,C.cZG,C.cZX,C.cZC,C.cZI,C.d_5,C.cZS,C.cZR,C.cZT,C.cZU,C.cZN,C.cZP,C.cZQ,C.cZJ,C.d_1,C.d_4,C.cZz,C.cZA,C.d0A,C.d0z,C.d0y,C.d0x,C.d0E,C.d0w,C.d0F,C.d_o,C.d_p,C.d_q,C.d_t,C.d_m,C.d_l,C.cyW,C.cSl,C.cSy,C.cSx,C.cSN,C.cSw,C.cSO,C.cSv,C.cSu,C.cSQ,C.cSt,C.cSG,C.cSF,C.cSX,C.dKU,C.dKT,C.dKW,C.dKX,C.dKY,C.dKS,C.dL_,C.dKZ,C.dKi,C.dKj,C.dKl,C.dJP,C.dK2,C.dK1,C.dK4,C.dKe,C.dK7,C.dK6,C.dK8,C.dK5,C.dK9,C.dKa,C.dKd,C.dJD,C.dKg,C.dJH,C.dJK,C.dJM,C.dKm,C.dJS,C.dJQ,C.dJU,C.dJV,C.dJR,C.dJW,C.dK_,C.dKv,C.dKw,C.dKo,C.dKr,C.dKs,C.dKt,C.dKy,C.dKp,C.dJN,C.d_x,C.d_w,C.d_B,C.d_L,C.d_C,C.ex1,C.df9,C.df6,C.df7,C.dfh,C.dfg,C.dff,C.dfp,C.dfe,C.dfq,C.dfd,C.dfr,C.dfc,C.dfs,C.dfb,C.dfa,C.dfl,C.dfv,C.dfE,C.dKI,C.dKM,C.dKN,C.dKE,C.dKF,C.dKG,C.dKL,C.dKP,C.dKO,C.dKz,C.dKA,C.dKB,C.dKC,C.dKD,C.dx9,C.fpZ,C.caw,C.cT8,C.cT7,C.cTb,C.cT4,C.cT6,C.cqK,C.cqQ,C.cqR,C.cqP,C.cqT,C.cqO,C.cqL,C.cqM,C.cqX,C.eUR,C.eUS,C.euc,C.eu3,C.eu4,C.eu5,C.eu7,C.eu8,C.eub,C.etZ,C.eu1,C.eud,C.eu_,C.eug,C.euh,C.eui,C.euj,C.euf,C.etU,C.etV,C.etW,C.etY,C.etX,C.euC,C.euD,C.eul,C.eum,C.eut,C.euu,C.euv,C.eup,C.euq,C.euJ,C.euI,C.euK,C.euH,C.euk,C.euo,C.euF,C.euE,C.euz,C.euA,C.euy,C.eux])
u(A.ae,[C.alE,C.QJ,C.X8,C.Xc,C.Xa,C.WJ,C.amK,C.amE,C.XM,C.amI,C.Y6,C.Y7,C.a3Y,C.WL,C.WK,C.Wh,C.ZQ,C.E5,C.aud,C.apy,C.aps,C.apx,C.Md])
u(A.ag,[C.azF,C.bav,C.awM,C.baQ,C.awN,C.b85,C.aAf,C.aAc,C.ayE,C.aAe,C.aAd,C.bfE,C.aI1,C.avz,C.avy,C.auk,C.brw,C.aK7,C.aK8,C.aBF,C.bh_,C.aBE,C.btg])
u(A.kx,[C.dxM,C.dxO,C.dxJ,C.dy7,C.fcm,C.bIJ,C.d_7,C.d_6,C.cZO,C.d_2,C.d_3,C.d_u,C.dKb,C.dJX,C.dKx,C.d_K,C.d_J,C.d_H,C.d_M,C.d_P,C.d_Q,C.d_A,C.d_E,C.d_G,C.d_T,C.c2R,C.c2Z,C.c33,C.dxa,C.fq0,C.fq_,C.eUO,C.eUP,C.eu9,C.euG,C.cqb,C.f1b,C.eY5,C.fcs,C.f9B,C.fcp,C.eYQ,C.eYP,C.f1S])
t(C.bfn,C.aI1)
u(A.mb,[C.a92,C.aGo,C.G_,C.ai_,C.cqc,C.cqd])
t(C.bru,C.aK7)
t(C.brv,C.aK8)
t(C.aBG,C.btg)
t(C.b4P,A.b4E)
t(C.brx,A.a3D)
t(C.b4O,C.brx)
w(C.aI1,A.eJ)
w(C.aK7,A.c7)
w(C.aK8,A.c7)
v(C.btg,A.eu)
v(C.brx,A.iQ)})()
A.kd(b.typeUniverse,JSON.parse('{"aV0":{"ar":[],"r":[]},"b6X":{"az":[]},"alE":{"ae":[],"r":[]},"azF":{"ag":["alE"]},"QJ":{"ae":[],"r":[]},"ahZ":{"ar":[],"r":[]},"aQS":{"ar":[],"r":[]},"bav":{"ag":["QJ"]},"X8":{"ae":[],"r":[]},"Xc":{"ae":[],"r":[]},"Xa":{"ae":[],"r":[]},"WJ":{"ae":[],"r":[]},"awM":{"ag":["X8"]},"baQ":{"ag":["Xc"]},"awN":{"ag":["Xa"]},"Wq":{"ar":[],"r":[]},"b87":{"az":[]},"b7Z":{"az":[]},"b85":{"ag":["WJ"]},"aDC":{"az":[]},"bdi":{"az":[]},"b6l":{"ar":[],"r":[]},"amK":{"ae":[],"r":[]},"amE":{"ae":[],"r":[]},"XM":{"ae":[],"r":[]},"aaI":{"ar":[],"r":[]},"aAf":{"ag":["amK"]},"aAc":{"ag":["amE"]},"bay":{"ar":[],"r":[]},"baB":{"az":[]},"bef":{"ar":[],"r":[]},"b9G":{"az":[]},"brE":{"ar":[],"r":[]},"bhw":{"ar":[],"r":[]},"ayE":{"ag":["XM"]},"aaH":{"ar":[],"r":[]},"bee":{"ar":[],"r":[]},"aaG":{"ar":[],"r":[]},"bed":{"ar":[],"r":[]},"ayF":{"ar":[],"r":[]},"aEK":{"ar":[],"r":[]},"I9":{"ar":[],"r":[]},"amI":{"ae":[],"r":[]},"Y6":{"ae":[],"r":[]},"Y7":{"ae":[],"r":[]},"aAe":{"ag":["amI"]},"baz":{"ar":[],"r":[]},"a9Z":{"ar":[],"r":[]},"bax":{"ar":[],"r":[]},"baC":{"ar":[],"r":[]},"aAd":{"ag":["Y6"]},"bfE":{"ag":["Y7"]},"aUZ":{"ar":[],"r":[]},"a3Y":{"ae":[],"r":[]},"bfn":{"ag":["a3Y"]},"bfm":{"az":[]},"apz":{"ar":[],"r":[]},"WL":{"ae":[],"r":[]},"WK":{"ae":[],"r":[]},"Wh":{"ae":[],"r":[]},"ZQ":{"ae":[],"r":[]},"avz":{"ag":["WL"]},"avy":{"ag":["WK"]},"auk":{"ag":["Wh"]},"brw":{"ag":["ZQ"]},"E5":{"ae":[],"r":[]},"aud":{"ae":[],"r":[]},"bru":{"ag":["E5"]},"brv":{"ag":["aud"]},"brt":{"az":[]},"apy":{"ae":[],"r":[]},"aBF":{"ag":["apy"]},"ab2":{"ar":[],"r":[]},"aps":{"ae":[],"r":[]},"apx":{"ae":[],"r":[]},"bh_":{"ag":["aps"]},"aBE":{"ag":["apx"]},"Md":{"ae":[],"r":[]},"aBG":{"ag":["Md"],"eu":[]},"b4O":{"iQ":[],"f4":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aA
return{e2:w("aNJ"),Q:w("qn"),n:w("bt<n,n>"),c5:w("aPE"),dY:w("aPF"),d:w("ep<n?>"),e:w("FZ"),B:w("mM"),P:w("hO"),k:w("kl"),x:w("au<~>"),f5:w("N<afV>"),V:w("N<aa>"),t:w("N<qn>"),O:w("N<x>"),ac:w("N<ep<n?>>"),I:w("N<mM>"),u:w("N<hO>"),_:w("N<kl>"),cl:w("N<au<ak<a0<n,@>>>>"),R:w("N<mP>"),cq:w("N<ak<+(Q,Q)>>"),ez:w("N<a0<n,aB>>"),gE:w("N<a0<n,n>>"),c7:w("N<a0<n,@>>"),fD:w("N<m0>"),bp:w("N<nO>"),g:w("N<v>"),v:w("N<hw>"),L:w("N<+(n,n)>"),G:w("N<+(Q,Q)>"),bF:w("N<+count,id,name(I,n,n)>"),A:w("N<cJ>"),s:w("N<n>"),aS:w("N<iG>"),p:w("N<r>"),C:w("N<f4>"),D:w("N<l1>"),fp:w("N<Id>"),M:w("N<Il>"),gZ:w("N<aDH>"),Y:w("N<acd>"),E:w("N<aFH>"),F:w("N<Q>"),dC:w("N<I>"),dS:w("N<az?>"),d4:w("N<n?>"),J:w("cn<ag<ae>>"),b:w("ak<mM>"),do:w("ak<hO>"),r:w("ak<kl>"),U:w("ak<a0<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(I,n,n)>"),h:w("ak<n>"),c:w("ak<l1>"),j:w("ak<@>"),fK:w("bq<n,n>"),d2:w("bq<n,ak<a0<n,@>>>"),a:w("a0<n,@>"),f:w("a0<@,@>"),gv:w("J<n,G0>"),w:w("iA"),g2:w("qG"),bV:w("alx"),fL:w("co"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(Q,ak<hO>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bm<Q>"),gc:w("dz"),b4:w("cv<I>"),W:w("k1<n>"),l:w("r"),cM:w("f4"),i:w("l1"),cc:w("Eh"),bw:w("aaG<n?>"),cy:w("In"),q:w("mz"),y:w("R"),gR:w("Q"),z:w("@"),S:w("I"),eK:w("ak<kl>?"),m:w("amH?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,R)?"),Z:w("q0?"),T:w("n?"),aD:w("dz?"),o:w("l1?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aP5=new A.bu(B.fV,B.bC,B.fV,B.bC)
D.a6g=new A.bu(B.fV,B.jK,B.fV,B.jK)
D.aPh=new A.bu(B.jL,B.bC,B.bC,B.bC)
D.aPl=new A.ax(B.cW,1.4,B.r,-1)
D.aPv=new A.ax(B.aj,1,B.r,-1)
D.aQR=new A.aW(0,1/0,64,1/0)
D.aQU=new A.aW(0,84,0,1/0)
D.asd=w([B.lN,B.q6,B.c],x.O)
D.bFQ=new A.a8(B.ax,B.aC,B.x,D.asd,null,null)
D.aRH=new A.o(null,null,null,null,null,D.bFQ,B.n)
D.cIV=w([B.aS,B.bR],x.O)
D.bHN=new A.a8(B.b3,B.bb,B.x,D.cIV,null,null)
D.aRY=new A.o(null,null,null,null,null,D.bHN,B.n)
D.aXM=new A.f9(null,null,null,null,null,E.jt,null,null,null,null)
D.a7z=new A.cw(B.B,null,null,D.aXM,null)
D.jU=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.ez1=new A.F(!0,D.jU,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR6=new A.w("No books on the shelf yet.",null,D.ez1,null,null,null,null,null,null,null,null,null)
D.dLS=new A.C(B.nl,D.eR6,null)
D.aWp=new A.cw(B.B,null,null,D.dLS,null)
D.aXd=new A.cw(B.B,null,null,X.SO,null)
D.aZ6=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZt=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.a8t=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b0R=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b15=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9y=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b4v=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b4Q=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.CX=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b6c=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b8b=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.ab1=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eM0=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bch=new A.ep(null,D.eM0,B.eR,null,x.d)
D.eU3=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bcj=new A.ep(null,D.eU3,B.eR,null,x.d)
D.bcR=new A.b7(38e5)
D.bdC=new A.i3(0,10,0,10)
D.bdM=new A.M(0,1,0,0)
D.bdV=new A.i3(0,4,0,4)
D.beb=new A.M(10,10,14,10)
D.bel=new A.i3(10,4,10,4)
D.beu=new A.i3(10,8,10,8)
D.bev=new A.M(10,8,8,8)
D.beX=new A.M(12,6,12,2)
D.bfd=new A.M(14,10,6,6)
D.bfe=new A.M(14,12,14,0)
D.bfi=new A.M(14,12,14,8)
D.bfl=new A.M(14,12,8,14)
D.bfp=new A.i3(14,14,14,14)
D.bg4=new A.M(16,2,16,10)
D.bge=new A.M(16,6,16,30)
D.bgg=new A.M(16,6,16,8)
D.adf=new A.M(18,16,18,8)
D.bgR=new A.M(18,20,18,22)
D.adj=new A.M(18,24,18,24)
D.bgX=new A.M(18,30,18,30)
D.bhe=new A.M(20,10,12,20)
D.bhs=new A.M(20,18,16,18)
D.bhu=new A.M(20,18,20,6)
D.bii=new A.M(24,32,24,28)
D.bij=new A.M(24,36,24,32)
D.bim=new A.M(26,26,24,14)
D.biA=new A.M(2,4,2,8)
D.biE=new A.M(30,0,30,0)
D.biP=new A.M(38,22,22,22)
D.adB=new A.M(40,24,24,24)
D.biR=new A.i3(40,40,40,40)
D.biT=new A.M(46,30,30,30)
D.adE=new A.M(4,0,0,8)
D.bji=new A.M(56,40,40,40)
D.bjm=new A.M(1.25,1.25,1.25,1.25)
D.bjn=new A.M(60,0,60,0)
D.bjq=new A.M(6,14,6,16)
D.bjC=new A.i3(7,3,7,3)
D.bk2=new A.M(8,9,8,9)
D.bk6=new A.M(5,1.5,5,1.5)
D.bkg=new A.M(6,2.5,6,2.5)
D.f47=new A.w("Signature",null,B.mT,null,null,null,null,null,null,null,null,null)
D.bky=new A.bE(1,B.bn,D.f47,null)
D.f1r=new A.w("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.blf=new A.bE(1,B.bn,D.f1r,null)
D.eFZ=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3j=new A.w("Worksheets",null,D.eFZ,null,null,null,null,null,null,null,null,null)
D.eG6=new A.F(!0,E.a89,null,null,null,null,13,B.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2e=new A.w("Track your project spending",null,D.eG6,null,null,null,null,null,null,null,null,null)
D.cBF=w([D.f3j,B.au,D.f2e],x.p)
D.baA=new A.fj(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cBF,null)
D.blk=new A.bE(1,B.bn,D.baA,null)
D.eBu=new A.F(!0,E.jt,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLf=new A.w("FAMILY LIBRARY",null,D.eBu,null,null,null,null,null,null,null,null,null)
D.blz=new A.bE(1,B.bn,D.eLf,null)
D.Kf=new C.FZ("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Wi=new C.G_(0,"male")
D.aeu=new C.G_(1,"female")
D.wC=new C.G_(2,"unknown")
D.rH=new C.ai_(0,"owner")
D.Kg=new C.ai_(1,"editor")
D.k_=new C.ai_(2,"viewer")
D.afd=new A.a_(61199,"MaterialIcons",!1)
D.bnY=new A.a_(61504,"MaterialIcons",!1)
D.bnZ=new A.a_(61505,"MaterialIcons",!1)
D.bo0=new A.a_(61587,"MaterialIcons",!1)
D.bo6=new A.a_(61890,"MaterialIcons",!1)
D.bp_=new A.a_(63034,"MaterialIcons",!0)
D.bpQ=new A.a_(63429,"MaterialIcons",!1)
D.ahl=new A.a_(984520,"MaterialIcons",!1)
D.bow=new A.a_(62776,"MaterialIcons",!1)
D.bs9=new A.ac(D.bow,26,B.aW,null,null,null)
D.bmX=new A.a_(57648,"MaterialIcons",!1)
D.bsr=new A.ac(D.bmX,14,B.c,null,null,null)
D.bsJ=new A.ac(B.E3,17,null,null,null,null)
D.bte=new A.ac(E.X3,null,null,null,null,null)
D.bth=new A.ac(B.iY,18,E.jt,null,null,null)
D.WO=new A.a_(62044,"MaterialIcons",!1)
D.btn=new A.ac(D.WO,null,B.aS,null,null,null)
D.bud=new A.ac(B.dO,16,null,null,null,null)
D.buk=new A.ac(D.WO,32,B.aS,null,null,null)
D.buC=new A.ac(E.afe,18,B.cW,null,null,null)
D.bvE=new A.ac(B.Ef,22,B.aH,null,null,null)
D.bvP=new A.ac(B.dO,22,B.aW,null,null,null)
D.bw_=new A.ac(N.WT,22,B.c,null,null,null)
D.bw4=new A.ac(B.rS,52,B.c,null,null,null)
D.bwe=new A.ac(B.Ef,30,B.aH,null,null,null)
D.ahX=new A.ac(B.rZ,22,B.c,null,null,null)
D.bwG=new A.ac(B.dO,17,null,null,null,null)
D.bwZ=new A.ac(B.uv,26,B.cW,null,null,null)
D.bxI=new A.ac(B.Xg,16,null,null,null,null)
D.byp=new A.ac(B.rS,24,B.c,null,null,null)
D.byu=new A.ac(B.KG,20,B.qx,null,null,null)
D.byz=new A.ac(B.E1,null,B.bR,null,null,null)
D.byG=new A.ac(B.iY,18,B.c,null,null,null)
D.bA3=new A.ac(B.e4,16,B.aj,null,null,null)
D.bAe=new A.ac(D.WO,20,B.aS,null,null,null)
D.aio=new A.ac(B.hg,20,null,null,null,null)
D.bAK=new A.ac(B.cu,18,D.jU,null,null,null)
D.bB1=new A.ac(B.wY,28,B.c,null,null,null)
D.bB9=new A.ac(B.Kw,null,B.fK,null,null,null)
D.bBt=new A.ac(B.wY,24,B.c,null,null,null)
D.bBT=new A.ac(B.rS,null,B.aS,null,null,null)
D.bBU=new A.ac(B.jE,20,B.cW,null,null,null)
D.bCb=new A.ac(B.E3,16,null,null,null,null)
D.bDF=new A.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ep,!0,null,null,null,null)
D.cPt=w([B.bq,B.aS,B.eY,B.aW],x.O)
D.bEq=new A.a8(B.ax,B.aC,B.x,D.cPt,null,null)
D.b5h=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.b9N=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cyO=w([D.b5h,D.b9N],x.O)
D.bEB=new A.a8(B.b3,B.bb,B.x,D.cyO,null,null)
D.cKw=w([B.eO,B.ff,B.eY],x.O)
D.bEE=new A.a8(B.ax,B.aC,B.x,D.cKw,null,null)
D.aa3=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZu=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cAE=w([D.aa3,D.aZu],x.O)
D.bF9=new A.a8(B.b3,B.bb,B.x,D.cAE,null,null)
D.b1e=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.arK=w([D.b1e,D.aa3],x.O)
D.bFt=new A.a8(B.ax,B.aC,B.x,D.arK,null,null)
D.a9d=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b35=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cJN=w([D.a9d,D.b35],x.O)
D.bG_=new A.a8(B.a1,B.a7,B.x,D.cJN,null,null)
D.cV1=w([B.bS,B.mp],x.O)
D.bG1=new A.a8(B.b3,B.bb,B.x,D.cV1,null,null)
D.b5d=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b6E=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cVP=w([D.b5d,D.jU,D.jU,D.b6E],x.O)
D.cXL=w([0,0.07,0.9,1],x.F)
D.bGt=new A.a8(B.a1,B.a7,B.x,D.cVP,D.cXL,null)
D.bGD=new A.a8(B.ax,B.aC,B.x,B.O2,null,null)
D.cUE=w([B.aW,B.aS,B.bR],x.O)
D.bHz=new A.a8(B.ax,B.aC,B.x,D.cUE,null,null)
D.c1P=w([B.bq,B.aW,B.eO],x.O)
D.c1V=w([B.bE,B.aB,B.jV],x.O)
D.c1X=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b44=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c81=w([D.b44,E.a9N],x.O)
D.dIG=new A.v(1,2)
D.el6=new A.cJ(B.aV,D.dIG,3)
D.ap4=w([D.el6],x.A)
D.cff=w([B.fY,B.c9,B.fr],x.O)
D.chR=w([B.bP,B.bB,B.bj],x.O)
D.bm1=new C.tz("classic","Classic leather","Gold-edged brown leather",D.arK,E.jt,E.jt,"\u2766",B.L,!0,!1,!1,!1)
D.aYX=new A.x(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.b8T=new A.x(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cD6=w([D.aYX,D.b8T],x.O)
D.a9Q=new A.x(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.blX=new C.tz("ornate","Ornate gold","Double gold border and flourishes",D.cD6,D.a9Q,D.a9Q,"\u2726",B.L,!0,!0,!0,!1)
D.b0Y=new A.x(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.b5T=new A.x(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cw5=w([D.b0Y,D.b5T],x.O)
D.blW=new C.tz("parchment","Parchment","Old paper with dark ink",D.cw5,D.CX,G.i9,"\u2767",B.L,!0,!1,!1,!0)
D.a7W=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b7B=new A.x(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.cT8=w([D.a7W,D.b7B],x.O)
D.b3I=new A.x(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.b74=new A.x(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.blZ=new C.tz("minimal","Clean paper","Plain and elegant, like a printed book",D.cT8,D.b3I,D.b74,"",B.L,!0,!0,!1,!0)
D.cSk=w([B.dC,E.Tg],x.O)
D.bm0=new C.tz("midnight","Midnight","Deep blue with silver stars",D.cSk,B.cr,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.blV=new C.tz("emerald","Emerald library","Green cloth, title on the left",Y.app,E.jt,B.ho,"\u25c6",B.bf,!0,!1,!1,!1)
D.b7W=new A.x(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.cRK=w([B.fg,D.b7W],x.O)
D.b4C=new A.x(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.b5w=new A.x(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bm_=new C.tz("rose","Rose vintage","Burgundy with rose-gold lettering",D.cRK,D.b4C,D.b5w,"\u2740",B.L,!0,!1,!0,!1)
D.cVv=w([B.d3,L.zd],x.O)
D.blY=new C.tz("modern","Modern","Dark, bold, left-aligned",D.cVv,B.b4,B.c,"",B.bf,!1,!0,!1,!1)
D.Zc=w([D.bm1,D.blX,D.blW,D.blZ,D.bm0,D.blV,D.bm_,D.blY],A.aA("N<tz>"))
D.cvC=w([B.bR,B.bh],x.O)
D.b55=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cwg=w([D.a7W,D.b55],x.O)
D.b0V=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cxE=w([D.b0V,B.dc],x.O)
D.cz0=w([B.bd,B.ix,B.nP],x.O)
D.czn=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZq=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b2s=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cXI=w([D.a9d,D.aZq,D.b2s],x.O)
D.bm2=new C.tA("leather","Leather",D.cXI,"vintage")
D.cFT=w([B.dC,B.IN,E.Tg],x.O)
D.bm9=new C.tA("midnight","Midnight",D.cFT,"starry")
D.cz1=w([B.fq,B.eN,B.kQ],x.O)
D.bm8=new C.tA("forest","Forest",D.cz1,"story")
D.cZk=w([B.f5,B.fg,B.kS],x.O)
D.bm5=new C.tA("burgundy","Burgundy",D.cZk,"royal")
D.chs=w([B.aB,B.q2,B.n3],x.O)
D.bm6=new C.tA("royal","Royal",D.chs,"royal")
D.cBc=w([B.bB,B.d3,L.zd],x.O)
D.bm3=new C.tA("charcoal","Charcoal",D.cBc,"geo")
D.cXO=w([B.cl,B.dN,B.vZ],x.O)
D.bm7=new C.tA("sunset","Sunset",D.cXO,"sunset")
D.cYl=w([B.ix,B.CY,B.Th],x.O)
D.bm4=new C.tA("ocean","Ocean",D.cYl,"band")
D.xt=w([D.bm2,D.bm9,D.bm8,D.bm5,D.bm6,D.bm3,D.bm7,D.bm4],A.aA("N<tA>"))
D.cBz=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cC4=w([B.al,B.aI,B.M],x.O)
D.cDb=w([B.fg,B.eN,B.dC,B.ia,B.w0,B.cW,B.kT,B.fD,B.dD],x.O)
D.cDc=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.el7=new A.cJ(B.dt,B.dH,8)
D.cDl=w([D.el7],x.A)
D.cEj=w([B.cd,B.dN,B.lg],x.O)
D.cEL=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cFP=w([B.cd,B.hl],x.O)
D.cHG=w([B.aM,B.CS,B.vR],x.O)
D.cIt=w([B.bK,B.cN,B.dE,B.aM],x.O)
D.cIW=w([B.km,B.cl,B.tU],x.O)
D.cJo=w([B.eO,B.cW],x.O)
D.cJS=w([B.dh,B.fZ,B.hR],x.O)
D.cK2=w([B.b4,B.bh,B.dC],x.O)
D.cKt=w([B.eX,B.dp,B.eN],x.O)
D.cKJ=w([B.e9,B.dC,B.IN],x.O)
D.cLW=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_2=w(["leather","linen","plain","stars","rays"],x.s)
D.brQ=new A.a_(985219,"MaterialIcons",!1)
D.brp=new A.a_(983781,"MaterialIcons",!1)
D.arv=w([B.afD,B.hJ,B.lY,B.hL,D.brQ,B.Em,B.p1,D.brp,L.aha,B.x_,B.p3,B.lX],A.aA("N<a_>"))
D.a_7=w(["double","single","corners","none"],x.s)
D.cOl=w([B.fN,B.bv,B.fD],x.O)
D.cOy=w([],x.t)
D.AE=w([],x.u)
D.cQx=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cSB=w([B.aZ,B.fZ,B.ia],x.O)
D.cTH=w([B.cV,B.oJ,B.TY],x.O)
D.cTU=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dav=new C.lh("construction","Construction","Jobsite & builds",B.Ec)
D.daC=new C.lh("house","Home Build","Houses & rooms",B.up)
D.das=new C.lh("grocery","Grocery","Store & pantry",B.XQ)
D.dar=new C.lh("calculator","Calculations","Math & estimates",B.KP)
D.daA=new C.lh("lumber","Materials","Lumber & supplies",B.L6)
D.dao=new C.lh("kitchen","Kitchen","Remodel & meals",S.agm)
D.brn=new A.a_(983756,"MaterialIcons",!1)
D.dat=new C.lh("landscape","Landscaping","Yard & garden",D.brn)
D.dan=new C.lh("plumbing","Plumbing","Pipes & water",B.uB)
D.daD=new C.lh("electrical","Electrical","Wiring & power",B.hf)
D.dal=new C.lh("store","Retail Shop","Daily business",B.kx)
D.dam=new C.lh("paint_remodel","Paint & Remodel","Colors & walls",S.aga)
D.bqL=new A.a_(983311,"MaterialIcons",!1)
D.daz=new C.lh("roofing","Roofing","Roofs & exteriors",D.bqL)
D.brA=new A.a_(983986,"MaterialIcons",!1)
D.dak=new C.lh("warehouse","Warehouse","Storage & stock",D.brA)
D.dax=new C.lh("vehicles","Vehicles","Fleet & transport",B.En)
D.boy=new A.a_(62785,"MaterialIcons",!1)
D.daq=new C.lh("farm","Farm","Crops & livestock",D.boy)
D.dap=new C.lh("restaurant","Restaurant","Food & catering",B.rY)
D.daw=new C.lh("tools","Tools","Workshop gear",B.El)
D.daB=new C.lh("wallet","Cash & Wallet","Quick spending",B.jE)
D.bpL=new A.a_(63395,"MaterialIcons",!1)
D.day=new C.lh("concrete","Concrete","Foundation work",D.bpL)
D.dau=new C.lh("blueprint","Blueprint","Plans & design",Aa.afJ)
D.a_x=w([D.dav,D.daC,D.das,D.dar,D.daA,D.dao,D.dat,D.dan,D.daD,D.dal,D.dam,D.daz,D.dak,D.dax,D.daq,D.dap,D.daw,D.daB,D.day,D.dau],A.aA("N<lh>"))
D.cUl=w([B.bm,B.bv],x.O)
D.cV2=w([B.hQ,B.n7,B.dw],x.O)
D.a_C=w(["top","middle","bottom"],x.s)
D.cXa=w([B.cK,B.bh,B.dC],x.O)
D.cXD=w([B.bt,B.dp,B.eN],x.O)
D.cZf=w([B.bP,B.al],x.O)
D.cZg=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dGO={top:0,middle:1,bottom:2}
D.d1n=new A.bt(D.dGO,["Top","Middle","Bottom"],x.n)
D.dGu={double:0,single:1,corners:2,none:3}
D.d1s=new A.bt(D.dGu,["Double line","One line","Corners","None"],x.n)
D.dHx={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d2Q=new A.bt(D.dHx,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.d30=new A.bt(B.iq,[],A.aA("bt<I,+(n,n)>"))
D.dGH={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AP=new A.bt(D.dGH,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aA("bt<n,I>"))
D.d5c=new F.L8(32,null)
D.d5d=new F.L8(40,null)
D.d5e=new F.L8(46,null)
D.aAo=new C.apx(null)
D.dJp=new A.v(8,14)
D.eRJ=new A.w("Write a new book",null,B.jo,null,B.L,null,null,null,null,null,null,null)
D.dLm=new A.C(B.lS,D.eRJ,null)
D.ahy=new A.ac(B.hH,18,B.c,null,null,null)
D.eLz=new A.w("Add",null,B.mU,null,null,null,null,null,null,null,null,null)
D.cII=w([D.ahy,B.v3,D.eLz],x.p)
D.ejr=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cII,null)
D.dLG=new A.C(B.rC,D.ejr,null)
D.dLH=new A.C(E.ac6,X.SO,null)
D.eFV=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOo=new A.w("New Project",null,D.eFV,null,null,null,null,null,null,null,null,null)
D.cMh=w([D.ahy,B.aa,D.eOo],x.p)
D.eju=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cMh,null)
D.dLR=new A.C(B.iE,D.eju,null)
D.eQA=new A.w("Choose your header",null,R.BE,null,null,null,null,null,null,null,null,null)
D.dM9=new A.C(B.iD,D.eQA,null)
D.aY0=new A.f9(2.2,null,null,null,null,B.cW,null,null,null,null)
D.enG=new A.a3(22,22,D.aY0,null)
D.aWl=new A.cw(B.B,null,null,D.enG,null)
D.dMe=new A.C(B.UP,D.aWl,null)
D.bfy=new A.M(14,2,14,6)
D.f2_=new A.w("The top of your book. Tap a design to see it.",null,Q.a3R,null,null,null,null,null,null,null,null,null)
D.dMf=new A.C(D.bfy,D.f2_,null)
D.dMO=new A.iD(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dMR=new A.iD(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBj=new A.iD(1,0.9607843137254902,0.48627450980392156,0)
D.Go=new A.iD(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.xY=new A.iD(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dMX=new A.iD(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fbC=new C.bdi(null)
D.bbt=new A.lT(D.fbC,null,B.as,null,null)
D.aEX=new A.cE(0,0,0,0,null,null,D.bbt,null)
D.e7B=new A.z(-42,42)
D.efs=new A.d7([0,0,1,1])
D.aG5=new A.af(0,0,520,160)
D.aGg=new A.b5(B.pL,B.W)
D.f1z=new A.w("Let the AI write it from your tree",null,B.kd,null,B.L,null,null,null,null,null,null,null)
D.bmt=new A.dl(1,B.cj,D.f1z,null)
D.cFO=w([E.Yh,B.aa,D.bmt],x.p)
D.ej9=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cFO,null)
D.eLg=new A.w("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.cSP=w([D.aio,B.aa,D.eLg],x.p)
D.ejh=new A.cC(B.aY,B.b5,B.j,B.m,null,B.p,null,0,D.cSP,null)
D.bvU=new A.ac(B.hK,14,B.aW,null,null,null)
D.eAd=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOO=new A.w("Cashier",null,D.eAd,null,null,null,null,null,null,null,null,null)
D.cMK=w([D.bvU,B.bo,D.eOO],x.p)
D.ejj=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cMK,null)
D.eLh=new A.w("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bl5=new A.bE(1,B.bn,D.eLh,null)
D.cyx=w([D.ahX,B.av,D.bl5],x.p)
D.ejk=new A.cC(B.aY,B.e,B.j,B.m,null,B.p,null,0,D.cyx,null)
D.emt=new A.ap(16,40)
D.emy=new A.ap(22,64)
D.emE=new A.ap(280,88)
D.enm=new A.a3(30,null,null,null)
D.eoD=new A.hH(2,12,12,1.05,null)
D.eOu=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.epl=new A.aY(D.eOu,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOJ=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aI0=new A.aY(D.eOJ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWb=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.epP=new A.aY(D.eWb,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4E=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.epU=new A.aY(D.f4E,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQy=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eq0=new A.aY(D.eQy,null,null,null,null,null,null,null,null,null,null,null,null,B.fE,!1,null,null,null,B.q,null)
D.f2a=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aI4=new A.aY(D.f2a,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eLQ=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eqq=new A.aY(D.eLQ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f5f=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.er9=new A.aY(D.f5f,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f0B=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ery=new A.aY(D.f0B,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4I=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.erB=new A.aY(D.f4I,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXE=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.erD=new A.aY(D.eXE,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSg=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.erE=new A.aY(D.eSg,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSh=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.esE=new A.aY(D.eSh,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOw=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.esW=new A.aY(D.eOw,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQg=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ete=new A.aY(D.eQg,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXa=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.etu=new A.aY(D.eXa,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSZ=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.etv=new A.aY(D.eSZ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ewo=new A.F(!0,D.jU,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewM=new A.F(!0,D.jU,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exk=new A.qZ(!0,B.qF,null,null,null,null,B.dk,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.exA=new A.F(!0,D.jU,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ey7=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3S=new A.qZ(!0,B.Pk,null,null,null,null,B.dk,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.ez4=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezt=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAX=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB0=new A.F(!0,G.i9,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCd=new A.F(!0,B.M,null,null,null,null,13,B.a0,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCR=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDv=new A.F(!0,B.bR,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDA=new A.F(!0,B.bS,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDW=new A.F(!0,D.CX,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE4=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF0=new A.F(!0,B.cW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFs=new A.F(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFT=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHj=new A.F(!0,B.al,null,null,null,null,11.5,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHr=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKa=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4j=new A.F(!0,B.al,null,null,null,null,12,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ1=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJn=new A.F(!0,G.i9,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJu=new A.F(!0,G.i9,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKc=new A.w("Themes",null,B.px,null,null,null,null,null,null,null,null,null)
D.eKM=new A.w("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eAI=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL6=new A.w("Debt receipt",null,D.eAI,null,B.L,null,null,null,null,null,null,null)
D.aK6=new A.F(!0,B.al,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLn=new A.w("Person who owes",null,D.aK6,null,null,null,null,null,null,null,null,null)
D.eMh=new A.w("Notes",null,B.a3Z,null,null,null,null,null,null,null,null,null)
D.eMG=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.ezL=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMK=new A.w("Share",null,D.ezL,null,null,null,null,null,null,null,null,null)
D.eNz=new A.w("Move your family trees",null,D.aKa,null,null,null,null,null,null,null,null,null)
D.eO7=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eOI=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.ePS=new A.w("Remove this book?",null,B.h8,null,null,null,null,null,null,null,null,null)
D.aKz=new A.w("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eQV=new A.w("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eSc=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eTc=new A.w("Ribbon bookmark",null,B.it,null,null,null,null,null,null,null,null,null)
D.eHd=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTD=new A.w("NGMY.ORG",null,D.eHd,null,B.L,null,null,null,null,null,null,null)
D.eUM=new A.w("Scan family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eDP=new A.F(!0,B.c,null,null,null,null,13,B.a0,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVt=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eDP,null,B.L,null,null,null,null,null,null,null)
D.eWC=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.eWI=new A.w("Thumbnail",null,B.px,null,null,null,null,null,null,null,null,null)
D.eXg=new A.w("Save the cover",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eXF=new A.w("Your photos",null,B.px,null,null,null,null,null,null,null,null,null)
D.eXU=new A.w("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eYk=new A.w("Design your cover",null,R.BE,null,null,null,null,null,null,null,null,null)
D.eYq=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.eYt=new A.w("PICTURE",null,H.mc,null,null,null,null,null,null,null,null,null)
D.eYP=new A.w("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eYR=new A.w("You can undo it right after.",null,Q.a43,null,null,null,null,null,null,null,null,null)
D.eZj=new A.w("Print",null,B.ty,null,null,null,null,null,null,null,null,null)
D.eZE=new A.w("Amount owed",null,D.aK6,null,null,null,null,null,null,null,null,null)
D.eZR=new A.w("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f_n=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.f_q=new A.w("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f_P=new A.w("Debtor signature",null,B.a3Z,null,null,null,null,null,null,null,null,null)
D.f_X=new A.w("Change icon",null,E.aJp,null,null,null,null,null,null,null,null,null)
D.f10=new A.w("Family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f1p=new A.w("Download",null,B.ty,null,null,null,null,null,null,null,null,null)
D.f1t=new A.w("Change",null,B.px,null,null,null,null,null,null,null,null,null)
D.f2g=new A.w("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f2j=new A.w("WHAT SHOULD IT CHANGE?",null,H.mc,null,null,null,null,null,null,null,null,null)
D.f2T=new A.w("COLOUR",null,H.mc,null,null,null,null,null,null,null,null,null)
D.f34=new A.w("Do it",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f37=new A.w("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f41=new A.w("Create Family Tree",null,B.eK,null,null,null,null,null,null,null,null,null)
D.evr=new A.F(!0,E.jt,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4g=new A.w("Write the first page myself",null,D.evr,null,null,null,null,null,null,null,null,null)
D.f4L=new A.w("Use this header",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f4Q=new A.w("Create Project",null,E.aJS,null,null,null,null,null,null,null,null,null)
D.f8Y=new C.a92(1,"header")
D.a5_=new C.a92(2,"projects")
D.f8Z=new C.a92(3,"cashier")
D.a50=new C.a92(4,"familyTree")
D.fjx=new C.cqc(0,"start")
D.fjy=new C.cqd(0,"start")
D.f94=new C.Wh(null)
D.fa3=new C.WK(null)
D.d2Y=new A.bt(B.iq,[],A.aA("bt<n,Eh>"))
D.cOS=w([],x.E)
D.cOT=w([],x.M)
D.faA=new C.baA(D.d2Y,D.cOS,D.cOT,0,0,null,null)
D.fcg=new C.Y7(null)
D.a5H=new C.aGo(0,"projects")
D.aNm=new C.aGo(1,"cashier")
D.fhu=new C.aGo(2,"familyTree")})()};
(a=>{a["cio0VuG2CpmX3/M171qvT6PB5cM="]=a.current})($__dart_deferred_initializers__);