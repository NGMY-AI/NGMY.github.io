((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Y,G,F,E,Z,A_,A0,A1,A2,A3,M,A4,H,Q,R,S,T,A5,A6,U,A7,A8,V,A9,Aa,Ab,K,Ac,Ad,W,L,N,C={
byG(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$byG=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uz(null,""),$async$byG)
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
return A.b(A.qg(t,a1,B.h4,E.Dk),$async$byG)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ov(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.a9(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.P(l!=null&&A.Jh(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Z(r.a(j.h(a2,a7)),q,p):B.cr
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a05(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byG,v)},
ael(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ael=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uz(null,""),$async$ael)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.P(y.j)
t=A.mE(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a_T(new A.J(r,new C.fgP(),r.$ti.k("J<ai.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ad("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fgO(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.aj(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ael)
case 6:l=c5
k=F.Ov(l==null?"":l)
if(k==null)throw A.P("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alu(s,D.d2w,r.b(k.h(0,"cover"))?A.Z(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.P("There is no page to change.")
h=A.R(s,x.fz)
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
return A.b(m.$1(f+B.Q.aj(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ael)
case 10:l=c5
k=l==null?null:F.Ov(l)
if(k==null)throw A.P(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d1(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.kK(a5,a2.k("kK<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
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
p=A.cy(new A.bf(h,s),new C.fgQ(),s.k("G.E"),p)
p=F.a_T(A.oI(p,3,A.a2(p).k("G.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.A(new A.cu(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a05(s,b9),$async$ael)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alu(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ael,v)},
h3D(d,e,f){return A.ce(null,B.w.j(0.65),!1,null,new C.fpI(e,f),d,null,!0,!0,x.g2)},
alu:function alu(d,e,f){this.a=d
this.b=e
this.c=f},
fgP:function fgP(){},
fgO:function fgO(d){this.a=d},
fgQ:function fgQ(){},
fpI:function fpI(d,e){this.a=d
this.b=e},
bwB(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bwB=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.bf(b1,new C.f7a())){u=null
w=1
break}t=B.d.e8(b1,new C.f7b())
s=$.a1()
r=new A.rs()
q=A.Fw(r,D.aG_)
p=A.U()
p.r=B.c.gt(0)
q.bp(D.aG_,p)
o=A.U()
o.r=B.M.gt(0)
o.c=3.6
o.b=B.aj
o.d=B.bZ
o.e=B.fk
n=new C.f7g(t)
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
return A.b(r.pM().yl(520,160),$async$bwB)
case 4:w=3
return A.b(b3.hf(B.fI),$async$bwB)
case 3:b0=b3
u=b0==null?null:J.f1(B.dz.gaL(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bwB,v)},
fev(d){return C.hH2(d)},
hH2(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fev=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.baE()
n=d.x!=null&&d.y0(null).length===0
if(d.x!=null)t=n?D.xX:D.Gj
else t=d.gRN()?D.Gj:D.aBd
w=3
return A.b(C.bwB(d.ax),$async$fev)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akd(s)
r=A.a22(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBd}else{p.c=C.vR(q,!0)
p.b=n?D.xX:D.Gj}r.a0C(A.fzd(new C.fex(p,d,new C.fey(),t,n,o),null,D.biA,B.uW))
u=r.jz(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fev,v)},
fl6(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fl6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fev(d),$async$fl6)
case 3:t=f
s=B.a.i(d.b)
r=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aI(s,r,"_")
if(q.length>40)q=B.a.al(q,0,40)
u=A3.F3(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fl6,v)},
f7a:function f7a(){},
f7b:function f7b(){},
f7g:function f7g(d){this.a=d},
fey:function fey(){},
fex:function fex(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
few:function few(){},
fq9(d,e){var w=0,v=A.j(x.H)
var $async$fq9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.w.j(0.55),!0,null,new C.fqd(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fq9)
case 2:return A.h(null,v)}})
return A.i($async$fq9,v)},
bz8(d,e,f,g){return C.hOf(d,e,f,g)},
hOf(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bz8=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aF(t)}catch(q){r=null}if(r==null||r.length===0){d.F(x.q).f.P(D.esJ)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.fq5(g,r,f),d,null,!0,!0,x.H),$async$bz8)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bz8,v)},
fqe(d,e){var w=0,v=A.j(x.H)
var $async$fqe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.fqh(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fqe)
case 2:return A.h(null,v)}})
return A.i($async$fqe,v)},
aUX:function aUX(d,e){this.c=d
this.a=e},
bXf:function bXf(){},
b6T:function b6T(d,e){this.b=d
this.a=e},
fqd:function fqd(d,e){this.a=d
this.b=e},
fqa:function fqa(d){this.a=d},
fqb:function fqb(d,e,f){this.a=d
this.b=e
this.c=f},
fqc:function fqc(d,e){this.a=d
this.b=e},
fq5:function fq5(d,e,f){this.a=d
this.b=e
this.c=f},
fq3:function fq3(d){this.a=d},
fq4:function fq4(d,e,f){this.a=d
this.b=e
this.c=f},
fqh:function fqh(d,e){this.a=d
this.b=e},
fqf:function fqf(d){this.a=d},
fqg:function fqg(d,e,f){this.a=d
this.b=e
this.c=f},
f9U(d,e){var w=0,v=A.j(x.y),u,t
var $async$f9U=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_E(d),$async$f9U)
case 3:t=g
J.n_(t,new C.f9V(e))
u=A.aeZ(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$f9U,v)},
f9V:function f9V(d){this.a=d},
alB:function alB(d,e,f){this.c=d
this.d=e
this.a=f},
azC:function azC(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dxQ:function dxQ(d,e){this.a=d
this.b=e},
dxB:function dxB(d,e){this.a=d
this.b=e},
dxE:function dxE(d,e,f){this.a=d
this.b=e
this.c=f},
dxD:function dxD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxC:function dxC(d,e){this.a=d
this.b=e},
dxF:function dxF(d,e){this.a=d
this.b=e},
dxz:function dxz(){},
dxA:function dxA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxy:function dxy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxj:function dxj(d){this.a=d},
dxk:function dxk(d,e,f){this.a=d
this.b=e
this.c=f},
dxl:function dxl(d,e){this.a=d
this.b=e},
dxi:function dxi(d){this.a=d},
dxq:function dxq(d,e){this.a=d
this.b=e},
dxh:function dxh(d){this.a=d},
dxr:function dxr(d,e,f){this.a=d
this.b=e
this.c=f},
dxs:function dxs(d,e,f){this.a=d
this.b=e
this.c=f},
dxg:function dxg(d,e){this.a=d
this.b=e},
dxt:function dxt(d,e,f){this.a=d
this.b=e
this.c=f},
dxf:function dxf(d,e){this.a=d
this.b=e},
dxu:function dxu(d,e){this.a=d
this.b=e},
dxe:function dxe(d){this.a=d},
dxv:function dxv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxc:function dxc(){},
dx6:function dx6(d){this.a=d},
dx7:function dx7(d){this.a=d},
dxd:function dxd(d,e){this.a=d
this.b=e},
dxw:function dxw(d,e){this.a=d
this.b=e},
dxb:function dxb(d){this.a=d},
dxx:function dxx(d){this.a=d},
dxa:function dxa(){},
dxm:function dxm(d,e){this.a=d
this.b=e},
dx9:function dx9(d){this.a=d},
dxn:function dxn(d,e,f){this.a=d
this.b=e
this.c=f},
dx8:function dx8(d,e){this.a=d
this.b=e},
dx5:function dx5(d,e){this.a=d
this.b=e},
dxo:function dxo(d){this.a=d},
dxp:function dxp(d,e,f){this.a=d
this.b=e
this.c=f},
dxT:function dxT(){},
dxU:function dxU(d,e){this.a=d
this.b=e},
dxR:function dxR(d){this.a=d},
dxS:function dxS(d){this.a=d},
dxN:function dxN(d,e){this.a=d
this.b=e},
dxO:function dxO(d){this.a=d},
dxG:function dxG(d,e,f){this.a=d
this.b=e
this.c=f},
dxH:function dxH(d,e,f){this.a=d
this.b=e
this.c=f},
dxI:function dxI(d,e,f){this.a=d
this.b=e
this.c=f},
dxJ:function dxJ(d,e,f){this.a=d
this.b=e
this.c=f},
dxK:function dxK(d,e,f){this.a=d
this.b=e
this.c=f},
dxL:function dxL(d,e,f){this.a=d
this.b=e
this.c=f},
dxM:function dxM(d,e,f){this.a=d
this.b=e
this.c=f},
dxV:function dxV(){},
dxW:function dxW(){},
dxX:function dxX(){},
dxY:function dxY(d){this.a=d},
dxP:function dxP(d,e){this.a=d
this.b=e},
fM0(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bg(J.k(u==null?"":u))
return new C.mM(t,w,v,u==null?new A.O(Date.now(),0,!1):u)},
J2(d,e){return C.hFG(d,e)},
hFG(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$J2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$J2)
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
break}o=J.d1(p,x.f)
o=A.cy(o,new C.fc7(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a5<G.E>")
o=A.A(new A.a5(o,new C.fc8(),n),n.k("G.E"))
B.d.aZ(o,new C.fc9())
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
return A.i($async$J2,v)},
zG(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aw(),$async$zG)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b4(f,new C.foR(),x.a)
r=A.A(r,r.$ti.k("ai.E"))
w=4
return A.b(t.an("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.aj(r,null)),$async$zG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zG,v)},
aN3(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aN3=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J2(d,e),$async$aN3)
case 2:u=h
t=J.cB(u)
s=t.bg(u,new C.fwt(f))
if(s===-1)t.ck(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zG(d,e,u),$async$aN3)
case 3:return A.h(null,v)}})
return A.i($async$aN3,v)},
bx1(d,e,f){var w=0,v=A.j(x.H),u
var $async$bx1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J2(d,e),$async$bx1)
case 2:u=h
J.n_(u,new C.f9M(f))
w=3
return A.b(C.zG(d,e,u),$async$bx1)
case 3:return A.h(null,v)}})
return A.i($async$bx1,v)},
bxf(d,e){return C.hFF(d,e)},
hFF(a1,a2){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$bxf=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aw(),$async$bxf)
case 7:r=a4
o=B.a.i(a1.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a2))
if(q==null||q.length===0){u=D.Ke
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
if(D.AM.am(0,o.h(0,"foil")))j=A.cJ(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a_A,o.h(0,"position"))?A.cJ(o.h(0,"position")):"middle"
g=B.d.q(D.a_5,o.h(0,"frame"))?A.cJ(o.h(0,"frame")):"double"
f=B.d.q(D.a_0,o.h(0,"texture"))?A.cJ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
o=new C.FX(n,m,l,k,j,i,h,g,f,J.k(e==null?"":e),!J.y(o.h(0,"ribbon"),!1))}else o=D.Ke
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a0=s.pop()
u=D.Ke
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bxf,v)},
a0l(d,e,f){return C.hNM(d,e,f)},
hNM(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a0l=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aw(),$async$a0l)
case 7:r=h
w=8
return A.b(r.an("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.aj(f.ad(),null)),$async$a0l)
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
return A.i($async$a0l,v)},
P4(d,e){return C.hFH(d,e)},
hFH(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$P4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$P4)
case 7:r=g
q=r.rm("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.A(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.J2(d,e),$async$P4)
case 8:if(!j.cs(g)){n=B.a.i(d.toLowerCase())
m=J.l8(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$P4)
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
return A.i($async$P4,v)},
adH(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P4(d,e),$async$adH)
case 3:s=g
r=J.a6(s)
if(r.gH(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gH(s):"main"
r.G(s,t)
w=5
return A.b(A.aw(),$async$adH)
case 5:w=4
return A.b(g.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adH)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adH,v)},
a0j(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0j=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.P4(d,e),$async$a0j)
case 2:s=h
J.hA(s,f)
w=3
return A.b(A.aw(),$async$a0j)
case 3:u=h
w=4
return A.b(u.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0j)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0j)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0j)
case 6:return A.h(null,v)}})
return A.i($async$a0j,v)},
mM:function mM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fc7:function fc7(){},
fc8:function fc8(){},
fc9:function fc9(){},
foR:function foR(){},
fwt:function fwt(d){this.a=d},
f9M:function f9M(d){this.a=d},
FX:function FX(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bIE:function bIE(d){this.a=d},
hO4(d,e,f,g,h,i,j){return A.a7(d,!1).cs(A.eH(new C.fpm(j,i,f,e,h,g),!0,null,x.H))},
P0(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$P0=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P4(h,g),$async$P0)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.a9(k)>=6){d.F(x.q).f.P(D.aHU)
u=!1
w=1
break}w=4
return A.b(C.h3D(d,f,e),$async$P0)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adH(h,g),$async$P0)
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
return A.b(C.zG(h,r,p),$async$P0)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.a0l(h,r,new C.FX("leather",p,"",0,"gold",25,"middle","double","leather","",!0)),$async$P0)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
fpm:function fpm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
X5:function X5(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awJ:function awJ(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
cZZ:function cZZ(d){this.a=d},
cZY:function cZY(d,e){this.a=d
this.b=e},
cZN:function cZN(d,e){this.a=d
this.b=e},
cZK:function cZK(d,e){this.a=d
this.b=e},
cZn:function cZn(d){this.a=d},
cZo:function cZo(d,e){this.a=d
this.b=e},
cZO:function cZO(d){this.a=d},
cZu:function cZu(d){this.a=d},
cZs:function cZs(d){this.a=d},
cZt:function cZt(d){this.a=d},
cZv:function cZv(d){this.a=d},
cZL:function cZL(d){this.a=d},
cZM:function cZM(){},
cZw:function cZw(d){this.a=d},
cZx:function cZx(d,e){this.a=d
this.b=e},
cZX:function cZX(d){this.a=d},
cZW:function cZW(d,e){this.a=d
this.b=e},
cZV:function cZV(d){this.a=d},
cZH:function cZH(d){this.a=d},
cZG:function cZG(d){this.a=d},
cZI:function cZI(d){this.a=d},
cZp:function cZp(d,e){this.a=d
this.b=e},
cZJ:function cZJ(d,e){this.a=d
this.b=e},
cZA:function cZA(d){this.a=d},
cZB:function cZB(d){this.a=d},
cZz:function cZz(){},
cZC:function cZC(d){this.a=d},
cZD:function cZD(d){this.a=d},
cZE:function cZE(d,e){this.a=d
this.b=e},
cZF:function cZF(d,e,f){this.a=d
this.b=e
this.c=f},
cZy:function cZy(d,e){this.a=d
this.b=e},
cZQ:function cZQ(d){this.a=d},
cZP:function cZP(){},
cZR:function cZR(d){this.a=d},
cZS:function cZS(d){this.a=d},
cZT:function cZT(d){this.a=d},
cZU:function cZU(d,e){this.a=d
this.b=e},
cZq:function cZq(d){this.a=d},
cZr:function cZr(d){this.a=d},
X9:function X9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baL:function baL(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d0p:function d0p(d){this.a=d},
d0q:function d0q(d){this.a=d},
d0o:function d0o(d){this.a=d},
d0r:function d0r(d){this.a=d},
d0n:function d0n(d){this.a=d},
d0s:function d0s(d){this.a=d},
d0m:function d0m(d){this.a=d},
d0t:function d0t(d,e){this.a=d
this.b=e},
d0l:function d0l(d,e){this.a=d
this.b=e},
d0u:function d0u(d,e){this.a=d
this.b=e},
X7:function X7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acb:function acb(d,e,f){this.a=d
this.b=e
this.c=f},
awK:function awK(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d_d:function d_d(d,e){this.a=d
this.b=e},
d_c:function d_c(d,e){this.a=d
this.b=e},
d_h:function d_h(d){this.a=d},
d_g:function d_g(d,e){this.a=d
this.b=e},
d_e:function d_e(d){this.a=d},
d_f:function d_f(d){this.a=d},
d_i:function d_i(d){this.a=d},
d_j:function d_j(d){this.a=d},
d_b:function d_b(d,e){this.a=d
this.b=e},
d_a:function d_a(d,e){this.a=d
this.b=e},
NO:function NO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wn:function Wn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cyQ:function cyQ(d){this.a=d},
cyR:function cyR(){},
cyS:function cyS(d){this.a=d},
b83:function b83(d,e,f){this.b=d
this.c=e
this.a=f},
b7V:function b7V(d,e){this.b=d
this.a=e},
tz:function tz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WG:function WG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b81:function b81(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cSh:function cSh(d,e,f){this.a=d
this.b=e
this.c=f},
cSg:function cSg(d,e){this.a=d
this.b=e},
cSG:function cSG(d){this.a=d},
cSt:function cSt(){},
cSH:function cSH(d){this.a=d},
cSs:function cSs(){},
cSI:function cSI(d,e){this.a=d
this.b=e},
cSr:function cSr(d,e){this.a=d
this.b=e},
cSJ:function cSJ(d,e){this.a=d
this.b=e},
cSq:function cSq(d,e){this.a=d
this.b=e},
cSK:function cSK(d){this.a=d},
cSp:function cSp(){},
cSL:function cSL(d,e){this.a=d
this.b=e},
cSo:function cSo(d,e){this.a=d
this.b=e},
cSM:function cSM(d){this.a=d},
cSB:function cSB(d,e){this.a=d
this.b=e},
cSN:function cSN(d){this.a=d},
cSO:function cSO(d){this.a=d},
cSQ:function cSQ(d){this.a=d},
cSR:function cSR(d){this.a=d},
cSA:function cSA(d,e){this.a=d
this.b=e},
cSS:function cSS(d,e){this.a=d
this.b=e},
aDz:function aDz(d){this.a=d},
bdd:function bdd(d){this.a=d},
b6h:function b6h(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
hEH(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.af9(a6),a5=a4.length
if(a5===0)return""
w=A.R(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.O(Date.now(),0,!1))
s=new C.fak(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a5<1>"),q=q.k("cQ<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wC)m.push(l===D.Wh?"male":"female")
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
m.push("child of "+l+k)}a0=A.A(new A.cQ(new A.a5(a4,new C.fai(u,f),p),new C.faj(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.al(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hEI(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.af9(a0),d=e.length
if(d===0)return""
w=x.N
v=A.R(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.fap(v,e)
q=new C.fan(v)
p=A.R(w,x.S)
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
for(l=B.d.gag(e),k=new A.hX(l,new C.fao(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hr1(d,e,f,g){var w,v,u=C.hEJ(d,e)
if(u<=0||f.length<=u)return new A.abN(!1,D.AB,f)
if(g.q(0,e.a))return new A.abN(!1,D.AB,f)
w=A.T(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dz(0)
return new A.abN(!0,A.dc(f,u,null,w).dz(0),v)},
hr2(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.af9(d3),d2=d1.length
if(d2===0)return D.fa2
w=x.N
v=A.R(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ci(0,t.a,new C.d_q(t))}s=new C.d_H(v)
d2=x.h
r=A.R(w,d2)
q=new C.d_z(r)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d_y(r)
l=A.R(w,x.do)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.ci(0,k,new C.d_r()),o)}h=new C.d_x(s)
g=new C.d_w(l,r)
p=v.$ti.k("bf<2>")
o=p.k("a5<G.E>")
f=A.A(new A.a5(new A.bf(v,p),new C.d_s(h),o),o.k("G.E"))
e=f.length===0?new A.bf(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aZ(w))
if(a0>d){d=a0
e=t}}a1=A.aZ(w)
p=x.S
a2=A.R(w,p)
a3=A.R(w,w)
a4=A.R(w,d2)
d2=x.gR
a5=A.R(w,d2)
a6=A.R(w,x.d9)
a7=A.R(w,d2)
a8=A.a([],x.s)
a9=new C.d_F(new C.d_B(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.R(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dw(v,v.r,v.e),j=a2.gahu(a2);o.C();){b0=o.d
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
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.R(w,x.cc)
b5=A.a([],x.M)
b6=A.R(w,d2)
b7=new C.d_p(a2,new C.d_G(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.m(0,b8,new C.Ef(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ij(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.A(new A.cu(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bD(0,new C.d_t(c6,b4))
for(d2=new A.cN(a4,a4.$ti.k("cN<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.hX(j,new C.d_u(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d_v())
c6.push(new C.aFE(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bav(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h_r(d){var w=A.ad("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fUW(d,e,f,g,h,i,j,k,l,m,n){return new C.XJ(k,f,j,e,l,n,m,d,g,h,i,null)},
ayD(d,e,f,g,h,i,j){return new C.be9(i,d,e,f,j,h,g,null)},
amH:function amH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAc:function aAc(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dKJ:function dKJ(d){this.a=d},
dKI:function dKI(d){this.a=d},
dKL:function dKL(d,e){this.a=d
this.b=e},
dKM:function dKM(d,e){this.a=d
this.b=e},
dKN:function dKN(d){this.a=d},
dKH:function dKH(d,e){this.a=d
this.b=e},
dKK:function dKK(d){this.a=d},
dKP:function dKP(d){this.a=d},
dKO:function dKO(d,e){this.a=d
this.b=e},
amB:function amB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA9:function aA9(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dK9:function dK9(d){this.a=d},
dK7:function dK7(d){this.a=d},
dK8:function dK8(d){this.a=d},
dKa:function dKa(d,e){this.a=d
this.b=e},
dK4:function dK4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJD:function dJD(d){this.a=d},
dJE:function dJE(d,e){this.a=d
this.b=e},
dJS:function dJS(d){this.a=d},
dJQ:function dJQ(d){this.a=d},
dJR:function dJR(d,e){this.a=d
this.b=e},
dJT:function dJT(d){this.a=d},
dJU:function dJU(d,e){this.a=d
this.b=e},
dK3:function dK3(d,e){this.a=d
this.b=e},
dK1:function dK1(d,e){this.a=d
this.b=e},
dK0:function dK0(d,e){this.a=d
this.b=e},
dJX:function dJX(d,e){this.a=d
this.b=e},
dJW:function dJW(d){this.a=d},
dJY:function dJY(d,e){this.a=d
this.b=e},
dJV:function dJV(d){this.a=d},
dJZ:function dJZ(d){this.a=d},
dK_:function dK_(d){this.a=d},
dK2:function dK2(d,e){this.a=d
this.b=e},
dJr:function dJr(d,e){this.a=d
this.b=e},
dJs:function dJs(d,e){this.a=d
this.b=e},
dKc:function dKc(d,e,f){this.a=d
this.b=e
this.c=f},
dK6:function dK6(d,e,f){this.a=d
this.b=e
this.c=f},
dK5:function dK5(d){this.a=d},
dJt:function dJt(d){this.a=d},
dJu:function dJu(d){this.a=d},
dJv:function dJv(){},
dJw:function dJw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJA:function dJA(d,e){this.a=d
this.b=e},
dJz:function dJz(d,e){this.a=d
this.b=e},
dJy:function dJy(d){this.a=d},
dJB:function dJB(d,e){this.a=d
this.b=e},
dJx:function dJx(d){this.a=d},
dKb:function dKb(d){this.a=d},
dJN:function dJN(){},
dJO:function dJO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJM:function dJM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJI:function dJI(d,e,f){this.a=d
this.b=e
this.c=f},
dJH:function dJH(d,e,f){this.a=d
this.b=e
this.c=f},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJJ:function dJJ(d){this.a=d},
dJK:function dJK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJG:function dJG(d,e){this.a=d
this.b=e},
dJL:function dJL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJP:function dJP(d,e){this.a=d
this.b=e},
dKj:function dKj(){},
dKk:function dKk(d,e){this.a=d
this.b=e},
dKl:function dKl(d){this.a=d},
dKm:function dKm(d,e){this.a=d
this.b=e},
dKf:function dKf(d){this.a=d},
dKd:function dKd(d,e){this.a=d
this.b=e},
dKg:function dKg(d,e){this.a=d
this.b=e},
dKh:function dKh(d,e){this.a=d
this.b=e},
dKi:function dKi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dKn:function dKn(d){this.a=d},
dKe:function dKe(d){this.a=d},
dJC:function dJC(d){this.a=d},
bat:function bat(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d_n:function d_n(d){this.a=d},
d_m:function d_m(d,e){this.a=d
this.b=e},
d_o:function d_o(d){this.a=d},
d_l:function d_l(d,e){this.a=d
this.b=e},
fak:function fak(d,e){this.a=d
this.b=e},
fal:function fal(d){this.a=d},
fam:function fam(){},
fai:function fai(d,e){this.a=d
this.b=e},
faj:function faj(){},
fap:function fap(d,e){this.a=d
this.b=e},
faq:function faq(d){this.a=d},
far:function far(){},
fan:function fan(d){this.a=d},
fao:function fao(d,e){this.a=d
this.b=e},
Ij:function Ij(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ef:function Ef(d,e){this.a=d
this.b=e},
bav:function bav(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_q:function d_q(d){this.a=d},
d_H:function d_H(d){this.a=d},
d_z:function d_z(d){this.a=d},
d_A:function d_A(){},
d_y:function d_y(d){this.a=d},
d_r:function d_r(){},
d_x:function d_x(d){this.a=d},
d_w:function d_w(d,e){this.a=d
this.b=e},
d_s:function d_s(d){this.a=d},
d_B:function d_B(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_C:function d_C(d){this.a=d},
d_D:function d_D(d){this.a=d},
d_E:function d_E(){},
d_F:function d_F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_G:function d_G(){},
d_p:function d_p(d,e,f,g,h,i,j,k,l,m){var _=this
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
d_t:function d_t(d,e){this.a=d
this.b=e},
d_u:function d_u(d){this.a=d},
d_v:function d_v(){},
aFE:function aFE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baw:function baw(d,e){this.b=d
this.a=e},
d_I:function d_I(){},
d_J:function d_J(d){this.a=d},
d_K:function d_K(d){this.a=d},
d_L:function d_L(){},
bea:function bea(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9C:function b9C(d,e){this.b=d
this.a=e},
brz:function brz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eVc:function eVc(d){this.a=d},
bhr:function bhr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ewS:function ewS(d){this.a=d},
ewR:function ewR(d,e){this.a=d
this.b=e},
XJ:function XJ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayB:function ayB(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
deZ:function deZ(d,e){this.a=d
this.b=e},
deY:function deY(d){this.a=d},
deW:function deW(d){this.a=d},
deX:function deX(d){this.a=d},
df7:function df7(d){this.a=d},
df8:function df8(d){this.a=d},
df6:function df6(d,e){this.a=d
this.b=e},
df9:function df9(){},
dfc:function dfc(d){this.a=d},
df5:function df5(d,e){this.a=d
this.b=e},
dfb:function dfb(){},
dfd:function dfd(d){this.a=d},
df4:function df4(d,e){this.a=d
this.b=e},
dfe:function dfe(d){this.a=d},
df3:function df3(d){this.a=d},
dff:function dff(d){this.a=d},
df2:function df2(d){this.a=d},
dfg:function dfg(d){this.a=d},
df1:function df1(d){this.a=d},
dfh:function dfh(d){this.a=d},
df0:function df0(d){this.a=d},
dfi:function dfi(d){this.a=d},
df_:function df_(d,e){this.a=d
this.b=e},
dfa:function dfa(d){this.a=d},
aaF:function aaF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be9:function be9(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaE:function aaE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
be8:function be8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dfj:function dfj(d){this.a=d},
dfk:function dfk(d,e){this.a=d
this.b=e},
ayC:function ayC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEH:function aEH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaG:function aaG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dft:function dft(d){this.a=d},
I8:function I8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fPT(d){var w=d.R,v=x.N
return w.iD(w,new C.c2M(),v,v)},
hiE(d){var w=d.by
if(w>=0)return w
return 5},
fPV(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fPT(d).h(0,v)
if(w==null||w.length===0)return null
return A.bg(w)},
fPU(d,e){var w=C.fPV(d,e)
if(w!=null&&w.c8(new A.O(Date.now(),0,!1)))return!0
return!1},
hiF(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Z(C.fPT(d),w,w)
u=C.fPV(d,e)
t=u!=null&&u.c8(new A.O(Date.now(),0,!1))?u:new A.O(Date.now(),0,!1)
v.m(0,s,t.bL(A.dB(30,0,0,0,0,0).a).a4().aa())
d.R=v},
aWm(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWm=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.kZ(t,B.G7),$async$aWm)
case 3:if(l){u=!0
w=1
break}u=A.kE(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.G7,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWm,v)},
c2M:function c2M(){},
hiC(){var w,v=$.oW(),u=J.dZ(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fM(u)},
GQ(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$GQ)
case 3:if(!e){u=A.R(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_family_tree_backup_codes_v1",null,!1,B.bD),$async$GQ)
case 8:r=e
if(r==null){u=A.R(x.N,x.z)
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
case 7:u=A.R(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GQ,v)},
a4S(d){return C.hiD(d)},
hiD(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a4S=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$a4S)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$a4S)
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
return A.i($async$a4S,v)},
c2L(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c2L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GQ(),$async$c2L)
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
return A.i($async$c2L,v)},
LA(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$LA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c2L(d),$async$LA)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.GQ(),$async$LA)
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
return A.b(C.a4S(s),$async$LA)
case 9:case 8:u=t
w=1
break
case 5:n=C.hiC()
w=10
return A.b(C.GQ(),$async$LA)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=11
return A.b(C.a4S(s),$async$LA)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LA,v)},
aWl(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GQ(),$async$aWl)
case 3:t=f
for(s=J.df(t),r=s.gdH(t),r=r.dz(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a4S(t),$async$aWl)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWl,v)},
a4T(d,e,f){var w=0,v=A.j(x.H),u
var $async$a4T=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amG(d,e),$async$a4T)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.LA(d),$async$a4T)
case 7:w=4
break
case 5:w=8
return A.b(C.aWl(d),$async$a4T)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a4T,v)},
amA(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amA=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amG(f,e),$async$amA)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bW(),$async$amA)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GQ(),$async$amA)
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
return A.i($async$amA,v)},
aWk(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bW(),$async$aWk)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GQ(),$async$aWk)
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
return A.i($async$aWk,v)},
hiG(){var w,v=$.oW(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fM(u)},
amD(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$amD)
case 3:if(!g){u=null
w=1
break}t=C.hiG()
w=4
return A.b(A.SY(),$async$amD)
case 4:s=g
r=B.dB.aF(B.Q.aj(d.eE(),null))
r=B.cM.gcr().aF(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(A.a4U(s),$async$amD)
case 5:p=e?999:2
u=new A.YU("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amD,v)},
amC(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amC=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.SY(),$async$amC)
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
return A.b(C.aWk(J.k(l==null?"":l),j),$async$amC)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{r=B.c0.c6(0,B.cw.aF(t))
s=C.fPW(r)}catch(f){q=A.a4(f)
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
return A.b(A.a4U(p),$async$amC)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amC,v)},
fPW(d){var w,v,u,t,s=null
try{w=B.Q.aE(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hiI(A.Z(w,x.N,x.z))
return u}catch(t){v=A.a4(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fAg(d){var w=0,v=A.j(x.m),u,t,s
var $async$fAg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amC(t[1])
w=1
break}u=null
w=1
break}u=C.fPW(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAg,v)},
hiI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d1(v,x.f)
u=A.cy(u,new C.c2O(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a5<G.E>")
s=A.A(new A.a5(u,new C.c2P(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bg(J.k(u==null?"":u))
if(r==null)r=new A.O(Date.now(),0,!1)
q=A.R(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jj(p),t=t.gag(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d1(l,u)
n=A.cy(n,new C.c2Q(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a5<G.E>")
j=A.A(new A.a5(n,new C.c2R(),k),k.k("G.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amE(h,w,s,r,q)},
amG(d,e){var w=0,v=A.j(x.y),u,t
var $async$amG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ls(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zv(d),$async$amG)
case 3:u=t.cs(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amG,v)},
c2X(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c2X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zv(d),$async$c2X)
case 3:t=s.b4(f,new C.c2Y(),x.cs)
t=A.A(t,t.$ti.k("ai.E"))
B.d.aZ(t,new C.c2Z())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2X,v)},
SZ(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$SZ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amG(e,d),$async$SZ)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.LA(e),$async$SZ)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zv(e),$async$SZ)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c2V(g))
r=A.A(t,t.$ti.k("G.E"))}t=J.a6(r)
if(t.gah(r)){u=null
w=1
break}t=t.di(r,new C.c2W(e),x.k)
r=A.A(t,t.$ti.k("ai.E"))
q=A.R(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.J2(e,o),$async$SZ)
case 14:n=i
if(J.cs(n))q.m(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.amE(s,B.a.i(e.toLowerCase()),r,new A.O(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SZ,v)},
aWp(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWp=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SZ(d,e,f,g),$async$aWp)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aI(t,s,"_")
r=q.a
u=A.EU(A.If(q.eE(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWp,v)},
aWo(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWo=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SZ(d,e,f,g),$async$aWo)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amD(r,f),$async$aWo)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCI(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWo,v)},
T_(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T_=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fAg(a0),$async$T_)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amA(g.a,d,e,f,s,r),$async$T_)
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
return A.b(C.bwT(e,j),$async$T_)
case 12:case 11:w=13
return A.b(C.aeX(e,j,s),$async$T_)
case 13:h=n.h(0,i)
w=h!=null&&J.cs(h)?14:15
break
case 14:w=16
return A.b(C.zG(e,i,h),$async$T_)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bkW(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T_,v)},
amE:function amE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2T:function c2T(){},
c2U:function c2U(){},
c2S:function c2S(){},
c2O:function c2O(){},
c2P:function c2P(){},
c2Q:function c2Q(){},
c2R:function c2R(){},
c2Y:function c2Y(){},
c2Z:function c2Z(){},
c2V:function c2V(d){this.a=d},
c2W:function c2W(d){this.a=d},
fIl(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f6(null,x.H)
return A.hk(d,new C.amF(w,e,g,i,f,h,null),!0,null,x.H)},
d_k(d,e,f,g,h,i,j,k){return new C.bas(i,e,k,j,g,f,h,d,null)},
amF:function amF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAb:function aAb(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dKw:function dKw(d){this.a=d},
dKx:function dKx(d,e,f){this.a=d
this.b=e
this.c=f},
dKB:function dKB(d,e){this.a=d
this.b=e},
dKC:function dKC(d){this.a=d},
dKt:function dKt(d){this.a=d},
dKu:function dKu(d,e){this.a=d
this.b=e},
dKv:function dKv(d,e){this.a=d
this.b=e},
dKA:function dKA(d){this.a=d},
dKz:function dKz(d,e){this.a=d
this.b=e},
dKy:function dKy(){},
dKE:function dKE(d){this.a=d},
dKF:function dKF(d,e){this.a=d
this.b=e},
dKD:function dKD(d,e){this.a=d
this.b=e},
d_M:function d_M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bau:function bau(d,e,f){this.d=d
this.e=e
this.a=f},
a9X:function a9X(d,e,f){this.c=d
this.d=e
this.a=f},
bas:function bas(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bax:function bax(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y3:function Y3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAa:function aAa(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dKo:function dKo(d,e){this.a=d
this.b=e},
dKp:function dKp(d){this.a=d},
dKq:function dKq(d){this.a=d},
dKr:function dKr(d){this.a=d},
dKs:function dKs(d){this.a=d},
Y4:function Y4(d){this.a=d},
bfz:function bfz(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dKG:function dKG(d,e){this.a=d
this.b=e},
aUW(d,e){return new C.aUV(d,e,null)},
aUV:function aUV(d,e,f){this.c=d
this.d=e
this.a=f},
hH7(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
hOe(d){return A.c0(B.K,null,new C.fpP(new C.t4(A.L(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fRM(d,e){return new C.apw(e,d,null)},
aML(d,e,f,g,h,i,j){var w=C.hH7(i)
if(w!=null)return A.bu(e,new A.a3(j,f,new C.a3W(w,!0,null),null),B.ap)
return I.aM6(e,B.bM,f,g,h,i,j)},
lh:function lh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3W:function a3W(d,e,f){this.c=d
this.d=e
this.a=f},
bfi:function bfi(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
dwY:function dwY(d){this.a=d},
dwZ:function dwZ(){},
dx_:function dx_(d,e){this.a=d
this.b=e},
bfh:function bfh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fpP:function fpP(d){this.a=d},
fpO:function fpO(d,e){this.a=d
this.b=e},
fpN:function fpN(d,e){this.a=d
this.b=e},
fpM:function fpM(d,e){this.a=d
this.b=e},
apw:function apw(d,e,f){this.c=d
this.d=e
this.a=f},
car:function car(d,e){this.a=d
this.b=e},
aHZ:function aHZ(){},
hO_(d){var w=null
return A.ce(w,w,!0,w,new C.fpe(),d,w,!0,!0,x.e2)},
hP9(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.fwl(h,g,f,e),d,w,!0,!0,x.N)},
hO1(d,e){var w=null
return A.ce(w,w,!0,w,new C.fpg(e),d,w,!0,!0,x.dY)},
hO0(d){var w=null
return A.ce(w,w,!0,w,new C.fpf(),d,w,!0,!0,x.c5)},
aPC:function aPC(d,e){this.a=d
this.b=e},
aPB:function aPB(d){this.a=d},
aNG:function aNG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpe:function fpe(){},
fwl:function fwl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpg:function fpg(d){this.a=d},
fpf:function fpf(){},
WI:function WI(d,e){this.c=d
this.a=e},
avw:function avw(){var _=this
_.d=$
_.c=_.a=_.e=null},
cT3:function cT3(d){this.a=d},
cT4:function cT4(d){this.a=d},
cT2:function cT2(d,e){this.a=d
this.b=e},
cT5:function cT5(d){this.a=d},
cT6:function cT6(d){this.a=d},
WH:function WH(d){this.a=d},
avv:function avv(){this.d=$
this.c=this.a=null},
cT_:function cT_(d){this.a=d},
cT0:function cT0(d){this.a=d},
cT1:function cT1(d){this.a=d},
We:function We(d){this.a=d},
auh:function auh(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cqF:function cqF(){},
cqL:function cqL(d){this.a=d},
cqM:function cqM(d){this.a=d},
cqN:function cqN(d){this.a=d},
cqK:function cqK(){},
cqO:function cqO(d){this.a=d},
cqP:function cqP(d){this.a=d},
cqJ:function cqJ(){},
cqQ:function cqQ(d,e){this.a=d
this.b=e},
cqI:function cqI(d,e){this.a=d
this.b=e},
cqG:function cqG(d,e){this.a=d
this.b=e},
cqR:function cqR(d){this.a=d},
cqH:function cqH(){},
cqS:function cqS(d){this.a=d},
ZN:function ZN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brr:function brr(){this.d=$
this.c=this.a=null},
eUF:function eUF(d,e){this.a=d
this.b=e},
eUG:function eUG(d){this.a=d},
eUH:function eUH(d,e){this.a=d
this.b=e},
a90:function a90(d,e){this.a=d
this.b=e},
E3:function E3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brp:function brp(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eUD:function eUD(d,e){this.a=d
this.b=e},
aua:function aua(d,e){this.c=d
this.a=e},
brq:function brq(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eUE:function eUE(d){this.a=d},
bro:function bro(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aK4:function aK4(){},
aK5:function aK5(){},
byL(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bK(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.oc(B.o.u(t),A.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fo7(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VE(A.dr(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMn(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hP().kA(85,1280,B.et),$async$aMn)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aMn)
case 8:r=e
if(J.a9(r)===0){u=null
w=1
break}q=C.fRL()
w=9
return A.b(C.caq(q,r),$async$aMn)
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
return A.i($async$aMn,v)},
aMJ(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aMJ=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.can(g)
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
return A.b($.a1().K0(p,!0,null,i).cJ(0,B.fE),$async$aMJ)
case 9:n=a1
w=10
return A.b(n.lS(),$async$aMJ)
case 10:m=a1
w=11
return A.b(J.aNs(m).hf(B.fI),$async$aMJ)
case 11:l=a1
J.aNs(m).p()
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
return A.i($async$aMJ,v)},
fo7:function fo7(){},
t4:function t4(d){this.a=d},
apv:function apv(d,e,f){this.c=d
this.d=e
this.a=f},
aBC:function aBC(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eu1:function eu1(d,e){this.a=d
this.b=e},
etT:function etT(d){this.a=d},
etU:function etU(d){this.a=d},
eu_:function eu_(d,e){this.a=d
this.b=e},
etZ:function etZ(d,e){this.a=d
this.b=e},
etW:function etW(d,e){this.a=d
this.b=e},
etV:function etV(d,e){this.a=d
this.b=e},
etX:function etX(d){this.a=d},
etY:function etY(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e){this.a=d
this.b=e},
etO:function etO(d,e){this.a=d
this.b=e},
etS:function etS(d){this.a=d},
etR:function etR(d,e){this.a=d
this.b=e},
etQ:function etQ(d){this.a=d},
eu2:function eu2(d,e){this.a=d
this.b=e},
eu3:function eu3(d,e){this.a=d
this.b=e},
etP:function etP(d,e){this.a=d
this.b=e},
h39(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.O(Date.now(),0,!1).a4().aa(),"project",v],x.N,x.z)},
fo8(d,e,f){var w=0,v=A.j(x.N),u
var $async$fo8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.aj(C.h39(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fo8,v)},
byN(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fo8(!0,d,e),$async$byN)
case 4:w=3
return A.b(r.apt(g,d,e.a),$async$byN)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dB.aF(B.Q.aj(C.h39(d,e,null),null))
u="NGMY_WS:"+B.jS.gcr().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byN,v)},
fWg(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fI3(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.a9(s)===0)return!1
if(J.cS(s,"NGMYWSSYNC2|"))return!0
if(J.cS(s,"NGMY_WS:"))return!0
if(J.eQ(s,t))return!0
if(J.cS(s,"{"))try{w=B.Q.aE(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hM6(d){var w,v,u,t=C.fWg(d)
if(t==null)return null
if(C.fI3(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.fI3(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.fI3(v))return v}return null},
fI2(d){var w,v,u,t,s,r=null,q=B.a.i(d)
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
t=C.fCM(A.Z(u,x.N,x.z))
return t}catch(s){return r}},
byM(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$byM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aps(t[1]),$async$byM)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fI2(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fI2(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byM,v)},
fI1(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l1(w,v,d.c,d.d,new A.O(Date.now(),0,!1))},
byj(){var w=0,v=A.j(x.o),u,t
var $async$byj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.F4(),$async$byj)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fI2(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byj,v)},
h40(d,e,f,g){return A.c0(B.K,null,new C.fwd(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fwd:function fwd(d,e,f){this.a=d
this.b=e
this.c=f},
ab0:function ab0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eu5:function eu5(d,e){this.a=d
this.b=e},
eu6:function eu6(d,e){this.a=d
this.b=e},
eu7:function eu7(d,e){this.a=d
this.b=e},
eu8:function eu8(d,e){this.a=d
this.b=e},
eu4:function eu4(d){this.a=d},
app:function app(d,e,f){this.c=d
this.d=e
this.a=f},
bgV:function bgV(){var _=this
_.c=_.a=_.e=_.d=null},
etJ:function etJ(d,e){this.a=d
this.b=e},
etK:function etK(d){this.a=d},
etL:function etL(d){this.a=d},
apu:function apu(d){this.a=d},
aBB:function aBB(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
etN:function etN(d){this.a=d},
etM:function etM(d){this.a=d},
hlS(d,e,f,g,h){return new C.Mb(h,g,d,e,f,null)},
aGl:function aGl(d,e){this.a=d
this.b=e},
Mb:function Mb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBD:function aBD(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
euv:function euv(){},
eur:function eur(d,e){this.a=d
this.b=e},
eus:function eus(d){this.a=d},
euc:function euc(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
eul:function eul(d,e){this.a=d
this.b=e},
eui:function eui(d,e){this.a=d
this.b=e},
euj:function euj(d,e){this.a=d
this.b=e},
euk:function euk(d,e,f){this.a=d
this.b=e
this.c=f},
eug:function eug(d,e,f){this.a=d
this.b=e
this.c=f},
eue:function eue(d){this.a=d},
euf:function euf(d){this.a=d},
euh:function euh(d){this.a=d},
euy:function euy(d){this.a=d},
eux:function eux(d){this.a=d},
euz:function euz(d){this.a=d},
euw:function euw(d){this.a=d},
eu9:function eu9(d){this.a=d},
eud:function eud(d,e){this.a=d
this.b=e},
euu:function euu(d,e){this.a=d
this.b=e},
eut:function eut(d,e){this.a=d
this.b=e},
euo:function euo(d){this.a=d},
eup:function eup(d){this.a=d},
euq:function euq(d,e){this.a=d
this.b=e},
eun:function eun(d,e){this.a=d
this.b=e},
eum:function eum(d,e,f){this.a=d
this.b=e
this.c=f},
btb:function btb(){},
zn(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ad("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aI(v,w,"_")},
adq(d,e,f){return C.hAZ(d,e,f)},
hAZ(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adq=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.an("String",e,f),$async$adq)
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
return A.i($async$adq,v)},
adp(d,e){return C.hAY(d,e)},
hAY(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adp=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adp)
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
return A.i($async$adp,v)},
hzN(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QO(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bvU(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bvU=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZA(q),$async$bvU)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aMJ(q,!1),$async$bvU)
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
return A.i($async$bvU,v)},
h9O(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
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
fCM(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d1(s,x.f)
w=A.cy(w,new C.cq3(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a5<G.E>")
r=A.A(new A.a5(w,new C.cq4(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bg(J.k(t==null?"":t))
return new C.l1(w,v,u,r,t==null?new A.O(Date.now(),0,!1):t)},
hED(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wh
case"female":case"f":return D.aep
default:return D.wC}},
h_S(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fM1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hED(v==null?j:J.k(v))
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
hEF(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Kf
case"viewer":return D.jZ
default:return D.rH}},
hEG(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
EV(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bx8(d,e){return B.a.i(e.toLowerCase())===C.EV(d,e)&&d.y!==D.jZ},
ti(d,e){var w,v=d.y
if(v===D.jZ)return!1
w=B.a.i(e.toLowerCase())
if(w===C.EV(d,e))return!0
if(v===D.Kf)return!0
v=d.e
return new A.J(v,A.fI7(),A.T(v).k("J<1,n>")).q(0,w)},
hE6(d){return J.dE(d,new C.f9E()).gH(0)},
fwA(d){var w=0,v=A.j(x.y),u,t
var $async$fwA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zv(d),$async$fwA)
case 3:u=t.rj(f,new C.fwB(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwA,v)},
bwT(d,e){var w=0,v=A.j(x.H),u,t
var $async$bwT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zv(d),$async$bwT)
case 3:t=g
if(J.rj(t,new C.f8Q(e))){w=1
break}if(C.hE6(t)>=2)throw A.P(A.b9("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bwT,v)},
ahY(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d1(n,x.f)
w=A.cy(w,new C.bIF(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a5<G.E>")
m=A.A(new A.a5(w,new C.bIG(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b4(u,new C.bIH(),x.N)
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
return new C.kl(l,w,v,!s,t,m,r,q,p,C.hEF(o==null?null:J.k(o)))},
h00(d){var w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.al(v,0,8)},
BA(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Py(d),$async$BA)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aw(),$async$BA)
case 4:t=f
w=5
return A.b(t.a3w(0),$async$BA)
case 5:w=6
return A.b(C.f1_(t,l),$async$BA)
case 6:s=f
if(J.cs(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aR(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fWP(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ob(l,n),$async$BA)
case 11:u=n
w=1
break
case 10:case 8:m=A.aR(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fWP(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ob(l,n),$async$BA)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BA,v)},
f1_(d,e){return C.hxl(d,e)},
hxl(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f1_=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aR(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zn(a9)))
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
break}m=A.aR(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zn(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aE(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fCM(A.Z(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aR(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zn(a9)+"_"+n))
i=C.hzN(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZA(h),$async$f1_)
case 17:g=b1
if(g!=null){i=i.QO(g)
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
case 8:J.PH(q,new C.f10())
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
return A.i($async$f1_,v)},
bxi(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Py(d),$async$bxi)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BA(r),$async$bxi)
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
return A.i($async$bxi,v)},
fWP(d){var w,v,u,t
try{w=B.Q.aE(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d1(w,x.f)
v=A.cy(v,new C.eXT(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a5<G.E>")
v=A.A(new A.a5(v,new C.eXU(),u),u.k("G.E"))
B.d.aZ(v,new C.eXV())
return v}catch(t){v=A.a([],x.D)
return v}},
ob(d,e){return C.hNQ(d,e)},
hNQ(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ob=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Py(b2),$async$ob)
case 3:a8=b5
if(J.a9(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aw(),$async$ob)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zn(a8)
p=A.aR(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b4(x.j.a(B.Q.aE(0,p,null)),new C.fp5(),a2).fG(0)
a2=J.b4(b3,new C.fp6(),a2).bZ(0,new C.fp7())
n=A.d8(a2,a2.$ti.k("G.E"))
a2=o,a2=A.ef(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eQ(n,m)?17:18
break
case 17:a5=C.zn(a8)
l=A.aR(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a68(l),$async$ob)
case 19:t=21
a5=C.zn(a8)
k=A.aR(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aE(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a68(a5==null?null:J.k(a5)),$async$ob)
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
return A.b(C.adp(r,"ngmy_worksheet_item_v3_"+C.zn(a8)+"_"+m),$async$ob)
case 29:w=30
return A.b(C.adp(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+m),$async$ob)
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
return A.b(C.bvU(h),$async$ob)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adq(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4,f),$async$ob)
case 40:g=i.QO(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adp(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4),$async$ob)
case 41:g=i.QO(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adp(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4),$async$ob)
case 42:case 34:a4=i.a
w=43
return A.b(C.adq(r,"ngmy_worksheet_item_v3_"+C.zn(a8)+"_"+a4,B.Q.aj(g.ad(),null)),$async$ob)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adq(r,"ngmy_worksheets_index_v3_"+C.zn(a8),B.Q.aj(q,null)),$async$ob)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eD(b3,new C.fp8(q))
a4=a3.$ti.k("cQ<1,a0<n,@>>")
a7=A.A(new A.cQ(a3,new C.fp9(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.adq(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.aj(a0,null)),$async$ob)
case 45:w=46
return A.b(J.h8U(r),$async$ob)
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
Jt(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Jt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BA(d),$async$Jt)
case 3:t=g
s=J.cB(t)
r=s.bg(t,new C.fwz(e))
if(r===-1)s.ck(t,0,e)
else s.m(t,r,e)
u=C.ob(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Jt,v)},
bx5(d,e){var w=0,v=A.j(x.H),u
var $async$bx5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BA(d),$async$bx5)
case 2:u=g
J.n_(u,new C.fa5(e))
w=3
return A.b(C.ob(d,u),$async$bx5)
case 3:return A.h(null,v)}})
return A.i($async$bx5,v)},
EX(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$EX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$EX)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aR(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aE(0,i,null)
if(x.j.b(t)){j=J.d1(t,x.f)
j=A.cy(j,new C.fcd(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a5<G.E>")
r=A.A(new A.a5(j,new C.fce(),s),s.k("G.E"))
B.d.aZ(r,new C.fcf())
k=r}}catch(h){}w=4
return A.b(C.eYB(d),$async$EX)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hxI(k,p,d)
j=A.T(o)
s=j.k("J<1,a0<n,@>>")
s=A.A(new A.J(o,new C.fcg(),s),s.k("ai.E"))
n=B.Q.aj(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OJ(d,o),$async$EX)
case 7:case 6:j=j.k("a5<1>")
m=A.A(new A.a5(o,new C.fch(d),j),j.k("G.E"))
if(m.length!==0)C.aLj(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$EX,v)},
foS(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$foS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OJ(d,e),$async$foS)
case 3:t=J.dE(e,new C.foT(d))
s=A.A(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLj(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$foS,v)},
a0q(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aw(),$async$a0q)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aR(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aE(0,l,null)
if(x.j.b(u)){m=J.d1(u,x.f)
m=A.cy(m,new C.fwu(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a5<G.E>")
s=A.A(new A.a5(m,new C.fwv(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pI(o,new C.fww(e))
if(B.a.i(e.x).length===0&&C.ti(e,d)){m=B.a.i(d.toLowerCase())
p=e.azY(e.y===D.jZ?D.jZ:D.rH,m)}else p=e
if(q===-1)J.oZ(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OJ(d,o),$async$a0q)
case 3:w=C.ti(p,d)?4:5
break
case 4:w=6
return A.b(C.aLi(C.EV(p,d),p),$async$a0q)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0q,v)},
aLs(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.EX(d),$async$aLs)
case 2:u=g
t=J.cB(u)
s=A.qC(t.eD(u,new C.f9N(e)))
t.bm(u,new C.f9O(e))
w=3
return A.b(C.OJ(d,u),$async$aLs)
case 3:w=s!=null&&C.bx8(s,d)?4:5
break
case 4:w=6
return A.b(C.eXX(e),$async$aLs)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLs,v)},
af9(d){var w=d.f,v=A.T(w).k("a5<1>")
w=A.A(new A.a5(w,new C.fwF(),v),v.k("G.E"))
return w},
fFP(d,e){var w,v=d.f,u=A.qC(new A.a5(v,new C.f9o(e),A.T(v).k("a5<1>")))
v=C.af9(d)
w=A.T(v).k("a5<1>")
v=A.A(new A.a5(v,new C.f9p(e,u),w),w.k("G.E"))
B.d.aZ(v,new C.f9q())
return v},
hEJ(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h42(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.fFP(d,u),new C.fwm(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hGc(d,e){var w
if(e==null||e.length===0)return 1
w=C.fFP(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fcZ(),A.T(w).k("J<1,I>")).fs(0,B.yK)+1},
hNJ(d){var w,v=C.af9(d)
if(v.length===0)return null
w=new A.a5(v,new C.foP(),A.T(v).k("a5<1>"))
if(!w.gah(0))return w.gI(0)
return B.d.gI(v)},
hEE(d){return A.E(["id",d.a,"name",d.b,"gender",C.h_S(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hG7(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.R(a0,x.P)
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
d=q.azT(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.czM(a1,w,a3.d,a2.y,s,a0,v)},
zv(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$zv)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aR(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aE(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d1(t,x.f)
p=A.cy(p,new C.fca(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a5<G.E>")
p=A.A(new A.a5(p,new C.fcb(),s),s.k("G.E"))
B.d.aZ(p,new C.fcc())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zv,v)},
aeX(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aeX=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rH:D.jZ
a7=C.EV(b2,b3)
w=2
return A.b(C.zv(b1),$async$aeX)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.bg(a8,new C.foN(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bwT(b1,b2),$async$aeX)
case 5:case 4:if(b0===-1){u=b2.azY(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
s=A.R(x.N,x.P)
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
s.m(0,m,l.azT(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bf<2>")
s=A.A(new A.bf(s,k),k.k("G.E"))
k=a5?D.rH:D.jZ
u=t.xD(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OJ(b1,a8),$async$aeX)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLi(B.a.i(b3.toLowerCase()),u),$async$aeX)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aeX,v)},
fXa(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.O(Date.now(),0,!1).a4().aa(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a0<n,@>>"),k=A.A(new A.J(m,C.h3h(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().aa(),"updatedAt",o],r,x.K),"createdAt",s.a4().aa(),"updatedAt",o],r,x.z)},
fXb(d,e){var w=new A.O(Date.now(),0,!1).a4().aa(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a0<n,@>>")
u=A.A(new A.J(u,C.h3h(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().aa(),"updatedAt",w],x.N,x.z)},
hvt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ahY(A.Z(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fI7(),A.T(j).k("J<1,n>")).bZ(0,new C.eYo())
t=A.A(j,j.$ti.k("G.E"))
if(u===v)s=D.rH
else s=B.d.q(t,u)?D.Kf:D.jZ
return w.azY(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ahY(A.Z(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d1(q,h)
h=A.cy(h,new C.eYp(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a5<G.E>")
o=A.A(new A.a5(h,new C.eYq(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b4(n,new C.eYr(),x.N).bZ(0,new C.eYs())
t=A.A(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rH
else s=B.d.q(t,u)?D.Kf:D.jZ
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
eYB(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eYB=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.a9(a0)===0){u=null
w=1
break}t=4
r=new C.eYF()
h=x.N
g=x.z
w=7
return A.b(A.iz(A.a([A.l7("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bD),r.$2(A.l7("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bD),"collaborator"),r.$2(A.l7("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bD),"public")],x.cl),x.U),$async$eYB)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.R(h,g)
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
h=A.cy(new A.bf(l,h),new C.eYC(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a5<G.E>")
l=A.A(new A.a5(h,new C.eYD(),l),l.k("G.E"))
B.d.aZ(l,new C.eYE())
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
return A.i($async$eYB,v)},
hxI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gah(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f1F(),v).bZ(0,new C.f1G())
t=A.d8(u,u.$ti.k("G.E"))
s=A.R(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.EV(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.jZ){m=q.e
m=!new A.J(m,A.fI7(),A.T(m).k("J<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.m(0,p,q)}for(j=j.gag(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hG7(l,v)
o=C.EV(k,w)
p=v.d
s.m(0,u,o===w?k.b6t(p,D.rH):k.b6t(p,v.y))}j=s.$ti.k("bf<2>")
j=A.A(new A.bf(s,j),j.k("G.E"))
B.d.aZ(j,new C.f1H())
return j},
OJ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$OJ)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b4(e,new C.f3H(),x.a)
s=A.A(s,s.$ti.k("ai.E"))
w=3
return A.b(u.an("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.aj(s,null)),$async$OJ)
case 3:return A.h(null,v)}})
return A.i($async$OJ,v)},
aLi(d,e){return C.hCx(d,e)},
hCx(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLi=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.ly("family_trees",A.a([C.fXa(e,d)],p),null,B.cy),$async$aLi)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.ly("family_trees",A.a([C.fXb(e,d)],p),null,B.cy),$async$aLi)
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
return A.i($async$aLi,v)},
aLj(d,e){return C.hCy(d,e)},
hCy(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a0<n,@>>")
m=n.k("ai.E")
l=A.A(new A.J(e,new C.f8c(d),n),m)
r=l
w=7
return A.b(A.ly("family_trees",r,null,B.cy),$async$aLj)
case 7:q=g
if(q){u=!0
w=1
break}k=A.A(new A.J(e,new C.f8d(d),n),m)
p=k
w=8
return A.b(A.ly("family_trees",p,null,B.cy),$async$aLj)
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
return A.i($async$aLj,v)},
eXX(d){return C.huS(d)},
huS(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eXX=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.P8("family_trees",A.E(["id",d],x.N,x.z),null,B.cy),$async$eXX)
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
return A.i($async$eXX,v)},
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
cq6:function cq6(){},
cq5:function cq5(){},
cq3:function cq3(){},
cq4:function cq4(){},
FY:function FY(d,e){this.a=d
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
ahX:function ahX(d,e){this.a=d
this.b=e},
f9E:function f9E(){},
fwB:function fwB(d){this.a=d},
f8Q:function f8Q(d){this.a=d},
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
bIJ:function bIJ(){},
bII:function bII(){},
bIF:function bIF(){},
bIG:function bIG(){},
bIH:function bIH(){},
f10:function f10(){},
eXT:function eXT(){},
eXU:function eXU(){},
eXV:function eXV(){},
fp5:function fp5(){},
fp6:function fp6(){},
fp7:function fp7(){},
fp8:function fp8(d){this.a=d},
fp9:function fp9(){},
fwz:function fwz(d){this.a=d},
fa5:function fa5(d){this.a=d},
fcd:function fcd(){},
fce:function fce(){},
fcf:function fcf(){},
fcg:function fcg(){},
fch:function fch(d){this.a=d},
foT:function foT(d){this.a=d},
fwu:function fwu(){},
fwv:function fwv(){},
fww:function fww(d){this.a=d},
f9N:function f9N(d){this.a=d},
f9O:function f9O(d){this.a=d},
fwF:function fwF(){},
f9o:function f9o(d){this.a=d},
f9p:function f9p(d,e){this.a=d
this.b=e},
f9q:function f9q(){},
fwm:function fwm(d){this.a=d},
fcZ:function fcZ(){},
foP:function foP(){},
fca:function fca(){},
fcb:function fcb(){},
fcc:function fcc(){},
foN:function foN(d){this.a=d},
eYo:function eYo(){},
eYp:function eYp(){},
eYq:function eYq(){},
eYr:function eYr(){},
eYs:function eYs(){},
eYF:function eYF(){},
eYG:function eYG(d){this.a=d},
eYC:function eYC(d){this.a=d},
eYD:function eYD(){},
eYE:function eYE(){},
f1F:function f1F(){},
f1G:function f1G(){},
f1H:function f1H(){},
f3H:function f3H(){},
f8c:function f8c(d){this.a=d},
f8d:function f8d(d){this.a=d},
cq7:function cq7(d,e){this.a=d
this.b=e},
cq8:function cq8(d,e){this.a=d
this.b=e},
aDE:function aDE(d,e,f){this.a=d
this.b=e
this.c=f},
b4L:function b4L(){this.b=this.a=0},
b4K:function b4K(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
brs:function brs(){},
vR(d,e){var w,v
if(d==null)return""
w=d.bP()
v=""+w.gcb()+"/"+w.gcq()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmE()),2,"0")+":"+B.a.aT(B.o.u(w.gEU()),2,"0")},
hlP(){var w,v=$.oW(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"WS"+B.d.fM(u)},
apq(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$apq)
case 3:if(!e){u=A.R(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bD),$async$apq)
case 8:r=e
if(r==null){u=A.R(x.N,x.z)
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
case 7:u=A.R(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apq,v)},
apr(d){return C.hlQ(d)},
hlQ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apr=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$apr)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$apr)
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
return A.i($async$apr,v)},
apt(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apt=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$apt)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hlP()
w=4
return A.b(C.apq(),$async$apt)
case 4:r=h
q=B.a.i(e)
p=B.dB.aF(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cM.gcr().aF(p),"usesRemaining",25,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(C.apr(r),$async$apt)
case 5:u=new A.YU("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apt,v)},
aps(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aps=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bW(),$async$aps)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apq(),$async$aps)
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
return A.b(C.apr(q),$async$aps)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aps,v)},
fRL(){var w=new A.O(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cA.aA(999999)},
hlR(d){var w,v,u,t,s,r,q
try{w=A.adO(d)
if(w==null)return d
v=w
if(J.Jz(v)>960||J.Jy(v)>960){s=v
r=J.Jz(v)>=J.Jy(v)?960:null
v=A.adN(s,J.Jy(v)>J.Jz(v)?960:null,B.Lv,r)}s=v
u=A.ajm(82).R9(s,B.xl)
if(J.a9(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.a4(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
caq(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$caq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hlR(e)
$.cam.m(0,s,t)
u=C.byP(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caq,v)},
aZA(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cS(l,"data:image")){u=null
w=1
break}t=4
r=J.eQ(l,",")?B.d.gai(J.l9(l,",")):l
q=B.cw.aF(r)
if(J.a9(q)===0){u=null
w=1
break}p=C.fRL()
w=7
return A.b(C.caq(p,q),$async$aZA)
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
return A.i($async$aZA,v)},
can(d){var w=0,v=A.j(x.T),u,t,s
var $async$can=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cap(s),$async$can)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gcr().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$can,v)},
a68(d){var w=0,v=A.j(x.H),u,t
var $async$a68=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h3a(d)
if(t==null){w=1
break}$.cam.W(0,t)
w=3
return A.b(C.byO(t),$async$a68)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a68,v)},
byP(d,e){return C.hM9(d,e)},
hM9(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$byP=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKh
w=7
return A.b(n==null?$.aKh=I.fET():n,$async$byP)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.mg(r,"thumbs","readwrite")
B.io.lL(J.me(p,"thumbs"),q,l)
w=8
return A.b(J.oY(p),$async$byP)
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
return A.i($async$byP,v)},
byO(d){return C.hM7(d)},
hM7(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byO=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKh
w=7
return A.b(o==null?$.aKh=I.fET():o,$async$byO)
case 7:r=f
q=J.mg(r,"thumbs","readwrite")
B.io.Eq(J.me(q,"thumbs"),m)
w=8
return A.b(J.oY(q),$async$byO)
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
return A.i($async$byO,v)}},D,Ae,Af,O,Ag,Ah,I,P,X,Ai
J=c[1]
A=c[0]
B=c[2]
Y=c[191]
G=c[171]
F=c[29]
E=c[181]
Z=c[109]
A_=c[108]
A0=c[159]
A1=c[122]
A2=c[190]
A3=c[35]
M=c[189]
A4=c[78]
H=c[84]
Q=c[128]
R=c[131]
S=c[202]
T=c[160]
A5=c[151]
A6=c[163]
U=c[158]
A7=c[62]
A8=c[68]
V=c[175]
A9=c[207]
Aa=c[28]
Ab=c[140]
K=c[153]
Ac=c[164]
Ad=c[205]
W=c[198]
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
P=c[206]
X=c[120]
Ai=c[94]
C.alu.prototype={}
C.aUX.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.baE(),f=h.x!=null&&h.y0(i).length===0
if(h.x!=null)w=f?B.aW:B.bS
else w=h.gRN()?B.bS:B.e2
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b4I,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.eiO,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h0,i,i,i),B.T,D.eKC,B.au,A.d(C.vR(new A.O(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eGP,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aRB,i,i,i,i,B.Vg,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fGI(h.d)
o=A.p(B.B,C.aUW(A.ffm(h.e,n),30),B.h,i,i,new A.o(B.lN,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eCm,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.by,D.eKT,B.aa,A.p(i,A.u(A.a([D.eZ8,B.by,A.d(A.zx(h.c),i,i,i,i,i,i,D.exD,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eU,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,p,q,i,i,B.n),i,i,i,i,K.acy,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMf("Original due",C.vR(h.r,!1))
n=j.aMf("Current due",C.vR(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.u(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGu(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zt,i,i,1/0),B.T,j.c6y(),B.P,j.bWc(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eLN,B.au,A.d(q,i,i,i,i,i,i,D.eBJ,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaBy()){q=A.m(14)
o=A.H(B.ct,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.f_j,B.P,A.bu(A.m(12),A.ec(new A.a3(1/0,88,A.b2(i,i,i,new A.TP(h.ax,B.M,D.em8,!0,3.5,i),B.as),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Ds,i,i,i)],s))}p.push(B.ay)
p.push(D.eT7)
return A.p(i,A.u(A.a([r,new A.C(B.acB,A.u(p,B.ad,i,B.e,B.j,0,B.p),i)],s),B.ad,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMf(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4g,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eyA,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c6y(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6E(B.e2,u,"Not paid yet")
w=t.y0(null).length
v=w===0?B.aW:B.bS
return this.a6E(v,u,C.vR(t.x,!0))},
bWc(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6E(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6E(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4g,u,u,u)
v=A.T(d).k("J<1,h9>")
v=A.A(new A.J(d,new C.bXf(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.cb(B.bH,v,B.bw,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6E(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4g,w,w,w),1),new A.dl(1,B.cj,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b6T.prototype={
a6(d,e){new A.TP(this.b,B.M,e,!0,3.5,null).a6(d,e)},
ao(d){return d.b!==this.b}}
C.alB.prototype={
S(){return new C.azC(A.a([],x.bp))},
gdS(){return this.c}}
C.azC.prototype={
Z(){this.a0()
this.Hh()},
Hh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_E(t.a.c),$async$Hh)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dxQ(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hh,v)},
aO6(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aO,s=A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bm:B.bv).j(0.22)
w=A.m(10)
return A.bl(v,new A.b1(4,r,new A.ax(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b1(4,w,new A.ax((this.a.d.a?B.bm:B.bv).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b1(4,A.m(10),D.aPf),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aO5(d){return this.aO6(d,null)},
NB(d){return this.ca6(d)},
ca6(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NB=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EI:B.et
w=7
return A.b(new A.hP().AY(72,900,900,n),$async$NB)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$NB)
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
return A.i($async$NB,v)},
aW4(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aO,o=A.m(10),n=A.H((q?B.bm:B.bv).j(0.18),B.r,1)
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
q=A.a([q,B.ab,u,A.bG(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.cu,s.a.d.a?B.bm:B.bv,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c6))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ks,D.beg,r,r,r)},
BT(d){return this.btk(d)},
btj(){return this.BT(null)},
btk(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BT=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
i=a3?null:A.fGI(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.uR?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",a4,new C.dxz(),new C.dxA(a2,t,a5,r,new C.dxB(a2,t),o,n,j),B.eD,!0,x.y),$async$BT)
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
break}if(f.length===0||e<=0){t.c.F(x.q).f.P(D.esq)
w=1
break}a0=a2.d
if(a0==null){t.c.F(x.q).f.P(D.er5)
w=1
break}a1=A.ffm(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.uR?"male":"female"
w=7
return A.b(A.af8(a3,A.fOw(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BT)
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
if(!a3.A(0,A.bT(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)))a5.cBS(a2.a)
w=8
return A.b(A.af8(t.a.c,a5),$async$BT)
case 8:case 5:w=9
return A.b(t.Hh(),$async$BT)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BT,v)},
aOG(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.M:B.aO
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bm:B.bv).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aUW(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aO:B.aG
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b4,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ac)},
Qa(d){return this.cr_(d)},
cr_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",s,new C.dxT(),new C.dxU(t,d),B.hG,!0,x.y),$async$Qa)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.O(s,0,!1)
case 4:w=7
return A.b(A.af8(t.a.c,d),$async$Qa)
case 7:w=8
return A.b(t.Hh(),$async$Qa)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qa,v)},
Mi(d,e){return this.bDO(0,e)},
bDO(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kN(s,"Cancel","Delete",e.b+" \xb7 "+A.zx(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mi)
case 3:if(!g){w=1
break}w=4
return A.b(C.f9U(t.a.c,e.a),$async$Mi)
case 4:w=5
return A.b(t.Hh(),$async$Mi)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mi,v)},
abU(d){return this.c4a(d)},
c4a(d){var w=0,v=A.j(x.H),u=this,t
var $async$abU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c0(B.K,null,new C.dxN(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$abU)
case 2:return A.h(null,v)}})
return A.i($async$abU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dLJ
w=J.dE(m.d,new C.dxV())
v=A.A(w,w.$ti.k("G.E"))
w=J.dE(m.d,new C.dxW())
u=A.A(w,w.$ti.k("G.E"))
t=B.d.cI(v,0,new C.dxX())
w=A.m(18)
s=m.a.d.a
r=s?D.c7C:D.as7
q=A.H(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.bBv,B.h,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.av,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.X,!0,A.m(12),A.aH(!1,A.m(12),!0,D.dLb,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dxY(m),l,l,l,l,l,l,l),B.h,B.cW,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cni("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zx(t)
r=A.a([A.p(l,A.u(A.a([s,B.aa,A.B(A.a([o,B.ab,A.D(m.b0X(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.acv,l,l,l),B.ay],p)
if(J.ci(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bm:B.bv).j(0.12),B.r,1)
n=A.p(l,D.bwA,B.h,l,l,new A.o(B.cW.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.aa,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bgG,l,l,1/0))}else{w=m.gc9p()
s=A.A(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.bij,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.ad,l,B.e,B.j,0,B.p)},
b0X(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bm:B.bv).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bm:B.bv,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aO:B.aG
return A.p(u,A.u(A.a([q,B.by,A.d(f,u,1,B.Z,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cni(d,e){return this.b0X(!1,d,e)},
c9q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y0(j).length,h=d.b9Q()
if(d.x!=null){w=d.y0(j).length
v=w===0?B.cW:B.bS}else if(d.gRN())v=B.bS
else{if(h)w=B.cW
else w=k.a.d.a?B.bm:B.bv
v=w}if(d.x!=null){w=d.y0(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vR(u,!1)}else{u.toString
t="Paid "+C.vR(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vR(w,!1)+" \xb7 "+i+" missed":"Due "+C.vR(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRN()&&d.x==null)s=B.bS.j(0.35)
else s=(k.a.d.a?B.bm:B.bv).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.G,B.w.j(0.04),B.cG,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lN
o=A.H(d.gRN()&&d.x==null?B.bS.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fGI(d.d)
o=A.p(B.B,A.d4(C.aUW(A.ffm(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aO:B.aG
m=x.p
n=A.a([new A.dl(1,B.cj,A.d(p,j,1,B.Z,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBy())B.d.v(n,A.a([B.ez,A.V(B.KE,B.cW.j(0.8),j,j,j,14)],m))
p=A.D(A.u(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d5,A.d(t,j,1,B.Z,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zx(d.c)
l=k.a.d.a?B.aO:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.X,!0,j,A.aH(!1,q,!0,new A.C(S.acf,A.B(A.a([o,B.ba,p,B.ab,A.u(A.a([n,B.by,A.V(B.ek,(k.a.d.a?B.bm:B.bv).j(0.5),j,j,j,18)],m),B.dE,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dxP(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ac),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d7,j,j,j,j)}}
C.mM.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().aa()],x.N,x.z)},
b6F(d,e,f){return new C.mM(this.a,e,d,f)}}
C.FX.prototype={
xz(d,e,f,g,h,i,j,k,l,a0,a1){var w=this,v=j==null?w.a:j,u=a0==null?w.b:a0,t=k==null?w.c:k,s=e==null?w.d:e,r=f==null?w.e:f,q=a1==null?w.f:a1,p=h==null?w.r:h,o=g==null?w.w:g,n=l==null?w.x:l,m=d==null?w.y:d
return new C.FX(v,u,t,s,r,q,p,o,n,m,i==null?w.z:i)},
azN(d){var w=null
return this.xz(w,w,w,w,d,w,w,w,w,w,w)},
b6D(d,e,f){var w=null
return this.xz(d,w,w,w,w,w,w,e,w,f,w)},
cyp(d){var w=null
return this.xz(w,w,w,w,w,d,w,w,w,w,w)},
cyy(d){var w=null
return this.xz(w,w,w,w,w,w,w,w,d,w,w)},
cxK(d){var w=null
return this.xz(w,w,w,d,w,w,w,w,w,w,w)},
cyA(d){var w=null
return this.xz(w,w,w,w,w,w,w,w,w,w,d)},
cxH(d){var w=null
return this.xz(w,w,d,w,w,w,w,w,w,w,w)},
cxC(d){var w=null
return this.xz(w,d,w,w,w,w,w,w,w,w,w)},
Ej(d){var w=null
return this.xz(w,w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z],x.N,x.z)},
cvA(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bIE(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.L(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cJ(d.h(0,n))).length!==0?B.a.i(A.cJ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cJ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AM.ge9(D.AM))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_A)
q=l.$2("frame",D.a_5)
l=l.$2("texture",D.a_0)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cJ(d.h(0,"author"))):o
return this.xz(p,u,t,q,r,A.te(d.h(0,"ribbon"))?A.Ey(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.X5.prototype={
S(){return new C.awJ(A.a([],x.I),D.Ke)},
gdS(){return this.c}}
C.awJ.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yt(0,1)
w=$.at()
v.z=new A.ao(B.aq,w)
v.Q=new A.ao(B.aq,w)
v.kp()
w=v.a
C.bxf(w.c,w.d).bw(new C.cZZ(v),x.fL)},
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
return A.b(C.J2(s.c,s.d),$async$kp)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.cZN(t,r))
t.as6()
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
gaoM(){var w,v=this
if(!J.ci(v.d)){w=v.r
w=w<0||w>=J.a9(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
as6(){var w,v,u=this.gaoM(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saR(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saR(0,w==null?"":w)},
c2B(d){this.n(new C.cZK(this,d))
this.as6()},
LF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mM(B.o.u(1000*Date.now()),"Untitled page","",new A.O(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aN3(r.c,r.d,s),$async$LF)
case 3:w=4
return A.b(t.kp(),$async$LF)
case 4:if(t.c==null||J.ci(t.d)){w=1
break}q=J.pI(t.d,new C.cZn(s))
p=q>=0?q:J.a9(t.d)-1
t.n(new C.cZo(t,p))
t.as6()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A2(p+1,B.co,B.ko),$async$LF)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LF,v)},
DC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaoM()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aN3(o.c,o.d,new C.mM(s,r,q,new A.O(p,0,!1))),$async$DC)
case 3:w=4
return A.b(t.kp(),$async$DC)
case 4:if(t.c==null){w=1
break}t.n(new C.cZO(t))
case 1:return A.h(u,v)}})
return A.i($async$DC,v)},
Mj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaoM()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.cZu(r),s,null,!0,!0,x.y),$async$Mj)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bx1(s.c,s.d,r.a),$async$Mj)
case 4:t.n(new C.cZv(t))
w=5
return A.b(t.kp(),$async$Mj)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RQ(B.o.D(t.r+1,0,J.a9(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mj,v)},
xk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DC(),$async$xk)
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
return A.b(C.P0(s,r.r,o,p,q),$async$xk)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).K(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h3D(s,r.x,r.r),$async$xk)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.J2(s.c,s.d),$async$xk)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.G(l,new C.mM(""+(m+k),q,B.a.i(j.b),new A.O(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zG(r.c,r.d,l),$async$xk)
case 11:w=12
return A.b(t.kp(),$async$xk)
case 12:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xk,v)},
Z5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DC(),$async$Z5)
case 5:case 4:if(t.c==null){w=1
break}s=t.gDW(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dN(D.xs,new C.cZL(t),new C.cZM())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m0("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gT(o)
p.push(new F.m0(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fIi(o,new F.qG(s,r,"",p,new F.tR(q.d,null,null,null,null,"","","")),null),$async$Z5)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Z5,v)},
US(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$US=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(D.b_Z,null,new C.cZw(t),r,!0,!0,!0,D.eie,!1,!1,x.e),$async$US)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cZx(t,s))
r=t.a
w=4
return A.b(C.a0l(r.c,r.d,s),$async$US)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A2(0,B.dU,B.nY)
case 1:return A.h(u,v)}})
return A.i($async$US,v)},
bIP(d){var w=d.bP(),v=B.a.aT(B.o.u(w.gcb()),2,"0"),u=B.a.aT(B.o.u(w.gcq()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gDW(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bQH()
if(r.e)w=D.a7w
else if(J.ci(r.d)){w=r.y
v=r.gDW(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.ex5,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a3(q,330,new A.C(W.adv,new C.Wn(w,v,0,q),q),q),B.bs,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ju.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bs],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aJ(q,A.p(q,D.eiE,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.uH,B.n),q,q,q,q,B.Vq,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcuL(),q,q,q,q,q,q,!1,B.af))
w.push(B.T)
w.push(A.hf(D.bsT,D.f3K,r.gaIc(),q))
B.d.v(u,w)}w=A.as(A.cg(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.em,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.a9(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ju.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dJ:B.yI
u=A.u(A.a([new A.C(D.bg_,w,q),A.D(A.He(v,new C.cZX(r),J.a9(r.d)+1,q,r.gc2A(),u,B.aY),1),r.bw6()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cf(q,D.a9u,new A.am(B.V,q,B.aX,B.q,A.a([D.aER,A.br(!0,A.u(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bQH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cs(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.NO(B.dO,"AI",h.gbu5(),!0))
if(h.a.f)f.push(new C.NO(B.nq,"Cover",h.gbEn(),!1))
if(J.cs(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.NO(B.rW,"Print",h.gcbl(),!1))
if(h.a.f&&J.cs(h.d)&&h.r>=0){v=h.w
u=v?B.hg:B.iZ
t=v?"Save":"Edit"
f.push(new C.NO(u,t,v?h.gchi():new C.cZH(h),!1))}if(h.a.f)f.push(new C.NO(B.hH,"Add page",h.gaIc(),!1))
v=A.m(22)
u=A.H(E.iQ.j(0.85),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.w.j(0.5),B.cv,16),new A.aa(0,B.G,E.iQ.j(0.12),B.J,18)],x.V)
s=x.p
r=A.B(A.a([A.aJ(g,A.p(g,D.bsL,B.h,g,g,new A.o(B.w.j(0.3),g,A.H(E.iQ.j(0.6),B.r,1),g,g,g,B.a5),g,30,g,g,g,g,g,30),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.cZI(h),g,g,g,g,g,g,!1,B.af),A.D(new A.C(B.fi,A.eX(B.B,A.d(h.gDW(0),g,1,g,g,!1,g,D.ewD,g,g,g),B.h,B.e8),g),1),D.emR],s),B.m,g,B.e,B.j,0,g,g)
q=x.O
p=A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.a8(B.a1,B.a7,B.x,A.a([B.K,E.iQ.j(0.7),B.K],q),g,g),B.n),g,1,g,g,g,g,g,g)
o=A.a([],s)
for(n=f.length,m=0;m<f.length;f.length===n||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d4I
else{k=new A.b3(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],q)
i=new A.ax(E.iQ.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.ju,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c2(i,i,i,i),new A.bv(k,k,k,k),g,new A.a8(B.a1,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ju.j(0.85)
o.push(new A.bF(1,B.bn,A.aJ(B.c4,A.u(A.a([k,B.by,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.af),g))}return A.p(g,A.u(A.a([r,new A.C(B.u8,p,g),A.B(o,B.m,g,B.e,B.j,0,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.h,g,g,new A.o(g,g,u,v,t,D.aje,B.n),g,g,g,D.beI,B.lo,g,g,g)},
yO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DC(),$async$yO)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a_T(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.cZp(t,p),s,null,!0,!0,x.N),$async$yO)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xk(),$async$yO)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cq(),$async$yO)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.DZ("Swahili (Kiswahili)",!0),$async$yO)
case 18:w=16
break
case 17:w=19
return A.b(t.crz(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yO)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yO,v)},
WI(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.iQ.j(0.3),B.r,1),r=x.p
return new A.C(B.cH,A.aH(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uH,B.a5),w,42,w,w,w,w,w,42),B.ba,A.D(A.u(A.a([A.d(f,w,w,w,w,w,w,A4.a3V,w,w,w),A.d(g,w,w,w,w,w,w,E.a3M,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZJ(d,h),w,w,w,w,w,w,w),w)},
Cq(){return this.bIj()},
bIj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cq=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.cZA(r),a7,null,!0,!0,x.ei),$async$Cq)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.A(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.at())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.cZB(o),a7,null,!0,!0,x.H).f4(new C.cZC(a6))
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
for(a1=0;a1<8;++a1){i=D.xs[a1]
J.ch(j,i.a)}w=8
return A.b(C.ael(a0,a7,new C.cZD(o),d,l,e,j),$async$Cq)
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
J.aNv(l,0)
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
a7=j.b6F(m.b.h(0,a4).b,a7,new A.O(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zG(j.c,j.d,l),$async$Cq)
case 11:w=12
return A.b(r.kp(),$async$Cq)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xs[a1].a)
a5=l.cvA(j,12,a7)
l=r.a
w=15
return A.b(C.a0l(l.c,l.d,a5),$async$Cq)
case 15:if(r.c!=null)r.n(new C.cZE(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A2(0,B.dU,B.nY)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.F(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b_(a3?A.ckL("Undo",new C.cZF(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cq,v)},
DZ(d,e){return this.crA(d,e)},
crz(d){return this.DZ(d,!1)},
crA(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$DZ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.A(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.at())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.cZQ(a0),k,null,!0,!0,x.H).f4(new C.cZR(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ch(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a05(m,new C.cZS(a0)),$async$DZ)
case 10:w=8
break
case 9:w=11
return A.b(C.byG(new C.cZT(a0),m,a2),$async$DZ)
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
J.aNv(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.F(x.q).f
k=q
o.P(A.b_(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.a9(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b6F(J.q(p,g).b,j.a,new A.O(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zG(k.c,k.d,o),$async$DZ)
case 12:w=13
return A.b(r.kp(),$async$DZ)
case 13:o=r.c
if(o==null){w=1
break}o=o.F(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(A.ckL("Undo",new C.cZU(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DZ,v)},
bw6(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cZq(v):u
r=A.aF(u,u,u,u,A.V(D.boA,s?D.ju:B.be,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cs(v.d)&&!v.w&&v.r>=0)s=A.hf(A.V(B.uj,B.D5,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.D5,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbDX(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ju.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.as(s,u,u,u),1)
w=t<J.a9(v.d)?new C.cZr(v):u
return A.br(!0,new A.C(D.bfO,A.B(A.a([r,s,A.aF(u,u,u,u,A.V(B.ek,t<J.a9(v.d)?D.ju:B.be,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.X9.prototype={
S(){return new C.baL(new A.ao(B.aq,$.at()))}}
C.baL.prototype={
ga_c(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
gbH6(){var w,v=this.ga_c()
A:{if("cover"===v){w=D.cCM
break A}if("book"===v){w=D.cyZ
break A}w=D.cYM
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.iQ.j(0.5),n=x.p,m=A.B(A.a([D.d4J,B.av,D.bkY,A.aF(q,q,q,q,B.l0,q,q,q,new C.d0p(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jO(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d0q(r),r.ga_c()==="page",q,q,q,q))
if(r.a.d)l.push(A.jO(q,q,q,D.eZS,q,new C.d0r(r),r.ga_c()==="book",q,q,q,q))
l.push(A.jO(q,q,q,D.eOd,q,new C.d0s(r),r.ga_c()==="cover",q,q,q,q))
l=A.cb(B.bH,l,B.bw,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bl(q,new A.b1(4,A.m(16),B.W),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kd,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ae,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a6,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbH6(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mG(q,B.c.j(0.08),new A.w(s,q,B.H3,q,q,q,q,q,q,q,q,q),B.hj,new C.d0t(r,s),q,q,q,q))}return A.ev(q,E.z8,A.cg(A.u(A.a([m,B.T,D.f1N,B.ar,l,B.aa,k,B.P,A.cb(B.bH,w,B.bw,6,6),B.ay,A.dk(D.bsQ,D.f2y,new C.d0u(r,d),A.bk(B.b0,q,q,q,q,B.ol,q,q,new A.b5(A.m(16),B.W),q,q,q)),B.au,D.eYl],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.fv,q,q,B.ah),q,q,q,D.ade,B.cX,q,new A.b5(p,new A.ax(o,1.4,B.r,-1)),q)}}
C.X7.prototype={
S(){return new C.awK(A.a([],x.Y))},
gdS(){return this.c}}
C.acb.prototype={}
C.awK.prototype={
Z(){this.a0()
this.kp()},
kp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.P4(p.c,p.d),$async$kp)
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
return A.b(C.bxf(r.c,q),$async$kp)
case 6:j=e
i=J
w=7
return A.b(C.J2(t.a.c,q),$async$kp)
case 7:m.push(new l.acb(k,j,i.a9(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.d_d(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
b27(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Oe(d,e){return this.c48(0,e)},
c48(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).cs(A.eH(new C.d_c(u,e),!0,null,x.y)),$async$Oe)
case 2:t=g
w=3
return A.b(u.kp(),$async$Oe)
case 3:if(t===!0&&u.c!=null)u.c.F(x.q).f.P(D.aHY)
return A.h(null,v)}})
return A.i($async$Oe,v)},
E1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.F(x.q).f.P(D.aHU)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adH(s.c,s.d),$async$E1)
case 5:q=e
w=6
return A.b(t.kp(),$async$E1)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Oe(0,B.d.kU(t.d,new C.d_h(q))),$async$E1)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.P0(p,s.f,r,n,o),$async$E1)
case 10:m=e
w=11
return A.b(t.kp(),$async$E1)
case 11:if(m&&t.c!=null)t.c.F(x.q).f.P(D.aHY)
case 1:return A.h(u,v)}})
return A.i($async$E1,v)},
NJ(d,e){return this.cf6(0,e)},
cf6(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.d_g(t,e),s,null,!0,!0,x.y),$async$NJ)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0j(s.c,s.d,e.a),$async$NJ)
case 4:w=5
return A.b(t.kp(),$async$NJ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NJ,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bw9(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.iQ.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aJ(n,new A.fM(0.7142857142857143,A.p(n,A.u(A.a([D.d4K,B.aa,D.dKS,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ju.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b4,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcuH(),n,n,n,n,n,n,!1,B.af))}w=A.m(22)
v=A.H(E.iQ.j(0.85),B.r,1.6)
s=A.aJ(n,A.p(n,D.bAl,B.h,n,n,new A.o(B.w.j(0.3),n,A.H(E.iQ.j(0.6),B.r,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_i(d),n,n,n,n,n,n,!1,B.af)
r=A.m(14)
q=B.w.j(0.3)
p=A.H(E.iQ.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.ba,D.blh,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.ewg,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h0,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.aje,B.n),n,n,n,Ag.UY,D.bdX,n,n,n)
if(o.e)k=D.a7w
else k=k.length===0?D.aWj:A.cj(new C.d_j(k))
return A.cf(n,D.a9u,new A.am(B.V,n,B.aX,B.q,A.a([D.aER,A.br(!0,A.u(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bw9(d){var w,v,u=this,t=null,s=u.b27(d),r=d.c,q=x.p,p=A.a([A.bV(0,A.eX(B.B,new A.a3(300,420,new C.Wn(d.b,s,r,t),t),B.h,B.dn),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aJ(t,A.p(t,D.bzF,B.h,t,t,new A.o(B.w.j(0.55),t,A.H(B.be,B.r,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_a(u,d),t,t,t,t,t,t,!1,B.af),t,t,t,6,6,t))
w=A.d(s,t,1,B.Z,t,t,t,D.evT,t,t,t)
v=r===1?"page":"pages"
return A.aJ(t,A.u(A.a([new A.fM(0.7142857142857143,new A.am(B.V,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ju.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_b(u,d),t,t,t,t,t,t,!1,B.af)}}
C.NO.prototype={}
C.Wn.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dN(D.xs,new C.cyQ(m),new C.cyR()),j=m.c,i=D.AM.h(0,j.e),h=A.aX(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m2:B.b4
v=new C.cyS(h)
i=A.a([new A.aa(0,B.G,B.w.j(0.6),D.dIV,28)],x.V)
u=x.p
t=A.a([A.bV(0,A.b2(l,l,l,new C.b83(j.x,h,l),B.as),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.a1,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b3(3,3)
t.push(new A.cE(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bv(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adw,8,0.85,2.2),v.$4(D.biC,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adw,8,0.85,2.4))
else if(r==="corners")t.push(A.bV(0,new A.C(D.biy,A.b2(l,l,l,new C.b7V(h,l),B.as),l),0,0,0))
r=A.V(D.arq[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.Z,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ap0,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.aa,p,B.aa,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cz,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.Z,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bV(0,new A.C(D.bj1,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aDz(l),D.em2),l,l,l,46,0,l))
return A.p(l,A.bu(D.a6d,new A.am(B.V,l,B.a9,B.q,t,l),B.ap),B.h,l,l,new A.o(l,l,l,D.a6d,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b83.prototype={
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
C.b7V.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a1(),k=A.U(),j=this.b
k.r=j.j(0.9).gt(0)
k.b=B.aj
k.c=2.4
k.d=B.bZ
for(w=e.a,v=e.b,v=[D.eeW,new A.d7([w,0,-1,1]),new A.d7([0,v,1,-1]),new A.d7([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
C.tz.prototype={}
C.WG.prototype={
S(){return new C.b81()}}
C.b81.prototype={
gns(){var w=this.d
return w===$?this.d=this.a.c:w},
gDW(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ao(new A.bb(w.b,B.b_,B.aL),$.at())}return v},
gax6(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ao(new A.bb(w.c,B.b_,B.aL),$.at())}return v},
gann(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ao(new A.bb(w.y,B.b_,B.aL),$.at())}return v},
p(){var w=this,v=w.gDW(0),u=v.R$=$.at()
v.O$=0
v=w.gax6()
v.R$=u
v.O$=0
v=w.gann()
v.R$=u
v.O$=0
w.a2()},
anY(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jO(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cSh(this,f,u),e===u,s,s,s,s))}return A.cb(B.bH,r,B.bw,6,8)},
atl(d){var w=null,v=B.c.j(0.07)
return A.bl(w,new A.b1(4,A.m(14),B.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l7,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gns(),a0=f.gDW(0),a1=a0.a.a,a2=f.gax6(),a3=a2.a.a,a4=f.gann(),a5=d.b6D(a4.a.a,a3,a1)
a1=x.n
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a3(190,260,A.eX(B.B,new A.a3(270,370,new C.Wn(a5,d,f.a.e,e),e),B.h,B.dn),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atl("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSG(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atl("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSH(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xs[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.be
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c2(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aJ(e,A.u(A.a([p,B.d5,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSI(f,t),e,e,e,e,e,e,!1,B.af))}v=A.cb(B.bH,v,B.bw,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.b3(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eN:B.K,2,B.r,-1)
q.push(A.aJ(e,A.p(e,A.V(D.arq[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c2(o,o,o,o),new A.bv(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSJ(f,n),e,e,e,e,e,e,!1,B.af))}q=A.cb(B.bH,q,B.bw,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atl("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSK(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mb,e,e,e)
m=A.a([],w)
for(l=D.AM.gdH(D.AM),l=l.gag(l);l.C();){k=l.gT(l)
j=A.aX(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eN:B.be
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c2(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aJ(e,A.u(A.a([j,B.by,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSL(f,k),e,e,e,e,e,e,!1,B.af))}m=A.cb(B.bH,m,B.bw,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mb,e,e,e)
k=f.gns()
return new A.C(new A.M(0,0,0,a3.f.d),A.br(!0,new A.d2(new A.aW(0,1/0,0,a1.a.b*0.92),A.cL(A.a([D.eXP,B.aa,d,B.aN,a0,B.T,a2,B.ay,D.f2m,B.P,v,B.ay,D.eXY,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.m8(e,9,""+B.k.U(f.gns().f),36,18,new C.cSM(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mb,e,e,e),B.ar,f.anY(D.a_A,f.gns().r,new C.cSN(f),D.d0T),B.aa,A.d("BORDER",e,e,e,e,e,e,H.mb,e,e,e),B.ar,f.anY(D.a_5,f.gns().w,new C.cSO(f),D.d0Y),B.aa,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mb,e,e,e),B.ar,f.anY(D.a_0,f.gns().x,new C.cSQ(f),D.d2l),B.ar,A.it(e,B.b0,e,B.ag,e,new C.cSR(f),e,e,e,D.eSH,f.gns().z),B.bs,A.bI(D.eWL,new C.cSS(f,a6),A.bk(B.b0,e,e,e,e,B.ol,e,e,new A.b5(A.m(16),B.W),e,e,e))],w),e,O.ad3,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDz.prototype={
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
u.sav(D.bFC.aC(0,new A.af(0,0,0+w,0+v)))
d.b4(t,u)},
ao(d){return!1}}
C.bdd.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a1()
w=A.U()
w.sav(D.bEL.aC(0,new A.af(0,0,a3,a4)))
a5.bp(new A.af(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f5()
u.dZ(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.cCL[u.aA(9)]
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
e.r=E.iQ.j(0.55).gt(0)
d=e.M()
w.drawRect(A.cz(new A.af(h,j,g,j+2)),d)
d.delete()
j=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.r=E.iQ.j(0.4).gt(0)
d=j.M()
w.drawRect(A.cz(new A.af(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aA(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.sav(D.bEc.aC(0,new A.af(0,r,a3,q)))
d=p.M()
w.drawRect(A.cz(new A.af(0,r,a3,q)),d)
d.delete()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.w.j(0.5).gt(0)
p.z=B.jg
d=p.M()
w.drawRect(A.cz(new A.af(0,q,a3,q+14)),d)
d.delete()}w=A.U()
w.r=D.aZn.j(0.72).gt(0)
a5.bp(new A.af(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.U()
a4.sav(new A.bS(B.B,0.5,B.x,a0,0,A.a([D.b4o.j(0.22),B.K],t),a0,a0).aC(0,A.c1(new A.v(w,a2),a1)))
a5.aw(new A.v(w,a2),a1,a4)},
ao(d){return!1}}
C.b6h.prototype={
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.c,n=B.a.i(o.c),m=A.ad("[ \t]{2,}",!0,!1,!1,!1),l=A.aI(n,m," ")
n=x.p
m=A.a([],n)
for(w=3;w>=1;--w){v=-w
m.push(new A.cE(14,w*2,v*2.2,v*2,p,p,new A.kz(new A.o(A.aq(D.ju,D.b7Z,w/4),p,new A.c2(B.W,new A.ax(B.w.j(0.12),1,B.r,-1),B.W,B.W),B.I5,p,p,B.n),B.b7,p,p),p))}v=x.V
u=A.a([new A.aa(0,B.G,B.w.j(0.35),B.aAG,8)],v)
t=A.a([],n)
for(w=0;w<5;++w){s=new A.b3(2,2)
t.push(A.p(p,p,B.h,p,p,new A.o(E.iQ.j(0.6),p,p,new A.bv(s,s,s,s),p,p,B.n),p,14,p,p,p,p,p,3))}u=A.p(p,A.u(t,B.m,p,B.qv,B.j,0,B.p),B.h,p,p,new A.o(p,p,p,D.aP_,u,D.bFA,B.n),p,p,p,p,p,p,p,14)
v=A.a([new A.aa(0,B.G,B.w.j(0.4),B.dl,18)],v)
t=A.an(p,A.b2(p,p,p,new C.aDz(p),D.elY),p,p,p,26,-2,p)
s=o.d
r=q.x
if(q.f)o=A.u(A.a([A.aK(p,B.U,!1,p,!0,B.q,p,A.aL(),q.r,p,p,p,p,p,2,A.bl(p,B.ep,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Page title",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!1,p,B.ae,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.eJ_,!0,B.a6,p,B.am,p,p,p,p),A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.45),p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.T,A.D(A.aK(p,B.U,!1,p,!0,B.q,p,A.aL(),q.w,p,p,p,p,p,2,A.bl(p,B.ep,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Write your family story here\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.eAw,!0,B.a6,B.yb,B.am,p,p,p,p),1)],n),B.ad,p,B.e,B.j,0,B.p)
else{o=A.a([A.d(o.b,p,p,p,p,p,p,D.eIT,p,p,p),B.au,A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,11,B.cz,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.P,A.B(A.a([A.D(A.p(p,p,B.h,D.IP.j(0.35),p,p,p,1,p,p,p,p,p,p),1),new A.C(B.fi,A.d("\u2766",p,p,p,p,p,p,A.l(p,p,D.IP.j(0.7),p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.D(A.p(p,p,B.h,D.IP.j(0.35),p,p,p,1,p,p,p,p,p,p),1)],n),B.m,p,B.e,B.j,0,p,p),B.ay],n)
if(l.length===0)o.push(A.d("This page is blank. Tap the pencil to write.",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.4),p,p,p,p,p,p,p,p,16,p,p,p,p,1.7,!0,p,p,p,p,p,p,p,p),p,p,p))
else o.push(A.VE(A.dr(A.a([A.dr(p,p,p,p,p,p,p,p,p,D.eDr,B.a.al(l,0,1)),A.dr(p,p,p,p,p,p,p,p,p,p,B.a.aV(l,1))],x.R),p,p,p,p,p,p,p,p,p,p),p,p,A.l(p,p,G.iR.j(0.93),p,p,p,p,p,p,p,p,16.5,p,p,p,p,1.72,!0,p,p,p,p,p,p,p,p),p))
o=A.cg(A.u(o,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,p,p,p,B.ah)}m.push(A.B(A.a([u,A.D(A.p(p,A.bu(B.I5,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.C(D.bi5,A.u(A.a([A.D(o,1),new A.C(B.iX,A.d("\u2014 "+q.d+" \u2014",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,1,p,p,p,p,p,p),B.L,p,p),p)],n),B.ad,p,B.e,B.j,0,B.p),p),A.an(0,A.bQ(p,new A.o(p,p,p,p,p,new A.a8(B.a1,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),p,p),B.n),B.b7),p,p,0,p,0,22)],n),p),B.ap),B.h,p,p,new A.o(p,p,p,B.I5,v,D.bG3,B.n),p,p,p,p,p,p,p,p),1)],n),B.ad,p,B.e,B.j,0,p,p))
return new A.am(B.V,p,B.a9,B.q,m,p)}}
C.amH.prototype={
S(){return new C.aAc(A.a([],x._))},
bl(){return this.r.$0()},
p_(){return this.w.$0()},
gdS(){return this.c}}
C.aAc.prototype={
Z(){var w,v
this.a0()
this.v_()
w=this.a
v=w.c
if(v.length!==0)C.a4T(v,w.e,w.d.w)},
uP(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fIl(r,t.e,!1,s.w,new C.dKJ(u),null,s),$async$uP)
case 2:w=3
return A.b(u.v_(),$async$uP)
case 3:return A.h(null,v)}})
return A.i($async$uP,v)},
Yi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fIl(r,t.e,!0,s.w,new C.dKI(u),null,s),$async$Yi)
case 2:w=3
return A.b(u.v_(),$async$Yi)
case 3:return A.h(null,v)}})
return A.i($async$Yi,v)},
v_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zv(q.a.c),$async$v_)
case 7:p=e
if(q.c!=null)n=q.e||J.cs(p)
else n=!1
if(n)q.n(new C.dKL(q,p))
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
return A.b(C.EX(q.a.c).cJ(0,B.oT),$async$v_)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dKM(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dKN(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v_,v)},
MN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.F(s).f.P(D.epv)
w=3
return A.b(C.EX(t.a.c),$async$MN)
case 3:r=e
w=4
return A.b(C.foS(t.a.c,r),$async$MN)
case 4:q=e
w=5
return A.b(C.EX(t.a.c),$async$MN)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dKH(t,p))
o=t.c.F(s).f
s=A.d(q?"Family trees synced \u2014 "+J.a9(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(null,null,null,q?B.dq:B.cL,null,B.q,null,s,null,B.lQ,null,null,null,null,null,null,null,null,null,null))
t.a.p_()
case 1:return A.h(u,v)}})
return A.i($async$MN,v)},
Gx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hO0(l),$async$Gx)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hiE(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWm(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Gx)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h00(r)
o=Date.now()
n=t.a.c
m=new C.kl(l,r.toUpperCase(),p,!0,B.U,D.AB,new A.O(o,0,!1),0,n,D.rH)
w=5
return A.b(C.a0q(n,m),$async$Gx)
case 5:w=6
return A.b(t.v_(),$async$Gx)
case 6:t.a.bl()
t.a.p_()
if(t.c==null){w=1
break}t.Da(m)
case 1:return A.h(u,v)}})
return A.i($async$Gx,v)},
Da(d){return this.c65(d)},
c65(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Da=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zv(u.a.c),$async$Da)
case 2:n=l.qC(k.dE(f,new C.dKK(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hk(m,new C.amB(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Da)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0q(u.a.c,o),$async$Da)
case 6:case 5:w=7
return A.b(u.v_(),$async$Da)
case 7:u.a.p_()
return A.h(null,v)}})
return A.i($async$Da,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=new C.t4(p)
if(r.e)return A.as(A.mi(q,p?B.bm:B.bv,q,q,q,q,q,q,q,q),q,q,q)
if(J.ci(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.X,!0,q,A.aH(!1,q,!0,A.p(q,D.btW,B.h,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cC,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc5b(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.E3(A.p(q,A.u(A.a([u,B.aN,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bI(D.f3v,r.gaMb(),A.bk(B.bR,q,q,q,q,q,Af.Vt,q,new A.b5(A.m(12),B.W),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bi2,q,q,1/0),15,B.ag,1.05,D.a4Y,q)}w=J.a9(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.xc,B.aS,q,q,q,q),q,q,q,new C.dKP(r),q,q,q,q,"Sync family trees with database",q))
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.x4,B.aS,q,q,q,q),q,q,q,r.gacy(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dk(E.aiq,D.eMb,r.gaMb(),A.bk(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.a9(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.aa)
u.push(new C.E3(r.crE(J.q(r.d,s),o),14,B.ag,1,D.a4Y,q))
B.d.v(w,u)}return A.u(A.a([p,B.ay,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
crE(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dT:B.cg).j(0.55),B.r,1),r=A.a([new A.aa(0,B.G,B.w.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.bsZ,B.h,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galk(),m=d.d?"":" \xb7 Public",l=d.y===D.jZ?" \xb7 View only":"",k=x.p
l=A.D(A.u(A.a([o,B.by,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.X,!0,w,A.aH(!1,q,!0,new A.C(B.bA,A.B(A.a([p,B.ba,l,A.V(B.Ko,v?B.bm:B.bv,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dKO(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amB.prototype={
S(){return new C.aA9(A.a([],x._),A.aZ(x.N),A.b3X())},
bl(){return this.r.$0()},
gdS(){return this.c}}
C.aA9.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9D()
w=u.a
v=w.c
if(v.length!==0)C.a4T(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.at()
w.O$=0
this.a2()},
a07(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a07=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wN("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dK9(r),s,null,!0,!0,x.y),$async$a07)
case 3:if(e!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dKa(t,r))
w=4
return A.b(t.uR(),$async$a07)
case 4:t.a.bl()
t.wN(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
chX(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.x1$.push(new C.dK4(w,f,d,e))},
aOl(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.de()
u.dY(w,v,0,1)
u.jf(q,q,1,1)
this.w.st(0,u)},
b4l(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ew(new Float64Array(16))
q.dT(r)
w=q.Br()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.de()
t.dY(r,u,0,1)
t.jf(v,v,1,1)
t.dY(-r,-u,0,1)
t.ie(0,q)
s.st(0,t)},
a9D(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zv(u.a.c),$async$a9D)
case 2:t=s.qC(r.dE(e,new C.dJD(u)))
if(t!=null&&u.c!=null)u.n(new C.dJE(u,t))
return A.h(null,v)}})
return A.i($async$a9D,v)},
wN(d){var w=null,v=this.c
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
return A.b(C.fIl(o,t,!1,r,new C.dJS(u),q.a,s),$async$uP)
case 2:n=A
m=J
w=3
return A.b(C.EX(u.a.c),$async$uP)
case 3:p=n.qC(m.dE(e,new C.dJT(u)))
if(p!=null&&u.c!=null)u.n(new C.dJU(u,p))
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
return A.b(C.a0q(t,s),$async$uR)
case 2:return A.h(null,v)}})
return A.i($async$uR,v)},
ZL(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wN("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hP9(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZL)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HX()
t.n(new C.dK3(t,r))
w=4
return A.b(t.uR(),$async$ZL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZL,v)},
Yv(){return this.c67()},
c67(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wN("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.L(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dK1(r,new C.t4(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Yv)
case 3:if(e!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dK2(r,t))
w=4
return A.b(t.uR(),$async$Yv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yv,v)},
TK(d){return this.bth(d)},
bth(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ti(r,t.a.c)){t.wN("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dJr(t,d),r,null,!0,!0,x.P),$async$TK)
case 3:s=f
if(s==null){w=1
break}t.HX()
t.n(new C.dJs(t,s))
w=4
return A.b(t.uR(),$async$TK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TK,v)},
a0t(d){return this.ctL(d)},
ctL(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.L(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.dKc(u,d,new C.t4(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0t)
case 2:return A.h(null,v)}})
return A.i($async$a0t,v)},
c2v(d){var w=this,v=w.d
v===$&&A.c()
if(C.ti(v,w.a.c))w.Mt(d)
else w.a0t(d)},
af0(d,e){return this.clK(d,e)},
clK(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$af0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.L(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.dK6(new C.t4(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$af0)
case 3:case 1:return A.h(u,v)}})
return A.i($async$af0,v)},
GC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.jZ?3:5
break
case 3:w=6
return A.b(C.fwA(t.a.c),$async$GC)
case 6:s=e
o=t.a
r=C.fPU(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.af0(!s,!r),$async$GC)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bx8(o,t.a.c)){t.wN("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kN(o,"Cancel","Remove",q.y===D.jZ?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GC)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLs(t.a.c,t.d.a),$async$GC)
case 11:t.a.bl()
o=t.c
if(o==null){w=1
break}A.iC(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GC,v)},
a7e(d){return this.bE4(d)},
bE4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ti(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.bf(s,new C.dJt(p))){o=A.T(s)
p.a=A.qC(new A.cQ(new A.a5(s,new C.dJu(d),o.k("a5<1>")),new C.dJv(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.HX()
t.n(new C.dJw(t,s,d,q))
w=3
return A.b(t.uR(),$async$a7e)
case 3:t.wN(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7e,v)},
Mt(d){return this.bG4(d)},
bG4(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ti(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0t(d),$async$Mt)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.dJA(t,d),r,null,!0,!0,x.P),$async$Mt)
case 6:s=f
if(s==null){w=1
break}t.HX()
t.n(new C.dJB(t,s))
w=7
return A.b(t.uR(),$async$Mt)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mt,v)},
crY(){var w=this,v=w.d
v===$&&A.c()
if(!C.ti(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dKb(w))
w.uR()},
Wu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bx8(n,t.a.c)){t.wN("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.L(n)
s=$.at()
r=new A.ao(B.aq,s)
q=t.d.e
p=A.bh(new A.J(q,t.gc10(),A.T(q).k("J<1,n>")).bZ(0,new C.dJN()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dJO(t,new C.t4(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Wu)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dJP(t,p))
w=4
return A.b(t.uR(),$async$Wu)
case 4:t.wN("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Wu,v)},
c11(d){return B.a.i(d.toLowerCase())},
c4X(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ti(v,w)
t=r.d
s=C.hEI(t)
C.hO4(q,t.b,u,C.hEH(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t4(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a5(l,new C.dKj(),A.T(l).k("a5<1>")).gH(0)
l=n?B.bV:B.iP
v=A.V(B.Wv,n?B.bm:B.bv,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zx,A.aH(!1,o,!0,new A.C(B.hs,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dKk(p,d),o,o,o,o,o,o,o),o),new A.C(B.mx,p.bQI(m),o)],u)
if(p.d.y===D.jZ){t=B.qx.j(0.15)
s=A.m(12)
r=A.H(B.qx.j(0.45),B.r,1)
q=C.EV(p.d,p.a.c)
v.push(new A.C(B.wq,A.p(o,A.B(A.a([D.by5,B.av,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a0,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iC,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.ti(p.d,p.a.c)&&p.e.length!==0)u.push(new C.I8("Undo",B.uA,p.gcrX(),m,o,o))
u.push(new C.I8("Family Book",D.bnH,p.gc4W(),m,B.re,o))
if(C.ti(p.d,p.a.c))u.push(new C.I8("Display settings",Ai.Ex,p.gc66(),m,B.aW,o))
u.push(new C.I8("Sync",B.x4,p.gacy(),m,o,o))
t=p.d
if(t.y===D.jZ||C.bx8(t,p.a.c)){t=p.d.y===D.jZ?"Remove shared tree":"Delete tree"
u.push(new C.I8(t,B.e4,p.gbEe(),m,B.fK,o))}if(C.ti(p.d,p.a.c))u.push(new C.I8("Add member",B.uv,new C.dKl(p),m,B.bR,o))
v.push(new A.C(O.acH,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galk()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cj(new C.dKm(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?K.Wz:U.Kp,o,o,o,o,o)
v.push(A.as(A.hf(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dKn(p),o),o,o,o))}return A.cf(o,l,A.br(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bQI(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.aa(0,B.G,B.ff.j(0.35),B.dl,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.wY,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.X,!0,m,A.aH(!1,m,!0,A.p(m,D.bB4,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cC,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacy(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.Z,m,m,m,D.eyZ,m,m,m)
r=r.galk()
p=n.d.galk()===1?"member":"members"
o=x.p
p=A.a([s,B.ba,A.D(A.u(A.a([q,B.by,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a0,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.ti(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.byh,m,m,m,n.gcfr(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j_:B.lY
r=r?"Private":"Public"
r=A.D(n.arw(q,"Privacy",r,n.a.d.w?n.gcr3():m),1)
q=A.D(n.arw(B.x5,"Tree code",n.d.c,new C.dJC(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.aa,A.B(A.a([r,B.ab,q,B.ab,A.D(n.arw(D.bpq,"Collaborators",p,n.gbV1()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.jZ){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.X,!0,A.m(999),A.aH(!1,A.m(999),!0,new A.C(B.fF,A.B(A.a([A.V(B.o8,B.c,m,m,m,14),B.ez,A.d("View only",m,m,m,m,m,m,B.aJ8,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bu(u,new A.am(B.V,m,B.a9,B.q,A.a([t,new A.C(B.Dv,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.h,m,m,new A.o(m,m,m,w,v,D.bEf,B.n),m,m,m,m,m,m,m,1/0)},
arw(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.X,!0,A.m(14),A.aH(!1,A.m(14),!0,new A.C(D.bjL,A.u(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.Z,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.v4,A.d(f,w,1,B.Z,w,w,w,L.aIU,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)}}
C.bat.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gah(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.baw(s,t),new A.ap(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d_n(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d_o(this),A.T(r).k("J<1,r>")))
return new A.C(B.rE,new A.a3(w,v,new A.am(B.V,t,B.a9,B.h,u,t),t),t)}}
C.Ij.prototype={}
C.Ef.prototype={}
C.bav.prototype={
gbct(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFE.prototype={}
C.baw.prototype={
bFN(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
bFL(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d_I())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.bf(a0,new C.d_J(f))
t=new A.J(a0,new C.d_K(f),A.T(a0).k("J<1,Q>")).bZ(0,new C.d_L()).cI(0,1/0,B.vH)
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
w.b=B.aj
w.d=B.bZ
w.e=B.fk
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bFL(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.M()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bFN(d,w,q.a,q.b)}},
ao(d){return d.b!==this.b}}
C.bea.prototype={
gbZT(){var w=this.c
if(B.a.i(w.y).length!==0)return D.cYL
switch(w.c.a){case 0:return D.cvd
case 1:return D.cFo
case 2:return D.cTS}},
gbZW(){var w=this.c,v=C.h_r(w.w),u=C.h_r(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=t.gbZT(),p=t.c,o=I.by_(p.f),n=t.gbZW(),m=x.V,l=A.a([new A.aa(0,B.G,B.d.gai(q).j(0.35),B.cG,10)],m),k=r?B.aG:B.c,j=A.H(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.rx(B.B,s,B.ci,B.bM,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.B,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a8(B.a1,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hM(w,B.ap),B.h,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.DK,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eIx,s,s,s),B.h,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.bjP,s,s,s),s,s,s,-6,-4,s))}k=r?B.d3:B.c
j=A.m(8)
w=A.H(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.G,B.w.j(r?0.3:0.06),B.dH,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.d3,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bv,s,s,s,s,s,s,s,s,7.5,s,s,B.a0,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aJ(s,new A.a3(84,112,A.u(A.a([new A.am(B.V,s,B.a9,B.h,l,s),B.au,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aQO,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bjZ,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.af)}}
C.b9C.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.a1()
w=A.U()
v=this.b
u=v?B.c:D.b0M
w.r=u.j(v?0.05:0.09).gt(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.M()
t.drawCircle(r,s,1,q)
q.delete()}},
ao(d){return d.b!==this.b}}
C.brz.prototype={
B(d){var w=this,v=null,u=new C.eVc(w),t=w.c,s=t?B.d3:B.c,r=A.m(12),q=u.$3(B.hH,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Eq,"Zoom out",w.e)
return A.aD(!1,B.X,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),u.$3(B.ag0,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dt,v,v,v,B.ac)}}
C.bhr.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.H(B.bR,B.r,2),s=w.e,r=x.p
t=A.aJ(v,A.p(v,A.u(A.a([A.V(s?K.Wz:U.Kp,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eEY,v,v,v)],r),B.m,v,B.b4,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.af)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eD0,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.ewS(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a3(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XJ.prototype={
S(){return new C.ayB()},
bl(){return this.Q.$0()},
gdS(){return this.w}}
C.ayB.prototype={
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
if(t==null)w=C.hGc(w.r,w.f)
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
NK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fPU(p.y,p.w)
w=3
return A.b(A.kZ(t.a.w,B.G7),$async$NK)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWm(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NK)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hiF(p.y,p.w)
t.a.bl()
case 5:w=7
return A.b(Ah.F5(78,800),$async$NK)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.deZ(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NK,v)},
bZV(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
s=v.azT(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).K(s)},
a6R(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a6R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.deY(r),s,null,!0,!0,x.y),$async$a6R)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).K(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a6R,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===B.H,i=new C.t4(j),h=l.a.e,g=A.T(h).k("a5<1>"),f=A.A(new A.a5(h,new C.df7(l),g),g.k("G.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bin,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hI(A.aH(!1,k,!0,new A.C(B.lT,A.V(B.e4,B.nV,k,k,k,17),k),B.cC,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbAW(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.j8:B.iz
t=I.by_(l.as)
if(l.as==null)s=A.V(B.o1,j?B.bm:B.bv,k,k,k,40)
else s=k
s=A.as(A.aJ(k,new A.am(B.V,k,B.a9,B.q,A.a([A.hg(u,t,s,k,42),A.an(0,A.hg(B.bR,k,D.bs1,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gbZS(),k,k,k,k,k,k,!1,B.af),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayD(t,"Full name",B.lU,1,1,i,B.lA)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.T,new C.be8(i,u,new C.df8(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bc3],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.df9(),A.T(o).k("J<1,ep<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bc5],q)
B.d.v(q,new A.J(f,new C.dfb(),A.T(f).k("J<1,ep<n?>>")))
o=A.u(A.a([t,B.ar,new C.aaE(i,r,"Who is their parent?",p,new C.dfc(l),k,o),B.ay,n,B.ar,new C.aaE(i,m,"Who is their spouse / partner?",q,new C.dfd(l),k,o)],v),B.ad,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayD(q,"Birth date",D.af8,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayD(m,"Birth place",B.WO,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayD(n,"Date of death (if deceased)",D.ahg,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayD(p,"Occupation",B.XX,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.B,k,B.a9,B.q,w,k),B.ay,s,B.bs,new C.aaF(i,"Identity",u,k),B.aa,new C.aaF(i,"Family links",o,k),B.aa,new C.aaF(i,"Life details",A.u(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ayD(r,"Notes",B.kw,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.aa,new C.ayC(i,"Child order",l.c6h(l.at),new C.dfe(l),new C.dff(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fFP(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dfg(l):k
B.d.v(r,A.a([B.T,new C.ayC(i,"Visible in tree",u,w,new C.dfh(l),k)],v))}r.push(B.T)
w=j?B.j8:B.iz
u=A.m(14)
t=A.H(j?B.dT:B.cg,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.it(k,B.bR,k,B.ag,k,new C.dfi(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.acj,k,k,k))
r.push(B.bs)
w=j?B.aO:B.aG
j=j?B.dT:B.cg
r.push(A.B(A.a([A.D(A.dU(B.mW,new C.dfa(d),A.d9(k,k,k,k,k,k,k,k,k,w,k,k,B.ca,k,new A.b5(A.m(14),B.W),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.ba,A.D(A.bI(D.eiM,l.gbZU(),A.bk(B.aS,k,k,0,B.c,k,B.ca,k,new A.b5(A.m(14),B.W),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.eo(B.fT,k,B.ag,h,new A.a3(420,k,A.cg(A.u(r,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),k),D.ada,k,B.acz,new A.b5(g,B.W),k,k)},
c6h(d){var w=B.o.J(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.J(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaF.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j8:B.iz,s=A.m(16)
return A.u(A.a([new A.C(D.adz,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dT:B.cg,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.be9.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dT:B.cg).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a0,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bl(u,B.ep,u,B.ua,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bm:B.bv,u,u,u,u,u,u,u,u,u,u,u,B.cp,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ae,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a6,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaE.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dT:B.cg).j(0.85),B.r,1),q=A.V(B.qg,u?B.bm:B.bv,v,v,v,v),p=A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a0,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Ci(A.a25(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,v,v,v,B.cp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lS,v,v,v)}}
C.be8.prototype={
B(d){var w=new C.dfj(this)
return A.B(A.a([w.$3(D.Wh,"Male",B.L9),B.ab,w.$3(D.aep,"Female",B.KV),B.ab,w.$3(D.wC,"Other",B.mC)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayC.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.j8:B.iz,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aEH(u,B.Eq,w.f,v),B.bp,new C.aEH(u,B.hH,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aEH.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bm:B.bv).j(0.4)
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,new A.a3(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ac)}}
C.aaG.prototype={
bJn(d){switch(d.a){case 0:return B.bR
case 1:return B.bz
case 2:return B.cS}},
bJo(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aSs(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
z8(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
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
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.zv,p,p,1/0)},
ab6(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j8:B.iz,s=A.m(16),r=A.H(v?B.dT:B.cg,B.r,1)
return A.u(A.a([new A.C(D.adz,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h42(r,q),o=q.c,n=t.bJn(o),m=I.by_(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.jZ?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bm:B.bv,s,s,s,s,s,s,s,s,12,s,s,B.a0,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.aa(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.hg(u,m,m==null?A.V(B.o1,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ef,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bJo(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mw,s,s,s),s,s,s)
u=x.p
i=A.a([t.z8("Full name",i,B.lU)],u)
if(p>0)i.push(t.z8("Child order","#"+p,B.L1))
r=A.a([h,B.au,r,B.aN,l,B.T,v,B.bs,t.ab6("Identity",i),B.aa,t.ab6("Life details",A.a([t.z8("Birth date",q.w,D.af8),t.z8("Birth place",q.x,B.WO),t.z8("Date of death",q.y,D.ahg),t.z8("Occupation",q.z,B.XX)],u)),B.aa,t.ab6("Family links",A.a([t.z8("1. Parent",t.aSs(q.d),B.DX),t.z8("2. Spouse",t.aSs(q.e),B.KU)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.aa,t.ab6("Notes",A.a([t.z8("Notes",q,B.kw)],u))],u))
r.push(B.bs)
r.push(A.bI(B.Hg,new C.dft(d),A.bk(B.aS,s,s,s,s,s,B.ca,s,new A.b5(A.m(14),B.W),s,s,s)))
return A.ev(s,k,new A.d2(B.ld,A.cg(A.u(r,B.ad,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zD,s,s,B.ah),s),s,s,s,B.Dz,B.cX,s,new A.b5(j,B.W),s)}}
C.I8.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bm:B.bv
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.wv,A.hI(A.aD(!1,B.X,!0,A.m(8),A.aH(!1,A.m(8),!0,new A.a3(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.amE.prototype={
eE(){var w,v,u=this,t=x.N,s=A.R(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().aa())
w=u.c
v=A.T(w).k("J<1,a0<n,@>>")
w=A.A(new A.J(w,new C.c2T(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iD(w,new C.c2U(),t,x.U))
return s}}
C.amF.prototype={
S(){return new C.aAb(A.a([],x.bF))},
gd6(){return this.c}}
C.aAb.prototype={
Z(){this.a0()
this.I3()},
I3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c2X(t.a.c),$async$I3)
case 3:r=e
w=4
return A.b(C.zv(t.a.c),$async$I3)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rj(q,new C.dKw(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dKx(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I3,v)},
xj(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IM(d,e){return this.cuh(d,e)},
cuh(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dKB(q,e))
t=3
w=6
return A.b(d.$0(),$async$IM)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dKC(q))
$.eI.lU()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IM,v)},
Vl(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$Vl)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKt(t),"Preparing download\u2026"),$async$Vl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vl,v)},
Vp(d){return this.bHt(d)},
bHt(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$Vp)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKu(t,d),"Preparing file\u2026"),$async$Vp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vp,v)},
acV(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$acV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wf.c2().Ks(B.NT,B.rI,!0),$async$acV)
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
case 6:u=A.F4()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acV,v)},
W_(d){return this.bRy(d)},
bRy(d){var w=0,v=A.j(x.H),u=this
var $async$W_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IM(new C.dKv(u,d),"Restoring family trees\u2026"),$async$W_)
case 2:return A.h(null,v)}})
return A.i($async$W_,v)},
VZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.acV(),$async$VZ)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.W_(s),$async$VZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VZ,v)},
a_A(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$a_A)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKA(t),"Creating QR code\u2026"),$async$a_A)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_A,v)},
a_b(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BB()){t.xj("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).cs(A.eH(new C.dKy(),!0,null,x.N)),$async$a_b)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.W_(r),$async$a_b)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_b,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=o?B.z0:B.iP,m=o?D.aaX:B.aO,l=o?B.aI:B.cg,k=o?B.aO:B.aG,j=new C.d_M(n,m,l,k,o?B.bP:B.bv)
l=A.aF(p,p,p,p,A.V(B.es,k,p,p,p,20),p,p,p,new C.dKE(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eA(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d_k(!0,B.j1,B.b5,B.b5,q.r?p:q.gcly(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gchS()
t.push(A.D(C.d_k(!s,B.iF,B.b0,B.bE,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d_k(!1,B.hh,B.aS,B.bR,q.r?p:q.gbHm(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d_k(!1,M.x7,B.aZ,B.aM,q.r?p:q.gbRv(),j,s,"Upload backup file"),1))
l=A.a([new C.bau(v,l,p),B.ka,new C.a9X(j,"QR restore",p),B.T,t,B.d1,new C.a9X(j,"Backup files",p),B.T,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.a9(q.d)>1&&q.a.f==null){v=A.a([B.ka,new C.a9X(j,"One tree",p),B.T],u)
B.d.v(v,J.b4(q.d,new C.dKF(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cL(l,p,B.Vp,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.G,B.w.j(o?0.3:0.1),B.dl,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.br(!0,A.p(p,A.B(A.a([K.aHC,B.ba,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zC,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cf(w,n,new A.am(B.V,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d_M.prototype={}
C.bau.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.G,B.aS.j(0.32),B.kG,28)],x.V)
t=A.an(p,A.V(B.rZ,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bAD,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nC,A.D(A.u(A.a([D.eN4,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bH9,B.n),p,p,p,p,p,p,p,p)}}
C.a9X.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bas.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b5.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.G,B.b5.j(0.1),B.cG,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.X,!0,q,A.aH(!1,o,!0,A.eq(A.d4(new A.C(E.V2,A.u(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qd,q,q,q),B.aa,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.by,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cp,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)}}
C.bax.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.eq(new A.C(B.eE,A.B(A.a([A.p(v,D.bzQ,B.h,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qd,v,v,v),B.ba,A.D(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hh,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Y3.prototype={
S(){return new C.aAa()},
gd6(){return this.c}}
C.aAa.prototype={
Z(){this.a0()
this.a6q()},
a6q(){var w=0,v=A.j(x.H),u=this,t
var $async$a6q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aYZ(u.a.c,B.Bb),$async$a6q)
case 2:t=e
if(u.c!=null)u.n(new C.dKo(u,t))
return A.h(null,v)}})
return A.i($async$a6q,v)},
aei(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aei=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dKp(q))
t=4
p=A.fRw(q.a.d,B.Bb)
if(p==null){n=A.b9("Could not read this QR code.")
throw A.P(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aoR(n.e,m,l,B.Bb,p,n.f),$async$aei)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dKq(q))
q.c.F(x.q).f.P(D.eqE)
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
if(q.c!=null)q.n(new C.dKr(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aei,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=p?B.iT:B.oO,n=p?B.hm:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eA(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f0v,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pi(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.u(A.a([B.P,u,B.bs,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b4,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ak:B.bB,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gchA()
if(u)u=B.GS
else u=A.V(r.e===!0?B.hg:B.af7,q,q,q,q,q)
w=A.a([w,B.aa,v,B.aa,new A.a3(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.d9(q,q,q,q,q,q,q,q,q,B.aS,q,B.fL,q,q,q,new A.ax(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.iX,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a3(1/0,q,A.bI(B.yi,new C.dKs(d),A.bk(B.aS,q,q,q,q,B.fL,q,q,q,q,q,q)),q))
return A.cf(m,o,new A.C(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Y4.prototype={
S(){return new C.bfz(A.y7(B.wb,B.n2,B.t2))}}
C.bfz.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cf(A.eA(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eUg,w,w,w,1,w,!0),B.w,A.y6(this.d,B.bM,new C.dKG(this,d)),w,!1,!1,w,w)}}
C.aUV.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Nq,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lh.prototype={}
C.a3W.prototype={
S(){return new C.bfi(null,null)}}
C.bfi.prototype={
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
this.boR()},
B(d){var w,v,u=this,t=B.d.dN(D.a_v,new C.dwY(u),new C.dwZ())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cns(A.c4(new A.h2(A.a([w,v],x.dS)),new C.dx_(u,t),null),!0)}}
C.bfh.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWl(d,e)
break
case"house":p.lv(d,e,D.cJC)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.a1()
t=A.U()
t.r=B.c.j(0.18+v*0.12).gt(0)
d.aw(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lA(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zQ(d,e,12)
p.wW(d,e,B.kO,5,14)
break
case"grocery":p.c6Z(d,e)
break
case"calculator":p.c6G(d,e)
break
case"lumber":p.c76(d,e)
break
case"kitchen":p.c71(d,e)
break
case"landscape":p.lv(d,e,D.cK2)
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
w.r=B.fp.j(0.85).gt(0)
d.b4(s,w)
p.zQ(d,e,8)
p.wW(d,e,B.iB,4,18)
break
case"plumbing":p.c7f(d,e)
break
case"electrical":p.lv(d,e,D.cTd)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.a1()
u=A.U()
u.r=B.c.j(q*0.12).gt(0)
d.bp(new A.af(0,0,0+e.a,0+e.b),u)
p.lA(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lA(d,e,B.nb.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zQ(d,e,10)
break
case"store":p.c7o(d,e)
break
case"paint_remodel":p.c7a(d,e)
break
case"roofing":p.c7h(d,e)
break
case"warehouse":p.c7v(d,e)
break
case"vehicles":p.c7t(d,e)
break
case"farm":p.c6T(d,e)
break
case"restaurant":p.c7g(d,e)
break
case"tools":p.c7r(d,e)
break
case"wallet":p.c7u(d,e)
break
case"concrete":p.c6M(d,e)
break
case"blueprint":p.c6E(d,e)
break
default:p.aWl(d,e)}},
lv(d,e,f){var w,v=new A.af(0,0,0+e.a,0+e.b)
$.a1()
w=A.U()
w.sav(new A.a8(B.ax,B.aC,B.x,f,null,null).aC(0,v))
d.bp(v,w)},
lA(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gef()/2-h
$.a1()
w=A.U()
w.b=B.aj
w.c=2.4
w.r=f.gt(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.c1(q,p)
r=w.M()
v.drawArc.apply(v,[A.cz(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wW(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gt(0)
p=q.M()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zQ(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.J(s*0.17,0.9)
p=B.k.J(s*0.23,0.85)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.c.j(0.2+r*0.6).gt(0)
n=o.M()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWl(d,e){var w,v=this
v.lv(d,e,D.cS8)
w=v.c
v.lA(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lA(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bFH(d,e,B.hD,w)
v.wW(d,e,B.c.j(0.7),6,8)},
bFH(d,e,f,g){var w,v,u,t,s,r,q,p
$.a1()
w=A.U()
w.r=f.j(0.35).gt(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.M()
s.drawRect(A.cz(new A.af(16,q,t,q+3)),p)
p.delete()}},
c6Z(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.c1p)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.J(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.J(s,2)
$.a1()
l=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.r=D.cI2[B.o.J(s,4)].j(0.85).gt(0)
k=l.M()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lA(d,e,B.c.j(0.35),w,16)
j.wW(d,e,B.iB,5,12)},
c6G(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lv(d,e,D.c1v)
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
p=A.j1(g,g,g,g,g,B.a6,B.cn,g,B.eL,B.cm)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cLv[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.J(o,2)
p.saR(0,new A.ez(r,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fE()
p.a6(d,new A.v(t*(0.08+B.o.J(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c1x[o]
l=B.kN.j(0.28+0.3*Math.sin(n))
k=B.o.J(o,2)
p.saR(0,new A.ez(m,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fE()
p.a6(d,new A.v(t*(0.55+B.o.J(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lA(d,e,B.c.j(0.35),w*1.5,14)
h.lA(d,e,B.eN.j(0.55),-v*3.141592653589793*2,8)
h.lA(d,e,B.z1.j(0.4),r*2.8,22)
h.wW(d,e,B.oG,8,10)
h.zQ(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.J(w+o*0.22,0.9)
$.a1()
r=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gt(0)
r.c=1.2
i=r.M()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c76(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,Ad.aqq)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.c_(new A.af(20,q,u,q+10),B.k7)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=A.aq(B.hC,B.nN,(r+1)/2).gt(0)
n=o.M()
t.drawRRect(A.fL(p),n)
n.delete()}m.lA(d,e,B.hC.j(0.35),w,15)
m.zQ(d,e,8)},
c71(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.cIv)
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
j.wW(d,e,B.pU,4,14)},
c7f(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lv(d,e,D.cyC)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.J(s,0.12)
$.a1()
n=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.b=B.aj
n.c=2
n.r=B.c.j(0.45-q*0.12).gt(0)
m=n.M()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wW(d,e,B.nS,6,12)
l.lA(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c7o(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lv(d,e,D.ceQ)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.c_(new A.af(q,14,q+u,22),B.jM)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.fq,B.bK,(r+1)/2).gt(0)
o=p.M()
t.drawRRect(A.fL(q),o)
o.delete()}n.lA(d,e,B.c.j(0.3),w,16)
n.zQ(d,e,8)
n.wW(d,e,B.tT,5,13)},
c7a(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cDT)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.J(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.c_(new A.af(q,p,q+8,p+(18+r*22)),B.hZ)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=[B.i6,B.dD,B.bK,B.eX][s].j(0.85).gt(0)
o=q.M()
t.drawRRect(A.fL(p),o)
o.delete()}this.lA(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c7h(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cBF)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.J(v+s*0.12,0.75))
q=B.o.J(s,4)*0.22
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.25).gt(0)
p.c=1.5
o=p.M()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wW(d,e,B.ct,7,11)},
c7v(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.chr)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.c_(new A.af(p,o,p+(t-r*8),o+16),B.k7)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.ct,B.aO,(Math.sin(q)+1)/2).gt(0)
n=p.M()
s.drawRRect(A.fL(o),n)
n.delete()}this.lA(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c7t(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cWG)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.J(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.J(s,2)*0.08)
q=A.c_(new A.af(r,q,r+28,q+8),B.k7)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.35+s*0.08).gt(0)
o=p.M()
t.drawRRect(A.fL(q),o)
o.delete()}this.zQ(d,e,6)},
c6T(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cHf)
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
o.r=B.ho.j(0.85).gt(0)
o.c=3
n=o.M()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lA(d,e,B.nb.j(0.35),w,14)},
c7g(d,e){var w,v,u,t,s,r,q,p,o=this
o.lv(d,e,D.cJr)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.dy(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.22).gt(0)
p=q.M()
t.drawOval(A.cz(r),p)
p.delete()}o.wW(d,e,B.pU,5,16)
o.zQ(d,e,7)},
c7r(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cUz)
w=m.c
v=w*3.141592653589793
m.lA(d,e,B.nN.j(0.55),v*3,10)
m.lA(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.nN.j(0.8).gt(0)
n=o.M()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c7u(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cX8)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.c_(new A.af(p,o,p+36,o+22),B.jM)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.iB,B.nb,q).gt(0)
n=p.M()
s.drawRRect(A.fL(o),n)
n.delete()}m.zQ(d,e,9)
m.lA(d,e,B.c.j(0.4),w*2.2,12)},
c6M(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cNU)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c1(new A.v(v,u),34)
$.a1()
s=A.U()
s.b=B.aj
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
c6E(d,e){var w,v,u,t,s,r,q,p
this.lv(d,e,D.cKi)
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
u.r=B.dD.j(0.45).gt(0)
d.bp(new A.af(0,p,0+v,p+6),u)
this.lA(d,e,B.kO.j(0.45),-t*3.141592653589793*2,11)},
ao(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apw.prototype={
XW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMn(),$async$XW)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a68(s),$async$XW)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
acW(d){return this.c9K(d)},
c9K(d){var w=0,v=A.j(x.H),u=this,t
var $async$acW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hOe(d),$async$acW)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$acW,v)},
B(d){var w,v,u,t=null,s=A.L(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.j8:B.iz
w=x.p
v=A.a([C.aML(!0,B.pK,1/0,B.p0,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bQ(new A.bE(B.b3,t,t,new A.C(B.u6,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.arg,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b3,B.bb,B.x,u,t,t),B.n),B.b7))}v.push(A.an(8,A.B(A.a([A.D(A.dk(D.btP,D.eJI,new C.car(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jB,t,t,t,t,B.c6)),1),B.ab,A.D(A.ey(D.bBN,D.eX9,this.gc0Z(),A.d9(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jB,t,t,D.aPp,t,t,t,B.c6)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fM(1.7777777777777777,A.aD(!1,B.X,!0,B.pK,new A.am(B.V,t,B.aX,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aHZ.prototype={
aO(){this.aU()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aPC.prototype={}
C.aPB.prototype={}
C.aNG.prototype={}
C.WI.prototype={
S(){return new C.avw()}}
C.avw.prototype={
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
if(w.length===0){u.c.F(x.q).f.P(D.er8)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).K(new C.aPC(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.L(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bBu,B.h,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.u(A.a([i,B.by,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.ba,i,A.aF(n,n,n,n,A.V(B.cu,m?B.bm:B.bv,n,n,n,n),n,n,n,new C.cT3(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,11,n,n,B.cp,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fRM(new C.cT4(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a0,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.j8:B.iz
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.cg
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bl(n,new A.b1(4,r,B.da),n,n,n,n,n,n,!0,new A.b1(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ae,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cT5(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a6,n,X.GW,n,n,n,n)
u=m?B.aO:B.aG
m=m?B.dT:B.cg
return A.ev(n,l,new A.d2(B.ld,A.cg(A.u(A.a([j,B.aN,i,B.au,w,B.P,v,B.aN,t,B.bs,A.B(A.a([A.D(A.dU(B.dd,new C.cT6(d),A.d9(n,n,n,n,n,n,n,n,n,u,n,n,B.ca,n,new A.b5(A.m(12),B.W),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.av,A.D(A.bI(D.eXo,o.ga_S(),A.bk(B.aS,n,n,n,B.c,n,B.ca,n,new A.b5(A.m(12),B.W),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zF,n,n,B.ah),n),n,n,n,T.zG,B.cX,n,new A.b5(k,B.W),n)}}
C.WH.prototype={
S(){return new C.avv()}}
C.avv.prototype={
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
if(w.length===0){this.c.F(x.q).f.P(D.eoQ)
return}v=this.c
v.toString
A.a7(v,!1).K(new C.aPB(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.L(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.bya,B.h,q,q,new A.o(B.bR.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.u(A.a([l,B.by,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.ba,l,A.aF(q,q,q,q,A.V(B.cu,p?B.bm:B.bv,q,q,q,q),q,q,q,new C.cT_(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.V(B.aeU,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.av,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bA,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.j8:B.iz
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.cg
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bl(q,new A.b1(4,t,B.da),q,q,q,q,q,q,!0,new A.b1(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ae,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cT0(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a6,q,B.kb,q,q,q,q)
w=p?B.aO:B.aG
p=p?B.dT:B.cg
return A.ev(q,o,new A.d2(B.ld,A.cg(A.u(A.a([m,B.aN,l,B.ay,v,B.bs,A.B(A.a([A.D(A.dU(B.dd,new C.cT1(d),A.d9(q,q,q,q,q,q,q,q,q,w,q,q,B.ca,q,new A.b5(A.m(12),B.W),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.av,A.D(A.bI(D.f2B,this.ga_S(),A.bk(B.bR,q,q,q,B.c,q,B.ca,q,new A.b5(A.m(12),B.W),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zF,q,q,B.ah),q),q,q,q,T.zG,B.cX,q,new A.b5(n,B.W),q)}}
C.We.prototype={
S(){return new C.auh()}}
C.auh.prototype={
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
gag4(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gaZ5(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aJW(d){var w,v=B.k.D(this.gHZ()+d,0.25,999999),u=B.k.lp(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.L(v))
else{u=B.k.ab(v,2)
w=A.ad("\\.?0+$",!0,!1,!1,!1)
u=A.aI(u,w,"")}t.saR(0,u)
this.n(new C.cqF())},
atT(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.j8:B.iz,s=A.m(14),r=A.m(14)
u=u?B.dT:B.cg
return A.bl(w,new A.b1(4,s,B.da),w,B.bA,w,w,w,w,!0,new A.b1(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b1(4,A.m(14),B.a6k),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c1_(d,e,f){return this.atT(d,e,f,null)},
ID(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gag4()<=0){s.c.F(x.q).f.P(D.et_)
return}r=s.c
r.toString
v=s.gHZ()
u=s.gag4()
t=s.gaZ5()
A.a7(r,!1).K(new C.aNG(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t4(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.p(o,D.brK,B.h,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a8(B.a1,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.u(A.a([h,B.by,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.cp,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.ba,h,A.aF(o,o,o,o,A.V(B.cu,n?B.bm:B.bv,o,o,o,o),o,o,o,new C.cqL(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.atT(m,"Item name (optional)","Lumber, paint, labor\u2026",B.L7),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,X.GW,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.j8:B.iz
t=A.m(14)
s=A.H(n?B.dT:B.cg,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Eq,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqM(p),o,o,o,o,o,B.c6)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bDg,B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqN(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a3(52,o,q,o),A.aF(o,o,o,o,A.V(B.hH,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqO(p),o,o,o,o,o,B.c6)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.av,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.atT(m,"Amount","0.00",B.hI),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqP(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a6,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.A(new A.J(D.cEk,new C.cqQ(p,m),t),t.k("ai.E"))
i=A.a([i,B.bs,v,B.ay,h,B.P,s,B.aa,A.cb(B.bH,u,B.bw,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c1_(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cqR(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,B.kb,o,o,o,o)],w))}i.push(B.aN)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gHZ()===B.k.lp(p.gHZ())?B.k.L(p.gHZ()):p.gHZ()
s=p.gaZ5()
r=A.zx(p.gag4())
i.push(A.p(o,A.B(A.a([A.D(A.u(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.byL(p.gHZ()*p.gag4(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a8(B.a1,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.iD,o,o,o))
i.push(B.bs)
j=A.m(14)
h=n?B.dT:B.cg
h=A.d9(o,o,o,o,o,o,o,o,o,o,o,o,B.ca,o,new A.b5(j,B.W),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cqS(d),h),1),B.av,A.D(A.dk(D.aij,D.eZV,p.ga_S(),A.bk(B.aS,o,o,0,B.c,o,B.ca,o,new A.b5(A.m(14),B.W),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ev(o,l,new A.d2(S.a6H,A.cg(A.u(i,B.ad,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A6.qc,o,o,B.ah),o),o,o,o,B.JQ,B.cX,o,new A.b5(k,B.W),o)}}
C.ZN.prototype={
S(){return new C.brr()}}
C.brr.prototype={
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
r=r?B.j8:B.iz
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bl(s,new A.b1(4,A.m(12),B.da),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eUF(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a6,s,B.am,s,s,s,s)
u=A.D(A.dU(B.dd,new C.eUG(d),s),1)
r=A.bk(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ev(s,q,new A.C(B.zF,A.u(A.a([o,B.ay,v,B.aN,A.B(A.a([u,B.av,A.D(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eUH(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cX,s,new A.b5(p,B.W),s)}}
C.a90.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.E3.prototype={
S(){return new C.brp(null,null)}}
C.brp.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bcD,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.br8()},
gbsu(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bR,B.aW],x.O)
case 2:return A.a([B.bq,B.aS,B.aW],x.O)
case 3:return A.a([B.b5,B.c9,B.jv],x.O)
case 4:return A.a([B.hS,B.bR,B.eY],x.O)
case 0:return A.a([B.aS,B.bR,B.aW],x.O)}},
B(d){var w=A.L(d),v=this.d
v===$&&A.c()
return new A.en(A.c4(v,new C.eUD(this,new C.t4(w.ax.a===B.H)),null),null)}}
C.aua.prototype={
S(){return new C.brq(null,null)}}
C.brq.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mt,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.br9()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eUE(this),null)}}
C.bro.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.c_(new A.af(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b3(w,w))
u=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
u.N(new A.j3(v))
w=A.U()
w.b=B.aj
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gt(0)
d.bj(v,w)
w=A.U()
w.b=B.aj
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gt(0)
d.b4(u,w)
w=A.zY(u)
t=A.a([],x.f5)
w=new A.xP(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jH('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FP(w,r)
w.lc()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNe(d,q,r,o,0,0.2,4.2,0.92)
p.aNe(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNe(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.J(g+h,1)*f,s=A.hbW(e.a.a,e,t,t+f*i,!0),r=A.bxb(s.gbM().a.getBounds())
$.a1()
w=A.U()
w.b=B.aj
w.c=j
w.d=B.bZ
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a1,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Fc,null).aC(0,r))
d.b4(s,w)},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aK4.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.aK5.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.t4.prototype={}
C.apv.prototype={
S(){return new C.aBC()},
gdS(){return this.c}}
C.aBC.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adN()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Jt(w,v)
this.a2()},
adN(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxi(t.c,t.d.a),$async$adN)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.eu1(u,s))
return A.h(null,v)}})
return A.i($async$adN,v)},
O9(){var w=0,v=A.j(x.H),u=this,t,s
var $async$O9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.etT(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Jt(t,s),$async$O9)
case 2:if(u.c!=null)u.n(new C.etU(u))
return A.h(null,v)}})
return A.i($async$O9,v)},
OF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.L(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.eu_(t,new C.t4(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OF)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a68(q),$async$OF)
case 6:case 5:t.n(new C.eu0(t,r))
w=7
return A.b(t.O9(),$async$OF)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
TE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hO_(r),$async$TE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.etO(t,new C.qn(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.O9(),$async$TE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TE,v)},
c5W(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h40(t,new C.etS(u),w,v)},
a87(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c2(new A.ax(v,2.5,B.r,-1),B.W,B.W,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aPb,w,w,B.n),w,22,w,w,w,w,w,22)},
a7d(d){return this.bE1(d)},
bE1(d){var w=0,v=A.j(x.H),u=this
var $async$a7d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.etR(u,d))
w=2
return A.b(u.O9(),$async$a7d)
case 2:return A.h(null,v)}})
return A.i($async$a7d,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.L(a2).ax.a===B.H,e=f?B.bV:B.iP,d=A.m(8),a0=A.V(N.Ww,f?B.bm:B.bv,g,g,g,16),a1=x.p
a0=A.aH(!1,d,!0,new A.C(B.DE,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,B.a0,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eu2(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.V,g,B.aX,B.q,A.a([A.bu(A.m(22),C.aML(!0,A.m(22),1/0,B.p0,g,d,1/0),B.ap),A.an(10,A.dk(D.bwh,D.f0Y,h.gaX3(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.G,B.aS.j(f?0.5:0.38),B.eH,22),new A.aa(-4,B.G,B.bR.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.am(B.V,g,B.aX,B.q,A.a([C.aML(!0,A.m(16),1/0,B.KA,g,r.c,1/0),A.bQ(g,new A.o(g,g,g,g,g,new A.a8(B.b3,B.bb,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.b7),A.an(g,h.a87(!0),g,g,8,g,8,g),A.an(g,A.coc(h.a87(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.coc(h.a87(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.coc(h.a87(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dk(D.bsj,D.eWc,h.gaX3(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bE1,B.n),g,g,g,g,B.lT,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZ0,B.n8,B.fQ],u):A.a([B.aW,B.aS,B.bR],u)
t=x.V
s=A.a([new A.aa(0,B.G,B.aS.j(f?0.45:0.35),B.eH,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jF,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h0,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.byL(h.d.gw1(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cp,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.j9.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.b5.j(0.28),B.cG,14)],t)
j=B.b5.j(0.22)
i=A.m(10)
u=A.p(g,A.bu(r,new A.am(B.V,g,B.a9,B.q,A.a([p,new A.C(D.bhb,A.B(A.a([o,B.av,A.aD(!1,B.X,!0,g,A.aH(!1,n,!0,A.eq(new A.C(Ab.V1,A.u(A.a([A.p(g,D.ahS,B.h,g,g,new A.o(j,g,A.H(B.b5.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.fW,D.eMf],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc5V(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fM(1.7777777777777777,d,g),B.aN,w,B.P,u,B.bs,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dk(Ae.Yi,D.eKh,h.gbsX(),A.bk(B.aS,g,g,g,B.c,g,B.iC,g,new A.b5(A.m(12),B.W),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.aa],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dT:B.cg,B.r,1)
t=A.V(B.WR,f?B.bm:B.bv,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.ue,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eu3(h,new C.t4(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zs,A.as(A.mi(g,f?B.bm:B.bv,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cf(g,e,A.br(!0,A.u(A.a([new A.C(B.zx,a0,g),A.D(A.cg(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wt,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bwp(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.aa(0,B.G,B.w.j(r?0.35:0.08),B.cG,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aRS,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hK:B.fS,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.Z,u,u,u,A.l(u,u,r?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcJG()
v=A.zx(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,B.a0,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b4,B.R,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.byL(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a8(B.a1,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.KJ(A.B(A.a([m,A.D(new A.C(B.acc,A.B(A.a([l,B.ba,t,B.ab,k,A.aF(u,u,u,u,A.V(B.cu,(r?B.bm:B.bv).j(0.75),u,u,u,20),u,u,u,new C.etP(this,d),u,u,u,u,u,B.c6)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ad,u,B.e,B.j,0,u,u),u),B.ap),B.h,u,D.aQL,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d7,u,u,u,u)}}
C.ab0.prototype={
D5(d){return this.bFj(d)},
bFj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oA(d,o,!1),$async$D5)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
w=4
return A.b(A.bK(A5.zq,null,x.H),$async$D5)
case 4:s=t.d
w=5
return A.b(C.fo8(!0,o,s),$async$D5)
case 5:r=f
q=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.EU(r,"ngmy_project_"+A.aI(s.b,q,"_"),!1),$async$D5)
case 6:p=f
w=7
return A.b(A.oz(o,!1),$async$D5)
case 7:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$D5,v)},
XX(d){return this.clz(d)},
clz(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$XX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oA(d,s,!1),$async$XX)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
A.hk(d,new C.app(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oz(s,!1),$async$XX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XX,v)},
Oa(d){return this.chN(d)},
chN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(A.hk(d,D.aAi,!0,"NgmyWorksheetProjectScan",x.N),$async$Oa)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.byM(s),$async$Oa)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.F(x.q).f.P(D.es8)
w=1
break}q=C.fI1(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Oa)
case 5:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
XY(d){return this.ctf(d)},
ctf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(C.byj(),$async$XY)
case 3:s=f
if(s==null){w=1
break}r=C.fI1(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$XY)
case 4:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XY,v)},
B(d){var w=this,v=null,u=A.L(d).ax.a===B.H,t=new C.t4(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.aa(0,B.G,B.w.j(u?0.35:0.08),B.kG,36)],x.V),o=x.p
return A.br(!0,new A.C(B.ub,A.p(v,A.u(A.a([w.ckc(d,t,s),new A.C(D.bgA,A.u(A.a([w.aZZ(t,"QR restore"),B.T,A.B(A.a([w.aV7(t,!0,B.j1,B.b5,B.b5,new C.eu5(w,d),"Show to scan","QR code"),B.av,w.atU(t,B.iF,B.b0,B.bE,new C.eu6(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d1,w.aZZ(t,"Backup files"),B.T,A.B(A.a([w.atU(t,B.hh,B.aS,B.bR,new C.eu7(w,d),"Full copy","Backup file"),B.av,w.atU(t,M.x7,B.aZ,B.aM,new C.eu8(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
ckc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eO,B.cW,B.ff],k):A.a([B.aW,B.aS,B.bR],k)
w=A.an(l,A.V(B.rZ,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kq,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.G,B.w.j(0.2),B.cG,12)],x.V)
r=this.d
s=A.p(l,C.aML(!0,A.m(13),64,D.bnB,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.Z,l,l,l,D.aK4,l,l,l)
r=C.byL(r.gw1(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.V,l,B.a9,B.q,A.a([w,new A.C(D.bgY,A.u(A.a([v,A.B(A.a([s,B.en,A.D(A.u(A.a([u,B.au,t,B.P,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fw,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.eu4(d),l,l,l,A.ok(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aHr,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
aZZ(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aV7(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aaX:B.aO
if(e)w=B.b5.j(o?0.45:0.35)
else{w=o?B.dT:B.cg
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.G,B.b5.j(0.12),B.cG,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.eq(new A.C(E.V2,A.u(A.a([t,B.aa,u,B.by,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,B.cp,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
atU(d,e,f,g,h,i,j){return this.aV7(d,!1,e,f,g,h,i,j)}}
C.app.prototype={
S(){return new C.bgV()}}
C.bgV.prototype={
Z(){this.a0()
this.abH()},
abH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.byN(p.c,p.d),$async$abH)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.etJ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.etK(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.L(d).ax.a===B.H,f=g?B.z0:B.iP,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.es,g?B.ak:B.al,h,h,h,18),h,h,h,new C.etL(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.y8],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eO,B.cW,B.ff],s):A.a([B.aW,B.aS,B.bR],s)
r=x.V
q=A.a([new A.aa(0,B.G,B.aS.j(g?0.4:0.3),B.eH,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.byL(p.gw1(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fw,h,h,h)],u),B.m,h,B.b4,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Vo,h,h,1/0)
t=g?D.b62:B.c
q=A.m(24)
p=A.H(w?B.b5.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.G,B.w.j(g?0.25:0.06),B.dl,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3H,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dLc)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pi(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c1,h,h,h))}}o.push(B.aN)
n=w?B.b5:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.b5:B.aS).j(0.35),B.r,1)
k=w?B.KR:B.Lj
k=A.V(k,w?B.b5:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.av,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ak:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a0,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iC,h,h,h))
return A.cf(h,f,A.br(!0,A.u(A.a([new A.C(A2.K3,e,h),A.D(A.cg(A.u(A.a([s,B.aN,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rG,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adk,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.apu.prototype={
S(){return new C.aBB(A.y7(B.Jl,B.n2,B.t2))}}
C.aBB.prototype={
p(){this.d.p()
this.a2()},
aHY(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iC(w,d)},
c1Q(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hM6(t)
if(s!=null){this.aHY(s)
return}r=C.fWg(t)
if(r!=null)q=A.dj(r,p,0)
else q=!1
if(q){this.aHY(B.a.i(B.a.aV(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eA(A.a([A.aF(t,t,t,t,A.V(u.f?B.rR:Y.KX,t,t,t,t,t),t,t,t,new C.etN(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.z0,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.eW6,t,t,t,1,t,!0),q=A.y6(u.d,B.bM,u.gc1P()),p=A.m(28)
p=A.as(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.aa(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cf(r,B.w,new A.am(B.V,t,B.aX,B.q,A.a([q,p,A.an(32,A.p(t,D.eUY,B.h,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iD,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGl.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mb.prototype={
S(){return new C.aBD(D.a5E,A.a([],x.D))},
bl(){return this.r.$0()},
gdS(){return this.c}}
C.aBD.prototype={
gcrj(){return J.bzT(this.e,0,new C.euv())},
Z(){this.a0()
$.aS.c_$.push(this)
this.uO()},
p(){$.aS.hE(this)
this.a2()},
iO(d){if(d===B.fn)this.uO()},
uO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BA(q.a.c).cJ(0,B.kp),$async$uO)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.eur(q,p))
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
if(q.c!=null&&q.f)q.n(new C.eus(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uO,v)},
Gw(d){return this.bCc(d)},
bCb(){return this.Gw(null)},
bCc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hO1(l,d),$async$Gw)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l1(l,r,q,D.cO6,new A.O(Date.now(),0,!1))
w=4
return A.b(C.Jt(t.a.c,p),$async$Gw)
case 4:o=f
w=5
return A.b(t.uO(),$async$Gw)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.F(x.q).f.P(D.epj)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.F(q).f.P(D.er2)
else n.F(q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D9(m)
case 1:return A.h(u,v)}})
return A.i($async$Gw,v)},
D9(d){return this.c5H(d)},
c5H(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$D9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hk(s,new C.apv(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$D9)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Jt(u.a.c,t),$async$D9)
case 5:case 4:w=6
return A.b(u.uO(),$async$D9)
case 6:return A.h(null,v)}})
return A.i($async$D9,v)},
uC(d){return this.bRA(d)},
bRA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.byj(),$async$uC)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hk(r,D.aAi,!0,"NgmyWorksheetProjectScan",x.N),$async$uC)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.byM(q),$async$uC)
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
break}p=C.fI1(s)
w=15
return A.b(C.Jt(t.a.c,p),$async$uC)
case 15:o=f
w=16
return A.b(t.uO(),$async$uC)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.F(x.q).f.P(D.er7)
w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D9(p)
case 1:return A.h(u,v)}})
return A.i($async$uC,v)},
M5(d){return this.bAT(d)},
bAT(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$M5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.euc(d),s,null,!0,!0,x.y),$async$M5)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ob(t.a.c,A.a([],x.D)),$async$M5)
case 6:w=7
return A.b(t.uO(),$async$M5)
case 7:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.epo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$M5,v)},
c5U(d){var w=this.c
w.toString
A.c0(B.K,null,new C.eul(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b_A(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.j8
else w=B.c
v=A.m(16)
u=A.H(p?B.dT:B.cg,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.p(r,A.u(A.a([s,B.aa,t,B.by,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ua,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
Yq(d,e){return this.c5I(d,e)},
c5I(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(B.K,null,new C.eug(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Yq)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h40(r,new C.euh(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.M7(d,e),$async$Yq)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Yq,v)},
aXF(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aH
else t=h.a?B.aO:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.X,!0,u,A.aH(!1,u,!0,new A.C(B.zC,A.B(A.a([s,B.ba,t,A.V(B.ek,w?B.bm:B.bv,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
ccm(d,e,f,g,h,i){return this.aXF(!1,d,e,f,g,h,i)},
M7(d,e){return this.bB2(d,e)},
bB2(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$M7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kN(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$M7)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bx5(t.a.c,d.a),$async$M7)
case 6:w=7
return A.b(t.uO(),$async$M7)
case 7:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$M7,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=new C.t4(o),m=o?B.bV:B.iP
if(q.f)o=D.aX7
else{w=q.bvF(n)
v=q.bQJ(n)
u=q.gbsR()
if(o)t=B.j8
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.aa,v,B.aN,new C.E3(A.p(p,A.B(A.a([q.axk(P.Kz,"Projects",n,D.a5E),q.axk(B.ul,"Cashier",n,D.aNg),q.axk(B.DX,"Family Tree",n,D.fgX)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ef,0.95,u,p),B.bs],r)
w=q.d
if(w===D.a5E){w=J.a9(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aO:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.aua(q.gaM5(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.cco(n)],r))}else{o=q.a
if(w===D.aNg)u.push(new C.alB(o.c,n,p))
else{w=q.r
u.push(new C.amH(o.c,o.d,o.e,o.f,new C.euy(q),new C.euz(q),new A.cv(w,x.b4)))}}o=A.cg(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A7.JX,p,p,B.ah)}return A.cf(p,m,A.br(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bvF(d){var w=null,v=A.m(8),u=d.a,t=A.V(N.Ww,u?B.bm:B.bv,w,w,w,16)
return A.aH(!1,v,!0,new A.C(B.ll,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eu9(this),w,w,w,w,w,w,w)},
gbsR(){switch(this.d.a){case 0:return D.a4X
case 1:return D.f8r
case 2:return D.a4Y}},
bQJ(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.G,B.aS.j(0.35),B.cv,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.by0,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.ba,D.bl2,A.aD(!1,B.X,!0,w,A.aH(!1,A.m(12),!0,A.p(w,D.bvB,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eud(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.E3(A.p(w,A.u(A.a([new A.C(E.V8,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.zx(this.gcrj()),w,w,w,w,w,w,D.eGX,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u9,B.iD,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.f8q,w)},
axk(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.aa(0.5,B.G,B.aS.j(0.42),B.cG,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bm:B.bv
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bm:B.bv
return A.D(A.aD(!1,B.X,!0,u,A.aH(!1,s,!0,A.dg(u,A.B(A.a([w,B.ez,new A.dl(1,B.cj,A.d(e,u,1,B.Z,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b4,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.ic,u,u,u,B.K_,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.euu(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),1)},
cco(d){var w,v,u,t,s,r,q=this,p=null
if(J.ci(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bvG,B.h,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.G,B.aS.j(0.5),B.eH,28)],x.V),D.bGd,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.E3(A.p(p,A.u(A.a([t,B.d1,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.B(A.a([A.D(q.aNz(B.iF,"Scan QR",new C.euo(q),d),1),B.av,A.D(q.aNz(M.x7,"Upload file",new C.eup(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bI(D.f4i,q.gaM5(),A.bk(B.aS,p,p,p,B.c,B.fL,p,p,new A.b5(A.m(12),B.W),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bi1,1.05,D.a4X,p)}w=J.b4(q.e,new C.euq(q,d),x.l)
w=A.A(w,w.$ti.k("ai.E"))
return new C.E3(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a4X,p)},
aNz(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.X,!0,u,A.aH(!1,t,!0,A.p(w,A.u(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eFo,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ac5,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)},
ccn(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.a([new A.aa(0,B.G,B.w.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bm:B.bv
n=A.bu(B.a6g,new A.fM(1.7777777777777777,C.aML(!0,B.fe,1/0,P.Kz,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.zx(d.gw1()),u,u,u,u,u,u,D.eDA,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.X,!0,u,A.aH(!1,o,!0,A.u(A.a([n,new A.C(B.bA,A.B(A.a([v,A.aF(u,u,u,u,A.V(A8.La,t?B.bm:B.bv,u,u,u,u),u,u,u,new C.eum(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eun(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.dZ,u,u,u,1/0)}}
C.btb.prototype={}
C.qn.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcJG(){var w,v,u,t,s=this.c
if(s===B.k.lp(s))w=B.o.u(B.k.L(s))
else{v=B.k.ab(s,2)
u=A.ad("\\.?0+$",!0,!1,!1,!1)
w=A.aI(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l1.prototype={
gw1(){return B.d.cI(this.d,0,new C.cq6())},
ad(){var w=this,v=w.d,u=A.T(v).k("J<1,a0<n,@>>")
v=A.A(new A.J(v,new C.cq5(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.aa()],x.N,x.z)},
b6u(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l1(w.a,w.b,v,u,w.e)},
b6b(d){return this.b6u(d,null)},
QO(d){return this.b6u(null,d)}}
C.FY.prototype={
a3(){return"FamilyGender."+this.b}}
C.hO.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h_S(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
azT(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hO(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ahX.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kl.prototype={
galk(){var w=this.f
return new A.a5(w,new C.bIJ(),A.T(w).k("a5<1>")).gH(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("J<1,a0<n,@>>")
v=A.A(new A.J(v,new C.bII(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.aa(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hEG(w.y)],x.N,x.z)},
xD(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kl(w.a,v,u,t,s,r,w.r,q,p,o)},
b6t(d,e){var w=null
return this.xD(w,w,d,e,w,w,w,w)},
czM(d,e,f,g,h,i,j){return this.xD(d,e,f,g,h,i,j,null)},
azY(d,e){var w=null
return this.xD(w,w,w,d,w,w,e,w)},
cyh(d){var w=null
return this.xD(w,w,w,w,w,w,d,w)},
cyF(d){var w=null
return this.xD(w,w,w,w,w,w,w,d)},
azK(d){var w=null
return this.xD(w,w,w,w,d,w,w,w)},
czi(d,e,f){var w=null
return this.xD(w,d,w,e,w,w,f,w)},
cy4(d){var w=null
return this.xD(w,w,d,w,w,w,w,w)},
cyR(d,e){var w=null
return this.xD(d,w,w,w,w,e,w,w)}}
C.cq7.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cq8.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDE.prototype={}
C.b4L.prototype={
bH(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b4L()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aV(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b4K.prototype={
gvn(){return!0},
gED(){return this.z.b<this.b.length},
aP8(d){switch(0){case 0:return d.a.c}},
aOQ(d){switch(0){case 0:return d.a.d}},
bKg(d,e){switch(0){case 0:return new A.hx(d,e)}},
bJF(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fR(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.ir(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FJ(b4)
switch(0){case 0:v=b5.b
u=new A.ki(0,v,0,1/0)
t=w===B.Qp
break}s=A.a([],x.gZ)
r=A.R(x.cM,x.S)
for(b3=b1.z,q=B.d.fT(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fR(b4,u,!0)
f=b1.aP8(g)
f.toString
e=b1.aOQ(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDE(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDE(k,j,i))}d=s.length
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
a8=b1.aP8(g)
e=b1.aOQ(g)
e.toString
a9=b1.bJF(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bKg(a6,a3+a9)
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
C.brs.prototype={}
var z=a.updateTypes(["au<~>()","S(hO)","S(kl)","~()","S(mM)","a0<n,@>(kl)","I(kl,kl)","n(hO)","kl(a0<@,@>)","S(l1)","ep<n?>(hO)","tz()","a0<n,@>(mM)","XJ(Y)","hO(a0<@,@>)","a0<n,@>(hO)","S(tz)","S(qn)","au<~>(l1)","mM(a0<@,@>)","I(l1,l1)","I(hO,hO)","n?(hO)","r(nO)","hO(hO)","cE(bq<n,Ef>)","cE(Ij)","~(I)","I?(hO)","hO()","ak<hO>()","aaG(Y)","S(Ij)","C(hO)","~(FY)","WG(Y)","r(FY,n,a_)","n(n)","bq<n,ak<a0<n,@>>>(n,ak<mM>)","n(O)","+count,id,name(I,n,n)(kl)","kl(kl)","Y3(Y)","Y4(Y)","S(lh)","lh()","We(Y)","n(kl)","WI(Y)","WH(Y)","X7(Y)","~(hO)","r(qn)","ab0(Y)","~(lE)","au<~>([n?])","Q(Q,l1)","r(l1)","Q(Q,qn)","a0<n,@>(qn)","qn(a0<@,@>)","S(acb)","X5(Y)","X9(Y)","l1(a0<@,@>)","co(FX)","n(l1)","a0<n,@>(l1)","I(mM,mM)","I(hO)","kl(a0<n,@>)","ZN(Y)"])
C.fgP.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.fgO.prototype={
bfc(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qg(s,d,B.h4,E.Dk),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.P(r!=null&&A.Jh(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bfc(d)},
$S:325}
C.fgQ.prototype={
$1(d){return d.b},
$S:116}
C.fpI.prototype={
$1(d){var w=null
return A.ev(w,B.K,new F.Nw(this.a,this.b,w),w,w,0,B.V3,B.cX,w,w,w)},
$S:46}
C.f7a.prototype={
$1(d){return d!=null},
$S:217}
C.f7b.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:217}
C.f7g.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:170}
C.fey.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f_(d,w,w,w,A.fW(w,B.qF,w,w,w,w,w,w,w,B.dk,w,w,10.5,w,B.eb,w,!0,w,w,w,w),w),u=f?B.eb:B.ug
return new A.ni(D.bdG,A.a7i(A.a([new A.fF(130,w,v),new A.xR(1,B.DQ,A.f_(e,w,w,w,A.fW(w,g==null?D.dMq:g,w,w,w,w,w,w,w,B.dk,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.w7,B.l2))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1867}
C.fex.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uF(999)
f=A.w7(A.lc(h,A.f_("Cashier",h,h,h,A.fW(h,D.xX,h,h,h,h,h,h,h,B.dk,h,h,10,h,B.eb,h,!0,h,h,h,h),h),h,new A.kj(D.dMh,h,f,B.hk,h),h,h,D.be6,h))
w=A.w7(A.f_("Debt receipt",h,h,h,A.fW(h,h,h,h,h,h,h,h,h,B.dk,h,h,22,h,B.eb,h,!0,h,h,h,h),h))
v=A.w7(A.f_(C.vR(new A.O(Date.now(),0,!1),!0),h,h,h,D.a3P,h))
u=A.uF(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f_(s,h,h,h,A.fW(h,h,h,h,h,h,h,h,h,B.dk,h,h,14,h,B.eb,h,!0,h,h,h,h),h)
r=A.f_("Person who owes",h,h,h,D.a3P,h)
q=A.uF(10)
p=x.C
u=A.lc(h,A.xM(A.a([s,new A.fF(h,2,h),r,new A.fF(h,10,h),A.lc(h,A.xM(A.a([A.f_("Amount owed",h,h,h,D.a3P,h),new A.fF(h,2,h),A.f_(A.zx(t.c),h,h,h,A.fW(h,D.xX,h,h,h,h,h,h,h,B.dk,h,h,20,h,B.eb,h,!0,h,h,h,h),h)],p),B.q8,B.l2),h,new A.kj(B.oh,h,q,B.hk,h),h,h,D.bdo,1/0)],p),B.q8,B.l2),h,new A.kj(E.aBe,h,u,B.hk,h),h,h,D.bf9,1/0)
q=new A.n1(D.dMk,0.9,B.kh)
r=A.uF(12)
s=i.c
o=s.$2("Original due",C.vR(t.r,!1))
n=s.$2("Current due",C.vR(t.f,!1))
m=i.d
l=new A.n1(m,1.1,B.kh)
k=A.uF(8)
j=i.a
k=A.a([o,n,new A.fF(h,6,h),A.lc(h,A.w7(A.f_(t.gaGu(),h,h,h,A.fW(h,m,h,h,h,h,h,h,h,B.dk,h,h,11,h,B.eb,h,!0,0.5,h,h,h),h)),h,new A.kj(h,new A.p_(l,l,l,l),k,B.hk,h),h,h,D.bef,1/0),new A.fF(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.xX))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.xX))
else{n=A.f_("Missed days ("+n+")",h,h,h,A.fW(h,B.qF,h,h,h,h,h,h,h,B.dk,h,h,10.5,h,B.eb,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Qh>")
o=A.A(new A.J(o,new C.few(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fF(h,4,h),n,new A.fF(h,6,h),new C.b4K(5,5,new C.b4L(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fF(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fF(h,8,h),w,new A.fF(h,3,h),v,new A.fF(h,16,h),u,new A.fF(h,10,h),A.lc(h,A.xM(k,B.w7,B.l2),h,new A.kj(h,new A.p_(q,q,q,q),r,B.hk,h),h,h,B.acg,1/0)],p)
w=j.a
if(w!=null){v=new A.n1(B.Gi,1,B.kh)
B.d.v(f,A.a([new A.fF(h,16,h),A.f_("Debtor signature",h,h,h,A.fW(h,B.qF,h,h,h,h,h,h,h,B.dk,h,h,10,h,B.eb,h,!0,h,h,h,h),h),new A.fF(h,6,h),A.lc(h,new A.Gd(w,B.Sr,h,h),h,new A.kj(h,new A.p_(v,v,v,v),A.uF(6),B.hk,h),82,h,B.K1,1/0)],p))}f.push(new A.fF(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f_(w,h,h,h,D.ewQ,h))
f.push(new A.fF(h,18,h))
f.push(A.w7(A.f_("NGMY.ORG",h,h,h,A.fW(h,D.xX,h,h,h,h,h,h,h,B.dk,h,h,14,h,B.eb,h,!0,1.8,h,h,h),h)))
return f},
$S:398}
C.few.prototype={
$1(d){var w=null,v=new A.n1(D.Gj,0.7,B.kh),u=A.uF(999)
return A.lc(w,A.f_(C.vR(d,!1),w,w,w,A.fW(w,D.Gj,w,w,w,w,w,w,w,B.dk,w,w,9.5,w,B.eb,w,!0,w,w,w,w),w),w,new A.kj(w,new A.p_(v,v,v,v),u,B.hk,w),w,w,D.bjk,w)},
$S:1868}
C.bXf.prototype={
$1(d){var w=null,v=B.bS.j(0.08),u=A.m(999),t=A.H(B.bS.j(0.28),B.r,1)
return A.p(w,A.d(C.vR(d,!1),w,w,w,w,w,w,D.eD5,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ew,w,w,w)},
$S:1869}
C.fqd.prototype={
$1(d){var w=null,v=A.aG(d,B.bO,x.n).w,u=A.m(26),t=A.aF(w,w,w,w,B.aib,w,w,w,new C.fqa(d),w,w,w,w,w,B.c6),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ev(w,B.K,new A.d2(new A.aW(0,380,0,v.a.b*0.9),A.aD(!1,B.X,!0,u,new A.C(B.UU,A.u(A.a([new A.bE(B.a7,w,w,t,w),new A.dl(1,B.cj,A.cg(A.u(A.a([new A.en(new C.aUX(r,w),s),B.T,A.B(A.a([A.D(A.ey(B.xi,D.f0U,new C.fqb(s,r,d),A.d9(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eU,w,new A.b5(A.m(14),B.W),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dk(B.Y8,D.eYO,new C.fqc(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eU,w,new A.b5(A.m(14),B.W),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aG,0,w,w,w,w,w,B.ac),w),w,w,0,Ac.Vh,B.cX,w,w,w)},
$S:46}
C.fqa.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fqb.prototype={
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
C.fqc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fl6(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.F(x.q).f
s.P(A.b_(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fq5.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ev(w,B.aG,A.u(A.a([new A.C(D.beZ,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.mT,w,w,w),1),A.aF(w,w,w,w,B.l0,w,w,w,new C.fq3(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dl(1,B.cj,new A.C(B.ih,A.bu(A.m(14),A.fC(t,B.B,w,w,B.ci,B.dn,!1,w,!1,w,w),B.ap),w),w),new A.C(B.JG,new A.a3(1/0,w,A.dk(B.oa,D.aKt,new C.fq4(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.JR,B.cX,w,new A.b5(v,B.W),w)},
$S:46}
C.fq3.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fq4.prototype={
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
C.fqh.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ev(w,B.aG,new A.C(D.bf5,A.u(A.a([A.B(A.a([D.bkg,A.aF(w,w,w,w,B.l0,w,w,w,new C.fqf(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.en(A.bu(A.m(14),A.p(w,A.b2(w,w,w,new C.b6T(s.ax,w),B.as),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.aa,new A.a3(1/0,w,A.dk(B.oa,D.aKt,new C.fqg(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cX,w,new A.b5(v,B.W),w)},
$S:46}
C.fqf.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fqg.prototype={
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
C.f9V.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dxQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dxB.prototype={
beq(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c0(t,null,new C.dxE(s,q,e),p,!0,!0,!1,B.Gz,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dxF(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.beq(d,e)},
$S:1870}
C.dxE.prototype={
$1(d){var w,v=null,u=this.c===B.uR,t=u?D.cTq:D.cQ6
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aO:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.br(!0,new A.C(K.acP,A.u(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa,A.ig(!0,v,v,B.z,L.aHJ,new C.dxD(this.a,w,t,d),t.length,v,B.dJ,B.ah,!0)],x.p),B.ad,v,B.e,B.R,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:34}
C.dxD.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.M:B.aO
v=A.m(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bm:B.bv).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aH(!1,p,!0,A.p(B.B,C.aUW(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dxC(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dxC.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.dxF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dxz.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dxA.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cF(B.co,e,v)
return new A.cZ(e,!1,A.iF(B.B,A.as(A.aD(!1,B.X,!0,v,new A.ed(new C.dxy(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bc(t,new A.bm(0.96,1,u),u.k("bc<bC.T>"))),v)},
$S:32}
C.dxy.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bO,x.n).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bm:B.bv).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aH(!1,v,!0,new A.C(B.ef,A.V(B.cu,i.a.d.a?B.bm:B.bv,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dxj(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aO5("Name")
r=l.a
q=r.d==null?k:new C.dxk(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lN
n=A.H(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6m(new A.C(B.hc,A.aH(!1,p,!0,A.p(B.B,C.aUW(m==null?"\ud83d\udc64":A.ffm(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ae,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.kb,k,B.a3y,k,k)
v=A.a([v,B.aa,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aOG("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dxl(r,a0),r.d===B.uR),1),B.ab,A.D(i.aOG("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dxq(r,a0),r.d===B.a0y),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bE(B.a1,k,k,A.hf(D.bxj,D.f_r,new C.dxr(r,l.e,a0),A.fo(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c6)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tB(A.ad("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aO6("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ae,k,k,s,k,k,B.dX,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aO
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bm:B.bv).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vR(r.a,!1)
v.push(A.aD(!1,B.X,!0,q,A.aH(!1,p,!0,A.p(k,A.B(A.a([A.D(A.u(A.a([t,B.by,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bud],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dxs(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aO5("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ae,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.am,k,k,k,k))
v.push(B.aa)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aW4(r.b.length!==0,B.lU,new C.dxt(r,i,a0),new C.dxu(r,a0),"Upload from gallery","ID photo"))
v.push(i.aW4(r.c.length!==0,D.bnz,new C.dxv(r,i,d,a0),new C.dxw(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Aa.a5g("Signature (optional)",t,new C.dxx(a0),new C.dxm(a0,t),new C.dxn(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bm:B.bv
s=(i?B.bm:B.bv).j(0.28)
s=A.D(A.dU(E.aKn,new C.dxo(d),A.d9(k,k,k,k,k,k,k,k,k,t,k,k,B.wi,k,new A.b5(A.m(10),B.W),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cW,k,k,k,B.c,k,B.wi,k,new A.b5(A.m(10),B.W),k,k,k)
v.push(A.B(A.a([s,B.ab,A.D(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ty,k,k,k),new C.dxp(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cg(A.u(v,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),B.h,k,new A.aW(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uc,B.iD,k,k,360)},
$S:158}
C.dxj.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxk.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dxl.prototype={
$0(){return this.b.$1(new C.dxi(this.a))},
$S:0}
C.dxi.prototype={
$0(){var w=this.a
w.d=B.uR
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dxq.prototype={
$0(){return this.b.$1(new C.dxh(this.a))},
$S:0}
C.dxh.prototype={
$0(){var w=this.a
w.d=B.a0y
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dxr.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dxs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xD(null,u.b,A.bT(2020,1,1,0,0,0,0,0),null,s,A.bT(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dxg(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxg.prototype={
$0(){var w=this.b
return this.a.a=A.bT(w.gcd(),w.gcb(),w.gcq(),0,0,0,0,0)},
$S:0}
C.dxt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NB(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dxf(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxf.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dxu.prototype={
$0(){return this.b.$1(new C.dxe(this.a))},
$S:0}
C.dxe.prototype={
$0(){return this.a.b=""},
$S:0}
C.dxv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c0(q,null,new C.dxc(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NB(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dxd(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxc.prototype={
$1(d){var w=null
return A.br(!0,A.u(A.a([A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahJ,w,w,w,w,new C.dx6(d),!1,w,w,w,w,w,w,w,D.eRH,w,w,w),A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahH,w,w,w,w,new C.dx7(d),!1,w,w,w,w,w,w,w,D.eXV,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:34}
C.dx6.prototype={
$0(){A.a7(this.a,!1).K("camera")
return null},
$S:0}
C.dx7.prototype={
$0(){A.a7(this.a,!1).K("gallery")
return null},
$S:0}
C.dxd.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dxw.prototype={
$0(){return this.b.$1(new C.dxb(this.a))},
$S:0}
C.dxb.prototype={
$0(){return this.a.c=""},
$S:0}
C.dxx.prototype={
$0(){return this.a.$1(new C.dxa())},
$S:0}
C.dxa.prototype={
$0(){},
$S:0}
C.dxm.prototype={
$0(){return this.a.$1(new C.dx9(this.b))},
$S:0}
C.dx9.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dxn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.af3(u.a,null,null,new C.dx8(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dx8.prototype={
$4(d,e,f,g){this.a.$1(new C.dx5(this.b,d))},
$S:447}
C.dx5.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dxo.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxp.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.F(x.q).f.P(D.esZ)
return}if(w.a.d==null){w.c.F(x.q).f.P(D.epV)
return}A.a7(w.c,!1).K(!0)},
$S:0}
C.dxT.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dxU.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bv).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zx(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bm:B.bv,r,r,r,r,r,r,r,r,13,r,r,B.a0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y0(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y0(r).length>0?B.bS:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bm:B.bv
t=(q?B.bm:B.bv).j(0.28)
s=x.p
return new A.cZ(e,!1,A.as(A.aD(!1,B.X,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dU(B.mW,new C.dxR(d),A.d9(r,r,r,r,r,r,r,r,r,w,r,r,B.jB,r,new A.b5(A.m(10),B.W),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bI(D.eYj,new C.dxS(d),A.bk(B.cW,r,r,r,B.c,r,B.jB,r,new A.b5(A.m(10),B.W),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ad,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zH,E.V8,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:32}
C.dxR.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxS.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dxN.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dxO(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bv).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.Z,s,s,s,A.l(s,s,r.a.d.a?B.aO:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zx(l.c),s,s,s,s,s,s,D.eEw,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jm((r.a.d.a?B.bm:B.bv).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.WR,"View receipt",new C.dxG(r,d,l))
u=l.x!=null
t=u?B.uA:B.p2
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bf2,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dxH(r,d,l)),q.$3$icon$label$onTap(B.zY,"Edit",new C.dxI(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.lU,"View / download ID",new C.dxJ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bny,"View / download selfie",new C.dxK(r,d,l)))
if(l.gaBy())p.push(q.$3$icon$label$onTap(A0.Y_,"View / download signature",new C.dxL(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bS,B.e4,"Delete",new C.dxM(r,d,l)))
p.push(B.au)
return A.br(!0,new A.C(B.u9,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:34}
C.dxO.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aO:B.aG
else w=d
return A.aH(!1,v,!0,new A.C(B.eE,A.B(A.a([A.V(e,w,v,v,v,20),B.ba,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1871}
C.dxG.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fq9(w,this.c)},
$S:0}
C.dxH.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Qa(this.c)},
$S:0}
C.dxI.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.BT(this.c)},
$S:0}
C.dxJ.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bz8(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dxK.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bz8(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dxL.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fqe(w,this.c)},
$S:0}
C.dxM.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Mi(0,this.c)},
$S:0}
C.dxV.prototype={
$1(d){return d.x==null},
$S:261}
C.dxW.prototype={
$1(d){return d.x!=null},
$S:261}
C.dxX.prototype={
$2(d,e){return d+e.c},
$S:1872}
C.dxY.prototype={
$0(){return this.a.btj()},
$S:0}
C.dxP.prototype={
$0(){return this.a.abU(this.b)},
$S:0}
C.fc7.prototype={
$1(d){return C.fM0(A.Z(d,x.N,x.z))},
$S:z+19}
C.fc8.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fc9.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+68}
C.foR.prototype={
$1(d){return d.ad()},
$S:z+12}
C.fwt.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.f9M.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bIE.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eQ(e,v)?v:null},
$S:1873}
C.fpm.prototype={
$1(d){var w=this
return new C.X7(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+50}
C.cZZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZY(w,d))},
$S:z+65}
C.cZY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZN.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cs(u)?v.r>=J.a9(v.d):w)v.r=J.a9(v.d)-1},
$S:0}
C.cZK.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cZn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cZo.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.cZO.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cZu.prototype={
$1(d){var w=null,v=A.L(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eo(A.a([A.bG(!1,B.dd,w,w,!0,w,w,new C.cZs(d),w,w),A.bI(B.vd,new C.cZt(d),A.bk(B.mk,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.cZs.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZt.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cZv.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.cZL.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+16}
C.cZM.prototype={
$0(){return B.d.gI(D.xs)},
$S:z+11}
C.cZw.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WG(v,u,J.a9(w.d),null)},
$S:z+35}
C.cZx.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZX.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aJ(s,new C.Wn(r.y,r.gDW(0),J.a9(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cZV(r),s,s,s,s,s,s,!1,B.af)
else{w=e-1
v=J.q(r.d,w)
J.a9(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6h(v,e,w,u,t,r.gbIO(),s)
w=t}return A.c4(q,new C.cZW(r,e),new A.C(B.Va,w,s))},
$S:1874}
C.cZW.prototype={
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
C.cZV.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCB(B.oR,B.ie)},
$S:0}
C.cZH.prototype={
$0(){var w=this.a
return w.n(new C.cZG(w))},
$S:0}
C.cZG.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZI.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).K(null)
return null},
$S:0}
C.cZp.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.iQ.j(0.5),r=x.p,q=A.a([D.eQp,B.aa],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ci(p.d)?"Write this book":"Write a new book"
q.push(p.WI(d,B.dO,w,J.ci(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WI(d,L.afI,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cs(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ju.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ju.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WI(d,W.agM,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WI(d,B.p8,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WI(d,B.p8,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ev(u,E.z8,A.br(!0,new A.C(Z.Dx,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.ade,B.cX,u,new A.b5(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.cZJ.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.cZA.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cs(w.d)
return new C.X9(v,J.cs(w.d),w.r+1,null)},
$S:z+63}
C.cZB.prototype={
$1(d){var w=null
return A.nU(!1,A.eo(w,w,w,E.z8,new A.k1(this.a,new C.cZz(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.cZz.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3e,B.nC,A.D(A.d(e,w,w,w,w,w,w,B.is,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.cZC.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZD.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zG(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.a0l(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.cZy(s,t))
w=4
return A.b(s.kp(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZQ.prototype={
$1(d){var w=null
return A.nU(!1,A.eo(w,w,w,E.z8,new A.k1(this.a,new C.cZP(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.cZP.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3e,B.nC,A.D(A.d(e,w,w,w,w,w,w,B.is,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.cZR.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZS.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZT.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zG(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kp(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZq.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bbG(B.oR,R.Ju)},
$S:0}
C.cZr.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCB(B.oR,R.Ju)},
$S:0}
C.d0p.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d0q.prototype={
$1(d){var w=this.a
return w.n(new C.d0o(w))},
$S:9}
C.d0o.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d0r.prototype={
$1(d){var w=this.a
return w.n(new C.d0n(w))},
$S:9}
C.d0n.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d0s.prototype={
$1(d){var w=this.a
return w.n(new C.d0m(w))},
$S:9}
C.d0m.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d0t.prototype={
$0(){var w=this.a
return w.n(new C.d0l(w,this.b))},
$S:0}
C.d0l.prototype={
$0(){var w=this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d0u.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_c()
A.a7(this.b,!1).K(new A.bkD(w,v))},
$S:0}
C.d_d.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d_c.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.X5(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+62}
C.d_h.prototype={
$1(d){return d.a===this.a},
$S:z+61}
C.d_g.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b27(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.d_e(d),v,v),A.bI(B.vd,new C.d_f(d),A.bk(B.mk,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.z8,w,v,v,v,v,D.ePn,v)},
$S:20}
C.d_e.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.d_f.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.d_i.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d_j.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a3(s,t,w[u],t))
return A.cg(A.cb(B.bH,r,B.bw,18,14),B.q,t,B.z,t,D.bfY,t,t,B.ah)},
$S:310}
C.d_b.prototype={
$0(){return this.a.Oe(0,this.b)},
$S:0}
C.d_a.prototype={
$0(){return this.a.NJ(0,this.b)},
$S:0}
C.cyQ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+16}
C.cyR.prototype={
$0(){return B.d.gI(D.xs)},
$S:z+11}
C.cyS.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bV(0,new A.C(d,A.bQ(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.b7),w),0,0,0)},
$S:1876}
C.cSh.prototype={
$1(d){return this.a.n(new C.cSg(this.b,this.c))},
$S:9}
C.cSg.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cSG.prototype={
$1(d){return this.a.n(new C.cSt())},
$S:2}
C.cSt.prototype={
$0(){},
$S:0}
C.cSH.prototype={
$1(d){return this.a.n(new C.cSs())},
$S:2}
C.cSs.prototype={
$0(){},
$S:0}
C.cSI.prototype={
$0(){var w=this.a
return w.n(new C.cSr(w,this.b))},
$S:0}
C.cSr.prototype={
$0(){var w=this.a
return w.d=w.gns().Ej(this.b.a)},
$S:0}
C.cSJ.prototype={
$0(){var w=this.a
return w.n(new C.cSq(w,this.b))},
$S:0}
C.cSq.prototype={
$0(){var w=this.a
return w.d=w.gns().cxC(this.b)},
$S:0}
C.cSK.prototype={
$1(d){return this.a.n(new C.cSp())},
$S:2}
C.cSp.prototype={
$0(){},
$S:0}
C.cSL.prototype={
$0(){var w=this.a
return w.n(new C.cSo(w,this.b))},
$S:0}
C.cSo.prototype={
$0(){var w=this.a
return w.d=w.gns().cxH(this.b.a)},
$S:0}
C.cSM.prototype={
$1(d){var w=this.a
return w.n(new C.cSB(w,d))},
$S:6}
C.cSB.prototype={
$0(){var w=this.a
return w.d=w.gns().cyA(this.b)},
$S:0}
C.cSN.prototype={
$1(d){var w=this.a
return w.d=w.gns().azN(d)},
$S:2}
C.cSO.prototype={
$1(d){var w=this.a
return w.d=w.gns().cxK(d)},
$S:2}
C.cSQ.prototype={
$1(d){var w=this.a
return w.d=w.gns().cyy(d)},
$S:2}
C.cSR.prototype={
$1(d){var w=this.a
return w.n(new C.cSA(w,d))},
$S:9}
C.cSA.prototype={
$0(){var w=this.a
return w.d=w.gns().cyp(this.b)},
$S:0}
C.cSS.prototype={
$0(){var w=this.a,v=w.gns(),u=B.a.i(w.gDW(0).a.a),t=B.a.i(w.gax6().a.a)
u=v.b6D(B.a.i(w.gann().a.a),t,u)
A.a7(this.b,!1).K(u)
return null},
$S:0}
C.dKJ.prototype={
$0(){var w=this.a
w.v_()
w.a.bl()
w.a.p_()},
$S:0}
C.dKI.prototype={
$0(){var w=this.a
w.v_()
w.a.bl()
w.a.p_()},
$S:0}
C.dKL.prototype={
$0(){var w=this,v=w.b
if(J.cs(v)||J.ci(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dKM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKN.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dKH.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dKK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dKP.prototype={
$0(){this.a.MN()
return null},
$S:0}
C.dKO.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.dK9.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bG(!1,B.dd,w,w,!0,w,w,new C.dK7(d),w,w),r=A.bk(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eo(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dK8(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dK7.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dK8.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dKa.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cy4(this.b)},
$S:0}
C.dK4.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOl(w.b,w.c,w.d)},
$S:8}
C.dJD.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dJE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.EX(t.a.c),$async$$0)
case 2:s=r.qC(q.dE(e,new C.dJQ(t)))
if(s!=null&&t.c!=null)t.n(new C.dJR(t,s))
t.a.bl()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJQ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJT.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dK3.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cyR(C.h00(w),w)},
$S:0}
C.dK1.prototype={
$1(d){return new A.ed(new C.dK0(this.a,this.b),null)},
$S:21}
C.dK0.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahn,v,v,v,p>0?new C.dJX(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aN,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.ahW,v,v,v,new C.dJY(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.dJZ(d),v,v),A.bI(B.pB,new C.dK_(d),A.bk(B.bR,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:162}
C.dJX.prototype={
$0(){return this.b.$1(new C.dJW(this.a))},
$S:0}
C.dJW.prototype={
$0(){return--this.a.a},
$S:0}
C.dJY.prototype={
$0(){return this.b.$1(new C.dJV(this.a))},
$S:0}
C.dJV.prototype={
$0(){return++this.a.a},
$S:0}
C.dJZ.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dK_.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dK2.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cyF(this.a.a)
w.r.a8(0)},
$S:0}
C.dJr.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.af9(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fUW(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+13}
C.dJs.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.f,x.P)
w.push(this.b)
v.d=u.azK(w)},
$S:0}
C.dKc.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaG(this.b,w,this.c,null)},
$S:z+31}
C.dK6.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.kY,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.aa,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.eo(A.a([A.bI(D.eZl,new C.dK5(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b4,w,u,v,w,s,w,new A.b5(t,B.W),r,w)},
$S:20}
C.dK5.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dJt.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dJu.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dJv.prototype={
$1(d){return d.a},
$S:z+7}
C.dJw.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hO(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.azK(w)},
$S:0}
C.dJA.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.af9(q)
w=A.T(q).k("a5<1>")
q=A.A(new A.a5(q,new C.dJy(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fUW(v.e,null,r,v.f,v.r,new C.dJz(s,r),q,"Member Profile",w,t,u)},
$S:z+13}
C.dJz.prototype={
$0(){return this.a.a7e(this.b)},
$S:0}
C.dJy.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dJB.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hO>")
w=A.A(new A.J(w,new C.dJx(this.b),v),v.k("ai.E"))
u.d=t.azK(w)},
$S:0}
C.dJx.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+24}
C.dKb.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dJN.prototype={
$1(d){return d.length!==0},
$S:3}
C.dJO.prototype={
$1(d){var w=this
return new A.ed(new C.dJM(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dJM.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dJI(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(12),B.da),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ae,v,v,v,v,v,B.lB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a6,v,B.am,v,v,v,v))
p=A.u(p,B.ad,v,B.e,B.R,0,B.p)
t=w.a
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.dJJ(d),v,v),A.bI(B.Hh,new C.dJK(t,u,o,e),A.bk(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.eND,new C.dJL(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a3(360,v,p,v),v,v,v,v,r,v)},
$S:162}
C.dJI.prototype={
$1(d){var w=null
return A.dK(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bAL,w,w,w,new C.dJH(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1877}
C.dJH.prototype={
$0(){return this.a.$1(new C.dJF(this.b,this.c))},
$S:0}
C.dJF.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dJJ.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJK.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dJG(w.c,u))
v.bG(0,B.c_)}},
$S:0}
C.dJG.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dJL.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).K(!0)},
$S:0}
C.dJP.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.czi(this.b,D.rH,C.EV(v,w.a.c))},
$S:0}
C.dKj.prototype={
$1(d){return d.as},
$S:z+1}
C.dKk.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.dKl.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hNJ(v)
return w.TK(v==null?null:v.a)},
$S:0}
C.dKm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hr2(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcg(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.chX(new A.ap(u,t),v.gbct(),new A.ap(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cxe:D.cvR
q=A.H(s?B.du:D.b1_,B.r,1)
p=A.m(22)
o=A.bV(0,A.b2(m,m,m,new C.b9C(s,m),B.as),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.am(B.V,m,B.a9,B.q,A.a([o,A.bV(0,A.tK(new A.M(n,n,n,n),new A.a3(u,t,new C.bat(l.d,v,l.f,w,new C.dKf(l),l.gc2u(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.brz(s,new C.dKg(l,e),new C.dKh(l,e),new C.dKi(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.h,m,m,new A.o(m,m,q,k,m,new A.a8(B.b3,B.bb,B.x,r,m,m),B.n),m,m,m,O.ack,m,m,m,m)},
$S:229}
C.dKf.prototype={
$1(d){var w=this.a
w.n(new C.dKd(w,d))},
$S:2}
C.dKd.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.G(0,v)},
$S:0}
C.dKg.prototype={
$0(){var w=this.b
return this.a.b4l(1.25,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dKh.prototype={
$0(){var w=this.b
return this.a.b4l(0.8,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dKi.prototype={
$0(){var w=this,v=w.b
return w.a.aOl(new A.ap(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ap(w.c,w.d),w.e.gbct())},
$S:0}
C.dKn.prototype={
$0(){var w=this.a
return w.n(new C.dKe(w))},
$S:0}
C.dKe.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dJC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fB(new A.fu(s.c)),$async$$0)
case 2:t.wN("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_n.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.bea(u,C.h42(v.c,u),new C.d_m(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+25}
C.d_m.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d_o.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhr(d.d,d.c,u.f.q(0,d.a),new C.d_l(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+26}
C.d_l.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fak.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qC(new A.cQ(new A.a5(v,new C.fal(d),w.k("a5<1>")),new C.fam(),w.k("cQ<1,n>")))},
$S:z+22}
C.fal.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fam.prototype={
$1(d){return d.a},
$S:z+7}
C.fai.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.faj.prototype={
$1(d){return d.b},
$S:z+7}
C.fap.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qC(new A.cQ(new A.a5(v,new C.faq(d),w.k("a5<1>")),new C.far(),w.k("cQ<1,n>")))},
$S:z+22}
C.faq.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.far.prototype={
$1(d){return d.a},
$S:z+7}
C.fan.prototype={
$1(d){var w,v=A.eN([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.G(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+28}
C.fao.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d_q.prototype={
$0(){return this.a},
$S:z+29}
C.d_H.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:248}
C.d_z.prototype={
$2(d,e){var w=this.a.ci(0,d,new C.d_A()),v=J.a6(w)
if(!v.q(w,e))v.G(w,e)},
$S:121}
C.d_A.prototype={
$0(){return A.a([],x.s)},
$S:729}
C.d_y.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eQ(w,e)
return w===!0},
$S:316}
C.d_r.prototype={
$0(){return A.a([],x.u)},
$S:z+30}
C.d_x.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d_w.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.G(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.AB:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.G(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.AB:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1879}
C.d_s.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d_B.prototype={
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
t=J.aU(t==null?D.AB:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.bf(w,new C.d_C(r)))w.push(r)}}B.d.bm(w,new C.d_D(a8))
B.d.aZ(w,new C.d_E())
q=C.hr1(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.e74],x.G))}a8=A.a([],x.s)
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
else a8.m(0,a9,new A.bkn(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1880}
C.d_C.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d_D.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d_E.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.d_F.prototype={
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
C.d_G.prototype={
$1(d){return 16+d*156},
$S:256}
C.d_p.prototype={
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
t.m(0,d,new C.Ef(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Ef(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Ef(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ij(d,new A.v(e+t,w),s,s.length))}},
$S:191}
C.d_t.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFE(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:121}
C.d_u.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.d_v.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_I.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_J.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:459}
C.d_K.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d_L.prototype={
$1(d){return d>=0.5},
$S:126}
C.eVc.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hI(A.aH(!1,v,!0,new A.a3(38,38,A.V(d,this.a.c?B.c:B.d3,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1882}
C.ewS.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.C(B.o_,A.aH(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eAs,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.K0,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewR(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+33}
C.ewR.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.deZ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.deY.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mS,B.L,w,w)
return A.eo(A.a([A.bG(!1,B.dd,w,w,!0,w,w,new C.deW(d),w,w),A.bG(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lL,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.deX(d),w,w)],x.p),B.b4,B.Dr,w,u,D.bhd,w,D.bj6,new A.b5(v,B.W),w,w)},
$S:20}
C.deW.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.deX.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.df7.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.df8.prototype={
$1(d){var w=this.a
return w.n(new C.df6(w,d))},
$S:z+34}
C.df6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.df9.prototype={
$1(d){var w=null
return A.p7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.dfc.prototype={
$1(d){var w=this.a
return w.n(new C.df5(w,d))},
$S:30}
C.df5.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dfb.prototype={
$1(d){var w=null
return A.p7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.dfd.prototype={
$1(d){var w=this.a
return w.n(new C.df4(w,d))},
$S:30}
C.df4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dfe.prototype={
$0(){var w=this.a
return w.n(new C.df3(w))},
$S:0}
C.df3.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dff.prototype={
$0(){var w=this.a
return w.n(new C.df2(w))},
$S:0}
C.df2.prototype={
$0(){return++this.a.at},
$S:0}
C.dfg.prototype={
$0(){var w=this.a
return w.n(new C.df1(w))},
$S:0}
C.df1.prototype={
$0(){return--this.a.ax},
$S:0}
C.dfh.prototype={
$0(){var w=this.a
return w.n(new C.df0(w))},
$S:0}
C.df0.prototype={
$0(){return++this.a.ax},
$S:0}
C.dfi.prototype={
$1(d){var w=this.a
return w.n(new C.df_(w,d))},
$S:9}
C.df_.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dfa.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dfj.prototype={
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
return A.D(A.aD(!1,B.X,!0,r,A.aH(!1,o,!0,A.dg(r,A.u(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b9,new A.o(w,r,u,v,r,r,B.n),B.eD,r,r,r,B.jB,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dfk(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+36}
C.dfk.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dft.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.c2M.prototype={
$2(d,e){return new A.bq(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c2T.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c2U.prototype={
$2(d,e){var w=J.b4(e,new C.c2S(),x.a)
w=A.A(w,w.$ti.k("ai.E"))
return new A.bq(d,w,x.d2)},
$S:z+38}
C.c2S.prototype={
$1(d){return d.ad()},
$S:z+12}
C.c2O.prototype={
$1(d){return C.ahY(A.Z(d,x.N,x.z))},
$S:z+8}
C.c2P.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c2Q.prototype={
$1(d){return C.fM0(A.Z(d,x.N,x.z))},
$S:z+19}
C.c2R.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c2Y.prototype={
$1(d){return new A.aCK(d.f.length,d.a,d.b)},
$S:z+40}
C.c2Z.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:564}
C.c2V.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c2W.prototype={
$1(d){return d.cyh(C.EV(d,this.a))},
$S:z+41}
C.dKw.prototype={
$1(d){return C.ti(d,this.a.a.c)},
$S:z+2}
C.dKx.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dKB.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dKC.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dKt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWp(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xj("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oz(r.c,r.e),$async$$0)
case 4:s.xj(p)
w=5
return A.b(s.I3(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWp(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xj("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oz(r.c,r.e),$async$$0)
case 4:s.xj(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.T_(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xj("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xj("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xj("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I3(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a4(j)
o=r.a
if(o.c==null){w=1
break}o.xj(B.a.e1(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dKA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWo(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xj("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).cs(A.eH(new C.dKz(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oz(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKz.prototype={
$1(d){var w=this.b
return new C.Y3(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+42}
C.dKy.prototype={
$1(d){return D.fbJ},
$S:z+43}
C.dKE.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKF.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dKD(w,d)
return new A.C(B.d7,new C.bax(this.b,d.c,d.a,w,null),null)},
$S:1883}
C.dKD.prototype={
$0(){return this.a.Vp(this.b.b)},
$S:0}
C.dKo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dKp.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dKq.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dKr.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dKs.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKG.prototype={
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
C.dwY.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+44}
C.dwZ.prototype={
$0(){return B.d.gI(D.a_v)},
$S:z+45}
C.dx_.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.as(A.V(this.b.d,B.c.j(0.95),w,w,D.cCV,44),w,w,w),w,w,new C.bfh(u,t,v,w),B.as)},
$S:75}
C.fpP.prototype={
$1(d){return A.p6(new C.fpO(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.fpO.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.aa(0,B.G,B.w.j(r?0.35:0.08),B.tm,24)],x.V),o=r?B.dT:B.cg
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bR.j(0.18)],x.O)
w=A.p(t,D.bvq,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a1,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aO:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.T,o,new A.C(E.adi,A.B(A.a([w,B.ba,A.D(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bm:B.bv,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ig(!0,t,e,B.z,D.eo7,new C.fpN(this.b,s),20,B.acT,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.kg,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fpN.prototype={
$2(d,e){var w=null,v=D.a_v[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dT:B.cg,B.r,1),q=A.a([new A.aa(0,B.G,B.w.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.D(new C.a3W(v.a,!0,w),1),n=s?B.j8:B.iz,m=A.d(v.b,w,1,B.Z,w,w,w,A.l(w,w,s?B.aO:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.X,!0,w,A.aH(!1,u,!0,A.eq(A.bu(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.Z,w,w,w,A.l(w,w,s?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.kW,w,w,w)],l),B.ad,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fpM(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:73}
C.fpM.prototype={
$0(){A.a7(this.a,!1).K("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.car.prototype={
$0(){return this.a.acW(this.b)},
$S:0}
C.fpe.prototype={
$1(d){return D.f8x},
$S:z+46}
C.fwl.prototype={
$1(d){var w=this
return new C.ZN(w.a,w.b,w.c,w.d,null)},
$S:z+71}
C.fpg.prototype={
$1(d){return new C.WI(this.a,null)},
$S:z+48}
C.fpf.prototype={
$1(d){return D.f9w},
$S:z+49}
C.cT3.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cT4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cT2(w,d))},
$S:30}
C.cT2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cT5.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cT6.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cT_.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cT0.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cT1.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqF.prototype={
$0(){},
$S:0}
C.cqL.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqM.prototype={
$0(){return this.a.aJW(-1)},
$S:0}
C.cqN.prototype={
$1(d){return this.a.n(new C.cqK())},
$S:2}
C.cqK.prototype={
$0(){},
$S:0}
C.cqO.prototype={
$0(){return this.a.aJW(1)},
$S:0}
C.cqP.prototype={
$1(d){return this.a.n(new C.cqJ())},
$S:2}
C.cqJ.prototype={
$0(){},
$S:0}
C.cqQ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dT:B.cg
return A.tA(u,u,B.aW,r,u,new C.cqI(t,d),B.zI,s,w,u,new A.ax(v,1,B.r,-1),B.c6)},
$S:1884}
C.cqI.prototype={
$1(d){var w=this.a
return w.n(new C.cqG(w,this.b))},
$S:9}
C.cqG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cqR.prototype={
$1(d){return this.a.n(new C.cqH())},
$S:2}
C.cqH.prototype={
$0(){},
$S:0}
C.cqS.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUF.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).K(w)},
$S:2}
C.eUG.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUH.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).K(w)},
$S:0}
C.eUD.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbsu()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b2(new A.C(D.bj5,new A.en(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bro(p,v,this.b.a,u,t,r),r,r,B.as)},
$S:75}
C.eUE.prototype={
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
return A.aD(!1,B.X,!0,p,A.aH(!1,v,!0,A.eq(D.dLm,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.d3(-1.2+t,-0.5),new A.d3(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
$S:125}
C.fo7.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eu1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etT.prototype={
$0(){return this.a.e=!0},
$S:0}
C.etU.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eu_.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.ed(new C.etZ(w,this.b),null)},
$S:21}
C.etZ.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ev(w,u,new A.C(B.adc,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aa,C.fRM(new C.etW(r,e),r.a),B.ay,A.B(A.a([A.D(A.dU(B.dd,new C.etX(d),w),1),B.av,A.D(A.bI(B.R4,new C.etY(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ad,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cX,w,new A.b5(t,B.W),w)},
$S:97}
C.etW.prototype={
$1(d){return this.b.$1(new C.etV(this.a,d))},
$S:30}
C.etV.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.etX.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etY.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).K(w)
return null},
$S:0}
C.eu0.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QO(this.b)},
$S:0}
C.etO.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.d,x.Q)
w.push(this.b)
v.d=u.b6b(w)},
$S:0}
C.etS.prototype={
$1(d){return this.beT(d)},
beT(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Jt(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iC(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.etR.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a5<1>")
w=A.A(new A.a5(w,new C.etQ(this.b),v),v.k("G.E"))
u.d=t.b6b(w)},
$S:0}
C.etQ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+17}
C.eu2.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.eu3.prototype={
$1(d){return this.a.bwp(d,this.b)},
$S:z+52}
C.etP.prototype={
$0(){return this.a.a7d(this.b)},
$S:0}
C.fwd.prototype={
$1(d){return new C.ab0(this.a,this.b,this.c,null)},
$S:z+53}
C.eu5.prototype={
$0(){return this.a.XX(this.b)},
$S:0}
C.eu6.prototype={
$0(){return this.a.Oa(this.b)},
$S:0}
C.eu7.prototype={
$0(){return this.a.D5(this.b)},
$S:0}
C.eu8.prototype={
$0(){return this.a.XY(this.b)},
$S:0}
C.eu4.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etK.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.etL.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.etM(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etM.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.euv.prototype={
$2(d,e){return d+e.gw1()},
$S:z+56}
C.eur.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eus.prototype={
$0(){return this.a.f=!1},
$S:0}
C.euc.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bvQ,B.h,v,v,new A.o(B.aH.j(u?0.18:0.08),v,A.H(B.aH.j(0.28),B.r,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aO:B.aG
u=u?B.dT:B.cg
w=x.p
return A.ev(v,t,new A.C(B.wu,A.u(A.a([r,B.aN,q,B.P,p,B.d1,A.B(A.a([A.D(A.dU(B.mW,new C.eua(d),A.d9(v,v,v,v,v,v,v,v,v,o,v,v,B.eU,v,new A.b5(A.m(14),B.W),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.av,A.D(A.bI(D.f1K,new C.eub(d),A.bk(B.aH,v,v,v,v,v,B.eU,v,new A.b5(A.m(14),B.W),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cX,v,new A.b5(s,B.W),v)},
$S:46}
C.eua.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.eub.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.eul.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.aa(0,B.G,B.w.j(k?0.35:0.08),B.fz,28)],x.V),g=k?D.cIY:B.ZW,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.eiP,B.au,new A.bE(B.a1,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cp,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.adf,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b_A(B.b0,B.iF,new C.eui(v,d),l,"Camera import","Scan QR"),1),B.av,A.D(v.b_A(B.cE,M.x7,new C.euj(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aH.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aH.j(0.28),B.r,1)
o=A.p(m,D.bvf,B.h,m,m,new A.o(B.aH.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aO:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.br(!0,new A.C(B.ub,A.p(m,A.u(A.a([g,new A.C(B.add,A.u(A.a([w,B.T,u,B.bs,t,B.T,A.aD(!1,B.X,!0,m,A.aH(!1,s,!0,A.p(m,A.B(A.a([o,B.ba,n,A.V(B.ek,k?B.bm:B.bv,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bA,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.euk(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:34}
C.eui.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uC("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.euj.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uC("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.euk.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.M5(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eug.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.aa(0,B.G,B.w.j(o?0.35:0.08),B.eH,24)],x.V),k=o?B.dT:B.cg
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bm:B.bv
u=A.bu(w,new A.a3(48,48,C.aML(!0,A.m(12),48,P.Kz,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.Z,q,q,q,A.l(q,q,o?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zx(v.gw1())
s=x.p
r=this.a
return A.br(!0,new A.C(B.ub,A.p(q,A.u(A.a([B.T,k,new A.C(D.ada,A.B(A.a([u,B.ba,A.D(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zm,r.ccm(B.rZ,B.aS,new C.eue(d),p,"QR code or backup file","Transfer project"),r.aXF(!0,B.e4,B.aH,new C.euf(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:34}
C.eue.prototype={
$0(){A.a7(this.a,!1).K("transfer")
return null},
$S:0}
C.euf.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
C.euh.prototype={
$1(d){return this.beU(d)},
beU(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Jt(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uO(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.euy.prototype={
$0(){var w=this.a
w.a.bl()
w.n(new C.eux(w))},
$S:0}
C.eux.prototype={
$0(){return this.a.r++},
$S:0}
C.euz.prototype={
$0(){var w=this.a
return w.n(new C.euw(w))},
$S:0}
C.euw.prototype={
$0(){return this.a.r++},
$S:0}
C.eu9.prototype={
$0(){var w=this.a.c
w.toString
return A.iC(w,null)},
$S:0}
C.eud.prototype={
$0(){return this.a.c5U(this.b)},
$S:0}
C.euu.prototype={
$0(){var w=this.a
return w.n(new C.eut(w,this.b))},
$S:0}
C.eut.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.euo.prototype={
$0(){return this.a.uC("scan")},
$S:0}
C.eup.prototype={
$0(){return this.a.uC("file")},
$S:0}
C.euq.prototype={
$1(d){return this.a.ccn(d,this.b)},
$S:z+57}
C.eun.prototype={
$0(){return this.a.D9(this.b)},
$S:0}
C.eum.prototype={
$0(){return this.a.Yq(this.b,this.c)},
$S:0}
C.cq6.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+58}
C.cq5.prototype={
$1(d){return d.ad()},
$S:z+59}
C.cq3.prototype={
$1(d){return C.h9O(A.Z(d,x.N,x.z))},
$S:z+60}
C.cq4.prototype={
$1(d){return d.a.length!==0},
$S:z+17}
C.f9E.prototype={
$1(d){return d.y===D.jZ},
$S:z+2}
C.fwB.prototype={
$1(d){return C.bx8(d,this.a)},
$S:z+2}
C.f8Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bIJ.prototype={
$1(d){return!d.as},
$S:z+1}
C.bII.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bIF.prototype={
$1(d){return C.fM1(A.Z(d,x.N,x.z))},
$S:z+14}
C.bIG.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bIH.prototype={
$1(d){return J.k(d)},
$S:17}
C.f10.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.eXT.prototype={
$1(d){return C.fCM(A.Z(d,x.N,x.z))},
$S:z+64}
C.eXU.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eXV.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.fp5.prototype={
$1(d){return J.k(d)},
$S:17}
C.fp6.prototype={
$1(d){return d.a},
$S:z+66}
C.fp7.prototype={
$1(d){return d.length!==0},
$S:3}
C.fp8.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.fp9.prototype={
$1(d){return d.QO(null).ad()},
$S:z+67}
C.fwz.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fa5.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fcd.prototype={
$1(d){return C.ahY(A.Z(d,x.N,x.z))},
$S:z+8}
C.fce.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcf.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fcg.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fch.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.foT.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.fwu.prototype={
$1(d){return C.ahY(A.Z(d,x.N,x.z))},
$S:z+8}
C.fwv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fww.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f9N.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.f9O.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fwF.prototype={
$1(d){return!d.as},
$S:z+1}
C.f9o.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.f9p.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.f9q.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.fwm.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fcZ.prototype={
$1(d){return d.Q},
$S:z+69}
C.foP.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fca.prototype={
$1(d){return C.ahY(A.Z(d,x.N,x.z))},
$S:z+8}
C.fcb.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcc.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.foN.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eYo.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYp.prototype={
$1(d){return C.fM1(A.Z(d,x.N,x.z))},
$S:z+14}
C.eYq.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eYr.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eYs.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYF.prototype={
$2(d,e){return d.eM(new C.eYG(e))},
$S:1885}
C.eYG.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c2},
$S:1886}
C.eYC.prototype={
$1(d){return C.hvt(d,this.a)},
$S:z+70}
C.eYD.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eYE.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f1F.prototype={
$1(d){return d.a},
$S:z+47}
C.f1G.prototype={
$1(d){return d.length!==0},
$S:3}
C.f1H.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f3H.prototype={
$1(d){return d.ad()},
$S:z+5}
C.f8c.prototype={
$1(d){return C.fXa(d,C.EV(d,this.a))},
$S:z+5}
C.f8d.prototype={
$1(d){return C.fXb(d,C.EV(d,this.a))},
$S:z+5};(function aliases(){var w=C.aHZ.prototype
w.boR=w.p
w=C.aK4.prototype
w.br8=w.p
w=C.aK5.prototype
w.br9=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azC.prototype,"gc9p","c9q",23)
var s
w(s=C.awJ.prototype,"gc2A","c2B",27)
v(s,"gaIc","LF",0)
v(s,"gchi","DC",0)
v(s,"gbDX","Mj",0)
v(s,"gcuL","xk",0)
v(s,"gcbl","Z5",0)
v(s,"gbEn","US",0)
w(s,"gbIO","bIP",39)
v(s,"gbu5","yO",0)
v(C.awK.prototype,"gcuH","E1",0)
v(s=C.aAc.prototype,"gacy","uP",0)
v(s,"gc5b","Yi",0)
v(s,"gaMb","Gx",0)
v(s=C.aA9.prototype,"gcr3","a07",0)
v(s,"gacy","uP",0)
v(s,"gcfr","ZL",0)
v(s,"gc66","Yv",0)
w(s,"gc2u","c2v",51)
v(s,"gbEe","GC",0)
v(s,"gcrX","crY",3)
v(s,"gbV1","Wu",0)
w(s,"gc10","c11",37)
v(s,"gc4W","c4X",3)
v(s=C.ayB.prototype,"gbZS","NK",0)
v(s,"gbZU","bZV",3)
v(s,"gbAW","a6R",0)
v(s=C.aAb.prototype,"gbHm","Vl",0)
v(s,"gbRv","VZ",0)
v(s,"gcly","a_A",0)
v(s,"gchS","a_b",0)
v(C.aAa.prototype,"gchA","aei",0)
v(C.apw.prototype,"gc0Z","XW",0)
v(C.avw.prototype,"ga_S","ID",3)
v(C.avv.prototype,"ga_S","ID",3)
v(C.auh.prototype,"ga_S","ID",3)
v(s=C.aBC.prototype,"gaX3","OF",0)
v(s,"gbsX","TE",0)
v(s,"gc5V","c5W",3)
w(C.aBB.prototype,"gc1P","c1Q",54)
u(C.aBD.prototype,"gaM5",0,0,null,["$1","$0"],["Gw","bCb"],55,0,0)
t(C,"h3h","hEE",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alu,C.mM,C.FX,C.acb,C.NO,C.tz,C.Ij,C.Ef,C.bav,C.aFE,C.amE,C.d_M,C.lh,C.aPC,C.aPB,C.aNG,C.t4,C.qn,C.l1,C.hO,C.kl,C.aDE])
u(A.i2,[C.fgP,C.fgO,C.fgQ,C.fpI,C.f7a,C.f7b,C.f7g,C.fey,C.fex,C.few,C.bXf,C.fqd,C.fq5,C.fqh,C.f9V,C.dxE,C.dxz,C.dxA,C.dxc,C.dx8,C.dxT,C.dxU,C.dxN,C.dxO,C.dxV,C.dxW,C.fc7,C.fc8,C.foR,C.fwt,C.f9M,C.fpm,C.cZZ,C.cZn,C.cZu,C.cZL,C.cZw,C.cZp,C.cZA,C.cZB,C.cZz,C.cZQ,C.cZP,C.d0q,C.d0r,C.d0s,C.d_c,C.d_h,C.d_g,C.cyQ,C.cyS,C.cSh,C.cSG,C.cSH,C.cSK,C.cSM,C.cSN,C.cSO,C.cSQ,C.cSR,C.dKK,C.dK9,C.dK4,C.dJD,C.dJQ,C.dJT,C.dK1,C.dJr,C.dKc,C.dK6,C.dJt,C.dJu,C.dJv,C.dJA,C.dJy,C.dJx,C.dJN,C.dJO,C.dJI,C.dKj,C.dKf,C.d_n,C.d_o,C.fak,C.fal,C.fam,C.fai,C.faj,C.fap,C.faq,C.far,C.fan,C.fao,C.d_H,C.d_x,C.d_s,C.d_C,C.d_D,C.d_G,C.d_u,C.d_J,C.d_K,C.d_L,C.eVc,C.ewS,C.deY,C.df7,C.df8,C.df9,C.dfc,C.dfb,C.dfd,C.dfi,C.dfj,C.c2T,C.c2S,C.c2O,C.c2P,C.c2Q,C.c2R,C.c2Y,C.c2V,C.c2W,C.dKw,C.dKz,C.dKy,C.dKF,C.dKG,C.dwY,C.fpP,C.fpe,C.fwl,C.fpg,C.fpf,C.cT4,C.cT5,C.cT0,C.cqN,C.cqP,C.cqQ,C.cqI,C.cqR,C.eUF,C.fo7,C.eu_,C.etW,C.etS,C.etQ,C.eu3,C.fwd,C.euc,C.eul,C.eug,C.euh,C.euq,C.cq5,C.cq3,C.cq4,C.f9E,C.fwB,C.f8Q,C.bIJ,C.bII,C.bIF,C.bIG,C.bIH,C.eXT,C.eXU,C.fp5,C.fp6,C.fp7,C.fp8,C.fp9,C.fwz,C.fa5,C.fcd,C.fce,C.fcg,C.fch,C.foT,C.fwu,C.fwv,C.fww,C.f9N,C.f9O,C.fwF,C.f9o,C.f9p,C.fwm,C.fcZ,C.foP,C.fca,C.fcb,C.foN,C.eYo,C.eYp,C.eYq,C.eYr,C.eYs,C.eYG,C.eYC,C.eYD,C.f1F,C.f1G,C.f3H,C.f8c,C.f8d])
u(A.ar,[C.aUX,C.Wn,C.b6h,C.bat,C.bea,C.brz,C.bhr,C.aaF,C.be9,C.aaE,C.be8,C.ayC,C.aEH,C.aaG,C.I8,C.bau,C.a9X,C.bas,C.bax,C.aUV,C.apw,C.ab0])
u(A.n4,[C.b6T,C.b83,C.b7V,C.aDz,C.bdd,C.baw,C.b9C,C.bfh,C.bro])
u(A.jk,[C.fqa,C.fqb,C.fqc,C.fq3,C.fq4,C.fqf,C.fqg,C.dxQ,C.dxC,C.dxF,C.dxj,C.dxk,C.dxl,C.dxi,C.dxq,C.dxh,C.dxr,C.dxs,C.dxg,C.dxt,C.dxf,C.dxu,C.dxe,C.dxv,C.dx6,C.dx7,C.dxd,C.dxw,C.dxb,C.dxx,C.dxa,C.dxm,C.dx9,C.dxn,C.dx5,C.dxo,C.dxp,C.dxR,C.dxS,C.dxG,C.dxH,C.dxI,C.dxJ,C.dxK,C.dxL,C.dxM,C.dxY,C.dxP,C.cZY,C.cZN,C.cZK,C.cZo,C.cZO,C.cZs,C.cZt,C.cZv,C.cZM,C.cZx,C.cZV,C.cZH,C.cZG,C.cZI,C.cZJ,C.cZC,C.cZE,C.cZF,C.cZy,C.cZR,C.cZU,C.cZq,C.cZr,C.d0p,C.d0o,C.d0n,C.d0m,C.d0t,C.d0l,C.d0u,C.d_d,C.d_e,C.d_f,C.d_i,C.d_b,C.d_a,C.cyR,C.cSg,C.cSt,C.cSs,C.cSI,C.cSr,C.cSJ,C.cSq,C.cSp,C.cSL,C.cSo,C.cSB,C.cSA,C.cSS,C.dKJ,C.dKI,C.dKL,C.dKM,C.dKN,C.dKH,C.dKP,C.dKO,C.dK7,C.dK8,C.dKa,C.dJE,C.dJS,C.dJR,C.dJU,C.dK3,C.dJX,C.dJW,C.dJY,C.dJV,C.dJZ,C.dK_,C.dK2,C.dJs,C.dK5,C.dJw,C.dJz,C.dJB,C.dKb,C.dJH,C.dJF,C.dJJ,C.dJK,C.dJG,C.dJL,C.dJP,C.dKk,C.dKl,C.dKd,C.dKg,C.dKh,C.dKi,C.dKn,C.dKe,C.dJC,C.d_m,C.d_l,C.d_q,C.d_A,C.d_r,C.ewR,C.deZ,C.deW,C.deX,C.df6,C.df5,C.df4,C.dfe,C.df3,C.dff,C.df2,C.dfg,C.df1,C.dfh,C.df0,C.df_,C.dfa,C.dfk,C.dft,C.dKx,C.dKB,C.dKC,C.dKt,C.dKu,C.dKv,C.dKA,C.dKE,C.dKD,C.dKo,C.dKp,C.dKq,C.dKr,C.dKs,C.dwZ,C.fpM,C.car,C.cT3,C.cT2,C.cT6,C.cT_,C.cT1,C.cqF,C.cqL,C.cqM,C.cqK,C.cqO,C.cqJ,C.cqG,C.cqH,C.cqS,C.eUG,C.eUH,C.eu1,C.etT,C.etU,C.etV,C.etX,C.etY,C.eu0,C.etO,C.etR,C.eu2,C.etP,C.eu5,C.eu6,C.eu7,C.eu8,C.eu4,C.etJ,C.etK,C.etL,C.etN,C.etM,C.eur,C.eus,C.eua,C.eub,C.eui,C.euj,C.euk,C.eue,C.euf,C.euy,C.eux,C.euz,C.euw,C.eu9,C.eud,C.euu,C.eut,C.euo,C.eup,C.eun,C.eum])
u(A.ae,[C.alB,C.X5,C.X9,C.X7,C.WG,C.amH,C.amB,C.XJ,C.amF,C.Y3,C.Y4,C.a3W,C.WI,C.WH,C.We,C.ZN,C.E3,C.aua,C.apv,C.app,C.apu,C.Mb])
u(A.ag,[C.azC,C.awJ,C.baL,C.awK,C.b81,C.aAc,C.aA9,C.ayB,C.aAb,C.aAa,C.bfz,C.aHZ,C.avw,C.avv,C.auh,C.brr,C.aK4,C.aK5,C.aBC,C.bgV,C.aBB,C.btb])
u(A.kx,[C.dxB,C.dxD,C.dxy,C.dxX,C.fc9,C.bIE,C.cZX,C.cZW,C.cZD,C.cZS,C.cZT,C.d_j,C.dK0,C.dJM,C.dKm,C.d_z,C.d_y,C.d_w,C.d_B,C.d_E,C.d_F,C.d_p,C.d_t,C.d_v,C.d_I,C.c2M,C.c2U,C.c2Z,C.dx_,C.fpO,C.fpN,C.eUD,C.eUE,C.etZ,C.euv,C.cq6,C.f10,C.eXV,C.fcf,C.f9q,C.fcc,C.eYF,C.eYE,C.f1H])
t(C.bfi,C.aHZ)
u(A.mb,[C.a90,C.aGl,C.FY,C.ahX,C.cq7,C.cq8])
t(C.brp,C.aK4)
t(C.brq,C.aK5)
t(C.aBD,C.btb)
t(C.b4L,A.b4A)
t(C.brs,A.a3B)
t(C.b4K,C.brs)
w(C.aHZ,A.eJ)
w(C.aK4,A.c7)
w(C.aK5,A.c7)
v(C.btb,A.eu)
v(C.brs,A.iQ)})()
A.kd(b.typeUniverse,JSON.parse('{"aUX":{"ar":[],"r":[]},"b6T":{"az":[]},"alB":{"ae":[],"r":[]},"azC":{"ag":["alB"]},"X5":{"ae":[],"r":[]},"X9":{"ae":[],"r":[]},"X7":{"ae":[],"r":[]},"WG":{"ae":[],"r":[]},"awJ":{"ag":["X5"]},"baL":{"ag":["X9"]},"awK":{"ag":["X7"]},"Wn":{"ar":[],"r":[]},"b83":{"az":[]},"b7V":{"az":[]},"b81":{"ag":["WG"]},"aDz":{"az":[]},"bdd":{"az":[]},"b6h":{"ar":[],"r":[]},"amH":{"ae":[],"r":[]},"amB":{"ae":[],"r":[]},"XJ":{"ae":[],"r":[]},"aaG":{"ar":[],"r":[]},"aAc":{"ag":["amH"]},"aA9":{"ag":["amB"]},"bat":{"ar":[],"r":[]},"baw":{"az":[]},"bea":{"ar":[],"r":[]},"b9C":{"az":[]},"brz":{"ar":[],"r":[]},"bhr":{"ar":[],"r":[]},"ayB":{"ag":["XJ"]},"aaF":{"ar":[],"r":[]},"be9":{"ar":[],"r":[]},"aaE":{"ar":[],"r":[]},"be8":{"ar":[],"r":[]},"ayC":{"ar":[],"r":[]},"aEH":{"ar":[],"r":[]},"I8":{"ar":[],"r":[]},"amF":{"ae":[],"r":[]},"Y3":{"ae":[],"r":[]},"Y4":{"ae":[],"r":[]},"aAb":{"ag":["amF"]},"bau":{"ar":[],"r":[]},"a9X":{"ar":[],"r":[]},"bas":{"ar":[],"r":[]},"bax":{"ar":[],"r":[]},"aAa":{"ag":["Y3"]},"bfz":{"ag":["Y4"]},"aUV":{"ar":[],"r":[]},"a3W":{"ae":[],"r":[]},"bfi":{"ag":["a3W"]},"bfh":{"az":[]},"apw":{"ar":[],"r":[]},"WI":{"ae":[],"r":[]},"WH":{"ae":[],"r":[]},"We":{"ae":[],"r":[]},"ZN":{"ae":[],"r":[]},"avw":{"ag":["WI"]},"avv":{"ag":["WH"]},"auh":{"ag":["We"]},"brr":{"ag":["ZN"]},"E3":{"ae":[],"r":[]},"aua":{"ae":[],"r":[]},"brp":{"ag":["E3"]},"brq":{"ag":["aua"]},"bro":{"az":[]},"apv":{"ae":[],"r":[]},"aBC":{"ag":["apv"]},"ab0":{"ar":[],"r":[]},"app":{"ae":[],"r":[]},"apu":{"ae":[],"r":[]},"bgV":{"ag":["app"]},"aBB":{"ag":["apu"]},"Mb":{"ae":[],"r":[]},"aBD":{"ag":["Mb"],"eu":[]},"b4K":{"iQ":[],"f4":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aA
return{e2:w("aNG"),Q:w("qn"),w:w("bt<n,n>"),c5:w("aPB"),dY:w("aPC"),d:w("ep<n?>"),e:w("FX"),B:w("mM"),P:w("hO"),k:w("kl"),x:w("au<~>"),f5:w("N<afT>"),V:w("N<aa>"),t:w("N<qn>"),O:w("N<x>"),ac:w("N<ep<n?>>"),I:w("N<mM>"),u:w("N<hO>"),_:w("N<kl>"),cl:w("N<au<ak<a0<n,@>>>>"),R:w("N<mP>"),cq:w("N<ak<+(Q,Q)>>"),ez:w("N<a0<n,aB>>"),gE:w("N<a0<n,n>>"),c7:w("N<a0<n,@>>"),fD:w("N<m0>"),bp:w("N<nO>"),g:w("N<v>"),v:w("N<hw>"),L:w("N<+(n,n)>"),G:w("N<+(Q,Q)>"),bF:w("N<+count,id,name(I,n,n)>"),A:w("N<cI>"),s:w("N<n>"),aS:w("N<iG>"),p:w("N<r>"),C:w("N<f4>"),D:w("N<l1>"),fp:w("N<NO>"),M:w("N<Ij>"),gZ:w("N<aDE>"),Y:w("N<acb>"),E:w("N<aFE>"),F:w("N<Q>"),dC:w("N<I>"),dS:w("N<az?>"),d4:w("N<n?>"),J:w("cn<ag<ae>>"),b:w("ak<mM>"),do:w("ak<hO>"),r:w("ak<kl>"),U:w("ak<a0<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(I,n,n)>"),h:w("ak<n>"),c:w("ak<l1>"),j:w("ak<@>"),fK:w("bq<n,n>"),d2:w("bq<n,ak<a0<n,@>>>"),a:w("a0<n,@>"),f:w("a0<@,@>"),gv:w("J<n,FZ>"),n:w("iA"),g2:w("qG"),bV:w("alu"),fL:w("co"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(Q,ak<hO>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bm<Q>"),gc:w("dz"),b4:w("cv<I>"),W:w("k1<n>"),l:w("r"),cM:w("f4"),i:w("l1"),cc:w("Ef"),bw:w("aaE<n?>"),cy:w("Il"),q:w("mz"),y:w("S"),gR:w("Q"),z:w("@"),S:w("I"),eK:w("ak<kl>?"),m:w("amE?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,S)?"),Z:w("q0?"),T:w("n?"),aD:w("dz?"),o:w("l1?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aP_=new A.bv(B.fV,B.bC,B.fV,B.bC)
D.a6d=new A.bv(B.fV,B.jL,B.fV,B.jL)
D.aPb=new A.bv(B.jM,B.bC,B.bC,B.bC)
D.aPf=new A.ax(B.cW,1.4,B.r,-1)
D.aPp=new A.ax(B.ak,1,B.r,-1)
D.aQL=new A.aW(0,1/0,64,1/0)
D.aQO=new A.aW(0,84,0,1/0)
D.as7=w([B.lN,B.q6,B.c],x.O)
D.bFq=new A.a8(B.ax,B.aC,B.x,D.as7,null,null)
D.aRB=new A.o(null,null,null,null,null,D.bFq,B.n)
D.cIu=w([B.aS,B.bR],x.O)
D.bHn=new A.a8(B.b3,B.bb,B.x,D.cIu,null,null)
D.aRS=new A.o(null,null,null,null,null,D.bHn,B.n)
D.aXG=new A.f9(null,null,null,null,null,E.iQ,null,null,null,null)
D.a7w=new A.cw(B.B,null,null,D.aXG,null)
D.ju=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eyx=new A.F(!0,D.ju,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQB=new A.w("No books on the shelf yet.",null,D.eyx,null,null,null,null,null,null,null,null,null)
D.dLn=new A.C(B.nl,D.eQB,null)
D.aWj=new A.cw(B.B,null,null,D.dLn,null)
D.aX7=new A.cw(B.B,null,null,V.SO,null)
D.aZ0=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZn=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.b_Z=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b0M=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b1_=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9u=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b4o=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b4I=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.IP=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b62=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b7Z=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aaX=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eLw=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bc3=new A.ep(null,D.eLw,B.eR,null,x.d)
D.eTy=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bc5=new A.ep(null,D.eTy,B.eR,null,x.d)
D.bcD=new A.b7(38e5)
D.bdo=new A.i3(0,10,0,10)
D.bdG=new A.i3(0,4,0,4)
D.bdX=new A.M(10,10,14,10)
D.be6=new A.i3(10,4,10,4)
D.bef=new A.i3(10,8,10,8)
D.beg=new A.M(10,8,8,8)
D.beI=new A.M(12,6,12,2)
D.beZ=new A.M(14,10,6,6)
D.bf2=new A.M(14,12,14,8)
D.bf5=new A.M(14,12,8,14)
D.bf9=new A.i3(14,14,14,14)
D.bfO=new A.M(16,2,16,10)
D.bfY=new A.M(16,6,16,30)
D.bg_=new A.M(16,6,16,8)
D.ada=new A.M(18,16,18,8)
D.bgA=new A.M(18,20,18,22)
D.ade=new A.M(18,24,18,24)
D.bgG=new A.M(18,30,18,30)
D.bgY=new A.M(20,10,12,20)
D.bhb=new A.M(20,18,16,18)
D.bhd=new A.M(20,18,20,6)
D.bi1=new A.M(24,32,24,28)
D.bi2=new A.M(24,36,24,32)
D.bi5=new A.M(26,26,24,14)
D.bij=new A.M(2,4,2,8)
D.bin=new A.M(30,0,30,0)
D.biy=new A.M(38,22,22,22)
D.adw=new A.M(40,24,24,24)
D.biA=new A.i3(40,40,40,40)
D.biC=new A.M(46,30,30,30)
D.adz=new A.M(4,0,0,8)
D.bj1=new A.M(56,40,40,40)
D.bj5=new A.M(1.25,1.25,1.25,1.25)
D.bj6=new A.M(60,0,60,0)
D.bjk=new A.i3(7,3,7,3)
D.bjL=new A.M(8,9,8,9)
D.bjP=new A.M(5,1.5,5,1.5)
D.bjZ=new A.M(6,2.5,6,2.5)
D.f3B=new A.w("Signature",null,B.mT,null,null,null,null,null,null,null,null,null)
D.bkg=new A.bF(1,B.bn,D.f3B,null)
D.f0W=new A.w("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bkY=new A.bF(1,B.bn,D.f0W,null)
D.eFu=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2N=new A.w("Worksheets",null,D.eFu,null,null,null,null,null,null,null,null,null)
D.eFC=new A.F(!0,E.a85,null,null,null,null,13,B.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1I=new A.w("Track your project spending",null,D.eFC,null,null,null,null,null,null,null,null,null)
D.cBf=w([D.f2N,B.au,D.f1I],x.p)
D.bam=new A.fj(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cBf,null)
D.bl2=new A.bF(1,B.bn,D.bam,null)
D.eB_=new A.F(!0,E.iQ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKL=new A.w("FAMILY LIBRARY",null,D.eB_,null,null,null,null,null,null,null,null,null)
D.blh=new A.bF(1,B.bn,D.eKL,null)
D.Ke=new C.FX("leather","","",0,"gold",25,"middle","double","leather","",!0)
D.Wh=new C.FY(0,"male")
D.aep=new C.FY(1,"female")
D.wC=new C.FY(2,"unknown")
D.rH=new C.ahX(0,"owner")
D.Kf=new C.ahX(1,"editor")
D.jZ=new C.ahX(2,"viewer")
D.af8=new A.a_(61199,"MaterialIcons",!1)
D.bny=new A.a_(61504,"MaterialIcons",!1)
D.bnz=new A.a_(61505,"MaterialIcons",!1)
D.bnB=new A.a_(61587,"MaterialIcons",!1)
D.bnH=new A.a_(61890,"MaterialIcons",!1)
D.boA=new A.a_(63034,"MaterialIcons",!0)
D.bpq=new A.a_(63429,"MaterialIcons",!1)
D.ahg=new A.a_(984520,"MaterialIcons",!1)
D.bo6=new A.a_(62776,"MaterialIcons",!1)
D.brK=new A.ac(D.bo6,26,B.aW,null,null,null)
D.bmx=new A.a_(57648,"MaterialIcons",!1)
D.bs1=new A.ac(D.bmx,14,B.c,null,null,null)
D.bsj=new A.ac(B.DZ,17,null,null,null,null)
D.bsL=new A.ac(B.cu,17,D.ju,null,null,null)
D.bsQ=new A.ac(E.X2,null,null,null,null,null)
D.bsT=new A.ac(B.iZ,18,E.iQ,null,null,null)
D.WN=new A.a_(62044,"MaterialIcons",!1)
D.bsZ=new A.ac(D.WN,null,B.aS,null,null,null)
D.btP=new A.ac(B.dO,16,null,null,null,null)
D.btW=new A.ac(D.WN,32,B.aS,null,null,null)
D.bud=new A.ac(E.af9,18,B.cW,null,null,null)
D.bvf=new A.ac(B.Ea,22,B.aH,null,null,null)
D.bvq=new A.ac(B.dO,22,B.aW,null,null,null)
D.bvB=new A.ac(N.WS,22,B.c,null,null,null)
D.bvG=new A.ac(B.rS,52,B.c,null,null,null)
D.bvQ=new A.ac(B.Ea,30,B.aH,null,null,null)
D.ahS=new A.ac(B.rZ,22,B.c,null,null,null)
D.bwh=new A.ac(B.dO,17,null,null,null,null)
D.bwA=new A.ac(B.uv,26,B.cW,null,null,null)
D.bxj=new A.ac(B.Xf,16,null,null,null,null)
D.by0=new A.ac(B.rS,24,B.c,null,null,null)
D.by5=new A.ac(B.KF,20,B.qx,null,null,null)
D.bya=new A.ac(B.DX,null,B.bR,null,null,null)
D.byh=new A.ac(B.iZ,18,B.c,null,null,null)
D.bzF=new A.ac(B.e4,16,B.ak,null,null,null)
D.bzQ=new A.ac(D.WN,20,B.aS,null,null,null)
D.aij=new A.ac(B.hg,20,null,null,null,null)
D.bAl=new A.ac(B.cu,18,D.ju,null,null,null)
D.bAD=new A.ac(B.wY,28,B.c,null,null,null)
D.bAL=new A.ac(B.Kv,null,B.fK,null,null,null)
D.bB4=new A.ac(B.wY,24,B.c,null,null,null)
D.bBu=new A.ac(B.rS,null,B.aS,null,null,null)
D.bBv=new A.ac(B.jF,20,B.cW,null,null,null)
D.bBN=new A.ac(B.DZ,16,null,null,null,null)
D.bDg=new A.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ep,!0,null,null,null,null)
D.cP2=w([B.bq,B.aS,B.eY,B.aW],x.O)
D.bE1=new A.a8(B.ax,B.aC,B.x,D.cP2,null,null)
D.b59=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.b9z=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cyo=w([D.b59,D.b9z],x.O)
D.bEc=new A.a8(B.b3,B.bb,B.x,D.cyo,null,null)
D.cK5=w([B.eO,B.ff,B.eY],x.O)
D.bEf=new A.a8(B.ax,B.aC,B.x,D.cK5,null,null)
D.a9Z=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZo=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cAf=w([D.a9Z,D.aZo],x.O)
D.bEL=new A.a8(B.b3,B.bb,B.x,D.cAf,null,null)
D.b18=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.cOM=w([D.b18,D.a9Z],x.O)
D.aje=new A.a8(B.ax,B.aC,B.x,D.cOM,null,null)
D.a99=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b3_=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cJm=w([D.a99,D.b3_],x.O)
D.bFA=new A.a8(B.a1,B.a7,B.x,D.cJm,null,null)
D.cUy=w([B.bS,B.mo],x.O)
D.bFC=new A.a8(B.b3,B.bb,B.x,D.cUy,null,null)
D.b55=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b6u=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cVk=w([D.b55,D.ju,D.ju,D.b6u],x.O)
D.cXg=w([0,0.07,0.9,1],x.F)
D.bG3=new A.a8(B.a1,B.a7,B.x,D.cVk,D.cXg,null)
D.bGd=new A.a8(B.ax,B.aC,B.x,B.O2,null,null)
D.cUa=w([B.aW,B.aS,B.bR],x.O)
D.bH9=new A.a8(B.ax,B.aC,B.x,D.cUa,null,null)
D.c1p=w([B.bq,B.aW,B.eO],x.O)
D.c1v=w([B.bE,B.aB,B.jV],x.O)
D.c1x=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b3Y=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c7C=w([D.b3Y,E.a9J],x.O)
D.dIb=new A.v(1,2)
D.ekB=new A.cI(B.aV,D.dIb,3)
D.ap0=w([D.ekB],x.A)
D.ceQ=w([B.fY,B.c9,B.fq],x.O)
D.chr=w([B.bP,B.bB,B.bj],x.O)
D.cvd=w([B.bR,B.bh],x.O)
D.aYS=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b4Y=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cvR=w([D.aYS,D.b4Y],x.O)
D.b0Q=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cxe=w([D.b0Q,B.dc],x.O)
D.cyC=w([B.bd,B.iw,B.nO],x.O)
D.cyZ=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZk=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b2m=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cXd=w([D.a99,D.aZk,D.b2m],x.O)
D.blD=new C.tz("leather","Leather",D.cXd,"vintage")
D.cFs=w([B.dF,B.IK,E.a8G],x.O)
D.blK=new C.tz("midnight","Midnight",D.cFs,"starry")
D.cyD=w([B.fp,B.eM,B.kQ],x.O)
D.blJ=new C.tz("forest","Forest",D.cyD,"story")
D.cYQ=w([B.f5,B.fr,B.kS],x.O)
D.blG=new C.tz("burgundy","Burgundy",D.cYQ,"royal")
D.ch2=w([B.aB,B.q2,B.n3],x.O)
D.blH=new C.tz("royal","Royal",D.ch2,"royal")
D.cAO=w([B.bB,B.d3,L.CW],x.O)
D.blE=new C.tz("charcoal","Charcoal",D.cAO,"geo")
D.cXj=w([B.cl,B.dN,B.vZ],x.O)
D.blI=new C.tz("sunset","Sunset",D.cXj,"sunset")
D.cXR=w([B.iw,B.CS,B.Tg],x.O)
D.blF=new C.tz("ocean","Ocean",D.cXR,"band")
D.xs=w([D.blD,D.blK,D.blJ,D.blG,D.blH,D.blE,D.blI,D.blF],A.aA("N<tz>"))
D.cBF=w([B.al,B.aI,B.M],x.O)
D.cCL=w([B.fr,B.eM,B.dF,B.i9,B.w0,B.cW,B.kT,B.fD,B.dC],x.O)
D.cCM=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ekC=new A.cI(B.dt,B.dH,8)
D.cCV=w([D.ekC],x.A)
D.cDT=w([B.cd,B.dN,B.lg],x.O)
D.cEk=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cFo=w([B.cd,B.hl],x.O)
D.cHf=w([B.aM,B.CN,B.vR],x.O)
D.cI2=w([B.bK,B.cN,B.dD,B.aM],x.O)
D.cIv=w([B.kl,B.cl,B.tU],x.O)
D.cIY=w([B.eO,B.cW],x.O)
D.cJr=w([B.dh,B.fZ,B.hR],x.O)
D.cJC=w([B.b5,B.bh,B.dF],x.O)
D.cK2=w([B.eX,B.dp,B.eM],x.O)
D.cKi=w([B.e9,B.dF,B.IK],x.O)
D.cLv=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_0=w(["leather","linen","plain","stars","rays"],x.s)
D.brq=new A.a_(985219,"MaterialIcons",!1)
D.br_=new A.a_(983781,"MaterialIcons",!1)
D.arq=w([B.afy,B.hJ,B.lX,B.hL,D.brq,B.Eh,B.p1,D.br_,L.ah5,B.x_,B.p3,B.lW],A.aA("N<a_>"))
D.a_5=w(["double","single","corners","none"],x.s)
D.cNU=w([B.fN,B.bv,B.fD],x.O)
D.cO6=w([],x.t)
D.AB=w([],x.u)
D.cQ6=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cS8=w([B.aZ,B.fZ,B.i9],x.O)
D.cTd=w([B.cV,B.oJ,B.TX],x.O)
D.cTq=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.da0=new C.lh("construction","Construction","Jobsite & builds",B.E7)
D.da7=new C.lh("house","Home Build","Houses & rooms",B.up)
D.d9Y=new C.lh("grocery","Grocery","Store & pantry",B.XP)
D.d9X=new C.lh("calculator","Calculations","Math & estimates",B.KO)
D.da5=new C.lh("lumber","Materials","Lumber & supplies",B.L5)
D.d9U=new C.lh("kitchen","Kitchen","Remodel & meals",Q.agh)
D.bqY=new A.a_(983756,"MaterialIcons",!1)
D.d9Z=new C.lh("landscape","Landscaping","Yard & garden",D.bqY)
D.d9T=new C.lh("plumbing","Plumbing","Pipes & water",B.uB)
D.da8=new C.lh("electrical","Electrical","Wiring & power",B.hf)
D.d9R=new C.lh("store","Retail Shop","Daily business",B.kx)
D.d9S=new C.lh("paint_remodel","Paint & Remodel","Colors & walls",Q.ag5)
D.bql=new A.a_(983311,"MaterialIcons",!1)
D.da4=new C.lh("roofing","Roofing","Roofs & exteriors",D.bql)
D.bra=new A.a_(983986,"MaterialIcons",!1)
D.d9Q=new C.lh("warehouse","Warehouse","Storage & stock",D.bra)
D.da2=new C.lh("vehicles","Vehicles","Fleet & transport",B.Ei)
D.bo8=new A.a_(62785,"MaterialIcons",!1)
D.d9W=new C.lh("farm","Farm","Crops & livestock",D.bo8)
D.d9V=new C.lh("restaurant","Restaurant","Food & catering",B.rY)
D.da1=new C.lh("tools","Tools","Workshop gear",B.Eg)
D.da6=new C.lh("wallet","Cash & Wallet","Quick spending",B.jF)
D.bpl=new A.a_(63395,"MaterialIcons",!1)
D.da3=new C.lh("concrete","Concrete","Foundation work",D.bpl)
D.da_=new C.lh("blueprint","Blueprint","Plans & design",A9.afE)
D.a_v=w([D.da0,D.da7,D.d9Y,D.d9X,D.da5,D.d9U,D.d9Z,D.d9T,D.da8,D.d9R,D.d9S,D.da4,D.d9Q,D.da2,D.d9W,D.d9V,D.da1,D.da6,D.da3,D.da_],A.aA("N<lh>"))
D.cTS=w([B.bm,B.bv],x.O)
D.cUz=w([B.hQ,B.n7,B.dw],x.O)
D.a_A=w(["top","middle","bottom"],x.s)
D.cWG=w([B.cK,B.bh,B.dF],x.O)
D.cX8=w([B.bt,B.dp,B.eM],x.O)
D.cYL=w([B.bP,B.al],x.O)
D.cYM=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dGj={top:0,middle:1,bottom:2}
D.d0T=new A.bt(D.dGj,["Top","Middle","Bottom"],x.w)
D.dG_={double:0,single:1,corners:2,none:3}
D.d0Y=new A.bt(D.dG_,["Double line","One line","Corners","None"],x.w)
D.dH2={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d2l=new A.bt(D.dH2,["Leather","Linen","Smooth","Stars","Light rays"],x.w)
D.d2w=new A.bt(B.ip,[],A.aA("bt<I,+(n,n)>"))
D.dGc={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AM=new A.bt(D.dGc,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aA("bt<n,I>"))
D.d4I=new F.L6(32,null)
D.d4J=new F.L6(40,null)
D.d4K=new F.L6(46,null)
D.aAi=new C.apu(null)
D.dIV=new A.v(8,14)
D.eRd=new A.w("Write a new book",null,B.jp,null,B.L,null,null,null,null,null,null,null)
D.dKS=new A.C(B.lS,D.eRd,null)
D.aht=new A.ac(B.hH,18,B.c,null,null,null)
D.eL4=new A.w("Add",null,B.mU,null,null,null,null,null,null,null,null,null)
D.cIh=w([D.aht,B.v3,D.eL4],x.p)
D.eiW=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cIh,null)
D.dLb=new A.C(B.rC,D.eiW,null)
D.dLc=new A.C(E.ac1,V.SO,null)
D.eFq=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNU=new A.w("New Project",null,D.eFq,null,null,null,null,null,null,null,null,null)
D.cLR=w([D.aht,B.ab,D.eNU],x.p)
D.eiZ=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cLR,null)
D.dLm=new A.C(B.iC,D.eiZ,null)
D.aXV=new A.f9(2.2,null,null,null,null,B.cW,null,null,null,null)
D.ena=new A.a3(22,22,D.aXV,null)
D.aWf=new A.cw(B.B,null,null,D.ena,null)
D.dLJ=new A.C(B.UO,D.aWf,null)
D.dMh=new A.iD(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dMk=new A.iD(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBd=new A.iD(1,0.9607843137254902,0.48627450980392156,0)
D.Gj=new A.iD(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.xX=new A.iD(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dMq=new A.iD(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fb4=new C.bdd(null)
D.bbf=new A.lT(D.fb4,null,B.as,null,null)
D.aER=new A.cE(0,0,0,0,null,null,D.bbf,null)
D.e74=new A.z(-42,42)
D.eeW=new A.d7([0,0,1,1])
D.aG_=new A.af(0,0,520,160)
D.eie=new A.b5(B.pL,B.W)
D.f13=new A.w("Let the AI write it from your tree",null,B.kc,null,B.L,null,null,null,null,null,null,null)
D.bm3=new A.dl(1,B.cj,D.f13,null)
D.cFn=w([E.Yg,B.ab,D.bm3],x.p)
D.eiE=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cFn,null)
D.eKM=new A.w("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.cSm=w([D.aij,B.ab,D.eKM],x.p)
D.eiM=new A.cC(B.aY,B.b4,B.j,B.m,null,B.p,null,0,D.cSm,null)
D.bvv=new A.ac(B.hK,14,B.aW,null,null,null)
D.ezJ=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOj=new A.w("Cashier",null,D.ezJ,null,null,null,null,null,null,null,null,null)
D.cMi=w([D.bvv,B.bp,D.eOj],x.p)
D.eiO=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cMi,null)
D.eKN=new A.w("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bkO=new A.bF(1,B.bn,D.eKN,null)
D.cy7=w([D.ahS,B.av,D.bkO],x.p)
D.eiP=new A.cC(B.aY,B.e,B.j,B.m,null,B.p,null,0,D.cy7,null)
D.elY=new A.ap(16,40)
D.em2=new A.ap(22,64)
D.em8=new A.ap(280,88)
D.emR=new A.a3(30,null,null,null)
D.eo7=new A.hH(2,12,12,1.05,null)
D.eO_=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eoQ=new A.aY(D.eO_,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOe=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aHU=new A.aY(D.eOe,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eVG=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.epj=new A.aY(D.eVG,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f47=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.epo=new A.aY(D.f47,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQ3=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.epv=new A.aY(D.eQ3,null,null,null,null,null,null,null,null,null,null,null,null,B.fE,!1,null,null,null,B.q,null)
D.f1E=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aHY=new A.aY(D.f1E,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eLl=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.epV=new A.aY(D.eLl,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4I=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eqE=new A.aY(D.f4I,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f05=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.er2=new A.aY(D.f05,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4b=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.er5=new A.aY(D.f4b,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eX8=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.er7=new A.aY(D.eX8,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eRL=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.er8=new A.aY(D.eRL,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eRM=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.es8=new A.aY(D.eRM,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eO1=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.esq=new A.aY(D.eO1,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ePM=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.esJ=new A.aY(D.ePM,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWF=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.esZ=new A.aY(D.eWF,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSt=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.et_=new A.aY(D.eSt,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.evT=new A.F(!0,D.ju,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewg=new A.F(!0,D.ju,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewD=new A.F(!0,E.iQ,null,null,null,null,19,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,D.ap0,null,null,null)
D.ewQ=new A.qZ(!0,B.qF,null,null,null,null,B.dk,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.ex5=new A.F(!0,D.ju,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exD=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3P=new A.qZ(!0,B.Pk,null,null,null,null,B.dk,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyA=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyZ=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAs=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAw=new A.F(!0,G.iR,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBJ=new A.F(!0,B.M,null,null,null,null,13,B.a0,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCm=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD0=new A.F(!0,B.bR,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD5=new A.F(!0,B.bS,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDr=new A.F(!0,D.IP,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDA=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEw=new A.F(!0,B.cW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEY=new A.F(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFo=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGP=new A.F(!0,B.al,null,null,null,null,11.5,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGX=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK4=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4g=new A.F(!0,B.al,null,null,null,null,12,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIx=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIT=new A.F(!0,G.iR,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ_=new A.F(!0,G.iR,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJI=new A.w("Themes",null,B.px,null,null,null,null,null,null,null,null,null)
D.eKh=new A.w("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eAd=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKC=new A.w("Debt receipt",null,D.eAd,null,B.L,null,null,null,null,null,null,null)
D.aK0=new A.F(!0,B.al,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKT=new A.w("Person who owes",null,D.aK0,null,null,null,null,null,null,null,null,null)
D.eLN=new A.w("Notes",null,B.a3W,null,null,null,null,null,null,null,null,null)
D.eMb=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.ezg=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMf=new A.w("Share",null,D.ezg,null,null,null,null,null,null,null,null,null)
D.eN4=new A.w("Move your family trees",null,D.aK4,null,null,null,null,null,null,null,null,null)
D.eND=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eOd=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.ePn=new A.w("Remove this book?",null,B.h7,null,null,null,null,null,null,null,null,null)
D.aKt=new A.w("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eQp=new A.w("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eRH=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eSH=new A.w("Ribbon bookmark",null,B.is,null,null,null,null,null,null,null,null,null)
D.eGJ=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT7=new A.w("NGMY.ORG",null,D.eGJ,null,B.L,null,null,null,null,null,null,null)
D.eUg=new A.w("Scan family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eDk=new A.F(!0,B.c,null,null,null,null,13,B.a0,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUY=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eDk,null,B.L,null,null,null,null,null,null,null)
D.eW6=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.eWc=new A.w("Thumbnail",null,B.px,null,null,null,null,null,null,null,null,null)
D.eWL=new A.w("Save the cover",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eX9=new A.w("Your photos",null,B.px,null,null,null,null,null,null,null,null,null)
D.eXo=new A.w("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eXP=new A.w("Design your cover",null,A1.GX,null,null,null,null,null,null,null,null,null)
D.eXV=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.eXY=new A.w("PICTURE",null,H.mb,null,null,null,null,null,null,null,null,null)
D.eYj=new A.w("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eYl=new A.w("You can undo it right after.",null,A_.a40,null,null,null,null,null,null,null,null,null)
D.eYO=new A.w("Print",null,B.ty,null,null,null,null,null,null,null,null,null)
D.eZ8=new A.w("Amount owed",null,D.aK0,null,null,null,null,null,null,null,null,null)
D.eZl=new A.w("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eZS=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.eZV=new A.w("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f_j=new A.w("Debtor signature",null,B.a3W,null,null,null,null,null,null,null,null,null)
D.f_r=new A.w("Change icon",null,E.aJj,null,null,null,null,null,null,null,null,null)
D.f0v=new A.w("Family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f0U=new A.w("Download",null,B.ty,null,null,null,null,null,null,null,null,null)
D.f0Y=new A.w("Change",null,B.px,null,null,null,null,null,null,null,null,null)
D.f1K=new A.w("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f1N=new A.w("WHAT SHOULD IT CHANGE?",null,H.mb,null,null,null,null,null,null,null,null,null)
D.f2m=new A.w("COLOUR",null,H.mb,null,null,null,null,null,null,null,null,null)
D.f2y=new A.w("Do it",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f2B=new A.w("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f3v=new A.w("Create Family Tree",null,B.eJ,null,null,null,null,null,null,null,null,null)
D.euW=new A.F(!0,E.iQ,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3K=new A.w("Write the first page myself",null,D.euW,null,null,null,null,null,null,null,null,null)
D.f4i=new A.w("Create Project",null,E.aJM,null,null,null,null,null,null,null,null,null)
D.f8q=new C.a90(1,"header")
D.a4X=new C.a90(2,"projects")
D.f8r=new C.a90(3,"cashier")
D.a4Y=new C.a90(4,"familyTree")
D.fj_=new C.cq7(0,"start")
D.fj0=new C.cq8(0,"start")
D.f8x=new C.We(null)
D.f9w=new C.WH(null)
D.d2t=new A.bt(B.ip,[],A.aA("bt<n,Ef>"))
D.cOq=w([],x.E)
D.cOr=w([],x.M)
D.fa2=new C.bav(D.d2t,D.cOq,D.cOr,0,0,null,null)
D.fbJ=new C.Y4(null)
D.a5E=new C.aGl(0,"projects")
D.aNg=new C.aGl(1,"cashier")
D.fgX=new C.aGl(2,"familyTree")})()};
(a=>{a["fuLFXbMTbmoa9u7BIbXLXyyPNhw="]=a.current})($__dart_deferred_initializers__);