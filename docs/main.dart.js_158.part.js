((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,Y,Q,Z,M,K,A_,A0,N,A1,O,L,E,A2,G,H,P,C={
bGI(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bGI=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vV(null,""),$async$bGI)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nl(b1)
s=A.c0(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cR(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.W.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rj(t,a1,B.i1,"book",B.H5),$async$bGI)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=A.RI(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.M4(l)?y.k:y.y)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cE
g=a8.h(0,"title")
a9=B.a.i(A.w(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.w(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=A.a3Z(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGI,v)},
aio(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aio=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vV(null,""),$async$aio)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nl(b6)
s=x.S
r=A.cT(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=A.a3K(new A.N(r,new C.fR8(),r.$ti.k("N<ak.E,q>")).aN(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fR7(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.W.av(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aio)
case 6:l=c5
k=A.RI(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqa(s,D.dJk,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.du(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.W.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aio)
case 10:l=c5
k=l==null?null:A.RI(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kN(a5,a2.k("kN<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a8(a9)
b1=A.aI(b0.h(a9,"index"))
i=b1==null?null:B.h.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.w(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.w(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cF(new A.b8(h,s),new C.fR9(),s.k("M.E"),p)
p=A.a3K(A.pN(p,3,A.a3(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.C(new A.cr(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(A.a3Z(s,b9),$async$aio)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqa(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aio,v)},
hJy(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.h08(e,f),d,null,!0,!0,x.g2)},
aqa:function aqa(d,e,f){this.a=d
this.b=e
this.c=f},
fR8:function fR8(){},
fR7:function fR7(d){this.a=d},
fR9:function fR9(){},
h08:function h08(d,e){this.a=d
this.b=e},
bEt(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEt=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aU(b1,new C.fEa())){u=null
w=1
break}t=B.d.cE(b1,new C.fEb())
s=$.S()
r=new A.q6(new A.pH())
q=A.zp(r,D.aTe)
p=A.L()
p.r=B.c.gp(0)
q.aF(D.aTe,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bG
o.e=B.dQ
n=new C.fEg(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.h.D(k-m,1,1e4)
d=B.h.D(j-l,1,1e4)
a0=B.h.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aG(s.r,B.aj,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aG(s.r,B.aj,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()}}q.af(a3,o)}w=4
return A.b(r.o9().xL(520,160),$async$bEt)
case 4:w=3
return A.b(b3.hj(B.hf),$async$bEt)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dF.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEt,v)},
fOO(d){return C.iof(d)},
iof(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fOO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bkm()
n=d.x!=null&&d.zR(null).length===0
if(d.x!=null)t=n?D.AI:D.K8
else t=d.gUV()?D.K8:D.aO6
w=3
return A.b(C.bEt(d.ax),$async$fOO)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoN(s)
r=A.a5J(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aO6}else{p.c=C.xm(q,!0)
p.b=n?D.AI:D.K8}r.a4v(A.haS(new C.fOQ(p,d,new C.fOR(),t,n,o),null,D.bJ8,B.xr))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOO,v)},
fVI(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fVI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fOO(d),$async$fVI)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aA(q,0,40)
u=A.Hx(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVI,v)},
fEa:function fEa(){},
fEb:function fEb(){},
fEg:function fEg(d){this.a=d},
fOR:function fOR(){},
fOQ:function fOQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fOP:function fOP(){},
h0B(d,e){var w=0,v=A.j(x.H)
var $async$h0B=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.h0F(new A.cy(null,x.eF),e),d,null,!0,!0,x.H),$async$h0B)
case 2:return A.h(null,v)}})
return A.i($async$h0B,v)},
bH9(d,e,f,g){return C.ivU(d,e,f,g)},
ivU(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bH9=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cH.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.T(D.fuW)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h0x(g,r,f),d,null,!0,!0,x.H),$async$bH9)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bH9,v)},
h0G(d,e){var w=0,v=A.j(x.H)
var $async$h0G=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h0J(new A.cy(null,x.eF),e),d,null,!0,!0,x.H),$async$h0G)
case 2:return A.h(null,v)}})
return A.i($async$h0G,v)},
b0z:function b0z(d,e){this.c=d
this.a=e},
c96:function c96(){},
bdL:function bdL(d,e){this.b=d
this.a=e},
h0F:function h0F(d,e){this.a=d
this.b=e},
h0C:function h0C(d){this.a=d},
h0D:function h0D(d,e,f){this.a=d
this.b=e
this.c=f},
h0E:function h0E(d,e){this.a=d
this.b=e},
h0x:function h0x(d,e,f){this.a=d
this.b=e
this.c=f},
h0v:function h0v(d){this.a=d},
h0w:function h0w(d,e,f){this.a=d
this.b=e
this.c=f},
h0J:function h0J(d,e){this.a=d
this.b=e},
h0H:function h0H(d){this.a=d},
h0I:function h0I(d,e,f){this.a=d
this.b=e
this.c=f},
fJ4(d,e){var w=0,v=A.j(x.y),u,t
var $async$fJ4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3u(d),$async$fJ4)
case 3:t=g
J.nO(t,new C.fJ5(e))
u=A.aj1(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJ4,v)},
fJ5:function fJ5(d){this.a=d},
aqn:function aqn(d,e,f){this.c=d
this.d=e
this.a=f},
aFe:function aFe(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRV:function dRV(d,e){this.a=d
this.b=e},
dRG:function dRG(d,e){this.a=d
this.b=e},
dRJ:function dRJ(d,e,f){this.a=d
this.b=e
this.c=f},
dRI:function dRI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRE:function dRE(){},
dRF:function dRF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dRD:function dRD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dRo:function dRo(d){this.a=d},
dRp:function dRp(d,e,f){this.a=d
this.b=e
this.c=f},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRm:function dRm(d){this.a=d},
dRw:function dRw(d,e,f){this.a=d
this.b=e
this.c=f},
dRx:function dRx(d,e,f){this.a=d
this.b=e
this.c=f},
dRl:function dRl(d,e){this.a=d
this.b=e},
dRy:function dRy(d,e,f){this.a=d
this.b=e
this.c=f},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRj:function dRj(d){this.a=d},
dRA:function dRA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRh:function dRh(){},
dRb:function dRb(d){this.a=d},
dRc:function dRc(d){this.a=d},
dRi:function dRi(d,e){this.a=d
this.b=e},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRg:function dRg(d){this.a=d},
dRC:function dRC(d){this.a=d},
dRf:function dRf(){},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRe:function dRe(d){this.a=d},
dRs:function dRs(d,e,f){this.a=d
this.b=e
this.c=f},
dRd:function dRd(d,e){this.a=d
this.b=e},
dRa:function dRa(d,e){this.a=d
this.b=e},
dRt:function dRt(d){this.a=d},
dRu:function dRu(d,e,f){this.a=d
this.b=e
this.c=f},
dRY:function dRY(){},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dRW:function dRW(d){this.a=d},
dRX:function dRX(d){this.a=d},
dRS:function dRS(d,e){this.a=d
this.b=e},
dRT:function dRT(d){this.a=d},
dRL:function dRL(d,e,f){this.a=d
this.b=e
this.c=f},
dRM:function dRM(d,e,f){this.a=d
this.b=e
this.c=f},
dRN:function dRN(d,e,f){this.a=d
this.b=e
this.c=f},
dRO:function dRO(d,e,f){this.a=d
this.b=e
this.c=f},
dRP:function dRP(d,e,f){this.a=d
this.b=e
this.c=f},
dRQ:function dRQ(d,e,f){this.a=d
this.b=e
this.c=f},
dRR:function dRR(d,e,f){this.a=d
this.b=e
this.c=f},
dS_:function dS_(){},
dS0:function dS0(){},
dS1:function dS1(){},
dS2:function dS2(d){this.a=d},
dRU:function dRU(d,e){this.a=d
this.b=e},
hF1(d){return B.d.dM(D.a5H,new C.fJR(d),new C.fJS())},
uS:function uS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fJR:function fJR(d){this.a=d},
fJS:function fJS(){},
amn:function amn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXh:function aXh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ue:function Ue(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhn:function bhn(){this.d=$
this.c=this.a=null},
dhC:function dhC(d,e){this.a=d
this.b=e},
dhA:function dhA(d,e){this.a=d
this.b=e},
dhB:function dhB(){},
dhD:function dhD(d,e){this.a=d
this.b=e},
hp5(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nt(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LQ(d,e){return C.imV(d,e)},
imV(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LQ)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.W.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cF(o,new C.fMn(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fMo(),n),n.k("M.E"))
B.d.b0(o,new C.fMp())
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
return A.i($async$LQ,v)},
Bu(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bu)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b9(f,new C.h_c(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.W.av(r,null)),$async$Bu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
aTo(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTo=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$aTo)
case 2:u=h
t=J.cE(u)
s=t.bk(u,new C.h7R(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bu(d,e,u),$async$aTo)
case 3:return A.h(null,v)}})
return A.i($async$aTo,v)},
bEX(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEX=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$bEX)
case 2:u=h
J.nO(u,new C.fIX(f))
w=3
return A.b(C.Bu(d,e,u),$async$bEX)
case 3:return A.h(null,v)}})
return A.i($async$bEX,v)},
bFa(d,e){return C.imU(d,e)},
imU(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bFa=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bFa)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Pa
w=1
break}p=B.W.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aI(o.h(0,"emblem"))
k=k==null?null:B.h.M(k)
if(k==null)k=0
if(D.Ef.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a7q,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6K,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6G,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d9X,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Iv(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Pa
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Pa
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFa,v)},
SR(d,e,f){return C.ivp(d,e,f)},
ivp(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SR=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$SR)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.W.av(f.aj(),null)),$async$SR)
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
return A.i($async$SR,v)},
Sj(d,e){return C.imW(d,e)},
imW(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Sj)
case 7:r=g
q=r.rC("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LQ(d,e),$async$Sj)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lJ(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sj)
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
return A.i($async$Sj,v)},
ahI(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sj(d,e),$async$ahI)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ahI)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahI)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahI,v)},
a4a(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4a=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sj(d,e),$async$a4a)
case 2:s=h
J.h6(s,f)
w=3
return A.b(A.az(),$async$a4a)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4a)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4a)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4a)
case 6:return A.h(null,v)}})
return A.i($async$a4a,v)},
nt:function nt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMn:function fMn(){},
fMo:function fMo(){},
fMp:function fMp(){},
h_c:function h_c(){},
h7R:function h7R(d){this.a=d},
fIX:function fIX(d){this.a=d},
Iv:function Iv(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bSr:function bSr(d){this.a=d},
ivJ(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ee(new C.h_N(j,i,f,e,h,g),!0,null,x.H))},
Se(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Se=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sj(h,g),$async$Se)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.T(D.aVB)
u=!1
w=1
break}w=4
return A.b(C.hJy(d,f,e),$async$Se)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahI(h,g),$async$Se)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nt(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bu(h,r,p),$async$Se)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SR(h,r,new C.Iv("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Se)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Se,v)},
h_N:function h_N(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_R:function a_R(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCc:function aCc(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dih:function dih(d){this.a=d},
dig:function dig(d,e){this.a=d
this.b=e},
di5:function di5(d,e){this.a=d
this.b=e},
di2:function di2(d,e){this.a=d
this.b=e},
dhE:function dhE(d){this.a=d},
dhF:function dhF(d,e){this.a=d
this.b=e},
di6:function di6(d){this.a=d},
dhN:function dhN(d){this.a=d},
dhL:function dhL(d){this.a=d},
dhM:function dhM(d){this.a=d},
dhO:function dhO(d){this.a=d},
di3:function di3(d){this.a=d},
di4:function di4(){},
dhJ:function dhJ(d){this.a=d},
dhK:function dhK(d,e){this.a=d
this.b=e},
dhP:function dhP(d){this.a=d},
dhQ:function dhQ(d,e){this.a=d
this.b=e},
dif:function dif(d){this.a=d},
die:function die(d,e){this.a=d
this.b=e},
did:function did(d){this.a=d},
di_:function di_(d){this.a=d},
dhZ:function dhZ(d){this.a=d},
di0:function di0(d){this.a=d},
dhG:function dhG(d,e){this.a=d
this.b=e},
di1:function di1(d,e){this.a=d
this.b=e},
dhT:function dhT(d){this.a=d},
dhU:function dhU(d){this.a=d},
dhS:function dhS(){},
dhV:function dhV(d){this.a=d},
dhW:function dhW(d){this.a=d},
dhX:function dhX(d,e){this.a=d
this.b=e},
dhY:function dhY(d,e,f){this.a=d
this.b=e
this.c=f},
dhR:function dhR(d,e){this.a=d
this.b=e},
di8:function di8(d){this.a=d},
di7:function di7(){},
di9:function di9(d){this.a=d},
dia:function dia(d){this.a=d},
dib:function dib(d){this.a=d},
dic:function dic(d,e){this.a=d
this.b=e},
dhH:function dhH(d){this.a=d},
dhI:function dhI(d){this.a=d},
a_V:function a_V(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhM:function bhM(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dk3:function dk3(d){this.a=d},
dk4:function dk4(d){this.a=d},
dk2:function dk2(d){this.a=d},
dk5:function dk5(d){this.a=d},
dk1:function dk1(d){this.a=d},
dk6:function dk6(d){this.a=d},
dk0:function dk0(d){this.a=d},
dk7:function dk7(d,e){this.a=d
this.b=e},
dk_:function dk_(d,e){this.a=d
this.b=e},
dk8:function dk8(d,e){this.a=d
this.b=e},
a_T:function a_T(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ag9:function ag9(d,e,f){this.a=d
this.b=e
this.c=f},
aCf:function aCf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
diw:function diw(d,e){this.a=d
this.b=e},
div:function div(d,e){this.a=d
this.b=e},
diA:function diA(d){this.a=d},
diz:function diz(d,e){this.a=d
this.b=e},
dix:function dix(d){this.a=d},
diy:function diy(d){this.a=d},
diB:function diB(d){this.a=d},
diC:function diC(d){this.a=d},
diu:function diu(d,e){this.a=d
this.b=e},
dit:function dit(d,e){this.a=d
this.b=e},
KT:function KT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_7:function a_7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cQD:function cQD(d){this.a=d},
cQE:function cQE(){},
cQF:function cQF(d){this.a=d},
beY:function beY(d,e,f){this.b=d
this.c=e
this.a=f},
beP:function beP(d,e){this.b=d
this.a=e},
uT:function uT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_r:function a_r(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beW:function beW(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d9o:function d9o(d,e,f){this.a=d
this.b=e
this.c=f},
d9n:function d9n(d,e){this.a=d
this.b=e},
d9N:function d9N(d){this.a=d},
d9A:function d9A(){},
d9O:function d9O(d){this.a=d},
d9z:function d9z(){},
d9P:function d9P(d,e){this.a=d
this.b=e},
d9y:function d9y(d,e){this.a=d
this.b=e},
d9Q:function d9Q(d,e){this.a=d
this.b=e},
d9x:function d9x(d,e){this.a=d
this.b=e},
d9R:function d9R(d){this.a=d},
d9w:function d9w(){},
d9S:function d9S(d,e){this.a=d
this.b=e},
d9v:function d9v(d,e){this.a=d
this.b=e},
d9T:function d9T(d){this.a=d},
d9I:function d9I(d,e){this.a=d
this.b=e},
d9U:function d9U(d){this.a=d},
d9V:function d9V(d){this.a=d},
d9X:function d9X(d){this.a=d},
d9Y:function d9Y(d){this.a=d},
d9H:function d9H(d,e){this.a=d
this.b=e},
d9Z:function d9Z(d,e){this.a=d
this.b=e},
aJk:function aJk(d){this.a=d},
bkj:function bkj(d){this.a=d},
bd7:function bd7(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amo:function amo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a26:function a26(d,e){this.a=d
this.b=e},
amp:function amp(d,e,f,g,h,i){var _=this
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
_.bw$=h
_.a9$=i
_.c=_.a=null},
bSB:function bSB(d){this.a=d},
bSv:function bSv(d){this.a=d},
bSu:function bSu(d,e){this.a=d
this.b=e},
bSE:function bSE(d){this.a=d},
bSw:function bSw(d){this.a=d},
bSx:function bSx(d){this.a=d},
bSA:function bSA(d){this.a=d},
bSz:function bSz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSC:function bSC(d,e){this.a=d
this.b=e},
bSD:function bSD(){},
bSy:function bSy(d){this.a=d},
bSs:function bSs(d,e){this.a=d
this.b=e},
bSt:function bSt(d){this.a=d},
bpV:function bpV(d,e){this.b=d
this.a=e},
aCd:function aCd(){},
iF(d,e){var w
$.S()
w=A.L()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dQ
return w},
bEv(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.oq(0,a0?-f:f,f)
w=A.bX(B.hs,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.c0(w,t)
w=a1===D.XK
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.exf,new A.r(-4+v,-2),C.iF(q,5))
d.ah(D.euP,new A.r(4-v,-2),C.iF(q,5))}else{t=A.bX(B.K_,14,40)
p=A.L()
p.r=v.gp(0)
d.c0(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ce(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ce(15,-40,11,t))
o.E(new A.bx())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.aj,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bx())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b2z){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iF(E.Gh,3.4))
d.ah(D.exx,new A.r(9,n),C.iF(q,4))
d.ah(D.eve,new A.r(10,n),C.iF(q,4))}else if(a1===D.b2A){d.ah(D.ewk,new A.r(-8,-26-Math.max(0,w)*6),C.iF(q,4))
d.ah(D.eth,new A.r(8,-26-Math.max(0,-w)*6),C.iF(q,4))}else{w=s*3
v=-38-r
d.ah(D.ewp,new A.r(-12-w,v),C.iF(q,4))
d.ah(D.aN8,new A.r(12+w,v),C.iF(q,4))}w=A.L()
w.r=q.gp(0)
d.aF(D.fhK,w)
m=new A.r(0,-77-r)
w=A.bX(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c0(w,v)
w=h.y
if(w!=null){v=A.bX(m.a5(0,H.vI),15,24)
u=A.L()
u.r=w.gp(0)
d.c0(v,u)
u=m.a5(0,D.etb)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bX(m.a5(0,B.tK),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.exv),m.a5(0,D.ewi),C.iF(v,2.2))
d.ah(m.a5(0,D.evd),m.a5(0,D.et8),C.iF(v,2.2))}if(w===4){w=m.a5(0,D.exz)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.evf)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.ew6)
v=A.L()
v.r=B.ic.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.evV)
w=A.L()
w.r=B.ic.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,H.a9B)
w=A.bX(l,21,22)
v=A.L()
v.r=D.lG.gp(0)
d.c0(w,v)
v=A.bX(l.a5(0,H.aN5),5,12)
w=A.L()
w.r=D.bi0.gp(0)
d.c0(v,w)
d.ah(l.a5(0,D.exr),l.a5(0,H.aNt),C.iF(B.cV,1.4))
d.ah(D.aN8,new A.r(15,-88-r),C.iF(q,3.6))}j.restore()},
hDF(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bX(B.dM,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.c0(v,t)
t=A.bX(B.dM,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c0(t,u)
d.lB(D.aTi,A.L())
C.ibu(d,g,h,i,j)
s=(k==null?D.a9G:k).a-w>=0?1:-1
w=A.L()
w.a=B.Mk
w.san(A.jz(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ajE.j(0.5),D.ajE.j(0.12),D.bpB.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aF(D.aTi,w)
r.restore()
r.restore()},
ibu(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.by(D.fhL,B.tP)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.ar(s,o)
o=A.by(D.fhG,B.hU)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.ar(o,n)
n=A.by(D.fhU,B.hU)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.ar(n,s)
s=A.L()
s.r=d.gp(0)
a1.c0(D.fhN,s)
s=A.L()
s.r=d.gp(0)
a1.c0(D.fgw,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.oq(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ce(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ce(m+3,-62,m-2,-58))
l.E(new A.ce(0,-70,k,-58))
l.E(new A.bx())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dgV[j]
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.ewV,D.etX,C.iF(a2.c.j(0.9),3))}a1.ah(D.exs,D.ewr,C.iF(B.w.j(0.18),1.6))
a1.ah(D.etg,H.aNa,C.iF(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.aF(D.fgs,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aF(D.fgG,i)
n=new A.aG(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ce(0,-57,9,-66))
n.E(new A.ce(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fgP,0.1,2.941592653589793,!1,C.iF(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9L
n=25*q
k=23*q
i=9*q
C.hzG(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EH:o
C.hzG(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.euH,D.euD,C.iF(D.akB,4))
a1.ah(D.euF,D.euB,C.iF(D.GG.j(0.7),1.4))
u=A.L()
u.r=B.cV.gp(0)
a1.O(D.euE,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.ibp(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hzG(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hs:s.eV(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aM(0,n)).a5(0,v.aM(0,m))
t=e.a5(0,q.aM(0,p))
d.ah(e,u,C.iF(j,l))
o=A.ap(j,B.w,0.2)
o.toString
d.ah(e,u,C.iF(o,l*0.35))
d.ah(u,t,C.iF(k,l*0.78))
o=A.ap(k,B.w,0.22)
o.toString
d.ah(u,t,C.iF(o,l*0.22))
$.S()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bX(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c0(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
ibp(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bX(B.vH,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.c0(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.O(D.ewB,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.etx,9.5,w)}w=A.bX(D.exO,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.c0(w,u)
u=A.bX(D.ew3,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c0(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kp(13,-20,17,-9,16,2))
t.E(new A.kp(15,13,8,20,0,20))
t.E(new A.kp(-8,20,-15,13,-16,2))
t.E(new A.kp(-17,-9,-13,-20,0,-20))
t.E(new A.bx())
u=A.L()
u.san(A.wd(D.exh,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iF(c8.j(0.5),0.8)
c2.cQ(D.fhW,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fgz,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.ewy,D.ewm,s)
c2.ah(D.ett,D.etk,s)
c2.cQ(D.fgO,2.2,1.4,!1,s)
c2.cQ(D.fgx,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fh1,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ce(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ce(0,-12,-13,-6))
p.E(new A.bx())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ewn,D.etl,C.iF(F.nq,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.ewE,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.ety,3,o)
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ce(-12,22,0,26))
o.E(new A.ce(12,22,13,6))
o.E(new A.ce(8,13,0,12))
o.E(new A.ce(-8,13,-13,6))
o.E(new A.bx())
p=A.L()
p.r=B.hY.gp(0)
c2.af(o,p)
p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ce(0,6,7,8))
p.E(new A.ce(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ce(-20,-27,0,-29))
p.E(new A.ce(20,-27,17,-4))
p.E(new A.ce(0,-14,-17,-4))
p.E(new A.bx())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.w,0.3)
o.toString
c2.cQ(D.fh8,3.4,2.5,!1,C.iF(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fgW,3.6,2.2,!1,C.iF(o,1.2))
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ce(27,-34,25,-19))
o.E(new A.ce(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.aj,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.ce(24,-12,27,-26))
n.E(new A.ce(18,-22,11,-22))
o=A.ap(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.etm,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fh5,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=G.aDP[l]
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fh4,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(H.a9B,H.a9A,C.iF(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fgA,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.bX(D.exB,5,8)
o=D.agR.j(i)
n=A.L()
n.r=o.gp(0)
c2.c0(p,n)
n=A.bX(D.ewe,5,8)
p=D.agR.j(i)
o=A.L()
o.r=p.gp(0)
c2.c0(n,o)
h=c4.e*2.4
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ce(h-3.4,6,h-2.6,7.4))
o.E(new A.ce(h,8.8,h+2.6,7.4))
c2.af(o,C.iF(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.h.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=E.fP[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bX(new A.r(a5,-3),a3,7)
a6=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c0(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.aj,b9,b9,a6)
a6.push(new A.jt(A.bX(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Eb(a4.glg().a.snapshot())
d.clipPath(a3.a,$.mA(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=D.blW.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a__:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dQ
a3=p?0.8:0
c2.cQ(A.bX(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dY
else{b1=A.ap(c0,B.w,0.2)
b1.toString}b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dQ
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.bwl
else{u=A.ap(c8,D.bpD,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ce(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ce(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bx())
v=A.L()
v.r=D.boV.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aF(new A.a4(w,11,w+b6*2,13.2),u)
u=A.bX(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bwq.gp(0)
c2.c0(u,w)
d.restore()
c2.af(b8,C.iF(b4,1.1))}else{u=new A.aG(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ce(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iF(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ce(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ce(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fgN,-1.2,2.2,!1,C.iF(c8.j(0.5),0.8))
c2.cQ(D.fgC,2.141592653589793,2.2,!1,C.iF(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.evX,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.evT,1.7,w)}},
igU(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q6(new A.pH()),e=A.zp(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jz(B.J,new A.r(0,a0*0.46),D.ddE,D.d4Q,B.x,h))
e.aF(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e_()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wd(B.J,230,A.a([D.bkA,B.L],a0),h,B.x,h,h,0))
e.c0(D.fhi,d)
a2.restore()
d=A.L()
d.san(A.wd(D.a9J,58,A.a([D.bnX,B.L],a0),h,B.x,h,h,0))
e.O(D.a9J,58,d)
d=A.L()
d.r=D.bji.gp(0)
e.O(D.a9J,24,d)
d=A.L()
d.r=D.a_r.gp(0)
e.O(D.eug,5,d)
d=A.L()
d.r=D.a_r.gp(0)
e.O(D.euk,3.4,d)
d=A.L()
d.r=D.a_r.gp(0)
e.O(D.euj,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.aj,h,h,u)
u.push(new A.aZ(-60,420))
r.ab()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.ak(m)
r.ab()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.ak(t)
r.ab()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.ak(t)
r.ab()
g=new A.bx()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bhP,D.bjR,D.bpX][s]
u=$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.czm[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.b=B.aa
u.c=2.4
u.r=D.a_O.gp(0)
u.d=B.bG
u.e=B.dQ
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bX(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_O.gp(0)
e.c0(g,u)
d=A.bX(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_O.gp(0)
e.c0(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.bjl.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jz(D.esP,D.esS,D.d6S,B.xg,B.x,h))
e.aF(new A.a4(-200,412,650,1300),g)
j=new A.e_()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bX(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h4()?B.c:B.w
d=new A.ar(B.S,B.Q,B.V,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c0(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.oq(0,1,0.34)
g=A.L()
g.san(A.wd(B.J,250,A.a([D.bqV,D.bkb,D.bsU],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajj,D.biQ,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.i9F(e)
for(l=0;l<3;++l)C.icR(e,D.aBC[l])
C.icG(e,D.eua)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=2.4
a0.r=D.a_J.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.eti,D.etC,C.iF(D.bjz,1.6))
a2.restore()
return f.o9()},
i9F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aG(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kp(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kp(416,382,432,422,428,462))
f.E(new A.bx())
w=A.L()
w.san(A.jz(new A.r(354,0),new A.r(430,0),D.dBZ,B.mq,B.x,i))
d.af(f,w)
v=new A.e_()
v.cU(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.b=B.aa
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dQ
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dik[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aG(h,B.aj,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.ce(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=8
r.r=D.ahD.gp(0)
r.d=B.bG
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=A.ap(D.bjr,D.bpV,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=1.2
r.r=D.a_J.gp(0)
r.d=B.bG
r.e=B.dQ
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bX(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.X,B.U)
w.r=D.brh.gp(0)
d.c0(q,w)}},
icR(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bX(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
b3.r=b1.gp(0)
b4.c0(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ce(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bx())
u=A.L()
u.san(A.jz(new A.r(b0,0),new A.r(v,0),D.diq,B.mq,B.x,a4))
b4.af(w,u)
t=new A.e_()
t.cU(B.o.U(a5*7))
v=b4.c
J.bs(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dQ
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajf.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aF(new A.a4(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.aj,a4,a4,j)
j.push(new A.aZ(k,o))
i.ab()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
h=new A.bx()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=D.lG.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.h.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iF(D.ajf.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.ce(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bx())
m=A.L()
m.r=D.ajr.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajr.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ce(a5-a9,n,a5,u))
e.E(new A.ce(a5+a9,n,p,j))
e.E(new A.ce(a5,b1+a7*0.34,o,j))
e.E(new A.bx())
b1=A.L()
n=a7*1.4
b1.san(A.jz(new A.r(a5-n,0),new A.r(a5+n,0),D.dm0,B.mq,B.x,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h4()?B.w:D.biZ).j(0.16)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dQ
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.aj,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.ce(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=1.2
n.r=b1.gp(0)
n.d=B.bG
n.e=B.dQ
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.b=B.aa
v.c=1.1
v.r=D.bqn.gp(0)
v.d=B.bG
v.e=B.dQ
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bx())
b0=A.L()
b0.r=D.bmp.gp(0)
b4.af(a9,b0)},
icG(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+G.aDM[s]
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.b=B.aa
q.c=3
q.r=D.a_J.gp(0)
q.d=B.bG
q.e=B.dQ
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bX(e.a5(0,H.aN4),24,36)
t=$.S()
r=A.L()
r.r=D.bvx.gp(0)
d.c0(u,r)
t=new A.aG(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ce(w,v-24,r,u))
t.E(new A.bx())
u=A.L()
u.r=D.aik.gp(0)
d.af(t,u)},
ic2(d){switch(B.o.F(d,8)){case 0:return D.b27
case 1:return D.b25
case 2:return D.b24
case 3:return D.b23
case 4:return D.b26
case 5:return D.b28
case 6:return D.hI6
default:return D.hI5}},
SP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpW()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9L:j
w.as=k==null?D.EH:k
C.hDF(d,e,p,C.ic2(m),w,s,m,l)},
hF7(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bUf:function bUf(){var _=this
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
td:function td(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpW:function bpW(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amH:function amH(){this.b=this.a=null},
aXm:function aXm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bU7:function bU7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU8:function bU8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU9:function bU9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUa:function bUa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUb:function bUb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUc:function bUc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUd:function bUd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUe:function bUe(){},
bU6:function bU6(d){this.a=d},
agi:function agi(d,e){this.a=d
this.b=e},
aef:function aef(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nb(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSR(s)
s.bCp(d)
return s},
H5(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fwV(f),v),v.k("M.E"))
w=A.C(v,A.a3(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cT(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lt(e,v,B.d.cm(v,f),h,i,"tree",j)},
ixl(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h7I(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jA(c4,c0)
t=A.C(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
r=A.C(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
q=A.C(c4,A.a3(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wN)g="father"
else g=h===D.oB?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h7K(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H5(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h7L(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lt("True or false: "+h+" is the "+g+" of "+l+".",D.aCE,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lt("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCE,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gi(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h7M(l,a0,c5),v),s)
e=a1.c
if(e===D.wN)e="son"
else e=e===D.oB?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H5(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ew([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mt(a5,a5.r,f.k("mt<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H5(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iC<1>"),a3=new A.iC(a0,1,b3,a2),a3.nc(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H5(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arW(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h7N(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H5(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h7O(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wN
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H5(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNC(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h7P(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H5(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cSc)
h=l+" was born in "+k
c2.$2("place",C.H5(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d7X)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H5(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H5(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j_(b1,b3,b3)
c2.$2("year",C.H5(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bF6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nb(d),l=new A.e_()
l.cU(f)
w=C.ixl(m,l,g)
for(v=new A.dn(w,w.r,w.e);v.C();)J.hna(v.d,l)
v=A.a3(w).k("cr<1>")
u=A.C(new A.cr(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aU(u,new C.fKt(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.I(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.aAE,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hDM(o,l))}}else if(!g&&v>3){o=C.hDM(D.aAE[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hDM(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lt(d.a,w,B.d.cm(w,v),d.d,d.e,d.f,d.r)},
hJ7(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nb(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gi(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gi(n)
l=A.U(m)
k=new A.iC(m,0,5,l.k("iC<1>"))
k.nc(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fZ6(),A.U(j).k("N<1,H>")).fL(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aT9(a0,j[i]))
w.push(new C.auP("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c4(e.c1(0,a0.an2(q),new C.fZ7()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
d=A.C(new A.cr(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cT(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aT9(a0,v[r]))
w.push(new C.auP("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRA(d){return B.d.aow(D.aD9,new C.fGh(d))},
inn(d){return A.nw(new A.Y(D.aD9,new C.fNj(d),x.av))},
bTF(d){return C.hSP(d)},
hSP(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bTF)
case 7:r=f
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bTF,v)},
BR(d,e){return C.hSM(d,e)},
hSM(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BR)
case 7:r=g
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BR)
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
return A.i($async$BR,v)},
bTE(d,e,f){return C.hSN(d,e,f)},
hSN(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTE=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bTE)
case 7:r=h
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bTE,v)},
BS(d,e,f,g){return C.hSO(d,e,f,g)},
hSO(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BS=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BS)
case 7:r=i
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BS)
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
return A.i($async$BS,v)},
bHn(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h9L(d,e,f,g){return new C.alf(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hQT(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cu)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cT(w,0,A.dA(4,"count",x.S),u).dq(0)
B.d.u(w,A.c0(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.h.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.h.M(u)
return C.h9L(w,v,B.o.D(u==null?20:u,5,60),t)},
hoj(d){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cu)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hQT(A.a1(r,t,s)))}return new C.MW(p,w,v)},
hij(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hoj(w.gP(w)))
return v},
aT9(d,e){var w=e.c===D.oB
if(d.an2(e)===0&&d.Gi(e).length!==0)return w?0:1
if(d.Gi(e).length!==0||d.arW(e)!=null)return w?2:3
return w?4:5},
hKc(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nb(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.Gi(m)
g=a2.arW(m)
f=a2.aNC(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wN)k="father"
else k=k===D.oB?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wN)k="father"
else k=k===D.oB?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b0(l,new C.h87())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h88(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iC(a0,0,3,i.k("iC<1>"))
a1.nc(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aT9(a2,m)
i=new A.iC(l,0,4,p)
i.nc(l,0,4,r)
w.push(new C.bbl(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hBd(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hJi(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nb(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gi(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gi(l)
j=A.U(k)
i=new A.iC(k,0,4,j.k("iC<1>"))
i.nc(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aU(h,new C.fZJ(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iC(i,0,k,m)
j.nc(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aT9(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aT9(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aT9(a2,f[g]))
w.push(new C.aaj(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lt:function lt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSR:function bSR(d){this.b=d
this.c=$},
bSS:function bSS(){},
bST:function bST(d){this.a=d},
fwV:function fwV(d){this.a=d},
h7I:function h7I(d){this.a=d},
h7J:function h7J(){},
h7K:function h7K(d){this.a=d},
h7L:function h7L(d,e){this.a=d
this.b=e},
h7M:function h7M(d,e,f){this.a=d
this.b=e
this.c=f},
h7H:function h7H(d,e){this.a=d
this.b=e},
h7N:function h7N(d){this.a=d},
h7O:function h7O(d){this.a=d},
h7P:function h7P(d,e,f){this.a=d
this.b=e
this.c=f},
h7G:function h7G(d,e){this.a=d
this.b=e},
fKt:function fKt(d,e){this.a=d
this.b=e},
auP:function auP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fZ6:function fZ6(){},
fZ7:function fZ7(){},
zz:function zz(d,e,f){this.a=d
this.b=e
this.c=f},
fGh:function fGh(d){this.a=d},
fNj:function fNj(d){this.a=d},
alf:function alf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNF:function bNF(){},
MW:function MW(d,e,f){this.a=d
this.b=e
this.c=f},
bbl:function bbl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h87:function h87(){},
h88:function h88(d){this.a=d},
aaj:function aaj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZJ:function fZJ(d){this.a=d},
biC:function biC(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agg:function agg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
aky:function aky(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akz:function akz(d,e,f,g,h){var _=this
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
_.bw$=g
_.a9$=h
_.c=_.a=null},
bLO:function bLO(d){this.a=d},
bLJ:function bLJ(){},
bLP:function bLP(){},
bLH:function bLH(){},
bLI:function bLI(){},
bLN:function bLN(d){this.a=d},
bLK:function bLK(d,e){this.a=d
this.b=e},
bLM:function bLM(d,e){this.a=d
this.b=e},
bLL:function bLL(d,e){this.a=d
this.b=e},
bLG:function bLG(d){this.a=d},
bdN:function bdN(d,e){this.b=d
this.a=e},
QV:function QV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCb:function aCb(d,e,f){this.b=d
this.c=e
this.a=f},
aAE:function aAE(d,e,f){this.a=d
this.b=e
this.c=f},
avs:function avs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avt:function avt(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b9$=f
_.c=_.a=null},
crz:function crz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crA:function crA(d){this.a=d},
cry:function cry(d){this.a=d},
crB:function crB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crC:function crC(){},
crD:function crD(d,e){this.a=d
this.b=e},
crE:function crE(){},
crF:function crF(d){this.a=d},
crv:function crv(d){this.a=d},
crw:function crw(d,e){this.a=d
this.b=e},
crx:function crx(d,e,f){this.a=d
this.b=e
this.c=f},
crq:function crq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crs:function crs(d,e){this.a=d
this.b=e},
crt:function crt(d,e){this.a=d
this.b=e},
crr:function crr(d,e){this.a=d
this.b=e},
crp:function crp(){},
cru:function cru(){},
bdg:function bdg(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cRH:function cRH(){},
azp:function azp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azq:function azq(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cGy:function cGy(d){this.a=d},
cGx:function cGx(d){this.a=d},
cGG:function cGG(d,e){this.a=d
this.b=e},
cGH:function cGH(d,e){this.a=d
this.b=e},
cGI:function cGI(d){this.a=d},
cGF:function cGF(d){this.a=d},
cGJ:function cGJ(d){this.a=d},
cGK:function cGK(d,e){this.a=d
this.b=e},
cGL:function cGL(){},
cGM:function cGM(d){this.a=d},
cGA:function cGA(d){this.a=d},
cGB:function cGB(d,e){this.a=d
this.b=e},
cGz:function cGz(d,e){this.a=d
this.b=e},
cGC:function cGC(){},
cGD:function cGD(){},
cGE:function cGE(d,e){this.a=d
this.b=e},
aAo:function aAo(){},
aHH:function aHH(){},
hfX(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsg((w-450*u)/2,(v-900*u)/2,u)},
ag4:function ag4(){},
f9n:function f9n(d){this.a=d},
aLx:function aLx(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fjx:function fjx(d){this.a=d},
amx:function amx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amy:function amy(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qf$=f
_.Ma$=g
_.anz$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTD:function bTD(d){this.a=d},
bTC:function bTC(){},
bTA:function bTA(d){this.a=d},
bTy:function bTy(){},
bTz:function bTz(d){this.a=d},
bTv:function bTv(d,e){this.a=d
this.b=e},
bTw:function bTw(){},
bTx:function bTx(d){this.a=d},
bTB:function bTB(d,e){this.a=d
this.b=e},
bTu:function bTu(d){this.a=d},
bu_:function bu_(d,e){this.b=d
this.a=e},
f9o:function f9o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9p:function f9p(d,e,f){this.a=d
this.b=e
this.c=f},
f9q:function f9q(d,e,f){this.a=d
this.b=e
this.c=f},
f9r:function f9r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9s:function f9s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9t:function f9t(){},
amv:function amv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amw:function amw(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qf$=f
_.Ma$=g
_.anz$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTg:function bTg(){},
bTr:function bTr(d,e){this.a=d
this.b=e},
bTs:function bTs(d){this.a=d},
bTt:function bTt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTn:function bTn(){},
bTm:function bTm(d,e){this.a=d
this.b=e},
bTo:function bTo(d,e){this.a=d
this.b=e},
bTp:function bTp(){},
bTq:function bTq(d){this.a=d},
bTi:function bTi(d){this.a=d},
bTj:function bTj(d){this.a=d},
bTk:function bTk(d){this.a=d},
bTh:function bTh(d,e){this.a=d
this.b=e},
bTl:function bTl(d){this.a=d},
bkr:function bkr(d,e){this.b=d
this.a=e},
dtd:function dtd(){},
a2p:function a2p(d,e){this.a=d
this.b=e},
amr:function amr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ams:function ams(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qf$=e
_.Ma$=f
_.anz$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bT2:function bT2(d){this.a=d},
bT1:function bT1(){},
bT0:function bT0(){},
bSV:function bSV(){},
bSW:function bSW(){},
bT_:function bT_(d,e,f){this.a=d
this.b=e
this.c=f},
bSZ:function bSZ(d){this.a=d},
bSX:function bSX(d,e){this.a=d
this.b=e},
bSY:function bSY(d){this.a=d},
bjS:function bjS(d,e){this.b=d
this.a=e},
aCe:function aCe(){},
bhp:function bhp(){},
aCg:function aCg(){},
bhq:function bhq(){},
aCh:function aCh(){},
bhr:function bhr(){},
uw(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.i3,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.ay(u,A.o(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.n(f,u,u,t,s,u,B.n),u,u,u,u,B.OO,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hp6(d,e,f,g,h,i,j){return new C.amt(i,h,d,j,e,f,g,null)},
a6R:function a6R(d,e){this.c=d
this.a=e},
bjZ:function bjZ(d){this.a=d},
tD:function tD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSU:function bSU(d){this.a=d},
Ix:function Ix(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WA:function WA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmM:function bmM(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e3y:function e3y(d,e){this.a=d
this.b=e},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3w:function e3w(d){this.a=d},
e3x:function e3x(d){this.a=d},
e3v:function e3v(d){this.a=d},
e3t:function e3t(d){this.a=d},
e3u:function e3u(d){this.a=d},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3B:function e3B(d){this.a=d},
e3C:function e3C(d,e){this.a=d
this.b=e},
e3D:function e3D(d,e){this.a=d
this.b=e},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3H:function e3H(d,e){this.a=d
this.b=e},
e3I:function e3I(d,e){this.a=d
this.b=e},
e3J:function e3J(d,e){this.a=d
this.b=e},
e3K:function e3K(d,e){this.a=d
this.b=e},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3M:function e3M(d,e,f){this.a=d
this.b=e
this.c=f},
e3N:function e3N(d,e){this.a=d
this.b=e},
e3O:function e3O(d,e){this.a=d
this.b=e},
e3F:function e3F(d){this.a=d},
e3G:function e3G(d){this.a=d},
a0i:function a0i(d,e){this.a=d
this.b=e},
amt:function amt(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amu:function amu(d){var _=this
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
bTe:function bTe(d){this.a=d},
bTf:function bTf(d){this.a=d},
bTd:function bTd(d){this.a=d},
bT4:function bT4(d){this.a=d},
bT5:function bT5(d){this.a=d},
bT3:function bT3(d){this.a=d},
bTa:function bTa(d,e,f){this.a=d
this.b=e
this.c=f},
bTb:function bTb(d){this.a=d},
bT7:function bT7(d,e){this.a=d
this.b=e},
bT8:function bT8(d,e,f){this.a=d
this.b=e
this.c=f},
bTc:function bTc(){},
bT9:function bT9(d,e){this.a=d
this.b=e},
bT6:function bT6(d){this.a=d},
Uf:function Uf(d,e){this.c=d
this.a=e},
amq:function amq(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bSF:function bSF(d){this.a=d},
bSG:function bSG(d){this.a=d},
bSQ:function bSQ(){},
bSP:function bSP(d,e,f){this.a=d
this.b=e
this.c=f},
bSK:function bSK(d,e){this.a=d
this.b=e},
bSJ:function bSJ(d,e){this.a=d
this.b=e},
bSL:function bSL(d){this.a=d},
bSM:function bSM(d,e){this.a=d
this.b=e},
bSN:function bSN(d,e){this.a=d
this.b=e},
bSI:function bSI(d,e){this.a=d
this.b=e},
bSO:function bSO(d,e,f){this.a=d
this.b=e
this.c=f},
bSH:function bSH(d,e){this.a=d
this.b=e},
ilT(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajh(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fJV(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,q>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zg)m.push(l===D.wN?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cF(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cF(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.j_(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j_(h,a2,a2)-A.j_(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fJT(u,f),p),new C.fJU(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aA(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ilU(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajh(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fK_(v,e)
q=new C.fJY(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.I)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.I)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.I)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.am(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.am(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d0(new A.b8(p,d),d.k("M.E"))
n=A.C(d,A.a3(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eL(l,new C.fJZ(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i74(d,e,f,g){var w,v,u=C.ilV(d,e)
if(u<=0||f.length<=u)return new A.afJ(!1,D.E_,f)
if(g.q(0,e.a))return new A.afJ(!1,D.E_,f)
w=A.U(f).c
v=A.cT(f,0,A.dA(u,"count",x.S),w).dq(0)
return new A.afJ(!0,A.cT(f,u,null,w).dq(0),v)},
i75(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajh(d3),d2=d1.length
if(d2===0)return D.hFi
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c1(0,t.a,new C.diJ(t))}s=new C.dj_(v)
d2=x.dy
r=A.T(w,d2)
q=new C.diS(r)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.diR(r)
l=A.T(w,x.do)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c4(l.c1(0,k,new C.diK()),o)}h=new C.diQ(s)
g=new C.diP(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.diL(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.i
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.diY(new C.diU(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dn(v,v.r,v.e),j=a2.gamy(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nw(J.dH(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.diI(a2,new C.diZ(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dn(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cr<1>")
d2=A.C(new A.cr(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GF(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L_(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.C(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.diM(c6,b4))
for(d2=new A.cb(a4,a4.$ti.k("cb<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.diN(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b0(o,new C.diO())
c6.push(new C.aLs(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhv(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hEt(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hyn(d,e,f,g,h,i,j,k,l,m,n){return new C.a0v(k,f,j,e,l,n,m,d,g,h,i,null)},
aEf(d,e,f,g,h,i,j){return new C.blh(i,d,e,f,j,h,g,null)},
arB:function arB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFO:function aFO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e5d:function e5d(d){this.a=d},
e5c:function e5c(d){this.a=d},
e5f:function e5f(d,e){this.a=d
this.b=e},
e5g:function e5g(d,e){this.a=d
this.b=e},
e5h:function e5h(d){this.a=d},
e5b:function e5b(d,e){this.a=d
this.b=e},
e5e:function e5e(d){this.a=d},
e5j:function e5j(d){this.a=d},
e5i:function e5i(d,e){this.a=d
this.b=e},
arv:function arv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFL:function aFL(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e4E:function e4E(d){this.a=d},
e4C:function e4C(d){this.a=d},
e4D:function e4D(d){this.a=d},
e4F:function e4F(d,e){this.a=d
this.b=e},
e4z:function e4z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e40:function e40(d){this.a=d},
e41:function e41(d,e){this.a=d
this.b=e},
e4i:function e4i(d){this.a=d},
e4g:function e4g(d){this.a=d},
e4h:function e4h(d,e){this.a=d
this.b=e},
e4j:function e4j(d){this.a=d},
e4k:function e4k(d,e){this.a=d
this.b=e},
e4y:function e4y(d,e){this.a=d
this.b=e},
e4f:function e4f(d){this.a=d},
e4e:function e4e(d){this.a=d},
e4d:function e4d(d,e){this.a=d
this.b=e},
e4v:function e4v(){},
e4w:function e4w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4u:function e4u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4o:function e4o(d){this.a=d},
e4p:function e4p(d,e,f){this.a=d
this.b=e
this.c=f},
e4n:function e4n(d,e){this.a=d
this.b=e},
e4q:function e4q(d,e){this.a=d
this.b=e},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4m:function e4m(){},
e4r:function e4r(d,e){this.a=d
this.b=e},
e4s:function e4s(d){this.a=d},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4x:function e4x(d,e){this.a=d
this.b=e},
e3P:function e3P(d,e){this.a=d
this.b=e},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
e4H:function e4H(d,e,f){this.a=d
this.b=e
this.c=f},
e4B:function e4B(d,e,f){this.a=d
this.b=e
this.c=f},
e4A:function e4A(d){this.a=d},
e3R:function e3R(d){this.a=d},
e3S:function e3S(d){this.a=d},
e3T:function e3T(){},
e3U:function e3U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3X:function e3X(d,e){this.a=d
this.b=e},
e3W:function e3W(d){this.a=d},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e3V:function e3V(d){this.a=d},
e4G:function e4G(d){this.a=d},
e4a:function e4a(){},
e4b:function e4b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e49:function e49(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e45:function e45(d,e,f){this.a=d
this.b=e
this.c=f},
e44:function e44(d,e,f){this.a=d
this.b=e
this.c=f},
e42:function e42(d,e){this.a=d
this.b=e},
e46:function e46(d){this.a=d},
e47:function e47(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e43:function e43(d,e){this.a=d
this.b=e},
e48:function e48(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4O:function e4O(){},
e4P:function e4P(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d){this.a=d},
e4R:function e4R(d,e){this.a=d
this.b=e},
e4K:function e4K(d){this.a=d},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4L:function e4L(d,e){this.a=d
this.b=e},
e4M:function e4M(d,e){this.a=d
this.b=e},
e4N:function e4N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4S:function e4S(d){this.a=d},
e4J:function e4J(d){this.a=d},
e4_:function e4_(d){this.a=d},
bht:function bht(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
diG:function diG(d){this.a=d},
diF:function diF(d,e){this.a=d
this.b=e},
diH:function diH(d){this.a=d},
diE:function diE(d,e){this.a=d
this.b=e},
fJV:function fJV(d,e){this.a=d
this.b=e},
fJW:function fJW(d){this.a=d},
fJX:function fJX(){},
fJT:function fJT(d,e){this.a=d
this.b=e},
fJU:function fJU(){},
fK_:function fK_(d,e){this.a=d
this.b=e},
fK0:function fK0(d){this.a=d},
fK1:function fK1(){},
fJY:function fJY(d){this.a=d},
fJZ:function fJZ(d,e){this.a=d
this.b=e},
L_:function L_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GF:function GF(d,e){this.a=d
this.b=e},
bhv:function bhv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
diJ:function diJ(d){this.a=d},
dj_:function dj_(d){this.a=d},
diS:function diS(d){this.a=d},
diT:function diT(){},
diR:function diR(d){this.a=d},
diK:function diK(){},
diQ:function diQ(d){this.a=d},
diP:function diP(d,e){this.a=d
this.b=e},
diL:function diL(d){this.a=d},
diU:function diU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
diV:function diV(d){this.a=d},
diW:function diW(d){this.a=d},
diX:function diX(){},
diY:function diY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
diZ:function diZ(){},
diI:function diI(d,e,f,g,h,i,j,k,l,m){var _=this
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
diM:function diM(d,e){this.a=d
this.b=e},
diN:function diN(d){this.a=d},
diO:function diO(){},
aLs:function aLs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhw:function bhw(d,e){this.b=d
this.a=e},
dj0:function dj0(){},
dj1:function dj1(d){this.a=d},
dj2:function dj2(d){this.a=d},
dj3:function dj3(){},
bli:function bli(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgx:function bgx(d,e){this.b=d
this.a=e},
bzn:function bzn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fp8:function fp8(d){this.a=d},
boE:function boE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f_9:function f_9(d){this.a=d},
f_8:function f_8(d,e){this.a=d
this.b=e},
a0v:function a0v(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEd:function aEd(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dyW:function dyW(d,e){this.a=d
this.b=e},
dyV:function dyV(d){this.a=d},
dyT:function dyT(d){this.a=d},
dyU:function dyU(d){this.a=d},
dz4:function dz4(d){this.a=d},
dz5:function dz5(d){this.a=d},
dz3:function dz3(d,e){this.a=d
this.b=e},
dz6:function dz6(){},
dz9:function dz9(d){this.a=d},
dz2:function dz2(d,e){this.a=d
this.b=e},
dz8:function dz8(){},
dza:function dza(d){this.a=d},
dz1:function dz1(d,e){this.a=d
this.b=e},
dzb:function dzb(d){this.a=d},
dz0:function dz0(d){this.a=d},
dzc:function dzc(d){this.a=d},
dz_:function dz_(d){this.a=d},
dzd:function dzd(d){this.a=d},
dyZ:function dyZ(d){this.a=d},
dze:function dze(d){this.a=d},
dyY:function dyY(d){this.a=d},
dzf:function dzf(d){this.a=d},
dyX:function dyX(d,e){this.a=d
this.b=e},
dz7:function dz7(d){this.a=d},
aeC:function aeC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blh:function blh(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeB:function aeB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blg:function blg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzg:function dzg(d){this.a=d},
dzh:function dzh(d,e){this.a=d
this.b=e},
aEe:function aEe(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKu:function aKu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeD:function aeD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzq:function dzq(d){this.a=d},
GB:function GB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hta(d){var w=d.V,v=x.N
return w.jp(w,new C.cga(),v,v)},
hZr(d){var w=d.bI
if(w>=0)return w
return 5},
htc(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hta(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
htb(d,e){var w=C.htc(d,e)
if(w!=null&&w.cb(new A.V(Date.now(),0,!1)))return!0
return!1},
hZs(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hta(d),w,w)
u=C.htc(d,e)
t=u!=null&&u.cb(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dx(30,0,0,0,0,0).a).aa().ag())
d.V=v},
b21(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b21=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lz(t,B.JU),$async$b21)
case 3:if(l){u=!0
w=1
break}u=A.lf(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JU,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b21,v)},
cga:function cga(){},
hZp(){var w,v=$.ow(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
Ju(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ju=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Ju)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Ju)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
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
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ju,v)},
a8z(d){return C.hZq(d)},
hZq(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8z=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8z)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hP("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cQ,null),$async$a8z)
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
return A.i($async$a8z,v)},
cg9(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cg9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ju(),$async$cg9)
case 3:t=m.i9(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a8(q)
o=p.h(q,"email")
p=B.a.i(J.k(o==null?"":o).toLowerCase())===n&&J.z(p.h(q,"active"),!0)}else p=!1
if(p){u=r.a
w=1
break}w=4
break
case 5:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cg9,v)},
Ot(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ot=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cg9(d),$async$Ot)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ju(),$async$Ot)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dK(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8z(s),$async$Ot)
case 9:case 8:u=t
w=1
break
case 5:n=C.hZp()
w=10
return A.b(C.Ju(),$async$Ot)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8z(s),$async$Ot)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
b20(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b20=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ju(),$async$b20)
case 3:t=f
for(s=J.dq(t),r=s.gdQ(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8z(t),$async$b20)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b20,v)},
a8A(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8A=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arA(d,e),$async$a8A)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ot(d),$async$a8A)
case 7:w=4
break
case 5:w=8
return A.b(C.b20(d),$async$a8A)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8A,v)},
aru(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aru=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arA(f,e),$async$aru)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$aru)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ju(),$async$aru)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a8(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aru,v)},
b2_(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b2_)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ju(),$async$b2_)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a8(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2_,v)},
hZt(){var w,v=$.ow(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
arx(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$arx)
case 3:if(!g){u=null
w=1
break}t=C.hZt()
w=4
return A.b(A.WB(),$async$arx)
case 4:s=g
r=B.dV.aK(B.W.av(d.f2(),null))
r=B.cK.gco().aK(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8B(s),$async$arx)
case 5:p=e?999:2
u=new A.a1F("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arx,v)},
arw(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arw=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WB(),$async$arw)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.h.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b2_(J.k(l==null?"":l),j),$async$arw)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cb.cD(0,B.cH.aK(t))
s=C.htd(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dK(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8B(p),$async$arw)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arw,v)},
htd(d){var w,v,u,t,s=null
try{w=B.W.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hZv(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
hbV(d){var w=0,v=A.j(x.m),u,t,s
var $async$hbV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arw(t[1])
w=1
break}u=null
w=1
break}u=C.htd(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hbV,v)},
hZv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cF(u,new C.cgc(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cgd(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i9(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cF(n,new C.cge(),n.$ti.k("M.E"),o)
k=A.a3(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cgf(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ary(h,w,s,r,q)},
arA(d,e){var w=0,v=A.j(x.y),u,t
var $async$arA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ok(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bj(d),$async$arA)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arA,v)},
cgl(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cgl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bj(d),$async$cgl)
case 3:t=s.b9(f,new C.cgm(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.cgn())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgl,v)},
WC(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WC=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arA(e,d),$async$WC)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Ot(e),$async$WC)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bj(e),$async$WC)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cgj(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a8(r)
if(t.gau(r)){u=null
w=1
break}t=t.dO(r,new C.cgk(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LQ(e,o),$async$WC)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.ary(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
b24(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b24=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b24)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hl(A.KW(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b24,v)},
b23(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b23=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b23)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arx(r,f),$async$b23)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIu(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b23,v)},
WD(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WD=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hbV(a0),$async$WD)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aru(g.a,d,e,f,s,r),$async$WD)
case 6:if(!a2){if(r)throw A.W(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bEO(e,j),$async$WD)
case 12:case 11:w=13
return A.b(C.aj_(e,j,s),$async$WD)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bu(e,i,h),$async$WD)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bsm(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WD,v)},
ary:function ary(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgh:function cgh(){},
cgi:function cgi(){},
cgg:function cgg(){},
cgc:function cgc(){},
cgd:function cgd(){},
cge:function cge(){},
cgf:function cgf(){},
cgm:function cgm(){},
cgn:function cgn(){},
cgj:function cgj(d){this.a=d},
cgk:function cgk(d){this.a=d},
hl5(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.arz(w,e,g,i,f,h,null),!0,null,x.H)},
diD(d,e,f,g,h,i,j,k){return new C.bhs(i,e,k,j,g,f,h,d,null)},
arz:function arz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFN:function aFN(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e50:function e50(d){this.a=d},
e51:function e51(d,e,f){this.a=d
this.b=e
this.c=f},
e55:function e55(d,e){this.a=d
this.b=e},
e56:function e56(d){this.a=d},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e5_:function e5_(d,e){this.a=d
this.b=e},
e54:function e54(d){this.a=d},
e53:function e53(d,e){this.a=d
this.b=e},
e52:function e52(){},
e58:function e58(d){this.a=d},
e59:function e59(d,e){this.a=d
this.b=e},
e57:function e57(d,e){this.a=d
this.b=e},
dj4:function dj4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhu:function bhu(d,e,f){this.d=d
this.e=e
this.a=f},
adS:function adS(d,e,f){this.c=d
this.d=e
this.a=f},
bhs:function bhs(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhx:function bhx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0P:function a0P(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFM:function aFM(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4U:function e4U(d){this.a=d},
e4V:function e4V(d){this.a=d},
e4W:function e4W(d){this.a=d},
e4X:function e4X(d){this.a=d},
a0Q:function a0Q(d){this.a=d},
bmN:function bmN(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e5a:function e5a(d,e){this.a=d
this.b=e},
b0y(d,e){return new C.b0x(d,e,null)},
b0x:function b0x(d,e,f){this.c=d
this.d=e
this.a=f},
iok(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.b_(d,11)},
ivT(d){return A.bU(B.L,null,new C.h0f(new C.ui(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hvc(d,e){return new C.auD(e,d,null)},
aT2(d,e,f,g,h,i,j){var w=C.iok(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a7C(w,!0,null),null),B.aq)
return A.aSn(e,B.bY,f,g,h,i,j)},
lX:function lX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7C:function a7C(d,e,f){this.c=d
this.d=e
this.a=f},
bmr:function bmr(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dR2:function dR2(d){this.a=d},
dR3:function dR3(){},
dR4:function dR4(d,e){this.a=d
this.b=e},
bmq:function bmq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h0f:function h0f(d){this.a=d},
h0e:function h0e(d,e){this.a=d
this.b=e},
h0d:function h0d(d,e){this.a=d
this.b=e},
h0c:function h0c(d,e){this.a=d
this.b=e},
auD:function auD(d,e,f){this.c=d
this.d=e
this.a=f},
cpR:function cpR(d,e){this.a=d
this.b=e},
aNU:function aNU(){},
ivE(d){var w=null
return A.cg(w,w,!0,w,new C.h_D(),d,w,!0,!0,x.e2)},
iwS(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h7q(h,g,f,e),d,w,!0,!0,x.N)},
ivG(d,e){var w=null
return A.cg(w,w,!0,w,new C.h_H(e),d,w,!0,!0,x.dY)},
ivF(d){var w=null
return A.cg(w,w,!0,w,new C.h_G(),d,w,!0,!0,x.c5)},
aVZ:function aVZ(d,e){this.a=d
this.b=e},
aVY:function aVY(d){this.a=d},
aU0:function aU0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_D:function h_D(){},
h7q:function h7q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_H:function h_H(d){this.a=d},
h_G:function h_G(){},
a_t:function a_t(d,e){this.c=d
this.a=e},
aAX:function aAX(){var _=this
_.d=$
_.c=_.a=_.e=null},
daa:function daa(d){this.a=d},
dab:function dab(d){this.a=d},
da9:function da9(d,e){this.a=d
this.b=e},
dac:function dac(d){this.a=d},
dad:function dad(d){this.a=d},
a_s:function a_s(d){this.a=d},
aAW:function aAW(){this.d=$
this.c=this.a=null},
da6:function da6(d){this.a=d},
da7:function da7(d){this.a=d},
da8:function da8(d){this.a=d},
ZZ:function ZZ(d){this.a=d},
azC:function azC(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cIf:function cIf(){},
cIl:function cIl(d){this.a=d},
cIm:function cIm(d){this.a=d},
cIn:function cIn(d){this.a=d},
cIk:function cIk(){},
cIo:function cIo(d){this.a=d},
cIp:function cIp(d){this.a=d},
cIj:function cIj(){},
cIq:function cIq(d,e){this.a=d
this.b=e},
cIi:function cIi(d,e){this.a=d
this.b=e},
cIg:function cIg(d,e){this.a=d
this.b=e},
cIr:function cIr(d){this.a=d},
cIh:function cIh(){},
cIs:function cIs(d){this.a=d},
a2B:function a2B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bzf:function bzf(){this.d=$
this.c=this.a=null},
foE:function foE(d,e){this.a=d
this.b=e},
foF:function foF(d){this.a=d},
foG:function foG(d,e){this.a=d
this.b=e},
acU:function acU(d,e){this.a=d
this.b=e},
Gp:function Gp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bzd:function bzd(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
foC:function foC(d,e){this.a=d
this.b=e},
azv:function azv(d,e){this.c=d
this.a=e},
bze:function bze(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
foD:function foD(d){this.a=d},
bzc:function bzc(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQ1:function aQ1(){},
aQ2:function aQ2(){},
bGP(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.bh(u),s=B.o.D(B.h.U((u-t)*100),0,99),r=d<0?"-":"",q=A.ou(B.o.v(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fYU(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zm(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSF(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i5().la(85,1280,B.eR),$async$aSF)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aSF)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hvb()
w=9
return A.b(C.cpQ(q,r),$async$aSF)
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
return A.i($async$aSF,v)},
aT0(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aT0=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.cpN(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cH.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hm(p,!0,null,o).dg(0,B.h2),$async$aT0)
case 9:n=a1
w=10
return A.b(n.le(),$async$aT0)
case 10:m=a1
w=11
return A.b(m.b.hj(B.hf),$async$aT0)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dF.gaS(l))
k="data:image/png;base64,"+B.cK.gco().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.h.U(o*0.72)
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
return A.i($async$aT0,v)},
fYU:function fYU(){},
ui:function ui(d){this.a=d},
auC:function auC(d,e,f){this.c=d
this.d=e
this.a=f},
aHi:function aHi(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eXj:function eXj(d,e){this.a=d
this.b=e},
eXa:function eXa(d){this.a=d},
eXb:function eXb(d){this.a=d},
eXh:function eXh(d,e){this.a=d
this.b=e},
eXg:function eXg(d,e){this.a=d
this.b=e},
eXd:function eXd(d,e){this.a=d
this.b=e},
eXc:function eXc(d,e){this.a=d
this.b=e},
eXe:function eXe(d){this.a=d},
eXf:function eXf(d,e){this.a=d
this.b=e},
eXi:function eXi(d,e){this.a=d
this.b=e},
eX5:function eX5(d,e){this.a=d
this.b=e},
eX9:function eX9(d){this.a=d},
eX8:function eX8(d,e){this.a=d
this.b=e},
eX7:function eX7(d){this.a=d},
eXk:function eXk(d,e){this.a=d
this.b=e},
eXl:function eXl(d,e){this.a=d
this.b=e},
eX6:function eX6(d,e){this.a=d
this.b=e},
hIK(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fYV(d,e,f){var w=0,v=A.j(x.N),u
var $async$fYV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.W.av(C.hIK(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYV,v)},
bGR(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fYV(!0,d,e),$async$bGR)
case 4:w=3
return A.b(r.auA(g,d,e.a),$async$bGR)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dV.aK(B.W.av(C.hIK(d,e,null),null))
u="NGMY_WS:"+B.kM.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGR,v)},
hzM(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hkF(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d3(s,"{"))try{w=B.W.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
itG(d){var w,v,u,t=C.hzM(d)
if(t==null)return null
if(C.hkF(t))return t
w=B.a.cm(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b_(t,w))
if(C.hkF(v))return v}u=B.a.cm(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b_(t,u))
if(C.hkF(v))return v}return null},
hkE(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.cb.cD(0,B.cH.aK(J.mY(q,8)))
w=t.a(B.W.aP(0,v,r))}else w=t.a(B.W.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hez(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bGQ(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auz(t[1]),$async$bGQ)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hkE(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hkE(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGQ,v)},
hkD(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lD(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGk(){var w=0,v=A.j(x.o),u,t
var $async$bGk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hy(),$async$bGk)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hkE(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGk,v)},
hJW(d,e,f,g){return A.bU(B.L,null,new C.h7d(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h7d:function h7d(d,e,f){this.a=d
this.b=e
this.c=f},
aeY:function aeY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXn:function eXn(d,e){this.a=d
this.b=e},
eXo:function eXo(d,e){this.a=d
this.b=e},
eXp:function eXp(d,e){this.a=d
this.b=e},
eXq:function eXq(d,e){this.a=d
this.b=e},
eXm:function eXm(d){this.a=d},
auw:function auw(d,e,f){this.c=d
this.d=e
this.a=f},
bo9:function bo9(){var _=this
_.c=_.a=_.e=_.d=null},
eX0:function eX0(d,e){this.a=d
this.b=e},
eX1:function eX1(d){this.a=d},
eX2:function eX2(d){this.a=d},
auB:function auB(d){this.a=d},
aHh:function aHh(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eX4:function eX4(d){this.a=d},
eX3:function eX3(d){this.a=d},
i1M(d,e,f,g,h){return new C.P8(h,g,d,e,f,null)},
aMe:function aMe(d,e){this.a=d
this.b=e},
P8:function P8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHj:function aHj(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eXN:function eXN(){},
eXJ:function eXJ(d,e){this.a=d
this.b=e},
eXK:function eXK(d){this.a=d},
eXu:function eXu(d){this.a=d},
eXs:function eXs(d){this.a=d},
eXt:function eXt(d){this.a=d},
eXD:function eXD(d,e){this.a=d
this.b=e},
eXA:function eXA(d,e){this.a=d
this.b=e},
eXB:function eXB(d,e){this.a=d
this.b=e},
eXC:function eXC(d,e,f){this.a=d
this.b=e
this.c=f},
eXy:function eXy(d,e,f){this.a=d
this.b=e
this.c=f},
eXw:function eXw(d){this.a=d},
eXx:function eXx(d){this.a=d},
eXz:function eXz(d){this.a=d},
eXQ:function eXQ(d){this.a=d},
eXP:function eXP(d){this.a=d},
eXR:function eXR(d){this.a=d},
eXO:function eXO(d){this.a=d},
eXr:function eXr(d){this.a=d},
eXv:function eXv(d,e){this.a=d
this.b=e},
eXM:function eXM(d,e){this.a=d
this.b=e},
eXL:function eXL(d,e){this.a=d
this.b=e},
eXG:function eXG(d){this.a=d},
eXH:function eXH(d){this.a=d},
eXI:function eXI(d,e){this.a=d
this.b=e},
eXF:function eXF(d,e){this.a=d
this.b=e},
eXE:function eXE(d,e,f){this.a=d
this.b=e
this.c=f},
bB0:function bB0(){},
B6(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahw(d,e,f){return C.ihQ(d,e,f)},
ihQ(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahw=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahw)
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
return A.i($async$ahw,v)},
ahv(d,e){return C.ihP(d,e)},
ihP(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahv=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahv)
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
return A.i($async$ahv,v)},
igF(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TT(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDL(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.Y(q,"ngmy:thumb:")
if(!t)t=B.a.Y(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.Y(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b5h(q),$async$bDL)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aT0(q,!1),$async$bDL)
case 6:r=f
if(r!=null&&B.a.Y(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDL,v)},
hQ8(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aI(d.h(0,"quantity"))
if(w==null)w=null
v=A.aI(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rs(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rs(p,J.k(u==null?"":u),1,o,q)},
hez(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cF(w,new C.cHw(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cHx(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lD(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ilP(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wN
case"female":case"f":return D.oB
default:return D.zg}},
hF2(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hp7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ilP(v==null?j:J.k(v))
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
m=A.aI(d.h(0,"birthOrder"))
m=m==null?j:B.h.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aI(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.h.M(k)
return new C.i4(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ilR(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Pb
case"viewer":return D.kZ
default:return D.uT}},
ilS(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hn(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRH(d,e){return B.a.i(e.toLowerCase())===C.Hn(d,e)&&d.y!==D.kZ},
ux(d,e){var w,v=d.y
if(v===D.kZ)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hn(d,e))return!0
if(v===D.Pb)return!0
v=d.e
return new A.N(v,A.hkL(),A.U(v).k("N<1,q>")).q(0,w)},
ilb(d){return J.dH(d,new C.fIN()).gJ(0)},
h7Y(d){var w=0,v=A.j(x.y),u,t
var $async$h7Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bj(d),$async$h7Y)
case 3:u=t.rn(f,new C.h7Z(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h7Y,v)},
bEO(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bj(d),$async$bEO)
case 3:t=g
if(J.rn(t,new C.fGg(e))){w=1
break}if(C.ilb(t)>=2)throw A.W(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEO,v)},
amA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cF(w,new C.bTG(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bTH(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b9(u,new C.bTI(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bj(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aI(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.h.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ilR(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cu)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hFh(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aA(v,0,8)},
DD(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SO(d),$async$DD)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$DD)
case 4:t=f
w=5
return A.b(t.a7C(0),$async$DD)
case 5:w=6
return A.b(C.fwv(t,l),$async$DD)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hAn(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pa(l,n),$async$DD)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hAn(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pa(l,n),$async$DD)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DD,v)},
fwv(d,e){return C.ie_(d,e)},
ie_(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fwv=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.B6(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.W.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aT(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.B6(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.W.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hez(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B6(a9)+"_"+n))
i=C.igF(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5h(h),$async$fwv)
case 17:g=b1
if(g!=null){i=i.TT(g)
p=!0}case 16:J.c4(q,i)
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
case 8:J.SX(q,new C.fww())
if(p&&J.ad(q)!==0)C.pa(a9,q)
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
return A.i($async$fwv,v)},
bFe(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SO(d),$async$bFe)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DD(r),$async$bFe)
case 4:t=p.aT(g)
case 5:if(!t.C()){w=6
break}s=t.gP(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFe,v)},
hAn(d){var w,v,u,t
try{w=B.W.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cF(v,new C.fs5(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fs6(),u),u.k("M.E"))
B.d.b0(v,new C.fs7())
return v}catch(t){v=A.a([],x.D)
return v}},
pa(d,e){return C.ivt(d,e)},
ivt(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pa=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SO(b2),$async$pa)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$pa)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B6(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b9(x.j.a(B.W.aP(0,p,null)),new C.h_r(),a2).fL(0)
a2=J.b9(b3,new C.h_s(),a2).c_(0,new C.h_t())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eC(n,m)?17:18
break
case 17:a5=C.B6(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9U(l),$async$pa)
case 19:t=21
a5=C.B6(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.W.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9U(a5==null?null:J.k(a5)),$async$pa)
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
return A.b(C.ahv(r,"ngmy_worksheet_item_v3_"+C.B6(a8)+"_"+m),$async$pa)
case 29:w=30
return A.b(C.ahv(r,"ngmy_worksheet_thumb_v3_"+C.B6(a8)+"_"+m),$async$pa)
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
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bDL(h),$async$pa)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahw(r,"ngmy_worksheet_thumb_v3_"+C.B6(a8)+"_"+a4,f),$async$pa)
case 40:g=i.TT(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahv(r,"ngmy_worksheet_thumb_v3_"+C.B6(a8)+"_"+a4),$async$pa)
case 41:g=i.TT(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahv(r,"ngmy_worksheet_thumb_v3_"+C.B6(a8)+"_"+a4),$async$pa)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahw(r,"ngmy_worksheet_item_v3_"+C.B6(a8)+"_"+a4,B.W.av(g.aj(),null)),$async$pa)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c4(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahw(r,"ngmy_worksheets_index_v3_"+C.B6(a8),B.W.av(q,null)),$async$pa)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.h_u(q))
a4=a3.$ti.k("cM<1,aa<q,@>>")
a7=A.C(new A.cM(a3,new C.h_v(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahw(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.W.av(a0,null)),$async$pa)
case 45:w=46
return A.b(J.hPd(r),$async$pa)
case 46:if(a2.gcn(b3)&&J.ad(q)===0){u=!1
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
return A.i($async$pa,v)},
Mi(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DD(d),$async$Mi)
case 3:t=g
s=J.cE(t)
r=s.bk(t,new C.h7X(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.pa(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mi,v)},
bF0(d,e){var w=0,v=A.j(x.H),u
var $async$bF0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DD(d),$async$bF0)
case 2:u=g
J.nO(u,new C.fJg(e))
w=3
return A.b(C.pa(d,u),$async$bF0)
case 3:return A.h(null,v)}})
return A.i($async$bF0,v)},
Hp(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hp)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.W.aP(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cF(j,new C.fMt(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fMu(),s),s.k("M.E"))
B.d.b0(r,new C.fMv())
k=r}}catch(h){}w=4
return A.b(C.fsP(d),$async$Hp)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ien(k,p,d)
j=A.U(o)
s=j.k("N<1,aa<q,@>>")
s=A.C(new A.N(o,new C.fMw(),s),s.k("ak.E"))
n=B.W.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RW(d,o),$async$Hp)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fMx(d),j),j.k("M.E"))
if(m.length!==0)C.aRr(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hp,v)},
h_d(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h_d=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RW(d,e),$async$h_d)
case 3:t=J.dH(e,new C.h_e(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRr(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_d,v)},
a4g(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4g=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a4g)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.W.aP(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cF(m,new C.h7S(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h7T(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oA(o,new C.h7U(e))
if(B.a.i(e.x).length===0&&C.ux(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGG(e.y===D.kZ?D.kZ:D.uT,m)}else p=e
if(q===-1)J.mX(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RW(d,o),$async$a4g)
case 3:w=C.ux(p,d)?4:5
break
case 4:w=6
return A.b(C.aRq(C.Hn(p,d),p),$async$a4g)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4g,v)},
aRD(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hp(d),$async$aRD)
case 2:u=g
t=J.cE(u)
s=A.nw(t.eO(u,new C.fIY(e)))
t.bq(u,new C.fIZ(e))
w=3
return A.b(C.RW(d,u),$async$aRD)
case 3:w=s!=null&&C.aRH(s,d)?4:5
break
case 4:w=6
return A.b(C.fs9(e),$async$aRD)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRD,v)},
ajh(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h82(),v),v.k("M.E"))
return w},
hi7(d,e){var w,v=d.f,u=A.nw(new A.Y(v,new C.fIr(e),A.U(v).k("Y<1>")))
v=C.ajh(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fIs(e,u),w),w.k("M.E"))
B.d.b0(v,new C.fIt())
return v},
ilV(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hK_(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hi7(d,u),new C.h7r(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ino(d,e){var w
if(e==null||e.length===0)return 1
w=C.hi7(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fNk(),A.U(w).k("N<1,H>")).f0(0,B.yc)+1},
ivm(d){var w,v=C.ajh(d)
if(v.length===0)return null
w=new A.Y(v,new C.h_7(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ilQ(d){return A.J(["id",d.a,"name",d.b,"gender",C.hF2(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
inj(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.I(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zg?n:q.c
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
d=q.aGB(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cQY(a1,w,a3.d,a2.y,s,a0,v)},
Bj(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bj)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.W.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cF(p,new C.fMq(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fMr(),s),s.k("M.E"))
B.d.b0(p,new C.fMs())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bj,v)},
aj_(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aj_=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uT:D.kZ
a7=C.Hn(b2,b3)
w=2
return A.b(C.Bj(b1),$async$aj_)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bk(a8,new C.h_2(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEO(b1,b2),$async$aj_)
case 5:case 4:if(b0===-1){u=b2.aGG(a6,a7)
a9.ca(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.I)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.I)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.zg?i:l.c
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
s.n(0,m,l.aGB(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uT:D.kZ
u=t.cR_(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RW(b1,a8),$async$aj_)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRq(B.a.i(b3.toLowerCase()),u),$async$aj_)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aj_,v)},
hAN(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,aa<q,@>>"),k=A.C(new A.N(m,C.hJ4(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hAO(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,aa<q,@>>")
u=A.C(new A.N(u,C.hJ4(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ibU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amA(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hkL(),A.U(j).k("N<1,q>")).c_(0,new C.fsC())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uT
else s=B.d.q(t,u)?D.Pb:D.kZ
return w.aGG(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amA(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cF(h,new C.fsD(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fsE(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b9(n,new C.fsF(),x.N).c_(0,new C.fsG())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uT
else s=B.d.q(t,u)?D.Pb:D.kZ
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bj(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aI(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.h.M(j)
if(j==null)j=0
return new C.kZ(h,r,p,!m,t,o,l,j,v,s,B.cf)},
fsP(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fsP=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fsT()
h=x.N
g=x.z
w=7
return A.b(A.ib(A.a([A.lI("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lI("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lI("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fsP)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h0(l,o)
J.h0(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a3(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.fsQ(a0),h.k("M.E"),x.k)
l=A.a3(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fsR(),l),l.k("M.E"))
B.d.b0(l,new C.fsS())
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
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
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
return A.i($async$fsP,v)},
ien(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dO(e,new C.fxd(),v).c_(0,new C.fxe())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hn(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kZ){m=q.e
m=!new A.N(m,A.hkL(),A.U(m).k("N<1,q>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.inj(l,v)
o=C.Hn(k,w)
p=v.d
s.n(0,u,o===w?k.bg2(p,D.uT):k.bg2(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.b0(j,new C.fxf())
return j},
RW(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RW)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b9(e,new C.fAe(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.W.av(s,null)),$async$RW)
case 3:return A.h(null,v)}})
return A.i($async$RW,v)},
aRq(d,e){return C.ijD(d,e)},
ijD(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mc("family_trees",A.a([C.hAN(e,d)],p),null,B.cQ),$async$aRq)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mc("family_trees",A.a([C.hAO(e,d)],p),null,B.cQ),$async$aRq)
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
return A.i($async$aRq,v)},
aRr(d,e){return C.ijE(d,e)},
ijE(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRr=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,aa<q,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fFv(d),n),m)
r=l
w=7
return A.b(A.mc("family_trees",r,null,B.cQ),$async$aRr)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fFw(d),n),m)
p=k
w=8
return A.b(A.mc("family_trees",p,null,B.cQ),$async$aRr)
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
return A.i($async$aRr,v)},
fs9(d){return C.ib9(d)},
ib9(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fs9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sn("family_trees",A.J(["id",d],x.N,x.z),null,B.cQ),$async$fs9)
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
return A.i($async$fs9,v)},
rs:function rs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lD:function lD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cHz:function cHz(){},
cHy:function cHy(){},
cHw:function cHw(){},
cHx:function cHx(){},
Iw:function Iw(d,e){this.a=d
this.b=e},
i4:function i4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amz:function amz(d,e){this.a=d
this.b=e},
fIN:function fIN(){},
h7Z:function h7Z(d){this.a=d},
fGg:function fGg(d){this.a=d},
kZ:function kZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bTK:function bTK(){},
bTJ:function bTJ(){},
bTG:function bTG(){},
bTH:function bTH(){},
bTI:function bTI(){},
fww:function fww(){},
fs5:function fs5(){},
fs6:function fs6(){},
fs7:function fs7(){},
h_r:function h_r(){},
h_s:function h_s(){},
h_t:function h_t(){},
h_u:function h_u(d){this.a=d},
h_v:function h_v(){},
h7X:function h7X(d){this.a=d},
fJg:function fJg(d){this.a=d},
fMt:function fMt(){},
fMu:function fMu(){},
fMv:function fMv(){},
fMw:function fMw(){},
fMx:function fMx(d){this.a=d},
h_e:function h_e(d){this.a=d},
h7S:function h7S(){},
h7T:function h7T(){},
h7U:function h7U(d){this.a=d},
fIY:function fIY(d){this.a=d},
fIZ:function fIZ(d){this.a=d},
h82:function h82(){},
fIr:function fIr(d){this.a=d},
fIs:function fIs(d,e){this.a=d
this.b=e},
fIt:function fIt(){},
h7r:function h7r(d){this.a=d},
fNk:function fNk(){},
h_7:function h_7(){},
fMq:function fMq(){},
fMr:function fMr(){},
fMs:function fMs(){},
h_2:function h_2(d){this.a=d},
fsC:function fsC(){},
fsD:function fsD(){},
fsE:function fsE(){},
fsF:function fsF(){},
fsG:function fsG(){},
fsT:function fsT(){},
fsU:function fsU(d){this.a=d},
fsQ:function fsQ(d){this.a=d},
fsR:function fsR(){},
fsS:function fsS(){},
fxd:function fxd(){},
fxe:function fxe(){},
fxf:function fxf(){},
fAe:function fAe(){},
fFv:function fFv(d){this.a=d},
fFw:function fFw(d){this.a=d},
cHA:function cHA(d,e){this.a=d
this.b=e},
cHB:function cHB(d,e){this.a=d
this.b=e},
aJq:function aJq(d,e,f){this.a=d
this.b=e
this.c=f},
bbz:function bbz(){this.b=this.a=0},
bby:function bby(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzg:function bzg(){},
xm(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnA()),2,"0")+":"+B.a.b1(B.o.v(w.gGX()),2,"0")},
ikI(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bX(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.S()
u=A.L()
u.r=v.gp(0)
a5.c0(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=E.fP[l]*a7*0.075
j=k-w
j=A.by(new A.a4(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.dh.gp(0)
a5.ar(j,i)
k-=q
k=A.by(new A.a4(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.c.gp(0)
a5.ar(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.by(new A.a4(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.ar(h,q)
q=v*0.27
t=a7*0.02
t=A.by(new A.a4(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.ar(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),L.ahu(E.rX,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=E.rX.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,L.ahu(E.rX,t))
w=A.L()
w.r=E.rX.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=E.m8.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=E.rX.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bW(a0,a1)
u=A.L()
u.r=E.m8.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bW(a0,a1)
u=A.L()
u.r=E.m8.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=E.fP[l]
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=E.m8.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=E.fP[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.w.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.hM.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bX(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,L.ahu(B.bq,1.8))
a4.restore()},
i1J(){var w,v=$.ow(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hg(u)},
aux(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aux=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aux)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$aux)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
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
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aux,v)},
auy(d){return C.i1K(d)},
i1K(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auy)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hP("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cQ,null),$async$auy)
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
return A.i($async$auy,v)},
auA(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auA=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auA)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i1J()
w=4
return A.b(C.aux(),$async$auA)
case 4:r=h
q=B.a.i(e)
p=B.dV.aK(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cK.gco().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.auy(r),$async$auA)
case 5:u=new A.a1F("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auA,v)},
auz(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$auz)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aux(),$async$auz)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aI(n.h(o,"usesRemaining"))
l=m==null?null:B.h.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cb.cD(0,B.cH.aK(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dK(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.auy(q),$async$auz)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auz,v)},
hvb(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cT.aw(999999)},
i1L(d){var w,v,u,t,s,r,q
try{w=A.Hk(d)
if(w==null)return d
v=w
if(J.Mo(v)>960||J.Mn(v)>960){s=v
r=J.Mo(v)>=J.Mn(v)?960:null
v=A.a3l(s,J.Mn(v)>J.Mo(v)?960:null,B.Iq,r)}s=v
u=A.UX(82).GE(s,B.vg)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cpQ(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cpQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i1L(e)
$.cpM.n(0,s,t)
u=C.bGT(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpQ,v)},
b5h(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5h=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.lM(l,",")):l
q=B.cH.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hvb()
w=7
return A.b(C.cpQ(p,q),$async$b5h)
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
return A.i($async$b5h,v)},
cpN(d){var w=0,v=A.j(x.T),u,t,s
var $async$cpN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cpP(s),$async$cpN)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cK.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpN,v)},
a9U(d){var w=0,v=A.j(x.H),u,t
var $async$a9U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hIL(d)
if(t==null){w=1
break}$.cpM.W(0,t)
w=3
return A.b(C.bGS(t),$async$a9U)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9U,v)},
bGT(d,e){return C.itJ(d,e)},
itJ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQg
w=7
return A.b(n==null?$.aQg=A.hgX():n,$async$bGT)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mh(r,"thumbs","readwrite")
B.iE.mj(J.mg(p,"thumbs"),q,l)
w=8
return A.b(J.oz(p),$async$bGT)
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
return A.i($async$bGT,v)},
bGS(d){return C.itH(d)},
itH(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGS=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQg
w=7
return A.b(o==null?$.aQg=A.hgX():o,$async$bGS)
case 7:r=f
q=J.mh(r,"thumbs","readwrite")
B.iE.Gv(J.mg(q,"thumbs"),m)
w=8
return A.b(J.oz(q),$async$bGS)
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
return A.i($async$bGS,v)}},D,R,A3,A4,A5,I,S,A6,T,U,V,A7,W,A8,F
J=c[1]
A=c[0]
B=c[2]
X=c[78]
Y=c[72]
Q=c[123]
Z=c[28]
M=c[71]
K=c[111]
A_=c[118]
A0=c[74]
N=c[139]
A1=c[88]
O=c[130]
L=c[31]
E=c[57]
A2=c[27]
G=c[64]
H=c[82]
P=c[44]
C=a.updateHolder(c[5],C)
D=c[134]
R=c[114]
A3=c[135]
A4=c[109]
A5=c[117]
I=c[54]
S=c[51]
A6=c[97]
T=c[77]
U=c[98]
V=c[113]
A7=c[136]
W=c[138]
A8=c[45]
F=c[137]
C.aqa.prototype={}
C.b0z.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bkm(),f=h.x!=null&&h.zR(i).length===0
if(h.x!=null)w=f?B.b2:B.bD
else w=h.gUV()?B.bD:B.e3
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.bri,B.r,1)
s=x.p
r=A.o(i,A.x(A.a([A.o(i,D.fjd,B.f,i,i,new A.n(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hm,i,i,i),B.T,D.fPm,B.ax,A.d(C.xm(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fKY,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b8Z,i,i,i,i,B.OK,i,i,i)
q=A.l(16)
p=A.K(B.bm,B.r,1)
o=A.K(B.b2.j(0.28),B.r,1)
n=A.hje(h.d)
o=A.o(B.z,C.b0y(A.fPG(h.e,n),30),B.f,i,i,new A.n(B.mb,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fFU,B.K,i,i)
m=A.l(14)
l=A.K(B.bm,B.r,1)
q=A.o(i,A.x(A.a([o,B.P,n,B.bF,D.fPF,B.af,A.o(i,A.x(A.a([D.h4U,B.bF,A.d(A.Bl(h.c),i,i,i,i,i,i,D.fAv,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fi,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.aS,i,p,q,i,i,B.n),i,i,i,i,K.ana,i,i,i)
p=A.l(16)
m=A.K(B.bm,B.r,1)
l=j.aTO("Original due",C.xm(h.r,!1))
n=j.aTO("Current due",C.xm(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.T,A.o(i,A.x(A.a([l,B.P,n,B.T,A.o(i,A.d(h.gaNN(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.n(o,i,i,k,i,i,B.n),i,i,i,i,B.CB,i,i,1/0),B.T,j.clG(),B.P,j.c8e(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bm,B.r,1)
B.d.u(p,A.a([B.T,A.o(i,A.x(A.a([D.fQD,B.ax,A.d(q,i,i,i,i,i,i,D.fF6,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIm()){q=A.l(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.T,A.o(i,A.x(A.a([D.h6c,B.P,A.bv(A.l(12),A.eb(new A.a5(1/0,88,A.b5(i,i,i,new A.Xq(h.ax,B.a_,D.fo_,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CD,i,i,i)],s))}p.push(B.aB)
p.push(D.fZ1)
return A.o(i,A.x(A.a([r,new A.D(B.a1h,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.n(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTO(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.acB,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fBy,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
clG(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaS(B.e3,u,"Not paid yet")
w=t.zR(null).length
v=w===0?B.b2:B.bD
return this.aaS(v,u,C.xm(t.x,!0))},
c8e(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaS(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaS(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.acB,u,u,u)
v=A.U(d).k("N<1,h8>")
v=A.C(new A.N(d,new C.c96(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaS(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.acB,w,w,w),1),new A.df(1,B.cl,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e2,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bdL.prototype={
a4(d,e){new A.Xq(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.aqn.prototype={
S(){return new C.aFe(A.a([],x.bp))},
ge3(){return this.c}}
C.aFe.prototype={
Z(){this.a3()
this.Jv()},
Jv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3u(t.a.c),$async$Jv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dRV(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jv,v)},
aVM(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bj).j(0.22)
w=A.l(10)
return A.bA(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bu:B.bj).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b6C),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVL(d){return this.aVM(d,null)},
Qo(d){return this.cpm(d)},
cpm(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Ip:B.eR
w=7
return A.b(new A.i5().CX(72,900,900,n),$async$Qo)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Qo)
case 8:p=f
n=B.cK.gco().aK(p)
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
if(n!=null)n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qo,v)},
b40(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bj).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bu:B.bj
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bu:B.bj
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ch)
q=A.a([q,B.ae,u,A.bP(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cB,s.a.d.a?B.bu:B.bj,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ch))
return A.o(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.n(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bEu,r,r,r)},
DP(d){return this.bEy(d)},
bEx(){return this.DP(null)},
bEy(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DP=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.at(new A.bb(a4,B.b7,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.fK(a4)
p=a5.c
a4=a4===q?B.o.v(B.h.M(p)):B.h.ad(p,2)}o=new A.at(new A.bb(a4,B.b7,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.at(new A.bb(a4,B.b7,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c1(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.br(a4,!0,x.cT)
i=a3?null:A.hje(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xm?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",a4,new C.dRE(),new C.dRF(a2,t,a5,r,new C.dRG(a2,t),o,n,j),B.eH,!0,x.y),$async$DP)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cW(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.R$=0
o.V$=s
o.R$=0
n.V$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.T(D.fuC)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.T(D.ftg)
w=1
break}a1=A.fPG(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xm?"male":"female"
w=7
return A.b(A.ajg(a3,A.hrO(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DP)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xm?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c1(a3.gcl(),a3.gci(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)))a5.cTl(a2.a)
w=8
return A.b(A.ajg(t.a.c,a5),$async$DP)
case 8:case 5:w=9
return A.b(t.Jv(),$async$DP)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
aWr(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bu:B.bj).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0y(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aS:B.av
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.o(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.i,0,p,p),B.f,p,p,new A.n(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tb(d){return this.cHj(d)},
cHj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",s,new C.dRY(),new C.dRZ(t,d),B.hb,!0,x.y),$async$Tb)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajg(t.a.c,d),$async$Tb)
case 7:w=8
return A.b(t.Jv(),$async$Tb)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tb,v)},
Qn(d,e){return this.bPu(0,e)},
bPu(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ln(s,"Cancel","Delete",e.b+" \xb7 "+A.Bl(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qn)
case 3:if(!g){w=1
break}w=4
return A.b(C.fJ4(t.a.c,e.a),$async$Qn)
case 4:w=5
return A.b(t.Jv(),$async$Qn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qn,v)},
agK(d){return this.cj6(d)},
cj6(d){var w=0,v=A.j(x.H),u=this,t
var $async$agK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dRS(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agK)
case 2:return A.h(null,v)}})
return A.i($async$agK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ezq
w=J.dH(m.d,new C.dS_())
v=A.C(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dS0())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cB(v,0,new C.dS1())
w=A.l(18)
s=m.a.d.a
r=s?D.cEV:D.aEa
q=A.K(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.o(l,D.c5u,B.f,l,l,new A.n(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.eyM,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dS2(m),l,l,l,l,l,l,l),B.f,B.cW,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cDl("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bl(t)
r=A.a([A.o(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.bac(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.n(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.an7,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bj).j(0.12),B.r,1)
n=A.o(l,D.c04,B.f,l,l,new A.n(B.cW.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.o(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.n(s,l,o,q,l,l,B.n),l,l,l,l,D.bHb,l,l,1/0))}else{w=m.gcoC()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bIS,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
bac(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bj).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bj,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aS:B.av
return A.o(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.n(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cDl(d,e){return this.bac(!1,d,e)},
coD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zR(j).length,h=d.bjC()
if(d.x!=null){w=d.zR(j).length
v=w===0?B.cW:B.bD}else if(d.gUV())v=B.bD
else{if(h)w=B.cW
else w=k.a.d.a?B.bu:B.bj
v=w}if(d.x!=null){w=d.zR(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xm(u,!1)}else{u.toString
t="Paid "+C.xm(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xm(w,!1)+" \xb7 "+i+" missed":"Due "+C.xm(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUV()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bj).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.mb
o=A.K(d.gUV()&&d.x==null?B.bD.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hje(d.d)
o=A.o(B.z,A.d1(C.b0y(A.fPG(d.e,m),24),n),B.f,j,j,new A.n(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.df(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIm())B.d.u(n,A.a([B.e7,A.X(B.PC,B.cW.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bl(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.o(j,A.aF(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(A3.amW,A.A(A.a([o,B.bc,p,B.ae,A.x(A.a([n,B.bF,A.X(B.eI,(k.a.d.a?B.bu:B.bj).j(0.5),j,j,j,18)],m),B.dO,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dRU(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.n(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uS.prototype={}
C.amn.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b6
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.ay(a0,A.o(a0,A.X(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.n(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iS,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAj,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Hr,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dv(B.dJ,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bDG,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cL:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.foP)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wD,A.o(a0,a0,B.f,a0,a0,new A.n(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lR,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hA,a0,a0,a0,a0)}return A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bF_,a0,a0,a0,a0)}}
C.aXh.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.o(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b6?B.b6:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cL,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.uK,n,q))
return new A.D(B.da,A.x(o,B.l,q,B.e,B.N,0,B.p),q)}}
C.Ue.prototype={
S(){return new C.bhn()}}
C.bhn.prototype={
gc3_(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.ezl,D.ezr],l)
for(w=0;w<8;++w){v=D.a5H[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Id:B.zH
q=t===s
r=A.X(r,q?B.ey:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bd,A.d(v.c,n,1,B.a2,n,n,n,B.B5,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.ey,2,B.r,-1)
s=new A.n(n,n,new A.bH(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.ay(n,new A.D(B.eQ,A.x(A.a([new A.D(B.n2,new A.c8(B.aM,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.o(n,new A.ds(!0,new C.amn(v,q.d,q.e,new C.dhB(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhC(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bFm,A.bJ(D.hbK,n,new C.dhD(o,d),A.bp(B.b8,n,n,n,n,B.p3,n,n,new A.ba(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cv(k,n,n,D.bJL,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nt.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bge(d,e,f){return new C.nt(this.a,e,d,f)}}
C.Iv.prototype={
x6(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iv(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGu(d){var w=null
return this.x6(w,w,w,w,w,d,w,w,w,w,w,w)},
cOX(d){var w=null
return this.x6(w,w,w,w,d,w,w,w,w,w,w,w)},
bgc(d,e,f){var w=null
return this.x6(d,w,w,w,w,w,w,w,e,w,f,w)},
cPB(d){var w=null
return this.x6(w,w,w,w,w,w,d,w,w,w,w,w)},
cPK(d){var w=null
return this.x6(w,w,w,w,w,w,w,w,w,d,w,w)},
cOV(d){var w=null
return this.x6(w,w,w,d,w,w,w,w,w,w,w,w)},
cPM(d){var w=null
return this.x6(w,w,w,w,w,w,w,w,w,w,w,d)},
cOS(d){var w=null
return this.x6(w,w,d,w,w,w,w,w,w,w,w,w)},
cON(d){var w=null
return this.x6(w,d,w,w,w,w,w,w,w,w,w,w)},
Gn(d){var w=null
return this.x6(w,w,w,w,w,w,w,d,w,w,w,w)},
cPU(d,e,f,g,h,i,j,k,l,m,n){return this.x6(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cMr(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bSr(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.h.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ef.gew(D.Ef))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a7q)
q=l.$2("frame",D.a6K)
l=l.$2("texture",D.a6G)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cPU(p,u,t,q,r,A.rh(d.h(0,"ribbon"))?A.GZ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_R.prototype={
S(){return new C.aCc(A.a([],x.I),D.Pa)},
ge3(){return this.c}}
C.aCc.prototype={
Z(){var w,v=this
v.a3()
v.f=A.Ae(0,1)
w=$.aw()
v.z=new A.at(B.aw,w)
v.Q=new A.at(B.aw,w)
v.lj()
w=v.a
C.bFa(w.c,w.d).bG(new C.dih(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.aw()
u.V$=w
u.R$=0
u=v.Q
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LQ(s.c,s.d),$async$lj)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.di5(t,r))
t.aya()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
gauJ(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
aya(){var w,v,u=this.gauJ(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb4(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb4(0,w==null?"":w)},
chv(d){this.m(new C.di2(this,d))
this.aya()},
Oe(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nt(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTo(r.c,r.d,s),$async$Oe)
case 3:w=4
return A.b(t.lj(),$async$Oe)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oA(t.d,new C.dhE(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dhF(t,p))
t.aya()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BV(p+1,B.ck,B.kV),$async$Oe)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oe,v)},
Bz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauJ()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTo(o.c,o.d,new C.nt(s,r,q,new A.V(p,0,!1))),$async$Bz)
case 3:w=4
return A.b(t.lj(),$async$Bz)
case 4:if(t.c==null){w=1
break}t.m(new C.di6(t))
case 1:return A.h(u,v)}})
return A.i($async$Bz,v)},
OW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauJ()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhN(r),s,null,!0,!0,x.y),$async$OW)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEX(s.c,s.d,r.a),$async$OW)
case 4:t.m(new C.dhO(t))
w=5
return A.b(t.lj(),$async$OW)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UY(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OW,v)},
zd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bz(),$async$zd)
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
return A.b(C.Se(s,r.r,o,p,q),$async$zd)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hJy(s,r.x,r.r),$async$zd)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LQ(s.c,s.d),$async$zd)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nt(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bu(r.c,r.d,l),$async$zd)
case 11:w=12
return A.b(t.lj(),$async$zd)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zd,v)},
a1W(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bz(),$async$a1W)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzb(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.A6,new C.di3(t),new C.di4())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new A.o2("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new A.o2(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(A.hl1(o,new A.tP(s,r,"",p,new A.v7(q.d,null,null,null,null,"","","")),null),$async$a1W)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1W,v)},
OE(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bz(),$async$OE)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ahS,null,new C.dhJ(t),s,!0,!0,!0,G.aaL,!1,!1,x.N),$async$OE)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cOX(r)
t.m(new C.dhK(t,q))
s=t.a
w=7
return A.b(C.SR(s.c,s.d,q),$async$OE)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
Ye(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ye=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ahS,null,new C.dhP(t),r,!0,!0,!0,G.aaL,!1,!1,x.e),$async$Ye)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dhQ(t,s))
r=t.a
w=4
return A.b(C.SR(r.c,r.d,s),$async$Ye)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BV(0,B.e6,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$Ye,v)},
bVa(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gci()),2,"0"),u=B.a.b1(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gzb(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c2d()
if(r.e)w=D.agw
else if(J.ct(r.d)){w=r.y
v=r.gzb(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fzR,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(O.aoe,new C.a_7(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.ay(q,A.o(q,D.fj_,B.f,q,q,new A.n(q,q,q,A.l(18),A.a([new A.ac(0,B.G,B.dN.j(0.45),B.J,18)],x.V),B.xd,B.n),q,q,q,q,B.OO,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcLs(),q,q,q,q,q,q,!1,B.a4))
w.push(B.T)
w.push(A.ht(D.bX8,D.hbc,r.gaPt(),q))
B.d.u(u,w)}w=A.as(A.ca(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e0:B.BH
u=A.x(A.a([new A.D(D.bGr,w,q),A.E(A.JU(v,new C.dif(r),J.ad(r.d)+1,q,r.gchu(),u,B.aM),1),r.bHs()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c5(q,D.a__,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRK,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c2d(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KT(B.e9,"AI",h.gbFk(),!0))
if(h.a.f)f.push(new C.KT(B.lT,"Cover",h.gbQ3(),!1))
if(h.a.f)f.push(new C.KT(B.x5,"Header",h.gbL0(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KT(B.va,"Print",h.gcqG(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hd:B.jb
t=v?"Save":"Edit"
f.push(new C.KT(u,t,v?h.gcx0():new C.di_(h),!1))}if(h.a.f)f.push(new C.KT(B.i_,"Add page",h.gaPt(),!1))
v=C.hF1(h.y.Q)
u=h.gzb(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dNC
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(B.kw.j(0.5),1,B.r,-1)
j=A.o(g,A.X(l.a,D.kQ,g,g,g,17),B.f,g,g,new A.n(g,g,new A.bH(i,i,i,i),new A.be(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kQ.j(0.85)
p.push(new A.bz(1,B.bd,A.ay(B.c_,A.x(A.a([k,B.bF,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amn(v,u,t+" \xb7 "+s+" "+r,new C.di0(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Aw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Aw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bz(),$async$Aw)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=A.a3K(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dhG(t,p),s,null,!0,!0,x.N),$async$Aw)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zd(),$async$Aw)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eo(),$async$Aw)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G0("Swahili (Kiswahili)",!0),$async$Aw)
case 18:w=16
break
case 17:w=19
return A.b(t.cHW(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Aw)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Aw,v)},
a_d(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(B.kw.j(0.3),B.r,1),r=x.p
return new A.D(B.cw,A.aM(!1,v,!0,A.o(w,A.A(A.a([A.o(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.n(w,w,w,w,w,B.xd,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,S.La,w,w,w),A.d(g,w,w,w,w,w,w,B.Fa,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.n(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.di1(d,h),w,w,w,w,w,w,w),w)},
Eo(){return this.bUE()},
bUE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eo=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhT(r),a7,null,!0,!0,x.ei),$async$Eo)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eF("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dhU(o),a7,null,!0,!0,x.H).fv(new C.dhV(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c4(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.A6[a1]
J.c4(j,i.a)}w=8
return A.b(C.aio(a0,a7,new C.dhW(o),d,l,e,j),$async$Eo)
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
if(l!=null&&a6.a)A.a6(l,!0).eb()
l=o
l.sii($.aw())
J.aTR(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bge(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bu(j.c,j.d,l),$async$Eo)
case 11:w=12
return A.b(r.lj(),$async$Eo)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A6[a1].a)
a5=l.cMr(j,12,a7)
l=r.a
w=15
return A.b(C.SR(l.c,l.d,a5),$async$Eo)
case 15:if(r.c!=null)r.m(new C.dhX(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BV(0,B.e6,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cBm("Undo",new C.dhY(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eo,v)},
G0(d,e){return this.cHX(d,e)},
cHW(d){return this.G0(d,!1)},
cHX(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G0=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eF("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.di8(a0),k,null,!0,!0,x.H).fv(new C.di9(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c4(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(A.a3Z(m,new C.dia(a0)),$async$G0)
case 10:w=8
break
case 9:w=11
return A.b(C.bGI(new C.dib(a0),m,a2),$async$G0)
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
if(o!=null&&f.a)A.a6(o,!0).eb()
o=a0
o.sii($.aw())
J.aTR(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bge(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bu(k.c,k.d,o),$async$G0)
case 12:w=13
return A.b(r.lj(),$async$G0)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cBm("Undo",new C.dic(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G0,v)},
bHs(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dhH(v):u
r=A.aH(u,u,u,u,A.X(D.bSM,s?D.kQ:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ht(A.X(B.wS,B.GR,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GR,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPE(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dhI(v):u
return A.bm(!0,new A.D(D.bGg,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kQ:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_V.prototype={
S(){return new C.bhM(new A.at(B.aw,$.aw()))}}
C.bhM.prototype={
ga32(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.a2()},
gbTf(){switch(this.ga32()){case"cover":var w=D.dc3
break
case"book":w=D.d7c
break
default:w=D.dE7
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=B.kw.j(0.5),m=x.p,l=A.A(A.a([D.dND,B.as,D.bM_,A.aH(p,p,p,p,B.lt,p,p,p,new C.dk3(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jw(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dk4(q),q.ga32()==="page",p,p,p,p))
if(q.a.d)k.push(A.jw(p,p,p,D.h5K,p,new C.dk5(q),q.ga32()==="book",p,p,p,p))
k.push(A.jw(p,p,p,D.fTo,p,new C.dk6(q),q.ga32()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kq,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbTf(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.L7,p,p,p)
w.push(A.mZ(p,B.c.j(0.08),r,B.ht,new C.dk7(q,s),p,p,p,p))}return A.eI(p,B.Cf,A.ca(A.x(A.a([l,B.T,D.h93,B.am,k,B.af,j,B.P,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.de(D.bX5,p,D.h9Q,new C.dk8(q,d),A.bp(B.b8,p,p,p,p,B.p3,p,p,new A.ba(A.l(16),B.a1),p,p,p)),B.ax,D.h3W],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,p,B.fu,p,p,B.ah),p,p,p,B.OL,p,B.d7,p,new A.ba(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a_T.prototype={
S(){return new C.aCf(A.a([],x.gA))},
ge3(){return this.c}}
C.ag9.prototype={}
C.aCf.prototype={
Z(){this.a3()
this.lj()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sj(p.c,p.d),$async$lj)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bFa(r.c,q),$async$lj)
case 6:j=e
i=J
w=7
return A.b(C.LQ(t.a.c,q),$async$lj)
case 7:m.push(new l.ag9(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.diw(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
bbt(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rb(d,e){return this.cj3(0,e)},
cj3(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ee(new C.div(u,e),!0,null,x.y)),$async$Rb)
case 2:t=g
w=3
return A.b(u.lj(),$async$Rb)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.T(D.aVG)
return A.h(null,v)}})
return A.i($async$Rb,v)},
G2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$G2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.T(D.aVB)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahI(s.c,s.d),$async$G2)
case 5:q=e
w=6
return A.b(t.lj(),$async$G2)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rb(0,B.d.fb(t.d,new C.diA(q))),$async$G2)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Se(p,s.f,r,n,o),$async$G2)
case 10:m=e
w=11
return A.b(t.lj(),$async$G2)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.T(D.aVG)
case 1:return A.h(u,v)}})
return A.i($async$G2,v)},
QC(d,e){return this.cuI(0,e)},
cuI(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.diz(t,e),s,null,!0,!0,x.y),$async$QC)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4a(s.c,s.d,e.a),$async$QC)
case 4:w=5
return A.b(t.lj(),$async$QC)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QC,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHv(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(B.kw.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.ay(n,new A.fG(0.7142857142857143,A.o(n,A.x(A.a([D.dNE,B.af,D.eyn,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kQ.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.i,0,B.p),B.f,n,n,new A.n(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcLo(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(B.kw.j(0.85),B.r,1.6)
s=A.ay(n,A.o(n,D.c4d,B.f,n,n,new A.n(B.w.j(0.3),n,A.K(B.kw.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.diB(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(B.kw.j(0.5),B.r,1)
w=A.o(n,A.A(A.a([s,B.bc,D.bMo,A.o(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fyR,n,n,n),B.f,n,n,new A.n(q,n,p,r,n,n,B.n),n,n,n,n,B.hm,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.n(n,n,v,w,n,D.caf,B.n),n,n,n,B.Ox,D.bE9,n,n,n)
if(o.e)k=D.agw
else k=k.length===0?D.bel:A.ck(new C.diC(k))
return A.c5(n,D.a__,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRK,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHv(d){var w,v,u=this,t=null,s=u.bbt(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dv(B.dC,B.z,B.f,new A.a5(300,420,new C.a_7(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.ay(t,A.o(t,D.c3v,B.f,t,t,new A.n(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dit(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fyu,t,t,t)
v=r===1?"page":"pages"
return A.ay(t,A.x(A.a([new A.fG(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kQ.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.diu(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KT.prototype={}
C.a_7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.A6,new C.cQD(m),new C.cQE()),j=m.c,i=D.Ef.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mu:B.b9
v=new C.cQF(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.ev4,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b5(l,l,l,new C.beY(j.x,h,l),B.az),0,0,0),A.ao(0,A.o(l,l,B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.o(l,l,B.f,l,l,new A.n(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aof,8,0.85,2.2),v.$4(D.bJa,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aof,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bJ6,A.b5(l,l,l,new C.beP(h,l),B.az),l),0,0,0))
r=A.X(D.aD7[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAj,l,l),B.K,l,l)
p=A.o(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bJC,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b5(l,l,l,new C.aJk(l),D.fnT),l,l,l,46,0,l))
return A.o(l,A.bv(D.af7,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.n(l,l,l,D.af7,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.beY.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e_()
g.cU(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.S()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
l=A.a([],n)
j=new A.aG(m.r,B.aj,null,null,l)
l.push(new A.aZ(v,q))
j.ab()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ak(i)
j.ab()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ak(i)
j.ab()
m=new A.bx()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.beP.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.faS,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.aj,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ab()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.ak(l)
n.ab()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.ak(s)
n.ab()
d.af(n,j)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uT.prototype={}
C.a_r.prototype={
S(){return new C.beW()}}
C.beW.prototype={
goy(){var w=this.d
return w===$?this.d=this.a.c:w},
gzb(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.bb(w.b,B.b7,B.aP),$.aw())}return v},
gaDF(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.bb(w.c,B.b7,B.aP),$.aw())}return v},
gatg(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.bb(w.y,B.b7,B.aP),$.aw())}return v},
t(){var w=this,v=w.gzb(0),u=v.V$=$.aw()
v.R$=0
v=w.gaDF()
v.V$=u
v.R$=0
v=w.gatg()
v.V$=u
v.R$=0
w.a2()},
atU(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jw(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d9o(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
azF(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goy(),a0=f.gzb(0),a1=a0.a.a,a2=f.gaDF(),a3=a2.a.a,a4=f.gatg(),a5=d.bgc(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dv(B.dC,B.z,B.f,new A.a5(270,370,new C.a_7(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azF("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9N(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azF("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9O(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.A6[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.o(e,e,B.f,e,e,new A.n(e,e,new A.bH(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.ay(e,A.x(A.a([p,B.cS,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9P(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.ay(e,A.o(e,A.X(D.aD7[n],B.c,e,e,e,24),B.f,e,e,new A.n(p,e,new A.bH(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9Q(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azF("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9R(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,I.vU,e,e,e)
m=A.a([],w)
for(l=D.Ef.gdQ(D.Ef),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.o(e,e,B.f,e,e,new A.n(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.ay(e,A.x(A.a([j,B.bF,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9S(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,I.vU,e,e,e)
k=f.goy()
return new A.D(new A.P(0,0,0,a3.f.d),A.bm(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cv(A.a([D.h3m,B.af,d,B.aO,a0,B.T,a2,B.aB,D.h9B,B.P,v,B.aB,D.h3v,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l0(e,9,""+B.h.U(f.goy().f),36,18,new C.d9T(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,I.vU,e,e,e),B.am,f.atU(D.a7q,f.goy().r,new C.d9U(f),D.dHn),B.af,A.d("BORDER",e,e,e,e,e,e,I.vU,e,e,e),B.am,f.atU(D.a6K,f.goy().w,new C.d9V(f),D.dHt),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,I.vU,e,e,e),B.am,f.atU(D.a6G,f.goy().x,new C.d9X(f),D.dJ8),B.am,A.iV(e,B.b8,e,B.ag,e,new C.d9Y(f),e,e,e,D.fYx,f.goy().z),B.bx,A.bJ(D.h23,e,new C.d9Z(f,a6),A.bp(B.b8,e,e,e,e,B.p3,e,e,new A.ba(A.l(16),B.a1),e,e,e))],w),e,e,B.anK,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJk.prototype={
a4(d,e){var w,v,u,t=new A.aG($.S().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bx())
u=A.L()
u.san(D.caX.aD(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bkj.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.san(D.c9X.aD(0,new A.a4(0,0,a2,a3)))
a4.aF(new A.a4(0,0,a2,a3),w)
v=B.h.cC(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dc2[u.aw(9)]
j=u.aw(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.by(i,B.hG)
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.w,0.45)
e.toString
g.san(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).aD(0,i))
a4.ar(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=B.kw.j(0.55).gp(0)
a4.aF(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=B.kw.j(0.4).gp(0)
a4.aF(new A.a4(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.san(D.c9f.aD(0,new A.a4(0,r,a2,q)))
a4.aF(new A.a4(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.w.j(0.5).gp(0)
p.y=B.kY
a4.aF(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bib.j(0.72).gp(0)
a4.aF(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.bqJ.j(0.22),B.L],w),d,d).aD(0,A.bW(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aE(d){return!1}}
C.bd7.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.n(A.ap(D.kQ,D.bw4,w/4),o,new A.bH(B.a1,new A.ax(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.Mm,o,o,B.n),B.bk,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aNl,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.o(o,o,B.f,o,o,new A.n(B.kw.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.o(o,A.x(t,B.l,o,B.r0,B.i,0,B.p),B.f,o,o,new A.n(o,o,o,D.b6j,u,D.caV,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b5(o,o,o,new C.aJk(o),D.fnO),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXh(p.y,r,B.j6,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,B.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fNp,!0,B.a7,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,B.j6.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,B.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fDQ,!0,B.a7,B.B0,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fNh,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,B.j6.j(0.5),o,o,o,o,o,o,o,o,11,B.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.o(o,o,B.f,D.GA.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.GA.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.o(o,o,B.f,D.GA.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,B.j6.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zm(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fH4,B.a.aA(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b_(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,B.j6.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ca(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.ig,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,B.j6.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.o(o,A.bv(B.Mm,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bID,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bN(new A.n(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bk,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.n(o,o,o,B.Mm,v,D.cbs,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amo.prototype={
S(){return new C.amp(new A.eF(0,$.aw()),new C.bUf(),new C.amH(),D.hMu,null,null)},
gd1(){return this.d}}
C.a26.prototype={
a7(){return"_Step."+this.b}}
C.amp.prototype={
gCI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF6(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nb(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gUe(){var w=this.ghd(0)
return w.gzv()==null?"Babu":B.a.i(w.gzv().b)},
Z(){var w,v=this
v.a3()
w=v.ghd(0).gzv()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.q7(new C.bSB(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a3_("Come closer, my children. I am "+v.gUe()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.aw()
v.R$=0
w.bwS()},
a3_(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(B.a0K,new C.bSv(w))},
bte(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bSE(v))},
aej(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bt6(){return this.bb0()},
bb0(){var w=this,v=w.gCI()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bSw(w))
w.a3_(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.mf,new C.bSx(w))},
cMy(){var w=this
w.m(new C.bSA(w))
w.a3_(w.gCI()[w.as].a)},
Lj(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aed)return
w=p.gCI()
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
t.r=s.a+1.5}q=new A.e_()
q.cU(v*7+d)
p.m(new C.bSz(p,d,u,q))
p.a3_(u?D.ds8[q.aw(4)]+" "+w[p.as].d:D.doE[q.aw(3)]+" "+w[p.as].d)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCI()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHn(t.at,t.ay,p)
t.m(new C.bSC(t,s))
t.a3_(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BR(t.a.d,s),$async$kO)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BS(r.d,r.c.a,"fire",t.at*10),$async$kO)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bSD())
w=1
break
case 4:++t.as
t.bb0()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.YY,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e6(A.b5(v,v,v,new C.aXm(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cd4(0),B.b4,w.bSp()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cd4(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.Qx,s,s,s,new C.bSy(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCI().length;++w){v=t.as
if(w<v||t.Q===D.b2C)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bDU,s,s,s,22))}p=A.E(A.x(A.a([D.fVg,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.l(14)
u=A.K(B.fL,B.r,1)
return new A.D(D.bJP,A.A(A.a([r,p,A.o(s,A.d("\ud83d\udd25 "+B.h.U(t.cy*100)+"%",s,s,s,s,s,s,B.iH,s,s,s),B.f,s,s,new A.n(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hm,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bSp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghd(0).gzv()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qq.j(0.96)
s=A.l(22)
r=A.K(B.cV,B.r,3)
q=A.b5(i,i,i,new C.bpV(w,i),B.az)
p=A.d(j.Q===D.aed?j.gUe()+" asks":"Elder "+j.gUe(),i,i,i,i,i,i,D.aWV,i,i,i)
o=j.db
o=B.a.aA(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.ay(B.c_,A.A(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aX8,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbtd(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aaq("Sit down by the fire",j.gbt5()),i,i,i)
break
case 1:v=A.as(j.aaq("Ask me, Elder",j.gcMx()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCI()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lG,2.5,B.r,-1)
v.push(A.ay(i,A.o(i,A.d(u[m],i,i,i,i,i,i,D.aX4,B.K,i,i),B.f,i,D.afK,new A.n(D.alh,i,new A.bH(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,M.wF,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bSs(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kc:A7.are
u=A.X(u,v?B.ep:D.lG,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.ep:D.lG,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCI().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aaq(v,j.gqs(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCI().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aXm,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRA(u)
q=C.aRA(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.acE,i,i,i))}v.push(B.P)
v.push(j.aaq("Back to the games",new C.bSt(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.o(i,A.x(A.a([o,B.T,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.n(t,i,r,s,D.aEG,i,B.n),i,i,i,B.yW,B.bl,i,i,i)},
aaq(d,e){var w=null,v=A.l(16),u=A.K(B.cV,B.r,2)
return A.ay(w,A.o(w,A.d(d,w,w,w,w,w,w,S.La,w,w,w),B.f,w,w,new A.n(D.lG,w,u,v,w,w,B.n),w,w,w,w,D.bHw,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpV.prototype={
a4(d,e){L.hkM(d,e.ek(B.J),e.gdk()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aCd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bUf.prototype={}
C.td.prototype={}
C.bpW.prototype={}
C.amH.prototype={
MM(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.igU(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXm.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.GC(l.d.MM(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cBZ(d,j)
l.bQY(d,j)
l.cKj(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.oq(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.san(A.wd(B.J,r,A.a([D.buN.j(0.55*s),E.NO.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bU7(l,d,j,i)),new A.y(540,new C.bU8(l,d,j,i)),new A.y(546,new C.bU9(l,d,j,i)),new A.y(574,new C.bUa(l,d,j,i)),new A.y(612,new C.bUb(l,d,j,i)),new A.y(650,new C.bUc(l,d,j,i)),new A.y(656,new C.bUd(l,d,j,i))],x.E)
B.d.b0(n,new C.bUe())
for(m=0;m<7;++m)n[m].b.$0()
l.bHO(d,j,i)
l.bUC(d,j)
t.restore()
$.S()
t=A.L()
t.san(A.wd(new A.r(w/2,v*0.6),e.gaoF()*0.75,A.a([B.L,D.bi4],p),A.a([0.55,1],o),B.x,k,k,0))
d.aF(new A.a4(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cBZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.euC),C.iF(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aG(l.r,B.aj,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.ce(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.ce(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.b=B.aa
s.c=1.6
s.r=D.bkQ.gp(0)
s.d=B.bG
s.e=B.dQ
d.af(l,s)}},
bQY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBC[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bX(new A.r(p,m),n*0.74,q*0.5)
k=B.yH.j(v)
$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=k.gp(0)
d.c0(l,j)
q=A.bX(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.wj.j(u).gp(0)
d.c0(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.h.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=D.aiE.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cKj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bEv(d,D.euy,0.9,e,D.hI8,!1,!1,D.b2z,1,!1)
w=$.S().r
v=x.v
u=new A.aG(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bx())
t=A.L()
t.r=D.akB.gp(0)
d.af(u,t)
C.bEv(d,D.euA,0.95,e,D.hI3,!1,!1,D.b2A,1,!0)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ce(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ce(431,553,421,548))
t.E(new A.bx())
u=A.L()
u.r=E.Gh.gp(0)
d.af(t,u)
u=A.bX(D.euz,8,28)
t=A.L()
t.r=D.bxa.gp(0)
d.c0(u,t)
C.bEv(d,new A.r(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hI9,!0,!1,D.XK,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c0(A.bX(new A.r(s+q*16,r-6),16,11),C.iF(D.aks,1.8))
u=q<0
C.bEv(d,new A.r(s-q*6,r),0.62,e,D.hIb,!1,u,D.XK,2.2,!1)
C.bEv(d,new A.r(s-q*32,r+4),0.58,e+1,D.hI7,!1,u,D.XK,2.2,!1)
this.bXl(d,D.eud,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bX(new A.r(o,n),8,11)
k=p===1
j=k?D.ako:D.al_
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=j.gp(0)
d.c0(l,i)
l=k?D.ako:D.al_
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bX(D.a9E,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aj3.gp(0)
d.c0(u,t)
u=A.bX(D.a9E.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bn1.gp(0)
d.c0(u,t)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bx())
u=A.L()
u.r=D.bnd.gp(0)
d.af(t,u)
u=D.a9E.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ic.gp(0)
d.O(u,1.1,t)
v=new A.aG(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ce(180,588+w*(h?6:0),178,595))
d.af(v,C.iF(D.aj3,3.5))},
bXl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.b=B.aa
m.c=2
m.r=D.Zb.gp(0)
m.d=B.bG
m.e=B.dQ
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bX(k,17,32)
v=$.S()
r=A.L()
r.r=D.Gf.gp(0)
d.c0(w,r)
r=A.bX(k.a5(0,D.etF),7,26)
w=A.ap(D.Gf,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c0(r,q)
v=new A.aG(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bx())
s=A.L()
s.r=D.Gf.gp(0)
d.af(v,s)
s=A.bX(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.Gf.gp(0)
d.c0(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iF(D.Zb,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iF(D.Zb,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iF(D.bq_,1.4))
d.ah(k.a5(0,D.ewC),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iF(D.Gf,2.4))},
bUA(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bX(new A.r(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bvO.gp(0)
a6.c0(u,t)}}u=A.bX(D.a9G.a5(0,B.cz),17,52)
$.S()
t=A.L()
t.r=D.bhD.gp(0)
a6.c0(u,t)
t=A.bX(D.a9G.a5(0,B.cz),12,44)
u=D.blf.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c0(t,s)
for(r=0;r<3;++r){v=D.do5[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=7
o.r=D.Gs.gp(0)
o.d=B.bG
o.e=B.dQ
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BU.j(0.6)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dQ
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f6Y,D.f7w,D.f8C,D.f8X,D.f8A]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bt4,D.bpk,D.bve][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aG(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kp(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kp(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bx()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.h.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=F.akY.j((1-a5)*0.9)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aiE.j(0.1*(1-a5))
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bUC(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bxl.j(0.18*p)
$.S()
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=D.bqO.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c6o(d,e){switch(d){case 0:return e.b?D.hI4:D.b27
case 1:return e.b?D.hIa:D.b25
case 2:return D.b24
case 3:return D.b23
case 4:return D.b26
default:return D.b28}},
aDT(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rv(d,e,f,g){var w,v=this,u=D.a6S[e],t=v.c6o(e,g),s=new C.bpW(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6S[e],l=e===0
m=B.h.D(((l?D.aNd:D.aNj).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9L
s.as=D.EH
if(l){s.a=o?v.aDT(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.EH
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.r(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.r(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.r(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.r(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.etN
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ev8
if(e===4)s.as=new A.r(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.r(-3-m,p)
s.as=new A.r(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.exy
s.as=D.aNw}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDT(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDT(f,e*3)
s.b=0.5
s.c=0.4}}C.hDF(d,u.a,u.b*1.2,t,s,f,e,null)},
bHO(d,e,f){var w=new C.bU6(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd2(d){return this.c}}
C.agi.prototype={
a7(){return"_Stand."+this.b}}
C.aef.prototype={}
C.lt.prototype={}
C.bSR.prototype={
bCp(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Gi(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b0(r,new C.bSS())
return r},
arW(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNC(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
an2(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.I(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzv(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.b0(w,new C.bST(this))
return B.d.gH(w)}}
C.auP.prototype={}
C.zz.prototype={}
C.alf.prototype={
gCe(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bNF(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MW.prototype={
gapY(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCe(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d2P(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapY(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lt(B.a.i(s.a),p,B.d.cm(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbl.prototype={}
C.aaj.prototype={}
C.biC.prototype={}
C.agg.prototype={}
C.aky.prototype={
S(){return new C.akz(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akz.prototype={
gN2(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF6(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbbm(){var w,v=this,u=v.e
if(u===$){w=v.q7(v.gcd6())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Z(){this.a3()
this.gbbm().fX(0)},
t(){this.gbbm().t()
this.bwN()},
fX(d){this.m(new C.bLO(this))},
cd7(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fG(0,v)
if(w.c!=null)w.m(new C.bLJ())},
b9I(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gN2()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.biC(u,(u+0.5)/v,w[t.x].b[u]))},
fG(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLP())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c9e()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gN2()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.U((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.ats(v,0.8,B.cV)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.ats(m.cy,0.8,F.nq)
m.b_b("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.ats(q,0.88,D.lG)
p=m.gN2()[m.x]
n=p.c
if(u===n){m.b_b("The right gourd fell! It was "+p.b[n]+".")
return}}}},
ats(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.h.U(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agg(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_b(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QD()}},
c9e(){var w=this
if(w.x+1>=w.gN2().length){w.QD()
return}++w.x
w.b9I()},
QD(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gN2().length
r=C.bHn(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bLH())
w=2
return A.b(C.BR(u.a.d,r),$async$QD)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BS(t.d,t.c.a,"catch",u.z),$async$QD)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bLI())
return A.h(null,v)}})
return A.i($async$QD,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cd5()
else w=v.ch?v.cd8():A.as(new A.D(B.eA,A.x(A.a([D.aYk,B.P,D.fWY,B.T,D.h28,B.e4,C.uw("Play",v.geX(v),B.cV,B.he,D.fC)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tD("Calabash Catch",w,B.f7,u)},
cd8(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hE:B.HX
p.push(A.X(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b4)
v=s.x
u=s.gN2()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aWU,r,r,r))
p.push(B.bc)
v=A.l(14)
p.push(A.o(r,A.d(""+s.z,r,r,r,r,r,r,B.iH,r,r,r),B.f,r,r,new A.n(B.bw,r,r,v,r,r,B.n),r,r,r,r,B.CE,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.l(18)
t=A.K(B.cV,B.r,3)
return A.x(A.a([new A.D(D.bFh,p,r),A.o(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fGX,B.K,r,r),B.f,r,r,new A.n(D.qq,r,t,v,r,r,B.n),r,r,r,B.f3,B.bl,r,r,1/0),B.am,A.E(A.ck(new C.bLN(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cd5(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q2,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gN2().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.W6,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cv(A.a([D.bf2,u,t,B.aO,new C.Ix(s,r,w.cx,v),B.aO,A.as(C.uw("Back to the games",new C.bLG(w),B.cV,B.kb,D.fC),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdN.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.san(A.jz(B.J,new A.r(0,a0),D.d5K,F.aBT,B.x,e))
a4.aF(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=F.NS.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.aj,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ak(s)
v.ab()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.S()
w=A.L()
w.r=D.bmc.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ce(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ce(r+14,t,r+26,w))
a2.E(new A.bx())
w=A.L()
w.r=D.ahG.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cqZ[q]
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.ahG.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.agY.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bna.gp(0)
a4.aF(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.ajj.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bX(new A.r(u,s),12,54)
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lG.j(0.6).gp(0)
a4.c0(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.aio.gp(0)
a4.O(D.et1,14,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.bs6.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.et2,D.eu9,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.san(new A.am8(D.ewj,46,D.dey,B.vm,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bX(D.ewq,8,12)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c0(m,l)
k=new A.iD(new A.ev(n.c,e,e,B.cN,e,e,e,e,e,e,D.fEM),B.K,B.c1,new A.jh(1),e,e,3,e,B.c2,e,B.cx)
k.nC(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.by(A.bX(B.cM,m.gba(m)+8,l),B.fR)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.qq.gp(0)
a4.ar(j,l)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lG.gp(0)
l.b=B.aa
l.c=1.5
a4.ar(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.ikI(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dN,(w+1)/2)
h=A.bX(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.S().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ce(h.gbE().a,s+8,w+8,s))
a3.E(new A.bx())
m=A.L()
m.r=D.a_5.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.BU.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=F.nq.gp(0)
a4.aF(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bmi.gp(0)
a4.c0(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fD(e,B.cx,e,e,e,A.cS(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cV.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,G.DS,e,e),"+"+a2),B.a7,B.c1,e,B.dK,B.c2)
k.ep()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QV.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b5(v,v,v,new C.aCb(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cS,A.o(v,A.d(w.d,v,1,B.a2,v,v,v,D.fxi,v,v,v),B.f,v,v,new A.n(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n3,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
ga_(d){return this.e}}
C.aCb.prototype={
a4(d,e){var w=e.ek(B.J),v=e.gdk(),u=this.c?0.8:0
return L.hkM(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAE.prototype={}
C.avs.prototype={
S(){return new C.avt(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.avt.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJi(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaFX(){var w=this.z
return w===$?this.z=this.XI(0):w},
gj2(){var w,v=this.Q
if(v===$){w=this.gkT()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c0(w,-1,!1,x.S)}return v},
XI(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAE(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAE(v[t],u[t],-1))
v=new A.e_()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dn(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goF()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qJ()}this.bxf()},
cSE(d,e){var w,v,u,t,s,r=this
if(d>=r.gj2().length||r.gj2()[d]!==-1||B.d.q(r.gj2(),e))return
w=r.gaFX()[e]
v=r.gkT()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.crz(r,e,w,v))
A.cz(B.lM,new C.crA(r))
return}++r.r
u=A.bo(null,B.hy,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.crB(r,d,e,w,v))
u.cs(0)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkT()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cB(n,0,new C.crC())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.crD(t,r))
w=5
return A.b(C.BR(t.a.d,r),$async$kO)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BS(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.crE())
w=1
break
case 4:for(o=t.as,n=new A.dn(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goF()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qJ()}o.a8(0)
t.m(new C.crF(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q2,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.W6,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tD(q,A.cv(A.a([D.agu,w,v,B.aO,new C.Ix(u,t,r.ch,p),B.aO,A.as(C.uw("Back to the games",new C.crv(d),B.cV,B.kb,D.fC),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkT()
v=r.e
s=w[v]
return new C.tD(q,new A.D(B.t7,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,B.aWP,B.K,p,p),A.E(A.ck(new C.crw(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f7,p)}}
C.bdg.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cRH(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.JZ)
$.S()
w=A.L()
w.r=D.lH.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.esO)
u=A.L()
u.r=B.qs.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e6.az(0,B.h.D(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aG(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.ce((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),i=new A.uR(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jH(b1));--h
g=new A.BO(i,h)
f=0
for(;;){i.jP()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.jP()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.S()
a1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.aa
a1.c=3
b6.af(new A.aG(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),k=new A.uR(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jH(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a4.r=D.GG.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bG
b6.af(new A.aG(l,a2,b0,new A.b7([new A.BO(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.jP()
a5=n[a0].W8(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bX(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.be.gp(0)
b6.c0(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iD(D.fwM,B.a7,B.c1,new A.jh(1),b0,b0,b0,b0,B.c2,b0,B.cx)
a8.ep()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.azp.prototype={
S(){return new C.azq(A.aR(x.S))},
gd1(){return this.d}}
C.azq.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hKc(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Z(){this.a3()
this.b9R()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9R(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dh(B.t2,new C.cGy(this))},
bqP(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkT()[v.e]
if(w.e[d]===w.b)v.m(new C.cGG(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cGH(v,d))
A.cz(B.iR,new C.cGI(v))}},
cY7(){var w=this
if(!w.as&&w.f<w.gkT()[w.e].d.length)w.m(new C.cGJ(w))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkT()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cGK(t,s))
w=5
return A.b(C.BR(t.a.d,s),$async$kO)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BS(q.d,q.c.a,"who",t.r),$async$kO)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cGL())
w=1
break
case 4:t.m(new C.cGM(t))
t.b9R()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkT().length+" guessed",a2,a2,a2,a2,a2,a2,B.q2,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.W6,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tD(a1,A.cv(A.a([D.bfd,w,v,B.aO,new C.Ix(u,t,a0.ax,a2),B.aO,A.as(C.uw("Back to the games",new C.cGA(a3),B.cV,B.kb,D.fC),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkT()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Lg,B.K,a2,a2),B.T,A.as(A.lC(new C.cGB(a0,r),a2,B.b0,B.hy,a2,a2,new A.bt(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.cV,2,B.r,-1)
k=o+1
w.push(new A.r9(new A.bt(0,1,u),new C.cGC(),A.o(a2,new A.c8(B.aM,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qI(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o7,a2,a2,a2),D.lG,a2,12,a2),B.as,new A.bz(1,B.bd,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fJB,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.n(D.qq,a2,new A.bH(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cw,B.bl,a2,a2,a2),B.b0,B.iR,a2,new A.bl("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bP(!1,D.ha2,a2,a2,!0,a2,a2,a2,a0.gcY6(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lH.j(0.2)
q=A.l(16)
p=A.K(D.lH,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.o(a2,A.x(A.a([m,B.T,C.uw(v,a0.gqs(a0),B.cV,B.jt,D.fC)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.n(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cV.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fj:B.cV,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xC:a2
t.push(new A.r9(new A.bt(0,i,u),new C.cGD(),A.ay(a2,A.o(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afD,new A.n(h,a2,new A.bH(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cGE(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mg,a2,new A.bl("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fU,t,B.br,a2,10,10))}return new C.tD(a1,A.cv(w,a2,a2,B.anj,a2,a2,B.ah,!1),B.f7,a2)}}
C.aAo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aHH.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.ag4.prototype={
aru(d){},
as_(){var w=this,v=w.q7(new C.f9n(w))
v.fX(0)
w.Ma$!==$&&A.aQ()
w.Ma$=v}}
C.aLx.prototype={
gbng(d){var w=this.c
return B.a.aA(w,0,Math.min(this.d,w.length))},
Wg(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dh(B.a0K,new C.fjx(w))},
btc(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amx.prototype={
S(){return new C.amy(new C.amH(),A.a([],x.t),new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amy.prototype={
gN0(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF6(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nb(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqA(){var w=this.r
return w===$?this.r=new C.aLx(new C.bTD(this)):w},
gaqj(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gN0()[v].c)u.push(1)
return u.length},
gbmA(){var w=this.ghd(0)
return w.gzv()==null?"Elder":B.a.i(w.gzv().b)},
Z(){this.a3()
this.as_()},
t(){var w,v=this
v.gqA().t()
v.f.t()
w=v.Ma$
w===$&&A.c()
w.t()
w=v.qf$
w.V$=$.aw()
w.R$=0
v.bwV()},
cMK(){var w=this
w.m(new C.bTA(w))
w.gqA().Wg(w.gN0()[w.x].a)},
Lj(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqA()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qf$.a
v.ax=u
v.ay=u+1
v.m(new C.bTy())
A.cz(B.hy,new C.bTz(v))},
bqL(){var w=this.gaqj(0)/this.gN0().length*100
if(w>=90)return D.f3P
if(w>=75)return D.f1P
if(w>=60)return D.eTs
if(w>=45)return D.eWS
return D.eNS},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cvb()
w=A.bS(0,new A.e6(A.b5(m,m,m,new C.bu_(n,n.qf$),B.az),m),0,0,0)
if(!n.Q){v=D.qq.j(0.96)
u=A.l(20)
t=A.K(B.cV,B.r,3)
u=A.o(m,A.x(A.a([A.d("Elder "+n.gbmA()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aXJ,B.K,m,m),B.T,C.uw("Start the test",n.gC4(),B.cV,B.jb,D.fC)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.n(v,m,t,u,m,m,B.n),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gN0()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXL,m,m,m)
if(n.Q){t=n.gqA()
t=t.d<t.c.length}else t=!1
if(t)u=D.fpe
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.BU,4,B.r,-1)
s.push(A.ay(m,A.o(m,A.d(q[r],m,m,m,m,m,m,D.fAy,B.K,m,m),B.f,m,D.afD,new A.n(D.bi9,m,new A.bH(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.OE,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bTB(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fU,s,B.br,new A.bl("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oC(u,B.n_,A.pY(),B.b0,B.b0,A.LN())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tD("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cvb(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqL(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gN0()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cV,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fF4,B.K,i,i)
r=A.d("Signed by Elder "+j.gbmA(),i,i,i,i,i,i,D.fDI,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fIW,i,i,i),D.eFA],q)
o=A.d(h.b,i,i,i,i,i,i,D.fKT,i,i,i)
n=j.gaqj(0)
m=j.gN0()
u=A.o(i,A.x(A.a([D.fWb,B.ax,s,r,B.T,new A.an(B.z,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.acE,i,i,i),B.P,D.aua],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(D.qq,i,t,u,i,i,B.n),i,i,i,i,B.fu,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Ix(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hb6,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bw,1,B.r,-1)
p=m[v]
u.push(A.o(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h7,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fGf,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fIx,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.dq,i,new A.bH(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cw,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uw("Back to the games",new C.bTu(j),B.cV,B.kb,D.fC),i,i,i))
return new C.tD("Village School",A.cv(s,i,i,B.bT,i,i,B.ah,!1),B.f7,i)}}
C.bu_.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qf$.a
a0.GC(e.f.MM(a1))
w=C.hfX(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqA()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d_T[s]-6
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=D.Gs.gp(0)
a0.aF(new A.a4(u,340,u+12,450),r)}u=A.by(D.aaE.cr(10),B.i4)
$.S()
r=A.L()
r.r=D.BU.gp(0)
a0.ar(u,r)
r=A.by(D.aaE,B.ir)
u=A.L()
u.san(A.jz(new A.r(30,96),new A.r(420,346),D.dk1,f,B.x,f))
a0.ar(r,u)
q=new A.e_()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bX(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c0(o,r)}u=A.L()
u.r=G.ak8.gp(0)
a0.aF(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aF(D.fgB,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aF(D.fgF,u)
u=A.by(D.fgv,B.iF)
r=A.L()
r.r=D.a_5.gp(0)
a0.ar(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqA().gbng(0)
m=A.fD(f,B.cx,f,7,f,A.cS(f,f,f,f,f,f,f,f,f,D.fNa,u+(t?"|":"")),B.a7,B.c1,f,B.dK,B.c2)
m.nC(346)
J.bs(v.save())
u=A.i2(D.aaE)
r=$.mf()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i2(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.by(new A.a4(u,r,u+40,r+90),B.fR)
u=A.L()
u.r=D.byd.gp(0)
a0.ar(r,u)}}else{m=A.fD(f,B.cx,f,f,f,D.fx1,B.K,B.c1,f,B.dK,B.c2)
m.nC(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.o.F(e.gqA().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghd(0).gzv()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f9o(d,a0,i,t,h,D.etZ)),new A.y(520,new C.f9p(a0,d,t)),new A.y(575,new C.f9q(a0,d,t)),new A.y(585,new C.f9r(this,a0,d,t)),new A.y(615,new C.f9s(this,t,a0,d,h))],x.E)
B.d.b0(g,new C.f9t())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cd9(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aG(p.r,B.aj,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.ak(q)
n.ab()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.ak(q)
n.ab()}}n.E(new A.bx())
return n},
aE(d){return!1}}
C.amv.prototype={
S(){return new C.amw(new C.amH(),A.T(x.S,x.i),new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amw.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJ7(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj2(){var w=this.z
return w===$?this.z=this.FR(0):w},
gaMc(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FR(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cm(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FR(0):r).length);++v}s.Q=w
r=w}return r},
FR(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f0(u,new C.bTg())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a3()
this.as_()},
t(){var w,v=this
v.e.t()
w=v.Ma$
w===$&&A.c()
w.t()
w=v.qf$
w.V$=$.aw()
w.R$=0
v.bwU()},
aru(d){var w,v,u,t,s,r=this,q=r.gj2().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cm(u===$?r.z=r.FR(0):u,v)
s=r.gaMc()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMc()[v])*Math.min(1,w)}},
d2u(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj2().length)return
w=v.y
if(w===-1){v.m(new C.bTr(v,d))
return}if(w===d){v.m(new C.bTs(v))
return}v.m(new C.bTt(v,B.d.cm(v.gj2(),v.y),d,B.d.cm(v.gj2(),d)))},
cNr(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FR(0):u).length))break
t=s.gkT()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FR(0):u)[v]]===v);++v}s.m(new C.bTm(s,B.d.cE(w,new C.bTn())))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkT().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bTo(t,s))
w=5
return A.b(C.BR(t.a.d,s),$async$kO)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BS(q.d,q.c.a,"lineup",t.r*10),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bTp())
w=1
break
case 4:t.m(new C.bTq(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkT().length+" lines right",k,k,k,k,k,k,B.q2,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tD("Line Up",A.cv(A.a([D.agu,w,B.aO,new C.Ix(v,u,l.ch,k),B.aO,A.as(C.uw("Back to the games",new C.bTi(d),B.cV,B.kb,D.fC),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkT(),t<v[l.f].d.length;++t)w.push(t)
B.d.b0(w,new C.bTj(l))
u=A.bS(0,A.ck(new C.bTk(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXL,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fFw,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fHM,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lH:F.nq,B.r,2)
r.push(A.o(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bTl(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fJZ,k,k,k),B.f,k,k,new A.n(p,k,m,o,k,k,B.n),k,k,k,B.da,B.bl,k,k,1/0))}if(!l.at)r.push(C.uw("That is my line!",l.gcNq(l),B.cV,B.hd,D.fC))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uw(w,l.gqs(l),B.cV,B.jt,D.fC))}return new C.tD("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bkr.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qf$.a
c7.GC(c5.e.MM(c8))
w=C.hfX(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj2().length
t=$.S().r
s=x.v
r=new A.aG(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ce(225,500,440,470))
q=A.L()
q.r=D.a_5.gp(0)
q.b=B.aa
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.aj,c4,c4,l)
l.push(new A.aZ(o,n))
k.ab()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.ak(j)
k.ab()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.ak(j)
k.ab()
m=new A.bx()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cV,F.nq,D.lH,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1U(c7,"OLDEST",D.euX,B.cV)
this.b1U(c7,"YOUNGEST",D.eup,B.be)
t=A.by(D.fgp,B.fR)
s=A.L()
s.r=D.Gs.gp(0)
c7.ar(t,s)
s=A.by(D.fgo,B.ir)
t=A.L()
t.r=D.BU.gp(0)
c7.ar(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b0(t,new C.dtd())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cm(a1===$?c5.z=c5.FR(0):a1,f)
o=c5.gaMc()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkT()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkT()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.S()
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.r=B.cV.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dnT[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.r(-3-b2*8,-56)
else b9=a3?D.ex4:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aNw
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SP(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.K0,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iD(new A.ev(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fDc),B.a7,B.c1,new A.jh(1),"\u2026",c4,1,c4,B.c2,c4,B.cx)
c1.nC(q)
c2=A.by(A.bX(new A.r(o,650),24,c1.b.c+16),B.fR)
$.S()
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=B.iz
else a9=a7?B.rW:D.qq
a8.r=a9.gp(0)
c7.ar(c2,a8)
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=D.lH
else a9=a7?F.nq:D.lG
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.ar(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iD(new A.ev(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fDw),B.a7,B.c1,new A.jh(1),c4,c4,c4,c4,B.c2,c4,B.cx)
c3.ep()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bX(B.J,4,8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cV,F.nq,D.lH,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aF(q,m)
v.restore()}v.restore()},
b1U(d,e,f,g){var w,v,u=null,t=A.fD(u,B.cx,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,G.DS,u,u),e),B.a7,B.c1,u,B.dK,B.c2)
t.ep()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.r(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2p.prototype={
a7(){return"_Trip."+this.b}}
C.amr.prototype={
S(){return new C.ams(D.XQ,new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.ams.prototype={
gDC(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF6(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nb(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqA(){var w=this.f
return w===$?this.f=new C.aLx(new C.bT2(this)):w},
gUe(){var w=this.ghd(0)
return w.gzv()==null?"Grandma":B.a.i(w.gzv().b)},
Z(){this.a3()
this.as_()},
t(){var w,v=this
v.gqA().t()
w=v.Ma$
w===$&&A.c()
w.t()
w=v.qf$
w.V$=$.aw()
w.R$=0
v.bwT()},
aru(d){var w,v,u,t=this
if(t.r!==D.aep)return
w=B.dI.az(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDC()
if(v+1>=u.length){t.r=D.aeq
t.Xd()}else{++t.w
t.ay=!1
t.r=D.XR
t.gqA().Wg(u[t.w].a)}if(t.c!=null)t.m(new C.bT0())}},
Xd(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqA().Wg("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDC().length
r=C.bHn(t,u.z,s)
u.as=r
w=2
return A.b(C.BR(u.a.d,r),$async$Xd)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BS(s.d,s.c.a,"journey",u.x*10),$async$Xd)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSV())
return A.h(null,v)}})
return A.i($async$Xd,v)},
bs4(){this.aUW()},
aUW(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aep
if(w.c!=null)w.m(new C.bSW())},
Lj(d){var w,v,u,t,s=this
if(s.r!==D.XR)return
w=s.gDC()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bT_(s,d,v))
u=s.gqA()
t=s.w
u.Wg(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cSD(){if(this.r!==D.Br)return
this.aUW()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e6(A.b5(s,s,s,new C.bjS(t,t.qf$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDC().length;++w){v=t.w
if(w<v||t.r===D.aeq)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bz(1,B.bd,A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wL,s,s,s,s),s))}p.push(B.bn)
p.push(D.fXQ)
return new C.tD("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cmO(),s,s,10,10,s,s)],q),s),B.f7,s)},
cmO(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSZ(o),l=D.qq.j(0.96),k=A.l(22),j=A.K(B.cV,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gUe()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aXJ,B.K,n,n),B.T,C.uw("Start the journey",o.gbs3(),B.cV,D.bT3,D.fC)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.beO
break
case 1:w=o.w
v=o.gDC()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lG,2.5,B.r,-1)
t.push(A.ay(n,A.o(n,A.d(r[s],n,n,n,n,n,n,D.aX4,B.K,n,n),B.f,n,D.afK,new A.n(D.alh,n,new A.bH(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,M.wF,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSX(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.c_(B.bI,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDC().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uw(v,o.gcSC(),B.cV,B.jt,D.fC),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUe()),B.P,A.d(""+o.x+" of "+o.gDC().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aXm,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRA(v)
u=C.aRA(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.acE,n,n,n))}w.push(B.P)
w.push(A.as(C.uw("Back to the games",new C.bSY(o),B.cV,B.kb,D.fC),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.o(n,w,B.f,n,n,new A.n(l,n,j,k,D.aEG,n,B.n),n,n,n,n,B.bl,n,n,n)}}
C.bjS.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qf$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDC(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aep,d2=c7*0.5
c8=A.ap(D.bjG,D.buu,d0)
c8.toString
w=A.ap(D.Zd,F.aiV,d0)
w.toString
v=A.ap(B.ur,D.bsQ,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.san(A.jz(B.J,new A.r(0,d2),A.a([c8,w,v],t),F.a5k,B.x,c3))
d3.aF(new A.a4(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wd(s,60,A.a([D.bte,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zr.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dDI[o]
$.S()
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aG(k.r,B.aj,c3,c3,j)
j.push(new A.aZ(0,v))
i.ab()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.ak(d)
i.ab()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
$.S()
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=A.ap(l===0?D.bic:D.bxD,D.bnj,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cda(d3,new A.r(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ap(D.aks,D.GG,d0)
v.toString
w.san(A.jz(new A.r(0,d2),new A.r(0,c7),A.a([v,D.btg],t),c3,B.x,c3))
d3.aF(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bmy.gp(0)
d3.aF(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.bxe.gp(0)
d3.aF(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=G.Nc.gp(0)
d3.aF(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.r=D.bhR.gp(0)
d3.aF(new A.a4(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.aj,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ab()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ak(b3)
b1.ab()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ak(b3)
b1.ab()
b0=new A.bx()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.bvn.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b1.r=D.fC.gp(0)
d3.aF(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.Gs.gp(0)
d3.aF(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.by(new A.a4(b0,a4,b0+60,a5),B.jy)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.byJ.gp(0)
d3.ar(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.BU.gp(0)
b0.b=B.aa
b0.c=2
d3.ar(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iD(new A.ev(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fBD),B.a7,B.c1,new A.jh(1),c3,c3,c3,c3,B.c2,c3,B.cx)
b7.ep()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.aeq
else if(r===c4.w){b0=c4.r
b0=b0===D.XR||b0===D.Br
b8=b0}else b8=!1
if(a7){b0=c4.ghd(0).gzv()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqA()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Br
b0=c0?C.hF7(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XR?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SP(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJb(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bwJ.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XQ)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Br&&c4.ax){b7=A.fD(c3,B.cx,c3,c3,c3,A.cS(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cV,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,W.J_,c3,c3),"BEEP BEEP!"),B.a7,B.c1,c3,B.dK,B.c2)
b7.ep()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cda(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bsK,D.blS,g)
o.toString
if(f){w=new A.aG($.S().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ce(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ce(v+9,t,v+16,u))
w.E(new A.bx())
t=A.L()
t.r=D.a_D.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d3V[r]
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=D.a_D.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.ex1)
$.S()
v=A.L()
v.r=D.bhT.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bX(e.a5(0,D.ex2),16,60)
w=A.L()
w.r=o.gp(0)
d.c0(v,w)}},
bJb(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XQ?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dvN[w]
u=d.ay&&d.r!==D.XQ&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bxu.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bpr.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.bj.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.u3(D.fgM,B.fR,B.fR,B.iq,B.hU)
$.S()
t=A.L()
t.san(A.jz(D.et4,B.a9z,D.dlo,F.a5k,B.x,f))
a2.ar(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.dfh[B.o.F(o,4)].gp(0)
a2.aF(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.Br&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.mW(A.by(l,B.o_)),$.mA(),!0)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=D.Zd.gp(0)
a2.aF(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Br?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SP(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aNn,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.by(l,B.o_)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=D.alj.gp(0)
i.b=B.aa
i.c=2
a2.ar(j,i)}d=A.by(D.Vc,B.o_)
t=A.L()
t.r=D.Zd.gp(0)
a2.ar(d,t)
J.bs(a1.save())
a1.clipRRect(A.mW(A.by(D.Vc,B.o_)),$.mA(),!0)
C.SP(a2,new A.r(D.Vc.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aNn,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.by(D.Vc,B.o_)
d=A.L()
d.r=D.alj.gp(0)
d.b=B.aa
d.c=2
a2.ar(t,d)
d=A.L()
d.r=X.Cj.gp(0)
a2.O(D.evb,4,d)
d=A.L()
d.r=D.Gs.gp(0)
a2.aF(D.fhV,d)
for(w=0;w<3;++w){v=D.dvP[w]
d=A.by(new A.a4(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.GG.gp(0)
a2.ar(d,t)}a1.restore()},
aE(d){return!1}}
C.aCe.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhp.prototype={}
C.aCg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhq.prototype={}
C.aCh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhr.prototype={}
C.a6R.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b5(w,w,w,new C.bjZ(w),B.az),w)}}
C.bjZ.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dtG[B.o.F(n,6)]
k=$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=l.gp(0)
d.aF(new A.a4(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.aj,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ab()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new A.bx()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tD.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.Qx,w,w,w,new C.bSU(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fyV,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.YY,A.o(w,A.bm(!0,A.x(A.a([D.c7T,new A.D(D.bJT,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.ba4,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ix.prototype={
B(d){var w=null,v=this.d,u=C.aRA(v),t=C.inn(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cV.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fBo,w,w,w)],x.p)
if(this.e)p.push(D.ezt)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h7,w,w,w))
if(t!=null)p.push(new A.D(B.uL,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fa,w,w,w),w))
return A.o(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(s,w,q,r,w,w,B.n),w,w,w,w,B.bH,w,w,w)}}
C.WA.prototype={
S(){return new C.bmM(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cZw(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmM.prototype={
gTd(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a3()
this.PN()},
PN(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bTF(u.a.d),$async$PN)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.djp[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bTE(p,(o===$?u.d=q.c:o).a,r),$async$PN)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e3y(u,n))
return A.h(null,v)}})
return A.i($async$PN,v)},
uF(d){return this.cpR(d)},
cpR(d){var w=0,v=A.j(x.H),u=this,t
var $async$uF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ee(new C.e3z(d),!1,null,x.H)),$async$uF)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PN()
return A.h(null,v)}})
return A.i($async$uF,v)},
gb7f(){var w,v,u,t=C.Nb(this.gTd()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2T(d){return this.cx5(d)},
cx5(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZw(r),$async$a2T)
case 2:if(u.c!=null)u.m(new C.e3A(u,r))
return A.h(null,v)}})
return A.i($async$a2T,v)},
P5(d){return this.bRW(d)},
bRW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$P5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hij(t.gTd())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MW("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ee(new C.e3w(q),!1,null,r)),$async$P5)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e3x(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2T(A.cT(s,0,A.dA(2,"count",x.S),r).dq(0)),$async$P5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P5,v)},
Y9(d,e){return this.bPv(0,e)},
bPv(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Y9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e3v(e),o,null,!0,!0,x.y),$async$Y9)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hij(u.gTd()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2T(o),$async$Y9)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Y9,v)},
aay(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e3s(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.W1,p,p,p),B.b4],s)
q=A.l(10)
r.push(A.o(p,A.d(i,p,p,p,p,p,p,D.fzO,p,p,p),B.f,p,p,new A.n(B.hO,p,p,q,p,p,B.n),p,p,p,p,B.z9,p,p,p))
return A.ay(p,A.d1(A.o(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b4,A.d(e,p,2,p,p,p,p,D.fHF,p,p,p),B.cS,A.d(f,p,3,B.a2,p,p,p,D.fAw,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.z0,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XD(d,e,f,g,h,i){return this.aay(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nb(s.gTd()),p=s.gTd(),o=C.aRA(s.e),n=C.hij(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e3B(s),k=C.hJ7(p,1).length,j=C.hJi(p,1).length,i=C.hKc(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cV.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,H.acs,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fF8,r,r,r),a0=q.b.length,a1=x.p
g=A.o(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Wj,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q2,r,r,r),D.h38],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.n(h,r,f,g,r,r,B.n),r,r,r,r,B.bH,r,r,r)
f=s.XD("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e3C(s,p),l.$1("kahoot"))
h=s.XD("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lG,new C.e3D(s,p),l.$1("fire"))
a0=s.XD("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wt,new C.e3E(s,p),l.$1("catch"))
j=j!==0?new C.e3H(s,p):r
j=s.aay("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hL,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e3I(s,p):r
i=s.aay("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lF,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XD("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fn,new C.e3J(s,p),l.$1("journey"))
k=k!==0?new C.e3K(s,p):r
k=A.a([g,B.aO,D.h7a,B.P,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aay("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XD("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d6,new C.e3L(s,p),l.$1("school"))],a1),2,12,12,r,B.e0,!0),B.db,A.A(A.a([D.bLI,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fzS,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fOL,B.bc,new A.bz(1,B.bd,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hh,r,r,r),A.d(""+v.gapY(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fa,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapY(0).length>=2){f=D.lH.j(0.2)
t=new A.ax(D.lH,1,B.r,-1)
g.push(A.ay(r,A.o(r,A.X(B.he,D.lH,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3M(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cV.j(0.2)
t=new A.ax(B.cV,1,B.r,-1)
f=A.ay(r,A.o(r,A.X(B.jb,B.cV,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3N(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fj.j(0.2)
t=new A.ax(B.fj,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.ay(r,A.o(r,A.X(B.ej,B.fj,r,r,r,20),B.f,r,r,new A.n(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3O(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.o(r,new A.c8(B.aM,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.n(i,r,new A.bH(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.da,B.bl,r,r,r))}if(s.a.e){j=m?new C.e3F(s):new C.e3G(a2)
i=A.l(18)
h=A.K(m?B.cV:B.aT,B.r,2)
g=m?B.cV.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.ay(r,A.o(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cV:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.n(g,r,h,i,r,r,B.n),r,r,r,r,B.Os,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h86)
k.push(B.aB)
k.push(D.aua)
return new C.tD("Family Games \xb7 "+p.b,A.cv(k,r,r,D.bFT,r,r,B.ah,!1),B.f7,r)}}
C.a0i.prototype={
a7(){return"_KPhase."+this.b}}
C.amt.prototype={
S(){return new C.amu(D.b1Z)},
gd1(){return this.e}}
C.amu.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bTe(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dh(B.fM,new C.bTf(v))},
aQq(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bT4(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dh(B.fh,new C.bT5(w))},
Lj(d){var w
if(this.d!==D.adU)return
w=this.at
if(w!=null)w.a1(0)
this.b7b(d)},
b7b(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.U(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bTa(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.t2,v.giC(v))},
cM3(d){var w=this
if(w.d!==D.Xn)return
if(w.e+1>=w.a.w.length)w.YW()
else{w.m(new C.bTb(w))
w.aQq()}},
YW(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHn(p,u.w,t)
u.m(new C.bT7(u,s))
w=2
return A.b(C.BR(u.a.e,s),$async$YW)
case 2:r=e
t=u.a
w=3
return A.b(C.BS(t.e,t.f,t.r,u.f),$async$YW)
case 3:q=e
if(u.c!=null)u.m(new C.bT8(u,r,q))
return A.h(null,v)}})
return A.i($async$YW,v)},
cMT(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b3("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cT(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b3(t,B.h.U(w*(0.35+q.ai()*0.5)),!1))}B.d.b0(v,new C.bTc())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1Z===r){w=A.a([D.h3x,B.T,A.d(s,t,t,t,t,t,t,B.Wt,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fA_,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bb,B.K,t,t))
w.push(B.e4)
w.push(C.uw("Play",u.geX(u),B.cV,B.he,D.fC))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b2_===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fIc,t,t,t),t,t,t)
break A}if(D.adU===r||D.Xn===r){w=u.cst()
break A}if(D.b20===r){w=u.cdb()
break A}w=t}return new C.tD(s,w,B.f7,t)},
cst(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xn,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aWU,j,j,j),B.b4],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Lg,j,j,j))
g.push(B.as)
f=A.l(14)
g.push(A.o(j,A.d(""+k.f,j,j,j,j,j,j,B.iH,j,j,j),B.f,j,j,new A.n(B.bw,j,j,f,j,j,B.n),j,j,j,j,B.CE,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.l(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.kt(B.bw,j,k.as<5?B.fj:B.cV,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cV,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lH:F.nq,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fz3,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fKn,B.K,j,j)
w=A.E(A.o(j,A.as(u,j,j,j),B.f,j,j,new A.n(D.qq,j,v,w,j,j,B.n),j,j,j,j,B.fu,j,j,1/0),3)
v=A.a([],h)
for(u=k.giC(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bT9(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEi[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aEC[o],j,j,j,j,j,j,D.fAZ,j,j,j),B.as,new A.bz(1,B.bd,A.d(r[t],j,3,B.a2,j,j,j,D.fzX,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(B.asE)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c_y)
v.push(A.ay(j,new A.T4(A.o(j,new A.c8(B.aM,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.n(n,j,new A.bH(l,l,l,l),new A.be(m,m,m,m),N.aCG,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l_(1.45,v,2,10,10,j,B.e0,!1),4)],h)
if(i)h.push(D.eyJ)
return new A.D(B.a1h,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cdb(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cMT(),m=x.p,l=A.a([D.be5,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q2,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.W6,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cV.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.cV:B.bw,1,B.r,-1)
q=A.d(w<3?D.dlF[w]:""+(w+1),o,o,o,o,o,o,B.mD,o,o,o)
s=s?B.u:B.O
l.push(A.o(o,new A.c8(B.aM,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bd,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iH,o,o,o)],m),o),B.f,o,o,new A.n(v,o,new A.bH(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cw,B.eX,o,o,o))}l.push(B.T)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ix(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uw("Back to the games",new C.bT6(p),B.cV,B.kb,D.fC),o,o,o))
return A.cv(l,o,o,B.fu,o,o,B.ah,!1)}}
C.Uf.prototype={
S(){return new C.amq(A.T(x.de,x.er))}}
C.amq.prototype={
gDh(){var w,v=this,u=v.d
if(u===$){w=C.hoj(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glW(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDh().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.at(new A.bb(w,B.b7,B.aP),v)}return t},
cgc(d){return this.f.c1(0,d,new C.bSF(d))},
Z(){this.a3()
var w=this.gDh().c
if(w.length===0)w.push(C.h9L(null,0,20,""))},
t(){var w,v,u=this.glW(0)
u.V$=$.aw()
u.R$=0
for(u=this.f,u=new A.dn(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.aw()
v.R$=0}this.a2()},
cLU(){if(this.gDh().c.length>=12)return
this.m(new C.bSG(this))},
jH(d){var w,v,u=this,t=u.gDh()
t.b=B.a.i(u.glW(0).a.a)
w=t.gapY(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.T(D.fs_)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bSQ(),r=x.p,q=A.a([A.bP(!1,D.fTM,t,t,!0,t,t,t,u.gbqW(u),t,t)],r),p=A.a([D.h7I,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glW(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h7,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDh().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSP(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uw("\uff0b Add a question",u.gcLT(),B.aT,t,B.c),t,t,t))
return new C.tD("Make your game",A.cv(p,t,t,D.bFQ,t,t,B.ah,!1),q,t)}}
C.arB.prototype={
S(){return new C.aFO(A.a([],x._))},
bv(){return this.r.$0()},
qt(){return this.w.$0()},
ge3(){return this.c}}
C.aFO.prototype={
Z(){var w,v
this.a3()
this.wC()
w=this.a
v=w.c
if(v.length!==0)C.a8A(v,w.e,w.d.w)},
ws(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ws=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hl5(r,t.e,!1,s.w,new C.e5d(u),null,s),$async$ws)
case 2:w=3
return A.b(u.wC(),$async$ws)
case 3:return A.h(null,v)}})
return A.i($async$ws,v)},
a16(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a16=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hl5(r,t.e,!0,s.w,new C.e5c(u),null,s),$async$a16)
case 2:w=3
return A.b(u.wC(),$async$a16)
case 3:return A.h(null,v)}})
return A.i($async$a16,v)},
wC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bj(q.a.c),$async$wC)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e5f(q,p))
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
return A.b(C.Hp(q.a.c).dg(0,B.qC),$async$wC)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e5g(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e5h(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wC,v)},
Pr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.T(D.frA)
w=3
return A.b(C.Hp(t.a.c),$async$Pr)
case 3:r=e
w=4
return A.b(C.h_d(t.a.c,r),$async$Pr)
case 4:q=e
w=5
return A.b(C.Hp(t.a.c),$async$Pr)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e5b(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dL:B.d3,null,B.t,null,s,null,B.lL,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$Pr,v)},
IF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ivF(l),$async$IF)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hZr(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b21(q,p.e,l,"Each family tree costs $"+B.h.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IF)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hFh(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.E_,new A.V(o,0,!1),0,n,D.uT,B.cf)
w=5
return A.b(C.a4g(n,m),$async$IF)
case 5:w=6
return A.b(t.wC(),$async$IF)
case 6:t.a.bv()
t.a.qt()
if(t.c==null){w=1
break}t.Fa(m)
case 1:return A.h(u,v)}})
return A.i($async$IF,v)},
Fa(d){return this.cl7(d)},
cl7(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bj(u.a.c),$async$Fa)
case 2:n=l.nw(k.dH(f,new C.e5e(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.arv(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fa)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4g(u.a.c,o),$async$Fa)
case 6:case 5:w=7
return A.b(u.wC(),$async$Fa)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$Fa,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.ui(p)
if(r.e)return A.as(A.n0(q,p?B.bu:B.bj,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aF(!1,B.a3,!0,q,A.aM(!1,q,!0,A.o(q,D.bY9,B.f,q,q,new A.n(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cU,!0,q,q,q,q,q,q,q,q,q,q,q,r.gckb(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gp(A.o(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e4,A.bJ(D.haX,q,r.gaTJ(),A.bp(B.bQ,q,q,q,q,q,B.a1F,q,new A.ba(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.n(w,q,q,v,q,q,B.n),q,q,q,q,D.bIA,q,q,1/0),15,B.ag,1.05,D.adH,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zQ,B.aV,q,q,q,q),q,q,q,new C.e5j(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zM,B.aV,q,q,q,q),q,q,q,r.gahp(),q,q,q,q,"Transfer / backup file",q))
w.push(A.de(B.atz,q,D.fR3,r.gaTJ(),A.bp(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gp(r.cI2(J.t(r.d,s),o),14,B.ag,1,D.adH,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cI2(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.l(14),p=A.o(w,D.bXe,B.f,w,w,new A.n(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqY(),m=d.d?"":" \xb7 Public",l=d.y===D.kZ?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.o(w,A.aF(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bc,l,A.X(B.Pn,v?B.bu:B.bj,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e5i(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.n(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.arv.prototype={
S(){return new C.aFL(A.a([],x._),A.aR(x.N),A.baK())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFL.prototype={
Z(){var w,v,u=this
u.a3()
u.d=u.a.w
u.ae0()
w=u.a
v=w.c
if(v.length!==0)C.a8A(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.aw()
w.R$=0
this.a2()},
a42(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a42=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yE("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4E(r),s,null,!0,!0,x.y),$async$a42)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kg()
t.m(new C.e4F(t,r))
w=4
return A.b(t.uB(),$async$a42)
case 4:t.a.bv()
t.yE(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a42,v)},
cxF(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e4z(w,f,d,e))},
aW1(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ec(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bdQ(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e6(r)
w=q.Dm()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ec(r,u,0,1)
t.k7(v,v,1,1)
t.ec(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
ae0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ae0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bj(u.a.c),$async$ae0)
case 2:t=s.nw(r.dH(e,new C.e40(u)))
if(t!=null&&u.c!=null)u.m(new C.e41(u,t))
return A.h(null,v)}})
return A.i($async$ae0,v)},
yE(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
ws(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$ws=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hl5(o,t,!1,r,new C.e4i(u),q.a,s),$async$ws)
case 2:n=A
m=J
w=3
return A.b(C.Hp(u.a.c),$async$ws)
case 3:p=n.nw(m.dH(e,new C.e4j(u)))
if(p!=null&&u.c!=null)u.m(new C.e4k(u,p))
return A.h(null,v)}})
return A.i($async$ws,v)},
Kg(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a4g(t,s),$async$uB)
case 2:return A.h(null,v)}})
return A.i($async$uB,v)},
a2A(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ux(q,t.a.c)){t.yE("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iwS(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2A)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kg()
t.m(new C.e4y(t,r))
w=4
return A.b(t.uB(),$async$a2A)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2A,v)},
b3R(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ee(new C.e4f(this),!1,null,x.H))},
a1j(){return this.cl9()},
cl9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.ux(m,t.a.c)){t.yE("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.O(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e4v(),A.U(s).k("Y<1>")).gJ(0)
s=A.ew([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e4w(n,t,new C.ui(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1j)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kg()
t.m(new C.e4x(t,o))
w=6
return A.b(t.uB(),$async$a1j)
case 6:case 5:if(o.a&&t.c!=null)t.b3R()
case 1:return A.h(u,v)}})
return A.i($async$a1j,v)},
WX(d){return this.bEv(d)},
bEv(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ux(r,t.a.c)){t.yE("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3P(t,d),r,null,!0,!0,x.P),$async$WX)
case 3:s=f
if(s==null){w=1
break}t.Kg()
t.m(new C.e3Q(t,s))
w=4
return A.b(t.uB(),$async$WX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WX,v)},
a4n(d){return this.cKh(d)},
cKh(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e4H(u,d,new C.ui(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4n)
case 2:return A.h(null,v)}})
return A.i($async$a4n,v)},
chp(d){var w=this,v=w.d
v===$&&A.c()
if(C.ux(v,w.a.c))w.P6(d)
else w.a4n(d)},
ajV(d,e){return this.cBD(d,e)},
cBD(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e4B(new C.ui(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajV)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajV,v)},
IK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kZ?3:5
break
case 3:w=6
return A.b(C.h7Y(t.a.c),$async$IK)
case 6:s=e
o=t.a
r=C.htb(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajV(!s,!r),$async$IK)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRH(o,t.a.c)){t.yE("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.ln(o,"Cancel","Remove",q.y===D.kZ?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IK)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRD(t.a.c,t.d.a),$async$IK)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IK,v)},
abu(d){return this.bPM(d)},
bPM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ux(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aU(s,new C.e3R(p))){o=A.U(s)
p.a=A.nw(new A.cM(new A.Y(s,new C.e3S(d),o.k("Y<1>")),new C.e3T(),o.k("cM<1,q>")))}q=p.a
if(q==null)q=d.d
t.Kg()
t.m(new C.e3U(t,s,d,q))
w=3
return A.b(t.uB(),$async$abu)
case 3:t.yE(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abu,v)},
P6(d){return this.bS_(d)},
bS_(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ux(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4n(d),$async$P6)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e3Y(t,d),r,null,!0,!0,x.P),$async$P6)
case 6:s=f
if(s==null){w=1
break}t.Kg()
t.m(new C.e3Z(t,s))
w=7
return A.b(t.uB(),$async$P6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
cIs(){var w=this,v=w.d
v===$&&A.c()
if(!C.ux(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e4G(w))
w.uB()},
a_0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRH(n,t.a.c)){t.yE("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.aw()
r=new A.at(B.aw,s)
q=t.d.e
p=A.br(new A.N(q,t.gcfT(),A.U(q).k("N<1,q>")).c_(0,new C.e4a()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4b(t,new C.ui(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_0)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Kg()
t.m(new C.e4c(t,p))
w=4
return A.b(t.uB(),$async$a_0)
case 4:t.yE("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_0,v)},
cfU(d){return B.a.i(d.toLowerCase())},
cjW(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ux(v,w)
t=r.d
s=C.ilU(t)
C.ivJ(q,t.b,u,C.ilT(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e4O(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c6:B.hY
v=A.X(B.a2P,n?B.bu:B.bj,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CF,A.aM(!1,o,!0,new A.D(B.hz,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e4P(p,d),o,o,o,o,o,o,o),o),new A.D(B.nJ,p.c2e(m),o)],u)
if(p.d.y===D.kZ){t=B.tB.j(0.15)
s=A.l(12)
r=A.K(B.tB.j(0.45),B.r,1)
q=C.Hn(p.d,p.a.c)
v.push(new A.D(B.z3,A.o(o,A.A(A.a([D.c1I,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(t,o,r,s,o,o,B.n),o,o,o,o,B.hP,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.ux(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GB("Undo",B.pD,p.gcIr(),m,o,o))
u.push(new C.GB("Family Book",D.bRT,p.gcjV(),m,B.us,o))
u.push(new C.GB("Family games",B.nP,p.gck6(),m,B.aD,o))
if(C.ux(p.d,p.a.c))u.push(new C.GB("Display settings",B.Dx,p.gcl8(),m,B.b2,o))
u.push(new C.GB("Sync",B.zM,p.gahp(),m,o,o))
t=p.d
if(t.y===D.kZ||C.aRH(t,p.a.c)){t=p.d.y===D.kZ?"Remove shared tree":"Delete tree"
u.push(new C.GB(t,B.ej,p.gbPW(),m,B.fj,o))}if(C.ux(p.d,p.a.c))u.push(new C.GB("Add member",B.x_,new C.e4Q(p),m,B.bQ,o))
v.push(new A.D(B.ank,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gaqY()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ck(new C.e4R(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a2T:V.Po,o,o,o,o,o)
v.push(A.as(A.ht(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e4S(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c2e(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ac(0,B.G,B.fX.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.X(B.zD,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a3,!0,m,A.aM(!1,m,!0,A.o(m,D.c51,B.f,m,m,new A.n(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cU,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahp(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fC1,m,m,m)
r=r.gaqY()
p=n.d.gaqY()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.ux(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c1W,m,m,m,n.gcv0(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jL:B.n5
r=r?"Private":"Public"
r=A.E(n.axw(q,"Privacy",r,n.a.d.w?n.gcHn():m),1)
q=A.E(n.axw(B.x4,"Tree code",n.d.c,new C.e4_(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axw(D.bTB,"Collaborators",p,n.gc74()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kZ){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aF(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.hn,A.A(A.a([A.X(B.nQ,B.c,m,m,m,14),B.e7,A.d("View only",m,m,m,m,m,m,B.aWZ,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.o(m,A.bv(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.Hg,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.n(m,m,m,w,v,D.c9l,B.n),m,m,m,m,m,m,m,1/0)},
axw(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(H.aoz,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rg,A.d(f,w,1,B.a2,w,w,w,Y.xE,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bht.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b5(t,t,t,new C.bhw(s,t),new A.au(w,v))],x.p)
r=r.gdQ(r)
B.d.u(u,r.dO(r,new C.diG(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.diH(this),A.U(r).k("N<1,v>")))
return new A.D(B.uP,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L_.prototype={}
C.GF.prototype={}
C.bhv.prototype={
gbmm(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLs.prototype={}
C.bhw.prototype={
bRB(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kp(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kp(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bx())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bRy(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.dj0())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aU(a0,new C.dj1(f))
t=new A.N(a0,new C.dj2(f),A.U(a0).k("N<1,F>")).c_(0,new C.dj3()).cB(0,1/0,B.rw)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lK(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aG(m.r,B.aj,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.ce(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.ce(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.ak(m)
i.ab()
d.af(i,e)}},
a4(d,e){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bG
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bRy(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRB(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bli.prototype={
gcdd(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aET
switch(w.c.a){case 0:return D.d2z
case 1:return D.dfb
case 2:return D.dxI}},
gcdg(){var w=this.c,v=C.hEt(w.w),u=C.hEt(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gcdd(),p=t.c,o=A.bG_(p.f),n=t.gcdg(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cM,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tH(B.z,s,B.cn,B.bY,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.o(B.z,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.o(s,A.o(s,A.i3(w,B.aq),B.f,s,s,new A.n(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.n(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.CU,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.o(s,A.d(""+k,s,s,s,s,s,s,D.fMR,s,s,s),B.f,s,s,new A.n(B.cj,s,w,j,s,s,B.n),s,s,s,s,D.bKw,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dM,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bj,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.ay(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ax,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b8d,new A.n(k,s,w,j,m,s,B.n),s,s,s,s,D.bKH,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgx.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.blq
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.bzn.prototype={
B(d){var w=this,v=null,u=new C.fp8(w),t=w.c,s=t?B.ct:B.c,r=A.l(12),q=u.$3(B.i_,"Zoom in",w.d),p=A.o(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.x1,"Zoom out",w.e)
return A.aF(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.o(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.ar1,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dB,v,v,v,B.ai)}}
C.boE.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.ay(v,A.o(v,A.x(A.a([A.X(s?K.a2T:V.Po,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fIS,v,v,v)],r),B.l,v,B.b9,B.i,0,B.p),B.f,v,v,new A.n(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fGD,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.f_9(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a0v.prototype={
S(){return new C.aEd()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aEd.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zg:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ino(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.V$=$.aw()
u.R$=0
u=v.e
u===$&&A.c()
u.V$=w
u.R$=0
u=v.f
u===$&&A.c()
u.V$=w
u.R$=0
u=v.r
u===$&&A.c()
u.V$=w
u.R$=0
u=v.w
u===$&&A.c()
u.V$=w
u.R$=0
u=v.x
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
QE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.htb(p.y,p.w)
w=3
return A.b(A.lz(t.a.w,B.JU),$async$QE)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b21(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QE)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hZs(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A.DH(78,800),$async$QE)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dyW(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QE,v)},
cdf(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i4(B.o.v(1000*Date.now()),w,D.zg,null,null,null,"","","","","",1,!1,0)
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
s=v.aGB(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
ab5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ab5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dyV(r),s,null,!0,!0,x.y),$async$ab5)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$ab5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.ui(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dz4(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bIW,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hd(A.aM(!1,k,!0,new A.D(B.lQ,A.X(B.ej,B.pq,k,k,k,17),k),B.cU,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMv(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jZ:B.iO
t=A.bG_(l.as)
if(l.as==null)s=A.X(B.px,j?B.bu:B.bj,k,k,k,40)
else s=k
s=A.as(A.ay(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hg(u,t,s,k,42),A.ao(0,A.hg(B.bQ,k,D.bWi,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcdc(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aEf(t,"Full name",B.mj,1,1,i,B.mB)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.T,new C.blg(i,u,new C.dz5(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bCf],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dz6(),A.U(o).k("N<1,eS<q?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bCh],q)
B.d.u(q,new A.N(f,new C.dz8(),A.U(f).k("N<1,eS<q?>>")))
o=A.x(A.a([t,B.am,new C.aeB(i,r,"Who is their parent?",p,new C.dz9(l),k,o),B.aB,n,B.am,new C.aeB(i,m,"Who is their spouse / partner?",q,new C.dza(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aEf(q,"Birth date",D.aqc,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aEf(m,"Birth place",B.a38,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aEf(n,"Date of death (if deceased)",D.ash,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aEf(p,"Occupation",B.Qn,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aeC(i,"Identity",u,k),B.af,new C.aeC(i,"Family links",o,k),B.af,new C.aeC(i,"Life details",A.x(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.aEf(r,"Notes",B.l0,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aEe(i,"Child order",l.cln(l.at),new C.dzb(l),new C.dzc(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hi7(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dzd(l):k
B.d.u(r,A.a([B.T,new C.aEe(i,"Visible in tree",u,w,new C.dze(l),k)],v))}r.push(B.T)
w=j?B.jZ:B.iO
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.o(k,A.iV(k,B.bQ,k,B.ag,k,new C.dzf(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.n(w,k,t,u,k,k,B.n),k,k,k,k,K.an_,k,k,k))
r.push(B.bx)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dV(B.o8,new C.dz7(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.ba(A.l(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bJ(D.fj9,k,l.gcde(),A.bp(B.aV,k,k,0,B.c,k,B.co,k,new A.ba(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.ax)
return A.em(B.f7,k,B.ag,h,new A.a5(420,k,A.ca(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.anS,k,B.anb,new A.ba(g,B.a1),k,k)},
cln(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeC.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16)
return A.x(A.a([new A.D(B.a1J,u,w),A.o(w,this.e,B.f,w,w,new A.n(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.blh.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.o(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eN,u,B.t8,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bj,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.n(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aeB.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.X(B.tj,u?B.bu:B.bj,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.o(v,new A.Er(A.a5M(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.n(t,v,r,s,v,v,B.n),v,v,v,v,B.kX,v,v,v)}}
C.blg.prototype={
B(d){var w=new C.dzg(this)
return A.A(A.a([w.$3(D.wN,"Male",B.Q8),B.ae,w.$3(D.oB,"Female",B.PV),B.ae,w.$3(D.zg,"Other",B.nN)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aEe.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jZ:B.iO,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.o(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aKu(u,B.x1,w.f,v),B.bn,new C.aKu(u,B.i_,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.n(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aKu.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ef:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bj).j(0.4)
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeD.prototype={
bVN(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cC}},
bVO(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_z(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AT(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ef:B.c
u=A.l(12)
t=A.K((w?B.eh:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.X(f,B.bQ,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.o(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.n(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.z_,p,p,1/0)},
afL(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1J,u,w),A.o(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hK_(r,q),o=q.c,n=t.bVN(o),m=A.bG_(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kZ?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bj,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.o(s,A.hg(u,m,m==null?A.X(B.px,n,s,s,s,48):s,s,52),B.f,s,s,new A.n(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.o(s,A.d(t.bVO(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(w,s,u,v,s,s,B.n),s,s,s,s,B.lO,s,s,s),s,s,s)
u=x.p
i=A.a([t.AT("Full name",i,B.mj)],u)
if(p>0)i.push(t.AT("Child order","#"+p,B.Q0))
r=A.a([h,B.ax,r,B.aO,l,B.T,v,B.bx,t.afL("Identity",i),B.af,t.afL("Life details",A.a([t.AT("Birth date",q.w,D.aqc),t.AT("Birth place",q.x,B.a38),t.AT("Date of death",q.y,D.ash),t.AT("Occupation",q.z,B.Qn)],u)),B.af,t.afL("Family links",A.a([t.AT("1. Parent",t.b_z(q.d),B.HH),t.AT("2. Spouse",t.b_z(q.e),B.HX)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afL("Notes",A.a([t.AT("Notes",q,B.l0)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.Lp,s,new C.dzq(d),A.bp(B.aV,s,s,s,s,s,B.co,s,new A.ba(A.l(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cN(B.m4,A.ca(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,s,B.wH,s,s,B.ah),s),s,s,s,B.Hj,s,B.d7,s,new A.ba(j,B.a1),s)}}
C.GB.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bj
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uR,A.hd(A.aF(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.ary.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,aa<q,@>>")
w=A.C(new A.N(w,new C.cgh(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cgi(),t,x.fO))
return s}}
C.arz.prototype={
S(){return new C.aFN(A.a([],x.bF))},
gd1(){return this.c}}
C.aFN.prototype={
Z(){this.a3()
this.Kn()},
Kn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgl(t.a.c),$async$Kn)
case 3:r=e
w=4
return A.b(C.Bj(t.a.c),$async$Kn)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rn(q,new C.e50(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e51(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kn,v)},
zc(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lb(d,e){return this.cKY(d,e)},
cKY(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e55(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lb)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e56(q))
$.eX.mK()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lb,v)},
YK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$YK)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lb(new C.e4Y(t),"Preparing download\u2026"),$async$YK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YK,v)},
YO(d){return this.bTF(d)},
bTF(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$YO)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lb(new C.e4Z(t,d),"Preparing file\u2026"),$async$YO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YO,v)},
ahM(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xP.cq().MW(B.T8,B.uU,!0),$async$ahM)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jJ(o,0,null)
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
case 6:u=A.Hy()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahM,v)},
Zr(d){return this.c39(d)},
c39(d){var w=0,v=A.j(x.H),u=this
var $async$Zr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lb(new C.e5_(u,d),"Restoring family trees\u2026"),$async$Zr)
case 2:return A.h(null,v)}})
return A.i($async$Zr,v)},
Zq(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahM(),$async$Zq)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zr(s),$async$Zq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zq,v)},
a3q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$a3q)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lb(new C.e54(t),"Creating QR code\u2026"),$async$a3q)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3q,v)},
a31(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a31=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DE()){t.zc("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ee(new C.e52(),!0,null,x.N)),$async$a31)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zr(r),$async$a31)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a31,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.C4:B.hY,m=o?D.alp:B.aS,l=o?B.aL:B.bO,k=o?B.aS:B.av,j=new C.dj4(n,m,l,k,o?B.bP:B.bj)
l=A.aH(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.e58(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.diD(!0,B.ju,B.aH,B.aH,q.r?p:q.gcBr(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcxA()
t.push(A.E(C.diD(!s,B.jv,B.b8,B.bh,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.diD(!1,B.hD,B.aV,B.bQ,q.r?p:q.gbTy(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.diD(!1,B.zN,B.at,B.aQ,q.r?p:q.gc36(),j,s,"Upload backup file"),1))
l=A.a([new C.bhu(v,l,p),B.lb,new C.adS(j,"QR restore",p),B.T,t,B.db,new C.adS(j,"Backup files",p),B.T,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lb,new C.adS(j,"One tree",p),B.T],u)
B.d.u(v,J.b9(q.d,new C.e59(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cv(l,p,p,B.a1B,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.o(p,A.A(A.a([K.aVk,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.n(m,p,t,v,s,p,B.n),p,p,p,p,B.CM,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dj4.prototype={}
C.bhu.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kF,28)],x.V)
t=A.ao(p,A.X(B.ve,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.o(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.o(p,D.c4v,B.f,p,p,new A.n(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p4,A.E(A.x(A.a([D.fS6,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.n(p,p,p,v,u,D.ccG,B.n),p,p,p,p,p,p,p,p)}}
C.adS.prototype={
B(d){var w=null
return A.A(A.a([A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bhs.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aF(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eE(A.d1(new A.D(B.a1f,A.x(A.a([A.o(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.n(v,q,s,u,q,q,B.n),q,q,q,q,B.tc,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.n(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bhx.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eE(new A.D(B.eX,A.A(A.a([A.o(v,D.c3H,B.f,v,v,new A.n(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.tc,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hD,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.n(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a0P.prototype={
S(){return new C.aFM()},
gd1(){return this.c}}
C.aFM.prototype={
Z(){this.a3()
this.aaD()},
aaD(){var w=0,v=A.j(x.H),u=this,t
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4G(u.a.c,B.EE),$async$aaD)
case 2:t=e
if(u.c!=null)u.m(new C.e4T(u,t))
return A.h(null,v)}})
return A.i($async$aaD,v)},
ajd(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajd=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e4U(q))
t=4
p=A.huX(q.a.d,B.EE)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atS(n.e,m,l,B.EE,p,n.f),$async$ajd)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e4V(q))
q.c.K(x.q).f.T(D.fsO)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e4W(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajd,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.nz:B.qr,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h7C,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qi(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.o(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.i,0,B.p),B.f,q,q,new A.n(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.by,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcxj()
if(u)u=B.KQ
else u=A.X(r.e===!0?B.hd:B.aqb,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.ep(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hg,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ig,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.T)
w.push(new A.a5(1/0,q,A.bJ(B.Bc,q,new C.e4X(d),A.bp(B.aV,q,q,q,q,B.hg,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0Q.prototype={
S(){return new C.bmN(A.zS(B.yO,B.oe,B.vn))}}
C.bmN.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h_k,w,w,w,1,w,!0),B.w,A.zR(this.d,B.bY,new C.e5a(this,d)),w,!1,!1,w,w)}}
C.b0x.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.SD,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lX.prototype={}
C.a7C.prototype={
S(){return new C.bmr(null,null)}}
C.bmr.prototype={
Z(){var w=this,v=null
w.a3()
w.d=A.bo(v,B.t2,v,1,v,w)
w.e=A.bo(v,B.nD,v,1,v,w)
w.a.toString
w.d.cK(0)
w.e.cK(0)},
bz(d){var w,v,u=this
u.bK(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bzJ()},
B(d){var w,v,u=this,t=B.d.dM(D.a7g,new C.dR2(u),new C.dR3())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cE8(A.c6(new A.he(A.a([w,v],x.dS)),new C.dR4(u,t),null),!0)}}
C.bmq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4h(d,e)
break
case"house":p.mo(d,e,D.dkp)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdk()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mu(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BG(d,e,12)
p.yO(d,e,B.lk,5,14)
break
case"grocery":p.cm7(d,e)
break
case"calculator":p.clP(d,e)
break
case"lumber":p.cmf(d,e)
break
case"kitchen":p.cma(d,e)
break
case"landscape":p.mo(d,e,D.dl0)
s=new A.aG($.S().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ce(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ce(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bx())
w=A.L()
w.r=B.ep.j(0.85).gp(0)
d.af(s,w)
p.BG(d,e,8)
p.yO(d,e,B.iz,4,18)
break
case"plumbing":p.cmo(d,e)
break
case"electrical":p.mo(d,e,D.dwT)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aF(new A.a4(0,0,0+e.a,0+e.b),u)
p.mu(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mu(d,e,B.or.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BG(d,e,10)
break
case"store":p.cmz(d,e)
break
case"paint_remodel":p.cmj(d,e)
break
case"roofing":p.cmr(d,e)
break
case"warehouse":p.cmG(d,e)
break
case"vehicles":p.cmE(d,e)
break
case"farm":p.cm1(d,e)
break
case"restaurant":p.cmq(d,e)
break
case"tools":p.cmC(d,e)
break
case"wallet":p.cmF(d,e)
break
case"concrete":p.clV(d,e)
break
case"blueprint":p.clN(d,e)
break
default:p.b4h(d,e)}},
mo(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).aD(0,v))
d.aF(v,w)},
mu(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdk()/2-h
$.S()
w=A.L()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bW(t,s),u,u+0.1439896632895322-u,!1,w)}},
yO(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdk()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BG(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4h(d,e){var w,v=this
v.mo(d,e,D.dv7)
w=v.c
v.mu(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mu(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bRu(d,e,B.hN,w)
v.yO(d,e,B.c.j(0.7),6,8)},
bRu(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aF(new A.a4(16,r,t,r+3),w)}},
cm7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.cyu)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.div[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mu(d,e,B.c.j(0.35),w,16)
l.yO(d,e,B.iz,5,12)},
clP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mo(d,e,D.cyC)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdk()
$.S()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fD(h,B.cx,h,h,h,h,B.a7,B.c1,h,B.dK,B.c2)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dmQ[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb4(0,new A.ev(r,h,h,B.cN,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cyE[o]
l=B.kO.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb4(0,new A.ev(m,h,h,B.cN,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mu(d,e,B.c.j(0.35),w*1.5,14)
i.mu(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.mu(d,e,B.on.j(0.4),r*2.8,22)
i.yO(d,e,B.pl,8,10)
i.BG(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.S()
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cmf(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,N.aBZ)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.by(new A.a4(20,r,u,r+10),B.iF)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=A.ap(B.fZ,B.oh,(s+1)/2).gp(0)
d.ar(q,p)}o.mu(d,e,B.fZ.j(0.35),w,15)
o.BG(d,e,8)},
cma(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.dj0)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mu(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yO(d,e,B.qg,4,14)},
cmo(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mo(d,e,D.d6N)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yO(d,e,B.pp,6,12)
n.mu(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cmz(d,e){var w,v,u,t,s,r,q,p=this
p.mo(d,e,D.cMp)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.by(new A.a4(r,14,r+u,22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.fB,B.bL,(s+1)/2).gp(0)
d.ar(r,q)}p.mu(d,e,B.c.j(0.3),w,16)
p.BG(d,e,8)
p.yO(d,e,B.wn,5,13)},
cmj(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.ddm)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.by(new A.a4(r,q,r+8,q+(18+s*22)),B.ir)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=[B.ix,B.dy,B.bL,B.ew][t].j(0.85).gp(0)
d.ar(q,r)}this.mu(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cmr(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.daD)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yO(d,e,B.cA,7,11)},
cmG(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.cPb)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.by(new A.a4(q,p,q+(t-s*8),p+16),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.ar(p,q)}this.mu(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cmE(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dBf)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.by(new A.a4(s,r,s+28,r+8),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.ar(r,q)}this.BG(d,e,6)},
cm1(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dhx)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.L()
s.r=B.or.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.hL.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mu(d,e,B.or.j(0.35),w,14)},
cmq(d,e){var w,v,u,t,s,r,q=this
q.mo(d,e,D.dkd)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bX(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c0(s,r)}q.yO(d,e,B.qg,5,16)
q.BG(d,e,7)},
cmC(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dyx)
w=o.c
v=w*3.141592653589793
o.mu(d,e,B.oh.j(0.55),v*3,10)
o.mu(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.oh.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cmF(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dC_)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.by(new A.a4(q,p,q+36,p+22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.iz,B.or,r).gp(0)
d.ar(p,q)}o.BG(d,e,9)
o.mu(d,e,B.c.j(0.4),w*2.2,12)},
clV(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dpP)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.r(v,u),34)
$.S()
s=A.L()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
clN(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dlk)
$.S()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.S()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aF(new A.a4(0,q,0+v,q+6),u)
this.mu(d,e,B.lk.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auD.prototype={
a0I(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSF(),$async$a0I)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9U(s),$async$a0I)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0I,v)},
ahN(d){return this.coZ(d)},
coZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ivT(d),$async$ahN)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahN,v)},
B(d){var w,v,u=null,t=A.O(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jZ:B.iO
w=x.p
v=A.a([C.aT2(!0,B.rt,1/0,B.qN,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.n(u,u,u,u,u,new A.a7(B.aY,B.b3,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bk,new A.bK(B.aY,u,u,new A.D(B.t5,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCY,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.de(D.bY2,u,D.fOf,new C.cpR(this,d),A.bp(B.aV,u,u,u,B.c,u,B.k6,u,u,u,u,B.ch)),1),B.ae,A.E(A.ep(D.c5O,u,D.h2w,this.gcfR(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k6,u,u,D.b6M,u,u,u,B.ch)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fG(1.7777777777777777,A.aF(!1,B.a3,!0,B.rt,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aNU.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.aVZ.prototype={}
C.aVY.prototype={}
C.aU0.prototype={}
C.a_t.prototype={
S(){return new C.aAX()}}
C.aAX.prototype={
Z(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bb("",B.b7,B.aP)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(w,v)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
L0(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.T(D.ftj)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aVZ(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.ef:B.c,k=A.l(20),j=A.o(n,D.c5t,B.f,n,n,new A.n(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aH(n,n,n,n,A.X(B.cB,m?B.bu:B.bj,n,n,n,n),n,n,n,new C.daa(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hvc(new C.dab(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jZ:B.iO
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dac(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,B.KZ,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eI(n,l,new A.cN(B.m4,A.ca(A.x(A.a([j,B.aO,i,B.ax,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.dad(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.ba(A.l(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bJ(D.h2M,n,o.ga3M(),A.bp(B.aV,n,n,n,B.c,n,B.co,n,new A.ba(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,n,B.CO,n,n,B.ah),n),n,n,n,R.CP,n,B.d7,n,new A.ba(k,B.a1),n)}}
C.a_s.prototype={
S(){return new C.aAW()}}
C.aAW.prototype={
Z(){this.a3()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.at(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
L0(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.T(D.fqV)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aVY(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.ef:B.c,n=A.l(20),m=A.o(q,D.c1N,B.f,q,q,new A.n(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aH(q,q,q,q,A.X(B.cB,p?B.bu:B.bj,q,q,q,q),q,q,q,new C.da6(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.X(B.apY,B.aV.j(0.9),q,q,q,18)
l=A.o(q,A.A(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.n(l,q,v,w,q,q,B.n),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jZ:B.iO
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.da7(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lc,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eI(q,o,new A.cN(B.m4,A.ca(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.da8(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.ba(A.l(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bJ(D.h9T,q,this.ga3M(),A.bp(B.bQ,q,q,q,B.c,q,B.co,q,new A.ba(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.CO,q,q,B.ah),q),q,q,q,R.CP,q,B.d7,q,new A.ba(n,B.a1),q)}}
C.ZZ.prototype={
S(){return new C.azC()}}
C.azC.prototype={
Z(){var w,v=this
v.a3()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.at(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.at(new A.bb("1",B.b7,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.at(B.aw,w)
v.r!==$&&A.aQ()
v.r=new A.at(B.aw,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.V$=$.aw()
u.R$=0
u=v.e
u===$&&A.c()
u.V$=w
u.R$=0
u=v.f
u===$&&A.c()
u.V$=w
u.R$=0
u=v.r
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
gKi(){var w,v=this.e
v===$&&A.c()
w=A.cW(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakY(){var w=this.f
w===$&&A.c()
w=A.cW(B.a.i(w.a.a))
return w==null?0:w},
gb76(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRi(d){var w,v=B.h.D(this.gKi()+d,0.25,999999),u=B.h.fK(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.h.M(v))
else{u=B.h.ad(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb4(0,u)
this.m(new C.cIf())},
aAh(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jZ:B.iO,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bA(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.afd),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cfS(d,e,f){return this.aAh(d,e,f,null)},
L0(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakY()<=0){s.c.K(x.q).f.T(D.fvd)
return}r=s.c
r.toString
v=s.gKi()
u=s.gakY()
t=s.gb76()
A.a6(r,!1).N(new C.aU0(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.o(o,D.bVZ,B.f,o,o,new A.n(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aH(o,o,o,o,A.X(B.cB,n?B.bu:B.bj,o,o,o,o),o,o,o,new C.cIl(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAh(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Q6),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.KZ,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jZ:B.iO
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.x1,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIm(p),o,o,o,o,o,B.ch)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c7m,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIn(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.o(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.X(B.i_,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIo(p),o,o,o,o,o,B.ch)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.n(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAh(m,"Amount","0.00",B.hC),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIp(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.ddV,new C.cIq(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.T,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cfS(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cIr(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lc,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKi()===B.h.fK(p.gKi())?B.h.M(p.gKi()):p.gKi()
s=p.gb76()
r=A.Bl(p.gakY())
i.push(A.o(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bGP(p.gKi()*p.gakY(),B.b2,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bx)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.ba(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cIs(d),h),1),B.as,A.E(A.de(D.atr,o,D.h5N,p.ga3M(),A.bp(B.aV,o,o,0,B.c,o,B.co,o,new A.ba(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eI(o,l,new A.cN(B.Mp,A.ca(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,o,A5.ta,o,o,B.ah),o),o,o,o,B.OH,o,B.d7,o,new A.ba(k,B.a1),o)}}
C.a2B.prototype={
S(){return new C.bzf()}}
C.bzf.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bb(w,B.b7,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?B.ef:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jZ:B.iO
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.foE(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.ds,new C.foF(d),s),1)
r=A.bp(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.CO,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.foG(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d7,s,new A.ba(p,B.a1),s)}}
C.acU.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gp.prototype={
S(){return new C.bzd(null,null)}}
C.bzd.prototype={
Z(){var w,v=this
v.a3()
w=A.bo(null,D.bCO,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bC3()},
gbDF(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b2],x.O)
case 2:return A.a([B.bv,B.aV,B.b2],x.O)
case 3:return A.a([B.aH,B.cj,B.jG],x.O)
case 4:return A.a([B.fK,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b2],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.c()
return new A.e6(A.c6(v,new C.foC(this,new C.ui(w.ax.a===B.I)),null),null)}}
C.azv.prototype={
S(){return new C.bze(null,null)}}
C.bze.prototype={
Z(){var w,v=this
v.a3()
w=A.bo(null,B.nE,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bC4()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.foD(this),null)}}
C.bzc.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aG($.S().r,B.aj,null,null,A.a([],x.v))
u.E(new A.j9(v))
w=A.L()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.ar(v,w)
w=A.L()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.BN(u)
t=A.a([],x.U)
w=new A.uR(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jH(y.B));--r
q=new A.BO(w,r)
w.jP()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUT(d,q,r,o,0,0.2,4.2,0.92)
p.aUT(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUT(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.hSs(e.a.a,e,t,t+f*i,!0),r=A.ahY(s.glg().a.getBounds())
$.S()
w=A.L()
w.b=B.aa
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IT,null).aD(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aQ1.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aQ2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.ui.prototype={}
C.auC.prototype={
S(){return new C.aHi()},
ge3(){return this.c}}
C.aHi.prototype={
Z(){var w=this
w.a3()
w.d=w.a.d
w.aiE()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mi(w,v)
this.a2()},
aiE(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aiE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFe(t.c,t.d.a),$async$aiE)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eXj(u,s))
return A.h(null,v)}})
return A.i($async$aiE,v)},
R5(){var w=0,v=A.j(x.H),u=this,t,s
var $async$R5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eXa(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mi(t,s),$async$R5)
case 2:if(u.c!=null)u.m(new C.eXb(u))
return A.h(null,v)}})
return A.i($async$R5,v)},
RE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eXh(t,new C.ui(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RE)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9U(q),$async$RE)
case 6:case 5:t.m(new C.eXi(t,r))
w=7
return A.b(t.R5(),$async$RE)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RE,v)},
WR(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ivE(r),$async$WR)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eX5(t,new C.rs(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.R5(),$async$WR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WR,v)},
ckY(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hJW(t,new C.eX9(u),w,v)},
acr(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.o(w,w,B.f,w,w,new A.n(w,w,new A.bH(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b6y,w,w,B.n),w,22,w,w,w,w,w,22)},
abt(d){return this.bPJ(d)},
bPJ(d){var w=0,v=A.j(x.H),u=this
var $async$abt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eX8(u,d))
w=2
return A.b(u.R5(),$async$abt)
case 2:return A.h(null,v)}})
return A.i($async$abt,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.c6:B.hY,d=A.l(8),a0=A.X(P.a2Q,f?B.bu:B.bj,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.Hp,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eXk(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bv(A.l(22),C.aT2(!0,A.l(22),1/0,B.qN,g,d,1/0),B.aq),A.ao(10,A.de(D.c_H,g,D.h8a,h.gb51(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.ho,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eS,22),new A.ac(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.o(g,A.o(g,A.bv(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aT2(!0,A.l(16),1/0,B.Pz,g,r.c,1/0),new A.bN(new A.n(g,g,g,g,g,new A.a7(B.aY,B.b3,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bk,g,g),A.ao(g,h.acr(!0),g,g,8,g,8,g),A.ao(g,A.cET(h.acr(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cET(h.acr(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cET(h.acr(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.de(D.bWA,g,D.h1u,h.gb51(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.ho,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.n(g,g,g,d,v,D.c93,B.n),g,g,g,g,B.lQ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bhy,B.ol,B.hl],u):A.a([B.b2,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eS,24)],t)
r=A.l(22)
p=A.ao(g,A.X(B.js,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.o(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(o,g,m,n,g,g,B.n),g,g,g,g,B.hm,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGP(h.d.gxN(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.ha.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cM,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.o(g,A.bv(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bHI,A.A(A.a([o,B.as,A.aF(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eE(new A.D(M.wF,A.x(A.a([A.o(g,D.at0,B.f,g,g,new A.n(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fE,D.fR5],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.n(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gckX(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.de(B.a4H,g,D.fOW,h.gbE8(),A.bp(B.aV,g,g,g,B.c,g,B.hP,g,new A.ba(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.X(B.a3b,f?B.bu:B.bj,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.o(g,A.x(A.a([t,B.T,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.n(w,g,u,v,g,g,B.n),g,g,g,g,B.qJ,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eXl(h,new C.ui(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.yU,A.as(A.n0(g,f?B.bu:B.bj,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.CF,a0,g),A.E(A.ca(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,B.z6,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHP(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.l(16),m=A.o(u,u,B.f,u,u,D.b9j,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.o(u,A.X(s?B.ii:B.h4,B.b2,u,u,u,20),B.f,u,u,new A.n(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd0D()
v=A.Bl(d.d)
B.d.u(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.o(u,C.bGP(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.n(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.ho,u,u,u)
w=x.p
return A.o(u,A.bv(n,new A.EQ(A.A(A.a([m,A.E(new A.D(B.amT,A.A(A.a([l,B.bc,t,B.ae,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.bu:B.bj).j(0.75),u,u,u,20),u,u,u,new C.eX6(this,d),u,u,u,u,u,B.ch)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b89,new A.n(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.aeY.prototype={
F4(d){return this.bR6(d)},
bR6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pD(d,o,!1),$async$F4)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bO(A4.Cz,null,x.H),$async$F4)
case 4:s=t.d
w=5
return A.b(C.fYV(!0,o,s),$async$F4)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hl(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F4)
case 6:p=f
w=7
return A.b(A.pC(o,!1),$async$F4)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F4,v)},
a0K(d){return this.cBs(d)},
cBs(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pD(d,s,!1),$async$a0K)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hE(d,new C.auw(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pC(s,!1),$async$a0K)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0K,v)},
R6(d){return this.cxv(d)},
cxv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$R6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hE(d,D.aML,!0,"NgmyWorksheetProjectScan",x.N),$async$R6)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGQ(s),$async$R6)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.T(D.fuk)
w=1
break}q=C.hkD(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$R6)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$R6,v)},
a0L(d){return this.cJO(d)},
cJO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bGk(),$async$a0L)
case 3:s=f
if(s==null){w=1
break}r=C.hkD(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0L)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0L,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.ui(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kF,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wE,A.o(v,A.x(A.a([w.cA1(d,t,s),new A.D(D.bH5,A.x(A.a([w.b81(t,"QR restore"),B.T,A.A(A.a([w.b30(t,!0,B.ju,B.aH,B.aH,new C.eXn(w,d),"Show to scan","QR code"),B.as,w.aAi(t,B.jv,B.b8,B.bh,new C.eXo(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.db,w.b81(t,"Backup files"),B.T,A.A(A.a([w.aAi(t,B.hD,B.aV,B.bQ,new C.eXp(w,d),"Full copy","Backup file"),B.as,w.aAi(t,B.zN,B.at,B.aQ,new C.eXq(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.n(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cA1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.ff,B.cW,B.fX],k):A.a([B.b2,B.aV,B.bQ],k)
w=A.ao(l,A.X(B.ve,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.o(l,l,B.f,l,l,new A.n(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kA,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.o(l,C.aT2(!0,A.l(13),64,D.bRM,l,r.c,64),B.aq,l,l,new A.n(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,G.acy,l,l,l)
r=C.bGP(r.gxN(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.o(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bHt,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.ax,t,B.P,A.A(A.a([r,B.ae,A.o(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.n(q,l,o,p,l,l,B.n),l,l,l,l,B.fN,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eXm(d),l,l,l,A.n4(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,B.aV7,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b81(d,e){var w=null,v=A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b30(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.alp:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.o(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.n(u,r,s,t,r,r,B.n),r,r,r,r,B.tc,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eE(new A.D(B.a1f,A.x(A.a([t,B.af,u,B.bF,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.n(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAi(d,e,f,g,h,i,j){return this.b30(d,!1,e,f,g,h,i,j)}}
C.auw.prototype={
S(){return new C.bo9()}}
C.bo9.prototype={
Z(){this.a3()
this.agx()},
agx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGR(p.c,p.d),$async$agx)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eX0(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eX1(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agx,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.C4:B.hY,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eK,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eX2(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tW],u),B.l,h,B.e,B.i,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.ff,B.cW,B.fX],s):A.a([B.b2,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.K,h,h)
p=C.bGP(p.gxN(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.o(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.o(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(n,h,h,m,h,h,B.n),h,h,h,h,B.fN,h,h,h)],u),B.l,h,B.b9,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.n(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,B.a1A,h,h,1/0)
t=g?D.bt8:B.c
q=A.l(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.W0,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eyN)
else{m=A.l(20)
l=A.K(B.bm,B.r,1)
o.push(A.o(h,A.qi(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.n(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bT,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.PP:B.Qm
k=A.X(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.o(h,A.A(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.n(n,h,l,m,h,h,B.n),h,h,h,h,B.hP,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(B.OV,e,h),A.E(A.ca(A.x(A.a([s,B.aO,A.o(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.n(t,h,p,q,r,h,B.n),h,h,h,h,B.uQ,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,B.ao2,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auB.prototype={
S(){return new C.aHh(A.zS(B.Oa,B.oe,B.vn))}}
C.aHh.prototype={
t(){this.d.t()
this.a2()},
aPf(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
cgK(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.itG(t)
if(s!=null){this.aPf(s)
return}r=C.hzM(t)
if(r!=null)q=A.cR(r,p,0)
else q=!1
if(q){this.aPf(B.a.i(B.a.b_(r,B.a.cm(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aH(t,t,t,t,A.X(u.f?B.v1:B.PX,t,t,t,t,t),t,t,t,new C.eX4(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C4,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h1m,t,t,t,1,t,!0),q=A.zR(u.d,B.bY,u.gcgJ()),p=A.l(28)
p=A.as(A.o(t,t,B.f,t,t,new A.n(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c5(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.o(t,D.h07,B.f,t,t,new A.n(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMe.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P8.prototype={
S(){return new C.aHj(D.aey,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aHj.prototype={
gcHB(){return J.bHZ(this.e,0,new C.eXN())},
Z(){this.a3()
$.aU.bZ$.push(this)
this.wr()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.fW)this.wr()},
wr(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wr=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DD(q.a.c).dg(0,B.k5),$async$wr)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eXJ(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eXK(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wr,v)},
IE(d){return this.bNQ(d)},
bNP(){return this.IE(null)},
bNQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ivG(l,d),$async$IE)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lD(l,r,q,D.dq4,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mi(t.a.c,p),$async$IE)
case 4:o=f
w=5
return A.b(t.wr(),$async$IE)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.T(D.fro)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.T(D.ftd)
else n.K(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F9(m)
case 1:return A.h(u,v)}})
return A.i($async$IE,v)},
F9(d){return this.ckJ(d)},
ckJ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.auC(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F9)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mi(u.a.c,t),$async$F9)
case 5:case 4:w=6
return A.b(u.wr(),$async$F9)
case 6:return A.h(null,v)}})
return A.i($async$F9,v)},
wc(d){return this.c3b(d)},
c3b(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGk(),$async$wc)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aML,!0,"NgmyWorksheetProjectScan",x.N),$async$wc)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGQ(q),$async$wc)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hkD(s)
w=15
return A.b(C.Mi(t.a.c,p),$async$wc)
case 15:o=f
w=16
return A.b(t.wr(),$async$wc)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.T(D.fti)
w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F9(p)
case 1:return A.h(u,v)}})
return A.i($async$wc,v)},
OI(d){return this.bMs(d)},
bMs(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eXu(d),s,null,!0,!0,x.y),$async$OI)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pa(t.a.c,A.a([],x.D)),$async$OI)
case 6:w=7
return A.b(t.wr(),$async$OI)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.frt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OI,v)},
ckW(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eXD(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8E(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jZ
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.o(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.n(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.o(r,A.x(A.a([s,B.af,t,B.bF,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.n(w,r,u,v,r,r,B.n),r,r,r,r,B.t8,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1e(d,e){return this.ckK(d,e)},
ckK(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1e=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eXy(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1e)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hJW(r,new C.eXz(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OK(d,e),$async$a1e)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1e,v)},
b5E(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.o(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.n(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CM,A.A(A.a([s,B.bc,t,A.X(B.eI,w?B.bu:B.bj,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
crI(d,e,f,g,h,i){return this.b5E(!1,d,e,f,g,h,i)},
OK(d,e){return this.bMC(d,e)},
bMC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.ln(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OK)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bF0(t.a.c,d.a),$async$OK)
case 6:w=7
return A.b(t.wr(),$async$OK)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OK,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=n?B.c6:B.hY
if(p.f)n=D.bfg
else{w=A.aE(d,B.dD,x.w).w
v=p.bGW(m)
u=p.c2f(m)
t=p.gbE1()
if(n)s=B.jZ
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gp(A.o(o,A.A(A.a([p.aDR(B.Py,"Projects",m,D.aey),p.aDR(B.uW,"Cashier",m,D.b31),p.aDR(B.HH,"Family Tree",m,D.hOA)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.aey){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4,new C.azv(p.gaTE(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aB,p.crK(m)],q))}else{n=p.a
if(v===D.b31)t.push(new C.aqn(n.c,m,o))
else{v=p.r
t.push(new C.arB(n.c,n.d,n.e,n.f,new C.eXQ(p),new C.eXR(p),new A.bl(v,x.b4)))}}n=A.ca(A.x(t,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.P(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGW(d){var w=null,v=A.l(8),u=d.a,t=A.X(P.a2Q,u?B.bu:B.bj,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kB,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXr(this),w,w,w,w,w,w,w)},
gbE1(){switch(this.d.a){case 0:return D.adG
case 1:return D.hDq
case 2:return D.adH}},
c2f(d){var w=null,v=A.l(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.o(w,D.c1D,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bM5,A.aF(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.o(w,D.bZY,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXv(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gp(A.o(w,A.x(A.a([new A.D(B.Hi,s,w),A.o(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bl(this.gcHB()),w,w,w,w,w,w,D.fL7,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(r,w,w,q,w,w,B.n),w,w,w,B.t7,B.jr,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hDp,w)},
aDR(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bj
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bj
return A.E(A.aF(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cU(u,A.A(A.a([w,B.e7,new A.df(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.i,0,u,u),u,u,B.ck,new A.n(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.Hq,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eXM(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
crK(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.o(p,D.c_4,B.f,p,p,new A.n(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eS,28)],x.V),D.cbB,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gp(A.o(p,A.x(A.a([t,B.db,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e4,A.A(A.a([A.E(q.aVe(B.jv,"Scan QR",new C.eXG(q),d),1),B.as,A.E(q.aVe(B.zN,"Upload file",new C.eXH(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bJ(D.hbR,p,q.gaTE(),A.bp(B.aV,p,p,p,B.c,B.hg,p,p,new A.ba(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bIz,1.05,D.adG,p)}w=J.b9(q.e,new C.eXI(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gp(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.adG,p)},
aVe(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,t,!0,A.o(w,A.x(A.a([A.X(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fJj,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.n(w,w,r,s,w,w,B.n),w,w,w,w,B.a13,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
crJ(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.l(14),n=t?B.bu:B.bj
n=A.bv(B.Y8,new A.fG(1.7777777777777777,C.aT2(!0,B.fk,1/0,B.Py,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bl(d.gxN()),u,u,u,u,u,u,D.fHg,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.o(u,A.aF(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aH(u,u,u,u,A.X(A8.a3V,t?B.bu:B.bj,u,u,u,u),u,u,u,new C.eXE(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eXF(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.n(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bB0.prototype={}
C.rs.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd0D(){var w,v,u,t,s=this.c
if(s===B.h.fK(s))w=B.o.v(B.h.M(s))
else{v=B.h.ad(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lD.prototype={
gxN(){return B.d.cB(this.d,0,new C.cHz())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,aa<q,@>>")
v=A.C(new A.N(v,new C.cHy(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bg3(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lD(w.a,w.b,v,u,w.e)},
bfM(d){return this.bg3(d,null)},
TT(d){return this.bg3(null,d)}}
C.Iw.prototype={
a7(){return"FamilyGender."+this.b}}
C.i4.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hF2(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGB(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i4(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amz.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gaqY(){var w=this.f
return new A.Y(w,new C.bTK(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,aa<q,@>>")
v=A.C(new A.N(v,new C.bTJ(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ilS(w.y),"games",w.z],x.N,x.z)},
x8(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bg2(d,e){var w=null
return this.x8(w,w,w,d,e,w,w,w,w)},
cQY(d,e,f,g,h,i,j){return this.x8(d,e,null,f,g,h,i,j,null)},
aGG(d,e){var w=null
return this.x8(w,w,w,w,d,w,w,e,w)},
cR_(d,e,f,g,h,i,j,k){return this.x8(d,e,null,f,g,h,i,j,k)},
cPt(d){var w=null
return this.x8(w,w,w,w,w,w,w,d,w)},
cPR(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,d)},
bfG(d){var w=null
return this.x8(w,w,d,w,w,w,w,w,w)},
aGr(d){var w=null
return this.x8(w,w,w,w,w,d,w,w,w)},
cQv(d,e,f){var w=null
return this.x8(w,d,w,w,e,w,w,f,w)},
cPg(d){var w=null
return this.x8(w,w,w,d,w,w,w,w,w)},
cQ2(d,e){var w=null
return this.x8(d,w,w,w,w,w,e,w,w)}}
C.cHA.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cHB.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJq.prototype={}
C.bbz.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bbz()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b4(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bby.prototype={
gwZ(){return!0},
gGJ(){return this.z.b<this.b.length},
aWV(d){switch(0){case 0:return d.a.c}},
aWB(d){switch(0){case 0:return d.a.d}},
bWH(d,e){switch(0){case 0:return new A.hY(d,e)}},
bW4(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hh(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iT(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.If(b4)
switch(0){case 0:v=b5.b
u=new A.kW(0,v,0,1/0)
t=w===B.VT
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hh(b4,u,!0)
f=b1.aWV(g)
f.toString
e=b1.aWB(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJq(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJq(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hY(m,l))
a0=q.a
a1=q.b
b1.a=new A.iT(0,0,a0,a1)
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
for(q=B.d.fN(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWV(g)
e=b1.aWB(g)
e.toString
a9=b1.bW4(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWH(a6,a3+a9)
b0=g.a
g.a=new A.iT(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iy()
v=A.dr()
u=r.a
v.ec(u.a,u.b,0,1)
w.pv(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nG(0)},
Hf(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iy(){return this.z}}
C.bzg.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i4)","~()","Q(kZ)","Q(nt)","aa<q,@>(kZ)","H(kZ,kZ)","H(i4,i4)","q(i4)","kZ(aa<@,@>)","Q(lD)","nt(aa<@,@>)","aa<q,@>(nt)","Q(uT)","uT()","H(i4)","ai<i4>()","Q(zz)","a0v(Z)","q?(i4)","eS<q?>(i4)","aA<~>(lD)","Q(rs)","aa<q,@>(i4)","i4(aa<@,@>)","H(lD,lD)","~(bf)","v(oO)","Q(agg)","H(H,aaj)","Uf(Z)","Q(MW)","Q(uS)","~(i4)","q(q)","WA(Z)","Ue(Z)","aeD(Z)","a_r(Z)","i4(i4)","cK(bC<q,GF>)","cK(L_)","a_V(Z)","H?(i4)","i4()","Q(L_)","D(i4)","~(Iw)","a_R(Z)","v(Iw,q,a_)","Q(ag9)","bC<q,ai<aa<q,@>>>(q,ai<nt>)","a_T(Z)","+count,id,name(H,q,q)(kZ)","kZ(kZ)","q(kZ)","a0Q(Z)","Q(lX)","lX()","ZZ(Z)","a2B(Z)","a_t(Z)","a_s(Z)","~(H)","~(q,lt?)","v(rs)","aeY(Z)","~(nQ)","aA<~>([q?])","F(F,lD)","v(lD)","F(F,rs)","aa<q,@>(rs)","rs(aa<@,@>)","ai<lt>()","uS()","q(V)","lD(aa<@,@>)","cw(Iv)","q(lD)","aa<q,@>(lD)","H(nt,nt)","kZ(aa<q,@>)","a0P(Z)"])
C.fR8.prototype={
$1(d){return d.a+" "+d.b},
$S:131}
C.fR7.prototype={
bpl(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rj(s,d,B.i1,"book",B.H5),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.M4(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpl(d)},
$S:275}
C.fR9.prototype={
$1(d){return d.b},
$S:131}
C.h08.prototype={
$1(d){var w=null
return A.eI(w,B.L,new A.QC(this.a,this.b,w),w,w,0,B.a1g,w,B.d7,w,w,w)},
$S:48}
C.fEa.prototype={
$1(d){return d!=null},
$S:213}
C.fEb.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:213}
C.fEg.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:181}
C.fOR.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hi(w,B.tN,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wO
return new A.oc(D.bDR,A.ab9(A.a([new A.h_(130,w,v),new A.zy(1,B.HA,A.fe(e,w,w,w,A.hi(w,g==null?D.eBa:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yL,B.lW))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2200}
C.fOQ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w1(999)
f=A.xG(A.lS(h,A.fe("Cashier",h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kX(D.eB1,h,f,B.i6,h),h,h,D.bEk,h))
w=A.xG(A.fe("Debt receipt",h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xG(A.fe(C.xm(new A.V(Date.now(),0,!1),!0),h,h,h,D.ac6,h))
u=A.w1(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.ac6,h)
q=A.w1(10)
p=x.Z
u=A.lS(h,A.zq(A.a([s,new A.h_(h,2,h),r,new A.h_(h,10,h),A.lS(h,A.zq(A.a([A.fe("Amount owed",h,h,h,D.ac6,h),new A.h_(h,2,h),A.fe(A.Bl(t.c),h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rZ,B.lW),h,new A.kX(B.pR,h,q,B.i6,h),h,h,D.bDx,1/0)],p),B.rZ,B.lW),h,new A.kX(B.aO7,h,u,B.i6,h),h,h,D.bFx,1/0)
q=new A.nS(D.eB4,0.9,B.lg)
r=A.w1(12)
s=i.c
o=s.$2("Original due",C.xm(t.r,!1))
n=s.$2("Current due",C.xm(t.f,!1))
m=i.d
l=new A.nS(m,1.1,B.lg)
k=A.w1(8)
j=i.a
k=A.a([o,n,new A.h_(h,6,h),A.lS(h,A.xG(A.fe(t.gaNN(),h,h,h,A.hi(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kX(h,new A.q5(l,l,l,l),k,B.i6,h),h,h,D.bEt,1/0),new A.h_(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AI))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AI))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hi(h,B.tN,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TO>")
o=A.C(new A.N(o,new C.fOP(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h_(h,4,h),n,new A.h_(h,6,h),new C.bby(5,5,new C.bbz(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h_(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h_(h,8,h),w,new A.h_(h,3,h),v,new A.h_(h,16,h),u,new A.h_(h,10,h),A.lS(h,A.zq(k,B.yL,B.lW),h,new A.kX(h,new A.q5(q,q,q,q),r,B.i6,h),h,h,B.amX,1/0)],p)
w=j.a
if(w!=null){v=new A.nS(B.K7,1,B.lg)
B.d.u(f,A.a([new A.h_(h,16,h),A.fe("Debtor signature",h,h,h,A.hi(h,B.tN,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.h_(h,6,h),A.lS(h,new A.IP(w,B.Yl,h,h),h,new A.kX(h,new A.q5(v,v,v,v),A.w1(6),B.i6,h),82,h,B.OS,1/0)],p))}f.push(new A.h_(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fzy,h))
f.push(new A.h_(h,18,h))
f.push(A.xG(A.fe("NGMY.ORG",h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:373}
C.fOP.prototype={
$1(d){var w=null,v=new A.nS(D.K8,0.7,B.lg),u=A.w1(999)
return A.lS(w,A.fe(C.xm(d,!1),w,w,w,A.hi(w,D.K8,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kX(w,new A.q5(v,v,v,v),u,B.i6,w),w,w,D.bK_,w)},
$S:2201}
C.c96.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.o(w,A.d(C.xm(d,!1),w,w,w,w,w,w,D.fGI,w,w,w),B.f,w,w,new A.n(v,w,t,u,w,w,B.n),w,w,w,w,B.eQ,w,w,w)},
$S:2202}
C.h0F.prototype={
$1(d){var w=null,v=A.aE(d,B.bX,x.w).w,u=A.l(26),t=A.aH(w,w,w,w,D.c2C,w,w,w,new C.h0C(d),w,w,w,w,w,B.ch),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a3,!0,u,new A.D(B.a14,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.df(1,B.cl,A.ca(A.x(A.a([new A.e6(new C.b0z(r,w),s),B.T,A.A(A.a([A.E(A.ep(B.zV,w,D.h85,new C.h0D(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fi,w,new A.ba(A.l(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.de(B.a4x,w,D.h4u,new C.h0E(r,d),A.bp(B.b2,w,w,w,B.c,w,B.fi,w,new A.ba(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,A_.a1s,w,B.d7,w,w,w)},
$S:48}
C.h0C.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h0D.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lX(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.hf),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dF.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aA(o,0,32)
w=5
return A.b(A.rm(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h0E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fVI(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h0x.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eI(w,B.av,A.x(A.a([new A.D(D.bFl,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nf,w,w,w),1),A.aH(w,w,w,w,B.lt,w,w,w,new C.h0v(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.df(1,B.cl,new A.D(B.f3,A.bv(A.l(14),A.fX(t,B.z,w,w,B.cn,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Ov,new A.a5(1/0,w,A.de(B.oP,w,D.aYt,new C.h0w(t,this.c,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.OI,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:48}
C.h0v.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h0w.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rm(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h0J.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.av,new A.D(D.bFt,A.x(A.a([A.A(A.a([D.bLa,A.aH(w,w,w,w,B.lt,w,w,w,new C.h0H(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.P,new A.e6(A.bv(A.l(14),A.o(w,A.b5(w,w,w,new C.bdL(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.de(B.oP,w,D.aYt,new C.h0I(t,s,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:48}
C.h0H.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h0I.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lX(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.hf),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aA(p,0,32)
r=J.eQ(B.dF.gaS(s))
w=5
return A.b(A.rm(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJ5.prototype={
$1(d){return d.a===this.a},
$S:267}
C.dRV.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dRG.prototype={
boz(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dRJ(s,q,e),p,!0,!0,!1,B.Kq,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dRK(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.boz(d,e)},
$S:2203}
C.dRJ.prototype={
$1(d){var w,v=null,u=this.c===B.xm,t=u?D.dxa:D.dsC
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.ant,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iz(!0,v,v,B.y,D.fq2,new C.dRI(this.a,w,t,d),t.length,v,B.e0,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:26}
C.dRI.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bu:B.bj).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.o(B.z,C.b0y(r,26),B.f,s,s,new A.n(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dRH(t.d,r),s,s,s,s,s,s,s)},
$S:196}
C.dRH.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dRK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dRE.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:91}
C.dRF.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.ck,e,v)
return new A.d4(e,!1,A.ir(B.z,A.as(A.aF(!1,B.a3,!0,v,new A.e0(new C.dRD(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bh(t,new A.bt(0.96,1,u),u.k("bh<bQ.T>"))),v)},
$S:34}
C.dRD.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.K((h?B.bu:B.bj).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.X(B.cB,i.a.d.a?B.bu:B.bj,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRo(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVL("Name")
r=l.a
q=r.d==null?k:new C.dRp(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.mb
n=A.K(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfW(new A.D(B.f2,A.aM(!1,p,!0,A.o(B.z,C.b0y(m==null?"\ud83d\udc64":A.fPG(r.e,m),18),B.f,k,k,new A.n(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lc,k,B.abW,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aWr("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dRq(r,a0),r.d===B.xm),1),B.ae,A.E(i.aWr("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dRv(r,a0),r.d===B.a8r),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.ht(D.c0R,D.h6m,new C.dRw(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ch)),k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uW(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVM("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.eb,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bj).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xm(r.a,!1)
v.push(A.aF(!1,B.a3,!0,q,A.aM(!1,p,!0,A.o(k,A.A(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bYs],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.n(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRx(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVL("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b40(r.b.length!==0,B.mj,new C.dRy(r,i,a0),new C.dRz(r,a0),"Upload from gallery","ID photo"))
v.push(i.b40(r.c.length!==0,D.bRK,new C.dRA(r,i,d,a0),new C.dRB(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Z.a9_("Signature (optional)",t,new C.dRC(a0),new C.dRr(a0,t),new C.dRs(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bj
s=(i?B.bu:B.bj).j(0.28)
s=A.E(A.dV(B.aYm,new C.dRt(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qH,k,new A.ba(A.l(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cW,k,k,k,B.c,k,B.qH,k,new A.ba(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vS,k,k,k),k,new C.dRu(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.o(k,A.ca(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.n(g,k,e,f,k,k,B.n),k,k,k,B.t9,B.jr,k,k,360)},
$S:168}
C.dRo.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRp.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRq.prototype={
$0(){return this.b.$1(new C.dRn(this.a))},
$S:0}
C.dRn.prototype={
$0(){var w=this.a
w.d=B.xm
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRv.prototype={
$0(){return this.b.$1(new C.dRm(this.a))},
$S:0}
C.dRm.prototype={
$0(){var w=this.a
w.d=B.a8r
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRw.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRx.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xr(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dRl(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRl.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gci(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dRy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qo(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dRk(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRk.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dRz.prototype={
$0(){return this.b.$1(new C.dRj(this.a))},
$S:0}
C.dRj.prototype={
$0(){return this.a.b=""},
$S:0}
C.dRA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bU(q,null,new C.dRh(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qo(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dRi(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRh.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.asS,w,w,w,w,new C.dRb(d),!1,w,w,w,w,w,w,w,D.fXp,w,w,w),A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.asQ,w,w,w,w,new C.dRc(d),!1,w,w,w,w,w,w,w,D.h3s,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:26}
C.dRb.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dRc.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dRi.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dRB.prototype={
$0(){return this.b.$1(new C.dRg(this.a))},
$S:0}
C.dRg.prototype={
$0(){return this.a.c=""},
$S:0}
C.dRC.prototype={
$0(){return this.a.$1(new C.dRf())},
$S:0}
C.dRf.prototype={
$0(){},
$S:0}
C.dRr.prototype={
$0(){return this.a.$1(new C.dRe(this.b))},
$S:0}
C.dRe.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dRs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aj6(u.a,null,null,new C.dRd(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRd.prototype={
$4(d,e,f,g){this.a.$1(new C.dRa(this.b,d))},
$S:489}
C.dRa.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dRt.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRu.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.T(D.fvc)
return}if(w.a.d==null){w.c.K(x.q).f.T(D.fs1)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dRY.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:91}
C.dRZ.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bj).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bl(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bj,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zR(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zR(r).length>0?B.bD:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bj
t=(q?B.bu:B.bj).j(0.28)
s=x.p
return new A.d4(e,!1,A.as(A.aF(!1,B.a3,!0,r,A.o(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dV(B.o8,new C.dRW(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k6,r,new A.ba(A.l(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.h3U,r,new C.dRX(d),A.bp(B.cW,r,r,r,B.c,r,B.k6,r,new A.ba(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.n(o,r,m,n,r,r,B.n),r,r,r,B.CQ,B.Hi,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dRW.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRX.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dRS.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dRT(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bj).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bl(l.c),s,s,s,s,s,s,D.fIk,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iQ((r.a.d.a?B.bu:B.bj).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3b,"View receipt",new C.dRL(r,d,l))
u=l.x!=null
t=u?B.pD:B.qQ
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bFq,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dRM(r,d,l)),q.$3$icon$label$onTap(B.D4,"Edit",new C.dRN(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mj,"View / download ID",new C.dRO(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bRJ,"View / download selfie",new C.dRP(r,d,l)))
if(l.gaIm())p.push(q.$3$icon$label$onTap(B.a4n,"View / download signature",new C.dRQ(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ej,"Delete",new C.dRR(r,d,l)))
p.push(B.ax)
return A.bm(!0,new A.D(B.t7,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.n(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:26}
C.dRT.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2204}
C.dRL.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h0B(w,this.c)},
$S:0}
C.dRM.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Tb(this.c)},
$S:0}
C.dRN.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DP(this.c)},
$S:0}
C.dRO.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bH9(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dRP.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bH9(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dRQ.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h0G(w,this.c)},
$S:0}
C.dRR.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qn(0,this.c)},
$S:0}
C.dS_.prototype={
$1(d){return d.x==null},
$S:267}
C.dS0.prototype={
$1(d){return d.x!=null},
$S:267}
C.dS1.prototype={
$2(d,e){return d+e.c},
$S:2205}
C.dS2.prototype={
$0(){return this.a.bEx()},
$S:0}
C.dRU.prototype={
$0(){return this.a.agK(this.b)},
$S:0}
C.fJR.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.fJS.prototype={
$0(){return B.d.gH(D.a5H)},
$S:z+75}
C.dhC.prototype={
$0(){var w=this.a
return w.m(new C.dhA(w,this.b))},
$S:0}
C.dhA.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dhB.prototype={
$0(){},
$S:0}
C.dhD.prototype={
$0(){var w=this.a.gc3_()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fMn.prototype={
$1(d){return C.hp5(A.a1(d,x.N,x.z))},
$S:z+11}
C.fMo.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fMp.prototype={
$2(d,e){var w=A.cc(d.a,null),v=A.cc(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+81}
C.h_c.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h7R.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fIX.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bSr.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:2206}
C.h_N.prototype={
$1(d){var w=this
return new C.a_T(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+52}
C.dih.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dig(w,d))},
$S:z+78}
C.dig.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.di5.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.di2.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dhE.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dhF.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.di6.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dhN.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dhL(d),w,w),A.bJ(B.xM,w,new C.dhM(d),A.bp(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dhL.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dhM.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhO.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.di3.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.di4.prototype={
$0(){return B.d.gH(D.A6)},
$S:z+14}
C.dhJ.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzb(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ue(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+36}
C.dhK.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhP.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_r(v,u,J.ad(w.d),null)},
$S:z+38}
C.dhQ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dif.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.ay(s,new C.a_7(r.y,r.gzb(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.did(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bd7(v,e,w,u,t,r.gbV9(),C.hF1(r.y.Q),r.gzb(0),s)
w=t}return A.c6(q,new C.die(r,e),new A.D(B.a1l,w,s))},
$S:2207}
C.die.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd7(t).ay){t=this.b
u=x.cy.a(B.d.gd7(u.f.f)).gvv(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fz(B.a5,A.d1(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.did.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJy(B.qz,B.iB)},
$S:0}
C.di_.prototype={
$0(){var w=this.a
return w.m(new C.dhZ(w))},
$S:0}
C.dhZ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.di0.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dhG.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=B.kw.j(0.5),r=x.p,q=A.a([D.fVX,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_d(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_d(d,H.aqO,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_d(d,O.arL,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_d(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_d(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,B.Cf,A.bm(!0,new A.D(B.z4,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.OL,u,B.d7,u,new A.ba(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:48}
C.di1.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dhT.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_V(v,J.cJ(w.d),w.r+1,null)},
$S:z+42}
C.dhU.prototype={
$1(d){var w=null
return A.oS(!1,A.em(w,w,w,B.Cf,new A.kj(this.a,new C.dhS(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.dhS.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.abA,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:577}
C.dhV.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dhW.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.dhX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bu(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SR(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dhR(s,t))
w=4
return A.b(s.lj(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.di8.prototype={
$1(d){var w=null
return A.oS(!1,A.em(w,w,w,B.Cf,new A.kj(this.a,new C.di7(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.di7.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.abA,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:577}
C.di9.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dia.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.dib.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.dic.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bu(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lj(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhH.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.blv(B.qz,U.Oj)},
$S:0}
C.dhI.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJy(B.qz,U.Oj)},
$S:0}
C.dk3.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dk4.prototype={
$1(d){var w=this.a
return w.m(new C.dk2(w))},
$S:9}
C.dk2.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dk5.prototype={
$1(d){var w=this.a
return w.m(new C.dk1(w))},
$S:9}
C.dk1.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dk6.prototype={
$1(d){var w=this.a
return w.m(new C.dk0(w))},
$S:9}
C.dk0.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dk7.prototype={
$0(){var w=this.a
return w.m(new C.dk_(w,this.b))},
$S:0}
C.dk_.prototype={
$0(){var w=this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.dk8.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga32()
A.a6(this.b,!1).N(new A.bs0(w,v))},
$S:0}
C.diw.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.div.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_R(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+48}
C.diA.prototype={
$1(d){return d.a===this.a},
$S:z+50}
C.diz.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bbt(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.ht,v,v,v)
return A.em(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.dix(d),v,v),A.bJ(B.xM,v,new C.diy(d),A.bp(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,B.Cf,w,v,v,v,v,D.fUJ,v)},
$S:18}
C.dix.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.diy.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.diB.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.diC.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ca(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bGp,t,t,B.ah)},
$S:309}
C.diu.prototype={
$0(){return this.a.Rb(0,this.b)},
$S:0}
C.dit.prototype={
$0(){return this.a.QC(0,this.b)},
$S:0}
C.cQD.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cQE.prototype={
$0(){return B.d.gH(D.A6)},
$S:z+14}
C.cQF.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.n(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bk,w,w),w),0,0,0)},
$S:2209}
C.d9o.prototype={
$1(d){return this.a.m(new C.d9n(this.b,this.c))},
$S:9}
C.d9n.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d9N.prototype={
$1(d){return this.a.m(new C.d9A())},
$S:2}
C.d9A.prototype={
$0(){},
$S:0}
C.d9O.prototype={
$1(d){return this.a.m(new C.d9z())},
$S:2}
C.d9z.prototype={
$0(){},
$S:0}
C.d9P.prototype={
$0(){var w=this.a
return w.m(new C.d9y(w,this.b))},
$S:0}
C.d9y.prototype={
$0(){var w=this.a
return w.d=w.goy().Gn(this.b.a)},
$S:0}
C.d9Q.prototype={
$0(){var w=this.a
return w.m(new C.d9x(w,this.b))},
$S:0}
C.d9x.prototype={
$0(){var w=this.a
return w.d=w.goy().cON(this.b)},
$S:0}
C.d9R.prototype={
$1(d){return this.a.m(new C.d9w())},
$S:2}
C.d9w.prototype={
$0(){},
$S:0}
C.d9S.prototype={
$0(){var w=this.a
return w.m(new C.d9v(w,this.b))},
$S:0}
C.d9v.prototype={
$0(){var w=this.a
return w.d=w.goy().cOS(this.b.a)},
$S:0}
C.d9T.prototype={
$1(d){var w=this.a
return w.m(new C.d9I(w,d))},
$S:6}
C.d9I.prototype={
$0(){var w=this.a
return w.d=w.goy().cPM(this.b)},
$S:0}
C.d9U.prototype={
$1(d){var w=this.a
return w.d=w.goy().aGu(d)},
$S:2}
C.d9V.prototype={
$1(d){var w=this.a
return w.d=w.goy().cOV(d)},
$S:2}
C.d9X.prototype={
$1(d){var w=this.a
return w.d=w.goy().cPK(d)},
$S:2}
C.d9Y.prototype={
$1(d){var w=this.a
return w.m(new C.d9H(w,d))},
$S:9}
C.d9H.prototype={
$0(){var w=this.a
return w.d=w.goy().cPB(this.b)},
$S:0}
C.d9Z.prototype={
$0(){var w=this.a,v=w.goy(),u=B.a.i(w.gzb(0).a.a),t=B.a.i(w.gaDF().a.a)
u=v.bgc(B.a.i(w.gatg().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bSB.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bSv.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSu(w,d))},
$S:12}
C.bSu.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bSE.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bSw.prototype={
$0(){var w=this.a
w.Q=D.b2B
w.aej(1)
w.r.x=null},
$S:0}
C.bSx.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b2B)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d7n[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bSA.prototype={
$0(){var w=this.a
w.Q=D.aed
w.aej(2)
w.r.z=null},
$S:0}
C.bSz.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hMv
t.aej(3)
w=t.r
w.d=s
w.x="I say: "+t.gCI()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.de5[v.aw(4)]:D.dzK[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bSC.prototype={
$0(){var w=this.a
w.Q=D.b2C
w.CW=this.b
w.cy=1
w.aej(4)
w.r.f=w.f.a+5},
$S:0}
C.bSD.prototype={
$0(){},
$S:0}
C.bSy.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSs.prototype={
$0(){return this.a.Lj(this.b)},
$S:0}
C.bSt.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bU7.prototype={
$0(){var w=this
return w.a.Rv(w.b,0,w.c,w.d)},
$S:0}
C.bU8.prototype={
$0(){var w=this
return w.a.Rv(w.b,3,w.c,w.d)},
$S:0}
C.bU9.prototype={
$0(){var w=this
return w.a.Rv(w.b,1,w.c,w.d)},
$S:0}
C.bUa.prototype={
$0(){var w=this
return w.a.bUA(w.b,w.c,w.d)},
$S:0}
C.bUb.prototype={
$0(){var w=this
return w.a.Rv(w.b,4,w.c,w.d)},
$S:0}
C.bUc.prototype={
$0(){var w=this
return w.a.Rv(w.b,2,w.c,w.d)},
$S:0}
C.bUd.prototype={
$0(){var w=this
return w.a.Rv(w.b,5,w.c,w.d)},
$S:0}
C.bUe.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:560}
C.bU6.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6S[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fD(r,B.cx,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fze,e),B.a7,B.c1,r,B.dK,B.c2)
o.nC(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.by(A.bX(w,v.gba(v)+12,u+18),B.i4)
u=this.a
v=t.eD(B.dM)
w=$.S()
s=A.L()
s.r=B.dB.gp(0)
u.ar(v,s)
s=A.L()
s.r=D.qq.gp(0)
u.ar(t,s)
w=new A.aG(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bx())
v=A.L()
v.r=D.qq.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:829}
C.bSS.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bST.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.an2(d),w.an2(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fwV.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h7I.prototype={
$2(d,e){if(e!=null)J.c4(this.a.c1(0,d,new C.h7J()),e)},
$S:z+64}
C.h7J.prototype={
$0(){return A.a([],x.J)},
$S:z+74}
C.h7K.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7L.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h7M.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h7H(this.c,d))},
$S:3}
C.h7H.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h7N.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7O.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7P.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h7G(this.c,d))},
$S:3}
C.h7G.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fKt.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fZ6.prototype={
$1(d){return d.Q},
$S:z+15}
C.fZ7.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fGh.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fNj.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bNF.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h87.prototype={
$2(d,e){return B.o.aQ(C.hBd(d),C.hBd(e))},
$S:237}
C.h88.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLO.prototype={
$0(){var w=this.a
w.ch=!0
w.b9I()},
$S:0}
C.bLJ.prototype={
$0(){},
$S:0}
C.bLP.prototype={
$1(d){return d.f<=0},
$S:z+28}
C.bLH.prototype={
$0(){},
$S:0}
C.bLI.prototype={
$0(){},
$S:0}
C.bLN.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b5(u,u,u,new C.bdN(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.o(u,A.d(t.dy,u,u,u,u,u,u,D.fGU,B.K,u,u),B.f,u,u,new A.n(w,u,u,v,u,u,B.n),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.ay(B.c_,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bLK(t,e),u,u,u,u,u,u,u,new C.bLL(t,e),u,u,u,u,u,u,u,u,u,new C.bLM(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bLK.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLM.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bLL.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLG.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.crz.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.crA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cry(w))},
$S:0}
C.cry.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.crB.prototype={
$0(){var w=this,v=w.a
v.gj2()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.crC.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.crD.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.crE.prototype={
$0(){},
$S:0}
C.crF.prototype={
$0(){var w=this.a
w.z=w.XI(++w.e)
w.Q=A.c0(w.gkT()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.crv.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.crw.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj2().length,e=i/2,d=new C.crx(i,f,h),a0=g.as,a1=A.a3(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c6(new A.he(a0),new C.crq(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj2().length!==0&&!B.d.q(g.gj2(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QV(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new A.N3(new C.crr(g,u),new C.crs(g,u),new C.crt(g,u),j,j,new A.bl("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fj:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj2().length!==0&&!B.d.q(g.gj2(),-1)){a0=g.e+1>=g.gkT().length?"See my result":"Next family"
g=A.as(C.uw(a0,g.gqs(g),B.cV,B.jt,D.fC),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XI(0):s).length))break
if(!B.d.q(g.gj2(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XI(0)
o=s}else o=s
n=s[u]
n=A.e1(B.z,new C.QV(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XI(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r9(new A.bt(0,p,t),new C.cru(),new A.Eq(u,j,new C.QV(l.b,k,62,!1,j),new A.kK(0.25,new C.QV(m.b,k,62,!1,j),j),new A.kd(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,A.hEU(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bl("chip-"+r,a0),w),B.b0,B.iR,j,new A.bl("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:64}
C.crx.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:599}
C.crq.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj2().length!==0&&!B.d.q(t.gj2(),-1)
return A.b5(p,p,p,new C.bdg(q.b,o,v,w,p),B.az)},
$S:58}
C.crs.prototype={
$1(d){return this.a.gj2()[this.b]===-1},
$S:2212}
C.crt.prototype={
$1(d){return this.a.cSE(this.b,d.a)},
$S:2213}
C.crr.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj2()[t]!==-1,r=A.l(18),q=e.length!==0?B.cV.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cV:B.k0,B.r,2)
u=s?A.lC(new C.crp(),A.as(new C.QV(u.gaFX()[u.gj2()[t]].b,u.gaFX()[u.gj2()[t]].a,62,!1,v),v,v,v),B.nl,B.iR,v,v,new A.bt(0.3,1,x.X),x.i):D.bdV
return A.cU(v,u,v,v,B.b0,new A.n(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:2214}
C.crp.prototype={
$3(d,e,f){return A.e1(B.z,f,e,null,null)},
$S:118}
C.cru.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:118}
C.cRH.prototype={
$1(d){return d>=1},
$S:119}
C.cGy.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkT()[w.e].d.length)w.m(new C.cGx(w))},
$S:12}
C.cGx.prototype={
$0(){return this.a.f++},
$S:0}
C.cGG.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cGH.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cGI.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGF(w))},
$S:0}
C.cGF.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cGJ.prototype={
$0(){return this.a.f++},
$S:0}
C.cGK.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cGL.prototype={
$0(){},
$S:0}
C.cGM.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cGA.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cGB.prototype={
$3(d,e,f){var w=null
return A.lC(new C.cGz(this.a,e),w,B.b0,B.hy,w,w,new A.bt(w,this.b,x.X),x.i)},
$S:2215}
C.cGz.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cV.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.o(v,A.i3(new A.BE(new A.uQ(B.w.j(e),B.Mk,v,B.YP),A.bYo(A.b5(v,v,v,new C.aCb(u.gkT()[u.e].c,u.as,v),B.az),new A.Ev(w,w,B.WH)),v),B.aq),B.f,v,v,new A.n(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2216}
C.cGC.prototype={
$3(d,e,f){return A.d1(A.dO(f,new A.r(0,14*(1-e))),e)},
$S:107}
C.cGD.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:118}
C.cGE.prototype={
$0(){return this.a.bqP(this.b)},
$S:0}
C.f9n.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anz$)
v.anz$=w
v.qf$.sp(0,w)
v.aru(u)},
$S:7}
C.fjx.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bTD.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTC())},
$S:0}
C.bTC.prototype={
$0(){},
$S:0}
C.bTA.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bTy.prototype={
$0(){},
$S:0}
C.bTz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gN0()
w=s+1>=r.length?3:5
break
case 3:q=C.bHn(p.gaqj(0),0,r.length)
p.m(new C.bTv(p,q))
o=p
w=6
return A.b(C.BR(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BS(s.d,s.c.a,"school",p.gaqj(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bTw())
w=4
break
case 5:p.m(new C.bTx(p))
p.gqA().Wg(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bTv.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bTw.prototype={
$0(){},
$S:0}
C.bTx.prototype={
$0(){return this.a.x++},
$S:0}
C.bTB.prototype={
$0(){return this.a.Lj(this.b)},
$S:0}
C.bTu.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.f9o.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hF7(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EH
C.SP(q,D.euo,0,0.2,-0.6,-0.2,null,w,D.et7,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.GG.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f9p.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SP(this.a,D.etu,0,u,0.7,-0.5,null,null,D.K0,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f9q.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SP(this.a,D.eva,0,0,0.8,-0.5,null,null,D.K0,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f9r.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SP(w.b,D.eui,0,v,-0.8,-0.5,null,null,D.K0,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f9s.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eum:D.EH
C.SP(p,D.etO,0,t,0,-0.6,null,v,D.K0,3,0,s,1.3,u,0,w,0)
q=q.cd9(new A.r(222,455),9)
$.S()
w=A.L()
w.r=B.cV.gp(0)
p.af(q,w)},
$S:0}
C.f9t.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:560}
C.bTg.prototype={
$2(d,e){return d+e},
$S:68}
C.bTr.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bTs.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bTt.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj2()[u.b]=s
t.gj2()[u.d]=t.y
w=t.as
v=t.qf$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bTn.prototype={
$1(d){return d},
$S:105}
C.bTm.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qf$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bTo.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bTp.prototype={
$0(){},
$S:0}
C.bTq.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FR(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cm(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bTi.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bTj.prototype={
$2(d,e){var w=this.a
w=w.gkT()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:68}
C.bTk.prototype={
$2(d,e){var w=null,v=C.hfX(new A.au(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.ay(B.c_,new A.e6(A.b5(w,w,w,new C.bkr(u,u.qf$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bTh(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bTh.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj2().length
u=B.o.D(B.h.bh((t.a-s.a)/r/450*v),0,v-1)
w.d2u(w.gj2()[u])}},
$S:23}
C.bTl.prototype={
$1(d){var w=this.a
return w.gkT()[w.f].d[d]},
$S:79}
C.dtd.prototype={
$2(d,e){return 0},
$S:68}
C.bT2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bT1())},
$S:0}
C.bT1.prototype={
$0(){},
$S:0}
C.bT0.prototype={
$0(){},
$S:0}
C.bSV.prototype={
$0(){},
$S:0}
C.bSW.prototype={
$0(){},
$S:0}
C.bT_.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Br},
$S:0}
C.bSZ.prototype={
$1(d){var w=null,v=this.a.gqA(),u=A.d(d,w,w,w,w,w,w,D.aWV,w,w,w),t=v.gbng(0)
return A.ay(B.c_,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aX8,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtb(v),w,w,w,w,w,w,!1,B.a4)},
$S:151}
C.bSX.prototype={
$0(){return this.a.Lj(this.b)},
$S:0}
C.bSY.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSU.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e3y.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3z.prototype={
$1(d){return this.a},
$S:39}
C.e3A.prototype={
$0(){var w=this.a
return w.d=w.gTd().bfG(this.b)},
$S:0}
C.e3w.prototype={
$1(d){return new C.Uf(this.a,null)},
$S:z+30}
C.e3x.prototype={
$1(d){return d.a===this.a.a},
$S:z+31}
C.e3v.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.ht,w,w,w)
return A.em(A.a([A.bP(!1,B.aYw,w,w,!0,w,w,w,new C.e3t(d),w,w),A.bP(!1,D.h1l,w,w,!0,w,w,w,new C.e3u(d),w,w)],x.p),w,w,D.fC,v,w,w,w,w,D.fOP,w)},
$S:18}
C.e3t.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3u.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e3s.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e3B.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e3C.prototype={
$0(){var w=this.a,v=this.b,u=C.bF6(v,10,w.r,!1)
return w.uF(C.hp6(w.a.d,"kahoot",u,w.gb7f(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e3D.prototype={
$0(){var w=this.a
return w.uF(new C.amo(this.b,w.a.d,w.r,null))},
$S:0}
C.e3E.prototype={
$0(){var w=this.a
return w.uF(new C.aky(this.b,w.a.d,w.r,null))},
$S:0}
C.e3H.prototype={
$0(){var w=this.a
return w.uF(new C.avs(this.b,w.a.d,w.r,null))},
$S:0}
C.e3I.prototype={
$0(){var w=this.a
return w.uF(new C.azp(this.b,w.a.d,w.r,null))},
$S:0}
C.e3J.prototype={
$0(){var w=this.a
return w.uF(new C.amr(this.b,w.a.d,w.r,null))},
$S:0}
C.e3K.prototype={
$0(){var w=this.a
return w.uF(new C.amv(this.b,w.a.d,w.r,null))},
$S:0}
C.e3L.prototype={
$0(){var w=this.a
return w.uF(new C.amx(this.b,w.a.d,w.r,null))},
$S:0}
C.e3M.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d2P()
return v.uF(C.hp6(v.a.d,"creator_"+u.a,w,v.gb7f(),"A game by the family",t,this.c.a))},
$S:0}
C.e3N.prototype={
$0(){return this.a.P5(this.b)},
$S:0}
C.e3O.prototype={
$0(){return this.a.Y9(0,this.b)},
$S:0}
C.e3F.prototype={
$0(){return this.a.P5(null)},
$S:0}
C.e3G.prototype={
$0(){return this.a.K(x.q).f.T(D.fs7)},
$S:0}
C.bTe.prototype={
$0(){var w=this.a
w.d=D.b2_
w.z=3},
$S:0}
C.bTf.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQq()}else w.m(new C.bTd(w))},
$S:12}
C.bTd.prototype={
$0(){return this.a.z--},
$S:0}
C.bT4.prototype={
$0(){var w=this.a
w.d=D.adU
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bT5.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bT3(w))
if(w.as<=0){d.a1(0)
w.b7b(-1)}},
$S:12}
C.bT3.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bTa.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xn},
$S:0}
C.bTb.prototype={
$0(){return this.a.e++},
$S:0}
C.bT7.prototype={
$0(){var w=this.a
w.d=D.b20
w.ay=this.b},
$S:0}
C.bT8.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bTc.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2217}
C.bT9.prototype={
$0(){return this.a.Lj(this.b)},
$S:0}
C.bT6.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSF.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.at(new A.bb(s,B.b7,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.at(new A.bb(u,B.b7,B.aP),r))}return s},
$S:2218}
C.bSG.prototype={
$0(){return this.a.gDh().c.push(C.h9L(null,0,20,""))},
$S:0}
C.bSQ.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Fd,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:256}
C.bSP.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDh().c,m=this.b,l=n[m],k=o.cgc(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Lg,p,p,p),B.b4],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.asD,p,p,p,new C.bSK(o,m),p,p,p,p,p,p))
n=J.a8(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSL(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aEC[v]
t=D.aEi[v]
s=v+1
f.push(new A.D(B.eP,new A.c8(B.aM,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bd,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSM(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),p),new A2.Pw(v,l.c,new C.bSN(o,l),p,!1,D.lH,p,p,p,p,p,!1,!1,p,G.b2p,p,p,p,p,p,w)],g),p),p))}f.push(D.fUo)
f.push(B.am)
n=A.a([D.fNT,B.ae],g)
for(r=0;r<3;++r){q=D.ch0[r]
n.push(new A.D(B.f2,A.jw(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bSO(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.o(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(j,p,h,i,p,p,B.n),p,p,p,B.kA,B.bl,p,p,p)},
$S:166}
C.bSK.prototype={
$0(){var w=this.a
return w.m(new C.bSJ(w,this.b))},
$S:0}
C.bSJ.prototype={
$0(){return B.d.cH(this.a.gDh().c,this.b)},
$S:0}
C.bSL.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bSM.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bSN.prototype={
$1(d){return this.a.m(new C.bSI(this.b,d))},
$S:158}
C.bSI.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bSO.prototype={
$1(d){return this.a.m(new C.bSH(this.b,this.c))},
$S:9}
C.bSH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5d.prototype={
$0(){var w=this.a
w.wC()
w.a.bv()
w.a.qt()},
$S:0}
C.e5c.prototype={
$0(){var w=this.a
w.wC()
w.a.bv()
w.a.qt()},
$S:0}
C.e5f.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e5g.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5h.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e5b.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e5e.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e5j.prototype={
$0(){this.a.Pr()
return null},
$S:0}
C.e5i.prototype={
$0(){return this.a.Fa(this.b)},
$S:0}
C.e4E.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bP(!1,B.ds,w,w,!0,w,w,w,new C.e4C(d),w,w),r=A.bp(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e4D(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e4C.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e4D.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e4F.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cPg(this.b)},
$S:0}
C.e4z.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aW1(w.b,w.c,w.d)},
$S:7}
C.e40.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e41.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4i.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hp(t.a.c),$async$$0)
case 2:s=r.nw(q.dH(e,new C.e4g(t)))
if(s!=null&&t.c!=null)t.m(new C.e4h(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4g.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4h.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4j.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4k.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cQ2(C.hFh(w),w)},
$S:0}
C.e4f.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.WA(u,w,C.aRH(u,w),new C.e4e(v),null)},
$S:z+35}
C.e4e.prototype={
$1(d){return this.boG(d)},
boG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e4d(s,d))
w=3
return A.b(s.uB(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:830}
C.e4d.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bfG(this.b)},
$S:0}
C.e4v.prototype={
$1(d){return d.as},
$S:z+1}
C.e4w.prototype={
$1(d){var w=this
return new A.e0(new C.e4u(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e4u.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.o(k,D.bWG,B.f,k,k,new A.n(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aH(k,k,k,k,A.X(B.cB,j?B.bu:B.bj,k,k,k,k),k,k,k,new C.e4o(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.ay(k,A.cU(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.n(q,k,new A.bH(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.hb,k,k,k,k,B.CH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e4p(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c7S,new A.D(D.bGP,f,k),new A.D(D.bGG,e,k),new A.D(B.t9,a0,k),new A.D(O.anW,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A6.aqy,j?B.bu:B.bj,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bGI,A.A(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ay7(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e4q(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.i3,12)],x.V)
f.push(A.ay(k,A.o(k,A.A(A.a([D.fOe,B.bc,D.bL7,D.bXl],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.n(k,k,k,j,e,D.cbE,B.n),k,k,k,B.hZ,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e4r(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wH,A.A(A.a([A.E(A.dV(B.ds,new C.e4s(a1),k),1),B.as,A.E(A.bJ(I.aYX,k,new C.e4t(t,a1),A.bp(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.o(k,A.ca(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.n(i,k,g,h,k,k,B.n),k,k,k,B.yW,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:92}
C.e4o.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4p.prototype={
$0(){return this.b.$1(new C.e4n(this.a,this.c))},
$S:0}
C.e4n.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e4q.prototype={
$1(d){var w=this.a
w.m(new C.e4l(w,d))
this.b.$1(new C.e4m())},
$S:9}
C.e4l.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e4m.prototype={
$0(){},
$S:0}
C.e4r.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIk(!0,w))
return null},
$S:0}
C.e4s.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4t.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIk(!1,w))
return null},
$S:0}
C.e4x.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPR(this.b.b)
w.r.a8(0)},
$S:0}
C.e3P.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ajh(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hyn(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e3Q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aGr(w)},
$S:0}
C.e4H.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeD(this.b,w,this.c,null)},
$S:z+37}
C.e4B.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.X(B.l_,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bJ(D.h58,w,new C.e4A(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e4A.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3R.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e3S.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e3T.prototype={
$1(d){return d.a},
$S:z+8}
C.e3U.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i4(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGr(w)},
$S:0}
C.e3Y.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ajh(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e3W(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hyn(v.e,null,r,v.f,v.r,new C.e3X(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e3X.prototype={
$0(){return this.a.abu(this.b)},
$S:0}
C.e3W.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e3Z.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,i4>")
w=A.C(new A.N(w,new C.e3V(this.b),v),v.k("ak.E"))
u.d=t.aGr(w)},
$S:0}
C.e3V.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+39}
C.e4G.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e4a.prototype={
$1(d){return d.length!==0},
$S:3}
C.e4b.prototype={
$1(d){var w=this
return new A.e0(new C.e49(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e49.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e45(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mC,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.em(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.e46(d),v,v),A.bJ(B.Lr,v,new C.e47(t,u,o,e),A.bp(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fSL,v,new C.e48(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:245}
C.e45.prototype={
$1(d){var w=null
return A.dI(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c4H,w,w,w,new C.e44(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2219}
C.e44.prototype={
$0(){return this.a.$1(new C.e42(this.b,this.c))},
$S:0}
C.e42.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e46.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e47.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e43(w.c,u))
v.bP(0,B.cg)}},
$S:0}
C.e43.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e48.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e4c.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQv(this.b,D.uT,C.Hn(v,w.a.c))},
$S:0}
C.e4O.prototype={
$1(d){return d.as},
$S:z+1}
C.e4P.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.e4Q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ivm(v)
return w.WX(v==null?null:v.a)},
$S:0}
C.e4R.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i75(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxF(new A.au(u,t),v.gbmm(),new A.au(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d58:D.d3d
q=A.K(s?B.dq:D.blP,B.r,1)
p=A.l(22)
o=A.bS(0,A.b5(m,m,m,new C.bgx(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.o(m,A.bv(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v1(new A.P(n,n,n,n),new A.a5(u,t,new C.bht(l.d,v,l.f,w,new C.e4K(l),l.gcho(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzn(s,new C.e4L(l,e),new C.e4M(l,e),new C.e4N(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.n(m,m,q,k,m,new A.a7(B.aY,B.b3,B.x,r,m,m),B.n),m,m,m,B.an0,m,m,m,m)},
$S:179}
C.e4K.prototype={
$1(d){var w=this.a
w.m(new C.e4I(w,d))},
$S:2}
C.e4I.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e4L.prototype={
$0(){var w=this.b
return this.a.bdQ(1.25,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e4M.prototype={
$0(){var w=this.b
return this.a.bdQ(0.8,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e4N.prototype={
$0(){var w=this,v=w.b
return w.a.aW1(new A.au(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbmm())},
$S:0}
C.e4S.prototype={
$0(){var w=this.a
return w.m(new C.e4J(w))},
$S:0}
C.e4J.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e4_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fx(s.c)),$async$$0)
case 2:t.yE("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diG.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bli(u,C.hK_(v.c,u),new C.diF(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+40}
C.diF.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.diH.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.boE(d.d,d.c,u.f.q(0,d.a),new C.diE(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+41}
C.diE.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fJV.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nw(new A.cM(new A.Y(v,new C.fJW(d),w.k("Y<1>")),new C.fJX(),w.k("cM<1,q>")))},
$S:z+19}
C.fJW.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fJX.prototype={
$1(d){return d.a},
$S:z+8}
C.fJT.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fJU.prototype={
$1(d){return d.b},
$S:z+8}
C.fK_.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nw(new A.cM(new A.Y(v,new C.fK0(d),w.k("Y<1>")),new C.fK1(),w.k("cM<1,q>")))},
$S:z+19}
C.fK0.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fK1.prototype={
$1(d){return d.a},
$S:z+8}
C.fJY.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+43}
C.fJZ.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.diJ.prototype={
$0(){return this.a},
$S:z+44}
C.dj_.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:221}
C.diS.prototype={
$2(d,e){var w=this.a.c1(0,d,new C.diT()),v=J.a8(w)
if(!v.q(w,e))v.I(w,e)},
$S:126}
C.diT.prototype={
$0(){return A.a([],x.s)},
$S:792}
C.diR.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:277}
C.diK.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.diQ.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.diP.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.E_:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.E_:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2221}
C.diL.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.diU.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aT(u==null?B.Z:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gP(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.I(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aT(t==null?D.E_:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aU(w,new C.diV(r)))w.push(r)}}B.d.bq(w,new C.diW(a8))
B.d.b0(w,new C.diX())
q=C.i74(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f0s],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.I)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.I)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gH(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.brL(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2222}
C.diV.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.diW.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.diX.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.diY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a3(v).k("b8<2>")).cB(0,0,B.qb)+88-w.gH(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:627}
C.diZ.prototype={
$1(d){return 16+d*156},
$S:182}
C.diI.prototype={
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
t.n(0,d,new C.GF(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GF(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GF(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L_(d,new A.r(e+t,w),s,s.length))}},
$S:195}
C.diM.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLs(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:126}
C.diN.prototype={
$1(d){return d.a===this.a},
$S:z+45}
C.diO.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:721}
C.dj0.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:721}
C.dj1.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:401}
C.dj2.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:188}
C.dj3.prototype={
$1(d){return d>=0.5},
$S:119}
C.fp8.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.hd(A.aM(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2224}
C.f_9.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.nF,A.aM(!1,v,!0,A.o(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fDK,B.K,w,w),B.f,w,w,new A.n(u,w,w,t,w,w,B.n),w,w,w,w,B.OR,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f_8(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+46}
C.f_8.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dyW.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dyV.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o6,B.K,w,w)
return A.em(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dyT(d),w,w),A.bP(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mU,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dyU(d),w,w)],x.p),B.b9,B.CC,w,u,D.bHK,w,D.bJH,new A.ba(v,B.a1),w,w)},
$S:18}
C.dyT.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dyU.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dz4.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dz5.prototype={
$1(d){var w=this.a
return w.m(new C.dz3(w,d))},
$S:z+47}
C.dz3.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dz6.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dz9.prototype={
$1(d){var w=this.a
return w.m(new C.dz2(w,d))},
$S:35}
C.dz2.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dz8.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dza.prototype={
$1(d){var w=this.a
return w.m(new C.dz1(w,d))},
$S:35}
C.dz1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dzb.prototype={
$0(){var w=this.a
return w.m(new C.dz0(w))},
$S:0}
C.dz0.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dzc.prototype={
$0(){var w=this.a
return w.m(new C.dz_(w))},
$S:0}
C.dz_.prototype={
$0(){return++this.a.at},
$S:0}
C.dzd.prototype={
$0(){var w=this.a
return w.m(new C.dyZ(w))},
$S:0}
C.dyZ.prototype={
$0(){return--this.a.ax},
$S:0}
C.dze.prototype={
$0(){var w=this.a
return w.m(new C.dyY(w))},
$S:0}
C.dyY.prototype={
$0(){return++this.a.ax},
$S:0}
C.dzf.prototype={
$1(d){var w=this.a
return w.m(new C.dyX(w,d))},
$S:9}
C.dyX.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dz7.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dzg.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ef:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.eh:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bj
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bj
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cU(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b0,new A.n(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dzh(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+49}
C.dzh.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dzq.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cga.prototype={
$2(d,e){return new A.bC(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:104}
C.cgh.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cgi.prototype={
$2(d,e){var w=J.b9(e,new C.cgg(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bC(d,w,x.d2)},
$S:z+51}
C.cgg.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cgc.prototype={
$1(d){return C.amA(A.a1(d,x.N,x.z))},
$S:z+9}
C.cgd.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cge.prototype={
$1(d){return C.hp5(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgf.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cgm.prototype={
$1(d){return new A.aIw(d.f.length,d.a,d.b)},
$S:z+53}
C.cgn.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:729}
C.cgj.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cgk.prototype={
$1(d){return d.cPt(C.Hn(d,this.a))},
$S:z+54}
C.e50.prototype={
$1(d){return C.ux(d,this.a.a.c)},
$S:z+3}
C.e51.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e55.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e56.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e4Y.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b24(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zc("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pC(r.c,r.e),$async$$0)
case 4:s.zc(p)
w=5
return A.b(s.Kn(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4Z.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b24(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zc("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pC(r.c,r.e),$async$$0)
case 4:s.zc(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WD(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zc("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zc("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zc("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kn(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.zc(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e54.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b23(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zc("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ee(new C.e53(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pC(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e53.prototype={
$1(d){var w=this.b
return new C.a0P(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+83}
C.e52.prototype={
$1(d){return D.hIP},
$S:z+56}
C.e58.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e59.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e57(w,d)
return new A.D(B.da,new C.bhx(this.b,d.c,d.a,w,null),null)},
$S:2225}
C.e57.prototype={
$0(){return this.a.YO(this.b.b)},
$S:0}
C.e4T.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e4U.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e4V.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e4W.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e4X.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5a.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cR(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).N(s)
return}},
$S:155}
C.dR2.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+57}
C.dR3.prototype={
$0(){return B.d.gH(D.a7g)},
$S:z+58}
C.dR4.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b5(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.dcd,44),w,w,w),w,w,new C.bmq(u,t,v,w),B.az)},
$S:58}
C.h0f.prototype={
$1(d){return A.pl(new C.h0e(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:146}
C.h0e.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tL,24)],x.V),o=r?B.eh:B.bO
o=A.o(t,t,B.f,t,t,new A.n(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.o(t,D.bZL,B.f,t,t,new A.n(t,t,t,A.l(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.o(t,A.x(A.a([B.T,o,new A.D(B.ao_,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bj,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.iz(!0,t,e,B.y,D.fqa,new C.h0d(this.b,s),20,B.anx,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.n(q,t,t,B.lf,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:122}
C.h0d.prototype={
$2(d,e){var w=null,v=D.a7g[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.l(15),o=A.E(new C.a7C(v.a,!0,w),1),n=s?B.jZ:B.iO,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eE(A.bv(p,A.x(A.a([o,A.o(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k7,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.n(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h0c(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:82}
C.h0c.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cpR.prototype={
$0(){return this.a.ahN(this.b)},
$S:0}
C.h_D.prototype={
$1(d){return D.hDD},
$S:z+59}
C.h7q.prototype={
$1(d){var w=this
return new C.a2B(w.a,w.b,w.c,w.d,null)},
$S:z+60}
C.h_H.prototype={
$1(d){return new C.a_t(this.a,null)},
$S:z+61}
C.h_G.prototype={
$1(d){return D.hEE},
$S:z+62}
C.daa.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dab.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.da9(w,d))},
$S:35}
C.da9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dac.prototype={
$1(d){return this.a.L0()},
$S:2}
C.dad.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.da6.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.da7.prototype={
$1(d){return this.a.L0()},
$S:2}
C.da8.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIf.prototype={
$0(){},
$S:0}
C.cIl.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIm.prototype={
$0(){return this.a.aRi(-1)},
$S:0}
C.cIn.prototype={
$1(d){return this.a.m(new C.cIk())},
$S:2}
C.cIk.prototype={
$0(){},
$S:0}
C.cIo.prototype={
$0(){return this.a.aRi(1)},
$S:0}
C.cIp.prototype={
$1(d){return this.a.m(new C.cIj())},
$S:2}
C.cIj.prototype={
$0(){},
$S:0}
C.cIq.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uV(u,u,B.b2,r,u,new C.cIi(t,d),B.wL,s,w,u,new A.ax(v,1,B.r,-1),B.ch)},
$S:2226}
C.cIi.prototype={
$1(d){var w=this.a
return w.m(new C.cIg(w,this.b))},
$S:9}
C.cIg.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cIr.prototype={
$1(d){return this.a.m(new C.cIh())},
$S:2}
C.cIh.prototype={
$0(){},
$S:0}
C.cIs.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.foE.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.foF.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.foG.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.foC.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDF()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b5(new A.D(D.bJG,new A.e6(A.o(r,q.a.c,B.f,r,r,new A.n(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bzc(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:58}
C.foD.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dI.az(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ap(B.aV,B.bQ,w)
s.toString
s=A.a([B.b2,s,B.aV],x.O)
return A.aF(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eE(D.ez0,r,new A.n(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d7(-1.2+t,-0.5),new A.d7(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:143}
C.fYU.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:63}
C.eXj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXa.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eXb.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eXh.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eXg(w,this.b),null)},
$S:21}
C.eXg.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.anU,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hvc(new C.eXd(r,e),r.a),B.aB,A.A(A.a([A.E(A.dV(B.ds,new C.eXe(d),w),1),B.as,A.E(A.bJ(B.WB,w,new C.eXf(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(t,B.a1),w)},
$S:108}
C.eXd.prototype={
$1(d){return this.b.$1(new C.eXc(this.a,d))},
$S:35}
C.eXc.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eXe.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eXf.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eXi.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TT(this.b)},
$S:0}
C.eX5.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bfM(w)},
$S:0}
C.eX9.prototype={
$1(d){return this.bp2(d)},
bp2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mi(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j3(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eX8.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eX7(this.b),v),v.k("M.E"))
u.d=t.bfM(w)},
$S:0}
C.eX7.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eXk.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.eXl.prototype={
$1(d){return this.a.bHP(d,this.b)},
$S:z+65}
C.eX6.prototype={
$0(){return this.a.abt(this.b)},
$S:0}
C.h7d.prototype={
$1(d){return new C.aeY(this.a,this.b,this.c,null)},
$S:z+66}
C.eXn.prototype={
$0(){return this.a.a0K(this.b)},
$S:0}
C.eXo.prototype={
$0(){return this.a.R6(this.b)},
$S:0}
C.eXp.prototype={
$0(){return this.a.F4(this.b)},
$S:0}
C.eXq.prototype={
$0(){return this.a.a0L(this.b)},
$S:0}
C.eXm.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eX0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eX1.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eX2.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eX4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eX3(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eX3.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eXN.prototype={
$2(d,e){return d+e.gxN()},
$S:z+69}
C.eXJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eXK.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eXu.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.o(v,D.c_e,B.f,v,v,new A.n(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eI(v,t,new A.D(B.wK,A.x(A.a([r,B.aO,q,B.P,p,B.db,A.A(A.a([A.E(A.dV(B.o8,new C.eXs(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fi,v,new A.ba(A.l(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bJ(D.h90,v,new C.eXt(d),A.bp(B.aA,v,v,v,v,v,B.fi,v,new A.ba(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d7,v,new A.ba(s,B.a1),v)},
$S:48}
C.eXs.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eXt.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eXD.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.djA:B.a6z,f=x.p
g=A.o(m,A.x(A.a([A.o(m,m,B.f,m,m,new A.n(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.fje,B.ax,new A.bK(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.n(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,B.anY,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8E(B.b8,B.jv,new C.eXA(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b8E(B.cF,B.zN,new C.eXB(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.o(m,D.bZy,B.f,m,m,new A.n(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wE,A.o(m,A.x(A.a([g,new A.D(B.anV,A.x(A.a([w,B.T,u,B.bx,t,B.T,A.aF(!1,B.a3,!0,m,A.aM(!1,s,!0,A.o(m,A.A(A.a([o,B.bc,n,A.X(B.eI,k?B.bu:B.bj,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.n(r,m,p,q,m,m,B.n),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eXC(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.n(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:26}
C.eXA.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.wc("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXB.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.wc("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXC.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.OI(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXy.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.eh:B.bO
k=A.o(q,q,B.f,q,q,new A.n(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bj
u=A.bv(w,new A.a5(48,48,C.aT2(!0,A.l(12),48,B.Py,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bl(v.gxN())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wE,A.o(q,A.x(A.a([B.T,k,new A.D(D.anS,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.Cu,r.crI(B.ve,B.aV,new C.eXw(d),p,"QR code or backup file","Transfer project"),r.b5E(!0,B.ej,B.aA,new C.eXx(d),p,"Remove from this device","Delete project"),B.T],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.n(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:26}
C.eXw.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eXx.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eXz.prototype={
$1(d){return this.bp3(d)},
bp3(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mi(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wr(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eXQ.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eXP(w))},
$S:0}
C.eXP.prototype={
$0(){return this.a.r++},
$S:0}
C.eXR.prototype={
$0(){var w=this.a
return w.m(new C.eXO(w))},
$S:0}
C.eXO.prototype={
$0(){return this.a.r++},
$S:0}
C.eXr.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.eXv.prototype={
$0(){return this.a.ckW(this.b)},
$S:0}
C.eXM.prototype={
$0(){var w=this.a
return w.m(new C.eXL(w,this.b))},
$S:0}
C.eXL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXG.prototype={
$0(){return this.a.wc("scan")},
$S:0}
C.eXH.prototype={
$0(){return this.a.wc("file")},
$S:0}
C.eXI.prototype={
$1(d){return this.a.crJ(d,this.b)},
$S:z+70}
C.eXF.prototype={
$0(){return this.a.F9(this.b)},
$S:0}
C.eXE.prototype={
$0(){return this.a.a1e(this.b,this.c)},
$S:0}
C.cHz.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+71}
C.cHy.prototype={
$1(d){return d.aj()},
$S:z+72}
C.cHw.prototype={
$1(d){return C.hQ8(A.a1(d,x.N,x.z))},
$S:z+73}
C.cHx.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fIN.prototype={
$1(d){return d.y===D.kZ},
$S:z+3}
C.h7Z.prototype={
$1(d){return C.aRH(d,this.a)},
$S:z+3}
C.fGg.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bTK.prototype={
$1(d){return!d.as},
$S:z+1}
C.bTJ.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bTG.prototype={
$1(d){return C.hp7(A.a1(d,x.N,x.z))},
$S:z+24}
C.bTH.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bTI.prototype={
$1(d){return J.k(d)},
$S:16}
C.fww.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fs5.prototype={
$1(d){return C.hez(A.a1(d,x.N,x.z))},
$S:z+77}
C.fs6.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fs7.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h_r.prototype={
$1(d){return J.k(d)},
$S:16}
C.h_s.prototype={
$1(d){return d.a},
$S:z+79}
C.h_t.prototype={
$1(d){return d.length!==0},
$S:3}
C.h_u.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h_v.prototype={
$1(d){return d.TT(null).aj()},
$S:z+80}
C.h7X.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fJg.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fMt.prototype={
$1(d){return C.amA(A.a1(d,x.N,x.z))},
$S:z+9}
C.fMu.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fMv.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fMw.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fMx.prototype={
$1(d){return C.ux(d,this.a)},
$S:z+3}
C.h_e.prototype={
$1(d){return C.ux(d,this.a)},
$S:z+3}
C.h7S.prototype={
$1(d){return C.amA(A.a1(d,x.N,x.z))},
$S:z+9}
C.h7T.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h7U.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fIY.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fIZ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h82.prototype={
$1(d){return!d.as},
$S:z+1}
C.fIr.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fIs.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fIt.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h7r.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fNk.prototype={
$1(d){return d.Q},
$S:z+15}
C.h_7.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fMq.prototype={
$1(d){return C.amA(A.a1(d,x.N,x.z))},
$S:z+9}
C.fMr.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fMs.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h_2.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fsC.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsD.prototype={
$1(d){return C.hp7(A.a1(d,x.N,x.z))},
$S:z+24}
C.fsE.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fsF.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:16}
C.fsG.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsT.prototype={
$2(d,e){return d.eF(new C.fsU(e))},
$S:2227}
C.fsU.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cf},
$S:2228}
C.fsQ.prototype={
$1(d){return C.ibU(d,this.a)},
$S:z+82}
C.fsR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fsS.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fxd.prototype={
$1(d){return d.a},
$S:z+55}
C.fxe.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxf.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fAe.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fFv.prototype={
$1(d){return C.hAN(d,C.Hn(d,this.a))},
$S:z+5}
C.fFw.prototype={
$1(d){return C.hAO(d,C.Hn(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCd.prototype
w.bwS=w.t
w=C.aAo.prototype
w.bwN=w.t
w=C.aHH.prototype
w.bxf=w.t
w=C.aCe.prototype
w.bwT=w.t
w=C.aCg.prototype
w.bwU=w.t
w=C.aCh.prototype
w.bwV=w.t
w=C.aNU.prototype
w.bzJ=w.t
w=C.aQ1.prototype
w.bC3=w.t
w=C.aQ2.prototype
w.bC4=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFe.prototype,"gcoC","coD",27)
var r
w(r=C.aCc.prototype,"gchu","chv",63)
v(r,"gaPt","Oe",0)
v(r,"gcx0","Bz",0)
v(r,"gbPE","OW",0)
v(r,"gcLs","zd",0)
v(r,"gcqG","a1W",0)
v(r,"gbL0","OE",0)
v(r,"gbQ3","Ye",0)
w(r,"gbV9","bVa",76)
v(r,"gbFk","Aw",0)
v(C.aCf.prototype,"gcLo","G2",0)
v(r=C.amp.prototype,"gbtd","bte",2)
v(r,"gbt5","bt6",2)
v(r,"gcMx","cMy",2)
u(r,"gqs","kO",0)
u(r=C.akz.prototype,"geX","fX",2)
w(r,"gcd6","cd7",26)
u(C.avt.prototype,"gqs","kO",0)
v(r=C.azq.prototype,"gcY6","cY7",2)
u(r,"gqs","kO",0)
u(C.aLx.prototype,"gbtb","btc",2)
v(C.amy.prototype,"gC4","cMK",2)
u(r=C.amw.prototype,"gcNq","cNr",2)
u(r,"gqs","kO",0)
v(r=C.ams.prototype,"gbs3","bs4",2)
v(r,"gcSC","cSD",2)
u(r=C.amu.prototype,"geX","fX",2)
u(r,"giC","cM3",2)
v(r=C.amq.prototype,"gcLT","cLU",2)
u(r,"gbqW","jH",2)
v(r=C.aFO.prototype,"gahp","ws",0)
v(r,"gckb","a16",0)
v(r,"gaTJ","IF",0)
v(r=C.aFL.prototype,"gcHn","a42",0)
v(r,"gahp","ws",0)
v(r,"gcv0","a2A",0)
v(r,"gck6","b3R",2)
v(r,"gcl8","a1j",0)
w(r,"gcho","chp",33)
v(r,"gbPW","IK",0)
v(r,"gcIr","cIs",2)
v(r,"gc74","a_0",0)
w(r,"gcfT","cfU",34)
v(r,"gcjV","cjW",2)
v(r=C.aEd.prototype,"gcdc","QE",0)
v(r,"gcde","cdf",2)
v(r,"gbMv","ab5",0)
v(r=C.aFN.prototype,"gbTy","YK",0)
v(r,"gc36","Zq",0)
v(r,"gcBr","a3q",0)
v(r,"gcxA","a31",0)
v(C.aFM.prototype,"gcxj","ajd",0)
v(C.auD.prototype,"gcfR","a0I",0)
v(C.aAX.prototype,"ga3M","L0",2)
v(C.aAW.prototype,"ga3M","L0",2)
v(C.azC.prototype,"ga3M","L0",2)
v(r=C.aHi.prototype,"gb51","RE",0)
v(r,"gbE8","WR",0)
v(r,"gckX","ckY",2)
w(C.aHh.prototype,"gcgJ","cgK",67)
t(C.aHj.prototype,"gaTE",0,0,null,["$1","$0"],["IE","bNP"],68,0,0)
s(C,"hJ4","ilQ",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aJ,[C.aqa,C.uS,C.nt,C.Iv,C.ag9,C.KT,C.uT,C.bUf,C.td,C.bpW,C.amH,C.aef,C.lt,C.bSR,C.auP,C.zz,C.alf,C.MW,C.bbl,C.aaj,C.biC,C.agg,C.aAE,C.ag4,C.aLx,C.L_,C.GF,C.bhv,C.aLs,C.ary,C.dj4,C.lX,C.aVZ,C.aVY,C.aU0,C.ui,C.rs,C.lD,C.i4,C.kZ,C.aJq])
u(A.k8,[C.fR8,C.fR7,C.fR9,C.h08,C.fEa,C.fEb,C.fEg,C.fOR,C.fOQ,C.fOP,C.c96,C.h0F,C.h0x,C.h0J,C.fJ5,C.dRJ,C.dRE,C.dRF,C.dRh,C.dRd,C.dRY,C.dRZ,C.dRS,C.dRT,C.dS_,C.dS0,C.fJR,C.fMn,C.fMo,C.h_c,C.h7R,C.fIX,C.h_N,C.dih,C.dhE,C.dhN,C.di3,C.dhJ,C.dhP,C.dhG,C.dhT,C.dhU,C.dhS,C.di8,C.di7,C.dk4,C.dk5,C.dk6,C.div,C.diA,C.diz,C.cQD,C.cQF,C.d9o,C.d9N,C.d9O,C.d9R,C.d9T,C.d9U,C.d9V,C.d9X,C.d9Y,C.bSB,C.bSv,C.fwV,C.h7K,C.h7L,C.h7M,C.h7H,C.h7N,C.h7O,C.h7P,C.h7G,C.fKt,C.fZ6,C.fGh,C.fNj,C.bNF,C.h88,C.fZJ,C.bLP,C.bLK,C.bLM,C.bLL,C.crx,C.crs,C.crt,C.crr,C.crp,C.cru,C.cRH,C.cGy,C.cGB,C.cGz,C.cGC,C.cGD,C.f9n,C.fjx,C.bTn,C.bTh,C.bTl,C.bSZ,C.e3z,C.e3w,C.e3x,C.e3v,C.e3B,C.bTf,C.bT5,C.bSQ,C.bSP,C.bSL,C.bSM,C.bSN,C.bSO,C.e5e,C.e4E,C.e4z,C.e40,C.e4g,C.e4j,C.e4f,C.e4e,C.e4v,C.e4w,C.e4q,C.e3P,C.e4H,C.e4B,C.e3R,C.e3S,C.e3T,C.e3Y,C.e3W,C.e3V,C.e4a,C.e4b,C.e45,C.e4O,C.e4K,C.diG,C.diH,C.fJV,C.fJW,C.fJX,C.fJT,C.fJU,C.fK_,C.fK0,C.fK1,C.fJY,C.fJZ,C.dj_,C.diQ,C.diL,C.diV,C.diW,C.diZ,C.diN,C.dj1,C.dj2,C.dj3,C.fp8,C.f_9,C.dyV,C.dz4,C.dz5,C.dz6,C.dz9,C.dz8,C.dza,C.dzf,C.dzg,C.cgh,C.cgg,C.cgc,C.cgd,C.cge,C.cgf,C.cgm,C.cgj,C.cgk,C.e50,C.e53,C.e52,C.e59,C.e5a,C.dR2,C.h0f,C.h_D,C.h7q,C.h_H,C.h_G,C.dab,C.dac,C.da7,C.cIn,C.cIp,C.cIq,C.cIi,C.cIr,C.foE,C.fYU,C.eXh,C.eXd,C.eX9,C.eX7,C.eXl,C.h7d,C.eXu,C.eXD,C.eXy,C.eXz,C.eXI,C.cHy,C.cHw,C.cHx,C.fIN,C.h7Z,C.fGg,C.bTK,C.bTJ,C.bTG,C.bTH,C.bTI,C.fs5,C.fs6,C.h_r,C.h_s,C.h_t,C.h_u,C.h_v,C.h7X,C.fJg,C.fMt,C.fMu,C.fMw,C.fMx,C.h_e,C.h7S,C.h7T,C.h7U,C.fIY,C.fIZ,C.h82,C.fIr,C.fIs,C.h7r,C.fNk,C.h_7,C.fMq,C.fMr,C.h_2,C.fsC,C.fsD,C.fsE,C.fsF,C.fsG,C.fsU,C.fsQ,C.fsR,C.fxd,C.fxe,C.fAe,C.fFv,C.fFw])
u(A.av,[C.b0z,C.amn,C.aXh,C.a_7,C.bd7,C.QV,C.a6R,C.tD,C.Ix,C.bht,C.bli,C.bzn,C.boE,C.aeC,C.blh,C.aeB,C.blg,C.aEe,C.aKu,C.aeD,C.GB,C.bhu,C.adS,C.bhs,C.bhx,C.b0x,C.auD,C.aeY])
u(A.oE,[C.bdL,C.beY,C.beP,C.aJk,C.bkj,C.bpV,C.aXm,C.bdN,C.aCb,C.bdg,C.bu_,C.bkr,C.bjS,C.bjZ,C.bhw,C.bgx,C.bmq,C.bzc])
u(A.lR,[C.h0C,C.h0D,C.h0E,C.h0v,C.h0w,C.h0H,C.h0I,C.dRV,C.dRH,C.dRK,C.dRo,C.dRp,C.dRq,C.dRn,C.dRv,C.dRm,C.dRw,C.dRx,C.dRl,C.dRy,C.dRk,C.dRz,C.dRj,C.dRA,C.dRb,C.dRc,C.dRi,C.dRB,C.dRg,C.dRC,C.dRf,C.dRr,C.dRe,C.dRs,C.dRa,C.dRt,C.dRu,C.dRW,C.dRX,C.dRL,C.dRM,C.dRN,C.dRO,C.dRP,C.dRQ,C.dRR,C.dS2,C.dRU,C.fJS,C.dhC,C.dhA,C.dhB,C.dhD,C.dig,C.di5,C.di2,C.dhF,C.di6,C.dhL,C.dhM,C.dhO,C.di4,C.dhK,C.dhQ,C.did,C.di_,C.dhZ,C.di0,C.di1,C.dhV,C.dhX,C.dhY,C.dhR,C.di9,C.dic,C.dhH,C.dhI,C.dk3,C.dk2,C.dk1,C.dk0,C.dk7,C.dk_,C.dk8,C.diw,C.dix,C.diy,C.diB,C.diu,C.dit,C.cQE,C.d9n,C.d9A,C.d9z,C.d9P,C.d9y,C.d9Q,C.d9x,C.d9w,C.d9S,C.d9v,C.d9I,C.d9H,C.d9Z,C.bSu,C.bSE,C.bSw,C.bSx,C.bSA,C.bSz,C.bSC,C.bSD,C.bSy,C.bSs,C.bSt,C.bU7,C.bU8,C.bU9,C.bUa,C.bUb,C.bUc,C.bUd,C.h7J,C.fZ7,C.bLO,C.bLJ,C.bLH,C.bLI,C.bLG,C.crz,C.crA,C.cry,C.crB,C.crD,C.crE,C.crF,C.crv,C.cGx,C.cGG,C.cGH,C.cGI,C.cGF,C.cGJ,C.cGK,C.cGL,C.cGM,C.cGA,C.cGE,C.bTD,C.bTC,C.bTA,C.bTy,C.bTz,C.bTv,C.bTw,C.bTx,C.bTB,C.bTu,C.f9o,C.f9p,C.f9q,C.f9r,C.f9s,C.bTr,C.bTs,C.bTt,C.bTm,C.bTo,C.bTp,C.bTq,C.bTi,C.bT2,C.bT1,C.bT0,C.bSV,C.bSW,C.bT_,C.bSX,C.bSY,C.bSU,C.e3y,C.e3A,C.e3t,C.e3u,C.e3s,C.e3C,C.e3D,C.e3E,C.e3H,C.e3I,C.e3J,C.e3K,C.e3L,C.e3M,C.e3N,C.e3O,C.e3F,C.e3G,C.bTe,C.bTd,C.bT4,C.bT3,C.bTa,C.bTb,C.bT7,C.bT8,C.bT9,C.bT6,C.bSF,C.bSG,C.bSK,C.bSJ,C.bSI,C.bSH,C.e5d,C.e5c,C.e5f,C.e5g,C.e5h,C.e5b,C.e5j,C.e5i,C.e4C,C.e4D,C.e4F,C.e41,C.e4i,C.e4h,C.e4k,C.e4y,C.e4d,C.e4o,C.e4p,C.e4n,C.e4l,C.e4m,C.e4r,C.e4s,C.e4t,C.e4x,C.e3Q,C.e4A,C.e3U,C.e3X,C.e3Z,C.e4G,C.e44,C.e42,C.e46,C.e47,C.e43,C.e48,C.e4c,C.e4P,C.e4Q,C.e4I,C.e4L,C.e4M,C.e4N,C.e4S,C.e4J,C.e4_,C.diF,C.diE,C.diJ,C.diT,C.diK,C.f_8,C.dyW,C.dyT,C.dyU,C.dz3,C.dz2,C.dz1,C.dzb,C.dz0,C.dzc,C.dz_,C.dzd,C.dyZ,C.dze,C.dyY,C.dyX,C.dz7,C.dzh,C.dzq,C.e51,C.e55,C.e56,C.e4Y,C.e4Z,C.e5_,C.e54,C.e58,C.e57,C.e4T,C.e4U,C.e4V,C.e4W,C.e4X,C.dR3,C.h0c,C.cpR,C.daa,C.da9,C.dad,C.da6,C.da8,C.cIf,C.cIl,C.cIm,C.cIk,C.cIo,C.cIj,C.cIg,C.cIh,C.cIs,C.foF,C.foG,C.eXj,C.eXa,C.eXb,C.eXc,C.eXe,C.eXf,C.eXi,C.eX5,C.eX8,C.eXk,C.eX6,C.eXn,C.eXo,C.eXp,C.eXq,C.eXm,C.eX0,C.eX1,C.eX2,C.eX4,C.eX3,C.eXJ,C.eXK,C.eXs,C.eXt,C.eXA,C.eXB,C.eXC,C.eXw,C.eXx,C.eXQ,C.eXP,C.eXR,C.eXO,C.eXr,C.eXv,C.eXM,C.eXL,C.eXG,C.eXH,C.eXF,C.eXE])
u(A.ag,[C.aqn,C.Ue,C.a_R,C.a_V,C.a_T,C.a_r,C.amo,C.aky,C.avs,C.azp,C.amx,C.amv,C.amr,C.WA,C.amt,C.Uf,C.arB,C.arv,C.a0v,C.arz,C.a0P,C.a0Q,C.a7C,C.a_t,C.a_s,C.ZZ,C.a2B,C.Gp,C.azv,C.auC,C.auw,C.auB,C.P8])
u(A.ah,[C.aFe,C.bhn,C.aCc,C.bhM,C.aCf,C.beW,C.aCd,C.aAo,C.aHH,C.azq,C.aCh,C.aCg,C.aCe,C.bmM,C.amu,C.amq,C.aFO,C.aFL,C.aEd,C.aFN,C.aFM,C.bmN,C.aNU,C.aAX,C.aAW,C.azC,C.bzf,C.aQ1,C.aQ2,C.aHi,C.bo9,C.aHh,C.bB0])
u(A.lr,[C.dRG,C.dRI,C.dRD,C.dS1,C.fMp,C.bSr,C.dif,C.die,C.dhW,C.dia,C.dib,C.diC,C.bUe,C.bU6,C.bSS,C.bST,C.h7I,C.h87,C.bLN,C.crC,C.crw,C.crq,C.f9t,C.bTg,C.bTj,C.bTk,C.dtd,C.bTc,C.e4u,C.e49,C.e4R,C.diS,C.diR,C.diP,C.diU,C.diX,C.diY,C.diI,C.diM,C.diO,C.dj0,C.cga,C.cgi,C.cgn,C.dR4,C.h0e,C.h0d,C.foC,C.foD,C.eXg,C.eXN,C.cHz,C.fww,C.fs7,C.fMv,C.fIt,C.fMs,C.fsT,C.fsS,C.fxf])
u(A.ol,[C.a26,C.agi,C.a2p,C.a0i,C.acU,C.aMe,C.Iw,C.amz,C.cHA,C.cHB])
t(C.amp,C.aCd)
t(C.akz,C.aAo)
t(C.avt,C.aHH)
t(C.bhr,C.aCh)
t(C.amy,C.bhr)
t(C.bhq,C.aCg)
t(C.amw,C.bhq)
t(C.bhp,C.aCe)
t(C.ams,C.bhp)
t(C.bmr,C.aNU)
t(C.bzd,C.aQ1)
t(C.bze,C.aQ2)
t(C.aHj,C.bB0)
t(C.bbz,A.bbm)
t(C.bzg,A.ap2)
t(C.bby,C.bzg)
w(C.aCd,A.cf)
w(C.aAo,A.cf)
w(C.aHH,A.eO)
w(C.aCe,A.cf)
v(C.bhp,C.ag4)
w(C.aCg,A.cf)
v(C.bhq,C.ag4)
w(C.aCh,A.cf)
v(C.bhr,C.ag4)
w(C.aNU,A.eO)
w(C.aQ1,A.cf)
w(C.aQ2,A.cf)
v(C.bB0,A.eG)
v(C.bzg,A.jg)})()
A.ng(b.typeUniverse,JSON.parse('{"b0z":{"av":[],"v":[]},"bdL":{"aB":[]},"aqn":{"ag":[],"v":[]},"aFe":{"ah":["aqn"]},"Ue":{"ag":[],"v":[]},"amn":{"av":[],"v":[]},"aXh":{"av":[],"v":[]},"bhn":{"ah":["Ue"]},"a_R":{"ag":[],"v":[]},"a_V":{"ag":[],"v":[]},"a_T":{"ag":[],"v":[]},"a_r":{"ag":[],"v":[]},"aCc":{"ah":["a_R"]},"bhM":{"ah":["a_V"]},"aCf":{"ah":["a_T"]},"a_7":{"av":[],"v":[]},"beY":{"aB":[]},"beP":{"aB":[]},"beW":{"ah":["a_r"]},"aJk":{"aB":[]},"bkj":{"aB":[]},"bd7":{"av":[],"v":[]},"amo":{"ag":[],"v":[]},"amp":{"ah":["amo"]},"bpV":{"aB":[]},"aXm":{"aB":[]},"aky":{"ag":[],"v":[]},"avs":{"ag":[],"v":[]},"azp":{"ag":[],"v":[]},"akz":{"ah":["aky"]},"bdN":{"aB":[]},"QV":{"av":[],"v":[]},"aCb":{"aB":[]},"avt":{"ah":["avs"]},"bdg":{"aB":[]},"azq":{"ah":["azp"]},"amx":{"ag":[],"v":[]},"amv":{"ag":[],"v":[]},"amr":{"ag":[],"v":[]},"amy":{"ah":["amx"]},"bu_":{"aB":[]},"amw":{"ah":["amv"]},"bkr":{"aB":[]},"ams":{"ah":["amr"]},"bjS":{"aB":[]},"WA":{"ag":[],"v":[]},"amt":{"ag":[],"v":[]},"Uf":{"ag":[],"v":[]},"a6R":{"av":[],"v":[]},"bjZ":{"aB":[]},"tD":{"av":[],"v":[]},"Ix":{"av":[],"v":[]},"bmM":{"ah":["WA"]},"amu":{"ah":["amt"]},"amq":{"ah":["Uf"]},"arB":{"ag":[],"v":[]},"arv":{"ag":[],"v":[]},"a0v":{"ag":[],"v":[]},"aeD":{"av":[],"v":[]},"aFO":{"ah":["arB"]},"aFL":{"ah":["arv"]},"bht":{"av":[],"v":[]},"bhw":{"aB":[]},"bli":{"av":[],"v":[]},"bgx":{"aB":[]},"bzn":{"av":[],"v":[]},"boE":{"av":[],"v":[]},"aEd":{"ah":["a0v"]},"aeC":{"av":[],"v":[]},"blh":{"av":[],"v":[]},"aeB":{"av":[],"v":[]},"blg":{"av":[],"v":[]},"aEe":{"av":[],"v":[]},"aKu":{"av":[],"v":[]},"GB":{"av":[],"v":[]},"arz":{"ag":[],"v":[]},"a0P":{"ag":[],"v":[]},"a0Q":{"ag":[],"v":[]},"aFN":{"ah":["arz"]},"bhu":{"av":[],"v":[]},"adS":{"av":[],"v":[]},"bhs":{"av":[],"v":[]},"bhx":{"av":[],"v":[]},"aFM":{"ah":["a0P"]},"bmN":{"ah":["a0Q"]},"b0x":{"av":[],"v":[]},"a7C":{"ag":[],"v":[]},"bmr":{"ah":["a7C"]},"bmq":{"aB":[]},"auD":{"av":[],"v":[]},"a_t":{"ag":[],"v":[]},"a_s":{"ag":[],"v":[]},"ZZ":{"ag":[],"v":[]},"a2B":{"ag":[],"v":[]},"aAX":{"ah":["a_t"]},"aAW":{"ah":["a_s"]},"azC":{"ah":["ZZ"]},"bzf":{"ah":["a2B"]},"Gp":{"ag":[],"v":[]},"azv":{"ag":[],"v":[]},"bzd":{"ah":["Gp"]},"bze":{"ah":["azv"]},"bzc":{"aB":[]},"auC":{"ag":[],"v":[]},"aHi":{"ah":["auC"]},"aeY":{"av":[],"v":[]},"auw":{"ag":[],"v":[]},"auB":{"ag":[],"v":[]},"bo9":{"ah":["auw"]},"aHh":{"ah":["auB"]},"P8":{"ag":[],"v":[]},"aHj":{"ah":["P8"],"eG":[]},"bby":{"jg":[],"fp":[]}}'))
A.Rs(b.typeUniverse,JSON.parse('{"ag4":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aC
return{e2:w("aU0"),cq:w("mi"),Q:w("rs"),r:w("bq<q,q>"),c5:w("aVY"),dY:w("aVZ"),fH:w("MW"),de:w("alf"),dN:w("N3<H>"),gc:w("Eq<H>"),A:w("eS<q?>"),e:w("Iv"),B:w("nt"),P:w("i4"),df:w("lt"),k:w("kZ"),x:w("aA<~>"),U:w("R<akb>"),V:w("R<ac>"),C:w("R<rs>"),O:w("R<u>"),c:w("R<MW>"),b:w("R<alf>"),ac:w("R<eS<q?>>"),I:w("R<nt>"),u:w("R<i4>"),J:w("R<lt>"),_:w("R<kZ>"),cl:w("R<aA<ai<aa<q,@>>>>"),R:w("R<o0>"),eU:w("R<ai<+(F,F)>>"),ez:w("R<aa<q,aJ>>"),gE:w("R<aa<q,q>>"),Y:w("R<aa<q,@>>"),fD:w("R<o2>"),bp:w("R<oO>"),g:w("R<r>"),ar:w("R<auP>"),v:w("R<hl>"),gy:w("R<aaj>"),L:w("R<+(q,q)>"),G:w("R<+(F,F)>"),E:w("R<+(F,~())>"),bd:w("R<+(q,H,Q)>"),bF:w("R<+count,id,name(H,q,q)>"),F:w("R<cX>"),s:w("R<q>"),cF:w("R<at>"),aS:w("R<jL>"),dT:w("R<bbl>"),p:w("R<v>"),Z:w("R<fp>"),D:w("R<lD>"),h:w("R<aAE>"),cC:w("R<biC>"),fp:w("R<KT>"),M:w("R<L_>"),gZ:w("R<aJq>"),gA:w("R<ag9>"),e4:w("R<agg>"),dE:w("R<aLs>"),f7:w("R<Q>"),n:w("R<F>"),t:w("R<H>"),dS:w("R<aB?>"),d4:w("R<q?>"),eF:w("cy<ah<ag>>"),d:w("ai<nt>"),do:w("ai<i4>"),cg:w("ai<lt>"),ax:w("ai<kZ>"),fO:w("ai<aa<q,@>>"),cz:w("ai<+(q,q)>"),bC:w("ai<+count,id,name(H,q,q)>"),dy:w("ai<q>"),er:w("ai<at>"),gk:w("ai<lD>"),j:w("ai<@>"),fK:w("bC<q,q>"),d2:w("bC<q,ai<aa<q,@>>>"),a:w("aa<q,@>"),f:w("aa<@,@>"),gv:w("N<q,Iy>"),cM:w("N<H,q>"),w:w("jY"),g2:w("tP"),bV:w("aqa"),fL:w("cw"),K:w("aJ"),dc:w("hl"),fo:w("Pw<H>"),fz:w("+(q,q)"),ei:w("+scope,text(q,q)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(F,ai<i4>)"),cs:w("+count,id,name(H,q,q)"),N:w("q"),fT:w("iC<i4>"),ec:w("iC<q>"),gW:w("r9<F>"),X:w("bt<F>"),bW:w("e2"),W:w("bl<q>"),b4:w("bl<H>"),cI:w("kj<q>"),av:w("Y<zz>"),cc:w("Y<q>"),l:w("v"),gF:w("fp"),fA:w("lD"),dO:w("GF"),bw:w("aeB<q?>"),cy:w("L1"),q:w("nG"),y:w("Q"),i:w("F"),z:w("@"),S:w("H"),eK:w("ai<kZ>?"),m:w("ary?"),cT:w("r?"),h5:w("+(q,q)?"),eo:w("+code,qrPayload,usesRemaining(q,q,H)?"),he:w("+qrPayload,token,usesRemaining(q,q,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("r_?"),T:w("q?"),aD:w("e2?"),o:w("lD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6j=new A.be(B.fR,B.bJ,B.fR,B.bJ)
D.af7=new A.be(B.fR,B.iq,B.fR,B.iq)
D.b6y=new A.be(B.jy,B.bJ,B.bJ,B.bJ)
D.b6C=new A.ax(B.cW,1.4,B.r,-1)
D.b6M=new A.ax(B.ab,1,B.r,-1)
D.afD=new A.aY(140,1/0,0,1/0)
D.b89=new A.aY(0,1/0,64,1/0)
D.b8d=new A.aY(0,84,0,1/0)
D.afK=new A.aY(130,1/0,0,1/0)
D.aEa=w([B.mb,B.rV,B.c],x.O)
D.caJ=new A.a7(B.ay,B.aC,B.x,D.aEa,null,null)
D.b8Z=new A.n(null,null,null,null,null,D.caJ,B.n)
D.dj_=w([B.aV,B.bQ],x.O)
D.ccT=new A.a7(B.aY,B.b3,B.x,D.dj_,null,null)
D.b9j=new A.n(null,null,null,null,null,D.ccT,B.n)
D.YY=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fC=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dn5=w([B.dA,D.YY,D.fC],x.O)
D.c9W=new A.a7(B.aY,B.b3,B.x,D.dn5,null,null)
D.ba4=new A.n(null,null,null,null,null,D.c9W,B.n)
D.fAX=new A.G(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbv=new A.B("?",null,D.fAX,null,null,null,null,null,null,null,null,null)
D.bdV=new A.cj(B.z,null,null,D.hbv,null)
D.Ws=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUv=new A.B("\ud83c\udf33",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.agu=new A.cj(B.z,null,null,D.fUv,null)
D.fXa=new A.B("\ud83c\udfc6",null,A1.L8,null,null,null,null,null,null,null,null,null)
D.be5=new A.cj(B.z,null,null,D.fXa,null)
D.bfW=new A.fi(null,null,null,null,null,B.kw,null,null,null,null)
D.agw=new A.cj(B.z,null,null,D.bfW,null)
D.kQ=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fBv=new A.G(!0,D.kQ,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWa=new A.B("No books on the shelf yet.",null,D.fBv,null,null,null,null,null,null,null,null,null)
D.ez1=new A.D(B.nL,D.fWa,null)
D.bel=new A.cj(B.z,null,null,D.ez1,null)
D.fIE=new A.G(!0,D.fC,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcq=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fIE,null,null,null,null,null,null,null,null,null)
D.ezB=new A.D(B.cq,D.hcq,null)
D.beO=new A.cj(B.z,null,null,D.ezB,null)
D.aYk=new A.B("\ud83e\uddfa",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.bf2=new A.cj(B.z,null,null,D.aYk,null)
D.fZD=new A.B("\ud83c\udfad",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.bfd=new A.cj(B.z,null,null,D.fZD,null)
D.bfg=new A.cj(B.z,null,null,Q.YJ,null)
D.agR=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agY=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bhy=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bhD=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bhP=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhR=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhT=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bi0=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lG=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bi4=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bi9=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bib=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bic=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lH=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.biQ=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BU=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.biZ=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bji=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bjl=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bjr=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bjz=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahD=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bjG=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Zb=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahG=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bjR=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Zd=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bkb=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahS=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bkA=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bkQ=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.blf=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.blq=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Gf=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.blP=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.blS=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.blW=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aik=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bmc=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bmi=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bmp=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aio=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bmy=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bn1=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bna=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bnd=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bnj=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aiE=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bnX=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aj3=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.boV=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajf=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bpk=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gs=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bpr=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bpB=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bpD=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajj=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bpV=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bpX=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bq_=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajr=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a__=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bqn=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bqJ=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bqO=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ajE=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bqV=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_5=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.brh=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bri=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GA=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bs6=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bsK=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bsQ=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bsU=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qq=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bt4=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bt8=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bte=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.btg=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ako=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aks=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.GG=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_r=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.akB=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.buu=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.buN=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bve=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bvn=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.al_=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_D=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bvx=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bvO=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_J=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bw4=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bwl=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_O=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bwq=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alh=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alj=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bwJ=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alp=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bxa=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bxe=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bxl=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bxu=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bxD=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.byd=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.byJ=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fQk=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bCf=new A.eS(null,D.fQk,B.fd,null,x.A)
D.fZu=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bCh=new A.eS(null,D.fZu,B.fd,null,x.A)
D.bCO=new A.bf(38e5)
D.bDx=new A.ix(0,10,0,10)
D.bDG=new A.P(0,1,0,0)
D.bDR=new A.ix(0,4,0,4)
D.bDU=new A.P(0,4,5,0)
D.bE9=new A.P(10,10,14,10)
D.bEk=new A.ix(10,4,10,4)
D.bEt=new A.ix(10,8,10,8)
D.bEu=new A.P(10,8,8,8)
D.bF_=new A.P(12,6,12,2)
D.bFh=new A.P(14,0,14,6)
D.bFl=new A.P(14,10,6,6)
D.bFm=new A.P(14,12,14,0)
D.bFq=new A.P(14,12,14,8)
D.bFt=new A.P(14,12,8,14)
D.bFx=new A.ix(14,14,14,14)
D.bFQ=new A.P(14,6,14,40)
D.bFT=new A.P(14,8,14,30)
D.bGg=new A.P(16,2,16,10)
D.bGp=new A.P(16,6,16,30)
D.bGr=new A.P(16,6,16,8)
D.bGG=new A.P(18,10,18,4)
D.bGI=new A.P(18,12,18,0)
D.bGP=new A.P(18,14,12,4)
D.anS=new A.P(18,16,18,8)
D.bH5=new A.P(18,20,18,22)
D.bHb=new A.P(18,30,18,30)
D.bHt=new A.P(20,10,12,20)
D.bHw=new A.P(20,11,20,11)
D.bHI=new A.P(20,18,16,18)
D.bHK=new A.P(20,18,20,6)
D.bIz=new A.P(24,32,24,28)
D.bIA=new A.P(24,36,24,32)
D.bID=new A.P(26,26,24,14)
D.bIS=new A.P(2,4,2,8)
D.bIW=new A.P(30,0,30,0)
D.bJ6=new A.P(38,22,22,22)
D.aof=new A.P(40,24,24,24)
D.bJ8=new A.ix(40,40,40,40)
D.bJa=new A.P(46,30,30,30)
D.bJC=new A.P(56,40,40,40)
D.bJG=new A.P(1.25,1.25,1.25,1.25)
D.bJH=new A.P(60,0,60,0)
D.bJL=new A.P(6,14,6,16)
D.bJP=new A.P(6,4,12,0)
D.bJT=new A.P(6,6,10,2)
D.bK_=new A.ix(7,3,7,3)
D.bKw=new A.P(5,1.5,5,1.5)
D.bKH=new A.P(6,2.5,6,2.5)
D.h6G=new A.B("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fOX=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Wj,null,null,null,null,null,null,null,null,null)
D.cM7=w([D.h6G,D.fOX],x.p)
D.bzJ=new A.fo(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cM7,null)
D.bL7=new A.bz(1,B.bd,D.bzJ,null)
D.hb2=new A.B("Signature",null,B.nf,null,null,null,null,null,null,null,null,null)
D.bLa=new A.bz(1,B.bd,D.hb2,null)
D.h3d=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,B.u2,null,null,null,null,null,null,null,null,null)
D.bLI=new A.bz(1,B.bd,D.h3d,null)
D.h88=new A.B("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bM_=new A.bz(1,B.bd,D.h88,null)
D.fJq=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ha7=new A.B("Worksheets",null,D.fJq,null,null,null,null,null,null,null,null,null)
D.fJC=new A.G(!0,B.ahm,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8Z=new A.B("Track your project spending",null,D.fJC,null,null,null,null,null,null,null,null,null)
D.da7=w([D.ha7,B.ax,D.h8Z],x.p)
D.bzm=new A.fo(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.da7,null)
D.bM5=new A.bz(1,B.bd,D.bzm,null)
D.fEl=new A.G(!0,B.kw,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPw=new A.B("FAMILY LIBRARY",null,D.fEl,null,null,null,null,null,null,null,null,null)
D.bMo=new A.bz(1,B.bd,D.fPw,null)
D.Pa=new C.Iv("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wN=new C.Iw(0,"male")
D.oB=new C.Iw(1,"female")
D.zg=new C.Iw(2,"unknown")
D.uT=new C.amz(0,"owner")
D.Pb=new C.amz(1,"editor")
D.kZ=new C.amz(2,"viewer")
D.aqc=new A.a_(61199,"MaterialIcons",!1)
D.bRJ=new A.a_(61504,"MaterialIcons",!1)
D.bRK=new A.a_(61505,"MaterialIcons",!1)
D.bRM=new A.a_(61587,"MaterialIcons",!1)
D.bRT=new A.a_(61890,"MaterialIcons",!1)
D.bSM=new A.a_(63034,"MaterialIcons",!0)
D.bT3=new A.a_(63153,"MaterialIcons",!1)
D.bTB=new A.a_(63429,"MaterialIcons",!1)
D.ash=new A.a_(984520,"MaterialIcons",!1)
D.bSh=new A.a_(62776,"MaterialIcons",!1)
D.bVZ=new A.ae(D.bSh,26,B.b2,null,null,null)
D.bQH=new A.a_(57648,"MaterialIcons",!1)
D.bWi=new A.ae(D.bQH,14,B.c,null,null,null)
D.bWA=new A.ae(B.HJ,17,null,null,null,null)
D.bWG=new A.ae(B.PG,null,B.bQ,null,null,null)
D.bX5=new A.ae(B.a3n,null,null,null,null,null)
D.bX8=new A.ae(B.jb,18,B.kw,null,null,null)
D.a37=new A.a_(62044,"MaterialIcons",!1)
D.bXe=new A.ae(D.a37,null,B.aV,null,null,null)
D.bXl=new A.ae(B.zt,18,B.c,null,null,null)
D.bY2=new A.ae(B.e9,16,null,null,null,null)
D.bY9=new A.ae(D.a37,32,B.aV,null,null,null)
D.bYs=new A.ae(B.aqd,18,B.cW,null,null,null)
D.bZy=new A.ae(B.HU,22,B.aA,null,null,null)
D.bZL=new A.ae(B.e9,22,B.b2,null,null,null)
D.bZY=new A.ae(P.a3c,22,B.c,null,null,null)
D.c_4=new A.ae(B.v2,52,B.c,null,null,null)
D.c_e=new A.ae(B.HU,30,B.aA,null,null,null)
D.c_y=new A.ae(B.a3r,null,B.c,null,null,null)
D.at0=new A.ae(B.ve,22,B.c,null,null,null)
D.c_H=new A.ae(B.e9,17,null,null,null,null)
D.c04=new A.ae(B.x_,26,B.cW,null,null,null)
D.c0R=new A.ae(B.a3D,16,null,null,null,null)
D.c1D=new A.ae(B.v2,24,B.c,null,null,null)
D.c1I=new A.ae(B.PE,20,B.tB,null,null,null)
D.c1N=new A.ae(B.HH,null,B.bQ,null,null,null)
D.c1W=new A.ae(B.jb,18,B.c,null,null,null)
D.c2C=new A.ae(B.cB,22,B.ab,null,null,null)
D.c3v=new A.ae(B.ej,16,B.ab,null,null,null)
D.c3H=new A.ae(D.a37,20,B.aV,null,null,null)
D.atr=new A.ae(B.hd,20,null,null,null,null)
D.c4d=new A.ae(B.cB,18,D.kQ,null,null,null)
D.c4v=new A.ae(B.zD,28,B.c,null,null,null)
D.c4H=new A.ae(B.Pu,null,B.fj,null,null,null)
D.c51=new A.ae(B.zD,24,B.c,null,null,null)
D.c5t=new A.ae(B.v2,null,B.aV,null,null,null)
D.c5u=new A.ae(B.js,20,B.cW,null,null,null)
D.c5O=new A.ae(B.HJ,16,null,null,null,null)
D.c7m=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eN,!0,null,null,null,null)
D.aua=new C.a6R(10,null)
D.c7S=new C.a6R(12,null)
D.c7T=new C.a6R(14,null)
D.drg=w([B.bv,B.aV,B.fq,B.b2],x.O)
D.c93=new A.a7(B.ay,B.aC,B.x,D.drg,null,null)
D.brS=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.byk=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d6w=w([D.brS,D.byk],x.O)
D.c9f=new A.a7(B.aY,B.b3,B.x,D.d6w,null,null)
D.dl3=w([B.ff,B.fX,B.fq],x.O)
D.c9l=new A.a7(B.ay,B.aC,B.x,D.dl3,null,null)
D.akc=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bid=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d8L=w([D.akc,D.bid],x.O)
D.c9X=new A.a7(B.aY,B.b3,B.x,D.d8L,null,null)
D.bm4=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aDr=w([D.bm4,D.akc],x.O)
D.caf=new A.a7(B.ay,B.aC,B.x,D.aDr,null,null)
D.aiW=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.boM=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dk6=w([D.aiW,D.boM],x.O)
D.caV=new A.a7(B.a5,B.a9,B.x,D.dk6,null,null)
D.dyw=w([B.bD,B.nx],x.O)
D.caX=new A.a7(B.aY,B.b3,B.x,D.dyw,null,null)
D.brN=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dzt=w([D.brN,D.kQ,D.kQ,G.NF],x.O)
D.dC9=w([0,0.07,0.9,1],x.n)
D.cbs=new A.a7(B.a5,B.a9,B.x,D.dzt,D.dC9,null)
D.cbB=new A.a7(B.ay,B.aC,B.x,B.Tm,null,null)
D.d4b=w([B.aD,D.lG],x.O)
D.cbE=new A.a7(B.a5,B.a9,B.x,D.d4b,null,null)
D.dy3=w([B.b2,B.aV,B.bQ],x.O)
D.ccG=new A.a7(B.ay,B.aC,B.x,D.dy3,null,null)
D.ch0=w([10,20,30],x.t)
D.cqZ=w([-1,-0.4,0.3,1],x.n)
D.cyu=w([B.bv,B.b2,B.ff],x.O)
D.cyC=w([B.bh,B.aD,B.kv],x.O)
D.cyE=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.czm=w([30,140,262,360],x.n)
D.bq5=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cEV=w([D.bq5,B.ajN],x.O)
D.etD=new A.r(1,2)
D.fmf=new A.cX(B.b5,D.etD,3)
D.aAj=w([D.fmf],x.F)
D.cMp=w([B.h9,B.cj,B.fB],x.O)
D.cPb=w([B.bP,B.by,B.bs],x.O)
D.bNe=new C.uS("classic","Classic leather","Gold-edged brown leather",D.aDr,B.kw,B.kw,"\u2766",B.K,!0,!1,!1,!1)
D.bhi=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bx0=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dbY=w([D.bhi,D.bx0],x.O)
D.ajQ=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bN9=new C.uS("ornate","Ornate gold","Double gold border and flourishes",D.dbY,D.ajQ,D.ajQ,"\u2726",B.K,!0,!0,!0,!1)
D.blB=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bsE=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d31=w([D.blB,D.bsE],x.O)
D.bN8=new C.uS("parchment","Parchment","Old paper with dark ink",D.d31,D.GA,B.j6,"\u2767",B.K,!0,!1,!1,!0)
D.ah_=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bvb=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dwb=w([D.ah_,D.bvb],x.O)
D.bpy=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.buo=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bNb=new C.uS("minimal","Clean paper","Plain and elegant, like a printed book",D.dwb,D.bpy,D.buo,"",B.K,!0,!0,!1,!0)
D.bNd=new C.uS("midnight","Midnight","Deep blue with silver stars",H.aDK,B.cA,B.ci,"\u2727",B.K,!0,!0,!1,!1)
D.bN7=new C.uS("emerald","Emerald library","Green cloth, title on the left",N.aAJ,B.kw,B.fZ,"\u25c6",B.b6,!0,!1,!1,!1)
D.bvG=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.du9=w([B.eq,D.bvG],x.O)
D.bqU=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bsb=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bNc=new C.uS("rose","Rose vintage","Burgundy with rose-gold lettering",D.du9,D.bqU,D.bsb,"\u2740",B.K,!0,!1,!0,!1)
D.dz4=w([B.ct,E.mX],x.O)
D.bNa=new C.uS("modern","Modern","Dark, bold, left-aligned",D.dz4,B.aH,B.c,"",B.b6,!1,!0,!1,!1)
D.a5H=w([D.bNe,D.bN9,D.bN8,D.bNb,D.bNd,D.bN7,D.bNc,D.bNa],A.aC("R<uS>"))
D.cSc=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dyS=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bNp=new C.lt('What does "Ubuntu" mean?',D.dyS,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d4U=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bNs=new C.lt("In Swahili, what do we call a grandmother?",D.d4U,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d4L=w(["Babu","Mama","Baba","Dada"],x.s)
D.bNn=new C.lt("In Swahili, what do we call a grandfather?",D.d4L,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d66=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bNr=new C.lt("What is a sister called in Swahili?",D.d66,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dbn=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bNo=new C.lt("What is a brother called in Swahili?",D.dbn,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d4K=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bNz=new C.lt("Which word means father in Swahili?",D.d4K,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dA3=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bNy=new C.lt('"Umoja ni nguvu" means...',D.dA3,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dwW=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bNA=new C.lt('"Haba na haba hujaza kibaba" teaches us...',D.dwW,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d8U=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bNx=new C.lt('The African saying "It takes a village to raise a child" means...',D.d8U,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dAn=w(["The elders","The market","The river","The drum"],x.s)
D.bNt=new C.lt("Who is the traditional keeper of the family stories?",D.dAn,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cWs=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bNq=new C.lt("Why do families sit round the fire at night?",D.cWs,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dz6=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bNv=new C.lt('What does "Harambee" mean?',D.dz6,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.def=w(["An elder","A baby","A market","A cow"],x.s)
D.bNu=new C.lt('"Mzee" is a respectful word for...',D.def,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.du_=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bNw=new C.lt('What does "Shikamoo" show?',D.du_,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAE=w([D.bNp,D.bNs,D.bNn,D.bNr,D.bNo,D.bNz,D.bNy,D.bNA,D.bNx,D.bNt,D.bNq,D.bNv,D.bNu,D.bNw],x.J)
D.d_T=w([90,360],x.n)
D.d2z=w([B.bQ,B.bp],x.O)
D.brA=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d3d=w([D.ah_,D.brA],x.O)
D.d3V=w([-1,-0.3,0.4,1],x.n)
D.d4Q=w([0,0.45,0.72,0.92,1],x.n)
D.blx=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d58=w([D.blx,B.bA],x.O)
D.bjd=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.alz=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d5K=w([B.dA,D.bjd,D.alz],x.O)
D.d6N=w([B.ba,B.jl,B.pj],x.O)
D.bm5=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.buf=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.biU=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d6S=w([D.bm5,D.buf,D.biU],x.O)
D.d7c=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d7n=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hG_=new C.aef(78,424,48,44,56)
D.hFY=new C.aef(214,396,34,34,42)
D.hFZ=new C.aef(442,452,56,50,64)
D.aBC=w([D.hG_,D.hFY,D.hFZ],A.aC("R<aef>"))
D.d7X=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bi6=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bnW=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dC5=w([D.aiW,D.bi6,D.bnW],x.O)
D.bNf=new C.uT("leather","Leather",D.dC5,"vintage")
D.dfg=w([B.dh,B.Gq,B.Zt],x.O)
D.bNm=new C.uT("midnight","Midnight",D.dfg,"starry")
D.d6O=w([B.ep,B.ec,B.ll],x.O)
D.bNl=new C.uT("forest","Forest",D.d6O,"story")
D.dEb=w([B.er,B.eq,B.ky],x.O)
D.bNi=new C.uT("burgundy","Burgundy",D.dEb,"royal")
D.cOK=w([B.aD,B.mR,B.no],x.O)
D.bNj=new C.uT("royal","Royal",D.cOK,"royal")
D.d9q=w([B.by,B.ct,E.mX],x.O)
D.bNg=new C.uT("charcoal","Charcoal",D.d9q,"geo")
D.dCe=w([B.c9,B.dN,B.yw],x.O)
D.bNk=new C.uT("sunset","Sunset",D.dCe,"sunset")
D.dCZ=w([B.jl,B.yz,B.Zx],x.O)
D.bNh=new C.uT("ocean","Ocean",D.dCZ,"band")
D.A6=w([D.bNf,D.bNm,D.bNl,D.bNi,D.bNj,D.bNg,D.bNk,D.bNh],A.aC("R<uT>"))
D.d9X=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.daD=w([B.an,B.aL,B.a_],x.O)
D.dc2=w([B.eq,B.ec,B.dh,B.iL,B.yB,B.cW,B.k1,B.cR,B.d6],x.O)
D.dc3=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fmg=new A.cX(B.dB,B.dM,8)
D.dcd=w([D.fmg],x.F)
D.ddm=w([B.c4,B.dN,B.jX],x.O)
D.bk4=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.boe=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bsz=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.ddE=w([D.bk4,F.akl,D.boe,D.bsz,D.alz],x.O)
D.ddV=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.de5=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bhu=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bnA=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dey=w([D.bhu,D.aio,D.bnA],x.O)
D.dfb=w([B.c4,B.hK],x.O)
D.dfh=w([F.nq,B.ic,F.ahb,B.cV],x.O)
D.dgV=w([B.cV,F.nq,B.ic,D.lH,B.cV],x.O)
D.dhx=w([B.aQ,B.yx,B.yn],x.O)
D.aCE=w(["True","False"],x.s)
D.eQY=new A.y(-0.65,0.6)
D.f2G=new A.y(-0.2,0.95)
D.f3N=new A.y(0.25,0.95)
D.eUs=new A.y(0.7,0.6)
D.f4m=new A.y(1,0.1)
D.dik=w([A0.Vb,D.eQY,D.f2G,D.f3N,D.eUs,D.f4m],x.G)
D.bqo=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bwT=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bl4=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.diq=w([D.bqo,D.bwT,D.bl4],x.O)
D.div=w([B.bL,B.bZ,B.dy,B.aQ],x.O)
D.dj0=w([B.hM,B.c9,B.ut],x.O)
D.djp=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.djA=w([B.ff,B.cW],x.O)
D.brW=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dk1=w([D.brW,D.agY],x.O)
D.dkd=w([B.cP,B.fL,B.h_],x.O)
D.dkp=w([B.aH,B.bp,B.dh],x.O)
D.dl0=w([B.ew,B.dn,B.ec],x.O)
D.dlk=w([B.dX,B.dh,B.Gq],x.O)
D.dlo=w([B.bt,B.mO,B.d6],x.O)
D.dlF=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.br8=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bpg=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dm0=w([D.br8,D.aik,D.bpg],x.O)
D.dmQ=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dnT=w([1,0,7,6,3,2],x.t)
D.a6G=w(["leather","linen","plain","stars","rays"],x.s)
D.do5=w([0.5,2,3.6],x.n)
D.doE=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bVh=new A.a_(983781,"MaterialIcons",!1)
D.aD7=w([B.PG,B.hE,B.kC,B.i0,E.asp,B.I5,B.qP,D.bVh,H.as2,B.Dp,B.qS,B.ml],A.aC("R<a_>"))
D.a6K=w(["double","single","corners","none"],x.s)
D.bN4=new C.zz("Little Seed","\ud83c\udf31",0)
D.bN6=new C.zz("Young Listener","\ud83d\udc42",40)
D.bN5=new C.zz("Storyteller","\ud83e\ude98",120)
D.bN3=new C.zz("Village Pride","\ud83c\udfe1",300)
D.bN1=new C.zz("Keeper of Roots","\ud83c\udf33",700)
D.bN2=new C.zz("Elder of the Fire","\ud83d\udd25",1500)
D.aD9=w([D.bN4,D.bN6,D.bN5,D.bN3,D.bN1,D.bN2],A.aC("R<zz>"))
D.dpP=w([B.d_,B.bj,B.cR],x.O)
D.dq4=w([],x.C)
D.E_=w([],x.u)
D.aNj=new A.r(225,528)
D.eSE=new A.y(D.aNj,1)
D.eun=new A.r(350,548)
D.eYU=new A.y(D.eun,0.95)
D.aNd=new A.r(158,656)
D.eYN=new A.y(D.aNd,1.12)
D.ev9=new A.r(92,544)
D.eOd=new A.y(D.ev9,0.93)
D.euq=new A.r(398,614)
D.eUP=new A.y(D.euq,1.04)
D.eue=new A.r(318,662)
D.eJy=new A.y(D.eue,1.1)
D.a6S=w([D.eSE,D.eYU,D.eYN,D.eOd,D.eUP,D.eJy],A.aC("R<+(r,F)>"))
D.ds8=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dsC=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dtG=w([B.cV,F.nq,B.ic,D.lH,B.cV,B.ic],x.O)
D.dv7=w([B.at,B.fL,B.iL],x.O)
D.dvN=w([-70,58],x.n)
D.dvP=w([-70,-30,20],x.n)
D.dwT=w([B.bt,B.mO,B.a_E],x.O)
D.dxa=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dTd=new C.lX("construction","Construction","Jobsite & builds",B.qR)
D.dTk=new C.lX("house","Home Build","Houses & rooms",B.v4)
D.dTa=new C.lX("grocery","Grocery","Store & pantry",B.a4b)
D.dT9=new C.lX("calculator","Calculations","Math & estimates",B.PM)
D.dTi=new C.lX("lumber","Materials","Lumber & supplies",B.I2)
D.dT6=new C.lX("kitchen","Kitchen","Remodel & meals",T.Q5)
D.bVf=new A.a_(983756,"MaterialIcons",!1)
D.dTb=new C.lX("landscape","Landscaping","Yard & garden",D.bVf)
D.dT5=new C.lX("plumbing","Plumbing","Pipes & water",B.pG)
D.dTl=new C.lX("electrical","Electrical","Wiring & power",B.hp)
D.dT3=new C.lX("store","Retail Shop","Daily business",B.kf)
D.dT4=new C.lX("paint_remodel","Paint & Remodel","Colors & walls",T.Q1)
D.bUC=new A.a_(983311,"MaterialIcons",!1)
D.dTh=new C.lX("roofing","Roofing","Roofs & exteriors",D.bUC)
D.bVq=new A.a_(983986,"MaterialIcons",!1)
D.dT2=new C.lX("warehouse","Warehouse","Storage & stock",D.bVq)
D.dTf=new C.lX("vehicles","Vehicles","Fleet & transport",B.Dl)
D.bSj=new A.a_(62785,"MaterialIcons",!1)
D.dT8=new C.lX("farm","Farm","Crops & livestock",D.bSj)
D.dT7=new C.lX("restaurant","Restaurant","Food & catering",B.vc)
D.dTe=new C.lX("tools","Tools","Workshop gear",B.Dh)
D.dTj=new C.lX("wallet","Cash & Wallet","Quick spending",B.js)
D.dTg=new C.lX("concrete","Concrete","Foundation work",E.ar9)
D.dTc=new C.lX("blueprint","Blueprint","Plans & design",B.aqH)
D.a7g=w([D.dTd,D.dTk,D.dTa,D.dT9,D.dTi,D.dT6,D.dTb,D.dT5,D.dTl,D.dT3,D.dT4,D.dTh,D.dT2,D.dTf,D.dT8,D.dT7,D.dTe,D.dTj,D.dTg,D.dTc],A.aC("R<lX>"))
D.dxI=w([B.bu,B.bj],x.O)
D.dyx=w([B.iw,B.oj,B.dW],x.O)
D.aj9=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ak7=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bpC=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bgY=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEi=w([D.aj9,D.ak7,D.bpC,D.bgY],x.O)
D.dzK=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7q=w(["top","middle","bottom"],x.s)
D.dBf=w([B.cs,B.bp,B.dh],x.O)
D.aEC=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bay=new A.ac(0,B.G,B.b5,B.J,14)
D.aEG=w([D.bay],x.V)
D.bos=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dBZ=w([D.ahD,D.a_D,D.bos],x.O)
D.dC_=w([B.be,B.dn,B.ec],x.O)
D.etY=new A.r(24,-8)
D.euG=new A.r(48,0)
D.etU=new A.r(24,6)
D.dDI=w([B.J,D.etY,D.euG,D.etU],x.g)
D.dE7=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eqq={top:0,middle:1,bottom:2}
D.dHn=new A.bq(D.eqq,["Top","Middle","Bottom"],x.r)
D.eq0={double:0,single:1,corners:2,none:3}
D.dHt=new A.bq(D.eq0,["Double line","One line","Corners","None"],x.r)
D.ere={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dJ8=new A.bq(D.ere,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dJk=new A.bq(B.i2,[],A.aC("bq<H,+(q,q)>"))
D.eqi={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ef=new A.bq(D.eqi,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aC("bq<q,H>"))
D.dNC=new A.NZ(32,null)
D.dND=new A.NZ(40,null)
D.dNE=new A.NZ(46,null)
D.aML=new C.auB(null)
D.esO=new A.r(0,40)
D.esP=new A.r(0,412)
D.esS=new A.r(0,900)
D.et1=new A.r(0,-34)
D.et2=new A.r(0,-46)
D.et4=new A.r(0,-74)
D.et7=new A.r(100,300)
D.et8=new A.r(10,14)
D.etb=new A.r(10,-10)
D.etg=new A.r(10,-46)
D.eth=new A.r(10,-58)
D.eti=new A.r(116,442)
D.etk=new A.r(11,-1)
D.etl=new A.r(11,-10)
D.etm=new A.r(11,-21)
D.aN8=new A.r(11,-60)
D.ett=new A.r(14,-2)
D.etu=new A.r(150,520)
D.a9E=new A.r(150,592)
D.etx=new A.r(15,-15)
D.ety=new A.r(16,-1)
D.etC=new A.r(190,444)
D.etF=new A.r(1,5)
D.etN=new A.r(21,-78)
D.etO=new A.r(222,615)
D.K0=new A.r(225,300)
D.a9G=new A.r(225,574)
D.etX=new A.r(24,-52)
D.etZ=new A.r(250,210)
D.eu9=new A.r(2,-56)
D.aNn=new A.r(300,0)
D.eua=new A.r(300,440)
D.eud=new A.r(318,476)
D.eug=new A.r(324,144)
D.a9J=new A.r(332,150)
D.eui=new A.r(335,585)
D.euj=new A.r(338,140)
D.euk=new A.r(340,158)
D.eum=new A.r(34,-60)
D.EH=new A.r(36,-24)
D.euo=new A.r(372,470)
D.eup=new A.r(390,455)
D.euy=new A.r(42,468)
D.euz=new A.r(431,510)
D.euA=new A.r(431,520)
D.euB=new A.r(45,-92)
D.euC=new A.r(46,20)
D.euD=new A.r(46,-92)
D.euE=new A.r(46,-94)
D.euF=new A.r(47,-4)
D.euH=new A.r(48,-4)
D.euP=new A.r(4,-26)
D.euX=new A.r(60,455)
D.ev4=new A.r(8,14)
D.ev8=new A.r(8,-76)
D.eva=new A.r(95,575)
D.evb=new A.r(98,-24)
D.evd=new A.r(9,-2)
D.eve=new A.r(9,-58)
D.aNw=new A.r(9,-79)
D.evf=new A.r(9,-9)
D.evT=new A.r(16.5,8)
D.evV=new A.r(3.2,0)
D.evX=new A.r(-16.5,8)
D.ew3=new A.r(16.5,2)
D.ew6=new A.r(-3.2,0)
D.ewe=new A.r(9.5,6)
D.ewi=new A.r(-10,14)
D.ewj=new A.r(-10,-12)
D.ewk=new A.r(-10,-58)
D.ewm=new A.r(-11,-1)
D.ewn=new A.r(-11,-10)
D.ewp=new A.r(-11,-60)
D.ewq=new A.r(-12,-14)
D.ewr=new A.r(-12,-16)
D.ewy=new A.r(-14,-2)
D.ewB=new A.r(-15,-15)
D.ewC=new A.r(-15,-3)
D.ewE=new A.r(-16,-1)
D.ewV=new A.r(-24,-52)
D.ex1=new A.r(-2,-34)
D.ex2=new A.r(-2,-38)
D.ex4=new A.r(-30,-100)
D.a9L=new A.r(-36,-24)
D.exf=new A.r(-4,-26)
D.exh=new A.r(-4,-6)
D.exr=new A.r(-8,-3)
D.exs=new A.r(-8,-48)
D.exv=new A.r(-9,-2)
D.exx=new A.r(-9,-58)
D.exy=new A.r(-9,-79)
D.exz=new A.r(-9,-9)
D.exB=new A.r(-9.5,6)
D.exO=new A.r(-16.5,2)
D.fWR=new A.B("Write a new book",null,B.hh,null,B.K,null,null,null,null,null,null,null)
D.eyn=new A.D(B.kX,D.fWR,null)
D.haB=new A.B("Tap to go on",null,B.vR,null,null,null,null,null,null,null,null,null)
D.eyJ=new A.D(B.ln,D.haB,null)
D.asz=new A.ae(B.i_,18,B.c,null,null,null)
D.fPR=new A.B("Add",null,B.kI,null,null,null,null,null,null,null,null,null)
D.diJ=w([D.asz,B.rd,D.fPR],x.p)
D.fjl=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.diJ,null)
D.eyM=new A.D(B.nI,D.fjl,null)
D.eyN=new A.D(B.amI,Q.YJ,null)
D.fJl=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT3=new A.B("New Project",null,D.fJl,null,null,null,null,null,null,null,null,null)
D.dnd=w([D.asz,B.ae,D.fT3],x.p)
D.fjo=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dnd,null)
D.ez0=new A.D(B.hP,D.fjo,null)
D.fVA=new A.B("Choose your header",null,B.u_,null,null,null,null,null,null,null,null,null)
D.ezl=new A.D(B.hZ,D.fVA,null)
D.bga=new A.fi(2.2,null,null,null,null,B.cW,null,null,null,null)
D.fp9=new A.a5(22,22,D.bga,null)
D.beg=new A.cj(B.z,null,null,D.fp9,null)
D.ezq=new A.D(B.a10,D.beg,null)
D.bFI=new A.P(14,2,14,6)
D.h8I=new A.B("The top of your book. Tap a design to see it.",null,B.u0,null,null,null,null,null,null,null,null,null)
D.ezr=new A.D(D.bFI,D.h8I,null)
D.fUK=new A.B("\ud83c\udfc6 A new record!",null,B.h7,null,null,null,null,null,null,null,null,null)
D.ezt=new A.D(B.ln,D.fUK,null)
D.eB1=new A.je(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eB4=new A.je(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aO6=new A.je(1,0.9607843137254902,0.48627450980392156,0)
D.K8=new A.je(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AI=new A.je(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eBa=new A.je(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hI1=new C.bkj(null)
D.bAv=new A.mC(D.hI1,null,B.az,null,null)
D.aRK=new A.cK(0,0,0,0,null,null,D.bAv,null)
D.fPT=new A.B("\ud83c\udfc5",null,B.ac1,null,null,null,null,null,null,null,null,null)
D.eFA=new A.cK(null,0,-34,null,null,null,D.fPT,null)
D.eNS=new A.y("E","Sit by the fire again")
D.eTs=new A.y("C","Good Learner")
D.eWS=new A.y("D","Still Growing")
D.f0s=new A.y(-42,42)
D.f1P=new A.y("B","Faithful Listener")
D.f3P=new A.y("A","Keeper of the Family")
D.f6Y=new A.b3(-17,0.7,0)
D.f7w=new A.b3(-8,0.95,1.3)
D.f8A=new A.b3(18,0.65,5.2)
D.f8C=new A.b3(0,1.15,2.6)
D.f8X=new A.b3(9,0.9,3.9)
D.faS=new A.b7([0,0,1,1])
D.aTe=new A.a4(0,0,520,160)
D.fgo=new A.a4(10,612,440,618)
D.fgp=new A.a4(10,612,440,628)
D.fgs=new A.a4(14,-64,34,-12)
D.fgv=new A.a4(300,336,350,348)
D.aaE=new A.a4(30,96,420,346)
D.fgw=new A.a4(30,-9,46,1)
D.fgx=new A.a4(4,2,11,14)
D.fgz=new A.a4(-8,-12.5,8,-7)
D.fgA=new A.a4(-16.5,-21,16.5,1)
D.fgB=new A.a4(60,342,88,348)
D.Vc=new A.a4(66,-66,94,-36)
D.fgC=new A.a4(6,8,10,14)
D.fgF=new A.a4(95,343,115,348)
D.fgG=new A.a4(-6.5,-74,6.5,-58)
D.fgM=new A.a4(-100,-74,100,-12)
D.fgN=new A.a4(-10,8,-6,14)
D.fgO=new A.a4(-11,2,-4,14)
D.fgP=new A.a4(-11,-70,11,-56)
D.fgW=new A.a4(-13,-24,13,-4)
D.fh1=new A.a4(-15,-21,15,0)
D.fh4=new A.a4(-16,-21,16,1)
D.fh5=new A.a4(-16,-21,16,2)
D.fh8=new A.a4(-16,-26,16,-6)
D.fhi=new A.a4(-230,-26,230,26)
D.fhG=new A.a4(-38,-26,12,-6)
D.fhK=new A.a4(-3,-70,3,-63)
D.fhL=new A.a4(-44,-22,44,0)
D.fhN=new A.a4(-46,-9,-30,1)
D.aTi=new A.a4(-80,-190,80,20)
D.fhU=new A.a4(-8,-26,40,-6)
D.fhV=new A.a4(-98,-80,92,-75)
D.fhW=new A.a4(-9,-15,9,-9)
D.h8f=new A.B("Let the AI write it from your tree",null,B.iH,null,B.K,null,null,null,null,null,null,null)
D.bO9=new A.df(1,B.cl,D.h8f,null)
D.dfa=w([B.a4F,B.ae,D.bO9],x.p)
D.fj_=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dfa,null)
D.fPx=new A.B("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dvx=w([D.atr,B.ae,D.fPx],x.p)
D.fj9=new A.c8(B.aM,B.b9,B.i,B.l,null,B.p,null,0,D.dvx,null)
D.bZR=new A.ae(B.ii,14,B.b2,null,null,null)
D.fCS=new A.G(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTu=new A.B("Cashier",null,D.fCS,null,null,null,null,null,null,null,null,null)
D.dnK=w([D.bZR,B.bn,D.fTu],x.p)
D.fjd=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dnK,null)
D.fPy=new A.B("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bLP=new A.bz(1,B.bd,D.fPy,null)
D.d6f=w([D.at0,B.as,D.bLP],x.p)
D.fje=new A.c8(B.aM,B.e,B.i,B.l,null,B.p,null,0,D.d6f,null)
D.fnO=new A.au(16,40)
D.fnT=new A.au(22,64)
D.fo_=new A.au(280,88)
D.foP=new A.a5(30,null,null,null)
D.fOD=new A.B("The teacher is writing\u2026",null,B.B3,null,null,null,null,null,null,null,null,null)
D.bfn=new A.cj(B.z,null,null,D.fOD,null)
D.hBW=new A.bl("w",x.W)
D.fpe=new A.a5(null,56,D.bfn,D.hBW)
D.fq2=new A.hM(5,8,8,1,null)
D.fqa=new A.hM(2,12,12,1.05,null)
D.fT9=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fqV=new A.b0(D.fT9,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTp=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aVB=new A.b0(D.fTp,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0S=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fro=new A.b0(D.h0S,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hbD=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.frt=new A.b0(D.hbD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVy=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.frA=new A.b0(D.fVy,null,null,null,null,null,null,null,null,null,null,null,null,B.h2,!1,null,null,null,B.t,null)
D.h8V=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aVG=new A.b0(D.h8V,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVw=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fs_=new A.b0(D.fVw,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQ9=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fs1=new A.b0(D.fQ9,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZi=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fs7=new A.b0(D.fZi,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcn=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fsO=new A.b0(D.hcn,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h79=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftd=new A.b0(D.h79,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hbH=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new A.b0(D.hbH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2v=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fti=new A.b0(D.h2v,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXt=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ftj=new A.b0(D.fXt,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXu=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fuk=new A.b0(D.fXu,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTb=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fuC=new A.b0(D.fTb,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVb=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fuW=new A.b0(D.fVb,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1Z=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fvc=new A.b0(D.h1Z,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYi=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new A.b0(D.fYi,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fI1=new A.G(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwM=new A.ev("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fI1)
D.fFb=new A.G(!0,B.aS,null,null,null,null,28,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx1=new A.ev("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fFb)
D.fxi=new A.G(!0,B.qf,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyu=new A.G(!0,D.kQ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyR=new A.G(!0,D.kQ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyV=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz3=new A.G(!0,D.fC,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fze=new A.G(!0,D.fC,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzy=new A.t5(!0,B.tN,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzO=new A.G(!0,B.cV,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzR=new A.G(!0,D.kQ,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzS=new A.G(!0,B.cV,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzX=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA_=new A.G(!0,B.cV,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAv=new A.G(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new A.G(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAZ=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWU=new A.G(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWV=new A.G(!0,D.lG,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBo=new A.G(!0,B.cV,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ac6=new A.t5(!0,B.UI,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.W6=new A.G(!0,B.cV,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBy=new A.G(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBD=new A.G(!0,D.fC,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC1=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new A.G(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX4=new A.G(!0,D.fC,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDw=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDI=new A.G(!0,D.fC,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDK=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDQ=new A.G(!0,B.j6,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX8=new A.G(!0,D.fC,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEM=new A.G(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF4=new A.G(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF6=new A.G(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF8=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFw=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,W.J_,null,null,null)
D.aXm=new A.G(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFU=new A.G(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGf=new A.G(!0,B.fj,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGD=new A.G(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGI=new A.G(!0,B.bD,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGU=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGX=new A.G(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new A.G(!0,D.GA,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHg=new A.G(!0,B.b2,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHF=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHM=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.DS,null,null,null)
D.fIc=new A.G(!0,B.cV,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.G(!0,B.cW,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIx=new A.G(!0,D.lH,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXJ=new A.G(!0,D.fC,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Lg=new A.G(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXL=new A.G(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.DS,null,null,null)
D.fIS=new A.G(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIW=new A.G(!0,F.nq,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJj=new A.G(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJB=new A.G(!0,D.fC,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJZ=new A.G(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKn=new A.G(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKT=new A.G(!0,D.fC,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKY=new A.G(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL7=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acB=new A.G(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acE=new A.G(!0,D.lG,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMR=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNa=new A.G(!0,B.aS,null,null,null,null,27,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNh=new A.G(!0,B.j6,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNp=new A.G(!0,B.j6,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNT=new A.B("Time:",null,B.ht,null,null,null,null,null,null,null,null,null)
D.fOe=new A.B("\ud83c\udfae",null,H.acs,null,null,null,null,null,null,null,null,null)
D.fOf=new A.B("Themes",null,B.pX,null,null,null,null,null,null,null,null,null)
D.fOL=new A.B("\ud83c\udfb2",null,B.xK,null,null,null,null,null,null,null,null,null)
D.fOP=new A.B("Delete this game?",null,B.iH,null,null,null,null,null,null,null,null,null)
D.fOW=new A.B("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fDq=new A.G(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPm=new A.B("Debt receipt",null,D.fDq,null,B.K,null,null,null,null,null,null,null)
D.aY_=new A.G(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPF=new A.B("Person who owes",null,D.aY_,null,null,null,null,null,null,null,null,null)
D.fQD=new A.B("Notes",null,B.acg,null,null,null,null,null,null,null,null,null)
D.fR3=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fCj=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR5=new A.B("Share",null,D.fCj,null,null,null,null,null,null,null,null,null)
D.fS6=new A.B("Move your family trees",null,G.acy,null,null,null,null,null,null,null,null,null)
D.fSL=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fTo=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fTM=new A.B("SAVE",null,D.Lg,null,null,null,null,null,null,null,null,null)
D.fUo=new A.B("The round button is the right answer.",null,B.B7,null,null,null,null,null,null,null,null,null)
D.fUJ=new A.B("Remove this book?",null,B.h7,null,null,null,null,null,null,null,null,null)
D.fJg=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.DS,null,null,null)
D.fVg=new A.B("Fireside Stories",null,D.fJg,null,null,null,null,null,null,null,null,null)
D.aYt=new A.B("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fVX=new A.B("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fBX=new A.G(!0,D.lG,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWb=new A.B("REPORT CARD",null,D.fBX,null,null,null,null,null,null,null,null,null)
D.fWY=new A.B("Calabash Catch",null,B.Wt,null,null,null,null,null,null,null,null,null)
D.fXp=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fXQ=new A.B("\ud83c\udfe1",null,B.Fc,null,null,null,null,null,null,null,null,null)
D.fYx=new A.B("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fKS=new A.G(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ1=new A.B("NGMY.ORG",null,D.fKS,null,B.K,null,null,null,null,null,null,null)
D.h_k=new A.B("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fGY=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h07=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fGY,null,B.K,null,null,null,null,null,null,null)
D.h1l=new A.B("Delete",null,B.W0,null,null,null,null,null,null,null,null,null)
D.h1m=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h1u=new A.B("Thumbnail",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h23=new A.B("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h28=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bb,null,B.K,null,null,null,null,null,null,null)
D.h2w=new A.B("Your photos",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h2M=new A.B("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h38=new A.B("\u2b50 stars",null,B.We,null,null,null,null,null,null,null,null,null)
D.h3m=new A.B("Design your cover",null,B.u_,null,null,null,null,null,null,null,null,null)
D.h3s=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h3v=new A.B("PICTURE",null,I.vU,null,null,null,null,null,null,null,null,null)
D.h3x=new A.B("\ud83c\udfaf",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.h3U=new A.B("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h3W=new A.B("You can undo it right after.",null,B.B7,null,null,null,null,null,null,null,null,null)
D.h4u=new A.B("Print",null,B.vS,null,null,null,null,null,null,null,null,null)
D.h4U=new A.B("Amount owed",null,D.aY_,null,null,null,null,null,null,null,null,null)
D.h58=new A.B("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h5K=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h5N=new A.B("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h6c=new A.B("Debtor signature",null,B.acg,null,null,null,null,null,null,null,null,null)
D.h6m=new A.B("Change icon",null,B.acf,null,null,null,null,null,null,null,null,null)
D.h7a=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,B.u2,null,null,null,null,null,null,null,null,null)
D.h7C=new A.B("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h7I=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Wr,null,null,null,null,null,null,null,null,null)
D.h85=new A.B("Download",null,B.vS,null,null,null,null,null,null,null,null,null)
D.h86=new A.B("The person who planted this tree has not made a game yet.",null,B.B9,null,null,null,null,null,null,null,null,null)
D.h8a=new A.B("Change",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h90=new A.B("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h93=new A.B("WHAT SHOULD IT CHANGE?",null,I.vU,null,null,null,null,null,null,null,null,null)
D.h9B=new A.B("COLOUR",null,I.vU,null,null,null,null,null,null,null,null,null)
D.h9Q=new A.B("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h9T=new A.B("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.ha2=new A.B("Give me another clue",null,D.Lg,null,null,null,null,null,null,null,null,null)
D.haX=new A.B("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.hb6=new A.B("THE TEACHER EXPLAINS THESE",null,B.u2,null,null,null,null,null,null,null,null,null)
D.fxh=new A.G(!0,B.kw,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbc=new A.B("Write the first page myself",null,D.fxh,null,null,null,null,null,null,null,null,null)
D.hbK=new A.B("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.hbR=new A.B("Create Project",null,B.aXF,null,null,null,null,null,null,null,null,null)
D.hDp=new C.acU(1,"header")
D.adG=new C.acU(2,"projects")
D.hDq=new C.acU(3,"cashier")
D.adH=new C.acU(4,"familyTree")
D.hQU=new C.cHA(0,"start")
D.hQV=new C.cHB(0,"start")
D.hDD=new C.ZZ(null)
D.hEE=new C.a_s(null)
D.dJh=new A.bq(B.i2,[],A.aC("bq<q,GF>"))
D.dqt=w([],x.dE)
D.dqu=w([],x.M)
D.hFi=new C.bhv(D.dJh,D.dqt,D.dqu,0,0,null,null)
D.b1Z=new C.a0i(0,"intro")
D.b2_=new C.a0i(1,"countdown")
D.adU=new C.a0i(2,"ask")
D.Xn=new C.a0i(3,"reveal")
D.b20=new C.a0i(4,"end")
D.hI3=new C.td(E.GJ,D.lH,B.cV,E.m8,5,!1,!1,!1,0,null)
D.hI4=new C.td(E.GJ,B.er,B.cV,B.bO,2,!0,!0,!1,2,B.cV)
D.hI5=new C.td(B.qs,B.cW,B.cV,E.m8,2,!0,!1,!1,2,B.at)
D.hI6=new C.td(E.GJ,B.dX,B.cV,E.m8,5,!1,!1,!1,1,null)
D.hI7=new C.td(E.a_V,D.ak7,B.cV,E.m8,4,!0,!1,!0,0,null)
D.b23=new C.td(E.a_V,B.dN,B.cV,E.m8,3,!0,!1,!0,2,null)
D.b24=new C.td(E.rX,D.lH,B.c,E.m8,0,!1,!1,!0,0,null)
D.b25=new C.td(B.qs,B.aD,B.cV,B.bO,2,!0,!0,!1,2,B.dN)
D.b26=new C.td(B.qs,F.nq,B.ic,E.m8,5,!1,!1,!0,3,null)
D.hI8=new C.td(B.qs,B.dN,B.cV,E.m8,0,!0,!1,!1,0,B.aD)
D.b27=new C.td(E.GJ,B.er,B.cV,B.bO,1,!1,!0,!1,1,null)
D.b28=new C.td(E.Gh,B.at,B.aD,E.m8,4,!0,!1,!0,2,null)
D.hI9=new C.td(E.rX,B.at,B.er,E.m8,3,!0,!1,!1,0,null)
D.hIa=new C.td(B.qs,B.dX,B.cV,B.bO,1,!1,!0,!1,1,null)
D.hIb=new C.td(E.Gh,D.aj9,B.c,E.m8,5,!1,!1,!0,0,null)
D.hIP=new C.a0Q(null)
D.hR2=new C.agi(0,"still")
D.XK=new C.agi(1,"walk")
D.b2z=new C.agi(2,"pound")
D.b2A=new C.agi(3,"drum")
D.hMu=new C.a26(0,"greet")
D.b2B=new C.a26(1,"teach")
D.aed=new C.a26(2,"ask")
D.hMv=new C.a26(3,"feedback")
D.b2C=new C.a26(4,"end")
D.XQ=new C.a2p(0,"intro")
D.XR=new C.a2p(1,"asking")
D.Br=new C.a2p(2,"reacting")
D.aep=new C.a2p(3,"driving")
D.aeq=new C.a2p(4,"arrived")
D.aey=new C.aMe(0,"projects")
D.b31=new C.aMe(1,"cashier")
D.hOA=new C.aMe(2,"familyTree")})()};
(a=>{a["1FjFETAWVGMKeY5GmYnocXftnnw="]=a.current})($__dart_deferred_initializers__);